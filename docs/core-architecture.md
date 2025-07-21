# BMad Method: Core Architecture

## 1. Overview

The BMad Method is designed to provide agentic modes, tasks and templates to allow repeatable helpful workflows be it for agile agentic development, or expansion into vastly different domains. The core purpose of the project is to provide a structured yet flexible set of prompts, templates, and workflows that users can employ to guide AI agents (like Gemini, Claude, or ChatGPT) to perform complex tasks, guided discussions, or other meaningful domain specific flows in a predictable, high-quality manner.

The systems core module facilitates a full development lifecycle tailored to the challenges of current modern AI Agentic tooling:

1. **Ideation & Planning**: Brainstorming, market research, and creating project briefs.
2. **Architecture & Design**: Defining system architecture and UI/UX specifications.
3. **Development Execution**: A cyclical workflow where a Scrum Master (SM) agent drafts stories with extremely specific context and a Developer (Dev) agent implements them one at a time. This process works for both new (Greenfield) and existing (Brownfield) projects.

## 2. System Architecture Diagram

The entire BMad-Method ecosystem is designed around the installed `bmad-core` directory, which acts as the brain of the operation. The `tools` directory provides the means to process and package this brain for different environments.

```mermaid
graph TD
    subgraph BMad Method Project
        subgraph Core Framework
            A["bmad-core"]
            A --> B["agents"]
            A --> C["agent-teams"]
            A --> D["workflows"]
            A --> E["templates"]
            A --> F["tasks"]
            A --> G["checklists"]
            A --> H["data (KB)"]
        end

        subgraph Tooling
            I["tools/builders/web-builder.js"]
        end

        subgraph Outputs
            J["dist"]
        end

        B -- defines dependencies for --> E
        B -- defines dependencies for --> F
        B -- defines dependencies for --> G
        B -- defines dependencies for --> H

        C -- bundles --> B
        I -- reads from --> A
        I -- creates --> J
    end

    subgraph Target Environments
        K["IDE (Cursor, VS Code, etc.)"]
        L["Web UI (Gemini, ChatGPT)"]
    end

    B --> K
    J --> L

    style A fill:#1a73e8,color:#fff
    style I fill:#f9ab00,color:#fff
    style J fill:#34a853,color:#fff
```

## 3. Core Components

The `bmad-core` directory contains all the definitions and resources that give the agents their capabilities.

### 3.1. Agents (`bmad-core/agents/`)

- **Purpose**: These are the foundational building blocks of the system. Each markdown file (e.g., `bmad-master.md`, `pm.md`, `dev.md`) defines the persona, capabilities, and dependencies of a single AI agent.
- **Structure**: An agent file contains a YAML header that specifies its role, persona, dependencies, and startup instructions. These dependencies are lists of tasks, templates, checklists, and data files that the agent is allowed to use.
- **Startup Instructions**: Agents can include startup sequences that load project-specific documentation from the `docs/` folder, such as coding standards, API specifications, or project structure documents. This provides immediate project context upon activation.
- **Document Integration**: Agents can reference and load documents from the project's `docs/` folder as part of tasks, workflows, or startup sequences. Users can also drag documents directly into chat interfaces to provide additional context.
- **Example**: The `bmad-master` agent lists its dependencies, which tells the build tool which files to include in a web bundle and informs the agent of its own capabilities.

### 3.2. Agent Teams (`bmad-core/agent-teams/`)

- **Purpose**: Team files (e.g., `team-all.yaml`) define collections of agents and workflows that are bundled together for a specific purpose, like "full-stack development" or "backend-only". This creates a larger, pre-packaged context for web UI environments.
- **Structure**: A team file lists the agents to include. It can use wildcards, such as `"*"` to include all agents. This allows for the creation of comprehensive bundles like `team-all`.

### 3.3. Workflows (`bmad-core/workflows/`)

- **Purpose**: Workflows are YAML files (e.g., `greenfield-fullstack.yaml`) that define a prescribed sequence of steps and agent interactions for a specific project type. They act as a strategic guide for the user and the `bmad-orchestrator` agent.
- **Structure**: A workflow defines sequences for both complex and simple projects, lists the agents involved at each step, the artifacts they create, and the conditions for moving from one step to the next. It often includes a Mermaid diagram for visualization.

### 3.4. Reusable Resources (`templates`, `tasks`, `checklists`, `data`)

- **Purpose**: These folders house the modular components that are dynamically loaded by agents based on their dependencies.
  - **`templates/`**: Contains markdown templates for common documents like PRDs, architecture specifications, and user stories.
  - **`tasks/`**: Defines the instructions for carrying out specific, repeatable actions like "shard-doc" or "create-next-story".
  - **`checklists/`**: Provides quality assurance checklists for agents like the Product Owner (`po`) or Architect.
  - **`data/`**: Contains the core knowledge base (`bmad-kb.md`), technical preferences (`technical-preferences.md`), and other key data files.

#### 3.4.1. Template Processing System

A key architectural principle of BMad is that templates are self-contained and interactive - they embed both the desired document output and the LLM instructions needed to work with users. This means that in many cases, no separate task is needed for document creation, as the template itself contains all the processing logic.

The BMad framework employs a sophisticated template processing system orchestrated by three key components:

- **`template-format.md`** (`bmad-core/utils/`): Defines the foundational markup language used throughout all BMad templates. This specification establishes syntax rules for variable substitution (`{{placeholders}}`), AI-only processing directives (`[[LLM: instructions]]`), and conditional logic blocks. Templates follow this format to ensure consistent processing across the system.

- **`create-doc.md`** (`bmad-core/tasks/`): Acts as the orchestration engine that manages the entire document generation workflow. This task coordinates template selection, manages user interaction modes (incremental vs. rapid generation), enforces template-format processing rules, and handles validation. It serves as the primary interface between users and the template system.

- **`advanced-elicitation.md`** (`bmad-core/tasks/`): Provides an interactive refinement layer that can be embedded within templates through `[[LLM: instructions]]` blocks. This component offers 10 structured brainstorming actions, section-by-section review capabilities, and iterative improvement workflows to enhance content quality.

The system maintains a clean separation of concerns: template markup is processed internally by AI agents but never exposed to users, while providing sophisticated AI processing capabilities through embedded intelligence within the templates themselves.

#### 3.4.2. Technical Preferences System

BMad includes a personalization layer through the `technical-preferences.md` file in `bmad-core/data/`. This file serves as a persistent technical profile that influences agent behavior across all projects.

**Purpose and Benefits:**

- **Consistency**: Ensures all agents reference the same technical preferences
- **Efficiency**: Eliminates the need to repeatedly specify preferred technologies
- **Personalization**: Agents provide recommendations aligned with user preferences
- **Learning**: Captures lessons learned and preferences that evolve over time

**Content Structure:**
The file typically includes preferred technology stacks, design patterns, external services, coding standards, and anti-patterns to avoid. Agents automatically reference this file during planning and development to provide contextually appropriate suggestions.

**Integration Points:**

- Templates can reference technical preferences during document generation
- Agents suggest preferred technologies when appropriate for project requirements
- When preferences don't fit project needs, agents explain alternatives
- Web bundles can include preferences content for consistent behavior across platforms

**Evolution Over Time:**
Users are encouraged to continuously update this file with discoveries from projects, adding both positive preferences and technologies to avoid, creating a personalized knowledge base that improves agent recommendations over time.

#### 3.4.3. Memory Bank Architecture

BMad introduces a sophisticated Memory Bank pattern for persistent AI context management across development sessions. This addresses one of the most significant challenges in AI-assisted development: maintaining continuity and context between sessions.

**Purpose and Benefits:**

- **Context Persistence**: Maintains project understanding across multiple development sessions
- **Knowledge Continuity**: Preserves architectural decisions, patterns, and project-specific knowledge
- **Efficient Onboarding**: New team members or agents can quickly understand project state
- **Decision Tracking**: Links to ADR system for comprehensive decision documentation

**Memory Bank Structure:**
The Memory Bank creates a standardized directory structure in `docs/memory-bank/` containing:

- `projectContext.md`: Core project understanding and business context
- `techContext.md`: Technical architecture and implementation details
- `systemPatterns.md`: Established patterns and conventions
- `activeContext.md`: Current development state and priorities
- `progress.md`: Development milestones and completed work

**Integration Points:**

- Agents reference Memory Bank during session initialization
- Development workflows update Memory Bank as work progresses
- QA reviews validate Memory Bank accuracy during story reviews
- Sprint reviews use Memory Bank for comprehensive project assessment

#### 3.4.4. Architecture Decision Records (ADR) System

BMad incorporates a comprehensive ADR system for tracking and documenting technical decisions throughout the project lifecycle.

**Purpose and Benefits:**

- **Decision Transparency**: Clear documentation of why technical choices were made
- **Historical Context**: Understanding the reasoning behind past decisions
- **Change Management**: Structured approach to evolving architectural decisions
- **Knowledge Transfer**: Preserving institutional knowledge for team transitions

**ADR Structure:**
ADRs follow a standardized format covering:

- Decision context and problem statement
- Considered options and trade-offs
- Final decision and rationale
- Consequences and implications
- Implementation notes and timeline

**Integration Points:**

- Architect agent creates ADRs for significant technical decisions
- Development workflows reference relevant ADRs during implementation
- Memory Bank system links to ADRs for comprehensive context
- Sprint reviews evaluate ADR outcomes and lessons learned

#### 3.4.5. Development Journal System

The Development Journal system provides structured documentation for individual development sessions and overall project progress.

**Purpose and Benefits:**

- **Session Documentation**: Capturing work completed, decisions made, and issues encountered
- **Progress Tracking**: Understanding velocity and identifying bottlenecks
- **Knowledge Preservation**: Preventing loss of important insights and lessons learned
- **Retrospective Support**: Providing detailed data for sprint reviews and process improvement

**Journal Structure:**
Development journals include:

- Session objectives and planned work
- Technical work completed with context
- Decisions made and rationale
- Challenges encountered and solutions
- Next session priorities and blockers

**Integration Points:**

- Dev agent updates journals throughout development sessions
- SM agent references journals when planning subsequent stories
- Memory Bank incorporates journal insights into project context
- Sprint reviews aggregate journal data for comprehensive assessment

#### 3.4.6. Project Scaffolding Standards

BMad now includes standardized project scaffolding preferences that establish consistent directory structures and organizational patterns across all projects.

**Purpose and Benefits:**

- **Standardization**: Consistent project organization across all BMad projects
- **Efficiency**: Reduced setup time with established conventions
- **Integration**: Seamless integration with Memory Bank, ADR, and journal systems
- **Scalability**: Patterns that work for projects of varying complexity

**Standard Directory Structure:**

```
/docs
  /adr           # Architecture Decision Records
  /devJournal    # Development journals
  /memory-bank   # Persistent AI context
  /prd           # Sharded Product Requirements Documents
  /architecture  # Sharded Architecture Documents
```

**Integration Points:**

- All agents reference scaffolding preferences during project initialization
- Templates automatically create required directory structures
- Memory Bank and ADR systems rely on standardized locations
- Installation scripts ensure proper project structure setup

## 4. The Build & Delivery Process

The framework is designed for two primary environments: local IDEs and web-based AI chat interfaces. The `web-builder.js` script is the key to supporting the latter.

### 4.1. Web Builder (`tools/builders/web-builder.js`)

- **Purpose**: This Node.js script is responsible for creating the `.txt` bundles found in `dist`.
- **Process**:
  1. **Resolves Dependencies**: For a given agent or team, the script reads its definition file.
  2. It recursively finds all dependent resources (tasks, templates, etc.) that the agent/team needs.
  3. **Bundles Content**: It reads the content of all these files and concatenates them into a single, large text file, with clear separators indicating the original file path of each section.
  4. **Outputs Bundle**: The final `.txt` file is saved in the `dist` directory, ready to be uploaded to a web UI.

### 4.2. Environment-Specific Usage

- **For IDEs**: Users interact with the agents directly via their markdown files in `bmad-core/agents/`. The IDE integration (for Cursor, Claude Code, etc.) knows how to call these agents.
- **For Web UIs**: Users upload a pre-built bundle from `dist`. This single file provides the AI with the context of the entire team and all their required tools and knowledge.

## 5. BMad Workflows

### 5.1. The Planning Workflow

Before development begins, BMad follows a structured planning workflow that establishes the foundation for successful project execution:

```mermaid
graph TD
    A["Start: Project Idea"] --> B{"Optional: Analyst Brainstorming"}
    B -->|Yes| C["Analyst: Market Research & Analysis"]
    B -->|No| D["Create Project Brief"]
    C --> D["Analyst: Create Project Brief"]
    D --> E["PM: Create PRD from Brief"]
    E --> F["Architect: Create Architecture from PRD"]
    F --> G["PO: Run Master Checklist"]
    G --> H{"Documents Aligned?"}
    H -->|Yes| I["Planning Complete"]
    H -->|No| J["PO: Update Epics & Stories"]
    J --> K["Update PRD/Architecture as needed"]
    K --> G
    I --> L["📁 Switch to IDE"]
    L --> M["PO: Shard Documents"]
    M --> N["Ready for SM/Dev Cycle"]

    style I fill:#34a853,color:#fff
    style G fill:#f9ab00,color:#fff
    style L fill:#1a73e8,color:#fff
    style N fill:#34a853,color:#fff
```

**Key Planning Phases:**

1. **Optional Analysis**: Analyst conducts market research and competitive analysis
2. **Project Brief**: Foundation document created by Analyst or user
3. **PRD Creation**: PM transforms brief into comprehensive product requirements
4. **Architecture Design**: Architect creates technical foundation based on PRD
5. **Validation & Alignment**: PO ensures all documents are consistent and complete
6. **Refinement**: Updates to epics, stories, and documents as needed
7. **Environment Transition**: Critical switch from web UI to IDE for development workflow
8. **Document Preparation**: PO shards large documents for development consumption

**Workflow Orchestration**: The `bmad-orchestrator` agent uses these workflow definitions to guide users through the complete process, ensuring proper transitions between planning (web UI) and development (IDE) phases.

### 5.2. The Core Development Cycle

Once the initial planning and architecture phases are complete, the project moves into a cyclical development workflow, as detailed in the `bmad-kb.md`. This ensures a steady, sequential, and quality-controlled implementation process.

```mermaid
graph TD
    A["Start: Planning Artifacts Complete"] --> B["PO: Shard Epics"]
    B --> C["PO: Shard Arch"]
    C --> D["Development Phase"]
    D --> E["Scrum Master: Drafts next story from sharded epic"]
    E --> F{"User Approval"}
    F -->|Approved| G["Dev: Implement Story"]
    F -->|Needs Changes| E
    G --> H["Dev: Complete story Tasks"]
    H --> I["Dev: Mark Ready for Review"]
    I --> J{"User Verification"}
    J -->|Request QA Review| K["QA: Run review-story task"]
    J -->|Approve Without QA| M["Mark Story as Done"]
    K --> L{"QA Review Results"}
    L -->|Needs Work| G
    L -->|Approved| M["Mark Story as Done"]
    J -->|Needs Fixes| G
    M --> E

    style M fill:#34a853,color:#fff
    style K fill:#f9ab00,color:#fff
```

This cycle continues, with the Scrum Master, Developer, and optionally QA agents working together. The QA agent provides senior developer review capabilities through the `review-story` task, offering code refactoring, quality improvements, and knowledge transfer. This ensures high code quality while maintaining development velocity.
