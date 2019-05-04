// ==UserScript==
// @name         Wikipedia mobile redirector
// @namespace    http://fallshaw.me/
// @description  Redirect m.* pages to their desktop versions
// @version      0.2
// @homepage     https://github.com/matthewfallshaw/userscripts/blob/master/WikipediaMobileRedirector/Wikipedia%20mobile%20redirector.user.js
// @updateURL    https://github.com/matthewfallshaw/userscripts/raw/master/WikipediaMobileRedirector/Wikipedia%20mobile%20redirector.user.js
// @downloadURL  https://github.com/matthewfallshaw/userscripts/raw/master/WikipediaMobileRedirector/Wikipedia%20mobile%20redirector.user.js
// @supportURL   https://github.com/matthewfallshaw/userscripts/issues
// @contributionURL https://intelligence.org/donate/
// @author       Matthew Fallshaw
// @copyright    https://creativecommons.org/licenses/by/4.0/
// @match        http*://en.m.wikipedia.org/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    window.location.href = "http://en.wikipedia.org" + window.location.pathname;
})();
