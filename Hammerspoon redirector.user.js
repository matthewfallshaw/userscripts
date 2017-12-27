// ==UserScript==
// @name         Hammerspoon redirector
// @namespace    http://fallshaw.me/
// @version      0.1
// @description  Open SSB links in SSB (Epichrome or Fluid) apps
// @author       Matthew Fallshaw
// @match        *://www.pivotaltracker.com/*
// @match        *://app.asana.com/*
// @match        *://morty.trikeapps.com/*
// @match        *://app.greenhouse.io/*
// @match        *://workflowy.com/*
// @match        *://calendar.google.com/*
// @match        *://www.google.com/calendar/*
// @copyright    https://creativecommons.org/licenses/by/4.0/
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