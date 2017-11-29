"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","9df5aac03ee8732fc7557488539041cd"],["/static/css/main.07dccdaa.css","14bdb5643302442238c0cff6cfcff781"],["/static/js/main.86971de8.js","19c33c14575f270b1e927cec5b684e49"],["/static/media/Octanis-SansRoundedItalic.37d2f9fb.ttf","37d2f9fbccaa41aa5f53bb3e8535083d"],["/static/media/SonderSans-Black.d406ab66.otf","d406ab66e7258faedbd71053670c81e4"],["/static/media/alligator-gar.483fb24b.png","483fb24beb64bdcb3ed0ecdde371defd"],["/static/media/armored-stickleback.b9808be9.png","b9808be989cac705329f9af8ba9e1deb"],["/static/media/asian-arowana.90b11757.png","90b11757a3406e3ee5106cd52903768a"],["/static/media/asian-catfish.e73bfd18.png","e73bfd18ae11bf355bf5c8ca1c6c643c"],["/static/media/atlantic-halibut.d302c88f.png","d302c88fedf6dc416d8915ce163e15c8"],["/static/media/atlantic-mackerel.bc9b0213.png","bc9b021303682b7f16fa0a01e988841d"],["/static/media/background.6a2168e0.png","6a2168e039284ded0ab72b5a4938a0c7"],["/static/media/ballyhoo.75065b36.png","75065b36dfa75299f0a63dc7560f06ab"],["/static/media/barracuda.c17acdfe.png","c17acdfe858a99c1db8d021be83afbbc"],["/static/media/black-sea-bass.35d0459d.png","35d0459d73f805be51c52fe3627b0f87"],["/static/media/blackfin-scad.d273b142.png","d273b14242abb5b828a125ef4193760e"],["/static/media/blue-marlin.2def86f6.png","2def86f6d2a6aa03fa56c426bbfa9bdf"],["/static/media/blue-parrotfish.fa300230.png","fa30023067c164806f53d295fe84060a"],["/static/media/blue-ram-cichlid.156ab34d.png","156ab34d2537357ae911680eb6769db7"],["/static/media/bluefin-tuna.2070abf3.png","2070abf37861d7f5bff7d8057605c394"],["/static/media/bonito.986ad8cf.png","986ad8cf3974af8cce207ceebb7570f7"],["/static/media/california-sheephead.fef356bf.png","fef356bfd9846f1bd6138f72acb50433"],["/static/media/crocodile-icefish.c7bf627a.png","c7bf627a28c8ff3146a0779e6ab36d4c"],["/static/media/diamond-trevally.33951e29.png","33951e297b615b2d918210b1aafbabb6"],["/static/media/european-pilchard.40ccbd54.png","40ccbd54290c26e340197c438b49437a"],["/static/media/flying-fish.bdb3dcb1.png","bdb3dcb189c2a90f778fe4d4311d3a04"],["/static/media/flying-gurnard.7cd20d3f.png","7cd20d3fea4446dd83ae8aac0963bb9c"],["/static/media/four-horn-sculpin.6c899c33.png","6c899c33de9279f07447c367def98e6c"],["/static/media/giant-gourami.27db51f7.png","27db51f77c38184fa6117be88008e34b"],["/static/media/giant-snakehead.79a1ca56.png","79a1ca56a2fbfb469c5c36cacf561a78"],["/static/media/goblin-shark.4ff4f80a.png","4ff4f80ae9361c0c733782b469e330dc"],["/static/media/goliath-grouper.0c96ac3d.png","0c96ac3df53ed81d98d6c6edc220b100"],["/static/media/hogfish.d4a23eea.png","d4a23eeab388ac2929be093df3cdf53a"],["/static/media/humpback-anglerfish.64ce9033.png","64ce90335622210394523c782f9f9818"],["/static/media/indo-pacific-sailfish.6250b2a4.png","6250b2a44a66692e7d24321df19bfdbf"],["/static/media/logo.5288e9a0.png","5288e9a02d8ddf881b9553fbd9e2fd5a"],["/static/media/mahi-mahi.e17b4e58.png","e17b4e587f4aace59527e42466e56fc5"],["/static/media/mangrove-snapper.459655c7.png","459655c71aeb39eaee9712ad533c0464"],["/static/media/milkfish.711a4211.png","711a4211c181983fbecf72e17791ec93"],["/static/media/modal-bg.ffe37c30.png","ffe37c30c5aa778be916903a08806220"],["/static/media/mudskipper.e15f52c7.png","e15f52c7f5c7ae8f8b932715607e560b"],["/static/media/orange-roughy.55708e7c.png","55708e7c10019de907d5ee1b060f14cc"],["/static/media/orange-spotted-sunfish.53b08687.png","53b08687b34da05832ae3955a9af4d61"],["/static/media/paraya.4dfd220e.png","4dfd220e05cf15b02539a6c2383db8e6"],["/static/media/paroon-shark.620d9fb0.png","620d9fb04c756f74ae120acc101958e0"],["/static/media/pirhana.9341f8db.png","9341f8dbf284c3598937825ed5e18028"],["/static/media/rainbow-trout.84125d6d.png","84125d6dbe5f2522eead302560fa5062"],["/static/media/red-coris-wrasse.0f2f2c45.png","0f2f2c45625d4fc251301fb66f7fa3fd"],["/static/media/red-roman.afc5f880.png","afc5f88019b36f66275725794ed70507"],["/static/media/rouget-barbet.8ec2445c.png","8ec2445c3d6a3e3234d5d67732c44d5c"],["/static/media/size.7b3ed8a3.png","7b3ed8a361083f266cdbf2d0d72b3c26"],["/static/media/sloanes-viperfish.91b97237.png","91b972371650a4ab1f1f8749edc4c603"],["/static/media/sockeye-salmon.41c1e4a2.png","41c1e4a249a7c283f81767ccdf631865"],["/static/media/star-sturgeon.348d5af3.png","348d5af36ae44fc4a07c155d9ccd139a"],["/static/media/stoplight-loosejaw.e4ce4803.png","e4ce480389db15f7e86d6c71ec54c274"],["/static/media/tiger-queen-anthias.05f3c7f3.png","05f3c7f3cd5c1df86a176119a9388a70"],["/static/media/wels-catfish.7170d612.png","7170d61200e03f28086ea49673c96176"],["/static/media/yellow-boxfish.cf10a83f.png","cf10a83f1a60f7754343bd6942eda89f"],["/static/media/yellowmargin-triggerfish.203215ad.png","203215ad43469b79eb613d2a48fd0b36"],["/static/media/yellowtail-kingfish.541f1ec1.png","541f1ec1fc23e80c2560b22a59d7b066"],["/static/media/zander.a49a8c11.png","a49a8c11cc915cef536990cbb581f56d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,c,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),t="index.html";(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),a=urlsToCacheKeys.has(c));var n="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});