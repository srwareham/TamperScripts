// ==UserScript==
// @name       Always 1-Page Business Insider
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://www.businessinsider.com/*
// @copyright  2012+, You
// ==/UserScript==

var currentURL = document.URL
var opCode = "?op=1"
if (currentURL.indexOf(opCode) == -1) {
	var newURL = currentURL + opCode
	window.location.href= newURL
}