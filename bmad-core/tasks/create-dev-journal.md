# Create Dev Journal Entry

This task guides the creation of a development journal entry to document the session's work, decisions, and progress.

## Prerequisites
- Have git access to review commits and changes

## Initial Setup (if needed)

[[LLM: The Dev Journal location follows the standard defined in project-scaffolding-preference.md]]

If the /docs/devJournal directory doesn't exist in the project:
1. Create the directory: `mkdir -p docs/devJournal`
2. Create a README.md in that directory explaining its purpose
3. Add to git tracking

## Process

### 1. Gather Session Context

First, collect the following information:
- Current git branch: `git branch --show-current`
- Session timeframe (when work started and ended)
- Recent commits: `git log --since="[session-start]" --oneline`
- Changed files: `git status --porcelain`

### 2. Determine Entry Filename

Create filename using pattern: `YYYYMMDD-NN.md`
- YYYYMMDD: Today's date
- NN: Sequential number (01, 02, etc.) if multiple entries per day

Check existing entries: `ls docs/devJournal/YYYYMMDD-*.md`

### 3. Create Journal Entry

Use the dev-journal-tmpl.yaml template to create a comprehensive entry covering:

#### Essential Sections
1. **Session Overview** - Brief summary of accomplishments
2. **Work Streams** - Detailed breakdown of each area of work
3. **Implementation Details** - Key code changes and decisions
4. **Validation & Testing** - What was tested and verified
5. **Current State & Next Steps** - Where we are and what's next

**Sprint Journal Entries**: For end-of-sprint dev journal entries, cross-reference with `sprint-review-checklist.md` to ensure all sprint accomplishments and learnings are captured.

#### Evidence Gathering
- Review all commits made during session
- Check modified files by functional area
- Note any new patterns or architectural decisions
- Document challenges encountered and solutions found

### 4. Quality Checks

Before finalizing, ensure:
- [ ] All work streams are documented
- [ ] Technical decisions are explained
- [ ] Next steps are clear
- [ ] File changes match git history
- [ ] Learnings and patterns are captured

### 5. Save and Review

- Save to: `/docs/devJournal/YYYYMMDD-NN.md`
- Review for completeness and clarity
- Ensure future developers can understand the session's impact

## Tips

- Focus on the "why" behind changes, not just "what"
- Document both successes and challenges
- Include enough detail for context without overwhelming
- Cross-reference related stories, ADRs, or PRs
- Use British English for consistency
- For sprint-end entries, ensure alignment with sprint review documentation using `sprint-review-checklist.md`

## Memory Bank Integration

After creating a dev journal entry:
1. Update `docs/memory-bank/activeContext.md` with current work and decisions
2. Update `docs/memory-bank/progress.md` with completed features and status
3. If patterns or insights discovered, update `docs/memory-bank/systemPatterns.md`
4. Consider running `update-memory-bank` task for comprehensive update

This ensures AI agents in future sessions have access to session context and learnings.