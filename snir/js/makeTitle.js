let pageId = "  ";
switch (pageType) {
	case "Chapitre" :
		pageId += pageNumber;
	break;
	case "TP" :
	  pageId += "TP nº\u2009" + pageNumber;
	break;
	case "Exercices" :
	  pageId += pageType;
	break;  
	case "Accueil" :
	  pageId = pageType;
	break;
}
var pageIdLabel = document.createTextNode(pageId);


if (pageType == "Accueil") {
  var h1box = document.createElement("h1");
  		h1box.className = "nocount";
  h1box.appendChild(pageIdLabel);
  document.getElementById("mainTitle").appendChild(h1box);
}
else {
	var titleBox = document.createElement("div");
			titleBox.style = "display: inline auto";
	var titleNum = document.createElement("span");
	  	titleNum.id = "numchap";
  var pageNumBox = document.createElement("span");
			pageNumBox.id = "numcours";
	var partNum = document.createTextNode(moduleClass + modulePartNumber);	
  pageNumBox.appendChild(partNum);
  titleNum.appendChild(pageNumBox);
  titleNum.appendChild(pageIdLabel);
  titleBox.appendChild(titleNum);
	var titleH1 = document.createElement("h1");
  var titleString = document.createTextNode(pageFullTitle);
  titleH1.appendChild(titleString);
  titleBox.appendChild(titleH1);
  document.getElementById("mainTitle").appendChild(titleBox);
}

var versionBox = document.createElement("div");
		versionBox.id = "version";
var dateEnglish = document.lastModified;
var dateFrench = dateEnglish.replace(/(\d{2})\/(\d{2})/,"$2/$1");
var dateLabel = document.createTextNode("Version du " + dateFrench);
versionBox.appendChild(dateLabel);
var versionSign = document.createElement("img");
switch (pageState) {
	case "chantier" :
	  versionSign.className = "bigWarning";
	  versionSign.src = mainPath + "img/enTravaux.png";
	break;
	case "travaux" :
	  versionSign.className = "warning";
	  versionSign.src = mainPath + "img/enTravaux.png";
	break;
	case "OK" :
	  versionSign.className = "picto";
	  versionSign.src = mainPath + "img/checked.png";
	break;
	case "stable" :
	  versionSign.className = "picto";
	  versionSign.src = mainPath + "img/doubleChecked.png";
	break;
}  
versionBox.appendChild(versionSign);
document.getElementById("mainTitle").appendChild(versionBox);


