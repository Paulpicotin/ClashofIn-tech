(function(t){function n(n){for(var i,a,s=n[0],c=n[1],u=n[2],d=0,p=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(n);while(p.length)p.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],i=!0,s=1;s<e.length;s++){var c=e[s];0!==o[c]&&(i=!1)}i&&(r.splice(n--,1),t=a(a.s=e[0]))}return t}var i={},o={app:0},r=[];function a(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=i,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)a.d(e,i,function(n){return t[n]}.bind(null,i));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var u=0;u<s.length;u++)n(s[u]);var l=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var i=e("85ec"),o=e.n(i);o.a},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("h1",[t._v("CLASH OF INTECH")]),e("FormCOI",{attrs:{editMode:!1},on:{addinscription:t.addinscription}}),e("COITable",{attrs:{inscriptionCOI:t.inscriptionCOI},on:{editinscription:t.infoscoiinscriptionToEdit,deleteinscription:t.deleteinscription}}),e("FormCOI",{attrs:{inscriptiontoEdit:t.inscriptiontoEdit,editMode:!0},on:{editinscription:t.editinscription}})],1)},r=[],a=(e("99af"),e("5530")),s=e("2909"),c=(e("96cf"),e("1da1")),u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h2",[t._v(t._s(t.editMode?"Edit COIlist":"Add COIlist"))]),e("label",{attrs:{for:"COINameInput"}},[t._v("Name of the COIlist")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.COIName,expression:"COIName"}],attrs:{type:"text",id:"COINameInput"},domProps:{value:t.COIName},on:{input:function(n){n.target.composing||(t.COIName=n.target.value)}}}),e("label",{attrs:{for:"COITask"}},[t._v("task of the COIlist")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.CoiTask,expression:"CoiTask"}],attrs:{type:"text",id:"COITask"},domProps:{value:t.CoiTask},on:{input:function(n){n.target.composing||(t.CoiTask=n.target.value)}}}),e("button",{on:{click:t.submitForm}},[t._v(t._s(t.editMode?"EDIT":"INVITE"))])])},l=[],d={name:"FormCOI",data:function(){return{COIName:null,CoiTask:null}},props:{editMode:Boolean,COIlistToEdit:Object},created:function(){},updated:function(){},watch:{COIlistToEdit:function(t){this.COIName=t.fullName,this.COITask=t.task}},methods:{submitForm:function(){this.$emit(this.editMode?"editCOIlist":"inviteCOIlist",{id:this.COIlistToEdit?this.COIlistToEdit.id:void 0,fullName:this.COIName,task:this.COITask}),this.COIName=null,this.COITask=null}}},p=d,f=(e("6bfb"),e("2877")),O=Object(f["a"])(p,u,l,!1,null,"000b8ca0",null),m=O.exports,h=(e("d3b7"),"http://localhost:3001");function C(){return fetch("".concat(h,"/List")).then((function(t){return t.json()})).then((function(t){return t}))}function v(t){return fetch("".concat(h,"/List"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}var I={name:"App",components:{FormCOI:m},data:function(){return{inscriptionCOI:[],inscriptiontoEdit:null}},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,C();case 2:e=n.sent,t.inscriptionCOI=Object(s["a"])(e);case 4:case"end":return n.stop()}}),n)})))()},methods:{randomKey:function(){return Math.random()},addinscription:function(t){var n=this,e=t.fullName,i=t.tasks;v({fullName:e,tasks:i}).then((function(t){return t.json()})).then((function(t){n.inscriptionCOI=[].concat(Object(s["a"])(n.inscriptionCOI),[t])})).catch((function(t){console.log(t)}))},infosCOIinscriptionToEdit:function(t){this.COIinscriptionToEdit=Object(a["a"])({},t)}}},b=I,T=(e("034f"),Object(f["a"])(b,o,r,!1,null,null,null)),y=T.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(y)}}).$mount("#app")},"6bfb":function(t,n,e){"use strict";var i=e("cc13"),o=e.n(i);o.a},"85ec":function(t,n,e){},cc13:function(t,n,e){}});
//# sourceMappingURL=app.7170317e.js.map