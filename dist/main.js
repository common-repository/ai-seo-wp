(()=>{"use strict";var e={};({343:function(){var e=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(a,i){function r(e){try{l(o.next(e))}catch(e){i(e)}}function s(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}l((o=o.apply(e,t||[])).next())}))};const t=document.querySelectorAll(".toplevel_page_wpseoai_dashboard .card .toggle");null!==t&&t.forEach((e=>{e.addEventListener("click",(function(t){var n,o;const a="true"===e.getAttribute("aria-pressed");e.setAttribute("aria-pressed",a?"false":"true"),a?null===(n=e.nextElementSibling)||void 0===n||n.classList.remove("show"):null===(o=e.nextElementSibling)||void 0===o||o.classList.add("show")}))}));const n=document.querySelector("#wpseoai-request");if(null!==n){const t=document.createElement("p");t.innerText="Processing...",n.append(t),e(void 0,void 0,void 0,(function*(){var e,t,o;const a="undefined"==typeof AbortController?void 0:new AbortController,i=n.getAttribute("data-type"),r=n.getAttribute("data-post"),s=n.getAttribute("data-nonce-request"),l=n.getAttribute("data-nonce-audit"),c=`${window.location.origin}/wp-json/wpseoai/v1/${i}?post=${r}`,d=setTimeout((()=>{const e=document.createElement("p");e.innerHTML='This is taking longer than it should. You can <a href="">refresh the page</a>, or try again later. If this problem persists, please <a href="https://wpseo.ai/" target="_blank">contact us</a>',n.append(e),null==a||a.abort()}),6e3),u=yield fetch(c,{headers:{Accept:"application/json","Content-Type":"application/json","X-WP-Nonce":s},signal:null==a?void 0:a.signal}),p=yield u.json();clearTimeout(d);const v=null!==(e=null==p?void 0:p.code)&&void 0!==e?e:u.status,h=null!==(t=null==p?void 0:p.message)&&void 0!==t?t:u.statusText,f=null!==(o=null==p?void 0:p.auditId)&&void 0!==o?o:0,g=`${window.location.origin}/wp-admin/admin.php?page=wpseoai_dashboard`;if(u.status>200||200===u.status&&204===v){const e=document.createElement("p");e.innerText=`Error: "${h}" (code ${v})`,n.append(e);const t=document.createElement("a");t.href=g,t.innerText="Return to dashboard",n.append(t)}else{const e=document.createElement("p");e.innerText="Success, redirecting...",n.append(e),window.location.href=f?`${g}&action=audit&post_id=${f}&_wpnonce=${l}`:g}}))}}})[343]();var t=window;for(var n in e)t[n]=e[n];e.__esModule&&Object.defineProperty(t,"__esModule",{value:!0})})();
//# sourceMappingURL=main.js.map