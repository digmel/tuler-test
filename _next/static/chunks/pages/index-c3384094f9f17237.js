(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7989:function(e,t,n){"use strict";n.d(t,{lL:function(){return u}});n(7294);var r=n(9057),o=n.n(r),l=n(5893),u=function(e){var t=e.children,n={flex:1,paddingHorizontal:e.isMobile?24:120};return(0,l.jsx)(o(),{style:{flex:1},children:(0,l.jsx)(o(),{style:n,children:t})})};n(2042),n(5675)},7660:function(e,t,n){"use strict";n.d(t,{F:function(){return u}});var r=n(7294),o=n(5390),l=n.n(o),u=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1],o=l()().width;return(0,r.useEffect)((function(){n(o<1400)}),[o]),{isMobile:t}}},2748:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(29),o=n(7794),l=n.n(o),u=n(7294),a=n(7989),s=n(9057),i=n.n(s),c=n(8409),d=n.n(c),p=n(9893),h=n.n(p),f=n(4053),v=n(1163),S=n(7660),g=n(4941),y=n.n(g),x=n(5893);function m(){var e=(0,S.F)().isMobile,t=(0,v.useRouter)(),n=(0,f.useUser)(),o=(0,f.useSupabaseClient)(),s=(0,u.useState)(""),c=s[0],p=s[1],g=(0,u.useState)(null);g[0],g[1];(0,u.useEffect)((function(){n&&console.log("Current user: ",n)}),[n]);var m=function(){var e=(0,r.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(c);case 2:return e.next=4,b(c);case 4:p("");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function C(e){return R.apply(this,arguments)}function R(){return R=(0,r.Z)(l().mark((function e(n){var r,u;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.auth.signUp({email:n,password:"12345678"});case 2:r=e.sent,(u=r.error)?console.log("Error when sign up",u):(t.push("/main"),console.log("New user created: ",n));case 5:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}function b(e){return w.apply(this,arguments)}function w(){return w=(0,r.Z)(l().mark((function e(t){var n,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.auth.signInWithPassword({email:t,password:"12345678"});case 2:n=e.sent,(r=n.error)?(console.log("Error when login",r),console.log(r)):console.log("User is logged in with: ",t);case 5:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}return(0,x.jsxs)(a.lL,{isMobile:e,children:[!e&&(0,x.jsx)(i(),{style:{flex:1,justifyContent:"center",alignItems:"center"},children:(0,x.jsx)(d(),{children:"Please use only phone to open the Tuler."})}),e&&(0,x.jsxs)(i(),{style:{flex:1,justifyContent:"center"},children:[(0,x.jsx)(i(),{style:{alignSelf:"center"},children:(0,x.jsx)(d(),{style:{fontSize:24,fontWeight:600,marginBottom:36},children:"Hi there!"})}),(0,x.jsx)(d(),{style:{fontSize:18,fontWeight:300},children:"Email:"}),(0,x.jsx)(i(),{children:(0,x.jsx)(y(),{autoFocus:!0,onChange:function(e){return p(e.target.value)},style:{height:36,borderWidth:.5,borderColor:"gray",padding:4,marginVertical:12,borderRadius:8}})}),(0,x.jsx)(i(),{style:{marginTop:32},children:(0,x.jsx)(h(),{title:"Start",color:"blue",onPress:m})})]})]})}},5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2748)}])},4941:function(e,t,n){"use strict";var r=n(4836).default,o=n(5263).default;t.__esModule=!0,t.default=void 0;var l=o(n(7294)),u=r(n(3820)),a=o(n(4475)),s=r(n(7447)),i=r(n(8954)),c=r(n(3320)),d=r(n(8391)),p=r(n(2187)),h=r(n(6758)),f=n(2901),v=r(n(4099)),S=r(n(551)),g=Object.assign({},a.defaultProps,a.accessibilityProps,a.clickProps,a.focusProps,a.keyboardProps,a.mouseProps,a.touchProps,a.styleProps,{autoCapitalize:!0,autoComplete:!0,autoCorrect:!0,autoFocus:!0,defaultValue:!0,disabled:!0,lang:!0,maxLength:!0,onChange:!0,onScroll:!0,placeholder:!0,pointerEvents:!0,readOnly:!0,rows:!0,spellCheck:!0,value:!0,type:!0});var y=null,x=l.forwardRef(((e,t)=>{var n,r,o=e.autoCapitalize,a=void 0===o?"sentences":o,v=e.autoComplete,x=e.autoCompleteType,C=e.autoCorrect,R=void 0===C||C,b=e.blurOnSubmit,w=e.clearTextOnFocus,E=e.dir,k=e.editable,T=void 0===k||k,_=e.keyboardType,F=void 0===_?"default":_,j=e.multiline,N=void 0!==j&&j,P=e.numberOfLines,M=void 0===P?1:P,z=e.onBlur,O=e.onChange,L=e.onChangeText,W=e.onContentSizeChange,D=e.onFocus,I=e.onKeyPress,K=e.onLayout,H=e.onMoveShouldSetResponder,B=e.onMoveShouldSetResponderCapture,U=e.onResponderEnd,Z=e.onResponderGrant,q=e.onResponderMove,A=e.onResponderReject,G=e.onResponderRelease,V=e.onResponderStart,X=e.onResponderTerminate,$=e.onResponderTerminationRequest,J=e.onScrollShouldSetResponder,Q=e.onScrollShouldSetResponderCapture,Y=e.onSelectionChange,ee=e.onSelectionChangeShouldSetResponder,te=e.onSelectionChangeShouldSetResponderCapture,ne=e.onStartShouldSetResponder,re=e.onStartShouldSetResponderCapture,oe=e.onSubmitEditing,le=e.placeholderTextColor,ue=e.returnKeyType,ae=e.secureTextEntry,se=void 0!==ae&&ae,ie=e.selection,ce=e.selectTextOnFocus,de=e.spellCheck;switch(F){case"email-address":n="email";break;case"number-pad":case"numeric":r="numeric";break;case"decimal-pad":r="decimal";break;case"phone-pad":n="tel";break;case"search":case"web-search":n="search";break;case"url":n="url";break;default:n="text"}se&&(n="password");var pe=l.useRef({height:null,width:null}),he=l.useRef(null),fe=l.useCallback((e=>{if(N&&W&&null!=e){var t=e.scrollHeight,n=e.scrollWidth;t===pe.current.height&&n===pe.current.width||(pe.current.height=t,pe.current.width=n,W({nativeEvent:{contentSize:{height:pe.current.height,width:pe.current.width}}}))}}),[N,W]),ve=l.useMemo((()=>e=>{null!=e&&(e.clear=function(){null!=e&&(e.value="")},e.isFocused=function(){return null!=e&&S.default.currentlyFocusedField()===e},fe(e))}),[fe]);(0,c.default)((()=>{var e=he.current;null!=e&&null!=ie&&((e,t)=>{if(((e,t)=>{var n=e.selectionEnd,r=e.selectionStart,o=t.start,l=t.end;return o!==r||l!==n})(e,t)){var n=t.start,r=t.end;try{e.setSelectionRange(n,r||n)}catch(o){}}})(e,ie),document.activeElement===e&&(S.default._currentlyFocusedNode=e)}),[he,ie]);var Se=N?"textarea":"input";(0,i.default)(he,K),(0,h.default)(he,{onMoveShouldSetResponder:H,onMoveShouldSetResponderCapture:B,onResponderEnd:U,onResponderGrant:Z,onResponderMove:q,onResponderReject:A,onResponderRelease:G,onResponderStart:V,onResponderTerminate:X,onResponderTerminationRequest:$,onScrollShouldSetResponder:J,onScrollShouldSetResponderCapture:Q,onSelectionChangeShouldSetResponder:ee,onSelectionChangeShouldSetResponderCapture:te,onStartShouldSetResponder:ne,onStartShouldSetResponderCapture:re});var ge=(0,f.useLocaleContext)().direction,ye=(e=>(0,s.default)(e,g))(e);ye.autoCapitalize=a,ye.autoComplete=v||x||"on",ye.autoCorrect=R?"on":"off",ye.dir=void 0!==E?E:"auto",ye.enterKeyHint=ue,ye.inputMode=r,ye.onBlur=function(e){S.default._currentlyFocusedNode=null,z&&(e.nativeEvent.text=e.target.value,z(e))},ye.onChange=function(e){var t=e.target,n=t.value;e.nativeEvent.text=n,fe(t),O&&O(e),L&&L(n)},ye.onFocus=function(e){var t=e.target;D&&(e.nativeEvent.text=t.value,D(e)),null!=t&&(S.default._currentlyFocusedNode=t,w&&(t.value=""),ce&&(null!=y&&clearTimeout(y),y=setTimeout((()=>{null!=t&&t.select()}),0)))},ye.onKeyDown=function(e){var t=e.target;e.stopPropagation();var n=null==b?!N:b,r=e.nativeEvent,o=function(e){return e.isComposing||229===e.keyCode}(r);I&&I(e),"Enter"!==e.key||e.shiftKey||o||e.isDefaultPrevented()||(!b&&N||!oe||(e.preventDefault(),r.text=e.target.value,oe(e)),n&&null!=t&&setTimeout((()=>t.blur()),0))},ye.onSelect=function(e){if(Y)try{var t=e.target,n=t.selectionStart,r=t.selectionEnd;e.nativeEvent.selection={start:n,end:r},e.nativeEvent.text=e.target.value,Y(e)}catch(e){}},ye.readOnly=!T,ye.rows=N?M:void 0,ye.spellCheck=null!=de?de:R,ye.style=[{"--placeholderTextColor":le},m.textinput$raw,m.placeholder,e.style],ye.type=N?void 0:n;var xe=(0,p.default)(ye),me=(0,d.default)(he,xe,ve,t);ye.ref=me;var Ce=null!=e.lang?(0,f.getLocaleDirection)(e.lang):null,Re=e.dir||Ce||ge;return(0,u.default)(Se,ye,{writingDirection:Re})}));x.displayName="TextInput",x.State=S.default;var m=v.default.create({textinput$raw:{MozAppearance:"textfield",WebkitAppearance:"none",backgroundColor:"transparent",border:"0 solid black",borderRadius:0,boxSizing:"border-box",font:"14px System",margin:0,padding:0,resize:"none"},placeholder:{placeholderTextColor:"var(--placeholderTextColor)"}}),C=x;t.default=C,e.exports=t.default},551:function(e,t,n){"use strict";var r=n(4836).default;t.__esModule=!0,t.default=void 0;var o=r(n(6629)),l={_currentlyFocusedNode:null,currentlyFocusedField(){return document.activeElement!==this._currentlyFocusedNode&&(this._currentlyFocusedNode=null),this._currentlyFocusedNode},focusTextInput(e){null!==e&&(this._currentlyFocusedNode=e,document.activeElement!==e&&o.default.focus(e))},blurTextInput(e){null!==e&&(this._currentlyFocusedNode=null,document.activeElement===e&&o.default.blur(e))}};t.default=l,e.exports=t.default}},function(e){e.O(0,[213,774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);