import markdown
import urllib.request
import os

# 1. Fetch remote content
url_volt = "https://raw.githubusercontent.com/VoltAgent/awesome-agent-skills/main/README.md"
url_libukai = "https://raw.githubusercontent.com/libukai/awesome-agent-skills/main/README.md"

def fetch_content(url):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            return response.read().decode('utf-8')
    except Exception as e:
        print(f"Failed to fetch {url}: {e}")
        return ""

volt_content = fetch_content(url_volt)
libukai_content = fetch_content(url_libukai)

# 2. Merge with local README
with open('README.md', 'r', encoding='utf-8') as f:
    local_content = f.read()

merged_content = local_content + "\n\n--- \n\n## More Awesome Skills from VoltAgent\n\n" + volt_content + "\n\n--- \n\n## More Awesome Skills from Libukai\n\n" + libukai_content

# Save back to local README.md
with open('README.md', 'w', encoding='utf-8') as f:
    f.write(merged_content)
    
print("README.md merged and updated successfully.")

# 3. Add our 2026 Trends string
trends_text = """

---

## Agent Skills Trends & Capabilities (2026)

In 2026, the AI agent ecosystem has dramatically shifted from reactive chat interfaces to **autonomous, goal-driven systems** executing end-to-end multi-step workflows. This period, often called the "Agent Leap", is defined by a move toward end-to-end execution of complex tasks.

### 1. Autonomous Execution & Goal Orientation
Modern agents move past simple "prompt-response" models. They break down broad, abstract objectives into multi-step strategic plans, weighing trade-offs and executing sequences independently over long horizons.

### 2. Multi-Agent Orchestration
Complex repositories and operations are managed by specialized agent teams (e.g., a documentation agent, a testing agent, and a coding agent). These teams are coordinated by "manager" agents that synthesize deliverables and resolve conflicts securely.

### 3. Direct Access & Agentic IDEs
Instead of just returning textual code solutions, AI agents are increasingly given deep, authorized access to terminals, environments, and filesystems through protocols like Model Context Protocol (MCP). Environments like Cursor, Windsurf, Copilot, and Claude Code have evolved into "Agentic IDEs" where agents natively execute commands and monitor telemetry in real-time.
"""

final_compile_md = merged_content + "\n\n" + trends_text

# 4. Convert to HTML 
html_content = markdown.markdown(final_compile_md, extensions=['tables', 'fenced_code'])

# 5. Build GitHub-Native HTML Page
template = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Awesome Agent Skills</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.0/github-markdown.min.css">
    <style>
        .markdown-body {{
            box-sizing: border-box;
            min-width: 200px;
            max-width: 980px;
            margin: 0 auto;
            padding: 45px;
        }}
        @media (max-width: 767px) {{
            .markdown-body {{
                padding: 15px;
            }}
        }}
    </style>
</head>
<body class="markdown-body">
    {html_content}
</body>
</html>"""

os.makedirs('docs', exist_ok=True)
with open('docs/index.html', 'w', encoding='utf-8') as f:
    f.write(template)
    
print("docs/index.html visually native to GitHub created successfully!")
