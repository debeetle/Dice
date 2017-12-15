/*
* grrd's Dice
* Copyright (c) 2015 Gerard Tyedmers, grrd@gmx.net
* Licensed under the MPL License
*/
var CACHE_NAME="grrds-dice-cache",CACHE_VERSION="v1.3",CACHE=CACHE_NAME+"-"+CACHE_VERSION,urlsToCache=["index.html","images/4inarow.svg","images/dice.png","images/dice_1.svg","images/dice_1w.svg","images/dice_2.svg","images/dice_2w.svg","images/dice_3.svg","images/dice_3kind.svg","images/dice_3w.svg","images/dice_4.svg","images/dice_4kind.svg","images/dice_4w.svg","images/dice_5.svg","images/dice_5w.svg","images/dice_6.svg","images/dice_chance.svg","images/dice_full_h.svg","images/dice_lg_str.svg","images/dice_plus.svg","images/dice_sm_str.svg","images/dice_sum.svg","images/dice_yahtzee.svg","images/lock.svg","images/mail.svg","images/puzzle.svg","images/settings.png","images/title.png","images/title2.png","images/info.png","js/Detector.js","js/dice.css","js/dice.js","js/jquery.mobile-1.3.2.min.css","js/jquery.mobile-1.3.2.min.js","js/jquery-1.12.3.min.js","js/l10n.js","js/shake.js","js/build/three.min.js","js/images/ajax-loader.gif","js/images/ajax-loader.png","js/images/icons-18-black.png","js/images/icons-18-white.png","js/images/icons-36-black.png","js/images/icons-36-white.png","js/loaders/MTLLoader.js","js/loaders/OBJLoader.js","models/dice.mtl","models/dice.obj","locales/de/dice.properties","locales/en/dice.properties","locales/fr/dice.properties","locales/nl/dice.properties","locales/rm/dice.properties","locales/locales.ini"];self.addEventListener("install",function(a){a.waitUntil(caches.open(CACHE).then(function(a){return console.log("Opened cache"),a.addAll(urlsToCache)}))}),self.addEventListener("fetch",function(a){a.respondWith(caches.match(a.request).then(function(b){if(b)return b;var c=a.request.clone();return fetch(c).then(function(b){if(!b||200!==b.status||"basic"!==b.type)return b;var c=b.clone();return caches.open(CACHE).then(function(b){b.put(a.request,c)}),b})}))}),self.addEventListener("activate",function(a){a.waitUntil(caches.keys().then(function(a){return Promise.all(a.map(function(a){return 0===a.indexOf(CACHE_NAME)&&-1===a.indexOf(CACHE_VERSION)?(console.log(a+" deleted"),caches["delete"](a)):void 0}))}))});