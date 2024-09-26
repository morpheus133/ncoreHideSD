// ==UserScript==
// @name           ncoreHideSD
// @namespace      https://github.com/morpheus133/ncoreHideSD/new/master
// @updateURL   https://raw.githubusercontent.com/morpheus133/ncoreHideSD/refs/heads/master/ncorehidesd.js
// @downloadURL https://raw.githubusercontent.com/morpheus133/ncoreHideSD/refs/heads/master/ncorehidesd.js
// @description    Ncore-on eltünteti az SD tartalmakat a keresőből
// @include        /^https?://ncore\.(cc|pro)\/.*/
// @author         Morpheus133
// @copyright      (C) 2024  Morpheus133
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// @version        1.0
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_registerMenuCommand
// @grant          GM_getResourceURL
// @grant          GM_addStyle
// ==/UserScript==


// GM_addStyle('input.g_mehet { display: none; }');


//var fstTable    = document.querySelector ("table_torrcat");


//fstTable.rows[2].cells[0].textContent = "*changed*";

var tbl=document.getElementsByTagName("table")[1]; //get the first TABLE

//tbl.rows[0].cells[1].width = 60;
tbl.rows[0].deleteCell(1);
tbl.rows[0].deleteCell(1);
tbl.rows[0].deleteCell(1);
tbl.rows[0].deleteCell(1);
tbl.rows[0].deleteCell(1);
tbl.rows[0].deleteCell(1);
tbl.rows[0].deleteCell(1);
tbl.rows[0].deleteCell(1);
tbl.rows[0].deleteCell(1);
tbl.rows[0].deleteCell(1);
tbl.rows[0].deleteCell(1);
tbl.rows[0].deleteCell(1);
tbl.rows[0].insertCell();
tbl.rows[0].insertCell();
tbl.rows[0].insertCell();
tbl.rows[0].insertCell();
tbl.rows[0].insertCell();
tbl.rows[0].insertCell();
tbl.rows[0].insertCell();
tbl.rows[0].insertCell();
tbl.rows[0].insertCell();
tbl.rows[0].insertCell();

tbl=document.getElementsByTagName("table")[2]; //get the first TABLE
tbl.rows[0].deleteCell(1);
tbl.rows[0].deleteCell(1);
tbl.rows[0].deleteCell(1);
tbl.rows[0].deleteCell(1);
tbl.rows[0].deleteCell(1);
tbl.rows[0].deleteCell(1);
tbl.rows[0].deleteCell(1);
tbl.rows[0].deleteCell(1);
tbl.rows[0].insertCell();
tbl.rows[0].insertCell();
tbl.rows[0].insertCell();
tbl.rows[0].insertCell();
tbl.rows[0].insertCell();
tbl.rows[0].insertCell();
tbl.rows[0].insertCell();
tbl.rows[0].insertCell();






