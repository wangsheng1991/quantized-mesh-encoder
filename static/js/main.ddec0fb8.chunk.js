(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],{195:function(e,t){},196:function(e,t){},302:function(e,t,a){e.exports=a(433)},307:function(e,t,a){},308:function(e,t){},432:function(e,t,a){},433:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),o=a(99),i=a.n(o),l=(a(307),a(201)),c=a(256),m=a(257),u=a(284),s=a(281),h=a(461),d=a(192),g=a.n(d),p=a(282),f=a(258),b=a(203),v=a(462),y=a(470),E=a(22),x=a(463),w=a(466),k=a(469),z=a(20),A=[1],S="pk.eyJ1Ijoia3lsZWJhcnJvbiIsImEiOiJja2c0bDg4ZGEwbHI4MnNvMzd2bHM2ZDJ5In0.1KD5cEoyiyW3fb3MXQkAvA";function M(e){return(77067.34/(1<<e)).toFixed(2)}function O(e){var t=e.x,a=e.y,n=e.z,r=e.mosaicUrl,o=void 0===r?"terrarium":r,i=e.meshAlgorithm,l=void 0===i?"pydelatin":i,c=e.meshMaxError,m=new URLSearchParams({url:o,mesh_max_error:void 0===c?10:c,mesh_algorithm:l,flip_y:"pydelatin"===l});return"https://us-east-1-lambda.kylebarron.dev/dem/mesh/".concat(n,"/").concat(t,"/").concat(a,".terrain?")+m.toString()}function j(e){var t=e||{},a=t.minZoom,n=void 0===a?0:a,r=t.maxZoom,o=void 0===r?15:r,i=t.onViewportLoad,l=t.zRange,c=t.meshAlgorithm,m=t.loadTexture;return new v.a({id:"quantized-mesh-tile",minZoom:n,maxZoom:o,getTileData:function(e){return function(e){return T.apply(this,arguments)}(Object(b.a)(Object(b.a)({},e),{},{meshAlgorithm:c,loadTexture:m}))},renderSubLayers:_,onViewportLoad:i,zRange:l,refinementStrategy:"no-overlap",updateTriggers:{getTileData:[c,m]}})}function T(){return(T=Object(f.a)(g.a.mark((function e(t){var a,n,r,o,i,l,c,m,u,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.x,n=t.y,r=t.z,o=t.meshAlgorithm,i=t.loadTexture,l=M(r),c=O({x:a,y:n,z:r,meshMaxError:l,meshAlgorithm:o}),m=Object(x.a)(c,k.a),u="https://api.mapbox.com/v4/mapbox.satellite/".concat(r,"/").concat(a,"/").concat(n,".png?access_token=").concat(S),i&&(s=Object(x.a)(u,w.a)),e.abrupt("return",Promise.all([m,s]));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){var t=e.data,a=e.tile,n=t||[],r=Object(p.a)(n,2),o=r[0],i=r[1];return[new y.a(e,{data:A,mesh:o,texture:i,getPolygonOffset:null,coordinateSystem:E.a.CARTESIAN,modelMatrix:C(a),getPosition:function(e){return[0,0,0]},getColor:[200,200,200]})]}function C(e){var t=Math.pow(2,e.z),a=512/t,n=-a,r=512*e.x/t,o=512*(1-e.y/t);return(new z.a).translate([r,o,0]).scale([a,n,1])}var I=a(204),R=a(459),D=a(465),J=a(460),L=a(468),Z=[{key:"pydelatin",value:"pydelatin",text:"Algorithm: Delatin"},{key:"pymartini",value:"pymartini",text:"Algorithm: Martini"}];function q(e){var t=e.meshAlgorithm,a=e.loadTexture,n=e.onChange,o=[{key:"main-panel",title:"Serverless 3D Terrain Mesh",content:{content:r.a.createElement("div",null,r.a.createElement("p",null,"Uses"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kylebarron/pydelatin"},r.a.createElement(I.a,{name:"github"}),r.a.createElement("code",null,"pydelatin"))," ","or"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kylebarron/pymartini"},r.a.createElement(I.a,{name:"github"}),r.a.createElement("code",null,"pymartini"))," ","for mesh generation,"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kylebarron/quantized-mesh-encoder"},r.a.createElement(I.a,{name:"github"}),r.a.createElement("code",null,"quantized-mesh-encoder"))," ","for encoding to"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/CesiumGS/quantized-mesh"},"quantized mesh"),","," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kylebarron/dem-tiler"},r.a.createElement(I.a,{name:"github"}),r.a.createElement("code",null,"dem-tiler"))," ","for the serverless API, and"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://deck.gl"},r.a.createElement("code",null,"deck.gl"))," ","for rendering. You can also easily overlay a texture source, e.g. Mapbox Satellite tiles, with deck.gl."," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kylebarron/quantized-mesh-encoder/tree/master/site"},r.a.createElement(I.a,{name:"github"}),"Example source.")),r.a.createElement(R.a,{label:"Overlay satellite imagery",value:a,onClick:function(e,t){var a=t.checked;return n({loadTexture:a})}}),r.a.createElement("br",null),r.a.createElement(D.a,{placeholder:"Select mesh algorithm",options:Z,value:t,onChange:function(e,t){var a=t.value;return n({meshAlgorithm:a})}}))}}];return r.a.createElement(J.a,{style:{position:"absolute",width:300,maxWidth:"50%",left:5,top:5,padding:5,maxHeight:"50%",zIndex:1,pointerEvents:"auto",overflowY:"auto",overflow:"visible"}},r.a.createElement(L.a,{defaultActiveIndex:-1,styled:!0,panels:o}))}a(432);var P={latitude:36.07091852096502,longitude:-112.00934837595949,bearing:-35.19642857142857,pitch:60,zoom:13.574472859832357,maxPitch:89},V=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={viewState:P,zRange:null,meshAlgorithm:"pydelatin",loadTexture:!1},e.onViewportLoad=function(t){if(t&&0!==t.length&&!t.every((function(e){return!e}))){var a=e.state.zRange,n=t.filter(Boolean).map((function(e){return e[0].header.boundingBox.map((function(e){return e[2]}))})),r=Math.min.apply(Math,Object(l.a)(n.map((function(e){return e[0]})))),o=Math.max.apply(Math,Object(l.a)(n.map((function(e){return e[1]}))));(!a||r<a[0]||o>a[1])&&e.setState({zRange:[r,o]})}},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.viewState,n=t.zRange,o=t.meshAlgorithm,i=t.loadTexture,l=[j({onViewportLoad:this.onViewportLoad,zRange:n,meshAlgorithm:o,loadTexture:i})];return r.a.createElement("div",null,r.a.createElement(h.a,{style:{backgroundColor:"rgb(0, 0, 0)"},viewState:a,layers:l,onViewStateChange:function(t){var a=t.viewState;return e.setState({viewState:a})},controller:{touchRotate:!0}}),r.a.createElement(q,{meshAlgorithm:o,loadTexture:i,onChange:function(t){return e.setState(t)}}))}}]),a}(r.a.Component);document.body.style.margin=0;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[302,1,2]]]);
//# sourceMappingURL=main.ddec0fb8.chunk.js.map