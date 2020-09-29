---
title:       Installation
description: Installiere das Plugin in Deiner Shopware E-Commerce.
permalink:   /guide/install/
---

{{$page.title}}
================================================================================

Schritt-01: Plugin Installieren
--------------------------------------------------------------------------------

Das Plugin wird nur von dem Entwickler selbst installiert und steht somit
nicht für die Öffentlichkeit zur Verfügung. Bitte kontaktiere [Alexander Bösch](mailto:prosales@pro-sales.ch)
von der Pro Sales AG.

Schritt-02: Sicherheitsschlüssel
--------------------------------------------------------------------------------

Damit die Web API Authentifizierung funktioniert musst Du in Deiner Customer's 
Canvas Anwendung den Sicherheitsschlüssel hinterlegen. Öffne die `Configuration\AppSettings.config`
Konfigurationsdatei und passe den Wert (value) an:

```xml
<appSettings>
    <add key="ApiSecurityKey" value="UniqueSecurityKey" />
</appSettings>
```

Im Regelfall sollte diese Anpassung ausreichen. Ich empfehle Dir Dich 
jedoch mit der [Authentifizierung] von Customer's Canvas zu befassen. 
Eventuell musst Du zuerst die korrekten Berechtigungen setzen, normalerweise
ist aber alles bereits zu begin korrekt konfiguriert. 


[authentifizierung]: https://customerscanvas.com/docs/cc/authsettings-config.htm
