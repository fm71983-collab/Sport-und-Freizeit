# Laufzentrale

Lauf-Dashboard als Claude-Artefakt: https://claude.ai/artifact/Si9LrtxufGk51tpDwVEijX

Stand im Repository = veröffentlichte Artefakt-Version 29 (`1793702091-2382`, 03.11.2026): Zurück-Taste schließt erst offene Fenster, dann geht sie zum vorherigen Reiter.

Herkunft: Export aus `fm71983-collab/claude-verbrauch`, Branch `ccr-3bbca5d6-a27vf2`; die drei Commits wurden mit `git am` samt Verlauf übernommen.

## Dateien

- `index.html` – die Hauptseite (Quelltext ohne das beim Veröffentlichen ergänzte HTML-Gerüst). Ansichten: Heute, Aktivitäten, Plan, Rennen, RunPotential.
- `runpotential/index.html` – eigenständige Unterseite, wird in der Ansicht „RunPotential“ per `<iframe>` geladen.
- `capabilities.json` – die beim Veröffentlichen hinterlegten Fähigkeiten: `db`, `user`, `sample` sowie MCP-Zugriff auf Coros (Aktivitäten, Schlaf, HRV, Erholung, Trainingsplan, Workouts anlegen) und Parallel Search (`web_search`, `web_fetch`).
- `docs/LIESMICH-Entscheidungen.md` – Entscheidungen und Verlauf der bisherigen Sitzung.
- `docs/herkunft-git/` – Commit-Nachrichten, Dateiänderungen und Patches aus dem Ursprungs-Repository.
- `docs/SHA256SUMS-export.txt` – Prüfsummen des Exportpakets.
- `tests/` – Mock der Claude-Laufzeit (`mock.js`), Playwright-Testskripte (`run.js`, `run2.js`), Screenshots PC/Handy, Beispiel-Prompts.

## Veröffentlichen

Neu veröffentlichen mit dem Artifact-Tool auf dieselbe URL (`url` = obiger Link): `file_path` = `laufzentrale/index.html`, `files` = `{"runpotential/index.html": "laufzentrale/runpotential/index.html"}`. Fähigkeiten weglassen, damit die hinterlegten erhalten bleiben.

## Standard

Die Laufzentrale ist eine bestehende App: Der Entwicklungsstandard 1.1 (`../docs/ENTWICKLUNGSSTANDARD.md`) wird erst bei einer ausdrücklich beauftragten Überarbeitung eingearbeitet.
