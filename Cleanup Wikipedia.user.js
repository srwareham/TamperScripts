// ==UserScript==
// @name Cleanup Wikipedia
// @namespace https://github.com/srwareham/
// @version 0.2
// @description  Wikipedia minimilization / screen decluttering / simple french language access
// @match http://*.wikipedia.org/wiki/*
// @match https://*.wikipedia.org/wiki/*
// @copyright  2014+, ebriousCoding
// ==/UserScript==


// This script was written to make Wikipedia even the slightest bit more readable.  It was written primarily to experiement with Tampermonkey and to learn some js.

// It became annoying to read articles in French without the sidebar so pressing the "f" key will now load the French version if it exists.

main()

function main(){
    addSwitchToFrenchKey()
    removeUnwantedElements()
    adjustStyling()
}


// Handles actions based on keydowns
function keyBoardHandler(event){
    if (event.which == 70){//70 = f
		if (window.frenchLink != null){
     		switchURL(frenchLink)
    	}
    }
}

// Change the Window's url to the given url
function switchURL(URL){
    window.location.href= URL
}

//  Gather state for an eventlistener to switch to the french language page and activate it
function addSwitchToFrenchKey(){
    var frenchLink = getLinkBasedOnText("Français")
    if (frenchLink != null){
     	window.frenchLink = frenchLink   
    }
	window.addEventListener ("keydown", keyBoardHandler, false);
}



// Given the text of a link, returns the href of the link
function getLinkBasedOnText(text){
 	var links = document.getElementsByTagName('a')
    for (var i =0; i< links.length; i++){
        var link = links[i]
        if (link.innerText === text){
            return link.href
        }
    }
}

function getFrenchLink(){
 	var links = document.getElementsByTagName('a')
    var frLink = document.URL
    var bool = false 
   //("interlanguage-link interwiki-fr")
    for (var i =0; i< links.length; i++){
        var link = links[i]
        if (link.innerText === "Français"){
        	bool = true
            frLink = link.href
            break
        }
    }
    return frLink
}

// Delete page elements deemed unnecessary

function removeUnwantedElements(){
    
    var elementIDsToRemove = ["p-namespaces", "right-navigation", "mw-panel"];
    
    removeElementsByIDArray(elementIDsToRemove)
    
}

// Page prettying-up needed after removing unwanted elements

function adjustStyling(){
    
    document.getElementById("content").setAttribute("style", "margin-left:" + 0 + "px");
    
    document.getElementById("mw-page-base").setAttribute("style", "height:" + 2 + "em");
    
}

function removeElementById(elementID){
    
    var element = document.getElementById(elementID);
    
    element.parentNode.removeChild(element);
    
}

function removeElementsByIDArray(array){
    
    for (var i = 0; i< array.length; i++){
        
        var id = array[i]
        
        removeElementById(id)
        
    }
    
}