---
title:       Customer's Canvas
description: Lerne die Customer's Canvas Anwendung näher kennen.
permalink:   /guide/base/customers-canvas/
---

{{$page.title}}
================================================================================

Einleitung
--------------------------------------------------------------------------------

[Customer's Canvas] von Aurigma bietet verschiedene WebToPrint Lösungen
für Online Anwendungen. Die umfangreiche Produktpalette kategorisiert
sich in drei Basisangebote: Standard, Professional und Enterprise. Jedes
Modul bietet verschiedene Funktionalitäten hat jedoch auch jeweils seinen
eigenen Preis. Eine Übersicht der Module findest Du unter: 
[https://customerscanvas.com/editor/buy].

Damit Du das Plugin nutzen kannst brauchst Du einen Customers Canvas 
Server v5 Professional. Die Einrichtung des Servers ist nicht Bestandteil 
des Plugins und muss von professionellen Serveradministratoren oder [Aurigma] 
ausgeführt werden.

Server Zugang
--------------------------------------------------------------------------------

Damit Du also mit dem Plugin arbeiten kannst solltest Du Zugriff auf 
den Server haben auf welchem Customer's Canvas installiert wurde. Dabei 
spielt es keine Rolle wie Du Dich mit dem Rechner verbindest. Ob via FTP, 
Remote Desktop oder Plesk musst Du selbst entscheiden. Wichtig ist jedoch 
dass Du die benötigten Rechte besitzt um Dateien hochzuladen, zu löschen 
und zu ändern.

Übersetzungen
--------------------------------------------------------------------------------

Die [Übersetzungen] werden anhand der Shop oder Benutzer Lokalisierung definiert. 
Wenn der Shop also in Englisch betrieben wird ist auch der Editor in Englisch.
Die angezeigten Texte im Customer's Canvas Editor lassen sich übersetzen.
Alle Überesetzungen findest Du in der `~/Configuration/translations.json`
Datei auf Deinem Customer's Canvas server.

Wichtige Verzeichnise
--------------------------------------------------------------------------------

Pfad              | Bemerkung
:---------------- | :--------
`assets/designs/` | Templateverzeichnis
`assets/mockups/` | MockUp Verzeichnis (Hintergrund, Masken und Vorschau)
`assets/fonts/`   | Schriftenverzeichnis
`userdata/`       | Benutzerverzeichnis (State Files)

Wichtige Konfigurationen
--------------------------------------------------------------------------------

Pfad                                | Bemerkung
:---------------------------------- | :--------
`Configuration/clientConfig.json`   | Standard Editor Einstellungen
`Configuration/AuthSettings.config` | Sicherheitseinstellungen für die Web API
`Configuration/email/mail.config`   | E-Mail Einstellungen
`Configuration/translations.json`   | Übersetzungen

[aurigma]:                                                   https://www.aurigma.com/
[customer's canvas]:                                         https://customerscanvas.com/
[design file]:                                               https://customerscanvas.com/docs/cc/file-manipulation-api.htm
[https://customerscanvas.com/docs/cc/supported-markers.htm]: https://customerscanvas.com/docs/cc/supported-markers.htm
[https://customerscanvas.com/editor/buy]:                    https://customerscanvas.com/editor/buy
[markers]:                                                   https://customerscanvas.com/docs/cc/supported-markers.htm
[mockup's]:                                                  https://customerscanvas.com/docs/cc/mockups.htm
[state file]:                                                https://customerscanvas.com/docs/cc/web-api-for-manipulating-states.htm
[übersetzungen]:                                             https://customerscanvas.com/docs/cc/localization-of-cc.htm