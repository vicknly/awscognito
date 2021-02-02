(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1006:function(e,t,l){"use strict";l.r(t);l(14),l(23);var o={data:function(){return{title:"Google Maps",items:[{text:"Maps",href:"/"},{text:"Google Maps",active:!0}],markers:[{position:{lat:10,lng:10}},{position:{lat:15,lng:13}}],pov:null,pano:null,edited:null,paths:[[{lat:1.38,lng:103.8},{lat:1.38,lng:103.81},{lat:1.39,lng:103.81},{lat:1.39,lng:103.8}],[{lat:1.382,lng:103.802},{lat:1.382,lng:103.808},{lat:1.388,lng:103.808},{lat:1.388,lng:103.802}]],scope:"usa",geographyConfig:{highlightBorderColor:"#bada55",highlightBorderWidth:3},fills:{Republican:"#CC4731",Democrat:"#306596","Heavy Democrat":"#667FAF","Light Democrat":"#A9C0DE","Heavy Republican":"#CA5E5B","Light Republican":"#EAA9A8",defaultFill:"#EDDC4E"},data:{AZ:{fillKey:"Republican",electoralVotes:5},CO:{fillKey:"Light Democrat",electoralVotes:5},DE:{fillKey:"Democrat",electoralVotes:32},FL:{fillKey:"UNDECIDED",electoralVotes:29},GA:{fillKey:"Republican",electoralVotes:32},HI:{fillKey:"Democrat",electoralVotes:32},ID:{fillKey:"Republican",electoralVotes:32},IL:{fillKey:"Democrat",electoralVotes:32},IN:{fillKey:"Republican",electoralVotes:11},IA:{fillKey:"Light Democrat",electoralVotes:11},KS:{fillKey:"Republican",electoralVotes:32},KY:{fillKey:"Republican",electoralVotes:32},LA:{fillKey:"Republican",electoralVotes:32},MD:{fillKey:"Democrat",electoralVotes:32},ME:{fillKey:"Democrat",electoralVotes:32},MA:{fillKey:"Democrat",electoralVotes:32},MN:{fillKey:"Democrat",electoralVotes:32},MI:{fillKey:"Democrat",electoralVotes:32},MS:{fillKey:"Republican",electoralVotes:32},MO:{fillKey:"Republican",electoralVotes:13},MT:{fillKey:"Republican",electoralVotes:32},NC:{fillKey:"Light Republican",electoralVotes:32},NE:{fillKey:"Republican",electoralVotes:32},NV:{fillKey:"Heavy Democrat",electoralVotes:32},NH:{fillKey:"Light Democrat",electoralVotes:32},NJ:{fillKey:"Democrat",electoralVotes:32},NY:{fillKey:"Democrat",electoralVotes:32},ND:{fillKey:"Republican",electoralVotes:32},NM:{fillKey:"Democrat",electoralVotes:32},OH:{fillKey:"UNDECIDED",electoralVotes:32},OK:{fillKey:"Republican",electoralVotes:32},OR:{fillKey:"Democrat",electoralVotes:32},PA:{fillKey:"Democrat",electoralVotes:32},RI:{fillKey:"Democrat",electoralVotes:32},SC:{fillKey:"Republican",electoralVotes:32},SD:{fillKey:"Republican",electoralVotes:32},TN:{fillKey:"Republican",electoralVotes:32},TX:{fillKey:"Republican",electoralVotes:32},UT:{fillKey:"Republican",electoralVotes:32},WI:{fillKey:"Democrat",electoralVotes:32},VA:{fillKey:"Light Democrat",electoralVotes:32},VT:{fillKey:"Democrat",electoralVotes:32},WA:{fillKey:"Democrat",electoralVotes:32},WV:{fillKey:"Republican",electoralVotes:32},WY:{fillKey:"Republican",electoralVotes:32},CA:{fillKey:"Democrat",electoralVotes:32},CT:{fillKey:"Democrat",electoralVotes:32},AK:{fillKey:"Republican",electoralVotes:32},AR:{fillKey:"Republican",electoralVotes:32},AL:{fillKey:"Republican",electoralVotes:32}},popupData:""}},methods:{updatePov:function(e){this.pov=e},updatePano:function(e){this.pano=e},updateEdited:function(e){for(var t=[],i=0;i<e.getLength();i++){for(var path=[],l=0;l<e.getAt(i).getLength();l++){var o=e.getAt(i).getAt(l);path.push({lat:o.lat(),lng:o.lng()})}t.push(path)}this.edited=t},popupTemplate:function(e){var t=e.geography,l=e.datum;this.popupData="".concat(t.properties.name,"\nElectoral Votes: ").concat(l.electoralVotes)}},middleware:"authentication"},c=l(16),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("PageHeader",{attrs:{title:e.title,items:e.items}}),e._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6"},[l("div",{staticClass:"card"},[l("div",{staticClass:"card-body"},[l("h4",{staticClass:"card-title"},[e._v("Basic")]),e._v(" "),l("p",{staticClass:"card-title-dsec"},[e._v("Example of google maps.")]),e._v(" "),l("GmapMap",{staticStyle:{height:"300px"},attrs:{center:{lat:2,lng:2},zoom:5}})],1)])]),e._v(" "),l("div",{staticClass:"col-lg-6"},[l("div",{staticClass:"card"},[l("div",{staticClass:"card-body"},[l("h4",{staticClass:"card-title"},[e._v("Markers")]),e._v(" "),l("p",{staticClass:"card-title-dsec"},[e._v("Example of google maps.")]),e._v(" "),l("gmap-map",{staticStyle:{height:"300px"},attrs:{center:{lat:11,lng:12},zoom:3}},e._l(e.markers,(function(t,o){return l("gmap-marker",{key:o,attrs:{position:t.position,clickable:!0,draggable:!0},on:{click:function(l){e.center=t.position}}})})),1)],1)])])]),e._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6"},[l("div",{staticClass:"card"},[l("div",{staticClass:"card-body"},[l("h4",{staticClass:"card-title"},[e._v("Street View Panoramas")]),e._v(" "),l("p",{staticClass:"card-title-dsec"},[e._v("Example of google maps.")]),e._v(" "),l("gmap-street-view-panorama",{staticStyle:{height:"300px"},attrs:{position:{lat:52.201272,lng:.11872},pov:e.pov,zoom:1},on:{pano_changed:e.updatePano,pov_changed:e.updatePov}})],1)])]),e._v(" "),l("div",{staticClass:"col-lg-6"},[l("div",{staticClass:"card"},[l("div",{staticClass:"card-body"},[l("h4",{staticClass:"card-title"},[e._v("Polygon Editing")]),e._v(" "),l("p",{staticClass:"card-title-dsec"},[e._v("Example of google maps.")]),e._v(" "),l("gmap-map",{staticStyle:{height:"300px"},attrs:{center:{lat:1.38,lng:103.8},zoom:12}},[l("gmap-polygon",{attrs:{paths:e.paths,editable:!0},on:{paths_changed:function(t){return e.updateEdited(t)}}})],1)],1)])])]),e._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6"},[l("div",{staticClass:"card"},[l("div",{staticClass:"card-body"},[l("h4",{staticClass:"card-title"},[e._v("Map type")]),e._v(" "),l("p",{staticClass:"card-title-dsec"},[e._v("Example of google maps.")]),e._v(" "),l("gmap-map",{staticStyle:{height:"300px"},attrs:{center:{lat:4,lng:4},zoom:3,"map-type-id":"terrain"}})],1)])])])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PageHeader:l(414).default})},414:function(e,t,l){"use strict";l.r(t);var o={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}}},c=l(16),component=Object(c.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"page-title-box d-flex align-items-center justify-content-between"},[t("h4",{staticClass:"mb-0"},[this._v(this._s(this.title))]),this._v(" "),t("div",{staticClass:"page-title-right"},[t("b-breadcrumb",{staticClass:"m-0",attrs:{items:this.items}})],1)])])])}),[],!1,null,null,null);t.default=component.exports}}]);