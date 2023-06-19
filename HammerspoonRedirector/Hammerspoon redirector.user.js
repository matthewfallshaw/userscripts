// ==UserScript==
// @name         Hammerspoon redirector
// @namespace    http://fallshaw.me/
// @description  Open Single Site Browser links in SSB apps
// @version      0.9
// @homepage     https://github.com/matthewfallshaw/userscripts/blob/master/HammerspoonRedirector/Hammerspoon%20redirector.user.js
// @updateURL    https://github.com/matthewfallshaw/userscripts/raw/master/HammerspoonRedirector/Hammerspoon%20redirector.user.js
// @downloadURL  https://github.com/matthewfallshaw/userscripts/raw/master/HammerspoonRedirector/Hammerspoon%20redirector.user.js
// @supportURL   https://github.com/matthewfallshaw/userscripts/issues
// @author       Matthew Fallshaw
// @copyright    https://creativecommons.org/licenses/by/4.0/
// @match        *://app.asana.com/*
// @exclude      *://app.asana.com/-/login*
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
  const url = new URL(window.location.href);
  const origin = url.searchParams.get('origin');
  const pathname = url.pathname;

  // Check if the 'origin' query parameter is 'https://mail.google.com' and
  // pathname does not start with '/call' or '/_/frame'
  if (origin !== 'https://mail.google.com' && !(pathname.startsWith('/call') || pathname.startsWith('/_/frame'))) {
    window.open("hammerspoon://URLDispatcher?uri=" + encodeURIComponent(window.location.href), "_self");
    window.close();
  }
})();
