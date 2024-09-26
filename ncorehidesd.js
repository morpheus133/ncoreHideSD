// ==UserScript==
// @name           ncoreHideSD
// @namespace      https://github.com/morpheus133/ncoreHideSD
// @updateURL      https://raw.githubusercontent.com/morpheus133/ncoreHideSD/refs/heads/master/ncorehidesd.js
// @downloadURL    https://raw.githubusercontent.com/morpheus133/ncoreHideSD/refs/heads/master/ncorehidesd.js
// @description    Ncore-on eltünteti az SD tartalmakat a kereső mezőből
// @icon           https://static.ncore.pro/styles/ncore.ico
// @match          https://*.ncore.pro/*
// @author         Morpheus133
// @copyright      (C) 2024  Morpheus133
// @version        1.3
// ==/UserScript==

var movies_tbl=document.getElementsByTagName("table")[1];
var series_tbl=document.getElementsByTagName("table")[2];

/* Delete cells from Table */
for( let i=12; i--; ){
   movies_tbl.rows[0].deleteCell(1);
   if (i>3){
       series_tbl.rows[0].deleteCell(1);
   }
}

/* Add empty cells back to keep arrangement */
for( let i=10; i--; ){
   movies_tbl.rows[0].insertCell();
    if (i>2) {
        series_tbl.rows[0].insertCell();
    }
}
