(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[83],{"0crz":function(e,t,a){"use strict"
var r=a("ouhR")
var n=a.n(r)
var i=a("pQTu")
var l=a("m0r6")
Object(l["a"])(JSON.parse('{"ar":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"إظهار النص المقتبس","word_separator":" "}}},"cy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"dangos testun wedi’i ddyfynnu","word_separator":" "}}},"da":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"da-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"de":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"zitierten Text zeigen","word_separator":" "}}},"el":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"προβολή κειμένου που παρατίθεται"}}},"en-AU":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-AU-x-unimelb":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB-x-lbs":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB-x-ukhe":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"es":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostrar texto citado","word_separator":" "}}},"fa":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"نمایش متن نقل شده","word_separator":" "}}},"fi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"näytä lainattu teksti","word_separator":" "}}},"fr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"fr-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"he":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"מציג ציטוט","word_separator":" "}}},"ht":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afiche tèks site","word_separator":" "}}},"hu":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"idézett szöveg megjelenítése","word_separator":" "}}},"hy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"ցույց տալ մեջբերվող տեքստը","word_separator":"-"}}},"is":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Sýna ívitnaðan texta","word_separator":" "}}},"it":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostra testo citato","word_separator":" "}}},"ja":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"引用したテキストを表示","word_separator":" "}}},"ko":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"인용된 텍스트 표시","word_separator":" "}}},"mi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"whakaatu kuputuhi faahiti","word_separator":"-"}}},"nb":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nb-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"geciteerde tekst tonen","word_separator":" "}}},"nn":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis sitert tekst","word_separator":" "}}},"pl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"pokaż cytowany fragment tekstu","word_separator":" "}}},"pt":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"pt-BR":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"ru":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"показать цитированный текст","word_separator":" "}}},"sl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"prikaži citirano besedilo","word_separator":" "}}},"sv":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"sv-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"tr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"alıntılanan metni göster","word_separator":" "}}},"uk":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Показати цитований текст","word_separator":" "}}},"zh-Hans":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"显示引用的文本","word_separator":" "}}},"zh-Hant":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"顯示引用的文字","word_separator":" "}}}}'))
a("jQeR")
a("0sPK")
var o=i["default"].scoped("lib.text_helper")
var m=a("5Ky4")
var _,d,s
_="LINK-PLACEHOLDER"
d=/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))|(LINK-PLACEHOLDER)/gi
t["a"]=s={quoteClump:function(e){return"<div class='quoted_text_holder'> <a href='#' class='show_quoted_text_link'>"+Object(m["a"])(o.t("quoted_text_toggle","show quoted text"))+"</a> <div class='quoted_text' style='display: none;'> "+n.a.raw(e.join("\n"))+" </div> </div>"},formatMessage:function(e){var t,a,r,n,i,l,o,c
n=[]
i=[]
e=e.replace(d,(function(e,t){var a
i.push(e===_?_:(a=e,"http://"===a.slice(0,7)||"https://"===a.slice(0,8)||(a="http://"+a),n.push(a),"<a href='"+Object(m["a"])(a)+"'>"+Object(m["a"])(e)+"</a>"))
return _}))
e=Object(m["a"])(e)
e=e.replace(new RegExp(_,"g"),(function(e,t){return i.shift()}))
e=e.replace(/\n/g,"<br />\n")
l=[]
o=[]
c=e.split("\n")
for(t=0,a=c.length;t<a;t++){r=c[t]
if(r.match(/^(&gt;|>)/))o.push(r)
else{o.length&&l.push(s.quoteClump(o))
o=[]
l.push(r)}}o.length&&l.push(s.quoteClump(o))
return l.join("\n")},delimit:function(e){var t,a,r,n,i
if(isNaN(e))return String(e)
i=e<0?"-":""
t=Math.abs(e)
if(Infinity===t)return String(e)
a=Math.floor(t)
n=t===a?"":String(t).replace(/^\d+\./,".")
while(a>=1e3){r=String(a).replace(/\d+(\d\d\d)$/,",$1")
a=Math.floor(a/1e3)
n=r+n}return i+String(a)+n},truncateText:function(e,t){var a,r,n,i,l,m
null==t&&(t={})
r=null!=(i=t.max)?i:30
a=o.t("ellipsis","...")
m=o.t("word_separator"," ")
e=(null!=e?e:"").replace(/\s+/g,m).trim()
if(!e||e.length<=r)return e
l=0
while(true){n=e.indexOf(m,l+1)
if(n<0||n>r-a.length)break
l=n}l||(l=r-a.length)
return e.substring(0,l)+a},plainText:function(e){return e.replace(/(<([^>]+)>)/gi,"")}}},"7WS/":function(e,t,a){"use strict"
var r=a("pQTu")
var n=a("m0r6")
Object(n["a"])(JSON.parse('{"ar":{"play_media_comment_35257210":"تشغيل تعليق الوسائط.","play_media_comment_by_name_from_createdat_515b3b":"تشغيل تعليق الوسائط بواسطة %{name} من %{createdAt}."},"cy":{"play_media_comment_35257210":"Chwarae sylw ar gyfryngau.","play_media_comment_by_name_from_createdat_515b3b":"Chwarae sylw ar gyfryngau gan %{name} o %{createdAt}."},"da":{"play_media_comment_35257210":"Afspil medie kommentar.","play_media_comment_by_name_from_createdat_515b3b":"Afspil mediekommentar af %{name} fra %{createdAt}."},"da-x-k12":{"play_media_comment_35257210":"Afspil medie kommentar.","play_media_comment_by_name_from_createdat_515b3b":"Afspil mediekommentar af %{name} fra %{createdAt}."},"de":{"play_media_comment_35257210":"Medienkommentar wiedergeben","play_media_comment_by_name_from_createdat_515b3b":"Medienkommentar durch %{name} von %{createdAt} wiedergeben."},"en-AU":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"en-AU-x-unimelb":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"en-CA":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"en-GB":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"en-GB-x-lbs":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"en-GB-x-ukhe":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"es":{"play_media_comment_35257210":"Reproducir comentario de multimedia.","play_media_comment_by_name_from_createdat_515b3b":"Reproducir comentario de multimedia de %{name} desde %{createdAt}."},"fi":{"play_media_comment_35257210":"Toista mediakommentti.","play_media_comment_by_name_from_createdat_515b3b":"Toista mediakommenttia %{name} kohteesta %{createdAt}."},"fr":{"play_media_comment_35257210":"Lancer le commentaire sur média.","play_media_comment_by_name_from_createdat_515b3b":"Lancer le commentaire sur média par %{name} à partir de %{createdAt}."},"fr-CA":{"play_media_comment_35257210":"Lire le commentaire du support","play_media_comment_by_name_from_createdat_515b3b":"Lire le commentaire du support par %{name} du %{createdAt}."},"ht":{"play_media_comment_35257210":"Jwe kòmantè medya.","play_media_comment_by_name_from_createdat_515b3b":"Jwe kòmantè medya pa %{name} de %{createdAt}."},"is":{"play_media_comment_35257210":"Spila miðilsathugasemd.","play_media_comment_by_name_from_createdat_515b3b":"Spila miðilsathugasemd eftir %{name} frá %{createdAt}."},"it":{"play_media_comment_35257210":"Commento sulla riproduzione del contenuto multimediale.","play_media_comment_by_name_from_createdat_515b3b":"Commento sulla riproduzione del contenuto multimediale da parte di %{name} da %{createdAt}."},"ja":{"play_media_comment_35257210":"メディア コメントの再生。","play_media_comment_by_name_from_createdat_515b3b":"%{name}まで%{createdAt}からのメディアのコメントを再生します。"},"mi":{"play_media_comment_35257210":"Mahia ngā korero pāpāho","play_media_comment_by_name_from_createdat_515b3b":"Mahia ngā korero pāpāho ma %{name} mai te %{createdAt}."},"nb":{"play_media_comment_35257210":"Spill mediainnhold","play_media_comment_by_name_from_createdat_515b3b":"Spill mediainnhold av %{name} fra %{createdAt}."},"nb-x-k12":{"play_media_comment_35257210":"Spill mediainnhold","play_media_comment_by_name_from_createdat_515b3b":"Spill mediainnhold av %{name} fra %{createdAt}."},"nl":{"play_media_comment_35257210":"Media-opmerking afspelen","play_media_comment_by_name_from_createdat_515b3b":"Speel media-opmerking door %{name} van %{createdAt} af."},"nn":{"play_media_comment_35257210":"Spel av medieinnhald.","play_media_comment_by_name_from_createdat_515b3b":"Spel av mediekommentar frå %{name} den %{createdAt}."},"pl":{"play_media_comment_35257210":"Odtwórz komentarz multimedialny.","play_media_comment_by_name_from_createdat_515b3b":"Odtwórz komentarz multimedialny %{name} z %{createdAt}."},"pt":{"play_media_comment_35257210":"Reproduzir comentário de mídia.","play_media_comment_by_name_from_createdat_515b3b":"Reproduzir comentários de mídia %{name} de %{createdAt}."},"pt-BR":{"play_media_comment_35257210":"Reproduzir comentário em mídia.","play_media_comment_by_name_from_createdat_515b3b":"Reproduzir comentário em mídia por %{name} de %{createdAt}."},"ru":{"play_media_comment_35257210":"Воспроизведение мультимедийного комментария.","play_media_comment_by_name_from_createdat_515b3b":"Воспроизвести мультимедийный комментарии %{name} из %{createdAt}."},"sl":{"play_media_comment_35257210":"Predvajaj komentar v obliki medija.","play_media_comment_by_name_from_createdat_515b3b":"Predvajaj komentar v obliki medija %{name}, ki je bil ustvarjen ob/dne %{createdAt}."},"sv":{"play_media_comment_35257210":"Spela upp mediekommentar.","play_media_comment_by_name_from_createdat_515b3b":"Spela upp mediekommentar av %{name} från %{createdAt}."},"sv-x-k12":{"play_media_comment_35257210":"Spela upp mediekommentar.","play_media_comment_by_name_from_createdat_515b3b":"Spela upp mediekommentar av %{name} från %{createdAt}."},"zh-Hans":{"play_media_comment_35257210":"播放媒体评论。","play_media_comment_by_name_from_createdat_515b3b":"播放%{name}的来自%{createdAt}的媒体评论。"},"zh-Hant":{"play_media_comment_35257210":"播放媒體評論。","play_media_comment_by_name_from_createdat_515b3b":"播放%{name}於%{createdAt}創建的媒體評論。"}}'))
a("jQeR")
a("0sPK")
var i=r["default"].scoped("mediaCommentThumbnail")
var l=a("GLiE")
var o=a.n(l)
var m=a("5Ky4")
var _=a("ouhR")
var d=a.n(_)
var s=a("hX7l")
const c={normal:{width:140,height:100},small:{width:70,height:50}}
function p(e,t,a){if(!INST.kalturaSettings)return console.log("Kaltura has not been enabled for this account")
let r,n
const l=d()(e)
try{const e=document.createElement("a")
e.href=l.attr("href")
n=e}catch(e){}if(n&&Object(s["a"])(n.search).no_preview)return
const o=c[t]||c.normal
const _=l.data("media_comment_id")||d.a.trim(l.find(".media_comment_id:first").text())||(r=l.attr("id"))&&r.match(/^media_comment_/)&&r.substring(14)||d.a.trim(l.parent().find(".media_comment_id:first").text())
const p=l.data("author")
const u=l.data("created_at")
let h
h=p&&u?i.t("Play media comment by %{name} from %{createdAt}.",{name:p,createdAt:u}):i.t("Play media comment.")
if(_){const e="https://".concat(INST.kalturaSettings.resource_domain)
const r="".concat(e,"/p/").concat(INST.kalturaSettings.partner_id,"/thumbnail/entry_id/").concat(_,"/width/")+"".concat(o.width,"/height/").concat(o.height,"/bgcolor/000000/type/2/vid_sec/5")
const n=d()("<span\n        style='background-image: url(".concat(Object(m["a"])(r),");'\n        class='media_comment_thumbnail media_comment_thumbnail-").concat(Object(m["a"])(t),"'\n      >\n        <span class='media_comment_thumbnail_play_button'>\n          <span class='screenreader-only'>\n            ").concat(Object(m["a"])(h),"\n          </span>\n        </span>\n      </span>"))
const i=l.closest("p")
i.attr("title")||i.attr("title",Object(m["a"])(h))
let s=l
if(a){s=l.clone().empty().removeClass("instructure_file_link")
const e=l.parent(".instructure_file_link_holder")
e.length?s.appendTo(e):l.after(s)}else l.empty()
s.data("download",s.attr("href")).prop("href","#").addClass("instructure_inline_media_comment").append(n).css({backgroundImage:"",padding:0})}}d.a.fn.mediaCommentThumbnail=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"normal"
let t=arguments.length>1?arguments[1]:void 0
return this.each((function(){o.a.defer(p,this,e,t)}))}},OShF:function(e,t,a){"use strict"
var r=a("ouhR")
var n=a.n(r)
var i=a("5Ky4")
a("JI1W")
n.a.fn.fillTemplateData=function(e){if(this.length&&e){e.iterator&&this.find("*").andSelf().each((function(){const t=n()(this)
n.a.each(["name","id","class"],(a,r)=>{t.attr(r)&&t.attr(r,t.attr(r).replace(/-iterator-/,e.iterator))})}))
e.id&&this.attr("id",e.id)
let r=false
if(e.data)for(var t in e.data){if(e.except&&-1!=n.a.inArray(t,e.except))continue
e.data[t]&&e.dataValues&&-1!=n.a.inArray(t,e.dataValues)&&this.data(t,e.data[t].toString())
const l=this.find("."+t)
var a=e.avoid||""
l.each((function(){const l=n()(this)
if(l.length>0&&0===l.closest(a).length){"undefined"!==typeof e.data[t]&&null!==e.data[t]||(e.data[t]="")
if(e.htmlValues&&-1!=n.a.inArray(t,e.htmlValues)){l.html(n.a.raw(e.data[t].toString()))
if(l.hasClass("user_content")){r=true
l.removeClass("enhanced")
l.data("unenhanced_content_html",e.data[t].toString())}}else if("INPUT"==l[0].tagName.toUpperCase())l.val(e.data[t])
else try{const a=e.data[t].toString()
l.html(Object(i["a"])(a))}catch(e){}}}))}e.hrefValues&&e.data&&this.find("a,span[rel]").each((function(){let t,a,r,i=n()(this)
for(const l in e.hrefValues){if(!e.hrefValues.hasOwnProperty(l))continue
const o=e.hrefValues[l]
if(t=i.attr("href")){const a=n.a.replaceTags(t,o,encodeURIComponent(e.data[o]))
const r=i.text()===i.html()?i.text():null
if(t!==a){i.attr("href",a)
r&&i.text(r)}}(a=i.attr("rel"))&&i.attr("rel",n.a.replaceTags(a,o,e.data[o]));(r=i.attr("name"))&&i.attr("name",n.a.replaceTags(r,o,e.data[o]))}}))
r&&n()(document).triggerHandler("user_content_change")}return this}
n.a.fn.fillTemplateData.defaults={htmlValues:null,hrefValues:null}
n.a.fn.getTemplateData=function(e){if(!this.length||!e)return{}
var t,a={}
if(e.textValues){const t=this
e.textValues.forEach(e=>{const i=t.find("."+e.replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
r=n.a.trim(i.text())
"&nbsp;"===i.html()&&(r="")
1===r.length&&160===r.charCodeAt(0)&&(r="")
a[e]=r})}if(e.dataValues)for(t in e.dataValues){var r=this.data(e.dataValues[t])
r&&(a[e.dataValues[t]]=r)}if(e.htmlValues)for(t in e.htmlValues){const i=this.find("."+e.htmlValues[t].replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
r=null
r=i.hasClass("user_content")&&i.data("unenhanced_content_html")?i.data("unenhanced_content_html"):n.a.trim(i.html())
a[e.htmlValues[t]]=r}return a}
n.a.fn.getTemplateValue=function(e,t){const a=n.a.extend({},t,{textValues:[e]})
return this.getTemplateData(a)[e]}},cuKi:function(e,t,a){"use strict"
a.d(t,"a",(function(){return i}))
var r=a("GLiE")
var n=a.n(r)
function i(e){return n()(e).reduce((e,t,a)=>{let r=a.split("][")
let i=r.length-1
if(/\[/.test(r[0])&&/\]$/.test(r[i])){r[i]=r[i].replace(/\]$/,"")
r=r.shift().split("[").concat(r)
i=r.length-1}else i=0
if(i){let n=0
let l=e
while(n<=i){a=""===r[n]?l.length:r[n]
l=l[a]=n<i?l[a]||(r[n+1]&&isNaN(r[n+1])?{}:[]):t
n++}}else n.a.isArray(e[a])?e[a].push(t):null!=e[a]?e[a]=[e[a],t]:e[a]=t
return e},{})}},hX7l:function(e,t,a){"use strict"
a.d(t,"a",(function(){return l}))
var r=a("ODXe")
var n=a("cuKi")
const i={true:true,false:false,null:null}
function l(e,t){if(!e||"boolean"===typeof e){const e=window.location.search
if(!e)return{}
return l(e,...arguments)}const a={}
e.replace(/\+/g," ").split("&").forEach(e=>{let n=e.split("="),l=Object(r["a"])(n,2),o=l[0],m=l[1]
o=decodeURIComponent(o)
m=decodeURIComponent(m)
t&&(m=m&&!isNaN(m)?+m:"undefined"===m?void 0:void 0!==i[m]?i[m]:m)
a[o]=m})
return Object(n["a"])(a)}}}])

//# sourceMappingURL=83-c-b1bec9d4a1.js.map