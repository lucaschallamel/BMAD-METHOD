# Coding Standards and Principles

> **Purpose:** This document defines the core coding standards and principles that apply to all development work in BMAD projects. These are fundamental rules of software craftsmanship that ensure consistency, quality, and maintainability.

## Core Coding Principles

### Simplicity and Readability
- **[SF] Simplicity First:** Always choose the simplest viable solution. Complex patterns require explicit justification.
- **[RP] Readability Priority:** Code must be immediately understandable by both humans and AI.
- **[CA] Clean Architecture:** Generate cleanly formatted, logically structured code with consistent patterns.

### Dependency Management
- **[DM] Dependency Minimalism:** No new libraries without explicit request or compelling justification.
- **[DM-1] Security Reviews:** Review third-party dependencies for vulnerabilities quarterly.
- **[DM-2] Package Verification:** Prefer signed or verified packages.
- **[DM-3] Cleanup:** Remove unused or outdated dependencies promptly.
- **[DM-4] Documentation:** Document dependency updates in changelog.

### Development Workflow
- **[WF-FOCUS] Task Focus:** Focus on areas of code relevant to the task.
- **[WF-SCOPE] Scope Control:** Do not touch code unrelated to the task.
- **[WF-TEST] Testing:** Write thorough tests for all major functionality.
- **[WF-ARCH] Architecture Stability:** Avoid major changes to working patterns unless explicitly requested.
- **[WF-IMPACT] Impact Analysis:** Consider effects on other methods and code areas.

### Code Quality Standards
- **[DRY] DRY Principle:** No duplicate code. Reuse or extend existing functionality.
- **[REH] Error Handling:** Robust error handling for all edge cases and external interactions.
- **[CSD] Code Smell Detection:** Proactively identify and refactor:
  - Functions exceeding 30 lines
  - Files exceeding 300 lines
  - Nested conditionals beyond 2 levels
  - Classes with more than 5 public methods

### Security Principles
- **[IV] Input Validation:** All external data must be validated before processing.
- **[SFT] Security-First:** Implement proper authentication, authorization, and data protection.
- **[RL] Rate Limiting:** Rate limit all API endpoints.
- **[RLS] Row-Level Security:** Use row-level security always.
- **[CAP] Captcha Protection:** Captcha on all auth routes/signup pages.
- **[WAF] WAF Protection:** Enable attack challenge on hosting WAF when available.
- **[SEC-1] Sensitive Files:** DO NOT read or modify without prior approval:
  - .env files
  - */config/secrets.*
  - Any file containing API keys or credentials

### Performance and Resources
- **[PA] Performance Awareness:** Consider computational complexity and resource usage.
- **[RM] Resource Management:** Close connections and free resources appropriately.
- **[CMV] Constants Over Magic Values:** No magic strings or numbers. Use named constants.

### Commit Standards
- **[AC] Atomic Changes:** Make small, self-contained modifications.
- **[CD] Commit Discipline:** Use conventional commit format:
  ```
  type(scope): concise description
  
  [optional body with details]
  
  [optional footer with breaking changes/issue references]
  ```
  Types: feat, fix, docs, style, refactor, perf, test, chore

### Testing Standards
- **[TDT] Test-Driven Thinking:** Design all code to be easily testable from inception.
- **[ISA] Industry Standards:** Follow established conventions for the language and tech stack.

## Application to AI Development

### Communication Guidelines
- **[RAT] Rule Application Tracking:** Tag rule applications with abbreviations (e.g., [SF], [DRY]).
- **[EDC] Explanation Depth Control:** Scale explanation detail based on complexity.
- **[AS] Alternative Suggestions:** Offer alternative approaches with pros/cons when relevant.
- **[KBT] Knowledge Boundary Transparency:** Clearly communicate capability limits.

### Context Management
- **[TR] Transparent Reasoning:** Explicitly reference which rules influenced decisions.
- **[CWM] Context Window Management:** Be mindful of AI context limitations.
- **[SD] Strategic Documentation:** Comment only complex logic or critical functions.

## Integration with BMAD Workflows

These coding standards should be:
1. Referenced during architecture design decisions
2. Applied during story implementation
3. Validated during code reviews
4. Enforced through automated tooling where possible
5. Updated based on team learnings and retrospectives