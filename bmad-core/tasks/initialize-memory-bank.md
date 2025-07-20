# Initialize Memory Bank

This task creates and initializes the Memory Bank structure for maintaining context across AI sessions. The Memory Bank ensures continuity and deep understanding of the project even when AI memory resets.

## Purpose

The Memory Bank serves as persistent memory for AI agents, containing:
- Project foundation and goals
- Current work context
- System architecture and patterns
- Technical decisions and constraints
- Progress tracking

## Initial Setup

### 1. Create Directory Structure

```bash
mkdir -p docs/memory-bank
```

### 2. Determine Initialization Type

Ask the user:
- Is this a new project? → Create from scratch
- Is this an existing project? → Analyze and populate
- Do you have existing documentation? → Import and adapt

### 3. Create Core Memory Bank Files

The Memory Bank consists of 6 core files that build upon each other:

#### 3.1 Project Brief (`projectbrief.md`)
Foundation document - the source of truth for project scope:
- Core requirements and goals
- Project vision and objectives
- Success criteria
- Constraints and boundaries

#### 3.2 Product Context (`productContext.md`)
The "why" behind the project:
- Problems being solved
- User needs and pain points
- Expected outcomes
- User experience goals

#### 3.3 System Patterns (`systemPatterns.md`)
Technical architecture and decisions:
- System architecture overview
- Key design patterns
- Component relationships
- Integration points
- Critical implementation paths

#### 3.4 Tech Context (`techContext.md`)
Technology stack and environment:
- Languages and frameworks
- Development tools
- Dependencies and versions
- Technical constraints
- Build and deployment

#### 3.5 Active Context (`activeContext.md`)
Current work focus:
- Active work items
- Recent changes
- Current decisions
- Next priorities
- Open questions

#### 3.6 Progress (`progress.md`)
Project state tracking:
- Completed features
- Work in progress
- Known issues
- Technical debt
- Evolution of decisions

## Process

### For New Projects

1. **Gather Project Information**
   - Interview user about project goals
   - Understand target users
   - Define success criteria
   - Identify constraints

2. **Create Initial Files**
   - Start with projectbrief.md
   - Populate product context
   - Define initial architecture
   - Document tech stack
   - Set initial active context
   - Initialize progress tracking

### For Existing Projects

1. **Analyze Current State**
   ```bash
   # Review existing documentation
   - README files
   - Architecture docs
   - ADRs
   - Dev journals
   - Changelogs
   ```

2. **Extract Key Information**
   - Project purpose and goals
   - Current architecture
   - Technology decisions
   - Recent work
   - Known issues

3. **Populate Memory Bank**
   - Synthesize findings into 6 core files
   - Maintain accuracy to reality
   - Document technical debt
   - Capture current priorities

### 4. Validation

After creating initial files:
1. Review with user for accuracy
2. Ensure consistency across files
3. Verify no critical information missing
4. Confirm next steps are clear

## Templates

Use the memory bank templates from `bmad-core/templates/memory-bank/`:
- `projectbrief-tmpl.yaml`
- `productContext-tmpl.yaml`
- `systemPatterns-tmpl.yaml`
- `techContext-tmpl.yaml`
- `activeContext-tmpl.yaml`
- `progress-tmpl.yaml`

## Integration Points

The Memory Bank integrates with:
- **Session Start**: Agents read memory bank first
- **Dev Journals**: Update activeContext and progress
- **ADRs**: Update systemPatterns with decisions
- **Story Completion**: Update progress and activeContext
- **Architecture Changes**: Update systemPatterns

## Quality Checklist

- [ ] All 6 core files created
- [ ] Information is accurate and current
- [ ] Files follow hierarchical structure
- [ ] No contradictions between files
- [ ] Next steps clearly defined
- [ ] Technical decisions documented
- [ ] Progress accurately reflected

## Notes

- Memory Bank is the foundation for AI continuity
- Must be updated regularly to maintain value
- All agents should read before starting work
- Updates should be comprehensive but concise
- British English for consistency