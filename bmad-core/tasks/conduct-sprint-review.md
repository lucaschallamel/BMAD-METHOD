# Conduct Sprint Review

This task guides the Scrum Master through conducting a comprehensive sprint review and retrospective at the end of each sprint or major iteration.

## Purpose

- Document sprint achievements and deliverables
- Analyze sprint metrics and goal completion
- Facilitate team retrospective
- Capture learnings and action items
- Update Memory Bank with sprint outcomes

## Process

### 1. Gather Sprint Context

Before starting the review, collect:

**Sprint Information**:
- Sprint dates (start and end)
- Sprint goal/theme
- Team participants
- Active branches/releases

**Metrics** (use git commands):
```bash
# Commits during sprint
git log --since="YYYY-MM-DD" --until="YYYY-MM-DD" --oneline | wc -l

# PRs merged
git log --merges --since="YYYY-MM-DD" --until="YYYY-MM-DD" --oneline | wc -l

# Issues closed
git log --since="YYYY-MM-DD" --until="YYYY-MM-DD" --grep="close[sd]\|fixe[sd]" --oneline | wc -l

# Branches created
git branch --format='%(refname:short) %(creatordate:short)' | grep 'YYYY-MM'
```

### 2. Review Dev Journals

Scan recent dev journal entries to identify:
- Major features completed
- Technical challenges overcome
- Patterns established
- Decisions made

```bash
ls -la docs/devJournal/*.md | tail -10
```

### 3. Review ADRs

Check for new architectural decisions:
```bash
ls -la docs/adr/*.md | tail -5
```

### 4. Create Sprint Review Document

Create file: `docs/devJournal/YYYYMMDD-sprint-review.md`

Use the sprint-review-tmpl.yaml template (or create manually) covering:

#### Essential Sections

**1. Sprint Overview**
- Sprint dates and goal
- Participants and roles
- Branch/release information

**2. Achievements & Deliverables**
- Major features completed (with PR links)
- Technical milestones reached
- Documentation updates
- Testing improvements

**3. Sprint Metrics**
- Commit count
- PRs merged (with details)
- Issues closed
- Test coverage changes

**4. Goal Review**
- What was planned vs achieved
- Items not completed (with reasons)
- Goal completion percentage

**5. Demo & Walkthrough**
- Screenshots/videos if available
- Instructions for reviewing features

**6. Retrospective**
- **What Went Well**: Successes and effective practices
- **What Didn't Go Well**: Blockers and pain points
- **What We Learned**: Technical and process insights
- **What We'll Try Next**: Improvement experiments

**7. Action Items**
- Concrete actions with owners
- Deadlines for next sprint
- Process improvements to implement

**8. References**
- Dev journal entries from sprint
- New/updated ADRs
- CHANGELOG updates
- Memory Bank updates

### 5. Update Memory Bank

After sprint review, update:

**activeContext.md**:
- Current sprint outcomes
- Next sprint priorities
- Active action items

**progress.md**:
- Features completed this sprint
- Overall project progress
- Velocity trends

**systemPatterns.md** (if applicable):
- New patterns adopted
- Technical decisions from retrospective

### 6. Facilitate Team Discussion

If in party-mode or team setting:
- Share sprint review with team
- Gather additional feedback
- Refine action items collaboratively
- Celebrate achievements

### 7. Prepare for Next Sprint

Based on review outcomes:
- Update backlog priorities
- Create next sprint goal
- Schedule action item follow-ups
- Communicate decisions to stakeholders

## Quality Checklist

- [ ] All sprint metrics gathered and documented
- [ ] Achievements clearly linked to sprint goal
- [ ] Honest assessment of what wasn't completed
- [ ] Retrospective captures diverse perspectives
- [ ] Action items are specific and assigned
- [ ] Memory Bank updated with outcomes
- [ ] Document follows naming convention
- [ ] References to related documentation included

## Output

The sprint review document serves as:
- Historical record of sprint progress
- Input for project reporting
- Source for continuous improvement
- Knowledge transfer for future sprints
- Update source for Memory Bank

## Notes

- Conduct reviews even for partial sprints
- Include both technical and process perspectives
- Be honest about challenges and failures
- Focus on actionable improvements
- Link to specific evidence (PRs, commits, journals)