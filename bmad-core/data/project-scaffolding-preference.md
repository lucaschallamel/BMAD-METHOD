# Project Scaffolding Preferences

This document defines generic, technology-agnostic project scaffolding preferences that can be applied to any software project. These preferences promote consistency, maintainability, and best practices across different technology stacks.

## Documentation Structure

### Core Documentation
- **README**: Primary project documentation with setup instructions, architecture overview, and contribution guidelines
- **CHANGELOG**: Maintain detailed changelog following semantic versioning principles
- **LICENSE**: Clear licensing information for the project
- **Contributing Guidelines**: How to contribute, code standards, and review process

### BMAD Documentation Structure
- **Product Requirements Document (PRD)**:
  - Single source file: `docs/prd.md`
  - Can be sharded into `docs/prd/` directory by level 2 sections
  - Contains epics, stories, requirements
  
- **Architecture Documentation**:
  - Single source file: `docs/architecture.md` or `docs/brownfield-architecture.md`
  - Can be sharded into `docs/architecture/` directory
  - For brownfield: Document actual state including technical debt
  
- **Memory Bank** (AI Context Persistence):
  - Location: `docs/memory-bank/`
  - Core files: projectbrief.md, productContext.md, systemPatterns.md, techContext.md, activeContext.md, progress.md
  - Provides persistent context across AI sessions

### Architectural Documentation
- **Architecture Decision Records (ADRs)**: Document significant architectural decisions
  - Location: `docs/adr/`
  - When to create: Major dependency changes, pattern changes, integration approaches, schema modifications
  - Follow consistent ADR template (e.g., Michael Nygard format)
  - Number sequentially (e.g., adr-0001.md)
  - Maintain an index
  
### Development Documentation
- **Development Journals**: Track daily/session work, decisions, and challenges
  - Location: `docs/devJournal/`
  - Named with date format: `YYYYMMDD-NN.md`
  - Include work completed, decisions made, blockers encountered
  - Reference relevant ADRs and feature documentation
  - Create after significant work sessions

### Feature Documentation
- **Roadmap**: High-level project direction and planned features
  - Location: `docs/roadmap/`
  - Feature details in `docs/roadmap/features/`
- **Epics and Stories**:
  - Epics extracted from PRD to `docs/epics/`
  - Stories created from epics to `docs/stories/`
  - Follow naming: `epic-N-story-M.md`

## Source Code Organization

### Separation of Concerns
- **Frontend/UI**: Dedicated location for user interface components
- **Backend/API**: Separate backend logic and API implementations
- **Shared Utilities**: Common functionality used across layers
- **Configuration**: Centralized configuration management
- **Scripts**: Automation and utility scripts

### Testing Structure
- **Unit Tests**: Close to source code or in dedicated test directories
- **Integration Tests**: Test component interactions
- **End-to-End Tests**: Full workflow testing
- **Test Utilities**: Shared test helpers and fixtures
- **Test Documentation**: How to run tests, test strategies

## Project Root Structure

### Essential Files
- Version control ignore files (e.g., .gitignore)
- Editor/IDE configuration files
- Dependency management files
- Build/deployment configuration
- Environment configuration templates (never commit actual secrets)

### Standard Directories
```
/docs
  /adr           # Architecture Decision Records
  /devJournal    # Development journals  
  /memory-bank   # Persistent AI context (BMAD-specific)
  /prd           # Sharded Product Requirements Documents
  /architecture  # Sharded Architecture Documents
  /stories       # User stories (from epics)
  /epics         # Epic documents
  /api           # API documentation
  /roadmap       # Project roadmap and features

/src
  /[frontend]    # UI/frontend code
  /[backend]     # Backend/API code
  /[shared]      # Shared utilities
  /[config]      # Configuration

/tests
  /unit          # Unit tests
  /integration   # Integration tests
  /e2e           # End-to-end tests

/scripts         # Build, deployment, utility scripts
/tools           # Development tools and utilities
/.bmad          # BMAD-specific configuration and overrides
```

## Development Practices

### Code Organization
- Keep files focused and manageable (typically under 300 lines)
- Prefer composition over inheritance
- Avoid code duplication - check for existing implementations
- Use clear, consistent naming conventions throughout
- Document complex logic and non-obvious decisions

### Documentation Discipline
- Update documentation alongside code changes
- Document the "why" not just the "what"
- Keep examples current and working
- Review documentation in code reviews
- Maintain templates for consistency

### Security Considerations
- Never commit secrets or credentials
- Use environment variables for configuration
- Implement proper input validation
- Manage resources appropriately (close connections, free memory)
- Follow principle of least privilege
- Document security considerations

### Quality Standards
- All code must pass linting and formatting checks
- Automated testing at multiple levels
- Code review required before merging
- Continuous integration for all changes
- Regular dependency updates

## Accessibility & Inclusion

### Universal Design
- Consider accessibility from the start
- Follow established accessibility standards (e.g., WCAG)
- Ensure keyboard navigation support
- Provide appropriate text alternatives
- Test with assistive technologies

### Inclusive Practices
- Use clear, inclusive language in documentation
- Consider diverse user needs and contexts
- Document accessibility requirements
- Include accessibility in testing

## Database/Data Management

### Schema Management
- Version control all schema changes
- Use migration tools for consistency
- Document schema decisions in ADRs
- Maintain data dictionary
- Never make manual production changes

### Data Documentation
- Maintain current entity relationship diagrams
- Document data flows and dependencies
- Explain business rules and constraints
- Keep sample data separate from production

## Environment Management

### Environment Parity
- Development, test, and production should be as similar as possible
- Use same deployment process across environments
- Configuration through environment variables
- Document environment-specific settings
- Automate environment setup

### Local Development
- Provide scripted setup process
- Document all prerequisites
- Include reset/cleanup scripts
- Maintain environment templates
- Support multiple development environments

## Branching & Release Strategy

### Version Control
- Define clear branching strategy
- Use semantic versioning
- Tag all releases
- Maintain release notes
- Document hotfix procedures

### Release Process
- Automated build and deployment
- Staged rollout capabilities
- Rollback procedures documented
- Release communication plan
- Post-release verification

## Incident Management

### Incident Response
- Maintain incident log
- Document root cause analyses
- Update runbooks based on incidents
- Conduct retrospectives
- Share learnings across team

### Monitoring & Observability
- Define key metrics
- Implement appropriate logging
- Set up alerting thresholds
- Document troubleshooting guides
- Regular review of metrics

## Compliance & Governance

### Data Privacy
- Document data handling practices
- Implement privacy by design
- Regular compliance reviews
- Clear data retention policies
- User consent management

### Audit Trail
- Maintain change history
- Document decision rationale
- Track access and modifications
- Regular security reviews
- Compliance documentation

## BMAD-Specific Considerations

### Session Management
- **Session Kickoff**: Always start new AI sessions with proper context initialization
- **Memory Bank Maintenance**: Keep context files current throughout development
- **Dev Journal Creation**: Document significant work sessions
- **Sprint Reviews**: Regular quality and progress assessments

### Document Sharding
- **When to Shard**: Large PRDs and architecture documents (>1000 lines)
- **How to Shard**: By level 2 sections, maintaining index.md
- **Naming Convention**: Convert section headings to lowercase-dash-case
- **Tool Support**: Use markdown-tree-parser when available

### Brownfield vs Greenfield
- **Greenfield**: Start with PRD → Architecture → Implementation
- **Brownfield**: Document existing → Create focused PRD → Enhance
- **Documentation Focus**: Brownfield docs capture actual state, not ideal
- **Technical Debt**: Always document workarounds and constraints

## Best Practices Summary

1. **Simplicity First**: Choose the simplest solution that works
2. **Documentation as Code**: Treat documentation with same rigor as code
3. **Automate Everything**: If it's done twice, automate it
4. **Security by Default**: Consider security implications in every decision
5. **Test Early and Often**: Multiple levels of testing for confidence
6. **Continuous Improvement**: Regular retrospectives and improvements
7. **Accessibility Always**: Build inclusive solutions from the start
8. **Clean as You Go**: Maintain code quality continuously
9. **Context Persistence**: Maintain Memory Bank for AI continuity
10. **Reality Over Ideals**: Document what exists, not what should be