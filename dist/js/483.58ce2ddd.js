"use strict";(self["webpackChunkvue_new_sift"]=self["webpackChunkvue_new_sift"]||[]).push([[483],{7483:function(e,a,t){t.r(a),t.d(a,{default:function(){return V}});var s=t(3396);const r=(0,s._)("h2",null,"Register as a coach",-1);function i(e,a,t,i,l,n){const o=(0,s.up)("coach-form"),d=(0,s.up)("coach-base");return(0,s.wg)(),(0,s.iD)("section",null,[(0,s.Wm)(d,null,{default:(0,s.w5)((()=>[r,(0,s.Wm)(o,{onSetAdd:n.setadd},null,8,["onSetAdd"])])),_:1})])}var l=t(9242),n=t(7139);const o=e=>((0,s.dD)("data-v-1154951f"),e=e(),(0,s.Cn)(),e),d={class:"form-control"},u={key:0},m={class:"form-control"},c={key:0},f={class:"form-control"},v={key:0},p={class:"form-control"},_={key:0},h={class:"form-control"},w=o((()=>(0,s._)("label",{for:"joker"},"JOKER",-1))),y=o((()=>(0,s._)("label",{for:"again"},"Again",-1))),b=o((()=>(0,s._)("label",{for:"rose"},"Rose",-1)));function k(e,a,t,r,i,o){const k=(0,s.up)("base-button");return(0,s.wg)(),(0,s.iD)("form",{onSubmit:a[14]||(a[14]=(0,l.iM)(((...e)=>o.setadd&&o.setadd(...e)),["prevent"]))},[(0,s._)("div",d,[(0,s._)("label",{for:"firstname",class:(0,n.C_)({input:!i.firstname.isfrom})},"Firstname",2),(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>i.firstname.val=e),onBlur:a[1]||(a[1]=e=>o.newverify("firstname"))},null,544),[[l.nr,i.firstname.val,void 0,{trim:!0}]]),i.firstname.isfrom?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("p",u,"Is not Firstname"))]),(0,s._)("div",m,[(0,s._)("label",{for:"lastname",class:(0,n.C_)({input:!i.lastname.isfrom})},"Lastname",2),(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":a[2]||(a[2]=e=>i.lastname.val=e),onBlur:a[3]||(a[3]=e=>o.newverify("lastname"))},null,544),[[l.nr,i.lastname.val,void 0,{trim:!0}]]),i.lastname.isfrom?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("p",c,"Is not Lastname"))]),(0,s._)("div",f,[(0,s._)("label",{for:"description",class:(0,n.C_)({input:!i.description.isfrom})},"Description",2),(0,s.wy)((0,s._)("textarea",{id:"description",rows:"5","onUpdate:modelValue":a[4]||(a[4]=e=>i.description.val=e),onBlur:a[5]||(a[5]=e=>o.newverify("description"))},null,544),[[l.nr,i.description.val,void 0,{trim:!0}]]),i.description.isfrom?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("p",v,"Is not Description"))]),(0,s._)("div",p,[(0,s._)("label",{for:"rate",class:(0,n.C_)({input:!i.rate.isfrom})},"Hourly Rate",2),(0,s.wy)((0,s._)("input",{id:"rate",type:"number","onUpdate:modelValue":a[6]||(a[6]=e=>i.rate.val=e),onBlur:a[7]||(a[7]=e=>o.newverify("rate"))},null,544),[[l.nr,i.rate.val,void 0,{trim:!0}]]),i.rate.isfrom?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("p",_,"This Numbre is not"))]),(0,s._)("div",h,[(0,s._)("h3",{class:(0,n.C_)({input:!i.areas.isfrom})},"Areas of Expertise",2),(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{type:"checkbox",id:"joker",value:"joker","onUpdate:modelValue":a[8]||(a[8]=e=>i.areas.val=e),onBlur:a[9]||(a[9]=e=>o.newverify("areas"))},null,544),[[l.e8,i.areas.val]]),w]),(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{type:"checkbox",id:"again",value:"again","onUpdate:modelValue":a[10]||(a[10]=e=>i.areas.val=e),onBlur:a[11]||(a[11]=e=>o.newverify("areas"))},null,544),[[l.e8,i.areas.val]]),y]),(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{type:"checkbox",id:"rose",value:"rose","onUpdate:modelValue":a[12]||(a[12]=e=>i.areas.val=e),onBlur:a[13]||(a[13]=e=>o.newverify("areas"))},null,544),[[l.e8,i.areas.val]]),b])]),(0,s.Wm)(k,{to:"/coaches"},{default:(0,s.w5)((()=>[(0,s.Uk)("Sumbit")])),_:1})],32)}var g={emits:["set-add"],data(){return{firstname:{val:"",isfrom:!0},lastname:{val:"",isfrom:!0},description:{val:"",isfrom:!0},rate:{val:"",isfrom:!0},areas:{val:[],isfrom:!0},fillUser:!0}},methods:{newverify(e){this.fillUser=!0,""===this[e].val?(this[e].isfrom=!1,this.fillUser=!1):(this[e].isfrom=!0,this.fillUser=!0)},setadd(){const e={first:this.firstname.val,last:this.lastname.val,desc:this.description.val,rate:this.rate.val,areas:this.areas.val};console.log(e),this.$emit("set-add",e)}}},U=t(89);const C=(0,U.Z)(g,[["render",k],["__scopeId","data-v-1154951f"]]);var D=C,x={components:{CoachForm:D},methods:{setadd(e){this.$store.dispatch("Coaches/registerCoach",e),this.$router.replace("/coaches")}}};const B=(0,U.Z)(x,[["render",i]]);var V=B}}]);
//# sourceMappingURL=483.58ce2ddd.js.map