"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[971],{4648:function(e,t,r){r.d(t,{q:function(){return n}});var n={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},9874:function(e,t,r){r.d(t,{HI:function(){return u},TP:function(){return l},CB:function(){return d},vn:function(){return o}});var n=r(5861),a=r(7757),s=r.n(a),i=r(4569),c=r.n(i)().create({url:"",baseURL:"https://api.themoviedb.org/3",params:{api_key:"185a0ab5d7b155f2662fdcb8709753e2",language:"en-US",include_adult:!1}}),o=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c("/trending/all/day",{});case 3:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",Promise.reject("There is no information about the movie yet..."));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c("/search/movie",{params:{query:t}});case 3:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",Promise.reject("There is no information about the movie yet..."));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c("movie/".concat(t),{});case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",Promise.reject("There is no information about the movie yet..."));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(s().mark((function e(t,r){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c("movie/".concat(t,"/").concat(r),{});case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",Promise.reject("There is no information about the movie yet..."));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}()},4315:function(e,t,r){r.r(t),r.d(t,{default:function(){return M}});var n=r(8152),a=r(2791),s=r(1523),i=r(8931),c=r(8185),o=r(6718),u=r(9874),l=r(4648),d="CardMovie_wrap__oX37a",p="CardMovie_content__BRZoW",v="CardMovie_img__MYCDH",h="CardMovie_contentWrap__g12zH",m="CardMovie_title__CHE6f",f="CardMovie_subtext__SQzT9",_="CardMovie_text__myY5A",x="CardMovie_links__aKKuC",j="CardMovie_linksText__ciwtF",b="CardMovie_list__4uOgA",N="CardMovie_item__VPfsl",C=r(184),g=function(e){var t,r=e.movie,n=e.children,a=r.poster_path,s=r.original_title,i=r.genres,c=r.overview,o=r.vote_average;return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)("div",{className:d,children:[(0,C.jsxs)("div",{className:p,children:[(0,C.jsx)("img",{src:"https://image.tmdb.org/t/p/w1280"+a,alt:s,className:v}),(0,C.jsxs)("div",{className:h,children:[(0,C.jsx)("p",{className:m,children:s}),(0,C.jsxs)("p",{className:f,children:["User Score: ",(t=o,(10*t).toFixed()),"%"]}),(0,C.jsx)("p",{className:_,children:"Owerview"}),(0,C.jsx)("p",{className:f,children:c}),(0,C.jsx)("p",{className:_,children:"Genres"}),(0,C.jsx)("p",{className:f,children:function(e){return e?e.map((function(e){return e.name})).join(", "):""}(i)})]})]}),(0,C.jsxs)("div",{className:x,children:[(0,C.jsx)("p",{className:j,children:"Additional information"}),n&&(0,C.jsx)("ul",{className:b,children:n.map((function(e){return(0,C.jsx)("li",{className:N,children:e},e.props.children)}))})]})]})})},E="MovieDetailsPage_link__joE9b",k="MovieDetailsPage_activeLink__iNkQs",w="MovieDetailsPage_button__ZnqFs",y=(0,a.lazy)((function(){return r.e(709).then(r.bind(r,6016))})),D=(0,a.lazy)((function(){return r.e(753).then(r.bind(r,2945))})),M=function(){var e=(0,a.useState)(null),t=(0,n.Z)(e,2),r=t[0],d=t[1],p=(0,a.useState)(null),v=(0,n.Z)(p,2),h=v[0],m=v[1],f=(0,a.useState)(l.q.IDLE),_=(0,n.Z)(f,2),x=_[0],j=_[1],b=(0,i.TH)(),N=(0,i.k6)(),M=(0,i.UO)().movieId,P=(0,i.$B)(),T=P.url,S=P.path;(0,a.useEffect)((function(){j(l.q.PENDING),(0,u.TP)(M).then((function(e){d(e),j(l.q.RESOLVED)})).catch((function(e){m(e),j(l.q.REJECTED)}))}),[M]);var Z=function(){var e,t;N.push(null!==(e=null===b||void 0===b||null===(t=b.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/")};return(0,C.jsxs)(C.Fragment,{children:[x===l.q.PENDING&&(0,C.jsx)(o.Z,{}),x===l.q.RESOLVED&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("button",{className:w,type:"button",onClick:Z,children:[(0,C.jsx)(c.i1r,{})," Go back"]}),(0,C.jsxs)(g,{movie:r,children:[(0,C.jsx)(s.OL,{to:"".concat(T,"/cast"),className:E,activeClassName:k,children:"Cast"}),(0,C.jsx)(s.OL,{to:"".concat(T,"/reviews"),className:E,activeClassName:k,children:"Reviews"})]}),(0,C.jsxs)(a.Suspense,{fallback:(0,C.jsx)(o.Z,{}),children:[(0,C.jsx)(i.AW,{path:"".concat(S,"/cast"),children:(0,C.jsx)(y,{movieId:M})}),(0,C.jsx)(i.AW,{path:"".concat(S,"/reviews"),children:(0,C.jsx)(D,{movieId:M})})]})]}),x===l.q.REJECTED&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("button",{className:w,type:"button",onClick:Z,children:[(0,C.jsx)(c.i1r,{})," Go back"]}),(0,C.jsx)("p",{style:{marginTop:"20px",fontSize:"20px",fontWeight:500},children:h})]})]})}}}]);
//# sourceMappingURL=MovieDetailsPage.7affd655.chunk.js.map