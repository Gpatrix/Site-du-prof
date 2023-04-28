var date_en = document.lastModified;
var date_fr = date_en.replace(/(\d{2})\/(\d{2})/,"$2/$1");
document.write("Last update "+date_fr);