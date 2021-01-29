(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[86],{"UT5+":function(e,t,n){"use strict"
var a=n("rePB")
var r=n("Ff2n")
var i=n("ODXe")
var o=n("1OyB")
var l=n("vuIU")
var s=n("md7G")
var c=n("foSv")
var d=n("Ji7U")
var u=n("q1tI")
var p=n.n(u)
var f=n("17x9")
var h=n.n(f)
var b=n("TSYQ")
var g=n.n(b)
var v=n("3zPy")
var m=n.n(v)
var y=n("sTNg")
var L=n("n12J")
var D=n("BTe1")
var B=n("J2CL")
var w=n("oXx0")
var _=n("nAyT")
var P=n("E+IV")
var k=n("jtGx")
var j=n("tCl5")
var C=n("8S//")
function O(e,t){if(e&&t&&"application/x-moz-file"!==e.type){var n=S(t)
var a=e.type||""
var r=a.replace(/\/.*$/,"")
return n.some((function(t){if("."===t.charAt(0)){if(!e.name)return a.endsWith(t.slice(1))
return e.name.toLowerCase().endsWith(t.toLowerCase())}if(/\/\*$/.test(t))return r===t.replace(/\/.*$/,"")
return a===t}))}return true}function S(e){var t=Array.isArray(e)?e:e.split(",")
return t.map((function(e){return e.trim().replace(/^\w+$/,".$&")}))}function T(e,t){var n=e.dataTransfer
if(n){if(n.files&&n.files.length)return n.files
if(n.items&&n.items.length)return n.items}else if(t&&t.files)return t.files
return[]}function x(e){var t=e.borders,n=e.colors
return{backgroundColor:n.backgroundLightest,borderRadius:t.radiusLarge,borderWidth:t.widthMedium,borderStyle:"dashed",borderColor:n.borderMedium,hoverBorderColor:n.borderBrand,acceptedColor:n.textBrand,rejectedColor:n.textDanger}}x.canvas=function(e){return{hoverBorderColor:e["ic-brand-primary"],acceptedColor:e["ic-brand-primary"]}}
n.d(t,"a",(function(){return U}))
var A,F,z,E,R,I
var M={componentId:"bDwTL",template:function(e){return"\n\n.bDwTL_blJt,.bDwTL_bGBk{position:relative}\n\n.bDwTL_blJt{box-sizing:border-box;display:block}\n\n.bDwTL_cwos{border:0;clip:rect(0 0 0 0);height:0.0625rem;margin:-0.0625rem;overflow:hidden;padding:0;position:absolute;width:0.0625rem}\n\n.bDwTL_QUBp{border:".concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";box-sizing:border-box;cursor:pointer;display:block;text-align:center;z-index:1}\n\n[dir=ltr] .bDwTL_QUBp,[dir=rtl] .bDwTL_QUBp{text-align:center}\n\n.bDwTL_QUBp:hover{border-color:").concat(e.hoverBorderColor||"inherit","}\n\n.bDwTL_byIz{border-radius:").concat(e.borderRadius||"inherit",";display:block;overflow:hidden}\n\n.bDwTL_cbYS .bDwTL_QUBp{border-color:").concat(e.acceptedColor||"inherit","}\n\n.bDwTL_cvQK .bDwTL_QUBp{border-color:").concat(e.rejectedColor||"inherit","}\n\n.bDwTL_cFXB{cursor:not-allowed;pointer-events:none}\n\n.bDwTL_eXzv{opacity:0.5}")},label:"bDwTL_blJt",root:"bDwTL_bGBk",input:"bDwTL_cwos",labelContent:"bDwTL_QUBp",layout:"bDwTL_byIz",dragAccepted:"bDwTL_cbYS",dragRejected:"bDwTL_cvQK",functionallyDisabled:"bDwTL_cFXB",visuallyDisabled:"bDwTL_eXzv"}
function G(e){return e.keyCode===m.a.codes.space||e.keyCode===m.a.codes.enter}function W(){var e=false
try{e=document.documentMode||C["a"]}catch(e){}return e}var N=W()
var U=(A=Object(_["a"])("8.0.0",{label:"renderLabel",enablePreview:"shouldEnablePreview",allowRepeatFileSelection:"shouldAllowRepeats",allowMultiple:"shouldAllowMultiple"}),F=Object(w["a"])(),z=Object(B["themeable"])(x,M),A(E=F(E=z(E=(I=R=function(e){Object(d["a"])(t,e)
function t(e){var n
Object(o["a"])(this,t)
n=Object(s["a"])(this,Object(c["a"])(t).call(this,e))
n.state={isDragAccepted:false,isDragRejected:false,isFocused:false,isFileBrowserDisplayed:false}
n.enterCounter=0
n.fileInputEl=null
n.defaultId=null
n.handleDragEnter=function(e){e.preventDefault()
n.enterCounter+=1
if(n.enterCounter>1)return
var t=n.allFilesAccepted(n.getDataTransferItems(e))
n.setState({isDragAccepted:t,isDragRejected:!t})
n.props.onDragEnter(e)}
n.handleDragOver=function(e){e.preventDefault()
e.stopPropagation()
try{var t=e
t.dataTransfer.dropEffect="copy"}catch(e){}n.props.onDragOver(e)
return false}
n.handleDragLeave=function(e){e.preventDefault()
n.enterCounter-=1
if(n.enterCounter>0)return
n.setState({isDragAccepted:false,isDragRejected:false})
n.props.onDragLeave(e)}
n.handleChange=function(e){var t=n.props,a=t.onDrop,r=t.onDropAccepted,o=t.onDropRejected
var l=n.getDataTransferItems(e,n.shouldEnablePreview)
var s=n.parseFiles(l),c=Object(i["a"])(s,2),d=c[0],u=c[1]
e.preventDefault()
n.enterCounter=0
a(d,u,e)
u.length>0&&o(u,e)
d.length>0&&r(d,e)
n.setState({isDragAccepted:false,isDragRejected:false,isFileBrowserDisplayed:false})}
n.fileAccepted=function(e){return O(e,n.props.accept)}
n.handleRef=function(e){n.fileInputEl=e}
n.handleBlur=function(){n.setState({isFocused:false,isFileBrowserDisplayed:false})}
n.handleFocus=function(){n.setState({isFocused:true,isFileBrowserDisplayed:false})}
n.handleClick=function(e){n.fileInputEl.value&&n.shouldAllowRepeats&&(n.fileInputEl.value=null)
n.fileInputEl.focus()
n.props.onClick(e)
n.setState({isFileBrowserDisplayed:true})}
n.handleKeyDown=function(e){if(n.state.isFocused&&G(e)){n.shouldAllowRepeats&&(n.fileInputEl.value=null)
if(N){e.stopPropagation()
e.preventDefault()
n.fileInputEl.click()}}}
n.handleKeyUp=function(e){if(e.keyCode===m.a.codes.esc&&n.state.isFileBrowserDisplayed){e.stopPropagation()
e.nativeEvent.stopImmediatePropagation()
n.setState({isFileBrowserDisplayed:false})}}
n.defaultId=Object(D["a"])("FileDrop")
n.messagesId=Object(D["a"])("FileDrop-messages")
return n}Object(l["a"])(t,[{key:"getDataTransferItems",value:function(e,t){var n=Array.from(T(e,this.fileInputEl))
n.length>1&&(n=this.shouldAllowMultiple?n:[n[0]])
if(t)return n.map((function(e){return Object.assign(e,{preview:window.URL.createObjectURL(e)})}))
return n}},{key:"parseFiles",value:function(e){var t=this
var n=[]
var a=[]
e.forEach((function(e){t.fileAccepted(e)&&t.fileMatchSize(e)?n.push(e):a.push(e)}))
return[n,a]}},{key:"fileMatchSize",value:function(e){return e.size<=this.props.maxSize&&e.size>=this.props.minSize}},{key:"allFilesAccepted",value:function(e){return e.every(this.fileAccepted)}},{key:"acceptStr",value:function(){var e=this.props.accept
return e?S(e).join(","):null}},{key:"renderLabel",value:function(){var e=this.props,t=e.label,n=e.renderLabel
return Object(P["a"])(t||n,{isDragAccepted:this.state.isDragAccepted,isDragRejected:this.state.isDragRejected,interaction:this.interaction})}},{key:"render",value:function(){var e
var t=this.props,n=t.display,i=t.width,o=t.minWidth,l=t.maxWidth,s=t.margin,c=(t.onDropAccepted,t.onDropRejected,Object(r["a"])(t,["display","width","minWidth","maxWidth","margin","onDropAccepted","onDropRejected"]))
var d=this.props.id||this.defaultId
var u="disabled"===this.interaction||"readonly"===this.interaction
var f=this.state.isDragRejected||this.invalid?"danger":void 0
var h=(e={},Object(a["a"])(e,M.label,true),Object(a["a"])(e,M.functionallyDisabled,u),Object(a["a"])(e,M.visuallyDisabled,"disabled"===this.interaction),Object(a["a"])(e,M.dragRejected,this.state.isDragRejected||this.invalid),Object(a["a"])(e,M.dragAccepted,this.state.isDragAccepted),e)
return p.a.createElement(L["a"],{display:n,position:"relative",width:i,minWidth:o,maxWidth:l,margin:s},p.a.createElement("label",{className:g()(h),htmlFor:d,onDragEnter:this.handleDragEnter,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleChange},p.a.createElement(L["a"],{display:"block",position:"relative",withFocusOutline:this.state.isFocused,borderRadius:"large",focusColor:f},p.a.createElement("span",{className:M.labelContent},p.a.createElement("span",{className:M.layout},this.renderLabel())))),p.a.createElement("input",Object.assign({},Object(k["b"])(c),{onClick:this.handleClick,type:"file",className:M.input,id:d,ref:this.handleRef,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,multiple:this.shouldAllowMultiple,accept:this.acceptStr(),onChange:this.handleChange,"aria-describedby":this.hasMessages?this.messagesId:null,disabled:u})),this.hasMessages?p.a.createElement(L["a"],{display:"block",margin:"small 0 0"},p.a.createElement(y["FormFieldMessages"],{id:this.messagesId,messages:this.props.messages})):null)}},{key:"hasMessages",get:function(){return this.props.messages&&this.props.messages.length>0}},{key:"interaction",get:function(){return Object(j["a"])({props:this.props})}},{key:"shouldEnablePreview",get:function(){return this.props.enablePreview||this.props.shouldEnablePreview}},{key:"shouldAllowRepeats",get:function(){return this.props.allowRepeatFileSelection||this.props.shouldAllowRepeats}},{key:"shouldAllowMultiple",get:function(){return this.props.allowMultiple||this.props.shouldAllowMultiple}},{key:"invalid",get:function(){return this.hasMessages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}}])
t.displayName="FileDrop"
return t}(u["Component"]),R.propTypes={id:h.a.string,renderLabel:h.a.oneOfType([h.a.func,h.a.node]).isRequired,accept:h.a.oneOfType([h.a.string,h.a.arrayOf(h.a.string)]),messages:h.a.arrayOf(y["FormPropTypes"].message),onClick:h.a.func,onDrop:h.a.func,onDropAccepted:h.a.func,onDropRejected:h.a.func,onDragEnter:h.a.func,onDragOver:h.a.func,onDragLeave:h.a.func,shouldEnablePreview:h.a.bool,shouldAllowMultiple:h.a.bool,shouldAllowRepeats:h.a.bool,maxSize:h.a.number,minSize:h.a.number,interaction:h.a.oneOf(["enabled","disabled","readonly"]),display:h.a.oneOf(["block","inline-block"]),width:h.a.oneOfType([h.a.string,h.a.number]),maxWidth:h.a.oneOfType([h.a.string,h.a.number]),minWidth:h.a.oneOfType([h.a.string,h.a.number]),margin:B["ThemeablePropTypes"].spacing,label:h.a.oneOfType([h.a.func,h.a.node]),enablePreview:h.a.bool,allowRepeatFileSelection:h.a.bool,allowMultiple:h.a.bool},R.defaultProps={onClick:function(e){},onDrop:function(e,t,n){},onDropAccepted:function(e,t){},onDropRejected:function(e,t){},onDragEnter:function(e){},onDragOver:function(e){},onDragLeave:function(e){},shouldEnablePreview:false,shouldAllowMultiple:false,shouldAllowRepeats:true,maxSize:Infinity,minSize:0,interaction:void 0,messages:[],id:void 0,accept:void 0,display:"block",width:void 0,minWidth:void 0,maxWidth:void 0,margin:void 0},I))||E)||E)||E)},agq5:function(e,t,n){"use strict"
var a=n("VTBJ")
var r=n("rePB")
var i=n("1OyB")
var o=n("vuIU")
var l=n("md7G")
var s=n("foSv")
var c=n("Ji7U")
var d=n("q1tI")
var u=n.n(d)
var p=n("17x9")
var f=n.n(p)
var h=n("TSYQ")
var b=n.n(h)
var g=n("msMH")
var v=n("n12J")
var m=n("J2CL")
var y=n("E+IV")
var L=n("KgFQ")
var D=n("jtGx")
function B(e){var t=e.borders,n=e.colors,a=e.spacing,r=e.typography
return{fontFamily:r.fontFamily,paddingSmall:a.small,paddingMedium:a.medium,paddingLarge:a.medium,iconColor:n.textDark,mediumMargin:a.small,largeMargin:a.medium,iconHoverColor:n.textLink,backgroundColor:n.backgroundLightest,iconHoverColorInverse:n.textLightest,buttonBorderWidth:t.widthMedium,buttonBorderRadius:t.radiusLarge,messageColor:n.textDark,messageColorClickable:n.textLink,messageColorInverse:n.textLight,messageFontSizeSmall:r.fontSizeSmall,messageFontSizeMedium:r.fontSizeMedium,messageFontSizeLarge:r.fontSizeLarge,clickableActiveBg:n.backgroundBrand,clickableActiveText:n.textLightest,buttonBorderStyle:t.style,buttonHoverBorderStyle:"dashed"}}B.canvas=function(e){return{iconHoverColor:e["ic-link-color"],messageColorClickable:e["ic-link-color"],clickableActiveBg:e["ic-brand-primary"]}}
n.d(t,"a",(function(){return C}))
var w,_,P,k
var j={componentId:"ftPBL",template:function(e){return"\n\n.ftPBL_bGBk{box-sizing:border-box;display:block;font-family:".concat(e.fontFamily||"inherit",";margin-left:auto;margin-right:auto;position:relative;text-align:center}\n\n[dir=ltr] .ftPBL_bGBk,[dir=rtl] .ftPBL_bGBk{text-align:center}\n\n.ftPBL_bGBk:not(.ftPBL_bGiS){background-color:").concat(e.backgroundColor||"inherit","}\n\n.ftPBL_bGBk.ftPBL_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.ftPBL_EwaR,.ftPBL_caGd,.ftPBL_eDnN,.ftPBL_cuDj,.ftPBL_elxg{display:block}\n\n.ftPBL_cuDj+.ftPBL_eDnN{margin:").concat(e.largeMargin||"inherit"," 0 0}\n\n.ftPBL_eDnN+.ftPBL_elxg,.ftPBL_cuDj+.ftPBL_elxg,.ftPBL_doqw .ftPBL_cuDj+.ftPBL_eDnN{margin:").concat(e.mediumMargin||"inherit"," 0 0}\n\n.ftPBL_doqw{padding:").concat(e.paddingSmall||"inherit","}\n\n.ftPBL_doqw .ftPBL_cuDj{font-size:3rem}\n\n.ftPBL_doqw .ftPBL_elxg{font-size:").concat(e.messageFontSizeSmall||"inherit","}\n\n.ftPBL_ycrn{padding:").concat(e.paddingMedium||"inherit","}\n\n.ftPBL_ycrn .ftPBL_cuDj{font-size:5rem}\n\n.ftPBL_ycrn .ftPBL_elxg{font-size:").concat(e.messageFontSizeMedium||"inherit","}\n\n.ftPBL_cMDj{padding:").concat(e.paddingLarge||"inherit","}\n\n.ftPBL_cMDj .ftPBL_cuDj{font-size:10rem}\n\n.ftPBL_cMDj .ftPBL_elxg{font-size:").concat(e.messageFontSizeLarge||"inherit","}\n\n.ftPBL_elxg{color:").concat(e.messageColor||"inherit","}\n\n.ftPBL_cuDj{color:").concat(e.iconColor||"inherit","}\n\n.ftPBL_cuDj>img,.ftPBL_cuDj>svg{display:block;margin:0 auto;max-width:100%}\n\n.ftPBL_cuDj>img{height:auto}\n\n.ftPBL_bGiS{-moz-appearance:none;-moz-user-select:none;-ms-user-select:none;-webkit-appearance:none;-webkit-user-select:none;appearance:none;background:").concat(e.backgroundColor||"inherit",";border:").concat(e.buttonBorderWidth||"inherit"," ").concat(e.buttonBorderStyle||"inherit"," transparent;border-radius:").concat(e.buttonBorderRadius||"inherit",";box-sizing:border-box;cursor:pointer;margin:0;text-decoration:none;touch-action:manipulation;user-select:none;width:100%}\n\n.ftPBL_bGiS:hover{border-style:").concat(e.buttonHoverBorderStyle||"inherit","}\n\n.ftPBL_bGiS:focus,.ftPBL_bGiS:hover{border-color:").concat(e.iconHoverColor||"inherit",";outline:none;text-decoration:none}\n\n.ftPBL_bGiS:focus .ftPBL_cuDj,.ftPBL_bGiS:hover .ftPBL_cuDj{color:").concat(e.iconHoverColor||"inherit","}\n\n.ftPBL_bGiS:active{background:").concat(e.clickableActiveBg||"inherit",";border-color:").concat(e.iconHoverColor||"inherit","}\n\n.ftPBL_bGiS:active .ftPBL_cuDj,.ftPBL_bGiS:active .ftPBL_elxg{color:").concat(e.clickableActiveText||"inherit","}\n\n.ftPBL_bGiS .ftPBL_elxg{color:").concat(e.messageColorClickable||"inherit","}")},root:"ftPBL_bGBk",clickable:"ftPBL_bGiS",disabled:"ftPBL_ywdX",button:"ftPBL_EwaR",content:"ftPBL_caGd",heading:"ftPBL_eDnN",hero:"ftPBL_cuDj",message:"ftPBL_elxg",small:"ftPBL_doqw",medium:"ftPBL_ycrn",large:"ftPBL_cMDj"}
var C=(w=Object(m["themeable"])(B,j),w(_=(k=P=function(e){Object(c["a"])(t,e)
function t(){var e
var n
Object(i["a"])(this,t)
for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o]
n=Object(l["a"])(this,(e=Object(s["a"])(t)).call.apply(e,[this].concat(r)))
n.handleClick=function(e){var t=n.props,a=t.readOnly,r=t.onClick
if(a){e.preventDefault()
e.stopPropagation()}else"function"===typeof r&&r(e)}
return n}Object(o["a"])(t,[{key:"renderHeading",value:function(){var e=this.props,t=e.headingLevel,n=e.headingAs,a=e.heading
return u.a.createElement("span",{className:j.heading},u.a.createElement(g["a"],{level:t,as:n,color:"primary"},a))}},{key:"renderHero",value:function(){return this.heroIsFunction?this.props.hero(this.SVGIconSize):this.props.hero}},{key:"renderContent",value:function(){var e=this.props,t=e.heading,n=e.message,a=e.hero
return u.a.createElement("span",{className:j.content},a&&u.a.createElement("span",{className:j.hero},this.renderHero()),t&&this.renderHeading(),n&&u.a.createElement("span",{className:j.message},Object(y["a"])(n)))}},{key:"render",value:function(){var e
var n=this.props,i=n.href,o=n.disabled,l=n.readOnly,s=n.onClick,c=n.size,d=n.margin,p=n.elementRef
var f=(e={},Object(r["a"])(e,j.root,true),Object(r["a"])(e,j[c],true),Object(r["a"])(e,j.clickable,i||s),Object(r["a"])(e,j.disabled,o),e)
var h=Object(L["a"])(t,this.props)
return u.a.createElement(v["a"],{as:"div",margin:d},u.a.createElement(v["a"],Object.assign({},Object(D["a"])(this.props,Object(a["a"])({},t.propTypes,{},v["a"].propTypes)),{type:"button"===h?"button":null,as:h,elementRef:p,className:b()(f),href:i,onClick:this.handleClick,disabled:o,"aria-disabled":o||l?"true":null}),this.renderContent()))}},{key:"heroIsFunction",get:function(){return"function"===typeof this.props.hero}},{key:"SVGIconSize",get:function(){var e=this.props.size
return"small"===e?"medium":"large"===e?"x-large":"large"}}])
t.displayName="Billboard"
return t}(d["Component"]),P.propTypes={hero:f.a.oneOfType([f.a.element,f.a.func]),size:f.a.oneOf(["small","medium","large"]),as:f.a.elementType,elementRef:f.a.func,heading:f.a.string,headingAs:f.a.oneOf(["h1","h2","h3","span"]),headingLevel:f.a.oneOf(["h1","h2","h3","h4"]),message:f.a.oneOfType([f.a.node,f.a.func]),onClick:f.a.func,href:f.a.string,disabled:f.a.bool,readOnly:f.a.bool,margin:m["ThemeablePropTypes"].spacing},P.defaultProps={margin:void 0,disabled:false,readOnly:false,href:void 0,message:void 0,onClick:void 0,heading:void 0,hero:void 0,size:"medium",headingAs:"span",headingLevel:"h1",as:"span",elementRef:function(e){}},k))||_)}}])

//# sourceMappingURL=86-c-6bd106f009.js.map