// ==UserScript==
// @name         Hammerspoon redirector
// @namespace    http://fallshaw.me/
// @version      0.2
// @description  Open SSB links in SSB (Epichrome or Fluid) apps
// @author       Matthew Fallshaw
// @match        *://www.pivotaltracker.com/n/*
// @match        *://www.pivotaltracker.com/story/*
// @match        *://www.pivotaltracker.com/dashboard
// @match        *://www.pivotaltracker.com/reports/*
// @match        *://www.pivotaltracker.com/projects/*
// @match        *://app.asana.com/*
// @match        *://morty.trikeapps.com/*
// @match        *://app.greenhouse.io/*
// @match        *://workflowy.com/*
// @match        *://www.google.com/calendar/*
// @match        *://calendar.google.com/*
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