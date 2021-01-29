(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[15],{"7/OM":function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
function a(e){var t
if(Array.isArray(e)){t=e.slice(0)
for(var n=0;n<t.length;n++)t[n]=a(t[n])
return t}return e}},KI51:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
n("1OyB")
n("vuIU")
n("md7G")
n("foSv")
n("ReuC")
n("Ji7U")
n("DEX3")
n("jcII")
var a=function(){return function(e){return e}}},"OI1/":function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var a=n("QF4Q")
var r=n("IPIv")
function i(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
var n=e&&Object(a["a"])(e)
if(n===window||n===document||n===document.body)return true
var s=n.parentNode
if(3===n.nodeType)return i(s,t)
var o=Object(r["a"])(n)
if("none"===o.display)return false
if("hidden"===o.visibility||"0"===o.opacity)return false
if("hidden"===o.overflow&&"absolute"===o.position&&"auto"!==o.clip){var c=o.clip.substring(5).slice(0,-1).split(", ")
var u=true
c.forEach((function(e){"0px"!==e&&(u=false)}))
if(u)return false}return!t||!s||i(s)}},dKDz:function(e,t,n){"use strict"
var a=/["'&<>]/
e.exports=r
function r(e){var t=""+e
var n=a.exec(t)
if(!n)return t
var r
var i=""
var s=0
var o=0
for(s=n.index;s<t.length;s++){switch(t.charCodeAt(s)){case 34:r="&quot;"
break
case 38:r="&amp;"
break
case 39:r="&#39;"
break
case 60:r="&lt;"
break
case 62:r="&gt;"
break
default:continue}o!==s&&(i+=t.substring(o,s))
o=s+1
i+=r}return o!==s?i+t.substring(o,s):i}},sIA8:function(e,t,n){"use strict"
var a=n("rePB")
var r=n("VTBJ")
var i=n("1OyB")
var s=n("vuIU")
var o=n("md7G")
var c=n("foSv")
var u=n("Ji7U")
n("DEX3")
var l=n("q1tI")
var h=n.n(l)
var d=n("17x9")
var v=n.n(d)
var f=n("TSYQ")
var p=n.n(f)
var g=n("J2CL")
var _=n("eGSd")
var b=n("8o96")
var m=n("i/8D")
var x=n("nAyT")
var O=n("KI51")
var y=n("sQ3t")
var j=n("II2N")
var T=n("oXx0")
var k=n("dKDz")
var w=n.n(k)
var I=n("7/OM")
var E=n("IPIv")
var S=n("gCYW")
var C=n("OI1/")
function L(e,t){var n=0
for(var a=0;a<e.length;a++){var r=e[a]
n+=D(r.textContent,1===r.nodeType?r:t)}return n}function D(e,t){var n=Object(E["a"])(t)
var a=document.createElement("canvas")
document.createDocumentFragment().appendChild(a)
var r=a.getContext("2d")
if(!r||!e)return 0
var i=e
var s=0
var o=0
var c=[n["font-weight"],n["font-style"],n["font-size"],n["font-family"]].join(" ")
r.font=c
"uppercase"===n["text-transform"]?i=e.toUpperCase():"lowercase"===n["text-transform"]?i=e.toLowerCase():"capitalize"===n["text-transform"]&&(i=e.replace(/\b\w/g,(function(e){return e.toUpperCase()})))
"normal"!==n["letter-spacing"]&&(s=i.length*parseInt(n["letter-spacing"]))
o=r.measureText(i).width+s
return o}var H=L
function U(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3]
var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4]
var i=e
var s=i.charAt(0)
var o=i.slice(-1)
n&&-1!==t.indexOf(s)&&(i=i.slice(1))
a&&-1!==t.indexOf(o)&&(i=i.slice(0,-1))
r&&(i=U(i,t,n,a,false))
return i}var M=U
function N(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
var a=t.truncate,r=t.ignore,i=t.ellipsis
var s=Object(I["a"])(e)
var o=-1
var c=-1
var u=function(){for(var e=0;e<s.length;e++){var t=s[e]
if(-1!==t.indexOf(i)){o=e
c=t.indexOf(i)}}}
if("character"===a){u()
var l=s[o]
if(l){var h=l[c-1]
h&&-1!==r.indexOf(h)&&s[o].splice(c-1,1)
if(!h){var d=null
var v=o-1
while(v>=0){d=s[v]
if(d.length>0)break
v--}if(d){var f=String(d.slice(-1));-1!==r.indexOf(f)&&(s[v].length-=1)}}}u()
l=s[o]
if(l){var p=l[c+1]
p&&-1!==r.indexOf(p)&&s[o].splice(c+1,1)
if(!p){var g=null
var _=o+1
while(_<s.length){g=s[_]
if(g.length>0)break
_++}if(g){var b=String(g[0]);-1!==r.indexOf(b)&&s[_].shift()}}}}else{u()
var m=s[o]
if(m){var x=m[c-1]
x&&-1!==r.indexOf(x.slice(-1))&&(1===x.length?s[o].splice([c-1],1):s[o][c-1]=x.slice(0,-1))
if(!x){var O=null
var y=o-1
while(y>=0){O=s[y]
if(O.length>0)break
y--}if(O){var j=String(O.slice(-1)).slice(-1)
if(-1!==r.indexOf(j)){var T=O.length-1
s[y][T]=O[T].slice(0,-1)}}}}}n&&(s=N(s,t,false))
return s}var W=N
function G(e,t){var n=new z(e,t)
if(n)return n.truncate()}var z=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
Object(i["a"])(this,e)
this._options={parent:n.parent||t.parentElement,maxLines:n.maxLines||1,position:n.position||"end",truncate:n.truncate||"character",ellipsis:n.ellipsis||"…",ignore:n.ignore||[" ",".",","],lineHeight:n.lineHeight||1.2,shouldTruncateWhenInvisible:n.shouldTruncateWhenInvisible}
if(!t)return
this._stage=t
n.parent?this._parent=this._options.parent:this._parent="auto"===this._options.maxLines?this._stage.parentElement:this._stage
this._truncatedText=this._parent.textContent
this._isTruncated=false
this.setup()}Object(s["a"])(e,[{key:"setup",value:function(){if(!this._stage)return
var e=this._options,t=e.maxLines,n=e.truncate,a=e.lineHeight
var r=Object(E["a"])(this._parent)
var i="normal"===r.lineHeight?a*parseFloat(r.fontSize):parseFloat(r.lineHeight)
var s=this._stage.firstChild.children?this._stage.firstChild:this._stage
var o=[]
var c=[]
this._nodeMap=this.getNodeMap(s)
for(var u=0;u<this._nodeMap.length;u++){var l=this._nodeMap[u]
"word"===n&&" "===l.data[l.data.length-1]&&(l.data.length-=1)
c[u]=l.data
for(var h=0;h<l.data.length;h++)o.push(u)}this._defaultStringData=Object(I["a"])(c)
this._nodeDataIndexes=Object(I["a"])(o)
this._maxHeight="auto"===t?Object(S["a"])(this._parent).height:t*i
this._maxWidth=H(this._nodeMap.map((function(e){return e.node})),this._parent)
this._maxLines="auto"===t?Math.round(this._maxHeight/i):t}},{key:"getNodeMap",value:function(e){var t=this._options,n=t.shouldTruncateWhenInvisible,a=t.truncate
var r=Array.from(e.childNodes)
var i=[]
r.forEach((function(e){if(1===e.nodeType||3===e.nodeType){var t=!!n||Object(C["a"])(e,false)
var r=e.textContent+" "
i.push({node:e,data:"word"===a?t?r.match(/.*?[\.\s\/]+?/g):"":t?e.textContent.split(""):[]})}}))
return i}},{key:"getNodeIndexes",value:function(e){var t=[]
for(var n=0;n<e.length;n++)for(var a=0;a<e[n].length;a++)t.push([n,a])
return t}},{key:"domString",value:function(e){var t=Object.keys(e)
var n=""
for(var a=0;a<t.length;a++){var r=t[a]
var i=this._nodeMap[r]
var s=e[r].join("")
var o=w()(s)
if(1===i.node.nodeType){var c=i.node.nodeName
var u=i.node.attributes
var l=""
for(var h=0;h<u.length;h++){var d=u[h]
l+=" ".concat(d.nodeName,'="').concat(d.nodeValue,'"')}n+="<".concat(c).concat(l,">").concat(o,"</").concat(c,">")}else 3===i.node.nodeType&&(n+=o)}return n}},{key:"checkFit",value:function(e){var t=this.domString(e)
var n="auto"===this._options.maxLines?this._stage:this._parent
var a=true
this._stage.innerHTML=t
Object(S["a"])(n).height-this._maxHeight>.5&&(a=false)
return a}},{key:"truncate",value:function(){var e=this._options,t=e.ellipsis,n=e.ignore,a=e.position
var r="middle"===a
var i=false
var s=false
var o=0
var c=0
var u=""
var l=null
var h=null
if(!this._stage)return
l=Object(I["a"])(this._defaultStringData)
c=r?0:this._nodeDataIndexes.length-1
while(!s){if(c<0)break
if(r){var d=this.getNodeIndexes(l)
var v=Math.floor(d.length/2)
h=d[v]
c>0&&l[h[0]].splice(h[1],1,t)}else{o=this._nodeDataIndexes[c]
if(c<this._nodeDataIndexes.length-1){l[o]=l[o].slice(0,-1)
l[o].push(t)}}s=this.checkFit(l)
if(s){for(var f=0;f<l.length;f++){var p=l[f]
u+=p.join("")}break}i=true
if(r){l[h[0]].splice(h[1],1)
c++}else{l[o]=l[o].slice(0,-1)
c--}}l=W(l,this._options,true)
if(i&&!r){u=M(u.split(t)[0],n,false,true,true)
u+=t}else if(i&&r){var g=u.split(t)
u=M(g[0],n,false,true,true)+t+M(g[1],n,true,false,true)}return{isTruncated:i,text:u,data:l,constraints:{width:this._maxWidth,height:this._maxHeight,lines:this._maxLines}}}}])
return e}()
var F=G
function R(e){var t=e.typography
return{fontFamily:t.fontFamily,lineHeight:t.lineHeight}}n.d(t,"a",(function(){return X}))
var A,J,q,B,K,P,Q
var Y={componentId:"EGevE",template:function(e){return"\n\n.EGevE_fZRY{display:block;font-family:".concat(e.fontFamily||"inherit",";overflow:hidden;word-wrap:break-word}\n\n.EGevE_uUeq{height:100%}\n\n.EGevE_exvv{display:block;max-height:0;visibility:hidden}")},istruncated:"EGevE_fZRY",auto:"EGevE_uUeq",spacer:"EGevE_exvv"}
var X=(A=Object(x["a"])("7.0.0",null,"Use TruncateText from ui-truncate-text instead."),J=Object(T["a"])(),q=Object(g["themeable"])(R,Y),B=Object(O["a"])(["shouldTruncateWhenInvisible"]),A(K=J(K=q(K=B(K=(Q=P=function(e){Object(u["a"])(t,e)
function t(e){var n
Object(i["a"])(this,t)
n=Object(o["a"])(this,Object(c["a"])(t).call(this,e))
n.update=function(){n._ref&&n.setState(n.initialState)}
n.state=n.initialState
return n}Object(s["a"])(t,[{key:"componentDidMount",value:function(){var e=this.props.children
if(e){this.checkChildren()
this._text=Object(y["a"])(e)
this.truncate()
if(0===this.props.debounce)this._resizeListener=Object(b["a"])(this._ref,this.update)
else{this._debounced=Object(_["a"])(this.update,this.props.debounce,{leading:true,trailing:true})
this._resizeListener=Object(b["a"])(this._ref,this._debounced)}}}},{key:"componentWillUnmount",value:function(){this._resizeListener&&this._resizeListener.remove()
this._debounced&&this._debounced.cancel()}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.children,r=n.onUpdate
var i=this.state,s=i.isTruncated,o=i.needsSecondRender,c=i.truncatedText
if(a){if(e!==this.props){if(e.children!==this.props.children){this.checkChildren()
this._text=Object(y["a"])(a)}this.setState(this.initialState)
return}if(o||!s&&!this._wasTruncated)this.truncate()
else{r(s,c)
this._wasTruncated=s}}}},{key:"checkChildren",value:function(){}},{key:"truncate",value:function(){if(!this.state.needsSecondRender)return
if(m["a"]){var e=F(this._stage,Object(r["a"])({},this.props,{parent:this._ref,lineHeight:this.theme.lineHeight}))
if(e){var t=this.renderChildren(e.isTruncated,e.data,e.constraints.width)
this.setState({needsSecondRender:false,isTruncated:e.isTruncated,truncatedElement:t,truncatedText:e.text})}}else this.setState({needsSecondRender:false,isTruncated:false,truncatedElement:this._text,truncatedText:this._ref.textContent})}},{key:"renderChildren",value:function(e,t,n){if(!e)return this._text
var a=[]
for(var r=0;r<t.length;r++){var i=t[r]
var s=this._text.props.children[r]
var o=i.join("")
s&&s.props?a.push(Object(j["a"])(s,s.props,o)):a.push(o)}a.push(h.a.createElement("span",{className:Y.spacer,style:{width:n||null}}))
var c=h.a.Children.map(a,(function(e){return e}))
return this._text.props?Object(j["a"])(this._text,this._text.props,c):c}},{key:"render",value:function(){var e,t=this
var n=this.state.truncatedElement
var r=this.props,i=r.maxLines,s=r.children
return h.a.createElement("span",{className:p()((e={},Object(a["a"])(e,Y.istruncated,true),Object(a["a"])(e,Y.auto,"auto"===i),e)),ref:function(e){t._ref=e}},s&&(n?null:h.a.createElement("span",{ref:function(e){t._stage=e}},Object(y["a"])(s))),n)}},{key:"initialState",get:function(){return{isTruncated:false,needsSecondRender:true,truncatedElement:null,truncatedText:null}}}])
t.displayName="TruncateText"
return t}(l["Component"]),P.propTypes={children:v.a.node.isRequired,maxLines:v.a.oneOfType([v.a.string,v.a.number]),position:v.a.oneOf(["end","middle"]),truncate:v.a.oneOf(["character","word"]),ellipsis:v.a.string,ignore:v.a.arrayOf(v.a.string),debounce:v.a.number,onUpdate:v.a.func,shouldTruncateWhenInvisible:v.a.bool},P.defaultProps={maxLines:1,ellipsis:"…",truncate:"character",position:"end",ignore:[" ",".",","],debounce:0,onUpdate:function(e,t){}},Q))||K)||K)||K)||K)}}])

//# sourceMappingURL=15-c-3059e549b0.js.map