"use strict";function _createForOfIteratorHelper(e,t){var o,r,a,n,i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return r=!(o=!0),{s:function(){i=i.call(e)},n:function(){var e=i.next();return o=e.done,e},e:function(e){r=!0,a=e},f:function(){try{o||null==i.return||i.return()}finally{if(r)throw a}}};if(Array.isArray(e)||(i=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length)return i&&(e=i),n=0,{s:t=function(){},n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:t};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){var o;if(e)return"string"==typeof e?_arrayLikeToArray(e,t):"Map"===(o="Object"===(o=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:o)||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(e,t):void 0}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){var t,o,r;"function"==typeof define&&define.amd&&(define(e),t=!0),"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&(module.exports=e(),t=!0),t||(o=window.Cookies,(r=window.Cookies=e()).noConflict=function(){return window.Cookies=o,r})}(function(){function s(){for(var e=0,t={};e<arguments.length;e++){var o,r=arguments[e];for(o in r)t[o]=r[o]}return t}function l(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function e(d){function i(){}function o(e,t,o){if("undefined"!=typeof document){"number"==typeof(o=s({path:"/"},i.defaults,o)).expires&&(o.expires=new Date(+new Date+864e5*o.expires)),o.expires=o.expires?o.expires.toUTCString():"";try{var r=JSON.stringify(t);/^[\{\[]/.test(r)&&(t=r)}catch(e){}t=d.write?d.write(t,e):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var a,n="";for(a in o)o[a]&&(n+="; "+a,!0!==o[a])&&(n+="="+o[a].split(";")[0]);return document.cookie=e+"="+t+n}}function t(e,t){if("undefined"!=typeof document){for(var o={},r=document.cookie?document.cookie.split("; "):[],a=0;a<r.length;a++){var n=r[a].split("="),i=n.slice(1).join("=");t||'"'!==i.charAt(0)||(i=i.slice(1,-1));try{var s=l(n[0]),i=(d.read||d)(i,s)||l(i);if(t)try{i=JSON.parse(i)}catch(e){}if(o[s]=i,e===s)break}catch(e){}}return e?o[e]:o}}return i.set=o,i.get=function(e){return t(e,!1)},i.getJSON=function(e){return t(e,!0)},i.remove=function(e,t){o(e,"",s(t,{expires:-1}))},i.defaults={},i.withConverter=e,i}(function(){})}),function(i,s){var d=s("body"),l=s("head"),u="#skin-theme",c=".nk-sidebar",f=".nk-header",m=["demo2","ecommerce"],n=["style","aside","header","skin","mode"],a="light-mode",p="dark-mode",y=".nk-opt-item",h=".nk-opt-list",v={demo2:{aside:"is-light",header:"is-light",style:"ui-default"},ecommerce:{aside:"is-light",header:"is-light",style:"ui-default"}};i.Demo={save:function(e,t){Cookies.set(i.Demo.apps(e),t)},remove:function(e){Cookies.remove(i.Demo.apps(e))},current:function(e){return Cookies.get(i.Demo.apps(e))},apps:function(e){var t,o,r=window.location.pathname.split("/").map(function(e,t,o){return e.replace("-","")}),a=_createForOfIteratorHelper(m);try{for(a.s();!(o=a.n()).done;){var n=o.value;0<=r.indexOf(n)&&(t=n)}}catch(e){a.e(e)}finally{a.f()}return e?e+"_"+t:t},style:function(e,t){var o={mode:a+" "+p,style:"ui-default ui-bordered",aside:"is-light is-default is-theme is-dark",header:"is-light is-default is-theme is-dark"};return"all"===e?o[t]||"":"any"===e?o.mode+" "+o.style+" "+o.aside+" "+o.header:"body"===e?o.mode+" "+o.style:"is-default"===e||"ui-default"===e?"":e},skins:function(e){return!e||"default"===e?"theme":"theme-"+e},defs:function(e){var t=i.Demo.apps(),t=v[t][e]||"";return i.Demo.current(e)?i.Demo.current(e):t},apply:function(){i.Demo.apps();var e,t=_createForOfIteratorHelper(n);try{for(t.s();!(e=t.n()).done;){var o,r,a=e.value;"aside"!==a&&"header"!==a&&"style"!==a||(o=i.Demo.defs(a),s(r="aside"===a?c:"header"===a?f:d).removeClass(i.Demo.style("all",a)),"ui-default"!==o&&"is-default"!==o&&s(r).addClass(o)),"mode"===a&&i.Demo.update(a,i.Demo.current("mode")),"skin"===a&&i.Demo.update(a,i.Demo.current("skin"))}}catch(e){t.e(e)}finally{t.f()}i.Demo.update("dir",i.Demo.current("dir"))},locked:function(e){!0===e?(s(y+"[data-key=aside]").add(y+"[data-key=header]").add(y+"[data-key=skin]").addClass("disabled"),i.Demo.update("skin","default",!0),s(y+"[data-key=skin]").removeClass("active"),s(y+"[data-key=skin][data-update=default]").addClass("active")):s(y+"[data-key=aside]").add(y+"[data-key=header]").add(y+"[data-key=skin]").removeClass("disabled")},update:function(e,t,o){var r,a=i.Demo.style(t,e),n=i.Demo.style("all",e);i.Demo.apps();"aside"!==e&&"header"!==e||(s(r="header"==e?f:c).removeClass(n),s(r).addClass(a)),"mode"===e&&(d.removeClass(n).removeAttr("theme"),a===p?(d.addClass(a).attr("theme","dark"),i.Demo.locked(!0)):(d.addClass(a).removeAttr("theme"),i.Demo.locked(!1))),"style"===e&&(d.removeClass(n),d.addClass(a)),"skin"===e&&(r=i.Demo.skins(a),n=s("#skin-default").attr("href").replace("theme","skins/"+r),"theme"===r?s(u).remove():0<s(u).length?s(u).attr("href",n):l.append('<link id="skin-theme" rel="stylesheet" href="'+n+'">')),!0===o&&i.Demo.save(e,t)},reset:function(){var e,t=i.Demo.apps(),o=(d.removeClass(i.Demo.style("body")).removeAttr("theme"),s(y).removeClass("active"),s(u).remove(),s(c).removeClass(i.Demo.style("all","aside")),s(f).removeClass(i.Demo.style("all","header")),_createForOfIteratorHelper(n));try{for(o.s();!(e=o.n()).done;){var r=e.value;s("[data-key='"+r+"']").each(function(){var e=s(this).data("update");"aside"!==r&&"header"!==r&&"style"!==r||e===v[t][r]&&s(this).addClass("active"),"mode"!==r&&"skin"!==r||e!==a&&"default"!==e||s(this).addClass("active")}),i.Demo.remove(r)}}catch(e){o.e(e)}finally{o.f()}s("[data-key='dir']").each(function(){s(this).data("update")===i.Demo.current("dir")&&s(this).addClass("active")}),i.Demo.apply()},load:function(){i.Demo.apply(),0<s(y).length&&s(y).each(function(){var e=s(this).data("update"),t=s(this).data("key");"aside"!==t&&"header"!==t&&"style"!==t||e===i.Demo.defs(t)&&(s(this).parent(h).find(y).removeClass("active"),s(this).addClass("active")),"mode"!==t&&"skin"!==t&&"dir"!==t||e!=i.Demo.current("skin")&&e!=i.Demo.current("mode")&&e!=i.Demo.current("dir")||(s(this).parent(h).find(y).removeClass("active"),s(this).addClass("active"))})},trigger:function(){s(y).on("click",function(e){e.preventDefault();var e=s(this),t=e.parent(h),o=e.data("update"),r=e.data("key");i.Demo.update(r,o,!0),t.find(y).removeClass("active"),e.addClass("active"),"dir"==r&&setTimeout(function(){window.location.reload()},100)}),s(".nk-opt-reset > a").on("click",function(e){e.preventDefault(),i.Demo.reset()})},init:function(e){i.Demo.load(),i.Demo.trigger()}},i.coms.docReady.push(i.Demo.init),i.Promo=function(){var t=s(".pmo-st"),o=s(".pmo-lv"),e=s(".pmo-close");0<e.length&&e.on("click",function(){var e=Cookies.get("intm-offer");return o.removeClass("active"),t.addClass("active"),null==e&&Cookies.set("intm-offer","true",{expires:1,path:""}),!1}),s(window).on("load",function(){(null==Cookies.get("intm-offer")?o:t).addClass("active")})},i.coms.docReady.push(i.Promo)}(NioApp,jQuery);