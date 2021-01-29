(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[22],{"1KsK":function(e,t,n){"use strict"
var o=Object.prototype.toString
e.exports=function(e){var t=o.call(e)
var n="[object Arguments]"===t
n||(n="[object Array]"!==t&&null!==e&&"object"===typeof e&&"number"===typeof e.length&&e.length>=0&&"[object Function]"===o.call(e.callee))
return n}},"1oPx":function(e,t,n){"use strict"
var o=n("Ff2n")
var i=n("rePB")
var a=n("1OyB")
var r=n("vuIU")
var l=n("md7G")
var s=n("foSv")
var c=n("Ji7U")
var u=n("q1tI")
var d=n.n(u)
var p=n("17x9")
var f=n.n(p)
var h=n("TSYQ")
var g=n.n(h)
var b=n("J2CL")
var m=n("oXx0")
var v=n("n12J")
var y=n("uSnb")
var O=n("Mwhx")
function _(e){var t=e.colors,n=e.typography,o=(e.borders,e.spacing),i=e.stacking
e.forms
return{zIndex:i.topmost,fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,groupFontWeight:n.fontWeightBold,lineHeight:n.lineHeightCondensed,labelColor:t.textDarkest,background:t.backgroundLightest,highlightedBackground:t.backgroundBrand,activeBackground:t.backgroundDark,activeLabelColor:t.textLightest,padding:"".concat(o.xSmall," ").concat(o.small),iconPaddingEnd:o.small,groupPadding:o.medium,smallFontSize:n.fontSizeSmall,mediumFontSize:n.fontSizeMedium,largeFontSize:n.fontSizeLarge}}_.canvas=function(e){return{labelColor:e["ic-brand-font-color-dark"],highlightedBackground:e["ic-brand-primary"]}}
n.d(t,"a",(function(){return K}))
var x,w,C,S,k
var j={componentId:"eZsEe",template:function(e){return"\n\n.eZsEe_dKpE{box-sizing:border-box;list-style-type:none;margin:0;overflow:auto;padding:0}\n\n.eZsEe_ecYO{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;align-items:center;background:".concat(e.background||"inherit",";cursor:pointer;display:flex;font-family:").concat(e.fontFamily||"inherit",";font-size:").concat(e.mediumFontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";line-height:").concat(e.lineHeight||"inherit",";outline:none;padding:").concat(e.padding||"inherit",";transition:background 0.2s;user-select:none}\n\n.eZsEe_ecYO.eZsEe_doqw{font-size:").concat(e.smallFontSize||"inherit","}\n\n.eZsEe_ecYO.eZsEe_ycrn{font-size:").concat(e.mediumFontSize||"inherit","}\n\n.eZsEe_ecYO.eZsEe_cMDj{font-size:").concat(e.largeFontSize||"inherit","}\n\n.eZsEe_ecYO.eZsEe_cNcI:not(.eZsEe_fckf){background:").concat(e.highlightedBackground||"inherit","}\n\n.eZsEe_ecYO.eZsEe_fGhm:not(.eZsEe_fckf){background:").concat(e.activeBackground||"inherit","}\n\n.eZsEe_ecYO.eZsEe_ywdX:not(.eZsEe_fckf){cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.eZsEe_ecYO.eZsEe_fckf{cursor:not-allowed;font-weight:").concat(e.groupFontWeight||"inherit",";pointer-events:none}\n\n.eZsEe_ecYO.eZsEe_dXHE{-webkit-padding-start:").concat(e.groupPadding||"inherit",";padding-inline-start:").concat(e.groupPadding||"inherit","}\n\n[dir=ltr] .eZsEe_ecYO.eZsEe_dXHE{padding-left:").concat(e.groupPadding||"inherit","}\n\n[dir=rtl] .eZsEe_ecYO.eZsEe_dXHE{padding-right:").concat(e.groupPadding||"inherit","}\n\n.eZsEe_blJt{color:").concat(e.labelColor||"inherit","}\n\n.eZsEe_cNcI:not(.eZsEe_fckf) .eZsEe_blJt,.eZsEe_fGhm:not(.eZsEe_fckf) .eZsEe_blJt{color:").concat(e.activeLabelColor||"inherit","}\n\n.eZsEe_dnnz{-webkit-margin-end:").concat(e.iconPaddingEnd||"inherit",";-webkit-margin-start:0;margin-inline-end:").concat(e.iconPaddingEnd||"inherit",";margin-inline-start:0}\n\n[dir=ltr] .eZsEe_dnnz{margin-left:0;margin-right:").concat(e.iconPaddingEnd||"inherit","}\n\n[dir=rtl] .eZsEe_dnnz{margin-left:").concat(e.iconPaddingEnd||"inherit",";margin-right:0}\n\n.eZsEe_crZr{z-index:").concat(e.zIndex||"inherit","}")},optionsList:"eZsEe_dKpE",option:"eZsEe_ecYO",small:"eZsEe_doqw",medium:"eZsEe_ycrn",large:"eZsEe_cMDj",highlighted:"eZsEe_cNcI",groupLabel:"eZsEe_fckf",selected:"eZsEe_fGhm",disabled:"eZsEe_ywdX",groupItem:"eZsEe_dXHE",label:"eZsEe_blJt",icon:"eZsEe_dnnz",container:"eZsEe_crZr"}
var K=(x=Object(m["a"])(),w=Object(b["themeable"])(_,j),x(C=w(C=(k=S=function(e){Object(c["a"])(t,e)
function t(){var e
var n
Object(a["a"])(this,t)
for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r]
n=Object(l["a"])(this,(e=Object(s["a"])(t)).call.apply(e,[this].concat(i)))
n.optionHeight=5
n.handleClick=function(e,t){if(t.disabled||t.groupLabel){e.preventDefault()
return}n.props.onSelect(e,t)}
return n}Object(r["a"])(t,[{key:"renderStaticOption",value:function(e){var t=this.props,n=t.size,o=t.onStaticClick
return d.a.createElement("li",{tabIndex:"-1",role:"option","aria-disabled":"true","aria-selected":"false",className:g()(j.option,Object(i["a"])({},j[n],n)),onClick:o},d.a.createElement("span",{className:j.label},e))}},{key:"renderIcon",value:function(e){if("undefined"!==typeof e&&null!==e){var t=e
return d.a.createElement("span",{className:j.icon},d.a.createElement(t,null))}}},{key:"renderOptions",value:function(){var e=this
var t=this.props,n=t.options,o=t.optionsId,a=t.loadingText,r=t.emptyOption,l=t.selectedOption,s=t.onHighlightOption,c=t.size,u=t.highlightedIndex
if(a)return this.renderStaticOption(d.a.createElement(y["a"],{size:"x-small",renderTitle:a}))
if(0===n.length)return this.renderStaticOption(r)
return n.map((function(t,n){var a
var r=t.children,p=t.id,f=t.icon,h=t.groupLabel,b=t.groupItem
var m=Object(O["a"])(l)===p
var v=t.disabled||h
var y={onMouseEnter:function(){return s(n)},onClick:function(n){return e.handleClick(n,t)}}
return d.a.createElement("li",Object.assign({},y,{role:"option",key:p,id:"".concat(o,"_").concat(p),className:g()(j.option,(a={},Object(i["a"])(a,j.selected,m),Object(i["a"])(a,j[c],c),Object(i["a"])(a,j.highlighted,n===u),Object(i["a"])(a,j.disabled,v),Object(i["a"])(a,j.groupLabel,h),Object(i["a"])(a,j.groupItem,b),a)),tabIndex:"-1","aria-selected":m?"true":"false","aria-disabled":v?"true":null}),d.a.createElement("span",{className:j.label},f&&e.renderIcon(f),r))}))}},{key:"render",value:function(){var e=this
var t=this.props,n=t.optionsId,i=t.menuRef,a=t.visibleOptionsCount,r=t.maxWidth,l=Object(o["a"])(t,["optionsId","menuRef","visibleOptionsCount","maxWidth"])
return d.a.createElement(v["a"],{style:l.style,className:j.container,maxWidth:r||0,borderWidth:"small",borderRadius:"medium",shadow:"resting",background:"primary"},!!this.props.expanded&&d.a.createElement("ul",{className:j.optionsList,id:n,onKeyDown:this.props.onKeyDown,onKeyUp:this.props.onKeyUp,onBlur:this.props.onBlur,onClick:function(e){e.stopPropagation()
e.nativeEvent.stopImmediatePropagation()},tabIndex:"-1",ref:function(t){i(t)
t&&(e.optionHeight=t.querySelector("li").clientHeight)},role:"listbox",style:{maxHeight:"".concat(a*this.optionHeight,"px")}},this.renderOptions()))}}])
t.displayName="SelectOptionsList"
return t}(u["Component"]),S.propTypes={selectedOption:f.a.oneOfType([f.a.string,f.a.shape({label:f.a.string.isRequired,value:f.a.string.isRequired,id:f.a.oneOfType([f.a.string,f.a.number]),children:f.a.node,disabled:f.a.bool,icon:f.a.func,groupLabel:f.a.bool})]),options:f.a.arrayOf(f.a.shape({label:f.a.string.isRequired,value:f.a.string.isRequired,id:f.a.oneOfType([f.a.string,f.a.number]),children:f.a.node,disabled:f.a.bool,icon:f.a.func,groupLabel:f.a.bool})),optionsId:f.a.string,menuRef:f.a.func,visibleOptionsCount:f.a.oneOfType([f.a.string,f.a.number]),loadingText:f.a.string,emptyOption:f.a.node,onHighlightOption:f.a.func,onSelect:f.a.func,onKeyDown:f.a.func,onKeyUp:f.a.func,size:f.a.oneOf(["small","medium","large"]),maxWidth:f.a.string,onStaticClick:f.a.func,onBlur:f.a.func,highlightedIndex:f.a.number,expanded:f.a.bool,disabled:f.a.bool},S.defaultProps={selectedOption:null,options:[],visibleOptionsCount:8,loadingText:null,emptyOption:"---",size:"medium",expanded:false,menuRef:function(e){},onHighlightOption:function(e){},onSelect:function(e,t){},onStaticClick:function(e){},disabled:false,optionsId:void 0,highlightedIndex:void 0,maxWidth:void 0,onKeyDown:void 0,onKeyUp:void 0,onBlur:void 0},k))||C)||C)},"1seS":function(e,t,n){"use strict"
var o=Array.prototype.slice
var i=n("1KsK")
var a=Object.keys
var r=a?function(e){return a(e)}:n("sYn3")
var l=Object.keys
r.shim=function(){if(Object.keys){var e=function(){var e=Object.keys(arguments)
return e&&e.length===arguments.length}(1,2)
e||(Object.keys=function(e){if(i(e))return l(o.call(e))
return l(e)})}else Object.keys=r
return Object.keys||r}
e.exports=r},"2Nju":function(e,t,n){"use strict"
var o=n("oNNP")
var i=RegExp.prototype.exec
var a=Object.getOwnPropertyDescriptor
var r=function(e){try{var t=e.lastIndex
e.lastIndex=0
i.call(e)
return true}catch(e){return false}finally{e.lastIndex=t}}
var l=Object.prototype.toString
var s="[object RegExp]"
var c="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag
e.exports=function(e){if(!e||"object"!==typeof e)return false
if(!c)return l.call(e)===s
var t=a(e,"lastIndex")
var n=t&&o(t,"value")
if(!n)return false
return r(e)}},"45zb":function(e,t,n){"use strict"
var o="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag
var i=Object.prototype.toString
var a=function(e){if(o&&e&&"object"===typeof e&&Symbol.toStringTag in e)return false
return"[object Arguments]"===i.call(e)}
var r=function(e){if(a(e))return true
return null!==e&&"object"===typeof e&&"number"===typeof e.length&&e.length>=0&&"[object Array]"!==i.call(e)&&"[object Function]"===i.call(e.callee)}
var l=function(){return a(arguments)}()
a.isLegacyArguments=r
e.exports=l?a:r},"5xAX":function(e,t,n){"use strict"
var o=n("82c2")
var i=n("VwiP")
var a=n("V+xs")
var r=n("HH6Z")
var l=Function.call.bind(i)
o(l,{getPolyfill:a,implementation:i,shim:r})
e.exports=l},"82c2":function(e,t,n){"use strict"
var o=n("1seS")
var i="function"===typeof Symbol&&"symbol"===typeof Symbol("foo")
var a=Object.prototype.toString
var r=Array.prototype.concat
var l=Object.defineProperty
var s=function(e){return"function"===typeof e&&"[object Function]"===a.call(e)}
var c=function(){var e={}
try{l(e,"x",{enumerable:false,value:e})
for(var t in e)return false
return e.x===e}catch(e){return false}}
var u=l&&c()
var d=function(e,t,n,o){if(t in e&&(!s(o)||!o()))return
u?l(e,t,{configurable:true,enumerable:false,value:n,writable:true}):e[t]=n}
var p=function(e,t){var n=arguments.length>2?arguments[2]:{}
var a=o(t)
i&&(a=r.call(a,Object.getOwnPropertySymbols(t)))
for(var l=0;l<a.length;l+=1)d(e,a[l],t[a[l]],n[a[l]])}
p.supportsDescriptors=!!u
e.exports=p},"8OEV":function(e,t,n){"use strict"
var o=n("Ff2n")
var i=n("vuIU")
var a=n("1OyB")
var r=n("md7G")
var l=n("foSv")
var s=n("Ji7U")
var c=n("q1tI")
var u=n.n(c)
var d=n("17x9")
var p=n.n(d)
var f=n("J2CL")
var h=n("AdN2")
var g=n("lzgt")
var b=n("nAyT")
var m=n("oXx0")
var v=n("UCAh")
var y=n("tbLP")
var O=function(e){var t=e.stacking
return{zIndex:t.topmost}}
n.d(t,"a",(function(){return B}))
var _,x,w,C,S,k,j,K,T,D,E,I,z,P
var R={componentId:"bgLNT",template:function(e){return"\n\n.bgLNT_bGBk{box-sizing:border-box;z-index:".concat(e.zIndex||"inherit","}")},root:"bgLNT_bGBk"}
var M=(_=Object(m["a"])(),_(x=(C=w=function(e){Object(s["a"])(t,e)
function t(){Object(a["a"])(this,t)
return Object(r["a"])(this,Object(l["a"])(t).apply(this,arguments))}return t}(g["a"]),w.displayName="PositionTarget",w.locatorAttribute="data-position-target",C))||x)
var Q=(S=Object(m["a"])(),S(k=(K=j=function(e){Object(s["a"])(t,e)
function t(){Object(a["a"])(this,t)
return Object(r["a"])(this,Object(l["a"])(t).apply(this,arguments))}return t}(g["a"]),j.displayName="PositionContent",j.propTypes={children:p.a.node,placement:v["a"].placement},j.locatorAttribute="data-position-content",K))||k)
var B=(T=Object(b["a"])("7.0.0",null,"Use @instructure/ui-position instead"),D=Object(m["a"])(),E=Object(f["themeable"])(O,R),T(I=D(I=E(I=(P=z=function(e){Object(s["a"])(t,e)
function t(){Object(a["a"])(this,t)
return Object(r["a"])(this,Object(l["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){var e=this.props,n=e.children,i=e.id,a=e.trackPosition,r=e.placement,l=e.offsetX,s=e.offsetY,c=e.mountNode,d=e.target,p=e.insertAt,f=e.over,h=e.onPositioned,b=e.onPositionChanged,m=e.constrain,v=Object(o["a"])(e,["children","id","trackPosition","placement","offsetX","offsetY","mountNode","target","insertAt","over","onPositioned","onPositionChanged","constrain"])
var O=g["a"].pick(t.Target,n)
var _=g["a"].pick(t.Content,n)
return u.a.createElement(y["a"],Object.assign({},v,{target:d,renderTarget:O,id:i,shouldTrackPosition:a,placement:r,offsetX:l,offsetY:s,mountNode:c,insertAt:p,constrain:m,shouldPositionOverTarget:f,onPositioned:h,onPositionChanged:b}),_)}}])
t.displayName="Position"
return t}(c["Component"]),z.Target=M,z.Content=Q,z.locatorAttribute="data-position",z.propTypes={children:p.a.node,target:p.a.oneOfType([h["a"],p.a.func]),over:p.a.bool,placement:v["a"].placement,offsetX:p.a.oneOfType([p.a.string,p.a.number]),offsetY:p.a.oneOfType([p.a.string,p.a.number]),onPositionChanged:p.a.func,onPositioned:p.a.func,trackPosition:p.a.bool,mountNode:v["a"].mountNode,insertAt:p.a.oneOf(["bottom","top"]),constrain:v["a"].constrain,id:p.a.string},z.defaultProps={trackPosition:true,placement:"bottom center",offsetX:0,offsetY:0,mountNode:null,target:null,insertAt:"bottom",over:false,onPositioned:function(e){},onPositionChanged:function(e){},constrain:"window",children:null,id:void 0},P))||I)||I)||I)},D3zA:function(e,t,n){"use strict"
var o=n("aI7X")
e.exports=Function.prototype.bind||o},DNiq:function(e,t,n){"use strict"
var o=n("1OyB")
var i=n("vuIU")
var a=n("md7G")
var r=n("foSv")
var l=n("Ji7U")
n("DEX3")
var s=n("q1tI")
var c=n.n(s)
var u=n("17x9")
var d=n.n(u)
var p=n("f66B")
var f=n.n(p)
var h=n("dpqJ")
var g=n("cClk")
var b=n("sTNg")
var m=n("u9uf")
var v=n("nAyT")
var y=n("jtGx")
var O=n("oXx0")
var _=n("JX7q")
var x=n("/UXv")
var w=n("rRj0")
var C=n("Mwhx")
var S,k,j,K
var T=d.a.shape({label:d.a.string.isRequired,value:d.a.string.isRequired,id:d.a.oneOfType([d.a.string,d.a.number]),children:d.a.node})
var D=(S=Object(O["a"])(),S(k=(K=j=function(e){Object(l["a"])(t,e)
function t(e){var n
Object(o["a"])(this,t)
n=Object(a["a"])(this,Object(r["a"])(t).call(this,e))
n._input=null
n.focus=function(){n._input&&n._input.focus()}
n.matchSelectedOption=function(e,t){var o=n._input.value
var i
i=t?e.filteredOptions.find((function(e){return e.value===t.value})):e.filteredOptions.find((function(e){return e.label.toLowerCase()===o.toLowerCase()}))
return i}
n.handleClose=function(e,t){return n.setState((function(o,i){var a=n._input.value
var r=n.matchSelectedOption(o,t)
var l=t||o.selectedOption
if(r){n._input.value=r.label
l&&Object(C["a"])(r)===Object(C["a"])(l)||i.onChange(e,r)}else if(l){if(i.allowEmpty&&""===n._input.value){i.onChange(e,null)
return{filterText:null,filteredOptions:i.options,selectedOption:null}}n.props.allowCustom||(n._input.value=l.label)}else n.props.allowCustom||(n._input.value="")
n._input.value!==a&&n.props.onInputChange(null,n._input.value)
return{filterText:n.props.allowCustom?n._input.value:null,filteredOptions:i.options,selectedOption:r||l}}),n.props.onClose)}
n.handleInputChange=function(e,t){n.props.onInputChange(e,t)
var o=t.toLowerCase()
n.state.filterText!==o&&n.setState((function(e,t){var i=t.filter(n.props.options,o||"")
var a=e.selectedOption
t.allowCustom&&0===i.length&&(a=void 0)
return{filterText:o,filteredOptions:i,selectedOption:a}}))}
n.handleSelect=function(e,t){if(n._input.value!==t.label){n._input.value=t.label
n.props.onInputChange(null,n._input.value)}n.setState({filterText:null,filteredOptions:n.props.options,selectedOption:t},(function(){return n.focus()}))
n.props.onChange(e,t)}
n.handleInputRef=function(e){n._input=e
for(var t=arguments.length,o=new Array(t>1?t-1:0),i=1;i<t;i++)o[i-1]=arguments[i]
n.props.inputRef.apply(Object(_["a"])(n),[e].concat(o))}
n.state={filterText:null,filteredOptions:e.options,selectedOption:n.getSelectedOptionFromProps(e)}
return n}Object(i["a"])(t,[{key:"findSelectedOption",value:function(e,t){var n=Object(C["a"])(t)
var o=e.find((function(e){return Object(C["a"])(e)===n}))
return o||t}},{key:"getSelectedOptionFromProps",value:function(e,t){return t?this.findSelectedOption(e.options,t):this.findSelectedOption(e.options,e.selectedOption||e.defaultSelectedOption)}},{key:"componentDidMount",value:function(){this.state.selectedOption&&(this._input.value=this.state.selectedOption.label||"")}},{key:"componentWillReceiveProps",value:function(e){var t=this
var n=!f()(this.props.options,e.options)
var o=this.props.selectedOption!=e.selectedOption&&!f()(this.props.selectedOption,e.selectedOption)&&!this.props.disabled&&!this.props.readOnly
var i=this.props.value!==e.value;(n||o||i)&&this.setState((function(i){var a=o?null:i.selectedOption
var r=t.getSelectedOptionFromProps(e,a)
var l=i.filterText||""
e.allowCustom&&o&&!t.props.selectedOption&&(l=r&&r.label||"")
var s=e.filter(e.options,l)
var c=r&&r.label||e.value||""
if((e.allowCustom||null===i.filterText)&&t._input.value!==c){t._input.value=c
e.onInputChange(null,t._input.value)}n&&e.onOptionsChange(s)
return{selectedOption:r,filteredOptions:s}}))}},{key:"render",value:function(){return c.a.createElement(w["a"],Object.assign({},Object(y["a"])(this.props,t.propTypes),{editable:this.props.allowCustom||this.props.editable,inputRef:this.handleInputRef,options:this.state.filteredOptions,selectedOption:this.state.selectedOption,disabled:this.props.disabled,readOnly:this.props.readOnly,onSelect:this.handleSelect,onStaticClick:this.focus,onClose:this.handleClose,onInputChange:this.handleInputChange,optionsMaxWidth:this.props.optionsMaxWidth,closeOnSelect:this.props.closeOnSelect}))}},{key:"focused",get:function(){return Object(x["a"])(this._input)}},{key:"value",get:function(){var e=this.state.selectedOption
if(e)return e.value
if(this.props.allowCustom)return this._input.value
return null}}])
t.displayName="SelectSingle"
return t}(s["Component"]),j.propTypes={options:d.a.arrayOf(T),inputRef:d.a.func,selectedOption:Object(g["a"])(d.a.oneOfType([d.a.string,T]),"onChange","defaultSelectedOption"),optionsMaxWidth:d.a.string,defaultSelectedOption:d.a.oneOfType([d.a.string,T]),editable:d.a.bool,allowEmpty:d.a.bool,allowCustom:d.a.bool,disabled:d.a.bool,readOnly:d.a.bool,filter:d.a.func,onClose:d.a.func,onChange:d.a.func,onInputChange:d.a.func,onOptionsChange:d.a.func,closeOnSelect:d.a.bool,value:d.a.string},j.defaultProps={options:void 0,selectedOption:void 0,defaultSelectedOption:void 0,value:void 0,filter:void 0,readOnly:false,disabled:false,allowCustom:false,allowEmpty:false,editable:false,optionsMaxWidth:void 0,inputRef:function(e){},onClose:function(){},onChange:function(e,t){},onInputChange:function(e,t){},onOptionsChange:function(e){},closeOnSelect:true},K))||k)
var E=n("VTBJ")
var I=n("KQm4")
var z=n("J2CL")
var P=n("K7t/")
var R=n("rePB")
var M=n("TSYQ")
var Q=n.n(M)
var B=n("IRk9")
var F=n("n12J")
var W=n("o4+2")
function L(e){var t=e.borders,n=e.colors,o=e.forms,i=e.spacing,a=e.typography
var r=function(e,n){var o
var i=n.borderColor,a=n.borderRadius,r=n.borderStyle,l=n.borderWidth,s=n.hoverColor,c=n.iconColor,u=n.iconHoverColor,d=n.mainColor,p=n.textColor
return o={},Object(R["a"])(o,"".concat(e,"BackgroundHover"),s||Object(W["a"])(d,5)),Object(R["a"])(o,"".concat(e,"Background"),d),Object(R["a"])(o,"".concat(e,"BorderColor"),i),Object(R["a"])(o,"".concat(e,"BorderRadius"),a||"999rem"),Object(R["a"])(o,"".concat(e,"BorderStyle"),r||t.style),Object(R["a"])(o,"".concat(e,"BorderWidth"),l||t.widthSmall),Object(R["a"])(o,"".concat(e,"Color"),p),Object(R["a"])(o,"".concat(e,"IconColor"),c||p),Object(R["a"])(o,"".concat(e,"IconHoverColor"),u||c||p),o}
return Object(E["a"])({fontFamily:a.fontFamily,heightSmall:"1.3125rem",heightMedium:o.inputHeightSmall,heightLarge:o.inputHeightMedium,fontSizeSmall:a.fontSizeXSmall,fontSizeMedium:a.fontSizeSmall,fontSizeLarge:a.fontSizeMedium,padding:"0 ".concat(i.xSmall),paddingSmall:"0 ".concat(i.xSmall),focusOutlineColor:n.borderBrand,focusOutlineWidth:t.widthMedium,focusOutlineStyle:t.style,maxWidth:"10rem",iconMargin:i.small,transitionTiming:"0.2s"},r("default",{borderColor:n.borderMedium,iconColor:n.textDarkest,iconHoverColor:n.textBrand,mainColor:n.textLight,textColor:n.textDarkest}),{},r("inline",{borderColor:n.borderDark,borderRadius:t.radiusMedium,iconColor:n.textDark,iconHoverColor:n.textDark,mainColor:n.textLightest,textColor:n.textDarkest}))}L["canvas-a11y"]=L["canvas-high-contrast"]=function(e){var t=e.colors
return{defaultBackground:t.backgroundLightest,defaultBorderColor:t.borderDarkest}}
L.canvas=function(e){return{focusOutlineColor:e["ic-brand-primary"],textColor:e["ic-brand-font-color-dark"],defaultIconColor:e["ic-brand-font-color-dark"],defaultIconHoverColor:e["ic-brand-primary"],defaultColor:e["ic-brand-font-color-dark"]}}
var N,Z,A,q,H
var X={componentId:"DyQTK",template:function(e){return"\n\n.DyQTK_eAEM{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;align-items:center;box-sizing:border-box;display:inline-flex;font-family:".concat(e.fontFamily||"inherit",";text-align:center;user-select:none;vertical-align:middle}\n\n[dir=ltr] .DyQTK_eAEM,[dir=rtl] .DyQTK_eAEM{text-align:center}\n\n.DyQTK_doqw{font-size:").concat(e.fontSizeSmall||"inherit",";padding:").concat(e.paddingSmall||"inherit","}\n\n.DyQTK_doqw .DyQTK_eWKC{line-height:calc(").concat(e.heightSmall||"inherit"," - ").concat(e.defaultBorderWidth||"inherit","*2)}\n\n.DyQTK_doqw .DyQTK_dnnz{font-size:0.75rem}\n\n.DyQTK_ycrn{font-size:calc(").concat(e.fontSizeMedium||"inherit"," - 0.0625rem);padding:").concat(e.padding||"inherit","}\n\n.DyQTK_ycrn .DyQTK_eWKC{line-height:calc(").concat(e.heightMedium||"inherit"," - ").concat(e.defaultBorderWidth||"inherit","*2)}\n\n.DyQTK_ycrn .DyQTK_dnnz{font-size:0.75rem}\n\n.DyQTK_cMDj{font-size:calc(").concat(e.fontSizeLarge||"inherit"," - 0.0625rem);padding:").concat(e.padding||"inherit","}\n\n.DyQTK_cMDj .DyQTK_eWKC{line-height:calc(").concat(e.heightLarge||"inherit"," - ").concat(e.defaultBorderWidth||"inherit","*2)}\n\n.DyQTK_cMDj .DyQTK_dnnz{font-size:0.875rem}\n\n.DyQTK_EwaR{outline:none;overflow:visible;position:relative;touch-action:manipulation;transition:background-color ").concat(e.transitionTiming||"inherit","}\n\n.DyQTK_EwaR:before{border:").concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",';bottom:-0.3125rem;box-sizing:border-box;content:"";left:-0.3125rem;opacity:0;pointer-events:none;position:absolute;right:-0.3125rem;top:-0.3125rem;transform:scale(0.9);transition:all ').concat(e.transitionTiming||"inherit","}\n\n.DyQTK_EwaR:not(.DyQTK_erdA){cursor:pointer}\n\n.DyQTK_EwaR:focus:before{opacity:1;transform:scale(1)}\n\n.DyQTK_EwaR.DyQTK_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.DyQTK_dnnz{-webkit-margin-end:0;-webkit-margin-start:").concat(e.iconMargin||"inherit",";cursor:pointer;margin-inline-end:0;margin-inline-start:").concat(e.iconMargin||"inherit",";transform:translateY(0.0625rem);transition:all ").concat(e.transitionTiming||"inherit","}\n\n[dir=ltr] .DyQTK_dnnz{margin-left:").concat(e.iconMargin||"inherit",";margin-right:0}\n\n[dir=rtl] .DyQTK_dnnz{margin-left:0;margin-right:").concat(e.iconMargin||"inherit","}\n\n.DyQTK_eWKC{max-width:").concat(e.maxWidth||"inherit",";overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n\n.DyQTK_ddES{background-color:").concat(e.defaultBackground||"inherit",";border:").concat(e.defaultBorderWidth||"inherit"," ").concat(e.defaultBorderStyle||"inherit"," ").concat(e.defaultBorderColor||"inherit",";border-radius:").concat(e.defaultBorderRadius||"inherit",";color:").concat(e.defaultColor||"inherit","}\n\n.DyQTK_ddES.DyQTK_EwaR:before{border-radius:").concat(e.defaultBorderRadius||"inherit","}\n\n.DyQTK_ddES.DyQTK_EwaR:hover{background-color:").concat(e.defaultBackgroundHover||"inherit","}\n\n.DyQTK_ddES.DyQTK_erdA .DyQTK_dnnz{color:").concat(e.defaultIconColor||"inherit","}\n\n.DyQTK_ddES.DyQTK_erdA:hover .DyQTK_dnnz{color:").concat(e.defaultIconHoverColor||"inherit","}\n\n.DyQTK_eXrk{background-color:").concat(e.inlineBackground||"inherit",";border:").concat(e.inlineBorderWidth||"inherit"," ").concat(e.inlineBorderStyle||"inherit"," ").concat(e.inlineBorderColor||"inherit",";border-radius:").concat(e.inlineBorderRadius||"inherit",";color:").concat(e.inlineColor||"inherit",";cursor:text;margin:0 0.1875rem 0.1875rem}\n\n.DyQTK_eXrk.DyQTK_EwaR:before{border-radius:calc(").concat(e.inlineBorderRadius||"inherit","*1.5)}\n\n.DyQTK_eXrk.DyQTK_EwaR:hover{background-color:").concat(e.inlineBackgroundHover||"inherit","}\n\n.DyQTK_eXrk.DyQTK_erdA .DyQTK_dnnz{background-color:").concat(e.inlineIconColor||"inherit",";border-radius:50%;color:").concat(e.inlineBackground||"inherit",";font-size:0.75rem;inset-inline-end:0;inset-inline-start:auto;padding:0.25rem;position:absolute;top:0;transform:translate(40%,-40%)}\n\n[dir=ltr] .DyQTK_eXrk.DyQTK_erdA .DyQTK_dnnz{left:auto;right:0}\n\n[dir=rtl] .DyQTK_eXrk.DyQTK_erdA .DyQTK_dnnz{left:0;right:auto}\n\n.DyQTK_eXrk.DyQTK_erdA:hover .DyQTK_dnnz{background-color:").concat(e.inlineIconHoverColor||"inherit","}\n\n[dir=rtl] .DyQTK_eXrk.DyQTK_erdA .DyQTK_dnnz{transform:translate(-40%,-40%)}")},tagRoot:"DyQTK_eAEM",small:"DyQTK_doqw",text:"DyQTK_eWKC",icon:"DyQTK_dnnz",medium:"DyQTK_ycrn",large:"DyQTK_cMDj",button:"DyQTK_EwaR",dismissible:"DyQTK_erdA",disabled:"DyQTK_ywdX",default:"DyQTK_ddES",inline:"DyQTK_eXrk"}
var U=(N=Object(O["a"])(),Z=Object(z["themeable"])(L,X),N(A=Z(A=(H=q=function(e){Object(l["a"])(t,e)
function t(){var e
var n
Object(o["a"])(this,t)
for(var i=arguments.length,l=new Array(i),s=0;s<i;s++)l[s]=arguments[s]
n=Object(a["a"])(this,(e=Object(r["a"])(t)).call.apply(e,[this].concat(l)))
n.focus=function(){n._container&&n._container.focus()}
n.handleClick=function(e){var t=n.props,o=t.disabled,i=t.readOnly,a=t.onClick
if(o||i){e.preventDefault()
e.stopPropagation()}else"function"===typeof a&&a(e)}
n.handleRef=function(e){n._container=e}
return n}Object(i["a"])(t,[{key:"render",value:function(){var e
var n=this.props,o=n.className,i=n.dismissible,a=n.disabled,r=n.readOnly,l=n.size,s=n.text,u=n.title,d=n.onClick,p=n.margin,f=n.variant
var h=(e={},Object(R["a"])(e,X.tagRoot,true),Object(R["a"])(e,X[f],true),Object(R["a"])(e,X[l],l),Object(R["a"])(e,X.dismissible,i),Object(R["a"])(e,X.button,d),Object(R["a"])(e,X.disabled,a),e)
var g=F["a"].omitViewProps(Object(y["a"])(this.props,t.propTypes),t)
return c.a.createElement(F["a"],Object.assign({},g,{ref:this.handleRef,elementRef:this.props.elementRef,className:Q()(o,h),as:d?"button":"span",margin:p,type:d?"button":null,onClick:d?this.handleClick:null,disabled:a||r,display:null,title:u||("string"===typeof s?s:null)}),c.a.createElement("span",{className:X.text},s),d&&i?c.a.createElement(B["a"],{className:X.icon}):null)}},{key:"focused",get:function(){return Object(x["a"])(this._container)}}])
t.displayName="Tag"
return t}(s["Component"]),q.propTypes={className:d.a.string,text:d.a.oneOfType([d.a.string,d.a.node]).isRequired,title:d.a.string,disabled:d.a.bool,readOnly:d.a.bool,dismissible:d.a.bool,margin:z["ThemeablePropTypes"].spacing,onClick:d.a.func,elementRef:d.a.func,size:d.a.oneOf(["small","medium","large"]),variant:d.a.oneOf(["default","inline"])},q.defaultProps={size:"medium",dismissible:false,variant:"default",elementRef:void 0,className:void 0,title:void 0,disabled:false,readOnly:false,margin:void 0,onClick:void 0},H))||A)||A)
function J(e){var t=e.spacing
return{tagTopMargin:t.xxxSmall,tagStartMargin:t.xxSmall}}J.canvas=function(e){return{}}
var Y,$,V,G,ee
var te={componentId:"bknox",template:function(e){return"\n\n.bknox_dTVD{-webkit-margin-end:0;-webkit-margin-start:".concat(e.tagStartMargin||"inherit",";margin-inline-end:0;margin-inline-start:").concat(e.tagStartMargin||"inherit",";margin-top:calc(").concat(e.tagTopMargin||"inherit"," + 0.125rem)}\n\n[dir=ltr] .bknox_dTVD{margin-left:").concat(e.tagStartMargin||"inherit",";margin-right:0}\n\n[dir=rtl] .bknox_dTVD{margin-left:0;margin-right:").concat(e.tagStartMargin||"inherit","}\n\n.bknox_dTVD:last-of-type{margin-bottom:").concat(e.tagTopMargin||"inherit","}")},tag:"bknox_dTVD"}
var ne=d.a.shape({label:d.a.string.isRequired,value:d.a.string.isRequired,id:d.a.oneOfType([d.a.string,d.a.number]),dismissible:d.a.bool,children:d.a.node})
var oe=(Y=Object(O["a"])(),$=Object(z["themeable"])(J,te),Y(V=$(V=(ee=G=function(e){Object(l["a"])(t,e)
function t(e){var n
Object(o["a"])(this,t)
n=Object(a["a"])(this,Object(r["a"])(t).call(this,e))
n._input=null
n.focus=function(){n._input&&n._input.focus()}
n.cleanInput=function(){if(""!==n._input.value){n._input.value=""
n.props.onInputChange(null,"")}}
n.matchSelectedOptions=function(e,t){return t?e.filteredOptions.filter((function(e){return t.find((function(t){return t.value===e.value}))})):[e.filteredOptions.find((function(e){return e.label.toLowerCase()===n._input.value.toLowerCase()}))].filter((function(e){return e}))}
n.amendMatchesToState=function(e,t,o,i){if(o&&o.length>0){var a=[].concat(Object(I["a"])(e.selectedOption),Object(I["a"])(o))
"function"===typeof i&&i(a)
return{filteredOptions:n.getFilteredOptions(t,"",a),selectedOption:a}}return{filteredOptions:n.getFilteredOptions(t,"",e.selectedOption)}}
n.handleClose=function(e){return n.setState((function(t,o){var i=n.matchSelectedOptions(t)
n.cleanInput()
return n.amendMatchesToState(t,o,i,(function(t){o.onChange(e,t)}))}),n.props.onClose)}
n.handleInputChange=function(e,t){n.props.onInputChange(e,t)
var o=t.toLowerCase()
n.state.filterText!==o&&n.setState((function(e,t){return{filterText:o,filteredOptions:n.getFilteredOptions(t,o,e.selectedOption)}}))}
n.handleKeyDown=function(e){var t=n.state,o=t.filterText,i=t.selectedOption,a=t.selectedOption.length;("Backspace"===e.key||"Delete"===e.key)&&a>0&&""===o&&Object(x["a"])(n._input)&&n.dismiss(e,i[a-1])
n.props.onKeyDown(e)}
n.handleSelect=function(e,t){n.cleanInput()
var o=[].concat(Object(I["a"])(n.state.selectedOption),[t])
n.setState((function(e,t){var i=n.isControlled?e.selectedOption:o
return{filterText:"",filteredOptions:n.getFilteredOptions(t,"",i),selectedOption:i}}),n.focus)
n.props.onChange(e,o)}
n.dismiss=function(e,t){e.preventDefault()
e.stopPropagation()
var o=Object(C["a"])(t)
var i=n.state.selectedOption.filter((function(e){return Object(C["a"])(e)!==o}))
n.setState((function(e,t){var o=n.isControlled?e.selectedOption:i
return{filteredOptions:n.getFilteredOptions(t,e.filterText,o),selectedOption:o}}),n.focus)
n.props.onChange(e,i)}
n.handleInputRef=function(e){n._input=e
for(var t=arguments.length,o=new Array(t>1?t-1:0),i=1;i<t;i++)o[i-1]=arguments[i]
n.props.inputRef.apply(Object(_["a"])(n),[e].concat(o))}
var i=n.getSelectedOptionFromProps(e)
var l=n.getFilteredOptions(e,"",i)
n.state={filterText:"",selectedOption:i,filteredOptions:l}
return n}Object(i["a"])(t,[{key:"getOptionMap",value:function(e){return e.reduce((function(e,t){e[Object(C["a"])(t)]=t
return e}),{})}},{key:"findSelectedOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
var n=this.getOptionMap(e)
return t.map((function(e){var t=Object(C["a"])(e)
var o=n[t]
if("object"===typeof e)return Object(E["a"])({},e,{},o)
return o||e}))}},{key:"getSelectedOptionFromProps",value:function(e,t){return t?this.findSelectedOptions(e.options,t):this.findSelectedOptions(e.options,e.selectedOption||e.defaultSelectedOption)}},{key:"getFilteredOptions",value:function(e,t){var n=e.filter,o=e.options
var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]
var a=n(o,t)
var r=this.getOptionMap(i)
return a.filter((function(e){return!r[Object(C["a"])(e)]}))}},{key:"componentWillReceiveProps",value:function(e){var t=this
var n=!f()(this.props.options,e.options)
var o=!f()(this.props.selectedOption,e.selectedOption)&&!this.props.disabled&&!this.props.readOnly;(n||o)&&this.setState((function(i){var a=o?null:i.selectedOption
var r=t.getSelectedOptionFromProps(e,a)
var l=t.getFilteredOptions(e,i.filterText,r)
n&&t.props.onOptionsChange(l)
return{selectedOption:r,filteredOptions:l}}))}},{key:"renderTags",value:function(){var e=this
return this.state.selectedOption.filter((function(e){return e&&e.label})).map((function(t,n){var o=false!==t.dismissible
var i={}
o&&(i={dismissible:true,onClick:function(n){return e.dismiss(n,t)},onMouseDown:function(e){e.stopPropagation()}})
return c.a.createElement(U,Object.assign({className:te.tag,key:Object(C["a"])(t)+t.label,title:t.label,text:e.props.formatSelectedOption(t,n),size:e.props.size,disabled:e.props.disabled,readOnly:e.props.readOnly},i))}))}},{key:"renderInputs",value:function(){var e=this
return this.state.selectedOption.filter((function(e){return e&&e.label})).map((function(t,n){return c.a.createElement("input",{type:"hidden",key:Object(C["a"])(t)+t.label,name:e.props.name,value:t.value})}))}},{key:"render",value:function(){var e=this
return c.a.createElement(w["a"],Object.assign({},Object(y["a"])(this.props,t.propTypes),{ref:function(t){e._field=t},inputRef:this.handleInputRef,editable:this.props.editable,options:this.state.filteredOptions,size:this.props.size,disabled:this.props.disabled,readOnly:this.props.readOnly,onSelect:this.handleSelect,onStaticClick:this.focus,onClose:this.handleClose,onInputChange:this.handleInputChange,onKeyDown:this.handleKeyDown,optionsMaxWidth:this.props.optionsMaxWidth,closeOnSelect:this.props.closeOnSelect}),this.renderTags(),this.renderInputs())}},{key:"focused",get:function(){return Object(P["a"])(this._field)}},{key:"value",get:function(){return this.state.selectedOption.map((function(e){return e&&e.value}))}},{key:"isControlled",get:function(){return!!this.props.selectedOption}}])
t.displayName="SelectMultiple"
return t}(s["Component"]),G.propTypes={options:d.a.arrayOf(ne),inputRef:d.a.func,selectedOption:Object(g["a"])(d.a.arrayOf(d.a.oneOfType([d.a.string,ne])),"onChange","defaultSelectedOption"),defaultSelectedOption:d.a.arrayOf(d.a.oneOfType([d.a.string,ne])),editable:d.a.bool,name:d.a.string,size:d.a.oneOf(["small","medium","large"]),optionsMaxWidth:d.a.string,filter:d.a.func,formatSelectedOption:d.a.func,disabled:d.a.bool,readOnly:d.a.bool,onClose:d.a.func,onChange:d.a.func,onInputChange:d.a.func,onOptionsChange:d.a.func,onKeyDown:d.a.func,closeOnSelect:d.a.bool,allowCustom:d.a.oneOf([false])},G.defaultProps={inputRef:function(){},formatSelectedOption:function(e){return e.children||e.label},onClose:function(){},onChange:function(e,t){},onInputChange:function(e){},onOptionsChange:function(e){},onKeyDown:function(e){},closeOnSelect:true,allowCustom:false,readOnly:false,disabled:false,filter:void 0,optionsMaxWidth:void 0,size:void 0,name:void 0,editable:false,selectedOption:void 0,defaultSelectedOption:void 0,options:void 0},ee))||V)||V)
function ie(e){var t=s["Children"].map(e,(function(e){var t=e.props,n=t.label,o=t.value,i=t.children
if("optgroup"===e.type){var a=[]
var r=o||n
a.push(c.a.createElement("option",Object.assign({},e.props,{value:r,group:r,groupLabel:true,disabled:true}),n))
s["Children"].forEach(i,(function(e,t){a.push(c.a.createElement("option",Object.assign({},e.props,{group:r,groupItem:true}),e.props.children))}))
return a}return e}))
return s["Children"].map(t,(function(e){var t=e.props,n=t.label,o=t.id,i=t.value,a=t.children,r=t.disabled,l=t.icon,s=t.group,c=t.groupLabel,u=t.groupItem
return{id:o||i,label:n||a,children:a||n,disabled:r||false,value:i,icon:l||null,group:s||null,groupLabel:c||false,groupItem:u||false}}))||[]}n.d(t,"a",(function(){return ue}))
var ae,re,le,se,ce
var ue=(ae=Object(O["a"])(),re=Object(v["a"])("7.0.0",null,"Use SimpleSelect from ui-simple-select for basic configurations or Select from ui-select for more complex configuations."),ae(le=re(le=(ce=se=function(e){Object(l["a"])(t,e)
function t(e){var n
Object(o["a"])(this,t)
n=Object(a["a"])(this,Object(r["a"])(t).call(this,e))
n._input=null
n.focus=function(){n._subComponent&&n._subComponent.focus()}
n.handleRef=function(e){n._subComponent=e}
var i=ie(e.children)
e.allowCustom&&e.multiple
n.state={options:i}
return n}Object(i["a"])(t,[{key:"componentWillReceiveProps",value:function(e){var t=ie(e.children)
f()(this.state.options,t)||this.setState({options:t})}},{key:"render",value:function(){var e=this.props.multiple?oe:D
var t=this.props.defaultOption
t||this.props.allowCustom||(t=this.props.value)
if(!this.props.editable&&!this.props.allowCustom&&!this.props.multiple&&"undefined"===typeof t)for(var n=0;this.state.options.length;n++){var o=this.state.options[n]
if(!o.disabled){t=o
break}}return c.a.createElement(e,Object.assign({ref:this.handleRef},Object(y["a"])(this.props,{},["multiple","defaultOption",this.props.multiple?"":"formatSelectedOption"]),{options:this.state.options,defaultSelectedOption:t,closeOnSelect:this.props.closeOnSelect}))}},{key:"focused",get:function(){return this._subComponent&&this._subComponent.focused}},{key:"invalid",get:function(){return!!this.props.messages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}},{key:"value",get:function(){return this._subComponent&&this._subComponent.value}}])
t.displayName="Select"
return t}(s["Component"]),se.propTypes={multiple:d.a.bool,editable:d.a.bool,children:h["a"].oneOf(["option","optgroup"]),inputRef:d.a.func,value:d.a.string,selectedOption:Object(g["a"])(d.a.oneOfType([d.a.string,d.a.shape({label:d.a.string.isRequired,value:d.a.string.isRequired,id:d.a.oneOfType([d.a.string,d.a.number]),children:d.a.node,disabled:d.a.bool,icon:d.a.func,groupLabel:d.a.bool}),d.a.arrayOf(d.a.oneOfType([d.a.string,d.a.shape({label:d.a.string.isRequired,value:d.a.string.isRequired,id:d.a.oneOfType([d.a.string,d.a.number]),children:d.a.node,disabled:d.a.bool,icon:d.a.func,groupLabel:d.a.bool})]))]),"onChange","defaultOption"),defaultOption:d.a.oneOfType([d.a.string,d.a.shape({label:d.a.string.isRequired,value:d.a.string.isRequired,id:d.a.oneOfType([d.a.string,d.a.number]),children:d.a.node,disabled:d.a.bool,icon:d.a.func,groupLabel:d.a.bool}),d.a.arrayOf(d.a.oneOfType([d.a.string,d.a.shape({label:d.a.string.isRequired,value:d.a.string.isRequired,id:d.a.oneOfType([d.a.string,d.a.number]),children:d.a.node,disabled:d.a.bool,icon:d.a.func,groupLabel:d.a.bool})]))]),allowEmpty:d.a.bool,allowCustom:d.a.bool,id:d.a.string,placement:m["a"].placement,messages:d.a.arrayOf(b["FormPropTypes"].message),size:d.a.oneOf(["small","medium","large"]),layout:d.a.oneOf(["stacked","inline"]),optionsMaxWidth:d.a.string,loadingText:d.a.string,emptyOption:d.a.node,visibleOptionsCount:d.a.oneOfType([d.a.string,d.a.number]),assistiveText:d.a.string,announcement:d.a.string,filter:d.a.func,formatSelectedOption:d.a.func,disabled:d.a.bool,readOnly:d.a.bool,onPositioned:d.a.func,onOpen:d.a.func,onClose:d.a.func,onChange:d.a.func,onInputChange:d.a.func,onOptionsChange:d.a.func,onBlur:d.a.func,onClick:d.a.func,closeOnSelect:d.a.bool,constrain:m["a"].constrain},se.defaultProps={multiple:false,editable:false,allowEmpty:true,allowCustom:false,emptyOption:"---",selectedOption:null,size:"medium",loadingText:null,visibleOptionsCount:8,optionsMaxWidth:null,inputRef:function(e){},filter:function(e,t){return e.filter((function(e){return e.label.toLowerCase().startsWith(t.toLowerCase())}))},formatSelectedOption:function(e){return e.label||e.children},closeOnSelect:true,constrain:"window",onBlur:void 0,onClick:void 0,onOptionsChange:void 0,onInputChange:void 0,onChange:void 0,onClose:void 0,onOpen:void 0,onPositioned:void 0,readOnly:false,disabled:false,announcement:void 0,assistiveText:void 0,layout:void 0,messages:void 0,placement:void 0,id:void 0,defaultOption:void 0,value:void 0,children:null},ce))||le)||le)},DmXP:function(e,t,n){"use strict"
var o=Date.prototype.getDay
var i=function(e){try{o.call(e)
return true}catch(e){return false}}
var a=Object.prototype.toString
var r="[object Date]"
var l="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag
e.exports=function(e){if("object"!==typeof e||null===e)return false
return l?i(e):a.call(e)===r}},HH6Z:function(e,t,n){"use strict"
var o=n("82c2").supportsDescriptors
var i=n("V+xs")
var a=Object.getOwnPropertyDescriptor
var r=Object.defineProperty
var l=TypeError
var s=Object.getPrototypeOf
var c=/a/
e.exports=function(){if(!o||!s)throw new l("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors")
var e=i()
var t=s(c)
var n=a(t,"flags")
n&&n.get===e||r(t,"flags",{configurable:true,enumerable:false,get:e})
return e}},Mwhx:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
function o(e){if("string"===typeof e)return e
if(!e||"object"!==typeof e)return null
if("undefined"!==typeof e.id&&null!==e.id)return e.id
if("undefined"!==typeof e.value&&null!==e.value)return e.value
return null}},"V+xs":function(e,t,n){"use strict"
var o=n("VwiP")
var i=n("82c2").supportsDescriptors
var a=Object.getOwnPropertyDescriptor
var r=TypeError
e.exports=function(){if(!i)throw new r("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors")
if("gim"===/a/gim.flags){var e=a(RegExp.prototype,"flags")
if(e&&"function"===typeof e.get&&"boolean"===typeof/a/.dotAll)return e.get}return o}},VwiP:function(e,t,n){"use strict"
var o=Object
var i=TypeError
e.exports=function(){if(null!=this&&this!==o(this))throw new i("RegExp.prototype.flags getter called on non-object")
var e=""
this.global&&(e+="g")
this.ignoreCase&&(e+="i")
this.multiline&&(e+="m")
this.dotAll&&(e+="s")
this.unicode&&(e+="u")
this.sticky&&(e+="y")
return e}},aI7X:function(e,t,n){"use strict"
var o="Function.prototype.bind called on incompatible "
var i=Array.prototype.slice
var a=Object.prototype.toString
var r="[object Function]"
e.exports=function(e){var t=this
if("function"!==typeof t||a.call(t)!==r)throw new TypeError(o+t)
var n=i.call(arguments,1)
var l
var s=function(){if(this instanceof l){var o=t.apply(this,n.concat(i.call(arguments)))
if(Object(o)===o)return o
return this}return t.apply(e,n.concat(i.call(arguments)))}
var c=Math.max(0,t.length-n.length)
var u=[]
for(var d=0;d<c;d++)u.push("$"+d)
l=Function("binder","return function ("+u.join(",")+"){ return binder.apply(this,arguments); }")(s)
if(t.prototype){var p=function(){}
p.prototype=t.prototype
l.prototype=new p
p.prototype=null}return l}},bbcx:function(e,t,n){"use strict"
var o=function(e){return e!==e}
e.exports=function(e,t){if(0===e&&0===t)return 1/e===1/t
if(e===t)return true
if(o(e)&&o(t))return true
return false}},f66B:function(e,t,n){var o=n("1seS")
var i=n("45zb")
var a=n("bbcx")
var r=n("2Nju")
var l=n("5xAX")
var s=n("DmXP")
var c=Date.prototype.getTime
function u(e,t,n){var o=n||{}
if(o.strict?a(e,t):e===t)return true
if(!e||!t||"object"!==typeof e&&"object"!==typeof t)return o.strict?a(e,t):e==t
return f(e,t,o)}function d(e){return null===e||void 0===e}function p(e){if(!e||"object"!==typeof e||"number"!==typeof e.length)return false
if("function"!==typeof e.copy||"function"!==typeof e.slice)return false
if(e.length>0&&"number"!==typeof e[0])return false
return true}function f(e,t,n){var a,f
if(typeof e!==typeof t)return false
if(d(e)||d(t))return false
if(e.prototype!==t.prototype)return false
if(i(e)!==i(t))return false
var h=r(e)
var g=r(t)
if(h!==g)return false
if(h||g)return e.source===t.source&&l(e)===l(t)
if(s(e)&&s(t))return c.call(e)===c.call(t)
var b=p(e)
var m=p(t)
if(b!==m)return false
if(b||m){if(e.length!==t.length)return false
for(a=0;a<e.length;a++)if(e[a]!==t[a])return false
return true}if(typeof e!==typeof t)return false
try{var v=o(e)
var y=o(t)}catch(e){return false}if(v.length!==y.length)return false
v.sort()
y.sort()
for(a=v.length-1;a>=0;a--)if(v[a]!=y[a])return false
for(a=v.length-1;a>=0;a--){f=v[a]
if(!u(e[f],t[f],n))return false}return true}e.exports=u},oNNP:function(e,t,n){"use strict"
var o=n("D3zA")
e.exports=o.call(Function.call,Object.prototype.hasOwnProperty)},rRj0:function(e,t,n){"use strict"
var o=n("rePB")
var i=n("KQm4")
var a=n("1OyB")
var r=n("vuIU")
var l=n("md7G")
var s=n("foSv")
var c=n("Ji7U")
var u=n("q1tI")
var d=n.n(u)
var p=n("17x9")
var f=n.n(p)
var h=n("TSYQ")
var g=n.n(h)
var b=n("3zPy")
var m=n.n(b)
var v=n("MicT")
var y=n("rW8M")
var O=n("6SzX")
var _=n("sTNg")
var x=n("8OEV")
var w=n("u9uf")
var C=n("QF4Q")
var S=n("K7t/")
var k=n("/UXv")
var j=n("9yTY")
var K=n("BTe1")
var T=n("J2CL")
var D=n("oXx0")
var E=n("jtGx")
var I=n("Afqh")
var z=n("1oPx")
var P=n("Mwhx")
function R(e){var t=e.colors,n=e.typography,o=e.borders,i=e.spacing,a=(e.stacking,e.forms)
return{fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,borderWidth:o.widthSmall,borderStyle:o.style,borderColor:t.borderMedium,borderRadius:o.radiusMedium,color:t.textDarkest,iconColor:t.textDarkest,background:t.backgroundLightest,inputPadding:i.small,focusOutlineWidth:o.widthMedium,focusOutlineColor:t.borderBrand,focusOutlineStyle:o.style,errorBorderColor:t.borderDanger,errorOutlineColor:t.borderDanger,placeholderColor:t.textDark,smallFontSize:n.fontSizeSmall,smallHeight:a.inputHeightSmall,mediumFontSize:n.fontSizeMedium,mediumHeight:a.inputHeightMedium,largeFontSize:n.fontSizeLarge,largeHeight:a.inputHeightLarge}}R.canvas=function(e){return{color:e["ic-brand-font-color-dark"],focusBorderColor:e["ic-brand-primary"],focusOutlineColor:e["ic-brand-primary"]}}
n.d(t,"a",(function(){return N}))
var M,Q,B,F,W
var L={componentId:"bgKsu",template:function(e){return"\n\n.bgKsu_engK{display:block;position:relative}\n\n.bgKsu_engK:before{border:".concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit",'*1.5);bottom:-0.25rem;box-sizing:border-box;content:"";display:block;left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.bgKsu_engK.bgKsu_eWbJ:before{opacity:1;transform:scale(1)}\n\n.bgKsu_engK.bgKsu_eWbJ.bgKsu_fszt:before{border-color:').concat(e.errorOutlineColor||"inherit","}\n\n.bgKsu_dtDb{background:").concat(e.background||"inherit",";border:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";box-sizing:border-box;display:flex;flex-wrap:wrap;font-family:").concat(e.fontFamily||"inherit",";margin:0;min-width:0.0625rem;overflow:hidden}\n\n.bgKsu_dtDb.bgKsu_fszt,.bgKsu_dtDb.bgKsu_fszt.bgKsu_eWbJ{border-color:").concat(e.errorBorderColor||"inherit","}\n\n.bgKsu_dtDb.bgKsu_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.bgKsu_dtDb.bgKsu_doqw{font-size:").concat(e.smallFontSize||"inherit","}\n\n.bgKsu_dtDb.bgKsu_ycrn{font-size:").concat(e.mediumFontSize||"inherit","}\n\n.bgKsu_dtDb.bgKsu_cMDj{font-size:").concat(e.largeFontSize||"inherit","}\n\n.bgKsu_ccod{display:flex;flex:1 1 auto;position:relative}\n\n.bgKsu_cwos,input[type].bgKsu_cwos{-moz-appearance:none;-moz-osx-font-smoothing:grayscale;-webkit-appearance:none;-webkit-font-smoothing:antialiased;all:initial;animation:none 0s ease 0s 1 normal none running;appearance:none;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:#000;color:").concat(e.color||"inherit",";column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;cursor:default;direction:ltr;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-family:inherit;font-size:medium;font-size:inherit;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:").concat(e.fontWeight||"inherit",";height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;line-height:1;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding:0 ").concat(e.inputPadding||"inherit",";page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align:start;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;width:100%;word-spacing:normal;z-index:auto}\n\n[dir=ltr] .bgKsu_cwos,[dir=ltr] input[type].bgKsu_cwos{text-align:left}\n\n[dir=rtl] .bgKsu_cwos,[dir=rtl] input[type].bgKsu_cwos{text-align:right}\n\n.bgKsu_cwos::-ms-clear,input[type].bgKsu_cwos::-ms-clear{display:none}\n\n.bgKsu_cwos.bgKsu_bfxl,input[type].bgKsu_cwos.bgKsu_bfxl{cursor:text}\n\n.bgKsu_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button,input[type].bgKsu_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button{display:none!important}\n\n.bgKsu_cwos:-ms-input-placeholder,input[type].bgKsu_cwos:-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.bgKsu_cwos::-ms-input-placeholder,input[type].bgKsu_cwos::-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.bgKsu_cwos::placeholder,input[type].bgKsu_cwos::placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.bgKsu_doqw .bgKsu_cwos,.bgKsu_doqw input[type].bgKsu_cwos{min-height:calc(").concat(e.smallHeight||"inherit"," - 0.125rem)}\n\n.bgKsu_ycrn .bgKsu_cwos,.bgKsu_ycrn input[type].bgKsu_cwos{min-height:calc(").concat(e.mediumHeight||"inherit"," - 0.125rem)}\n\n.bgKsu_cMDj .bgKsu_cwos,.bgKsu_cMDj input[type].bgKsu_cwos{min-height:calc(").concat(e.largeHeight||"inherit"," - 0.125rem)}\n\n.bgKsu_ewVP{-webkit-margin-end:0;-webkit-margin-start:").concat(e.inputPadding||"inherit",";align-items:center;display:flex;height:100%;margin-inline-end:0;margin-inline-start:").concat(e.inputPadding||"inherit","}\n\n[dir=ltr] .bgKsu_ewVP{margin-left:").concat(e.inputPadding||"inherit",";margin-right:0}\n\n[dir=rtl] .bgKsu_ewVP{margin-left:0;margin-right:").concat(e.inputPadding||"inherit","}\n\n.bgKsu_dnnz{-webkit-margin-end:").concat(e.inputPadding||"inherit",";-webkit-margin-start:0;align-self:center;display:flex;fill:").concat(e.iconColor||"inherit",";flex-shrink:0;margin-inline-end:").concat(e.inputPadding||"inherit",";margin-inline-start:0;pointer-events:none}\n\n[dir=ltr] .bgKsu_dnnz{margin-left:0;margin-right:").concat(e.inputPadding||"inherit","}\n\n[dir=rtl] .bgKsu_dnnz{margin-left:").concat(e.inputPadding||"inherit",";margin-right:0}\n\n.bgKsu_blJt{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-family:inherit;font-size:medium;font-size:inherit;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:inherit;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;line-height:inherit;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align:inherit;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n[dir=ltr] .bgKsu_blJt,[dir=rtl] .bgKsu_blJt{text-align:inherit}")},inputWidth:"bgKsu_engK",focus:"bgKsu_eWbJ",invalid:"bgKsu_fszt",inputContainer:"bgKsu_dtDb",disabled:"bgKsu_ywdX",small:"bgKsu_doqw",medium:"bgKsu_ycrn",large:"bgKsu_cMDj",inputLayout:"bgKsu_ccod",input:"bgKsu_cwos",editable:"bgKsu_bfxl",inputIcon:"bgKsu_ewVP",icon:"bgKsu_dnnz",label:"bgKsu_blJt"}
var N=(M=Object(D["a"])(),Q=Object(T["themeable"])(R,L),M(B=Q(B=(W=F=function(e){Object(c["a"])(t,e)
function t(e){var n
Object(a["a"])(this,t)
n=Object(l["a"])(this,Object(s["a"])(t).call(this,e))
n._menu=null
n._input=null
n._inputContainer=null
n._timeouts=[]
n.timeoutId=null
n.open=function(){n.setState((function(){return{expanded:true}}),(function(){n.highlightSelectedOption()
n.props.onOpen()}))}
n.close=function(e,t){n.setState((function(o){o.expanded&&n.props.onClose(e,t)
return{expanded:false}}))}
n.select=function(e,t){n.props.onSelect(e,t)
if(n.props.closeOnSelect){e.preventDefault()
n.close(e,t)}}
n.highlightSelectedOption=function(){var e=0
n.selectedIndex>0&&(e=n.selectedIndex)
n._timeouts.push(setTimeout((function(){n.highlightOption(e)}),0))}
n.highlightOption=function(e){var t=n.props.options[e]
if(!n.props.loadingText&&t){if(t.disabled||t.groupLabel){e>n.state.highlightedIndex&&e+1<n.props.options.length?n.highlightOption(e+1):e<n.state.highlightedIndex&&e-1>=0&&n.highlightOption(e-1)
return}n.setState({highlightedIndex:e})
n.props.onHighlight(e)
var o=Object(C["a"])(n._menu)
if(o){var i=o.querySelectorAll("li")[e]
var a=o.scrollTop
var r=i.offsetTop
var l=a+o.clientHeight
var s=r+i.clientHeight
s>l?o.scrollTop=s-o.clientHeight:r<a&&(o.scrollTop=r)}}}
n.handleHomeKey=function(e){n.props.options.length>0&&n.highlightOption(0)}
n.handleEndKey=function(e){n.props.options.length>0&&n.highlightOption(n.props.options.length-1)}
n.handleEnterKey=function(e){n.expanded&&!n.props.loadingText&&n.props.options.length&&n.select(e,n.props.options[n.state.highlightedIndex])}
n.handleUpArrowKey=function(e){if(n.expanded){var t=Math.max(0,n.state.highlightedIndex-1)
var o=n.props.options[t]
var i=n._menu.querySelectorAll("li")[t]
n.highlightOption(t)
i&&o&&!o.disabled&&!o.groupLabel&&i.focus()}else n.open()}
n.handleDownArrowKey=function(e){if(n.expanded){var t=Math.min(n.props.options.length-1,n.state.highlightedIndex+1)
var o=n.props.options[t]
var i=n._menu.querySelectorAll("li")[t]
n.highlightOption(t)
i&&o&&!o.disabled&&!o.groupLabel&&i.focus()}else n.open()}
n.handleSpaceKey=function(e){if(!n.expanded){e.preventDefault()
n.open()}}
n.keyMap={up:n.handleUpArrowKey,down:n.handleDownArrowKey,home:n.handleHomeKey,end:n.handleEndKey,enter:n.handleEnterKey,space:n.handleSpaceKey}
n.handlePositioned=function(){n.setState({positioned:true},(function(){return n.props.onPositioned()}))}
n.handleKeyDown=function(e){var t=m.a.names[e.keyCode]
if(n.keyMap.hasOwnProperty(t)){"enter"===t&&!n.expanded||"space"===t||e.preventDefault()
n.keyMap[t](e)}else n._input&&n.props.editable&&n._input.focus()
"tab"===t&&n._input.focus()
n.props.onKeyDown(e)}
n.handleKeyUp=function(e){var t=m.a.names[e.keyCode]
if("esc"===t&&n.expanded){e.preventDefault()
n._input&&n._input.focus()
n.close(e)}n.props.onKeyUp(e)}
n.handleMouseDown=function(e){e.preventDefault()}
n.handleFocus=function(e){n.setState((function(){return{focus:true}}))
n.props.onFocus(e)}
n.handleBlur=function(e){e.persist()
var t=n._inputContainer.contains(e.relatedTarget)
!t&&n.expanded&&(t=n._menu.contains(e.relatedTarget))
n.setState((function(){return{focus:t}}),(function(){n.expanded&&!t&&n._timeouts.push(setTimeout((function(){Object(S["a"])(n._menu)||n.close(e)}),0))
t||n.props.onBlur(e)}))}
n.handleClick=function(e){e.preventDefault()
if(n.props.disabled||n.props.readOnly)return
if(n.expanded)n.close()
else{n._input&&!Object(k["a"])(n._input)&&n._input.focus()
n.open()}n.props.onClick(e)}
n.handleChange=function(e){n.expanded||n.open()
n.props.onInputChange(e,e.target.value)}
n.handleMenuRef=function(e){n._menu=e}
n.handleInputRef=function(e){n._input=e}
n.handleInputContainerRef=function(e){n._inputContainer=e}
n.state={focus:false,highlightedIndex:n.getSelectedIndex(e),expanded:false,positioned:false}
n._defaultId=Object(K["a"])("Select")
n._optionsId=Object(K["a"])("Select-Options")
n._assistId=Object(K["a"])("Select-assistiveText")
return n}Object(r["a"])(t,[{key:"getSelectedIndex",value:function(e){if(e.selectedOption){var t=e.options.findIndex((function(t){return Object(P["a"])(t)===Object(P["a"])(e.selectedOption)}))
return Math.max(t,0)}return-1}},{key:"componentWillReceiveProps",value:function(e){this.props.options!==e.options&&this.highlightSelectedOption()}},{key:"componentWillUnmount",value:function(){this._timeouts.forEach((function(e){return clearTimeout(e)}))}},{key:"renderIcon",value:function(){if("function"===typeof this.props.selectedOption.icon){var e=this.props.selectedOption.icon
return d.a.createElement("span",{className:L.inputIcon},d.a.createElement(e,null))}}},{key:"render",value:function(){var e,n
var a=this.props,r=a.size,l=a.disabled,s=a.readOnly,c=a.editable,u=a.required,p=a.width,f=a.options,h=a.selectedOption,b=a.loadingText,m=a.emptyOption,w=a.visibleOptionsCount,C=a.children,S=a.onStaticClick,k=a.assistiveText,K=a.layout,T=a.announcement,D=a.constrain
var P=Object(E["a"])(this.props,t.propTypes,["allowEmpty","assistiveText","value"].concat(Object(i["a"])(Object.keys(_["FormField"].propTypes))))
var R=f[this.state.highlightedIndex]
R&&this.expanded?P["aria-activedescendant"]="".concat(this._optionsId,"_").concat(R.id):P["aria-activedescendant"]=null
var M=d.a.createElement("label",{htmlFor:this.id,className:L.label},this.props.label)
Object(y["a"])(this.props.label)||(M=d.a.createElement(O["a"],null,M))
return d.a.createElement(_["FormFieldLayout"],Object.assign({},Object(E["c"])(this.props,_["FormFieldLayout"].propTypes),{as:"span",label:M,id:this.id,vAlign:"inline"===K?"middle":null,onMouseDown:this.handleMouseDown}),d.a.createElement("span",{style:{width:p||"auto"},className:g()(L.inputWidth,(e={},Object(o["a"])(e,L.invalid,this.invalid),Object(o["a"])(e,L.focus,this.state.focus),e))},d.a.createElement("span",{ref:this.handleInputContainerRef,className:g()(L.inputContainer,(n={},Object(o["a"])(n,L.invalid,this.invalid),Object(o["a"])(n,L.disabled,l),Object(o["a"])(n,L[r],r),Object(o["a"])(n,L.focus,this.state.focus),n))},C,d.a.createElement("span",{className:L.inputLayout,onClick:this.handleClick},h&&this.renderIcon(),d.a.createElement("input",Object.assign({},P,{id:this.id,className:g()(L.input,Object(o["a"])({},L.editable,c)),onFocus:this.handleFocus,onChange:c?this.handleChange:null,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onBlur:this.handleBlur,type:"text",ref:Object(j["a"])(this.props.inputRef,this.handleInputRef),role:"combobox","aria-expanded":this.expanded,"aria-owns":this.expanded?this._optionsId:null,"aria-describedby":this._assistId,"aria-controls":this.expanded?this._optionsId:null,"aria-autocomplete":c?"list":null,"aria-haspopup":"true",autoComplete:c?"off":null,required:u,"aria-required":u,"aria-invalid":this.invalid?"true":null,readOnly:!c,disabled:l||s})),d.a.createElement(I["a"],{width:"0.875rem",height:"0.875rem",className:L.icon})))),d.a.createElement(v["a"],{open:this.state.expanded},d.a.createElement(x["a"],{trackPosition:this.expanded,placement:this.placement,onPositioned:this.handlePositioned,target:this._inputContainer,constrain:D},d.a.createElement(x["a"].Content,null,d.a.createElement(z["a"],{options:f,selectedOption:h,optionsId:this._optionsId,menuRef:this.handleMenuRef,visibleOptionsCount:w,loadingText:b,emptyOption:m,onStaticClick:S,onHighlightOption:this.highlightOption,onSelect:this.select,expanded:this.state.expanded,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onBlur:this.handleBlur,highlightedIndex:this.state.highlightedIndex,maxWidth:this.props.optionsMaxWidth})))),d.a.createElement("span",{id:this._assistId,style:{display:"none"}},k),d.a.createElement(O["a"],null,d.a.createElement("span",{role:"log","aria-live":"polite","aria-atomic":"true"},T)))}},{key:"id",get:function(){return this.props.id||this._defaultId}},{key:"expanded",get:function(){return this.state.positioned&&this.state.expanded}},{key:"placement",get:function(){return this.state.expanded?this.props.placement||"bottom stretch":"offscreen"}},{key:"invalid",get:function(){return this.props.messages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}},{key:"selectedIndex",get:function(){return this.getSelectedIndex(this.props)}}])
t.displayName="SelectField"
return t}(u["Component"]),F.propTypes={selectedOption:f.a.oneOfType([f.a.string,f.a.shape({label:f.a.string.isRequired,value:f.a.string.isRequired,id:f.a.oneOfType([f.a.string,f.a.number]),children:f.a.node,disabled:f.a.bool,icon:f.a.func,groupLabel:f.a.bool})]),options:f.a.arrayOf(f.a.shape({label:f.a.string.isRequired,value:f.a.string.isRequired,id:f.a.oneOfType([f.a.string,f.a.number]),children:f.a.node,disabled:f.a.bool,icon:f.a.func,groupLabel:f.a.bool})),placement:w["a"].placement,label:f.a.node.isRequired,messages:f.a.arrayOf(_["FormPropTypes"].message),size:f.a.oneOf(["small","medium","large"]),layout:f.a.oneOf(["stacked","inline"]),optionsMaxWidth:f.a.string,loadingText:f.a.string,editable:f.a.bool,emptyOption:f.a.node,visibleOptionsCount:f.a.oneOfType([f.a.string,f.a.number]),assistiveText:f.a.string,announcement:f.a.string,onPositioned:f.a.func,onSelect:f.a.func,onStaticClick:f.a.func,onHighlight:f.a.func,width:f.a.string,inline:f.a.bool,children:f.a.node,onFocus:f.a.func,onBlur:f.a.func,onKeyDown:f.a.func,onKeyUp:f.a.func,onClick:f.a.func,onInputChange:f.a.func,onOpen:f.a.func,onClose:f.a.func,id:f.a.string,inputRef:f.a.func,closeOnSelect:f.a.bool,constrain:w["a"].constrain,disabled:f.a.bool,readOnly:f.a.bool,required:f.a.bool},F.defaultProps={emptyOption:"---",selectedOption:null,size:"medium",loadingText:null,announcement:null,options:[],visibleOptionsCount:8,closeOnSelect:true,editable:false,inline:false,constrain:"window",onPositioned:function(){},onSelect:function(e,t){},onStaticClick:function(e){},onHighlight:function(e){},onClick:function(e){},onInputChange:function(e){},onFocus:function(e){},onBlur:function(e){},onKeyDown:function(e){},onKeyUp:function(e){},onOpen:function(e){},onClose:function(e){},disabled:false,readOnly:false,required:false,inputRef:void 0,id:void 0,children:null,width:void 0,assistiveText:void 0,optionsMaxWidth:void 0,layout:void 0,messages:void 0,placement:void 0},W))||B)||B)},sYn3:function(e,t,n){"use strict"
var o
if(!Object.keys){var i=Object.prototype.hasOwnProperty
var a=Object.prototype.toString
var r=n("1KsK")
var l=Object.prototype.propertyIsEnumerable
var s=!l.call({toString:null},"toString")
var c=l.call((function(){}),"prototype")
var u=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]
var d=function(e){var t=e.constructor
return t&&t.prototype===e}
var p={$applicationCache:true,$console:true,$external:true,$frame:true,$frameElement:true,$frames:true,$innerHeight:true,$innerWidth:true,$onmozfullscreenchange:true,$onmozfullscreenerror:true,$outerHeight:true,$outerWidth:true,$pageXOffset:true,$pageYOffset:true,$parent:true,$scrollLeft:true,$scrollTop:true,$scrollX:true,$scrollY:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true}
var f=function(){if("undefined"===typeof window)return false
for(var e in window)try{if(!p["$"+e]&&i.call(window,e)&&null!==window[e]&&"object"===typeof window[e])try{d(window[e])}catch(e){return true}}catch(e){return true}return false}()
var h=function(e){if("undefined"===typeof window||!f)return d(e)
try{return d(e)}catch(e){return false}}
o=function(e){var t=null!==e&&"object"===typeof e
var n="[object Function]"===a.call(e)
var o=r(e)
var l=t&&"[object String]"===a.call(e)
var d=[]
if(!t&&!n&&!o)throw new TypeError("Object.keys called on a non-object")
var p=c&&n
if(l&&e.length>0&&!i.call(e,0))for(var f=0;f<e.length;++f)d.push(String(f))
if(o&&e.length>0)for(var g=0;g<e.length;++g)d.push(String(g))
else for(var b in e)p&&"prototype"===b||!i.call(e,b)||d.push(String(b))
if(s){var m=h(e)
for(var v=0;v<u.length;++v)m&&"constructor"===u[v]||!i.call(e,u[v])||d.push(u[v])}return d}}e.exports=o}}])

//# sourceMappingURL=22-c-91fb6912aa.js.map