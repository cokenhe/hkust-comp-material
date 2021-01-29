(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[6],{IIOE:function(t,e,n){"use strict"
n.d(e,"a",(function(){return m}))
n.d(e,"b",(function(){return j}))
var o=n("ODXe")
var r=n("1OyB")
var i=n("vuIU")
var a=n("QF4Q")
var s=n("gCYW")
var c=n("DUTp")
var l=n("PJr3")
var h=n("jqAw")
var p=n("gpCx")
var f=n("i/8D")
var u=n("k72m")
function m(t,e,n){if(!t||"offscreen"===n.placement){var o=!n.container&&t
return{placement:n.placement,style:{left:"-9999em",overflow:"hidden",position:"absolute",top:"0",display:o?"none":null}}}var r=new v(t,e,n)
return{placement:r.placement,style:r.style}}var d=function(){function t(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{top:0,left:0}
Object(r["a"])(this,t)
this.node=Object(a["a"])(e)
"string"===typeof n?this.placement=j(n):Array.isArray(n)?this.placement=n:this.placement=["bottom","center"]
this.rect=Object(s["a"])(this.node)
this._offset=O(o,this.size)}Object(i["a"])(t,[{key:"calculateOffset",value:function(t){var e={top:0,start:0,center:"50%",bottom:"100%",end:"100%",stretch:0}
var n=Object(o["a"])(t,2),r=n[0],i=n[1]
if(["start","end"].indexOf(r)>=0){var a=[i,r]
r=a[0]
i=a[1]}var s=0
var c=0
"undefined"!==typeof e[r]&&(s=e[r])
"undefined"!==typeof e[i]&&(c=e[i])
return b([O({top:s,left:c},this.size),g(this._offset,this.placement)])}},{key:"normalizeScrollTop",value:function(t){return Object(c["a"])(this.node).body===t?0:t.scrollTop}},{key:"width",get:function(){return this.rect.width}},{key:"height",get:function(){return this.rect.height}},{key:"size",get:function(){return{width:this.width,height:this.height}}},{key:"position",get:function(){return{top:this.rect.top,left:this.rect.left}}},{key:"hasVerticalPlacement",get:function(){return["top","bottom"].indexOf(this.placement[0])>=0}},{key:"hasHorizontalPlacement",get:function(){return["start","end"].indexOf(this.placement[0])>=0}},{key:"shouldStretchVertically",get:function(){return"stretch"===this.placement[1]&&this.hasVerticalPlacement}},{key:"shouldStretchHorizontally",get:function(){return"stretch"===this.placement[1]&&this.hasHorizontalPlacement}},{key:"mirroredPlacement",get:function(){return Object(u["b"])(this.placement)}},{key:"scrollParentsOffset",get:function(){var t=Object(l["a"])(this.node)
var e=0
var n=0
for(var o=1;o<t.length;o++){var r=t[o]
var i=t[o-1]
e+=this.normalizeScrollTop(r)-this.normalizeScrollTop(i)
n+=r.scrollLeft-i.scrollLeft}return{top:e,left:n}}},{key:"positionedParentsOffset",get:function(){var t=Object(h["a"])(this.node)
var e=Object(c["a"])(this.node)
var n=t.length>1?0:e.documentElement.offsetTop
var o=0
var r=0
for(var i=1;i<t.length;i++){var a=Object(s["a"])(t[i])
var l=Object(s["a"])(t[i-1])
n+=l.top-a.top
o+=l.left-a.left
if(t[i]===e.body){n+=a.top
o+=a.left}r+=this.normalizeScrollTop(t[i])}n+=r
return{top:n,left:o}}}])
return t}()
var v=function(){function t(e,n,o){Object(r["a"])(this,t)
this.options=o||{}
var i=this.options,s=i.container,h=i.constrain,f=i.placement,u=i.over
if(!e||"offscreen"===f)return
this.container=s||Object(c["a"])(e).body
this.element=new d(e,f,{top:this.options.offsetY,left:this.options.offsetX})
this.target=new d(n||this.container,u?this.element.placement:this.element.mirroredPlacement)
"window"===h?this.constrainTo(Object(p["a"])(e)):"scroll-parent"===h?this.constrainTo(Object(l["a"])(this.target.node)[0]):"parent"===h?this.constrainTo(this.container):"function"===typeof h?this.constrainTo(Object(a["a"])(h.call(null))):"object"===typeof h&&this.constrainTo(Object(a["a"])(h))}Object(i["a"])(t,[{key:"overflow",value:function(t){var e=Object(p["a"])(t)
var n=Object(s["a"])(t)
var o=Object(s["a"])(e)
var r=b([this.target.position,this.offset])
var i={top:this.element.positionedParentsOffset.top+this.element.scrollParentsOffset.top,left:this.element.positionedParentsOffset.left+this.element.scrollParentsOffset.left}
var a=r.left+i.left
var c=r.left+this.element.width+i.left
var l=r.top+i.top
var h=r.top+this.element.height+i.top
"bottom"===this.element.placement[0]?l-=this.element.height+this.target.height:"top"===this.element.placement[0]&&(h+=this.element.height+this.target.height)
"start"===this.element.placement[1]?a-=this.element.width-this.target.width:"end"===this.element.placement[1]&&(c+=this.element.width-this.target.width)
"top"===this.element.placement[1]?l-=this.element.height-this.target.height:"bottom"===this.element.placement[1]&&(h+=this.element.height-this.target.height)
"end"===this.element.placement[0]?a-=this.element.width+this.target.width:"start"===this.element.placement[0]&&(c+=this.element.width+this.target.width)
var f=t===e?n:{top:o.top+n.top,bottom:n.top+n.height,left:o.left+n.left,right:n.left+n.width}
return{top:l<f.top?f.top-l:0,bottom:h>f.bottom?h-f.bottom:0,left:a<f.left?f.left-a:0,right:c>f.right?c-f.right:0}}},{key:"constrainTo",value:function(t){if(!t)return
var e=this.overflow(t)
var n={top:e.top>0,bottom:e.bottom>0,left:e.left>0,right:e.right>0}
if(this.element.hasVerticalPlacement){if("stretch"!==this.element.placement[1])if(n.left&&n.right){this.element.placement[1]="center"
this.target.placement[1]="center"}else if(n.left){this.element.placement[1]="start"
this.target.placement[1]="start"}else if(n.right){this.element.placement[1]="end"
this.target.placement[1]="end"}if(n.top&&n.bottom){if(e.bottom<e.top){this.element.placement[0]="bottom"
this.target.placement[0]="top"}else if(e.bottom>e.top){this.element.placement[0]="top"
this.target.placement[0]="bottom"}}else if(n.top){this.element.placement[0]="bottom"
this.target.placement[0]="top"}else if(n.bottom){this.element.placement[0]="top"
this.target.placement[0]="bottom"}}else if(this.element.hasHorizontalPlacement){if(n.top&&n.bottom){this.element.placement[1]="center"
this.target.placement[1]="center"}else if(n.top){this.element.placement[1]="top"
this.target.placement[1]="top"}else if(n.bottom){this.element.placement[1]="bottom"
this.target.placement[1]="bottom"}if(n.left&&n.right){if(e.left>e.right){this.element.placement[0]="end"
this.target.placement[0]="start"}else if(e.left<e.right){this.element.placement[0]="start"
this.target.placement[0]="end"}}else if(n.left){this.element.placement[0]="end"
this.target.placement[0]="start"}else if(n.right){this.element.placement[0]="start"
this.target.placement[0]="end"}}}},{key:"offset",get:function(){var t=this.target.calculateOffset(this.element.placement),e=t.top,n=t.left
var o=b([this.element.calculateOffset(this.target.placement),this.element.scrollParentsOffset,this.element.positionedParentsOffset])
return{top:e-o.top,left:n-o.left}}},{key:"placement",get:function(){return P(this.element.placement)}},{key:"minWidth",get:function(){return this.element.shouldStretchVertically?this.target.width:null}},{key:"minHeight",get:function(){return this.element.shouldStretchHorizontally?this.target.height:null}},{key:"position",get:function(){var t=Object(p["a"])(this.target.node)
var e=b([this.target.position,this.offset]),n=e.left,o=e.top
if(f["a"]&&t.matchMedia){var r=t.matchMedia("only screen and (min-resolution: 1.3dppx)").matches||t.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches
if(!r){n=Math.round(n)
o=Math.round(o)}}return{left:n,top:o}}},{key:"style",get:function(){return{top:0,left:0,minWidth:this.minWidth,minHeight:this.minHeight,position:"absolute",transform:"translateX(".concat(this.position.left,"px) translateY(").concat(this.position.top,"px) translateZ(0)")}}}])
return t}()
function b(t){return t.reduce((function(t,e){return{top:t.top+e.top,left:t.left+e.left}}),{top:0,left:0})}function g(t,e){var n=t.top,o=t.left
"bottom"===e[0]&&(n=0-parseFloat(n,10))
"end"===e[0]&&(o=0-parseFloat(o,10))
return{top:n,left:o}}function O(t,e){var n=t.left,o=t.top
n="string"===typeof n&&-1!==n.indexOf("%")?parseFloat(n,10)/100*e.width:parseFloat(n,10)
o="string"===typeof o&&-1!==o.indexOf("%")?parseFloat(o,10)/100*e.height:parseFloat(o,10)
return{top:o,left:n}}function y(t){var e=Object(o["a"])(t,2),n=e[0],r=e[1]
if("center"===n||"stretch"===n){var i=[r,n]
n=i[0]
r=i[1]}return[n,r]}function j(t){var e=t.split(" ")
1===e.length&&(e=[t,"center"])
return y(e)}function P(t){return t.join(" ")}},PJr3:function(t,e,n){"use strict"
n.d(e,"a",(function(){return a}))
var o=n("QF4Q")
var r=n("i/8D")
var i=n("IPIv")
function a(t){var e=[]
if(!r["a"])return e
var n=Object(o["a"])(t)
if(n){var a=Object(i["a"])(n)||{}
var s=a.position
if("fixed"===s)return[n.ownerDocument]
var c=n
while(c&&1===c.nodeType&&(c=c.parentNode)){var l=void 0
try{l=Object(i["a"])(c)}catch(t){}if("undefined"===typeof l||null===l){e.push(c)
return e}var h=l,p=h.overflow,f=h.overflowX,u=h.overflowY;/(auto|scroll|overlay)/.test(p+u+f)&&("absolute"!==s||["relative","absolute","fixed"].indexOf(l.position)>=0)&&e.push(c)}e.push(n.ownerDocument.body)
n.ownerDocument!==document&&e.push(n.ownerDocument.defaultView)}return e}},UCAh:function(t,e,n){"use strict"
n.d(e,"a",(function(){return a}))
var o=n("17x9")
var r=n.n(o)
var i=n("AdN2")
var a={placement:r.a.oneOf(["top","end","bottom","start","top start","start top","start center","start bottom","bottom start","bottom center","bottom end","end bottom","end center","end top","top end","top center","center end","center start","top stretch","bottom stretch","end stretch","start stretch","offscreen"]),mountNode:r.a.oneOfType([i["a"],r.a.func]),constrain:r.a.oneOfType([i["a"],r.a.func,r.a.oneOf(["window","scroll-parent","parent","none"])])}},jqAw:function(t,e,n){"use strict"
n.d(e,"a",(function(){return s}))
var o=n("QF4Q")
var r=n("i/8D")
var i=n("IPIv")
var a=n("DUTp")
function s(t){var e=[]
if(!r["a"])return e
var n=Object(o["a"])(t)
if(n){var s=n
while((s=s.parentNode)&&s&&1===s.nodeType&&"BODY"!==s.tagName){var c=Object(i["a"])(s)
var l=c.getPropertyValue("-webkit-transform")||c.getPropertyValue("-moz-transform")||c.getPropertyValue("-ms-transform")||c.getPropertyValue("-o-transform")||c.getPropertyValue("transform")||"none"
var h="none"===l||"matrix(1, 0, 0, 1, 0, 0)"===l
"static"===c.position&&h||e.push(s)}e.push(Object(a["a"])(n).body)}return e}},lzgt:function(t,e,n){"use strict"
n.d(e,"a",(function(){return d}))
var o=n("Ff2n")
var r=n("1OyB")
var i=n("vuIU")
var a=n("md7G")
var s=n("foSv")
var c=n("Ji7U")
var l=n("q1tI")
var h=n.n(l)
var p=n("17x9")
var f=n.n(p)
var u=n("4Awi")
var m=n("sQ3t")
var d=function(t){Object(c["a"])(e,t)
function e(){Object(r["a"])(this,e)
return Object(a["a"])(this,Object(s["a"])(e).apply(this,arguments))}Object(i["a"])(e,[{key:"render",value:function(){var t=this.props,e=t.children,n=Object(o["a"])(t,["children"])
return Object(m["a"])(e,n)}}])
e.displayName="ComponentIdentifier"
return e}(l["Component"])
d.propTypes={children:f.a.node}
d.defaultProps={children:null}
d.pick=function(t,e){var n
h.a.Children.forEach(e,(function(e){Object(u["a"])(e,[t])&&(n=e)}))
return n}},tbLP:function(t,e,n){"use strict"
var o=n("rePB")
var r=n("VTBJ")
var i=n("vuIU")
var a=n("1OyB")
var s=n("md7G")
var c=n("foSv")
var l=n("Ji7U")
var h=n("q1tI")
var p=n.n(h)
var f=n("17x9")
var u=n.n(f)
var m=n("TSYQ")
var d=n.n(m)
var v=n("J2CL")
var b=n("AdN2")
var g=n("nAyT")
var O=n("lzgt")
var y=n("sQ3t")
var j=n("II2N")
var P=n("E+IV")
var k=n("QF4Q")
var T=n("gCYW")
var w=n("ISHz")
function A(t,e){var n=Object(k["a"])(t)
var o=[]
var r=Object(T["a"])(n)||{}
var i=false
function a(){if(false===i){var t=Object(T["a"])(n)||{}
var s=t.top!==r.top||t.left!==r.left||t.right!==r.right||t.bottom!==r.bottom||t.width!==r.width||t.height!==r.height
s&&"function"===typeof e&&e(t)
r=t
o.push(Object(w["a"])(a))}}a()
return{remove:function(){i=true
o.forEach((function(t){return t.cancel()}))}}}var I=n("BTe1")
var _=n("IE60")
var x=n("0mOT")
var z=n("eGSd")
var N=n("oXx0")
var C=n("3Zzb")
var L=n("IIOE")
var S=n("UCAh")
var U=function(t){var e=t.stacking
return{zIndex:e.topmost}}
n.d(e,"a",(function(){return et}))
var D,V,F,Q,Y,E,B,H,X,G,J,W,M,q,K,Z
var R={componentId:"eGKPI",template:function(t){return"\n\n.eGKPI_bGBk{box-sizing:border-box;z-index:".concat(t.zIndex||"inherit","}")},root:"eGKPI_bGBk"}
var $=(D=Object(g["a"])("8.0.0",null,"Use Position's `renderTarget` prop instead."),V=Object(N["a"])(),D(F=V(F=(Y=Q=function(t){Object(l["a"])(e,t)
function e(){Object(a["a"])(this,e)
return Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments))}return e}(O["a"]),Q.displayName="PositionTarget",Q.locatorAttribute="data-position-target",Y))||F)||F)
var tt=(E=Object(g["a"])("8.0.0",null,"Use Posiition's `children` instead."),B=Object(N["a"])(),E(H=B(H=(G=X=function(t){Object(l["a"])(e,t)
function e(){Object(a["a"])(this,e)
return Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments))}return e}(O["a"]),X.displayName="PositionContent",X.propTypes={children:u.a.node,placement:S["a"].placement},X.locatorAttribute="data-position-content",G))||H)||H)
var et=(J=Object(g["a"])("8.0.0",{trackPosition:"shouldTrackPosition",over:"shouldPositionOverTarget"}),W=Object(N["a"])(),M=Object(v["themeable"])(U,R),J(q=W(q=M(q=(Z=K=function(t){Object(l["a"])(e,t)
function e(t){var n
Object(a["a"])(this,e)
n=Object(s["a"])(this,Object(c["a"])(e).call(this,t))
n._timeouts=[]
n.handlePortalOpen=function(){n.position();(n.props.shouldTrackPosition||n.props.trackPosition)&&n.startTracking()
n._timeouts.push(setTimeout((function(){n.state.positioned&&"function"===typeof n.props.onPositioned&&n.props.onPositioned({top:n.state.style.top,left:n.state.style.left,placement:n.state.placement})}),0))}
n.position=function(){n.setState(Object(r["a"])({positioned:true},n.calculatePosition(n.props)))}
n.state=Object(r["a"])({positioned:false},n.calculatePosition(t))
n.position=Object(z["a"])(n.position,0,{leading:false,trailing:true})
n._id=n.props.id||Object(I["a"])("Position")
return n}Object(i["a"])(e,[{key:"shouldComponentUpdate",value:function(t,e,n){return!Object(_["a"])(this.state,e)||!Object(x["a"])(this.props,t)||!Object(x["a"])(this.context,n)}},{key:"componentDidMount",value:function(){this.toggleLocatorAttributes(true)}},{key:"componentDidUpdate",value:function(t,e){this.position()
this.toggleLocatorAttributes(true)
this.props.shouldTrackPosition!==t.shouldTrackPosition?this.props.shouldTrackPosition?this.startTracking():this.stopTracking():this.props.trackPosition!==t.trackPosition&&(this.props.trackPosition?this.startTracking():this.stopTracking())
var n=this.state,o=n.style,r=n.placement
o&&e.style&&(r!==e.placement||o.top!==e.style.top||o.left!==e.style.left)&&this.props.onPositionChanged({top:o.top,left:o.left,placement:r})}},{key:"componentWillUnmount",value:function(){this.position.cancel()
this.stopTracking()
this._timeouts.forEach((function(t){return clearTimeout(t)}))
this.toggleLocatorAttributes(false)}},{key:"toggleLocatorAttributes",value:function(t){this.toggleLocatorAttribute(Object(k["a"])(this._content),e.contentLocatorAttribute,t)
this.toggleLocatorAttribute(Object(k["a"])(this._target),e.targetLocatorAttribute,t)}},{key:"toggleLocatorAttribute",value:function(t,e,n){if(t&&t.hasAttribute){n&&!t.hasAttribute(e)&&t.setAttribute(e,this._id)
!n&&t.hasAttribute(e)&&t.removeAttribute(e)}}},{key:"calculatePosition",value:function(t){return Object(L["a"])(this._content,this._target,{placement:t.placement,offsetX:t.offsetX,offsetY:t.offsetY,constrain:t.constrain,container:t.mountNode,over:t.shouldPositionOverTarget||t.over})}},{key:"startTracking",value:function(){this._listener=this._listener||A(this._target,this.position)}},{key:"stopTracking",value:function(){if(this._listener){this._listener.remove()
this._listener=null}}},{key:"renderContent",value:function(){var t=this
var n=O["a"].pick(e.Content,this.props.children)
n||(n=Object(y["a"])(this.props.children))
if(n){var i
n=Object(j["a"])(n,Object(o["a"])({ref:function(e){t._content=e},style:Object(r["a"])({},n.props.style,{},this.state.style),className:d()((i={},Object(o["a"])(i,R.root,true),Object(o["a"])(i,n.props.className,n.props.className),i))},e.contentLocatorAttribute,this._id))
n=p.a.createElement(C["a"],{open:true,onOpen:this.handlePortalOpen,mountNode:this.props.mountNode,insertAt:this.props.insertAt},n)}return n}},{key:"renderTarget",value:function(){var t=this
var n=O["a"].pick(e.Target,this.props.children)
n||(n=Object(P["a"])(this.props.renderTarget))
if(n)return Object(j["a"])(n,Object(o["a"])({ref:function(e){t._target=e}},e.targetLocatorAttribute,this._id))
if(!this.props.target)return null
this._target=Object(P["a"])(this.props.target)}},{key:"render",value:function(){var t=Object(o["a"])({},e.locatorAttribute,this._id)
return p.a.createElement("span",t,this.renderTarget(),this.renderContent())}}])
e.displayName="Position"
return e}(h["Component"]),K.Target=$,K.Content=tt,K.locatorAttribute="data-position",K.targetLocatorAttribute="data-position-target",K.contentLocatorAttribute="data-position-content",K.propTypes={renderTarget:u.a.oneOfType([u.a.node,u.a.func]),target:u.a.oneOfType([b["a"],u.a.func]),placement:S["a"].placement,mountNode:S["a"].mountNode,insertAt:u.a.oneOf(["bottom","top"]),constrain:S["a"].constrain,offsetX:u.a.oneOfType([u.a.string,u.a.number]),offsetY:u.a.oneOfType([u.a.string,u.a.number]),id:u.a.string,shouldTrackPosition:u.a.bool,shouldPositionOverTarget:u.a.bool,onPositionChanged:u.a.func,onPositioned:u.a.func,children:u.a.node,trackPosition:u.a.bool,over:u.a.bool},K.defaultProps={renderTarget:void 0,target:void 0,placement:"bottom center",mountNode:null,insertAt:"bottom",constrain:"window",offsetX:0,offsetY:0,id:void 0,shouldTrackPosition:true,shouldPositionOverTarget:false,onPositioned:function(t){},onPositionChanged:function(t){},children:null},Z))||q)||q)||q)}}])

//# sourceMappingURL=6-c-e0e82b199d.js.map