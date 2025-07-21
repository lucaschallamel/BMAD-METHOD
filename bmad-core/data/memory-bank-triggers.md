# Memory Bank Update Triggers

This reference guide identifies when Memory Bank updates should be performed to maintain AI session continuity.

## Automatic Triggers (Should Update)

### Development Activity Triggers

**Story Completion**
- When marking a story as "Ready for Review" or "Complete"
- Updates: `progress.md`, `activeContext.md`
- Focus: Features completed, current state

**ADR Creation**
- After creating a new Architectural Decision Record
- Updates: `systemPatterns.md`, `techContext.md` (if tech changes)
- Focus: Architecture decisions and their rationale

**Dev Journal Entry**
- After documenting a significant development session
- Updates: `activeContext.md`, `progress.md`
- Focus: Recent work, learnings, next steps

**Sprint/Iteration End**
- At the conclusion of each sprint or iteration
- Updates: Comprehensive update of all files
- Focus: Sprint achievements, velocity, upcoming work

### Technical Change Triggers

**Architecture Changes**
- Significant changes to system architecture
- Updates: `systemPatterns.md`, `activeContext.md`
- Focus: New patterns, component relationships

**Technology Stack Updates**
- Adding/removing frameworks, libraries, or tools
- Updates: `techContext.md`, `systemPatterns.md`
- Focus: Technology choices and constraints

**API Changes**
- Major API additions or modifications
- Updates: `systemPatterns.md`, `techContext.md`
- Focus: Integration points, API design

**Infrastructure Changes**
- Changes to deployment, hosting, or CI/CD
- Updates: `techContext.md`, `systemPatterns.md`
- Focus: Infrastructure architecture, deployment process

### Project Evolution Triggers

**Requirements Changes**
- Significant changes to project scope or goals
- Updates: `projectbrief.md`, `productContext.md`
- Focus: Updated requirements, success criteria

**Priority Shifts**
- Major reprioritization of features or work
- Updates: `activeContext.md`, `projectbrief.md`
- Focus: New priorities, adjusted timeline

**Milestone Achievement**
- Reaching major project milestones
- Updates: `progress.md`, `activeContext.md`
- Focus: Completed milestone, next phase

**Technical Debt Resolution**
- Completing significant refactoring or debt reduction
- Updates: `progress.md`, `systemPatterns.md`
- Focus: Improvements made, remaining debt

## Manual Triggers (User Requested)

### Explicit Request
- User says "update memory bank" or similar
- Updates: Comprehensive review and update of all files
- Focus: Current state across all dimensions

### Before Major Work
- Starting a new epic or major feature
- Updates: Ensure all files reflect current state
- Focus: Preparation for upcoming work

### Knowledge Transfer
- Onboarding new team members or AI agents
- Updates: Comprehensive update with extra clarity
- Focus: Complete project understanding

### Project Pivot
- Significant change in project direction
- Updates: All files, especially brief and context
- Focus: New direction, updated goals

## Update Strategies

### Selective Update
- Update only affected files
- Quick, focused changes
- Maintains consistency

### Comprehensive Update
- Review all Memory Bank files
- Ensure cross-file consistency
- Update based on all recent activities

### Progressive Update
- Update most volatile files frequently (activeContext, progress)
- Update stable files less often (projectbrief, productContext)
- Balance accuracy with efficiency

## Quality Indicators

Signs that Memory Bank needs updating:
- Last update >1 week ago
- Multiple dev journal entries since last update
- Significant commits without Memory Bank updates
- Architecture decisions not reflected
- Sprint completed without update
- AI agent confusion about project state

## Anti-Patterns to Avoid

- **Update Fatigue**: Don't update after every small change
- **Stale Documentation**: Don't let Memory Bank become outdated
- **Inconsistency**: Ensure updates maintain cross-file consistency
- **Information Overload**: Keep updates concise and relevant
- **Manual Only**: Set up automatic triggers for key events

## Integration Points

Memory Bank updates integrate with:
- **Dev Journal Creation**: Trigger activeContext update
- **ADR Creation**: Trigger systemPatterns update
- **Story Completion**: Trigger progress update
- **Sprint Planning**: Trigger comprehensive update
- **Architecture Changes**: Trigger patterns and tech updates

Remember: The Memory Bank is the AI's only link to project history after memory reset. Keep it accurate, current, and comprehensive.