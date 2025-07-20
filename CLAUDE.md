# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

BMAD-METHOD (Breakthrough Method of Agile AI-Driven Development) is a natural language AI agent framework that orchestrates collaborative AI agents for software development and other domains. The entire framework is markdown-based with no code in the core framework.

## Key Architecture

### Multi-Agent System
- **Location**: `bmad-core/agents/` - Individual AI personas with specific roles
- **Agent Teams**: `bmad-core/agent-teams/` - Bundled collections of agents
- **Workflows**: `bmad-core/workflows/` - Prescribed sequences for different project types
- **Templates**: `bmad-core/templates/` - Reusable document templates (PRD, Architecture, etc.)
- **Tasks**: `bmad-core/tasks/` - Specific repeatable actions
- **Data**: `bmad-core/data/` - Knowledge base, technical preferences, coding standards, and scaffolding preferences
- **Checklists**: `bmad-core/checklists/` - Quality assurance and validation checklists for agents

### Two-Phase Development Approach
1. **Planning Phase** (Web UI): Creates PRDs and Architecture documents
2. **Development Phase** (IDE): Converts plans into hyper-detailed implementation stories

### V4 Enhanced Features
- **Memory Bank Pattern**: Persistent AI context management across development sessions (`docs/memory-bank/`)
- **Architecture Decision Records (ADRs)**: Comprehensive decision tracking system (`docs/adr/`)
- **Development Journals**: Session documentation and progress tracking (`docs/devJournal/`)
- **Project Scaffolding Standards**: Standardized directory structures and organizational patterns
- **Enhanced Agent Capabilities**: Session kickoff, comprehensive commit/PR workflows, sprint reviews
- **Context Persistence**: Eliminates context loss between development sessions

### Important Files
- `bmad-web-build.js` - Builds bundled text files for web UI consumption
- `bmad-installer.js` - Installs BMAD into other projects
- `bmad-version.js` - Version management utilities
- `settings.yaml` - Core framework configuration

## Essential Commands

### Development
```bash
# Install dependencies
npm install

# Build for web UI (creates bundled text files)
npm run build:web

# Build development version (for PR testing)
npm run build:dev

# Run installer locally
node ./tools/bmad-installer.js

# Format code
npm run format

# Check formatting
npm run format:check

# Run validation scripts
npm run validate
```

### Version Management
```bash
# Show current version
node ./tools/bmad-version.js

# Sync version across all files
node ./tools/bmad-version.js --sync
```

### Release Process
Releases are automated via semantic-release. Commits should follow conventional commit format:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `chore:` for maintenance tasks

## Working with Agents and Workflows

### Adding/Modifying Agents
1. Agents are in `bmad-core/agents/[agent-name]/`
2. Each agent has `agent.yaml` (configuration) and `agent-system-prompt.md` (instructions)
3. Agents can reference templates, tasks, and tools
4. When modifying agents, ensure consistency with their role in workflows

### Working with Workflows
1. Workflows are in `bmad-core/workflows/[workflow-name].yaml`
2. They define sequences of agent interactions
3. Reference agents by their IDs from the agent definitions
4. Include handoff instructions between agents

### Templates and Tasks
- Templates (`bmad-core/templates/`) provide document structures using YAML format with embedded LLM instructions
- Tasks (`bmad-core/tasks/`) define specific repeatable actions including Memory Bank, ADR, and journal management
- Checklists (`bmad-core/checklists/`) provide quality assurance and validation workflows
- Data files (`bmad-core/data/`) include knowledge base, coding standards, technical preferences, and project scaffolding preferences
- All components are referenced by agents and can be customized per project

### Key Data Files
- `bmad-kb.md` - Core knowledge base with BMad concepts and workflows
- `technical-preferences.md` - User's preferred technologies and patterns
- `coding-standards.md` - Code quality standards and security principles
- `project-scaffolding-preference.md` - Standardized project structure guidelines
- `twelve-factor-principles.md` - Cloud-native application principles
- `microservice-patterns.md` - Microservice architecture patterns

## Testing and Validation

Since this is a natural language framework, there are no unit tests. Quality is ensured through:
1. Agent checklists and validation prompts
2. Workflow review cycles
3. Validation scripts that check YAML and markdown formatting

## Important Considerations

1. **Natural Language Focus**: All core framework components are markdown/YAML - no code
2. **Installer Pattern**: BMAD is designed to be installed into other projects, not run standalone
3. **Web UI Build**: The `build:web` command creates special bundled files for ChatGPT/Gemini consumption
4. **Expansion Packs**: The framework supports domain-specific extensions (game dev, DevOps, etc.)
5. **Document Sharding**: Large documents are automatically broken down into manageable pieces
6. **Memory Bank Integration**: Projects should initialize Memory Bank structure for context persistence
7. **ADR Documentation**: Important architectural decisions should be documented using ADR templates
8. **Project Scaffolding**: New projects should follow standardized directory structures from project-scaffolding-preference.md
9. **Agent Dependencies**: Agents now include enhanced capabilities for session management, context persistence, and quality workflows

## Working with V4 Features

### Memory Bank Usage
- Use `*initialize-memory-bank` task to set up persistent context structure
- Agents reference Memory Bank during session kickoff for full project context
- Update Memory Bank throughout development to maintain current state

### ADR Management
- Use `*create-adr` task for documenting architectural decisions
- ADRs are stored in `docs/adr/` and linked from Memory Bank system
- Reference ADRs in development stories and architecture documentation

### Development Journals
- Use `*create-dev-journal` task to document development sessions
- Journals capture progress, decisions, and insights for future reference
- Stored in `docs/devJournal/` organized by date/session

### Session Management
- Use `*session-kickoff` for proper session initialization with full context
- `*comprehensive-commit` and `*comprehensive-pr` for enhanced git workflows
- `*sprint-review` for comprehensive retrospectives and progress assessment

## GitHub Actions

The repository uses automated workflows for:
- CI/CD with semantic release
- Version syncing across documentation
- Changelog generation
- NPM publishing

When making changes, ensure they pass the format checks and validation scripts before committing.