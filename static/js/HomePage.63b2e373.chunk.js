"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[460],{3781:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(1523),a=r(8931),u="MovieItem_Item__i+SHt",c="MovieItem_Link__h-cdK",i=r(184),o=function(e){var t=e.movie,r=(0,a.TH)();return(0,i.jsx)("li",{className:u,children:(0,i.jsx)(n.rU,{to:{pathname:"/movies/".concat(t.id),state:{from:r}},className:c,children:t.title||t.original_name})})},s="MovieList_List__Qi16k",p=function(e){var t=e.movie;return(0,i.jsx)("ul",{className:s,children:t&&t.map((function(e){return(0,i.jsx)(o,{movie:e},e.id)}))})}},9874:function(e,t,r){r.d(t,{HI:function(){return s},TP:function(){return p},CB:function(){return f},vn:function(){return o}});var n=r(5861),a=r(7757),u=r.n(a),c=r(4569),i=r.n(c)().create({url:"",baseURL:"https://api.themoviedb.org/3",params:{api_key:"185a0ab5d7b155f2662fdcb8709753e2",language:"en-US",include_adult:!1}}),o=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i("/trending/all/day",{});case 3:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",Promise.reject("There is no information about the movie yet..."));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i("/search/movie",{params:{query:t}});case 3:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",Promise.reject("There is no information about the movie yet..."));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i("movie/".concat(t),{});case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",Promise.reject("There is no information about the movie yet..."));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t,r){var n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i("movie/".concat(t,"/").concat(r),{});case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",Promise.reject("There is no information about the movie yet..."));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}()},8489:function(e,t,r){r.r(t);var n=r(8152),a=r(2791),u=r(9874),c=r(3781),i=r(184);t.default=function(){var e=(0,a.useState)(null),t=(0,n.Z)(e,2),r=t[0],o=t[1];return(0,a.useEffect)((function(){(0,u.vn)().then(o)}),[]),(0,i.jsx)(c.Z,{movie:r})}}}]);
//# sourceMappingURL=HomePage.63b2e373.chunk.js.map