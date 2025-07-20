# Microservice Architecture Patterns

> **Purpose:** This document outlines specific patterns and strategies for implementing Microservice-Oriented Architecture, based on Chris Richardson's "Microservices Patterns". It provides detailed guidance for service design, decomposition, communication, and data management.

## Core Architecture Patterns

### Foundation Patterns
- **[MON] Monolithic Architecture:** Single deployable unit. Good for simple applications, becomes "monolithic hell" as complexity grows.
- **[MSA] Microservice Architecture:** Collection of small, autonomous, loosely coupled services. Core pattern for complex systems.

### Service Decomposition
- **[DBC] Decompose by Business Capability:** Define services based on business capabilities (e.g., Order Management, Inventory).
- **[DSD] Decompose by Subdomain:** Use Domain-Driven Design to define services around problem subdomains.

## Communication Patterns

### Synchronous Communication
- **[RPI] Remote Procedure Invocation:** Synchronous request/response (REST, gRPC). Simple but creates coupling.
- **[CBR] Circuit Breaker:** Prevent cascading failures. Trip after consecutive failures, fail fast.

### Asynchronous Communication
- **[MSG] Messaging:** Services communicate via message broker. Promotes loose coupling and resilience.
- **[DME] Domain Events:** Aggregates publish events when state changes. Foundation for event-driven architecture.

### Service Discovery
- **[SDC] Service Discovery:** Patterns for finding service instances in dynamic cloud environments:
  - Client-side discovery
  - Server-side discovery
  - Service registry patterns

## Data Management Patterns

### Data Architecture
- **[DPS] Database per Service:** Each service owns its data. Fundamental to loose coupling.
- **[AGG] Aggregate:** Cluster of domain objects as single unit. Transactions only create/update single aggregate.

### Data Consistency
- **[SAG] Saga:** Manage data consistency across services without distributed transactions:
  - Sequence of local transactions
  - Event/message triggered
  - Compensating transactions on failure

### Event Patterns
- **[EVS] Event Sourcing:** Store state-changing events rather than current state. Provides audit log.
- **[OUT] Transactional Outbox:** Reliably publish messages as part of local database transaction.

### Query Patterns
- **[APC] API Composition:** Client retrieves and joins data from multiple services. Simple but inefficient for complex queries.
- **[CQR] CQRS:** Separate command (write) and query (read) models. Maintain denormalized read views.

## API Patterns

### Gateway Patterns
- **[APG] API Gateway:** Single entry point for all clients. Routes requests, handles cross-cutting concerns.
- **[BFF] Backends for Frontends:** Separate API gateway for each client type (mobile, web).

## Domain Modeling

### Design Approaches
- **[DOM] Domain Model:** Object-oriented with state and behavior. Preferred for complex logic.
- **[TSF] Transaction Script:** Procedural approach. Simpler but unmanageable for complex logic.

## Testing Patterns

### Service Testing
- **[CDC] Consumer-Driven Contract Test:** Consumer writes tests to verify provider meets expectations.
- **[SCT] Service Component Test:** Acceptance test for single service with stubbed dependencies.

## Deployment Patterns

### Container Patterns
- **[SVC] Service as Container:** Package service as container image to encapsulate technology stack.
- **[SRL] Serverless Deployment:** Deploy using serverless platform (e.g., AWS Lambda).

### Infrastructure Patterns
- **[MSC] Microservice Chassis:** Framework handling cross-cutting concerns (config, health, metrics).
- **[SMH] Service Mesh:** Infrastructure layer for inter-service communication (Istio, Linkerd).

## Migration Patterns

### Legacy Modernization
- **[STR] Strangler Application:** Incrementally build microservices around monolith. Gradual replacement.

## Best Practices

### Service Design
1. Services should be loosely coupled and highly cohesive
2. Own their data and business logic
3. Communicate through well-defined interfaces
4. Be independently deployable

### Transaction Management
1. Avoid distributed transactions
2. Use saga pattern for cross-service consistency
3. Design for eventual consistency
4. Implement idempotency

### Resilience
1. Implement circuit breakers
2. Use timeouts and retries wisely
3. Design for failure
4. Implement health checks

### Observability
1. Distributed tracing across services
2. Centralized logging
3. Service-level metrics
4. Business metrics

## Anti-Patterns to Avoid

1. **Distributed Monolith:** Microservices that must be deployed together
2. **Chatty Services:** Excessive inter-service communication
3. **Shared Database:** Multiple services accessing same database
4. **Synchronous Communication Everywhere:** Over-reliance on RPI
5. **Missing Service Boundaries:** Services that don't align with business capabilities

## Integration with BMAD

These patterns should be:
1. Considered during architecture design phase
2. Documented in Architecture Decision Records (ADRs)
3. Applied based on specific project requirements
4. Validated against twelve-factor principles
5. Reviewed for applicability to project scale and complexity