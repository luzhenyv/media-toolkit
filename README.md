# media-toolkit

A Claude Code plugin for content projects: one SOP, a small set of tools, and skills for the article → voiceover → video workflow. Every asset has a **hand-editable source**; fix details yourself and re-render, without going back to the agent.

The toolkit prepares; you finish. Final text and final video are always edited by a human, in whatever tools you prefer.

## Workflow

In a content project, open `claude` and say what you want:

| You say | You get |
|---|---|
| (edit the article yourself) | |
| "plan visuals" | visual markers in the article |
| "make F03 F04" | assets + image embeds; review in your Markdown editor |
| commit `EP01: article final` | checkpoint |
| "voiceover script" | `voiceover.md` |
| record voiceover, export/transcribe subtitles to `voiceover.srt` | |
| "edit plan" | `video-edit.md`: timecode × visual; missing visuals get planned |
| edit the final video (your own tool) | |

Rules (project layout, file names, markers) live in one place: `skills/media-sop`.

## Contents

| Path | What |
|---|---|
| `skills/` | `media-sop` rules · `plan-visuals` · `drawio-diagram` · `remotion-animation` · `image-search` · `ai-image` · `voiceover-script` · `video-edit-plan` |
| `bin/` | `render` source → output · `preview` live animation preview · `commons` Wikimedia Commons search/download |
| `runtimes/remotion/` | shared Remotion runtime; `node_modules` installs here (not in git) |
| `templates/project/` | `CLAUDE.md`, `style.md`, `.gitignore` for a new project |
| `styles/` | visual style presets (`punch-card`, `blueprint`, `ink-and-seal`, `signal-and-noise`, `warm-flat`); open `preview.html` to compare |
| `docs/profile.md` | the owner's personal brand profile |

## Setup

One copy per machine, loaded in place with `--plugin-dir` (no install, no cache copy). In `~/.zshrc`:

```sh
alias claude='claude --plugin-dir ~/Steven/project/media-toolkit'
export PATH="$HOME/Steven/project/media-toolkit/bin:$PATH"   # for render / preview / commons by hand
```

- Editing `bin/` scripts: takes effect immediately.
- Editing `SKILL.md`: takes effect in a new session.

Requires draw.io desktop (`/Applications/draw.io.app`), Node.js (animations; the first `render` runs `npm install`; commit the resulting `package-lock.json`), and Python 3.

New project: "set up this project with media-toolkit" (copies `templates/project/`).

## By hand

```sh
render                                 # re-export every stale asset in ./assets
render assets/F04-ball.tsx             # one asset → .mp4 + .gif + .png cover
preview assets/F04-ball.tsx            # live preview in the browser
commons search "Andrei Markov" 5
commons get "File:Andrei Markov.jpg" assets/F02-onegin.portrait.jpg
```

| Source | Output | Edit by hand | Skill |
|---|---|---|---|
| `.drawio` | `.png` | open in draw.io | `drawio-diagram` |
| `.tsx` | `.mp4` + `.gif` + `.png` | the parameters block at the top | `remotion-animation` |
| `.md` (source, license) | downloaded `.jpg` / `.png` | never edit originals; composite elsewhere | `image-search` |
| `.md` (prompt) | `.v1.png` … → `.png` | edit the prompt, regenerate yourself | `ai-image` |
