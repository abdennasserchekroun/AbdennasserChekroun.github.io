
var isHorizontal=0;
var smColumns=1;
var smOrientation=0;
var smViewType=0;
var dmRTL=0;
var pressedItem=-2;
var itemCursor="pointer";
var itemTarget="_self";
var statusString="tip";
var blankImage="MenuImage/empty.gif";
var menuWidth="181px";
var menuHeight="";
var smWidth="180px";
var smHeight="";
var absolutePos=0;
var posX="0px";
var posY="0px";
var topDX=3;
var topDY=0;
var DX=0;
var DY=0;
var fontStyle="normal 12px Arial, Helvetica, sans-serif";
var fontColor=["#000000","#000000"];
var fontDecoration=["none","underline"];
var fontColorDisabled="";
var menuBackColor=["transparent"];
var menuBackImage=["transparent"];
var menuBackRepeat="no-repeat";
var menuBorderColor=[""];
var menuBorderWidth=0;
var menuBorderStyle="none";
var itemBackColor=["transparent","transparent"];
var itemBackImage=["",""];
var itemBorderWidth=0;
var itemBorderColor=["",""];
var itemBorderStyle=["solid","solid"];
var itemSpacing=0;
var itemPadding="0px";
var itemAlignTop="left";
var itemAlign="left";
var subMenuAlign="left";
var iconTopWidth=4;
var iconTopHeight=18;
var iconWidth=4;
var iconHeight=18;
var arrowWidth=13;
var arrowHeight=13;
var arrowImageMain=["MenuImage/smenu.gif","MenuImage/smenu.gif"];
var arrowImageSub=["",""];
var separatorImage="MenuImage/ligne.gif";
var separatorWidth="136px";
var separatorHeight="8px";
var separatorAlignment="center";
var separatorVImage="MenuImage/ligne.gif";
var separatorVWidth="136px";
var separatorVHeight="8px";
var separatorPadding="0px";
var floatable=0;
var floatIterations=6;
var floatableX=1;
var floatableY=1;
var movable=0;
var moveWidth=12;
var moveHeight=20;
var moveColor="#AA0000";
var moveImage="";
var moveCursor="default";
var smMovable=0;
var closeBtnW=15;
var closeBtnH=15;
var closeBtn="";
var transparency=100;
var transition=1;
var transOptions="";
var transDuration=100;
var transDuration2=200;
var shadowLen=3;
var shadowColor="#777777";
var shadowTop=0;
var cssStyle=0;
var cssSubmenu="";
var cssItem=["",""];
var cssItemText=["",""];
var dmObjectsCheck=1;
var saveNavigationPath=1;
var showByClick=0;
var noWrap=0;
var pathPrefix_img="";
var pathPrefix_link="";
var smShowPause=200;
var smHidePause=1000;
var smSmartScroll=1;
var smHideOnClick=1;
var dm_writeAll=0;
var dmAJAX=0;
var dmAJAXCount=0;
var dynamic=0;
var keystrokes=0;
var dm_focus=1;
var dm_actKey=113;
var iconDefault=["MenuImage/empty.gif",""];
var dynamic = 1;
var pathPrefix_img = '';

var itemStyles = [
["itemBackColor:#6E7B01,#B9D80E","fontColor:#FFFFFF,#FFFFFF","itemBorderWidth:1","itemBorderColor:#98AA01,#98AA01"],
["itemBackColor:#6E7B01,#B9D80E","itemBorderWidth:1","itemBorderColor:#98AA01,#98AA01","fontColor:#708209,#FFFFFF"],
[],
[],
[],
[],
];

var menuStyles = [
["itemPadding:4px","menuBorderStyle:solid","menuBorderWidth:0","menuBackColor:#6E7B01"],
["itemPadding:3px","menuBorderStyle:solid","menuBorderWidth:0",],
];

var menuItems = [
["Accueil","javascript:document.location='home_027.htm'",iconDefault[0],iconDefault[1],"", , "0", "0", , ],
["Research","javascript:document.location='research_042.htm'",iconDefault[0],iconDefault[1],"", , "0", "0", , ],
["Publication","javascript:document.location='publication_041.htm'",iconDefault[0],iconDefault[1],"", , "0", "0", , ],
["Thesis","javascript:document.location='thesis_044.htm'",iconDefault[0],iconDefault[1],"", , "0", "0", , ],
["CV","javascript:document.location='cv_039.htm'",iconDefault[0],iconDefault[1],"", , "0", "0", , ],
["Teaching","javascript:document.location='teaching_046.htm'",iconDefault[0],iconDefault[1],"", , "0", "0", , ],
];
//src="MenuImage/empty.gif"
//src="MenuImage/smenu.gif"
//src="MenuImage/smenu.gif"
//src="MenuImage/ligne.gif"
//src="MenuImage/ligne.gif"
//src="MenuImage/empty.gif"


dm_init();
