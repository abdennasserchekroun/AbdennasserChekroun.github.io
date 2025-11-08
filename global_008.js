// JavaScript Document

var Timer_Izi_CloseSsMenuPopUp;
var nav=cherchenav();

function Izi_OpenSsMenuPopUp(id,event,SsMenuIndex,sens)
{
	var SsLeft=0,SsTop=0
	var menu=d_dm[0],smVar=menu.m[SsMenuIndex]
	if(smVar){
		var obj=_dmni(smVar);
		
		if(obj.style.visibility!='visible'){
			
			SsMenuIco = document.getElementById(id);
			if (SsMenuIco) {
				Coord=Izi_findPos(SsMenuIco)
				switch (sens) 
				{
				case "left":
				var SsMenuWidth=obj.style.width.replace('px','')
				if (SsMenuWidth>0){
					SsLeft=Coord[0] - SsMenuWidth;
					SsTop=Coord[1];
				}
				break;
				case "right":
				SsLeft=Coord[0] + SsMenuIco.width;
				SsTop=Coord[1];
				break;
				case "bottom":
				SsLeft=Coord[0];
				SsTop=Coord[1] + SsMenuIco.height+5;
				break;
				}

			}
			
			dm_ext_hideAllSubmenus(0)			
		    dm_popup(0,SsMenuIndex, 0, event, SsLeft, SsTop)

		}
	}
}

function Izi_CloseSsMenuPopUp(SsMenuIndex)
{
	var menu=d_dm[0],smVar=menu.m[SsMenuIndex]
	if(smVar){
		clearTimeout(smVar.hideTimer);
		smVar.hideTimer=setTimeout("dm_popup_close(0,"+SsMenuIndex+")",1000);
	}
}


function Izi_findPos(obj) {
	var curleft = curtop = 0;
	if (obj.offsetParent) {
		do {
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
		} while (obj = obj.offsetParent);
	}
	return [curleft,curtop];
}


//fonction de recherche du navigateur	
function cherchenav()
{
	var nav;
	var ns4=document.layers;
	var ie4=document.all;
	var ns6=document.getElementById&&!document.all;
	var op = window.opera;
	if (ns6) 
	{ 
	  // Navigateur Netscape 5 et plus et DOM-1.
	 nav="ns6";
	} 
	else if (ns4) 
	{ 
	  // Navigateur Netscape 4.7 et moins. 
	 nav="ns4";
	} 
	else if (op) 
	{
	nav="opera";
	}
	else if (ie4) 
	{ 
	  // Internet Explorer et Opera
	 nav="ie4";
	}	
	return nav;
}



function CharteVerticalCenter() {
	
	if ($(document).height()>$("#XBody").height()) {

		var top = ($(document).height()-$("#XBody").height())/2;
		$("#XBody").css("top",top + "px");
	}
	
}
function TopHeight() {
	var heightTop1 =0; 
	var heightTop2 =0; 
	if ($('.Courant').size()>0) {
		var Couranttop = $('.Courant').position().top; 
		var Courantheight = $('.Courant').height()
		heightTop1=Couranttop+Courantheight;


	} 
	
	$('.Top div').each(function (i) {
		var heightTmp =  parseInt($(this).css('top').replace('px','')) + parseInt($(this).css('height').replace('px',''));
		if (heightTmp>heightTop2) {heightTop2 = heightTmp;}
	});
			
	if (heightTop1 == undefined) {heightTop1=0};
	if (heightTop1>heightTop2) {$('.Top').height(heightTop1);} else {$('.Top').height(heightTop2);}

	
	if ($('.Top').height()<10){$('.Top').height(400)};
}


/*var PosCharteMemoStyleMarginLeft="";
var PosCharteMemoStyleLeft="";
var PosCharteMemoStyleMarginTop="";
var PosCharteMemoStyleTop="";
function LockNegPosCharte(){
try {
	var ObjPosCharte = document.getElementById("PosCharte"); 
	

	
	if (ObjPosCharte!=null) {
		if (PosCharteMemoStyleMarginLeft==""){PosCharteMemoStyleMarginLeft=ObjPosCharte.style.marginLeft}
		if (PosCharteMemoStyleLeft==""){PosCharteMemoStyleLeft=ObjPosCharte.style.left}
		if (document.body.clientWidth<ObjPosCharte.offsetWidth && PosCharteMemoStyleLeft=='50%') {
			ObjPosCharte.style.marginLeft="0px"
			ObjPosCharte.style.left="0px"
		}else{
			ObjPosCharte.style.marginLeft=PosCharteMemoStyleMarginLeft
			ObjPosCharte.style.left=PosCharteMemoStyleLeft
		}
		
		if (PosCharteMemoStyleMarginTop==""){PosCharteMemoStyleMarginTop=ObjPosCharte.style.marginTop}
		if (PosCharteMemoStyleTop==""){PosCharteMemoStyleTop=ObjPosCharte.style.top}
		if (document.body.clientHeight<ObjPosCharte.offsetHeight && PosCharteMemoStyleTop=='50%') {
			ObjPosCharte.style.marginTop="0px"
			ObjPosCharte.style.top="0px"
		}else{
			ObjPosCharte.style.marginTop=PosCharteMemoStyleMarginTop
			ObjPosCharte.style.top=ObjPosCharte.style.top
		}
		
	}
}
catch(e) {}
}*/