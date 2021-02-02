(window.webpackJsonp=window.webpackJsonp||[]).push([[24,23],{414:function(t,e,r){"use strict";r.r(e);var o={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}}},l=r(16),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"page-title-box d-flex align-items-center justify-content-between"},[e("h4",{staticClass:"mb-0"},[this._v(this._s(this.title))]),this._v(" "),e("div",{staticClass:"page-title-right"},[e("b-breadcrumb",{staticClass:"m-0",attrs:{items:this.items}})],1)])])])}),[],!1,null,null,null);e.default=component.exports},681:function(t,e,r){"use strict";r.r(e),r.d(e,"linewithDataChart",(function(){return o})),r.d(e,"dashedLineChart",(function(){return l})),r.d(e,"splineAreaChart",(function(){return n})),r.d(e,"columnChart",(function(){return c})),r.d(e,"columnDatalabelChart",(function(){return d})),r.d(e,"barChart",(function(){return h})),r.d(e,"mixedChart",(function(){return C})),r.d(e,"radialChart",(function(){return f})),r.d(e,"pieChart",(function(){return m})),r.d(e,"donutChart",(function(){return v}));r(119);var o={chartOptions:{chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:["#5b73e8","#f1b44c"],dataLabels:{enabled:!0},stroke:{width:[3,3],curve:"straight"},title:{text:"Average High & Low Temperature",align:"left"},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f1f1"},markers:{style:"inverted",size:6},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"],title:{text:"Month"}},yaxis:{title:{text:"Temperature"},min:5,max:40},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5},responsive:[{breakpoint:600,options:{chart:{toolbar:{show:!1}},legend:{show:!1}}}]},series:[{name:"High - 2018",data:[26,24,32,36,33,31,33]},{name:"Low - 2018",data:[14,11,16,12,17,13,12]}]},l={series:[{name:"Session Duration",data:[45,52,38,24,33,26,21,20,6,8,15,10]},{name:"Page Views",data:[36,42,60,42,13,18,29,37,36,51,32,35]},{name:"Total Visits",data:[89,56,74,98,72,38,64,46,84,58,46,49]}],chartOptions:{chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:["#5b73e8","#f1b44c","#34c38f"],dataLabels:{enabled:!1},stroke:{width:[3,4,3],curve:"straight",dashArray:[0,8,5]},title:{text:"Page Statistics",align:"left"},markers:{size:0,hover:{sizeOffset:6}},xaxis:{categories:["01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan","07 Jan","08 Jan","09 Jan","10 Jan","11 Jan","12 Jan"]},tooltip:{y:[{title:{formatter:function(t){return t+" (mins)"}}},{title:{formatter:function(t){return t+" per session"}}},{title:{formatter:function(t){return t}}}]},grid:{borderColor:"#f1f1f1"}}},n={series:[{name:"series1",data:[34,40,28,52,42,109,100]},{name:"series2",data:[32,60,34,46,34,52,41]}],chartOptions:{dataLabels:{enabled:!1},stroke:{curve:"smooth",width:3},colors:["#5b73e8","#f1b44c"],xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"]},grid:{borderColor:"#f1f1f1"},tooltip:{x:{format:"dd/MM/yy HH:mm"}}}},c={series:[{name:"Net Profit",data:[46,57,59,54,62,58,64,60,66]},{name:"Revenue",data:[74,83,102,97,86,106,93,114,94]},{name:"Free Cash Flow",data:[37,42,38,26,47,50,54,55,43]}],chartOptions:{chart:{toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"45%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},colors:["#f1b44c","#5b73e8","#34c38f"],xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},yaxis:{title:{text:"$ (thousands)"}},grid:{borderColor:"#f1f1f1"},fill:{opacity:1},tooltip:{y:{formatter:function(t){return"$ "+t+" thousands"}}}}},d={series:[{name:"Inflation",data:[2.5,3.2,5,10.1,4.2,3.8,3,2.4,4,1.2,3.5,.8]}],chartOptions:{chart:{toolbar:{show:!1}},plotOptions:{bar:{dataLabels:{position:"top"}}},dataLabels:{enabled:!0,formatter:function(t){return t+"%"},offsetY:-20,style:{fontSize:"12px",colors:["#304758"]}},colors:["#5b73e8"],grid:{borderColor:"#f1f1f1"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],position:"top",labels:{offsetY:-18},axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{fill:{type:"gradient",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}}},tooltip:{enabled:!0,offsetY:-35}},fill:{gradient:{shade:"light",type:"horizontal",shadeIntensity:.25,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[50,0,100,100]}},yaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,formatter:function(t){return t+"%"}}},title:{text:"Monthly Inflation in Argentina, 2002",floating:!0,offsetY:320,align:"center",style:{color:"#444"}}}},h={series:[{data:[380,430,450,475,550,584,780,1100,1220,1365]}],chartOptions:{chart:{toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0}},dataLabels:{enabled:!1},colors:["#34c38f"],grid:{borderColor:"#f1f1f1"},xaxis:{categories:["South Korea","Canada","United Kingdom","Netherlands","Italy","France","Japan","United States","China","Germany"]}}},C={series:[{name:"Team A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Team B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Team C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}],chartOptions:{chart:{stacked:!1,toolbar:{show:!1}},stroke:{width:[0,2,4],curve:"smooth"},plotOptions:{bar:{columnWidth:"50%"}},colors:["#34c38f","#f4f4f4","#f1b44c"],fill:{opacity:[.85,.25,1],gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.85,opacityTo:.55,stops:[0,100,100,100]}},labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],markers:{size:0},legend:{offsetY:-10},xaxis:{type:"datetime"},yaxis:{title:{text:"Points"}},tooltip:{shared:!0,intersect:!1,y:{formatter:function(t){return void 0!==t?t.toFixed(0)+" points":t}}},grid:{borderColor:"#f1f1f1"}}},f={series:[44,55,67,83],chartOptions:{plotOptions:{radialBar:{dataLabels:{name:{fontSize:"22px"},value:{fontSize:"16px"},total:{show:!0,label:"Total",formatter:function(t){return 249}}}}},labels:["Computer","Tablet","Laptop","Mobile"],colors:["#5b73e8","#34c38f","#50a5f1","#f1b44c"]}},m={series:[44,55,41,17,15],chartOptions:{labels:["Series 1","Series 2","Series 3","Series 4","Series 5"],colors:["#34c38f","#556ee6","#f46a6a","#50a5f1","#f1b44c"],legend:{show:!0,position:"bottom",horizontalAlign:"center",verticalAlign:"middle",floating:!1,fontSize:"14px",offsetX:0,offsetY:-10},responsive:[{breakpoint:600,options:{chart:{height:240},legend:{show:!1}}}]}},v={series:[44,55,41,17,15],chartOptions:{labels:["Series 1","Series 2","Series 3","Series 4","Series 5"],colors:["#34c38f","#5b73e8","#f1b44c","#50a5f1","#f46a6a"],legend:{show:!0,position:"bottom",horizontalAlign:"center",verticalAlign:"middle",floating:!1,fontSize:"14px",offsetX:0,offsetY:-10},responsive:[{breakpoint:600,options:{chart:{height:240},legend:{show:!1}}}]}}},978:function(t,e,r){"use strict";r.r(e);var o=r(681),l={head:function(){return{title:"".concat(this.title," | Nuxtjs Responsive Bootstrap 4 Admin Dashboard")}},data:function(){return{linewithDataChart:o.linewithDataChart,dashedLineChart:o.dashedLineChart,splineAreaChart:o.splineAreaChart,columnChart:o.columnChart,columnDatalabelChart:o.columnDatalabelChart,barChart:o.barChart,mixedChart:o.mixedChart,radialChart:o.radialChart,pieChart:o.pieChart,donutChart:o.donutChart,title:"Apex charts",items:[{text:"Charts",href:"/"},{text:"Apex charts",active:!0}]}},middleware:"authentication"},n=r(16),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("PageHeader",{attrs:{title:t.title,items:t.items}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"card-title mb-4"},[t._v("Line With Data Labels")]),t._v(" "),r("apexchart",{staticClass:"apex-charts",attrs:{height:"380",type:"line",dir:"ltr",series:t.linewithDataChart.series,options:t.linewithDataChart.chartOptions}})],1)])]),t._v(" "),r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"card-title mb-4"},[t._v("Dashed Line")]),t._v(" "),r("apexchart",{staticClass:"apex-charts",attrs:{height:"380",type:"line",dir:"ltr",series:t.dashedLineChart.series,options:t.dashedLineChart.chartOptions}})],1)])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"card-title mb-4"},[t._v("Spline Area")]),t._v(" "),r("apexchart",{staticClass:"apex-charts",attrs:{height:"350",type:"area",dir:"ltr",series:t.splineAreaChart.series,options:t.splineAreaChart.chartOptions}})],1)])]),t._v(" "),r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"card-title mb-4"},[t._v("Column Charts")]),t._v(" "),r("apexchart",{staticClass:"apex-charts",attrs:{height:"350",type:"bar",dir:"ltr",series:t.columnChart.series,options:t.columnChart.chartOptions}})],1)])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"card-title mb-4"},[t._v("Column With Data Labels")]),t._v(" "),r("apexchart",{staticClass:"apex-charts",attrs:{height:"350",type:"bar",dir:"ltr",series:t.columnDatalabelChart.series,options:t.columnDatalabelChart.chartOptions}})],1)])]),t._v(" "),r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"card-title mb-4"},[t._v("Bar Chart")]),t._v(" "),r("apexchart",{staticClass:"apex-charts",attrs:{height:"350",type:"bar",dir:"ltr",series:t.barChart.series,options:t.barChart.chartOptions}})],1)])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"card-title mb-4"},[t._v("Line, Column & Area Chart")]),t._v(" "),r("apexchart",{staticClass:"apex-charts",attrs:{height:"350",type:"line",dir:"ltr",series:t.mixedChart.series,options:t.mixedChart.chartOptions}})],1)])]),t._v(" "),r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"card-title mb-4"},[t._v("Radial Chart")]),t._v(" "),r("apexchart",{staticClass:"apex-charts",attrs:{height:"380",type:"radialBar",dir:"ltr",series:t.radialChart.series,options:t.radialChart.chartOptions}})],1)])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"card-title mb-4"},[t._v("Pie Chart")]),t._v(" "),r("apexchart",{staticClass:"apex-charts",attrs:{height:"320",type:"pie",dir:"ltr",series:t.pieChart.series,options:t.pieChart.chartOptions}})],1)])]),t._v(" "),r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"card-title mb-4"},[t._v("Donut Chart")]),t._v(" "),r("apexchart",{staticClass:"apex-charts",attrs:{height:"320",type:"donut",dir:"ltr",series:t.donutChart.series,options:t.donutChart.chartOptions}})],1)])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:r(414).default})}}]);