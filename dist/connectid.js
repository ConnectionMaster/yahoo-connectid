!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=function(e,t){if("string"==typeof e&&e)if(window.crypto&&crypto.subtle&&crypto.subtle.digest){var n=new TextEncoder("utf-8").encode(e.trim().toLowerCase());crypto.subtle.digest("SHA-256",n).then((function(e){var n=Array.from(new Uint8Array(e));t(n.map((function(e){return("00"+e.toString(16)).slice(-2)})).join(""))}))}else t("");else t("")},i=function(e){if(!e)return!1;return(new Date-new Date(e))/36e5<360},a=function(e){var t,n=(e||{}).hashedEmail;try{t=JSON.parse(localStorage.getItem("yahoo-connectid"))||{}}catch(e){t={}}return(!n||n&&n===t.hashedEmail)&&t.connectid?{hashedEmail:t.hashedEmail,connectid:t.connectid,isStale:!i(t.lastUpdated)}:{}},s=function(e){var t=e?e.hashedEmail:null,n=e?e.connectid:null;if(n&&t){var r={connectid:n,hashedEmail:t,lastUpdated:(new Date).toISOString()};try{localStorage.setItem("yahoo-connectid",JSON.stringify(r))}catch(e){}}},u=function(){localStorage.removeItem("yahoo-connectid")},d=function(e,t,n){var r=new XMLHttpRequest,o=Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&");r.onreadystatechange=function(e){if(r.readyState===XMLHttpRequest.DONE)if(0===r.status||r.status>=200&&r.status<400)try{n(JSON.parse(r.responseText))}catch(e){n()}else n()};try{r.withCredentials=!0,r.open("GET","".concat(e,"?").concat(o),!0),r.send(t)}catch(e){}};function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={syncHashedEmail:function(e){var t=e.pixelId,n=e.hashedEmail,r=e.gdpr,o=e.gdprConsent,c=e.usPrivacy,i=e.yahoo1p;if(t&&n){var a="https://ups.analytics.yahoo.com/ups/".concat(t,"/fed"),u=p(p(p(p({he:n},void 0!==r?{gdpr:r}:{}),void 0!==o?{gdpr_consent:o}:{}),void 0!==c?{us_privacy:c}:{}),void 0!==i?{"1p":i}:{});d(a,u,(function(e){e&&s({hashedEmail:n,connectid:e.connectid})}))}},syncIds:function(e){e.hashedEmail&&f.syncHashedEmail(e)}},y=f;function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e,t){var n=e.pixelId,r=e.email,o=e.gdpr,i=e.gdprConsent,s=e.usPrivacy,d=e.yahoo1p,l=!1;try{l=window.localStorage.getItem("connectIdOptOut")}catch(e){}if("1"===l)return u(),void t({});if(n){var p=r||a().hashedEmail;p?function(e,t){!e||e.indexOf("@")<0?t(e):c(e,t)}(p,(function(e){var r=a({hashedEmail:e});r.connectid&&!r.isStale||y.syncIds(O(O(O(O(O({pixelId:n},e?{hashedEmail:e}:{}),void 0!==o?{gdpr:o}:{}),void 0!==i?{gdprConsent:i}:{}),void 0!==s?{usPrivacy:s}:{}),void 0!==d?{yahoo1p:d}:{})),t(r&&r.connectid?{connectid:r.connectid}:{})})):t({})}else t({})};t.default={getIds:b};"undefined"!=typeof exports&&(exports.getIds=b)}]);