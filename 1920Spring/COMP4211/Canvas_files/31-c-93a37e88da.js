(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[31],{"/5Zp":function(e,n,a){"use strict"
a.d(n,"a",(function(){return y}))
var t=a("1OyB")
var i=a("vuIU")
var o=a("md7G")
var r=a("foSv")
var c=a("Ji7U")
var l=a("q1tI")
var s=a.n(l)
var d=a("17x9")
var u=a.n(d)
var f=a("cClk")
var g=a("sTNg")
var h=a("BTe1")
var p=a("oXx0")
var m=a("4Awi")
var b=a("II2N")
var v=a("jtGx")
var A=a("GTSS")
var _,H,N,E
var y=(_=Object(p["a"])(),_(H=(E=N=function(e){Object(c["a"])(n,e)
function n(e){var a
Object(t["a"])(this,n)
a=Object(o["a"])(this,Object(r["a"])(n).call(this))
a.handleChange=function(e){var n=e.target.value
if(a.props.disabled||a.props.readOnly){e.preventDefault()
return}"undefined"===typeof a.props.value&&a.setState({value:n})
"function"===typeof a.props.onChange&&a.props.onChange(e,n)}
"undefined"===typeof e.value&&(a.state={value:e.defaultValue})
a._messagesId=Object(h["a"])("RadioInputGroup-messages")
return a}Object(i["a"])(n,[{key:"renderChildren",value:function(){var e=this
var n=this.props,a=n.children,t=n.name,i=n.variant,o=n.size,r=n.disabled,c=n.readOnly
return l["Children"].map(a,(function(n,a){if(Object(m["a"])(n,[A["a"]])){var l=e.value===n.props.value
var s=!e.value&&0===a
return Object(b["a"])(n,{name:t,disabled:r||n.props.disabled,variant:i,size:o,checked:l,onChange:e.handleChange,readOnly:c||n.props.readOnly,width:n.props.width||"auto","aria-describedby":e.hasMessages&&e._messagesId,tabIndex:l||s?"0":"-1"})}return n}))}},{key:"render",value:function(){var e=this.props,a=e.variant,t=e.layout
return s.a.createElement(g["FormFieldGroup"],Object.assign({},Object(v["a"])(this.props,n.propTypes),Object(v["c"])(this.props,g["FormFieldGroup"].propTypes),{layout:"columns"===t&&"toggle"===a?"stacked":t,vAlign:"toggle"===a?"middle":"top",rowSpacing:"small",colSpacing:"toggle"===a?"none":"small",startAt:"toggle"===a?"small":void 0,messagesId:this._messagesId}),this.renderChildren())}},{key:"hasMessages",get:function(){return this.props.messages&&this.props.messages.length>0}},{key:"value",get:function(){return"undefined"===typeof this.props.value?this.state.value:this.props.value}}])
n.displayName="RadioInputGroup"
return n}(l["Component"]),N.propTypes={name:u.a.string.isRequired,description:u.a.node.isRequired,defaultValue:u.a.oneOfType([u.a.string,u.a.number]),value:Object(f["a"])(u.a.oneOfType([u.a.string,u.a.number])),onChange:u.a.func,disabled:u.a.bool,readOnly:u.a.bool,messages:u.a.arrayOf(g["FormPropTypes"].message),children:u.a.node,variant:u.a.oneOf(["simple","toggle"]),size:u.a.oneOf(["small","medium","large"]),layout:u.a.oneOf(["stacked","columns","inline"])},N.defaultProps={disabled:false,variant:"simple",size:"medium",layout:"stacked",readOnly:false,defaultValue:void 0,value:void 0,children:null,messages:void 0,onChange:void 0},E))||H)},"/J48":function(e,n,a){"use strict"
a.d(n,"a",(function(){return v}))
var t=a("1OyB")
var i=a("vuIU")
var o=a("md7G")
var r=a("foSv")
var c=a("Ji7U")
var l=a("q1tI")
var s=a.n(l)
var d=a("17x9")
var u=a.n(d)
var f=a("nAyT")
var g=a("GTSS")
var h,p,m,b
var v=(h=Object(f["a"])("7.0.0",null,"Use RadioInput from ui-radio-input instead."),h(p=(b=m=function(e){Object(c["a"])(n,e)
function n(){var e
var a
Object(t["a"])(this,n)
for(var i=arguments.length,c=new Array(i),l=0;l<i;l++)c[l]=arguments[l]
a=Object(o["a"])(this,(e=Object(r["a"])(n)).call.apply(e,[this].concat(c)))
a._radioInput=null
return a}Object(i["a"])(n,[{key:"focus",value:function(){this._radioInput&&this._radioInput.focus()}},{key:"render",value:function(){var e=this
return s.a.createElement(g["a"],Object.assign({ref:function(n){e._radioInput=n}},this.props))}},{key:"id",get:function(){return this._radioInput&&this._radioInput.id}},{key:"focused",get:function(){return this._radioInput&&this._radioInput.focused}},{key:"checked",get:function(){return this._radioInput&&this._radioInput.checked}}])
n.displayName="RadioInput"
return n}(l["Component"]),m.propTypes={label:u.a.node.isRequired,value:u.a.oneOfType([u.a.string,u.a.number]),id:u.a.string,name:u.a.string,checked:u.a.bool,disabled:u.a.bool,readOnly:u.a.bool,variant:u.a.oneOf(["simple","toggle"]),size:u.a.oneOf(["small","medium","large"]),context:u.a.oneOf(["success","warning","danger","off"]),inline:u.a.bool,onClick:u.a.func,onChange:u.a.func},m.defaultProps={onClick:function(e){},onChange:function(e){},variant:"simple",size:"medium",disabled:false,inline:false,context:"success",readOnly:false,checked:void 0,id:void 0,name:void 0,value:void 0},b))||p)},GTSS:function(e,n,a){"use strict"
var t=a("rePB")
var i=a("1OyB")
var o=a("vuIU")
var r=a("md7G")
var c=a("foSv")
var l=a("Ji7U")
var s=a("q1tI")
var d=a.n(s)
var u=a("17x9")
var f=a.n(u)
var g=a("TSYQ")
var h=a.n(g)
var p=a("BTe1")
var m=a("J2CL")
var b=a("oXx0")
var v=a("jtGx")
var A=a("/UXv")
function _(e){var n=e.spacing,a=e.borders,t=e.colors,i=e.forms,o=e.shadows,r=e.typography
return{labelColor:t.textDarkest,labelFontFamily:r.fontFamily,labelFontWeight:r.fontWeightNormal,labelLineHeight:r.lineHeightCondensed,background:t.backgroundLightest,borderColor:t.borderDarkest,hoverBorderColor:t.borderDarkest,controlSize:"0.1875rem",focusBorderColor:t.borderBrand,focusBorderWidth:a.widthMedium,focusBorderStyle:a.style,simpleFacadeSmallSize:"1rem",simpleFacadeMediumSize:"1.25rem",simpleFacadeLargeSize:"1.75rem",simpleCheckedInsetSmall:"0.1875rem",simpleCheckedInsetMedium:"0.25rem",simpleCheckedInsetLarge:"0.375rem",simpleFontSizeSmall:r.fontSizeSmall,simpleFontSizeMedium:r.fontSizeMedium,simpleFontSizeLarge:r.fontSizeLarge,simpleFacadeMarginEnd:n.xSmall,toggleBorderRadius:a.radiusSmall,toggleBorderWidth:a.widthLarge,toggleBackgroundSuccess:t.backgroundSuccess,toggleBackgroundOff:t.backgroundDark,toggleBackgroundDanger:t.backgroundDanger,toggleBackgroundWarning:t.backgroundWarning,toggleHandleText:t.textLightest,toggleSmallHeight:i.inputHeightSmall,toggleMediumHeight:i.inputHeightMedium,toggleLargeHeight:i.inputHeightLarge,toggleShadow:o.depth1,toggleSmallFontSize:r.fontSizeXSmall,toggleMediumFontSize:r.fontSizeSmall,toggleLargeFontSize:r.fontSizeMedium}}_["canvas-a11y"]=_["canvas-high-contrast"]=function(e){var n=e.colors
return{toggleBackgroundOff:n.backgroundDarkest}}
_.canvas=function(e){return{focusBorderColor:e["ic-brand-primary"],borderColor:e["ic-brand-font-color-dark"],hoverBorderColor:e["ic-brand-font-color-dark"],labelColor:e["ic-brand-font-color-dark"]}}
a.d(n,"a",(function(){return O}))
var H,N,E,y,S
var k={componentId:"fNHEA",template:function(e){return"\n\n.fNHEA_bGBk{position:relative;width:100%}\n\n.fNHEA_bGBk:hover{cursor:default}\n\n.fNHEA_bOnW{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;direction:inherit;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align:start;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n[dir=ltr] .fNHEA_bOnW{text-align:left}\n\n[dir=rtl] .fNHEA_bOnW{text-align:right}\n\n.fNHEA_cwos,input.fNHEA_cwos[type=radio]{font-size:inherit;left:0;line-height:inherit;margin:0;opacity:0.0001;padding:0;position:absolute;top:0;width:auto}\n\n.fNHEA_ywdX{opacity:0.5}\n\n.fNHEA_ywdX:hover{cursor:not-allowed}\n\n.fNHEA_eXrk{display:inline-block;vertical-align:middle;width:auto}\n\n.fNHEA_blJt{color:".concat(e.labelColor||"inherit",";flex:1 1 auto;font-family:").concat(e.labelFontFamily||"inherit",";font-weight:").concat(e.labelFontWeight||"inherit",";line-height:").concat(e.labelLineHeight||"inherit","}\n\n.fNHEA_cAug .fNHEA_bOnW{align-items:flex-start;display:flex}\n\n.fNHEA_cAug .fNHEA_cSXm{-webkit-margin-end:").concat(e.simpleFacadeMarginEnd||"inherit",";-webkit-margin-start:0;background:").concat(e.background||"inherit",";border:0.125rem solid ").concat(e.borderColor||"inherit",";border-radius:100%;box-sizing:border-box;display:block;flex-shrink:0;margin-inline-end:").concat(e.simpleFacadeMarginEnd||"inherit",";margin-inline-start:0;min-width:1rem;position:relative;transition:all 0.2s ease-out}\n\n[dir=ltr] .fNHEA_cAug .fNHEA_cSXm{margin-left:0;margin-right:").concat(e.simpleFacadeMarginEnd||"inherit","}\n\n[dir=rtl] .fNHEA_cAug .fNHEA_cSXm{margin-left:").concat(e.simpleFacadeMarginEnd||"inherit",";margin-right:0}\n\n.fNHEA_cAug .fNHEA_cSXm:before{border:").concat(e.focusBorderWidth||"inherit"," ").concat(e.focusBorderStyle||"inherit"," ").concat(e.focusBorderColor||"inherit",';border-radius:100%;box-sizing:border-box;content:"";height:calc(100% + 0.75rem);left:-0.375rem;opacity:0;pointer-events:none;position:absolute;top:-0.375rem;transform:scale(0.75);transition:all 0.2s;width:calc(100% + 0.75rem)}\n\n.fNHEA_cAug.fNHEA_doqw .fNHEA_cSXm{height:').concat(e.simpleFacadeSmallSize||"inherit",";width:").concat(e.simpleFacadeSmallSize||"inherit","}\n\n.fNHEA_cAug.fNHEA_doqw .fNHEA_blJt{font-size:").concat(e.simpleFontSizeSmall||"inherit","}\n\n.fNHEA_cAug.fNHEA_doqw .fNHEA_cwos:checked+.fNHEA_bOnW .fNHEA_cSXm{box-shadow:inset 0 0 0 ").concat(e.simpleCheckedInsetSmall||"inherit"," ").concat(e.hoverBorderColor||"inherit","}\n\n.fNHEA_cAug.fNHEA_ycrn .fNHEA_cSXm{height:").concat(e.simpleFacadeMediumSize||"inherit",";width:").concat(e.simpleFacadeMediumSize||"inherit","}\n\n.fNHEA_cAug.fNHEA_ycrn .fNHEA_blJt{font-size:").concat(e.simpleFontSizeMedium||"inherit","}\n\n.fNHEA_cAug.fNHEA_ycrn .fNHEA_cwos:checked+.fNHEA_bOnW .fNHEA_cSXm{box-shadow:inset 0 0 0 ").concat(e.simpleCheckedInsetMedium||"inherit"," ").concat(e.hoverBorderColor||"inherit","}\n\n.fNHEA_cAug.fNHEA_cMDj .fNHEA_cSXm{height:").concat(e.simpleFacadeLargeSize||"inherit",";width:").concat(e.simpleFacadeLargeSize||"inherit","}\n\n.fNHEA_cAug.fNHEA_cMDj .fNHEA_blJt{font-size:").concat(e.simpleFontSizeLarge||"inherit","}\n\n.fNHEA_cAug.fNHEA_cMDj .fNHEA_cwos:checked+.fNHEA_bOnW .fNHEA_cSXm{box-shadow:inset 0 0 0 ").concat(e.simpleCheckedInsetLarge||"inherit"," ").concat(e.hoverBorderColor||"inherit","}\n\n.fNHEA_cAug .fNHEA_cwos:hover+.fNHEA_bOnW .fNHEA_cSXm{border-color:").concat(e.hoverBorderColor||"inherit","}\n\n.fNHEA_cAug .fNHEA_cwos:checked+.fNHEA_bOnW .fNHEA_cSXm{background:").concat(e.background||"inherit",";border-color:").concat(e.hoverBorderColor||"inherit",";box-shadow:inset 0 0 0 ").concat(e.controlSize||"inherit"," ").concat(e.hoverBorderColor||"inherit","}\n\n.fNHEA_cAug .fNHEA_cwos:focus+.fNHEA_bOnW .fNHEA_cSXm{background:").concat(e.background||"inherit","}\n\n.fNHEA_cAug .fNHEA_cwos:focus+.fNHEA_bOnW .fNHEA_cSXm:before{opacity:1;transform:scale(1)}\n\n.fNHEA_cjSw .fNHEA_bOnW{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;box-sizing:border-box;display:block;position:relative;user-select:none}\n\n.fNHEA_cjSw .fNHEA_blJt{align-items:center;display:flex;line-height:1;min-width:0.0625rem;overflow:hidden;position:relative;text-overflow:ellipsis;text-transform:uppercase;white-space:nowrap;z-index:1}\n\n.fNHEA_cjSw .fNHEA_cSXm{border-radius:").concat(e.toggleBorderRadius||"inherit",";box-shadow:").concat(e.toggleShadow||"inherit",";display:block;height:100%;left:0;top:0;visibility:hidden;width:100%;z-index:1}\n\n.fNHEA_cjSw .fNHEA_cSXm,.fNHEA_cjSw .fNHEA_cSXm:before{box-sizing:border-box;position:absolute}\n\n.fNHEA_cjSw .fNHEA_cSXm:before{border:").concat(e.focusBorderWidth||"inherit"," ").concat(e.focusBorderStyle||"inherit"," ").concat(e.focusBorderColor||"inherit",";border-radius:calc(").concat(e.toggleBorderRadius||"inherit",' + 0.0625rem);content:"";height:calc(100% + 0.5rem);left:-0.25rem;opacity:0;top:-0.25rem;transform:scale(0.75);transition:all 0.2s;width:calc(100% + 0.5rem)}\n\n.fNHEA_cjSw.fNHEA_cOXX .fNHEA_cSXm{background-color:').concat(e.toggleBackgroundSuccess||"inherit","}\n\n.fNHEA_cjSw.fNHEA_zGXc .fNHEA_cSXm{background-color:").concat(e.toggleBackgroundDanger||"inherit","}\n\n.fNHEA_cjSw.fNHEA_eRqw .fNHEA_cSXm{background-color:").concat(e.toggleBackgroundWarning||"inherit","}\n\n.fNHEA_cjSw.fNHEA_ksNK .fNHEA_cSXm{background-color:").concat(e.toggleBackgroundOff||"inherit","}\n\n.fNHEA_cjSw.fNHEA_doqw .fNHEA_bOnW{height:").concat(e.toggleSmallHeight||"inherit",";padding:0 0.5rem}\n\n.fNHEA_cjSw.fNHEA_doqw .fNHEA_bOnW .fNHEA_blJt{font-size:").concat(e.toggleSmallFontSize||"inherit",";height:").concat(e.toggleSmallHeight||"inherit","}\n\n.fNHEA_cjSw.fNHEA_doqw .fNHEA_bOnW .fNHEA_blJt svg{font-size:calc(").concat(e.toggleSmallFontSize||"inherit"," + 0.375rem)}\n\n.fNHEA_cjSw.fNHEA_ycrn .fNHEA_bOnW{height:").concat(e.toggleMediumHeight||"inherit",";padding:0 0.875rem}\n\n.fNHEA_cjSw.fNHEA_ycrn .fNHEA_bOnW .fNHEA_blJt{font-size:").concat(e.toggleMediumFontSize||"inherit",";height:").concat(e.toggleMediumHeight||"inherit","}\n\n.fNHEA_cjSw.fNHEA_ycrn .fNHEA_bOnW .fNHEA_blJt svg{font-size:calc(").concat(e.toggleMediumFontSize||"inherit"," + 0.375rem)}\n\n.fNHEA_cjSw.fNHEA_cMDj .fNHEA_bOnW{height:").concat(e.toggleLargeHeight||"inherit",";padding:0 1rem}\n\n.fNHEA_cjSw.fNHEA_cMDj .fNHEA_bOnW .fNHEA_blJt{font-size:").concat(e.toggleLargeFontSize||"inherit",";height:").concat(e.toggleLargeHeight||"inherit","}\n\n.fNHEA_cjSw.fNHEA_cMDj .fNHEA_bOnW .fNHEA_blJt svg{font-size:calc(").concat(e.toggleLargeFontSize||"inherit"," + 0.375rem)}\n\n.fNHEA_cjSw .fNHEA_cwos:checked+.fNHEA_bOnW .fNHEA_cSXm{visibility:visible}\n\n.fNHEA_cjSw .fNHEA_cwos:checked+.fNHEA_bOnW .fNHEA_blJt{color:").concat(e.toggleHandleText||"inherit","}\n\n.fNHEA_cjSw .fNHEA_cwos:focus+.fNHEA_bOnW .fNHEA_blJt{text-decoration:underline}\n\n.fNHEA_cjSw .fNHEA_cwos:focus+.fNHEA_bOnW .fNHEA_cSXm:before{opacity:1;transform:scale(1)}")},root:"fNHEA_bGBk",control:"fNHEA_bOnW",input:"fNHEA_cwos",disabled:"fNHEA_ywdX",inline:"fNHEA_eXrk",label:"fNHEA_blJt",simple:"fNHEA_cAug",facade:"fNHEA_cSXm",small:"fNHEA_doqw",medium:"fNHEA_ycrn",large:"fNHEA_cMDj",toggle:"fNHEA_cjSw",success:"fNHEA_cOXX",danger:"fNHEA_zGXc",warning:"fNHEA_eRqw",off:"fNHEA_ksNK"}
var O=(H=Object(b["a"])(),N=Object(m["themeable"])(_,k),H(E=N(E=(S=y=function(e){Object(l["a"])(n,e)
function n(e){var a
Object(i["a"])(this,n)
a=Object(r["a"])(this,Object(c["a"])(n).call(this,e))
a.handleClick=function(e){if(a.props.disabled||a.props.readOnly){e.preventDefault()
return}a.props.onClick(e)}
a.handleChange=function(e){if(a.props.disabled||a.props.readOnly){e.preventDefault()
return}"undefined"===typeof a.props.checked&&a.setState({checked:!a.state.checked})
a.props.onChange(e)}
a.state={}
"undefined"===typeof e.checked&&(a.state.checked=false)
a._defaultId=Object(p["a"])("RadioInput")
return a}Object(o["a"])(n,[{key:"focus",value:function(){this._input.focus()}},{key:"render",value:function(){var e,a=this
var i=this.props,o=i.disabled,r=i.readOnly,c=i.label,l=i.variant,s=i.size,u=i.inline,f=i.context,g=i.value,p=i.name
var m=Object(v["a"])(this.props,n.propTypes)
var b=(e={},Object(t["a"])(e,k.root,true),Object(t["a"])(e,k.disabled,o),Object(t["a"])(e,k[l],true),Object(t["a"])(e,k[f],"toggle"===l),Object(t["a"])(e,k[s],true),Object(t["a"])(e,k["inline"],u),e)
return d.a.createElement("div",{className:h()(b)},d.a.createElement("input",Object.assign({},m,{id:this.id,ref:function(e){a._input=e},value:g,name:p,checked:this.checked,type:"radio",className:k.input,disabled:o||r,"aria-disabled":o||r?"true":null,onChange:this.handleChange,onClick:this.handleClick})),d.a.createElement("label",{className:k.control,htmlFor:this.id},d.a.createElement("span",{className:k.facade,"aria-hidden":"true"}),d.a.createElement("span",{className:k.label},c)))}},{key:"id",get:function(){return this.props.id||this._defaultId}},{key:"focused",get:function(){return Object(A["a"])(this._input)}},{key:"checked",get:function(){return"undefined"===typeof this.props.checked?this.state.checked:this.props.checked}}])
n.displayName="RadioInput"
return n}(s["Component"]),y.propTypes={label:f.a.node.isRequired,value:f.a.oneOfType([f.a.string,f.a.number]),id:f.a.string,name:f.a.string,checked:f.a.bool,disabled:f.a.bool,readOnly:f.a.bool,variant:f.a.oneOf(["simple","toggle"]),size:f.a.oneOf(["small","medium","large"]),context:f.a.oneOf(["success","warning","danger","off"]),inline:f.a.bool,onClick:f.a.func,onChange:f.a.func},y.defaultProps={onClick:function(e){},onChange:function(e){},variant:"simple",size:"medium",disabled:false,inline:false,context:"success",readOnly:false,checked:void 0,id:void 0,name:void 0,value:void 0},S))||E)||E)},ItdA:function(e,n,a){"use strict"
a.d(n,"a",(function(){return _}))
var t=a("1OyB")
var i=a("vuIU")
var o=a("md7G")
var r=a("foSv")
var c=a("Ji7U")
var l=a("q1tI")
var s=a.n(l)
var d=a("17x9")
var u=a.n(d)
var f=a("cClk")
var g=a("sTNg")
var h=a("nAyT")
var p=a("/5Zp")
var m,b,v,A
var _=(m=Object(h["a"])("7.0.0",null,"Use RadioInputGroup from ui-radio-input instead."),m(b=(A=v=function(e){Object(c["a"])(n,e)
function n(){var e
var a
Object(t["a"])(this,n)
for(var i=arguments.length,c=new Array(i),l=0;l<i;l++)c[l]=arguments[l]
a=Object(o["a"])(this,(e=Object(r["a"])(n)).call.apply(e,[this].concat(c)))
a._radioInputGroup=null
return a}Object(i["a"])(n,[{key:"render",value:function(){var e=this
return s.a.createElement(p["a"],Object.assign({ref:function(n){e._radioInputGroup=n}},this.props))}},{key:"hasMessages",get:function(){return this._radioInputGroup&&this._radioInputGroup.hasMessages}},{key:"value",get:function(){return this._radioInputGroup&&this._radioInputGroup.value}}])
n.displayName="RadioInputGroup"
return n}(l["Component"]),v.propTypes={name:u.a.string.isRequired,description:u.a.node.isRequired,defaultValue:u.a.oneOfType([u.a.string,u.a.number]),value:Object(f["a"])(u.a.oneOfType([u.a.string,u.a.number])),onChange:u.a.func,disabled:u.a.bool,readOnly:u.a.bool,messages:u.a.arrayOf(g["FormPropTypes"].message),children:u.a.node,variant:u.a.oneOf(["simple","toggle"]),size:u.a.oneOf(["small","medium","large"]),layout:u.a.oneOf(["stacked","columns","inline"])},v.defaultProps={disabled:false,variant:"simple",size:"medium",layout:"stacked",readOnly:false,defaultValue:void 0,value:void 0,children:null,messages:void 0,onChange:void 0},A))||b)}}])

//# sourceMappingURL=31-c-93a37e88da.js.map