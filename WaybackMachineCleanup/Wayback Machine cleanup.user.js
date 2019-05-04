// ==UserScript==
// @name         Wayback Machine cleanup
// @namespace    http://fallshaw.me/
// @version      0.1
// @description  Clean up %3A url cruft in Wayback Machine Chrome search engine results.
// @author       Matthew Fallshaw
// @match        *://web.archive.org/web/*
// @copyright    https://creativecommons.org/licenses/by/4.0/
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  if (window.location.href.match(/web.archive.org\/web\/https?%3A\//)) {
    window.location.href = window.location.href.replace(/http(s?)%3A\//,"http$1:/");
  } else if (document.body.innerHTML.match(/Got an HTTP 301 response at crawl time/)) {
    // document.evaluate('//*[@id="error"]/p[3]', document, null, XPathResult.STRING_TYPE, null).stringValue
    window.location.href = window.location.href.replace(/web.archive.org\/web\/\d+\//,"web.archive.org/web/*/")
  }
})();