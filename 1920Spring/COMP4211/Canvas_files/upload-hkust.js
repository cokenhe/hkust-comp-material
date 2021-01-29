function onPage(regex, fn) {
  if (location.pathname.match(regex)) fn();
}


/*#UH-1 loading Current hkust.js*/
$.getScript('https://ilearn.ust.hk/canvas/canvas-js-branding/hkust.js', function()
{
//hkust.js code here
    // script is now loaded and executed.
    // put your dependent JS here.
	
});
/*#UH-1 end*/

/*
require(['https://canvasint-test.ust.hk/canvas-ui/canvas-js-branding/hkust.js'], function( {
   
});
*/


$(document).ready(function(){
	//console.log("[Debug Start] For sfq.js");
	/*#UH-2 code for adding SFQ icon with link */
	var assetGetAppUrl = "https://asset.ust.hk/asset/";
	//if ($("#assetUrlForMenu").length == 0) {	
	var nodeForSFQpart = "<li class='menu-item ic-app-header__menu-list-item'><a id='global_nav_sfq_link' class='ic-app-header__menu-list-link' href='#' onclick='return assetPopUpWindow(\"" + assetGetAppUrl + "canvasIntegrationDetail.do\", \"ASSETSFQDETAIL\", 768, 1050);' ><div class='menu-item-icon-container' aria-hidden='true'>";
	var svgPart = "<svg version='1.1' id='Layer_1'  class='ic-icon-svg ic-icon-svg--sfq' viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 250 250' xml:space='preserve'>"+
	"<path fill='#FFFFFF' d='M212.049,50.102l-7.764,18.276c3.996,3.599,6.715,8.813,6.715,14.614V214.85c0,10.858-9.002,20.15-19.86,20.15H59.282C48.424,235,40,225.708,40,214.85V82.993C40,72.134,48.424,63,59.282,63h81.964l4.456-15H47.718C34.942,48,25,58.653,25,71.429v155.563C25,239.769,34.942,250,47.718,250h155.564C216.058,250,226,239.769,226,226.992V71.429C226,61.835,220.367,53.607,212.049,50.102z'/>"+
	"<path fill='#FFFFFF' d='M214.742,1h-36.166c-2.291,0-4.709,1.747-5.391,3.934l-47.687,153.079c-0.314,1.01-0.817,1.58-1.378,1.58c-0.509,0-1.043-0.467-1.502-1.307l-18.731-33.964c-1.093-2-3.837-3.322-6.117-3.322H64.127c-1.134,0-1.95,0.064-2.297,0.739c-0.348,0.675-0.177,1.401,0.481,2.324l62.472,87.517c0.6,0.841,1.336,1.267,2.074,1.267c0.87,0,1.644-0.66,2.122-1.777L217.328,4.867c0.444-1.036,0.418-1.99-0.075-2.736C216.761,1.384,215.869,1,214.742,1L214.742,1z'/></svg>";
	var nodeForSFQend = "</div><div class='menu-item__text'> SFQ </div></a></li>";
	var finalSFQ = nodeForSFQpart + svgPart + nodeForSFQend;
	//var $newAssetHtmlTagForMenu = $("<li class='menu-item ic-app-header__menu-list-item'><a id='global_nav_sfq_link' class='ic-app-header__menu-list-link' href='#' onclick='return assetPopUpWindow(\"" + assetGetAppUrl + "canvasIntegrationDetail.do\", \"ASSET-SFQ-DETAIL\", 768, 1050);' ><div class='menu-item-icon-container' aria-hidden='true'><svg class='ic-icon-svg ic-icon-svg--sfq' x='0px' y='0px' viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 250 250' xml:space='preserve'><path fill='#FFFFFF' d='M212.049,50.102l-7.764,18.276c3.996,3.599,6.715,8.813,6.715,14.614V214.85c0,10.858-9.002,20.15-19.86,20.15H59.282C48.424,235,40,225.708,40,214.85V82.993C40,72.134,48.424,63,59.282,63h81.964l4.456-15H47.718C34.942,48,25,58.653,25,71.429v155.563C25,239.769,34.942,250,47.718,250h155.564C216.058,250,226,239.769,226,226.992V71.429C226,61.835,220.367,53.607,212.049,50.102z'/><path fill='#FFFFFF' d='M214.742,1h-36.166c-2.291,0-4.709,1.747-5.391,3.934l-47.687,153.079c-0.314,1.01-0.817,1.58-1.378,1.58c-0.509,0-1.043-0.467-1.502-1.307l-18.731-33.964c-1.093-2-3.837-3.322-6.117-3.322H64.127c-1.134,0-1.95,0.064-2.297,0.739c-0.348,0.675-0.177,1.401,0.481,2.324l62.472,87.517c0.6,0.841,1.336,1.267,2.074,1.267c0.87,0,1.644-0.66,2.122-1.777L217.328,4.867c0.444-1.036,0.418-1.99-0.075-2.736C216.761,1.384,215.869,1,214.742,1L214.742,1z'/></svg></div><div class='menu-item__text'> SFQ </div></a></li>");
	var $newAssetHtmlTagForMenu = $(finalSFQ);
	//var node = document.getElementById("menu").getElementsByClassName('menu-item ic-app-header__menu-list-item')[3];
	
	if ($(".ic-icon-svg ic-icon-svg--sfq").length == 0){
		$newAssetHtmlTagForMenu.insertBefore($("#global_nav_conversations_link").parent());
	}
	/*#UH-2 end */
		
	/*#UH-3 Code for adding UST icon */
	var nodeLogoPart = "<div class='menu-item-icon-container' role='presentation' id='logoDiv'>";
	var svgLogoPart = "<svg class='ic-icon-svg ic-icon-svg--ust' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'" +
						"viewBox='0 0 150 150' enable-background='new 0 0 150 150' xml:space='preserve'>" +
						"<g>"+
						"<g>"+
						"<path fill='#FFFFFF' d='M92.296,28.467c0.601-0.75,0.809-2.089,0.809-2.089H57.14c0,0,0.445,1.483,0.82,2.089H92.296z'/>" +
						"<path fill='#FFFFFF' d='M90.207,31.517c0.67-0.594,1.351-1.789,1.351-1.789H58.624c0,0,0.37,0.894,1.195,1.789H90.207z'/>" +
						"<path fill='#FFFFFF' d='M87.609,34.278c0.814-0.445,1.483-1.347,1.483-1.347H60.938c0,0,0.669,0.75,1.333,1.347H87.609z'/>" + 
						"<path fill='#FFFFFF' d='M84.32,36.883c0.814-0.304,1.715-1.046,1.715-1.046H64.07c0,0,0,0.159,1.558,1.046H84.32z'/>" +
						"<path fill='#FFFFFF' d='M68.158,38.517c0,0,2.313,1.353,6.855,1.353c4.548,0,7.443-1.353,7.443-1.353H68.158z'/>" +						
						"<path fill='#FFFFFF' d='M67.788,41.575c0,0,2.758,0.146,4.387,1.412c1.568,1.347,2.764,3.575,2.764,3.575s0.97-2.147,2.539-3.27" +						
						"c1.559-1.202,4.097-1.716,4.097-1.716h28.382l5.586,8.27H90.059c0,0-1.783,0.072-4.468,1.647"+
						"c-1.419,0.806-2.468,2.225-2.468,2.225s-0.209,0.673-0.516,1.037c-0.299,0.38-0.523,0.683-0.888,0.822"+
						"c-0.381,0.161-0.301,0.073-0.301,0.073H68.157c0,0-0.536-0.211-0.813-0.67c-0.3-0.444-0.082-0.292-0.375-0.656"+
						"c-0.225-0.371-0.75-1.347-2.758-2.686c-2.083-1.355-4.097-1.491-4.097-1.491H34.201l5.645-8.57H67.788L67.788,41.575z'/>"+
						"<path fill='#FFFFFF' d='M47.742,53.267v42.31c0,0,0.149,3.736,3.283,8.793c3.128,5.066,7.665,7.379,7.665,7.379l3.583-5.586"+
						"c0,0-3.124-1.867-5.511-5.445c-2.303-3.566-2.303-6.629-2.303-6.629V53.268L47.742,53.267L47.742,53.267z'/>"+
						"<path fill='#FFFFFF' d='M95.717,53.123v40.814c0,0-0.519,4.104-2.457,7.006c-1.939,2.979-5.147,5.367-5.147,5.367l3.443,5.506"+
						"c0,0,5.206-3.791,7.734-7.82c2.538-4.016,3.143-10.057,3.143-10.057V53.124L95.717,53.123L95.717,53.123z'/>"+
						"<path fill='#FFFFFF' d='M37.104,53.267v42.462c0,0,0.439,6.564,4.531,13.412c4.114,6.844,11.547,11.619,11.547,11.619l3.509-5.582"+
						"c0,0-4.771-2.535-8.563-8.355c-3.889-5.879-4.097-11.246-4.097-11.246v-42.31H37.104L37.104,53.267z'/>"+
						"<path fill='#FFFFFF' d='M67.788,57.736v44.845c0,0-0.167,0.154-0.219,0.814c-0.081,0.68-0.525,1.127-0.525,1.127l-14.97,24.805"+
						"h45.889l-14.98-25.332l-0.445-1.125l-0.149-1.186V57.817H76.8v45.523c0,0,0,0.654,0.225,1.182c0.14,0.527,0.45,1.338,0.45,1.338"+
						"l9.229,15.191H63.314l9.083-15.117c0,0,0.299-0.52,0.523-1.264c0.157-0.676,0.222-1.33,0.222-1.33V57.736H67.788L67.788,57.736z'/>"+
						"<path fill='#FFFFFF' d='M106.07,53.123v41.718c0,0-0.063,5.363-4.017,11.543c-3.948,6.191-8.494,8.793-8.494,8.793l3.358,5.658"+
						"c0,0,6.845-4.324,11.172-11.174c4.249-6.855,4.768-14.82,4.768-14.82V53.123H106.07z'/>"+
						"<<path fill='#FFFFFF' d='M56.911,25.184c0,0-2.304-12.581,6.929-18.85c0,0,4.173-3.866,10.942-3.866"+
						"c7.235,0,11.396,3.795,11.396,3.795c10.059,7.367,7.081,18.922,7.081,18.922L56.911,25.184L56.911,25.184z'/>"+
						"<g>"+
						"<g>"+
						"</svg>";
	var nodeForLogoEnd = "</div></li>";
	var finalLogo = nodeLogoPart + svgLogoPart + nodeForLogoEnd;
	var $newLogoHtmlTagForMenu = $(finalLogo);
	//$newAssetHtmlTagForMenu.insertAfter('//li/a[@id="global_nav_calendar_link"]');
	
	if ($(".ic-icon-svg ic-icon-svg--ust").length == 0){
//CIUI-11 Canvas upated the html and removed some divs
		$newLogoHtmlTagForMenu.insertAfter($("#header div.ic-app-header__main-navigation"));
//CIUI-11 end
	}
	/*#UH-3 end*/
	
	
//CIUI-11 update the position if the user saved to minimize before
	if ($("#primaryNavToggle[title*='Expand global navigation']").length > 0){
		$("#logoDiv").css("padding-bottom", "40px");
	}

	//check whetehr user is clicked to minimize or expand the lef navigation bar
	$("#primaryNavToggle").click(function(e) {
		if ($("#primaryNavToggle[title*='Minimize global navigation']").length > 0){
				$("#logoDiv").css("padding-bottom", "40px");
		}
		if ($("#primaryNavToggle[title*='Expand global navigation']").length > 0){
				$("#logoDiv").css("padding-bottom", "10px");
		}
	});
//CIUI-11 end	


	
	console.log($newAssetHtmlTagForMenu);	
	
	//CIUI-9 UH-4 UH-5 code for hide two item in help menu
	 $("#global_nav_help_link").click(function(e) {
		//console.log("Help menu clicked");
		onElementRendered(".ic-NavMenu-list-item",function(el){
			$( ".ic-NavMenu-list-item" ).each(function(index) {
				//console.log( index + ": " + $( this ).text() );
				if ($(this).text().indexOf('Get help from a Canvas expert') > -1){
						//console.log("matched1");
						$(this).children().css("display", "none");
				}
				if ($(this).text().indexOf('Have an idea to improve Canvas?') > -1){
						//console.log("matched2");
						$(this).children().css("display", "none");
						return false;
				}
			});
		});
     });
	//CIUI-9 end
	
});


// ASSET integration
function assetPopUpWindow(url, popWinName, popWinHeight, popWinWidth) {
    newWindow=window.open(url, popWinName, 'height=' + popWinHeight + ',width=' + popWinWidth + ',resizable=yes,scrollbars=yes');
    if (window.focus) { newWindow.focus() }
    return false;
}
