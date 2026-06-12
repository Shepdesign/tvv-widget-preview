(()=>{var c={functionUrl:"https://abojrnazdmeqzvfxhciz.supabase.co/functions/v1/lead",defaults:{gross_up_rate:.25,dti_cap:.41,interest_rate:.065,term_years:30},disclaimer:"Estimates only \u2014 not a loan offer, approval, or guarantee. Figures are illustrative and depend on lender qualification. Not affiliated with the U.S. Department of Veterans Affairs or any government agency."};var _=`
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');

:host {
	--tvv-olive: #33321F;
	--tvv-olive-mid: #3D3C26;
	--tvv-olive-deep: #1D1C10;
	--tvv-sage-soft: #A9A98B;
	--tvv-sand: #EFD9A7;
	--tvv-bone: #F4EEE1;
	--tvv-gold: #E8A820;
	--tvv-gold-deep: #C08A1A;
	--tvv-gold-soft: #F2BA3F;
	--tvv-line: #D9D2BE;
	--tvv-ink-soft: #8C8A75;
	--tvv-text-soft: #5F5E4C;
	--tvv-danger: #A32D2D;
	--tvv-sans: 'Archivo', system-ui, sans-serif;
	--tvv-mono: 'IBM Plex Mono', ui-monospace, monospace;
}

.tvv {
	max-width: 27rem; margin: 0 auto; background: #fff;
	border: 1px solid var(--tvv-line); border-radius: 18px; overflow: hidden;
	font-family: var(--tvv-sans); color: var(--tvv-olive); line-height: 1.55;
	box-shadow: 0 10px 30px rgba(29,28,16,0.10);
}

/* \u2500\u2500 Olive header band + A1 app icon \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tvv__header {
	display: flex; align-items: center; gap: 15px; padding: 20px 24px;
	background: linear-gradient(155deg, #45432B 0%, var(--tvv-olive) 45%, var(--tvv-olive-deep) 100%);
}
.tvv__mark { flex: 0 0 auto; display: block; filter: drop-shadow(0 4px 10px rgba(0,0,0,0.35)); }
.tvv__brand { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
.tvv__wordmark { font-weight: 800; font-size: 1.35rem; letter-spacing: 0.035em; line-height: 1; color: var(--tvv-bone); }
.tvv__gold { color: var(--tvv-gold); }
.tvv__eyebrow { font-family: var(--tvv-mono); font-size: 0.62rem; letter-spacing: 0.24em; text-transform: uppercase; color: var(--tvv-sage-soft); }

/* \u2500\u2500 Form \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tvv__form { padding: 22px 24px 8px; }
.tvv__title { margin: 0 0 16px; font-size: 0.95rem; font-weight: 600; color: var(--tvv-text-soft); }
.tvv__field { margin: 0 0 14px; }
.tvv__label {
	display: block; margin: 0 0 7px;
	font-family: var(--tvv-mono); font-size: 0.66rem; font-weight: 400;
	letter-spacing: 0.14em; text-transform: uppercase; color: var(--tvv-ink-soft);
}
.tvv__inputwrap { position: relative; display: flex; align-items: center; }
.tvv__prefix {
	position: absolute; left: 15px; font-family: var(--tvv-mono); font-size: 1.05rem;
	color: var(--tvv-ink-soft); pointer-events: none;
}
/* Fatter, modern inputs \u2014 generous padding, soft warm fill, gold focus ring */
.tvv__input {
	width: 100%; box-sizing: border-box; padding: 0.95rem 1rem;
	font-family: var(--tvv-sans); font-size: 1.05rem; color: var(--tvv-olive);
	background: #FBFAF6; border: 1.5px solid var(--tvv-line); border-radius: 12px;
	transition: border-color 160ms ease, box-shadow 160ms ease, background 160ms ease;
}
.tvv__input[data-tvv-amount] { font-family: var(--tvv-mono); font-variant-numeric: tabular-nums; }
.tvv__inputwrap .tvv__input { padding-left: 2.1rem; }
.tvv__input::placeholder { color: var(--tvv-ink-soft); }
.tvv__input:focus {
	outline: none; background: #fff; border-color: var(--tvv-gold);
	box-shadow: 0 0 0 3px rgba(232,168,32,0.22);
}

/* \u2500\u2500 Live teaser strip \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tvv__teaser {
	margin: 6px 0 0; padding: 14px 24px;
	background: var(--tvv-bone); border-top: 1px solid var(--tvv-line); border-bottom: 1px solid var(--tvv-line);
}
.tvv__teaser-row { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; padding: 4px 0; }
.tvv__teaser-lbl { font-size: 0.8rem; color: var(--tvv-text-soft); }
.tvv__teaser-val { font-family: var(--tvv-mono); font-weight: 500; font-size: 1.05rem; color: var(--tvv-olive); font-variant-numeric: tabular-nums; }
.tvv__teaser-val--accent { color: var(--tvv-gold-deep); }

/* \u2500\u2500 Gate / reveal panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tvv__panel { padding: 18px 24px 4px; }
.tvv__gate-cta { margin: 0 0 14px; font-weight: 700; font-size: 1rem; color: var(--tvv-olive); }

.tvv__btn {
	width: 100%; margin-top: 16px; padding: 0.95rem 1rem;
	font-family: var(--tvv-sans); font-size: 1rem; font-weight: 600;
	color: var(--tvv-olive-deep); background: var(--tvv-gold);
	border: 0; border-radius: 12px; cursor: pointer; transition: background 160ms ease;
}
.tvv__btn:hover { background: var(--tvv-gold-soft); }
.tvv__btn:focus-visible { outline: 3px solid var(--tvv-gold); outline-offset: 2px; }

.tvv__reveal {
	margin-top: 6px; padding: 20px 22px; border-radius: 14px;
	background: linear-gradient(155deg, var(--tvv-olive-mid), var(--tvv-olive-deep));
}
.tvv__reveal-lbl { display: block; font-family: var(--tvv-mono); font-size: 0.62rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--tvv-sage-soft); }
.tvv__reveal-val { display: block; margin-top: 6px; font-family: var(--tvv-mono); font-weight: 500; font-size: 2.1rem; line-height: 1.1; color: var(--tvv-gold); font-variant-numeric: tabular-nums; }
.tvv__next { margin: 12px 0 0; font-size: 0.82rem; color: var(--tvv-sage-soft); }
.tvv__reveal--soft .tvv__result { margin: 0; font-size: 0.92rem; line-height: 1.5; color: var(--tvv-bone); }
.tvv__result { margin: 0; }

.tvv__error { margin: 12px 0 0; color: var(--tvv-danger); font-size: 0.85rem; }

/* \u2500\u2500 Compliance / disclaimer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tvv__disclaimer {
	margin: 0; padding: 18px 24px 22px;
	font-family: var(--tvv-mono); font-size: 0.7rem; line-height: 1.65; letter-spacing: 0.01em;
	color: var(--tvv-ink-soft);
}

.tvv__hp { position: absolute; left: -9999px; width: 1px; height: 1px; opacity: 0; pointer-events: none; }

/* \u2500\u2500 Popup mode \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tvv__launcher {
	position: fixed; right: 1.25rem; bottom: 1.25rem; z-index: 2147483646;
	padding: 0.85rem 1.5rem; font-family: var(--tvv-sans); font-size: 0.95rem; font-weight: 600;
	color: var(--tvv-olive-deep); background: var(--tvv-gold); border: 0; border-radius: 999px;
	box-shadow: 0 8px 24px rgba(29,28,16,0.30); cursor: pointer; transition: background 160ms ease;
}
.tvv__launcher:hover { background: var(--tvv-gold-soft); }
.tvv__modal { position: fixed; inset: 0; z-index: 2147483647; display: flex; align-items: center; justify-content: center; padding: 1rem; }
.tvv__modal[hidden] { display: none; }
.tvv__backdrop { position: absolute; inset: 0; background: rgba(29,28,16,0.62); }
.tvv__dialog { position: relative; z-index: 1; width: 100%; max-width: 27rem; max-height: 92vh; overflow: auto; }
.tvv__close {
	position: absolute; top: 0.6rem; right: 0.6rem; z-index: 2;
	width: 2rem; height: 2rem; font-size: 1.25rem; line-height: 1; color: var(--tvv-olive);
	background: var(--tvv-bone); border: 1px solid var(--tvv-line); border-radius: 999px; cursor: pointer;
}

@media (prefers-reduced-motion: reduce) {
	* { transition-duration: 0.01ms !important; }
}
`;function m(o){let t=typeof o=="number"?o:parseFloat(o);return!isFinite(t)||t<0?0:t}function g(o,t){let e=m(o.non_taxable_income),r=m(o.other_income),a=m(o.monthly_debts),n=e*(1+t.gross_up_rate),s=n+r,i=s*t.dti_cap-a,v=n-e,u=0;if(i>0){let f=t.interest_rate/12,h=t.term_years*12;u=f===0?i*h:i*(1-Math.pow(1+f,-h))/f}return{grossed_up:n,qualifying_income:s,max_housing_payment:Math.max(i,0),boost:v,buying_power:Math.round(u)}}function l(o){return"$"+Math.round(o).toLocaleString("en-US")}function p(o){return String(o).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var b=`<svg class="tvv__mark" width="58" height="58" viewBox="0 0 120 120" role="img" aria-label="True Vet Value">
<defs>
<linearGradient id="tvvSqG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6E7BF"/><stop offset="1" stop-color="#E4C98B"/></linearGradient>
<linearGradient id="tvvTagG" x1="0.15" y1="0" x2="0.75" y2="1"><stop offset="0" stop-color="#5A5939"/><stop offset="0.45" stop-color="#34331F"/><stop offset="1" stop-color="#1D1C10"/></linearGradient>
<linearGradient id="tvvEdgeG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#93916A"/><stop offset="0.5" stop-color="#4A4930"/><stop offset="1" stop-color="#0E0D07"/></linearGradient>
<linearGradient id="tvvGoldG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F8CD63"/><stop offset="1" stop-color="#CE9112"/></linearGradient>
<linearGradient id="tvvCreamG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFCF1"/><stop offset="1" stop-color="#DBD3BC"/></linearGradient>
<radialGradient id="tvvBeadG" cx="0.34" cy="0.3" r="0.95"><stop offset="0" stop-color="#F2F1EC"/><stop offset="0.3" stop-color="#C9C7BE"/><stop offset="0.65" stop-color="#8A887E"/><stop offset="1" stop-color="#54524A"/></radialGradient>
<radialGradient id="tvvShadG" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#000" stop-opacity="0.32"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
<clipPath id="tvvTagClip"><rect x="36" y="30" width="48" height="78" rx="13"/></clipPath>
<g id="tvvBeads6">
<g stroke="#45433B" stroke-width="0.4"><circle cx="38.5" cy="18" r="3.6" fill="url(#tvvBeadG)"/><circle cx="47" cy="15.8" r="3.6" fill="url(#tvvBeadG)"/><circle cx="55.5" cy="14.6" r="3.6" fill="url(#tvvBeadG)"/><circle cx="64" cy="14.6" r="3.6" fill="url(#tvvBeadG)"/><circle cx="72.5" cy="15.8" r="3.6" fill="url(#tvvBeadG)"/><circle cx="81" cy="18" r="3.6" fill="url(#tvvBeadG)"/></g>
<g fill="#FFFFFF" opacity="0.6"><circle cx="37.4" cy="16.8" r="0.8"/><circle cx="45.9" cy="14.6" r="0.8"/><circle cx="54.4" cy="13.4" r="0.8"/><circle cx="62.9" cy="13.4" r="0.8"/><circle cx="71.4" cy="14.6" r="0.8"/><circle cx="79.9" cy="16.8" r="0.8"/></g>
</g>
</defs>
<rect x="2" y="2" width="116" height="116" rx="27" fill="url(#tvvSqG)"/>
<rect x="3" y="3" width="114" height="114" rx="26" fill="none" stroke="#FBF1D6" stroke-width="1.5" opacity="0.6"/>
<rect x="2" y="2" width="116" height="116" rx="27" fill="none" stroke="#CDAF6E" stroke-width="1"/>
<ellipse cx="60" cy="111" rx="27" ry="4.5" fill="url(#tvvShadG)"/>
<rect x="36" y="30" width="48" height="78" rx="13" fill="url(#tvvTagG)"/>
<g clip-path="url(#tvvTagClip)"><rect x="2" y="46" width="130" height="13" fill="#FFF" opacity="0.12" transform="rotate(-35 60 60)"/><rect x="2" y="63" width="130" height="5" fill="#FFF" opacity="0.18" transform="rotate(-35 60 60)"/></g>
<rect x="36.6" y="30.6" width="46.8" height="76.8" rx="12.4" fill="none" stroke="url(#tvvEdgeG)" stroke-width="1.2"/>
<circle cx="60" cy="42" r="5" fill="#0F0E08"/><circle cx="60" cy="42" r="3" fill="#E9D2A0"/>
<path d="M56.7 39.8 A4.6 4.6 0 0 1 63.3 39.8" fill="none" stroke="#FFF" stroke-width="0.9" opacity="0.5"/>
<g transform="translate(36,42) scale(0.4)"><g fill="none" stroke="url(#tvvCreamG)" stroke-width="8" stroke-linecap="butt" stroke-linejoin="round"><path d="M24 38 L36 84 L48 38"/><path d="M72 38 L84 84 L96 38"/></g><path d="M16 32 Q60 14 104 32" fill="none" stroke="url(#tvvGoldG)" stroke-width="8"/><rect x="56" y="22" width="8" height="66" rx="2.5" fill="url(#tvvGoldG)"/></g>
<rect x="51" y="88" width="18" height="2.2" rx="1.1" fill="#56553A"/><rect x="51" y="93" width="18" height="2.2" rx="1.1" fill="#56553A"/>
<use href="#tvvBeads6"/>
</svg>`,w='<div class="tvv__header">'+b+'<div class="tvv__brand"><span class="tvv__wordmark">TRUE VET <span class="tvv__gold">VALUE</span></span><span class="tvv__eyebrow">Know your worth</span></div></div>',d=class{constructor(t,e){this.root=t,this.config=e,this.state="live",this.inputs={non_taxable_income:"4194.54",other_income:"1500",monthly_debts:"400"},this.snapshot=g(this.inputs,e.defaults),this.captured=!1,this.error=""}render(){this.root.innerHTML=this.template(),this.bind()}template(){return'<div class="tvv">'+w+this.formTemplate()+this.teaserTemplate()+`<div class="tvv__panel" data-tvv-panel>${this.panelTemplate()}</div><p class="tvv__disclaimer">${p(this.config.disclaimer)}</p></div>`}fieldTemplate(t,e,r){return`<div class="tvv__field"><label class="tvv__label" for="${t}">${p(e)}</label><div class="tvv__inputwrap"><span class="tvv__prefix">$</span><input class="tvv__input" id="${t}" type="number" min="0" step="1" inputmode="decimal" value="${p(r)}" data-tvv-amount></div></div>`}formTemplate(){return'<div class="tvv__form"><p class="tvv__title">Estimate your VA buying power</p>'+this.fieldTemplate("tvv-non-taxable","Non-taxable monthly income",this.inputs.non_taxable_income)+this.fieldTemplate("tvv-other","Other monthly income",this.inputs.other_income)+this.fieldTemplate("tvv-debts","Total monthly debt payments",this.inputs.monthly_debts)+"</div>"}teaserTemplate(){let t=this.snapshot;return`<div class="tvv__teaser"><div class="tvv__teaser-row"><span class="tvv__teaser-lbl">Grossed-up monthly income</span><span class="tvv__teaser-val" id="tvv-grossed">${l(t.grossed_up)}</span></div><div class="tvv__teaser-row"><span class="tvv__teaser-lbl">Monthly boost from grossing up</span><span class="tvv__teaser-val tvv__teaser-val--accent" id="tvv-boost">+${l(t.boost)}</span></div></div>`}panelTemplate(){return this.state==="revealed"?this.revealInner():this.gateInner()}gateInner(){return'<div class="tvv__gate"><p class="tvv__gate-cta">See the home price you may qualify for.</p><div class="tvv__field"><label class="tvv__label" for="tvv-name">Name</label><input class="tvv__input" id="tvv-name" type="text" autocomplete="name" value=""></div><div class="tvv__field"><label class="tvv__label" for="tvv-email">Email</label><input class="tvv__input" id="tvv-email" type="email" autocomplete="email" value=""></div><input class="tvv__hp" id="tvv-company" type="text" tabindex="-1" autocomplete="off" aria-hidden="true" value="">'+(this.error?`<p class="tvv__error">${p(this.error)}</p>`:"")+'<button type="button" class="tvv__btn" data-tvv-reveal>Reveal my buying power</button></div>'}revealInner(){let t=this.snapshot;return t.buying_power<=0?'<div class="tvv__reveal tvv__reveal--soft"><p class="tvv__result">Your current debts exceed the housing budget for this estimate. Lowering monthly debt can unlock buying power.</p></div>':`<div class="tvv__reveal"><span class="tvv__reveal-lbl">Estimated home price you may qualify for</span><strong class="tvv__reveal-val">${l(t.buying_power)}</strong><p class="tvv__next">A specialist can help you take the next step.</p></div>`}field(t){let e=this.root.querySelector("#"+t);return e?e.value:""}readInputs(){return{non_taxable_income:this.field("tvv-non-taxable"),other_income:this.field("tvv-other"),monthly_debts:this.field("tvv-debts")}}recalc(){this.inputs=this.readInputs(),this.snapshot=g(this.inputs,this.config.defaults);let t=this.root.querySelector("#tvv-grossed"),e=this.root.querySelector("#tvv-boost");if(t&&(t.textContent=l(this.snapshot.grossed_up)),e&&(e.textContent="+"+l(this.snapshot.boost)),this.state==="revealed"){let r=this.root.querySelector("[data-tvv-panel]");r&&(r.innerHTML=this.revealInner())}}onReveal(){let t=this.field("tvv-name"),e=this.field("tvv-email");if(!t||!e)return this.error="Please enter your name and email.",this.render(),Promise.resolve();let r=Object.assign({name:t,email:e,company:this.field("tvv-company"),source_url:typeof location!="undefined"?location.href:""},this.inputs,this.snapshot);return fetch(this.config.functionUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(a=>{if(!a.ok)throw new Error("request failed");return a.json()}).then(()=>{this.captured=!0,this.state="revealed",this.error="",this.render()}).catch(()=>{this.error="Something went wrong. Please try again.",this.render()})}bind(){this.root.querySelectorAll("[data-tvv-amount]").forEach(e=>{e.addEventListener("input",()=>this.recalc())});let t=this.root.querySelector("[data-tvv-reveal]");t&&t.addEventListener("click",()=>this.onReveal())}};function k(o){let t=o&&o.dataset||{},e=Object.assign({},c.defaults);return t.grossUpRate!==void 0&&(e.gross_up_rate=parseFloat(t.grossUpRate)),t.dtiCap!==void 0&&(e.dti_cap=parseFloat(t.dtiCap)),t.interestRate!==void 0&&(e.interest_rate=parseFloat(t.interestRate)),t.termYears!==void 0&&(e.term_years=parseInt(t.termYears,10)),{mode:t.tvvMode==="popup"?"popup":"inline",functionUrl:t.functionUrl||c.functionUrl,disclaimer:c.disclaimer,defaults:e}}function y(o){let t=document.createElement(o),e=t.attachShadow({mode:"open"}),r=document.createElement("style");r.textContent=_,e.appendChild(r);let a=document.createElement("div");return e.appendChild(a),{host:t,shadow:e,root:a}}function x(o,t){let{host:e,root:r}=y("div");return e.className="tvv-host",o.tagName==="SCRIPT"?o.parentNode.insertBefore(e,o.nextSibling):o.appendChild(e),new d(r,t).render(),e}function F(o){let{host:t,root:e}=y("div");t.className="tvv-host tvv-host--popup",document.body.appendChild(t),e.innerHTML='<button type="button" class="tvv__launcher" data-tvv-open>Estimate your VA buying power</button><div class="tvv__modal" data-tvv-modal hidden><div class="tvv__backdrop" data-tvv-close></div><div class="tvv__dialog"><button type="button" class="tvv__close" data-tvv-close aria-label="Close">&times;</button><div data-tvv-widget-root></div></div></div>';let r=e.querySelector("[data-tvv-modal]"),a=e.querySelector("[data-tvv-widget-root]"),n=null;function s(){n||(n=new d(a,o),n.render()),r.hidden=!1}function i(){r.hidden=!0}return e.querySelector("[data-tvv-open]").addEventListener("click",s),e.querySelectorAll("[data-tvv-close]").forEach(v=>v.addEventListener("click",i)),document.addEventListener("keydown",v=>{v.key==="Escape"&&i()}),{host:t,open:s,close:i}}function G(o){let t=k(o),e=document.querySelector("[data-tvv-mount]");t.mode==="popup"?F(t):e?x(e,t):o&&x(o,t)}typeof document!="undefined"&&document.currentScript&&G(document.currentScript);})();
