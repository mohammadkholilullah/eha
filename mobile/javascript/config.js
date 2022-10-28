	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#1F2232";bookConfig.appLogoIcon="files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#FFFFFF";bookConfig.toolbarAlwaysShow="No";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Show";bookConfig.EmailButtonVisible="Show";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.bookmarkBackground="#000000";bookConfig.bookmarkFontColor="#cccccc";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchFontColor="#FFFFFF";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Show";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.minZoomWidth="700";bookConfig.minZoomHeight="518";bookConfig.mouseWheelFlip="Yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.showThicknessOnMobile="no";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.updateURLForPage="No";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#827418";bookConfig.searchFontColor="#FFFDDD";bookConfig.totalPageCount=31;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2546;;bookConfig.securityType="1";bookConfig.bookTitle="Modul Akuntansi_Elemen Biaya Produksi";bookConfig.bookmarkCR="f29b6fe61f82b8a85d31bfcf2c07d87d8d0fe6e7";bookConfig.productName="Flip PDF Corporate Edition";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx<br/>   I\'m going to buy below product(s):<br/>    ${shopping}<br/>Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202226213527938","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"","x":"0.507458","y":"0.323534","width":"0.255812","height":"0.024587","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.jurnal.id/id/blog/format-laporan-keuangan/","linkTarget":"Blank"}}],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoButton","annoId":"202226213527849","alpha":"1","location":{"tannoName":"button1","x":"0.21165087683934689","y":"0.7803591790193843","width":"0.4384196734529328","height":"0.09145762067654883","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","url":"./files/pageConfig/button_watermark09.swf","buttonCaption":"Apa itu produksi?","captionY":"35","HRate":"0.045134999999999995","Format":{"font":"Times New Roman","size":"25","bold":"false","italic":"false","color":"16777215"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://bit.ly/apaituproduksi","linkTarget":"_blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"202226213525871","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube1","x":"0.2166901834307599","y":"0.34563854047890535","width":"0.621514479607606","height":"0.21142151273280121","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"-KBLD1pddxk","playerParameters":"autoplay=0\&loop=0"}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoButton","annoId":"202226213522704","alpha":"1","location":{"tannoName":"button2","x":"0.21165087683934689","y":"0.7791714177118967","width":"0.44177921118054153","height":"0.08789433675408591","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","url":"./files/pageConfig/button_watermark09.swf","buttonCaption":"Diskusimu","captionY":"35","HRate":"0.045134999999999995","Format":{"font":"Times New Roman","size":"25","bold":"false","italic":"false","color":"16777215"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://bit.ly/diskusimu","linkTarget":"_blank"}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoButton","annoId":"202226213526949","alpha":"1","location":{"tannoName":"button3","x":"0.2166901834307599","y":"0.3634549600912201","width":"0.4602566686823893","height":"0.08908209806157355","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","url":"./files/pageConfig/button_watermark09.swf","buttonCaption":"Apa itu biaya produksi?","captionY":"35","HRate":"0.045134999999999995","Format":{"font":"Times New Roman","size":"25","bold":"false","italic":"false","color":"16777215"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://bit.ly/apaitubiayaproduksi","linkTarget":"_blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"202226213521776","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube2","x":"0.22172949002217293","y":"0.6223869251235272","width":"0.6248740173352146","height":"0.225674648422653","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"FTsADn9nzqU","playerParameters":"autoplay=0\&loop=0"}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoButton","annoId":"202226213522282","alpha":"1","location":{"tannoName":"button4","x":"0.22340925888597726","y":"0.6188236412010643","width":"0.4317005979977155","height":"0.08433105283162295","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","url":"./files/pageConfig/button_watermark09.swf","buttonCaption":"Tautan YouTube","captionY":"35","HRate":"0.045134999999999995","Format":{"font":"Times New Roman","size":"25","bold":"false","italic":"false","color":"16777215"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://bit.ly/tautantugasyoutube","linkTarget":"_blank"}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoButton","annoId":"202226213525753","alpha":"1","location":{"tannoName":"button1","x":"0.22508902774978162","y":"0.3373242113264918","width":"0.4199422159510851","height":"0.09026985936906119","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","url":"./files/pageConfig/button_watermark09.swf","buttonCaption":"Analisismu","captionY":"35","HRate":"0.045134999999999995","Format":{"font":"Times New Roman","size":"25","bold":"false","italic":"false","color":"16777215"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://bit.ly/Analisiscaramenghasilkanproduk","linkTarget":"_blank"}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoButton","annoId":"202226213523718","alpha":"1","location":{"tannoName":"button2","x":"0.20997110797554255","y":"0.7672938046370201","width":"0.44849828663575886","height":"0.09145762067654883","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","url":"./files/pageConfig/button_watermark09.swf","buttonCaption":"Hasil Diskusi Kelompok","captionY":"35","HRate":"0.042759","Format":{"font":"Times New Roman","size":"24","bold":"false","italic":"false","color":"16777215"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://bit.ly/Diskusialiranfisikproduk","linkTarget":"_blank"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoButton","annoId":"202226213525356","alpha":"1","location":{"tannoName":"button4","x":"0.21836995229456424","y":"0.3883979475484607","width":"0.4300208291339111","height":"0.09026985936906119","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","url":"./files/pageConfig/button_watermark09.swf","buttonCaption":"PPT Kelompok","captionY":"35","HRate":"0.045134999999999995","Format":{"font":"Times New Roman","size":"25","bold":"false","italic":"false","color":"16777215"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://bit.ly/PPTaliranfisikproduk","linkTarget":"_blank"}}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoButton","annoId":"202226213523076","alpha":"1","location":{"tannoName":"button1","x":"0.2166901834307599","y":"0.3361364500190042","width":"0.4367399045891285","height":"0.09145762067654883","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","url":"./files/pageConfig/button_watermark09.swf","buttonCaption":"Perbedaan Pencatatan","captionY":"35","HRate":"0.042759","Format":{"font":"Times New Roman","size":"24","bold":"false","italic":"false","color":"16777215"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://bit.ly/Perbedaanpencatatan","linkTarget":"_blank"}}],[{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoText","annoId":"202226213527666","alpha":"1","location":{"tannoName":"text1","x":"0.5240878855069542","y":"0.4988597491448119","width":"0.22282133978364577","height":"0.029694032687191185","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","selectable":"true","auto":"true","textStr":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"LEFT\"><FONT FACE=\"Times New Roman\" SIZE=\"12\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\">lalu    isi   kolom    kosong</FONT></P></TEXTFORMAT>","lineHeightRation":"0.045696999999999995","formats":{"defaultFormat":{"htmlText":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"LEFT\"><FONT FACE=\"Times New Roman\" SIZE=\"12\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\">lalu    isi   kolom    kosong</FONT></P></TEXTFORMAT>","pageH":"841.92","pageW":"595.32"}},"background":{"alpha":"1","fillBg":"true","color":"14013909"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoButton","annoId":"20222621352347","alpha":"1","location":{"tannoName":"button2","x":"0.21836995229456424","y":"0.5641866210566325","width":"0.4384196734529328","height":"0.09026985936906119","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","url":"./files/pageConfig/button_watermark09.swf","buttonCaption":"Jurnal","captionY":"35","HRate":"0.045134999999999995","Format":{"font":"Times New Roman","size":"25","bold":"false","italic":"false","color":"16777215"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://bit.ly/PencatatanJurnal","linkTarget":"_blank"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202226213521666","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link1","x":"0.286669","y":"0.711008","width":"0.188722","height":"-0.015778","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://pngwing.com","linkTarget":"Blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoButton","annoId":"202226213528916","alpha":"1","location":{"tannoName":"button3","x":"0.22340925888597726","y":"0.23517673888255416","width":"0.4283410602701068","height":"0.09620866590649946","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","url":"./files/pageConfig/button_watermark09.swf","buttonCaption":"Catatan Jurnal","captionY":"35","HRate":"0.045134999999999995","Format":{"font":"Times New Roman","size":"25","bold":"false","italic":"false","color":"16777215"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://bit.ly/CatatanJurnalTransaksi","linkTarget":"_blank"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"20222621352926","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link2","x":"0.284267","y":"0.47653","width":"0.154959","height":"0.030217","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://pt.slideshare.net/rieandha?utm_campaign=profiletracking\&utm_medium=sssite\&utm_source=ssslideview","linkTarget":"Blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoButton","annoId":"202226213522791","alpha":"1","location":{"tannoName":"button1","x":"0.22172949002217293","y":"0.7494773850247055","width":"0.4249815225424981","height":"0.0950209045990118","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","url":"./files/pageConfig/button_watermark09.swf","buttonCaption":"Analisis Aliran Biaya","captionY":"35","HRate":"0.042759","Format":{"font":"Times New Roman","size":"24","bold":"false","italic":"false","color":"16777215"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://bit.ly/AliranBiayaProduksi","linkTarget":"_blank"}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoButton","annoId":"202226213527570","alpha":"1","location":{"tannoName":"button2","x":"0.22508902774978162","y":"0.17103762827822122","width":"0.4333803668615198","height":"0.09145762067654883","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","url":"./files/pageConfig/button_watermark09.swf","buttonCaption":"Skenario Perusahaan","captionY":"35","HRate":"0.042759","Format":{"font":"Times New Roman","size":"24","bold":"false","italic":"false","color":"16777215"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://bit.ly/SkenarioPerusahaanManufaktur","linkTarget":"_blank"}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoButton","annoId":"202226213527137","alpha":"1","location":{"tannoName":"button3","x":"0.3376335416246724","y":"0.7090935005701254","width":"0.39474568299402","height":"0.07595733561383505","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","url":"./files/pageConfig/button_watermark09.swf","buttonCaption":"Pilihan Ganda","captionY":"35","HRate":"0.045134999999999995","Format":{"font":"Times New Roman","size":"25","bold":"false","italic":"false","color":"16777215"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://bit.ly/TesAkhirPG","linkTarget":"_blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoButton","annoId":"202226213521281","alpha":"1","location":{"tannoName":"button4","x":"0.3359537727608681","y":"0.798472538958571","width":"0.39760129006248734","height":"0.07263160395286963","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","url":"./files/pageConfig/button_watermark09.swf","buttonCaption":"Essay","captionY":"35","HRate":"0.045134999999999995","Format":{"font":"Times New Roman","size":"25","bold":"false","italic":"false","color":"16777215"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://bit.ly/TesAkhirModul","linkTarget":"_blank"}}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202226213529738","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link1","x":"0.602012","y":"0.84943","width":"0.239781","height":"-0.021016","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:sitij2415@gmail.com","linkTarget":"Blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoButton","annoId":"202226213529324","alpha":"1","location":{"tannoName":"button5","x":"0.25532486729825976","y":"0.16153553781832003","width":"0.5140092723241282","height":"0.08433105283162295","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","url":"./files/pageConfig/button_watermark09.swf","buttonCaption":"Kegiatan Siswa","captionY":"35","HRate":"0.045134999999999995","Format":{"font":"Times New Roman","size":"25","bold":"false","italic":"false","color":"16777215"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://bit.ly/AksesTugasSiswa","linkTarget":"_blank"}}],[]]}; bookConfig.isFlipPdf=false;
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}