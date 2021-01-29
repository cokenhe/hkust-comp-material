(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[126,675],{"+++G":function(e){e.exports=JSON.parse('{"address_3159962f":{"message":"Διεύθυνση:"},"announcement_fb4cb645":{"message":"Ανακοίνωση"},"assignment_976578a8":{"message":"Εργασία"},"calendar_a8563bb2":{"message":"Ημερολόγιο:"},"calendar_event_89aadc1c":{"message":"Γεγονός στο Ημερολόγιο"},"close_d634289d":{"message":"Κλείσιμο"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {}\\n  other {}\\n}"},"course_8a63b4a3":{"message":"Μάθημα"},"date_ee500367":{"message":"Ημερομηνία"},"delete_a6efa79d":{"message":"Διαγραφή"},"details_98a31b68":{"message":"Λεπτομέρειες"},"details_a6f427c3":{"message":"Λεπτομέρειες:"},"discussion_6719c51d":{"message":"Συζήτηση"},"due_5d7267be":{"message":"Καταληκτική Ημερ/νία:"},"edit_c5fbea07":{"message":"Διαμόρφωση"},"excused_cf8792eb":{"message":"Δικαιολογημένος/η"},"graded_25cd3fcd":{"message":"Βαθμολογημένα"},"late_2be42b88":{"message":"Πρόσφατο/α"},"load_more_a36f9cf9":{"message":"Φόρτωση περισσότερων"},"loading_25990131":{"message":"Φόρτωση..."},"loading_725811ca":{"message":"φόρτωση"},"location_3b6ff307":{"message":"Τοποθεσία:"},"missing_1a256b3b":{"message":"Απομένει"},"new_13daf639":{"message":"Νέο"},"nothing_for_now_e3e3ce2a":{"message":"Τίποτα για την ώρα"},"page_50c4823d":{"message":"Σελίδα"},"peer_review_74f26a13":{"message":"Αξιολόγηση Ομότιμων"},"points_bceb5005":{"message":"Μόρια"},"pts_699bd9aa":{"message":"pts"},"quiz_e0dcce8f":{"message":"Κουίζ"},"replies_4a8577c8":{"message":"Απαντήσεις"},"save_11a80ec3":{"message":"Αποθήκευση"},"submitted_318fad53":{"message":"Υποβλήθηκαν"},"time_2b5aac58":{"message":"Χρόνος"},"title_ee03d132":{"message":"Τίτλος"},"to_do_1d554f36":{"message":"Υποχρεώσεις"},"today_76e10f9c":{"message":"Σήμερα"},"tomorrow_9a6c9a00":{"message":"Αύριο"},"yesterday_c6bd6abf":{"message":"Χτες"}}')},"/TnQ":function(e,t,a){"use strict"
var s=a("ANjH").compose
t.__esModule=true
t.composeWithDevTools=function(){if(0===arguments.length)return
if("object"===typeof arguments[0])return s
return s.apply(null,arguments)}
t.devToolsEnhancer=function(){return function(e){return e}}},"08kA":function(e,t,a){"use strict"
var s=a("s4NR"),n=a("CxY0"),i=a("U6jy")
function r(e){return e&&e.rel}function o(e,t){function a(a){e[a]=i(t,{rel:a})}t.rel.split(/\s+/).forEach(a)
return e}function d(e,t){var a=t.match(/\s*(.+)\s*=\s*"?([^"]+)"?/)
a&&(e[a[1]]=a[2])
return e}function l(e){try{var t=e.match(/<?([^>]*)>(.*)/),a=t[1],r=t[2].split(";"),o=n.parse(a),l=s.parse(o.query)
r.shift()
var u=r.reduce(d,{})
u=i(l,u)
u.url=a
return u}catch(e){return null}}e.exports=function(e){if(!e)return null
return e.split(/,\s*</).map(l).filter(r).reduce(o,{})}},"1bMx":function(e,t,a){"use strict"
var s=a("VTBJ")
var n=a("q1tI")
var i=a.n(n)
class r{constructor(){this.size="large"
this.interestedParties=[]
this.mediaQueries={}
this.onChangeLayout=e=>{let t="large"
e.target===this.mediaQueries.small?t=e.matches?"small":"medium":e.target===this.mediaQueries.medium&&(t=e.matches?"medium":"large")
if(t!==this.size){this.size=t
this.notifyAll()}}}setup(){if(!window.matchMedia)return
this.mediaQueries.small=window.matchMedia("(max-width: 37em)")
this.mediaQueries.medium=window.matchMedia("(max-width: 56em)")
this.mediaQueries.small.matches?this.size="small":this.mediaQueries.medium.matches?this.size="medium":this.size="large"
if("onchange"in this.mediaQueries.medium){this.mediaQueries.medium.onchange=this.onChangeLayout
this.mediaQueries.small.onchange=this.onChangeLayout}else{this.handleResize=()=>{window.clearTimeout(this.resizeTimer)
this.resizeTimer=window.setTimeout(()=>{this.resizeTimer=0
this.onChangeSize()},100)}
window.addEventListener("resize",this.handleResize)}}teardown(){if("onchange"in this.mediaQueries.medium){this.mediaQueries.medium.onchange=null
this.mediaQueries.small.onchange=null}else{window.clearTimeout(this.resizeTimer)
window.removeEventListener("resize",this.handleResize)}}add(e){this.mediaQueries.medium||this.setup()
this.interestedParties.push(e)
return this.size}remove(e){const t=this.interestedParties.indexOf(e)
this.interestedParties.splice(t,1)
if(this.mediaQueries.medium&&0===this.interestedParties.length){this.teardown()
this.mediaQueries.medium=null}}notifyAll(){this.interestedParties.forEach(e=>{e.onChangeSize({size:this.size})})}onChangeSize(){let e="large"
this.mediaQueries.small.matches?e="small":this.mediaQueries.medium.matches&&(e="medium")
if(e!==this.size){this.size=e
this.notifyAll()}}}function o(){return function(e){class t extends i.a.Component{constructor(e){super(e)
const t=o.mqwatcher.add(this)
this.state={size:t}}componentWillUnmount(){o.mqwatcher.remove(this)}onChangeSize(e){this.setState({size:e.size})}render(){return i.a.createElement(e,Object.assign({},this.props,{responsiveSize:this.state.size}))}}t.propTypes=Object(s["a"])({},e.propTypes)
t.defaultProps=e.defaultProps?Object(s["a"])({},e.defaultProps):null
t.displayName="Responsive".concat(e.displayName)
return t}}o.mqwatcher=new r
t["a"]=o},"2QeP":function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=d
var s=i(a("JlUD"))
var n=a("bEIN")
function i(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{}
var s=Object.keys(a)
"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))))
s.forEach((function(t){o(e,t,a[t])}))}return e}function o(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:true,configurable:true,writable:true}):e[t]=a
return e}function d(e){var t=e.dispatch
return function(e){return function(a){if(!(0,n.isFSA)(a))return(0,s.default)(a)?a.then(t):e(a)
return(0,s.default)(a.payload)?a.payload.then((function(e){return t(r({},a,{payload:e}))})).catch((function(e){t(r({},a,{payload:e,error:true}))
return Promise.reject(e)})):e(a)}}}},"3Sge":function(e,t,a){"use strict"
a.d(t,"a",(function(){return c}))
var s=a("VTBJ")
var n=a("1OyB")
var i=a("vuIU")
var r=a("md7G")
var o=a("foSv")
var d=a("Ji7U")
var l=a("q1tI")
var u=a.n(l)
var _=a("hPGw")
var m=u.a.createElement("path",{d:"M960.195 831.973L432.222 304 304 432.222l527.973 527.973L304 1488.168l128.222 128.222 527.973-527.973 527.973 527.973 128.222-128.222-527.973-527.973 527.973-527.973L1488.168 304z",fillRule:"nonzero",stroke:"none",strokeWidth:"1"})
var c=function(e){Object(d["a"])(t,e)
function t(){Object(n["a"])(this,t)
return Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return u.a.createElement(_["a"],Object.assign({},this.props,{name:"IconX",viewBox:"0 0 1920 1920"}),m)}}])
t.displayName="IconXLine"
return t}(l["Component"])
c.glyphName="x"
c.variant="Line"
c.propTypes=Object(s["a"])({},_["a"].propTypes)},"3g0Q":function(e){e.exports=JSON.parse('{"add_to_do_7537af64":{"message":"Legg til gjeremål"},"add_to_do_7def3c37":{"message":"Legg til gjeremål"},"address_3159962f":{"message":"Adresse:"},"all_day_fb42c4fc":{"message":"Heile dagen"},"all_items_loaded_aa256183":{"message":"Alle element er lasta"},"an_error_occurred_attempting_to_dismiss_the_opport_f86e0667":{"message":"Ein feil oppstod ved forsøk på å forkaste valet."},"announcement_fb4cb645":{"message":"Kunngjering"},"are_you_sure_you_want_to_delete_this_planner_item_b71e330c":{"message":"Er du sikker på at du vil slette dette planelementet?"},"assignment_976578a8":{"message":"Oppgåve"},"assignmenttype_title_6612d008":{"message":"{ assignmentType } { title }."},"assignmenttype_title_all_day_on_datetime_9768903c":{"message":"{ assignmentType } { title }, heile dagen den { datetime }."},"assignmenttype_title_at_datetime_478f0709":{"message":"{ assignmentType } { title }, den { datetime }."},"assignmenttype_title_at_datetime_until_endtime_a5900e38":{"message":"{ assignmentType } { title }, fra { datetime } til { endTime }"},"assignmenttype_title_due_datetime_a112d8ff":{"message":"{ assignmentType } { title }, innleveringsfrist den { datetime }."},"assignmenttype_title_has_a_to_do_time_at_datetime_e07310e8":{"message":"{ assignmentType } { title } har eit gjeremål knytta til seg den { datetime }."},"assignmenttype_title_is_marked_as_done_a8dc46ef":{"message":"{ assignmentType } { title } er merka som fullført."},"assignmenttype_title_is_not_marked_as_done_ba80ba66":{"message":"{ assignmentType } { title } er ikkje merka som fullført."},"assignmenttype_title_posted_datetime_cab69444":{"message":"{ assignmentType } { title } levert den { datetime }."},"assignmenttype_title_reminder_datetime_33fa66d5":{"message":"{ assignmentType } { title }, påminning om frist den { datetime }."},"beginning_of_your_to_do_history_61ef2dce":{"message":"Starten på gjeremålshistorikken din"},"calendar_a8563bb2":{"message":"Kalender:"},"calendar_event_89aadc1c":{"message":"Kalenderhending"},"canvas_planner_98ed106":{"message":"Canvas-planleggar"},"close_d634289d":{"message":"Lukk"},"close_opportunity_center_popup_9907d981":{"message":"Lukk popup-menyen med val"},"count_plural_0_opportunities_one_opportunity_other_765e27fa":{"message":"{ count, plural,\\n     =0 {# muligheter}\\n    one {# mulighet}\\n  other {# muligheter}\\n}"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {Vis # fullført element}\\n  other {Vis # fullførte element}\\n}"},"course_8a63b4a3":{"message":"Emne"},"course_to_do_bcbbab54":{"message":"{ course } Gjeremål"},"date_at_time_dbdb1b99":{"message":"{ date } klokka { time }"},"date_ee500367":{"message":"Dato"},"date_is_not_a_valid_date_4ef9f8ba":{"message":"#{ date } er ikkje ein gyldig dato."},"date_is_required_8660ec22":{"message":"Dato er obligatorisk"},"date_time_d9fbf2d7":{"message":"Dato og tidspunkt:"},"delete_a6efa79d":{"message":"Slett"},"details_98a31b68":{"message":"Detaljar"},"details_a6f427c3":{"message":"Detaljar:"},"discussion_6719c51d":{"message":"Diskusjon"},"dismiss_itemtitle_a9fae1b3":{"message":"Forkast { itemTitle }"},"dismiss_opportunityname_5995176f":{"message":"Forkast { opportunityName }"},"dismissed_8b0b1fc9":{"message":"Forkasta"},"dismissed_opportunities_f0826640":{"message":"Forkasta val"},"due_5d7267be":{"message":"Frist:"},"due_date_124fdd99":{"message":"Frist: { date }"},"edit_c5fbea07":{"message":"Rediger"},"edit_title_72e5a21e":{"message":"Rediger { title }"},"error_loading_grades_e0b38f4d":{"message":"Feil under lasting av vurderingar"},"error_loading_more_items_3f109d9f":{"message":"Feil under lasting av fleire element"},"error_loading_past_items_2881dbb1":{"message":"Feil under lasting av tidlegare element"},"excused_cf8792eb":{"message":"Fritak er innvilga"},"failed_to_delete_to_do_64edff49":{"message":"Kan ikkje slette gjeremål"},"failed_to_get_new_activity_17e7ec7c":{"message":"Kan ikkje hente ny aktivitet"},"failed_to_load_opportunities_52ab6404":{"message":"Kan ikkje laste val"},"failed_to_save_to_do_ddc7503b":{"message":"Kan ikke lagre gjeremål"},"feedback_6dcc1991":{"message":"Tilbakemelding"},"go_to_card_view_dashboard_9d03970e":{"message":"Gå til rutevising av dashbord"},"graded_25cd3fcd":{"message":"Vurdert"},"grades_are_loading_c899652d":{"message":"Lastar vurderingar"},"grades_loaded_5056277c":{"message":"Vurderingar er lasta"},"items_completed_items_plural_1_item_other_items_717d579f":{"message":"{ items } completed { items, plural,\\n     =1 {item}\\n  other {items}\\n}"},"late_2be42b88":{"message":"Sein"},"list_collapsed_9ac35920":{"message":"Liste er skjult."},"list_collapsed_dde87718":{"message":"Liste er skjult"},"list_expanded_efec2d0":{"message":"Liste er utvida."},"load_more_a36f9cf9":{"message":"Last opp meir"},"load_prior_dates_f2b0f6f0":{"message":"Last tidlegare datoar"},"loaded_count_plural_0_items_one_item_other_items_e58533e9":{"message":"Lasta { count, plural,\\n     =0 {# elementer}\\n    one {# element}\\n  other {# elementer}\\n}"},"loading_25990131":{"message":"Lastar..."},"loading_725811ca":{"message":"lastar"},"loading_grades_c842c887":{"message":"Lastar vurderingar"},"loading_past_items_ca499e75":{"message":"Lastar tidlegare element"},"loading_planner_items_947a813d":{"message":"Lastar planelement"},"location_3b6ff307":{"message":"Plassering:"},"looks_like_there_isn_t_anything_here_d9bcef49":{"message":"Ser ikkje ut som om det finns noko her"},"missing_1a256b3b":{"message":"Manglar"},"missing_items_for_title_516511f8":{"message":"Manglar element i { title }"},"my_grades_98834476":{"message":"Mine vurderingar"},"new_13daf639":{"message":"Ny"},"new_activity_8b84847d":{"message":"Ny aktivitet"},"new_activity_for_title_14c9c3af":{"message":"Ny aktivitet i { title }"},"new_opportunities_7d349c4d":{"message":"Nye val"},"next_month_749b1778":{"message":"Neste månad"},"no_due_dates_assigned_e8f5bac8":{"message":"Ingen innleveringsfristar er sett opp"},"no_grade_3b4d7f3e":{"message":"Inga vurdering"},"nothing_for_now_e3e3ce2a":{"message":"Ingenting akkurat no"},"nothing_here_needs_attention_c4eaded6":{"message":"Ingenting å følgje opp."},"nothing_more_to_do_b665da42":{"message":"Ingenting meir å gjere"},"nothing_new_needs_attention_3ac548d4":{"message":"Ingenting å følgje opp"},"nothing_planned_today_selecting_most_recent_item_ffd71bff":{"message":"Ingen planar i dag. Sjå førre element. "},"nothing_planned_today_selecting_next_item_f6718aa":{"message":"Ingen planar i dag. Sjå neste element. "},"nothing_planned_yet_8675ffe9":{"message":"Ingenting er planlagt"},"numpoints_points_8621a43b":{"message":"{ numPoints } poeng"},"only_most_recent_grading_period_shown_f1ad6458":{"message":"*Kun nyaste karaktersetjingsperiode viser."},"opportunities_popup_f6703842":{"message":"popup-menyen med val"},"option_selected_list_collapsed_e00180ff":{"message":"{ option } er valt. Liste er skjult."},"optional_add_course_ef0d70fc":{"message":"Valfri: Legg til emne"},"page_50c4823d":{"message":"Side"},"peer_review_74f26a13":{"message":"Fagfellevurdering"},"peer_review_for_itemtitle_358cb413":{"message":"Fagfellevurdering for { itemTitle }"},"points_bceb5005":{"message":"poeng"},"points_points_63e59cce":{"message":"{ points } poeng"},"previous_month_bb1e3c84":{"message":"Førre månad"},"pts_699bd9aa":{"message":"poeng"},"quiz_e0dcce8f":{"message":"Quiz"},"reminder_date_4564d12d":{"message":"Påminning: { date }"},"replies_4a8577c8":{"message":"Svar"},"save_11a80ec3":{"message":"Lagre"},"scroll_up_to_see_your_history_19b14cad":{"message":"Rull opp for å sjå historikken din! "},"scrolls_up_to_the_previous_item_with_new_activity_99717459":{"message":"Rull opp til førre element med ny aktivitet. "},"show_all_ae37d610":{"message":"Vis alt"},"show_my_grades_ebd08684":{"message":"Vis vurderingsresultata mine"},"startdate_to_enddate_d245175b":{"message":"{ startDate } til { endDate }"},"startdatetime_enddatetime_20abc10e":{"message":"{ startDateTime } - { endDateTime }"},"startdatetime_endtime_49741bbe":{"message":"{ startDateTime } - { endTime }"},"starttime_to_endtime_d7cc249d":{"message":"{ startTime } til { endTime }"},"submitted_318fad53":{"message":"Innlevert"},"success_to_do_created_e34ed395":{"message":"Vellukka: Gjeremålsliste er oppretta"},"task_16b0ef38":{"message":"Oppgåve"},"the_date_and_time_this_to_do_is_due_74c823d4":{"message":"Dato og tidspunkt som er frist for gjeremålet"},"there_are_no_points_associated_with_this_item_449c712a":{"message":"Det er ingen poeng knytta til elementet"},"time_2b5aac58":{"message":"Tidspunkt"},"title_ee03d132":{"message":"Tittel"},"title_is_required_6ddcab69":{"message":"tittel er obligatorisk"},"to_do_1d554f36":{"message":"Gjeremål"},"to_do_date_4b211ad0":{"message":"Gjeremål: { date }"},"to_do_items_loading_d1cdfcd5":{"message":"Lastar innhald i gjeremålslista"},"today_76e10f9c":{"message":"I dag"},"today_at_date_8ac30d6":{"message":"I dag på { date }"},"tomorrow_9a6c9a00":{"message":"I morgon"},"tomorrow_at_date_b53f2cf1":{"message":"I morgon på { date }"},"unable_to_mark_as_complete_8141856d":{"message":"Kan ikkje merke som fullført. "},"use_arrow_keys_to_navigate_options_2021cc50":{"message":"Bruk piltastane for å navigere mellom alternativa."},"yesterday_at_date_1aa6d18e":{"message":"I går på { date }"},"yesterday_c6bd6abf":{"message":"I går"},"you_have_media_feedback_f5f9aba8":{"message":"Du har tilbakemelding. "},"you_must_provide_a_date_and_time_a86839d2":{"message":"Du må oppgi verdi for dato og tidspunkt"},"you_ve_scrolled_back_to_your_very_first_to_do_29374681":{"message":"Du har rulla heilt tilbake til ditt aller første gjeremål!"}}')},"5UaS":function(e,t,a){(function(e,s){var n;(function(i){var r=t
e&&e.exports
var o="object"==typeof s&&s
o.global!==o&&o.window!==o||o
var d=/([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g
var l=/([\uD800-\uDBFF])([\uDC00-\uDFFF])/g
var u=function(e){e=e.replace(d,(function(e,t,a){return u(a)+t})).replace(l,"$2$1")
var t=""
var a=e.length
while(a--)t+=e.charAt(a)
return t}
var _={version:"0.2.0",reverse:u}
n=function(){return _}.call(t,a,t,e),void 0!==n&&(e.exports=n)})()}).call(this,a("YuTi")(e),a("yLpj"))},"5UzU":function(e,t,a){var s=a("hZA9")
var n=a("Wg0N")
e.exports=function(e,t,a){return n(s(e,t,a),t)}},"6ZhF":function(e){e.exports=JSON.parse('{"add_to_do_7537af64":{"message":"Teendő hozzáadása"},"add_to_do_7def3c37":{"message":"Teendő hozzáadása"},"address_3159962f":{"message":"Cím:"},"all_day_fb42c4fc":{"message":"Egész nap"},"all_items_loaded_aa256183":{"message":"Minden elem betöltve"},"an_error_occurred_attempting_to_dismiss_the_opport_f86e0667":{"message":"Hiba történt, amikor megpróbálta elvetni a lehetőséget."},"announcement_fb4cb645":{"message":"Hirdetmény"},"are_you_sure_you_want_to_delete_this_planner_item_b71e330c":{"message":"Biztosan törölni szeretné ezt a tervezőbeli elemet?"},"assignment_976578a8":{"message":"Feladat"},"assignmenttype_title_6612d008":{"message":"{ title } című { assignmentType }."},"assignmenttype_title_all_day_on_datetime_9768903c":{"message":"{ title } című { assignmentType } egész nap ekkor: { datetime }."},"assignmenttype_title_at_datetime_478f0709":{"message":"{ title } című { assignmentType } ekkor: { datetime }."},"assignmenttype_title_at_datetime_until_endtime_a5900e38":{"message":"{ title } című { assignmentType } ekkor: { datetime }, eddig: { endTime }."},"assignmenttype_title_due_datetime_a112d8ff":{"message":"{ title } című { assignmentType }, esedékes ekkor: { datetime }."},"assignmenttype_title_has_a_to_do_time_at_datetime_e07310e8":{"message":"A(z) { title } című { assignmentType } befejezési határideje { datetime }."},"assignmenttype_title_is_marked_as_done_a8dc46ef":{"message":"A(z) { title } című { assignmentType } készként megjelölve."},"assignmenttype_title_is_not_marked_as_done_ba80ba66":{"message":"A(z) { title } című { assignmentType } nincs megjelölve készként."},"assignmenttype_title_posted_datetime_cab69444":{"message":"A(z) { title } című { assignmentType } ekkor lett közzétéve: { datetime }."},"assignmenttype_title_reminder_datetime_33fa66d5":{"message":"{ title } című { assignmentType }, emlékeztető ekkor: { datetime }."},"beginning_of_your_to_do_history_61ef2dce":{"message":"A Tennivaló Listád Elkezdése"},"calendar_a8563bb2":{"message":"Naptár"},"calendar_event_89aadc1c":{"message":"Naptáresemény"},"canvas_planner_98ed106":{"message":"Canvas Tervező"},"close_d634289d":{"message":"Bezár"},"close_opportunity_center_popup_9907d981":{"message":"A Lehetőségek popup ablak bezárása"},"count_plural_0_opportunities_one_opportunity_other_765e27fa":{"message":"{ count, plural,\\n     =0 {# lehetőség}\\n    one {# lehetőség}\\n  other {# lehetőség}\\n}"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {}\\n  other {}\\n}"},"course_8a63b4a3":{"message":"Kurzus"},"course_to_do_bcbbab54":{"message":"Tennivalók { course } tantárgyból"},"date_at_time_dbdb1b99":{"message":"{ date } { time }-kor"},"date_ee500367":{"message":"Dátum"},"date_is_not_a_valid_date_4ef9f8ba":{"message":"#{ date } nem érvényes dátum."},"date_is_required_8660ec22":{"message":"Dátum szükséges"},"date_time_d9fbf2d7":{"message":"Dátum és idő"},"delete_a6efa79d":{"message":"Törlés"},"details_98a31b68":{"message":"Részletek"},"details_a6f427c3":{"message":"Részletek:"},"discussion_6719c51d":{"message":"Fórum"},"dismiss_itemtitle_a9fae1b3":{"message":"{ itemTitle } elvetése"},"dismiss_opportunityname_5995176f":{"message":"{ opportunityName } elvetése"},"dismissed_8b0b1fc9":{"message":"Elvetve"},"dismissed_opportunities_f0826640":{"message":"Elvetetett lehetőségek"},"due_5d7267be":{"message":"Határidő: "},"due_date_124fdd99":{"message":"Határidő: { date }"},"edit_c5fbea07":{"message":"Szerkesztés"},"edit_title_72e5a21e":{"message":"{ title } szerkesztése"},"error_loading_grades_e0b38f4d":{"message":"Hiba történt az értékelések betöltése közben."},"error_loading_more_items_3f109d9f":{"message":"Nem sikerült több elemet betölteni"},"error_loading_past_items_2881dbb1":{"message":"Hiba történt a korábbi elemek betöltése közben."},"excused_cf8792eb":{"message":"Felmentve"},"failed_to_delete_to_do_64edff49":{"message":"Nem sikerült a tennivaló törlése"},"failed_to_get_new_activity_17e7ec7c":{"message":"Nem sikerült új tevékenységet szerezni"},"failed_to_load_opportunities_52ab6404":{"message":"Nem sikerült a lehetőségek betöltése"},"failed_to_save_to_do_ddc7503b":{"message":"Nem sikerült a tennivaló mentése"},"feedback_6dcc1991":{"message":"Visszajelzés"},"go_to_card_view_dashboard_9d03970e":{"message":"Ugrás a vezérlőpult kártya nézetére"},"graded_25cd3fcd":{"message":"Értékelve"},"grades_are_loading_c899652d":{"message":"Értékelések betöltése"},"grades_loaded_5056277c":{"message":"Értékelések betöltve"},"items_completed_items_plural_1_item_other_items_717d579f":{"message":"{ items } befejezve { items, plural,\\n     =1 {elem}\\n  other {elem}\\n}"},"late_2be42b88":{"message":"Késve"},"list_collapsed_9ac35920":{"message":"Összecsukott lista."},"list_collapsed_dde87718":{"message":"Összecsukott lista"},"list_expanded_efec2d0":{"message":"Lista kibontva."},"load_more_a36f9cf9":{"message":"Továbbiak betöltése"},"load_prior_dates_f2b0f6f0":{"message":"Korábbi dátumok betöltése"},"loaded_count_plural_0_items_one_item_other_items_e58533e9":{"message":"Loaded { count, plural,\\n     =0 {# elem}\\n    one {# elem}\\n  other {# elem}\\n} betöltve"},"loading_25990131":{"message":"Betöltés..."},"loading_725811ca":{"message":"betöltés"},"loading_grades_c842c887":{"message":"Értékelések betöltése"},"loading_past_items_ca499e75":{"message":"Korábbi elemek betöltése"},"loading_planner_items_947a813d":{"message":"Tervező elemek betöltése"},"location_3b6ff307":{"message":"Helyszín:"},"looks_like_there_isn_t_anything_here_d9bcef49":{"message":"Úgy tűnik, itt nincsen semmi."},"missing_1a256b3b":{"message":"Hiányzik"},"missing_items_for_title_516511f8":{"message":"Hiányzó elem ehhez: { title }"},"my_grades_98834476":{"message":"Az én értékeléseim"},"new_13daf639":{"message":"Új"},"new_activity_8b84847d":{"message":"Új aktivitás"},"new_activity_for_title_14c9c3af":{"message":"Új aktivitás ehhez: { title }"},"new_opportunities_7d349c4d":{"message":"Új lehetőségek"},"next_month_749b1778":{"message":"Következő hónap"},"no_due_dates_assigned_e8f5bac8":{"message":"Nincs hozzárendelve esedékességi dátum"},"no_grade_3b4d7f3e":{"message":"Nincs értékelés"},"nothing_for_now_e3e3ce2a":{"message":"Egyelőre semmi"},"nothing_here_needs_attention_c4eaded6":{"message":"Itt semmi nem igényli a figyelmét."},"nothing_more_to_do_b665da42":{"message":"Nincs több tennivaló"},"nothing_new_needs_attention_3ac548d4":{"message":"Semmi újdonság nem igényli a figyelmét."},"nothing_planned_today_selecting_most_recent_item_ffd71bff":{"message":"Semmi nincs tervben mára. A legutóbbi elem kiválasztása."},"nothing_planned_today_selecting_next_item_f6718aa":{"message":"Semmi nincs tervben mára. A következő elem kiválasztása."},"nothing_planned_yet_8675ffe9":{"message":"Még semmi nincs tervben"},"numpoints_points_8621a43b":{"message":"{ numPoints } pont"},"only_most_recent_grading_period_shown_f1ad6458":{"message":"*Csak a legutóbbi értékelési periódus látható."},"opportunities_popup_f6703842":{"message":"lehetőségek popup"},"option_selected_list_collapsed_e00180ff":{"message":"{ option } kiválaszva. Lista összecsukva."},"optional_add_course_ef0d70fc":{"message":"Opcionális: kurzus hozzáadása"},"page_50c4823d":{"message":"Oldal"},"peer_review_74f26a13":{"message":"Társértékelés"},"peer_review_for_itemtitle_358cb413":{"message":"Társértékelés ehhez az elemhez: { itemTitle }"},"points_bceb5005":{"message":"pontszám"},"points_points_63e59cce":{"message":"{ points } pont"},"previous_month_bb1e3c84":{"message":"Előző hónap"},"pts_699bd9aa":{"message":"pont"},"quiz_e0dcce8f":{"message":"Kvíz"},"reminder_date_4564d12d":{"message":"Emlékeztető: { date }"},"replies_4a8577c8":{"message":"Válaszok"},"save_11a80ec3":{"message":"Mentés"},"scroll_up_to_see_your_history_19b14cad":{"message":"Görgessen felfelé, hogy lássa az előzményeket!"},"scrolls_up_to_the_previous_item_with_new_activity_99717459":{"message":"Felgörgetés a korábbi elemhez új tevékenységgel."},"show_all_ae37d610":{"message":"Összes megjelenítése"},"show_my_grades_ebd08684":{"message":"Az értékeléseim mutatása"},"startdate_to_enddate_d245175b":{"message":"{ startDate }-tól/től { endDate }-ig"},"startdatetime_enddatetime_20abc10e":{"message":"{ startDateTime } – { endDateTime }"},"startdatetime_endtime_49741bbe":{"message":"{ startDateTime } – { endTime }"},"starttime_to_endtime_d7cc249d":{"message":"{ startTime }-tól/től { endTime }-ig"},"submitted_318fad53":{"message":"Beadva"},"success_to_do_created_e34ed395":{"message":"Sikerült: tennivaló létrehozva"},"task_16b0ef38":{"message":"Feladat"},"the_date_and_time_this_to_do_is_due_74c823d4":{"message":"Ekkorra kell megcsinálni ezt"},"there_are_no_points_associated_with_this_item_449c712a":{"message":"Ehhez az elemhez nincsenek pontok rendelve."},"time_2b5aac58":{"message":"Idő"},"title_ee03d132":{"message":"Cím"},"title_is_required_6ddcab69":{"message":"cím szükséges"},"to_do_1d554f36":{"message":"Teendők"},"to_do_date_4b211ad0":{"message":"Elkészítendő { date }-ig."},"to_do_items_loading_d1cdfcd5":{"message":"Tennivaló elemek töltődnek"},"today_76e10f9c":{"message":"Ma"},"today_at_date_8ac30d6":{"message":"Ma ekkor: { date }"},"tomorrow_9a6c9a00":{"message":"Holnap"},"tomorrow_at_date_b53f2cf1":{"message":"Holnap ekkor: { date }"},"unable_to_mark_as_complete_8141856d":{"message":"Nem lehet készként megjelölni."},"use_arrow_keys_to_navigate_options_2021cc50":{"message":"Használja a nyíl billentyűket az opció kiválasztására!"},"yesterday_at_date_1aa6d18e":{"message":"Tegnap ekkor: { date }"},"yesterday_c6bd6abf":{"message":"Tegnap"},"you_have_media_feedback_f5f9aba8":{"message":"Önnek média visszajelzése van."},"you_must_provide_a_date_and_time_a86839d2":{"message":"Meg kell adni a dátumot és az időt"},"you_ve_scrolled_back_to_your_very_first_to_do_29374681":{"message":"Elérte a legelső tennivalót!"}}')},"7NKU":function(e,t){var a={tr:{regexp:/\u0130|\u0049|\u0049\u0307/g,map:{"İ":"i",I:"ı","İ":"i"}},az:{regexp:/[\u0130]/g,map:{"İ":"i",I:"ı","İ":"i"}},lt:{regexp:/[\u0049\u004A\u012E\u00CC\u00CD\u0128]/g,map:{I:"i̇",J:"j̇","Į":"į̇","Ì":"i̇̀","Í":"i̇́","Ĩ":"i̇̃"}}}
e.exports=function(e,t){var s=a[t]
e=null==e?"":String(e)
s&&(e=e.replace(s.regexp,(function(e){return s.map[e]})))
return e.toLowerCase()}},"8B8r":function(e){e.exports=JSON.parse('{"address_3159962f":{"message":"Հասցե"},"announcement_fb4cb645":{"message":"Հայտարարություն"},"assignment_976578a8":{"message":"Հանձնարարություն"},"calendar_a8563bb2":{"message":"Օրացույց"},"calendar_event_89aadc1c":{"message":"Օրացուցային միջոցառում"},"close_d634289d":{"message":"Փակել"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {}\\n  other {}\\n}"},"course_8a63b4a3":{"message":"Դասընթաց"},"date_ee500367":{"message":"Ամսաթիվ"},"delete_a6efa79d":{"message":"Ջնջել"},"details_98a31b68":{"message":"Մանրամասներ"},"details_a6f427c3":{"message":"Մանրամասներ"},"discussion_6719c51d":{"message":"Քննարկում"},"due_5d7267be":{"message":"Մինչև"},"edit_c5fbea07":{"message":"Խմբագրել"},"excused_cf8792eb":{"message":"Ներված է"},"graded_25cd3fcd":{"message":"Գնահատվող"},"load_more_a36f9cf9":{"message":"Բեռնել լրացուցիչ"},"loading_25990131":{"message":"Բեռնում է..."},"location_3b6ff307":{"message":"Գտնվելու վայրը"},"new_13daf639":{"message":"Նոր"},"nothing_for_now_e3e3ce2a":{"message":"Առայժմ ոչինչ"},"page_50c4823d":{"message":"Էջ"},"peer_review_74f26a13":{"message":"Ունկնդիրների կողմից միմյանց աշխատանքների վերաբերյալ ներկայացված կարծիք"},"pts_699bd9aa":{"message":"միավորներ"},"quiz_e0dcce8f":{"message":"Թեստ"},"save_11a80ec3":{"message":"Պահպանել"},"submitted_318fad53":{"message":"Ներկայացված է "},"time_2b5aac58":{"message":"Ժամ"},"title_ee03d132":{"message":"Վերնագիր"},"to_do_1d554f36":{"message":"Անել"},"today_76e10f9c":{"message":"Այսօր"},"tomorrow_9a6c9a00":{"message":"Վաղը"},"yesterday_c6bd6abf":{"message":"Երեկ"}}')},"8o96":function(e,t,a){"use strict"
a.d(t,"a",(function(){return r}))
var s=a("QF4Q")
var n=a("gCYW")
var i=a("ISHz")
function r(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["width"]
var r=Object(s["a"])(e)
var o=Object(n["a"])(r)
var d=false
var l
var u=function e(){if(d)return
var s=Object(n["a"])(r)
var u={width:s.width,height:s.height}
a.some((function(e){return u[e]!=o[e]}))&&"function"===typeof t&&t(u)
o=u
l=Object(i["a"])(e)}
u()
return{remove:function(){d=true
l.cancel()}}}},"9wFd":function(e,t,a){var s=a("7NKU")
e.exports=function(e,t){return s(e,t)===e}},CpOe:function(e,t,a){"use strict"
var s=/[{}#]+/g
var n=/[{}\s]+/
var i=/[{}]+/g
var r="'"
var o="''"
var d="#"
e.exports=function(e){return l(e,null)}
function l(e,t){return e.map((function(e){if("string"===typeof e)return u(e,t)
return _(e,t)})).join("")}function u(e,t){var a="plural"===t?s:i
return e.replace(/'/g,o).replace(a,"'$&'")}function _(e,t){if(e[0]===d)return d
if("number"===typeof e[2])return g(e)
return m(e)}function m(e){var t=e[0]
var a=e[1]
var s=e[2]
var n="object"===typeof s?","+p(s,a)+"\n":s?", "+c(s)+" ":" "
return"{ "+t+(a?", "+a:"")+n+"}"}function c(e){if(!n.test(e))return e.replace(/'/g,o)
return r+e.replace(/'/g,o)+r}function g(e){var t=e[0]
var a=e[1]
var s=e[2]
var n=e[3]
return"{ "+t+", "+a+","+(s?" offset:"+s:"")+p(n,a)+"\n}"}function p(e,t){var a=Object.keys(e)
var s=a.reduce((function(e,t){return Math.max(e,t.length)}),0)
return a.map((function(a){return"\n  "+f(a,s)+" {"+l(e[a],t)+"}"})).join("")}function f(e,t){var a=""
for(var s=e.length;s<t;++s)a+=" "
return a+e}},DVSf:function(e){e.exports=JSON.parse('{"add_to_do_7537af64":{"message":"Adicionar Lista de Tarefas"},"add_to_do_7def3c37":{"message":"Adicionar à Lista de Tarefas"},"address_3159962f":{"message":"Endereço:"},"all_day_fb42c4fc":{"message":"Dia inteiro"},"all_items_loaded_aa256183":{"message":"Todos os itens carregados"},"an_error_occurred_attempting_to_dismiss_the_opport_f86e0667":{"message":"Ocorreu um erro ao tentar descartar a oportunidade."},"announcement_fb4cb645":{"message":"Aviso"},"are_you_sure_you_want_to_delete_this_planner_item_b71e330c":{"message":"Tem certeza de que deseja excluir este item do planejador?"},"assignment_976578a8":{"message":"Tarefa"},"assignmenttype_title_6612d008":{"message":"{ assignmentType } { title }."},"assignmenttype_title_all_day_on_datetime_9768903c":{"message":"{ assignmentType } { title }, o dia inteiro em { datetime }."},"assignmenttype_title_at_datetime_478f0709":{"message":"{ assignmentType } { title }, às { datetime }."},"assignmenttype_title_at_datetime_until_endtime_a5900e38":{"message":"{ assignmentType } { title }, às { datetime } até { endTime }"},"assignmenttype_title_due_datetime_a112d8ff":{"message":"{ assignmentType } { title }, com vencimento em { datetime }."},"assignmenttype_title_has_a_to_do_time_at_datetime_e07310e8":{"message":"{ assignmentType } { title } tem hora para a lista de tarefas às { datetime }."},"assignmenttype_title_is_marked_as_done_a8dc46ef":{"message":"{ assignmentType } { title } está marcado como feito."},"assignmenttype_title_is_not_marked_as_done_ba80ba66":{"message":"{ assignmentType } { title } não está marcado como feito."},"assignmenttype_title_posted_datetime_cab69444":{"message":"{ assignmentType } { title } postado { datetime }."},"assignmenttype_title_reminder_datetime_33fa66d5":{"message":"{ assignmentType } { title }, lembrete { datetime }."},"beginning_of_your_to_do_history_61ef2dce":{"message":"Começo do seu histórico de tarefas"},"calendar_a8563bb2":{"message":"Calendário:"},"calendar_event_89aadc1c":{"message":"Evento do calendário"},"canvas_planner_98ed106":{"message":"Planejador do Canvas"},"close_d634289d":{"message":"Fechar"},"close_opportunity_center_popup_9907d981":{"message":"Fechar pop-up do Centro de Oportunidades"},"count_plural_0_opportunities_one_opportunity_other_765e27fa":{"message":"{ count, plural,\\n     =0 {# oportunidades}\\n    one {# oportunidade}\\n  other {# oportunidades}\\n}"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {Mostrar # item completo}\\n  other {Mostrar # itens completos}\\n}"},"course_8a63b4a3":{"message":"Curso"},"course_to_do_bcbbab54":{"message":"LISTA DE TAREFAS DE { course }"},"date_at_time_dbdb1b99":{"message":"{ date } às { time }"},"date_ee500367":{"message":"Data"},"date_is_not_a_valid_date_4ef9f8ba":{"message":"#{ date } não é uma data válida."},"date_is_required_8660ec22":{"message":"Data é necessária"},"date_time_d9fbf2d7":{"message":"Data e Hora:"},"delete_a6efa79d":{"message":"Excluir"},"details_98a31b68":{"message":"Detalhes"},"details_a6f427c3":{"message":"Detalhes:"},"discussion_6719c51d":{"message":"Fórum"},"dismiss_itemtitle_a9fae1b3":{"message":"Descartar { itemTitle }"},"dismiss_opportunityname_5995176f":{"message":"Descartar { opportunityName }"},"dismissed_8b0b1fc9":{"message":"Descartado"},"dismissed_opportunities_f0826640":{"message":"Oportunidades descartadas"},"due_5d7267be":{"message":"Vencimento:"},"due_date_124fdd99":{"message":"Vencimento: { date }"},"edit_c5fbea07":{"message":"Editar"},"edit_title_72e5a21e":{"message":"Editar { title }"},"error_loading_grades_e0b38f4d":{"message":"Erro ao carregar notas"},"error_loading_more_items_3f109d9f":{"message":"Erro ao carregar mais itens"},"error_loading_past_items_2881dbb1":{"message":"Erro ao carregar itens passados"},"excused_cf8792eb":{"message":"Dispensado"},"failed_to_delete_to_do_64edff49":{"message":"Falhou ao excluir lista de tarefas"},"failed_to_get_new_activity_17e7ec7c":{"message":"Falhou ao obter nova atividade"},"failed_to_load_opportunities_52ab6404":{"message":"Falha ao carregar oportunidades."},"failed_to_save_to_do_ddc7503b":{"message":"Falhou ao salvar lista de tarefas"},"feedback_6dcc1991":{"message":"Feedback"},"go_to_card_view_dashboard_9d03970e":{"message":"Ir para painel da visualização do cartão"},"graded_25cd3fcd":{"message":"Avaliado"},"grades_are_loading_c899652d":{"message":"As notas estão carregando"},"grades_loaded_5056277c":{"message":"Notas carregadas"},"items_completed_items_plural_1_item_other_items_717d579f":{"message":"{ items } completo(s) { items, plural,\\n     =1 {item}\\n  other {itens}\\n}"},"late_2be42b88":{"message":"Atrasado"},"list_collapsed_9ac35920":{"message":"Lista recolhida."},"list_collapsed_dde87718":{"message":"Lista recolhida"},"list_expanded_efec2d0":{"message":"Lista expandida."},"load_more_a36f9cf9":{"message":"Carregar mais"},"load_prior_dates_f2b0f6f0":{"message":"Carregar datas anteriores"},"loaded_count_plural_0_items_one_item_other_items_e58533e9":{"message":"Carregou { count, plural,\\n     =0 {# itens}\\n    one {# item}\\n  other {# itens}\\n}"},"loading_25990131":{"message":"Carregando..."},"loading_725811ca":{"message":"carregando"},"loading_grades_c842c887":{"message":"Carregando notas"},"loading_past_items_ca499e75":{"message":"Carregando itens passados"},"loading_planner_items_947a813d":{"message":"Carregando itens do planejador"},"location_3b6ff307":{"message":"Local:"},"looks_like_there_isn_t_anything_here_d9bcef49":{"message":"Parece que não há nada aqui"},"missing_1a256b3b":{"message":"Faltante"},"missing_items_for_title_516511f8":{"message":"Itens ausentes para { title }"},"my_grades_98834476":{"message":"Minhas notas"},"new_13daf639":{"message":"Novo"},"new_activity_8b84847d":{"message":"Nova atividade"},"new_activity_for_title_14c9c3af":{"message":"Nova atividade para { title }"},"new_opportunities_7d349c4d":{"message":"Novas oportunidades"},"next_month_749b1778":{"message":"Próximo mês"},"no_due_dates_assigned_e8f5bac8":{"message":"Nenhum prazo de entrega atribuído"},"no_grade_3b4d7f3e":{"message":"Sem nota"},"nothing_for_now_e3e3ce2a":{"message":"Nada no momento"},"nothing_here_needs_attention_c4eaded6":{"message":"Nada aqui precisa de atenção."},"nothing_more_to_do_b665da42":{"message":"Nada mais para fazer"},"nothing_new_needs_attention_3ac548d4":{"message":"Nada novo precisa de atenção."},"nothing_planned_today_selecting_most_recent_item_ffd71bff":{"message":"Nada planejado hoje. Selecionando item mais recente."},"nothing_planned_today_selecting_next_item_f6718aa":{"message":"Nada planejado hoje. Selecionando próximo item."},"nothing_planned_yet_8675ffe9":{"message":"Nada planejado ainda"},"numpoints_points_8621a43b":{"message":"{ numPoints } pontos"},"only_most_recent_grading_period_shown_f1ad6458":{"message":"*Apenas o período de avaliação mais recente é exibido."},"opportunities_popup_f6703842":{"message":"pop-up de oportunidades"},"option_selected_list_collapsed_e00180ff":{"message":"{ option } selecionado. Lista recolhida."},"optional_add_course_ef0d70fc":{"message":"Opcional: Adicionar Curso"},"page_50c4823d":{"message":"Página"},"peer_review_74f26a13":{"message":"Revisão por pares"},"peer_review_for_itemtitle_358cb413":{"message":"Revisão por pares para { itemTitle }"},"points_bceb5005":{"message":"pontos"},"points_points_63e59cce":{"message":"{ points } pontos"},"previous_month_bb1e3c84":{"message":"Mês anterior"},"pts_699bd9aa":{"message":"pts"},"quiz_e0dcce8f":{"message":"Teste"},"reminder_date_4564d12d":{"message":"Lembrete: { date }"},"replies_4a8577c8":{"message":"Respostas"},"save_11a80ec3":{"message":"Salvar"},"scroll_up_to_see_your_history_19b14cad":{"message":"Role para cima para ver o seu histórico!"},"scrolls_up_to_the_previous_item_with_new_activity_99717459":{"message":"Role para cima para o item anterior com nova atividade."},"show_all_ae37d610":{"message":"Mostrar tudo"},"show_my_grades_ebd08684":{"message":"Mostrar minhas notas"},"startdate_to_enddate_d245175b":{"message":"{ startDate } a { endDate }"},"startdatetime_enddatetime_20abc10e":{"message":"{ startDateTime } - { endDateTime }"},"startdatetime_endtime_49741bbe":{"message":"{ startDateTime } - { endTime }"},"starttime_to_endtime_d7cc249d":{"message":"{ startTime } a { endTime }"},"submitted_318fad53":{"message":"Enviado"},"success_to_do_created_e34ed395":{"message":"Sucesso: Lista de tarefas criada"},"task_16b0ef38":{"message":"Tarefa"},"the_date_and_time_this_to_do_is_due_74c823d4":{"message":"A data e hora desta tarefa venceu"},"there_are_no_points_associated_with_this_item_449c712a":{"message":"Não há pontos associados a este item."},"time_2b5aac58":{"message":"Tempo"},"title_ee03d132":{"message":"Título"},"title_is_required_6ddcab69":{"message":"título é necessário"},"to_do_1d554f36":{"message":"Lista de Tarefas"},"to_do_date_4b211ad0":{"message":"Para fazer: { date }"},"to_do_items_loading_d1cdfcd5":{"message":"Itens da lista de tarefas carregando"},"today_76e10f9c":{"message":"Hoje"},"today_at_date_8ac30d6":{"message":"Hoje às { date }"},"tomorrow_9a6c9a00":{"message":"Amanhã"},"tomorrow_at_date_b53f2cf1":{"message":"Amanhã às { date }"},"unable_to_mark_as_complete_8141856d":{"message":"Incapaz de marcar como concluído."},"use_arrow_keys_to_navigate_options_2021cc50":{"message":"Use teclas de setas para navegar entre as opções."},"yesterday_at_date_1aa6d18e":{"message":"Ontem às { date }"},"yesterday_c6bd6abf":{"message":"Ontem"},"you_have_media_feedback_f5f9aba8":{"message":"Você tem feedback de mídia."},"you_must_provide_a_date_and_time_a86839d2":{"message":"Você deve fornecer uma data e hora."},"you_ve_scrolled_back_to_your_very_first_to_do_29374681":{"message":"Você voltou para as suas primeiras tarefas!"}}')},Fh4z:function(e){e.exports=JSON.parse('{"add_to_do_7537af64":{"message":"添加待办事项"},"add_to_do_7def3c37":{"message":"添加到待办事项"},"address_3159962f":{"message":"地址："},"all_day_fb42c4fc":{"message":"全天"},"all_items_loaded_aa256183":{"message":"已加载所有项目"},"an_error_occurred_attempting_to_dismiss_the_opport_f86e0667":{"message":"尝试拒绝该机会时出现错误。"},"announcement_fb4cb645":{"message":"公告"},"are_you_sure_you_want_to_delete_this_planner_item_b71e330c":{"message":"是否确定要删除此规划者项目？"},"assignment_976578a8":{"message":"作业"},"assignmenttype_title_6612d008":{"message":"{ assignmentType } { title }。"},"assignmenttype_title_all_day_on_datetime_9768903c":{"message":"{ assignmentType } { title }，{ datetime }全天。"},"assignmenttype_title_at_datetime_478f0709":{"message":"{ assignmentType } { title }，时间 { datetime }。"},"assignmenttype_title_at_datetime_until_endtime_a5900e38":{"message":"{ assignmentType } { title }，{ datetime }截至{ endTime }"},"assignmenttype_title_due_datetime_a112d8ff":{"message":"{ assignmentType } { title }，截止时间 { datetime }。"},"assignmenttype_title_has_a_to_do_time_at_datetime_e07310e8":{"message":"{ assignmentType } { title }在{ datetime }有待办事项。"},"assignmenttype_title_is_marked_as_done_a8dc46ef":{"message":"{ assignmentType } { title } 已标记为已完成。"},"assignmenttype_title_is_not_marked_as_done_ba80ba66":{"message":"{ assignmentType } { title } 未标记为已完成。"},"assignmenttype_title_posted_datetime_cab69444":{"message":"{ assignmentType } { title }发布了{ datetime }。"},"assignmenttype_title_reminder_datetime_33fa66d5":{"message":"{ assignmentType }{ title }，提醒{ datetime }。"},"beginning_of_your_to_do_history_61ef2dce":{"message":"您的待办事项历史记录的开始"},"calendar_a8563bb2":{"message":"日历:"},"calendar_event_89aadc1c":{"message":"日历事件"},"canvas_planner_98ed106":{"message":"Canvas 计划程序"},"close_d634289d":{"message":"关闭"},"close_opportunity_center_popup_9907d981":{"message":"关闭机会中心弹出窗口"},"count_plural_0_opportunities_one_opportunity_other_765e27fa":{"message":"{ count, plural,\\n     =0 {# 机会}\\n    one {# 机会}\\n  other {# 机会}\\n}"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {显示#个已完成项目}\\n  other {显示#个已完成项目}\\n}"},"course_8a63b4a3":{"message":"课程"},"course_to_do_bcbbab54":{"message":"{ course } 待办"},"date_at_time_dbdb1b99":{"message":"{ date }，时间 { time }"},"date_ee500367":{"message":"日期"},"date_is_not_a_valid_date_4ef9f8ba":{"message":"#{ date } 不是有效的日期。"},"date_is_required_8660ec22":{"message":"日期必填"},"date_time_d9fbf2d7":{"message":"日期和时间："},"delete_a6efa79d":{"message":"删除"},"details_98a31b68":{"message":"详情"},"details_a6f427c3":{"message":"详细信息："},"discussion_6719c51d":{"message":"讨论"},"dismiss_itemtitle_a9fae1b3":{"message":"拒绝 { itemTitle }"},"dismiss_opportunityname_5995176f":{"message":"拒绝 { opportunityName }"},"dismissed_8b0b1fc9":{"message":"已拒绝"},"dismissed_opportunities_f0826640":{"message":"已拒绝的机会"},"due_5d7267be":{"message":"到期："},"due_date_124fdd99":{"message":"到期：{ date }"},"edit_c5fbea07":{"message":"编辑"},"edit_title_72e5a21e":{"message":"编辑 { title }"},"error_loading_grades_e0b38f4d":{"message":"加载评分时出错"},"error_loading_more_items_3f109d9f":{"message":"加载更多项目时出错"},"error_loading_past_items_2881dbb1":{"message":"加载过去的项目时出错"},"excused_cf8792eb":{"message":"已请假"},"failed_to_delete_to_do_64edff49":{"message":"删除待办事项出错"},"failed_to_get_new_activity_17e7ec7c":{"message":"获取新活动失败"},"failed_to_load_opportunities_52ab6404":{"message":"加载机遇失败"},"failed_to_save_to_do_ddc7503b":{"message":"保存待办事项出错"},"feedback_6dcc1991":{"message":"反馈"},"go_to_card_view_dashboard_9d03970e":{"message":"前往卡片视图仪表板"},"graded_25cd3fcd":{"message":"已评分"},"grades_are_loading_c899652d":{"message":"正在加载评分"},"grades_loaded_5056277c":{"message":"已加载评分"},"items_completed_items_plural_1_item_other_items_717d579f":{"message":"{ items }已完成{ items, plural,\\n     =1 {个项目}\\n  other {个项目}\\n}"},"late_2be42b88":{"message":"延迟"},"list_collapsed_9ac35920":{"message":"列表已折叠。"},"list_collapsed_dde87718":{"message":"列表已折叠"},"list_expanded_efec2d0":{"message":"列表已展开。"},"load_more_a36f9cf9":{"message":"加载更多"},"load_prior_dates_f2b0f6f0":{"message":"加载以前的日期"},"loaded_count_plural_0_items_one_item_other_items_e58533e9":{"message":"已加载 { count, plural,\\n     =0 {#  项}\\n    one {# 项}\\n  other {# 项}\\n}"},"loading_25990131":{"message":"加载中……"},"loading_725811ca":{"message":"正在加载"},"loading_grades_c842c887":{"message":"正在加载评分"},"loading_past_items_ca499e75":{"message":"正在加载过去的项目"},"loading_planner_items_947a813d":{"message":"加载计划程序项目"},"location_3b6ff307":{"message":"位置："},"looks_like_there_isn_t_anything_here_d9bcef49":{"message":"此处似乎没有任何内容"},"missing_1a256b3b":{"message":"缺失"},"missing_items_for_title_516511f8":{"message":"{ title } 的缺失项目"},"my_grades_98834476":{"message":"我的评分"},"new_13daf639":{"message":"新建"},"new_activity_8b84847d":{"message":"新活动"},"new_activity_for_title_14c9c3af":{"message":"{ title } 的新活动"},"new_opportunities_7d349c4d":{"message":"新机会"},"next_month_749b1778":{"message":"下个月"},"no_due_dates_assigned_e8f5bac8":{"message":"未指定截止日期"},"no_grade_3b4d7f3e":{"message":"没有评分"},"nothing_for_now_e3e3ce2a":{"message":"目前没有任何内容"},"nothing_here_needs_attention_c4eaded6":{"message":"此处没有需要关注的。"},"nothing_more_to_do_b665da42":{"message":"没有更多待办事项"},"nothing_new_needs_attention_3ac548d4":{"message":"没有任何新内容需要注意。"},"nothing_planned_today_selecting_most_recent_item_ffd71bff":{"message":"今天没有计划。选择最近的项目。"},"nothing_planned_today_selecting_next_item_f6718aa":{"message":"今天没有计划。选择下一个项目。"},"nothing_planned_yet_8675ffe9":{"message":"尚未进行任何计划"},"numpoints_points_8621a43b":{"message":"{ numPoints } 分"},"only_most_recent_grading_period_shown_f1ad6458":{"message":"*仅显示最近的评分周期。"},"opportunities_popup_f6703842":{"message":"机会弹出窗口"},"option_selected_list_collapsed_e00180ff":{"message":"已选择{ option }。列表已折叠。"},"optional_add_course_ef0d70fc":{"message":"可选：添加课程"},"page_50c4823d":{"message":"页面"},"peer_review_74f26a13":{"message":"同伴互评"},"peer_review_for_itemtitle_358cb413":{"message":"{ itemTitle }同行评审"},"points_bceb5005":{"message":"分值"},"points_points_63e59cce":{"message":"{ points } 分"},"previous_month_bb1e3c84":{"message":"上个月"},"pts_699bd9aa":{"message":"分"},"quiz_e0dcce8f":{"message":"测验"},"reminder_date_4564d12d":{"message":"提醒：{ date }"},"replies_4a8577c8":{"message":"回复"},"save_11a80ec3":{"message":"保存"},"scroll_up_to_see_your_history_19b14cad":{"message":"向上滚动以查看您的历史记录！"},"scrolls_up_to_the_previous_item_with_new_activity_99717459":{"message":"向上滚动到上一个具有新活动的项目。"},"show_all_ae37d610":{"message":"显示全部"},"show_my_grades_ebd08684":{"message":"显示我的评分"},"startdate_to_enddate_d245175b":{"message":"{ startDate } 至 { endDate }"},"startdatetime_enddatetime_20abc10e":{"message":"{ startDateTime } - { endDateTime }"},"startdatetime_endtime_49741bbe":{"message":"{ startDateTime } - { endTime }"},"starttime_to_endtime_d7cc249d":{"message":"{ startTime } 至 { endTime }"},"submitted_318fad53":{"message":"已提交"},"success_to_do_created_e34ed395":{"message":"成功：创建的待办列表"},"task_16b0ef38":{"message":"任务"},"the_date_and_time_this_to_do_is_due_74c823d4":{"message":"完成该事项的日期和时间已截止"},"there_are_no_points_associated_with_this_item_449c712a":{"message":"没有与此项目相关的分数"},"time_2b5aac58":{"message":"时间"},"title_ee03d132":{"message":"标题"},"title_is_required_6ddcab69":{"message":"名称必填"},"to_do_1d554f36":{"message":"待办事项"},"to_do_date_4b211ad0":{"message":"待办事项：{ date }"},"to_do_items_loading_d1cdfcd5":{"message":"正在加载待办事项"},"today_76e10f9c":{"message":"今天"},"today_at_date_8ac30d6":{"message":"今天 { date }"},"tomorrow_9a6c9a00":{"message":"明天"},"tomorrow_at_date_b53f2cf1":{"message":"明天 { date }"},"unable_to_mark_as_complete_8141856d":{"message":"无法标记为完成"},"use_arrow_keys_to_navigate_options_2021cc50":{"message":"使用方向键来导航各选项。"},"yesterday_at_date_1aa6d18e":{"message":"昨天 { date }"},"yesterday_c6bd6abf":{"message":"昨天"},"you_have_media_feedback_f5f9aba8":{"message":"您有媒体反馈。"},"you_must_provide_a_date_and_time_a86839d2":{"message":"须提供日期和时间。"},"you_ve_scrolled_back_to_your_very_first_to_do_29374681":{"message":"您已经往回滚动到第一个待办事项！"}}')},GCD2:function(e){e.exports=JSON.parse('{"announcement_fb4cb645":{"message":"공지 사항"},"assignment_976578a8":{"message":"과제"},"calendar_a8563bb2":{"message":"달력:"},"calendar_event_89aadc1c":{"message":"행사"},"close_d634289d":{"message":"닫기"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n  other {}\\n}"},"course_8a63b4a3":{"message":"과목"},"date_ee500367":{"message":"날짜"},"delete_a6efa79d":{"message":"삭제"},"details_98a31b68":{"message":"세부 정보"},"details_a6f427c3":{"message":"세부 정보:"},"discussion_6719c51d":{"message":"토론"},"due_5d7267be":{"message":"기한:"},"edit_c5fbea07":{"message":"편집"},"graded_25cd3fcd":{"message":"평가됨"},"load_more_a36f9cf9":{"message":"더 로드"},"loading_25990131":{"message":"로드하는 중..."},"location_3b6ff307":{"message":"위치:"},"new_13daf639":{"message":"새 항목"},"nothing_for_now_e3e3ce2a":{"message":"현재 없음"},"page_50c4823d":{"message":"페이지"},"peer_review_74f26a13":{"message":"피어 리뷰"},"points_bceb5005":{"message":"점수"},"pts_699bd9aa":{"message":"점"},"quiz_e0dcce8f":{"message":"퀴즈"},"save_11a80ec3":{"message":"저장"},"submitted_318fad53":{"message":"제출됨"},"time_2b5aac58":{"message":"시간"},"title_ee03d132":{"message":"제목"},"to_do_1d554f36":{"message":"할 일"},"today_76e10f9c":{"message":"오늘"},"tomorrow_9a6c9a00":{"message":"내일"},"yesterday_c6bd6abf":{"message":"어제"}}')},GuGJ:function(e){e.exports=JSON.parse('{"add_to_do_7537af64":{"message":"Ajouter À faire"},"add_to_do_7def3c37":{"message":"Ajouter une tâche"},"address_3159962f":{"message":"Adresse :"},"all_day_fb42c4fc":{"message":"Toute la journée"},"all_items_loaded_aa256183":{"message":"Tous les éléments sont chargés"},"an_error_occurred_attempting_to_dismiss_the_opport_f86e0667":{"message":"Une erreur est survenue lors de la tentative de rejeter l’opportunité."},"announcement_fb4cb645":{"message":"Annonce"},"are_you_sure_you_want_to_delete_this_planner_item_b71e330c":{"message":"Êtes-vous certain de vouloir supprimer cet élément de planification?"},"assignment_976578a8":{"message":"Tâche"},"assignmenttype_title_6612d008":{"message":"{ assignmentType } { title }."},"assignmenttype_title_all_day_on_datetime_9768903c":{"message":"{ assignmentType } { title }, toute la journée à { datetime }."},"assignmenttype_title_at_datetime_478f0709":{"message":"{ assignmentType } { title }, à { datetime }."},"assignmenttype_title_at_datetime_until_endtime_a5900e38":{"message":"{ assignmentType } { title }, à { datetime } jusqu’à { endTime }"},"assignmenttype_title_due_datetime_a112d8ff":{"message":"{ assignmentType } { title }, dû { datetime }."},"assignmenttype_title_has_a_to_do_time_at_datetime_e07310e8":{"message":"{ assignmentType } { title } dispose d’une période À faire à { datetime }."},"assignmenttype_title_is_marked_as_done_a8dc46ef":{"message":"{ assignmentType } { title } est marqué comme terminé."},"assignmenttype_title_is_not_marked_as_done_ba80ba66":{"message":"{ assignmentType } { title } n’est pas marqué comme terminé."},"assignmenttype_title_posted_datetime_cab69444":{"message":"{ assignmentType } { title } publié { datetime }."},"assignmenttype_title_reminder_datetime_33fa66d5":{"message":"{ assignmentType } { title }, rappel { datetime }."},"beginning_of_your_to_do_history_61ef2dce":{"message":"Début de votre historique des tâches À faire"},"calendar_a8563bb2":{"message":"Calendrier :"},"calendar_event_89aadc1c":{"message":"Événement du calendrier"},"canvas_planner_98ed106":{"message":"Planificateur Canvas"},"close_d634289d":{"message":"Fermer"},"close_opportunity_center_popup_9907d981":{"message":"Fermez le menu contextuel du Centre d’opportunités"},"count_plural_0_opportunities_one_opportunity_other_765e27fa":{"message":"{ count, plural,\\n     =0 {# possibilités}\\n    one {# possibilité}\\n  other {# possibilités}\\n}"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {Afficher # élément terminé}\\n  other {Afficher # éléments terminés}\\n}"},"course_8a63b4a3":{"message":"Cours"},"course_to_do_bcbbab54":{"message":"{ course } À FAIRE"},"date_at_time_dbdb1b99":{"message":"{ date } à { time }"},"date_ee500367":{"message":"Date"},"date_is_not_a_valid_date_4ef9f8ba":{"message":"#{ date } n’est pas une date valide."},"date_is_required_8660ec22":{"message":"La date est obligatoire"},"date_time_d9fbf2d7":{"message":"Date et heure :"},"delete_a6efa79d":{"message":"Supprimer"},"details_98a31b68":{"message":"Détails"},"details_a6f427c3":{"message":"Détails :"},"discussion_6719c51d":{"message":"Discussion"},"dismiss_itemtitle_a9fae1b3":{"message":"Ignorer { itemTitle }"},"dismiss_opportunityname_5995176f":{"message":"Ignorer { opportunityName }"},"dismissed_8b0b1fc9":{"message":"Rejeté"},"dismissed_opportunities_f0826640":{"message":"Opportunités rejetées"},"due_5d7267be":{"message":"Échéance :"},"due_date_124fdd99":{"message":"Échéance : { date }"},"edit_c5fbea07":{"message":"Modifier"},"edit_title_72e5a21e":{"message":"Modifier { title }"},"error_loading_grades_e0b38f4d":{"message":"Erreur lors du chargement des notes."},"error_loading_more_items_3f109d9f":{"message":"Erreur lors du chargement de plus d’éléments"},"error_loading_past_items_2881dbb1":{"message":"Erreur lors du chargement des éléments passés"},"excused_cf8792eb":{"message":"Exempté"},"failed_to_delete_to_do_64edff49":{"message":"Échec lors de la suppression des « activités à faire »"},"failed_to_get_new_activity_17e7ec7c":{"message":"Échec lors de l\'\'obtention de la nouvelle activité"},"failed_to_load_opportunities_52ab6404":{"message":"Échec lors du chargement des opportunités"},"failed_to_save_to_do_ddc7503b":{"message":"Échec lors de l’enregistrement des « activités à faire »"},"feedback_6dcc1991":{"message":"Rétroaction"},"go_to_card_view_dashboard_9d03970e":{"message":"Aller au tableau de bord Vue de carte"},"graded_25cd3fcd":{"message":"Noté"},"grades_are_loading_c899652d":{"message":"Les notes sont en cours de chargement"},"grades_loaded_5056277c":{"message":"Les notes sont chargées"},"items_completed_items_plural_1_item_other_items_717d579f":{"message":"{ items } terminé { items, plural,\\n     =1 {élément}\\n  other {éléments}\\n}"},"late_2be42b88":{"message":"En retard"},"list_collapsed_9ac35920":{"message":"Liste réduite."},"list_collapsed_dde87718":{"message":"Liste réduite"},"list_expanded_efec2d0":{"message":"Liste développée."},"load_more_a36f9cf9":{"message":"En charger plus"},"load_prior_dates_f2b0f6f0":{"message":"Charger les dates précédentes"},"loaded_count_plural_0_items_one_item_other_items_e58533e9":{"message":"Chargé { count, plural,\\n     =0 {# éléments}\\n    one {# élément}\\n  other {# éléments}\\n}"},"loading_25990131":{"message":"En cours de chargement..."},"loading_725811ca":{"message":"chargement en cours"},"loading_grades_c842c887":{"message":"Notes en cours de chargement..."},"loading_past_items_ca499e75":{"message":"Chargement des éléments passés"},"loading_planner_items_947a813d":{"message":"Chargement des éléments du planificateur"},"location_3b6ff307":{"message":"Emplacement :"},"looks_like_there_isn_t_anything_here_d9bcef49":{"message":"Il semble qu’il n\'\'y ait rien ici"},"missing_1a256b3b":{"message":"Manquant"},"missing_items_for_title_516511f8":{"message":"Éléments manquants pour { title }"},"my_grades_98834476":{"message":"Mes Notes"},"new_13daf639":{"message":"Nouveau"},"new_activity_8b84847d":{"message":"Nouvelle activité"},"new_activity_for_title_14c9c3af":{"message":"Nouvelle activité pour { title }"},"new_opportunities_7d349c4d":{"message":"Nouvelles opportunités"},"next_month_749b1778":{"message":"Mois prochain"},"no_due_dates_assigned_e8f5bac8":{"message":"Aucune date d\'\'échéance assignée"},"no_grade_3b4d7f3e":{"message":"Non noté"},"nothing_for_now_e3e3ce2a":{"message":"Rien pour l’instant"},"nothing_here_needs_attention_c4eaded6":{"message":"Rien ici n\'\'a besoin d\'\'attention."},"nothing_more_to_do_b665da42":{"message":"Rien de plus à faire"},"nothing_new_needs_attention_3ac548d4":{"message":"Rien de nouveau à prendre en charge."},"nothing_planned_today_selecting_most_recent_item_ffd71bff":{"message":"Rien de planifié aujourd\'\'hui. Sélection du plus récent élément."},"nothing_planned_today_selecting_next_item_f6718aa":{"message":"Rien de planifié aujourd\'\'hui. Sélection du prochain élément."},"nothing_planned_yet_8675ffe9":{"message":"Rien de planifié en ce moment"},"numpoints_points_8621a43b":{"message":"{ numPoints } points"},"only_most_recent_grading_period_shown_f1ad6458":{"message":"*Seulement les plus récentes périodes de notation sont affichées."},"opportunities_popup_f6703842":{"message":"Fenêtre contextuelle des possibilités"},"option_selected_list_collapsed_e00180ff":{"message":"{ option } sélectionné. Liste réduite."},"optional_add_course_ef0d70fc":{"message":"Facultatif : Ajouter un cours"},"page_50c4823d":{"message":"Page"},"peer_review_74f26a13":{"message":"Révision par les pairs"},"peer_review_for_itemtitle_358cb413":{"message":"Révision par les pairs pour { itemTitle }"},"points_bceb5005":{"message":"points"},"points_points_63e59cce":{"message":"{ points } points"},"previous_month_bb1e3c84":{"message":"Mois précédent"},"pts_699bd9aa":{"message":"pts"},"quiz_e0dcce8f":{"message":"Questionnaire"},"reminder_date_4564d12d":{"message":"Rappel : { date }"},"replies_4a8577c8":{"message":"Réponses"},"save_11a80ec3":{"message":"Enregistrer"},"scroll_up_to_see_your_history_19b14cad":{"message":"Défiler vers le haut pour visualiser l’historique!"},"scrolls_up_to_the_previous_item_with_new_activity_99717459":{"message":"Défile vers le haut vers l’élément précédent avec une nouvelle activité."},"show_all_ae37d610":{"message":"Tout afficher"},"show_my_grades_ebd08684":{"message":"Afficher Mes Notes"},"startdate_to_enddate_d245175b":{"message":"{ startDate } à { endDate }"},"startdatetime_enddatetime_20abc10e":{"message":"{ startDateTime } - { endDateTime }"},"startdatetime_endtime_49741bbe":{"message":"{ startDateTime } - { endTime }"},"starttime_to_endtime_d7cc249d":{"message":"{ startTime } à { endTime }"},"submitted_318fad53":{"message":"Envoyé"},"success_to_do_created_e34ed395":{"message":"Succès : « À faire » créé"},"task_16b0ef38":{"message":"Tâche"},"the_date_and_time_this_to_do_is_due_74c823d4":{"message":"La date et l’heure où cet élément « À faire » est dû"},"there_are_no_points_associated_with_this_item_449c712a":{"message":"Il n\'\'y a aucun point associé à ce élément"},"time_2b5aac58":{"message":"Heure"},"title_ee03d132":{"message":"Titre"},"title_is_required_6ddcab69":{"message":"le titre est obligatoire"},"to_do_1d554f36":{"message":"À faire"},"to_do_date_4b211ad0":{"message":"À faire : { date }"},"to_do_items_loading_d1cdfcd5":{"message":"Chargement des tâches à faire"},"today_76e10f9c":{"message":"Aujourd’hui"},"today_at_date_8ac30d6":{"message":"Aujourd\'\'hui à { date }"},"tomorrow_9a6c9a00":{"message":"Demain"},"tomorrow_at_date_b53f2cf1":{"message":"Demain à { date }"},"unable_to_mark_as_complete_8141856d":{"message":"Impossible de marquer comme Terminé."},"use_arrow_keys_to_navigate_options_2021cc50":{"message":"Utiliser les touches directionnelles pour naviguer entre les options."},"yesterday_at_date_1aa6d18e":{"message":"Hier à { date }"},"yesterday_c6bd6abf":{"message":"Hier"},"you_have_media_feedback_f5f9aba8":{"message":"Vous avez une rétroaction de média."},"you_must_provide_a_date_and_time_a86839d2":{"message":"Vous devez fournir une date et une heure."},"you_ve_scrolled_back_to_your_very_first_to_do_29374681":{"message":"Vous êtes revenu à votre toute première tâche À faire!"}}')},"I/Ap":function(e,t){e.exports=/[^A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]+/g},IyvR:function(e,t,a){var s=a("jDM7")
var n=a("oCWi")
e.exports=function(e,t){return s(n(e,t),t)}},JlUD:function(e,t){e.exports=a
function a(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then}},KUkU:function(e,t,a){var s=a("Pwfc")
e.exports=function(e,t){return s(e,t,"/")}},"Ls+w":function(e,t,a){"use strict"
a.d(t,"a",(function(){return c}))
var s=a("VTBJ")
var n=a("1OyB")
var i=a("vuIU")
var r=a("md7G")
var o=a("foSv")
var d=a("Ji7U")
var l=a("q1tI")
var u=a.n(l)
var _=a("hPGw")
var m=u.a.createElement("path",{d:"M219.03 0H1801.44v1920H219.03v-439.216h-56.514c-31.196 0-56.515-25.299-56.515-56.47 0-31.172 25.319-56.47 56.515-56.47h56.514V1029.02h-56.514c-31.196 0-56.515-25.3-56.515-56.471 0-31.172 25.319-56.47 56.515-56.47h56.514V577.254h-56.514c-31.196 0-56.515-25.299-56.515-56.47 0-31.172 25.319-56.471 56.515-56.471h56.514V0zm1469.382 1807.059V112.94H332.059v351.373h56.515c31.196 0 56.514 25.299 56.514 56.47 0 31.172-25.318 56.47-56.514 56.47h-56.515v338.824h56.515c31.196 0 56.514 25.3 56.514 56.471 0 31.172-25.318 56.47-56.514 56.47h-56.515v338.824h56.515c31.196 0 56.514 25.299 56.514 56.47 0 31.172-25.318 56.471-56.514 56.471h-56.515v326.275h1356.353zM1461.96 734.118v508.235H558.43v-903.53h621.177v112.942H671.373v677.647h677.647V734.118h112.94zM889.315 622.114l145.017 145.13 352.602-352.603 79.85 79.85-432.452 432.451-224.866-224.979 79.85-79.85z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var c=function(e){Object(d["a"])(t,e)
function t(){Object(n["a"])(this,t)
return Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return u.a.createElement(_["a"],Object.assign({},this.props,{name:"IconGradebook",viewBox:"0 0 1920 1920"}),m)}}])
t.displayName="IconGradebookLine"
return t}(l["Component"])
c.glyphName="gradebook"
c.variant="Line"
c.propTypes=Object(s["a"])({},_["a"].propTypes)},"M8//":function(e,t,a){"use strict"
var s=a("rePB")
var n=a("1OyB")
var i=a("vuIU")
var r=a("md7G")
var o=a("foSv")
var d=a("JX7q")
var l=a("Ji7U")
var u=a("q1tI")
var _=a.n(u)
var m=a("17x9")
var c=a.n(m)
var g=a("TSYQ")
var p=a.n(g)
var f=a("cClk")
var h=a("sTNg")
var b=a("QF4Q")
var y=a("yfCu")
var v=a("8o96")
var E=a("ISHz")
var A=a("/UXv")
var C=a("eGSd")
var k=a("BTe1")
var w=a("HMVb")
var T=a("J2CL")
var D=a("oXx0")
var x=a("jtGx")
function F(e){var t=e.colors,a=e.borders,s=e.spacing,n=e.typography,i=e.forms
return{fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,color:t.textDarkest,background:t.backgroundLightest,borderWidth:a.widthSmall,borderStyle:a.style,borderTopColor:t.borderMedium,borderRightColor:t.borderMedium,borderBottomColor:t.borderMedium,borderLeftColor:t.borderMedium,borderRadius:a.radiusMedium,padding:s.small,focusOutlineColor:t.borderBrand,focusOutlineWidth:a.widthMedium,focusOutlineStyle:a.style,errorBorderColor:t.borderDanger,errorOutlineColor:t.borderDanger,placeholderColor:t.textDark,smallFontSize:n.fontSizeSmall,smallHeight:i.inputHeightSmall,mediumFontSize:n.fontSizeMedium,mediumHeight:i.inputHeightMedium,largeFontSize:n.fontSizeLarge,largeHeight:i.inputHeightLarge}}F.canvas=function(e){return{color:e["ic-brand-font-color-dark"],focusOutlineColor:e["ic-brand-primary"]}}
a.d(t,"a",(function(){return M}))
var S,O,B,I,z
var N={componentId:"chpSa",template:function(e){return"\n\n.chpSa_byIz{position:relative}\n\n.chpSa_cPAP{border:".concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit","*1.5);bottom:-0.25rem;box-sizing:border-box;display:block;left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.chpSa_blLZ{-moz-appearance:none;-moz-osx-font-smoothing:grayscale;-webkit-appearance:none;-webkit-font-smoothing:antialiased;all:initial;animation:none 0s ease 0s 1 normal none running;appearance:none;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:").concat(e.background||"inherit",";border:medium none currentColor;border-bottom-color:").concat(e.borderBottomColor||"inherit",";border-collapse:separate;border-image:none;border-left-color:").concat(e.borderLeftColor||"inherit",";border-radius:0;border-radius:").concat(e.borderRadius||"inherit",";border-right-color:").concat(e.borderRightColor||"inherit",";border-spacing:0;border-style:").concat(e.borderStyle||"inherit",";border-top-color:").concat(e.borderTopColor||"inherit",";border-width:").concat(e.borderWidth||"inherit",";bottom:auto;box-shadow:none;box-sizing:content-box;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:#000;color:").concat(e.color||"inherit",";column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamily||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:").concat(e.fontWeight||"inherit",";height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding:").concat(e.padding||"inherit",";page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align:start;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;white-space:pre-wrap;widows:2;width:auto;width:100%;word-spacing:normal;word-wrap:break-word;z-index:auto}\n\n[dir=ltr] .chpSa_blLZ{text-align:left}\n\n[dir=rtl] .chpSa_blLZ{text-align:right}\n\n.chpSa_blLZ:focus~.chpSa_cPAP{opacity:1;transform:scale(1)}\n\n.chpSa_blLZ[aria-invalid],.chpSa_blLZ[aria-invalid]:focus,.chpSa_blLZ[aria-invalid]:focus~.chpSa_cPAP{border-color:").concat(e.errorBorderColor||"inherit","}\n\n.chpSa_blLZ:-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.chpSa_blLZ::-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.chpSa_blLZ::placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.chpSa_blLZ.chpSa_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.chpSa_doqw{font-size:").concat(e.smallFontSize||"inherit","}\n\n.chpSa_ycrn{font-size:").concat(e.mediumFontSize||"inherit","}\n\n.chpSa_cMDj{font-size:").concat(e.largeFontSize||"inherit","}")},layout:"chpSa_byIz",outline:"chpSa_cPAP",textarea:"chpSa_blLZ",disabled:"chpSa_ywdX",small:"chpSa_doqw",medium:"chpSa_ycrn",large:"chpSa_cMDj"}
var M=(S=Object(D["a"])(),O=Object(T["themeable"])(F,N),S(B=O(B=(z=I=function(e){Object(l["a"])(t,e)
function t(){var e
Object(n["a"])(this,t)
e=Object(r["a"])(this,Object(o["a"])(t).call(this))
e._textareaResize=function(t){var a=e._textarea.style.height
if(a!=e._height){e._manuallyResized=true
e._textarea.style.overflowY="auto"
e._container.style.minHeight=a}}
e.grow=function(t){if(!e._textarea||e._manuallyResized)return
var a=e._textarea.offsetHeight-e._textarea.clientHeight
var s=""
e._textarea.style.height="auto"
e._textarea.style.overflowY="hidden"
s=e._textarea.scrollHeight+a+"px"
var n=Object(w["a"])(e.props.maxHeight,Object(b["a"])(Object(d["a"])(e)))
if(e.props.maxHeight&&e._textarea.scrollHeight>n)e._textarea.style.overflowY="auto"
else if(e.props.height)if(""===e._textarea.value)s=e.props.height
else if(Object(w["a"])(e.props.height,Object(b["a"])(Object(d["a"])(e)))>e._textarea.scrollHeight){e._textarea.style.overflowY="auto"
s=e.props.height}var i=Object(w["a"])(s)>n
i||(e._container.style.minHeight=s)
e._height=s
e._textarea.style.height=s
e._textarea.scrollTop=e._textarea.scrollHeight}
e.handleChange=function(t){var a=e.props,s=a.onChange,n=a.value,i=a.disabled,r=a.readOnly
if(i||r){t.preventDefault()
return}"undefined"===typeof n&&e.autoGrow()
"function"===typeof s&&s(t)}
e.handleContainerRef=function(t){e._container=t}
e._defaultId=Object(k["a"])("TextArea")
return e}Object(i["a"])(t,[{key:"componentDidMount",value:function(){this.autoGrow()}},{key:"componentWillReceiveProps",value:function(e){this.autoGrow()}},{key:"componentWillUnmount",value:function(){this._listener&&this._listener.remove()
this._textareaResizeListener&&this._textareaResizeListener.remove()
this._request&&this._request.cancel()
this._debounced&&this._debounced.cancel()}},{key:"autoGrow",value:function(){if(this.props.autoGrow){this._debounced||(this._debounced=Object(C["a"])(this.grow,200,{leading:false,trailing:true}))
this._listener||(this._listener=Object(y["a"])(window,"resize",this._debounced))
this._textarea&&!this._textareaResizeListener&&(this._textareaResizeListener=Object(v["a"])(this._textarea,this._textareaResize,["height"]))
this._request=Object(E["a"])(this.grow)}}},{key:"focus",value:function(){this._textarea.focus()}},{key:"render",value:function(){var e,a=this
var n=this.props,i=n.autoGrow,r=n.placeholder,o=n.value,d=n.defaultValue,l=n.disabled,u=n.readOnly,m=n.required,c=n.width,g=n.height,f=n.maxHeight,b=n.textareaRef,y=n.resize,v=n.size
var E=Object(x["a"])(this.props,t.propTypes)
var A=(e={},Object(s["a"])(e,N.textarea,true),Object(s["a"])(e,N[v],true),Object(s["a"])(e,N.disabled,l),e)
var C={width:c,resize:y,height:i?null:g,maxHeight:f}
var k=_.a.createElement("textarea",Object.assign({},E,{value:o,defaultValue:d,placeholder:r,ref:function(e){a._textarea=e
for(var t=arguments.length,s=new Array(t>1?t-1:0),n=1;n<t;n++)s[n-1]=arguments[n]
b.apply(a,[e].concat(s))},style:C,id:this.id,required:m,"aria-required":m,"aria-invalid":this.invalid?"true":null,disabled:l||u,className:p()(A),onChange:this.handleChange}))
return _.a.createElement(h["FormField"],Object.assign({},Object(x["c"])(this.props,h["FormField"].propTypes),{vAlign:"top",id:this.id,ref:function(e){a._node=e}}),_.a.createElement("div",{className:N.layout,style:{width:c,maxHeight:f},ref:this.handleContainerRef},k,l||u?null:_.a.createElement("span",{className:N.outline,"aria-hidden":"true"})))}},{key:"minHeight",get:function(){return this._textarea.style.minHeight}},{key:"invalid",get:function(){return this.props.messages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}},{key:"id",get:function(){return this.props.id||this._defaultId}},{key:"focused",get:function(){return Object(A["a"])(this._textarea)}},{key:"value",get:function(){return this._textarea.value}}])
t.displayName="TextArea"
return t}(u["Component"]),I.propTypes={label:c.a.node.isRequired,id:c.a.string,size:c.a.oneOf(["small","medium","large"]),layout:c.a.oneOf(["stacked","inline"]),autoGrow:c.a.bool,resize:c.a.oneOf(["none","both","horizontal","vertical"]),width:c.a.string,height:c.a.string,maxHeight:c.a.oneOfType([c.a.number,c.a.string]),messages:c.a.arrayOf(h["FormPropTypes"].message),inline:c.a.bool,placeholder:c.a.string,disabled:c.a.bool,readOnly:c.a.bool,required:c.a.bool,textareaRef:c.a.func,defaultValue:c.a.string,value:Object(f["a"])(c.a.string),onChange:c.a.func},I.defaultProps={size:"medium",autoGrow:true,resize:"none",inline:false,messages:[],disabled:false,readOnly:false,textareaRef:function(e){},layout:"stacked",id:void 0,value:void 0,defaultValue:void 0,onChange:void 0,required:false,placeholder:void 0,width:void 0,height:void 0,maxHeight:void 0},z))||B)||B)},MH7q:function(e){e.exports=JSON.parse('{"add_to_do_7537af64":{"message":"Lägg till att göra"},"add_to_do_7def3c37":{"message":"Lägg till att göra"},"address_3159962f":{"message":"Adress:"},"all_day_fb42c4fc":{"message":"Hela dagen"},"all_items_loaded_aa256183":{"message":"Alla objekt inlästa"},"an_error_occurred_attempting_to_dismiss_the_opport_f86e0667":{"message":"Ett fel uppstod när möjligheten skulle avvisas."},"announcement_fb4cb645":{"message":"Anslag"},"are_you_sure_you_want_to_delete_this_planner_item_b71e330c":{"message":"Vill du ta bort det här Planner-objektet?"},"assignment_976578a8":{"message":"Uppgift"},"assignmenttype_title_6612d008":{"message":"{ assignmentType } { title }."},"assignmenttype_title_all_day_on_datetime_9768903c":{"message":"{ assignmentType } { title }, hela dagen den { datetime }."},"assignmenttype_title_at_datetime_478f0709":{"message":"{ assignmentType } { title }, kl. { datetime }."},"assignmenttype_title_at_datetime_until_endtime_a5900e38":{"message":"{ assignmentType } { title }, kl. { datetime } till { endTime }"},"assignmenttype_title_due_datetime_a112d8ff":{"message":"{ assignmentType } { title }, förfaller { datetime }."},"assignmenttype_title_has_a_to_do_time_at_datetime_e07310e8":{"message":"{ assignmentType } { title } har något planerat kl. { datetime }."},"assignmenttype_title_is_marked_as_done_a8dc46ef":{"message":"{ assignmentType } { title } har markerats som klar."},"assignmenttype_title_is_not_marked_as_done_ba80ba66":{"message":"{ assignmentType } { title } har inte markerats som klar."},"assignmenttype_title_posted_datetime_cab69444":{"message":"{ assignmentType } { title } publicerades { datetime }."},"assignmenttype_title_reminder_datetime_33fa66d5":{"message":"{ assignmentType } { title }, påminnelse { datetime }."},"beginning_of_your_to_do_history_61ef2dce":{"message":"Början av din att göra-historik"},"calendar_a8563bb2":{"message":"Kalender:"},"calendar_event_89aadc1c":{"message":"Kalenderhändelse"},"canvas_planner_98ed106":{"message":"Canvas Planner"},"close_d634289d":{"message":"Stäng"},"close_opportunity_center_popup_9907d981":{"message":"Stäng popup-fönstret med möjlighetscentret"},"count_plural_0_opportunities_one_opportunity_other_765e27fa":{"message":"{ count, plural,\\n     =0 {# möjligheter}\\n    one {# möjlighet}\\n  other {# möjligheter}\\n}"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {Visa # slutfört objekt}\\n  other {Visa # slutförda objekt}\\n}"},"course_8a63b4a3":{"message":"Kurs"},"course_to_do_bcbbab54":{"message":"{ course } ATT GÖRA"},"date_at_time_dbdb1b99":{"message":"{ date } kl. { time }"},"date_ee500367":{"message":"Datum"},"date_is_not_a_valid_date_4ef9f8ba":{"message":"#{ date } är inte ett giltigt datum."},"date_is_required_8660ec22":{"message":"Datum krävs"},"date_time_d9fbf2d7":{"message":"Datum och tid:"},"delete_a6efa79d":{"message":"Ta bort"},"details_98a31b68":{"message":"Detaljer"},"details_a6f427c3":{"message":"Detaljer:"},"discussion_6719c51d":{"message":"Diskussion"},"dismiss_itemtitle_a9fae1b3":{"message":"Avvisa { itemTitle }"},"dismiss_opportunityname_5995176f":{"message":"Avvisa { opportunityName }"},"dismissed_8b0b1fc9":{"message":"Avvisade"},"dismissed_opportunities_f0826640":{"message":"Avvisade möjligheter"},"due_5d7267be":{"message":"Inlämningsdatum:"},"due_date_124fdd99":{"message":"Inlämningsdatum: { date }"},"edit_c5fbea07":{"message":"Redigera"},"edit_title_72e5a21e":{"message":"Redigera { title }"},"error_loading_grades_e0b38f4d":{"message":"Det gick inte att läsa in omdömen"},"error_loading_more_items_3f109d9f":{"message":"Det gick inte att läsa in fler objekt"},"error_loading_past_items_2881dbb1":{"message":"Det gick inte att läsa in tidigare objekt"},"excused_cf8792eb":{"message":"Ursäktad"},"failed_to_delete_to_do_64edff49":{"message":"Det gick inte att ta bort att göra"},"failed_to_get_new_activity_17e7ec7c":{"message":"Det gick inte att hämta ny aktivitet"},"failed_to_load_opportunities_52ab6404":{"message":"Det gick inte att läsa in möjligheter"},"failed_to_save_to_do_ddc7503b":{"message":"Det gick inte att spara att göra"},"feedback_6dcc1991":{"message":"Feedback"},"go_to_card_view_dashboard_9d03970e":{"message":"Gå till översikten Kortvy"},"graded_25cd3fcd":{"message":"Har bedömts"},"grades_are_loading_c899652d":{"message":"Omdömen läses in"},"grades_loaded_5056277c":{"message":"Omdömen har lästs in"},"items_completed_items_plural_1_item_other_items_717d579f":{"message":"{ items } slutförda { items, plural,\\n     =1 {objekt}\\n  other {objekt}\\n}"},"late_2be42b88":{"message":"Sen"},"list_collapsed_9ac35920":{"message":"Listan komprimerades."},"list_collapsed_dde87718":{"message":"Listan komprimerades"},"list_expanded_efec2d0":{"message":"Listan utökades."},"load_more_a36f9cf9":{"message":"Läs in mer"},"load_prior_dates_f2b0f6f0":{"message":"Läs in tidigare datum"},"loaded_count_plural_0_items_one_item_other_items_e58533e9":{"message":"Läste in { count, plural,\\n     =0 {# objekt}\\n    one {# objekt}\\n  other {# objekt}\\n}"},"loading_25990131":{"message":"Läser in ..."},"loading_725811ca":{"message":"läser in"},"loading_grades_c842c887":{"message":"Läser in omdömen"},"loading_past_items_ca499e75":{"message":"Läser in tidigare objekt"},"loading_planner_items_947a813d":{"message":"Läser in Planner-objekt"},"location_3b6ff307":{"message":"Plats:"},"looks_like_there_isn_t_anything_here_d9bcef49":{"message":"Det verkar inte finnas något här"},"missing_1a256b3b":{"message":"Saknas"},"missing_items_for_title_516511f8":{"message":"Objekt saknas för { title }"},"my_grades_98834476":{"message":"Mina omdömen"},"new_13daf639":{"message":"Ny"},"new_activity_8b84847d":{"message":"Ny aktivitet"},"new_activity_for_title_14c9c3af":{"message":"Ny aktivitet för { title }"},"new_opportunities_7d349c4d":{"message":"Nya möjligheter"},"next_month_749b1778":{"message":"Nästa månad"},"no_due_dates_assigned_e8f5bac8":{"message":"Inga inlämningsdatum tilldelade"},"no_grade_3b4d7f3e":{"message":"Ingen omdöme"},"nothing_for_now_e3e3ce2a":{"message":"Inget just nu"},"nothing_here_needs_attention_c4eaded6":{"message":"Inget behöver åtgärdas här."},"nothing_more_to_do_b665da42":{"message":"Inget mer att göra"},"nothing_new_needs_attention_3ac548d4":{"message":"Inget nytt som kräver uppmärksamhet."},"nothing_planned_today_selecting_most_recent_item_ffd71bff":{"message":"Inget planerat i dag. Väljer det senaste objektet."},"nothing_planned_today_selecting_next_item_f6718aa":{"message":"Inget planerat i dag. Väljer nästa objekt."},"nothing_planned_yet_8675ffe9":{"message":"Inget planerat ännu"},"numpoints_points_8621a43b":{"message":"{ numPoints } poäng"},"only_most_recent_grading_period_shown_f1ad6458":{"message":"*Endast den senaste bedömningsperioden visas."},"opportunities_popup_f6703842":{"message":"popupfönster med möjligheter"},"option_selected_list_collapsed_e00180ff":{"message":"{ option } valda. Listan komprimerades."},"optional_add_course_ef0d70fc":{"message":"Valfritt: Lägg till kurs"},"page_50c4823d":{"message":"Sida"},"peer_review_74f26a13":{"message":"kamratresponsuppgift"},"peer_review_for_itemtitle_358cb413":{"message":"kamratresponsuppgift för { itemTitle }"},"points_bceb5005":{"message":"poäng"},"points_points_63e59cce":{"message":"{ points } poäng"},"previous_month_bb1e3c84":{"message":"Föregående månad"},"pts_699bd9aa":{"message":"poäng"},"quiz_e0dcce8f":{"message":"Quiz"},"reminder_date_4564d12d":{"message":"Påminnelse: { date }"},"replies_4a8577c8":{"message":"Svar"},"save_11a80ec3":{"message":"Spara"},"scroll_up_to_see_your_history_19b14cad":{"message":"Bläddra uppåt för att se din historik."},"scrolls_up_to_the_previous_item_with_new_activity_99717459":{"message":"Bläddrar uppåt till tidigare objekt med ny aktivitet."},"show_all_ae37d610":{"message":"Visa alla"},"show_my_grades_ebd08684":{"message":"Visa mina omdömen"},"startdate_to_enddate_d245175b":{"message":"{ startDate } till { endDate }"},"startdatetime_enddatetime_20abc10e":{"message":"{ startDateTime }/{ endDateTime }"},"startdatetime_endtime_49741bbe":{"message":"{ startDateTime }/{ endTime }"},"starttime_to_endtime_d7cc249d":{"message":"{ startTime } till { endTime }"},"submitted_318fad53":{"message":"Skickad"},"success_to_do_created_e34ed395":{"message":"Klart: Skapade att göra-objekt"},"task_16b0ef38":{"message":"Uppgift"},"the_date_and_time_this_to_do_is_due_74c823d4":{"message":"Datum och tid dessa att göra-uppgifter ska vara klara"},"there_are_no_points_associated_with_this_item_449c712a":{"message":"Inga poäng är kopplade till det här objektet"},"time_2b5aac58":{"message":"Tid"},"title_ee03d132":{"message":"Titel"},"title_is_required_6ddcab69":{"message":"titel krävs"},"to_do_1d554f36":{"message":"Att göra"},"to_do_date_4b211ad0":{"message":"Att göra: { date }"},"to_do_items_loading_d1cdfcd5":{"message":"Läser in att göra-objekt"},"today_76e10f9c":{"message":"I dag"},"today_at_date_8ac30d6":{"message":"I dag kl. { date }"},"tomorrow_9a6c9a00":{"message":"I morgon"},"tomorrow_at_date_b53f2cf1":{"message":"I morgon kl. { date }"},"unable_to_mark_as_complete_8141856d":{"message":"Det går inte att markera som färdig."},"use_arrow_keys_to_navigate_options_2021cc50":{"message":"Använd piltangenterna för att navigera bland alternativen."},"yesterday_at_date_1aa6d18e":{"message":"I går kl. { date }"},"yesterday_c6bd6abf":{"message":"I går"},"you_have_media_feedback_f5f9aba8":{"message":"Du har mediefeedback."},"you_must_provide_a_date_and_time_a86839d2":{"message":"Du måste ange ett datum och en tid."},"you_ve_scrolled_back_to_your_very_first_to_do_29374681":{"message":"Du har bläddrat tillbaka till din allra första att göra-uppgift!"}}')},NOPk:function(e,t,a){"use strict"
var s=a("ZoNA")
var n="AAAAAAACEEEEIIIIDNOOOOO.OUUUUY..aaaaaaaceeeeiiiidnooooo.ouuuuy.yAaAaAaCcCcCcCcDdDdEeEeEeEeEeGgGgGgGgHhHhIiIiIiIiIiIiJjKkkLlLlLlLlJlNnNnNnnNnOoOoOoOoRrRrRrSsSsSsSsTtTtTtUuUuUuUuUuUuWwYyYZzZzZz."
function i(e){var t=""
var a=e.length
var s=n.length
for(var i=0;i<a;++i){var r=e[i]
var o=r.charCodeAt(0)-192
if(o>=0&&o<s){var d=n[o]
"."!==d&&(r=d)}t+=r}return t}function r(e){return i(e).toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"").slice(0,50)}e.exports=function(e){return r(s(e))}
e.exports.underscore=r},PDbF:function(e,t,a){"use strict"
var s=a("rePB")
var n=a("1OyB")
var i=a("vuIU")
var r=a("md7G")
var o=a("foSv")
var d=a("Ji7U")
var l=a("q1tI")
var u=a.n(l)
var _=a("17x9")
var m=a.n(_)
var c=a("TSYQ")
var g=a.n(c)
var p=a("n12J")
var f=a("J2CL")
var h=a("nAyT")
var b=a("II2N")
var y=a("jtGx")
var v=a("dpqJ")
var E=a("oXx0")
var A=a("YeH6")
function C(e){var t=e.colors,a=e.spacing,s=e.typography
return{background:t.backgroundLightest,color:t.textDarkest,pipeColor:t.borderDark,fontFamily:s.fontFamily,fontWeight:s.fontWeightNormal,defaultListPadding:a.large,orderedNumberFontWeight:s.fontWeightBold,orderedNumberMargin:a.xSmall}}C.canvas=function(e){return{color:e["ic-brand-font-color-dark"]}}
a.d(t,"a",(function(){return O}))
var k,w,T,D,x,F
var S={componentId:"tTloz",template:function(e){return"\n\n.tTloz_bGBk{font-family:".concat(e.fontFamily||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";padding:0}\n\n.tTloz_ddES{-webkit-padding-end:0;-webkit-padding-start:").concat(e.defaultListPadding||"inherit",";padding-inline-end:0;padding-inline-start:").concat(e.defaultListPadding||"inherit","}\n\n[dir=ltr] .tTloz_ddES{padding-left:").concat(e.defaultListPadding||"inherit",";padding-right:0}\n\n[dir=rtl] .tTloz_ddES{padding-left:0;padding-right:").concat(e.defaultListPadding||"inherit","}\n\n.tTloz_ddES.tTloz_enMC{-webkit-padding-end:0;-webkit-padding-start:calc(").concat(e.defaultListPadding||"inherit","/2);counter-reset:ol-counter;list-style-type:none;padding-inline-end:0;padding-inline-start:calc(").concat(e.defaultListPadding||"inherit","/2)}\n\n[dir=ltr] .tTloz_ddES.tTloz_enMC{padding-left:calc(").concat(e.defaultListPadding||"inherit","/2);padding-right:0}\n\n[dir=rtl] .tTloz_ddES.tTloz_enMC{padding-left:0;padding-right:calc(").concat(e.defaultListPadding||"inherit","/2)}\n\n.tTloz_ddES.tTloz_enMC li:before{-webkit-margin-end:").concat(e.orderedNumberMargin||"inherit",';-webkit-margin-start:0;content:counters(ol-counter,".") ".";counter-increment:ol-counter;font-weight:').concat(e.orderedNumberFontWeight||"inherit",";margin-inline-end:").concat(e.orderedNumberMargin||"inherit",";margin-inline-start:0}\n\n[dir=ltr] .tTloz_ddES.tTloz_enMC li:before{margin-left:0;margin-right:").concat(e.orderedNumberMargin||"inherit","}\n\n[dir=rtl] .tTloz_ddES.tTloz_enMC li:before{margin-left:").concat(e.orderedNumberMargin||"inherit",";margin-right:0}\n\n.tTloz_eXrk,.tTloz_fLbg{-webkit-padding-start:0;list-style-type:none;padding-inline-start:0}\n\n[dir=ltr] .tTloz_eXrk,[dir=ltr] .tTloz_fLbg{padding-left:0}\n\n[dir=rtl] .tTloz_eXrk,[dir=rtl] .tTloz_fLbg{padding-right:0}")},root:"tTloz_bGBk",default:"tTloz_ddES",ordered:"tTloz_enMC",inline:"tTloz_eXrk",unstyled:"tTloz_fLbg"}
var O=(k=Object(h["a"])("7.0.0",null,"Use List from ui-list instead."),w=Object(E["a"])(),T=Object(f["themeable"])(C,S),k(D=w(D=T(D=(F=x=function(e){Object(d["a"])(t,e)
function t(){Object(n["a"])(this,t)
return Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"renderChildren",value:function(){var e=this
return l["Children"].map(this.props.children,(function(t){if(!t)return
return Object(b["a"])(t,{variant:e.props.variant,delimiter:e.props.delimiter,size:e.props.size,spacing:e.props.itemSpacing})}))}},{key:"render",value:function(){var e
var a=p["a"].omitViewProps(Object(y["a"])(this.props,t.propTypes),t)
var n=this.props,i=n.as,r=n.margin,o=n.variant,d=n.elementRef
var l=(e={},Object(s["a"])(e,S.root,true),Object(s["a"])(e,S[o],o),Object(s["a"])(e,S.unordered,"ul"===i),Object(s["a"])(e,S.ordered,"ol"===i),e)
return u.a.createElement(p["a"],Object.assign({},a,{className:g()(l),as:i,margin:r,elementRef:d}),this.renderChildren())}}])
t.displayName="List"
return t}(l["Component"]),x.propTypes={children:v["a"].oneOf([A["a"]]),as:m.a.oneOf(["ul","ol"]),margin:f["ThemeablePropTypes"].spacing,size:m.a.oneOf(["small","medium","large"]),variant:m.a.oneOf(["default","unstyled","inline"]),delimiter:m.a.oneOf(["none","pipe","slash","arrow","dashed","solid"]),itemSpacing:m.a.oneOf(["none","xxx-small","xx-small","x-small","small","medium","large","x-large","xx-large"]),elementRef:m.a.func},x.defaultProps={children:null,itemSpacing:void 0,elementRef:void 0,as:"ul",margin:"none",variant:"default",delimiter:"none",size:"medium"},x.Item=A["a"],F))||D)||D)||D)},Pwfc:function(e,t,a){var s=a("7NKU")
var n=a("I/Ap")
var i=a("Tsvt")
var r=a("Wklf")
e.exports=function(e,t,a){if(null==e)return""
a="string"!==typeof a?" ":a
function o(e,t,s){if(0===t||t===s.length-e.length)return""
return a}e=String(e).replace(i,"$1 $2").replace(r,"$1 $2").replace(n,o)
return s(e,t)}},QAOc:function(e){e.exports=JSON.parse('{"add_to_do_7537af64":{"message":"To-do-lijst toevoegen"},"add_to_do_7def3c37":{"message":"To-do lijst toevoegen"},"address_3159962f":{"message":"Adres:"},"all_day_fb42c4fc":{"message":"De hele dag"},"all_items_loaded_aa256183":{"message":"Alle items geladen"},"an_error_occurred_attempting_to_dismiss_the_opport_f86e0667":{"message":"Er is een fout opgetreden bij het afwijzen van de mogelijkheid."},"announcement_fb4cb645":{"message":"Aankondiging"},"are_you_sure_you_want_to_delete_this_planner_item_b71e330c":{"message":"Weet je zeker dat je dit planneritem wilt verwijderen?"},"assignment_976578a8":{"message":"Opdracht"},"assignmenttype_title_6612d008":{"message":"{ assignmentType } { title }."},"assignmenttype_title_all_day_on_datetime_9768903c":{"message":"{ assignmentType } { title }, de hele dag om { datetime }."},"assignmenttype_title_at_datetime_478f0709":{"message":"{ assignmentType } { title }, om { datetime }."},"assignmenttype_title_at_datetime_until_endtime_a5900e38":{"message":"{ assignmentType } { title }, om { datetime } tot { endTime }"},"assignmenttype_title_due_datetime_a112d8ff":{"message":"{ assignmentType } { title }, in te leveren op { datetime }."},"assignmenttype_title_has_a_to_do_time_at_datetime_e07310e8":{"message":"{ assignmentType } { title } heeft iets te doen om { datetime }."},"assignmenttype_title_is_marked_as_done_a8dc46ef":{"message":"{ assignmentType } { title } is gemarkeerd als gereed."},"assignmenttype_title_is_not_marked_as_done_ba80ba66":{"message":"{ assignmentType } { title } is niet gemarkeerd als gereed."},"assignmenttype_title_posted_datetime_cab69444":{"message":"{ assignmentType } { title } geplaatst { datetime }."},"assignmenttype_title_reminder_datetime_33fa66d5":{"message":"{ assignmentType } { title }, herinnering { datetime }."},"beginning_of_your_to_do_history_61ef2dce":{"message":"Begin van je To-do-historie"},"calendar_a8563bb2":{"message":"Kalender:"},"calendar_event_89aadc1c":{"message":"Gebeurtenis op kalender"},"canvas_planner_98ed106":{"message":"Canvas planner"},"close_d634289d":{"message":"Sluiten"},"close_opportunity_center_popup_9907d981":{"message":"Popup Opportunity Center sluiten"},"count_plural_0_opportunities_one_opportunity_other_765e27fa":{"message":"{ count, plural,\\n     =0 {# mogelijkheden}\\n    one {# mogelijkheid}\\n  other {# mogelijkheden}\\n}"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {Toon # voltooid item}\\n  other {Toon # voltooide items}\\n}"},"course_8a63b4a3":{"message":"Cursus"},"course_to_do_bcbbab54":{"message":"{ course } TO-DO"},"date_at_time_dbdb1b99":{"message":"{ date } om { time }"},"date_ee500367":{"message":"Datum"},"date_is_not_a_valid_date_4ef9f8ba":{"message":"#{ date } is geen geldige datum."},"date_is_required_8660ec22":{"message":"Datum is verplicht"},"date_time_d9fbf2d7":{"message":"Datum en tijd:"},"delete_a6efa79d":{"message":"Verwijderen"},"details_98a31b68":{"message":"Details"},"details_a6f427c3":{"message":"Details..."},"discussion_6719c51d":{"message":"Discussie"},"dismiss_itemtitle_a9fae1b3":{"message":"{ itemTitle } afwijzen"},"dismiss_opportunityname_5995176f":{"message":"{ opportunityName } afwijzen"},"dismissed_8b0b1fc9":{"message":"Verwijderd"},"dismissed_opportunities_f0826640":{"message":"Verwijderde mogelijkheden"},"due_5d7267be":{"message":"Inleverdatum:"},"due_date_124fdd99":{"message":"Inleverdatum: { date }"},"edit_c5fbea07":{"message":"Bewerken"},"edit_title_72e5a21e":{"message":"Bewerk { title }"},"error_loading_grades_e0b38f4d":{"message":"Fout bij laden van cijfers"},"error_loading_more_items_3f109d9f":{"message":"Fout bij het laden van meer items"},"error_loading_past_items_2881dbb1":{"message":"Fout bij het laden van eerdere items"},"excused_cf8792eb":{"message":"Vrijgesteld"},"failed_to_delete_to_do_64edff49":{"message":"Kan To Do-lijst niet sluiten"},"failed_to_get_new_activity_17e7ec7c":{"message":"Kan geen nieuwe activiteit ophalen"},"failed_to_load_opportunities_52ab6404":{"message":"Kan mogelijkheden niet laden"},"failed_to_save_to_do_ddc7503b":{"message":"Kan To Do-lijst niet opslaan"},"feedback_6dcc1991":{"message":"Feedback"},"go_to_card_view_dashboard_9d03970e":{"message":"Ga naar dashboard Kaartweergave"},"graded_25cd3fcd":{"message":"Beoordeeld"},"grades_are_loading_c899652d":{"message":"Cijfers worden geladen"},"grades_loaded_5056277c":{"message":"Cijfers geladen"},"items_completed_items_plural_1_item_other_items_717d579f":{"message":"{ items } voltooid(e) { items, plural,\\n     =1 {item}\\n  other {items}\\n}"},"late_2be42b88":{"message":"Te laat"},"list_collapsed_9ac35920":{"message":"Lijst samengevouwen."},"list_collapsed_dde87718":{"message":"Lijst samengevouwen"},"list_expanded_efec2d0":{"message":"Lijst uitgevouwen."},"load_more_a36f9cf9":{"message":"Meer laden"},"load_prior_dates_f2b0f6f0":{"message":"Eerdere datums laden"},"loaded_count_plural_0_items_one_item_other_items_e58533e9":{"message":"{ count, plural,\\n     =0 {# items}\\n    one {# item}\\n  other {# items}\\n} geladen"},"loading_25990131":{"message":"Bezig met laden..."},"loading_725811ca":{"message":"laden"},"loading_grades_c842c887":{"message":"Cijfers worden geladen"},"loading_past_items_ca499e75":{"message":"Eerdere items laden"},"loading_planner_items_947a813d":{"message":"Planner items laden"},"location_3b6ff307":{"message":"Locatie:"},"looks_like_there_isn_t_anything_here_d9bcef49":{"message":"Het lijkt erop dat er hier niets is"},"missing_1a256b3b":{"message":"Ontbrekend"},"missing_items_for_title_516511f8":{"message":"Ontbrekende items voor { title }"},"my_grades_98834476":{"message":"Mijn cijfers"},"new_13daf639":{"message":"Nieuw"},"new_activity_8b84847d":{"message":"Nieuwe activiteit"},"new_activity_for_title_14c9c3af":{"message":"Nieuwe activiteit voor { title }"},"new_opportunities_7d349c4d":{"message":"Nieuwe mogelijkheden"},"next_month_749b1778":{"message":"Volgende maand"},"no_due_dates_assigned_e8f5bac8":{"message":"Geen inleverdatums toegewezen"},"no_grade_3b4d7f3e":{"message":"Geen cijfer"},"nothing_for_now_e3e3ce2a":{"message":"Momenteel niets"},"nothing_here_needs_attention_c4eaded6":{"message":"Er is niets hier waarnaar gekeken moet worden."},"nothing_more_to_do_b665da42":{"message":"Niets meer te doen"},"nothing_new_needs_attention_3ac548d4":{"message":"Er is niets nieuws waarnaar gekeken moet worden."},"nothing_planned_today_selecting_most_recent_item_ffd71bff":{"message":"Niks gepland voor vandaag. Meest recente item wordt geselecteerd."},"nothing_planned_today_selecting_next_item_f6718aa":{"message":"Niks gepland voor vandaag. Volgend item wordt geselecteerd."},"nothing_planned_yet_8675ffe9":{"message":"Nog niets gepland"},"numpoints_points_8621a43b":{"message":"{ numPoints } punten"},"only_most_recent_grading_period_shown_f1ad6458":{"message":"*Alleen meest recente beoordelingsperiode wordt weergegeven."},"opportunities_popup_f6703842":{"message":"mogelijkheden popup"},"option_selected_list_collapsed_e00180ff":{"message":"{ option } geselecteerd. Lijst samengevouwen."},"optional_add_course_ef0d70fc":{"message":"Optioneel: Cursus toevoegen"},"page_50c4823d":{"message":"Pagina"},"peer_review_74f26a13":{"message":"Peerbeoordeling"},"peer_review_for_itemtitle_358cb413":{"message":"Peerbeoordeling voor { itemTitle }"},"points_bceb5005":{"message":"punten"},"points_points_63e59cce":{"message":"{ points } punten"},"previous_month_bb1e3c84":{"message":"Vorige maand"},"pts_699bd9aa":{"message":"ptn"},"quiz_e0dcce8f":{"message":"Toets"},"reminder_date_4564d12d":{"message":"Herinnering: { date }"},"replies_4a8577c8":{"message":"Antwoorden"},"save_11a80ec3":{"message":"Opslaan"},"scroll_up_to_see_your_history_19b14cad":{"message":"Scroll omhoog om je geschiedenis weer te geven!"},"scrolls_up_to_the_previous_item_with_new_activity_99717459":{"message":"Scrollt omhoog naar het vorige item met nieuwe activiteit."},"show_all_ae37d610":{"message":"Alles tonen"},"show_my_grades_ebd08684":{"message":"Mijn cijfers tonen"},"startdate_to_enddate_d245175b":{"message":"{ startDate } tot { endDate }"},"startdatetime_enddatetime_20abc10e":{"message":"{ startDateTime } - { endDateTime }"},"startdatetime_endtime_49741bbe":{"message":"{ startDateTime } - { endTime }"},"starttime_to_endtime_d7cc249d":{"message":"{ startTime } tot { endTime }"},"submitted_318fad53":{"message":"Ingediend"},"success_to_do_created_e34ed395":{"message":"Gelukt: To Do gemaakt"},"task_16b0ef38":{"message":"Taak"},"the_date_and_time_this_to_do_is_due_74c823d4":{"message":"De datum en tijd om dat te doen is verlopen"},"there_are_no_points_associated_with_this_item_449c712a":{"message":"Er zijn geen punten gekoppeld aan dit item."},"time_2b5aac58":{"message":"Tijd"},"title_ee03d132":{"message":"Titel"},"title_is_required_6ddcab69":{"message":"titel is verplicht"},"to_do_1d554f36":{"message":"Opdrachtenlijst"},"to_do_date_4b211ad0":{"message":"To-do: { date }"},"to_do_items_loading_d1cdfcd5":{"message":"To-do-items laden"},"today_76e10f9c":{"message":"Vandaag"},"today_at_date_8ac30d6":{"message":"Vandaag om { date }"},"tomorrow_9a6c9a00":{"message":"Morgen"},"tomorrow_at_date_b53f2cf1":{"message":"Morgen om { date }"},"unable_to_mark_as_complete_8141856d":{"message":"Kan dit niet als voltooid markeren."},"use_arrow_keys_to_navigate_options_2021cc50":{"message":"Gebruik de pijltoetsen om door opties te navigeren."},"yesterday_at_date_1aa6d18e":{"message":"Gisteren om { date }"},"yesterday_c6bd6abf":{"message":"Gisteren"},"you_have_media_feedback_f5f9aba8":{"message":"Er is feedback via media."},"you_must_provide_a_date_and_time_a86839d2":{"message":"Je moet een datum en tijd opgeven."},"you_ve_scrolled_back_to_your_very_first_to_do_29374681":{"message":"Je bent teruggescrold naar je allereerste To-do-item!"}}')},Qy3X:function(e){e.exports=JSON.parse('{"add_to_do_7537af64":{"message":"הוספת פריט לביצוע"},"add_to_do_7def3c37":{"message":"הוספת מטלה לביצוע"},"address_3159962f":{"message":"כתובת:"},"all_day_fb42c4fc":{"message":"כל היום"},"all_items_loaded_aa256183":{"message":"כל הפריטים נטענו"},"an_error_occurred_attempting_to_dismiss_the_opport_f86e0667":{"message":"אירעה שגיאה בעת נסיון לוותר על ההזדמנות"},"announcement_fb4cb645":{"message":"הכרזה"},"are_you_sure_you_want_to_delete_this_planner_item_b71e330c":{"message":"האם אתם בטוחים שברצונכם למחוק את פריט המתכנן הזה?"},"assignment_976578a8":{"message":"משימה"},"assignmenttype_title_6612d008":{"message":"{ assignmentType } { title }."},"assignmenttype_title_all_day_on_datetime_9768903c":{"message":"{ assignmentType } { title }, כל היום ב { datetime }."},"assignmenttype_title_at_datetime_478f0709":{"message":"{ assignmentType } { title }, ב  { datetime }."},"assignmenttype_title_at_datetime_until_endtime_a5900e38":{"message":"{ assignmentType } { title }, ב { datetime } עד { endTime }"},"assignmenttype_title_due_datetime_a112d8ff":{"message":"{ assignmentType } { title }, תאריך יעד { datetime }."},"assignmenttype_title_is_marked_as_done_a8dc46ef":{"message":"{ assignmentType } { title } מסומן כבוצע."},"assignmenttype_title_is_not_marked_as_done_ba80ba66":{"message":"{ assignmentType } { title } אינו מסומן כבוצע."},"assignmenttype_title_posted_datetime_cab69444":{"message":"{ assignmentType } { title } פורסם { datetime }."},"assignmenttype_title_reminder_datetime_33fa66d5":{"message":"{ assignmentType } { title }, מזכורת { datetime }."},"beginning_of_your_to_do_history_61ef2dce":{"message":"התחלת ההיסטוריה של המטלות לביצוע שלך"},"calendar_a8563bb2":{"message":"יומן:"},"calendar_event_89aadc1c":{"message":"אירוע יומן"},"canvas_planner_98ed106":{"message":"מתכנן קנבס"},"close_d634289d":{"message":"סגירה"},"close_opportunity_center_popup_9907d981":{"message":"חלון קופץ של סגירת מרכז ההזדמנויות"},"count_plural_0_opportunities_one_opportunity_other_765e27fa":{"message":"{ count, plural,\\n     =0 {# הזדמנויות}\\n    one {הזדמנות #}\\n  other {# הזדמנויות}\\n}"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {}\\n    two {}\\n   many {}\\n  other {}\\n}"},"course_8a63b4a3":{"message":"קורס"},"course_to_do_bcbbab54":{"message":"{ course } לביצוע"},"date_at_time_dbdb1b99":{"message":"בתאריך { date } בשעה { time }"},"date_ee500367":{"message":"תאריך"},"date_is_not_a_valid_date_4ef9f8ba":{"message":"#{ date } אינו תאריך תקין."},"date_is_required_8660ec22":{"message":"נדרש תאריך"},"date_time_d9fbf2d7":{"message":"תאריך וזמן:"},"delete_a6efa79d":{"message":"ביטול"},"details_98a31b68":{"message":"פרטים"},"details_a6f427c3":{"message":"פרטים:"},"discussion_6719c51d":{"message":"דיון"},"dismiss_itemtitle_a9fae1b3":{"message":"שיחרור { itemTitle }"},"dismiss_opportunityname_5995176f":{"message":"ויתור על { opportunityName }"},"dismissed_8b0b1fc9":{"message":"שיחרור"},"dismissed_opportunities_f0826640":{"message":"הזדמנויות שלא נוצלו"},"due_5d7267be":{"message":"תאריך יעד:"},"due_date_124fdd99":{"message":"תאריך יעד: { date }"},"edit_c5fbea07":{"message":"עריכה"},"edit_title_72e5a21e":{"message":"עריכת { title }"},"error_loading_grades_e0b38f4d":{"message":"שגיאת טעינת ציונים"},"error_loading_more_items_3f109d9f":{"message":"שגיאה בטעינת פריטים נוספים"},"error_loading_past_items_2881dbb1":{"message":"שגיאה בטעינת פריטים קודמים"},"excused_cf8792eb":{"message":"נסלח"},"failed_to_delete_to_do_64edff49":{"message":"ביטול המטלה לביצוע נכשל"},"failed_to_get_new_activity_17e7ec7c":{"message":"כשלון בקבלת פעילות חדשה"},"failed_to_load_opportunities_52ab6404":{"message":"טעינת הזדמנויות נכשלה"},"failed_to_save_to_do_ddc7503b":{"message":"שמירת המטלה לביצוע נכשלה"},"feedback_6dcc1991":{"message":"משוב"},"go_to_card_view_dashboard_9d03970e":{"message":"מעבר לחלון הצגת הגיליון"},"graded_25cd3fcd":{"message":"ניתן ציון"},"grades_are_loading_c899652d":{"message":"הציונים בתהליך טעינה"},"grades_loaded_5056277c":{"message":"הציונים נטענו"},"items_completed_items_plural_1_item_other_items_717d579f":{"message":"{ items } completed { items, plural,\\n     =1 {item}\\n  other {items}\\n}"},"late_2be42b88":{"message":"איחור"},"load_more_a36f9cf9":{"message":"טענו עוד"},"load_prior_dates_f2b0f6f0":{"message":"טעינת מועדים קודמים"},"loaded_count_plural_0_items_one_item_other_items_e58533e9":{"message":"נטענו { count, plural,\\n     =0 {# פריטים}\\n    one {פריט #}\\n  other {# פריטים}\\n}"},"loading_25990131":{"message":"בטעינה... "},"loading_725811ca":{"message":"טוען"},"loading_grades_c842c887":{"message":"טוען ציונים"},"loading_past_items_ca499e75":{"message":"בטעינת פריטים קודמים"},"loading_planner_items_947a813d":{"message":"טעינת פריטי המתכנן"},"location_3b6ff307":{"message":"מיקום:"},"looks_like_there_isn_t_anything_here_d9bcef49":{"message":"נראה שאין פה כלום"},"missing_1a256b3b":{"message":"חסר"},"missing_items_for_title_516511f8":{"message":"חסרים פריטים ל { title }"},"my_grades_98834476":{"message":"הציונים שלי"},"new_13daf639":{"message":"חדש"},"new_activity_8b84847d":{"message":"פעילות חדשה"},"new_activity_for_title_14c9c3af":{"message":" פעילות חדשה ל { title }"},"new_opportunities_7d349c4d":{"message":"הזדמנויות חדשות"},"next_month_749b1778":{"message":"החודש הבא"},"no_due_dates_assigned_e8f5bac8":{"message":"לא הוגדרו תאריכי יעד"},"no_grade_3b4d7f3e":{"message":"ללא ציון"},"nothing_for_now_e3e3ce2a":{"message":"אין כלום לעכשיו"},"nothing_here_needs_attention_c4eaded6":{"message":"אין צורך לבצע דבר"},"nothing_more_to_do_b665da42":{"message":"אין משימות נוספות"},"nothing_new_needs_attention_3ac548d4":{"message":"אין כל דבר חדש לציין"},"nothing_planned_today_selecting_most_recent_item_ffd71bff":{"message":"לא תוכנן היום כלום. בוחר את הפריט האחרון."},"nothing_planned_today_selecting_next_item_f6718aa":{"message":"לא תוכנן היום כלום. בוחר את הפריט הבא"},"nothing_planned_yet_8675ffe9":{"message":"לא תוכנן עדיין כלום"},"numpoints_points_8621a43b":{"message":"{ numPoints } נקודות"},"only_most_recent_grading_period_shown_f1ad6458":{"message":"*רק תקופת הציונים האחרונה מוצגת."},"optional_add_course_ef0d70fc":{"message":"אופציונלי: הוספת קורס"},"page_50c4823d":{"message":"דף"},"peer_review_74f26a13":{"message":"ביקורת עמיתים"},"peer_review_for_itemtitle_358cb413":{"message":"סקירת עמיתים של { itemTitle }"},"points_bceb5005":{"message":"נקודות"},"points_points_63e59cce":{"message":"{ points } נקודות"},"previous_month_bb1e3c84":{"message":"החודש הקודם"},"pts_699bd9aa":{"message":"נקודות"},"quiz_e0dcce8f":{"message":"בוחן"},"reminder_date_4564d12d":{"message":"תזכורת: { date }"},"replies_4a8577c8":{"message":"תשובות"},"save_11a80ec3":{"message":"שמירה "},"scroll_up_to_see_your_history_19b14cad":{"message":"דפדוף מעלה כדי לעיין בהסטוריה שלך!"},"scrolls_up_to_the_previous_item_with_new_activity_99717459":{"message":"דפדוף מעלה לפריט הקודם עם פעילות חדשה."},"show_all_ae37d610":{"message":"הצגה של הכל"},"show_my_grades_ebd08684":{"message":"הצגה של ציוני"},"startdate_to_enddate_d245175b":{"message":"{ startDate } ל { endDate }"},"startdatetime_enddatetime_20abc10e":{"message":"{ startDateTime } - { endDateTime }"},"startdatetime_endtime_49741bbe":{"message":"{ startDateTime } - { endTime }"},"starttime_to_endtime_d7cc249d":{"message":"{ startTime } ל { endTime }"},"submitted_318fad53":{"message":"הוגשה"},"success_to_do_created_e34ed395":{"message":"הצלחה: פריט משימה נוצר"},"task_16b0ef38":{"message":"מטלה"},"the_date_and_time_this_to_do_is_due_74c823d4":{"message":"התאריך והשעה של פריט משימה זו הגיע"},"there_are_no_points_associated_with_this_item_449c712a":{"message":"אין נקודות המשויכות לפריט זה"},"time_2b5aac58":{"message":"זמן "},"title_ee03d132":{"message":"כותרת"},"title_is_required_6ddcab69":{"message":"דרושה כותרת"},"to_do_1d554f36":{"message":"מטלות לביצוע"},"to_do_date_4b211ad0":{"message":"לביצוע: { date }"},"to_do_items_loading_d1cdfcd5":{"message":"משימות לביצוע נטענות"},"today_76e10f9c":{"message":"היום"},"today_at_date_8ac30d6":{"message":"היום, בתאריך { date }"},"tomorrow_9a6c9a00":{"message":"מחר"},"tomorrow_at_date_b53f2cf1":{"message":"מחר, בתאריך { date }"},"unable_to_mark_as_complete_8141856d":{"message":"אין אפשרות לסמן כהושלם"},"yesterday_at_date_1aa6d18e":{"message":"אתמול, בתאריך { date }"},"yesterday_c6bd6abf":{"message":"אתמול"},"you_have_media_feedback_f5f9aba8":{"message":"יש לך משוב באמצעות מדיה"},"you_must_provide_a_date_and_time_a86839d2":{"message":"עליך לספק תאריך ושעה"},"you_ve_scrolled_back_to_your_very_first_to_do_29374681":{"message":"גללת אחורה למטלה לביצוע הראשונה שלך!"}}')},RIKZ:function(e){e.exports=JSON.parse('{"add_to_do_7537af64":{"message":"Agregar tareas por hacer"},"add_to_do_7def3c37":{"message":"Agregar tarea por hacer"},"address_3159962f":{"message":"Dirección:"},"all_day_fb42c4fc":{"message":"Todo el día"},"all_items_loaded_aa256183":{"message":"Todos los ítems cargados"},"an_error_occurred_attempting_to_dismiss_the_opport_f86e0667":{"message":"Ocurrió un error al intentar descartar la oportunidad."},"announcement_fb4cb645":{"message":"Anuncio"},"are_you_sure_you_want_to_delete_this_planner_item_b71e330c":{"message":"¿Está seguro de que desea eliminar este ítem del planificador?"},"assignment_976578a8":{"message":"Tarea"},"assignmenttype_title_6612d008":{"message":"{ assignmentType } { title }."},"assignmenttype_title_all_day_on_datetime_9768903c":{"message":"{ assignmentType } { title }, todo el día el { datetime }."},"assignmenttype_title_at_datetime_478f0709":{"message":"{ assignmentType } { title }, a las { datetime }."},"assignmenttype_title_at_datetime_until_endtime_a5900e38":{"message":"{ assignmentType } { title }, a las { datetime } hasta las { endTime }"},"assignmenttype_title_due_datetime_a112d8ff":{"message":"{ assignmentType } { title }, fecha límite { datetime }."},"assignmenttype_title_has_a_to_do_time_at_datetime_e07310e8":{"message":"{ assignmentType } { title } tiene un tiempo para tareas por hacer a las { datetime }."},"assignmenttype_title_is_marked_as_done_a8dc46ef":{"message":"{ assignmentType } { title } marcado como realizado."},"assignmenttype_title_is_not_marked_as_done_ba80ba66":{"message":"{ assignmentType } { title } marcado como no realizado."},"assignmenttype_title_posted_datetime_cab69444":{"message":"{ assignmentType } { title } publicado { datetime }."},"assignmenttype_title_reminder_datetime_33fa66d5":{"message":"{ assignmentType } { title }, recordatorio { datetime }."},"beginning_of_your_to_do_history_61ef2dce":{"message":"Inicio de su Historial de cosas por hacer"},"calendar_a8563bb2":{"message":"Calendario:"},"calendar_event_89aadc1c":{"message":"Evento del calendario"},"canvas_planner_98ed106":{"message":"Planificador de Canvas"},"close_d634289d":{"message":"Cerrar"},"close_opportunity_center_popup_9907d981":{"message":"Cerrar ventana emergente del Centro de oportunidades"},"count_plural_0_opportunities_one_opportunity_other_765e27fa":{"message":"{ count, plural,\\n     =0 {# oportunidades}\\n    one {# oportunidad}\\n  other {# oportunidades}\\n}"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {Mostrar # ítem completado}\\n  other {Mostrar # ítems completados}\\n}"},"course_8a63b4a3":{"message":"Curso"},"course_to_do_bcbbab54":{"message":"{ course } POR HACER"},"date_at_time_dbdb1b99":{"message":"{ date } a las { time }"},"date_ee500367":{"message":"Fecha"},"date_is_not_a_valid_date_4ef9f8ba":{"message":"#{ date } no es una fecha válida."},"date_is_required_8660ec22":{"message":"Se requiere la fecha"},"date_time_d9fbf2d7":{"message":"Fecha y hora:"},"delete_a6efa79d":{"message":"Eliminar"},"details_98a31b68":{"message":"Detalles"},"details_a6f427c3":{"message":"Detalles:"},"discussion_6719c51d":{"message":"Foro de discusión"},"dismiss_itemtitle_a9fae1b3":{"message":"Descartar { itemTitle }"},"dismiss_opportunityname_5995176f":{"message":"Descartar { opportunityName }"},"dismissed_8b0b1fc9":{"message":"Descartado"},"dismissed_opportunities_f0826640":{"message":"Oportunidades descartadas"},"due_5d7267be":{"message":"Fecha límite:"},"due_date_124fdd99":{"message":"Fecha límite: { date }"},"edit_c5fbea07":{"message":"Editar"},"edit_title_72e5a21e":{"message":"Editar { title }"},"error_loading_grades_e0b38f4d":{"message":"Error al cargar las calificaciones"},"error_loading_more_items_3f109d9f":{"message":"Error al cargar más ítems"},"error_loading_past_items_2881dbb1":{"message":"Error al cargar ítems anteriores"},"excused_cf8792eb":{"message":"Justificado"},"failed_to_delete_to_do_64edff49":{"message":"Error al eliminar tareas por hacer"},"failed_to_get_new_activity_17e7ec7c":{"message":"Error al obtener nueva actividad"},"failed_to_load_opportunities_52ab6404":{"message":"Error al cargar oportunidades"},"failed_to_save_to_do_ddc7503b":{"message":"Error al guardar tareas por hacer"},"feedback_6dcc1991":{"message":"Retroalimentación"},"go_to_card_view_dashboard_9d03970e":{"message":"Vaya a la vista de tarjetas en el tablero"},"graded_25cd3fcd":{"message":"Calificado"},"grades_are_loading_c899652d":{"message":"Se están cargando las calificaciones"},"grades_loaded_5056277c":{"message":"Calificaciones cargadas"},"items_completed_items_plural_1_item_other_items_717d579f":{"message":"{ items } { items, plural,\\n     =1 {ítem}\\n  other {ítems}\\n} completado(s)"},"late_2be42b88":{"message":"Atrasado"},"list_collapsed_9ac35920":{"message":"Lista colapsada."},"list_collapsed_dde87718":{"message":"Lista colapsada"},"list_expanded_efec2d0":{"message":"Lista expandida."},"load_more_a36f9cf9":{"message":"Cargar más"},"load_prior_dates_f2b0f6f0":{"message":"Cargar fechas anteriores"},"loaded_count_plural_0_items_one_item_other_items_e58533e9":{"message":"{ count, plural,\\n     =0 {# ítems}\\n    one {# ítem}\\n  other {# ítems}\\n} cargado(s)"},"loading_25990131":{"message":"Cargando..."},"loading_725811ca":{"message":"cargando"},"loading_grades_c842c887":{"message":"Cargando calificaciones"},"loading_past_items_ca499e75":{"message":"Cargando ítems anteriores"},"loading_planner_items_947a813d":{"message":"Cargando ítems del planificador"},"location_3b6ff307":{"message":"Ubicación:"},"looks_like_there_isn_t_anything_here_d9bcef49":{"message":"Parece que no hay nada aquí"},"missing_1a256b3b":{"message":"Faltante"},"missing_items_for_title_516511f8":{"message":"Ítems faltantes para { title }"},"my_grades_98834476":{"message":"Mis calificaciones"},"new_13daf639":{"message":"Nuevo"},"new_activity_8b84847d":{"message":"Nueva actividad"},"new_activity_for_title_14c9c3af":{"message":"Nueva actividad para { title }"},"new_opportunities_7d349c4d":{"message":"Nuevas oportunidades"},"next_month_749b1778":{"message":"Próximo mes"},"no_due_dates_assigned_e8f5bac8":{"message":"No hay fechas de entrega asignadas"},"no_grade_3b4d7f3e":{"message":"Sin calificación"},"nothing_for_now_e3e3ce2a":{"message":"Nada por ahora"},"nothing_here_needs_attention_c4eaded6":{"message":"No hay nada aquí que requiera atención."},"nothing_more_to_do_b665da42":{"message":"Nada más por hacer"},"nothing_new_needs_attention_3ac548d4":{"message":"No hay nada nuevo que requiera atención."},"nothing_planned_today_selecting_most_recent_item_ffd71bff":{"message":"Nada planificado para hoy. Seleccionar el ítem más reciente."},"nothing_planned_today_selecting_next_item_f6718aa":{"message":"Nada planificado para hoy. Seleccionar el ítem siguiente."},"nothing_planned_yet_8675ffe9":{"message":"Nada planificado aún"},"numpoints_points_8621a43b":{"message":"{ numPoints } puntos"},"only_most_recent_grading_period_shown_f1ad6458":{"message":"*Solo se muestra el período de calificación más reciente."},"opportunities_popup_f6703842":{"message":"Ventana emergente de oportunidades"},"option_selected_list_collapsed_e00180ff":{"message":"{ option } seleccionado. Lista colapsada."},"optional_add_course_ef0d70fc":{"message":"Opcional: Agregar curso"},"page_50c4823d":{"message":"Página"},"peer_review_74f26a13":{"message":"Revisión entre pares"},"peer_review_for_itemtitle_358cb413":{"message":"Revisión entre pares para { itemTitle }"},"points_bceb5005":{"message":"puntos"},"points_points_63e59cce":{"message":"{ points } puntos"},"previous_month_bb1e3c84":{"message":"Mes anterior"},"pts_699bd9aa":{"message":"ptos."},"quiz_e0dcce8f":{"message":"Evaluación"},"reminder_date_4564d12d":{"message":"Recordatorio: { date }"},"replies_4a8577c8":{"message":"Respuestas"},"save_11a80ec3":{"message":"Guardar"},"scroll_up_to_see_your_history_19b14cad":{"message":"¡Desplácese para ver su historial!"},"scrolls_up_to_the_previous_item_with_new_activity_99717459":{"message":"Se desplaza hasta el ítem anterior con nueva actividad."},"show_all_ae37d610":{"message":"Mostrar todos"},"show_my_grades_ebd08684":{"message":"Mostrar mis calificaciones"},"startdate_to_enddate_d245175b":{"message":"{ startDate } a { endDate }"},"startdatetime_enddatetime_20abc10e":{"message":"{ startDateTime } - { endDateTime }"},"startdatetime_endtime_49741bbe":{"message":"{ startDateTime } - { endTime }"},"starttime_to_endtime_d7cc249d":{"message":"{ startTime } a { endTime }"},"submitted_318fad53":{"message":"Entregado"},"success_to_do_created_e34ed395":{"message":"Éxito: Tarea por hacer creada"},"task_16b0ef38":{"message":"Tarea"},"the_date_and_time_this_to_do_is_due_74c823d4":{"message":"Se vence la fecha y la hora de entrega para hacer esto"},"there_are_no_points_associated_with_this_item_449c712a":{"message":"No hay puntos asociados con este ítem"},"time_2b5aac58":{"message":"Hora"},"title_ee03d132":{"message":"Título"},"title_is_required_6ddcab69":{"message":"se requiere un título"},"to_do_1d554f36":{"message":"Por hacer"},"to_do_date_4b211ad0":{"message":"Por hacer: { date }"},"to_do_items_loading_d1cdfcd5":{"message":"Cargando los ítems por hacer"},"today_76e10f9c":{"message":"Hoy"},"today_at_date_8ac30d6":{"message":"Hoy a las { date }"},"tomorrow_9a6c9a00":{"message":"Mañana"},"tomorrow_at_date_b53f2cf1":{"message":"Mañana a las { date }"},"unable_to_mark_as_complete_8141856d":{"message":"No se puede marcar como completada."},"use_arrow_keys_to_navigate_options_2021cc50":{"message":"Use las teclas de flecha para navegar entre las opciones."},"yesterday_at_date_1aa6d18e":{"message":"Ayer a las { date }"},"yesterday_c6bd6abf":{"message":"Ayer"},"you_have_media_feedback_f5f9aba8":{"message":"Tiene una valoración de multimedia."},"you_must_provide_a_date_and_time_a86839d2":{"message":"Debe brindar una fecha y una hora."},"you_ve_scrolled_back_to_your_very_first_to_do_29374681":{"message":"¡Ha retrocedido a su primera tarea por hacer!"}}')},Tsvt:function(e,t){e.exports=/([a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19])([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A])/g},U6jy:function(e,t){e.exports=s
var a=Object.prototype.hasOwnProperty
function s(){var e={}
for(var t=0;t<arguments.length;t++){var s=arguments[t]
for(var n in s)a.call(s,n)&&(e[n]=s[n])}return e}},UmkF:function(e,t,a){var s=a("jDM7")
var n=a("7NKU")
e.exports=function(e,t){if(null==e)return""
var a=""
for(var i=0;i<e.length;i++){var r=e[i]
var o=s(r,t)
a+=o===r?n(r,t):o}return a}},W9UN:function(e){e.exports=JSON.parse('{"add_to_do_7537af64":{"message":"Додайте до плану роботи"},"add_to_do_7def3c37":{"message":"Додайте до плану роботи"},"address_3159962f":{"message":"Адреса:"},"all_day_fb42c4fc":{"message":"Весь день"},"all_items_loaded_aa256183":{"message":"Всі елементи завантажені"},"an_error_occurred_attempting_to_dismiss_the_opport_f86e0667":{"message":"Виникла помилка при спробі відхилити цю можливість."},"announcement_fb4cb645":{"message":"Оголошення"},"are_you_sure_you_want_to_delete_this_planner_item_b71e330c":{"message":"Ви впевнені, що хочете видалити цей елемент планувальника?"},"assignment_976578a8":{"message":"Завдання"},"assignmenttype_title_6612d008":{"message":"{ assignmentType } { title }."},"assignmenttype_title_all_day_on_datetime_9768903c":{"message":"{ assignmentType } { title }, всі дні о { datetime }."},"assignmenttype_title_at_datetime_478f0709":{"message":"{ assignmentType } { title }, в { datetime }."},"assignmenttype_title_at_datetime_until_endtime_a5900e38":{"message":"{ assignmentType } { title }, в { datetime } до { endTime }"},"assignmenttype_title_due_datetime_a112d8ff":{"message":"{ assignmentType } { title }, до { datetime }."},"assignmenttype_title_has_a_to_do_time_at_datetime_e07310e8":{"message":"{ assignmentType } { title } має бути виконано { datetime }."},"assignmenttype_title_is_marked_as_done_a8dc46ef":{"message":"{ assignmentType } { title } помічено як завершене."},"assignmenttype_title_is_not_marked_as_done_ba80ba66":{"message":"{ assignmentType } { title } не помічено як завершене."},"assignmenttype_title_posted_datetime_cab69444":{"message":"{ assignmentType } { title } розміщено { datetime }."},"assignmenttype_title_reminder_datetime_33fa66d5":{"message":"{ assignmentType } { title }, нагадування { datetime }."},"beginning_of_your_to_do_history_61ef2dce":{"message":"Початок вашої історії завдань"},"calendar_a8563bb2":{"message":"Календар:"},"calendar_event_89aadc1c":{"message":"Календарна подія"},"canvas_planner_98ed106":{"message":"Планувальник Canvas"},"close_d634289d":{"message":"Закрити"},"close_opportunity_center_popup_9907d981":{"message":"Закрити спливаюче вікно Центру можливостей"},"count_plural_0_opportunities_one_opportunity_other_765e27fa":{"message":"{ count, plural,\\n     =0 {# opportunities}\\n    one {# opportunity}\\n  other {# opportunities}\\n}"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {}\\n    few {}\\n   many {}\\n  other {}\\n}"},"course_8a63b4a3":{"message":"Курс"},"course_to_do_bcbbab54":{"message":"Зробити { course }"},"date_at_time_dbdb1b99":{"message":"{ date } в { time }"},"date_ee500367":{"message":"Дата"},"date_is_not_a_valid_date_4ef9f8ba":{"message":"#{ date } не є допустимою датою."},"date_is_required_8660ec22":{"message":"Потрібно вказати дату"},"date_time_d9fbf2d7":{"message":"Дата та час:"},"delete_a6efa79d":{"message":"Видалити"},"details_98a31b68":{"message":"Подробиці"},"details_a6f427c3":{"message":"Подробиці:"},"discussion_6719c51d":{"message":"Обговорення"},"dismiss_itemtitle_a9fae1b3":{"message":"Відхилити { itemTitle }"},"dismiss_opportunityname_5995176f":{"message":"Відхилити { opportunityName }"},"dismissed_8b0b1fc9":{"message":"Відхилено"},"dismissed_opportunities_f0826640":{"message":"Відхилені можливості"},"due_5d7267be":{"message":"Очікується:"},"due_date_124fdd99":{"message":"До: { date }"},"edit_c5fbea07":{"message":"Редагувати"},"edit_title_72e5a21e":{"message":"Редагувати { title }"},"error_loading_grades_e0b38f4d":{"message":"Помилка завантаження оцінок"},"error_loading_more_items_3f109d9f":{"message":"Помилка завантаження інших елементів"},"error_loading_past_items_2881dbb1":{"message":"Помилка завантаження попередніх елементів"},"excused_cf8792eb":{"message":"Виправдано"},"failed_to_delete_to_do_64edff49":{"message":"Не вдалося видалити завдання"},"failed_to_get_new_activity_17e7ec7c":{"message":"Не вдалося отримати нову активність"},"failed_to_load_opportunities_52ab6404":{"message":"Не вдалося завантажити можливості"},"failed_to_save_to_do_ddc7503b":{"message":"Не вдалося зберегти завдання"},"feedback_6dcc1991":{"message":"Зворотній зв\'\'язок"},"go_to_card_view_dashboard_9d03970e":{"message":"Перейти на Панель інструментів Card View"},"graded_25cd3fcd":{"message":"Оцінено"},"grades_are_loading_c899652d":{"message":"Оцінки завантажені"},"grades_loaded_5056277c":{"message":"Оцінки завантажені"},"items_completed_items_plural_1_item_other_items_717d579f":{"message":"{ items } completed { items, plural,\\n     =1 {item}\\n  other {items}\\n}"},"late_2be42b88":{"message":"Пізніше"},"load_more_a36f9cf9":{"message":"Завантажити більше"},"load_prior_dates_f2b0f6f0":{"message":"Завантажте попередні дати"},"loaded_count_plural_0_items_one_item_other_items_e58533e9":{"message":"Завантажено { count, plural,\\n     =0 {# items}\\n    one {# item}\\n  other {# items}\\n}"},"loading_25990131":{"message":"Завантаження..."},"loading_725811ca":{"message":"завантаження"},"loading_grades_c842c887":{"message":"Завантаження оцінок"},"loading_past_items_ca499e75":{"message":"Завантаження попередніх елементів"},"loading_planner_items_947a813d":{"message":"Завантаження елементів планувальника"},"location_3b6ff307":{"message":"Місцезнаходження:"},"looks_like_there_isn_t_anything_here_d9bcef49":{"message":"Виглядає наче тут нічого немає"},"missing_1a256b3b":{"message":"Відсутній"},"missing_items_for_title_516511f8":{"message":"Відсутні елементи для { title }"},"my_grades_98834476":{"message":"Мої оцінки"},"new_13daf639":{"message":"Новий"},"new_activity_8b84847d":{"message":"Нова діяльність"},"new_activity_for_title_14c9c3af":{"message":"Нова діяльність для { title }"},"new_opportunities_7d349c4d":{"message":"Нові можливості"},"next_month_749b1778":{"message":"Наступний місяць"},"no_due_dates_assigned_e8f5bac8":{"message":"Термін виконання не призначено"},"no_grade_3b4d7f3e":{"message":"Оцінка відсутня"},"nothing_for_now_e3e3ce2a":{"message":"Зараз нічого"},"nothing_here_needs_attention_c4eaded6":{"message":"Тут ніщо не вимагає уваги."},"nothing_more_to_do_b665da42":{"message":"План роботи порожній"},"nothing_new_needs_attention_3ac548d4":{"message":"Ніщо нове не потребує уваги."},"nothing_planned_today_selecting_most_recent_item_ffd71bff":{"message":"На сьогодні нічого не заплановано. Виберіть елемент, який використовували останнім."},"nothing_planned_today_selecting_next_item_f6718aa":{"message":"На сьогодні нічого не заплановано. Виберіть наступний елемент."},"nothing_planned_yet_8675ffe9":{"message":"Досі нічого не заплановано"},"numpoints_points_8621a43b":{"message":"{ numPoints } балів"},"only_most_recent_grading_period_shown_f1ad6458":{"message":"*Покано тільки останній період оцінювання."},"optional_add_course_ef0d70fc":{"message":"Опціонально: Додати курс"},"page_50c4823d":{"message":"Сторінка"},"peer_review_74f26a13":{"message":"Експертна оцінка"},"peer_review_for_itemtitle_358cb413":{"message":"Експертна оцінка для { itemTitle }"},"points_bceb5005":{"message":"бали"},"points_points_63e59cce":{"message":"{ points } балів"},"previous_month_bb1e3c84":{"message":"Попередній місяць"},"pts_699bd9aa":{"message":"бали"},"quiz_e0dcce8f":{"message":"Контрольна робота"},"reminder_date_4564d12d":{"message":"Нагадування: { date }"},"replies_4a8577c8":{"message":"Відповіді"},"save_11a80ec3":{"message":"Зберегти"},"scroll_up_to_see_your_history_19b14cad":{"message":"Прокрутіть вверх, щоб побачити свою історію!"},"scrolls_up_to_the_previous_item_with_new_activity_99717459":{"message":"Прокрутіть до попереднього елементу з новою діяльністю."},"show_all_ae37d610":{"message":"Показати все"},"show_my_grades_ebd08684":{"message":"Показати мої оцінки"},"startdate_to_enddate_d245175b":{"message":"{ startDate } до { endDate }"},"startdatetime_enddatetime_20abc10e":{"message":"{ startDateTime } - { endDateTime }"},"startdatetime_endtime_49741bbe":{"message":"{ startDateTime } - { endTime }"},"starttime_to_endtime_d7cc249d":{"message":"{ startTime } до { endTime }"},"submitted_318fad53":{"message":"Підтверджено"},"success_to_do_created_e34ed395":{"message":"Успіх: План робіт створений"},"task_16b0ef38":{"message":"Завдання"},"the_date_and_time_this_to_do_is_due_74c823d4":{"message":"Дата та час, до якого це потрібно виконати"},"there_are_no_points_associated_with_this_item_449c712a":{"message":"З цим елементом не пов\'\'язані бали"},"time_2b5aac58":{"message":"Час"},"title_ee03d132":{"message":"Назва"},"title_is_required_6ddcab69":{"message":"заголовок обов\'\'язковий"},"to_do_1d554f36":{"message":"Зробити"},"to_do_date_4b211ad0":{"message":"Зробити: { date }"},"to_do_items_loading_d1cdfcd5":{"message":"Завантажувати елементи плану робіт"},"today_76e10f9c":{"message":"Сьогодні"},"today_at_date_8ac30d6":{"message":"Сьогодні в { date }"},"tomorrow_9a6c9a00":{"message":"Завтра"},"tomorrow_at_date_b53f2cf1":{"message":"Завтра в { date }"},"unable_to_mark_as_complete_8141856d":{"message":"Неможливо позначити як завершений."},"yesterday_at_date_1aa6d18e":{"message":"Вчора в { date }"},"yesterday_c6bd6abf":{"message":"Вчора"},"you_have_media_feedback_f5f9aba8":{"message":"Ви маєте відгук у вигляді медіа файлу."},"you_must_provide_a_date_and_time_a86839d2":{"message":"Ви маєте задати дату та час."},"you_ve_scrolled_back_to_your_very_first_to_do_29374681":{"message":"Ви прокрутили назад до самого першого завдання!"}}')},WEeK:function(e,t,a){"use strict"
var s=a("rePB")
var n=a("Ff2n")
var i=a("1OyB")
var r=a("vuIU")
var o=a("md7G")
var d=a("foSv")
var l=a("Ji7U")
var u=a("q1tI")
var _=a.n(u)
var m=a("17x9")
var c=a.n(m)
var g=a("TSYQ")
var p=a.n(g)
var f=a("cClk")
var h=a("nAyT")
var b=a("jtGx")
var y=a("E+IV")
var v=a("tCl5")
var E=a("/UXv")
var A=a("sTNg")
var C=a("TstA")
var k=a("BTe1")
var w=a("J2CL")
function T(e){var t=e.colors,a=e.typography,s=e.borders,n=e.spacing,i=e.forms
return{fontFamily:a.fontFamily,fontWeight:a.fontWeightNormal,borderWidth:s.widthSmall,borderStyle:s.style,borderColor:t.borderMedium,borderRadius:s.radiusMedium,color:t.textDarkest,background:t.backgroundLightest,padding:n.small,focusOutlineWidth:s.widthMedium,focusOutlineStyle:s.style,focusOutlineColor:t.borderBrand,errorBorderColor:t.borderDanger,errorOutlineColor:t.borderDanger,placeholderColor:t.textDark,smallFontSize:a.fontSizeSmall,smallHeight:i.inputHeightSmall,mediumFontSize:a.fontSizeMedium,mediumHeight:i.inputHeightMedium,largeFontSize:a.fontSizeLarge,largeHeight:i.inputHeightLarge}}T.canvas=function(e){return{color:e["ic-brand-font-color-dark"],focusOutlineColor:e["ic-brand-primary"]}}
a.d(t,"a",(function(){return I}))
var D,x,F,S,O
var B={componentId:"qBMHb",template:function(e){return"\n\n.qBMHb_cSXm{background:".concat(e.background||"inherit",";border:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";position:relative}\n\n.qBMHb_cSXm,.qBMHb_cSXm:before{box-sizing:border-box;display:block}\n\n.qBMHb_cSXm:before{border:").concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit",'*1.5);bottom:-0.25rem;content:"";left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.qBMHb_cSXm.qBMHb_cVYB:before{opacity:1;transform:scale(1)}\n\n.qBMHb_cSXm.qBMHb_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.qBMHb_cSXm.qBMHb_fszt,.qBMHb_cSXm.qBMHb_fszt.qBMHb_cVYB:before{border-color:').concat(e.errorBorderColor||"inherit","}\n\n.qBMHb_cwos,input[type].qBMHb_cwos{-moz-appearance:none;-moz-osx-font-smoothing:grayscale;-webkit-appearance:none;-webkit-font-smoothing:antialiased;all:initial;animation:none 0s ease 0s 1 normal none running;appearance:none;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:transparent;border:medium none currentColor;border:none;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:#000;color:").concat(e.color||"inherit",";column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamily||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:").concat(e.fontWeight||"inherit",";height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;outline:none;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding:0 ").concat(e.padding||"inherit",";page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;width:100%;word-spacing:normal;z-index:auto}\n\n.qBMHb_cwos::-ms-clear,input[type].qBMHb_cwos::-ms-clear{display:none}\n\n.qBMHb_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button,input[type].qBMHb_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button{display:none!important}\n\n.qBMHb_cwos:focus,input[type].qBMHb_cwos:focus{box-shadow:none}\n\n.qBMHb_cwos:-ms-input-placeholder,input[type].qBMHb_cwos:-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos::-ms-input-placeholder,input[type].qBMHb_cwos::-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos::placeholder,input[type].qBMHb_cwos::placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos.qBMHb_doqw,input[type].qBMHb_cwos.qBMHb_doqw{font-size:").concat(e.smallFontSize||"inherit",";height:calc(").concat(e.smallHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.smallHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_ycrn,input[type].qBMHb_cwos.qBMHb_ycrn{font-size:").concat(e.mediumFontSize||"inherit",";height:calc(").concat(e.mediumHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.mediumHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_cMDj,input[type].qBMHb_cwos.qBMHb_cMDj{font-size:").concat(e.largeFontSize||"inherit",";height:calc(").concat(e.largeHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.largeHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_EMjX,input[type].qBMHb_cwos.qBMHb_EMjX{text-align:start}\n\n[dir=ltr] .qBMHb_cwos.qBMHb_EMjX,[dir=ltr] input[type].qBMHb_cwos.qBMHb_EMjX{text-align:left}\n\n[dir=rtl] .qBMHb_cwos.qBMHb_EMjX,[dir=rtl] input[type].qBMHb_cwos.qBMHb_EMjX{text-align:right}\n\n.qBMHb_cwos.qBMHb_ImeN,[dir=ltr] .qBMHb_cwos.qBMHb_ImeN,[dir=ltr] input[type].qBMHb_cwos.qBMHb_ImeN,[dir=rtl] .qBMHb_cwos.qBMHb_ImeN,[dir=rtl] input[type].qBMHb_cwos.qBMHb_ImeN,input[type].qBMHb_cwos.qBMHb_ImeN{text-align:center}")},facade:"qBMHb_cSXm",focused:"qBMHb_cVYB",disabled:"qBMHb_ywdX",invalid:"qBMHb_fszt",input:"qBMHb_cwos",small:"qBMHb_doqw",medium:"qBMHb_ycrn",large:"qBMHb_cMDj","textAlign--start":"qBMHb_EMjX","textAlign--center":"qBMHb_ImeN"}
var I=(D=Object(h["a"])("7.0.0",{label:"renderLabel",required:"isRequired",inline:"display"}),x=Object(w["themeable"])(T,B),D(F=x(F=(O=S=function(e){Object(l["a"])(t,e)
function t(e){var a
Object(i["a"])(this,t)
a=Object(o["a"])(this,Object(d["a"])(t).call(this))
a.handleInputRef=function(e){a._input=e
a.props.inputRef(e)}
a.handleChange=function(e){a.props.onChange(e,e.target.value)}
a.handleBlur=function(e){a.props.onBlur(e)
a.setState({hasFocus:false})}
a.handleFocus=function(e){a.props.onFocus(e)
a.setState({hasFocus:true})}
a.state={hasFocus:false}
a._defaultId=Object(k["a"])("TextInput")
a._messagesId=Object(k["a"])("TextInput-messages")
return a}Object(r["a"])(t,[{key:"focus",value:function(){this._input.focus()}},{key:"renderInput",value:function(){var e
var t=this.props,a=t.type,i=t.size,r=t.htmlSize,o=(t.display,t.textAlign),d=t.placeholder,l=t.value,u=t.defaultValue,m=t.required,c=t.isRequired,g=Object(n["a"])(t,["type","size","htmlSize","display","textAlign","placeholder","value","defaultValue","required","isRequired"])
var f=Object(b["b"])(g)
var h=this.interaction
var y=(e={},Object(s["a"])(e,B.input,true),Object(s["a"])(e,B[i],i),Object(s["a"])(e,B["textAlign--".concat(o)],o),e)
var v=""
f["aria-describedby"]&&(v="".concat(f["aria-describedby"]))
this.hasMessages&&(v=""!==v?"".concat(v," ").concat(this._messagesId):this._messagesId)
return _.a.createElement("input",Object.assign({},f,{className:p()(y),defaultValue:u,value:l,placeholder:d,ref:this.handleInputRef,type:a,id:this.id,required:c||m,"aria-invalid":this.invalid?"true":null,disabled:"disabled"===h,readOnly:"readonly"===h,"aria-describedby":""!==v?v:null,size:r,onChange:this.handleChange,onBlur:this.handleBlur,onFocus:this.handleFocus}))}},{key:"render",value:function(){var e
var t=this.props,a=t.width,n=t.inline,i=t.display,r=t.label,o=t.renderLabel,d=t.renderBeforeInput,l=t.renderAfterInput,u=t.messages,m=t.inputContainerRef,c=t.icon,g=t.shouldNotWrap
var f=this.interaction
var h=d||l||c
var b=(e={},Object(s["a"])(e,B.facade,true),Object(s["a"])(e,B.disabled,"disabled"===f),Object(s["a"])(e,B.invalid,this.invalid),Object(s["a"])(e,B.focused,this.state.hasFocus),e)
return _.a.createElement(A["FormField"],{id:this.id,label:Object(y["a"])(o||r),messagesId:this._messagesId,messages:u,inline:"inline-block"===i||n,width:a,inputContainerRef:m,layout:this.props.layout},_.a.createElement("span",{className:p()(b)},h?_.a.createElement(C["a"],{wrap:g?"no-wrap":"wrap"},d&&_.a.createElement(C["a"].Item,{padding:"0 0 0 small"},Object(y["a"])(d)),_.a.createElement(C["a"].Item,{shouldGrow:true,shouldShrink:true},_.a.createElement(C["a"],{__dangerouslyIgnoreExperimentalWarnings:true},_.a.createElement(C["a"].Item,{shouldGrow:true,shouldShrink:true},this.renderInput()),(l||c)&&_.a.createElement(C["a"].Item,{padding:"0 small 0 0"},l?Object(y["a"])(l):Object(y["a"])(c))))):this.renderInput()))}},{key:"interaction",get:function(){return Object(v["a"])({props:this.props})}},{key:"hasMessages",get:function(){return this.props.messages&&this.props.messages.length>0}},{key:"invalid",get:function(){return this.props.messages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}},{key:"focused",get:function(){return Object(E["a"])(this._input)}},{key:"value",get:function(){return this._input.value}},{key:"id",get:function(){return this.props.id||this._defaultId}}])
t.displayName="TextInput"
return t}(u["Component"]),S.propTypes={renderLabel:c.a.oneOfType([c.a.node,c.a.func]),type:c.a.oneOf(["text","email","url","tel","search","password"]),id:c.a.string,value:Object(f["a"])(c.a.string),defaultValue:c.a.string,interaction:c.a.oneOf(["enabled","disabled","readonly"]),messages:c.a.arrayOf(A["FormPropTypes"].message),size:c.a.oneOf(["small","medium","large"]),textAlign:c.a.oneOf(["start","center"]),width:c.a.string,htmlSize:c.a.oneOfType([c.a.string,c.a.number]),display:c.a.oneOf(["inline-block","block"]),shouldNotWrap:c.a.bool,placeholder:c.a.string,isRequired:c.a.bool,inputRef:c.a.func,inputContainerRef:c.a.func,renderBeforeInput:c.a.oneOfType([c.a.node,c.a.func]),renderAfterInput:c.a.oneOfType([c.a.node,c.a.func]),onChange:c.a.func,onBlur:c.a.func,onFocus:c.a.func,icon:c.a.func,label:c.a.oneOfType([c.a.node,c.a.func]),required:c.a.bool,inline:c.a.bool},S.defaultProps={renderLabel:void 0,type:"text",id:void 0,interaction:void 0,isRequired:false,value:void 0,defaultValue:void 0,display:"block",shouldNotWrap:false,placeholder:void 0,width:void 0,size:"medium",htmlSize:void 0,textAlign:"start",messages:[],inputRef:function(e){},inputContainerRef:function(e){},onChange:function(e,t){},onBlur:function(e){},onFocus:function(e){},renderBeforeInput:void 0,renderAfterInput:void 0},O))||F)||F)},WJ2Z:function(e,t,a){var s,n;(function(e){"use strict"
if(e.jQuery)return
var t=function(e,a){return new t.fn.init(e,a)}
t.isWindow=function(e){return e&&e===e.window}
t.type=function(e){if(!e)return e+""
return"object"===typeof e||"function"===typeof e?n[r.call(e)]||"object":typeof e}
t.isArray=Array.isArray||function(e){return"array"===t.type(e)}
function a(e){var a=e.length,s=t.type(e)
if("function"===s||t.isWindow(e))return false
if(1===e.nodeType&&a)return true
return"array"===s||0===a||"number"===typeof a&&a>0&&a-1 in e}t.isPlainObject=function(e){var a
if(!e||"object"!==t.type(e)||e.nodeType||t.isWindow(e))return false
try{if(e.constructor&&!i.call(e,"constructor")&&!i.call(e.constructor.prototype,"isPrototypeOf"))return false}catch(e){return false}for(a in e);return void 0===a||i.call(e,a)}
t.each=function(e,t,s){var n,i=0,r=e.length,o=a(e)
if(s)if(o)for(;i<r;i++){n=t.apply(e[i],s)
if(false===n)break}else for(i in e){if(!e.hasOwnProperty(i))continue
n=t.apply(e[i],s)
if(false===n)break}else if(o)for(;i<r;i++){n=t.call(e[i],i,e[i])
if(false===n)break}else for(i in e){if(!e.hasOwnProperty(i))continue
n=t.call(e[i],i,e[i])
if(false===n)break}return e}
t.data=function(e,a,n){if(void 0===n){var i=e[t.expando],r=i&&s[i]
if(void 0===a)return r
if(r&&a in r)return r[a]}else if(void 0!==a){var o=e[t.expando]||(e[t.expando]=++t.uuid)
s[o]=s[o]||{}
s[o][a]=n
return n}}
t.removeData=function(e,a){var n=e[t.expando],i=n&&s[n]
i&&(a?t.each(a,(function(e,t){delete i[t]})):delete s[n])}
t.extend=function(){var e,a,s,n,i,r,o=arguments[0]||{},d=1,l=arguments.length,u=false
if("boolean"===typeof o){u=o
o=arguments[d]||{}
d++}"object"!==typeof o&&"function"!==t.type(o)&&(o={})
if(d===l){o=this
d--}for(;d<l;d++)if(i=arguments[d])for(n in i){if(!i.hasOwnProperty(n))continue
e=o[n]
s=i[n]
if(o===s)continue
if(u&&s&&(t.isPlainObject(s)||(a=t.isArray(s)))){if(a){a=false
r=e&&t.isArray(e)?e:[]}else r=e&&t.isPlainObject(e)?e:{}
o[n]=t.extend(u,r,s)}else void 0!==s&&(o[n]=s)}return o}
t.queue=function(e,s,n){function i(e,t){var s=t||[]
e&&(a(Object(e))?function(e,t){var a=+t.length,s=0,n=e.length
while(s<a)e[n++]=t[s++]
if(a!==a)while(void 0!==t[s])e[n++]=t[s++]
e.length=n}(s,"string"===typeof e?[e]:e):[].push.call(s,e))
return s}if(!e)return
s=(s||"fx")+"queue"
var r=t.data(e,s)
if(!n)return r||[]
!r||t.isArray(n)?r=t.data(e,s,i(n)):r.push(n)
return r}
t.dequeue=function(e,a){t.each(e.nodeType?[e]:e,(function(e,s){a=a||"fx"
var n=t.queue(s,a),i=n.shift()
"inprogress"===i&&(i=n.shift())
if(i){"fx"===a&&n.unshift("inprogress")
i.call(s,(function(){t.dequeue(s,a)}))}}))}
t.fn=t.prototype={init:function(e){if(e.nodeType){this[0]=e
return this}throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0}
return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(e){var t=e.offsetParent
while(t&&"html"!==t.nodeName.toLowerCase()&&t.style&&"static"===t.style.position.toLowerCase())t=t.offsetParent
return t||document}var a=this[0],s=e(a),n=this.offset(),i=/^(?:body|html)$/i.test(s.nodeName)?{top:0,left:0}:t(s).offset()
n.top-=parseFloat(a.style.marginTop)||0
n.left-=parseFloat(a.style.marginLeft)||0
if(s.style){i.top+=parseFloat(s.style.borderTopWidth)||0
i.left+=parseFloat(s.style.borderLeftWidth)||0}return{top:n.top-i.top,left:n.left-i.left}}}
var s={}
t.expando="velocity"+(new Date).getTime()
t.uuid=0
var n={},i=n.hasOwnProperty,r=n.toString
var o="Boolean Number String Function Array Date RegExp Object Error".split(" ")
for(var d=0;d<o.length;d++)n["[object "+o[d]+"]"]=o[d].toLowerCase()
t.fn.init.prototype=t.fn
e.Velocity={Utilities:t}})(window);(function(i){"use strict"
if("object"===typeof e.exports)e.exports=i()
else{s=i,n="function"===typeof s?s.call(t,a,t,e):s,void 0!==n&&(e.exports=n)}})((function(){"use strict"
return function(e,t,a,s){var n=function(){if(a.documentMode)return a.documentMode
for(var e=7;e>4;e--){var t=a.createElement("div")
t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e"
if(t.getElementsByTagName("span").length){t=null
return e}}return s}()
var i=(r=0,t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(e){var t,a=(new Date).getTime()
t=Math.max(0,16-(a-r))
r=a+t
return setTimeout((function(){e(a+t)}),t)})
var r
var o=function(){var e=t.performance||{}
if("function"!==typeof e.now){var a=e.timing&&e.timing.navigationStart?e.timing.navigationStart:(new Date).getTime()
e.now=function(){return(new Date).getTime()-a}}return e}()
function d(e){var t=-1,a=e?e.length:0,s=[]
while(++t<a){var n=e[t]
n&&s.push(n)}return s}var l=function(){var e=Array.prototype.slice
try{e.call(a.documentElement)
return e}catch(t){return function(t,a){var s=this.length
"number"!==typeof t&&(t=0)
"number"!==typeof a&&(a=s)
if(this.slice)return e.call(this,t,a)
var n,i=[],r=t>=0?t:Math.max(0,s+t),o=a<0?s+a:Math.min(a,s),d=o-r
if(d>0){i=new Array(d)
if(this.charAt)for(n=0;n<d;n++)i[n]=this.charAt(r+n)
else for(n=0;n<d;n++)i[n]=this[r+n]}return i}}}()
var u=function(){if(Array.prototype.includes)return function(e,t){return e.includes(t)}
if(Array.prototype.indexOf)return function(e,t){return e.indexOf(t)>=0}
return function(e,t){for(var a=0;a<e.length;a++)if(e[a]===t)return true
return false}}
function _(e){m.isWrapped(e)?e=l.call(e):m.isNode(e)&&(e=[e])
return e}var m={isNumber:function(e){return"number"===typeof e},isString:function(e){return"string"===typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isWrapped:function(e){return e&&e!==t&&m.isNumber(e.length)&&!m.isString(e)&&!m.isFunction(e)&&!m.isNode(e)&&(0===e.length||m.isNode(e[0]))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)if(e.hasOwnProperty(t))return false
return true}}
var c,g=false
if(e.fn&&e.fn.jquery){c=e
g=true}else c=t.Velocity.Utilities
if(n<=8&&!g)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.")
if(n<=7){jQuery.fn.velocity=jQuery.fn.animate
return}var p=400,f="swing"
var h={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t.navigator.userAgent),isAndroid:/Android/i.test(t.navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(t.navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(t.navigator.userAgent),prefixElement:a.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:false,calls:[],delayedElements:{count:0}},CSS:{},Utilities:c,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:p,easing:f,begin:s,complete:s,progress:s,display:s,visibility:s,loop:false,delay:false,mobileHA:true,_cacheValues:true,promiseRejectEmpty:true},init:function(e){c.data(e,"velocity",{isSVG:m.isSVG(e),isAnimating:false,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:false,version:{major:1,minor:5,patch:2},debug:false,timestamp:true,pauseAll:function(e){var t=(new Date).getTime()
c.each(h.State.calls,(function(t,a){if(a){if(e!==s&&(a[2].queue!==e||false===a[2].queue))return true
a[5]={resume:false}}}))
c.each(h.State.delayedElements,(function(e,a){if(!a)return
y(a,t)}))},resumeAll:function(e){var t=(new Date).getTime()
c.each(h.State.calls,(function(t,a){if(a){if(e!==s&&(a[2].queue!==e||false===a[2].queue))return true
a[5]&&(a[5].resume=true)}}))
c.each(h.State.delayedElements,(function(e,a){if(!a)return
v(a,t)}))}}
if(t.pageYOffset!==s){h.State.scrollAnchor=t
h.State.scrollPropertyLeft="pageXOffset"
h.State.scrollPropertyTop="pageYOffset"}else{h.State.scrollAnchor=a.documentElement||a.body.parentNode||a.body
h.State.scrollPropertyLeft="scrollLeft"
h.State.scrollPropertyTop="scrollTop"}function b(e){var t=c.data(e,"velocity")
return null===t?s:t}function y(e,t){var a=b(e)
if(a&&a.delayTimer&&!a.delayPaused){a.delayRemaining=a.delay-t+a.delayBegin
a.delayPaused=true
clearTimeout(a.delayTimer.setTimeout)}}function v(e,t){var a=b(e)
if(a&&a.delayTimer&&a.delayPaused){a.delayPaused=false
a.delayTimer.setTimeout=setTimeout(a.delayTimer.next,a.delayRemaining)}}function E(e){return function(t){return Math.round(t*e)*(1/e)}}function A(e,a,s,n){var i=4,r=.001,o=1e-7,d=10,l=11,u=1/(l-1),_="Float32Array"in t
if(4!==arguments.length)return false
for(var m=0;m<4;++m)if("number"!==typeof arguments[m]||isNaN(arguments[m])||!isFinite(arguments[m]))return false
e=Math.min(e,1)
s=Math.min(s,1)
e=Math.max(e,0)
s=Math.max(s,0)
var c=_?new Float32Array(l):new Array(l)
function g(e,t){return 1-3*t+3*e}function p(e,t){return 3*t-6*e}function f(e){return 3*e}function h(e,t,a){return((g(t,a)*e+p(t,a))*e+f(t))*e}function b(e,t,a){return 3*g(t,a)*e*e+2*p(t,a)*e+f(t)}function y(t,a){for(var n=0;n<i;++n){var r=b(a,e,s)
if(0===r)return a
var o=h(a,e,s)-t
a-=o/r}return a}function v(){for(var t=0;t<l;++t)c[t]=h(t*u,e,s)}function E(t,a,n){var i,r,l=0
do{r=a+(n-a)/2
i=h(r,e,s)-t
i>0?n=r:a=r}while(Math.abs(i)>o&&++l<d)
return r}function A(t){var a=0,n=1,i=l-1
for(;n!==i&&c[n]<=t;++n)a+=u;--n
var o=(t-c[n])/(c[n+1]-c[n]),d=a+o*u,_=b(d,e,s)
return _>=r?y(t,d):0===_?d:E(t,a,a+u)}var C=false
function k(){C=true
e===a&&s===n||v()}var w=function(t){C||k()
if(e===a&&s===n)return t
if(0===t)return 0
if(1===t)return 1
return h(A(t),a,n)}
w.getControlPoints=function(){return[{x:e,y:a},{x:s,y:n}]}
var T="generateBezier("+[e,a,s,n]+")"
w.toString=function(){return T}
return w}var C=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,a,s){var n={x:t.x+s.dx*a,v:t.v+s.dv*a,tension:t.tension,friction:t.friction}
return{dx:n.v,dv:e(n)}}function a(a,s){var n={dx:a.v,dv:e(a)},i=t(a,.5*s,n),r=t(a,.5*s,i),o=t(a,s,r),d=1/6*(n.dx+2*(i.dx+r.dx)+o.dx),l=1/6*(n.dv+2*(i.dv+r.dv)+o.dv)
a.x=a.x+d*s
a.v=a.v+l*s
return a}return function e(t,s,n){var i,r,o,d={x:-1,v:0,tension:null,friction:null},l=[0],u=0,_=1e-4,m=.016
t=parseFloat(t)||500
s=parseFloat(s)||20
n=n||null
d.tension=t
d.friction=s
i=null!==n
if(i){u=e(t,s)
r=u/n*m}else r=m
while(true){o=a(o||d,r)
l.push(1+o.x)
u+=16
if(!(Math.abs(o.x)>_&&Math.abs(o.v)>_))break}return i?function(e){return l[e*(l.length-1)|0]}:u}}()
h.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}}
c.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],(function(e,t){h.Easings[t[0]]=A.apply(null,t[1])}))
function k(e,t){var a=e
m.isString(e)?h.Easings[e]||(a=false):a=m.isArray(e)&&1===e.length?E.apply(null,e):m.isArray(e)&&2===e.length?C.apply(null,e.concat([t])):!(!m.isArray(e)||4!==e.length)&&A.apply(null,e)
false===a&&(a=h.Easings[h.defaults.easing]?h.defaults.easing:f)
return a}var w=h.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"],units:["%","em","ex","ch","rem","vw","vh","vmin","vmax","cm","mm","Q","in","pc","pt","px","deg","grad","rad","turn","s","ms"],colorNames:{aliceblue:"240,248,255",antiquewhite:"250,235,215",aquamarine:"127,255,212",aqua:"0,255,255",azure:"240,255,255",beige:"245,245,220",bisque:"255,228,196",black:"0,0,0",blanchedalmond:"255,235,205",blueviolet:"138,43,226",blue:"0,0,255",brown:"165,42,42",burlywood:"222,184,135",cadetblue:"95,158,160",chartreuse:"127,255,0",chocolate:"210,105,30",coral:"255,127,80",cornflowerblue:"100,149,237",cornsilk:"255,248,220",crimson:"220,20,60",cyan:"0,255,255",darkblue:"0,0,139",darkcyan:"0,139,139",darkgoldenrod:"184,134,11",darkgray:"169,169,169",darkgrey:"169,169,169",darkgreen:"0,100,0",darkkhaki:"189,183,107",darkmagenta:"139,0,139",darkolivegreen:"85,107,47",darkorange:"255,140,0",darkorchid:"153,50,204",darkred:"139,0,0",darksalmon:"233,150,122",darkseagreen:"143,188,143",darkslateblue:"72,61,139",darkslategray:"47,79,79",darkturquoise:"0,206,209",darkviolet:"148,0,211",deeppink:"255,20,147",deepskyblue:"0,191,255",dimgray:"105,105,105",dimgrey:"105,105,105",dodgerblue:"30,144,255",firebrick:"178,34,34",floralwhite:"255,250,240",forestgreen:"34,139,34",fuchsia:"255,0,255",gainsboro:"220,220,220",ghostwhite:"248,248,255",gold:"255,215,0",goldenrod:"218,165,32",gray:"128,128,128",grey:"128,128,128",greenyellow:"173,255,47",green:"0,128,0",honeydew:"240,255,240",hotpink:"255,105,180",indianred:"205,92,92",indigo:"75,0,130",ivory:"255,255,240",khaki:"240,230,140",lavenderblush:"255,240,245",lavender:"230,230,250",lawngreen:"124,252,0",lemonchiffon:"255,250,205",lightblue:"173,216,230",lightcoral:"240,128,128",lightcyan:"224,255,255",lightgoldenrodyellow:"250,250,210",lightgray:"211,211,211",lightgrey:"211,211,211",lightgreen:"144,238,144",lightpink:"255,182,193",lightsalmon:"255,160,122",lightseagreen:"32,178,170",lightskyblue:"135,206,250",lightslategray:"119,136,153",lightsteelblue:"176,196,222",lightyellow:"255,255,224",limegreen:"50,205,50",lime:"0,255,0",linen:"250,240,230",magenta:"255,0,255",maroon:"128,0,0",mediumaquamarine:"102,205,170",mediumblue:"0,0,205",mediumorchid:"186,85,211",mediumpurple:"147,112,219",mediumseagreen:"60,179,113",mediumslateblue:"123,104,238",mediumspringgreen:"0,250,154",mediumturquoise:"72,209,204",mediumvioletred:"199,21,133",midnightblue:"25,25,112",mintcream:"245,255,250",mistyrose:"255,228,225",moccasin:"255,228,181",navajowhite:"255,222,173",navy:"0,0,128",oldlace:"253,245,230",olivedrab:"107,142,35",olive:"128,128,0",orangered:"255,69,0",orange:"255,165,0",orchid:"218,112,214",palegoldenrod:"238,232,170",palegreen:"152,251,152",paleturquoise:"175,238,238",palevioletred:"219,112,147",papayawhip:"255,239,213",peachpuff:"255,218,185",peru:"205,133,63",pink:"255,192,203",plum:"221,160,221",powderblue:"176,224,230",purple:"128,0,128",red:"255,0,0",rosybrown:"188,143,143",royalblue:"65,105,225",saddlebrown:"139,69,19",salmon:"250,128,114",sandybrown:"244,164,96",seagreen:"46,139,87",seashell:"255,245,238",sienna:"160,82,45",silver:"192,192,192",skyblue:"135,206,235",slateblue:"106,90,205",slategray:"112,128,144",snow:"255,250,250",springgreen:"0,255,127",steelblue:"70,130,180",tan:"210,180,140",teal:"0,128,128",thistle:"216,191,216",tomato:"255,99,71",turquoise:"64,224,208",violet:"238,130,238",wheat:"245,222,179",whitesmoke:"245,245,245",white:"255,255,255",yellowgreen:"154,205,50",yellow:"255,255,0"}},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<w.Lists.colors.length;e++){var t="color"===w.Lists.colors[e]?"0 0 0 1":"255 255 255 1"
w.Hooks.templates[w.Lists.colors[e]]=["Red Green Blue Alpha",t]}var a,s,i
if(n)for(a in w.Hooks.templates){if(!w.Hooks.templates.hasOwnProperty(a))continue
s=w.Hooks.templates[a]
i=s[0].split(" ")
var r=s[1].match(w.RegEx.valueSplit)
if("Color"===i[0]){i.push(i.shift())
r.push(r.shift())
w.Hooks.templates[a]=[i.join(" "),r.join(" ")]}}for(a in w.Hooks.templates){if(!w.Hooks.templates.hasOwnProperty(a))continue
s=w.Hooks.templates[a]
i=s[0].split(" ")
for(var o in i){if(!i.hasOwnProperty(o))continue
var d=a+i[o],l=o
w.Hooks.registered[d]=[a,l]}}},getRoot:function(e){var t=w.Hooks.registered[e]
return t?t[0]:e},getUnit:function(e,t){var a=(e.substr(t||0,5).match(/^[a-z%]+/)||[])[0]||""
if(a&&u(w.Lists.units,a))return a
return""},fixColors:function(e){return e.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g,(function(e,t,a){if(w.Lists.colorNames.hasOwnProperty(a))return(t||"rgba(")+w.Lists.colorNames[a]+(t?"":",1)")
return t+a}))},cleanRootPropertyValue:function(e,t){w.RegEx.valueUnwrap.test(t)&&(t=t.match(w.RegEx.valueUnwrap)[1])
w.Values.isCSSNullValue(t)&&(t=w.Hooks.templates[e][1])
return t},extractValue:function(e,t){var a=w.Hooks.registered[e]
if(a){var s=a[0],n=a[1]
t=w.Hooks.cleanRootPropertyValue(s,t)
return t.toString().match(w.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,a){var s=w.Hooks.registered[e]
if(s){var n,i,r=s[0],o=s[1]
a=w.Hooks.cleanRootPropertyValue(r,a)
n=a.toString().match(w.RegEx.valueSplit)
n[o]=t
i=n.join(" ")
return i}return a}},Normalizations:{registered:{clip:function(e,t,a){switch(e){case"name":return"clip"
case"extract":var s
if(w.RegEx.wrappedValueAlreadyExtracted.test(a))s=a
else{s=a.toString().match(w.RegEx.valueUnwrap)
s=s?s[1].replace(/,(\s+)?/g," "):a}return s
case"inject":return"rect("+a+")"}},blur:function(e,t,a){switch(e){case"name":return h.State.isFirefox?"filter":"-webkit-filter"
case"extract":var s=parseFloat(a)
if(!(s||0===s)){var n=a.toString().match(/blur\(([0-9]+[A-z]+)\)/i)
s=n?n[1]:0}return s
case"inject":return parseFloat(a)?"blur("+a+")":"none"}},opacity:function(e,t,a){if(n<=8)switch(e){case"name":return"filter"
case"extract":var s=a.toString().match(/alpha\(opacity=(.*)\)/i)
a=s?s[1]/100:1
return a
case"inject":t.style.zoom=1
return parseFloat(a)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(a),10)+")"}else switch(e){case"name":return"opacity"
case"extract":case"inject":return a}}},register:function(){n&&!(n>9)||h.State.isGingerbread||(w.Lists.transformsBase=w.Lists.transformsBase.concat(w.Lists.transforms3D))
for(var e=0;e<w.Lists.transformsBase.length;e++)(function(){var t=w.Lists.transformsBase[e]
w.Normalizations.registered[t]=function(e,a,n){switch(e){case"name":return"transform"
case"extract":if(b(a)===s||b(a).transformCache[t]===s)return/^scale/i.test(t)?1:0
return b(a).transformCache[t].replace(/[()]/g,"")
case"inject":var i=false
switch(t.substr(0,t.length-1)){case"translate":i=!/(%|px|em|rem|vw|vh|\d)$/i.test(n)
break
case"scal":case"scale":h.State.isAndroid&&b(a).transformCache[t]===s&&n<1&&(n=1)
i=!/(\d)$/i.test(n)
break
case"skew":case"rotate":i=!/(deg|\d)$/i.test(n)}i||(b(a).transformCache[t]="("+n+")")
return b(a).transformCache[t]}}})()
for(var t=0;t<w.Lists.colors.length;t++)(function(){var e=w.Lists.colors[t]
w.Normalizations.registered[e]=function(t,a,i){switch(t){case"name":return e
case"extract":var r
if(w.RegEx.wrappedValueAlreadyExtracted.test(i))r=i
else{var o,d={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(i)?o=d[i]!==s?d[i]:d.black:w.RegEx.isHex.test(i)?o="rgb("+w.Values.hexToRgb(i).join(" ")+")":/^rgba?\(/i.test(i)||(o=d.black)
r=(o||i).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}(!n||n>8)&&3===r.split(" ").length&&(r+=" 1")
return r
case"inject":if(/^rgb/.test(i))return i
n<=8?4===i.split(" ").length&&(i=i.split(/\s+/).slice(0,3).join(" ")):3===i.split(" ").length&&(i+=" 1")
return(n<=8?"rgb":"rgba")+"("+i.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}})()
function a(e,t,a){var s="border-box"===w.getPropertyValue(t,"boxSizing").toString().toLowerCase()
if(s===(a||false)){var n,i,r=0,o="width"===e?["Left","Right"]:["Top","Bottom"],d=["padding"+o[0],"padding"+o[1],"border"+o[0]+"Width","border"+o[1]+"Width"]
for(n=0;n<d.length;n++){i=parseFloat(w.getPropertyValue(t,d[n]))
isNaN(i)||(r+=i)}return a?-r:r}return 0}function i(e,t){return function(s,n,i){switch(s){case"name":return e
case"extract":return parseFloat(i)+a(e,n,t)
case"inject":return parseFloat(i)-a(e,n,t)+"px"}}}w.Normalizations.registered.innerWidth=i("width",true)
w.Normalizations.registered.innerHeight=i("height",true)
w.Normalizations.registered.outerWidth=i("width")
w.Normalizations.registered.outerHeight=i("height")}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}))},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";(n||h.State.isAndroid&&!h.State.isChrome)&&(t+="|transform")
return new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(h.State.prefixMatches[e])return[h.State.prefixMatches[e],true]
var t=["","Webkit","Moz","ms","O"]
for(var a=0,s=t.length;a<s;a++){var n
n=0===a?e:t[a]+e.replace(/^\w/,(function(e){return e.toUpperCase()}))
if(m.isString(h.State.prefixElement.style[n])){h.State.prefixMatches[e]=n
return[n,true]}}return[e,false]}},Values:{hexToRgb:function(e){var t,a=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
e=e.replace(a,(function(e,t,a,s){return t+t+a+a+s+s}))
t=s.exec(e)
return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return!e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase()
return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){if(e)if(e.classList)e.classList.add(t)
else if(m.isString(e.className))e.className+=(e.className.length?" ":"")+t
else{var a=e.getAttribute(n<=7?"className":"class")||""
e.setAttribute("class",a+(a?" ":"")+t)}},removeClass:function(e,t){if(e)if(e.classList)e.classList.remove(t)
else if(m.isString(e.className))e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")
else{var a=e.getAttribute(n<=7?"className":"class")||""
e.setAttribute("class",a.replace(new RegExp("(^|s)"+t.split(" ").join("|")+"(s|$)","gi")," "))}}},getPropertyValue:function(e,a,i,r){function o(e,a){var i=0
if(n<=8)i=c.css(e,a)
else{var d=false
if(/^(width|height)$/.test(a)&&0===w.getPropertyValue(e,"display")){d=true
w.setPropertyValue(e,"display",w.Values.getDisplayType(e))}var l=function(){d&&w.setPropertyValue(e,"display","none")}
if(!r){if("height"===a&&"border-box"!==w.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var u=e.offsetHeight-(parseFloat(w.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(w.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(w.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(w.getPropertyValue(e,"paddingBottom"))||0)
l()
return u}if("width"===a&&"border-box"!==w.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var _=e.offsetWidth-(parseFloat(w.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(w.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(w.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(w.getPropertyValue(e,"paddingRight"))||0)
l()
return _}}var m
m=b(e)===s?t.getComputedStyle(e,null):b(e).computedStyle?b(e).computedStyle:b(e).computedStyle=t.getComputedStyle(e,null)
"borderColor"===a&&(a="borderTopColor")
i=9===n&&"filter"===a?m.getPropertyValue(a):m[a]
""!==i&&null!==i||(i=e.style[a])
l()}if("auto"===i&&/^(top|right|bottom|left)$/i.test(a)){var g=o(e,"position");("fixed"===g||"absolute"===g&&/top|left/i.test(a))&&(i=c(e).position()[a]+"px")}return i}var d
if(w.Hooks.registered[a]){var l=a,u=w.Hooks.getRoot(l)
i===s&&(i=w.getPropertyValue(e,w.Names.prefixCheck(u)[0]))
w.Normalizations.registered[u]&&(i=w.Normalizations.registered[u]("extract",e,i))
d=w.Hooks.extractValue(l,i)}else if(w.Normalizations.registered[a]){var _,m
_=w.Normalizations.registered[a]("name",e)
if("transform"!==_){m=o(e,w.Names.prefixCheck(_)[0])
w.Values.isCSSNullValue(m)&&w.Hooks.templates[a]&&(m=w.Hooks.templates[a][1])}d=w.Normalizations.registered[a]("extract",e,m)}if(!/^[\d-]/.test(d)){var g=b(e)
if(g&&g.isSVG&&w.Names.SVGAttribute(a))if(/^(height|width)$/i.test(a))try{d=e.getBBox()[a]}catch(e){d=0}else d=e.getAttribute(a)
else d=o(e,w.Names.prefixCheck(a)[0])}w.Values.isCSSNullValue(d)&&(d=0)
h.debug>=2&&console.log("Get "+a+": "+d)
return d},setPropertyValue:function(e,a,s,i,r){var o=a
if("scroll"===a)r.container?r.container["scroll"+r.direction]=s:"Left"===r.direction?t.scrollTo(s,r.alternateValue):t.scrollTo(r.alternateValue,s)
else if(w.Normalizations.registered[a]&&"transform"===w.Normalizations.registered[a]("name",e)){w.Normalizations.registered[a]("inject",e,s)
o="transform"
s=b(e).transformCache[a]}else{if(w.Hooks.registered[a]){var d=a,l=w.Hooks.getRoot(a)
i=i||w.getPropertyValue(e,l)
s=w.Hooks.injectValue(d,s,i)
a=l}if(w.Normalizations.registered[a]){s=w.Normalizations.registered[a]("inject",e,s)
a=w.Normalizations.registered[a]("name",e)}o=w.Names.prefixCheck(a)[0]
if(n<=8)try{e.style[o]=s}catch(e){h.debug&&console.log("Browser does not support ["+s+"] for ["+o+"]")}else{var u=b(e)
u&&u.isSVG&&w.Names.SVGAttribute(a)?e.setAttribute(a,s):e.style[o]=s}h.debug>=2&&console.log("Set "+a+" ("+o+"): "+s)}return[o,s]},flushTransformCache:function(e){var t="",a=b(e)
if((n||h.State.isAndroid&&!h.State.isChrome)&&a&&a.isSVG){var s=function(t){return parseFloat(w.getPropertyValue(e,t))}
var i={translate:[s("translateX"),s("translateY")],skewX:[s("skewX")],skewY:[s("skewY")],scale:1!==s("scale")?[s("scale"),s("scale")]:[s("scaleX"),s("scaleY")],rotate:[s("rotateZ"),0,0]}
c.each(b(e).transformCache,(function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate")
if(i[e]){t+=e+"("+i[e].join(" ")+") "
delete i[e]}}))}else{var r,o
c.each(b(e).transformCache,(function(a){r=b(e).transformCache[a]
if("transformPerspective"===a){o=r
return true}9===n&&"rotateZ"===a&&(a="rotate")
t+=a+r+" "}))
o&&(t="perspective"+o+" "+t)}w.setPropertyValue(e,"transform",t)}}
w.Hooks.register()
w.Normalizations.register()
h.hook=function(e,t,a){var n
e=_(e)
c.each(e,(function(e,i){b(i)===s&&h.init(i)
if(a===s)n===s&&(n=w.getPropertyValue(i,t))
else{var r=w.setPropertyValue(i,t,a)
"transform"===r[0]&&h.CSS.flushTransformCache(i)
n=r}}))
return n}
var T=function(){var e
function n(){return i?E.promise||null:r}var i,r,o,d=arguments[0]&&(arguments[0].p||c.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||m.isString(arguments[0].properties))
var l,g,f
if(m.isWrapped(this)){i=false
o=0
l=this
r=this}else{i=true
o=1
l=d?arguments[0].elements||arguments[0].e:arguments[0]}var E={promise:null,resolver:null,rejecter:null}
i&&h.Promise&&(E.promise=new h.Promise((function(e,t){E.resolver=e
E.rejecter=t})))
if(d){g=arguments[0].properties||arguments[0].p
f=arguments[0].options||arguments[0].o}else{g=arguments[o]
f=arguments[o+1]}l=_(l)
if(!l){E.promise&&(g&&f&&false===f.promiseRejectEmpty?E.resolver():E.rejecter())
return}var A=l.length,C=0
if(!/^(stop|finish|finishAll|pause|resume)$/i.test(g)&&!c.isPlainObject(f)){var D=o+1
f={}
for(var x=D;x<arguments.length;x++)m.isArray(arguments[x])||!/^(fast|normal|slow)$/i.test(arguments[x])&&!/^\d/.test(arguments[x])?m.isString(arguments[x])||m.isArray(arguments[x])?f.easing=arguments[x]:m.isFunction(arguments[x])&&(f.complete=arguments[x]):f.duration=arguments[x]}var O
switch(g){case"scroll":O="scroll"
break
case"reverse":O="reverse"
break
case"pause":var B=(new Date).getTime()
c.each(l,(function(e,t){y(t,B)}))
c.each(h.State.calls,(function(e,t){var a=false
t&&c.each(t[1],(function(e,n){var i=f===s?"":f
if(true!==i&&t[2].queue!==i&&!(f===s&&false===t[2].queue))return true
c.each(l,(function(e,s){if(s===n){t[5]={resume:false}
a=true
return false}}))
if(a)return false}))}))
return n()
case"resume":c.each(l,(function(e,t){v(t,B)}))
c.each(h.State.calls,(function(e,t){var a=false
t&&c.each(t[1],(function(e,n){var i=f===s?"":f
if(true!==i&&t[2].queue!==i&&!(f===s&&false===t[2].queue))return true
if(!t[5])return true
c.each(l,(function(e,s){if(s===n){t[5].resume=true
a=true
return false}}))
if(a)return false}))}))
return n()
case"finish":case"finishAll":case"stop":c.each(l,(function(e,t){if(b(t)&&b(t).delayTimer){clearTimeout(b(t).delayTimer.setTimeout)
b(t).delayTimer.next&&b(t).delayTimer.next()
delete b(t).delayTimer}if("finishAll"===g&&(true===f||m.isString(f))){c.each(c.queue(t,m.isString(f)?f:""),(function(e,t){m.isFunction(t)&&t()}))
c.queue(t,m.isString(f)?f:"",[])}}))
var I=[]
c.each(h.State.calls,(function(e,t){t&&c.each(t[1],(function(a,n){var i=f===s?"":f
if(true!==i&&t[2].queue!==i&&!(f===s&&false===t[2].queue))return true
c.each(l,(function(a,s){if(s===n){if(true===f||m.isString(f)){c.each(c.queue(s,m.isString(f)?f:""),(function(e,t){m.isFunction(t)&&t(null,true)}))
c.queue(s,m.isString(f)?f:"",[])}if("stop"===g){var r=b(s)
r&&r.tweensContainer&&(true===i||""===i)&&c.each(r.tweensContainer,(function(e,t){t.endValue=t.currentValue}))
I.push(e)}else"finish"!==g&&"finishAll"!==g||(t[2].duration=1)}}))}))}))
if("stop"===g){c.each(I,(function(e,t){S(t,true)}))
E.promise&&E.resolver(l)}return n()
default:if(!c.isPlainObject(g)||m.isEmptyObject(g)){if(m.isString(g)&&h.Redirects[g]){e=c.extend({},f)
var z=e.duration,N=e.delay||0
true===e.backwards&&(l=c.extend(true,[],l).reverse())
c.each(l,(function(t,a){parseFloat(e.stagger)?e.delay=N+parseFloat(e.stagger)*t:m.isFunction(e.stagger)&&(e.delay=N+e.stagger.call(a,t,A))
if(e.drag){e.duration=parseFloat(z)||(/^(callout|transition)/.test(g)?1e3:p)
e.duration=Math.max(e.duration*(e.backwards?1-t/A:(t+1)/A),.75*e.duration,200)}h.Redirects[g].call(a,a,e||{},t,A,l,E.promise?E:s)}))
return n()}var M="Velocity: First argument ("+g+") was not a property map, a known action, or a registered redirect. Aborting."
E.promise?E.rejecter(new Error(M)):t.console&&console.log(M)
return n()}O="start"}var L={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null}
var P=[]
function j(e,n){var i,r=c.extend({},h.defaults,f),o={}
b(e)===s&&h.init(e)
parseFloat(r.delay)&&false!==r.queue&&c.queue(e,r.queue,(function(t,a){if(true===a)return true
h.velocityQueueEntryFlag=true
var s=h.State.delayedElements.count++
h.State.delayedElements[s]=e
var n=(i=s,function(){h.State.delayedElements[i]=false
t()})
var i
b(e).delayBegin=(new Date).getTime()
b(e).delay=parseFloat(r.delay)
b(e).delayTimer={setTimeout:setTimeout(t,parseFloat(r.delay)),next:n}}))
switch(r.duration.toString().toLowerCase()){case"fast":r.duration=200
break
case"normal":r.duration=p
break
case"slow":r.duration=600
break
default:r.duration=parseFloat(r.duration)||1}if(false!==h.mock)if(true===h.mock)r.duration=r.delay=1
else{r.duration*=parseFloat(h.mock)||1
r.delay*=parseFloat(h.mock)||1}r.easing=k(r.easing,r.duration)
r.begin&&!m.isFunction(r.begin)&&(r.begin=null)
r.progress&&!m.isFunction(r.progress)&&(r.progress=null)
r.complete&&!m.isFunction(r.complete)&&(r.complete=null)
if(r.display!==s&&null!==r.display){r.display=r.display.toString().toLowerCase()
"auto"===r.display&&(r.display=h.CSS.Values.getDisplayType(e))}r.visibility!==s&&null!==r.visibility&&(r.visibility=r.visibility.toString().toLowerCase())
r.mobileHA=r.mobileHA&&h.State.isMobile&&!h.State.isGingerbread
function d(d){var _,p
if(r.begin&&0===C)try{r.begin.call(l,l)}catch(e){setTimeout((function(){throw e}),1)}if("scroll"===O){var y,v,T,D=/^x$/i.test(r.axis)?"Left":"Top",x=parseFloat(r.offset)||0
if(r.container)if(m.isWrapped(r.container)||m.isNode(r.container)){r.container=r.container[0]||r.container
y=r.container["scroll"+D]
T=y+c(e).position()[D.toLowerCase()]+x}else r.container=null
else{y=h.State.scrollAnchor[h.State["scrollProperty"+D]]
v=h.State.scrollAnchor[h.State["scrollProperty"+("Left"===D?"Top":"Left")]]
T=c(e).offset()[D.toLowerCase()]+x}o={scroll:{rootPropertyValue:false,startValue:y,currentValue:y,endValue:T,unitType:"",easing:r.easing,scrollData:{container:r.container,direction:D,alternateValue:v}},element:e}
h.debug&&console.log("tweensContainer (scroll): ",o.scroll,e)}else if("reverse"===O){_=b(e)
if(!_)return
if(!_.tweensContainer){c.dequeue(e,r.queue)
return}"none"===_.opts.display&&(_.opts.display="auto")
"hidden"===_.opts.visibility&&(_.opts.visibility="visible")
_.opts.loop=false
_.opts.begin=null
_.opts.complete=null
f.easing||delete r.easing
f.duration||delete r.duration
r=c.extend({},_.opts,r)
p=c.extend(true,{},_?_.tweensContainer:null)
for(var S in p)if(p.hasOwnProperty(S)&&"element"!==S){var B=p[S].startValue
p[S].startValue=p[S].currentValue=p[S].endValue
p[S].endValue=B
m.isEmptyObject(f)||(p[S].easing=r.easing)
h.debug&&console.log("reverse tweensContainer ("+S+"): "+JSON.stringify(p[S]),e)}o=p}else if("start"===O){_=b(e)
_&&_.tweensContainer&&true===_.isAnimating&&(p=_.tweensContainer)
var I=function(t,a){var s,i,o
m.isFunction(t)&&(t=t.call(e,n,A))
if(m.isArray(t)){s=t[0]
if(!m.isArray(t[1])&&/^[\d-]/.test(t[1])||m.isFunction(t[1])||w.RegEx.isHex.test(t[1]))o=t[1]
else if(m.isString(t[1])&&!w.RegEx.isHex.test(t[1])&&h.Easings[t[1]]||m.isArray(t[1])){i=a?t[1]:k(t[1],r.duration)
o=t[2]}else o=t[1]||t[2]}else s=t
a||(i=i||r.easing)
m.isFunction(s)&&(s=s.call(e,n,A))
m.isFunction(o)&&(o=o.call(e,n,A))
return[s||0,i,o]}
var z=function(n,d){var l,u=w.Hooks.getRoot(n),g=false,f=d[0],b=d[1],y=d[2]
if((!_||!_.isSVG)&&"tween"!==u&&false===w.Names.prefixCheck(u)[1]&&w.Normalizations.registered[u]===s){h.debug&&console.log("Skipping ["+u+"] due to a lack of browser support.")
return}(r.display!==s&&null!==r.display&&"none"!==r.display||r.visibility!==s&&"hidden"!==r.visibility)&&/opacity|filter/.test(n)&&!y&&0!==f&&(y=0)
if(r._cacheValues&&p&&p[n]){y===s&&(y=p[n].endValue+p[n].unitType)
g=_.rootPropertyValueCache[u]}else if(w.Hooks.registered[n])if(y===s){g=w.getPropertyValue(e,u)
y=w.getPropertyValue(e,n,g)}else g=w.Hooks.templates[u][1]
else y===s&&(y=w.getPropertyValue(e,n))
var v,E,A,C=false
var k=function(e,t){var a,s
s=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,(function(e){a=e
return""}))
a||(a=w.Values.getUnitType(e))
return[s,a]}
if(y!==f&&m.isString(y)&&m.isString(f)){l=""
var T=0,D=0,x=[],F=[],S=0,O=0,B=0
y=w.Hooks.fixColors(y)
f=w.Hooks.fixColors(f)
while(T<y.length&&D<f.length){var I=y[T],z=f[D]
if(/[\d\.-]/.test(I)&&/[\d\.-]/.test(z)){var N=I,M=z,P=".",j="."
while(++T<y.length){I=y[T]
if(I===P)P=".."
else if(!/\d/.test(I))break
N+=I}while(++D<f.length){z=f[D]
if(z===j)j=".."
else if(!/\d/.test(z))break
M+=z}var R=w.Hooks.getUnit(y,T),q=w.Hooks.getUnit(f,D)
T+=R.length
D+=q.length
if(R===q)if(N===M)l+=N+R
else{l+="{"+x.length+(O?"!":"")+"}"+R
x.push(parseFloat(N))
F.push(parseFloat(M))}else{var H=parseFloat(N),U=parseFloat(M)
l+=(S<5?"calc":"")+"("+(H?"{"+x.length+(O?"!":"")+"}":"0")+R+" + "+(U?"{"+(x.length+(H?1:0))+(O?"!":"")+"}":"0")+q+")"
if(H){x.push(H)
F.push(0)}if(U){x.push(0)
F.push(U)}}}else{if(I!==z){S=0
break}l+=I
T++
D++
0===S&&"c"===I||1===S&&"a"===I||2===S&&"l"===I||3===S&&"c"===I||S>=4&&"("===I?S++:(S&&S<5||S>=4&&")"===I&&--S<5)&&(S=0)
if(0===O&&"r"===I||1===O&&"g"===I||2===O&&"b"===I||3===O&&"a"===I||O>=3&&"("===I){3===O&&"a"===I&&(B=1)
O++}else B&&","===I?++B>3&&(O=B=0):(B&&O<(B?5:4)||O>=(B?4:3)&&")"===I&&--O<(B?5:4))&&(O=B=0)}}if(T!==y.length||D!==f.length){h.debug&&console.error('Trying to pattern match mis-matched strings ["'+f+'", "'+y+'"]')
l=s}if(l)if(x.length){h.debug&&console.log('Pattern found "'+l+'" -> ',x,F,"["+y+","+f+"]")
y=x
f=F
E=A=""}else l=s}if(!l){v=k(n,y)
y=v[0]
A=v[1]
v=k(n,f)
f=v[0].replace(/^([+-\/*])=/,(function(e,t){C=t
return""}))
E=v[1]
y=parseFloat(y)||0
f=parseFloat(f)||0
if("%"===E)if(/^(fontSize|lineHeight)$/.test(n)){f/=100
E="em"}else if(/^scale/.test(n)){f/=100
E=""}else if(/(Red|Green|Blue)$/i.test(n)){f=f/100*255
E=""}}var X=function(){var s={myParent:e.parentNode||a.body,position:w.getPropertyValue(e,"position"),fontSize:w.getPropertyValue(e,"fontSize")},n=s.position===L.lastPosition&&s.myParent===L.lastParent,i=s.fontSize===L.lastFontSize
L.lastParent=s.myParent
L.lastPosition=s.position
L.lastFontSize=s.fontSize
var r=100,o={}
if(i&&n){o.emToPx=L.lastEmToPx
o.percentToPxWidth=L.lastPercentToPxWidth
o.percentToPxHeight=L.lastPercentToPxHeight}else{var d=_&&_.isSVG?a.createElementNS("http://www.w3.org/2000/svg","rect"):a.createElement("div")
h.init(d)
s.myParent.appendChild(d)
c.each(["overflow","overflowX","overflowY"],(function(e,t){h.CSS.setPropertyValue(d,t,"hidden")}))
h.CSS.setPropertyValue(d,"position",s.position)
h.CSS.setPropertyValue(d,"fontSize",s.fontSize)
h.CSS.setPropertyValue(d,"boxSizing","content-box")
c.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],(function(e,t){h.CSS.setPropertyValue(d,t,r+"%")}))
h.CSS.setPropertyValue(d,"paddingLeft",r+"em")
o.percentToPxWidth=L.lastPercentToPxWidth=(parseFloat(w.getPropertyValue(d,"width",null,true))||1)/r
o.percentToPxHeight=L.lastPercentToPxHeight=(parseFloat(w.getPropertyValue(d,"height",null,true))||1)/r
o.emToPx=L.lastEmToPx=(parseFloat(w.getPropertyValue(d,"paddingLeft"))||1)/r
s.myParent.removeChild(d)}null===L.remToPx&&(L.remToPx=parseFloat(w.getPropertyValue(a.body,"fontSize"))||16)
if(null===L.vwToPx){L.vwToPx=parseFloat(t.innerWidth)/100
L.vhToPx=parseFloat(t.innerHeight)/100}o.remToPx=L.remToPx
o.vwToPx=L.vwToPx
o.vhToPx=L.vhToPx
h.debug>=1&&console.log("Unit ratios: "+JSON.stringify(o),e)
return o}
if(/[\/*]/.test(C))E=A
else if(A!==E&&0!==y)if(0===f)E=A
else{i=i||X()
var V=/margin|padding|left|right|width|text|word|letter/i.test(n)||/X$/.test(n)||"x"===n?"x":"y"
switch(A){case"%":y*="x"===V?i.percentToPxWidth:i.percentToPxHeight
break
case"px":break
default:y*=i[A+"ToPx"]}switch(E){case"%":y*=1/("x"===V?i.percentToPxWidth:i.percentToPxHeight)
break
case"px":break
default:y*=1/i[E+"ToPx"]}}switch(C){case"+":f=y+f
break
case"-":f=y-f
break
case"*":f*=y
break
case"/":f=y/f}o[n]={rootPropertyValue:g,startValue:y,currentValue:y,endValue:f,unitType:E,easing:b}
l&&(o[n].pattern=l)
h.debug&&console.log("tweensContainer ("+n+"): "+JSON.stringify(o[n]),e)}
for(var N in g){if(!g.hasOwnProperty(N))continue
var M=w.Names.camelCase(N),j=I(g[N])
if(u(w.Lists.colors,M)){var R=j[0],q=j[1],H=j[2]
if(w.RegEx.isHex.test(R)){var U=["Red","Green","Blue"],X=w.Values.hexToRgb(R),V=H?w.Values.hexToRgb(H):s
for(var W=0;W<U.length;W++){var G=[X[W]]
q&&G.push(q)
V!==s&&G.push(V[W])
z(M+U[W],G)}continue}}z(M,j)}o.element=e}if(o.element){w.Values.addClass(e,"velocity-animating")
P.push(o)
_=b(e)
if(_){if(""===r.queue){_.tweensContainer=o
_.opts=r}_.isAnimating=true}if(C===A-1){h.State.calls.push([P,l,r,null,E.resolver,null,0])
if(false===h.State.isTicking){h.State.isTicking=true
F()}}else C++}}if(false===r.queue)if(r.delay){var _=h.State.delayedElements.count++
h.State.delayedElements[_]=e
var y=(v=_,function(){h.State.delayedElements[v]=false
d()})
b(e).delayBegin=(new Date).getTime()
b(e).delay=parseFloat(r.delay)
b(e).delayTimer={setTimeout:setTimeout(d,parseFloat(r.delay)),next:y}}else d()
else c.queue(e,r.queue,(function(e,t){if(true===t){E.promise&&E.resolver(l)
return true}h.velocityQueueEntryFlag=true
d(e)}))
var v
""!==r.queue&&"fx"!==r.queue||"inprogress"===c.queue(e)[0]||c.dequeue(e)}c.each(l,(function(e,t){m.isNode(t)&&j(t,e)}))
e=c.extend({},h.defaults,f)
e.loop=parseInt(e.loop,10)
var R=2*e.loop-1
if(e.loop)for(var q=0;q<R;q++){var H={delay:e.delay,progress:e.progress}
if(q===R-1){H.display=e.display
H.visibility=e.visibility
H.complete=e.complete}T(l,"reverse",H)}return n()}
h=c.extend(T,h)
h.animate=T
var D=t.requestAnimationFrame||i
if(!h.State.isMobile&&a.hidden!==s){var x=function(){if(a.hidden){D=function(e){return setTimeout((function(){e(true)}),16)}
F()}else D=t.requestAnimationFrame||i}
x()
a.addEventListener("visibilitychange",x)}function F(e){if(e){var t=h.timestamp&&true!==e?e:o.now()
var a=h.State.calls.length
if(a>1e4){h.State.calls=d(h.State.calls)
a=h.State.calls.length}for(var i=0;i<a;i++){if(!h.State.calls[i])continue
var r=h.State.calls[i],l=r[0],u=r[2],_=r[3],g=!_,p=null,f=r[5],y=r[6]
_||(_=h.State.calls[i][3]=t-16)
if(f){if(true!==f.resume)continue
_=r[3]=Math.round(t-y-16)
r[5]=null}y=r[6]=t-_
var v=Math.min(y/u.duration,1)
for(var E=0,A=l.length;E<A;E++){var C=l[E],k=C.element
if(!b(k))continue
var T=false
if(u.display!==s&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var x=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"]
c.each(x,(function(e,t){w.setPropertyValue(k,"display",t)}))}w.setPropertyValue(k,"display",u.display)}u.visibility!==s&&"hidden"!==u.visibility&&w.setPropertyValue(k,"visibility",u.visibility)
for(var O in C)if(C.hasOwnProperty(O)&&"element"!==O){var B,I=C[O],z=m.isString(I.easing)?h.Easings[I.easing]:I.easing
if(m.isString(I.pattern)){var N=1===v?function(e,t,a){var s=I.endValue[t]
return a?Math.round(s):s}:function(e,t,a){var s=I.startValue[t],n=I.endValue[t]-s,i=s+n*z(v,u,n)
return a?Math.round(i):i}
B=I.pattern.replace(/{(\d+)(!)?}/g,N)}else if(1===v)B=I.endValue
else{var M=I.endValue-I.startValue
B=I.startValue+M*z(v,u,M)}if(!g&&B===I.currentValue)continue
I.currentValue=B
if("tween"===O)p=B
else{var L
if(w.Hooks.registered[O]){L=w.Hooks.getRoot(O)
var P=b(k).rootPropertyValueCache[L]
P&&(I.rootPropertyValue=P)}var j=w.setPropertyValue(k,O,I.currentValue+(n<9&&0===parseFloat(B)?"":I.unitType),I.rootPropertyValue,I.scrollData)
w.Hooks.registered[O]&&(w.Normalizations.registered[L]?b(k).rootPropertyValueCache[L]=w.Normalizations.registered[L]("extract",null,j[1]):b(k).rootPropertyValueCache[L]=j[1])
"transform"===j[0]&&(T=true)}}if(u.mobileHA&&b(k).transformCache.translate3d===s){b(k).transformCache.translate3d="(0px, 0px, 0px)"
T=true}T&&w.flushTransformCache(k)}u.display!==s&&"none"!==u.display&&(h.State.calls[i][2].display=false)
u.visibility!==s&&"hidden"!==u.visibility&&(h.State.calls[i][2].visibility=false)
u.progress&&u.progress.call(r[1],r[1],v,Math.max(0,_+u.duration-t),_,p)
1===v&&S(i)}}h.State.isTicking&&D(F)}function S(e,t){if(!h.State.calls[e])return false
var a=h.State.calls[e][0],n=h.State.calls[e][1],i=h.State.calls[e][2],r=h.State.calls[e][4]
var o=false
for(var d=0,l=a.length;d<l;d++){var u=a[d].element
if(!t&&!i.loop){"none"===i.display&&w.setPropertyValue(u,"display",i.display)
"hidden"===i.visibility&&w.setPropertyValue(u,"visibility",i.visibility)}var _=b(u)
if(true!==i.loop&&(c.queue(u)[1]===s||!/\.velocityQueueEntryFlag/i.test(c.queue(u)[1]))&&_){_.isAnimating=false
_.rootPropertyValueCache={}
var m=false
c.each(w.Lists.transforms3D,(function(e,t){var a=/^scale/.test(t)?1:0,n=_.transformCache[t]
if(_.transformCache[t]!==s&&new RegExp("^\\("+a+"[^.]").test(n)){m=true
delete _.transformCache[t]}}))
if(i.mobileHA){m=true
delete _.transformCache.translate3d}m&&w.flushTransformCache(u)
w.Values.removeClass(u,"velocity-animating")}if(!t&&i.complete&&!i.loop&&d===l-1)try{i.complete.call(n,n)}catch(e){setTimeout((function(){throw e}),1)}r&&true!==i.loop&&r(n)
if(_&&true===i.loop&&!t){c.each(_.tweensContainer,(function(e,t){if(/^rotate/.test(e)&&(parseFloat(t.startValue)-parseFloat(t.endValue))%360===0){var a=t.startValue
t.startValue=t.endValue
t.endValue=a}if(/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType){t.endValue=0
t.startValue=100}}))
h(u,"reverse",{loop:true,delay:i.delay})}false!==i.queue&&c.dequeue(u,i.queue)}h.State.calls[e]=false
for(var g=0,p=h.State.calls.length;g<p;g++)if(false!==h.State.calls[g]){o=true
break}if(false===o){h.State.isTicking=false
delete h.State.calls
h.State.calls=[]}}e.Velocity=h
if(e!==t){e.fn.velocity=T
e.fn.velocity.defaults=h.defaults}c.each(["Down","Up"],(function(e,t){h.Redirects["slide"+t]=function(e,a,n,i,r,o){var d=c.extend({},a),l=d.begin,u=d.complete,_={},m={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""}
d.display===s&&(d.display="Down"===t?"inline"===h.CSS.Values.getDisplayType(e)?"inline-block":"block":"none")
d.begin=function(){0===n&&l&&l.call(r,r)
for(var a in m){if(!m.hasOwnProperty(a))continue
_[a]=e.style[a]
var s=w.getPropertyValue(e,a)
m[a]="Down"===t?[s,0]:[0,s]}_.overflow=e.style.overflow
e.style.overflow="hidden"}
d.complete=function(){for(var t in _)_.hasOwnProperty(t)&&(e.style[t]=_[t])
if(n===i-1){u&&u.call(r,r)
o&&o.resolver(r)}}
h(e,m,d)}}))
c.each(["In","Out"],(function(e,t){h.Redirects["fade"+t]=function(e,a,n,i,r,o){var d=c.extend({},a),l=d.complete,u={opacity:"In"===t?1:0}
0!==n&&(d.begin=null)
d.complete=n!==i-1?null:function(){l&&l.call(r,r)
o&&o.resolver(r)}
d.display===s&&(d.display="In"===t?"auto":"none")
h(this,u,d)}}))
return h}(window.jQuery||window.Zepto||window,window,window?window.document:void 0)}))},Wg0N:function(e,t,a){var s=a("jDM7")
e.exports=function(e,t){if(null==e)return""
e=String(e)
return s(e.charAt(0),t)+e.substr(1)}},Wklf:function(e,t){e.exports=/([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A])([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A][a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A])/g},XFP0:function(e){e.exports=JSON.parse('{"add_to_do_7537af64":{"message":"Ajouter aux tâches à faire"},"add_to_do_7def3c37":{"message":"Ajouter à faire"},"address_3159962f":{"message":"Adresse :"},"all_day_fb42c4fc":{"message":"Toute la journée"},"all_items_loaded_aa256183":{"message":"Tous les éléments ont été chargés"},"an_error_occurred_attempting_to_dismiss_the_opport_f86e0667":{"message":"Une erreur s\'\'est produite lors de la tentative de rejet de l\'\'opportunité."},"announcement_fb4cb645":{"message":"Annonce"},"are_you_sure_you_want_to_delete_this_planner_item_b71e330c":{"message":"Êtes-vous sûr de vouloir supprimer cet élément de planificateur ?"},"assignment_976578a8":{"message":"Travaux"},"assignmenttype_title_6612d008":{"message":"{ assignmentType } { title }."},"assignmenttype_title_all_day_on_datetime_9768903c":{"message":"{ assignmentType } { title }, toute la journée le { datetime }."},"assignmenttype_title_at_datetime_478f0709":{"message":"{ assignmentType } { title }, à { datetime }."},"assignmenttype_title_at_datetime_until_endtime_a5900e38":{"message":"{ assignmentType } { title }, à { datetime } jusqu\'\'à { endTime }"},"assignmenttype_title_due_datetime_a112d8ff":{"message":"{ assignmentType } { title }, à rendre le { datetime }."},"assignmenttype_title_has_a_to_do_time_at_datetime_e07310e8":{"message":"{ assignmentType } { title } a un temps à faire à { datetime }."},"assignmenttype_title_is_marked_as_done_a8dc46ef":{"message":"{ assignmentType } { title } est marqué comme étant fait."},"assignmenttype_title_is_not_marked_as_done_ba80ba66":{"message":"{ assignmentType } { title } n\'\'est pas marqué comme étant fait."},"assignmenttype_title_posted_datetime_cab69444":{"message":"{ assignmentType } { title } publié { datetime }."},"assignmenttype_title_reminder_datetime_33fa66d5":{"message":"{ assignmentType } { title }, rappel { datetime }."},"beginning_of_your_to_do_history_61ef2dce":{"message":"Début de votre historique des choses à faire"},"calendar_a8563bb2":{"message":"Calendrier :"},"calendar_event_89aadc1c":{"message":"Événement de calendrier"},"canvas_planner_98ed106":{"message":"Agenda Canvas"},"close_d634289d":{"message":"Fermer"},"close_opportunity_center_popup_9907d981":{"message":"Fermer la fenêtre pop-up du centre d\'\'opportunités"},"count_plural_0_opportunities_one_opportunity_other_765e27fa":{"message":"{ count, plural,\\n     =0 {# opportunités}\\n    one {# opportunité}\\n  other {# opportunités}\\n}"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {Afficher # l\'\'élément terminé}\\n  other {Afficher # les éléments terminés}\\n}"},"course_8a63b4a3":{"message":"Cours"},"course_to_do_bcbbab54":{"message":"{ course } À FAIRE"},"date_at_time_dbdb1b99":{"message":"le { date } à { time }"},"date_ee500367":{"message":"Date"},"date_is_not_a_valid_date_4ef9f8ba":{"message":"#{ date } n\'\'est pas une date valide."},"date_is_required_8660ec22":{"message":"Une date est requise"},"date_time_d9fbf2d7":{"message":"Date et heure :"},"delete_a6efa79d":{"message":"Supprimer"},"details_98a31b68":{"message":"Détails"},"details_a6f427c3":{"message":"Détails :"},"discussion_6719c51d":{"message":"Discussion"},"dismiss_itemtitle_a9fae1b3":{"message":"Rejeter { itemTitle }"},"dismiss_opportunityname_5995176f":{"message":"Rejeter { opportunityName }"},"dismissed_8b0b1fc9":{"message":"Rejeté"},"dismissed_opportunities_f0826640":{"message":"Occasions rejetées"},"due_5d7267be":{"message":"À rendre le :"},"due_date_124fdd99":{"message":"À rendre le : { date }"},"edit_c5fbea07":{"message":"Modifier"},"edit_title_72e5a21e":{"message":"Modifier { title }"},"error_loading_grades_e0b38f4d":{"message":"Erreur de chargement des notes"},"error_loading_more_items_3f109d9f":{"message":"Erreur lors du chargement des éléments supplémentaires"},"error_loading_past_items_2881dbb1":{"message":"Erreur lors du chargement des éléments passés"},"excused_cf8792eb":{"message":"Excusé"},"failed_to_delete_to_do_64edff49":{"message":"Échec de la suppression de la chose à faire"},"failed_to_get_new_activity_17e7ec7c":{"message":"Échec de la récupération de nouvelles activités"},"failed_to_load_opportunities_52ab6404":{"message":"Échec du chargement des opportunités"},"failed_to_save_to_do_ddc7503b":{"message":"Échec de l\'\'enregistrement de la chose à faire"},"feedback_6dcc1991":{"message":"Commentaire"},"go_to_card_view_dashboard_9d03970e":{"message":"Aller au tableau de bord Carte affichage"},"graded_25cd3fcd":{"message":"Noté"},"grades_are_loading_c899652d":{"message":"Les notes sont en train de charger"},"grades_loaded_5056277c":{"message":"Notes chargées"},"items_completed_items_plural_1_item_other_items_717d579f":{"message":"{ items } terminé(s) { items, plural,\\n     =1 {élément}\\n  other {éléments}\\n}"},"late_2be42b88":{"message":"En retard"},"list_collapsed_9ac35920":{"message":"Liste réduite."},"list_collapsed_dde87718":{"message":"Liste réduite"},"list_expanded_efec2d0":{"message":"Liste étendue."},"load_more_a36f9cf9":{"message":"En charger plus"},"load_prior_dates_f2b0f6f0":{"message":"Charger les dates précédentes"},"loaded_count_plural_0_items_one_item_other_items_e58533e9":{"message":"Chargé(s) { count, plural,\\n     =0 {# éléments}\\n    one {# élément}\\n  other {# éléments}\\n}"},"loading_25990131":{"message":"Chargement..."},"loading_725811ca":{"message":"chargement"},"loading_grades_c842c887":{"message":"Chargement des notes"},"loading_past_items_ca499e75":{"message":"Charger les éléments passés"},"loading_planner_items_947a813d":{"message":"Téléchargement des éléments de l\'\'agenda"},"location_3b6ff307":{"message":"Lieu :"},"looks_like_there_isn_t_anything_here_d9bcef49":{"message":"Apparemment, il n\'\'y a rien ici."},"missing_1a256b3b":{"message":"Manquant"},"missing_items_for_title_516511f8":{"message":"Éléments manquants pour { title }"},"my_grades_98834476":{"message":"Mes notes"},"new_13daf639":{"message":"Nouveau"},"new_activity_8b84847d":{"message":"Nouvelle activité"},"new_activity_for_title_14c9c3af":{"message":"Nouvelle activité pour { title }"},"new_opportunities_7d349c4d":{"message":"Nouvelles opportunités"},"next_month_749b1778":{"message":"Mois suivant"},"no_due_dates_assigned_e8f5bac8":{"message":"Pas de dates limites de rendu"},"no_grade_3b4d7f3e":{"message":"Aucune note"},"nothing_for_now_e3e3ce2a":{"message":"Rien pour l’instant"},"nothing_here_needs_attention_c4eaded6":{"message":"Rien ici n\'\'a besoin d\'\'attention."},"nothing_more_to_do_b665da42":{"message":"Rien d’autre à faire"},"nothing_new_needs_attention_3ac548d4":{"message":"Aucune nouvelle info nécessitant votre attention"},"nothing_planned_today_selecting_most_recent_item_ffd71bff":{"message":"Rien de prévu aujourd\'\'hui. Sélectionner l\'\'élément le plus récent."},"nothing_planned_today_selecting_next_item_f6718aa":{"message":"Rien de prévu aujourd\'\'hui. Sélection de l\'\'élément suivant"},"nothing_planned_yet_8675ffe9":{"message":"Rien de prévu pour l\'\'instant"},"numpoints_points_8621a43b":{"message":"{ numPoints } points"},"only_most_recent_grading_period_shown_f1ad6458":{"message":"*Seule la période de notation la plus récente est indiquée."},"opportunities_popup_f6703842":{"message":"opportunités pop-up"},"option_selected_list_collapsed_e00180ff":{"message":"{ option } sélectionné. Liste réduite."},"optional_add_course_ef0d70fc":{"message":"Facultatif : Ajouter un cours"},"page_50c4823d":{"message":"Page"},"peer_review_74f26a13":{"message":"Révision par les pairs"},"peer_review_for_itemtitle_358cb413":{"message":"Correction par un pair pour { itemTitle }"},"points_bceb5005":{"message":"points"},"points_points_63e59cce":{"message":"{ points } points"},"previous_month_bb1e3c84":{"message":"Mois précédent"},"pts_699bd9aa":{"message":"pts"},"quiz_e0dcce8f":{"message":"Questionnaire"},"reminder_date_4564d12d":{"message":"Rappel : { date }"},"replies_4a8577c8":{"message":"Réponses"},"save_11a80ec3":{"message":"Enregistrer"},"scroll_up_to_see_your_history_19b14cad":{"message":"Faites défiler vers le haut pour voir votre histoire !"},"scrolls_up_to_the_previous_item_with_new_activity_99717459":{"message":"Fait défiler jusqu\'\'à l\'\'élément précédent avec une nouvelle activité."},"show_all_ae37d610":{"message":"Tout montrer"},"show_my_grades_ebd08684":{"message":"Afficher mes notes"},"startdate_to_enddate_d245175b":{"message":"{ startDate } à { endDate }"},"startdatetime_enddatetime_20abc10e":{"message":"{ startDateTime } - { endDateTime }"},"startdatetime_endtime_49741bbe":{"message":"{ startDateTime } - { endTime }"},"starttime_to_endtime_d7cc249d":{"message":"{ startTime } à { endTime }"},"submitted_318fad53":{"message":"Soumis"},"success_to_do_created_e34ed395":{"message":"Opération réussie : À faire créé"},"task_16b0ef38":{"message":"Tâche"},"the_date_and_time_this_to_do_is_due_74c823d4":{"message":"La date et l\'\'heure à laquelle cela doit être fait est passé."},"there_are_no_points_associated_with_this_item_449c712a":{"message":"Il n\'\'y a aucun point associé à cet article"},"time_2b5aac58":{"message":"Temps"},"title_ee03d132":{"message":"Titre"},"title_is_required_6ddcab69":{"message":"titre est obligatoire"},"to_do_1d554f36":{"message":"À faire"},"to_do_date_4b211ad0":{"message":"À faire : { date }"},"to_do_items_loading_d1cdfcd5":{"message":"Chargement des éléments de choses à faire"},"today_76e10f9c":{"message":"Aujourd’hui"},"today_at_date_8ac30d6":{"message":"Aujourd\'\'hui à { date }"},"tomorrow_9a6c9a00":{"message":"Demain"},"tomorrow_at_date_b53f2cf1":{"message":"Demain à { date }"},"unable_to_mark_as_complete_8141856d":{"message":"Impossible de marquer comme terminé."},"use_arrow_keys_to_navigate_options_2021cc50":{"message":"Utilisez les touches fléchées pour naviguer dans les options."},"yesterday_at_date_1aa6d18e":{"message":"Hier à { date }"},"yesterday_c6bd6abf":{"message":"Hier"},"you_have_media_feedback_f5f9aba8":{"message":"Vous avez des réactions sur les médias."},"you_must_provide_a_date_and_time_a86839d2":{"message":"Vous devez introduire une date et une heure."},"you_ve_scrolled_back_to_your_very_first_to_do_29374681":{"message":"Vous êtes revenu à votre toute première chose à faire."}}')},XGBb:function(e,t,a){var s=a("wd/R")
var n=a("c6aN")
var i=a("iNdV")
e.exports={momentObj:i.createMomentChecker("object",(function(e){return"object"===typeof e}),(function(e){return n.isValidMoment(e)}),"Moment"),momentString:i.createMomentChecker("string",(function(e){return"string"===typeof e}),(function(e){return n.isValidMoment(s(e))}),"Moment"),momentDurationObj:i.createMomentChecker("object",(function(e){return"object"===typeof e}),(function(e){return s.isDuration(e)}),"Duration")}},YKwf:function(e){e.exports=JSON.parse('{"add_to_do_7537af64":{"message":"添加到待辦事項"},"add_to_do_7def3c37":{"message":"添加到待辦事項"},"address_3159962f":{"message":"地址："},"all_day_fb42c4fc":{"message":"全天"},"all_items_loaded_aa256183":{"message":"所有載入項目"},"an_error_occurred_attempting_to_dismiss_the_opport_f86e0667":{"message":"嘗試放棄機會時發生錯誤。"},"announcement_fb4cb645":{"message":"通告"},"are_you_sure_you_want_to_delete_this_planner_item_b71e330c":{"message":"是否確定要刪除此手冊項目？"},"assignment_976578a8":{"message":"作業"},"assignmenttype_title_6612d008":{"message":"{ assignmentType } { title }。"},"assignmenttype_title_all_day_on_datetime_9768903c":{"message":"{ assignmentType } { title }，{ datetime } 全天。"},"assignmenttype_title_at_datetime_478f0709":{"message":"{ assignmentType } { title }，時間 { datetime }。"},"assignmenttype_title_at_datetime_until_endtime_a5900e38":{"message":"{ assignmentType } { title }，從 { datetime } 至 { endTime }"},"assignmenttype_title_due_datetime_a112d8ff":{"message":"{ assignmentType } { title }，截止日期 { datetime }。"},"assignmenttype_title_has_a_to_do_time_at_datetime_e07310e8":{"message":"{ assignmentType } { title } 的待辦時間為 { datetime }。"},"assignmenttype_title_is_marked_as_done_a8dc46ef":{"message":"{ assignmentType } { title } 被標記為完成。"},"assignmenttype_title_is_not_marked_as_done_ba80ba66":{"message":"{ assignmentType } { title } 未被標記為完成。"},"assignmenttype_title_posted_datetime_cab69444":{"message":"{ assignmentType } { title } 已於 { datetime } 公佈。"},"assignmenttype_title_reminder_datetime_33fa66d5":{"message":"{ assignmentType } { title }，提醒 { datetime }。"},"beginning_of_your_to_do_history_61ef2dce":{"message":"開始您的待辦事項歷程紀錄"},"calendar_a8563bb2":{"message":"行事曆："},"calendar_event_89aadc1c":{"message":"行事曆活動"},"canvas_planner_98ed106":{"message":"Canvas 手冊"},"close_d634289d":{"message":"關閉"},"close_opportunity_center_popup_9907d981":{"message":"關閉機會中心彈出視窗"},"count_plural_0_opportunities_one_opportunity_other_765e27fa":{"message":"{ count, plural,\\n     =0 {# 機會}\\n    one {# 機會}\\n  other {# 機會}\\n}"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {顯示 # 個已完成項目}\\n  other {顯示 # 個已完成項目}\\n}"},"course_8a63b4a3":{"message":"課程"},"course_to_do_bcbbab54":{"message":"{ course } 待辦事項"},"date_at_time_dbdb1b99":{"message":"日期 { date }，時間 { time }"},"date_ee500367":{"message":"日期"},"date_is_not_a_valid_date_4ef9f8ba":{"message":"#{ date } 不是有效日期。"},"date_is_required_8660ec22":{"message":"日期為必填"},"date_time_d9fbf2d7":{"message":"日期和時間："},"delete_a6efa79d":{"message":"刪除"},"details_98a31b68":{"message":"詳細資料"},"details_a6f427c3":{"message":"詳細資料："},"discussion_6719c51d":{"message":"討論"},"dismiss_itemtitle_a9fae1b3":{"message":"忽略 { itemTitle }"},"dismiss_opportunityname_5995176f":{"message":"忽略 { opportunityName }"},"dismissed_8b0b1fc9":{"message":"已忽略"},"dismissed_opportunities_f0826640":{"message":"已忽略的機會"},"due_5d7267be":{"message":"截止日期："},"due_date_124fdd99":{"message":"截止日期：{ date }"},"edit_c5fbea07":{"message":"編輯"},"edit_title_72e5a21e":{"message":"編輯 { title }"},"error_loading_grades_e0b38f4d":{"message":"載入成績時發生錯誤"},"error_loading_more_items_3f109d9f":{"message":"載入更多項目時發生錯誤"},"error_loading_past_items_2881dbb1":{"message":"載入過去項目時發生錯誤"},"excused_cf8792eb":{"message":"已免除"},"failed_to_delete_to_do_64edff49":{"message":"未能刪除待辦事項"},"failed_to_get_new_activity_17e7ec7c":{"message":"未能取得最新活動"},"failed_to_load_opportunities_52ab6404":{"message":"未能載入機會"},"failed_to_save_to_do_ddc7503b":{"message":"未能儲存待辦事項"},"feedback_6dcc1991":{"message":"反饋"},"go_to_card_view_dashboard_9d03970e":{"message":"前往卡視圖控制面板"},"graded_25cd3fcd":{"message":"已評分"},"grades_are_loading_c899652d":{"message":"正在載入成績"},"grades_loaded_5056277c":{"message":"已載入成績"},"items_completed_items_plural_1_item_other_items_717d579f":{"message":"{ items } 已完成 { items, plural,\\n     =1 { 個項目}\\n  other { 個項目}\\n}"},"late_2be42b88":{"message":"逾期"},"list_collapsed_9ac35920":{"message":"名單收起。"},"list_collapsed_dde87718":{"message":"名單收起"},"list_expanded_efec2d0":{"message":"名單展開。"},"load_more_a36f9cf9":{"message":"載入更多"},"load_prior_dates_f2b0f6f0":{"message":"載入先前日期"},"loaded_count_plural_0_items_one_item_other_items_e58533e9":{"message":"已載入 { count, plural,\\n     =0 {# 個項目}\\n    one {# 個項目}\\n  other {# 個項目}\\n}"},"loading_25990131":{"message":"正在載入……"},"loading_725811ca":{"message":"正在載入"},"loading_grades_c842c887":{"message":"正在載入成績"},"loading_past_items_ca499e75":{"message":"正在載入先前項目"},"loading_planner_items_947a813d":{"message":"正在載入手冊項目"},"location_3b6ff307":{"message":"位置："},"looks_like_there_isn_t_anything_here_d9bcef49":{"message":"看來這里甚麼也沒有"},"missing_1a256b3b":{"message":"缺失"},"missing_items_for_title_516511f8":{"message":"{ title } 的缺失項目"},"my_grades_98834476":{"message":"我的成績"},"new_13daf639":{"message":"新"},"new_activity_8b84847d":{"message":"新活動"},"new_activity_for_title_14c9c3af":{"message":"{ title } 的新活動"},"new_opportunities_7d349c4d":{"message":"新機會"},"next_month_749b1778":{"message":"下個月"},"no_due_dates_assigned_e8f5bac8":{"message":"無指定截止日期"},"no_grade_3b4d7f3e":{"message":"無評分"},"nothing_for_now_e3e3ce2a":{"message":"未有內容"},"nothing_here_needs_attention_c4eaded6":{"message":"這裡暫無事項。"},"nothing_more_to_do_b665da42":{"message":"沒有待辦事項"},"nothing_new_needs_attention_3ac548d4":{"message":"暫無新事項。"},"nothing_planned_today_selecting_most_recent_item_ffd71bff":{"message":"本日沒有計劃。正在選取最新項目。"},"nothing_planned_today_selecting_next_item_f6718aa":{"message":"本日沒有計劃。正在選取下一項目。"},"nothing_planned_yet_8675ffe9":{"message":"沒有計劃"},"numpoints_points_8621a43b":{"message":"{ numPoints } 分"},"only_most_recent_grading_period_shown_f1ad6458":{"message":"*只顯示最近的評分期。"},"opportunities_popup_f6703842":{"message":"機會彈出視窗"},"option_selected_list_collapsed_e00180ff":{"message":"已選擇 { option }。名單收起。"},"optional_add_course_ef0d70fc":{"message":"可選：添加課程"},"page_50c4823d":{"message":"頁面"},"peer_review_74f26a13":{"message":"同儕互評"},"peer_review_for_itemtitle_358cb413":{"message":"{ itemTitle } 的同儕互評"},"points_bceb5005":{"message":"分數"},"points_points_63e59cce":{"message":"{ points } 分"},"previous_month_bb1e3c84":{"message":"上個月"},"pts_699bd9aa":{"message":"分數"},"quiz_e0dcce8f":{"message":"測驗"},"reminder_date_4564d12d":{"message":"提醒：{ date }"},"replies_4a8577c8":{"message":"回覆"},"save_11a80ec3":{"message":"儲存"},"scroll_up_to_see_your_history_19b14cad":{"message":"向上捲動以查看您的歷程記錄！"},"scrolls_up_to_the_previous_item_with_new_activity_99717459":{"message":"向上捲動至有新活動的過去項目。"},"show_all_ae37d610":{"message":"全部顯示"},"show_my_grades_ebd08684":{"message":"顯示我的成績"},"startdate_to_enddate_d245175b":{"message":"{ startDate } 至 { endDate }"},"startdatetime_enddatetime_20abc10e":{"message":"{ startDateTime } - { endDateTime }"},"startdatetime_endtime_49741bbe":{"message":"{ startDateTime } - { endTime }"},"starttime_to_endtime_d7cc249d":{"message":"{ startTime } 至 { endTime }"},"submitted_318fad53":{"message":"已提交"},"success_to_do_created_e34ed395":{"message":"成功：創建待辦事項"},"task_16b0ef38":{"message":"任務"},"the_date_and_time_this_to_do_is_due_74c823d4":{"message":"待辦日期和時間到期"},"there_are_no_points_associated_with_this_item_449c712a":{"message":"沒有與此項目關聯的分數。"},"time_2b5aac58":{"message":"時間"},"title_ee03d132":{"message":"標題"},"title_is_required_6ddcab69":{"message":"標題為必填"},"to_do_1d554f36":{"message":"待辦事項"},"to_do_date_4b211ad0":{"message":"待辦事項：{ date }"},"to_do_items_loading_d1cdfcd5":{"message":"正在載入待辦事項"},"today_76e10f9c":{"message":"今天"},"today_at_date_8ac30d6":{"message":"今天 { date }"},"tomorrow_9a6c9a00":{"message":"明天"},"tomorrow_at_date_b53f2cf1":{"message":"明天 { date }"},"unable_to_mark_as_complete_8141856d":{"message":"無法標記為完成。"},"use_arrow_keys_to_navigate_options_2021cc50":{"message":"使用箭頭鍵導航選項。"},"yesterday_at_date_1aa6d18e":{"message":"昨天 { date }"},"yesterday_c6bd6abf":{"message":"昨天"},"you_have_media_feedback_f5f9aba8":{"message":"您有媒體反饋。"},"you_must_provide_a_date_and_time_a86839d2":{"message":"您必須提供日期和時間。"},"you_ve_scrolled_back_to_your_very_first_to_do_29374681":{"message":"您已然回到您的第一個待辦事項！"}}')},YeH6:function(e,t,a){"use strict"
var s=a("rePB")
var n=a("1OyB")
var i=a("vuIU")
var r=a("md7G")
var o=a("foSv")
var d=a("Ji7U")
a("DEX3")
var l=a("q1tI")
var u=a.n(l)
var _=a("17x9")
var m=a.n(_)
var c=a("TSYQ")
var g=a.n(c)
var p=a("n12J")
var f=a("J2CL")
var h=a("oXx0")
var b=a("jtGx")
function y(e){var t=e.borders,a=e.colors,s=e.spacing,n=e.typography
return{fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,lineHeight:n.lineHeight,fontSizeSmall:n.fontSizeSmall,fontSizeMedium:n.fontSizeMedium,fontSizeLarge:n.fontSizeLarge,color:a.textDarkest,inlineColor:a.textDark,inlineLineHeight:n.lineHeightCondensed,noneSpacing:s.xSmall,pipeSpacing:s.xSmall,slashSpacing:s.xxxSmall,arrowSpacing:s.xSmall,marginBottomDefault:s.xxxSmall,spacingXXXSmall:s.xxxSmall,spacingXXSmall:s.xxSmall,spacingXSmall:s.xSmall,spacingSmall:s.small,spacingMedium:s.medium,spacingLarge:s.large,spacingXLarge:s.xLarge,spacingXXLarge:s.xxLarge,delimiterDashedBorder:"".concat(t.widthSmall," dashed ").concat(a.borderMedium),delimiterSolidBorder:"".concat(t.widthSmall," solid ").concat(a.borderMedium)}}y.canvas=function(e){return{color:e["ic-brand-font-color-dark"]}}
a.d(t,"a",(function(){return T}))
var v,E,A,C,k
var w={componentId:"dxCCp",template:function(e){return"\n\n.dxCCp_bGBk{color:".concat(e.color||"inherit",";font-family:").concat(e.fontFamily||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";line-height:").concat(e.lineHeight||"inherit",";padding:0}\n\n.dxCCp_eXrk{box-sizing:border-box;color:").concat(e.inlineColor||"inherit",";display:inline-block;font-size:").concat(e.fontSizeSmall||"inherit",";line-height:").concat(e.inlineLineHeight||"inherit",";max-width:100%;vertical-align:middle}\n\n.dxCCp_eXrk:first-of-type{-webkit-margin-start:0;margin-inline-start:0}\n\n[dir=ltr] .dxCCp_eXrk:first-of-type{margin-left:0}\n\n[dir=rtl] .dxCCp_eXrk:first-of-type{margin-right:0}\n\n.dxCCp_eXrk:last-of-type{-webkit-margin-end:0;margin-inline-end:0}\n\n[dir=ltr] .dxCCp_eXrk:last-of-type{margin-right:0}\n\n[dir=rtl] .dxCCp_eXrk:last-of-type{margin-left:0}\n\n.dxCCp_eXrk:last-of-type .dxCCp_eLRq:after{content:none}\n\n.dxCCp_eXrk.dxCCp_bwkW{-webkit-margin-end:").concat(e.spacingXXXSmall||"inherit",";-webkit-margin-start:").concat(e.spacingXXXSmall||"inherit",";margin-inline-end:").concat(e.spacingXXXSmall||"inherit",";margin-inline-start:").concat(e.spacingXXXSmall||"inherit","}\n\n[dir=ltr] .dxCCp_eXrk.dxCCp_bwkW{margin-left:").concat(e.spacingXXXSmall||"inherit",";margin-right:").concat(e.spacingXXXSmall||"inherit","}\n\n[dir=rtl] .dxCCp_eXrk.dxCCp_bwkW{margin-left:").concat(e.spacingXXXSmall||"inherit",";margin-right:").concat(e.spacingXXXSmall||"inherit","}\n\n.dxCCp_eXrk.dxCCp_fBtB{-webkit-margin-end:").concat(e.spacingXXSmall||"inherit",";-webkit-margin-start:").concat(e.spacingXXSmall||"inherit",";margin-inline-end:").concat(e.spacingXXSmall||"inherit",";margin-inline-start:").concat(e.spacingXXSmall||"inherit","}\n\n[dir=ltr] .dxCCp_eXrk.dxCCp_fBtB{margin-left:").concat(e.spacingXXSmall||"inherit",";margin-right:").concat(e.spacingXXSmall||"inherit","}\n\n[dir=rtl] .dxCCp_eXrk.dxCCp_fBtB{margin-left:").concat(e.spacingXXSmall||"inherit",";margin-right:").concat(e.spacingXXSmall||"inherit","}\n\n.dxCCp_eXrk.dxCCp_bFmZ{-webkit-margin-end:").concat(e.spacingXSmall||"inherit",";-webkit-margin-start:").concat(e.spacingXSmall||"inherit",";margin-inline-end:").concat(e.spacingXSmall||"inherit",";margin-inline-start:").concat(e.spacingXSmall||"inherit","}\n\n[dir=ltr] .dxCCp_eXrk.dxCCp_bFmZ{margin-left:").concat(e.spacingXSmall||"inherit",";margin-right:").concat(e.spacingXSmall||"inherit","}\n\n[dir=rtl] .dxCCp_eXrk.dxCCp_bFmZ{margin-left:").concat(e.spacingXSmall||"inherit",";margin-right:").concat(e.spacingXSmall||"inherit","}\n\n.dxCCp_eXrk.dxCCp_bCcs{-webkit-margin-end:").concat(e.spacingSmall||"inherit",";-webkit-margin-start:").concat(e.spacingSmall||"inherit",";margin-inline-end:").concat(e.spacingSmall||"inherit",";margin-inline-start:").concat(e.spacingSmall||"inherit","}\n\n[dir=ltr] .dxCCp_eXrk.dxCCp_bCcs{margin-left:").concat(e.spacingSmall||"inherit",";margin-right:").concat(e.spacingSmall||"inherit","}\n\n[dir=rtl] .dxCCp_eXrk.dxCCp_bCcs{margin-left:").concat(e.spacingSmall||"inherit",";margin-right:").concat(e.spacingSmall||"inherit","}\n\n.dxCCp_eXrk.dxCCp_cYsY{-webkit-margin-end:").concat(e.spacingMedium||"inherit",";-webkit-margin-start:").concat(e.spacingMedium||"inherit",";margin-inline-end:").concat(e.spacingMedium||"inherit",";margin-inline-start:").concat(e.spacingMedium||"inherit","}\n\n[dir=ltr] .dxCCp_eXrk.dxCCp_cYsY{margin-left:").concat(e.spacingMedium||"inherit",";margin-right:").concat(e.spacingMedium||"inherit","}\n\n[dir=rtl] .dxCCp_eXrk.dxCCp_cYsY{margin-left:").concat(e.spacingMedium||"inherit",";margin-right:").concat(e.spacingMedium||"inherit","}\n\n.dxCCp_eXrk.dxCCp_cpQM{-webkit-margin-end:").concat(e.spacingLarge||"inherit",";-webkit-margin-start:").concat(e.spacingLarge||"inherit",";margin-inline-end:").concat(e.spacingLarge||"inherit",";margin-inline-start:").concat(e.spacingLarge||"inherit","}\n\n[dir=ltr] .dxCCp_eXrk.dxCCp_cpQM{margin-left:").concat(e.spacingLarge||"inherit",";margin-right:").concat(e.spacingLarge||"inherit","}\n\n[dir=rtl] .dxCCp_eXrk.dxCCp_cpQM{margin-left:").concat(e.spacingLarge||"inherit",";margin-right:").concat(e.spacingLarge||"inherit","}\n\n.dxCCp_eXrk.dxCCp_baAf{-webkit-margin-end:").concat(e.spacingXLarge||"inherit",";-webkit-margin-start:").concat(e.spacingXLarge||"inherit",";margin-inline-end:").concat(e.spacingXLarge||"inherit",";margin-inline-start:").concat(e.spacingXLarge||"inherit","}\n\n[dir=ltr] .dxCCp_eXrk.dxCCp_baAf{margin-left:").concat(e.spacingXLarge||"inherit",";margin-right:").concat(e.spacingXLarge||"inherit","}\n\n[dir=rtl] .dxCCp_eXrk.dxCCp_baAf{margin-left:").concat(e.spacingXLarge||"inherit",";margin-right:").concat(e.spacingXLarge||"inherit","}\n\n.dxCCp_eXrk.dxCCp_bNHb{-webkit-margin-end:").concat(e.spacingXXLarge||"inherit",";-webkit-margin-start:").concat(e.spacingXXLarge||"inherit",";margin-inline-end:").concat(e.spacingXXLarge||"inherit",";margin-inline-start:").concat(e.spacingXXLarge||"inherit","}\n\n[dir=ltr] .dxCCp_eXrk.dxCCp_bNHb{margin-left:").concat(e.spacingXXLarge||"inherit",";margin-right:").concat(e.spacingXXLarge||"inherit","}\n\n[dir=rtl] .dxCCp_eXrk.dxCCp_bNHb{margin-left:").concat(e.spacingXXLarge||"inherit",";margin-right:").concat(e.spacingXXLarge||"inherit","}\n\n.dxCCp_eXrk.dxCCp_cfzP .dxCCp_eLRq{-webkit-margin-end:").concat(e.noneSpacing||"inherit",";-webkit-margin-start:").concat(e.noneSpacing||"inherit",";margin-inline-end:").concat(e.noneSpacing||"inherit",";margin-inline-start:").concat(e.noneSpacing||"inherit","}\n\n[dir=ltr] .dxCCp_eXrk.dxCCp_cfzP .dxCCp_eLRq{margin-left:").concat(e.noneSpacing||"inherit",";margin-right:").concat(e.noneSpacing||"inherit","}\n\n[dir=rtl] .dxCCp_eXrk.dxCCp_cfzP .dxCCp_eLRq{margin-left:").concat(e.noneSpacing||"inherit",";margin-right:").concat(e.noneSpacing||"inherit","}\n\n.dxCCp_eXrk.dxCCp_dnHs .dxCCp_eLRq{-webkit-margin-end:").concat(e.pipeSpacing||"inherit",";-webkit-margin-start:").concat(e.pipeSpacing||"inherit",";margin-inline-end:").concat(e.pipeSpacing||"inherit",";margin-inline-start:").concat(e.pipeSpacing||"inherit","}\n\n[dir=ltr] .dxCCp_eXrk.dxCCp_dnHs .dxCCp_eLRq{margin-left:").concat(e.pipeSpacing||"inherit",";margin-right:").concat(e.pipeSpacing||"inherit","}\n\n[dir=rtl] .dxCCp_eXrk.dxCCp_dnHs .dxCCp_eLRq{margin-left:").concat(e.pipeSpacing||"inherit",";margin-right:").concat(e.pipeSpacing||"inherit",'}\n\n.dxCCp_eXrk.dxCCp_dnHs .dxCCp_eLRq:after{content:"|"}\n\n.dxCCp_eXrk.dxCCp_fKZL .dxCCp_eLRq{-webkit-margin-end:').concat(e.slashSpacing||"inherit",";-webkit-margin-start:").concat(e.slashSpacing||"inherit",";margin-inline-end:").concat(e.slashSpacing||"inherit",";margin-inline-start:").concat(e.slashSpacing||"inherit","}\n\n[dir=ltr] .dxCCp_eXrk.dxCCp_fKZL .dxCCp_eLRq{margin-left:").concat(e.slashSpacing||"inherit",";margin-right:").concat(e.slashSpacing||"inherit","}\n\n[dir=rtl] .dxCCp_eXrk.dxCCp_fKZL .dxCCp_eLRq{margin-left:").concat(e.slashSpacing||"inherit",";margin-right:").concat(e.slashSpacing||"inherit",'}\n\n.dxCCp_eXrk.dxCCp_fKZL .dxCCp_eLRq:after{content:"/"}\n\n.dxCCp_eXrk.dxCCp_cwfJ .dxCCp_eLRq{-webkit-margin-end:').concat(e.arrowSpacing||"inherit",";-webkit-margin-start:").concat(e.arrowSpacing||"inherit",";margin-inline-end:").concat(e.arrowSpacing||"inherit",";margin-inline-start:").concat(e.arrowSpacing||"inherit","}\n\n[dir=ltr] .dxCCp_eXrk.dxCCp_cwfJ .dxCCp_eLRq{margin-left:").concat(e.arrowSpacing||"inherit",";margin-right:").concat(e.arrowSpacing||"inherit","}\n\n[dir=rtl] .dxCCp_eXrk.dxCCp_cwfJ .dxCCp_eLRq{margin-left:").concat(e.arrowSpacing||"inherit",";margin-right:").concat(e.arrowSpacing||"inherit",'}\n\n.dxCCp_eXrk.dxCCp_cwfJ .dxCCp_eLRq:after{content:">"}\n\n.dxCCp_ddES.dxCCp_bwkW,.dxCCp_fLbg.dxCCp_bwkW{margin-bottom:').concat(e.spacingXXXSmall||"inherit",";margin-top:").concat(e.spacingXXXSmall||"inherit","}\n\n.dxCCp_ddES.dxCCp_fBtB,.dxCCp_fLbg.dxCCp_fBtB{margin-bottom:").concat(e.spacingXXSmall||"inherit",";margin-top:").concat(e.spacingXXSmall||"inherit","}\n\n.dxCCp_ddES.dxCCp_bFmZ,.dxCCp_fLbg.dxCCp_bFmZ{margin-bottom:").concat(e.spacingXSmall||"inherit",";margin-top:").concat(e.spacingXSmall||"inherit","}\n\n.dxCCp_ddES.dxCCp_bCcs,.dxCCp_fLbg.dxCCp_bCcs{margin-bottom:").concat(e.spacingSmall||"inherit",";margin-top:").concat(e.spacingSmall||"inherit","}\n\n.dxCCp_ddES.dxCCp_cYsY,.dxCCp_fLbg.dxCCp_cYsY{margin-bottom:").concat(e.spacingMedium||"inherit",";margin-top:").concat(e.spacingMedium||"inherit","}\n\n.dxCCp_ddES.dxCCp_cpQM,.dxCCp_fLbg.dxCCp_cpQM{margin-bottom:").concat(e.spacingLarge||"inherit",";margin-top:").concat(e.spacingLarge||"inherit","}\n\n.dxCCp_ddES.dxCCp_baAf,.dxCCp_fLbg.dxCCp_baAf{margin-bottom:").concat(e.spacingXLarge||"inherit",";margin-top:").concat(e.spacingXLarge||"inherit","}\n\n.dxCCp_ddES.dxCCp_bNHb,.dxCCp_fLbg.dxCCp_bNHb{margin-bottom:").concat(e.spacingXXLarge||"inherit",";margin-top:").concat(e.spacingXXLarge||"inherit","}\n\n.dxCCp_ddES:first-of-type,.dxCCp_fLbg:first-of-type{margin-top:0}\n\n.dxCCp_ddES:last-of-type,.dxCCp_fLbg:last-of-type{margin-bottom:0}\n\n.dxCCp_ddES.dxCCp_dtEo,.dxCCp_fLbg.dxCCp_dtEo{list-style-position:inside}\n\n.dxCCp_ddES.dxCCp_dtEo:not(:first-of-type),.dxCCp_fLbg.dxCCp_dtEo:not(:first-of-type){border-top:").concat(e.delimiterDashedBorder||"inherit","}\n\n.dxCCp_ddES.dxCCp_iLHf,.dxCCp_fLbg.dxCCp_iLHf{list-style-position:inside}\n\n.dxCCp_ddES.dxCCp_iLHf:not(:first-of-type),.dxCCp_fLbg.dxCCp_iLHf:not(:first-of-type){border-top:").concat(e.delimiterSolidBorder||"inherit","}\n\n.dxCCp_doqw{font-size:").concat(e.fontSizeSmall||"inherit","}\n\n.dxCCp_ycrn{font-size:").concat(e.fontSizeMedium||"inherit","}\n\n.dxCCp_cMDj{font-size:").concat(e.fontSizeLarge||"inherit","}")},root:"dxCCp_bGBk",inline:"dxCCp_eXrk",delimiter:"dxCCp_eLRq","spacing--xxx-small":"dxCCp_bwkW","spacing--xx-small":"dxCCp_fBtB","spacing--x-small":"dxCCp_bFmZ","spacing--small":"dxCCp_bCcs","spacing--medium":"dxCCp_cYsY","spacing--large":"dxCCp_cpQM","spacing--x-large":"dxCCp_baAf","spacing--xx-large":"dxCCp_bNHb","delimiter--none":"dxCCp_cfzP","delimiter--pipe":"dxCCp_dnHs","delimiter--slash":"dxCCp_fKZL","delimiter--arrow":"dxCCp_cwfJ",default:"dxCCp_ddES",unstyled:"dxCCp_fLbg","delimiter--dashed":"dxCCp_dtEo","delimiter--solid":"dxCCp_iLHf",small:"dxCCp_doqw",medium:"dxCCp_ycrn",large:"dxCCp_cMDj"}
var T=(v=Object(h["a"])(),E=Object(f["themeable"])(y,w),v(A=E(A=(k=C=function(e){Object(d["a"])(t,e)
function t(){Object(n["a"])(this,t)
return Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){var e
var a=p["a"].omitViewProps(Object(b["a"])(this.props,t.propTypes),t)
var n=this.props,i=n.delimiter,r=n.variant,o=n.size
var d="none"===i&&"inline"!==r
var l="none"!==this.props.delimiter||"none"===this.props.spacing
l&&this.props.spacing
var _=(e={},Object(s["a"])(e,w.root,true),Object(s["a"])(e,w[r],true),Object(s["a"])(e,w[o],o),Object(s["a"])(e,w["delimiter--".concat(i)],true),Object(s["a"])(e,w["spacing--".concat(this.props.spacing)],this.props.spacing&&!l),e)
return u.a.createElement(p["a"],Object.assign({},a,{as:"li",margin:this.props.margin,padding:this.props.padding,className:g()(_),elementRef:this.props.elementRef}),this.props.children,!d&&u.a.createElement("span",{className:w.delimiter,"aria-hidden":"true"}))}}])
t.displayName="ListItem"
return t}(l["Component"]),C.propTypes={children:m.a.node.isRequired,variant:m.a.oneOf(["default","unstyled","inline"]),delimiter:m.a.oneOf(["none","pipe","slash","arrow","dashed","solid"]),size:m.a.oneOf(["small","medium","large"]),margin:f["ThemeablePropTypes"].spacing,padding:f["ThemeablePropTypes"].spacing,spacing:m.a.oneOf(["none","xxx-small","xx-small","x-small","small","medium","large","x-large","xx-large"]),elementRef:m.a.func},C.defaultProps={padding:void 0,margin:void 0,spacing:void 0,variant:void 0,delimiter:void 0,size:void 0,elementRef:void 0},k))||A)||A)},ZK5y:function(e,t,a){t.no=t.noCase=a("Pwfc")
t.dot=t.dotCase=a("hfBz")
t.swap=t.swapCase=a("UmkF")
t.path=t.pathCase=a("KUkU")
t.upper=t.upperCase=a("jDM7")
t.lower=t.lowerCase=a("7NKU")
t.camel=t.camelCase=a("hZA9")
t.snake=t.snakeCase=a("oCWi")
t.title=t.titleCase=a("zYwU")
t.param=t.paramCase=a("rJZp")
t.kebab=t.kebabCase=t.paramCase
t.hyphen=t.hyphenCase=t.paramCase
t.header=t.headerCase=a("r544")
t.pascal=t.pascalCase=a("5UzU")
t.constant=t.constantCase=a("IyvR")
t.sentence=t.sentenceCase=a("qJ69")
t.isUpper=t.isUpperCase=a("hctw")
t.isLower=t.isLowerCase=a("9wFd")
t.ucFirst=t.upperCaseFirst=a("Wg0N")
t.lcFirst=t.lowerCaseFirst=a("caQ9")},ZfiP:function(e){e.exports=JSON.parse('{"add_to_do_7537af64":{"message":"Add To-Do"},"add_to_do_7def3c37":{"message":"Add To Do"},"address_3159962f":{"message":"Address:"},"all_day_fb42c4fc":{"message":"All Day"},"all_items_loaded_aa256183":{"message":"All items loaded"},"an_error_occurred_attempting_to_dismiss_the_opport_f86e0667":{"message":"An error occurred attempting to dismiss the opportunity."},"announcement_fb4cb645":{"message":"Announcement"},"are_you_sure_you_want_to_delete_this_planner_item_b71e330c":{"message":"Are you sure you want to delete this planner item?"},"assignment_976578a8":{"message":"Assignment"},"assignmenttype_title_6612d008":{"message":"{ assignmentType } { title }."},"assignmenttype_title_all_day_on_datetime_9768903c":{"message":"{ assignmentType } { title }, all day on { datetime }."},"assignmenttype_title_at_datetime_478f0709":{"message":"{ assignmentType } { title }, at { datetime }."},"assignmenttype_title_at_datetime_until_endtime_a5900e38":{"message":"{ assignmentType } { title }, at { datetime } until { endTime }"},"assignmenttype_title_due_datetime_a112d8ff":{"message":"{ assignmentType } { title }, due { datetime }."},"assignmenttype_title_has_a_to_do_time_at_datetime_e07310e8":{"message":"{ assignmentType } { title } has a to do time at { datetime }."},"assignmenttype_title_is_marked_as_done_a8dc46ef":{"message":"{ assignmentType } { title } is marked as done."},"assignmenttype_title_is_not_marked_as_done_ba80ba66":{"message":"{ assignmentType } { title } is not marked as done."},"assignmenttype_title_posted_datetime_cab69444":{"message":"{ assignmentType } { title } posted { datetime }."},"assignmenttype_title_reminder_datetime_33fa66d5":{"message":"{ assignmentType } { title }, reminder { datetime }."},"beginning_of_your_to_do_history_61ef2dce":{"message":"Beginning of Your To-Do History"},"calendar_a8563bb2":{"message":"Calendar:"},"calendar_event_89aadc1c":{"message":"Calendar Event"},"canvas_planner_98ed106":{"message":"Canvas Planner"},"close_d634289d":{"message":"Close"},"close_opportunity_center_popup_9907d981":{"message":"Close Opportunity Center popup"},"count_plural_0_opportunities_one_opportunity_other_765e27fa":{"message":"{ count, plural,\\n     =0 {# opportunities}\\n    one {# opportunity}\\n  other {# opportunities}\\n}"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {Show # completed item}\\n  other {Show # completed items}\\n}"},"course_8a63b4a3":{"message":"Course"},"course_to_do_bcbbab54":{"message":"{ course } TO DO"},"date_at_time_dbdb1b99":{"message":"{ date } at { time }"},"date_ee500367":{"message":"Date"},"date_is_not_a_valid_date_4ef9f8ba":{"message":"#{ date } is not a valid date."},"date_is_required_8660ec22":{"message":"Date is required"},"date_time_d9fbf2d7":{"message":"Date & Time:"},"delete_a6efa79d":{"message":"Delete"},"details_98a31b68":{"message":"Details"},"details_a6f427c3":{"message":"Details:"},"discussion_6719c51d":{"message":"Discussion"},"dismiss_itemtitle_a9fae1b3":{"message":"Dismiss { itemTitle }"},"dismiss_opportunityname_5995176f":{"message":"Dismiss { opportunityName }"},"dismissed_8b0b1fc9":{"message":"Dismissed"},"dismissed_opportunities_f0826640":{"message":"Dismissed Opportunities"},"due_5d7267be":{"message":"Due:"},"due_date_124fdd99":{"message":"Due: { date }"},"edit_c5fbea07":{"message":"Edit"},"edit_title_72e5a21e":{"message":"Edit { title }"},"error_loading_grades_e0b38f4d":{"message":"Error loading grades"},"error_loading_more_items_3f109d9f":{"message":"Error loading more items"},"error_loading_past_items_2881dbb1":{"message":"Error loading past items"},"excused_cf8792eb":{"message":"Excused"},"failed_to_delete_to_do_64edff49":{"message":"Failed to delete to do"},"failed_to_get_new_activity_17e7ec7c":{"message":"Failed to get new activity"},"failed_to_load_opportunities_52ab6404":{"message":"Failed to load opportunities"},"failed_to_save_to_do_ddc7503b":{"message":"Failed to save to do"},"feedback_6dcc1991":{"message":"Feedback"},"go_to_card_view_dashboard_9d03970e":{"message":"Go to Card View Dashboard"},"graded_25cd3fcd":{"message":"Graded"},"grades_are_loading_c899652d":{"message":"Grades are loading"},"grades_loaded_5056277c":{"message":"Grades Loaded"},"items_completed_items_plural_1_item_other_items_717d579f":{"message":"{ items } completed { items, plural,\\n     =1 {item}\\n  other {items}\\n}"},"late_2be42b88":{"message":"Late"},"list_collapsed_9ac35920":{"message":"List collapsed."},"list_collapsed_dde87718":{"message":"List collapsed"},"list_expanded_efec2d0":{"message":"List expanded."},"load_more_a36f9cf9":{"message":"Load more"},"load_prior_dates_f2b0f6f0":{"message":"Load prior dates"},"loaded_count_plural_0_items_one_item_other_items_e58533e9":{"message":"Loaded { count, plural,\\n     =0 {# items}\\n    one {# item}\\n  other {# items}\\n}"},"loading_25990131":{"message":"Loading..."},"loading_725811ca":{"message":"loading"},"loading_grades_c842c887":{"message":"Loading Grades"},"loading_past_items_ca499e75":{"message":"Loading past items"},"loading_planner_items_947a813d":{"message":"Loading planner items"},"location_3b6ff307":{"message":"Location:"},"looks_like_there_isn_t_anything_here_d9bcef49":{"message":"Looks like there isn\'\'t anything here"},"missing_1a256b3b":{"message":"Missing"},"missing_items_for_title_516511f8":{"message":"Missing items for { title }"},"my_grades_98834476":{"message":"My Grades"},"new_13daf639":{"message":"New"},"new_activity_8b84847d":{"message":"New Activity"},"new_activity_for_title_14c9c3af":{"message":"New activity for { title }"},"new_opportunities_7d349c4d":{"message":"New Opportunities"},"next_month_749b1778":{"message":"Next Month"},"no_due_dates_assigned_e8f5bac8":{"message":"No Due Dates Assigned"},"no_grade_3b4d7f3e":{"message":"No Grade"},"nothing_for_now_e3e3ce2a":{"message":"Nothing for now"},"nothing_here_needs_attention_c4eaded6":{"message":"Nothing here needs attention."},"nothing_more_to_do_b665da42":{"message":"Nothing More To Do"},"nothing_new_needs_attention_3ac548d4":{"message":"Nothing new needs attention."},"nothing_planned_today_selecting_most_recent_item_ffd71bff":{"message":"Nothing planned today. Selecting most recent item."},"nothing_planned_today_selecting_next_item_f6718aa":{"message":"Nothing planned today. Selecting next item."},"nothing_planned_yet_8675ffe9":{"message":"Nothing Planned Yet"},"numpoints_points_8621a43b":{"message":"{ numPoints } points"},"only_most_recent_grading_period_shown_f1ad6458":{"message":"*Only most recent grading period shown."},"opportunities_popup_f6703842":{"message":"opportunities popup"},"option_selected_list_collapsed_e00180ff":{"message":"{ option } selected. List collapsed."},"optional_add_course_ef0d70fc":{"message":"Optional: Add Course"},"page_50c4823d":{"message":"Page"},"peer_review_74f26a13":{"message":"Peer Review"},"peer_review_for_itemtitle_358cb413":{"message":"Peer Review for { itemTitle }"},"points_bceb5005":{"message":"points"},"points_points_63e59cce":{"message":"{ points } points"},"previous_month_bb1e3c84":{"message":"Previous Month"},"pts_699bd9aa":{"message":"pts"},"quiz_e0dcce8f":{"message":"Quiz"},"reminder_date_4564d12d":{"message":"Reminder: { date }"},"replies_4a8577c8":{"message":"Replies"},"save_11a80ec3":{"message":"Save"},"scroll_up_to_see_your_history_19b14cad":{"message":"Scroll up to see your history!"},"scrolls_up_to_the_previous_item_with_new_activity_99717459":{"message":"Scrolls up to the previous item with new activity."},"show_all_ae37d610":{"message":"Show All"},"show_my_grades_ebd08684":{"message":"Show My Grades"},"startdate_to_enddate_d245175b":{"message":"{ startDate } to { endDate }"},"startdatetime_enddatetime_20abc10e":{"message":"{ startDateTime } - { endDateTime }"},"startdatetime_endtime_49741bbe":{"message":"{ startDateTime } - { endTime }"},"starttime_to_endtime_d7cc249d":{"message":"{ startTime } to { endTime }"},"submitted_318fad53":{"message":"Submitted"},"success_to_do_created_e34ed395":{"message":"Success: To Do created"},"task_16b0ef38":{"message":"Task"},"the_date_and_time_this_to_do_is_due_74c823d4":{"message":"The date and time this to do is due"},"there_are_no_points_associated_with_this_item_449c712a":{"message":"There are no points associated with this item"},"time_2b5aac58":{"message":"Time"},"title_ee03d132":{"message":"Title"},"title_is_required_6ddcab69":{"message":"title is required"},"to_do_1d554f36":{"message":"To Do"},"to_do_date_4b211ad0":{"message":"To Do: { date }"},"to_do_items_loading_d1cdfcd5":{"message":"To Do Items Loading"},"today_76e10f9c":{"message":"Today"},"today_at_date_8ac30d6":{"message":"Today at { date }"},"tomorrow_9a6c9a00":{"message":"Tomorrow"},"tomorrow_at_date_b53f2cf1":{"message":"Tomorrow at { date }"},"unable_to_mark_as_complete_8141856d":{"message":"Unable to mark as complete."},"use_arrow_keys_to_navigate_options_2021cc50":{"message":"Use arrow keys to navigate options."},"yesterday_at_date_1aa6d18e":{"message":"Yesterday at { date }"},"yesterday_c6bd6abf":{"message":"Yesterday"},"you_have_media_feedback_f5f9aba8":{"message":"You have media feedback."},"you_must_provide_a_date_and_time_a86839d2":{"message":"You must provide a date and time."},"you_ve_scrolled_back_to_your_very_first_to_do_29374681":{"message":"You\'\'ve scrolled back to your very first To-Do!"}}')},ZoNA:function(e,t,a){"use strict"
var s=a("O92E")
var n=a("CpOe")
e.exports=function(e){return n(s(e)).replace(/\s+/g," ")}},Zw44:function(e){e.exports=JSON.parse('{"add_to_do_7537af64":{"message":"Ajoute Lis Tach"},"add_to_do_7def3c37":{"message":"Ajoute Lis Tach"},"address_3159962f":{"message":"Adrès:"},"all_day_fb42c4fc":{"message":"Tout Jounen"},"all_items_loaded_aa256183":{"message":"Tout eleman yo chaje"},"an_error_occurred_attempting_to_dismiss_the_opport_f86e0667":{"message":"Gen yon erè ki fèt pandan tantativ pou rejte opòtinite a."},"announcement_fb4cb645":{"message":"Anons"},"are_you_sure_you_want_to_delete_this_planner_item_b71e330c":{"message":"Èske vrèman ou vle elemine eleman planifikatè sa a?"},"assignment_976578a8":{"message":"Sesyon"},"assignmenttype_title_6612d008":{"message":"{ assignmentType } { title }."},"assignmenttype_title_all_day_on_datetime_9768903c":{"message":"{ assignmentType } { title }, chak jou sou { datetime }."},"assignmenttype_title_at_datetime_478f0709":{"message":"{ assignmentType } { title }, a { datetime }."},"assignmenttype_title_at_datetime_until_endtime_a5900e38":{"message":"{ assignmentType } { title }, a { datetime } jiska { endTime }"},"assignmenttype_title_due_datetime_a112d8ff":{"message":"{ assignmentType } { title }, delè { datetime }."},"assignmenttype_title_has_a_to_do_time_at_datetime_e07310e8":{"message":"{ assignmentType } { title } gen bagay pou w fè a { datetime }."},"assignmenttype_title_is_marked_as_done_a8dc46ef":{"message":"{ assignmentType } { title } make ke li fini."},"assignmenttype_title_is_not_marked_as_done_ba80ba66":{"message":"{ assignmentType } { title } pa make ke li fini."},"assignmenttype_title_posted_datetime_cab69444":{"message":"{ assignmentType } { title } poste { datetime }."},"assignmenttype_title_reminder_datetime_33fa66d5":{"message":"{ assignmentType } { title }, rapèl { datetime }."},"beginning_of_your_to_do_history_61ef2dce":{"message":"Kòmansman Istwa Tach ou yo"},"calendar_a8563bb2":{"message":"Kalandriye:"},"calendar_event_89aadc1c":{"message":"Kalandriye Aktivite"},"canvas_planner_98ed106":{"message":"Planifikatè Canvas"},"close_d634289d":{"message":"Fèmen"},"close_opportunity_center_popup_9907d981":{"message":"Fèmen fenèt Sant Opòtinite ki monte a"},"count_plural_0_opportunities_one_opportunity_other_765e27fa":{"message":"{ count, plural,\\n     =0 {# opòtinite}\\n    one {# opòtinite}\\n  other {# opòtinite}\\n}"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {Afiche # eleman konplete}\\n  other {Afiche # eleman konplete}\\n}"},"course_8a63b4a3":{"message":"Kou"},"course_to_do_bcbbab54":{"message":"{ course } Pou Fè"},"date_at_time_dbdb1b99":{"message":"{ date } a { time }"},"date_ee500367":{"message":"Dat"},"date_is_not_a_valid_date_4ef9f8ba":{"message":"#{ date } pa yon dat valid."},"date_is_required_8660ec22":{"message":"Dat obligatwa"},"date_time_d9fbf2d7":{"message":"Dat ak Lè:"},"delete_a6efa79d":{"message":"Efase"},"details_98a31b68":{"message":"Detay"},"details_a6f427c3":{"message":"Detay:"},"discussion_6719c51d":{"message":"Diskisyon"},"dismiss_itemtitle_a9fae1b3":{"message":"Rejte { itemTitle }"},"dismiss_opportunityname_5995176f":{"message":"Rejte { opportunityName }"},"dismissed_8b0b1fc9":{"message":"Rejte"},"dismissed_opportunities_f0826640":{"message":"Okazyon Rejte"},"due_5d7267be":{"message":"Delè:"},"due_date_124fdd99":{"message":"Delè: { date }"},"edit_c5fbea07":{"message":"Modifye"},"edit_title_72e5a21e":{"message":"Modifye { title }"},"error_loading_grades_e0b38f4d":{"message":"Erè nan chajman nòt yo"},"error_loading_more_items_3f109d9f":{"message":"Erè chajman plis eleman"},"error_loading_past_items_2881dbb1":{"message":"Erè chajman eleman pase yo"},"excused_cf8792eb":{"message":"Egzante"},"failed_to_delete_to_do_64edff49":{"message":"Echèk eliminasyon tach"},"failed_to_get_new_activity_17e7ec7c":{"message":"Echwe nan chèche nouvo aktivite"},"failed_to_load_opportunities_52ab6404":{"message":"Echèk chajman opòtinite"},"failed_to_save_to_do_ddc7503b":{"message":"Echèk anrejistreman tach"},"feedback_6dcc1991":{"message":"Kòmantè"},"go_to_card_view_dashboard_9d03970e":{"message":"Ale nan Tablo Afichaj Kat"},"graded_25cd3fcd":{"message":"Klase"},"grades_are_loading_c899652d":{"message":"Nòt yo ap chaje"},"grades_loaded_5056277c":{"message":"Nòt yo chaje"},"items_completed_items_plural_1_item_other_items_717d579f":{"message":"{ items } eleman { items, plural,\\n     =1 {eleman}\\n  other {konplete}\\n}"},"late_2be42b88":{"message":"An reta"},"list_collapsed_9ac35920":{"message":"Lis ratresi."},"list_collapsed_dde87718":{"message":"Lis ratresi"},"list_expanded_efec2d0":{"message":"Lis elaji."},"load_more_a36f9cf9":{"message":"Chaje plis"},"load_prior_dates_f2b0f6f0":{"message":"Chaje dat avan"},"loaded_count_plural_0_items_one_item_other_items_e58533e9":{"message":"Eleman { count, plural,\\n     =0 {# eleman}\\n    one {# eleman}\\n  other {# chaje}\\n}"},"loading_25990131":{"message":"Chajman..."},"loading_725811ca":{"message":"chajman"},"loading_grades_c842c887":{"message":"Chajman Nòt"},"loading_past_items_ca499e75":{"message":"Chaje eleman pase"},"loading_planner_items_947a813d":{"message":"Chajman Eleman Planifikatè"},"location_3b6ff307":{"message":"Anplasman:"},"looks_like_there_isn_t_anything_here_d9bcef49":{"message":"Ta sanble pa gen anyen la a"},"missing_1a256b3b":{"message":"Manke"},"missing_items_for_title_516511f8":{"message":"Eleman ki manke pou { title }"},"my_grades_98834476":{"message":"Nòt Mwen"},"new_13daf639":{"message":"Nouvo"},"new_activity_8b84847d":{"message":"Nouvo Aktivite"},"new_activity_for_title_14c9c3af":{"message":"Nouvo aktivite pou { title }"},"new_opportunities_7d349c4d":{"message":"Nouvo Opòtinite"},"next_month_749b1778":{"message":"Mwa Pwochen"},"no_due_dates_assigned_e8f5bac8":{"message":"Pa gen Delè"},"no_grade_3b4d7f3e":{"message":"Pa gen Klas"},"nothing_for_now_e3e3ce2a":{"message":"Anyen pou kounye a"},"nothing_here_needs_attention_c4eaded6":{"message":"Pa gen anyen la a ki mande atansyon."},"nothing_more_to_do_b665da42":{"message":"Pa gen Anyen pou Fè Ankò"},"nothing_new_needs_attention_3ac548d4":{"message":"Pa gen anyen nouvo ki bezwen atansyon."},"nothing_planned_today_selecting_most_recent_item_ffd71bff":{"message":"Pa gen anyen ki planifye pou jodi a. Seleksyon eleman ki pi resan yo."},"nothing_planned_today_selecting_next_item_f6718aa":{"message":"Pa gen anyen ki planifye pou jodi a. Seleksyon pwochen eleman."},"nothing_planned_yet_8675ffe9":{"message":"Poko Gen Anyen Planifye"},"numpoints_points_8621a43b":{"message":"{ numPoints } pwen"},"only_most_recent_grading_period_shown_f1ad6458":{"message":"*Peryòd notasyon ki pi resan an ki afiche sèlman."},"opportunities_popup_f6703842":{"message":"opòtinite afiche"},"option_selected_list_collapsed_e00180ff":{"message":"{ option } seleksyone. Lis ratresi."},"optional_add_course_ef0d70fc":{"message":"Opsyonèl: Ajoute Kou"},"page_50c4823d":{"message":"Paj"},"peer_review_74f26a13":{"message":"Revisyon Kamarad"},"peer_review_for_itemtitle_358cb413":{"message":"Revisyon Kamarad pou { itemTitle }"},"points_bceb5005":{"message":"pwen"},"points_points_63e59cce":{"message":"{ points } pwen"},"previous_month_bb1e3c84":{"message":"Mwa Pase"},"pts_699bd9aa":{"message":"pwen"},"quiz_e0dcce8f":{"message":"Quiz"},"reminder_date_4564d12d":{"message":"Rapèl: { date }"},"replies_4a8577c8":{"message":"Repons"},"save_11a80ec3":{"message":"Anrejistre"},"scroll_up_to_see_your_history_19b14cad":{"message":"Navige monte pou wè istoryal ou!"},"scrolls_up_to_the_previous_item_with_new_activity_99717459":{"message":"Navige monte nan eleman anvan ak nouvo aktivite."},"show_all_ae37d610":{"message":"Afiche Tout"},"show_my_grades_ebd08684":{"message":"Afiche Nòt Mwen"},"startdate_to_enddate_d245175b":{"message":"{ startDate } a { endDate }"},"startdatetime_enddatetime_20abc10e":{"message":"{ startDateTime } - { endDateTime }"},"startdatetime_endtime_49741bbe":{"message":"{ startDateTime } - { endTime }"},"starttime_to_endtime_d7cc249d":{"message":"{ startTime } a { endTime }"},"submitted_318fad53":{"message":"Soumèt"},"success_to_do_created_e34ed395":{"message":"Reyisi: Lis Tach Kreye"},"task_16b0ef38":{"message":"Tach"},"the_date_and_time_this_to_do_is_due_74c823d4":{"message":"Dat ak lè pou sa fèt la se"},"there_are_no_points_associated_with_this_item_449c712a":{"message":"Pa gen pwen ki asosye ak eleman sa a"},"time_2b5aac58":{"message":"Tan"},"title_ee03d132":{"message":"Tit"},"title_is_required_6ddcab69":{"message":"tit obligatwa"},"to_do_1d554f36":{"message":"Pou Fè"},"to_do_date_4b211ad0":{"message":"Tach: { date }"},"to_do_items_loading_d1cdfcd5":{"message":"Eleman Lis Tach yo ap Chaje"},"today_76e10f9c":{"message":"Jodi a"},"today_at_date_8ac30d6":{"message":"Jodi a nan { date }"},"tomorrow_9a6c9a00":{"message":"Demen"},"tomorrow_at_date_b53f2cf1":{"message":"Demen a { date }"},"unable_to_mark_as_complete_8141856d":{"message":"Enposib pou make kòm konplè."},"use_arrow_keys_to_navigate_options_2021cc50":{"message":"Itilize tout fllèch yo pou ka navige nan opsyon yo."},"yesterday_at_date_1aa6d18e":{"message":"Yè a { date }"},"yesterday_c6bd6abf":{"message":"Yè"},"you_have_media_feedback_f5f9aba8":{"message":"Ou gen kòmantè miltimedya."},"you_must_provide_a_date_and_time_a86839d2":{"message":"Ou dwe bay yon lè e yon dat."},"you_ve_scrolled_back_to_your_very_first_to_do_29374681":{"message":"Ou retounan nan premye Tach ou yo!"}}')},ajcJ:function(e){e.exports=JSON.parse('{"add_to_do_7537af64":{"message":"Yapılacaklar listesi ekle"},"add_to_do_7def3c37":{"message":"Yapılacaklar listesi ekle"},"address_3159962f":{"message":"Adres:"},"all_day_fb42c4fc":{"message":"Tüm Gün"},"all_items_loaded_aa256183":{"message":"Tüm öğeler yüklendi"},"an_error_occurred_attempting_to_dismiss_the_opport_f86e0667":{"message":"Fırsatı gözardı etmeye çalışırken bir hata oluştu."},"announcement_fb4cb645":{"message":"Duyuru"},"are_you_sure_you_want_to_delete_this_planner_item_b71e330c":{"message":"Bu planlayıcı öğesini silmek istediğinize emin misiniz?"},"assignment_976578a8":{"message":"Ödev"},"assignmenttype_title_6612d008":{"message":"{ assignmentType } { title }."},"assignmenttype_title_all_day_on_datetime_9768903c":{"message":"{ assignmentType } { title },  { datetime } da tüm gün."},"assignmenttype_title_at_datetime_478f0709":{"message":"{ assignmentType } { title }, { datetime } da."},"assignmenttype_title_at_datetime_until_endtime_a5900e38":{"message":"{ assignmentType } { title },  { datetime } \'\'da { endTime } \'\'a kadar"},"calendar_a8563bb2":{"message":"Takvim:"},"calendar_event_89aadc1c":{"message":"Takvim Olayı"},"canvas_planner_98ed106":{"message":"Canvas Planlayıcı"},"close_d634289d":{"message":"Kapat"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {}\\n  other {}\\n}"},"course_8a63b4a3":{"message":"Ders"},"date_ee500367":{"message":"Tarih"},"delete_a6efa79d":{"message":"Sil"},"details_98a31b68":{"message":"Ayrıntılar"},"details_a6f427c3":{"message":"Ayrıntılar:"},"discussion_6719c51d":{"message":"Tartışma"},"due_5d7267be":{"message":"Bitiş:"},"edit_c5fbea07":{"message":"Düzenle"},"excused_cf8792eb":{"message":"Mazeretli"},"failed_to_delete_to_do_64edff49":{"message":"Yapılacak öğesi silinemedi"},"failed_to_get_new_activity_17e7ec7c":{"message":"Yeni etkinliği alma başarısız"},"failed_to_load_opportunities_52ab6404":{"message":"Fırsatların yüklenmesi başarısız"},"failed_to_save_to_do_ddc7503b":{"message":"Yapılacak öğesi kaydedilemedi"},"feedback_6dcc1991":{"message":"Geribildirim"},"graded_25cd3fcd":{"message":"Notlandırmalı"},"late_2be42b88":{"message":"Geç"},"load_more_a36f9cf9":{"message":"Daha fazla yükle"},"loading_25990131":{"message":"Yükleniyor..."},"loading_past_items_ca499e75":{"message":"Önceki öğeler yükleniyor"},"loading_planner_items_947a813d":{"message":"Planlayıcı öğeleri yükleniyor"},"location_3b6ff307":{"message":"Konum:"},"missing_1a256b3b":{"message":"Eksik"},"new_13daf639":{"message":"Yeni"},"new_activity_8b84847d":{"message":"Yeni Etkinlik"},"next_month_749b1778":{"message":"Sonraki Hafta"},"nothing_for_now_e3e3ce2a":{"message":"Şimdilik bir şey yok"},"optional_add_course_ef0d70fc":{"message":"Tercihen: Kurs Ekle"},"page_50c4823d":{"message":"Sayfa"},"peer_review_74f26a13":{"message":"Akran Değerlendirme"},"points_bceb5005":{"message":"puanlar"},"points_points_63e59cce":{"message":"{ points } puan"},"previous_month_bb1e3c84":{"message":"Önceki Hafta"},"pts_699bd9aa":{"message":"not"},"quiz_e0dcce8f":{"message":"Kısa Sınav"},"save_11a80ec3":{"message":"Kaydet"},"submitted_318fad53":{"message":"Gönderildi"},"task_16b0ef38":{"message":"Görev"},"time_2b5aac58":{"message":"Süre"},"title_ee03d132":{"message":"Başlık"},"title_is_required_6ddcab69":{"message":"başlık gereklidir"},"to_do_1d554f36":{"message":"Yapılacaklar"},"today_76e10f9c":{"message":"Bugün"},"tomorrow_9a6c9a00":{"message":"Yarın"},"yesterday_c6bd6abf":{"message":"Dün"}}')},bEIN:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.isFSA=n
t.isError=i
var s=a("LvDl")
function n(e){return(0,s.isPlainObject)(e)&&(0,s.isString)(e.type)&&Object.keys(e).every(r)}function i(e){return n(e)&&true===e.error}function r(e){return["type","payload","error","meta"].indexOf(e)>-1}},bwhI:function(e,t,a){"use strict"
var s=a("rePB")
var n=a("1OyB")
var i=a("vuIU")
var r=a("md7G")
var o=a("foSv")
var d=a("Ji7U")
var l=a("q1tI")
var u=a.n(l)
var _=a("17x9")
var m=a.n(_)
var c=a("TSYQ")
var g=a.n(c)
var p=a("n12J")
var f=a("5Shj")
var h=a("J2CL")
var b=a("nAyT")
var y=a("jtGx")
var v=a("oXx0")
function E(e){var t=e.borders,a=e.colors,s=e.spacing,n=e.typography
return{fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,padding:"0 ".concat(s.xSmall),height:"1.3125rem",background:a.backgroundLightest,lineHeight:n.lineHeightFit,textTransformStyle:"uppercase",textFontSize:n.fontSizeXSmall,textFontWeight:n.fontWeightBold,maxWidth:"15rem",color:a.textDark,primaryColor:a.textBrand,dangerColor:a.textDanger,successColor:a.textSuccess,warningColor:a.textWarning,messageColor:a.textAlert,borderWidth:t.widthSmall,borderStyle:t.style,borderRadius:"999rem",focusOutlineWidth:t.widthMedium,focusOutlineColor:a.borderBrand,focusOutlineStyle:t.style}}E["canvas-a11y"]=E["canvas-high-contrast"]=function(e){var t=e.colors
return{color:t.textDarkest,borderColor:t.borderDarkest}}
E.canvas=function(e){return{primaryColor:e["ic-brand-primary"]}}
var A=a("sIA8")
a.d(t,"a",(function(){return S}))
var C,k,w,T,D,x
var F={componentId:"bZMhq",template:function(e){return"\n\n.bZMhq_bGBk{align-items:center;background:".concat(e.background||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";border-style:").concat(e.borderStyle||"inherit",";border-width:").concat(e.borderWidth||"inherit",";box-sizing:border-box;font-family:").concat(e.fontFamily||"inherit",";height:").concat(e.height||"inherit",";padding:").concat(e.padding||"inherit","}\n\n.bZMhq_bGBk.bZMhq_daKB{outline:none;overflow:visible;position:relative}\n\n.bZMhq_bGBk.bZMhq_daKB:before{border:").concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",';bottom:-0.375rem;box-sizing:border-box;content:"";display:block;left:-0.375rem;opacity:0;pointer-events:none;position:absolute;right:-0.375rem;top:-0.375rem;transform:scale(0.95);transition:all 0.2s}\n\n.bZMhq_bGBk.bZMhq_daKB.bZMhq_cVYB:before{opacity:1;transform:scale(1)}\n\n.bZMhq_eWKC{box-sizing:border-box;flex:1 0 auto;font-size:').concat(e.textFontSize||"inherit",";font-weight:").concat(e.textFontWeight||"inherit",";letter-spacing:0.0625rem;line-height:").concat(e.lineHeight||"inherit",";max-width:").concat(e.maxWidth||"inherit",";min-width:0.0625rem;text-align:center;text-transform:").concat(e.textTransformStyle||"inherit","}\n\n[dir=ltr] .bZMhq_eWKC,[dir=rtl] .bZMhq_eWKC{text-align:center}\n\n.bZMhq_ddES{border-color:").concat(e.color||"inherit","}\n\n.bZMhq_ddES .bZMhq_eWKC{color:").concat(e.color||"inherit","}\n\n.bZMhq_bXiG{border-color:").concat(e.primaryColor||"inherit","}\n\n.bZMhq_bXiG .bZMhq_eWKC{color:").concat(e.primaryColor||"inherit","}\n\n.bZMhq_cOXX{border-color:").concat(e.successColor||"inherit","}\n\n.bZMhq_cOXX .bZMhq_eWKC{color:").concat(e.successColor||"inherit","}\n\n.bZMhq_zGXc{border-color:").concat(e.dangerColor||"inherit","}\n\n.bZMhq_zGXc .bZMhq_eWKC{color:").concat(e.dangerColor||"inherit","}\n\n.bZMhq_eRqw{border-color:").concat(e.warningColor||"inherit","}\n\n.bZMhq_eRqw .bZMhq_eWKC{color:").concat(e.warningColor||"inherit","}\n\n.bZMhq_elxg{border-color:").concat(e.messageColor||"inherit","}\n\n.bZMhq_elxg .bZMhq_eWKC{color:").concat(e.messageColor||"inherit","}")},root:"bZMhq_bGBk",truncated:"bZMhq_daKB",focused:"bZMhq_cVYB",text:"bZMhq_eWKC",default:"bZMhq_ddES",primary:"bZMhq_bXiG",success:"bZMhq_cOXX",danger:"bZMhq_zGXc",warning:"bZMhq_eRqw",message:"bZMhq_elxg"}
var S=(C=Object(b["a"])("7.0.0",null,"Use Pill from ui-pill instead."),k=Object(v["a"])(),w=Object(h["themeable"])(E,F),C(T=k(T=w(T=(x=D=function(e){Object(d["a"])(t,e)
function t(e){var a
Object(n["a"])(this,t)
a=Object(r["a"])(this,Object(o["a"])(t).call(this,e))
a.state={truncated:false}
return a}Object(i["a"])(t,[{key:"handleTruncation",value:function(e){this.setState({truncated:e})}},{key:"renderPill",value:function(e,a){var n,i=this
var r=this.props,o=r.margin,d=r.text,l=r.variant,_=r.as,m=r.elementRef
var c=p["a"].omitViewProps(Object(y["a"])(this.props,t.propTypes),t)
var f="function"===typeof a?a(c):c
var h=g()((n={},Object(s["a"])(n,F.root,true),Object(s["a"])(n,F.truncated,this.state.truncated),Object(s["a"])(n,F.focused,e),Object(s["a"])(n,F[l],l),n))
return u.a.createElement(p["a"],Object.assign({},f,{className:h,as:_,elementRef:m,margin:o,display:"inline-flex"}),u.a.createElement("span",{className:F.text},u.a.createElement(A["a"],{onUpdate:function(e){i.handleTruncation(e)}},d)))}},{key:"render",value:function(){var e=this
return this.state.truncated?u.a.createElement(f["a"],{tip:this.props.text},(function(t){var a=t.focused,s=t.getTriggerProps
return e.renderPill(a,s)})):this.renderPill()}}])
t.displayName="Pill"
return t}(l["Component"]),D.propTypes={text:m.a.node.isRequired,margin:h["ThemeablePropTypes"].spacing,variant:m.a.oneOf(["default","success","danger","primary","warning","message"]),elementRef:m.a.func,as:m.a.elementType},D.defaultProps={margin:void 0,elementRef:void 0,variant:"default"},x))||T)||T)||T)},c6aN:function(e,t,a){var s=a("wd/R")
function n(e){if("function"===typeof s.isMoment&&!s.isMoment(e))return false
if("function"===typeof e.isValid)return e.isValid()
return!isNaN(e)}e.exports={isValidMoment:n}},cFoZ:function(e,t,a){"use strict"
a.d(t,"a",(function(){return d}))
var s=a("KQm4")
var n=a("QF4Q")
var i=a("xm5c")
var r=a("IPIv")
var o=a("DEX3")
function d(e,t,a){Object(o["warn"])(false,"[findFocusable] is deprecated. It has been moved from `@instructure/ui-a11y` to `@instructure/ui-dom-utils`")
var r=Object(n["a"])(e)
if(!r||"function"!==typeof r.querySelectorAll)return[]
var d="a[href],frame,iframe,object,input:not([type=hidden]),select,textarea,button,*[tabindex]"
var l=Array.from(r.querySelectorAll(d))
a&&Object(i["a"])(r,d)&&(l=[].concat(Object(s["a"])(l),[r]))
return l.filter((function(e){return"function"===typeof t?t(e)&&m(e):m(e)}))}function l(e){var t=Object(r["a"])(e)
return"inline"!==t.display&&e.offsetWidth<=0&&e.offsetHeight<=0||"none"===t.display}function u(e){var t=["fixed","absolute"]
if(t.includes(e.style.position.toLowerCase()))return true
if(t.includes(Object(r["a"])(e).getPropertyValue("position").toLowerCase()))return true
return false}function _(e){while(e){if(e===document.body)break
if(l(e))return false
if(u(e))break
e=e.parentNode}return true}function m(e){return!e.disabled&&_(e)}},cN8Q:function(e){e.exports=JSON.parse('{"add_to_do_7537af64":{"message":"Tāpiri Hei Mahi"},"add_to_do_7def3c37":{"message":"Tāpiri Hei Mahi"},"address_3159962f":{"message":"Wāhi noho:"},"all_day_fb42c4fc":{"message":"Te rā katoa"},"all_items_loaded_aa256183":{"message":"Kua utaina ngā tūemi katoa"},"an_error_occurred_attempting_to_dismiss_the_opport_f86e0667":{"message":"He hapa i puta i te wā e ngana ana ki te whakakore i te mea angitu."},"announcement_fb4cb645":{"message":"Pānui"},"are_you_sure_you_want_to_delete_this_planner_item_b71e330c":{"message":"E pono ana koe kei te hiahia koe kia mukua tenei mahere tūemi?"},"assignment_976578a8":{"message":"Whakataunga"},"assignmenttype_title_6612d008":{"message":"{ assignmentType } { title }."},"assignmenttype_title_all_day_on_datetime_9768903c":{"message":"{ assignmentType } { title }, i te rā katoa { datetime }."},"assignmenttype_title_at_datetime_478f0709":{"message":"{ assignmentType } { title }, ī { datetime }."},"assignmenttype_title_at_datetime_until_endtime_a5900e38":{"message":"{ assignmentType } { title }, ī { datetime } tae noa kī { endTime }"},"assignmenttype_title_due_datetime_a112d8ff":{"message":"{ assignmentType } { title }, tika { datetime }."},"assignmenttype_title_has_a_to_do_time_at_datetime_e07310e8":{"message":"{ assignmentType } { title } he hei mahi wā ī { datetime }."},"assignmenttype_title_is_marked_as_done_a8dc46ef":{"message":"{ assignmentType } { title } kua tohua kua oti."},"assignmenttype_title_is_not_marked_as_done_ba80ba66":{"message":"{ assignmentType } { title } kaore i tohua kua oti."},"assignmenttype_title_posted_datetime_cab69444":{"message":"{ assignmentType } { title } whakairi { datetime }."},"assignmenttype_title_reminder_datetime_33fa66d5":{"message":"{ assignmentType } { title }, maumahara { datetime }."},"beginning_of_your_to_do_history_61ef2dce":{"message":"Te timatatanga o tō hītori Hei-Mahi"},"calendar_a8563bb2":{"message":"Maramataka:"},"calendar_event_89aadc1c":{"message":"Tauwhāinga Māramataka"},"canvas_planner_98ed106":{"message":"Canvas Mahere"},"close_d634289d":{"message":"Katia"},"close_opportunity_center_popup_9907d981":{"message":"Katihia te Mea Angitu Pōkapu Pakūake"},"count_plural_0_opportunities_one_opportunity_other_765e27fa":{"message":"{ count, plural,\\n     =0 {# ngā wāhanga}\\n    one {# wāhanga}\\n  other {# ngā wāhanga}\\n}"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {Whakātu # tūemi kua oti}\\n  other {Whakātu # ngā tūemi kua oti}\\n}"},"course_8a63b4a3":{"message":"Akoranga"},"course_to_do_bcbbab54":{"message":"{ course } HEI MAHI"},"date_at_time_dbdb1b99":{"message":"{ date } ī { time }"},"date_ee500367":{"message":"Rā"},"date_is_not_a_valid_date_4ef9f8ba":{"message":"#{ date } kaore i te rā tika."},"date_is_required_8660ec22":{"message":"He rā e hiahiatia ana"},"date_time_d9fbf2d7":{"message":"Rā & Te Wa:"},"delete_a6efa79d":{"message":"Muku"},"details_98a31b68":{"message":"Ngā taipitopito"},"details_a6f427c3":{"message":"Ngā taipitopito:"},"discussion_6719c51d":{"message":"Kōrerorero"},"dismiss_itemtitle_a9fae1b3":{"message":"Whakakore { itemTitle }"},"dismiss_opportunityname_5995176f":{"message":"Whakakore { opportunityName }"},"dismissed_8b0b1fc9":{"message":"Kau whakakoretia"},"dismissed_opportunities_f0826640":{"message":"Ngā mea angitu kua whakakoretia"},"due_5d7267be":{"message":"E tika ana:"},"due_date_124fdd99":{"message":"E tika ana: { date }"},"edit_c5fbea07":{"message":"Whakatika"},"edit_title_72e5a21e":{"message":"Whakatika { title }"},"error_loading_grades_e0b38f4d":{"message":"He hapa i te wā e uta ana i ngā kōeke"},"error_loading_more_items_3f109d9f":{"message":"He hapa i puta i te wā e uta ana nui atu tūemi"},"error_loading_past_items_2881dbb1":{"message":"He hapa i puta i te wā e uta ana ngā tūemi o mua"},"excused_cf8792eb":{"message":"Whakawātea"},"failed_to_delete_to_do_64edff49":{"message":"I rahua ki te muku hei mahi"},"failed_to_get_new_activity_17e7ec7c":{"message":"I rahua ki te tiki mahi hou"},"failed_to_load_opportunities_52ab6404":{"message":"I rahua i te wā uta"},"failed_to_save_to_do_ddc7503b":{"message":"I rahua ki te whakaora hei mahi"},"feedback_6dcc1991":{"message":"Urupare"},"go_to_card_view_dashboard_9d03970e":{"message":"Haere ki te Kāri Titiro Papatuhi"},"graded_25cd3fcd":{"message":"Kōekehia"},"grades_are_loading_c899652d":{"message":"E uta ana ngā kōeke"},"grades_loaded_5056277c":{"message":"Kua utaina ngā kōeke"},"items_completed_items_plural_1_item_other_items_717d579f":{"message":"{ items } kua oti { items, plural,\\n     =1 {tūemi}\\n  other {ngā tūemi}\\n}"},"late_2be42b88":{"message":"Tūreiti"},"list_collapsed_9ac35920":{"message":"I hinga te rārangi."},"list_collapsed_dde87718":{"message":"I hinga te rārangi"},"list_expanded_efec2d0":{"message":"I whānuitia te rarangi."},"load_more_a36f9cf9":{"message":"whakawaha a atu"},"load_prior_dates_f2b0f6f0":{"message":"Uta ngā rā o mua"},"loaded_count_plural_0_items_one_item_other_items_e58533e9":{"message":"Kua utaina { count, plural,\\n     =0 {# ngā tūemi}\\n    one {# tūemi}\\n  other {# ngā tūemi}\\n}"},"loading_25990131":{"message":"E uta ana ...."},"loading_725811ca":{"message":"Uta ana"},"loading_grades_c842c887":{"message":"E uta ana ngā kōeke"},"loading_past_items_ca499e75":{"message":"E uta ana ngā tūemi o muri"},"loading_planner_items_947a813d":{"message":"Uta ana mahere tūemi"},"location_3b6ff307":{"message":"Wāhi:"},"looks_like_there_isn_t_anything_here_d9bcef49":{"message":"Titiro rite kaore tētahi i kōnei"},"missing_1a256b3b":{"message":"Ngaro"},"missing_items_for_title_516511f8":{"message":"Ngā tūemi e ngaro ana { title }"},"my_grades_98834476":{"message":"Aku Kōeke"},"new_13daf639":{"message":"Hou"},"new_activity_8b84847d":{"message":"Mahi hou"},"new_activity_for_title_14c9c3af":{"message":"Ngā mahi hou mo te { title }"},"new_opportunities_7d349c4d":{"message":"Ngā mea angitu hou"},"next_month_749b1778":{"message":"Tērā marama"},"no_due_dates_assigned_e8f5bac8":{"message":"Kaore ngā rā tika kia whakaritea"},"no_grade_3b4d7f3e":{"message":"Kaore he Kōeke"},"nothing_for_now_e3e3ce2a":{"message":"Kaore ngā mea mō ināianei"},"nothing_here_needs_attention_c4eaded6":{"message":"Kaore he mea e hiahia ana ki konei."},"nothing_more_to_do_b665da42":{"message":"Kaore he mahi atu"},"nothing_new_needs_attention_3ac548d4":{"message":"Kaore he mea hou hei aro atu."},"nothing_planned_today_selecting_most_recent_item_ffd71bff":{"message":"Kaore he mahi e maheretia ana i tēnei rā. E tīpako ana i te tūemi ou."},"nothing_planned_today_selecting_next_item_f6718aa":{"message":"Kaore he mahi e maheretia ana i tēnei rā. E tīpako ana i te tūemi e whai ake nei."},"nothing_planned_yet_8675ffe9":{"message":"Heoi kaore he mahere"},"numpoints_points_8621a43b":{"message":"{ numPoints } ngā koinga"},"only_most_recent_grading_period_shown_f1ad6458":{"message":"* Ko te wā poto noa kua whakāturia."},"opportunities_popup_f6703842":{"message":"ngā wāhanga pakū-ake"},"option_selected_list_collapsed_e00180ff":{"message":"{ option } kua tīpakotia. I hinga te rārangi."},"optional_add_course_ef0d70fc":{"message":"Kāre Herea: Tāpiri akoranga"},"page_50c4823d":{"message":"Whārangi"},"peer_review_74f26a13":{"message":"Hoa arotake"},"peer_review_for_itemtitle_358cb413":{"message":"Arotake a te hoa mō { itemTitle }"},"points_bceb5005":{"message":"ngā koinga"},"points_points_63e59cce":{"message":"{ points } ngā koinga"},"previous_month_bb1e3c84":{"message":"Te marama o muri nei"},"pts_699bd9aa":{"message":"ngā koinga"},"quiz_e0dcce8f":{"message":"Quiz"},"reminder_date_4564d12d":{"message":"Maumahara: { date }"},"replies_4a8577c8":{"message":"Ngā whakautu"},"save_11a80ec3":{"message":"Tiaki"},"scroll_up_to_see_your_history_19b14cad":{"message":"Panuku ki runga ki te kite i tō hītori!"},"scrolls_up_to_the_previous_item_with_new_activity_99717459":{"message":"Ka pānuku ki runga ki te tūemi o mua me ngā mahi hou."},"show_all_ae37d610":{"message":"Whakātu katoa"},"show_my_grades_ebd08684":{"message":"Whakātuhia aku Kōeke"},"startdate_to_enddate_d245175b":{"message":"{ startDate } ki te { endDate }"},"startdatetime_enddatetime_20abc10e":{"message":"{ startDateTime } - { endDateTime }"},"startdatetime_endtime_49741bbe":{"message":"{ startDateTime } - { endTime }"},"starttime_to_endtime_d7cc249d":{"message":"{ startTime } ki te { endTime }"},"submitted_318fad53":{"message":"Kua tukuna"},"success_to_do_created_e34ed395":{"message":"Angitu: Hei Mahi kua hāngaia"},"task_16b0ef38":{"message":"Mahi"},"the_date_and_time_this_to_do_is_due_74c823d4":{"message":"Te rā me te wā hei mahi tēnei"},"there_are_no_points_associated_with_this_item_449c712a":{"message":"Kaore ngā koinga e hono ana ki tēnei tūemi"},"time_2b5aac58":{"message":"Wā"},"title_ee03d132":{"message":"taitara"},"title_is_required_6ddcab69":{"message":"Te taitara e hiahiatia ana"},"to_do_1d554f36":{"message":"Hei mahi"},"to_do_date_4b211ad0":{"message":"Hei Mahi: { date }"},"to_do_items_loading_d1cdfcd5":{"message":"Ngā Hei Mahi Ngā Tūemi e uta ana"},"today_76e10f9c":{"message":"I tēnei rā tonu"},"today_at_date_8ac30d6":{"message":"I tēnei rā kī { date }"},"tomorrow_9a6c9a00":{"message":"Apopo"},"tomorrow_at_date_b53f2cf1":{"message":"Apopo kī { date }"},"unable_to_mark_as_complete_8141856d":{"message":"Kaore e taea te tohu kua oti."},"use_arrow_keys_to_navigate_options_2021cc50":{"message":"Whakamahia ngā kī pere pere hei whakawhiti i nga wāhanga."},"yesterday_at_date_1aa6d18e":{"message":"Inanahi nei kī { date }"},"yesterday_c6bd6abf":{"message":"Inanahi"},"you_have_media_feedback_f5f9aba8":{"message":"Kei a koe te urupare pāpāho."},"you_must_provide_a_date_and_time_a86839d2":{"message":"Me whakarato he rā me te wā."},"you_ve_scrolled_back_to_your_very_first_to_do_29374681":{"message":"Kua hoki koe ki to Hei - Mahi tino tuatahi!"}}')},caQ9:function(e,t,a){var s=a("7NKU")
e.exports=function(e,t){if(null==e)return""
e=String(e)
return s(e.charAt(0),t)+e.substr(1)}},cfpB:function(e){e.exports=JSON.parse('{"address_3159962f":{"message":"نشانی:"},"all_day_fb42c4fc":{"message":"تمام روز"},"announcement_fb4cb645":{"message":"اطلاعیه"},"assignment_976578a8":{"message":"تکلیف"},"calendar_a8563bb2":{"message":"تقویم:"},"calendar_event_89aadc1c":{"message":"رویداد تقویم"},"close_d634289d":{"message":"بستن"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {}\\n  other {}\\n}"},"course_8a63b4a3":{"message":"درس"},"date_ee500367":{"message":"تاریخ"},"delete_a6efa79d":{"message":"حذف"},"details_98a31b68":{"message":"اطلاعات"},"details_a6f427c3":{"message":"جزئیات:"},"discussion_6719c51d":{"message":"بحث"},"due_5d7267be":{"message":"مهلت:"},"edit_c5fbea07":{"message":"ویرایش"},"excused_cf8792eb":{"message":"معاف شد"},"graded_25cd3fcd":{"message":"نمره گذاری شده"},"late_2be42b88":{"message":"با تأخیر"},"load_more_a36f9cf9":{"message":"بارگذاری بیشتر"},"loading_25990131":{"message":"در حال بارگذاری..."},"loading_725811ca":{"message":"در حال بارگذاری"},"location_3b6ff307":{"message":"مکان:"},"missing_1a256b3b":{"message":"جا افتاده"},"new_13daf639":{"message":"جدید"},"next_month_749b1778":{"message":"ماه بعد"},"nothing_for_now_e3e3ce2a":{"message":"چیزی در حال حاضر موجود نیست"},"page_50c4823d":{"message":"صفحه"},"peer_review_74f26a13":{"message":"بازبینی گروهی"},"points_bceb5005":{"message":"امتیازها"},"previous_month_bb1e3c84":{"message":"ماه قبل"},"pts_699bd9aa":{"message":"امتیاز"},"quiz_e0dcce8f":{"message":"آزمون"},"save_11a80ec3":{"message":"ذخیره سازی"},"submitted_318fad53":{"message":"ارسال شد"},"time_2b5aac58":{"message":"زمان"},"title_ee03d132":{"message":"عنوان"},"to_do_1d554f36":{"message":"برای اقدام"},"to_do_items_loading_d1cdfcd5":{"message":"در حال بارگزاری موارد اقدام"},"today_76e10f9c":{"message":"امروز"},"tomorrow_9a6c9a00":{"message":"فردا"},"yesterday_c6bd6abf":{"message":"دیروز"}}')},dmIv:function(e){e.exports=JSON.parse('{"add_to_do_7537af64":{"message":"タスクを追加"},"add_to_do_7def3c37":{"message":"タスクに追加"},"address_3159962f":{"message":"住所:"},"all_day_fb42c4fc":{"message":"全日"},"all_items_loaded_aa256183":{"message":"すべてのアイテムがロードされました"},"an_error_occurred_attempting_to_dismiss_the_opport_f86e0667":{"message":"案件を却下しようとした際にエラーが発生しました。"},"announcement_fb4cb645":{"message":"発表"},"are_you_sure_you_want_to_delete_this_planner_item_b71e330c":{"message":"この計画項目をほんとうに削除しますか？"},"assignment_976578a8":{"message":"課題"},"assignmenttype_title_6612d008":{"message":"{ assignmentType } { title }。"},"assignmenttype_title_all_day_on_datetime_9768903c":{"message":"{ assignmentType } { title }終日{ datetime }に。"},"assignmenttype_title_at_datetime_478f0709":{"message":"{ assignmentType } { title }（{ datetime }にて）。"},"assignmenttype_title_at_datetime_until_endtime_a5900e38":{"message":"{ assignmentType } { title }、{ datetime }で{ endTime }まで"},"assignmenttype_title_due_datetime_a112d8ff":{"message":"{ assignmentType } { title }、期限 { datetime }。"},"assignmenttype_title_has_a_to_do_time_at_datetime_e07310e8":{"message":"{ assignmentType } { title }は{ datetime }で時間を費やさなければなりません"},"assignmenttype_title_is_marked_as_done_a8dc46ef":{"message":"{ assignmentType } { title } は、完了とマークされています。"},"assignmenttype_title_is_not_marked_as_done_ba80ba66":{"message":"{ assignmentType } { title } は、完了とマークされていません。"},"assignmenttype_title_posted_datetime_cab69444":{"message":"{ assignmentType } { title }は{ datetime }を掲示しました。"},"assignmenttype_title_reminder_datetime_33fa66d5":{"message":"{ assignmentType } { title }、リマインダ{ datetime }."},"beginning_of_your_to_do_history_61ef2dce":{"message":"あなたのタスク履歴の始まり"},"calendar_a8563bb2":{"message":"カレンダー:"},"calendar_event_89aadc1c":{"message":"予定表のイベント"},"canvas_planner_98ed106":{"message":"Canvas プランナー"},"close_d634289d":{"message":"閉じる"},"close_opportunity_center_popup_9907d981":{"message":"「機会」センターポップアップを閉じる"},"count_plural_0_opportunities_one_opportunity_other_765e27fa":{"message":"{ count, plural,\\n     =0 {# 機会}\\n    one {# 機会}\\n  other {# 機会}\\n}"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {表示する# （完了したアイテムを}\\n  other {表示する # （完了したアイテムを）}\\n}"},"course_8a63b4a3":{"message":"コース"},"course_to_do_bcbbab54":{"message":"{ course } タスク"},"date_at_time_dbdb1b99":{"message":"{ date }を{ time }で"},"date_ee500367":{"message":"日付"},"date_is_not_a_valid_date_4ef9f8ba":{"message":"#{ date } は無効な日付です。"},"date_is_required_8660ec22":{"message":"日付は必須です"},"date_time_d9fbf2d7":{"message":"日付 & 時間:"},"delete_a6efa79d":{"message":"消去"},"details_98a31b68":{"message":"詳細"},"details_a6f427c3":{"message":"詳細:"},"discussion_6719c51d":{"message":"ディスカッション"},"dismiss_itemtitle_a9fae1b3":{"message":"{ itemTitle }を却下する"},"dismiss_opportunityname_5995176f":{"message":"{ opportunityName }を却下する"},"dismissed_8b0b1fc9":{"message":"却下された"},"dismissed_opportunities_f0826640":{"message":"却下された機会"},"due_5d7267be":{"message":"期限："},"due_date_124fdd99":{"message":"期限：{ date }"},"edit_c5fbea07":{"message":"編集"},"edit_title_72e5a21e":{"message":"{ title }を編集する"},"error_loading_grades_e0b38f4d":{"message":"成績の読み込み中にエラー"},"error_loading_more_items_3f109d9f":{"message":"さらなるアイテムの読み込み中にエラーが発生しました"},"error_loading_past_items_2881dbb1":{"message":"過去のアイテムの読み込み中にエラーが発生しました"},"excused_cf8792eb":{"message":"免除"},"failed_to_delete_to_do_64edff49":{"message":"タスクの削除に失敗しました"},"failed_to_get_new_activity_17e7ec7c":{"message":"新規アクティビティ取得に失敗しました"},"failed_to_load_opportunities_52ab6404":{"message":"機会が読み込めませんでした"},"failed_to_save_to_do_ddc7503b":{"message":"タスクの保存に失敗しました"},"feedback_6dcc1991":{"message":"フィードバック"},"go_to_card_view_dashboard_9d03970e":{"message":"カードビューダッシュボードに進みます。"},"graded_25cd3fcd":{"message":"採点済み"},"grades_are_loading_c899652d":{"message":"成績読み込み中です"},"grades_loaded_5056277c":{"message":"成績が読み込まれました"},"items_completed_items_plural_1_item_other_items_717d579f":{"message":"{ items } 完了した{ items, plural,\\n     =1 {項目}\\n  other {項目}\\n}"},"late_2be42b88":{"message":"遅れている"},"list_collapsed_9ac35920":{"message":"リストが破損しています。"},"list_collapsed_dde87718":{"message":"リストが破損しています"},"list_expanded_efec2d0":{"message":"リストが拡張されました。"},"load_more_a36f9cf9":{"message":"もっと読み込む"},"load_prior_dates_f2b0f6f0":{"message":"以前のデータを読み込む"},"loaded_count_plural_0_items_one_item_other_items_e58533e9":{"message":"読み込んだ{ count, plural,\\n     =0 {#項目}\\n    one {#項目}\\n  other {#項目}\\n}"},"loading_25990131":{"message":"読み込み中・・・"},"loading_725811ca":{"message":"読み込み中"},"loading_grades_c842c887":{"message":"成績読み込み中"},"loading_past_items_ca499e75":{"message":"過去のアイテムを読み込む"},"loading_planner_items_947a813d":{"message":"プランナーアイテムをもっと読み込む"},"location_3b6ff307":{"message":"場所:"},"looks_like_there_isn_t_anything_here_d9bcef49":{"message":"ここに何もないようです"},"missing_1a256b3b":{"message":"欠如"},"missing_items_for_title_516511f8":{"message":"{ title }に不足しているアイテム"},"my_grades_98834476":{"message":"私の成績"},"new_13daf639":{"message":"新規作成"},"new_activity_8b84847d":{"message":"新規アクティビティ"},"new_activity_for_title_14c9c3af":{"message":"{ title }の新規アクティビティ"},"new_opportunities_7d349c4d":{"message":"新しい機会"},"next_month_749b1778":{"message":"翌月"},"no_due_dates_assigned_e8f5bac8":{"message":"期日指定なし"},"no_grade_3b4d7f3e":{"message":"成績なし"},"nothing_for_now_e3e3ce2a":{"message":"今のところ何もなし"},"nothing_here_needs_attention_c4eaded6":{"message":"ここには注意を必要する新しいものは何もない。"},"nothing_more_to_do_b665da42":{"message":"他にタスクはありません"},"nothing_new_needs_attention_3ac548d4":{"message":"注意を必要する新しいものは何もない。"},"nothing_planned_today_selecting_most_recent_item_ffd71bff":{"message":"今日は何も計画されていません。最新のアイテムを選択中。"},"nothing_planned_today_selecting_next_item_f6718aa":{"message":"今日は何も計画されていません。次のアイテムを選択中。"},"nothing_planned_yet_8675ffe9":{"message":"まだ計画はありません"},"numpoints_points_8621a43b":{"message":"{ numPoints } 点"},"only_most_recent_grading_period_shown_f1ad6458":{"message":"*最新の採点期間のみが表示されます。"},"opportunities_popup_f6703842":{"message":"機会ポップアップ"},"option_selected_list_collapsed_e00180ff":{"message":"{ option } が選択されました。リストが破損しています。"},"optional_add_course_ef0d70fc":{"message":"オプション：コースの追加"},"page_50c4823d":{"message":"ページ"},"peer_review_74f26a13":{"message":"ピア レビュー"},"peer_review_for_itemtitle_358cb413":{"message":"{ itemTitle }のピア評価"},"points_bceb5005":{"message":"ポイント"},"points_points_63e59cce":{"message":"{ points } 点"},"previous_month_bb1e3c84":{"message":"前月"},"pts_699bd9aa":{"message":"ポイント"},"quiz_e0dcce8f":{"message":"クイズ"},"reminder_date_4564d12d":{"message":"リマインダ（お知らせ）：{ date }"},"replies_4a8577c8":{"message":"返信"},"save_11a80ec3":{"message":"保存"},"scroll_up_to_see_your_history_19b14cad":{"message":"スクロールアップして履歴を見る！"},"scrolls_up_to_the_previous_item_with_new_activity_99717459":{"message":"新しいアクティビティで前の項目までスクロールします。"},"show_all_ae37d610":{"message":"すべて表示する"},"show_my_grades_ebd08684":{"message":"私の成績を表示"},"startdate_to_enddate_d245175b":{"message":"{ startDate } - { endDate }"},"startdatetime_enddatetime_20abc10e":{"message":"{ startDateTime } - { endDateTime }"},"startdatetime_endtime_49741bbe":{"message":"{ startDateTime } - { endTime }"},"starttime_to_endtime_d7cc249d":{"message":"{ startTime } - { endTime }"},"submitted_318fad53":{"message":"タスクの成績を送信"},"success_to_do_created_e34ed395":{"message":"成功：タスクが作成"},"task_16b0ef38":{"message":"タスク"},"the_date_and_time_this_to_do_is_due_74c823d4":{"message":"これを行う日時が期限を過ぎています"},"there_are_no_points_associated_with_this_item_449c712a":{"message":"このアイテムに関連付けられているポイントはありません。"},"time_2b5aac58":{"message":"時間"},"title_ee03d132":{"message":"タイトル"},"title_is_required_6ddcab69":{"message":"タイトルは必須です"},"to_do_1d554f36":{"message":"タスク"},"to_do_date_4b211ad0":{"message":"タスク：{ date }"},"to_do_items_loading_d1cdfcd5":{"message":"タスクの読み込み"},"today_76e10f9c":{"message":"今日"},"today_at_date_8ac30d6":{"message":"今日{ date }にて"},"tomorrow_9a6c9a00":{"message":"明日"},"tomorrow_at_date_b53f2cf1":{"message":"明日 { date }にて"},"unable_to_mark_as_complete_8141856d":{"message":"終了とマークできません。"},"use_arrow_keys_to_navigate_options_2021cc50":{"message":"矢印キーを使用してオプションを移動します。"},"yesterday_at_date_1aa6d18e":{"message":"昨日{ date }にて"},"yesterday_c6bd6abf":{"message":"昨日"},"you_have_media_feedback_f5f9aba8":{"message":"メディアフィードバックがあります。"},"you_must_provide_a_date_and_time_a86839d2":{"message":"日時を指定する必要があります。"},"you_ve_scrolled_back_to_your_very_first_to_do_29374681":{"message":"あなたの最初のタスクにスクロールしました！"}}')},dmhj:function(e,t,a){"use strict"
var s=a("rePB")
var n=a("1OyB")
var i=a("vuIU")
var r=a("md7G")
var o=a("foSv")
var d=a("Ji7U")
var l=a("q1tI")
var u=a.n(l)
var _=a("17x9")
var m=a.n(_)
var c=a("TSYQ")
var g=a.n(c)
var p=a("n12J")
var f=a("J2CL")
var h=a("nAyT")
var b=a("jtGx")
var y=a("oXx0")
function v(e){var t=e.colors,a=e.borders,s=e.typography
return{color:t.textBrand,background:t.backgroundLightest,borderWidthSmall:a.widthSmall,borderWidthMedium:a.widthMedium,borderColor:t.borderMedium,fontFamily:s.fontFamily,fontWeight:s.fontWeightBold}}v["canvas"]=function(e){return{color:e["ic-brand-primary"]}}
a.d(t,"a",(function(){return x}))
var E,A,C,k,w,T
var D={componentId:"bbhNB",template:function(e){return"\n\n.bbhNB_bGBk{background-clip:content-box;background-color:".concat(e.background||"inherit",";background-position:50%;background-repeat:no-repeat;background-size:cover;border-color:").concat(e.borderColor||"inherit",";border-style:solid;box-sizing:border-box;height:2.5em;line-height:0;overflow:hidden;text-align:center}\n\n[dir=ltr] .bbhNB_bGBk,[dir=rtl] .bbhNB_bGBk{text-align:center}\n\n.bbhNB_bGBk.bbhNB_uUeq{font-size:inherit}\n\n.bbhNB_bGBk.bbhNB_uUeq,.bbhNB_bGBk.bbhNB_dfBC{border-width:").concat(e.borderWidthSmall||"inherit","}\n\n.bbhNB_bGBk.bbhNB_dfBC{font-size:0.75rem}\n\n.bbhNB_bGBk.bbhNB_doqw{border-width:").concat(e.borderWidthSmall||"inherit",";font-size:1rem}\n\n.bbhNB_bGBk.bbhNB_ycrn{font-size:1.25rem}\n\n.bbhNB_bGBk.bbhNB_cMDj,.bbhNB_bGBk.bbhNB_ycrn{border-width:").concat(e.borderWidthMedium||"inherit","}\n\n.bbhNB_bGBk.bbhNB_cMDj{font-size:1.5rem}\n\n.bbhNB_bGBk.bbhNB_eoMd{border-width:").concat(e.borderWidthMedium||"inherit",";font-size:1.75rem}\n\n.bbhNB_eYKj{color:").concat(e.color||"inherit",";font-family:").concat(e.fontFamily||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";letter-spacing:0.0313em;line-height:2.375em}\n\n.bbhNB_MrJH{display:none}\n\n.bbhNB_cJVF{border-radius:100%;overflow:hidden;position:relative;width:2.5em}\n\n.bbhNB_bRWf{width:3em}")},root:"bbhNB_bGBk",auto:"bbhNB_uUeq","x-small":"bbhNB_dfBC",small:"bbhNB_doqw",medium:"bbhNB_ycrn",large:"bbhNB_cMDj","x-large":"bbhNB_eoMd",initials:"bbhNB_eYKj",loadImage:"bbhNB_MrJH",circle:"bbhNB_cJVF",rectangle:"bbhNB_bRWf"}
var x=(E=Object(h["a"])("7.0.0",null,"Use Avatar from ui-avatar instead."),A=Object(y["a"])(),C=Object(f["themeable"])(v,D),E(k=A(k=C(k=(T=w=function(e){Object(d["a"])(t,e)
function t(){var e
var a
Object(n["a"])(this,t)
for(var s=arguments.length,i=new Array(s),d=0;d<s;d++)i[d]=arguments[d]
a=Object(r["a"])(this,(e=Object(o["a"])(t)).call.apply(e,[this].concat(i)))
a.state={loaded:false}
a.handleImageLoaded=function(e){a.setState({loaded:true})
a.props.onImageLoaded(e)}
return a}Object(i["a"])(t,[{key:"makeInitialsFromName",value:function(){var e=this.props.name
if(!e||"string"!==typeof e)return
e=e.trim()
if(0===e.length)return
if(e.match(/\s+/)){var t=e.split(/\s+/)
return(t[0][0]+t[t.length-1][0]).toUpperCase()}return e[0].toUpperCase()}},{key:"renderLoadImage",value:function(){return u.a.createElement("img",{src:this.props.src,className:D.loadImage,alt:this.props.alt,onLoad:this.handleImageLoaded,"aria-hidden":"true"})}},{key:"renderInitials",value:function(){return u.a.createElement("span",{className:D.initials,"aria-hidden":"true"},this.makeInitialsFromName())}},{key:"render",value:function(){var e
var a=p["a"].omitViewProps(Object(b["a"])(this.props,t.propTypes),t)
return u.a.createElement(p["a"],Object.assign({},a,{style:{backgroundImage:this.state.loaded?"url('".concat(this.props.src,"')"):void 0},className:g()((e={},Object(s["a"])(e,D.root,true),Object(s["a"])(e,D[this.props.size],true),Object(s["a"])(e,D[this.props.variant],true),e)),"aria-label":this.props.alt?this.props.alt:null,role:this.props.alt?"img":null,as:this.props.as,elementRef:this.props.elementRef,margin:this.props.margin,display:this.props.inline?"inline-block":"block"}),this.renderLoadImage(),!this.state.loaded&&this.renderInitials())}}])
t.displayName="Avatar"
return t}(l["Component"]),w.propTypes={name:m.a.string.isRequired,src:m.a.string,alt:m.a.string,size:m.a.oneOf(["auto","x-small","small","medium","large","x-large"]),variant:m.a.oneOf(["circle","rectangle"]),margin:f["ThemeablePropTypes"].spacing,inline:m.a.bool,onImageLoaded:m.a.func,as:m.a.elementType,elementRef:m.a.func},w.defaultProps={src:void 0,alt:void 0,margin:void 0,elementRef:void 0,size:"medium",variant:"circle",inline:true,onImageLoaded:function(e){}},T))||k)||k)||k)},"e+xl":function(e,t,a){"use strict"
a.d(t,"a",(function(){return i}))
var s=a("DEX3")
var n=a("cFoZ")
function i(e,t){Object(s["warn"])(false,"[findTabbable] is deprecated. It has been moved from `@instructure/ui-a11y` to `@instructure/ui-dom-utils`")
return Object(n["a"])(e,(function(e){return!r(e.getAttribute("tabindex"))}),t)}function r(e){return!isNaN(e)&&e<0}},e3lb:function(e,t,a){"use strict"
a.d(t,"a",(function(){return c}))
var s=a("VTBJ")
var n=a("1OyB")
var i=a("vuIU")
var r=a("md7G")
var o=a("foSv")
var d=a("Ji7U")
var l=a("q1tI")
var u=a.n(l)
var _=a("hPGw")
var m=u.a.createElement("path",{d:"M902.83 0v1699.925l-476.465-476.467L345 1304.823 960.177 1920l615.407-615.177-81.365-81.365-476.466 476.467V0z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var c=function(e){Object(d["a"])(t,e)
function t(){Object(n["a"])(this,t)
return Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return u.a.createElement(_["a"],Object.assign({},this.props,{name:"IconArrowDown",viewBox:"0 0 1920 1920"}),m)}}])
t.displayName="IconArrowDownLine"
return t}(l["Component"])
c.glyphName="arrow-down"
c.variant="Line"
c.propTypes=Object(s["a"])({},_["a"].propTypes)},fB1h:function(e,t,a){"use strict"
a.d(t,"a",(function(){return c}))
var s=a("VTBJ")
var n=a("1OyB")
var i=a("vuIU")
var r=a("md7G")
var o=a("foSv")
var d=a("Ji7U")
var l=a("q1tI")
var u=a.n(l)
var _=a("hPGw")
var m=u.a.createElement("path",{d:"M906.228.001L277 629.229 432.901 785.13l363.072-363.071V1919.99h220.51V422.059l363.073 363.071 155.9-155.901z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var c=function(e){Object(d["a"])(t,e)
function t(){Object(n["a"])(this,t)
return Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return u.a.createElement(_["a"],Object.assign({},this.props,{name:"IconArrowUp",viewBox:"0 0 1920 1920"}),m)}}])
t.displayName="IconArrowUpSolid"
return t}(l["Component"])
c.glyphName="arrow-up"
c.variant="Solid"
c.propTypes=Object(s["a"])({},_["a"].propTypes)},fb6b:function(e){e.exports=JSON.parse('{"add_to_do_7537af64":{"message":"Add To-Do"},"add_to_do_7def3c37":{"message":"Add To Do"},"address_3159962f":{"message":"Address:"},"all_day_fb42c4fc":{"message":"All Day"},"all_items_loaded_aa256183":{"message":"All items loaded"},"an_error_occurred_attempting_to_dismiss_the_opport_f86e0667":{"message":"An error occurred attempting to dismiss the opportunity."},"announcement_fb4cb645":{"message":"Announcement"},"are_you_sure_you_want_to_delete_this_planner_item_b71e330c":{"message":"Are you sure you want to delete this planner item?"},"assignment_976578a8":{"message":"Assignment"},"assignmenttype_title_6612d008":{"message":"{ assignmentType } { title }."},"assignmenttype_title_all_day_on_datetime_9768903c":{"message":"{ assignmentType } { title }, all day on { datetime }."},"assignmenttype_title_at_datetime_478f0709":{"message":"{ assignmentType } { title }, at { datetime }."},"assignmenttype_title_at_datetime_until_endtime_a5900e38":{"message":"{ assignmentType } { title }, at { datetime } until { endTime }"},"assignmenttype_title_due_datetime_a112d8ff":{"message":"{ assignmentType } { title }, due { datetime }."},"assignmenttype_title_has_a_to_do_time_at_datetime_e07310e8":{"message":"{ assignmentType } { title } has a to do time at { datetime }."},"assignmenttype_title_is_marked_as_done_a8dc46ef":{"message":"{ assignmentType } { title } is marked as done."},"assignmenttype_title_is_not_marked_as_done_ba80ba66":{"message":"{ assignmentType } { title } is not marked as done."},"assignmenttype_title_posted_datetime_cab69444":{"message":"{ assignmentType } { title } posted { datetime }."},"assignmenttype_title_reminder_datetime_33fa66d5":{"message":"{ assignmentType } { title }, reminder { datetime }."},"beginning_of_your_to_do_history_61ef2dce":{"message":"Beginning of Your To-Do History"},"calendar_a8563bb2":{"message":"Calendar:"},"calendar_event_89aadc1c":{"message":"Calendar Event"},"canvas_planner_98ed106":{"message":"Canvas Planner"},"close_d634289d":{"message":"Close"},"close_opportunity_center_popup_9907d981":{"message":"Close Opportunity Centre popup"},"count_plural_0_opportunities_one_opportunity_other_765e27fa":{"message":"{ count, plural,\\n     =0 {# opportunities}\\n    one {# opportunity}\\n  other {# opportunities}\\n}"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {Show # completed item}\\n  other {Show # completed items}\\n}"},"course_8a63b4a3":{"message":"Course"},"course_to_do_bcbbab54":{"message":"{ course } TO DO"},"date_at_time_dbdb1b99":{"message":"{ date } at { time }"},"date_ee500367":{"message":"Date"},"date_is_not_a_valid_date_4ef9f8ba":{"message":"#{ date } is not a valid date."},"date_is_required_8660ec22":{"message":"Date is required"},"date_time_d9fbf2d7":{"message":"Date & Time:"},"delete_a6efa79d":{"message":"Delete"},"details_98a31b68":{"message":"Details"},"details_a6f427c3":{"message":"Details:"},"discussion_6719c51d":{"message":"Discussion"},"dismiss_itemtitle_a9fae1b3":{"message":"Dismiss { itemTitle }"},"dismiss_opportunityname_5995176f":{"message":"Dismiss { opportunityName }"},"dismissed_8b0b1fc9":{"message":"Dismissed"},"dismissed_opportunities_f0826640":{"message":"Dismissed Opportunities"},"due_5d7267be":{"message":"Due:"},"due_date_124fdd99":{"message":"Due: { date }"},"edit_c5fbea07":{"message":"Edit"},"edit_title_72e5a21e":{"message":"Edit { title }"},"error_loading_grades_e0b38f4d":{"message":"Error loading marks"},"error_loading_more_items_3f109d9f":{"message":"Error loading more items"},"error_loading_past_items_2881dbb1":{"message":"Error loading past items"},"excused_cf8792eb":{"message":"Excused"},"failed_to_delete_to_do_64edff49":{"message":"Failed to delete to do"},"failed_to_get_new_activity_17e7ec7c":{"message":"Failed to get new activity"},"failed_to_load_opportunities_52ab6404":{"message":"Failed to load opportunities"},"failed_to_save_to_do_ddc7503b":{"message":"Failed to save to do"},"feedback_6dcc1991":{"message":"Feedback"},"go_to_card_view_dashboard_9d03970e":{"message":"Go to Card View Dashboard"},"graded_25cd3fcd":{"message":"Marked"},"grades_are_loading_c899652d":{"message":"Marks are loading"},"grades_loaded_5056277c":{"message":"Marks Loaded"},"items_completed_items_plural_1_item_other_items_717d579f":{"message":"{ items } completed { items, plural,\\n     =1 {item}\\n  other {items}\\n}"},"late_2be42b88":{"message":"Late"},"list_collapsed_9ac35920":{"message":"List collapsed."},"list_collapsed_dde87718":{"message":"List collapsed"},"list_expanded_efec2d0":{"message":"List expanded."},"load_more_a36f9cf9":{"message":"Load more"},"load_prior_dates_f2b0f6f0":{"message":"Load prior dates"},"loaded_count_plural_0_items_one_item_other_items_e58533e9":{"message":"Loaded { count, plural,\\n     =0 {# items}\\n    one {# item}\\n  other {# items}\\n}"},"loading_25990131":{"message":"Loading..."},"loading_725811ca":{"message":"loading"},"loading_grades_c842c887":{"message":"Loading Marks"},"loading_past_items_ca499e75":{"message":"Loading past items"},"loading_planner_items_947a813d":{"message":"Loading planner items"},"location_3b6ff307":{"message":"Location:"},"looks_like_there_isn_t_anything_here_d9bcef49":{"message":"Looks like there isn\'\'t anything here"},"missing_1a256b3b":{"message":"Missing"},"missing_items_for_title_516511f8":{"message":"Missing items for { title }"},"my_grades_98834476":{"message":"My Marks"},"new_13daf639":{"message":"New"},"new_activity_8b84847d":{"message":"New Activity"},"new_activity_for_title_14c9c3af":{"message":"New activity for { title }"},"new_opportunities_7d349c4d":{"message":"New Opportunities"},"next_month_749b1778":{"message":"Next Month"},"no_due_dates_assigned_e8f5bac8":{"message":"No Due Dates Assigned"},"no_grade_3b4d7f3e":{"message":"No Mark"},"nothing_for_now_e3e3ce2a":{"message":"Nothing for now"},"nothing_here_needs_attention_c4eaded6":{"message":"Nothing here needs attention."},"nothing_more_to_do_b665da42":{"message":"Nothing More To Do"},"nothing_new_needs_attention_3ac548d4":{"message":"Nothing new needs attention."},"nothing_planned_today_selecting_most_recent_item_ffd71bff":{"message":"Nothing planned today. Selecting most recent item."},"nothing_planned_today_selecting_next_item_f6718aa":{"message":"Nothing planned today. Selecting next item."},"nothing_planned_yet_8675ffe9":{"message":"Nothing Planned Yet"},"numpoints_points_8621a43b":{"message":"{ numPoints } points"},"only_most_recent_grading_period_shown_f1ad6458":{"message":"*Only most recent grading period shown."},"opportunities_popup_f6703842":{"message":"opportunities popup"},"option_selected_list_collapsed_e00180ff":{"message":"{ option } selected. List collapsed."},"optional_add_course_ef0d70fc":{"message":"Optional: Add Course"},"page_50c4823d":{"message":"Page"},"peer_review_74f26a13":{"message":"Peer Review"},"peer_review_for_itemtitle_358cb413":{"message":"Peer Review for { itemTitle }"},"points_bceb5005":{"message":"points"},"points_points_63e59cce":{"message":"{ points } points"},"previous_month_bb1e3c84":{"message":"Previous Month"},"pts_699bd9aa":{"message":"pts"},"quiz_e0dcce8f":{"message":"Quiz"},"reminder_date_4564d12d":{"message":"Reminder: { date }"},"replies_4a8577c8":{"message":"Replies"},"save_11a80ec3":{"message":"Save"},"scroll_up_to_see_your_history_19b14cad":{"message":"Scroll up to see your history!"},"scrolls_up_to_the_previous_item_with_new_activity_99717459":{"message":"Scrolls up to the previous item with new activity."},"show_all_ae37d610":{"message":"Show All"},"show_my_grades_ebd08684":{"message":"Show My Marks"},"startdate_to_enddate_d245175b":{"message":"{ startDate } to { endDate }"},"startdatetime_enddatetime_20abc10e":{"message":"{ startDateTime } - { endDateTime }"},"startdatetime_endtime_49741bbe":{"message":"{ startDateTime } - { endTime }"},"starttime_to_endtime_d7cc249d":{"message":"{ startTime } to { endTime }"},"submitted_318fad53":{"message":"Submitted"},"success_to_do_created_e34ed395":{"message":"Success: To Do created"},"task_16b0ef38":{"message":"Task"},"the_date_and_time_this_to_do_is_due_74c823d4":{"message":"The date and time this ‘to do’ is due"},"there_are_no_points_associated_with_this_item_449c712a":{"message":"There are no points associated with this item"},"time_2b5aac58":{"message":"Time"},"title_ee03d132":{"message":"Title"},"title_is_required_6ddcab69":{"message":"title is required"},"to_do_1d554f36":{"message":"To Do"},"to_do_date_4b211ad0":{"message":"To Do: { date }"},"to_do_items_loading_d1cdfcd5":{"message":"To Do Items Loading"},"today_76e10f9c":{"message":"Today"},"today_at_date_8ac30d6":{"message":"Today at { date }"},"tomorrow_9a6c9a00":{"message":"Tomorrow"},"tomorrow_at_date_b53f2cf1":{"message":"Tomorrow at { date }"},"unable_to_mark_as_complete_8141856d":{"message":"Unable to mark as complete."},"use_arrow_keys_to_navigate_options_2021cc50":{"message":"Use arrow keys to navigate options."},"yesterday_at_date_1aa6d18e":{"message":"Yesterday at { date }"},"yesterday_c6bd6abf":{"message":"Yesterday"},"you_have_media_feedback_f5f9aba8":{"message":"You have media feedback."},"you_must_provide_a_date_and_time_a86839d2":{"message":"You must provide a date and time."},"you_ve_scrolled_back_to_your_very_first_to_do_29374681":{"message":"You\'\'ve scrolled back to your very first To-Do!"}}')},hGMy:function(e,t,a){"use strict"
a.d(t,"a",(function(){return d}))
var s=a("QF4Q")
var n=a("K7t/")
var i=a("pgSO")
var r=a("/UXv")
var o=a("e+xl")
function d(e,t,a){var d=Object(s["a"])(e)
var l=Object(o["a"])(d)
if(!l.length){t.preventDefault()
return}if(Object(n["a"])(e)){var u=Object(i["a"])();-1===l.indexOf(u)&&l.push(u)}var _=l[t.shiftKey?0:l.length-1]
var m=Object(r["a"])(_)||Object(r["a"])(d)||!Object(n["a"])(e)
if(!m)return
if("function"===typeof a){a()
return}t.preventDefault()
var c=l[t.shiftKey?l.length-1:0]
c.focus()}},hZA9:function(e,t,a){var s=a("jDM7")
var n=a("Pwfc")
e.exports=function(e,t,a){var i=n(e,t)
a||(i=i.replace(/ (?=\d)/g,"_"))
return i.replace(/ (.)/g,(function(e,a){return s(a,t)}))}},hctw:function(e,t,a){var s=a("jDM7")
e.exports=function(e,t){return s(e,t)===e}},hfBz:function(e,t,a){var s=a("Pwfc")
e.exports=function(e,t){return s(e,t,".")}},iIix:function(e,t,a){"use strict"
a.d(t,"a",(function(){return c}))
var s=a("VTBJ")
var n=a("1OyB")
var i=a("vuIU")
var r=a("md7G")
var o=a("foSv")
var d=a("Ji7U")
var l=a("q1tI")
var u=a.n(l)
var _=a("hPGw")
var m=u.a.createElement("path",{d:"M252.356 1468.235c53.76-59.971 86.513-139.143 86.513-225.882V847.059c0-342.55 278.626-621.177 621.176-621.177 342.438 0 621.177 278.626 621.177 621.177v395.294c0 86.739 32.753 165.91 86.4 225.882H252.356zm707.69 338.824c-124.575 0-225.883-101.308-225.883-225.883h451.765c0 124.575-101.309 225.883-225.883 225.883zm734.117-564.706V847.059c0-385.694-299.294-702.268-677.647-731.294V0H903.575v115.765c-378.466 29.026-677.647 345.6-677.647 731.294v395.294c0 124.574-101.309 225.882-225.883 225.882v112.941h621.177c0 186.805 151.906 338.824 338.823 338.824 186.805 0 338.824-152.019 338.824-338.824h621.176v-112.94c-124.574 0-225.882-101.309-225.882-225.883z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var c=function(e){Object(d["a"])(t,e)
function t(){Object(n["a"])(this,t)
return Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return u.a.createElement(_["a"],Object.assign({},this.props,{name:"IconAlerts",viewBox:"0 0 1920 1920"}),m)}}])
t.displayName="IconAlertsLine"
return t}(l["Component"])
c.glyphName="alerts"
c.variant="Line"
c.propTypes=Object(s["a"])({},_["a"].propTypes)},iNdV:function(e,t){var a={invalidPredicate:"`predicate` must be a function",invalidPropValidator:"`propValidator` must be a function",requiredCore:"is marked as required",invalidTypeCore:"Invalid input type",predicateFailureCore:"Failed to succeed with predicate",anonymousMessage:"<<anonymous>>",baseInvalidMessage:"Invalid "}
function s(e){if("function"!==typeof e)throw new Error(a.invalidPropValidator)
var t=e.bind(null,false,null)
t.isRequired=e.bind(null,true,null)
t.withPredicate=function(t){if("function"!==typeof t)throw new Error(a.invalidPredicate)
var s=e.bind(null,false,t)
s.isRequired=e.bind(null,true,t)
return s}
return t}function n(e,t,s){return new Error("The prop `"+e+"` "+a.requiredCore+" in `"+t+"`, but its value is `"+s+"`.")}var i=-1
function r(e,t,a,s){var r="undefined"===typeof s
var o=null===s
if(e){if(r)return n(a,t,"undefined")
if(o)return n(a,t,"null")}if(r||o)return null
return i}function o(e,t,n,o){function d(s,d,l,u,_,m,c){var g=l[u]
var p=typeof g
_=_||a.anonymousMessage
c=c||u
var f=r(s,_,c,g)
if(f!==i)return f
if(t&&!t(g))return new Error(a.invalidTypeCore+": `"+u+"` of type `"+p+"` supplied to `"+_+"`, expected `"+e+"`.")
if(!n(g))return new Error(a.baseInvalidMessage+m+" `"+u+"` of type `"+p+"` supplied to `"+_+"`, expected `"+o+"`.")
if(d&&!d(g)){var h=d.name||a.anonymousMessage
return new Error(a.baseInvalidMessage+m+" `"+u+"` of type `"+p+"` supplied to `"+_+"`. "+a.predicateFailureCore+" `"+h+"`.")}return null}return s(d)}e.exports={constructPropValidatorVariations:s,createMomentChecker:o,messages:a}},iSlJ:function(e){e.exports=JSON.parse('{"add_to_do_7537af64":{"message":"Добавить в задачи"},"add_to_do_7def3c37":{"message":"Добавить в задачи"},"address_3159962f":{"message":"Адрес:"},"all_day_fb42c4fc":{"message":"Весь день"},"all_items_loaded_aa256183":{"message":"Все элементы загружены"},"an_error_occurred_attempting_to_dismiss_the_opport_f86e0667":{"message":"Произошла ошибка при попытке отклонить эту возможность."},"announcement_fb4cb645":{"message":"Объявление"},"are_you_sure_you_want_to_delete_this_planner_item_b71e330c":{"message":"Вы уверены, что хотите удалить этот элемент планировщика?"},"assignment_976578a8":{"message":"Задание"},"assignmenttype_title_6612d008":{"message":"{ assignmentType } { title }."},"assignmenttype_title_all_day_on_datetime_9768903c":{"message":"{ assignmentType } { title }, весь день { datetime }."},"assignmenttype_title_at_datetime_478f0709":{"message":"{ assignmentType } { title }, в { datetime }."},"assignmenttype_title_at_datetime_until_endtime_a5900e38":{"message":"{ assignmentType } { title }, в { datetime } до { endTime }"},"assignmenttype_title_due_datetime_a112d8ff":{"message":"{ assignmentType } { title }, со сроком сдачи { datetime }."},"assignmenttype_title_has_a_to_do_time_at_datetime_e07310e8":{"message":"{ assignmentType } { title } с временем выполнения { datetime }."},"assignmenttype_title_is_marked_as_done_a8dc46ef":{"message":"{ assignmentType } { title } отмечен как выполненный."},"assignmenttype_title_is_not_marked_as_done_ba80ba66":{"message":"{ assignmentType } { title } не отмечен как выполненный."},"assignmenttype_title_posted_datetime_cab69444":{"message":"{ assignmentType } { title } опубликован { datetime }."},"assignmenttype_title_reminder_datetime_33fa66d5":{"message":"{ assignmentType } { title }, напоминание { datetime }."},"beginning_of_your_to_do_history_61ef2dce":{"message":"Начало вашей истории задач"},"calendar_a8563bb2":{"message":"Календарь:"},"calendar_event_89aadc1c":{"message":"Событие календаря"},"canvas_planner_98ed106":{"message":"Планировщик Canvas"},"close_d634289d":{"message":"Закрыть"},"close_opportunity_center_popup_9907d981":{"message":"Закройте всплывающее окно Центр возможностей"},"count_plural_0_opportunities_one_opportunity_other_765e27fa":{"message":"{ count, plural,\\n     =0 {# возможности}\\n    one {# возможность}\\n  other {# возможности}\\n}"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {Показать # завершенный элемент}\\n  other {Показать # завершенные элементы}\\n}"},"course_8a63b4a3":{"message":"Курс"},"course_to_do_bcbbab54":{"message":"{ course } ЗАДАЧИ"},"date_at_time_dbdb1b99":{"message":"{ date } в { time }"},"date_ee500367":{"message":"Дата"},"date_is_not_a_valid_date_4ef9f8ba":{"message":"#{ date } не является действительной датой."},"date_is_required_8660ec22":{"message":"Необходимо указать дату"},"date_time_d9fbf2d7":{"message":"Дата и время:"},"delete_a6efa79d":{"message":"Удалить"},"details_98a31b68":{"message":"Подробные сведения"},"details_a6f427c3":{"message":"Сведения:"},"discussion_6719c51d":{"message":"Обсуждение"},"dismiss_itemtitle_a9fae1b3":{"message":"Исключить { itemTitle }"},"dismiss_opportunityname_5995176f":{"message":"Исключить { opportunityName }"},"dismissed_8b0b1fc9":{"message":"Упущенный"},"dismissed_opportunities_f0826640":{"message":"Упущенные возможности"},"due_5d7267be":{"message":"Срок:"},"due_date_124fdd99":{"message":"Срок: { date }"},"edit_c5fbea07":{"message":"Редактировать"},"edit_title_72e5a21e":{"message":"Редактировать { title }"},"error_loading_grades_e0b38f4d":{"message":"Ошибка загрузки оценок"},"error_loading_more_items_3f109d9f":{"message":"Ошибка загрузки дополнительных элементов"},"error_loading_past_items_2881dbb1":{"message":"Ошибка загрузки прошлых элементов"},"excused_cf8792eb":{"message":"По уважительной причине"},"failed_to_delete_to_do_64edff49":{"message":"Не удалось выполнить удаление"},"failed_to_get_new_activity_17e7ec7c":{"message":"Не удалось получить новую активность"},"failed_to_load_opportunities_52ab6404":{"message":"Не удалось загрузить варианты"},"failed_to_save_to_do_ddc7503b":{"message":"Не удалось выполнить сохранение"},"feedback_6dcc1991":{"message":"Отзывы"},"go_to_card_view_dashboard_9d03970e":{"message":"Перейти к приборной панели вида карты"},"graded_25cd3fcd":{"message":"С оценкой"},"grades_are_loading_c899652d":{"message":"Выполняется загрузка оценок"},"grades_loaded_5056277c":{"message":"Оценки загружены"},"items_completed_items_plural_1_item_other_items_717d579f":{"message":"{ items } завершенный(-е) { items, plural,\\n     =1 {элемент}\\n  other {элементы}\\n}"},"late_2be42b88":{"message":"Поздно"},"list_collapsed_9ac35920":{"message":"Список свернут."},"list_collapsed_dde87718":{"message":"Список свернут"},"list_expanded_efec2d0":{"message":"Список развернут."},"load_more_a36f9cf9":{"message":"Загрузить еще"},"load_prior_dates_f2b0f6f0":{"message":"Загрузить предыдущие даты"},"loaded_count_plural_0_items_one_item_other_items_e58533e9":{"message":"Загруженные { count, plural,\\n     =0 {# элементы}\\n    one {# элемент}\\n  other {# элементы}\\n}"},"loading_25990131":{"message":"Выполняется загрузка..."},"loading_725811ca":{"message":"загрузка"},"loading_grades_c842c887":{"message":"Загрузка оценок"},"loading_past_items_ca499e75":{"message":"Загрузка прошлых элементов"},"loading_planner_items_947a813d":{"message":"Загрузка событий планировщика"},"location_3b6ff307":{"message":"Местоположение:"},"looks_like_there_isn_t_anything_here_d9bcef49":{"message":"Похоже, здесь ничего нет"},"missing_1a256b3b":{"message":"Отсутствует"},"missing_items_for_title_516511f8":{"message":"Отсутствуют элементы для { title }"},"my_grades_98834476":{"message":"Мои оценки"},"new_13daf639":{"message":"Новый"},"new_activity_8b84847d":{"message":"Новая активность"},"new_activity_for_title_14c9c3af":{"message":"Новая активность для { title }"},"new_opportunities_7d349c4d":{"message":"Новые возможности"},"next_month_749b1778":{"message":"Следующий месяц"},"no_due_dates_assigned_e8f5bac8":{"message":"Даты выполнения не заданы"},"no_grade_3b4d7f3e":{"message":"Нет оценки"},"nothing_for_now_e3e3ce2a":{"message":"Сейчас ничего"},"nothing_here_needs_attention_c4eaded6":{"message":"Нет ничего, требующего внимания."},"nothing_more_to_do_b665da42":{"message":"Все задания выполнены"},"nothing_new_needs_attention_3ac548d4":{"message":"Нет новых пунктов, требующих внимания."},"nothing_planned_today_selecting_most_recent_item_ffd71bff":{"message":"На сегодня ничего не запланировано. Выберите самый последний элемент."},"nothing_planned_today_selecting_next_item_f6718aa":{"message":"На сегодня ничего не запланировано. Осуществляется выбор элемента."},"nothing_planned_yet_8675ffe9":{"message":"Пока ничего не запланировано"},"numpoints_points_8621a43b":{"message":"{ numPoints } баллов"},"only_most_recent_grading_period_shown_f1ad6458":{"message":"*Показан только самый последний академический период."},"opportunities_popup_f6703842":{"message":"всплывающее окно возможностей"},"option_selected_list_collapsed_e00180ff":{"message":"{ option } выбрано. Список свернут."},"optional_add_course_ef0d70fc":{"message":"Опционально: Добавить курс"},"page_50c4823d":{"message":"Страница"},"peer_review_74f26a13":{"message":"Рассмотрение коллегами"},"peer_review_for_itemtitle_358cb413":{"message":"Рассмотрение коллегами для { itemTitle }"},"points_bceb5005":{"message":"баллы"},"points_points_63e59cce":{"message":"{ points } баллов"},"previous_month_bb1e3c84":{"message":"Предыдущий месяц"},"pts_699bd9aa":{"message":"баллы"},"quiz_e0dcce8f":{"message":"Тест"},"reminder_date_4564d12d":{"message":"Оповещение: { date }"},"replies_4a8577c8":{"message":"Ответы"},"save_11a80ec3":{"message":"Сохранить"},"scroll_up_to_see_your_history_19b14cad":{"message":"Прокрутите вверх, чтобы просмотреть свою историю!"},"scrolls_up_to_the_previous_item_with_new_activity_99717459":{"message":"Прокрутите до предыдущего элемента с новой активностью."},"show_all_ae37d610":{"message":"Показать все"},"show_my_grades_ebd08684":{"message":"Показать мои оценки"},"startdate_to_enddate_d245175b":{"message":"{ startDate } до { endDate }"},"startdatetime_enddatetime_20abc10e":{"message":"{ startDateTime } - { endDateTime }"},"startdatetime_endtime_49741bbe":{"message":"{ startDateTime } - { endTime }"},"starttime_to_endtime_d7cc249d":{"message":"{ startTime } до { endTime }"},"submitted_318fad53":{"message":"Отправлено"},"success_to_do_created_e34ed395":{"message":"Успешно: Задание создано"},"task_16b0ef38":{"message":"Задача"},"the_date_and_time_this_to_do_is_due_74c823d4":{"message":"Дата и время выполнения этого установлены на"},"there_are_no_points_associated_with_this_item_449c712a":{"message":"Нет пунктов, связанных с этим элементом"},"time_2b5aac58":{"message":"Время"},"title_ee03d132":{"message":"Заголовок"},"title_is_required_6ddcab69":{"message":"необходим заголовок"},"to_do_1d554f36":{"message":"Задачи"},"to_do_date_4b211ad0":{"message":"Задачи: { date }"},"to_do_items_loading_d1cdfcd5":{"message":"Для выполнения загрузки позиций"},"today_76e10f9c":{"message":"Сегодня"},"today_at_date_8ac30d6":{"message":"Сегодня в { date }"},"tomorrow_9a6c9a00":{"message":"Завтра"},"tomorrow_at_date_b53f2cf1":{"message":"Завтра в { date }"},"unable_to_mark_as_complete_8141856d":{"message":"Невозможно отметить как завершенный."},"use_arrow_keys_to_navigate_options_2021cc50":{"message":"Используйте клавиши со стрелками для навигации по параметрам."},"yesterday_at_date_1aa6d18e":{"message":"Вчера в { date }"},"yesterday_c6bd6abf":{"message":"Вчера"},"you_have_media_feedback_f5f9aba8":{"message":"У вас есть отзывы о мультимедиа."},"you_must_provide_a_date_and_time_a86839d2":{"message":"Необходимо указать дату и время."},"you_ve_scrolled_back_to_your_very_first_to_do_29374681":{"message":"Вы перешли к самой первой своей задаче!"}}')},j5e4:function(e){e.exports=JSON.parse('{"add_to_do_7537af64":{"message":"Aufgabe hinzufügen"},"add_to_do_7def3c37":{"message":"Aufgabe hinzufügen"},"address_3159962f":{"message":"Adresse:"},"all_day_fb42c4fc":{"message":"Den ganzen Tag"},"all_items_loaded_aa256183":{"message":"Alle Elemente geladen"},"an_error_occurred_attempting_to_dismiss_the_opport_f86e0667":{"message":"Beim Versuch, die Gelegenheit auszulassen, ist ein Fehler aufgetreten"},"announcement_fb4cb645":{"message":"Ankündigung"},"are_you_sure_you_want_to_delete_this_planner_item_b71e330c":{"message":"Möchten Sie diesen Plan wirklich löschen?"},"assignment_976578a8":{"message":"Aufgabe"},"assignmenttype_title_6612d008":{"message":"{ assignmentType } { title }."},"assignmenttype_title_all_day_on_datetime_9768903c":{"message":"{ assignmentType } { title }, den ganzen Tag am { datetime }."},"assignmenttype_title_at_datetime_478f0709":{"message":"{ assignmentType } { title }, um { datetime }."},"assignmenttype_title_at_datetime_until_endtime_a5900e38":{"message":"{ assignmentType } { title }, um { datetime } bis { endTime }"},"assignmenttype_title_due_datetime_a112d8ff":{"message":"{ assignmentType } { title } fällig am { datetime }"},"assignmenttype_title_has_a_to_do_time_at_datetime_e07310e8":{"message":"{ assignmentType } { title } Hat ein Aufgabenzeit um { datetime }."},"assignmenttype_title_is_marked_as_done_a8dc46ef":{"message":"{ assignmentType } { title } ist als erledigt markiert."},"assignmenttype_title_is_not_marked_as_done_ba80ba66":{"message":"{ assignmentType } { title } ist nicht als erledigt markiert."},"assignmenttype_title_posted_datetime_cab69444":{"message":"{ assignmentType } { title } eingetragen um { datetime }."},"assignmenttype_title_reminder_datetime_33fa66d5":{"message":"{ assignmentType } { title }, Erinnerung { datetime }"},"beginning_of_your_to_do_history_61ef2dce":{"message":"Beginn Ihrer Aufgabenhistorie"},"calendar_a8563bb2":{"message":"Kalender:"},"calendar_event_89aadc1c":{"message":"Kalenderereignis"},"canvas_planner_98ed106":{"message":"Canvas-Plan"},"close_d634289d":{"message":"Schließen"},"close_opportunity_center_popup_9907d981":{"message":"Fenster „Chancencenter“ schließen"},"count_plural_0_opportunities_one_opportunity_other_765e27fa":{"message":"{ count, plural,\\n     =0 {# Gelegenheiten}\\n    one {# Gelegenheit}\\n  other {# Gelegenheiten}\\n}"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {# abgeschlossenes Element anzeigen}\\n  other {# abgeschlossene Elemente anzeigen}\\n}"},"course_8a63b4a3":{"message":"Kurs"},"course_to_do_bcbbab54":{"message":"{ course } ZU ERLEDIGEN"},"date_at_time_dbdb1b99":{"message":"am { date } um { time }"},"date_ee500367":{"message":"Datum"},"date_is_not_a_valid_date_4ef9f8ba":{"message":"#{ date } Ist kein gültiges Datum."},"date_is_required_8660ec22":{"message":"Datum ist erforderlich"},"date_time_d9fbf2d7":{"message":"Datum und Uhrzeit:"},"delete_a6efa79d":{"message":"Löschen"},"details_98a31b68":{"message":"Details"},"details_a6f427c3":{"message":"Details:"},"discussion_6719c51d":{"message":"Diskussion"},"dismiss_itemtitle_a9fae1b3":{"message":"{ itemTitle } verwerfen"},"dismiss_opportunityname_5995176f":{"message":"{ opportunityName } verwerfen"},"dismissed_8b0b1fc9":{"message":"Verworfen"},"dismissed_opportunities_f0826640":{"message":"Verworfene Chancen"},"due_5d7267be":{"message":"Fällig:"},"due_date_124fdd99":{"message":"Fällig: { date }"},"edit_c5fbea07":{"message":"Ändern"},"edit_title_72e5a21e":{"message":"{ title } ändern"},"error_loading_grades_e0b38f4d":{"message":"Fehler beim Laden der Noten"},"error_loading_more_items_3f109d9f":{"message":"Fehler beim Laden weiterer Objekte"},"error_loading_past_items_2881dbb1":{"message":"Fehler beim Laden bisheriger Objekte"},"excused_cf8792eb":{"message":"Entschuldigt"},"failed_to_delete_to_do_64edff49":{"message":"Löschen der Aufgabe fehlgeschlagen"},"failed_to_get_new_activity_17e7ec7c":{"message":"Fehler beim Abrufen einer neuen Tätigkeit"},"failed_to_load_opportunities_52ab6404":{"message":"Laden von Chancen fehlgeschlagen"},"failed_to_save_to_do_ddc7503b":{"message":"Speichern der Aufgabe fehlgeschlagen"},"feedback_6dcc1991":{"message":"Feedback"},"go_to_card_view_dashboard_9d03970e":{"message":"Zum Kartenansichts-Dashboard wechseln"},"graded_25cd3fcd":{"message":"Benotet"},"grades_are_loading_c899652d":{"message":"Noten werden geladen"},"grades_loaded_5056277c":{"message":"Noten geladen"},"items_completed_items_plural_1_item_other_items_717d579f":{"message":"{ items } Abgeschlossen { items, plural,\\n     =1 { Element}\\n  other { Elemente}\\n}"},"late_2be42b88":{"message":"Verspätet"},"list_collapsed_9ac35920":{"message":"Liste ausgeblendet."},"list_collapsed_dde87718":{"message":"Liste ausgeblendet"},"list_expanded_efec2d0":{"message":"Liste eingeblendet."},"load_more_a36f9cf9":{"message":"Mehr laden"},"load_prior_dates_f2b0f6f0":{"message":"Frühere Termine laden"},"loaded_count_plural_0_items_one_item_other_items_e58533e9":{"message":"Geladene { count, plural,\\n     =0 {# Elemente}\\n    one {# Element}\\n  other {# Elemente}\\n}"},"loading_25990131":{"message":"Wird geladen ..."},"loading_725811ca":{"message":"Ladevorgang läuft"},"loading_grades_c842c887":{"message":"Benoter werden geladen"},"loading_past_items_ca499e75":{"message":"Spätere Elemente werden geladen"},"loading_planner_items_947a813d":{"message":"Planungselemente werden geladen."},"location_3b6ff307":{"message":"Standort:"},"looks_like_there_isn_t_anything_here_d9bcef49":{"message":"Sieht so aus, als wäre hier nichts."},"missing_1a256b3b":{"message":"Fehlt"},"missing_items_for_title_516511f8":{"message":"Fehlende Elemente für { title }"},"my_grades_98834476":{"message":"Meine Noten"},"new_13daf639":{"message":"Neu"},"new_activity_8b84847d":{"message":"Neue Aktivität"},"new_activity_for_title_14c9c3af":{"message":"Neue Aktivität für { title }"},"new_opportunities_7d349c4d":{"message":"Neue Chancen"},"next_month_749b1778":{"message":"Nächster Monat"},"no_due_dates_assigned_e8f5bac8":{"message":"Keine Fälligkeitsdaten zugewiesen"},"no_grade_3b4d7f3e":{"message":"Keine Note"},"nothing_for_now_e3e3ce2a":{"message":"Zurzeit liegt nichts vor"},"nothing_here_needs_attention_c4eaded6":{"message":"Nichts, das beachtet werden muss."},"nothing_more_to_do_b665da42":{"message":"Nichts weiter zu tun."},"nothing_new_needs_attention_3ac548d4":{"message":"Nichts Neues, das beachtet werden muss"},"nothing_planned_today_selecting_most_recent_item_ffd71bff":{"message":"Heute nichts geplant. Auswahl des letzten Elements."},"nothing_planned_today_selecting_next_item_f6718aa":{"message":"Heute nichts geplant. Auswahl des nächsten Element."},"nothing_planned_yet_8675ffe9":{"message":"Noch nichts geplant"},"numpoints_points_8621a43b":{"message":"{ numPoints } Punkte"},"only_most_recent_grading_period_shown_f1ad6458":{"message":"* Nur der letzte Benotungszeitraum wird angezeigt."},"opportunities_popup_f6703842":{"message":"Chancen-Popup-Fenster"},"option_selected_list_collapsed_e00180ff":{"message":"{ option } ausgewählt. Liste ausgeblendet."},"optional_add_course_ef0d70fc":{"message":"Optional: Kurs hinzufügen"},"page_50c4823d":{"message":"Seite"},"peer_review_74f26a13":{"message":"Kollegenkorrektur"},"peer_review_for_itemtitle_358cb413":{"message":"Kollegenüberprüfung für { itemTitle }"},"points_bceb5005":{"message":"Punkte"},"points_points_63e59cce":{"message":"{ points } Punkte"},"previous_month_bb1e3c84":{"message":"Vorheriger Monat"},"pts_699bd9aa":{"message":"Pkte."},"quiz_e0dcce8f":{"message":"Quiz"},"reminder_date_4564d12d":{"message":"Erinnerung: { date }"},"replies_4a8577c8":{"message":"Antworten"},"save_11a80ec3":{"message":"Speichern"},"scroll_up_to_see_your_history_19b14cad":{"message":"Blättern Sie hoch, um Ihren Verlauf zu sehen!"},"scrolls_up_to_the_previous_item_with_new_activity_99717459":{"message":"Blättert zum vorherigen Element mit neuer Aktivität."},"show_all_ae37d610":{"message":"Allen zeigen"},"show_my_grades_ebd08684":{"message":"Meine Noten anzeigen"},"startdate_to_enddate_d245175b":{"message":"{ startDate } bis { endDate }"},"startdatetime_enddatetime_20abc10e":{"message":"{ startDateTime } - { endDateTime }"},"startdatetime_endtime_49741bbe":{"message":"{ startDateTime } - { endTime }"},"starttime_to_endtime_d7cc249d":{"message":"{ startTime } bis { endTime }"},"submitted_318fad53":{"message":"Abgegeben"},"success_to_do_created_e34ed395":{"message":"Erfolg: Aufgabenliste erstellt"},"task_16b0ef38":{"message":"Aufgabe"},"the_date_and_time_this_to_do_is_due_74c823d4":{"message":"Datum und Uhrzeit dieser Aufgabe sind fällig"},"there_are_no_points_associated_with_this_item_449c712a":{"message":"Mit diesem Konto sind keine Punkte verknüpft."},"time_2b5aac58":{"message":"Zeit"},"title_ee03d132":{"message":"Titel"},"title_is_required_6ddcab69":{"message":"Titel ist erforderlich"},"to_do_1d554f36":{"message":"Zu erledigen"},"to_do_date_4b211ad0":{"message":"Zu erledigen: { date }"},"to_do_items_loading_d1cdfcd5":{"message":"Zu erledigende Aufgaben werden geladen"},"today_76e10f9c":{"message":"Heute"},"today_at_date_8ac30d6":{"message":"Heute, am { date }"},"tomorrow_9a6c9a00":{"message":"Morgen"},"tomorrow_at_date_b53f2cf1":{"message":"Morgen, am { date }"},"unable_to_mark_as_complete_8141856d":{"message":"Kann nicht als fertiggestellt markiert werden."},"use_arrow_keys_to_navigate_options_2021cc50":{"message":"Navigieren Sie mit den Pfeiltasten in den Optionen."},"yesterday_at_date_1aa6d18e":{"message":"Gestern, am { date }"},"yesterday_c6bd6abf":{"message":"Gestern"},"you_have_media_feedback_f5f9aba8":{"message":"Sie haben Medien-Feedback."},"you_must_provide_a_date_and_time_a86839d2":{"message":"Sie müssen ein Datum und eine Uhrzeit angeben."},"you_ve_scrolled_back_to_your_very_first_to_do_29374681":{"message":"Sie haben zurückgeblättert zu ihrer allerersten Aufgabe!"}}')},jDM7:function(e,t){var a={tr:{regexp:/[\u0069]/g,map:{i:"İ"}},az:{regexp:/[\u0069]/g,map:{i:"İ"}},lt:{regexp:/[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,map:{"i̇":"I","j̇":"J","į̇":"Į","i̇̀":"Ì","i̇́":"Í","i̇̃":"Ĩ"}}}
e.exports=function(e,t){var s=a[t]
e=null==e?"":String(e)
s&&(e=e.replace(s.regexp,(function(e){return s.map[e]})))
return e.toUpperCase()}},jJkS:function(e){e.exports=JSON.parse('{"add_to_do_7537af64":{"message":"Adicionar Tarefa"},"add_to_do_7def3c37":{"message":"Adicionar A Fazer"},"address_3159962f":{"message":"Morada:"},"all_day_fb42c4fc":{"message":"Dia todo"},"all_items_loaded_aa256183":{"message":"Todos os itens carregados"},"an_error_occurred_attempting_to_dismiss_the_opport_f86e0667":{"message":"Ocorreu um erro ao tentar descartar a oportunidade."},"announcement_fb4cb645":{"message":"Anúncio"},"are_you_sure_you_want_to_delete_this_planner_item_b71e330c":{"message":"Tem a certeza que deseja apagar este item de planeador?"},"assignment_976578a8":{"message":"Tarefa"},"assignmenttype_title_6612d008":{"message":"{ assignmentType } { title }."},"assignmenttype_title_all_day_on_datetime_9768903c":{"message":"{ assignmentType } { title }, o dia todo { datetime }."},"assignmenttype_title_at_datetime_478f0709":{"message":"{ assignmentType } { title }, em { datetime }."},"assignmenttype_title_at_datetime_until_endtime_a5900e38":{"message":"{ assignmentType } { title }, { datetime } até { endTime }"},"assignmenttype_title_due_datetime_a112d8ff":{"message":"{ assignmentType } { title }, devido { datetime }."},"assignmenttype_title_has_a_to_do_time_at_datetime_e07310e8":{"message":"{ assignmentType } { title } tem um tempo para fazer { datetime }."},"assignmenttype_title_is_marked_as_done_a8dc46ef":{"message":"{ assignmentType } { title } está marcado como concluído."},"assignmenttype_title_is_not_marked_as_done_ba80ba66":{"message":"{ assignmentType } { title } não está marcado como concluído."},"assignmenttype_title_posted_datetime_cab69444":{"message":"{ assignmentType } { title } postado { datetime }."},"assignmenttype_title_reminder_datetime_33fa66d5":{"message":"{ assignmentType } { title }, lembrete { datetime }."},"beginning_of_your_to_do_history_61ef2dce":{"message":"Início do seu histórico de tarefas"},"calendar_a8563bb2":{"message":"Calendário:"},"calendar_event_89aadc1c":{"message":"Evento do calendário"},"canvas_planner_98ed106":{"message":"Planeador Canvas"},"close_d634289d":{"message":"Fechar"},"close_opportunity_center_popup_9907d981":{"message":"Fechar o popup Opportunity Center"},"count_plural_0_opportunities_one_opportunity_other_765e27fa":{"message":"{ count, plural,\\n     =0 {# oportunidades}\\n    one {# oportunidade}\\n  other {# oportunidades}\\n}"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {Mostrar # item completo}\\n  other {Mostrar # itens completos}\\n}"},"course_8a63b4a3":{"message":"Disciplina"},"course_to_do_bcbbab54":{"message":"{ course } TAREFA"},"date_at_time_dbdb1b99":{"message":"{ date } em { time }"},"date_ee500367":{"message":"Data"},"date_is_not_a_valid_date_4ef9f8ba":{"message":"#{ date } não é uma data válida."},"date_is_required_8660ec22":{"message":"Data requerida"},"date_time_d9fbf2d7":{"message":"Data e Hora:"},"delete_a6efa79d":{"message":"Eliminar"},"details_98a31b68":{"message":"Detalhes"},"details_a6f427c3":{"message":"Detalhes:"},"discussion_6719c51d":{"message":"Discussão"},"dismiss_itemtitle_a9fae1b3":{"message":"Ignorar { itemTitle }"},"dismiss_opportunityname_5995176f":{"message":"Ignorar { opportunityName }"},"dismissed_8b0b1fc9":{"message":"Demitido"},"dismissed_opportunities_f0826640":{"message":"Oportunidades demitidas"},"due_5d7267be":{"message":"Vencimento:"},"due_date_124fdd99":{"message":"Vencimento: { date }"},"edit_c5fbea07":{"message":"Editar"},"edit_title_72e5a21e":{"message":"Editar { title }"},"error_loading_grades_e0b38f4d":{"message":"Erro ao carregar classificações"},"error_loading_more_items_3f109d9f":{"message":"Erro ao carregar mais itens"},"error_loading_past_items_2881dbb1":{"message":"Erro ao carregar últimos itens"},"excused_cf8792eb":{"message":"Desculpado"},"failed_to_delete_to_do_64edff49":{"message":"Falha ao eliminar tarefa"},"failed_to_get_new_activity_17e7ec7c":{"message":"Falha ao obter nova atividade"},"failed_to_load_opportunities_52ab6404":{"message":"Falha ao carregar oportunidades"},"failed_to_save_to_do_ddc7503b":{"message":"Falha ao guardar tarefa"},"feedback_6dcc1991":{"message":"Resposta"},"go_to_card_view_dashboard_9d03970e":{"message":"Ir para o Painel de Visualização do Cartão"},"graded_25cd3fcd":{"message":"Classificado"},"grades_are_loading_c899652d":{"message":"As classificações estão a carregar"},"grades_loaded_5056277c":{"message":"Classificações carregadas"},"items_completed_items_plural_1_item_other_items_717d579f":{"message":"{ items } item { items, plural,\\n     =1 {completados}\\n  other {items}\\n}"},"late_2be42b88":{"message":"Atrasado"},"list_collapsed_9ac35920":{"message":"Lista recolhida."},"list_collapsed_dde87718":{"message":"Lista recolhida"},"list_expanded_efec2d0":{"message":"Lista expandida."},"load_more_a36f9cf9":{"message":"Carregar mais"},"load_prior_dates_f2b0f6f0":{"message":"Carregar datas anteriores"},"loaded_count_plural_0_items_one_item_other_items_e58533e9":{"message":"Itens { count, plural,\\n     =0 {# carregados}\\n    one {# item}\\n  other {# itens}\\n}"},"loading_25990131":{"message":"A carregar..."},"loading_725811ca":{"message":"a carregar"},"loading_grades_c842c887":{"message":"A carregar classificações"},"loading_past_items_ca499e75":{"message":"A carregar itens passados"},"loading_planner_items_947a813d":{"message":"A carregar itens do planeador"},"location_3b6ff307":{"message":"Local:"},"looks_like_there_isn_t_anything_here_d9bcef49":{"message":"Parece que não há nada aqui"},"missing_1a256b3b":{"message":"Em falta"},"missing_items_for_title_516511f8":{"message":"Itens em falta para { title }"},"my_grades_98834476":{"message":"Minhas classificações"},"new_13daf639":{"message":"Novo"},"new_activity_8b84847d":{"message":"Nova atividade"},"new_activity_for_title_14c9c3af":{"message":"Nova atividade para { title }"},"new_opportunities_7d349c4d":{"message":"Novas oportunidades"},"next_month_749b1778":{"message":"Próximo mês"},"no_due_dates_assigned_e8f5bac8":{"message":"Nenhuma data de vencimento atribuída"},"no_grade_3b4d7f3e":{"message":"Sem classificação"},"nothing_for_now_e3e3ce2a":{"message":"Nada de momento"},"nothing_here_needs_attention_c4eaded6":{"message":"Nada aqui precisa de atenção."},"nothing_more_to_do_b665da42":{"message":"Nada mais a fazer"},"nothing_new_needs_attention_3ac548d4":{"message":"Nada de novo precisa de atenção"},"nothing_planned_today_selecting_most_recent_item_ffd71bff":{"message":"Nada planeado hoje. Selecionando o item mais recente."},"nothing_planned_today_selecting_next_item_f6718aa":{"message":"Nada planeado hoje. Selecionar o próximo item."},"nothing_planned_yet_8675ffe9":{"message":"Nada planejado ainda"},"numpoints_points_8621a43b":{"message":"{ numPoints } pontos"},"only_most_recent_grading_period_shown_f1ad6458":{"message":"* Apenas o período de classificação mais recente exibido."},"opportunities_popup_f6703842":{"message":"popup oportunidades"},"option_selected_list_collapsed_e00180ff":{"message":"{ option } selecionado. Lista recolhida."},"optional_add_course_ef0d70fc":{"message":"Opcional: Adicionar Disciplina"},"page_50c4823d":{"message":"Página"},"peer_review_74f26a13":{"message":"Revisão por colegas"},"peer_review_for_itemtitle_358cb413":{"message":"Revisão por pares para { itemTitle }"},"points_bceb5005":{"message":"pontos"},"points_points_63e59cce":{"message":"{ points } pontos"},"previous_month_bb1e3c84":{"message":"Mês anterior"},"pts_699bd9aa":{"message":"pts"},"quiz_e0dcce8f":{"message":"Teste"},"reminder_date_4564d12d":{"message":"Lembrete: { date }"},"replies_4a8577c8":{"message":"Respostas"},"save_11a80ec3":{"message":"Guardar"},"scroll_up_to_see_your_history_19b14cad":{"message":"Role para cima para ver seu histórico!"},"scrolls_up_to_the_previous_item_with_new_activity_99717459":{"message":"Rola até o item anterior com nova atividade."},"show_all_ae37d610":{"message":"Mostrar tudo"},"show_my_grades_ebd08684":{"message":"Mostrar minhas classificações"},"startdate_to_enddate_d245175b":{"message":"{ startDate } a { endDate }"},"startdatetime_enddatetime_20abc10e":{"message":"{ startDateTime } - { endDateTime }"},"startdatetime_endtime_49741bbe":{"message":"{ startDateTime } - { endTime }"},"starttime_to_endtime_d7cc249d":{"message":"{ startTime } a { endTime }"},"submitted_318fad53":{"message":"Submetido"},"success_to_do_created_e34ed395":{"message":"Sucesso: Tarefa criada"},"task_16b0ef38":{"message":"Tarefa"},"the_date_and_time_this_to_do_is_due_74c823d4":{"message":"A data e a hora em que isso é feito"},"there_are_no_points_associated_with_this_item_449c712a":{"message":"Não há pontos associados a este item"},"time_2b5aac58":{"message":"Hora"},"title_ee03d132":{"message":"Título"},"title_is_required_6ddcab69":{"message":"título é obrigatório"},"to_do_1d554f36":{"message":"A Fazer"},"to_do_date_4b211ad0":{"message":"Tarefa: { date }"},"to_do_items_loading_d1cdfcd5":{"message":"A carregar itens a fazer"},"today_76e10f9c":{"message":"Hoje"},"today_at_date_8ac30d6":{"message":"Hoje em { date }"},"tomorrow_9a6c9a00":{"message":"Amanhã"},"tomorrow_at_date_b53f2cf1":{"message":"Amanhã em { date }"},"unable_to_mark_as_complete_8141856d":{"message":"Não é possível marcar como concluído."},"use_arrow_keys_to_navigate_options_2021cc50":{"message":"Use as teclas de seta para navegar pelas opções."},"yesterday_at_date_1aa6d18e":{"message":"Ontem em { date }"},"yesterday_c6bd6abf":{"message":"Ontem"},"you_have_media_feedback_f5f9aba8":{"message":"Você tem resposta da mídia."},"you_must_provide_a_date_and_time_a86839d2":{"message":"Você deve fornecer uma data e hora."},"you_ve_scrolled_back_to_your_very_first_to_do_29374681":{"message":"Você percorreu de volta sua primeira Tarefa!"}}')},lk7d:function(e){e.exports=JSON.parse('{"add_to_do_7537af64":{"message":"Add ‘to-do’"},"add_to_do_7def3c37":{"message":"Add ‘to-do’"},"address_3159962f":{"message":"Address:"},"all_day_fb42c4fc":{"message":"All day"},"all_items_loaded_aa256183":{"message":"All items loaded"},"an_error_occurred_attempting_to_dismiss_the_opport_f86e0667":{"message":"An error occurred attempting to dismiss the opportunity."},"announcement_fb4cb645":{"message":"Announcement"},"are_you_sure_you_want_to_delete_this_planner_item_b71e330c":{"message":"Are you sure you want to delete this planner item?"},"assignment_976578a8":{"message":"Assignment"},"assignmenttype_title_6612d008":{"message":"{ assignmentType } { title }."},"assignmenttype_title_all_day_on_datetime_9768903c":{"message":"{ assignmentType } { title }, all day on { datetime }."},"assignmenttype_title_at_datetime_478f0709":{"message":"{ assignmentType } { title }, at { datetime }."},"assignmenttype_title_at_datetime_until_endtime_a5900e38":{"message":"{ assignmentType } { title }, at { datetime } until { endTime }"},"assignmenttype_title_due_datetime_a112d8ff":{"message":"{ assignmentType } { title }, due { datetime }."},"assignmenttype_title_has_a_to_do_time_at_datetime_e07310e8":{"message":"{ assignmentType } { title } has a ‘to-do’ time at { datetime }."},"assignmenttype_title_is_marked_as_done_a8dc46ef":{"message":"{ assignmentType } { title } is marked as done."},"assignmenttype_title_is_not_marked_as_done_ba80ba66":{"message":"{ assignmentType } { title } is not marked as done."},"assignmenttype_title_posted_datetime_cab69444":{"message":"{ assignmentType } { title } posted { datetime }."},"assignmenttype_title_reminder_datetime_33fa66d5":{"message":"{ assignmentType } { title }, reminder { datetime }."},"beginning_of_your_to_do_history_61ef2dce":{"message":"Beginning of your ‘to-do’ history"},"calendar_a8563bb2":{"message":"Calendar:"},"calendar_event_89aadc1c":{"message":"Calendar event"},"canvas_planner_98ed106":{"message":"Canvas planner"},"close_d634289d":{"message":"Close"},"close_opportunity_center_popup_9907d981":{"message":"Close Opportunity Centre popup"},"count_plural_0_opportunities_one_opportunity_other_765e27fa":{"message":"{ count, plural,\\n     =0 {# opportunities}\\n    one {# opportunity}\\n  other {# opportunities}\\n}"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {Show # completed item}\\n  other {Show # completed items}\\n}"},"course_8a63b4a3":{"message":"Course"},"course_to_do_bcbbab54":{"message":"{ course } TO DO"},"date_at_time_dbdb1b99":{"message":"{ date } at { time }"},"date_ee500367":{"message":"Date"},"date_is_not_a_valid_date_4ef9f8ba":{"message":"#{ date } is not a valid date."},"date_is_required_8660ec22":{"message":"Date is required"},"date_time_d9fbf2d7":{"message":"Date & Time:"},"delete_a6efa79d":{"message":"Delete"},"details_98a31b68":{"message":"Details"},"details_a6f427c3":{"message":"Details:"},"discussion_6719c51d":{"message":"Discussion"},"dismiss_itemtitle_a9fae1b3":{"message":"Dismiss { itemTitle }"},"dismiss_opportunityname_5995176f":{"message":"Dismiss { opportunityName }"},"dismissed_8b0b1fc9":{"message":"Dismissed"},"dismissed_opportunities_f0826640":{"message":"Dismissed opportunities"},"due_5d7267be":{"message":"Due:"},"due_date_124fdd99":{"message":"Due: { date }"},"edit_c5fbea07":{"message":"Edit"},"edit_title_72e5a21e":{"message":"Edit { title }"},"error_loading_grades_e0b38f4d":{"message":"Error loading grades"},"error_loading_more_items_3f109d9f":{"message":"Error loading more items"},"error_loading_past_items_2881dbb1":{"message":"Error loading past items"},"excused_cf8792eb":{"message":"Excused"},"failed_to_delete_to_do_64edff49":{"message":"Failed to delete ‘to-do’"},"failed_to_get_new_activity_17e7ec7c":{"message":"Failed to get new activity"},"failed_to_load_opportunities_52ab6404":{"message":"Failed to load opportunities"},"failed_to_save_to_do_ddc7503b":{"message":"Failed to save ‘to-do’"},"feedback_6dcc1991":{"message":"Feedback"},"go_to_card_view_dashboard_9d03970e":{"message":"Go to Card View Dashboard"},"graded_25cd3fcd":{"message":"Graded"},"grades_are_loading_c899652d":{"message":"Grades are loading"},"grades_loaded_5056277c":{"message":"Grades loaded"},"items_completed_items_plural_1_item_other_items_717d579f":{"message":"{ items } completed { items, plural,\\n     =1 {item}\\n  other {items}\\n}"},"late_2be42b88":{"message":"Late"},"list_collapsed_9ac35920":{"message":"List collapsed."},"list_collapsed_dde87718":{"message":"List collapsed"},"list_expanded_efec2d0":{"message":"List expanded."},"load_more_a36f9cf9":{"message":"Load more"},"load_prior_dates_f2b0f6f0":{"message":"Load prior dates"},"loaded_count_plural_0_items_one_item_other_items_e58533e9":{"message":"Loaded { count, plural,\\n     =0 {# items}\\n    one {# item}\\n  other {# items}\\n}"},"loading_25990131":{"message":"Loading..."},"loading_725811ca":{"message":"loading"},"loading_grades_c842c887":{"message":"Loading grades"},"loading_past_items_ca499e75":{"message":"Loading past items"},"loading_planner_items_947a813d":{"message":"Loading planner items"},"location_3b6ff307":{"message":"Location:"},"looks_like_there_isn_t_anything_here_d9bcef49":{"message":"Looks like there isn\'\'t anything here"},"missing_1a256b3b":{"message":"Missing"},"missing_items_for_title_516511f8":{"message":"Missing items for { title }"},"my_grades_98834476":{"message":"My grades"},"new_13daf639":{"message":"New"},"new_activity_8b84847d":{"message":"New activity"},"new_activity_for_title_14c9c3af":{"message":"New activity for { title }"},"new_opportunities_7d349c4d":{"message":"New opportunities"},"next_month_749b1778":{"message":"Next month"},"no_due_dates_assigned_e8f5bac8":{"message":"No due dates assigned"},"no_grade_3b4d7f3e":{"message":"No mark"},"nothing_for_now_e3e3ce2a":{"message":"Nothing for now"},"nothing_here_needs_attention_c4eaded6":{"message":"Nothing here needs attention."},"nothing_more_to_do_b665da42":{"message":"Nothing more to do"},"nothing_new_needs_attention_3ac548d4":{"message":"Nothing new needs attention."},"nothing_planned_today_selecting_most_recent_item_ffd71bff":{"message":"Nothing planned today. Selecting most recent item."},"nothing_planned_today_selecting_next_item_f6718aa":{"message":"Nothing planned today. Selecting next item."},"nothing_planned_yet_8675ffe9":{"message":"Nothing planned yet"},"numpoints_points_8621a43b":{"message":"{ numPoints } points"},"only_most_recent_grading_period_shown_f1ad6458":{"message":"*Only most recent grading period shown."},"opportunities_popup_f6703842":{"message":"opportunities popup"},"option_selected_list_collapsed_e00180ff":{"message":"{ option } selected. List collapsed."},"optional_add_course_ef0d70fc":{"message":"Optional: Add course"},"page_50c4823d":{"message":"Page"},"peer_review_74f26a13":{"message":"Peer Review"},"peer_review_for_itemtitle_358cb413":{"message":"Peer Review for { itemTitle }"},"points_bceb5005":{"message":"points"},"points_points_63e59cce":{"message":"{ points } points"},"previous_month_bb1e3c84":{"message":"Previous month"},"pts_699bd9aa":{"message":"pts"},"quiz_e0dcce8f":{"message":"Quiz"},"reminder_date_4564d12d":{"message":"Reminder: { date }"},"replies_4a8577c8":{"message":"Replies"},"save_11a80ec3":{"message":"Save"},"scroll_up_to_see_your_history_19b14cad":{"message":"Scroll up to see your history!"},"scrolls_up_to_the_previous_item_with_new_activity_99717459":{"message":"Scrolls up to the previous item with new activity."},"show_all_ae37d610":{"message":"Show all"},"show_my_grades_ebd08684":{"message":"Show my grades"},"startdate_to_enddate_d245175b":{"message":"{ startDate } to { endDate }"},"startdatetime_enddatetime_20abc10e":{"message":"{ startDateTime } - { endDateTime }"},"startdatetime_endtime_49741bbe":{"message":"{ startDateTime } - { endTime }"},"starttime_to_endtime_d7cc249d":{"message":"{ startTime } to { endTime }"},"submitted_318fad53":{"message":"Submitted"},"success_to_do_created_e34ed395":{"message":"Success: ‘To-do’ created"},"task_16b0ef38":{"message":"Task"},"the_date_and_time_this_to_do_is_due_74c823d4":{"message":"The date and time this ‘to-do’ is due"},"there_are_no_points_associated_with_this_item_449c712a":{"message":"There are no points associated with this item"},"time_2b5aac58":{"message":"Time"},"title_ee03d132":{"message":"Title"},"title_is_required_6ddcab69":{"message":"title is required"},"to_do_1d554f36":{"message":"To-do"},"to_do_date_4b211ad0":{"message":"To-do: { date }"},"to_do_items_loading_d1cdfcd5":{"message":"‘To-do’ items loading"},"today_76e10f9c":{"message":"Today"},"today_at_date_8ac30d6":{"message":"Today at { date }"},"tomorrow_9a6c9a00":{"message":"Tomorrow"},"tomorrow_at_date_b53f2cf1":{"message":"Tomorrow at { date }"},"unable_to_mark_as_complete_8141856d":{"message":"Unable to mark as complete."},"use_arrow_keys_to_navigate_options_2021cc50":{"message":"Use arrow keys to navigate options."},"yesterday_at_date_1aa6d18e":{"message":"Yesterday at { date }"},"yesterday_c6bd6abf":{"message":"Yesterday"},"you_have_media_feedback_f5f9aba8":{"message":"You have media feedback."},"you_must_provide_a_date_and_time_a86839d2":{"message":"You must provide a time and date."},"you_ve_scrolled_back_to_your_very_first_to_do_29374681":{"message":"You\'\'ve scrolled back to your very first to-do!"}}')},oCWi:function(e,t,a){var s=a("Pwfc")
e.exports=function(e,t){return s(e,t,"_")}},ppAs:function(e,t,a){"use strict"
var s=a("ouhR")
var n=a.n(s)
var i=a("GLiE")
var r=a.n(i)
var o=a("5Ky4")
var d=a("pQTu")
var l=a("m0r6")
Object(l["a"])(JSON.parse('{"ar":{"user_content_aaf0fb5a":"محتوى المستخدم"},"cy":{"user_content_aaf0fb5a":"Cynnwys Defnyddiwr"},"da":{"user_content_aaf0fb5a":"Brugerindhold"},"da-x-k12":{"user_content_aaf0fb5a":"Brugerindhold"},"de":{"user_content_aaf0fb5a":"Benutzer-Content"},"el":{"user_content_aaf0fb5a":"Περιεχόμενο Χρήστη"},"en-AU":{"user_content_aaf0fb5a":"User Content"},"en-AU-x-unimelb":{"user_content_aaf0fb5a":"User Content"},"en-CA":{"user_content_aaf0fb5a":"User Content"},"en-GB":{"user_content_aaf0fb5a":"User content"},"en-GB-x-lbs":{"user_content_aaf0fb5a":"User content"},"en-GB-x-ukhe":{"user_content_aaf0fb5a":"User content"},"es":{"user_content_aaf0fb5a":"Contenido del usuario"},"fa":{"user_content_aaf0fb5a":"محتوای کاربر"},"fi":{"user_content_aaf0fb5a":"Käyttäjän sisältö"},"fr":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"fr-CA":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"he":{"user_content_aaf0fb5a":"תוכן משתמש"},"ht":{"user_content_aaf0fb5a":"Kontni Itilizatè"},"hu":{"user_content_aaf0fb5a":"Felhasználói tartalom"},"is":{"user_content_aaf0fb5a":"Notandaefni"},"it":{"user_content_aaf0fb5a":"Contenuto utente"},"ja":{"user_content_aaf0fb5a":"ユーザーコンテンツ"},"mi":{"user_content_aaf0fb5a":"Ihirangi kaiwhakamahi"},"nb":{"user_content_aaf0fb5a":"Brukerinnhold"},"nb-x-k12":{"user_content_aaf0fb5a":"Brukerinnhold"},"nl":{"user_content_aaf0fb5a":"Gebruikersinhoud"},"nn":{"user_content_aaf0fb5a":"Brukarinnhald"},"pl":{"user_content_aaf0fb5a":"Zawartość użytkownika"},"pt":{"user_content_aaf0fb5a":"Conteúdo do Utilizador"},"pt-BR":{"user_content_aaf0fb5a":"Conteúdo do Usuário"},"ru":{"user_content_aaf0fb5a":"Контент пользователя"},"sl":{"user_content_aaf0fb5a":"Vsebina uporabnika"},"sv":{"user_content_aaf0fb5a":"Användarinnehåll"},"sv-x-k12":{"user_content_aaf0fb5a":"Användarinnehåll"},"tr":{"user_content_aaf0fb5a":"Kullanıcı İçeriği"},"uk":{"user_content_aaf0fb5a":"Контент користувача"},"zh-Hans":{"user_content_aaf0fb5a":"用户内容"},"zh-Hant":{"user_content_aaf0fb5a":"使用者內容"}}'))
a("jQeR")
a("0sPK")
var u=d["default"].scoped("user_content")
const _={translateMathmlForScreenreaders(e){const t=n()("<div/>").html(e.attr("x-canvaslms-safe-mathml")).html()
const a=n()('<span class="hidden-readable"></span>')
a.html(t)
return a},toMediaCommentLink(e){const t=n()("<a\n        id='media_comment_".concat(Object(o["a"])(n()(e).data("media_comment_id")),"'\n        data-media_comment_type='").concat(Object(o["a"])(n()(e).data("media_comment_type")),"'\n        class='instructure_inline_media_comment ").concat(Object(o["a"])(e.nodeName.toLowerCase()),"_comment'\n        data-alt='").concat(Object(o["a"])(n()(e).attr("data-alt")),"'\n      />"))
t.html(n()(e).html())
return t},convert(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const a=n()("<div />").html(e)
a.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function(){return _.toMediaCommentLink(this)}))
a.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
if(!t.forEditing){a.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function(){const e=n()(this)
if(!e.data("uc_snippet")||!e.data("uc_sig"))return this
const t=r.a.uniqueId("uc_")
let a="/object_snippet"
ENV.files_domain&&(a="//".concat(ENV.files_domain).concat(a))
const s=n()("<form\n            action='".concat(Object(o["a"])(a),"'\n            method='post'\n            class='user_content_post_form'\n            target='").concat(Object(o["a"])(t),"'\n            id='form-").concat(Object(o["a"])(t),"'\n          />"))
s.append(n()("<input type='hidden'/>").attr({name:"object_data",value:e.data("uc_snippet")}))
s.append(n()("<input type='hidden'/>").attr({name:"s",value:e.data("uc_sig")}))
n()("body").append(s)
setTimeout(()=>s.submit(),0)
return n()("<iframe\n            class='user_content_iframe'\n            name='".concat(Object(o["a"])(t),"'\n            style='width: ").concat(Object(o["a"])(e.data("uc_width")),"; height: ").concat(Object(o["a"])(e.data("uc_height")),";'\n            frameborder='0'\n            title='").concat(Object(o["a"])(u.t("User Content")),"'\n          />"))}))
a.find("img.equation_image").each((e,t)=>{const a=n()(t)
const s=_.translateMathmlForScreenreaders(a)
a.removeAttr("x-canvaslms-safe-mathml")
a.after(s)})}return a.html()}}
t["a"]=_},q7Px:function(e,t,a){"use strict"
a.d(t,"a",(function(){return c}))
var s=a("VTBJ")
var n=a("1OyB")
var i=a("vuIU")
var r=a("md7G")
var o=a("foSv")
var d=a("Ji7U")
var l=a("q1tI")
var u=a.n(l)
var _=a("hPGw")
var m=u.a.createElement("path",{d:"M338.824 903.53V790.587h1242.465V903.53H338.824zm0 338.823v-112.941h903.529v112.94h-903.53zm282.352-903.53c-93.402 0-169.411-76.009-169.411-169.411C451.765 76.009 527.775 0 621.176 0c93.403 0 169.412 76.01 169.412 169.412 0 26.09-6.437 50.484-16.94 72.62L999.98 468.255l-79.962 79.962-226.221-226.334c-22.137 10.504-46.532 16.942-72.622 16.942zm847.06 1444.857v-315.445h315.444l-315.445 315.445zM1016.47 225.882v112.942h790.588v1016.47h-451.765v451.765H112.941V338.824h225.883V225.882H0V1920h1421.478c45.176 0 87.755-17.619 119.717-49.581l329.224-329.11c31.962-32.076 49.581-74.655 49.581-119.831V225.882h-903.53z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var c=function(e){Object(d["a"])(t,e)
function t(){Object(n["a"])(this,t)
return Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return u.a.createElement(_["a"],Object.assign({},this.props,{name:"IconNote",viewBox:"0 0 1920 1920",bidirectional:true}),m)}}])
t.displayName="IconNoteLine"
return t}(l["Component"])
c.glyphName="note"
c.variant="Line"
c.propTypes=Object(s["a"])({},_["a"].propTypes)},qJ69:function(e,t,a){var s=a("Pwfc")
var n=a("Wg0N")
e.exports=function(e,t){return n(s(e,t),t)}},r544:function(e,t,a){var s=a("Pwfc")
var n=a("jDM7")
e.exports=function(e,t){return s(e,t,"-").replace(/^.|-./g,(function(e){return n(e,t)}))}},rJZp:function(e,t,a){var s=a("Pwfc")
e.exports=function(e,t){return s(e,t,"-")}},sZ01:function(e,t,a){"use strict"
var s=a("VTBJ")
var n=a("q1tI")
var i=a.n(n)
var r=a("i8i4")
var o=a.n(r)
var d=a("/MKj")
var l=a("f0Wu")
var u=a.n(l)
var _=a("TSYQ")
var m=a.n(_)
var c=a("S4Kx")
var g=a("VTJ5")
var p=a("17x9")
var f=a.n(p)
const h={id:f.a.string,displayName:f.a.string,avatarUrl:f.a.string,color:f.a.string}
const b={text:f.a.string,variant:f.a.string}
const y={id:f.a.string,longName:f.a.string,enrollmentType:f.a.string}
const v={context:f.a.shape({})}
const E={items:f.a.arrayOf(f.a.object),nextUrl:f.a.string}
const A=f.a.oneOf(["small","medium","large"])
const C=f.a.oneOfType([f.a.bool,f.a.shape({excused:f.a.bool,graded:f.a.bool,has_feedback:f.a.bool,late:f.a.bool,missing:f.a.bool,needs_grading:f.a.bool,submitted:f.a.bool})])
const k={author_avatar_url:f.a.string,author_name:f.a.string,comment:f.a.string,is_media:f.a.bool}
var w=a("J2CL")
var T=a("gSD+")
var D=a("5JRF")
function x(e){let t=e.colors,a=e.typography,s=e.spacing
return{fontSize:a.fontSizeMedium,fontFamily:a.fontFamily,fontWeight:a.fontWeightNormal,lineHeight:a.lineHeightCondensed,color:t.oxford,background:t.white,marginTop:s.large}}var F=a("/HcR")
var S=a.n(F)
const O=S.a.namespace()
var B=O
let I={}
function z(e){I=e}function N(){const e=u()()
const t=e.clone().subtract(1,"days")
const a=e.clone().add(1,"days")
return{today:e,yesterday:t,tomorrow:a}}function M(e){const t=N(),a=t.today,s=t.yesterday,n=t.tomorrow
const i=new u.a(e)
const r=[a,s,n]
return r.some(e=>e.isSame(i,"day"))}function L(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u()()
const a=new u.a(e)
return t.isSame(a,"day")}function P(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u()()
const a=new u.a(e)
return a.isBefore(t,"day")||a.isSame(t,"day")}function j(e,t,a){const s=e.isAfter(t)||e.isSame(t)
const n=e.isBefore(a)||e.isSame(a)
return s&&n}function R(e){const t=N(),a=t.today,s=t.yesterday,n=t.tomorrow
const i=new u.a(e)
return L(e,a)?B("Today"):s.isSame(i,"day")?B("Yesterday"):n.isSame(i,"day")?B("Tomorrow"):i.format("dddd")}function q(e){return M(e)?u()(e).format("dddd, MMMM D"):u()(e).format("MMMM D, YYYY")}function H(e){return u()(e).format("MMMM D")}function U(e){const t=N(),a=t.today,s=t.yesterday,n=t.tomorrow
const i=new u.a(e)
return L(e,a)?B("Today at {date}",{date:i.format("LT")}):s.isSame(i,"day")?B("Yesterday at {date}",{date:i.format("LT")}):n.isSame(i,"day")?B("Tomorrow at {date}",{date:i.format("LT")}):B("{date} at {time}",{date:i.format("LL"),time:i.format("LT")})}function X(e,t){return I.dateString?I.dateString(e.toISOString(),{timezone:t}):e.format("ll")}function V(e,t){return I.timeString?I.timeString(e.toISOString(),{timezone:t}):e.format("LT")}function W(e,t){return I.datetimeString?I.datetimeString(e.toISOString(),{timezone:t}):e.format("lll")}function G(e,t,a){return e.isSame(t)?W(e,a):e.dayOfYear()===t.dayOfYear()?B("{startDateTime} - {endTime}",{startDateTime:W(e,a),endTime:V(t,a)}):B("{startDateTime} - {endDateTime}",{startDateTime:W(e,a),endDateTime:W(t,a)})}function Z(e){return u()(e,u.a.ISO_8601).format("YYYY-MM-DD")}function K(e,t){if(!e.length)return u()().tz(t).startOf("day")
const a=e[0]
const s=a[1][0]
if(s)return s.dateBucketMoment.clone()
return u.a.tz(a[0],t).startOf("day")}function Y(e,t){if(!e.length)return u()().tz(t).startOf("day")
const a=e[e.length-1]
const s=a[1][0]
if(s)return s.dateBucketMoment.clone()
return u.a.tz(a[0],t).startOf("day")}var J=a("ODXe")
var Q=a("LvDl")
var $=a.n(Q)
function ee(e){let t=e.borders,a=e.colors,n=e.media,i=e.spacing,r=e.typography
return Object(s["a"])({fontFamily:r.fontFamily,lineHeight:r.lineHeightCondensed,margin:"".concat(i.medium," 0 0 0"),groupColor:a.brand,borderTopWidth:t.widthSmall,borderTopWidthTablet:t.widthMedium,heroMinHeight:"7rem",heroWidth:"12rem",heroWidthLarge:"14rem",heroPadding:"0 0.0625rem",heroColor:a.brand,heroBorderRadius:t.radiusMedium,overlayOpacity:.75,titleFontSize:r.fontSizeXSmall,titleFontSizeTablet:"0.875rem",titleFontWeight:r.fontWeightBold,titleLetterSpacing:"0.0625rem",titleBackground:a.white,titleTextTransform:"uppercase",titlePadding:"".concat(i.xxSmall," ").concat(i.xSmall),titleOverflowGradientHeight:i.xxSmall,titleTextDecoration:"none",titleTextDecorationHover:"underline",titleColor:a.brand},n)}ee["canvas-a11y"]=ee["modern-a11y"]=function(e){let t=e.colors
return{heroTextDecoration:"underline",heroTextDecorationHover:"none",titleColor:t.licorice}}
ee.canvas=function(e){return{groupColor:e["ic-brand-primary"],titleColor:e["ic-brand-primary"]}}
var te=a("dmhj")
var ae=a("bwhI")
var se=a("Qthb")
var ne=a("9lnB")
var ie=a("WfMV")
var re=a("4Pkj")
var oe=a("Xx/m")
var de=a("8ruJ")
var le=a("Q0Ww")
var ue=a("Un/D")
var _e=a("dOsU")
var me=a("Kimu")
var ce=a("+Gzo")
var ge=a("Oak0")
var pe=a("CCpZ")
var fe=a("XGBb")
var he=a("ueqW")
class be extends n["Component"]{render(){return i.a.createElement("div",{ref:this.props.indicatorRef},i.a.createElement(he["a"],{standalone:true,type:"notification",variant:this.props.variant}),i.a.createElement(ie["a"],null,this.props.title))}}be.propTypes={title:p["string"].isRequired,variant:p["string"].isRequired,indicatorRef:p["func"]}
be.defaultProps={indicatorRef:()=>{}}
function ye(e){const t=B("Missing items for {title}",{title:e.title})
return i.a.createElement(be,{title:t,variant:"danger"})}ye.propTypes={title:p["string"].isRequired}
function ve(e){return"Animatable(".concat(e.displayName,")")}function Ee(e){var t,a
return a=t=class extends i.a.Component{constructor(){super(...arguments)
this.registerAnimatable=(e,t,a,s)=>{if(!this.context.dynamicUiManager)return
this.context.dynamicUiManager.registerAnimatable(e,t,a,s)}
this.deregisterAnimatable=(e,t,a)=>{if(!this.context.dynamicUiManager)return
this.context.dynamicUiManager.deregisterAnimatable(e,t,a)}}render(){return i.a.createElement(e,Object.assign({},this.props,{registerAnimatable:this.registerAnimatable,deregisterAnimatable:this.deregisterAnimatable}))}},t.displayName=ve(e),t.contextTypes={dynamicUiManager:Object(p["shape"])({registerAnimatable:p["func"],deregisterAnimatable:p["func"]})},a}function Ae(e){return t=>{e.setStore(t)
return a=>s=>{const n=t.getState()
e.handleAction(s)
const i=a(s)
const r=t.getState()
n===r&&e.uiStateUnchanged(s)
return i}}}var Ce=a("ZK5y")
var ke=a.n(Ce)
class we{constructor(){this.registries={day:{},group:{},item:{},opportunity:{},"new-activity-indicator":{}}}validateType(e){const t=Object.keys(this.registries)
if(!t.find(t=>t===e))throw new Error("invalid registry type ".concat(e))}register(e,t,a,s){this.validateType(e)
const n=this.registries[e]
s.forEach(e=>n[e]={component:t,index:a,componentIds:s})}deregister(e,t,a){this.validateType(e)
const s=this.registries[e]
a.forEach(e=>{s[e].component===t&&delete s[e]})}getComponent(e,t){this.validateType(e)
return this.registries[e][t]}getFirstComponent(e,t){this.validateType(e)
const a=this.registries[e]
const s=$.a.minBy(t,e=>a[e].index)
return a[s]}getLastComponent(e,t){this.validateType(e)
const a=this.registries[e]
const s=$.a.maxBy(t,e=>a[e].index)
return a[s]}getUniqSortedComponents(e,t){this.validateType(e)
const a=t.map(t=>this.registries[e][t])
return $.a.chain(a).sortBy("index").sortedUniqBy("index").value()}getSortedComponents(e){this.validateType(e)
return $.a.chain(this.registries[e]).values().sortBy("index").sortedUniqBy("index").filter(e=>e.index>=0).value()}getAllGroupsSorted(){const e=this.getSortedComponents("day")
const t=$.a.flatMap(e,e=>this.getUniqSortedComponents("group",e.componentIds))
return t}getAllItemsSorted(){const e=this.getAllGroupsSorted()
const t=$.a.flatMap(e,e=>this.getUniqSortedComponents("item",e.componentIds))
return t}getAllOpportunitiesSorted(){return this.getSortedComponents("opportunity")}getAllNewActivityIndicatorsSorted(){const e=this.getAllGroupsSorted()
const t=$.a.chain(e).flatMap(e=>this.getUniqSortedComponents("new-activity-indicator",e.componentIds)).filter(e=>null!=e).value()
return t}}var Te=a("WJ2Z")
var De=a.n(Te)
class xe{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.animationQueue=[]
this.fixedElement=null
this.fixedElementsInitialPositionInViewport=null
this.runAnimationQueue=()=>{while(this.animationQueue.length){const e=this.animationQueue.shift()
e()}}
Object.assign(this,{velocity:De.a,document:document,window:window},e)}getWindow(){return this.window}focusElement(e){e?this.queueAnimation(()=>{"function"===typeof e.focus&&e.focus()},"unshift"):console.error("".concat(e," passed to Animator#focusElement"))}elementPositionMemo(e){return{element:e,rect:e.getBoundingClientRect()}}maintainViewportPositionFromMemo(e,t){this.queueAnimation(()=>{const a=t.rect.top
const s=e.getBoundingClientRect().top
const n=this.document.documentElement.getBoundingClientRect().top
const i=s-n
const r=i-a
this.window.scroll(0,r)},"push")}forceScrollTo(e,t,a){this.queueAnimation(()=>{this.velocity(e,"scroll",{offset:-t,duration:1e3,easing:"ease-in-out",complete:a})})}scrollTo(e,t,a){this.queueAnimation(()=>{this.isOffScreen(e,t)?this.velocity(e,"scroll",{offset:-t,duration:1e3,easing:"ease-in-out",complete:a}):a&&a()})}scrollToTop(){this.scrollTo(document.documentElement,0)}queueAnimation(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"push"
this.animationQueue[t](e)
this.window.requestAnimationFrame(this.runAnimationQueue)}isAboveScreen(e,t){return e.getBoundingClientRect().top<t}isBelowScreen(e){const t=this.window.document.documentElement
return e.getBoundingClientRect().bottom+2>t.clientHeight}isOnScreen(e,t){return!this.isOffScreen(e,t)}isOffScreen(e,t){return this.isAboveScreen(e,t)||this.isBelowScreen(e)}}class Fe{constructor(e,t){this.acceptedActions={}
this.expectedActions=[]
this.executing=false
if(0===e.length)throw new Error("There must be at least one expected action")
this.expectedActions=e
this._manager=t}isReady(){return this.acceptedActionsLength()===this.expectedActions.length}uiWillUpdate(){}uiDidUpdate(){}fixedElement(){return null}maintainViewportPositionOfFixedElement(){const e=this.fixedElement()
if(e&&this.fixedElementPositionMemo){this.animator().maintainViewportPositionFromMemo(e,this.fixedElementPositionMemo)
this.fixedElementPositionMemo=null}}acceptAction(e){const t=this.expectedActions.indexOf(e.type)
if(-1===t)return false
if(t>this.acceptedActionsLength())return false
const a="shouldAccept".concat(ke.a.pascal(e.type))
const s=!this[a]||this[a](e)
if(s){this.removeAcceptedActionsAfter(t)
this.acceptedActions[e.type]=e}return s}invokeUiWillUpdate(){if(this.executing)return
this.executing=true
const e=this.fixedElement()
e&&(this.fixedElementPositionMemo=this.animator().elementPositionMemo(e))
this.uiWillUpdate()
this.executing=false}invokeUiDidUpdate(){if(this.executing)return
this.executing=true
this.uiDidUpdate()
this.reset()
this.executing=false}acceptedAction(e){if(!this.isExpectedAction(e))throw new Error("ERROR: ".concat(this.constructor.name," tried to access unexpected action '").concat(e,"'"))
const t=this.acceptedActions[e]
if(!t)throw new Error("ERROR: ".concat(this.constructor.name," tried to retrieve action '").concat(e,"' before it was accepted"))
return t}reset(){this.acceptedActions={}
this.fixedElementPositionMemo=null}manager(){return this._manager}registry(){return this.manager().getRegistry()}animator(){return this.manager().getAnimator()}store(){return this.manager().getStore()}app(){return this.manager().getApp()}document(){return this.manager().getDocument()}window(){return this.animator().getWindow()}stickyOffset(){return this.manager().getStickyOffset()}totalOffset(){return this.manager().totalOffset()}isExpectedAction(e){return this.expectedActions.includes(e)}removeAcceptedActionsAfter(e){for(let t=e;t<this.expectedActions.length;++t)delete this.acceptedActions[this.expectedActions[t]]}acceptedActionsLength(){return Object.keys(this.acceptedActions).length}}function Se(e,t){const a=Ne(e)
const s=Oe(a,t)
return Me(s)}function Oe(e,t){const a=ze(t)
const s=Ie(e,a)
return s}function Be(e,t){const a=Ne(e)
const s=Ne(t)
const n=Ie(a,s)
return Me(n)}function Ie(e,t){e=Object(s["a"])({},e)
const a=$.a.mergeWith(e,t,(e,t)=>{null==e&&(e=[])
return je(e,t)})
return a}function ze(e){return $.a.groupBy(e,e=>Z(e.dateBucketMoment))}function Ne(e){return $.a.fromPairs(e)}function Me(e){return $.a.chain(e).toPairs().filter(e=>e[1]&&e[1].length).sortBy($.a.head).value()}function Le(e){return Me(ze(e))}function Pe(e){return e.reduce((e,t)=>[...e,...t[1]],[])}function je(e,t){const a=new Map(t.map(e=>[e.uniqueId,e]))
const s=e.map(e=>{const t=a.get(e.uniqueId)
if(t){a.delete(t.uniqueId)
return t}return e})
const n=s.concat([...a.values()])
return Xe(n)}function Re(e,t){let a=-1
let s=-1
void 0!==t&&(a=e.findIndex(e=>{const a=e[1]
s=a.findIndex(e=>e.uniqueId===t)
return-1!==s}))
const n=-1!==a?e[a][1][s]:void 0
return{dayIndex:a,itemIndex:s,item:n}}function qe(e,t,a){const s=e[t][1]
const n=s.filter((e,t)=>t!==a)
if(0===n.length)return e.filter((e,a)=>a!==t)
{const a=e[t].slice(0)
a[1]=n
const s=e.slice(0)
s[t]=a
return s}}function He(e,t){const a=Re(e,t.uniqueId),s=a.dayIndex,n=a.itemIndex
if(-1===s||-1===n)return e
return qe(e,s,n)}function Ue(e,t){const a=Ne(e)
t.forEach(e=>{delete a[e[0]]})
return Me(a)}function Xe(e){return e.sort(Ye)}const Ve={numeric:true}
const We=window.ENV&&window.ENV.MOMENT_LOCALE||"en"
function Ge(e){if(e.context&&e.context.id)return e.context.title||"".concat(e.context.type).concat(e.context.id)
return"Notes"}function Ze(e,t){const a=Ge(e)
const s=Ge(t)
if(0===a.localeCompare(s,We,Ve))return 0
if("Notes"===a)return 1
if("Notes"===s)return-1
return a.localeCompare(s,We,Ve)}function Ke(e,t){if(e.originallyCompleted&&!t.originallyCompleted)return 1
if(!e.originallyCompleted&&t.originallyCompleted)return-1
if(e.date.isSame(t.date,"day")){if(e.allDay&&!t.allDay)return-1
if(!e.allDay&&t.allDay)return 1}if(e.date.valueOf()===t.date.valueOf())return e.title.localeCompare(t.title,We,Ve)
return e.date<t.date?-1:1}function Ye(e,t){let a=Ze(e,t)
0===a&&(a=Ke(e,t))
return a}const Je={missing:()=>({id:"missing",text:B("Missing"),variant:"danger"}),late:()=>({id:"late",text:B("Late"),variant:"danger"}),graded:()=>({id:"graded",text:B("Graded")}),excused:()=>({id:"excused",text:B("Excused")}),submitted:()=>({id:"submitted",text:B("Submitted")}),new_grades:()=>({id:"new_grades",text:B("Graded")}),new_feedback:()=>({id:"new_feedback",text:B("Feedback")}),new_replies:()=>({id:"new_replies",text:B("Replies")})}
function Qe(e){return e.newActivity}function $e(e){return e&&e.some(Qe)}function et(e){return e.some(e=>$e(e[1]))}function tt(e){return e.some(e=>P(e[0]))}function at(e,t){if(!["late","missing"].includes(e))throw new Error("Expected status to be 'late' or 'missing', but it was ".concat(e))
return!!t.status&&t.status[e]}function st(e){let t=[]
if(e.status){t=Object.keys(e.status).filter((t,a,s)=>!(e.status.excused&&"graded"===t)).filter((t,a,s)=>!(e.status.graded&&"submitted"===t)).filter(t=>{const a=e.status[t]&&Je.hasOwnProperty(t)
if(!a)return false
if(["late","missing"].includes(t))return at(t,e)
return true}).map(e=>Je[e]())
e.status.unread_count&&t.push(Je.new_replies())
e.newActivity&&e.status.has_feedback&&t.push(Je.new_feedback())}return t}function nt(e){const t=[]
e.some(e=>e.status&&e.newActivity&&e.status.graded&&!e.status.excused)&&t.push(Je.new_grades())
e.some(e=>e.status&&e.status.submitted&&!e.status.graded&&!e.status.excused)&&t.push(Je.submitted())
e.some(at.bind(this,"missing"))?t.push(Je.missing()):e.some(at.bind(this,"late"))&&t.push(Je.late())
e.some(e=>e.status&&e.newActivity&&e.status.has_feedback)&&t.push(Je.new_feedback())
e.some(e=>e.status&&e.status.unread_count)&&t.push(Je.new_replies())
return t}class it extends Fe{fixedElement(){return this.app().fixedElementForItemScrolling()}uiDidUpdate(){const e=this.acceptedAction("GOT_DAYS_SUCCESS")
const t=e.payload.internalDays
const a=Pe(t)
const s=a.filter(e=>Qe(e))
const n=s.map(e=>e.uniqueId)
if(0===n.length)return
let i=this.registry().getLastComponent("day",n),r=i.componentIds
r=$.a.intersection(r,n)
const o=this.registry().getLastComponent("new-activity-indicator",r),d=o.component
this.maintainViewportPositionOfFixedElement()
this.animator().focusElement(d.getFocusable())
this.animator().scrollTo(d.getScrollable(),this.manager().totalOffset())}}var rt=a("FH7K")
var ot=a("aWKK")
var dt=a("x1Tw")
var lt=a("MLWZ")
var ut=a.n(lt)
var _t=a("etQE")
var mt=a("08kA")
var ct=a.n(mt)
const gt=(e,t)=>{const a=e.plannable,s=e.plannable_type,n=e.planner_override
const i=a.id||a.page_id
const r={course_id:a.course_id||e.course_id,title:a.title,completed:Tt(e),points:a.points_possible,html_url:e.html_url||a.html_url,overrideId:n&&n.id,overrideAssignId:a.assignment_id,id:i,uniqueId:"".concat(s,"-").concat(i),location:a.location_name||null,address:a.location_address||null,dateStyle:a.todo_date?"todo":"due"}
r.originallyCompleted=r.completed
r.feedback=e.submissions?e.submissions.feedback:void 0
"discussion_topic"!==s&&"announcement"!==s||(r.unread_count=a.unread_count)
"planner_note"===s&&(r.details=a.details)
if("calendar_event"===s){r.details=a.description
r.allDay=a.all_day
!r.allDay&&a.end_at&&a.end_at!==e.plannable_date&&(r.endTime=u()(a.end_at))}return r}
const pt={quiz:"Quiz",discussion_topic:"Discussion",assignment:"Assignment",wiki_page:"Page",announcement:"Announcement",planner_note:"To Do",calendar_event:"Calendar Event",assessment_request:"Peer Review"}
const ft=e=>pt[e]
const ht=e=>$.a.findKey(pt,$.a.partial($.a.isEqual,e))
function bt(e){const t=e.headers.link
if(null==t)return null
const a=ct()(t)
if(null==a)return null
if(null==a.next)return null
return a.next.url}function yt(e,t,a,n){if(null==n)throw new Error("timezone is required when interpreting api data in transformApiToInternalItem")
const i={}
const r=e.context_type+""
const o=e["".concat(r.toLowerCase(),"_id")]
if("Course"===r){const e=t.find(e=>e.id===o)
i.context=kt(e)}else if("Group"===r){const t=a.find(e=>e.id===o)||{name:"Unknown Group",color:"#666666",url:void 0}
i.context=wt(e,t)}const d=gt(e,n)
const l=u.a.tz(e.plannable_date,n)
if(!i.context&&"planner_note"===e.plannable_type&&d.course_id){const e=t.find(e=>e.id===d.course_id)
i.context=kt(e)}if(d.unread_count){e.submissions=e.submissions||{}
e.submissions.unread_count=d.unread_count}return Object(s["a"])({},i,{id:e.plannable_id,dateBucketMoment:u.a.tz(l,n).startOf("day"),type:ft(e.plannable_type),status:e.submissions,newActivity:e.new_activity&&("discussion_topic"!==e.plannable_type||d.unread_count>0),toggleAPIPending:false,date:l},d)}function vt(e,t,a){const s=e
let n={}
if(s.course_id){const e=t.find(e=>e.id===s.course_id)
n=kt(e)}return{id:s.id,uniqueId:"planner_note-".concat(s.id),dateBucketMoment:u.a.tz(s.todo_date,a),type:"To Do",status:false,course_id:s.course_id,context:n,title:s.title,date:u.a.tz(s.todo_date,a),details:s.details,completed:false}}function Et(e){const t={}
if(e.context){t.context_type=e.context.type||"Course"
t["".concat(t.context_type.toLowerCase(),"_id")]=e.context.id}return Object(s["a"])({id:e.id},t,{todo_date:e.date,title:e.title,details:e.details})}function At(e,t){let a=ht(e.type)
let s=e.id
if(e.overrideAssignId){a="assignment"
s=e.overrideAssignId}return{id:e.overrideId,plannable_id:s,plannable_type:a,user_id:t,marked_complete:e.completed}}function Ct(e){const t=e.id
const a=e.has_grading_periods
const s=e.enrollments[0]
let n=s.computed_current_score
let i=s.computed_current_grade
if(a){n=s.current_period_computed_current_score
i=s.current_period_computed_current_grade}return{courseId:t,hasGradingPeriods:a,grade:i,score:n}}function kt(e){if(!e)return
return{type:"Course",id:e.id,title:e.shortName,image_url:e.image,color:e.color,url:e.href}}function wt(e,t){if(!t)return
return{type:e.context_type,id:t.id,title:t.name,image_url:void 0,color:t.color,url:t.url}}function Tt(e){const t=e.plannable,a=e.plannable_type,s=e.planner_override,n=e.submissions
let i=false
s?i=s.marked_complete:"assessment_request"===a?i="completed"===t.workflow_state:n&&(i=n.submitted)
return i}let Dt=null
let xt=null
let Ft=null
function St(e){let t=e.visualSuccessCallback,a=void 0===t?Dt:t,s=e.visualErrorCallback,n=void 0===s?xt:s,i=e.srAlertCallback,r=void 0===i?Ft:i
Dt=a
xt=n
Ft=r}function Ot(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
t?xt(e):Dt(e)}function Bt(e){Ft(e)}const It=Object(rt["a"])("START_LOADING_ITEMS","CONTINUE_LOADING_INITIAL_ITEMS","FOUND_FIRST_NEW_ACTIVITY_DATE","GETTING_FUTURE_ITEMS","ALL_FUTURE_ITEMS_LOADED","ALL_PAST_ITEMS_LOADED","GOT_ITEMS_ERROR","START_LOADING_PAST_SAGA","START_LOADING_FUTURE_SAGA","START_LOADING_PAST_UNTIL_NEW_ACTIVITY_SAGA","START_LOADING_GRADES_SAGA","GOT_GRADES_SUCCESS","GOT_GRADES_ERROR","START_LOADING_PAST_UNTIL_TODAY_SAGA","PEEK_INTO_PAST_SAGA","PEEKED_INTO_PAST"),zt=It.startLoadingItems,Nt=It.continueLoadingInitialItems,Mt=It.foundFirstNewActivityDate,Lt=It.gettingFutureItems,Pt=(It.allFutureItemsLoaded,It.allPastItemsLoaded,It.gotItemsError),jt=It.startLoadingPastSaga,Rt=It.startLoadingFutureSaga,qt=It.startLoadingPastUntilNewActivitySaga,Ht=It.startLoadingGradesSaga,Ut=It.gotGradesSuccess,Xt=It.gotGradesError,Vt=It.startLoadingPastUntilTodaySaga,Wt=It.peekIntoPastSaga,Gt=It.peekedIntoPast
const Zt=Object(ot["a"])("GETTING_PAST_ITEMS",(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{seekingNewActivity:false}
return e}))
const Kt=Object(ot["a"])("GOT_DAYS_SUCCESS",(e,t)=>({internalDays:e,response:t}))
const Yt=Object(ot["a"])("GOT_PARTIAL_FUTURE_DAYS",(e,t)=>({internalDays:e,response:t}))
const Jt=Object(ot["a"])("GOT_PARTIAL_PAST_DAYS",(e,t)=>({internalDays:e,response:t}))
function Qt(e){return(t,a)=>{e=e.clone().subtract(6,"months")
const s="/api/v1/planner/items?start_date=".concat(e.toISOString(),"&filter=new_activity&order=asc")
const n=Object(_t["a"])(Object(_t["f"])(s))||dt["default"].get(s)
return n.then(e=>{if(e.data.length){const s=yt(e.data[0],a().courses,a().groups,a().timeZone)
t(Mt(s.dateBucketMoment))}}).catch(()=>Ot(B("Failed to get new activity"),true))}}function $t(e){return(t,a)=>{t(zt())
t(Nt())
t(Qt(e))
t(Wt())
t(Rt())}}function ea(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loadMoreButtonClicked:false}
return(t,a)=>{if(a().loading.allFutureItemsLoaded)return
t(Lt(e))
t(Rt())}}const ta=Object(ot["a"])("SCROLL_INTO_PAST")
function aa(e){return(t,a)=>{if(a().loading.allPastItemsLoaded)return
e&&t(ta())
t(Zt({seekingNewActivity:false}))
t(jt())}}function sa(){return aa(true)}function na(){return aa(false)}const ia=()=>(e,t)=>{e(Zt({seekingNewActivity:true}))
e(qt())
return"loadPastUntilNewActivity"}
const ra=()=>(e,t)=>{e(Zt({seekingNewActivity:false}))
e(Vt())
return"loadPastUntilToday"}
function oa(e){const t=da(e),a=Object(J["a"])(t,2),s=a[0],n=a[1].params
const i=ut()(s,n)
const r=Object(_t["a"])(Object(_t["f"])(i))||dt["default"].get(i)
return r.then(t=>la(e,t))}function da(e){let t="start_date"
let a="futureNextUrl"
if(e.intoThePast){t="end_date"
a="pastNextUrl"}const s=e.getState().loading[a]
if(s)return[s,{}]
{const a={[t]:e.fromMoment.toISOString()}
e.intoThePast&&(a.order="desc")
e.perPage&&(a.per_page=e.perPage)
return["/api/v1/planner/items",{params:a}]}}function la(e,t){const a=ua(e,t.data)
return{response:t,transformedItems:a}}function ua(e,t){return t.map(t=>yt(t,e.getState().courses,e.getState().groups,e.getState().timeZone))}class _a extends Fe{fixedElement(){return this.app().fixedElementForItemScrolling()}findNaiAboveScreen(){const e=this.registry().getAllNewActivityIndicatorsSorted()
return e.reverse().find(e=>this.animator().isAboveScreen(e.component.getScrollable(),this.manager().totalOffset()))}uiDidUpdate(){const e=this.findNaiAboveScreen()
if(e){this.maintainViewportPositionOfFixedElement()
this.animator().focusElement(e.component.getFocusable())
this.animator().scrollTo(e.component.getScrollable(),this.manager().totalOffset())}else{this.animator().scrollToTop()
this.store().dispatch(ia())}}}class ma extends Fe{fixedElement(){return this.app().fixedElementForItemScrolling()}uiDidUpdate(){this.maintainViewportPositionOfFixedElement()}}var ca=function(e){e.defaults.xsrfCookieName="_csrf_token"
e.defaults.xsrfHeaderName="X-CSRF-Token"
const t=e.defaults.headers.common.Accept
e.defaults.headers.common.Accept="application/json+canvas-string-ids, "+t
e.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"
return e}
function ga(e){let t
let a
const s=function s(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r]
if("function"===typeof i[0]){if(void 0===t)throw new Error("identifiableThunk was called as a thunk before it was called as a normal function. The action's first parameter must not be a function.")
const e=t
s.reset()
return e(...i)}if(void 0!==t)throw new Error("identifiableThunk was called as a normal function twice in a row. If testing, You may need to add `action.resetArgs()` to your beforeEach or afterEach.")
t=e(...i)
a=i
return s}
s.reset=()=>{t=void 0
a=void 0}
s.args=()=>a
s.fn=()=>e
return s}const pa=Object(rt["a"])("SIDEBAR_ITEMS_LOADING","SIDEBAR_ITEMS_LOADED","SIDEBAR_ITEMS_LOADING_FAILED","SIDEBAR_ENOUGH_ITEMS_LOADED"),fa=pa.sidebarItemsLoading,ha=pa.sidebarItemsLoaded,ba=pa.sidebarItemsLoadingFailed,ya=pa.sidebarEnoughItemsLoaded
const va=7
const Ea=14
function Aa(e){return e.sidebar.items.filter(e=>!e.completed)}function Ca(e){return Aa(e).length>=va}function ka(e){return Aa(e).length>=Ea}function wa(e,t,a){const s=bt(e)
const n=e.data.map(e=>yt(e,a().courses,a().groups,a().timeZone))
t(ha({items:n,nextUrl:s}))
s&&!Ca(a())||t(ya())
if(s&&!ka(a()))return t(Ta())}const Ta=ga(()=>(e,t)=>{if(!t().sidebar.loading&&t().sidebar.nextUrl){e(fa())
const a={order:"asc"}
t().sidebar.course_id&&(a.context_codes=["course_".concat(t().sidebar.course_id),"user_".concat(ENV.current_user_id)])
return dt["default"].get(t().sidebar.nextUrl,{params:a}).then(a=>wa(a,e,t)).catch(t=>e(ba(t)))}})
const Da=(e,t)=>(a,s)=>{const n=e.clone().subtract(2,"weeks")
a(fa({firstMoment:n,course_id:t}))
const i={start_date:n.toISOString(),order:"asc"}
t&&(i.context_codes=["course_".concat(t),"user_".concat(ENV.current_user_id)])
return dt["default"].get("/api/v1/planner/items",{params:i}).then(e=>wa(e,a,s)).catch(e=>a(ba(e)))}
const xa=e=>ns(e)
const Fa=ga(e=>(t,a)=>{if(null==a().sidebar.nextUrl)return e
return e.then(e=>{ka(a())||t(Ta())
return e})})
ca(dt["default"])
const Sa=Object(rt["a"])("INITIAL_OPTIONS","ADD_OPPORTUNITIES","START_LOADING_OPPORTUNITIES","START_DISMISSING_OPPORTUNITY","ALL_OPPORTUNITIES_LOADED","SAVING_PLANNER_ITEM","SAVED_PLANNER_ITEM","DISMISSED_OPPORTUNITY","DELETING_PLANNER_ITEM","DELETED_PLANNER_ITEM","UPDATE_TODO","CLEAR_UPDATE_TODO","OPEN_EDITING_PLANNER_ITEM","SET_NAI_ABOVE_SCREEN","SCROLL_TO_NEW_ACTIVITY","SCROLL_TO_TODAY"),Oa=Sa.initialOptions,Ba=Sa.addOpportunities,Ia=Sa.startLoadingOpportunities,za=Sa.startDismissingOpportunity,Na=Sa.allOpportunitiesLoaded,Ma=Sa.savingPlannerItem,La=Sa.savedPlannerItem,Pa=Sa.dismissedOpportunity,ja=Sa.deletingPlannerItem,Ra=Sa.deletedPlannerItem,qa=Sa.updateTodo,Ha=Sa.clearUpdateTodo,Ua=Sa.openEditingPlannerItem,Xa=Sa.setNaiAboveScreen,Va=Sa.scrollToNewActivity,Wa=Sa.scrollToToday
function Ga(e){return Object(dt["default"])({method:"put",url:"/api/v1/planner_notes/".concat(e.id),data:e})}function Za(e){return Object(dt["default"])({method:"post",url:"/api/v1/planner_notes",data:e})}const Ka=()=>(e,t)=>{e(Ia())
t().opportunities.nextUrl?Object(dt["default"])({method:"get",url:t().opportunities.nextUrl}).then(t=>{ct()(t.headers.link).next?e(Ba({items:t.data,nextUrl:ct()(t.headers.link).next.url})):e(Ba({items:t.data,nextUrl:null}))}).catch(()=>Ot(B("Failed to load opportunities"),true)):e(Na())}
const Ya=()=>(e,t)=>{e(Ia())
const a=t().opportunities.nextUrl||"/api/v1/users/self/missing_submissions?include[]=planner_overrides&filter[]=submittable"
const s=Object(_t["a"])(Object(_t["f"])(a))||Object(dt["default"])({method:"get",url:a})
s.then(t=>{const a=ct()(t.headers.link).next
e(Ba({items:t.data,nextUrl:a?a.url:null}))}).catch(()=>Ot(B("Failed to load opportunities"),true))}
const Ja=(e,t)=>(a,n)=>{a(za(e))
const i=Object(s["a"])({},t)
i.dismissed=true
i.plannable_id=e
i.plannable_type="assignment"
let r=i.id?as(i):ss(i)
r=r.then(e=>{a(Pa(e.data))}).catch(e=>{Ot(B("An error occurred attempting to dismiss the opportunity."),true)})
return r}
const Qa=e=>(t,a)=>{const s=!e.id
const n=rs(e)
t(Ma({item:e,isNewItem:s}))
const i=Et(e)
let r=s?Za(i):Ga(i)
r=r.then(e=>{const t=vt(e.data,a().courses,a().timeZone)
return{item:is(t,n),isNewItem:s}}).catch(()=>Ot(B("Failed to save to do"),true))
t(Ha())
t(La(r))
return r}
const $a=e=>(t,a)=>{t(ja(e))
const s=Object(dt["default"])({method:"delete",url:"/api/v1/planner_notes/".concat(e.id)}).then(e=>vt(e.data,a().courses,a().timeZone)).catch(()=>Ot(B("Failed to delete to do"),true))
t(Ha())
t(Ra(s))
t(Fa(s))
return s}
const es=Object(ot["a"])("CANCELED_EDITING_PLANNER_ITEM")
const ts=()=>(e,t)=>{e(Ha())
e(es())}
function as(e){return Object(dt["default"])({method:"put",url:"/api/v1/planner/overrides/".concat(e.id),data:e})}function ss(e){return Object(dt["default"])({method:"post",url:"/api/v1/planner/overrides",data:e})}const ns=e=>(t,a)=>{const n=Object(s["a"])({},e,{toggleAPIPending:true,show:true})
t(Ma({item:n,isNewItem:false,wasToggled:true}))
const i=At(e,a().currentUser.id)
i.marked_complete=!i.marked_complete
let r=i.id?as(i):ss(i)
r=r.then(t=>({item:is(e,t.data),isNewItem:false,wasToggled:true})).catch(t=>{Ot(B("Unable to mark as complete."),true)
return{item:e,isNewItem:false,wasToggled:true}})
t(La(r))
t(Fa(r))
return r}
function is(e,t){const a=Object(s["a"])({},e)
a.overrideId=t.id
a.completed=t.marked_complete
a.show=true
return a}function rs(e){return{id:e.overrideId,marked_complete:e.completed}}class os extends Fe{uiDidUpdate(){const e=!this.store().getState().loading.allFutureItemsLoaded
const t=e&&this.animator().isOnScreen(this.app().fixedElementForItemScrolling(),this.stickyOffset())
t&&this.window().setTimeout(()=>{this.store().dispatch(Nt())
this.store().dispatch(ea())},0)}}class ds extends Fe{fixedElement(){return this.app().fixedElementForItemScrolling()}uiDidUpdate(){const e=this.acceptedAction("SAVED_PLANNER_ITEM")
const t=e.payload.item.uniqueId
const a=this.registry().getComponent("item",t)
if(null!=a){e.payload.wasToggled||this.animator().focusElement(a.component.getFocusable("update"))
this.maintainViewportPositionOfFixedElement()
this.animator().scrollTo(a.component.getScrollable(),this.stickyOffset())}else Ot(B("Success: To Do created"))}}class ls extends Fe{shouldAcceptGettingFutureItems(e){return e.payload.loadMoreButtonClicked}uiDidUpdate(){const e=this.acceptedAction("GOT_DAYS_SUCCESS").payload.internalDays
const t=e[0][1][0]
const a=this.registry().getAllItemsSorted()
const s=a.findIndex(e=>e.componentIds[0]===t.uniqueId)
const n=s-1
if(n<0){console.error("FocusPriorItemOnLoadMore could not find the item that should receive focus")
return}const i=a[n]
this.animator().focusElement(i.component.getFocusable())}}function us(e){return"~~~".concat(e,"-fallback-focus~~~")}class _s extends Fe{constructor(){super(...arguments)
this.setItemFocusUniqueId=null}uiWillUpdate(){const e=this.acceptedAction("DELETED_PLANNER_ITEM")
const t=e.payload.uniqueId
const a=this.registry().getAllItemsSorted()
const s=a.findIndex(e=>e.componentIds[0]===t)
const n=s-1
this.setItemFocusUniqueId=n>=0?a[n].componentIds[0]:us("item")}uiDidUpdate(){const e=this.setItemFocusUniqueId
this.setItemFocusUniqueId=null
const t=this.registry().getComponent("item",e)
if(null==t)return
this.window().setTimeout(()=>{this.animator().focusElement(t.component.getFocusable("delete"))
this.animator().scrollTo(t.component.getScrollable(),this.stickyOffset())},250)}}class ms extends Fe{uiDidUpdate(){const e=this.document().querySelector(".planner-today h2")
if(e)cs(this.manager(),e)
else{this.animator().scrollToTop()
this.store().dispatch(ra())}}}function cs(e,t){const a=gs(e.getRegistry(),e.getStore().getState().timeZone),s=a.component,n=a.when
s?s.getScrollable()&&e.getAnimator().forceScrollTo(t,e.totalOffset(),()=>{e.getAnimator().scrollTo(s.getScrollable(),e.totalOffset()+t.offsetHeight,()=>{"after"===n?Ot(B("Nothing planned today. Selecting next item.")):"before"===n&&Ot(B("Nothing planned today. Selecting most recent item."))
s.getFocusable()&&e.getAnimator().focusElement(s.getFocusable())})}):e.getAnimator().forceScrollTo(t,e.totalOffset())}function gs(e,t){const a=u()().tz(t).startOf("day")
const s=e.getAllItemsSorted()
let n=null
let i=null
for(let e=0;e<s.length;++e){const t=s[e]
if(t.component&&t.component.props.date){const e=t.component.props.date
if(e.isBefore(a,"day"))n=t.component
else if(e.isSame(a,"day")||e.isAfter(a,"day")){i=t.component
break}}}const r=i||n
let o="never"
r&&(r===i?o=r.props.date.isSame(a,"day")?"today":"after":r===n&&(o="before"))
return{component:r,when:o}}class ps extends Fe{uiDidUpdate(){const e=this.document().querySelector(".planner-today")
e?cs(this.manager(),e):this.animator().scrollToTop()}}class fs extends Fe{constructor(){super(...arguments)
this.savedActiveElement=null}fixedElement(){return this.app().fixedElementForItemScrolling()}shouldAcceptOpenEditingPlannerItem(e){this.savedActiveElement=this.document().activeElement
this.savedActiveElement===this.document().body&&(this.savedActiveElement=null)
return true}uiDidUpdate(){this.maintainViewportPositionOfFixedElement()
if(null!=this.savedActiveElement){this.animator().focusElement(this.savedActiveElement)
const e=this.document().querySelector("#dashboard_header_container")
const t=e&&e.contains(this.savedActiveElement)
t||this.animator().scrollTo(this.savedActiveElement,this.stickyOffset())}}}class hs{constructor(e,t){this.animations=[]
t.forEach(t=>{let a=t.expected,s=t.animation
this.animations.push(new s(a,e))})}static expectedActionsFor(e){const t=hs.actionsToAnimations.find(t=>t.animation===e)
return t.expected}acceptAction(e){this.animations.forEach(t=>{t.acceptAction(e)})}uiWillUpdate(){this.animations.forEach(e=>{e.isReady()&&e.invokeUiWillUpdate()})}uiDidUpdate(){this.animations.forEach(e=>{e.isReady()&&e.invokeUiDidUpdate()})}}hs.actionsToAnimations=[{expected:["CONTINUE_LOADING_INITIAL_ITEMS","START_LOADING_FUTURE_SAGA","GOT_DAYS_SUCCESS"],animation:os},{expected:["SCROLL_TO_NEW_ACTIVITY"],animation:_a},{expected:["START_LOADING_PAST_UNTIL_NEW_ACTIVITY_SAGA","GOT_DAYS_SUCCESS"],animation:it},{expected:["SCROLL_INTO_PAST","START_LOADING_PAST_SAGA","GOT_DAYS_SUCCESS"],animation:ma},{expected:["GETTING_FUTURE_ITEMS","GOT_DAYS_SUCCESS"],animation:ls},{expected:["SAVED_PLANNER_ITEM"],animation:ds},{expected:["OPEN_EDITING_PLANNER_ITEM","CANCELED_EDITING_PLANNER_ITEM"],animation:fs},{expected:["DELETED_PLANNER_ITEM"],animation:_s},{expected:["SCROLL_TO_TODAY"],animation:ms},{expected:["START_LOADING_PAST_UNTIL_TODAY_SAGA","GOT_DAYS_SUCCESS"],animation:ps}]
class bs{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.registerAnimatable=(e,t,a,s)=>{this.animatableRegistry.register(e,t,a,s)}
this.deregisterAnimatable=(e,t,a)=>{this.animatableRegistry.deregister(e,t,a)}
this.preTriggerUpdates=()=>{this.plannerActive()&&this.animationCollection.uiWillUpdate()}
this.triggerUpdates=()=>{this.plannerActive()&&this.animationCollection.uiDidUpdate()
const e=this.animationPlan
if(!e.ready)return
this.animationPlan.focusOpportunity&&this.triggerFocusOpportunity()
this.clearAnimationPlan()}
this.handleAction=e=>{this.plannerActive()&&this.animationCollection.acceptAction(e)
const t=ke.a.pascal(e.type)
const a="handle".concat(t)
const s=this[a]
s&&s(e)}
this.alertLoading=()=>{Bt(B("loading"))}
this.handleStartLoadingItems=this.alertLoading
this.handleGettingFutureItems=this.alertLoading
this.handleGettingPastItems=this.alertLoading
this.handleGotDaysSuccess=e=>{const t=e.payload.internalDays
const a=Pe(t)
Bt(B("Loaded { count, plural,\n        =0 {# items}\n        one {# item}\n        other {# items}\n      }",{count:a.length}))}
this.handleStartLoadingGradesSaga=e=>{Bt(B("Loading Grades"))}
this.handleGotGradesSuccess=e=>{Bt(B("Grades Loaded"))}
this.handleDismissedOpportunity=e=>{const t=e.payload.assignment_id||e.payload.plannable_id
this.planDeletedComponent("opportunity",t)}
const t=Object(s["a"])({},bs.defaultOptions,{},e)
this.plannerActive=t.plannerActive
this.animator=t.animator
this.document=t.document
this.animatableRegistry=new we
this.animationCollection=new hs(this,t.actionsToAnimations)
this.animationPlan={}
this.plannerHeaderId=""
this.newActivityButtonId=""}setOffsetElementIds(e,t){this.plannerHeaderId=e
this.newActivityButtonId=t}getStickyOffset(){let e=0
if(this.plannerHeaderId){const t=this.getDocument().getElementById(this.plannerHeaderId)
if(t){const a=t.getBoundingClientRect()
e=a.bottom}}return e}getAdditionalOffset(){let e=0
if(this.newActivityButtonId){const t=this.getDocument().getElementById(this.newActivityButtonId)
if(t){const a=t.getBoundingClientRect()
e=a.height}}return e}setStore(e){this.store=e}setApp(e){this.app=e}totalOffset(){return this.getStickyOffset()+this.getAdditionalOffset()}focusFallback(e){const t=this.animatableRegistry.getComponent(e,us(e))
t&&this.animator.focusElement(t.component.getFocusable())}getRegistry(){return this.animatableRegistry}getAnimator(){return this.animator}getStore(){return this.store}getApp(){return this.app}getDocument(){return this.document}static expectedActionsFor(e){return hs.expectedActionsFor(e)}clearAnimationPlan(){this.animationPlan=this.animationPlan.nextAnimationPlan||{}}uiStateUnchanged(e){if(this.plannerActive()){this.animationCollection.uiWillUpdate()
this.animationCollection.uiDidUpdate()}}triggerFocusOpportunity(){const e=this.animatableRegistry.getComponent("opportunity",this.animationPlan.focusOpportunity)
if(null==e)return
this.animator.focusElement(e.component.getFocusable(this.animationPlan.trigger))}handleScrollPositionChange(){let e=this.getStickyOffset()
this.store.getState().ui.naiAboveScreen||(e=0)
const t=this.animatableRegistry.getAllNewActivityIndicatorsSorted()
let a=false
if(t.length>0){const s=t[0].component.getScrollable()
a=s.getBoundingClientRect().top<e}this.store.getState().ui.naiAboveScreen!==a&&this.store.dispatch(Xa(a))}planDeletedComponent(e,t){const a=this.sortedComponentsFor(e)
const s=a.findIndex(e=>e.componentIds[0]===t)
const n=this.findFocusIndexAfterDelete(a,s)
const i=ke.a.camelCase("focus-".concat(e))
this.animationPlan[i]=null!=n?a[n].componentIds[0]:us(e)
this.animationPlan.trigger="delete"
this.animationPlan.ready=true}sortedComponentsFor(e){switch(e){case"item":return this.animatableRegistry.getAllItemsSorted()
case"opportunity":return this.animatableRegistry.getAllOpportunitiesSorted()
default:throw new Error("unrecognized deleted component type: ".concat(e))}}findFocusIndexAfterDelete(e,t){const a=t-1
if(a<0)return null
return a}}bs.defaultOptions={plannerActive:()=>false,animator:new xe,document:document,actionsToAnimations:hs.actionsToAnimations}
function ys(e){return"Notifier(".concat(e.displayName,")")}function vs(e){var t,a
return a=t=class extends i.a.Component{constructor(){var e
super(...arguments)
e=this
this.preTriggerUpdates=function(){e.context.dynamicUiManager&&e.context.dynamicUiManager.preTriggerUpdates(...arguments)}
this.triggerUpdates=function(){e.context.dynamicUiManager&&e.context.dynamicUiManager.triggerUpdates(...arguments)}}render(){return i.a.createElement(e,Object.assign({},this.props,{triggerDynamicUiUpdates:this.triggerUpdates,preTriggerDynamicUiUpdates:this.preTriggerUpdates}))}},t.displayName=ys(e),t.contextTypes={dynamicUiManager:Object(p["shape"])({triggerUpdates:p["func"],preTriggerUpdates:p["func"]})},a}const Es=Object(p["shape"])({handleAction:p["func"].isRequired,registerAnimatable:p["func"].isRequired,deregisterAnimatable:p["func"].isRequired,preTriggerUpdates:p["func"].isRequired,triggerUpdates:p["func"].isRequired})
class As extends n["Component"]{constructor(e,t){super(e,t)
this.manager=e.manager}getChildContext(){return{dynamicUiManager:this.manager}}render(){return n["Children"].only(this.props.children)}}As.propTypes={manager:Es.isRequired,children:p["element"].isRequired}
As.childContextTypes={dynamicUiManager:Es}
class Cs extends n["Component"]{componentWillMount(){this.props.registerAnimatable("new-activity-indicator",this,this.props.animatableIndex,this.props.itemIds)}componentWillReceiveProps(e){this.props.deregisterAnimatable("new-activity-indicator",this,this.props.itemIds)
this.props.registerAnimatable("new-activity-indicator",this,e.animatableIndex,e.itemIds)}componentWillUnmount(){this.props.deregisterAnimatable("new-activity-indicator",this,this.props.itemIds)}getFocusable(){return this.props.getFocusable?this.props.getFocusable():void 0}getScrollable(){return this.indicatorElt}render(){const e=B("New activity for {title}",{title:this.props.title})
return i.a.createElement(be,{indicatorRef:e=>this.indicatorElt=e,title:e,variant:"primary"})}}Cs.propTypes={title:p["string"].isRequired,itemIds:Object(p["arrayOf"])(p["string"]).isRequired,registerAnimatable:p["func"],deregisterAnimatable:p["func"],animatableIndex:p["number"],getFocusable:p["func"]}
Cs.defaultProps={registerAnimatable:()=>{},deregisterAnimatable:()=>{}}
var ks=Ee(Cs)
function ws(e){let t=e.colors,a=e.spacing
return{activityIndicatorPadding:a.small,activityIndicatorWidth:a.small,activityIndicatorBorderSize:"1rem",activityIndicatorBackground:t.white}}const Ts={componentId:"NrWuo",template:function(e){return"\n\n.activityIndicator_wasb{padding:".concat(e.activityIndicatorPadding||"inherit",";width:").concat(e.activityIndicatorWidth||"inherit","}\n\n.activityIndicator_wasb.hasBadge_wasb{align-items:center;background:transparent;border-radius:0;display:flex;height:auto;justify-content:center;position:static;right:auto;top:auto;width:auto;z-index:1};\n\n.small_wasb.activityIndicator_wasb{padding:0}")},activityIndicator:"activityIndicator_wasb",hasBadge:"hasBadge_wasb",small:"small_wasb"}
class Ds extends i.a.Component{render(){const e=this.props.children?i.a.Children.only(this.props.children):null
const t=m()(Ts.activityIndicator,null!=e&&Ts.hasBadge,Ts[this.props.responsiveSize])
return i.a.createElement("div",{className:t},e)}}Ds.propTypes={responsiveSize:A,children:f.a.element}
Ds.defaultProps={responsiveSize:"large"}
const xs=Object(w["themeable"])(ws,Ts)(Ds)
var Fs=xs
var Ss=a("dpqJ")
function Os(e){return{lineHeight:e.lineHeightCondensed,itemMargin:"0.0625rem"}}const Bs={componentId:"WWGvl",template:function(e){return"\n\n.root_E0bF{line-height:".concat(e.lineHeight||"inherit",";list-style-type:none;margin:0;padding:0;text-align:inherit}\n\n[dir=ltr] .root_E0bF,[dir=rtl] .root_E0bF{text-align:inherit}\n\n.item_E0bF{display:inline-block;margin:").concat(e.itemMargin||"inherit",";vertical-align:middle}")},root:"root_E0bF",item:"item_E0bF"}
class Is extends n["Component"]{renderChildren(){return n["Children"].map(this.props.children,e=>i.a.createElement("li",{key:e.key,className:Bs.item},e))}render(){return i.a.createElement("ul",{className:Bs.root},this.renderChildren())}}Is.propTypes={children:Ss["a"].oneOf([ae["a"]])}
var zs=Object(w["themeable"])(Os,Bs)(Is)
var Ns=a("Mmr1")
var Ms=a("PDbF")
var Ls=a("98st")
let Ps
function js(e){Ps=e.convertApiUserContent}function Rs(e){false
return Ps(e)}class qs extends i.a.Component{renderRow(e,t){return i.a.createElement(Ms["a"].Item,null,i.a.createElement(D["a"],{weight:"bold"},e),i.a.createElement(c["a"],{margin:"0 0 0 x-small"},i.a.createElement(D["a"],null,t)))}renderTimeString(){const e=this.props,t=e.startTime,a=e.endTime,s=e.timeZone
return this.props.allDay?X(t,s):a&&!t.isSame(a)?G(t,a,s):W(t,s)}renderDateTimeRow(){return this.renderRow(B("Date & Time:"),this.renderTimeString())}renderCalendarRow(){const e=this.props.courseName||this.props.currentUser.displayName
return this.renderRow(B("Calendar:"),e)}renderLocationRow(){if(this.props.location)return this.renderRow(B("Location:"),this.props.location)}renderAddressRow(){if(this.props.address)return this.renderRow(B("Address:"),this.props.address)}renderDetails(){if(this.props.details){const e=Rs(this.props.details)
return i.a.createElement(Ms["a"].Item,{margin:"large 0 0 0"},i.a.createElement(D["a"],{weight:"bold"},B("Details:")),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}}))}}render(){return i.a.createElement(Ls["a"],{label:"Calendar Event Details",size:"small",open:this.props.open,onDismiss:this.props.requestClose,shouldCloseOnDocumentClick:true},i.a.createElement(Ls["a"].Header,null,i.a.createElement(T["a"],null,i.a.createElement(oe["a"],{variant:"link",size:"large",theme:{largePadding:"0",largeHeight:"normal"},href:this.props.html_url},this.props.title)),i.a.createElement(Ns["a"],{placement:"end",onClick:this.props.requestClose},B("Close"))),i.a.createElement(Ls["a"].Body,{padding:"medium"},i.a.createElement(Ms["a"],{variant:"unstyled",itemSpacing:"small"},this.renderCalendarRow(),this.renderDateTimeRow(),this.renderLocationRow(),this.renderAddressRow(),this.renderDetails())))}}qs.propTypes={open:p["bool"].isRequired,requestClose:p["func"].isRequired,title:p["string"].isRequired,html_url:p["string"].isRequired,courseName:p["string"],currentUser:Object(p["shape"])(h),location:p["string"],address:p["string"],details:p["string"],startTime:fe["momentObj"].isRequired,endTime:fe["momentObj"],allDay:p["bool"].isRequired,timeZone:p["string"].isRequired}
var Hs=a("1bMx")
function Us(e){let t=e.borders,a=e.colors,s=e.spacing,n=e.typography
return{fontFamily:n.fontFamily,lineHeight:n.lineHeightCondensed,color:a.licorice,padding:"".concat(s.small," ").concat(s.xSmall),paddingMedium:"".concat(s.small),paddingLarge:"".concat(s.small," ").concat(s.medium),gutterWidth:s.medium,gutterWidthXLarge:s.medium,bottomMargin:s.xSmall,borderWidth:t.widthSmall,borderColor:a.tiara,iconFontSize:s.medium,iconColor:a.brand,badgeMargin:"0.0625rem",metricsPadding:s.xxSmall,typeMargin:s.xxSmall,titleLineHeight:n.lineHeightFit}}Us.canvas=function(e){return{iconColor:e["ic-brand-primary"]}}
const Xs={componentId:"dsRAF",template:function(e){return"\n\n.root_2eX6{align-items:center;border-bottom:".concat(e.borderWidth||"inherit"," solid ").concat(e.borderColor||"inherit",";box-sizing:border-box;color:").concat(e.color||"inherit",";display:flex;flex:1;font-family:").concat(e.fontFamily||"inherit",";line-height:").concat(e.lineHeight||"inherit",";padding:").concat(e.padding||"inherit","}\n\n.root_2eX6.small_2eX6{align-items:flex-start}\n\n.avatar_2eX6,.completed_2eX6,.icon_2eX6,.layout_2eX6{box-sizing:border-box}\n\n.completed_2eX6{-webkit-margin-start:").concat(e.gutterWidth||"inherit",";margin-inline-start:").concat(e.gutterWidth||"inherit",";width:1.375rem}\n\n[dir=ltr] .completed_2eX6{margin-left:").concat(e.gutterWidth||"inherit","}\n\n[dir=rtl] .completed_2eX6{margin-right:").concat(e.gutterWidth||"inherit","}\n\n.activityIndicator_2eX6{-webkit-padding-end:0;-webkit-padding-start:0;padding-inline-end:0;padding-inline-start:0}\n\n[dir=ltr] .activityIndicator_2eX6{padding-left:0;padding-right:0}\n\n[dir=rtl] .activityIndicator_2eX6{padding-left:0;padding-right:0}\n\n.activityIndicator_2eX6+.completed_2eX6{-webkit-margin-start:calc(").concat(e.gutterWidth||"inherit"," - ").concat(e.activityIndicatorWidth||"inherit",");margin-inline-start:calc(").concat(e.gutterWidth||"inherit"," - ").concat(e.activityIndicatorWidth||"inherit",")}\n\n[dir=ltr] .activityIndicator_2eX6+.completed_2eX6{margin-left:calc(").concat(e.gutterWidth||"inherit"," - ").concat(e.activityIndicatorWidth||"inherit",")}\n\n[dir=rtl] .activityIndicator_2eX6+.completed_2eX6{margin-right:calc(").concat(e.gutterWidth||"inherit"," - ").concat(e.activityIndicatorWidth||"inherit",")}\n\n.icon_2eX6{color:").concat(e.iconColor||"inherit",";margin:0 ").concat(e.gutterWidth||"inherit","}\n\n.icon_2eX6>svg{display:block}\n\n.avatar_2eX6{margin:0 calc(").concat(e.gutterWidth||"inherit"," - (2.5em - ").concat(e.iconFontSize||"inherit",")/2)}\n\n.layout_2eX6{flex-direction:column}\n\n.innerLayout_2eX6,.layout_2eX6{display:flex;flex:1 0;min-width:1px}\n\n.innerLayout_2eX6{align-items:center;min-height:2.5rem}\n\n.details_2eX6{box-sizing:border-box;flex:0 0 50%;margin-bottom:0;min-width:1px}\n\n.details_2eX6.details_no_badges_2eX6{flex:0 0 75%}\n\n.secondary_2eX6{align-items:center;box-sizing:border-box;display:flex;flex:0 0 50%;justify-content:flex-end;min-width:1px}\n\n.secondary_2eX6.secondary_no_badges_2eX6{flex:0 0 25%}\n\n.type_2eX6{letter-spacing:0.0625rem;line-height:1;margin-bottom:").concat(e.typeMargin||"inherit",";text-transform:uppercase}\n\n.title_2eX6,.type_2eX6{box-sizing:border-box}\n\n.title_2eX6{line-height:").concat(e.titleLineHeight||"inherit","}\n\n.metrics_2eX6{-webkit-padding-start:").concat(e.metricsPadding||"inherit",";box-sizing:border-box;flex:0 0 10rem;min-width:1px;padding-inline-start:").concat(e.metricsPadding||"inherit",";text-align:end}\n\n[dir=ltr] .metrics_2eX6{padding-left:").concat(e.metricsPadding||"inherit",";text-align:right}\n\n[dir=rtl] .metrics_2eX6{padding-right:").concat(e.metricsPadding||"inherit",";text-align:left}\n\n.metrics_2eX6.with_end_time_2eX6{flex-basis:14rem}\n\n.metrics_2eX6.with_end_time_2eX6 .due_2eX6{text-transform:none}\n\n.due_2eX6,.score_2eX6{box-sizing:border-box;letter-spacing:0.0625rem;line-height:1;text-transform:uppercase;white-space:nowrap}\n\n.badges_2eX6{flex:1;min-width:1px;text-align:end}\n\n[dir=ltr] .badges_2eX6{text-align:right}\n\n[dir=rtl] .badges_2eX6{text-align:left}\n\n.feedback_2eX6{align-items:center;display:flex;min-height:40px}\n\n.feedback_2eX6 .feedbackAvatar_2eX6{-webkit-margin-end:").concat(e.gutterWidth||"inherit",";flex-shrink:0;margin-inline-end:").concat(e.gutterWidth||"inherit","}\n\n[dir=ltr] .feedback_2eX6 .feedbackAvatar_2eX6{margin-right:").concat(e.gutterWidth||"inherit","}\n\n[dir=rtl] .feedback_2eX6 .feedbackAvatar_2eX6{margin-left:").concat(e.gutterWidth||"inherit","}\n\n.feedback_2eX6 .feedbackComment_2eX6,.medium_2eX6 .title_2eX6,.small_2eX6 .title_2eX6{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n\n.medium_2eX6 .title_2eX6,.small_2eX6 .title_2eX6{-webkit-padding-end:0.5rem;padding-inline-end:0.5rem}\n\n[dir=ltr] .medium_2eX6 .title_2eX6,[dir=ltr] .small_2eX6 .title_2eX6{padding-right:0.5rem}\n\n[dir=rtl] .medium_2eX6 .title_2eX6,[dir=rtl] .small_2eX6 .title_2eX6{padding-left:0.5rem}\n\n.small_2eX6{padding-left:0;padding-right:0}\n\n.small_2eX6 .completed_2eX6{-webkit-margin-start:6px;margin-inline-start:6px}\n\n[dir=ltr] .small_2eX6 .completed_2eX6{margin-left:6px}\n\n[dir=rtl] .small_2eX6 .completed_2eX6{margin-right:6px}\n\n.small_2eX6 .innerLayout_2eX6{-webkit-margin-start:1rem;align-items:flex-start;flex-direction:column;margin-inline-start:1rem}\n\n[dir=ltr] .small_2eX6 .innerLayout_2eX6{margin-left:1rem}\n\n[dir=rtl] .small_2eX6 .innerLayout_2eX6{margin-right:1rem}\n\n.small_2eX6 .details_2eX6{margin-bottom:1rem}\n\n.small_2eX6 .details_2eX6,.small_2eX6 .secondary_2eX6{flex:1 0 auto;width:100%}\n\n.small_2eX6 .metrics_2eX6{-webkit-padding-start:0;align-items:flex-end;display:flex;flex:1 0 auto;flex-direction:row-reverse;justify-content:space-between;padding-inline-start:0;text-align:unset}\n\n[dir=ltr] .small_2eX6 .metrics_2eX6{padding-left:0;text-align:unset}\n\n[dir=rtl] .small_2eX6 .metrics_2eX6{padding-right:0;text-align:unset}\n\n.small_2eX6 .due_2eX6{width:100%}\n\n.small_2eX6 .avatar_2eX6,.small_2eX6 .badges_2eX6,.small_2eX6 .editButton_2eX6,.small_2eX6 .feedback_2eX6,.small_2eX6 .icon_2eX6{display:none}\n\n.small_2eX6 .location_2eX6{-webkit-margin-start:1rem;margin-inline-start:1rem}\n\n[dir=ltr] .small_2eX6 .location_2eX6{margin-left:1rem}\n\n[dir=rtl] .small_2eX6 .location_2eX6{margin-right:1rem}")},root:"root_2eX6",small:"small_2eX6",avatar:"avatar_2eX6",completed:"completed_2eX6",icon:"icon_2eX6",layout:"layout_2eX6",activityIndicator:"activityIndicator_2eX6",innerLayout:"innerLayout_2eX6",details:"details_2eX6",details_no_badges:"details_no_badges_2eX6",secondary:"secondary_2eX6",secondary_no_badges:"secondary_no_badges_2eX6",type:"type_2eX6",title:"title_2eX6",metrics:"metrics_2eX6",with_end_time:"with_end_time_2eX6",due:"due_2eX6",score:"score_2eX6",badges:"badges_2eX6",feedback:"feedback_2eX6",feedbackAvatar:"feedbackAvatar_2eX6",feedbackComment:"feedbackComment_2eX6",medium:"medium_2eX6",editButton:"editButton_2eX6",location:"location_2eX6"}
class Vs extends n["Component"]{constructor(e){super(e)
this.toDoLinkClick=e=>{e.preventDefault()
this.props.updateTodo({updateTodoItem:Object(s["a"])({},this.props)})}
this.registerRootDivRef=e=>{this.rootDivRef=e}
this.registerFocusElementRef=e=>{this.checkboxRef=e}
this.getFocusable=e=>"update"===e||"delete"===e?this.itemLink:this.checkboxRef
this.renderDateField=()=>{if(this.props.date){if(this.props.allDay)return B("All Day")
if("Calendar Event"===this.props.associated_item)return this.showEndTime()?B("{startTime} to {endTime}",{startTime:this.props.date.format("LT"),endTime:this.props.endTime.format("LT")}):B(this.props.date.format("LT"))
if(this.hasDueTime())return"Peer Review"===this.props.associated_item?B("Reminder: {date}",{date:this.props.date.format("LT")}):"todo"===this.props.dateStyle?B("To Do: {date}",{date:this.props.date.format("LT")}):B("Due: {date}",{date:this.props.date.format("LT")})
return this.props.date.format("LT")}return null}
this.openCalendarEventModal=()=>{this.setState({calendarEventModalOpen:true})}
this.closeCalendarEventModal=()=>{this.setState({calendarEventModalOpen:false})}
this.renderIcon=()=>{const e=this.props.currentUser||{}
switch(this.props.associated_item){case"Assignment":return i.a.createElement(de["a"],null)
case"Quiz":return i.a.createElement(le["a"],null)
case"Discussion":return i.a.createElement(ue["a"],null)
case"Announcement":return i.a.createElement(_e["a"],null)
case"Calendar Event":return i.a.createElement(me["a"],null)
case"Page":return i.a.createElement(ce["a"],null)
case"Peer Review":return i.a.createElement(ge["a"],null)
default:return i.a.createElement(te["a"],{name:e.displayName||"?",src:e.avatarUrl,size:"small","data-fs-exclude":true})}}
this.renderBadges=()=>{if(this.props.badges.length)return i.a.createElement(zs,null,this.props.badges.map(e=>i.a.createElement(ae["a"],{key:e.id,text:e.text,variant:e.variant})))
return null}
this.renderItemSubMetric=()=>{if(this.props.points)return i.a.createElement("div",{className:Xs.score},i.a.createElement(D["a"],{color:"secondary"},i.a.createElement(D["a"],{size:"large"},this.props.points),i.a.createElement(D["a"],{size:"x-small"}," ",B("pts"))))
if("To Do"===this.props.associated_item)return i.a.createElement("div",{className:Xs.editButton},i.a.createElement(w["ApplyTheme"],{theme:{[oe["a"].theme]:{iconColor:this.props.color}}},i.a.createElement(oe["a"],{variant:"icon",icon:pe["a"],onClick:this.toDoLinkClick},i.a.createElement(ie["a"],null,B("Edit")))))
return null}
this.renderItemMetrics=()=>{const e=m()(Xs.secondary,this.hasBadges()?"":Xs.secondary_no_badges)
const t=m()(Xs.metrics,{[Xs.with_end_time]:this.showEndTime()})
return i.a.createElement("div",{className:e},i.a.createElement("div",{className:Xs.badges},this.renderBadges()),i.a.createElement("div",{className:t},this.renderItemSubMetric(),i.a.createElement("div",{className:Xs.due},i.a.createElement(D["a"],{color:"secondary",size:"x-small"},i.a.createElement(re["a"],null,this.renderDateField())))))}
this.renderType=()=>this.props.associated_item?"".concat(this.props.courseName||""," ").concat(this.assignmentType()):B("{course} TO DO",{course:this.props.courseName||""})
this.renderItemDetails=()=>i.a.createElement("div",{className:m()(Xs.details,this.hasBadges()?"":Xs.details_no_badges)},i.a.createElement("div",{className:Xs.type},i.a.createElement(D["a"],{size:"x-small",color:"secondary"},this.renderType())),this.renderTitle())
this.getCheckboxTheme=()=>({checkedBackground:this.props.color,checkedBorderColor:this.props.color,borderColor:this.props.color,hoverBorderColor:this.props.color})
this.state={calendarEventModalOpen:false,completed:e.completed}}componentDidMount(){this.props.registerAnimatable("item",this,this.props.animatableIndex,[this.props.uniqueId])}componentWillReceiveProps(e){this.props.deregisterAnimatable("item",this,[this.props.uniqueId])
this.props.registerAnimatable("item",this,e.animatableIndex,[e.uniqueId])
this.setState({completed:e.completed})}componentWillUnmount(){this.props.deregisterAnimatable("item",this,[this.props.uniqueId])}getScrollable(){return this.rootDivRef}getLayout(){return this.props.responsiveSize}hasDueTime(){return this.props.date&&!("Announcement"===this.props.associated_item||"Calendar Event"===this.props.associated_item)}showEndTime(){return this.props.date&&!this.props.allDay&&this.props.endTime&&!this.props.endTime.isSame(this.props.date)}hasBadges(){return this.props.badges&&this.props.badges.length&&this.props.badges.length>0}assignmentType(){switch(this.props.associated_item){case"Quiz":return B("Quiz")
case"Discussion":return B("Discussion")
case"Assignment":return B("Assignment")
case"Page":return B("Page")
case"Announcement":return B("Announcement")
case"To Do":return B("To Do")
case"Calendar Event":return B("Calendar Event")
case"Peer Review":return B("Peer Review")
default:return B("Task")}}linkLabel(){const e=this.assignmentType()
const t=true===this.props.allDay?"LL":"LLLL"
const a={assignmentType:e,title:this.props.title,datetime:this.props.date?this.props.date.format(t):null}
if(this.props.date){if(this.props.allDay)return B("{assignmentType} {title}, all day on {datetime}.",a)
if("Calendar Event"===this.props.associated_item){if(this.showEndTime()){a.endTime=this.props.endTime.format("LT")
return B("{assignmentType} {title}, at {datetime} until {endTime}",a)}return B("{assignmentType} {title}, at {datetime}.",a)}if(this.hasDueTime())return"todo"===this.props.dateStyle?B("{assignmentType} {title} has a to do time at {datetime}.",a):"Peer Review"===this.props.associated_item?B("{assignmentType} {title}, reminder {datetime}.",a):B("{assignmentType} {title}, due {datetime}.",a)
if("Announcement"===this.props.associated_item)return B("{assignmentType} {title} posted {datetime}.",a)}return B("{assignmentType} {title}.",a)}renderCalendarEventModal(){if("Calendar Event"!==this.props.associated_item)return null
return i.a.createElement(qs,{open:this.state.calendarEventModalOpen,requestClose:this.closeCalendarEventModal,title:this.props.title,html_url:this.props.html_url,courseName:this.props.courseName,currentUser:this.props.currentUser,location:this.props.location,address:this.props.address,details:this.props.details,startTime:this.props.date,endTime:this.props.endTime,allDay:!!this.props.allDay,timeZone:this.props.timeZone})}renderTitle(){const e={}
"To Do"===this.props.associated_item&&(e.onClick=this.toDoLinkClick)
"Calendar Event"===this.props.associated_item?e.onClick=this.openCalendarEventModal:e.href=this.props.html_url
return i.a.createElement("div",{className:Xs.title,style:{position:"relative"}},i.a.createElement(oe["a"],Object.assign({variant:"link",theme:{mediumPadding:"0",mediumHeight:"normal"},buttonRef:e=>{this.itemLink=e}},e),i.a.createElement(ie["a"],null,this.linkLabel()),i.a.createElement(re["a"],null,this.props.title)),this.renderCalendarEventModal())}renderNotificationBadge(){if(!this.props.showNotificationBadge)return null
const e=this.props.newActivity
let t=false
at("missing",{status:this.props.status,context:this.props.context})&&(t=true)
if(e||t){const t=e?ks:ye
return i.a.createElement(Fs,{responsiveSize:this.props.responsiveSize},i.a.createElement("div",{className:Xs.activityIndicator},i.a.createElement(t,{title:this.props.title,itemIds:[this.props.uniqueId],animatableIndex:this.props.animatableIndex,getFocusable:this.getFocusable})))}return i.a.createElement(Fs,{responsiveSize:this.props.responsiveSize})}renderExtraInfo(){const e=this.props.feedback
if(e){const t=e.is_media?B("You have media feedback."):e.comment
return i.a.createElement("div",{className:Xs.feedback},i.a.createElement("span",{className:Xs.feedbackAvatar},i.a.createElement(te["a"],{name:e.author_name||"?",src:e.author_avatar_url,size:"small","data-fs-exclude":true})),i.a.createElement("span",{className:Xs.feedbackComment},i.a.createElement(D["a"],{fontStyle:"italic"},t)))}const t=this.props.location
if(t)return i.a.createElement("div",{className:Xs.location},i.a.createElement(D["a"],{color:"secondary"},t))
return null}render(){const e=this.assignmentType()
const t=this.state.completed?B("{assignmentType} {title} is marked as done.",{assignmentType:e,title:this.props.title}):B("{assignmentType} {title} is not marked as done.",{assignmentType:e,title:this.props.title})
return i.a.createElement("div",{className:m()(Xs.root,Xs[this.getLayout()],"planner-item"),ref:this.registerRootDivRef},this.renderNotificationBadge(),i.a.createElement("div",{className:Xs.completed},i.a.createElement(w["ApplyTheme"],{theme:{[se["a"].theme]:this.getCheckboxTheme()}},i.a.createElement(ne["a"],{ref:this.registerFocusElementRef,label:i.a.createElement(ie["a"],null,t),checked:this.props.toggleAPIPending?!this.state.completed:this.state.completed,onChange:this.props.toggleCompletion,disabled:this.props.toggleAPIPending}))),i.a.createElement("div",{className:"To Do"===this.props.associated_item?Xs.avatar:Xs.icon,style:{color:this.props.color},"aria-hidden":"true"},this.renderIcon()),i.a.createElement("div",{className:Xs.layout},i.a.createElement("div",{className:Xs.innerLayout},this.renderItemDetails(),this.renderItemMetrics()),this.renderExtraInfo()))}}Vs.propTypes={color:p["string"],id:p["string"].isRequired,uniqueId:p["string"].isRequired,animatableIndex:p["number"],title:p["string"].isRequired,points:p["number"],date:fe["momentObj"],dateStyle:p["string"],details:p["string"],courseName:p["string"],completed:p["bool"],overrideId:p["string"],associated_item:p["string"],context:p["object"],html_url:p["string"],toggleCompletion:p["func"],updateTodo:p["func"].isRequired,badges:Object(p["arrayOf"])(Object(p["shape"])(b)),registerAnimatable:p["func"],deregisterAnimatable:p["func"],toggleAPIPending:p["bool"],status:C,newActivity:p["bool"],showNotificationBadge:p["bool"],currentUser:Object(p["shape"])(h),responsiveSize:A,allDay:p["bool"],feedback:Object(p["shape"])(k),location:p["string"],endTime:fe["momentObj"],timeZone:p["string"].isRequired}
Vs.defaultProps={badges:[],responsiveSize:"large",allDay:false}
const Ws=Object(Hs["a"])()(Vs)
var Gs=Ee(Object(w["themeable"])(Us,Xs)(Ws))
var Zs=a("KIj7")
function Ks(e){let t=e.borders,a=e.colors,s=e.spacing,n=e.typography
return{fontFamily:n.fontFamily,color:a.licorice,padding:s.small,paddingMedium:s.small,paddingLarge:"".concat(s.small," ").concat(s.medium),borderWidth:t.widthSmall,borderColor:a.tiara,bottomMarginPhoneUp:s.xSmall,gutterWidth:s.medium,buttonPadding:s.small,labelColor:a.brand}}const Ys={componentId:"ekpsc",template:function(e){return"\n\n.root_2OsM{align-items:center;border-bottom:".concat(e.borderWidth||"inherit"," solid ").concat(e.borderColor||"inherit",";box-sizing:border-box;color:").concat(e.color||"inherit",";display:flex;flex:1;font-family:").concat(e.fontFamily||"inherit",";padding:").concat(e.padding||"inherit","}\n\n.activityIndicator_2OsM{-webkit-padding-end:0;-webkit-padding-start:0;padding-inline-end:0;padding-inline-start:0}\n\n[dir=ltr] .activityIndicator_2OsM{padding-left:0;padding-right:0}\n\n[dir=rtl] .activityIndicator_2OsM{padding-left:0;padding-right:0}\n\n.showLabel_2OsM{-webkit-margin-start:").concat(e.gutterWidth||"inherit",";margin-inline-start:").concat(e.gutterWidth||"inherit","}\n\n[dir=ltr] .showLabel_2OsM{margin-left:").concat(e.gutterWidth||"inherit","}\n\n[dir=rtl] .showLabel_2OsM{margin-right:").concat(e.gutterWidth||"inherit","}\n\n.contentPrimary_2OsM{-webkit-margin-start:").concat(e.gutterWidth||"inherit",";box-sizing:border-box;flex:0 0 50%;margin-bottom:0;margin-inline-start:").concat(e.gutterWidth||"inherit",";min-width:1px}\n\n[dir=ltr] .contentPrimary_2OsM{margin-left:").concat(e.gutterWidth||"inherit","}\n\n[dir=rtl] .contentPrimary_2OsM{margin-right:").concat(e.gutterWidth||"inherit","}\n\n.contentSecondary_2OsM{box-sizing:border-box;flex:1 0;justify-content:flex-end;min-width:1px;text-align:end}\n\n[dir=ltr] .contentSecondary_2OsM{text-align:right}\n\n[dir=rtl] .contentSecondary_2OsM{text-align:left}\n\n.activityIndicator_2OsM+.contentPrimary_2OsM{-webkit-margin-start:calc(").concat(e.gutterWidth||"inherit"," - ").concat(e.buttonPadding||"inherit"," - ").concat(e.activityIndicatorWidth||"inherit",");margin-inline-start:calc(").concat(e.gutterWidth||"inherit"," - ").concat(e.buttonPadding||"inherit"," - ").concat(e.activityIndicatorWidth||"inherit",")}\n\n[dir=ltr] .activityIndicator_2OsM+.contentPrimary_2OsM{margin-left:calc(").concat(e.gutterWidth||"inherit"," - ").concat(e.buttonPadding||"inherit"," - ").concat(e.activityIndicatorWidth||"inherit",")}\n\n[dir=rtl] .activityIndicator_2OsM+.contentPrimary_2OsM{margin-right:calc(").concat(e.gutterWidth||"inherit"," - ").concat(e.buttonPadding||"inherit"," - ").concat(e.activityIndicatorWidth||"inherit",")}\n\n.small_2OsM{padding-left:0;padding-right:0}\n\n.small_2OsM .contentPrimary_2OsM{-webkit-margin-start:10px;flex-basis:auto;margin-inline-start:10px}\n\n[dir=ltr] .small_2OsM .contentPrimary_2OsM{margin-left:10px}\n\n[dir=rtl] .small_2OsM .contentPrimary_2OsM{margin-right:10px}\n\n.small_2OsM .contentSecondary_2OsM{display:none}")},root:"root_2OsM",activityIndicator:"activityIndicator_2OsM",showLabel:"showLabel_2OsM",contentPrimary:"contentPrimary_2OsM",contentSecondary:"contentSecondary_2OsM",small:"small_2OsM"}
class Js extends n["Component"]{constructor(){super(...arguments)
this.getFocusable=()=>this.buttonRef}componentDidMount(){this.props.registerAnimatable("item",this,this.props.animatableIndex,this.props.animatableItemIds)}componentWillReceiveProps(e){this.props.deregisterAnimatable("item",this,this.props.animatableItemIds)
this.props.registerAnimatable("item",this,e.animatableIndex,e.animatableItemIds)}componentWillUnmount(){this.props.deregisterAnimatable("item",this,this.props.animatableItemIds)}getScrollable(){return this.rootDiv}renderBadges(){if(this.props.badges.length)return i.a.createElement(zs,null,this.props.badges.map(e=>i.a.createElement(ae["a"],{key:e.id,text:e.text,variant:e.variant})))
return null}renderNotificationBadge(){if("none"===this.props.notificationBadge)return i.a.createElement(Fs,{responsiveSize:this.props.responsiveSize})
const e="newActivity"===this.props.notificationBadge
const t=e?ks:ye
const a=B("{items} completed {items, plural,=1 {item} other {items}}",{items:this.props.itemCount})
return i.a.createElement(Fs,{responsiveSize:this.props.responsiveSize},i.a.createElement("div",{className:Ys.activityIndicator},i.a.createElement(t,{title:a,itemIds:this.props.animatableItemIds,animatableIndex:this.props.animatableIndex,getFocusable:this.getFocusable})))}render(){const e=this.theme?{textColor:this.theme.labelColor,iconColor:this.theme.labelColor,iconMargin:this.theme.gutterWidth}:null
return i.a.createElement("div",{className:m()(Ys.root,Ys[this.props.responsiveSize],"planner-completed-items"),ref:e=>this.rootDiv=e},this.renderNotificationBadge(),i.a.createElement("div",{className:Ys.contentPrimary},i.a.createElement(Zs["a"],{ref:e=>this.buttonRef=e,onToggle:this.props.onClick,summary:B("{\n                  count, plural,\n                  one {Show # completed item}\n                  other {Show # completed items}\n                }",{count:this.props.itemCount}),theme:e},"ToggleDetails requires a child")),i.a.createElement("div",{className:Ys.contentSecondary},this.renderBadges()))}}Js.propTypes={onClick:p["func"].isRequired,itemCount:p["number"].isRequired,badges:Object(p["arrayOf"])(Object(p["shape"])(b)),animatableIndex:p["number"],animatableItemIds:Object(p["arrayOf"])(p["string"]),registerAnimatable:p["func"],deregisterAnimatable:p["func"],notificationBadge:Object(p["oneOf"])(["none","newActivity","missing"]),date:fe["momentObj"],responsiveSize:A}
Js.defaultProps={badges:[],registerAnimatable:()=>{},deregisterAnimatable:()=>{},notificationBadge:"none",responsiveSize:"large"}
var Qs=Ee(Object(w["themeable"])(Ks,Ys)(Js))
const $s={componentId:"eOFoE",template:function(e){return"\n\n.root_3bek{border-color:".concat(e.groupColor||"inherit",";color:").concat(e.groupColor||"inherit",";display:flex;font-family:").concat(e.fontFamily||"inherit",";line-height:").concat(e.lineHeight||"inherit",";margin:").concat(e.margin||"inherit","}\n\n.root_3bek,.title_3bek{position:relative}\n\n.title_3bek{-ms-hyphens:auto;-webkit-hyphens:auto;-webkit-text-decoration:").concat(e.titleTextDecoration||"inherit",";background-color:").concat(e.titleBackground||"inherit",";box-sizing:border-box;color:").concat(e.titleColor||"inherit",";flex:1;font-size:").concat(e.titleFontSize||"inherit",";font-weight:").concat(e.titleFontWeight||"inherit",";hyphens:auto;max-height:3rem;min-width:1px;overflow:hidden;overflow-wrap:break-word;padding:").concat(e.titlePadding||"inherit",";text-align:center;text-decoration:").concat(e.titleTextDecoration||"inherit",";text-transform:").concat(e.titleTextTransform||"inherit",";word-wrap:break-word;z-index:1}\n\n[dir=ltr] .title_3bek,[dir=rtl] .title_3bek{text-align:center}\n\n.title_3bek:after{background:linear-gradient(180deg,hsla(0,0%,100%,0) 0%,").concat(e.titleBackground||"inherit",');bottom:0;content:"";height:').concat(e.titleOverflowGradientHeight||"inherit",";left:0;position:absolute;width:100%}\n\n.hero_3bek{align-items:center;background-position:50%;background-repeat:no-repeat;background-size:cover;box-sizing:border-box;display:flex;flex:0 0 ").concat(e.heroWidth||"inherit",";justify-content:center;min-width:1px;outline:none;padding:").concat(e.heroPadding||"inherit",";position:relative;text-decoration:none}\n\n.hero_3bek .groupingName_3bek{-webkit-text-decoration:").concat(e.heroLinkTextDecoration||"inherit",";text-decoration:").concat(e.heroLinkTextDecoration||"inherit","}\n\n.hero_3bek,.overlay_3bek{border-bottom-inline-start-radius:").concat(e.heroBorderRadius||"inherit",";border-top-inline-start-radius:").concat(e.heroBorderRadius||"inherit","}\n\n[dir=ltr] .hero_3bek,[dir=ltr] .overlay_3bek{border-bottom-left-radius:").concat(e.heroBorderRadius||"inherit",";border-top-left-radius:").concat(e.heroBorderRadius||"inherit","}\n\n[dir=rtl] .hero_3bek,[dir=rtl] .overlay_3bek{border-bottom-right-radius:").concat(e.heroBorderRadius||"inherit",";border-top-right-radius:").concat(e.heroBorderRadius||"inherit","}\n\n.heroHover_3bek:focus,.heroHover_3bek:hover{text-decoration:none}\n\n.heroHover_3bek:focus .title_3bek,.heroHover_3bek:hover .title_3bek{-webkit-text-decoration:").concat(e.titleTextDecorationHover||"inherit",";text-decoration:").concat(e.titleTextDecorationHover||"inherit","}\n\n.overlay_3bek{background-color:").concat(e.groupColor||"inherit",";height:100%;left:0;opacity:1;position:absolute;top:0;width:100%}\n\n.overlay_3bek.withImage_3bek{opacity:").concat(e.overlayOpacity||"inherit","}\n\n.items_3bek{border-color:").concat(e.groupColor||"inherit",";border-top:").concat(e.borderTopWidth||"inherit"," solid;color:").concat(e.groupColor||"inherit",";flex:1;list-style-type:none;margin:0;min-width:1px;padding:0}\n\n.medium_3bek.root_3bek,.small_3bek.root_3bek{display:block;margin:0}\n\n.medium_3bek .hero_3bek,.medium_3bek .overlay_3bek,.small_3bek .hero_3bek,.small_3bek .overlay_3bek{background-color:initial;border-radius:0}\n\n.medium_3bek .hero_3bek,.small_3bek .hero_3bek{display:block;flex:none;line-height:2rem;min-height:unset}\n\n.medium_3bek .title_3bek,.small_3bek .title_3bek{-webkit-padding-start:0;font-size:").concat(e.titleFontSizeTablet||"inherit",";padding-inline-start:0}\n\n[dir=ltr] .medium_3bek .title_3bek,[dir=ltr] .small_3bek .title_3bek{padding-left:0}\n\n[dir=rtl] .medium_3bek .title_3bek,[dir=rtl] .small_3bek .title_3bek{padding-right:0}\n\n.medium_3bek .items_3bek,.small_3bek .items_3bek{border-top-width:").concat(e.borderTopWidthTablet||"inherit","}")},root:"root_3bek",title:"title_3bek",hero:"hero_3bek",groupingName:"groupingName_3bek",overlay:"overlay_3bek",heroHover:"heroHover_3bek",withImage:"withImage_3bek",items:"items_3bek",medium:"medium_3bek",small:"small_3bek"}
class en extends n["Component"]{constructor(e){super(e)
this.groupingLinkRef=e=>{this.groupingLink=e}
this.getFocusable=()=>this.groupingLink
this.handleFacadeClick=e=>{e&&e.preventDefault()
this.setState(()=>({showCompletedItems:true}),()=>{this.groupingLink&&this.groupingLink.focus()})}
this.state={showCompletedItems:false,badgeMap:this.setupItemBadgeMap(e.items)}}componentDidMount(){this.props.registerAnimatable("group",this,this.props.animatableIndex,this.itemUniqueIds())}componentWillReceiveProps(e){this.props.deregisterAnimatable("group",this,this.itemUniqueIds())
this.props.registerAnimatable("group",this,e.animatableIndex,this.itemUniqueIds(e))}componentWillUnmount(){this.props.deregisterAnimatable("group",this,this.itemUniqueIds())}itemUniqueIds(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props
return e.items.map(e=>e.uniqueId)}setupItemBadgeMap(e){const t={}
e.forEach(e=>{const a=st(e)
a.length&&(t[e.id]=a)})
return t}getScrollable(){return this.groupingLink||this.plannerNoteHero}getLayout(){return this.props.responsiveSize}renderItemsAndFacade(e){const t=Object(Q["partition"])(e,e=>e.completed&&!e.show),a=Object(J["a"])(t,2),s=a[0],n=a[1]
let i=n
this.state.showCompletedItems&&(i=e)
const r=this.renderItems(i)
r.push(this.renderFacade(s,100*this.props.animatableIndex+i.length+1))
return r}renderItems(e){const t="large"!==this.getLayout()
return e.map((e,a)=>i.a.createElement("li",{className:$s.item,key:e.uniqueId},i.a.createElement(Gs,{theme:{iconColor:this.props.color},color:this.props.color,completed:e.completed,overrideId:e.overrideId,id:e.id,uniqueId:e.uniqueId,animatableIndex:100*this.props.animatableIndex+a+1,courseName:this.props.title,context:e.context||{},date:u()(e.date).tz(this.props.timeZone),associated_item:e.type,title:e.title,points:e.points,updateTodo:this.props.updateTodo,html_url:e.html_url,toggleCompletion:()=>this.props.toggleCompletion(e),badges:this.state.badgeMap[e.id],details:e.details,toggleAPIPending:e.toggleAPIPending,status:e.status,newActivity:e.newActivity,allDay:e.allDay,showNotificationBadge:t,currentUser:this.props.currentUser,feedback:e.feedback,location:e.location,address:e.address,endTime:e.endTime,dateStyle:e.dateStyle,timeZone:this.props.timeZone})))}renderFacade(e,t){const a="large"!==this.getLayout()
if(!this.state.showCompletedItems&&e.length>0){const s=e[0].date.clone()
s.startOf("day")
let n=false
let r=false
const o=e.map(e=>{at("missing",e)&&(n=true)
e.newActivity&&(r=true)
return e.uniqueId})
let d="none"
a&&(r?d="newActivity":n&&(d="missing"))
return i.a.createElement("li",{className:$s.item,key:"completed"},i.a.createElement(Qs,{onClick:this.handleFacadeClick,itemCount:e.length,badges:nt(e),animatableIndex:t,animatableItemIds:o,notificationBadge:d,theme:{labelColor:this.props.color},date:s,responsiveSize:this.props.responsiveSize}))}return null}renderToDoText(){return B("To Do")}renderNotificationBadge(){if("large"!==this.getLayout())return null
let e=false
const t=this.props.items.find(t=>{at("missing",t)&&(e=true)
return t.newActivity})
if(t||e){const e=t?ks:ye
const a=this.props.title?this.props.title:this.renderToDoText()
return i.a.createElement(Fs,null,i.a.createElement(e,{title:a,itemIds:this.itemUniqueIds(),animatableIndex:this.props.animatableIndex,getFocusable:this.getFocusable}))}return i.a.createElement(Fs,null)}renderGroupLinkBackground(){const e=m()({[$s.overlay]:true,[$s.withImage]:this.props.image_url})
const t="large"===this.getLayout()?{backgroundColor:this.props.color}:null
return i.a.createElement("span",{className:e,style:t})}renderGroupLinkTitle(){return i.a.createElement("span",{className:$s.title},this.props.title||this.renderToDoText())}renderGroupLink(){if(!this.props.title)return i.a.createElement("span",{className:$s.hero,ref:e=>this.plannerNoteHero=e},this.renderGroupLinkBackground(),this.renderGroupLinkTitle())
const e="large"===this.getLayout()?{backgroundImage:"url(".concat(this.props.image_url||"",")")}:null
return i.a.createElement("a",{href:this.props.url||"#",ref:this.groupingLinkRef,className:"".concat($s.hero," ").concat($s.heroHover),style:e},this.renderGroupLinkBackground(),this.renderGroupLinkTitle())}render(){return i.a.createElement("div",{className:m()($s.root,$s[this.getLayout()],"planner-grouping")},this.renderNotificationBadge(),this.renderGroupLink(),i.a.createElement("ol",{className:$s.items,style:{borderColor:this.props.color}},this.renderItemsAndFacade(this.props.items)))}}en.propTypes={items:Object(p["arrayOf"])(Object(p["shape"])(v)).isRequired,animatableIndex:p["number"],title:p["string"],color:p["string"],image_url:p["string"],timeZone:p["string"].isRequired,url:p["string"],toggleCompletion:p["func"],updateTodo:p["func"],registerAnimatable:p["func"],deregisterAnimatable:p["func"],currentUser:Object(p["shape"])(h),responsiveSize:A}
en.defaultProps={registerAnimatable:()=>{},deregisterAnimatable:()=>{},responsiveSize:"large"}
const tn=Object(Hs["a"])()(en)
var an=Ee(Object(w["themeable"])(ee,$s)(tn))
const sn={componentId:"fFVtz",template:function(e){return"\n\n.root_3KEc{background:".concat(e.background||"inherit",";color:").concat(e.color||"inherit",";font-family:").concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";line-height:").concat(e.lineHeight||"inherit",";margin-top:").concat(e.marginTop||"inherit","}")},root:"root_3KEc"}
class nn extends n["Component"]{constructor(e){super(e)
const t=u.a.tz(e.day,e.timeZone)
this.friendlyName=R(t)
this.fullDate=q(t)}componentDidMount(){this.props.registerAnimatable("day",this,this.props.animatableIndex,this.itemUniqueIds())}componentWillReceiveProps(e){this.props.deregisterAnimatable("day",this,this.itemUniqueIds())
this.props.registerAnimatable("day",this,e.animatableIndex,this.itemUniqueIds(e))}componentWillUnmount(){this.props.deregisterAnimatable("day",this,this.itemUniqueIds())}itemUniqueIds(e){e=e||this.props
return(e.itemsForDay||[]).map(e=>e.uniqueId)}hasItems(){return this.props.itemsForDay&&this.props.itemsForDay.length>0}renderGrouping(e,t,a){const s=t[0].context||{}
const n=(s.color?s.color:this.props.currentUser.color)||null
return i.a.createElement(an,{title:s.title,image_url:s.image_url,color:n,timeZone:this.props.timeZone,updateTodo:this.props.updateTodo,items:t,animatableIndex:100*this.props.animatableIndex+a+1,url:s.url,key:e,theme:{titleColor:n},toggleCompletion:this.props.toggleCompletion,currentUser:this.props.currentUser})}renderGroupings(){const e=[]
let t
let a
const s=this.props.itemsForDay.length
for(let n=0;n<s;++n){const s=this.props.itemsForDay[n]
const i=s.context&&s.context.id?"".concat(s.context.type).concat(s.context.id):"Notes"
if(i!==a){a&&e.push(this.renderGrouping(a,t,e.length))
a=i
t=[s]}else t.push(s)}e.push(this.renderGrouping(a,t,e.length))
return e}render(){const e=L(this.props.day)
return i.a.createElement("div",{className:m()(sn.root,"planner-day",{"planner-today":e})},i.a.createElement(T["a"],{border:this.hasItems()?"none":"bottom"},i.a.createElement(D["a"],{as:"div",transform:"uppercase",lineHeight:"condensed",size:e?"large":"medium"},this.friendlyName),i.a.createElement(D["a"],{as:"div",lineHeight:"condensed"},this.fullDate)),i.a.createElement("div",null,this.hasItems()?this.renderGroupings():i.a.createElement(c["a"],{textAlign:"center",display:"block",margin:"small 0 0 0"},B("Nothing Planned Yet"))))}}nn.propTypes={day:p["string"].isRequired,itemsForDay:Object(p["arrayOf"])(Object(p["shape"])(v)),animatableIndex:p["number"],timeZone:p["string"].isRequired,toggleCompletion:p["func"],updateTodo:p["func"],registerAnimatable:p["func"].isRequired,deregisterAnimatable:p["func"].isRequired,currentUser:Object(p["shape"])(h)}
nn.defaultProps={animatableIndex:0}
var rn=Ee(Object(w["themeable"])(x,sn)(nn))
function on(e){let t=e.borders,a=e.colors,s=e.typography,n=e.spacing
return{fontSize:s.fontSizeMedium,fontFamily:s.fontFamily,fontWeight:s.fontWeightNormal,lineHeight:s.lineHeightCondensed,color:a.oxford,background:a.white,marginTop:n.large,borderWidth:t.widthSmall,paddingWidth:n.small}}const dn={componentId:"voGQb",template:function(e){return"\n\n.root_hppr{background:".concat(e.background||"inherit",";border-bottom-style:solid;border-bottom-width:").concat(e.borderWidth||"inherit",";color:").concat(e.color||"inherit",";font-family:").concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";line-height:").concat(e.lineHeight||"inherit",";margin-top:").concat(e.marginTop||"inherit",";position:relative}\n\n.nothingPlannedContent_hppr{padding:").concat(e.paddingWidth||"inherit"," 0 0 0}\n\n.nothingPlannedContainer_hppr{align-items:center;bottom:0;display:flex;flex-direction:column;justify-content:center;left:0;position:absolute;right:0;top:0}\n\n.nothingPlanned_hppr{padding-top:").concat(e.paddingWidth||"inherit","}\n\n.small_hppr .nothingPlannedContent_hppr{display:flex;flex-direction:column-reverse;justify-content:flex-start;padding:").concat(e.paddingWidth||"inherit"," 0}\n\n.small_hppr .nothingPlannedContainer_hppr{position:static}\n\n.small_hppr .nothingPlanned_hppr{padding-top:0}")},root:"root_hppr",nothingPlannedContent:"nothingPlannedContent_hppr",nothingPlannedContainer:"nothingPlannedContainer_hppr",nothingPlanned:"nothingPlanned_hppr",small:"small_hppr"}
var ln=function(e){return i.a.createElement("svg",e,i.a.createElement("title",null,"Nothing Planned"),i.a.createElement("defs",null,i.a.createElement("path",{id:"a",d:"M0 155h906.934V.53H0z"}),i.a.createElement("path",{id:"c",d:"M0 20.299V.389h60.079V20.3z"})),i.a.createElement("g",{fill:"none",fillRule:"evenodd"},i.a.createElement("path",{d:"M555.847.977s12.627 2.763 15.348 17.622c0 0 8.79-8.81 22.937-5.71M586.655 30.033s9.718.942 13.089 11.843c0 0 5.805-7.394 16.692-6.335M524.082 9.733s9.763.14 14.02 10.726c0 0 5.175-7.847 16.114-7.688",stroke:"#231F20",strokeWidth:"2"}),i.a.createElement("path",{fill:"#67C1F0",d:"M175.898 126.104h42.195l-21.097-62.596z"}),i.a.createElement("path",{stroke:"#231F20",strokeWidth:"2",d:"M175.898 126.104h42.195l-21.097-62.596z"}),i.a.createElement("path",{d:"M196.996 82.564v70.691M206.372 110.49l-9.376 8.512",stroke:"#0E1D25",strokeWidth:"2"}),i.a.createElement("path",{fill:"#67C1F0",d:"M254.73 136.103h42.195l-21.097-84.88z"}),i.a.createElement("path",{stroke:"#231F20",strokeWidth:"2",d:"M254.73 136.103h42.195l-21.097-84.88z"}),i.a.createElement("path",{d:"M275.828 80.54v72.716M283.641 118.203l-7.813 5.158M263.3 101.624l12.527 13.59",stroke:"#0E1D25",strokeWidth:"2"}),i.a.createElement("path",{stroke:"#C0C6CB",strokeWidth:"2",d:"M583.588 153.028L723.433 15.083l56.422 54.285"}),i.a.createElement("path",{stroke:"#C0C6CB",strokeWidth:"2",d:"M685.627 152.88l129.11-116.62 52.09 45.893"}),i.a.createElement("path",{fill:"#9BE1A4",d:"M857.589 113.192h48.093L881.636 7.272z"}),i.a.createElement("path",{stroke:"#231F20",strokeWidth:"2",d:"M857.589 113.192h48.093L881.636 7.272z"}),i.a.createElement("path",{d:"M881.635 41.305V153.81M872.082 82.37l8.596 8.143M890.053 60.063l-8.418 11.507",stroke:"#0E1D25",strokeWidth:"2"}),i.a.createElement("path",{fill:"#67C1F0",d:"M827.092 126.14h42.196L848.19 63.545z"}),i.a.createElement("path",{stroke:"#231F20",strokeWidth:"2",d:"M827.092 126.14h42.196L848.19 63.545z"}),i.a.createElement("path",{d:"M848.19 82.601v70.69M857.567 110.527l-9.377 8.512",stroke:"#0E1D25",strokeWidth:"2"}),i.a.createElement("g",{transform:"translate(0 -.53)"},i.a.createElement("path",{d:"M889.994 146.914c0 4.212-3.431 7.642-7.65 7.642h-16.02v-.782h16.02a6.86 6.86 0 0 0 6.868-6.86 6.862 6.862 0 0 0-7.65-6.82 6.335 6.335 0 0 0-.226-.759c.336-.047.672-.07 1.008-.07 4.219 0 7.65 3.43 7.65 7.65z",fill:"#231F20"}),i.a.createElement("path",{d:"M882.343 140.046a6.862 6.862 0 0 1 6.869 6.868 6.86 6.86 0 0 1-6.869 6.861h-16.019l.095-.782h15.924c3.36 0 6.088-2.726 6.088-6.079a6.09 6.09 0 0 0-6.713-6.056 6.4 6.4 0 0 0-.155-.765 6.5 6.5 0 0 1 .78-.047",fill:"#231F20"}),i.a.createElement("path",{d:"M881.562 140.093c.07.25.117.508.156.766-.25.031-.5.07-.742.125l-.094-.39-.086-.376c.25-.055.508-.102.766-.125",fill:"#231F20"}),i.a.createElement("path",{d:"M881.531 144.391c.195-.72.289-1.47.289-2.22 0-.445-.031-.883-.102-1.312a6.088 6.088 0 0 1 6.712 6.055 6.087 6.087 0 0 1-6.087 6.08h-15.924l.015-.172 10.424-9.151 3.915.517h.008l.75.203z",fill:"#9BE1A4"}),i.a.createElement("path",{d:"M881.562 140.093c-.258.023-.516.07-.766.125l-.17-.758c.233-.054.475-.1.71-.125.093.25.164.5.226.758",fill:"#231F20"}),i.a.createElement("path",{d:"M881.718 140.859c.07.43.103.867.103 1.312 0 .75-.095 1.5-.29 2.22l-.75-.203a7.836 7.836 0 0 0 .258-2.017c0-.54-.054-1.07-.156-1.578l.093.39c.242-.054.492-.093.742-.124",fill:"#9BE1A4"}),i.a.createElement("path",{d:"M880.883 140.593a8.035 8.035 0 0 1-.102 3.595h-.007l-.75-.204a7.105 7.105 0 0 0 .101-3.18l.664-.578c.039.117.063.242.094.367",fill:"#9BE1A4"}),i.a.createElement("path",{d:"M880.789 140.218h.008l.086.375c-.032-.125-.055-.25-.094-.367v-.008zM880.773 144.188l-3.915-.517 3.267-2.867a7.12 7.12 0 0 1-.102 3.18l.75.204zM873.193 135.1c3.423 0 6.291 2.453 6.932 5.704l-3.267 2.867-9.689-1.265a6.064 6.064 0 0 0-1.032-.578c.18-3.744 3.275-6.728 7.056-6.728",fill:"#9BE1A4"}),i.a.createElement("path",{d:"M876.858 143.671l-10.424 9.15 1.07-9.134.547-.555a6.008 6.008 0 0 0-.882-.727l9.69 1.266z",fill:"#9BE1A4"}),i.a.createElement("path",{d:"M880.625 139.46l.172.758h-.008a7.833 7.833 0 0 0-7.596-5.9c-4.117 0-7.493 3.172-7.821 7.212a6.48 6.48 0 0 0-.766-.187c.415-4.368 4.11-7.806 8.587-7.806 3.767 0 6.979 2.43 8.143 5.798-.234.023-.477.07-.711.125",fill:"#231F20"}),i.a.createElement("path",{d:"M873.193 135.1c-3.78 0-6.876 2.984-7.056 6.728a4.814 4.814 0 0 0-.765-.297c.328-4.04 3.704-7.212 7.821-7.212a7.834 7.834 0 0 1 7.596 5.899v.008l-.664.578c-.64-3.251-3.509-5.704-6.932-5.704",fill:"#231F20"}),i.a.createElement("path",{d:"M867.505 143.687l-1.07 9.135-.196.172h-2.86a5.11 5.11 0 0 1-5.102-5.103 5.11 5.11 0 0 1 5.103-5.102 5.08 5.08 0 0 1 3.578 1.454l.547-.556z",fill:"#9BE1A4"}),i.a.createElement("path",{d:"M867.169 142.406l-1.82-.234h.78c0-.118 0-.235.009-.344.359.156.703.35 1.03.578",fill:"#231F20"}),i.a.createElement("path",{fill:"#9BE1A4",d:"M866.434 152.822l-.016.172h-.179z"}),i.a.createElement("path",{fill:"#231F20",d:"M866.419 152.994l-.094.78v-.78z"}),i.a.createElement("mask",{id:"b",fill:"#fff"},i.a.createElement("use",{xlinkHref:"#a"})),i.a.createElement("path",{fill:"#231F20",mask:"url(#b)",d:"M865.348 154.556h.977v-.781h-.977zM866.325 152.994v.78h-.977l.891-.78z"}),i.a.createElement("path",{fill:"#231F20",mask:"url(#b)",d:"M866.239 152.994l-.891.78v-.78zM866.138 141.827c-.009.11-.009.227-.009.345h-.78c0-.22.007-.43.022-.642.259.078.517.172.767.297"}),i.a.createElement("path",{d:"M865.372 141.53a8.428 8.428 0 0 0-.023.642h-.602c-.062-.024-.117-.032-.18-.047 0-.266.016-.524.039-.781.258.046.516.109.766.187",fill:"#231F20",mask:"url(#b)"}),i.a.createElement("path",{d:"M865.348 142.171l1.82.234c.313.211.61.453.883.727l-.547.555a5.811 5.811 0 0 0-2.758-1.516h.602zM864.747 142.171h-.18v-.047c.063.016.118.024.18.047",fill:"#231F20",mask:"url(#b)"}),i.a.createElement("path",{d:"M864.567 142.171h.18a5.816 5.816 0 0 1 2.758 1.516l-.547.555a5.085 5.085 0 0 0-3.578-1.454 5.11 5.11 0 0 0-5.103 5.103 5.108 5.108 0 0 0 5.103 5.102h1.968v.782h-1.96a5.89 5.89 0 0 1-5.893-5.884 5.89 5.89 0 0 1 5.892-5.884c.407 0 .797.04 1.18.117v.047z",fill:"#231F20",mask:"url(#b)"}),i.a.createElement("path",{d:"M863.38 154.556a6.671 6.671 0 0 1-6.666-6.665c0-3.672 2.993-6.665 6.666-6.665.414 0 .828.039 1.227.117-.024.258-.04.516-.04.781a5.864 5.864 0 0 0-1.18-.117c-3.25 0-5.892 2.634-5.892 5.884a5.89 5.89 0 0 0 5.893 5.884h1.96v.781h-1.968z",fill:"#231F20",mask:"url(#b)"})),i.a.createElement("path",{stroke:"#C0C6CB",strokeWidth:"2",d:"M681.72 56.228l21.53 9.872 17.28-9.872 25.697 7.422 19.97-7.422M797.635 51.707l24.215 6.618 8.334-6.618"}),i.a.createElement("g",{transform:"translate(0 70.47)"},i.a.createElement("mask",{id:"d",fill:"#fff"},i.a.createElement("use",{xlinkHref:"#c"})),i.a.createElement("path",{d:"M50.582 20.299H9.498C4.274 20.299 0 16.025 0 10.8v-.914C0 4.664 4.274.39 9.498.39h41.084c5.224 0 9.497 4.274 9.497 9.497v.914c0 5.224-4.273 9.498-9.497 9.498",fill:"#E5E7E9",mask:"url(#d)"})),i.a.createElement("path",{d:"M48.657 67.596c-.886 0-1.749.101-2.577.292v.014c-1.438-5.648-6.556-9.825-12.651-9.825-7.209 0-13.053 5.844-13.053 13.054l3.586 2.524a9.756 9.756 0 0 0-6.85-2.796c-5.407 0-9.79 4.383-9.79 9.79 0 5.407 4.383 9.791 9.79 9.791h31.545c6.309 0 11.422-5.114 11.422-11.422 0-6.308-5.113-11.422-11.422-11.422",fill:"#E5E7E9"}),i.a.createElement("path",{d:"M39.017 77.802c0 6.98 5.658 12.638 12.638 12.638 6.98 0 12.637-5.658 12.637-12.638 0-6.98-5.658-12.638-12.637-12.638-6.98 0-12.638 5.659-12.638 12.638",fill:"#E5E7E9"}),i.a.createElement("path",{fill:"#9BE1A4",d:"M49.312 112.638h42.195L70.41 27.757z"}),i.a.createElement("path",{stroke:"#231F20",strokeWidth:"2",d:"M49.312 112.638h42.195L70.41 27.757z"}),i.a.createElement("path",{d:"M78.223 94.737l-7.813 5.159M57.883 78.158l12.526 13.59",stroke:"#0E1D25",strokeWidth:"2"}),i.a.createElement("path",{d:"M191.11 22.787c0-11.456 9.287-20.743 20.743-20.743 11.457 0 20.744 9.287 20.744 20.743 0 1.845-.24 3.633-.693 5.335M196.81 26.797a15.506 15.506 0 0 0-10.886-4.442c-8.592 0-15.557 6.965-15.557 15.558s6.965 15.558 15.557 15.558h50.128",stroke:"#C0C6CB",strokeWidth:"2"}),i.a.createElement("path",{d:"M231.957 17.634a18.244 18.244 0 0 1 4.096-.465c10.024 0 18.15 8.128 18.15 18.152 0 10.023-8.126 18.15-18.15 18.15h-5.186",stroke:"#C0C6CB",strokeWidth:"2"}),i.a.createElement("path",{fill:"#9BE1A4",d:"M148.903 112.638h48.093L172.949 6.718z"}),i.a.createElement("path",{stroke:"#231F20",strokeWidth:"2",d:"M148.903 112.638h48.093L172.949 6.718z"}),i.a.createElement("path",{d:"M172.949 40.75v112.506M70 55v99M161.052 81.817l8.596 8.142M181.368 59.509l-8.42 11.507",stroke:"#0E1D25",strokeWidth:"2"}),i.a.createElement("path",{fill:"#FDBD99",d:"M69.629 126.292l-10.331 2.735 4.067 2.735z"}),i.a.createElement("path",{stroke:"#231F20",strokeWidth:"2",d:"M69.629 126.292l-10.331 2.735 4.067 2.735z"}),i.a.createElement("path",{fill:"#FDBD99",d:"M172.949 128.448l2.949 9.772 3.516-4.114z"}),i.a.createElement("path",{stroke:"#231F20",strokeWidth:"2",d:"M172.949 128.448l2.949 9.772 3.516-4.114z"}),i.a.createElement("path",{d:"M155.5 130.98a6.355 6.355 0 1 1-12.71 0 6.355 6.355 0 0 1 12.71 0",fill:"#C0C6CB"}),i.a.createElement("path",{d:"M155.5 130.98a6.355 6.355 0 1 1-12.71 0 6.355 6.355 0 0 1 12.71 0z",stroke:"#C0C6CB",strokeWidth:"2"}),i.a.createElement("path",{d:"M72.962 125.51s16.2 19.926 44.332 20.708c28.13.782 52.319-18.935 52.319-18.935s-41.38 8.006-51.538 7.22c-10.158-.787-45.113-8.992-45.113-8.992",fill:"#FDBD99"}),i.a.createElement("path",{d:"M72.962 125.51s16.2 19.926 44.332 20.708c28.13.782 52.319-18.935 52.319-18.935s-41.38 8.006-51.538 7.22c-10.158-.787-45.113-8.992-45.113-8.992z",stroke:"#231F20",strokeWidth:"2"})))}
ln.defaultProps={viewBox:"0 0 907 155",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"}
class un extends n["Component"]{renderDate(e,t){let a
a=B("{startDate} to {endDate}",{startDate:H(e),endDate:H(t)})
return i.a.createElement(D["a"],{as:"div",lineHeight:"condensed"},a)}render(){const e=u.a.tz(this.props.timeZone)
const t=u.a.tz(this.props.day,this.props.timeZone).startOf("day")
const a=u.a.tz(this.props.endday,this.props.timeZone).endOf("day")
const s=(e.isSame(t,"day")||e.isAfter(t,"day"))&&(e.isSame(a,"day")||e.isBefore(a,"day"))
const n=m()(dn.root,dn[this.props.responsiveSize],"planner-empty-days",{"planner-today":s})
return i.a.createElement("div",{className:n},i.a.createElement(T["a"],{border:"bottom"},this.renderDate(t,a)),i.a.createElement("div",{className:dn.nothingPlannedContent},i.a.createElement(ln,{role:"img","aria-hidden":"true"}),i.a.createElement("div",{className:dn.nothingPlannedContainer},i.a.createElement("div",{className:dn.nothingPlanned},i.a.createElement(D["a"],{size:"large"},B("Nothing Planned Yet"))))))}}un.propTypes={day:p["string"].isRequired,endday:p["string"].isRequired,timeZone:p["string"].isRequired,responsiveSize:A}
un.defualtProps={responsiveSize:"large"}
var _n=Object(w["themeable"])(on,dn)(un)
function mn(e){let t=e.colors,a=e.typography
return{fontSize:a.fontSizeMedium,fontFamily:a.fontFamily,fontWeight:a.fontWeightNormal,color:t.oxford,background:t.white}}const cn={componentId:"IWkON",template:function(e){return"\n\n.root_szj_{background:".concat(e.background||"inherit",";color:").concat(e.color||"inherit",";font-family:").concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit","}")},root:"root_szj_"}
class gn extends n["Component"]{constructor(e){super(e)
this.handleFocus=e=>{this.setState({visible:true},()=>{Object(r["findDOMNode"])(this.btnRef).focus()})}
this.handleBlur=e=>{this.setState({visible:false})}
this.state={visible:false}}renderButton(){const e=this.props,t=e.buttonProps,a=e.children
return i.a.createElement(oe["a"],Object.assign({variant:"link",buttonRef:e=>{this.btnRef=e
this.props.buttonRef(e)},onFocus:this.handleFocus,onBlur:this.handleBlur},t),a)}renderInvisibleButton(){const e=this.props.srProps
return i.a.createElement(ie["a"],e,this.renderButton())}render(){return this.state.visible?this.renderButton():this.renderInvisibleButton()}}gn.propTypes={buttonProps:p["object"],srProps:p["object"],children:p["node"].isRequired,buttonRef:p["func"]}
gn.defaultProps={buttonRef:()=>{}}
var pn=Object(w["themeable"])(mn,cn)(gn)
var fn=a("L+/K")
class hn extends n["Component"]{renderDetail(){return this.props.error?i.a.createElement("span",{style:{display:"none"}},this.props.error.message||this.props.error.toString()):null}render(){return i.a.createElement(fn["a"],{variant:"error",margin:"small"},this.props.children,this.renderDetail())}}hn.propTypes={error:f.a.oneOfType([f.a.string,f.a.instanceOf(Error)]),children:f.a.node.isRequired}
hn.defaultProps={error:null}
class bn extends n["Component"]{constructor(){super(...arguments)
this.handleLoadMoreButton=()=>{this.props.onLoadMore({loadMoreButtonClicked:true})}}renderLoadMore(){if(!this.props.loadingFuture&&!this.props.allFutureItemsLoaded)return i.a.createElement(oe["a"],{variant:"link",onClick:this.handleLoadMoreButton},B("Load more"))}renderError(){if(this.props.loadingError)return i.a.createElement("div",{style:{width:"50%",margin:"0 auto"}},i.a.createElement(hn,{error:this.props.loadingError},B("Error loading more items")))}renderLoading(){if(this.props.loadingFuture&&!this.props.allFutureItemsLoaded)return i.a.createElement(c["a"],null,i.a.createElement(g["a"],{size:"small",margin:"0 x-small 0 0",renderTitle:()=>B("Loading...")}),i.a.createElement(D["a"],{size:"small",color:"secondary"},B("Loading...")))}renderEverythingLoaded(){if(this.props.allFutureItemsLoaded)return i.a.createElement(D["a"],{color:"secondary",size:"small"},B("All items loaded"))}render(){return i.a.createElement("div",null,i.a.createElement(c["a"],{as:"div",padding:"x-large",textAlign:"center"},this.renderError(),this.renderLoadMore(),this.renderLoading(),this.renderEverythingLoaded()))}}bn.propTypes={loadingFuture:p["bool"],allFutureItemsLoaded:p["bool"],onLoadMore:p["func"],loadingError:p["string"],plannerActive:p["func"]}
bn.defaultProps={loadingFuture:false,allFutureItemsLoaded:false,onLoadMore:()=>{},loadingError:void 0,plannerActive:()=>false}
var yn=function(e){return i.a.createElement("svg",e,i.a.createElement("title",null,"Group"),i.a.createElement("defs",null,i.a.createElement("path",{d:"M22.825.626c-5.66.289-11.32.656-16.981 1.101-1.655.131-3.16 1.588-3.347 3.242a360.003 360.003 0 0 0-1.313 65.64h21.64V.626z",id:"a"}),i.a.createElement("path",{d:"M1.184 70.61A360.003 360.003 0 0 1 2.497 4.968c.187-1.654 1.692-3.111 3.347-3.242 5.66-.445 11.32-.812 16.98-1.101v69.983H1.185z",id:"c"}),i.a.createElement("path",{d:"M21.825 20.315c-5.66-.29-11.32-.657-16.981-1.102-1.655-.132-3.16-1.588-3.347-3.243A363.483 363.483 0 0 1 .13.843h21.695v19.472z",id:"e"}),i.a.createElement("path",{d:"M.13.843C.48 5.885.935 10.928 1.497 15.97c.187 1.655 1.692 3.111 3.347 3.243 5.66.445 11.32.812 16.981 1.102V.843H.13z",id:"g"}),i.a.createElement("path",{d:"M.322 1.704A618.04 618.04 0 0 1 22.923.908v71.083H.323V1.704z",id:"i"}),i.a.createElement("path",{d:"M22.923.908a618.04 618.04 0 0 0-22.6.796v70.287h22.6V.908z",id:"k"}),i.a.createElement("path",{d:"M22.923 20.032A617.82 617.82 0 0 1 .8 19.262V.609h22.122v19.423z",id:"m"}),i.a.createElement("path",{d:"M.8 19.262c7.375.389 14.749.646 22.123.77V.61H.8v18.653z",id:"o"}),i.a.createElement("path",{d:"M.427.917A616.582 616.582 0 0 1 22.529.92v71.117H.427V.917z",id:"q"}),i.a.createElement("path",{d:"M22.53.921A616.644 616.644 0 0 0 .426.917v71.12h22.102V.922z",id:"s"}),i.a.createElement("path",{d:"M22.367 20.022c-7.26.13-14.522.131-21.783.004V.99h21.784v19.033z",id:"u"}),i.a.createElement("path",{d:"M.585 20.026c7.26.127 14.521.126 21.783-.004V.989H.584v19.037z",id:"w"}),i.a.createElement("path",{d:"M.764.908a618.06 618.06 0 0 1 22.6.796v70.287H.765V.908z",id:"y"}),i.a.createElement("path",{d:"M23.365 1.704A618.078 618.078 0 0 0 .764.908v71.083h22.6V1.704z",id:"A"}),i.a.createElement("path",{d:"M22.885 19.262c-7.374.389-14.748.646-22.122.77V.61h22.122v18.653z",id:"C"}),i.a.createElement("path",{d:"M.763 20.032a617.846 617.846 0 0 0 22.122-.77V.609H.763v19.423z",id:"E"}),i.a.createElement("path",{d:"M.862.626c5.66.289 11.321.656 16.982 1.101 1.654.131 3.16 1.588 3.346 3.242a360.003 360.003 0 0 1 1.313 65.64H.862V.627z",id:"G"}),i.a.createElement("path",{d:"M22.503 70.61A360.003 360.003 0 0 0 21.19 4.969c-.186-1.654-1.692-3.111-3.346-3.242A621.172 621.172 0 0 0 .862.626V70.61h21.64z",id:"I"}),i.a.createElement("path",{d:"M22.557.843A363.483 363.483 0 0 1 21.19 15.97c-.186 1.655-1.692 3.111-3.346 3.243A620.62 620.62 0 0 1 .862 20.315V.843h21.695z",id:"K"}),i.a.createElement("path",{d:"M.862 20.315a620.62 620.62 0 0 0 16.982-1.102c1.654-.132 3.16-1.588 3.346-3.243A363.483 363.483 0 0 0 22.557.843H.862v19.472z",id:"M"})),i.a.createElement("g",{fill:"none",fillRule:"evenodd"},i.a.createElement("path",{d:"M45.69 4.085l99.153 26.003",stroke:"#798792",strokeWidth:"2",strokeLinecap:"round"}),i.a.createElement("path",{d:"M44.842 8.137a4.136 4.136 0 1 1 2.099-8 4.136 4.136 0 0 1-2.1 8z",fill:"#798792"}),i.a.createElement("path",{d:"M158.684 41.088c0 13.276-10.763 24.039-24.04 24.039-13.275 0-24.038-10.763-24.038-24.04 0-13.275 10.763-24.038 24.039-24.038 13.276 0 24.039 10.763 24.039 24.039",fill:"#C0C6CB"}),i.a.createElement("path",{d:"M158.684 41.088c0 13.276-10.763 24.039-24.04 24.039-13.275 0-24.038-10.763-24.038-24.04 0-13.275 10.763-24.038 24.039-24.038 13.276 0 24.039 10.763 24.039 24.039z",stroke:"#798792",strokeWidth:"2"}),i.a.createElement("path",{fill:"#C0C6CB",d:"M14.448 155.088h144.396v-21H14.448z"}),i.a.createElement("path",{stroke:"#798792",strokeWidth:"2",d:"M14.448 155.088h144.396v-21H14.448z"}),i.a.createElement("path",{d:"M164.844 143.351a1209.137 1209.137 0 0 1-155 0c-2.206-.144-4.266-2.057-4.571-4.264-4.672-34-4.672-68 0-102 .305-2.207 2.365-4.119 4.57-4.263a1208.773 1208.773 0 0 1 155 0c2.206.143 4.266 2.056 4.572 4.263 4.672 34 4.672 68 0 102-.306 2.207-2.365 4.12-4.571 4.264",fill:"#F4F5F6"}),i.a.createElement("path",{d:"M164.844 143.351a1209.137 1209.137 0 0 1-155 0c-2.206-.144-4.266-2.057-4.571-4.264-4.672-34-4.672-68 0-102 .305-2.207 2.365-4.119 4.57-4.263a1208.773 1208.773 0 0 1 155 0c2.206.143 4.266 2.056 4.572 4.263 4.672 34 4.672 68 0 102-.306 2.207-2.365 4.12-4.571 4.264z",stroke:"#778690",strokeWidth:"2"}),i.a.createElement("path",{d:"M116.844 132.41a627.204 627.204 0 0 1-97 0c-2.205-.174-4.213-2.116-4.456-4.322a369.79 369.79 0 0 1 0-80c.243-2.206 2.25-4.149 4.456-4.323a627.453 627.453 0 0 1 97 0c2.205.174 4.212 2.118 4.455 4.323a369.79 369.79 0 0 1 0 80c-.243 2.206-2.25 4.148-4.455 4.322",fill:"#F4F5F6"}),i.a.createElement("path",{d:"M116.844 132.41a627.204 627.204 0 0 1-97 0c-2.205-.174-4.213-2.116-4.456-4.322a369.79 369.79 0 0 1 0-80c.243-2.206 2.25-4.149 4.456-4.323a627.453 627.453 0 0 1 97 0c2.205.174 4.212 2.118 4.455 4.323a369.79 369.79 0 0 1 0 80c-.243 2.206-2.25 4.148-4.455 4.322z",stroke:"#778690",strokeWidth:"2"}),i.a.createElement("path",{d:"M162.844 63.588c0 8.008-6.492 14.5-14.5 14.5-8.01 0-14.5-6.492-14.5-14.5s6.49-14.5 14.5-14.5c8.008 0 14.5 6.492 14.5 14.5",fill:"#75848F"}),i.a.createElement("path",{d:"M162.844 63.588c0 8.008-6.492 14.5-14.5 14.5-8.01 0-14.5-6.492-14.5-14.5s6.49-14.5 14.5-14.5c8.008 0 14.5 6.492 14.5 14.5z",stroke:"#3F5463",strokeWidth:"2"}),i.a.createElement("path",{d:"M151.844 88.588a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0",fill:"#75848F"}),i.a.createElement("path",{d:"M151.844 88.588a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z",stroke:"#3F5463",strokeWidth:"2"}),i.a.createElement("path",{d:"M140.844 88.588a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0",fill:"#75848F"}),i.a.createElement("path",{d:"M140.844 88.588a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z",stroke:"#3F5463",strokeWidth:"2"}),i.a.createElement("path",{d:"M162.844 88.588a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0",fill:"#75848F"}),i.a.createElement("path",{d:"M162.844 88.588a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm-26.693-18.833l18.842-18.103m-13.299 23.871l18.841-18.103",stroke:"#3F5463",strokeWidth:"2"}),i.a.createElement("path",{d:"M133.844 100.328h29m-29 5h29m-29 5h29m-29 5h29",stroke:"#3F5463",strokeWidth:"2",strokeLinecap:"round"}),i.a.createElement("g",{transform:"translate(14 43.118)"},i.a.createElement("mask",{id:"b",fill:"#fff"},i.a.createElement("use",{xlinkHref:"#a"})),i.a.createElement("path",{d:"M21.8 70.61a1227.73 1227.73 0 0 1-21.782-.768A388.062 388.062 0 0 1 1.728.888 657.433 657.433 0 0 1 22.826-.47 687.486 687.486 0 0 0 21.8 70.61",fill:"#95D4F5",mask:"url(#b)"})),i.a.createElement("g",{transform:"translate(14 43.118)"},i.a.createElement("mask",{id:"d",fill:"#fff"},i.a.createElement("use",{xlinkHref:"#c"})),i.a.createElement("path",{d:"M21.8 70.61a1227.73 1227.73 0 0 1-21.782-.768A388.062 388.062 0 0 1 1.728.888 657.433 657.433 0 0 1 22.826-.47 687.486 687.486 0 0 0 21.8 70.61z",stroke:"#6D7A82",strokeWidth:"2",strokeLinecap:"round",mask:"url(#d)"})),i.a.createElement("g",{transform:"translate(15 112.118)"},i.a.createElement("mask",{id:"f",fill:"#fff"},i.a.createElement("use",{xlinkHref:"#e"})),i.a.createElement("path",{d:"M21.825 21.41A660.962 660.962 0 0 1 .728 20.051 390.33 390.33 0 0 1-.982.843c7.26.32 14.522.575 21.783.766.246 6.6.587 13.2 1.024 19.8",fill:"#E8ACDD",mask:"url(#f)"})),i.a.createElement("g",{transform:"translate(15 112.118)"},i.a.createElement("mask",{id:"h",fill:"#fff"},i.a.createElement("use",{xlinkHref:"#g"})),i.a.createElement("path",{d:"M21.825 21.41A660.962 660.962 0 0 1 .728 20.051 390.33 390.33 0 0 1-.982.843c7.26.32 14.522.575 21.783.766.246 6.6.587 13.2 1.024 19.8z",stroke:"#6D7A82",strokeWidth:"2",strokeLinecap:"round",mask:"url(#h)"})),i.a.createElement("g",{transform:"translate(35 42.118)"},i.a.createElement("mask",{id:"j",fill:"#fff"},i.a.createElement("use",{xlinkHref:"#i"})),i.a.createElement("path",{d:"M22.585 71.991c-7.262-.063-14.522-.19-21.784-.382A687.486 687.486 0 0 1 1.825.53C8.856.19 15.89-.035 22.923-.148a2139.173 2139.173 0 0 0-.338 72.14",fill:"#94E09E",mask:"url(#j)"})),i.a.createElement("g",{transform:"translate(35 42.118)"},i.a.createElement("mask",{id:"l",fill:"#fff"},i.a.createElement("use",{xlinkHref:"#k"})),i.a.createElement("path",{d:"M22.585 71.991c-7.262-.063-14.522-.19-21.784-.382A687.486 687.486 0 0 1 1.825.53C8.856.19 15.89-.035 22.923-.148a2139.173 2139.173 0 0 0-.338 72.14z",stroke:"#6D7A82",strokeWidth:"2",strokeLinecap:"round",mask:"url(#l)"})),i.a.createElement("g",{transform:"translate(35 113.118)"},i.a.createElement("mask",{id:"n",fill:"#fff"},i.a.createElement("use",{xlinkHref:"#m"})),i.a.createElement("path",{d:"M22.923 21.087a651.911 651.911 0 0 1-21.098-.678c-.436-6.6-.778-13.2-1.024-19.8C8.063.8 15.323.928 22.585.99c.08 6.699.194 13.398.338 20.096",fill:"#FEC19B",mask:"url(#n)"})),i.a.createElement("g",{transform:"translate(35 113.118)"},i.a.createElement("mask",{id:"p",fill:"#fff"},i.a.createElement("use",{xlinkHref:"#o"})),i.a.createElement("path",{d:"M22.923 21.087a651.911 651.911 0 0 1-21.098-.678c-.436-6.6-.778-13.2-1.024-19.8C8.063.8 15.323.928 22.585.99c.08 6.699.194 13.398.338 20.096z",stroke:"#6D7A82",strokeWidth:"2",strokeLinecap:"round",mask:"url(#p)"})),i.a.createElement("g",{transform:"translate(57 42.118)"},i.a.createElement("mask",{id:"r",fill:"#fff"},i.a.createElement("use",{xlinkHref:"#q"})),i.a.createElement("path",{d:"M22.367 71.99c-7.26.063-14.52.064-21.782.001C.292 47.945.405 23.9.923-.148c7.032-.112 14.064-.11 21.097.005.531 24.044.646 48.088.347 72.132",fill:"#F9979A",mask:"url(#r)"})),i.a.createElement("g",{transform:"translate(57 42.118)"},i.a.createElement("mask",{id:"t",fill:"#fff"},i.a.createElement("use",{xlinkHref:"#s"})),i.a.createElement("path",{d:"M22.367 71.99c-7.26.063-14.52.064-21.782.001C.292 47.945.405 23.9.923-.148c7.032-.112 14.064-.11 21.097.005.531 24.044.646 48.088.347 72.132z",stroke:"#6D7A82",strokeWidth:"2",strokeLinecap:"round",mask:"url(#t)"})),i.a.createElement("g",{transform:"translate(57 113.118)"},i.a.createElement("mask",{id:"v",fill:"#fff"},i.a.createElement("use",{xlinkHref:"#u"})),i.a.createElement("path",{d:"M22.02 21.083a656.57 656.57 0 0 1-21.098.004A2244.57 2244.57 0 0 1 .584.991c7.261.064 14.523.063 21.784-.002-.084 6.698-.2 13.396-.348 20.094",fill:"#95D4F5",mask:"url(#v)"})),i.a.createElement("g",{transform:"translate(57 113.118)"},i.a.createElement("mask",{id:"x",fill:"#fff"},i.a.createElement("use",{xlinkHref:"#w"})),i.a.createElement("path",{d:"M22.02 21.083a656.57 656.57 0 0 1-21.098.004A2244.57 2244.57 0 0 1 .584.991c7.261.064 14.523.063 21.784-.002-.084 6.698-.2 13.396-.348 20.094z",stroke:"#6D7A82",strokeWidth:"2",strokeLinecap:"round",mask:"url(#x)"})),i.a.createElement("g",{transform:"translate(78 42.118)"},i.a.createElement("mask",{id:"z",fill:"#fff"},i.a.createElement("use",{xlinkHref:"#y"})),i.a.createElement("path",{d:"M22.886 71.61c-7.261.19-14.521.317-21.783.381.292-24.046.179-48.092-.34-72.139 7.034.112 14.067.338 21.1.678a687.766 687.766 0 0 1 1.023 71.08",fill:"#FEC19B",mask:"url(#z)"})),i.a.createElement("g",{transform:"translate(78 42.118)"},i.a.createElement("mask",{id:"B",fill:"#fff"},i.a.createElement("use",{xlinkHref:"#A"})),i.a.createElement("path",{d:"M22.886 71.61c-7.261.19-14.521.317-21.783.381.292-24.046.179-48.092-.34-72.139 7.034.112 14.067.338 21.1.678a687.766 687.766 0 0 1 1.023 71.08z",stroke:"#6D7A82",strokeWidth:"2",strokeLinecap:"round",mask:"url(#B)"})),i.a.createElement("g",{transform:"translate(78 113.118)"},i.a.createElement("mask",{id:"D",fill:"#fff"},i.a.createElement("use",{xlinkHref:"#C"})),i.a.createElement("path",{d:"M21.862 20.41c-7.032.34-14.065.564-21.099.677.145-6.699.258-13.398.34-20.096C8.363.928 15.624.801 22.884.61c-.245 6.6-.586 13.2-1.023 19.8",fill:"#F9979A",mask:"url(#D)"})),i.a.createElement("g",{transform:"translate(78 113.118)"},i.a.createElement("mask",{id:"F",fill:"#fff"},i.a.createElement("use",{xlinkHref:"#E"})),i.a.createElement("path",{d:"M21.862 20.41c-7.032.34-14.065.564-21.099.677.145-6.699.258-13.398.34-20.096C8.363.928 15.624.801 22.884.61c-.245 6.6-.586 13.2-1.023 19.8z",stroke:"#6D7A82",strokeWidth:"2",strokeLinecap:"round",mask:"url(#F)"})),i.a.createElement("g",{transform:"translate(99 43.118)"},i.a.createElement("mask",{id:"H",fill:"#fff"},i.a.createElement("use",{xlinkHref:"#G"})),i.a.createElement("path",{d:"M23.67 69.843c-7.261.319-14.522.575-21.784.767A686.946 686.946 0 0 0 .862-.47C7.895-.131 14.926.322 21.959.889a388.06 388.06 0 0 1 1.71 68.954",fill:"#E8ACDD",mask:"url(#H)"})),i.a.createElement("g",{transform:"translate(99 43.118)"},i.a.createElement("mask",{id:"J",fill:"#fff"},i.a.createElement("use",{xlinkHref:"#I"})),i.a.createElement("path",{d:"M23.67 69.843c-7.261.319-14.522.575-21.784.767A686.946 686.946 0 0 0 .862-.47C7.895-.131 14.926.322 21.959.889a388.06 388.06 0 0 1 1.71 68.954z",stroke:"#6D7A82",strokeWidth:"2",strokeLinecap:"round",mask:"url(#J)"})),i.a.createElement("g",{transform:"translate(99 112.118)"},i.a.createElement("mask",{id:"L",fill:"#fff"},i.a.createElement("use",{xlinkHref:"#K"})),i.a.createElement("path",{d:"M21.959 20.052A657.303 657.303 0 0 1 .862 21.409c.437-6.6.779-13.2 1.024-19.8A1247.86 1247.86 0 0 0 23.67.844a391.449 391.449 0 0 1-1.711 19.209",fill:"#94E09E",mask:"url(#L)"})),i.a.createElement("g",{transform:"translate(99 112.118)"},i.a.createElement("mask",{id:"N",fill:"#fff"},i.a.createElement("use",{xlinkHref:"#M"})),i.a.createElement("path",{d:"M21.959 20.052A657.303 657.303 0 0 1 .862 21.409c.437-6.6.779-13.2 1.024-19.8A1247.86 1247.86 0 0 0 23.67.844a391.449 391.449 0 0 1-1.711 19.209z",stroke:"#6D7A82",strokeWidth:"2",strokeLinecap:"round",mask:"url(#N)"}))))}
yn.defaultProps={width:"174",height:"157",viewBox:"0 0 174 157",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"}
class vn extends n["Component"]{renderError(){if(this.props.loadingError)return i.a.createElement("div",{style:{width:"50%",margin:"0 auto"}},i.a.createElement(hn,{error:this.props.loadingError},B("Error loading past items")))}renderNoMore(){if(this.props.allPastItemsLoaded)return i.a.createElement(c["a"],{as:"div",padding:"small",textAlign:"center"},i.a.createElement(c["a"],{display:"block",margin:"small"},i.a.createElement(yn,{role:"img","aria-hidden":"true"})),i.a.createElement(D["a"],{size:"large",as:"div"},B("Beginning of Your To-Do History")),i.a.createElement(D["a"],{size:"medium",as:"div"},B("You've scrolled back to your very first To-Do!")))}renderLoading(){if(this.props.loadingPast&&!this.props.allPastItemsLoaded)return i.a.createElement(c["a"],{as:"div",padding:"medium small small small",textAlign:"center"},i.a.createElement(g["a"],{size:"small",margin:"0 x-small 0 0",renderTitle:()=>B("Loading past items")}),i.a.createElement(D["a"],{size:"small",color:"secondary"},B("Loading past items")))}render(){return i.a.createElement("div",{ref:e=>{this.rootDiv=e}},this.renderError(),this.renderNoMore(),this.renderLoading())}}vn.propTypes={loadingPast:f.a.bool,allPastItemsLoaded:f.a.bool,loadingError:f.a.string}
vn.defaultProps={loadingPast:false,allPastItemsLoaded:false,loadingError:void 0}
var En=a("RBOd")
function An(e){let t=e.colors,a=e.typography,s=e.spacing
return{fontSize:a.fontSizeMedium,fontFamily:a.fontFamily,fontWeight:a.fontWeightNormal,color:t.oxford,background:t.whiterails,lightWeight:a.fontWeightLight,smallSpacing:s.small,largeSpacing:s.large,xxLargeSpacing:s.xxLarge}}var Cn=function(e){return i.a.createElement("svg",e,i.a.createElement("g",{transform:"translate(0 1)",fill:"none",fillRule:"evenodd"},i.a.createElement("path",{d:"M169.49 68.72c1.255-7.153-3.504-13.976-10.65-15.27v-1a10.5 10.5 0 0 0-20.08-4.29 19.505 19.505 0 0 0-27.14 7.47 13.253 13.253 0 0 0-11.487 2.34A13.257 13.257 0 0 0 95 68.51v.21h74.49zm76.65 10c-1.012-5.78 2.836-11.29 8.61-12.33v-.78a8.48 8.48 0 0 1 16.22-3.47 15.76 15.76 0 0 1 21.93 6c3.22-.867 6.66-.182 9.304 1.852a10.696 10.696 0 0 1 4.176 8.518v.17l-60.24.04z",fill:"#E6E9EB",fillRule:"nonzero"}),i.a.createElement("path",{d:"M285 153.84l5-11.77c.098-.23.15-.48.15-.73v-37.51c0-.523.217-1.024.6-1.38l10-9.39h-11.56c-.767 0-1.507.28-2.08.79l-4.32 3.84a3.13 3.13 0 0 0-1 2.34v39.85a3.764 3.764 0 0 1-1.45 3l-4.8 3.74-7 13.94-12.54 7.81-7 1.13a3.772 3.772 0 0 0-2.84 2.19l-3.34 7.56h56.86l-16.36-11.59a3.76 3.76 0 0 1-1.41-4.21l3.09-9.61z",fill:"#FEBD96",fillRule:"nonzero"}),i.a.createElement("path",{d:"M348.51 106.4l1.32-6.2c.127-.6.537-1.1 1.1-1.34l13.57-5.8h-19.16a3.12 3.12 0 0 0-3.12 3.12v12.42l5.32-.92c.498-.26.854-.73.97-1.28z",fill:"#FEC3A0",fillRule:"nonzero"}),i.a.createElement("path",{d:"M76.71 179.25v-.47l-6.88-11.92c-.12-.212-.28-.4-.47-.55l-3.68-2.86a1.888 1.888 0 0 1-.44-.49l-1.89-3c-.19-.3-.29-.646-.29-1v-54.7c0-.802.255-1.584.73-2.23l9.62-13.12H61.07A3.767 3.767 0 0 0 58.41 90l-3.82 3.82a3.768 3.768 0 0 0-1.1 2.66v67.2a1.88 1.88 0 0 1-1 1.65L27 179.25h49.71z",fill:"#FEBD96",fillRule:"nonzero"}),i.a.createElement("path",{d:"M138.39 103.42l-1.77 3.58a3.74 3.74 0 0 0-.4 1.68V156h3.09a1.88 1.88 0 0 0 1.88-1.88v-42.39c0-.465.17-.914.48-1.26l7.57-8.43a3.747 3.747 0 0 0-2.17-.7h-5.31a3.76 3.76 0 0 0-3.37 2.08z",fill:"#FEC3A0",fillRule:"nonzero"}),i.a.createElement("path",{d:"M242.82 179.25l3.34-7.56a3.772 3.772 0 0 1 2.84-2.19l7-1.13 12.51-7.84 7-13.94 4.8-3.74a3.767 3.767 0 0 0 1.45-3V100a3.123 3.123 0 0 1 1-2.34l4.32-3.84a3.127 3.127 0 0 1 2.08-.79h41.37a3.121 3.121 0 0 1 2.8 1.73l2.28 4.56c.218.435.33.914.33 1.4v7.85a3.118 3.118 0 0 0 4.64 2.73 3.121 3.121 0 0 0 1.61-2.73V96.19a3.12 3.12 0 0 1 3.12-3.12h24.37c.63 0 1.22.314 1.57.84l3.3 4.94c.2.296.31.643.32 1v54.88a1.881 1.881 0 0 0 1.51 1.85l4.88 1a1.88 1.88 0 0 1 1 .51l5.58 5.58c.18.18.394.324.63.42l14.24 5.72 27.8 9.43M0 179.25h464.98m-437.98 0l25.52-13.92a1.88 1.88 0 0 0 1-1.65v-67.2c0-.997.396-1.954 1.1-2.66L58.41 90a3.768 3.768 0 0 1 2.66-1.1h44.5c1.323 0 2.55.695 3.23 1.83l5.6 9.33c.353.586.54 1.256.54 1.94v36.83a1.88 1.88 0 0 0 1.88 1.88H122a3.771 3.771 0 0 1 3.5 2.38l4.61 11.69c.283.718.978 1.19 1.75 1.19h4.34v-47.3a3.773 3.773 0 0 1 .4-1.68l1.77-3.55a3.771 3.771 0 0 1 3.37-2.08h5.31a3.77 3.77 0 0 1 3.61 2.68l1.45 4.82c.105.35.16.714.16 1.08v33.51a3.769 3.769 0 0 0 1.77 3.19l4.66 2.91 11.65 5.45c.266.124.5.31.68.54l8.19 10.42c.24.305.568.53.94.64l14.29 4.25 4.42 8.43",stroke:"#3F5463",strokeWidth:"2"}),i.a.createElement("path",{stroke:"#3F5463",strokeWidth:"2",strokeLinecap:"round",d:"M316.37 213.87l-2.03-4.93-4.58-11.08 1.17-14.96 7.43-10.57 6.11-5.98m-6.11 5.98l5.67-.94m-8.94 5.58l-2.1-4"}),i.a.createElement("path",{stroke:"#3F5463",strokeWidth:"2",strokeLinecap:"round",d:"M310.33 190.56l4.76-8.12 4.06-2.24m-8.6 7.56l-3.57-5.87m6.9 2.61l4.51.31m-4.56 22.91l3.83-14.91 7.92-10.75 8.79-5.6 6.86-2.64 2.94-5.32m-33.24 32.19l-4.78-.82m8.19 9.07l10.42 2.9 10.34 4.03 9.79-3.98 8.2-4.07"}),i.a.createElement("path",{stroke:"#3F5463",strokeWidth:"2",strokeLinecap:"round",d:"M336.54 175.63l-.36-3.94 3.84-4.96M327 181.15l-.03-4.74 2.58-4.88 1.88-3.35m-14.55 27.66l-3.23-3.3m1.78 8.97l4.38-4.28 6.98-3.84 7.06-6.92m-13.41 2.57l5.32-.07 2.86-2.8m3.65-8.37l5.35 1.99 4.14-1.05m-27.1 25.76l9.58.27 11.28 1.84 11.81-4.68 5.9-7.09 4.94-5.26"}),i.a.createElement("path",{stroke:"#3F5463",strokeWidth:"2",strokeLinecap:"round",d:"M323.3 195.31l3.56 1.38 6.81.26 4.13-6.44 2.79-6.23 6.46-4.14 2.02-4.16"}),i.a.createElement("path",{stroke:"#3F5463",strokeWidth:"2",strokeLinecap:"round",d:"M329.48 190.75l2.04-4.98 2.3-4.38m-11.07 29.89l5.44-2.47 3.19 1.85m12.01 1.84l1.59-3.99 5.71-3.15 2.75-3.91 3.35-2.07m-29.49 13.45l1.32 4.45m-7.71-12.6l3.16-3.1 7.54 1.03 5.84-1.8 3.85-1.68 4-6 3.5-8.54 3.63-2.35 3.37.62m-18 7.65l2.81-.35 3.66-3.58"}),i.a.createElement("path",{stroke:"#3F5463",strokeWidth:"2",strokeLinecap:"round",d:"M337.45 200.81l.85-4.74 3.36-3.3m4.22-1.06l3.66-.65 2.86-2.8 2.76.17m-19.64 18.18l3.97 2.99m5.86-6.88l1.1-3.37 2.34-4.68m4.44.17l4.83.56"}),i.a.createElement("path",{d:"M238.52 91.16c-5.346 0-9.68 4.334-9.68 9.68v17.35c0 5.42-7 10.75-14.19 13.61v-90c0-5.346-4.334-9.68-9.68-9.68s-9.68 4.334-9.68 9.68V111c-7.22-2.86-14.2-8.19-14.2-13.62V69.6c0-5.346-4.334-9.68-9.68-9.68s-9.68 4.334-9.68 9.68v27.77c0 10.1 5.81 19.49 16.35 26.45a55.48 55.48 0 0 0 17.2 7.43v58.67h19.2l.15-37.85a55.456 55.456 0 0 0 17.2-7.43c10.55-7 16.35-16.35 16.35-26.44v-17.36c0-5.338-4.322-9.67-9.66-9.68z",fill:"#FFF",fillRule:"nonzero"}),i.a.createElement("path",{d:"M195.29 189.92v-58.67a55.48 55.48 0 0 1-17.2-7.43c-10.55-7-16.35-16.35-16.35-26.45V69.6c0-5.346 4.334-9.68 9.68-9.68-4.89 0-4.57 10.06-4.57 10.06v27.75c0 9.75 11.57 23.13 28.45 27.4V41.84a9.682 9.682 0 0 1 9.7-9.68c-5.18 0-4.64 8.75-4.64 8.75v149l-5.07.01z",fill:"#99E1A2",fillRule:"nonzero"}),i.a.createElement("path",{d:"M238.52 91.16c-5.346 0-9.68 4.334-9.68 9.68v17.35c0 5.42-7 10.75-14.19 13.61v-90c0-5.346-4.334-9.68-9.68-9.68s-9.68 4.334-9.68 9.68V111c-7.22-2.86-14.2-8.19-14.2-13.62V69.6c0-5.346-4.334-9.68-9.68-9.68s-9.68 4.334-9.68 9.68v27.77c0 10.1 5.81 19.49 16.35 26.45a55.48 55.48 0 0 0 17.2 7.43v58.67h19.2l.15-37.85a55.456 55.456 0 0 0 17.2-7.43c10.55-7 16.35-16.35 16.35-26.44v-17.36c0-5.338-4.322-9.67-9.66-9.68z",stroke:"#3F5463",strokeWidth:"2"}),i.a.createElement("path",{d:"M410.38 128.64a5.64 5.64 0 0 1 5.64 5.64v10.11c0 3.16 4.06 6.26 8.27 7.93v-52.4a5.64 5.64 0 0 1 11.27 0v40.27c4.21-1.67 8.27-4.77 8.27-7.93v-16.17a5.64 5.64 0 1 1 11.27 0v16.17c0 5.88-3.38 11.35-9.52 15.4a32.298 32.298 0 0 1-10 4.33v30.88h-11.3v-18.76a32.287 32.287 0 0 1-10-4.33c-6.14-4.05-9.52-9.52-9.52-15.4v-10.1a5.64 5.64 0 0 1 5.62-5.64z",fill:"#FFF",fillRule:"nonzero"}),i.a.createElement("path",{d:"M424.28 182.87v-18.76a32.298 32.298 0 0 1-10-4.33c-6.14-4.05-9.52-8.47-9.52-14.35v-10.52a5.64 5.64 0 0 1 5.64-5.64c-2.85 0-2.66 5.86-2.66 5.86v10.51c0 5.68 6.74 12.42 16.57 14.9V99.92a5.64 5.64 0 0 1 5.64-5.64c-3 0-2.7 5.1-2.7 5.1v83.16l-2.97.33z",fill:"#99E1A2",fillRule:"nonzero"}),i.a.createElement("path",{d:"M410.38 128.64a5.64 5.64 0 0 1 5.64 5.64v10.11c0 3.16 4.06 6.26 8.27 7.93v-52.4a5.64 5.64 0 0 1 11.27 0v40.27c4.21-1.67 8.27-4.77 8.27-7.93v-16.17a5.64 5.64 0 1 1 11.27 0v16.17c0 5.88-3.38 11.35-9.52 15.4a32.298 32.298 0 0 1-10 4.33v30.88h-11.3v-18.76a32.287 32.287 0 0 1-10-4.33c-6.14-4.05-9.52-9.52-9.52-15.4v-10.1a5.64 5.64 0 0 1 5.62-5.64z",stroke:"#3F5463",strokeWidth:"2"}),i.a.createElement("circle",{stroke:"#CED3D7",strokeWidth:"2",cx:"360.58",cy:"18.96",r:"11.35"}),i.a.createElement("path",{d:"M360.58 30.31v7.6m0-37.91v7.6m6.51 20.66l4.36 6.23M349.71 3.43l4.36 6.23m17.18 13.18l7.14 2.6m-35.62-12.97l7.14 2.6m21.64.95l7.34-1.97m-36.62 9.81l7.34-1.96m18.27-11.64l4.89-5.82M348.4 33.48l4.88-5.83",stroke:"#CED3D7",strokeWidth:"2",strokeLinecap:"round"}),i.a.createElement("path",{d:"M431.69 53.54A8.71 8.71 0 0 0 419 46.93a13.85 13.85 0 0 0-24.63 2 15.39 15.39 0 0 0-18.49 20.42H447a24.004 24.004 0 0 0-15.31-15.81z",fill:"#E6E9EB",fillRule:"nonzero"})))}
Cn.defaultProps={className:"desert",width:"465",height:"220",viewBox:"0 0 465 220",xmlns:"http://www.w3.org/2000/svg"}
var kn=function(e){return i.a.createElement("svg",e,i.a.createElement("g",{fill:"none",fillRule:"evenodd"},i.a.createElement("path",{d:"M180.7 41.62c2.135 27.732-24.138 59.646-34.342 60.441-8.929.697-41.054-26.74-43.188-54.473-2.136-27.733 14.047-44.309 35.456-45.956 21.41-1.65 39.938 12.255 42.073 39.988",fill:"#E24270"}),i.a.createElement("path",{d:"M180.7 41.62c2.135 27.732-24.138 59.646-34.342 60.441-8.929.697-41.054-26.74-43.188-54.473-2.136-27.733 14.047-44.309 35.456-45.956 21.41-1.65 39.938 12.255 42.073 39.988z",stroke:"#BB0049",strokeWidth:"3"}),i.a.createElement("path",{d:"M146.63 105.591s-4.77 27.213 18.103 85.754c23.706 60.672.983 94.078.983 94.078",stroke:"#808285",strokeWidth:"2"}),i.a.createElement("path",{d:"M145.778 102.55l-3.785 5.522c-.648.947.518 2.076 1.442 1.398l3.196-2.343 4.427 2.3c.843.437 1.654-.634 1.004-1.326l-5.29-5.627a.64.64 0 0 0-.994.076",fill:"#E24270"}),i.a.createElement("path",{d:"M145.778 102.55l-3.785 5.522c-.648.947.518 2.076 1.442 1.398l3.196-2.343 4.427 2.3c.843.437 1.654-.634 1.004-1.326l-5.29-5.627a.64.64 0 0 0-.994.076z",stroke:"#BB0049",strokeWidth:"3"}),i.a.createElement("path",{d:"M241.23 92.875c-4.167 22.36-30.434 42.254-38.226 40.812-6.817-1.263-25.125-29.482-20.957-51.842 4.167-22.36 19.706-32.179 36.049-29.133 16.343 3.046 27.302 17.803 23.134 40.163",fill:"#F7941D"}),i.a.createElement("path",{d:"M241.23 92.875c-4.167 22.36-30.434 42.254-38.226 40.812-6.817-1.263-25.125-29.482-20.957-51.842 4.167-22.36 19.706-32.179 36.049-29.133 16.343 3.046 27.302 17.803 23.134 40.163z",stroke:"#F15A29",strokeWidth:"3"}),i.a.createElement("path",{d:"M203.032 136.123s12.741 9.219-2.05 48.258c-46.37 122.379 29.76 109.992-5.868 122.9",stroke:"#808285",strokeWidth:"2"}),i.a.createElement("path",{d:"M204.083 133.415l-3.376 4.166c-.578.713.226 1.731.993 1.26l2.655-1.63 3.216 2.25c.613.428 1.326-.375.884-.993l-3.6-5.03a.479.479 0 0 0-.772-.023",fill:"#F7941D"}),i.a.createElement("path",{d:"M204.083 133.415l-3.376 4.166c-.578.713.226 1.731.993 1.26l2.655-1.63 3.216 2.25c.613.428 1.326-.375.884-.993l-3.6-5.03a.479.479 0 0 0-.772-.023z",stroke:"#F15A29",strokeWidth:"2"}),i.a.createElement("path",{fill:"#E24270",d:"M8.281 134.769l-8.28-4.087 4.086-8.281 8.28 4.087zM344.76 214.841l-8.28-4.087 4.086-8.28 8.28 4.086z"}),i.a.createElement("path",{fill:"#2BB673",d:"M221.812 203.149l-5.114-7.688 7.689-5.116 5.114 7.69zM42.081 243.527l-5.114-7.688 7.688-5.115 5.114 7.689z"}),i.a.createElement("path",{fill:"#C739AE",d:"M260.816 127.785l-8.281-4.087 4.086-8.281 8.28 4.087z"}),i.a.createElement("path",{d:"M64.753 142.608c4.167 22.36 30.434 42.255 38.226 40.812 6.817-1.263 25.124-29.482 20.957-51.842-4.168-22.361-19.706-32.178-36.049-29.132-16.343 3.046-27.302 17.802-23.134 40.162",fill:"#27AAE1"}),i.a.createElement("path",{d:"M64.753 142.608c4.167 22.36 30.434 42.255 38.226 40.812 6.817-1.263 25.124-29.482 20.957-51.842-4.168-22.361-19.706-32.178-36.049-29.132-16.343 3.046-27.302 17.802-23.134 40.162z",stroke:"#1B75BC",strokeWidth:"3"}),i.a.createElement("path",{d:"M102.95 185.856s-13.489 8.516.58 41.458c23.453 54.92-12.227 43.03 2.112 105.564",stroke:"#808285",strokeWidth:"2"}),i.a.createElement("path",{d:"M101.9 183.148l3.375 4.166c.578.713-.225 1.73-.993 1.26l-2.655-1.631-3.215 2.25c-.613.429-1.326-.373-.884-.992l3.6-5.03a.48.48 0 0 1 .772-.023",fill:"#27AAE1"}),i.a.createElement("path",{d:"M101.9 183.148l3.375 4.166c.578.713-.225 1.73-.993 1.26l-2.655-1.631-3.215 2.25c-.613.429-1.326-.373-.884-.992l3.6-5.03a.48.48 0 0 1 .772-.023z",stroke:"#1B75BC",strokeWidth:"2"})))}
kn.defaultProps={className:"balloons",width:"349",height:"334",viewBox:"0 0 349 334",xmlns:"http://www.w3.org/2000/svg"}
const wn={componentId:"cVzyw",template:function(e){return"\n\n.root_1XRE{background:".concat(e.background||"inherit",";color:").concat(e.color||"inherit",";font-family:").concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit","}\n\n.root_1XRE.small_1XRE .balloons_1XRE,.root_1XRE.small_1XRE .desert_1XRE{max-width:100%}\n\n.balloons_1XRE,.desert_1XRE{-webkit-margin-end:auto;-webkit-margin-start:auto;display:block;margin-bottom:").concat(e.largeSpacing||"inherit",";margin-inline-end:auto;margin-inline-start:auto;margin-top:").concat(e.xxLargeSpacing||"inherit",";padding:").concat(e.smallSpacing||"inherit",";text-align:center}\n\n[dir=ltr] .balloons_1XRE,[dir=ltr] .desert_1XRE{margin-left:auto;margin-right:auto;text-align:center}\n\n[dir=rtl] .balloons_1XRE,[dir=rtl] .desert_1XRE{margin-left:auto;margin-right:auto;text-align:center}\n\n.subtitlebox_1XRE{text-align:center;vertical-align:middle}\n\n[dir=ltr] .subtitlebox_1XRE,[dir=rtl] .subtitlebox_1XRE{text-align:center}\n\n.title_1XRE{font-weight:").concat(e.lightWeight||"inherit",";padding:16px;text-align:center;vertical-align:middle}\n\n[dir=ltr] .title_1XRE,[dir=rtl] .title_1XRE{text-align:center}\n\n.subtitle_1XRE{padding:12px}")},root:"root_1XRE",small:"small_1XRE",balloons:"balloons_1XRE",desert:"desert_1XRE",subtitlebox:"subtitlebox_1XRE",title:"title_1XRE",subtitle:"subtitle_1XRE"}
class Tn extends n["Component"]{constructor(){super(...arguments)
this.handleDashboardCardLinkClick=()=>{this.props.changeDashboardView&&this.props.changeDashboardView("cards")}}renderAddToDoButton(){return i.a.createElement(oe["a"],{id:"PlannerEmptyState_AddToDo",variant:"link",onClick:this.props.onAddToDo},B("Add To-Do"))}renderNothingAtAll(){return i.a.createElement("div",{className:m()(wn.root,"planner-empty-state",wn[this.props.responsiveSize])},i.a.createElement(Cn,{className:m()(wn.desert,"desert"),"aria-hidden":"true"}),i.a.createElement("div",{className:wn.title},i.a.createElement(T["a"],null,B("No Due Dates Assigned"))),i.a.createElement("div",{className:wn.subtitlebox},i.a.createElement("div",{className:wn.subtitle},B("Looks like there isn't anything here")),i.a.createElement(En["a"],{id:"PlannerEmptyState_CardView",onClick:this.handleDashboardCardLinkClick},B("Go to Card View Dashboard")),"|",this.renderAddToDoButton()))}renderNothingLeft(){return i.a.createElement("div",{className:m()(wn.root,"planner-empty-state",wn[this.props.responsiveSize])},i.a.createElement(kn,{className:m()(wn.balloons,"balloons"),"aria-hidden":"true"}),i.a.createElement("div",{className:wn.title},i.a.createElement(T["a"],null,B("Nothing More To Do"))),i.a.createElement("div",{className:wn.subtitlebox},i.a.createElement("div",{className:wn.subtitle},B("Scroll up to see your history!")),this.renderAddToDoButton()))}render(){return this.props.isCompletelyEmpty?this.renderNothingAtAll():this.renderNothingLeft()}}Tn.propTypes={changeDashboardView:p["func"].isRequired,onAddToDo:p["func"].isRequired,isCompletelyEmpty:p["bool"],responsiveSize:p["string"]}
Tn.defaultProps={responsiveSize:"large"}
var Dn=Object(w["themeable"])(An,wn)(Tn)
class xn extends n["Component"]{constructor(e){super(e)
this.fixedElementRef=e=>{this.fixedElement=e}
this.resizeTimer=0
this.onResize=e=>{if(0===this.resizeTimer){this.resizeTimer=window.setTimeout(()=>{this.resizeTimer=0},1e3)
this.beforeLayoutChange()}}
this.onAddToDo=e=>{e.preventDefault()
this.props.updateTodo({updateTodoItem:{}})}
this.afterLayoutChange=()=>{if(this.fixedResponsiveMemo){this.animator.maintainViewportPositionFromMemo(this.fixedResponsiveMemo.element,this.fixedResponsiveMemo)
this.fixedResponsiveMemo=null}}
this.animator=null
this._plannerElem=null
this.fixedResponsiveMemo=null}componentWillMount(){this.props.appRef(this)
window.addEventListener("resize",this.onResize,false)}componentWillUpdate(e){false===this.props.allPastItemsLoaded&&true===e.allPastItemsLoaded&&this.loadPriorButton===document.activeElement&&this.props.focusFallback()
this.props.preTriggerDynamicUiUpdates()}componentDidUpdate(e){this.props.triggerDynamicUiUpdates()
this.props.responsiveSize!==e.responsiveSize&&this.afterLayoutChange()}componentWillUnmount(){this.props.appRef(null)
window.removeEventListenet("resize",this.onResize,false)}fixedElementForItemScrolling(){return this.fixedElement}beforeLayoutChange(){function e(e){const a=t.querySelectorAll(e)
const s=Array.prototype.find.call(a,e=>e.getBoundingClientRect().top>0)
return s}const t=this._plannerElem||document
const a=e(".planner-day, .planner-grouping, .planner-empty-days")
if(a){this.animator||(this.animator=new xe)
this.fixedResponsiveMemo=this.animator.elementPositionMemo(a)}}renderLoading(){return i.a.createElement(c["a"],{display:"block",padding:"xx-large medium",textAlign:"center"},i.a.createElement(g["a"],{renderTitle:()=>B("Loading planner items"),size:"medium"}))}renderLoadingPast(){if(this.props.isLoading)return
return i.a.createElement(vn,{loadingPast:this.props.loadingPast,allPastItemsLoaded:this.props.allPastItemsLoaded,loadingError:this.props.loadingError})}renderLoadMore(){if(this.props.isLoading||this.props.loadingPast)return
return i.a.createElement(bn,{loadingFuture:this.props.loadingFuture,allFutureItemsLoaded:this.props.allFutureItemsLoaded,loadingError:this.props.loadingError,onLoadMore:this.props.loadFutureItems,plannerActive:this.props.plannerActive})}renderLoadPastButton(){if(this.props.allPastItemsLoaded)return
return i.a.createElement(c["a"],{as:"div",textAlign:"center"},i.a.createElement(pn,{buttonRef:e=>this.loadPriorButton=e,buttonProps:{onClick:this.props.loadPastButtonClicked}},B("Load prior dates")))}renderNoAssignments(){return i.a.createElement(Dn,{changeDashboardView:this.props.changeDashboardView,isCompletelyEmpty:this.props.isCompletelyEmpty,onAddToDo:this.onAddToDo,responsiveSize:this.props.responsiveSize})}countEmptyDays(e,t,a){const s=t.clone()
let n=Z(s)
let i=0
while((!e[n]||0===e[n].length)&&(s.isSame(a)||s.isBefore(a))){++i
s.add(1,"days")
n=Z(s)}return i}renderOneDay(e,t,a,s){const n=i.a.createElement(rn,{timeZone:this.props.timeZone,day:t,itemsForDay:a,animatableIndex:s,key:t,toggleCompletion:this.props.togglePlannerItemCompletion,updateTodo:this.props.updateTodo,currentUser:this.props.currentUser})
e.add(1,"days")
return n}renderEmptyDays(e,t,a){const s=[]
for(let n=0;n<e;++n){const e=Z(t)
s.push(this.renderOneDay(t,e,[],a++))}return s}renderEmptyDayStretch(e,t,a){const s=Z(t)
t.add(e-1,"days")
const n=Z(t)
const r=i.a.createElement(_n,{timeZone:this.props.timeZone,day:s,endday:n,animatableIndex:a++,key:s,updateTodo:this.props.updateTodo,currentUser:this.props.currentUser,responsiveSize:this.props.responsiveSize})
t.add(1,"days")
return r}renderPast(e,t,a,s){const n=[]
while(e.isSame(t)||e.isBefore(t)){const t=Z(e)
const i=a[t]
i&&i.length>0?n.push(this.renderOneDay(e,t,i,s++)):e.add(1,"day")}return n}renderPresent(e,t,a,s){const n=[]
while(e.isSame(t)||e.isBefore(t)){const t=Z(e)
const i=a[t]||[]
n.push(this.renderOneDay(e,t,i,s++))}return n}renderFuture(e,t,a,s){const n=[]
while(e.isSame(t)||e.isBefore(t)){const i=Z(e)
const r=a[i]
if(r&&r.length>0)n.push(this.renderOneDay(e,i,r,s++))
else{const i=this.countEmptyDays(a,e,t)
if(i<3){n.splice(n.length,0,...this.renderEmptyDays(i,e,s))
s+=i}else{n.push(this.renderEmptyDayStretch(i,e,s));++s}}}return n}renderDays(){const e=[]
const t=u.a.tz(this.props.timeZone).startOf("day")
let a=u.a.tz(this.props.days[0][0],this.props.timeZone)
a.isAfter(t)&&(a=t.clone())
let s=u.a.tz(this.props.days[this.props.days.length-1][0],this.props.timeZone)
let n=t.clone().add(1,"day")
const i=t.clone().add(-2,"day")
s.isBefore(t)&&(s=t.clone())
n.isAfter(s)&&(n=t.clone())
const r=Ne(this.props.days)
let o=1
const d=this.renderPast(a,i,r,o)
o+=d.length
e.splice(e.length,0,...d)
const l=this.renderPresent(a,n,r,o)
o+=l.length
e.splice(e.length,0,...l)
const _=this.renderFuture(a,s,r,o)
e.splice(e.length,0,..._)
return e}renderBody(e,t){const a=this.props.loadingPast||this.props.loadingFuture||this.props.isLoading
if(0===e.length&&!a)return i.a.createElement("div",{className:t},this.renderLoadPastButton(),this.renderNoAssignments())
return i.a.createElement("div",{className:t,ref:e=>this._plannerElem=e},this.renderLoadPastButton(),this.renderLoadingPast(),e,i.a.createElement("div",{id:"planner-app-fixed-element",ref:this.fixedElementRef}),this.renderLoadMore())}render(){const e=m()("PlannerApp",this.props.responsiveSize)
let t=[]
this.props.isLoading?t=this.renderLoading():this.props.days.length>0&&(t=this.renderDays())
return this.renderBody(t,e)}}xn.propTypes={days:Object(p["arrayOf"])(Object(p["arrayOf"])(Object(p["oneOfType"])([p["string"],Object(p["arrayOf"])(p["object"])]))),timeZone:p["string"],isLoading:p["bool"],loadingPast:p["bool"],loadingError:p["string"],allPastItemsLoaded:p["bool"],loadingFuture:p["bool"],allFutureItemsLoaded:p["bool"],loadPastButtonClicked:p["func"],loadPastUntilNewActivity:p["func"],loadFutureItems:p["func"],changeDashboardView:p["func"],togglePlannerItemCompletion:p["func"],updateTodo:p["func"],triggerDynamicUiUpdates:p["func"],preTriggerDynamicUiUpdates:p["func"],plannerActive:p["func"],currentUser:Object(p["shape"])(h),responsiveSize:A,appRef:p["func"],focusFallback:p["func"]}
xn.defaultProps={isLoading:false,triggerDynamicUiUpdates:()=>{},preTriggerDynamicUiUpdates:()=>{},plannerActive:()=>false,responsiveSize:"large",appRef:()=>{},focusFallback:()=>{},isCompletelyEmpty:p["bool"]}
const Fn=e=>({days:e.days,isLoading:e.loading.isLoading||null===e.loading.hasSomeItems,loadingPast:e.loading.loadingPast,allPastItemsLoaded:e.loading.allPastItemsLoaded,loadingFuture:e.loading.loadingFuture,allFutureItemsLoaded:e.loading.allFutureItemsLoaded,loadingError:e.loading.loadingError,timeZone:e.timeZone,isCompletelyEmpty:false===e.loading.hasSomeItems&&0===e.days.length&&0===e.loading.partialPastDays.length&&0===e.loading.partialFutureDays.length})
const Sn=Object(Hs["a"])()(xn)
const On={loadFutureItems:ea,loadPastButtonClicked:na,loadPastUntilNewActivity:ia,togglePlannerItemCompletion:ns,updateTodo:qa}
var Bn=vs(Object(d["connect"])(Fn,On)(Sn))
var In=a("hsZO")
var zn=a("3Zzb")
var Nn=a("iIix")
var Mn=a("we39")
var Ln=a("Ls+w")
var Pn=a("zpiH")
var jn=a("7Hz5")
var Rn=a("sTNg")
var qn=a("+nEw")
var Hn=a("M8//")
var Un=a("WEeK")
var Xn=a("Ff2n")
var Vn=a("Oioo")
var Wn=a("4Awi")
const Gn="_noOptionsOption"
function Zn(){return i.a.createElement("div",null)}Zn.propTypes={id:p["string"].isRequired,value:p["string"].isRequired}
function Kn(){return i.a.createElement("div",null)}Kn.propTypes={label:p["string"].isRequired}
class Yn extends i.a.Component{constructor(e){super(e)
this.backupKey=0
this.handleBlur=e=>{this.setState({highlightedOptionId:null})}
this.handleShowOptions=()=>{this.setState({isShowingOptions:true})}
this.handleHideOptions=e=>{this.setState(e=>{const t=this.getOptionLabelById(e.selectedOptionId)
return{isShowingOptions:false,highlightedOptionId:null,inputValue:t,announcement:B("List collapsed.")}})}
this.handleHighlightOption=(e,t)=>{let a=t.id
if(a===Gn)return
const s=this.getOptionLabelById(a)
const n=this.state.isShowingOptions?"":B("List expanded.")
const i="keydown"===e.type?s:this.state.inputValue
this.setState({highlightedOptionId:a,inputValue:i,announcement:"".concat(s," ").concat(n)})}
this.handleSelectOption=(e,t)=>{let a=t.id
if(a===Gn)this.setState({isShowingOptions:false,announcement:B("List collapsed")})
else{const t=this.getOptionLabelById(a)
const s=this.state.selectedOptionId
this.setState({selectedOptionId:a,inputValue:t,isShowingOptions:false,announcement:B("{option} selected. List collapsed.",{option:t})})
const n=this.getOptionByFieldValue("id",a)
s!==a&&this.props.onChange(e,n.props.value)}}
const t=this.getOptionByFieldValue("value",e.value)
this.state={inputValue:t?t.props.children:"",isShowingOptions:false,highlightedOptionId:null,selectedOptionId:t?t.props.id:null,announcement:null}}componentDidUpdate(e){if(this.props.value!==e.value||!Object(Q["isEqual"])(this.props.children,e.children)){const e=this.getOptionByFieldValue("value",this.props.value)
this.setState({inputValue:e?e.props.children:"",selectedOptionId:e?e.props.id:""})}}render(){const e=this.props,t=e.id,a=e.label,s=(e.value,e.onChange,e.children),n=(e.noOptionsLabel,Object(Xn["a"])(e,["id","label","value","onChange","children","noOptionsLabel"]))
return i.a.createElement(i.a.Fragment,null,i.a.createElement(Vn["a"],Object.assign({id:t,renderLabel:()=>a,assistiveText:B("Use arrow keys to navigate options."),inputValue:this.state.inputValue,isShowingOptions:this.state.isShowingOptions,onBlur:this.handleBlur,onRequestShowOptions:this.handleShowOptions,onRequestHideOptions:this.handleHideOptions,onRequestHighlightOption:this.handleHighlightOption,onRequestSelectOption:this.handleSelectOption},n),this.renderChildren(s)),i.a.createElement(fn["a"],{liveRegion:()=>document.getElementById("flash_screenreader_holder"),liveRegionPoliteness:"assertive",screenReaderOnly:true},this.state.announcement))}renderChildren(e){if(!Array.isArray(e))return Object(Wn["a"])(e,[Zn])?this.renderOption(e):Object(Wn["a"])(e,[Kn])?this.renderGroup(e):this.renderNoOptionsOption()
const t=e.map(e=>{if(Array.isArray(e))return this.renderChildren(e)
if(Object(Wn["a"])(e,[Zn]))return this.renderOption(e)
if(Object(Wn["a"])(e,[Kn]))return this.renderGroup(e)
return null}).filter(e=>!!e)
if(0===t.length)return this.renderNoOptionsOption()
return t}renderOption(e){const t=e.props,a=t.id,s=t.children,n=Object(Xn["a"])(t,["id","children"])
return i.a.createElement(Vn["a"].Option,Object.assign({id:a,key:e.key||a||++this.backupKey,isHighlighted:a===this.state.highlightedOptionId,isSelected:a===this.state.selectedOptionId},n),s)}renderGroup(e){const t=e.props,a=t.id,s=t.label,n=Object(Xn["a"])(t,["id","label"])
const r=Object(Q["compact"])(Object(Q["castArray"])(e.props.children))
return i.a.createElement(Vn["a"].Group,Object.assign({"data-testid":"Group:".concat(s),renderLabel:()=>s,key:e.key||a||++this.backupKey},n),r.map(e=>this.renderOption(e)))}renderNoOptionsOption(){return i.a.createElement(Vn["a"].Option,{id:Gn,isHighlighted:false,isSelected:false},this.props.noOptionsLabel)}getOptionLabelById(e){const t=this.getOptionByFieldValue("id",e)
return t?t.props.children:""}getOptionByFieldValue(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object(Q["castArray"])(this.props.children)
if(!this.props.children)return null
let s=null
for(let n=0;n<a.length;++n){const i=a[n]
if(Array.isArray(i))s=this.getOptionByFieldValue(e,t,i)
else if(Object(Wn["a"])(i,[Zn]))i.props[e]===t&&(s=i)
else if(Object(Wn["a"])(i,[Kn])){const a=Object(Q["castArray"])(i.props.children)
for(let n=0;n<a.length;++n){const i=a[n]
if(i.props[e]===t){s=i
break}}}if(s)break}return s}}Yn.Option=Zn
Yn.Group=Kn
Yn.propTypes={id:p["string"],label:Object(p["oneOfType"])([p["node"],p["func"]]).isRequired,value:p["string"],onChange:p["func"].isRequired,children:p["node"],noOptionsLabel:p["string"]}
Yn.defaultProps={noOptionsLabel:"---"}
function Jn(e){let t=e.colors
e.typography
const a={background:t.white}
return a}const Qn={componentId:"brMfX",template:function(e){return"\n\n.root_V0ij{background:".concat(e.background||"inherit",";box-sizing:border-box;max-width:100%;width:19rem}")},root:"root_V0ij"}
class $n extends n["Component"]{constructor(e){super(e)
this.updateMessages=()=>{this.state.updates.date?this.setState({dateMessages:[]}):this.setState({dateMessages:[{type:"error",text:B("Date is required")}]})}
this.handleSave=()=>{const e=Object(s["a"])({},this.state.updates)
e.courseId?e.context={id:e.courseId}:e.context={id:null}
e.date=e.date.toISOString()
delete e.courseId
this.props.onSavePlannerItem(e)}
this.handleChange=(e,t)=>{this.setState(a=>({updates:Object(s["a"])({},a.updates,{[e]:t})}),this.updateMessages)}
this.handleCourseIdChange=(e,t)=>{if(!t)return
"none"===t&&(t=void 0)
this.handleChange("courseId",t)}
this.handleTitleChange=e=>{const t=e.target.value
""===t?this.setState({titleMessages:[{type:"error",text:B("title is required")}]}):this.setState({titleMessages:[]})
this.handleChange("title",t)}
this.handleDateChange=(e,t)=>{const a=t||""
this.handleChange("date",u.a.tz(a,this.props.timeZone))}
this.onInvalidDateTimeMessage=this.invalidDateTimeMessage.bind(this)
this.handleDeleteClick=()=>{confirm(B("Are you sure you want to delete this planner item?"))&&this.props.onDeletePlannerItem(this.props.noteItem)}
const t=this.getNoteUpdates(e)
this.state={updates:t,titleMessages:[],dateMessages:[]}}UNSAFE_componentWillReceiveProps(e){if(!$.a.isEqual(this.props.noteItem,e.noteItem)){const t=this.getNoteUpdates(e)
this.setState({updates:t},this.updateMessages)}}editingExistingNote(){return this.props.noteItem&&this.props.noteItem.uniqueId}getNoteUpdates(e){const t=$.a.cloneDeep(e.noteItem)||{}
if(t.context){t.courseId=t.context.id
delete t.context}t.date||(t.date=u.a.tz(e.timeZone).endOf("day"))
return t}invalidDateTimeMessage(e,t){let a
a=e?B("#{date} is not a valid date.",{date:e}):B("You must provide a date and time.")
return a}findCurrentValue(e){return this.state.updates[e]||""}isValid(){if(this.state.updates.title&&this.state.updates.date&&this.state.updates.date.isValid())return this.state.updates.title.replace(/\s/g,"").length>0
return false}renderDeleteButton(){if(!this.editingExistingNote())return
return i.a.createElement(oe["a"],{variant:"light",margin:"0 x-small 0 0",onClick:this.handleDeleteClick},B("Delete"))}renderSaveButton(){return i.a.createElement(oe["a"],{variant:"primary",margin:"0 0 0 x-small",disabled:!this.isValid(),onClick:this.handleSave},B("Save"))}renderTitleInput(){const e=this.findCurrentValue("title")
return i.a.createElement(Un["a"],{renderLabel:()=>B("Title"),value:e,messages:this.state.titleMessages,onChange:this.handleTitleChange})}renderDateInput(){const e=this.state.updates.date&&this.state.updates.date.isValid()?this.state.updates.date.toISOString():void 0
return i.a.createElement(qn["a"],{required:true,description:i.a.createElement(ie["a"],null,B("The date and time this to do is due")),messages:this.state.dateMessages,dateLabel:B("Date"),dateNextLabel:B("Next Month"),datePreviousLabel:B("Previous Month"),timeLabel:B("Time"),timeStep:30,locale:this.props.locale,timezone:this.props.timeZone,value:e,layout:"stacked",onChange:this.handleDateChange,invalidDateTimeMessage:this.onInvalidDateTimeMessage})}renderCourseSelect(){const e={value:"none",label:B("Optional: Add Course")}
const t=(this.props.courses||[]).filter(e=>"StudentEnrollment"===e.enrollmentType).map(e=>({value:e.id,label:e.longName}))
const a=this.findCurrentValue("courseId")
const s=a?t.find(e=>e.value===a):e
return i.a.createElement(Yn,{label:B("Course"),id:"to-do-item-course-select",value:s.value,onChange:this.handleCourseIdChange},[e,...t].map(e=>i.a.createElement(Yn.Option,{key:e.value,id:e.value,value:e.value},e.label)))}renderDetailsInput(){const e=this.findCurrentValue("details")
return i.a.createElement(Hn["a"],{label:B("Details"),height:"10rem",autoGrow:false,value:e,onChange:e=>this.handleChange("details",e.target.value)})}renderTrayHeader(){return this.editingExistingNote()?i.a.createElement("h2",null,B("Edit {title}",{title:this.props.noteItem.title})):i.a.createElement("h2",null,B("Add To Do"))}render(){return i.a.createElement("div",{className:Qn.root},i.a.createElement(c["a"],{as:"div",padding:"large medium medium"},i.a.createElement(Rn["FormFieldGroup"],{rowSpacing:"small",description:i.a.createElement(ie["a"],null,this.renderTrayHeader())},this.renderTitleInput(),this.renderDateInput(),this.renderCourseSelect(),this.renderDetailsInput()),i.a.createElement(c["a"],{as:"div",margin:"small 0 0",textAlign:"end"},this.renderDeleteButton(),this.renderSaveButton())))}}$n.propTypes={courses:f.a.arrayOf(f.a.shape(y)).isRequired,noteItem:f.a.object,onSavePlannerItem:f.a.func.isRequired,onDeletePlannerItem:f.a.func.isRequired,locale:f.a.string.isRequired,timeZone:f.a.string.isRequired}
var ei=Object(w["themeable"])(Jn,Qn)($n)
var ti=a("hGMy")
var ai=a("3zPy")
var si=a.n(ai)
var ni=a("CwkF")
var ii=a("3Sge")
function ri(e){let t=e.colors,a=e.spacing,s=e.typography
return{lineHeight:s.lineHeightCondensed,fontSize:s.fontSizeMedium,fontFamily:s.fontFamily,fontWeight:s.fontWeightNormal,color:t.licorice,secondaryColor:t.slate,background:t.white,namePaddingTop:a.xxSmall,nameFontSize:s.fontSizeSmall,statusPadding:a.small,dueFontSize:s.fontSizeXSmall,dueMargin:a.xxSmall,dueTextFontWeight:s.fontWeightBold,footerPadding:a.xSmall,pointsFontSize:s.fontSizeXSmall,pointsNumberFontSize:s.fontSizeLarge,pointsLineHeight:s.lineHeightFit,titleMargin:a.xSmall,closeButtonIconSize:"1.75rem"}}const oi={componentId:"eAJaG",template:function(e){return"\n\n.root_2_RE{background:".concat(e.background||"inherit",";box-sizing:border-box;color:").concat(e.color||"inherit",";font-family:").concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";line-height:").concat(e.lineHeight||"inherit",";padding:").concat(e.padding||"inherit",";position:relative}\n\n.oppNameAndTitle_2_RE{max-width:16.5rem}\n\n.oppName_2_RE{box-sizing:border-box;color:").concat(e.secondaryColor||"inherit",";flex:1;font-size:").concat(e.nameFontSize||"inherit",";letter-spacing:0.0625rem;margin-right:").concat(e.closeButtonIconSize||"inherit",";min-width:1px;padding-top:").concat(e.namePaddingTop||"inherit",";text-transform:uppercase}\n\n.title_2_RE{margin-bottom:").concat(e.titleMargin||"inherit","}\n\n.close_2_RE{offset-inline-end:0;position:absolute;top:0}\n\n[dir=ltr] .close_2_RE{right:0}\n\n[dir=rtl] .close_2_RE{left:0}\n\n.oppName_2_RE,.title_2_RE{-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;word-wrap:break-word}\n\n.footer_2_RE{-webkit-padding-end:").concat(e.footerPadding||"inherit",";align-items:flex-end;box-sizing:border-box;display:flex;justify-content:space-between;padding-inline-end:").concat(e.footerPadding||"inherit","}\n\n[dir=ltr] .footer_2_RE{padding-right:").concat(e.footerPadding||"inherit","}\n\n[dir=rtl] .footer_2_RE{padding-left:").concat(e.footerPadding||"inherit","}\n\n.status_2_RE{-webkit-padding-end:").concat(e.statusPadding||"inherit",";box-sizing:border-box;flex-grow:1;min-width:1px;padding-inline-end:").concat(e.statusPadding||"inherit","}\n\n[dir=ltr] .status_2_RE{padding-right:").concat(e.statusPadding||"inherit","}\n\n[dir=rtl] .status_2_RE{padding-left:").concat(e.statusPadding||"inherit","}\n\n.points_2_RE{box-sizing:border-box;color:").concat(e.secondaryColor||"inherit",";flex-shrink:0;font-size:").concat(e.pointsFontSize||"inherit",";line-height:").concat(e.pointsLineHeight||"inherit",";min-width:1px;text-align:end;text-transform:uppercase}\n\n[dir=ltr] .points_2_RE{text-align:right}\n\n[dir=rtl] .points_2_RE{text-align:left}\n\n.pointsNumber_2_RE{display:block;font-size:").concat(e.pointsNumberFontSize||"inherit","}\n\n.due_2_RE{color:").concat(e.secondaryColor||"inherit",";font-size:").concat(e.dueFontSize||"inherit",";margin-top:").concat(e.dueMargin||"inherit","}\n\n.dueText_2_RE{font-weight:").concat(e.dueTextFontWeight||"inherit","}")},root:"root_2_RE",oppNameAndTitle:"oppNameAndTitle_2_RE",oppName:"oppName_2_RE",title:"title_2_RE",close:"close_2_RE",footer:"footer_2_RE",status:"status_2_RE",points:"points_2_RE",pointsNumber:"pointsNumber_2_RE",due:"due_2_RE",dueText:"dueText_2_RE"}
class di extends n["Component"]{constructor(e){super(e)
this.linkRef=e=>{this.link=e}
this.dismiss=()=>{this.props.dismiss&&this.props.dismiss(this.props.id,this.props.plannerOverride)}
const t=u.a.tz(e.dueAt,e.timeZone)
this.fullDate=U(t)}componentDidMount(){this.props.registerAnimatable("opportunity",this,this.props.animatableIndex,[this.props.id])}componentWillReceiveProps(e){this.props.deregisterAnimatable("opportunity",this,[this.props.id])
this.props.registerAnimatable("opportunity",this,e.animatableIndex,[e.id])}componentWillUnmount(){this.props.deregisterAnimatable("opportunity",this,[this.props.id])}getFocusable(){return this.link}renderButton(){const e=this.props.plannerOverride&&this.props.plannerOverride.dismissed
return i.a.createElement("div",{className:oi.close},e?null:i.a.createElement(oe["a"],{onClick:this.dismiss,variant:"icon",icon:ii["a"],size:"small",title:B("Dismiss {opportunityName}",{opportunityName:this.props.opportunityTitle})},i.a.createElement(ie["a"],null,B("Dismiss {opportunityName}",{opportunityName:this.props.opportunityTitle}))))}renderPoints(){if("number"!==typeof this.props.points)return i.a.createElement(ie["a"],null,B("There are no points associated with this item"))
return i.a.createElement("div",{className:oi.points},i.a.createElement(ie["a"],null,B("{points} points",{points:this.props.points})),i.a.createElement(re["a"],null,i.a.createElement("span",{className:oi.pointsNumber},this.props.points),B("points")))}render(){return i.a.createElement("div",{className:oi.root},i.a.createElement("div",{className:oi.oppNameAndTitle},i.a.createElement("div",{className:oi.oppName},this.props.courseName),i.a.createElement("div",{className:oi.title},i.a.createElement(oe["a"],{variant:"link",theme:{mediumPadding:"0",mediumHeight:"normal"},href:this.props.url,buttonRef:this.linkRef},this.props.opportunityTitle))),i.a.createElement("div",{className:oi.footer},i.a.createElement("div",{className:oi.status},i.a.createElement(ae["a"],{text:B("Missing"),variant:"danger"}),i.a.createElement("div",{className:oi.due},i.a.createElement("span",{className:oi.dueText},B("Due:"))," ",this.fullDate)),this.renderPoints()),this.renderButton())}}di.propTypes={id:p["string"].isRequired,dueAt:p["string"].isRequired,points:p["number"],courseName:p["string"].isRequired,opportunityTitle:p["string"].isRequired,timeZone:p["string"].isRequired,url:p["string"].isRequired,dismiss:p["func"],plannerOverride:p["object"],registerAnimatable:p["func"],deregisterAnimatable:p["func"],animatableIndex:p["number"]}
di.defaultProps={registerAnimatable:()=>{},deregisterAnimatable:()=>{},dismiss:()=>{}}
var li=Ee(Object(w["themeable"])(ri,oi)(di))
function ui(e){let t=e.borders,a=e.colors,s=e.spacing,n=e.typography
return{padding:"".concat(s.xSmall," ").concat(s.small," ").concat(s.small),borderBottom:"".concat(t.widthSmall," ").concat(t.style," ").concat(a.tiara),borderColor:a.tiara,borderWidth:t.widthSmall,borderStyle:t.style,itemMargin:s.small,itemPadding:s.xxSmall,lineHeight:n.lineHeightCondensed}}const _i={componentId:"fzQJr",template:function(e){return"\n\n.root_3FFz{box-sizing:border-box;line-height:".concat(e.lineHeight||"inherit",";max-height:36rem;max-width:100%;overflow:auto;padding:").concat(e.padding||"inherit",";width:20rem}\n\n.header_3FFz{border-bottom:").concat(e.borderBottom||"inherit",";margin-bottom:0.25rem;text-align:center}\n\n[dir=ltr] .header_3FFz,[dir=rtl] .header_3FFz{text-align:center}\n\n.list_3FFz{box-sizing:border-box;color:").concat(e.color||"inherit",";list-style-type:none}\n\n.item_3FFz,.list_3FFz{margin:0;padding:0}\n\n.item_3FFz:not(:last-of-type){margin-bottom:").concat(e.itemMargin||"inherit","}\n\n.item_3FFz:not(:first-of-type){border-top:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-top:").concat(e.itemPadding||"inherit","}\n\n.loading_3FFz,[dir=ltr] .loading_3FFz,[dir=rtl] .loading_3FFz{text-align:center}")},root:"root_3FFz",header:"header_3FFz",list:"list_3FFz",item:"item_3FFz",loading:"loading_3FFz"}
const mi=us("opportunity")
class ci extends n["Component"]{constructor(e){super(e)
this.handleTabChange=(e,t)=>{let a=t.index
t.id
this.setState({selectedIndex:a})}
this.handleKeyDown=e=>{e.keyCode===si.a.codes.tab&&Object(ti["a"])(this._content,e)
if(e.keyCode===si.a.codes.escape){e.preventDefault()
this.props.togglePopover()}}
this.courseAttr=(e,t)=>{const a=this.props.courses.find(t=>t.id===e)||{}
return a[t]}
this.getTabPanelContentDivRefFromList=e=>{this.tabPanelContentDiv=e&&e.parentElement}
this.state={innerMaxHeight:"auto",selectedIndex:0}
this.closeButtonRef=null
this.tabPanelContentDiv=null}componentDidMount(){this.props.registerAnimatable("opportunity",this,-1,[mi])
this.setMaxHeight(this.props)
this.closeButtonRef.focus()}componentWillReceiveProps(e){this.setMaxHeight(e)}componentWillUnmount(){this.props.deregisterAnimatable("opportunity",this,[mi])}getFocusable(){return this.closeButtonRef}setMaxHeight(e){let t="auto"
if(this.tabPanelContentDiv){const a=window.getComputedStyle(this.tabPanelContentDiv)
const s=parseInt(a["padding-top"])+parseInt(a["padding-bottom"])
const n=parseInt(a["border-top-width"])+parseInt(a["border-bottom-width"])
t="".concat(e.maxHeight-this.tabPanelContentDiv.offsetTop-s-n,"px")}this.setState({innerMaxHeight:t})}renderOpportunities(e,t){return i.a.createElement("ol",{className:_i.list,ref:this.getTabPanelContentDivRefFromList},e.map((e,a)=>i.a.createElement("li",{key:e.id,className:_i.item},i.a.createElement(li,{id:e.id,dueAt:e.due_at,points:e.points_possible,courseName:this.courseAttr(e.course_id,"shortName"),opportunityTitle:e.name,timeZone:this.props.timeZone,dismiss:t?null:this.props.dismiss,plannerOverride:e.planner_override,url:e.html_url,animatableIndex:a}))))}renderNewOpportunities(){return this.props.newOpportunities.length?this.renderOpportunities(this.props.newOpportunities,false):i.a.createElement("div",null,B("Nothing new needs attention."))}renderDismissedOpportunities(){return this.props.dismissedOpportunities.length?this.renderOpportunities(this.props.dismissedOpportunities,true):i.a.createElement("div",null,B("Nothing here needs attention."))}renderTitle(e){const t=B("new"===e?"New Opportunities":"Dismissed Opportunities")
const a=B("new"===e?"New":"Dismissed")
return i.a.createElement(In["a"],{alt:t},a)}renderCloseButton(){return i.a.createElement(Ns["a"],{placement:"end",offset:"x-small",variant:"icon",onClick:this.props.togglePopover,buttonRef:e=>{this.closeButtonRef=e}},B("Close Opportunity Center popup"))}render(){const e=this.state.selectedIndex
return i.a.createElement("div",{id:"opportunities_parent",className:_i.root,onKeyDown:this.handleKeyDown,ref:e=>{this._content=e},style:{maxHeight:this.props.maxHeight}},this.renderCloseButton(),i.a.createElement(ni["a"],{onRequestTabChange:this.handleTabChange},i.a.createElement(ni["a"].Panel,{renderTitle:this.renderTitle("new"),maxHeight:this.state.innerMaxHeight,selected:0===e},this.renderNewOpportunities()),i.a.createElement(ni["a"].Panel,{renderTitle:this.renderTitle("dismissed"),maxHeight:this.state.innerMaxHeight,selected:1===e},this.renderDismissedOpportunities())))}}ci.propTypes={newOpportunities:p["array"].isRequired,dismissedOpportunities:p["array"].isRequired,timeZone:p["string"].isRequired,courses:p["array"].isRequired,dismiss:p["func"].isRequired,togglePopover:p["func"].isRequired,maxHeight:Object(p["oneOfType"])([p["number"],p["string"]]),registerAnimatable:p["func"],deregisterAnimatable:p["func"]}
ci.defaultProps={maxHeight:"none",registerAnimatable:()=>{},deregisterAnimatable:()=>{}}
var gi=Ee(Object(w["themeable"])(ui,_i)(ci))
function pi(e){let t=e.colors
return{courseColor:t.brand}}pi["canvas-a11y"]=pi["modern-a11y"]=function(e){let t=e.colors
return{courseColor:t.licorice}}
pi.canvas=function(e){return{courseColor:e["ic-brand-primary"]}}
const fi={componentId:"cMptf",template:function(e){return"\n\n.course_1QkD{border-bottom-color:".concat(e.courseColor||"inherit","}")},course:"course_1QkD"}
class hi extends i.a.Component{scoreString(e){const t=parseFloat(e)
if(isNaN(t))return B("No Grade")
return"".concat(t.toFixed(2),"%")}renderSpinner(){return i.a.createElement(c["a"],{as:"div",textAlign:"center",margin:"0 0 large 0"},i.a.createElement(g["a"],{renderTitle:()=>B("Grades are loading"),size:"small"}))}renderCaveat(){if(this.props.loading)return
if(this.props.courses.some(e=>e.hasGradingPeriods))return i.a.createElement(c["a"],{as:"div",textAlign:"center"},i.a.createElement(D["a"],{size:"x-small",fontStyle:"italic"},B("*Only most recent grading period shown.")))}renderGrades(){if(this.props.loadingError)return
return this.props.courses.map(e=>{const t={borderBottom:"solid thin",borderBottomColor:e.color}
return i.a.createElement(c["a"],{key:e.id,as:"div",margin:"0 0 large 0"},i.a.createElement("div",{className:fi.course,style:t},i.a.createElement(oe["a"],{variant:"link",size:"small",theme:{smallPadding:"0",smallHeight:"normal"},href:"".concat(e.href,"/grades")},i.a.createElement(D["a"],{transform:"uppercase"},e.shortName))),i.a.createElement(D["a"],{as:"div",size:"large",weight:"light"},this.scoreString(e.score)))})}renderError(){if(this.props.loadingError)return i.a.createElement(hn,{error:this.props.loadingError},B("Error loading grades"))}render(){return i.a.createElement(c["a"],null,this.renderError(),i.a.createElement(c["a"],{textAlign:"center"},i.a.createElement(T["a"],{level:"h2",margin:"0 0 large 0"},i.a.createElement(D["a"],{size:"medium",weight:"bold"},B("My Grades")))),this.props.loading?this.renderSpinner():this.renderGrades(),this.renderCaveat())}}hi.propTypes={loading:p["bool"],loadingError:p["string"],courses:Object(p["arrayOf"])(Object(p["shape"])(y)).isRequired}
hi.defaultProps={loading:false}
var bi=Object(w["themeable"])(pi,fi)(hi)
var yi=a("fB1h")
var vi=a("e3lb")
var Ei=a("o4+2")
function Ai(e){let t=e.borders,a=e.colors,s=e.typography,n=e.spacing
return{fontSize:s.fontSizeXSmall,fontFamily:s.fontFamily,fontWeight:s.fontWeightNormal,color:a.white,background:a.brand,backgroundHover:Object(Ei["a"])(a.brand,5),padding:"0 ".concat(n.small),textTransform:"uppercase",lineHeight:n.medium,iconMargin:n.xxSmall,hasIconRightPadding:n.xSmall,borderRadius:t.radiusMedium,focusRingWidth:t.widthSmall,focusRingColor:a.brand}}Ai.canvas=function(e){return{background:e["ic-brand-primary"],backgroundHover:Object(Ei["a"])(e["ic-brand-primary"],5),focusRingColor:e["ic-brand-primary"]}}
const Ci={componentId:"feqxT",template:function(e){return"\n\n.root_3o4v{-moz-appearance:none;-ms-user-select:none;-webkit-appearance:none;-webkit-user-select:none;appearance:none;background-color:".concat(e.background||"inherit",";border:none;border-bottom-left-radius:").concat(e.borderRadius||"inherit",";border-bottom-right-radius:").concat(e.borderRadius||"inherit",";color:").concat(e.color||"inherit",";cursor:pointer;display:block;font-family:").concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";line-height:").concat(e.lineHeight||"inherit",";outline:none;overflow:visible;padding:0;position:fixed;text-transform:").concat(e.textTransform||"inherit",";touch-action:manipulation;transition:background-color 0.2s;user-select:none;white-space:nowrap}\n\n.root_3o4v,.root_3o4v:before{box-sizing:border-box}\n\n.root_3o4v:before{border:").concat(e.focusRingWidth||"inherit"," solid ").concat(e.focusRingColor||"inherit",";border-bottom-left-radius:").concat(e.borderRadius||"inherit",";border-bottom-right-radius:").concat(e.borderRadius||"inherit",';content:"";height:calc(100% + 0.5rem);left:-0.25rem;opacity:0;position:absolute;top:-0.25rem;transform:scale(0.25);transition:all 0.2s ease-out;width:calc(100% + 0.5rem)}\n\n.root_3o4v:focus:before{opacity:1;transform:scale(1)}\n\n.root_3o4v:focus,.root_3o4v:hover{background-color:').concat(e.backgroundHover||"inherit","}\n\n.root_3o4v:focus .icon_3o4v,.root_3o4v:hover .icon_3o4v{transform:translate3d(0,-0.0625rem,0) scale(1.2)}\n\n.root_3o4v[aria-disabled]{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.icon_3o4v{-webkit-margin-start:").concat(e.iconMargin||"inherit",";display:block;font-size:0.75rem;margin-inline-start:").concat(e.iconMargin||"inherit",";transform:translate3d(0,-0.0625rem,0);transition:all 0.2s}\n\n[dir=ltr] .icon_3o4v{margin-left:").concat(e.iconMargin||"inherit","}\n\n[dir=rtl] .icon_3o4v{margin-right:").concat(e.iconMargin||"inherit","}\n\n.direction--down_3o4v .layout_3o4v,.direction--up_3o4v .layout_3o4v{-webkit-padding-end:").concat(e.hasIconRightPadding||"inherit",";padding-inline-end:").concat(e.hasIconRightPadding||"inherit","}\n\n[dir=ltr] .direction--down_3o4v .layout_3o4v,[dir=ltr] .direction--up_3o4v .layout_3o4v{padding-right:").concat(e.hasIconRightPadding||"inherit","}\n\n[dir=rtl] .direction--down_3o4v .layout_3o4v,[dir=rtl] .direction--up_3o4v .layout_3o4v{padding-left:").concat(e.hasIconRightPadding||"inherit","}\n\n.layout_3o4v{align-items:center;box-sizing:border-box;display:flex;height:100%;padding:").concat(e.padding||"inherit",";width:100%}\n\n.newActivityButton_3o4v{offset-inline-start:0;position:absolute;top:100%}\n\n[dir=ltr] .newActivityButton_3o4v{left:0}\n\n[dir=rtl] .newActivityButton_3o4v{right:0}")},root:"root_3o4v",icon:"icon_3o4v","direction--down":"direction--down_3o4v",layout:"layout_3o4v","direction--up":"direction--up_3o4v",newActivityButton:"newActivityButton_3o4v"}
class ki extends n["Component"]{constructor(){super(...arguments)
this.handleClick=e=>{const t=this.props,a=t.disabled,s=t.onClick
if(a){e.preventDefault()
e.stopPropagation()}else"function"===typeof s&&s(e)}}renderIcon(){const e=this.props.direction
return"up"===e?i.a.createElement(yi["a"],{className:Ci.icon}):"down"===e?i.a.createElement(vi["a"],{className:Ci.icon}):null}get descriptionId(){return"".concat(this.props.id,"_desc")}renderDescription(){if(this.props.description)return i.a.createElement(ie["a"],{id:this.descriptionId},this.props.description)
return null}render(){const e=this.props,t=e.id,a=e.children,s=e.disabled,n=e.hidden,r=e.direction,o=e.zIndex
const d={[Ci.root]:true,[Ci["direction--"+r]]:"none"!==r}
const l={zIndex:o||null}
return i.a.createElement("span",null,i.a.createElement("button",{id:t,type:"button",onClick:this.handleClick,className:m()(d,Ci.newActivityButton),style:l,"aria-disabled":s?"true":null,"aria-hidden":n?"true":null,ref:this.props.buttonRef,"aria-describedby":this.props.description?this.descriptionId:null},i.a.createElement("span",{className:Ci.layout},a,this.renderIcon())),this.renderDescription())}}ki.propTypes={id:p["string"].isRequired,children:p["node"].isRequired,onClick:p["func"],disabled:p["bool"],hidden:p["bool"],direction:Object(p["oneOf"])(["none","up","down"]),className:p["string"],zIndex:p["number"],buttonRef:p["func"],description:p["string"]}
ki.defaultProps={direction:"none",offset:"0",className:""}
var wi=Object(w["themeable"])(Ai,Ci)(ki)
function Ti(e){let t=e.colors,a=e.typography
return{fontSize:a.fontSizeMedium,fontFamily:a.fontFamily,fontWeight:a.fontWeightNormal,color:t.oxford,background:t.white}}const Di={componentId:"dIgyp",template:function(e){return"\n\n.root_2rqW{background:".concat(e.background||"inherit",";color:").concat(e.color||"inherit",";font-family:").concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";white-space:nowrap}")},root:"root_2rqW"}
class xi extends n["Component"]{constructor(e){super(e)
this.handleSavePlannerItem=e=>{this.handleCloseTray()
this.props.savePlannerItem(e)}
this.handleDeletePlannerItem=e=>{this.handleCloseTray()
this.props.deletePlannerItem(e)}
this.handleCloseTray=()=>{this.setUpdateItemTray(false)}
this.handleToggleTray=()=>{this.state.trayOpen?this.handleCloseTray():this.setUpdateItemTray(true)}
this.toggleAriaHiddenStuff=e=>{e?this.props.ariaHideElement.setAttribute("aria-hidden","true"):this.props.ariaHideElement.removeAttribute("aria-hidden")}
this.toggleGradesTray=()=>{this.state.gradesTrayOpen||this.props.loading.loadingGrades||this.props.loading.gradesLoaded||this.props.startLoadingGradesSaga()
this.setState({gradesTrayOpen:!this.state.gradesTrayOpen})}
this.handleTodayClick=()=>{this.props.scrollToToday&&this.props.scrollToToday()}
this.handleNewActivityClick=()=>{this.props.scrollToNewActivity()}
this.closeOpportunitiesDropdown=()=>{this._doToggleOpportunitiesDropdown(false)}
this.openOpportunitiesDropdown=()=>{this._doToggleOpportunitiesDropdown(true)}
this.toggleOpportunitiesDropdown=()=>{this._doToggleOpportunitiesDropdown(!this.state.opportunitiesOpen)}
this.opportunityTitle=()=>B("{\n        count, plural,\n        =0 {# opportunities}\n        one {# opportunity}\n        other {# opportunities}\n      }",{count:this.state.newOpportunities.length})
this.getTrayLabel=()=>{if(this.props.todo.updateTodoItem&&this.props.todo.updateTodoItem.title)return B("Edit {title}",{title:this.props.todo.updateTodoItem.title})
return B("Add To Do")}
const t=this.segregateOpportunities(e.opportunities),a=Object(J["a"])(t,2),s=a[0],n=a[1]
this.state={newOpportunities:s,dismissedOpportunities:n,trayOpen:false,gradesTrayOpen:false,opportunitiesOpen:false}}componentDidMount(){this.props.getInitialOpportunities()}componentWillReceiveProps(e){const t=this.segregateOpportunities(e.opportunities),a=Object(J["a"])(t,2),s=a[0],n=a[1]
e.loading.allOpportunitiesLoaded||e.loading.loadingOpportunities||e.getNextOpportunities()
this.props.todo.updateTodoItem!==e.todo.updateTodoItem&&this.setUpdateItemTray(!!e.todo.updateTodoItem)
this.setState({newOpportunities:s,dismissedOpportunities:n})}componentWillUpdate(){this.props.preTriggerDynamicUiUpdates()}componentDidUpdate(){this.props.todo.updateTodoItem&&this.toggleAriaHiddenStuff(this.state.trayOpen)
this.props.triggerDynamicUiUpdates()}segregateOpportunities(e){const t=[]
const a=[]
e.items.forEach(e=>{e.planner_override&&e.planner_override.dismissed?a.push(e):t.push(e)})
return[t,a]}setUpdateItemTray(e){e?this.props.openEditingPlannerItem&&this.props.openEditingPlannerItem():this.props.cancelEditingPlannerItem&&this.props.cancelEditingPlannerItem()
this.setState({trayOpen:e},()=>{this.toggleAriaHiddenStuff(this.state.trayOpen)})}_doToggleOpportunitiesDropdown(e){this.setState({opportunitiesOpen:!!e},()=>{this.toggleAriaHiddenStuff(this.state.opportunitiesOpen)
this.opportunitiesButton.focus()})}getPopupVerticalRoom(){const e=this.opportunitiesHtmlButton
if(e){const t=30
const a=250
const s=e.getBoundingClientRect()
const n=s.top+s.height
return Math.max(window.innerHeight-n-t,a)}return"none"}newActivityAboveView(){if(this.props.loading.isLoading)return false
if(!this.props.firstNewActivityDate)return false
const e=K(this.props.days,this.props.timeZone)
const t=e.isSame(this.props.firstNewActivityDate)||e.isBefore(this.props.firstNewActivityDate)
return!(t&&!this.props.ui.naiAboveScreen)}renderNewActivity(){return i.a.createElement(zn["a"],{mountNode:this.props.auxElement,open:this.newActivityAboveView()},i.a.createElement(wi,{id:this.props.stickyButtonId,direction:"up",onClick:this.handleNewActivityClick,zIndex:this.props.stickyZIndex,buttonRef:e=>this.newActivityButtonRef=e,className:"StickyButton-styles__newActivityButton",description:B("Scrolls up to the previous item with new activity.")},B("New Activity")))}renderToday(e){if(this.props.days.length>0)return i.a.createElement(oe["a"],{id:"planner-today-btn",variant:"light",margin:e,onClick:this.handleTodayClick},B("Today"))
return null}renderOpportunitiesButton(e){const t={margin:e,countUntil:100}
if(this.props.loading.allOpportunitiesLoaded&&this.state.newOpportunities.length){t.count=this.state.newOpportunities.length
t.formatOutput=e=>i.a.createElement(In["a"],{alt:this.opportunityTitle()},e)}else t.formatOutput=()=>i.a.createElement(In["a"],{alt:this.opportunityTitle()})
return i.a.createElement(he["a"],t,i.a.createElement(oe["a"],{onClick:this.toggleOpportunitiesDropdown,variant:"icon",icon:Nn["a"],ref:e=>{this.opportunitiesButton=e},buttonRef:e=>{this.opportunitiesHtmlButton=e}},i.a.createElement(ie["a"],null,B("opportunities popup"))))}render(){const e=this.getPopupVerticalRoom()
let t="medium"
"medium"===this.props.responsiveSize?t="small":"small"===this.props.responsiveSize&&(t="x-small")
const a="0 ".concat(t," 0 0")
return i.a.createElement("div",{className:"".concat(Di.root," PlannerHeader")},this.renderToday(a),i.a.createElement(oe["a"],{variant:"icon",icon:Mn["a"],margin:a,onClick:this.handleToggleTray,ref:e=>{this.addNoteBtn=e}},i.a.createElement(ie["a"],null,B("Add To Do"))),i.a.createElement(oe["a"],{variant:"icon",icon:Ln["a"],margin:a,onClick:this.toggleGradesTray},i.a.createElement(ie["a"],null,B("Show My Grades"))),i.a.createElement(Pn["a"],{onDismiss:this.closeOpportunitiesDropdown,show:this.state.opportunitiesOpen,on:"click",constrain:"window",placement:"bottom end"},i.a.createElement(Pn["a"].Trigger,null,this.renderOpportunitiesButton(a)),i.a.createElement(Pn["a"].Content,null,i.a.createElement(gi,{togglePopover:this.closeOpportunitiesDropdown,newOpportunities:this.state.newOpportunities,dismissedOpportunities:this.state.dismissedOpportunities,courses:this.props.courses,timeZone:this.props.timeZone,dismiss:this.props.dismissOpportunity,maxHeight:e}))),i.a.createElement(jn["a"],{open:this.state.trayOpen,label:this.getTrayLabel(),placement:"end",shouldContainFocus:true,shouldReturnFocus:false,onDismiss:this.handleCloseTray},i.a.createElement(Ns["a"],{placement:"start",variant:"icon",onClick:this.handleCloseTray},B("Close")),i.a.createElement(ei,{locale:this.props.locale,timeZone:this.props.timeZone,noteItem:this.props.todo.updateTodoItem,onSavePlannerItem:this.handleSavePlannerItem,onDeletePlannerItem:this.handleDeletePlannerItem,courses:this.props.courses})),i.a.createElement(jn["a"],{label:B("My Grades"),open:this.state.gradesTrayOpen,placement:"end",shouldContainFocus:true,shouldReturnFocus:true,onDismiss:this.toggleGradesTray},i.a.createElement(c["a"],{as:"div",padding:"large large medium"},i.a.createElement(Ns["a"],{placement:"start",variant:"icon",onClick:this.toggleGradesTray},B("Close")),i.a.createElement(bi,{courses:this.props.courses,loading:this.props.loading.loadingGrades,loadingError:this.props.loading.gradesLoadingError}))),this.renderNewActivity())}}xi.propTypes={courses:f.a.arrayOf(f.a.shape(y)).isRequired,savePlannerItem:f.a.func.isRequired,deletePlannerItem:f.a.func.isRequired,cancelEditingPlannerItem:f.a.func,openEditingPlannerItem:f.a.func,triggerDynamicUiUpdates:f.a.func,preTriggerDynamicUiUpdates:f.a.func,scrollToToday:f.a.func,scrollToNewActivity:f.a.func,locale:f.a.string.isRequired,timeZone:f.a.string.isRequired,opportunities:f.a.shape(E).isRequired,getInitialOpportunities:f.a.func.isRequired,getNextOpportunities:f.a.func.isRequired,dismissOpportunity:f.a.func.isRequired,clearUpdateTodo:f.a.func.isRequired,startLoadingGradesSaga:f.a.func.isRequired,firstNewActivityDate:fe["momentObj"],days:f.a.arrayOf(f.a.arrayOf(f.a.oneOfType([f.a.string,f.a.arrayOf(f.a.object)]))),ui:f.a.shape({naiAboveScreen:f.a.bool}),todo:f.a.shape({updateTodoItem:f.a.shape({title:f.a.string})}),stickyZIndex:f.a.number,loading:f.a.shape({isLoading:f.a.bool,allPastItemsLoaded:f.a.bool,allFutureItemsLoaded:f.a.bool,allOpportunitiesLoaded:f.a.bool,loadingOpportunities:f.a.bool,setFocusAfterLoad:f.a.bool,firstNewDayKey:f.a.object,futureNextUrl:f.a.string,pastNextUrl:f.a.string,seekingNewActivity:f.a.bool,loadingGrades:f.a.bool,gradesLoaded:f.a.bool,gradesLoadingError:f.a.string}).isRequired,ariaHideElement:f.a.instanceOf(Element).isRequired,auxElement:f.a.instanceOf(Element).isRequired,stickyButtonId:f.a.string.isRequired,responsiveSize:A}
xi.defaultProps={triggerDynamicUiUpdates:()=>{},preTriggerDynamicUiUpdates:()=>{},stickyZIndex:0,responsiveSize:"large"}
const Fi=Object(Hs["a"])()(xi)
const Si=Object(w["themeable"])(Ti,Di)(Fi)
const Oi=vs(Si)
const Bi=e=>{let t=e.opportunities,a=e.loading,s=e.courses,n=e.todo,i=e.days,r=e.timeZone,o=e.ui,d=e.firstNewActivityDate
return{opportunities:t,loading:a,courses:s,todo:n,days:i,timeZone:r,ui:o,firstNewActivityDate:d}}
const Ii={savePlannerItem:Qa,deletePlannerItem:$a,cancelEditingPlannerItem:ts,openEditingPlannerItem:Ua,getInitialOpportunities:Ya,getNextOpportunities:Ka,dismissOpportunity:Ja,clearUpdateTodo:Ha,startLoadingGradesSaga:Ht,scrollToToday:Wa,scrollToNewActivity:Va}
var zi=Object(d["connect"])(Bi,Ii)(Oi)
var Ni=a("q7Px")
const Mi=e=>{switch(e){case"Assignment":return i.a.createElement(de["a"],{label:B("Assignment"),className:"ToDoSidebarItem__Icon"})
case"Quiz":return i.a.createElement(le["a"],{label:B("Quiz"),className:"ToDoSidebarItem__Icon"})
case"Discussion":return i.a.createElement(ue["a"],{label:B("Discussion"),className:"ToDoSidebarItem__Icon"})
case"Announcement":return i.a.createElement(_e["a"],{label:B("Announcement"),className:"ToDoSidebarItem__Icon"})
case"Calendar Event":return i.a.createElement(me["a"],{label:B("Calendar Event"),className:"ToDoSidebarItem__Icon"})
case"Page":return i.a.createElement(ce["a"],{label:B("Page"),className:"ToDoSidebarItem__Icon"})
case"Peer Review":return i.a.createElement(ge["a"],{label:B("Peer Review"),className:"ToDoSidebarItem__Icon"})
default:return i.a.createElement(Ni["a"],{label:B("To Do"),className:"ToDoSidebarItem__Icon"})}}
const Li=(e,t)=>{const a=e.find(e=>e.id===t)
return a?a.shortName:""}
class Pi extends i.a.Component{constructor(){super(...arguments)
this.handleClick=()=>{this.props.handleDismissClick(this.props.item)}
this.getInformationRow=(e,t)=>{const a=[]
t&&a.push(i.a.createElement(Ms["a"].Item,{key:"points"},B("{numPoints} points",{numPoints:t})))
a.push(i.a.createElement(Ms["a"].Item,{key:"date"},W(e,this.props.timeZone)))
return a}}focus(){const e=this.linkRef||this.buttonRef
e&&e.focus()}itemTitle(){if("Peer Review"===this.props.item.type)return B("Peer Review for {itemTitle}",{itemTitle:this.props.item.title})
return this.props.item.title}render(){const e=i.a.createElement(D["a"],{size:"small",lineHeight:"fit"},this.itemTitle())
const t=this.props.item.html_url?i.a.createElement(oe["a"],{variant:"link",theme:{mediumPadding:"0",mediumHeight:"normal"},buttonRef:e=>{this.linkRef=e},href:this.props.item.html_url},e):i.a.createElement(D["a"],null,e)
return i.a.createElement("div",{className:"ToDoSidebarItem"},Mi(this.props.item.type),i.a.createElement("div",{className:"ToDoSidebarItem__Info"},i.a.createElement("div",{className:"ToDoSidebarItem__Title"},t),i.a.createElement(D["a"],{color:"secondary",size:"small",weight:"bold",lineHeight:"fit"},Li(this.props.courses,this.props.item.course_id)),i.a.createElement(Ms["a"],{variant:"inline",delimiter:"pipe",size:"small"},this.getInformationRow(this.props.item.date,this.props.item.points))),i.a.createElement("div",{className:"ToDoSidebarItem__Close"},i.a.createElement(Ns["a"],{variant:"icon",size:"small",onClick:this.handleClick,buttonRef:e=>{this.buttonRef=e}},B("Dismiss {itemTitle}",{itemTitle:this.props.item.title}))))}}Pi.propTypes={item:Object(p["shape"])({title:p["string"],html_url:p["string"],type:p["string"],course_id:p["string"],date:p["object"],points:p["number"]}),courses:Object(p["arrayOf"])(p["object"]).isRequired,handleDismissClick:p["func"].isRequired,timeZone:p["string"],locale:p["string"]}
class ji extends n["Component"]{constructor(e){super(e)
this.dismissedItemIndex=null
this.titleFocus=null
this.state={visibleToDos:this.getVisibleItems(e.items)}}componentDidMount(){this.props.sidebarLoadInitialItems(u.a.tz(this.props.timeZone).startOf("day"),this.props.forCourse)}componentWillReceiveProps(e){const t=this.getVisibleItems(e.items)
this.setState({visibleToDos:t})}componentDidUpdate(){if(null!=this.dismissedItemIndex){const e=this.dismissedItemIndex-1
this.dismissedItemIndex=null
e>=0?this.todoItemComponents[e].focus():this.titleFocus.focus()}}getVisibleItems(e){const t=e=>{if(!e)return false
return!e.completed}
return e.filter(t).slice(0,7)}handleDismissClick(e,t){this.dismissedItemIndex=e
this.props.sidebarCompleteItem(t).catch(()=>{this.dismissedItemIndex=null})}renderShowAll(){if(this.props.changeDashboardView&&this.state.visibleToDos.length>0)return i.a.createElement(c["a"],{as:"div",textAlign:"center"},i.a.createElement(oe["a"],{variant:"link",onClick:()=>this.props.changeDashboardView("planner")},B("Show All")))
return null}renderItems(){var e=this
this.todoItemComponents=[]
if(0===this.state.visibleToDos.length)return i.a.createElement(D["a"],{size:"small"},B("Nothing for now"))
return i.a.createElement(Ms["a"],{id:"planner-todosidebar-item-list",variant:"unstyled"},this.state.visibleToDos.map((t,a)=>i.a.createElement(Ms["a"].Item,{key:t.uniqueId},i.a.createElement(Pi,{ref:e=>{this.todoItemComponents[a]=e},item:t,courses:this.props.courses,handleDismissClick:function(){return e.handleDismissClick(a,t)},locale:this.props.locale,timeZone:this.props.timeZone}))))}render(){if(!this.props.loaded)return i.a.createElement("div",null,i.a.createElement("h2",{className:"todo-list-header"},B("To Do")),i.a.createElement(c["a"],{as:"div",textAlign:"center"},i.a.createElement(g["a"],{renderTitle:()=>B("To Do Items Loading"),size:"small"})))
return i.a.createElement("div",null,i.a.createElement("h2",{className:"todo-list-header"},i.a.createElement("span",{tabIndex:"-1",ref:e=>{this.titleFocus=e}},B("To Do"))),this.renderItems(),this.renderShowAll())}}ji.propTypes={sidebarLoadInitialItems:p["func"].isRequired,sidebarCompleteItem:p["func"].isRequired,items:Object(p["arrayOf"])(p["object"]).isRequired,loaded:p["bool"],courses:Object(p["arrayOf"])(p["object"]).isRequired,timeZone:p["string"],locale:p["string"],changeDashboardView:p["func"],forCourse:p["string"]}
ji.defaultProps={loaded:false,timeZone:u.a.tz.guess(),locale:"en",forCourse:void 0}
const Ri=e=>({items:e.sidebar.items,loaded:e.sidebar.loaded})
const qi={sidebarLoadInitialItems:Da,sidebarCompleteItem:xa}
var Hi=Object(d["connect"])(Ri,qi)(ji)
var Ui=a("xddP")
var Xi=a("tlvh")
var Vi=a("j5e4")
var Wi=a("+++G")
var Gi=a("fb6b")
var Zi=a("lk7d")
var Ki=a("ZfiP")
var Yi=a("RIKZ")
var Ji=a("cfpB")
var Qi=a("GuGJ")
var $i=a("XFP0")
var er=a("Qy3X")
var tr=a("Zw44")
var ar=a("6ZhF")
var sr=a("8B8r")
var nr=a("zCJu")
var ir=a("dmIv")
var rr=a("GCD2")
var or=a("cN8Q")
var dr=a("QAOc")
var lr=a("3g0Q")
var ur=a("yWea")
var _r=a("DVSf")
var mr=a("jJkS")
var cr=a("iSlJ")
var gr=a("MH7q")
var pr=a("ajcJ")
var fr=a("W9UN")
var hr=a("Fh4z")
var br=a("YKwf")
var yr=a("O92E")
var vr=a.n(yr)
var Er=a("CpOe")
var Ar=a.n(Er)
var Cr=a("5UaS")
const kr=["(╯°□°）╯︵","(ﾉಥ益ಥ）ﾉ","(ノಠ益ಠ)ノ彡","(J °O°)J ","(ノ ゜Д゜)ノ ︵","(╯'□')╯︵","ʕノ•ᴥ•ʔノ","┗[© ♒ ©]┛ ︵"]
const wr=["︵ヽ(`Д´)ﾉ"," /(.□. \\）","︵ ~ (._.)"," ( \\o°o)\\"," ლ(⌒-⌒ლ)"]
const Tr={a:"ɐ",b:"q",c:"ɔ",d:"p",e:"ǝ",f:"ɟ",g:"ƃ",h:"ɥ",i:"ᴉ",j:"ɾ",k:"ʞ",m:"ɯ",n:"u",r:"ɹ",t:"ʇ",v:"ʌ",w:"ʍ",y:"ʎ",A:"∀",C:"Ɔ",E:"Ǝ",F:"Ⅎ",G:"פ",H:"H",I:"I",J:"ſ",L:"˥",M:"W",N:"N",P:"Ԁ",T:"┴",U:"∩",V:"Λ",Y:"⅄",1:"Ɩ",2:"ᄅ",3:"Ɛ",4:"ㄣ",5:"ϛ",6:"9",7:"ㄥ",8:"8",9:"6",0:"0",".":"˙",",":"'",'"':",,","`":",","?":"¿","!":"¡","[":"]","(":")","{":"}","<":">","&":"⅋",_:"‾","∴":"∵","⁅":"⁆"}
Object.keys(Tr).forEach(e=>{Tr[Tr[e]]=e})
function Dr(e){const t=vr()(e).map(Fr).reverse()
let a=String(e).length%(kr.length+wr.length)
if(a<kr.length)t.unshift(kr[a])
else{a-=kr.length
t.push(wr[a])}return Ar()(t)}function xr(e){1===Object.keys(e).length&&(e=e[Object.keys(e)[0]])
return Object.keys(e).reduce((t,a)=>{t[a]={message:Dr(e[a].message||e[a])}
return t},{})}function Fr(e){if("string"===typeof e)return Or(e)
const t=e[1]
if("plural"===t||"selectordinal"===t){e=e.slice()
e[3]=Sr(e[3])}else if("select"===t){e=e.slice()
e[2]=Sr(e[2])}return e}function Sr(e){const t={}
Object.keys(e).forEach(a=>{t[a]=e[a].map(Fr).reverse()})
return t}function Or(e){return Object(Cr["reverse"])(e).split("").map(e=>Tr[e]||e).join("")}var Br={enflip:xr(Ki),ar:Ui,da:Xi,de:Vi,el:Wi,"en-au":Gi,"en-gb":Zi,en:Ki,es:Yi,"fa-ir":Ji,"fr-ca":Qi,fr:$i,he:er,ht:tr,hu:ar,hy:sr,it:nr,ja:ir,ko:rr,mi:or,nl:dr,nn:lr,pl:ur,"pt-br":_r,pt:mr,ru:cr,sv:gr,tr:pr,"uk-ua":fr,"zh-cn":hr,"zh-tw":br}
var Ir={init:function(e){document.documentElement.lang=e
B.setup({locale:e,missingTranslation:"ignore",translations:Br,generateId:a("syYy")})}}
var zr=a("ANjH")
var Nr=a("sINF")
var Mr=a("2QeP")
var Lr=a.n(Mr)
var Pr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]
for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}
var jr="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
var Rr=function(e){return"@@redux-saga/"+e}
var qr=Rr("TASK")
var Hr=Rr("HELPER")
var Ur=Rr("MATCH")
var Xr=Rr("CANCEL_PROMISE")
var Vr=Rr("SAGA_ACTION")
var Wr=Rr("SELF_CANCELLATION")
var Gr=function(e){return function(){return e}}
var Zr=Gr(true)
var Kr=function(){}
var Yr=function(e){return e}
function Jr(e,t,a){if(!t(e)){_o("error","uncaught at check",a)
throw new Error(a)}}var Qr=Object.prototype.hasOwnProperty
function $r(e,t){return eo.notUndef(e)&&Qr.call(e,t)}var eo={undef:function(e){return null===e||void 0===e},notUndef:function(e){return null!==e&&void 0!==e},func:function(e){return"function"===typeof e},number:function(e){return"number"===typeof e},string:function(e){return"string"===typeof e},array:Array.isArray,object:function(e){return e&&!eo.array(e)&&"object"===("undefined"===typeof e?"undefined":jr(e))},promise:function(e){return e&&eo.func(e.then)},iterator:function(e){return e&&eo.func(e.next)&&eo.func(e.throw)},iterable:function(e){return e&&eo.func(Symbol)?eo.func(e[Symbol.iterator]):eo.array(e)},task:function(e){return e&&e[qr]},observable:function(e){return e&&eo.func(e.subscribe)},buffer:function(e){return e&&eo.func(e.isEmpty)&&eo.func(e.take)&&eo.func(e.put)},pattern:function(e){return e&&(eo.string(e)||"symbol"===("undefined"===typeof e?"undefined":jr(e))||eo.func(e)||eo.array(e))},channel:function(e){return e&&eo.func(e.take)&&eo.func(e.close)},helper:function(e){return e&&e[Hr]},stringableFunc:function(e){return eo.func(e)&&$r(e,"toString")}}
var to={assign:function(e,t){for(var a in t)$r(t,a)&&(e[a]=t[a])}}
function ao(e,t){var a=e.indexOf(t)
a>=0&&e.splice(a,1)}var so={from:function(e){var t=Array(e.length)
for(var a in e)$r(e,a)&&(t[a]=e[a])
return t}}
function no(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
var t=Pr({},e)
var a=new Promise((function(e,a){t.resolve=e
t.reject=a}))
t.promise=a
return t}function io(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0
return function(){return++e}}var ro=io()
var oo=function(e){throw e}
var lo=function(e){return{value:e,done:true}}
function uo(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:oo
var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:""
var s=arguments[3]
var n={name:a,next:e,throw:t,return:lo}
s&&(n[Hr]=true)
"undefined"!==typeof Symbol&&(n[Symbol.iterator]=function(){return n})
return n}function _o(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:""
"undefined"===typeof window?console.log("redux-saga "+e+": "+t+"\n"+(a&&a.stack||a)):console[e](t,a)}function mo(e,t){return function(){false
return e.apply(void 0,arguments)}}var co=function(e,t){return e+" has been deprecated in favor of "+t+", please update your code"}
var go=function(e){return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: "+e+"\n")}
var po=function(e,t){return(e?e+".":"")+"setContext(props): argument "+t+" is not a plain object"}
var fo=function(e){return function(t){return e(Object.defineProperty(t,Vr,{value:true}))}}
var ho="Channel's Buffer overflow!"
var bo=1
var yo=2
var vo=3
var Eo=4
var Ao={isEmpty:Zr,put:Kr,take:Kr}
function Co(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10
var t=arguments[1]
var a=new Array(e)
var s=0
var n=0
var i=0
var r=function(t){a[n]=t
n=(n+1)%e
s++}
var o=function(){if(0!=s){var t=a[i]
a[i]=null
s--
i=(i+1)%e
return t}}
var d=function(){var e=[]
while(s)e.push(o())
return e}
return{isEmpty:function(){return 0==s},put:function(o){if(s<e)r(o)
else{var l=void 0
switch(t){case bo:throw new Error(ho)
case vo:a[n]=o
n=(n+1)%e
i=n
break
case Eo:l=2*e
a=d()
s=a.length
n=a.length
i=0
a.length=l
e=l
r(o)}}},take:o,flush:d}}var ko={none:function(){return Ao},fixed:function(e){return Co(e,bo)},dropping:function(e){return Co(e,yo)},sliding:function(e){return Co(e,vo)},expanding:function(e){return Co(e,Eo)}}
var wo=[]
var To=0
function Do(e){try{Fo()
e()}finally{So()}}function xo(e){wo.push(e)
if(!To){Fo()
Oo()}}function Fo(){To++}function So(){To--}function Oo(){So()
var e=void 0
while(!To&&void 0!==(e=wo.shift()))Do(e)}var Bo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]
for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}
var Io="@@redux-saga/CHANNEL_END"
var zo={type:Io}
var No=function(e){return e&&e.type===Io}
function Mo(){var e=[]
function t(t){e.push(t)
return function(){return ao(e,t)}}function a(t){var a=e.slice()
for(var s=0,n=a.length;s<n;s++)a[s](t)}return{subscribe:t,emit:a}}var Lo="invalid buffer passed to channel factory function"
var Po="Saga was provided with an undefined action"
false
function jo(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ko.fixed()
var t=false
var a=[]
Jr(e,eo.buffer,Lo)
function s(){if(t&&a.length)throw go("Cannot have a closed channel with pending takers")
if(a.length&&!e.isEmpty())throw go("Cannot have pending takers with non empty buffer")}function n(n){s()
Jr(n,eo.notUndef,Po)
if(t)return
if(!a.length)return e.put(n)
for(var i=0;i<a.length;i++){var r=a[i]
if(!r[Ur]||r[Ur](n)){a.splice(i,1)
return r(n)}}}function i(n){s()
Jr(n,eo.func,"channel.take's callback must be a function")
if(t&&e.isEmpty())n(zo)
else if(e.isEmpty()){a.push(n)
n.cancel=function(){return ao(a,n)}}else n(e.take())}function r(a){s()
Jr(a,eo.func,"channel.flush' callback must be a function")
if(t&&e.isEmpty()){a(zo)
return}a(e.flush())}function o(){s()
if(!t){t=true
if(a.length){var e=a
a=[]
for(var n=0,i=e.length;n<i;n++)e[n](zo)}}}return{take:i,put:n,flush:r,close:o,get __takers__(){return a},get __closed__(){return t}}}function Ro(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ko.none()
var a=arguments[2]
arguments.length>2&&Jr(a,eo.func,"Invalid match function passed to eventChannel")
var s=jo(t)
var n=function(){if(!s.__closed__){i&&i()
s.close()}}
var i=e((function(e){if(No(e)){n()
return}if(a&&!a(e))return
s.put(e)}))
s.__closed__&&i()
if(!eo.func(i))throw new Error("in eventChannel: subscribe should return a function to unsubscribe")
return{take:s.take,flush:s.flush,close:n}}function qo(e){var t=Ro((function(t){return e((function(e){if(e[Vr]){t(e)
return}xo((function(){return t(e)}))}))}))
return Bo({},t,{take:function(e,a){if(arguments.length>1){Jr(a,eo.func,"channel.take's matcher argument must be a function")
e[Ur]=a}t.take(e)}})}var Ho=Rr("IO")
var Uo="TAKE"
var Xo="PUT"
var Vo="ALL"
var Wo="RACE"
var Go="CALL"
var Zo="CPS"
var Ko="FORK"
var Yo="JOIN"
var Jo="CANCEL"
var Qo="SELECT"
var $o="ACTION_CHANNEL"
var ed="CANCELLED"
var td="FLUSH"
var ad="GET_CONTEXT"
var sd="SET_CONTEXT"
var nd=function(e,t){var a
return a={},a[Ho]=true,a[e]=t,a}
function id(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"*"
arguments.length&&Jr(arguments[0],eo.notUndef,"take(patternOrChannel): patternOrChannel is undefined")
if(eo.pattern(e))return nd(Uo,{pattern:e})
if(eo.channel(e))return nd(Uo,{channel:e})
throw new Error("take(patternOrChannel): argument "+String(e)+" is not valid channel or a valid pattern")}id.maybe=function(){var e=id.apply(void 0,arguments)
e[Uo].maybe=true
return e}
id.maybe
function rd(e,t){if(arguments.length>1){Jr(e,eo.notUndef,"put(channel, action): argument channel is undefined")
Jr(e,eo.channel,"put(channel, action): argument "+e+" is not a valid channel")
Jr(t,eo.notUndef,"put(channel, action): argument action is undefined")}else{Jr(e,eo.notUndef,"put(action): argument action is undefined")
t=e
e=null}return nd(Xo,{channel:e,action:t})}rd.resolve=function(){var e=rd.apply(void 0,arguments)
e[Xo].resolve=true
return e}
rd.sync=mo(rd.resolve,co("put.sync","put.resolve"))
function od(e){return nd(Vo,e)}function dd(e,t,a){Jr(t,eo.notUndef,e+": argument fn is undefined")
var s=null
if(eo.array(t)){var n=t
s=n[0]
t=n[1]}else if(t.fn){var i=t
s=i.context
t=i.fn}s&&eo.string(t)&&eo.func(s[t])&&(t=s[t])
Jr(t,eo.func,e+": argument "+t+" is not a function")
return{context:s,fn:t,args:a}}function ld(e){for(var t=arguments.length,a=Array(t>1?t-1:0),s=1;s<t;s++)a[s-1]=arguments[s]
return nd(Go,dd("call",e,a))}function ud(e){for(var t=arguments.length,a=Array(t>1?t-1:0),s=1;s<t;s++)a[s-1]=arguments[s]
return nd(Ko,dd("fork",e,a))}function _d(e){for(var t=arguments.length,a=Array(t>1?t-1:0),s=1;s<t;s++)a[s-1]=arguments[s]
if(0===arguments.length)e=Yr
else{Jr(e,eo.notUndef,"select(selector,[...]): argument selector is undefined")
Jr(e,eo.func,"select(selector,[...]): argument "+e+" is not a function")}return nd(Qo,{selector:e,args:a})}var md=function(e){return function(t){return t&&t[Ho]&&t[e]}}
var cd={take:md(Uo),put:md(Xo),all:md(Vo),race:md(Wo),call:md(Go),cps:md(Zo),fork:md(Ko),join:md(Yo),cancel:md(Jo),select:md(Qo),actionChannel:md($o),cancelled:md(ed),flush:md(td),getContext:md(ad),setContext:md(sd)}
var gd=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]
for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}
var pd="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
function fd(e,t){for(var a in t){var s=t[a]
s.configurable=s.enumerable=true
"value"in s&&(s.writable=true)
Object.defineProperty(e,a,s)}return e}var hd="proc first argument (Saga function result) must be an iterator"
var bd={toString:function(){return"@@redux-saga/CHANNEL_END"}}
var yd={toString:function(){return"@@redux-saga/TASK_CANCEL"}}
var vd={wildcard:function(){return Zr},default:function(e){return"symbol"===("undefined"===typeof e?"undefined":pd(e))?function(t){return t.type===e}:function(t){return t.type===String(e)}},array:function(e){return function(t){return e.some((function(e){return Ed(e)(t)}))}},predicate:function(e){return function(t){return e(t)}}}
function Ed(e){return("*"===e?vd.wildcard:eo.array(e)?vd.array:eo.stringableFunc(e)?vd.default:eo.func(e)?vd.predicate:vd.default)(e)}function Ad(e,t,a){var s=[],n=void 0,i=false
o(t)
function r(e){d()
a(e,true)}function o(e){s.push(e)
e.cont=function(o,d){if(i)return
ao(s,e)
e.cont=Kr
if(d)r(o)
else{e===t&&(n=o)
if(!s.length){i=true
a(n)}}}}function d(){if(i)return
i=true
s.forEach((function(e){e.cont=Kr
e.cancel()}))
s=[]}return{addTask:o,cancelAll:d,abort:r,getTasks:function(){return s},taskNames:function(){return s.map((function(e){return e.name}))}}}function Cd(e){var t=e.context,a=e.fn,s=e.args
if(eo.iterator(a))return a
var n=void 0,i=void 0
try{n=a.apply(t,s)}catch(e){i=e}if(eo.iterator(n))return n
return uo(i?function(){throw i}:(r=void 0,o={done:false,value:n},d=function(e){return{done:true,value:e}},function(e){if(r)return d(e)
r=true
return o}))
var r,o,d}var kd=function(e){return{fn:e}}
function wd(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return Kr}
var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Kr
var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Kr
var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{}
var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{}
var r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0
var o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"anonymous"
var d=arguments[8]
Jr(e,eo.iterator,hd)
var l="[...effects]"
var u=mo(N,co(l,"all("+l+")"))
var _=i.sagaMonitor,m=i.logger,c=i.onError
var g=m||_o
var p=function(e){var t=e.sagaStack
!t&&e.stack&&(t=-1!==e.stack.split("\n")[0].indexOf(e.message)?e.stack:"Error: "+e.message+"\n"+e.stack)
g("error","uncaught at "+o,t||e.message||e)}
var f=qo(t)
var h=Object.create(n)
C.cancel=Kr
var b=U(r,o,e,d)
var y={name:o,cancel:E,isRunning:true}
var v=Ad(o,y,k)
function E(){if(y.isRunning&&!y.isCancelled){y.isCancelled=true
C(yd)}}function A(){if(e._isRunning&&!e._isCancelled){e._isCancelled=true
v.cancelAll()
k(yd)}}d&&(d.cancel=A)
e._isRunning=true
C()
return b
function C(t,a){if(!y.isRunning)throw new Error("Trying to resume an already finished generator")
try{var s=void 0
if(a)s=e.throw(t)
else if(t===yd){y.isCancelled=true
C.cancel()
s=eo.func(e.return)?e.return(yd):{done:true,value:yd}}else s=t===bd?eo.func(e.return)?e.return():{done:true}:e.next(t)
if(s.done){y.isMainRunning=false
y.cont&&y.cont(s.value)}else w(s.value,r,"",C)}catch(e){y.isCancelled&&p(e)
y.isMainRunning=false
y.cont(e,true)}}function k(t,a){e._isRunning=false
f.close()
if(a){t instanceof Error&&Object.defineProperty(t,"sagaStack",{value:"at "+o+" \n "+(t.sagaStack||t.stack),configurable:true})
b.cont||(t instanceof Error&&c?c(t):p(t))
e._error=t
e._isAborted=true
e._deferredEnd&&e._deferredEnd.reject(t)}else{e._result=t
e._deferredEnd&&e._deferredEnd.resolve(t)}b.cont&&b.cont(t,a)
b.joiners.forEach((function(e){return e.cb(t,a)}))
b.joiners=null}function w(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:""
var s=arguments[3]
var n=ro()
_&&_.effectTriggered({effectId:n,parentEffectId:t,label:a,effect:e})
var i=void 0
function r(e,t){if(i)return
i=true
s.cancel=Kr
_&&(t?_.effectRejected(n,e):_.effectResolved(n,e))
s(e,t)}r.cancel=Kr
s.cancel=function(){if(i)return
i=true
try{r.cancel()}catch(e){p(e)}r.cancel=Kr
_&&_.effectCancelled(n)}
var d=void 0
return eo.promise(e)?T(e,r):eo.helper(e)?B(kd(e),n,r):eo.iterator(e)?D(e,n,o,r):eo.array(e)?u(e,n,r):(d=cd.take(e))?x(d,r):(d=cd.put(e))?F(d,r):(d=cd.all(e))?N(d,n,r):(d=cd.race(e))?M(d,n,r):(d=cd.call(e))?S(d,n,r):(d=cd.cps(e))?O(d,r):(d=cd.fork(e))?B(d,n,r):(d=cd.join(e))?I(d,r):(d=cd.cancel(e))?z(d,r):(d=cd.select(e))?L(d,r):(d=cd.actionChannel(e))?P(d,r):(d=cd.flush(e))?R(d,r):(d=cd.cancelled(e))?j(d,r):(d=cd.getContext(e))?q(d,r):(d=cd.setContext(e))?H(d,r):r(e)}function T(e,t){var a=e[Xr]
eo.func(a)?t.cancel=a:eo.func(e.abort)&&(t.cancel=function(){return e.abort()})
e.then(t,(function(e){return t(e,true)}))}function D(e,n,r,o){wd(e,t,a,s,h,i,n,r,o)}function x(e,t){var a=e.channel,s=e.pattern,n=e.maybe
a=a||f
var i=function(e){return e instanceof Error?t(e,true):No(e)&&!n?t(bd):t(e)}
try{a.take(i,Ed(s))}catch(e){return t(e,true)}t.cancel=i.cancel}function F(e,t){var s=e.channel,n=e.action,i=e.resolve
xo((function(){var e=void 0
try{e=(s?s.put:a)(n)}catch(e){if(s||i)return t(e,true)
p(e)}if(!i||!eo.promise(e))return t(e)
T(e,t)}))}function S(e,t,a){var s=e.context,n=e.fn,i=e.args
var r=void 0
try{r=n.apply(s,i)}catch(e){return a(e,true)}return eo.promise(r)?T(r,a):eo.iterator(r)?D(r,t,n.name,a):a(r)}function O(e,t){var a=e.context,s=e.fn,n=e.args
try{var i=function(e,a){return eo.undef(e)?t(a):t(e,true)}
s.apply(a,n.concat(i))
i.cancel&&(t.cancel=function(){return i.cancel()})}catch(e){return t(e,true)}}function B(e,n,r){var o=e.context,d=e.fn,l=e.args,u=e.detached
var _=Cd({context:o,fn:d,args:l})
try{Fo()
var m=wd(_,t,a,s,h,i,n,d.name,u?null:Kr)
if(u)r(m)
else if(_._isRunning){v.addTask(m)
r(m)}else _._error?v.abort(_._error):r(m)}finally{Oo()}}function I(e,t){if(e.isRunning()){var a={task:b,cb:t}
t.cancel=function(){return ao(e.joiners,a)}
e.joiners.push(a)}else e.isAborted()?t(e.error(),true):t(e.result())}function z(e,t){e===Wr&&(e=b)
e.isRunning()&&e.cancel()
t()}function N(e,t,a){var s=Object.keys(e)
if(!s.length)return a(eo.array(e)?[]:{})
var n=0
var i=void 0
var r={}
var o={}
function d(){if(n===s.length){i=true
a(eo.array(e)?so.from(gd({},r,{length:s.length})):r)}}s.forEach((function(e){var t=function(t,s){if(i)return
if(s||No(t)||t===bd||t===yd){a.cancel()
a(t,s)}else{r[e]=t
n++
d()}}
t.cancel=Kr
o[e]=t}))
a.cancel=function(){if(!i){i=true
s.forEach((function(e){return o[e].cancel()}))}}
s.forEach((function(a){return w(e[a],t,a,o[a])}))}function M(e,t,a){var s=void 0
var n=Object.keys(e)
var i={}
n.forEach((function(t){var r=function(i,r){if(s)return
if(r){a.cancel()
a(i,true)}else if(!No(i)&&i!==bd&&i!==yd){var o
a.cancel()
s=true
var d=(o={},o[t]=i,o)
a(eo.array(e)?[].slice.call(gd({},d,{length:n.length})):d)}}
r.cancel=Kr
i[t]=r}))
a.cancel=function(){if(!s){s=true
n.forEach((function(e){return i[e].cancel()}))}}
n.forEach((function(a){if(s)return
w(e[a],t,a,i[a])}))}function L(e,t){var a=e.selector,n=e.args
try{var i=a.apply(void 0,[s()].concat(n))
t(i)}catch(e){t(e,true)}}function P(e,a){var s=e.pattern,n=e.buffer
var i=Ed(s)
i.pattern=s
a(Ro(t,n||ko.fixed(),i))}function j(e,t){t(!!y.isCancelled)}function R(e,t){e.flush(t)}function q(e,t){t(h[e])}function H(e,t){to.assign(h,e)
t()}function U(e,t,a,s){var n,i,r
a._deferredEnd=null
return i={},i[qr]=true,i.id=e,i.name=t,n="done",r={},r[n]=r[n]||{},r[n].get=function(){if(a._deferredEnd)return a._deferredEnd.promise
var e=no()
a._deferredEnd=e
a._isRunning||(a._error?e.reject(a._error):e.resolve(a._result))
return e.promise},i.cont=s,i.joiners=[],i.cancel=A,i.isRunning=function(){return a._isRunning},i.isCancelled=function(){return a._isCancelled},i.isAborted=function(){return a._isAborted},i.result=function(){return a._result},i.error=function(){return a._error},i.setContext=function(e){Jr(e,eo.object,po("task",e))
to.assign(h,e)},fd(i,r),i}}var Td="runSaga(storeInterface, saga, ...args)"
var Dd=Td+": saga argument must be a Generator function!"
function xd(e,t){for(var a=arguments.length,s=Array(a>2?a-2:0),n=2;n<a;n++)s[n-2]=arguments[n]
var i=void 0
if(eo.iterator(e)){false
i=e
e=t}else{Jr(t,eo.func,Dd)
i=t.apply(void 0,s)
Jr(i,eo.iterator,Dd)}var r=e,o=r.subscribe,d=r.dispatch,l=r.getState,u=r.context,_=r.sagaMonitor,m=r.logger,c=r.onError
var g=ro()
if(_){_.effectTriggered=_.effectTriggered||Kr
_.effectResolved=_.effectResolved||Kr
_.effectRejected=_.effectRejected||Kr
_.effectCancelled=_.effectCancelled||Kr
_.actionDispatched=_.actionDispatched||Kr
_.effectTriggered({effectId:g,root:true,parentEffectId:0,effect:{root:true,saga:t,args:s}})}var p=wd(i,o,fo(d),l,u,{sagaMonitor:_,logger:m,onError:c},g,t.name)
_&&_.effectResolved(g,p)
return p}function Fd(e,t){var a={}
for(var s in e){if(t.indexOf(s)>=0)continue
if(!Object.prototype.hasOwnProperty.call(e,s))continue
a[s]=e[s]}return a}function Sd(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
var t=e.context,a=void 0===t?{}:t,s=Fd(e,["context"])
var n=s.sagaMonitor,i=s.logger,r=s.onError
if(eo.func(s))throw new Error("Saga middleware no longer accept Generator functions. Use sagaMiddleware.run instead")
if(i&&!eo.func(i))throw new Error("`options.logger` passed to the Saga middleware is not a function!")
false
if(r&&!eo.func(r))throw new Error("`options.onError` passed to the Saga middleware is not a function!")
if(s.emitter&&!eo.func(s.emitter))throw new Error("`options.emitter` passed to the Saga middleware is not a function!")
function o(e){var t=e.getState,d=e.dispatch
var l=Mo()
l.emit=(s.emitter||Yr)(l.emit)
o.run=xd.bind(null,{context:a,subscribe:l.subscribe,dispatch:d,getState:t,sagaMonitor:n,logger:i,onError:r})
return function(e){return function(t){n&&n.actionDispatched&&n.actionDispatched(t)
var a=e(t)
l.emit(t)
return a}}}o.run=function(){throw new Error("Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware")}
o.setContext=function(e){Jr(e,eo.object,po("sagaMiddleware",e))
to.assign(a,e)}
return o}var Od={done:true,value:void 0}
var Bd={}
function Id(e){return eo.channel(e)?"channel":Array.isArray(e)?String(e.map((function(e){return String(e)}))):String(e)}function zd(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"iterator"
var s=void 0,n=t
function i(t,a){if(n===Bd)return Od
if(a){n=Bd
throw a}s&&s(t)
var i=e[n](),r=i[0],o=i[1],d=i[2]
n=r
s=d
return n===Bd?Od:o}return uo(i,(function(e){return i(null,e)}),a,true)}function Nd(e,t){for(var a=arguments.length,s=Array(a>2?a-2:0),n=2;n<a;n++)s[n-2]=arguments[n]
var i={done:false,value:id(e)}
var r=function(e){return{done:false,value:ud.apply(void 0,[t].concat(s,[e]))}}
var o=void 0,d=function(e){return o=e}
return zd({q1:function(){return["q2",i,d]},q2:function(){return o===zo?[Bd]:["q1",r(o)]}},"q1","takeEvery("+Id(e)+", "+t.name+")")}function Md(e,t){for(var a=arguments.length,s=Array(a>2?a-2:0),n=2;n<a;n++)s[n-2]=arguments[n]
return ud.apply(void 0,[Nd,e,t].concat(s))}var Ld=Sd
var Pd=a("/TnQ")
var jd=a("M/8B")
var Rd=a("e7SQ")
function qd(e,t){if(t.error)return e
return He(e,t.payload)}var Hd=Object(Rd["a"])({GOT_DAYS_SUCCESS:(e,t)=>Be(e,t.payload.internalDays),DELETED_PLANNER_ITEM:qd},[])
function Ud(e,t){return Object(s["a"])({},e,{isLoading:false,loadingPast:false,loadingFuture:false,loadingError:void 0},t)}function Xd(e){const t=e.payload.response
if(null==t)return null
return bt(t)}function Vd(e,t){const a={}
const s=Xd(t)
if(e.isLoading||e.loadingFuture){a.futureNextUrl=s
null==s&&(a.allFutureItemsLoaded=true)}if(e.loadingPast){a.pastNextUrl=s
null==s&&(a.allPastItemsLoaded=true)}return a}function Wd(e,t){const a={seekingNewActivity:false,plannerLoaded:true}
a.partialPastDays=Ue(e.partialPastDays,t.payload.internalDays)
a.partialFutureDays=Ue(e.partialFutureDays,t.payload.internalDays)
return Ud(e,a)}function Gd(e,t){const a=Vd(e,t)
return Object(s["a"])({},e,{},a,{partialPastDays:Be(e.partialPastDays,t.payload.internalDays)})}function Zd(e,t){const a=Vd(e,t)
return Object(s["a"])({},e,{},a,{partialFutureDays:Be(e.partialFutureDays,t.payload.internalDays)})}function Kd(e,t){const a=t.payload.message||t.payload
return Ud(e,{loadingError:a})}var Yd=Object(Rd["a"])({GOT_DAYS_SUCCESS:Wd,GOT_ITEMS_ERROR:Kd,GOT_PARTIAL_PAST_DAYS:Gd,GOT_PARTIAL_FUTURE_DAYS:Zd,START_LOADING_OPPORTUNITIES:(e,t)=>Object(s["a"])({},e,{loadingOpportunities:true}),START_LOADING_ITEMS:(e,t)=>Ud(e,{isLoading:true}),GETTING_PAST_ITEMS:(e,t)=>Ud(e,{loadingError:e.loadingError,loadingPast:true,seekingNewActivity:t.payload.seekingNewActivity}),PEEKED_INTO_PAST:(e,t)=>Ud(e,{hasSomeItems:t.payload.hasSomeItems,allPastItemsLoaded:!t.payload.hasSomeItems,isLoading:e.isLoading}),GETTING_FUTURE_ITEMS:(e,t)=>Ud(e,{loadingError:e.loadingError,loadingFuture:true}),DELETED_PLANNER_ITEM:(e,t)=>Ud(e,{hasSomeItems:false}),SAVED_PLANNER_ITEM:(e,t)=>Ud(e,{hasSomeItems:true}),ALL_FUTURE_ITEMS_LOADED:(e,t)=>Ud(e,{allFutureItemsLoaded:true}),ALL_OPPORTUNITIES_LOADED:(e,t)=>Object(s["a"])({},e,{loadingOpportunities:false,allOpportunitiesLoaded:true}),ALL_PAST_ITEMS_LOADED:(e,t)=>Ud(e,{allPastItemsLoaded:true}),ADD_OPPORTUNITIES:(e,t)=>Object(s["a"])({},e,{loadingOpportunities:false}),START_LOADING_GRADES_SAGA:(e,t)=>Object(s["a"])({},e,{loadingGrades:true,gradesLoadingError:null}),GOT_GRADES_SUCCESS:(e,t)=>Object(s["a"])({},e,{loadingGrades:false,gradesLoaded:true,gradesLoadingError:null}),GOT_GRADES_ERROR:(e,t)=>Object(s["a"])({},e,{loadingGrades:false,gradesLoaded:false,gradesLoadingError:t.payload.message})},Ud({},{isLoading:false,loadingPast:false,loadingFuture:false,plannerLoaded:false,allPastItemsLoaded:false,allFutureItemsLoaded:false,allOpportunitiesLoaded:false,loadingOpportunities:false,futureNextUrl:null,pastNextUrl:null,seekingNewActivity:false,partialPastDays:[],partialFutureDays:[],hasSomeItems:null,loadingGrades:false,gradesLoaded:false,gradesLoadingError:null}))
function Jd(e,t){const a=t.payload
return e.map(e=>{const t=Object(s["a"])({},e,{},a[e.id])
delete t.courseId
return t})}var Qd=Object(Rd["a"])({INITIAL_OPTIONS:(e,t)=>t.payload.env.STUDENT_PLANNER_COURSES,GOT_GRADES_SUCCESS:Jd},[])
var $d=Object(Rd["a"])({INITIAL_OPTIONS:(e,t)=>t.payload.env.STUDENT_PLANNER_GROUPS},[])
function el(e,t){const a=[...e.items].concat(t.payload.items.filter(t=>e.items.findIndex(e=>e.id===t.id)<0))
return{items:a,nextUrl:t.payload.nextUrl}}var tl=Object(Rd["a"])({ADD_OPPORTUNITIES:el,DISMISSED_OPPORTUNITY:(e,t)=>{const a=Object(Q["cloneDeep"])(e)
const s=a.items.find(e=>e.id===t.payload.assignment_id)
s.planner_override?s.planner_override.dismissed=t.payload.dismissed:s.planner_override=t.payload
return a}},{items:[],nextUrl:null})
var al=Object(Rd["a"])({UPDATE_TODO:(e,t)=>Object(Q["cloneDeep"])(t.payload),CLEAR_UPDATE_TODO:(e,t)=>({})},{})
function sl(e,t){return Object(s["a"])({},e,{naiAboveScreen:t.payload})}var nl=Object(Rd["a"])({SET_NAI_ABOVE_SCREEN:sl},{naiAboveScreen:false})
function il(e,t,a){a<0&&(a=t.length+a)
const s=t[a]
if(void 0===s)return u.a.invalid()
return u.a.tz(s[0],e.timeZone)}function rl(e,t,a){return j(a.date,e,t)}function ol(e,t){let a,s
const n=t.dateBucketMoment.clone().startOf("day")
const i=u.a.tz(e.timeZone).startOf("day")
if(0===e.days.length)a=s=i
else{a=il(e,e.days,0)
s=il(e,e.days,-1)
i.isBefore(a)&&(a=i)}const r=e.loading.allPastItemsLoaded||n.isSame(a)||n.isAfter(a)
const o=e.loading.allFutureItemsLoaded||n.isSame(s)||n.isBefore(s)
return r&&o}function dl(e,t){const a=il(e,e.loading.partialPastDays,0)
const s=il(e,e.days,0)
return rl(a,s,t)}function ll(e,t){const a=il(e,e.days,-1)
const s=il(e,e.loading.partialFutureDays,-1)
return rl(a,s,t)}function ul(e,t){if(!e)return
if("SAVED_PLANNER_ITEM"!==t.type)return e
if(t.error)return e
if(!e.loading.plannerLoaded)return e
const a=t.payload.item
if(ol(e,a)){const t=Re(e.days,a.uniqueId),n=t.dayIndex,i=t.itemIndex,r=t.item
let o=e.days
r&&!r.dateBucketMoment.isSame(a.dateBucketMoment)&&(o=qe(e.days,n,i))
return Object(s["a"])({},e,{days:Se(o,[a])})}if(dl(e,a)){const t=He(e.days,a)
const n=Se(e.loading.partialPastDays,[a])
return Object(s["a"])({},e,{days:t,loading:Object(s["a"])({},e.loading,{partialPastDays:n})})}if(ll(e,a)){const t=He(e.days,a)
const n=Se(e.loading.partialFutureDays,[a])
return Object(s["a"])({},e,{days:t,loading:Object(s["a"])({},e.loading,{partialFutureDays:n})})}{const t=He(e.days,a)
if(t===e.days)return e
return Object(s["a"])({},e,{days:t})}}const _l=Object(Rd["a"])({SIDEBAR_ITEMS_LOADED:(e,t)=>{const a=e.concat(t.payload.items)
bl(a)
return a},DELETED_PLANNER_ITEM:ml},[])
function ml(e,t){const a=e.findIndex(e=>e.uniqueId===t.payload.uniqueId)
if(a>-1){const t=e.slice()
t.splice(a,1)
return t}return e}const cl=Object(Rd["a"])({SIDEBAR_ITEMS_LOADED:(e,t)=>t.payload.nextUrl},null)
const gl=Object(Rd["a"])({SIDEBAR_ITEMS_LOADING:()=>true,SIDEBAR_ITEMS_LOADED:()=>false,SIDEBAR_ENOUGH_ITEMS_LOADED:()=>false,SIDEBAR_ITEMS_LOADING_FAILED:()=>false},false)
const pl=Object(Rd["a"])({SIDEBAR_ENOUGH_ITEMS_LOADED:()=>true},false)
const fl=Object(Rd["a"])({SIDEBAR_ITEMS_LOADING:(e,t)=>t.payload?Object(s["a"])({},e,{},t.payload):e},{})
const hl=Object(zr["combineReducers"])({items:_l,loading:gl,nextUrl:cl,loaded:pl,range:fl})
function bl(e){return e.sort(Ke)}function yl(e,t){if(!e)return
if(!e.loaded||"SAVED_PLANNER_ITEM"!==t.type)return e
if(!t.payload.item||!t.payload.item.uniqueId)return e
const a=t.payload.item
const n=e.items.slice()
let i=false
const r=e.items.findIndex(e=>e.uniqueId===a.uniqueId)
if(r>-1){n.splice(r,1)
i=true}if(j(a.date,e.range.firstMoment,e.range.lastMoment)){n.push(a)
bl(n)
i=true}return i?Object(s["a"])({},e,{items:n}):e}function vl(e,t){let a=yl(e,t)
a=hl(a,t)
return a}const El=Object(jd["a"])("INITIAL_OPTIONS",(e,t)=>t.payload.env.MOMENT_LOCALE,"en")
const Al=Object(jd["a"])("INITIAL_OPTIONS",(e,t)=>t.payload.env.TIMEZONE,"UTC")
const Cl=Object(jd["a"])("INITIAL_OPTIONS",(e,t)=>{const a=t.payload.env
const s=a.current_user
const n=a.PREFERENCES&&a.PREFERENCES.custom_colors&&a.PREFERENCES.custom_colors["user_".concat(s.id)]
return{id:s.id,displayName:s.display_name,avatarUrl:a.current_user.avatar_is_fallback?null:a.current_user.avatar_image_url,color:n}},{})
const kl=Object(jd["a"])("FOUND_FIRST_NEW_ACTIVITY_DATE",(e,t)=>t.payload.clone(),null)
const wl=Object(zr["combineReducers"])({courses:Qd,groups:$d,locale:El,timeZone:Al,currentUser:Cl,days:Hd,loading:Yd,firstNewActivityDate:kl,opportunities:tl,todo:al,ui:nl,sidebar:vl})
function Tl(e,t){const a=ul(e,t)
return wl(a,t)}const Dl=(e,t)=>(a,s)=>{a(Yt(Le(e),t))
const n=s()
const i=zl(n.loading.partialFutureDays,n.loading.allFutureItemsLoaded,"asc")
return Il(i,a,n.loading.allFutureItemsLoaded,t)}
const xl=(e,t)=>(a,s)=>{a(Jt(Le(e),t))
const n=s()
const i=zl(n.loading.partialPastDays,n.loading.allPastItemsLoaded,"desc")
return Il(i,a,n.loading.allPastItemsLoaded,t)}
function Fl(e,t,a,s,n){s(Jt(Le(t),a))
const i=n()
const r=zl(i.loading.partialPastDays,i.loading.allPastItemsLoaded,"desc")
if(e(r)||i.loading.allPastItemsLoaded)return Il(r,s,i.loading.allPastItemsLoaded,a)
return false}const Sl=(e,t)=>(a,s)=>Fl(et,e,t,a,s)
const Ol=(e,t)=>(a,s)=>Fl(tt,e,t,a,s)
const Bl=(e,t)=>(t,a)=>{const s=e.length>0
t(Gt({hasSomeItems:s}))
return true}
function Il(e,t,a,s){if(e.length||a){t(Kt(e,s))
return true}return false}function zl(e,t,a){const s=e.slice()
"desc"===a&&s.reverse()
if(t)return s
const n=s.slice(0,-1)
return n}function*Nl(){yield od([ld(Ml)])}function*Ml(){yield Md("START_LOADING_PAST_SAGA",Pl)
yield Md("START_LOADING_FUTURE_SAGA",jl)
yield Md("START_LOADING_PAST_UNTIL_NEW_ACTIVITY_SAGA",Rl)
yield Md("START_LOADING_GRADES_SAGA",Hl)
yield Md("START_LOADING_PAST_UNTIL_TODAY_SAGA",Ul)
yield Md("PEEK_INTO_PAST_SAGA",ql)}function*Ll(e,t,a){try{let n=null
const i=()=>n
let r=true
while(r){n=yield _d()
const o=e(n)
const d=Object(s["a"])({fromMoment:o,getState:i},a)
const l=yield ld(oa,d),u=l.transformedItems,_=l.response
const m=yield ld(t,u,_)
const c=yield rd(m)
if("boolean"!==typeof c)throw new Error("saga error invoking action ".concat(t.name,". It returned a non-boolean: ").concat(c))
r=!c}}catch(e){yield rd(Pt(e))}}function*Pl(){yield*Ll(Xl,xl,{intoThePast:true})}function*jl(){yield*Ll(Vl,Dl,{intoThePast:false})}function*Rl(){yield*Ll(Xl,Sl,{intoThePast:true})}function*ql(){yield*Ll(Xl,Bl,{intoThePast:true,perPage:1})}function*Hl(){const e={params:{include:["total_scores","current_grading_period_scores"],enrollment_type:"student",enrollment_state:"active"}}
try{let t="/api/v1/users/self/courses"
const a={}
while(null!=t){const s=yield ld(dt["default"].get,t,e)
s.data.forEach(e=>{const t=Ct(e)
a[t.courseId]=t})
const n=ct()(s.headers.link)
t=n&&n.next?n.next.url:null}yield rd(Ut(a))}catch(e){yield rd(Xt(e))
throw e}}function*Ul(){yield*Ll(Xl,Ol,{intoThePast:true})}function Xl(e){return K(e.days,e.timeZone)}function Vl(e){const t=Y(e.days,e.timeZone)
e.days.length&&t.add(1,"days")
return t}function Wl(e,t){const a=Ld()
const s=[Nr["default"],Lr.a,a,Ae(e)]
const n=Object(zr["createStore"])(Tl,t,Object(Pd["composeWithDevTools"])(Object(zr["applyMiddleware"])(...s)))
a.run(Nl)
return n}function Gl(e){return 0===e.pageYOffset}function Zl(e){const t=e.document.documentElement
const a=t.getBoundingClientRect().bottom
const s=t.clientHeight
return a<=s+2}function Kl(e){return e.deltaY<0}function Yl(e){return e.deltaY>0}function Jl(e,t){t.preventDefault()
e()}function Ql(e,t,a,s){Gl(a)&&Kl(s)?Jl(e,s):Zl(a)&&Yl(s)&&Jl(t,s)}let $l=null
function eu(e){null===$l&&($l=e.changedTouches[0])}function tu(e,t,a,s){if(!$l)return
const n=s.changedTouches[$l.identifier]
if(!n)return
Gl(a)&&n.screenY-$l.screenY>3?e():Zl(a)&&n.screenY-$l.screenY<-3&&t()}function au(e){$l=null}class su{constructor(e,t){this.mostRecentScrollPosition=0
this.callbackThrottle=false
this.throttledScrollEvent=()=>{try{this.scrollCb(this.mostRecentScrollPosition)}finally{this.callbackThrottle=false}}
this.handleScrollEvent=()=>{this.mostRecentScrollPosition=this.wind.pageYOffset
if(!this.callbackThrottle){this.callbackThrottle=true
this.wind.setTimeout(this.throttledScrollEvent,0)}}
this.scrollCb=e
this.wind=t
t.addEventListener("scroll",this.handleScrollEvent)}}function nu(e){let t=e.scrollIntoPast,a=e.scrollIntoFuture,s=e.scrollPositionChange,n=e.window
n=n||window
const i=Ql.bind(void 0,t,a,n)
n.addEventListener("wheel",i)
n.addEventListener("touchstart",eu)
n.addEventListener("touchend",au)
const r=tu.bind(void 0,t,a,n)
n.addEventListener("touchmove",r)
new su(s,n)}a.d(t,"a",(function(){return yu}))
a.d(t,"c",(function(){return Au}))
a.d(t,"b",(function(){return Cu}))
let iu
const ru=()=>!!iu&&iu()
const ou=new bs({plannerActive:ru})
const du=Wl(ou)
function lu(){if(!ru())return
du.getState().loading.loadingPast||du.getState().loading.loadingFuture||du.getState().loading.allPastItemsLoaded||du.dispatch(sa())}function uu(){if(!ru())return
du.getState().loading.loadingPast||du.getState().loading.loadingFuture||du.getState().loading.allFutureItemsLoaded||du.dispatch(ea())}function _u(e){return{getFocusable:()=>e,getScrollable:()=>e}}const mu={getActiveApp:()=>"",stickyZIndex:3}
const cu={}
const gu="dashboard_header_container"
const pu="new_activity_button"
function fu(e){const t=Object(s["a"])({},mu,{},e)
t.env=Object(s["a"])({},cu,{},e.env)
t.env.STUDENT_PLANNER_COURSES||(t.env.STUDENT_PLANNER_COURSES=[])
t.env.STUDENT_PLANNER_GROUPS||(t.env.STUDENT_PLANNER_GROUPS=[])
return t}function hu(e){if(!e.env.PREFERENCES)return
e.env.STUDENT_PLANNER_COURSES=e.env.STUDENT_PLANNER_COURSES.map(t=>Object(s["a"])({},t,{color:e.env.PREFERENCES.custom_colors[t.assetString]}))
e.env.STUDENT_PLANNER_GROUPS=e.env.STUDENT_PLANNER_GROUPS.map(t=>Object(s["a"])({},t,{color:e.env.PREFERENCES.custom_colors[t.assetString]||"#666666"}))}let bu=null
function yu(e){if(bu)throw new Error("initializePlanner may not be called more than once")
e=fu(e)
if(!(e.env.MOMENT_LOCALE&&e.env.TIMEZONE))throw new Error("env.MOMENT_LOCALE and env.TIMEZONE are required options for initializePlanner")
const t=e,a=t.flashError,s=t.flashMessage,n=t.srFlashMessage
if(!(a&&s&&n))throw new Error("flash message callbacks are required options for initializePlanner")
if(!e.convertApiUserContent)throw new Error("convertApiUserContent is a required option for initializePlanner")
iu=()=>"planner"===e.getActiveApp()
Ir.init(e.env.MOMENT_LOCALE)
u.a.locale(e.env.MOMENT_LOCALE)
u.a.tz.setDefault(e.env.TIMEZONE)
St({visualSuccessCallback:s,visualErrorCallback:a,srAlertCallback:n})
js(e)
z(e.dateTimeFormatters)
e.plannerNewActivityButtonId=pu
ou.setOffsetElementIds(gu,pu)
e.externalFallbackFocusable&&ou.registerAnimatable("item",_u(e.externalFallbackFocusable),-1,[us("item")])
hu(e)
bu=e
du.dispatch(Oa(e))}function vu(e){nu({scrollIntoPast:lu,scrollIntoFuture:uu,scrollPositionChange:e=>ou.handleScrollPositionChange(e)})
o.a.render(i.a.createElement(As,{manager:ou},i.a.createElement(d["Provider"],{store:du},i.a.createElement(Bn,{appRef:e=>ou.setApp(e),changeDashboardView:bu.changeDashboardView,plannerActive:ru,currentUser:du.getState().currentUser,focusFallback:()=>ou.focusFallback("item")}))),e)
du.dispatch($t(u.a.tz(bu.env.timeZone).startOf("day")))}function Eu(e,t){const a=document.getElementById("application")
o.a.render(i.a.createElement(As,{manager:ou},i.a.createElement(d["Provider"],{store:du},i.a.createElement(zi,{stickyZIndex:bu.stickyZIndex,stickyButtonId:bu.plannerNewActivityButtonId,timeZone:bu.env.TIMEZONE,locale:bu.env.MOMENT_LOCALE,ariaHideElement:a,auxElement:t}))),e)}function Au(e){if(!bu)throw new Error("initializePlanner must be called before renderToDoSidebar")
const t=bu.env
o.a.render(i.a.createElement(d["Provider"],{store:du},i.a.createElement(Hi,{courses:t.STUDENT_PLANNER_COURSES,timeZone:t.TIMEZONE,locale:t.MOMENT_LOCALE,changeDashboardView:bu.changeDashboardView,forCourse:bu.forCourse})),e)}function Cu(){if(!bu)throw new Error("initializePlanner must be called before loadPlannerDashboard")
const e=document.getElementById("dashboard-planner")
const t=document.getElementById("dashboard-planner-header")
const a=document.getElementById("dashboard-planner-header-aux")
e&&vu(e)
t&&Eu(t,a)}},syYy:function(e,t,a){"use strict"
var s=a("vAQ1")
var n=a("ZoNA")
var i=a("NOPk").underscore
e.exports=function(e){e=n(e)
var t=i(e)
var a=s(e.length+":"+e).toString(16)
return t+"_"+a}},tlvh:function(e){e.exports=JSON.parse('{"add_to_do_7537af64":{"message":"Tilføj opgaveliste"},"add_to_do_7def3c37":{"message":"Tilføj til opgaveliste"},"address_3159962f":{"message":"Adresse:"},"all_day_fb42c4fc":{"message":"Hele dagen"},"all_items_loaded_aa256183":{"message":"Alle elementer er indlæst"},"an_error_occurred_attempting_to_dismiss_the_opport_f86e0667":{"message":"Der opstod en fejl under forsøg på at afvise muligheden."},"announcement_fb4cb645":{"message":"Besked"},"are_you_sure_you_want_to_delete_this_planner_item_b71e330c":{"message":"Er du sikker på, du vil slette dette planlægningselement?"},"assignment_976578a8":{"message":"Opgave"},"assignmenttype_title_6612d008":{"message":"{ assignmentType } { title }."},"assignmenttype_title_all_day_on_datetime_9768903c":{"message":"{ assignmentType } { title }, hele dagen den { datetime }."},"assignmenttype_title_at_datetime_478f0709":{"message":"{ assignmentType } { title }, kl. { datetime }."},"assignmenttype_title_at_datetime_until_endtime_a5900e38":{"message":"{ assignmentType } { title }, kl. { datetime } indtil { endTime }"},"assignmenttype_title_due_datetime_a112d8ff":{"message":"{ assignmentType } { title }, forfalder { datetime }."},"assignmenttype_title_has_a_to_do_time_at_datetime_e07310e8":{"message":"{ assignmentType } { title } har en opgavelistetid kl. { datetime }."},"assignmenttype_title_is_marked_as_done_a8dc46ef":{"message":"{ assignmentType } { title } er markeret som færdig."},"assignmenttype_title_is_not_marked_as_done_ba80ba66":{"message":"{ assignmentType } { title } er ikke markeret som færdig."},"assignmenttype_title_posted_datetime_cab69444":{"message":"{ assignmentType } { title } slåede op kl. { datetime }."},"assignmenttype_title_reminder_datetime_33fa66d5":{"message":"{ assignmentType }{ title }, påmindelse { datetime }."},"beginning_of_your_to_do_history_61ef2dce":{"message":"Begyndelsen af ​​din Opgaveliste-historik"},"calendar_a8563bb2":{"message":"Kalender:"},"calendar_event_89aadc1c":{"message":"Kalenderbegivenhed"},"canvas_planner_98ed106":{"message":"Canvas-planlægger"},"close_d634289d":{"message":"Luk"},"close_opportunity_center_popup_9907d981":{"message":"Luk Opportunity Center-pop-oppen"},"count_plural_0_opportunities_one_opportunity_other_765e27fa":{"message":"{ count, plural,\\n     =0 {# muligheder}\\n    one {# mulighed}\\n  other {# muligheder}\\n}"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {Vis # afsluttet element}\\n  other {Vis # afsluttede elementer}\\n}"},"course_8a63b4a3":{"message":"Fag"},"course_to_do_bcbbab54":{"message":"{ course } OPGAVELISTE"},"date_at_time_dbdb1b99":{"message":"{ date } kl. { time }"},"date_ee500367":{"message":"Dato"},"date_is_not_a_valid_date_4ef9f8ba":{"message":"#{ date } er ikke en gyldig dato."},"date_is_required_8660ec22":{"message":"Dato er påkrævet"},"date_time_d9fbf2d7":{"message":"Dato og tid"},"delete_a6efa79d":{"message":"Slet"},"details_98a31b68":{"message":"Nærmere oplysninger"},"details_a6f427c3":{"message":"Detaljer:"},"discussion_6719c51d":{"message":"Diskussion"},"dismiss_itemtitle_a9fae1b3":{"message":"Afvis { itemTitle }"},"dismiss_opportunityname_5995176f":{"message":"Afvis { opportunityName }"},"dismissed_8b0b1fc9":{"message":"Afvist"},"dismissed_opportunities_f0826640":{"message":"Afviste muligheder"},"due_5d7267be":{"message":"Forfalder:"},"due_date_124fdd99":{"message":"Forfalder: { date }"},"edit_c5fbea07":{"message":"Redigér"},"edit_title_72e5a21e":{"message":"Rediger { title }"},"error_loading_grades_e0b38f4d":{"message":"Fejl ved indlæsning af karakterer"},"error_loading_more_items_3f109d9f":{"message":"Fejl ved indlæsning af flere elementer"},"error_loading_past_items_2881dbb1":{"message":"Fejl ved indlæsning af forrige elementer"},"excused_cf8792eb":{"message":"Undskyldt"},"failed_to_delete_to_do_64edff49":{"message":"Kunne ikke slette opgave"},"failed_to_get_new_activity_17e7ec7c":{"message":"Kunne ikke hente ny aktivitet"},"failed_to_load_opportunities_52ab6404":{"message":"Kunne ikke indlæse muligheder"},"failed_to_save_to_do_ddc7503b":{"message":"Kunne ikke gemme opgave"},"feedback_6dcc1991":{"message":"Feedback"},"go_to_card_view_dashboard_9d03970e":{"message":"Gå til Oversigt over kortvisning"},"graded_25cd3fcd":{"message":"Bedømt"},"grades_are_loading_c899652d":{"message":"Karaktererne indlæses"},"grades_loaded_5056277c":{"message":"Karakterer indlæst"},"items_completed_items_plural_1_item_other_items_717d579f":{"message":"{ items } afsluttet { items, plural,\\n     =1 {element}\\n  other {elementer}\\n}"},"late_2be42b88":{"message":"Sen"},"list_collapsed_9ac35920":{"message":"Listen skjult."},"list_collapsed_dde87718":{"message":"Listen skjult"},"list_expanded_efec2d0":{"message":"Liste udvidet."},"load_more_a36f9cf9":{"message":"Indlæs mere"},"load_prior_dates_f2b0f6f0":{"message":"Indlæs tidligere datoer"},"loaded_count_plural_0_items_one_item_other_items_e58533e9":{"message":"Indlæst { count, plural,\\n     =0 {# elementer}\\n    one {# element}\\n  other {# elementer}\\n}"},"loading_25990131":{"message":"Indlæser ..."},"loading_725811ca":{"message":"indlæser"},"loading_grades_c842c887":{"message":"Indlæser karakterer"},"loading_past_items_ca499e75":{"message":"Indlæser forrige elementer"},"loading_planner_items_947a813d":{"message":"Indlæser planlægningselementer"},"location_3b6ff307":{"message":"Sted:"},"looks_like_there_isn_t_anything_here_d9bcef49":{"message":"Det ser ud som om, der ikke er noget her"},"missing_1a256b3b":{"message":"Mangler"},"missing_items_for_title_516511f8":{"message":"Manglende emner til { title }"},"my_grades_98834476":{"message":"Mine karakterer"},"new_13daf639":{"message":"Ny"},"new_activity_8b84847d":{"message":"Ny aktivitet"},"new_activity_for_title_14c9c3af":{"message":"Ny aktivitet for { title }"},"new_opportunities_7d349c4d":{"message":"Nye muligheder"},"next_month_749b1778":{"message":"Næste måned"},"no_due_dates_assigned_e8f5bac8":{"message":"Ingen afleveringsdatoer tildelt"},"no_grade_3b4d7f3e":{"message":"Ingen karakter"},"nothing_for_now_e3e3ce2a":{"message":"Ikke noget nu"},"nothing_here_needs_attention_c4eaded6":{"message":"Intet her har brug for opmærksomhed."},"nothing_more_to_do_b665da42":{"message":"Intet mere at gøre"},"nothing_new_needs_attention_3ac548d4":{"message":"Intet nyt har brug for opmærksomhed."},"nothing_planned_today_selecting_most_recent_item_ffd71bff":{"message":"Intet planlagt i dag. Vælger det seneste element."},"nothing_planned_today_selecting_next_item_f6718aa":{"message":"Intet planlagt i dag. Vælger det næste element."},"nothing_planned_yet_8675ffe9":{"message":"Intet planlagt endnu"},"numpoints_points_8621a43b":{"message":"{ numPoints } point"},"only_most_recent_grading_period_shown_f1ad6458":{"message":"*Kun seneste karakterperiode vist."},"opportunities_popup_f6703842":{"message":"muligheder popup"},"option_selected_list_collapsed_e00180ff":{"message":"{ option } valgt. Listen skjult."},"optional_add_course_ef0d70fc":{"message":"Valgfrit: Tilføj fag"},"page_50c4823d":{"message":"Side"},"peer_review_74f26a13":{"message":"Peer review"},"peer_review_for_itemtitle_358cb413":{"message":"Peer review for { itemTitle }"},"points_bceb5005":{"message":"point"},"points_points_63e59cce":{"message":"{ points } point"},"previous_month_bb1e3c84":{"message":"Forrige måned"},"pts_699bd9aa":{"message":"point"},"quiz_e0dcce8f":{"message":"Test"},"reminder_date_4564d12d":{"message":"Påmindelse: { date }"},"replies_4a8577c8":{"message":"Svar"},"save_11a80ec3":{"message":"Gem"},"scroll_up_to_see_your_history_19b14cad":{"message":"Rul op for at se din historik!"},"scrolls_up_to_the_previous_item_with_new_activity_99717459":{"message":"Ruller op til det forrige element med ny aktivitet."},"show_all_ae37d610":{"message":"Vis alle"},"show_my_grades_ebd08684":{"message":"Vis mine karakterer"},"startdate_to_enddate_d245175b":{"message":"{ startDate } til { endDate }"},"startdatetime_enddatetime_20abc10e":{"message":"{ startDateTime } - { endDateTime }"},"startdatetime_endtime_49741bbe":{"message":"{ startDateTime } - { endTime }"},"starttime_to_endtime_d7cc249d":{"message":"{ startTime } til { endTime }"},"submitted_318fad53":{"message":"Afleveret"},"success_to_do_created_e34ed395":{"message":"Succes: Opgaveliste oprettet"},"task_16b0ef38":{"message":"Opgave"},"the_date_and_time_this_to_do_is_due_74c823d4":{"message":"Dato og klokkeslæt, hvor denne opgave forfalder"},"there_are_no_points_associated_with_this_item_449c712a":{"message":"Der er ingen point associeret med dette element"},"time_2b5aac58":{"message":"Tidspunkt"},"title_ee03d132":{"message":"Titel"},"title_is_required_6ddcab69":{"message":"titel er påkrævet"},"to_do_1d554f36":{"message":"Opgaveliste"},"to_do_date_4b211ad0":{"message":"Opgaveliste: { date }"},"to_do_items_loading_d1cdfcd5":{"message":"Elementer i opgaveliste indlæses"},"today_76e10f9c":{"message":"I dag"},"today_at_date_8ac30d6":{"message":"I dag kl. { date }"},"tomorrow_9a6c9a00":{"message":"I morgen"},"tomorrow_at_date_b53f2cf1":{"message":"I morgen kl. { date }"},"unable_to_mark_as_complete_8141856d":{"message":"Kan ikke markeres som færdig."},"use_arrow_keys_to_navigate_options_2021cc50":{"message":"Brug piletasterne til at navigere indstillinger."},"yesterday_at_date_1aa6d18e":{"message":"I går kl. { date }"},"yesterday_c6bd6abf":{"message":"I går"},"you_have_media_feedback_f5f9aba8":{"message":"Du har mediefeedback."},"you_must_provide_a_date_and_time_a86839d2":{"message":"Du skal angive en dato og klokkeslæt."},"you_ve_scrolled_back_to_your_very_first_to_do_29374681":{"message":"Du har rullet tilbage til din allerførste opgave på Opgavelisten!"}}')},xddP:function(e){e.exports=JSON.parse('{"add_to_do_7537af64":{"message":"إضافة قائمة مهام"},"add_to_do_7def3c37":{"message":"إضافة قائمة مهام"},"address_3159962f":{"message":"العنوان:"},"all_day_fb42c4fc":{"message":"طوال اليوم"},"all_items_loaded_aa256183":{"message":"تم تحميل كافة العناصر"},"an_error_occurred_attempting_to_dismiss_the_opport_f86e0667":{"message":"حدث خطأ أثناء محاولة تجاهل الفرصة."},"announcement_fb4cb645":{"message":"الإعلان"},"are_you_sure_you_want_to_delete_this_planner_item_b71e330c":{"message":"هل أنت متأكد أنك تريد حذف عنصر المخطط هذا؟"},"assignment_976578a8":{"message":"المهمة"},"assignmenttype_title_6612d008":{"message":"{ assignmentType } { title }."},"assignmenttype_title_all_day_on_datetime_9768903c":{"message":"{ assignmentType } { title }، كل اليوم في { datetime }."},"assignmenttype_title_at_datetime_478f0709":{"message":"{ assignmentType } { title }، الساعة { datetime }."},"assignmenttype_title_at_datetime_until_endtime_a5900e38":{"message":"{ assignmentType } { title }، الساعة { datetime } حتى { endTime }"},"assignmenttype_title_due_datetime_a112d8ff":{"message":"{ assignmentType } { title }، يستحق في { datetime }."},"assignmenttype_title_has_a_to_do_time_at_datetime_e07310e8":{"message":"{ assignmentType } { title } لديه وقت قائمة مهام في { datetime }."},"assignmenttype_title_is_marked_as_done_a8dc46ef":{"message":"تم وضع علامة تم على { assignmentType } { title }."},"assignmenttype_title_is_not_marked_as_done_ba80ba66":{"message":"لم يتم وضع علامة تم على { assignmentType } { title }."},"assignmenttype_title_posted_datetime_cab69444":{"message":"قام { assignmentType } { title } بنشر { datetime }."},"assignmenttype_title_reminder_datetime_33fa66d5":{"message":"{ assignmentType } { title }، تذكير { datetime }."},"beginning_of_your_to_do_history_61ef2dce":{"message":"بداية سجل قائمة المهام الخاصة بك"},"calendar_a8563bb2":{"message":"التقويم:"},"calendar_event_89aadc1c":{"message":"حدث التقويم"},"canvas_planner_98ed106":{"message":"مخطِط Canvas"},"close_d634289d":{"message":"إغلاق"},"close_opportunity_center_popup_9907d981":{"message":"إغلاق النافذة المنبثقة لمركز الفرص"},"count_plural_0_opportunities_one_opportunity_other_765e27fa":{"message":"{ count, plural,\\n     =0 {# من الفرص}\\n    one {# فرصة}\\n  other {# من الفرص}\\n}"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {إظهار # عنصر مكتمل}\\n  other {إظهار # من العناصر المكتملة}\\n}"},"course_8a63b4a3":{"message":"المساق"},"course_to_do_bcbbab54":{"message":"قائمة مهام { course }"},"date_at_time_dbdb1b99":{"message":"{ date } في { time }"},"date_ee500367":{"message":"التاريخ"},"date_is_not_a_valid_date_4ef9f8ba":{"message":"#{ date } ليس تاريخًا صالحًا."},"date_is_required_8660ec22":{"message":"التاريخ مطلوب"},"date_time_d9fbf2d7":{"message":"التاريخ والوقت:"},"delete_a6efa79d":{"message":"حذف"},"details_98a31b68":{"message":"التفاصيل"},"details_a6f427c3":{"message":"التفاصيل:"},"discussion_6719c51d":{"message":"النقاش"},"dismiss_itemtitle_a9fae1b3":{"message":"تجاهل { itemTitle }"},"dismiss_opportunityname_5995176f":{"message":"تجاهل { opportunityName }"},"dismissed_8b0b1fc9":{"message":"المستبعدة"},"dismissed_opportunities_f0826640":{"message":"الفرص المستبعدة"},"due_5d7267be":{"message":"تاريخ الاستحقاق:"},"due_date_124fdd99":{"message":"تاريخ الاستحقاق: { date }"},"edit_c5fbea07":{"message":"تحرير"},"edit_title_72e5a21e":{"message":"تحرير { title }"},"error_loading_grades_e0b38f4d":{"message":"خطأ أثناء تحميل الدرجات"},"error_loading_more_items_3f109d9f":{"message":"حدث خطأ في تحميل المزيد من العناصر"},"error_loading_past_items_2881dbb1":{"message":"حدث خطأ في تحميل العناصر السابقة"},"excused_cf8792eb":{"message":"معفى"},"failed_to_delete_to_do_64edff49":{"message":"تعذر حذف قائمة مهام"},"failed_to_get_new_activity_17e7ec7c":{"message":"تعذر الحصول على نشاط جديد"},"failed_to_load_opportunities_52ab6404":{"message":"تعذر تحميل الفرص"},"failed_to_save_to_do_ddc7503b":{"message":"تعذر حفظ قائمة مهام"},"feedback_6dcc1991":{"message":"الملاحظات"},"go_to_card_view_dashboard_9d03970e":{"message":"انتقل إلى لوحة عرض البطاقة"},"graded_25cd3fcd":{"message":"تم تقييم الدرجة"},"grades_are_loading_c899652d":{"message":"جارٍ تحميل الدرجات"},"grades_loaded_5056277c":{"message":"تم تحميل الدرجات"},"items_completed_items_plural_1_item_other_items_717d579f":{"message":"{ items } أكمل { items, plural,\\n     =1 {عنصر}\\n  other {من العناصر}\\n}"},"late_2be42b88":{"message":"متأخر"},"list_collapsed_9ac35920":{"message":"تم طي القائمة."},"list_collapsed_dde87718":{"message":"تم طي القائمة"},"list_expanded_efec2d0":{"message":"تم توسيع القائمة."},"load_more_a36f9cf9":{"message":"تحميل المزيد"},"load_prior_dates_f2b0f6f0":{"message":"تحميل تواريخ سابقة"},"loaded_count_plural_0_items_one_item_other_items_e58533e9":{"message":"تم تحميل { count, plural,\\n     =0 {# من العناصر}\\n    one {# عنصر}\\n  other {# من العناصر}\\n}"},"loading_25990131":{"message":"جارٍ التحميل..."},"loading_725811ca":{"message":"يتم الآن التحميل"},"loading_grades_c842c887":{"message":"جارٍ تحميل الدرجات"},"loading_past_items_ca499e75":{"message":"جارٍ تحميل العناصر السابقة"},"loading_planner_items_947a813d":{"message":"جارٍ تحميل عناصر المخطِط"},"location_3b6ff307":{"message":"الموقع:"},"looks_like_there_isn_t_anything_here_d9bcef49":{"message":"يبدو أنه لا يوجد أي شيء هنا"},"missing_1a256b3b":{"message":"مفقود"},"missing_items_for_title_516511f8":{"message":"عناصر مفقودة لـ { title }"},"my_grades_98834476":{"message":"درجاتي"},"new_13daf639":{"message":"الجديدة"},"new_activity_8b84847d":{"message":"نشاط جديد"},"new_activity_for_title_14c9c3af":{"message":"نشاط جديد لـ { title }"},"new_opportunities_7d349c4d":{"message":"الفرص الجديدة"},"next_month_749b1778":{"message":"الشهر القادم"},"no_due_dates_assigned_e8f5bac8":{"message":"لم يتم تعيين تواريخ الاستحقاق"},"no_grade_3b4d7f3e":{"message":"لا توجد أي درجة"},"nothing_for_now_e3e3ce2a":{"message":"لا شيء موجود الآن"},"nothing_here_needs_attention_c4eaded6":{"message":"لا شيء هنا يستدعي الاهتمام."},"nothing_more_to_do_b665da42":{"message":"لا يوجد المزيد من قوائم المهام"},"nothing_new_needs_attention_3ac548d4":{"message":"لا يوجد شيء جديد يستدعي الاهتمام."},"nothing_planned_today_selecting_most_recent_item_ffd71bff":{"message":"لم يتم اليوم تخطيط أي شيء. تحديد أحدث العناصر."},"nothing_planned_today_selecting_next_item_f6718aa":{"message":"لم يتم اليوم تخطيط أي شيء. تحديد العنصر التالي."},"nothing_planned_yet_8675ffe9":{"message":"لم يتم تخطيط أي شيء بعد"},"numpoints_points_8621a43b":{"message":"{ numPoints } من النقاط"},"only_most_recent_grading_period_shown_f1ad6458":{"message":"*إظهار أحدث فترة تقييم فقط."},"opportunities_popup_f6703842":{"message":"النافذة المنبثقة للفرص"},"option_selected_list_collapsed_e00180ff":{"message":"تم تحديد { option }. تم طي القائمة."},"optional_add_course_ef0d70fc":{"message":"اختياري: إضافة مساق"},"page_50c4823d":{"message":"صفحة"},"peer_review_74f26a13":{"message":"المراجعة النظيرة"},"peer_review_for_itemtitle_358cb413":{"message":"مراجعة أقران ل{ itemTitle }"},"points_bceb5005":{"message":"نقاط"},"points_points_63e59cce":{"message":"{ points } من النقاط"},"previous_month_bb1e3c84":{"message":"الشهر السابق"},"pts_699bd9aa":{"message":"نقاط"},"quiz_e0dcce8f":{"message":"الاختبار الموجز"},"reminder_date_4564d12d":{"message":"التذكير: { date }"},"replies_4a8577c8":{"message":"ردود"},"save_11a80ec3":{"message":"حفظ"},"scroll_up_to_see_your_history_19b14cad":{"message":"قم بالتمرير للأعلى للاطلاع على السجل!"},"scrolls_up_to_the_previous_item_with_new_activity_99717459":{"message":"قم بالتمرير للأعلى إلى العنصر السابق الذي يحتوى على نشاط حديث."},"show_all_ae37d610":{"message":"عرض الكل"},"show_my_grades_ebd08684":{"message":"إظهار درجاتي"},"startdate_to_enddate_d245175b":{"message":"{ startDate } إلى { endDate }"},"startdatetime_enddatetime_20abc10e":{"message":"{ startDateTime } - { endDateTime }"},"startdatetime_endtime_49741bbe":{"message":"{ startDateTime } - { endTime }"},"starttime_to_endtime_d7cc249d":{"message":"{ startTime } إلى { endTime }"},"submitted_318fad53":{"message":"تم الإرسال"},"success_to_do_created_e34ed395":{"message":"نجاح: تم إنشاء قائمة مهام"},"task_16b0ef38":{"message":"مهمة"},"the_date_and_time_this_to_do_is_due_74c823d4":{"message":"تاريخ ووقت استحقاق قائمة المهام تلك"},"there_are_no_points_associated_with_this_item_449c712a":{"message":"لا توجد نقاط مقترنة بهذا العنصر"},"time_2b5aac58":{"message":"الوقت"},"title_ee03d132":{"message":"العنوان"},"title_is_required_6ddcab69":{"message":"العنوان مطلوب"},"to_do_1d554f36":{"message":"قائمة المهام"},"to_do_date_4b211ad0":{"message":"قائمة مهام: { date }"},"to_do_items_loading_d1cdfcd5":{"message":"تحميل عناصر قائمة المهام"},"today_76e10f9c":{"message":"اليوم"},"today_at_date_8ac30d6":{"message":"اليوم الساعة { date }"},"tomorrow_9a6c9a00":{"message":"غدًا"},"tomorrow_at_date_b53f2cf1":{"message":"غدًا الساعة { date }"},"unable_to_mark_as_complete_8141856d":{"message":"يتعذر وضع علامة مكتمل."},"use_arrow_keys_to_navigate_options_2021cc50":{"message":"استخدم مفاتيح الأسهم للتنقل بين الخيارات."},"yesterday_at_date_1aa6d18e":{"message":"أمس الساعة { date }"},"yesterday_c6bd6abf":{"message":"أمس"},"you_have_media_feedback_f5f9aba8":{"message":"لديك ملاحظات وسائط."},"you_must_provide_a_date_and_time_a86839d2":{"message":"يجب عليك إدخال تاريخ ووقت."},"you_ve_scrolled_back_to_your_very_first_to_do_29374681":{"message":"لقد قمت بالتمرير للخلف إلى أول قائمة مهام خاصة بك!"}}')},yWea:function(e){e.exports=JSON.parse('{"add_to_do_7537af64":{"message":"Dodaj listę zadań"},"add_to_do_7def3c37":{"message":"Dodaj do listy zadań"},"address_3159962f":{"message":"Adres:"},"all_day_fb42c4fc":{"message":"Cały dzień"},"all_items_loaded_aa256183":{"message":"Wszystkie elementy wczytane"},"an_error_occurred_attempting_to_dismiss_the_opport_f86e0667":{"message":"Podczas odrzucania okazji wystąpił błąd."},"announcement_fb4cb645":{"message":"Ogłoszenie"},"are_you_sure_you_want_to_delete_this_planner_item_b71e330c":{"message":"Czy na pewno chcesz usunąć ten element planera?"},"assignment_976578a8":{"message":"Zadanie"},"assignmenttype_title_6612d008":{"message":"{ assignmentType } { title }."},"assignmenttype_title_all_day_on_datetime_9768903c":{"message":"{ assignmentType } { title }, cały dzień w { datetime }."},"assignmenttype_title_at_datetime_478f0709":{"message":"{ assignmentType } { title }, o { datetime }."},"assignmenttype_title_at_datetime_until_endtime_a5900e38":{"message":"{ assignmentType } { title }, o godz. { datetime } do { endTime }"},"assignmenttype_title_due_datetime_a112d8ff":{"message":"{ assignmentType } { title }, termin { datetime }."},"assignmenttype_title_has_a_to_do_time_at_datetime_e07310e8":{"message":"{ assignmentType } { title } ma czas na zadanie o godz. { datetime }."},"assignmenttype_title_is_marked_as_done_a8dc46ef":{"message":"{ assignmentType } { title } oznaczono jako gotowe."},"assignmenttype_title_is_not_marked_as_done_ba80ba66":{"message":"{ assignmentType } { title } nie oznaczono jako gotowe."},"assignmenttype_title_posted_datetime_cab69444":{"message":"{ assignmentType } { title } opublikował(a) { datetime }."},"assignmenttype_title_reminder_datetime_33fa66d5":{"message":"{ assignmentType } { title }, przypomnienie { datetime }."},"beginning_of_your_to_do_history_61ef2dce":{"message":"Początek historii listy zadań"},"calendar_a8563bb2":{"message":"Kalendarz:"},"calendar_event_89aadc1c":{"message":"Wydarzenie w kalendarzu"},"canvas_planner_98ed106":{"message":"Planer Canvas"},"close_d634289d":{"message":"Zamknij"},"close_opportunity_center_popup_9907d981":{"message":"Zamknij wyskakujące okienko Opportunity Center"},"count_plural_0_opportunities_one_opportunity_other_765e27fa":{"message":"{ count, plural,\\n     =0 {# okazje}\\n    one {# okazja}\\n  other {# okazji}\\n}"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {Pokaż # ukończony element}\\n  other {Pokaż # ukończone elementy }\\n}"},"course_8a63b4a3":{"message":"Kurs"},"course_to_do_bcbbab54":{"message":"{ course } LISTA ZADAŃ"},"date_at_time_dbdb1b99":{"message":"{ date } o { time }"},"date_ee500367":{"message":"Data"},"date_is_not_a_valid_date_4ef9f8ba":{"message":"#{ date } nie jest prawidłową datą."},"date_is_required_8660ec22":{"message":"Wymagana jest data."},"date_time_d9fbf2d7":{"message":"Data i godzina:"},"delete_a6efa79d":{"message":"Usuń"},"details_98a31b68":{"message":"Szczegóły"},"details_a6f427c3":{"message":"Informacje szczegółowe:"},"discussion_6719c51d":{"message":"Dyskusja"},"dismiss_itemtitle_a9fae1b3":{"message":"Odrzuć { itemTitle }"},"dismiss_opportunityname_5995176f":{"message":"Odrzuć { opportunityName }"},"dismissed_8b0b1fc9":{"message":"Odrzucono"},"dismissed_opportunities_f0826640":{"message":"Odrzucone okazje"},"due_5d7267be":{"message":"Termin:"},"due_date_124fdd99":{"message":"Termin: { date }"},"edit_c5fbea07":{"message":"Edytuj"},"edit_title_72e5a21e":{"message":"Edytuj { title }"},"error_loading_grades_e0b38f4d":{"message":"Błąd podczas wczytywania ocen"},"error_loading_more_items_3f109d9f":{"message":"Błąd podczas wczytywania dodatkowych elementów"},"error_loading_past_items_2881dbb1":{"message":"Błąd podczas wczytywania wcześniejszych elementów"},"excused_cf8792eb":{"message":"Usprawiedliwiony"},"failed_to_delete_to_do_64edff49":{"message":"Nie udało się usunąć zadań"},"failed_to_get_new_activity_17e7ec7c":{"message":"Nie udało się pobrać nowej aktywności"},"failed_to_load_opportunities_52ab6404":{"message":"Nie udało się wczytać okazji"},"failed_to_save_to_do_ddc7503b":{"message":"Nie udało się zapisać do"},"feedback_6dcc1991":{"message":"Informacje zwrotne"},"go_to_card_view_dashboard_9d03970e":{"message":"Przejdź do panelu nawigacyjnego widoku karty"},"graded_25cd3fcd":{"message":"Oceniono"},"grades_are_loading_c899652d":{"message":"Trwa wczytywanie ocen"},"grades_loaded_5056277c":{"message":"Wczytano oceny"},"items_completed_items_plural_1_item_other_items_717d579f":{"message":"{ items } ukończył(a) { items, plural,\\n     =1 {element}\\n  other {elementy}\\n}"},"late_2be42b88":{"message":"Późno"},"list_collapsed_9ac35920":{"message":"Lista zwinięta."},"list_collapsed_dde87718":{"message":"Lista zwinięta"},"list_expanded_efec2d0":{"message":"Rozszerzono listę."},"load_more_a36f9cf9":{"message":"Załaduj więcej"},"load_prior_dates_f2b0f6f0":{"message":"Wczytaj wcześniejsze daty"},"loaded_count_plural_0_items_one_item_other_items_e58533e9":{"message":"Wczytano { count, plural,\\n     =0 {# elementy}\\n    one {# element}\\n  other {# elementów}\\n}"},"loading_25990131":{"message":"Wczytywanie..."},"loading_725811ca":{"message":"wczytywanie"},"loading_grades_c842c887":{"message":"Wczytywanie ocen"},"loading_past_items_ca499e75":{"message":"Wczytywanie wcześniejszych elementów"},"loading_planner_items_947a813d":{"message":"Wczytywanie elementu planera"},"location_3b6ff307":{"message":"Położenie:"},"looks_like_there_isn_t_anything_here_d9bcef49":{"message":"Wygląda na to, że nic tu nie ma"},"missing_1a256b3b":{"message":"Brak"},"missing_items_for_title_516511f8":{"message":"Brak elementów dla { title }"},"my_grades_98834476":{"message":"Moje oceny"},"new_13daf639":{"message":"Nowe"},"new_activity_8b84847d":{"message":"Nowa aktywność"},"new_activity_for_title_14c9c3af":{"message":"Nowa aktywność dla { title }"},"new_opportunities_7d349c4d":{"message":"Nowe okazje"},"next_month_749b1778":{"message":"Następny miesiąc"},"no_due_dates_assigned_e8f5bac8":{"message":"Brak ustawionych terminów"},"no_grade_3b4d7f3e":{"message":"Brak oceny"},"nothing_for_now_e3e3ce2a":{"message":"Brak bieżących elementów"},"nothing_here_needs_attention_c4eaded6":{"message":"Nic nie wymaga uwagi."},"nothing_more_to_do_b665da42":{"message":"Nic więcej do zrobienia"},"nothing_new_needs_attention_3ac548d4":{"message":"Nic nie wymaga uwagi."},"nothing_planned_today_selecting_most_recent_item_ffd71bff":{"message":"Nic na dziś nie zaplanowano. Wybór najnowszego elementu."},"nothing_planned_today_selecting_next_item_f6718aa":{"message":"Nic na dziś nie zaplanowano. Wybór następnego elementu."},"nothing_planned_yet_8675ffe9":{"message":"Nic jeszcze nie zaplanowano"},"numpoints_points_8621a43b":{"message":"{ numPoints } punkty"},"only_most_recent_grading_period_shown_f1ad6458":{"message":"*Pokazano tylko najnowszy okres oceniania."},"opportunities_popup_f6703842":{"message":"okienko wyskakujące z okazjami"},"option_selected_list_collapsed_e00180ff":{"message":"Wybrano { option }. Lista zwinięta."},"optional_add_course_ef0d70fc":{"message":"Opcjonalnie: Dodaj kurs"},"page_50c4823d":{"message":"Strona"},"peer_review_74f26a13":{"message":"Recenzja drugiego uczestnika"},"peer_review_for_itemtitle_358cb413":{"message":"Recenzja { itemTitle } innego uczestnika"},"points_bceb5005":{"message":"punkty"},"points_points_63e59cce":{"message":"{ points } punkty"},"previous_month_bb1e3c84":{"message":"Poprzedni miesiąc"},"pts_699bd9aa":{"message":"pkt"},"quiz_e0dcce8f":{"message":"Quiz"},"reminder_date_4564d12d":{"message":"Przypomnienie: { date }"},"replies_4a8577c8":{"message":"Odpowiedzi"},"save_11a80ec3":{"message":"Zapisz"},"scroll_up_to_see_your_history_19b14cad":{"message":"Przewiń w górę, aby wyświetlić historię!"},"scrolls_up_to_the_previous_item_with_new_activity_99717459":{"message":"Przewija w górę do poprzedniego elementu z nową aktywnością."},"show_all_ae37d610":{"message":"Pokaż wszystko"},"show_my_grades_ebd08684":{"message":"Pokaż moje oceny"},"startdate_to_enddate_d245175b":{"message":"{ startDate } do { endDate }"},"startdatetime_enddatetime_20abc10e":{"message":"{ startDateTime } - { endDateTime }"},"startdatetime_endtime_49741bbe":{"message":"{ startDateTime } - { endTime }"},"starttime_to_endtime_d7cc249d":{"message":"{ startTime } do { endTime }"},"submitted_318fad53":{"message":"Przesłano"},"success_to_do_created_e34ed395":{"message":"Zakończono powodzeniem: Utworzono zadanie"},"task_16b0ef38":{"message":"Zadanie"},"the_date_and_time_this_to_do_is_due_74c823d4":{"message":"Minęły już termin i godzina na wykonanie tego zadania"},"there_are_no_points_associated_with_this_item_449c712a":{"message":"Brak punktów powiązanych z tym elementem."},"time_2b5aac58":{"message":"Czas"},"title_ee03d132":{"message":"Tytuł"},"title_is_required_6ddcab69":{"message":"Wymagany jest tytuł"},"to_do_1d554f36":{"message":"Lista zadań"},"to_do_date_4b211ad0":{"message":"Lista zadań: { date }"},"to_do_items_loading_d1cdfcd5":{"message":"Wczytywanie listy zadań"},"today_76e10f9c":{"message":"Dzisiaj"},"today_at_date_8ac30d6":{"message":"Dziś o godz. { date }"},"tomorrow_9a6c9a00":{"message":"Jutro"},"tomorrow_at_date_b53f2cf1":{"message":"Jutro o godz. { date }"},"unable_to_mark_as_complete_8141856d":{"message":"Nie można oznaczyć jako ukończone."},"use_arrow_keys_to_navigate_options_2021cc50":{"message":"Użyj klawiszy strzałek do nawigowania po opcjach."},"yesterday_at_date_1aa6d18e":{"message":"Wczoraj o godz. { date }"},"yesterday_c6bd6abf":{"message":"Wczoraj"},"you_have_media_feedback_f5f9aba8":{"message":"Masz informacje zwrotne dotyczące multimediów."},"you_must_provide_a_date_and_time_a86839d2":{"message":"Wymagane są data i godzina."},"you_ve_scrolled_back_to_your_very_first_to_do_29374681":{"message":"Przewinięto do pierwszej listy zadań!"}}')},zCJu:function(e){e.exports=JSON.parse('{"add_to_do_7537af64":{"message":"Aggiungi elenco attività"},"add_to_do_7def3c37":{"message":"Aggiungi elenco attività"},"address_3159962f":{"message":"Indirizzo:"},"all_day_fb42c4fc":{"message":"Tutto il giorno"},"all_items_loaded_aa256183":{"message":"Tutti gli elementi caricati"},"an_error_occurred_attempting_to_dismiss_the_opport_f86e0667":{"message":"Si è verificato un errore durante il tentativo di eliminare l\'\'opportunità."},"announcement_fb4cb645":{"message":"Annuncio"},"are_you_sure_you_want_to_delete_this_planner_item_b71e330c":{"message":"Vuoi eliminare questo elemento dell\'\'agenda?"},"assignment_976578a8":{"message":"Compito"},"assignmenttype_title_6612d008":{"message":"{ assignmentType } { title }."},"assignmenttype_title_all_day_on_datetime_9768903c":{"message":"{ assignmentType } { title }, tutto il giorno il { datetime }."},"assignmenttype_title_at_datetime_478f0709":{"message":"{ assignmentType } { title }, alle { datetime }."},"assignmenttype_title_at_datetime_until_endtime_a5900e38":{"message":"{ assignmentType } { title }, alle { datetime } fino alle { endTime }"},"assignmenttype_title_due_datetime_a112d8ff":{"message":"{ assignmentType } { title }, scade { datetime }."},"assignmenttype_title_has_a_to_do_time_at_datetime_e07310e8":{"message":"{ assignmentType } { title } ha un\'\'attività alle { datetime }."},"assignmenttype_title_is_marked_as_done_a8dc46ef":{"message":"{ assignmentType } { title } è contrassegnato come fatto."},"assignmenttype_title_is_not_marked_as_done_ba80ba66":{"message":"{ assignmentType } { title } non è contrassegnato come fatto."},"assignmenttype_title_posted_datetime_cab69444":{"message":"{ assignmentType } { title } pubblicato { datetime }."},"assignmenttype_title_reminder_datetime_33fa66d5":{"message":"{ assignmentType } { title }, promemoria { datetime }."},"beginning_of_your_to_do_history_61ef2dce":{"message":"Inizio della cronologia delle cose da fare"},"calendar_a8563bb2":{"message":"Calendario:"},"calendar_event_89aadc1c":{"message":"Evento del calendario"},"canvas_planner_98ed106":{"message":"Canvas Planner"},"close_d634289d":{"message":"Chiudi"},"close_opportunity_center_popup_9907d981":{"message":"Chiudi finestra a comparsa Centro opportunità"},"count_plural_0_opportunities_one_opportunity_other_765e27fa":{"message":"{ count, plural,\\n     =0 {# opportunità}\\n    one {# opportunità}\\n  other {# opportunità}\\n}"},"count_plural_one_show_completed_item_other_show_co_8d0d0ae5":{"message":"{ count, plural,\\n    one {Mostra # elemento completato}\\n  other {Mostra # elementi completati}\\n}"},"course_8a63b4a3":{"message":"Corso"},"course_to_do_bcbbab54":{"message":"{ course } COSE DA FARE"},"date_at_time_dbdb1b99":{"message":"Il { date } alle { time }"},"date_ee500367":{"message":"Data"},"date_is_not_a_valid_date_4ef9f8ba":{"message":"#{ date } non è una data valida."},"date_is_required_8660ec22":{"message":"Data obbligatoria"},"date_time_d9fbf2d7":{"message":"Data e ora:"},"delete_a6efa79d":{"message":"Elimina"},"details_98a31b68":{"message":"Dettagli"},"details_a6f427c3":{"message":"Dettagli:"},"discussion_6719c51d":{"message":"Discussione"},"dismiss_itemtitle_a9fae1b3":{"message":"Ignora { itemTitle }"},"dismiss_opportunityname_5995176f":{"message":"Ignora { opportunityName }"},"dismissed_8b0b1fc9":{"message":"Ignorato"},"dismissed_opportunities_f0826640":{"message":"Opportunità ignorate"},"due_5d7267be":{"message":"Scadenza:"},"due_date_124fdd99":{"message":"Scadenza: { date }"},"edit_c5fbea07":{"message":"Modifica"},"edit_title_72e5a21e":{"message":"Modifica { title }"},"error_loading_grades_e0b38f4d":{"message":"Errore durante il caricamento dei voti"},"error_loading_more_items_3f109d9f":{"message":"Errore durante il caricamento di più elementi"},"error_loading_past_items_2881dbb1":{"message":"Errore durante il caricamento degli elementi precedenti"},"excused_cf8792eb":{"message":"Giustificato"},"failed_to_delete_to_do_64edff49":{"message":"Impossibile eliminare attività"},"failed_to_get_new_activity_17e7ec7c":{"message":"Impossibile trovare la nuova attività"},"failed_to_load_opportunities_52ab6404":{"message":"Impossibile caricare le opportunità"},"failed_to_save_to_do_ddc7503b":{"message":"Impossibile salvare attività"},"feedback_6dcc1991":{"message":"Feedback"},"go_to_card_view_dashboard_9d03970e":{"message":"Vai alla dashboard Visualizzazione schede"},"graded_25cd3fcd":{"message":"Valutato"},"grades_are_loading_c899652d":{"message":"Voti in fase di caricamento"},"grades_loaded_5056277c":{"message":"Voti caricati"},"items_completed_items_plural_1_item_other_items_717d579f":{"message":"{ items } elemento { items, plural,\\n     =1 {completato}\\n  other {elementi completati}\\n}"},"late_2be42b88":{"message":"In ritardo"},"list_collapsed_9ac35920":{"message":"L’elenco si è compresso."},"list_collapsed_dde87718":{"message":"L’elenco si è compresso."},"list_expanded_efec2d0":{"message":"L’elenco si è espanso."},"load_more_a36f9cf9":{"message":"Carica altro"},"load_prior_dates_f2b0f6f0":{"message":"Carica date precedenti"},"loaded_count_plural_0_items_one_item_other_items_e58533e9":{"message":"Caricamento di { count, plural,\\n     =0 {# elementi}\\n    one {# elemento}\\n  other {# elementi}\\n} eseguito"},"loading_25990131":{"message":"Caricamento in corso..."},"loading_725811ca":{"message":"caricamento"},"loading_grades_c842c887":{"message":"Caricamento voti"},"loading_past_items_ca499e75":{"message":"Caricamento elementi precedenti"},"loading_planner_items_947a813d":{"message":"Caricamento voci agenda"},"location_3b6ff307":{"message":"Posizione:"},"looks_like_there_isn_t_anything_here_d9bcef49":{"message":"Sembra non ci sia nulla qui"},"missing_1a256b3b":{"message":"Mancante"},"missing_items_for_title_516511f8":{"message":"Elementi mancanti per { title }"},"my_grades_98834476":{"message":"I miei voti"},"new_13daf639":{"message":"Nuovo"},"new_activity_8b84847d":{"message":"Nuova attività"},"new_activity_for_title_14c9c3af":{"message":"Nuova attività per { title }"},"new_opportunities_7d349c4d":{"message":"Nuove opportunità"},"next_month_749b1778":{"message":"Mese successivo"},"no_due_dates_assigned_e8f5bac8":{"message":"Nessuna data di scadenza assegnata"},"no_grade_3b4d7f3e":{"message":"Nessun voto"},"nothing_for_now_e3e3ce2a":{"message":"Nulla per ora"},"nothing_here_needs_attention_c4eaded6":{"message":"Nessun elemento richiede attenzione."},"nothing_more_to_do_b665da42":{"message":"Nessun\'\'altra attività"},"nothing_new_needs_attention_3ac548d4":{"message":"Nulla di nuovo richiede attenzione."},"nothing_planned_today_selecting_most_recent_item_ffd71bff":{"message":"Nulla in programma oggi. Selezione degli elementi più recenti."},"nothing_planned_today_selecting_next_item_f6718aa":{"message":"Nulla in programma oggi. Selezione del prossimo elemento."},"nothing_planned_yet_8675ffe9":{"message":"Ancora nulla programmato"},"numpoints_points_8621a43b":{"message":"{ numPoints } punti"},"only_most_recent_grading_period_shown_f1ad6458":{"message":"*Viene mostrato solo il periodo di valutazione più recente."},"opportunities_popup_f6703842":{"message":"popup opportunità"},"option_selected_list_collapsed_e00180ff":{"message":"{ option } selezionato. L’elenco si è compresso."},"optional_add_course_ef0d70fc":{"message":"Facoltativo: Aggiungi corso"},"page_50c4823d":{"message":"Pagina"},"peer_review_74f26a13":{"message":"Revisione paritaria"},"peer_review_for_itemtitle_358cb413":{"message":"Riesame tra pari per { itemTitle }"},"points_bceb5005":{"message":"punti"},"points_points_63e59cce":{"message":"{ points } punti"},"previous_month_bb1e3c84":{"message":"Mese precedente"},"pts_699bd9aa":{"message":"pt"},"quiz_e0dcce8f":{"message":"Quiz"},"reminder_date_4564d12d":{"message":"Promemoria: { date }"},"replies_4a8577c8":{"message":"Risposte"},"save_11a80ec3":{"message":"Salva"},"scroll_up_to_see_your_history_19b14cad":{"message":"Scorrere per visualizzare la cronologia."},"scrolls_up_to_the_previous_item_with_new_activity_99717459":{"message":"Scorre fino all\'\'elemento precedente con la nuova attività."},"show_all_ae37d610":{"message":"Mostra tutto"},"show_my_grades_ebd08684":{"message":"Mostra I miei voti"},"startdate_to_enddate_d245175b":{"message":"{ startDate } a { endDate }"},"startdatetime_enddatetime_20abc10e":{"message":"{ startDateTime } - { endDateTime }"},"startdatetime_endtime_49741bbe":{"message":"{ startDateTime } - { endTime }"},"starttime_to_endtime_d7cc249d":{"message":"{ startTime } a { endTime }"},"submitted_318fad53":{"message":"Inviato"},"success_to_do_created_e34ed395":{"message":"Operazione riuscita: Cose da fare create"},"task_16b0ef38":{"message":"Attività"},"the_date_and_time_this_to_do_is_due_74c823d4":{"message":"Data e ora elemento elenco attività scaduta"},"there_are_no_points_associated_with_this_item_449c712a":{"message":"Non ci sono punti associati a questo elemento"},"time_2b5aac58":{"message":"Ora"},"title_ee03d132":{"message":"Titolo"},"title_is_required_6ddcab69":{"message":"titolo obbligatorio"},"to_do_1d554f36":{"message":"Elenco attività"},"to_do_date_4b211ad0":{"message":"Elenco attività: { date }"},"to_do_items_loading_d1cdfcd5":{"message":"Caricamento elementi elenco attività"},"today_76e10f9c":{"message":"Oggi"},"today_at_date_8ac30d6":{"message":"Oggi alle { date }"},"tomorrow_9a6c9a00":{"message":"Domani"},"tomorrow_at_date_b53f2cf1":{"message":"Domani alle { date }"},"unable_to_mark_as_complete_8141856d":{"message":"Impossibile contrassegnare come completato."},"use_arrow_keys_to_navigate_options_2021cc50":{"message":"Utilizza i tasti freccia per spostarti tra le opzioni."},"yesterday_at_date_1aa6d18e":{"message":"Ieri alle { date }"},"yesterday_c6bd6abf":{"message":"Ieri"},"you_have_media_feedback_f5f9aba8":{"message":"Hai un feedback sui file multimediali."},"you_must_provide_a_date_and_time_a86839d2":{"message":"È necessario fornire data e ora."},"you_ve_scrolled_back_to_your_very_first_to_do_29374681":{"message":"Sei tornato indietro alle tue prime cose da fare."}}')},zYwU:function(e,t,a){var s=a("Pwfc")
var n=a("jDM7")
e.exports=function(e,t){return s(e,t).replace(/^.| ./g,(function(e){return n(e,t)}))}}}])

//# sourceMappingURL=126-c-091ec7ea82.js.map