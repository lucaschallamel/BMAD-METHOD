# Memory Bank Guide

## Overview

The Memory Bank pattern is BMad's solution to one of the most significant challenges in AI-assisted development: maintaining context and continuity across multiple development sessions. By creating a persistent, structured knowledge repository, the Memory Bank ensures that AI agents can quickly understand project state, architectural decisions, and development progress regardless of when they join the project or how much time has passed since the last session.

## What is the Memory Bank?

The Memory Bank is a standardized directory structure (`docs/memory-bank/`) containing five core documents that capture different aspects of project knowledge:

1. **projectContext.md** - Business context and project understanding
2. **techContext.md** - Technical architecture and implementation details
3. **systemPatterns.md** - Established patterns and conventions
4. **activeContext.md** - Current development state and priorities
5. **progress.md** - Development milestones and completed work

## Why Use the Memory Bank?

### Context Persistence

- Eliminates the need to re-explain project background in every session
- Maintains understanding of business requirements and constraints
- Preserves technical decisions and their rationale

### Knowledge Continuity

- Captures architectural patterns and conventions as they evolve
- Documents lessons learned and best practices discovered
- Maintains awareness of project-specific constraints and requirements

### Efficient Onboarding

- New team members can quickly understand project state
- AI agents can immediately access full project context
- Reduces ramp-up time for both humans and AI assistants

### Decision Tracking

- Links to Architecture Decision Records (ADRs) for comprehensive context
- Maintains awareness of why certain approaches were chosen
- Prevents re-litigating previously resolved decisions

## Memory Bank Structure

### projectContext.md

**Purpose**: Core business understanding and project fundamentals

**Content includes:**

- Project vision and objectives
- Target audience and user personas
- Business constraints and requirements
- Key stakeholders and decision makers
- Success metrics and KPIs
- Competitive landscape awareness

**When to update:**

- Project requirements change
- New stakeholders are identified
- Business priorities shift
- User feedback changes understanding

### techContext.md

**Purpose**: Technical architecture and implementation details

**Content includes:**

- System architecture overview
- Technology stack and frameworks
- Key design patterns and approaches
- Infrastructure and deployment details
- Integration points and external dependencies
- Performance requirements and constraints

**When to update:**

- Architectural decisions are made
- New technologies are adopted
- Infrastructure changes occur
- Performance requirements evolve

### systemPatterns.md

**Purpose**: Established patterns and conventions

**Content includes:**

- Coding standards and style guides
- Naming conventions and file organization
- Error handling patterns
- Testing approaches and strategies
- Security patterns and practices
- Code review guidelines

**When to update:**

- New patterns are established
- Conventions are refined or changed
- Best practices are discovered
- Team standards evolve

### activeContext.md

**Purpose**: Current development state and immediate priorities

**Content includes:**

- Current sprint objectives
- Active development streams
- Immediate priorities and blockers
- Recent decisions and their context
- Open questions and areas of investigation
- Next planned features or improvements

**When to update:**

- Sprint planning occurs
- Priorities change
- Blockers are encountered or resolved
- New questions or investigations arise

### progress.md

**Purpose**: Development milestones and historical progress

**Content includes:**

- Completed features and milestones
- Key achievements and breakthroughs
- Lessons learned from completed work
- Metrics and performance data
- Release history and versioning
- Retrospective insights

**When to update:**

- Features are completed
- Milestones are reached
- Sprint retrospectives occur
- Significant lessons are learned

## Getting Started with Memory Bank

### Initial Setup

1. **Initialize the Memory Bank**

   ```
   Use the `*initialize-memory-bank` command with any BMad agent
   This creates the basic directory structure and template files
   ```

2. **Populate Initial Context**

   ```
   Fill in projectContext.md with business understanding
   Document techContext.md with current architecture
   Establish systemPatterns.md with existing conventions
   Set activeContext.md with current priorities
   Initialize progress.md with any completed work
   ```

3. **Integrate with Workflows**
   ```
   Reference Memory Bank during session kickoffs
   Update during development sessions
   Review during QA processes
   Validate during sprint reviews
   ```

### Daily Usage Patterns

#### Session Start

- Use `*session-kickoff` to load Memory Bank context
- Review activeContext.md for current priorities
- Check for any updates since last session
- Update activeContext.md with session objectives

#### During Development

- Reference techContext.md for architectural guidance
- Follow patterns established in systemPatterns.md
- Update progress.md as work is completed
- Document new patterns or decisions as they emerge

#### Session End

- Update activeContext.md with current state
- Document progress in progress.md
- Note any new patterns in systemPatterns.md
- Update technical context if architecture evolved

#### Sprint Boundaries

- Comprehensive review of all Memory Bank documents
- Update progress.md with sprint achievements
- Refresh activeContext.md with new priorities
- Validate technical context accuracy

## Best Practices

### Content Quality

- **Be Specific**: Avoid vague statements; include concrete details
- **Stay Current**: Regular updates prevent information decay
- **Include Context**: Explain not just what, but why decisions were made
- **Link References**: Connect to ADRs, documentation, and external resources

### Maintenance Patterns

- **Little and Often**: Small, frequent updates are better than large, infrequent ones
- **Team Responsibility**: All team members should contribute to Memory Bank maintenance
- **Review Cycles**: Regular reviews ensure accuracy and completeness
- **Pruning**: Remove outdated information to prevent confusion

### Integration with Other Systems

- **ADR Integration**: Link to relevant Architecture Decision Records
- **Story References**: Connect to development stories and epics
- **Documentation Links**: Reference external documentation and resources
- **Version Control**: Treat Memory Bank as code - version control all changes

## Advanced Usage

### Multi-Project Memory Banks

For teams working on multiple projects:

- Maintain separate Memory Banks per project
- Create shared patterns document for common approaches
- Cross-reference related projects and shared components

### Team Collaboration

- Establish ownership patterns for different Memory Bank sections
- Use pull request reviews for significant Memory Bank changes
- Include Memory Bank updates in definition of done
- Regular team reviews of Memory Bank accuracy

### Automation Opportunities

- Automatic updates from development tools and CI/CD systems
- Integration with project management tools for progress tracking
- Automated validation of Memory Bank content accuracy
- Notifications when Memory Bank content becomes stale

## Troubleshooting

### Common Issues

**Memory Bank becomes outdated:**

- Solution: Establish regular review cycles and update responsibilities
- Prevention: Include Memory Bank updates in sprint planning and retrospectives

**Information overload:**

- Solution: Focus on essential context; avoid unnecessary detail
- Prevention: Regular pruning of outdated or irrelevant information

**Inconsistent updates:**

- Solution: Establish clear ownership and update responsibilities
- Prevention: Include Memory Bank maintenance in team processes

**Conflicting information:**

- Solution: Regular validation against actual project state
- Prevention: Single source of truth principles and conflict resolution processes

## Memory Bank Templates

The BMad framework includes templates for each Memory Bank component:

- `projectContext-tmpl.yaml` - Business context template
- `techContext-tmpl.yaml` - Technical context template
- `systemPatterns-tmpl.yaml` - Patterns documentation template
- `activeContext-tmpl.yaml` - Current state template
- `progress-tmpl.yaml` - Progress tracking template

These templates provide structure and guidance for creating comprehensive Memory Bank documentation that integrates seamlessly with BMad workflows and agent capabilities.

## Related Documentation

- [ADR Guide](adr-guide.md) - Architecture Decision Records
- [Project Scaffolding Guide](project-scaffolding-guide.md) - Standard project structures
- [Core Architecture](core-architecture.md) - Technical framework details
- [User Guide](../bmad-core/user-guide.md) - Complete BMad workflow documentation
