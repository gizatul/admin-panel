(this.webpackJsonphero_admin_panel=this.webpackJsonphero_admin_panel||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(5),c=n.n(a),s=n(2),i=n(13),l=n(14),o=n(10),d=n.n(o),u=n(11),b=function(){return{request:function(){var e=Object(u.a)(d.a.mark((function e(t){var n,r,a,c,s,i=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"GET",r=i.length>2&&void 0!==i[2]?i[2]:null,a=i.length>3&&void 0!==i[3]?i[3]:{"Content-Type":"application/json"},e.prev=3,e.next=6,fetch(t,{method:n,body:r,headers:a});case 6:if((c=e.sent).ok){e.next=9;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(c.status));case 9:return e.next=11,c.json();case 11:return s=e.sent,e.abrupt("return",s);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}()}},f=n(3),h=Object(f.b)("heroes/fetchHeroes",(function(){return(0,b().request)("https://admin-panel-tr9g.vercel.app/heroes")})),j=Object(f.c)({name:"heroes",initialState:{heroes:[],heroesLoadingStatus:"idle"},reducers:{addHero:function(e,t){e.heroes.push(t.payload)},deleteItem:function(e,t){e.heroes=e.heroes.filter((function(e){return e.id!==t.payload}))}},extraReducers:function(e){e.addCase(h.pending,(function(e){e.heroesLoadingStatus="loading"})).addCase(h.fulfilled,(function(e,t){e.heroesLoadingStatus="idle",e.heroes=t.payload})).addCase(h.rejected,(function(e){e.heroesLoadingStatus="error"})).addDefaultCase((function(){}))}}),m=j.actions,g=j.reducer,p=(m.heroesFetching,m.heroesFetched,m.heroesFetchingError,m.addHero),O=m.deleteItem,x=n.p+"static/media/unknown_hero.27561cca.jpeg",v=n(1),N=function(e){var t,n=e.name,r=e.description,a=e.element,c=e.onDelete;switch(a){case"fire":t="bg-danger bg-gradient";break;case"water":t="bg-primary bg-gradient";break;case"wind":t="bg-success bg-gradient";break;case"earth":t="bg-secondary bg-gradient";break;default:t="bg-warning bg-gradient"}return Object(v.jsxs)("li",{className:"card flex-row mb-4 shadow-lg text-white ".concat(t),children:[Object(v.jsx)("img",{src:x,className:"img-fluid w-25 d-inline",alt:"unknown hero",style:{objectFit:"cover"}}),Object(v.jsxs)("div",{className:"card-body",children:[Object(v.jsx)("h3",{className:"card-title",children:n}),Object(v.jsx)("p",{className:"card-text",children:r})]}),Object(v.jsx)("span",{className:"position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light",children:Object(v.jsx)("button",{onClick:c,type:"button",className:"btn-close btn-close","aria-label":"Close"})})]})},y=function(){return Object(v.jsx)("div",{className:"spinner-border mx-auto mt-5",role:"status",children:Object(v.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},S=n(4),w=function(){var e=Object(S.a)((function(e){return e.filters.activeFilter}),(function(e){return e.heroes.heroes}),(function(e,t){return"all"===e?(console.log("render"),t):t.filter((function(t){return t.element===e}))})),t=Object(s.c)(e),n=Object(s.c)((function(e){return e.heroes})).heroesLoadingStatus,a=Object(s.b)(),c=b().request;Object(r.useEffect)((function(){a(h())}),[]);var o=Object(r.useCallback)((function(e){c("https://admin-panel-tr9g.vercel.app/heroes/".concat(e),"DELETE").then(a(O(e))).catch((function(e){return console.err(e)}))}),[]);if("loading"===n)return Object(v.jsx)(y,{});if("error"===n)return Object(v.jsx)("h5",{className:"text-center mt-5",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"});var d,u=0===(d=t).length?Object(v.jsx)("h5",{className:"text-center mt-5",children:"\u0413\u0435\u0440\u043e\u0435\u0432 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442"}):d.map((function(e){var t=e.id,n=Object(l.a)(e,["id"]);return Object(v.jsx)(N,Object(i.a)({onDelete:function(){return o(t)}},n),t)}));return Object(v.jsx)("ul",{children:u})},C=n(6),F=n(29),L=function(){var e=Object(r.useState)(""),t=Object(C.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),i=Object(C.a)(c,2),l=i[0],o=i[1],d=Object(r.useState)(""),u=Object(C.a)(d,2),f=u[0],h=u[1],j=Object(s.b)(),m=Object(s.c)((function(e){return e.filters})).filters,g=b().request;return Object(v.jsxs)("form",{className:"border p-4 shadow-lg rounded",onSubmit:function(e){e.preventDefault();var t={id:Object(F.a)(),name:n,description:l,element:f};g("https://admin-panel-tr9g.vercel.app//heroes","POST",JSON.stringify(t)).then(j(p(t))).catch((function(e){return console.err(e)})).finally((function(){a(""),o(""),h("")}))},children:[Object(v.jsxs)("div",{className:"mb-3",children:[Object(v.jsx)("label",{htmlFor:"name",className:"form-label fs-4",children:"\u0418\u043c\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u0433\u0435\u0440\u043e\u044f"}),Object(v.jsx)("input",{required:!0,type:"text",name:"name",className:"form-control",id:"name",placeholder:"\u041a\u0430\u043a \u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442?",value:n,onChange:function(e){return a(e.target.value)}})]}),Object(v.jsxs)("div",{className:"mb-3",children:[Object(v.jsx)("label",{htmlFor:"text",className:"form-label fs-4",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(v.jsx)("textarea",{required:!0,name:"description",className:"form-control",id:"text",placeholder:"\u0427\u0442\u043e \u044f \u0443\u043c\u0435\u044e?",style:{height:"130px"},value:l,onChange:function(e){return o(e.target.value)}})]}),Object(v.jsxs)("div",{className:"mb-3",children:[Object(v.jsx)("label",{htmlFor:"element",className:"form-label",children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0433\u0435\u0440\u043e\u044f"}),Object(v.jsxs)("select",{required:!0,value:f,className:"form-select",id:"element",name:"element",onChange:function(e){return h(e.target.value)},children:[Object(v.jsx)("option",{children:"\u042f \u0432\u043b\u0430\u0434\u0435\u044e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c..."}),function(e){if(e&&e.length>0)return e.map((function(e){var t=e.name,n=e.label;if("all"!==t)return Object(v.jsx)("option",{value:t,children:n},t)}))}(m)]})]}),Object(v.jsx)("button",{type:"submit",className:"btn btn-primary",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})},k=Object(f.b)("filters/fetchFilters",(function(){return(0,b().request)("https://admin-panel-tr9g.vercel.app//filters")})),E=Object(f.c)({name:"filters",initialState:{filters:[],filtersLoadingStatus:"idle",activeFilter:"all"},reducers:{filtersFetching:function(e){e.filtersLoadingStatus="loading"},filtersFetchingError:function(e){e.filtersLoadingStatus="error"},filtersActiveChanged:function(e,t){e.activeFilter=t.payload},filtersFetched:function(e,t){e.filtersLoadingStatus="idle",e.filters=t.payload}},extraReducers:function(e){e.addCase(k.pending,(function(e){e.filtersLoadingStatus="loading"})).addCase(k.fulfilled,(function(e,t){e.filtersLoadingStatus="idle",e.filters=t.payload})).addCase(k.rejected,(function(e){e.filtersLoadingStatus="error"}))}}),q=E.actions,_=E.reducer,D=(q.filtersFetched,q.filtersFetchingError,q.filtersFetching,q.filtersActiveChanged),T=n(12),H=n.n(T),I=function(){var e=Object(s.c)((function(e){return e.filters})),t=e.filters,n=e.filtersLoadingStatus,a=e.activeFilter,c=Object(s.b)();if(Object(r.useEffect)((function(){c(k())}),[]),"error"===n)return Object(v.jsx)("div",{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0444\u0438\u043b\u044c\u0442\u0440\u0430"});if("loading"===n)return Object(v.jsx)("div",{children:"\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430"});var i,l=0===(i=t).length?Object(v.jsx)("h5",{className:"text-center mt-5",children:"\u0424\u0438\u043b\u044c\u0442\u0440\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"}):i.map((function(e){var t=e.name,n=e.className,r=e.label,s=H()("btn",n,{active:t===a});return Object(v.jsx)("button",{className:s,id:t,onClick:function(){return c(D(t))},children:r},t)}));return Object(v.jsx)("div",{className:"card shadow-lg mt-4",children:Object(v.jsxs)("div",{className:"card-body",children:[Object(v.jsx)("p",{className:"card-text",children:"\u041e\u0442\u0444\u0438\u043b\u044c\u0442\u0440\u0443\u0439\u0442\u0435 \u0433\u0435\u0440\u043e\u0435\u0432 \u043f\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c"}),Object(v.jsx)("div",{className:"btn-group",children:l})]})})},J=(n(25),function(){return Object(v.jsx)("main",{className:"app",children:Object(v.jsxs)("div",{className:"content",children:[Object(v.jsx)(w,{}),Object(v.jsxs)("div",{className:"content__interactive",children:[Object(v.jsx)(L,{}),Object(v.jsx)(I,{})]})]})})}),A=function(e){return function(e){return function(t){return e("string"===typeof t?{type:t}:t)}}},R=Object(f.a)({reducer:{heroes:g,filters:_},devTools:!1,middleware:function(e){return e().concat(A)}});n(26);c.a.render(Object(v.jsx)(s.a,{store:R,children:Object(v.jsx)(J,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.2fcd995f.chunk.js.map