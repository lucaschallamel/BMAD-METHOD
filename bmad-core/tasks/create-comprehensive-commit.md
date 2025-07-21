# Create Comprehensive Commit

This task guides the creation of a high-quality, comprehensive commit message that accurately reflects all staged changes, adhering to Conventional Commits 1.0 standard with anti-tunnel vision mechanisms.

## Purpose

Create commit messages that:
- Capture ALL work streams, not just the primary change
- Provide context for future developers
- Follow Conventional Commits standard
- Document the "why" behind changes
- Prevent tunnel vision through systematic evidence gathering

## Process

### 1. Comprehensive Evidence Gathering (MANDATORY)

#### 1.1 Staged Changes Analysis
Execute and analyze:
```bash
# Get summary and detailed view
git diff --staged --stat

# See operation types (Modified, Added, Deleted)
git diff --staged --name-status
```

Group changes by functional area:
- **Source Code**: Core application logic
- **API/Backend**: Endpoints, services, repositories
- **UI/Frontend**: Components, styles, templates
- **Documentation**: README, docs/, *.md files
- **Tests**: Test files, test utilities
- **Configuration**: Config files, environment settings
- **Database**: Migrations, schema changes
- **Build/Deploy**: CI/CD, build scripts

For each file, identify:
- New functionality added
- Existing functionality modified
- Bug fixes
- Refactoring or cleanup
- Documentation updates
- Test additions/modifications

#### 1.2 Completeness Check
```bash
# Check for unstaged/untracked files
git status --porcelain
```

If related files are unstaged:
- Prompt user about inclusion
- Ensure completeness of the commit

#### 1.3 Work Stream Identification
Identify:
- **Primary Work Stream**: Main focus of the commit
- **Secondary Work Streams**: Supporting changes
- **Cross-Functional Impact**: Changes spanning multiple areas
- **Architecture Impact**: Pattern or structural changes

### 2. Multi-Context Analysis (MANDATORY)

#### 2.1 Session Context
Review:
- Conversation history for context
- Original problem/request
- Key decisions made
- Scope evolution (if any)

#### 2.2 Development Context
Check for:
- Related dev journal entries
- Part of larger feature/fix
- Recent related commits
- Project milestones

#### 2.3 Business & Technical Context
Understand:
- User-facing benefits
- Technical improvements
- Problem-solution mapping
- Alternatives considered

### 3. Commit Message Synthesis

#### 3.1 Type and Scope Selection

**Types** (choose most significant):
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Formatting, no logic change
- `refactor`: Code restructuring
- `perf`: Performance improvement
- `test`: Test additions/modifications
- `chore`: Maintenance tasks

**Scope** examples:
- Component-specific: `api`, `ui`, `auth`, `db`
- Feature-specific: `user-management`, `reporting`
- System-wide: Use when changes affect multiple areas

#### 3.2 Message Structure

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Subject** (≤50 chars):
- Imperative mood ("add" not "adds")
- No period at end
- Capture overall achievement

**Body** (wrap at 72 chars):
- Explain what and why, not how
- Break down by work stream if multiple
- Include context for future developers
- Technical decisions and rationale

**Footer**:
- Breaking changes: `BREAKING CHANGE: description`
- Issue references: `Closes #123`
- Co-authorship: `Co-Authored-By: Name <email>`

### 4. Anti-Tunnel Vision Checklist

Before finalizing, verify ALL items:

**Content Coverage**:
- [ ] All staged files explained
- [ ] All functional areas documented
- [ ] All work streams identified
- [ ] Cross-functional impacts noted

**Technical Completeness**:
- [ ] Code changes include rationale
- [ ] API changes summarized
- [ ] UI changes explain user impact
- [ ] Database changes include migrations
- [ ] Configuration changes noted
- [ ] Test changes explained

**Context & Rationale**:
- [ ] Original problem stated
- [ ] Solution approach justified
- [ ] Technical decisions explained
- [ ] Future implications considered

**Message Quality**:
- [ ] Subject ≤50 chars, imperative
- [ ] Body explains what and why
- [ ] Logical information flow
- [ ] Appropriate detail level
- [ ] Conventional Commits format

### 5. Example Multi-Stream Commit

```
feat(user-management): Add role-based access control with UI and API support

Implemented comprehensive RBAC system to address security audit findings
and enable fine-grained permission management requested by enterprise
customers.

API Changes:
- Added /api/roles endpoints for CRUD operations
- Extended /api/users with role assignment capabilities
- Implemented permission checking middleware
- Added role-based route guards

UI Changes:
- Created RoleManager component for admin interface
- Added role assignment UI to user edit form
- Implemented permission-based UI element visibility
- Added role badge display to user lists

Database Changes:
- Added roles and user_roles tables
- Created permissions lookup table
- Migrated existing admin users to new role system

Testing:
- Comprehensive unit tests for role service
- Integration tests for permission middleware
- E2E tests for role management workflows
- Added test fixtures for various permission scenarios

Configuration:
- Added RBAC feature flags for gradual rollout
- Extended auth configuration with role providers
- Added default role mappings

Technical Decisions:
- Chose RBAC over ABAC for simplicity and performance
- Implemented as middleware for reusability
- Used capability-based permissions for flexibility

This enables customers to define custom roles with specific permissions,
addressing the #1 feature request from enterprise users while maintaining
backward compatibility with the existing admin/user model.

Closes #234, #245
Relates to #189

Co-Authored-By: AI Assistant <ai@example.com>
```

### 6. Execution

After verification:
1. Present commit message to user
2. Upon confirmation, execute:
   ```bash
   git commit -m "message"
   # or for multi-line:
   git commit
   ```

## Key Principles

- **Prevent Tunnel Vision**: Systematic evidence gathering
- **Multi-Stream Awareness**: Capture all work, not just primary
- **Future Developer Focus**: Context over implementation details
- **Comprehensive Coverage**: No significant work left undocumented
- **Quality Standards**: Clear, complete, conventional

## Memory Bank Integration

Consider updating Memory Bank after significant commits:
- For feature additions: Update `progress.md` and `activeContext.md`
- For architectural changes: Update `systemPatterns.md`
- For tech stack changes: Update `techContext.md`
- Run `update-memory-bank` task if changes are substantial