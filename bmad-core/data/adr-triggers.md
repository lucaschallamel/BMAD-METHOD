# ADR Triggers Reference

## When to Create an Architectural Decision Record

### Technology Stack Decisions
- **Framework Selection**: Choosing React vs Vue vs Angular
- **Database Technology**: SQL vs NoSQL, specific database vendors
- **Programming Language**: Primary language for services
- **Infrastructure Platform**: AWS vs Azure vs GCP vs On-premise
- **Container Orchestration**: Kubernetes vs Docker Swarm vs ECS

### Architectural Patterns
- **Architecture Style**: Microservices vs Monolith vs Modular Monolith
- **API Design**: REST vs GraphQL vs gRPC
- **Event Architecture**: Event Sourcing vs Traditional State
- **Communication Patterns**: Synchronous vs Asynchronous
- **Data Patterns**: CQRS, Event Sourcing, Shared Database

### Integration Decisions
- **Authentication Method**: OAuth vs JWT vs Session-based
- **Service Communication**: Direct API vs Message Queue vs Event Bus
- **Third-party Services**: Build vs Buy decisions
- **API Gateway**: Whether to use and which one
- **External System Integration**: How to connect with legacy systems

### Data Architecture
- **Data Storage Strategy**: Centralized vs Distributed
- **Caching Strategy**: Redis vs Memcached vs In-memory
- **Data Partitioning**: Sharding strategy
- **Backup and Recovery**: Approach and tools
- **Data Privacy**: Encryption at rest/transit decisions

### Performance & Scalability
- **Scaling Strategy**: Horizontal vs Vertical
- **Load Balancing**: Algorithm and implementation
- **Performance Optimization**: Specific techniques adopted
- **Resource Limits**: Rate limiting, throttling decisions
- **CDN Strategy**: Whether to use and implementation

### Security Architecture
- **Security Framework**: Zero Trust vs Perimeter-based
- **Secrets Management**: Vault vs Cloud Provider vs Custom
- **Encryption Standards**: Which algorithms and key management
- **Access Control**: RBAC vs ABAC vs Custom
- **Compliance Requirements**: How to meet specific regulations

### Development Process
- **CI/CD Pipeline**: Tools and deployment strategy
- **Testing Strategy**: Unit vs Integration vs E2E balance
- **Code Organization**: Monorepo vs Polyrepo
- **Branching Strategy**: GitFlow vs GitHub Flow vs Trunk-based
- **Documentation Standards**: What and how to document

### Operational Decisions
- **Monitoring Strategy**: Tools and what to monitor
- **Logging Architecture**: Centralized vs Distributed
- **Alerting Strategy**: What to alert on and how
- **Disaster Recovery**: RTO/RPO decisions
- **Deployment Strategy**: Blue-Green vs Canary vs Rolling

### Cross-Cutting Concerns
- **Error Handling**: Global strategy and patterns
- **Internationalization**: Support strategy
- **Multi-tenancy**: Isolation approach
- **Feature Flags**: Implementation approach
- **Backward Compatibility**: Version strategy

## Red Flags - Always Create an ADR When

1. **Multiple Valid Options Exist**: The team is debating between approaches
2. **Significant Cost Implications**: The decision impacts budget substantially
3. **Hard to Reverse**: Changing later would be expensive or difficult
4. **Cross-Team Impact**: Decision affects multiple teams or systems
5. **External Commitments**: Decision creates obligations to customers/partners
6. **Compliance/Regulatory**: Decision has legal or compliance implications
7. **Performance Critical**: Decision significantly impacts system performance
8. **Security Implications**: Decision affects system security posture

## When NOT to Create an ADR

1. **Implementation Details**: How to name a variable or structure a small module
2. **Temporary Solutions**: Quick fixes that will be replaced soon
3. **Team Conventions**: Simple coding standards or naming conventions
4. **Tool Configuration**: Minor tool settings that are easily changeable
5. **Obvious Choices**: When there's only one reasonable option

## Remember
> "If someone might ask 'Why did we do it this way?' in 6 months, you need an ADR."