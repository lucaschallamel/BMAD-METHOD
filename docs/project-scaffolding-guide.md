# Project Scaffolding Guide

## Overview

Project scaffolding in the BMad Method refers to the standardized directory structures, organizational patterns, and foundational practices that ensure consistency, efficiency, and seamless integration across all BMad-powered projects. This guide provides comprehensive guidance on establishing and maintaining project structures that support effective AI-assisted development.

## What is Project Scaffolding?

Project scaffolding encompasses the foundational organizational elements that structure a project for success:

- **Directory Structure**: Standardized folder organization and naming conventions
- **Documentation Patterns**: Consistent approaches to project documentation
- **Integration Points**: Seamless connection with BMad systems (Memory Bank, ADRs, etc.)
- **Workflow Support**: Structures that facilitate BMad agent operations
- **Scalability Patterns**: Organizations that work from small projects to enterprise systems

## Why Standardized Scaffolding Matters

### Consistency Across Projects

- Predictable project organization reduces cognitive load
- Team members can quickly navigate any BMad project
- Tools and scripts work reliably across different projects
- Knowledge transfer between projects becomes seamless

### Efficiency and Speed

- Reduced setup time with established conventions
- Faster onboarding for new team members
- Automated tooling works reliably with standard structures
- Templates and generators can make assumptions about organization

### Integration with BMad Systems

- Memory Bank pattern requires specific directory locations
- ADR system depends on standardized documentation structure
- Agent workflows expect predictable file and folder patterns
- Build and deployment scripts work with consistent organization

### Scalability and Evolution

- Patterns that work for small projects scale to enterprise systems
- Organizational principles support growth and complexity
- Consistent structures facilitate refactoring and reorganization
- Standards evolve based on real-world usage and feedback

## Standard Directory Structure

### Core Documentation Structure

```
/docs
  /adr              # Architecture Decision Records
    /001-example.md # Individual ADR files
    /002-another.md

  /devJournal       # Development session documentation
    /2024-01/       # Organized by month
    /2024-02/

  /memory-bank      # Persistent AI context
    projectContext.md
    techContext.md
    systemPatterns.md
    activeContext.md
    progress.md

  /prd              # Sharded Product Requirements Documents
    /section1/
    /section2/

  /architecture     # Sharded Architecture Documents
    /overview/
    /detailed-design/
    /patterns/

  /api              # API documentation and specifications
  /runbooks         # Operational procedures and guides
  /design           # UI/UX designs and specifications
```

### Source Code Organization

```
/src              # Primary source code
  /components/    # Reusable components
  /services/      # Business logic and services
  /utils/         # Utility functions and helpers
  /types/         # Type definitions (TypeScript)
  /constants/     # Application constants
  /config/        # Configuration files

/tests            # Test files (mirrors src structure)
  /components/
  /services/
  /utils/
  /integration/
  /e2e/

/scripts          # Build, deployment, and utility scripts
/tools            # Development tools and helpers
```

### Configuration and Infrastructure

```
/config           # Environment and deployment configurations
  /environments/  # Environment-specific settings
  /deployment/    # Deployment configurations

/infra            # Infrastructure as Code
  /terraform/     # Terraform configurations
  /ansible/       # Ansible playbooks
  /docker/        # Docker configurations

/.github          # GitHub workflows and templates
  /workflows/     # CI/CD workflows
  /templates/     # Issue and PR templates
```

## Scaffolding Principles

### 1. Clarity and Discoverability

- **Descriptive Names**: Folder and file names clearly indicate their purpose
- **Logical Grouping**: Related items are organized together
- **Hierarchical Structure**: Information is organized from general to specific
- **Consistent Patterns**: Similar items follow similar organizational patterns

### 2. Separation of Concerns

- **Documentation vs Code**: Clear separation between documentation and implementation
- **Configuration vs Logic**: Environment and deployment configs separated from business logic
- **Tests vs Implementation**: Test code organized separately but mirroring source structure
- **Tools vs Application**: Development tools separated from application code

### 3. Scalability and Flexibility

- **Modular Organization**: Structure supports adding new modules and components
- **Depth Balance**: Not too shallow (everything in root) or too deep (excessive nesting)
- **Growth Accommodation**: Structure adapts as projects grow in size and complexity
- **Refactoring Support**: Organization facilitates moving and reorganizing code

### 4. Integration Support

- **BMad Compatibility**: Structure supports all BMad agents and workflows
- **Tool Integration**: Organization works well with development tools and IDEs
- **CI/CD Support**: Structure facilitates automated build and deployment processes
- **Documentation Generation**: Organization supports automated documentation tools

## Implementation Guide

### Starting a New Project

1. **Initialize Basic Structure**

   ```bash
   # Create core directories
   mkdir -p docs/{adr,devJournal,memory-bank,prd,architecture,api,runbooks,design}
   mkdir -p src/{components,services,utils,types,constants,config}
   mkdir -p tests/{components,services,utils,integration,e2e}
   mkdir -p {scripts,tools,config,infra}
   ```

2. **Initialize BMad Systems**

   ```
   Use `*initialize-memory-bank` to create Memory Bank structure
   Create first ADR documenting project scaffolding decisions
   Set up development journal structure
   ```

3. **Create Foundation Files**
   ```
   README.md - Project overview and getting started guide
   CONTRIBUTING.md - Contribution guidelines and processes
   .gitignore - Appropriate ignore patterns for technology stack
   package.json / requirements.txt / etc. - Dependency management
   ```

### Adapting Existing Projects

1. **Assess Current Structure**

   - Document existing organization patterns
   - Identify alignment gaps with BMad standards
   - Plan migration strategy for minimal disruption
   - Consider backward compatibility requirements

2. **Gradual Migration**

   - Start with documentation structure (docs/ folder)
   - Initialize Memory Bank and ADR systems
   - Gradually reorganize source code following patterns
   - Update build and deployment scripts as needed

3. **Team Communication**
   - Communicate changes and rationale to team
   - Provide migration guidance and support
   - Update development workflows and processes
   - Document new organizational patterns

## Technology-Specific Adaptations

### Frontend Applications (React, Vue, Angular)

```
/src
  /components/
    /ui/           # Pure UI components
    /business/     # Business logic components
    /layout/       # Layout and navigation components
  /hooks/          # Custom hooks (React)
  /composables/    # Composables (Vue)
  /services/       # Angular services
  /stores/         # State management
  /assets/         # Static assets
  /styles/         # Stylesheets and themes
```

### Backend Applications (Node.js, Python, Java)

```
/src
  /controllers/    # Request handlers and routing
  /services/       # Business logic and domain services
  /models/         # Data models and entities
  /repositories/   # Data access layer
  /middleware/     # Request/response middleware
  /validators/     # Input validation
  /serializers/    # Data serialization/deserialization
```

### Full-Stack Applications

```
/client          # Frontend application
  /src/
  /public/
  /tests/

/server          # Backend application
  /src/
  /tests/

/shared          # Shared code between client and server
  /types/
  /constants/
  /utils/

/docs            # Shared documentation
```

### Microservices Architecture

```
/services
  /user-service/
    /src/
    /tests/
    /docs/
  /order-service/
    /src/
    /tests/
    /docs/

/shared
  /libraries/
  /types/
  /tools/

/infra
  /kubernetes/
  /terraform/
  /monitoring/
```

## Best Practices

### Naming Conventions

**Directories**

- Use lowercase with hyphens for multi-word names
- Be descriptive but concise
- Use plural forms for collections (components, services, utils)
- Avoid abbreviations unless universally understood

**Files**

- Use consistent naming patterns within each directory
- Include file type/purpose in name when helpful
- Use extensions that clearly indicate file type and purpose
- Follow language-specific conventions

### Documentation Organization

**Structure Documentation Hierarchically**

- Overview documents at top level
- Detailed documentation in subdirectories
- Cross-reference related documents
- Maintain consistent formatting and style

**Keep Documentation Close to Code**

- Component documentation near component code
- API documentation with API implementations
- Technical decisions documented in ADRs
- Implementation notes in development journals

### Configuration Management

**Environment-Specific Configuration**

- Separate configuration from code
- Use environment variables for deployment-specific values
- Organize configuration by environment and service
- Document configuration options and their purposes

**Secrets Management**

- Never commit secrets to version control
- Use secure secret management systems
- Document secret requirements and setup
- Provide examples with placeholder values

## Integration with BMad Systems

### Memory Bank Integration

- projectContext.md references project structure decisions
- techContext.md documents technology and architectural choices
- systemPatterns.md captures organizational conventions
- All agents reference scaffolding preferences during initialization

### ADR Integration

- Create ADRs for significant scaffolding decisions
- Document rationale for organizational choices
- Reference scaffolding ADRs from project structure documentation
- Update ADRs when scaffolding patterns evolve

### Agent Workflow Integration

- All BMad agents understand standard directory structures
- Templates automatically create appropriate directory structures
- Workflows assume consistent organizational patterns
- Build systems work reliably with standard structures

### Development Process Integration

- Code reviews validate adherence to scaffolding standards
- Build processes work consistently across projects
- Deployment scripts make standard organizational assumptions
- Monitoring and observability integrate with standard patterns

## Advanced Patterns

### Monorepo Organization

```
/packages
  /shared-ui/
  /shared-utils/
  /app-frontend/
  /app-backend/
  /mobile-app/

/tools
  /build-tools/
  /dev-tools/
  /scripts/

/docs
  /architecture/
  /packages/
  /deployment/
```

### Domain-Driven Design Integration

```
/src
  /domains
    /user/
      /entities/
      /services/
      /repositories/
      /controllers/
    /order/
      /entities/
      /services/
      /repositories/
      /controllers/
  /shared
    /infrastructure/
    /utilities/
```

### Plugin/Extension Architecture

```
/core
  /src/
  /tests/

/plugins
  /auth-plugin/
  /payment-plugin/
  /analytics-plugin/

/extension-api
  /interfaces/
  /base-classes/
  /utilities/
```

## Troubleshooting Common Issues

### Inconsistent Organization

**Symptoms**: Different parts of project follow different patterns
**Solutions**:

- Document and communicate organizational standards
- Perform regular organizational reviews
- Use linting tools to enforce patterns
- Include organization in code review criteria

### Deep Nesting

**Symptoms**: Excessive directory depth makes navigation difficult
**Solutions**:

- Flatten overly deep hierarchies
- Group related items at same level
- Use logical grouping rather than deep nesting
- Consider domain-based organization

### Unclear Purpose

**Symptoms**: Developers can't find files or understand organization
**Solutions**:

- Use more descriptive directory and file names
- Add README files explaining organization
- Create directory index files
- Provide organizational documentation

### Scaffolding Debt

**Symptoms**: Project structure becomes outdated or inconsistent over time
**Solutions**:

- Regular organizational reviews and updates
- Include scaffolding in technical debt assessments
- Planned refactoring of organizational patterns
- Update documentation and tooling as patterns evolve

## Scaffolding Templates

The BMad framework includes scaffolding templates and utilities:

- Standard directory structure generators
- Project initialization scripts
- Organizational linting rules
- Documentation templates for common structures

These tools ensure that new projects start with appropriate scaffolding and existing projects can migrate to standard patterns efficiently.

## Related Documentation

- [Memory Bank Guide](memory-bank-guide.md) - Persistent context management
- [ADR Guide](adr-guide.md) - Architecture decision documentation
- [Core Architecture](core-architecture.md) - Technical framework details
- [User Guide](../bmad-core/user-guide.md) - Complete BMad workflow documentation
