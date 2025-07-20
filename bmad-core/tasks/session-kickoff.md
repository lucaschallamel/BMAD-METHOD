# Session Kickoff

This task ensures AI agents have complete project context and understanding before starting work. It provides systematic session initialization across all agent types.

## Purpose

- Establish comprehensive project understanding
- Validate documentation consistency
- Identify current project state and priorities
- Recommend next steps based on evidence
- Prevent context gaps that lead to suboptimal decisions

## Process

### 1. Memory Bank Review (Primary Context)

**Priority Order**:
1. **Memory Bank Files** (if they exist): `docs/memory-bank/`
   - `projectbrief.md` - Project foundation and scope
   - `activeContext.md` - Current work and immediate priorities
   - `progress.md` - Project state and completed features
   - `systemPatterns.md` - Architecture and technical decisions
   - `techContext.md` - Technology stack and constraints
   - `productContext.md` - Problem space and user needs

**Analysis Required**:
- When were these last updated?
- Is information current and accurate?
- Any apparent inconsistencies between files?

### 2. Architecture Documentation Review

**Primary References** (check which exists):
- `/docs/architecture.md` - General backend/system architecture (greenfield)
- `/docs/brownfield-architecture.md` - Enhancement architecture for existing systems
- `/docs/frontend-architecture.md` - Frontend-specific architecture
- `/docs/fullstack-architecture.md` - Complete full-stack architecture

**Key Elements to Review**:
- Core architectural decisions and patterns
- System design and component relationships
- Technology choices and constraints
- Integration points and data flows
- API documentation
- Database schemas

### 3. Development History Review

**Recent Dev Journals**: `docs/devJournal/`
- Read last 3-5 entries to understand recent work
- Identify patterns in challenges and decisions
- Note any unresolved issues or technical debt
- Understand development velocity and blockers

**Current ADRs**: `docs/adr/`
- Review recent architectural decisions
- Check for pending or superseded decisions
- Validate alignment with current architecture
- Skip archived ADRs (consolidated in architecture docs)

### 4. Project Documentation Scan

**Core Documentation**:
- `README.md` - Project overview and setup
- `CHANGELOG.md` - Recent changes and releases
- Package manifests (`package.json`, `requirements.txt`, etc.)
- Configuration files

**Additional Context**:
- Issue trackers or project boards
- Recent commits and branches
- Test results and coverage reports

### 5. Current State Assessment

**Development Environment**:
```bash
# Check git status
git status
git log --oneline -10

# Check current branch and commits
git branch -v

# Review recent changes
git diff --name-status HEAD~5
```

**Project Health**:
- Are there failing tests or builds?
- Any urgent issues or blockers?
- Current sprint/iteration status
- Outstanding pull requests

### 6. Consistency Validation

**Cross-Reference Checks**:
- Does Memory Bank align with actual codebase?
- Are ADRs reflected in current architecture?
- Do dev journals match git history?
- Is documentation current with recent changes?

**Identify Gaps**:
- Missing or outdated documentation
- Undocumented architectural decisions
- Inconsistencies between sources
- Knowledge gaps requiring clarification

### 7. Agent-Specific Context

**For Architect Agent**:
- Focus on architectural decisions and system design
- Review technical debt and improvement opportunities
- Assess scalability and performance considerations

**For Developer Agent**:
- Focus on current work items and immediate tasks
- Review recent implementation patterns
- Understand testing and deployment processes

**For Product Owner Agent**:
- Focus on requirements and user stories
- Review product roadmap and priorities
- Assess feature completion and user feedback

### 8. Next Steps Recommendation

**Based on Evidence**:
- What are the most urgent priorities?
- Are there any blockers or dependencies?
- What documentation needs updating?
- What architectural decisions are pending?

**Recommended Actions**:
1. **Immediate Tasks** - Ready to start now
2. **Dependency Resolution** - What needs clarification
3. **Documentation Updates** - What needs to be updated
4. **Strategic Items** - Longer-term considerations

## Quality Checklist

- [ ] Memory Bank reviewed (or noted if missing)
- [ ] Architecture documentation understood
- [ ] Recent development history reviewed
- [ ] Current project state assessed
- [ ] Documentation inconsistencies identified
- [ ] Agent-specific context established
- [ ] Next steps clearly recommended
- [ ] Any urgent issues flagged

## Output Template

```markdown
# Session Kickoff Summary

## Project Understanding
- **Project**: [Name and core purpose]
- **Current Phase**: [Development stage]
- **Last Updated**: [When Memory Bank was last updated]

## Documentation Health
- **Memory Bank**: [Exists/Missing/Outdated]
- **Architecture Docs**: [Current/Needs Update]
- **Dev Journals**: [Last entry date]
- **ADRs**: [Recent decisions noted]

## Current State
- **Active Branch**: [Git branch]
- **Recent Work**: [Summary from dev journals]
- **Project Health**: [Green/Yellow/Red with reasons]
- **Immediate Blockers**: [Any urgent issues]

## Inconsistencies Found
[List any documentation inconsistencies or gaps]

## Agent-Specific Context
[Relevant context for current agent role]

## Recommended Next Steps
1. [Most urgent priority]
2. [Secondary priority]
3. [Documentation updates needed]
```

## Integration Points

This task integrates with:
- **Memory Bank**: Primary source of project context
- **All Agents**: Universal session initialization
- **Document Project**: Can trigger if documentation missing
- **Update Memory Bank**: Can trigger if information outdated
- **Agent Activation**: Called at start of agent sessions

## Usage Patterns

**New Agent Session**:
1. Agent activates
2. Runs `session-kickoff` task
3. Reviews output and confirms understanding
4. Proceeds with informed context

**Project Handoff**:
1. New team member or AI session
2. Runs comprehensive kickoff
3. Identifies knowledge gaps
4. Updates documentation as needed

**Quality Gate**:
1. Before major feature work
2. After significant time gap
3. When context seems incomplete
4. As part of regular project health checks

## Notes

- This task should be lightweight for daily use but comprehensive for major handoffs
- Adapt depth based on project complexity and available time
- Can be automated as part of agent startup routines
- Helps prevent tunnel vision and context loss