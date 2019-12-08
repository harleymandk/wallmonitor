/*======================================================================================================*/
//---------------------------------------------------------------------------------------------------------
// Ticker entries
//---------------------------------------------------------------------------------------------------------

var tickerEntries = new Array(
"................................YES!!!! -Vi fik 4 VFU pladser til Roskilde Festival 2014....",
"Vil du lave vores nye hjemmeside til support???....",
"se <b>www.computertec.dk</b> - hvad mangler der???....",
"<b>http://NetStatus</b> har info om Servere og Nettet.....",
"<b>http://ISOserver</b> tilbyder ISOfiler(Windows+Linux),medie-filer og meget mere....Brug Windows share <b>isoserver</b> eller <b>x.x.0.245</b>",
"Supporten's System : <b>http://support</b> .... HUSK! Du skal oprettes af en Admin fra supporten! Fuld domaine <b>*.skp-data.dk </b>",
".....Vores WIFI tilbyder 2.4/5 Ghz <b>SSID: skp-data </b> adgangskoden er: <b>Pwrp1234</b>.........Firewallen er en <b>PFsense</b> og har lukket for <b> P2P/Torrent, TORnet og mange direkte forbundet online-spil</b>....dog IKKE steampowered spil...",
"...Du er velkommen til at bruge en VPN/SSH/RemoteDesktop hjem til din egen maskine ;-)",
" Vil du med os til DreamHack Vinter 2014 - Snak med Sune(SSAN),Peter eller Magnus! mere info: <b>www.dreamhack.dk</b> og join vores facebook gruppe!....."
);

//---------------------------------------------------------------------------------------------------------
// Configuration
//---------------------------------------------------------------------------------------------------------

var tickerWidth = 1460;                              // width (pixels)
var tickerMargin = 40;                              // margin (pixels)
var tickerDelay = 30;                               // scrolling delay (smaller = faster)
var tickerSpacer = " ";                           // spacer between ticker entries

var tickerBGColor = "#E0F0FF";                      // background color
var tickerHLColor = "#FFF0E0";                      // hilight (mouse over) color

var tickerFont = "Times New Roman"; // font family (CSS-spec)
var tickerFontSize = 60;                            // font size (pixels)
var tickerFontColor = "red";                       // font color

var tickerBorderWidth = 0;                          // border width (pixels)
var tickerBorderStyle = "groove";                   // border style (CSS-spec)
var tickerBorderColor = "#aaaaaa";                  // border color

//---------------------------------------------------------------------------------------------------------
// Functions
//---------------------------------------------------------------------------------------------------------

var DOM = document.getElementById;
var IE4 = document.all;

var tickerIV, tickerID;
var tickerItems = new Array();
var tickerHeight = tickerFontSize + 8;

function tickerGetObj(id) {
	if(DOM) return document.getElementById(id);
	else if(IE4) return document.all[id];
	else return false;
}

function tickerObject(id) {
	this.elem = tickerGetObj(id);
	this.width = this.elem.offsetWidth;
	this.x = tickerWidth;
	this.css = this.elem.style;
	this.css.width = this.width + 'px';
	this.css.left = this.x + 'px';
	this.move = false;
	return this;
}

function tickerNext() {
	if(!DOM && !IE4) return;
	var obj = tickerItems[tickerID];
	if(obj) {
		obj.x = tickerWidth;
		obj.css.left = tickerWidth + 'px';
		obj.move = true;
	}
}

function tickerMove() {
	if(!DOM && !IE4) return;
	for(var i = 0; i < tickerItems.length; i++) {
		if(tickerItems[i].move) {
			if(tickerItems[i].x > -tickerItems[i].width) {
				tickerItems[i].x -= 2;
				tickerItems[i].css.left = tickerItems[i].x + 'px';
			}
			else tickerItems[i].move = false;
		}
	}
	if(tickerItems.length == 1) {
		if(tickerItems[tickerID].x + tickerItems[tickerID].width <= 0) {
			tickerNext();
		}
	}
	else if(tickerItems[tickerID].x + tickerItems[tickerID].width <= tickerWidth) {
		tickerID++;
		if(tickerID >= tickerItems.length) tickerID = 0;
		tickerNext();
	}
}

function tickerStart(init) {
	if(!DOM && !IE4) return;
	if(tickerBGColor) {
		var obj = tickerGetObj('divTicker');
		obj.style.backgroundColor = tickerBGColor;
	}
	if(init) {
		tickerID = 0;
		tickerNext();
	}
	tickerIV = setInterval('tickerMove()', tickerDelay);
}

function tickerStop() {
	if(!DOM && !IE4) return;
	clearInterval(tickerIV);
	if(tickerHLColor) {
		var obj = tickerGetObj('divTicker');
		obj.style.backgroundColor = tickerHLColor;
	}
}

function tickerInit() {
	if(!DOM && !IE4) return;
	for(var i = 0; i < tickerEntries.length; i++) {
		tickerItems[i] = new tickerObject('divTickerEntry' + (i+1));
	}
	var obj = tickerGetObj('divTicker');
	obj.style.width = tickerWidth + 'px';
	obj.style.visibility = 'visible';
	tickerStart(true);
}

function tickerReload() {
	if(!DOM && !IE4) return;
	document.location.reload();
}

//window.onresize = tickerReload;
window.onload = tickerInit;

//---------------------------------------------------------------------------------------------------------
// Build ticker
//---------------------------------------------------------------------------------------------------------

document.write(
	'<style> ' +
	'#divTicker { ' +
	'position: absolute; ' +
	'width: 10000px; ' +
	'height: ' + tickerHeight + 'px; ' +
	'cursor: default; ' +
	'overflow: hidden; ' +
	'visibility: hidden; ' +
	(tickerBorderWidth ? 'border-width: ' + tickerBorderWidth + 'px; ' : '') +
	(tickerBorderStyle ? 'border-style: ' + tickerBorderStyle + '; ' : '') +
	(tickerBorderColor ? 'border-color: ' + tickerBorderColor + '; ' : '') +
	'} ' +
	'.cssTickerContainer { ' +
	'position: relative; ' +
	'height: ' + tickerHeight + 'px; ' +
	'margin-top: ' + tickerMargin + 'px; ' +
	'margin-bottom: ' + tickerMargin + 'px; ' +
	'} ' +
	'.cssTickerEntry { ' +
	'font-family: ' + tickerFont + '; ' +
	'font-size: ' + tickerFontSize + 'px; ' +
	'color: ' + tickerFontColor + '; ' +
	'} ' +
	'</style>'
);

document.write(
	'<div class="cssTickerContainer">' +
	'<div id="divTicker"onMouseOn="tickerstop() onMouseOut="tickerStart()">'
);

for(var i = 0; i < tickerEntries.length; i++) {
	document.write(
		'<div id="divTickerEntry' + (i+1) + '" class="cssTickerEntry" ' +
		'style="position:absolute; top:2px; white-space:nowrap">' +
		tickerEntries[i] + ((tickerEntries.length > 1) ? ' ' + tickerSpacer + '&nbsp;' : '') +
		'</div>'
	);
}
document.write('</div></div>');

//---------------------------------------------------------------------------------------------------------
