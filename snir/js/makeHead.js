/* CONSTANT PART 
 */

// main css files =====================================
var css_boxes = document.createElement("link");
	css_boxes.rel = "stylesheet";
	css_boxes.type = "text/css";
	css_boxes.href = mainPath + "css/boxes.css";
document.getElementsByTagName("head")[0].appendChild(css_boxes);

var css_titles = document.createElement("link");
	css_titles.rel = "stylesheet";
	css_titles.type = "text/css";
	css_titles.href = mainPath + "css/titles.css";
document.getElementsByTagName("head")[0].appendChild(css_titles);

var css_paragraphs = document.createElement("link");
	css_paragraphs.rel = "stylesheet";
	css_paragraphs.type = "text/css";
	css_paragraphs.href = mainPath + "css/paragraphs.css";
document.getElementsByTagName("head")[0].appendChild(css_paragraphs);

var css_lists = document.createElement("link");
	css_lists.rel = "stylesheet";
	css_lists.type = "text/css";
	css_lists.href = mainPath + "css/lists.css";
document.getElementsByTagName("head")[0].appendChild(css_lists);

var css_tables = document.createElement("link");
	css_tables.rel = "stylesheet";
	css_tables.type = "text/css";
	css_tables.href = mainPath + "css/tables.css";
document.getElementsByTagName("head")[0].appendChild(css_tables);

var css_links = document.createElement("link");
	css_links.rel = "stylesheet";
	css_links.type = "text/css";
	css_links.href = mainPath + "css/links.css";
document.getElementsByTagName("head")[0].appendChild(css_links);

var css_text = document.createElement("link");
	css_text.rel = "stylesheet";
	css_text.type = "text/css";
	css_text.href = mainPath + "css/text.css";
document.getElementsByTagName("head")[0].appendChild(css_text);

var css_code = document.createElement("link");
	css_code.rel = "stylesheet";
	css_code.type = "text/css";
	css_code.href = mainPath + "css/code.css";
document.getElementsByTagName("head")[0].appendChild(css_code);







/* VARIABLE PART
 *   exploit global variables in script operateData.js  
 */

// 1. head title

switch (pageType) {
	case "Chapitre" :
	  pageHeadTitle = moduleClass + modulePartNumber + "." + pageNumber
	  									 + " – " + pageHeadTitle;
	break;
	case "TP" : 
		pageHeadTitle = moduleClass + modulePartNumber + " – TP" + pageNumber
	  									 + " : " + pageHeadTitle;
	break;
	case "Exercices" : 
		pageHeadTitle = moduleClass + modulePartNumber + " – " + pageType;
	break;
	case "Accueil" : 
		pageHeadTitle += " – " + pageType;
	break;
}

var headTitle = document.createElement("title");
var headTitleContent = document.createTextNode(pageHeadTitle);
	headTitle.appendChild(headTitleContent);
document.getElementsByTagName("head")[0].appendChild(headTitle);



// 2. Favicon

let faviconPath = "img/favicon";
	switch (moduleClass) {
		case "C" : 
		  faviconPath += "C.png";
		break;
		case "R" : 
		  faviconPath += "R.png";
		break;
		case "S" : 
		  faviconPath += "S.png";
		break;
		case "A" : 
		  faviconPath += "A.png";
		break;
}

var favicon = document.createElement("link");
	favicon.rel = "icon";
	favicon.type = "image/png";
	favicon.href = mainPath + faviconPath;
document.getElementsByTagName("head")[0].appendChild(favicon);



// 3. Special css 

if (moduleClass == "C" || moduleClass == "R" || moduleClass == "S") {
	var css_myprettyprint = document.createElement("link");
			css_myprettyprint.rel = "stylesheet";
			css_myprettyprint.type = "text/css";
			css_myprettyprint.href = mainPath + "css/myprettyprint.css";
	document.getElementsByTagName("head")[0].appendChild(css_myprettyprint);
}


	 