parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QvaY":[function(require,module,exports) {
var e=["https://scummbar.com/mi2/MI1-CD/01%20-%20Opening%20Themes%20-%20Introduction.mp3","https://scummbar.com/mi2/MI1-CD/02%20-%20Chapter%20Screen.mp3","https://scummbar.com/mi2/MI1-CD/03%20-%20The%20Scumm%20Bar.mp3"],n=0,t=new Audio(e[n]);t.volume=.5;var c=document.querySelector(".text"),u={play:document.querySelector(".play"),pause:document.querySelector(".pause"),prev:document.querySelector(".prev"),next:document.querySelector(".next"),stop:document.querySelector(".stop"),volume:document.querySelector(".volume")};function o(){m(),t.play(),d()}function m(){r(),(t=new Audio(e[n])).volume=.5}function r(){t.pause()}function i(){--n<0&&(n=e.length-1),o()}function l(){++n>=e.length&&(n=0),o()}function a(){t.currentTime=0,r()}function s(e,n){t.volume=e,u.volume.innerHTML='<i class="fas fa-volume-'.concat(n,'"></i>')}function p(){.5==t.volume?s(1,"up"):1==t.volume?s(0,"mute"):0==t.volume&&s(.5,"down")}function d(){var t=e[n],u=unescape(t),o=u.lastIndexOf("/")+1,m=u.substring(o).replace(".mp3","");c.innerHTML=m}u.play.addEventListener("click",o),u.pause.addEventListener("click",r),u.prev.addEventListener("click",i),u.next.addEventListener("click",l),u.stop.addEventListener("click",a),u.volume.addEventListener("click",p);
},{}]},{},["QvaY"], "global")
//# sourceMappingURL=/mp3Player/js.cd252acf.js.map