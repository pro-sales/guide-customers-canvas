---
title: Customer's Canvas
permalink: /guide/base/customers-canvas/
---

# {{$page.title}}

## Einleitung

[Customer's Canvas] von Aurigma bietet verschiedene WebToPrint Lösungen
für Online Anwendungen. Die umfangreiche Produktpalette kategorisiert
sich in drei Basisangebote: Standard, Professional und Enterprise. Jedes
Modul bietet verschiedene Funktionalitäten hat jedoch auch jeweils seinen
eigenen Preis. Eine Übersicht der Preise findest Du unter: [https://customerscanvas.com/editor/buy].

Wie bereits in den [Anforderungen](../../start/requirements/) aufgelistet solltest 
Du den Professional Server (v5) und das VDP Add-on (V5) bereits eingekauft 
haben.

## Server Zugang

Damit Du also mit dem Plugin arbeiten kannst solltest Du Zugriff auf 
den Server haben auf welchem Customer's Canvas installiert wurde. Die
Installation des Servers erfolgt dabei unabhängig vom Plugin und muss
selbst oder mithilfe von Aurigma aufgesetzt werden.

Dabei spielt es keine Rolle wie Du Dich mit dem Rechner verbindest. Ob
via FTP, Remote Desktop oder Plesk musst Du selbst entscheiden. Wichtig 
ist jedoch das Du die benötigten Rechte besitzt um Dateien hochzuladen,
zu löschen und zu ändern.

## Wichtige Verzeichnise

Pfad | Bemerkung
:--- | :--------
`assets/designs/` | Templateverzeichnis
`assets/mockups/` | MockUp Verzeichnis (Hintergrund, Masken und Vorschau)
`assets/fonts/` | Schriftenverzeichnis
`userdata/` | Benutzerverzeichnis (State Files)

## Wichtige Konfigurationen

Pfad | Bemerkung
:--- | :--------
`Configuration/clientConfig.json` | Standard Editor Einstellungen
`Configuration/AuthSettings.config` | Sicherheitseinstellungen für die Web API
`Configuration/email/mail.config` | E-Mail Einstellungen
`Configuration/translations.json` | Übersetzungen

[customer's canvas]: https://customerscanvas.com/
[https://customerscanvas.com/editor/buy]: https://customerscanvas.com/editor/buy
