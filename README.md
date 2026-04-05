# Awesome Agent Skills

[English](README.md) | [繁體中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Español](README.es.md)

A curated list of skills, tools, and capabilities for AI coding agents.

---

## Table of Contents

- [What Are Agent Skills?](#what-are-agent-skills)
- [Compatible Agents](#compatible-agents)
- [Skill List](#skill-list)
- [Official Tutorials and Guides](#official-tutorials-and-guides)
- [Using Skills](#using-skills)
- [Creating Skills](#creating-skills)
- [Community Resources](#community-resources)
- [Frequently Asked Questions](#frequently-asked-questions)
- [Contributing](#contributing)
- [License](#license)
- [References](#references)

---

## What Are Agent Skills?

Think of **Agent Skills** as "how-to guides" for AI assistants. Instead of the AI needing to know everything upfront, skills let it learn new abilities on the fly, like giving someone a recipe card instead of making them memorize an entire cookbook.

Skills are simple text files (called `SKILL.md`) that teach an AI how to do specific tasks. When you ask the AI to do something, it finds the right skill, reads the instructions, and gets to work.

### How It Works

Skills load in three stages:

1. **Browse** - The AI sees a list of available skills (just names and short descriptions)
2. **Load** - When a skill is needed, the AI reads the full instructions
3. **Use** - The AI follows the instructions and accesses any helper files

### Why This Matters

- **Faster and lighter** - The AI only loads what it needs, when it needs it
- **Works everywhere** - Create a skill once, use it with any compatible AI tool
- **Easy to share** - Skills are just files you can copy, download, or share on GitHub

Skills are **instructions**, not code. The AI reads them like a human would read a guide, then follows the steps.

---

## Compatible Agents

The following platforms have documented support for Agent Skills:

| Agent | Documentation |
|-------|---------------|
| Claude Code | [code.claude.com/docs/en/skills](https://code.claude.com/docs/en/skills) |
| Claude.ai | [support.claude.com](https://support.claude.com/en/articles/12512180-using-skills-in-claude) |
| Codex (OpenAI) | [developers.openai.com](https://developers.openai.com/codex/skills) |
| GitHub Copilot | [docs.github.com](https://docs.github.com/copilot/concepts/agents/about-agent-skills) |
| VS Code | [code.visualstudio.com](https://code.visualstudio.com/docs/copilot/customization/agent-skills) |
| Antigravity | [antigravity.google](https://antigravity.google/docs/skills) |
| Kiro | [kiro.dev](https://kiro.dev/docs/skills/) |
| Gemini CLI | [geminicli.com](https://geminicli.com/docs/cli/skills/) |
| Junie | [junie.jetbrains.com](https://junie.jetbrains.com/docs/agent-skills.html) |

---

## Skill List

### Official Claude Skills (Document Processing)

Claude provides built-in skills for common document types:

| Skill | Description | Source |
|-------|-------------|--------|
| docx | Create, edit, analyze Word documents with tracked changes | [anthropics/skills](https://github.com/anthropics/skills) |
| xlsx | Spreadsheet manipulation: formulas, charts, data transformations | [anthropics/skills](https://github.com/anthropics/skills) |
| pptx | Read, generate, and adjust slides, layouts, templates | [anthropics/skills](https://github.com/anthropics/skills) |
| pdf | Extract text, tables, metadata from PDFs | [anthropics/skills](https://github.com/anthropics/skills) |

### Official OpenAI Codex Skills

Codex supports skills at different scopes:

| Skill Scope | Location | Suggested Use |
|-------------|----------|---------------|
| REPO | `$CWD/.codex/skills` | Skills relevant to a working folder (e.g., microservice or module) |
| REPO | `$CWD/../.codex/skills` | Skills for shared areas in parent folders |
| REPO | `$REPO_ROOT/.codex/skills` | Root skills for everyone using the repository |
| USER | `$CODEX_HOME/skills` (default: `~/.codex/skills`) | Personal skills that apply to any repository |
| ADMIN | `/etc/codex/skills` | SDK scripts, automation, and default admin skills |
| SYSTEM | Bundled with Codex | Built-in skills like skill-creator and plan |

### Official HuggingFace Skills

| Skill | Description | Source |
|-------|-------------|--------|
| hf_dataset_creator | Prompts, templates, and scripts for creating structured training datasets | [huggingface/skills](https://github.com/huggingface/skills) |
| hf_model_evaluation | Instructions plus utilities for orchestrating evaluation jobs, generating reports, and mapping metrics | [huggingface/skills](https://github.com/huggingface/skills) |
| hf-llm-trainer | Comprehensive training skill with guidance, helper scripts, cost estimators | [huggingface/skills](https://github.com/huggingface/skills) |
| hf-paper-publisher | Tools for publishing and managing research papers on Hugging Face Hub | [huggingface/skills](https://github.com/huggingface/skills) |

### Community Skills

Community-maintained skills and collections (verify before use):

#### Skill Collections

| Repository | Description |
|------------|-------------|
| [anthropics/skills](https://github.com/anthropics/skills) | Official Anthropic collection (document editing, data analysis) |
| [openai/skills](https://github.com/openai/skills) | Official OpenAI Codex skills catalog |
| [huggingface/skills](https://github.com/huggingface/skills) | HuggingFace skills (compatible with Claude, Codex, Gemini) |
| [skillcreatorai/Ai-Agent-Skills](https://github.com/skillcreatorai/Ai-Agent-Skills) | SkillCreator.ai collection with CLI installer |
| [agentskill.sh](https://agentskill.sh) | 44k+ skills directory with security scanning and `/learn` installer |
| [TutuoAI](https://www.tutuoai.com/) | Agent-native marketplace for skills, tools, and workflow blueprints (machine-readable catalog) |
| [karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills) | 50+ verified skills for Claude Code and Claude.ai |
| [uxuiprinciples/agent-skills](https://github.com/uxuiprinciples/agent-skills) | 5 UX/UI skills: evaluate interfaces against 168 research-backed principles, detect antipatterns, inject UX context into AI coding sessions |
| [shajith003/awesome-claude-skills](https://github.com/shajith003/awesome-claude-skills) | Skills for specialized capabilities |
| [GuDaStudio/skills](https://github.com/GuDaStudio/skills) | Multi-agent collaboration skills |
| [DougTrajano/pydantic-ai-skills](https://github.com/DougTrajano/pydantic-ai-skills) | Pydantic AI integration |
| [OmidZamani/dspy-skills](https://github.com/OmidZamani/dspy-skills) | Skills for DSPy framework |
| [hikanner/agent-skills](https://github.com/hikanner/agent-skills) | Curated Claude Agent Skills collection |
| [gradion-ai/freeact-skills](https://github.com/gradion-ai/freeact-skills) | Freeact agent library skills |
| [dmgrok/agent_skills_directory](https://github.com/dmgrok/agent_skills_directory) | npm-like CLI for skills (`brew install dmgrok/tap/skills`) - aggregates 177+ skills from 24 providers |
| [gotalab/skillport](https://github.com/gotalab/skillport) | Skills distribution via CLI or MCP |
| [mhattingpete/claude-skills-marketplace](https://github.com/mhattingpete/claude-skills-marketplace) | Git, code review, and testing skills |
| [kukapay/crypto-skills](https://github.com/kukapay/crypto-skills) | Cryptocurrency, web3 and blockchain skills |
| [chadboyda/agent-gtm-skills](https://github.com/chadboyda/agent-gtm-skills) | 18 go-to-market skills: pricing, outbound, SEO, ads, retention, and ops |
| [product-on-purpose/pm-skills](https://github.com/product-on-purpose/pm-skills) | 24 product management skills covering discovery, definition, delivery, and optimization |
| [sanjay3290/ai-skills](https://github.com/sanjay3290/ai-skills) | Google Workspace (Gmail, Chat, Calendar, Docs, Drive, Sheets, Slides), AI delegation (Jules, Manus, Deep Research), and database skills |
| [RioBot-Grind/agentfund-skill](https://github.com/RioBot-Grind/agentfund-skill) | Crowdfunding for AI agents on Base chain - milestone escrow |
| [browser-act/skills](https://github.com/browser-act/skills) | 22 browser automation skills for structured data extraction from Amazon, YouTube, Google Maps, Reddit, WeChat, and Zhihu |
| [yshishenya/stitchflow](https://github.com/yshishenya/stitchflow) | Cross-agent UI design skill collection for turning briefs and mockups into screens, variants, HTML, and screenshots |
| [cuongducle/community-demand-prospecting-skill](https://github.com/cuongducle/community-demand-prospecting-skill) | Repo audit, market research, positioning, and community outreach planning |
| [noizai/skills](https://github.com/noizai/skills) | Voice-first skills: TTS with SRT dubbing and companion voice presets |

#### Document Processing

| Skill | Description |
|-------|-------------|
| [Markdown to EPUB](https://github.com/smerchek/claude-epub-skill) | Converts markdown documents into professional EPUB ebook files |
| [ru-text](https://github.com/talkstream/ru-text) | Russian text quality: ~1,040 rules for typography, info-style, editorial, UX writing, business correspondence |

#### Development & Code Tools

| Skill | Description |
|-------|-------------|
| [aws-skills](https://github.com/zxkane/aws-skills) | AWS development with CDK best practices |
| [D3.js Visualization](https://github.com/chrisvoncsefalvay/claude-d3js-skill) | D3 charts and interactive data visualizations |
| [hand-drawn-diagrams](https://github.com/muthuishere/hand-drawn-diagrams) | Generate hand-drawn Excalidraw diagrams from a prompt — animated SVG, hosted edit link, and PNG export. Works with Claude Code, Codex, and any agent supporting standard skill paths |
| [Playwright Automation](https://github.com/lackeyjb/playwright-skill) | Browser automation for testing web apps |
| [Specrate](https://github.com/rickygao/specrate) | Manage specs and changes in a structured workflow |
| [iOS Simulator](https://github.com/conorluddy/ios-simulator-skill) | Interact with iOS Simulator for testing |
| [Swift Concurrency Migration](https://github.com/kylehughes/the-unofficial-swift-concurrency-migration-skill) | Swift Concurrency Migration guide |
| [Obsidian Plugin](https://github.com/gapmiss/obsidian-plugin-skill) | Obsidian.md plugin development |
| [Stream Coding](https://github.com/frmoretto/stream-coding) | Stream Coding methodology |
| [SwiftUI Skills](https://github.com/ameyalambat128/swiftui-skills) | Apple-authored SwiftUI and platform guidance extracted from Xcode |
| [Tool Advisor](https://github.com/dragon1086/claude-skills) | Analyzes prompts and recommends optimal tools, skills, agents, and orchestration patterns |
| [rule-porter](https://github.com/nedcodes-ok/rule-porter) | Convert AI IDE rules between Cursor (.mdc), CLAUDE.md, AGENTS.md, Copilot, and Windsurf. Bidirectional, zero dependencies |
| [Vibe Testing](https://github.com/knot0-com/vibe-testing) | Pressure-test spec documents with LLM reasoning before writing code |
| [codex-stitch-local](https://github.com/yshishenya/codex-stitch-local) | Stitch UI generation with local HTML and screenshots |
| [Mantra](https://mantra.gonewx.com) | AI coding session management - save, restore, and time-travel through Claude Code, Cursor, and Windsurf sessions |
| [IWE](https://github.com/iwe-org/iwe) | CLI-based knowledge graph access for AI agents — structured persistent memory via plain markdown files |
| [naming](https://github.com/glacierphonk/naming) | Metaphor-driven naming for products, SaaS, brands, and open source projects |
| [ai-native-cli](https://github.com/ChaosRealmsAI/agent-cli-spec) | CLI design spec — 98 rules for building agent-safe CLI tools |
| [claude-dev-skill](https://github.com/hnaymyh123-henry/claude-dev-skill) | Turns Claude into a Tech Lead orchestrating parallel Worker Agents through a full dev workflow: PRD alignment, architecture, coding, QA, and PR review |
| [claude-code-philosophy](https://github.com/dadwadw233/claude-code-philosophy) | Skill for reviewing and structuring agent products around harnesses, memory, permissions, recovery, and UX |
| [claude-code-harness](https://github.com/dadwadw233/claude-code-harness) | Harness blueprint skill for request assembly, control loops, memory boundaries, permissions, and recovery |
| [rule-gen](https://github.com/nedcodes-ok/rule-gen) | Generate AI coding rules from your codebase using Google Gemini. Outputs rules for Cursor, Claude Code, Copilot, and Windsurf |
| [AppDeploy](https://github.com/AppDeploy-AI/skills) | Deploy apps with frontend, backend, database, cron, file storage, AI capabilities, auth, and notifications and get a live URL back |
| [Dart/Flutter](https://github.com/Wreos/mobile-app-developer/tree/main/platforms/Flutter/skills) | Community Flutter skills for implementation, testing, API integration, debugging, and release workflows |

#### Data & Analysis

| Skill | Description |
|-------|-------------|
| [CSV Summarizer](https://github.com/coffeefuelbump/csv-data-summarizer-claude-skill) | Analyze CSV files and generate insights with visualizations |
| [Kaggle Skill](https://github.com/shepsci/kaggle-skill) | Complete Kaggle integration — account setup, competition reports, dataset/model downloads, notebook execution, submissions, and badge collection |
| [DNA Claude Analysis](https://github.com/shmlkv/dna-claude-analysis) | Personal genome analysis toolkit with Python scripts analyzing raw DNA data across 17 categories and generating terminal-style HTML visualization |

#### Integration & Automation

| Skill | Description |
|-------|-------------|
| [Dev Browser](https://github.com/SawyerHood/dev-browser) | Web browser capability for agents |
| [Lumen](https://github.com/omxyz/lumen) | Vision-first browser agent with self-healing deterministic replay over CDP |
| [Vectorize MCP Worker](https://github.com/dannwaneri/vectorize-mcp-worker) | Edge-native MCP server patterns for production RAG |
| [Agent Manager](https://github.com/fractalmind-ai/agent-manager-skill) | Manage local CLI AI agents via tmux (start/stop/monitor/assign + cron scheduling) |
| [HOL Claude Skills](https://github.com/hashgraph-online/hol-claude-skills) | AI agent discovery via Registry Broker - /hol-search, /hol-resolve, /hol-chat |
| [Sheets CLI](https://github.com/gmickel/sheets-cli) | Google Sheets CLI automation |
| [Notification Skill](https://github.com/caopulan/Notification-Skill) | Send message notifications for agent workflows |
| [Spotify Skill](https://github.com/fabioc-aloha/spotify-skill) | Spotify API integration |
| [AgentStore](https://github.com/techgangboss/agentstore) | Open-source plugin marketplace with gasless USDC payments, CLI install, and 3-field publishing API |
| [Transloadit Skills](https://github.com/transloadit/skills) | Media processing: video encoding, image manipulation, OCR, and 86+ Robots |
| [commune](https://github.com/shanjairaj7/commune-skill) | Agent-native email inbox — permanent @commune.ai address with full send/receive, semantic search, triage, and webhooks |
| [bitcoin-mcp](https://github.com/Bortlesboat/bitcoin-mcp) | Bitcoin MCP server with 49 tools — fee intelligence, mempool analysis, block/transaction inspection, mining stats, price and supply data |
| [datadog-observability](https://github.com/Ivlad003/plugins) | Query and analyze Datadog logs, metrics, monitors, and traces directly from Claude Code via REST API |
| [meyhem-search](https://github.com/c5huracan/meyhem) | Agent-native web search with feedback-driven ranking via REST API and MCP server |
| [steel-browser](https://github.com/steel-dev/cli/tree/main/skills/steel-browser) | Session-backed browser automation skill for web navigation, extraction, screenshots, and PDFs |
| [KyberSwap Skills](https://github.com/kybernetwork/kyberswap-skills) | Token swap quotes and transactions across 18 EVM chains |

#### Collaboration & Project Management

| Skill | Description |
|-------|-------------|
| [git-pushing](https://github.com/mhattingpete/claude-skills-marketplace) | Automate git operations and repository interactions |
| [review-implementing](https://github.com/mhattingpete/claude-skills-marketplace) | Evaluate code implementation plans |
| [test-fixing](https://github.com/mhattingpete/claude-skills-marketplace) | Detect failing tests and propose fixes |

#### Security & Systems

| Skill | Description |
|-------|-------------|
| [computer-forensics](https://github.com/mhattingpete/claude-skills-marketplace) | Digital forensics analysis and investigation |
| [safe-encryption-skill](https://github.com/grittygrease/safe-encryption-skill) | Modern encryption alternative to GPG/PGP with post-quantum support, composable authentication, and agent-to-agent communication |
| [Threat Hunting](https://github.com/jthack/threat-hunting-with-sigma-rules-skill) | Hunt for threats using Sigma detection rules |
| [Vincent Wallet](https://github.com/HeyVincent-ai/agent-skills/tree/main/wallet) | Secure EVM wallet for agent transfers, swaps, and transactions |
| [Vincent Polymarket](https://github.com/HeyVincent-ai/agent-skills/tree/main/polymarket) | Polymarket prediction market trading for agents |
| [Agent OS Governance](https://github.com/imran-siddique/agent-os) | Kernel-level governance for AI agents — deterministic policy enforcement, compliance checking, audit logging |

#### Advanced & Research

| Skill | Description |
|-------|-------------|
| [Context Engineering](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering) | Context engineering techniques |
| [Pomodoro System Skill](https://github.com/jakedahn/pomodoro) | System Skill Pattern (skills that remember & improve) |
| [Mind Cloning](https://github.com/yzfly/Mind-Cloning-Engineering) | Mind cloning with LLM skills |

---

## Official Tutorials and Guides

### Claude and Anthropic
- [Using skills in Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude) - Official quick start guide
- [How to create custom skills](https://support.claude.com/en/articles/12512198-creating-custom-skills) - Step-by-step authoring
- [Claude Code Skills Documentation](https://code.claude.com/docs/en/skills) - Official reference

### GitHub Copilot
- [About Agent Skills](https://docs.github.com/copilot/concepts/agents/about-agent-skills) - GitHub documentation
- [VS Code Agent Skills](https://code.visualstudio.com/docs/copilot/customization/agent-skills) - VS Code integration

### Model Context Protocol (MCP)
- [MCP Official Documentation](https://modelcontextprotocol.io/) - The open standard
- [Build your first MCP Server](https://modelcontextprotocol.io/docs/first-server) - Python/TypeScript guide
- [MCP Server Examples](https://github.com/modelcontextprotocol/servers) - Official server implementations



---

## Using Skills

### Using Skills in Claude.ai
1. Click the skill icon in your chat interface.
2. Add skills from the marketplace or upload custom skills.
3. Claude automatically activates relevant skills based on your task.

### Using Skills in Google Antigravity

Antigravity supports two types of skills:

*   **Workspace Skills**: Project-specific skills located in `/.agent/skills/`
*   **Global Skills**: User-wide skills located in `~/.gemini/antigravity/skills`

For more details, see the [official documentation](https://antigravity.google/docs/skills).

### Using Skills in Claude Code
Place the skill in your configuration directory:

```bash
mkdir -p ~/.claude/skills/
cp -r skill-name ~/.claude/skills/
```

Verify skill metadata:
```bash
head ~/.claude/skills/skill-name/SKILL.md
```

The skill loads automatically and activates when relevant.

### Using Skills in Codex

**Create a skill:**

Use the built-in `$skill-creator` skill in Codex. Describe what you want your skill to do, and Codex will bootstrap it for you.

If you install `$create-plan` (experimental) with `$skill-installer create-plan`, Codex will create a plan before writing files.

You can also create a skill manually by creating a folder with a `SKILL.md` file:

```markdown
---
name: skill-name
description: Description that helps Codex select the skill
metadata:
  short-description: Optional user-facing description
---

Skill instructions for the Codex agent to follow when using this skill.
```

**Install new skills:**

Download skills from GitHub using the `$skill-installer` skill:

```bash
$skill-installer linear
```

You can also prompt the installer to download skills from other repositories. After installing a skill, restart Codex to pick up new skills.

### Using Skills in VS Code

Skills are stored in directories with a `SKILL.md` file. VS Code supports skills in two locations:

- `.github/skills/` - Recommended location for all new skills
- `.claude/skills/` - Legacy location, also supported

**Create a skill:**

1. Create a `.github/skills` directory in your workspace
2. Create a subdirectory for your skill (e.g., `.github/skills/webapp-testing`)
3. Create a `SKILL.md` file with the following structure:

```markdown
---
name: skill-name
description: Description of what the skill does and when to use it
---

# Skill Instructions

Your detailed instructions, guidelines, and examples go here...
```

4. Optionally, add scripts, examples, or other resources to your skill's directory

### Using Skills in Copilot CLI

**Adding skills to your repository:**

1. Create a `.github/skills` directory (skills in `.claude/skills` are also supported)
2. Create a subdirectory for your skill (e.g., `.github/skills/webapp-testing`)
3. Create a `SKILL.md` file with your skill's instructions

**SKILL.md structure:**

- `name` (required): A unique lowercase identifier using hyphens for spaces
- `description` (required): What the skill does and when Copilot should use it
- `license` (optional): License that applies to this skill
- Markdown body with instructions, examples, and guidelines

**Example SKILL.md:**

```markdown
---
name: github-actions-failure-debugging
description: Guide for debugging failing GitHub Actions workflows.
---

To debug failing GitHub Actions workflows:

1. Use `list_workflow_runs` to look up recent workflow runs
2. Use `summarize_job_log_failures` to get an AI summary of failed jobs
3. Use `get_job_logs` for full detailed failure logs if needed
4. Try to reproduce the failure in your environment
5. Fix the failing build
```

When performing tasks, Copilot decides when to use skills based on your prompt and the skill's description. The `SKILL.md` file is injected into the agent's context.

### Using MCP Servers (Claude Desktop)

Edit your configuration file:
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

Example Configuration:
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/username/Desktop"
      ]
    }
  }
}
```

---

## Creating Skills

Skills are instruction bundles that tell the agent how to perform specific tasks. They are not executable code by default.

### Skill Structure

```
skill-name/
├── SKILL.md          # Required: Instructions and metadata
├── scripts/          # Optional: Helper scripts
├── templates/        # Optional: Document templates
└── resources/        # Optional: Reference files
```

### Basic SKILL.md Template

```markdown
---
name: my-skill-name
description: A clear description of what this skill does.
---

# My Skill Name

Detailed description of the skill's purpose.

## When to Use This Skill

- Use case 1
- Use case 2

## Instructions

[Detailed instructions for the agent on how to execute this skill]

## Examples

[Real-world examples]
```

### MCP Server Example (Python)

For skills that need to connect to external data sources, you can create an MCP server:

```bash
pip install fastmcp
```

server.py:
```python
from fastmcp import FastMCP

mcp = FastMCP("My Server")

@mcp.tool()
def hello_world(name: str = "World") -> str:
    """A simple tool that says hello."""
    return f"Hello, {name}!"

if __name__ == "__main__":
    mcp.run()
```

---

## Community Resources

### LangChain Tools
- [Google Search](https://python.langchain.com/docs/integrations/tools/google_search/) - Wrapper around SerpApi
- [Wikipedia](https://python.langchain.com/docs/integrations/tools/wikipedia/) - Fetch summaries from Wikipedia
- [Python REPL](https://python.langchain.com/docs/integrations/tools/python/) - Execute Python code
- [Custom Tools Guide](https://python.langchain.com/docs/how_to/custom_tools/) - How to use the `@tool` decorator

### Articles & Research
- [I found 50 companies accidentally breaking HIPAA with ChatGPT](https://dev.to/dannwaneri/i-found-50-companies-accidentally-breaking-hipaa-with-chatgpt-1olc) - Analysis of privacy risks in AI
- [I built a Production RAG System for $5/month](https://dev.to/dannwaneri/i-built-a-production-rag-system-for-5month-most-alternatives-cost-100-200-21hj) - Cost-optimization guide for RAG architectures

---

## Frequently Asked Questions

### What are Agent Skills?

Agent Skills are instruction files that teach AI assistants how to do specific tasks. Think of them as "how-to guides" that the AI reads and follows. They only load when needed, so the AI stays fast and focused.

### How are Agent Skills different from fine-tuning?

Fine-tuning permanently changes how an AI thinks (expensive and hard to update). Agent Skills are just instruction files, you can update, swap, or share them anytime without touching the AI itself.

### What's the difference between Agent Skills and MCP?

They do different things and work great together:
- **Agent Skills** = teach the AI *how* to do something (workflows, best practices)
- **MCP** = help the AI *access* things (APIs, databases, external tools)

### Which AI tools support Agent Skills?

Currently supported: **Claude** (Claude.ai and Claude Code), **GitHub Copilot**, **VS Code**, **Codex** (OpenAI), **Antigravity** (Google), **Gemini CLI**, and **Kiro**. The list is growing as more tools adopt the standard.

### Do Agent Skills run code?

No. Skills are just text instructions, the AI reads and follows them like a recipe. If you need to run actual code, you'd use something like MCP servers alongside skills.

### How do I create my first Agent Skill?

1. Create a `SKILL.md` file with a name and description at the top
2. Write clear, step-by-step instructions in the file
3. Put it in your `.github/skills/` or `.claude/skills/` folder
4. Test it out!

Full guide: [How to create custom skills](https://support.claude.com/en/articles/12512198-creating-custom-skills)

---

## Contributing

Contributions are welcome. See **[CONTRIBUTING.md](CONTRIBUTING.md)** for full guidelines.

Quick summary:
- Follow the skill template structure
- Provide clear, actionable instructions
- Include working examples where appropriate
- Document trade-offs and potential issues
- Keep SKILL.md under 500 lines for optimal performance
- Verify that skills actually exist before adding them

---

## License

MIT License - see LICENSE file for details.

---

## References

The principles in these skills are derived from research and production experience at leading AI labs and framework developers.

- [Anthropic: Using skills in Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude)
- [Anthropic: Creating custom skills](https://support.claude.com/en/articles/12512198-creating-custom-skills)
- [Claude Code Skills Documentation](https://code.claude.com/docs/en/skills)
- [GitHub Copilot: About Agent Skills](https://docs.github.com/copilot/concepts/agents/about-agent-skills)
- [Model Context Protocol Documentation](https://modelcontextprotocol.io/)


--- 

## More Awesome Skills from VoltAgent

<a href="https://github.com/VoltAgent/voltagent">
     <img width="1500" height="801" alt="claude-skills" src="https://github.com/user-attachments/assets/3a9d4cb3-04bd-4fb1-9146-fd3b53d26961" />
</a>


<br/>
<br/>

<div align="center">
    <strong>A curated collection of official Agent Skills from leading development teams and the community.
    </strong>
    <br />
    <br />

</div>

<div align="center">

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
![Skills Count](https://img.shields.io/badge/Skills-1060+-blue?style=flat-square)
![Last Update](https://img.shields.io/github/last-commit/VoltAgent/awesome-agent-skills?label=Last%20update&style=flat-square)
<a href="https://github.com/VoltAgent/voltagent">
  <img alt="VoltAgent" src="https://cdn.voltagent.dev/website/logo/logo-2-svg.svg" height="20" />
</a>
[![Discord](https://img.shields.io/discord/1361559153780195478.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://s.voltagent.dev/discord)


<div align="center">
    <strong>More awesome collections for developers</strong>
    <br />
    <br />
</div>

<div align="center">


[![Claude Code Subagents](https://img.shields.io/github/stars/VoltAgent/awesome-claude-code-subagents?style=classic&label=Claude%20Code%20Subagents&color=D97757&logo=claude&logoColor=D97757)](https://github.com/VoltAgent/awesome-claude-code-subagents)
[![Codex Subagents][codex-badge]][codex-link]
[![OpenClaw Skills](https://img.shields.io/github/stars/VoltAgent/awesome-openclaw-skills?style=classic&label=%F0%9F%A6%9E%20OpenClaw%20Skills&color=f53e36)](https://github.com/VoltAgent/awesome-openclaw-skills)
[![AI Agent Papers](https://img.shields.io/github/stars/VoltAgent/awesome-ai-agent-papers?style=classic&label=AI%20Agent%20Papers&color=b31b1b&logo=arxiv)](https://github.com/VoltAgent/awesome-ai-agent-papers)

</div>

</div>

</div>

# Awesome Agent Skills

Unlike many bulk-generated skill repositories, this collection focuses on real-world Agent Skills created and used by actual engineering teams, not mass AI‑generated stuff.

This collection features official skills published by leading development teams, including Anthropic, Google Labs, Vercel, Stripe, Cloudflare, Netlify, Trail of Bits, Sentry, Expo, Hugging Face, Figma, and more, alongside community-built skills.

Compatible with Claude Code, Codex, Antigravity, Gemini CLI, Cursor, GitHub Copilot, OpenCode, Windsurf, and more. See the table below for paths and documentation.

The most contributed Agent Skills repository, built and maintained together with the community.



## Table of Contents

| | | |
|---|---|---|
| [Official Claude Skills](#official-claude-skills) | [Skills by VoltAgent](#skills-by-voltagent) | [Skills by Composio](#skills-by-composio-team) |
| [Skills by Supabase](#skills-by-supabase-team) | [Skills by Google Gemini](#skills-by-google-gemini) | [Skills by Stripe](#skills-by-stripe-team) |
| [Skills by Courier](#skills-by-courier) | [Skills by CallStack](#skills-by-callstack) | [Skills by Expo](#skills-by-expo-team) |
| [Skills by Better Auth](#skills-by-better-auth-team) |
| [Skills by Tinybird](#skills-by-tinybird-team) | [Skills by HashiCorp](#skills-by-hashicorp-team-for-terraform) | [Skills by Sanity](#skills-by-sanity-team) |
| [Skills by Firecrawl](#skills-by-firecrawl-team) | [Skills by Neon](#skills-by-neon-team) | [Skill by ClickHouse](#skill-by-clickhouse) |
| [Skills by Remotion](#skills-by-remotion) | [Skills by Replicate](#skills-by-replicate) | [Skills by Typefully](#skills-by-typefully) |
| [Skills by Vercel](#skills-by-vercel-engineering-team) | [Skills by Cloudflare](#skills-by-cloudflare-team) | [Skills by Netlify](#skills-by-netlify-team) |
| [Skills by Google Labs (Stitch)](#skills-by-google-labs-stitch) | [Skills by Google Workspace CLI](#skills-by-google-workspace-cli) | [Skills by Hugging Face](#skills-by-hugging-face-team) |
| [Skills by Trail of Bits](#security-skills-by-trail-of-bits-team) | [Skills by Sentry](#skills-by-sentry-team-for-their-dev-team) | [Skills by Microsoft](#skills-by-microsoft) |
| [Skills by fal.ai](#skills-by-falai-team) | [Skills by WordPress](#skills-by-wordpress-development-team) | [Skills by OpenAI](#skills-by-openai) |
| [Skills by Figma](#skills-by-figma) | [Marketing Skills by Corey Haines](#marketing-skills-by-corey-haines) | [Skills by Binance](#skills-by-binance) |
| [Product Manager Skills by Dean Peters](#product-manager-skills-by-dean-peters) | [Product Management Skills by Paweł Huryn](#product-management-skills-by-pawel-huryn) | [Skills by MiniMax](#skills-by-minimax-team) |
| [Skills by DuckDB](#skills-by-duckdb) | [Skills by GSAP](#skills-by-gsap-greensock) | [Skills by Garry Tan (gstack)](#skills-by-garry-tan-gstack) |
| [Skills by Notion](#skills-by-notion) | [Skills by Resend](#skills-by-resend) | [Community Skills](#community-skills) |
| [Skill Quality Standards](#skill-quality-standards) | | |




<br/>

<a href="https://github.com/VoltAgent/voltagent">
<img width="1390" height="296" alt="social" src="https://github.com/user-attachments/assets/5d8822c0-e97b-4183-a71e-a922ab88e1a0" />
</a>

<br/>



<details open>
<summary><h3 style="display:inline">Official Claude Skills</h3></summary>

- **[anthropics/docx](https://officialskills.sh/anthropics/skills/docx)** - Create, edit, and analyze Word documents
- **[anthropics/doc-coauthoring](https://officialskills.sh/anthropics/skills/doc-coauthoring)** - Collaborative document editing and co-authoring
- **[anthropics/pptx](https://officialskills.sh/anthropics/skills/pptx)** - Create, edit, and analyze PowerPoint presentations
- **[anthropics/xlsx](https://officialskills.sh/anthropics/skills/xlsx)** - Create, edit, and analyze Excel spreadsheets
- **[anthropics/pdf](https://officialskills.sh/anthropics/skills/pdf)** - Extract text, create PDFs, and handle forms
- **[anthropics/algorithmic-art](https://officialskills.sh/anthropics/skills/algorithmic-art)** - Create generative art using p5.js with seeded randomness
- **[anthropics/canvas-design](https://officialskills.sh/anthropics/skills/canvas-design)** - Design visual art in PNG and PDF formats
- **[anthropics/frontend-design](https://officialskills.sh/anthropics/skills/frontend-design)** - Frontend design and UI/UX development tools
- **[anthropics/slack-gif-creator](https://officialskills.sh/anthropics/skills/slack-gif-creator)** - Create animated GIFs optimized for Slack size constraints
- **[anthropics/theme-factory](https://officialskills.sh/anthropics/skills/theme-factory)** - Style artifacts with professional themes or generate custom themes
- **[anthropics/web-artifacts-builder](https://officialskills.sh/anthropics/skills/web-artifacts-builder)** - Build complex claude.ai HTML artifacts with React and Tailwind
- **[anthropics/mcp-builder](https://officialskills.sh/anthropics/skills/mcp-builder)** - Create MCP servers to integrate external APIs and services
- **[anthropics/webapp-testing](https://officialskills.sh/anthropics/skills/webapp-testing)** - Test local web applications using Playwright
- **[anthropics/brand-guidelines](https://officialskills.sh/anthropics/skills/brand-guidelines)** - Apply Anthropic's brand colors and typography to artifacts
- **[anthropics/internal-comms](https://officialskills.sh/anthropics/skills/internal-comms)** - Write status reports, newsletters, and FAQs
- **[anthropics/skill-creator](https://officialskills.sh/anthropics/skills/skill-creator)** - Guide for creating skills that extend Claude's capabilities
- **[anthropics/template](https://officialskills.sh/anthropics/skills/template)** - Basic template for creating new skills

</details>

### Skills by VoltAgent
Official skills by VoltAgent for building AI agents with the VoltAgent TypeScript framework.
- **[voltagent/create-voltagent](https://officialskills.sh/voltagent/skills/create-voltagent)** - Project setup guide with CLI and manual steps
- **[voltagent/voltagent-best-practices](https://officialskills.sh/voltagent/skills/voltagent-best-practices)** - Architecture and usage patterns for agents, workflows, memory, and servers
- **[voltagent/voltagent-core-reference](https://officialskills.sh/voltagent/skills/voltagent-core-reference)** - Reference for the VoltAgent class options and lifecycle methods
- **[voltagent/voltagent-docs-bundle](https://officialskills.sh/voltagent/skills/voltagent-docs-bundle)** - Lookup embedded docs from @voltagent/core for version-matched documentation

### Skills by Composio Team
- **[composiohq/composio](https://officialskills.sh/composiohq/skills/composio)** - Connect AI agents to 1000+ external apps with managed authentication

### Skills by Supabase Team
- **[supabase/postgres-best-practices](https://officialskills.sh/supabase/skills/postgres-best-practices)** - PostgreSQL best practices for Supabase

### Skills by Google Gemini
- **[google-gemini/gemini-api-dev](https://officialskills.sh/google-gemini/skills/gemini-api-dev)** - Best practices for developing Gemini-powered apps using the Gemini API
- **[google-gemini/vertex-ai-api-dev](https://officialskills.sh/google-gemini/skills/vertex-ai-api-dev)** - Developing Gemini-powered apps on Google Cloud Vertex AI using the Gen AI SDK
- **[google-gemini/gemini-live-api-dev](https://officialskills.sh/google-gemini/skills/gemini-live-api-dev)** - Building real-time bidirectional streaming apps with the Gemini Live API
- **[google-gemini/gemini-interactions-api](https://officialskills.sh/google-gemini/skills/gemini-interactions-api)** - Building apps with the Gemini Interactions API for text, chat, streaming, and image generation

### Skills by Stripe Team
- **[stripe/stripe-best-practices](https://officialskills.sh/stripe/skills/stripe-best-practices)** - Best practices for building Stripe integrations
- **[stripe/upgrade-stripe](https://officialskills.sh/stripe/skills/upgrade-stripe)** - Upgrade Stripe SDK and API versions

### Skills by Courier
- **[trycourier/courier-skills](https://github.com/trycourier/courier-skills)** - Multi-channel notifications via email, SMS, push, and chat

### Skills by CallStack
- **[callstackincubator/react-native-best-practices](https://officialskills.sh/callstackincubator/skills/react-native-best-practices)** - Performance optimization for React Native apps from Callstack
- **[callstackincubator/github](https://officialskills.sh/callstackincubator/skills/github)** - GitHub workflow patterns for PRs, code review, branching
- **[callstackincubator/upgrading-react-native](https://officialskills.sh/callstackincubator/skills/upgrading-react-native)** - React Native upgrade workflow: templates, dependencies, and common pitfalls

### Skills by Better Auth Team
- **[better-auth/best-practices](https://officialskills.sh/better-auth/skills/best-practices)** - Best practices for Better Auth integration
- **[better-auth/explain-error](https://officialskills.sh/better-auth/skills/explain-error)** - Explain Better Auth error messages
- **[better-auth/providers](https://officialskills.sh/better-auth/skills/providers)** - Better Auth authentication providers
- **[better-auth/create-auth](https://officialskills.sh/better-auth/skills/create-auth)** - Create authentication setup with Better Auth
- **[better-auth/emailAndPassword](https://officialskills.sh/better-auth/skills/emailAndPassword)** - Email and password authentication with Better Auth
- **[better-auth/organization](https://officialskills.sh/better-auth/skills/organization)** - Organization management with Better Auth
- **[better-auth/twoFactor](https://officialskills.sh/better-auth/skills/twoFactor)** - Two-factor authentication with Better Auth

### Skills by Tinybird Team
- **[tinybirdco/tinybird-best-practices](https://officialskills.sh/tinybirdco/skills/tinybird-best-practices)** - Tinybird project guidelines for datasources, pipes, endpoints, and SQL
- **[tinybirdco/tinybird-cli-guidelines](https://officialskills.sh/tinybirdco/skills/tinybird-cli-guidelines)** - Tinybird CLI usage guidelines and commands
- **[tinybirdco/tinybird-python-sdk-guidelines](https://officialskills.sh/tinybirdco/skills/tinybird-python-sdk-guidelines)** - Tinybird Python SDK usage guidelines
- **[tinybirdco/tinybird-typescript-sdk-guidelines](https://officialskills.sh/tinybirdco/skills/tinybird-typescript-sdk-guidelines)** - Tinybird TypeScript SDK usage guidelines

### Skills by HashiCorp Team for Terraform
- **[hashicorp/azure-verified-modules](https://officialskills.sh/hashicorp/skills/azure-verified-modules)** - Azure Verified Modules (AVM) certification standards for Terraform modules
- **[hashicorp/new-terraform-provider](https://officialskills.sh/hashicorp/skills/new-terraform-provider)** - Scaffold a new Terraform provider project using the Plugin Framework
- **[hashicorp/provider-resources](https://officialskills.sh/hashicorp/skills/provider-resources)** - Implement Terraform Provider resources and data sources using the Plugin Framework
- **[hashicorp/provider-test-patterns](https://officialskills.sh/hashicorp/skills/provider-test-patterns)** - Acceptance test patterns for Terraform providers using terraform-plugin-testing
- **[hashicorp/provider-actions](https://officialskills.sh/hashicorp/skills/provider-actions)** - Implement Terraform Provider Actions using the Plugin Framework
- **[hashicorp/run-acceptance-tests](https://officialskills.sh/hashicorp/skills/run-acceptance-tests)** - Run acceptance tests for Terraform providers using Go's test runner
- **[hashicorp/refactor-module](https://officialskills.sh/hashicorp/skills/refactor-module)** - Transform monolithic Terraform configurations into reusable modules
- **[hashicorp/terraform-search-import](https://officialskills.sh/hashicorp/skills/terraform-search-import)** - Discover existing cloud resources and bulk import them into Terraform state
- **[hashicorp/terraform-style-guide](https://officialskills.sh/hashicorp/skills/terraform-style-guide)** - Generate Terraform HCL code following HashiCorp's official style conventions
- **[hashicorp/terraform-stacks](https://officialskills.sh/hashicorp/skills/terraform-stacks)** - Manage infrastructure across multiple environments, regions, and cloud accounts
- **[hashicorp/terraform-test](https://officialskills.sh/hashicorp/skills/terraform-test)** - Built-in testing framework for Terraform configurations with .tftest.hcl files

### Skills by Sanity Team
- **[sanity-io/sanity-best-practices](https://officialskills.sh/sanity-io/skills/sanity-best-practices)** - Best practices for Sanity Studio, GROQ queries, and content workflows
- **[sanity-io/content-modeling-best-practices](https://officialskills.sh/sanity-io/skills/content-modeling-best-practices)** - Guidelines for designing scalable content models in Sanity
- **[sanity-io/seo-aeo-best-practices](https://officialskills.sh/sanity-io/skills/seo-aeo-best-practices)** - SEO and answer engine optimization patterns for content sites
- **[sanity-io/content-experimentation-best-practices](https://officialskills.sh/sanity-io/skills/content-experimentation-best-practices)** - Content A/B testing and experimentation workflows

### Skills by Firecrawl Team
- **[firecrawl/firecrawl-cli](https://officialskills.sh/firecrawl/skills/firecrawl-cli)** - Scrape, crawl, search, and map the web via CLI
- **[firecrawl/firecrawl-agent](https://officialskills.sh/firecrawl/skills/firecrawl-agent)** - AI agent for autonomous web scraping and data extraction
- **[firecrawl/firecrawl-browser](https://officialskills.sh/firecrawl/skills/firecrawl-browser)** - Browser-based web scraping and interaction
- **[firecrawl/firecrawl-crawl](https://officialskills.sh/firecrawl/skills/firecrawl-crawl)** - Crawl websites and extract structured data
- **[firecrawl/firecrawl-download](https://officialskills.sh/firecrawl/skills/firecrawl-download)** - Download web content and files
- **[firecrawl/firecrawl-map](https://officialskills.sh/firecrawl/skills/firecrawl-map)** - Map website structure and sitemaps
- **[firecrawl/firecrawl-scrape](https://officialskills.sh/firecrawl/skills/firecrawl-scrape)** - Scrape web pages and extract content
- **[firecrawl/firecrawl-search](https://officialskills.sh/firecrawl/skills/firecrawl-search)** - Search the web and extract results

### Skills by Neon
- **[neondatabase/neon-postgres](https://officialskills.sh/neondatabase/skills/neon-postgres)** - Best practices for Neon Serverless Postgres
- **[neondatabase/claimable-postgres](https://officialskills.sh/neondatabase/skills/claimable-postgres)** - Claimable Postgres database provisioning with Neon
- **[neondatabase/neon-postgres-egress-optimizer](https://officialskills.sh/neondatabase/skills/neon-postgres-egress-optimizer)** - Optimize Neon Postgres egress and data transfer


### Skill by ClickHouse 
- **[clickhouse/clickhouse-best-practices](https://officialskills.sh/clickhouse/skills/clickhouse-best-practices)** - Best practices for working with ClickHouse

### Skills by Remotion 
- **[remotion-dev/remotion](https://officialskills.sh/remotion-dev/skills/remotion)** - Programmatic video creation with React

### Skills by Replicate 
- **[replicate/replicate](https://officialskills.sh/replicate/skills/replicate)** - Discover, compare, and run AI models using Replicate's API

### Skills by Typefully 
- **[typefully/typefully](https://officialskills.sh/typefully/skills/typefully)** - Create, schedule, and publish social media content across X, LinkedIn, Threads, Bluesky, and Mastodon

<details open>
<summary><h3 style="display:inline">Skills by Vercel Engineering Team</h3></summary>

- **[vercel-labs/react-best-practices](https://officialskills.sh/vercel-labs/skills/react-best-practices)** - React best practices and patterns
- **[vercel-labs/web-design-guidelines](https://officialskills.sh/vercel-labs/skills/web-design-guidelines)** - Web design guidelines and standards
- **[vercel-labs/composition-patterns](https://officialskills.sh/vercel-labs/skills/composition-patterns)** - React component composition and reusable patterns
- **[vercel-labs/next-best-practices](https://officialskills.sh/vercel-labs/skills/next-best-practices)** - Next.js best practices and recommended patterns
- **[vercel-labs/next-cache-components](https://officialskills.sh/vercel-labs/skills/next-cache-components)** - Caching strategies and cache-aware components in Next.js
- **[vercel-labs/next-upgrade](https://officialskills.sh/vercel-labs/skills/next-upgrade)** - Upgrade Next.js projects to newer versions
- **[vercel-labs/react-native-skills](https://officialskills.sh/vercel-labs/skills/react-native-skills)** - React Native best practices and performance guidelines

</details>

<details open>
<summary><h3 style="display:inline">Skills by Cloudflare Team</h3></summary>

- **[cloudflare/agents-sdk](https://officialskills.sh/cloudflare/skills/agents-sdk)** - Build stateful AI agents with scheduling, RPC, and MCP servers
- **[cloudflare/building-ai-agent-on-cloudflare](https://officialskills.sh/cloudflare/skills/building-ai-agent-on-cloudflare)** - Build AI agents with state and WebSockets on Cloudflare
- **[cloudflare/building-mcp-server-on-cloudflare](https://officialskills.sh/cloudflare/skills/building-mcp-server-on-cloudflare)** - Build remote MCP servers with tools and OAuth
- **[cloudflare/durable-objects](https://officialskills.sh/cloudflare/skills/durable-objects)** - Stateful coordination with RPC, SQLite, and WebSockets
- **[cloudflare/web-perf](https://officialskills.sh/cloudflare/skills/web-perf)** - Audit Core Web Vitals and render-blocking resources
- **[cloudflare/wrangler](https://officialskills.sh/cloudflare/skills/wrangler)** - Deploy and manage Workers, KV, R2, D1, Vectorize, Queues, Workflows

</details>

<details>
<summary><h3 style="display:inline">Skills by Netlify Team</h3></summary>

- **[netlify/netlify-functions](https://officialskills.sh/netlify/skills/netlify-functions)** - Build serverless API endpoints and background tasks
- **[netlify/netlify-edge-functions](https://officialskills.sh/netlify/skills/netlify-edge-functions)** - Low-latency edge middleware and geolocation logic
- **[netlify/netlify-blobs](https://officialskills.sh/netlify/skills/netlify-blobs)** - Key-value object storage for files and data
- **[netlify/netlify-db](https://officialskills.sh/netlify/skills/netlify-db)** - Managed Postgres with deploy preview branching
- **[netlify/netlify-image-cdn](https://officialskills.sh/netlify/skills/netlify-image-cdn)** - Optimize and transform images via CDN
- **[netlify/netlify-forms](https://officialskills.sh/netlify/skills/netlify-forms)** - HTML form handling with spam filtering
- **[netlify/netlify-frameworks](https://officialskills.sh/netlify/skills/netlify-frameworks)** - Deploy web frameworks with SSR support
- **[netlify/netlify-caching](https://officialskills.sh/netlify/skills/netlify-caching)** - Configure CDN caching and cache purging
- **[netlify/netlify-config](https://officialskills.sh/netlify/skills/netlify-config)** - Reference for netlify.toml site configuration
- **[netlify/netlify-cli-and-deploy](https://officialskills.sh/netlify/skills/netlify-cli-and-deploy)** - CLI setup, local dev, and deployment workflows
- **[netlify/netlify-deploy](https://officialskills.sh/netlify/skills/netlify-deploy)** - Automated deployment workflow for Netlify sites
- **[netlify/netlify-ai-gateway](https://officialskills.sh/netlify/skills/netlify-ai-gateway)** - Access AI models via unified gateway endpoint

</details>

<details>
<summary><h3 style="display:inline">Skills by Google Labs (Stitch)</h3></summary>

Agent Skills for the Stitch MCP server, compatible with Claude Code, Gemini CLI, Cursor, and more.

- **[google-labs-code/design-md](https://officialskills.sh/google-labs-code/skills/design-md)** - Create and manage DESIGN.md files
- **[google-labs-code/enhance-prompt](https://officialskills.sh/google-labs-code/skills/enhance-prompt)** - Improve prompts with design specs and UI/UX vocabulary
- **[google-labs-code/react-components](https://officialskills.sh/google-labs-code/skills/react-components)** - Stitch to React components conversion
- **[google-labs-code/remotion](https://officialskills.sh/google-labs-code/skills/remotion)** - Generate walkthrough videos from Stitch app designs
- **[google-labs-code/shadcn-ui](https://officialskills.sh/google-labs-code/skills/shadcn-ui)** - Build UI components with shadcn/ui
- **[google-labs-code/stitch-loop](https://officialskills.sh/google-labs-code/skills/stitch-loop)** - Iterative design-to-code feedback loop

</details>

<details>
<summary><h3 style="display:inline">Skills by Google Workspace CLI</h3></summary>

Official Google Workspace CLI skills for managing Google Workspace services via the `gws` CLI tool.

- **[googleworkspace/gws-shared](https://officialskills.sh/googleworkspace/skills/gws-shared)** - Shared authentication, global flags, and output formatting
- **[googleworkspace/gws-drive](https://officialskills.sh/googleworkspace/skills/gws-drive)** - Manage Google Drive files, folders, and shared drives
- **[googleworkspace/gws-sheets](https://officialskills.sh/googleworkspace/skills/gws-sheets)** - Read and write Google Sheets spreadsheets
- **[googleworkspace/gws-gmail](https://officialskills.sh/googleworkspace/skills/gws-gmail)** - Send, read, and manage Gmail email
- **[googleworkspace/gws-calendar](https://officialskills.sh/googleworkspace/skills/gws-calendar)** - Manage Google Calendar calendars and events
- **[googleworkspace/gws-admin-reports](https://officialskills.sh/googleworkspace/skills/gws-admin-reports)** - Audit logs and usage reports for Workspace
- **[googleworkspace/gws-docs](https://officialskills.sh/googleworkspace/skills/gws-docs)** - Read and write Google Docs documents
- **[googleworkspace/gws-slides](https://officialskills.sh/googleworkspace/skills/gws-slides)** - Read and write Google Slides presentations
- **[googleworkspace/gws-tasks](https://officialskills.sh/googleworkspace/skills/gws-tasks)** - Manage Google Tasks task lists and tasks
- **[googleworkspace/gws-people](https://officialskills.sh/googleworkspace/skills/gws-people)** - Manage Google People contacts and profiles
- **[googleworkspace/gws-chat](https://officialskills.sh/googleworkspace/skills/gws-chat)** - Manage Google Chat spaces and messages
- **[googleworkspace/gws-classroom](https://officialskills.sh/googleworkspace/skills/gws-classroom)** - Manage Google Classroom classes, rosters, and coursework
- **[googleworkspace/gws-forms](https://officialskills.sh/googleworkspace/skills/gws-forms)** - Read and write Google Forms
- **[googleworkspace/gws-keep](https://officialskills.sh/googleworkspace/skills/gws-keep)** - Manage Google Keep notes
- **[googleworkspace/gws-events](https://officialskills.sh/googleworkspace/skills/gws-events)** - Subscribe to Google Workspace events
- **[googleworkspace/gws-modelarmor](https://officialskills.sh/googleworkspace/skills/gws-modelarmor)** - Filter user-generated content for safety
- **[googleworkspace/gws-workflow](https://officialskills.sh/googleworkspace/skills/gws-workflow)** - Cross-service Google Workspace productivity workflows

</details>

<details>
<summary><h3 style="display:inline">Skills by Expo Team</h3></summary>

Official AI agent skills from the Expo team for building, deploying, and debugging Expo apps.

- **[expo/building-native-ui](https://officialskills.sh/expo/skills/building-native-ui)** - Build apps with Expo Router, styling, components, navigation, and animations
- **[expo/expo-api-routes](https://officialskills.sh/expo/skills/expo-api-routes)** - Create API routes in Expo Router with EAS Hosting
- **[expo/expo-cicd-workflows](https://officialskills.sh/expo/skills/expo-cicd-workflows)** - CI/CD workflows for Expo projects
- **[expo/expo-deployment](https://officialskills.sh/expo/skills/expo-deployment)** - Deploy Expo apps to production
- **[expo/expo-dev-client](https://officialskills.sh/expo/skills/expo-dev-client)** - Build and distribute Expo dev clients locally or via TestFlight
- **[expo/expo-tailwind-setup](https://officialskills.sh/expo/skills/expo-tailwind-setup)** - Set up Tailwind CSS v4 in Expo with NativeWind v5
- **[expo/expo-ui-jetpack-compose](https://officialskills.sh/expo/skills/expo-ui-jetpack-compose)** - Jetpack Compose UI components for Expo
- **[expo/expo-ui-swift-ui](https://officialskills.sh/expo/skills/expo-ui-swift-ui)** - SwiftUI components for Expo
- **[expo/native-data-fetching](https://officialskills.sh/expo/skills/native-data-fetching)** - Network requests, API calls, caching, and offline support
- **[expo/upgrading-expo](https://officialskills.sh/expo/skills/upgrading-expo)** - Upgrade Expo SDK versions
- **[expo/use-dom](https://officialskills.sh/expo/skills/use-dom)** - Run web code in a webview on native using DOM components

</details>

<details>
<summary><h3 style="display:inline">Skills by Hugging Face Team</h3></summary>

Official AI agent skills from the Hugging Face team for ML workflows.

- **[huggingface/hf-cli](https://officialskills.sh/huggingface/skills/hf-cli)** - HF CLI tool for Hub operations
- **[huggingface/hugging-face-dataset-viewer](https://officialskills.sh/huggingface/skills/hugging-face-dataset-viewer)** - Browse and query HF datasets with the Dataset Viewer API
- **[huggingface/hugging-face-datasets](https://officialskills.sh/huggingface/skills/hugging-face-datasets)** - Create and manage datasets with configs and SQL querying
- **[huggingface/hugging-face-evaluation](https://officialskills.sh/huggingface/skills/hugging-face-evaluation)** - Model evaluation with vLLM/lighteval and eval tables
- **[huggingface/hugging-face-jobs](https://officialskills.sh/huggingface/skills/hugging-face-jobs)** - Run compute jobs and Python scripts on HF infrastructure
- **[huggingface/hugging-face-model-trainer](https://officialskills.sh/huggingface/skills/hugging-face-model-trainer)** - Train models with TRL: SFT, DPO, GRPO, GGUF conversion
- **[huggingface/hugging-face-paper-pages](https://officialskills.sh/huggingface/skills/hugging-face-paper-pages)** - Create and manage paper pages on HF Hub
- **[huggingface/hugging-face-paper-publisher](https://officialskills.sh/huggingface/skills/hugging-face-paper-publisher)** - Publish papers on HF Hub with model/dataset links
- **[huggingface/hugging-face-tool-builder](https://officialskills.sh/huggingface/skills/hugging-face-tool-builder)** - Build reusable scripts for HF API operations
- **[huggingface/hugging-face-trackio](https://officialskills.sh/huggingface/skills/hugging-face-trackio)** - Track ML experiments with real-time dashboards
- **[huggingface/hugging-face-vision-trainer](https://officialskills.sh/huggingface/skills/hugging-face-vision-trainer)** - Train vision models on HF infrastructure
- **[huggingface/huggingface-gradio](https://officialskills.sh/huggingface/skills/huggingface-gradio)** - Build Gradio apps and deploy to HF Spaces
- **[huggingface/transformers.js](https://officialskills.sh/huggingface/skills/transformers.js)** - Run ML models in the browser with Transformers.js

</details>

<details>
<summary><h3 style="display:inline">Security Skills by Trail of Bits Team</h3></summary>

- **[trailofbits/ask-questions-if-underspecified](https://officialskills.sh/trailofbits/skills/ask-questions-if-underspecified)** - Prompt for clarification on ambiguous requirements
- **[trailofbits/audit-context-building](https://officialskills.sh/trailofbits/skills/audit-context-building)** - Deep architectural context via ultra-granular code analysis
- **[trailofbits/building-secure-contracts](https://officialskills.sh/trailofbits/skills/building-secure-contracts)** - Smart contract security toolkit with vulnerability scanners for 6 blockchains
- **[trailofbits/burpsuite-project-parser](https://officialskills.sh/trailofbits/skills/burpsuite-project-parser)** - Search and extract data from Burp Suite project files
- **[trailofbits/claude-in-chrome-troubleshooting](https://officialskills.sh/trailofbits/skills/claude-in-chrome-troubleshooting)** - Diagnose and fix Claude in Chrome MCP extension connectivity issues
- **[trailofbits/constant-time-analysis](https://officialskills.sh/trailofbits/skills/constant-time-analysis)** - Detect compiler-induced timing side-channels in crypto code
- **[trailofbits/culture-index](https://officialskills.sh/trailofbits/skills/culture-index)** - Index and search culture documentation
- **[trailofbits/differential-review](https://officialskills.sh/trailofbits/skills/differential-review)** - Security-focused diff review with git history analysis
- **[trailofbits/dwarf-expert](https://officialskills.sh/trailofbits/skills/dwarf-expert)** - DWARF debugging format expertise
- **[trailofbits/entry-point-analyzer](https://officialskills.sh/trailofbits/skills/entry-point-analyzer)** - Identify state-changing entry points in smart contracts
- **[trailofbits/firebase-apk-scanner](https://officialskills.sh/trailofbits/skills/firebase-apk-scanner)** - Scan Android APKs for Firebase misconfigurations and security vulnerabilities
- **[trailofbits/insecure-defaults](https://officialskills.sh/trailofbits/skills/insecure-defaults)** - Detect insecure default configurations like hardcoded secrets, default credentials, and weak crypto
- **[trailofbits/modern-python](https://officialskills.sh/trailofbits/skills/modern-python)** - Modern Python tooling with uv, ruff, ty, and pytest best practices
- **[trailofbits/property-based-testing](https://officialskills.sh/trailofbits/skills/property-based-testing)** - Property-based testing for multiple languages and smart contracts
- **[trailofbits/semgrep-rule-creator](https://officialskills.sh/trailofbits/skills/semgrep-rule-creator)** - Create and refine Semgrep rules for vulnerability detection
- **[trailofbits/semgrep-rule-variant-creator](https://officialskills.sh/trailofbits/skills/semgrep-rule-variant-creator)** - Port existing Semgrep rules to new target languages with test-driven validation
- **[trailofbits/sharp-edges](https://officialskills.sh/trailofbits/skills/sharp-edges)** - Identify error-prone APIs and dangerous configurations
- **[trailofbits/spec-to-code-compliance](https://officialskills.sh/trailofbits/skills/spec-to-code-compliance)** - Specification-to-code compliance checker for blockchain audits
- **[trailofbits/static-analysis](https://officialskills.sh/trailofbits/skills/static-analysis)** - Static analysis toolkit with CodeQL, Semgrep, and SARIF
- **[trailofbits/testing-handbook-skills](https://officialskills.sh/trailofbits/skills/testing-handbook-skills)** - Testing Handbook skills: fuzzers, static analysis, sanitizers
- **[trailofbits/variant-analysis](https://officialskills.sh/trailofbits/skills/variant-analysis)** - Find similar vulnerabilities via pattern-based analysis

</details>

<details>
<summary><h3 style="display:inline">Skills by Sentry team for their dev team.</h3></summary>

- **[getsentry/agents-md](https://officialskills.sh/getsentry/skills/agents-md)** - Generate and manage AGENTS.md files
- **[getsentry/claude-settings-audit](https://officialskills.sh/getsentry/skills/claude-settings-audit)** - Audit Claude settings configuration
- **[getsentry/code-review](https://officialskills.sh/getsentry/skills/code-review)** - Perform code reviews
- **[getsentry/commit](https://officialskills.sh/getsentry/skills/commit)** - Create commits with best practices
- **[getsentry/create-pr](https://officialskills.sh/getsentry/skills/create-pr)** - Create pull requests
- **[getsentry/find-bugs](https://officialskills.sh/getsentry/skills/find-bugs)** - Find and identify bugs in code
- **[getsentry/iterate-pr](https://officialskills.sh/getsentry/skills/iterate-pr)** - Iterate on pull request feedback

</details>

<details>
<summary><h3 style="display:inline">Skills by Microsoft</h3></summary>

Domain-specific knowledge for Azure SDK and Microsoft AI Foundry development. 133 skills across 6 languages.

### Core Skills

- **[microsoft/cloud-solution-architect](https://officialskills.sh/microsoft/skills/cloud-solution-architect)** - Design well-architected Azure cloud systems
- **[microsoft/continual-learning](https://officialskills.sh/microsoft/skills/continual-learning)** - Continual learning patterns for Azure AI
- **[microsoft/copilot-sdk](https://officialskills.sh/microsoft/skills/copilot-sdk)** - Build applications powered by GitHub Copilot SDK
- **[microsoft/entra-agent-id](https://officialskills.sh/microsoft/skills/entra-agent-id)** - Microsoft Entra Agent ID OAuth2 identities via Graph API
- **[microsoft/frontend-design-review](https://officialskills.sh/microsoft/skills/frontend-design-review)** - Review and create distinctive frontend interfaces
- **[microsoft/github-issue-creator](https://officialskills.sh/microsoft/skills/github-issue-creator)** - Structured GitHub issue reports from notes
- **[microsoft/mcp-builder](https://officialskills.sh/microsoft/skills/mcp-builder)** - MCP server creation guide for LLM tool integration
- **[microsoft/podcast-generation](https://officialskills.sh/microsoft/skills/podcast-generation)** - AI podcast audio with Azure OpenAI Realtime API
- **[microsoft/skill-creator](https://officialskills.sh/microsoft/skills/skill-creator)** - Guide for creating effective skills for AI coding agents

### .NET Skills

- **[microsoft/azure-ai-document-intelligence-dotnet](https://officialskills.sh/microsoft/skills/azure-ai-document-intelligence-dotnet)** - Document text, table, and data extraction
- **[microsoft/azure-ai-openai-dotnet](https://officialskills.sh/microsoft/skills/azure-ai-openai-dotnet)** - GPT-4, embeddings, DALL-E, and Whisper client
- **[microsoft/azure-ai-projects-dotnet](https://officialskills.sh/microsoft/skills/azure-ai-projects-dotnet)** - AI Foundry project management SDK
- **[microsoft/azure-ai-voicelive-dotnet](https://officialskills.sh/microsoft/skills/azure-ai-voicelive-dotnet)** - Real-time bidirectional voice AI
- **[microsoft/azure-eventgrid-dotnet](https://officialskills.sh/microsoft/skills/azure-eventgrid-dotnet)** - Event Grid topic and domain publishing
- **[microsoft/azure-eventhub-dotnet](https://officialskills.sh/microsoft/skills/azure-eventhub-dotnet)** - High-throughput event streaming
- **[microsoft/azure-identity-dotnet](https://officialskills.sh/microsoft/skills/azure-identity-dotnet)** - Microsoft Entra ID authentication
- **[microsoft/azure-maps-search-dotnet](https://officialskills.sh/microsoft/skills/azure-maps-search-dotnet)** - Geocoding, routing, and weather services
- **[microsoft/azure-mgmt-apicenter-dotnet](https://officialskills.sh/microsoft/skills/azure-mgmt-apicenter-dotnet)** - API inventory and governance
- **[microsoft/azure-mgmt-apimanagement-dotnet](https://officialskills.sh/microsoft/skills/azure-mgmt-apimanagement-dotnet)** - API Management provisioning via ARM
- **[microsoft/azure-mgmt-applicationinsights-dotnet](https://officialskills.sh/microsoft/skills/azure-mgmt-applicationinsights-dotnet)** - Application Insights resource management
- **[microsoft/azure-mgmt-arizeaiobservabilityeval-dotnet](https://officialskills.sh/microsoft/skills/azure-mgmt-arizeaiobservabilityeval-dotnet)** - Arize AI observability management
- **[microsoft/azure-mgmt-botservice-dotnet](https://officialskills.sh/microsoft/skills/azure-mgmt-botservice-dotnet)** - Bot Service provisioning via ARM
- **[microsoft/azure-mgmt-fabric-dotnet](https://officialskills.sh/microsoft/skills/azure-mgmt-fabric-dotnet)** - Microsoft Fabric capacity management
- **[microsoft/azure-mgmt-mongodbatlas-dotnet](https://officialskills.sh/microsoft/skills/azure-mgmt-mongodbatlas-dotnet)** - MongoDB Atlas as ARM resources
- **[microsoft/azure-mgmt-weightsandbiases-dotnet](https://officialskills.sh/microsoft/skills/azure-mgmt-weightsandbiases-dotnet)** - Weights & Biases deployment management
- **[microsoft/azure-resource-manager-cosmosdb-dotnet](https://officialskills.sh/microsoft/skills/azure-resource-manager-cosmosdb-dotnet)** - Cosmos DB resource provisioning
- **[microsoft/azure-resource-manager-durabletask-dotnet](https://officialskills.sh/microsoft/skills/azure-resource-manager-durabletask-dotnet)** - Durable Task Scheduler management
- **[microsoft/azure-resource-manager-mysql-dotnet](https://officialskills.sh/microsoft/skills/azure-resource-manager-mysql-dotnet)** - MySQL Flexible Server management
- **[microsoft/azure-resource-manager-playwright-dotnet](https://officialskills.sh/microsoft/skills/azure-resource-manager-playwright-dotnet)** - Playwright Testing workspace management
- **[microsoft/azure-resource-manager-postgresql-dotnet](https://officialskills.sh/microsoft/skills/azure-resource-manager-postgresql-dotnet)** - PostgreSQL Flexible Server management
- **[microsoft/azure-resource-manager-redis-dotnet](https://officialskills.sh/microsoft/skills/azure-resource-manager-redis-dotnet)** - Azure Cache for Redis provisioning
- **[microsoft/azure-resource-manager-sql-dotnet](https://officialskills.sh/microsoft/skills/azure-resource-manager-sql-dotnet)** - Azure SQL resource management
- **[microsoft/azure-search-documents-dotnet](https://officialskills.sh/microsoft/skills/azure-search-documents-dotnet)** - Full-text, vector, and hybrid search
- **[microsoft/azure-security-keyvault-keys-dotnet](https://officialskills.sh/microsoft/skills/azure-security-keyvault-keys-dotnet)** - Cryptographic key management
- **[microsoft/azure-servicebus-dotnet](https://officialskills.sh/microsoft/skills/azure-servicebus-dotnet)** - Enterprise messaging with queues and topics
- **[microsoft/m365-agents-dotnet](https://officialskills.sh/microsoft/skills/m365-agents-dotnet)** - M365, Teams, and Copilot Studio agents
- **[microsoft/microsoft-azure-webjobs-extensions-authentication-events-dotnet](https://officialskills.sh/microsoft/skills/microsoft-azure-webjobs-extensions-authentication-events-dotnet)** - Entra ID custom auth events handler

### Java Skills

- **[microsoft/azure-ai-anomalydetector-java](https://officialskills.sh/microsoft/skills/azure-ai-anomalydetector-java)** - Anomaly detection applications
- **[microsoft/azure-ai-contentsafety-java](https://officialskills.sh/microsoft/skills/azure-ai-contentsafety-java)** - Content moderation and safety
- **[microsoft/azure-ai-formrecognizer-java](https://officialskills.sh/microsoft/skills/azure-ai-formrecognizer-java)** - Document analysis and form extraction
- **[microsoft/azure-ai-projects-java](https://officialskills.sh/microsoft/skills/azure-ai-projects-java)** - AI Foundry project management
- **[microsoft/azure-ai-vision-imageanalysis-java](https://officialskills.sh/microsoft/skills/azure-ai-vision-imageanalysis-java)** - Image captioning, OCR, and object detection
- **[microsoft/azure-ai-voicelive-java](https://officialskills.sh/microsoft/skills/azure-ai-voicelive-java)** - Real-time bidirectional voice AI
- **[microsoft/azure-appconfiguration-java](https://officialskills.sh/microsoft/skills/azure-appconfiguration-java)** - Centralized app configuration management
- **[microsoft/azure-communication-callautomation-java](https://officialskills.sh/microsoft/skills/azure-communication-callautomation-java)** - Call automation with IVR and AI
- **[microsoft/azure-communication-callingserver-java](https://officialskills.sh/microsoft/skills/azure-communication-callingserver-java)** - CallingServer legacy SDK
- **[microsoft/azure-communication-chat-java](https://officialskills.sh/microsoft/skills/azure-communication-chat-java)** - Real-time chat with threads and receipts
- **[microsoft/azure-communication-common-java](https://officialskills.sh/microsoft/skills/azure-communication-common-java)** - Communication Services common utilities
- **[microsoft/azure-communication-sms-java](https://officialskills.sh/microsoft/skills/azure-communication-sms-java)** - SMS sending and delivery reports
- **[microsoft/azure-compute-batch-java](https://officialskills.sh/microsoft/skills/azure-compute-batch-java)** - Large-scale parallel and HPC batch jobs
- **[microsoft/azure-cosmos-java](https://officialskills.sh/microsoft/skills/azure-cosmos-java)** - Cosmos DB NoSQL with global distribution
- **[microsoft/azure-data-tables-java](https://officialskills.sh/microsoft/skills/azure-data-tables-java)** - NoSQL key-value table storage
- **[microsoft/azure-eventgrid-java](https://officialskills.sh/microsoft/skills/azure-eventgrid-java)** - Event-driven pub/sub messaging
- **[microsoft/azure-eventhub-java](https://officialskills.sh/microsoft/skills/azure-eventhub-java)** - Real-time high-throughput streaming
- **[microsoft/azure-identity-java](https://officialskills.sh/microsoft/skills/azure-identity-java)** - Microsoft Entra ID authentication
- **[microsoft/azure-messaging-webpubsub-java](https://officialskills.sh/microsoft/skills/azure-messaging-webpubsub-java)** - Real-time WebSocket messaging
- **[microsoft/azure-monitor-ingestion-java](https://officialskills.sh/microsoft/skills/azure-monitor-ingestion-java)** - Custom log ingestion to Azure Monitor
- **[microsoft/azure-monitor-opentelemetry-exporter-java](https://officialskills.sh/microsoft/skills/azure-monitor-opentelemetry-exporter-java)** - OpenTelemetry export to Azure Monitor
- **[microsoft/azure-monitor-query-java](https://officialskills.sh/microsoft/skills/azure-monitor-query-java)** - Query Azure Monitor logs and metrics
- **[microsoft/azure-security-keyvault-keys-java](https://officialskills.sh/microsoft/skills/azure-security-keyvault-keys-java)** - Cryptographic key management
- **[microsoft/azure-security-keyvault-secrets-java](https://officialskills.sh/microsoft/skills/azure-security-keyvault-secrets-java)** - Secret management for passwords and keys
- **[microsoft/azure-storage-blob-java](https://officialskills.sh/microsoft/skills/azure-storage-blob-java)** - Blob storage for file management

### Python Skills

- **[microsoft/agent-framework-azure-ai-py](https://officialskills.sh/microsoft/skills/agent-framework-azure-ai-py)** - Agent Framework for Azure AI Foundry
- **[microsoft/agents-v2-py](https://officialskills.sh/microsoft/skills/agents-v2-py)** - Foundry Agents SDK — container-based agents with custom images
- **[microsoft/azure-ai-contentsafety-py](https://officialskills.sh/microsoft/skills/azure-ai-contentsafety-py)** - Harmful content detection
- **[microsoft/azure-ai-contentunderstanding-py](https://officialskills.sh/microsoft/skills/azure-ai-contentunderstanding-py)** - Multimodal content extraction
- **[microsoft/azure-ai-ml-py](https://officialskills.sh/microsoft/skills/azure-ai-ml-py)** - Azure ML workspace and job management
- **[microsoft/azure-ai-projects-py](https://officialskills.sh/microsoft/skills/azure-ai-projects-py)** - AI Foundry project client and agents
- **[microsoft/azure-ai-textanalytics-py](https://officialskills.sh/microsoft/skills/azure-ai-textanalytics-py)** - NLP: sentiment, entities, key phrases
- **[microsoft/azure-ai-transcription-py](https://officialskills.sh/microsoft/skills/azure-ai-transcription-py)** - Speech-to-text transcription
- **[microsoft/azure-ai-translation-document-py](https://officialskills.sh/microsoft/skills/azure-ai-translation-document-py)** - Batch document translation
- **[microsoft/azure-ai-translation-text-py](https://officialskills.sh/microsoft/skills/azure-ai-translation-text-py)** - Real-time text translation
- **[microsoft/azure-ai-vision-imageanalysis-py](https://officialskills.sh/microsoft/skills/azure-ai-vision-imageanalysis-py)** - Image captions, tags, OCR, objects
- **[microsoft/azure-ai-voicelive-py](https://officialskills.sh/microsoft/skills/azure-ai-voicelive-py)** - Real-time bidirectional voice AI
- **[microsoft/azure-appconfiguration-py](https://officialskills.sh/microsoft/skills/azure-appconfiguration-py)** - Feature flags and dynamic settings
- **[microsoft/azure-containerregistry-py](https://officialskills.sh/microsoft/skills/azure-containerregistry-py)** - Container image and registry management
- **[microsoft/azure-cosmos-db-py](https://officialskills.sh/microsoft/skills/azure-cosmos-db-py)** - Cosmos DB with Python/FastAPI patterns
- **[microsoft/azure-cosmos-py](https://officialskills.sh/microsoft/skills/azure-cosmos-py)** - Cosmos DB NoSQL client library
- **[microsoft/azure-data-tables-py](https://officialskills.sh/microsoft/skills/azure-data-tables-py)** - NoSQL key-value table storage
- **[microsoft/azure-eventgrid-py](https://officialskills.sh/microsoft/skills/azure-eventgrid-py)** - Event-driven pub/sub routing
- **[microsoft/azure-eventhub-py](https://officialskills.sh/microsoft/skills/azure-eventhub-py)** - High-throughput event streaming
- **[microsoft/azure-identity-py](https://officialskills.sh/microsoft/skills/azure-identity-py)** - Microsoft Entra ID authentication
- **[microsoft/azure-keyvault-py](https://officialskills.sh/microsoft/skills/azure-keyvault-py)** - Secrets, keys, and certificate management
- **[microsoft/azure-messaging-webpubsubservice-py](https://officialskills.sh/microsoft/skills/azure-messaging-webpubsubservice-py)** - Real-time WebSocket messaging
- **[microsoft/azure-mgmt-apicenter-py](https://officialskills.sh/microsoft/skills/azure-mgmt-apicenter-py)** - API inventory and governance
- **[microsoft/azure-mgmt-apimanagement-py](https://officialskills.sh/microsoft/skills/azure-mgmt-apimanagement-py)** - API Management service administration
- **[microsoft/azure-mgmt-botservice-py](https://officialskills.sh/microsoft/skills/azure-mgmt-botservice-py)** - Bot Service resource management
- **[microsoft/azure-mgmt-fabric-py](https://officialskills.sh/microsoft/skills/azure-mgmt-fabric-py)** - Microsoft Fabric capacity management
- **[microsoft/azure-monitor-ingestion-py](https://officialskills.sh/microsoft/skills/azure-monitor-ingestion-py)** - Custom log ingestion to Azure Monitor
- **[microsoft/azure-monitor-opentelemetry-exporter-py](https://officialskills.sh/microsoft/skills/azure-monitor-opentelemetry-exporter-py)** - OpenTelemetry export to Application Insights
- **[microsoft/azure-monitor-opentelemetry-py](https://officialskills.sh/microsoft/skills/azure-monitor-opentelemetry-py)** - One-line Application Insights setup
- **[microsoft/azure-monitor-query-py](https://officialskills.sh/microsoft/skills/azure-monitor-query-py)** - Query Azure Monitor logs and metrics
- **[microsoft/azure-search-documents-py](https://officialskills.sh/microsoft/skills/azure-search-documents-py)** - Full-text, vector, and hybrid search
- **[microsoft/azure-servicebus-py](https://officialskills.sh/microsoft/skills/azure-servicebus-py)** - Enterprise messaging with queues and topics
- **[microsoft/azure-speech-to-text-rest-py](https://officialskills.sh/microsoft/skills/azure-speech-to-text-rest-py)** - REST speech-to-text for short audio
- **[microsoft/azure-storage-blob-py](https://officialskills.sh/microsoft/skills/azure-storage-blob-py)** - Blob object storage client
- **[microsoft/azure-storage-file-datalake-py](https://officialskills.sh/microsoft/skills/azure-storage-file-datalake-py)** - Hierarchical data lake storage
- **[microsoft/azure-storage-file-share-py](https://officialskills.sh/microsoft/skills/azure-storage-file-share-py)** - SMB file share management
- **[microsoft/azure-storage-queue-py](https://officialskills.sh/microsoft/skills/azure-storage-queue-py)** - Simple message queuing
- **[microsoft/fastapi-router-py](https://officialskills.sh/microsoft/skills/fastapi-router-py)** - FastAPI routers with CRUD and auth
- **[microsoft/m365-agents-py](https://officialskills.sh/microsoft/skills/m365-agents-py)** - M365, Teams, and Copilot Studio agents
- **[microsoft/pydantic-models-py](https://officialskills.sh/microsoft/skills/pydantic-models-py)** - Pydantic models for API schemas

### Rust Skills

- **[microsoft/azure-cosmos-rust](https://officialskills.sh/microsoft/skills/azure-cosmos-rust)** - Cosmos DB NoSQL client
- **[microsoft/azure-eventhub-rust](https://officialskills.sh/microsoft/skills/azure-eventhub-rust)** - Event Hubs streaming client
- **[microsoft/azure-identity-rust](https://officialskills.sh/microsoft/skills/azure-identity-rust)** - Microsoft Entra ID authentication
- **[microsoft/azure-keyvault-certificates-rust](https://officialskills.sh/microsoft/skills/azure-keyvault-certificates-rust)** - Key Vault certificate management
- **[microsoft/azure-keyvault-keys-rust](https://officialskills.sh/microsoft/skills/azure-keyvault-keys-rust)** - Key Vault cryptographic key management
- **[microsoft/azure-keyvault-secrets-rust](https://officialskills.sh/microsoft/skills/azure-keyvault-secrets-rust)** - Key Vault secret storage
- **[microsoft/azure-storage-blob-rust](https://officialskills.sh/microsoft/skills/azure-storage-blob-rust)** - Blob object storage client

### TypeScript Skills

- **[microsoft/azure-ai-contentsafety-ts](https://officialskills.sh/microsoft/skills/azure-ai-contentsafety-ts)** - Content safety for text and images
- **[microsoft/azure-ai-document-intelligence-ts](https://officialskills.sh/microsoft/skills/azure-ai-document-intelligence-ts)** - Document text and table extraction
- **[microsoft/azure-ai-projects-ts](https://officialskills.sh/microsoft/skills/azure-ai-projects-ts)** - AI Foundry project client and agents
- **[microsoft/azure-ai-translation-ts](https://officialskills.sh/microsoft/skills/azure-ai-translation-ts)** - Text and document translation
- **[microsoft/azure-ai-voicelive-ts](https://officialskills.sh/microsoft/skills/azure-ai-voicelive-ts)** - Real-time bidirectional voice AI
- **[microsoft/azure-appconfiguration-ts](https://officialskills.sh/microsoft/skills/azure-appconfiguration-ts)** - App config, feature flags, dynamic refresh
- **[microsoft/azure-cosmos-ts](https://officialskills.sh/microsoft/skills/azure-cosmos-ts)** - Cosmos DB NoSQL CRUD and queries
- **[microsoft/azure-eventhub-ts](https://officialskills.sh/microsoft/skills/azure-eventhub-ts)** - High-throughput event streaming
- **[microsoft/azure-identity-ts](https://officialskills.sh/microsoft/skills/azure-identity-ts)** - Microsoft Entra ID authentication
- **[microsoft/azure-keyvault-keys-ts](https://officialskills.sh/microsoft/skills/azure-keyvault-keys-ts)** - Cryptographic key management
- **[microsoft/azure-keyvault-secrets-ts](https://officialskills.sh/microsoft/skills/azure-keyvault-secrets-ts)** - Secret storage and retrieval
- **[microsoft/azure-microsoft-playwright-testing-ts](https://officialskills.sh/microsoft/skills/azure-microsoft-playwright-testing-ts)** - Playwright tests at scale on Azure
- **[microsoft/azure-monitor-opentelemetry-ts](https://officialskills.sh/microsoft/skills/azure-monitor-opentelemetry-ts)** - Application Insights tracing and metrics
- **[microsoft/azure-postgres-ts](https://officialskills.sh/microsoft/skills/azure-postgres-ts)** - PostgreSQL Flexible Server connection
- **[microsoft/azure-search-documents-ts](https://officialskills.sh/microsoft/skills/azure-search-documents-ts)** - Vector/hybrid search with semantic ranking
- **[microsoft/azure-servicebus-ts](https://officialskills.sh/microsoft/skills/azure-servicebus-ts)** - Messaging with queues and topics
- **[microsoft/azure-storage-blob-ts](https://officialskills.sh/microsoft/skills/azure-storage-blob-ts)** - Blob upload, download, and management
- **[microsoft/azure-storage-file-share-ts](https://officialskills.sh/microsoft/skills/azure-storage-file-share-ts)** - SMB file share operations
- **[microsoft/azure-storage-queue-ts](https://officialskills.sh/microsoft/skills/azure-storage-queue-ts)** - Queue message operations
- **[microsoft/azure-web-pubsub-ts](https://officialskills.sh/microsoft/skills/azure-web-pubsub-ts)** - Real-time WebSocket pub/sub messaging
- **[microsoft/frontend-ui-dark-ts](https://officialskills.sh/microsoft/skills/frontend-ui-dark-ts)** - Dark-themed React with Tailwind and animations
- **[microsoft/m365-agents-ts](https://officialskills.sh/microsoft/skills/m365-agents-ts)** - M365, Teams, and Copilot Studio agents
- **[microsoft/react-flow-node-ts](https://officialskills.sh/microsoft/skills/react-flow-node-ts)** - React Flow node components with Zustand
- **[microsoft/zustand-store-ts](https://officialskills.sh/microsoft/skills/zustand-store-ts)** - Zustand stores with middleware patterns

</details>

<details>
<summary><h3 style="display:inline">Skills by fal.ai Team</h3></summary>

- **[fal-ai-community/fal-3d](https://officialskills.sh/fal-ai-community/skills/fal-3d)** - Generate 3D models from text or images
- **[fal-ai-community/fal-audio](https://officialskills.sh/fal-ai-community/skills/fal-audio)** - Text-to-speech and speech-to-text using fal.ai audio models
- **[fal-ai-community/fal-generate](https://officialskills.sh/fal-ai-community/skills/fal-generate)** - Generate images and videos using fal.ai AI models
- **[fal-ai-community/fal-image-edit](https://officialskills.sh/fal-ai-community/skills/fal-image-edit)** - AI-powered image editing with style transfer and object removal
- **[fal-ai-community/fal-kling-o3](https://officialskills.sh/fal-ai-community/skills/fal-kling-o3)** - Generate images and videos with Kling O3 — Kling's most powerful model family
- **[fal-ai-community/fal-lip-sync](https://officialskills.sh/fal-ai-community/skills/fal-lip-sync)** - Create talking head videos and lip sync audio to video
- **[fal-ai-community/fal-platform](https://officialskills.sh/fal-ai-community/skills/fal-platform)** - Platform APIs for model management, pricing, and usage tracking
- **[fal-ai-community/fal-realtime](https://officialskills.sh/fal-ai-community/skills/fal-realtime)** - Real-time and streaming AI image generation
- **[fal-ai-community/fal-restore](https://officialskills.sh/fal-ai-community/skills/fal-restore)** - Restore and fix image quality — deblur, denoise, fix faces, restore documents
- **[fal-ai-community/fal-train](https://officialskills.sh/fal-ai-community/skills/fal-train)** - Train custom AI models (LoRA) on fal.ai for personalized image generation
- **[fal-ai-community/fal-tryon](https://officialskills.sh/fal-ai-community/skills/fal-tryon)** - Virtual try-on — see how clothes look on a person
- **[fal-ai-community/fal-upscale](https://officialskills.sh/fal-ai-community/skills/fal-upscale)** - Upscale and enhance image and video resolution using AI
- **[fal-ai-community/fal-video-edit](https://officialskills.sh/fal-ai-community/skills/fal-video-edit)** - Edit existing videos using AI — remix style, upscale, remove background, add audio
- **[fal-ai-community/fal-vision](https://officialskills.sh/fal-ai-community/skills/fal-vision)** - Analyze images — segment objects, detect, OCR, describe, visual Q&A
- **[fal-ai-community/fal-workflow](https://officialskills.sh/fal-ai-community/skills/fal-workflow)** - Generate workflow JSON files for chaining AI models

</details>

<details>
<summary><h3 style="display:inline">Skills by WordPress Development Team</h3></summary>

- **[WordPress/wordpress-router](https://officialskills.sh/WordPress/skills/wordpress-router)** - Classifies WordPress repos and routes to the right workflow
- **[WordPress/wp-project-triage](https://officialskills.sh/WordPress/skills/wp-project-triage)** - Detects project type, tooling, and versions automatically
- **[WordPress/wp-block-development](https://officialskills.sh/WordPress/skills/wp-block-development)** - Gutenberg blocks: block.json, attributes, rendering, deprecations
- **[WordPress/wp-block-themes](https://officialskills.sh/WordPress/skills/wp-block-themes)** - Block themes: theme.json, templates, patterns, style variations
- **[WordPress/wp-plugin-development](https://officialskills.sh/WordPress/skills/wp-plugin-development)** - Plugin architecture, hooks, settings API, security
- **[WordPress/wp-rest-api](https://officialskills.sh/WordPress/skills/wp-rest-api)** - REST API routes/endpoints, schema, auth, and response shaping
- **[WordPress/wp-interactivity-api](https://officialskills.sh/WordPress/skills/wp-interactivity-api)** - Frontend interactivity with data-wp-* directives and stores
- **[WordPress/wp-abilities-api](https://officialskills.sh/WordPress/skills/wp-abilities-api)** - Capability-based permissions and REST API authentication
- **[WordPress/wp-wpcli-and-ops](https://officialskills.sh/WordPress/skills/wp-wpcli-and-ops)** - WP-CLI commands, automation, multisite, search-replace
- **[WordPress/wp-performance](https://officialskills.sh/WordPress/skills/wp-performance)** - Profiling, caching, database optimization, Server-Timing
- **[WordPress/wp-phpstan](https://officialskills.sh/WordPress/skills/wp-phpstan)** - PHPStan static analysis for WordPress projects
- **[WordPress/wp-playground](https://officialskills.sh/WordPress/skills/wp-playground)** - WordPress Playground for instant local environments
- **[WordPress/wpds](https://officialskills.sh/WordPress/skills/wpds)** - WordPress Design System

</details>

<details>
<summary><h3 style="display:inline">Skills by OpenAI</h3></summary>

Official curated skills from OpenAI's skills repository.

- **[openai/cloudflare-deploy](https://officialskills.sh/openai/skills/cloudflare-deploy)** - Deploy apps to Cloudflare using Workers, Pages, and platform services
- **[openai/develop-web-game](https://officialskills.sh/openai/skills/develop-web-game)** - Build and test web games iteratively using Playwright with time-stepping
- **[openai/doc](https://officialskills.sh/openai/skills/doc)** - Read, create, and edit .docx documents with formatting and layout fidelity
- **[openai/gh-address-comments](https://officialskills.sh/openai/skills/gh-address-comments)** - Address review and issue comments on open GitHub PRs via CLI
- **[openai/gh-fix-ci](https://officialskills.sh/openai/skills/gh-fix-ci)** - Debug and fix failing GitHub Actions PR checks using log inspection
- **[openai/imagegen](https://officialskills.sh/openai/skills/imagegen)** - Generate and edit images using OpenAI's Image API for projects
- **[openai/jupyter-notebook](https://officialskills.sh/openai/skills/jupyter-notebook)** - Create clean, reproducible Jupyter notebooks for experiments and tutorials
- **[openai/linear](https://officialskills.sh/openai/skills/linear)** - Manage issues, projects, and team workflows in Linear
- **[openai/netlify-deploy](https://officialskills.sh/openai/skills/netlify-deploy)** - Automate Netlify deployments with CLI auth, linking, and environment support
- **[openai/notion-knowledge-capture](https://officialskills.sh/openai/skills/notion-knowledge-capture)** - Convert conversations into structured, searchable Notion wiki entries
- **[openai/notion-meeting-intelligence](https://officialskills.sh/openai/skills/notion-meeting-intelligence)** - Prep meetings by pulling Notion context and tailoring agendas
- **[openai/notion-research-documentation](https://officialskills.sh/openai/skills/notion-research-documentation)** - Research Notion content and synthesize findings into structured briefs
- **[openai/notion-spec-to-implementation](https://officialskills.sh/openai/skills/notion-spec-to-implementation)** - Convert Notion specs into linked implementation plans and tasks
- **[openai/openai-docs](https://officialskills.sh/openai/skills/openai-docs)** - Provide authoritative guidance from OpenAI developer documentation
- **[openai/pdf](https://officialskills.sh/openai/skills/pdf)** - Read, create, and review PDFs with layout and visual formatting integrity
- **[openai/playwright](https://officialskills.sh/openai/skills/playwright)** - Automate real browser interactions for navigation, forms, and scraping
- **[openai/render-deploy](https://officialskills.sh/openai/skills/render-deploy)** - Deploy applications to Render's cloud platform using Git-backed services
- **[openai/screenshot](https://officialskills.sh/openai/skills/screenshot)** - Capture desktop, app windows, or pixel regions across OS platforms
- **[openai/security-best-practices](https://officialskills.sh/openai/skills/security-best-practices)** - Review code for language-specific security vulnerabilities
- **[openai/security-ownership-map](https://officialskills.sh/openai/skills/security-ownership-map)** - Map people-to-file ownership, compute bus factor, and identify risks
- **[openai/security-threat-model](https://officialskills.sh/openai/skills/security-threat-model)** - Generate repo-specific threat models identifying trust boundaries
- **[openai/sentry](https://officialskills.sh/openai/skills/sentry)** - Inspect Sentry issues, summarize production errors, and pull health data
- **[openai/sora](https://officialskills.sh/openai/skills/sora)** - Generate, remix, and manage short video clips via OpenAI's Sora API
- **[openai/speech](https://officialskills.sh/openai/skills/speech)** - Generate spoken audio from text using OpenAI's API with built-in voices
- **[openai/spreadsheet](https://officialskills.sh/openai/skills/spreadsheet)** - Create, edit, analyze, and visualize spreadsheets with formulas
- **[openai/transcribe](https://officialskills.sh/openai/skills/transcribe)** - Transcribe audio files to text with optional speaker diarization
- **[openai/vercel-deploy](https://officialskills.sh/openai/skills/vercel-deploy)** - Deploy applications and websites to Vercel with preview or production options
- **[openai/yeet](https://officialskills.sh/openai/skills/yeet)** - Stage, commit, push code, and open a GitHub pull request via CLI
- **[openai/aspnet-core](https://officialskills.sh/openai/skills/aspnet-core)** - Build, review, and architect ASP.NET Core apps (Blazor, MVC, Minimal APIs, etc.)
- **[openai/chatgpt-apps](https://officialskills.sh/openai/skills/chatgpt-apps)** - Build, scaffold, and troubleshoot ChatGPT Apps SDK apps with MCP server and widget UI
- **[openai/figma](https://officialskills.sh/openai/skills/figma)** - Use the Figma MCP server to fetch design context and translate nodes into production code
- **[openai/figma-code-connect-components](https://officialskills.sh/openai/skills/figma-code-connect-components)** - Connect Figma design components to code components using Code Connect
- **[openai/figma-create-design-system-rules](https://officialskills.sh/openai/skills/figma-create-design-system-rules)** - Rules for implementing Figma designs using the Figma MCP server
- **[openai/figma-create-new-file](https://officialskills.sh/openai/skills/figma-create-new-file)** - Create a new blank Figma file or FigJam file
- **[openai/figma-generate-design](https://officialskills.sh/openai/skills/figma-generate-design)** - Translate app pages and layouts into Figma using design system tokens
- **[openai/figma-generate-library](https://officialskills.sh/openai/skills/figma-generate-library)** - Build or update a professional-grade design system in Figma from a codebase
- **[openai/figma-implement-design](https://officialskills.sh/openai/skills/figma-implement-design)** - Translate Figma designs into production-ready code with 1:1 visual fidelity
- **[openai/figma-use](https://officialskills.sh/openai/skills/figma-use)** - Prerequisite skill for every use_figma tool call — write/read actions in Figma context
- **[openai/frontend-skill](https://officialskills.sh/openai/skills/frontend-skill)** - Create visually strong landing pages, websites, and app UIs with restrained composition
- **[openai/playwright-interactive](https://officialskills.sh/openai/skills/playwright-interactive)** - Persistent browser and Electron interaction via js_repl for iterative UI debugging
- **[openai/slides](https://officialskills.sh/openai/skills/slides)** - Create and edit .pptx presentation decks with PptxGenJS
- **[openai/winui-app](https://officialskills.sh/openai/skills/winui-app)** - Bootstrap and develop modern WinUI 3 desktop apps with C# and Windows App SDK

</details>

<details>
<summary><h3 style="display:inline">Skills by Figma</h3></summary>

Official skills from Figma's MCP server guide.

- **[figma/figma-code-connect-components](https://officialskills.sh/figma/skills/figma-code-connect-components)** - Connect Figma design components to code components using Code Connect
- **[figma/figma-create-design-system-rules](https://officialskills.sh/figma/skills/figma-create-design-system-rules)** - Generate project-specific design system rules for Figma-to-code workflows
- **[figma/figma-create-new-file](https://officialskills.sh/figma/skills/figma-create-new-file)** - Create a new blank Figma Design or FigJam file
- **[figma/figma-generate-design](https://officialskills.sh/figma/skills/figma-generate-design)** - Build or update screens in Figma from code or description using design system components
- **[figma/figma-generate-library](https://officialskills.sh/figma/skills/figma-generate-library)** - Build or update a design system library in Figma from a codebase
- **[figma/figma-implement-design](https://officialskills.sh/figma/skills/figma-implement-design)** - Translate Figma designs into production-ready application code with 1:1 fidelity
- **[figma/figma-use](https://officialskills.sh/figma/skills/figma-use)** - Run Figma Plugin API scripts for canvas writes, inspections, variables, and design-system work

</details>

<details>
<summary><h3 style="display:inline">Marketing Skills by Corey Haines</h3></summary>

Official marketing skills by [Corey Haines](https://github.com/coreyhaines31), covering the full SaaS marketing stack from SEO and copywriting to growth, CRO, and paid acquisition.

- **[coreyhaines31/ab-test-setup](https://github.com/coreyhaines31/marketingskills/tree/main/skills/ab-test-setup)** - Plan and implement A/B tests or experiments for any digital experience
- **[coreyhaines31/ad-creative](https://github.com/coreyhaines31/marketingskills/tree/main/skills/ad-creative)** - Generate and iterate ad creative including headlines, descriptions, and primary text
- **[coreyhaines31/ai-seo](https://github.com/coreyhaines31/marketingskills/tree/main/skills/ai-seo)** - Optimize content to appear in AI-generated answers and LLM search results
- **[coreyhaines31/analytics-tracking](https://github.com/coreyhaines31/marketingskills/tree/main/skills/analytics-tracking)** - Set up and audit analytics tracking and measurement pipelines
- **[coreyhaines31/churn-prevention](https://github.com/coreyhaines31/marketingskills/tree/main/skills/churn-prevention)** - Build cancellation flows, save offers, and recover failed payments
- **[coreyhaines31/cold-email](https://github.com/coreyhaines31/marketingskills/tree/main/skills/cold-email)** - Write B2B cold emails and follow-up sequences that convert
- **[coreyhaines31/competitor-alternatives](https://github.com/coreyhaines31/marketingskills/tree/main/skills/competitor-alternatives)** - Build competitor comparison and alternative landing pages for SEO
- **[coreyhaines31/content-strategy](https://github.com/coreyhaines31/marketingskills/tree/main/skills/content-strategy)** - Plan content strategy and decide what topics and formats to prioritize
- **[coreyhaines31/copy-editing](https://github.com/coreyhaines31/marketingskills/tree/main/skills/copy-editing)** - Edit and improve existing marketing copy for clarity and impact
- **[coreyhaines31/copywriting](https://github.com/coreyhaines31/marketingskills/tree/main/skills/copywriting)** - Write and rewrite marketing copy for landing pages, homepages, and ads
- **[coreyhaines31/email-sequence](https://github.com/coreyhaines31/marketingskills/tree/main/skills/email-sequence)** - Build email sequences, drip campaigns, and lifecycle email flows
- **[coreyhaines31/form-cro](https://github.com/coreyhaines31/marketingskills/tree/main/skills/form-cro)** - Optimize lead capture and contact forms to improve conversion
- **[coreyhaines31/free-tool-strategy](https://github.com/coreyhaines31/marketingskills/tree/main/skills/free-tool-strategy)** - Plan and build free tools for lead generation and SEO value
- **[coreyhaines31/launch-strategy](https://github.com/coreyhaines31/marketingskills/tree/main/skills/launch-strategy)** - Plan product launches, feature announcements, and go-to-market strategies
- **[coreyhaines31/marketing-ideas](https://github.com/coreyhaines31/marketingskills/tree/main/skills/marketing-ideas)** - Generate marketing strategies and campaign ideas for SaaS products
- **[coreyhaines31/marketing-psychology](https://github.com/coreyhaines31/marketingskills/tree/main/skills/marketing-psychology)** - Apply psychological principles and behavioral science to copy and design
- **[coreyhaines31/onboarding-cro](https://github.com/coreyhaines31/marketingskills/tree/main/skills/onboarding-cro)** - Optimize post-signup onboarding and user activation to improve time-to-value
- **[coreyhaines31/page-cro](https://github.com/coreyhaines31/marketingskills/tree/main/skills/page-cro)** - Improve conversion rates on any marketing page including homepages and landing pages
- **[coreyhaines31/paid-ads](https://github.com/coreyhaines31/marketingskills/tree/main/skills/paid-ads)** - Create and optimize paid campaigns on Google, Meta, LinkedIn, and more
- **[coreyhaines31/paywall-upgrade-cro](https://github.com/coreyhaines31/marketingskills/tree/main/skills/paywall-upgrade-cro)** - Design and optimize upgrade screens, paywalls, and upsell modals
- **[coreyhaines31/popup-cro](https://github.com/coreyhaines31/marketingskills/tree/main/skills/popup-cro)** - Create and optimize popups, modals, and slide-ins for conversions
- **[coreyhaines31/pricing-strategy](https://github.com/coreyhaines31/marketingskills/tree/main/skills/pricing-strategy)** - Define pricing, packaging, and monetization strategy for SaaS products
- **[coreyhaines31/product-marketing-context](https://github.com/coreyhaines31/marketingskills/tree/main/skills/product-marketing-context)** - Create and maintain a product marketing context document for consistent messaging
- **[coreyhaines31/programmatic-seo](https://github.com/coreyhaines31/marketingskills/tree/main/skills/programmatic-seo)** - Build SEO-driven page templates for large-scale content generation
- **[coreyhaines31/referral-program](https://github.com/coreyhaines31/marketingskills/tree/main/skills/referral-program)** - Design and optimize referral, affiliate, and word-of-mouth programs
- **[coreyhaines31/revops](https://github.com/coreyhaines31/marketingskills/tree/main/skills/revops)** - Streamline revenue operations, lead lifecycle, and marketing-to-sales handoff
- **[coreyhaines31/sales-enablement](https://github.com/coreyhaines31/marketingskills/tree/main/skills/sales-enablement)** - Create pitch decks, one-pagers, objection handling docs, and demo scripts
- **[coreyhaines31/schema-markup](https://github.com/coreyhaines31/marketingskills/tree/main/skills/schema-markup)** - Add and optimize schema markup and structured data for better SEO
- **[coreyhaines31/seo-audit](https://github.com/coreyhaines31/marketingskills/tree/main/skills/seo-audit)** - Audit and diagnose technical and on-page SEO issues on a site
- **[coreyhaines31/signup-flow-cro](https://github.com/coreyhaines31/marketingskills/tree/main/skills/signup-flow-cro)** - Optimize signup, registration, and trial activation flows for higher conversion
- **[coreyhaines31/site-architecture](https://github.com/coreyhaines31/marketingskills/tree/main/skills/site-architecture)** - Plan and restructure page hierarchy, navigation, and URL structure
- **[coreyhaines31/social-content](https://github.com/coreyhaines31/marketingskills/tree/main/skills/social-content)** - Create and schedule social media content for LinkedIn, Twitter/X, and Instagram

</details>

<details>
<summary><h3 style="display:inline">Skills by Binance</h3></summary>

Official Web3 and trading skills from the Binance team. Includes crypto market data, on-chain analytics, token security auditing, and spot trading via the Binance API.

- **[binance/crypto-market-rank](https://officialskills.sh/binance/skills/crypto-market-rank)** - Query crypto market rankings including trending tokens, smart money inflows, meme rankings, and top trader PnL leaderboards
- **[binance/meme-rush](https://officialskills.sh/binance/skills/meme-rush)** - Track real-time meme token lists from launchpads (Pump.fun, Four.meme) and AI-powered hot market topics ranked by net inflow
- **[binance/query-address-info](https://officialskills.sh/binance/skills/query-address-info)** - Retrieve all token holdings and portfolio positions for any wallet address on BSC, Base, or Solana
- **[binance/query-token-audit](https://officialskills.sh/binance/skills/query-token-audit)** - Audit token security to detect scams, honeypots, and malicious contracts across BSC, Base, Solana, and Ethereum
- **[binance/query-token-info](https://officialskills.sh/binance/skills/query-token-info)** - Search tokens and fetch metadata, real-time market data, and K-Line candlestick charts by keyword or contract address
- **[binance/trading-signal](https://officialskills.sh/binance/skills/trading-signal)** - Monitor on-chain Smart Money buy/sell signals with price, max gain, and exit rate data on Solana and BSC
- **[binance/spot](https://officialskills.sh/binance/skills/spot)** - Place and manage spot trading orders on Binance via API key authentication, supporting mainnet and testnet

</details>

<details>
<summary><h3 style="display:inline">Product Manager Skills by Dean Peters</h3></summary>

46 battle-tested product management skills by [Dean Peters](https://github.com/deanpeters). Frame problems, hunt opportunities, scaffold validation experiments, and kill bad bets fast — with frameworks from Teresa Torres, Geoffrey Moore, Amazon, MITRE, and more.

**Component Skills**

- **[deanpeters/acquisition-channel-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/acquisition-channel-advisor)** - Evaluate channels using unit economics and recommend scale/test/kill decisions
- **[deanpeters/ai-shaped-readiness-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/ai-shaped-readiness-advisor)** - Assess automation vs. redesign opportunities across five competencies
- **[deanpeters/altitude-horizon-framework](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/altitude-horizon-framework)** - Navigate the PM→Director mindset shift covering scope, time horizons, and failure modes
- **[deanpeters/business-health-diagnostic](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/business-health-diagnostic)** - Diagnose SaaS health, identify red flags, and prioritize recovery actions
- **[deanpeters/company-research](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/company-research)** - Deep-dive competitor or company analysis
- **[deanpeters/customer-journey-map](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/customer-journey-map)** - Map customer experience across touchpoints using the NNGroup framework
- **[deanpeters/eol-message](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/eol-message)** - Communicate product or feature deprecation gracefully
- **[deanpeters/epic-hypothesis](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/epic-hypothesis)** - Turn initiatives into testable hypotheses with measurable success metrics
- **[deanpeters/finance-metrics-quickref](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/finance-metrics-quickref)** - Reference guide for 32+ SaaS finance metrics with formulas and benchmarks
- **[deanpeters/jobs-to-be-done](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/jobs-to-be-done)** - Understand customer objectives using the JTBD framework
- **[deanpeters/pestel-analysis](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/pestel-analysis)** - Analyze external factors across Political, Economic, Social, Tech, Environmental, and Legal dimensions
- **[deanpeters/pol-probe](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/pol-probe)** - Define lightweight validation experiments to test hypotheses
- **[deanpeters/positioning-statement](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/positioning-statement)** - Define target audience, problem solved, and differentiation using Geoffrey Moore's framework
- **[deanpeters/press-release](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/press-release)** - Clarify product vision with a future press release using Amazon's Working Backwards method
- **[deanpeters/problem-statement](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/problem-statement)** - Frame customer problems with evidence before jumping to solutions
- **[deanpeters/proto-persona](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/proto-persona)** - Create hypothesis-driven personas before conducting full research
- **[deanpeters/recommendation-canvas](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/recommendation-canvas)** - Document AI-powered product recommendations
- **[deanpeters/saas-economics-efficiency-metrics](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/saas-economics-efficiency-metrics)** - Calculate unit economics and capital efficiency including CAC, LTV, payback, and Rule of 40
- **[deanpeters/saas-revenue-growth-metrics](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/saas-revenue-growth-metrics)** - Track revenue, retention, and growth metrics including MRR/ARR, churn, NRR, and expansion
- **[deanpeters/storyboard](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/storyboard)** - Visualize user journeys with 6-frame narrative storyboards
- **[deanpeters/user-story](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/user-story)** - Write user stories with acceptance criteria using Mike Cohn and Gherkin formats
- **[deanpeters/user-story-mapping](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/user-story-mapping)** - Organize stories by user workflow using Jeff Patton's story mapping approach
- **[deanpeters/user-story-splitting](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/user-story-splitting)** - Break down large stories using 8 proven splitting patterns

**Interactive Skills**

- **[deanpeters/context-engineering-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/context-engineering-advisor)** - Diagnose context stuffing vs. engineering and guide memory and retrieval design
- **[deanpeters/customer-journey-mapping-workshop](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/customer-journey-mapping-workshop)** - Guide journey mapping sessions with pain point identification
- **[deanpeters/director-readiness-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/director-readiness-advisor)** - Coach the PM→Director transition across four key situations
- **[deanpeters/discovery-interview-prep](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/discovery-interview-prep)** - Plan customer interviews using Mom Test style based on research goals
- **[deanpeters/epic-breakdown-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/epic-breakdown-advisor)** - Split epics into stories using Richard Lawrence's 9 splitting patterns
- **[deanpeters/feature-investment-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/feature-investment-advisor)** - Evaluate features using ROI and strategic value scoring
- **[deanpeters/finance-based-pricing-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/finance-based-pricing-advisor)** - Evaluate pricing changes using financial impact analysis
- **[deanpeters/lean-ux-canvas](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/lean-ux-canvas)** - Set up hypothesis-driven planning using Jeff Gothelf's Lean UX Canvas v2
- **[deanpeters/opportunity-solution-tree](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/opportunity-solution-tree)** - Generate opportunities and solutions and recommend proof-of-concept tests
- **[deanpeters/pol-probe-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/pol-probe-advisor)** - Recommend prototype type: Feasibility, Task-Focused, Narrative, Synthetic, or Vibe
- **[deanpeters/positioning-workshop](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/positioning-workshop)** - Guide positioning definition with adaptive discovery questions
- **[deanpeters/prioritization-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/prioritization-advisor)** - Recommend the right prioritization framework (RICE, ICE, Kano, etc.) for your situation
- **[deanpeters/problem-framing-canvas](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/problem-framing-canvas)** - Lead through MITRE Problem Framing: Look Inward, Outward, and Reframe
- **[deanpeters/tam-sam-som-calculator](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/tam-sam-som-calculator)** - Project market size with real-world data and citations
- **[deanpeters/user-story-mapping-workshop](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/user-story-mapping-workshop)** - Walk through creating story maps with backbone and release slices
- **[deanpeters/vp-cpo-readiness-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/vp-cpo-readiness-advisor)** - Coach the Director→VP/CPO transition including a CEO interview framework
- **[deanpeters/workshop-facilitation](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/workshop-facilitation)** - Add step-by-step facilitation with numbered recommendations to any workshop

**Workflow Skills**

- **[deanpeters/discovery-process](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/discovery-process)** - Full discovery cycle: frame problem → research → synthesize → validate (3-4 weeks)
- **[deanpeters/executive-onboarding-playbook](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/executive-onboarding-playbook)** - 30-60-90 day diagnostic playbook for VP/CPO onboarding transitions
- **[deanpeters/prd-development](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/prd-development)** - Structured PRD process: problem → personas → solution → metrics → stories (2-4 days)
- **[deanpeters/product-strategy-session](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/product-strategy-session)** - Full strategy session: positioning → framing → exploration → roadmap (2-4 weeks)
- **[deanpeters/roadmap-planning](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/roadmap-planning)** - Strategic roadmap process: inputs → epics → prioritize → sequence → communicate (1-2 weeks)
- **[deanpeters/skill-authoring-workflow](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/skill-authoring-workflow)** - Meta workflow for authoring skills: choose path → validate → update docs → package

</details>


<details>
<summary><h3 style="display:inline">Product Management Skills by Pawel Huryn</h3></summary>

65 product management skills by [Paweł Huryn](https://github.com/phuryn), creator of The Product Compass newsletter. Covers the full PM lifecycle — from discovery and strategy to execution, analytics, and go-to-market — with frameworks from Teresa Torres, Geoffrey Moore, and more.

**Data Analytics**

- **[phuryn/ab-test-analysis](https://github.com/phuryn/pm-skills/tree/main/pm-data-analytics/skills/ab-test-analysis)** - Analyze A/B test results with statistical significance and recommendations
- **[phuryn/cohort-analysis](https://github.com/phuryn/pm-skills/tree/main/pm-data-analytics/skills/cohort-analysis)** - Cohort retention curves, feature adoption, and segment insights
- **[phuryn/sql-queries](https://github.com/phuryn/pm-skills/tree/main/pm-data-analytics/skills/sql-queries)** - Generate SQL queries from natural language across major dialects

**Execution**

- **[phuryn/brainstorm-okrs](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/brainstorm-okrs)** - Brainstorm team OKRs aligned with company objectives
- **[phuryn/create-prd](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/create-prd)** - Create a PRD with 8-section template covering problem to release
- **[phuryn/dummy-dataset](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/dummy-dataset)** - Generate realistic dummy datasets in CSV, JSON, or SQL
- **[phuryn/job-stories](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/job-stories)** - Create job stories with acceptance criteria in JTBD format
- **[phuryn/outcome-roadmap](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/outcome-roadmap)** - Transform output roadmaps into outcome-focused strategic plans
- **[phuryn/pre-mortem](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/pre-mortem)** - Run pre-mortem risk analysis on PRDs and launch plans
- **[phuryn/prioritization-frameworks](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/prioritization-frameworks)** - Reference guide to 9 prioritization frameworks with templates
- **[phuryn/release-notes](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/release-notes)** - Generate user-facing release notes from tickets or changelogs
- **[phuryn/retro](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/retro)** - Facilitate structured sprint retrospectives with action items
- **[phuryn/sprint-plan](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/sprint-plan)** - Plan sprints with capacity, story selection, and risk mapping
- **[phuryn/stakeholder-map](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/stakeholder-map)** - Build stakeholder maps with power/interest grid and comms plan
- **[phuryn/summarize-meeting](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/summarize-meeting)** - Summarize meeting transcripts into structured notes and actions
- **[phuryn/test-scenarios](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/test-scenarios)** - Create comprehensive test scenarios from user stories
- **[phuryn/user-stories](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/user-stories)** - Create INVEST-compliant user stories with 3 C's structure
- **[phuryn/wwas](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/wwas)** - Create backlog items in Why-What-Acceptance format

**Go-to-Market**

- **[phuryn/beachhead-segment](https://github.com/phuryn/pm-skills/tree/main/pm-go-to-market/skills/beachhead-segment)** - Identify the first beachhead market segment for product launch
- **[phuryn/competitive-battlecard](https://github.com/phuryn/pm-skills/tree/main/pm-go-to-market/skills/competitive-battlecard)** - Create sales-ready battlecards against specific competitors
- **[phuryn/growth-loops](https://github.com/phuryn/pm-skills/tree/main/pm-go-to-market/skills/growth-loops)** - Identify growth loops across 5 flywheel types for traction
- **[phuryn/gtm-motions](https://github.com/phuryn/pm-skills/tree/main/pm-go-to-market/skills/gtm-motions)** - Identify best GTM motions across 7 types including PLG and ABM
- **[phuryn/gtm-strategy](https://github.com/phuryn/pm-skills/tree/main/pm-go-to-market/skills/gtm-strategy)** - Create GTM strategy with channels, messaging, and launch timeline
- **[phuryn/ideal-customer-profile](https://github.com/phuryn/pm-skills/tree/main/pm-go-to-market/skills/ideal-customer-profile)** - Identify ICP with demographics, behaviors, and JTBD

**Market Research**

- **[phuryn/competitor-analysis](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/competitor-analysis)** - Analyze competitors with strengths, weaknesses, and differentiation
- **[phuryn/customer-journey-map](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/customer-journey-map)** - Map customer journeys with touchpoints, emotions, and opportunities
- **[phuryn/market-segments](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/market-segments)** - Identify 3-5 customer segments with JTBD and product fit
- **[phuryn/market-sizing](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/market-sizing)** - Estimate TAM, SAM, SOM with top-down and bottom-up approaches
- **[phuryn/sentiment-analysis](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/sentiment-analysis)** - Analyze user feedback with sentiment scores and JTBD insights
- **[phuryn/user-personas](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/user-personas)** - Create 3 user personas with JTBD, pains, and gains
- **[phuryn/user-segmentation](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/user-segmentation)** - Segment users by behavior, JTBD, and needs from feedback data

**Marketing & Growth**

- **[phuryn/marketing-ideas](https://github.com/phuryn/pm-skills/tree/main/pm-marketing-growth/skills/marketing-ideas)** - Generate 5 creative, cost-effective marketing ideas with rationale
- **[phuryn/north-star-metric](https://github.com/phuryn/pm-skills/tree/main/pm-marketing-growth/skills/north-star-metric)** - Define North Star Metric and input metrics constellation
- **[phuryn/positioning-ideas](https://github.com/phuryn/pm-skills/tree/main/pm-marketing-growth/skills/positioning-ideas)** - Brainstorm positioning ideas differentiated from competitors
- **[phuryn/product-name](https://github.com/phuryn/pm-skills/tree/main/pm-marketing-growth/skills/product-name)** - Brainstorm 5 memorable product names aligned to brand values
- **[phuryn/value-prop-statements](https://github.com/phuryn/pm-skills/tree/main/pm-marketing-growth/skills/value-prop-statements)** - Generate value prop statements for marketing, sales, and onboarding

**Product Discovery**

- **[phuryn/analyze-feature-requests](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/analyze-feature-requests)** - Prioritize feature requests by theme, impact, effort, and risk
- **[phuryn/brainstorm-experiments-existing](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/brainstorm-experiments-existing)** - Design experiments to test assumptions for existing products
- **[phuryn/brainstorm-experiments-new](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/brainstorm-experiments-new)** - Design lean pretotypes for new product validation
- **[phuryn/brainstorm-ideas-existing](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/brainstorm-ideas-existing)** - Brainstorm product ideas from PM, Designer, Engineer perspectives
- **[phuryn/brainstorm-ideas-new](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/brainstorm-ideas-new)** - Brainstorm feature ideas for new products in early discovery
- **[phuryn/identify-assumptions-existing](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/identify-assumptions-existing)** - Identify risky assumptions across Value, Usability, Viability, Feasibility
- **[phuryn/identify-assumptions-new](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/identify-assumptions-new)** - Identify risky assumptions for new products across 8 risk categories
- **[phuryn/interview-script](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/interview-script)** - Create structured customer interview scripts with JTBD probing
- **[phuryn/metrics-dashboard](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/metrics-dashboard)** - Define product metrics dashboard with sources and alert thresholds
- **[phuryn/opportunity-solution-tree](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/opportunity-solution-tree)** - Build Opportunity Solution Trees based on Teresa Torres' method
- **[phuryn/prioritize-assumptions](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/prioritize-assumptions)** - Prioritize assumptions with Impact × Risk matrix and experiments
- **[phuryn/prioritize-features](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/prioritize-features)** - Prioritize backlog by impact, effort, risk, and strategic alignment
- **[phuryn/summarize-interview](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/summarize-interview)** - Summarize interview transcripts with JTBD and action items

**Product Strategy**

- **[phuryn/ansoff-matrix](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/ansoff-matrix)** - Ansoff Matrix analysis across 4 growth strategy quadrants
- **[phuryn/business-model](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/business-model)** - Generate Business Model Canvas with all 9 building blocks
- **[phuryn/lean-canvas](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/lean-canvas)** - Generate Lean Canvas with problem, solution, UVP, and metrics
- **[phuryn/monetization-strategy](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/monetization-strategy)** - Brainstorm 3-5 monetization strategies with validation experiments
- **[phuryn/pestle-analysis](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/pestle-analysis)** - PESTLE analysis across Political, Economic, Social, Tech, Legal, Environmental
- **[phuryn/porters-five-forces](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/porters-five-forces)** - Porter's Five Forces competitive analysis with strategic insights
- **[phuryn/pricing-strategy](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/pricing-strategy)** - Design pricing strategies with competitive analysis and WTP estimation
- **[phuryn/product-strategy](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/product-strategy)** - Create product strategy using 9-section Product Strategy Canvas
- **[phuryn/product-vision](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/product-vision)** - Brainstorm inspiring, achievable product vision statements
- **[phuryn/startup-canvas](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/startup-canvas)** - Generate Startup Canvas combining Product Strategy and Business Model
- **[phuryn/swot-analysis](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/swot-analysis)** - SWOT analysis with actionable recommendations per quadrant
- **[phuryn/value-proposition](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/value-proposition)** - Design value propositions using 6-part JTBD template

**Toolkit**

- **[phuryn/draft-nda](https://github.com/phuryn/pm-skills/tree/main/pm-toolkit/skills/draft-nda)** - Draft NDAs covering information types, jurisdiction, and clauses
- **[phuryn/grammar-check](https://github.com/phuryn/pm-skills/tree/main/pm-toolkit/skills/grammar-check)** - Identify grammar and flow errors with targeted fix suggestions
- **[phuryn/privacy-policy](https://github.com/phuryn/pm-skills/tree/main/pm-toolkit/skills/privacy-policy)** - Draft privacy policies with GDPR compliance considerations
- **[phuryn/review-resume](https://github.com/phuryn/pm-skills/tree/main/pm-toolkit/skills/review-resume)** - PM resume review against 10 best practices including XYZ+S formula

</details>

<details>
<summary><h3 style="display:inline">Skills by MiniMax Team</h3></summary>

10 development and document generation skills from the MiniMax AI team. Covers frontend, fullstack, mobile, shader development, and document creation (PDF, DOCX, XLSX, PPTX) with MiniMax API integration.

- **[MiniMax-AI/frontend-dev](https://officialskills.sh/MiniMax-AI/skills/frontend-dev)** - Full-stack frontend with cinematic animations, AI-generated media via MiniMax API, and generative art
- **[MiniMax-AI/fullstack-dev](https://officialskills.sh/MiniMax-AI/skills/fullstack-dev)** - Backend architecture with REST API design, auth flows, real-time features, and database integration
- **[MiniMax-AI/android-native-dev](https://officialskills.sh/MiniMax-AI/skills/android-native-dev)** - Android native development with Kotlin/Jetpack Compose, Material Design 3, and accessibility
- **[MiniMax-AI/ios-application-dev](https://officialskills.sh/MiniMax-AI/skills/ios-application-dev)** - iOS development with UIKit, SnapKit, and SwiftUI covering navigation, Dark Mode, and HIG compliance
- **[MiniMax-AI/shader-dev](https://officialskills.sh/MiniMax-AI/skills/shader-dev)** - GLSL shader techniques for ray marching, fluid simulation, particle systems, and procedural generation
- **[MiniMax-AI/gif-sticker-maker](https://officialskills.sh/MiniMax-AI/skills/gif-sticker-maker)** - Convert photos into animated GIF stickers in Funko Pop / Pop Mart style via MiniMax API
- **[MiniMax-AI/minimax-pdf](https://officialskills.sh/MiniMax-AI/skills/minimax-pdf)** - Generate, fill, and reformat PDFs with a token-based design system and 15 cover styles
- **[MiniMax-AI/pptx-generator](https://officialskills.sh/MiniMax-AI/skills/pptx-generator)** - Create and edit PowerPoint presentations from scratch with PptxGenJS
- **[MiniMax-AI/minimax-xlsx](https://officialskills.sh/MiniMax-AI/skills/minimax-xlsx)** - Create, read, analyze, and validate Excel/spreadsheet files with zero format loss
- **[MiniMax-AI/minimax-docx](https://officialskills.sh/MiniMax-AI/skills/minimax-docx)** - Professional DOCX document creation and editing using OpenXML SDK

</details>

<details>
<summary><h3 style="display:inline">Skills by DuckDB</h3></summary>

Official DuckDB skills for data querying, file reading, and documentation search directly from Claude Code.

- **[duckdb/attach-db](https://officialskills.sh/duckdb/skills/attach-db)** - Attach a DuckDB database file for interactive querying with automatic schema exploration
- **[duckdb/query](https://officialskills.sh/duckdb/skills/query)** - Run SQL queries against attached databases or ad-hoc against files using Friendly SQL dialect
- **[duckdb/read-file](https://officialskills.sh/duckdb/skills/read-file)** - Read any data file (CSV, JSON, Parquet, Avro, Excel, spatial) locally or from remote storage
- **[duckdb/duckdb-docs](https://officialskills.sh/duckdb/skills/duckdb-docs)** - Search DuckDB and DuckLake documentation using full-text search over HTTPS
- **[duckdb/read-memories](https://officialskills.sh/duckdb/skills/read-memories)** - Search past Claude Code session logs to recover context from previous conversations
- **[duckdb/install-duckdb](https://officialskills.sh/duckdb/skills/install-duckdb)** - Install or update DuckDB CLI and extensions with version management

</details>

<details>
<summary><h3 style="display:inline">Skills by GSAP (GreenSock)</h3></summary>

Official GSAP animation skills covering the full GreenSock ecosystem — core API, timelines, ScrollTrigger, plugins, utilities, React integration, performance optimization, and framework support.

- **[greensock/gsap-core](https://officialskills.sh/greensock/skills/gsap-core)** - Core API with gsap.to(), from(), fromTo(), easing, duration, stagger, and defaults
- **[greensock/gsap-timeline](https://officialskills.sh/greensock/skills/gsap-timeline)** - Timelines with sequencing, position parameter, labels, nesting, and playback control
- **[greensock/gsap-scrolltrigger](https://officialskills.sh/greensock/skills/gsap-scrolltrigger)** - ScrollTrigger for scroll-linked animations, pinning, scrub, and refresh handling
- **[greensock/gsap-plugins](https://officialskills.sh/greensock/skills/gsap-plugins)** - Plugins including ScrollToPlugin, Flip, Draggable, SplitText, SVG, and physics
- **[greensock/gsap-utils](https://officialskills.sh/greensock/skills/gsap-utils)** - Utility functions like clamp, mapRange, interpolate, snap, selector, and wrap
- **[greensock/gsap-react](https://officialskills.sh/greensock/skills/gsap-react)** - React integration with useGSAP hook, refs, gsap.context(), cleanup, and SSR
- **[greensock/gsap-performance](https://officialskills.sh/greensock/skills/gsap-performance)** - Performance tips for transforms, will-change, batching, and ScrollTrigger optimization
- **[greensock/gsap-frameworks](https://officialskills.sh/greensock/skills/gsap-frameworks)** - Vue, Svelte, and other frameworks with lifecycle, scoping, and cleanup patterns

</details>

<details>
<summary><h3 style="display:inline">Skills by Garry Tan (gstack)</h3></summary>

28 skills by [Garry Tan](https://github.com/garrytan) (Y Combinator CEO) that transform Claude Code into a virtual engineering team — structured workflows from ideation to production deployment. Ships 600K+ lines of production code in 60 days.

- **[garrytan/office-hours](https://officialskills.sh/garrytan/skills/office-hours)** - YC Office Hours: six forcing questions that reframe your product before you write code
- **[garrytan/plan-ceo-review](https://officialskills.sh/garrytan/skills/plan-ceo-review)** - CEO/Founder plan review with four modes: Expansion, Selective Expansion, Hold Scope, Reduction
- **[garrytan/plan-eng-review](https://officialskills.sh/garrytan/skills/plan-eng-review)** - Eng Manager review: lock in architecture, data flow, diagrams, edge cases, and tests
- **[garrytan/plan-design-review](https://officialskills.sh/garrytan/skills/plan-design-review)** - Senior Designer review: rates each design dimension 0-10, explains what a 10 looks like, AI Slop detection
- **[garrytan/design-consultation](https://officialskills.sh/garrytan/skills/design-consultation)** - Build a complete design system from scratch with creative risks and realistic product mockups
- **[garrytan/design-review](https://officialskills.sh/garrytan/skills/design-review)** - Designer Who Codes: visual audit then fixes with atomic commits and before/after screenshots
- **[garrytan/review](https://officialskills.sh/garrytan/skills/review)** - Staff Engineer code review: finds bugs that pass CI but blow up in production
- **[garrytan/investigate](https://officialskills.sh/garrytan/skills/investigate)** - Systematic root-cause debugging: no fixes without investigation, traces data flow, tests hypotheses
- **[garrytan/qa](https://officialskills.sh/garrytan/skills/qa)** - QA Lead: test your app, find bugs, fix them with atomic commits, auto-generate regression tests
- **[garrytan/qa-only](https://officialskills.sh/garrytan/skills/qa-only)** - QA Reporter: same methodology as /qa but report only, no code changes
- **[garrytan/cso](https://officialskills.sh/garrytan/skills/cso)** - Chief Security Officer: OWASP Top 10 + STRIDE threat model with zero false-positive exclusions
- **[garrytan/ship](https://officialskills.sh/garrytan/skills/ship)** - Release Engineer: sync main, run tests, audit coverage, push, open PR
- **[garrytan/land-and-deploy](https://officialskills.sh/garrytan/skills/land-and-deploy)** - Merge the PR, wait for CI and deploy, verify production health
- **[garrytan/canary](https://officialskills.sh/garrytan/skills/canary)** - SRE post-deploy monitoring: watches for console errors, performance regressions, and page failures
- **[garrytan/benchmark](https://officialskills.sh/garrytan/skills/benchmark)** - Performance Engineer: baseline page load times, Core Web Vitals, and resource sizes
- **[garrytan/document-release](https://officialskills.sh/garrytan/skills/document-release)** - Technical Writer: update all project docs to match what you just shipped
- **[garrytan/retro](https://officialskills.sh/garrytan/skills/retro)** - Eng Manager weekly retro with per-person breakdowns and shipping streaks
- **[garrytan/browse](https://officialskills.sh/garrytan/skills/browse)** - Real Chromium browser for QA: real clicks, real screenshots, ~100ms per command
- **[garrytan/setup-browser-cookies](https://officialskills.sh/garrytan/skills/setup-browser-cookies)** - Import cookies from your real browser into the headless session
- **[garrytan/autoplan](https://officialskills.sh/garrytan/skills/autoplan)** - One command, fully reviewed plan: runs CEO → design → eng review automatically
- **[garrytan/codex](https://officialskills.sh/garrytan/skills/codex)** - Second Opinion via OpenAI Codex CLI: review, adversarial challenge, and open consultation
- **[garrytan/careful](https://officialskills.sh/garrytan/skills/careful)** - Safety Guardrails: warns before destructive commands (rm -rf, DROP TABLE, force-push)
- **[garrytan/freeze](https://officialskills.sh/garrytan/skills/freeze)** - Edit Lock: restrict file edits to one directory while debugging
- **[garrytan/guard](https://officialskills.sh/garrytan/skills/guard)** - Full Safety: /careful + /freeze in one command for maximum safety
- **[garrytan/unfreeze](https://officialskills.sh/garrytan/skills/unfreeze)** - Unlock: remove the /freeze boundary
- **[garrytan/setup-deploy](https://officialskills.sh/garrytan/skills/setup-deploy)** - Deploy Configurator: one-time setup for /land-and-deploy
- **[garrytan/gstack-upgrade](https://officialskills.sh/garrytan/skills/gstack-upgrade)** - Self-Updater: upgrade gstack to latest version

</details>

<details>
<summary><h3 style="display:inline">Skills by Notion</h3></summary>

Official skills from Notion's repositories — workspace-aware skills for capturing knowledge, preparing meetings, researching, and turning specs into tasks.

**From [notion-cookbook](https://github.com/makenotion/notion-cookbook/tree/main/skills/claude):**

- **[makenotion/knowledge-capture](https://officialskills.sh/makenotion/skills/knowledge-capture)** - Transform conversations into structured Notion documentation pages with proper organization and linking
- **[makenotion/meeting-intelligence](https://officialskills.sh/makenotion/skills/meeting-intelligence)** - Prepare meeting materials by gathering Notion context and creating pre-reads and agendas
- **[makenotion/research-documentation](https://officialskills.sh/makenotion/skills/research-documentation)** - Search Notion workspace, synthesize findings, and create comprehensive research reports
- **[makenotion/spec-to-implementation](https://officialskills.sh/makenotion/skills/spec-to-implementation)** - Turn product/tech specs into concrete Notion tasks with acceptance criteria and progress tracking

**From [claude-code-notion-plugin](https://github.com/makenotion/claude-code-notion-plugin/tree/main/skills/notion):**

- **[makenotion/knowledge-capture](https://officialskills.sh/makenotion/skills/knowledge-capture)** - Transform conversations into structured Notion documentation pages with proper organization and linking
- **[makenotion/meeting-intelligence](https://officialskills.sh/makenotion/skills/meeting-intelligence)** - Prepare meeting materials by gathering Notion context and creating pre-reads and agendas
- **[makenotion/research-documentation](https://officialskills.sh/makenotion/skills/research-documentation)** - Search Notion workspace, synthesize findings, and create comprehensive research reports
- **[makenotion/spec-to-implementation](https://officialskills.sh/makenotion/skills/spec-to-implementation)** - Turn product/tech specs into concrete Notion tasks with acceptance criteria and progress tracking

</details>

<details>
<summary><h3 style="display:inline">Skills by Resend</h3></summary>

Official Resend skills to send and receive emails, build email templates and power your agent with email expertise.

- **[resend/resend](https://github.com/resend/resend-skills/tree/main/skills/resend)** - Send and manage emails via the Resend API
- **[resend/react-email](https://github.com/resend/resend-skills/tree/main/skills/react-email)** - Build emails with React Email components
- **[resend/email-best-practices](https://github.com/resend/resend-skills/tree/main/skills/email-best-practices)** - Email deliverability and design best practices
- **[resend/agent-email-inbox](https://github.com/resend/resend-skills/tree/main/skills/agent-email-inbox)** - AI agent email inbox management
- **[resend/resend-cli](https://github.com/resend/resend-skills/tree/main/skills/resend-cli)** - Resend CLI commands and workflows

</details>

### Community Skills

<details>
<summary><h3 style="display:inline">Vector Databases</h3></summary>

- **[qdrant/skills](https://github.com/qdrant/skills)** - Agent skills for Qdrant vector search, covering scaling, performance optimization, search quality, monitoring, deployment, model migration, version upgrades, and SDK usage across Python, TypeScript, Rust, Go, .NET, and Java

</details>

<details>
<summary><h3 style="display:inline">Marketing</h3></summary>

- **[BrianRWagner/ai-marketing-skills](https://github.com/BrianRWagner/ai-marketing-skills)** - 17 marketing frameworks for cold outreach, homepage audit, social cards, and more
- **[AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo)** - Universal SEO skill for comprehensive website analysis and optimization
- **[wshuyi/x-article-publisher-skill](https://github.com/wshuyi/x-article-publisher-skill)** - Publish articles to X/Twitter
- **[CosmoBlk/email-marketing-bible](https://github.com/CosmoBlk/email-marketing-bible)** - 55K-word email marketing guide as an AI skill
- **[smixs/creative-director-skill](https://github.com/smixs/creative-director-skill)** - AI creative director with recursive self-assessment: 20+ methodologies (SIT, TRIZ, Bisociation, SCAMPER, Synectics), 3-axis evaluation calibrated against Cannes/D&AD/HumanKind, 5-phase process from brief to presentation
- **[Xquik-dev/tweetclaw](https://github.com/Xquik-dev/tweetclaw)** - 40+ X/Twitter actions: post, extract, monitor, compose
- **[SHADOWPR0/beautiful_prose](https://github.com/SHADOWPR0/beautiful_prose)** - Hard-edged writing style contract for timeless, forceful English prose without AI tics
- **[blader/humanizer](https://github.com/blader/humanizer)** - Remove signs of AI-generated writing from text, making it sound more natural and human
- **[Eronred/aso-skills](https://github.com/Eronred/aso-skills)** - 30+ App Store Optimization skills for keyword research, metadata optimization, competitor analysis, creative optimization, and mobile growth strategies via Appeeky API

</details>

<details>
<summary><h3 style="display:inline">Productivity and Collaboration</h3></summary>

- **[PSPDFKit-labs/nutrient-agent-skill](https://github.com/PSPDFKit-labs/nutrient-agent-skill)** - Document processing with Nutrient DWS API: convert (PDF/DOCX/XLSX/PPTX/HTML/images), extract text/tables, OCR (20+ languages), redact PII (pattern + AI), watermark, digital signatures, form filling. [MCP server](https://www.npmjs.com/package/@nutrient-sdk/dws-mcp-server) also available.
- **[notiondevs/Notion Skills for Claude](https://www.notion.so/notiondevs/Notion-Skills-for-Claude-28da4445d27180c7af1df7d8615723d0)** - Skills for working with Notion
- **[op7418/NanoBanana-PPT-Skills](https://github.com/op7418/NanoBanana-PPT-Skills)** - AI-powered PPT generation with document analysis and styled images
- **[zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides)** - Generate animation-rich HTML presentations with visual style previews
- **[gokapso/integrate-whatsapp](https://github.com/gokapso/agent-skills/tree/master/skills/integrate-whatsapp)** - Connect WhatsApp, set up webhooks, and send messages
- **[gokapso/automate-whatsapp](https://github.com/gokapso/agent-skills/tree/master/skills/automate-whatsapp)** - Build WhatsApp automations with workflows and agents
- **[gokapso/observe-whatsapp](https://github.com/gokapso/agent-skills/tree/master/skills/observe-whatsapp)** - Debug WhatsApp delivery issues and run health checks
- **[PleasePrompto/notebooklm-skill](https://github.com/PleasePrompto/notebooklm-skill)** - Interact with NotebookLM for document-based conversations
- **[obra/superpowers-lab](https://github.com/obra/superpowers-lab)** - Lab environment for Claude superpowers
- **[obra/brainstorming](https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md)** - Generate and explore ideas
- **[obra/writing-plans](https://github.com/obra/superpowers/blob/main/skills/writing-plans/SKILL.md)** - Create strategic documentation
- **[obra/executing-plans](https://github.com/obra/superpowers/blob/main/skills/executing-plans/SKILL.md)** - Implement and run strategic plans
- **[obra/dispatching-parallel-agents](https://github.com/obra/superpowers/blob/main/skills/dispatching-parallel-agents/SKILL.md)** - Coordinate multiple simultaneous agents
- **[obra/sharing-skills](https://github.com/obra/superpowers/blob/main/skills/sharing-skills/SKILL.md)** - Distribute and communicate capabilities
- **[obra/using-superpowers](https://github.com/obra/superpowers/blob/main/skills/using-superpowers/SKILL.md)** - Leverage core platform capabilities
- **[op7418/Youtube-clipper-skill](https://github.com/op7418/Youtube-clipper-skill)** - YouTube clip generation and editing with automated workflows
- **[ognjengt/founder-skills](https://github.com/ognjengt/founder-skills)** - Claude skills for founders with packaged startup workflows
- **[EveryInc/charlie-cfo-skill](https://github.com/EveryInc/charlie-cfo-skill)** - Bootstrapped CFO financial management inspired by Charlie Munger
- **[wrsmith108/linear-claude-skill](https://github.com/wrsmith108/linear-claude-skill)** - Manage Linear issues, projects, and teams
- **[Shpigford/readme](https://github.com/Shpigford/skills/tree/main/readme)** - Generate comprehensive project documentation
- **[hanfang/claude-memory-skill](https://github.com/hanfang/claude-memory-skill)** - Minimal, low-friction hierarchical memory system with background agents and filesystem-based persistence
- **[kreuzberg-dev/kreuzberg](https://github.com/kreuzberg-dev/kreuzberg/tree/main/skills/kreuzberg)** - Extract text, tables, and metadata from 62+ document formats
- **[Paramchoudhary/ResumeSkills](https://github.com/Paramchoudhary/ResumeSkills)** - 20 specialized skills for resume optimization, ATS analysis, interview prep, and career transitions
- **[RoundTable02/tutor-skills](https://github.com/RoundTable02/tutor-skills)** - Transform docs or codebases into Obsidian StudyVaults with interactive quizzes
- **[NeoLabHQ/write-concisely](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/docs/skills/write-concisely)** - Applies the famous *The Elements of Style* book principles to make documentation and writing clearer and more professional by eliminating wordiness and improving structure.
- **[ReScienceLab/opc-skills](https://github.com/ReScienceLab/opc-skills)** - Agent skills for solopreneurs with SEO, geo, and LLM tools
- **[SeanZoR/claude-speed-reader](https://github.com/SeanZoR/claude-speed-reader)** - Speed read Claude's responses at 600+ WPM using RSVP with Spritz-style ORP highlighting
- **[Charlie85270/Dorothy](https://github.com/Charlie85270/Dorothy)** - Orchestrate multiple AI CLI agents with automations and MCP servers
- **[Digidai/product-manager-skills](https://github.com/Digidai/product-manager-skills)** - Senior PM agent with 30+ frameworks and SaaS metrics
- **[deusyu/translate-book](https://github.com/deusyu/translate-book)** - Translate books (PDF/DOCX/EPUB) via parallel sub-agents with resume

</details>

<details>
<summary><h3 style="display:inline">Development and Testing</h3></summary>

- **[robzolkos/skill-rails-upgrade](https://github.com/robzolkos/skill-rails-upgrade)** - Analyze Rails apps and provide upgrade assessments
- **[Shpigford/screenshots](https://github.com/Shpigford/skills/tree/main/screenshots)** - Generate marketing screenshots with Playwright
- **[antonbabenko/terraform-skill](https://github.com/antonbabenko/terraform-skill)** - Terraform infrastructure as code best practices
- **[zxkane/aws-skills](https://github.com/zxkane/aws-skills)** - AWS development with infrastructure automation and cloud architecture patterns
- **[Rootly-AI-Labs/rootly-incident-responder](https://github.com/Rootly-AI-Labs/Rootly-MCP-server/blob/main/examples/skills/rootly-incident-responder.md)** - AI-powered incident response with ML similarity matching, solution suggestions, and on-call coordination. Requires [Rootly MCP Server](https://github.com/Rootly-AI-Labs/Rootly-MCP-server)
- **[conorluddy/ios-simulator-skill](https://github.com/conorluddy/ios-simulator-skill)** - Control iOS Simulator
- **[ramzesenok/iOS-Accessibility-Audit-Skill](https://github.com/ramzesenok/iOS-Accessibility-Audit-Skill)** - Audit iOS App against Accessibility norms
- **[truongduy2611/app-store-preflight-skills](https://github.com/truongduy2611/app-store-preflight-skills)** - Scan iOS/macOS projects to catch common mistakes that lead to App Store rejection before submission
- **[coderabbitai/skills](https://github.com/coderabbitai/skills)** - Code review and PR autofix workflows for coding agents
- **[sanjay3290/postgres](https://github.com/sanjay3290/ai-skills/tree/main/skills/postgres)** - Execute safe read-only SQL queries against PostgreSQL databases
- **[sanjay3290/deep-research](https://github.com/sanjay3290/ai-skills/tree/main/skills/deep-research)** - Autonomous multi-step research using Gemini Deep Research Agent
- **[jthack/ffuf-claude-skill](https://github.com/jthack/ffuf_claude_skill)** - Web fuzzing with ffuf
- **[lackeyjb/playwright-skill](https://github.com/lackeyjb/playwright-skill)** - Browser automation with Playwright
- **[ibelick/ui-skills](https://github.com/ibelick/ui-skills)** - Opinionated, evolving constraints to guide agents when building interfaces
- **[muthuishere/hand-drawn-diagrams](https://github.com/muthuishere/hand-drawn-diagrams)** - Generate hand-drawn Excalidraw diagrams from a prompt — animated SVG, hosted edit link, and PNG export. Works with Claude Code, Codex, Gemini CLI, and any agent supporting standard skill paths
- **[nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)** - UI/UX design patterns and best practices
- **[ehmo/platform-design-skills](https://github.com/ehmo/platform-design-skills)** - 300+ design rules from Apple HIG, Material Design 3, and WCAG 2.2 for cross-platform apps
- **[scarletkc/vexor](https://github.com/scarletkc/vexor)** - Vector-powered CLI for semantic file search with a Claude/Codex skill
- **[obra/test-driven-development](https://github.com/obra/superpowers/blob/main/skills/test-driven-development/SKILL.md)** - Write tests before implementing code
- **[obra/subagent-driven-development](https://github.com/obra/superpowers/blob/main/skills/subagent-driven-development/SKILL.md)** - Development using multiple sub-agents
- **[obra/systematic-debugging](https://github.com/obra/superpowers/blob/main/skills/systematic-debugging/SKILL.md)** - Methodical problem-solving in code
- **[obra/root-cause-tracing](https://github.com/obra/superpowers/blob/main/skills/root-cause-tracing/SKILL.md)** - Investigate and identify fundamental problems
- **[obra/testing-skills-with-subagents](https://github.com/obra/superpowers/blob/main/skills/testing-skills-with-subagents/SKILL.md)** - Collaborative testing approaches
- **[obra/testing-anti-patterns](https://github.com/obra/superpowers/blob/main/skills/testing-anti-patterns/SKILL.md)** - Identify ineffective testing practices
- **[obra/finishing-a-development-branch](https://github.com/obra/superpowers/blob/main/skills/finishing-a-development-branch/SKILL.md)** - Complete Git code branches
- **[obra/requesting-code-review](https://github.com/obra/superpowers/blob/main/skills/requesting-code-review/SKILL.md)** - Initiate code review processes
- **[obra/receiving-code-review](https://github.com/obra/superpowers/blob/main/skills/receiving-code-review/SKILL.md)** - Process and incorporate code feedback
- **[obra/using-git-worktrees](https://github.com/obra/superpowers/blob/main/skills/using-git-worktrees/SKILL.md)** - Manage multiple Git working trees
- **[obra/verification-before-completion](https://github.com/obra/superpowers/blob/main/skills/verification-before-completion/SKILL.md)** - Validate work before finalizing
- **[obra/condition-based-waiting](https://github.com/obra/superpowers/blob/main/skills/condition-based-waiting/SKILL.md)** - Manage conditional pauses or delays
- **[obra/commands](https://github.com/obra/superpowers/tree/main/skills/commands)** - Create and manage command structures
- **[obra/writing-skills](https://github.com/obra/superpowers/blob/main/skills/writing-skills/SKILL.md)** - Develop and document capabilities
- **[fvadicamo/dev-agent-skills](https://github.com/fvadicamo/dev-agent-skills)** - Git and GitHub workflow skills for commits, PRs, and code reviews
- **[omkamal/pypict-skill](https://github.com/omkamal/pypict-claude-skill/blob/main/SKILL.md)** - Pairwise test generation
- **[alinaqi/claude-bootstrap](https://github.com/alinaqi/claude-bootstrap)** - Opinionated project initialization with security-first guardrails, spec-driven atomic todos, LLM testing patterns, and CLI tool orchestration (gh, vercel, supabase)
- **[ZhangHanDong/makepad-skills](https://github.com/ZhangHanDong/makepad-skills)** - Makepad UI development skills for Rust apps: setup, patterns, shaders, packaging, and troubleshooting.
- **[massimodeluisa/recursive-decomposition-skill](https://github.com/massimodeluisa/recursive-decomposition-skill)** - Handle long-context tasks (100+ files, 50k+ tokens) through recursive decomposition strategies based on RLM research
- **[AvdLee/swiftui-expert-skill](https://github.com/AvdLee/SwiftUI-Agent-Skill/tree/main/swiftui-expert-skill)** - Modern SwiftUI best practices and iOS 26+ Liquid Glass adoption
- **[efremidze/swift-patterns-skill](https://github.com/efremidze/swift-patterns-skill/tree/main/swift-patterns)** - Modern Swift/SwiftUI best practices
- **[Joannis/claude-skills](https://github.com/Joannis/claude-skills)** - Swift Server development guidance with linting tool for best practices
- **[rudrankriyam/app-store-connect-cli-skills](https://github.com/rudrankriyam/app-store-connect-cli-skills)** - Automate App Store deployments and management using ASC CLI
- **[rameerez/claude-code-startup-skills](https://github.com/rameerez/claude-code-startup-skills)** - Skills for building and running software startups, apps, and SaaS
- **[zscole/model-hierarchy-skill](https://github.com/zscole/model-hierarchy-skill)** - Cost-optimized model routing based on task complexity
- **[CloudAI-X/threejs-skills](https://github.com/CloudAI-X/threejs-skills)** - Three.js skills for creating 3D elements and interactive experiences
- **[Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)** - High-agency frontend skill that gives AI good taste with tunable design variance, motion intensity, and visual density to stop generic UI slop
- **[testdino-hq/playwright-skill](https://github.com/testdino-hq/playwright-skill)** - 70+ production-tested Playwright automation testing patterns: E2E, POM, CI/CD, migrations, CLI
- **[NeoLabHQ/code-review](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/code-review)** - Comprehensive PR code review using specialized agents: bug-hunter, security-auditor, code-quality-reviewer, contracts-reviewer, historical-context-reviewer, test-coverage-reviewer
- **[NeoLabHQ/reflexion](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/reflexion)** - Self-refinement loop that forces the LLM to reflect on previous output and correct itself.
- **[NeoLabHQ/sdd](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/sdd)** - Spec-driven development workflow that transforms prompts into production-ready implementations through structured planning, architecture design, and LLM-as-a-Judge based quality gates.
- **[NeoLabHQ/ddd](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/ddd)** - Domain-driven development skills that also include Clean Architecture, SOLID principles, and design patterns.
- **[NeoLabHQ/sadd](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/sadd)** - Dispatches independent subagents for individual tasks with code review checkpoints between iterations for rapid, controlled development.
- **[NeoLabHQ/kaizen](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/kaizen)** - Applies continuous improvement methodology with multiple analytical approaches, based on Japanese Kaizen philosophy and Lean methodology.
- **[hamelsmu/eval-audit](https://github.com/hamelsmu/prompts/tree/main/evals-skills/skills/eval-audit)** - Audit LLM eval pipelines and surface problems
- **[hamelsmu/error-analysis](https://github.com/hamelsmu/prompts/tree/main/evals-skills/skills/error-analysis)** - Systematically identify failure modes in LLM pipelines
- **[hamelsmu/generate-synthetic-data](https://github.com/hamelsmu/prompts/tree/main/evals-skills/skills/generate-synthetic-data)** - Create diverse synthetic test inputs for LLM evals
- **[hamelsmu/write-judge-prompt](https://github.com/hamelsmu/prompts/tree/main/evals-skills/skills/write-judge-prompt)** - Design LLM-as-Judge evaluators for subjective criteria
- **[hamelsmu/validate-evaluator](https://github.com/hamelsmu/prompts/tree/main/evals-skills/skills/validate-evaluator)** - Calibrate LLM judges against human labels
- **[hamelsmu/evaluate-rag](https://github.com/hamelsmu/prompts/tree/main/evals-skills/skills/evaluate-rag)** - Evaluate RAG retrieval and generation quality
- **[uucz/moyu](https://github.com/uucz/moyu)** - Anti-over-engineering skill with 5 variants and 10 platforms
- **[hamelsmu/build-review-interface](https://github.com/hamelsmu/prompts/tree/main/evals-skills/skills/build-review-interface)** - Build annotation interfaces for reviewing LLM traces
- **[mattpocock/skills](https://github.com/mattpocock/skills)** - 17 dev workflow skills: PRD writing, TDD, codebase architecture, git guardrails, issue triage, refactoring plans, and more
- **[mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)** - 753 cybersecurity skills across 38 domains: cloud security, pentesting, red teaming, DFIR, malware analysis, threat intel, and more (MITRE ATT&CK mapped)
- **[wrsmith108/varlock-claude-skill](https://github.com/wrsmith108/varlock-claude-skill)** - Secure environment variable management ensuring secrets are never exposed in Claude sessions, terminals, logs, or git commits
- **[Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers)** - Automatically convert documentation websites, GitHub repositories, and PDFs into Claude AI skills in minutes
- **[NoizAI/skills](https://github.com/NoizAI/skills)** - Human-like TTS workflows with local/cloud APIs and app delivery
- **[Kevin7Qi/codex-collab](https://github.com/Kevin7Qi/codex-collab)** - Collaborate with Codex from Claude Code
- **[ethos-link/rails-conventions](https://github.com/ethos-link/rails-conventions)** - Rails 8 conventions for consistent production code changes
- **[ShunsukeHayashi/agent-skill-bus](https://github.com/ShunsukeHayashi/agent-skill-bus)** - Self-improving task orchestration for AI agent systems
- **[mcollina/skills](https://github.com/mcollina/skills/tree/main/skills)** - 11 skills by Matteo Collina: Node.js, Fastify, TypeScript, OAuth, Git/GitHub, ESLint neostandard, documentation (Diataxis), Node.js core internals, skill optimizer, and more

</details>

<details>
<summary><h3 style="display:inline">Context Engineering</h3></summary>

- **[muratcankoylan/context-fundamentals](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/context-fundamentals)** - Understand what context is, why it matters, and the anatomy of context in agent systems
- **[muratcankoylan/context-degradation](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/context-degradation)** - Recognize patterns of context failure: lost-in-middle, poisoning, distraction, and clash
- **[muratcankoylan/context-compression](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/context-compression)** - Design and evaluate compression strategies for long-running sessions
- **[muratcankoylan/context-optimization](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/context-optimization)** - Apply compaction, masking, and caching strategies
- **[muratcankoylan/multi-agent-patterns](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/multi-agent-patterns)** - Master orchestrator, peer-to-peer, and hierarchical multi-agent architectures
- **[muratcankoylan/memory-systems](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/memory-systems)** - Design short-term, long-term, and graph-based memory architectures
- **[muratcankoylan/tool-design](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/tool-design)** - Build tools that agents can use effectively, including architectural reduction patterns
- **[muratcankoylan/evaluation](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/evaluation)** - Build evaluation frameworks for agent systems
- **[k-kolomeitsev/data-structure-protocol](https://github.com/k-kolomeitsev/data-structure-protocol)** - Graph-based long-term memory skill for AI (LLM) coding agents — faster context, fewer tokens, safer refactors
- **[NeoLabHQ/prompt-engineering](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/customaize-agent/skills/prompt-engineering)** - Widely used prompt engineering techniques and patterns, including Anthropic best practices and agent persuasion principles.

</details>

<details>
<summary><h3 style="display:inline">Specialized Domains</h3></summary>

- **[transloadit/skills](https://github.com/transloadit/skills/tree/main/skills)** - Transloadit skill collection (6)
- **[raintree-technology/apple-hig-skills](https://github.com/raintree-technology/apple-hig-skills)** - Apple Human Interface Guidelines as 14 agent skills covering platforms, foundations, components, patterns, inputs, and technologies for iOS, macOS, visionOS, watchOS, and tvOS
- **[K-Dense-AI/claude-scientific-skills](https://github.com/K-Dense-AI/claude-scientific-skills)** - Scientific research and analysis skills
- **[NotMyself/claude-win11-speckit-update-skill](https://github.com/NotMyself/claude-win11-speckit-update-skill)** - Windows 11 system management
- **[sanjay3290/imagen](https://github.com/sanjay3290/ai-skills/tree/main/skills/imagen)** - Generate images using Google Gemini's API
- **[jeffersonwarrior/claudisms](https://github.com/jeffersonwarrior/claudisms)** - SMS messaging integration
- **[SHADOWPR0/security-bluebook-builder](https://github.com/SHADOWPR0/security-bluebook-builder)** - Build security Blue Books for sensitive apps
- **[obra/defense-in-depth](https://github.com/obra/superpowers/blob/main/skills/defense-in-depth/SKILL.md)** - Multi-layered security approaches
- **[huifer/Claude-Ally-Health](https://github.com/huifer/Claude-Ally-Health)** - A health assistant skill for medical information analysis, symptom tracking, and wellness guidance.
- **[frmoretto/clarity-gate](https://github.com/frmoretto/clarity-gate)** - Epistemic quality verification for RAG systems
- **[wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep)** - Autonomous ML research with cross-model review loops and GPU deployment
- **[zechenzhangAGI/AI-research-SKILLs](https://github.com/zechenzhangAGI/AI-research-SKILLs)** - 77 AI research skills for model training, inference, and MLOps
- **[Orchestra-Research/AI-research-SKILLs](https://github.com/Orchestra-Research/AI-research-SKILLs)** - 20-module AI research skill library for model architecture, training, and ML paper writing
- **[komal-SkyNET/claude-skill-homeassistant](https://github.com/komal-SkyNET/claude-skill-homeassistant)** - Supercharge and manage Home Assistant workflows
- **[more-io/apple-bridges](https://github.com/more-io/claude-apple-bridges)** - Native macOS app access — manage Apple Reminders, Calendar, Contacts, Notes, Mail, and tmux sessions via Swift CLI bridges
- **[prompt-security/clawsec](https://github.com/prompt-security/clawsec)** - Security skill suite with drift detection, automated audits, and skill integrity verification
- **[BehiSecc/vibesec](https://github.com/BehiSecc/VibeSec-Skill)** - Helps write secure code by preventing common vulnerabilities including IDOR, XSS, SQL injection, SSRF, and weak authentication, approaching code from a bug hunter's perspective
- **[lawvable/awesome-legal-skills](https://github.com/lawvable/awesome-legal-skills)** - Curated agent skills for automating legal workflows
- **[peas/genealogy-research](https://paulo.com.br/skills/genealogy-research/SKILL.md)** - Genealogy research agent with OCR, FamilySearch, YAML data, and human-in-the-loop
- **[zw008/VMware-AIops](https://github.com/zw008/VMware-AIops)** - AI-powered VMware vCenter/ESXi monitoring and operations: inventory queries, health/alarms, VM lifecycle (create, delete, snapshot, clone, migrate), vSAN management, Aria Operations analytics, and scheduled log scanning. Supports Claude Code, Gemini CLI, Codex, Aider, Trae, Kimi, and MCP.
- **[video-db/skills](https://github.com/video-db/skills)** - Realtime and batch video workflows: capture screen/audio, ingest URLs/YouTube/RTSP, transcribe, index, search, generate subtitles, edit timelines, and stream HLS output
- **[materials-simulation-skills](https://github.com/HeshamFS/materials-simulation-skills)** - Agent skills for computational materials science: numerical stability, time-stepping, linear solvers, mesh generation, simulation validation, parameter optimization, and post-processing
- **[takechanman1228/claude-ecom](https://github.com/takechanman1228/claude-ecom)** - Ecommerce CSV to business review with KPI decomposition
- **[talkstream/ru-text](https://github.com/talkstream/ru-text)** - Russian text quality: ~1,040 rules for typography, info-style, editorial, UX writing, business correspondence. Cross-platform: Claude Code, Codex CLI, Gemini CLI, Cursor.
- **[helius-labs/helius-skills](https://github.com/helius-labs/core-ai/tree/main/helius-skills)** - Ship Solana apps end-to-end; transaction sending, asset queries, real-time streaming, token swaps, prediction markets, browser wallets, and deep research into protocol internals all powered by Helius APIs, DFlow trading, and Phantom wallet integrations
- **[meodai/skill.color-expert](https://github.com/meodai/skill.color-expert)** - Color science expert skill with 286K words of reference material covering OKLCH/OKLAB, palette generation, accessibility/contrast, color naming, pigment mixing, and historical color theory
- **[bitwize-music-studio/claude-ai-music-skills](https://github.com/bitwize-music-studio/claude-ai-music-skills)** - Full-lifecycle AI music album production

</details>

<details>
<summary><h3 style="display:inline">n8n Automation</h3></summary>

- **[czlonkowski/n8n-code-javascript](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-code-javascript)** - JavaScript in n8n Code nodes with data access patterns
- **[czlonkowski/n8n-code-python](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-code-python)** - Python coding in n8n Code nodes with limitations
- **[czlonkowski/n8n-expression-syntax](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-expression-syntax)** - n8n expression syntax with {{}} and $json/$node variables
- **[czlonkowski/n8n-mcp-tools-expert](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-mcp-tools-expert)** - MCP tools guide with tool selection and node formats
- **[czlonkowski/n8n-node-configuration](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-node-configuration)** - Node configuration with dependency rules and AI connections
- **[czlonkowski/n8n-validation-expert](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-validation-expert)** - Fix n8n validation errors with error catalog
- **[czlonkowski/n8n-workflow-patterns](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-workflow-patterns)** - Workflow patterns for webhook, HTTP, database, and AI tasks

</details>


## 🔒 Security Notice

Skills in this list are curated, not audited. They may be updated, modified, or replaced by their original maintainers at any time after being added here.

Before installing or using any Agent Skill, review potential security risks and validate the source yourself.

Recommended tools:

- [Synk Skill Security Scanner](https://github.com/snyk/agent-scan)
- [Agent Trust Hub](https://ai.gendigital.com/agent-trust-hub)

Agent skills can include prompt injections, tool poisoning, hidden malware payloads, or unsafe data handling patterns. Always review the code and use skills at your own discretion.



## Skills Paths for Other AI Coding Assistants

| Tool | Project Path | Global Path | Official Docs |
|------|-------------|-------------|---------------|
| Antigravity | `.agent/skills/` | `~/.gemini/antigravity/skills/` | [Antigravity Skills](https://antigravity.google/docs/skills) |
| Claude Code | `.claude/skills/` | `~/.claude/skills/` | [Claude Code Skills](https://docs.anthropic.com/en/docs/claude-code/skills) |
| Codex | `.agents/skills/` | `~/.agents/skills/` | [Codex Skills](https://developers.openai.com/codex/skills) |
| Cursor | `.cursor/skills/` | `~/.cursor/skills/` | [Cursor Skills](https://cursor.com/docs/context/skills) |
| Gemini CLI | `.gemini/skills/` | `~/.gemini/skills/` | [Gemini CLI Skills](https://geminicli.com/docs/cli/skills/) |
| GitHub Copilot | `.github/skills/` | `~/.copilot/skills/` | [Copilot Skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills) |
| OpenCode | `.opencode/skills/` | `~/.config/opencode/skills/` | [OpenCode Skills](https://opencode.ai/docs/skills) |
| Windsurf | `.windsurf/skills/` | `~/.codeium/windsurf/skills/` | [Windsurf Cascade Skills](https://docs.windsurf.com/windsurf/cascade/skills) |


## Skill Quality Standards

As the ecosystem grows, consistent quality helps agents discover and use skills reliably. The following references and criteria keep the bar high.



### Quality Criteria

| Area | Guideline |
|------|-----------|
| **Description** | Write in third person. State *what* the skill does and *when* to use it. Use specific keywords agents can match on (e.g., "PostgreSQL migration" not "database stuff"). |
| **Progressive disclosure** | Keep top-level metadata under ~100 tokens. Skill body should stay below 500 lines. Load resources (large docs, schemas) on demand, not inline. |
| **No absolute paths** | Never hard-code machine-specific paths like `/Users/alice/`. Use relative paths or well-known variables (`$HOME`, `$PROJECT_ROOT`). |
| **Scoped tools** | Request only the tools the skill actually needs. Avoid blanket `"tools": ["*"]`. Declare tool dependencies explicitly. |

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

- Submit new skills via PR
- Improve existing definitions

**Note:** Please don't submit skills you created 3 hours ago. We're now focusing on community-adopted skills, especially those published by development teams and proven in real-world usage. Quality over quantity.

## Contributor ♥️ Thanks
![Contributors](https://contrib.rocks/image?repo=voltagent/awesome-agent-skills&max=500&columns=20&anon=1)

## License

MIT License - see [LICENSE](LICENSE)

This is a curated list. Skills listed here are created and maintained by their respective authors and teams, not by us. We select community-adopted, proven skills and do not audit, endorse, or guarantee the security or correctness of listed projects. They are not security-audited and should be reviewed before production use.

If you find an issue with a listed skill or want your skill removed, please [open an issue](https://github.com/VoltAgent/awesome-agent-skills/issues) and we'll take care of it promptly.

[codex-badge]: https://img.shields.io/github/stars/VoltAgent/awesome-codex-subagents?style=classic&label=Codex%20Subagents&color=000000&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0yMi4yODIgOS44MjFhNS45ODUgNS45ODUgMCAwIDAtLjUxNi00LjkxIDYuMDQ2IDYuMDQ2IDAgMCAwLTYuNTEtMi45QTYuMDY1IDYuMDY1IDAgMCAwIDQuOTgxIDQuMThhNS45ODUgNS45ODUgMCAwIDAtMy45OTggMi45IDYuMDQ2IDYuMDQ2IDAgMCAwIC43NDMgNy4wOTcgNS45OCA1Ljk4IDAgMCAwIC41MSA0LjkxMSA2LjA1MSA2LjA1MSAwIDAgMCA2LjUxNSAyLjlBNS45ODUgNS45ODUgMCAwIDAgMTMuMjYgMjRhNi4wNTYgNi4wNTYgMCAwIDAgNS43NzItNC4yMDYgNS45OSA1Ljk5IDAgMCAwIDMuOTk3LTIuOSA2LjA1NiA2LjA1NiAwIDAgMC0uNzQ3LTcuMDczek0xMy4yNiAyMi40M2E0LjQ3NiA0LjQ3NiAwIDAgMS0yLjg3Ni0xLjA0bC4xNDEtLjA4MSA0Ljc3OS0yLjc1OGEuNzk1Ljc5NSAwIDAgMCAuMzkyLS42ODF2LTYuNzM3bDIuMDIgMS4xNjhhLjA3MS4wNzEgMCAwIDEgLjAzOC4wNTJ2NS41ODNhNC41MDQgNC41MDQgMCAwIDEtNC40OTQgNC40OTR6TTMuNiAxOC4zMDRhNC40NyA0LjQ3IDAgMCAxLS41MzUtMy4wMTRsLjE0Mi4wODUgNC43ODMgMi43NTlhLjc3MS43NzEgMCAwIDAgLjc4IDBsNS44NDMtMy4zNjl2Mi4zMzJhLjA4LjA4IDAgMCAxLS4wMzMuMDYyTDkuNzQgMTkuOTVhNC41IDQuNSAwIDAgMS02LjE0LTEuNjQ2ek0yLjM0IDcuODk2YTQuNDg1IDQuNDg1IDAgMCAxIDIuMzY2LTEuOTczVjExLjZhLjc2Ni43NjYgMCAwIDAgLjM4OC42NzZsNS44MTUgMy4zNTUtMi4wMiAxLjE2OGEuMDc2LjA3NiAwIDAgMS0uMDcxIDBsLTQuODMtMi43ODZBNC41MDQgNC41MDQgMCAwIDEgMi4zNCA3Ljg3MnptMTYuNTk3IDMuODU1bC01LjgzMy0zLjM4N0wxNS4xMTkgNy4yYS4wNzYuMDc2IDAgMCAxIC4wNzEgMGw0LjgzIDIuNzkxYTQuNDk0IDQuNDk0IDAgMCAxLS42NzYgOC4xMDV2LTUuNjc4YS43OS43OSAwIDAgMC0uNDA3LS42Njd6bTIuMDEtMy4wMjNsLS4xNDEtLjA4NS00Ljc3NC0yLjc4MmEuNzc2Ljc3NiAwIDAgMC0uNzg1IDBMOS40MDkgOS4yM1Y2Ljg5N2EuMDY2LjA2NiAwIDAgMSAuMDI4LS4wNjFsNC44My0yLjc4N2E0LjUgNC41IDAgMCAxIDYuNjggNC42NnptLTEyLjY0IDQuMTM1bC0yLjAyLTEuMTY0YS4wOC4wOCAwIDAgMS0uMDM4LS4wNTdWNi4wNzVhNC41IDQuNSAwIDAgMSA3LjM3NS0zLjQ1M2wtLjE0Mi4wOEw4LjcwNCA1LjQ2YS43OTUuNzk1IDAgMCAwLS4zOTMuNjgxem0xLjA5Ny0yLjM2NWwyLjYwMi0xLjUgMi42MDcgMS41djIuOTk5bC0yLjU5NyAxLjUtMi42MDctMS41eiIvPjwvc3ZnPg==
[codex-link]: https://github.com/VoltAgent/awesome-codex-subagents


--- 

## More Awesome Skills from Libukai

<div>
  <p align="center">
    <a href="https://platform.composio.dev/?utm_source=Github&utm_medium=Youtube&utm_campaign=2025-11&utm_content=AwesomeSkills">
    <img width="1280" height="640" alt="Composio banner" src="assets/media/awesome-agent-skills.png">
    </a>
  </p>
</div>

<div>
  <p align="center">
    <a href="https://awesome.re">
      <img src="https://awesome.re/badge.svg" alt="Awesome" />
    </a>
    <a href="https://makeapullrequest.com">
      <img src="https://img.shields.io/badge/Issues-welcome-brightgreen.svg?style=flat-square" alt="Issues Welcome" />
    </a>
    <a href="https://www.apache.org/licenses/LICENSE-2.0">
      <img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg?style=flat-square" alt="License: Apache-2.0" />
    </a>
  </p>
</div>

<div align="center">

简体中文 | [English](docs/README_EN.md) | [日本語](docs/README_JA.md) 

</div>

本项目致力于遵循少而精的原则，收集和分享最优质的 Skill 资源、教程和实践案例，帮助更多人轻松迈出搭建 Agent 的第一步。

> 如果觉得这个项目对你有所帮助，还请帮忙点个 🌟 让更多人知晓。同时，也欢迎关注我的 𝕏 账号 [@李不凯正在研究](https://x.com/libukai) ，即时获取 Agent Skill 的最新资源和实战教程！

## 快速入门

Skill 是一种轻量级的 Agent 构建方案，通过封装特定的业务流程与行业知识，强化 AI 执行特定任务的专业能力。

面对重复性的任务需求，你无需在每次对话中反复输入背景信息。只需安装对应的 Skill，AI 即可习得该领域的专业技能。

历经半年的迭代演进，Skill 已成为增强 AI 垂直领域能力的标准方案，并获得了各类 Agent 框架与 AI 产品的广泛支持。

## 标准结构

根据标准定义，每个 Skill 都是一个规范化命名的文件夹，其中包含了流程、资料、脚本等各类资源。通过在上下文中渐进式导入这些文件，AI 即可学会相应的技能。

```markdown
my-skill/
├── SKILL.md          # 必需：流程说明和元数据
├── references/       # 可选：参考资料
├── scripts/          # 可选：可执行脚本
└── assets/           # 可选：模板、资源
```

## 安装技能

Skill 可以在 Claude 和 ChatGPT 这类 GUI 的 App 中使用，也可以在 Cursor 和 Claude Code 这类编程 IDE 及 TUI CLI 中使用，还可以在 OpenClaw 等 Agent Harness 上使用。

安装 Skill 过程的本质，其实就是将 Skill 对应的文件夹放到特定的目录下，以便 AI 能按需加载和使用。

### 类 Claude App 生态

![](assets/media/claude_app.png)

目前在 App 中使用 Skill 的方式主要有两种：通过 App 自带的 Skill 商店安装，或者通过上传压缩包的方式安装。

对于官方商店中没有的 Skill，可以从下方推荐的 Skill 第三方商店中下载并手动上传安装。

### 类 Claude Code 生态

![](assets/media/skills_mp.png)

推荐使用 [skillsmp](https://skillsmp.com/zh) 商店，该商店中自动抓取了 Github 上的所有的 Skill 项目，并按照分类、更新时间、星标数量等标签进行了分类整理。

可辅助使用 Vercel 出品的 [skills.sh](https://skills.sh/) 排行榜，直观查看当前最受欢迎的 Skills 仓库和单个 Skill 的使用情况。

对于特定的 skill，使用 `npx skills` 命令行工具可快速发现、添加和管理 skill，具体参数详见 [vercel-labs/skills](https://github.com/vercel-labs/skills)。

```bash
npx skills find [query]                          # 搜索相关技能
npx skills add <owner/repo>                      # 安装技能（支持 GitHub 简写、完整 URL、本地路径）
npx skills list                                  # 列出已安装的技能
npx skills check                                 # 检查可用更新
npx skills update                                # 升级所有技能
npx skills remove [skill-name]                   # 卸载技能
```

### 类 OpenClaw 生态

![](assets/media/clawhub.png)

如果有科学上网的能力，且使用官方版本 OpeClaw，推荐使用官方的 [ClawHub](https://clawhub.com/) 商店，提供的技能更偏技术向且包含了大量海外产品的整合。

```bash
npx clawhub search [query]          # 搜索相关技能
npx clawhub explore                 # 浏览技能市场
npx clawhub install <slug>          # 安装技能
npx clawhub uninstall <slug>        # 卸载技能
npx clawhub list                    # 列出已安装的技能
npx clawhub update --all            # 升级所有技能
npx clawhub inspect <slug>          # 查看技能详情（不安装）
```

![](assets/media/skillshub.png)

对于主要在国内网络环境下使用，或者是使用国内定制版的 OpenClaw，推荐使用腾讯推出的 [SkillHub](https://skillhub.tencent.com/) 商店，提供了大量更符合中国用户使用需求的技能。

首先，需要安装 Skill Hub CLI 工具，可以通过以下命令进行安装：

```bash
curl -fsSL https://skillhub-1388575217.cos.ap-guangzhou.myqcloud.com/install/install.sh | bash
```

安装完成后，可以使用以下命令来安装和管理技能：

```bash
skillhub search [query] # 搜索相关技能
skillhub install <skill-name> # 使用 skill name 添加技能
skillhub list # 列出已安装的技能
skillhub upgrade # 升级已安装的技能
```

## 优质教程

### 官方文档

- @Anthropic：[Claude Skill 完全构建指南](docs/Claude-Skills-完全构建指南.md) 
- @Anthropic：[Claude Agent Skills 实战经验](docs/Claude-Code-Skills-实战经验.md)
- @Google：[Agent Skills 五种设计模式](docs/Agent-Skill-五种设计模式.md)

### 图文教程

  - @李不凯正在研究：[Agent Skills 简要介绍 PPT](/assets/docs/Agent%20Skills%20终极指南.pdf)
-   @一泽 Eze：[Agent Skills 终极指南：入门、精通、预测](https://mp.weixin.qq.com/s/jUylk813LYbKw0sLiIttTQ)
-   @deeptoai：[Claude Agent Skills 第一性原理深度解析](https://skills.deeptoai.com/zh/docs/ai-ml/claude-agent-skills-first-principles-deep-dive)

### 视频教程

-   @马克的技术工作坊：[Agent Skill 从使用到原理，一次讲清](https://www.youtube.com/watch?v=yDc0_8emz7M)
-   @宝玉：[Agent Skills 设计哲学和实战进化](https://x.com/dotey/status/2036114136245969025)

## 官方项目

<table>
<tr><th colspan="5">🤖 AI 模型与平台</th></tr>
<tr>
<td><a href="https://github.com/anthropics/skills">anthropics</a></td>
<td><a href="https://github.com/openai/skills">openai</a></td>
<td><a href="https://github.com/google-gemini/gemini-skills">gemini</a></td>
<td><a href="https://github.com/huggingface/skills">huggingface</a></td>
<td><a href="https://github.com/replicate/skills">replicate</a></td>
</tr>
<tr>
<td><a href="https://github.com/elevenlabs/skills">elevenlabs</a></td>
<td><a href="https://github.com/black-forest-labs/skills">black-forest-labs</a></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr><th colspan="5">☁️ 云服务与基础设施</th></tr>
<tr>
<td><a href="https://github.com/cloudflare/skills">cloudflare</a></td>
<td><a href="https://github.com/hashicorp/agent-skills">hashicorp</a></td>
<td><a href="https://github.com/databricks/databricks-agent-skills">databricks</a></td>
<td><a href="https://github.com/ClickHouse/agent-skills">clickhouse</a></td>
<td><a href="https://github.com/supabase/agent-skills">supabase</a></td>
</tr>
<tr>
<td><a href="https://github.com/stripe/ai">stripe</a></td>
<td><a href="https://github.com/launchdarkly/agent-skills">launchdarkly</a></td>
<td><a href="https://github.com/getsentry/skills">sentry</a></td>
<td></td>
<td></td>
</tr>
<tr><th colspan="5">🛠️ 开发框架与工具</th></tr>
<tr>
<td><a href="https://github.com/vercel-labs/agent-skills">vercel</a></td>
<td><a href="https://github.com/microsoft/agent-skills">microsoft</a></td>
<td><a href="https://github.com/expo/skills">expo</a></td>
<td><a href="https://github.com/better-auth/skills">better-auth</a></td>
<td><a href="https://github.com/posit-dev/skills">posit</a></td>
</tr>
<tr>
<td><a href="https://github.com/remotion-dev/skills">remotion</a></td>
<td><a href="https://github.com/slidevjs/slidev">slidev</a></td>
<td><a href="https://github.com/vercel-labs/agent-browser">agent-browser</a></td>
<td><a href="https://github.com/browser-use/browser-use">browser-use</a></td>
<td><a href="https://github.com/firecrawl/cli">firecrawl</a></td>
</tr>
<tr>
<td><a href="https://github.com/greensock/gsap-skills">gsap</a></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr><th colspan="5">📝 内容与协作</th></tr>
<tr>
<td><a href="https://github.com/makenotion/skills">notion</a></td>
<td><a href="https://github.com/kepano/obsidian-skills">obsidian</a></td>
<td><a href="https://github.com/WordPress/agent-skills">wordpress</a></td>
<td><a href="https://github.com/langgenius/dify">dify</a></td>
<td><a href="https://github.com/sanity-io/agent-toolkit">sanity</a></td>
</tr>
<tr>
<td><a href="https://github.com/hardhackerlabs/podwise">podwise-cli</a></td>
<td><a href="https://github.com/wpsnote/wpsnote-skills">wps</a></td>
<td><a href="https://github.com/marswaveai/skills">listenhub</a></td>
<td></td>
<td></td>
</tr>
</table>

## 精选技能

### 编程开发

-   [superpowers](https://github.com/obra/superpowers)：涵盖完整编程项目工作流程
-   [frontend-design](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/frontend-design)：前端设计技能
-   [ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)：更精致和个性化的 UI/UX 设计
-   [code-review](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/code-review)：代码审查技能
-   [code-simplifier](hhttps://github.com/anthropics/claude-plugins-official/tree/main/plugins/code-simplifier)：代码简化技能
-   [commit-commands](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/commit-commands)：Git 提交技能


### 内容创作

-   [baoyu-skills](https://github.com/JimLiu/baoyu-skills)：宝玉的自用 SKills 集合，包括公众号写作、PPT 制作等
-   [libukai](https://github.com/libukai/awesome-agent-skills): Obsidian 相关技能集合，专门适配 Obsidian 的写作场景
-   [op7418](https://github.com/op7418)：歸藏创作的高质量 PPT 制作、Youtube 分析技能
-   [cclank](https://github.com/cclank/news-aggregator-skill)：自动抓取和总结指定领域的最新资讯
-   [huangserva](https://github.com/huangserva/skill-prompt-generator)：生成和优化 AI 人像文生图提示词
-   [dontbesilent](https://github.com/dontbesilent2025/dbskill)： X 万粉大V 基于自己的推文制作的内容创作框架
-   [seekjourney](https://github.com/geekjourneyx/md2wechat-skill/)：从写作到发布的 AI 辅助公众号写作

### 产品使用

-   [wps](https://github.com/wpsnote/wpsnote-skills)：操控 WPS 办公软件
-   [notebooklm](https://github.com/teng-lin/notebooklm-py)：操控 NotebookLM 
-   [n8n](https://github.com/czlonkowski/n8n-skills)：创建 n8n 工作流
-   [threejs](https://github.com/cloudai-x/threejs-skills)： 辅助开发 Three.js 项目

### 其他类型

-  [pua](https://github.com/tanweai/pua)：以 PUA 的方式驱动 AI 更卖力的干活
-   [office-hours](https://github.com/garrytan/gstack/tree/main/office-hours)：使用 YC 的视角提供各种创业建议
-   [marketingskills](https://github.com/coreyhaines31/marketingskills)：强化市场营销的能力
-   [scientific-skills](https://github.com/K-Dense-AI/claude-scientific-skills)： 提升科研工作者的技能


## 安全审查

由于 Skill 中可能包含了调用外部 API、静默执行定时脚本等具有潜在风险的操作，因此在设计和使用 Skill 时，务必高度重视安全问题。

建议在安装 Skill 时，优先选择来自官方商店或知名第三方商店的 Skill，并仔细阅读 Skill 的描述和用户评价，避免安装来源不明的 Skill。

对于安全性要求性较高的场景，可以使用 @余弦 的 [slowmist-agent-security skill](https://github.com/slowmist/slowmist-agent-security) 对 Skill 进行安全审计和风险评估，确保 Skill 的安全性和可靠性。

如果使用 OpenClaw 这类具有高度自主权限的 Agent Harness，建议配合使用 [OpenClaw极简安全实践指南](https://github.com/slowmist/openclaw-security-practice-guide) ，通过系统提示词级别的安全约束，最大程度地降低潜在风险。

## 创建技能

虽然可以通过技能商店直接安装他人创建的技能，但是为了提升技能的适配度和个性化，强烈建议根据需要自己动手创建技能，或者在其他人的基础上进行微调。

### 官方插件

通过官方出品的  [skill-creator](https://github.com/anthropics/skills/tree/main/skills/skill-creator) 插件可快速创建和迭代个人专属的 skill。


![](assets/media/skill-creator.png)

### 增强插件

在官方 skill-creator plugin 的基础上，本项目整合来自 Anthropic 和 Google 团队的最佳实践，构建了一个更为强大的 Agent Skills Toolkit，帮助你快速创建和改进 Agent Skills。（**注意：该插件目前仅支持 Claude Code**）

#### 添加市场

启动 Claude Code，进入插件市场，添加 `libukai/awesome-agent-skills` 市场，也可以直接在输入框中使用以下指令添加市场：

```bash
/plugin marketplace add libukai/awesome-agent-skills
```

#### 安装插件

成功安装市场之后，选择安装 `agent-skills-toolkit` 插件

![](assets/media/skill-creator-pro.png)

#### 快捷指令

插件中置入了多个快捷指令，覆盖了从创建、改进、测试到优化技能描述的完整工作流程：

- `/agent-skills-toolkit:skill-creator-pro` - 完整工作流程
- `/agent-skills-toolkit:create-skill` - 创建新 skill
- `/agent-skills-toolkit:improve-skill` - 改进现有 skill
- `/agent-skills-toolkit:test-skill` - 测试评估 skill

## 致谢

![](assets/media/talk_is_cheap.jpg)

## 项目历史

[![Star History Chart](https://api.star-history.com/svg?repos=libukai/awesome-agent-skills&type=date&legend=top-left)](https://www.star-history.com/#libukai/awesome-agent-skills&type=date&legend=top-left)
