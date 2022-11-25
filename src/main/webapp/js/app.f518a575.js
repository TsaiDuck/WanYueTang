(function(){"use strict";var t={8762:function(t,s,e){var a=e(6369),o=e(8499),r=e.n(o),i=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"nav"},[s("Navigation")],1),s("div",{staticClass:"body"},[s("router-view")],1),s("div",{staticClass:"footer"},[s("Footer")],1)])},n=[],l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"nav"},[s("div",{staticClass:"nav-img"},[s("LogoYellowMoon")],1),s("div",{staticClass:"nav-body"},[s("ul",{ref:"nav_body",staticClass:"nav-body-ul"},[s("li",[s("a",{class:{active:"/home"===t.hashPath},attrs:{href:"#/home"}},[t._v("首页")])]),s("li",[s("a",{class:{active:"/fever"===t.hashPath},attrs:{href:"#/fever"}},[t._v("发热科")])]),s("li",[s("a",{class:{active:"/digestion"===t.hashPath},attrs:{href:"#/digestion"}},[t._v("消化内科")])]),s("li",[s("a",{class:{active:"/OGDepartment"===t.hashPath},attrs:{href:"#/OGDepartment"}},[t._v("妇产科")])]),s("li",[s("a",{class:{active:"/andrology"===t.hashPath},attrs:{href:"#/andrology"}},[t._v("乙肝")])])])]),t._m(0),s("div",{staticClass:"nav-user"},[t.user.isLogin?s("div",{staticClass:"nav-user-isLogin",on:{mouseenter:t.showUserInfo,mouseleave:t.hideUserInfo}},[s("b",{staticClass:"el-icon-user",attrs:{title:t.user.userName}}),t.showFlag?s("div",{staticClass:"nav-user-info"},[s("ul",[s("li",{staticClass:"nav-user-info-head"},[t._v("用户："+t._s(t.user.userName))]),s("li",{on:{click:function(s){return t.linkTo("/userHome")}}},[t._v("个人主页")]),s("li",{on:{click:function(s){return t.linkTo("/userCart")}}},[t._v("购物车")]),s("li",{on:{click:t.userLogout}},[t._v("退出登录")])])]):t._e()]):s("div",{staticClass:"nav-user-unLogin"},[s("a",{staticClass:"nav-user-login",attrs:{href:"#/login"}},[t._v("登录")]),t._v("  "),s("b",{staticClass:"el-icon-user-solid"},[t._v("  ")]),s("a",{staticClass:"nav-user-register",attrs:{href:"#/register"}},[t._v("注册")])])])])},c=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"nav-select"},[s("input",{staticClass:"nav-select-search",attrs:{type:"text",name:"",id:""}}),s("b",{staticClass:"el-icon-search nav-select-icon"})])}],u=(e(7658),function(){var t=this;t._self._c;return t._m(0)}),d=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"nav-logo"},[s("div",{staticClass:"yellow-moon"},[s("a",{attrs:{href:"#/home"}},[s("img",{attrs:{src:e(5361),width:"100%",alt:""}})])])])}],m={},g=m,v=e(3736),f=(0,v.Z)(g,u,d,!1,null,"c4e244ea",null),h=f.exports,p=e(3822),_={name:"Navigation",components:{LogoYellowMoon:h},data(){return{hashPath:this.$route.path,showFlag:!1}},watch:{$route:{handler:function(t){this.hashPath=t.path}}},computed:{...(0,p.rn)(["user"])},methods:{...(0,p.OI)(["logout"]),showUserInfo(){this.showFlag=!0},hideUserInfo(){this.showFlag=!1},linkTo(t){this.$router.push(t)},userLogout(){this.showFlag=!1,this.logout()}}},C=_,b=(0,v.Z)(C,l,c,!1,null,"c8c78d5c",null),x=b.exports,k=function(){var t=this;t._self._c;return t._m(0)},y=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"footer"},[s("hr"),s("div",{staticClass:"footer-top"},[s("a",{attrs:{href:"#/home"}},[t._v("首页")]),s("span",{staticClass:"span"},[t._v("|")]),s("a",{attrs:{href:"javascript:;"}},[t._v("关于我们")]),s("span",{staticClass:"span"},[t._v("|")]),t._v(" "),s("a",{attrs:{href:"javascript:;"}},[t._v("法律声明")]),s("span",{staticClass:"span"},[t._v("|")]),s("a",{attrs:{href:"javascript:;"}},[t._v("隐私政策")])]),s("div",{staticClass:"footer-bottom"},[s("span",[t._v("京公网安备 114514号")]),s("span",{staticClass:"span"},[t._v("|")]),s("span",[t._v("京ICP114514号")]),s("span",{staticClass:"span"},[t._v("|")]),s("span",[t._v("互联网药品信息服务资格证编号(京)-经营性-114514")]),s("br"),s("span",[t._v("互联网出版许可证编号新出网证(京)字114514号")]),s("span",{staticClass:"span"},[t._v("|")]),s("span",[t._v("出版物经营许可证")]),s("span",{staticClass:"span"},[t._v("|")]),s("span",[t._v("网络文化经营许可证京网文114514号")]),s("span",{staticClass:"span"},[t._v("|")]),s("span",[t._v("违法和不良信息举报电话：114514")]),s("br"),s("span",[t._v("消费者维权热线：114514")]),s("span",{staticClass:"span"},[t._v("|")]),s("span",[t._v("经营证照")]),s("span",{staticClass:"span"},[t._v("|")]),s("span",[t._v("(京)网械平台备字第114514号")]),s("span",{staticClass:"span"},[t._v("|")]),s("span",[t._v("营业执照")]),s("span",{staticClass:"span"},[t._v("|")]),t._v(" "),s("span",[t._v("增值电信业务经营许可证")]),s("br"),s("span",[t._v("信息系统安全等级保护备案号：114514")]),s("span",{staticClass:"span"},[t._v("|")]),s("span",[t._v("北京市网络食品交易第三方平台提供者备案：京网食备114514号")]),s("br"),s("span",[t._v("Copyright© 2022 万月堂版权所有")])])])}],N={},S=N,w=(0,v.Z)(S,k,y,!1,null,"1a8e3f68",null),I=w.exports,P={components:{Navigation:x,Footer:I}},F=P,L=(0,v.Z)(F,i,n,!1,null,null,null),E=L.exports,A=e(2631),G=function(){var t=this,s=t._self._c;return s("div",{staticClass:"body-home"},[s("div",{staticClass:"body-home-slideshow"},[s("Slideshow")],1),s("div",{staticClass:"body-home-content"},[s("div",{staticClass:"body-home-content-dailyGoods"},[t._m(0),s("div",{staticClass:"body-home-content-dailyGoods-goods"},[s("DailyGoods",{attrs:{goodsImg:e(3447),goodsName:"999感冒灵",goodsEffect:"风寒感冒",goodsPrice:20}})],1)]),s("div",{staticClass:"body-home-content-homeStock"},[t._m(1),s("div",{staticClass:"body-home-content-homeStock-goods"},[s("Homestock",{attrs:{goodsId:1,goodsImg:e(3447),goodsName:"999感冒灵",goodsEffect:"风寒感冒",goodsPrice:20}})],1)])])])},Z=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"body-home-content-title"},[s("span",{staticClass:"el-icon-present"}),t._v("  "),s("span",[t._v("每日推荐")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"body-home-content-title"},[s("span",{staticClass:"el-icon-first-aid-kit"}),t._v("  "),s("span",[t._v("家中常备")])])}],$=function(){var t=this,s=t._self._c;return s("div",{staticClass:"showImg"},[t._l(t.imgArr,(function(e){return s("img",{directives:[{name:"show",rawName:"v-show",value:e.id===t.currentIndex,expression:"item.id === currentIndex"}],key:e.id,attrs:{src:e.link,alt:""},on:{mouseover:function(s){return t.changeInterval(!0)},mouseleave:function(s){return t.changeInterval(!1)},click:function(s){return t.into(e.url)}}})})),s("div",{staticClass:"iconDiv icon-left",on:{click:function(s){return t.clickIcon("left")},mouseover:function(s){return t.changeInterval(!0)},mouseleave:function(s){return t.changeInterval(!1)}}},[s("i",{staticClass:"el-icon-arrow-left"})]),s("div",{staticClass:"iconDiv icon-right",on:{click:function(s){return t.clickIcon("right")},mouseover:function(s){return t.changeInterval(!0)},mouseleave:function(s){return t.changeInterval(!1)}}},[s("i",{staticClass:"el-icon-arrow-right"})]),s("div",{staticClass:"banner-circle"},[s("ul",t._l(t.imgArr,(function(e){return s("li",{key:e.id,class:e.id===t.currentIndex?"active":"",on:{mouseover:function(s){return t.changeInterval(!0)},mouseleave:function(s){return t.changeInterval(!1)},click:function(s){return t.changeImg(e.id)}}})})),0)])],2)},O=[],j={data(){return{currentIndex:0,timer:null,imgArr:[{id:0,link:e(983),url:"/register"},{id:1,link:e(935),url:"/login"},{id:2,link:e(983),url:"/home"},{id:3,link:e(935),url:"/home"}]}},methods:{into(t){this.$router.push(t)},startInterval(){clearInterval(this.timer),this.timer=setInterval((()=>{this.currentIndex++,this.currentIndex>this.imgArr.length-1&&(this.currentIndex=0)}),3e3)},clickIcon(t){"right"===t?(this.currentIndex++,this.currentIndex===this.imgArr.length&&(this.currentIndex=0)):(0===this.currentIndex&&(this.currentIndex=this.imgArr.length),this.currentIndex--)},changeImg(t){this.currentIndex=t},changeInterval(t){t?clearInterval(this.timer):this.startInterval()}},mounted(){this.startInterval()}},D=j,H=(0,v.Z)(D,$,O,!1,null,"c0f1bdea",null),T=H.exports,M=function(){var t=this,s=t._self._c;return s("div",{staticClass:"dailyGoods"},[s("div",{staticClass:"dailyGoods-img"},[s("img",{attrs:{src:t.goodsImg,alt:""}})]),s("div",{staticClass:"dailyGoods-text"},[s("span",{staticClass:"dailyGoods-text-goodsName",attrs:{title:t.goodsName}},[t._v(t._s(t.goodsName))]),s("span",{staticClass:"dailyGoods-text-goodsEffect",attrs:{title:t.goodsName}},[t._v(t._s(t.goodsEffect))]),s("div",{staticClass:"dailyGoods-text-Price"},[s("span",{staticClass:"dailyGoods-text-goodsNewPrice"},[t._v("￥"+t._s(.8*t.goodsPrice))]),s("span",{staticClass:"dailyGoods-text-goodsOldPrice"},[t._v("￥"+t._s(t.goodsPrice))])])])])},U=[],B={props:{goodsName:{default:"",type:String},goodsEffect:{default:"",type:String},goodsPrice:{default:0,type:Number},goodsImg:{default:"",type:String}}},q=B,z=(0,v.Z)(q,M,U,!1,null,"4cb1a6c5",null),Y=z.exports,R=function(){var t=this,s=t._self._c;return s("div",{staticClass:"homeStock"},[s("ul",{staticClass:"homeStock-list"},[s("li",{staticClass:"homeStock-item"},[s("img",{ref:"",attrs:{src:t.goodsImg}}),s("div",{staticClass:"homeStock-text"},[s("span",{staticClass:"homeStock-text-goodsName",attrs:{title:t.goodsName}},[t._v(t._s(t.goodsName))]),s("span",{staticClass:"homeStock-text-goodsEffect",attrs:{title:t.goodsName}},[t._v(t._s(t.goodsEffect))]),s("span",{staticClass:"homeStock-text-goodsPrice"},[t._v("￥"+t._s(t.goodsPrice))])])]),s("li",{staticClass:"homeStock-item"},[s("img",{ref:"",attrs:{src:t.goodsImg}}),s("div",{staticClass:"homeStock-text"},[s("span",{staticClass:"homeStock-text-goodsName",attrs:{title:t.goodsName}},[t._v(t._s(t.goodsName))]),s("span",{staticClass:"homeStock-text-goodsEffect",attrs:{title:t.goodsName}},[t._v(t._s(t.goodsEffect))]),s("span",{staticClass:"homeStock-text-goodsPrice"},[t._v("￥"+t._s(t.goodsPrice))])])]),s("li",{staticClass:"homeStock-item"},[s("img",{ref:"",attrs:{src:t.goodsImg}}),s("div",{staticClass:"homeStock-text"},[s("span",{staticClass:"homeStock-text-goodsName",attrs:{title:t.goodsName}},[t._v(t._s(t.goodsName))]),s("span",{staticClass:"homeStock-text-goodsEffect",attrs:{title:t.goodsName}},[t._v(t._s(t.goodsEffect))]),s("span",{staticClass:"homeStock-text-goodsPrice"},[t._v("￥"+t._s(t.goodsPrice))])])]),s("li",{staticClass:"homeStock-item"},[s("img",{ref:"",attrs:{src:t.goodsImg}}),s("div",{staticClass:"homeStock-text"},[s("span",{staticClass:"homeStock-text-goodsName",attrs:{title:t.goodsName}},[t._v(t._s(t.goodsName))]),s("span",{staticClass:"homeStock-text-goodsEffect",attrs:{title:t.goodsName}},[t._v(t._s(t.goodsEffect))]),s("span",{staticClass:"homeStock-text-goodsPrice"},[t._v("￥"+t._s(t.goodsPrice))])])]),s("li",{staticClass:"homeStock-item"},[s("img",{ref:"",attrs:{src:t.goodsImg}}),s("div",{staticClass:"homeStock-text"},[s("span",{staticClass:"homeStock-text-goodsName",attrs:{title:t.goodsName}},[t._v(t._s(t.goodsName))]),s("span",{staticClass:"homeStock-text-goodsEffect",attrs:{title:t.goodsName}},[t._v(t._s(t.goodsEffect))]),s("span",{staticClass:"homeStock-text-goodsPrice"},[t._v("￥"+t._s(t.goodsPrice))])])]),s("li",{staticClass:"homeStock-item"},[s("img",{ref:"",attrs:{src:t.goodsImg}}),s("div",{staticClass:"homeStock-text"},[s("span",{staticClass:"homeStock-text-goodsName",attrs:{title:t.goodsName}},[t._v(t._s(t.goodsName))]),s("span",{staticClass:"homeStock-text-goodsEffect",attrs:{title:t.goodsName}},[t._v(t._s(t.goodsEffect))]),s("span",{staticClass:"homeStock-text-goodsPrice"},[t._v("￥"+t._s(t.goodsPrice))])])]),s("li",{staticClass:"homeStock-item"},[s("img",{ref:"",attrs:{src:t.goodsImg}}),s("div",{staticClass:"homeStock-text"},[s("span",{staticClass:"homeStock-text-goodsName",attrs:{title:t.goodsName}},[t._v(t._s(t.goodsName))]),s("span",{staticClass:"homeStock-text-goodsEffect",attrs:{title:t.goodsName}},[t._v(t._s(t.goodsEffect))]),s("span",{staticClass:"homeStock-text-goodsPrice"},[t._v("￥"+t._s(t.goodsPrice))])])])]),t._v(" ======= "),s("ul",{staticClass:"homeStock-list"},t._l(t.list,(function(e){return s("li",{key:e.goodId,staticClass:"homeStock-item",on:{click:function(s){return t.gotoDetails(e.goodId)}}},[s("img",{attrs:{src:t.goodsImg,alt:""}}),s("div",{staticClass:"homeStock-text"},[s("span",{staticClass:"homeStock-text-goodsName",attrs:{title:t.goodsName}},[t._v(t._s(t.goodsName))]),s("span",{staticClass:"homeStock-text-goodsEffect",attrs:{title:t.goodsName}},[t._v(t._s(t.goodsEffect))]),s("span",{staticClass:"homeStock-text-goodsPrice"},[t._v("￥"+t._s(t.goodsPrice))])])])})),0)])},J=[],K={props:{goodsId:{default:"",type:Number},goodsName:{default:"",type:String},goodsEffect:{default:"",type:String},goodsPrice:{default:0,type:Number},goodsImg:{default:"",type:String}},data(){return{list:[{goodId:this.goodsId,goodName:this.goodsName}]}},methods:{gotoDetails(t){this.$router.push("/goodsDetails/"+t)}}},Q=K,V=(0,v.Z)(Q,R,J,!1,null,"77352668",null),W=V.exports,X={components:{Slideshow:T,DailyGoods:Y,Homestock:W}},tt=X,st=(0,v.Z)(tt,G,Z,!1,null,"658d43a2",null),et=st.exports,at=function(){var t=this,s=t._self._c;return s("div",{staticClass:"body-login"},[t._m(0),s("div",{staticClass:"body-login-main"},[t._m(1),s("div",{staticClass:"body-login-main-form"},[s("el-form",{attrs:{"label-position":"left","label-width":"80px",model:t.formLabelAlign}},[s("el-form-item",{attrs:{label:"用户名"}},[s("el-input",{model:{value:t.formLabelAlign.userName,callback:function(s){t.$set(t.formLabelAlign,"userName",s)},expression:"formLabelAlign.userName"}})],1),s("el-form-item",{attrs:{label:"密码"}},[s("el-input",{attrs:{type:"password"},model:{value:t.formLabelAlign.userPassword,callback:function(s){t.$set(t.formLabelAlign,"userPassword",s)},expression:"formLabelAlign.userPassword"}})],1),s("center",[s("el-button",{staticStyle:{width:"125px"},on:{click:t.doLogin}},[t._v("登录")])],1)],1)],1),s("div")])])},ot=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"body-login-logo"},[s("img",{attrs:{src:e(5361),height:"100%",alt:""}}),s("span",[t._v("网上药店登录系统")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"body-login-main-img"},[s("img",{attrs:{src:e(3447),alt:""}})])}],rt={data(){return{labelPosition:"right",formLabelAlign:{userName:"",userPassword:""}}},methods:{...(0,p.OI)(["login"]),async doLogin(){if(""===this.formLabelAlign.userName||""===this.formLabelAlign.userPassword)return alert("请输入用户名和密码");this.login({userName:"Ding"}),this.$http.get("/api/doLogin",{username:this.userName,userPassword:this.userPassword}).then((t=>{console.log(t)})).catch((t=>{console.log(t)}))}},computed:{...(0,p.rn)(["user"])}},it=rt,nt=(0,v.Z)(it,at,ot,!1,null,"d7fd0fbe",null),lt=nt.exports,ct=function(){var t=this,s=t._self._c;return s("div",{staticClass:"body-login"},[t._m(0),s("div",{staticClass:"body-login-main"},[t._m(1),s("div",{staticClass:"body-login-main-form"},[s("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"用户名",prop:"user_name"}},[s("el-input",{model:{value:t.ruleForm.user_name,callback:function(s){t.$set(t.ruleForm,"user_name",s)},expression:"ruleForm.user_name"}})],1),s("el-form-item",{attrs:{label:"密码",prop:"user_password"}},[s("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.ruleForm.user_password,callback:function(s){t.$set(t.ruleForm,"user_password",s)},expression:"ruleForm.user_password"}})],1),s("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[s("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.ruleForm.checkPass,callback:function(s){t.$set(t.ruleForm,"checkPass",s)},expression:"ruleForm.checkPass"}})],1),s("el-form-item",{attrs:{label:"手机号",prop:"user_phone"}},[s("el-input",{model:{value:t.ruleForm.user_phone,callback:function(s){t.$set(t.ruleForm,"user_phone",t._n(s))},expression:"ruleForm.user_phone"}})],1),s("el-form-item",{attrs:{label:"性别",prop:"user_gender"}},[s("el-radio-group",{model:{value:t.ruleForm.user_gender,callback:function(s){t.$set(t.ruleForm,"user_gender",s)},expression:"ruleForm.user_gender"}},[s("el-radio",{attrs:{label:"男"}}),s("el-radio",{attrs:{label:"女"}})],1)],1),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(s){return t.submitForm("ruleForm")}}},[t._v("立即注册")]),s("el-button",{on:{click:function(s){return t.resetForm("ruleForm")}}},[t._v("重置")])],1)],1)],1),s("dir")],1)])},ut=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"body-login-logo"},[s("img",{attrs:{src:e(5361),height:"100%",alt:""}}),s("span",[t._v("网上药店注册系统")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"body-login-main-img"},[s("img",{attrs:{src:e(3447),alt:""}})])}],dt={data(){var t=(t,s,e)=>{""===s?e(new Error("请输入密码")):(""!==this.ruleForm.checkPass&&this.$refs.ruleForm.validateField("checkPass"),e())},s=(t,s,e)=>{""===s?e(new Error("请再次输入密码")):s!==this.ruleForm.user_password?e(new Error("两次输入密码不一致!")):e()},e=(t,s,e)=>{if(""===s)e(new Error("请输入手机号"));else{var a=/^1[34578]\d{9}$/;a.test(this.ruleForm.user_phone)||e(new Error("请输入正确的手机号！")),e()}};return{ruleForm:{user_name:"",user_password:"",checkPass:"",user_gender:"",user_phone:""},rules:{user_name:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:4,max:12,message:"长度在 3 到 12 个字符",trigger:"blur"}],user_password:[{validator:t,trigger:"blur"}],checkPass:[{validator:s,trigger:"blur"}],user_gender:[{required:!0,message:"请选择性别",trigger:"blur"}],user_phone:[{validator:e,trigger:"blur"}]}}},methods:{submitForm(t){this.$refs[t].validate((t=>{if(!t)return console.log("error submit!!"),!1;alert("submit!"),console.log(this.ruleForm)}))},resetForm(t){this.$refs[t].resetFields()}}},mt=dt,gt=(0,v.Z)(mt,ct,ut,!1,null,"0c32ae56",null),vt=gt.exports,ft=function(){var t=this,s=t._self._c;return s("div",{staticClass:"goodsDetails"},[s("el-backtop",{staticStyle:{height:"30px",width:"30px"}}),t._m(0),s("div",{staticClass:"right"},[s("h1",{staticClass:"title"},[t._v("健胃消食片")]),s("hr",{staticStyle:{border:"1px #e5e5e5 dashed"}}),s("div",{staticClass:"info"},[s("table",[t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),s("tr",[t._m(7),s("td",{staticClass:"td2"},[s("el-button",{staticStyle:{width:"30px",height:"30px","font-size":"16px","line-height":"30px"},on:{click:t.sub}},[s("i",{staticClass:"el-icon-minus"})]),s("input",{directives:[{name:"model",rawName:"v-model:value",value:t.count,expression:"count",arg:"value"}],attrs:{type:"text"},domProps:{value:t.count},on:{blur:t.judge,input:function(s){s.target.composing||(t.count=s.target.value)}}}),s("el-button",{staticStyle:{width:"30px",height:"30px","font-size":"16px","line-height":"30px"},on:{click:t.add}},[s("i",{staticClass:"el-icon-plus"})])],1)])])]),s("div",{staticClass:"button"},[s("el-button",{staticClass:"el-button2",attrs:{type:"danger"}},[t._v("购买")]),s("el-button",{staticClass:"el-button2",attrs:{type:"primary"}},[t._v("加入购物车")])],1)]),t._m(8)],1)},ht=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"left"},[s("img",{attrs:{src:e(5428),alt:""}}),s("span",{staticClass:"imgtip"},[t._v("温馨提醒：商品包装因厂家更换频繁，如有不符请以实物为准。")])])},function(){var t=this,s=t._self._c;return s("tr",[s("td",[t._v("价"),s("em"),t._v("格")]),s("td",{staticClass:"td1"},[t._v("￥20.00")])])},function(){var t=this,s=t._self._c;return s("tr",[s("td",[t._v("通用名称")]),s("td",{staticClass:"td2"},[t._v("健胃消食片")])])},function(){var t=this,s=t._self._c;return s("tr",[s("td",[t._v("包装规格")]),s("td",{staticClass:"td2"},[t._v("0.8gx8片x4板/盒")])])},function(){var t=this,s=t._self._c;return s("tr",[s("td",[t._v("剂"),s("em"),t._v("型")]),s("td",{staticClass:"td2"},[t._v("薄膜衣片剂")])])},function(){var t=this,s=t._self._c;return s("tr",[s("td",[t._v("有"),s("em",{staticClass:"em2"}),t._v("效"),s("em",{staticClass:"em2"}),t._v("期")]),s("td",{staticClass:"td2"},[t._v("24个月")])])},function(){var t=this,s=t._self._c;return s("tr",[s("td",[t._v("适"),s("em",{staticClass:"em2"}),t._v("应"),s("em",{staticClass:"em2"}),t._v("症")]),s("td",{staticClass:"td2"},[t._v("健胃消食。用于脾胃虚弱所致的食积，症见不思饮食、嗳腐酸臭、脘腹胀满；消化不良见上述证候者。")])])},function(){var t=this,s=t._self._c;return s("td",[t._v("数"),s("em"),t._v("量")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"bottom"},[s("h1",[t._v("药品说明书")]),s("hr",{staticStyle:{border:"1px #eeeeee solid",margin:"10px 0"}}),s("div",{staticClass:"book"},[s("table",{staticClass:"book-table"},[s("tr",[s("td",{staticClass:"td1"},[t._v("药品名称：")]),s("td",{staticClass:"td2"},[t._v("本品主要成份为：枸橼酸西地那非。"),s("br"),t._v("其化学名称为：1-{4-乙氧基-3-[5-(6,7-二氢-1-甲基-7-氧代-3-丙基-1H-吡唑并[4,3D]嘧啶)]苯磺酰}-4-甲基哌嗪枸橼酸盐。 分子式：C22H30N6O4S·C6H8O7 分子量：666.7")])]),s("tr",[s("td",{staticClass:"td1"},[t._v("剂型：")]),s("td",{staticClass:"td2"},[t._v("1")])]),s("tr",[s("td",{staticClass:"td1"},[t._v("规格：")]),s("td",{staticClass:"td2"},[t._v("1")])]),s("tr",[s("td",{staticClass:"td1"},[t._v("用法用量：")]),s("td",{staticClass:"td2"},[t._v("1")])]),s("tr",[s("td",{staticClass:"td1"},[t._v("功能主治：")]),s("td",{staticClass:"td2"},[t._v("1")])]),s("tr",[s("td",{staticClass:"td1"},[t._v("禁忌：")]),s("td",{staticClass:"td2"},[t._v("1")])]),s("tr",[s("td",{staticClass:"td1"},[t._v("有效期：")]),s("td",{staticClass:"td2"},[t._v("1")])])])])])}],pt={name:"GoodsDetails",props:{goodsName:{default:"",type:String},goodsEffect:{default:"",type:String},goodsPrice:{default:0,type:Number},goodsImg:{default:"",type:String},goodsNum:{default:10,type:Number}},data(){return{count:1,goodNum:this.goodsNum,tableData:[{adress:"1234"}]}},methods:{judge(){(""==this.count||this.count<=0||typeof this.count!=Number)&&(this.count=1),this.count>=this.goodNum&&(this.count=this.goodNum)},add(){this.count<this.goodNum&&(this.count+=1)},sub(){this.count>1&&(this.count-=1)}}},_t=pt,Ct=(0,v.Z)(_t,ft,ht,!1,null,"0d99f0a6",null),bt=Ct.exports,xt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"userHome"},[s("div",{staticClass:"userHome-sideBar"},[t._m(0),s("span",[t._v(t._s(t.user.userName))]),s("div",{staticClass:"userHome-sideBar-list"},[s("ul",[s("li",{on:{click:function(s){return t.linkTo("/userHome/userInfo")}}},[t._v("我的信息")]),s("li",[t._v("我的购物车")]),s("li",[t._v("我的订单")])])])]),s("div",{staticClass:"userHome-content"},[s("router-view")],1)])},kt=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"userHome-sideBar-head"},[s("b",{staticClass:"el-icon-user-solid"})])}],yt={data(){return{}},computed:{...(0,p.rn)(["user"])},methods:{linkTo(t){this.$router.push(t)}}},Nt=yt,St=(0,v.Z)(Nt,xt,kt,!1,null,"753fe528",null),wt=St.exports,It=function(){var t=this,s=t._self._c;return s("div",{staticClass:"userCart"},[t._m(0),t._m(1),s("div",{staticClass:"userCart-content"},[s("Cartgoods",{attrs:{isChecked:!0,imgPath:e(5428),goodInfo:"健胃消食片",price:10,count:2}})],1),t._m(2)])},Pt=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"userCart-title"},[s("b",{staticClass:"el-icon-shopping-cart-2 userCart-title-logo"}),t._v("   "),s("span",{staticClass:"userCart-title-tip"},[t._v("万月堂购物车")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"userCart-nav"},[s("div",{staticClass:"userCart-nav-all"},[s("input",{attrs:{type:"checkbox",name:"",id:"userCart-nav-all"}}),s("label",{attrs:{for:"userCart-nav-all"}},[t._v("全选")])]),s("span",{staticClass:"userCart-nav-info"},[t._v("商品信息")]),s("span",{staticClass:"userCart-nav-price"},[t._v("单价")]),s("span",{staticClass:"userCart-nav-count"},[t._v("数量")]),s("span",{staticClass:"userCart-nav-subtotal"},[t._v("小计")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"userCart-aggregate"},[s("div",{staticClass:"userCart-aggregate-count"},[s("span",[t._v("已选择")]),s("span",{staticClass:"userCart-aggregate-count-total"},[t._v("2")]),s("span",[t._v("件商品")])]),s("div",{staticClass:"userCart-aggregate-total"},[s("span",[t._v("总计")]),s("span",{staticClass:"userCart-aggregate-total-price"},[t._v("￥100")])]),s("button",{staticClass:"userCart-aggregate-btn"},[t._v("结算")])])}],Ft=function(){var t=this,s=t._self._c;return s("div",{staticClass:"cartGoods"},[s("input",{attrs:{type:"checkbox",name:"",id:"a",isChecked:t.isChecked}}),s("div",{staticClass:"cartGoods-img"},[s("label",{attrs:{for:"a"}},[s("img",{attrs:{src:t.imgPath,alt:""}})])]),s("span",{staticClass:"cartGoods-info"},[t._v(t._s(t.goodInfo))]),s("span",{staticClass:"cartGoods-price"},[t._v("￥"+t._s(t.price))]),s("div",{staticClass:"cartGoods-count"},[s("button",{staticClass:"cartGoods-count-btn"},[t._v("-")]),s("span",{staticClass:"cartGoods-count-counter"},[t._v(t._s(t.count))]),s("button",{staticClass:"cartGoods-count-btn"},[t._v("+")])]),s("span",{staticClass:"cartGoods-subtotal"},[t._v("￥"+t._s(t.subTotal))]),s("a",{attrs:{href:"javascript:;"}},[t._v("移除该商品")])])},Lt=[],Et={props:{isChecked:{default:!1,type:Boolean},imgPath:{default:"",type:String},goodInfo:{default:"",type:String},price:{default:0,type:Number},count:{default:1,type:Number}},data(){return{subTotal:this.price*this.count}}},At=Et,Gt=(0,v.Z)(At,Ft,Lt,!1,null,"33792e32",null),Zt=Gt.exports,$t={components:{Cartgoods:Zt}},Ot=$t,jt=(0,v.Z)(Ot,It,Pt,!1,null,"ecf606a6",null),Dt=jt.exports,Ht=function(){var t=this,s=t._self._c;return s("div",{staticClass:"userInfo"},[s("el-form",{attrs:{"label-position":t.labelPosition,disabled:t.unchangeable,"label-width":"80px",model:t.formLabelAlign}},[s("el-form-item",{attrs:{label:"用户名"}},[s("el-input",{model:{value:t.formLabelAlign.name,callback:function(s){t.$set(t.formLabelAlign,"name",s)},expression:"formLabelAlign.name"}})],1),s("el-form-item",{attrs:{label:"手机号"}},[s("el-input",{model:{value:t.formLabelAlign.phone,callback:function(s){t.$set(t.formLabelAlign,"phone",s)},expression:"formLabelAlign.phone"}})],1),s("el-form-item",{attrs:{label:"性别",prop:"gender"}},[s("el-radio-group",{model:{value:t.formLabelAlign.gender,callback:function(s){t.$set(t.formLabelAlign,"gender",s)},expression:"formLabelAlign.gender"}},[s("el-radio",{attrs:{label:"男"}}),s("el-radio",{attrs:{label:"女"}})],1)],1)],1)],1)},Tt=[],Mt={data(){return{labelPosition:"left",unchangeable:!0,formLabelAlign:{name:"",phone:"",gender:""}}}},Ut=Mt,Bt=(0,v.Z)(Ut,Ht,Tt,!1,null,"119cf065",null),qt=Bt.exports;a["default"].use(A.ZP);const zt=A.ZP.prototype.push;A.ZP.prototype.push=function(t){return zt.call(this,t).catch((t=>t))};const Yt=[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:et},{path:"/login",name:"login",component:lt},{path:"/register",name:"register",component:vt},{path:"/goodsDetails/:id",name:"goodsDetails",component:bt},{path:"/userHome",name:"userHome",component:wt,children:[{path:"userInfo",name:"userInfo",component:qt}]},{path:"/userCart",name:"userCart",component:Dt}],Rt=new A.ZP({routes:Yt});var Jt=Rt,Kt=e(70);a["default"].use(p.ZP);var Qt=new p.ZP.Store({state:{user:{isLogin:!1,userName:""}},mutations:{login(t,s){t.user.userName=s.userName,t.user.isLogin=!0},logout(t){t.user.isLogin=!1}},actions:{}});Kt.ZP.defaults.baseURL="http://localhost:8080",Kt.ZP.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",a["default"].prototype.$http=Kt.ZP,a["default"].config.productionTip=!1,a["default"].use(r()),new a["default"]({router:Jt,store:Qt,el:"#app",render:t=>t(E)}).$mount("#app")},5361:function(t,s,e){t.exports=e.p+"img/黄月.68bbbbb2.png"},983:function(t,s,e){t.exports=e.p+"img/img1.830edbdd.jpg"},935:function(t,s,e){t.exports=e.p+"img/img2.bec139c1.jpg"},3447:function(t,s,e){t.exports=e.p+"img/img3.d8f82455.jpeg"},5428:function(t,s,e){t.exports=e.p+"img/img4.4f8e377b.jpg"}},s={};function e(a){var o=s[a];if(void 0!==o)return o.exports;var r=s[a]={id:a,loaded:!1,exports:{}};return t[a].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}e.m=t,function(){var t=[];e.O=function(s,a,o,r){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],o=t[u][1],r=t[u][2];for(var n=!0,l=0;l<a.length;l++)(!1&r||i>=r)&&Object.keys(e.O).every((function(t){return e.O[t](a[l])}))?a.splice(l--,1):(n=!1,r<i&&(i=r));if(n){t.splice(u--,1);var c=o();void 0!==c&&(s=c)}}return s}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[a,o,r]}}(),function(){e.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(s,{a:s}),s}}(),function(){e.d=function(t,s){for(var a in s)e.o(s,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:s[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){e.p=""}(),function(){var t={143:0};e.O.j=function(s){return 0===t[s]};var s=function(s,a){var o,r,i=a[0],n=a[1],l=a[2],c=0;if(i.some((function(s){return 0!==t[s]}))){for(o in n)e.o(n,o)&&(e.m[o]=n[o]);if(l)var u=l(e)}for(s&&s(a);c<i.length;c++)r=i[c],e.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return e.O(u)},a=self["webpackChunkwanyuetang_vue"]=self["webpackChunkwanyuetang_vue"]||[];a.forEach(s.bind(null,0)),a.push=s.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(8762)}));a=e.O(a)})();
//# sourceMappingURL=app.f518a575.js.map