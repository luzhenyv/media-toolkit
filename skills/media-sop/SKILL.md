---
name: media-sop
description: The single source of rules for content projects - project template, unit layout, file names, asset naming, visual markers, statuses, and the article → voiceover → video workflow. Use when creating or organizing a project or unit, naming assets, reading or writing visual markers, or deciding the next workflow step.
---

# Media SOP

## Project layout

```text
<project>/
├── CLAUDE.md         # project rules; may override the defaults below
├── style.md          # project style: colors, fonts, illustration style, aspect ratios, voice
├── _shared/
│   ├── assets/       # assets reused across units
│   └── raw/          # raw material shared across units (outlines, transcripts)
└── <unit>/           # one episode, article, or short video
    ├── article.md    # written article (human-owned)
    ├── voiceover.md  # voiceover script (optional)
    ├── voiceover.srt # subtitles exported from CapCut (optional)
    ├── edit.md       # video edit plan (optional)
    ├── style.md      # unit-level style override (optional)
    ├── assets/       # this unit's assets
    └── raw/          # recordings, screen captures, photos (read-only; large files not in git)
```

- Every file in a unit is optional. A unit enters the workflow at whatever it has.
- Unit directory: `<ID>-<short-title>`; the ID prefix is up to the project (`EP01`, `S03`, …).
- **Overrides:** a project's `CLAUDE.md` may rename these files (e.g. `article.md` → `draft.md`), including to another language, or directories. Always check it first and use the project's names.
- Start a new project from `${CLAUDE_PLUGIN_ROOT}/templates/project/`.

## Assets

- Name: `F##-<short-name>.<ext>`. IDs start at `F01` per unit, **only increase, and do not follow position** in the text. Never reuse an ID.
- Source and output share a name; only the extension differs. Outputs can always be re-rendered from the source.
- Assets without a renderable source (downloaded, AI-generated) get a same-name `.md` recording source, license, or prompt.
- Suffixes for multiple files under one ID: `.portrait` / `.page` (several originals), `.v1` / `.v2` (AI candidates), `.9x16` (other aspect ratios).
- No spaces, no `final_v3`. History lives in git.
- Dropped assets move to `assets/_dropped/`.
- Reuse across units by relative path (`../EP01-xxx/assets/F04-xxx.mp4`); do not copy.

## Visual markers

The plan for each visual lives where it is used: in `article.md`, or in `edit.md` for video-only visuals.

```markdown
> [F03 · diagram · draft] One-sentence description of what the viewer sees.
![F03](assets/F03-transition-table.png)
```

- Marker line: `> [ID · type · status] description`. Type: `diagram` `animation` `photo` `illustration` `screen` `other`. Status: `todo` → `draft` → `final`, or `dropped`.
- A user may write a bare `> [F18] description`; fill in type and status when planning.
- Embed line directly below, added once the asset exists. Video: `[![F04](assets/F04-x.png)](assets/F04-x.mp4)`.
- **Agents may only insert or edit marker lines and embed lines. Never change prose.**
- Progress overview: scan the markers; there is no separate list file.

## Workflow

| Stage | User says | Result |
|---|---|---|
| 1 | (edits the article) | |
| 2 | "plan visuals" | markers inserted/updated (`plan-visuals`) |
| 3 | "make F03 F04" | assets + embeds (production skills) |
| 4 | commit `<unit>: article final` | checkpoint |
| 5 | "voiceover script" | `voiceover.md` (`voiceover-script`) |
| 6 | records in CapCut, video into `raw/` | |
| 7 | exports subtitles to `voiceover.srt` | |
| 8 | "edit plan" | `edit.md`; missing visuals get new IDs (`edit-plan`) |
| 9 | edits in CapCut | |

- Any stage can be revisited: "make F18" after editing is normal.
- State comes only from files and git: markers, which files exist, commit messages. Keep no other state.
- "What's next for EP01?" → check files and markers and answer from the table.

## Style

Before producing anything, read `style.md`: unit-level first, then project-level. The unit file overrides the project file. If neither exists, use each skill's defaults.
