(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{414:function(t,e,l){"use strict";l.r(e);var r={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}}},n=l(16),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"page-title-box d-flex align-items-center justify-content-between"},[e("h4",{staticClass:"mb-0"},[this._v(this._s(this.title))]),this._v(" "),e("div",{staticClass:"page-title-right"},[e("b-breadcrumb",{staticClass:"m-0",attrs:{items:this.items}})],1)])])])}),[],!1,null,null,null);e.default=component.exports},420:function(t,e,l){t.exports=l.p+"img/avatar-2.02aea0c.jpg"},597:function(t,e,l){t.exports=l.p+"img/avatar-7.9524b09.jpg"},610:function(t,e,l){t.exports=l.p+"img/avatar-8.bc11bfd.jpg"},982:function(t,e,l){"use strict";l.r(e);var r={head:function(){return{title:"".concat(this.title," | Nuxtjs Responsive Bootstrap 4 Admin Dashboard")}},data:function(){return{title:"User List",items:[{text:"Contacts"},{text:"User List",active:!0}],userList:[{id:1,profile:l(420),name:"Simon Ryles",position:"Full Stack Developer",email:"SimonRyles@minible.com"},{id:2,profile:l(166),name:"Marion Walker",position:"Frontend Developer",email:"MarionWalker@minible.com"},{id:3,name:"Frederick White",position:"Frontend Developer",email:"MarionWalker@minible.com"},{id:4,profile:l(93),name:"Shanon Marvin",position:"Backend Developer",email:"ShanonMarvin@minible.com"},{id:5,name:"Mark Jones",position:"Frontend Developer",email:"MarkJones@minible.com"},{id:6,profile:l(597),name:"Patrick Petty",position:"UI/UX Designer",email:"PatrickPetty@minible.com"},{id:7,profile:l(610),name:"Marilyn Horton",position:"Backend Developer",email:"MarilynHorton@minible.com"},{id:8,profile:l(420),name:"Neal Womack",position:"Full Stack Developer",email:"NealWomack@minible.com"},{id:9,profile:l(420),name:"Steven Williams",position:"Frontend Developer",email:"StevenWilliams@minible.com"}],totalRows:1,currentPage:1,perPage:10,pageOptions:[10,25,50,100],filter:null,filterOn:[],sortBy:"age",sortDesc:!1,fields:[{key:"check",label:""},{key:"name"},{key:"position"},{key:"email"},"action"]}},computed:{rows:function(){return this.userList.length}},mounted:function(){this.totalRows=this.items.length},methods:{onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}},middleware:"authentication"},n=l(16),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("PageHeader",{attrs:{title:t.title,items:t.items}}),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"card"},[l("div",{staticClass:"card-body"},[l("div",{staticClass:"row mt-4"},[l("div",{staticClass:"col-sm-12 col-md-6"},[l("div",{staticClass:"dataTables_length",attrs:{id:"tickets-table_length"}},[l("label",{staticClass:"d-inline-flex align-items-center"},[t._v("\r\n                                    Show \r\n                                    "),l("b-form-select",{attrs:{size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}}),t._v(" entries\r\n                                ")],1)])]),t._v(" "),l("div",{staticClass:"col-sm-12 col-md-6"},[l("div",{staticClass:"dataTables_filter text-md-right",attrs:{id:"tickets-table_filter"}},[l("label",{staticClass:"d-inline-flex align-items-center"},[t._v("\r\n                                    Search:\r\n                                    "),l("b-form-input",{staticClass:"form-control form-control-sm ml-2",attrs:{type:"search",placeholder:"Search..."},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)])])]),t._v(" "),l("div",{staticClass:"table-responsive mb-0"},[l("b-table",{staticClass:"table table-centered table-nowrap",attrs:{items:t.userList,fields:t.fields,responsive:"sm","per-page":t.perPage,"current-page":t.currentPage,"sort-by":t.sortBy,"sort-desc":t.sortDesc,filter:t.filter,"filter-included-fields":t.filterOn},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(check)",fn:function(data){return[l("div",{staticClass:"custom-control custom-checkbox"},[l("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"contacusercheck"+data.item.id}}),t._v(" "),l("label",{staticClass:"custom-control-label",attrs:{for:"contacusercheck"+data.item.id}})])]}},{key:"cell(name)",fn:function(data){return[data.item.profile?l("img",{staticClass:"avatar-xs rounded-circle mr-2",attrs:{src:data.item.profile,alt:""}}):t._e(),t._v(" "),data.item.profile?t._e():l("div",{staticClass:"avatar-xs d-inline-block mr-2"},[l("div",{staticClass:"avatar-title bg-soft-primary rounded-circle text-primary"},[l("i",{staticClass:"mdi mdi-account-circle m-0"})])]),t._v(" "),l("a",{staticClass:"text-body",attrs:{href:"#"}},[t._v(t._s(data.item.name))])]}},{key:"cell(action)",fn:function(){return[l("ul",{staticClass:"list-inline mb-0"},[l("li",{staticClass:"list-inline-item"},[l("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"px-2 text-primary",attrs:{href:"javascript:void(0);",title:"Edit"}},[l("i",{staticClass:"uil uil-pen font-size-18"})])]),t._v(" "),l("li",{staticClass:"list-inline-item"},[l("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"px-2 text-danger",attrs:{href:"javascript:void(0);",title:"Delete"}},[l("i",{staticClass:"uil uil-trash-alt font-size-18"})])]),t._v(" "),l("b-dropdown",{staticClass:"list-inline-item",attrs:{variant:"white",right:"","toggle-class":"text-muted font-size-18 px-2"},scopedSlots:t._u([{key:"button-content",fn:function(){return[l("i",{staticClass:"uil uil-ellipsis-v"})]},proxy:!0}])},[t._v(" "),l("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),l("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),l("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])],1)]},proxy:!0}])})],1),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col"},[l("div",{staticClass:"dataTables_paginate paging_simple_numbers float-right"},[l("ul",{staticClass:"pagination pagination-rounded mb-0"},[l("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])])])])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:l(414).default})}}]);