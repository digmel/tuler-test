(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2187:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r=n(29),s=n(7794),i=n.n(s),o=n(7294),c=n(9057),a=n.n(c),l=n(5893),u=function(e){var t=e.children,n={flex:1,paddingHorizontal:e.isMobile?24:120};return(0,l.jsx)(a(),{style:{flex:1},children:(0,l.jsx)(a(),{style:n,children:t})})},f=(n(2042),n(5675),n(8409)),d=n.n(f),p=n(4965),h=n.n(p),x=n(9893),y=n.n(x),g=n(4053),j=n(7632),m=n(5390),b=n.n(m),v="https://script.google.com/macros/s/AKfycbxizjvxjzwDKJK_VK14XhAD3LAf2xtr1KIxbam322vuV3LwRTbKVI4tUxWDZoaEWlCsOQ/exec",w="https://zgtxpheizfaytyphdejc.supabase.co/storage/v1/object/public/images/";function _(){var e=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1],r=b()().width;return(0,o.useEffect)((function(){n(r<1400)}),[r]),{isMobile:t}}(),t=e.isMobile,n=(0,o.useState)(!0),s=n[0],c=n[1],f=(0,o.useState)(""),p=f[0],x=f[1],m=(0,o.useState)(),_=m[0],C=m[1],k=(0,o.useState)(""),E=k[0],S=k[1],T=(0,g.useUser)(),z=(0,g.useSupabaseClient)();function K(){return N.apply(this,arguments)}function N(){return(N=(0,r.Z)(i().mark((function e(){var t,n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("first name: ",E),e.next=3,z.storage.from("images").upload(T.id+"/"+E,_);case 3:t=e.sent,n=t.data,r=t.error,n||console.log(r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,o.useEffect)((function(){T&&console.log("first",T)}),[T]);var O=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("capture"),x(window.URL.createObjectURL(t.files[0])),c(!0),C(t.files[0]),n=(0,j.Z)(),S(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function R(){return(R=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K();case 2:return t=w+T.id+"/"+E,console.log("url: ",t),x(""),c(!1),e.prev=6,e.next=9,fetch(v,{method:"POST",mode:"no-cors",body:JSON.stringify(t)});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(6),console.log("error",e.t0);case 14:case"end":return e.stop()}}),e,null,[[6,11]])})))).apply(this,arguments)}return(0,l.jsxs)(u,{isMobile:t,children:[!t&&(0,l.jsx)(a(),{style:{flex:1,justifyContent:"center",alignItems:"center"},children:(0,l.jsx)(d(),{children:"Please use only phone to open the Tuler."})}),t&&(0,l.jsxs)(a(),{style:{flex:1,marginTop:24},children:[(0,l.jsx)(a(),{style:{flex:1,borderColor:"gray",borderWidth:1,borderRadius:"10px"},children:(0,l.jsxs)("label",{style:{width:"100%",height:"100%"},children:[(0,l.jsx)(a(),{style:{flex:1,justifyContent:"center",alignItems:"center",marginTop:"100px"},children:(0,l.jsx)(d(),{style:{paddingHorizontal:"20px",textAlign:"center"},children:"Click anywhere to activate Camera"})}),(0,l.jsx)("input",{type:"file",id:"capture",accept:"image/*,video/*",capture:!0,multiple:!0,onChange:O,style:{display:"none"}})]})}),(0,l.jsx)(a(),{style:{marginVertical:24,flex:1},children:s&&(0,l.jsx)(a(),{style:{flex:1,justifyContent:"center",alignContent:"center"},children:(0,l.jsx)(h(),{style:{width:200,height:200,alignSelf:"center",borderRadius:12},source:{uri:p}})})}),(0,l.jsx)(a(),{style:{marginBottom:32},children:(0,l.jsx)(y(),{title:"send",color:"blue",borderRadius:"12px",onPress:function(){return R.apply(this,arguments)}})})]})]})}},5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2187)}])}},function(e){e.O(0,[724,774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);