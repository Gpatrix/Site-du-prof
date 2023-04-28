/* 1. Button Hide/Show navpannel
 */

var buttonHidePannel = document.createElement("button");
	buttonHidePannel.id = "hidePannel";
	buttonHidePannel.className = "little";
	buttonHidePannel.style = "display: inline";
	buttonHidePannel.onclick = function () {
	  this.style.display = 'none';
	  document.getElementById("showPannel").style.display = 'inline';
	  document.getElementById("navPannel").style.display = 'none';
	};
var iconHidePannel = document.createElement("img");
  iconHidePannel.className = "bouton";
  iconHidePannel.src = mainPath + "img/iconHidePannel.png";
buttonHidePannel.appendChild(iconHidePannel);
document.getElementsByTagName("header")[0].appendChild(buttonHidePannel);

var buttonShowPannel = document.createElement("button");
	buttonShowPannel.id = "showPannel";
	buttonShowPannel.className = "little";
	buttonShowPannel.style = "display: none";
	buttonShowPannel.onclick = function () {
	  this.style.display = 'none';
	  document.getElementById("hidePannel").style.display = 'inline';
	  document.getElementById("navPannel").style.display = 'block';
};

var iconShowPannel = document.createElement("img");
  	iconShowPannel.className = "bouton";
  	iconShowPannel.src = mainPath + "img/iconShowPannel.png";
buttonShowPannel.appendChild(iconShowPannel);
document.getElementsByTagName("header")[0].appendChild(buttonShowPannel);





/* 2. Module title
 */

let moduleTitleString1 = "";
let moduleTitleString2 = "";
switch (moduleClass) {
	case "C" :
	  moduleTitleString1 = "FORMATION AU ";
	  moduleTitleString2 = "LANGAGE C";
	break;
	case "R" :
	  moduleTitleString1 = "FORMATION AUX ";
		moduleTitleString2 = "RÉSEAUX";
	break;
	case "S" : 
		moduleTitleString1 = "FORMATION AUX ";
		moduleTitleString2 = "SYSTÈMES";
	break;
	case "A" : 
		moduleTitleString1 = "STS SNIR ";
		moduleTitleString2 = "PREMIÈRE ANNÉE";
	break;
}

var moduleTitle = document.createElement("div");
		moduleTitle.className = "bandContent";
var moduleTitleP1 = document.createTextNode(moduleTitleString1);
  	moduleTitle.appendChild(moduleTitleP1);
var moduleTitleSuite = document.createElement("em"); 
		moduleTitleSuite.style="color: #0066FF; font-size: 110%"
var moduleTitleP2 = document.createTextNode(moduleTitleString2); 
moduleTitleSuite.appendChild(moduleTitleP2);
moduleTitle.appendChild(moduleTitleSuite);  
document.getElementsByTagName("header")[0].appendChild(moduleTitle);







/* 3. Page title
 */

let pageTitleString = "— " + pageType;
switch (pageType) {
	case "Chapitre" :
	case "TP" : 
	  pageTitleString += " " + moduleClass + modulePartNumber + "‑" + pageNumber;
	break;
	case "Exercices" : 
	  pageTitleString += " " + moduleClass + modulePartNumber;
	break;
}

var pageTitle = document.createElement("div");
	pageTitle.className = "bandContent2";
var pageTitleContent = document.createTextNode(pageTitleString);
	pageTitle.appendChild(pageTitleContent);  
document.getElementsByTagName("header")[0].appendChild(pageTitle);







/* 4. Version mode button for chapters
 */

// button "Expert Mode"

var buttonExpertMode = document.createElement("button");
buttonExpertMode.id = "expert";
buttonExpertMode.className = "full";
buttonExpertMode.style = "display: inline; color : #CC050E;";
buttonExpertMode.onclick = function () {
  // button management
  this.style.display = "none";
  document.getElementById("beginner").style.display = "inline";

  // section content management
  var remarques = document.querySelectorAll(".remarques");
  for (var element = 0; element < remarques.length; element++) {
    remarques[element].style.display = "none";
  }

  var complement = document.querySelectorAll(".complementExpert");
  for (var element = 0; element < complement.length; element++) {
    complement[element].style.display = "none";
  }

  var expert = document.querySelectorAll(".expert");
  for (var element = 0; element < expert.length; element++) {
    expert[element].style.display = "none";
  }
};
var buttonExpertContent = document.createTextNode("INITIÉ");
buttonExpertMode.appendChild(buttonExpertContent);
document.getElementsByTagName("header")[0].appendChild(buttonExpertMode);


// button "Beginner Mode"

var buttonBeginnerMode = document.createElement("button");
	buttonBeginnerMode.id = "beginner";
	buttonBeginnerMode.className = "full";
	buttonBeginnerMode.style = "display: none; color : #95C71D;";
	buttonBeginnerMode.onclick = function () {
	  // button management
	  this.style.display = "none";
	  document.getElementById("expert").style.display = "inline";
    
    // section content management
	  var remarques = document.querySelectorAll(".remarques");
	  for (var element = 0; element < remarques.length; element++) {
	    remarques[element].style.display = "inline-block";
	  }

	  var complement = document.querySelectorAll(".complementExpert");
	  for (var element = 0; element < complement.length; element++) {
	    complement[element].style.display = "inline-block";
	  }

	  var expert = document.querySelectorAll(".expert");
	  for (var element = 0; element < expert.length; element++) {
	    expert[element].style.display = "inline-block";
	  }
	};
var buttonBeginnerContent = document.createTextNode("DÉBUTANT");
buttonBeginnerMode.appendChild(buttonBeginnerContent);
document.getElementsByTagName("header")[0].appendChild(buttonBeginnerMode);



	 