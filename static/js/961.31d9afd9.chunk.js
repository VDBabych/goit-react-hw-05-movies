"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[961],{961:function(e,t,r){r.r(t),r.d(t,{MovieDetails:function(){return f}});var n=r(861),a=r(439),c=r(757),i=r.n(c),s=r(791),u=r(689),o=r(87),d=r(403),p=r(184),f=function(){var e,t,r=null!==(e=null===(t=(0,u.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies",c=(0,s.useState)(null),f=(0,a.Z)(c,2),h=f[0],v=f[1],l=(0,u.UO)().movieId;if((0,s.useEffect)((function(){if(l){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.Pg)(l);case 3:t=e.sent,v(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[l]),h)return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.rU,{to:r,children:"Go back"}),(0,p.jsxs)("div",{children:[(0,p.jsx)("img",{src:h.poster_path&&"https://image.tmdb.org/t/p/w500/".concat(h.poster_path),width:250,alt:"poster"}),(0,p.jsx)("h2",{children:"".concat(h.title," (").concat(new Date(h.release_date).getFullYear(),")")}),(0,p.jsx)("p",{children:"User score: ".concat(Math.round(10*h.vote_average),"%")}),(0,p.jsx)("h3",{children:"Owerview"}),(0,p.jsx)("p",{children:h.overview}),(0,p.jsx)("h4",{children:"Genres"}),(0,p.jsx)("ul",{children:h.genres.map((function(e){var t=e.id,r=e.name;return(0,p.jsx)("li",{children:r},t)}))})]}),(0,p.jsxs)("div",{children:["Additional information",(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(o.rU,{to:"cast",state:{from:r},children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(o.rU,{to:"reviews",state:{from:r},children:"Reviews"})})]}),(0,p.jsx)(u.j3,{})]})]})}},403:function(e,t,r){r.d(t,{Df:function(){return s},Ku:function(){return d},Pg:function(){return o},Wf:function(){return u},fI:function(){return p}});var n=r(861),a=r(757),c=r.n(a),i=r(263),s=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:"9cda16d98a6e510af2decf0d66e8e7d5"}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"9cda16d98a6e510af2decf0d66e8e7d5",language:"en-US",page:1,include_adult:!1,query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t),{params:{api_key:"9cda16d98a6e510af2decf0d66e8e7d5",language:"en-US"}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits"),{params:{api_key:"9cda16d98a6e510af2decf0d66e8e7d5",language:"en-US"}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),{params:{api_key:"9cda16d98a6e510af2decf0d66e8e7d5",language:"en-US",page:1}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=961.31d9afd9.chunk.js.map