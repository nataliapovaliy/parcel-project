!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,y=Math.min,b=function(){return s.Date.now()};function g(e,t,n){var r,i,a,u,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function g(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function h(e){return c=e,f=setTimeout(w,t),d?g(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function w(){var e=b();if(j(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-l);return s?y(n,a-(e-c)):n}(e))}function O(e){return f=void 0,v&&r?g(e):(r=i=void 0,u)}function T(){var e=b(),n=j(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return h(l);if(s)return f=setTimeout(w,t),g(l)}return void 0===f&&(f=setTimeout(w,t)),u}return t=S(t)||0,p(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?u:O(b())},T}function p(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(p(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=p(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};var h=document.querySelector(".feedback-form"),j=document.querySelector('[name="email"]'),w=document.querySelector('[name="message"]');h.addEventListener("input",e(t)((function(e){var t={email:j.value,mess:w.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),h.addEventListener("submit",(function(e){e.currentTarget.reset(),console.log(localStorage.getItem("feedback-form-state")),localStorage.removeItem("feedback-form-state")})),function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e),n=!0,r=!1,o=void 0;try{for(var i,a=h.children[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){i.value;j.value=t.email,w.value=t.mess}}catch(e){r=!0,o=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}}}()}();
//# sourceMappingURL=03-feedback.5aae2a3e.js.map