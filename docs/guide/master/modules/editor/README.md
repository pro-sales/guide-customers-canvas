---
title: WebToPrint Editor
permalink: /guide/modules/editor/
sidebarDepth: 3
---

# {{$page.title}}

## Einleitung

## Artikel Konfigurationen

### Farben

Das Thema Farben behandle ich im [Farben](../colors/) Kapitel. Bitte
lese das Kapitel durch um zu verstehen wie Farben im Plugin funktionieren.

Bevor Du das Farben Feld verwenden kannst musst Du zuerst Farben definieren
(`Artikel > Editor Farben`). Mehr hierzu findest Du in dem vorhin erwähnten
Kapitel. Alle Farben welche in der Farbliste definiert wurden stehen
in diesem Auswahlfeld nun zur Verfügung:

![Bild: Farbauswahl in Artikel](../colors/article_colors.png)

Alle Farben welche Du in diesem Feld auflistest werden im Editor als
vordefinierte Farbe zur Auswahl angeboten. Die Reihenfolge kann dabei
beliebig angepasst werden, denn genauso werden die Farben auch später
im Editor sortiert.

### Farbraum

Auch im zweiten Feld findest Du mehr Informationen im [Farben](../colors/) 
Kapitel. Bitte lese das Kapitel durch um zu verstehen wie Farben im Plugin 
funktionieren.

Neben den vordefinierten Farben kannst Du auch den Farbraum definieren
welcher im Editor verwendet werden soll. Dazu kannst Du das Auswahlfeld
Farbraum verwenden:

![Vorschau: Artikel > Freitext Felder > Farbraum](../colors/article_color_space.png)

Es stehen Dir zwei Werte zur Verfügung: `CMYK` &  `RGB`. Der erste 
Farbraum (im Beispiel oben ist dies `CMYK`) wird im Editor priorisiert
behandelt. Dies bedeutet das beim eingeben von eigenen Farben immer 
zuerst der entsprechende Farbraum verwendet werden soll.

Wenn das Feld leer bleibt dann werden beide Farbräume angeboten und CMYK 
prioritiesiert. Also wäre die Einstellung wie oben dargestellt Sinnlos,
da dies bereits der standard Einstellung enspricht.

### Template

Das Template ist das Herzstück es bildet die Zeichenfläche welche 
im Editor zur Verfügung gestellt wird. Hier kannst Du Deiner kreativität
"fast" uneingeschränkt freien Lauf lassen. 

![Feld: Editor Template!](./article_editor_template.png)

Das erste Feld erwartet einen relativen Pfad zur Template Datei. Das kann 
entweder eine Photoshop oder InDesign Datei sein. Wichtig ist das Du die 
Datei in Deinem `assets/designs/` Verzeichnis Deiner Customers Canvas 
Anwendung hinterlegst.

Du kannst beliebig viele Unterverzeichnisse im `assets/designs/` Verzeichnis
anlegen um Deine Templates zu organisieren. Wenn Du also Deine Template
Datei unter: `assets/designs/tshirts/blanko_male.psd` abgelegt hast, 
musst Du: `tshirts/blanko_male` eintragen. Ob Du die Dateierweiterung
angeben möchtest (also bspw. `.psd`) oder nicht ist Dir überlassen. Wenn
Du zwei Dateien mit dem selben Namen verwendest wird die PhotoShop Datei
priorisiert.

Ein Template muss entweder eine PhotoShop (`.psd`) oder InDesign (`.idml`)
Datei sein.

![Feld: Editor Template!](./article_editor_template_position.png)

Du kannst ebenfalls die X und Y Position für das Template definieren.
Dabei wird eine Nummer für die Koordinaten in Pixel erwartet. Diese 
Funktion greift jedoch nur wenn das Template einen Hintergrund oder eine
Maske verwendet. Das Template wird dann relativ zum Hintergrund oder
der Maske mit den eingetragenen Koordinaten platziert. 

Wenn das Feld leer bleibt werden 0 Pixel als Standard verwendet.

### Modus

Die Darstellung des Editors lässt sich einfach beiinflussen, indem Du
den gewünschten Modus einfach auswählst:

![Feld: Editor Modus!](./article_editor_mode.png)

Es stehen drei Optionen zur Verfügung:

**Simple**: Dies ist die Standard Einstellung. Der Editor hat dabei die
Toolbox eingeklappt. Die Toolbox lässt sich jedoch jederzeit wieder 
einblenden. Wenn die Toolbox eingeblendet wurde, lässt sie sich jedoch
nicht wieder zu klappen.

![Editor Modus: Simple!](./article_editor_mode_simple.png  =180x)

**SimpleOnly**: Die zweite Option erlaubt es Dir die Toolbox zu deaktivieren.
Bei dieser Option hat der Kunde keine Möglichkeit die Toolbox einzublenden
und kann somit keine eigenen Elemente platzieren.

![Editor Modus: Simple Only!](./article_editor_mode_simple_only.png  =180x)

**Advanced**: Die letzte Option erlaubt es die Toolbox bereits zu beginn
anzeigen zu lassen.

![Editor Modus: Simple Only!](./article_editor_mode_advanced.png  =180x)

### Schriften

Das Thema Schriften behandle ich ausführlich im [Schriften](../fonts/) 
Kapitel. Bitte lese das Kapitel durch um zu verstehen wie Schriften im 
Plugin funktionieren.

![Feld: Schriften!](./article_editor_fonts.png)

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

![Feld: Hintergrund Toolbox!](./article_editor_has_background_toolbox.png)

Wenn Du dieses Auswahlfeld aktivierst wird das Hintergrund Toolbox Element
im Editor dargestellt:

![Editor: Hintergrund Toolbox!](./article_editor_has_background_toolbox_icon.png)
![Editor: Hintergrund Toolbox in Aktion!](./article_editor_has_background_toolbox_action.png  =180x)

#### Absatz

![Feld: Absatz Toolbox!](./article_editor_has_bounded_text_toolbox.png)

Wenn Du dieses Auswahlfeld aktivierst wird das Absatz Toolbox Element
im Editor dargestellt:

![Editor: Absatz Toolbox!](./article_editor_has_bounded_text_toolbox_icon.png)
![Editor: Absatz Toolbox in Aktion!](./article_editor_has_bounded_text_toolbox_action.png  =180x)

#### Ellipse

![Feld: Ellipse Toolbox!](./article_editor_has_ellipse_toolbox.png)

Wenn Du dieses Auswahlfeld aktivierst wird das Ellipse Toolbox Element
im Editor dargestellt:

![Editor: Ellipse Toolbox!](./article_editor_has_ellipse_toolbox_icon.png)
![Editor: Ellipse Toolbox in Aktion!](./article_editor_has_ellipse_toolbox_action.png  =180x)

#### Bild

![Feld: Bild Toolbox!](./article_editor_has_image_toolbox.png)

Wenn Du dieses Auswahlfeld aktivierst wird das Bild Toolbox Element
im Editor dargestellt:

![Editor: Bild Toolbox!](./article_editor_has_image_toolbox_icon.png)
![Editor: Bild Toolbox in Aktion!](./article_editor_has_image_toolbox_action.png  =180x)

#### Linien

![Feld: Linien Toolbox!](./article_editor_has_line_toolbox.png)

Wenn Du dieses Auswahlfeld aktivierst wird das Linien Toolbox Element
im Editor dargestellt:

![Editor: Linien Toolbox!](./article_editor_has_line_toolbox_icon.png)
![Editor: Linien Toolbox in Aktion!](./article_editor_has_line_toolbox_action.png  =180x)

#### Liniear Barcode

![Feld: Linear Barcode Toolbox!](./article_editor_has_linear_barcode_toolbox.png)

Wenn Du dieses Auswahlfeld aktivierst wird das Linear Barcode Toolbox Element
im Editor dargestellt:

![Editor: Liniear Barcode Toolbox!](./article_editor_has_linear_barcode_toolbox_icon.png)
![Editor: Liniear Barcode Toolbox in Aktion!](./article_editor_has_linear_barcode_toolbox_action.png  =180x)

#### QrCode

![Feld: QrCode Toolbox!](./article_editor_has_qr_code_toolbox.png)

Wenn Du dieses Auswahlfeld aktivierst wird das QrCode Toolbox Element
im Editor dargestellt:

![Editor: QrCode Toolbox!](./article_editor_has_qr_code_toolbox_icon.png)
![Editor: QrCode Toolbox in Aktion!](./article_editor_has_qr_code_toolbox_action.png  =180x)

#### Rechteck

![Feld: Rechteck Toolbox!](./article_editor_has_rectangle_toolbox.png)

Wenn Du dieses Auswahlfeld aktivierst wird das Rechteck Toolbox Element
im Editor dargestellt:

![Editor: Rechteck Toolbox!](./article_editor_has_rectangle_toolbox_icon.png)
![Editor: Rechteck Toolbox in Aktion!](./article_editor_has_rectangle_toolbox_action.png  =180x)

#### Rich Text

![Feld: Rich Text Toolbox!](./article_editor_has_rich_text_toolbox.png)

Wenn Du dieses Auswahlfeld aktivierst wird das Rich Text Toolbox Element
im Editor dargestellt:

![Editor: Rich Text Toolbox!](./article_editor_has_rich_text_toolbox_icon.png)
![Editor: Rich Text Toolbox in Aktion!](./article_editor_has_rich_text_toolbox_action.png  =180x)

### Sprache
### Wasserzeichen
### Editor Aktivieren
### Min. DPI
### Hintergrund
### Maske
### Vorschau
### Zusätzliche Templates

## Warenkorb

## Bestellung

## Status Dateien