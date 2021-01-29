(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[143],{"7LJr":function(e,t,i){"use strict"
var o=i("ouhR")
var s=i.n(o)
s.a.fn.loadingImg=function(e){if(!this||0===this.length)return this
const t=this.filter(":first")
let i
if("hide"===e||"remove"===e){t.children(".loading_image").remove()
i=t.data("loading_images")||[]
i.forEach(e=>{e&&e.remove()})
t.data("loading_images",null)
return this}if("remove_once"===e){t.children(".loading_image").remove()
i=t.data("loading_images")||[]
const e=i.pop()
e&&e.remove()
t.data("loading_images",i)
return this}"register_image"==e&&3==arguments.length&&(s.a.fn.loadingImg.image_files[arguments[1]]=arguments[2])
e=s.a.extend({},s.a.fn.loadingImg.defaults,e)
let o=s.a.fn.loadingImg.image_files.normal
e.image_size&&s.a.fn.loadingImg.image_files[e.image_size]&&(o=s.a.fn.loadingImg.image_files[e.image_size])
e.paddingTop&&(e.vertical=e.paddingTop)
let _=0
if(e.vertical)if("top"==e.vertical);else if("bottom"==e.vertical)_=t.outerHeight()
else if("middle"==e.vertical)_=t.outerHeight()/2-o.height/2
else{_=parseInt(e.vertical,10)
isNaN(_)&&(_=0)}let n=0
if(e.horizontal)if("left"==e.horizontal);else if("right"==e.horizontal)n=t.outerWidth()-o.width
else if("middle"==e.horizontal)n=t.outerWidth()/2-o.width/2
else{n=parseInt(e.horizontal,10)
isNaN(n)&&(n=0)}const a=t.zIndex()+1
const l=s()(document.createElement("div")).addClass("loading_image_holder")
const d=s()(document.createElement("img")).attr("src",o.url)
l.append(d)
i=t.data("loading_images")||[]
i.push(l)
t.data("loading_images",i)
if(t.css("position")&&"static"!=t.css("position")){l.css({zIndex:a,position:"absolute",top:_,left:n})
t.append(l)}else{const i=t.offset()
let o=i.top,d=i.left
e.vertical&&(o+=_)
e.horizontal&&(d+=n)
l.css({zIndex:a,position:"absolute",top:o,left:d})
s()("body").append(l)}return s()(this)}
s.a.fn.loadingImg.defaults={paddingTop:0,image_size:"normal",vertical:0,horizontal:0}
s.a.fn.loadingImg.image_files={normal:{url:"/images/ajax-loader.gif",width:32,height:32},small:{url:"/images/ajax-loader-small.gif",width:16,height:16}}
s.a.fn.loadingImage=s.a.fn.loadingImg},KUiY:function(e,t,i){"use strict"
var o=i("An8g")
var s=i("GLiE")
var _=i.n(s)
var n=i("HaSH")
var a=i("Ewk/")
var l=i("UWxV")
var d=i("q1tI")
var r=i.n(d)
var u=i("lr1R")
var m=i("VTJ5")
var c=i("5JRF")
function p(e){return Object(o["a"])(u["a"],{startAt:"medium",vAlign:"middle",rowSpacing:"none",colSpacing:"none"},void 0,Object(o["a"])(u["a"].Row,{vAlign:"middle",rowSpacing:"none"},void 0,Object(o["a"])(u["a"].Col,{hAlign:"center",textAlign:"center"},void 0,Object(o["a"])(m["a"],{renderTitle:l["a"].t("Duplicating Module")}))),Object(o["a"])(u["a"].Row,{},void 0,Object(o["a"])(u["a"].Col,{hAlign:"center",textAlign:"center"},void 0,Object(o["a"])(c["a"],{},void 0,l["a"].t("Duplicating Module...")))))}var h=i("i8i4")
var f=i.n(h)
var b=i("bmrg")
var g=i("FIFq")
var y=i.n(g)
var v=i("pQTu")
var k=i("m0r6")
Object(k["a"])(JSON.parse('{"ar":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"لا يمكن إلغاء النشر في حال وجود عمليات إرسال لطالب","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"لا يمكن إلغاء نشر %{item_name} في حال وجود عمليات إرسال لطالب","publishing_is_disabled_for_this_item_efa7803f":"ميزة النشر لهذا العنصر معطلة","publishing_item_name_is_disabled_8207a9e7":"ميزة نشر %{item_name} معطلة"},"cy":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Does dim modd dad-gyhoeddi os oes gwaith wedi’i gyflwyno gan fyfyrwyr","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Does dim modd dad-gyhoeddi %{item_name} os oes gwaith wedi’i gyflwyno gan fyfyrwyr","publishing_is_disabled_for_this_item_efa7803f":"Mae cyhoeddi wedi’i analluogi ar gyfer yr eitem hon","publishing_item_name_is_disabled_8207a9e7":"Mae cyhoeddi %{item_name} wedi\'i analluogi"},"da":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Kan ikke annullere offentliggørelsen, hvis der findes afleveringer fra studerende","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Kan ikke annullere offentliggørelse af %{item_name}, hvis det indeholder afleveringer fra studerende","publishing_is_disabled_for_this_item_efa7803f":"Offentliggørelse er deaktiveret for dette element","publishing_item_name_is_disabled_8207a9e7":"Offentliggørelse af %{item_name} er deaktiveret"},"da-x-k12":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Kan ikke annullere offentliggørelsen, hvis der findes afleveringer fra elever","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Kan ikke annullere offentliggørelse af %{item_name}, hvis det indeholder afleveringer fra elever","publishing_is_disabled_for_this_item_efa7803f":"Offentliggørelse er deaktiveret for dette element","publishing_item_name_is_disabled_8207a9e7":"Offentliggørelse af %{item_name} er deaktiveret"},"de":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Veröffentlichung kann nicht rückgängig gemacht werden, wenn es Abgaben von Studenten gibt.","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Veröffentlichung von %{item_name} kann nicht rückgängig gemacht werden, wenn es Abgaben von Studenten gibt.","publishing_is_disabled_for_this_item_efa7803f":"Die Veröffentlichung ist für dieses Element deaktiviert.","publishing_item_name_is_disabled_8207a9e7":"Die Veröffentlichung von %{item_name} ist deaktiviert."},"el":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Δεν γίνεται να αναιρεθεί η δημοσίευση αν υπάρχουν υποβολές σπουδαστών","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Δεν γίνεται να απενεργοποιηθεί η δημοσίευση %{item_name} αν υπάρχουν υποβολές σπουδαστών","publishing_is_disabled_for_this_item_efa7803f":"Η δημοσίευση έχει απενεργοποιηθεί για αυτό το στοιχείο","publishing_item_name_is_disabled_8207a9e7":"Η δημοσίευση του %{item_name} έχει απενεργοποιηθεί"},"en-AU":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Can\'t unpublish if there are student submissions","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Can\'t unpublish %{item_name} if there are student submissions","publishing_is_disabled_for_this_item_efa7803f":"Publishing is disabled for this item.","publishing_item_name_is_disabled_8207a9e7":"Publishing %{item_name} is disabled."},"en-AU-x-unimelb":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Can\'t unpublish if there are student submissions","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Can\'t unpublish %{item_name} if there are student submissions","publishing_is_disabled_for_this_item_efa7803f":"Publishing is disabled for this item.","publishing_item_name_is_disabled_8207a9e7":"Publishing %{item_name} is disabled."},"en-CA":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Can\'t unpublish if there are student submissions","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Can\'t unpublish %{item_name} if there are student submissions","publishing_is_disabled_for_this_item_efa7803f":"Publishing is disabled for this item","publishing_item_name_is_disabled_8207a9e7":"Publishing %{item_name} is disabled"},"en-GB":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Cannot unpublish if there are student submissions","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Cannot unpublish %{item_name} if there are student submissions","publishing_is_disabled_for_this_item_efa7803f":"Publishing is disabled for this item","publishing_item_name_is_disabled_8207a9e7":"Publishing %{item_name} is disabled"},"en-GB-x-lbs":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Cannot unpublish if there are student submissions","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Cannot unpublish %{item_name} if there are student submissions","publishing_is_disabled_for_this_item_efa7803f":"Publishing is disabled for this item","publishing_item_name_is_disabled_8207a9e7":"Publishing %{item_name} is disabled"},"en-GB-x-ukhe":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Cannot unpublish if there are student submissions","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Cannot unpublish %{item_name} if there are student submissions","publishing_is_disabled_for_this_item_efa7803f":"Publishing is disabled for this item","publishing_item_name_is_disabled_8207a9e7":"Publishing %{item_name} is disabled"},"es":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"No se puede cancelar la publicación si hay entregas de estudiantes","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"No se puede cancelar la publicación de %{item_name} si hay entregas de estudiantes","publishing_is_disabled_for_this_item_efa7803f":"Este item tiene desactivada la función de publicación","publishing_item_name_is_disabled_8207a9e7":"La función de publicación está desactivada para %{item_name}"},"fa":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"اگر موردهای ارسالی دانشجو وجود داشته باشد، نمی توان انتشار را لغو کرد","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"اگر موردهای ارسالی دانشجو وجود داشته باشد، نمی توان انتشار %{item_name} را لغو کرد","publishing_is_disabled_for_this_item_efa7803f":"انتشار برای این مورد غیر فعال شده است","publishing_item_name_is_disabled_8207a9e7":"انتشار %{item_name} غیر فعال شده است"},"fi":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Julkaisua ei voida peruuttaa, jos on opiskelijalähetyksiä.","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Julkaisua %{item_name} ei voida peruuttaa, jos on opiskelijalähetyksiä.","publishing_is_disabled_for_this_item_efa7803f":"Julkaisu on poistettu käytöstä tälle kohteelle","publishing_item_name_is_disabled_8207a9e7":"Julkaisu %{item_name} pois käytöstä"},"fr":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Ne peut être retiré de la publication si des étudiants ont déposé leur candidature","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Ne peut retirer %{item_name} de la publication si des étudiants ont déposé leur candidature","publishing_is_disabled_for_this_item_efa7803f":"La publication est désactivée pour cet élément.","publishing_item_name_is_disabled_8207a9e7":"La publication de %{item_name} est désactivée"},"fr-CA":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Ne peut être retiré de la publication si des étudiants ont envois","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Ne peut retirer %{item_name} de la publication si des étudiants ont envois","publishing_is_disabled_for_this_item_efa7803f":"La publication est désactivée pour cet élément.","publishing_item_name_is_disabled_8207a9e7":"La publication de %{item_name} est désactivée"},"he":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"אין אפשרות לבטל פרסום אם עדיין יש הגשות תלמידים","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"אין אפשרות לבטל את הפרסום %{item_name} אם היו הגשות תלמידים","publishing_is_disabled_for_this_item_efa7803f":"הפרסום לפריט זה אינו פעיל","publishing_item_name_is_disabled_8207a9e7":"הפרסום של %{item_name} אינו פעיל"},"ht":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Ou paka pa pibliye si gen soumisyon elèv","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Ou paka pa pibliye %{item_name} si gen soumisyon elèv","publishing_is_disabled_for_this_item_efa7803f":"Piblikasyon dezaktive pou eleman sa a","publishing_item_name_is_disabled_8207a9e7":"Piblikasyon %{item_name} dezaktive"},"hu":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Nem lehet visszavonni a publikálást, ha már vannak hallgatói munkák beadva","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Nem lehet visszavonni %{item_name} publikálását, ha már vannak hallgatói munkák beadva","publishing_is_disabled_for_this_item_efa7803f":"Ennél az elemnél a publikálás nem lehetséges","publishing_item_name_is_disabled_8207a9e7":"%{item_name} publikálása nem lehetséges"},"hy":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Հնարավոր չէ չեղարկել հրապարակումը, եթե առկա են ունկնդիրների ներկայացրած աշխատանքները:","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Հնարավոր չէ չեղարկել %{item_name} հրապարակումը, եթե առկա են ունկնդիրների ներկայացրած աշխատանքները","publishing_is_disabled_for_this_item_efa7803f":"Այս տարրի հրապարակման հնարավորությունն անջատված է","publishing_item_name_is_disabled_8207a9e7":"%{item_name}-ի հրապարակման հնարավորությունն անջատված է"},"is":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Ekki hægt að fela ef skil nemenda eru til staðar","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Ekki hægt að fela %{item_name} ef skil nemenda eru til staðar","publishing_is_disabled_for_this_item_efa7803f":"Birting er aftengd fyrir þetta atriði","publishing_item_name_is_disabled_8207a9e7":"Birting á %{item_name} er óvirk"},"it":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Impossibile annullare la pubblicazione se ci sono consegne degli studenti","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Impossibile annullare la pubblicazione %{item_name} se ci sono consegne degli studenti","publishing_is_disabled_for_this_item_efa7803f":"La pubblicazione è disattivata per questa elemento","publishing_item_name_is_disabled_8207a9e7":"La pubblicazione di %{item_name} è disattivata"},"ja":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"受講生の提出物がある場合は、未公開にできません","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"受講生の提出物がある場合は、%{item_name} を未公開にできません","publishing_is_disabled_for_this_item_efa7803f":"このアイテムでは公開は無効になっています","publishing_item_name_is_disabled_8207a9e7":"%{item_name} は公開は無効になっています"},"mi":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Kāore e taea te tāngia ki te reira e tāpaetanga ākonga","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Kāore e taea te tāngia %{item_name} ki te reira e tāpaetanga ākonga","publishing_is_disabled_for_this_item_efa7803f":"monokia whakaputa mō tēnei tūemi","publishing_item_name_is_disabled_8207a9e7":"Whakaputa %{item_name} he monokia"},"nb":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Kan ikke avpublisere om det er student innleveringer","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Kan ikke avpublisere %{item_name} hvis det er innleveringer fra student","publishing_is_disabled_for_this_item_efa7803f":"Publisering er deaktivert for dette objektet","publishing_item_name_is_disabled_8207a9e7":"Publisering %{item_name} er deaktivert"},"nb-x-k12":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Kan ikke avpublisere om det er elev innleveringer","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Kan ikke avpublisere %{item_name} hvis det er innleveringer fra elev","publishing_is_disabled_for_this_item_efa7803f":"Publisering er deaktivert for dette objektet","publishing_item_name_is_disabled_8207a9e7":"Publisering %{item_name} er deaktivert"},"nl":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Kan publicatie niet ongedaan maken als er inzendingen van cursisten zijn","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Kan publicatie %{item_name} niet ongedaan maken als er inzendingen van cursisten zijn","publishing_is_disabled_for_this_item_efa7803f":"Publicatie van dit item is uitgeschakeld","publishing_item_name_is_disabled_8207a9e7":"Publicatie van %{item_name} is uitgeschakeld"},"nn":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Kan ikkje fjerne publisering dersom det finst studentinnleveringar","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Kan ikkje fjerne publisering av %{item_name} dersom det finst studentinnleveringar","publishing_is_disabled_for_this_item_efa7803f":"Publisering er slått av for dette elementet","publishing_item_name_is_disabled_8207a9e7":"Publisering %{item_name} deaktivert"},"pl":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Nie można cofnąć publikacji jeśli są zgłoszenia uczniów.","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Nie można cofnąć publikacji %{item_name} jeśli są zgłoszenia uczniów.","publishing_is_disabled_for_this_item_efa7803f":"Publikowanie jest wyłączone w przypadku tego elementu","publishing_item_name_is_disabled_8207a9e7":"Publikowanie %{item_name} jest wyłączone"},"pt":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Não pode apagar a publicação se existirem entregas dos alunos","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Não pode apagar a publicação %{item_name} se existirem entregas dos alunos","publishing_is_disabled_for_this_item_efa7803f":"Publicação desativada para este item","publishing_item_name_is_disabled_8207a9e7":"A publicação %{item_name} está desativada"},"pt-BR":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Não é possível remover publicação se houver envios dos alunos","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Não é possível remover a publicação de %{item_name} se houver trabalhos submetidos pelos alunos","publishing_is_disabled_for_this_item_efa7803f":"Publicação está desativada para esse item","publishing_item_name_is_disabled_8207a9e7":"Publicação de %{item_name} está desativada"},"ru":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Невозможно отменить публикацию, если есть отправленные студентами задания","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Невозможно отменить публикацию %{item_name}, если есть отправленные студентами задания","publishing_is_disabled_for_this_item_efa7803f":"Возможность публикации для этого элемента отключена","publishing_item_name_is_disabled_8207a9e7":"Возможность публикации для %{item_name} отключена"},"sl":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Neobjava ni mogoča, če obstajajo oddaje študentov.","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Neobjava %{item_name} ni mogoča, če obstajajo oddaje študentov.","publishing_is_disabled_for_this_item_efa7803f":"Za ta element je objavljanje onemogočeno.","publishing_item_name_is_disabled_8207a9e7":"Objavljanje elementa %{item_name} je onemogočeno."},"sv":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Det går inte att avpublicera om det finns studentinlämningar","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Det går inte att avpublicera %{item_name} om det finns studentinlämningar","publishing_is_disabled_for_this_item_efa7803f":"Publicering har inaktiverats för detta objekt","publishing_item_name_is_disabled_8207a9e7":"Publicering %{item_name} har inaktiverats"},"sv-x-k12":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Det går inte att avpublicera om det finns elevinlämningar","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Det går inte att avpublicera %{item_name} om det finns elevinlämningar","publishing_is_disabled_for_this_item_efa7803f":"Publicering har inaktiverats för detta objekt","publishing_item_name_is_disabled_8207a9e7":"Publicering %{item_name} har inaktiverats"},"tr":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Öğrenci gönderileri varsa yayından kaldırılamaz","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Öğrenci gönderileri varsa %{item_name} yayından kaldırılamaz","publishing_is_disabled_for_this_item_efa7803f":"Yayınlama bu öğe için pasif"},"uk":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Ви не можете скасувати публікацію, якщо присутні студентські роботи","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Неможливо скасувати публікацію %{item_name} якщо присутні студентські матеріали","publishing_is_disabled_for_this_item_efa7803f":"Публікації відключено для цього предмету","publishing_item_name_is_disabled_8207a9e7":"Публікація %{item_name} відключена."},"zh-Hans":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"如果有学生提交，则无法取消发布。","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"如果有学生提交，则无法取消发布的 %{item_name}。","publishing_is_disabled_for_this_item_efa7803f":"发布为此项目禁用","publishing_item_name_is_disabled_8207a9e7":"禁止发布%{item_name}"},"zh-Hant":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"如有學生提交文件，則無法取消發佈。","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"如果有學生提交件，則無法取消發佈 %{item_name}","publishing_is_disabled_for_this_item_efa7803f":"已停用此項目的發佈","publishing_item_name_is_disabled_8207a9e7":"已停用 %{item_name} 的發佈"}}'))
i("jQeR")
i("0sPK")
var x=v["default"].scoped("publishableModuleItem")
class w extends g["Model"]{static initClass(){this.prototype.defaults={module_type:null,course_id:null,module_id:null,published:true,publishable:true,unpublishable:true,module_item_name:null}
this.prototype.urls={generic(){return"".concat(this.baseUrl(),"/modules/").concat(this.get("module_id"),"/items/").concat(this.get("module_item_id"))},module(){return"".concat(this.baseUrl(),"/modules/").concat(this.get("id"))}}
this.prototype.toJSONs={generic(){return{module_item:{published:this.get("published")}}},module(){return{module:{published:this.get("published")}}}}
this.prototype.disabledMessages={generic(){return this.get("module_item_name")?x.t("Publishing %{item_name} is disabled",{item_name:this.get("module_item_name")}):x.t("Publishing is disabled for this item")},assignment(){return this.get("module_item_name")?x.t("Can't unpublish %{item_name} if there are student submissions",{item_name:this.get("module_item_name")}):x.t("Can't unpublish if there are student submissions")},quiz(){return this.get("module_item_name")?x.t("Can't unpublish %{item_name} if there are student submissions",{item_name:this.get("module_item_name")}):x.t("Can't unpublish if there are student submissions")},discussion_topic(){return this.get("module_item_name")?x.t("Can't unpublish %{item_name} if there are student submissions",{item_name:this.get("module_item_name")}):x.t("Can't unpublish if there are student submissions")}}}branch(e){return(this[e][this.get("module_type")]||this[e].generic).call(this)}url(){return this.branch("urls")}toJSON(){return this.branch("toJSONs")}disabledMessage(){return this.branch("disabledMessages")}baseUrl(){return"/api/v1/courses/".concat(this.get("course_id"))}publish(){return this.save("published",true)}unpublish(){return this.save("published",false)}}w.initClass()
var q=i("kX4z")
var M=i("4bdt")
const z=y.a.Model.extend({defaults:{is_master_course_master_content:false,is_master_course_child_content:false,restricted_by_master_course:false}})
var j=z
var E=i("lHb5")
var C=i("u7Gu")
Object(k["a"])(JSON.parse('{"ar":{"collapsed_510aa02a":"تم الطي","complete_all_items_e1779257":"إكمال جميع العناصر","complete_one_item_90e5fb03":"إكمال عنصر واحد","completed_19711ce7":"مكتمل","context_modulespublic":{"buttons":{"add":"إضافة وحدة","add_item":"إضافة عنصر","update":"تحديث الوحدة"},"confirm":{"delete":"هل ترغب بالتأكيد في حذف هذه الوحدة؟","delete_item":"هل ترغب بالتأكيد في إزالة هذا العنصر من الوحدة؟"},"errors":{"reorder":"فشل إعادة الترتيب، الرجاء المحاولة مرة أخرى."},"optgroup":{"assignments":"المهام","discussion_topics":"النقاشات","external_tools":"الأدوات الخارجية","external_urls":"عناوين URL الخارجية","files":"الملفات","quizzes":"اختبارات موجزة"},"points_possible_short":"%{points} نقاط","titles":{"add":"إضافة وحدة","add_item":"إضافة عنصر إلى %{module}","add_prerequisite":"إضافة متطلب أساسي إلى %{module}","edit":"تحرير إعدادات الوحدة","edit_item":"تحرير تفاصيل العنصر"}},"delete_prerequisite_title_19741947":"حذف المتطلب الأساسي %{title}","delete_requirement_item_type_d7453a69":"حذف المتطلب %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"تكرار الوحدة النمطية، قد يستغرق هذا الأمر بعض الوقت","edit_mastery_paths_for_title_3c0a15e1":"تحرير مسارات الإتقان لـ %{title}","error_duplicating_module_4b023042":"حدث خطأ أثناء تكرار الوحدة النمطية","error_rendering_duplicated_module_db821097":"حدث خطأ أثناء عرض الوحدة النمطية المكررة","expanded_f4493860":"تم التوسيع","mastery_paths_cc4096c2":"مسارات الإتقان","module_item_module_item_name_was_successfully_dele_8626d846":"تم حذف عنصر الوحدة %{module_item_name} بنجاح.","module_module_name_was_successfully_deleted_fc9e9d47":"تم حذف الوحدة %{module_name} بنجاح.","modules_c4325335":"الوحدات","move_contents_into_f3e4fd9d":"نقل المحتويات إلى","move_module_90e6927e":"نقل الوحدة","move_module_item_f525d6c8":"نقل عنصر الوحدة","multiple_due_dates_283dd861":"تواريخ استحقاق متعددة","must_contribute_to_the_page_fff632c":"يجب المساهمة في الصفحة","must_mark_as_done_91cff799":"يجب وضع علامة \\"تم\\"","must_score_at_least_a_score_3b4f813d":"يجب الحصول على %{score} على الأقل","must_submit_the_assignment_782d025":"يجب إرسال المهمة","must_view_the_page_67eec19e":"يجب عرض الصفحة","not_completed_d70acea3":"غير مكتمل","not_yet_completed_345a0bca":"لم يكتمل بعد","pages_e5414c2c":"الصفحات","prerequisites_list_62d66d12":"المتطلبات الأساسية: %{list}","released_by_mastery_path_path_b562d741":"تم إصداره بواسطة مسار الإجادة: %{path}","select_prerequisite_module_57894963":"تحديد وحدة أساسية","some_module_items_could_not_be_published_e4be3c0":"تعذر نشر بعض عناصر الوحدة النمطية","this_assignment_is_overdue_a44bea3b":"هذه المهمة متأخرة","title_is_required_437f9993":"العنوان مطلوب","you_scored_a_score_a5dd5561":"حصلت على %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"لم يتم بعد تقييم المهمة التي أرسلتها"},"cy":{"collapsed_510aa02a":"Wedi crebachu","complete_all_items_e1779257":"Cwblhau Pob Eitem","complete_one_item_90e5fb03":"Cwblhau Un Eitem","completed_19711ce7":"Wedi Cwblhau","context_modulespublic":{"buttons":{"add":"Ychwanegu Modiwl","add_item":"Ychwanegu Eitem","update":"Diweddaru Modiwl"},"confirm":{"delete":"Ydych chi’n siŵr eich bod am ddileu’r modiwl hwn?","delete_item":"Ydych chi’n siŵr eich bod am dynnu’r eitem hon o’r modiwl?"},"errors":{"reorder":"Wedi methu newid y drefn, rhowch gynnig arall arni."},"optgroup":{"assignments":"Aseiniadau","discussion_topics":"Trafodaethau","external_tools":"Adnoddau Allanol","external_urls":"URLs Allanol","files":"Ffeiliau","quizzes":"Cwisiau"},"points_possible_short":"%{points} pwynt","titles":{"add":"Ychwanegu Modiwl","add_item":"Ychwanegu Eitem at %{module}","add_prerequisite":"Ychwanegu rhagofyniad at %{module}","edit":"Golygu Gosodiadau Modiwl","edit_item":"Golygu Manylion Eitem"}},"delete_prerequisite_title_19741947":"Dileu rhagofyniad %{title}","delete_requirement_item_type_d7453a69":"Dileu gofyniad %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Wrthi’n dyblygu modiwl, gall hyn gymryd bach o amser","edit_mastery_paths_for_title_3c0a15e1":"Golygu Llwybrau Meistroli ar gyfer %{title}","error_duplicating_module_4b023042":"Gwall wrth ddyblygu modiwl","error_rendering_duplicated_module_db821097":"Gwall wrth rendro modiwl wedi’i ddyblygu","expanded_f4493860":"Wedi ehangu","mastery_paths_cc4096c2":"Llwybrau Meistroli","module_item_module_item_name_was_successfully_dele_8626d846":"Wedi llwyddo i ddileu eitem %{module_item_name} yn y modiwl.","module_module_name_was_successfully_deleted_fc9e9d47":"Wedi llwyddo i ddileu modiwl %{module_name}.","modules_c4325335":"Modiwlau","move_contents_into_f3e4fd9d":"Symud Cynnwys i","move_module_90e6927e":"Symud Modiwl","move_module_item_f525d6c8":"Symud Modiwl/Eitem","multiple_due_dates_283dd861":"Mwy nag un dyddiad erbyn","must_contribute_to_the_page_fff632c":"Yn gorfod cyfrannu at y dudalen","must_mark_as_done_91cff799":"Rhaid marcio eu bod wedi’u gwneud","must_score_at_least_a_score_3b4f813d":"Yn gorfod sgorio o leiaf %{score}","must_submit_the_assignment_782d025":"Yn gorfod cyflwyno’r aseiniad","must_view_the_page_67eec19e":"Rhaid gweld y dudalen","not_completed_d70acea3":"Heb gwblhau","not_yet_completed_345a0bca":"Heb gwblhau eto","pages_e5414c2c":"Tudalennau","prerequisites_list_62d66d12":"Rhagofynion: %{list}","released_by_mastery_path_path_b562d741":"Rhyddhawyd gan y Llwybr Meistroli: %{path}","select_prerequisite_module_57894963":"Dewiswch fodiwl rhagofynnol","some_module_items_could_not_be_published_e4be3c0":"Doedd dim modd cyhoeddi rhai eitemau modiwlau","this_assignment_is_overdue_a44bea3b":"Mae’r aseiniad hwn yn hwyr","title_is_required_437f9993":"Mae’n rhaid rhoi teitl","you_scored_a_score_a5dd5561":"Rydych chi wedi cael sgôr o %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Dydy’ch cyflwyniad ddim wedi cael ei raddio eto"},"da":{"collapsed_510aa02a":"Skjult","complete_all_items_e1779257":"Fuldfør alle elementer","complete_one_item_90e5fb03":"Fuldfør et element","completed_19711ce7":"Fuldført","context_modulespublic":{"buttons":{"add":"Tilføj modul","add_item":"Tilføj element","update":"Opdater modul"},"confirm":{"delete":"Er du sikker på, at du vil slette modulet?","delete_item":"Er du sikker på, at du vil slette dette element fra modulet?"},"errors":{"reorder":"Omorganisering mislykkedes, prøv igen."},"optgroup":{"assignments":"Opgaver","discussion_topics":"Diskussioner","external_tools":"Eksterne værktøjer","external_urls":"Eksterne URL\'er","files":"Filer","quizzes":"Test"},"points_possible_short":"%{points} point","titles":{"add":"Tilføj modul","add_item":"Føj element til %{module}","add_prerequisite":"Føj forudsætning til %{module}","edit":"Rediger modulindstillinger","edit_item":"Rediger elementoplysninger"}},"delete_prerequisite_title_19741947":"Slet forudsætning %{title}","delete_requirement_item_type_d7453a69":"Slet krav %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Duplikerer modul, dette kan tage lidt tid","edit_mastery_paths_for_title_3c0a15e1":"Rediger læringsstier for %{title}","error_duplicating_module_4b023042":"Fejl ved duplikering af modul","error_rendering_duplicated_module_db821097":"Fejl ved gengivelse af duplikeret modul","expanded_f4493860":"Udvidet","mastery_paths_cc4096c2":"Læringsstier","module_item_module_item_name_was_successfully_dele_8626d846":"Modulelement %{module_item_name} blev slettet.","module_module_name_was_successfully_deleted_fc9e9d47":"Modul %{module_name} blev slettet.","modules_c4325335":"Moduler","move_contents_into_f3e4fd9d":"Flyt indhold til","move_module_90e6927e":"Flyt modul","move_module_item_f525d6c8":"Flyt modulelement","multiple_due_dates_283dd861":"Flere forfaldsdatoer","must_contribute_to_the_page_fff632c":"Skal bidrage til siden","must_mark_as_done_91cff799":"Skal markeres som færdig","must_score_at_least_a_score_3b4f813d":"Skal opnå et resultat på mindst %{score}","must_submit_the_assignment_782d025":"Skal aflevere opgaven","must_view_the_page_67eec19e":"Skal vise siden","not_completed_d70acea3":"Ikke afsluttet","not_yet_completed_345a0bca":"Endnu ikke afsluttet","pages_e5414c2c":"Sider","prerequisites_list_62d66d12":"Forudsætninger: %{list}","released_by_mastery_path_path_b562d741":"Udgivet af læringssti: %{path}","select_prerequisite_module_57894963":"Vælg forudsætningsmodul","some_module_items_could_not_be_published_e4be3c0":"Nogle modul-elementer kunne ikke offentliggøres","this_assignment_is_overdue_a44bea3b":"Denne opgave er forfalden","title_is_required_437f9993":"Titel er påkrævet","you_scored_a_score_a5dd5561":"Du opnåede %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Din aflevering er ikke blevet bedømt endnu"},"da-x-k12":{"collapsed_510aa02a":"Skjult","complete_all_items_e1779257":"Fuldfør alle elementer","complete_one_item_90e5fb03":"Fuldfør et element","completed_19711ce7":"Fuldført","context_modulespublic":{"buttons":{"add":"Tilføj forløb","add_item":"Tilføj element","update":"Opdater forløb"},"confirm":{"delete":"Er du sikker på, at du vil slette forløbet?","delete_item":"Er du sikker på, at du vil slette dette element fra forløbet?"},"errors":{"reorder":"Omorganisering mislykkedes, prøv igen."},"optgroup":{"assignments":"Opgaver","discussion_topics":"Diskussioner","external_tools":"Eksterne værktøjer","external_urls":"Eksterne URL\'er","files":"Filer","quizzes":"Test"},"points_possible_short":"%{points} point","titles":{"add":"Tilføj forløb","add_item":"Føj element til %{module}","add_prerequisite":"Føj forudsætning til %{module}","edit":"Rediger forløbindstillinger","edit_item":"Rediger elementoplysninger"}},"delete_prerequisite_title_19741947":"Slet forudsætning %{title}","delete_requirement_item_type_d7453a69":"Slet krav %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Duplikerer modul, dette kan tage lidt tid","edit_mastery_paths_for_title_3c0a15e1":"Rediger læringsstier for %{title}","error_duplicating_module_4b023042":"Fejl ved duplikering af forløb","error_rendering_duplicated_module_db821097":"Fejl ved gengivelse af duplikeret forløb","expanded_f4493860":"Udvidet","mastery_paths_cc4096c2":"Læringsstier","module_item_module_item_name_was_successfully_dele_8626d846":"Forløbelement %{module_item_name} blev slettet.","module_module_name_was_successfully_deleted_fc9e9d47":"Forløb %{module_name} blev slettet.","modules_c4325335":"Forløb","move_contents_into_f3e4fd9d":"Flyt indhold til","move_module_90e6927e":"Flyt forløb","move_module_item_f525d6c8":"Flyt forløbelement","multiple_due_dates_283dd861":"Flere forfaldsdatoer","must_contribute_to_the_page_fff632c":"Skal bidrage til siden","must_mark_as_done_91cff799":"Skal markeres som færdig","must_score_at_least_a_score_3b4f813d":"Skal opnå et resultat på mindst %{score}","must_submit_the_assignment_782d025":"Skal aflevere opgaven","must_view_the_page_67eec19e":"Skal vise siden","not_completed_d70acea3":"Ikke afsluttet","not_yet_completed_345a0bca":"Endnu ikke afsluttet","pages_e5414c2c":"Sider","prerequisites_list_62d66d12":"Forudsætninger: %{list}","released_by_mastery_path_path_b562d741":"Udgivet af læringssti: %{path}","select_prerequisite_module_57894963":"Vælg forudsætningsforløb","some_module_items_could_not_be_published_e4be3c0":"Nogle forløbelementer kunne ikke offentliggøres","this_assignment_is_overdue_a44bea3b":"Denne opgave er forfalden","title_is_required_437f9993":"Titel er påkrævet","you_scored_a_score_a5dd5561":"Du opnåede %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Din aflevering er ikke blevet bedømt endnu"},"de":{"collapsed_510aa02a":"Reduziert","complete_all_items_e1779257":"Alle Elemente fertigstellen","complete_one_item_90e5fb03":"Ein Element fertigstellen","completed_19711ce7":"Abgeschlossen","context_modulespublic":{"buttons":{"add":"Modul hinzufügen","add_item":"Objekt hinzufügen","update":"Modul aktualisieren"},"confirm":{"delete":"Möchten Sie dieses Modul wirklich löschen?","delete_item":"Möchten Sie dieses Element wirklich vom Modul entfernen?"},"errors":{"reorder":"Neuanordnen fehlgeschlagen, bitte erneut versuchen."},"optgroup":{"assignments":"Aufgaben","discussion_topics":"Diskussionen","external_tools":"Externe Tools","external_urls":"Externe URLs","files":"Dateien","quizzes":"Quizze"},"points_possible_short":"%{points} Pkte.","titles":{"add":"Modul hinzufügen","add_item":"Element hinzufügen zu %{module}","add_prerequisite":"Voraussetzung hinzufügen zu %{module}","edit":"Moduleinstellungen bearbeiten","edit_item":"Elementdetails bearbeiten"}},"delete_prerequisite_title_19741947":"Voraussetzung %{title} löschen","delete_requirement_item_type_d7453a69":"Anforderung %{item} (%{type}) löschen","duplicating_module_this_may_take_some_time_eef73720":"Modul wird dupliziert. Dies kann einige Zeit dauern.","edit_mastery_paths_for_title_3c0a15e1":"Leistungsziel-Pfade ändern für %{title}","error_duplicating_module_4b023042":"Fehler beim Duplizieren des Moduls","error_rendering_duplicated_module_db821097":"Fehler bei der Darstellung des duplizierten Moduls","expanded_f4493860":"Erweitert","mastery_paths_cc4096c2":"Leistungsziel-Pfade","module_item_module_item_name_was_successfully_dele_8626d846":"Modul-Element %{module_item_name} wurde gelöscht.","module_module_name_was_successfully_deleted_fc9e9d47":"Modul %{module_name} wurde gelöscht.","modules_c4325335":"Module","move_contents_into_f3e4fd9d":"Inhalte verschieben nach","move_module_90e6927e":"Modul verschieben","move_module_item_f525d6c8":"Modulelement verschieben","multiple_due_dates_283dd861":"Mehrere Abgabetermine","must_contribute_to_the_page_fff632c":"Muss an der Seite mitwirken","must_mark_as_done_91cff799":"Muss als fertig markiert werden","must_score_at_least_a_score_3b4f813d":"Muss mindestens eine Punktzahl von %{score} erreichen","must_submit_the_assignment_782d025":"Muss die Aufgabe abgeben","must_view_the_page_67eec19e":"Muss die Seite anzeigen","not_completed_d70acea3":"Nicht abgeschlossen","not_yet_completed_345a0bca":"Noch nicht abgeschlossen","pages_e5414c2c":"Seiten","prerequisites_list_62d66d12":"Voraussetzungen: %{list}","released_by_mastery_path_path_b562d741":"Aktiviert vom Leistungsziel-Pfad: %{path}","select_prerequisite_module_57894963":"Erforderliches Modul auswählen","some_module_items_could_not_be_published_e4be3c0":"Einige Modulelemente konnten nicht veröffentlicht werden.","this_assignment_is_overdue_a44bea3b":"Die Abgabefrist dieser Aufgabe ist abgelaufen.","title_is_required_437f9993":"Titel erforderlich","you_scored_a_score_a5dd5561":"Sie erreichten eine Punktezahl von %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Ihr Abgabe wurde nicht benotet."},"el":{"collapsed_510aa02a":"Έγινε σύμπτυξη","complete_all_items_e1779257":"Ολοκλήρωση Όλων των Στοιχείων","complete_one_item_90e5fb03":"Ολοκλήρωση Ενός Στοιχείου","completed_19711ce7":"Ολοκληρώθηκε","context_modulespublic":{"buttons":{"add":"Προσθήκη Ενότητας","add_item":"Προσθήκη Αντικειμένου","update":"Ενημέρωση Αρθρώματος"},"confirm":{"delete":"Είσαστε σίγουροι οτι επιθυμείτε να αφαιρέστε αυτό το άρθρωμα;","delete_item":"Είστε σίγουρος/η ότι επιθυμείτε να αφαιρέσετε αυτό το στοιχείο από την ενότητα;"},"errors":{"reorder":"Η ηχογράφηση απέτυχε, παρακαλώ δοκιμάστε ξανά."},"optgroup":{"assignments":"Εργασίες","discussion_topics":"Συζητήσεις","external_tools":"Εξωτερικά Εργαλεία","external_urls":"Εξωτερικά URL","files":"Αρχεία","quizzes":"Κουίζ"},"points_possible_short":"%{points} μόρια","titles":{"add":"Προσθήκη Ενότητας","add_item":"Πρόσθεση Στοιχείου στο %{module}","edit":"Τροποποίηση Ρυθμίσεων Ενότητας","edit_item":"Επεξεργασία Λεπτομερειών Αντικειμένου"}},"expanded_f4493860":"Έγινε Ανάπτυξη","module_item_module_item_name_was_successfully_dele_8626d846":"Το στοιχείο %{module_item_name} της ενότητας διαγράφηκε επιτυχώς.","module_module_name_was_successfully_deleted_fc9e9d47":"Η ενότητα %{module_name} διαγράφηκε επιτυχώς.","modules_c4325335":"Ενότητες","must_contribute_to_the_page_fff632c":"Πρέπει να συνεισφέρετε σε αυτή τη σελίδα","must_mark_as_done_91cff799":"Πρέπει να επισημανθεί ως ολοκληρωμένο","must_score_at_least_a_score_3b4f813d":"Η βαθμολογία πρέπει να είναι τουλάχιστον %{score}","must_submit_the_assignment_782d025":"Πρέπει να υποβάλετε την εργασία","must_view_the_page_67eec19e":"Πρέπει να προβάλετε τη σελίδα","not_completed_d70acea3":"Δεν έχει ολοκληρωθεί","not_yet_completed_345a0bca":"Δεν έχει ολοκληρωθεί ακόμη","pages_e5414c2c":"Σελίδες","this_assignment_is_overdue_a44bea3b":"Αυτή η εργασία είναι εκπρόθεσμη","you_scored_a_score_a5dd5561":"Έχετε συγκεντρώσει βαθμολογία %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Η υποβολή σας δεν έχει βαθμολογηθεί ακόμα"},"en-AU":{"collapsed_510aa02a":"Collapsed","complete_all_items_e1779257":"Complete All Items","complete_one_item_90e5fb03":"Complete One Item","completed_19711ce7":"Completed","context_modulespublic":{"buttons":{"add":"Add Module","add_item":"Add Item","update":"Update Module"},"confirm":{"delete":"Are you sure you want to delete this module?","delete_item":"Are you sure you want to remove this item from the module?"},"errors":{"reorder":"Reorder failed, please try again."},"optgroup":{"assignments":"Assignments","discussion_topics":"Discussions","external_tools":"External Tools","external_urls":"External URLs","files":"Files","quizzes":"Quizzes"},"points_possible_short":"%{points} pts","titles":{"add":"Add Module","add_item":"Add Item to %{module}","add_prerequisite":"Add Prerequisite to %{module}","edit":"Edit Module Settings","edit_item":"Edit Item Details"}},"delete_prerequisite_title_19741947":"Delete prerequisite %{title}","delete_requirement_item_type_d7453a69":"Delete requirement %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Duplicating Module, this may take some time","edit_mastery_paths_for_title_3c0a15e1":"Edit Mastery Paths for %{title}","error_duplicating_module_4b023042":"Error duplicating module","error_rendering_duplicated_module_db821097":"Error rendering duplicated module","expanded_f4493860":"Expanded","mastery_paths_cc4096c2":"Mastery Paths","module_item_module_item_name_was_successfully_dele_8626d846":"Module item %{module_item_name} was successfully deleted.","module_module_name_was_successfully_deleted_fc9e9d47":"Module %{module_name} was successfully deleted.","modules_c4325335":"Modules","move_contents_into_f3e4fd9d":"Move Contents Into","move_module_90e6927e":"Move Module","move_module_item_f525d6c8":"Move Module Item","multiple_due_dates_283dd861":"Multiple Due Dates","must_contribute_to_the_page_fff632c":"Must contribute to the page","must_mark_as_done_91cff799":"Must mark as done","must_score_at_least_a_score_3b4f813d":"Must score at least a %{score}","must_submit_the_assignment_782d025":"Must submit the assignment","must_view_the_page_67eec19e":"Must view the page","not_completed_d70acea3":"Not completed","not_yet_completed_345a0bca":"Not yet completed","pages_e5414c2c":"Pages","prerequisites_list_62d66d12":"Prerequisites: %{list}","released_by_mastery_path_path_b562d741":"Released by Mastery Path: %{path}","select_prerequisite_module_57894963":"Select prerequisite module","some_module_items_could_not_be_published_e4be3c0":"Some module items could not be published","this_assignment_is_overdue_a44bea3b":"This assignment is overdue.","title_is_required_437f9993":"Title is required","you_scored_a_score_a5dd5561":"You scored a %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Your submission has not been graded yet."},"en-AU-x-unimelb":{"collapsed_510aa02a":"Collapsed","complete_all_items_e1779257":"Complete All Items","complete_one_item_90e5fb03":"Complete One Item","completed_19711ce7":"Completed","context_modulespublic":{"buttons":{"add":"Add Module","add_item":"Add Item","update":"Update Module"},"confirm":{"delete":"Are you sure you want to delete this module?","delete_item":"Are you sure you want to remove this item from the module?"},"errors":{"reorder":"Reorder failed, please try again."},"optgroup":{"assignments":"Assignments","discussion_topics":"Discussions","external_tools":"External Tools","external_urls":"External URLs","files":"Files","quizzes":"Quizzes"},"points_possible_short":"%{points} pts","titles":{"add":"Add Module","add_item":"Add Item to %{module}","add_prerequisite":"Add Prerequisite to %{module}","edit":"Edit Module Settings","edit_item":"Edit Item Details"}},"delete_prerequisite_title_19741947":"Delete prerequisite %{title}","delete_requirement_item_type_d7453a69":"Delete requirement %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Duplicating Module, this may take some time","edit_mastery_paths_for_title_3c0a15e1":"Edit Mastery Paths for %{title}","error_duplicating_module_4b023042":"Error duplicating module","error_rendering_duplicated_module_db821097":"Error rendering duplicated module","expanded_f4493860":"Expanded","mastery_paths_cc4096c2":"Mastery Paths","module_item_module_item_name_was_successfully_dele_8626d846":"Module item %{module_item_name} was successfully deleted.","module_module_name_was_successfully_deleted_fc9e9d47":"Module %{module_name} was successfully deleted.","modules_c4325335":"Modules","move_contents_into_f3e4fd9d":"Move Contents Into","move_module_90e6927e":"Move Module","move_module_item_f525d6c8":"Move Module Item","multiple_due_dates_283dd861":"Multiple Due Dates","must_contribute_to_the_page_fff632c":"Must contribute to the page","must_mark_as_done_91cff799":"Must mark as done","must_score_at_least_a_score_3b4f813d":"Must score at least a %{score}","must_submit_the_assignment_782d025":"Must submit the assignment","must_view_the_page_67eec19e":"Must view the page","not_completed_d70acea3":"Not completed","not_yet_completed_345a0bca":"Not yet completed","pages_e5414c2c":"Pages","released_by_mastery_path_path_b562d741":"Released by Mastery Path: %{path}","select_prerequisite_module_57894963":"Select prerequisite module","some_module_items_could_not_be_published_e4be3c0":"Some module items could not be published","this_assignment_is_overdue_a44bea3b":"This assignment is overdue.","title_is_required_437f9993":"Title is required","you_scored_a_score_a5dd5561":"You scored a %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Your submission has not been graded yet."},"en-CA":{"collapsed_510aa02a":"Collapsed","complete_all_items_e1779257":"Complete All Items","complete_one_item_90e5fb03":"Complete One Item","completed_19711ce7":"Completed","context_modulespublic":{"buttons":{"add":"Add Module","add_item":"Add Item","update":"Update Module"},"confirm":{"delete":"Are you sure you want to delete this module?","delete_item":"Are you sure you want to remove this item from the module?"},"errors":{"reorder":"Reorder failed, please try again."},"optgroup":{"assignments":"Assignments","discussion_topics":"Discussions","external_tools":"External Tools","external_urls":"External URLs","files":"Files","quizzes":"Quizzes"},"points_possible_short":"%{points} pts","titles":{"add":"Add Module","add_item":"Add Item to %{module}","add_prerequisite":"Add Prerequisite to %{module}","edit":"Edit Module Settings","edit_item":"Edit Item Details"}},"delete_prerequisite_title_19741947":"Delete prerequisite %{title}","delete_requirement_item_type_d7453a69":"Delete requirement %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Duplicating Module, this may take some time","edit_mastery_paths_for_title_3c0a15e1":"Edit Mastery Paths for %{title}","error_duplicating_module_4b023042":"Error duplicating module","error_rendering_duplicated_module_db821097":"Error rendering duplicated module","expanded_f4493860":"Expanded","mastery_paths_cc4096c2":"Mastery Paths","module_item_module_item_name_was_successfully_dele_8626d846":"Module item %{module_item_name} was successfully deleted.","module_module_name_was_successfully_deleted_fc9e9d47":"Module %{module_name} was successfully deleted.","modules_c4325335":"Modules","move_contents_into_f3e4fd9d":"Move Contents Into","move_module_90e6927e":"Move Module","move_module_item_f525d6c8":"Move Module Item","multiple_due_dates_283dd861":"Multiple Due Dates","must_contribute_to_the_page_fff632c":"Must contribute to the page","must_mark_as_done_91cff799":"Must mark as done","must_score_at_least_a_score_3b4f813d":"Must score at least a %{score}","must_submit_the_assignment_782d025":"Must submit the assignment","must_view_the_page_67eec19e":"Must view the page","not_completed_d70acea3":"Not completed","not_yet_completed_345a0bca":"Not yet completed","pages_e5414c2c":"Pages","prerequisites_list_62d66d12":"Prerequisites: %{list}","released_by_mastery_path_path_b562d741":"Released by Mastery Path: %{path}","select_prerequisite_module_57894963":"Select prerequisite module","some_module_items_could_not_be_published_e4be3c0":"Some module items could not be published","this_assignment_is_overdue_a44bea3b":"This assignment is overdue","title_is_required_437f9993":"Title is required","you_scored_a_score_a5dd5561":"You scored a %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Your submission has not been graded yet"},"en-GB":{"collapsed_510aa02a":"Collapsed","complete_all_items_e1779257":"Complete all items","complete_one_item_90e5fb03":"Complete one item","completed_19711ce7":"Completed","context_modulespublic":{"buttons":{"add":"Add module","add_item":"Add item","update":"Update module"},"confirm":{"delete":"Are you sure you want to delete this module?","delete_item":"Are you sure you want to remove this item from the module?"},"errors":{"reorder":"Reorder failed, please try again."},"optgroup":{"assignments":"Assignments","discussion_topics":"Discussions","external_tools":"External tools","external_urls":"External URLs","files":"Files","quizzes":"Quizzes"},"points_possible_short":"%{points} pts","titles":{"add":"Add module","add_item":"Add Item to %{module}","add_prerequisite":"Add Prerequisite to %{module}","edit":"Edit module settings","edit_item":"Edit item details"}},"delete_prerequisite_title_19741947":"Delete prerequisite %{title}","delete_requirement_item_type_d7453a69":"Delete requirement %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Duplicating module, this may take some time","edit_mastery_paths_for_title_3c0a15e1":"Edit Mastery Paths for %{title}","error_duplicating_module_4b023042":"Error duplicating module","error_rendering_duplicated_module_db821097":"Error rendering duplicated module","expanded_f4493860":"Expanded","mastery_paths_cc4096c2":"Mastery paths","module_item_module_item_name_was_successfully_dele_8626d846":"Module item %{module_item_name} was successfully deleted.","module_module_name_was_successfully_deleted_fc9e9d47":"Module %{module_name} was successfully deleted.","modules_c4325335":"Modules","move_contents_into_f3e4fd9d":"Move contents to","move_module_90e6927e":"Move module","move_module_item_f525d6c8":"Move module item","multiple_due_dates_283dd861":"Multiple Due Dates","must_contribute_to_the_page_fff632c":"Must contribute to the page","must_mark_as_done_91cff799":"Must mark as done","must_score_at_least_a_score_3b4f813d":"Must score at least a %{score}","must_submit_the_assignment_782d025":"Must submit the assignment","must_view_the_page_67eec19e":"Must view the page","not_completed_d70acea3":"Not completed","not_yet_completed_345a0bca":"Not yet completed","pages_e5414c2c":"Pages","prerequisites_list_62d66d12":"Pre-requisites: %{list}","released_by_mastery_path_path_b562d741":"Released by mastery path: %{path}","select_prerequisite_module_57894963":"Select pre-requisite module","some_module_items_could_not_be_published_e4be3c0":"Some module items could not be published","this_assignment_is_overdue_a44bea3b":"This assignment is overdue","title_is_required_437f9993":"Title required","you_scored_a_score_a5dd5561":"You scored a %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Your submission has not been graded yet"},"en-GB-x-lbs":{"collapsed_510aa02a":"Collapsed","complete_all_items_e1779257":"Complete all items","complete_one_item_90e5fb03":"Complete one item","completed_19711ce7":"Completed","duplicating_module_this_may_take_some_time_eef73720":"Duplicating module, this may take some time","edit_mastery_paths_for_title_3c0a15e1":"Edit Mastery Paths for %{title}","error_duplicating_module_4b023042":"Error duplicating module","error_rendering_duplicated_module_db821097":"Error rendering duplicated module","expanded_f4493860":"Expanded","mastery_paths_cc4096c2":"Mastery paths","module_item_module_item_name_was_successfully_dele_8626d846":"Module item %{module_item_name} was successfully deleted.","module_module_name_was_successfully_deleted_fc9e9d47":"Module %{module_name} was successfully deleted.","modules_c4325335":"Modules","move_contents_into_f3e4fd9d":"Move contents to","move_module_90e6927e":"Move module","move_module_item_f525d6c8":"Move module item","multiple_due_dates_283dd861":"Multiple Due Dates","must_contribute_to_the_page_fff632c":"Must contribute to the page","must_mark_as_done_91cff799":"Must mark as done","must_score_at_least_a_score_3b4f813d":"Must score at least a %{score}","must_submit_the_assignment_782d025":"Must submit the task","must_view_the_page_67eec19e":"Must view the page","not_completed_d70acea3":"Not completed","not_yet_completed_345a0bca":"Not yet completed","pages_e5414c2c":"Pages","released_by_mastery_path_path_b562d741":"Released by mastery path: %{path}","select_prerequisite_module_57894963":"Select pre-requisite module","some_module_items_could_not_be_published_e4be3c0":"Some module items could not be published","this_assignment_is_overdue_a44bea3b":"This task is overdue","title_is_required_437f9993":"Title required","you_scored_a_score_a5dd5561":"You scored a %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Your submission has not been graded yet"},"en-GB-x-ukhe":{"collapsed_510aa02a":"Collapsed","complete_all_items_e1779257":"Complete all items","complete_one_item_90e5fb03":"Complete one item","completed_19711ce7":"Completed","context_modulespublic":{"buttons":{"add":"Add unit","add_item":"Add item","update":"Update unit"},"confirm":{"delete":"Are you sure you want to delete this unit?","delete_item":"Are you sure you want to remove this item from the unit?"},"errors":{"reorder":"Reorder failed, please try again."},"optgroup":{"assignments":"Assignments","discussion_topics":"Discussions","external_tools":"External tools","external_urls":"External URLs","files":"Files","quizzes":"Quizzes"},"points_possible_short":"%{points} pts","titles":{"add":"Add unit","add_item":"Add Item to %{module}","add_prerequisite":"Add Prerequisite to %{module}","edit":"Edit unit settings","edit_item":"Edit item details"}},"delete_prerequisite_title_19741947":"Delete prerequisite %{title}","delete_requirement_item_type_d7453a69":"Delete requirement %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Duplicating unit, this may take some time","edit_mastery_paths_for_title_3c0a15e1":"Edit Mastery Paths for %{title}","error_duplicating_module_4b023042":"Error duplicating unit","error_rendering_duplicated_module_db821097":"Error rendering duplicated unit","expanded_f4493860":"Expanded","mastery_paths_cc4096c2":"Mastery paths","module_item_module_item_name_was_successfully_dele_8626d846":"Unit item %{module_item_name} was successfully deleted.","module_module_name_was_successfully_deleted_fc9e9d47":"Unit %{module_name} was successfully deleted.","modules_c4325335":"Units","move_contents_into_f3e4fd9d":"Move contents to","move_module_90e6927e":"Move unit","move_module_item_f525d6c8":"Move unit item","multiple_due_dates_283dd861":"Multiple Due Dates","must_contribute_to_the_page_fff632c":"Must contribute to the page","must_mark_as_done_91cff799":"Must mark as done","must_score_at_least_a_score_3b4f813d":"Must score at least a %{score}","must_submit_the_assignment_782d025":"Must submit the assignment","must_view_the_page_67eec19e":"Must view the page","not_completed_d70acea3":"Not completed","not_yet_completed_345a0bca":"Not yet completed","pages_e5414c2c":"Pages","prerequisites_list_62d66d12":"Pre-requisites: %{list}","released_by_mastery_path_path_b562d741":"Released by mastery path: %{path}","select_prerequisite_module_57894963":"Select pre-requisite unit","some_module_items_could_not_be_published_e4be3c0":"Some unit items could not be published","this_assignment_is_overdue_a44bea3b":"This assignment is overdue","title_is_required_437f9993":"Title required","you_scored_a_score_a5dd5561":"You scored a %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Your submission has not been graded yet"},"es":{"collapsed_510aa02a":"Contraído","complete_all_items_e1779257":"Complete todos los items","complete_one_item_90e5fb03":"Complete un item","completed_19711ce7":"Completo","context_modulespublic":{"buttons":{"add":"Agregar módulo","add_item":"Agregar item","update":"Actualizar módulo"},"confirm":{"delete":"¿Está seguro de que desea eliminar este módulo?","delete_item":"¿Está seguro de que desea eliminar este item del módulo?"},"errors":{"reorder":"Se produjo un error en la reorganización; intente de nuevo."},"optgroup":{"assignments":"Tareas","discussion_topics":"Foros de discusión","external_tools":"Herramientas Externas","external_urls":"URL externas","files":"Archivos","quizzes":"Evaluaciones"},"points_possible_short":"%{points} pts","titles":{"add":"Agregar módulo","add_item":"Agregar item a %{module}","add_prerequisite":"Agregar prerrequisito a %{module}","edit":"Editar las configuraciones del módulo","edit_item":"Editar los detalles del item"}},"delete_prerequisite_title_19741947":"Eliminar el prerrequisito %{title}","delete_requirement_item_type_d7453a69":"Eliminar el requisito %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Duplicando módulo; puede demorar algo de tiempo","edit_mastery_paths_for_title_3c0a15e1":"Editar las rutas de dominio de %{title}","error_duplicating_module_4b023042":"Error al duplicar el módulo","error_rendering_duplicated_module_db821097":"Error al obtener el módulo duplicado","expanded_f4493860":"Expandido","mastery_paths_cc4096c2":"Caminos de dominio","module_item_module_item_name_was_successfully_dele_8626d846":"El item del módulo %{module_item_name} fue eliminado con éxito.","module_module_name_was_successfully_deleted_fc9e9d47":"El módulo %{module_name} fue eliminado con éxito.","modules_c4325335":"Módulos","move_contents_into_f3e4fd9d":"Mover contenido a","move_module_90e6927e":"Mover módulo","move_module_item_f525d6c8":"Mover item del módulo","multiple_due_dates_283dd861":"Varias fechas de entrega","must_contribute_to_the_page_fff632c":"Debe contribuir a la página","must_mark_as_done_91cff799":"Debe marcar como hecho","must_score_at_least_a_score_3b4f813d":"Debe obtener no menos de %{score}","must_submit_the_assignment_782d025":"Debe entregar la tarea","must_view_the_page_67eec19e":"Debe ver la página","not_completed_d70acea3":"Sin completar","not_yet_completed_345a0bca":"No está completo todavía","pages_e5414c2c":"Páginas","prerequisites_list_62d66d12":"Prerrequisitos: %{list}","released_by_mastery_path_path_b562d741":"Por camino hacia el dominio: %{path}","select_prerequisite_module_57894963":"Seleccionar módulo de prerrequisitos","some_module_items_could_not_be_published_e4be3c0":"No se pudieron publicar algunos items del módulo","this_assignment_is_overdue_a44bea3b":"Esta tarea está atrasada","title_is_required_437f9993":"Se requiere un título","you_scored_a_score_a5dd5561":"Obtuvo un %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Su entrega no ha sido calificada todavía"},"fa":{"collapsed_510aa02a":"جمع شده","complete_all_items_e1779257":"تکمیل همه موردها","complete_one_item_90e5fb03":"تکمیل یک مورد","completed_19711ce7":"کامل شد","context_modulespublic":{"buttons":{"add":"افزودن ماژول","add_item":"افزودن مورد","update":"بهنگام سازی ماژول"},"confirm":{"delete":"مطمئنید که می خواهید این ماژول حذف شود؟","delete_item":"مطمئنید که می خواهید این مورد از ماژول حذف شود؟"},"errors":{"reorder":"مرتب کردن دوباره انجام نشد، لطفا دوباره سعی کنید."},"optgroup":{"assignments":"تکلیف ها","discussion_topics":"بحث ها","external_tools":"ابزارهای بیرونی","external_urls":"نشانی های اینترنتی بیرونی","files":"فایل ها","quizzes":"آزمون ها"},"points_possible_short":"%{points} امتیاز","titles":{"add":"افزودن ماژول","add_item":"افزودن مورد به %{module}","add_prerequisite":"افزودن پیش نیاز به %{module}","edit":"ویرایش تنظیمات ماژول","edit_item":"ویرایش اطلاعات مورد"}},"edit_mastery_paths_for_title_3c0a15e1":"ویرایش مسیرهای تسلط برای %{title}","error_duplicating_module_4b023042":"خطا در تکرار ماژول","error_rendering_duplicated_module_db821097":"خطا در تفسیر ماژول تکراری","expanded_f4493860":"باز شده","mastery_paths_cc4096c2":"مسیرهای تسلط","module_item_module_item_name_was_successfully_dele_8626d846":"مورد ماژول %{module_item_name} با موفقیت حذف شد.","module_module_name_was_successfully_deleted_fc9e9d47":"ماژول %{module_name} با موفقیت حذف شد.","modules_c4325335":"ماژول ها","move_contents_into_f3e4fd9d":"انتقال محتوا به ","move_module_90e6927e":"انتقال ماژول","move_module_item_f525d6c8":"انتقال مورد ماژول","multiple_due_dates_283dd861":"چند تاریخ مهلت","must_contribute_to_the_page_fff632c":"باید در صفحه مشارکت شود","must_mark_as_done_91cff799":"باید به عنوان انجام شده علامت گذاری شود","must_score_at_least_a_score_3b4f813d":"نمره باید حداقل %{score} باشد","must_submit_the_assignment_782d025":"تکلیف باید ارسال شود","must_view_the_page_67eec19e":"صفحه باید مشاهده شود","not_completed_d70acea3":"تکمیل نشده","not_yet_completed_345a0bca":"هنوز تکمیل نشده است","pages_e5414c2c":"صفحه ها","released_by_mastery_path_path_b562d741":"منتشر شده توسط مسیر تسلط: %{path}","select_prerequisite_module_57894963":"انتخاب ماژول پیش نیاز","some_module_items_could_not_be_published_e4be3c0":"برخی موردهای ماژول نمی‌تواند منتشر شود","this_assignment_is_overdue_a44bea3b":"مهلت این تکلیف گذشته است","title_is_required_437f9993":"عنوان لازم است","you_scored_a_score_a5dd5561":"نمره %{score} را کسب کرده اید.","your_submission_has_not_been_graded_yet_d6963e53":"مورد ارسالی شما هنوز نمره گذاری نشده است"},"fi":{"collapsed_510aa02a":"Kutistettu","complete_all_items_e1779257":"Suorita kaikki kohteet","complete_one_item_90e5fb03":"Suorita yksi kohde","completed_19711ce7":"Suoritettu","context_modulespublic":{"buttons":{"add":"Lisää moduuli","add_item":"Lisää kohde","update":"Päivitä moduuli"},"confirm":{"delete":"Haluatko varmasti poistaa tämän moduulin?","delete_item":"Haluatko varmasti poistaa tämän kohteen moduulista?"},"errors":{"reorder":"Uudelleenjärjestys epäonnistui, yritä uudelleen."},"optgroup":{"assignments":"Tehtävät","discussion_topics":"Keskustelut","external_tools":"Ulkoiset työkalut","external_urls":"Ulkoiset Url:t","files":"Tiedostot","quizzes":"Tietovisat"},"points_possible_short":"%{points} pistettä","titles":{"add":"Lisää moduuli","add_item":"Lisää kohde %{module}","add_prerequisite":"Lisää ennakkoedellytys kohteeseen %{module}","edit":"Muokkaa moduulin asetuksia","edit_item":"Muokkaa kohteen tietoja"}},"delete_prerequisite_title_19741947":"Poista ennakkoedellytys %{title}","delete_requirement_item_type_d7453a69":"Poista vaatimus %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Moduulia kopioidaan, tämä saattaa kestää jonkin aikaa","edit_mastery_paths_for_title_3c0a15e1":"Muokkaa hallintapolkuja kohteelle %{title}","error_duplicating_module_4b023042":"Virhe moduulin kopioinnissa","error_rendering_duplicated_module_db821097":"Virhe kopioidun moduulin hahmonnuksessa","expanded_f4493860":"Laajennettu","mastery_paths_cc4096c2":"Hallintapolut","module_item_module_item_name_was_successfully_dele_8626d846":"Moduulin kohteen %{module_item_name} poisto onnistui.","module_module_name_was_successfully_deleted_fc9e9d47":"Moduulin %{module_name} poisto onnistui.","modules_c4325335":"Moduulit","move_contents_into_f3e4fd9d":"Siirrä sisältö kohteeseen","move_module_90e6927e":"Siirrä moduuli","move_module_item_f525d6c8":"Siirrä moduulin kohde","multiple_due_dates_283dd861":"Useita määräpäiviä","must_contribute_to_the_page_fff632c":"Täytyy osallistua sivulle","must_mark_as_done_91cff799":"Täytyy merkitä valmiiksi","must_score_at_least_a_score_3b4f813d":"Täytyy saada vähintään %{score} pistemäärä","must_submit_the_assignment_782d025":"Täytyy lähettää tehtävä","must_view_the_page_67eec19e":"Täytyy tarkastella sivua","not_completed_d70acea3":"Ei valmis","not_yet_completed_345a0bca":"Ei vielä valmis","pages_e5414c2c":"Sivut","prerequisites_list_62d66d12":"Edellytykset: %{list}","released_by_mastery_path_path_b562d741":"Hallintapolun julkaisema: %{path}","select_prerequisite_module_57894963":"Valitse ennakkoedellytyksen moduuli","some_module_items_could_not_be_published_e4be3c0":"Joitakin moduuleja ei voitu julkaista","this_assignment_is_overdue_a44bea3b":"Tämän tehtävän määräaika on ohi","title_is_required_437f9993":"Otsikko on pakollinen","you_scored_a_score_a5dd5561":"Sait pistemäärän %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Lähetystäsi ei ole vielä arvosteltu"},"fr":{"collapsed_510aa02a":"Réduit(e)","complete_all_items_e1779257":"Terminer tous les éléments","complete_one_item_90e5fb03":"Terminer un élément","completed_19711ce7":"Terminé(e)","context_modulespublic":{"buttons":{"add":"Ajouter un module","add_item":"Ajouter un élément","update":"Mettre à jour le module"},"confirm":{"delete":"Voulez-vous vraiment supprimer ce module ?","delete_item":"Voulez-vous vraiment supprimer cet élément du module ?"},"errors":{"reorder":"Échec du classement, veuillez réessayer"},"optgroup":{"assignments":"Devoirs","discussion_topics":"Discussions","external_tools":"Outils externes","external_urls":"URL externes","files":"Fichiers","quizzes":"Questionnaires"},"points_possible_short":"%{points} pts","titles":{"add":"Ajouter un module","add_item":"Ajouter un élément à %{module}","add_prerequisite":"Ajouter un prérequis à %{module}","edit":"Modifier les paramètres du module","edit_item":"Modifier les informations de l’élément"}},"delete_prerequisite_title_19741947":"Supprimer le prérequis %{title}","delete_requirement_item_type_d7453a69":"Supprimer la condition %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Dupliquer le module, cela peut prendre du temps.","edit_mastery_paths_for_title_3c0a15e1":"Modifier les Chemins de Réussite pour %{title}","error_duplicating_module_4b023042":"Erreur lors de la duplication du module","error_rendering_duplicated_module_db821097":"Erreur de rendu du module dupliqué","expanded_f4493860":"Développé(e)","mastery_paths_cc4096c2":"Parcours de maîtrise","module_item_module_item_name_was_successfully_dele_8626d846":"L\'élément %{module_item_name} du module a bien été supprimé.","module_module_name_was_successfully_deleted_fc9e9d47":"Le module %{module_name} a bien été supprimé.","modules_c4325335":"Modules","move_contents_into_f3e4fd9d":"Déplacer les contenus dans","move_module_90e6927e":"Déplacer le module","move_module_item_f525d6c8":"Déplacer l\'élément de module","multiple_due_dates_283dd861":"Dates limites multiples","must_contribute_to_the_page_fff632c":"Doit participer à la page","must_mark_as_done_91cff799":"Doit le marquer comme terminé","must_score_at_least_a_score_3b4f813d":"Doit obtenir au minimum %{score}","must_submit_the_assignment_782d025":"Doit remettre l\'évaluation","must_view_the_page_67eec19e":"Doit consulter la page","not_completed_d70acea3":"Non terminé","not_yet_completed_345a0bca":"Pas encore terminé","pages_e5414c2c":"Pages","prerequisites_list_62d66d12":"Conditions préalables : %{list}","released_by_mastery_path_path_b562d741":"Rendu disponible par le Chemin de Réussite : %{path}","select_prerequisite_module_57894963":"Sélectionnez un module prérequis","some_module_items_could_not_be_published_e4be3c0":"Certains éléments du module n\'ont pas pu être publiés","this_assignment_is_overdue_a44bea3b":"Cette évaluation est en retard","title_is_required_437f9993":"Un titre est requis","you_scored_a_score_a5dd5561":"Vous avez obtenu %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"L\'évaluation que vous avez remise n\'a pas encore été notée"},"fr-CA":{"collapsed_510aa02a":"Réduit(e)","complete_all_items_e1779257":"Terminer tous les éléments","complete_one_item_90e5fb03":"Terminer un élément","completed_19711ce7":"Terminé(e)","context_modulespublic":{"buttons":{"add":"Ajouter un module","add_item":"Ajouter un élément","update":"Mettre à jour le module"},"confirm":{"delete":"Voulez-vous vraiment supprimer ce module?","delete_item":"Voulez-vous vraiment supprimer cet élément du module?"},"errors":{"reorder":"Échec du classement, veuillez réessayer"},"optgroup":{"assignments":"Tâches","discussion_topics":"Discussions","external_tools":"Outils externes","external_urls":"URL externes","files":"Fichiers","quizzes":"Questionnaires"},"points_possible_short":"%{points} pts","titles":{"add":"Ajouter un module","add_item":"Ajouter un élément à %{module}","add_prerequisite":"Ajouter des prérequis pour %{module}","edit":"Modifier les paramètres du module","edit_item":"Modifier les informations de l’élément"}},"delete_prerequisite_title_19741947":"Supprimer les conditions préalables %{title}","delete_requirement_item_type_d7453a69":"Supprimer l\'exigence %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Duplication de module, cela pourrait prendre un certain temps","edit_mastery_paths_for_title_3c0a15e1":"Modifier les Chemins de Réussite pour %{title}","error_duplicating_module_4b023042":"Erreur lors de la duplication de module","error_rendering_duplicated_module_db821097":"Erreur lors du rendu de module dupliqué","expanded_f4493860":"Développé(e)","mastery_paths_cc4096c2":"Parcours de maîtrise","module_item_module_item_name_was_successfully_dele_8626d846":"L\'élément %{module_item_name} du module a bien été supprimé.","module_module_name_was_successfully_deleted_fc9e9d47":"Le module %{module_name} a bien été supprimé.","modules_c4325335":"Modules","move_contents_into_f3e4fd9d":"Déplacer le contenu dans","move_module_90e6927e":"Déplacer le module","move_module_item_f525d6c8":"Déplacer l’élément de module","multiple_due_dates_283dd861":"Dates limites multiples","must_contribute_to_the_page_fff632c":"Doit participer à la page","must_mark_as_done_91cff799":"Doit le marquer comme terminé","must_score_at_least_a_score_3b4f813d":"Doit obtenir au minimum %{score}","must_submit_the_assignment_782d025":"Doit remettre l\'évaluation","must_view_the_page_67eec19e":"Doit consulter la page","not_completed_d70acea3":"Non terminé","not_yet_completed_345a0bca":"Pas encore terminé","pages_e5414c2c":"Pages","prerequisites_list_62d66d12":"Conditions préalables : %{list}","released_by_mastery_path_path_b562d741":"Rendu disponible par le Chemin de Réussite (Mastery Path) : %{path}","select_prerequisite_module_57894963":"Sélectionnez un module prérequis","some_module_items_could_not_be_published_e4be3c0":"Certains éléments du module ne peuvent pas être publiés","this_assignment_is_overdue_a44bea3b":"Cette évaluation est en retard","title_is_required_437f9993":"Un titre est requis","you_scored_a_score_a5dd5561":"Vous avez obtenu %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"L\'évaluation que vous avez remise n\'a pas encore été notée"},"he":{"collapsed_510aa02a":"כווץ","complete_all_items_e1779257":"יש להשלים את כל הפריטים","complete_one_item_90e5fb03":"יש להשלים פריט אחד","completed_19711ce7":"הושלם","context_modulespublic":{"buttons":{"add":"הוספת מודול","add_item":"הוספת פריט","update":"עדכון מודול"},"confirm":{"delete":"בטוח/ה שרוצה לבטל מודול זה?","delete_item":"בטוח/ה שרוצה להסיר פריט זה מהמודול?"},"errors":{"reorder":"סידור מחדש נכשל, יש לנסות שוב."},"optgroup":{"assignments":"משימות","discussion_topics":"דיונים ","external_tools":"כלים חיצוניים","external_urls":"כתובות אינטרנט חיצוניות","files":"קבצים ","quizzes":"בחנים"},"points_possible_short":"%{points} נקודות","titles":{"add":"הוספת מודול","add_item":"הוספת פריט ל%{module}","add_prerequisite":"הוספת דרישה מוקדמת ל%{module}","edit":"עריכת הגדרות מודול","edit_item":"עריכת פרטי פריט"}},"edit_mastery_paths_for_title_3c0a15e1":"עריכת מסלולי התמחות עבור %{title}","error_duplicating_module_4b023042":"שגיאת מודול כפול","error_rendering_duplicated_module_db821097":"Error rendering duplicated module","expanded_f4493860":"הורחב","mastery_paths_cc4096c2":"מסלולי התמחות","module_item_module_item_name_was_successfully_dele_8626d846":"פריט מודול %{module_item_name} בוטל בהצלחה","module_module_name_was_successfully_deleted_fc9e9d47":"מודול %{module_name} בוטל בהצלחה","modules_c4325335":"מודולים","move_contents_into_f3e4fd9d":"העברת המידע על התכנים","move_module_90e6927e":"העברת מודול","move_module_item_f525d6c8":"העברת פריט מודול","multiple_due_dates_283dd861":"תאריכי יעד מרובים","must_contribute_to_the_page_fff632c":"חובה להשתתף ולתרום לדף","must_mark_as_done_91cff799":"יש לסמן כבוצע","must_score_at_least_a_score_3b4f813d":"יש להשיג ניקוד של לפחות %{score}","must_submit_the_assignment_782d025":"יש להגיש את המשימה","must_view_the_page_67eec19e":"יש לעיין בדף","not_completed_d70acea3":"טרם הושלם","not_yet_completed_345a0bca":"טרם הושלם","pages_e5414c2c":"דפים","released_by_mastery_path_path_b562d741":"פורסם במסגרת מסלול התמחות: %{path}","select_prerequisite_module_57894963":"בחירת מודול המהווה דרישה מוקדמת","some_module_items_could_not_be_published_e4be3c0":"כמה מפריטי מודול לא התפרסמו","this_assignment_is_overdue_a44bea3b":"משימה זו באיחור","title_is_required_437f9993":"נדרשת כותרת","you_scored_a_score_a5dd5561":"קיבלת ציון של %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"ההגשה שלך עדיין לא הוערכה."},"ht":{"collapsed_510aa02a":"Redwi","complete_all_items_e1779257":"Konplete Tout Eleman","complete_one_item_90e5fb03":"Konplete Yon Eleman","completed_19711ce7":"Konplete","context_modulespublic":{"buttons":{"add":"Ajoute Modil","add_item":"Ajoute Eleman","update":"Aktyalize Modil"},"confirm":{"delete":"Ou kwè vrèman ou vle efase modil sa a?","delete_item":"Èske se vre ou vle elimine eleman sa a nan modil la?"},"errors":{"reorder":"Re òganizasyon echwe, tanpri eseye ankò."},"optgroup":{"assignments":"Sesyon","discussion_topics":"Diskisyon","external_tools":"Zouti Ekstèn","external_urls":"URL Ekstèn","files":"Fichye","quizzes":"Quiz"},"points_possible_short":"%{points} pwen","titles":{"add":"Ajoute Modil","add_item":"Ajoute Eleman sou %{module}","add_prerequisite":"Ajoute Prereki nan %{module}","edit":"Modifye Paramèt Modil","edit_item":"Modifye Detay Eleman"}},"delete_prerequisite_title_19741947":"Elimine prereki %{title}","delete_requirement_item_type_d7453a69":"Elimine kondisyon %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Diplikasyon Modil, sa ka pran yon ti tan","edit_mastery_paths_for_title_3c0a15e1":"Modifye Pakou Metriz pou %{title}","error_duplicating_module_4b023042":"Erè nan diplikasyon modil","error_rendering_duplicated_module_db821097":"Erè nan diplikasyon modil","expanded_f4493860":"Elaji","mastery_paths_cc4096c2":"Pakou Prensipal","module_item_module_item_name_was_successfully_dele_8626d846":"Eleman modil %{module_item_name} te efase kòrèkteman.","module_module_name_was_successfully_deleted_fc9e9d47":"Modil %{module_name} te efase kòrèkteman.","modules_c4325335":"Modil","move_contents_into_f3e4fd9d":"Deplase kontni Nan","move_module_90e6927e":"Deplase Modil","move_module_item_f525d6c8":"Deplase Eleman Modil","multiple_due_dates_283dd861":"Plizyè Delè","must_contribute_to_the_page_fff632c":"Dwe kontribye a paj la","must_mark_as_done_91cff799":"Dwe make tankou li fini","must_score_at_least_a_score_3b4f813d":"Dwe fè pou pi piti %{score}","must_submit_the_assignment_782d025":"Dwe soumèt sesyon an","must_view_the_page_67eec19e":"Dwe afiche paj la","not_completed_d70acea3":"Poko fini","not_yet_completed_345a0bca":"Poko konplete","pages_e5414c2c":"Paj","prerequisites_list_62d66d12":"Kondisyon: %{list}","released_by_mastery_path_path_b562d741":"Libere pa Pakou Metriz: %{path}","select_prerequisite_module_57894963":"Seleksyone kondisyon modil","some_module_items_could_not_be_published_e4be3c0":"Kèk eleman modil pa t kapab pibliye","this_assignment_is_overdue_a44bea3b":"Sesyon sa a an reta","title_is_required_437f9993":"Tit la obligatwa","you_scored_a_score_a5dd5561":"Ou fè %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Soumisyon ou a poko evalye."},"hu":{"collapsed_510aa02a":"Összecsukott","complete_all_items_e1779257":"Minden elemet tegyen befejezetté","complete_one_item_90e5fb03":"Egy elem befejezése","completed_19711ce7":"Befejezett","context_modulespublic":{"buttons":{"add":"Modul hozzáadása","add_item":"Elem hozzáadása","update":"Modul frissítése"},"confirm":{"delete":"Biztos benne, hogy törli ezt a modult?","delete_item":"Biztos benne, hogy törli ezt az elemet a modulból?"},"errors":{"reorder":"A sorrend megváltoztatása sikertelen, próbálja újra"},"optgroup":{"assignments":"Feladatok","discussion_topics":"Fórumok","external_tools":"Külső eszközök","external_urls":"Külső webcímek","files":"Fájlok","quizzes":"Kvízek"},"points_possible_short":"%{points} pont","titles":{"add":"Modul hozzáadása","add_item":"Elem hozzáadása ide: %{module}","add_prerequisite":"Előfeltétel hozzáadása ehhez: %{module}","edit":"Modulbeállítások szerkesztése","edit_item":"Elem részleteinek szerkesztése"}},"expanded_f4493860":"Kinyitva","mastery_paths_cc4096c2":"Jártassági útvonalak","module_item_module_item_name_was_successfully_dele_8626d846":"A modul eleme %{module_item_name} sikeresen törölve.","module_module_name_was_successfully_deleted_fc9e9d47":"%{module_name} nevű modul sikeresen törölve. ","modules_c4325335":"Modulok","move_module_90e6927e":"Modul áthelyezése","move_module_item_f525d6c8":"Modulelem áthelyezése","multiple_due_dates_283dd861":"Több határidő","must_contribute_to_the_page_fff632c":"Közre kell működni az oldal szerkesztésében","must_mark_as_done_91cff799":"Meg kell jelölni elkészültként","must_score_at_least_a_score_3b4f813d":"Legalább %{score} pontot kell elérni","must_submit_the_assignment_782d025":"Be kell adni a feladatot","must_view_the_page_67eec19e":"Meg kell tekintenie az oldalt","not_completed_d70acea3":"Befejezetlen","not_yet_completed_345a0bca":"Még befejezetlen","pages_e5414c2c":"Oldalak","this_assignment_is_overdue_a44bea3b":"Ez a feladat lejárt","title_is_required_437f9993":"Cím megadása kötelező","you_scored_a_score_a5dd5561":"%{score} pontot ért el.","your_submission_has_not_been_graded_yet_d6963e53":"A beadott anyagot még nem osztályozták"},"hy":{"collapsed_510aa02a":"Սեղմել","complete_all_items_e1779257":"Ավարտել բոլոր տարրերի կատարումը","complete_one_item_90e5fb03":"Ավարտիր Մեկ Առարկա","completed_19711ce7":"Ավարտված է","context_modulespublic":{"buttons":{"add":"Ավելացնել մոդուլ","add_item":"Ավելացնել տարր","update":"Թարմացնել մոդուլը"},"confirm":{"delete":"Դուք իսկապե՞ս ցանկանում եք ջնջել այս մոդուլը:","delete_item":"Դուք իսկապե՞ս ցանկանում եք հանել այս տարրը մոդուլից:"},"errors":{"reorder":"Վերադասավորումը չհաջողվեց, փորձեք կրկին:"},"optgroup":{"assignments":"Հանձնարարություններ","discussion_topics":"Քննարկումներ","external_tools":"Արտաքին գործիքներ","external_urls":"Արտաքին URL հասցեներ ","files":"Ֆայլեր","quizzes":"Թեստեր"},"points_possible_short":"%{points} pts","titles":{"add":"Ավելացնել մոդուլ","add_item":"%{module}-ին տարր ավելացնել ","add_prerequisite":"%{module}-ին  նախապայման ավելացնել ","edit":"Խմբագրել մոդուլի կարգաբերումները","edit_item":"Խմբագրել տարրի մանրամասները"}},"expanded_f4493860":"Բացված է","module_item_module_item_name_was_successfully_dele_8626d846":"%{module_item_name} մոդուլի տարրը հաջողությամբ ջնջվել է:","module_module_name_was_successfully_deleted_fc9e9d47":"%{module_name} մոդուլը հաջողությամբ ջնջվել է:","modules_c4325335":"Մոդուլներ","must_mark_as_done_91cff799":"Անհրաժեշտ է նշել որպես կատարված","must_score_at_least_a_score_3b4f813d":"Անհրաժեշտ է գնահատել առնվազն %{score} միավոր","must_submit_the_assignment_782d025":"Անհրաժեշտ է ուղարկել հանձնարարությունը","must_view_the_page_67eec19e":"Անհրաժեշտ է դիտել էջը","not_completed_d70acea3":"Ավարտված չէ","not_yet_completed_345a0bca":"Դեռեւս ավարտված չէ","pages_e5414c2c":"Էջեր","this_assignment_is_overdue_a44bea3b":"Այս հանձնարարությունը ժամկետանց է","you_scored_a_score_a5dd5561":"Դուք ստացել եք %{score} միավոր","your_submission_has_not_been_graded_yet_d6963e53":"Ձեր կողմից ուղարկված աշխատանքը դեռեւս չի գնահատվել"},"is":{"collapsed_510aa02a":"Fellt","complete_all_items_e1779257":"Ljúka öllum atriðum","complete_one_item_90e5fb03":"Ljúka einu atriði","completed_19711ce7":"Lokið","context_modulespublic":{"buttons":{"add":"Bæta við einingu","add_item":"Bæta við atriði","update":"Uppfæra einingu"},"confirm":{"delete":"Viltu örugglega eyða þessari einingu?","delete_item":"Viltu örugglega fjarlægja þetta atriði úr einingunni?"},"errors":{"reorder":"Endurröðun tókst ekki, reyndu aftur."},"optgroup":{"assignments":"Verkefni","discussion_topics":"Umræður","external_tools":"Ytri tæki","external_urls":"Ytri vefslóðir","files":"Skrár","quizzes":"Próf"},"points_possible_short":"%{points} punktar","titles":{"add":"Bæta við einingu","add_item":"Bæta atriði við %{module}","add_prerequisite":"Bæta forkröfu við %{module}","edit":"Breyta stillingum námsefni","edit_item":"Breyta upplýsingum um atriði"}},"delete_prerequisite_title_19741947":"Eyða forkröfum %{title}","delete_requirement_item_type_d7453a69":"Eyða kröfum %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Tvítek einingu, það gæti tækið smá stund","edit_mastery_paths_for_title_3c0a15e1":"Breyta tileinkunarslóðum fyrir %{title}","error_duplicating_module_4b023042":"Villa kom upp við afritun námsefni","error_rendering_duplicated_module_db821097":"Villa kom upp við að birta afritaða einingu","expanded_f4493860":"Stækkað","mastery_paths_cc4096c2":"Tileinkunarslóðir","module_item_module_item_name_was_successfully_dele_8626d846":"Námsefni atriðinu  %{module_item_name} var eytt.","module_module_name_was_successfully_deleted_fc9e9d47":"Einingunni %{module_name} var eytt.","modules_c4325335":"Námsefni","move_contents_into_f3e4fd9d":"Flytja innihald í","move_module_90e6927e":"Færa mát","move_module_item_f525d6c8":"Færa mátaratriði","multiple_due_dates_283dd861":"Margir skiladagar","must_contribute_to_the_page_fff632c":"Verður að leggja til á síðuna","must_mark_as_done_91cff799":"Verður að merkja sem búið","must_score_at_least_a_score_3b4f813d":"Verður að ná minnst %{score}","must_submit_the_assignment_782d025":"Verður að skila verkefnið","must_view_the_page_67eec19e":"verður að skoða síðuna","not_completed_d70acea3":"Ekki lokið","not_yet_completed_345a0bca":"Ekki lokið enn","pages_e5414c2c":"Síður","prerequisites_list_62d66d12":"Forkröfur: %{list}","released_by_mastery_path_path_b562d741":"Útgefið af Mastery Path: %{path}","select_prerequisite_module_57894963":"Velja forkröfueiningu","some_module_items_could_not_be_published_e4be3c0":"Ekki var hægt að birta sum námsefni atriði","this_assignment_is_overdue_a44bea3b":"Þetta verkefni er í vanskilum","title_is_required_437f9993":"Þarf titil","you_scored_a_score_a5dd5561":"Þú fékkst %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Skil þín hafa ekki verið metin til einkunnar"},"it":{"collapsed_510aa02a":"Compresso","complete_all_items_e1779257":"Completa tutti gli elementi","complete_one_item_90e5fb03":"Completa un elemento","completed_19711ce7":"Completato","context_modulespublic":{"buttons":{"add":"Aggiungi modulo","add_item":"Aggiungi elemento","update":"Aggiorna modulo"},"confirm":{"delete":"Vuoi eliminare questo modulo?","delete_item":"Vuoi rimuovere questo elemento dal modulo?"},"errors":{"reorder":"Riordino non riuscito. Riprova."},"optgroup":{"assignments":"Compiti","discussion_topics":"Discussioni","external_tools":"Strumenti esterni","external_urls":"URL esterni","files":"File","quizzes":"Quiz"},"points_possible_short":"%{points} pt.","titles":{"add":"Aggiungi modulo","add_item":"Aggiungi elemento a %{module}","add_prerequisite":"Aggiungi prerequisito a %{module}","edit":"Modifica impostazioni modulo","edit_item":"Modifica dettagli elementi"}},"delete_prerequisite_title_19741947":"Elimina prerequisito %{title}","delete_requirement_item_type_d7453a69":"Elimina requisito %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Duplicazione modulo. L\'operazione può richiedere un po\' di tempo","edit_mastery_paths_for_title_3c0a15e1":"Modifica percorsi di acquisizione della padronanza per %{title}","error_duplicating_module_4b023042":"Errore durante la duplicazione del modulo","error_rendering_duplicated_module_db821097":"Errore durante il rendering del modulo duplicato","expanded_f4493860":"Esteso","mastery_paths_cc4096c2":"Percorsi di acquisizione della padronanza","module_item_module_item_name_was_successfully_dele_8626d846":"L\'elemento del modulo %{module_item_name} è stato eliminato correttamente.","module_module_name_was_successfully_deleted_fc9e9d47":"Il modulo %{module_name} è stato eliminato correttamente.","modules_c4325335":"Moduli","move_contents_into_f3e4fd9d":"Sposta i contenuti in","move_module_90e6927e":"Sposta modulo","move_module_item_f525d6c8":"Sposta elemento modulo","multiple_due_dates_283dd861":"Più date di scadenza","must_contribute_to_the_page_fff632c":"Deve contribuire alla pagina","must_mark_as_done_91cff799":"Deve contrassegnare come fatto","must_score_at_least_a_score_3b4f813d":"Deve ottenere un punteggio di almeno %{score}","must_submit_the_assignment_782d025":"Deve inviare il compito","must_view_the_page_67eec19e":"Deve visualizzare la pagina","not_completed_d70acea3":"Non completato","not_yet_completed_345a0bca":"Ancora non completato","pages_e5414c2c":"Pagine","prerequisites_list_62d66d12":"Prerequisiti: %{list}","released_by_mastery_path_path_b562d741":"Rilasciato per percorso di acquisizione padronanza: %{path}","select_prerequisite_module_57894963":"Seleziona modulo dei prerequisiti","some_module_items_could_not_be_published_e4be3c0":"Impossibile pubblicare alcuni elementi del modulo","this_assignment_is_overdue_a44bea3b":"Questo compito è scaduto","title_is_required_437f9993":"Il titolo è obbligatorio","you_scored_a_score_a5dd5561":"Hai ottenuto un punteggio di %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"La tua consegna non è stata ancora valutata"},"ja":{"collapsed_510aa02a":"折りたたまれました","complete_all_items_e1779257":"すべてのアイテムを完了する","complete_one_item_90e5fb03":"1つのアイテムを完了する","completed_19711ce7":"完了","context_modulespublic":{"buttons":{"add":"モジュールの追加","add_item":"アイテム","update":"モジュールの更新"},"confirm":{"delete":"このモジュールを削除してもよろしいですか?","delete_item":"このアイテムをモジュールから削除してもよろしいですか?"},"errors":{"reorder":"並べ替えに失敗しました。もう一度やり直してください。"},"optgroup":{"assignments":"課題","discussion_topics":"ディスカッション","external_tools":"外部ツール","external_urls":"外部 URL","files":"ファイル","quizzes":"クイズ"},"points_possible_short":"%{points} 点","titles":{"add":"モジュールの追加","add_item":"%{module} にアイテムを追加","add_prerequisite":"%{module} に前提条件を追加","edit":"モジュール設定の編集","edit_item":"アイテムの詳細情報の編集"}},"delete_prerequisite_title_19741947":"前提条件%{title}を削除","delete_requirement_item_type_d7453a69":"前提条件%{item} (%{type})を削除","duplicating_module_this_may_take_some_time_eef73720":"モジュールを複製中、これには時間がかかることがあります","edit_mastery_paths_for_title_3c0a15e1":"～のマスタリーパスを編集%{title}","error_duplicating_module_4b023042":"モジュール重複時にエラー","error_rendering_duplicated_module_db821097":"モジュールレンダリング時にエラー","expanded_f4493860":"展開済み","mastery_paths_cc4096c2":"熟達の過程","module_item_module_item_name_was_successfully_dele_8626d846":"モジュールアイテム%{module_item_name} は正常に削除されました","module_module_name_was_successfully_deleted_fc9e9d47":"モジュールアイテム%{module_name} は正常に削除されました","modules_c4325335":"モジュール","move_contents_into_f3e4fd9d":"コンテンツを次に移動","move_module_90e6927e":"モジュールを移動","move_module_item_f525d6c8":"モジュール項目を移動","multiple_due_dates_283dd861":"複数の締切日","must_contribute_to_the_page_fff632c":"ページに貢献することが必要","must_mark_as_done_91cff799":"完了にする必要があります","must_score_at_least_a_score_3b4f813d":"スコアは最低 %{score} でなければならない","must_submit_the_assignment_782d025":"課題を提出することが必要","must_view_the_page_67eec19e":"ページを閲覧することが必要","not_completed_d70acea3":"完了していません","not_yet_completed_345a0bca":"まだ完了していません","pages_e5414c2c":"ページ","prerequisites_list_62d66d12":"前提条件：%{list}","released_by_mastery_path_path_b562d741":"マスタリーパスからリリース%{path}","select_prerequisite_module_57894963":"前提条件モジュールの選択","some_module_items_could_not_be_published_e4be3c0":"一部のモジュールアイテムを公開できませんでした","this_assignment_is_overdue_a44bea3b":"この課題は期日を過ぎています","title_is_required_437f9993":"タイトルが必要です","you_scored_a_score_a5dd5561":" %{score}得点しました。","your_submission_has_not_been_graded_yet_d6963e53":"提出物はまだ採点されていません"},"ko":{"context_modulespublic":{"buttons":{"add":"모듈 추가","add_item":"항목 추가","update":"모듈 업데이트"},"confirm":{"delete":"이 모듈을 삭제하시겠습니까?","delete_item":"이 항목을 모듈에서 제거하시겠습니까?"},"errors":{"reorder":"재정렬에 실패했습니다. 다시 시도하시기 바랍니다."},"optgroup":{"assignments":"과제","discussion_topics":"토론","external_tools":"외부도구","external_urls":"외부 URL","files":"파일","quizzes":"퀴즈"},"points_possible_short":"%{points}점","titles":{"add":"모듈 추가","add_item":"%{module}에 항목 추가","add_prerequisite":"%{module}에 필수 조건 추가","edit":"모듈 설정 편집","edit_item":"항목 세부 정보 편집"}},"modules_c4325335":"모듈","pages_e5414c2c":"페이지"},"mi":{"collapsed_510aa02a":"hinga","complete_all_items_e1779257":"Whakaotia Ngā Tūemi Katoa","complete_one_item_90e5fb03":"Oti tētahi tūemi","completed_19711ce7":"oti","context_modulespublic":{"buttons":{"add":"Tāpiri Kōwae","add_item":"Tāpiri tuemi","update":"Whakahōu Kōwae"},"confirm":{"delete":"E tino hiahia ana koe ki te muku i tēnei kōwae?","delete_item":"E tino hiahia ana koe ki te tango i tēnei tūemi i te kōwae?"},"errors":{"reorder":"I rahua te raupapa anō, tēnā koa ngana anō"},"optgroup":{"assignments":"Ngā whakataunga","discussion_topics":"Ngā Kōrerorero","external_tools":"Taputapu o waho","external_urls":"URL waho","files":"Kōnae","quizzes":"Ngā Quizzes"},"points_possible_short":"%{points} ngā koinga","titles":{"add":"Tāpiri Kōwae","add_item":"Tāpiri Te tūemi ki te %{module}","add_prerequisite":"Tāpiri hiahiatanga ki %{module}","edit":"Whakatika Tautuhinga Kōwae","edit_item":"Taipitopito Whakatika nama"}},"delete_prerequisite_title_19741947":"Muku tuhinga o mua %{title}","delete_requirement_item_type_d7453a69":"Muku hiahiatanga %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"E tārua kōwae ana, ka roa pea te wā","edit_mastery_paths_for_title_3c0a15e1":"Whakatika ngā Ara Hinganga mō %{title}","error_duplicating_module_4b023042":"He hapa i te wā e tārua ana te kōwae","error_rendering_duplicated_module_db821097":"He hapa i te wā e hoatu ana i te kōwae tārua","expanded_f4493860":"Kua rahi ake","mastery_paths_cc4096c2":"Mana Ara","module_item_module_item_name_was_successfully_dele_8626d846":"Te tūemi Kōwae %{module_item_name} i momoho te muku.","module_module_name_was_successfully_deleted_fc9e9d47":"Kōwae %{module_name}. i momoho te mukua","modules_c4325335":"Ngā kōwae","move_contents_into_f3e4fd9d":"Nuku ngā Ihirangi ki roto i","move_module_90e6927e":"Neke Kōwae","move_module_item_f525d6c8":"Neke Kōwae Tūemi","multiple_due_dates_283dd861":"Maha Rā Nā","must_contribute_to_the_page_fff632c":"Me whai wāhi ki te whārangi","must_mark_as_done_91cff799":"Me Tohua kua oti","must_score_at_least_a_score_3b4f813d":"Me kaute i te iti rawa i te %{score}","must_submit_the_assignment_782d025":"Me tuku te whakataunga","must_view_the_page_67eec19e":"Tiro i te whārangi","not_completed_d70acea3":"Kāore i oti","not_yet_completed_345a0bca":"E kore anō oti","pages_e5414c2c":"Ngā whārangi","prerequisites_list_62d66d12":"Ngā hiahiatanga: %{list}","released_by_mastery_path_path_b562d741":"I tukua e te Ara Hinganga: %{path}","select_prerequisite_module_57894963":"Tīpako kōwae titauhia","some_module_items_could_not_be_published_e4be3c0":"E kore e taea te whakaputa ētahi o ngā tuemi kowae","this_assignment_is_overdue_a44bea3b":"Kei te tōmuri tēnei whakataunga","title_is_required_437f9993":"Kei te hiahiatia te taitara","you_scored_a_score_a5dd5561":"kaute koe he %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"E kore kua tō tāpaetanga kua kōekehia anō"},"nb":{"collapsed_510aa02a":"Kollapset","complete_all_items_e1779257":"Fullfør alle elementer","complete_one_item_90e5fb03":"Fullfør ett element","completed_19711ce7":"Godkjent","context_modulespublic":{"buttons":{"add":"Legg til modul","add_item":"Legg til punkt","update":"Oppdater Modul"},"confirm":{"delete":"Er du sikker på at du ønsker å slette denne modulen?","delete_item":"Er du sikker på at du vil fjerne dette elementet fra modulen?"},"errors":{"reorder":"Ordning feilet, vennligst forsøk igjen."},"optgroup":{"assignments":"Oppgaver","discussion_topics":"Diskusjoner","external_tools":"Eksterne verktøy","external_urls":"Eksterne URLer","files":"Filer","quizzes":"Tester"},"points_possible_short":"%{points} poeng","titles":{"add":"Legg til modul","add_item":"Legg element til %{module}","add_prerequisite":"Legg forhåndskrav til %{module}","edit":"Rediger Modulinnstillinger","edit_item":"Rediger element detaljer"}},"delete_prerequisite_title_19741947":"Slett forhåndskrav %{title}","delete_requirement_item_type_d7453a69":"Slett krav %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Dupliserer modul, dette kan ta litt tid","edit_mastery_paths_for_title_3c0a15e1":"Rediger mestringsveier for %{title}","error_duplicating_module_4b023042":"Feil under duplisering av modul","error_rendering_duplicated_module_db821097":"Feil under gjengivelse av duplisert modul","expanded_f4493860":"Utvidet","mastery_paths_cc4096c2":"Læringsstier","module_item_module_item_name_was_successfully_dele_8626d846":"Modulelement %{module_item_name} ble slettet.","module_module_name_was_successfully_deleted_fc9e9d47":"Modul %{module_name} ble slettet.","modules_c4325335":"Moduler","move_contents_into_f3e4fd9d":"Flytt innhold inn i","move_module_90e6927e":"Flytt modul","move_module_item_f525d6c8":"Flytt modulelement","multiple_due_dates_283dd861":"Flere innleveringsfrister","must_contribute_to_the_page_fff632c":"Må bidra til siden","must_mark_as_done_91cff799":"Må merkes som ferdig","must_score_at_least_a_score_3b4f813d":"Må få minst %{score}som resultat","must_submit_the_assignment_782d025":"Må levere inn oppgaven","must_view_the_page_67eec19e":"Må se siden","not_completed_d70acea3":"ikke fullført","not_yet_completed_345a0bca":"Ennå ikke fullført","pages_e5414c2c":"Sider","prerequisites_list_62d66d12":"Forhåndskrav: %{list}","released_by_mastery_path_path_b562d741":"Utgitt av læringsstier: %{path}","select_prerequisite_module_57894963":"Velg forutsetningmodul","some_module_items_could_not_be_published_e4be3c0":"Noen moduler kunne ikke publiseres","this_assignment_is_overdue_a44bea3b":"Denne oppgaven er forsinket","title_is_required_437f9993":"Tittel påkrevet","you_scored_a_score_a5dd5561":"Du scoret et %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Innleveringen din har ikke blitt vurdert enda"},"nb-x-k12":{"collapsed_510aa02a":"Kollapset","complete_all_items_e1779257":"Fullfør alle elementer","complete_one_item_90e5fb03":"Fullfør ett element","completed_19711ce7":"Fullført","context_modulespublic":{"buttons":{"add":"Legg til modul","add_item":"Legg til punkt","update":"Oppdater Modul"},"confirm":{"delete":"Er du sikker på at du ønsker å slette denne modulen?","delete_item":"Er du sikker på at du vil fjerne dette elementet fra modulen?"},"errors":{"reorder":"Ordning feilet, vennligst forsøk igjen."},"optgroup":{"assignments":"Oppgaver","discussion_topics":"Diskusjoner","external_tools":"Eksterne verktøy","external_urls":"Eksterne URLer","files":"Filer","quizzes":"Tester"},"points_possible_short":"%{points} poeng","titles":{"add":"Legg til modul","add_item":"Legg element til %{module}","add_prerequisite":"Legg forhåndskrav til %{module}","edit":"Rediger Modulinnstillinger","edit_item":"Rediger element detaljer"}},"delete_prerequisite_title_19741947":"Slett forhåndskrav %{title}","delete_requirement_item_type_d7453a69":"Slett krav %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Dupliserer modul, dette kan ta litt tid","edit_mastery_paths_for_title_3c0a15e1":"Rediger mestringsveier for %{title}","error_duplicating_module_4b023042":"Feil under duplisering av modul","error_rendering_duplicated_module_db821097":"Feil under gjengivelse av duplisert modul","expanded_f4493860":"Utvidet","mastery_paths_cc4096c2":"Mål-stier","module_item_module_item_name_was_successfully_dele_8626d846":"Modulelement %{module_item_name} ble slettet.","module_module_name_was_successfully_deleted_fc9e9d47":"Modul %{module_name} ble slettet.","modules_c4325335":"Moduler","move_contents_into_f3e4fd9d":"Flytt innhold inn i","move_module_90e6927e":"Flytt modul","move_module_item_f525d6c8":"Flytt modulelement","multiple_due_dates_283dd861":"Flere forfallsdatoer","must_contribute_to_the_page_fff632c":"Må bidra til siden","must_mark_as_done_91cff799":"Må merkes som ferdig","must_score_at_least_a_score_3b4f813d":"Må få minst %{score}som resultat","must_submit_the_assignment_782d025":"Må levere inn oppgaven","must_view_the_page_67eec19e":"Må se siden","not_completed_d70acea3":"ikke fullført","not_yet_completed_345a0bca":"Ennå ikke fullført","pages_e5414c2c":"Sider","prerequisites_list_62d66d12":"Forhåndskrav: %{list}","released_by_mastery_path_path_b562d741":"Utgitt av læringsstier: %{path}","select_prerequisite_module_57894963":"Velg forutsetningsmodul","some_module_items_could_not_be_published_e4be3c0":"Noen moduler kunne ikke publiseres","this_assignment_is_overdue_a44bea3b":"Denne oppgaven er forsinket","title_is_required_437f9993":"Tittel påkrevet","you_scored_a_score_a5dd5561":"Du scoret et %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Innleveringen din har ikke blitt vurdert enda"},"nl":{"collapsed_510aa02a":"Invouwen","complete_all_items_e1779257":"Alle items voltooien","complete_one_item_90e5fb03":"Een item voltooien","completed_19711ce7":"Voltooid","context_modulespublic":{"buttons":{"add":"Module toevoegen","add_item":"Item toevoegen","update":"Module bijwerken"},"confirm":{"delete":"Weet je zeker dat je deze module wilt verwijderen?","delete_item":"Weet je zeker dat je dit item uit de module wilt verwijderen?"},"errors":{"reorder":"Bevestiging is mislukt, probeer het opnieuw."},"optgroup":{"assignments":"Opdrachten","discussion_topics":"Discussies","external_tools":"Externe tools","external_urls":"Externe URL\'s","files":"Bestanden","quizzes":"Toetsen"},"points_possible_short":"%{points} punten","titles":{"add":"Module toevoegen","add_item":"Item toevoegen aan %{module}","add_prerequisite":"Eerste vereiste toevoegen aan %{module}","edit":"Moduleinstellingen bewerken","edit_item":"Itemdetails bewerken"}},"delete_prerequisite_title_19741947":"Vereiste %{title} verwijderen","delete_requirement_item_type_d7453a69":"Vereiste %{item} (%{type}) verwijderen","duplicating_module_this_may_take_some_time_eef73720":"Module wordt gedupliceerd, dit kan enige tijd duren","edit_mastery_paths_for_title_3c0a15e1":"Meesterschapspaden bewerken voor %{title}","error_duplicating_module_4b023042":"Fout bij dupliceren van module","error_rendering_duplicated_module_db821097":"Fout bij weergeven van module","expanded_f4493860":"Uitgevouwen","mastery_paths_cc4096c2":"Meesterschapspaden","module_item_module_item_name_was_successfully_dele_8626d846":"Module item %{module_item_name}succesvol verwijderd.","module_module_name_was_successfully_deleted_fc9e9d47":"Module %{module_name} succesvol verwijderd.","modules_c4325335":"Modules","move_contents_into_f3e4fd9d":"Inhoud verplaatsen naar","move_module_90e6927e":"Module verplaatsen","move_module_item_f525d6c8":"Module-item verplaatsen","multiple_due_dates_283dd861":"Meerdere inleverdatums","must_contribute_to_the_page_fff632c":"Moet bijdragen aan de pagina","must_mark_as_done_91cff799":"Moet als gereed markeren","must_score_at_least_a_score_3b4f813d":"Moet minimaal een %{score} scoren","must_submit_the_assignment_782d025":"Moet de opdracht inleveren","must_view_the_page_67eec19e":"Moet de pagina weergeven","not_completed_d70acea3":"Niet voltooid","not_yet_completed_345a0bca":"Nog niet voltooid","pages_e5414c2c":"Pagina\'s","prerequisites_list_62d66d12":"Eerste vereisten %{list}","released_by_mastery_path_path_b562d741":"Uitgegeven door Leertraject: %{path}","select_prerequisite_module_57894963":"Vereiste module selecteren","some_module_items_could_not_be_published_e4be3c0":"Enkele module-items konden niet worden gepubliceerd","this_assignment_is_overdue_a44bea3b":"De inleverdatum voor deze opdracht is verstreken","title_is_required_437f9993":"Titel is verplicht","you_scored_a_score_a5dd5561":"Je hebt een %{score} gescoord.","your_submission_has_not_been_graded_yet_d6963e53":"Je inzending is nog niet beoordeeld"},"nn":{"collapsed_510aa02a":"Skjult","complete_all_items_e1779257":"Fullfør alle element","complete_one_item_90e5fb03":"Fullfør eit element","completed_19711ce7":"Fullført","context_modulespublic":{"buttons":{"add":"Legg til modul","add_item":"Legg til element","update":"Oppdater modul"},"confirm":{"delete":"Er du sikker på at du vil slette modulen?","delete_item":"Er du sikker på at du vil fjerne elementet frå modulen?"},"errors":{"reorder":"Kan ikkje omorganisere. Prøv på nytt seinare."},"optgroup":{"assignments":"Oppgåver","discussion_topics":"Diskusjonar","external_tools":"Eksterne verktøy","external_urls":"Eksterne URL-ar","files":"Filer","quizzes":"Quizar"},"points_possible_short":"%{points} poeng","titles":{"add":"Legg til modul","add_item":"Legg element til %{module}","add_prerequisite":"Legg føresetnad til %{module}","edit":"Rediger modulinnstillingar","edit_item":"Rediger elementdetaljar"}},"delete_prerequisite_title_19741947":"Slett føresetnader %{title}","delete_requirement_item_type_d7453a69":"Slett vilkår%{item}(%{type})","duplicating_module_this_may_take_some_time_eef73720":"Dupliserar modul, det kan ta litt tid","edit_mastery_paths_for_title_3c0a15e1":"Rediger meistringsstiar for %{title}","error_duplicating_module_4b023042":"Feil ved duplisering av modul","error_rendering_duplicated_module_db821097":"Feil ved gjenfinning av duplisert modul","expanded_f4493860":"Viser","mastery_paths_cc4096c2":"Meistringsstiar","module_item_module_item_name_was_successfully_dele_8626d846":"Modulelement %{module_item_name}er sletta.","module_module_name_was_successfully_deleted_fc9e9d47":"Modul %{module_name} er sletta.","modules_c4325335":"Modular","move_contents_into_f3e4fd9d":"Flytt innhald til...","move_module_90e6927e":"Flytt modul","move_module_item_f525d6c8":"Flytt modulelement","multiple_due_dates_283dd861":"Fleire innlevringsfristar","must_contribute_to_the_page_fff632c":"Må bidra til sida","must_mark_as_done_91cff799":"Må merkast som fullført","must_score_at_least_a_score_3b4f813d":"Må oppnå minst %{score}","must_submit_the_assignment_782d025":"Må levere oppgåva","must_view_the_page_67eec19e":"Må vise sida","not_completed_d70acea3":"Ikkje fullført","not_yet_completed_345a0bca":"Ikkje fullført enno","pages_e5414c2c":"Sider","prerequisites_list_62d66d12":"Føresetnader: %{list}","released_by_mastery_path_path_b562d741":"Kunngjort frå meistringssti: %{path}","select_prerequisite_module_57894963":"Vel modulen som er føresetnad","some_module_items_could_not_be_published_e4be3c0":"Nokre modulelement kunne ikkje publiserast","this_assignment_is_overdue_a44bea3b":"Innleveringsfristen for oppgåva er passert","title_is_required_437f9993":"Tittel er obligatorisk","you_scored_a_score_a5dd5561":"Du skåra %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Innleveringa di er ikkje vurdert enno"},"pl":{"collapsed_510aa02a":"Schowany","complete_all_items_e1779257":"Wypełnij wszystkie pozycje","complete_one_item_90e5fb03":"Wypełnij jedną pozycję","completed_19711ce7":"Uzupełnione","context_modulespublic":{"buttons":{"add":"Dodaj moduł","add_item":"Dodaj element","update":"Aktualizuj moduł"},"confirm":{"delete":"Czy na pewno chcesz usunąć ten moduł?","delete_item":"Czy na pewno chcesz usunąć ten element z modułu?"},"errors":{"reorder":"Zmiana kolejności nie powiodła się. Ponów próbę."},"optgroup":{"assignments":"Zadania","discussion_topics":"Dyskusje","external_tools":"Narzędzia zewnętrzne","external_urls":"Zewnętrzne adresy URL","files":"Pliki","quizzes":"Testy"},"points_possible_short":"%{points} pkt","titles":{"add":"Dodaj moduł","add_item":"Dodaj element do %{module}","add_prerequisite":"Dodaj wymóg wstępny do %{module}","edit":"Edytuj ustawienia modułu","edit_item":"Edytuj szczegółowe informacje dot. elementu"}},"delete_prerequisite_title_19741947":"Usuń warunek wstępny %{title}","delete_requirement_item_type_d7453a69":"Usuń wymóg %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Duplikowanie modułu, może to zająć pewien czas","edit_mastery_paths_for_title_3c0a15e1":"Edytuj ścieżki mistrzowskie dla %{title}","error_duplicating_module_4b023042":"Błąd podczas duplikowania modułu","error_rendering_duplicated_module_db821097":"Błąd podczas renderowania zduplikowanego modułu","expanded_f4493860":"Rozwinięte","mastery_paths_cc4096c2":"Ścieżki biegłości","module_item_module_item_name_was_successfully_dele_8626d846":"Pozycja modułu %{module_item_name} został pomyślnie skasowana.","module_module_name_was_successfully_deleted_fc9e9d47":"Moduł %{module_name}  został pomyślnie skasowany.","modules_c4325335":"Moduły","move_contents_into_f3e4fd9d":"Przenieś zawartość do","move_module_90e6927e":"Przenieś moduł","move_module_item_f525d6c8":"Przenieś element modułu","multiple_due_dates_283dd861":"Wiele terminów","must_contribute_to_the_page_fff632c":"Muszą brać udział w dyskusji na stronie","must_mark_as_done_91cff799":"Trzeba oznaczyć jako gotowe","must_score_at_least_a_score_3b4f813d":"Muszą uzyskać co najmniej %{score}","must_submit_the_assignment_782d025":"Muszą przesłać zadanie","must_view_the_page_67eec19e":"Muszą wyświetlić stronę","not_completed_d70acea3":"Nie uzupełnione","not_yet_completed_345a0bca":"Jeszcze nie uzupełnione","pages_e5414c2c":"Strony","prerequisites_list_62d66d12":"Warunki: %{list}","released_by_mastery_path_path_b562d741":"Wydane przez Mastery Path: %{path}","select_prerequisite_module_57894963":"Wybierz moduł warunkowy","some_module_items_could_not_be_published_e4be3c0":"Niektórych elementów modułu nie można opublikować","this_assignment_is_overdue_a44bea3b":"To zadanie jest po terminie","title_is_required_437f9993":"Wymagany tytuł","you_scored_a_score_a5dd5561":"Uzyskałeś %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Twoje zgłoszenie nie zostało jeszcze ocenione"},"pt":{"collapsed_510aa02a":"Fechado","complete_all_items_e1779257":"Completar Todos os Ítens","complete_one_item_90e5fb03":"Completar Um Iten","completed_19711ce7":"Concluído","context_modulespublic":{"buttons":{"add":"Adicionar módulo","add_item":"Adicionar Item","update":"Atualizar módulo"},"confirm":{"delete":"Tem certeza de que deseja excluir este módulo?","delete_item":"Tem certeza de que deseja remover este item do módulo?"},"errors":{"reorder":"Falha na reordenação, tente novamente."},"optgroup":{"assignments":"Tarefas","discussion_topics":"Discussões","external_tools":"Ferramentas externas","external_urls":"URLs externos","files":"Ficheiros","quizzes":"Testes"},"points_possible_short":"%{points} pts","titles":{"add":"Adicionar módulo","add_item":"Adicionar item a %{module}","add_prerequisite":"Adicionar pré-requisito a %{module}","edit":"Editar configurações do módulo","edit_item":"Editar detalhes do item"}},"delete_prerequisite_title_19741947":"Eliminar pré-requisito %{title}","delete_requirement_item_type_d7453a69":"Eliminar necessidade %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Duplicar Módulo, isso pode levar algum tempo","edit_mastery_paths_for_title_3c0a15e1":"Editar Mastery Paths para %{title}","error_duplicating_module_4b023042":"Módulo de duplicação de erros","error_rendering_duplicated_module_db821097":"Erro ao renderizar o módulo duplicado","expanded_f4493860":"Expandido","mastery_paths_cc4096c2":"Circuito Principal","module_item_module_item_name_was_successfully_dele_8626d846":"O Módulo %{module_item_name} foi apagado com sucesso.","module_module_name_was_successfully_deleted_fc9e9d47":"O Módulo %{module_name} foi apagado com sucesso.","modules_c4325335":"Módulos","move_contents_into_f3e4fd9d":"Mover conteúdo para","move_module_90e6927e":"Mover Módulo","move_module_item_f525d6c8":"Mover item do módulo","multiple_due_dates_283dd861":"Datas de entrega múltiplas","must_contribute_to_the_page_fff632c":"Deve contribuir para a página","must_mark_as_done_91cff799":"Tem de marcar como terminado","must_score_at_least_a_score_3b4f813d":"Deve pontuar ao menos %{score}","must_submit_the_assignment_782d025":"Deve enviar a tarefa","must_view_the_page_67eec19e":"Deve visualizar a página","not_completed_d70acea3":"Não está completo","not_yet_completed_345a0bca":"Ainda não está completo","pages_e5414c2c":"Páginas","prerequisites_list_62d66d12":"Pré-requisitos: %{list}","released_by_mastery_path_path_b562d741":"Lançado pelo Mastery Path: %{path}","select_prerequisite_module_57894963":"Seleccionar módulo pré-requisito","some_module_items_could_not_be_published_e4be3c0":"Alguns itens do módulo não puderam ser publicados","this_assignment_is_overdue_a44bea3b":"O prazo desta tarefa venceu.","title_is_required_437f9993":"É necessário um título","you_scored_a_score_a5dd5561":"pontuou %{score}","your_submission_has_not_been_graded_yet_d6963e53":"A sua tarefa ainda não foi atualizada"},"pt-BR":{"collapsed_510aa02a":"Recolhido","complete_all_items_e1779257":"Completar Todos os Itens","complete_one_item_90e5fb03":"Completar Um Item","completed_19711ce7":"Completo","context_modulespublic":{"buttons":{"add":"Adicionar módulo","add_item":"Adicionar item","update":"Atualizar módulo"},"confirm":{"delete":"Tem certeza que deseja excluir este módulo?","delete_item":"Tem certeza que deseja remover este item do módulo?"},"errors":{"reorder":"Falha na reordenação, tente novamente."},"optgroup":{"assignments":"Tarefas","discussion_topics":"Fóruns","external_tools":"Ferramentas externas","external_urls":"URLs externas","files":"Arquivos","quizzes":"Testes"},"points_possible_short":"%{points} pts","titles":{"add":"Adicionar módulo","add_item":"Adicionar item ao %{module}","add_prerequisite":"Adicionar pré-requisito ao %{module}","edit":"Editar configurações do módulo","edit_item":"Editar detalhes do item"}},"delete_prerequisite_title_19741947":"Excluir pré-requisito %{title}","delete_requirement_item_type_d7453a69":"Excluir requisito %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Duplicando módulo, isso pode levar algum tempo","edit_mastery_paths_for_title_3c0a15e1":"Editar Caminhos de Domínio para %{title}","error_duplicating_module_4b023042":"Erro ao duplicar módulo","error_rendering_duplicated_module_db821097":"Erro ao renderizar módulo duplicado","expanded_f4493860":"Expandido","mastery_paths_cc4096c2":"Caminhos de Domínio","module_item_module_item_name_was_successfully_dele_8626d846":"Item do módulo %{module_item_name} foi excluído com sucesso.","module_module_name_was_successfully_deleted_fc9e9d47":"Módulo %{module_name} foi excluído com sucesso.","modules_c4325335":"Módulos","move_contents_into_f3e4fd9d":"Mover conteúdo para","move_module_90e6927e":"Mover módulo","move_module_item_f525d6c8":"Mover item do módulo","multiple_due_dates_283dd861":"Vários prazos de entrega","must_contribute_to_the_page_fff632c":"Deve contribuir para a página","must_mark_as_done_91cff799":"Deve marcar como concluído","must_score_at_least_a_score_3b4f813d":"Deve pontuar ao menos %{score}","must_submit_the_assignment_782d025":"Deve enviar a tarefa","must_view_the_page_67eec19e":"Deve visualizar a página","not_completed_d70acea3":"Não concluído","not_yet_completed_345a0bca":"Ainda não concluído","pages_e5414c2c":"Páginas","prerequisites_list_62d66d12":"Pré-requisitos: %{list}","released_by_mastery_path_path_b562d741":"Liberado por caminho de domínio: %{path}","select_prerequisite_module_57894963":"Selecionar módulo do pré-requisito","some_module_items_could_not_be_published_e4be3c0":"Alguns itens do módulo não foram publicados","this_assignment_is_overdue_a44bea3b":"O prazo desta tarefa venceu.","title_is_required_437f9993":"Título é necessário","you_scored_a_score_a5dd5561":"Você pontuou %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"O seu envio ainda não foi avaliado"},"ru":{"collapsed_510aa02a":"Все свернуто","complete_all_items_e1779257":"Завершить все элементы","complete_one_item_90e5fb03":"Завершить элемент","completed_19711ce7":"Завершено","context_modulespublic":{"buttons":{"add":"Добавить модуль","add_item":"Добавить элемент","update":"Обновить модуль"},"confirm":{"delete":"Действительно хотите удалить этот модуль?","delete_item":"Действительно хотите удалить этот элемент из модуля?"},"errors":{"reorder":"Сбой отметки, повторите попытку"},"optgroup":{"assignments":"Задания","discussion_topics":"Обсуждения","external_tools":"Внешние инструменты","external_urls":"Внешние URL-адреса","files":"Файлы","quizzes":"Тесты"},"points_possible_short":"%{points} баллов","titles":{"add":"Добавить модуль","add_item":"Добавить элемент к %{module}","add_prerequisite":"Добавить предварительные условия к %{module}","edit":"Редактировать настройки модуля","edit_item":"Редактировать сведения об элементе"}},"delete_prerequisite_title_19741947":"Удалить предварительные условия %{title}","delete_requirement_item_type_d7453a69":"Удалить требование %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Создается копия модуля, это может занять некоторое время","edit_mastery_paths_for_title_3c0a15e1":"Редактировать пути усваивания для %{title}","error_duplicating_module_4b023042":"Ошибка при копировании модуля","error_rendering_duplicated_module_db821097":"Ошибка при передаче скопированного модуля","expanded_f4493860":"В развернутом виде","mastery_paths_cc4096c2":"Пути усвоения","module_item_module_item_name_was_successfully_dele_8626d846":"Элемент модуля %{module_item_name} был успешно удален.","module_module_name_was_successfully_deleted_fc9e9d47":"Модуль %{module_name} был успешно удален.","modules_c4325335":"Модули","move_contents_into_f3e4fd9d":"Переместить содержимое в","move_module_90e6927e":"Переместить модуль","move_module_item_f525d6c8":"Переместить элемент модуля","multiple_due_dates_283dd861":"Множественные даты выполнения","must_contribute_to_the_page_fff632c":"Должно быть включено в страницу","must_mark_as_done_91cff799":"Должно быть отмечено, как выполненное","must_score_at_least_a_score_3b4f813d":"Нужно набрать не менее %{score}","must_submit_the_assignment_782d025":"Необходимо отправить назначение","must_view_the_page_67eec19e":"Необходимо просмотреть страницу","not_completed_d70acea3":"Не завершено","not_yet_completed_345a0bca":"Еще не завершено","pages_e5414c2c":"Страницы","prerequisites_list_62d66d12":"Предварительные условия: %{list}","released_by_mastery_path_path_b562d741":"Освобождено путем достижения владения: %{path}","select_prerequisite_module_57894963":"Выбрать обязательный предварительный модуль","some_module_items_could_not_be_published_e4be3c0":"Некоторые элементы модуля не могут быть опубликованы","this_assignment_is_overdue_a44bea3b":"Это задание просрочено","title_is_required_437f9993":"Требуется название","you_scored_a_score_a5dd5561":"Вы набрали %{score}","your_submission_has_not_been_graded_yet_d6963e53":"Ваше выполненное задание еще не было оценено"},"sl":{"collapsed_510aa02a":"Strnjeno","complete_all_items_e1779257":"Zaključi vse elemente","complete_one_item_90e5fb03":"Zaključi en element","completed_19711ce7":"Zaključeno","duplicating_module_this_may_take_some_time_eef73720":"Podvajanje modula; to lahko nekaj časa traja.","edit_mastery_paths_for_title_3c0a15e1":"Uredi napredovanje v odličnosti za %{title}","error_duplicating_module_4b023042":"Napaka pri podvajanju modula","error_rendering_duplicated_module_db821097":"Napaka pri prikazovanju podvojenega modula","expanded_f4493860":"Razširjeno","mastery_paths_cc4096c2":"Napredovanja v odličnosti","module_item_module_item_name_was_successfully_dele_8626d846":"Element modula %{module_item_name} je uspešno izbrisan.","module_module_name_was_successfully_deleted_fc9e9d47":"Modul %{module_name} je uspešno izbrisan.","modules_c4325335":"Moduli","move_contents_into_f3e4fd9d":"Premakni vsebino v","move_module_90e6927e":"Premakni modul","move_module_item_f525d6c8":"Premakni element modula","multiple_due_dates_283dd861":"Več rokov","must_contribute_to_the_page_fff632c":"Mora prispevati k strani","must_mark_as_done_91cff799":"Mora označiti kot dokončano.","must_score_at_least_a_score_3b4f813d":"Mora doseči rezultat vsaj %{score}","must_submit_the_assignment_782d025":"Mora poslati nalogo.","must_view_the_page_67eec19e":"Mora si ogledati stran","not_completed_d70acea3":"Ni zaključeno.","not_yet_completed_345a0bca":"Še ni zaključeno.","pages_e5414c2c":"Strani","released_by_mastery_path_path_b562d741":"Izdano s funkcionalnostjo napredovanja v odličnosti: %{path}","select_prerequisite_module_57894963":"Izberi modul predpogojev","some_module_items_could_not_be_published_e4be3c0":"Nekaterih elementov modulov ni bilo mogoče objaviti.","this_assignment_is_overdue_a44bea3b":"Rok za to nalogo je potekel.","title_is_required_437f9993":"Zahtevan je naslov.","you_scored_a_score_a5dd5561":"Dosegli ste %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Vaša oddaja še ni ocenjena."},"sv":{"collapsed_510aa02a":"Förminskad","complete_all_items_e1779257":"Slutför alla objekt","complete_one_item_90e5fb03":"Slutför ett objekt","completed_19711ce7":"Slutförd","context_modulespublic":{"buttons":{"add":"Lägg till modul","add_item":"Lägg till objekt","update":"Uppdatera modul"},"confirm":{"delete":"Vill du verkligen radera den här modulen?","delete_item":"Vill du verkligen ta bort det här objektet från modulen?"},"errors":{"reorder":"Inspelning misslyckades, försök igen."},"optgroup":{"assignments":"Uppgifter","discussion_topics":"Diskussioner","external_tools":"Externa verktyg","external_urls":"Externa URL:er","files":"Filer","quizzes":"Quiz"},"points_possible_short":"%{points} poäng","titles":{"add":"Lägg till modul","add_item":"Lägg till innehåll i %{module}","add_prerequisite":"Lägg till förutsättning för %{module}","edit":"Redigera inställningar för modul","edit_item":"Redigera objektsdetaljer"}},"delete_prerequisite_title_19741947":"Ta bort förutsättning %{title}","delete_requirement_item_type_d7453a69":"Ta bort krav %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Duplicerar modul. Detta kan ta lång tid.","edit_mastery_paths_for_title_3c0a15e1":"Redigera måluppfyllelsevägar för %{title}","error_duplicating_module_4b023042":"Fel vid duplicering av modulen","error_rendering_duplicated_module_db821097":"Fel med att göra duplicerad modul","expanded_f4493860":"Förstorad","mastery_paths_cc4096c2":"Måluppfyllelsevägar","module_item_module_item_name_was_successfully_dele_8626d846":"Modulobjektet %{module_item_name} raderades","module_module_name_was_successfully_deleted_fc9e9d47":"Modulen %{module_name} raderades.","modules_c4325335":"Moduler","move_contents_into_f3e4fd9d":"Flytta innehåll till","move_module_90e6927e":"Flytta modul","move_module_item_f525d6c8":"Flytta modulobjekt","multiple_due_dates_283dd861":"Flera inlämningsdatum","must_contribute_to_the_page_fff632c":"Måste bidra till sidan","must_mark_as_done_91cff799":"Måste markeras som färdig","must_score_at_least_a_score_3b4f813d":"Måste få minst %{score}","must_submit_the_assignment_782d025":"Måste skicka in uppgiften","must_view_the_page_67eec19e":"Måste visa sidan","not_completed_d70acea3":"Inte färdig","not_yet_completed_345a0bca":"Inte färdig än","pages_e5414c2c":"Sidor","prerequisites_list_62d66d12":"Förutsättningar: %{list}","released_by_mastery_path_path_b562d741":"Släppt av målväg: %{path}","select_prerequisite_module_57894963":"Välj förutsättningsmodul","some_module_items_could_not_be_published_e4be3c0":"Vissa modulobjekt kunde inte publiceras","this_assignment_is_overdue_a44bea3b":"Uppgiften är sen","title_is_required_437f9993":"Titel krävs","you_scored_a_score_a5dd5561":"Du fick %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Din inlämning har inte bedömts än"},"sv-x-k12":{"collapsed_510aa02a":"Förminskad","complete_all_items_e1779257":"Slutför alla objekt","complete_one_item_90e5fb03":"Slutför ett objekt","completed_19711ce7":"Slutförd","context_modulespublic":{"buttons":{"add":"Lägg till modul","add_item":"Lägg till objekt","update":"Uppdatera modul"},"confirm":{"delete":"Vill du verkligen radera den här modulen?","delete_item":"Vill du verkligen ta bort det här objektet från modulen?"},"errors":{"reorder":"Inspelning misslyckades, försök igen."},"optgroup":{"assignments":"Uppgifter","discussion_topics":"Diskussioner","external_tools":"Externa verktyg","external_urls":"Externa URL:er","files":"Filer","quizzes":"Quiz"},"points_possible_short":"%{points} poäng","titles":{"add":"Lägg till modul","add_item":"Lägg till innehåll i %{module}","add_prerequisite":"Lägg till förutsättning för %{module}","edit":"Redigera inställningar för modul","edit_item":"Redigera objektsdetaljer"}},"delete_prerequisite_title_19741947":"Ta bort förutsättning %{title}","delete_requirement_item_type_d7453a69":"Ta bort krav %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Duplicerar modul. Detta kan ta lång tid.","edit_mastery_paths_for_title_3c0a15e1":"Redigera måluppfyllelsevägar för %{title}","error_duplicating_module_4b023042":"Fel vid duplicering av modulen","error_rendering_duplicated_module_db821097":"Fel med att göra duplicerad modul","expanded_f4493860":"Förstorad","mastery_paths_cc4096c2":"Måluppfyllelsevägar","module_item_module_item_name_was_successfully_dele_8626d846":"Modulobjektet %{module_item_name} raderades","module_module_name_was_successfully_deleted_fc9e9d47":"Modulen %{module_name} raderades.","modules_c4325335":"Moduler","move_contents_into_f3e4fd9d":"Flytta innehåll till","move_module_90e6927e":"Flytta modul","move_module_item_f525d6c8":"Flytta modulobjekt","multiple_due_dates_283dd861":"Flera inlämningsdatum","must_contribute_to_the_page_fff632c":"Måste bidra till sidan","must_mark_as_done_91cff799":"Måste markeras som färdig","must_score_at_least_a_score_3b4f813d":"Måste få minst %{score}","must_submit_the_assignment_782d025":"Måste skicka in uppgiften","must_view_the_page_67eec19e":"Måste visa sidan","not_completed_d70acea3":"Inte färdig","not_yet_completed_345a0bca":"Inte färdig än","pages_e5414c2c":"Sidor","prerequisites_list_62d66d12":"Förutsättningar: %{list}","released_by_mastery_path_path_b562d741":"Släppt av målväg: %{path}","select_prerequisite_module_57894963":"Välj förutsättningsmodul","some_module_items_could_not_be_published_e4be3c0":"Vissa modulobjekt kunde inte publiceras","this_assignment_is_overdue_a44bea3b":"Uppgiften är sen","title_is_required_437f9993":"Titel krävs","you_scored_a_score_a5dd5561":"Du fick %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Din inlämning har inte bedömts än"},"tr":{"collapsed_510aa02a":"Daraltılmış","complete_all_items_e1779257":"Tüm Öğeleri Tamamla","complete_one_item_90e5fb03":"Bir Öğeyi Tamamla","completed_19711ce7":"Tamamlandı","context_modulespublic":{"buttons":{"add":"Modül Ekle","add_item":"Öğe Ekle","update":"Modülü Güncelle"},"confirm":{"delete":"Are you sure you want to delete this module?","delete_item":"Bu öğeyi modülden çıkarmak istediğinize emin misiniz?"},"errors":{"reorder":"Yeniden sıralama başarısız, lütfen tekrar deneyin"},"optgroup":{"assignments":"Ödevler","discussion_topics":"Tartışmalar","external_tools":"Harici Araçlar","external_urls":"Harici Web adresleri","files":"Dosyalar","quizzes":"Kısa sınavlar"},"points_possible_short":"%{points} puan","titles":{"add":"Modül Ekle","add_item":"%{module} Modülüne Öğe Ekle","add_prerequisite":"%{module} modülüne ön koşul ekle","edit":"Modül Ayarlarını Düzenle","edit_item":"Öğe ayrıntılarını düzenle"}},"edit_mastery_paths_for_title_3c0a15e1":"%{title} için Yeterlilik Süreçlerini Düzenleyin","expanded_f4493860":"Genişletilmiş","mastery_paths_cc4096c2":"Yeterlilik Süreçleri","module_item_module_item_name_was_successfully_dele_8626d846":"%{module_item_name} modül öğesi başarıyla silindi.","module_module_name_was_successfully_deleted_fc9e9d47":"%{module_name} modülü başarıyla silindi.","modules_c4325335":"Modül","move_contents_into_f3e4fd9d":"İçeriği Şuraya Taşı","move_module_90e6927e":"Modülü Taşı","move_module_item_f525d6c8":"Modül Öğesini Taşı","must_contribute_to_the_page_fff632c":"Sayfaya katkı sağlamalı","must_mark_as_done_91cff799":"Tamamlandı olarak işaretlenmeli","must_score_at_least_a_score_3b4f813d":"En az %{score} puan alınmalı","must_submit_the_assignment_782d025":"Ödevi göndermeli","must_view_the_page_67eec19e":"Sayfayı görüntülemeli","not_completed_d70acea3":"Tamamlanmadı","not_yet_completed_345a0bca":"Henüz tamamlanmadı","pages_e5414c2c":"Sayfalar","this_assignment_is_overdue_a44bea3b":"Bu ödevin süresi geçmiş","your_submission_has_not_been_graded_yet_d6963e53":"Gönderiniz henüz notlandırılmadı"},"uk":{"collapsed_510aa02a":"Згорнуто","complete_all_items_e1779257":"Завершити всі елементи","complete_one_item_90e5fb03":"Завершити один пункт","completed_19711ce7":"Завершено","edit_mastery_paths_for_title_3c0a15e1":"Редагувати шляхи майстерності для  %{title}","error_duplicating_module_4b023042":"Помилка дублювання модуля","error_rendering_duplicated_module_db821097":"Помилка при передачі дубліката модуля","expanded_f4493860":"Розгонуто","mastery_paths_cc4096c2":"Шляхи досягнення майстерності","module_item_module_item_name_was_successfully_dele_8626d846":"Пункт модуля %{module_item_name} повністю видалено.","module_module_name_was_successfully_deleted_fc9e9d47":"Модуль %{module_name}  був повністю видалений.","modules_c4325335":"Розділи","move_contents_into_f3e4fd9d":"Перемістити інформацію про вміст","move_module_90e6927e":"Перемістити Модуль","move_module_item_f525d6c8":"Перемістити Елемент Модуля","multiple_due_dates_283dd861":"Кілька термінів","must_contribute_to_the_page_fff632c":"Необхідно внести свій вклад в сторінку","must_mark_as_done_91cff799":"Необхідно позначити як виконане","must_score_at_least_a_score_3b4f813d":"Потрібно набрати принаймні %{score}","must_submit_the_assignment_782d025":"Потрібно підтвердити завдання","must_view_the_page_67eec19e":"Потрібно переглянути цю сторінку","not_completed_d70acea3":"Не завершено ","not_yet_completed_345a0bca":"Ще не завершено ","pages_e5414c2c":"Сторінки","released_by_mastery_path_path_b562d741":"Реалізовано за шляхом: %{path}","select_prerequisite_module_57894963":"Виберіть необхідний модуль","some_module_items_could_not_be_published_e4be3c0":"Деякі елементи розділу не можуть бути опубліковані","this_assignment_is_overdue_a44bea3b":"Це завдання прострочено","title_is_required_437f9993":"Заголовок обов\'язковий","you_scored_a_score_a5dd5561":"Ваша оцінка %{score}","your_submission_has_not_been_graded_yet_d6963e53":"Ваше відправлення ще не оцінено"},"zh-Hans":{"collapsed_510aa02a":"折叠","complete_all_items_e1779257":"完成所有项目","complete_one_item_90e5fb03":"完成一个项目","completed_19711ce7":"完成","context_modulespublic":{"buttons":{"add":"添加单元","add_item":"添加项目","update":"更新单元"},"confirm":{"delete":"是否确定要删除此单元?","delete_item":"是否确定要从该单元删除此项目?"},"errors":{"reorder":"重新排序失败，请重试。"},"optgroup":{"assignments":"作业","discussion_topics":"讨论","external_tools":"外部工具","external_urls":"外部 URL","files":"文件","quizzes":"测验"},"points_possible_short":"%{points} 分","titles":{"add":"添加单元","add_item":"添加项目至%{module}","add_prerequisite":"添加先修课程至%{module}","edit":"编辑单元设置","edit_item":"编辑项目详细信息"}},"delete_prerequisite_title_19741947":"删除先修课程 %{title}","delete_requirement_item_type_d7453a69":"删除要求 %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"正在复制单元，这可能需要一些时间","edit_mastery_paths_for_title_3c0a15e1":"编辑主路径%{title}","error_duplicating_module_4b023042":"复制单元时出错","error_rendering_duplicated_module_db821097":"呈现复制的单元时出错","expanded_f4493860":"已扩展","mastery_paths_cc4096c2":"掌握路径","module_item_module_item_name_was_successfully_dele_8626d846":"单元项目 %{module_item_name} 已被成功删除。","module_module_name_was_successfully_deleted_fc9e9d47":"单元%{module_name} 已被成功删除。","modules_c4325335":"单元","move_contents_into_f3e4fd9d":"将内容移动到","move_module_90e6927e":"移动单元","move_module_item_f525d6c8":"移动单元项目","multiple_due_dates_283dd861":"多个到期日","must_contribute_to_the_page_fff632c":"必须有助于页面","must_mark_as_done_91cff799":"必须标记为已完成","must_score_at_least_a_score_3b4f813d":"必须得分至少为%{score}","must_submit_the_assignment_782d025":"必须提交作业","must_view_the_page_67eec19e":"必须查看页面","not_completed_d70acea3":"未完成","not_yet_completed_345a0bca":"尚未完成","pages_e5414c2c":"页面","prerequisites_list_62d66d12":"先决条件：%{list}","released_by_mastery_path_path_b562d741":"通过掌握路径发布：%{path}","select_prerequisite_module_57894963":"选择先修课程单元","some_module_items_could_not_be_published_e4be3c0":"一些单元项目无法发布","this_assignment_is_overdue_a44bea3b":"此作业已过期。","title_is_required_437f9993":"需要标题","you_scored_a_score_a5dd5561":"您的得分为 %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"您的提交尚未评分。"},"zh-Hant":{"collapsed_510aa02a":"已收起","complete_all_items_e1779257":"完成所有項目","complete_one_item_90e5fb03":"完成一個項目","completed_19711ce7":"已完成","context_modulespublic":{"buttons":{"add":"添加單元","add_item":"添加項目","update":"更新單元"},"confirm":{"delete":"您是否確定要刪除此單元？","delete_item":"您是否確定要從單元中移除此項目？"},"errors":{"reorder":"重新排序失敗，請再試一次。"},"optgroup":{"assignments":"作業列表","discussion_topics":"討論區","external_tools":"外部工具","external_urls":"外部 URL","files":"檔案","quizzes":"測驗"},"points_possible_short":"%{points} 分","titles":{"add":"添加單元","add_item":"添加項目至 %{module}","add_prerequisite":"添加先決條件至 %{module}","edit":"編輯單元設定","edit_item":"編輯項目詳細資料"}},"delete_prerequisite_title_19741947":"刪除先決條件 %{title}","delete_requirement_item_type_d7453a69":"刪除要求 %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"正在複製單元，可能需要一些時間","edit_mastery_paths_for_title_3c0a15e1":"編輯路徑%{title}","error_duplicating_module_4b023042":"複製單元時發生錯誤","error_rendering_duplicated_module_db821097":"顯示複製單元時發生錯誤","expanded_f4493860":"已展開","mastery_paths_cc4096c2":"掌握歷程","module_item_module_item_name_was_successfully_dele_8626d846":"單元項 %{module_item_name} 已經成功刪除。","module_module_name_was_successfully_deleted_fc9e9d47":"單元 %{module_name} 已經成功刪除。","modules_c4325335":"單元","move_contents_into_f3e4fd9d":"移動內容至","move_module_90e6927e":"移動單元","move_module_item_f525d6c8":"移動單元項目","multiple_due_dates_283dd861":"多個截止日期","must_contribute_to_the_page_fff632c":"必須參與該頁面","must_mark_as_done_91cff799":"必須標記為已完成","must_score_at_least_a_score_3b4f813d":"得分必須至少為 %{score}","must_submit_the_assignment_782d025":"必須提交作業","must_view_the_page_67eec19e":"必須檢視頁面","not_completed_d70acea3":"未完成","not_yet_completed_345a0bca":"尚未完成","pages_e5414c2c":"頁面","prerequisites_list_62d66d12":"先決條件：%{list}","released_by_mastery_path_path_b562d741":"從掌握歷程釋放：%{path}","select_prerequisite_module_57894963":"選取必修單元","some_module_items_could_not_be_published_e4be3c0":"部分單元項目不能發佈","this_assignment_is_overdue_a44bea3b":"此作業已過期","title_is_required_437f9993":"標題為必填","you_scored_a_score_a5dd5561":"您獲得分數為 %{score}。","your_submission_has_not_been_graded_yet_d6963e53":"您提交的文檔尚未評分"}}'))
var D=v["default"].scoped("context_modulespublic")
var S=i("ouhR")
var A=i.n(S)
var T=i("Vj0+")
const I={}
I.setWindowLocation=function(e){window.location=e}
I.externalUrlLinkClick=function(e,t){e.preventDefault()
this.setWindowLocation(Object(T["a"])(t.attr("data-item-href")))}.bind(I)
var P=I
var O=i("veHt")
Object(k["a"])(JSON.parse('{"ar":{"viewsContextModules":{"context_module":{"unpublish":"إلغاء النشر"},"context_modules":{"publish":"نشر"}}},"cy":{"viewsContextModules":{"context_module":{"unpublish":"Dad-gyhoeddi"},"context_modules":{"publish":"Cyhoeddi"}}},"da":{"viewsContextModules":{"context_module":{"unpublish":"Annuller offentliggørelse"},"context_modules":{"publish":"Offentliggør"}}},"da-x-k12":{"viewsContextModules":{"context_module":{"unpublish":"Annuller offentliggørelse"},"context_modules":{"publish":"Offentliggør"}}},"de":{"viewsContextModules":{"context_module":{"unpublish":"Veröffentlichung rückgängig machen"},"context_modules":{"publish":"Veröffentlichen"}}},"el":{"viewsContextModules":{"context_module":{"unpublish":"Απενεργοποιήστε τη Δημοσίευση"},"context_modules":{"publish":"Δημοσίευση"}}},"en-AU":{"viewsContextModules":{"context_module":{"unpublish":"Unpublish"},"context_modules":{"publish":"Publish"}}},"en-AU-x-unimelb":{"viewsContextModules":{"context_module":{"unpublish":"Unpublish"},"context_modules":{"publish":"Publish"}}},"en-CA":{"viewsContextModules":{"context_module":{"unpublish":"Unpublish"},"context_modules":{"publish":"Publish"}}},"en-GB":{"viewsContextModules":{"context_module":{"unpublish":"Unpublish"},"context_modules":{"publish":"Publish"}}},"en-GB-x-ukhe":{"viewsContextModules":{"context_module":{"unpublish":"Unpublish"},"context_modules":{"publish":"Publish"}}},"es":{"viewsContextModules":{"context_module":{"unpublish":"Cancelar publicación"},"context_modules":{"publish":"Publicar"}}},"fa":{"viewsContextModules":{"context_module":{"unpublish":"لغو انتشار"},"context_modules":{"publish":"انتشار"}}},"fi":{"viewsContextModules":{"context_module":{"unpublish":"Peruuta julkaisu"},"context_modules":{"publish":"Julkaise"}}},"fr":{"viewsContextModules":{"context_module":{"unpublish":"Ne pas publier"},"context_modules":{"publish":"Publier"}}},"fr-CA":{"viewsContextModules":{"context_module":{"unpublish":"Annuler la publication"},"context_modules":{"publish":"Publier"}}},"he":{"viewsContextModules":{"context_module":{"unpublish":"ביטול פרסום"},"context_modules":{"publish":"פרסום"}}},"ht":{"viewsContextModules":{"context_module":{"unpublish":"Pa Pibliye"},"context_modules":{"publish":"Pibliye"}}},"hu":{"viewsContextModules":{"context_module":{"unpublish":"Publikálás visszavonása"},"context_modules":{"publish":"Publikálás"}}},"hy":{"viewsContextModules":{"context_module":{"unpublish":"Չեղարկել հրապարակումը"},"context_modules":{"publish":"Հրապարակել"}}},"is":{"viewsContextModules":{"context_module":{"unpublish":"Fela"},"context_modules":{"publish":"Birta"}}},"it":{"viewsContextModules":{"context_module":{"unpublish":"Annulla pubblicazione"},"context_modules":{"publish":"Pubblica"}}},"ja":{"viewsContextModules":{"context_module":{"unpublish":"未公開"},"context_modules":{"publish":"公開"}}},"ko":{"viewsContextModules":{"context_module":{"unpublish":"게시 취소"},"context_modules":{"publish":"게시"}}},"mi":{"viewsContextModules":{"context_module":{"unpublish":"kaore i tāngia"},"context_modules":{"publish":"Whakaputa"}}},"nb":{"viewsContextModules":{"context_module":{"unpublish":"Avpubliser"},"context_modules":{"publish":"Publiser"}}},"nb-x-k12":{"viewsContextModules":{"context_module":{"unpublish":"Avpubliser"},"context_modules":{"publish":"Publiser"}}},"nl":{"viewsContextModules":{"context_module":{"unpublish":"Publicatie ongedaan maken"},"context_modules":{"publish":"Publiceren"}}},"nn":{"viewsContextModules":{"context_module":{"unpublish":"Opphev publisering"},"context_modules":{"publish":"Publiser"}}},"pl":{"viewsContextModules":{"context_module":{"unpublish":"Cofnij publikowanie"},"context_modules":{"publish":"Publikuj"}}},"pt":{"viewsContextModules":{"context_module":{"unpublish":"Anular publicação"},"context_modules":{"publish":"Publicar"}}},"pt-BR":{"viewsContextModules":{"context_module":{"unpublish":"Despublicar"},"context_modules":{"publish":"Publicar"}}},"ru":{"viewsContextModules":{"context_module":{"unpublish":"Отменить публикацию"},"context_modules":{"publish":"Разместить"}}},"sv":{"viewsContextModules":{"context_module":{"unpublish":"Avpublicera"},"context_modules":{"publish":"Publicera"}}},"sv-x-k12":{"viewsContextModules":{"context_module":{"unpublish":"Avpublicera"},"context_modules":{"publish":"Publicera"}}},"tr":{"viewsContextModules":{"context_module":{"unpublish":"Yayından kaldır"},"context_modules":{"publish":"Yayınla"}}},"zh-Hans":{"viewsContextModules":{"context_module":{"unpublish":"未发布"},"context_modules":{"publish":"发布"}}},"zh-Hant":{"viewsContextModules":{"context_module":{"unpublish":"取消發佈"},"context_modules":{"publish":"發佈"}}}}'))
var F=v["default"].scoped("viewsContextModules")
i("7LJr")
var U=function(e,t){return function(){return e.apply(t,arguments)}},R=function(e,t){for(var i in t)N.call(t,i)&&(e[i]=t[i])
function o(){this.constructor=e}o.prototype=t.prototype
e.prototype=new o
e.__super__=t.prototype
return e},N={}.hasOwnProperty
var L=function(e){R(t,e)
function t(){this.onKeyDown=U(this.onKeyDown,this)
this.error=U(this.error,this)
this.success=U(this.success,this)
this.toggleWorkflowState=U(this.toggleWorkflowState,this)
return t.__super__.constructor.apply(this,arguments)}t.optionProperty("modules")
t.prototype.toggleWorkflowState=function(e){var t,i
e.preventDefault()
this.$context_module=A()(e.target).parents(".context_module")
t=this.$context_module.data("module-url")
this.workflow_state=this.$context_module.data("workflow-state")
i={url:t,type:"PUT",beforeSend:(o=this,function(){return o.$context_module.loadingImage()}),success:this.success,error:this.error}
var o
this.setRequestPublishOptions(i)
return A.a.ajax(i)}
t.prototype.success=function(e){this.$context_module.data("workflow-state",e.context_module.workflow_state)
"unpublished"===e.context_module.workflow_state?this.addUnpublishAttributes():this.addPublishAttributes()
return this.$context_module.loadingImage("remove")}
t.prototype.error=function(e){alert("This module could not be published")
return this.$context_module.loadingImage("remove")}
t.prototype.setRequestPublishOptions=function(e){return"active"===this.workflow_state?e.data="unpublish=1":e.data="publish=1"}
t.prototype.addUnpublishAttributes=function(){this.$context_module.find(".workflow-state-action").text(F.t("context_modules.publish","Publish"))
this.$context_module.find(".workflow-state-icon").addClass("publish-module-link").removeClass("unpublish-module-link")
this.$context_module.find(".draft-text").removeClass("hide")
return this.$context_module.addClass("unpublished_module")}
t.prototype.addPublishAttributes=function(){this.$context_module.find(".workflow-state-action").text(F.t("context_module.unpublish","Unpublish"))
this.$context_module.find(".workflow-state-icon").addClass("unpublish-module-link").removeClass("publish-module-link")
this.$context_module.find(".draft-text").addClass("hide")
return this.$context_module.removeClass("unpublished_module")}
t.prototype.keyCodes={32:"Space",38:"UpArrow",40:"DownArrow"}
t.prototype.moduleSelector="div.context_module"
t.prototype.itemSelector="table.context_module_item"
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
this.$contextModules=A()("#context_modules")
return this.$contextModules.parent().on("keydown",this.onKeyDown)}
t.prototype.onKeyDown=function(e){var t,i
t=A()(e.target)
i="on"+this.keyCodes[e.keyCode]+"Key"
if(this[i]){e.preventDefault()
return this[i].call(this,e,t)}}
t.prototype.getFocusedElement=function(e){var t
t=e.parents(this.itemSelector).first()
this.empty(t)||(e=t)
if(!e.is(this.itemSelector)){t=e.parents(this.moduleSelector).first()
this.empty(t)||(e=t)
e.is(this.moduleSelector)||(e=this.$contextModules)}return e}
t.prototype.onUpArrowKey=function(e,t){var i,o,s
i=this.getFocusedElement(t)
if(i.is(this.itemSelector)){s=i.prev(this.itemSelector);(this.empty(s)||this.$contextModules.data("dragModule"))&&(s=i.parents(this.moduleSelector).first())}else if(i.is(this.moduleSelector))if(this.$contextModules.data("dragItem"))s=this.$contextModules.data("dragItemModule")
else{s=i.prev(this.moduleSelector)
if(this.empty(s))s=this.$contextModules
else if(!this.$contextModules.data("dragModule")){o=s.find(this.itemSelector).last()
this.empty(o)||(s=o)}}if(s&&!this.empty(s))return s.focus()}
t.prototype.onDownArrowKey=function(e,t){var i,o,s
i=this.getFocusedElement(t)
if(i.is(this.itemSelector)){o=i.next(this.itemSelector)
if(this.empty(o)&&!this.$contextModules.data("dragItem")){s=i.parents(this.moduleSelector).first()
o=s.next(this.moduleSelector)}}else if(i.is(this.moduleSelector)){o=i.find(this.itemSelector).first();(this.empty(o)||this.$contextModules.data("dragModule"))&&(o=i.next(this.moduleSelector))}else o=this.$contextModules.find(this.moduleSelector).first()
if(o&&!this.empty(o))return o.focus()}
t.prototype.onSpaceKey=function(e,t){var i,o,s,_
s=this.getFocusedElement(t)
if(i=this.$contextModules.data("dragItem")){if(!s.is(i)){_=this.$contextModules.data("dragItemModule")
s.is(this.itemSelector)&&!this.empty(s.parents(_))?s.after(i):_.find(".items").prepend(i)
modules.updateModuleItemPositions(null,{item:i.parent()})}i.attr("aria-grabbed",false)
this.$contextModules.data("dragItem",null)
this.$contextModules.data("dragItemModule",null)
return i.focus()}if(o=this.$contextModules.data("dragModule")){s.is(this.itemSelector)&&(s=s.parents(this.moduleSelector).first())
if(!s.is(o)){this.empty(s)||s.is(this.$contextModules)?this.$contextModules.prepend(o):s.after(o)
modules.updateModulePositions()}o.attr("aria-grabbed",false)
this.$contextModules.data("dragModule",null)
return o.focus()}if(!s.is(this.$contextModules)){s.attr("aria-grabbed",true)
if(s.is(this.itemSelector)){this.$contextModules.data("dragItem",s)
this.$contextModules.data("dragItemModule",s.parents(this.moduleSelector).first())}else s.is(this.moduleSelector)&&this.$contextModules.data("dragModule",s)
s.blur()
return s.focus()}}
t.prototype.empty=function(e){return 0===e.length}
return t}(y.a.View)
var V=i("yJLO")
var W=i("3O+N")
var K=i.n(W)
Object(k["a"])(JSON.parse('{"ar":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"هل ترغب في ترك الطلاب متابعة المساق أم ترغب في إعادة قفل هذه الوحدات حتى يتم إكمال المتطلبات الجديدة؟","you_have_changed_the_progression_requirements_for__6772bc89":"لقد قمت بتغيير متطلبات التقدم لمساق نشط. من المحتمل وجود طلاب تقدموا بالفعل إلى هذه الوحدة وإلى وحدات أخرى تعتمد عليها."},"cy":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Ydych chi am adael i fyfyrwyr fwrw ymlaen â\'r cwrs, neu ydych chi am gloi’r modiwlau hyn eto nes bydd y gofynion newydd wedi’u bodloni?","you_have_changed_the_progression_requirements_for__6772bc89":"Rydych chi wedi newid gofynion cynnydd ar gyfer cwrs gweithredol. Mae’n bosib bod rhai myfyrwyr wedi symud ymlaen i’r modiwl hwn yn barod, ac i eraill sy’n dibynnu arno."},"da":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Vil du lade studerende fortsætte i faget, eller vil du låse disse moduler igen, indtil de nye krav opfyldes?","you_have_changed_the_progression_requirements_for__6772bc89":"Du har ændret udviklingskravet for et aktivt fag. Der findes muligvis studerende, som allerede er nået frem til dette modul og til andre, som afhænger heraf."},"da-x-k12":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Vil du lade eleverne fortsætte i faget, eller vil du låse disse forløb igen, indtil de nye krav opfyldes?","you_have_changed_the_progression_requirements_for__6772bc89":"Du har ændret udviklingskravet for et aktivt fag. Der findes muligvis elver, som allerede er nået frem til dette forløb og til andre, som afhænger heraf."},"de":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Möchten Sie den Studenten gestatten, mit dem Kurs fortzufahren, oder möchten Sie diese Module erneut sperren, bis die neuen Anforderungen erfüllt sind?","you_have_changed_the_progression_requirements_for__6772bc89":"Sie haben die Fortschrittsanforderungen für einen aktiven Kurs geändert. Möglicherweise sind Studenten bereits bei diesem Modul angelangt, sowie bei anderen, die davon abhängen."},"el":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Θα θέλατε να επιτρέψετε στους σπουδαστές να συνεχίσουν στο μάθημα ή θέλετε να ξανακλειδώσετε αυτές τις ενότητες μέχρι να καλυφθούν οι νέες απαιτήσεις;","you_have_changed_the_progression_requirements_for__6772bc89":"\\u003cmrk mid=\\"7859\\" mtype=\\"seg\\"\\u003eΈχετε αλλάξει τις απαιτήσεις προόδου για κάποιο ενεργό μάθημα.\\u003c/mrk\\u003e \\u003cmrk mid=\\"7860\\" mtype=\\"seg\\"\\u003eΕνδέχεται να υπάρχουν σπουδαστές που έχουν ήδη σημειώσει πρόοδο σε αυτή την ενότητα και σε άλλες και εξαρτώνται από αυτό.\\u003c/mrk\\u003e"},"en-AU":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Would you like to let students continue in the course or do you want to re-lock these modules until the new requirements are completed?","you_have_changed_the_progression_requirements_for__6772bc89":"You have changed the progression requirements for an active course. There may be students who have already progressed to this module and to others that depend on it."},"en-AU-x-unimelb":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Would you like to let students continue in the subject or do you want to re-lock these modules until the new requirements are completed?","you_have_changed_the_progression_requirements_for__6772bc89":"You have changed the progression requirements for an active subject. There may be students who have already progressed to this module and to others that depend on it."},"en-CA":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Would you like to let students continue in the course or do you want to re-lock these modules until the new requirements are completed?","you_have_changed_the_progression_requirements_for__6772bc89":"You have changed the progression requirements for an active course. There may be students who have already progressed to this module and to others that depend on it."},"en-GB":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Would you like to let students continue in the course or do you want to re-lock these modules until the new requirements are completed?","you_have_changed_the_progression_requirements_for__6772bc89":"You have changed the progression requirements for an active course. There may be students who have already progressed to this module and to others that depend on it."},"en-GB-x-lbs":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Would you like to let students continue in the programme or do you want to re-lock these modules until the new requirements are completed?","you_have_changed_the_progression_requirements_for__6772bc89":"You have changed the progression requirements for an active programme. There may be students who have already progressed to this module and to others that depend on it."},"en-GB-x-ukhe":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Would you like to let students continue in the module or do you want to re-lock these units until the new requirements are completed?","you_have_changed_the_progression_requirements_for__6772bc89":"You have changed the progression requirements for an active module. There may be students who have already progressed to this unit and to others that depend on it."},"es":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"¿Le gustaría permitir a los estudiantes que continuar en el curso o desea bloquear de nuevo los módulos hasta que se completen los nuevos requisitos?","you_have_changed_the_progression_requirements_for__6772bc89":"Ha modificado los requisitos de progresión de un curso activo. Es posible que haya estudiantes que ya hayan pasado este módulo y otros que aún dependan de él."},"fa":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"مایلید به دانشجویان اجازه دهید به درس ادامه دهند یا می خواهید این ماژول ها را تا زمان تکمیل شدن الزامات جدید دوباره قفل کنید؟","you_have_changed_the_progression_requirements_for__6772bc89":"الزامات پیشرفت یک درس فعال را تغییر داده اید. ممکن است دانشجویانی باشند که به این ماژول یا سایر ماژول هایی که به آن وابسته اند پیشرفت کرده باشند."},"fi":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Haluatko antaa opiskelijoiden jatkavan kurssilla vai haluatko poistaa näiden moduulien lukituksen, kunnes uudet vaatimukset täyttyvät?","you_have_changed_the_progression_requirements_for__6772bc89":"Olet muuttanut edistymisvaatimuksia aktiiviselle kurssille. Osa opiskelijoista on ehkä edennyt tähän moduuliin ja muihin sellaisiin, jotka riippuvat siitä."},"fr":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Voulez-vous laisser les étudiants continuer le cours ou préférez-vous verrouiller à nouveau ces modules jusqu’à ce que les nouvelles conditions soient remplies ?","you_have_changed_the_progression_requirements_for__6772bc89":"Vous avez changé les critères de progression pour un cours actif. Des étudiants ont peut-être déjà commencé ce module ou avancé dans d’autres qui dépendent de celui-ci."},"fr-CA":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Voulez-vous laisser les étudiants continuer le cours ou préférez-vous verrouiller à nouveau ces modules jusqu’à ce que les nouvelles conditions soient remplies?","you_have_changed_the_progression_requirements_for__6772bc89":"Vous avez changé les critères de progression pour un cours actif. Des étudiants ont peut-être déjà commencé ce module ou avancé dans d’autres qui dépendent de celui-ci."},"he":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"האם ברצונך לאפשר לתלמידים להמשיך בקורס או ברצונך לנעול מחדש מודולים אלו עד אשר הדרישות החדשות ימולאו?","you_have_changed_the_progression_requirements_for__6772bc89":"שינית את דרישות ההתקדמות בקורס פעיל. יתכן שיש תלמידים שכבר הגיעו למודול זה ואחרים שתלויים בו."},"ht":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Èske w ta renmen kite elèv yo kontinye nan kou a oswa ou vle rebloke modil sa yo jiskaske nouvo egzijans yo konplete?","you_have_changed_the_progression_requirements_for__6772bc89":"Ou chanje egzijans pwogresyon yon kou ki aktif. Li posib pou gen elèv ki gentan fè pwogrè nan modil sa a e nan lòt ki depann de li."},"hu":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Szeretné, hogy a hallgatók folytathassák a kurzust, vagy újra lezárja a modult, amíg az új követelmények teljesülnek?","you_have_changed_the_progression_requirements_for__6772bc89":"Megváltoztatta egy aktív kurzushoz tartozó haladási követelményeket. Lehetnek hallgatók, akik már eljutottak ehhez a modulhoz, vagy másokhoz, amik ettől függenek."},"hy":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Կցանկանայի՞ք թույլ տալ ունկնդիրներին շարունակել դասընթացը, թե՞ ցանկանում եք կրկին արգելափակել մոդուլները մինչև նոր պահանջների կատարումը:","you_have_changed_the_progression_requirements_for__6772bc89":"Դուք փոխել եք ակտիվ դասընթացում առաջ ընթանալու պահանջները: Կարող են լինել ունկնդիրներ, ովքեր արդեն անցել են այս մոդուլին և այլ մոդուլներին, որ կախված են դրանից:"},"is":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Viltu láta nemendur halda áfram í námskeiðinu eða viltu endurlæsa þessum einingum þar til nýju kröfunum er lokið?","you_have_changed_the_progression_requirements_for__6772bc89":"Þú hefur breytt framvindukröfum fyrir virkt námskeið. Mögulega eru nemendur sem hafa þegar náð þessari einingu og aðrir sem treysta á það."},"it":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Desideri consentire ai tuoi studenti di continuare nel corso o vuoi bloccare di nuovo questi moduli fino al completamento dei nuovi requisiti?","you_have_changed_the_progression_requirements_for__6772bc89":"Hai modificato i requisti di progresso per un corso attivo. Possono essere presenti studenti che sono già avanzati in questo modulo e altri che dipendono da esso."},"ja":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"受講生がコースを続行できるようにしますか? または、新しい要件が完了するまで、これらのモジュールを再度ロックしますか?","you_have_changed_the_progression_requirements_for__6772bc89":"アクティブなコースの進捗要件を変更しました。このモジュールをすでに進めている受講生、またはこのモジュールに依存している他のモジュールを進めている受講生がいる可能性があります。"},"mi":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"E hiahia ana koe ki te tuku tonu ngā ākonga i roto i te akoranga e hiahia ana koe ki te anō-rakaina enei ngā kōwae kia oti te whakaritenga hou rānei?","you_have_changed_the_progression_requirements_for__6772bc89":"Kua hurihia e koe te whakaritenga haerere mo te akoranga hohe. He kia ākonga nei i ahu whakamua ki tēnei kōwae, me te ki ētahi atu e whakawhirinaki i runga i te reira kua."},"nb":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Har du lyst til å la studenter fortsette i emnet eller ønsker du å låse disse modulene igjen til de nye kravene er fullført?","you_have_changed_the_progression_requirements_for__6772bc89":"Du har endret progresjonskrav for et aktivt emne. Det kan være studenter som allerede har kommet til denne modulen, og til andre som er avhengige av den."},"nb-x-k12":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Har du lyst til å la elever fortsette i faget eller ønsker du å låse disse moduler igjen til de nye kravene er fullført?","you_have_changed_the_progression_requirements_for__6772bc89":"Du har endret progresjonskrav for et aktivt fag. Det kan være elever som allerede har kommet til denne modul, og til andre som er avhengige av den."},"nl":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Wil je cursisten door laten gaan met de cursus, of wil je deze modules opnieuw vergrendelen tot de nieuwe vereisten voltooid zijn?","you_have_changed_the_progression_requirements_for__6772bc89":"Je hebt de voortgangsvereisten voor een actieve cursus veranderd. Er kunnen cursisten zijn die al naar deze module door zijn gegaan en anderen die ervan afhankelijk zijn."},"nn":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Vil du at studentane skal halde fram på emnet eller vil du låse modulane på nytt til nye krav er fullførte?","you_have_changed_the_progression_requirements_for__6772bc89":"Du har endra krav for progresjon for eit aktivt emne. Det kan vere studentar som allereie har kome til denne modulen og andre som reknar med å kome hit."},"pl":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Czy chcesz pozwolić uczestnikom kontynuować udział w kursie, czy może chcesz ponownie zablokować te moduły do czasu ukończenia nowych wymagań?","you_have_changed_the_progression_requirements_for__6772bc89":"Zmieniono wymagania postępu dotyczące aktywnego kursu. Być może są uczestnicy, którzy już przeszli do tego modułu i do innych, które są z nim powiązane."},"pt":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Pretende deixar que os alunos continuem na disciplina ou deseja voltar a bloquear estes módulos até os novos requisitos serem concluídos?","you_have_changed_the_progression_requirements_for__6772bc89":"Alterou os requisitos de progressão relativos a uma disciplina ativa. É possível que haja alunos que já avançaram para este módulo e para outros que dependem dele."},"pt-BR":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Gostaria de deixar os alunos continuarem no curso ou deseja voltar a bloquear esses módulos até que os novos requisitos sejam concluídos?","you_have_changed_the_progression_requirements_for__6772bc89":"Você alterou os requisitos de progressão de um curso ativo. Pode haver alunos que já evoluíram para este módulo e outros que dependem dele."},"ru":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Вы хотите позволить студентам продолжить обучение на курсе или вы хотите повторно заблокировать эти модули до завершения новых требований?","you_have_changed_the_progression_requirements_for__6772bc89":"Вы изменили требования к прохождению для активного курса. На курсе могут быть студенты, которые уже продвинулись до этого модуля или других, связанных с ним."},"sl":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Ali želite, da študenti nadaljujejo s predmetom ali pa morda želite znova zakleniti te module, dokler nove zahteve niso zaključene?","you_have_changed_the_progression_requirements_for__6772bc89":"Spremenili ste zahteve napredovanja za aktivni predmet. Morda obstajajo študenti, ki so že napredovali v ta modul in v druge, od njega odvisne module."},"sv":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Vill du låta studenter fortsätta i kursen eller vill du låsa de här modulerna igen tills de nya kraven har uppfyllts?","you_have_changed_the_progression_requirements_for__6772bc89":"Du har ändrat utvecklingskraven för en aktiv kurs. Det kan finnas studenter som redan har gått vidare till den här modulen och andra som är beroende av den."},"sv-x-k12":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Vill du låta elever fortsätta i kursen eller vill du låsa de här modulerna igen tills de nya kraven har uppfyllts?","you_have_changed_the_progression_requirements_for__6772bc89":"Du har ändrat utvecklingskraven för en aktiv kurs. Det kan finnas elever som redan har gått vidare till den här modulen och andra som är beroende av den."},"tr":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Öğrenciler derse devam etsinler mi yoksa yeni gereksinimler tamamlanana kadar bu modülleri yeniden kilitlemek mi istersiniz?","you_have_changed_the_progression_requirements_for__6772bc89":"Etkin bir derste ilerleme gereksinimlerini değiştirdiniz. Bu modüle ya da bu modüle bağlı diğer modüllere kadar ilerlemiş öğrenciler olabilir."},"uk":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Хотіли б ви дозволити студентам продовжувати курс, чи хочете заблокувати ці модулі до виконання нових вимог?","you_have_changed_the_progression_requirements_for__6772bc89":"Ви змінили вимоги щодо прогресу для активного курсу. Там можуть бути студенти, які вже просунулися до цього модуля та до інших, які залежать від нього."},"zh-Hans":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"您要让学生继续学习该课程，还是希望重新锁定这些单元，直到新要求设定完毕？","you_have_changed_the_progression_requirements_for__6772bc89":"您已更改某个活动课程的进度要求。可能有些学生的进度已达到此单元以及依赖此单元的其他单元。"},"zh-Hant":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"您希望讓學生繼續學習該課程，還是希望重新鎖定這些單元，直至滿足新要求？","you_have_changed_the_progression_requirements_for__6772bc89":"您已更改某一活動課程的進度要求。可能有些學生的進度已達到此單元、以及基於單元的其他單元的進度要求。"}}'))
v["default"].scoped("modules.relock_modules_dialog")
i("DfGn")
var B=K.a.default
var H=B.template,G=B.templates=B.templates||{}
var Y="modules/RelockModulesDialog"
G[Y]=H((function(e,t,i,o,s){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
s=s||{}
var _,n,a="",l=i.helperMissing,d=this.escapeExpression
a+="<p>"+d((_=i.t||t&&t.t,n={hash:{i18n_inferred_key:true},data:s},_?_.call(t,"you_have_changed_the_progression_requirements_for__6772bc89","You have changed the progression requirements for an active course. There may be students who have already progressed to this module and to others that depend on it.",n):l.call(t,"t","you_have_changed_the_progression_requirements_for__6772bc89","You have changed the progression requirements for an active course. There may be students who have already progressed to this module and to others that depend on it.",n)))+"</p>\n<p>"+d((_=i.t||t&&t.t,n={hash:{i18n_inferred_key:true},data:s},_?_.call(t,"would_you_like_to_let_students_continue_in_the_cou_a4c36171","Would you like to let students continue in the course or do you want to re-lock these modules until the new requirements are completed?",n):l.call(t,"t","would_you_like_to_let_students_continue_in_the_cou_a4c36171","Would you like to let students continue in the course or do you want to re-lock these modules until the new requirements are completed?",n)))+"</p>"
return a}))
var J=G[Y]
class $ extends V["a"]{renderIfNeeded(e){if(e.relock_warning){this.module_id=e.id
return this.render().show()}}dialogOptions(){return{id:"relock_modules_dialog",title:l["a"].t("requirements_changed","Requirements Changed"),buttons:[{text:l["a"].t("relock_modules","Re-Lock Modules"),click:()=>this.relock()},{text:l["a"].t("continue","Continue"),class:"btn-primary",click:e=>this.cancel(e)}]}}relock(){const e="/api/v1/courses/".concat(ENV.COURSE_ID,"/modules/").concat(this.module_id,"/relock")
return this.dialog.disableWhileLoading(A.a.ajaxJSON(e,"PUT",{},()=>this.close()))}}$.prototype.template=J
var Q=i("goGJ")
var Z=K.a.default
var X=Z.template,ee=Z.templates=Z.templates||{}
var te="-vddTooltip"
ee[te]=X((function(e,t,i,o,s){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
s=s||{}
var _,n,a="",l="function",d=this.escapeExpression,r=this
function u(e,t){var o,s,_=""
_+='href="'
if(s=i.link_href)o=s.call(e,{hash:{},data:t})
else{s=e&&e.link_href
o=typeof s===l?s.call(e,{hash:{},data:t}):s}_+=d(o)+'"'
return _}function m(e,t){var o,s,_=""
_+='\n      <div class="clearfix">\n        <dt>'
if(s=i.due_for)o=s.call(e,{hash:{},data:t})
else{s=e&&e.due_for
o=typeof s===l?s.call(e,{hash:{},data:t}):s}_+=d(o)+"</dt>\n        <dd>"
if(s=i.due_at)o=s.call(e,{hash:{},data:t})
else{s=e&&e.due_at
o=typeof s===l?s.call(e,{hash:{},data:t}):s}_+=d(o)+"</dd>\n      </div>\n    "
return _}function c(e,t){var o,s,_=""
_+='\n      <div class="clearfix">\n        <dd>'
if(s=i.more_message)o=s.call(e,{hash:{},data:t})
else{s=e&&e.more_message
o=typeof s===l?s.call(e,{hash:{},data:t}):s}_+=d(o)+"</dd>\n      </div>\n    "
return _}a+='<a title class="vdd_tooltip_link"\n  data-tooltip-selector="#vdd_tooltip_'
if(n=i.selector)_=n.call(t,{hash:{},data:s})
else{n=t&&t.selector
_=typeof n===l?n.call(t,{hash:{},data:s}):n}a+=d(_)+'"\n  '
_=i["if"].call(t,t&&t.link_href,{hash:{},inverse:r.noop,fn:r.program(1,u,s),data:s});(_||0===_)&&(a+=_)
a+="\n  >"
if(n=i.link_text)_=n.call(t,{hash:{},data:s})
else{n=t&&t.link_text
_=typeof n===l?n.call(t,{hash:{},data:s}):n}a+=d(_)+'</a>\n\n<div id="vdd_tooltip_'
if(n=i.selector)_=n.call(t,{hash:{},data:s})
else{n=t&&t.selector
_=typeof n===l?n.call(t,{hash:{},data:s}):n}a+=d(_)+'" style="display:none;">\n  <dl class="vdd_tooltip_content dl-horizontal">\n    '
_=i.each.call(t,t&&t.due_dates,{hash:{},inverse:r.noop,fn:r.program(3,m,s),data:s});(_||0===_)&&(a+=_)
a+="\n    "
_=i["if"].call(t,t&&t.more_message,{hash:{},inverse:r.noop,fn:r.program(5,c,s),data:s});(_||0===_)&&(a+=_)
a+="\n  </dl>\n</div>"
return a}))
Z.registerPartial("vddTooltip",ee["-vddTooltip"])
var ie=ee[te]
Object(k["a"])(JSON.parse('{"ar":{"publishable":{"cant_unpublish":"لا يمكن إلغاء النشر"}},"cy":{"publishable":{"cant_unpublish":"Methu dad-gyhoeddi"}},"da":{"publishable":{"cant_unpublish":"Kan ikke annullere offentliggørelse"}},"da-x-k12":{"publishable":{"cant_unpublish":"Kan ikke annullere offentliggørelse"}},"de":{"publishable":{"cant_unpublish":"Veröffentlichung kann nicht rückgängig gemacht werden."}},"el":{"publishable":{"cant_unpublish":"Δεν είναι δυνατή η αναίρεση της δημοσίευσης"}},"en-AU":{"publishable":{"cant_unpublish":"Can\'t unpublish"}},"en-AU-x-unimelb":{"publishable":{"cant_unpublish":"Can\'t unpublish"}},"en-CA":{"publishable":{"cant_unpublish":"Can\'t unpublish"}},"en-GB":{"publishable":{"cant_unpublish":"Can\'t unpublish"}},"en-GB-x-lbs":{"publishable":{"cant_unpublish":"Can\'t unpublish"}},"en-GB-x-ukhe":{"publishable":{"cant_unpublish":"Can\'t unpublish"}},"es":{"publishable":{"cant_unpublish":"No se puede ocultar"}},"fa":{"publishable":{"cant_unpublish":"انتشار نمی تواند لغو شود"}},"fi":{"publishable":{"cant_unpublish":"Ei voida julkaista"}},"fr":{"publishable":{"cant_unpublish":"Impossible d’annuler la publication"}},"fr-CA":{"publishable":{"cant_unpublish":"Impossible d’annuler la publication"}},"he":{"publishable":{"cant_unpublish":"אין אפשרות לבטל את הפרסום"}},"ht":{"publishable":{"cant_unpublish":"Paka pa pibliye"}},"hu":{"publishable":{"cant_unpublish":"Nem lehet a publikálást visszavonni"}},"hy":{"publishable":{"cant_unpublish":"Հնարավոր չէ հրապարակումը չեղյալ համարել"}},"is":{"publishable":{"cant_unpublish":"Get ekki falið"}},"it":{"publishable":{"cant_unpublish":"Impossibile annullare la pubblicazione"}},"ja":{"publishable":{"cant_unpublish":"未公開にできません"}},"ko":{"publishable":{"cant_unpublish":"게시 취소할 수 없음"}},"mi":{"publishable":{"cant_unpublish":"Kāore e taea te i whakaputa"}},"nb":{"publishable":{"cant_unpublish":"Kan ikke fjerne publisering"}},"nb-x-k12":{"publishable":{"cant_unpublish":"Kan ikke fjerne publisering"}},"nl":{"publishable":{"cant_unpublish":"Kan publicatie niet ongedaan maken"}},"nn":{"publishable":{"cant_unpublish":"Kan ikkje oppheve publisering"}},"pl":{"publishable":{"cant_unpublish":"Nie można cofnąć publikacji"}},"pt":{"publishable":{"cant_unpublish":"Não é possível anular a publicação"}},"pt-BR":{"publishable":{"cant_unpublish":"Não é possível despublicar"}},"ru":{"publishable":{"cant_unpublish":"Невозможно отменить публикацию"}},"sl":{"publishable":{"cant_unpublish":"Razveljavljanje objave ni mogoče."}},"sv":{"publishable":{"cant_unpublish":"Det går inte att avpublicera"}},"sv-x-k12":{"publishable":{"cant_unpublish":"Det går inte att avpublicera"}},"tr":{"publishable":{"cant_unpublish":"Yayınlanamıyor"}},"uk":{"publishable":{"cant_unpublish":"Не можна скасувати публікацію"}},"zh-Hans":{"publishable":{"cant_unpublish":"无法取消发布"}},"zh-Hant":{"publishable":{"cant_unpublish":"無法取消發佈"}}}'))
var oe=v["default"].scoped("publishable")
class se extends y.a.Model{constructor(){super(...arguments)
this.publish=()=>{this.set("published",true)
return this.save()}
this.unpublish=()=>{this.set("published",false)
return this.save()}}initialize(e,t){this._root=t.root
return this.set("unpublishable",true)}disabledMessage(){return oe.t("cant_unpublish","Can't unpublish")}toJSON(){const e={}
e[this._root]=_.a.clone(this.attributes)
return e}}var _e=i("7FZx")
var ne=i("5Ky4")
const ae=(e,t)=>{const i="context_module_content_".concat(t)
e.find("#context_module_content_").attr("id",i)
e.find('[aria-controls="context_module_content_"]').attr("aria-controls",i)}
var le=ae
var de=i("Doqt")
var re=i("y+46")
var ue=i("uErj")
var me=i("mwIZ")
var ce=i.n(me)
var pe=i("x1Tw")
var he=i("dqQ7")
i("jYyc")
i("UlQx")
i("Z+Ib")
i("YGE8")
i("TBRb")
i("JI1W")
i("p6Wi")
i("q3b3")
i("OShF")
i("2sOc")
i("fuo4")
i("MWZS")
function fe(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500
if(!e||0===e.length)return
A()("html, body").animate({scrollTop:e.offset().top},t)}function be(e){!ENV.DUPLICATE_ENABLED||e.find(".context_module_item.quiz").length||e.find(".cannot-duplicate").length?e.find(".duplicate_module_menu_item").attr("hidden",true):e.find(".duplicate_module_menu_item").removeAttr("hidden")}window.modules={updateTaggedItems(){},currentIndent(e){const t=e.attr("class").split(/\s/)
let i=0
for(let e=0;e<t.length;e++)if(t[e].match(/^indent_/)){const o=parseInt(t[e].substring(7),10)
isNaN(o)||(i=o)}return i},addModule(){const e=A()("#context_module_blank").clone(true).attr("id","context_module_new")
A()("#context_modules").append(e)
const t=modules.sortable_module_options
t.update=modules.updateModuleItemPositions
e.find(".context_module_items").sortable(t)
A()("#context_modules.ui-sortable").sortable("refresh")
A()("#context_modules .context_module .context_module_items.ui-sortable").each((function(){A()(this).sortable("refresh")
A()(this).sortable("option","connectWith",".context_module_items")}))
modules.editModule(e)},updateModulePositions(){const e=[]
A()("#context_modules .context_module").each((function(){e.push(A()(this).attr("id").substring("context_module_".length))}))
const t="".concat(ENV.CONTEXT_URL_ROOT,"/modules/reorder")
A()("#context_modules").loadingImage()
A.a.ajaxJSON(t,"POST",{order:e.join(",")},e=>{A()("#context_modules").loadingImage("remove")
for(const t in e){const i=e[t]
A()("#context_module_"+i.context_module.id).triggerHandler("update",i)}},e=>{A()("#context_modules").loadingImage("remove")})},updateModuleItemPositions(e,t){const i=t.item.parents(".context_module")
const o=i.attr("id").substring("context_module_".length)
const s="".concat(ENV.CONTEXT_URL_ROOT,"/modules/").concat(o,"/reorder")
const _=[]
i.find(".context_module_items .context_module_item").each((function(){_.push(A()(this).getTemplateData({textValues:["id"]}).id)}))
i.find(".context_module_items.ui-sortable").sortable("disable")
i.disableWhileLoading(A.a.ajaxJSON(s,"POST",{order:_.join(",")},e=>{if(e&&e.context_module&&e.context_module.content_tags)for(const t in e.context_module.content_tags){const o=e.context_module.content_tags[t].content_tag
i.find("#context_module_item_"+o.id).fillTemplateData({data:{position:o.position}})}i.find(".context_module_items.ui-sortable").sortable("enable")},e=>{i.find(".content").loadingImage("remove")
i.find(".content").errorBox(D.t("errors.reorder","Reorder failed, please try again."))}))
A()(".context_module").each((function(){be(A()(this))}))},updateProgressions(e){if(!ENV.IS_STUDENT){e&&e()
return}const t=A()(".progression_list_url").attr("href")
A()(".context_module_item.progression_requirement:visible").length>0&&A()(".loading_module_progressions_link").show().attr("disabled",true)
A.a.ajaxJSON(t,"GET",{},(function(t){A()(".loading_module_progressions_link").remove()
const i=A()("#current_user_progression_list")
const o=[]
for(const e in t)o.push(t[e])
const s=function(){A()("#context_modules").hasClass("editable")||A()("#context_modules .context_module").each((function(){modules.updateProgressionState(A()(this))}))
e&&e()}
let _=0
var n=function e(){const t=o.shift()
if(!t){s()
return}const n=t.context_module_progression
if(n.user_id==window.ENV.current_user_id){let e=i.find(".progression_"+n.context_module_id)
if(0===e.length&&i.length>0){e=i.find(".progression_blank").clone(true)
e.removeClass("progression_blank").addClass("progression_"+n.context_module_id)
i.append(e)}if(e.length>0){e.data("requirements_met",n.requirements_met)
e.data("incomplete_requirements",n.incomplete_requirements)
e.fillTemplateData({data:n})}}_++
if(_>=50){_=0
setTimeout(e,150)}else e()}
n()}),()=>{e&&e()})},updateAssignmentData:e=>A.a.ajaxJSON(ENV.CONTEXT_MODULE_ASSIGNMENT_INFO_URL,"GET",{},t=>{A()(()=>{A.a.each(t,(e,t)=>{const i=A()("#context_module_item_"+e)
const o={}
null!=t.points_possible&&(o.points_possible_display=D.t("points_possible_short","%{points} pts",{points:D.n(t.points_possible)}))
if(null!=t.todo_date)o.due_date_display=A.a.dateString(t.todo_date)
else if(null!=t.due_date){null!=t.past_due&&i.data("past_due",true)
o.due_date_display=A.a.dateString(t.due_date)}else if(null!=t.has_many_overrides)o.due_date_display=D.t("Multiple Due Dates")
else if(null!=t.vdd_tooltip){t.vdd_tooltip.link_href=i.find("a.title").attr("href")
i.find(".due_date_display").html(ie(t.vdd_tooltip))}else i.find(".due_date_display").remove()
i.fillTemplateData({data:o,htmlValues:["points_possible_display"]})
null===t.points_possible&&i.find(".points_possible_display").remove()})
Object(Q["a"])()
e&&e()})},()=>{e&&A()(e)}),loadMasterCourseData(e){ENV.MASTER_COURSE_SETTINGS&&A.a.ajaxJSON(ENV.MASTER_COURSE_SETTINGS.MASTER_COURSE_DATA_URL,"GET",{tag_id:e},e=>{e.tag_restrictions&&A.a.each(e.tag_restrictions,(e,t)=>{const i=A()("#context_module_item_"+e).not(".master_course_content")
i.addClass("master_course_content")
Object.keys(t).some(e=>t[e])&&i.attr("data-master_course_restrictions",JSON.stringify(t))
this.initMasterCourseLockButton(i,t)})})},itemClass:e=>(e.content_type||"").replace(/^[A-Za-z]+::/,"")+"_"+e.content_id,updateAllItemInstances(e){A()(".context_module_item."+modules.itemClass(e)+" .title").each((function(){const t=A()(this)
t.text(e.title)
t.attr("title",e.title)}))},editModule(e){var t,i
const o=A()("#add_context_module_form")
o.data("current_module",e)
const s=e.getTemplateData({textValues:["name","unlock_at","require_sequential_progress","publish_final_grade","requirement_count"]})
o.fillFormData(s,{object_name:"context_module"})
let _=false
if("context_module_new"==e.attr("id")){_=true
o.attr("action",o.find(".add_context_module_url").attr("href"))
o.find(".completion_entry").hide()
o.attr("method","POST")
o.find(".submit_button").text(D.t("buttons.add","Add Module"))}else{o.attr("action",e.find(".edit_module_link").attr("href"))
o.find(".completion_entry").show()
o.attr("method","PUT")
o.find(".submit_button").text(D.t("buttons.update","Update Module"))}o.find("#unlock_module_at").prop("checked",s.unlock_at).change()
o.find("#require_sequential_progress").attr("checked","true"==s.require_sequential_progress||"1"==s.require_sequential_progress)
o.find("#publish_final_grade").attr("checked","true"==s.publish_final_grade||"1"==s.publish_final_grade)
const n=A()("#context_modules .context_module").length>1&&A()("#context_modules .context_module:first").attr("id")!==e.attr("id")
o.find(".prerequisites_entry").showIf(n)
const a=[]
e.find(".prerequisites .prerequisite_criterion").each((function(){a.push(A()(this).getTemplateData({textValues:["id","name","type"]}))}))
o.find(".prerequisites_list .criteria_list").empty()
for(const e in a){const t=a[e]
o.find(".add_prerequisite_link:first").click()
"context_module"==t.type&&o.find(".prerequisites_list .criteria_list .criterion:last select").val(t.id).trigger("change")}o.find(".completion_entry .criteria_list").empty()
e.find(".content .context_module_item .criterion.defined").each((function(){const e=A()(this).parents(".context_module_item").getTemplateData({textValues:["id","criterion_type","min_score"]})
o.find(".add_completion_criterion_link").click()
o.find(".criteria_list .criterion:last").find(".id").val(e.id||"").change().end().find(".type").val(e.criterion_type||"").change().end().find(".min_score").val(e.min_score||"")}))
const l=0===e.find(".content .context_module_item").length
o.find(".prerequisites_list .criteria_list").showIf(0!=a.length).end().find(".add_prerequisite_link").showIf(n).end().find(".completion_entry .criteria_list").showIf(!l).end().find(".completion_entry .no_items_message").hide().end().find(".add_completion_criterion_link").showIf(!l)
l&&o.find(".completion_entry .no_items_message").show()
0!==e.find(".content .context_module_item .criterion.defined").length?A()(".requirement-count-radio").show():A()(".requirement-count-radio").hide()
const d=e.find(".pill li").data("requirement-count")
1==d?A()("#context_module_requirement_count_1").prop("checked",true).change():A()("#context_module_requirement_count_").prop("checked",true).change()
e.fadeIn("fast",()=>{})
e.addClass("dont_remove")
o.find(".module_name").toggleClass("lonely_entry",_)
const r=A()(".ig-header-admin .al-trigger",e)
const u=!!(null===(t=window.ENV)||void 0===t?void 0:null===(i=t.FEATURES)||void 0===i?void 0:i.responsive_misc)
const m=window.matchMedia("(min-width: 600px)").matches
const c=m?600:320
o.dialog({autoOpen:false,modal:true,title:_?D.t("titles.add","Add Module"):D.t("titles.edit","Edit Module Settings"),width:u?c:600,height:_?400:600,close(){modules.hideEditModule(true)
r.focus()
const e=A()("#context_modules .context_module")
e.length&&A()("#context_modules_sortable_container").removeClass("item-group-container--is-empty")}}).dialog("open")
e.removeClass("dont_remove")},hideEditModule(e){const t=A()("#add_context_module_form").data("current_module")
e&&t&&"context_module_new"==t.attr("id")&&!t.hasClass("dont_remove")&&t.remove()
A()("#add_context_module_form:visible").dialog("close")},addItemToModule(e,t){if(!t)return A()("<div/>")
t.id=t.id||"new"
t.type=t.type||t["item[type]"]||A.a.underscore(t.content_type)
t.title=t.title||t["item[title]"]
t.new_tab=t.new_tab?"1":"0"
t.graded=t.graded?"1":"0"
let i,o="new"!==t.id?A()("#context_module_item_"+t.id):[]
if(o.length){const e=o.find(".ig-admin")
e.length&&e.detach()
i=o.clone(true)
e.length&&i.find(".ig-row").append(e)}else{i=A()("#context_module_item_blank").clone(true).removeAttr("id")
modules.evaluateItemCyoe(i,t)}i.addClass(t.type+"_"+t.id)
i.addClass(t.type)
t.is_duplicate_able&&i.addClass("dupeable")
i.attr("aria-label",t.title)
i.find(".title").attr("title",t.title)
i.fillTemplateData({data:t,id:"context_module_item_"+t.id,hrefValues:["id","context_module_id","content_id"]})
for(let e=0;e<10;e++)i.removeClass("indent_"+e)
i.addClass("indent_"+(t.indent||0))
i.addClass(modules.itemClass(t))
let s=null
e.find(".context_module_items").children().each((function(){const e=parseInt(A()(this).getTemplateData({textValues:["position"]}).position,10)
!t.position&&0!==t.position||!e&&0!==e||null==s&&e-t.position>=0&&(s=A()(this))}))
o.length?o.replaceWith(i.show()):s?s.before(i.show()):e.find(".context_module_items").append(i.show())
be(e)
return i},evaluateItemCyoe(e,t){if(!O["a"].isEnabled())return
e=A()(e)
const i=e.find(".publish-icon")
const o=e.find(".ig-admin")
t=t||{id:i.attr("data-module-item-id"),title:i.attr("data-module-item-name"),assignment_id:i.attr("data-assignment-id"),is_cyoe_able:"true"===i.attr("data-is-cyoeable")}
const s=O["a"].getItemData(t.assignment_id,t.is_cyoe_able)
if(s.isReleased){const e=D.t("Released by Mastery Path: %{path}",{path:s.releasedLabel})
const t=A()('<span class="pill mastery-path-icon" aria-hidden="true" data-tooltip><i class="icon-mastery-path" /></span>').attr("title",e).append(Object(ne["a"])(s.releasedLabel))
const i=A()('<span class="screenreader-only">').append(Object(ne["a"])(e))
o.prepend(i)
o.prepend(t)}if(s.isCyoeAble){const e=A()('<a class="mastery_paths_link" />').attr("href",ENV.CONTEXT_URL_ROOT+"/modules/items/"+t.id+"/edit_mastery_paths?return_to="+encodeURIComponent(window.location.pathname)).attr("title",D.t("Edit Mastery Paths for %{title}",{title:t.title})).text(D.t("Mastery Paths"))
s.isTrigger&&o.prepend(e.clone())
o.find(".delete_link").parent().before(A()('<li role="presentation" />').append(e.prepend('<i class="icon-mastery-path" /> ')))}},getNextPosition(e){let t=0
e.find(".context_module_items").children().each((function(){const e=parseInt(A()(this).getTemplateData({textValues:["position"]}).position,10)
e>t&&(t=e)}))
return t+1},refreshModuleList(){A()("#module_list").find(".context_module_option").remove()
A()("#context_modules .context_module").each((function(){const e=A()(this)
const t=e.find(".header").getTemplateData({textValues:["name"]})
t.id=e.find(".header").attr("id")
e.find(".name").attr("title",t.name)
const i=A()(document.createElement("option"))
i.val(t.id)
i.attr("role","option").text(t.name).addClass("context_module_"+t.id).addClass("context_module_option")
A()("#module_list").append(i)}))},filterPrerequisites(e,t){const i=modules.prerequisites()
const o=e.attr("id").substring("context_module_".length)
const s=[]
for(const e in t)-1==A.a.inArray(t[e],i[o])&&s.push(t[e])
return s},prerequisites(){const e={to_visit:{},visited:{}}
A()("#context_modules .context_module").each((function(){const t=A()(this).attr("id").substring("context_module_".length)
e[t]=[]
A()(this).find(".prerequisites .criterion").each((function(){const i=A()(this).getTemplateData({textValues:["id"]}).id
if(A()(this).hasClass("context_module_criterion")){e[t].push(i)
e.to_visit[t+"_"+i]=true}}))}))
for(const t in e.to_visit)if(e.to_visit.hasOwnProperty(t)){const i=t.split("_")
if(e.visited[t])continue
e.visited[t]=true
for(const t in e[i[1]]){e[i[0]].push(e[i[1]][t])
e.to_visit[i[0]+"_"+e[i[1]][t]]=true}}delete e.to_visit
delete e.visited
return e},updateProgressionState(e){const t=e.attr("id").substring(15)
const i=A()("#current_user_progression_list .progression_"+t)
const o=i.getTemplateData({textValues:["context_module_id","workflow_state","collapsed","current_position"]})
e=A()("#context_module_"+o.context_module_id)
let s=o.workflow_state
const n=s&&s.charAt(0).toUpperCase()+s.substring(1)
e.addClass(s)
"locked"!=s&&"unlocked"!=s&&e.find(".completion_status i:visible").attr("title",n)
"completed"!=s||e.find(".progression_requirement").length||(s="")
e.fillTemplateData({data:{progression_state:s}})
let a=i.data("requirements_met")
null==a&&(a=[])
let l=i.data("incomplete_requirements")
null==l&&(l=[])
e.find(".context_module_item").each((function(){const e=A()(this)
const t=parseInt(e.getTemplateData({textValues:["position"]}).position,10)
o.current_position&&t&&o.current_position<t&&e.addClass("after_current_position")
const i=e.find(".module-item-status-icon")
const n=e.getTemplateData({textValues:["id"]}).id
const d=_.a.some(a,t=>t.id==n&&e.hasClass(t.type+"_requirement"))
if(d){e.addClass("completed_item")
ge(i,"icon-check",D.t("Completed"))}else if("completed"==s)e.hasClass("progression_requirement")&&ge(i,"no-icon",D.t("Not completed"))
else if(null!=e.data("past_due"))ge(i,"icon-minimize",D.t("This assignment is overdue"))
else{let t=null
for(const e in l)l[e].id==n&&(t=l[e])
t?null!=t.score?ge(i,"icon-minimize",D.t("You scored a %{score}.",{score:t.score})+" "+ye(e)+"."):ge(i,"icon-info",D.t("Your submission has not been graded yet")):e.hasClass("progression_requirement")&&ge(i,"icon-mark-as-read",ye(e))}}))
"true"==o.collapsed&&e.addClass("collapsed_module")},sortable_module_options:{connectWith:".context_module_items",handle:".move_item_link",helper:"clone",placeholder:"context_module_placeholder",forcePlaceholderSize:true,axis:"y",containment:"#content"},initMasterCourseLockButton(e,t){const i=e.find(".lock-icon")
const o=A()(i).data()||{}
const s=!!("moduleItemId"in o&&ENV.MASTER_COURSE_SETTINGS.IS_MASTER_COURSE)
const _=!!("moduleItemId"in o&&ENV.MASTER_COURSE_SETTINGS.IS_CHILD_COURSE)
const n=!!("moduleItemId"in o&&Object.keys(t).some(e=>t[e]))
const a=new j({is_master_course_master_content:s,is_master_course_child_content:_,restricted_by_master_course:n})
const l={model:a,el:i[0],course_id:ENV.COURSE_ID,content_type:o.moduleType,content_id:o.contentId}
const d=new M["a"](l)
d.render()}}
var ge=function(e,t,i){const o=A()("<i data-tooltip></i>")
o.attr("class",t).attr("title",i).attr("aria-label",i)
e.empty().append(o)}
var ye=function(e){return e.hasClass("must_submit_requirement")?D.t("Must submit the assignment"):e.hasClass("must_mark_done_requirement")?D.t("Must mark as done"):e.hasClass("must_view_requirement")?D.t("Must view the page"):e.hasClass("min_contribute_requirement")?D.t("Must contribute to the page"):e.hasClass("min_score_requirement")?D.t("Must score at least a %{score}",{score:e.getTemplateData({textValues:["min_score"]}).min_score}):D.t("Not yet completed")}
const ve=function(e,t){const i=e.find(".prerequisites")
let o=""
i.empty()
if(t.length>0){for(const e in t){const s=A()("<div />",{class:"prerequisite_criterion "+t[e].type+"_criterion",style:"float: left;"})
const _=A()("<span />",{text:Object(ne["a"])(t[e].id),class:"id",style:"display: none;"})
const n=A()("<span />",{text:Object(ne["a"])(t[e].type),class:"type",style:"display: none;"})
const a=A()("<span />",{text:Object(ne["a"])(t[e].name),class:"name",style:"display: none;"})
s.append(_)
s.append(n)
s.append(a)
i.append(s)
o+=t[e].name+", "}o=o.slice(0,-2)
const e=A()("<div />",{text:xe(o),class:"prerequisites_message"})
i.append(e)}}
const ke=function(e,t){A()("div.context_module .prerequisite_criterion .id").each((function(i,o){const s=A()(o)
const _=s.text()
if(_==e){const e=s.closest(".prerequisite_criterion")
e.find(".name").text(t)
const i=s.closest(".prerequisites")
const o=A.a.makeArray(i.find(".prerequisite_criterion .name")).map(e=>A()(e).text()).join(", ")
i.find(".prerequisites_message").text(xe(o))}}))}
var xe=function(e){return D.t("Prerequisites: %{list}",{list:e})}
const we=function(e,t){const i=e.find(".requirements_message")
if(0!=t){const e=A()('<ul class="pill"><li></li></ul></div>')
i.html(e)
const o=i.find(".pill li")
const s=1===t?D.t("Complete One Item"):D.t("Complete All Items")
o.text(s)
o.data("requirement-count",t)}}
var qe=Object(o["a"])(p,{})
modules.initModuleManagement=function(){new L({el:A()("#content"),modules:modules})
const e=new $
const t=A()("#context_module_unlock_at")
let i=""
A()("#unlock_module_at").change((function(){const e=A()(this)
const o=A()(".unlock_module_at_details")
o.showIf(e.attr("checked"))
if(e.attr("checked"))t.val()||t.val(i)
else{i=t.val()
t.val("").triggerHandler("change")}})).triggerHandler("change")
A()(".context_module").bind("update",(e,t)=>{t.context_module.displayed_unlock_at=A.a.datetimeString(t.context_module.unlock_at)
t.context_module.unlock_at=A.a.datetimeString(t.context_module.unlock_at)
const i=A()("#context_module_"+t.context_module.id)
i.attr("aria-label",t.context_module.name)
i.find(".header").fillTemplateData({data:t.context_module,hrefValues:["id"]})
i.find(".header").attr("id",t.context_module.id)
i.find(".footer").fillTemplateData({data:t.context_module,hrefValues:["id"]})
i.find(".unlock_details").showIf(t.context_module.unlock_at&&Date.parse(t.context_module.unlock_at)>new Date)
ve(i,t.context_module.prerequisites)
ke(t.context_module.id,t.context_module.name)
0===t.context_module.completion_requirements.length?i.find(".requirements_message").empty():we(i,t.context_module.requirement_count)
i.find(".context_module_items .context_module_item").removeClass("progression_requirement").removeClass("min_score_requirement").removeClass("max_score_requirement").removeClass("must_view_requirement").removeClass("must_mark_done_requirement").removeClass("must_submit_requirement").removeClass("must_contribute_requirement").find(".criterion").removeClass("defined")
i.find(".ig-row").removeClass("with-completion-requirements")
for(const e in t.context_module.completion_requirements){const o=t.context_module.completion_requirements[e]
o.criterion_type=o.type
const s=i.find("#context_module_item_"+o.id)
s.find(".ig-row").addClass("with-completion-requirements")
s.find(".criterion").fillTemplateData({data:o})
s.find(".completion_requirement").fillTemplateData({data:o})
s.find(".criterion").addClass("defined")
s.find(".module-item-status-icon").show()
s.addClass(o.type+"_requirement").addClass("progression_requirement")}modules.refreshModuleList()})
A()("#add_context_module_form").formSubmit({object_name:"context_module",required:["name"],processData(e){const t=[]
A()(this).find(".prerequisites_list .criteria_list .criterion").each((function(){const e=A()(this).find(".option select").val()
e&&t.push("module_"+e)}))
e["context_module[prerequisites]"]=t.join(",")
e["context_module[completion_requirements][none]"]="none"
const i=A()(this).find(".completion_entry .criteria_list .criterion")
i.each((function(){const t=A()(this).find(".id").val()
e["context_module[completion_requirements]["+t+"][type]"]=A()(this).find(".type").val()
e["context_module[completion_requirements]["+t+"][min_score]"]=A()(this).find(".min_score").val()}))
const o=A()('input[name="context_module[requirement_count]"]:checked').val()
e["context_module[requirement_count]"]=o
return e},beforeSubmit(e){const t=A()(this).data("current_module")
t.loadingImage()
t.find(".header").fillTemplateData({data:e})
t.addClass("dont_remove")
modules.hideEditModule()
t.removeClass("dont_remove")
return t},success(t,i){i.loadingImage("remove")
i.attr("id","context_module_"+t.context_module.id)
le(i,t.context_module.id)
i.data("moduleId",t.context_module.id)
i.data("module-url","/courses/"+t.context_module.context_id+"/modules/"+t.context_module.id+"items?include[]=content_details")
i.data("workflow-state",t.context_module.workflow_state)
if("unpublished"==t.context_module.workflow_state){i.find(".workflow-state-action").text("Publish")
i.find(".workflow-state-icon").addClass("publish-module-link").removeClass("unpublish-module-link")
i.addClass("unpublished_module")}A()("#no_context_modules_message").slideUp()
const s=i.find(".publish-icon")
if(!s.data("id")){const e=function(e,o){const s=i.find(e)
s.attr(o,s.attr(o).replace("{{ id }}",t.context_module.id))}
e("span.collapse_module_link","href")
e("span.expand_module_link","href")
e(".add_module_item_link","rel")
e(".add_module_item_link","rel")
const o={moduleType:"module",id:t.context_module.id,courseId:t.context_module.context_id,published:"published"==t.context_module.workflow_state,publishable:true}
const _=l(s,o)
p(_.model,_)}e.renderIfNeeded(t.context_module)
i.triggerHandler("update",t)
const _=i.find(".module_dnd")[0]
if(_){const e=document.getElementById("context_modules")
f.a.render(Object(o["a"])(E["a"],{courseId:ENV.course_id,moduleId:t.context_module.id,contextModules:e}),_)}},error(e,t){t.loadingImage("remove")}})
A()("#add_context_module_form .add_prerequisite_link").click((function(e){e.preventDefault()
const t=A()(this).parents("#add_context_module_form")
const i=t.data("current_module")
const o=A()("#module_list").clone(true).removeAttr("id")
const s=t.find("#criterion_blank_prereq").clone(true).removeAttr("id")
o.find("."+i.attr("id")).remove()
const _=[]
A()("#context_modules .context_module").each((function(){(A()(this)[0]==i[0]||_.length>0)&&_.push(A()(this).attr("id"))}))
for(const e in _)o.find("."+_[e]).hide()
o.attr("id","module_list_prereq")
s.find(".option").empty().append(o.show())
A()('<label for="module_list_prereq" class="screenreader-only" />').text(D.t("Select prerequisite module")).insertBefore(o)
t.find(".prerequisites_list .criteria_list").append(s).show()
s.show()
o.change(e=>{const t=A()(e.target)
const i=t.val()?t.find("option:selected").text():""
const o=t.closest(".criterion")
const s=o.find(".delete_criterion_link")
s.attr("aria-label",D.t("Delete prerequisite %{title}",{title:i}))})
o.focus()}))
A()("#add_context_module_form .add_completion_criterion_link").click((function(e){e.preventDefault()
const t=A()(this).parents("#add_context_module_form")
const i=t.data("current_module")
const o=A()("#completion_criterion_option").clone(true).removeAttr("id")
const s=o.find("select.id")
const _=t.find("#criterion_blank_req").clone(true).removeAttr("id")
_.find(".prereq_desc").remove()
modules.prerequisites()
const n={}
i.find(".content .context_module_item").not(".context_module_sub_header").each((function(){let e
const t=A()(this).getTemplateData({textValues:["id","type"]})
t.title=A()(this).find(".title").attr("title")
"assignment"==t.type?e=D.t("optgroup.assignments","Assignments"):"attachment"==t.type?e=D.t("optgroup.files","Files"):"quiz"==t.type?e=D.t("optgroup.quizzes","Quizzes"):"external_url"==t.type?e=D.t("optgroup.external_urls","External URLs"):"context_external_tool"==t.type?e=D.t("optgroup.external_tools","External Tools"):"discussion_topic"==t.type?e=D.t("optgroup.discussion_topics","Discussions"):"wiki_page"==t.type&&(e=D.t("Pages"))
let i=n[e]
if(!i){i=n[e]=A()(document.createElement("optgroup"))
i.attr("label",e)
s.append(i)}const o=t.title
const _=A()(document.createElement("option"))
_.val(t.id).text(o)
i.append(_)}))
_.find(".option").empty().append(o)
o.find(".id").change()
o.slideDown((function(){e.originalEvent&&A()("select:first",A()(this)).focus()}))
t.find(".completion_entry .criteria_list").append(_).show()
_.slideDown()
A()(".requirement-count-radio").show()
A()("#context_module_requirement_count_").change()}))
A()("#completion_criterion_option .id").change((function(){const e=A()(this).parents(".completion_criterion_option")
const t=A()("#context_module_item_"+A()(this).val()).getTemplateData({textValues:["type","graded"]})
e.find(".type option").hide().attr("disabled",true).end().find(".type option.any").show().attr("disabled",false).end().find(".type option."+t.type).show().attr("disabled",false)
"1"==t.graded&&e.find(".type option.graded").show().attr("disabled",false)
e.find(".type").val(e.find(".type option."+t.criterion_type+":first").val())
e.find(".type").change()}))
A()("#completion_criterion_option .type").change((function(){const e=A()(this).parents(".completion_criterion_option")
e.find(".min_score_box").showIf("min_score"==A()(this).val())
const t=e.find(".id").val()
const i=A.a.trim(A()("#context_module_item_"+t+" .points_possible_display").text().split(" ")[0])
if(i.length>0&&"min_score"==A()(this).val()){e.find(".points_possible").text(i)
e.find(".points_possible_parent").show()}else e.find(".points_possible_parent").hide()
const o=e.find(".id option:selected").text()
const s=e.find(".type option:selected").text()
e.closest(".criterion").find(".delete_criterion_link").attr("aria-label",D.t("Delete requirement %{item} (%{type})",{item:o,type:s}))}))
A()("#add_context_module_form .requirement-count-radio .ic-Radio input").change(()=>{if(A()("#context_module_requirement_count_").prop("checked"))A()(".require-sequential").show()
else{A()(".require-sequential").hide()
A()("#require_sequential_progress").prop("checked",false)}})
A()("#add_context_module_form .delete_criterion_link").click((function(e){e.preventDefault()
const t=A()(this).closest(".criteria_list")
const i=A()(this).parents(".completion_entry")
const o=A()(this).closest(".criterion")
const s=o.prev()
const _=s.length?A()(".delete_criterion_link",s):A()(".add_prerequisite_or_requirement_link",A()(this).closest(".form-section"))
o.slideUp((function(){A()(this).remove()
0===t.html().length&&0!==i.length&&A()(".requirement-count-radio").fadeOut("fast")
_.focus()}))}))
A()(".duplicate_module_link").live("click",(function(e){e.preventDefault()
const t=A()(this).attr("href")
const i=A()(this).parents(".context_module")
const s=qe
const _=A()('<div id="temporary-spinner" class="item-group-condensed"></div>')
_.insertAfter(i)
f.a.render(s,A()("#temporary-spinner")[0])
A.a.screenReaderFlashMessage(D.t("Duplicating Module, this may take some time"))
const n=function(e){e.data.ENV_UPDATE.forEach(e=>{ENV.MODULE_FILE_DETAILS[e.id]=e})
const t=e.data.context_module.id
const s=e.data.context_module.context_id
const n="/courses/".concat(s,"/modules")
pe["default"].get(n).then(e=>{const s=A()(e.data)
const n=s.find("#context_module_".concat(t))
_.remove()
n.insertAfter(i)
const a=n.find(".module_dnd")[0]
if(a){const e=document.getElementById("context_modules")
f.a.render(Object(o["a"])(E["a"],{courseId:ENV.course_id,moduleId:t,contextModules:e}),a)}n.find(".collapse_module_link").focus()
modules.updateAssignmentData()
A()(".delete_module_link").die()
A()(".duplicate_module_link").die()
A()(".duplicate_item_link").die()
A()(".add_module_link").die()
A()(".edit_module_link").die()
A()("#context_modules").off("addFileToModule")
A()("#add_context_module_form .add_prerequisite_link").off()
A()("#add_context_module_form .add_completion_criterion_link").off()
A()(".context_module").find(".expand_module_link,.collapse_module_link").bind("click keyclick",je)
modules.initModuleManagement()}).catch(Object(he["b"])(D.t("Error rendering duplicated module")))}
pe["default"].post(t,{}).then(n).catch(Object(he["b"])(D.t("Error duplicating module")))}))
A()(".delete_module_link").live("click",(function(e){e.preventDefault()
A()(this).parents(".context_module").confirmDelete({url:A()(this).attr("href"),message:D.t("confirm.delete","Are you sure you want to delete this module?"),cancelled(){A()(".ig-header-admin .al-trigger",A()(this)).focus()},success(e){const t=e.context_module.id
A()(".context_module .prerequisites .criterion").each((function(){const e=A()(this).getTemplateData({textValues:["id","type"]})
"context_module"==e.type&&e.id==t&&A()(this).remove()}))
const i=A()(this).prev()
const o=A()("#content .header-bar .add_module_link")
const s=i.length?A()(".ig-header-admin .al-trigger",i):o
const _=A()(this).find(".module_dnd")[0]
_&&f.a.unmountComponentAtNode(_)
A()(this).slideUp((function(){A()(this).remove()
modules.updateTaggedItems()
s.focus()}))
A.a.flashMessage(D.t("Module %{module_name} was successfully deleted.",{module_name:e.context_module.name}))}})}))
A()(".outdent_item_link,.indent_item_link").live("click",(function(e,t,i){e.preventDefault()
const o=A()(t)
const s=o&&o.attr("id")?"#"+o.attr("id"):t&&"."+o.attr("class")
const _=A()(this).closest(".cog-menu-container").children(".al-trigger")
const n=A()(this).hasClass("indent_item_link")
const a=A()(this).parents(".context_module_item")
let l=modules.currentIndent(a)
l=Math.max(Math.min(l+(n?1:-1),5),0)
a.loadingImage({image_size:"small"})
A.a.ajaxJSON(A()(this).attr("href"),"PUT",{"content_tag[indent]":l},e=>{a.loadingImage("remove")
const t=A()("#context_module_"+e.content_tag.context_module_id)
modules.addItemToModule(t,e.content_tag)
t.find(".context_module_items.ui-sortable").sortable("refresh")
modules.updateAssignmentData()},e=>{}).done(()=>{s?setTimeout(()=>{const e="."+A()(i).attr("class").split(" ").join(".")
A()(s).find(e).focus()},0):_.focus()})}))
A()(".edit_item_link").live("click",(function(e){e.preventDefault()
const t=A()(this).closest(".cog-menu-container").children(".al-trigger")
const i=A()(this).parents(".context_module_item")
const o=i.getTemplateData({textValues:["url","indent","new_tab"]})
o.title=i.find(".title").attr("title")
o.indent=modules.currentIndent(i)
A()("#edit_item_form").find(".external").showIf(i.hasClass("external_url")||i.hasClass("context_external_tool"))
A()("#edit_item_form").attr("action",A()(this).attr("href"))
A()("#edit_item_form").fillFormData(o,{object_name:"content_tag"})
const s=A()("#edit_item_form #content_tag_title")
const _=i.data().master_course_restrictions
const n=!ce()(ENV,"MASTER_COURSE_SETTINGS.IS_MASTER_COURSE")&&!!ce()(_,"content")
s.attr("disabled",n)
A()("#edit_item_form").dialog({title:D.t("titles.edit_item","Edit Item Details"),close(){A()("#edit_item_form").hideErrors()
t.focus()},minWidth:320}).fixDialogButtons()}))
A()("#edit_item_form .cancel_button").click(e=>{A()("#edit_item_form").dialog("close")})
A()("#edit_item_form").formSubmit({beforeSubmit(e){if(""==e["content_tag[title]"]){A()("#content_tag_title").errorBox(D.t("Title is required"))
return false}A()(this).loadingImage()},success(e){A()(this).loadingImage("remove")
const t=A()("#context_module_"+e.content_tag.context_module_id)
modules.addItemToModule(t,e.content_tag)
t.find(".context_module_items.ui-sortable").sortable("refresh")
0!=e.content_tag.content_id&&"ContextExternalTool"!=e.content_tag.content_type&&modules.updateAllItemInstances(e.content_tag)
modules.updateAssignmentData()
A()(this).dialog("close")},error(e){A()(this).loadingImage("remove")
A()(this).formErrors(e)}})
A()(".delete_item_link").live("click",(function(e){e.preventDefault()
const t=A()(this).closest(".cog-menu-container").children(".al-trigger")
const i=A()(this).parents(".context_module_items").children()
const o=A()(this).parents(".context_module")
const s=i.index(A()(this).parents(".context_module_item"))
const _=s-1
let n
if(_>=0){const e=i[_]
n=A()(e).hasClass("context_module_sub_header")?A()(e).find(".cog-menu-container .al-trigger"):A()(e).find(".item_link")}else n=A()(this).closest(".editable_context_module").find("button.al-trigger")
A()(this).parents(".context_module_item").confirmDelete({url:A()(this).attr("href"),message:D.t("confirm.delete_item","Are you sure you want to remove this item from the module?"),success(e){A()(this).slideUp((function(){A()(this).remove()
modules.updateTaggedItems()
n.focus()
be(o)}))
A.a.flashMessage(D.t("Module item %{module_item_name} was successfully deleted.",{module_item_name:e.content_tag.title}))},cancelled(){t.focus()}})}))
A()(".move_module_item_link").on("click keyclick",(function(e){e.preventDefault()
const t=A()(this).parents(".context_module_item")[0]
const i=document.querySelectorAll("#context_modules .context_module")
const o=Array.prototype.map.call(i,e=>{const t=e.getAttribute("id").substring("context_module_".length)
const i=e.querySelector(".header > .collapse_module_link > .name").textContent
const o=e.querySelectorAll(".context_module_item")
const s=Array.prototype.map.call(o,e=>({id:e.getAttribute("id").substring("context_module_item_".length),title:e.querySelector(".title").textContent.trim()}))
return{id:t,title:i,items:s}})
const s={title:D.t("Move Module Item"),items:[{id:t.getAttribute("id").substring("context_module_item_".length),title:t.querySelector(".title").textContent.trim()}],moveOptions:{groupsLabel:D.t("Modules"),groups:o},formatSaveUrl:e=>{let t=e.groupId
return"".concat(ENV.CONTEXT_URL_ROOT,"/modules/").concat(t,"/reorder")},onMoveSuccess:e=>{let t=e.data,i=e.itemIds,o=e.groupId
const s=i[0]
const _=A()("#context_module_".concat(o," .ui-sortable"))
_.sortable("disable")
const n=document.querySelector("#context_module_item_".concat(s))
_[0].appendChild(n)
const a=t.context_module.content_tags.map(e=>e.content_tag.id)
Object(b["c"])(a,_[0],e=>"#context_module_item_".concat(e))
_.sortable("enable").sortable("refresh")},focusOnExit:()=>t.querySelector(".al-trigger")}
Object(b["b"])(s,document.getElementById("not_right_side"))}))
A()(".move_module_link").on("click keyclick",(function(e){e.preventDefault()
const t=A()(this).parents(".context_module")[0]
const i=document.querySelectorAll("#context_modules .context_module")
const o=Array.prototype.map.call(i,e=>{const t=e.getAttribute("id").substring("context_module_".length)
const i=e.querySelector(".header > .collapse_module_link > .name").textContent
return{id:t,title:i}})
const s={title:D.t("Move Module"),items:[{id:t.getAttribute("id").substring("context_module_".length),title:t.querySelector(".header > .collapse_module_link > .name").textContent}],moveOptions:{siblings:o},formatSaveUrl:()=>"".concat(ENV.CONTEXT_URL_ROOT,"/modules/reorder"),onMoveSuccess:e=>{const t=document.querySelector("#context_modules.ui-sortable")
Object(b["c"])(e.data.map(e=>e.context_module.id),t,e=>"#context_module_".concat(e))
A()(t).sortable("refresh")},focusOnExit:()=>t.querySelector(".al-trigger")}
Object(b["b"])(s,document.getElementById("not_right_side"))}))
A()(".move_module_contents_link").on("click keyclick",(function(e){e.preventDefault()
const t=A()(this).parents(".context_module")[0]
const i=document.querySelectorAll("#context_modules .context_module")
const o=Array.prototype.map.call(i,e=>{const t=e.getAttribute("id").substring("context_module_".length)
const i=e.querySelector(".header > .collapse_module_link > .name").textContent
const o=e.querySelectorAll(".context_module_item")
const s=Array.prototype.map.call(o,e=>({id:e.getAttribute("id").substring("context_module_item_".length),title:e.querySelector(".title").textContent.trim()}))
return{id:t,title:i,items:s}})
const s=t.querySelectorAll(".context_module_item")
const _=Array.prototype.map.call(s,e=>({id:e.getAttribute("id").substring("context_module_item_".length),title:e.querySelector(".title").textContent.trim()}))
if(0===_.length)return
_[0].groupId=t.getAttribute("id").substring("context_module_".length)
const n={title:D.t("Move Contents Into"),items:_,moveOptions:{groupsLabel:D.t("Modules"),groups:o,excludeCurrent:true},formatSaveUrl:e=>{let t=e.groupId
return"".concat(ENV.CONTEXT_URL_ROOT,"/modules/").concat(t,"/reorder")},onMoveSuccess:e=>{let t=e.data,i=e.itemIds,o=e.groupId
const s=A()("#context_module_".concat(o," .ui-sortable"))
s.sortable("disable")
i.forEach(e=>{const t=document.querySelector("#context_module_item_".concat(e))
s[0].appendChild(t)})
const _=t.context_module.content_tags.map(e=>e.content_tag.id)
Object(b["c"])(_,s[0],e=>"#context_module_item_".concat(e))
s.sortable("enable").sortable("refresh")},focusOnExit:()=>t.querySelector(".al-trigger")}
Object(b["b"])(n,document.getElementById("not_right_side"))}))
A()(".drag_and_drop_warning").on("focus",e=>{A()(e.currentTarget).removeClass("screenreader-only")})
A()(".drag_and_drop_warning").on("blur",e=>{A()(e.currentTarget).addClass("screenreader-only")})
A()(".edit_module_link").live("click",(function(e){e.preventDefault()
modules.editModule(A()(this).parents(".context_module"))}))
A()(".add_module_link").live("click",e=>{e.preventDefault()
modules.addModule()})
A()("#context_modules").on("addFileToModule",e=>{e.preventDefault()
const t=e.originalEvent.moduleId
const i=e.originalEvent.attachment
const o={"item[id]":i.id,"item[type]":"attachment","item[title]":i.display_name}
s(t,false)(o)})
A()(".add_module_item_link").on("click",(function(e){e.preventDefault()
const t=A()(e.currentTarget)
t.blur()
const i=A()(this).closest(".context_module")
if(i.hasClass("collapsed_module")){i.find(".expand_module_link").triggerHandler("click",()=>{i.find(".add_module_item_link").click()})
return}if(C["a"]&&C["a"].selectContentDialog){var o,_
const e=A()(this).parents(".context_module").find(".header").attr("id")
const i=A()(this).parents(".context_module").find(".name").attr("title")
const n={for_modules:true,context_module_id:e}
const a=!!(null===(o=window.ENV)||void 0===o?void 0:null===(_=o.FEATURES)||void 0===_?void 0:_.responsive_misc)
const l=window.matchMedia("(min-width: 500px)").matches
const d=window.matchMedia("(min-width: 770px)").matches
const r=d?770:l?500:320
n.select_button_text=D.t("buttons.add_item","Add Item")
n.holder_name=i
n.height=550
n.width=a?r:770
n.dialog_title=D.t("titles.add_item","Add Item to %{module}",{module:i})
n.close=function(){t.focus()}
n.submit=s(e)
C["a"].selectContentDialog(n)}}))
function s(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
return i=>{const o=A()("#context_module_"+e)
let s=modules.getNextPosition(o)
i.content_details=["items"]
i["item[position]"]=s++
let n=modules.addItemToModule(o,i)
o.find(".context_module_items.ui-sortable").sortable("refresh").sortable("disable")
const a=o.find(".add_module_item_link").attr("rel")
o.disableWhileLoading(A.a.ajaxJSON(a,"POST",i,e=>{n.remove()
e.content_tag.type=i["item[type]"]
n=modules.addItemToModule(o,e.content_tag)
o.find(".context_module_items.ui-sortable").sortable("enable").sortable("refresh")
_(n,e.content_tag)
modules.updateAssignmentData()
n.find(".lock-icon").data({moduleType:e.content_tag.type,contentId:e.content_tag.content_id,moduleItemId:e.content_tag.id})
modules.loadMasterCourseData(e.content_tag.id)}),{onComplete(){t&&o.find(".add_module_item_link").focus()}})}}A()(".duplicate_item_link").live("click",(function(e){e.preventDefault()
const t=A()(this).closest(".context_module")
const i=A()(this).attr("href")
pe["default"].post(i).then(e=>{let i=e.data
const o=modules.addItemToModule(t,i.content_tag)
_(o,i.content_tag)
modules.updateAssignmentData()
o.find(".lock-icon").data({moduleType:i.content_tag.type,contentId:i.content_tag.content_id,moduleItemId:i.content_tag.id})
modules.loadMasterCourseData(i.content_tag.id)
t.find(".context_module_items.ui-sortable").sortable("disable")
i.new_positions.forEach(e=>{let i=e.content_tag
t.find("#context_module_item_".concat(i.id)).fillTemplateData({data:{position:i.position}})})
A()("#context_module_item_".concat(i.content_tag.id," .item_link")).focus()
t.find(".context_module_items.ui-sortable").sortable("enable").sortable("refresh")}).catch(Object(he["b"])("Error duplicating item"))}))
A()("#add_module_prerequisite_dialog .cancel_button").click(()=>{A()("#add_module_prerequisite_dialog").dialog("close")})
A()(".delete_prerequisite_link").live("click",(function(e){e.preventDefault()
const t=A()(this).parents(".criterion")
const i=[]
A()(this).parents(".context_module .prerequisites .criterion").each((function(){if(A()(this)[0]!=t[0]){const e=A()(this).getTemplateData({textValues:["id","type"]})
const t="context_module"==e.type?"module":e.type
i.push(t+"_"+e.id)}}))
const o=A()(this).parents(".context_module").find(".edit_module_link").attr("href")
const s={"context_module[prerequisites]":i.join(",")}
t.dim()
A.a.ajaxJSON(o,"PUT",s,e=>{A()("#context_module_"+e.context_module.id).triggerHandler("update",e)})}))
A()("#add_module_prerequisite_dialog .submit_button").click((function(){const e=A()("#add_module_prerequisite_dialog .prerequisite_module_select select").val()
if(!e)return
A()("#add_module_prerequisite_dialog").loadingImage()
const t=[]
t.push("module_"+e)
const i=A()("#context_module_"+A()("#add_module_prerequisite_dialog").getTemplateData({textValues:["context_module_id"]}).context_module_id)
i.find(".prerequisites .criterion").each((function(){t.push("module_"+A()(this).getTemplateData({textValues:["id","name","type"]}).id)}))
const o=i.find(".edit_module_link").attr("href")
const s={"context_module[prerequisites]":t.join(",")}
A.a.ajaxJSON(o,"PUT",s,e=>{A()("#add_module_prerequisite_dialog").loadingImage("remove")
A()("#add_module_prerequisite_dialog").dialog("close")
A()("#context_module_"+e.context_module.id).triggerHandler("update",e)},e=>{A()("#add_module_prerequisite_dialog").loadingImage("remove")
A()("#add_module_prerequisite_dialog").formErrors(e)})}))
A()(".context_module .add_prerequisite_link").live("click",(function(e){e.preventDefault()
const t=A()(this).parents(".context_module").find(".header").getTemplateData({textValues:["name","id"]})
A()("#add_module_prerequisite_dialog").fillTemplateData({data:{module_name:t.name,context_module_id:t.id}})
const i=A()(this).parents(".context_module")
const o=A()("#module_list").clone(true).removeAttr("id")
o.find("."+i.attr("id")).remove()
const s=[]
A()("#context_modules .context_module").each((function(){(A()(this)[0]==i[0]||s.length>0)&&s.push(A()(this).getTemplateData({textValues:["id"]}).id)}))
for(const e in s)o.find(".context_module_"+s[e]).hide()
A()("#add_module_prerequisite_dialog").find(".prerequisite_module_select").empty().append(o.show())
A()("#add_module_prerequisite_dialog").dialog({title:D.t("titles.add_prerequisite","Add Prerequisite to %{module}",{module:t.name}),width:400})}))
A()("#add_context_module_form .cancel_button").click(e=>{modules.hideEditModule(true)})
requestAnimationFrame((function(){const e=[]
A()("#context_modules .context_module_items").each((function(){e.push(A()(this))}))
var t=function t(){if(e.length>0){const i=e.shift()
const o=modules.sortable_module_options
o.update=modules.updateModuleItemPositions
i.sortable(o)
requestAnimationFrame(t)}}
t()
A()("#context_modules").sortable({handle:".reorder_module_link",helper:"clone",axis:"y",update:modules.updateModulePositions})
modules.refreshModuleList()
modules.refreshed=true}))
function _(e,t){const i={moduleType:t.type,id:t.publishable_id,moduleItemName:t.moduleItemName,moduleItemId:t.id,moduleId:t.context_module_id,courseId:t.context_id,published:t.published,publishable:t.publishable,unpublishable:t.unpublishable,content_details:t.content_details,isNew:true}
const o=l(e.find(".publish-icon"),i)
p(o.model,o)}var l=function(e,t){t=t||e.data()
if("attachment"==t.moduleType){let i={}
if(t.isNew){i=t||{}
e.attr("data-module-type","attachment")}else i=ENV.MODULE_FILE_DETAILS[parseInt(t.moduleItemId,10)]
i.content_details=i.content_details||{}
const o=new n["a"]({type:"file",id:i.content_id||i.id,locked:i.content_details.locked,hidden:i.content_details.hidden,unlock_at:i.content_details.unlock_at,lock_at:i.content_details.lock_at,display_name:i.content_details.display_name,thumbnail_url:i.content_details.thumbnail_url,usage_rights:i.content_details.usage_rights})
o.url=function(){return"/api/v1/files/"+this.id}
const s={model:o,togglePublishClassOn:e.parents(".ig-row")[0],userCanManageFilesForContext:ENV.MODULE_FILE_PERMISSIONS.manage_files,usageRightsRequiredForContext:ENV.MODULE_FILE_PERMISSIONS.usage_rights_required,fileName:o.displayName()}
const _=r.a.createElement(a["a"],s)
f.a.render(_,e[0])
return{model:o}}const i=new w({module_type:t.moduleType,content_id:t.contentId,id:t.id,module_id:t.moduleId,module_item_id:t.moduleItemId,module_item_name:t.moduleItemName,course_id:t.courseId,published:t.published,publishable:t.publishable,unpublishable:t.unpublishable})
const o={model:i,title:t.publishTitle,el:e[0]}
const s=new q["a"](o)
const _=e.closest(".ig-row")
t.published&&_.addClass("ig-published")
s.render()
return s}
const d={}
const u=function(e,t){let i,o,s,_
o=d[ze(e)||ze(t)]
if(o)for(i=0;i<o.length;i++){s=o[i]
_=s.model.parse(e)
if("File"==_.type)s.model.set({locked:!_.published})
else{s.model.set({published:_.published})
s.model.view.render()}}}
const m=function(t){const i=t.publish,o=t.unpublish
t.publish=function(){return i.apply(t,arguments).done(i=>{i.publish_warning&&A.a.flashWarning(D.t("Some module items could not be published"))
e.renderIfNeeded(i)
t.fetch({data:{include:"items"}}).done(e=>{for(let i=0;i<e.items.length;i++)u(e.items[i],t)})})}
t.unpublish=function(){return o.apply(t,arguments).done(()=>{t.fetch({data:{include:"items"}}).done(e=>{for(let i=0;i<e.items.length;i++)u(e.items[i],t)})})}}
const c=function(e){const t=e.publish,i=e.unpublish
e.publish=function(){return t.apply(e,arguments).done(t=>{u(A.a.extend({published:true},t),e)})}
e.unpublish=function(){return i.apply(e,arguments).done(t=>{u(A.a.extend({published:false},t),e)})}}
var p=function(e,t){const i=ze(e)
null===i?m(e):c(e)
d[i]||(d[i]=[])
d[i].push({model:e,view:t})}
A()(".publish-icon").each((e,t)=>{const i=A()(t)
if(i.data("id")){const e=l(i)
p(e.model,e)}})
A()(".module-publish-link").each((e,t)=>{const i=A()(t)
const o=new se({published:i.hasClass("published"),id:i.attr("data-id")},{url:i.attr("data-url"),root:"module"})
const s=new _e["a"]({model:o,el:i})
s.render()})}
const Me={page:"wiki_page",discussion:"discussion_topic",external_tool:"context_external_tool",sub_header:"context_module_sub_header"}
function ze(e){if(null===e)return null
let t=e.attributes||e,i=A.a.underscore(t.module_type||t.type),o=t.content_id||t.id
i=Me[i]||i
if(i&&"module"!==i){if("wiki_page"==i){i="wiki_page"
o=t.page_url||t.id}else"context_module_sub_header"!==i&&"external_url"!==i&&"context_external_tool"!=i||(o=t.id)
return i+"_"+o}return null}var je=function(e){e.preventDefault()
const t=null
const i=A()(this).hasClass("collapse_module_link")?"1":"0"
const o=A()(this).parents(".context_module")
const s=0===o.find(".content .context_module_items").children().length
const _=function(e){const i=function(){o.find(".collapse_module_link").css("display",o.find(".content:visible").length>0?"inline-block":"none")
o.find(".expand_module_link").css("display",0===o.find(".content:visible").length?"inline-block":"none")
if(o.find(".content:visible").length>0){o.find(".footer .manage_module").css("display","")
o.toggleClass("collapsed_module",false)
o.find(".collapse_module_link").focus()
A.a.screenReaderFlashMessage(D.t("Expanded"))}else{o.find(".footer .manage_module").css("display","")
o.toggleClass("collapsed_module",true)
o.find(".expand_module_link").focus()
A.a.screenReaderFlashMessage(D.t("Collapsed"))}t&&A.a.isFunction(t)&&t()}
if(e){o.find(".content").show()
i()}else o.find(".content").slideToggle(i)}
s&&o.loadingImage()
const n=A()(this).attr("href")
A.a.ajaxJSON(n,"POST",{collapse:i},e=>{if(s){o.loadingImage("remove")
for(const t in e)modules.addItemToModule(o,e[t].content_tag)
o.find(".context_module_items.ui-sortable").sortable("refresh")
_()
modules.updateProgressionState(o)}},e=>{o.loadingImage("remove")})
"1"!=i&&s||_()}
function Ee(e){return"none"===e.style.display||e.parentElement.classList.contains("collapsed_module")}modules.updateAssignmentData(()=>{modules.updateProgressions((function(){if(window.location.hash&&!window.location.hash.startsWith("#!"))try{fe(A()(window.location.hash))}catch(e){}else{var e
const t=null===(e=document.querySelector(".context_module"))||void 0===e?void 0:e.querySelector(".content")
if(!t||Ee(t)){const e=[...document.querySelectorAll(".context_module .content")].find(e=>!Ee(e))
e&&fe(A()(e).parents(".context_module"))}}}))})
A()(document).ready((function(){A()(".context_module").each((function(){be(A()(this))}))
if(ENV.IS_STUDENT){A()(".context_module").addClass("student-view")
A()(".context_module_item .ig-row").addClass("student-view")}A()(".external_url_link").click((function(e){P.externalUrlLinkClick(e,A()(this))}))
A()(".datetime_field").datetime_field()
A()(".context_module").live("mouseover",(function(){A()(".context_module_hover").removeClass("context_module_hover")
A()(this).addClass("context_module_hover")}))
A()(".context_module_item").live("mouseover focus",(function(){A()(".context_module_item_hover").removeClass("context_module_item_hover")
A()(this).addClass("context_module_item_hover")}))
A()(".context_module_item").each((e,t)=>{modules.evaluateItemCyoe(t)})
let e=null
const t=function(e){if(e.hasClass("context_module")){A()(".context_module_hover").removeClass("context_module_hover")
A()(".context_module_item_hover").removeClass("context_module_item_hover")
e.addClass("context_module_hover")}else if(e.hasClass("context_module_item")){A()(".context_module_item_hover").removeClass("context_module_item_hover")
A()(".context_module_hover").removeClass("context_module_hover")
e.addClass("context_module_item_hover")
e.parents(".context_module").addClass("context_module_hover")}e.find(":tabbable:first").focus()}
const i=function(i){i=i||{}
let o
if(e){if(e&&e.hasClass("context_module")){o=i.selectWhenModuleFocused&&i.selectWhenModuleFocused.item
o=o.length?o:i.selectWhenModuleFocused&&i.selectWhenModuleFocused.fallbackModule}else if(e&&e.hasClass("context_module_item")){o=i.selectWhenModuleItemFocused&&i.selectWhenModuleItemFocused.item
o=o.length?o:i.selectWhenModuleItemFocused&&i.selectWhenModuleItemFocused.fallbackModule}}else o=A()(".context_module:first")
t(o)
return o}
const s=function(e){const t=e&&e.closest(".context_module_item_hover").length?".context_module_item_hover":".context_module_hover"
return e.closest(t)}
const _=A()(document)
_.keycodes("k up",t=>{const o={selectWhenModuleFocused:{item:e&&e.prev(".context_module").find(".context_module_item:visible:last"),fallbackModule:e&&e.prev(".context_module")},selectWhenModuleItemFocused:{item:e&&e.prev(".context_module_item:visible"),fallbackModule:e&&e.parents(".context_module")}}
const s=i(o)
s.length&&(e=s)})
_.keycodes("j down",t=>{const o={selectWhenModuleFocused:{item:e&&e.find(".context_module_item:visible:first"),fallbackModule:e&&e.next(".context_module")},selectWhenModuleItemFocused:{item:e&&e.next(".context_module_item:visible"),fallbackModule:e&&e.parents(".context_module").next(".context_module")}}
const s=i(o)
s.length&&(e=s)})
_.keycodes("e d space",t=>{if(!e)return
const i=s(e)
const o=i.hasClass("context_module_item_hover")
if("e"==t.keyString)o?e.find(".edit_item_link:first").click():e.find(".edit_module_link:first").click()
else if("d"==t.keyString)if(o){e.find(".delete_item_link:first").click()
e=e.parents(".context_module")}else{e.find(".delete_module_link:first").click()
e=null}else"space"==t.keyString&&(o?e.find(".move_module_item_link:first").click():e.find(".move_module_link:first").click())
t.preventDefault()})
_.keycodes("n",e=>{A()(".add_module_link:visible:first").click()
e.preventDefault()})
_.keycodes("i o",t=>{if(!e)return
const i=e.attr("id")
"i"==t.keyString?e.find(".indent_item_link:first").trigger("click",[e,document.activeElement]):"o"==t.keyString&&e.find(".outdent_item_link:first").trigger("click",[e,document.activeElement])
_.ajaxStop(()=>{e=A()("#"+i)})})
if(A()("#context_modules").hasClass("editable")){requestAnimationFrame(modules.initModuleManagement)
modules.loadMasterCourseData()}A()(".context_module").find(".expand_module_link,.collapse_module_link").bind("click keyclick",je)
A()(document).fragmentChange((e,t)=>{if("#student_progressions"==t)A()(".module_progressions_link").trigger("click")
else if(!t.startsWith("#!")){const e=A()(t.replace(/module/,"context_module"))
e.hasClass("collapsed_module")&&e.find(".expand_module_link").triggerHandler("click")}})
const n=ENV.COLLAPSED_MODULES
for(const e in n)A()("#context_module_"+n[e]).addClass("collapsed_module")
const a=A()("#context_modules .context_module")
if(!a.length){A()("#no_context_modules_message").show()
A()("#context_modules_sortable_container").addClass("item-group-container--is-empty")}a.each((function(){modules.updateProgressionState(A()(this))}))
function l(e,t,i,s){const _=()=>{var e
l(null)
s.focus();(null===re["ltiState"]||void 0===re["ltiState"]?void 0:null===(e=re["ltiState"].tray)||void 0===e?void 0:e.refreshOnClose)&&window.location.reload()}
f.a.render(Object(o["a"])(de["a"],{tool:e,placement:"module_index_menu",acceptedResourceTypes:["assignment","audio","discussion_topic","document","image","module","quiz","page","video"],targetResourceType:"module",allowItemSelection:i,selectableItems:t,onDismiss:_,open:null!==e}),A()("#external-tool-mount-point")[0])}function d(e){null!=e&&e.preventDefault()
const t=e.target.dataset.toolLaunchType
const i=(ENV.MODULE_TRAY_TOOLS[t]||[]).find(t=>t.id===e.target.dataset.toolId)
const o=[]
if("module_index_menu"==t)o.push({course_id:ENV.COURSE_ID,type:"module"})
else if("module_group_menu"==t){const t=A()(e.target).parents(".context_module")
o.push({id:t.attr("id").substring("context_module_".length),name:t.find(".name").attr("title")})}l(i,o,"module_index_menu"==t,A()(".al-trigger")[0])}A()(".menu_tray_tool_link").click(d)
Object(ue["a"])()}))
t["a"]=modules},OShF:function(e,t,i){"use strict"
var o=i("ouhR")
var s=i.n(o)
var _=i("5Ky4")
i("JI1W")
s.a.fn.fillTemplateData=function(e){if(this.length&&e){e.iterator&&this.find("*").andSelf().each((function(){const t=s()(this)
s.a.each(["name","id","class"],(i,o)=>{t.attr(o)&&t.attr(o,t.attr(o).replace(/-iterator-/,e.iterator))})}))
e.id&&this.attr("id",e.id)
let o=false
if(e.data)for(var t in e.data){if(e.except&&-1!=s.a.inArray(t,e.except))continue
e.data[t]&&e.dataValues&&-1!=s.a.inArray(t,e.dataValues)&&this.data(t,e.data[t].toString())
const n=this.find("."+t)
var i=e.avoid||""
n.each((function(){const n=s()(this)
if(n.length>0&&0===n.closest(i).length){"undefined"!==typeof e.data[t]&&null!==e.data[t]||(e.data[t]="")
if(e.htmlValues&&-1!=s.a.inArray(t,e.htmlValues)){n.html(s.a.raw(e.data[t].toString()))
if(n.hasClass("user_content")){o=true
n.removeClass("enhanced")
n.data("unenhanced_content_html",e.data[t].toString())}}else if("INPUT"==n[0].tagName.toUpperCase())n.val(e.data[t])
else try{const i=e.data[t].toString()
n.html(Object(_["a"])(i))}catch(e){}}}))}e.hrefValues&&e.data&&this.find("a,span[rel]").each((function(){let t,i,o,_=s()(this)
for(const n in e.hrefValues){if(!e.hrefValues.hasOwnProperty(n))continue
const a=e.hrefValues[n]
if(t=_.attr("href")){const i=s.a.replaceTags(t,a,encodeURIComponent(e.data[a]))
const o=_.text()===_.html()?_.text():null
if(t!==i){_.attr("href",i)
o&&_.text(o)}}(i=_.attr("rel"))&&_.attr("rel",s.a.replaceTags(i,a,e.data[a]));(o=_.attr("name"))&&_.attr("name",s.a.replaceTags(o,a,e.data[a]))}}))
o&&s()(document).triggerHandler("user_content_change")}return this}
s.a.fn.fillTemplateData.defaults={htmlValues:null,hrefValues:null}
s.a.fn.getTemplateData=function(e){if(!this.length||!e)return{}
var t,i={}
if(e.textValues){const t=this
e.textValues.forEach(e=>{const _=t.find("."+e.replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
o=s.a.trim(_.text())
"&nbsp;"===_.html()&&(o="")
1===o.length&&160===o.charCodeAt(0)&&(o="")
i[e]=o})}if(e.dataValues)for(t in e.dataValues){var o=this.data(e.dataValues[t])
o&&(i[e.dataValues[t]]=o)}if(e.htmlValues)for(t in e.htmlValues){const _=this.find("."+e.htmlValues[t].replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
o=null
o=_.hasClass("user_content")&&_.data("unenhanced_content_html")?_.data("unenhanced_content_html"):s.a.trim(_.html())
i[e.htmlValues[t]]=o}return i}
s.a.fn.getTemplateValue=function(e,t){const i=s.a.extend({},t,{textValues:[e]})
return this.getTemplateData(i)[e]}},"Vj0+":function(e,t,i){"use strict"
i.d(t,"a",(function(){return o}))
function o(e){const t=new URL(e,window.location.origin)
if("javascript:"===t.protocol)return"about:blank"
return e}},"XGn+":function(e,t,i){"use strict"
t["a"]=function(e){if(!e)return[]
const t={}
e.split(",").map(e=>e.split("; ")).forEach(e=>{const i=e[0].substring(1,e[0].length-1)
let o=e[1].split("=")
o=o[1]
o=o.substring(1,o.length-1)
t[o]=i})
return t}},btHx:function(e,t,i){"use strict"
var o=i("ouhR")
var s=i.n(o)
var _=i("FIFq")
var n=i.n(_)
var a=i("GLiE")
var l=i.n(a)
var d,r=function(e,t){return function(){return e.apply(t,arguments)}},u=function(e,t){for(var i in t)m.call(t,i)&&(e[i]=t[i])
function o(){this.constructor=e}o.prototype=t.prototype
e.prototype=new o
e.__super__=t.prototype
return e},m={}.hasOwnProperty,c=[].slice,p=[].indexOf||function(e){for(var t=0,i=this.length;t<i;t++)if(t in this&&this[t]===e)return t
return-1}
d=function(e){null==e&&(e="")
return e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()}
t["a"]=function(e){u(t,e)
function t(){this._setStateAfterFetch=r(this._setStateAfterFetch,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.nameRegex=/rel="([a-z]+)/
t.prototype.linkRegex=/^<([^>]+)/
t.prototype.pageRegex=/\Wpage=(\d+)/
t.prototype.perPageRegex=/\Wper_page=(\d+)/
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.urls={}}
t.prototype.fetch=function(e){var i,o,_,n
null==e&&(e={})
e=l.a.clone(e)
this.loadedAll=false
o="fetching"+d(e.page)+"Page"
this[o]=true
if(null!=e.page){null==e.remove&&(e.remove=false)
if(null!=(_=this.urls)?_[e.page]:void 0){e.url=this.urls[e.page]
e.data=""}}else null==e.reset&&(e.reset=true)
null!=e.fetchOptions&&(e.data=e.fetchOptions)
this.trigger("beforeFetch",this,e)
null!=e.page&&this.trigger("beforeFetch:"+e.page,this,e)
n=null
e.dataFilter=(a=this,function(t){a[o]=false
a._setStateAfterFetch(n,e)
return t})
var a
i=e.dfd||s.a.Deferred()
n=t.__super__.fetch.call(this,e).done(function(t){return function(o,s,_){var n
t.trigger("fetch",t,o,e)
null!=e.page&&t.trigger("fetch:"+e.page,t,o,e);(null!=(n=t.urls)?n.next:void 0)||t.trigger.apply(t,["fetched:last"].concat(c.call(arguments)))
return t.loadAll&&null!=t.urls.next?setTimeout((function(){return t.fetch({page:"next",dfd:i})})):i.resolve(o,s,_)}}(this))
i.abort=n.abort
i.success=i.done
i.error=i.fail
return i}
t.prototype.canFetch=function(e){return null!=this.urls&&null!=this.urls[e]}
t.prototype._setStateAfterFetch=function(e,t){var i,o,s,_,n,a,l,d,r,u,m,c,h,f
null==this._urlCache&&(this._urlCache=[])
f=(a=t.url,p.call(this._urlCache,a)<0)
f||this._urlCache.push(t.url)
o=!this.atLeastOnePageFetched
m=o||("next"===(l=t.page)||"bottom"===l)&&f
c=o||("prev"===(d=t.page)||"top"===d)&&f
_=this.urls
this.urls=this._parsePageLinks(e)
m&&null!=this.urls.next?this.urls.bottom=this.urls.next:this.urls.next?this.urls.bottom=_.bottom:delete this.urls.bottom
c&&null!=this.urls.prev?this.urls.top=this.urls.prev:this.urls.prev?this.urls.top=_.top:delete this.urls.top
h=null!=(r=this.urls.first)?r:this.urls.next
if(null!=h){n=parseInt(h.match(this.perPageRegex)[1],10);(null!=(i=null!=this.options?this.options:this.options={}).params?i.params:i.params={}).per_page=n}this.urls.last&&(s=this.urls.last.match(this.pageRegex))&&(this.totalPages=parseInt(s[1],10));(null!=(u=this.urls)?u.next:void 0)||(this.loadedAll=true)
return this.atLeastOnePageFetched=true}
t.prototype._parsePageLinks=function(e){var t,i
t=null!=(i=e.getResponseHeader("link"))?i.split(","):void 0
null==t&&(t=[])
return l.a.reduce(t,(o=this,function(e,t){var i,s
i=t.match(o.nameRegex)[1]
s=t.match(o.linkRegex)[1]
e[i]=s
return e}),{})
var o}
return t}(n.a.Collection)},goGJ:function(e,t,i){"use strict"
i.d(t,"a",(function(){return _}))
var o=i("ouhR")
var s=i.n(o)
i("rEd+")
function _(){return s()(".vdd_tooltip_link").tooltip({position:{my:"center bottom",at:"center top-10",collision:"fit fit"},tooltipClass:"center bottom vertical",content(){const e=s()(this).data("tooltipSelector")
try{const t=document.querySelector(e)
return s()(t).html()}catch(e){}}})}},kX4z:function(e,t,i){"use strict"
var o=i("7FZx")
var s=i("GLiE")
var _=i.n(s)
var n=function(e,t){for(var i in t)a.call(t,i)&&(e[i]=t[i])
function o(){this.constructor=e}o.prototype=t.prototype
e.prototype=new o
e.__super__=t.prototype
return e},a={}.hasOwnProperty
t["a"]=function(e){n(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.publishClass="publish-icon-publish"
t.prototype.publishedClass="publish-icon-published"
t.prototype.unpublishClass="publish-icon-unpublish"
t.prototype.tagName="span"
t.prototype.className="publish-icon"
t.optionProperty("title")
t.optionProperty("publishText")
t.optionProperty("unpublishText")
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.events=_.a.extend({},o["a"].prototype.events,this.events)}
t.prototype.events={keyclick:"click"}
return t}(o["a"])},lHb5:function(e,t,i){"use strict"
var o=i("An8g")
var s=i("q1tI")
var _=i.n(s)
i("17x9")
var n=i("UWxV")
var a=i("ODXe")
var l=i("x1Tw")
var d=i("XGn+")
var r=i("dfg0")
function u(e,t){return Promise.all([e,t]).then(e=>{let t=Object(a["a"])(e,2),i=t[0],o=t[1]
return i.concat(o)})}function m(e){return Promise.resolve(e.data.map(e=>new r["a"](e)))}function c(e){return l["default"].get(e).then(e=>{var t,i
const o=null===(t=Object(d["a"])(null===(i=e.headers)||void 0===i?void 0:i.link))||void 0===t?void 0:t.next
return o?u(m(e),c(o)):m(e)})}function p(e){return c("/api/v1/folders/".concat(e,"/files?only[]=names"))}function h(e){return l["default"].get("/api/v1/courses/".concat(e,"/folders/root")).then(e=>{let t=e.data
return t})}var f=i("dqQ7")
var b=i("UT5+")
var g=i("agq5")
var y=i("whu9")
var v=i("ZbPE")
var k=i("bERd")
var x=i("DJO9")
var w=i("PK8i")
var q=i("1tEO")
i.d(t,"a",(function(){return M}))
class M extends _.a.Component{constructor(e){super(e)
this.showAlert=()=>{Object(f["a"])({type:"error",message:n["a"].t("Unable to set up drag and drop for modules")})}
this.handleDragEnter=()=>{this.setState({hightlightUpload:true})}
this.handleDragLeave=()=>{this.setState({hightlightUpload:false})}
this.handleDrop=e=>{const t=this.props,i=t.moduleId,o=t.contextModules
const s=this.state.folder
this.setInteractionOnAll(false)
k["a"].prototype.onUploadPosted=e=>{this.addFile(e)
if(o){const t=new Event("addFileToModule")
t.moduleId=i
t.attachment=e
o.dispatchEvent(t)}}
w["a"].setUploadOptions({alwaysRename:false,alwaysUploadZips:true})
this.setState({hightlightUpload:false,isUploading:true},()=>{w["a"].setFolder(s)
w["a"].setOptionsFromFiles(e,true)})}
this.handleEmptyUpload=()=>{this.setState({isUploading:false})
this.setInteractionOnAll(true)}
this.renameFileMessage=e=>n["a"].t('A file named "%{name}" already exists. Do you want to replace the existing file?',{name:e})
this.lockFileMessage=e=>n["a"].t('A locked file named "%{name}" already exists. Please enter a new name.',{name:e})
this.handleUploadChange=e=>{0===e&&this.setInteractionOnAll(true)
this.setState({isUploading:e>0})}
this.state={hightlightUpload:false,isUploading:false,folder:null,contextType:null,contextId:null,interaction:true}}componentDidMount(){Object.keys(M.folderState).length>0&&this.setFolderState(M.folderState)
0===M.activeDrops.size&&this.fetchRootFolder()
M.activeDrops.add(this)}fetchRootFolder(){return h(this.props.courseId).then(e=>p(e.id).then(t=>{e.files=t
M.folderState={contextId:e.context_id,contextType:e.context_type,folder:e}
M.activeDrops.forEach(e=>{e.setFolderState(M.folderState)})}).catch(this.showAlert)).catch(this.showAlert)}addFile(e){M.folderState.folder.files=[...M.folderState.folder.files,new r["a"](e)]
M.activeDrops.forEach(e=>{e.setFolderState(M.folderState)})}componentWillUnmount(){M.activeDrops.delete(this)}setFolderState(e){this.setState(e)}renderHero(e){const t=this.state.hightlightUpload
return Object(o["a"])(y["a"],{size:e,color:t?"brand":"primary"})}renderBillboard(){const e=this.state.folder
return Object(o["a"])(g["a"],{heading:e?n["a"].t("Drop files here to add to module"):n["a"].t("Loading..."),headingLevel:"h4",hero:e=>this.renderHero(e),message:Object(o["a"])(v["a"],{size:"small",color:"brand"},void 0,e?n["a"].t("or choose files"):"")})}setInteractionOnAll(e){M.activeDrops.forEach(t=>t.setInteraction(e))}setInteraction(e){this.setState({interaction:e})}renderFileDrop(){const e=this.state,t=e.interaction,i=e.folder
return Object(o["a"])(b["a"],{allowMultiple:true,renderLabel:this.renderBillboard(),onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop,interaction:t&&i?"enabled":"disabled"})}renderUploading(){const e=this.state,t=e.folder,i=e.contextId,s=e.contextType
return _.a.createElement(_.a.Fragment,null,Object(o["a"])(q["a"],{visible:false,currentFolder:t,contextId:i,contextType:s,allowSkip:true,alwaysUploadZips:true,onEmptyOrClose:this.handleEmptyUpload,onRenameFileMessage:this.renameFileMessage,onLockFileMessage:this.lockFileMessage}),Object(o["a"])(x["a"],{onUploadChange:this.handleUploadChange}))}render(){const e=this.state.isUploading
return e?this.renderUploading():this.renderFileDrop()}}M.defaultProps={contextModules:null}
M.folderState={}
M.activeDrops=new Set},yE80:function(e,t,i){"use strict"
var o=i("pQTu")
t["a"]={strings(e,t){let i=o["default"].locale||"en-US"
const s={zh_Hant:"zh-Hant"}
i=s[i]||i
return e.localeCompare(t,i,{sensitivity:"variant",ignorePunctuation:false,numeric:true})},by(e){return(t,i)=>this.strings(e(t),e(i))},byKey(e){return this.by(t=>t[e])},byGet(e){return this.by(t=>t.get(e))}}},yJLO:function(e,t,i){"use strict"
var o=i("pQTu")
var s=i("m0r6")
Object(s["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","update":"تحديث"}},"cy":{"buttons":{"cancel":"Canslo","update":"Diweddaru"}},"da":{"buttons":{"cancel":"Annuller","update":"Opdatering"}},"da-x-k12":{"buttons":{"cancel":"Annuller","update":"Opdatering"}},"de":{"buttons":{"cancel":"Abbrechen","update":"Aktualisieren"}},"el":{"buttons":{"cancel":"Ακύρωση","update":"Ενημέρωση"}},"en-AU":{"buttons":{"cancel":"Cancel","update":"Update"}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","update":"Update"}},"en-CA":{"buttons":{"cancel":"Cancel","update":"Update"}},"en-GB":{"buttons":{"cancel":"Cancel","update":"Update"}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","update":"Update"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","update":"Update"}},"es":{"buttons":{"cancel":"Cancelar","update":"Actualizar"}},"fa":{"buttons":{"cancel":"لغو","update":"بهنگام سازی"}},"fi":{"buttons":{"cancel":"Peruuta","update":"Päivitä"}},"fr":{"buttons":{"cancel":"Annuler","update":"Mettre à jour"}},"fr-CA":{"buttons":{"cancel":"Annuler","update":"Mettre à jour"}},"he":{"buttons":{"cancel":"ביטול","update":"עדכון"}},"ht":{"buttons":{"cancel":"Anile","update":"Aktyalize"}},"hu":{"buttons":{"cancel":"Mégse","update":"Frissítés"}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","update":"Թարմացնել"}},"is":{"buttons":{"cancel":"Hætta við","update":"Uppfæra"}},"it":{"buttons":{"cancel":"Annulla","update":"Aggiorna"}},"ja":{"buttons":{"cancel":"キャンセル","update":"更新"}},"ko":{"buttons":{"cancel":"취소","update":"업데이트"}},"mi":{"buttons":{"cancel":"Whakakore","update":"Whakahōu"}},"nb":{"buttons":{"cancel":"Avbryt","update":"Oppdater"}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","update":"Oppdater"}},"nl":{"buttons":{"cancel":"Annuleren","update":"Bijwerken"}},"nn":{"buttons":{"cancel":"Avbryt","update":"Oppdatering"}},"pl":{"buttons":{"cancel":"Anuluj","update":"Aktualizuj"}},"pt":{"buttons":{"cancel":"Cancelar","update":"Atualizar"}},"pt-BR":{"buttons":{"cancel":"Cancelar","update":"Atualizar"}},"ru":{"buttons":{"cancel":"Отменить","update":"Обновить"}},"sl":{"buttons":{"cancel":"Prekliči","update":"Posodobi"}},"sv":{"buttons":{"cancel":"Avbryt","update":"Uppdatera"}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","update":"Uppdatera"}},"tr":{"buttons":{"cancel":"İptal","update":"Güncelle"}},"uk":{"buttons":{"cancel":"Скасувати","update":"Оновлення"}},"zh-Hans":{"buttons":{"cancel":"取消","update":"更新"}},"zh-Hant":{"buttons":{"cancel":"取消","update":"更新"}}}'))
i("jQeR")
i("0sPK")
var _=o["default"].scoped("dialog")
var n=i("ouhR")
var a=i.n(n)
var l=i("GLiE")
var d=i.n(l)
var r=i("FIFq")
var u=i.n(r)
i("YGE8")
var m=function(e,t){return function(){return e.apply(t,arguments)}},c=function(e,t){for(var i in t)p.call(t,i)&&(e[i]=t[i])
function o(){this.constructor=e}o.prototype=t.prototype
e.prototype=new o
e.__super__=t.prototype
return e},p={}.hasOwnProperty
t["a"]=function(e){c(t,e)
function t(){this.cancel=m(this.cancel,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
this.initDialog()
return this.setElement(this.dialog)}
t.prototype.defaultOptions=function(){return{autoOpen:false,width:420,resizable:false,buttons:[],destroy:false}}
t.prototype.initDialog=function(){var e
e=d.a.extend({},this.defaultOptions(),{buttons:[{text:_.t("#buttons.cancel","Cancel"),class:"cancel_button",click:(t=this,function(e){return t.cancel(e)})},{text:_.t("#buttons.update","Update"),class:"btn-primary",click:function(e){return function(t){return e.update(t)}}(this)}]},d.a.result(this,"dialogOptions"))
var t
this.dialog=a()('<div id="'+e.id+'"></div>').appendTo("body").dialog(e)
e.containerId&&this.dialog.parent().attr("id",e.containerId)
a()(".ui-resizable-handle").attr("aria-hidden",true)
return this.dialog}
t.prototype.show=function(){return this.dialog.dialog("open")}
t.prototype.close=function(){return this.options.destroy?this.dialog.dialog("destroy"):this.dialog.dialog("close")}
t.prototype.update=function(e){throw"Not yet implemented"}
t.prototype.cancel=function(e){e.preventDefault()
return this.close()}
return t}(u.a.View)}}])

//# sourceMappingURL=143-c-963440dd65.js.map