"use strict";$(function(){var n=function n(){function t(){console.log("hero function ran!");var n=function n(){s.animate({width:"100%"},800,"swing",function(){r.css({opacity:"1"})})},t=function n(){c.animate({width:"100%"},800,"swing",function(){o.animate({margin:"0px auto 0px auto"},600,"swing")})},a=function n(){p.animate({bottom:"-10px"},600,"swing")};setTimeout(function(){n()},600),setTimeout(function(){t()},900),setTimeout(function(){a()},1700)}var a=$(window).scrollTop(),i=$(window),e=$("html,body"),o=$("nav"),s=$(".big-box"),c=$(".name-box"),p=$(".white-box-wrap-hero"),r=$(".arrow-wrap-hero"),u=$(".quoter-wrap"),l=$(".quote-icon-wrap"),f=$(".about-golden-line"),m=$(".about-title-h1"),d=$(".services-title-h1"),v=$(".services-golden-line"),w=$(".contact-wrap-design"),g=$(".contact-form"),h=$(".submit-button"),x=$(".projects-title-h1"),C=$(".projects-golden-line"),b=$("p.getintouch-p"),k=$(".getintouch-h1-wrap"),y=$(".contact-title-h1"),q=$(".contact-golden-line"),T=$("blockquote.quote"),j=$(".design-image-wrap"),D=$(".design-image"),P=$(".code-image-wrap"),_=$(".xkout-button-wrap"),A=$(".xkout-mockup-wrap"),z=$(".xkout-bg"),B=$(".xkout-text-wrap"),E=$(".wikipedia-button-wrap"),F=$(".wikipedia-mockup-wrap"),G=$(".wikipedia-bg"),H=$(".hamburger-wrap"),I=$("a.hamburger-wrap > div"),J=$(".bar-1"),K=$(".bar-2"),L=$(".bar-3"),M=$('*[data-up-down="updown"]'),N=$(".sidenav"),O=$(".nav-link"),Q=$(".nav-bg"),R=$(".nav-span"),S=$(".sidenav-menu-link");i.on("beforeunload",function(){i.scrollTop(0),window.location.href=window.location.href}),g.validate({errorClass:"errorAlert",rules:{_replyto:{required:!0,email:!0},name:{required:!0}},messages:{_replyto:{required:"Please enter your email adress.",email:"Please enter a <i>valid</i> email adress."},name:{required:"Please enter your name."}},onfocusout:function n(t){this.element(t)}}),$("a[href^=\\#]").click(function(n){n.preventDefault();var t=$(this).attr("href");e.animate({scrollTop:$(t).offset().top-100},"slow")}),t(),S.click(function(n){if(n.preventDefault(),40===H.height()){H.addClass("inactive"),I.stop().animate({height:"4px"},200,"linear",function(){a(),t()});var t=function n(){N.stop().animate({width:"-7%"},400,"swing")},a=function n(){H.stop().animate({top:"0px"},600,"swing",function(){i(),e(),o()})},i=function n(){J.stop().animate({top:"0px"},200,"swing")},e=function n(){L.stop().animate({top:"35px"},200,"swing")},o=function n(){H.removeClass("inactive"),H.removeClass("open"),H.addClass("closed")}}else{H.addClass("inactive"),I.stop().animate({height:"2px"},200,"linear",function(){c(),s()});var s=function n(){N.stop().animate({width:"-7%"},400,"swing")},c=function n(){H.stop().animate({top:"0px"},600,"swing",function(){p(),r(),u()})},p=function n(){J.stop().animate({top:"0px"},200,"swing")},r=function n(){L.stop().animate({top:"22px"},200,"swing")},u=function n(){H.removeClass("inactive"),H.removeClass("open"),H.addClass("closed")}}}),H.click(function(n){if(n.preventDefault(),40===H.height())if(H.hasClass("closed")){H.addClass("inactive"),M.stop().animate({top:"17px"},400,"swing",function(){t(),a(),i()});var t=function n(){H.stop().animate({top:"300px"},600,"swing",function(){e()})},a=function n(){N.stop().animate({width:"107%"},400,"swing")},i=function n(){I.stop().animate({height:"6px"},200,"linear")},e=function n(){H.removeClass("closed"),H.removeClass("inactive"),H.addClass("open")}}else{H.addClass("inactive"),I.stop().animate({height:"4px"},200,"linear",function(){s(),o()});var o=function n(){N.stop().animate({width:"-7%"},400,"swing")},s=function n(){H.stop().animate({top:"0px"},600,"swing",function(){c(),p(),r()})},c=function n(){J.stop().animate({top:"0px"},200,"swing")},p=function n(){L.stop().animate({top:"35px"},200,"swing")},r=function n(){H.removeClass("inactive"),H.removeClass("open"),H.addClass("closed")}}else if(H.hasClass("closed")){H.addClass("inactive"),M.stop().animate({top:"11px"},400,"swing",function(){u(),l(),f()});var u=function n(){H.stop().animate({top:"185px"},600,"swing",function(){m()})},l=function n(){N.stop().animate({width:"107%"},400,"swing")},f=function n(){I.stop().animate({height:"4px"},200,"linear")},m=function n(){H.removeClass("closed"),H.removeClass("inactive"),H.addClass("open")}}else{H.addClass("inactive"),I.stop().animate({height:"2px"},200,"linear",function(){v(),d()});var d=function n(){N.stop().animate({width:"-7%"},400,"swing")},v=function n(){H.stop().animate({top:"0px"},600,"swing",function(){w(),g(),h()})},w=function n(){J.stop().animate({top:"0px"},200,"swing")},g=function n(){L.stop().animate({top:"22px"},200,"swing")},h=function n(){H.removeClass("inactive"),H.removeClass("open"),H.addClass("closed")}}});var U=function n(){function t(n){var t=i.scrollTop(),a=t+i.height(),e=$(n).offset().top;return e+$(n).height()<=a&&e>=t}var e=function n(){a>=100&&X(),!0===t(w)?(V("#services"),W("#about"),W("#contact"),W("#projects"),Y()):W("#services"),!0===t(m)&&(V("#about"),W("#services"),W("#contact"),W("#projects"),Z()),!0===t(A)&&(V("#projects"),W("#about"),W("#contact"),W("#services"),nn()),!0===t(b)&&tn(),!0===t(y)&&(V("#contact"),W("#about"),W("#projects"),W("#services"),an())};i.on("scroll",e)},V=function n(t){var a=$('.nav-link[href="'+t+'"] > .nav-bg');$('.nav-link[href="'+t+'"] > .nav-span').addClass("animate-nav"),a.addClass("animate-nav")},W=function n(t){var a=$('.nav-link[href="'+t+'"] > .nav-bg');$('.nav-link[href="'+t+'"] > .nav-span').removeClass("animate-nav"),a.removeClass("animate-nav")},X=function n(){u.animate({opacity:"1"},800),l.animate({opacity:"1"},800),T.animate({opacity:"1"},800)},Y=function n(){v.animate({left:"0",opacity:"1"},800),d.animate({left:"0",opacity:"1"},800)},Z=function n(){f.animate({left:"0",opacity:"1"},800),m.animate({left:"0",opacity:"1"},800)},nn=function n(){C.animate({left:"0",opacity:"1"},800),x.animate({left:"0",opacity:"1"},800)},tn=function n(){k.animate({width:"100%"},800)},an=function n(){q.animate({left:"0",opacity:"1"},800),y.animate({left:"0",opacity:"1"},800)};U()};$(window).one("load",function(){n()})});