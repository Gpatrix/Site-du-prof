var htmlTag = document.querySelector("html");
let moduleClass = htmlTag.getAttribute("data-module");
let pageType = htmlTag.getAttribute("data-pagetype");
let modulePartNumber = htmlTag.getAttribute("data-modulepartnumber");
let pageNumber = htmlTag.getAttribute("data-pagenumber");
let pageState = htmlTag.getAttribute("data-pageState");
let pageHeadTitle = htmlTag.getAttribute("data-pageheadtitle");
let pageFullTitle = htmlTag.getAttribute("data-pagefulltitle");
let authorName = htmlTag.getAttribute("data-authorname");
let authorMail = htmlTag.getAttribute("data-authormail");

let mainPath = "../";
switch (pageType) {
	case "Chapitre" :
	case "TP" :
	case "Exercices" :
	  mainPath = mainPath + "../";
	break;
}

let moduleIconPath = mainPath + "img/";
let moduleIconHeight = "";
let moduleIndexPath = "";
let moduleContentPath = "";
let linksContentPath = "";

if (pageType != "Accueil") {
  moduleIndexPath = "../" + moduleIndexPath;
  moduleContentPath += "../";
  linksContentPath += "../";
}

switch (moduleClass) {
	case "C" : 
	  moduleIconPath += "logoC-HDT.png"; 
    moduleIconHeight = "5.5em";
    moduleIndexPath += "indexC.html";
    moduleContentPath += "sommaireC.html";
    linksContentPath += "liensUtilesC.html";
	break;
	case "R" : 
	  moduleIconPath += "logoR-HDT.png"; 
    moduleIconHeight = "5.5em";
    moduleIndexPath += "indexR.html";
    moduleContentPath += "sommaireR.html";
    linksContentPath += "liensUtilesR.html";
	break;
	case "S" : 
	  moduleIconPath += "logoS-HDT.png"; 
    moduleIconHeight = "5.5em";
    moduleIndexPath += "indexS.html";
    moduleContentPath += "sommaireS.html";
    linksContentPath += "liensUtilesS.html";
	break;	
	case "A" : 
	moduleIconPath += "logoJF-LDT.png"; 
    moduleIconHeight = "4em";
    moduleIndexPath += "indexA.html";
    moduleContentPath += "";
    linksContentPath += "liensUtilesA.html";
	break;
}



