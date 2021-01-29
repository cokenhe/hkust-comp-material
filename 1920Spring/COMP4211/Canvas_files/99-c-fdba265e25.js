(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[99],{"+Gzo":function(n,e,t){"use strict"
t.d(e,"a",(function(){return f}))
var a=t("VTBJ")
var i=t("1OyB")
var r=t("vuIU")
var o=t("md7G")
var c=t("foSv")
var l=t("Ji7U")
var d=t("q1tI")
var s=t.n(d)
var u=t("hPGw")
var v=s.a.createElement("path",{d:"M1706.235 1807.059H350.941V112.94h903.53v451.765h451.764v1242.353zm-338.823-1670.74l315.443 315.447h-315.443V136.32zm402.182 242.487L1440.372 49.58C1408.296 17.62 1365.717 0 1320.542 0H238v1920h1581.175V498.635c0-45.176-17.618-87.755-49.58-119.83zM576.823 1242.353h790.589v-112.94H576.823v112.94zm0-451.765h903.53V677.647h-903.53v112.941zm0 677.647h451.765v-112.941H576.823v112.941zm0-451.764h677.648V903.53H576.823v112.941zm0-451.765h451.765V451.765H576.823v112.941z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var f=function(n){Object(l["a"])(e,n)
function e(){Object(i["a"])(this,e)
return Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}Object(r["a"])(e,[{key:"render",value:function(){return s.a.createElement(u["a"],Object.assign({},this.props,{name:"IconDocument",viewBox:"0 0 1920 1920",bidirectional:true}),v)}}])
e.displayName="IconDocumentLine"
return e}(d["Component"])
f.glyphName="document"
f.variant="Line"
f.propTypes=Object(a["a"])({},u["a"].propTypes)},"+nEw":function(n,e,t){"use strict"
t.d(e,"a",(function(){return k}))
var a=t("KQm4")
var i=t("VTBJ")
var r=t("1OyB")
var o=t("vuIU")
var c=t("md7G")
var l=t("foSv")
var d=t("Ji7U")
var s=t("q1tI")
var u=t.n(s)
var v=t("17x9")
var f=t.n(v)
var p=t("cClk")
var h=t("q+Fq")
var m=t("ESkH")
var b=t("/0tP")
var g=t("sTNg")
var S=t("nAyT")
var _=t("oXx0")
var W=t("Ym/R")
var O=t("SNMn")
var y,A,M,j,z
var k=(y=Object(_["a"])(),A=Object(S["a"])("7.0.0",null,"Use @instructure/ui-date-input and @instructure/ui-select instead"),y(M=A(M=(z=j=function(n){Object(d["a"])(e,n)
function e(n,t){var a
Object(r["a"])(this,e)
a=Object(c["a"])(this,Object(l["a"])(e).call(this,n,t))
a.handleChange=function(n,e){var t=a.parseISO(e),i=t.iso,r=t.message
if(i&&i!==a.state.iso||!r){a.props.onChange&&a.props.onChange(n,i)
return a.setState({iso:i,message:r})}return a.setState({message:r})}
a.handleDateChange=function(n,e,t,i,r){var o=i?t:e
var c=a.combineDateAndTime(o,a.state.iso)
a.handleChange(n,c)}
a.handleTimeChange=function(n,e){var t=a.state.iso
if(t){var i=e&&e.value||""
a.handleChange(n,i)}else{var r=e&&e.label||""
a.setState({message:a.getErrorMessage("",r)})}}
a.handleBlur=function(n){a.props.required&&!a.state.iso&&a.setState({message:a.getErrorMessage()})
"function"===typeof a.props.onBlur&&window.setTimeout((function(){a.focused||a.props.onBlur(n)}),0)}
a.dateInputComponentRef=function(n){a._dateInput=n}
a.timeInputComponentRef=function(n){a._timeInput=n}
a.state=Object(i["a"])({},a.parseISO(n.value||n.defaultValue))
a._dateInput=null
a._timeInput=null
return a}Object(o["a"])(e,[{key:"componentWillReceiveProps",value:function(n){var e=this
var t=n.value!==this.props.value||n.defaultValue!==this.props.defaultValue
var a=t||n.locale!==this.props.locale||n.timezone!==this.props.timezone
a&&this.setState((function(a){var r=t?n.value||n.defaultValue:a.iso
return Object(i["a"])({},e.parseISO(r,n.locale,n.timezone))}))}},{key:"getErrorMessage",value:function(n,e){var t=this.props.invalidDateTimeMessage
var a="function"===typeof t?t(n,e):t
return a?{text:a,type:"error"}:null}},{key:"parseISO",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.locale
var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.timezone
var i=h["a"].parse(n,e,t)
if(i.isValid())return{iso:i.toISOString(true),message:{type:"success",text:i.format(this.props.messageFormat)}}
return{iso:void 0,message:n?this.getErrorMessage.apply(this,Object(a["a"])(n.split("T"))):null}}},{key:"combineDateAndTime",value:function(n,e){if(!n)return""
if(!e)return n
var t=n.replace(/T.*/,"")
var a=e.replace(/.*T/,"")
return"".concat(t,"T").concat(a)}},{key:"focus",value:function(){this._dateInput&&this._dateInput.focus()}},{key:"render",value:function(){var n=this.props,e=n.description,t=n.datePlaceholder,i=n.dateLabel,r=n.dateNextLabel,o=n.datePreviousLabel,c=n.dateFormat,l=n.dateInputRef,d=n.timeLabel,s=n.timeFormat,v=n.timeStep,f=n.timeInputRef,p=n.locale,h=n.timezone,m=n.messages,b=n.layout,S=n.required,_=n.disabled,y=n.readOnly
var A=this.state,M=A.iso,j=A.message
return u.a.createElement(g["FormFieldGroup"],{description:e,colSpacing:"medium",rowSpacing:"small",layout:b,vAlign:"top",messages:[].concat(Object(a["a"])(j?[j]:[]),Object(a["a"])(m||[]))},u.a.createElement(W["a"],{dateValue:M,onDateChange:this.handleDateChange,onBlur:this.handleBlur,ref:this.dateInputComponentRef,inputRef:l,placeholder:t,label:i,locale:p,format:c,nextLabel:r,previousLabel:o,timezone:h,validationFeedback:false,required:S,disabled:_,readOnly:y}),u.a.createElement(O["a"],{value:M,onChange:this.handleTimeChange,onBlur:this.handleBlur,ref:this.timeInputComponentRef,label:d,locale:p,format:s,step:v,timezone:h,inputRef:f,disabled:_,readOnly:y}))}},{key:"locale",get:function(){return this.props.locale||this.context.locale||m["a"].browserLocale()}},{key:"timezone",get:function(){return this.props.timezone||this.context.timezone||h["a"].browserTimeZone()}},{key:"focused",get:function(){return this._dateInput&&this._dateInput.focused||this._timeInput&&this._timeInput.focused}}])
e.displayName="DateTimeInput"
return e}(s["Component"]),j.propTypes={description:f.a.node.isRequired,dateLabel:f.a.string.isRequired,datePreviousLabel:f.a.string.isRequired,dateNextLabel:f.a.string.isRequired,datePlaceholder:f.a.string,dateFormat:f.a.string,timeLabel:f.a.string.isRequired,timeStep:f.a.oneOf([5,10,15,20,30,60]),timeFormat:f.a.string,locale:f.a.string,timezone:f.a.string,invalidDateTimeMessage:f.a.oneOfType([f.a.string,f.a.func]).isRequired,messages:f.a.arrayOf(g["FormPropTypes"].message),messageFormat:f.a.string,layout:f.a.oneOf(["stacked","columns","inline"]),value:Object(p["a"])(b["a"].iso8601,"onChange"),defaultValue:b["a"].iso8601,required:f.a.bool,disabled:f.a.bool,readOnly:f.a.bool,onChange:f.a.func,dateInputRef:f.a.func,timeInputRef:f.a.func,onBlur:f.a.func},j.defaultProps={layout:"inline",timeStep:30,messageFormat:"LLL",required:false,disabled:false,readOnly:false,onBlur:void 0,timeInputRef:void 0,dateInputRef:void 0,onChange:void 0,defaultValue:void 0,value:void 0,messages:void 0,timezone:void 0,locale:void 0,timeFormat:void 0,datePlaceholder:void 0,dateFormat:void 0},j.contextTypes={locale:f.a.string,timezone:f.a.string},z))||M)||M)},"5nFh":function(n,e,t){"use strict"
t.d(e,"a",(function(){return b}))
var a=t("VTBJ")
var i=t("1OyB")
var r=t("vuIU")
var o=t("md7G")
var c=t("foSv")
var l=t("Ji7U")
var d=t("q1tI")
var s=t("17x9")
var u=t.n(s)
var v=t("cClk")
var f=t("BTe1")
var p=t("w0Sv")
var h=t("9yTY")
var m=function(n){var e=n.expanded
return{expanded:!e}}
var b=function(n){Object(l["a"])(e,n)
function e(n){var t
Object(i["a"])(this,e)
t=Object(o["a"])(this,Object(c["a"])(e).call(this))
t.handleToggle=function(n){t.isControlled()||t.setState(m)
t.props.onToggle(n,!t.expanded)}
t.state={expanded:t.isControlled(n)?n.expanded:!!n.defaultExpanded}
t._contentId=Object(f["a"])("Expandable__content")
return t}Object(r["a"])(e,[{key:"isControlled",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props
return"boolean"===typeof n.expanded}},{key:"render",value:function(){var n=this
var e=this.props,t=e.children,i=e.render,r=void 0===i?t:i
return"function"===typeof r?r({expanded:this.expanded,getToggleProps:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return Object(a["a"])({"aria-controls":n._contentId,"aria-expanded":n.expanded,onClick:Object(h["a"])(n.handleToggle,e.onClick)},e)},getDetailsProps:function(e){return{id:n._contentId}}}):null}},{key:"expanded",get:function(){return this.isControlled()?this.props.expanded:this.state.expanded}}],[{key:"getDerivedStateFromProps",value:function(n,e){return"boolean"===typeof n.expanded&&n.expanded!==e.expanded?{expanded:n.expanded}:null}}])
e.displayName="Expandable"
return e}(d["Component"])
b.propTypes={expanded:Object(v["a"])(u.a.bool,"onToggle","defaultExpanded"),defaultExpanded:u.a.bool,onToggle:u.a.func,children:u.a.func,render:u.a.func}
b.defaultProps={defaultExpanded:false,onToggle:function(n,e){},expanded:void 0,children:null,render:void 0}
Object(p["a"])(b)},CCpZ:function(n,e,t){"use strict"
t.d(e,"a",(function(){return f}))
var a=t("VTBJ")
var i=t("1OyB")
var r=t("vuIU")
var o=t("md7G")
var c=t("foSv")
var l=t("Ji7U")
var d=t("q1tI")
var s=t.n(d)
var u=t("hPGw")
var v=s.a.createElement("path",{d:"M1803.305 1337.072L1919.958 1920l-582.928-116.653-950.128-950.015 79.15-79.15 801.792 801.68 307.977-307.976-907.362-907.474L281.22 747.65 49.034 515.464c-65.379-65.603-65.379-172.069 0-237.448l228.94-228.94c65.267-65.379 171.733-65.49 237.448 0l232.186 232.187 1055.697 1055.809zm-411.196 363.056l385 77.023-77.023-385-45.116-45.116-307.977 307.977 45.117 45.116zM281.222 589.352l308.089-308.09-59.11-59.11-93.927-93.926c-10.972-10.971-25.301-16.345-39.63-16.345-14.33 0-28.548 5.374-39.52 16.345l-228.94 228.94c-21.718 21.718-21.718 57.318 0 79.149l153.038 153.037zm394.134 6.907l692.304 692.304-79.149 79.15-692.304-692.305 79.149-79.15z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var f=function(n){Object(l["a"])(e,n)
function e(){Object(i["a"])(this,e)
return Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}Object(r["a"])(e,[{key:"render",value:function(){return s.a.createElement(u["a"],Object.assign({},this.props,{name:"IconEdit",viewBox:"0 0 1920 1920",bidirectional:true}),v)}}])
e.displayName="IconEditLine"
return e}(d["Component"])
f.glyphName="edit"
f.variant="Line"
f.propTypes=Object(a["a"])({},u["a"].propTypes)},KIj7:function(n,e,t){"use strict"
var a=t("rePB")
var i=t("VTBJ")
var r=t("1OyB")
var o=t("vuIU")
var c=t("md7G")
var l=t("foSv")
var d=t("Ji7U")
var s=t("q1tI")
var u=t.n(s)
var v=t("17x9")
var f=t.n(v)
var p=t("TSYQ")
var h=t.n(p)
var m=t("Xx/m")
var b=t("rf+m")
var g=t("y2yB")
var S=t("5nFh")
var _=t("J2CL")
var W=t("cClk")
var O=t("jtGx")
var y=t("/UXv")
var A=t("oXx0")
function M(n){var e=n.colors,t=n.spacing,a=n.borders,i=n.typography
return{fontFamily:i.fontFamily,fontWeight:i.fontWeightNormal,lineHeight:i.lineHeight,textColor:e.textDarkest,fontSizeSmall:i.fontSizeSmall,fontSizeMedium:i.fontSizeMedium,fontSizeLarge:i.fontSizeLarge,smallIconSize:"0.5rem",mediumIconSize:"0.75rem",largeIconSize:"1rem",iconMargin:t.xxSmall,iconColor:e.textDarkest,togglePadding:t.xxSmall,toggleBorderRadius:a.radiusMedium,toggleBorderWidth:a.widthMedium,toggleBorderStyle:a.style,toggleFocusBorderColor:e.borderBrand,filledBackgroundColor:e.backgroundLight,filledBorderWidth:a.widthSmall,filledBorderStyle:a.style,filledBorderColor:e.borderMedium,filledBorderRadius:a.radiusMedium,filledPadding:t.small}}M["canvas"]=function(n){return{toggleFocusBorderColor:n["ic-brand-primary"],iconColor:n["ic-brand-font-color-dark"],textColor:n["ic-brand-font-color-dark"]}}
t.d(e,"a",(function(){return J}))
var j,z,k,T,x
var B={componentId:"MlJlv",template:function(n){return"\n\n.MlJlv_bGBk{font-family:".concat(n.fontFamily||"inherit",";font-weight:").concat(n.fontWeight||"inherit",";line-height:").concat(n.lineHeight||"inherit","}\n\n.MlJlv_doqw .MlJlv_ebWM,.MlJlv_doqw .MlJlv_cjSw{font-size:").concat(n.fontSizeSmall||"inherit","}\n\n.MlJlv_doqw .MlJlv_dnnz{font-size:").concat(n.smallIconSize||"inherit","}\n\n.MlJlv_doqw .MlJlv_dUEG{-webkit-padding-end:0;-webkit-padding-start:calc(").concat(n.smallIconSize||"inherit"," + ").concat(n.togglePadding||"inherit",");padding-inline-end:0;padding-inline-start:calc(").concat(n.smallIconSize||"inherit"," + ").concat(n.togglePadding||"inherit",")}\n\n[dir=ltr] .MlJlv_doqw .MlJlv_dUEG{padding-left:calc(").concat(n.smallIconSize||"inherit"," + ").concat(n.togglePadding||"inherit",");padding-right:0}\n\n[dir=rtl] .MlJlv_doqw .MlJlv_dUEG{padding-left:0;padding-right:calc(").concat(n.smallIconSize||"inherit"," + ").concat(n.togglePadding||"inherit",")}\n\n.MlJlv_ycrn .MlJlv_ebWM,.MlJlv_ycrn .MlJlv_cjSw{font-size:").concat(n.fontSizeMedium||"inherit","}\n\n.MlJlv_ycrn .MlJlv_dnnz{font-size:").concat(n.mediumIconSize||"inherit","}\n\n.MlJlv_ycrn .MlJlv_dUEG{-webkit-padding-end:0;-webkit-padding-start:calc(").concat(n.mediumIconSize||"inherit"," + ").concat(n.togglePadding||"inherit",");padding-inline-end:0;padding-inline-start:calc(").concat(n.mediumIconSize||"inherit"," + ").concat(n.togglePadding||"inherit",")}\n\n[dir=ltr] .MlJlv_ycrn .MlJlv_dUEG{padding-left:calc(").concat(n.mediumIconSize||"inherit"," + ").concat(n.togglePadding||"inherit",");padding-right:0}\n\n[dir=rtl] .MlJlv_ycrn .MlJlv_dUEG{padding-left:0;padding-right:calc(").concat(n.mediumIconSize||"inherit"," + ").concat(n.togglePadding||"inherit",")}\n\n.MlJlv_cMDj .MlJlv_ebWM,.MlJlv_cMDj .MlJlv_cjSw{font-size:").concat(n.fontSizeLarge||"inherit","}\n\n.MlJlv_cMDj .MlJlv_dnnz{font-size:").concat(n.largeIconSize||"inherit","}\n\n.MlJlv_cMDj .MlJlv_dUEG{-webkit-padding-end:0;-webkit-padding-start:calc(").concat(n.largeIconSize||"inherit"," + ").concat(n.togglePadding||"inherit",");padding-inline-end:0;padding-inline-start:calc(").concat(n.largeIconSize||"inherit"," + ").concat(n.togglePadding||"inherit",")}\n\n[dir=ltr] .MlJlv_cMDj .MlJlv_dUEG{padding-left:calc(").concat(n.largeIconSize||"inherit"," + ").concat(n.togglePadding||"inherit",");padding-right:0}\n\n[dir=rtl] .MlJlv_cMDj .MlJlv_dUEG{padding-left:0;padding-right:calc(").concat(n.largeIconSize||"inherit"," + ").concat(n.togglePadding||"inherit",")}\n\n.MlJlv_cjSw{-moz-appearance:none;-moz-user-select:none;-ms-user-select:none;-webkit-appearance:none;-webkit-user-select:none;appearance:none;background:transparent;border:none;box-sizing:border-box;color:").concat(n.textColor||"inherit",";cursor:pointer;font-family:").concat(n.fontFamily||"inherit",";margin:0;outline:none;overflow:visible;padding:0;position:relative;text-decoration:none;touch-action:manipulation;user-select:none}\n\n.MlJlv_cjSw::-moz-focus-inner{margin:0;padding:0}\n\n.MlJlv_cjSw:before{border:").concat(n.toggleBorderWidth||"inherit"," ").concat(n.toggleBorderStyle||"inherit"," ").concat(n.toggleFocusBorderColor||"inherit",";border-radius:calc(").concat(n.toggleBorderRadius||"inherit",'*1.5);bottom:-0.375rem;content:"";left:-0.375rem;opacity:0;pointer-events:none;position:absolute;right:-0.375rem;top:-0.375rem}\n\n.MlJlv_cjSw:focus:before{opacity:1}\n\n.MlJlv_cjSw:active,.MlJlv_cjSw:focus,.MlJlv_cjSw:hover{color:').concat(n.textColor||"inherit",";text-decoration:none}\n\n.MlJlv_cvfe{display:block;width:100%}\n\n.MlJlv_doNn{align-items:center;box-sizing:border-box;display:flex;position:relative;text-align:start}\n\n[dir=ltr] .MlJlv_doNn{text-align:left}\n\n[dir=rtl] .MlJlv_doNn{text-align:right}\n\n.MlJlv_dnnz{color:").concat(n.iconColor||"inherit","}\n\n.MlJlv_dnnz>svg{display:block}\n\n.MlJlv_fuNk{-webkit-margin-end:").concat(n.iconMargin||"inherit",";-webkit-margin-start:0;margin-inline-end:").concat(n.iconMargin||"inherit",";margin-inline-start:0}\n\n[dir=ltr] .MlJlv_fuNk{margin-left:0;margin-right:").concat(n.iconMargin||"inherit","}\n\n[dir=rtl] .MlJlv_fuNk{margin-left:").concat(n.iconMargin||"inherit",";margin-right:0}\n\n.MlJlv_fhZl{-webkit-margin-end:0;-webkit-margin-start:").concat(n.iconMargin||"inherit",";margin-inline-end:0;margin-inline-start:").concat(n.iconMargin||"inherit","}\n\n[dir=ltr] .MlJlv_fhZl{margin-left:").concat(n.iconMargin||"inherit",";margin-right:0}\n\n[dir=rtl] .MlJlv_fhZl{margin-left:0;margin-right:").concat(n.iconMargin||"inherit","}\n\n.MlJlv_btWg{flex-grow:1;min-width:0.0625rem}\n\n.MlJlv_fFWz .MlJlv_btWg{flex:1}\n\n.MlJlv_ebWM{box-sizing:border-box;color:").concat(n.textColor||"inherit",";padding-top:").concat(n.togglePadding||"inherit","}\n\n.MlJlv_eFWP{display:none}\n\n.MlJlv_cMGi{display:block}\n\n@keyframes MlJlv_dFUU{to{opacity:1}}\n\n.MlJlv_caGd{animation-duration:0.3s;animation-fill-mode:forwards;animation-name:MlJlv_dFUU;opacity:0.01}")},root:"MlJlv_bGBk",small:"MlJlv_doqw",details:"MlJlv_ebWM",toggle:"MlJlv_cjSw",icon:"MlJlv_dnnz",indentDetails:"MlJlv_dUEG",medium:"MlJlv_ycrn",large:"MlJlv_cMDj",fluidWidth:"MlJlv_cvfe",summary:"MlJlv_doNn",iconStart:"MlJlv_fuNk",iconEnd:"MlJlv_fhZl",summaryText:"MlJlv_btWg",positionIconAtEnd:"MlJlv_fFWz",hiddenDetails:"MlJlv_eFWP",expandedDetails:"MlJlv_cMGi",content:"MlJlv_caGd",contentAnimation:"MlJlv_dFUU"}
var J=(j=Object(A["a"])(),z=Object(_["themeable"])(M,B),j(k=z(k=(x=T=function(n){Object(d["a"])(e,n)
function e(){var n
var t
Object(r["a"])(this,e)
for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o]
t=Object(c["a"])(this,(n=Object(l["a"])(e)).call.apply(n,[this].concat(i)))
t.shouldAnimateContent=false
t.getButtonRef=function(n){return t._button=n}
return t}Object(o["a"])(e,[{key:"focus",value:function(){this._button.focus()}},{key:"componentDidMount",value:function(){this.shouldAnimateContent=true}},{key:"renderSummary",value:function(n){var e=this.props,t=e.summary,a=e.iconPosition
return u.a.createElement("span",{className:B.summary},"start"===a&&this.renderIcon(n),u.a.createElement("span",{className:B.summaryText},t),"end"===a&&this.renderIcon(n))}},{key:"renderToggle",value:function(n,t){var r=this.props,o=r.variant,c=r.fluidWidth
var l=Object(i["a"])({},Object(O["a"])(this.props,e.propTypes),{},n,{children:this.renderSummary()})
var d=this.renderSummary(t)
return"filled"===o?u.a.createElement(m["a"],Object.assign({},l,{fluidWidth:true,elementRef:this.getButtonRef}),d):l.href?u.a.createElement("a",Object.assign({},l,{className:h()(B.toggle,B[o],Object(a["a"])({},B.fluidWidth,c)),ref:this.getButtonRef}),d):u.a.createElement("button",Object.assign({},l,{type:"button",className:h()(B.toggle,B[o],Object(a["a"])({},B.fluidWidth,c)),ref:this.getButtonRef}),d)}},{key:"renderIcon",value:function(n){var e
var t=this.props.iconPosition
var i=n?this.props.iconExpanded:this.props.icon
return this.props.children?u.a.createElement("span",{className:h()(B.icon,(e={},Object(a["a"])(e,B.iconStart,"start"===t),Object(a["a"])(e,B.iconEnd,"end"===t),e))},u.a.createElement(i,null)):null}},{key:"renderDetails",value:function(n,e){var t
var i=this.props,r=i.children,o=i.size,c=i.iconPosition,l=i.fluidWidth
return u.a.createElement("div",Object.assign({},e,{className:h()(B.details,(t={},Object(a["a"])(t,B[o],o),Object(a["a"])(t,B.hiddenDetails,!n),Object(a["a"])(t,B.expandedDetails,n),Object(a["a"])(t,B.indentDetails,"start"===c&&!l),t))}),r&&n&&this.renderContent())}},{key:"renderContent",value:function(){return u.a.createElement("div",{className:h()(Object(a["a"])({},B.content,this.shouldAnimateContent))},this.props.children)}},{key:"render",value:function(){var n,e=this
var t=this.props,i=t.variant,r=t.iconPosition,o=t.fluidWidth
var c="end"===r&&("filled"===i||o)
var l=(n={},Object(a["a"])(n,B.root,true),Object(a["a"])(n,B[this.props.size],true),Object(a["a"])(n,B.positionIconAtEnd,c),n)
return u.a.createElement(S["a"],Object(O["c"])(this.props,S["a"].propTypes),(function(n){var t=n.expanded,a=n.getToggleProps,i=n.getDetailsProps
return u.a.createElement("div",{className:h()(l)},e.renderToggle(a(),t),e.renderDetails(t,i()))}))}},{key:"focused",get:function(){return Object(y["a"])(this._button)}}])
e.displayName="ToggleDetails"
return e}(s["Component"]),T.propTypes={variant:f.a.oneOf(["default","filled"]),summary:f.a.node.isRequired,expanded:Object(W["a"])(f.a.bool,"onToggle","defaultExpanded"),defaultExpanded:f.a.bool,onToggle:f.a.func,icon:f.a.func,iconExpanded:f.a.func,iconPosition:f.a.oneOf(["start","end"]),fluidWidth:f.a.bool,children:f.a.node,size:f.a.oneOf(["small","medium","large"])},T.defaultProps={variant:"default",size:"medium",fluidWidth:false,icon:b["a"],iconExpanded:g["a"],iconPosition:"start",defaultExpanded:false,onToggle:function(n,e){},children:null,expanded:void 0},x))||k)||k)},Kimu:function(n,e,t){"use strict"
t.d(e,"a",(function(){return f}))
var a=t("VTBJ")
var i=t("1OyB")
var r=t("vuIU")
var o=t("md7G")
var c=t("foSv")
var l=t("Ji7U")
var d=t("q1tI")
var s=t.n(d)
var u=t("hPGw")
var v=s.a.createElement("path",{d:"M1637.706 112.941c93.403 0 169.412 76.01 169.412 169.412V1920H113V282.353c0-93.402 76.009-169.412 169.412-169.412h169.41v-56.47c0-31.172 25.3-56.47 56.472-56.47s56.47 25.298 56.47 56.47v56.47h790.589v-56.47c0-31.172 25.299-56.47 56.47-56.47 31.172 0 56.47 25.298 56.47 56.47v56.47h169.413zm56.47 338.824V282.353c0-31.172-25.411-56.47-56.47-56.47h-169.412v56.47c0 31.172-25.3 56.471-56.47 56.471-31.172 0-56.471-25.299-56.471-56.47v-56.472H564.765v56.471c0 31.172-25.3 56.471-56.471 56.471-31.171 0-56.471-25.299-56.471-56.47v-56.472H282.412c-31.06 0-56.47 25.3-56.47 56.471v169.412h1468.234zM225.942 1807.058h1468.234V564.705H225.942v1242.353zm112.94-677.646V790.588h338.824v338.824H338.882zm112.942-112.941h112.941V903.53H451.824v112.941zm338.823 112.941V790.588h338.824v338.824H790.647zm112.941-112.941h112.941V903.53H903.588v112.941zm338.824 112.941V790.588h338.823v338.824h-338.823zm112.941-112.941h112.941V903.53h-112.941v112.941zM338.882 1581.177v-338.824h338.824v338.824H338.882zm112.942-112.942h112.941v-112.941H451.824v112.941zm338.823 112.942v-338.824h338.824v338.824H790.647zm112.941-112.942h112.941v-112.941H903.588v112.941zm338.824 112.942v-338.824h338.823v338.824h-338.823zm112.941-112.942h112.941v-112.941h-112.941v112.941z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var f=function(n){Object(l["a"])(e,n)
function e(){Object(i["a"])(this,e)
return Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}Object(r["a"])(e,[{key:"render",value:function(){return s.a.createElement(u["a"],Object.assign({},this.props,{name:"IconCalendarMonth",viewBox:"0 0 1920 1920"}),v)}}])
e.displayName="IconCalendarMonthLine"
return e}(d["Component"])
f.glyphName="calendar-month"
f.variant="Line"
f.propTypes=Object(a["a"])({},u["a"].propTypes)},Oak0:function(n,e,t){"use strict"
t.d(e,"a",(function(){return f}))
var a=t("VTBJ")
var i=t("1OyB")
var r=t("vuIU")
var o=t("md7G")
var c=t("foSv")
var l=t("Ji7U")
var d=t("q1tI")
var s=t.n(d)
var u=t("hPGw")
var v=s.a.createElement("path",{d:"M1281.536 1465.487c-118.756 82.552-340.248 201.842-634.147 187.745-237.831-11.213-422.266-104.872-540.594-187.638v-150.9c0-128.048 81.804-238.26 194.473-261.968 113.416-23.815 229.502-37.485 344.947-40.369 146.522-3.844 295.928 9.825 441.168 40.476 112.455 23.708 194.153 133.813 194.153 261.967v150.687zM427.179 638.576v-6.942c45.815-12.388 75.076-39.193 98.037-60.445 26.699-24.563 42.825-39.408 80.31-39.408 36.737 0 52.65 14.738 79.028 39.194 31.077 28.514 73.581 67.601 152.716 67.601 57.776 0 95.475-21.252 123.882-43.786v43.786c0 147.27-119.717 266.987-266.987 266.987-147.27 0-266.986-119.717-266.986-266.987zm266.986-373.781c123.241 0 226.191 84.367 256.842 198.104-13.243 9.718-24.67 20.184-35.35 30.01-26.271 24.241-41.97 38.872-78.387 38.872-37.485 0-53.61-14.844-80.31-39.407-30.756-28.407-73.047-67.387-151.434-67.387-79.135 0-121.64 39.193-152.717 67.707-8.65 8.01-16.232 14.525-23.708 20.291 9.825-138.299 124.309-248.19 265.064-248.19zm415.218 683.592c-57.028-12.067-114.804-20.825-172.58-27.873 79.669-68.562 131.144-168.842 131.144-281.938V531.781C1067.947 325.774 900.279 158 694.165 158c-206.113 0-373.781 167.774-373.781 373.781v106.795c0 112.882 51.261 212.949 130.717 281.618-57.67 6.941-115.125 16.126-171.833 28.087C117.474 982.24 0 1136.346 0 1314.693v205.26l21.68 16.019c128.794 94.94 340.995 210.812 620.69 223.948 17.194.748 34.174 1.175 50.941 1.175 317.5 0 556.08-139.154 673.234-225.123l21.786-15.913V1314.8c0-178.346-117.368-332.45-278.948-366.412zm399.818-256.37h-120.892V571.23l225.764-225.764 120.785 120.785-225.657 225.764zm389.48-341.85L1730.16 181.75c-27.446-27.553-75.29-27.873-103.27-.107l-324.336 324.229c-13.563 13.776-21.038 32.038-21.038 51.368v241.57h241.57c19.222 0 37.27-7.37 51.688-21.36l324.015-324.014c28.3-28.408 28.3-74.756-.107-103.27z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var f=function(n){Object(l["a"])(e,n)
function e(){Object(i["a"])(this,e)
return Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}Object(r["a"])(e,[{key:"render",value:function(){return s.a.createElement(u["a"],Object.assign({},this.props,{name:"IconPeerReview",viewBox:"0 0 1920 1920"}),v)}}])
e.displayName="IconPeerReviewLine"
return e}(d["Component"])
f.glyphName="peer-review"
f.variant="Line"
f.propTypes=Object(a["a"])({},u["a"].propTypes)},Q0Ww:function(n,e,t){"use strict"
t.d(e,"a",(function(){return f}))
var a=t("VTBJ")
var i=t("1OyB")
var r=t("vuIU")
var o=t("md7G")
var c=t("foSv")
var l=t("Ji7U")
var d=t("q1tI")
var s=t.n(d)
var u=t("hPGw")
var v=s.a.createElement("g",{fillRule:"evenodd",stroke:"none",strokeWidth:"1"},s.a.createElement("path",{d:"M0 1549.71l414.504-414.503 80.598 80.598-414.504 414.504L0 1549.71zm580.351-248.782l80.598 80.598-331.626 331.626-80.598-80.598 331.626-331.626zm-82.844 414.584l248.748-248.748 80.484 80.712-248.748 248.634-80.484-80.598zm1376.38-1601.848c1.823 3.648 180.005 372.438-176.587 729.03l-146.604 146.604-2.622 665.874-222.642 222.642-331.626-331.512-30.552-30.552-9.804-9.804-537.738-537.738-331.626-331.74 222.642-222.642 665.874-2.508L1119.32 264.6c356.478-356.478 725.268-178.296 729.03-176.472l17.1 8.436 8.436 17.1zm-439.585 1494.084l1.938-503.994-361.836 361.95 251.028 250.914 108.87-108.87zm-1189.02-971.28L496.31 887.61l361.836-361.836-503.994 1.824-108.87 108.87zm1371.42 125.628c256.956-256.956 187.986-511.176 162.564-579.69-69.084-25.992-321.366-95.304-579.348 162.792l-623.01 623.01 416.898 416.898 622.896-623.01z"}),s.a.createElement("path",{d:"M1534.987 372.558c-51.072-1.368-131.67 12.768-213.294 94.392l-40.47 40.356 173.394 173.28 40.356-40.242c82.194-82.308 96.9-161.31 94.848-213.18l-2.166-52.554-52.668-2.052z"}))
var f=function(n){Object(l["a"])(e,n)
function e(){Object(i["a"])(this,e)
return Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}Object(r["a"])(e,[{key:"render",value:function(){return s.a.createElement(u["a"],Object.assign({},this.props,{name:"IconQuiz",viewBox:"0 0 1920 1920",bidirectional:true}),v)}}])
e.displayName="IconQuizLine"
return e}(d["Component"])
f.glyphName="quiz"
f.variant="Line"
f.propTypes=Object(a["a"])({},u["a"].propTypes)},SNMn:function(n,e,t){"use strict"
var a=t("1OyB")
var i=t("vuIU")
var r=t("md7G")
var o=t("foSv")
var c=t("Ji7U")
var l=t("q1tI")
var d=t.n(l)
var s=t("17x9")
var u=t.n(s)
var v=t("J2CL")
var f=t("cClk")
var p=t("ESkH")
var h=t("q+Fq")
var m=t("/0tP")
var b=t("nAyT")
var g=t("jtGx")
var S=t("oXx0")
var _=t("DNiq")
function W(n){var e=n.colors,t=n.typography
return{fontSize:t.fontSizeMedium,fontFamily:t.fontFamily,fontWeight:t.fontWeightNormal,color:e.textDarkest,background:e.backgroundLightest}}W.canvas=function(n){return{color:n["ic-brand-font-color-dark"]}}
t.d(e,"a",(function(){return T}))
var O,y,A,M,j,z
var k={componentId:"fabZw",template:function(n){return"\n\n.fabZw_bGBk{background:".concat(n.background||"inherit",";color:").concat(n.color||"inherit",";font-family:").concat(n.fontFamily||"inherit",";font-size:").concat(n.fontSize||"inherit",";font-weight:").concat(n.fontWeight||"inherit","}")},root:"fabZw_bGBk"}
var T=(O=Object(S["a"])(),y=Object(v["themeable"])(W,k),A=Object(b["a"])("7.0.0",null,"Use @instructure/ui-time-select instead"),O(M=y(M=A(M=(z=j=function(n){Object(c["a"])(e,n)
function e(){Object(a["a"])(this,e)
return Object(r["a"])(this,Object(o["a"])(e).apply(this,arguments))}Object(i["a"])(e,[{key:"locale",value:function(){return this.props.locale||this.context.locale||p["a"].browserLocale()}},{key:"timezone",value:function(){return this.props.timezone||this.context.timezone||h["a"].browserTimeZone()}},{key:"render",value:function(){var n=this
var e=this.props,t=e.defaultToFirstOption,a=e.defaultValue,i=e.format,r=e.label,o=e.onChange,c=e.step,l=e.value,s=e.disabled,u=e.readOnly
var v=this.locale()
var f=this.timezone()
var p=["defaultOption","selectedOption"]
var h=Object(g["c"])(this.props,Object(g["a"])(_["a"].propTypes,{},p))
var m=this.renderOptions(a,i,v,c,f,l)
var b=this.getDefaultOption(t,a,m)
var S=this.getSelectedOption(i,v,f,l)
return d.a.createElement(_["a"],Object.assign({ref:function(e){n._select=e},editable:true,label:r,defaultOption:b,selectedOption:S,onChange:o,disabled:s,readOnly:u},h),m)}},{key:"renderOptions",value:function(n,e,t,a,i,r){var o=this.getBaseDateForRendering(n,t,i,r)
var c=[]
for(var l=0;l<24;l++)for(var s=0;s<60/a;s++){var u=s*a
o.hour(l).minute(u)
c.push(d.a.createElement("option",{key:"".concat(l,":").concat(u),value:o.toISOString()},o.format(e)))}return c}},{key:"getBaseDateForRendering",value:function(n,e,t,a){var i
var r=a||n
i=r?h["a"].parse(r,e,t):h["a"].now(e,t)
return i.second(0).millisecond(0)}},{key:"getSelectedOption",value:function(n,e,t,a){if(!a)return
var i=h["a"].parse(a,e,t)
return{value:i.toISOString(),label:i.format(n)}}},{key:"getDefaultOption",value:function(n,e,t){return e||(n?t[0].props.value:void 0)}},{key:"focused",get:function(){return this._select&&this._select.focused}}])
e.displayName="TimeInput"
return e}(l["Component"]),j.propTypes={defaultToFirstOption:u.a.bool,defaultValue:m["a"].iso8601,format:u.a.string,label:u.a.node.isRequired,locale:u.a.string,onChange:u.a.func,step:u.a.oneOf([5,10,15,20,30,60]),timezone:u.a.string,value:Object(f["a"])(m["a"].iso8601),disabled:u.a.bool,readOnly:u.a.bool},j.defaultProps={defaultToFirstOption:false,format:"LT",step:30},j.contextTypes={locale:u.a.string,timezone:u.a.string},z))||M)||M)||M)},ueqW:function(n,e,t){"use strict"
var a=t("rePB")
var i=t("1OyB")
var r=t("vuIU")
var o=t("md7G")
var c=t("foSv")
var l=t("Ji7U")
var d=t("q1tI")
var s=t.n(d)
var u=t("17x9")
var v=t.n(u)
var f=t("TSYQ")
var p=t.n(f)
var h=t("u9uf")
var m=t("n12J")
var b=t("J2CL")
var g=t("nAyT")
var S=t("II2N")
var _=t("BTe1")
var W=t("oXx0")
function O(n){var e=n.borders,t=n.colors,a=n.spacing,i=n.typography,r=n.stacking
return{fontFamily:i.fontFamily,fontWeight:i.fontWeightNormal,color:t.textLightest,fontSize:i.fontSizeXSmall,colorDanger:t.textDanger,colorSuccess:t.textSuccess,colorPrimary:t.textBrand,size:"1.25rem",countOffset:"0.5rem",notificationOffset:"0.125rem",notificationZIndex:r.above,sizeNotification:a.small,borderRadius:"999rem",padding:a.xxSmall,pulseBorderThickness:e.widthMedium}}O["canvas"]=function(n){return{colorPrimary:n["ic-brand-primary"]}}
t.d(e,"a",(function(){return x}))
var y,A,M,j,z,k
var T={componentId:"cnWSA",template:function(n){return"\n\n.cnWSA_bcSS{border-radius:".concat(n.borderRadius||"inherit",";box-sizing:border-box;color:").concat(n.color||"inherit",";font-family:").concat(n.fontFamily||"inherit",";font-size:").concat(n.fontSize||"inherit",";font-weight:").concat(n.fontWeight||"inherit",";pointer-events:none;text-align:center;white-space:nowrap}\n\n[dir=ltr] .cnWSA_bcSS,[dir=rtl] .cnWSA_bcSS{text-align:center}\n\n.cnWSA_bcSS:not(.cnWSA_bBTa){position:absolute;z-index:").concat(n.notificationZIndex||"inherit","}\n\n.cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_dDWY.cnWSA_bXWC{top:calc(-1*").concat(n.countOffset||"inherit",")}\n\n.cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_dDWY.cnWSA_KksD{top:").concat(n.notificationOffset||"inherit","}\n\n.cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_bPSM.cnWSA_bXWC{bottom:calc(-1*").concat(n.countOffset||"inherit",")}\n\n.cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_bPSM.cnWSA_KksD{bottom:").concat(n.notificationOffset||"inherit","}\n\n.cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_fcMK.cnWSA_bXWC{inset-inline-end:auto;inset-inline-start:calc(-1*").concat(n.countOffset||"inherit",")}\n\n[dir=ltr] .cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_fcMK.cnWSA_bXWC{left:calc(-1*").concat(n.countOffset||"inherit",");right:auto}\n\n[dir=rtl] .cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_fcMK.cnWSA_bXWC{left:auto;right:calc(-1*").concat(n.countOffset||"inherit",")}\n\n.cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_fcMK.cnWSA_KksD{inset-inline-end:auto;inset-inline-start:").concat(n.notificationOffset||"inherit","}\n\n[dir=ltr] .cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_fcMK.cnWSA_KksD{left:").concat(n.notificationOffset||"inherit",";right:auto}\n\n[dir=rtl] .cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_fcMK.cnWSA_KksD{left:auto;right:").concat(n.notificationOffset||"inherit","}\n\n.cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_bXgF.cnWSA_bXWC{inset-inline-end:calc(-1*").concat(n.countOffset||"inherit",");inset-inline-start:auto}\n\n[dir=ltr] .cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_bXgF.cnWSA_bXWC{left:auto;right:calc(-1*").concat(n.countOffset||"inherit",")}\n\n[dir=rtl] .cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_bXgF.cnWSA_bXWC{left:calc(-1*").concat(n.countOffset||"inherit",");right:auto}\n\n.cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_bXgF.cnWSA_KksD{inset-inline-end:").concat(n.notificationOffset||"inherit",";inset-inline-start:auto}\n\n[dir=ltr] .cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_bXgF.cnWSA_KksD{left:auto;right:").concat(n.notificationOffset||"inherit","}\n\n[dir=rtl] .cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_bXgF.cnWSA_KksD{left:").concat(n.notificationOffset||"inherit",";right:auto}\n\n.cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_eCdq.cnWSA_bXgF.cnWSA_bXWC,.cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_eCdq.cnWSA_fcMK.cnWSA_bXWC{top:calc(50% - ").concat(n.size||"inherit","/2)}\n\n.cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_eCdq.cnWSA_bXgF.cnWSA_KksD,.cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_eCdq.cnWSA_fcMK.cnWSA_KksD{top:calc(50% - ").concat(n.sizeNotification||"inherit","/2)}\n\n.cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_eCdq.cnWSA_fcMK.cnWSA_bXWC{inset-inline-end:calc(100% - ").concat(n.countOffset||"inherit",");inset-inline-start:auto}\n\n[dir=ltr] .cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_eCdq.cnWSA_fcMK.cnWSA_bXWC{left:auto;right:calc(100% - ").concat(n.countOffset||"inherit",")}\n\n[dir=rtl] .cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_eCdq.cnWSA_fcMK.cnWSA_bXWC{left:calc(100% - ").concat(n.countOffset||"inherit",");right:auto}\n\n.cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_eCdq.cnWSA_fcMK.cnWSA_KksD{inset-inline-end:auto;inset-inline-start:calc(-1*").concat(n.sizeNotification||"inherit","/2)}\n\n[dir=ltr] .cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_eCdq.cnWSA_fcMK.cnWSA_KksD{left:calc(-1*").concat(n.sizeNotification||"inherit","/2);right:auto}\n\n[dir=rtl] .cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_eCdq.cnWSA_fcMK.cnWSA_KksD{left:auto;right:calc(-1*").concat(n.sizeNotification||"inherit","/2)}\n\n.cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_eCdq.cnWSA_bXgF.cnWSA_bXWC{inset-inline-end:auto;inset-inline-start:calc(100% - ").concat(n.countOffset||"inherit",")}\n\n[dir=ltr] .cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_eCdq.cnWSA_bXgF.cnWSA_bXWC{left:calc(100% - ").concat(n.countOffset||"inherit",");right:auto}\n\n[dir=rtl] .cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_eCdq.cnWSA_bXgF.cnWSA_bXWC{left:auto;right:calc(100% - ").concat(n.countOffset||"inherit",")}\n\n.cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_eCdq.cnWSA_bXgF.cnWSA_KksD{inset-inline-end:calc(-1*").concat(n.sizeNotification||"inherit","/2);inset-inline-start:auto}\n\n[dir=ltr] .cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_eCdq.cnWSA_bXgF.cnWSA_KksD{left:auto;right:calc(-1*").concat(n.sizeNotification||"inherit","/2)}\n\n[dir=rtl] .cnWSA_bcSS:not(.cnWSA_bBTa).cnWSA_eCdq.cnWSA_bXgF.cnWSA_KksD{left:calc(-1*").concat(n.sizeNotification||"inherit","/2);right:auto}\n\n.cnWSA_bcSS.cnWSA_bXWC{-webkit-padding-end:").concat(n.padding||"inherit",";-webkit-padding-start:").concat(n.padding||"inherit",";line-height:").concat(n.size||"inherit",";min-width:").concat(n.size||"inherit",";padding-inline-end:").concat(n.padding||"inherit",";padding-inline-start:").concat(n.padding||"inherit","}\n\n[dir=ltr] .cnWSA_bcSS.cnWSA_bXWC{padding-left:").concat(n.padding||"inherit",";padding-right:").concat(n.padding||"inherit","}\n\n[dir=rtl] .cnWSA_bcSS.cnWSA_bXWC{padding-left:").concat(n.padding||"inherit",";padding-right:").concat(n.padding||"inherit","}\n\n.cnWSA_bcSS.cnWSA_KksD{height:").concat(n.sizeNotification||"inherit",";width:").concat(n.sizeNotification||"inherit","}\n\n.cnWSA_zGXc{background-color:").concat(n.colorDanger||"inherit","}\n\n.cnWSA_zGXc.cnWSA_fdSp:before{border-color:").concat(n.colorDanger||"inherit","}\n\n.cnWSA_cOXX{background-color:").concat(n.colorSuccess||"inherit","}\n\n.cnWSA_cOXX.cnWSA_fdSp:before{border-color:").concat(n.colorSuccess||"inherit","}\n\n.cnWSA_bXiG{background-color:").concat(n.colorPrimary||"inherit","}\n\n.cnWSA_bXiG.cnWSA_fdSp:before{border-color:").concat(n.colorPrimary||"inherit","}\n\n@keyframes cnWSA_fdSp{to{opacity:0.9;transform:scale(1)}}\n\n.cnWSA_fdSp{position:relative}\n\n.cnWSA_fdSp:before{animation-direction:alternate;animation-duration:1s;animation-iteration-count:4;animation-name:cnWSA_fdSp;border:").concat(n.pulseBorderThickness||"inherit"," solid;border-radius:").concat(n.borderRadius||"inherit",';box-sizing:border-box;content:"";height:calc(100% + 0.5rem);inset-inline-end:auto;inset-inline-start:-0.25rem;opacity:0;position:absolute;top:-0.25rem;transform:scale(0.75);width:calc(100% + 0.5rem)}\n\n[dir=ltr] .cnWSA_fdSp:before{left:-0.25rem;right:auto}\n\n[dir=rtl] .cnWSA_fdSp:before{left:auto;right:-0.25rem}\n\n.cnWSA_gasz{box-sizing:border-box;position:relative}\n\n.cnWSA_gasz svg{display:block}')},badge:"cnWSA_bcSS",standalone:"cnWSA_bBTa","positioned--top":"cnWSA_dDWY",count:"cnWSA_bXWC",notification:"cnWSA_KksD","positioned--bottom":"cnWSA_bPSM","positioned--start":"cnWSA_fcMK","positioned--end":"cnWSA_bXgF","positioned--center":"cnWSA_eCdq",danger:"cnWSA_zGXc",pulse:"cnWSA_fdSp",success:"cnWSA_cOXX",primary:"cnWSA_bXiG",wrapper:"cnWSA_gasz"}
var x=(y=Object(g["a"])("7.0.0",null,"Use Badge from ui-badge instead."),A=Object(W["a"])(),M=Object(b["themeable"])(O,T),y(j=A(j=M(j=(k=z=function(n){Object(l["a"])(e,n)
function e(n){var t
Object(i["a"])(this,e)
t=Object(o["a"])(this,Object(c["a"])(e).call(this,n))
t._defaultId=Object(_["a"])("Badge")
return t}Object(r["a"])(e,[{key:"countOverflow",value:function(){var n=this.props,e=n.count,t=n.countUntil
return t>1&&e>=t}},{key:"renderOutput",value:function(){var n=this.props,e=n.count,t=n.countUntil,a=n.formatOverflowText,i=n.formatOutput,r=n.type
var o="count"===r&&this.countOverflow()?a(e,t):e
return"function"===typeof i?i(o):"count"===r?o:null}},{key:"renderBadge",value:function(){var n
var e=this.props,t=e.count,i=e.margin,r=e.pulse,o=e.placement,c=e.standalone,l=e.type,d=e.variant
return s.a.createElement(m["a"],{margin:c?i:"none",className:p()((n={},Object(a["a"])(n,T.badge,true),Object(a["a"])(n,T[l],l),Object(a["a"])(n,T[d],d),Object(a["a"])(n,T["positioned--top"],o.indexOf("top")>-1),Object(a["a"])(n,T["positioned--bottom"],o.indexOf("bottom")>-1),Object(a["a"])(n,T["positioned--start"],o.indexOf("start")>-1),Object(a["a"])(n,T["positioned--end"],o.indexOf("end")>-1),Object(a["a"])(n,T["positioned--center"],o.indexOf("center")>-1),Object(a["a"])(n,T.standalone,c),Object(a["a"])(n,T.pulse,r),n)),title:"count"===l&&this.countOverflow()?t:null,id:c?null:this._defaultId,display:c?"inline-block":"block"},this.renderOutput())}},{key:"renderChildren",value:function(){var n=this
return d["Children"].map(this.props.children,(function(e){return Object(S["a"])(e,{"aria-describedby":n._defaultId})}))}},{key:"render",value:function(){var n=this.props,e=n.margin,t=n.elementRef,a=n.standalone,i=n.as
return a?this.renderBadge():s.a.createElement(m["a"],{as:i,margin:e,elementRef:t,className:T.wrapper,display:"inline-block"},this.renderChildren(),this.renderBadge())}}])
e.displayName="Badge"
return e}(d["Component"]),z.propTypes={count:v.a.number,countUntil:v.a.number,children:v.a.element,type:v.a.oneOf(["count","notification"]),standalone:v.a.bool,pulse:v.a.bool,variant:v.a.oneOf(["primary","success","danger"]),placement:h["a"].placement,margin:b["ThemeablePropTypes"].spacing,elementRef:v.a.func,formatOverflowText:v.a.func,formatOutput:v.a.func,as:v.a.elementType},z.defaultProps={count:void 0,children:null,countUntil:void 0,margin:void 0,formatOutput:void 0,standalone:false,type:"count",variant:"primary",pulse:false,placement:"top end",elementRef:function(n){},formatOverflowText:function(n,e){return"".concat(e-1," +")}},k))||j)||j)||j)},we39:function(n,e,t){"use strict"
t.d(e,"a",(function(){return f}))
var a=t("VTBJ")
var i=t("1OyB")
var r=t("vuIU")
var o=t("md7G")
var c=t("foSv")
var l=t("Ji7U")
var d=t("q1tI")
var s=t.n(d)
var u=t("hPGw")
var v=s.a.createElement("path",{d:"M903.53 0v903.53H0v112.94h903.53V1920h112.94v-903.53H1920V903.53h-903.53V0z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var f=function(n){Object(l["a"])(e,n)
function e(){Object(i["a"])(this,e)
return Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}Object(r["a"])(e,[{key:"render",value:function(){return s.a.createElement(u["a"],Object.assign({},this.props,{name:"IconPlus",viewBox:"0 0 1920 1920"}),v)}}])
e.displayName="IconPlusLine"
return e}(d["Component"])
f.glyphName="plus"
f.variant="Line"
f.propTypes=Object(a["a"])({},u["a"].propTypes)},y2yB:function(n,e,t){"use strict"
t.d(e,"a",(function(){return f}))
var a=t("VTBJ")
var i=t("1OyB")
var r=t("vuIU")
var o=t("md7G")
var c=t("foSv")
var l=t("Ji7U")
var d=t("q1tI")
var s=t.n(d)
var u=t("hPGw")
var v=s.a.createElement("path",{d:"M.08 568.062l176.13-176.13 783.988 783.865 783.74-783.864 176.13 176.13-959.87 960.118z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var f=function(n){Object(l["a"])(e,n)
function e(){Object(i["a"])(this,e)
return Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}Object(r["a"])(e,[{key:"render",value:function(){return s.a.createElement(u["a"],Object.assign({},this.props,{name:"IconArrowOpenDown",viewBox:"0 0 1920 1920"}),v)}}])
e.displayName="IconArrowOpenDownSolid"
return e}(d["Component"])
f.glyphName="arrow-open-down"
f.variant="Solid"
f.propTypes=Object(a["a"])({},u["a"].propTypes)}}])

//# sourceMappingURL=99-c-fdba265e25.js.map