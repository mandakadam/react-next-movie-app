(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"1OyB":function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return r}))},"8roN":function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/detail/[slug]",function(){return e("vSNd")}])},G2kw:function(t,n,e){"use strict";n.a="af8cdcd9"},Ji7U:function(t,n,e){"use strict";function r(t,n){return(r=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function o(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&r(t,n)}e.d(n,"a",(function(){return o}))},foSv:function(t,n,e){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}e.d(n,"a",(function(){return r}))},md7G:function(t,n,e){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}function u(t,n){return!n||"object"!==o(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}e.d(n,"a",(function(){return u}))},vSNd:function(t,n,e){"use strict";e.r(n);var r=e("o0o1"),o=e.n(r),u=e("1OyB"),c=e("vuIU"),i=e("md7G"),a=e("foSv"),l=e("Ji7U"),s=e("q1tI"),f=e.n(s),p=e("5Yp1"),d=e("G2kw"),b=f.a.createElement;function y(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var m=function(t){Object(l.a)(r,t);var n,e=(n=r,function(){var t,e=Object(a.a)(n);if(y()){var r=Object(a.a)(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return Object(i.a)(this,t)});function r(){return Object(u.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){var t=this.props.detail;return b(p.a,null,b("div",{className:"container pb-5"},b("div",{className:"row"},b("div",{className:"col-lg-4 mb-4"},b("div",{className:" border border-light rounded"},b("img",{className:"card-img-top",src:t.Poster,alt:""}))),b("div",{className:"col-lg-8"},b("h3",{className:"card-title border-bottom border-light pb-3"},t.Title),b("div",null,b("b",null,"Year"),": ",t.Year,", Released: ",t.Released),b("div",null,b("b",null,"Genre"),": ",t.Genre),b("div",null,b("b",null,"Director"),": ",t.Director),b("div",null,b("b",null,"Writer"),": ",t.Writer),b("div",null,b("b",null,"Actors"),": ",t.Actors),b("div",null,b("b",null,"Language"),": ",t.Language),b("div",null,b("b",null,"Production"),": ",t.Production),b("div",{className:"mt-3"},b("b",null,"Awards: ",t.Awards)),b("h5",{className:"mt-3"},"Rating"),b("div",null,t.Ratings.map((function(t,n){return b("div",{key:"rating_".concat(n)},b("b",null,t.Source)," : ",t.Value)}))),b("h5",{className:"mt-3"},"BoxOffice"),b("div",null,t.BoxOffice)))))}}],[{key:"getInitialProps",value:function(t){var n,e;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.a.awrap(fetch("http://www.omdbapi.com/?apikey=".concat(d.a,"&i=").concat(t.query.slug)));case 2:return n=r.sent,r.next=5,o.a.awrap(n.json());case 5:return e=r.sent,r.abrupt("return",{detail:e});case 7:case"end":return r.stop()}}),null,null,null,Promise)}}]),r}(f.a.Component);n.default=m},vuIU:function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}e.d(n,"a",(function(){return o}))}},[["8roN",0,1,2,3,4,5]]]);