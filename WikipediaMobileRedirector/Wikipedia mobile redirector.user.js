// ==UserScript==
// @name         Wikipedia mobile redirector
// @namespace    http://fallshaw.me/
// @version      0.1
// @description  Redirect m.* pages to their desktop versions
// @author       Matthew Fallshaw
// @match        http*://en.m.wikipedia.org/*
// @copyright    https://creativecommons.org/licenses/by/4.0/
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    window.location.href = "http://en.wikipedia.org" + window.location.pathname;
})();