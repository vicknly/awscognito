(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{414:function(e,t,o){"use strict";o.r(t);var r={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}}},n=o(16),component=Object(n.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"page-title-box d-flex align-items-center justify-content-between"},[t("h4",{staticClass:"mb-0"},[this._v(this._s(this.title))]),this._v(" "),t("div",{staticClass:"page-title-right"},[t("b-breadcrumb",{staticClass:"m-0",attrs:{items:this.items}})],1)])])])}),[],!1,null,null,null);t.default=component.exports},994:function(e,t,o){"use strict";o.r(t);var r={head:function(){return{title:"".concat(this.title," | Nuxtjs Responsive Bootstrap 4 Admin Dashboard")}},data:function(){return{title:"Form Mask",items:[{text:"Forms",href:"/"},{text:"Form Mask",active:!0}],digit:"",zipcode:"",crazyzip:"",money:"",date:"",hour:"",datetime:"",ipaddress:"",cnpj:"",cpf:"",celphone:"",ustelephone:"",areacode:"",telephone:""}},middleware:"authentication"},n=o(16),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("PageHeader",{attrs:{title:e.title,items:e.items}}),e._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-body"},[o("h4",{staticClass:"card-title mb-4"},[e._v("Example")]),e._v(" "),o("form",[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-6"},[o("div",[o("div",{staticClass:"form-group mb-4"},[o("label",{attrs:{for:"input-date1"}},[e._v("Date")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"},{name:"mask",rawName:"v-mask",value:"##/##/####",expression:"'##/##/####'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.date},on:{input:function(t){t.target.composing||(e.date=t.target.value)}}}),e._v(" "),o("span",{staticClass:"text-muted"},[e._v('e.g "dd/mm/yyyy"')])]),e._v(" "),o("div",{staticClass:"form-group mb-4"},[o("label",[e._v("Hour")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.hour,expression:"hour"},{name:"mask",rawName:"v-mask",value:"##:##:##",expression:"'##:##:##'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.hour},on:{input:function(t){t.target.composing||(e.hour=t.target.value)}}}),e._v(" "),o("span",{staticClass:"text-muted"},[e._v('e.g "hh:mm:ss"')])]),e._v(" "),o("div",{staticClass:"form-group mb-4"},[o("label",[e._v("Date & Hour")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.datetime,expression:"datetime"},{name:"mask",rawName:"v-mask",value:"##/##/#### ##:##:##",expression:"'##/##/#### ##:##:##'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.datetime},on:{input:function(t){t.target.composing||(e.datetime=t.target.value)}}}),e._v(" "),o("span",{staticClass:"text-muted"},[e._v('e.g "dd/mm/yyyy hh:mm:ss"')])]),e._v(" "),o("div",{staticClass:"form-group mb-4"},[o("label",[e._v("ZIP Code")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.zipcode,expression:"zipcode"},{name:"mask",rawName:"v-mask",value:"#####-###",expression:"'#####-###'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.zipcode},on:{input:function(t){t.target.composing||(e.zipcode=t.target.value)}}}),e._v(" "),o("span",{staticClass:"text-muted"},[e._v('e.g "xxxxx-xxx"')])]),e._v(" "),o("div",{staticClass:"form-group mb-4"},[o("label",[e._v("Crazy Zip Code")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.crazyzip,expression:"crazyzip"},{name:"mask",rawName:"v-mask",value:"#-##-##-##",expression:"'#-##-##-##'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.crazyzip},on:{input:function(t){t.target.composing||(e.crazyzip=t.target.value)}}}),e._v(" "),o("span",{staticClass:"text-muted"},[e._v('e.g "x-xx-xx-xx"')])]),e._v(" "),o("div",{staticClass:"form-group mb-4"},[o("label",[e._v("Money")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.money,expression:"money"},{name:"mask",rawName:"v-mask",value:"###.###.###.###.###,##",expression:"'###.###.###.###.###,##'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.money},on:{input:function(t){t.target.composing||(e.money=t.target.value)}}}),e._v(" "),o("span",{staticClass:"text-muted"},[e._v('e.g "Your money"')])]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",[e._v("4 digit Group")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.digit,expression:"digit"},{name:"mask",rawName:"v-mask",value:"#,####,####,####",expression:"'#,####,####,####'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.digit},on:{input:function(t){t.target.composing||(e.digit=t.target.value)}}}),e._v(" "),o("span",{staticClass:"text-muted"},[e._v('e.g. "x,xxxx,xxxx,xxxx"')])])])]),e._v(" "),o("div",{staticClass:"col-lg-6"},[o("div",{staticClass:"form-group mb-4"},[o("label",[e._v("Telephone")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.telephone,expression:"telephone"},{name:"mask",rawName:"v-mask",value:"####-####",expression:"'####-####'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.telephone},on:{input:function(t){t.target.composing||(e.telephone=t.target.value)}}}),e._v(" "),o("span",{staticClass:"text-muted"},[e._v('e.g "xxxx-xxxx"')])]),e._v(" "),o("div",{staticClass:"form-group mb-4"},[o("label",[e._v("Telephone with Code Area")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.areacode,expression:"areacode"},{name:"mask",rawName:"v-mask",value:"(##) ####-####",expression:"'(##) ####-####'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.areacode},on:{input:function(t){t.target.composing||(e.areacode=t.target.value)}}}),e._v(" "),o("span",{staticClass:"text-muted"},[e._v('e.g "(xx) xxxx-xxxx"')])]),e._v(" "),o("div",{staticClass:"form-group mb-4"},[o("label",[e._v("US Telephone")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.ustelephone,expression:"ustelephone"},{name:"mask",rawName:"v-mask",value:"(###) ###-####",expression:"'(###) ###-####'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.ustelephone},on:{input:function(t){t.target.composing||(e.ustelephone=t.target.value)}}}),e._v(" "),o("span",{staticClass:"text-muted"},[e._v('e.g "(xxx) xxx-xxxx"')])]),e._v(" "),o("div",{staticClass:"form-group mb-4"},[o("label",[e._v("São Paulo Celphones")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.celphone,expression:"celphone"},{name:"mask",rawName:"v-mask",value:"(##) #####-####",expression:"'(##) #####-####'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.celphone},on:{input:function(t){t.target.composing||(e.celphone=t.target.value)}}}),e._v(" "),o("span",{staticClass:"text-muted"},[e._v('e.g "(xx) xxxxx-xxxx"')])]),e._v(" "),o("div",{staticClass:"form-group mb-4"},[o("label",[e._v("CPF")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.cpf,expression:"cpf"},{name:"mask",rawName:"v-mask",value:"###.###.###-##",expression:"'###.###.###-##'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.cpf},on:{input:function(t){t.target.composing||(e.cpf=t.target.value)}}}),e._v(" "),o("span",{staticClass:"text-muted"},[e._v('e.g "xxx.xxx.xxxx-xx"')])]),e._v(" "),o("div",{staticClass:"form-group mb-4"},[o("label",[e._v("CNPJ")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.cnpj,expression:"cnpj"},{name:"mask",rawName:"v-mask",value:"##.###.###/####-##",expression:"'##.###.###/####-##'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.cnpj},on:{input:function(t){t.target.composing||(e.cnpj=t.target.value)}}}),e._v(" "),o("span",{staticClass:"text-muted"},[e._v('e.g "xx.xxx.xxx/xxxx-xx"')])]),e._v(" "),o("div",{staticClass:"form-group mb-4"},[o("label",[e._v("IP Address")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.ipaddress,expression:"ipaddress"},{name:"mask",rawName:"v-mask",value:"###.###.###.###",expression:"'###.###.###.###'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.ipaddress},on:{input:function(t){t.target.composing||(e.ipaddress=t.target.value)}}}),e._v(" "),o("span",{staticClass:"text-muted"},[e._v('e.g "xxx.xxx.xxx.xxx"')])])])])])])])])])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PageHeader:o(414).default})}}]);