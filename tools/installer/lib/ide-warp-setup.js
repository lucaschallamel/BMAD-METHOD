const path = require('path')
const fs = require('fs-extra')
const yaml = require('js-yaml')
const chalk = require('chalk')
const fileManager = require('./file-manager')
const { extractYamlFromAgent } = require('../../lib/yaml-utils')

class WarpSetup {
  constructor() {
    this.warpConfig = null
  }

  async loadWarpConfiguration() {
    if (this.warpConfig) return this.warpConfig

    try {
      const configPath = path.join(__dirname, '..', 'config', 'warp', 'warp-integration.yaml')
      const configContent = await fs.readFile(configPath, 'utf8')
      this.warpConfig = yaml.load(configContent)
      return this.warpConfig
    } catch (error) {
      console.error('Failed to load WARP configuration:', error)
      throw error
    }
  }

  async setup(installDir, selectedAgent = null) {
    console.log(chalk.blue('\n🚀 Setting up WARP Terminal Editor integration...'))
    
    const config = await this.loadWarpConfiguration()
    
    // Create WARP directory structure
    await this.createDirectoryStructure(installDir, config)
    
    // Setup configuration files
    await this.setupConfigurationFiles(installDir, config)
    
    // Setup agents
    await this.setupAgents(installDir, selectedAgent)
    
    // Setup workflows
    await this.setupWorkflows(installDir)
    
    // Setup rules
    await this.setupRules(installDir)
    
    // Setup prompts
    await this.setupPrompts(installDir)
    
    // Setup notebooks
    await this.setupNotebooks(installDir)
    
    // Setup environment
    await this.setupEnvironment(installDir)
    
    console.log(chalk.green('\n✓ WARP integration setup complete!'))
    console.log(chalk.dim('Your BMAD agents are now available in WARP\'s agentic framework'))
    
    return true
  }

  async createDirectoryStructure(installDir, config) {
    const directories = config['warp-integration'].installation.directories
    
    for (const dir of directories) {
      const fullPath = path.join(installDir, dir.path)
      await fileManager.ensureDirectory(fullPath)
      console.log(chalk.green(`✓ Created ${dir.path} - ${dir.description}`))
    }
  }

  async setupConfigurationFiles(installDir, config) {
    // Create main WARP config
    const mainConfigPath = path.join(installDir, '.warp', 'config.yaml')
    const mainConfigContent = config['warp-integration'].templates['warp-config'].content
      .replace('${BMAD_VERSION}', require('../../../package.json').version)
    
    await fileManager.writeFile(mainConfigPath, mainConfigContent)
    console.log(chalk.green('✓ Created WARP configuration'))
  }

  async setupAgents(installDir, selectedAgent) {
    const agentIds = selectedAgent ? [selectedAgent] : await this.getAllAgentIds(installDir)
    const agentManifest = { agents: {} }
    
    for (const agentId of agentIds) {
      const agentPath = await this.findAgentPath(agentId, installDir)
      
      if (agentPath) {
        const agentContent = await fileManager.readFile(agentPath)
        const agentConfig = await this.createWarpAgentConfig(agentId, agentContent, installDir)
        
        // Write individual agent configuration
        const warpAgentPath = path.join(installDir, '.warp', 'agents', `${agentId}.yaml`)
        await fileManager.writeFile(warpAgentPath, yaml.dump(agentConfig))
        
        // Add to manifest
        agentManifest.agents[agentId] = {
          name: agentConfig.agent.name,
          type: agentConfig.agent.type,
          path: `agents/${agentId}.yaml`
        }
        
        console.log(chalk.green(`✓ Created WARP agent: ${agentId}`))
      }
    }
    
    // Write agent manifest
    const manifestPath = path.join(installDir, '.warp', 'agents', 'manifest.yaml')
    await fileManager.writeFile(manifestPath, yaml.dump(agentManifest))
    console.log(chalk.green('✓ Created agent manifest'))
  }

  async createWarpAgentConfig(agentId, agentContent, installDir) {
    const yamlContent = extractYamlFromAgent(agentContent)
    let agentYaml = {}
    
    if (yamlContent) {
      try {
        agentYaml = yaml.load(yamlContent)
      } catch (error) {
        console.warn(`Failed to parse YAML for ${agentId}:`, error)
      }
    }
    
    // Map BMAD agent to WARP configuration
    const warpConfig = await this.loadWarpConfiguration()
    const agentMapping = warpConfig['warp-integration']['agent-mapping']['mapping-rules'][agentId] || {}
    
    return {
      agent: {
        id: agentId,
        name: agentYaml.agentName || agentId,
        type: agentMapping['warp-type'] || 'general-agent',
        version: '1.0.0',
        
        metadata: {
          title: agentYaml.title || agentId,
          description: agentYaml.description || '',
          icon: agentYaml.icon || '🤖',
          whenToUse: agentYaml.whenToUse || ''
        },
        
        warp: {
          'multi-agent': {
            enabled: true,
            'can-coordinate': true,
            'shared-context': true
          },
          
          models: {
            default: 'gpt-4',
            allowed: ['gpt-4', 'claude-3', 'gemini-pro'],
            'selection-strategy': 'auto'
          },
          
          notifications: {
            enabled: true,
            triggers: [
              'user-input-required',
              'task-completed',
              'error-occurred',
              'decision-needed'
            ]
          },
          
          context: {
            persistent: true,
            shared: true,
            includes: [
              'project-context',
              'memory-bank',
              'active-tasks',
              'conversation-history'
            ]
          }
        },
        
        capabilities: agentMapping.capabilities || [],
        
        tools: agentYaml.tools || [],
        
        activation: {
          commands: [`@${agentId}`, `/bmad ${agentId}`],
          triggers: this.extractTriggers(agentYaml),
          'context-triggers': this.extractContextTriggers(agentYaml)
        },
        
        behavior: {
          startup: agentYaml.startup || {},
          instructions: agentYaml.instructions || '',
          constraints: agentYaml.constraints || []
        },
        
        integrations: {
          'memory-bank': {
            enabled: true,
            'auto-update': true
          },
          workflows: agentYaml.workflows || [],
          templates: agentYaml.templates || [],
          tasks: agentYaml.tasks || []
        },
        
        'warp-drive': {
          notebooks: [
            `examples/${agentId}-examples.ipynb`,
            `tutorials/${agentId}-tutorial.ipynb`
          ],
          prompts: [
            `${agentId}-system.md`,
            `${agentId}-context.md`
          ],
          environment: {
            BMAD_AGENT: agentId,
            BMAD_VERSION: require('../../../package.json').version
          }
        }
      }
    }
  }

  extractTriggers(agentYaml) {
    const triggers = []
    
    if (agentYaml.whenToUse) {
      // Extract key phrases from whenToUse
      const phrases = agentYaml.whenToUse.toLowerCase().split(/[,;.]/)
      triggers.push(...phrases.map(p => p.trim()).filter(p => p.length > 3))
    }
    
    if (agentYaml.keywords) {
      triggers.push(...agentYaml.keywords)
    }
    
    return [...new Set(triggers)]
  }

  extractContextTriggers(agentYaml) {
    const contextTriggers = []
    
    // Extract from role definition
    if (agentYaml.roleDefinition) {
      if (agentYaml.roleDefinition.includes('architecture')) {
        contextTriggers.push('system-design-needed')
      }
      if (agentYaml.roleDefinition.includes('development')) {
        contextTriggers.push('implementation-required')
      }
      if (agentYaml.roleDefinition.includes('testing')) {
        contextTriggers.push('quality-assurance-needed')
      }
    }
    
    return contextTriggers
  }

  async setupWorkflows(installDir) {
    const workflowsDir = path.join(installDir, '.bmad-core', 'workflows')
    
    if (await fileManager.pathExists(workflowsDir)) {
      const glob = require('glob')
      const workflowFiles = glob.sync('*.yaml', { cwd: workflowsDir })
      
      for (const workflowFile of workflowFiles) {
        const workflowPath = path.join(workflowsDir, workflowFile)
        const workflowContent = await fileManager.readFile(workflowPath)
        
        try {
          const workflow = yaml.load(workflowContent)
          const warpWorkflow = await this.convertToWarpWorkflow(workflow)
          
          const warpWorkflowPath = path.join(installDir, '.warp', 'workflows', workflowFile)
          await fileManager.writeFile(warpWorkflowPath, yaml.dump(warpWorkflow))
          
          console.log(chalk.green(`✓ Created WARP workflow: ${path.basename(workflowFile, '.yaml')}`))
        } catch (error) {
          console.warn(`Failed to convert workflow ${workflowFile}:`, error)
        }
      }
    }
  }

  async convertToWarpWorkflow(bmadWorkflow) {
    return {
      workflow: {
        id: bmadWorkflow.id || 'unknown',
        name: bmadWorkflow.name || 'Unnamed Workflow',
        version: '1.0.0',
        type: bmadWorkflow.type || 'sequential',
        
        metadata: {
          description: bmadWorkflow.description || '',
          category: bmadWorkflow.category || 'general',
          tags: bmadWorkflow.tags || []
        },
        
        warp: {
          execution: {
            mode: 'sequential',
            timeout: 3600000, // 1 hour
            'retry-policy': {
              enabled: true,
              'max-attempts': 3,
              backoff: 'exponential'
            }
          },
          
          context: {
            propagation: true,
            isolation: false,
            persistence: true
          },
          
          'error-handling': {
            strategy: 'continue',
            notifications: true,
            'recovery-actions': ['retry', 'skip', 'manual-intervention']
          }
        },
        
        stages: bmadWorkflow.stages || [],
        
        agents: {
          primary: bmadWorkflow.primaryAgent || 'bmad-orchestrator',
          supporting: bmadWorkflow.supportingAgents || [],
          handoffs: bmadWorkflow.handoffs || []
        },
        
        triggers: {
          manual: [
            { command: `/run ${bmadWorkflow.id}` },
            { 'ui-action': `Run ${bmadWorkflow.name}` }
          ],
          automatic: [],
          conditional: []
        },
        
        integrations: {
          'memory-bank': {
            read: ['project-context', 'active-tasks'],
            write: ['progress', 'decisions']
          }
        }
      }
    }
  }

  async setupRules(installDir) {
    const rulesConfig = {
      version: '1.0',
      rules: {
        'agent-activation': {
          description: 'Rules for activating BMAD agents',
          patterns: [
            {
              pattern: '@(\\w+)',
              action: 'activate-agent',
              params: { agent: '$1' }
            },
            {
              pattern: '/bmad (\\w+)',
              action: 'activate-agent',
              params: { agent: '$1' }
            }
          ]
        },
        
        'context-detection': {
          description: 'Detect context for automatic agent activation',
          patterns: [
            {
              context: 'error-in-code',
              action: 'suggest-agent',
              params: { agent: 'dev' }
            },
            {
              context: 'planning-discussion',
              action: 'suggest-agent',
              params: { agent: 'analyst' }
            }
          ]
        },
        
        'workflow-triggers': {
          description: 'Automatic workflow triggers',
          patterns: [
            {
              event: 'new-project',
              action: 'suggest-workflow',
              params: { workflow: 'fullstack-agile-workflow' }
            }
          ]
        }
      }
    }
    
    const rulesPath = path.join(installDir, '.warp', 'rules', 'bmad-rules.yaml')
    await fileManager.writeFile(rulesPath, yaml.dump(rulesConfig))
    console.log(chalk.green('✓ Created WARP rules configuration'))
  }

  async setupPrompts(installDir) {
    // Create system prompt
    const systemPrompt = `# BMAD System Prompt for WARP

You are integrated with the BMAD Method (Breakthrough Method of Agile AI-Driven Development) framework.

## Core Principles

1. **Agent-Based Development**: Each agent has specific roles and responsibilities
2. **Context Persistence**: Maintain context across sessions using Memory Bank
3. **Structured Workflows**: Follow established workflows for consistent results
4. **Quality First**: Emphasis on comprehensive planning before implementation

## Available Agents

- **bmad-orchestrator**: Coordinates between agents and manages workflows
- **analyst**: Requirements analysis and project planning
- **pm**: Project management and sprint coordination
- **architect**: System design and technical architecture
- **dev**: Implementation and coding
- **qa**: Quality assurance and testing

## Activation

Agents can be activated using:
- @{agent-name} (e.g., @dev)
- /bmad {agent-name} (e.g., /bmad architect)

## Context Management

Always check and update the Memory Bank for:
- Project context
- Technical decisions
- Active tasks
- Progress tracking
`

    const systemPromptPath = path.join(installDir, '.warp', 'prompts', 'system.md')
    await fileManager.writeFile(systemPromptPath, systemPrompt)
    console.log(chalk.green('✓ Created system prompt'))
    
    // Create context prompt template
    const contextPrompt = `# Context Template for WARP

## Current Project
{{project_name}}

## Active Context
{{active_context}}

## Recent Decisions
{{recent_decisions}}

## Current Tasks
{{current_tasks}}

## Technical Stack
{{tech_stack}}
`

    const contextPromptPath = path.join(installDir, '.warp', 'prompts', 'context-template.md')
    await fileManager.writeFile(contextPromptPath, contextPrompt)
    console.log(chalk.green('✓ Created context prompt template'))
  }

  async setupNotebooks(installDir) {
    // Create example notebook structure
    const notebookExample = {
      cells: [
        {
          cell_type: 'markdown',
          metadata: {},
          source: [
            '# BMAD-WARP Integration Examples\n',
            '\n',
            'This notebook demonstrates how to use BMAD agents within WARP.\n'
          ]
        },
        {
          cell_type: 'markdown',
          metadata: {},
          source: [
            '## Activating Agents\n',
            '\n',
            'You can activate agents using the @ syntax:\n',
            '\n',
            '```\n',
            '@analyst help me plan a new feature\n',
            '```\n'
          ]
        },
        {
          cell_type: 'markdown',
          metadata: {},
          source: [
            '## Running Workflows\n',
            '\n',
            'Execute BMAD workflows directly:\n',
            '\n',
            '```\n',
            '/run fullstack-agile-workflow\n',
            '```\n'
          ]
        }
      ],
      metadata: {
        kernelspec: {
          display_name: 'WARP',
          language: 'text',
          name: 'warp'
        }
      },
      nbformat: 4,
      nbformat_minor: 5
    }
    
    const notebookPath = path.join(installDir, '.warp', 'notebooks', 'bmad-examples.ipynb')
    await fileManager.writeFile(notebookPath, JSON.stringify(notebookExample, null, 2))
    console.log(chalk.green('✓ Created example notebook'))
  }

  async setupEnvironment(installDir) {
    const envConfig = `# BMAD-WARP Environment Configuration

# BMAD Configuration
BMAD_VERSION=${require('../../../package.json').version}
BMAD_HOME=.bmad-core

# WARP Configuration
WARP_MULTI_AGENT=true
WARP_CONTEXT_SHARING=true
WARP_MODEL_SELECTION=true

# Default Models
DEFAULT_MODEL=gpt-4
FALLBACK_MODEL=gpt-3.5-turbo

# Feature Flags
ENABLE_NOTIFICATIONS=true
ENABLE_CONTEXT_PERSISTENCE=true
ENABLE_AUTO_WORKFLOWS=true

# Integration Settings
MEMORY_BANK_ENABLED=true
ADR_TRACKING_ENABLED=true
AUTO_DOCUMENTATION=true
`

    const envPath = path.join(installDir, '.warp', 'env', 'bmad.env')
    await fileManager.writeFile(envPath, envConfig)
    console.log(chalk.green('✓ Created environment configuration'))
  }

  async findAgentPath(agentId, installDir) {
    const possiblePaths = [
      path.join(installDir, '.bmad-core', 'agents', `${agentId}.md`),
      path.join(installDir, 'agents', `${agentId}.md`)
    ]

    for (const agentPath of possiblePaths) {
      if (await fileManager.pathExists(agentPath)) {
        return agentPath
      }
    }

    return null
  }

  async getAllAgentIds(installDir) {
    const glob = require('glob')
    const allAgentIds = []

    let agentsDir = path.join(installDir, '.bmad-core', 'agents')
    if (!(await fileManager.pathExists(agentsDir))) {
      agentsDir = path.join(installDir, 'agents')
    }

    if (await fileManager.pathExists(agentsDir)) {
      const agentFiles = glob.sync('*.md', { cwd: agentsDir })
      allAgentIds.push(...agentFiles.map((file) => path.basename(file, '.md')))
    }

    return [...new Set(allAgentIds)]
  }
}

module.exports = new WarpSetup()