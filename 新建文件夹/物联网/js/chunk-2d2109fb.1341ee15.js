(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2109fb"],{b94b:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:e.className,style:{height:e.height,width:e.width},attrs:{id:e.id}})},o=[],r=i("313e"),n=i.n(r),l={props:{className:{type:String,default:"deviceLineChart"},id:{type:String,default:"deviceLineChart"},width:{type:String,default:"100%"},height:{type:String,default:"100%"}},data:function(){return{deviceLineChart:null}},mounted:function(){this.initChart(),this.deviceLineChart=null},methods:{initChart:function(e,t){this.deviceLineChart=n.a.init(document.getElementById(this.id));var i={tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:"#57617B"}}},legend:{itemWidth:8,itemHeight:8,itemGap:20,center:"center",data:[{name:"NB",icon:"circle",textStyle:{fontSize:12,color:"rgba(58,175,255,1)"}},{name:"2G",icon:"circle",textStyle:{fontSize:12,color:"rgba(255,210,52,1)"}}]},grid:{top:"36px",left:"4%",right:"5%",bottom:"8%",containLabel:!0},xAxis:[{type:"category",nameGap:8,nameTextStyle:{color:"rgba(184,226,255,.5)"},boundaryGap:!1,axisLine:{show:!1},axisLabel:{textStyle:{color:"rgba(184,226,255,1)"},formatter:function(e){var t=e+"%";return t}},axisTick:{show:!1},data:["10","20","30","40","50","60","70","80","90","100"]}],yAxis:[{type:"value",name:"10K units",nameTextStyle:{color:"rgba(184,226,255,.5)"},nameGap:20,splitNumber:5,axisLine:{show:!1},axisLabel:{show:!0,formatter:function(e){var t=[];return 0==e?t.push(0):e<=2e5?t.push(20):e<=4e5?t.push(40):e<=6e5?t.push(60):e<=8e5?t.push(80):e<=1e6&&t.push(100),t},textStyle:{color:"rgba(184,226,255,1)"}},splitLine:{lineStyle:{color:"rgb(23,255,243,0.3)",type:"dotted"}},axisTick:{show:!1}}],series:[{name:"NB",type:"line",smooth:!0,symbol:"circle",symbolSize:3,showSymbol:!1,lineStyle:{normal:{width:2}},areaStyle:{normal:{color:new n.a.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"rgb(58,175,255,0.5)"},{offset:0,color:"rgba(58,178,255,0.2)"}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},itemStyle:{normal:{color:new n.a.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"rgba(58,178,255)"},{offset:1,color:"rgba(58,175,255)"}])},emphasis:{color:"rgb(58,178,255)",borderColor:"rgba(58,178,255)",borderWidth:2}},data:e,animation:!0,animationDuration:3e3,animationEasingUpdate:"quinticInOut"},{name:"2G",type:"line",smooth:!0,symbol:"circle",symbolSize:3,showSymbol:!1,lineStyle:{normal:{width:2}},areaStyle:{normal:{color:new n.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(255,166,52,0.2)"},{offset:.8,color:"rgba(255,166,52,0.2)"}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:2}},itemStyle:{normal:{color:new n.a.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"rgba(255,166,52)"},{offset:1,color:"rgba(255,166,52)"}])},emphasis:{color:"rgb(255,166,52,0.2)",borderColor:"rgba(255,166,52)",borderWidth:2}},data:t,animation:!0,animationDuration:3e3}]};this.deviceLineChart.setOption(i),window.addEventListener("resize",(function(){this.deviceLineChart.resize()}))}}},s=l,c=i("2877"),h=Object(c["a"])(s,a,o,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d2109fb.1341ee15.js.map