# WARP Terminal Editor - BMAD Method User Manual

This manual provides a comprehensive guide to using the BMAD Method within WARP Terminal Editor's agentic development environment.

## Table of Contents

1. [Installation & Setup](#installation--setup)
2. [Getting Started](#getting-started)
3. [Agent Activation Methods](#agent-activation-methods)
4. [Multi-Agent Conversations](#multi-agent-conversations)
5. [Running Workflows](#running-workflows)
6. [Memory Bank & Context](#memory-bank--context)
7. [Interactive Features](#interactive-features)
8. [Customization](#customization)
9. [Natural Language Understanding](#natural-language-understanding)
10. [Error Handling](#error-handling)
11. [Progress Tracking](#progress-tracking)
12. [Quick Reference](#quick-reference)
13. [Advanced Features](#advanced-features)
14. [Troubleshooting](#troubleshooting)

## Installation & Setup

### Initial Installation

Run the BMAD installer with WARP support:

```bash
npx bmad-method install --ide warp
```

### Installation Output

You'll see confirmation as WARP integration is set up:

```bash
🚀 Setting up WARP Terminal Editor integration...
✓ Created .warp/ - Root WARP configuration directory
✓ Created .warp/agents/ - Agent definitions and configurations
✓ Created .warp/workflows/ - Workflow definitions
✓ Created .warp/rules/ - Agent activation rules
✓ Created .warp/prompts/ - System prompts and templates
✓ Created .warp/notebooks/ - Interactive notebooks
✓ Created .warp/env/ - Environment configuration
✓ Created .warp/context/ - Persistent context storage
✓ Created WARP configuration
✓ Created WARP agent: bmad-orchestrator
✓ Created WARP agent: analyst
✓ Created WARP agent: pm
✓ Created WARP agent: architect
✓ Created WARP agent: dev
✓ Created WARP agent: qa
✓ Created agent manifest
✓ Created WARP workflow: fullstack-agile-workflow
✓ Created WARP workflow: quick-build-workflow
✓ Created WARP rules configuration
✓ Created system prompt
✓ Created context prompt template
✓ Created example notebook
✓ Created environment configuration

✓ WARP integration setup complete!
Your BMAD agents are now available in WARP's agentic framework
```

## Getting Started

### First Session

When you first open WARP after installation:

```bash
Welcome to BMAD-WARP Integration!

Available agents:
- @orchestrator - Team Coordinator 🎭
- @analyst - Requirements Analyst 🔍
- @pm - Project Manager 📋
- @architect - System Architect 🏗️
- @dev - Developer 💻
- @qa - Quality Assurance ✅

Type /help for commands or @ to see agents
```

### Session Initialization

For existing projects, WARP automatically loads context:

```bash
🧠 Loading Memory Bank...
✓ Project: E-commerce Platform
✓ Current Sprint: Sprint 3
✓ Active Tasks: 5
✓ Last Decision: Use PostgreSQL for main database

Ready to continue where you left off!
```

## Agent Activation Methods

### Method 1: @ Mentions

The simplest way to activate agents:

```bash
@analyst help me understand what this project needs
```

Response:
```bash
🔍 Analyst Agent Activated
Hello! I'm ready to help analyze your project requirements. Let me start by understanding...
```

### Method 2: BMAD Commands

Use explicit BMAD commands:

```bash
/bmad architect design a microservices architecture
```

Response:
```bash
🏗️ Architect Agent Activated
I'll help you design a microservices architecture. First, let me understand your system requirements...
```

### Method 3: Natural Language

WARP detects intent and suggests agents:

```bash
I need to implement user authentication
```

Response:
```bash
I notice you want to implement a feature. Would you like me to activate:
→ @dev for implementation
→ @architect for design guidance
→ @pm to create a user story

Just click or type your choice!
```

## Multi-Agent Conversations

### Concurrent Agent Sessions

Run multiple agents simultaneously:

```bash
# Terminal splits into multiple contexts
┌─ @analyst ─────────────────────────────────┐
│ 🔍 Analyzing requirements for cart feature  │
│ Key requirements identified:                │
│ - Add/remove items                         │
│ - Calculate totals                         │
│ - Apply discounts                          │
└────────────────────────────────────────────┘

┌─ @architect ───────────────────────────────┐
│ 🏗️ Designing cart service architecture     │
│ Recommended approach:                       │
│ - Separate cart microservice               │
│ - Redis for session storage                │
│ - Event-driven updates                     │
└────────────────────────────────────────────┘

┌─ @dev ─────────────────────────────────────┐
│ 💻 Ready to implement based on design       │
│ I'll create:                               │
│ - CartService class                        │
│ - Redis integration                        │
│ - REST API endpoints                       │
└────────────────────────────────────────────┘
```

### Agent Collaboration

Agents share context automatically:

```bash
@analyst the cart needs to support guest checkout

🔍 Analyst: Noted. Updating requirements...
🏗️ Architect: I'll adjust the design to support anonymous sessions
💻 Dev: I'll implement guest cart with session-based storage
```

### Agent Notifications

When agents need input:

```bash
🔔 Developer Agent: "I need clarification on the authentication method. Should I use JWT or OAuth2?"

Options:
[1] JWT with refresh tokens
[2] OAuth2 with provider integration
[3] Let me explain the differences
```

## Running Workflows

### Full Workflow Execution

Start a complete development workflow:

```bash
/run fullstack-agile-workflow
```

WARP displays real-time progress:

```bash
┌─ Fullstack Agile Workflow ─────────────────┐
│ ▶ Stage 1: Requirements Analysis     [✓]   │
│ ▶ Stage 2: Architecture Design       [✓]   │
│ ▶ Stage 3: Sprint Planning          [⏳]   │
│ ▶ Stage 4: Implementation           [ ]   │
│ ▶ Stage 5: Testing & QA             [ ]   │
└────────────────────────────────────────────┘

Current Agent: @pm (Sprint Planning)
Time Elapsed: 12 minutes
Next: Implementation with @dev
```

### Workflow Context Flow

Watch context pass between agents:

```bash
📤 Analyst → PM: "Requirements documented in /docs/prd.md"
📤 PM → Architect: "Sprint 1 focuses on authentication"
📤 Architect → Dev: "Use JWT with Redis session store"
📤 Dev → QA: "Implementation ready for testing"
```

### Quick Workflows

For rapid development:

```bash
/run quick-build-workflow --component user-profile

⚡ Quick Build Started
→ Analyzing requirements... ✓
→ Generating implementation... ✓
→ Creating tests... ✓
→ Documentation... ✓

Component ready in /src/components/user-profile/
```

## Memory Bank & Context

### Automatic Context Management

WARP maintains context automatically:

```bash
@dev I've completed the user service

📝 Updating Memory Bank...
✓ Progress: User service implementation complete
✓ New files: /src/services/user.service.js
✓ Tests: 24 passing
✓ Coverage: 92%
✓ Next task: Implement authentication middleware
```

### Viewing Memory Bank

Check current context:

```bash
/memory

┌─ Memory Bank Status ────────────────────────┐
│ Project: E-commerce Platform                │
│ Phase: Development                          │
│ Sprint: 3 of 5                             │
│                                            │
│ Recent Decisions:                          │
│ - Use PostgreSQL for data                 │
│ - JWT for authentication                   │
│ - Redis for caching                        │
│                                            │
│ Active Tasks:                              │
│ 1. ✓ User service (DONE)                   │
│ 2. ⏳ Auth middleware (IN PROGRESS)        │
│ 3. ○ Cart service (TODO)                   │
│ 4. ○ Payment integration (BLOCKED)         │
│ 5. ○ Email notifications (TODO)            │
└────────────────────────────────────────────┘
```

### Manual Context Updates

Add important decisions:

```bash
/memory add decision "Switch to GraphQL for API"

✓ Decision recorded in Memory Bank
🔔 All agents notified of architecture change
```

## Interactive Features

### Model Selection

#### Per-Agent Model Configuration

```bash
@dev --model claude-3 optimize this function

💻 Dev Agent (Claude-3): Analyzing function for optimization...
```

#### Global Model Settings

```bash
/settings model gpt-4

✓ Default model changed to GPT-4
Note: Individual agents may override this setting
```

### Interactive Notebooks

Access BMAD examples and tutorials:

```bash
/notebook bmad-examples
```

WARP opens notebook interface:

```bash
┌─ BMAD Examples Notebook ───────────────────┐
│ 1. Agent Activation Examples         ▶ Run │
│ 2. Workflow Demonstrations          ▶ Run │
│ 3. Memory Bank Usage                ▶ Run │
│ 4. Multi-Agent Collaboration        ▶ Run │
│ 5. Custom Workflow Creation         ▶ Run │
│ 6. Testing Strategies               ▶ Run │
└────────────────────────────────────────────┘

Select a section or type number to run
```

### Environment Variables

View and modify environment settings:

```bash
/env

Current Environment:
├── BMAD_VERSION: 4.31.0
├── DEFAULT_MODEL: gpt-4
├── ENABLE_NOTIFICATIONS: true
├── ENABLE_CONTEXT_PERSISTENCE: true
├── AUTO_WORKFLOWS: true
├── MEMORY_BANK_ENABLED: true
└── MAX_CONCURRENT_AGENTS: 5

Edit with: /env set <key> <value>
```

## Customization

### Creating Custom Rules

Add your own activation patterns:

```bash
/bmad add-rule "when I say 'test this' activate @qa"

✓ Custom rule added
Test: "test this login form"
Result: @qa will activate automatically
```

### Custom Agent Behaviors

Modify agent responses:

```bash
/bmad config dev --greeting "Yo! Ready to code! 🚀"

✓ Developer agent greeting updated
```

### Workflow Customization

Create project-specific workflows:

```bash
/bmad create-workflow rapid-prototype
- Add stages: ideation, poc, demo
- Assign agents: analyst, dev, pm
- Set duration: 2 hours

✓ Workflow 'rapid-prototype' created
```

## Natural Language Understanding

### Context-Aware Suggestions

WARP understands development context:

```bash
User: "This login form is ugly"

WARP: I notice you're discussing UI issues. Would you like me to:
  1. @analyst - Review UX requirements
  2. @architect - Discuss design system
  3. @dev - Implement UI improvements
  
Or just tell me what you'd like to do!
```

### Intelligent Routing

Based on your message content:

```bash
User: "The app crashes when users log out"

WARP: This seems like a bug. Activating @qa for investigation...

✅ QA Agent: I'll help debug this issue. Let me:
1. Check error logs
2. Reproduce the issue
3. Identify the root cause
```

### Command Inference

WARP infers your intent:

```bash
User: "Show me how authentication works"

WARP interprets as: @architect explain authentication
🏗️ Architect: Let me explain our authentication architecture...
```

## Error Handling

### Graceful Error Recovery

When errors occur:

```bash
@dev implement the payment service

⚠️ Error: Missing payment gateway configuration

📋 Dev Agent: I need the payment gateway credentials. Should I:
  1. Create a mock implementation for testing
  2. Wait for credentials
  3. Switch to @pm to add this to blockers
  
What would you prefer? [1/2/3]:
```

### Validation Warnings

Proactive issue detection:

```bash
@dev commit these changes

⚠️ Pre-commit checks failed:
- 3 linting errors
- 2 failing tests
- No PR description

Would you like me to:
→ Fix issues automatically
→ Show detailed errors
→ Commit anyway (not recommended)
```

### Recovery Suggestions

Intelligent recovery options:

```bash
❌ Build failed: Module not found 'user-service'

🔧 Suggested fixes:
1. Run: npm install
2. Check: Is user-service in package.json?
3. Verify: File path is correct
4. @architect: Review module architecture

Type number or let me fix it automatically
```

## Progress Tracking

### Sprint Progress

Visual progress indicators:

```bash
/progress

Current Sprint (Sprint 3 - User Management):
Authentication  ████████████████████ 100% ✓
User Service   ████████████░░░░░░░░  60% ⏳
Profile UI     ████████░░░░░░░░░░░░  40% ⏳
Cart Service   ████░░░░░░░░░░░░░░░░  20% 
Payment        ░░░░░░░░░░░░░░░░░░░░   0% 🔒

Overall: 44% Complete
Velocity: On Track
Blockers: 1 (Payment credentials)
```

### Task Tracking

Detailed task status:

```bash
/tasks

┌─ Active Tasks ──────────────────────────────┐
│ ID   Task                    Agent   Status │
│ T-23 User authentication     @dev    ✓ Done │
│ T-24 Session management     @dev    ⏳ 70%  │
│ T-25 Password reset         @dev    ○ Todo │
│ T-26 Email templates        @dev    ○ Todo │
│ T-27 Security audit         @qa     ⌛ Wait │
└────────────────────────────────────────────┘

Active: T-24 (2 hours elapsed)
```

### Burn-down Visualization

Sprint burn-down in terminal:

```bash
/burndown

Sprint 3 Burn-down:
120 |*
100 |  *
 80 |    *
 60 |      * ← Current
 40 |        *
 20 |          *
  0 |____________*
    M T W T F S S

Points: 60/120 remaining
Trend: On track
```

## Quick Reference

### Essential Commands

```bash
# Agent Commands
@<agent>              # Activate agent (e.g., @dev)
/bmad <agent>         # Alternative activation
/agents               # List all agents

# Workflow Commands  
/run <workflow>       # Execute workflow
/workflows            # List workflows
/stop                 # Stop current workflow

# Memory & Context
/memory               # View Memory Bank
/memory add <type>    # Add to Memory Bank
/context              # Show current context

# Progress & Tasks
/progress             # Sprint progress
/tasks                # Task list
/burndown             # Sprint burn-down

# Configuration
/settings             # View settings
/env                  # Environment vars
/notebook             # Open notebooks

# Help
/help                 # General help
/help <command>       # Command help
/examples             # Show examples
```

### Agent Quick Reference

| Agent | Trigger | Purpose | Icon |
|-------|---------|---------|------|
| orchestrator | @orchestrator | Team coordination | 🎭 |
| analyst | @analyst | Requirements analysis | 🔍 |
| pm | @pm | Project management | 📋 |
| architect | @architect | System design | 🏗️ |
| dev | @dev | Implementation | 💻 |
| qa | @qa | Quality assurance | ✅ |

### Keyboard Shortcuts

```bash
Ctrl+K    # Quick command palette
Ctrl+A    # Quick agent selector
Ctrl+W    # Workflow menu
Ctrl+M    # Memory Bank
Ctrl+/    # Help
Tab       # Auto-complete
↑/↓       # Command history
```

## Advanced Features

### Session Management

#### Saving Sessions

```bash
/session save my-feature-work

✓ Session saved: my-feature-work
Includes:
- All agent conversations
- Memory Bank state
- Active tasks
- Environment settings
```

#### Loading Sessions

```bash
/session load my-feature-work

✓ Session restored
Resuming with 3 active agents and 5 tasks
```

### Team Collaboration

When multiple developers use BMAD-WARP:

```bash
🔔 Team Update: John activated @architect for database redesign
🔔 Team Update: Sarah completed user service tests with @qa

Your @dev agent has access to their decisions in Memory Bank.

/team status

Active Team Members:
├── John - @architect (Database redesign)
├── Sarah - @qa (Testing user service)
└── You - @dev (Auth middleware)
```

### Custom Agent Creation

Create project-specific agents:

```bash
/bmad create-agent security-expert
- Base on: qa
- Add capabilities: penetration-testing, vulnerability-scanning
- Add tools: owasp-scanner, dependency-checker

✓ Agent 'security-expert' created
Activate with @security-expert
```

### Workflow Recording

Record workflows for reuse:

```bash
/record start my-deployment-flow

... perform your workflow steps ...

/record stop

✓ Workflow recorded: my-deployment-flow
Steps captured: 12
Agents used: pm, dev, qa, architect
Save as template? [Y/n]
```

### Performance Monitoring

Monitor BMAD-WARP performance:

```bash
/performance

┌─ Performance Metrics ───────────────────────┐
│ Response Times:                             │
│ - @dev: ~1.2s avg                          │
│ - @architect: ~2.1s avg                    │
│ - @qa: ~1.5s avg                           │
│                                            │
│ Token Usage (Today):                       │
│ - Input: 45,231                            │
│ - Output: 38,442                           │
│ - Cost: ~$2.34                             │
│                                            │
│ Cache Hit Rate: 78%                        │
│ Memory Bank Ops: 234                       │
└────────────────────────────────────────────┘
```

## Troubleshooting

### Common Issues

#### Agent Not Responding

```bash
Problem: @dev not responding

Solutions:
1. Check agent status: /status @dev
2. Restart agent: /restart @dev
3. Check logs: /logs @dev
4. Verify configuration: /config check
```

#### Context Lost

```bash
Problem: Agents don't remember previous work

Solutions:
1. Check Memory Bank: /memory status
2. Force sync: /memory sync
3. Verify persistence: /env get ENABLE_CONTEXT_PERSISTENCE
4. Check .warp/context/ permissions
```

#### Workflow Stuck

```bash
Problem: Workflow not progressing

Solutions:
1. Check status: /workflow status
2. Skip stage: /workflow skip
3. Force next: /workflow continue
4. Abort: /workflow abort
```

### Debug Mode

Enable detailed logging:

```bash
/debug on

🔧 Debug mode enabled
- Verbose logging active
- API calls shown
- Performance metrics visible
- Error details expanded
```

### Getting Help

Multiple help options:

```bash
/help                 # General help
/docs                 # Open documentation
/support              # Contact support
/discord              # Join BMAD Discord
/report-issue         # Report a bug
```

## Tips & Best Practices

1. **Start with Session Kickoff**: Always begin with `/memory` to load context
2. **Use Natural Language**: WARP understands intent better than rigid commands
3. **Leverage Multi-Agent**: Don't hesitate to use multiple agents simultaneously
4. **Trust the Workflow**: Let BMAD workflows guide your development process
5. **Update Memory Bank**: Keep context current for better agent responses
6. **Review Notifications**: Agent notifications often prevent issues
7. **Use Notebooks**: Interactive examples help learn advanced features
8. **Customize Gradually**: Start with defaults, customize as needed
9. **Monitor Progress**: Regular `/progress` checks keep projects on track
10. **Save Sessions**: For complex work, save sessions for easy resumption

---

This manual covers the complete BMAD-WARP experience. For additional support, join the [BMAD Discord](https://discord.gg/gk8jAdXWmj) or check the [WARP documentation](https://docs.warp.dev).