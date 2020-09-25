(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-015b5b80","chunk-376dc950","chunk-744cb887"],{"1702e":function(t,e,a){"use strict";a.r(e);a("8f42"),a("c041"),a("e6d1");var n,i,r=a("3596"),o=function(t,e,a,n,i,o){var s=this;if(s.version=function(){return"1.9.3"},s.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:f,formattingFn:m,prefix:"",suffix:"",numerals:[],roundsOff:!0,format:null},o&&"object"===Object(r["a"])(o))for(var l in s.options)o.hasOwnProperty(l)&&null!==o[l]&&(s.options[l]=o[l]);""===s.options.separator?s.options.useGrouping=!1:s.options.separator=""+s.options.separator;for(var u=0,c=["webkit","moz","ms","o"],d=0;d<c.length&&!window.requestAnimationFrame;++d)window.requestAnimationFrame=window[c[d]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[d]+"CancelAnimationFrame"]||window[c[d]+"CancelRequestAnimationFrame"];function p(t,e){var a=Math.pow(10,e);return Math.floor(t*a)/a}function m(t){var e,a,n,i,r,o,l=t<0;if(t=s.roundsOff?Math.abs(t).toFixed(s.decimals):p(Math.abs(t),s.decimals),t+="",e=t.split("."),a=e[0],n=e.length>1?s.options.decimal+e[1]:"",s.options.useGrouping){for(i="",r=0,o=a.length;r<o;++r)0!==r&&r%3===0&&(i=s.options.separator+i),i=a[o-r-1]+i;a=i}return s.options.numerals.length&&(a=a.replace(/[0-9]/g,(function(t){return s.options.numerals[+t]})),n=n.replace(/[0-9]/g,(function(t){return s.options.numerals[+t]}))),(l?"-":"")+s.options.prefix+a+n+s.options.suffix}function f(t,e,a,n){return a*(1-Math.pow(2,-10*t/n))*1024/1023+e}function h(t){return"number"===typeof t&&!isNaN(t)}window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var a=(new Date).getTime(),n=Math.max(0,16-(a-u)),i=window.setTimeout((function(){t(a+n)}),n);return u=a+n,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)}),s.initialize=function(){return!!s.initialized||(s.error="",s.d="string"===typeof t?document.getElementById(t):t,s.d?(s.startVal=Number(e),s.endVal=Number(a),h(s.startVal)&&h(s.endVal)?(s.decimals=Math.max(0,n||0),s.dec=Math.pow(10,s.decimals),s.duration=1e3*Number(i)||2e3,s.countDown=s.startVal>s.endVal,s.frameVal=s.startVal,s.initialized=!0,!0):(s.error="[CountUp] startVal ("+e+") or endVal ("+a+") is not a number",!1)):(s.error="[CountUp] target is null or undefined",!1))},s.printValue=function(t){var e=s.options.formattingFn(t);e=s.options.format&&s.options.format(e)||e,"INPUT"===s.d.tagName?this.d.value=e:"text"===s.d.tagName||"tspan"===s.d.tagName?this.d.textContent=e:this.d.innerHTML=e},s.count=function(t){s.startTime||(s.startTime=t),s.timestamp=t;var e=t-s.startTime;s.remaining=s.duration-e,s.options.useEasing?s.countDown?s.frameVal=s.startVal-s.options.easingFn(e,0,s.startVal-s.endVal,s.duration):s.frameVal=s.options.easingFn(e,s.startVal,s.endVal-s.startVal,s.duration):s.countDown?s.frameVal=s.startVal-(s.startVal-s.endVal)*(e/s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(e/s.duration),s.countDown?s.frameVal=s.frameVal<s.endVal?s.endVal:s.frameVal:s.frameVal=s.frameVal>s.endVal?s.endVal:s.frameVal,s.frameVal=Math.round(s.frameVal*s.dec)/s.dec,s.printValue(s.frameVal),e<s.duration?s.rAF=requestAnimationFrame(s.count):s.callback&&s.callback()},s.start=function(t){s.initialize()&&(s.callback=t,s.rAF=requestAnimationFrame(s.count))},s.pauseResume=function(){s.paused?(s.paused=!1,delete s.startTime,s.duration=s.remaining,s.startVal=s.frameVal,requestAnimationFrame(s.count)):(s.paused=!0,cancelAnimationFrame(s.rAF))},s.reset=function(){s.paused=!1,delete s.startTime,s.initialized=!1,s.initialize()&&(cancelAnimationFrame(s.rAF),s.printValue(s.startVal))},s.update=function(t){s.initialize()&&(t=Number(t),h(t)?(s.error="",t!==s.frameVal&&(cancelAnimationFrame(s.rAF),s.paused=!1,delete s.startTime,s.startVal=s.frameVal,s.endVal=t,s.countDown=s.startVal>s.endVal,s.rAF=requestAnimationFrame(s.count))):s.error="[CountUp] update() - new endVal is not a number: "+t)},s.initialize()&&s.printValue(s.startVal)},s={name:"Countup",mounted:function(){var t=this;this.$nextTick((function(){t._countup=new o(t.$el,t.startVal,t.endVal,t.decimals,t.duration,t.options),t.start&&t._countup.start()}))},props:{tag:{type:String,default:"span"},start:{type:Boolean,default:!0},startVal:{type:[Number,String],default:0},endVal:{type:[Number,String],required:!0},decimals:{type:Number,default:0},duration:{type:Number,default:2},options:{type:Object,default:function(){return{}}},roundsOff:{type:Boolean,default:!0}},render:function(t){return t(this.tag,{},[this.startVal])},methods:{reset:function(){this._countup.reset()}},watch:{start:function(t){t&&this._countup.start()},endVal:function(t){var e=this;this._countup.duration=1e3*this.duration||2e3,this._countup.frameVal=this.startVal,this.$nextTick((function(){e._countup.update(t)}))},decimals:function(t){this._countup.decimals=Math.max(0,t||0),this._countup.dec=Math.pow(10,t)}}},l=s,u=a("6691"),c=Object(u["a"])(l,n,i,!1,null,null,null);e["default"]=c.exports},"1a31":function(t,e,a){"use strict";var n=a("cd72"),i=a.n(n);i.a},2142:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("chart-item",{attrs:{data:t.chartData,option:t.chartOption,autoTooltip:t.option.autoTooltip,"style-object":t.option.wrapperStyle}}),a("div",{staticClass:"note-container"},[a("div",{staticClass:"node-item online-charge"},[a("div",{staticClass:"note-title"},[t._v("Remote Top-up")]),a("div",{staticClass:"ratio"},[t._v(t._s(t.curData[0])+"%")])]),a("div",{staticClass:"node-item outline-charge"},[a("div",{staticClass:"note-title"},[t._v("Clerk Top-up")]),a("div",{staticClass:"ratio"},[t._v(t._s(t.curData[1])+"%")])])]),a("div",{staticClass:"f-pa",style:t.chartOption.grid},[a("div",{staticStyle:{display:"inline-block",position:"absolute",top:"calc(50% - 50px)",right:"calc(35% - 60px)"}},[a("svg",{ref:"rotate",staticClass:"rotate",attrs:{width:"120px",height:"120px",viewBox:"0 0 106 106",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("defs",[a("linearGradient",{attrs:{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"linearGradient-ooo-1"}},[a("stop",{attrs:{"stop-color":"#FDEA64",offset:"0%"}}),a("stop",{attrs:{"stop-color":"#FBD034","stop-opacity":"0.588723776",offset:"100%"}})],1),a("path",{attrs:{d:"M44,0 C68.300529,0 88,19.699471 88,44 L85,44 L85,44 C85,21.3563253 66.6436747,3 44,3 L44,0 L44,0 Z",id:"path-ooo-2"}}),a("filter",{attrs:{x:"-30.7%",y:"-30.7%",width:"161.4%",height:"161.4%",filterUnits:"objectBoundingBox",id:"filter-ooo-3"}},[a("feMorphology",{attrs:{radius:"0.5",operator:"dilate",in:"SourceAlpha",result:"shadowSpreadOuter1"}}),a("feOffset",{attrs:{dx:"0",dy:"0",in:"shadowSpreadOuter1",result:"shadowOffsetOuter1"}}),a("feGaussianBlur",{attrs:{stdDeviation:"4",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}}),a("feColorMatrix",{attrs:{values:"0 0 0 0 1   0 0 0 0 0.823529412   0 0 0 0 0.203921569  0 0 0 1 0",type:"matrix",in:"shadowBlurOuter1"}})],1),a("path",{attrs:{d:"M0,44.0007899 C24.300529,44.0007899 44,63.7002609 44,88.0007899 L41,88.0007899 L41,88.0007899 C41,65.3571151 22.6436747,47.0007899 0,47.0007899 L0,44.0007899 L0,44.0007899 Z",id:"path-ooo-4"}}),a("filter",{attrs:{x:"-30.7%",y:"-30.7%",width:"161.4%",height:"161.4%",filterUnits:"objectBoundingBox",id:"filter-ooo-5"}},[a("feMorphology",{attrs:{radius:"0.5",operator:"dilate",in:"SourceAlpha",result:"shadowSpreadOuter1"}}),a("feOffset",{attrs:{dx:"0",dy:"0",in:"shadowSpreadOuter1",result:"shadowOffsetOuter1"}}),a("feGaussianBlur",{attrs:{stdDeviation:"4",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}}),a("feColorMatrix",{attrs:{values:"0 0 0 0 1   0 0 0 0 0.823529412   0 0 0 0 0.203921569  0 0 0 1 0",type:"matrix",in:"shadowBlurOuter1"}})],1)],1),a("g",{attrs:{id:"页面-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("g",{attrs:{id:"1014",transform:"translate(-1659.000000, -522.000000)"}},[a("g",{attrs:{id:"编组-6备份",transform:"translate(1539.000000, 430.000000)"}},[a("g",{attrs:{id:"编组-11",transform:"translate(129.000000, 101.000000)"}},[a("g",{attrs:{id:"形状结合"}},[a("use",{attrs:{fill:"black","fill-opacity":"1",filter:"url(#filter-ooo-3)","xlink:href":"#path-ooo-2"}}),a("use",{attrs:{fill:"url(#linearGradient-ooo-1)","fill-rule":"evenodd","xlink:href":"#path-ooo-2"}})]),a("g",{attrs:{id:"形状结合",transform:"translate(22.000000, 66.000790) scale(-1, -1) translate(-22.000000, -66.000790) "}},[a("use",{attrs:{fill:"black","fill-opacity":"1",filter:"url(#filter-ooo-5)","xlink:href":"#path-ooo-4"}}),a("use",{attrs:{fill:"url(#linearGradient-ooo-1)","fill-rule":"evenodd","xlink:href":"#path-ooo-4"}})])])])])])])])]),t._m(0)],1),a("div",{staticStyle:{position:"absolute",bottom:"0",right:"0",left:"0","z-index":"2001"}},[a("div",{staticClass:"axis-line f-pr"},[a("div",{staticClass:"cur-year",style:t.curYearStyle})]),a("div",{staticClass:"f-df f-jcc years-axias"},t._l(t.option.data.categories,(function(e,n){return a("div",{key:e,staticClass:"f-f1 year",on:{click:function(e){return t.getCurInfo(n)}}},[t._v("\n        "+t._s(e)+"\n      ")])})),0)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pie-title"},[t._v("Top-up"),a("br"),t._v("Channel")])}],r=a("8bb2"),o=(a("8590"),{tooltip:{trigger:"item",formatter:"{a} <br/>({d}%)"},grid:{left:"0",right:"0",bottom:"30px",top:"30px",containLabel:!0},series:[]}),s={name:"ChartPieDoughnut",props:{option:{type:Object,default:function(){return{}}}},data:function(){return{chartOption:o,timer:null,curData:[],currentIndex:-1,_animation:null,rotateStartVal:0,rotate:180,rotateDuration:.5,rotateDecimals:.01}},computed:{curYearStyle:function(){var t=this.option.data.categories.length;return{width:100/t+"%",left:100/t*(-1==this.currentIndex?0:this.currentIndex)+"%"}},chartData:function(){var t={series:[{name:"网络充值",type:"pie",radius:["45%","65%"],center:["65%","50%"],data:[{value:this.curData[0],name:"网络充值",itemStyle:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"#0084B0"},{offset:1,color:"#22C4FF"}])},labelLine:{show:!1},label:{show:!1,color:"rgba(255,255,255,1)",fontSize:16,formatter:"网络充值\n{a|{d}%}",rich:{a:{color:"#fff",fontSize:24,lineHeight:30}}}},{value:this.curData[1],name:"网络充值",itemStyle:{color:"transparent"}}]},{name:"柜台充值",type:"pie",radius:["50%","60%"],center:["65%","50%"],data:[{value:this.curData[0],name:"柜台充值",itemStyle:{color:"transparent"}},{value:this.curData[1],name:"柜台充值",itemStyle:{color:"#2100FA"},labelLine:{show:!1},label:{show:!1,color:"rgba(255,255,255,1)",fontSize:16,formatter:"柜台充值\n{a|{d}%}",rich:{a:{color:"#fff",fontSize:24,lineHeight:30}}}}]}]};return t}},components:{ChartItem:r["default"]},mounted:function(){this.startCanousel()},methods:{stopCanousel:function(){clearInterval(this.timer),this.timer=null},startCanousel:function(t){var e=this;this.timer=setInterval((function(){var t=e.option.data,a=t.series;t.categories;e.currentIndex=a[0].length-1>e.currentIndex?e.currentIndex+1:0,e.curData=[a[0][e.currentIndex],a[1][e.currentIndex]]}),3e3)},getCurInfo:function(t){this.stopCanousel(),this.currentIndex=t;var e=this.option.data,a=e.series;e.categories;this.curData=[a[0][this.currentIndex],a[1][this.currentIndex]],this.startCanousel()}},beforeDestroy:function(){this.stopCanousel()}},l=s,u=(a("84c6"),a("6691")),c=Object(u["a"])(l,n,i,!1,null,"50796a42",null);e["default"]=c.exports},"25ce":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("dashboard-panel",{staticClass:"data-container",attrs:{"style-object":t.option.wrapperStyle}},[a("div",{staticClass:"data-item nb"},[a("div",{staticClass:"digital-title"},[a("div",{staticClass:"digital-title-mean"},[t._v("NB-IoT")]),a("div",{staticClass:"digital-title-sub"},[t._v("Smart Gas Meter")])]),t.countupnb?a("countup",{staticClass:"digital-remake-content",attrs:{tag:"div","start-val":t.nbData.oldNum,"end-val":t.nbData.num,duration:t.nbData.durationValue,decimals:t.nbData.decimalsValue,roundsOff:!1,options:t.nbData.options}}):t._e()],1),a("div",{staticClass:"data-item cbl"},[a("div",{staticClass:"digital-title"},[a("div",{staticClass:"digital-title-mean"},[t._v("Meter")]),a("div",{staticClass:"digital-title-sub"},[t._v("Reading Rate")])]),a("div",{staticClass:"digital-remake-content"},[t.countupcbl?a("countup",{attrs:{tag:"div","start-val":t.cblData.oldNum,"end-val":t.cblData.num,duration:t.cblData.durationValue,decimals:t.cblData.decimalsValue,roundsOff:!1,options:t.cblData.options}}):t._e(),t._v("%\n    ")],1)])])},i=[],r=(a("e6d1"),a("12a8")),o=a("1702e"),s={name:"DataScreen",components:{Countup:o["default"]},mixins:[r["a"]],props:{styleObject:{type:Object,default:function(){return{}}},option:{type:Object,default:function(){return{}}}},data:function(){return{countupnb:!0,countupcbl:!0,nbData:{num:4733e3,oldNum:0,decimalsValue:0,durationValue:2,percentage:0,options:{format:function(t){t+="";var e=t.split("");return e.map((function(t){return isNaN(+t)?t:'<span class="remake">'.concat(t,"</span>")})).join("")}}},cblData:{num:99.4,oldNum:99.2,decimalsValue:1,durationValue:.02,percentage:0,options:{format:function(t){t+="";var e=t.split("");return e.map((function(t){return isNaN(+t)?t:'<span class="remake">'.concat(t,"</span>")})).join("")}}}}},mounted:function(){this.changeNbData(),this.changeCblData()},methods:{changeNbData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e3;this.nbDataTimer=setInterval((function(){t.countupnb=!1,t.$nextTick((function(){t.countupnb=!0})),t.nbData.oldNum=t.nbData.num,t.nbData.num=t.nbData.num+Math.round(2*Math.random())}),e)},changeCblData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e4;this.cblDataTimer=setInterval((function(){t.countupcbl=!1,t.$nextTick((function(){t.countupcbl=!0})),t.cblData.oldNum=t.cblData.num,t.cblData.num=t.cblData.num+Math.round(.7*Math.random())/10,t.cblData.num>=99.9&&(t.cblData.num=99.2)}),e)}},beforeDestoryed:function(){clearInterval(this.nbDataTimer),clearInterval(this.cblDataTimer),this.nbDataTimer=null,this.cblDataTimer=null}},l=s,u=(a("1a31"),a("6691")),c=Object(u["a"])(l,n,i,!1,null,"31dd5cf3",null);e["default"]=c.exports},"440c":function(t,e,a){"use strict";var n=a("6d03"),i=a.n(n);i.a},"527c":function(t,e,a){},"6d03":function(t,e,a){},"84c6":function(t,e,a){"use strict";var n=a("527c"),i=a.n(n);i.a},b50d:function(t){t.exports=JSON.parse('{"relativeCompany":[],"realTimeWarn":[{"warnType":"Overflow Alarm","meterNo":"181829109753","userName":"Mr. Wang","warnTime":"2019-10-28 08:24","warnSite":"Jinniu Dist. Chengdu"},{"warnType":"Gas Leakage","meterNo":"191832412943","userName":"Mr. Zeng","warnTime":"2019-10-28 12:10","warnSite":"Xihu Dist. Hangzhou"},{"warnType":"Days no Gas Usage","meterNo":"201922704243","userName":"Ms. Huang","warnTime":"2019-10-28 13:32","warnSite":"Jiangdong Dist. Ningbo"},{"warnType":"Days no Communication","meterNo":"191624127074","userName":"Mr. Chen","warnTime":"2019-10-29 15:41","warnSite":"Anning Dist. Lanzhou"},{"warnType":"Low Battery","meterNo":"191832107134","userName":"Mr. Liu","warnTime":"2019-10-29 21:08","warnSite":"Baiyun Dist. Guangzhou"},{"warnType":"Days no Communication","meterNo":"191832475848","userName":"Mr. Yu","warnTime":"2019-10-29 01:16","warnSite":"Jianggan Dist. Hangzhou"},{"warnType":"Gas Leakage","meterNo":"201922742859","userName":"Ms. Zhao","warnTime":"2019-10-29 05:13","warnSite":"Donghu Dist. Nanchang"},{"warnType":"Overflow Alarm","meterNo":"191624126120","userName":"Mr. Lei","warnTime":"2019-10-30 08:30","warnSite":"Kuancheng Dist. Changchun"}],"forecastInfo":[[2971,2783,2476,2066,2013,1997,1946,2169,2976,3369],[3067,2823,2265,1928,1910,1951,2039,2340,2851,3079,3381,3760]],"billTypeRatio":[[0,3,9,31,54,71],[100,97,91,69,46,29]],"NBData":{"eastChina":{"name":"华东","customerNum":126,"customerRatio":29,"meterOpenNum":705868,"gasAmount":19572,"remainingAmount":5.52,"deviceTypeNum":22,"right":251,"top":150},"northChina":{"name":"华北","customerNum":97,"customerRatio":34,"meterOpenNum":543406,"gasAmount":16197,"remainingAmount":4.25,"deviceTypeNum":13,"right":272,"top":-41},"northeast":{"name":"东北","customerNum":32,"customerRatio":53,"meterOpenNum":179268,"gasAmount":5399,"remainingAmount":2.4,"deviceTypeNum":5,"right":121,"top":5},"southChina":{"name":"华南","customerNum":44,"customerRatio":52,"meterOpenNum":252096,"gasAmount":7423,"remainingAmount":1.97,"deviceTypeNum":8,"right":435,"top":280},"southwest":{"name":"西南","customerNum":62,"customerRatio":46,"meterOpenNum":347332,"gasAmount":10798,"remainingAmount":2.71,"deviceTypeNum":7,"right":555,"top":209},"northwest":{"name":"Northwest","customerNum":97,"customerRatio":43,"meterOpenNum":543406,"gasAmount":16197,"remainingAmount":4.25,"deviceTypeNum":7,"right":703,"top":77},"centralChina":{"name":"华中","customerNum":43,"customerRatio":39,"meterOpenNum":240891,"gasAmount":7423,"remainingAmount":1.88,"deviceTypeNum":5,"right":364,"top":189}}}')},cd72:function(t,e,a){},f551:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nb-container"},[a("page-title"),a("div",{staticClass:"nb-content"},[a("dashboard-panel",{attrs:{"style-object":t.mainPanelLeftStyle}},[a("dashboard-panel",[a("dataScreening")],1),a("dashboard-panel",{attrs:{"style-object":t.customerMapStyle}},[a("customerMap",{attrs:{data:t.NBData}})],1)],1),a("dashboard-panel",{attrs:{"style-object":t.mainPanelRightStyle}},[a("dashboard-panel",{attrs:{"style-object":t.chartContainerStyle,transition:!0,leave:"animated fadeOutLeftBig",enter:"animated bounceInRight",delay:1500,speed:1e3,show:t.ready}},[a("dashboard-text",{attrs:{label:"Connection Status in the World","style-object":t.subTitleStyle}}),a("relativeCompany",{attrs:{option:t.relativeCompanyOption}})],1),a("dashboard-panel",{staticStyle:{display:"flex","justify-content":"space-around"},attrs:{"style-object":t.chartContainerStyle1,transition:!0,leave:"animated fadeOutLeftBig",enter:"animated bounceInRight",delay:3e3,speed:1e3,show:t.ready}},[a("div",{staticStyle:{width:"47%",position:"relative"}},[a("dashboard-text",{attrs:{label:"Gas Consumption Forecast","style-object":t.subTitleStyle}}),a("chart-area-basic",{attrs:{option:t.customerDevelopmentOption}})],1),a("div",{staticStyle:{width:"47%",position:"relative"}},[a("dashboard-text",{attrs:{label:"Top-up Channel Ratio","style-object":t.subTitleStyle}}),a("billType",{attrs:{option:t.billTypeRatioOption}})],1)]),a("dashboard-panel",{attrs:{"style-object":t.chartContainerStyle,transition:!0,leave:"animated fadeOutLeftBig",enter:"animated bounceInRight",delay:4500,speed:1e3,show:t.ready}},[a("dashboard-text",{attrs:{label:"Real Time Alarm","style-object":t.subTitleStyle}}),a("carousel-table",{attrs:{option:t.businessAcceptanceOption}})],1)],1)],1)],1)},i=[],r=(a("efce"),a("4634"),a("ed8b"),a("97a3")),o=a("7e37"),s={data:function(){return{chartContainerStyle:{width:"100%",height:"25%",position:"relative",paddingTop:this.subTitleFontSize+6+"px",paddingBottom:"16px",boxSizing:"border-box"},chartDefaultStyle:{top:"50px",bottom:"16px"},subTitleStyle:{fontSize:"24px",width:"100%",lineHeight:"50px",fontWeight:500,color:"#fff",fontFamily:"DONGQINGW6",boxSizing:"border-box",backgroundSize:"contain",backgroundRepeat:"repeat-y",paddingLeft:"8px",paddingBottom:"5px",position:"absolute",top:0,left:0,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},winHeight:1440,winWidth:768,subTitleFontSize:18}},mounted:function(){this.onResize(),window.addEventListener("resize",this.onResize)},methods:{onResize:function(){this.winWidth=document.documentElement.clientWidth,this.winHeight=document.documentElement.clientHeight,this.subTitleFontSize=this.getSubTitleFontSize(this.winHeight)},getSubTitleFontSize:function(){var t=.02;return Math.round(this.winHeight*t)}},computed:{},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)}},l=a("b50d"),u=a("2142"),c=a("7eec"),d=a("25ce"),p=a("2ba5");function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(a,!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var h={name:"nb-lot",mixins:[s],components:{pageTitle:o["default"],billType:u["default"],relativeCompany:c["default"],dataScreening:d["default"],customerMap:p["default"]},data:function(){return{customerMapStyle:{width:"100%",height:"90%",position:"relative",marginTop:"24px",paddingBottom:"16px",boxSizing:"border-box"},mainTitleStyle:{position:"absolute",fontSize:"48px",color:"#fff",fontWeight:400,left:"50%",display:"inline-block",zIndex:50,width:"600px",marginLeft:"-300px",marginTop:"30px",textAlign:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"},mainPanelLeftStyle:{width:"58%",height:"100%",position:"absolute",left:"0",top:"0",padding:"32px 10px 32px 32px",boxSizing:"border-box",zIndex:8},mainPanelRightStyle:{width:"42%",height:"100%",position:"absolute",right:"0",top:"0",padding:"32px 0 32px 32px",boxSizing:"border-box",zIndex:8,display:"flex",flexDirection:"column",justifyContent:"space-between"},chartContainerStyle:{width:"100%",height:"31%",position:"relative",boxSizing:"border-box"},chartContainerStyle1:{width:"100%",height:"31%",position:"relative",boxSizing:"border-box"},ready:!1,NBData:l.NBData}},mounted:function(){this.ready=!0},computed:{relativeCompanyOption:function(){f({},this.chartDefaultStyle);return{data:{series:l.billTypeRatio},wrapperStyle:{top:"23px",bottom:"50px"}}},billTypeRatioOption:function(){f({},this.chartDefaultStyle);return{data:{categories:[2014,2015,2016,2017,2018,2019],series:l.billTypeRatio},wrapperStyle:{top:"23px",bottom:"0px",zIndex:2e3}}},customerDevelopmentOption:function(){f({},this.chartDefaultStyle);return{data:{categories:["1","2","3","4","5","6","7","8","9","10","11","12"],series:l.forecastInfo,unit:"Wm3"},wrapperStyle:{top:"50px",bottom:"0px"},config:{showTitle:!0}}},businessAcceptanceOption:function(){var t=this.chartDefaultStyle;return{wrapperStyle:t,data:{rows:l.realTimeWarn},config:{columns:[{width:"24%",align:"left",name:"Alarm Type",id:"warnType",cellAlign:"left",cellColor:"#EECD4A"},{width:"16%",align:"left",name:"Meter ID",id:"meterNo",paddingLeft:"5px",cellPaddingLeft:"5px",cellAlign:"left"},{width:"12%",align:"left",name:"User Name",id:"userName",cellAlign:"left"},{width:"19%",align:"left",name:"Alarm Time",id:"warnTime",cellAlign:"left"},{width:"28%",align:"left",name:"Alarm Add.",id:"warnSite",cellAlign:"left"}]}}}},methods:{}},b=h,g=(a("440c"),a("6691")),w=Object(g["a"])(b,n,i,!1,null,"6af32f75",null);e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-015b5b80.5436d45e.js.map