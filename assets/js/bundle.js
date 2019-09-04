/*! For license information please see bundle.js.LICENSE */
!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){var r,o,i,s,a,u,l,c,p,h,d,f,g;t.exports=(r="undefined"!=typeof window?window:self,o=n(7),i=n(10),s={},a="json",u="post",l=null,c=0,p=[],h=r.XMLHttpRequest?function(){return new r.XMLHttpRequest}:function(){return new ActiveXObject("Microsoft.XMLHTTP")},d=""===h().responseType,f=function(t){var e=[],n=0,f=[];return o(function(g){var m=-1,y=function(t){return function(y,_,v,b){var M=++m;return++n,e.push(function(t,e,n,f,g){for(var m in t=t.toUpperCase(),n=void 0===n?null:n,f=f||{},s)if(!(m in f))if("object"==typeof s[m]&&"object"==typeof f[m])for(var y in s[m])f[m][y]=s[m][y];else f[m]=s[m];var _,v,b,M,w,k=!1,x=!1,C=!1,T=0,S={},L={text:"*/*",xml:"text/xml",json:"application/json",post:"application/x-www-form-urlencoded",document:"text/html"},P={text:"*/*",xml:"application/xml; q=1.0, text/xml; q=0.8, */*; q=0.1",json:"application/json; q=1.0, text/*; q=0.8, */*; q=0.1"},O=!1,E=o(function(o){return o.abort=function(){C||(v&&4!=v.readyState&&v.abort(),O&&(--c,O=!1),C=!0)},o.send=function(){if(!O)if(c!=l)if(C)p.length&&p.shift().send();else{if(++c,O=!0,v=h(),_&&("withCredentials"in v||!r.XDomainRequest||(v=new XDomainRequest,x=!0,"GET"!=t&&"POST"!=t&&(t="POST"))),x?v.open(t,e):(v.open(t,e,f.async,f.user,f.password),d&&f.async&&(v.withCredentials=f.withCredentials)),!x)for(var i in S)S[i]&&v.setRequestHeader(i,S[i]);if(d&&"auto"!=f.responseType)try{v.responseType=f.responseType,k=v.responseType==f.responseType}catch(t){}d||x?(v.onload=I,v.onerror=j,x&&(v.onprogress=function(){})):v.onreadystatechange=function(){4==v.readyState&&I()},f.async?"timeout"in v?(v.timeout=f.timeout,v.ontimeout=z):b=setTimeout(z,f.timeout):x&&(v.ontimeout=function(){}),"auto"!=f.responseType&&"overrideMimeType"in v&&v.overrideMimeType(L[f.responseType]),g&&g(v),x?setTimeout(function(){v.send("GET"!=t?n:null)},0):v.send("GET"!=t?n:null)}else p.push(o)},o}),I=function(){var t;if(O=!1,clearTimeout(b),p.length&&p.shift().send(),!C){--c;try{if(k){if("response"in v&&null===v.response)throw"The request response is empty";w=v.response}else{if("auto"==(t=f.responseType))if(x)t=a;else{var e=v.getResponseHeader("Content-Type")||"";t=e.indexOf(L.json)>-1?"json":e.indexOf(L.xml)>-1?"xml":"text"}switch(t){case"json":if(v.responseText.length)try{w="JSON"in r?JSON.parse(v.responseText):new Function("return ("+v.responseText+")")()}catch(t){throw"Error while parsing JSON body : "+t}break;case"xml":try{r.DOMParser?w=(new DOMParser).parseFromString(v.responseText,"text/xml"):((w=new ActiveXObject("Microsoft.XMLDOM")).async="false",w.loadXML(v.responseText))}catch(t){w=void 0}if(!w||!w.documentElement||w.getElementsByTagName("parsererror").length)throw"Invalid XML";break;default:w=v.responseText}}if("status"in v&&!/^2|1223/.test(v.status))throw v.status+" ("+v.statusText+")";E(!0,[v,w])}catch(t){E(!1,[t,v,w])}}},j=function(t){C||(t="string"==typeof t?t:"Connection aborted",E.abort(),E(!1,[new Error(t),v,null]))},z=function(){C||(f.attempts&&++T==f.attempts?j("Timeout ("+e+")"):(v.abort(),O=!1,E.send()))};if(f.async=!("async"in f&&!f.async),f.cache="cache"in f&&!!f.cache,f.dataType="dataType"in f?f.dataType.toLowerCase():u,f.responseType="responseType"in f?f.responseType.toLowerCase():"auto",f.user=f.user||"",f.password=f.password||"",f.withCredentials=!!f.withCredentials,f.timeout="timeout"in f?parseInt(f.timeout,10):3e4,f.attempts="attempts"in f?parseInt(f.attempts,10):1,M=e.match(/\/\/(.+?)\//),_=M&&!!M[1]&&M[1]!=location.host,"ArrayBuffer"in r&&n instanceof ArrayBuffer?f.dataType="arraybuffer":"Blob"in r&&n instanceof Blob?f.dataType="blob":"Document"in r&&n instanceof Document?f.dataType="document":"FormData"in r&&n instanceof FormData&&(f.dataType="formdata"),null!==n)switch(f.dataType){case"json":n=JSON.stringify(n);break;case"post":case"queryString":n=i(n)}if(f.headers){var A=function(t,e,n){return e+n.toUpperCase()};for(M in f.headers)S[M.replace(/(^|-)([^-])/g,A)]=f.headers[M]}return"Content-Type"in S||"GET"==t||f.dataType in L&&L[f.dataType]&&(S["Content-Type"]=L[f.dataType]),S.Accept||(S.Accept=f.responseType in P?P[f.responseType]:"*/*"),_||"X-Requested-With"in S||(S["X-Requested-With"]="XMLHttpRequest"),f.cache||"Cache-Control"in S||(S["Cache-Control"]="no-cache"),"GET"!=t&&"queryString"!=f.dataType||!n||"string"!=typeof n||(e+=(/\?/.test(e)?"&":"?")+n),f.async&&E.send(),E}(t,g.base+y,_,v,b).then(function(t,e){f[M]=arguments,--n||g(!0,1==f.length?f[0]:[f])},function(){g(!1,arguments)})),g}};for(var _ in g.get=y("GET"),g.post=y("POST"),g.put=y("PUT"),g.delete=y("DELETE"),g.catch=function(t){return g.then(null,t)},g.complete=function(t){var e=function(){t()};return g.then(e,e)},g.map=function(t,e,n,r,o){return y(t.toUpperCase()).call(this,e,n,r,o)},t)_ in g||(g[_]=t[_]);return g.send=function(){for(var t=0,n=e.length;t<n;++t)e[t].send();return g},g.abort=function(){for(var t=0,n=e.length;t<n;++t)e[t].abort();return g},g})},g={base:"",get:function(){return f(g).get.apply(this,arguments)},post:function(){return f(g).post.apply(this,arguments)},put:function(){return f(g).put.apply(this,arguments)},delete:function(){return f(g).delete.apply(this,arguments)},map:function(){return f(g).map.apply(this,arguments)},xhr2:d,limit:function(t){return l=t,g},setDefaultOptions:function(t){return s=t,g},setDefaultXdrResponseType:function(t){return a=t.toLowerCase(),g},setDefaultDataType:function(t){return u=t.toLowerCase(),g},getOpenRequests:function(){return c}})},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();var u,l=[],c=!1,p=-1;function h(){c&&u&&(c=!1,u.length?l=u.concat(l):p=-1,l.length&&d())}function d(){if(!c){var t=a(h);c=!0;for(var e=l.length;e;){for(u=l,l=[];++p<e;)u&&u[p].run();p=-1,e=l.length}u=null,c=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function f(t,e){this.fun=t,this.array=e}function g(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new f(t,e)),1!==l.length||c||a(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4);document.addEventListener("DOMContentLoaded",function(){(new r.App).boot()})},function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),i=n(6),s=n(0),a=n(11),u=n(12),l=n(13),c=n(14),p=n(15),h=function(){function t(){this._currentInfoWindows=null,this._eventHandlers={},this._heatMap=null,this._imgHousePath="./assets/images/corps/%house%.png",this._infoWindows=[],this._markerCluster=null,this._markers=[],this._configObject=null}return t.getFilterValueLabel=function(t,e){var n=document.querySelector('form select[name="'+t+'"] option[value="'+e+'"]');return(n?n.innerText:e).replace(/\([\d]+\)/,"").trim()},t.prototype.boot=function(){var t=this;this._configObject=new a.Config(function(){return t.run()})},t.prototype.run=function(){var t=this;i({key:this._configObject.config.googleMaps.key,libraries:this._configObject.config.googleMaps.libraries}).then(function(){var e=document.getElementById("form-filters"),n=document.getElementById("map"),r={center:new google.maps.LatLng(t._configObject.config.defaultLat,t._configObject.config.defaultLon),mapTypeControl:!1,mapTypeId:google.maps.MapTypeId.HYBRID,maxZoom:t._configObject.config.maxZoom,streetViewControl:!1,zoom:t._configObject.config.defaultZoom},o=new google.maps.Map(n,r);t.setupSkeleton(),t.bindAnchorEvents(o,n,e),t.bindFilters(o,n,e),t.bindLocalizationButton(o),t.bindRandomizationButton(o),t.bindMarkers(n.dataset.bloodbathSrc,o,t.getFilters(e,!0))})},t.prototype.getConfigDefinitions=function(){return this._configObject.definitions},t.prototype.filteredResponse=function(t,e){for(var n=t,r=0,o=Object.entries(e);r<o.length;r++){var i=o[r],s=i[0],a=i[1];if(e.hasOwnProperty(s)){for(var u=s,l=p.StringUtilsHelper.normalizeString(a),c=[],h=0,d=p.StringUtilsHelper.normalizeString(a).split(" ").map(function(t){return t.trim()});h<d.length;h++){var f=d[h];f.length>=this._configObject.config.searchMinLength&&c.push(f)}if(a)for(var g=n.deaths.length;g--;)"search"===u&&a.length>=this._configObject.config.searchMinLength?p.StringUtilsHelper.containsString(n.deaths[g].text,l)||p.StringUtilsHelper.containsString(n.deaths[g].section,l)||p.StringUtilsHelper.containsString(n.deaths[g].location,l)||p.StringUtilsHelper.arrayContainsString(n.deaths[g].keywords,c)||n.deaths.splice(g,1):(!n.deaths[g].published||n.deaths[g][u]&&n.deaths[g][u]!==a)&&n.deaths.splice(g,1)}}return n},t.prototype.getFilters=function(t,e){var n=location.hash.substr(1).split("&"),r={},o={},i=t.querySelectorAll('select[data-filterable="true"], input[data-filterable="true"]');return n.forEach(function(t){var e=t.split("=");2===e.length&&(r[e[0]]=e[1])}),i.forEach(function(t){e&&void 0!==r[t.id]?o[t.id]=r[t.id]:o[t.id]=t.value}),o},t.prototype.alterFiltersLabels=function(t){document.querySelectorAll("form select").forEach(function(e){var n=e.querySelectorAll("option");"true"===e.dataset.countable&&n.forEach(function(n){if(""!==n.value){for(var r in n.dataset.deathCount="0",t.deaths){var o=t.deaths[r];n.value===o[e.name]&&(n.dataset.deathCount=""+(+n.dataset.deathCount+o.count))}n.innerText=n.innerText.replace(/\([\d]+\)/,"")+" ("+n.dataset.deathCount+")"}})})},t.prototype.bindAnchorEvents=function(t,e,n){var r=this;window.addEventListener("hashchange",function(){r.bindFilters(t,e,n,!0),r.bindMarkers(e.dataset.bloodbathSrc,t,r.getFilters(n,!0))},!1)},t.prototype.bindFilters=function(t,e,n,r){var o=this,i=n.querySelectorAll("form select, form input");u.Events.addEventHandler(n,"submit",function(t){t.preventDefault()}),i.forEach(function(i){var s=o.getFilters(n,r);i.value=void 0!==s[i.name]?s[i.name]:"","function"==typeof o._eventHandlers[i.id]&&u.Events.removeEventHandler(i,"change",o._eventHandlers[i.id]),o._eventHandlers[i.id]=function(){var i=o.getFilters(n,r);return o.bindMarkers(e.dataset.bloodbathSrc,t,i),!1},r&&(i.value=void 0!==s[i.name]?s[i.name]:""),u.Events.addEventHandler(i,"change",o._eventHandlers[i.id])})},t.prototype.clearMarkerCluster=function(){return this._markerCluster&&this._markerCluster.clearMarkers(),this},t.prototype.bindMarkers=function(e,n,i){var a=this;s.get(e.replace("%year%",i.year)+"?_="+(new Date).getTime()).then(function(e,s){var u=new google.maps.LatLngBounds,l=[],p=[],h=[],d=s;if(a.alterFiltersLabels(d),d=a.filteredResponse(d,i),a.clearMapObjects(),d.deaths&&d.deaths.length){var f=function(e){var r=d.deaths[e],o=a._imgHousePath.replace("%house%",r.house),i=new google.maps.Marker({map:n,icon:new google.maps.MarkerImage(o),position:new google.maps.LatLng(r.gps.lat,r.gps.lon),title:r.text}),s='\'<h4>\n              <img height="16" src="'+o+'" alt="House: '+r.house+'"  title="House: '+r.house+'" />\n              '+(r.section?r.section+" - ":"")+"\n              "+r.location+"\n              "+(r.count>1?' - <strong style="color: red;">'+r.count+" décès</strong>":"")+"\n            </h4>\n            <span>\n              <strong>Date</strong>: "+r.day+"/"+r.month+"/"+r.year+"\n              <br /><br />\n              <strong>Cause</strong>: "+t.getFilterValueLabel("cause",r.cause)+"\n              <br /><br />\n              <strong>Circonstances</strong>:  "+r.text+"\n            </span>";if(r.sources&&r.sources.length){var u="";for(var c in r.sources){var f=r.sources[c];u+=(u?", ":"")+'<a href="'+f.url+'" target="_blank">'+f.titre+"</a>"}s+="<br /><br /><strong>Sources: </strong>"+u}var g="Erreur trouvée - "+r.section+" + -  "+r.day+"/"+r.month+"/"+r.year;s+='<br /><small style="float: right"><a href="mailto:'+a._configObject.config.contactEmail+"?subject="+g+'">[Une erreur ?]</a></small>';var m=new google.maps.InfoWindow({content:s});google.maps.event.addListener(i,"click",function(){a._currentInfoWindows&&a._currentInfoWindows.close(),m.open(n,i),a._currentInfoWindows=m}),a._infoWindows.push(m),"interieur"===r.origin?h.push(i):l.push(i),p.push({location:new google.maps.LatLng(r.gps.lat,r.gps.lon),weight:10+(r.count>1?5*r.count:0)}),a._markers.push(i)};for(var g in d.deaths)f(g);1===a._markers.length&&1===a._infoWindows.length&&a._infoWindows[0].open(n,a._markers[0]),a._markerCluster=new o(n,a._markers,{gridSize:60,imagePath:"./assets/images/clustering/m",maxZoom:14});var m=h.length?h:l;for(var g in m)m.hasOwnProperty(g)&&u.extend(m[g].getPosition());p.length&&(a._heatMap=new google.maps.visualization.HeatmapLayer(r({data:p},a._configObject.config.heatmapOptions)),a._heatMap.setMap(n)),c.Permalink.build(i),a.printDefinitionsText(s),n.fitBounds(u)}else a.printDefinitionsText(null)})},t.prototype.setupSkeleton=function(){var t=document.querySelector("#search"),e=this._configObject.config.searchMinLength;t.setAttribute("minlength",e),t.setAttribute("placeholder",t.getAttribute("placeholder").replace("%d",e))},t.prototype.clearMapObjects=function(){this.clearMarkers().clearInfoWindows().clearHeatMap().clearMarkerCluster()},t.prototype.clearMarkers=function(){for(var t=0;t<this._markers.length;t++)this._markers[t].setMap(null);return this._markers=[],this},t.prototype.clearInfoWindows=function(){for(var t=0;t<this._infoWindows.length;t++)google.maps.event.clearInstanceListeners(this._infoWindows[t]),this._infoWindows[t].close();return this._infoWindows=[],this},t.prototype.clearHeatMap=function(){return this._heatMap&&this._heatMap.setMap(null),this},t.prototype.bindLocalizationButton=function(t){var e=this,n={ctrlChildId:"localizationImg",ctrlPosition:google.maps.ControlPosition.LEFT_TOP,defaultCtrlChildBgSize:"180px 18px",imagePath:this._configObject.config.imagePath.localize,title:"Voir autour de moi"};l.GmapUtils.bindButton(t,function(){var n=new google.maps.Marker({map:t,animation:google.maps.Animation.DROP,icon:new google.maps.MarkerImage(e._configObject.config.imagePath.bluedot),position:{lat:31.4181,lng:73.0776}}),r="0",o=setInterval(function(){var t=document.querySelector("#localizationImg");r=-18==+r?"0":"-18",t.style.backgroundPosition=r+"px 0px"},500);confirm("La demande de localisation ne servira qu'à positionner la carte autour de vous, aucune donnée ne sera envoyée ni même conservée nulle part.")&&navigator.geolocation?navigator.geolocation.getCurrentPosition(function(r){var i=new google.maps.LatLng(r.coords.latitude,r.coords.longitude);n.setPosition(i),t.setCenter(i),t.setZoom(12);var s=new google.maps.InfoWindow({content:"Ma position approximative"});google.maps.event.addListener(n,"click",function(){e._currentInfoWindows&&e._currentInfoWindows.close(),s.open(t,n),e._currentInfoWindows=s}),s.open(t,n),document.querySelector("#localizationImg").style.backgroundPosition="-144px 0px",clearInterval(o)}):(clearInterval(o),document.querySelector("#localizationImg").style.backgroundPosition="0px 0px")},n),google.maps.event.addListener(t,"dragend",function(){document.querySelector("#localizationImg").style.backgroundPosition="0px 0px"})},t.prototype.bindRandomizationButton=function(t){var e=this,n={ctrlChildId:"ramdomImg",ctrlPosition:google.maps.ControlPosition.LEFT_TOP,defaultCtrlChildBgPos:"-2px -2px",defaultCtrlChildBgSize:"120%",imagePath:this._configObject.config.imagePath.random,title:"Marqueur aléatoire"};l.GmapUtils.bindButton(t,function(){var n=Math.floor(Math.random()*e._markers.length),r=e._markers[n];t.setCenter(r.getPosition()),t.setZoom(13),google.maps.event.trigger(r,"click")},n)},t.prototype.getDefinitions=function(t){var e={};for(var n in this.getConfigDefinitions())for(var r in t.deaths)if(t.deaths.hasOwnProperty(r)){var o=t.deaths[r];e[n]||(e[n]={}),e[n][o[n]]||(e[n][o[n]]=0),Number.isInteger(o.count)&&o.count>1?e[n][o[n]]+=o.count:e[n][o[n]]++}return e},t.prototype.getLatestDeath=function(t){for(var e=0,n=null,r=0,o=t.deaths;r<o.length;r++){var i=o[r],s=Number(i.year)+100*Number(i.month)+Number(i.day);e<=s&&(e=s,n=i)}return n},t.prototype.printDefinitionsText=function(t){var e=[];if(t){for(var n=this.getDefinitions(t),r=this.getLatestDeath(t),o=this.getConfigDefinitions(),i=0,s=Object.entries(n);i<s.length;i++){for(var a=s[i],u=a[0],l=a[1],c="",p=0,h=Object.entries(l);p<h.length;p++){var d=h[p],f=d[0],g=d[1],m=g>1;if(o[u][f])c+=(c?", ":"")+o[u][f][m?"plural":"singular"].replace("%d",g).replace("%"+u+"%",f);else if(o[u]["#any"]){c+=(c?", ":"")+o[u]["#any"][m?"plural":"singular"].replace("%d",g).replace("%"+u+"%",f)}else c+=(c?", ":"")+"["+f+"] ("+g+")"}e.push(o[u]["#label"].replace("%"+u+"%",c))}e.push(""),e.push("<em>Dernier décès indexé: "+r.day+"/"+r.month+"/"+r.year+" - "+r.location+"</em>")}else e.push('<div class="alert alert-warning" role="alert">\n                      <p>\n                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>&nbsp;\n                        <strong>Aucun r&eacute;sultat trouv&eacute;, essayez avec d\'autres crit&egrave;res de recherche.</strong>\n                      </p>\n                  </div>');document.querySelector('[data-role="definitionsText"]').innerHTML=e.join("<br />")},t}();e.App=h},function(t,e,n){function r(t,e,n){this.extend(r,google.maps.OverlayView),this.map_=t,this.markers_=[],this.clusters_=[],this.sizes=[53,56,66,78,90],this.styles_=[],this.ready_=!1;var o=n||{};this.gridSize_=o.gridSize||60,this.minClusterSize_=o.minimumClusterSize||2,this.maxZoom_=o.maxZoom||null,this.styles_=o.styles||[],this.imagePath_=o.imagePath||this.MARKER_CLUSTER_IMAGE_PATH_,this.imageExtension_=o.imageExtension||this.MARKER_CLUSTER_IMAGE_EXTENSION_,this.zoomOnClick_=!0,null!=o.zoomOnClick&&(this.zoomOnClick_=o.zoomOnClick),this.averageCenter_=!1,null!=o.averageCenter&&(this.averageCenter_=o.averageCenter),this.setupStyles_(),this.setMap(t),this.prevZoom_=this.map_.getZoom();var i=this;google.maps.event.addListener(this.map_,"zoom_changed",function(){var t=i.map_.getZoom(),e=i.map_.minZoom||0,n=Math.min(i.map_.maxZoom||100,i.map_.mapTypes[i.map_.getMapTypeId()].maxZoom);t=Math.min(Math.max(t,e),n),i.prevZoom_!=t&&(i.prevZoom_=t,i.resetViewport())}),google.maps.event.addListener(this.map_,"idle",function(){i.redraw()}),e&&(e.length||Object.keys(e).length)&&this.addMarkers(e,!1)}function o(t){this.markerClusterer_=t,this.map_=t.getMap(),this.gridSize_=t.getGridSize(),this.minClusterSize_=t.getMinClusterSize(),this.averageCenter_=t.isAverageCenter(),this.center_=null,this.markers_=[],this.bounds_=null,this.clusterIcon_=new i(this,t.getStyles(),t.getGridSize())}function i(t,e,n){t.getMarkerClusterer().extend(i,google.maps.OverlayView),this.styles_=e,this.padding_=n||0,this.cluster_=t,this.center_=null,this.map_=t.getMap(),this.div_=null,this.sums_=null,this.visible_=!1,this.setMap(this.map_)}r.prototype.MARKER_CLUSTER_IMAGE_PATH_="../images/m",r.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_="png",r.prototype.extend=function(t,e){return function(t){for(var e in t.prototype)this.prototype[e]=t.prototype[e];return this}.apply(t,[e])},r.prototype.onAdd=function(){this.setReady_(!0)},r.prototype.draw=function(){},r.prototype.setupStyles_=function(){if(!this.styles_.length)for(var t,e=0;t=this.sizes[e];e++)this.styles_.push({url:this.imagePath_+(e+1)+"."+this.imageExtension_,height:t,width:t})},r.prototype.fitMapToMarkers=function(){for(var t,e=this.getMarkers(),n=new google.maps.LatLngBounds,r=0;t=e[r];r++)n.extend(t.getPosition());this.map_.fitBounds(n)},r.prototype.setStyles=function(t){this.styles_=t},r.prototype.getStyles=function(){return this.styles_},r.prototype.isZoomOnClick=function(){return this.zoomOnClick_},r.prototype.isAverageCenter=function(){return this.averageCenter_},r.prototype.getMarkers=function(){return this.markers_},r.prototype.getTotalMarkers=function(){return this.markers_.length},r.prototype.setMaxZoom=function(t){this.maxZoom_=t},r.prototype.getMaxZoom=function(){return this.maxZoom_},r.prototype.calculator_=function(t,e){for(var n=0,r=t.length,o=r;0!==o;)o=parseInt(o/10,10),n++;return{text:r,index:n=Math.min(n,e)}},r.prototype.setCalculator=function(t){this.calculator_=t},r.prototype.getCalculator=function(){return this.calculator_},r.prototype.addMarkers=function(t,e){if(t.length)for(var n=0;r=t[n];n++)this.pushMarkerTo_(r);else if(Object.keys(t).length)for(var r in t)this.pushMarkerTo_(t[r]);e||this.redraw()},r.prototype.pushMarkerTo_=function(t){if(t.isAdded=!1,t.draggable){var e=this;google.maps.event.addListener(t,"dragend",function(){t.isAdded=!1,e.repaint()})}this.markers_.push(t)},r.prototype.addMarker=function(t,e){this.pushMarkerTo_(t),e||this.redraw()},r.prototype.removeMarker_=function(t){var e=-1;if(this.markers_.indexOf)e=this.markers_.indexOf(t);else for(var n,r=0;n=this.markers_[r];r++)if(n==t){e=r;break}return-1!=e&&(t.setMap(null),this.markers_.splice(e,1),!0)},r.prototype.removeMarker=function(t,e){var n=this.removeMarker_(t);return!(e||!n)&&(this.resetViewport(),this.redraw(),!0)},r.prototype.removeMarkers=function(t,e){for(var n,r=t===this.getMarkers()?t.slice():t,o=!1,i=0;n=r[i];i++){var s=this.removeMarker_(n);o=o||s}if(!e&&o)return this.resetViewport(),this.redraw(),!0},r.prototype.setReady_=function(t){this.ready_||(this.ready_=t,this.createClusters_())},r.prototype.getTotalClusters=function(){return this.clusters_.length},r.prototype.getMap=function(){return this.map_},r.prototype.setMap=function(t){this.map_=t},r.prototype.getGridSize=function(){return this.gridSize_},r.prototype.setGridSize=function(t){this.gridSize_=t},r.prototype.getMinClusterSize=function(){return this.minClusterSize_},r.prototype.setMinClusterSize=function(t){this.minClusterSize_=t},r.prototype.getExtendedBounds=function(t){var e=this.getProjection(),n=new google.maps.LatLng(t.getNorthEast().lat(),t.getNorthEast().lng()),r=new google.maps.LatLng(t.getSouthWest().lat(),t.getSouthWest().lng()),o=e.fromLatLngToDivPixel(n);o.x+=this.gridSize_,o.y-=this.gridSize_;var i=e.fromLatLngToDivPixel(r);i.x-=this.gridSize_,i.y+=this.gridSize_;var s=e.fromDivPixelToLatLng(o),a=e.fromDivPixelToLatLng(i);return t.extend(s),t.extend(a),t},r.prototype.isMarkerInBounds_=function(t,e){return e.contains(t.getPosition())},r.prototype.clearMarkers=function(){this.resetViewport(!0),this.markers_=[]},r.prototype.resetViewport=function(t){for(var e,n=0;e=this.clusters_[n];n++)e.remove();var r;for(n=0;r=this.markers_[n];n++)r.isAdded=!1,t&&r.setMap(null);this.clusters_=[]},r.prototype.repaint=function(){var t=this.clusters_.slice();this.clusters_.length=0,this.resetViewport(),this.redraw(),s.setTimeout(function(){for(var e,n=0;e=t[n];n++)e.remove()},0)},r.prototype.redraw=function(){this.createClusters_()},r.prototype.distanceBetweenPoints_=function(t,e){if(!t||!e)return 0;var n=(e.lat()-t.lat())*Math.PI/180,r=(e.lng()-t.lng())*Math.PI/180,o=Math.sin(n/2)*Math.sin(n/2)+Math.cos(t.lat()*Math.PI/180)*Math.cos(e.lat()*Math.PI/180)*Math.sin(r/2)*Math.sin(r/2);return 6371*(2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o)))},r.prototype.addToClosestCluster_=function(t){for(var e,n=4e4,r=null,i=(t.getPosition(),0);e=this.clusters_[i];i++){var s=e.getCenter();if(s){var a=this.distanceBetweenPoints_(s,t.getPosition());a<n&&(n=a,r=e)}}r&&r.isMarkerInClusterBounds(t)?r.addMarker(t):((e=new o(this)).addMarker(t),this.clusters_.push(e))},r.prototype.createClusters_=function(){if(this.ready_)for(var t,e=new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(),this.map_.getBounds().getNorthEast()),n=this.getExtendedBounds(e),r=0;t=this.markers_[r];r++)!t.isAdded&&this.isMarkerInBounds_(t,n)&&this.addToClosestCluster_(t)},o.prototype.isMarkerAlreadyAdded=function(t){if(this.markers_.indexOf)return-1!=this.markers_.indexOf(t);for(var e,n=0;e=this.markers_[n];n++)if(e==t)return!0;return!1},o.prototype.addMarker=function(t){if(this.isMarkerAlreadyAdded(t))return!1;if(this.center_){if(this.averageCenter_){var e=this.markers_.length+1,n=(this.center_.lat()*(e-1)+t.getPosition().lat())/e,r=(this.center_.lng()*(e-1)+t.getPosition().lng())/e;this.center_=new google.maps.LatLng(n,r),this.calculateBounds_()}}else this.center_=t.getPosition(),this.calculateBounds_();t.isAdded=!0,this.markers_.push(t);var o=this.markers_.length;if(o<this.minClusterSize_&&t.getMap()!=this.map_&&t.setMap(this.map_),o==this.minClusterSize_)for(var i=0;i<o;i++)this.markers_[i].setMap(null);return o>=this.minClusterSize_&&t.setMap(null),this.updateIcon(),!0},o.prototype.getMarkerClusterer=function(){return this.markerClusterer_},o.prototype.getBounds=function(){for(var t,e=new google.maps.LatLngBounds(this.center_,this.center_),n=this.getMarkers(),r=0;t=n[r];r++)e.extend(t.getPosition());return e},o.prototype.remove=function(){this.clusterIcon_.remove(),this.markers_.length=0,delete this.markers_},o.prototype.getSize=function(){return this.markers_.length},o.prototype.getMarkers=function(){return this.markers_},o.prototype.getCenter=function(){return this.center_},o.prototype.calculateBounds_=function(){var t=new google.maps.LatLngBounds(this.center_,this.center_);this.bounds_=this.markerClusterer_.getExtendedBounds(t)},o.prototype.isMarkerInClusterBounds=function(t){return this.bounds_.contains(t.getPosition())},o.prototype.getMap=function(){return this.map_},o.prototype.updateIcon=function(){var t=this.map_.getZoom(),e=this.markerClusterer_.getMaxZoom();if(e&&t>e)for(var n,r=0;n=this.markers_[r];r++)n.setMap(this.map_);else if(this.markers_.length<this.minClusterSize_)this.clusterIcon_.hide();else{var o=this.markerClusterer_.getStyles().length,i=this.markerClusterer_.getCalculator()(this.markers_,o);this.clusterIcon_.setCenter(this.center_),this.clusterIcon_.setSums(i),this.clusterIcon_.show()}},i.prototype.triggerClusterClick=function(){var t=this.cluster_.getMarkerClusterer();google.maps.event.trigger(t.map_,"clusterclick",this.cluster_),t.isZoomOnClick()&&this.map_.fitBounds(this.cluster_.getBounds())},i.prototype.onAdd=function(){if(this.div_=document.createElement("DIV"),this.visible_){var t=this.getPosFromLatLng_(this.center_);this.div_.style.cssText=this.createCss(t),this.div_.innerHTML=this.sums_.text}this.getPanes().overlayMouseTarget.appendChild(this.div_);var e=this;google.maps.event.addDomListener(this.div_,"click",function(){e.triggerClusterClick()})},i.prototype.getPosFromLatLng_=function(t){var e=this.getProjection().fromLatLngToDivPixel(t);return e.x-=parseInt(this.width_/2,10),e.y-=parseInt(this.height_/2,10),e},i.prototype.draw=function(){if(this.visible_){var t=this.getPosFromLatLng_(this.center_);this.div_.style.top=t.y+"px",this.div_.style.left=t.x+"px",this.div_.style.zIndex=google.maps.Marker.MAX_ZINDEX+1}},i.prototype.hide=function(){this.div_&&(this.div_.style.display="none"),this.visible_=!1},i.prototype.show=function(){if(this.div_){var t=this.getPosFromLatLng_(this.center_);this.div_.style.cssText=this.createCss(t),this.div_.style.display=""}this.visible_=!0},i.prototype.remove=function(){this.setMap(null)},i.prototype.onRemove=function(){this.div_&&this.div_.parentNode&&(this.hide(),this.div_.parentNode.removeChild(this.div_),this.div_=null)},i.prototype.setSums=function(t){this.sums_=t,this.text_=t.text,this.index_=t.index,this.div_&&(this.div_.innerHTML=t.text),this.useStyle()},i.prototype.useStyle=function(){var t=Math.max(0,this.sums_.index-1);t=Math.min(this.styles_.length-1,t);var e=this.styles_[t];this.url_=e.url,this.height_=e.height,this.width_=e.width,this.textColor_=e.textColor,this.anchor_=e.anchor,this.textSize_=e.textSize,this.backgroundPosition_=e.backgroundPosition},i.prototype.setCenter=function(t){this.center_=t},i.prototype.createCss=function(t){var e=[];e.push("background-image:url("+this.url_+");");var n=this.backgroundPosition_?this.backgroundPosition_:"0 0";e.push("background-position:"+n+";"),"object"==typeof this.anchor_?("number"==typeof this.anchor_[0]&&this.anchor_[0]>0&&this.anchor_[0]<this.height_?e.push("height:"+(this.height_-this.anchor_[0])+"px; padding-top:"+this.anchor_[0]+"px;"):e.push("height:"+this.height_+"px; line-height:"+this.height_+"px;"),"number"==typeof this.anchor_[1]&&this.anchor_[1]>0&&this.anchor_[1]<this.width_?e.push("width:"+(this.width_-this.anchor_[1])+"px; padding-left:"+this.anchor_[1]+"px;"):e.push("width:"+this.width_+"px; text-align:center;")):e.push("height:"+this.height_+"px; line-height:"+this.height_+"px; width:"+this.width_+"px; text-align:center;");var r=this.textColor_?this.textColor_:"black",o=this.textSize_?this.textSize_:11;return e.push("cursor:pointer; top:"+t.y+"px; left:"+t.x+"px; color:"+r+"; position:absolute; font-size:"+o+"px; font-family:Arial,sans-serif; font-weight:bold"),e.join("")};var s=s||{};s.MarkerClusterer=r,r.prototype.addMarker=r.prototype.addMarker,r.prototype.addMarkers=r.prototype.addMarkers,r.prototype.clearMarkers=r.prototype.clearMarkers,r.prototype.fitMapToMarkers=r.prototype.fitMapToMarkers,r.prototype.getCalculator=r.prototype.getCalculator,r.prototype.getGridSize=r.prototype.getGridSize,r.prototype.getExtendedBounds=r.prototype.getExtendedBounds,r.prototype.getMap=r.prototype.getMap,r.prototype.getMarkers=r.prototype.getMarkers,r.prototype.getMaxZoom=r.prototype.getMaxZoom,r.prototype.getStyles=r.prototype.getStyles,r.prototype.getTotalClusters=r.prototype.getTotalClusters,r.prototype.getTotalMarkers=r.prototype.getTotalMarkers,r.prototype.redraw=r.prototype.redraw,r.prototype.removeMarker=r.prototype.removeMarker,r.prototype.removeMarkers=r.prototype.removeMarkers,r.prototype.resetViewport=r.prototype.resetViewport,r.prototype.repaint=r.prototype.repaint,r.prototype.setCalculator=r.prototype.setCalculator,r.prototype.setGridSize=r.prototype.setGridSize,r.prototype.setMaxZoom=r.prototype.setMaxZoom,r.prototype.onAdd=r.prototype.onAdd,r.prototype.draw=r.prototype.draw,o.prototype.getCenter=o.prototype.getCenter,o.prototype.getSize=o.prototype.getSize,o.prototype.getMarkers=o.prototype.getMarkers,i.prototype.onAdd=i.prototype.onAdd,i.prototype.draw=i.prototype.draw,i.prototype.onRemove=i.prototype.onRemove,Object.keys=Object.keys||function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e},t.exports=r},function(t,e){const n="__googleMapsApiOnLoadCallback",r=["channel","client","key","language","region","v"];let o=null;t.exports=function(t={}){return o=o||new Promise(function(e,o){const i=setTimeout(function(){window[n]=function(){},o(new Error("Could not load the Google Maps API"))},t.timeout||1e4);window[n]=function(){null!==i&&clearTimeout(i),e(window.google.maps),delete window[n]};const s=document.createElement("script"),a=[`callback=${n}`];r.forEach(function(e){t[e]&&a.push(`${e}=${t[e]}`)}),t.libraries&&t.libraries.length&&a.push(`libraries=${t.libraries.join(",")}`),s.src=`${t.apiUrl||"https://maps.googleapis.com/maps/api/js"}?${a.join("&")}`,document.body.appendChild(s)})}},function(t,e,n){(function(n,r){var o,i,s;i=[],void 0===(s="function"==typeof(o=function(){var t;function e(t){return"function"==typeof t}function o(t){void 0!==n?n(t):void 0!==r&&r.nextTick?r.nextTick(t):setTimeout(t,0)}return function n(r){var i,s=[],a=[],u=function(t,e){return null==i&&null!=t&&(i=t,s=e,a.length&&o(function(){for(var t=0;t<a.length;t++)a[t]()})),i};return u.then=function(u,l){var c=n(r),p=function(){try{var n=i?u:l;e(n)?function n(r){var o,i=0;try{if(r&&(function(t){return"object"==typeof t}(r)||e(r))&&e(o=r.then)){if(r===c)throw new TypeError;o.call(r,function(){i++||n.apply(t,arguments)},function(t){i++||c(!1,[t])})}else c(!0,arguments)}catch(t){i++||c(!1,[t])}}(n.apply(t,s||[])):c(i,s)}catch(t){c(!1,[t])}};return null!=i?o(p):a.push(p),c},r&&(u=r(u)),u}})?o.apply(e,i):o)||(t.exports=s)}).call(this,n(8).setImmediate,n(2))},function(t,e,n){(function(t){var r=void 0!==t&&t||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},e.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(9),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n(1))},function(t,e,n){(function(t,e){!function(t,n){"use strict";if(!t.setImmediate){var r,o,i,s,a,u=1,l={},c=!1,p=t.document,h=Object.getPrototypeOf&&Object.getPrototypeOf(t);h=h&&h.setTimeout?h:t,"[object process]"==={}.toString.call(t.process)?r=function(t){e.nextTick(function(){f(t)})}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?t.MessageChannel?((i=new MessageChannel).port1.onmessage=function(t){f(t.data)},r=function(t){i.port2.postMessage(t)}):p&&"onreadystatechange"in p.createElement("script")?(o=p.documentElement,r=function(t){var e=p.createElement("script");e.onreadystatechange=function(){f(t),e.onreadystatechange=null,o.removeChild(e),e=null},o.appendChild(e)}):r=function(t){setTimeout(f,0,t)}:(s="setImmediate$"+Math.random()+"$",a=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(s)&&f(+e.data.slice(s.length))},t.addEventListener?t.addEventListener("message",a,!1):t.attachEvent("onmessage",a),r=function(e){t.postMessage(s+e,"*")}),h.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return l[u]=o,r(u),u++},h.clearImmediate=d}function d(t){delete l[t]}function f(t){if(c)setTimeout(f,0,t);else{var e=l[t];if(e){c=!0;try{!function(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(n,r)}}(e)}finally{d(t),c=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,n(1),n(2))},function(t,e,n){var r;!function(n){"use strict";var o=function(t){var e=function(t,e,n){n="function"==typeof n?n():null===n?"":void 0===n?"":n,t[t.length]=encodeURIComponent(e)+"="+encodeURIComponent(n)},n=function(t,r,o){var i,s,a;if("[object Array]"===Object.prototype.toString.call(r))for(i=0,s=r.length;i<s;i++)n(t+"["+("object"==typeof r[i]?i:"")+"]",r[i],o);else if(r&&"[object Object]"===r.toString())for(a in r)r.hasOwnProperty(a)&&n(t?t+"["+a+"]":a,r[a],o,e);else if(t)e(o,t,r);else for(a in r)e(o,a,r[a]);return o};return n("",t,[]).join("&").replace(/%20/g,"+")};"object"==typeof t.exports?t.exports=o:void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=function(){function t(t){this._configPath="./data/config/settings.json",this._definitionsPath="./data/config/definitions.json",this.init(t)}return t.prototype.init=function(t){var e=this;r.get(this._configPath).then(function(n,o){e.config=o.settings,r.get(e._definitionsPath).then(function(n,r){e.definitions=r.definitions,t&&t()})})},t}();e.Config=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){}return t.addEventHandler=function(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent&&t.attachEvent("on "+e,n)},t.removeEventHandler=function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n,!1)},t}();e.Events=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){}return t.bindButton=function(t,e,n){var r=document.createElement("div"),o=document.createElement("button"),i=document.createElement("div");return o.style.backgroundColor="#FFF",o.style.border="none",o.style.borderRadius="2px",o.style.boxShadow="0 1px 4px rgba(0,0,0,0.3)",o.style.cursor="pointer",o.style.height="28px",o.style.marginTop="10px",o.style.marginLeft="10px",o.style.outline="none",o.style.padding="0px",o.style.width="28px",o.title=n.title,r.appendChild(o),i.id=n.ctrlChildId?n.ctrlChildId:"ctrl-child-"+Math.floor(1e3*Math.random()),i.className="ctrl-child",i.style.backgroundImage="url("+n.imagePath+")",i.style.backgroundPosition=n.defaultCtrlChildBgPos?n.defaultCtrlChildBgPos:"0 0",i.style.backgroundRepeat="no-repeat",i.style.backgroundSize=n.defaultCtrlChildBgSize?n.defaultCtrlChildBgSize:"100%",i.style.height="18px",i.style.margin="5px",i.style.width="18px",o.appendChild(i),o.addEventListener("click",e),t.controls[n.ctrlPosition].push(r),r},t}();e.GmapUtils=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){}return t.build=function(t,e){var n=document.querySelector(e||'[data-role="permalink"]'),r=location.href.replace(/#.*$/,""),o="";for(var i in t)if(t.hasOwnProperty(i)){var s=t[i];s&&(o+=(o?"&":"#")+i+"="+s)}n.value=r+o},t}();e.Permalink=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){}return t.normalizeString=function(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()},t.containsString=function(e,n){return t.normalizeString(e).includes(n)},t.arrayContainsString=function(e,n){for(var r=0,o=n;r<o.length;r++){var i=o[r];if(t.containsString(e,i))return!0}return!1},t}();e.StringUtilsHelper=r}]);