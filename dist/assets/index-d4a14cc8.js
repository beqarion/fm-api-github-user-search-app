(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const L=t=>{const e=document.querySelector(t);if(e)return e;throw new Error(`Cannot get element with "${t}" query`)},gt=L("#user-container"),Ut=async t=>{gt.innerHTML=`
  <!-- loading -->
        <div class="text-center text-custom-blue-gray font-bold">
          Loading...
        </div>
  `;try{return await(await fetch(t,{cache:"no-cache"})).json()}catch(e){gt.innerHTML=`
    <!-- error text -->
    <div class="text-center text-custom-blue-gray font-bold">
      <p>There was an error: ${e}</p>
    </div>
    `}},Wt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],qt=t=>{const e=new Date(t),n=e.getDate(),a=Wt[e.getMonth()],r=e.getFullYear();return`${n} ${a} ${r}`};var Mt={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},X={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},Zt=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],N={CSS:{},springs:{}};function P(t,e,n){return Math.min(Math.max(t,e),n)}function z(t,e){return t.indexOf(e)>-1}function J(t,e){return t.apply(null,e)}var f={arr:function(t){return Array.isArray(t)},obj:function(t){return z(Object.prototype.toString.call(t),"Object")},pth:function(t){return f.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},inp:function(t){return t instanceof HTMLInputElement},dom:function(t){return t.nodeType||f.svg(t)},str:function(t){return typeof t=="string"},fnc:function(t){return typeof t=="function"},und:function(t){return typeof t>"u"},nil:function(t){return f.und(t)||t===null},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return f.hex(t)||f.rgb(t)||f.hsl(t)},key:function(t){return!Mt.hasOwnProperty(t)&&!X.hasOwnProperty(t)&&t!=="targets"&&t!=="keyframes"}};function Tt(t){var e=/\(([^)]+)\)/.exec(t);return e?e[1].split(",").map(function(n){return parseFloat(n)}):[]}function Lt(t,e){var n=Tt(t),a=P(f.und(n[0])?1:n[0],.1,100),r=P(f.und(n[1])?100:n[1],.1,100),o=P(f.und(n[2])?10:n[2],.1,100),s=P(f.und(n[3])?0:n[3],.1,100),u=Math.sqrt(r/a),i=o/(2*Math.sqrt(r*a)),p=i<1?u*Math.sqrt(1-i*i):0,c=1,l=i<1?(i*u+-s)/p:-s+u;function d(h){var g=e?e*h/1e3:h;return i<1?g=Math.exp(-g*i*u)*(c*Math.cos(p*g)+l*Math.sin(p*g)):g=(c+l*g)*Math.exp(-g*u),h===0||h===1?h:1-g}function w(){var h=N.springs[t];if(h)return h;for(var g=1/6,x=0,k=0;;)if(x+=g,d(x)===1){if(k++,k>=16)break}else k=0;var m=x*g*1e3;return N.springs[t]=m,m}return e?d:w}function Qt(t){return t===void 0&&(t=10),function(e){return Math.ceil(P(e,1e-6,1)*t)*(1/t)}}var Jt=function(){var t=11,e=1/(t-1);function n(c,l){return 1-3*l+3*c}function a(c,l){return 3*l-6*c}function r(c){return 3*c}function o(c,l,d){return((n(l,d)*c+a(l,d))*c+r(l))*c}function s(c,l,d){return 3*n(l,d)*c*c+2*a(l,d)*c+r(l)}function u(c,l,d,w,h){var g,x,k=0;do x=l+(d-l)/2,g=o(x,w,h)-c,g>0?d=x:l=x;while(Math.abs(g)>1e-7&&++k<10);return x}function i(c,l,d,w){for(var h=0;h<4;++h){var g=s(l,d,w);if(g===0)return l;var x=o(l,d,w)-c;l-=x/g}return l}function p(c,l,d,w){if(!(0<=c&&c<=1&&0<=d&&d<=1))return;var h=new Float32Array(t);if(c!==l||d!==w)for(var g=0;g<t;++g)h[g]=o(g*e,c,d);function x(k){for(var m=0,v=1,T=t-1;v!==T&&h[v]<=k;++v)m+=e;--v;var E=(k-h[v])/(h[v+1]-h[v]),b=m+E*e,O=s(b,c,d);return O>=.001?i(k,b,c,d):O===0?b:u(k,m,m+e,c,d)}return function(k){return c===l&&d===w||k===0||k===1?k:o(x(k),l,w)}}return p}(),_t=function(){var t={linear:function(){return function(a){return a}}},e={Sine:function(){return function(a){return 1-Math.cos(a*Math.PI/2)}},Circ:function(){return function(a){return 1-Math.sqrt(1-a*a)}},Back:function(){return function(a){return a*a*(3*a-2)}},Bounce:function(){return function(a){for(var r,o=4;a<((r=Math.pow(2,--o))-1)/11;);return 1/Math.pow(4,3-o)-7.5625*Math.pow((r*3-2)/22-a,2)}},Elastic:function(a,r){a===void 0&&(a=1),r===void 0&&(r=.5);var o=P(a,1,10),s=P(r,.1,2);return function(u){return u===0||u===1?u:-o*Math.pow(2,10*(u-1))*Math.sin((u-1-s/(Math.PI*2)*Math.asin(1/o))*(Math.PI*2)/s)}}},n=["Quad","Cubic","Quart","Quint","Expo"];return n.forEach(function(a,r){e[a]=function(){return function(o){return Math.pow(o,r+2)}}}),Object.keys(e).forEach(function(a){var r=e[a];t["easeIn"+a]=r,t["easeOut"+a]=function(o,s){return function(u){return 1-r(o,s)(1-u)}},t["easeInOut"+a]=function(o,s){return function(u){return u<.5?r(o,s)(u*2)/2:1-r(o,s)(u*-2+2)/2}},t["easeOutIn"+a]=function(o,s){return function(u){return u<.5?(1-r(o,s)(1-u*2))/2:(r(o,s)(u*2-1)+1)/2}}}),t}();function tt(t,e){if(f.fnc(t))return t;var n=t.split("(")[0],a=_t[n],r=Tt(t);switch(n){case"spring":return Lt(t,e);case"cubicBezier":return J(Jt,r);case"steps":return J(Qt,r);default:return J(a,r)}}function It(t){try{var e=document.querySelectorAll(t);return e}catch{return}}function R(t,e){for(var n=t.length,a=arguments.length>=2?arguments[1]:void 0,r=[],o=0;o<n;o++)if(o in t){var s=t[o];e.call(a,s,o,t)&&r.push(s)}return r}function U(t){return t.reduce(function(e,n){return e.concat(f.arr(n)?U(n):n)},[])}function vt(t){return f.arr(t)?t:(f.str(t)&&(t=It(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function et(t,e){return t.some(function(n){return n===e})}function rt(t){var e={};for(var n in t)e[n]=t[n];return e}function K(t,e){var n=rt(t);for(var a in t)n[a]=e.hasOwnProperty(a)?e[a]:t[a];return n}function W(t,e){var n=rt(t);for(var a in e)n[a]=f.und(t[a])?e[a]:t[a];return n}function Kt(t){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t);return e?"rgba("+e[1]+",1)":t}function Yt(t){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=t.replace(e,function(u,i,p,c){return i+i+p+p+c+c}),a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),r=parseInt(a[1],16),o=parseInt(a[2],16),s=parseInt(a[3],16);return"rgba("+r+","+o+","+s+",1)"}function Gt(t){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),n=parseInt(e[1],10)/360,a=parseInt(e[2],10)/100,r=parseInt(e[3],10)/100,o=e[4]||1;function s(d,w,h){return h<0&&(h+=1),h>1&&(h-=1),h<1/6?d+(w-d)*6*h:h<1/2?w:h<2/3?d+(w-d)*(2/3-h)*6:d}var u,i,p;if(a==0)u=i=p=r;else{var c=r<.5?r*(1+a):r+a-r*a,l=2*r-c;u=s(l,c,n+1/3),i=s(l,c,n),p=s(l,c,n-1/3)}return"rgba("+u*255+","+i*255+","+p*255+","+o+")"}function Xt(t){if(f.rgb(t))return Kt(t);if(f.hex(t))return Yt(t);if(f.hsl(t))return Gt(t)}function D(t){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);if(e)return e[1]}function te(t){if(z(t,"translate")||t==="perspective")return"px";if(z(t,"rotate")||z(t,"skew"))return"deg"}function Y(t,e){return f.fnc(t)?t(e.target,e.id,e.total):t}function C(t,e){return t.getAttribute(e)}function nt(t,e,n){var a=D(e);if(et([n,"deg","rad","turn"],a))return e;var r=N.CSS[e+n];if(!f.und(r))return r;var o=100,s=document.createElement(t.tagName),u=t.parentNode&&t.parentNode!==document?t.parentNode:document.body;u.appendChild(s),s.style.position="absolute",s.style.width=o+n;var i=o/s.offsetWidth;u.removeChild(s);var p=i*parseFloat(e);return N.CSS[e+n]=p,p}function Pt(t,e,n){if(e in t.style){var a=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=t.style[e]||getComputedStyle(t).getPropertyValue(a)||"0";return n?nt(t,r,n):r}}function at(t,e){if(f.dom(t)&&!f.inp(t)&&(!f.nil(C(t,e))||f.svg(t)&&t[e]))return"attribute";if(f.dom(t)&&et(Zt,e))return"transform";if(f.dom(t)&&e!=="transform"&&Pt(t,e))return"css";if(t[e]!=null)return"object"}function Ct(t){if(f.dom(t)){for(var e=t.style.transform||"",n=/(\w+)\(([^)]*)\)/g,a=new Map,r;r=n.exec(e);)a.set(r[1],r[2]);return a}}function ee(t,e,n,a){var r=z(e,"scale")?1:0+te(e),o=Ct(t).get(e)||r;return n&&(n.transforms.list.set(e,o),n.transforms.last=e),a?nt(t,o,a):o}function it(t,e,n,a){switch(at(t,e)){case"transform":return ee(t,e,a,n);case"css":return Pt(t,e,n);case"attribute":return C(t,e);default:return t[e]||0}}function ot(t,e){var n=/^(\*=|\+=|-=)/.exec(t);if(!n)return t;var a=D(t)||0,r=parseFloat(e),o=parseFloat(t.replace(n[0],""));switch(n[0][0]){case"+":return r+o+a;case"-":return r-o+a;case"*":return r*o+a}}function Dt(t,e){if(f.col(t))return Xt(t);if(/\s/g.test(t))return t;var n=D(t),a=n?t.substr(0,t.length-n.length):t;return e?a+e:a}function st(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function re(t){return Math.PI*2*C(t,"r")}function ne(t){return C(t,"width")*2+C(t,"height")*2}function ae(t){return st({x:C(t,"x1"),y:C(t,"y1")},{x:C(t,"x2"),y:C(t,"y2")})}function Et(t){for(var e=t.points,n=0,a,r=0;r<e.numberOfItems;r++){var o=e.getItem(r);r>0&&(n+=st(a,o)),a=o}return n}function ie(t){var e=t.points;return Et(t)+st(e.getItem(e.numberOfItems-1),e.getItem(0))}function Ot(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return re(t);case"rect":return ne(t);case"line":return ae(t);case"polyline":return Et(t);case"polygon":return ie(t)}}function oe(t){var e=Ot(t);return t.setAttribute("stroke-dasharray",e),e}function se(t){for(var e=t.parentNode;f.svg(e)&&f.svg(e.parentNode);)e=e.parentNode;return e}function St(t,e){var n=e||{},a=n.el||se(t),r=a.getBoundingClientRect(),o=C(a,"viewBox"),s=r.width,u=r.height,i=n.viewBox||(o?o.split(" "):[0,0,s,u]);return{el:a,viewBox:i,x:i[0]/1,y:i[1]/1,w:s,h:u,vW:i[2],vH:i[3]}}function ue(t,e){var n=f.str(t)?It(t)[0]:t,a=e||100;return function(r){return{property:r,el:n,svg:St(n),totalLength:Ot(n)*(a/100)}}}function ce(t,e,n){function a(c){c===void 0&&(c=0);var l=e+c>=1?e+c:0;return t.el.getPointAtLength(l)}var r=St(t.el,t.svg),o=a(),s=a(-1),u=a(1),i=n?1:r.w/r.vW,p=n?1:r.h/r.vH;switch(t.property){case"x":return(o.x-r.x)*i;case"y":return(o.y-r.y)*p;case"angle":return Math.atan2(u.y-s.y,u.x-s.x)*180/Math.PI}}function mt(t,e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,a=Dt(f.pth(t)?t.totalLength:t,e)+"";return{original:a,numbers:a.match(n)?a.match(n).map(Number):[0],strings:f.str(t)||e?a.split(n):[]}}function ut(t){var e=t?U(f.arr(t)?t.map(vt):vt(t)):[];return R(e,function(n,a,r){return r.indexOf(n)===a})}function $t(t){var e=ut(t);return e.map(function(n,a){return{target:n,id:a,total:e.length,transforms:{list:Ct(n)}}})}function le(t,e){var n=rt(e);if(/^spring/.test(n.easing)&&(n.duration=Lt(n.easing)),f.arr(t)){var a=t.length,r=a===2&&!f.obj(t[0]);r?t={value:t}:f.fnc(e.duration)||(n.duration=e.duration/a)}var o=f.arr(t)?t:[t];return o.map(function(s,u){var i=f.obj(s)&&!f.pth(s)?s:{value:s};return f.und(i.delay)&&(i.delay=u?0:e.delay),f.und(i.endDelay)&&(i.endDelay=u===o.length-1?e.endDelay:0),i}).map(function(s){return W(s,n)})}function fe(t){for(var e=R(U(t.map(function(o){return Object.keys(o)})),function(o){return f.key(o)}).reduce(function(o,s){return o.indexOf(s)<0&&o.push(s),o},[]),n={},a=function(o){var s=e[o];n[s]=t.map(function(u){var i={};for(var p in u)f.key(p)?p==s&&(i.value=u[p]):i[p]=u[p];return i})},r=0;r<e.length;r++)a(r);return n}function de(t,e){var n=[],a=e.keyframes;a&&(e=W(fe(a),e));for(var r in e)f.key(r)&&n.push({name:r,tweens:le(e[r],t)});return n}function ge(t,e){var n={};for(var a in t){var r=Y(t[a],e);f.arr(r)&&(r=r.map(function(o){return Y(o,e)}),r.length===1&&(r=r[0])),n[a]=r}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function ve(t,e){var n;return t.tweens.map(function(a){var r=ge(a,e),o=r.value,s=f.arr(o)?o[1]:o,u=D(s),i=it(e.target,t.name,u,e),p=n?n.to.original:i,c=f.arr(o)?o[0]:p,l=D(c)||D(i),d=u||l;return f.und(s)&&(s=p),r.from=mt(c,d),r.to=mt(ot(s,c),d),r.start=n?n.end:0,r.end=r.start+r.delay+r.duration+r.endDelay,r.easing=tt(r.easing,r.duration),r.isPath=f.pth(o),r.isPathTargetInsideSVG=r.isPath&&f.svg(e.target),r.isColor=f.col(r.from.original),r.isColor&&(r.round=1),n=r,r})}var At={css:function(t,e,n){return t.style[e]=n},attribute:function(t,e,n){return t.setAttribute(e,n)},object:function(t,e,n){return t[e]=n},transform:function(t,e,n,a,r){if(a.list.set(e,n),e===a.last||r){var o="";a.list.forEach(function(s,u){o+=u+"("+s+") "}),t.style.transform=o}}};function Ft(t,e){var n=$t(t);n.forEach(function(a){for(var r in e){var o=Y(e[r],a),s=a.target,u=D(o),i=it(s,r,u,a),p=u||D(i),c=ot(Dt(o,p),i),l=at(s,r);At[l](s,r,c,a.transforms,!0)}})}function me(t,e){var n=at(t.target,e.name);if(n){var a=ve(e,t),r=a[a.length-1];return{type:n,property:e.name,animatable:t,tweens:a,duration:r.end,delay:a[0].delay,endDelay:r.endDelay}}}function pe(t,e){return R(U(t.map(function(n){return e.map(function(a){return me(n,a)})})),function(n){return!f.und(n)})}function Bt(t,e){var n=t.length,a=function(o){return o.timelineOffset?o.timelineOffset:0},r={};return r.duration=n?Math.max.apply(Math,t.map(function(o){return a(o)+o.duration})):e.duration,r.delay=n?Math.min.apply(Math,t.map(function(o){return a(o)+o.delay})):e.delay,r.endDelay=n?r.duration-Math.max.apply(Math,t.map(function(o){return a(o)+o.duration-o.endDelay})):e.endDelay,r}var pt=0;function he(t){var e=K(Mt,t),n=K(X,t),a=de(n,t),r=$t(t.targets),o=pe(r,a),s=Bt(o,n),u=pt;return pt++,W(e,{id:u,children:[],animatables:r,animations:o,duration:s.duration,delay:s.delay,endDelay:s.endDelay})}var I=[],jt=function(){var t;function e(){!t&&(!ht()||!y.suspendWhenDocumentHidden)&&I.length>0&&(t=requestAnimationFrame(n))}function n(r){for(var o=I.length,s=0;s<o;){var u=I[s];u.paused?(I.splice(s,1),o--):(u.tick(r),s++)}t=s>0?requestAnimationFrame(n):void 0}function a(){y.suspendWhenDocumentHidden&&(ht()?t=cancelAnimationFrame(t):(I.forEach(function(r){return r._onDocumentVisibility()}),jt()))}return typeof document<"u"&&document.addEventListener("visibilitychange",a),e}();function ht(){return!!document&&document.hidden}function y(t){t===void 0&&(t={});var e=0,n=0,a=0,r,o=0,s=null;function u(m){var v=window.Promise&&new Promise(function(T){return s=T});return m.finished=v,v}var i=he(t);u(i);function p(){var m=i.direction;m!=="alternate"&&(i.direction=m!=="normal"?"normal":"reverse"),i.reversed=!i.reversed,r.forEach(function(v){return v.reversed=i.reversed})}function c(m){return i.reversed?i.duration-m:m}function l(){e=0,n=c(i.currentTime)*(1/y.speed)}function d(m,v){v&&v.seek(m-v.timelineOffset)}function w(m){if(i.reversePlayback)for(var T=o;T--;)d(m,r[T]);else for(var v=0;v<o;v++)d(m,r[v])}function h(m){for(var v=0,T=i.animations,E=T.length;v<E;){var b=T[v],O=b.animatable,F=b.tweens,S=F.length-1,M=F[S];S&&(M=R(F,function(Rt){return m<Rt.end})[0]||M);for(var $=P(m-M.start-M.delay,0,M.duration)/M.duration,H=isNaN($)?1:M.easing($),_=M.to.strings,q=M.round,Z=[],Nt=M.to.numbers.length,A=void 0,B=0;B<Nt;B++){var j=void 0,ct=M.to.numbers[B],lt=M.from.numbers[B]||0;M.isPath?j=ce(M.value,H*ct,M.isPathTargetInsideSVG):j=lt+H*(ct-lt),q&&(M.isColor&&B>2||(j=Math.round(j*q)/q)),Z.push(j)}var ft=_.length;if(!ft)A=Z[0];else{A=_[0];for(var V=0;V<ft;V++){_[V];var dt=_[V+1],Q=Z[V];isNaN(Q)||(dt?A+=Q+dt:A+=Q+" ")}}At[b.type](O.target,b.property,A,O.transforms),b.currentValue=A,v++}}function g(m){i[m]&&!i.passThrough&&i[m](i)}function x(){i.remaining&&i.remaining!==!0&&i.remaining--}function k(m){var v=i.duration,T=i.delay,E=v-i.endDelay,b=c(m);i.progress=P(b/v*100,0,100),i.reversePlayback=b<i.currentTime,r&&w(b),!i.began&&i.currentTime>0&&(i.began=!0,g("begin")),!i.loopBegan&&i.currentTime>0&&(i.loopBegan=!0,g("loopBegin")),b<=T&&i.currentTime!==0&&h(0),(b>=E&&i.currentTime!==v||!v)&&h(v),b>T&&b<E?(i.changeBegan||(i.changeBegan=!0,i.changeCompleted=!1,g("changeBegin")),g("change"),h(b)):i.changeBegan&&(i.changeCompleted=!0,i.changeBegan=!1,g("changeComplete")),i.currentTime=P(b,0,v),i.began&&g("update"),m>=v&&(n=0,x(),i.remaining?(e=a,g("loopComplete"),i.loopBegan=!1,i.direction==="alternate"&&p()):(i.paused=!0,i.completed||(i.completed=!0,g("loopComplete"),g("complete"),!i.passThrough&&"Promise"in window&&(s(),u(i)))))}return i.reset=function(){var m=i.direction;i.passThrough=!1,i.currentTime=0,i.progress=0,i.paused=!0,i.began=!1,i.loopBegan=!1,i.changeBegan=!1,i.completed=!1,i.changeCompleted=!1,i.reversePlayback=!1,i.reversed=m==="reverse",i.remaining=i.loop,r=i.children,o=r.length;for(var v=o;v--;)i.children[v].reset();(i.reversed&&i.loop!==!0||m==="alternate"&&i.loop===1)&&i.remaining++,h(i.reversed?i.duration:0)},i._onDocumentVisibility=l,i.set=function(m,v){return Ft(m,v),i},i.tick=function(m){a=m,e||(e=a),k((a+(n-e))*y.speed)},i.seek=function(m){k(c(m))},i.pause=function(){i.paused=!0,l()},i.play=function(){i.paused&&(i.completed&&i.reset(),i.paused=!1,I.push(i),l(),jt())},i.reverse=function(){p(),i.completed=!i.reversed,l()},i.restart=function(){i.reset(),i.play()},i.remove=function(m){var v=ut(m);Vt(v,i)},i.reset(),i.autoplay&&i.play(),i}function yt(t,e){for(var n=e.length;n--;)et(t,e[n].animatable.target)&&e.splice(n,1)}function Vt(t,e){var n=e.animations,a=e.children;yt(t,n);for(var r=a.length;r--;){var o=a[r],s=o.animations;yt(t,s),!s.length&&!o.children.length&&a.splice(r,1)}!n.length&&!a.length&&e.pause()}function ye(t){for(var e=ut(t),n=I.length;n--;){var a=I[n];Vt(e,a)}}function xe(t,e){e===void 0&&(e={});var n=e.direction||"normal",a=e.easing?tt(e.easing):null,r=e.grid,o=e.axis,s=e.from||0,u=s==="first",i=s==="center",p=s==="last",c=f.arr(t),l=parseFloat(c?t[0]:t),d=c?parseFloat(t[1]):0,w=D(c?t[1]:t)||0,h=e.start||0+(c?l:0),g=[],x=0;return function(k,m,v){if(u&&(s=0),i&&(s=(v-1)/2),p&&(s=v-1),!g.length){for(var T=0;T<v;T++){if(!r)g.push(Math.abs(s-T));else{var E=i?(r[0]-1)/2:s%r[0],b=i?(r[1]-1)/2:Math.floor(s/r[0]),O=T%r[0],F=Math.floor(T/r[0]),S=E-O,M=b-F,$=Math.sqrt(S*S+M*M);o==="x"&&($=-S),o==="y"&&($=-M),g.push($)}x=Math.max.apply(Math,g)}a&&(g=g.map(function(_){return a(_/x)*x})),n==="reverse"&&(g=g.map(function(_){return o?_<0?_*-1:-_:Math.abs(x-_)}))}var H=c?(d-l)/x:l;return h+H*(Math.round(g[m]*100)/100)+w}}function be(t){t===void 0&&(t={});var e=y(t);return e.duration=0,e.add=function(n,a){var r=I.indexOf(e),o=e.children;r>-1&&I.splice(r,1);function s(d){d.passThrough=!0}for(var u=0;u<o.length;u++)s(o[u]);var i=W(n,K(X,t));i.targets=i.targets||t.targets;var p=e.duration;i.autoplay=!1,i.direction=e.direction,i.timelineOffset=f.und(a)?p:ot(a,p),s(e),e.seek(i.timelineOffset);var c=y(i);s(c),o.push(c);var l=Bt(o,t);return e.delay=l.delay,e.endDelay=l.endDelay,e.duration=l.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}y.version="3.2.1";y.speed=1;y.suspendWhenDocumentHidden=!0;y.running=I;y.remove=ye;y.get=it;y.set=Ft;y.convertPx=nt;y.path=ue;y.setDashoffset=oe;y.stagger=xe;y.timeline=be;y.easing=tt;y.penner=_t;y.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t};const we=()=>{const t=L("#repos span"),e=L("#followers span"),n=L("#following span");y.timeline({easing:"easeInOutExpo"}).add({targets:"#user-container",opacity:[0,1],translateX:["25%",0]},"-=700").add({targets:"#user-container section",opacity:[0,1],width:[0,"100%"]},"-=700").add({targets:t,textContent:[0,t.value],round:1},"-=500").add({targets:e,textContent:[0,e.value],round:1,duration:2e3},"-=1000").add({targets:n,textContent:[0,n.value],round:1,duration:2e3},"-=2000")},ke="/assets/icon-location-5ecb9c86.svg",Me="/assets/icon-website-87500645.svg",Te="/assets/icon-twitter-9b75eedf.svg",Le="/assets/icon-company-239d6fee.svg",xt=L("#user-container"),bt=L("#search-btn"),wt=L("#search"),zt=async t=>{if(t.message){const w=`Search <p
      class="right-0  top-0 -translate-y-[calc(100%+14px)] sm:right-auto sm:-left-[calc(100%+24px)] sm:top-1/2 sm:-translate-y-1/2 absolute w-[103px] sm:w-auto  text-[#F74646] sm:bg-custom-super-light-gray sm:dark:bg-custom-very-dark-blue pr-[1px] pl-1 pointer-events-none"
    >
      No results
    </p>`;bt.innerHTML=w,window.matchMedia("(min-width: 640px)").macthes&&(wt.style.paddingRight="104px"),xt.innerHTML="";return}bt.innerHTML="Search";const{avatar_url:e,name:n,login:a,created_at:r,bio:o,public_repos:s,followers:u,following:i,location:p,blog:c,twitter_username:l,company:d}=t;wt.style.padding="0",xt.innerHTML=`
  
  <article
          class="bg-custom-super-light-gray pt-8 px-6 pb-12 sm:p-10 md:p-12 shadow-custom-result rounded-[15px] md:pl-[202px] md:relative dark:bg-custom-very-dark-blue dark:shadow-none "
        >
          <!-- avatar info -->
          <div class="flex items-center gap-[19px] sm:gap-10">
            <!-- avatar image -->
            <img
              class="h-[70px] w-[70px] sm:h-[117px] sm:w-[117px] rounded-full md:absolute md:left-12 md:top-12"
              src=${e}
              alt="avatar logo"
            />
            <!-- user info -->
            <div class="md:flex md:justify-between md:w-full md:-mt-[7.5px]">
              <div>
                <!-- name -->
                <h2
                  class="font-bold text-custom-darkest-one text-base sm:text-[26px] sm:leading-[39px] dark:text-custom-white"
                >
                  ${n}
                </h2>
                <!-- username -->
                <p
                  class="text-[13px] sm:text-base sm:mt-0.5 text-custom-blue"
                >
                  @${a}
                </p>
              </div>
              <!-- join date -->
              <span
                class="mt-[6px] sm:mt-1 text-custom-gray text-[13px] sm:text-[15px] sm:leading-[22px] md:m-0 dark:text-custom-white"
                >Joined ${qt(r)}
              </span>
            </div>
          </div>
          <!-- bio -->
          <p
            class="mt-[33px] leading-[25px] text-[13px] text-custom-blue-gray sm:text-[15px] md:mt-5 dark:text-custom-white"
          >
            ${o||'<span class="opacity-75">This profile has no bio</span>'}
          </p>
          <!-- stats -->
          <section
            id="stats"
            class=" mx-auto mt-[23px] sm:mt-8 bg-custom-very-light-gray rounded-[10px] py-[18px] px-[15px] sm:py-[15px] sm:px-8 md:pt-[15px] md:pb-[17px] grid grid-cols-3 sm:justify-items-start dark:bg-custom-allmost-black"
          >
            <!-- single stat -->
            <div
              id="repos"
              class="flex flex-col gap-2 sm:gap-0 md:gap-[1px] items-center sm:items-start "
            >
              <p
                class="text-[11px] sm:text-[13px] sm:leading-[19px] text-custom-blue-gray capitalize dark:text-custom-white"
              >
                repos
              </p>
              <span
                class="text-custom-dark-gray font-bold text-base sm:text-[22px] sm:leading-[33px] dark:text-custom-white"
                >${s}</span
              >
            </div>
            <!-- end of stat -->
            <!-- single stat -->
            <div
              id="followers"
              class="flex flex-col gap-2 sm:gap-0 items-center sm:items-start"
            >
              <p
                class="text-[11px] sm:text-[13px] sm:leading-[19px] text-custom-blue-gray capitalize dark:text-custom-white"
              >
                followers
              </p>
              <span
                class="text-custom-dark-gray font-bold text-base sm:text-[22px] sm:leading-[33px] dark:text-custom-white"
                >${u}</span
              >
            </div>
            <!-- end of stat -->
            <!-- single stat -->
            <div
              id="following"
              class="flex flex-col gap-2 sm:gap-0 items-center sm:items-start"
            >
              <p
                class="text-[11px] sm:text-[13px] sm:leading-[19px] text-custom-blue-gray capitalize dark:text-custom-white"
              >
                following
              </p>
              <span
                class="text-custom-dark-gray font-bold text-base sm:text-[22px] sm:leading-[33px] dark:text-custom-white"
                >${i}</span
              >
            </div>
            <!-- end of stat -->
          </section>

          <!-- addresses -->
          <footer
            class="mt-6 sm:mt-[30px] columns-1 sm:columns-2 space-y-[17px]"
          >
            <!-- location -->
            <div class="${p?"":"opacity-50"} relative pl-[33px]">
              <img
                class="absolute left-0 bottom-0 top-0 object-cover h-full dark:brightness-[100]"
                src=${ke}
                alt=""
              />
              <span class="text-custom-blue-gray dark:text-custom-white">${p||"Not Available"}</span>
            </div>
            <!-- github blog -->
            <div class="${c?"":"opacity-50"} relative pl-[33px]">
              <img
                class="absolute left-0 bottom-0 top-0 object-cover h-full dark:brightness-[100]"
                src=${Me}
                alt=""
              />
              <a href="${c||""}" class="text-custom-blue-gray dark:text-custom-white ${c?"hover:underline cursor-pointer":""}">${c||"Not Available"}</a>
            </div>
            <!-- twitter -->
            <div class="${l?"":"opacity-50"} relative pl-[33px]">
              <img
                class="absolute left-0 bottom-0 top-0 object-cover h-full dark:brightness-[100]"
                src=${Te}
                alt=""
              />
              <span class="text-custom-blue-gray dark:text-custom-white">${l||"Not Available"}</span>
            </div>
            <!-- github -->
            <div class="${d?"":"opacity-50"} relative pl-[33px]">
              <img
                class="absolute left-0 bottom-0 top-0 object-cover h-full dark:brightness-[100]"
                src=${Le}
                alt=""
              />
              <span class="text-custom-blue-gray dark:text-custom-white">${d||"Not Available"}</span>
            </div>
          </footer>
        </article>
  `,we()},kt=localStorage.getItem("theme"),_e=window.matchMedia("(prefers-color-scheme: dark)").matches;L("#light");L("#dark");const Ie=L("#theme-switch"),G=()=>{Ie.classList.toggle("dark-theme")},Pe=()=>{if(kt==="dark"||!kt&&_e){document.documentElement.classList.add("dark"),G();return}},Ht=()=>{if(document.documentElement.classList.contains("dark")){document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"),G();return}document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark"),G()},Ce=()=>{y.timeline({easing:"easeInOutExpo"}).add({targets:"nav",opacity:[0,1],translateY:["-100%",0]}).add({targets:"#search-form",opacity:[0,1],translateX:["-25%",0]},"-=500")},De="octocat",Ee=583231,Oe="MDQ6VXNlcjU4MzIzMQ==",Se="https://avatars.githubusercontent.com/u/583231?v=4",$e="",Ae="https://api.github.com/users/octocat",Fe="https://github.com/octocat",Be="https://api.github.com/users/octocat/followers",je="https://api.github.com/users/octocat/following{/other_user}",Ve="https://api.github.com/users/octocat/gists{/gist_id}",ze="https://api.github.com/users/octocat/starred{/owner}{/repo}",He="https://api.github.com/users/octocat/subscriptions",Ne="https://api.github.com/users/octocat/orgs",Re="https://api.github.com/users/octocat/repos",Ue="https://api.github.com/users/octocat/events{/privacy}",We="https://api.github.com/users/octocat/received_events",qe="User",Ze=!1,Qe="The Octocat",Je="@github",Ke="https://github.blog",Ye="San Francisco",Ge=null,Xe=null,tr=null,er=null,rr=8,nr=8,ar=10409,ir=9,or="2011-01-25T18:44:36Z",sr="2023-08-22T11:19:25Z",ur={login:De,id:Ee,node_id:Oe,avatar_url:Se,gravatar_id:$e,url:Ae,html_url:Fe,followers_url:Be,following_url:je,gists_url:Ve,starred_url:ze,subscriptions_url:He,organizations_url:Ne,repos_url:Re,events_url:Ue,received_events_url:We,type:qe,site_admin:Ze,name:Qe,company:Je,blog:Ke,location:Ye,email:Ge,hireable:Xe,bio:tr,twitter_username:er,public_repos:rr,public_gists:nr,followers:ar,following:ir,created_at:or,updated_at:sr},cr="https://api.github.com/users",lr=L("#search-form"),fr=L("#search"),dr=L("#light"),gr=L("#dark"),vr=async t=>{const e=await Ut(t);zt(e)};document.addEventListener("DOMContentLoaded",()=>{Pe(),zt(ur)});lr.addEventListener("submit",t=>{t.preventDefault();const e=fr.value,n=`${cr}/${e}`;vr(n)});gr.addEventListener("click",()=>{Ht()});dr.addEventListener("click",()=>{Ht()});Ce();
