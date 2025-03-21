/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let r=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new r(s,t,i)},n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:a,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,p=globalThis,v=p.trustedTypes,g=v?v.emptyScript:"",m=p.reactiveElementPolyfillSupport,b=(t,e)=>t,f={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!a(t,e),x={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const o=s?.call(this);r.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of s){const s=document.createElement("style"),r=t.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:f).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:f;this._$Em=s,this[s]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??y)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[b("elementProperties")]=new Map,w[b("finalized")]=new Map,m?.({ReactiveElement:w}),(p.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,_=$.trustedTypes,S=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+E,A=`<${C}>`,M=document,j=()=>M.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,T="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,P=/>/g,q=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,H=/"/g,V=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),L=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),B=new WeakMap,W=M.createTreeWalker(M,129);function Z(t,e){if(!O(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=U;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,h=0;for(;h<i.length&&(n.lastIndex=h,c=n.exec(i),null!==c);)h=n.lastIndex,n===U?"!--"===c[1]?n=N:void 0!==c[1]?n=P:void 0!==c[2]?(V.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=q):void 0!==c[3]&&(n=q):n===q?">"===c[0]?(n=r??U,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,a=c[1],n=void 0===c[3]?q:'"'===c[3]?H:R):n===H||n===R?n=q:n===N||n===P?n=U:(n=q,r=void 0);const d=n===q&&t[e+1].startsWith("/>")?" ":"";o+=n===U?i+A:l>=0?(s.push(a),i.slice(0,l)+k+i.slice(l)+E+d):i+E+(-2===l?e:d)}return[Z(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[c,l]=J(t,e);if(this.el=K.createElement(c,i),W.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=W.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(k)){const e=l[o++],i=s.getAttribute(t).split(E),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?Y:"?"===n[1]?tt:"@"===n[1]?et:X}),s.removeAttribute(t)}else t.startsWith(E)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(V.test(s.tagName)){const t=s.textContent.split(E),e=t.length-1;if(e>0){s.textContent=_?_.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],j()),W.nextNode(),a.push({type:2,index:++r});s.append(t[e],j())}}}else if(8===s.nodeType)if(s.data===C)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(E,t+1));)a.push({type:7,index:r}),t+=E.length-1}r++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function F(t,e,i=t,s){if(e===L)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const o=z(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=F(t,r._$AS(t,e.values),r,s)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??M).importNode(e,!0);W.currentNode=s;let r=W.nextNode(),o=0,n=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Q(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new it(r,this,t)),this._$AV.push(e),a=i[++n]}o!==a?.index&&(r=W.nextNode(),o++)}return W.currentNode=M,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=F(this,t,e),z(t)?t===D||null==t||""===t?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>O(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==D&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new G(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new K(t)),e}k(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new Q(this.O(j()),this.O(j()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=D}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=F(this,t,e,0),o=!z(t)||t!==this._$AH&&t!==L,o&&(this._$AH=t);else{const s=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=F(this,s[i+n],e,n),a===L&&(a=this._$AH[n]),o||=!z(a)||a!==this._$AH[n],a===D?t=D:t!==D&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!s&&this.j(t)}j(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Y extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===D?void 0:t}}class tt extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==D)}}class et extends X{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=F(this,t,e,0)??D)===L)return;const i=this._$AH,s=t===D&&i!==D||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==D&&(i===D||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}}const st=$.litHtmlPolyfillSupport;st?.(K,Q),($.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class rt extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new Q(e.insertBefore(j(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}}rt._$litElement$=!0,rt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:rt});const ot=globalThis.litElementPolyfillSupport;ot?.({LitElement:rt}),(globalThis.litElementVersions??=[]).push("4.1.1");const nt=o`
		:host{
			--evse-active-color: var(--success-color);
			--evse-disabled-color: #116A88;
			--evse-auto-color: #32B3D4;
			--evse-slider-color: var(--accent-color, #2196f3);
			--evse-shadow: var(--ha-card-box-shadow, 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px - 2px rgba(0,0,0,0.2));
			--evse-border-radius: var(--ha-card-border-radius, 10px);
			--evse-selector-bg-color: var(--primary-background-color);
		.card-header {
			padding: 8px 16px 0;
			font-size: var(--ha-card-header-font-size, 24px);
			font-weight: var(--ha-card-header-font-weight, 400);
			line-height: 1.2;
		}
		.card-content {
			padding: 16px;
			transition: all 0.3s ease-out;
		}
		.evse-states {
			display: flex;
			justify-content: space-between;
			width: 100%;
			background: transparent;
			padding-bottom: 20px;
			border-radius: 16px;
		}
		.status-icons {
			border-radius: 8px;
			display: flex;
			flex-direction: row;
		}
		.status-icon {
			background: transparent;
			padding: 8px 4px;
			border-radius: 16px;
		}
		.status-heading {
			padding: 8px 8px 0;
			font-size: var(--ha-card-header-font-size, 18px);
			font-weight: var(--ha-card-header-font-weight, 400);
			line-height: 1;
		}
		.status-container {
			display: flex;
			align-items: center;
		}
		.status-badge {
			font-size: 14px;
			border-radius: 4px;
			background-color: white;
			padding: 6px;
			padding-bottom: 4px;
			text-transform: uppercase;
		}
		.badge-charging {
			background-color: yellow;
			color: black;
		}
		.badge-connected {
			background-color: var(--info-color);
			color: white;
		}
		.badge-disabled {
			background-color: var(--evse-disabled-color);
			color: white;
		}
		.badge-active {
			background-color: var(--evse-active-color);
			color: white;
		};
		.error {
			background-color: var(--error-color);
			color: white;
		}
		.active {
			color: var(--evse-active-color);
		}
		.charging {
			color: yellow;
		}
		.disabled {
			color: var(--evse-disabled-color);
		}
		
		.override-controls {
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.override-row {
			width: auto;
			display: flex;
			justify-content: space-between;
			margin-bottom: 20px;
			margin-top: 14px;
			align-items: center;
		}
		.override-button {
			flex: 1;
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			background-color: var(--card-background-color);
			padding: 8px;
			cursor: pointer;
			transition: all 0.2s;
			color: var (--primary-text-color);
			font-size: 2em;
			width: 50px;
			height: 25px;
			border: 1px solid var(--divider-color);
		}
		.override-button[data-option="active"] {
			border-radius: 10px 0 0 10px;
			color: var(--evse-active-color);
		}
		.override-button[data-option="auto"] {
			border-radius: 0;
			border-left: 0;
			border-right: 0;
			color: var(--evse-auto-color);
		}
		.override-button[data-option="disabled"] {
			border-radius: 0 10px 10px 0;
			color: var(--evse-disabled-color);
		}
		.override-button:hover[data-option="active"] {
			background: var(--evse-active-color);
			color: var(--text-primary-color);
		}
		.override-button:hover[data-option="auto"] {
			background: var(--evse-auto-color);
			color: var(--text-primary-color);
		}
		.override-button:hover[data-option="disabled"] {
			background: var(--evse-disabled-color);
			color: var(--text-primary-color);
		}
		.override-button.active[data-option="active"] {
			background: var(--evse-active-color);
			color: var(--text-primary-color);
		}
		.override-button.active[data-option="auto"] {
			background: var(--evse-auto-color);
			color: var(--text-primary-color);
		}
		.override-button.active[data-option="disabled"] {
			background: var(--evse-disabled-color);
			color: var(--text-primary-color);
		}
		.override-button.active.charging {
			color: yellow;
		}
		.override-button ha-icon {
			margin-bottom: 4px;
			--mdc-icon-size: 35px;
		}
		.entity-row {
			display: flex;
			justify-content: space-between;
			margin-bottom: 8px;
			color: var(--primary-text-color);
			align-items: center;
		}
		.entity-title {
			display: flex;
			justify-content: space-between;
			align-items: center;

		}
		.entity-label {
			display: flex;
			justify-content: right;

		}
		.entity-value {
			text-align: right;
		}
		.entity-icon {
			width: 40px;
			color: var(--state-icon-color);
			display: flex;
			justify-content: left;
		}
		.clickable {
			cursor: pointer;
			text-decoration: none;
		}
		/* Mushroom-like slider styles */
		.slider-container {
			border-radius: 10px;
			padding: 8px;
			padding-bottom: 15px;
			padding-top: 15px;
			margin-bottom: 20px;
			background: var(--card-background-color);
			border: 1px solid var(--divider-color);
		}
		.slider-row {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 8px;
		}
		.slider-label {
			display: flex;
			justify-content: center;
			color: var(--primary-text-color);
			font-weight: bold;
			text-transform: capitalize;
		}
		.slider-wrapper {
			position: relative;
			height: 22px;
			width: 70%;
			border-radius: 6px;
			display: flex;
			align-items: center;
			background: var(--divider-color, white);
			box-shadow: var(--control-button-background);
		}
		.slider-knob {
			position: absolute;
			height: 32px;
			width: 32px;
			border-radius: 50%;
			background: transparent;
			z-index: 1;
			cursor: pointer;
		}
		.slider-track {
			position: absolute;
			height: 100%;
			border-radius: 6px;
			background: var(--primary-color);
			opacity: 1;
		}
		.slider-badge {
			display: flex;
			justify-content: center;
			margin-left: 8px;
			color: var(--primary-color);
			font-size: 1.2rem;
			padding: 4px 8px;
			border-radius: 4px;
			margin-left: 8px;
			font-weight: bold;
		}
		.grid-container {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
		.grid-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-bottom: 10px;
			background-color: var(--divider-color);
			border-radius: 10px;
			padding: 4px;
			margin: 8px;
		}
		.grid-item-label {
			font-size: 1rem;
			color: var(--primary-text-color);
			margin-bottom: 3px;
			font-weight: bold;
			text-transform: capitalize;	
		}
		.grid-item-value {
			font-size: 1.5rem;
			font-weight: 500;
			color: var(--primary-color);
		}
		.other-entities-container {
			width: 100%;
		}
		
	`;let at={en:{disabled:"disabled",sleeping:"disabled",active:"active",charging:"charging","not connected":"waiting",error:"error",power:"power",current:"current",session:"session",elapsed:"elapsed","charge rate":"charge rate"},fr:{disabled:"désactivé",sleeping:"désactivé",active:"activé",charging:"en charge","not connected":"en attente",error:"erreur",power:"puissance",current:"courant",session:"session",elapsed:"écoulé","charge rate":"ampérage"},de:{disabled:"deaktiviert",sleeping:"deaktiviert",active:"aktiv",charging:"lädt","not connected":"bereit",error:"fehler",power:"leistung",current:"stromstärke",session:"sitzung",elapsed:"verstrichene zeit","charge rate":"laderate"},es:{disabled:"desactivado",sleeping:"desactivado",active:"activo",charging:"cargando","not connected":"en espera",error:"error",power:"potencia",current:"corriente",session:"sesión",elapsed:"tiempo transcurrido","charge rate":"amperaje"}};var ct=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function lt(t,e){if(t.length!==e.length)return!1;for(var i=0;i<t.length;i++)if(s=t[i],r=e[i],!(s===r||ct(s)&&ct(r)))return!1;var s,r;return!0}function ht(t,e){void 0===e&&(e=lt);var i=null;function s(){for(var s=[],r=0;r<arguments.length;r++)s[r]=arguments[r];if(i&&i.lastThis===this&&e(s,i.lastArgs))return i.lastResult;var o=t.apply(this,s);return i={lastResult:o,lastArgs:s,lastThis:this},o}return s.clear=function(){i=null},s}const dt=ht((()=>[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}},required:!1,label:"Header Title"},{name:"header",selector:{boolean:{}},label:"Display header"}]},{name:"override_entity",selector:{entity:{domain:["input_select","select"]}},label:"Override State",helper_text:"Select openevse.override_state entity",required:!0},{name:"status_entity",selector:{entity:{domain:["sensor"]}},label:"Station Status",helper_text:"Select openevse.station_status entity",required:!0},{name:"power_entity",selector:{entity:{domain:["sensor"]}},label:"Current power usage",helper_text:"Select openevse.current_power_usage entity",required:!0},{name:"current_entity",selector:{entity:{domain:["sensor"]}},label:"Charging current",helper_text:"Select openevse.charging_current entity",required:!0},{name:"vehicle_connected_entity",selector:{entity:{domain:["binary_sensor"]}},label:"Vehicle Connected",helper_text:"Select openevse.vehicle_connected entity",required:!0},{name:"charging_status_entity",selector:{entity:{domain:["sensor"]}},label:"Charging status",helper_text:"Select openevse.charging_status entity",required:!0},{name:"charge_rate_entity",selector:{entity:{domain:["number"]}},label:"Charge Rate",helper_text:"Select openevse.charge_rate entity",required:!0},{name:"session_energy_entity",selector:{entity:{domain:["sensor"]}},label:"Session Energy",helper_text:"Select openevse.session_energy entity",required:!0},{name:"time_elapsed_entity",selector:{entity:{domain:["sensor"]}},label:"Time Elapsed Seconds",helper_text:"Select openevse.time_elapsed_seconds entity",required:!0}])),ut=ht((()=>[{name:"id",selector:{entity:{domain:["sensor, binary_sensor"]}},label:"Entity"},{name:"name",selector:{text:{}},label:"Name"},{name:"icon",selector:{icon:{}},label:"Icon"}]));customElements.define("openevse-card",class extends rt{static get properties(){return{hass:{type:Object},config:{type:Object},_sliderValue:{type:Number},_dragging:{type:Boolean},_lang:{type:String}}}constructor(){super(),this._sliderValue=void 0,this._dragging=!1,this._translations=at}firstUpdated(){this._lang=this.hass?.language||"en"}updated(t){t.has("hass")&&this.hass&&(this._lang=this.hass.language||"en")}static getConfigElement(){return document.createElement("openevse-card-editor")}static getStubConfig(){return{header:!0,name:"Custom Card",override_entity:"",status_entity:"",power_entity:"",current_entity:"",charge_rate_entity:"",vehicleConnectedEntity:"",charging_status_entity:"",session_energy_entity:"",time_elapsed_entity:"",optional_entities:[]}}static get styles(){return nt}setConfig(t){this.config=t}getCardSize(){return 3}_callService(t,e){this.hass.callService("select","select_option",{entity_id:t,option:e.toString()})}_showMoreInfo(t){const e=new Event("hass-more-info",{bubbles:!0,composed:!0});e.detail={entityId:t},this.dispatchEvent(e)}_handleSliderStart(t){this.hass.states[this.config.charge_rate_entity]&&(this._dragging=!0,this._updateSliderValue(t),this.addEventListener("mousemove",this._handleSliderMove),this.addEventListener("touchmove",this._handleSliderMove),this.addEventListener("mouseup",this._handleSliderEnd),this.addEventListener("mouseout",this._handleSliderEnd),this.addEventListener("touchend",this._handleSliderEnd))}_handleSliderMove=t=>{this._dragging&&this._updateSliderValue(t)};_handleSliderEnd=t=>{this._dragging&&(this.removeEventListener("mousemove",this._handleSliderMove),this.removeEventListener("touchmove",this._handleSliderMove),this.removeEventListener("mouseup",this._handleSliderEnd),this.removeEventListener("mouseout",this._handleSliderEnd),this.removeEventListener("touchend",this._handleSliderEnd),this.hass.callService("number","set_value",{entity_id:this.config.charge_rate_entity,value:this._sliderValue}),setTimeout((()=>this._dragging=!1),2e3))};_updateSliderValue(t){const e=this.hass.states[this.config.charge_rate_entity];if(!e)return;const i=this.shadowRoot.querySelector(".slider-wrapper").getBoundingClientRect(),s=e.attributes.min||6,r=e.attributes.max||32,o=e.attributes.step||1;let n;n=t.type.startsWith("touch")?t.touches[0].clientX:t.clientX;let a=(n-i.left)/i.width;a=Math.min(Math.max(a,0),1);let c=s+a*(r-s);c=Math.round(c/o)*o,c=Math.min(Math.max(c,s),r),this._sliderValue=Number(c.toFixed(2)),this.requestUpdate()}_convertSeconds=t=>("0"+Math.floor(t/3600)).slice(-2)+":"+("0"+Math.floor(t%3600/60)).slice(-2)+":"+("0"+t%60).slice(-2);_t(t){const e=this._lang||"en";return this._translations[e]?.[t]||this._translations.en?.[t]||t}render(){if(!this.hass||!this.config)return I``;const t=this.config.override_entity?this.hass.states[this.config.override_entity]:null,e=this.config.status_entity?this.hass.states[this.config.status_entity]:null,i=this.config.power_entity?this.hass.states[this.config.power_entity]:null,s=this.config.current_entity?this.hass.states[this.config.current_entity]:null,r=this.config.charge_rate_entity?this.hass.states[this.config.charge_rate_entity]:null,o=this.config.vehicle_connected_entity?this.hass.states[this.config.vehicle_connected_entity]:null,n=this.config.charging_status_entity?this.hass.states[this.config.charging_status_entity]:null,a=this.config.session_energy_entity?this.hass.states[this.config.session_energy_entity]:null,c=this.config.time_elapsed_entity?this.hass.states[this.config.time_elapsed_entity]:null,l=(()=>this.config.optional_entities?.map((t=>({name:t.name?t.name:this.hass.states[t.id]?.attributes.friendly_name,value:t.id?this.hass.formatEntityState(this.hass.states[t.id]):null,icon:t.icon,id:t.id?t.id:null})))??[])(),h=r.attributes.min||0,d=r.attributes.max||100,u=this._dragging?this._sliderValue:Number(r.state),p=(u-h)/(d-h)*100;return I`
            <ha-card>
            ${this.config.header?I`<h1 class="card-header">
                  ${this.config.name||"OpenEVSE"}
                  </h1>`:""}
            <div class="card-content">
                <div class="evse-states">
                <div class="status-icons">
                    <div
                    class="status-icon clickable"
                    @click=${()=>this._showMoreInfo(this.config.status_entity)}
                    >
                    <ha-icon
                        icon="${"active"==e.state?"mdi:lightning-bolt":"mdi:cancel"}"
                        class="${"active"==e.state?"charging"==n.state?"charging":"active":"disabled"}"
                    ></ha-icon>
                    </div>
                    <div
                    class="status-icon clickable"
                    @click=${()=>this._showMoreInfo(this.config.vehicle_connected_entity)}
                    >
                    <ha-icon
                        icon="${"off"==o.state?"mdi:car-off":"mdi:car"}"
                        class="${"off"==o.state?"disabled":"active"}"
                    ></ha-icon>
                    </div>
                </div>
                <div class="status-heading">
                    <div
                    class="status-badge ${"error"==n.state?"badge-error":"disabled"==e.state?"badge-disabled":"charging"==n.state?"badge-charging":"badge-active"}"
                    >
                     ${this._t(n.state)}
                    </div>
                </div>
                </div>
                <div class="grid-container">
                ${i?I`
                      <div class="grid-item">
                          <div class="grid-item-label"> ${this._t("power")}</div>
                          <div
                          class="grid-item-value current-value clickable"
                          @click=${()=>this._showMoreInfo(this.config.power_entity)}
                          >
                          ${this.hass.formatEntityState(i)}
                          </div>
                      </div>
                      `:""}
                ${s?I`
                      <div class="grid-item">
                          <div class="grid-item-label">${this._t("current")}</div>
                          <div
                          class="grid-item-value current-value clickable"
                          @click=${()=>this._showMoreInfo(this.config.current_entity)}
                          >
                          ${this.hass.formatEntityState(s)}
                          </div>
                      </div>
                      `:""}
                ${a?I`
                      <div class="grid-item">
                          <div class="grid-item-label">${this._t("session")}</div>
                          <div
                          class="grid-item-value current-value clickable"
                          @click=${()=>this._showMoreInfo(this.config.session_energy_entity)}
                          >
                          ${this.hass.formatEntityState(a)}
                          </div>
                      </div>
                      `:""}
                ${c?I`
                      <div class="grid-item">
                          <div class="grid-item-label">${this._t("elapsed")}</div>
                          <div
                          class="grid-item-value current-value"
                          >
                          ${this._convertSeconds(c.state)}
                          </div>
                      </div>
                      `:""}
                </div>
                <div class="override-controls">
                <div class="override-row">
                    <div
                    class="override-button ${"active"==t.state?"active":""}"
                    data-option="active"
                    @click=${()=>this._callService(this.config.override_entity,"active")}
                    >
                    <ha-icon
                        icon="mdi:lightning-bolt"
                        class="${"active"==t.state&&"charging"==n.state?"charging":""}"
                    ></ha-icon>
                    </div>
                    <div
                    class="override-button ${"auto"==t.state?"active":""}"
                    data-option="auto"
                    @click=${()=>this._callService(this.config.override_entity,"auto")}
                    >
                    <ha-icon
                        icon="mdi:robot"
                        class="${"auto"==t.state&&"charging"==n.state?"charging":""}"
                    ></ha-icon>
                    </div>
                    <div
                    class="override-button ${"disabled"==t.state?"active":""}"
                    data-option="disabled"
                    @click=${()=>this._callService(this.config.override_entity,"disabled")}
                    >
                    <ha-icon icon="mdi:cancel"></ha-icon>
                    </div>
                </div>
                </div>
                

                <div class="slider-container">
                <div class="slider-label">${this._t("charge rate")}</div>
                <div class="slider-badge">
                    ${v=u,(r.attributes.step||1)<1?v.toFixed(1):v.toFixed(0)}
                    ${r.attributes.unit_of_measurement||""}
                </div>
                <div class="slider-row">
                    <div
                    class="slider-wrapper"
                    @mousedown=${this._handleSliderStart}
                    @touchstart=${this._handleSliderStart}
                    >
                    <div
                        class="slider-track clickable"
                        style="width: ${p}%"
                    ></div>
                    <div
                        class="slider-knob"
                        style="left: calc(${p}% - 16px)"
                    ></div>
                    </div>
                </div>
                </div>
                ${l?.map((t=>I`
                    <div class="other-entities-container">
                    <div class="entity-row">
                        <div class="entity-title">
                        ${null!=t.icon?I`
                              <div class="entity-icon">
                                  <ha-icon
                                  icon=${t.icon}
                                  ></ha-icon>
                              </div>
                              `:I`
                              <div
                                  class="entity-icon"
                              ></div>
                              `}

                        <div class="entity-label">
                            ${t.name?t.name:t.id?t.id:""}
                        </div>
                        </div>
                        <div
                        class="entity-value clickable"
                        @click=${()=>this._showMoreInfo(t.id?t.id:"")}
                        >
                        ${t.value?t.value:""}
                        </div>
                    </div>
                    </div>
                `))}
            </div>
            </ha-card>
        `;var v}}),customElements.define("openevse-card-editor",class extends rt{static get properties(){return{hass:{type:Object},config:{type:Object}}}static get styles(){return o`
            .form-container {
                display: flex;
                flex-direction: column;
            }
            .entities {
                margin-top: 16px;
            }
            .entity-row {
                padding: 8px;
                margin-bottom: 8px;
                border: 1px solid var(--divider-color);
                border-radius: 4px;
            }
            .entity-actions {
                display: flex;
                justify-content: flex-end;
                margin-top: 8px;
            }
            .add-entity {
                margin-top: 16px;
            }
        `}constructor(){super(),this.config={},this.optionalEntities=[]}async firstUpdated(){try{await(async()=>{if(customElements.get("ha-form")&&customElements.get("ha-selector")&&customElements.get("ha-textfield")&&customElements.get("ha-icon-picker")&&customElements.get("ha-icon-button")&&customElements.get("ha-entity-picker"))return;await customElements.whenDefined("partial-panel-resolver");const t=document.createElement("partial-panel-resolver");t.hass={panels:[{url_path:"tmp",component_name:"config"}]},t._updateRoutes(),await t.routerOptions.routes.tmp.load(),await customElements.whenDefined("ha-panel-config");const e=document.createElement("ha-panel-config");await e.routerOptions.routes.automation.load()})()}catch(t){console.error("Error loading ha-form:",t)}}setConfig(t){this.config=t,this.optionalEntities=t.optional_entities||[]}_dispatchConfigChanged(t){const e={...t,optional_entities:this.optionalEntities};this._fireConfigChanged(e)}_fireConfigChanged(t){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t}}))}_addOptionalEntity(t){const e=t.target.value;e&&!this.optionalEntities.some((t=>t.id===e))&&(this.optionalEntities=[...this.optionalEntities,{id:e,name:null,icon:null}],this._fireConfigChanged({...this.config,optional_entities:this.optionalEntities}))}_removeEntity(t){this.optionalEntities=this.optionalEntities.filter(((e,i)=>i!==t)),this._fireConfigChanged({...this.config,optional_entities:this.optionalEntities})}_updateOptionalEntity(t,e){this.optionalEntities=this.optionalEntities?.map(((i,s)=>s===t?{...i,...e}:i)),this._fireConfigChanged({...this.config,optional_entities:this.optionalEntities})}render(){if(!this.hass)return I``;const t=dt(),e=ut();return I`
            <div class="form-container">
                <!-- Configuration principale -->
                <ha-form
                    .hass=${this.hass}
                    .data=${this.config}
                    .schema=${t}
                    .computeLabel=${t=>t.label||t.name}
                    .computeHelper=${t=>t.helper_text}
                    @value-changed=${t=>this._dispatchConfigChanged(t.detail.value)}
                ></ha-form>
                
                <!-- Entités additionnelles -->
                <div class="entities">
                    <h3>Additional entities</h3>
                    
                    ${this.optionalEntities?.map(((t,i)=>I`
                        <div class="entity-row">
                            <ha-form
                                .hass=${this.hass}
                                .data=${t}
                                .schema=${e}
                                .computeLabel=${t=>t.label||t.name}
                                @value-changed=${t=>this._updateOptionalEntity(i,t.detail.value)}
                            ></ha-form>
                            
                            <div class="entity-actions">
                                <ha-icon-button
                                    .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
                                    @click=${()=>this._removeEntity(i)}
                                ></ha-icon-button>
                            </div>
                        </div>
                    `))}
                    
                    <div class="add-entity">
                         <ha-entity-picker
                            .hass="${this.hass}"
                            .includeDomains=${["sensor","binary_sensor"]}
                            @value-changed="${this._addOptionalEntity}"
                        ></ha-entity-picker>
                    </div>
                </div>
            </div>
        `}}),window.customCards=window.customCards||[],window.customCards.push({type:"openevse-card",name:"OpenEVSE Card",description:"A custom card for OpenEVSE"});
