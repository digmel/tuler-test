(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[671],{7989:function(e,t,r){"use strict";r.d(t,{lL:function(){return i}});r(7294);var n=r(9057),a=r.n(n),o=r(5893),i=function(e){var t=e.children,r={flex:1,paddingHorizontal:e.isMobile?24:120};return(0,o.jsx)(a(),{style:{flex:1},children:(0,o.jsx)(a(),{style:r,children:t})})};r(2042),r(5675)},7660:function(e,t,r){"use strict";r.d(t,{F:function(){return i}});var n=r(7294),a=r(5390),o=r.n(a),i=function(){var e=(0,n.useState)(!1),t=e[0],r=e[1],a=o()().width;return(0,n.useEffect)((function(){r(a<1400)}),[a]),{isMobile:t}}},3651:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return z}});var n=r(29),a=r(7794),o=r.n(a),i=r(7294),u=r(7989),s=r(9057),l=r.n(s),c=r(8409),d=r.n(c),f=r(4965),p=r.n(f),h=r(9893),g=r.n(h),v=r(4053);var y={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let m;const b=new Uint8Array(16);function x(){if(!m&&(m="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!m))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(b)}const w=[];for(let L=0;L<256;++L)w.push((L+256).toString(16).slice(1));function E(e,t=0){return(w[e[t+0]]+w[e[t+1]]+w[e[t+2]]+w[e[t+3]]+"-"+w[e[t+4]]+w[e[t+5]]+"-"+w[e[t+6]]+w[e[t+7]]+"-"+w[e[t+8]]+w[e[t+9]]+"-"+w[e[t+10]]+w[e[t+11]]+w[e[t+12]]+w[e[t+13]]+w[e[t+14]]+w[e[t+15]]).toLowerCase()}var S=function(e,t,r){if(y.randomUUID&&!t&&!e)return y.randomUUID();const n=(e=e||{}).random||(e.rng||x)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=n[e];return t}return E(n)},I=r(7660),C=r(1163),j=r(5893),k="https://script.google.com/macros/s/AKfycbxizjvxjzwDKJK_VK14XhAD3LAf2xtr1KIxbam322vuV3LwRTbKVI4tUxWDZoaEWlCsOQ/exec",_="https://zgtxpheizfaytyphdejc.supabase.co/storage/v1/object/public/images/";function z(){var e=(0,I.F)().isMobile,t=(0,i.useState)(!0),r=t[0],a=t[1],s=(0,i.useState)(""),c=s[0],f=s[1],h=(0,i.useState)(),y=h[0],m=h[1],b=(0,C.useRouter)(),x=(0,i.useState)(""),w=x[0],E=x[1],z=(0,v.useUser)(),L=(0,v.useSupabaseClient)();function R(){return U.apply(this,arguments)}function U(){return(U=(0,n.Z)(o().mark((function e(){var t,r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("first name: ",w),e.next=3,L.storage.from("images").upload(z.id+"/"+w,y);case 3:t=e.sent,r=t.data,n=t.error,r||console.log(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,i.useEffect)((function(){z||b.push("/"),console.log("Current user: ",z)}),[z]);var D=function(){var e=(0,n.Z)(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("capture"),f(window.URL.createObjectURL(t.files[0])),a(!0),m(t.files[0]),r=S(),E(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function M(){return O.apply(this,arguments)}function O(){return(O=(0,n.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.auth.signOut();case 2:t=e.sent,t.error;case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return(A=(0,n.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:return t=_+z.id+"/"+w,console.log("url: ",t),f(""),a(!1),e.prev=6,e.next=9,fetch(k,{method:"POST",mode:"no-cors",body:JSON.stringify(t)});case 9:return e.next=11,M();case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),console.log("error",e.t0);case 16:case"end":return e.stop()}}),e,null,[[6,13]])})))).apply(this,arguments)}return(0,j.jsxs)(u.lL,{isMobile:e,children:[!e&&(0,j.jsx)(l(),{style:{flex:1,justifyContent:"center",alignItems:"center"},children:(0,j.jsx)(d(),{children:"Please use only phone to open the Tuler."})}),e&&(0,j.jsxs)(l(),{style:{flex:1,marginTop:24},children:[(0,j.jsx)(l(),{style:{flex:1,borderColor:"gray",borderWidth:1,borderRadius:"10px"},children:(0,j.jsxs)("label",{style:{width:"100%",height:"100%"},children:[(0,j.jsx)(l(),{style:{flex:1,justifyContent:"center",alignItems:"center",marginTop:"100px"},children:(0,j.jsx)(d(),{style:{paddingHorizontal:"20px",textAlign:"center"},children:"Click anywhere to activate Camera"})}),(0,j.jsx)("input",{type:"file",id:"capture",accept:"image/*,video/*",capture:!0,multiple:!0,onChange:D,style:{display:"none"}})]})}),(0,j.jsx)(l(),{style:{marginVertical:24,flex:1},children:r&&(0,j.jsx)(l(),{style:{flex:1,justifyContent:"center",alignContent:"center"},children:(0,j.jsx)(p(),{style:{width:200,height:200,alignSelf:"center",borderRadius:12},source:{uri:c}})})}),(0,j.jsx)(l(),{style:{marginBottom:32},children:(0,j.jsx)(g(),{title:"send",color:"blue",borderRadius:"12px",onPress:function(){return A.apply(this,arguments)}})})]})]})}},575:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/main",function(){return r(3651)}])},4965:function(e,t,r){"use strict";var n=r(4836).default,a=r(5263).default;t.__esModule=!0,t.default=void 0;var o=n(r(2122)),i=n(r(434)),u=n(r(7071)),s=a(r(7294)),l=n(r(3820)),c=r(9025),d=r(7874),f=n(r(9096)),p=n(r(5238)),h=n(r(4099)),g=n(r(7905)),v=n(r(9057)),y=["accessibilityLabel","blurRadius","defaultSource","draggable","onError","onLayout","onLoad","onLoadEnd","onLoadStart","pointerEvents","source","style"],m="LOADED",b="LOADING",x=0,w=/^(data:image\/svg\+xml;utf8,)(.*)/;function E(e){var t=null;if("number"===typeof e){var r=(0,c.getAssetByID)(e);if(null==r)throw new Error('Image: asset with ID "'+e+'" could not be found. Please check the image source or packager.');var n=r.scales[0];if(r.scales.length>1){var a=p.default.get();n=r.scales.reduce(((e,t)=>Math.abs(t-a)<Math.abs(e-a)?t:e))}var o=1!==n?"@"+n+"x":"";t=r?r.httpServerLocation+"/"+r.name+o+"."+r.type:""}else"string"===typeof e?t=e:e&&"string"===typeof e.uri&&(t=e.uri);if(t){var i=t.match(w);if(i){var u=i[1],s=i[2];return""+u+encodeURIComponent(s)}}return t}var S=s.forwardRef(((e,t)=>{var r=e.accessibilityLabel,n=e.blurRadius,a=e.defaultSource,o=e.draggable,p=e.onError,w=e.onLayout,S=e.onLoad,I=e.onLoadEnd,k=e.onLoadStart,_=e.pointerEvents,z=e.source,L=e.style,R=(0,u.default)(e,y);var U=s.useState((()=>{var e=E(z);if(null!=e&&f.default.has(e))return m;return"IDLE"})),D=U[0],M=U[1],O=s.useState({}),A=O[0],P=O[1],T=s.useContext(g.default),N=s.useRef(null),B=s.useRef(x++),F=s.useRef(null),V=D===m||D===b&&null==a,W=function(e,t,r){var n=h.default.flatten(e),a=n.filter,o=n.resizeMode,i=n.shadowOffset,u=n.tintColor,s=[],l=null;if(a&&s.push(a),t&&s.push("blur("+t+"px)"),i){var c=(0,d.createBoxShadowValue)(n);c&&s.push("drop-shadow("+c+")")}return u&&null!=r&&s.push("url(#tint-"+r+")"),s.length>0&&(l=s.join(" ")),delete n.blurRadius,delete n.shadowColor,delete n.shadowOpacity,delete n.shadowOffset,delete n.shadowRadius,delete n.tintColor,delete n.overlayColor,delete n.resizeMode,[n,o,l,u]}(L,n,B.current),H=W[0],K=W[1],Z=W[2],q=W[3],X=e.resizeMode||K||"cover",J=V?z:a,$=E(J),G=function(e){if("number"===typeof e){var t=(0,c.getAssetByID)(e);return{height:t.height,width:t.width}}if(null!=e&&!Array.isArray(e)&&"object"===typeof e)return{height:e.height,width:e.width}}(J),Q=$?'url("'+$+'")':null,Y=function(){if(null!=N.current&&("center"===X||"repeat"===X)){var e=N.current,t=e.naturalHeight,r=e.naturalWidth,n=A.height,a=A.width;if(t&&r&&n&&a){var o=Math.min(1,a/r,n/t),i=Math.ceil(o*r),u=Math.ceil(o*t);return i+"px "+u+"px"}}}(),ee=$?(0,l.default)("img",{alt:r||"",style:C.accessibilityImage$raw,draggable:o||!1,ref:N,src:$}):null;var te=E(z);return s.useEffect((()=>{function e(){null!=F.current&&(f.default.abort(F.current),F.current=null)}return e(),null!=te&&(M(b),k&&k(),F.current=f.default.load(te,(function(e){M(m),S&&S(e),I&&I()}),(function(){M("ERRORED"),p&&p({nativeEvent:{error:"Failed to load resource "+te+" (404)"}}),I&&I()}))),e}),[te,F,M,p,S,I,k]),s.createElement(v.default,(0,i.default)({},R,{accessibilityLabel:r,onLayout:function(e){if("center"===X||"repeat"===X||w){var t=e.nativeEvent.layout;w&&w(e),P(t)}},pointerEvents:_,ref:t,style:[C.root,T&&C.inline,G,H]}),s.createElement(v.default,{style:[C.image,j[X],{backgroundImage:Q,filter:Z},null!=Y&&{backgroundSize:Y}],suppressHydrationWarning:!0}),ee,function(e,t){return e&&null!=t?s.createElement("svg",{style:{position:"absolute",height:0,visibility:"hidden",width:0}},s.createElement("defs",null,s.createElement("filter",{id:"tint-"+t,suppressHydrationWarning:!0},s.createElement("feFlood",{floodColor:""+e,key:e}),s.createElement("feComposite",{in2:"SourceAlpha",operator:"atop"})))):null}(q,B.current))}));S.displayName="Image";var I=S;I.getSize=function(e,t,r){f.default.getSize(e,t,r)},I.prefetch=function(e){return f.default.prefetch(e)},I.queryCache=function(e){return f.default.queryCache(e)};var C=h.default.create({root:{flexBasis:"auto",overflow:"hidden",zIndex:0},inline:{display:"inline-flex"},image:(0,o.default)((0,o.default)({},h.default.absoluteFillObject),{},{backgroundColor:"transparent",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100%",width:"100%",zIndex:-1}),accessibilityImage$raw:(0,o.default)((0,o.default)({},h.default.absoluteFillObject),{},{height:"100%",opacity:0,width:"100%",zIndex:-1})}),j=h.default.create({center:{backgroundSize:"auto"},contain:{backgroundSize:"contain"},cover:{backgroundSize:"cover"},none:{backgroundPosition:"0",backgroundSize:"auto"},repeat:{backgroundPosition:"0",backgroundRepeat:"repeat",backgroundSize:"auto"},stretch:{backgroundSize:"100% 100%"}}),k=I;t.default=k,e.exports=t.default},5238:function(e,t,r){"use strict";var n=r(4836).default;t.__esModule=!0,t.default=void 0;var a=n(r(3256));class o{static get(){return a.default.get("window").scale}static getFontScale(){return a.default.get("window").fontScale||o.get()}static getPixelSizeForLayoutSize(e){return Math.round(e*o.get())}static roundToNearestPixel(e){var t=o.get();return Math.round(e*t)/t}}t.default=o,e.exports=t.default},9025:function(e,t){"use strict";t.__esModule=!0,t.getAssetByID=function(e){return r[e-1]},t.registerAsset=function(e){return r.push(e)};var r=[]},9096:function(e,t){"use strict";t.__esModule=!0,t.default=t.ImageUriCache=void 0;var r=/^data:/;class n{static has(e){var t=n._entries;return r.test(e)||Boolean(t[e])}static add(e){var t=n._entries,r=Date.now();t[e]?(t[e].lastUsedTimestamp=r,t[e].refCount+=1):t[e]={lastUsedTimestamp:r,refCount:1}}static remove(e){var t=n._entries;t[e]&&(t[e].refCount-=1),n._cleanUpIfNeeded()}static _cleanUpIfNeeded(){var e,t,r=n._entries,a=Object.keys(r);a.length+1>n._maximumEntries&&(a.forEach((n=>{var a=r[n];(!t||a.lastUsedTimestamp<t.lastUsedTimestamp)&&0===a.refCount&&(e=n,t=a)})),e&&delete r[e])}}t.ImageUriCache=n,n._maximumEntries=256,n._entries={};var a=0,o={},i={abort(e){var t=o[""+e];t&&(t.onerror=null,t.onload=null,t=null,delete o[""+e])},getSize(e,t,r){var n=!1,a=setInterval(s,16),u=i.load(e,s,(function(){"function"===typeof r&&r();i.abort(u),clearInterval(a)}));function s(){var e=o[""+u];if(e){var r=e.naturalHeight,s=e.naturalWidth;r&&s&&(t(s,r),n=!0)}n&&(i.abort(u),clearInterval(a))}},has:e=>n.has(e),load(e,t,r){a+=1;var n=new window.Image;return n.onerror=r,n.onload=e=>{var r=()=>t({nativeEvent:e});"function"===typeof n.decode?n.decode().then(r,r):setTimeout(r,0)},n.src=e,o[""+a]=n,a},prefetch:e=>new Promise(((t,r)=>{i.load(e,(()=>{n.add(e),n.remove(e),t()}),r)})),queryCache(e){var t={};return e.forEach((e=>{n.has(e)&&(t[e]="disk/memory")})),Promise.resolve(t)}},u=i;t.default=u}},function(e){e.O(0,[213,774,888,179],(function(){return t=575,e(e.s=t);var t}));var t=e.O();_N_E=t}]);