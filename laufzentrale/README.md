# Laufzentrale

Lauf-Dashboard als Claude-Artefakt: https://claude.ai/artifact/Si9LrtxufGk51tpDwVEijX

Stand im Repository = veröffentlichte Artefakt-Version 32 (`1794225226-fa25`, 09.11.2026): KI-Analyse gelaufener Rennen (Ziel, Prognose, frühere Ausgaben, Plan, kommende Rennen); Lauf am Renntag wird erst nach Rückfrage als Ergebnis übernommen; Zurück-Taste schließt erst Fenster, dann vorheriger Reiter.

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

## HTML-Datei und APK

Gibt es für die Laufzentrale bewusst nicht (Entscheidung vom 08.11.2026, siehe `docs/LIESMICH-Entscheidungen.md`): Die App lebt von KI und Coros-Zugriff über claude.ai. Nach Änderungen nur das Artefakt veröffentlichen; ein HTML/APK-Angebot entfällt.
