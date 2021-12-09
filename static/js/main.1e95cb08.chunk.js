(this["webpackJsonpreact-rmdb-ts"]=this["webpackJsonpreact-rmdb-ts"]||[]).push([[0],{11:function(n,e,t){n.exports=t.p+"static/media/no_image.31f5bb1d.jpg"},19:function(n,e,t){n.exports=t.p+"static/media/react-movie-logo.5de5919a.svg"},20:function(n,e,t){n.exports=t.p+"static/media/tmdb_logo.30cd724b.svg"},24:function(n,e,t){n.exports=t.p+"static/media/search-icon.80e9d8a2.svg"},25:function(n,e,t){n.exports=t(36)},36:function(n,e,t){"use strict";t.r(e);var a,r,c,i,o,s,l,u,m,d,p,f,b,h,g,v,x,j,w,y,E=t(0),O=t.n(E),k=t(18),S=t.n(k),_=t(9),T=t(1),z=t(19),M=t.n(z),G=t(20),I=t.n(G),B=t(2),N=t(3),W=N.b.div(a||(a=Object(B.a)(["\n  background: var(--darkGrey);\n  padding: 0 20px;\n"]))),C=N.b.div(r||(r=Object(B.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: var(--maxWidth);\n  padding: 20px 0;\n  margin: 0 auto;\n"]))),L=N.b.img(c||(c=Object(B.a)(["\n  width: 200px;\n\n  @media screen and (max-width: 500px) {\n    width: 150px;\n  }\n"]))),R=N.b.img(i||(i=Object(B.a)(["\n  width: 100px;\n\n  @media screen and (max-width: 500px) {\n    width: 80px;\n  }\n"]))),q=function(){return O.a.createElement(W,null,O.a.createElement(C,null,O.a.createElement(_.b,{to:"/"},O.a.createElement(L,{src:M.a,alt:"rmdb-logo"})),O.a.createElement(R,{src:I.a,alt:"tmdb-logo"})))},J=t(7),F=t(4),H=t.n(F),P=t(8),A="https://api.themoviedb.org/3/",D="331cf6fe0109cda0cb4147ad296fc365",U="".concat(A,"search/movie?api_key=").concat(D,"&language=en-US&query="),V="".concat(A,"movie/popular?api_key=").concat(D,"&language=en-US"),K="".concat(A,"authentication/token/new?api_key=").concat(D),Q="".concat(A,"authentication/token/validate_with_login?api_key=").concat(D),X="".concat(A,"authentication/session/new?api_key=").concat(D),Y="http://image.tmdb.org/t/p/",Z={method:"POST",headers:{"Content-Type":"application/json"}},$={fetchMovies:function(){var n=Object(P.a)(H.a.mark((function n(e,t){var a;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e?"".concat(U).concat(e,"&page=").concat(t):"".concat(V,"&page=").concat(t),n.next=3,fetch(a);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),fetchMovie:function(){var n=Object(P.a)(H.a.mark((function n(e){var t;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(A,"movie/").concat(e,"?api_key=").concat(D),n.next=3,fetch(t);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),fetchCredits:function(){var n=Object(P.a)(H.a.mark((function n(e){var t;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(A,"movie/").concat(e,"/credits?api_key=").concat(D),n.next=3,fetch(t);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),getRequestToken:function(){var n=Object(P.a)(H.a.mark((function n(){var e;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(K);case 2:return n.next=4,n.sent.json();case 4:return e=n.sent,n.abrupt("return",e.request_token);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),authenticate:function(){var n=Object(P.a)(H.a.mark((function n(e,t,a){var r,c;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={username:t,password:a,request_token:e},n.next=3,fetch(Q,Object(J.a)(Object(J.a)({},Z),{},{body:JSON.stringify(r)}));case 3:return n.next=5,n.sent.json();case 5:if(!n.sent.success){n.next=13;break}return n.next=9,fetch(X,Object(J.a)(Object(J.a)({},Z),{},{body:JSON.stringify({request_token:e})}));case 9:return n.next=11,n.sent.json();case 11:return c=n.sent,n.abrupt("return",c);case 13:case"end":return n.stop()}}),n)})));return function(e,t,a){return n.apply(this,arguments)}}(),rateMovie:function(){var n=Object(P.a)(H.a.mark((function n(e,t,a){var r,c;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(A,"movie/").concat(t,"/rating?api_key=").concat(D,"&session_id=").concat(e),n.next=3,fetch(r,Object(J.a)(Object(J.a)({},Z),{},{body:JSON.stringify({value:a})}));case 3:return n.next=5,n.sent.json();case 5:return c=n.sent,n.abrupt("return",c);case 7:case"end":return n.stop()}}),n)})));return function(e,t,a){return n.apply(this,arguments)}}()},nn=N.b.div(o||(o=Object(B.a)(["\n\n/* display: none; */\nbackground: linear-gradient(\n    to bottom, rgba(0, 0, 0, 0)\n    41%, rgba(0, 0, 0, 0)\n    100%\n),\nurl(","), var(--darkGrey);\nbackground-size: 100%, cover;\nbackground-position: center;\nheight: 600px;\nposition: relative;\nanimation: animateHeroImage 1s;\n\n\n\n\n@keyframes animateHeroImage {\n    from{\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n"])),(function(n){return n.image})),en=N.b.div(s||(s=Object(B.a)(["\n    padding: 20px;\n    max-width: var(--maxWidth);\n    margin: 0 auto;\n"]))),tn=N.b.div(l||(l=Object(B.a)(["\n    z-index: 100;\n    max-width: 700px;\n    position: absolute;\n    bottom: 40px;\n    margin-right: 20px;\n    min-height: 100px;\n    color: var(--white);\n\n    h1{\n        font-size: var(--fontSuperSuperBig);\n\n        @media screen and (max-width: 720px) {\n            font-size: var(--fontSuperBig);\n        }\n    }\n\n    p {\n        font-size: var(--fontMed);\n\n        @media screen and (max-width: 720px) {\n            font-size: var(--fontSmall);\n        }\n    }\n"]))),an=function(n){var e=n.image,t=n.title,a=n.text;return O.a.createElement(nn,{image:e},O.a.createElement(en,null,O.a.createElement(tn,null,O.a.createElement("h1",null,t),O.a.createElement("p",null,a))))},rn=N.b.div(u||(u=Object(B.a)(["\n\nmax-width: var(--maxWidth);\nmargin: 0 auto;\npadding: 0 20px;\n\n\n\n.sc-pVTFL{\n    animation: gridd 1s;\n}\n\n@keyframes gridd {\n    from{\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\nh1 {\n    color: var(--medGrey);\n\n    @media screen and (max-width: 768px) {\n        font-size: var(--fontBig);\n    }\n}\n\n"]))),cn=N.b.div(m||(m=Object(B.a)(["\n\ndisplay: grid;\ngrid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\ngrid-gap: 2rem;\n\n"]))),on=function(n){var e=n.header,t=n.children;return O.a.createElement(rn,null,O.a.createElement("h1",null,e),O.a.createElement(cn,null,t))},sn=N.b.img(d||(d=Object(B.a)(["\n\nwidth: 100%;\nmax-width: 720px;\ntransition: all 0.3s;\nobject-fit: cover;\nborder-radius: 30px;\nanimation: animateThumb 1s;\n\n\n:hover {\n    opacity: 0.75;\n    /* transform: translatey(-10px) translatex(-5px) scale(1.05);      */\n}\n\n@keyframes animateThumb {\n    from{\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n\n"]))),ln=function(n){var e=n.image,t=n.movieId,a=n.clickable;return O.a.createElement("div",null,a?O.a.createElement(_.b,{to:"/".concat(t)},O.a.createElement(sn,{src:e,alt:"movie-thumb"})):O.a.createElement(sn,{src:e,alt:"movie-thumb"}))},un=N.b.div(p||(p=Object(B.a)(["\n\nborder: 5px solid var(--lightGrey);\nborder-top: 5px solid var(--medGrey);\nborder-bottom: 5px solid grey;\nborder-radius: 50%;\nwidth: 50px;\nheight: 50px;\nanimation: spin 0.8s linear infinite;\nmargin: 20px auto;\n\n@keyframes spin {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n"]))),mn=t(5),dn=t(24),pn=t.n(dn),fn=N.b.div(f||(f=Object(B.a)(["\ndisplay: flex;\nalign-items: center;\nheight: 100px;\nbackground: var(--darkGrey);\npadding: 0 20px;\n\n\n"]))),bn=N.b.div(b||(b=Object(B.a)(["\nposition: relative;\nmax-width: var(--maxWidth);\nwidth: 100%;\nheight: 55px;\nbackground: var(--medGrey);\nmargin: 0 auto;\nborder-radius: 40px;\ncolor: var(--white);\n\nimg {\n    position: absolute;\n    left: 15px;\n    top: 14px;\n    width: 30px;\n}\n\ninput {\n    font-size: 28px;\n    position: absolute;\n    left: 0;\n    margin: 8px 0;\n    padding: 0 0 0 60px;\n    border: 0;\n    width: 95%;\n    background: transparent;\n    height: 40px;\n    color: var(--white);\n\n    :focus {\n        outline: none;\n    }\n\n    @media screen and (max-width: 768px) {\n        font-size: var(--fontMed);\n    }\n}\n\n"]))),hn=function(n){var e=n.setSearchTerm,t=Object(E.useState)(""),a=Object(mn.a)(t,2),r=a[0],c=a[1],i=Object(E.useRef)(!0);return Object(E.useEffect)((function(){if(!i.current){var n=setTimeout((function(){e(r)}),500);return function(){return clearTimeout(n)}}i.current=!1}),[e,r]),O.a.createElement(fn,null,O.a.createElement(bn,null,O.a.createElement("img",{src:pn.a,alt:"search-icon"}),O.a.createElement("input",{type:"text",placeholder:"Search Movie",onChange:function(n){return c(n.currentTarget.value)},value:r})))},gn=N.b.button(h||(h=Object(B.a)(["\n\ndisplay: block;\nbackground: var(--darkGrey);\nwidth: 25%;\nheight: 60px;\nborder-radius: 30px;\ncolor: var(--white);\nfont-size: var(--fontBig);\nmargin: 20px auto;\ntransition: all 0.3s;\noutline: none;\ncursor: pointer;\n:hover {\n    opacity: 0.8;\n}\n\n\n"]))),vn=function(n){var e=n.text,t=n.callback;return O.a.createElement(gn,{type:"button",onClick:t},e)},xn=t(13),jn={page:0,results:[],total_pages:0,total_results:0},wn=t(11),yn=t.n(wn),En=(t(35),function(){var n=function(){var n=Object(E.useState)(""),e=Object(mn.a)(n,2),t=e[0],a=e[1],r=Object(E.useState)(jn),c=Object(mn.a)(r,2),i=c[0],o=c[1],s=Object(E.useState)(!1),l=Object(mn.a)(s,2),u=l[0],m=l[1],d=Object(E.useState)(!1),p=Object(mn.a)(d,2),f=p[0],b=p[1],h=Object(E.useState)(!1),g=Object(mn.a)(h,2),v=g[0],x=g[1];console.log(t);var j=function(){var n=Object(P.a)(H.a.mark((function n(e){var t,a,r=arguments;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:"",n.prev=1,b(!1),m(!0),n.next=6,$.fetchMovies(t,e);case 6:a=n.sent,console.log(a),o((function(n){return Object(J.a)(Object(J.a)({},a),{},{results:e>1?[].concat(Object(xn.a)(n.results),Object(xn.a)(a.results)):Object(xn.a)(a.results)})})),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),b(!0);case 14:m(!1);case 15:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}();return Object(E.useEffect)((function(){o(jn),j(1,t)}),[t]),Object(E.useEffect)((function(){v&&(j(i.page+1,t),x(!1))}),[v,t,i.page]),{state:i,loading:u,error:f,searchTerm:t,setSearchTerm:a,setIsLoadingMore:x}}(),e=n.state,t=n.loading,a=n.error,r=n.searchTerm,c=n.setSearchTerm,i=n.setIsLoadingMore;return a?O.a.createElement("div",null,"Something went wrong ..."):O.a.createElement(O.a.Fragment,null,!r&&e.results[0]?O.a.createElement(an,{image:"".concat(Y).concat("w1280").concat(e.results[0].backdrop_path),title:e.results[0].original_title,text:e.results[0].overview}):null,O.a.createElement(hn,{setSearchTerm:c}),O.a.createElement(on,{header:r&&!t?"Search Results":r||t?"Loading...":"Popular Movies"},e.results.map((function(n){return O.a.createElement(ln,{key:n.id,clickable:!0,image:n.poster_path?Y+"w780"+n.poster_path:yn.a,movieId:n.id})}))),t&&O.a.createElement(un,null),e.page<e.total_pages&&!t&&O.a.createElement(vn,{text:"Load More",callback:function(){return i(!0)}}))}),On=N.b.div(g||(g=Object(B.a)(["\n\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nwidth: 100%;\nheight: 70px;\nbackground: var(--medGrey);\ncolor: var(--white);\n\n"]))),kn=N.b.div(v||(v=Object(B.a)(["\n\ndisplay: flex;\nwidth: 100%;\nmax-width: var(--maxWidth);\npadding: 0 20px;\nspan {\n    font-size: var(--fontMed);\n    color: var(--white);\n    padding-right: 10px;\n\n    @media screen and (max-width: 768px) {\n        font-size: var(--fontSmall);\n    }\n}\n\n\n"]))),Sn=function(n){var e=n.movieTitle;return O.a.createElement(On,null,O.a.createElement(kn,null,O.a.createElement(_.b,{to:"/"},O.a.createElement("span",null,"Home")),O.a.createElement("span",null,"|"),O.a.createElement("span",null,e)))},_n=N.b.div(x||(x=Object(B.a)(["\n\nbackground: ",";\nbackground-size: cover;\nbackground-position: center;\npadding: 40px 20px;\nanimation: animationMovieInfo 1s;\n\n\n\n\n@keyframes animationMovieInfo {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n\n"])),(function(n){var e=n.backdrop;return e?"url(".concat(Y).concat("w1280").concat(e,")"):"#000"})),Tn=N.b.div(j||(j=Object(B.a)(["\n\ndisplay: flex;\nmax-width: var(--maxWidth);\nmargin: 0 auto;\nbackground: rgba(0, 0, 0, 0.7);\nborder-radius: 30px;\n\n@media screen and (max-width: 768px) {\n    display: block;\n    max-height: none;\n}\n"]))),zn=N.b.div(w||(w=Object(B.a)(["\n\n\nwidth: 100%;\npadding: 20px 40px;\ncolor: var(--white);\noverflow: hidden;\n\n.rating-directors {\n    display: flex;\n    justify-content: flex-start;    \n}\n\n.score {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 35px;\n    background: #fff;\n    color: #000;\n    font-weight: 800;\n    border-radius: 50%;\n    margin: 0;\n}\n\n.director {\n    margin: 0 0 0 40px;\n\n    p {\n    margin: 0;\n}\n}\n\nh1 {\n    @media screen and (max-width: 768px) {\n        font-size: var(--fontBig);\n    }\n}\n\n"]))),Mn=function(n){var e=n.movie;return O.a.createElement(_n,{backdrop:e.backdrop_path},O.a.createElement(Tn,null,O.a.createElement(ln,{image:e.poster_path?"".concat(Y).concat("w780").concat(e.poster_path):yn.a,clickable:!1,alt:"movie-thumb"}),O.a.createElement(zn,null,O.a.createElement("h1",null,e.title),O.a.createElement("h3",null,"PLOT"),O.a.createElement("p",null,e.overview),O.a.createElement("div",{className:"rating-directors"},O.a.createElement("div",null,O.a.createElement("h3",null,"RATING"),O.a.createElement("div",{className:"score"},e.vote_average)),O.a.createElement("div",{className:"director"},O.a.createElement("h3",null,"DIRECTOR",e.directors.length>1?"S":""),e.directors.map((function(n){return O.a.createElement("p",{key:n.credit_id},n.name)})))))))},Gn=function(){var n=function(n){var e=Object(E.useState)({}),t=Object(mn.a)(e,2),a=t[0],r=t[1],c=Object(E.useState)(!0),i=Object(mn.a)(c,2),o=i[0],s=i[1],l=Object(E.useState)(!1),u=Object(mn.a)(l,2),m=u[0],d=u[1];return Object(E.useEffect)((function(){(function(){var e=Object(P.a)(H.a.mark((function e(){var t,a,c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),d(!1),e.next=5,$.fetchMovie(n);case 5:return t=e.sent,e.next=8,$.fetchCredits(n);case 8:a=e.sent,c=a.crew.filter((function(n){return"Director"===n.job})),r(Object(J.a)(Object(J.a)({},t),{},{actors:a.cast,directors:c})),s(!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),d(!0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}})()()}),[n]),{state:a,loading:o,error:m}}(Object(T.g)().movieId),e=n.state,t=n.loading,a=n.error;return t?O.a.createElement(un,null):a?O.a.createElement("div",null,"Something went wrong..."):O.a.createElement(O.a.Fragment,null,O.a.createElement(Sn,{movieTitle:e.original_title}),O.a.createElement(Mn,{movie:e}))},In=function(){return O.a.createElement("div",null,"Not Found")},Bn=Object(N.a)(y||(y=Object(B.a)(["\n  :root {\n    --maxWidth: 1280px; \n    --white: #fff;\n    --lightGrey: #eee;\n    --medGrey: #353535; \n    --darkGrey: #1c1c1c;\n    --fontSuperBig: 2.5rem;\n    --fontSuperSuperBig: 3rem;\n    --fontBig: 1.5rem;\n    --fontMed: 1.2rem;\n    --fontSmall: 1rem;\n  }\n\n  * {\n    box-sizing: border-box;\n    font-family: 'Abel', sans-serif;  \n  }\n\n  body {  \n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n    h1 {\n      font-size: 2rem;\n      font-weight: 600;\n      color: var(--white);\n    }\n\n    h3 {\n      font-size: 1.1rem;\n      font-weight: 600;\n    }\n\n    p {\n      font-size: 1rem;\n      color: var(--white);\n    }\n  }\n"]))),Nn=function(){return O.a.createElement(_.a,null,O.a.createElement(q,null),O.a.createElement(T.c,null,O.a.createElement(T.a,{path:"/",element:O.a.createElement(En,null)}),O.a.createElement(T.a,{path:"/:movieId",element:O.a.createElement(Gn,null)}),O.a.createElement(T.a,{path:"/*",element:O.a.createElement(In,null)})),O.a.createElement(Bn,null))};S.a.render(O.a.createElement(O.a.StrictMode,null,O.a.createElement(Nn,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.1e95cb08.chunk.js.map