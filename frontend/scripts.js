!function(){function isScrolledIntoView(elem,offset){var $elem=$(elem),$window=$(window),docViewTop=$window.scrollTop(),docViewBottom=docViewTop+$window.height(),elemTop=$elem.offset().top,elemBottom=elemTop+$elem.height()-offset;return elemBottom<=docViewBottom&&elemTop>=docViewTop}var app=angular.module("myApp",["ngDialog"]);app.controller("MainController",["$scope","ngDialog",function($scope,ngDialog){this.tab=1,this.setTab=function(tabId){this.tab=tabId},this.isSet=function(tabId){return this.tab===tabId},$scope.progressPercents=$("#progress-value").val(),console.log($scope.progressPercents),$scope.products=[{name:"awesome photo 1",src:"images/img.jpg",category:"graphic",description:"Eum cu tantas legere complectitur, hinc utamu"},{name:"awesome photo 3",src:"images/img2.jpg",category:"web",description:"Eum cu tantas legere complectitur, hinc utamu"},{name:"awesome photo 4",src:"images/img3.jpg",category:"web",description:"Eum cu tantas legere complectitur, hinc utamu"},{name:"awesome photo 5",src:"images/img4.jpg",category:"photo",description:"Eum cu tantas legere complectitur, hinc utamu"},{name:"awesome photo 6",src:"images/img5.jpg",category:"photo",description:"Eum cu tantas legere complectitur, hinc utamu"},{name:"awesome photo 7",src:"images/img6.jpg",category:"photo",description:"Eum cu tantas legere complectitur, hinc utamu"},{name:"awesome photo 8",src:"images/img7.jpg",category:"graphic",description:"Eum cu tantas legere complectitur, hinc utamu"},{name:"awesome photo 9",src:"images/img.jpg",category:"graphic",description:"Eum cu tantas legere complectitur, hinc utamu"},{name:"awesome photo 3",src:"images/img2.jpg",category:"web",description:"Eum cu tantas legere complectitur, hinc utamu"},{name:"awesome photo 3",src:"images/img3.jpg",category:"web",description:"Eum cu tantas legere complectitur, hinc utamu"}],$scope.timelineData=[{data:"September 2014",title:"We Reach The Top",subtitle:"Kat is new brand",description:"Lorem ipsum dolor sit amet, rebum dolore labores cu pri. Ferri iudico scripta ut eam, diceret euismod gubergren has eu, an quo tale vivendum. Ad quidam gubergren vituperatoribus sit. Ius etiam nemore consulatu ne, at meliore explicari conceptam qui. Agam ceteros forensibus."},{data:"May 2014",title:"Close To The Stars",subtitle:"Big thing are happening",description:"Lorem ipsum dolor sit amet, rebum dolore labores cu pri. Ferri iudico scripta ut eam, diceret euismod gubergren has eu, an quo tale vivendum. Ad quidam gubergren vituperatoribus sit. Ius etiam nemore consulatu."},{data:"April 2012",title:"New Office",subtitle:"We are moving",description:"Lorem ipsum dolor sit amet, rebum dolore labores cu pri. Ferri iudico scripta ut eam, diceret euismod gubergren has eu, an quo tale vivendum."},{data:"March 2012",title:"Ket Is Live",subtitle:"Just started and feel so alive",description:"Lorem ipsum dolor sit amet, rebum dolore labores cu pri. Ferri iudico scripta ut eam, diceret euismod gubergren has eu, an quo tale vivendum. Ad quidam gubergren vituperatoribus sit. Ius etiam nemore consulatu ne, at meliore explicari conceptam qui. Agam ceteros forensibus vix eu, paulo ubique ex eam."}],$scope.counters=[{value:"3054",description:"completed projects",icon:"images/icon-projects.png"},{value:"7234873",description:"click presed",icon:"images/icon-click.png"},{value:"4670",description:"mails sended and received",icon:"images/icon-mails.png"},{value:"939",description:"jokes tolds",icon:"images/icon-jokes.png"}],$scope.filters={},$scope.sort=function(value){$scope.filters.category=value},$scope.clickToOpen=function(item){ngDialog.open({template:' <div class="popup_wrap"><img class="popup_img" src="'+item.src+'" alt=""/><span class="popup_name">'+item.name+"</span>",className:"ngdialog-theme-default",plain:!0,width:"60%"})},$scope.$watch("ready",function(){1==$scope.ready})}]),$(document).ready(function(){function changeMenu(){$(window).width()<768?(topNav.addClass("mobilenav"),topNav.css("display","none")):(topNav.removeClass("mobilenav"),topNav.css("display","block"))}$("#grid-select").change(function(){var gridContainer=$("#grids"),oldClass=gridContainer.find($('div[class*="flex-container-"]')).attr("class"),newClass="flex-container flex-container--"+$("#grid-select :selected").text();gridContainer.find($(".flex-container")).removeClass(oldClass).addClass(newClass)}),$("#progress-value").change(function(){$('div[class^="f-progress_filled"]').each(function(){var width=$(this).attr("value");$(this).css("width",width+"%")})});var slickSettings={centerMode:!0,centerPadding:"150px",slidesToShow:3,responsive:[{breakpoint:768,settings:{arrows:!1,centerMode:!0,centerPadding:"40px",slidesToShow:1}},{breakpoint:480,settings:{arrows:!1,centerMode:!0,centerPadding:"40px",slidesToShow:1}}]},galleryClass=$(".center"),galleryFilters=$(".portfolio__tabs");galleryClass.slick(slickSettings),galleryFilters.find("div").click(function(){galleryClass.slick("unslick"),galleryClass.slick(slickSettings),galleryFilters.find("div").removeClass("portfolio__tabs_item--active"),$(this).addClass("portfolio__tabs_item--active")});var topNav=$("#nav-tabs");changeMenu(),$(window).resize(function(){changeMenu()}),topNav.find("a").click(function(){var scroll_el=$(this).attr("href");0!==$(scroll_el).length&&$("html, body").animate({scrollTop:$(scroll_el).offset().top},500)});var nav=$("#nav"),navpos=nav.offset();$(window).bind("scroll",function(){$(window).scrollTop()>navpos.top?nav.addClass("fixed"):nav.removeClass("fixed"),$.each(["#typography","#buttons","#grids","#forms","#bars","#images","#navi"],function(key,val){if(isScrolledIntoView(val,100)){var nav_id="#"+$(val).attr("id");topNav.find("a").removeClass("header__nav_item--active"),$('a[href="'+nav_id+'"]').addClass("header__nav_item--active")}}),topNav.find("a").click(function(){topNav.find("a").removeClass("header__nav_item--active"),$(this).addClass("header__nav_item--active")}),$(".timeline__item").each(function(){isScrolledIntoView(this,0)?($(this).removeClass("hidden-elem"),$(this).addClass("visible-elem")):($(this).addClass("hidden-elem"),$(this).removeClass("visible-elem"))})})})}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMuanMiXSwibmFtZXMiOlsiaXNTY3JvbGxlZEludG9WaWV3IiwiZWxlbSIsIm9mZnNldCIsIiRlbGVtIiwiJCIsIiR3aW5kb3ciLCJ3aW5kb3ciLCJkb2NWaWV3VG9wIiwic2Nyb2xsVG9wIiwiZG9jVmlld0JvdHRvbSIsImhlaWdodCIsImVsZW1Ub3AiLCJ0b3AiLCJlbGVtQm90dG9tIiwiYXBwIiwiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCJuZ0RpYWxvZyIsInRoaXMiLCJ0YWIiLCJzZXRUYWIiLCJ0YWJJZCIsImlzU2V0IiwicHJvZ3Jlc3NQZXJjZW50cyIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJwcm9kdWN0cyIsIm5hbWUiLCJzcmMiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwidGltZWxpbmVEYXRhIiwiZGF0YSIsInRpdGxlIiwic3VidGl0bGUiLCJjb3VudGVycyIsInZhbHVlIiwiaWNvbiIsImZpbHRlcnMiLCJzb3J0IiwiY2xpY2tUb09wZW4iLCJpdGVtIiwib3BlbiIsInRlbXBsYXRlIiwiY2xhc3NOYW1lIiwicGxhaW4iLCJ3aWR0aCIsIiR3YXRjaCIsInJlYWR5IiwiZG9jdW1lbnQiLCJjaGFuZ2VNZW51IiwidG9wTmF2IiwiYWRkQ2xhc3MiLCJjc3MiLCJyZW1vdmVDbGFzcyIsImNoYW5nZSIsImdyaWRDb250YWluZXIiLCJvbGRDbGFzcyIsImZpbmQiLCJhdHRyIiwibmV3Q2xhc3MiLCJ0ZXh0IiwiZWFjaCIsInNsaWNrU2V0dGluZ3MiLCJjZW50ZXJNb2RlIiwiY2VudGVyUGFkZGluZyIsInNsaWRlc1RvU2hvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJhcnJvd3MiLCJnYWxsZXJ5Q2xhc3MiLCJnYWxsZXJ5RmlsdGVycyIsInNsaWNrIiwiY2xpY2siLCJyZXNpemUiLCJzY3JvbGxfZWwiLCJsZW5ndGgiLCJhbmltYXRlIiwibmF2IiwibmF2cG9zIiwiYmlu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RSxRQUFROEUsS0FBSyxTQUFVLFdBQ2pCaEYsRUFBRUUsUUFBUUUsWUFBYzJFLE9BQU92RSxJQUMvQnNFLElBQUkzQixTQUFTLFNBR2IyQixJQUFJekIsWUFBWSxTQUdwQnJELEVBQUU2RCxNQUFNLGNBQWMsV0FBWSxTQUFVLFNBQVUsUUFBUyxVQUFXLFNBQVUsU0FBU29CLElBQUszRCxLQUMxRixHQUFJMUIsbUJBQW1CMEIsSUFBSSxLQUFNLENBQzdCLEdBQUk0RCxRQUFTLElBQU1sRixFQUFFc0IsS0FBS29DLEtBQUssS0FDL0JSLFFBQU9PLEtBQUssS0FBS0osWUFBWSw0QkFDN0JyRCxFQUFFLFdBQWFrRixPQUFTLE1BQU0vQixTQUFTLCtCQUluREQsT0FBT08sS0FBSyxLQUFLZ0IsTUFBTSxXQUNuQnZCLE9BQU9PLEtBQUssS0FBS0osWUFBWSw0QkFDN0JyRCxFQUFFZ0IsTUFBTW1DLFNBQVMsOEJBSXJCbkQsRUFBRyxtQkFBb0I2RCxLQUFLLFdBQ3BCakUsbUJBQW1Cb0IsS0FBSyxJQUN4QmhCLEVBQUVnQixNQUFNcUMsWUFBWSxlQUNwQnJELEVBQUVnQixNQUFNbUMsU0FBUyxrQkFHakJuRCxFQUFFZ0IsTUFBTW1DLFNBQVMsZUFDakJuRCxFQUFFZ0IsTUFBTXFDLFlBQVkiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ215QXBwJywgWyduZ0RpYWxvZyddKTtcclxuXHJcbiAgICBhcHAuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLFsnJHNjb3BlJywgJ25nRGlhbG9nJywgZnVuY3Rpb24gKCRzY29wZSwgbmdEaWFsb2cpIHtcclxuICAgICAgICB0aGlzLnRhYiA9IDE7XHJcbiAgICAgICAgdGhpcy5zZXRUYWIgPSBmdW5jdGlvbiAodGFiSWQpIHtcclxuICAgICAgICAgICAgdGhpcy50YWIgPSB0YWJJZDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaXNTZXQgPSBmdW5jdGlvbiAodGFiSWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFiID09PSB0YWJJZDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgICRzY29wZS5wcm9ncmVzc1BlcmNlbnRzID0gJCgnI3Byb2dyZXNzLXZhbHVlJykudmFsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLnByb2dyZXNzUGVyY2VudHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICRzY29wZS5wcm9kdWN0cyA9IFtcclxuICAgICAgICAgICAge25hbWUgOiBcImF3ZXNvbWUgcGhvdG8gMVwiLCBzcmMgOiAnaW1hZ2VzL2ltZy5qcGcnLCBjYXRlZ29yeSA6IFwiZ3JhcGhpY1wiLCBkZXNjcmlwdGlvbiA6IFwiRXVtIGN1IHRhbnRhcyBsZWdlcmUgY29tcGxlY3RpdHVyLCBoaW5jIHV0YW11XCJ9LFxyXG4gICAgICAgICAgICB7bmFtZSA6IFwiYXdlc29tZSBwaG90byAzXCIsIHNyYyA6ICdpbWFnZXMvaW1nMi5qcGcnLCBjYXRlZ29yeSA6IFwid2ViXCIsIGRlc2NyaXB0aW9uIDogXCJFdW0gY3UgdGFudGFzIGxlZ2VyZSBjb21wbGVjdGl0dXIsIGhpbmMgdXRhbXVcIn0sXHJcbiAgICAgICAgICAgIHtuYW1lIDogXCJhd2Vzb21lIHBob3RvIDRcIiwgc3JjIDogJ2ltYWdlcy9pbWczLmpwZycsIGNhdGVnb3J5IDogXCJ3ZWJcIiwgZGVzY3JpcHRpb24gOiBcIkV1bSBjdSB0YW50YXMgbGVnZXJlIGNvbXBsZWN0aXR1ciwgaGluYyB1dGFtdVwifSxcclxuICAgICAgICAgICAge25hbWUgOiBcImF3ZXNvbWUgcGhvdG8gNVwiLCBzcmMgOiAnaW1hZ2VzL2ltZzQuanBnJywgY2F0ZWdvcnkgOiBcInBob3RvXCIsIGRlc2NyaXB0aW9uIDogXCJFdW0gY3UgdGFudGFzIGxlZ2VyZSBjb21wbGVjdGl0dXIsIGhpbmMgdXRhbXVcIn0sXHJcbiAgICAgICAgICAgIHtuYW1lIDogXCJhd2Vzb21lIHBob3RvIDZcIiwgc3JjIDogJ2ltYWdlcy9pbWc1LmpwZycsIGNhdGVnb3J5IDogXCJwaG90b1wiLCBkZXNjcmlwdGlvbiA6IFwiRXVtIGN1IHRhbnRhcyBsZWdlcmUgY29tcGxlY3RpdHVyLCBoaW5jIHV0YW11XCJ9LFxyXG4gICAgICAgICAgICB7bmFtZSA6IFwiYXdlc29tZSBwaG90byA3XCIsIHNyYyA6ICdpbWFnZXMvaW1nNi5qcGcnLCBjYXRlZ29yeSA6IFwicGhvdG9cIiwgZGVzY3JpcHRpb24gOiBcIkV1bSBjdSB0YW50YXMgbGVnZXJlIGNvbXBsZWN0aXR1ciwgaGluYyB1dGFtdVwifSxcclxuICAgICAgICAgICAge25hbWUgOiBcImF3ZXNvbWUgcGhvdG8gOFwiLCBzcmMgOiAnaW1hZ2VzL2ltZzcuanBnJywgY2F0ZWdvcnkgOiBcImdyYXBoaWNcIiwgZGVzY3JpcHRpb24gOiBcIkV1bSBjdSB0YW50YXMgbGVnZXJlIGNvbXBsZWN0aXR1ciwgaGluYyB1dGFtdVwifSxcclxuICAgICAgICAgICAge25hbWUgOiBcImF3ZXNvbWUgcGhvdG8gOVwiLCBzcmMgOiAnaW1hZ2VzL2ltZy5qcGcnLCBjYXRlZ29yeSA6IFwiZ3JhcGhpY1wiLCBkZXNjcmlwdGlvbiA6IFwiRXVtIGN1IHRhbnRhcyBsZWdlcmUgY29tcGxlY3RpdHVyLCBoaW5jIHV0YW11XCJ9LFxyXG4gICAgICAgICAgICB7bmFtZSA6IFwiYXdlc29tZSBwaG90byAzXCIsIHNyYyA6ICdpbWFnZXMvaW1nMi5qcGcnLCBjYXRlZ29yeSA6IFwid2ViXCIsIGRlc2NyaXB0aW9uIDogXCJFdW0gY3UgdGFudGFzIGxlZ2VyZSBjb21wbGVjdGl0dXIsIGhpbmMgdXRhbXVcIn0sXHJcbiAgICAgICAgICAgIHtuYW1lIDogXCJhd2Vzb21lIHBob3RvIDNcIiwgc3JjIDogJ2ltYWdlcy9pbWczLmpwZycsIGNhdGVnb3J5IDogXCJ3ZWJcIiwgZGVzY3JpcHRpb24gOiBcIkV1bSBjdSB0YW50YXMgbGVnZXJlIGNvbXBsZWN0aXR1ciwgaGluYyB1dGFtdVwifVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgICRzY29wZS50aW1lbGluZURhdGEgPSBbXHJcbiAgICAgICAgICAgIHtkYXRhIDogXCJTZXB0ZW1iZXIgMjAxNFwiLCB0aXRsZSA6IFwiV2UgUmVhY2ggVGhlIFRvcFwiLCBzdWJ0aXRsZSA6IFwiS2F0IGlzIG5ldyBicmFuZFwiLCBkZXNjcmlwdGlvbiA6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIHJlYnVtIGRvbG9yZSBsYWJvcmVzIGN1IHByaS4gRmVycmkgaXVkaWNvIHNjcmlwdGEgdXQgZWFtLCBkaWNlcmV0IGV1aXNtb2QgZ3ViZXJncmVuIGhhcyBldSwgYW4gcXVvIHRhbGUgdml2ZW5kdW0uIEFkIHF1aWRhbSBndWJlcmdyZW4gdml0dXBlcmF0b3JpYnVzIHNpdC4gSXVzIGV0aWFtIG5lbW9yZSBjb25zdWxhdHUgbmUsIGF0IG1lbGlvcmUgZXhwbGljYXJpIGNvbmNlcHRhbSBxdWkuIEFnYW0gY2V0ZXJvcyBmb3JlbnNpYnVzLlwifSxcclxuICAgICAgICAgICAge2RhdGEgOiBcIk1heSAyMDE0XCIsIHRpdGxlIDogXCJDbG9zZSBUbyBUaGUgU3RhcnNcIiwgc3VidGl0bGUgOiBcIkJpZyB0aGluZyBhcmUgaGFwcGVuaW5nXCIsIGRlc2NyaXB0aW9uIDogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgcmVidW0gZG9sb3JlIGxhYm9yZXMgY3UgcHJpLiBGZXJyaSBpdWRpY28gc2NyaXB0YSB1dCBlYW0sIGRpY2VyZXQgZXVpc21vZCBndWJlcmdyZW4gaGFzIGV1LCBhbiBxdW8gdGFsZSB2aXZlbmR1bS4gQWQgcXVpZGFtIGd1YmVyZ3JlbiB2aXR1cGVyYXRvcmlidXMgc2l0LiBJdXMgZXRpYW0gbmVtb3JlIGNvbnN1bGF0dS5cIn0sXHJcbiAgICAgICAgICAgIHtkYXRhIDogXCJBcHJpbCAyMDEyXCIsIHRpdGxlIDogXCJOZXcgT2ZmaWNlXCIsIHN1YnRpdGxlIDogXCJXZSBhcmUgbW92aW5nXCIsIGRlc2NyaXB0aW9uIDogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgcmVidW0gZG9sb3JlIGxhYm9yZXMgY3UgcHJpLiBGZXJyaSBpdWRpY28gc2NyaXB0YSB1dCBlYW0sIGRpY2VyZXQgZXVpc21vZCBndWJlcmdyZW4gaGFzIGV1LCBhbiBxdW8gdGFsZSB2aXZlbmR1bS5cIn0sXHJcbiAgICAgICAgICAgIHtkYXRhIDogXCJNYXJjaCAyMDEyXCIsIHRpdGxlIDogXCJLZXQgSXMgTGl2ZVwiLCBzdWJ0aXRsZSA6IFwiSnVzdCBzdGFydGVkIGFuZCBmZWVsIHNvIGFsaXZlXCIsIGRlc2NyaXB0aW9uIDogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgcmVidW0gZG9sb3JlIGxhYm9yZXMgY3UgcHJpLiBGZXJyaSBpdWRpY28gc2NyaXB0YSB1dCBlYW0sIGRpY2VyZXQgZXVpc21vZCBndWJlcmdyZW4gaGFzIGV1LCBhbiBxdW8gdGFsZSB2aXZlbmR1bS4gQWQgcXVpZGFtIGd1YmVyZ3JlbiB2aXR1cGVyYXRvcmlidXMgc2l0LiBJdXMgZXRpYW0gbmVtb3JlIGNvbnN1bGF0dSBuZSwgYXQgbWVsaW9yZSBleHBsaWNhcmkgY29uY2VwdGFtIHF1aS4gQWdhbSBjZXRlcm9zIGZvcmVuc2lidXMgdml4IGV1LCBwYXVsbyB1YmlxdWUgZXggZWFtLlwifVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgICRzY29wZS5jb3VudGVycyA9IFtcclxuICAgICAgICAgICAge3ZhbHVlIDogJzMwNTQnLCBkZXNjcmlwdGlvbiA6IFwiY29tcGxldGVkIHByb2plY3RzXCIsIGljb246IFwiaW1hZ2VzL2ljb24tcHJvamVjdHMucG5nXCJ9LFxyXG4gICAgICAgICAgICB7dmFsdWUgOiAnNzIzNDg3MycsIGRlc2NyaXB0aW9uIDogXCJjbGljayBwcmVzZWRcIiwgaWNvbjogXCJpbWFnZXMvaWNvbi1jbGljay5wbmdcIn0sXHJcbiAgICAgICAgICAgIHt2YWx1ZSA6ICc0NjcwJywgZGVzY3JpcHRpb24gOiBcIm1haWxzIHNlbmRlZCBhbmQgcmVjZWl2ZWRcIiwgaWNvbjogXCJpbWFnZXMvaWNvbi1tYWlscy5wbmdcIn0sXHJcbiAgICAgICAgICAgIHt2YWx1ZSA6ICc5MzknLCBkZXNjcmlwdGlvbiA6IFwiam9rZXMgdG9sZHNcIiwgaWNvbjogXCJpbWFnZXMvaWNvbi1qb2tlcy5wbmdcIn1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICAkc2NvcGUuZmlsdGVycyA9IHt9O1xyXG4gICAgICAgICRzY29wZS5zb3J0ID0gZnVuY3Rpb24gKHZhbHVlKXtcclxuICAgICAgICAgICAgJHNjb3BlLmZpbHRlcnMuY2F0ZWdvcnkgPSB2YWx1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vb3BlbiBtb2RhbCB3aW5kb3dcclxuICAgICAgICAkc2NvcGUuY2xpY2tUb09wZW4gPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBuZ0RpYWxvZy5vcGVuKHsgdGVtcGxhdGU6ICcgPGRpdiBjbGFzcz1cInBvcHVwX3dyYXBcIj48aW1nIGNsYXNzPVwicG9wdXBfaW1nXCIgc3JjPVwiJysgaXRlbS5zcmMgKydcIiBhbHQ9XCJcIi8+PHNwYW4gY2xhc3M9XCJwb3B1cF9uYW1lXCI+JysgaXRlbS5uYW1lICsnPC9zcGFuPicsIGNsYXNzTmFtZTogJ25nZGlhbG9nLXRoZW1lLWRlZmF1bHQnLCBwbGFpbjogdHJ1ZSwgd2lkdGg6ICc2MCUnIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgJHNjb3BlLiR3YXRjaCgncmVhZHknLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYoJHNjb3BlLnJlYWR5ID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIC8vbm93IHRoZSBkYXRhLWlkIGF0dHJpYnV0ZSB3b3Jrc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XSk7XHJcbiAgICBcclxuXHJcbiAgICBmdW5jdGlvbiBpc1Njcm9sbGVkSW50b1ZpZXcoZWxlbSxvZmZzZXQpIHtcclxuICAgICAgICB2YXIgJGVsZW0gPSAkKGVsZW0pO1xyXG4gICAgICAgIHZhciAkd2luZG93ID0gJCh3aW5kb3cpO1xyXG4gICAgICAgIHZhciBkb2NWaWV3VG9wID0gJHdpbmRvdy5zY3JvbGxUb3AoKTtcclxuICAgICAgICB2YXIgZG9jVmlld0JvdHRvbSA9IGRvY1ZpZXdUb3AgKyAkd2luZG93LmhlaWdodCgpO1xyXG4gICAgICAgIHZhciBlbGVtVG9wID0gJGVsZW0ub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgIHZhciBlbGVtQm90dG9tID0gZWxlbVRvcCArICRlbGVtLmhlaWdodCgpIC0gb2Zmc2V0O1xyXG4gICAgICAgIHJldHVybiAoKGVsZW1Cb3R0b20gPD0gZG9jVmlld0JvdHRvbSkgJiYgKGVsZW1Ub3AgPj0gZG9jVmlld1RvcCkpO1xyXG4gICAgfVxyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAkKCcjZ3JpZC1zZWxlY3QnKS5jaGFuZ2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIGdyaWRDb250YWluZXIgPSAkKCcjZ3JpZHMnKTtcclxuICAgICAgICAgICAgdmFyIG9sZENsYXNzID0gZ3JpZENvbnRhaW5lci5maW5kKCQoJ2RpdltjbGFzcyo9XCJmbGV4LWNvbnRhaW5lci1cIl0nKSkuYXR0cignY2xhc3MnKTtcclxuICAgICAgICAgICAgdmFyIG5ld0NsYXNzID0gXCJmbGV4LWNvbnRhaW5lciBmbGV4LWNvbnRhaW5lci0tXCIgKyAkKCcjZ3JpZC1zZWxlY3QgOnNlbGVjdGVkJykudGV4dCgpO1xyXG4gICAgICAgICAgICBncmlkQ29udGFpbmVyLmZpbmQoJCgnLmZsZXgtY29udGFpbmVyJykpLnJlbW92ZUNsYXNzKG9sZENsYXNzKS5hZGRDbGFzcyhuZXdDbGFzcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJyNwcm9ncmVzcy12YWx1ZScpLmNoYW5nZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyggJCgnZGl2W2NsYXNzXj1cImYtcHJvZ3Jlc3NfZmlsbGVkXCJdJykuYXR0cigndmFsdWUnKSk7XHJcbiAgICAgICAgICAgICQoJ2RpdltjbGFzc149XCJmLXByb2dyZXNzX2ZpbGxlZFwiXScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9ICQodGhpcykuYXR0cigndmFsdWUnKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCd3aWR0aCcsIHdpZHRoICsgJyUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vZ2FsbGVyeSBzZXR0aW5nc1xyXG4gICAgICAgIHZhciBzbGlja1NldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMTUwcHgnLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBnYWxsZXJ5Q2xhc3MgPSAkKCcuY2VudGVyJyk7XHJcbiAgICAgICAgdmFyIGdhbGxlcnlGaWx0ZXJzID0gJChcIi5wb3J0Zm9saW9fX3RhYnNcIik7XHJcblxyXG5cclxuICAgICAgICAvL2dhbGxlcnkgaW5pdGlhbGl6ZVxyXG4gICAgICAgIGdhbGxlcnlDbGFzcy5zbGljayhzbGlja1NldHRpbmdzKTtcclxuICAgICAgICBnYWxsZXJ5RmlsdGVycy5maW5kKFwiZGl2XCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGdhbGxlcnlDbGFzcy5zbGljaygndW5zbGljaycpO1xyXG4gICAgICAgICAgICBnYWxsZXJ5Q2xhc3Muc2xpY2soc2xpY2tTZXR0aW5ncyk7XHJcbiAgICAgICAgICAgIGdhbGxlcnlGaWx0ZXJzLmZpbmQoXCJkaXZcIikucmVtb3ZlQ2xhc3MoXCJwb3J0Zm9saW9fX3RhYnNfaXRlbS0tYWN0aXZlXCIpOy8vcmVtb3ZlIGlmIHNvbWV0aGluZyB3YXMgc2VsZWN0ZWRcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcInBvcnRmb2xpb19fdGFic19pdGVtLS1hY3RpdmVcIik7Ly9hZGQgYSBzZWxlY3RlZCBjbGFzc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL3RvcC1tZW51IGZvciBtb2JpbGVcclxuICAgICAgICB2YXIgdG9wTmF2ID0gICQoJyNuYXYtdGFicycpO1xyXG4gICAgICAgIGZ1bmN0aW9uIGNoYW5nZU1lbnUoKSB7XHJcbiAgICAgICAgICAgIGlmKCQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XHJcbiAgICAgICAgICAgICAgICB0b3BOYXYuYWRkQ2xhc3MoJ21vYmlsZW5hdicpO1xyXG4gICAgICAgICAgICAgICAgdG9wTmF2LmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0b3BOYXYucmVtb3ZlQ2xhc3MoJ21vYmlsZW5hdicpO1xyXG4gICAgICAgICAgICAgICAgdG9wTmF2LmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoYW5nZU1lbnUoKTtcclxuICAgICAgICAkKCB3aW5kb3cgKS5yZXNpemUoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgY2hhbmdlTWVudSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL3Ntb290aCBzY3JvbGxcclxuICAgICAgICB0b3BOYXYuZmluZChcImFcIikuY2xpY2soIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciBzY3JvbGxfZWwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuICAgICAgICAgICAgaWYgKCQoc2Nyb2xsX2VsKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkKHNjcm9sbF9lbCkub2Zmc2V0KCkudG9wIH0sIDUwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy90b3AtbWVudSBiZWhhdmlvclxyXG4gICAgICAgIHZhciBuYXYgPSAkKCcjbmF2Jyk7XHJcbiAgICAgICAgdmFyIG5hdnBvcyA9IG5hdi5vZmZzZXQoKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLmJpbmQoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gbmF2cG9zLnRvcCkge1xyXG4gICAgICAgICAgICAgICAgbmF2LmFkZENsYXNzKCdmaXhlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmF2LnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkLmVhY2goWycjdHlwb2dyYXBoeScsJyNidXR0b25zJywgJyNncmlkcycsICcjZm9ybXMnLCAnI2JhcnMnLCAnI2ltYWdlcycsICcjbmF2aScgXSxmdW5jdGlvbihrZXksIHZhbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2Nyb2xsZWRJbnRvVmlldyh2YWwsMTAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmF2X2lkID0gJyMnICsgJCh2YWwpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcE5hdi5maW5kKFwiYVwiKS5yZW1vdmVDbGFzcyhcImhlYWRlcl9fbmF2X2l0ZW0tLWFjdGl2ZVwiKTsvL3JlbW92ZSBpZiBzb21ldGhpbmcgd2FzIHNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ2FbaHJlZj1cIicgKyBuYXZfaWQgKyAnXCJdJykuYWRkQ2xhc3MoXCJoZWFkZXJfX25hdl9pdGVtLS1hY3RpdmVcIik7Ly9hZGQgYSBzZWxlY3RlZCBjbGFzc1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdG9wTmF2LmZpbmQoXCJhXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB0b3BOYXYuZmluZChcImFcIikucmVtb3ZlQ2xhc3MoXCJoZWFkZXJfX25hdl9pdGVtLS1hY3RpdmVcIik7Ly9yZW1vdmUgaWYgc29tZXRoaW5nIHdhcyBzZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImhlYWRlcl9fbmF2X2l0ZW0tLWFjdGl2ZVwiKTsvL2FkZCBhIHNlbGVjdGVkIGNsYXNzXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy90aW1lbGluZSBlbGVtZW50cyBhcHBlYXJhbmNlXHJcbiAgICAgICAgICAgICQoIFwiLnRpbWVsaW5lX19pdGVtXCIgKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzU2Nyb2xsZWRJbnRvVmlldyh0aGlzLDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaGlkZGVuLWVsZW0nKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCd2aXNpYmxlLWVsZW0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2hpZGRlbi1lbGVtJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygndmlzaWJsZS1lbGVtJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
