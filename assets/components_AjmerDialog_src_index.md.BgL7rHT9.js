import{u as ci,z as U,A as gi,E as ui,a as J,b as yi,c as M,C as R,W as mi}from"./chunks/theme.8ppHpXK7.js";import{r as B,ah as c,z as g,H as $,I as t,R as e,u as j,m as fi,d as Fi,A as I,a5 as K,a7 as Ci,B as i,D as L,P as z,K as H,Q as T,F as V,O as s,c as bi,at as Di,y as Bi,ag as W,aS as vi}from"./chunks/framework.DwRXKiMT.js";const N={__name:"form",props:{formInline:{type:Object,default:()=>({user:"",region:""})}},setup(C){const k=B(C.formInline);return(f,u)=>{const v=c("el-input"),m=c("el-form-item"),A=c("el-option"),b=c("el-select"),q=c("el-form");return g(),$(q,{model:k.value},{default:t(()=>[e(m,{label:"姓名"},{default:t(()=>[e(v,{modelValue:k.value.user,"onUpdate:modelValue":u[0]||(u[0]=x=>k.value.user=x),placeholder:"请输入姓名"},null,8,["modelValue"])]),_:1}),e(m,{label:"城市"},{default:t(()=>[e(b,{modelValue:k.value.region,"onUpdate:modelValue":u[1]||(u[1]=x=>k.value.region=x),placeholder:"请选择城市"},{default:t(()=>[e(A,{label:"上海",value:"上海"}),e(A,{label:"浙江",value:"浙江"}),e(A,{label:"深圳",value:"深圳"})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])}}},Ai={__name:"formPrimitive",props:{data:{type:String,default:()=>""}},emits:["update:data"],setup(C,{emit:E}){const u=ci(C,"data",E);return(v,m)=>{const A=c("el-input");return g(),$(A,{modelValue:j(u),"onUpdate:modelValue":m[0]||(m[0]=b=>fi(u)?u.value=b:null),placeholder:"请输入内容"},null,8,["modelValue"])}}},$i={key:0,style:{display:"flex","align-items":"center","justify-content":"space-between"}},ji=["id"],xi=["onClick"],Ri={key:1},Ii=Object.assign({name:"AjmerDialog"},{__name:"index",setup(C,{expose:E}){const k=B([]);let f=B([]);B(!1);const u=Fi(()=>r=>{var p;return((p=r==null?void 0:r.footerButtons)==null?void 0:p.length)>0?r.footerButtons:[{label:"取消",text:!0,bg:!0,subItemAPI:"cancel",btnClick:({dialog:l,button:d})=>{var y,F;const o=()=>b(l.options,l.index,d.btn.subItemAPI);(y=l.options)!=null&&y.beforeCancel&&U((F=l.options)==null?void 0:F.beforeCancel)?l.options.beforeCancel(o,l,d):o()}},{label:"确定",type:"primary",text:!0,bg:!0,subItemAPI:"confirm",popconfirm:r==null?void 0:r.popconfirm,btnClick:({dialog:l,button:d})=>{var y,F;const o=()=>b(l.options,l.index,d.btn.subItemAPI);(y=l.options)!=null&&y.beforeSure&&U((F=l.options)==null?void 0:F.beforeSure)?l.options.beforeSure(o,l,d):o()}}]});function v(r,p,l="close"){b(r,p,l),m("close",r,p)}function m(r,p,l){if(p!=null&&p[r]&&U(p==null?void 0:p[r]))return p==null?void 0:p[r]({options:p,index:l})}const A=r=>{const p=()=>k.value.push(Object.assign(r,{visible:!0}));r!=null&&r.openDelay?M(()=>{p()},r.openDelay):p()},b=(r,p,l)=>{if(f.value[p][l]){let d=f.value[p][l]();d instanceof Promise&&d.then(()=>{k.value[p].visible=!1,r.closeCallBack&&r.closeCallBack({options:r,index:p,subItemAPI:l});const o=(r==null?void 0:r.closeDelay)??200;M(()=>{k.value.splice(p,1)},o)}).catch(()=>{})}else{k.value[p].visible=!1,r.closeCallBack&&r.closeCallBack({options:r,index:p,subItemAPI:l});const d=(r==null?void 0:r.closeDelay)??200;M(()=>{k.value.splice(p,1)},d)}};return E({addDialog:A,updateDialog:(r,p="title",l=0)=>{k.value[l][p]=r},closeAllDialog:()=>{k.value=[]},closeDialog:b}),(r,p)=>(g(!0),I(T,null,K(k.value,(l,d)=>(g(),$(j(yi),V({key:d,ref_for:!0},l,{modelValue:l.visible,"onUpdate:modelValue":o=>l.visible=o,class:"pure-dialog",fullscreen:l==null?void 0:l.fullscreen,onClosed:o=>v(l,d),onOpened:o=>m("opened",l,d),onOpenAutoFocus:o=>m("openAutoFocus",l,d),onCloseAutoFocus:o=>m("closeAutoFocus",l,d)}),Ci({default:t(()=>[(g(),$(H(l.contentRenderer({options:l,index:d})),V({ref_for:!0},l==null?void 0:l.props,{ref_for:!0,ref_key:"formRefs",ref:f,onClose:o=>v(l,d,o)}),null,16,["onClose"]))]),_:2},[l!=null&&l.fullscreenIcon||l!=null&&l.headerRenderer?{name:"header",fn:t(({close:o,titleId:y,titleClass:F})=>[l!=null&&l.fullscreenIcon?(g(),I("div",$i,[i("span",{id:y,class:L(F)},z(l==null?void 0:l.title),11,ji),i("i",{style:{cursor:"pointer"},class:L(["el-icon","el-dialog__close"]),onClick:()=>{l.fullscreen=!l.fullscreen,m("fullscreenCallBack",l,d)}},[e(j(gi),{class:"pure-dialog-svg",icon:l!=null&&l.fullscreen?"ri:fullscreen-exit-fill":"ri:fullscreen-fill"},null,8,["icon"])],8,xi)])):(g(),$(H(l==null?void 0:l.headerRenderer({close:o,titleId:y,titleClass:F})),{key:1}))]),key:"0"}:void 0,l!=null&&l.hideFooter?void 0:{name:"footer",fn:t(()=>[l!=null&&l.footerRenderer?(g(),$(H(l==null?void 0:l.footerRenderer({options:l,index:d})),{key:0})):(g(),I("span",Ri,[(g(!0),I(T,null,K(u.value(l),(o,y)=>(g(),I(T,{key:y},[o.popconfirm?(g(),$(j(ui),V({key:0,ref_for:!0},o.popconfirm,{onConfirm:F=>o.btnClick({dialog:{options:l,index:d},button:{btn:o,index:y}})}),{reference:t(()=>[e(j(J),V({ref_for:!0},o),{default:t(()=>[s(z(o==null?void 0:o.label),1)]),_:2},1040)]),_:2},1040,["onConfirm"])):(g(),$(j(J),V({key:1,ref_for:!0},o,{onClick:F=>o.btnClick({dialog:{options:l,index:d},button:{btn:o,index:y}})}),{default:t(()=>[s(z(o==null?void 0:o.label),1)]),_:2},1040,["onClick"]))],64))),128))]))]),key:"1"}]),1040,["modelValue","onUpdate:modelValue","fullscreen","onClosed","onOpened","onOpenAutoFocus","onCloseAutoFocus"]))),128))}}),Pi=()=>{const C=e(Ii);C.appContext=bi().appContext,typeof document<"u"&&Di(C,document.body);const E=C.component;if(E&&E.exposed&&typeof window<"u"){let{addDialog:k,closeDialog:f,updateDialog:u,closeAllDialog:v}=E.exposed;window.$ajmerAddDialog=k,window.$ajmerCloseDialog=f,window.$ajmerUpdateDialog=u,window.$ajmerCloseAllDialog=v}},wi=Bi({__name:"index.md.demo.5e088611",setup(C){Pi();let{$ajmerAddDialog:E,$ajmerCloseDialog:k,$ajmerUpdateDialog:f,$ajmerCloseAllDialog:u}=window;function v(){E({title:"基础用法",contentRenderer:()=>e("p",null,[s("弹框内容-基础用法")])})}function m(){E({title:"可拖拽",draggable:!0,contentRenderer:()=>W("p","弹框内容-可拖拽")})}function A(){E({title:"全屏",fullscreen:!0,contentRenderer:()=>e("p",null,"弹框内容-全屏")})}function b(){E({title:"全屏按钮和全屏事件",fullscreenIcon:!0,fullscreenCallBack:({options:h})=>{console.log(h.fullscreen?"全屏":"非全屏")},contentRenderer:()=>e("p",null,[s("弹框内容-全屏按钮和全屏事件")])})}function q(){E({title:"无背景遮罩层",modal:!1,contentRenderer:()=>e("p",null,[s("弹框内容-无背景遮罩层")])})}function x(){E({title:"自定义弹出位置",top:"60vh",style:{marginRight:"20px"},contentRenderer:()=>e("p",null,[s("弹框内容-自定义弹出位置")])})}const r=mi(()=>E({title:"延时2秒打开弹框",openDelay:1400,contentRenderer:()=>e("p",null,[s("弹框内容-延时2秒打开弹框")])}),600);function p(){E({title:"延时2秒关闭弹框",closeDelay:2e3,contentRenderer:()=>e("p",null,[s("弹框内容-延时2秒关闭弹框")])})}function l(){E({title:"不显示右上角关闭按钮图标",showClose:!1,contentRenderer:()=>e("p",null,[s("弹框内容-不显示右上角关闭按钮图标")])})}function d(){E({title:"禁止通过键盘ESC关闭",closeOnPressEscape:!1,contentRenderer:()=>e("p",null,[s("弹框内容-禁止通过键盘ESC关闭")])})}function o(){E({title:"禁止通过点击modal关闭",closeOnClickModal:!1,contentRenderer:()=>e("p",null,[s("弹框内容-禁止通过点击modal关闭")])})}function y(){E({title:"隐藏底部取消、确定按钮",hideFooter:!0,contentRenderer:()=>e("p",null,[s("弹框内容-隐藏底部取消、确定按钮")])})}function F(){E({title:"自定义头部",showClose:!1,headerRenderer:({close:h,titleId:n,titleClass:a})=>e("div",{style:"display: flex;flex-direction: row;justify-content: space-between;"},[e("h4",{id:n,class:a},[s("自定义头部")]),e(c("el-button"),{type:"danger",onClick:h},{default:()=>[s("关闭")]})]),contentRenderer:()=>e("p",null,[s("弹框内容-自定义头部")])})}function Q(){E({title:"自定义底部",footerRenderer:({options:h,index:n})=>e(c("el-button"),{onClick:()=>k(h,n,{command:"sure"})},{default:()=>[h.title,s("-"),n]}),contentRenderer:()=>e("p",null,[s("弹框内容-自定义底部")]),closeCallBack:({options:h,index:n,args:a})=>{console.log(h,n,a)}})}function G(){E({title:"自定义底部按钮",footerButtons:[{label:"按钮1",size:"small",type:"success",btnClick:({dialog:{options:h,index:n},button:a})=>{console.log(h,n,a),k(h,n)}},{label:"按钮2",text:!0,bg:!0,btnClick:({dialog:{options:h,index:n},button:a})=>{console.log(h,n,a),k(h,n)}},{label:"按钮3",size:"large",type:"warning",btnClick:({dialog:{options:h,index:n},button:a})=>{console.log(h,n,a),k(h,n)}}],contentRenderer:()=>e("p",null,[s("弹框内容-自定义底部按钮")])})}function X(){E({title:"打开后的回调",open:({options:h,index:n})=>{console.log(h,n)},contentRenderer:()=>e("p",null,[s("弹框内容-打开后的回调")])})}function Y(){E({title:"关闭后的回调",closeCallBack:({options:h,index:n,args:a})=>{console.log(h,n,a);let D="";(a==null?void 0:a.command)==="cancel"?D="您点击了取消按钮":(a==null?void 0:a.command)==="sure"?D="您点击了确定按钮":D="您点击了右上角关闭按钮或空白页或按下了esc键",console.log(D)},contentRenderer:()=>e("p",null,[s("弹框内容-关闭后的回调")])})}function Z(){E({title:"嵌套的弹框",contentRenderer:({index:h})=>e(c("el-button"),{onClick:()=>E({title:`第${h+1}个子弹框`,width:"40%",contentRenderer:({index:n})=>e(c("el-button"),{onClick:()=>E({title:`第${n+1}个子弹框`,width:"30%",contentRenderer:()=>e(T,null,[e(c("el-button"),{round:!0,onClick:()=>u()},{default:()=>[s("哎呦，你干嘛，赶快关闭所有弹框")]})])})},{default:()=>[s("点击打开第"),n+1,s("个子弹框")]})})},{default:()=>[s("点击打开第"),h+1,s("个子弹框")]})})}function ii(){const h=B(1);E({title:`第${h.value}页`,contentRenderer:()=>e(T,null,[e(c("el-button"),{disabled:!(h.value>1),onClick:()=>{h.value-=1,f(`第${h.value}页`)}},{default:()=>[s("上一页")]}),e(c("el-button"),{onClick:()=>{h.value+=1,f(`第${h.value}页`)}},{default:()=>[s("下一页")]})])})}function si(){E({width:"30%",title:"popconfirm确认框示例",popconfirm:{title:"是否确认修改当前数据"},contentRenderer:()=>e("p",null,[s("点击右下方确定按钮看看效果吧")])})}function ni(){E({title:"点击底部取消按钮的回调",contentRenderer:()=>e("p",null,[s("弹框内容-点击底部取消按钮的回调（会暂停弹框的关闭）")]),beforeCancel:(h,{options:n,index:a})=>{console.log("%coptions, index===>>>: ","color: MidnightBlue; background: Aquamarine; font-size: 20px;",n,a)}})}function li(){E({title:"点击底部确定按钮的回调",contentRenderer:()=>e("p",null,[s("弹框内容-点击底部确定按钮的回调（会暂停弹框的关闭，经常用于新增、修改弹框内容后调用接口）")]),beforeSure:(h,{options:n,index:a})=>{console.log("%coptions, index===>>>: ","color: MidnightBlue; background: Aquamarine; font-size: 20px;",n,a)}})}function ei(){E({width:"30%",title:"结合Form表单（第一种方式）",contentRenderer:()=>N,props:{formInline:{user:"菜虚鲲",region:"浙江"}},closeCallBack:({options:h,index:n,args:a})=>{console.log(h,n,a);const{formInline:D}=h.props,S=`姓名：${D.user} 城市：${D.region}`;(a==null?void 0:a.command)==="cancel"?console.log(`您点击了取消按钮，当前表单数据为 ${S}`):(a==null?void 0:a.command)==="sure"?console.log(`您点击了确定按钮，当前表单数据为 ${S}`):console.log(`您点击了右上角关闭按钮或空白页或按下了esc键，当前表单数据为 ${S}`)}})}const P=B({user:"菜虚鲲",region:"浙江"}),ai=R(P.value);function ti(){E({width:"30%",title:"结合Form表单（第二种方式）",contentRenderer:()=>W(N,{formInline:P.value}),closeCallBack:()=>{console.log(`当前表单数据为 姓名：${P.value.user} 城市：${P.value.region}`),P.value=R(ai)}})}const w=B({user:"菜虚鲲",region:"浙江"}),Ei=R(w.value);function ki(){E({width:"30%",title:"结合Form表单（第三种方式）",contentRenderer:()=>e(N,{formInline:w.value}),closeCallBack:()=>{console.log(`当前表单数据为 姓名：${w.value.user} 城市：${w.value.region}`),w.value=R(Ei)}})}const _=B({user:"菜虚鲲",region:"浙江"}),hi=R(_.value);function ri(){E({width:"30%",title:"结合Form表单（第四种方式）",contentRenderer:()=>e(N,{formInline:_.value},null),closeCallBack:()=>{console.log(`当前表单数据为 姓名：${_.value.user} 城市：${_.value.region}`),_.value=R(hi)}})}const O=B("Hello World"),oi=B(O.value);function pi(){E({width:"30%",title:"子组件 prop 为 primitive 类型 demo",contentRenderer:()=>W(Ai,{data:O.value,"onUpdate:data":h=>O.value=h}),closeCallBack:()=>{console.log(`当前表单内容：${O.value}`),O.value=oi.value}})}return(h,n)=>{const a=c("el-button"),D=c("el-space"),S=c("el-divider"),di=c("el-card");return g(),$(di,{shadow:"never"},{default:t(()=>[e(D,{wrap:""},{default:t(()=>[e(a,{onClick:v},{default:t(()=>n[0]||(n[0]=[s(" 基础用法 ")])),_:1}),e(a,{onClick:m},{default:t(()=>n[1]||(n[1]=[s(" 可拖拽 ")])),_:1}),e(a,{onClick:A},{default:t(()=>n[2]||(n[2]=[s(" 全屏 ")])),_:1}),e(a,{onClick:b},{default:t(()=>n[3]||(n[3]=[s(" 全屏按钮和全屏事件 ")])),_:1}),e(a,{onClick:q},{default:t(()=>n[4]||(n[4]=[s(" 无背景遮罩层 ")])),_:1}),e(a,{onClick:x},{default:t(()=>n[5]||(n[5]=[s(" 自定义弹出位置 ")])),_:1}),e(a,{onClick:j(r)},{default:t(()=>n[6]||(n[6]=[s(" 延时2秒打开弹框 ")])),_:1},8,["onClick"]),e(a,{onClick:p},{default:t(()=>n[7]||(n[7]=[s(" 延时2秒关闭弹框 ")])),_:1}),e(a,{onClick:l},{default:t(()=>n[8]||(n[8]=[s(" 不显示右上角关闭按钮图标 ")])),_:1}),e(a,{onClick:d},{default:t(()=>n[9]||(n[9]=[s(" 禁止通过键盘ESC关闭 ")])),_:1}),e(a,{onClick:o},{default:t(()=>n[10]||(n[10]=[s(" 禁止通过点击modal关闭 ")])),_:1}),e(a,{onClick:y},{default:t(()=>n[11]||(n[11]=[s(" 隐藏底部取消、确定按钮 ")])),_:1}),e(a,{onClick:F},{default:t(()=>n[12]||(n[12]=[s(" 自定义头部 ")])),_:1}),e(a,{onClick:Q},{default:t(()=>n[13]||(n[13]=[s(" 自定义底部 ")])),_:1}),e(a,{onClick:G},{default:t(()=>n[14]||(n[14]=[s(" 自定义底部按钮 ")])),_:1}),e(a,{onClick:X},{default:t(()=>n[15]||(n[15]=[s(" 打开后的回调 ")])),_:1}),e(a,{onClick:Y},{default:t(()=>n[16]||(n[16]=[s(" 关闭后的回调 ")])),_:1}),e(a,{onClick:Z},{default:t(()=>n[17]||(n[17]=[s(" 嵌套的弹框 ")])),_:1}),e(a,{onClick:ii},{default:t(()=>n[18]||(n[18]=[s(" 更改弹框自身属性值 ")])),_:1}),e(a,{onClick:si},{default:t(()=>n[19]||(n[19]=[s("popconfirm确认框")])),_:1}),e(a,{onClick:ni},{default:t(()=>n[20]||(n[20]=[s(" 点击底部取消按钮的回调（会暂停弹框的关闭） ")])),_:1}),e(a,{onClick:li},{default:t(()=>n[21]||(n[21]=[s(" 点击底部确定按钮的回调（会暂停弹框的关闭，经常用于新增、修改弹框内容后调用接口） ")])),_:1})]),_:1}),e(S),e(D,{wrap:""},{default:t(()=>[e(a,{onClick:ei},{default:t(()=>n[22]||(n[22]=[s(" 结合Form表单（第一种方式） ")])),_:1}),e(a,{onClick:ti},{default:t(()=>n[23]||(n[23]=[s(" 结合Form表单（第二种方式） ")])),_:1}),e(a,{onClick:ki},{default:t(()=>n[24]||(n[24]=[s(" 结合Form表单（第三种方式） ")])),_:1}),e(a,{onClick:ri},{default:t(()=>n[25]||(n[25]=[s(" 结合Form表单（第四种方式） ")])),_:1}),e(a,{onClick:pi},{default:t(()=>n[26]||(n[26]=[s(" 子组件 prop 为 primitive 类型 ")])),_:1})]),_:1})]),_:1})}}}),Vi=JSON.parse('{"title":"AjmerDialog","description":"","frontmatter":{},"headers":[],"relativePath":"components/AjmerDialog/src/index.md","filePath":"components/AjmerDialog/src/index.md","lastUpdated":1744339375000}'),_i={name:"components/AjmerDialog/src/index.md"},Ti=Object.assign(_i,{setup(C){return(E,k)=>{const f=c("demo");return g(),I("div",null,[k[1]||(k[1]=i("h1",{id:"ajmerdialog",tabindex:"-1"},[s("AjmerDialog "),i("a",{class:"header-anchor",href:"#ajmerdialog","aria-label":'Permalink to "AjmerDialog"'},"​")],-1)),k[2]||(k[2]=i("blockquote",null,[i("p",null,"弹框组件")],-1)),k[3]||(k[3]=i("p",null,"组件路径: ajmer-components/components/AjmerDialog",-1)),k[4]||(k[4]=i("p",null,"作者: zj",-1)),k[5]||(k[5]=i("hr",null,null,-1)),k[6]||(k[6]=i("h2",{id:"预览效果",tabindex:"-1"},[s("预览效果 "),i("a",{class:"header-anchor",href:"#预览效果","aria-label":'Permalink to "预览效果"'},"​")],-1)),e(f,{customClass:"demoblock-custom",sourceCode:`<template>
  <el-card shadow="never">
    <el-space wrap>
      <el-button @click="onBaseClick"> 基础用法 </el-button>
      <el-button @click="onDraggableClick"> 可拖拽 </el-button>
      <el-button @click="onFullscreenClick"> 全屏 </el-button>
      <el-button @click="onFullscreenIconClick"> 全屏按钮和全屏事件 </el-button>
      <el-button @click="onModalClick"> 无背景遮罩层 </el-button>
      <el-button @click="onStyleClick"> 自定义弹出位置 </el-button>
      <el-button @click="onoOpenDelayClick"> 延时2秒打开弹框 </el-button>
      <el-button @click="onCloseDelayClick"> 延时2秒关闭弹框 </el-button>
      <el-button @click="onShowCloseClick">
        不显示右上角关闭按钮图标
      </el-button>
      <el-button @click="onBeforeCloseClick"> 禁止通过键盘ESC关闭 </el-button>
      <el-button @click="onCloseOnClickModalClick">
        禁止通过点击modal关闭
      </el-button>
      <el-button @click="onHideFooterClick"> 隐藏底部取消、确定按钮 </el-button>
      <el-button @click="onHeaderRendererClick"> 自定义头部 </el-button>
      <el-button @click="onFooterRendererClick"> 自定义底部 </el-button>
      <el-button @click="onFooterButtonsClick"> 自定义底部按钮 </el-button>
      <el-button @click="onOpenClick"> 打开后的回调 </el-button>
      <el-button @click="onCloseCallBackClick"> 关闭后的回调 </el-button>
      <el-button @click="onNestingClick"> 嵌套的弹框 </el-button>
      <el-button @click="onUpdateClick"> 更改弹框自身属性值 </el-button>
      <el-button @click="onPopconfirmClick">popconfirm确认框</el-button>
      <el-button @click="onBeforeCancelClick">
        点击底部取消按钮的回调（会暂停弹框的关闭）
      </el-button>
      <el-button @click="onBeforeSureClick">
        点击底部确定按钮的回调（会暂停弹框的关闭，经常用于新增、修改弹框内容后调用接口）
      </el-button>
    </el-space>
    <el-divider />
    <el-space wrap>
      <el-button @click="onFormOneClick">
        结合Form表单（第一种方式）
      </el-button>
      <el-button @click="onFormTwoClick">
        结合Form表单（第二种方式）
      </el-button>
      <el-button @click="onFormThreeClick">
        结合Form表单（第三种方式）
      </el-button>
      <el-button @click="onFormFourClick">
        结合Form表单（第四种方式）
      </el-button>
      <el-button @click="onFormPrimitiveFormClick">
        子组件 prop 为 primitive 类型
      </el-button>
    </el-space>
  </el-card>
</template>

<script setup lang="tsx">
import { cloneDeep, debounce } from "ajmer-tools";
import { ref, h, createVNode } from "vue";
import forms from "../../../../src/components/AjmerDialog/src/form.vue";
import formPrimitive from "../../../../src/components/AjmerDialog/src/formPrimitive.vue";
import AjmerDialog from "../../../../src/components/AjmerDialog/index.js";
AjmerDialog();
let {
  $ajmerAddDialog,
  $ajmerCloseDialog,
  $ajmerUpdateDialog,
  $ajmerCloseAllDialog,
} = window;
function onBaseClick() {
  $ajmerAddDialog({
    title: "基础用法",
    contentRenderer: () => <p>弹框内容-基础用法</p>, // jsx 语法 （注意在.vue文件启用jsx语法，需要在script开启lang="tsx"）
  });
}

function onDraggableClick() {
  $ajmerAddDialog({
    title: "可拖拽",
    draggable: true,
    contentRenderer: () => h("p", "弹框内容-可拖拽"), // h 渲染函数 https://cn.vuejs.org/api/render-function.html#h
  });
}

function onFullscreenClick() {
  $ajmerAddDialog({
    title: "全屏",
    fullscreen: true,
    contentRenderer: () => createVNode("p", null, "弹框内容-全屏"), // createVNode 渲染函数 https://cn.vuejs.org/guide/extras/render-function.html#creating-vnodes
  });
}

function onFullscreenIconClick() {
  $ajmerAddDialog({
    title: "全屏按钮和全屏事件",
    fullscreenIcon: true,
    fullscreenCallBack: ({ options }) => {
      console.log(options.fullscreen ? "全屏" : "非全屏");
    },
    contentRenderer: () => <p>弹框内容-全屏按钮和全屏事件</p>,
  });
}

function onModalClick() {
  $ajmerAddDialog({
    title: "无背景遮罩层",
    modal: false,
    contentRenderer: () => <p>弹框内容-无背景遮罩层</p>,
  });
}

function onStyleClick() {
  $ajmerAddDialog({
    title: "自定义弹出位置",
    top: "60vh",
    style: { marginRight: "20px" },
    contentRenderer: () => <p>弹框内容-自定义弹出位置</p>,
  });
}

// 添加 600ms 防抖
const onoOpenDelayClick = debounce(
  () =>
    $ajmerAddDialog({
      title: "延时2秒打开弹框",
      openDelay: 2000 - 600,
      contentRenderer: () => <p>弹框内容-延时2秒打开弹框</p>,
    }),
  600
);

function onCloseDelayClick() {
  $ajmerAddDialog({
    title: "延时2秒关闭弹框",
    closeDelay: 2000,
    contentRenderer: () => <p>弹框内容-延时2秒关闭弹框</p>,
  });
}

function onShowCloseClick() {
  $ajmerAddDialog({
    title: "不显示右上角关闭按钮图标",
    showClose: false,
    contentRenderer: () => <p>弹框内容-不显示右上角关闭按钮图标</p>,
  });
}

function onBeforeCloseClick() {
  $ajmerAddDialog({
    title: "禁止通过键盘ESC关闭",
    closeOnPressEscape: false,
    contentRenderer: () => <p>弹框内容-禁止通过键盘ESC关闭</p>,
  });
}

function onCloseOnClickModalClick() {
  $ajmerAddDialog({
    title: "禁止通过点击modal关闭",
    closeOnClickModal: false,
    contentRenderer: () => <p>弹框内容-禁止通过点击modal关闭</p>,
  });
}

function onHideFooterClick() {
  $ajmerAddDialog({
    title: "隐藏底部取消、确定按钮",
    hideFooter: true,
    contentRenderer: () => <p>弹框内容-隐藏底部取消、确定按钮</p>,
  });
}

function onHeaderRendererClick() {
  $ajmerAddDialog({
    title: "自定义头部",
    showClose: false,
    headerRenderer: ({ close, titleId, titleClass }) => (
      // jsx 语法
      <div style="display: flex;flex-direction: row;justify-content: space-between;">
        <h4 id={titleId} class={titleClass}>
          自定义头部
        </h4>
        <el-button type="danger" onClick={close}>
          关闭
        </el-button>
      </div>
    ),
    contentRenderer: () => <p>弹框内容-自定义头部</p>,
  });
}

function onFooterRendererClick() {
  $ajmerAddDialog({
    title: "自定义底部",
    footerRenderer: ({ options, index }) => (
      <el-button
        onClick={() => $ajmerCloseDialog(options, index, { command: "sure" })}
      >
        {options.title}-{index}
      </el-button>
    ),
    contentRenderer: () => <p>弹框内容-自定义底部</p>,
    // 弹框关闭后回调
    closeCallBack: ({ options, index, args }) => {
      console.log(options, index, args);
    },
  });
}

function onFooterButtonsClick() {
  $ajmerAddDialog({
    title: "自定义底部按钮",
    footerButtons: [
      {
        label: "按钮1",
        size: "small",
        type: "success",
        btnClick: ({ dialog: { options, index }, button }) => {
          console.log(options, index, button);
          $ajmerCloseDialog(options, index);
        },
      },
      {
        label: "按钮2",
        text: true,
        bg: true,
        btnClick: ({ dialog: { options, index }, button }) => {
          console.log(options, index, button);
          $ajmerCloseDialog(options, index);
        },
      },
      {
        label: "按钮3",
        size: "large",
        type: "warning",
        btnClick: ({ dialog: { options, index }, button }) => {
          console.log(options, index, button);
          $ajmerCloseDialog(options, index);
        },
      },
    ],
    contentRenderer: () => <p>弹框内容-自定义底部按钮</p>,
  });
}

function onOpenClick() {
  $ajmerAddDialog({
    title: "打开后的回调",
    open: ({ options, index }) => {
      console.log(options, index);
    },
    contentRenderer: () => <p>弹框内容-打开后的回调</p>,
  });
}

function onCloseCallBackClick() {
  $ajmerAddDialog({
    title: "关闭后的回调",
    closeCallBack: ({ options, index, args }) => {
      console.log(options, index, args);
      let text = "";
      if (args?.command === "cancel") {
        text = "您点击了取消按钮";
      } else if (args?.command === "sure") {
        text = "您点击了确定按钮";
      } else {
        text = "您点击了右上角关闭按钮或空白页或按下了esc键";
      }
      console.log(text);
    },
    contentRenderer: () => <p>弹框内容-关闭后的回调</p>,
  });
}

// 这里为了演示方便，使用了嵌套写法，实际情况下最好把 $ajmerAddDialog 函数抽出来 套娃不可取
function onNestingClick() {
  $ajmerAddDialog({
    title: "嵌套的弹框",
    contentRenderer: ({ index }) => (
      <el-button
        onClick={() =>
          $ajmerAddDialog({
            title: \`第\${index + 1}个子弹框\`,
            width: "40%",
            contentRenderer: ({ index }) => (
              <el-button
                onClick={() =>
                  $ajmerAddDialog({
                    title: \`第\${index + 1}个子弹框\`,
                    width: "30%",
                    contentRenderer: () => (
                      <>
                        <el-button round onClick={() => $ajmerCloseAllDialog()}>
                          哎呦，你干嘛，赶快关闭所有弹框
                        </el-button>
                      </>
                    ),
                  })
                }
              >
                点击打开第{index + 1}个子弹框
              </el-button>
            ),
          })
        }
      >
        点击打开第{index + 1}个子弹框
      </el-button>
    ),
  });
}

// 满足在 contentRenderer 内容区更改弹框自身属性值的场景
function onUpdateClick() {
  const curPage = ref(1);
  $ajmerAddDialog({
    title: \`第\${curPage.value}页\`,
    contentRenderer: () => (
      <>
        <el-button
          disabled={curPage.value > 1 ? false : true}
          onClick={() => {
            curPage.value -= 1;
            $ajmerUpdateDialog(\`第\${curPage.value}页\`);
          }}
        >
          上一页
        </el-button>
        <el-button
          onClick={() => {
            curPage.value += 1;
            $ajmerUpdateDialog(\`第\${curPage.value}页\`);
          }}
        >
          下一页
        </el-button>
      </>
    ),
  });
}

// popconfirm 确认框
function onPopconfirmClick() {
  $ajmerAddDialog({
    width: "30%",
    title: "popconfirm确认框示例",
    popconfirm: { title: "是否确认修改当前数据" },
    contentRenderer: () => <p>点击右下方确定按钮看看效果吧</p>,
  });
}
function onBeforeCancelClick() {
  $ajmerAddDialog({
    title: "点击底部取消按钮的回调",
    contentRenderer: () => (
      <p>弹框内容-点击底部取消按钮的回调（会暂停弹框的关闭）</p>
    ),
    beforeCancel: (done, { options, index }) => {
      console.log(
        "%coptions, index===>>>: ",
        "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
        options,
        index
      );
      // done(); // 需要关闭把注释解开即可
    },
  });
}
function onBeforeSureClick() {
  $ajmerAddDialog({
    title: "点击底部确定按钮的回调",
    contentRenderer: () => (
      <p>
        弹框内容-点击底部确定按钮的回调（会暂停弹框的关闭，经常用于新增、修改弹框内容后调用接口）
      </p>
    ),
    beforeSure: (done, { options, index }) => {
      console.log(
        "%coptions, index===>>>: ",
        "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
        options,
        index
      );
      // done(); // 需要关闭把注释解开即可
    },
  });
}
// 结合Form表单（第一种方式，弹框关闭立刻恢复初始值）通过 props 属性接收子组件的 prop 并赋值
function onFormOneClick() {
  $ajmerAddDialog({
    width: "30%",
    title: "结合Form表单（第一种方式）",
    contentRenderer: () => forms,
    props: {
      // 赋默认值
      formInline: {
        user: "菜虚鲲",
        region: "浙江",
      },
    },
    closeCallBack: ({ options, index, args }) => {
      console.log(options, index, args);
      // options.props 是响应式的
      const { formInline } = options.props;
      const text = \`姓名：\${formInline.user} 城市：\${formInline.region}\`;
      if (args?.command === "cancel") {
        // 您点击了取消按钮
        console.log(\`您点击了取消按钮，当前表单数据为 \${text}\`);
      } else if (args?.command === "sure") {
        console.log(\`您点击了确定按钮，当前表单数据为 \${text}\`);
      } else {
        console.log(
          \`您点击了右上角关闭按钮或空白页或按下了esc键，当前表单数据为 \${text}\`
        );
      }
    },
  });
}

// 结合Form表单（第二种方式）h 渲染函数 https://cn.vuejs.org/api/render-function.html#h
const formInline = ref({
  user: "菜虚鲲",
  region: "浙江",
});
const resetFormInline = cloneDeep(formInline.value);
function onFormTwoClick() {
  $ajmerAddDialog({
    width: "30%",
    title: "结合Form表单（第二种方式）",
    contentRenderer: () =>
      h(forms, {
        formInline: formInline.value,
      }),
    closeCallBack: () => {
      console.log(
        \`当前表单数据为 姓名：\${formInline.value.user} 城市：\${formInline.value.region}\`
      );
      // 重置表单数据
      formInline.value = cloneDeep(resetFormInline);
    },
  });
}

// 结合Form表单（第三种方式）createVNode 渲染函数 https://cn.vuejs.org/guide/extras/render-function.html#creating-vnodes
const formThreeInline = ref({
  user: "菜虚鲲",
  region: "浙江",
});
const resetFormThreeInline = cloneDeep(formThreeInline.value);
function onFormThreeClick() {
  $ajmerAddDialog({
    width: "30%",
    title: "结合Form表单（第三种方式）",
    contentRenderer: () =>
      createVNode(forms, {
        formInline: formThreeInline.value,
      }),
    closeCallBack: () => {
      console.log(
        \`当前表单数据为 姓名：\${formThreeInline.value.user} 城市：\${formThreeInline.value.region}\`
      );
      // 重置表单数据
      formThreeInline.value = cloneDeep(resetFormThreeInline);
    },
  });
}

// 结合Form表单（第四种方式）使用jsx语法
// 需要注意的是如果 forms 没注册，这里 forms 注册了是因为上面 contentRenderer: () => forms、h(forms) 、createVNode(createVNode) 间接给注册了
// 如果只使用了jsx语法，如下 \`contentRenderer: () => <forms formInline={formFourInline.value} />\` 是不会给 forms 组件进行注册的，需要在 \`script\` 中任意位置（最好是末尾）写上 forms 即可
// 同理如果在 tsx 文件中，这么使用 \`contentRenderer: () => <forms formInline={formFourInline.value} />\`，也是不会给 forms 组件进行注册，需要在 return 中写上 forms
const formFourInline = ref({
  user: "菜虚鲲",
  region: "浙江",
});
const resetFormFourInline = cloneDeep(formFourInline.value);
function onFormFourClick() {
  $ajmerAddDialog({
    width: "30%",
    title: "结合Form表单（第四种方式）",
    contentRenderer: () => <forms formInline={formFourInline.value} />,
    closeCallBack: () => {
      console.log(
        \`当前表单数据为 姓名：\${formFourInline.value.user} 城市：\${formFourInline.value.region}\`
      );
      // 重置表单数据
      formFourInline.value = cloneDeep(resetFormFourInline);
    },
  });
}

// 子组件 prop 为 primitive 类型的 demo
const formPrimitiveParam = ref("Hello World");
const resetFormPrimitiveParam = ref(formPrimitiveParam.value);
function onFormPrimitiveFormClick() {
  $ajmerAddDialog({
    width: "30%",
    title: "子组件 prop 为 primitive 类型 demo",
    contentRenderer: () =>
      h(formPrimitive, {
        data: formPrimitiveParam.value,
        "onUpdate:data": (val) => (formPrimitiveParam.value = val),
      }),
    closeCallBack: () => {
      console.log(\`当前表单内容：\${formPrimitiveParam.value}\`);
      // 重置表单数据
      formPrimitiveParam.value = resetFormPrimitiveParam.value;
    },
  });
}
<\/script>
`,options:'{"customClass":"demoblock-custom"}'},{highlight:t(()=>k[0]||(k[0]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-card"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," shadow"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"never"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-space"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," wrap"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"onBaseClick"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> 基础用法 </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"onDraggableClick"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> 可拖拽 </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"onFullscreenClick"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> 全屏 </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"onFullscreenIconClick"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> 全屏按钮和全屏事件 </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"onModalClick"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> 无背景遮罩层 </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"onStyleClick"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> 自定义弹出位置 </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"onoOpenDelayClick"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> 延时2秒打开弹框 </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"onCloseDelayClick"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> 延时2秒关闭弹框 </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"onShowCloseClick"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        不显示右上角关闭按钮图标")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"onBeforeCloseClick"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> 禁止通过键盘ESC关闭 </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"onCloseOnClickModalClick"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        禁止通过点击modal关闭")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"onHideFooterClick"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> 隐藏底部取消、确定按钮 </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"onHeaderRendererClick"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> 自定义头部 </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"onFooterRendererClick"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> 自定义底部 </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"onFooterButtonsClick"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> 自定义底部按钮 </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"onOpenClick"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> 打开后的回调 </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"onCloseCallBackClick"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> 关闭后的回调 </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"onNestingClick"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> 嵌套的弹框 </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"onUpdateClick"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> 更改弹框自身属性值 </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"onPopconfirmClick"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">popconfirm确认框</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"onBeforeCancelClick"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        点击底部取消按钮的回调（会暂停弹框的关闭）")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"onBeforeSureClick"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        点击底部确定按钮的回调（会暂停弹框的关闭，经常用于新增、修改弹框内容后调用接口）")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-space"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-divider"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-space"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," wrap"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"onFormOneClick"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        结合Form表单（第一种方式）")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"onFormTwoClick"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        结合Form表单（第二种方式）")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"onFormThreeClick"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        结合Form表单（第三种方式）")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"onFormFourClick"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        结合Form表单（第四种方式）")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"onFormPrimitiveFormClick"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        子组件 prop 为 primitive 类型")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-space"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-card"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"tsx"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'import { cloneDeep, debounce } from "ajmer-tools";')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'import { ref, h, createVNode } from "vue";')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'import forms from "../../../../src/components/AjmerDialog/src/form.vue";')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'import formPrimitive from "../../../../src/components/AjmerDialog/src/formPrimitive.vue";')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'import AjmerDialog from "../../../../src/components/AjmerDialog/index.js";')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"AjmerDialog();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"let {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerAddDialog,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerCloseDialog,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerUpdateDialog,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerCloseAllDialog,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"} = window;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"function onBaseClick() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    title: "基础用法",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    contentRenderer: () => <p>弹框内容-基础用法</p>, // jsx 语法 （注意在.vue文件启用jsx语法，需要在script开启lang="tsx"）')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"function onDraggableClick() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    title: "可拖拽",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    draggable: true,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    contentRenderer: () => h("p", "弹框内容-可拖拽"), // h 渲染函数 https://cn.vuejs.org/api/render-function.html#h')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"function onFullscreenClick() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    title: "全屏",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fullscreen: true,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    contentRenderer: () => createVNode("p", null, "弹框内容-全屏"), // createVNode 渲染函数 https://cn.vuejs.org/guide/extras/render-function.html#creating-vnodes')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"function onFullscreenIconClick() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    title: "全屏按钮和全屏事件",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fullscreenIcon: true,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fullscreenCallBack: ({ options }) => {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'      console.log(options.fullscreen ? "全屏" : "非全屏");')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    contentRenderer: () => <p>弹框内容-全屏按钮和全屏事件</p>,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"function onModalClick() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    title: "无背景遮罩层",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    modal: false,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    contentRenderer: () => <p>弹框内容-无背景遮罩层</p>,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"function onStyleClick() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    title: "自定义弹出位置",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    top: "60vh",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    style: { marginRight: "20px" },')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    contentRenderer: () => <p>弹框内容-自定义弹出位置</p>,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"// 添加 600ms 防抖")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"const onoOpenDelayClick = debounce(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  () =>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'      title: "延时2秒打开弹框",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      openDelay: 2000 - 600,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      contentRenderer: () => <p>弹框内容-延时2秒打开弹框</p>,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  600")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"function onCloseDelayClick() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    title: "延时2秒关闭弹框",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    closeDelay: 2000,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    contentRenderer: () => <p>弹框内容-延时2秒关闭弹框</p>,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"function onShowCloseClick() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    title: "不显示右上角关闭按钮图标",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    showClose: false,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    contentRenderer: () => <p>弹框内容-不显示右上角关闭按钮图标</p>,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"function onBeforeCloseClick() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    title: "禁止通过键盘ESC关闭",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    closeOnPressEscape: false,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    contentRenderer: () => <p>弹框内容-禁止通过键盘ESC关闭</p>,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"function onCloseOnClickModalClick() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    title: "禁止通过点击modal关闭",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    closeOnClickModal: false,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    contentRenderer: () => <p>弹框内容-禁止通过点击modal关闭</p>,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"function onHideFooterClick() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    title: "隐藏底部取消、确定按钮",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    hideFooter: true,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    contentRenderer: () => <p>弹框内容-隐藏底部取消、确定按钮</p>,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"function onHeaderRendererClick() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    title: "自定义头部",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    showClose: false,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    headerRenderer: ({ close, titleId, titleClass }) => (")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      // jsx 语法")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'      <div style="display: flex;flex-direction: row;justify-content: space-between;">')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <h4 id={titleId} class={titleClass}>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          自定义头部")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        </h4>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'        <el-button type="danger" onClick={close}>')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          关闭")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        </el-button>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      </div>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    contentRenderer: () => <p>弹框内容-自定义头部</p>,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"function onFooterRendererClick() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    title: "自定义底部",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    footerRenderer: ({ options, index }) => (")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <el-button")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'        onClick={() => $ajmerCloseDialog(options, index, { command: "sure" })}')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      >")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        {options.title}-{index}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      </el-button>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    contentRenderer: () => <p>弹框内容-自定义底部</p>,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    // 弹框关闭后回调")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    closeCallBack: ({ options, index, args }) => {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      console.log(options, index, args);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"function onFooterButtonsClick() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    title: "自定义底部按钮",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    footerButtons: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'        label: "按钮1",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'        size: "small",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'        type: "success",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        btnClick: ({ dialog: { options, index }, button }) => {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          console.log(options, index, button);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          $ajmerCloseDialog(options, index);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'        label: "按钮2",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        text: true,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        bg: true,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        btnClick: ({ dialog: { options, index }, button }) => {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          console.log(options, index, button);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          $ajmerCloseDialog(options, index);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'        label: "按钮3",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'        size: "large",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'        type: "warning",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        btnClick: ({ dialog: { options, index }, button }) => {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          console.log(options, index, button);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          $ajmerCloseDialog(options, index);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    contentRenderer: () => <p>弹框内容-自定义底部按钮</p>,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"function onOpenClick() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    title: "打开后的回调",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    open: ({ options, index }) => {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      console.log(options, index);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    contentRenderer: () => <p>弹框内容-打开后的回调</p>,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"function onCloseCallBackClick() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    title: "关闭后的回调",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    closeCallBack: ({ options, index, args }) => {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      console.log(options, index, args);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'      let text = "";')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'      if (args?.command === "cancel") {')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'        text = "您点击了取消按钮";')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'      } else if (args?.command === "sure") {')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'        text = "您点击了确定按钮";')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      } else {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'        text = "您点击了右上角关闭按钮或空白页或按下了esc键";')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      console.log(text);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    contentRenderer: () => <p>弹框内容-关闭后的回调</p>,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"// 这里为了演示方便，使用了嵌套写法，实际情况下最好把 $ajmerAddDialog 函数抽出来 套娃不可取")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"function onNestingClick() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    title: "嵌套的弹框",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    contentRenderer: ({ index }) => (")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <el-button")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        onClick={() =>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            title: `第${index + 1}个子弹框`,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'            width: "40%",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            contentRenderer: ({ index }) => (")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"              <el-button")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                onClick={() =>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                  $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                    title: `第${index + 1}个子弹框`,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'                    width: "30%",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                    contentRenderer: () => (")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                      <>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                        <el-button round onClick={() => $ajmerCloseAllDialog()}>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                          哎呦，你干嘛，赶快关闭所有弹框")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                        </el-button>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                      </>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                    ),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                  })")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"              >")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                点击打开第{index + 1}个子弹框")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"              </el-button>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            ),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          })")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      >")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        点击打开第{index + 1}个子弹框")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      </el-button>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"// 满足在 contentRenderer 内容区更改弹框自身属性值的场景")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"function onUpdateClick() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  const curPage = ref(1);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    title: `第${curPage.value}页`,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    contentRenderer: () => (")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <el-button")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          disabled={curPage.value > 1 ? false : true}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          onClick={() => {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            curPage.value -= 1;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            $ajmerUpdateDialog(`第${curPage.value}页`);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          }}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        >")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          上一页")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        </el-button>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <el-button")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          onClick={() => {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            curPage.value += 1;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            $ajmerUpdateDialog(`第${curPage.value}页`);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          }}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        >")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          下一页")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        </el-button>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      </>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"// popconfirm 确认框")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"function onPopconfirmClick() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    width: "30%",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    title: "popconfirm确认框示例",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    popconfirm: { title: "是否确认修改当前数据" },')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    contentRenderer: () => <p>点击右下方确定按钮看看效果吧</p>,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"function onBeforeCancelClick() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    title: "点击底部取消按钮的回调",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    contentRenderer: () => (")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <p>弹框内容-点击底部取消按钮的回调（会暂停弹框的关闭）</p>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    beforeCancel: (done, { options, index }) => {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      console.log(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'        "%coptions, index===>>>: ",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'        "color: MidnightBlue; background: Aquamarine; font-size: 20px;",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        options,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        index")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      );")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      // done(); // 需要关闭把注释解开即可")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"function onBeforeSureClick() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    title: "点击底部确定按钮的回调",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    contentRenderer: () => (")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <p>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        弹框内容-点击底部确定按钮的回调（会暂停弹框的关闭，经常用于新增、修改弹框内容后调用接口）")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      </p>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    beforeSure: (done, { options, index }) => {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      console.log(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'        "%coptions, index===>>>: ",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'        "color: MidnightBlue; background: Aquamarine; font-size: 20px;",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        options,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        index")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      );")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      // done(); // 需要关闭把注释解开即可")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"// 结合Form表单（第一种方式，弹框关闭立刻恢复初始值）通过 props 属性接收子组件的 prop 并赋值")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"function onFormOneClick() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    width: "30%",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    title: "结合Form表单（第一种方式）",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    contentRenderer: () => forms,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    props: {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      // 赋默认值")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      formInline: {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'        user: "菜虚鲲",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'        region: "浙江",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    closeCallBack: ({ options, index, args }) => {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      console.log(options, index, args);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      // options.props 是响应式的")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      const { formInline } = options.props;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      const text = `姓名：${formInline.user} 城市：${formInline.region}`;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'      if (args?.command === "cancel") {')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        // 您点击了取消按钮")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        console.log(`您点击了取消按钮，当前表单数据为 ${text}`);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'      } else if (args?.command === "sure") {')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        console.log(`您点击了确定按钮，当前表单数据为 ${text}`);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      } else {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        console.log(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          `您点击了右上角关闭按钮或空白页或按下了esc键，当前表单数据为 ${text}`")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        );")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"// 结合Form表单（第二种方式）h 渲染函数 https://cn.vuejs.org/api/render-function.html#h")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"const formInline = ref({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'  user: "菜虚鲲",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'  region: "浙江",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"});")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"const resetFormInline = cloneDeep(formInline.value);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"function onFormTwoClick() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    width: "30%",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    title: "结合Form表单（第二种方式）",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    contentRenderer: () =>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      h(forms, {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        formInline: formInline.value,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      }),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    closeCallBack: () => {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      console.log(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        `当前表单数据为 姓名：${formInline.value.user} 城市：${formInline.value.region}`")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      );")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      // 重置表单数据")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      formInline.value = cloneDeep(resetFormInline);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"// 结合Form表单（第三种方式）createVNode 渲染函数 https://cn.vuejs.org/guide/extras/render-function.html#creating-vnodes")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"const formThreeInline = ref({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'  user: "菜虚鲲",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'  region: "浙江",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"});")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"const resetFormThreeInline = cloneDeep(formThreeInline.value);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"function onFormThreeClick() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    width: "30%",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    title: "结合Form表单（第三种方式）",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    contentRenderer: () =>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      createVNode(forms, {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        formInline: formThreeInline.value,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      }),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    closeCallBack: () => {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      console.log(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        `当前表单数据为 姓名：${formThreeInline.value.user} 城市：${formThreeInline.value.region}`")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      );")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      // 重置表单数据")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      formThreeInline.value = cloneDeep(resetFormThreeInline);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"// 结合Form表单（第四种方式）使用jsx语法")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"// 需要注意的是如果 forms 没注册，这里 forms 注册了是因为上面 contentRenderer: () => forms、h(forms) 、createVNode(createVNode) 间接给注册了")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"// 如果只使用了jsx语法，如下 `contentRenderer: () => <forms formInline={formFourInline.value} />` 是不会给 forms 组件进行注册的，需要在 `script` 中任意位置（最好是末尾）写上 forms 即可")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"// 同理如果在 tsx 文件中，这么使用 `contentRenderer: () => <forms formInline={formFourInline.value} />`，也是不会给 forms 组件进行注册，需要在 return 中写上 forms")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"const formFourInline = ref({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'  user: "菜虚鲲",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'  region: "浙江",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"});")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"const resetFormFourInline = cloneDeep(formFourInline.value);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"function onFormFourClick() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    width: "30%",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    title: "结合Form表单（第四种方式）",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    contentRenderer: () => <forms formInline={formFourInline.value} />,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    closeCallBack: () => {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      console.log(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        `当前表单数据为 姓名：${formFourInline.value.user} 城市：${formFourInline.value.region}`")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      );")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      // 重置表单数据")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      formFourInline.value = cloneDeep(resetFormFourInline);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"// 子组件 prop 为 primitive 类型的 demo")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'const formPrimitiveParam = ref("Hello World");')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"const resetFormPrimitiveParam = ref(formPrimitiveParam.value);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"function onFormPrimitiveFormClick() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  $ajmerAddDialog({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    width: "30%",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    title: "子组件 prop 为 primitive 类型 demo",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    contentRenderer: () =>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      h(formPrimitive, {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        data: formPrimitiveParam.value,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'        "onUpdate:data": (val) => (formPrimitiveParam.value = val),')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      }),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    closeCallBack: () => {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      console.log(`当前表单内容：${formPrimitiveParam.value}`);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      // 重置表单数据")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      formPrimitiveParam.value = resetFormPrimitiveParam.value;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),default:t(()=>[e(wi)]),_:1}),k[7]||(k[7]=vi('<h2 id="外露方法" tabindex="-1">外露方法 <a class="header-anchor" href="#外露方法" aria-label="Permalink to &quot;外露方法&quot;">​</a></h2><h3 id="adddialog" tabindex="-1">addDialog <a class="header-anchor" href="#adddialog" aria-label="Permalink to &quot;addDialog&quot;">​</a></h3><blockquote><p>打开弹框 <br><code>@param-one</code> <code>{visible:true,title:&#39;弹框名称&#39;}</code></p></blockquote><h3 id="updatedialog" tabindex="-1">updateDialog <a class="header-anchor" href="#updatedialog" aria-label="Permalink to &quot;updateDialog&quot;">​</a></h3><blockquote><p>更改弹框自身属性值 <br><code>@param-one</code> 属性值<br><code>@param-two</code> 属性，默认<code>title</code><br><code>@param-three</code> 弹框索引 默认<code>0</code><br><code>@returns</code> 无返回值</p></blockquote><h3 id="closealldialog" tabindex="-1">closeAllDialog <a class="header-anchor" href="#closealldialog" aria-label="Permalink to &quot;closeAllDialog&quot;">​</a></h3><blockquote><p>关闭所有弹框 <br><code>@returns</code> 无返回值</p></blockquote><h3 id="closedialog" tabindex="-1">closeDialog <a class="header-anchor" href="#closedialog" aria-label="Permalink to &quot;closeDialog&quot;">​</a></h3><blockquote><p>关闭单个弹框 <br><code>@returns</code> 无返回值</p></blockquote>',9))])}}});export{Vi as __pageData,Ti as default};
