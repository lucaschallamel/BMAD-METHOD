# Create Architectural Decision Record (ADR)

This task guides the creation of an ADR to document significant architectural decisions.

## Initial Setup (if needed)

If the /docs/adr directory doesn't exist in the project:
1. Create the directory: `mkdir -p docs/adr`
2. Create a README.md explaining ADR purpose and structure
3. Create an index file to track all ADRs
4. Add to git tracking

## Process

### 1. Determine ADR Number

Check existing ADRs to determine the next number:
```bash
ls docs/adr/[0-9]*.md | tail -1
```

Format: NNNN (four digits, e.g., 0001, 0002)

### 2. Validate Need for ADR

Confirm this decision warrants an ADR by checking against triggers:
- Major technology choices (frameworks, databases, languages)
- Significant architectural patterns or styles
- Integration approaches between systems
- Security architecture decisions
- Performance optimization strategies

### 3. Gather Context

Before creating the ADR, collect:
- The problem or issue motivating this decision
- Technical and business constraints
- Alternative solutions considered
- Stakeholders involved in the decision

### 4. Create ADR File

Use the adr-tmpl.yaml template to create:
`docs/adr/NNNN-descriptive-title.md`

Example: `0001-use-react-for-frontend.md`

### 5. Fill Out Sections

Complete all sections of the ADR:
- **Status**: Start with "Proposed"
- **Context**: Neutral description of the situation
- **Decision**: Clear statement starting with "We will..."
- **Alternatives**: At least 3 options with pros/cons
- **Consequences**: Both positive and negative
- **Implementation**: Concrete next steps

### 6. Review and Finalize

- Ensure technical accuracy
- Verify all alternatives were fairly considered
- Check that consequences are realistic
- Update ADR index with new entry

### 7. Link Related ADRs

If this decision:
- Supersedes another ADR, update both files
- Relates to other decisions, add cross-references
- Changes previous decisions, note the evolution

## Quality Checklist

- [ ] Problem clearly stated
- [ ] Alternatives fairly evaluated
- [ ] Decision explicitly stated
- [ ] Consequences documented (positive and negative)
- [ ] Implementation steps defined
- [ ] Proper numbering and naming
- [ ] Index updated
- [ ] Related ADRs linked

## Memory Bank Integration

After creating an ADR:
1. Update `docs/memory-bank/systemPatterns.md` with the architectural decision
2. If technology stack changed, update `docs/memory-bank/techContext.md`
3. Update `docs/memory-bank/activeContext.md` with the decision context
4. Consider running `update-memory-bank` task for comprehensive update