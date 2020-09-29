---
title:       Shopware Plugin
description: Lerne das Customer's Canvas Web2Print Plugin für Shopware näher kennen.
permalink:   /guide/base/plugin/
---

{{$page.title}}
================================================================================

Einleitung
--------------------------------------------------------------------------------

Das Plugin dient als Schnittstelle zwischen Deiner Shopware und Deiner
Customer's Canvas Anwendungen. Es kommuniziert sozusagen mit Deinem
Customer's Canvas Server und übersetzt das Ganze für Shopware. Dazu
dient die [Web API] und die [IFrame API], welche beide von Customer's Canvas
bereitgestellt werden.

Du als Plugin Anwender hast dabei den Vorteil einfach gestaltete
Benutzeroberflächen zu verwenden. Diese Benutzeroberflächen erlauben
es Dir schnell zum gewünschten Ergebnis zu gelangen ohne Dich mit 
komplizierten Code auseinander zu setzen - Du Glücks-🍄.

Der Artikel
--------------------------------------------------------------------------------

Deine Hauptbühne bildet der Artikel. Du kannst jeden Shopware Artikel
(den findest Du übrigens unter `Artikel` in Deinem Backend) in ein 
Druckprodukt umwandeln. Wenn Du also einen Artikel erstellst oder einen
bestehenden bearbeitest findest Du unter `Freitext Felder` die entsprechenden
Konfigurationen.

Und wie Du ja vielleicht bereits schon weist kannst Du Dank Shopware
auch problemlos [Artikel Varianten] generieren. Artikel Varianten sind
speziell dann notwendig wenn Dein Produkt in verschiedenen Farben oder
Grössen angeboten werden sollen und natürlich kannst Du für jede Variante
eigene Einstellungen vornehmen. So kannst Du bspw. eine Vorschau eines
blauen T-Shirt für die eine Variante erstellen und eine andere in einer
anderen Farbe usw. Auch der Druckbereich ändert sich eventuell bei verschiedenen
Grössen all das muss dabei immer berücksichtigt werden. Die Verhältnismässigkeit
und Notwendigkeit einer individuellen Einstellung ist dabei Dir überlassen.

Web API
--------------------------------------------------------------------------------

Wie bereits in der Einleitung erwähnt kommuniziert das Plugin mit Deiner
Customer's Canvas Anwendung über die Web API. Dabei sind speziell die 
Plugin Konfigurationen mit dem Sicherheitsschlüssel sowie die Lebensdauer
für Benutzertokens entscheidend.

Der Sicherheitsschlüssel hilft dabei die Erlaubnis der Kommunikation
einzuholen. Es ist zwar auch möglich ohne Sicherheitsschlüssel Customer's
Canvas zu betreiben, aus Sicherheitsgründen wurde jedoch dieser Fall nicht
berücksichtigt und sollte unter keinen Umständen ungeschützt verwendet
werden.

Die Lebensdauer des Benutzertokens ist daher entscheidend da diese für
die Session des Benutzers zuständig ist. In einer solchen Session werden
verschiedene Daten wie bspw. hochgeladene Datein oder ähnliches gespeichert.
Aus Datenschutzgründen sollten diese Dateien jedoch nicht in die falschen
Hände geraten deshalb erlischt die Session nach einer gewissen Zeit.
Standard sind 3600 Sekunden was 1 Stunde entspricht. Danach erhält der
Benutzer einen neuen Wert.

IFrame API
--------------------------------------------------------------------------------

Die IFrame API ist für die Darstellung des Editors verantwortlich. Dabei
ist speziell die Plugin Konfiguration Base URL entscheidend. Diese Konfiguration
setzt die URL zum JavaScript welches für den Editor benötigt wird. Bei
Deiner Installation des Customer's Canvas Servers ist dieses JavaScript
mitdabei und muss vom Plugin angefordert werden.

Lebenszyklus
--------------------------------------------------------------------------------

Sobald ein Artikel als Druckprodukt definiert wurde spielt die Musik
des Plugins. Dabei versuche ich so rudimitär wie möglich die einzelnen
Abläufe des Plugins zu beschreiben ohne dabei zu arg ins Detail zu gehen.

Jeder potenzieller Kunde welcher Deinen Shop aufruft bekommt automatisch ein
**Token** zugewiesen. Dies geschieht unabhängig
von welcher Seite der Kunde aufruft. Dieser Token wird benötigt um den Kunden zu authentifizieren 
                                     und ihm die entsprechenden Daten zur Verfügung zu stellen. Wenn der Wert gespeichert wurde wird
dieser für den definierten Zeitraum verwendet und nicht neu generiert bis 
er wieder erlischt. Ein Beispiel sind die hochgeladenen Dateien welche 
für jeden Kunden separat abgespeichert werden sollten.

Nun möchte der Kunde ein Druckprodukt bestellen und besucht dazu einen
entsprechenden Artikel wobei auch gleich der **Editor** angezeigt wird. 
Doch was geschieht im Hintergrund?

Nun zunächst einmal benötigt der Editor die **JavaScript** Datei für die
IFrame API. Deshalb wird auf allen Seiten die ein Druckprodukt enthalten
(und nur auf Seiten mit einem Druckprodukt) automatisch das JavaScript
eingebunden. Dies geschieht übringens im HTML head (keine Details?!).

Nur durch laden des JavaScripts auf Deinem Server weiss der Editor aber 
immer noch nicht wie der Artikel konfiguriert wurde. Deshalb wird der 
Editor als **jQuery Plugin** (im Plugin) angeboten. Damit können wir mithilfe
von sogenannten HTML Datenattributen arbeiten. Diese Datenattribute sind
zuständig die Daten in unserem JavaScript einzuspeisen und weiterzureichen.
Wir überreichen also die Artikeleigenschaften dem Editor mithilfe von
Attributen. Dann wird die IFrame API angefragt welche den Editor wiederum
in einem dafür vorhergesehenen HTML Element ausgiebt. Klingt doch logisch!

Einfach gesagt ein Ding speisst Daten ein ein anderes Spuckt es an einem
Platzhalter wieder aus.

Wenn in Deinem Artikel **keine Vorschauen** definiert wurden, dann wird
die Schaltfläche «In den Warenkorb» angezeigt. Ein Klick auf diese Schaltfläche
fügt eine neue Position dem Warenkorb hinzu.

Wenn Du nun aber doch eine oder mehrere **Vorschauen** definiert hast, dann wird dem
Kunden ein Button für die Vorschau angezeigt. Die Schaltfläche «In den Warenkorb»
ist dabei ausgegraut und kann nicht ausgewählt werden.

Ein Klick auf die Schaltfläche für die Vorschau blendet den Editor aus
und zeigt eine Miniatur der Vorschau an. Beim klicken auf die Vorschau
wird ein neues Fenster mit der Detailansicht der Vorschau geöffnet. Je 
nach Konfiguration des Artikel enthält diese ein Wasserzeichen.

Bei der Vorschau hat der Kunde auch die Möglichkeit zurück zum Editor
zu wechseln um bspw. Änderungen vorzunehmen. Dabei wird die Vorschau
ausgeblendet und der Editor wieder eingeblendet. Es steht wieder der
Vorschaubutton zur Auswahl.

Beim hinzufügen von neuen **Warenkorbpositionen** fällt ein seltsames
Verhalten auf. Normallerweise summiert Shopware die Auflage für die
selben Produkte anstelle eigener Positionen zu generieren - bei Druckprodukten
ist das jedoch anderst. Es werden jedesmal eigene Warenkorbpositionen 
hinzugefügt und das ist auch Gut so.

So kann der Kunde einzelne Warenkorbpositionen entfernen ohne alles
wieder von vorne zu beginnen. Einen Hacken existiert jedoch. Der Kunde
muss sich selbst merken welche Position welches Design verwendet. Ein
Zeitstempel würde hier leider auch nichts bringen, die einzige Lösung
wäre es ein Feld anzuzeigen um dem Design einen eigenen Namen zu 
vergeben, doch von so einer Lösung haben wir abgesehen.

Die Auflage der Warenkorbposition kann jederzeit geändert werden. Der
Kunde kann also im nachhinein die Bestellmenge aktualisieren, wobei auch
gleich alle Daten des Druckproduktes aktualisiert werden.

Natürlich können Warenkorbpositionen auch wieder entfernt werden.

Der Editor speichert beim Hinzufügen eines Druckproduktes zum Warenkorb, 
das sogenannte **State File** in welchem die Daten des Benutzers hinterlegt 
wurden. Die URL sowie die ID des State Files werden dabei in der Datenbank 
hinterlegt. Die Druckdatei ist generiert und könnte eigentlich produziert 
werden. Dabei werden die zusätzlichen Felder mithilfe von JavaScript 
generiert und an den entsprechenden Endpunkt gesendet.

Sobald der Kunde die **Bestellung** abschliesst wird der Datenbankeintrag
mit der Beziehung zur Bestellung aktaulisiert. Die Relation zum Warenkorb
wird dabei wieder entfernt. Gleichzeitig werden neue Positionen für die
[Bestellansicht] und die Attribute befüllt. Dabei steht Dir ein Link zum
herunterladen der Datei zur Verfügung sowie eine Spalte in welcher die
ID des State Files eingetragen wurde.

Datenstruktur
--------------------------------------------------------------------------------

**Artikel Attributes**:

Name | Typ | Beschreibung
:---------------------------------- | :------- | :-----------
`ccw2p_is_print_product`            | boolean  | Erlaubt es den Editor anzeigen zu lassen.
`ccw2p_has_watermark_editor`        | boolean  | Verwendet das Wasserzeichen im Editor.
`ccw2p_has_watermark_proof`         | boolean  | Verwendet das Wasserzeichen in der Vorschau.
`ccw2p_editor_mode`                 | combobox | Erstellt eine Auswahl der Editor Moden. Standard ist `'Simple'`.
`ccw2p_has_toolbox_text`            | boolean  | Aktiviert die Text Toolbox im Editor. Standard ist ausgewählt.
`ccw2p_has_toolbox_bounded_text`    | boolean  | Aktiviert die Absatz Toolbox im Editor. Standard ist ausgewählt.
`ccw2p_has_toolbox_rich_text`       | boolean  | Aktiviert die RichText Toolbox im Editor. Standard ist ausgewählt.
`ccw2p_has_toolbox_image`           | boolean  | Aktiviert die Bild Toolbox im Editor. Standard ist ausgewählt.
`ccw2p_has_toolbox_background`      | boolean  | Aktiviert die Hintergrund Toolbox im Editor. Standard ist nicht ausgewählt.
`ccw2p_has_toolbox_qr_code`         | boolean  | Aktiviert die QRCode Toolbox im Editor. Standard ist nicht ausgewählt.
`ccw2p_has_toolbox_linear_barcode`  | boolean  | Aktiviert die Linear Barcode Toolbox im Editor. Standard ist nicht ausgewählt.
`ccw2p_has_toolbox_line`            | boolean  | Aktiviert die Linien Toolbox im Editor. Standard ist nicht ausgewählt.
`ccw2p_has_toolbox_rectangle`       | boolean  | Aktiviert die Rechteck Toolbox im Editor. Standard ist nicht ausgewählt.
`ccw2p_has_toolbox_ellipse`         | boolean  | Aktiviert die Ellipse Toolbox im Editor. Standard ist nicht ausgewählt.
`ccw2p_language`                    | combobox | Erstellt eine Auswahl der Editor Sprachen. Standard ist `'auto'`.
`ccw2p_colors`                      | multi selection | Erstellt eine Auswahl von Farben welche im Farben Widget angelegt wurden.
`ccw2p_color_spaces`                | multi selection | Erstellt eine Auswahl von Farbräumen die im Editor verwendet werden können.
`ccw2p_fonts`                       | text     | Ein Textfeld um Schriften zu definieren welche im Editor verwendet werden sollen.
`ccw2p_min_dpi`                     | integer  | Ein Zahlenwert der die erwartete min. DPI definiert. Standard ist 170.
`ccw2p_design_file`                 | string   | Ein Textfeld welches den relativen Pfad zum Template benötigt.
`ccw2p_design_file_x_position`      | integer  | Ein Zahlenwert der die X Position des Templates definiert. Standard ist 0.
`ccw2p_design_file_y_position`      | integer  | Ein Zahlenwert der die Y Position des Templates definiert. Standard ist 0.
`ccw2p_mockup_down`                 | string   | Ein Textfeld welches den Hintergrund für das Template definiert.
`ccw2p_mockup_up`                   | string   | Ein Textfeld welches die Maske für das Template definiert.
`ccw2p_preview_mockup_down_1`       | string   | Ein Textfeld welches das  Hintergrundbild für die erste Vorschau im Template definiert.
`ccw2p_preview_mockup_up_1`         | string   | Ein Textfeld welches die Maske für die erste Vorschau im Template definiert.
`ccw2p_preview_mockup_down_2`       | string   | Ein Textfeld welches das  Hintergrundbild für die zweite Vorschau im Template definiert.
`ccw2p_preview_mockup_up_2`         | string   | Ein Textfeld welches die Maske für die zweite Vorschau im Template definiert.
`ccw2p_preview_mockup_down_3`       | string   | Ein Textfeld welches das  Hintergrundbild für die dritte Vorschau im Template definiert.
`ccw2p_preview_mockup_up_3`         | string   | Ein Textfeld welches die Maske für die dritte Vorschau im Template definiert.
`ccw2p_print_templates`             | multi selection | Erstellt eine Auswahl von Druckvorlagen welche im Druckvorlagen Widget angelegt wurden.

**Order Detail Attributes**:

Name                 | Typ    | Beschreibung
:------------------- | :----- | :-----------
`ccw2p_download_url` | string | Eine Zeichenkette um die Download URL für das HighEnd PDF zu speichern.
`ccw2p_editor_state` | string | Eine Zeichenkette um die ID für das State File zu speichern.

**Tabelle: `ccw2p_colors`**:

Name         | Typ       | Beschreibung
:----------- | :-------- | :-----------
`id`         | integer   | Eine eindeutige Nummer zur Identifikation des Datensatzes.
`label`      | string    | Eine Zeichenkette um den Ausgabename des Listeneintrags zu definieren.
`value`      | string    | Eine Zeichenkette um den Farbwert zu definieren.
`created_at` | timestamp | Ein Zeitstempel der das Erstellungsdatum definiert.
`updated_at` | timestamp | Ein Zeitstempel der die letzte Aktualisierung definiert.

**Tabelle: `ccw2p_color_spaces`**:

Name         | Typ       | Beschreibung
:----------- | :-------- | :-----------
`id`         | integer   | Eine eindeutige Nummer zur Identifikation des Datensatzes.
`label`      | string    | Eine Zeichenkette um den Ausgabename des Listeneintrags zu definieren.
`value`      | string    | Eine Zeichenkette um den Farbraumwert zu definieren.
`created_at` | timestamp | Ein Zeitstempel der das Erstellungsdatum definiert.
`updated_at` | timestamp | Ein Zeitstempel der die letzte Aktualisierung definiert.

**Tabelle: `ccw2p_print_templates`**:

Name                     | Typ       | Beschreibung
:----------------------- | :-------- | :-----------
`id`                     | integer   | Eine eindeutige Nummer zur Identifikation des Datensatzes.
`label`                  | string    | Eine Zeichenkette um den Ausgabename des Listeneintrags zu definieren.
`editor_label`           | string    | Eine Zeichenkette um den Ausgabename der Seite im Editor zu definieren.
`design_file`            | string    | Ein Textfeld welches den relativen Pfad zum Template benötigt.
`design_file_x_position` | integer   | Ein Zahlenwert der die X Position des Templates definiert. Standard ist 0.
`design_file_y_position` | integer   | Ein Zahlenwert der die Y Position des Templates definiert. Standard ist 0.
`mockup_down`            | string    | Ein Textfeld welches den Hintergrund für das Template definiert.
`mockup_up`              | string    | Ein Textfeld welches die Maske für das Template definiert.
`mockup_preview_down_1`  | string    | Ein Textfeld welches das Hintergrundbild für die erste Vorschau im Template definiert.
`mockup_preview_up_1`    | string    | Ein Textfeld welches die Maske für die erste Vorschau im Template definiert.
`mockup_preview_down_2`  | string    | Ein Textfeld welches das Hintergrundbild für die zweite Vorschau im Template definiert.
`mockup_preview_up_2`    | string    | Ein Textfeld welches die Maske für die zweite Vorschau im Template definiert.
`mockup_preview_down_3`  | string    | Ein Textfeld welches das Hintergrundbild für die dritte Vorschau im Template definiert.
`mockup_preview_up_3`    | string    | Ein Textfeld welches die Maske für die dritte Vorschau im Template definiert.
`created_at`             | timestamp | Ein Zeitstempel der das Erstellungsdatum definiert.
`updated_at`             | timestamp | Ein Zeitstempel der die letzte Aktualisierung definiert.

**Tabelle: `ccw2p_state_files`**:

Name              | Typ       | Beschreibung
:---------------- | :-------- | :-----------
`id`              | integer   | Eine eindeutige Nummer zur Identifikation des Datensatzes.
`basket_id`       | `Shopware\Models\Order\Basket` | Eine optionale Relation zum Warenkorb.
`order_detail_id` | `Shopware\Models\Order\Detail` | Eine optionale Relation zur Order Detail.
`editor_user_id`  | string    | Eine Zeichenkette die Benutzernamen des Editors speichert.
`session_id`      | string    | Eine Zeichenkette welche die ID der Session speichert.
`state_id`        | string    | Eine Zeichenkette welche die ID des State Files speichert.
`download_url`    | string    | Eine Zeichenkette welche die URL zum herunteladen des HighEnd PDF's speichert.
`edit_url`        | string    | Eine Zeichenkette welche die URL zum editieren speichert.
`created_at`      | timestamp | Ein Zeitstempel der das Erstellungsdatum definiert.
`updated_at`      | timestamp | Ein Zeitstempel der die letzte Aktualisierung definiert.


[web api]:          https://customerscanvas.com/docs/cc/webapi.htm
[iframe api]:       https://customerscanvas.com/docs/cc/customerscanvas.htm
[artikel varianten]: https://docs.shopware.com/de/shopware-5-de/produkte-und-kategorien/varianten
[bestellansicht]:    https://docs.shopware.com/de/shopware-5-de/kunden-und-bestellungen/bestellungen
