webpackJsonp([3],{"/B5i":function(t,s){},FP3a:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("mtWM"),e=i.n(a),n=i("GQaK"),r={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"header"},[s("router-link",{staticClass:"search",attrs:{to:"/search"}},[s("span",{staticClass:"text-search iconfont"},[this._v("")]),this._v(" "),s("input",{staticClass:"input-search",attrs:{type:"text",placeholder:"搜索装修新技能"}})])],1)])},staticRenderFns:[]},c={render:function(){var t=this.$createElement,s=this._self._c||t;return s("swiper",{staticClass:"swiper banner",attrs:{options:this.option}},[this._l(this.bannerInfo,function(t){return s("swiper-slide",{key:t.id},[s("div",{staticClass:"img-box"},[s("img",{staticClass:"img",attrs:{src:t.imgUrl,alt:"乐居时尚装修"}})])])}),this._v(" "),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)},staticRenderFns:[]},o={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"list-container"},[i("h2",{staticClass:"title"},[t._v("优秀设计")]),t._v(" "),i("div",{staticClass:"list"},t._l(t.listInfo,function(s){return i("router-link",{key:s.id,staticClass:"item-list",attrs:{to:"/detail/"+s.id,tag:"div"}},[i("div",{staticClass:"img-con"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.top_img,expression:"item.top_img"}],staticClass:"img"})]),t._v(" "),i("h3",{staticClass:"item-title"},[t._v(t._s(s.top_title))]),t._v(" "),i("div",{staticClass:"info"},[i("div",{staticClass:"userinfo"},[i("img",{staticClass:"img-user",attrs:{src:s.imgurl,alt:""}}),t._v(" "),i("span",{staticClass:"username"},[t._v(t._s(s.username))])]),t._v(" "),i("div",{staticClass:"houseinfo"},[i("span",{staticClass:"house"},[t._v(t._s(s.house_type))]),t._v(" "),i("span",[t._v(t._s(s.usable_area)+"平米")])])])])}))])},staticRenderFns:[]},l={name:"index",components:{indexHeader:i("VU/8")({name:"index-header"},r,!1,function(t){i("s7C/")},"data-v-88be0d12",null).exports,swiper:i("VU/8")({name:"index-swiper",props:["bannerInfo"],data:function(){return{option:{pagination:".swiper-pagination",autoplay:1e4,loop:!1}}}},c,!1,function(t){i("TXLc")},"data-v-ccefc65a",null).exports,list:i("VU/8")({name:"list",props:["listInfo"]},o,!1,function(t){i("/B5i")},"data-v-0097680c",null).exports,foot:i("tSVZ").a},data:function(){return{bannerInfo:[],listInfo:[]}},mounted:function(){var t=this;this.getData(),this.$nextTick(function(){t.scroll=new n.a(t.$refs.wrapper)})},methods:{getData:function(){e.a.get("/list/").then(this.handleGetDataSucc.bind(this)).catch(this.handleGetDataErr.bind(this))},handleGetDataSucc:function(t){t.data&&(t=t.data),t.ret?(this.bannerInfo=t.data.banner,this.listInfo=t.data.wellDesign):console.log("请求失败")},handleGetDataErr:function(){console.log("请求失败")}}},d={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{ref:"wrapper",staticClass:"contaier"},[s("div",{staticClass:"main-content"},[s("index-header"),this._v(" "),s("swiper",{attrs:{bannerInfo:this.bannerInfo}}),this._v(" "),s("div",{staticClass:"nav"},[s("router-link",{staticClass:"item-nav",attrs:{to:"/decorate",tag:"div"}},[s("img",{staticClass:"img-item",attrs:{src:"/static/img/decorate.png"}}),this._v(" "),s("div",{staticClass:"text-item",attrs:{tag:"div"}},[this._v("学装修")])]),this._v(" "),s("router-link",{staticClass:"item-nav",attrs:{to:"/design",tag:"div"}},[s("img",{staticClass:"img-item",attrs:{src:"/static/img/design.png"}}),this._v(" "),s("div",{staticClass:"text-item"},[this._v("找设计")])]),this._v(" "),s("router-link",{staticClass:"item-nav",attrs:{tag:"div",to:"/diary"}},[s("img",{staticClass:"img-item",attrs:{src:"/static/img/diray.png"}}),this._v(" "),s("div",{staticClass:"text-item"},[this._v("看日记")])]),this._v(" "),s("router-link",{staticClass:"item-nav",attrs:{tag:"div",to:"/questions"}},[s("img",{staticClass:"img-item",attrs:{src:"/static/img/question.png"}}),this._v(" "),s("div",{staticClass:"text-item"},[this._v("提问题")])])],1),this._v(" "),s("list",{attrs:{listInfo:this.listInfo}})],1),this._v(" "),s("foot",{staticClass:"footer"})],1)},staticRenderFns:[]},v=i("VU/8")(l,d,!1,function(t){i("IMOy")},"data-v-65ce3200",null);s.default=v.exports},IMOy:function(t,s){},TXLc:function(t,s){},"s7C/":function(t,s){}});
//# sourceMappingURL=3.655d7d8c1970a89b80c2.js.map