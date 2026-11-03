# Verbindlicher Entwicklungsstandard für Apps, HTML-Anwendungen und digitale Artefakte

**Version:** 1.1  
**Stand:** 02.11.2026  
**Geltungsbereich:** Alle neu entwickelten und künftig überarbeiteten Apps, APKs, HTML-Dateien, PWAs, interaktiven Präsentationen und sonstigen digitalen Artefakte.

---

# 1. Ziel und Grundprinzipien

Alle Anwendungen sollen von der ersten Version an professionell gestaltet, auf unterschiedlichen Bildschirmgrößen zuverlässig nutzbar und sicher aktualisierbar sein.

Dabei gelten fünf übergreifende Grundprinzipien:

1. **Responsive Design:** Die Darstellung passt sich an Gerät, Bildschirmgröße, Ausrichtung und verfügbaren Platz an.
2. **Vollbildfunktion:** HTML-Anwendungen und interaktive Artefakte erhalten eine gut erreichbare Funktion zur optimalen Nutzung der Bildschirmfläche.
3. **Updatefähigkeit und Datenerhalt:** Anwendungen werden bereits ab Version 1.0 so aufgebaut, dass spätere Versionen über bestehende Installationen aktualisiert werden können, ohne eine Deinstallation zu verlangen oder Benutzerdaten zu verlieren.
4. **Bestandsschutz:** Bestehende Anwendungen und Artefakte bleiben unverändert, bis eine Überarbeitung ausdrücklich beauftragt wird.
5. **Intelligenter Subagenteneinsatz:** Claude Code prüft selbstständig, wann spezialisierte Subagenten die Qualität, Geschwindigkeit oder Zuverlässigkeit verbessern können.

---

# 2. Responsive Design und Bildschirmoptimierung

## 2.1 Unterstützte Geräte und Ansichten

Jede neue Anwendung muss für folgende Nutzungssituationen geplant und getestet werden:

- Smartphones in Hoch- und Querformat
- Tablets und iPads in Hoch- und Querformat
- Notebooks mit unterschiedlichen Auflösungen
- Desktop-PCs und große Monitore
- Unterschiedliche Fenstergrößen
- Browser-Zoom und Betriebssystem-Skalierung, soweit technisch relevant

Die Oberfläche darf nicht ausschließlich für eine einzelne Bildschirmauflösung entworfen werden.

## 2.2 Layout-Regeln

Verbindliche technische Leitlinien:

- Mobile-First-Ansatz, sofern der Anwendungstyp keine andere Priorisierung erfordert.
- Flexible Layouts mit CSS Grid und Flexbox.
- Flexible Container statt unnötig festgelegter Breiten.
- Dynamische Höhen statt starrer Viewport-Höhen.
- Skalierbare Schriftgrößen, beispielsweise mit `clamp()`.
- Sinnvolle Breakpoints anhand des Inhalts und nicht nur anhand bestimmter Gerätemodelle.
- Berücksichtigung von Safe Areas und mobilen Browserleisten.
- Verwendung geeigneter dynamischer Viewport-Einheiten wie `dvh`, wenn unterstützt.
- Keine unbeabsichtigten horizontalen Scrollleisten.
- Keine abgeschnittenen Inhalte oder Bedienelemente.
- Keine unnötig verschachtelten Scrollbereiche.

Feste Pixelwerte sind dort zulässig, wo sie für kleine, klar definierte Elemente sinnvoll sind. Sie dürfen jedoch nicht das gesamte Layout unflexibel machen.

## 2.3 Navigation und Bedienelemente

- Navigation muss sich an die verfügbare Bildschirmbreite anpassen.
- Touch-Bedienelemente müssen ausreichend groß und mit genügend Abstand angeordnet sein.
- Dialoge, Menüs und Pop-ups müssen innerhalb des sichtbaren Bereichs bleiben.
- Tabellen müssen auf kleinen Displays sinnvoll umbrochen, horizontal scrollbar oder in eine geeignete Kartenansicht überführt werden.
- Formulare müssen auch bei geringer Bildschirmhöhe vollständig bedienbar bleiben.
- Wichtige Funktionen dürfen nicht ausschließlich über Hover erreichbar sein.
- Tastatur-, Maus- und Touch-Bedienung sind entsprechend dem Einsatzzweck zu berücksichtigen.

---

# 3. Verbindliche Vollbildfunktion

## 3.1 Geltungsbereich

Jede neue HTML-Anwendung, HTML-Datei mit interaktiven Funktionen, browserbasierte Anwendung, interaktive Präsentation und jedes vergleichbare HTML-Artefakt erhält standardmäßig eine gut sichtbare Vollbildfunktion.

Bei nativen Apps und APKs ist eine geeignete immersive bzw. bildschirmfüllende Darstellung vorzusehen, sofern sie zum Anwendungstyp passt.

## 3.2 Bedienung

- Ein gut sichtbarer Vollbild-Button wird standardmäßig im oberen rechten Bereich der Anwendung platziert.
- Der Button verwendet ein verständliches Vollbild-Symbol.
- Nach Aktivierung wechselt das Symbol in eine passende Beenden-/Verkleinern-Darstellung.
- Der aktuelle Vollbildzustand wird korrekt erkannt und angezeigt.
- Die Escape-Taste beendet den Vollbildmodus, sofern die Plattform dies unterstützt.
- Vollbild darf nur durch eine bewusste Nutzeraktion aktiviert werden.
- Wenn Vollbild nicht unterstützt wird oder abgelehnt wird, erhält der Nutzer eine verständliche Rückmeldung oder eine geeignete Alternative.

## 3.3 Zwei Darstellungsstufen

**Bildschirmfüllende Ansicht**

Die Anwendung nutzt den gesamten verfügbaren Browser- oder App-Bereich. Überflüssige Ränder und nicht benötigte Rahmenelemente werden reduziert. Diese Ansicht muss auch dann sinnvoll funktionieren, wenn echter Vollbildmodus nicht verfügbar ist.

**Echter Vollbildmodus**

Wenn die Plattform es erlaubt, wird die Fullscreen API verwendet, insbesondere `requestFullscreen()` und `exitFullscreen()`. Der Vollbildzustand ist über die entsprechenden Browser-Ereignisse zu synchronisieren.

## 3.4 Neuberechnung der Oberfläche

Nach dem Wechsel in den Vollbildmodus oder zurück muss die Anwendung ihre Darstellung neu berechnen. Das betrifft insbesondere:

- Diagramme und Charts
- Motion Graphics und Animationen
- Simulatoren und interaktive Arbeitsflächen
- Karten und grafische Darstellungen
- Canvas- und SVG-Inhalte
- Mehrspaltige Layouts
- Tabellen und Datenansichten

Inhalte dürfen durch den Wechsel weder abgeschnitten noch verzerrt werden.

## 3.5 Plattformgrenzen

Die Fullscreen API ist nicht auf allen Browsern, iOS-Versionen und WebViews identisch verfügbar. Die Anwendung muss diese Einschränkungen erkennen und eine möglichst gute bildschirmfüllende Alternative anbieten.

Es darf keine uneingeschränkte Vollbildunterstützung behauptet werden, wenn die jeweilige Plattform sie nicht bereitstellt.

---

# 4. Einheitliches Visual Design System

Neue Projekte sollen ein wiederverwendbares, aber modular eingebundenes Gestaltungssystem verwenden.

Es umfasst nach Bedarf:

- Farb- und Kontrastsystem
- Typografie und Schriftgrößen
- Abstände und Raster
- Buttons und Bedienelemente
- Karten und Inhaltscontainer
- Navigation und Seitenleisten
- Dialoge und Pop-ups
- Formulare und Tabellen
- Diagramme und Dashboards
- Dark Mode und Light Mode
- Animationen und Motion Graphics
- Touch- und Mausbedienung
- Fokuszustände und Tastaturbedienbarkeit

Die Gestaltung muss zum Zweck und zur Zielgruppe der jeweiligen Anwendung passen. Nicht jede App benötigt denselben visuellen Stil. Die zugrunde liegenden Qualitäts- und Bedienprinzipien sollen jedoch einheitlich sein.

Das Designsystem soll modular und wiederverwendbar sein. Einzelne Anwendungen sollen technisch unabhängig bleiben und nicht durch eine unnötige zentrale Laufzeitabhängigkeit miteinander gekoppelt werden.

---

# 5. Signatur, Identität und Updatefähigkeit ab Version 1.0

## 5.1 Grundanforderung

Jede neu entwickelte installierbare Anwendung muss bereits ab der ersten veröffentlichten Version für sichere In-place-Updates vorbereitet sein.

Spätere Versionen müssen über die vorhandene Installation installiert bzw. aktualisiert werden können, ohne dass zuvor eine Deinstallation erforderlich ist. Gespeicherte Benutzerdaten und Einstellungen müssen erhalten bleiben.

Die konkrete Umsetzung richtet sich nach dem jeweiligen Anwendungstyp.

## 5.2 Android-Apps und APKs

Für Android gelten insbesondere folgende Anforderungen:

- Eine eindeutige und dauerhaft gleichbleibende `applicationId` bzw. Paketkennung wird bereits in Version 1.0 festgelegt.
- Alle regulären Folgeversionen werden mit demselben Signaturschlüssel signiert.
- Der Signaturschlüssel wird sicher und getrennt vom Quellcode aufbewahrt.
- Es werden geeignete Sicherungen des Signaturschlüssels erstellt.
- Der `versionCode` wird bei jeder Veröffentlichung erhöht.
- Die sichtbare Versionsnummer (`versionName`) wird nachvollziehbar gepflegt.
- Updates werden über die vorhandene Installation getestet.
- Ein Wechsel des Paketnamens oder Signaturschlüssels darf nicht unbeabsichtigt erfolgen.
- Eine Neuinstallation darf nicht als regulärer Updateweg vorausgesetzt werden.

Ein Signaturschlüsselverlust oder eine Änderung der Signatur kann verhindern, dass eine neue APK als Update über die bestehende Installation installiert wird. Schlüsselverwaltung und Sicherung sind daher zwingende Bestandteile des Projekts.

## 5.3 HTML-Anwendungen und Progressive Web Apps

HTML-Dateien besitzen keine APK-artige digitale App-Signatur. Für sie gelten stattdessen folgende Regeln:

- Die Speicher- und Anwendungsidentität muss stabil bleiben.
- Bei Webanwendungen und PWAs muss der Web-Origin dauerhaft gleich bleiben, soweit die Architektur dies ermöglicht.
- LocalStorage, IndexedDB und andere dauerhafte Speicher dürfen bei Updates nicht unbeabsichtigt gelöscht oder überschrieben werden.
- Service Worker und Cache-Versionen müssen kontrolliert aktualisiert werden.
- Alte Caches dürfen erst entfernt werden, wenn dies sicher ist und keine benötigten Nutzerdaten enthält.
- Updates müssen einen definierten Aktivierungs- und Aktualisierungsprozess besitzen.
- Bei lokal geöffneten HTML-Dateien ist zu beachten, dass Browser Speicher je nach Datei-URL, Browser und Betriebssystem unterschiedlich behandeln können. Für dauerhafte Datenhaltung ist deshalb eine bewusst gewählte und getestete Speicherstrategie erforderlich.

Ein Austausch einer einzelnen HTML-Datei darf nicht ungeprüft dazu führen, dass lokale Datenbestände verloren gehen.

## 5.4 Windows-Anwendungen

Für installierbare Windows-Anwendungen gelten je nach Technologie:

- Dauerhafte Produkt- und Paketidentität
- Signierte Installations- und Updatepakete, sofern vorgesehen
- Gleichbleibende Identität über Folgeversionen
- Updatefähiger Installer
- Trennung von Programmdateien und Benutzerdaten
- Aktualisierung ohne unnötige Deinstallation
- Prüfung der Datenübernahme nach dem Update

---

# 6. Datentrennung, Migration und Wiederherstellung

## 6.1 Trennung von Programm und Daten

Benutzerdaten dürfen nicht ausschließlich in einem Verzeichnis liegen, das beim Austausch oder bei der Aktualisierung der Programmdateien gelöscht wird.

Die Anwendung muss Programmdateien, Konfigurationen und Nutzerdaten nachvollziehbar voneinander trennen.

## 6.2 Datenbankversionierung

- Datenbankschemata erhalten eine eigene Versionsnummer.
- Änderungen am Datenmodell werden über definierte Migrationen umgesetzt.
- Migrationen müssen nachvollziehbar, reproduzierbar und testbar sein.
- Bereits vorhandene Daten müssen erhalten und korrekt übernommen werden.
- Migrationen dürfen nicht stillschweigend Daten verwerfen.

## 6.3 Sicherung und Fehlerbehandlung

Vor kritischen Datenmigrationen ist eine geeignete Sicherung zu erstellen, sofern die Datenhaltung dies ermöglicht.

Bei einem fehlgeschlagenen Update muss die Anwendung einen sicheren Zustand bewahren. Wenn technisch möglich, sind Wiederherstellung oder Rückkehr zur vorherigen funktionsfähigen Version vorzusehen.

Ein Rollback der Programmdateien allein genügt nicht, wenn das Datenbankschema bereits irreversibel verändert wurde. Deshalb müssen Migrationsstrategie und Wiederherstellung zusammen geplant werden.

## 6.4 Offlinefähigkeit

Bei offlinefähigen Anwendungen müssen Update- und Sicherungsverfahren ebenfalls ohne Cloud-Zwang funktionieren. Daten dürfen nicht für ein Update an einen externen Server übertragen werden, sofern dies nicht ausdrücklich vorgesehen und freigegeben ist.

---

# 7. Bestandsschutz für bereits vorhandene Artefakte

## 7.1 Unveränderte Bestandsversionen

Alle bereits existierenden HTML-Dateien, Artefakte, Apps und APKs bleiben zunächst unverändert.

Es erfolgen keine ungefragten nachträglichen Änderungen, Umgestaltungen, Neuinstallationen oder Überschreibungen.

## 7.2 Übernahme bei der nächsten Überarbeitung

Wenn ein bestehendes Artefakt ausdrücklich überarbeitet, korrigiert, erweitert oder in einer neuen Version veröffentlicht wird, sollen die jeweils passenden neuen Standards integriert werden:

- Responsive Design
- Optimierung für Hoch- und Querformat
- Vollbildfunktion bei HTML-Anwendungen und interaktiven Artefakten
- Optimale Nutzung der verfügbaren Bildschirmfläche
- Modernisierung der Gestaltung, soweit gewünscht
- Prüfung der Updatefähigkeit, soweit der Anwendungstyp dies unterstützt
- Datenerhalt und sichere Datenmigration

Die Integration darf den Umfang eines kleinen Korrekturauftrags nicht unkontrolliert ausweiten. Bei größeren notwendigen Architekturänderungen sind Auswirkungen und Aufwand vorab transparent zu machen.

## 7.3 Originalversion und neue Version

- Die bisherige Version bleibt als Referenz erhalten.
- Neue Versionen erhalten eindeutige Versionsnummern.
- Änderungen werden dokumentiert.
- Bestehende Funktionen müssen erhalten bleiben, sofern ihre Änderung nicht ausdrücklich beauftragt wurde.
- Bei größeren Änderungen werden Vorher-/Nachher-Screenshots und ein Funktionstest erstellt.

---

# 8. Visuelle und technische Qualitätssicherung

## 8.1 Testmatrix

Mindestens folgende Viewports sind als Ausgangspunkt zu prüfen:

| Gerätetyp | Testgröße |
|---|---:|
| Smartphone klein | 360 × 800 |
| Smartphone groß | 390 × 844 |
| Tablet Hochformat | 768 × 1024 |
| Tablet Querformat | 1024 × 768 |
| Notebook | 1366 × 768 |
| Desktop | 1920 × 1080 |
| Großer Monitor | 2560 × 1440 |

Die tatsächlichen Tests müssen bei Bedarf um weitere relevante Größen ergänzt werden.

## 8.2 Responsive Prüfpunkte

- Keine abgeschnittenen Inhalte
- Keine unbeabsichtigten horizontalen Scrollleisten
- Alle Schaltflächen erreichbar und bedienbar
- Dialoge bleiben im sichtbaren Bereich
- Texte bleiben lesbar
- Formulare funktionieren auch bei geringer Bildschirmhöhe
- Navigation funktioniert in allen Ansichten
- Keine unbeabsichtigten Überlagerungen
- Hoch- und Querformat funktionieren
- Touch-Bedienung ist angemessen

## 8.3 Vollbild-Prüfpunkte

- Vollbild-Button ist sichtbar und verständlich.
- Aktivieren und Beenden funktionieren.
- Der Zustand wird korrekt angezeigt.
- Escape funktioniert, sofern unterstützt.
- Die Oberfläche passt sich nach Größenänderungen an.
- Diagramme, Animationen und Arbeitsflächen werden neu berechnet.
- Fallbacks funktionieren auf Plattformen ohne echte Vollbildunterstützung.

## 8.4 Update-Prüfpunkte

Für installierbare Anwendungen:

- Update über die vorhandene Installation erfolgreich
- Identität und Signatur unverändert
- Versionsnummer korrekt erhöht
- Benutzerdaten und Einstellungen erhalten
- Datenmigration erfolgreich
- Fehlerfall getestet
- Sicherung und Wiederherstellung geprüft

Für HTML-Anwendungen und PWAs:

- Aktualisierung ohne unbeabsichtigten Datenverlust
- Speicheridentität und Origin geprüft
- Service-Worker- und Cache-Aktualisierung getestet
- Vorhandene Nutzerdaten nach dem Update lesbar
- Verhalten bei unterbrochenem Update geprüft, soweit relevant

## 8.5 Testwerkzeuge

Je nach Technologie sollen geeignete Werkzeuge eingesetzt werden, beispielsweise:

- Playwright für automatisierte Browser- und Viewport-Tests
- Screenshots für visuelle Vergleiche
- Android Emulator und reale Android-Geräte für APK-Tests
- Geeignete iPad-/iOS-Testumgebungen für iPad-Anwendungen
- Automatisierte Tests für Datenmigrationen und Updateabläufe

Ein erfolgreicher Build allein gilt nicht als Nachweis für ein korrektes Layout oder ein sicheres Update.

---

# 9. Versions- und Releasekonzept

Jede Anwendung erhält ab Version 1.0 eine nachvollziehbare Versionsverwaltung.

Empfohlenes Schema:

- `MAJOR`: grundlegende, gegebenenfalls inkompatible Änderungen
- `MINOR`: neue Funktionen bei grundsätzlicher Kompatibilität
- `PATCH`: Fehlerkorrekturen und kleinere Verbesserungen

Beispiel:

- `1.0.0` – erste stabile Version
- `1.1.0` – neue Funktionen
- `1.1.1` – Fehlerkorrektur
- `2.0.0` – grundlegende Weiterentwicklung

Zusätzlich sind plattformspezifische Buildnummern zu pflegen, beispielsweise der Android-`versionCode`.

Jedes Release soll mindestens enthalten:

- Versionsnummer und Veröffentlichungsdatum
- Änderungsübersicht
- Technische Hinweise zu Migrationen
- Hinweise zu bekannten Einschränkungen
- Testergebnis für die relevanten Geräte und Plattformen

---

# 10. Intelligenter Einsatz von Subagenten

## 10.1 Grundsatz

Claude Code soll bei jeder Aufgabe eigenständig prüfen, ob Subagenten einen sinnvollen Mehrwert für Qualität, Geschwindigkeit, Prüftiefe oder parallele Bearbeitung bieten.

Wenn Subagenten hilfreich sind, soll Claude sie aktiv und proaktiv einsetzen. Der Einsatz ist nicht auf ausdrückliche Aufforderung des Nutzers beschränkt.

Subagenten sind insbesondere dann sinnvoll, wenn Teilaufgaben unabhängig voneinander bearbeitet werden können oder eine zusätzliche, unabhängige Prüfung die Zuverlässigkeit erhöht.

## 10.2 Geeignete Einsatzbereiche

Je nach Projekt und Aufgabe kommen insbesondere folgende Rollen infrage:

- **Research-Agent:** Recherche, Dokumentationsprüfung, Technologie- und Bibliotheksvergleich
- **Architektur-Agent:** Prüfung von Architektur, Modularität, Erweiterbarkeit und Wartbarkeit
- **UI/UX-Agent:** Gestaltung, Nutzerführung, Verständlichkeit und Bedienbarkeit
- **Responsive-/Layout-Agent:** Prüfung unterschiedlicher Viewports, Hoch- und Querformat sowie Vollbilddarstellung
- **Entwicklungs-Agent:** klar abgegrenzte Implementierungsaufgaben
- **Security-/Privacy-Agent:** Datenschutz, lokale Datenhaltung, Berechtigungen, Angriffsflächen und sichere Konfiguration
- **Testing-Agent:** Testplanung, automatisierte Tests, Regressionstests und Fehleranalyse
- **Code-Review-Agent:** unabhängige Prüfung von Codequalität, Robustheit und möglichen Seiteneffekten
- **Release-/Update-Agent:** Prüfung von Paketidentität, Signatur, Versionierung, Migration und Updatefähigkeit

Die Rollen sind Beispiele. Claude soll nur die Agenten einsetzen, die für die konkrete Aufgabe tatsächlich nützlich sind.

## 10.3 Arbeitsweise und Verantwortlichkeiten

- Aufgaben in klar abgegrenzte, überprüfbare Teilaufträge zerlegen.
- Unabhängige Aufgaben bei erkennbarem Nutzen parallel vergeben.
- Jedem Subagenten Ziel, Kontext, Grenzen und erwartetes Ergebnis mitteilen.
- Bestehende Dateien und Projektentscheidungen als verbindliche Rahmenbedingungen angeben.
- Subagenten um konkrete Befunde, Risiken, Empfehlungen oder überprüfbare Änderungen bitten.
- Ergebnisse auf Vollständigkeit, Plausibilität und Widersprüche prüfen.
- Überschneidungen und Konflikte zwischen Agentenergebnissen auflösen.
- Änderungen der Subagenten in die Gesamtarchitektur integrieren und aufeinander abstimmen.
- Die finale Anwendung, das Artefakt oder Release zentral zusammenführen und validieren.

Der Hauptagent bleibt jederzeit für Koordination, Architektur-Konsistenz, Integration, Nutzeranforderungen und das Endergebnis verantwortlich. Er darf die Verantwortung nicht an Subagenten delegieren.

## 10.4 Qualitätssicherung

Bei komplexeren Projekten sollen Subagenten gezielt unabhängige Prüfungen übernehmen, beispielsweise:

- Prüfung der Responsive-Darstellung und Vollbildfunktion
- Sicherheits- und Datenschutzprüfung
- Überprüfung von Datenmigration und Datenerhalt
- Prüfung der Update- und Installationsfähigkeit
- Regressionstests bestehender Funktionen
- Code-Review nach größeren Implementierungen

Ein Subagentenbericht gilt nicht automatisch als erfolgreicher Test. Der Hauptagent muss relevante Ergebnisse nachvollziehen und erforderliche Tests selbst ausführen oder deren tatsächliche Ausführung verifizieren.

## 10.5 Wirtschaftlicher Einsatz

Subagenten sollen nicht inflationär eingesetzt werden.

- Bei einfachen, klaren Aufgaben arbeitet Claude direkt.
- Agenten werden eingesetzt, wenn ihr erwarteter Nutzen den Koordinations- und Tokenaufwand rechtfertigt.
- Teilaufträge sollen eng begrenzt sein und keine unnötigen Wiederholungen erzeugen.
- Ergebnisse sollen kompakt und entscheidungsorientiert zurückgemeldet werden.
- Wenn die Umgebung eine Auswahl unterschiedlicher Modelle oder Kostenstufen erlaubt, sollen geeignete kostengünstige Modelle für einfache Teilaufgaben genutzt werden, ohne die erforderliche Qualität zu gefährden.
- Keine unnötigen Agentenaufrufe allein zur Erfüllung einer formalen Vorgabe.

## 10.6 Verbindliche Entscheidungsregel

Claude Code soll zu Beginn jeder nichttrivialen Aufgabe kurz prüfen:

1. Gibt es unabhängige Teilaufgaben, die parallel bearbeitet werden können?
2. Ist eine unabhängige fachliche, technische oder sicherheitsbezogene Prüfung sinnvoll?
3. Verbessert ein Subagent voraussichtlich Qualität, Geschwindigkeit oder Zuverlässigkeit?
4. Ist der zusätzliche Aufwand angemessen?

Wenn mindestens ein sinnvoller Mehrwert erkennbar ist, soll Claude geeignete Subagenten einsetzen. Bei trivialen Aufgaben oder unverhältnismäßigem Koordinationsaufwand soll Claude ohne Subagenten arbeiten.

---

# 11. Verbindliche Anforderungen an Claude Code

Der folgende Auftrag ist bei neuen Projekten in den jeweiligen Masterprompt aufzunehmen:

> **Verbindlicher Visual-, Fullscreen-, Signatur-, Update- und Subagenten-Standard**
>
> Entwickle die Anwendung von Beginn an responsiv und updatefähig. Berücksichtige die vorgesehenen Geräte und Bildschirmgrößen. Vermeide starre Layouts, abgeschnittene Inhalte und unzugängliche Bedienelemente. HTML-Anwendungen und interaktive Artefakte erhalten standardmäßig einen gut sichtbaren Vollbild-Button mit echtem Vollbildmodus, sofern die Plattform dies unterstützt, sowie einen geeigneten Fallback.
>
> Lege bereits in Version 1.0 eine dauerhafte Anwendungsidentität und eine sichere Versionsstrategie fest. Bei Android müssen Paketkennung und Signaturschlüssel über reguläre Folgeversionen hinweg gleich bleiben; Versionscodes sind korrekt zu erhöhen. Bei anderen Plattformen sind die jeweiligen Mechanismen für stabile Identität und sichere Updates zu verwenden.
>
> Trenne Programmdateien und Benutzerdaten. Versioniere Datenbankschemata und implementiere kontrollierte Migrationen. Sichere Daten vor kritischen Migrationen und verhindere unbeabsichtigten Datenverlust. Teste Updates über vorhandene Installationen, ohne vorherige Deinstallation.
>
> Prüfe bei jeder nichttrivialen Aufgabe eigenständig, ob Subagenten einen Mehrwert bieten. Setze sie bei Bedarf proaktiv für klar abgegrenzte Aufgaben wie Recherche, Architekturprüfung, UI/UX, Responsive-Audits, Implementierung, Datenschutz, Sicherheit, Tests und Code-Reviews ein. Vergib konkrete Aufträge und erwarte kompakte, überprüfbare Ergebnisse. Der Hauptagent integriert alle Ergebnisse, löst Widersprüche und verantwortet die finale Validierung. Vermeide unnötige Agentenaufrufe und unverhältnismäßigen Tokenverbrauch.
>
> Führe vor jeder Veröffentlichung geeignete Responsive-, Vollbild-, Funktions-, Update- und Datenerhaltungstests durch. Dokumentiere Versionsnummer, Änderungen, bekannte Einschränkungen und Testergebnisse.
>
> Bestehende Anwendungen dürfen nicht ungefragt verändert oder überschrieben werden. Bei einer ausdrücklich beauftragten Überarbeitung werden die passenden Standards integriert, ohne bestehende Funktionen oder Daten unbeabsichtigt zu beeinträchtigen. Die Originalversion bleibt erhalten.

---

# 12. Abnahme-Checkliste

Eine neue Version gilt erst dann als fertig, wenn die jeweils relevanten Punkte geprüft wurden.

## Gestaltung und Bedienung

- [ ] Responsive Darstellung auf relevanten Bildschirmgrößen
- [ ] Hoch- und Querformat geprüft
- [ ] Keine abgeschnittenen Inhalte
- [ ] Navigation und Bedienelemente funktionieren
- [ ] Vollbildfunktion vorhanden und getestet (bei HTML-Artefakten)
- [ ] Fallback für nicht unterstützte Vollbildfunktionen vorhanden
- [ ] Lesbarkeit und Bedienbarkeit geprüft

## Identität und Updates

- [ ] Dauerhafte Anwendungsidentität festgelegt
- [ ] Signaturstrategie festgelegt (sofern Plattform erforderlich)
- [ ] Signaturschlüssel sicher gesichert (bei signierten Apps)
- [ ] Versionsnummer und Buildnummer korrekt
- [ ] Update über vorhandene Installation getestet
- [ ] Keine Deinstallation als regulärer Updateweg erforderlich

## Daten und Sicherheit

- [ ] Programmdateien und Benutzerdaten getrennt
- [ ] Datenbankschema versioniert
- [ ] Migrationen getestet
- [ ] Datensicherung vor kritischen Migrationen vorgesehen
- [ ] Benutzerdaten und Einstellungen nach Update erhalten
- [ ] Fehler- und Wiederherstellungsweg geprüft

## Subagenten und Arbeitsqualität

- [ ] Bei nichttrivialen Aufgaben geprüft, ob Subagenten sinnvoll sind
- [ ] Geeignete Subagenten bei erkennbarem Mehrwert eingesetzt
- [ ] Teilaufträge klar abgegrenzt und Ergebnisse überprüft
- [ ] Integration und finale Validierung durch den Hauptagenten erfolgt
- [ ] Unnötige Agentenaufrufe vermieden

## Release

- [ ] Originalversion bzw. vorherige Version erhalten
- [ ] Änderungsübersicht erstellt
- [ ] Bekannte Einschränkungen dokumentiert
- [ ] Relevante Tests erfolgreich abgeschlossen

---

# Leitsatz

**Bestehende Artefakte bleiben unangetastet, bis sie ausdrücklich überarbeitet werden. Neue Anwendungen werden von Version 1.0 an responsiv, bildschirmoptimiert, updatefähig und datenerhaltend entwickelt. Claude Code setzt Subagenten selbstständig ein, wenn dadurch ein sinnvoller Qualitäts- oder Effizienzgewinn entsteht. Der Hauptagent verantwortet immer das Gesamtergebnis.**
