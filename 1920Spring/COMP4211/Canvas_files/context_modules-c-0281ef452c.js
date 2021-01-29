(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[288,618,621,675],{"0crz":function(e,t,n){"use strict"
var r=n("ouhR")
var a=n.n(r)
var i=n("pQTu")
var o=n("m0r6")
Object(o["a"])(JSON.parse('{"ar":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"إظهار النص المقتبس","word_separator":" "}}},"cy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"dangos testun wedi’i ddyfynnu","word_separator":" "}}},"da":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"da-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"de":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"zitierten Text zeigen","word_separator":" "}}},"el":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"προβολή κειμένου που παρατίθεται"}}},"en-AU":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-AU-x-unimelb":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB-x-lbs":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB-x-ukhe":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"es":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostrar texto citado","word_separator":" "}}},"fa":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"نمایش متن نقل شده","word_separator":" "}}},"fi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"näytä lainattu teksti","word_separator":" "}}},"fr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"fr-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"he":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"מציג ציטוט","word_separator":" "}}},"ht":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afiche tèks site","word_separator":" "}}},"hu":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"idézett szöveg megjelenítése","word_separator":" "}}},"hy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"ցույց տալ մեջբերվող տեքստը","word_separator":"-"}}},"is":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Sýna ívitnaðan texta","word_separator":" "}}},"it":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostra testo citato","word_separator":" "}}},"ja":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"引用したテキストを表示","word_separator":" "}}},"ko":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"인용된 텍스트 표시","word_separator":" "}}},"mi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"whakaatu kuputuhi faahiti","word_separator":"-"}}},"nb":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nb-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"geciteerde tekst tonen","word_separator":" "}}},"nn":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis sitert tekst","word_separator":" "}}},"pl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"pokaż cytowany fragment tekstu","word_separator":" "}}},"pt":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"pt-BR":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"ru":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"показать цитированный текст","word_separator":" "}}},"sl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"prikaži citirano besedilo","word_separator":" "}}},"sv":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"sv-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"tr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"alıntılanan metni göster","word_separator":" "}}},"uk":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Показати цитований текст","word_separator":" "}}},"zh-Hans":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"显示引用的文本","word_separator":" "}}},"zh-Hant":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"顯示引用的文字","word_separator":" "}}}}'))
n("jQeR")
n("0sPK")
var s=i["default"].scoped("lib.text_helper")
var l=n("5Ky4")
var c,u,d
c="LINK-PLACEHOLDER"
u=/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))|(LINK-PLACEHOLDER)/gi
t["a"]=d={quoteClump:function(e){return"<div class='quoted_text_holder'> <a href='#' class='show_quoted_text_link'>"+Object(l["a"])(s.t("quoted_text_toggle","show quoted text"))+"</a> <div class='quoted_text' style='display: none;'> "+a.a.raw(e.join("\n"))+" </div> </div>"},formatMessage:function(e){var t,n,r,a,i,o,s,h
a=[]
i=[]
e=e.replace(u,(function(e,t){var n
i.push(e===c?c:(n=e,"http://"===n.slice(0,7)||"https://"===n.slice(0,8)||(n="http://"+n),a.push(n),"<a href='"+Object(l["a"])(n)+"'>"+Object(l["a"])(e)+"</a>"))
return c}))
e=Object(l["a"])(e)
e=e.replace(new RegExp(c,"g"),(function(e,t){return i.shift()}))
e=e.replace(/\n/g,"<br />\n")
o=[]
s=[]
h=e.split("\n")
for(t=0,n=h.length;t<n;t++){r=h[t]
if(r.match(/^(&gt;|>)/))s.push(r)
else{s.length&&o.push(d.quoteClump(s))
s=[]
o.push(r)}}s.length&&o.push(d.quoteClump(s))
return o.join("\n")},delimit:function(e){var t,n,r,a,i
if(isNaN(e))return String(e)
i=e<0?"-":""
t=Math.abs(e)
if(Infinity===t)return String(e)
n=Math.floor(t)
a=t===n?"":String(t).replace(/^\d+\./,".")
while(n>=1e3){r=String(n).replace(/\d+(\d\d\d)$/,",$1")
n=Math.floor(n/1e3)
a=r+a}return i+String(n)+a},truncateText:function(e,t){var n,r,a,i,o,l
null==t&&(t={})
r=null!=(i=t.max)?i:30
n=s.t("ellipsis","...")
l=s.t("word_separator"," ")
e=(null!=e?e:"").replace(/\s+/g,l).trim()
if(!e||e.length<=r)return e
o=0
while(true){a=e.indexOf(l,o+1)
if(a<0||a>r-n.length)break
o=a}o||(o=r-n.length)
return e.substring(0,o)+n},plainText:function(e){return e.replace(/(<([^>]+)>)/gi,"")}}},"97gy":function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var r=n("VTBJ")
var a=n("1OyB")
var i=n("vuIU")
var o=n("md7G")
var s=n("foSv")
var l=n("Ji7U")
var c=n("q1tI")
var u=n.n(c)
var d=n("hPGw")
var h=u.a.createElement("path",{d:"M1743.858 267.012L710.747 1300.124 176.005 765.382 0 941.387l710.747 710.871 1209.24-1209.116z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(l["a"])(t,e)
function t(){Object(a["a"])(this,t)
return Object(o["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return u.a.createElement(d["a"],Object.assign({},this.props,{name:"IconCheckMark",viewBox:"0 0 1920 1920"}),h)}}])
t.displayName="IconCheckMarkSolid"
return t}(c["Component"])
p.glyphName="check-mark"
p.variant="Solid"
p.propTypes=Object(r["a"])({},d["a"].propTypes)},B1vq:function(e,t,n){"use strict"
var r=n("ouhR")
var a=n.n(r)
n("s/PJ")
a.a.fn.scrollToVisible=function(e){const t={}
const n=a()(e)
if(0===n.length)return
let r=n.offset(),i=n.outerWidth(),o=n.outerHeight(),s=r.top,l=s+o,c=r.left,u=c+i,d="html,body"==this.selector?a.a.windowScrollTop():this.scrollTop(),h=this.scrollLeft(),p=this.outerHeight(),_=this.outerWidth()
if("html,body"!=this.selector){let e=a()("body").offset()
this.each((function(){try{e=a()(this).offset()
return false}catch(e){}}))
s-=e.top
l-=e.top
c-=e.left
u-=e.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){p=a()(window).height()
a()("#wizard_box:visible").length>0&&(p-=a()("#wizard_box:visible").height())
_=a()(window).width()
s-=d
c-=h
l-=d
u-=h}s<0||p<o&&l>p?t.scrollTop=s+d:l>p&&(t.scrollTop=l+d-p+20)
c<0?t.scrollLeft=c+h:u>_&&(t.scrollLeft=u+h-_+20)
1==t.scrollTop&&(t.scrollTop=0)
1==t.scrollLeft&&(t.scrollLeft=0)
this.scrollTop(t.scrollTop)
this.scrollLeft(t.scrollLeft)
return this}},"CO+y":function(e,t,n){"use strict"
n.d(t,"a",(function(){return f}))
var r=n("Ff2n")
var a=n("1OyB")
var i=n("vuIU")
var o=n("md7G")
var s=n("foSv")
var l=n("Ji7U")
var c=n("q1tI")
var u=n.n(c)
var d=n("17x9")
var h=n.n(d)
var p=n("KgFQ")
var _=n("jtGx")
var f=function(e){Object(l["a"])(t,e)
function t(){Object(a["a"])(this,t)
return Object(o["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){var e=this.props,n=e.children,a=Object(r["a"])(e,["children"])
var i=Object(p["a"])(t,this.props)
return u.a.createElement(i,Object.assign({},Object(_["b"])(a),{"aria-hidden":"true"}),n)}}])
t.displayName="PresentationContent"
return t}(c["Component"])
f.propTypes={as:h.a.elementType,children:h.a.node}
f.defaultProps={as:"span",children:null}},HVsT:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var r=n("VTBJ")
var a=n("1OyB")
var i=n("vuIU")
var o=n("md7G")
var s=n("foSv")
var l=n("Ji7U")
var c=n("q1tI")
var u=n.n(c)
var d=n("hPGw")
var h=u.a.createElement("path",{d:"M213.333 960c0-167.36 56-321.707 149.44-446.4L1406.4 1557.227c-124.693 93.44-279.04 149.44-446.4 149.44-411.627 0-746.667-335.04-746.667-746.667m1493.334 0c0 167.36-56 321.707-149.44 446.4L513.6 362.773c124.693-93.44 279.04-149.44 446.4-149.44 411.627 0 746.667 335.04 746.667 746.667M960 0C429.76 0 0 429.76 0 960s429.76 960 960 960 960-429.76 960-960S1490.24 0 960 0",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(l["a"])(t,e)
function t(){Object(a["a"])(this,t)
return Object(o["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return u.a.createElement(d["a"],Object.assign({},this.props,{name:"IconNo",viewBox:"0 0 1920 1920"}),h)}}])
t.displayName="IconNoSolid"
return t}(c["Component"])
p.glyphName="no"
p.variant="Solid"
p.propTypes=Object(r["a"])({},d["a"].propTypes)},HbFp:function(e,t,n){"use strict"
var r=n("qJBq")
var a=n.n(r)
var i=n("pQTu")
const o={_parseNumber:a.a,parse(e){if(null==e)return NaN
if("number"===typeof e)return e
let t=o._parseNumber(e.toString(),{thousands:i["default"].lookup("number.format.delimiter"),decimal:i["default"].lookup("number.format.separator")})
isNaN(t)&&(t=o._parseNumber(e))
e.toString().match(/e/)&&isNaN(t)&&(t=parseFloat(e))
return t},validate:e=>!isNaN(o.parse(e))}
t["a"]=o},J3yE:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var r=n("VTBJ")
var a=n("1OyB")
var i=n("vuIU")
var o=n("md7G")
var s=n("foSv")
var l=n("Ji7U")
var c=n("q1tI")
var u=n.n(c)
var d=n("hPGw")
var h=u.a.createElement("path",{d:"M1072.156 537.778c59.802-.707 116.561 14.29 157.774 56.99 36.644 37.974 50.015 91.327 43.72 142.908-9.128 74.877-30.737 144.983-56.093 215.657-27.129 75.623-54.66 151.09-82.332 226.512-44.263 120.685-88.874 241.237-132.65 362.1-10.877 30.018-18.635 62.072-21.732 93.784-3.376 34.532 21.462 51.526 52.648 36.203 24.977-12.278 49.288-28.992 68.845-48.768 31.952-32.31 63.766-64.776 94.805-97.98 15.515-16.605 30.86-33.397 45.912-50.438 11.993-13.583 24.318-34.02 40.779-42.28 31.17-15.642 55.226 22.846 49.582 49.794-6.008 28.736-27.377 53.54-45.014 75.973-54.87 69.795-115.044 137.088-183.308 193.977-67.103 55.77-141.607 103.216-223.428 133.98-26.65 10.016-53.957 18.253-81.713 24.563-53.585 12.192-112.798 11.283-167.56 3.333-40.151-5.828-76.246-31.44-93.264-68.707-29.544-64.698-8.98-144.595 6.295-210.45 20.37-87.77 51.85-170.961 83.13-255.163 33.253-89.517 67.435-178.676 101.726-267.797 31.294-81.296 62.72-162.537 93.69-243.95 8.718-22.923 21.183-45.255 24.845-68.963 6.109-39.537-22.406-74.738-61.985-51.947-92.46 53.244-153.538 141.534-224.52 218.4-16.089 17.43-35.243 39.04-62.907 19.07-29.521-21.308-20.765-48.637-3.987-71.785 93.18-128.58 205.056-248.86 350.86-316.783 60.932-28.386 146.113-57.285 225.882-58.233zM1440 205.244c-.008 169.189-182.758 284.908-335.53 212.455-78.956-37.446-117.358-126.202-98.219-227.002 26.494-139.598 183.78-227.203 315.717-175.87 76.703 29.846 118.04 96.533 118.032 190.417z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(l["a"])(t,e)
function t(){Object(a["a"])(this,t)
return Object(o["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return u.a.createElement(d["a"],Object.assign({},this.props,{name:"IconInfoBorderless",viewBox:"0 0 1920 1920"}),h)}}])
t.displayName="IconInfoBorderlessSolid"
return t}(c["Component"])
p.glyphName="info-borderless"
p.variant="Solid"
p.propTypes=Object(r["a"])({},d["a"].propTypes)},JCxF:function(e,t,n){"use strict"
n.r(t)
var r=n("An8g")
var a=n("ouhR")
var i=n.n(a)
var o=n("q1tI")
var s=n.n(o)
var l=n("i8i4")
var c=n.n(l)
n("17x9")
var u=n("cwFs")
var d=n("whu9")
var h=n("Cutp")
var p=Object(r["a"])(u["a"],{className:"ic-EmptyStateButton__SVG"})
var _=Object(r["a"])(d["a"],{className:"ic-EmptyStateButton__SVG"})
class f extends s.a.Component{render(){var e,t
const n=window.ENV.CONTEXT_URL_ROOT+"/content_migrations"
const a=null===(e=window.ENV)||void 0===e?void 0:null===(t=e.FEATURES)||void 0===t?void 0:t.module_dnd
return Object(r["a"])("ul",{className:"ic-EmptyStateList"},void 0,Object(r["a"])("li",{className:"ic-EmptyStateList__Item"},void 0,Object(r["a"])("div",{className:"ic-EmptyStateList__BillboardWrapper"},void 0,Object(r["a"])("button",{type:"button",className:"ic-EmptyStateButton",onClick:this.props.onCreateButtonClick},void 0,p,Object(r["a"])("span",{className:"ic-EmptyStateButton__Text"},void 0,h["a"].t("Create a new Module"))))),!a&&Object(r["a"])("li",{className:"ic-EmptyStateList__Item"},void 0,Object(r["a"])("div",{className:"ic-EmptyStateList__BillboardWrapper"},void 0,Object(r["a"])("a",{href:n,className:"ic-EmptyStateButton"},void 0,_,Object(r["a"])("span",{className:"ic-EmptyStateButton__Text"},void 0,h["a"].t("Add existing content"))))))}}f.defaultProps={onCreateButtonClick:()=>{}}
var m=n("KUiY")
var g=n("3lLS")
var v=n.n(g)
v()(()=>{const e=document.getElementById("modules_homepage_user_create")
e&&c.a.render(Object(r["a"])(f,{onCreateButtonClick:m["a"].addModule}),e)
ENV.NO_MODULE_PROGRESSIONS&&i()(".module_progressions_link").remove()})},"L+/K":function(e,t,n){"use strict"
var r=n("1OyB")
var a=n("vuIU")
var i=n("md7G")
var o=n("foSv")
var s=n("Ji7U")
n("DEX3")
var l=n("q1tI")
var c=n.n(l)
var u=n("i8i4")
var d=n.n(u)
var h=n("17x9")
var p=n.n(h)
var _=n("TSYQ")
var f=n.n(_)
var m=n("3zPy")
var g=n.n(m)
var v=n("nAyT")
var b=n("E+IV")
var x=n("Mmr1")
var y=n("n12J")
var k=n("6SzX")
var w=n("HVsT")
var O=n("J3yE")
var j=n("97gy")
var C=n("znKQ")
var B=n("XQb/")
var S=n("J2CL")
var E=n("BTe1")
function q(e){var t=e.colors,n=e.borders,r=e.spacing,a=e.typography,i=e.shadows
return{background:t.backgroundLightest,color:t.textDarkest,marginTop:r.small,borderRadius:n.radiusMedium,borderWidth:n.widthMedium,borderStyle:n.style,contentPadding:"".concat(r.small," ").concat(r.medium),contentFontSize:a.fontSizeMedium,contentFontFamily:a.fontFamily,contentFontWeight:a.fontWeightNormal,contentLineHeight:a.lineHeightCondensed,closeButtonMarginTop:r.xSmall,closeButtonMarginRight:r.xxSmall,iconColor:t.textLightest,successBorderColor:t.borderSuccess,successIconBackground:t.backgroundSuccess,infoBorderColor:t.borderInfo,infoIconBackground:t.backgroundInfo,warningBorderColor:t.borderWarning,warningIconBackground:t.backgroundWarning,dangerBorderColor:t.borderDanger,dangerIconBackground:t.backgroundDanger,boxShadow:i.depth2}}q.canvas=function(e){return{color:e["ic-brand-font-color-dark"]}}
n.d(t,"a",(function(){return R}))
var I,L,N,A,T
var z={componentId:"cvphu",template:function(e){return"\n\n.cvphu_bgqc{background:".concat(e.background||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";border-style:").concat(e.borderStyle||"inherit",";border-width:").concat(e.borderWidth||"inherit",";box-shadow:").concat(e.boxShadow||"inherit",";color:").concat(e.color||"inherit",";display:flex;min-width:12rem}\n\n.cvphu_bgqc,.cvphu_caGd{box-sizing:border-box}\n\n.cvphu_caGd{flex:1;font-family:").concat(e.contentFontFamily||"inherit",";font-size:").concat(e.contentFontSize||"inherit",";font-weight:").concat(e.contentFontWeight||"inherit",";line-height:").concat(e.contentLineHeight||"inherit",";min-width:0.0625rem;padding:").concat(e.contentPadding||"inherit","}\n\n.cvphu_dnnz{align-items:center;border-right:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit",";color:").concat(e.iconColor||"inherit",";flex:0 0 2.5rem;font-size:1.125rem;justify-content:center}\n\n.cvphu_fsGh,.cvphu_dnnz{box-sizing:border-box;display:flex}\n\n.cvphu_fsGh{align-items:flex-start;margin-right:").concat(e.closeButtonMarginRight||"inherit",";margin-top:").concat(e.closeButtonMarginTop||"inherit",";order:1}\n\n.cvphu_cOXX{border-color:").concat(e.successBorderColor||"inherit","}\n\n.cvphu_cOXX .cvphu_dnnz{background-color:").concat(e.successIconBackground||"inherit",";border-right-color:").concat(e.successIconBackground||"inherit","}\n\n.cvphu_pypk{border-color:").concat(e.infoBorderColor||"inherit","}\n\n.cvphu_pypk .cvphu_dnnz{background:").concat(e.infoIconBackground||"inherit",";border-right-color:").concat(e.infoIconBackground||"inherit","}\n\n.cvphu_ddvR{border-color:").concat(e.dangerBorderColor||"inherit","}\n\n.cvphu_ddvR .cvphu_dnnz{background:").concat(e.dangerIconBackground||"inherit",";border-right-color:").concat(e.dangerIconBackground||"inherit","}\n\n.cvphu_eRqw{border-color:").concat(e.warningBorderColor||"inherit","}\n\n.cvphu_eRqw .cvphu_dnnz{background:").concat(e.warningIconBackground||"inherit",";border-right-color:").concat(e.warningIconBackground||"inherit","}")},alert:"cvphu_bgqc",content:"cvphu_caGd",icon:"cvphu_dnnz",closeButton:"cvphu_fsGh",success:"cvphu_cOXX",info:"cvphu_pypk",error:"cvphu_ddvR",warning:"cvphu_eRqw"}
var R=(I=Object(v["a"])("7.0.0",{closeButtonLabel:"renderCloseButtonLabel"}),L=Object(S["themeable"])(q,z),I(N=L(N=(T=A=function(e){Object(s["a"])(t,e)
function t(e){var n
Object(r["a"])(this,t)
n=Object(i["a"])(this,Object(o["a"])(t).call(this,e))
n._timeouts=[]
n.handleTimeout=function(){n.props.timeout>0&&n._timeouts.push(setTimeout((function(){n.close()}),n.props.timeout))}
n.onExitTransition=function(){n.props.onDismiss&&n.props.onDismiss()}
n.close=function(){n.clearTimeouts()
n.removeScreenreaderAlert()
n.setState({open:false},(function(){n.props.onDismiss&&"none"===n.props.transition&&n.props.onDismiss()}))}
n.handleKeyUp=function(e){(n.props.renderCloseButtonLabel||n.props.closeButtonLabel)&&e.keyCode===g.a.codes.esc&&n.close()}
n.state={open:true}
return n}Object(a["a"])(t,[{key:"variantUI",value:function(){return{error:{Icon:w["a"],classNames:f()(z.alert,z.error)},info:{Icon:O["a"],classNames:f()(z.alert,z.info)},success:{Icon:j["a"],classNames:f()(z.alert,z.success)},warning:{Icon:C["a"],classNames:f()(z.alert,z.warning)}}[this.props.variant]}},{key:"clearTimeouts",value:function(){this._timeouts.forEach((function(e){return clearTimeout(e)}))
this._timeouts=[]}},{key:"isDOMNode",value:function(e){return e&&"object"===typeof e&&1===e.nodeType}},{key:"getLiveRegion",value:function(){var e=null
"function"===typeof this.props.liveRegion&&(e=this.props.liveRegion())
return this.isDOMNode(e)?e:null}},{key:"initLiveRegion",value:function(e){e.getAttribute("role")
if(e){e.setAttribute("aria-live",this.props.liveRegionPoliteness)
e.setAttribute("aria-relevant","additions text")
e.setAttribute("aria-atomic",this.props.isLiveRegionAtomic)}}},{key:"createScreenreaderContentNode",value:function(){return c.a.createElement(k["a"],null,this.props.children)}},{key:"createScreenreaderAlert",value:function(){var e=this.getLiveRegion()
if(e){this.srid=Object(E["a"])("Alert")
var t=document.createElement("div")
t.setAttribute("id",this.srid)
var n=this.createScreenreaderContentNode()
d.a.render(n,t)
e.appendChild(t)}}},{key:"updateScreenreaderAlert",value:function(){var e=this
if(this.getLiveRegion()){var t=document.getElementById(this.srid)
t&&d.a.render(null,t,(function(){var n=e.createScreenreaderContentNode()
d.a.render(n,t)}))}}},{key:"removeScreenreaderAlert",value:function(){var e=this.getLiveRegion()
if(e){var t=document.getElementById(this.srid)
if(t){e.removeAttribute("aria-live")
e.removeAttribute("aria-relevant")
e.removeAttribute("aria-atomic")
d.a.unmountComponentAtNode(t)
t.parentNode.removeChild(t)
this.initLiveRegion(e)}}}},{key:"componentDidMount",value:function(){var e=this.getLiveRegion()
e&&this.initLiveRegion(e)
this.handleTimeout()
this.createScreenreaderAlert()}},{key:"componentDidUpdate",value:function(e){false===!!this.props.open&&!!this.props.open!==!!e.open?this.close():this.props.children!==e.children&&this.updateScreenreaderAlert()}},{key:"componentWillUnmount",value:function(){this.removeScreenreaderAlert()
this.clearTimeouts()}},{key:"renderIcon",value:function(){var e=this.variantUI(),t=e.Icon
return c.a.createElement("div",{className:z.icon},c.a.createElement(t,{className:z.alertIcon}))}},{key:"renderCloseButton",value:function(){var e=this.props.renderCloseButtonLabel&&Object(b["a"])(this.props.renderCloseButtonLabel)||this.props.closeButtonLabel
return e?c.a.createElement("div",{className:z.closeButton,key:"closeButton"},c.a.createElement(x["a"],{onClick:this.close,size:"small",screenReaderLabel:e})):null}},{key:"renderAlert",value:function(){var e=this.variantUI(),t=e.classNames
return c.a.createElement(y["a"],{as:"div",margin:this.props.margin,className:t,onKeyUp:this.handleKeyUp},this.renderIcon(),c.a.createElement("div",{className:z.content},this.props.children),this.renderCloseButton())}},{key:"render",value:function(){if(this.props.screenReaderOnly){this.getLiveRegion()
return null}if("none"===this.props.transition)return this.state.open?this.renderAlert():null
return c.a.createElement(B["a"],{type:this.props.transition,transitionOnMount:true,in:this.state.open,unmountOnExit:true,onExited:this.onExitTransition},this.renderAlert())}}])
t.displayName="Alert"
return t}(l["Component"]),A.propTypes={children:p.a.node,variant:p.a.oneOf(["info","success","warning","error"]),margin:S["ThemeablePropTypes"].spacing,liveRegion:p.a.func,liveRegionPoliteness:p.a.oneOf(["polite","assertive"]),isLiveRegionAtomic:p.a.bool,screenReaderOnly:p.a.bool,timeout:p.a.number,renderCloseButtonLabel:p.a.oneOfType([p.a.func,p.a.node]),closeButtonLabel:p.a.string,onDismiss:p.a.func,transition:p.a.oneOf(["none","fade"]),open:p.a.bool},A.defaultProps={variant:"info",margin:"x-small 0",timeout:0,transition:"fade",open:true,screenReaderOnly:false,liveRegionPoliteness:"assertive",isLiveRegionAtomic:false,onDismiss:void 0,liveRegion:void 0,renderCloseButtonLabel:void 0,closeButtonLabel:void 0,children:null},T))||N)||N)},TBRb:function(e,t,n){"use strict"
var r=n("ouhR")
var a=n.n(r)
var i=n("GLiE")
var o=n.n(i)
var s=n("Nxtp")
n("YGE8")
a.a.fn.fixDialogButtons=function(){return this.each((function(){const e=a()(this)
const t=e.find(".button-container:last .btn, button[type=submit]")
if(t.length){e.find(".button-container:last, button[type=submit]").hide()
let n=a.a.map(t.toArray(),t=>{const n=a()(t)
let r=n.attr("class")||""
const i=n.attr("id")
if(n.is(".dialog_closer")){n.off(".fixdialogbuttons")
n.on("click.fixdialogbuttons",Object(s["a"])(()=>e.dialog("close")))}"submit"===n.prop("type")&&n[0].form&&(r+=" button_type_submit")
return{text:n.text(),"data-text-while-loading":n.data("textWhileLoading"),click:()=>n.click(),class:r,id:i}})
n=o.a.sortBy(n,e=>e.class.match(/btn-primary/)?1:0)
e.dialog("option","buttons",n)}}))}},cwFs:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var r=n("VTBJ")
var a=n("1OyB")
var i=n("vuIU")
var o=n("md7G")
var s=n("foSv")
var l=n("Ji7U")
var c=n("q1tI")
var u=n.n(c)
var d=n("hPGw")
var h=u.a.createElement("path",{d:"M1581.176 1072.47h-225.882v438.551l-366.833 213.685c-17.506 10.278-39.416 10.278-56.922 0L564.706 1511.02v-438.55H338.824V685.647c0-20.103 10.842-38.739 28.009-48.79l310.814-181.045v164.894h564.706V455.812l310.814 181.044c17.167 10.052 28.01 28.688 28.01 48.791v386.824zm112.942 0V685.648c0-60.085-32.189-116.216-84.142-146.485L1242.353 325.14V56H677.647v269.139L310.024 539.162c-51.953 30.269-84.142 86.4-84.142 146.485v386.824H0v564.705h557.026l317.703 185.111c26.429 15.36 55.68 23.04 85.271 23.04 29.59 0 58.955-7.68 85.27-23.04l317.704-185.11H1920V1072.47h-225.882z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(l["a"])(t,e)
function t(){Object(a["a"])(this,t)
return Object(o["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return u.a.createElement(d["a"],Object.assign({},this.props,{name:"IconModule",viewBox:"0 0 1920 1920"}),h)}}])
t.displayName="IconModuleSolid"
return t}(c["Component"])
p.glyphName="module"
p.variant="Solid"
p.propTypes=Object(r["a"])({},d["a"].propTypes)},eCn1:function(e,t,n){"use strict"
var r=n("An8g")
var a=n("Ff2n")
var i=n("pQTu")
var o=n("m0r6")
Object(o["a"])(JSON.parse('{"ar":{"close_d634289d":"إغلاق"},"cy":{"close_d634289d":"Cau"},"da":{"close_d634289d":"Luk"},"da-x-k12":{"close_d634289d":"Luk"},"de":{"close_d634289d":"Schließen"},"el":{"close_d634289d":"Κλείσιμο"},"en-AU":{"close_d634289d":"Close"},"en-AU-x-unimelb":{"close_d634289d":"Close"},"en-CA":{"close_d634289d":"Close"},"en-GB":{"close_d634289d":"Close"},"en-GB-x-lbs":{"close_d634289d":"Close"},"en-GB-x-ukhe":{"close_d634289d":"Close"},"es":{"close_d634289d":"Cerrar"},"fa":{"close_d634289d":"بستن"},"fi":{"close_d634289d":"Sulje"},"fr":{"close_d634289d":"Fermer"},"fr-CA":{"close_d634289d":"Fermer"},"he":{"close_d634289d":"סגירה"},"ht":{"close_d634289d":"Fèmen"},"hu":{"close_d634289d":"Bezárás"},"hy":{"close_d634289d":"Փակել"},"is":{"close_d634289d":"Loka"},"it":{"close_d634289d":"Chiudi"},"ja":{"close_d634289d":"閉じる"},"ko":{"close_d634289d":"닫기"},"mi":{"close_d634289d":"Katia"},"nb":{"close_d634289d":"Lukk"},"nb-x-k12":{"close_d634289d":"Lukk"},"nl":{"close_d634289d":"Sluiten"},"nn":{"close_d634289d":"Lukk"},"pl":{"close_d634289d":"Zamknij"},"pt":{"close_d634289d":"Fechar"},"pt-BR":{"close_d634289d":"Fechar"},"ru":{"close_d634289d":"Закрыть"},"sl":{"close_d634289d":"Zapri"},"sv":{"close_d634289d":"Stäng"},"sv-x-k12":{"close_d634289d":"Stäng"},"tr":{"close_d634289d":"Kapat"},"uk":{"close_d634289d":"Закрити"},"zh-Hans":{"close_d634289d":"关闭"},"zh-Hant":{"close_d634289d":"關閉"}}'))
n("jQeR")
n("0sPK")
var s=i["default"].scoped("tray")
var l=n("q1tI")
var c=n.n(l)
n("17x9")
var u=n("Mmr1")
var d=n("S4Kx")
var h=n("TstA")
var p=n("msMH")
var _=n("7Hz5")
var f=n("p9+C")
var m=n("z3Sh")
var g=n("RtEy")
var v=n.n(g)
n.d(t,"a",(function(){return b}))
b.defaultProps={padding:"small",contentPadding:"0",errorImageUrl:v.a}
function b(e){let t=e.padding,n=e.headerPadding,i=e.contentPadding,o=e.errorSubject,l=e.errorCategory,g=e.errorImageUrl,v=e.label,b=e.title,x=e.onDismiss,y=e.children,k=Object(a["a"])(e,["padding","headerPadding","contentPadding","errorSubject","errorCategory","errorImageUrl","label","title","onDismiss","children"])
null==n&&(n="0 0 ".concat(t," 0"))
null==b&&(b=v)
var w=Object(r["a"])(h["a"].Item,{grow:true},void 0,Object(r["a"])(p["a"],{ellipsis:true},void 0,b))
function O(){return Object(r["a"])(h["a"],{as:"div",padding:n},void 0,w,Object(r["a"])(h["a"].Item,{},void 0,Object(r["a"])(u["a"],{onClick:x,size:"small"},void 0,s.t("Close"))))}var j=Object(r["a"])(m["a"],{imageUrl:g,errorSubject:o,errorCategory:l})
var C=Object(r["a"])(d["a"],{as:"div",padding:i,width:"100%",height:"100%"},void 0,y)
function B(){return Object(r["a"])(f["a"],{errorComponent:j},void 0,C)}return c.a.createElement(_["a"],Object.assign({label:v,onDismiss:x},k),Object(r["a"])(d["a"],{as:"div",padding:t,position:"absolute",insetBlockStart:"0",insetBlockEnd:"0",insetInlineStart:"0",insetInlineEnd:"0"},void 0,Object(r["a"])("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"}},void 0,O(),Object(r["a"])("div",{style:{position:"relative",flex:1}},void 0,B()))))}},p6Wi:function(e,t,n){"use strict"
var r=n("pQTu")
var a=n("m0r6")
Object(a["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","delete":"Delete"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
n("jQeR")
n("0sPK")
var i=r["default"].scoped("instructure_misc_plugins")
var o=n("ouhR")
var s=n.n(o)
var l=n("5Ky4")
var c=n("JD5e")
n("jYyc")
n("YGE8")
n("B1vq")
n("s/PJ")
s.a.fn.setOptions=function(e,t){let n=e?"<option value=''>"+Object(l["a"])(e)+"</option>":""
null==t&&(t=[])
t.forEach(e=>{const t=Object(l["a"])(e)
n+='<option value="'+t+'">'+t+"</option>"})
return this.html(s.a.raw(n))}
s.a.fn.ifExists=function(e){this.length&&e.call(this,this)
return this}
s.a.fn.scrollbarWidth=function(){const e=s()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div")
const n=t.innerWidth()
e.css("overflow-y","scroll")
const r=t.innerWidth()
e.remove()
return n-r}
s.a.fn.dim=function(e){return this.animate({opacity:.4},e)}
s.a.fn.undim=function(e){return this.animate({opacity:1},e)}
s.a.fn.confirmDelete=function(e){e=s.a.extend({},s.a.fn.confirmDelete.defaults,e)
const t=this
let n=null
let r=true
e.noMessage=e.noMessage||e.no_message
const a=function(){if(!r){e.cancelled&&s.a.isFunction(e.cancelled)&&e.cancelled.call(t)
return}e.confirmed||(e.confirmed=function(){t.dim()})
e.confirmed.call(t)
if(e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const r=e.prepareData?e.prepareData.call(t,n):{}
r.authenticity_token=Object(c["a"])()
s.a.ajaxJSON(e.url,"DELETE",r,n=>{e.success.call(t,n)},(n,r,a,i)=>{e.error&&s.a.isFunction(e.error)?e.error.call(t,n,r,a,i):s.a.ajaxJSON.unhandledXHRs.push(r)})}else{e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})})
e.success.call(t)}}
if(e.message&&!e.noMessage&&!s.a.skipConfirmations){if(e.dialog){r=false
const t="object"===typeof e.dialog?e.dialog:{}
const o=e.url.includes("assignments")?"btn-danger":"btn-primary"
n=s()(e.message).dialog(s.a.extend({},{modal:true,close:a,buttons:[{text:i.t("#buttons.cancel","Cancel"),click(){s()(this).dialog("close")}},{text:i.t("#buttons.delete","Delete"),class:o,click(){r=true
s()(this).dialog("close")}}]},t))
return}r=confirm(e.message)}a()}
s.a.fn.confirmDelete.defaults={get message(){return i.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
s.a.fn.fragmentChange=function(e){if(e&&true!==e){const n=(window.location.search||"").replace(/^\?/,"").split("&")
let r=null
for(var t=0;t<n.length;t++){const e=n[t]
e&&0===e.indexOf("hash=")&&(r="#"+e.substring(5))}this.bind("document_fragment_change",e)
const a=this
let i=false
for(t=0;t<s.a._checkFragments.fragmentList.length;t++){const e=s.a._checkFragments.fragmentList[t]
e.doc[0]==a[0]&&(i=true)}i||s.a._checkFragments.fragmentList.push({doc:a,fragment:""})
s()(window).bind("hashchange",s.a._checkFragments)
setTimeout(()=>{r&&r.length>0?a.triggerHandler("document_fragment_change",r):a&&a[0]&&a[0].location&&a[0].location.hash.length>0&&a.triggerHandler("document_fragment_change",a[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
s.a._checkFragments=function(){const e=s.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const n=e[t]
const r=n.doc
if(r[0].location.hash!=n.fragment){r.triggerHandler("document_fragment_change",r[0].location.hash)
n.fragment=r[0].location.hash
s.a._checkFragments.fragmentList[t]=n}}}
s.a._checkFragments.fragmentList=[]
s.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()}
s.a.fn.showIf=function(e){if(s.a.isFunction(e))return this.each((function(t){s()(this).showIf(e.call(this))}))
e?this.show():this.hide()
return this}
s.a.fn.disableIf=function(e){s.a.isFunction(e)&&(e=e.call(this))
this.prop("disabled",!!e)
return this}
s.a.fn.indicate=function(e){e=e||{}
let t
if("remove"==e){t=this.data("indicator")
t&&t.remove()
return}s()(".indicator_box").remove()
let n=this.offset()
e&&e.offset&&(n=e.offset)
const r=this.width()
const a=this.height()
const i=(e.container||this).zIndex()
t=s()(document.createElement("div"))
t.css({width:r+6,height:a+6,top:n.top-3,left:n.left-3,zIndex:i+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
t.addClass("indicator_box")
t.mouseover((function(){s()(this).stop().fadeOut("fast",(function(){s()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",t)
s()("body").append(t)
e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){s()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){s()(this).remove()}))
e&&e.scroll&&s()("html,body").scrollToVisible(t)}
s.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
s.a.fn.log=function(e){console.log("%s: %o",e,this)
return this}
s.a.fn.fillWindowWithMe=function(e){const t=s.a.extend({minHeight:400},e),n=s()(this),r=s()("#wrapper"),a=s()("#main"),i=s()("#not_right_side"),o=s()(window),l=s()(this).add(t.alsoResize)
function c(){l.height(0)
const e=o.height()-(r.offset().top+r.outerHeight())+(a.height()-i.height()),c=Math.max(400,e)
l.height(c)
s.a.isFunction(t.onResize)&&t.onResize.call(n,c)}c()
o.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",c)
return this}
s.a.fn.autoGrowInput=function(e){e=s.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e)
this.filter("input:text").each((function(){let t=e.minWidth||s()(this).width(),n="",r=s()(this),a=s()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:r.css("fontSize"),fontFamily:r.css("fontFamily"),fontWeight:r.css("fontWeight"),letterSpacing:r.css("letterSpacing"),whiteSpace:"nowrap"}),i=function(){setTimeout(()=>{if(n===(n=r.val()))return
a.text(n)
const i=a.width(),o=i+e.comfortZone>=t?i+e.comfortZone:t,s=r.width(),l=o<s&&o>=t||o>t&&o<e.maxWidth
l&&r.width(o)})}
a.insertAfter(r)
s()(this).bind("keyup keydown blur update change",i)}))
return this}
s.a},"p9+C":function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n("q1tI")
var a=n.n(r)
n("17x9")
class i extends a.a.Component{constructor(){super(...arguments)
this.state={hasError:false,error:null}}static getDerivedStateFromError(e){return{hasError:true,error:e}}render(){if(this.state.hasError)return a.a.cloneElement(this.props.errorComponent,{errorSubject:this.state.error.message})
return this.props.children}}},ppAs:function(e,t,n){"use strict"
var r=n("ouhR")
var a=n.n(r)
var i=n("GLiE")
var o=n.n(i)
var s=n("5Ky4")
var l=n("pQTu")
var c=n("m0r6")
Object(c["a"])(JSON.parse('{"ar":{"user_content_aaf0fb5a":"محتوى المستخدم"},"cy":{"user_content_aaf0fb5a":"Cynnwys Defnyddiwr"},"da":{"user_content_aaf0fb5a":"Brugerindhold"},"da-x-k12":{"user_content_aaf0fb5a":"Brugerindhold"},"de":{"user_content_aaf0fb5a":"Benutzer-Content"},"el":{"user_content_aaf0fb5a":"Περιεχόμενο Χρήστη"},"en-AU":{"user_content_aaf0fb5a":"User Content"},"en-AU-x-unimelb":{"user_content_aaf0fb5a":"User Content"},"en-CA":{"user_content_aaf0fb5a":"User Content"},"en-GB":{"user_content_aaf0fb5a":"User content"},"en-GB-x-lbs":{"user_content_aaf0fb5a":"User content"},"en-GB-x-ukhe":{"user_content_aaf0fb5a":"User content"},"es":{"user_content_aaf0fb5a":"Contenido del usuario"},"fa":{"user_content_aaf0fb5a":"محتوای کاربر"},"fi":{"user_content_aaf0fb5a":"Käyttäjän sisältö"},"fr":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"fr-CA":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"he":{"user_content_aaf0fb5a":"תוכן משתמש"},"ht":{"user_content_aaf0fb5a":"Kontni Itilizatè"},"hu":{"user_content_aaf0fb5a":"Felhasználói tartalom"},"is":{"user_content_aaf0fb5a":"Notandaefni"},"it":{"user_content_aaf0fb5a":"Contenuto utente"},"ja":{"user_content_aaf0fb5a":"ユーザーコンテンツ"},"mi":{"user_content_aaf0fb5a":"Ihirangi kaiwhakamahi"},"nb":{"user_content_aaf0fb5a":"Brukerinnhold"},"nb-x-k12":{"user_content_aaf0fb5a":"Brukerinnhold"},"nl":{"user_content_aaf0fb5a":"Gebruikersinhoud"},"nn":{"user_content_aaf0fb5a":"Brukarinnhald"},"pl":{"user_content_aaf0fb5a":"Zawartość użytkownika"},"pt":{"user_content_aaf0fb5a":"Conteúdo do Utilizador"},"pt-BR":{"user_content_aaf0fb5a":"Conteúdo do Usuário"},"ru":{"user_content_aaf0fb5a":"Контент пользователя"},"sl":{"user_content_aaf0fb5a":"Vsebina uporabnika"},"sv":{"user_content_aaf0fb5a":"Användarinnehåll"},"sv-x-k12":{"user_content_aaf0fb5a":"Användarinnehåll"},"tr":{"user_content_aaf0fb5a":"Kullanıcı İçeriği"},"uk":{"user_content_aaf0fb5a":"Контент користувача"},"zh-Hans":{"user_content_aaf0fb5a":"用户内容"},"zh-Hant":{"user_content_aaf0fb5a":"使用者內容"}}'))
n("jQeR")
n("0sPK")
var u=l["default"].scoped("user_content")
const d={translateMathmlForScreenreaders(e){const t=a()("<div/>").html(e.attr("x-canvaslms-safe-mathml")).html()
const n=a()('<span class="hidden-readable"></span>')
n.html(t)
return n},toMediaCommentLink(e){const t=a()("<a\n        id='media_comment_".concat(Object(s["a"])(a()(e).data("media_comment_id")),"'\n        data-media_comment_type='").concat(Object(s["a"])(a()(e).data("media_comment_type")),"'\n        class='instructure_inline_media_comment ").concat(Object(s["a"])(e.nodeName.toLowerCase()),"_comment'\n        data-alt='").concat(Object(s["a"])(a()(e).attr("data-alt")),"'\n      />"))
t.html(a()(e).html())
return t},convert(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=a()("<div />").html(e)
n.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function(){return d.toMediaCommentLink(this)}))
n.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
if(!t.forEditing){n.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function(){const e=a()(this)
if(!e.data("uc_snippet")||!e.data("uc_sig"))return this
const t=o.a.uniqueId("uc_")
let n="/object_snippet"
ENV.files_domain&&(n="//".concat(ENV.files_domain).concat(n))
const r=a()("<form\n            action='".concat(Object(s["a"])(n),"'\n            method='post'\n            class='user_content_post_form'\n            target='").concat(Object(s["a"])(t),"'\n            id='form-").concat(Object(s["a"])(t),"'\n          />"))
r.append(a()("<input type='hidden'/>").attr({name:"object_data",value:e.data("uc_snippet")}))
r.append(a()("<input type='hidden'/>").attr({name:"s",value:e.data("uc_sig")}))
a()("body").append(r)
setTimeout(()=>r.submit(),0)
return a()("<iframe\n            class='user_content_iframe'\n            name='".concat(Object(s["a"])(t),"'\n            style='width: ").concat(Object(s["a"])(e.data("uc_width")),"; height: ").concat(Object(s["a"])(e.data("uc_height")),";'\n            frameborder='0'\n            title='").concat(Object(s["a"])(u.t("User Content")),"'\n          />"))}))
n.find("img.equation_image").each((e,t)=>{const n=a()(t)
const r=d.translateMathmlForScreenreaders(n)
n.removeAttr("x-canvaslms-safe-mathml")
n.after(r)})}return n.html()}}
t["a"]=d},qJBq:function(e,t){(function(){var t,n,r
r=[]
t={}
e.exports=n=function(e,n,a){var i,o,s,l,c,u,d,h,p
null==a&&(a=true)
if("string"===typeof n){if(2!==n.length)throw{name:"ArgumentException",message:"The format for string options is '<thousands><decimal>' (exactly two characters)"}
p=n[0],i=n[1]}else if(Array.isArray(n)){if(2!==n.length)throw{name:"ArgumentException",message:"The format for array options is ['<thousands>','[<decimal>'] (exactly two elements)"}
p=n[0],i=n[1]}else{p=(null!=n?n.thousands:void 0)||(null!=n?n.group:void 0)||t.thousands
i=(null!=n?n.decimal:void 0)||t.decimal}d=""+p+i+a
u=r[d]
if(null==u){s=a?3:1
u=r[d]=new RegExp("^\\s*([+-]?(?:(?:\\d{1,3}(?:\\"+p+"\\d{"+s+",3})+)|\\d*))(?:\\"+i+"(\\d*))?\\s*$")}h=e.match(u)
if(!(null!=h&&3===h.length))return NaN
l=h[1].replace(new RegExp("\\"+p,"g"),"")
o=h[2]
c=parseFloat(l+"."+o)
return c}
e.exports.setOptions=function(e){var n,r
for(n in e){r=e[n]
t[n]=r}}
e.exports.factoryReset=function(){t={thousands:",",decimal:"."}}
e.exports.withOptions=function(e,t){null==t&&(t=true)
return function(r){return n(r,e,t)}}
e.exports.factoryReset()}).call(this)},znKQ:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var r=n("VTBJ")
var a=n("1OyB")
var i=n("vuIU")
var o=n("md7G")
var s=n("foSv")
var l=n("Ji7U")
var c=n("q1tI")
var u=n.n(c)
var d=n("hPGw")
var h=u.a.createElement("g",{fillRule:"evenodd",stroke:"none",strokeWidth:"1"},u.a.createElement("path",{d:"M994.578 1436.356c-133.365 0-241.822 108.457-241.822 241.822S861.213 1920 994.578 1920s241.822-108.457 241.822-241.822-108.457-241.822-241.822-241.822zM1165.063 1315.444L1310.156 0H679l145.093 1315.444z"}))
var p=function(e){Object(l["a"])(t,e)
function t(){Object(a["a"])(this,t)
return Object(o["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return u.a.createElement(d["a"],Object.assign({},this.props,{name:"IconWarningBorderless",viewBox:"0 0 1920 1920"}),h)}}])
t.displayName="IconWarningBorderlessSolid"
return t}(c["Component"])
p.glyphName="warning-borderless"
p.variant="Solid"
p.propTypes=Object(r["a"])({},d["a"].propTypes)}}])

//# sourceMappingURL=context_modules-c-0281ef452c.js.map