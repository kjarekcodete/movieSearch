(this.webpackJsonpmoviesearch=this.webpackJsonpmoviesearch||[]).push([[0],{28:function(e,t,a){e.exports=a(64)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),i=(a(33),a(2)),l=a(1),m=(a(34),a(35),function(){var e=Object(l.f)(),t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],o=a[1],m=Object(n.useState)(""),s=Object(i.a)(m,2),u=s[0],d=s[1],p=Object(n.useState)(null),b=Object(i.a)(p,2),E=b[0],f=b[1],v=function(t){if(t.preventDefault(),c.length){var a="/movie-list/".concat(c);u.length&&(a+="/".concat(u)),e.push(a),f(null)}else f("Movie Title Field is required")};return r.a.createElement("section",{className:"container dark-background search-page h-50"},r.a.createElement("header",{className:"search-page-header"},r.a.createElement("h1",null,"Movie Search App")),r.a.createElement("main",{className:"search-page-content"},r.a.createElement("form",{className:"form-inline",onSubmit:v},r.a.createElement("div",{className:"form-group mx-sm-3 mb-2"},r.a.createElement("label",{form:"movieTitle",className:"sr-only"},"Movie title"),r.a.createElement("input",{className:"form-control",name:"movieTitle","data-testid":"movieTitle",type:"text",placeholder:"Movie Title",required:!0,value:c,onChange:function(e){o(e.target.value.toLowerCase())}})),r.a.createElement("div",{className:"form-group mx-sm-3 mb-2"},r.a.createElement("label",{form:"year",className:"sr-only"},"Production Year"),r.a.createElement("input",{className:"form-control",placeholder:"Production Year","data-testid":"year",name:"year",type:"text",value:u,onChange:function(e){d(e.target.value.toLowerCase())}})),r.a.createElement("button",{className:"btn btn-primary mb-2","data-testid":"search-button",onClick:v}," Search")),E&&r.a.createElement("div",{"data-testid":"validation-error",className:"alert alert-danger",role:"alert"},E)))}),s=a(7),u=a.n(s),d=a(6),p=a(9),b=a(27),E=a.n(b).a.create({baseURL:"http://www.omdbapi.com/"});E.interceptors.request.use((function(e){return e.params=Object(d.a)({apikey:"157f34ed",type:["movie","series","episode"]},e.params),e}));var f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return E.get("",{params:{s:e,y:t}})},v=function(e){return E.get("",{params:{i:e}})},h=r.a.createContext({movies:{},details:{},updateDetails:function(){},updateMovies:function(){}}),g=h.Provider,N=h,j=(a(59),function(e){var t=e.imdbID,a=e.Title,n=e.Poster,c=e.Year,o=Object(l.f)();return r.a.createElement("div",{className:"movie-tile dark-background"},r.a.createElement("img",{className:"movie-tile-poster",src:n,alt:a}),r.a.createElement("section",{className:"movie-tile-description"},r.a.createElement("h3",null,a," / ",c),r.a.createElement("button",{className:"btn btn-primary","data-testid":"read-more",onClick:function(){o.push("/movie/".concat(t))}},"Read More")))}),T=function(){var e=Object(l.f)(),t=Object(n.useState)(!0),a=Object(i.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)((function(){var e=document.referrer.length?new URL(document.referrer).hostname:"",t=window.location.hostname;e.length&&e!==t&&o(!1)}),[]),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){c?e.goBack():e.push("/")}},"Back")},M=(a(60),function(e){var t=e.title,a=e.customClassName;return r.a.createElement("header",{className:"page-header ".concat(a)},r.a.createElement(T,null),r.a.createElement("h1",null,t))}),k=(a(61),function(){var e=Object(n.useContext)(N),t=e.movies,a=e.updateMovies,c=Object(l.f)().history,o=Object(l.g)(),m=o.title,s=o.year,b=Object(n.useState)([]),E=Object(i.a)(b,2),v=E[0],h=E[1],g=s?"".concat(m,"/").concat(s):m,T=Object(n.useCallback)(function(){var e=Object(p.a)(u.a.mark((function e(n,r,o){var i,l,m,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t[r]){e.next=4;break}h(t[r]),e.next=19;break;case 4:return e.prev=4,e.next=7,f(n,o);case 7:i=e.sent,l=i.data,m=l.Search.filter((function(e){return"game"!==e.Type})),h(m),(s=Object(d.a)({},t))[r]=m,a(s),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),c.push("/notFound");case 19:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t,a,n){return e.apply(this,arguments)}}(),[a,t,c]);return Object(n.useEffect)((function(){T(m,g,s)}),[m,g,s,T]),r.a.createElement("section",{className:"container list-page"},r.a.createElement(M,{customClassName:"dark-background",title:"You serched ".concat(m)}),r.a.createElement("main",{className:"list-page-results"},v&&v.map((function(e){return r.a.createElement(j,Object.assign({key:e.imdbID},e))}))))}),y=(a(62),function(){var e=Object(l.f)(),t=Object(n.useContext)(N),a=t.details,c=t.updateDetails,o=Object(l.g)().movieId,m=Object(n.useState)({}),s=Object(i.a)(m,2),b=s[0],E=s[1],f=Object(n.useState)(null),h=Object(i.a)(f,2),g=h[0],j=h[1],T=Object(n.useCallback)(Object(p.a)(u.a.mark((function t(){var n,r,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v(o);case 3:n=t.sent,(r=n.data).Error?j("we are unable to find more information"):((i=Object(d.a)({},a))[o]=r,c(i),E(r)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e.push("/notFound");case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),[o,a,c,e]);return Object(n.useEffect)((function(){a[o]?E(a[o]):T()}),[T,o,a]),r.a.createElement("article",{className:"container movie-page"},r.a.createElement(M,{customClassName:"movie-page-header dark-background",title:g||b.Title}),!g&&r.a.createElement("section",{className:"movie-page-content dark-background "},r.a.createElement("img",{className:"movie-page-poster",src:b.Poster,alt:b.Title}),r.a.createElement("main",{className:"movie-page-description"},r.a.createElement("dl",{className:"movie-page-info"},r.a.createElement("dt",null,"Director: "),r.a.createElement("dd",null,b.Director),r.a.createElement("dt",null,"Actors: "),r.a.createElement("dd",null,b.Actors),r.a.createElement("dt",null,"Awards: "),r.a.createElement("dd",null,b.Awards),r.a.createElement("dt",null,"Country: "),r.a.createElement("dd",null,b.Country),r.a.createElement("dt",null,"Genre: "),r.a.createElement("dd",null,b.Genre),r.a.createElement("dt",null,"Rating imdb: "),r.a.createElement("dd",null,b.imdbRating),r.a.createElement("dt",null,"Runtime: "),r.a.createElement("dd",null,b.Runtime)),r.a.createElement("p",null,b.Plot))))}),O=(a(63),function(){return r.a.createElement("section",{className:"container not-found dark-background"},r.a.createElement("p",{className:"not-found-info"},"Unfortunately we cannot find page which you looking for please use Back buttton to go to search page"),r.a.createElement(T,null))}),w={terminator:[{Title:"Terminator 2: Judgment Day",Year:"1991",imdbID:"tt0103064",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"},{Title:"The Terminator",Year:"1984",imdbID:"tt0088247",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},{Title:"Terminator 3: Rise of the Machines",Year:"2003",imdbID:"tt0181852",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMTk5NzM1ODgyN15BMl5BanBnXkFtZTcwMzA5MjAzMw@@._V1_SX300.jpg"},{Title:"Terminator Salvation",Year:"2009",imdbID:"tt0438488",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BODE1MTM1MzA2NF5BMl5BanBnXkFtZTcwODQ5MTA2Mg@@._V1_SX300.jpg"},{Title:"Terminator Genisys",Year:"2015",imdbID:"tt1340138",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMjM1NTc0NzE4OF5BMl5BanBnXkFtZTgwNDkyNjQ1NTE@._V1_SX300.jpg"},{Title:"Terminator: Dark Fate",Year:"2019",imdbID:"tt6450804",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BOWExYzVlZDgtY2E1ZS00NTFjLWFmZWItZjI2NWY5ZWJiNTE4XkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_SX300.jpg"},{Title:"Terminator: The Sarah Connor Chronicles",Year:"2008\u20132009",imdbID:"tt0851851",Type:"series",Poster:"https://m.media-amazon.com/images/M/MV5BZGE2ZDgyOWUtNzdiNS00OTI3LTkwZGQtMTMwNzM4YWUxNGNhXkEyXkFqcGdeQXVyNjU2NjA5NjM@._V1_SX300.jpg"},{Title:"Lady Terminator",Year:"1989",imdbID:"tt0095483",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMTg5NTA1NzEtNWNiNy00ZTc4LWJhZTgtYmJkODZhYWI3NmQ4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"}]},D=function(){var e=Object(n.useState)(w),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)({}),s=Object(i.a)(o,2),u=s[0],d=s[1];return r.a.createElement(g,{value:{movies:a,details:u,updateMovies:function(e){c(e)},updateDetails:function(e){d(e)}}},r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/movie-list/:title/:year?"},r.a.createElement(k,null)),r.a.createElement(l.a,{exact:!0,path:"/movie/:movieId"},r.a.createElement(y,null)),r.a.createElement(l.a,{exact:!0,path:"/"}," ",r.a.createElement(m,null)," "),r.a.createElement(l.a,{exact:!0,path:"*"}," ",r.a.createElement(O,null)," ")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=a(11);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S.a,null,r.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.ed5fcd59.chunk.js.map