"use strict";var precacheConfig=[["/portfolio-page/index.html","684025de78e36c35e608a6a800f0f0c7"],["/portfolio-page/static/css/main.10ba7350.css","e78a64d377129b85df90bb4de8157b4a"],["/portfolio-page/static/js/main.4b89097f.js","9345272d7576f22945f17115bdd6597c"],["/portfolio-page/static/media/babel.7c83c1a4.png","7c83c1a45b77fa480f558fb2b2239c26"],["/portfolio-page/static/media/bootstrap.ad9fadbc.png","ad9fadbc31d30a30e0c1dcd68ffd0583"],["/portfolio-page/static/media/bower.f22ed462.png","f22ed4623c0a1e31c973ed6e1f0ba4bd"],["/portfolio-page/static/media/dust_scratches.608ab5fe.png","608ab5fe4a45e2ac93febd3416b260f0"],["/portfolio-page/static/media/gbr.526d1476.png","526d147605061a058eaea6b67701fd0a"],["/portfolio-page/static/media/git.3e54ed15.png","3e54ed15b9cd877c5223f5ecf64579df"],["/portfolio-page/static/media/grey_wash_wall.88ab8ad9.png","88ab8ad95a8055d0f3dc4f7dfa075ba0"],["/portfolio-page/static/media/haml.781a01e1.png","781a01e16730ba80001a97aeb914c0b8"],["/portfolio-page/static/media/home-logo2.e12f5ef1.jpg","e12f5ef1c50f2dba9ba13c5378ca9ada"],["/portfolio-page/static/media/homo-logo.6b22989a.jpg","6b22989a6f2f3a3ea5565a1133dd4e44"],["/portfolio-page/static/media/jquerry.b34e848e.png","b34e848e1f0c59afa5efaa7862cddd5b"],["/portfolio-page/static/media/js-logo.011e11c6.png","011e11c6a03fede2690d29d7982e9ab0"],["/portfolio-page/static/media/logo.86c27786.jpg","86c2778664fa8edeed247cc9c5804a93"],["/portfolio-page/static/media/react-icon.4af927e2.png","4af927e2fc1041447294de7e5cbcd446"],["/portfolio-page/static/media/russia.7d85333c.png","7d85333c1bd4790d2dfa0f5ae89fed70"],["/portfolio-page/static/media/webpack.2acc9669.png","2acc96690dd3ac5a93202a11c421e72f"],["/portfolio-page/static/media/yeti.4b0c3988.png","4b0c39885fc99f156ede2206fc9cf1fd"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));var r="/portfolio-page/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(r,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});