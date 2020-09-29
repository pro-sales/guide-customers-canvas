---
title:        WebToPrint Editor
description:  Lerne den Web2Print Editor näher kennen.
permalink:    /guide/modules/editor/
sidebarDepth: 3
---

{{$page.title}}
================================================================================

Einleitung
--------------------------------------------------------------------------------

Nun da Du nun über die Funktionalität des Plugins bescheid weisst, kommen 
wir nun zum wahrscheinlich wichtigsten Thema, nähmlich das darstellen des 
Editors:

![Bild: Editor!](./base_editor.png)

Damit der Editor jedoch etwas anzeigen kann erwartet er zumindest ein 
Design Template. Andere Konfigurationen wie bspw. die Darstellung des 
Editors können mithilfe von den Standardwerten ausseracht gelassen werden.

Wie Du gleich merken wirst stehen Dir eine Menge an Einstellungen zur 
Verfügung, ich werde versuchen diese Einstellungen so gut wie möglich 
zu vermitteln.

Kurzanleitung
--------------------------------------------------------------------------------

Wie bereits in der Einleitung erwähnt braucht es eigentlich gar nicht 
so viele Einstellungen da die meisten Standardwerte so verwendet werden
können (das hoffe ich zumindest). Um so schnell wie möglich ein erstes
Ergebnis zu erzielen müssen wir eigentlich nur den Pfad zum Design Template
hinterlegen.

Dazu öffnest Du einen Artikel: `Artikel > Übersicht` oder `Aritkel > Anlegen`.

Grundsätzlich beginnst Du wie immer. Du erstellst einen Artikel und definierst 
die notwendigen Einstellungen, wie bspw. Preis, Kategorie usw. Eine Einführung wie man ein Produkt anlegt
findest Du in der offiziellen Shopware Dokumentation: [https://docs.shopware.com/de/shopware-5-de/produkte-und-kategorien/produkte-anlegen](https://docs.shopware.com/de/shopware-5-de/produkte-und-kategorien/produkte-anlegen)

Ich gehe nun davon aus dass Du Dir Deinen Artikel angelegt hast und bereits
die Vorschau oder den Artikel sichten kannst. Damit also nun aus dem Artikel
ein Druckprodukt wird müssen wir zwei Einstellungen vornehmen:

**Einstellung-01: Design Template**: Wir kopieren den Hilftext des `Template`
Feldes (`samples/test-page`) in das Feld hinein:

![Bild: Editor Template Feld!](./field_design_file.png)

Das Template `assets/designs/samples/test-page` sollte bei der Erstinstallation
von Customers Canvas automatisch mit ausgeliefert werden. Bitte prüfe nocheinmal
ob die Datei auch wirklich existiert. Falls nicht kannst Du Dir die Datei
<a href="https://gitlab.pro-sales.ch/shopware/doc-customers-canvas/wikis/uploads/e82b22d6d0ecbfbf278876d5fc040b73/test-page.psd" target="_self" download>hier herunterladen</a>
und selbst in das entsprechende Verzeichnis ablegen.

**Einstellung-02: Editor Aktivieren**: Nun müssen wir nur noch den Editor
aktivieren und unser erstes Druckprodukt wäre dann fertig:

![Bild: Aktiviere Editor Feld!](./field_enable_editor_checked.png)

Nachdem Du die Konfigurationen wie oben beschrieben gesetzt hast kannst
Du den Editor öffnen dabei solltest Du zur Vorschau in der Einleitung 
gelangen. Wie Du siehst braucht es keine wilden Konfigurationen um 
schnell zum Ergebnis zu gelangen. Mit nur zwei Klicks erhälst Du Dein
erstes Druckprodukt.

Artikel Konfigurationen
--------------------------------------------------------------------------------

In Wahrheit warten eine Menge Einstellungsmöglichkeiten betreffend dem
Editor auf Dich. Dank der Oberfläche (Interface) solltest Du bequem und 
einfach neue Druckprodukte in allen Varianten kreiieren können. Alle 
Einstellungen betreffend des Editors werden im Artikel unter `Freitextfelder`
dargestellt.

### Farben

![Bild: Farbauswahl in Artikel](../colors/field_colors.png)

Das Thema Farben behandle ich im [Farben](../colors/) Kapitel. Bitte
lese das Kapitel durch um zu verstehen wie Farben im Plugin funktionieren.

Bevor Du das Farben Feld verwenden kannst musst Du zuerst Farben definieren
(`Artikel > Editor Farben`). Mehr hierzu findest Du in dem vorhin erwähnten
Kapitel. Alle Farben welche in der Farbliste definiert wurden stehen
in diesem Auswahlfeld nun zur Verfügung:

Alle Farben welche Du in diesem Feld auflistest werden im Editor als
vordefinierte Farbe zur Auswahl angeboten. Die Reihenfolge kann dabei
beliebig angepasst werden, denn genauso werden die Farben auch später
im Editor sortiert.

### Farbraum

![Bild: Farbraum Feld!](../colors/field_color_space.png)

Auch im zweiten Feld findest Du mehr Informationen im [Farben](../colors/) 
Kapitel. Bitte lese das Kapitel durch um zu verstehen wie Farben im Plugin 
funktionieren.

Neben den vordefinierten Farben kannst Du auch den Farbraum definieren
welcher im Editor verwendet werden soll. Dazu kannst Du das Auswahlfeld
Farbraum verwenden:

Es stehen Dir zwei Werte zur Verfügung: `CMYK` &  `RGB`. Der erste 
Farbraum (im Beispiel oben ist dies `CMYK`) wird im Editor priorisiert
behandelt. Dies bedeutet das beim eingeben von eigenen Farben immer 
zuerst der entsprechende Farbraum verwendet werden soll.

Wenn das Feld leer bleibt dann werden beide Farbräume angeboten und CMYK 
prioritiesiert. Also wäre die Einstellung wie oben dargestellt Sinnlos,
da dies bereits der standard Einstellung enspricht.

### Template

![Bild: Design Feld!](./field_design_file.png)

Das erste Feld erwartet einen relativen Pfad zur Template Datei. Das kann 
entweder eine Photoshop (`.psd`) oder InDesign (`.idml`) Datei sein. Wichtig ist das Du die 
Datei in Deinem `assets/designs/` Verzeichnis Deiner Customers Canvas 
Anwendung hinterlegst.

### Template Position

![Bild: Design Position Feld!](./fields_design_location.png)

Du kannst ebenfalls die X und Y Position für das Template definieren.
Dabei wird eine Nummer für die Koordinaten in Pixel erwartet. Diese 
Funktion greift jedoch nur wenn das Template einen Hintergrund oder eine
Maske verwendet. Das Template wird dann relativ zum Hintergrund oder
der Maske mit den eingetragenen Koordinaten platziert. 

Wenn das Feld leer bleibt werden 0 Pixel als Standard verwendet.

### Modus

![Bild: Editor Modus Feld!](./field_editor_mode.png)

Mithilfe des `Editor Modus` Feldes kannst Du die Darstellung des Editors beiinflussen.
Es stehen Dir dabei drei Auswahlmöglichkeiten zur Verfügung:

**Simple**: Dies ist die Standard Einstellung. Der Editor hat dabei die
Toolbox eingeklappt. Die Toolbox lässt sich jedoch jederzeit wieder 
einblenden. Wenn die Toolbox eingeblendet wurde, lässt sie sich jedoch
nicht wieder zu klappen.

![Bild: Editor Simple Modus!](./article_editor_mode_simple.png  =180x)

**SimpleOnly**: Die zweite Option erlaubt es Dir die Toolbox zu deaktivieren.
Bei dieser Option hat der Kunde keine Möglichkeit die Toolbox einzublenden
und kann somit keine eigenen Elemente platzieren.

![Bild: Editor SimpleOnly Modus!](./article_editor_mode_simple_only.png  =180x)

**Advanced**: Die letzte Option erlaubt es die Toolbox bereits zu beginn
anzeigen zu lassen.

![Bild: Editor Advanced Modus!](./article_editor_mode_advanced.png  =180x)

### Schriften

![Bild: Schriften Feld!](./field_fonts.png)

Das Thema Schriften behandle ich ausführlich im [Schriften](../fonts/) 
Kapitel. Bitte lese das Kapitel durch um zu verstehen wie Schriften im 
Plugin funktionieren.

Das Schriften Textfeld erwartet die gewünschten Schriften komma getrennt,
wobei der letzte Wert kein Komma haben darf.

Die Eingabe entspricht dabei den Namen der Schriftdatei welche Du im
`assets/fonts/` Verzeichnis hinterlegt hast.

Dateinamen welche leerzeichen enthalten müssen mit Hochkommata maskiert
werden, also bspw. `"Neue Helvetica STD"`.

### Toolbox

Die hundert und eine Option um ein Toolbox Element zu aktivieren, helfen
Dir den Editor individuell mit neuer Funktionalität auszustatten. Ein
Toolbox Element wird dabei im Editor auf der Linken Seite dargestellt,
es existieren jedoch verschiedene Elemente:

#### Hintergrund

![Bild: Hintergrund Toolbox Feld!](./field_background_toolbox.png)

Wenn Du dieses Auswahlfeld aktivierst wird das Hintergrund Toolbox Element
im Editor dargestellt:

![Bild: Hintergrund Toolbox Icon!](./icon_background_toolbox.png)
![Bild: Hintergrund Toolbox in Aktion!](./action_background_toolbox.png  =180x)

#### Absatz

![Bild: Absatz Toolbox Feld!](./field_bounded_text_toolbox.png)

Wenn Du dieses Auswahlfeld aktivierst wird das Absatz Toolbox Element
im Editor dargestellt:

![Bild: Absatz Toolbox Icon!](./icon_bounded_text_toolbox.png)
![Bild: Absatz Toolbox in Aktion!](./action_bounded_text_toolbox.png  =180x)

#### Ellipse

![Bild: Ellipse Toolbox Feld!](./field_ellipse_toolbox.png)

Wenn Du dieses Auswahlfeld aktivierst wird das Ellipse Toolbox Element
im Editor dargestellt:

![Bild: Ellipse Toolbox Icon!](./icon_ellipse_toolbox.png)
![Bild: Ellipse Toolbox in Aktion!](./action_ellipse_toolbox.png  =180x)

#### Bild

![Bild: Bild Toolbox Feld!](./field_image_toolbox.png)

Wenn Du dieses Auswahlfeld aktivierst wird das Bild Toolbox Element
im Editor dargestellt:

![Bild: Bild Toolbox Icon!](./icon_image_toolbox.png)
![Bild: Bild Toolbox in Aktion!](./action_image_toolbox.png  =180x)

#### Linien

![Bild: Linien Toolbox Feld!](./field_line_toolbox.png)

Wenn Du dieses Auswahlfeld aktivierst wird das Linien Toolbox Element
im Editor dargestellt:

![Bild: Linien Toolbox Icon!](./icon_line_toolbox.png)
![Bild: Linien Toolbox in Aktion!](./action_line_toolbox.png  =180x)

#### Liniear Barcode

![Bild: Linear Barcode Toolbox Feld!](./field_linear_barcode_toolbox.png)

Wenn Du dieses Auswahlfeld aktivierst wird das Linear Barcode Toolbox Element
im Editor dargestellt:

![Bild: Linear Barcode Toolbox Icon!](./icon_linear_barcode_toolbox.png)
![Bild: Linear Barcode Toolbox in Aktion!](./action_linear_barcode_toolbox.png  =180x)

#### QrCode

![Bild: QrCode Toolbox Feld!](./field_qr_code_toolbox.png)

Wenn Du dieses Auswahlfeld aktivierst wird das QrCode Toolbox Element
im Editor dargestellt:

![Bild: QrCode Toolbox Icon!](./icon_qr_code_toolbox.png)
![Bild: QrCode Toolbox in Aktion!](./action_qr_code_toolbox.png  =180x)

#### Rechteck

![Bild: Rechteck Toolbox Feld!](./field_rectangle_toolbox.png)

Wenn Du dieses Auswahlfeld aktivierst wird das Rechteck Toolbox Element
im Editor dargestellt:

![Bild: Rechteck Toolbox Icon!](./icon_rectangle_toolbox.png)
![Bild: Rechteck Toolbox in Aktion!](./action_rectangle_toolbox.png  =180x)

#### Rich Text

![Bild: Rich Text Toolbox Feld!](./field_rich_text_toolbox.png)

Wenn Du dieses Auswahlfeld aktivierst wird das Rich Text Toolbox Element
im Editor dargestellt:

![Bild: Rich Text Toolbox Icon!](./icon_rich_text_toolbox.png)
![Bild: Rich Text Toolbox in Aktion!](./action_rich_text_toolbox.png  =180x)

#### Text

![Bild: Text Toolbox Feld!](./field_text_toolbox.png)

Wenn Du dieses Auswahlfeld aktivierst wird das Text Toolbox Element im Editor dargestellt:

![Bild: Text Toolbox Icon!](./icon_text_toolbox.png)
![Bild: Text Toolbox in Aktion!](./action_text_toolbox.png  =180x)

### Wasserzeichen

![Bild: Wasserzeichen Toolbox Feld!](./field_watermark_editor.png)

Wenn Du dieses Auswahlfeld aktivierst wird das Wasserzeichen im Editor dargestellt:

![Bild: Wasserzeichen Toolbox Icon!](./base_editor.png)
![Bild: Wasserzeichen Toolbox in Aktion (Editor)!](./field_watermark_preview.png)

Wenn Du dieses Auswahlfeld aktivierst wird das Wasserzeichen in der Vorschau dargestellt:

![Bild: Wasserzeichen Toolbox in Aktion (Vorschau)!](./editor_preview.png)


### Editor Aktivieren

![Bild: Editor Aktivieren Feld!](./field_editor_enable.png)

Dieses Feld solltest Du bereits seit der Einleitung oder Mein erster Editor
kennen.

Wenn Du dieses Auswahlfeld aktivierst wird der Editor dargestellt.

### Sprache

![Bild: Sprache Feld!](./field_language.png)

Dein Editor kannst Du in verschiednen Sprachen ausgeben lassen. Mithilfe
des `Editor Sprache` Auswahlfeldes kannst Du bestimmen in welcher Sprache
der Editor ausgegeben werden soll. Falls die Sprache nicht existiert wird
Englisch als Standardsprache vewendet.

Die Standard Auswahl `Shop Default` bedeutet dass die Sprache des Shopanwenders
übernommen werden soll.

### Min. DPI

![Bild: Minimum DPI Feld!](./field_min_dpi.png)

Im Feld `Min. DPI` legst Du die minimum Auflösung in DPI (Dots Per Inches)
fest. Diese Auflösung wird von allen Bildmaterialen welche im Design Template
hinterlegt oder hochgeladen wurden erwartet.

Falls der Wert die min. DPI unterschreitet wird eine Warnmeldung ausgegeben:

![Bild: Warnung (Auflösung)!](./resolution_warning.png)

Die intesivität der Fehlermeldung variiert dabei anhand wie weit der 
Wert von der min. DPI entfernt ist:

![Bild: Fehler (Auflösung)!](./resolution_error.png)

Egal ob nun eine Warn- oder Fehlermeldung angezeigt wird, dies hat keinen
Einfluss auf die Bestellbarkeit. Kunden können auch mit Fehlermeldungen
bestellen. Es soll lediglich den Kunden informieren das etwas mit dem
Bild nicht korrekt zusein scheint.


### Hintergrund

![Bild: Hintergrund Feld!](./field_background.png)

Optional kannst Du Deinem Design Template ein Hintegrund hinterlegen welcher
innerhalb des Editors dargestellt werden soll. Falls Du das Design Template
an einer bestimmten Position ausgeben möchtest kannst Du das mithilfe der
[Template Position](#template-position) lösen. Mehr zu Hintegrundbilder findest
Du unter: [Komponenten > Druckprodukte](../print/product/)

### Maske

![Bild: Maske Feld!](./field_mask.png)

Optional kannst Du Deinem Design Template eine Maske übergeben welche
innerhalb des Editors dargestellt werden soll. Falls Du das Design Template
an einer bestimmten Position ausgeben möchtest kannst Du das mithilfe der
[Template Position](#template-position) lösen. Mehr zu Masken findest
Du unter: [Komponenten > Druckprodukte](../print/product/)

### Vorschau

![Bild: Vorschau Felder!](./field_previews.png)

Optional kannst Du verschiedene Vorschauen generieren lassen. Mithilfe
der Felder welche oben dargestellt werden kannst Du die Masken und Hintergrundbilder
für die Vorschauen definieren. Mehr zu den Vorschauen findest
Du unter: [Komponenten > Druckprodukte > Vorschau](../print/product/#vorschau).

### Zusätzliche Templates

![Bild: Zusätzliche Templates Feld!](./field_additional_templates.png)

Optional kannst Du hier weitere Seiten definieren die im Editor angezeigt 
werden sollen. Dabei musst Du aber zuerst ein Template anlegen, mehr zu 
diesem Thema findest Du unter: [Modules > Druckvorlagen](../print/templates/).

Wähle einfach die Druckvorlagen aus welche Du im Editor darstellen möchtest.
Die Reihenfolge ist dabei dieselbe wie Du sie zuweist. Du kannst jederzeit
die Position der Druckvorlagen ändern.

## Warenkorb

Sobald der Kunde mit dem bearbeiten fertig ist, wird das Produkt in den
Warenkorb verschoben. Zu diesem Zeitpunkt wurde bereits ein Editor
State File generiert und in der Datenbank abgespeichert.

Die Warenkorbfunktion wurde dabei ein wenig angepasst, denn normalerweise
summiert Shopware die Auflage bei den selben Produkten anstelle einer 
neuen Position zu generieren. Dies bedeutet falls Du den Artikel "T-Shirt"
mit einer Auflage von 5 Stück bestellt hast und nun ein weiteres T-Shirt
hinzufügst wird die Auflage nicht auf 6 Stück erhöht sondern eine eigene
Position angelegt.

Im Warenkorb stehen jedoch ansonsten die Standardfunktionalität von Shopware
zur Verfügung. Der Kunde kann also bspw. die Auflage ändern oder Positionen aus
dem Warenkorb wieder entfernen.

## Bestellung

Sobald der Kunde alle Warenkorbpositionen zusammengetragen hat wird 
die Bestellung ausgelöst. Dabei wurden eigentlich keine Änderungen 
vorgenommen das einzige was passiert ist das der Datenbankeintrag mit
dem Editor State File aktualisiert wird. Dabei wird die Relation zum
Warenkorb entfernt und für die Relation zur Bestellübersicht gesetzt.

Das HighEnd PDF findest Du in den Bestelldetails unter Positionen:

![Bild: Bestellübersicht!](./order_details.png)

Achte auf die Spalte "Download PDF" sowie "Editor State".

### Spalten Einblenden

Sollten diese Spalten aus irgendwelchen Gründen nicht erscheinen versuche
die Spalte einzublenden:

![Bild: Bestellübersicht Spalten!](./order_details_columns.png)

## Editor State Files

Immer wenn das Produkt in den Warenkorb abgelegt wird wird im Hintergrund
die [`saveProduct`] oder [`finishProductDesign`] Funktion des Customers Canvas
Editors aufgerufen. Sobald einer dieser Funktionen aufgerufen wird teilen
wir Customers Canvas mit das wir mit dem Gestalten fertig sind. Customers
Canvas erstellt dabei ein sogenanntes State File welches alle Einstellungen
für den Editoren speichert. Darin ist alles gespeichert um den Editor auf
den gespeicherten Status zurückzusetzen also bspw. der Benutzer, die eingetragenen
Daten, Positionen usw.

Diese Datei wird normalerweise im `userdata/«BENUTZER»/states/` Verzeichnis
Deiner Customers Canvas Anwendung hinterlegt. Editor State Files werden 
nicht automatisch gelöscht und müssen manuell entfernt werden falls dies
notwendig sein sollte.


[`saveProduct`]:        https://customerscanvas.com/docs/cc/customerscanvas.iframeapi.editor.saveproduct.htm
[`finishProductDesign`]: https://customerscanvas.com/docs/cc/customerscanvas.iframeapi.editor.finishproductdesign.htm