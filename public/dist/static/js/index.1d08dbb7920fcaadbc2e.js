webpackJsonp([1],{28:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(2),n=a(9),s=a.n(n),c=a(8);i.a.config.productionTip=!1,new i.a({el:"#app",store:c.a,template:"<App/>",components:{App:s.a}})},29:function(t,e,a){"use strict";var i={authenticated:!!localStorage.getItem("current_user")},n={LOGIN:function(t){t.authenticated=!0,localStorage.setItem("current_user",!0)},LOGOUT:function(t){t.authenticated=!1,localStorage.setItem("current_user",null)}},s={},c={login:function(t){(0,t.commit)("LOGIN")},logout:function(t){(0,t.commit)("LOGOUT")}};e.a={state:i,mutations:n,getters:s,actions:c}},30:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(10),n=a.n(i);e.default={name:"app",data:function(){return{collectives:[],pagination:{},tags:["open source","meetup","wwcode","movement","association","studentclub","compiler","efficient","cloud"],query:""}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a={params:{query:this.query,page:e}};n.a.get("http://localhost:3000/collectives",a).then(function(e){t.collectives=e.data.collectives,t.pagination=e.data.meta.pagination})},searchByTag:function(t){this.query=t},back:function(){this.fetchData(this.pagination.current_page-1)},next:function(){this.fetchData(this.pagination.current_page+1)}},watch:{query:function(){this.fetchData()}},computed:{backBtnVisible:function(){return 1!==this.pagination.current_page&&this.pagination.current_page<=this.pagination.total_pages},nextBtnVisible:function(){return this.pagination.current_page<this.pagination.total_pages}}}},31:function(t,e){},35:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("div",{staticClass:"hero__wrapper"},[a("div",{staticClass:"hero"},[a("div",{staticClass:"heading"},[t._v("Open Collective")]),a("form",{on:{submit:function(e){e.preventDefault(),t.fetchData(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{placeholder:"Search for a collective..."},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]),a("div",{staticClass:"tags"},t._l(t.tags,function(e){return a("a",{staticClass:"tag",attrs:{href:"javascript:;"},on:{click:function(a){t.searchByTag(e)}}},[t._v(t._s(e))])}))])]),a("div",{staticClass:"collectives"},[t.collectives.length>0?t._l(t.collectives,function(e){return a("div",{staticClass:"collective"},[a("div",{staticClass:"collective__image",style:{backgroundImage:"url(https://opencollective.com/static/images/defaultBackgroundImageCollective.jpg)"}},[a("div",{staticClass:"collective__avatar",style:{backgroundImage:"url("+e.image+")"}}),a("div",{staticClass:"collective__overlay"})]),a("div",{staticClass:"collective__content"},[a("div",{staticClass:"collective__heading"},[t._v(t._s(e.name))]),a("div",{staticClass:"collective__description"},[t._v(t._s(e.mission))])])])}):[t._m(0)]],2),t.pagination?a("div",{staticClass:"pagination"},[a("div",{staticClass:"pagination__btns"},[t.backBtnVisible?a("div",{staticClass:"pagination__btn pagination__btn--back",on:{click:function(e){t.back()}}},[t._v("back")]):t._e(),t.pagination.current_page<t.pagination.total_pages?a("div",{staticClass:"pagination__btn pagination__btn--next",on:{click:function(e){t.next()}}},[t._v("next")]):t._e()]),a("div",{staticClass:"pagination__results"},[t._v(t._s(t.pagination.total_objects)+" results")])]):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collectives__empty"},[a("h2",[t._v("No results, try searching for something else.")])])}]}},8:function(t,e,a){"use strict";var i=a(2),n=a(37),s=a(29);i.a.use(n.a);e.a=new n.a.Store({strict:!1,state:{},modules:{auth:s.a}})},9:function(t,e,a){function i(t){a(31)}var n=a(34)(a(30),a(35),i,null,null);t.exports=n.exports}},[28]);
//# sourceMappingURL=index.1d08dbb7920fcaadbc2e.js.map