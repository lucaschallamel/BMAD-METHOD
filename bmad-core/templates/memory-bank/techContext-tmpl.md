# Tech Context

*Technology stack, development environment, and technical constraints*

## Technology Stack

### Core Technologies
| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| Runtime | [e.g., Node.js] | [Version] | [Why chosen] |
| Framework | [e.g., Express] | [Version] | [Main framework] |
| Database | [e.g., PostgreSQL] | [Version] | [Data persistence] |
| Cache | [e.g., Redis] | [Version] | [Performance] |
| Queue | [e.g., RabbitMQ] | [Version] | [Async processing] |

### Frontend Stack (if applicable)
| Technology | Version | Purpose |
|------------|---------|---------|
| [Framework] | [Version] | [UI framework] |
| [State Mgmt] | [Version] | [State management] |
| [Build Tool] | [Version] | [Bundling] |
| [CSS Solution] | [Version] | [Styling] |

### Infrastructure
| Component | Technology | Purpose |
|-----------|------------|---------|
| Hosting | [e.g., AWS EC2] | [Where it runs] |
| Container | [e.g., Docker] | [Containerization] |
| Orchestration | [e.g., K8s] | [Container management] |
| CI/CD | [e.g., GitHub Actions] | [Automation] |

## Development Environment

### Prerequisites
- **OS**: [Supported operating systems]
- **Runtime**: [Required versions]
- **Tools**: [Required development tools]
- **Access**: [Required permissions/accounts]

### Local Setup
```bash
# Quick start commands
git clone [repository]
cd [project]
npm install  # or equivalent
npm run setup
npm run dev
```

### Environment Variables
| Variable | Purpose | Example | Required |
|----------|---------|---------|----------|
| `DATABASE_URL` | [Database connection] | `postgres://...` | Yes |
| `REDIS_URL` | [Cache connection] | `redis://...` | Yes |
| `API_KEY` | [External service] | `sk_...` | No |

### Development Tools
- **IDE**: [Recommended IDE and extensions]
- **Debugger**: [How to debug]
- **API Testing**: [Postman/Insomnia setup]
- **Database Tools**: [GUI clients]

## Dependencies

### Core Dependencies
| Package | Version | Purpose | Critical? |
|---------|---------|---------|-----------|
| [Name] | [Version] | [What it does] | [Yes/No] |
| [Name] | [Version] | [What it does] | [Yes/No] |

### Development Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| [Name] | [Version] | [Testing/linting/etc] |
| [Name] | [Version] | [Purpose] |

### Dependency Management
- **Update Strategy**: [How/when to update]
- **Security Scanning**: [Tools used]
- **License Compliance**: [Checks in place]

## Build & Deployment

### Build Process
```bash
# Development build
npm run build:dev

# Production build
npm run build:prod

# What happens during build
1. [Step 1]
2. [Step 2]
3. [Output]
```

### Deployment Pipeline
1. **Local Development**: [Process]
2. **Testing Environment**: [How to deploy]
3. **Staging**: [Process and checks]
4. **Production**: [Deployment method]

### Configuration Management
- **Development**: [Config location/method]
- **Staging**: [Config management]
- **Production**: [Secrets handling]

## Technical Constraints

### Performance Requirements
- **Response Time**: [Target latency]
- **Throughput**: [Requests per second]
- **Concurrent Users**: [Expected load]
- **Data Volume**: [Storage expectations]

### Browser/Platform Support
| Platform | Minimum Version | Notes |
|----------|----------------|-------|
| Chrome | [Version] | [Full support] |
| Firefox | [Version] | [Any limitations] |
| Safari | [Version] | [Any limitations] |
| Edge | [Version] | [Support level] |
| Mobile | [iOS/Android versions] | [Considerations] |

### API Constraints
- **Rate Limits**: [Any throttling]
- **Payload Size**: [Maximum sizes]
- **Timeout**: [Request timeouts]
- **Versioning**: [API version strategy]

### Security Constraints
- **Compliance**: [PCI, HIPAA, GDPR, etc.]
- **Encryption**: [Requirements]
- **Authentication**: [Requirements]
- **Audit**: [Logging requirements]

## External Services

### Third-Party APIs
| Service | Purpose | Limits | Fallback |
|---------|---------|--------|----------|
| [Name] | [What we use it for] | [Rate limits] | [If it fails] |
| [Name] | [Purpose] | [Quotas] | [Backup plan] |

### Monitoring Services
- **APM**: [Application monitoring tool]
- **Logging**: [Log aggregation service]
- **Error Tracking**: [Error monitoring]
- **Analytics**: [Usage tracking]

## Testing Infrastructure

### Test Types
| Type | Tool | Location | Command |
|------|------|----------|---------|
| Unit | [Jest] | `/tests/unit` | `npm test` |
| Integration | [Tool] | `/tests/integration` | `npm run test:int` |
| E2E | [Tool] | `/tests/e2e` | `npm run test:e2e` |

### Test Environment
- **Database**: [Test DB setup]
- **External Services**: [Mocking strategy]
- **Test Data**: [Fixtures/factories]

## Maintenance Considerations

### Regular Tasks
- **Dependency Updates**: [Schedule/process]
- **Security Patches**: [Response time]
- **Database Maintenance**: [Tasks]
- **Log Rotation**: [Policy]

### Monitoring Alerts
| Alert | Threshold | Action |
|-------|-----------|--------|
| High Error Rate | >1% | [Response] |
| Slow Response | >2s | [Investigation] |
| Database Connection | Failed | [Escalation] |

### Known Limitations
1. **Limitation 1**: [Description and workaround]
2. **Limitation 2**: [Description and impact]
3. **Technical Debt**: [Areas needing attention]

---
*This document defines the technical environment and constraints. Update when tools, versions, or constraints change.*