# Architecture Decision Records (ADR) Guide

## Overview

Architecture Decision Records (ADRs) are a critical component of the BMad Method for documenting and tracking technical decisions throughout the project lifecycle. ADRs provide a structured approach to capturing the context, reasoning, and consequences of architectural choices, ensuring that institutional knowledge is preserved and decision-making processes remain transparent.

## What are ADRs?

An Architecture Decision Record is a document that captures a single architectural decision and its context. Each ADR describes:

- **The decision context** - What situation prompted this decision?
- **The decision itself** - What was decided?
- **The rationale** - Why was this decision made?
- **The consequences** - What are the implications of this decision?

ADRs are immutable once written - if a decision changes, a new ADR is created that supersedes the old one, maintaining a complete historical record of decision evolution.

## Why Use ADRs?

### Decision Transparency

- Clear documentation of why technical choices were made
- Visible reasoning process for future reference
- Shared understanding across team members
- Accountability for technical decisions

### Historical Context

- Understanding the environment and constraints when decisions were made
- Preventing re-litigation of previously resolved issues
- Learning from past decisions and their outcomes
- Maintaining continuity across team changes

### Change Management

- Structured approach to evolving architectural decisions
- Clear process for superseding previous decisions
- Impact assessment for proposed changes
- Migration planning and execution guidance

### Knowledge Transfer

- Preserving institutional knowledge beyond individual team members
- Onboarding new team members with complete context
- Understanding legacy decisions and their constraints
- Building organizational learning capabilities

## ADR Structure

BMad ADRs follow a standardized format that ensures consistency and completeness:

### Header Information

- **ADR Number**: Sequential identifier (ADR-001, ADR-002, etc.)
- **Title**: Descriptive title summarizing the decision
- **Date**: When the decision was made
- **Status**: Current status (Proposed, Accepted, Superseded, Deprecated)
- **Participants**: Who was involved in making the decision

### Core Content Sections

#### 1. Context and Problem Statement

- **Situation**: What circumstances led to this decision point?
- **Problem**: What specific problem needs to be solved?
- **Constraints**: What limitations or requirements must be considered?
- **Success Criteria**: How will we know if this decision was successful?

#### 2. Decision Drivers

- **Functional Requirements**: What capabilities must be delivered?
- **Quality Attributes**: Performance, security, maintainability, etc.
- **Technical Constraints**: Platform limitations, existing systems, etc.
- **Business Constraints**: Budget, timeline, skills, compliance, etc.

#### 3. Considered Options

For each option considered:

- **Description**: What would this approach involve?
- **Pros**: What are the advantages of this approach?
- **Cons**: What are the disadvantages or risks?
- **Trade-offs**: What would we gain/lose with this choice?

#### 4. Decision Outcome

- **Chosen Option**: Which approach was selected?
- **Justification**: Why was this option chosen over the alternatives?
- **Decision Makers**: Who made the final decision?
- **Decision Date**: When was the decision finalized?

#### 5. Consequences and Implications

- **Positive Consequences**: Expected benefits and improvements
- **Negative Consequences**: Accepted trade-offs and limitations
- **Neutral Consequences**: Other implications that are neither positive nor negative
- **Risks**: Potential issues that may arise from this decision

#### 6. Implementation Notes

- **Implementation Plan**: High-level approach to implementing the decision
- **Timeline**: Key milestones and deadlines
- **Dependencies**: What other work must be completed first?
- **Success Metrics**: How will implementation success be measured?

#### 7. Follow-up Actions

- **Next Steps**: Immediate actions required to implement the decision
- **Review Points**: When should this decision be re-evaluated?
- **Monitoring**: What should be watched to ensure the decision remains valid?
- **Migration**: If applicable, how to transition from previous approaches?

## Getting Started with ADRs

### Setting Up ADR Process

1. **Initialize ADR Structure**

   ```
   Use the `*create-adr` command with any BMad agent
   This creates the /docs/adr directory and first ADR template
   ```

2. **Establish ADR Governance**

   ```
   Define who can create ADRs (typically Architect, senior developers)
   Establish review and approval processes
   Set guidelines for when ADRs are required
   Create templates for common decision types
   ```

3. **Integrate with Workflows**
   ```
   Include ADR creation in architecture tasks
   Reference ADRs in development stories
   Link ADRs to Memory Bank for context
   Review ADRs during sprint retrospectives
   ```

### When to Create an ADR

**Always create an ADR for:**

- Technology stack decisions (frameworks, databases, services)
- Architecture pattern choices (microservices vs monolith, event-driven vs request-response)
- Infrastructure decisions (cloud providers, deployment strategies)
- Security architecture choices (authentication methods, data protection)
- Integration patterns and protocols
- Data architecture and storage strategies

**Consider creating an ADR for:**

- Significant library or tool selections
- Coding standards and conventions
- Testing strategies and approaches
- Deployment and release processes
- Monitoring and observability approaches
- Performance optimization strategies

**Don't create ADRs for:**

- Implementation details that don't affect architecture
- Temporary or experimental decisions
- Decisions that can be easily reversed
- Personal preferences without architectural impact

## Daily Usage Patterns

### Creating ADRs

1. **Identify Decision Point**

   - Recognize when an architectural decision needs to be made
   - Gather stakeholders and relevant information
   - Define the scope and impact of the decision

2. **Research and Analysis**

   - Investigate available options and approaches
   - Analyze trade-offs and implications
   - Consult with team members and experts
   - Consider long-term consequences

3. **Draft ADR**

   - Use `*create-adr` command to create new ADR
   - Fill in all required sections thoroughly
   - Include specific examples and evidence
   - Reference related ADRs and documentation

4. **Review and Approval**
   - Share with relevant stakeholders
   - Incorporate feedback and revisions
   - Obtain necessary approvals
   - Finalize and mark as Accepted

### Referencing ADRs

- **In Code**: Include ADR references in significant architectural components
- **In Documentation**: Link to relevant ADRs from architecture documentation
- **In Stories**: Reference applicable ADRs in development stories
- **In Reviews**: Use ADRs to guide code and architecture reviews

### Maintaining ADRs

- **Regular Reviews**: Periodically review ADRs for continued relevance
- **Status Updates**: Update status when decisions are superseded or deprecated
- **Outcome Tracking**: Document actual consequences versus predicted outcomes
- **Lesson Capture**: Record lessons learned from ADR outcomes

## Best Practices

### Writing Quality ADRs

**Be Specific and Concrete**

- Use specific examples rather than abstract concepts
- Include quantitative criteria where possible
- Reference specific technologies, patterns, and approaches
- Provide concrete success and failure criteria

**Include Sufficient Context**

- Explain the business and technical environment
- Document constraints and assumptions
- Reference related decisions and dependencies
- Include timeline and urgency factors

**Consider Multiple Perspectives**

- Include different stakeholder viewpoints
- Consider short-term and long-term implications
- Address both technical and business concerns
- Acknowledge uncertainty and risks

**Maintain Objectivity**

- Present options fairly without bias
- Acknowledge weaknesses in chosen approaches
- Document dissenting opinions when relevant
- Separate facts from opinions clearly

### ADR Governance

**Establish Clear Ownership**

- Define who can create and approve ADRs
- Assign responsibility for ADR maintenance
- Create escalation paths for disputed decisions
- Establish review cycles and update processes

**Ensure Visibility**

- Make ADRs easily discoverable and accessible
- Include ADRs in onboarding processes
- Reference ADRs in relevant documentation
- Communicate significant ADRs to stakeholders

**Maintain Quality Standards**

- Establish templates and writing guidelines
- Require peer review before acceptance
- Validate that ADRs include all required sections
- Ensure decisions are actually implemented

## Advanced Usage

### ADR Relationships

**Superseding ADRs**

- Create new ADR that replaces previous decision
- Update old ADR status to "Superseded by ADR-XXX"
- Explain why previous decision no longer applies
- Document migration plan if applicable

**Related ADRs**

- Reference related decisions in each ADR
- Create ADR chains for evolutionary decisions
- Cross-reference ADRs that affect each other
- Maintain decision dependency maps

**ADR Collections**

- Group related ADRs by system or domain
- Create index ADRs for complex decision areas
- Organize ADRs by architectural layers or concerns
- Maintain chronological and topical views

### Integration with Tools

**Version Control**

- Store ADRs in same repository as code
- Use pull requests for ADR review processes
- Tag ADRs with relevant releases
- Track ADR changes over time

**Documentation Systems**

- Link ADRs from architecture documentation
- Include ADRs in generated documentation
- Create ADR dashboards and summaries
- Integrate with project wikis and portals

**Development Tools**

- Reference ADRs in code comments
- Include ADR numbers in commit messages
- Link ADRs from issue tracking systems
- Integrate with code review tools

## Troubleshooting Common Issues

### ADRs Not Being Created

**Symptoms**: Important decisions made without ADRs
**Solutions**:

- Include ADR creation in definition of done
- Add ADR checkpoints to review processes
- Provide ADR training and templates
- Recognize and reward good ADR practices

### ADRs Becoming Outdated

**Symptoms**: ADRs no longer reflect current reality
**Solutions**:

- Establish regular ADR review cycles
- Include ADR validation in retrospectives
- Assign ADR maintenance responsibilities
- Create processes for updating or superseding ADRs

### Low ADR Quality

**Symptoms**: ADRs lack detail or miss key information
**Solutions**:

- Provide ADR writing training and examples
- Establish peer review requirements
- Create quality checklists and templates
- Give feedback on ADR content and structure

### ADRs Not Being Used

**Symptoms**: Team doesn't reference or follow ADRs
**Solutions**:

- Make ADRs easily discoverable and accessible
- Reference ADRs in relevant processes and documentation
- Include ADR awareness in onboarding
- Demonstrate value through successful outcomes

## ADR Templates

The BMad framework includes templates for different types of ADRs:

- `adr-tmpl.yaml` - General ADR template for any architectural decision
- Specialized templates for common decision types (technology selection, pattern adoption, etc.)

These templates ensure consistency and completeness while providing guidance for documenting different types of architectural decisions.

## Related Documentation

- [Memory Bank Guide](memory-bank-guide.md) - Persistent context management
- [Project Scaffolding Guide](project-scaffolding-guide.md) - Standard project structures
- [Core Architecture](core-architecture.md) - Technical framework details
- [User Guide](../bmad-core/user-guide.md) - Complete BMad workflow documentation
