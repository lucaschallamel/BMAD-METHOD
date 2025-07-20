# Sprint Review Triggers

This document outlines when and how to conduct sprint reviews within the BMAD framework.

## When to Conduct Sprint Reviews

### Regular Cadence
- **End of Sprint**: Always conduct at the conclusion of each defined sprint period
- **Weekly/Bi-weekly**: Based on your sprint duration
- **After Major Milestones**: When significant features or phases complete

### Event-Based Triggers
- **Epic Completion**: When all stories in an epic are done
- **Release Preparation**: Before any production release
- **Team Changes**: When team composition changes significantly
- **Process Issues**: When recurring blockers or challenges arise
- **Client Reviews**: Before or after stakeholder demonstrations

## Sprint Review Components

### 1. **Metrics Gathering** (Automated)
- Git commit analysis
- PR merge tracking
- Issue closure rates
- Test coverage changes
- Build/deployment success rates

### 2. **Achievement Documentation**
- Feature completions with evidence
- Technical improvements made
- Documentation updates
- Bug fixes and resolutions

### 3. **Retrospective Elements**
- What went well (celebrate successes)
- What didn't go well (identify issues)
- What we learned (capture insights)
- What we'll try next (action items)

### 4. **Memory Bank Updates**
- Update progress.md with completed features
- Update activeContext.md with current state
- Document new patterns in systemPatterns.md
- Reflect on technical decisions

## Sprint Review Best Practices

### Preparation
- Schedule review 1-2 days before sprint end
- Gather metrics using git commands beforehand
- Review dev journals from the sprint
- Prepare demo materials if applicable

### Facilitation
- Keep to 60-90 minutes maximum
- Encourage all team members to contribute
- Focus on facts and evidence
- Balance positive and improvement areas
- Make action items specific and assignable

### Documentation
- Use consistent naming: `YYYYMMDD-sprint-review.md`
- Place in `docs/devJournal/` directory
- Link to relevant PRs, issues, and commits
- Include screenshots or recordings when helpful

### Follow-up
- Assign owners to all action items
- Set deadlines for improvements
- Review previous sprint's action items
- Update project Memory Bank
- Share outcomes with stakeholders

## Integration with BMAD Workflow

### Before Sprint Review
1. Complete all story reviews
2. Update CHANGELOG.md
3. Ensure dev journals are current
4. Close completed issues/PRs

### During Sprint Review
1. Use `*sprint-review` command as Scrum Master
2. Follow the guided template
3. Gather team input actively
4. Document honestly and thoroughly

### After Sprint Review
1. Update Memory Bank (`*update-memory-bank`)
2. Create next sprint's initial backlog
3. Communicate outcomes to stakeholders
4. Schedule action item check-ins
5. Archive sprint artifacts

## Anti-Patterns to Avoid

- **Skipping Reviews**: Even failed sprints need reviews
- **Solo Reviews**: Include the whole team when possible
- **Blame Sessions**: Focus on process, not people
- **No Action Items**: Every review should produce improvements
- **Lost Knowledge**: Always document in standard location
- **Metrics Without Context**: Numbers need interpretation

## Quick Reference

### Git Commands for Metrics
```bash
# Commits in sprint
git log --since="2024-01-01" --until="2024-01-14" --oneline | wc -l

# PRs merged
git log --merges --since="2024-01-01" --until="2024-01-14" --oneline

# Issues closed
git log --since="2024-01-01" --until="2024-01-14" --grep="close[sd]\|fixe[sd]" --oneline

# Active branches
git branch --format='%(refname:short) %(creatordate:short)' | grep '2024-01'
```

### Review Checklist
- [ ] Sprint dates and goal documented
- [ ] All metrics gathered
- [ ] Features linked to PRs
- [ ] Retrospective completed
- [ ] Action items assigned
- [ ] Memory Bank updated
- [ ] Next sprint prepared