(this.webpackJsonpmoviesearch=this.webpackJsonpmoviesearch||[]).push([[0],{28:function(e,t,a){e.exports=a(64)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),l=a.n(c),o=(a(33),a(2)),i=a(1),s=(a(34),a(35),function(){var e=Object(i.f)(),t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(""),m=Object(o.a)(s,2),u=m[0],d=m[1],p=Object(n.useState)(null),b=Object(o.a)(p,2),f=b[0],v=b[1],E=function(t){if(t.preventDefault(),c.length){var a="/movie-list/".concat(c.toLowerCase());u.length&&(a+="/".concat(u)),e.push(a),v(null)}else v("Movie Title Field is required")};return r.a.createElement("section",{className:"container dark-background search-page h-50"},r.a.createElement("header",{className:"search-page-header"},r.a.createElement("h1",null,"Movie Search App")),r.a.createElement("main",{className:"search-page-content"},r.a.createElement("form",{className:"form-inline",onSubmit:E},r.a.createElement("div",{className:"form-group mx-sm-3 mb-2"},r.a.createElement("label",{form:"movieTitle",className:"sr-only"},"Movie title"),r.a.createElement("input",{className:"form-control",name:"movieTitle","data-testid":"movieTitle",type:"text",placeholder:"Movie Title",required:!0,value:c,onChange:function(e){l(e.target.value)}})),r.a.createElement("div",{className:"form-group mx-sm-3 mb-2"},r.a.createElement("label",{form:"year",className:"sr-only"},"Production Year"),r.a.createElement("input",{className:"form-control",placeholder:"Production Year","data-testid":"year",name:"year",type:"text",value:u,onChange:function(e){d(e.target.value)}})),r.a.createElement("button",{className:"btn btn-primary mb-2","data-testid":"search-button",onClick:E}," Search")),f&&r.a.createElement("div",{"data-testid":"validation-error",className:"alert alert-danger",role:"alert"},f)))}),m=a(7),u=a.n(m),d=a(6),p=a(9),b=a(27),f=a.n(b).a.create({baseURL:"https://www.omdbapi.com/"});f.interceptors.request.use((function(e){return e.params=Object(d.a)({apikey:"157f34ed",type:["movie","series","episode"]},e.params),e}));var v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return f.get("",{params:{s:e,y:t}})},E=function(e){return f.get("",{params:{i:e}})},h=r.a.createContext({movies:{},details:{},updateDetails:function(){},updateMovies:function(){}}),g=h.Provider,j=h,O=(a(59),function(e){var t=e.imdbID,a=e.Title,n=e.Poster,c=e.Year,l=Object(i.f)();return r.a.createElement("div",{className:"col-12 movie-tile dark-background"},r.a.createElement("img",{className:"movie-tile-poster",src:n,onError:function(e){e.target.onerror=null,e.target.src="http://via.placeholder.com/300x450"},alt:a}),r.a.createElement("section",{className:"movie-tile-description"},r.a.createElement("h3",null,a," / ",c),r.a.createElement("button",{className:"btn btn-primary","data-testid":"read-more",onClick:function(){l.push("/movie/".concat(t))}},"Read More")))}),k=function(e){var t=e.path,a=Object(i.f)(),c=Object(n.useState)(!0),l=Object(o.a)(c,2),s=l[0],m=l[1];return Object(n.useEffect)((function(){var e=document.referrer.length?new URL(document.referrer).hostname:"",t=window.location.hostname;e.length&&e!==t&&m(!1)}),[]),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){t?a.push(t):s?a.goBack():a.push("/")}},"Back")},N=(a(60),function(e){var t=e.title,a=e.customClassName;return r.a.createElement("header",{className:"page-header ".concat(a)},r.a.createElement(k,null),r.a.createElement("h1",null,t))}),y=function(){return r.a.createElement("div",{className:"spinner-border text-light text-center",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))},w=(a(61),function(){var e=Object(n.useContext)(j),t=e.movies,a=e.updateMovies,c=Object(n.useState)(!1),l=Object(o.a)(c,2),s=l[0],m=l[1],b=Object(i.f)(),f=Object(i.g)(),E=f.title,h=f.year,g=Object(n.useState)([]),k=Object(o.a)(g,2),w=k[0],x=k[1],S=h?"".concat(E,"/").concat(h):E,C=Object(n.useCallback)(function(){var e=Object(p.a)(u.a.mark((function e(n,r,c){var l,o,i,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t[r]){e.next=4;break}x(t[r]),e.next=21;break;case 4:return e.prev=4,m(!0),e.next=8,v(n,c);case 8:l=e.sent,o=l.data,i=o.Search.filter((function(e){return"game"!==e.Type})),m(!1),x(i),(s=Object(d.a)({},t))[r]=i,a(s),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(4),b.push("/notFound");case 21:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t,a,n){return e.apply(this,arguments)}}(),[a,t,b,m]);return Object(n.useEffect)((function(){C(E,S,h)}),[E,S,h,C]),r.a.createElement("section",{className:"container list-page"},r.a.createElement("div",{className:"row"},r.a.createElement(N,{customClassName:"dark-background col-12",title:"You searched ".concat(E)}),s?r.a.createElement(y,null):w&&w.map((function(e){return r.a.createElement(O,Object.assign({key:e.imdbID},e))}))))}),x=(a(62),function(){var e=Object(i.f)(),t=Object(n.useContext)(j),a=t.details,c=t.updateDetails,l=Object(n.useState)(!1),s=Object(o.a)(l,2),m=s[0],b=s[1],f=Object(i.g)().movieId,v=Object(n.useState)({}),h=Object(o.a)(v,2),g=h[0],O=h[1],k=Object(n.useState)(null),w=Object(o.a)(k,2),x=w[0],S=w[1],C=Object(n.useCallback)(Object(p.a)(u.a.mark((function t(){var n,r,l;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,b(!0),t.next=4,E(f);case 4:n=t.sent,(r=n.data).Error?S("we are unable to find more information"):((l=Object(d.a)({},a))[f]=r,c(l),O(r)),b(!1),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),e.push("/notFound");case 13:case"end":return t.stop()}}),t,null,[[0,10]])}))),[f,a,c,e,b]);return Object(n.useEffect)((function(){a[f]?O(a[f]):C()}),[C,f,a]),r.a.createElement("article",{className:"container movie-page"},m?r.a.createElement(y,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{customClassName:"movie-page-header dark-background",title:x||g.Title}),!x&&r.a.createElement("section",{className:"movie-page-content dark-background "},r.a.createElement("img",{className:"movie-page-poster",onError:function(e){e.target.onerror=null,e.target.src="http://via.placeholder.com/300x450"},src:g.Poster,alt:g.Title}),r.a.createElement("main",{className:"movie-page-description"},r.a.createElement("dl",{className:"movie-page-info"},r.a.createElement("dt",null,"Director:"),r.a.createElement("dd",null,g.Director),r.a.createElement("dt",null,"Actors:"),r.a.createElement("dd",null,g.Actors),r.a.createElement("dt",null,"Awards:"),r.a.createElement("dd",null,g.Awards),r.a.createElement("dt",null,"Country:"),r.a.createElement("dd",null,g.Country),r.a.createElement("dt",null,"Genre:"),r.a.createElement("dd",null,g.Genre),r.a.createElement("dt",null,"Rating imdb:"),r.a.createElement("dd",null,g.imdbRating),r.a.createElement("dt",null,"Runtime:"),r.a.createElement("dd",null,g.Runtime)),r.a.createElement("p",null,g.Plot)))))}),S=(a(63),function(){return r.a.createElement("section",{className:"container not-found dark-background"},r.a.createElement("p",{className:"not-found-info"},"Unfortunately we cannot find page which you are looking for. Please use Back button to go to search page"),r.a.createElement(k,null))}),C=function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),m=Object(o.a)(l,2),u=m[0],d=m[1];return r.a.createElement(g,{value:{movies:a,details:u,updateMovies:function(e){c(e)},updateDetails:function(e){d(e)}}},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/movie-list/:title/:year?"},r.a.createElement(w,null)),r.a.createElement(i.a,{exact:!0,path:"/movie/:movieId"},r.a.createElement(x,null)),r.a.createElement(i.a,{exact:!0,path:"/"}," ",r.a.createElement(s,null)," "),r.a.createElement(i.a,{exact:!0,path:"*"}," ",r.a.createElement(S,null)," ")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(11);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M.a,{basename:"/movieSearch"},r.a.createElement(C,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.a06245a0.chunk.js.map