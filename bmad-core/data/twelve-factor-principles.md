# Twelve-Factor App Principles

> **Purpose:** This document provides the definitive set of rules based on the Twelve-Factor App methodology. These principles are mandatory for ensuring applications are built as scalable, resilient, and maintainable cloud-native services.

## The Twelve Factors

### I. Codebase
- A single, version-controlled codebase must represent one application
- All code for a specific application belongs to this single codebase
- Shared functionality must be factored into versioned libraries
- One codebase produces multiple deploys (development, staging, production)

### II. Dependencies
- Explicitly declare all dependencies via manifest files (e.g., package.json, requirements.txt)
- Never rely on implicit existence of system-wide packages
- Application must run in isolated environment with only declared dependencies

### III. Config
- Strict separation between code and configuration
- All deploy-varying config must be read from environment variables
- Never hardcode environment-specific values in source code
- Codebase must be runnable anywhere with correct environment variables

### IV. Backing Services
- Treat all backing services as attached, swappable resources
- Connect via locators/credentials stored in environment variables
- Code must be agnostic to whether service is local or third-party
- Examples: databases, message queues, caches, external APIs

### V. Build, Release, Run
Maintain strict three-stage separation:
- **Build:** Convert code repo into executable bundle
- **Release:** Combine build with environment-specific config
- **Run:** Execute release in target environment
- Releases must be immutable with unique IDs
- Any change requires new release

### VI. Processes
- Execute as stateless, share-nothing processes
- Persistent data must be stored in stateful backing service
- Never assume local memory/disk state available across requests
- Process state is ephemeral

### VII. Port Binding
- Application must be self-contained
- Export services by binding to port specified via configuration
- Do not rely on runtime injection of webserver
- Application brings its own webserver library

### VIII. Concurrency
- Scale out horizontally by adding concurrent processes
- Assign different workload types to different process types
- Use process manager for lifecycle management
- Design for horizontal scaling from the start

### IX. Disposability
- Processes must be disposable (start/stop quickly)
- Minimize startup time for fast elastic scaling
- Graceful shutdown on SIGTERM
- Robust against sudden death (crash-only design)

### X. Dev/Prod Parity
Keep environments as similar as possible:
- Same programming language versions
- Same system tooling
- Same backing service types and versions
- Minimize time, personnel, and tool gaps

### XI. Logs
- Treat logs as event streams
- Never write to or manage log files directly
- Write unbuffered to stdout
- Execution environment handles collection and routing

### XII. Admin Processes
- Run admin tasks as one-off processes
- Use identical environment as long-running processes
- Ship admin scripts with application code
- Use same dependency and config management

## Additional Cloud-Native Principles

### Containerization
- **[SVC] Service as Container:** Package services as container images
- Encapsulate technology stack in containers
- Ensure consistent deployment across environments

### Serverless Options
- **[SRL] Serverless Deployment:** Consider serverless platforms when appropriate
- Abstract away infrastructure management
- Focus on business logic over infrastructure

### Observability
- Implement comprehensive monitoring and metrics
- Use distributed tracing for microservices
- Ensure all services are observable by default

### Security
- Security must be built-in, not bolted-on
- Use principle of least privilege
- Implement defense in depth
- Regular security audits and updates

## AI/Agent Safeguards
- All AI-generated code must be reviewed before production
- Escalate ambiguous or risky decisions for approval
- Log all significant AI-suggested changes
- Never overwrite .env files without confirmation

## Environmental Sustainability
- Optimize compute resources
- Minimize infrastructure waste
- Prefer energy-efficient solutions
- Consider environmental impact in technical decisions

## Integration with BMAD

These principles should be:
1. Applied during architecture design
2. Validated during implementation
3. Enforced through CI/CD pipelines
4. Reviewed during architectural decision records (ADRs)
5. Considered in all technical decisions