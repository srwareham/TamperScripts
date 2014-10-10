// ==UserScript==
// @name       Cleanup Weather Channel
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://www.weather.com/weather/tenday/USDC0001
// @copyright  2012+, You
// ==/UserScript==

function removeElementsByClass(className){
    elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function removeElementByID(elementID){
    
    var element = document.getElementById(elementID);
    
    element.parentNode.removeChild(element);
    
}

removeElementsByClass("wx-inner")
removeElementsByClass("wx-lifestyles")
removeElementsByClass("wx-social-share-ls-wrapper")

removeElementByID("wx-rail")
removeElementByID("footer-wrapper")
removeElementByID("wx-Strip")
