// main structure

var navPannelDiv = document.createElement("div");
  	navPannelDiv.className = "side";

var topZoneDiv = document.createElement("div");
  	topZoneDiv.id = "topZone";

var buttonZoneDiv = document.createElement("div");
  	buttonZoneDiv.id = "buttonZone";

var moduleIconImg = document.createElement("img");
  	moduleIconImg.style = "float: left;	margin-right: 0.5em; height:" + moduleIconHeight;
  	moduleIconImg.src = moduleIconPath; 
buttonZoneDiv.appendChild(moduleIconImg);

var buttonListDiv = document.createElement("div");
  	buttonListDiv.id = "buttonList";




// broad buttons (with label)

var mainPageButton = document.createElement("button");
  	mainPageButton.id = "boutonSNIR";
  	mainPageButton.className = "broad";
  	mainPageButton.style = "display: block";
  	mainPageButton.onclick = function() {
  		window.open(mainPath + 'index.htm', '_TOP');
  	}
var mainPageButtonLabel = document.createTextNode("SNIR ");
mainPageButton.appendChild(mainPageButtonLabel);
var mainPageButtonIcon = document.createElement("img"); 
		mainPageButtonIcon.className = "icon";
		mainPageButtonIcon.src = mainPath + "img/iconBuilding.png";
mainPageButton.appendChild(mainPageButtonIcon);		
buttonListDiv.appendChild(mainPageButton);

if (pageType != "Accueil") {
	var moduleButton = document.createElement("button");
	  	moduleButton.id = "boutonModule";
	  	moduleButton.className = "broad";
	  	moduleButton.style = "display: block";
	  	moduleButton.onclick = function() {
	  		window.open(moduleIndexPath, '_TOP');
	 		}	
	var moduleButtonLabel = document.createTextNode("Module ");
	moduleButton.appendChild(moduleButtonLabel); 
	var moduleButtonIcon = document.createElement("img"); 
			moduleButtonIcon.className = "icon";
			moduleButtonIcon.src = mainPath + "img/iconHome.png";
	moduleButton.appendChild(moduleButtonIcon);	
	buttonListDiv.appendChild(moduleButton);
}


// little buttons 


var littleButtonsBoxDiv = document.createElement("div");
  	littleButtonsBoxDiv.id = "boiteBoutons";

// 1. bouton Sommaire
if (moduleClass != "A") {
	var moduleContentButton = document.createElement("button");
  	moduleContentButton.id = "boutonSommaire";
  	moduleContentButton.className = "little";
  	moduleContentButton.style = "display: none";
  	moduleContentButton.onclick = function() {
		  document.getElementById("sommaire").style.display = 'contents';
		  document.getElementById("titreSommaire").style.display = 'block';
		  document.getElementById("boutonSommaire").style.display = 'none';

		  document.getElementById("boutonLiens").style.display = 'inline-block';
		  //document.getElementById("boutonGlossaire").style.display = 'none';
		  //document.getElementById("boutonChapitre").style.display = 'none';

		  document.getElementById("titreLiens").style.display = 'none';
  		//document.getElementById("titreGlossaire").style.display = 'none';
  		//document.getElementById("titreChapitre").style.display = 'none';
		
		  document.getElementById("liens").style.display = 'none';
		  //document.getElementById("index").style.display = 'none';
		  //document.getElementById("chapitre").style.display = 'none';
		}
	var moduleContentButtonIcon = document.createElement("img"); 
			moduleContentButtonIcon.className = "icon2";
			moduleContentButtonIcon.src = mainPath + "img/iconList.png";
	moduleContentButton.appendChild(moduleContentButtonIcon);	
	littleButtonsBoxDiv.appendChild(moduleContentButton);	
}

// 2. bouton liens
var linksContentButton = document.createElement("button");
  	linksContentButton.id = "boutonLiens";
  	linksContentButton.className = "little";
  	if (moduleClass != "A") {
  		linksContentButton.style = "display: block";
  	}
  	else {
  		linksContentButton.style = "display: none";
  	}
  	linksContentButton.onclick = function () {
		  document.getElementById("liens").style.display = 'contents';
		  document.getElementById("titreLiens").style.display = 'block';
		  document.getElementById("boutonLiens").style.display = 'none';

		  document.getElementById("boutonSommaire").style.display = 'inline-block';
		  //document.getElementById("boutonGlossaire").style.display = 'none';
		  //document.getElementById("boutonChapitre").style.display = 'none';

		  document.getElementById("titreSommaire").style.display = 'none';
  		//document.getElementById("titreGlossaire").style.display = 'none';
  		//document.getElementById("titreChapitre").style.display = 'none';

		  document.getElementById("sommaire").style.display = 'none';
		  //document.getElementById("index").style.display = 'none';
		  //document.getElementById("chapitre").style.display = 'none';
		}
var linksContentButtonIcon = document.createElement("img"); 
		linksContentButtonIcon.className = "icon2";
		linksContentButtonIcon.src = mainPath + "img/iconLink.png";
linksContentButton.appendChild(linksContentButtonIcon);	
littleButtonsBoxDiv.appendChild(linksContentButton);	


/*
var pageContentButton = document.createElement("button");
  	pageContentButton.id = "boutonChapitre";
  	pageContentButton.className = "little";
  	pageContentButton.style = "display: none";
  	pageContentButton.onclick = function () {
		  document.getElementById("chapitre").style.display = 'contents';
		  document.getElementById("titreChapitre").style.display = 'block';
		  document.getElementById("boutonChapitre").style.display = 'none';

		  document.getElementById("boutonSommaire").style.display = 'inline-block';
		  document.getElementById("boutonLiens").style.display = 'inline-block';
		  document.getElementById("boutonGlossaire").style.display = 'inline-block';

		  document.getElementById("titreSommaire").style.display = 'none';
		  document.getElementById("titreLiens").style.display = 'none';
		  document.getElementById("titreGlossaire").style.display = 'none';

		  document.getElementById("sommaire").style.display = 'none';
		  document.getElementById("liens").style.display = 'none';
		  document.getElementById("glossaire").style.display = 'none'; 
    }
var pageContentButtonIcon = document.createElement("img"); 
		pageContentButtonIcon.className = "icon2";
		pageContentButtonIcon.src = mainPath + "img/iconContent.png";
pageContentButton.appendChild(pageContentButtonIcon);	
littleButtonsBoxDiv.appendChild(pageContentButton);	
*/


/*
var glossaryContentButton = document.createElement("button");
  	glossaryContentButton.id = "boutonGlossaire";
  	glossaryContentButton.className = "little";
  	glossaryContentButton.style = "display: none";
  	glossaryContentButton.onclick = function () {
		  document.getElementById("glossaire").style.display = 'contents';
		  document.getElementById("titreGlossaire").style.display = 'block';
		  document.getElementById("boutonGlossaire").style.display = 'none';

		  document.getElementById("boutonSommaire").style.display = 'inline-block';
		  document.getElementById("boutonLiens").style.display = 'inline-block';
		  document.getElementById("boutonChapitre").style.display = 'none';
			
			document.getElementById("titreSommaire").style.display = 'none';
  		document.getElementById("titreLiens").style.display = 'none';
  		document.getElementById("titreChapitre").style.display = 'none';

		  document.getElementById("sommaire").style.display = 'none';
		  document.getElementById("liens").style.display = 'none';
		  document.getElementById("chapitre").style.display = 'none';
		}
var glossaryContentButtonIcon = document.createElement("img"); 
		glossaryContentButtonIcon.className = "icon2";
		glossaryContentButtonIcon.src = mainPath + "img/iconGlossary.png";
glossaryContentButton.appendChild(glossaryContentButtonIcon);	
littleButtonsBoxDiv.appendChild(glossaryContentButton);	
*/


buttonListDiv.appendChild(littleButtonsBoxDiv);
buttonZoneDiv.appendChild(buttonListDiv);
topZoneDiv.appendChild(buttonZoneDiv);





// Content title


if (moduleClass != "A") {
	var moduleContentTitleH1 = document.createElement("h1");
			moduleContentTitleH1.id = "titreSommaire";
			moduleContentTitleH1.style = "display: block";
	var moduleContentTitleH1text = document.createTextNode("SOMMAIRE");
	moduleContentTitleH1.appendChild(moduleContentTitleH1text);
	topZoneDiv.appendChild(moduleContentTitleH1);
}

var linksContentTitleH1 = document.createElement("h1");
		linksContentTitleH1.id = "titreLiens";
		if (moduleClass != "A") {
			linksContentTitleH1.style = "display: none";
		}
		else {	
			linksContentTitleH1.style = "display: block";
		}
var linksContentTitleH1text = document.createTextNode("LIENS");
linksContentTitleH1.appendChild(linksContentTitleH1text);
topZoneDiv.appendChild(linksContentTitleH1);

navPannelDiv.appendChild(topZoneDiv);

// Content zone (variable)

var contentZoneDiv = document.createElement("div");
  	contentZoneDiv.id = "varZone";

if (moduleClass != "A") {
	var moduleContentDiv = document.createElement("div");
	  	moduleContentDiv.id = "sommaire";
	  	moduleContentDiv.style = "display : contents";
	var moduleContentObject = document.createElement("object");
			moduleContentObject.className = "include";
			moduleContentObject.type = "text/html";
	    moduleContentObject.data = moduleContentPath;
	moduleContentDiv.appendChild(moduleContentObject);
	contentZoneDiv.appendChild(moduleContentDiv);
}

var linksContentDiv = document.createElement("div");
  	linksContentDiv.id = "liens";
  	if (moduleClass != "A") {
			linksContentDiv.style = "display: none";
		}
		else {	
			linksContentDiv.style = "display: contents";
		}
var linksContentObject = document.createElement("object");
		linksContentObject.className = "include";
		linksContentObject.type = "text/html";
    linksContentObject.data = linksContentPath;
linksContentDiv.appendChild(linksContentObject);
contentZoneDiv.appendChild(linksContentDiv);




navPannelDiv.appendChild(contentZoneDiv);

document.getElementById("navPannel").appendChild(navPannelDiv);



	 