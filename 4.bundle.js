(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{672:function(e,a,t){"use strict";t.r(a)},676:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return R}));var n=t(0),l=t.n(n),c=t(9),o=t(665),s=t(21),r=t(18),i=t.n(r),m=t(115),u=t(74),b=t(28),d=t(64),v=t(10),p=t(116),j=t(236);const O=Object(o.a)("div")({name:"Wrapper",class:"w1od7k37"}),E=Object(o.a)("div")({name:"Header",class:"h1m78m7v"}),y=Object(o.a)("div")({name:"Title",class:"toqsysz"}),f=Object(o.a)("div")({name:"Desc",class:"dncvf08"}),k=Object(o.a)("div")({name:"CloseWrapper",class:"cbc10e6"}),w=Object(o.a)(v.c)({name:"CloseIcon",class:"cw6pzyu"}),h=Object(o.a)("div")({name:"BlockWrapper",class:"b1g8f6bc"}),g=Object(o.a)(v.c)({name:"CheckmarkIcon",class:"czk12w0"}),S=Object(o.a)(v.c)({name:"OtherIcon",class:"o18mbp5l"}),T=Object(o.a)("div")({name:"ProgressWrapper",class:"p12i7cyl"}),C=Object(o.a)("div")({name:"ProgressLine",class:"p112p7y9"}),A=Object(o.a)("div")({name:"Content",class:"cy4f39q"}),W=Object(o.a)("div")({name:"SendWrapper",class:"saak63t"}),x=Object(o.a)("div")({name:"ValueCurrency",class:"v18xlo3e"}),I=Object(o.a)("div")({name:"ValueOriginal",class:"v7wy3mq"}),q=Object(o.a)("div")({name:"SwapWrapper",class:"sir5rf4"}),z=Object(o.a)("div")({name:"SwapColumn",class:"s1f1ms0b"}),D=Object(o.a)("div")({name:"SwapInfo",class:"sdyfgud"}),F=Object(o.a)("div")({name:"SwapBlock",class:"s12s7857"}),M=Object(o.a)(v.c)({name:"SwapIcon",class:"spkwk2s"}),B=Object(o.a)("div")({name:"SwapAmount",class:"scq0vrc"}),V=Object(o.a)("div")({name:"FieldsWrapper",class:"f171vk1k"}),N=Object(o.a)("div")({name:"FieldWrapper",class:"f7utqbi"}),P=Object(o.a)("div")({name:"FieldTitle",class:"f14ew0zk"}),G=Object(o.a)("div")({name:"FieldValue",class:"f1p1xgy"}),J=Object(o.a)(v.c)({name:"CopyIcon",class:"cqac2z6"}),Y=Object(o.a)("div")({name:"CopyWrapper",class:"c18ojgam"}),H=Object(o.a)("div")({name:"Footer",class:"fqp82lk"}),L=Object(o.a)(v.b)({name:"ButtonExplorer",class:"b1moablb"}),R=({type:e,action:a,fromToken:t,fromAmount:o,toToken:r,toAmount:R,close:_})=>{var K,Q,U,X,Z,$;const ee=Object(c.c)(),[ae,te]=Object(n.useState)(5),[ne,le]=Object(n.useState)(!1),[ce,oe]=Object(n.useState)(!1),[se,re]=Object(n.useState)(null),ie=Object(c.d)(e=>se&&e.transaction.items[se]&&m.a.from(e.transaction.items[se])||null),me=Object(c.d)(e=>e.wallet.cluster),ue=Object(c.d)(e=>e.wallet.tokenAccounts);Object(n.useEffect)(()=>{let e=5;if(!ne)return;const a=setInterval(()=>{ae<=100?(e+=7,te(e)):(e=100,te(e))},2500);return()=>{clearTimeout(a),te(0)}},[ne]);const be=async()=>{try{le(!0);const e=Object(s.e)(await ee(a));re(e)}catch(e){oe(!0),le(!1),b.b.error(e.toString())}};Object(n.useEffect)(()=>{be()},[]),Object(n.useEffect)(()=>{const e=async()=>{if(!se)return;Object(s.e)(await ee(Object(p.b)(se)))?le(!1):setTimeout(e,3e3)};e()},[se]);const de=Object(n.useMemo)(()=>ie?ue.find(e=>{var a;return e.address===(null===(a=ie.short.destination)||void 0===a?void 0:a.toBase58())}):null,[null==ie?void 0:ie.short.destination,ue]),ve=()=>{_(se)},pe=!se||!ie,je=se&&ie;return l.a.createElement(O,null,l.a.createElement(E,null,l.a.createElement(y,null,je?"Success":ce?"Something went wrong":"send"===e?"Sending...":"Swapping..."),l.a.createElement(f,null,je?"send"===e?"You’ve successfully sent "+t.symbol:"You’ve successfully swapped tokens":ce?"send"===e?"Tokens have not been debited":"Tokens have not been swapped":"Transaction processing"),l.a.createElement(k,{onClick:ve},l.a.createElement(w,{name:"close"})),l.a.createElement(h,{className:i()({isProcessing:pe,isSuccess:je,isError:ce})},je?l.a.createElement(g,{name:"checkmark"}):l.a.createElement(S,{name:ce?"warning":"timer"}))),l.a.createElement(T,null,l.a.createElement(C,{style:{width:ae+"%"}})),l.a.createElement(A,null,"send"===e?l.a.createElement(W,null,l.a.createElement(x,null,l.a.createElement(u.a,{prefix:de?"+":"-",symbol:(null==ie||null===(K=ie.short.sourceTokenAccount)||void 0===K?void 0:K.mint.symbol)||t.symbol,value:(null==ie?void 0:ie.short.amount)||t.toMajorDenomination(o)})),l.a.createElement(I,null,de?"+":"-"," ",(null==ie?void 0:ie.short.amount.toNumber())||t.toMajorDenomination(o).toString()," ",(null==ie||null===(Q=ie.short.sourceTokenAccount)||void 0===Q?void 0:Q.mint.symbol)||t.symbol)):void 0,"swap"===e&&r&&R?l.a.createElement(q,null,l.a.createElement(z,null,l.a.createElement(D,null,l.a.createElement(d.a,{size:44,symbol:(null==ie||null===(U=ie.short.sourceTokenAccount)||void 0===U?void 0:U.mint.symbol)||t.symbol}),l.a.createElement(B,null,"- ",t.toMajorDenomination(o).toString()," ",(null==ie||null===(X=ie.short.sourceTokenAccount)||void 0===X?void 0:X.mint.symbol)||t.symbol))),l.a.createElement(F,null,l.a.createElement(M,{name:"swap"})),l.a.createElement(z,null,l.a.createElement(D,null,l.a.createElement(d.a,{size:44,symbol:(null==ie||null===(Z=ie.short.destinationTokenAccount)||void 0===Z?void 0:Z.mint.symbol)||r.symbol}),l.a.createElement(B,null,"+"," ",((null==ie?void 0:ie.short.amount)||r.toMajorDenomination(R)).toString()," ",(null==ie||null===($=ie.short.destinationTokenAccount)||void 0===$?void 0:$.mint.symbol)||r.symbol)))):void 0,se?l.a.createElement(V,null,l.a.createElement(N,null,l.a.createElement(P,null,"Transaction ID"),l.a.createElement(G,null,se," ",l.a.createElement(Y,{onClick:(Oe=se,()=>{try{navigator.clipboard.writeText(Oe),b.b.info("Copied to buffer!")}catch(e){console.error(e)}})},l.a.createElement(J,{name:"copy"}))))):void 0),l.a.createElement(H,null,ce?l.a.createElement(l.a.Fragment,null,l.a.createElement(v.b,{primary:!0,disabled:ne,onClick:()=>{be()}},"Retry"),l.a.createElement(v.b,{lightGray:!0,disabled:ne,onClick:ve},"Cancel")):l.a.createElement(l.a.Fragment,null,l.a.createElement(v.b,{primary:!0,onClick:ve},"Done"),se?l.a.createElement("a",{href:Object(j.a)("tx",se,me),target:"_blank",rel:"noopener noreferrer noindex",className:"button"},l.a.createElement(L,{lightGray:!0},"View in blockchain explorer")):void 0)));var Oe};t(672)}}]);
//# sourceMappingURL=4.bundle.js.map