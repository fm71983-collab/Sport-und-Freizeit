# Laufzentrale – Export dieser Sitzung

Stand: 03.11.2026 · Repository `fm71983-collab/claude-verbrauch`, Branch `ccr-3bbca5d6-a27vf2`
Artefakt: https://claude.ai/artifact/Si9LrtxufGk51tpDwVEijX

## Inhalt des Pakets

| Pfad | Inhalt |
|---|---|
| `laufzentrale/index.html` | Hauptseite (Quelltext ohne das beim Veröffentlichen ergänzte HTML-Gerüst), Stand Artefakt-Version 28 |
| `laufzentrale/runpotential/index.html` | RunPotential-Unterseite, unverändert übernommen |
| `laufzentrale/capabilities.json` | hinterlegte Fähigkeiten: db, user, sample, MCP Coros (12 Werkzeuge), Parallel Search (web_search, web_fetch) |
| `laufzentrale/README.md` | Dateien und Anleitung zum Neuveröffentlichen |
| `CLAUDE.md` | Projektanweisungen (PC und Handy parallel, Fokus Artefakt, HTML/APK nur auf Anweisung) |
| `git/commits.txt` | vollständige Commit-Nachrichten mit Hashes und Co-Author-/Session-Zeilen |
| `git/dateiaenderungen.txt` | geänderte Dateien je Commit |
| `git/patches/*.patch` | die drei Commits dieser Sitzung als Patches (`git am` einspielbar) |
| `tests/` | Mock der Claude-Laufzeit (`mock.js`), Testskripte (`run.js`, `run2.js`), Screenshots PC/Handy, Beispiel-Prompts der KI-Analyse |
| `SHA256SUMS.txt` | Prüfsummen aller Dateien |

## Verlauf und Versionen

| Schritt | Commit | Artefakt-Version |
|---|---|---|
| Artefakt ins Repository übernommen (Basis: Version 1792596538-9d1f vom 21.10.2026) | 67b4dc3 | – |
| KI-Analyse der letzten Einheit auf der Startseite | 2eb8cb5 | 27 (1793257254-65af) |
| Kontext-Auswahl als Kacheln, RunPotential nahtlos | b2a0b9b | 28 (1793257844-3335) |

Der Basis-Commit des Projekts davor: f5e4633 (Projektanweisungen).

## Entscheidungen

### Übernahme
- Quelltext ohne das automatische Publish-Gerüst (`<!doctype>…<body>`) gespeichert, damit die Datei direkt wieder veröffentlicht werden kann.
- Neuveröffentlichen immer auf dieselbe URL, Fähigkeiten nicht mitgeben, damit die hinterlegten erhalten bleiben.
- RunPotential-Unterseite bleibt unverändert; alle Anpassungen kommen aus der Laufzentrale (die Verkaufsversion bleibt unberührt).

### KI-Analyse der letzten Einheit (Startseite)
- Platz: eigenes Panel direkt unter der Wochenleiste auf „Heute“.
- „Letzte Einheit“ = jüngste Aktivität mit mindestens 5 Minuten oder 1 km, egal welche Sportart.
- Zwei Arten: **Einzelanalyse** (Pacing, Splits, Puls und Zonen, Drift, Höhenmeter, Abgleich mit dem Plan des Tages, ähnliche Läufe; Gliederung Fazit/Gut/Auffällig/Tipp, max. 170 Wörter) und **Im Kontext** (Gliederung Fazit/Einordnung/Auffällig/Nächste Tage, max. 230 Wörter, zusätzlich Bereitschaft und Coros-Leistungswerte von heute).
- Kontexte frei kombinierbar: rollierende Woche (7 Tage bis zur Einheit, Belastung, HRV), Trainingsplan (Phase, Planerfüllung, Wochenumfänge, 14 Tage danach), letzte 3 Monate (12 Wochen Umfang, Tempo/Puls je Monat, Läufe ab 18 km), Ziele & Rennen (Vorhaben, Zielzeit, Prognose, Chance; optionale Rennen markiert). Voreinstellung: Woche, Plan, Ziele.
- Auswahl wird pro Gerät gemerkt (localStorage `lz-ana`).
- Ergebnisse im Datenspeicher, Sammlung `analyses`, Schlüssel `<labelId>_single` bzw. `<labelId>_ctx-<kontexte>`; so überlebt eine Analyse Neuladen und gilt geräteübergreifend. „Neu analysieren“ überschreibt.
- Modellstufe „default“, Antwort wird live gestreamt.

### Kontext-Auswahl neu gestaltet
- Statt Pillen gleich große Kacheln mit Häkchen und Kurzbeschreibung; 4 Spalten am PC, 2 × 2 ab 860 px Breite abwärts.

### RunPotential-Einbindung
- Profil wird automatisch aus Coros übernommen (Rennergebnisse im Modell, Alter, Gewicht, Geschlecht, Ø Wochenumfang 4 Wochen, längster Lauf 6 Wochen) und per `loadProfile()` ohne Neuladen eingespielt.
- Vergleich nach Inhalt (`rpSig`), weil RunPotential beim Speichern neu formatiert.
- Eigene Änderungen in RunPotential werden nicht überschrieben; Statuszeile zeigt dann „Eigene Werte aktiv“ mit Knopf „Mit Coros abgleichen“.
- App wird im Hintergrund vorgeladen, sobald Daten da sind, und erst nach dem Einfärben eingeblendet (kein weißes Aufblitzen).
- App füllt den Bildschirm bis zur Tab-Leiste; auf dem Handy randlos.
- Eigener RunPotential-Kopf ausgeblendet, Schrift und Farben der Laufzentrale übernommen (auch beim Look-Wechsel); einzelne Werkzeug-Schaltfläche (z. B. nur „Profil“) wird ausgeblendet.

### Projektregeln (aus CLAUDE.md)
- Jede Änderung für PC und Handy zugleich, in beiden getestet.
- HTML-Dateien und APKs nur auf ausdrückliche Anweisung. In dieser Sitzung wurde nichts davon gebaut oder verschickt (Antwort des Nutzers: „Später“).

## Tests
- Chromium/Playwright mit simulierten Coros-Daten und Platzhalter-Antworten statt echter Claude-Antworten; PC 1280 × 900 und Handy 390 × 844.
- Geprüft: keine Skriptfehler, kein seitliches Scrollen, beide Analyse-Arten, Speichern im Datenspeicher, automatischer Profilabgleich, Erkennen eigener Änderungen, „Mit Coros abgleichen“.
- Nicht geprüft: echte Coros-Daten und echte Claude-Antworten; das Ausblenden der einzelnen Werkzeug-Schaltfläche (nach dem letzten Testlauf ergänzt).

## Offen
- HTML-Datei und APK aktualisieren, sobald gewünscht.
