webpackJsonp([17],{"I9+6":function(t,e){},pSBS:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("mvHQ"),i=a.n(s),r=a("mtWM"),n=a.n(r),o={name:"personalpage",components:{toast:a("8DN1").a},data:function(){return{userInfo:"",headImgShow:!0,birthday:"",imageUrl:"",format:"",file:"",show:!0,radio:"男",username:"",address:""}},methods:{handleAvatarSuccess:function(t,e){this.imageUrl=URL.createObjectURL(e.raw),this.file=e},beforeAvatarUpload:function(t){var e="image/jpeg"===t.type,a=t.size/1024/1024<2;return e||this.$message.error("上传头像图片只能是 JPG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),e&&a},handleImgClick:function(){this.show=!1},handleSubmitClick:function(){var t=new FormData;try{var e=this.$refs.photo.files[0];"image/jpeg"!==e.type?this.$refs.toast.toastShow("暂不支持此文件类型"):t.append("icon",e)}catch(t){}t.append("nickname",this.username),t.append("sex",this.radio),t.append("address",this.address),t.append("birthday",this.birthday),t.append("id",this.userInfo.id),n.a.post("/user/add/information/",t).then(this.handleUpdateSucc.bind(this)).catch(this.handleUpdateErr.bind(this))},handleUpdateSucc:function(t){"0"===t.data.data.state||0===t.data.data.state?this.$refs.toast.toastShow("用户名不能重复"):(window.localStorage.userInfo=i()(t.data.data),this.$router.push("/my"))},handleUpdateErr:function(){console.log("返回信息错误")}},created:function(){try{this.userInfo=JSON.parse(window.localStorage.userInfo),this.username=this.userInfo.username,this.address=this.userInfo.address,this.birthday=this.userInfo.birthday,this.radio=this.userInfo.sex}catch(t){}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"header border-bottom"},[a("router-link",{staticClass:"back iconfont",attrs:{to:"/my"}},[t._v("")]),t._v("\n    编辑个人主页\n  ")],1),t._v(" "),a("ul",{staticClass:"list"},[a("li",{staticClass:"item item-first border-bottom",staticStyle:{height:"1.2rem"}},[a("span",{staticClass:"icon iconfont"},[t._v("")]),t._v("\n      头像\n      "),t.show?a("img",{staticClass:"headImg",attrs:{src:t.userInfo.icon},on:{click:t.handleImgClick}}):t._e(),t._v(" "),t.show?t._e():a("input",{ref:"photo",staticClass:"photo",attrs:{type:"file"}}),t._v(" "),t.imageUrl?a("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),t._v(" "),a("li",{staticClass:"item item-first border-bottom"},[a("span",{staticClass:"icon iconfont"},[t._v("")]),t._v("\n      昵称\n      "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"text-item",attrs:{type:"text",placeholder:t.userInfo.username},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),a("li",{staticClass:"item item-first border-bottom"},[a("span",{staticClass:"icon iconfont"},[t._v("")]),t._v("\n      性别\n      "),a("div",{staticClass:"sex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.radio,expression:"radio"}],attrs:{type:"radio",value:"true",name:"sex",checked:""},domProps:{checked:t._q(t.radio,"true")},on:{change:function(e){t.radio="true"}}}),t._v("男\n        "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.radio,expression:"radio"}],staticStyle:{"margin-left":".2rem"},attrs:{type:"radio",value:"false",name:"sex"},domProps:{checked:t._q(t.radio,"false")},on:{change:function(e){t.radio="false"}}}),t._v("女\n      ")])]),t._v(" "),a("li",{staticClass:"item item-first border-bottom"},[a("span",{staticClass:"icon iconfont"},[t._v("")]),t._v("\n      位置\n      "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"text-item",attrs:{type:"text",placeholder:t.userInfo.address},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})]),t._v(" "),a("li",{staticClass:"item item-first border-bottom"},[a("span",{staticClass:"icon iconfont"},[t._v("")]),t._v("\n      生日\n      "),a("el-date-picker",{staticStyle:{float:"right"},attrs:{type:"date",placeholder:"选择日期",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:t.birthday,callback:function(e){t.birthday=e},expression:"birthday"}})],1),t._v(" "),a("li",{staticClass:"btn-item",on:{click:t.handleSubmitClick}},[t._v("提交")])]),t._v(" "),a("toast",{ref:"toast"})],1)},staticRenderFns:[]},c=a("VU/8")(o,d,!1,function(t){a("I9+6")},"data-v-0b4cad2d",null);e.default=c.exports}});
//# sourceMappingURL=17.a41b4dbbdd10320050cd.js.map