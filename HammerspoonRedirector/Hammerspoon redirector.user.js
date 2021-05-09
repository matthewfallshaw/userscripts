// ==UserScript==
// @name         Hammerspoon redirector
// @namespace    http://fallshaw.me/
// @description  Open SSB links in SSB (Epichrome or Fluid) apps
// @version      0.7
// @homepage     https://github.com/matthewfallshaw/userscripts/blob/master/HammerspoonRedirector/Hammerspoon%20redirector.user.js
// @updateURL    https://github.com/matthewfallshaw/userscripts/raw/master/HammerspoonRedirector/Hammerspoon%20redirector.user.js
// @downloadURL  https://github.com/matthewfallshaw/userscripts/raw/master/HammerspoonRedirector/Hammerspoon%20redirector.user.js
// @supportURL   https://github.com/matthewfallshaw/userscripts/issues
// @contributionURL https://intelligence.org/donate/
// @author       Matthew Fallshaw
// @copyright    https://creativecommons.org/licenses/by/4.0/
// @match        *://app.asana.com/*
// @match        *://www.google.com/calendar/*
// @match        *://calendar.google.com/*
// @match        *://meet.google.com/*
// @grant        window.close
// @run-at       document-start
// ==/UserScript==

// Used in conjunction with Hammerspoon
//
// Hammerspoon
// ----

(function() {
  window.open("hammerspoon://URLDispatcher?uri=" + encodeURIComponent(window.location.href), "_self");
  window.close();
})();
