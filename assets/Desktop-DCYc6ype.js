import{b as Be,B as ue}from"./Button-BmV_rm9T.js";import{k as Te,ax as Fe,af as je,a as Me,w as ve,r as F,p as N,$ as ne,q as k,s as R,K,d as A,h as u,y as ke,ae as Ee,U as Le,a1 as H,a3 as me,ay as te,a5 as W,x as Se,az as qe,c as y,aa as oe,F as He,v as We,a2 as O,z as _e,aA as Ge,D as E,B as Ue,aB as we,b as Ve,o as Xe,e as L,f as q,u as z,N as ge,i as ce,t as pe}from"./app-D0kw2imx.js";import{B as Je,V as Qe,a as Ye,r as Ze,N as eo,p as Ne}from"./Popover-C6NGK72R.js";import{h as oo,p as Pe,m as no,d as to,a as ro,k as io}from"./fade-in-scale-up.cssr-BPs6vVH2.js";import{N as ao}from"./Icon-5wnFnDw9.js";import{C as lo}from"./ChevronRight-BewVZrsv.js";import{h as ye}from"./happens-in-CM8LO42l.js";import{a as Z,o as ee,X as so}from"./browser-DBuENPbc.js";import{u as uo}from"./use-merged-state-DZpakwWa.js";import{c as co}from"./create-Co-OdYMQ.js";import{c as fe}from"./resolve-slot-C_qWaqz4.js";import{N as po}from"./Image-C4NwYRR4.js";import{_ as fo}from"./plugin-vue_export-helper-DlAUqK2U.js";function ho(e={},o){const t=Te({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:i}=e,n=a=>{switch(a.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}r!==void 0&&Object.keys(r).forEach(x=>{if(x!==a.key)return;const v=r[x];if(typeof v=="function")v(a);else{const{stop:S=!1,prevent:P=!1}=v;S&&a.stopPropagation(),P&&a.preventDefault(),v.handler(a)}})},c=a=>{switch(a.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}i!==void 0&&Object.keys(i).forEach(x=>{if(x!==a.key)return;const v=i[x];if(typeof v=="function")v(a);else{const{stop:S=!1,prevent:P=!1}=v;S&&a.stopPropagation(),P&&a.preventDefault(),v.handler(a)}})},l=()=>{(o===void 0||o.value)&&(ee("keydown",document,n),ee("keyup",document,c)),o!==void 0&&ve(o,a=>{a?(ee("keydown",document,n),ee("keyup",document,c)):(Z("keydown",document,n),Z("keyup",document,c))})};return oo()?(Fe(l),je(()=>{(o===void 0||o.value)&&(Z("keydown",document,n),Z("keyup",document,c))})):l(),Me(t)}function vo(e,o,t){const r=F(e.value);let i=null;return ve(e,n=>{i!==null&&window.clearTimeout(i),n===!0?t&&!t.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},o):r.value=!1}),r}function mo(e){return o=>{o?e.value=o.$el:e.value=null}}const h="0!important",Re="-1px!important";function V(e){return k(`${e}-type`,[R("& +",[N("button",{},[k(`${e}-type`,[K("border",{borderLeftWidth:h}),K("state-border",{left:Re})])])])])}function X(e){return k(`${e}-type`,[R("& +",[N("button",[k(`${e}-type`,[K("border",{borderTopWidth:h}),K("state-border",{top:Re})])])])])}const bo=N("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[ne("vertical",{flexDirection:"row"},[ne("rtl",[N("button",[R("&:first-child:not(:last-child)",`
 margin-right: ${h};
 border-top-right-radius: ${h};
 border-bottom-right-radius: ${h};
 `),R("&:last-child:not(:first-child)",`
 margin-left: ${h};
 border-top-left-radius: ${h};
 border-bottom-left-radius: ${h};
 `),R("&:not(:first-child):not(:last-child)",`
 margin-left: ${h};
 margin-right: ${h};
 border-radius: ${h};
 `),V("default"),k("ghost",[V("primary"),V("info"),V("success"),V("warning"),V("error")])])])]),k("vertical",{flexDirection:"column"},[N("button",[R("&:first-child:not(:last-child)",`
 margin-bottom: ${h};
 margin-left: ${h};
 margin-right: ${h};
 border-bottom-left-radius: ${h};
 border-bottom-right-radius: ${h};
 `),R("&:last-child:not(:first-child)",`
 margin-top: ${h};
 margin-left: ${h};
 margin-right: ${h};
 border-top-left-radius: ${h};
 border-top-right-radius: ${h};
 `),R("&:not(:first-child):not(:last-child)",`
 margin: ${h};
 border-radius: ${h};
 `),X("default"),k("ghost",[X("primary"),X("info"),X("success"),X("warning"),X("error")])])])]),wo={size:{type:String,default:void 0},vertical:Boolean},go=A({name:"ButtonGroup",props:wo,setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:t}=ke(e);return Ee("-button-group",bo,o),H(Be,e),{rtlEnabled:Le("ButtonGroup",t,o),mergedClsPrefix:o}},render(){const{mergedClsPrefix:e}=this;return u("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}}),be=me("n-dropdown-menu"),re=me("n-dropdown"),xe=me("n-dropdown-option"),$e=A({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return u("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),yo=A({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=W(be),{renderLabelRef:t,labelFieldRef:r,nodePropsRef:i,renderOptionRef:n}=W(re);return{labelField:r,showIcon:e,hasSubmenu:o,renderLabel:t,nodeProps:i,renderOption:n}},render(){var e;const{clsPrefix:o,hasSubmenu:t,showIcon:r,nodeProps:i,renderLabel:n,renderOption:c}=this,{rawNode:l}=this.tmNode,a=u("div",Object.assign({class:`${o}-dropdown-option`},i==null?void 0:i(l)),u("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},u("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,r&&`${o}-dropdown-option-body__prefix--show-icon`]},te(l.icon)),u("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},n?n(l):te((e=l.title)!==null&&e!==void 0?e:l[this.labelField])),u("div",{class:[`${o}-dropdown-option-body__suffix`,t&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return c?c({node:a,option:l}):a}});function he(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function xo(e){return e.type==="group"}function Ie(e){return e.type==="divider"}function ko(e){return e.type==="render"}const Ke=A({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=W(re),{hoverKeyRef:t,keyboardKeyRef:r,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:n,activeKeyPathRef:c,animatedRef:l,mergedShowRef:a,renderLabelRef:x,renderIconRef:v,labelFieldRef:S,childrenFieldRef:P,renderOptionRef:C,nodePropsRef:b,menuPropsRef:$}=o,_=W(xe,null),B=W(be),J=W(Pe),ie=y(()=>e.tmNode.rawNode),Q=y(()=>{const{value:s}=P;return he(e.tmNode.rawNode,s)}),ae=y(()=>{const{disabled:s}=e.tmNode;return s}),de=y(()=>{if(!Q.value)return!1;const{key:s,disabled:g}=e.tmNode;if(g)return!1;const{value:D}=t,{value:j}=r,{value:se}=i,{value:M}=n;return D!==null?M.includes(s):j!==null?M.includes(s)&&M[M.length-1]!==s:se!==null?M.includes(s):!1}),le=y(()=>r.value===null&&!l.value),Y=vo(de,300,le),G=y(()=>!!(_!=null&&_.enteringSubmenuRef.value)),U=F(!1);H(xe,{enteringSubmenuRef:U});function T(){U.value=!0}function d(){U.value=!1}function w(){const{parentKey:s,tmNode:g}=e;g.disabled||a.value&&(i.value=s,r.value=null,t.value=g.key)}function f(){const{tmNode:s}=e;s.disabled||a.value&&t.value!==s.key&&w()}function p(s){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:g}=s;g&&!ye({target:g},"dropdownOption")&&!ye({target:g},"scrollbarRail")&&(t.value=null)}function I(){const{value:s}=Q,{tmNode:g}=e;a.value&&!s&&!g.disabled&&(o.doSelect(g.key,g.rawNode),o.doUpdateShow(!1))}return{labelField:S,renderLabel:x,renderIcon:v,siblingHasIcon:B.showIconRef,siblingHasSubmenu:B.hasSubmenuRef,menuProps:$,popoverBody:J,animated:l,mergedShowSubmenu:y(()=>Y.value&&!G.value),rawNode:ie,hasSubmenu:Q,pending:oe(()=>{const{value:s}=n,{key:g}=e.tmNode;return s.includes(g)}),childActive:oe(()=>{const{value:s}=c,{key:g}=e.tmNode,D=s.findIndex(j=>g===j);return D===-1?!1:D<s.length-1}),active:oe(()=>{const{value:s}=c,{key:g}=e.tmNode,D=s.findIndex(j=>g===j);return D===-1?!1:D===s.length-1}),mergedDisabled:ae,renderOption:C,nodeProps:b,handleClick:I,handleMouseMove:f,handleMouseEnter:w,handleMouseLeave:p,handleSubmenuBeforeEnter:T,handleSubmenuAfterEnter:d}},render(){var e,o;const{animated:t,rawNode:r,mergedShowSubmenu:i,clsPrefix:n,siblingHasIcon:c,siblingHasSubmenu:l,renderLabel:a,renderIcon:x,renderOption:v,nodeProps:S,props:P,scrollable:C}=this;let b=null;if(i){const J=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);b=u(Ce,Object.assign({},J,{clsPrefix:n,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const $={class:[`${n}-dropdown-option-body`,this.pending&&`${n}-dropdown-option-body--pending`,this.active&&`${n}-dropdown-option-body--active`,this.childActive&&`${n}-dropdown-option-body--child-active`,this.mergedDisabled&&`${n}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},_=S==null?void 0:S(r),B=u("div",Object.assign({class:[`${n}-dropdown-option`,_==null?void 0:_.class],"data-dropdown-option":!0},_),u("div",Se($,P),[u("div",{class:[`${n}-dropdown-option-body__prefix`,c&&`${n}-dropdown-option-body__prefix--show-icon`]},[x?x(r):te(r.icon)]),u("div",{"data-dropdown-option":!0,class:`${n}-dropdown-option-body__label`},a?a(r):te((o=r[this.labelField])!==null&&o!==void 0?o:r.title)),u("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__suffix`,l&&`${n}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?u(ao,null,{default:()=>u(lo,null)}):null)]),this.hasSubmenu?u(Je,null,{default:()=>[u(Qe,null,{default:()=>u("div",{class:`${n}-dropdown-offset-container`},u(Ye,{show:this.mergedShowSubmenu,placement:this.placement,to:C&&this.popoverBody||void 0,teleportDisabled:!C},{default:()=>u("div",{class:`${n}-dropdown-menu-wrapper`},t?u(qe,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>b}):b)}))})]}):null);return v?v({node:B,option:r}):B}}),So=A({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:t}=this,{children:r}=e;return u(He,null,u(yo,{clsPrefix:t,tmNode:e,key:e.key}),r==null?void 0:r.map(i=>{const{rawNode:n}=i;return n.show===!1?null:Ie(n)?u($e,{clsPrefix:t,key:i.key}):i.isGroup?(We("dropdown","`group` node is not allowed to be put in `group` node."),null):u(Ke,{clsPrefix:t,tmNode:i,parentKey:o,key:i.key})}))}}),_o=A({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return u("div",o,[e==null?void 0:e()])}}),Ce=A({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:t}=W(re);H(be,{showIconRef:y(()=>{const i=o.value;return e.tmNodes.some(n=>{var c;if(n.isGroup)return(c=n.children)===null||c===void 0?void 0:c.some(({rawNode:a})=>i?i(a):a.icon);const{rawNode:l}=n;return i?i(l):l.icon})}),hasSubmenuRef:y(()=>{const{value:i}=t;return e.tmNodes.some(n=>{var c;if(n.isGroup)return(c=n.children)===null||c===void 0?void 0:c.some(({rawNode:a})=>he(a,i));const{rawNode:l}=n;return he(l,i)})})});const r=F(null);return H(no,null),H(to,null),H(Pe,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:o,scrollable:t}=this,r=this.tmNodes.map(i=>{const{rawNode:n}=i;return n.show===!1?null:ko(n)?u(_o,{tmNode:i,key:i.key}):Ie(n)?u($e,{clsPrefix:o,key:i.key}):xo(n)?u(So,{clsPrefix:o,tmNode:i,parentKey:e,key:i.key}):u(Ke,{clsPrefix:o,tmNode:i,parentKey:e,key:i.key,props:n.props,scrollable:t})});return u("div",{class:[`${o}-dropdown-menu`,t&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},t?u(so,{contentClass:`${o}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Ze({clsPrefix:o,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),No=N("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[ro(),N("dropdown-option",`
 position: relative;
 `,[R("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[R("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),N("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[R("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ne("disabled",[k("pending",`
 color: var(--n-option-text-color-hover);
 `,[K("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),R("&::before","background-color: var(--n-option-color-hover);")]),k("active",`
 color: var(--n-option-text-color-active);
 `,[K("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),R("&::before","background-color: var(--n-option-color-active);")]),k("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[K("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),k("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),k("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[K("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[k("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),K("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[k("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),N("icon",`
 font-size: var(--n-option-icon-size);
 `)]),K("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),K("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[k("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),N("icon",`
 font-size: var(--n-option-icon-size);
 `)]),N("dropdown-menu","pointer-events: all;")]),N("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),N("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),N("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),R(">",[N("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ne("scrollable",`
 padding: var(--n-padding);
 `),k("scrollable",[K("content",`
 padding: var(--n-padding);
 `)])]),Po={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Ro=Object.keys(Ne),$o=Object.assign(Object.assign(Object.assign({},Ne),Po),_e.props),Io=A({name:"Dropdown",inheritAttrs:!1,props:$o,setup(e){const o=F(!1),t=uo(O(e,"show"),o),r=y(()=>{const{keyField:d,childrenField:w}=e;return co(e.options,{getKey(f){return f[d]},getDisabled(f){return f.disabled===!0},getIgnored(f){return f.type==="divider"||f.type==="render"},getChildren(f){return f[w]}})}),i=y(()=>r.value.treeNodes),n=F(null),c=F(null),l=F(null),a=y(()=>{var d,w,f;return(f=(w=(d=n.value)!==null&&d!==void 0?d:c.value)!==null&&w!==void 0?w:l.value)!==null&&f!==void 0?f:null}),x=y(()=>r.value.getPath(a.value).keyPath),v=y(()=>r.value.getPath(e.value).keyPath),S=oe(()=>e.keyboard&&t.value);ho({keydown:{ArrowUp:{prevent:!0,handler:ae},ArrowRight:{prevent:!0,handler:Q},ArrowDown:{prevent:!0,handler:de},ArrowLeft:{prevent:!0,handler:ie},Enter:{prevent:!0,handler:le},Escape:J}},S);const{mergedClsPrefixRef:P,inlineThemeDisabled:C}=ke(e),b=_e("Dropdown","-dropdown",No,Ge,e,P);H(re,{labelFieldRef:O(e,"labelField"),childrenFieldRef:O(e,"childrenField"),renderLabelRef:O(e,"renderLabel"),renderIconRef:O(e,"renderIcon"),hoverKeyRef:n,keyboardKeyRef:c,lastToggledSubmenuKeyRef:l,pendingKeyPathRef:x,activeKeyPathRef:v,animatedRef:O(e,"animated"),mergedShowRef:t,nodePropsRef:O(e,"nodeProps"),renderOptionRef:O(e,"renderOption"),menuPropsRef:O(e,"menuProps"),doSelect:$,doUpdateShow:_}),ve(t,d=>{!e.animated&&!d&&B()});function $(d,w){const{onSelect:f}=e;f&&fe(f,d,w)}function _(d){const{"onUpdate:show":w,onUpdateShow:f}=e;w&&fe(w,d),f&&fe(f,d),o.value=d}function B(){n.value=null,c.value=null,l.value=null}function J(){_(!1)}function ie(){G("left")}function Q(){G("right")}function ae(){G("up")}function de(){G("down")}function le(){const d=Y();d!=null&&d.isLeaf&&t.value&&($(d.key,d.rawNode),_(!1))}function Y(){var d;const{value:w}=r,{value:f}=a;return!w||f===null?null:(d=w.getNode(f))!==null&&d!==void 0?d:null}function G(d){const{value:w}=a,{value:{getFirstAvailableNode:f}}=r;let p=null;if(w===null){const I=f();I!==null&&(p=I.key)}else{const I=Y();if(I){let s;switch(d){case"down":s=I.getNext();break;case"up":s=I.getPrev();break;case"right":s=I.getChild();break;case"left":s=I.getParent();break}s&&(p=s.key)}}p!==null&&(n.value=null,c.value=p)}const U=y(()=>{const{size:d,inverted:w}=e,{common:{cubicBezierEaseInOut:f},self:p}=b.value,{padding:I,dividerColor:s,borderRadius:g,optionOpacityDisabled:D,[E("optionIconSuffixWidth",d)]:j,[E("optionSuffixWidth",d)]:se,[E("optionIconPrefixWidth",d)]:M,[E("optionPrefixWidth",d)]:ze,[E("fontSize",d)]:De,[E("optionHeight",d)]:Oe,[E("optionIconSize",d)]:Ae}=p,m={"--n-bezier":f,"--n-font-size":De,"--n-padding":I,"--n-border-radius":g,"--n-option-height":Oe,"--n-option-prefix-width":ze,"--n-option-icon-prefix-width":M,"--n-option-suffix-width":se,"--n-option-icon-suffix-width":j,"--n-option-icon-size":Ae,"--n-divider-color":s,"--n-option-opacity-disabled":D};return w?(m["--n-color"]=p.colorInverted,m["--n-option-color-hover"]=p.optionColorHoverInverted,m["--n-option-color-active"]=p.optionColorActiveInverted,m["--n-option-text-color"]=p.optionTextColorInverted,m["--n-option-text-color-hover"]=p.optionTextColorHoverInverted,m["--n-option-text-color-active"]=p.optionTextColorActiveInverted,m["--n-option-text-color-child-active"]=p.optionTextColorChildActiveInverted,m["--n-prefix-color"]=p.prefixColorInverted,m["--n-suffix-color"]=p.suffixColorInverted,m["--n-group-header-text-color"]=p.groupHeaderTextColorInverted):(m["--n-color"]=p.color,m["--n-option-color-hover"]=p.optionColorHover,m["--n-option-color-active"]=p.optionColorActive,m["--n-option-text-color"]=p.optionTextColor,m["--n-option-text-color-hover"]=p.optionTextColorHover,m["--n-option-text-color-active"]=p.optionTextColorActive,m["--n-option-text-color-child-active"]=p.optionTextColorChildActive,m["--n-prefix-color"]=p.prefixColor,m["--n-suffix-color"]=p.suffixColor,m["--n-group-header-text-color"]=p.groupHeaderTextColor),m}),T=C?Ue("dropdown",y(()=>`${e.size[0]}${e.inverted?"i":""}`),U,e):void 0;return{mergedClsPrefix:P,mergedTheme:b,tmNodes:i,mergedShow:t,handleAfterLeave:()=>{e.animated&&B()},doUpdateShow:_,cssVars:C?void 0:U,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const e=(r,i,n,c,l)=>{var a;const{mergedClsPrefix:x,menuProps:v}=this;(a=this.onRender)===null||a===void 0||a.call(this);const S=(v==null?void 0:v(void 0,this.tmNodes.map(C=>C.rawNode)))||{},P={ref:mo(i),class:[r,`${x}-dropdown`,this.themeClass],clsPrefix:x,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:c,onMouseleave:l};return u(Ce,Se(this.$attrs,P,S))},{mergedTheme:o}=this,t={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return u(eo,Object.assign({},io(this.$props,Ro),t),{trigger:()=>{var r,i;return(i=(r=this.$slots).default)===null||i===void 0?void 0:i.call(r)}})}}),Ho="/img/desktop/logIn_mbd.png",Wo="/img/desktop/key_lemonsqueezy.png",Go="/img/desktop/login_lemonsqueezy.png",Uo="/img/desktop/mianbaoduo.png",Vo="/img/desktop/lemonsqueezy.png",Ko=A({__name:"Desktop",async setup(e){let o,t;const r=([o,t]=we(()=>fetch("https://ad-api.nn.ci/v0/app/latest")),o=await o,t(),o);([o,t]=we(()=>r.json()),o=await o,t(),o).version;const n=[{key:"mac_arm64",label:"MacOS (Apple Silicon)",url:"https://bugo-1301111475.cos.ap-guangzhou.myqcloud.com/Alist/alist-desktop_aarch64.dmg"},{key:"mac_x64",label:"MacOS (Intel)",url:"https://bugo-1301111475.cos.ap-guangzhou.myqcloud.com/Alist/alist-desktop_x64.dmg"},{key:"win_x64",label:"Windows (X64)",url:"https://bugo-1301111475.cos.ap-guangzhou.myqcloud.com/Alist/alist-desktop_x64-setup.exe"},{key:"win_arm64",label:"Windows (ARM64)",url:"https://bugo-1301111475.cos.ap-guangzhou.myqcloud.com/Alist/alist-desktop_arm64-setup.exe"},{key:"linux",label:"Linux",url:"https://bugo-1301111475.cos.ap-guangzhou.myqcloud.com/Alist/alist-desktop_amd64.deb"}],c=navigator.platform.toLowerCase(),l=F("win_x64");c.includes("win")?l.value="win_x64":c.includes("linux")?l.value="linux":c.includes("mac")&&(l.value="mac_arm64"),console.log(l.value);let a={down:"Download",website:"Website"};const x=y(()=>{var b;return(b=n.find($=>$.key===l.value))==null?void 0:b.label}),v=y(()=>n.map(b=>({...b,label:`${b.label} ${l.value===b.key?"✅":""}`})));location.pathname.startsWith("/zh/")&&(a={down:"下载",website:"官网"});function S(){var $;const b=($=n.find(_=>_.key===l.value))==null?void 0:$.url;window.open(`${b}`,"_blank")}function P(b){l.value=b}function C(){window.open("https://desktop.alistgo.com/zh","_blank")}return(b,$)=>(Xe(),Ve(z(ge),{align:"center",vertical:"",size:"large"},{default:L(()=>[q(z(ge),{class:"btn"},{default:L(()=>[q(z(ue),{size:"large",type:"info",onClick:C,tertiary:""},{default:L(()=>[ce(pe(z(a).website),1)]),_:1}),q(z(go),null,{default:L(()=>[q(z(Io),{trigger:"hover",options:v.value,onSelect:P,size:"large"},{default:L(()=>[q(z(ue),{size:"large",type:"primary",tertiary:""},{default:L(()=>[ce("💻"+pe(x.value),1)]),_:1})]),_:1},8,["options"]),q(z(ue),{size:"large",onClick:S,type:"info",secondary:""},{default:L(()=>[ce(pe(z(a).down),1)]),_:1})]),_:1})]),_:1}),q(z(po),{src:"/img/guide/desktop.png"})]),_:1}))}}),Xo=fo(Ko,[["__scopeId","data-v-bb7cce38"]]);export{Xo as D,Wo as _,Go as a,Ho as b,Vo as c,Uo as d};
