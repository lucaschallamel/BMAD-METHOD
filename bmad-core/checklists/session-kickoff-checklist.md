# Session Kickoff Checklist

This checklist ensures AI agents have complete project context and understanding before starting work. It provides systematic session initialization across all agent types.

[[LLM: INITIALIZATION INSTRUCTIONS - SESSION KICKOFF

This is the FIRST checklist to run when starting any new AI agent session. It prevents context gaps, reduces mistakes, and ensures efficient work.

IMPORTANT: This checklist is mandatory for:
- New AI sessions on existing projects
- After significant time gaps (>24 hours)
- When switching between major project areas
- After major changes or pivots
- When onboarding new team members

The goal is to establish complete context BEFORE any work begins.]]

## 1. MEMORY BANK REVIEW

[[LLM: Memory Bank is the primary source of project truth. Review systematically, noting dates and potential staleness.]]

### 1.1 Core Memory Bank Files

- [ ] **projectbrief.md** reviewed - Project foundation, goals, and scope understood
- [ ] **activeContext.md** reviewed - Current priorities and immediate work identified
- [ ] **progress.md** reviewed - Project state and completed features understood
- [ ] **systemPatterns.md** reviewed - Architecture patterns and decisions noted
- [ ] **techContext.md** reviewed - Technology stack and constraints clear
- [ ] **productContext.md** reviewed - Problem space and user needs understood
- [ ] Last update timestamps noted for each file
- [ ] Potential inconsistencies between files identified

### 1.2 Memory Bank Health Assessment

- [ ] Files exist and are accessible
- [ ] Information appears current (updated within last sprint)
- [ ] No major gaps in documentation identified
- [ ] Cross-references between files are consistent
- [ ] Action items for updates noted if needed

### 1.3 Project Structure Verification

[[LLM: Reference project-scaffolding-preference.md for standard project structure. Verify actual structure aligns with BMAD conventions.]]

- [ ] Project follows standard directory structure
- [ ] BMAD-specific directories exist (docs/memory-bank, docs/adr, docs/devJournal)
- [ ] Documentation directories properly organized
- [ ] Source code organization follows conventions
- [ ] Test structure aligns with project type

## 2. ARCHITECTURE DOCUMENTATION

[[LLM: Architecture drives implementation. Understand the system design thoroughly.]]

### 2.1 Architecture Documents

- [ ] Primary architecture document located and reviewed
- [ ] Document type identified (greenfield, brownfield, frontend, fullstack)
- [ ] Core architectural decisions understood
- [ ] System components and relationships clear
- [ ] Technology choices and versions noted
- [ ] API documentation reviewed if exists
- [ ] Database schemas understood if applicable

### 2.2 Architecture Alignment

- [ ] Architecture aligns with Memory Bank information
- [ ] Recent changes or updates identified
- [ ] ADRs reviewed for architectural decisions
- [ ] Integration points clearly understood
- [ ] Deployment architecture reviewed

## 3. DEVELOPMENT HISTORY

[[LLM: Recent history provides context for current work and challenges.]]

### 3.1 Dev Journal Review

- [ ] Located Dev Journal entries (last 3-5)
- [ ] Recent work and decisions understood
- [ ] Challenges and blockers identified
- [ ] Technical debt or issues noted
- [ ] Patterns in development identified
- [ ] Key learnings extracted

### 3.2 ADR Review

- [ ] Recent ADRs reviewed (last 3-5)
- [ ] Current architectural decisions understood
- [ ] Superseded decisions noted
- [ ] Pending decisions identified
- [ ] ADR alignment with architecture verified

## 4. CURRENT PROJECT STATE

[[LLM: Understanding the current state prevents duplicate work and conflicts.]]

### 4.1 Git Status Check

- [ ] Current branch identified
- [ ] Clean working directory confirmed
- [ ] Recent commits reviewed (last 10)
- [ ] Outstanding changes understood
- [ ] Merge conflicts checked
- [ ] Remote synchronization status

### 4.2 Project Health

- [ ] Build status checked
- [ ] Test suite status verified
- [ ] Known failing tests documented
- [ ] Blocking issues identified
- [ ] Dependencies up to date
- [ ] Security vulnerabilities checked

## 5. SPRINT/ITERATION CONTEXT

[[LLM: Align work with current sprint goals and priorities.]]

### 5.1 Sprint Status

- [ ] Current sprint identified
- [ ] Sprint goals understood
- [ ] User stories in progress identified
- [ ] Completed stories this sprint noted
- [ ] Sprint timeline clear
- [ ] Team velocity understood

### 5.2 Priority Alignment

- [ ] Immediate priorities identified
- [ ] Blockers and dependencies clear
- [ ] Next planned work understood
- [ ] Risk areas identified
- [ ] Resource constraints noted

## 6. CONSISTENCY VALIDATION

[[LLM: Inconsistencies cause confusion and errors. Identify and flag them.]]

### 6.1 Cross-Reference Check

- [ ] Memory Bank aligns with codebase reality
- [ ] Architecture matches implementation
- [ ] ADRs reflected in current code
- [ ] Dev Journal matches git history
- [ ] Documentation current with changes

### 6.2 Gap Identification

- [ ] Missing documentation identified
- [ ] Outdated sections flagged
- [ ] Undocumented decisions noted
- [ ] Knowledge gaps listed
- [ ] Update requirements documented

## 7. AGENT-SPECIFIC CONTEXT

[[LLM: Different agents need different context emphasis.]]

### 7.1 Role-Based Focus

**For Architect:**
- [ ] Architectural decisions and rationale clear
- [ ] Technical debt understood
- [ ] Scalability considerations reviewed
- [ ] System boundaries defined

**For Developer:**
- [ ] Current implementation tasks clear
- [ ] Coding patterns understood
- [ ] Testing requirements known
- [ ] Local setup verified

**For PM/PO:**
- [ ] Requirements alignment verified
- [ ] User stories prioritized
- [ ] Stakeholder needs understood
- [ ] Timeline constraints clear

**For QA:**
- [ ] Test coverage understood
- [ ] Quality gates defined
- [ ] Known issues documented
- [ ] Testing strategy clear

### 7.2 Handoff Context

- [ ] Previous agent's work understood
- [ ] Pending decisions identified
- [ ] Open questions documented
- [ ] Next steps clear

## 8. RECOMMENDED ACTIONS

[[LLM: Based on the review, what should happen next?]]

### 8.1 Immediate Actions

- [ ] Most urgent task identified
- [ ] Blockers that need resolution listed
- [ ] Quick wins available noted
- [ ] Risk mitigation needed specified

### 8.2 Documentation Updates

- [ ] Memory Bank updates needed listed
- [ ] Architecture updates required noted
- [ ] ADRs to be created identified
- [ ] Dev Journal entries planned

### 8.3 Strategic Considerations

- [ ] Technical debt to address
- [ ] Architectural improvements needed
- [ ] Process improvements suggested
- [ ] Knowledge gaps to fill

## SESSION KICKOFF SUMMARY

[[LLM: Generate a concise summary report with:

1. **Project Context**
   - Project name and purpose
   - Current phase/sprint
   - Key technologies

2. **Documentation Health**
   - Memory Bank status (Current/Outdated/Missing)
   - Architecture status
   - Overall documentation quality

3. **Current State**
   - Active work items
   - Recent completions
   - Immediate blockers

4. **Inconsistencies Found**
   - List any misalignments
   - Documentation gaps
   - Update requirements

5. **Recommended Next Steps**
   - Priority order
   - Estimated effort
   - Dependencies

Keep it action-oriented and concise.]]

### Summary Report

**Status:** [Complete/Partial/Blocked]

**Key Findings:**
- Documentation Health: [Good/Fair/Poor]
- Project State: [On Track/At Risk/Blocked]
- Context Quality: [Complete/Adequate/Insufficient]

**Priority Actions:**
1. [Most urgent action]
2. [Second priority]
3. [Third priority]

**Blockers:**
- [List any blocking issues]

**Agent Ready:** [Yes/No - with reason if No]