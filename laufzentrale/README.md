# Laufzentrale

Lauf-Dashboard als Claude-Artefakt: https://claude.ai/artifact/Si9LrtxufGk51tpDwVEijX

Übernommen aus der veröffentlichten Version `1792596538-9d1f` (Stand 2026-10-21).

## Dateien

- `index.html` – die Hauptseite (Quelltext ohne das beim Veröffentlichen ergänzte HTML-Gerüst). Ansichten: Heute, Aktivitäten, Plan, Rennen, RunPotential.
- `runpotential/index.html` – eigenständige Unterseite, wird in der Ansicht „RunPotential“ per `<iframe>` geladen.
- `capabilities.json` – die beim Veröffentlichen hinterlegten Fähigkeiten: `db`, `user`, `sample` sowie MCP-Zugriff auf Coros (Aktivitäten, Schlaf, HRV, Erholung, Trainingsplan, Workouts anlegen) und Parallel Search (`web_search`, `web_fetch`).

## Veröffentlichen

Neu veröffentlichen mit dem Artifact-Tool auf dieselbe URL: `file_path` = `laufzentrale/index.html`, `files` = `{"runpotential/index.html": "laufzentrale/runpotential/index.html"}`. Fähigkeiten weglassen, damit die hinterlegten erhalten bleiben.
