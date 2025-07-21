# BMAD-WARP Integration Guide

This guide explains how to integrate BMAD Method with WARP Terminal Editor's agentic development environment.

## Overview

WARP is an advanced terminal editor with built-in agentic capabilities for AI-assisted development. The BMAD-WARP integration brings the power of BMAD's structured agent framework to WARP's native AI features.

## Key Features

### 1. Multi-Agent Management
- **Concurrent Agents**: Run multiple BMAD agents simultaneously
- **Agent Notifications**: Agents can notify when user input is needed
- **Context Sharing**: Agents share context for seamless collaboration
- **Model Selection**: Choose different AI models per agent

### 2. Workflow Integration
- **WARP Drive Workflows**: BMAD workflows mapped to WARP's workflow system
- **Sequential & Parallel Execution**: Support for complex workflow patterns
- **Error Recovery**: Automatic retry and recovery mechanisms
- **Context Propagation**: Maintain context across workflow stages

### 3. Enhanced Agent Features
- **Natural Language Activation**: Use natural language to trigger agents
- **Context-Aware Assistance**: Proactive AI help based on development context
- **Persistent Context**: Memory Bank integration for session continuity
- **Interactive Notebooks**: Jupyter-style notebooks for examples and tutorials

## Installation

### Quick Install

```bash
npx bmad-method install --ide warp
```

### Manual Install

1. Clone the BMAD repository:
```bash
git clone https://github.com/bmadcode/bmad-method.git
cd bmad-method
```

2. Run the installer with WARP option:
```bash
npm run install:bmad -- --ide warp
```

## Directory Structure

After installation, WARP integration creates the following structure:

```
.warp/
├── config.yaml           # Main WARP configuration
├── agents/              # Agent definitions
│   ├── manifest.yaml    # Agent registry
│   ├── analyst.yaml     # Individual agent configs
│   ├── pm.yaml
│   ├── architect.yaml
│   ├── dev.yaml
│   └── qa.yaml
├── workflows/           # Workflow definitions
│   ├── fullstack-agile-workflow.yaml
│   └── quick-build-workflow.yaml
├── rules/              # Agent activation rules
│   └── bmad-rules.yaml
├── prompts/            # System prompts
│   ├── system.md
│   └── context-template.md
├── notebooks/          # Interactive notebooks
│   └── bmad-examples.ipynb
├── env/               # Environment configuration
│   └── bmad.env
└── context/           # Persistent context storage
```

## Usage

### Activating Agents

BMAD agents can be activated in WARP using multiple methods:

1. **Command Syntax**: `@agent-name` (e.g., `@dev`, `@analyst`)
2. **BMAD Command**: `/bmad agent-name` (e.g., `/bmad architect`)
3. **Natural Language**: WARP detects intent and suggests appropriate agents

### Running Workflows

Execute BMAD workflows directly in WARP:

```bash
/run fullstack-agile-workflow
```

### Multi-Agent Conversations

WARP supports concurrent agent conversations:

```
@analyst help me understand the requirements
@architect design a solution for this
@dev implement the authentication module
```

### Context Persistence

WARP automatically maintains context using BMAD's Memory Bank:
- Project context is preserved across sessions
- Technical decisions are tracked
- Active tasks are maintained
- Progress is continuously updated

## Configuration

### Agent Configuration

Each agent in `.warp/agents/` has:
- Multi-agent capabilities configuration
- Model preferences and selection strategy
- Notification triggers
- Context management settings
- Tool integrations

### Workflow Configuration

Workflows in `.warp/workflows/` define:
- Execution mode (sequential/parallel)
- Error handling strategies
- Agent coordination rules
- Integration points with Memory Bank

### Environment Variables

Configure in `.warp/env/bmad.env`:
- `DEFAULT_MODEL`: Default AI model for agents
- `ENABLE_NOTIFICATIONS`: Agent notification settings
- `ENABLE_CONTEXT_PERSISTENCE`: Memory Bank integration
- `AUTO_WORKFLOWS`: Automatic workflow triggers

## Advanced Features

### Custom Agent Rules

Create custom activation rules in `.warp/rules/`:

```yaml
rules:
  custom-trigger:
    pattern: "when I mention testing"
    action: "activate-agent"
    params: { agent: "qa" }
```

### Interactive Notebooks

WARP notebooks in `.warp/notebooks/` provide:
- Live agent demonstrations
- Workflow tutorials
- Code playground for testing
- Documentation browser

### Model Selection

Configure model preferences per agent:

```yaml
models:
  default: gpt-4
  allowed:
    - gpt-4
    - claude-3
    - gemini-pro
  selection-strategy: auto
```

## Troubleshooting

### Agent Not Activating
1. Check `.warp/agents/manifest.yaml` for agent registration
2. Verify agent file exists in `.warp/agents/`
3. Check activation rules in `.warp/rules/`

### Context Not Persisting
1. Verify Memory Bank is enabled in environment
2. Check `.warp/context/` directory permissions
3. Ensure `ENABLE_CONTEXT_PERSISTENCE=true` in env

### Workflow Failures
1. Check workflow definition in `.warp/workflows/`
2. Verify all required agents are available
3. Check error logs for specific failure reasons

## Best Practices

1. **Use Natural Language**: WARP excels at understanding intent
2. **Leverage Multi-Agent**: Use multiple agents for complex tasks
3. **Maintain Context**: Regular Memory Bank updates ensure continuity
4. **Interactive Development**: Use notebooks for experimentation
5. **Custom Workflows**: Create project-specific workflows

## Integration with BMAD Features

### Memory Bank
- Automatically integrated with WARP's context system
- Updates persist across sessions
- Accessible to all agents

### ADRs (Architecture Decision Records)
- Tracked within WARP workflows
- Accessible via agent commands
- Integrated with decision-making processes

### Development Journals
- Automatically created during WARP sessions
- Tracked in Memory Bank
- Available for retrospectives

## Future Enhancements

- Visual workflow designer for WARP
- Enhanced notebook integration
- Real-time collaboration features
- Extended model support
- Custom agent training

## Support

For issues or questions:
- BMAD Discord: [Join Community](https://discord.gg/gk8jAdXWmj)
- GitHub Issues: [Report Issues](https://github.com/bmadcode/bmad-method/issues)
- WARP Documentation: [docs.warp.dev](https://docs.warp.dev)