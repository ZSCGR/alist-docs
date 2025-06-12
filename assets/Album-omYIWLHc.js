import{N as ee}from"./Select-DnFS4cjh.js";import{B as re}from"./Button-BmV_rm9T.js";import{s as r,p as A,X as oe,Y as te,q as N,$ as le,d as g,h as k,y as ne,z as I,am as ae,U as de,c as V,D as S,B as se,k as ie,r as B,b as _,o as v,e as n,f as a,g as E,j as x,u as o,N as U,i as m,t as P,l as ce,F as ue,an as be}from"./app-D0kw2imx.js";import{N as $}from"./Input-BL-6jE_H.js";import{N as L}from"./Alert-iPJdJXhU.js";import{_ as pe}from"./plugin-vue_export-helper-DlAUqK2U.js";const ve=r([A("table",`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[r("th",`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[r("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),r("td",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[r("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),N("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[r("tr",[r("&:last-child",[r("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),N("single-line",[r("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),r("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),N("single-column",[r("tr",[r("&:not(:last-child)",[r("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),N("striped",[r("tr:nth-of-type(even)",[r("td","background-color: var(--n-td-color-striped)")])]),le("bottom-bordered",[r("tr",[r("&:last-child",[r("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),oe(A("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[r("th",`
 background-color: var(--n-th-color-modal);
 `),r("td",`
 background-color: var(--n-td-color-modal);
 `)])),te(A("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[r("th",`
 background-color: var(--n-th-color-popover);
 `),r("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),me=Object.assign(Object.assign({},I.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),ge=g({name:"Table",props:me,setup(i){const{mergedClsPrefixRef:d,inlineThemeDisabled:l,mergedRtlRef:h}=ne(i),p=I("Table","-table",ve,ae,i,d),f=de("Table",h,d),c=V(()=>{const{size:b}=i,{self:{borderColor:R,tdColor:s,tdColorModal:e,tdColorPopover:y,thColor:z,thColorModal:C,thColorPopover:T,thTextColor:w,tdTextColor:t,borderRadius:M,thFontWeight:O,lineHeight:H,borderColorModal:q,borderColorPopover:G,tdColorStriped:K,tdColorStripedModal:W,tdColorStripedPopover:X,[S("fontSize",b)]:Y,[S("tdPadding",b)]:J,[S("thPadding",b)]:Q},common:{cubicBezierEaseInOut:Z}}=p.value;return{"--n-bezier":Z,"--n-td-color":s,"--n-td-color-modal":e,"--n-td-color-popover":y,"--n-td-text-color":t,"--n-border-color":R,"--n-border-color-modal":q,"--n-border-color-popover":G,"--n-border-radius":M,"--n-font-size":Y,"--n-th-color":z,"--n-th-color-modal":C,"--n-th-color-popover":T,"--n-th-font-weight":O,"--n-th-text-color":w,"--n-line-height":H,"--n-td-padding":J,"--n-th-padding":Q,"--n-td-color-striped":K,"--n-td-color-striped-modal":W,"--n-td-color-striped-popover":X}}),u=l?se("table",V(()=>i.size[0]),c,i):void 0;return{rtlEnabled:f,mergedClsPrefix:d,cssVars:l?void 0:c,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){var i;const{mergedClsPrefix:d}=this;return(i=this.onRender)===null||i===void 0||i.call(this),k("table",{class:[`${d}-table`,this.themeClass,{[`${d}-table--rtl`]:this.rtlEnabled,[`${d}-table--bottom-bordered`]:this.bottomBordered,[`${d}-table--bordered`]:this.bordered,[`${d}-table--single-line`]:this.singleLine,[`${d}-table--single-column`]:this.singleColumn,[`${d}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),he=g({name:"Tbody",render(){return k("tbody",null,this.$slots)}}),j=g({name:"Td",render(){return k("td",null,this.$slots)}}),D=g({name:"Th",render(){return k("th",null,this.$slots)}}),fe=g({name:"Thead",render(){return k("thead",null,this.$slots)}}),F=g({name:"Tr",render(){return k("tr",null,this.$slots)}}),_e=g({__name:"Album",setup(i){const d=new URL(window.location.href),l=ie({client_id:"",client_secret:"",access_token:d.searchParams.get("access_token")||"",refresh_token:""}),h=B("access_token"),p=B(),f=B();let c=B([]);const u=async()=>{const s=new URLSearchParams;s.append("client_id",l.client_id),s.append("client_secret",l.client_secret),s.append("grant_type","refresh_token"),s.append("refresh_token",l.refresh_token),fetch("https://www.googleapis.com/oauth2/v4/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:s}).then(e=>e.json()).then(e=>{console.log(e),p.value=e,(typeof e.error>"u"||!e.error)&&(l.access_token=e.access_token,typeof e.access_token<"u"&&e.access_token&&b(null))})},b=async s=>{s==null&&(s=""),fetch(`https://photoslibrary.googleapis.com/v1/albums?pageToken=${s}&pageSize=50`,{method:"GET",headers:{Authorization:`Bearer ${l.access_token}`}}).then(e=>e.json()).then(e=>{console.log(e),f.value=e,(typeof e.error>"u"||!e.error)&&(c.value=c.value.concat(e.albums),console.log(c),typeof e.nextPageToken<"u"&&e.nextPageToken&&b(e.nextPageToken))})};l.access_token&&b(null);function R(){c.value=[],h.value=="refresh_token"?u():b(null)}return(s,e)=>(v(),_(o(U),{vertical:"",size:"large"},{default:n(()=>{var y,z,C,T,w;return[a(o(ee),{value:h.value,"onUpdate:value":e[0]||(e[0]=t=>h.value=t),size:"large",options:[{label:"Access token",value:"access_token"},{label:"Client & Refresh token",value:"refresh_token"}]},null,8,["value"]),h.value=="refresh_token"?(v(),_(o(U),{key:0,vertical:"",size:"large"},{default:n(()=>[e[5]||(e[5]=x("h4",null,"client_id",-1)),a(o($),{size:"large",value:l.client_id,"onUpdate:value":e[1]||(e[1]=t=>l.client_id=t)},null,8,["value"]),e[6]||(e[6]=x("h4",null,"client_secret",-1)),a(o($),{size:"large",value:l.client_secret,"onUpdate:value":e[2]||(e[2]=t=>l.client_secret=t)},null,8,["value"]),e[7]||(e[7]=x("h4",null,"refresh_token",-1)),a(o($),{size:"large",value:l.refresh_token,"onUpdate:value":e[3]||(e[3]=t=>l.refresh_token=t)},null,8,["value"])]),_:1,__:[5,6,7]})):(v(),_(o(U),{key:1,vertical:"",size:"large"},{default:n(()=>[e[8]||(e[8]=x("h4",null,"access_token",-1)),a(o($),{size:"large",value:l.access_token,"onUpdate:value":e[4]||(e[4]=t=>l.access_token=t)},null,8,["value"])]),_:1,__:[8]})),a(o(re),{size:"large",type:"primary",block:"",onClick:R},{default:n(()=>e[9]||(e[9]=[m("Fetch Album")])),_:1,__:[9]}),(y=p.value)!=null&&y.error||(z=p.value)!=null&&z.error_description?(v(),_(o(L),{key:2,title:(C=p.value)==null?void 0:C.error,type:"error"},{default:n(()=>{var t;return[m(P((t=p.value)==null?void 0:t.error_description),1)]}),_:1},8,["title"])):E("v-if",!0),(T=f.value)!=null&&T.error?(v(),_(o(L),{key:3,title:(w=f.value)==null?void 0:w.error.status,type:"error"},{default:n(()=>{var t;return[m(P((t=f.value)==null?void 0:t.error.message),1)]}),_:1},8,["title"])):E("v-if",!0),e[12]||(e[12]=x("h4",null,"Albums",-1)),a(o(ge),{size:"large"},{default:n(()=>[a(o(fe),null,{default:n(()=>[a(o(F),null,{default:n(()=>[a(o(D),null,{default:n(()=>e[10]||(e[10]=[m("Album Title")])),_:1,__:[10]}),a(o(D),null,{default:n(()=>e[11]||(e[11]=[m("Album ID")])),_:1,__:[11]})]),_:1})]),_:1}),a(o(he),null,{default:n(()=>[(v(!0),ce(ue,null,be(o(c),(t,M)=>(v(),_(o(F),null,{default:n(()=>[a(o(j),null,{default:n(()=>[m(P(t.title),1)]),_:2},1024),a(o(j),null,{default:n(()=>[m(P(t.id),1)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]}),_:1,__:[12]}))}}),we=pe(_e,[["__scopeId","data-v-1f1deabd"]]);export{we as A};
