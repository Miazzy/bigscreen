(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e8f2ac7"],{1632:function(t,a,e){t.exports=e.p+"img/china.f8a627ba.svg"},"271c":function(t,a,e){t.exports=e.p+"img/nanhai.1ba4dce2.svg"},"2ba5":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"map-container"},[i("div",{ref:"circleBottom",staticClass:"circle-bottom"}),i("div",{staticClass:"map"},[i("div",[i("img",{ref:"chinaMap",staticClass:"china",attrs:{src:e("1632")}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showDetailInfo,expression:"showDetailInfo"}],staticClass:"hover-area",style:{height:t.chinaMapHeight+"px"}},[i("img",{staticStyle:{width:"100%"},attrs:{src:"images/chinaArea/"+t.areaCur+".png"}}),i("div",{staticClass:"area-container",style:{top:t.areaDetailInfo.top/5.94+"%",right:t.areaDetailInfo.right/10.08+"%"}},[i("div",{ref:"areaContainer",staticClass:"tab-bg"}),i("div",{staticClass:"area-content"},[t.showDetailInfo?i("div",{staticClass:"area-name"},[t._v(t._s(t.areaDetailInfo.name))]):t._e(),i("div",{staticClass:"info-item"},[i("div",[t._v("\n                  NB表具开户量\n                ")]),i("div",{staticClass:"data"},[i("span",{staticClass:"num"},[t._v(t._s(t.areaDetailInfo.meterOpenNum))]),t._v("台")])]),i("div",{staticClass:"info-item",staticStyle:{"margin-bottom":"3px"}},[i("div",[t._v("\n                  NB表具用气量\n                ")]),i("div",{staticClass:"data"},[i("span",{staticClass:"num"},[t._v(t._s(t.areaDetailInfo.gasAmount))]),t._v("Wm3")])]),i("div",{staticClass:"info-item"},[i("div",[t._v("\n                  NB客户接入量"),i("br"),i("span",{staticClass:"num fs24"},[t._v(t._s(t.areaDetailInfo.customerNum))]),t._v("家\n                ")]),i("div",{ref:"ratio",staticClass:"data",staticStyle:{position:"relative"}},[i("img",{staticStyle:{width:"66px"},attrs:{src:e("95ca")}}),i("div",{staticClass:"ratio-text"},[i("span",{staticClass:"ratio"},[t._v(t._s(t.areaDetailInfo.customerRatio)+"%")]),i("span",[t._v("占比")])])])]),t._m(0),i("div",{staticClass:"info-item"},[i("div",[t._v("\n                  预存金额总量\n                ")]),i("div",{staticClass:"data"},[i("span",{staticClass:"num"},[t._v(t._s(t.areaDetailInfo.remainingAmount))]),t._v("亿元")])]),i("div",{staticClass:"info-item"},[i("div",[t._v("\n                  接入设备类型\n                ")]),i("div",{staticClass:"data"},[i("span",{staticClass:"num"},[t._v(t._s(t.areaDetailInfo.deviceTypeNum))]),t._v("家")])])])])])]),i("div",{staticClass:"area-outline",style:{height:t.chinaMapHeight+"px"}},[i("svg",{attrs:{width:"100%",height:"100%",viewBox:"0 0 1008 594",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[i("defs",[i("linearGradient",{attrs:{id:"orange_red",x1:"0%",y1:"55.1%",x2:"100%",y2:"0%"}},[i("stop",{attrs:{offset:"0%","stop-color":" #568bc1;"}}),i("stop",{attrs:{offset:"100%","stop-color":"#fff"}})],1),i("filter",{attrs:{id:"f1",x:"0",y:"0",width:"200%",height:"200%"}},[i("feOffset",{attrs:{result:"offOut",in:"SourceGraphic",dx:"0",dy:"1"}}),i("feBlend",{attrs:{in:"SourceGraphic",in2:"blurOut",mode:"normal"}})],1)],1),i("g",[i("g",[i("polyline",{staticStyle:{fill:"none",stroke:"url('#orange_red')","stroke-width":"1"},attrs:{points:"302,262 302,127 290,127"}}),t.areaCur&&"northwest"===t.areaCur?t._e():i("image",{attrs:{"xlink:href":e("2ee7"),x:"273",y:"242",height:"45",width:"58"}}),t.areaCur&&"northwest"==t.areaCur?i("image",{attrs:{"xlink:href":e("dc2e"),x:"273",y:"242",height:"45",width:"58"}}):t._e(),i("text",{attrs:{x:"279",y:"285","text-anchor":"start",fill:"#fff","font-size":"18"}},[t._v("西北")]),i("circle",{attrs:{cx:"290",cy:"127",r:"2",stroke:"#000","stroke-width":"1",fill:"#fff"}}),t.areaCur&&"northwest"===t.areaCur?t._e():i("g",[i("text",{attrs:{x:"285",y:"134","text-anchor":"end",fill:"#FFD234","font-size":"18"}},[t._v(t._s(t.carouselCur.title))]),i("text",{attrs:{x:"285",y:"160","text-anchor":"end",fill:"#fff","font-size":"24"}},[t._v(t._s(t.data.northwest[t.carouselCur.prop]))])])]),i("g",[i("polyline",{staticStyle:{fill:"none",stroke:"url('#orange_red')","stroke-width":"1"},attrs:{points:"450,412 450,259 438,259"}}),t.areaCur&&"southwest"===t.areaCur?t._e():i("image",{attrs:{"xlink:href":e("2ee7"),x:"421",y:"392",height:"45",width:"58"}}),t.areaCur&&"southwest"===t.areaCur?i("image",{attrs:{"xlink:href":e("dc2e"),x:"421",y:"392",height:"45",width:"58"}}):t._e(),i("text",{attrs:{x:"429",y:"433","text-anchor":"start",fill:"#fff","font-size":"18"}},[t._v("西南")]),i("circle",{attrs:{cx:"438",cy:"259",r:"2",stroke:"#000","stroke-width":"1",fill:"#fff"}}),t.areaCur&&"southwest"===t.areaCur?t._e():i("g",[i("text",{attrs:{x:"433",y:"266","text-anchor":"end",fill:"#FFD234","font-size":"18"}},[t._v(t._s(t.carouselCur.title))]),i("text",{attrs:{x:"433",y:"292","text-anchor":"end",fill:"#fff","font-size":"24"}},[t._v(t._s(t.data.southwest[t.carouselCur.prop]))])])]),i("g",[i("polyline",{staticStyle:{fill:"none",stroke:"url('#orange_red')","stroke-width":"1"},attrs:{points:"641,385 641,236 629,236"}}),t.areaCur&&"centralChina"===t.areaCur?t._e():i("image",{attrs:{"xlink:href":e("2ee7"),x:"612",y:"365",height:"45",width:"58"}}),t.areaCur&&"centralChina"===t.areaCur?i("image",{attrs:{"xlink:href":e("dc2e"),x:"612",y:"365",height:"45",width:"58"}}):t._e(),i("text",{attrs:{x:"620",y:"407","text-anchor":"start",fill:"#fff","font-size":"18"}},[t._v("华中")]),i("circle",{attrs:{cx:"629",cy:"236",r:"2",stroke:"#000","stroke-width":"1",fill:"#fff"}}),t.areaCur&&"centralChina"===t.areaCur?t._e():i("g",[i("text",{attrs:{x:"624",y:"243","text-anchor":"end",fill:"#FFD234","font-size":"18"}},[t._v(t._s(t.carouselCur.title))]),i("text",{attrs:{x:"624",y:"267","text-anchor":"end",fill:"#fff","font-size":"24"}},[t._v(t._s(t.data.centralChina[t.carouselCur.prop]))])])]),i("g",[i("polyline",{staticStyle:{fill:"none",stroke:"url('#orange_red')","stroke-width":"1"},attrs:{points:"570,492 570,330 558,330"}}),t.areaCur&&"southChina"===t.areaCur?t._e():i("image",{attrs:{"xlink:href":e("2ee7"),x:"541",y:"477",height:"45",width:"58"}}),t.areaCur&&"southChina"==t.areaCur?i("image",{attrs:{"xlink:href":e("dc2e"),x:"541",y:"477",height:"45",width:"58"}}):t._e(),i("text",{attrs:{x:"549",y:"520","text-anchor":"start",fill:"#fff","font-size":"18"}},[t._v("华南")]),i("circle",{attrs:{cx:"558",cy:"330",r:"2",stroke:"#000","stroke-width":"1",fill:"#fff"}}),t.areaCur&&"southChina"===t.areaCur?t._e():i("g",[i("text",{attrs:{x:"553",y:"337","text-anchor":"end",fill:"#FFD234","font-size":"18"}},[t._v(t._s(t.carouselCur.title))]),i("text",{attrs:{x:"553",y:"361","text-anchor":"end",fill:"#fff","font-size":"24"}},[t._v(t._s(t.data.southChina[t.carouselCur.prop]))])])]),i("g",[i("polyline",{staticStyle:{fill:"none",stroke:"url('#orange_red')","stroke-width":"1"},attrs:{points:"754,360 754,200 742,200"}}),t.areaCur&&"eastChina"===t.areaCur?t._e():i("image",{attrs:{"xlink:href":e("2ee7"),x:"725",y:"343",height:"45",width:"58"}}),t.areaCur&&"eastChina"==t.areaCur?i("image",{attrs:{"xlink:href":e("dc2e"),x:"725",y:"343",height:"45",width:"58"}}):t._e(),i("text",{attrs:{x:"735",y:"386","text-anchor":"start",fill:"#fff","font-size":"18"}},[t._v("华东")]),i("circle",{attrs:{cx:"742",cy:"200",r:"2",stroke:"#000","stroke-width":"1",fill:"#fff"}}),t.areaCur&&"eastChina"===t.areaCur?t._e():i("g",[i("text",{attrs:{x:"735",y:"207","text-anchor":"end",fill:"#FFD234","font-size":"18"}},[t._v(t._s(t.carouselCur.title))]),i("text",{attrs:{x:"735",y:"231","text-anchor":"end",fill:"#fff","font-size":"24"}},[t._v(t._s(t.data.eastChina[t.carouselCur.prop]))])])]),i("g",[i("polyline",{staticStyle:{fill:"none",stroke:"url('#orange_red')","stroke-width":"1"},attrs:{points:"733,152 733,9 721,9"}}),t.areaCur&&"northChina"===t.areaCur?t._e():i("image",{attrs:{"xlink:href":e("2ee7"),x:"704",y:"135",height:"45",width:"58"}}),t.areaCur&&"northChina"==t.areaCur?i("image",{attrs:{"xlink:href":e("dc2e"),x:"704",y:"135",height:"45",width:"58"}}):t._e(),i("text",{attrs:{x:"712",y:"180","text-anchor":"start",fill:"#fff","font-size":"18"}},[t._v("华北")]),i("circle",{attrs:{cx:"721",cy:"9",r:"2",stroke:"#000","stroke-width":"1",fill:"#fff"}}),t.areaCur&&"northChina"===t.areaCur?t._e():i("g",[i("text",{attrs:{x:"716",y:"16","text-anchor":"end",fill:"#FFD234","font-size":"18"}},[t._v(t._s(t.carouselCur.title))]),i("text",{attrs:{x:"716",y:"40","text-anchor":"end",fill:"#fff","font-size":"24"}},[t._v(t._s(t.data.northChina[t.carouselCur.prop]))])])]),i("g",[i("polyline",{staticStyle:{fill:"none",stroke:"url('#orange_red')","stroke-width":"1"},attrs:{points:"884,133 884,20 872,20"}}),t.areaCur&&"northeast"===t.areaCur?t._e():i("image",{attrs:{"xlink:href":e("2ee7"),x:"855",y:"115",height:"45",width:"58"}}),t.areaCur&&"northeast"==t.areaCur?i("image",{attrs:{"xlink:href":e("dc2e"),x:"855",y:"115",height:"45",width:"58"}}):t._e(),i("text",{attrs:{x:"863",y:"156","text-anchor":"start",fill:"#fff","font-size":"18"}},[t._v("东北")]),i("circle",{attrs:{cx:"872",cy:"20",r:"2",stroke:"#000","stroke-width":"1",fill:"#fff"}}),t.areaCur&&"northeast"===t.areaCur?t._e():i("g",[i("text",{attrs:{x:"867",y:"25","text-anchor":"end",fill:"#FFD234","font-size":"18"}},[t._v(t._s(t.carouselCur.title))]),i("text",{attrs:{x:"867",y:"47","text-anchor":"end",fill:"#fff","font-size":"24"}},[t._v(t._s(t.data.northeast[t.carouselCur.prop]))])])])]),i("g",{attrs:{id:"组件",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[i("g",{attrs:{id:"画板备份",fill:"transparent"}},[i("g",{attrs:{id:"编组-2",transform:"translate(0.390033, 0.000000)"}},[i("polygon",{attrs:{id:"路径-7",points:"607.888355 351.78265 610.140339 273.282762 388.566262 215.819422 283.417763 165.620106 227.807628 94.3689976 0 271.425898 79.531306 354.499908 261.647856 325.627774 274.244958 370.595896 375.106733 396.884328 398.26025 363.360836 592.381057 396.884328"},on:{click:function(a){return t.hoverArea("northwest")}}}),i("path",{attrs:{d:"M607.423677,353.489398 L688.780211,327.032374 L695.907377,400.204313 L739.230643,449.858623 C706.550194,484.585451 688.486307,501.673403 685.038983,501.122479 C681.591658,500.571555 651.141214,492.528065 593.68765,476.992008 L592.414972,397.253935 L607.423677,353.489398 Z",id:"路径-9"},on:{click:function(a){return t.hoverArea("centralChina")}}}),i("polygon",{attrs:{id:"路径-10",points:"79.531306 354.499908 85.8855967 402.041789 251.325972 458.105681 372.904739 433.626118 414.078129 463.304902 398.061039 505.900931 464.118292 550.612174 464.118292 532.126722 525.428695 522.445608 532.303228 499.601963 594.016266 476.992008 592.743428 396.884328 397.817245 362.901467 375.106733 396.884328 274.010772 369.420738 261.647856 325.627774"},on:{click:function(a){return t.hoverArea("southwest")}}}),i("polygon",{attrs:{id:"路径-11",points:"526.093202 523.179468 592.674222 544.994273 576.469946 578.926923 594.016266 593.734362 616.250126 571.34731 609.821115 549.627403 703.599855 527.345109 772.808457 463.910434 739.230643 449.941442 685.038983 502.393023 594.016266 476.992008 533.16825 500.296093"},on:{click:function(a){return t.hoverArea("southChina")}}}),i("polygon",{attrs:{id:"路径-12",points:"772.808457 464.869565 795.099254 427.364502 797.264275 403.6287 766.690427 356.198856 804.319411 307.396126 729.236688 290.67829 689.67925 326.486038 695.907377 401.025429 738.917934 449.941442"},on:{click:function(a){return t.hoverArea("eastChina")}}}),i("path",{attrs:{d:"M729.236688,290.67829 L759.947737,259.882775 L755.048521,216.749061 L818.768978,202.435542 C807.267197,172.990951 801.521003,157.157405 801.530395,154.934902 C801.539788,152.712399 813.416579,116.971342 837.160769,47.7117291 L784.821458,5.16521739 L698.630959,101.217771 L698.825997,161.982024 L620.169131,188.254015 L391.178389,215.819422 L610.140339,273.282762 L608.244539,354.499908 L688.885734,327.032374 L729.236688,290.67829 Z",id:"路径-13"},on:{click:function(a){return t.hoverArea("northChina")}}}),i("polygon",{attrs:{id:"路径-14",points:"759.947737 259.882775 802.788806 286.729743 950.567078 210.255983 1008 119.054226 891.704982 64.2585326 857.716074 0 785.485559 0.0731354869 785.354105 5.16521739 837.160769 47.7117291 800.899521 155.569469 818.768978 202.435542 755.487259 216.749061"},on:{click:function(a){return t.hoverArea("northeast")}}})])])])])])]),i("img",{staticClass:"nanhai",attrs:{src:e("271c")}})])},s=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"divide-line"},[i("img",{attrs:{src:e("b77c")}})])}],r=(e("0b34"),e("558f")),n=e.n(r),o=e("4d60"),l=e("a74d"),h={name:"chart-base",props:{data:{type:Object,default:function(){return{}}}},data:function(){return{show:!1,instance:null,ready:!1,options:{autoplay:!0,loop:!0},bgCircleTop:0,carouselTimer:null,carouselPropList:[{title:"NB客户接入",prop:"customerNum"},{title:"NB表具开户",prop:"meterOpenNum"},{title:"NB表具用气",prop:"gasAmount"}],areaList:["northwest","southwest","southChina","centralChina","eastChina","northChina","northeast"],carouselIndex:0,showDetailIndex:0,carouselCur:{title:"NB客户接入",prop:"customerNum"},generalIntervalTime:3e3,detailIntervalTime:5e3,areaDetailInfo:{},areaCur:"",areaImg:null,showDetailInfo:!1,chinaMapHeight:"",tabLottie:null,circleLottie:null,potLottie:null}},mounted:function(){var t=this;this.tabLottie=n.a.loadAnimation({animationData:o,loop:!0,autoplay:!0,renderer:"svg",container:this.$refs.areaContainer}),this.tabLottie.play(),this.circleLottie=n.a.loadAnimation({animationData:l,loop:!0,autoplay:!0,renderer:"svg",container:this.$refs.circleBottom}),this.circleLottie.play(),setTimeout((function(){t.chinaMapHeight=t.$refs.chinaMap.offsetHeight,t.showGeneralInfoTimer(),t.showDetailInfoTimer()}),3e3)},methods:{showGeneralInfoTimer:function(){var t=this;this.generalTimer=setInterval((function(){t.carouselIndex>=2?t.carouselIndex=0:t.carouselIndex++,t.carouselCur=t.carouselPropList[t.carouselIndex]}),this.generalIntervalTime)},showDetailInfoTimer:function(){var t=this;this.detailTimer=setInterval((function(){t.showDetailIndex>=6?t.showDetailIndex=0:t.showDetailIndex++;var a=t.areaList[t.showDetailIndex];t.areaCur=a,t.showDetailInfo=!1,t.areaDetailInfo=t.data[a],t.$nextTick((function(){t.showDetailInfo=!0}))}),this.detailIntervalTime)},stopTimer:function(t){clearInterval(this[t]),this[t]=null},hoverArea:function(t){var a=this;if(this.areaCur!=t){this.stopTimer("detailTimer"),this.showDetailIndex=this.areaList.findIndex((function(a){return a==t}));t=this.areaList[this.showDetailIndex];this.areaCur=t,this.showDetailInfo=!1,this.areaDetailInfo=this.data[t],this.$nextTick((function(){a.showDetailInfo=!0})),this.showDetailInfoTimer()}},unHoverArea:function(){this.areaCur="",this.showDetailInfo=!1,this.showGeneralInfoTimer()}},beforeDestroyed:function(){this.stopTimer("generalTimer"),this.stopTimer("detailTimer"),this.tabLottie.destory(),this.circleLottie.destory()}},c=h,f=(e("5f08"),e("6691")),x=Object(f["a"])(c,i,s,!1,null,"48cd780d",null);a["default"]=x.exports},"2ee7":function(t,a,e){t.exports=e.p+"img/pot1.9eb9e5ed.gif"},"4d60":function(t){t.exports=JSON.parse('{"v":"5.5.9","fr":29.9700012207031,"ip":0,"op":121.000004928431,"w":320,"h":400,"nm":"tab","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[160,200,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"a":0,"k":[72,72],"ix":2},"p":{"a":0,"k":[-96,-150],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":4,"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,0.129,0.898,1,0.5,0.129,0.898,1,1,0.129,0.898,1,0,1,0.5,0.5,1,0],"ix":8}},"s":{"a":0,"k":[-132,-186],"ix":4},"e":{"a":0,"k":[-60,-114],"ix":5},"t":1,"lc":1,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":13},"bm":0,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":4,"ix":1}},{"n":"g","nm":"gap","v":{"a":0,"k":4,"ix":2}},{"n":"o","nm":"offset","v":{"a":0,"k":0,"ix":7}}],"nm":"Gradient Stroke 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.007843137719,0.1254902035,0.443137258291,1],"ix":4},"o":{"a":0,"k":88,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false}],"ip":0,"op":240.0000097754,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":88,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[160.25,200.25,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0.5,0],[0,0],[0,0],[43.75,0]],"o":[[0,0],[0,0],[-0.5,0],[0,0],[0,0],[-43.75,0]],"v":[[-141,-150.5],[-141,150],[140.5,150],[140.5,-149.75],[-51.25,-149.75],[-96,-105]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":1,"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,0.129,0.898,1,0.257,0.067,0.522,0.755,0.514,0.004,0.145,0.51],"ix":8}},"s":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[-141,-150],"to":[46.833,0],"ti":[-46.833,-50]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":30,"s":[140,-150],"to":[46.833,50],"ti":[46.667,-50]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":60,"s":[140,150],"to":[-46.667,50],"ti":[46.833,50]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":90,"s":[-140,150],"to":[-46.833,-50],"ti":[0.167,50]},{"t":120.0000048877,"s":[-141,-150]}],"ix":4},"e":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[141,150],"to":[-46.833,0],"ti":[46.833,50]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":30,"s":[-140,150],"to":[-46.833,-50],"ti":[-46.667,50]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":60,"s":[-140,-150],"to":[46.667,-50],"ti":[-46.833,-50]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":90,"s":[140,-150],"to":[46.833,50],"ti":[-0.167,-50]},{"t":120.0000048877,"s":[141,150]}],"ix":5},"t":1,"lc":1,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":13},"bm":0,"nm":"Gradient Stroke 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.007843137719,0.1254902035,0.443137258291,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false}],"ip":0,"op":240.0000097754,"st":0,"bm":0}],"markers":[]}')},"5f08":function(t,a,e){"use strict";var i=e("b27c"),s=e.n(i);s.a},"95ca":function(t,a){t.exports="data:image/png;base64,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"},a74d:function(t){t.exports=JSON.parse('{"v":"5.5.9","fr":29.9700012207031,"ip":0,"op":181.000007372281,"w":1007,"h":697,"nm":"huanxing 2","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-180,"ix":10},"p":{"a":0,"k":[503.5,458.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"d":2,"ty":"el","s":{"a":0,"k":[680,340],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":1,"lj":1,"ml":1,"bm":0,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":3,"ix":1}},{"n":"g","nm":"gap","v":{"a":0,"k":60,"ix":2}},{"n":"o","nm":"offset","v":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":180.00000733155,"s":[-680]}],"ix":7}}],"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false}],"ip":0,"op":243.000009897593,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Shape Layer 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[503.5,458.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"d":2,"ty":"el","s":{"a":0,"k":[680,340],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":1,"lj":1,"ml":1,"bm":0,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":60,"ix":1}},{"n":"g","nm":"gap","v":{"a":0,"k":90,"ix":2}},{"n":"o","nm":"offset","v":{"a":0,"k":0,"ix":7}}],"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false}],"ip":0,"op":243.000009897593,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[503.5,458.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"d":2,"ty":"el","s":{"a":0,"k":[720,360],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.521568627451,0.952941176471,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":1,"lj":1,"ml":1,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false}],"ip":0,"op":243.000009897593,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Shape Layer 6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-360,"ix":10},"p":{"a":0,"k":[503.5,458.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"d":2,"ty":"el","s":{"a":0,"k":[870,435],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.443137258291,0.819607853889,0.882352948189,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":24,"ix":5},"lc":1,"lj":1,"ml":1,"bm":0,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":147,"ix":1}},{"n":"g","nm":"gap","v":{"a":0,"k":24,"ix":2}},{"n":"o","nm":"offset","v":{"a":0,"k":0,"ix":7}}],"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tm","s":{"a":0,"k":24,"ix":1},"e":{"a":0,"k":50,"ix":2},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":180.00000733155,"s":[360]}],"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"d":1,"ty":"el","s":{"a":0,"k":[900,900],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 2","mn":"ADBE Vector Shape - Ellipse","hd":false}],"ip":0,"op":243.000009897593,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-360,"ix":10},"p":{"a":0,"k":[503.5,458.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"d":2,"ty":"el","s":{"a":0,"k":[870,435],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.443137258291,0.819607853889,0.882352948189,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":24,"ix":5},"lc":1,"lj":1,"ml":1,"bm":0,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":147,"ix":1}},{"n":"g","nm":"gap","v":{"a":0,"k":24,"ix":2}},{"n":"o","nm":"offset","v":{"a":0,"k":0,"ix":7}}],"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tm","s":{"a":0,"k":74,"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":180.00000733155,"s":[360]}],"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"d":1,"ty":"el","s":{"a":0,"k":[900,900],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 2","mn":"ADBE Vector Shape - Ellipse","hd":false}],"ip":0,"op":243.000009897593,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[503.5,458.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"d":2,"ty":"el","s":{"a":0,"k":[870,435],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.443137258291,0.819607853889,0.882352948189,1],"ix":3},"o":{"a":0,"k":27,"ix":4},"w":{"a":0,"k":24,"ix":5},"lc":1,"lj":1,"ml":1,"bm":0,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":147,"ix":1}},{"n":"g","nm":"gap","v":{"a":0,"k":24,"ix":2}},{"n":"o","nm":"offset","v":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":180.00000733155,"s":[-870]}],"ix":7}}],"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"d":1,"ty":"el","s":{"a":0,"k":[900,900],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 2","mn":"ADBE Vector Shape - Ellipse","hd":false}],"ip":0,"op":243.000009897593,"st":0,"bm":0}],"markers":[]}')},b27c:function(t,a,e){},b77c:function(t,a,e){t.exports=e.p+"img/gang.e070a813.svg"},dc2e:function(t,a,e){t.exports=e.p+"img/pot2.79f6c4b0.gif"}}]);
//# sourceMappingURL=chunk-6e8f2ac7.f840650f.js.map