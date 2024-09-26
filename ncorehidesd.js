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

var tbl=document.getElementsByTagName("table")[1];

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

tbl=document.getElementsByTagName("table")[2];
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



