(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[40],{"1NAo":function(n,t,e){"use strict"
t["a"]=function(n){return"undefined"!==typeof Map&&n instanceof Map}},"1T5U":function(n,t,e){"use strict"
e.d(t,"b",(function(){return r}))
e.d(t,"a",(function(){return a}))
var r="/"
var a="||"},"3IO0":function(n,t){n.exports=o
var e=/\s/
var r=/(_|-|\.|:)/
var a=/([a-z][A-Z]|[A-Z][a-z])/
function o(n){if(e.test(n))return n.toLowerCase()
if(r.test(n))return(c(n)||n).toLowerCase()
if(a.test(n))return f(n).toLowerCase()
return n.toLowerCase()}var i=/[\W_]+(.|$)/g
function c(n){return n.replace(i,(function(n,t){return t?" "+t:""}))}var u=/(.)([A-Z]+)/g
function f(n){return n.replace(u,(function(n,t,e){return t+" "+e.toLowerCase().split("").join(" ")}))}},"5Shj":function(n,t,e){"use strict"
var r=e("Ff2n")
var a=e("1OyB")
var o=e("vuIU")
var i=e("md7G")
var c=e("foSv")
var u=e("Ji7U")
var f=e("q1tI")
var s=e.n(f)
var v=e("17x9")
var p=e.n(v)
var l=e("UCAh")
var d=e("J2CL")
var b=e("nAyT")
var y=e("oXx0")
var h=e("bZJi")
var O=e("AdN2")
var m=function(n){var t=n.typography,e=n.spacing
return{fontFamily:t.fontFamily,fontWeight:t.fontWeightNormal,fontSize:t.fontSizeSmall,padding:e.small}}
e.d(t,"a",(function(){return N}))
var g,j,w,T,S,C
var x={componentId:"eZLSb",template:function(n){return"\n\n.eZLSb_bGBk{box-sizing:border-box;display:block;font-family:".concat(n.fontFamily||"inherit",";font-size:").concat(n.fontSize||"inherit",";font-weight:").concat(n.fontWeight||"inherit",";padding:").concat(n.padding||"inherit","}")},root:"eZLSb_bGBk"}
var N=(g=Object(b["a"])("7.0.0",null,"Use Tooltip from ui-tooltip instead."),j=Object(y["a"])(),w=Object(d["themeable"])(m,x),g(T=j(T=w(T=(C=S=function(n){Object(u["a"])(t,n)
function t(){Object(a["a"])(this,t)
return Object(i["a"])(this,Object(c["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"render",value:function(){var n=this.props,t=n.children,e=n.tip,a=n.variant,o=n.on,i=n.placement,c=n.mountNode,u=n.positionTarget,f=n.constrain,v=Object(r["a"])(n,["children","tip","variant","on","placement","mountNode","positionTarget","constrain"])
return s.a.createElement(h["a"],Object.assign({},v,{renderTip:e,on:o,color:"inverse"===a?"primary":"primary-inverse",placement:i,mountNode:c,positionTarget:u,constrain:f}),t)}}])
t.displayName="Tooltip"
return t}(f["Component"]),S.propTypes={children:p.a.oneOfType([p.a.node,p.a.func]).isRequired,tip:p.a.node.isRequired,as:p.a.elementType,on:p.a.oneOfType([p.a.oneOf(["click","hover","focus"]),p.a.arrayOf(p.a.oneOf(["click","hover","focus"]))]),variant:p.a.oneOf(["default","inverse"]),placement:l["a"].placement,mountNode:l["a"].mountNode,positionTarget:p.a.oneOfType([O["a"],p.a.func]),constrain:l["a"].constrain},S.defaultProps={on:void 0,variant:"inverse",placement:"top",mountNode:null,positionTarget:void 0,constrain:"window"},C))||T)||T)||T)},"AS+4":function(n,t,e){"use strict"
t["a"]=function(n){return n}},F39V:function(n,t,e){var r=e("NtLt")
n.exports=a
function a(n){return r(n).replace(/\s(\w)/g,(function(n,t){return t.toUpperCase()}))}},FH7K:function(n,t,e){"use strict"
var r=e("QLaP")
var a=e.n(r)
var o=e("w/wI")
var i=e("UfUT")
var c=e("AS+4")
var u=function(n){return Array.isArray(n)}
var f=function(n){return"string"===typeof n}
var s=e("xZ5c")
var v=function(n){return n[n.length-1]}
var p=e("F39V")
var l=e.n(p)
var d="/"
var b=function(n){return-1===n.indexOf(d)?l()(n):n.split(d).map(l.a).join(d)}
var y=function(n,t){return n.reduce((function(n,e){return t(n,e)}),{})}
var h=e("c0mm")
var O=Object(h["a"])(o["a"])
var m=e("1T5U")
var g=function(n){return 0===n.length}
function j(n,t){var e=void 0===t?{}:t,r=e.namespace,a=void 0===r?m["b"]:r,o=e.prefix
function i(t,e,r){var a=b(r.shift())
if(g(r))e[a]=n[t]
else{e[a]||(e[a]={})
i(t,e[a],r)}}var c={}
Object.getOwnPropertyNames(n).forEach((function(n){var t=o?n.replace(""+o+a,""):n
return i(n,c,t.split(a))}))
return c}var w=e("aWKK")
e.d(t,"a",(function(){return C}))
function T(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{}
var r=Object.keys(e)
"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))))
r.forEach((function(t){S(n,t,e[t])}))}return n}function S(n,t,e){t in n?Object.defineProperty(n,t,{value:e,enumerable:true,configurable:true,writable:true}):n[t]=e
return n}function C(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r]
var i=Object(o["a"])(v(e))?e.pop():{}
a()(e.every(f)&&(f(n)||Object(o["a"])(n)),"Expected optional object followed by string action types")
if(f(n))return A([n].concat(e),i)
return T({},x(n,i),A(e,i))}function x(n,t){var e=O(n,t)
var r=N(e)
return j(r,t)}function N(n,t){var e=void 0===t?{}:t,r=e.prefix,o=e.namespace,f=void 0===o?m["b"]:o
function v(n){if(Object(i["a"])(n)||Object(s["a"])(n))return true
if(u(n)){var t=n[0],e=void 0===t?c["a"]:t,r=n[1]
return Object(i["a"])(e)&&Object(i["a"])(r)}return false}return y(Object.keys(n),(function(t,e){var o
var i=n[e]
a()(v(i),"Expected function, undefined, null, or array with payload and meta functions for "+e)
var c=r?""+r+f+e:e
var s=u(i)?w["a"].apply(void 0,[c].concat(i)):Object(w["a"])(c,i)
return T({},t,(o={},o[e]=s,o))}))}function A(n,t){var e=y(n,(function(n,t){var e
return T({},n,(e={},e[t]=c["a"],e))}))
var r=N(e,t)
return y(Object.keys(r),(function(n,t){var e
return T({},n,(e={},e[b(t)]=r[t],e))}))}},"M/8B":function(n,t,e){"use strict"
var r=e("QLaP")
var a=e.n(r)
var o=e("UfUT")
var i=e("w/wI")
var c=e("AS+4")
var u=e("xZ5c")
var f=function(n){return void 0===n}
var s=function(n){return n.toString()}
var v=e("1T5U")
e.d(t,"a",(function(){return p}))
function p(n,t,e){void 0===t&&(t=c["a"])
var r=s(n).split(v["a"])
a()(!f(e),"defaultState for reducer handling "+r.join(", ")+" should be defined")
a()(Object(o["a"])(t)||Object(i["a"])(t),"Expected reducer to be a function or object with next and throw reducers")
var p=Object(o["a"])(t)?[t,t]:[t.next,t.throw].map((function(n){return Object(u["a"])(n)?c["a"]:n})),l=p[0],d=p[1]
return function(n,t){void 0===n&&(n=e)
var a=t.type
if(!a||-1===r.indexOf(s(a)))return n
return(true===t.error?d:l)(n,t)}}},NtLt:function(n,t,e){var r=e("3IO0")
n.exports=a
function a(n){return r(n).replace(/[\W_]+(.|$)/g,(function(n,t){return t?" "+t:""})).trim()}},UfUT:function(n,t,e){"use strict"
t["a"]=function(n){return"function"===typeof n}},V55S:function(n,t,e){"use strict"
e.d(t,"a",(function(){return a}))
var r=e("1NAo")
function a(n,t){return Object(r["a"])(t)?t.get(n):t[n]}},aWKK:function(n,t,e){"use strict"
var r=e("QLaP")
var a=e.n(r)
var o=e("UfUT")
var i=e("AS+4")
var c=function(n){return null===n}
e.d(t,"a",(function(){return u}))
function u(n,t,e){void 0===t&&(t=i["a"])
a()(Object(o["a"])(t)||c(t),"Expected payloadCreator to be a function, undefined or null")
var r=c(t)||t===i["a"]?i["a"]:function(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),a=1;a<e;a++)r[a-1]=arguments[a]
return n instanceof Error?n:t.apply(void 0,[n].concat(r))}
var u=Object(o["a"])(e)
var f=n.toString()
var s=function(){var t=r.apply(void 0,arguments)
var a={type:n}
t instanceof Error&&(a.error=true)
void 0!==t&&(a.payload=t)
u&&(a.meta=e.apply(void 0,arguments))
return a}
s.toString=function(){return f}
return s}},bZJi:function(n,t,e){"use strict"
var r=e("Ff2n")
var a=e("VTBJ")
var o=e("1OyB")
var i=e("vuIU")
var c=e("md7G")
var u=e("foSv")
var f=e("Ji7U")
var s=e("q1tI")
var v=e.n(s)
var p=e("17x9")
var l=e.n(p)
var d=e("nAyT")
var b=e("KgFQ")
var y=e("jtGx")
var h=e("sQ3t")
var O=e("E+IV")
var m=e("UCAh")
var g=e("BTe1")
var j=e("J2CL")
var w=e("oXx0")
var T=e("jsCG")
var S=e("AdN2")
var C=function(n){var t=n.typography,e=n.spacing
return{fontFamily:t.fontFamily,fontWeight:t.fontWeightNormal,fontSize:t.fontSizeSmall,padding:e.small}}
e.d(t,"a",(function(){return L}))
var x,N,A,U,k,F
var I={componentId:"eZLSb",template:function(n){return"\n\n.eZLSb_bGBk{box-sizing:border-box;display:block;font-family:".concat(n.fontFamily||"inherit",";font-size:").concat(n.fontSize||"inherit",";font-weight:").concat(n.fontWeight||"inherit",";padding:").concat(n.padding||"inherit","}")},root:"eZLSb_bGBk"}
var L=(x=Object(d["a"])("8.0.0",{tip:"renderTip",variant:"color"}),N=Object(w["a"])(),A=Object(j["themeable"])(C,I),x(U=N(U=A(U=(F=k=function(n){Object(f["a"])(t,n)
function t(){var n
var e
Object(o["a"])(this,t)
for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i]
e=Object(c["a"])(this,(n=Object(u["a"])(t)).call.apply(n,[this].concat(a)))
e._id=Object(g["a"])("Tooltip")
e.state={hasFocus:false}
e.handleFocus=function(n){e.setState({hasFocus:true})}
e.handleBlur=function(n){e.setState({hasFocus:false})}
return e}Object(i["a"])(t,[{key:"renderTrigger",value:function(){var n=this.props,e=n.children,r=n.as
var o=this.state.hasFocus
var i={"aria-describedby":this._id}
if(r){var c=Object(b["a"])(t,this.props)
var u=Object(y["a"])(this.props,t.propTypes)
return v.a.createElement(c,Object.assign({},u,i),e)}return"function"===typeof e?e({focused:o,getTriggerProps:function(n){return Object(a["a"])({},i,{},n)}}):Object(h["a"])(this.props.children,i)}},{key:"render",value:function(){var n=this
var t=this.props,e=t.renderTip,a=t.isShowingContent,o=t.defaultIsShowingContent,i=t.on,c=t.placement,u=t.mountNode,f=t.constrain,s=t.offsetX,p=t.offsetY,l=t.positionTarget,d=t.onShowContent,b=t.onHideContent,h=t.tip,m=(t.variant,Object(r["a"])(t,["renderTip","isShowingContent","defaultIsShowingContent","on","placement","mountNode","constrain","offsetX","offsetY","positionTarget","onShowContent","onHideContent","tip","variant"]))
var g=this.props.variant
g=g?"default"===g?"primary-inverse":"primary":this.props.color
return v.a.createElement(T["a"],Object.assign({},Object(y["b"])(m),{isShowingContent:a,defaultIsShowingContent:o,on:i,shouldRenderOffscreen:true,shouldReturnFocus:false,placement:c,color:"primary"===g?"primary-inverse":"primary",mountNode:u,constrain:f,shadow:"none",offsetX:s,offsetY:p,positionTarget:l,renderTrigger:function(){return n.renderTrigger()},onShowContent:d,onHideContent:b,onFocus:this.handleFocus,onBlur:this.handleBlur}),v.a.createElement("span",{id:this._id,className:I.root,role:"tooltip"},e?Object(O["a"])(e):h))}}])
t.displayName="Tooltip"
return t}(s["Component"]),k.propTypes={children:l.a.oneOfType([l.a.node,l.a.func]).isRequired,renderTip:l.a.oneOfType([l.a.node,l.a.func]),isShowingContent:l.a.bool,defaultIsShowingContent:l.a.bool,as:l.a.elementType,on:l.a.oneOfType([l.a.oneOf(["click","hover","focus"]),l.a.arrayOf(l.a.oneOf(["click","hover","focus"]))]),color:l.a.oneOf(["primary","primary-inverse"]),placement:m["a"].placement,mountNode:m["a"].mountNode,constrain:m["a"].constrain,offsetX:l.a.oneOfType([l.a.string,l.a.number]),offsetY:l.a.oneOfType([l.a.string,l.a.number]),positionTarget:l.a.oneOfType([S["a"],l.a.func]),onShowContent:l.a.func,onHideContent:l.a.func,tip:l.a.node,variant:l.a.oneOf(["default","inverse"])},k.defaultProps={renderTip:void 0,isShowingContent:void 0,defaultIsShowingContent:false,on:void 0,color:"primary",placement:"top",mountNode:null,constrain:"window",offsetX:0,offsetY:0,positionTarget:void 0,onShowContent:function(n){},onHideContent:function(n,t){t.documentClick}},F))||U)||U)||U)},c0mm:function(n,t,e){"use strict"
var r=e("1T5U")
var a=e("fUqf")
var o=e("V55S")
t["a"]=function(n){return function t(e,i,c,u){var f=void 0===i?{}:i,s=f.namespace,v=void 0===s?r["b"]:s,p=f.prefix
void 0===c&&(c={})
void 0===u&&(u="")
function l(n){var t
if(!u)return n
var e=n.toString().split(r["a"])
var a=u.split(r["a"])
return(t=[]).concat.apply(t,a.map((function(n){return e.map((function(t){return""+n+v+t}))}))).join(r["a"])}function d(n){if(u||!p||p&&new RegExp("^"+p+v).test(n))return n
return""+p+v+n}Object(a["a"])(e).forEach((function(r){var a=d(l(r))
var i=Object(o["a"])(r,e)
n(i)?t(i,{namespace:v,prefix:p},c,a):c[a]=i}))
return c}}},e7SQ:function(n,t,e){"use strict"
var r=function(){for(var n=arguments.length,t=Array(n),e=0;e<n;e++)t[e]=arguments[e]
var r="function"!==typeof t[t.length-1]&&t.pop()
var a=t
if("undefined"===typeof r)throw new TypeError("The initial state may not be undefined. If you do not want to set a value for this reducer, you can use null instead of undefined.")
return function(n,t){for(var e=arguments.length,o=Array(e>2?e-2:0),i=2;i<e;i++)o[i-2]=arguments[i]
var c="undefined"===typeof n
var u="undefined"===typeof t
if(c&&u&&r)return r
return a.reduce((function(n,e){return e.apply(void 0,[n,t].concat(o))}),c&&!u&&r?r:n)}}
var a=e("QLaP")
var o=e.n(a)
var i=e("w/wI")
var c=e("1NAo")
var u=e("fUqf")
function f(n){var t=Object(u["a"])(n)
var e=t.every((function(n){return"next"===n||"throw"===n}))
return t.length&&t.length<=2&&e}var s=e("c0mm")
var v=Object(s["a"])((function(n){return(Object(i["a"])(n)||Object(c["a"])(n))&&!f(n)}))
var p=e("M/8B")
var l=e("V55S")
e.d(t,"a",(function(){return d}))
function d(n,t,e){void 0===e&&(e={})
o()(Object(i["a"])(n)||Object(c["a"])(n),"Expected handlers to be a plain object.")
var a=v(n,e)
var f=Object(u["a"])(a).map((function(n){return Object(p["a"])(n,Object(l["a"])(n,a),t)}))
var s=r.apply(void 0,f.concat([t]))
return function(n,e){void 0===n&&(n=t)
return s(n,e)}}},fUqf:function(n,t,e){"use strict"
e.d(t,"a",(function(){return a}))
var r=e("1NAo")
function a(n){if(Object(r["a"])(n))return Array.from(n.keys())
if("undefined"!==typeof Reflect&&"function"===typeof Reflect.ownKeys)return Reflect.ownKeys(n)
var t=Object.getOwnPropertyNames(n)
"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n)))
return t}},"w/wI":function(n,t,e){"use strict"
t["a"]=function(n){if("object"!==typeof n||null===n)return false
var t=n
while(null!==Object.getPrototypeOf(t))t=Object.getPrototypeOf(t)
return Object.getPrototypeOf(n)===t}},xZ5c:function(n,t,e){"use strict"
t["a"]=function(n){return null===n||void 0===n}}}])

//# sourceMappingURL=40-c-528adefea9.js.map