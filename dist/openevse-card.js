/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let r=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new r(s,t,i)},o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,p=globalThis,v=p.trustedTypes,m=v?v.emptyScript:"",g=p.reactiveElementPolyfillSupport,b=(t,e)=>t,f={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!a(t,e),_={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const n=s?.call(this);r.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of s){const s=document.createElement("style"),r=t.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:f).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:f;this._$Em=s,this[s]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??y)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[b("elementProperties")]=new Map,x[b("finalized")]=new Map,g?.({ReactiveElement:x}),(p.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,$=w.trustedTypes,k=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+S,j=`<${C}>`,A=document,O=()=>A.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,T="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,L=/>/g,q=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,U=/"/g,I=/^(?:script|style|textarea|title)$/i,R=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),H=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),D=new WeakMap,F=A.createTreeWalker(A,129);function W(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=N;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(o.lastIndex=d,l=o.exec(i),null!==l);)d=o.lastIndex,o===N?"!--"===l[1]?o=P:void 0!==l[1]?o=L:void 0!==l[2]?(I.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=q):void 0!==l[3]&&(o=q):o===q?">"===l[0]?(o=r??N,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?q:'"'===l[3]?U:V):o===U||o===V?o=q:o===P||o===L?o=N:(o=q,r=void 0);const h=o===q&&t[e+1].startsWith("/>")?" ":"";n+=o===N?i+j:c>=0?(s.push(a),i.slice(0,c)+E+i.slice(c)+S+h):i+S+(-2===c?e:h)}return[W(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class G{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[l,c]=Z(t,e);if(this.el=G.createElement(l,i),F.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=F.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(E)){const e=c[n++],i=s.getAttribute(t).split(S),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?Y:"?"===o[1]?tt:"@"===o[1]?et:X}),s.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(I.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],O()),F.nextNode(),a.push({type:2,index:++r});s.append(t[e],O())}}}else if(8===s.nodeType)if(s.data===C)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)a.push({type:7,index:r}),t+=S.length-1}r++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,s){if(e===H)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=z(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=J(t,r._$AS(t,e.values),r,s)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??A).importNode(e,!0);F.currentNode=s;let r=F.nextNode(),n=0,o=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Q(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new it(r,this,t)),this._$AV.push(e),a=i[++o]}n!==a?.index&&(r=F.nextNode(),n++)}return F.currentNode=A,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),z(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==H&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==B&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(W(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new K(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=D.get(t.strings);return void 0===e&&D.set(t.strings,e=new G(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new Q(this.O(O()),this.O(O()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=J(this,t,e,0),n=!z(t)||t!==this._$AH&&t!==H,n&&(this._$AH=t);else{const s=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=J(this,s[i+o],e,o),a===H&&(a=this._$AH[o]),n||=!z(a)||a!==this._$AH[o],a===B?t=B:t!==B&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Y extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}class tt extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==B)}}class et extends X{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??B)===H)return;const i=this._$AH,s=t===B&&i!==B||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==B&&(i===B||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const st=w.litHtmlPolyfillSupport;st?.(G,Q),(w.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let rt=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new Q(e.insertBefore(O(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}};rt._$litElement$=!0,rt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:rt});const nt=globalThis.litElementPolyfillSupport;nt?.({LitElement:rt}),(globalThis.litElementVersions??=[]).push("4.1.1");const ot=n`
		:host{
			--evse-active-color: var(--success-color);
			--evse-disabled-color: #116A88;
			--evse-auto-color: #32B3D4;
			--evse-slider-color: var(--accent-color, #2196f3);
			--evse-shadow: var(--ha-card-box-shadow, 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px - 2px rgba(0,0,0,0.2));
			--evse-border-radius: var(--ha-card-border-radius, 10px);
			--evse-selector-bg-color: var(--primary-background-color);
			--evse-secondary-bg-color: color-mix(in srgb, var(--divider-color) 60%, transparent);
		}
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
		.wifi-icon {
			color: var(--info-color)
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
			margin-bottom: 16px;
			margin-top: 10px;
			align-items: center;
		}
		.override-button {
			flex: 1;
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			background-color: transparent;
			padding: 8px;
			cursor: pointer;
			transition: all 0.2s;
			color: var(--primary-text-color);
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
			margin: 8px;
			color: var(--primary-text-color);
			background-color: var(--evse-secondary-bg-color);
			align-items: center;
			border-radius: 10px;
			align-items: center;
			padding: 8px 16px;
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
			color: var(--primary-color);
			font-size: 1.1rem;
			font-weight: 500;
		}
		.entity-icon {
			padding: 6px;
			margin-right: 20px;
			color: var(--state-icon-color);
			background-color: color-mix(in srgb, var(--state-icon-color) 20%, transparent);
			border-radius: 50%;
			display: flex;
			justify-content: left;
		}
		.clickable {
			cursor: pointer;
			text-decoration: none;
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
			background-color: var(--evse-secondary-bg-color);
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
		.container {
			width: 100%;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;

		}
		.vehicle {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
		    gap: 12px;
		}
		
	`,at={en:{disabled:"disabled",sleeping:"disabled",active:"active",charging:"charging","not connected":"waiting",connected:"connected",error:"error",power:"power",current:"current",session:"session",elapsed:"elapsed","charge rate":"charge rate",required_entities:"Required entities",entity_auto_success:"All required entities were automatically found",entity_auto_fail:"Some entities could not be automatically detected",entity_auto_loading:"Loading device entities","additional entities":"Additional entities"},fr:{disabled:"désactivé",sleeping:"désactivé",active:"activé",charging:"en charge","not connected":"en attente",connected:"connecté",error:"erreur",power:"puissance",current:"courant",session:"session",elapsed:"écoulé","charge rate":"ampérage",required_entities:"Entités requises",entity_auto_success:"Toutes les entités ont été trouvées automatiquement",entity_auto_fail:"certaines entités n'ont pas pu être détectées automatiquement",entity_auto_loading:"Chargement des entités de l'appareil","additional entities":"Entités supplémentaires"},de:{disabled:"deaktiviert",sleeping:"deaktiviert",active:"aktiv",charging:"lädt","not connected":"bereit",connected:"verbunden",error:"fehler",power:"leistung",current:"stromstärke",session:"sitzung",elapsed:"verstrichene zeit","charge rate":"laderate",required_entities:"Erforderliche Entitäten",entity_auto_success:"Alle erforderlichen Entitäten wurden automatisch gefunden",entity_auto_fail:"Einige Entitäten konnten nicht automatisch erkannt werden",entity_auto_loading:"Geräteentitäten werden geladen","additional entities":"Zusätzliche Entitäten"},es:{disabled:"desactivado",sleeping:"desactivado",active:"activo",charging:"cargando","not connected":"en espera",connected:"conectado",error:"error",power:"potencia",current:"corriente",session:"sesión",elapsed:"tiempo transcurrido","charge rate":"amperaje",required_entities:"Entidades requeridas",entity_auto_success:"Todas las entidades requeridas se encontraron automáticamente",entity_auto_fail:"Algunas entidades no pudieron ser detectadas automáticamente",entity_auto_loading:"Cargando entidades del dispositivo","additional entities":"Entidades adicionales"}},lt={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:y},ct=(t=lt,e,i)=>{const{kind:s,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t)},init(e){return void 0!==e&&this.P(s,void 0,t),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t)}}throw Error("Unsupported decorator location: "+s)};function dt(t){return(e,i)=>"object"==typeof i?ct(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ht(t){return dt({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ut=function(t,e,i,s){for(var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let pt=class extends rt{constructor(){super(),this.min=0,this.max=32,this.step=1,this.value=0,this.unit="A",this.disabled=!1,this.label="Charge Rate",this._sliderValue=0,this._dragging=!1,this._boundHandleSliderMove=this._handleSliderMove.bind(this),this._boundHandleSliderEnd=this._handleSliderEnd.bind(this)}updated(t){t.has("value")&&!this._dragging&&(this._sliderValue=this.value)}connectedCallback(){super.connectedCallback(),this._sliderValue=this.value}disconnectedCallback(){super.disconnectedCallback(),this._removeEventListeners()}get _percentage(){return(this._sliderValue-this.min)/(this.max-this.min)*100}_formatValue(t){return this.step<1?t.toFixed(1):t.toFixed(0)}_handleSliderStart(t){this.disabled||(this._dragging=!0,this._updateSliderValue(t),window.addEventListener("mousemove",this._boundHandleSliderMove),window.addEventListener("touchmove",this._boundHandleSliderMove),window.addEventListener("mouseup",this._boundHandleSliderEnd),window.addEventListener("touchend",this._boundHandleSliderEnd))}_handleSliderMove(t){this._dragging&&this._updateSliderValue(t)}_handleSliderEnd(){this._dragging&&(this._removeEventListeners(),this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:this._sliderValue},bubbles:!0,composed:!0})),setTimeout((()=>{this._dragging=!1}),100))}_removeEventListeners(){window.removeEventListener("mousemove",this._boundHandleSliderMove),window.removeEventListener("touchmove",this._boundHandleSliderMove),window.removeEventListener("mouseup",this._boundHandleSliderEnd),window.removeEventListener("touchend",this._boundHandleSliderEnd)}_updateSliderValue(t){const e=this.shadowRoot?.querySelector(".slider-wrapper");if(!e)return;const i=e.getBoundingClientRect();let s;s="touches"in t?t.touches[0].clientX:t.clientX;let r=(s-i.left)/i.width;r=Math.min(Math.max(r,0),1);let n=this.min+r*(this.max-this.min);n=Math.round(n/this.step)*this.step,n=Math.min(Math.max(n,this.min),this.max),this._sliderValue=Number(n.toFixed(2)),this.requestUpdate()}render(){return R`
      <div class="slider-container">
        <div class="slider-label">${this.label}</div>
        <div class="slider-badge">
          ${this._formatValue(this._sliderValue)} ${this.unit}
        </div>
        <div class="slider-row">
          <div 
            class="slider-wrapper"
            @mousedown=${this._handleSliderStart}
            @touchstart=${this._handleSliderStart}
          >
            <div
              class="slider-track clickable"
              style="width: ${this._percentage}%"
            ></div>
            <div
              class="slider-knob"
              style="left: calc(${this._percentage}% - 16px)"
            ></div>
          </div>
        </div>
      </div>
    `}};pt.styles=n`
    :host {
      display: block;
      --evse-slider-color: var(--primary-color, #03a9f4);
      margin-bottom: 8px;
	  width: 100%;
	  margin-left: 8px;
	  margin-right: 8px;
	  
    }
    
    .slider-container {
      border-radius: 10px;
      padding: 8px;
      padding-bottom: 15px;
      padding-top: 15px;
      background-color: transparent;
	  border: 1px solid var(--divider-color, #e0e0e0);
	  max-width: 300px;
	  margin: 0 auto;
	 

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
      color: var(--primary-text-color, #212121);
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
      background: color-mix(in srgb, var(--primary-color) 20%, transparent);
      box-shadow: var(--control-button-background, none);
      touch-action: none; /* Prevent scrolling on touch */
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
      background: var(--evse-slider-color);
      opacity: 1;
    }
    
    .slider-badge {
      display: flex;
      justify-content: center;
      margin-left: 8px;
      color: var(--evse-slider-color);
      font-size: 1.2rem;
      padding: 4px 8px;
      border-radius: 4px;
      font-weight: bold;
    }
    
    .clickable {
      cursor: pointer;
      text-decoration: none;
    }
    
    :host([disabled]) .slider-wrapper {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    :host([disabled]) .slider-track, 
    :host([disabled]) .slider-knob {
      cursor: not-allowed;
    }
  `,ut([dt({type:Number})],pt.prototype,"min",void 0),ut([dt({type:Number})],pt.prototype,"max",void 0),ut([dt({type:Number})],pt.prototype,"step",void 0),ut([dt({type:Number})],pt.prototype,"value",void 0),ut([dt({type:String})],pt.prototype,"unit",void 0),ut([dt({type:Boolean})],pt.prototype,"disabled",void 0),ut([dt({type:String})],pt.prototype,"label",void 0),ut([ht()],pt.prototype,"_sliderValue",void 0),ut([ht()],pt.prototype,"_dragging",void 0),ut([function(t){return(e,i)=>{const s="function"==typeof e?e:e[i];Object.assign(s,t)}}({passive:!0})],pt.prototype,"_handleSliderStart",null),pt=ut([(t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)})
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */("evse-slider")],pt);customElements.define("limit-component",class extends rt{static get properties(){return{limit:{type:Object,attribute:!1},setLimit:{type:Object,attribute:!1},delLimit:{type:Object,attribute:!1},_showLimitForm:{type:Boolean},_selectedLimitType:{type:String},_hours:{type:Number},_minutes:{type:Number},_energyValue:{type:Number}}}constructor(){super(),this._showLimitForm=!1,this._selectedLimitType="time",this._hours=0,this._minutes=0,this._energyValue=0,this.limit=null,this._showLimitForm=!1,this._selectedLimitType="time",this._hours=0,this._minutes=0,this._energyValue=0}static get styles(){return n`
      :host {
        display: block;
        width: 100%;
      }
      .limit-container {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 10px 0;
      }
      .new-limit-btn {
        background-color: var(--primary-color);
        color: var(--text-primary-color);
        border: none;
        border-radius: 4px;
        padding: 8px 16px;
        font-size: 14px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s;
        height: 36px;
      }
      .new-limit-btn:hover {
        background-color: var(--dark-primary-color);
      }
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .limit-form {
        background-color: var(--card-background-color);
        border-radius: var(--evse-border-radius);
        box-shadow: var(--evse-shadow);
        padding: 16px;
        width: 90%;
        max-width: 350px;
        margin: 0 auto;
        z-index: 1000;
      }
      .form-header {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 26px;
        text-align: center;
      }
      .form-row {
        display: flex;
        flex-direction: column;
        margin-bottom: 25px;  

      }
      .form-row label {
        flex: 1;
        text-align: center;
        margin-bottom: 8px;
        font-size: 14px;
      }
      .form-row .select {
        display: flex;
        justify-content: center;
        text-align: center;
      }
      .form-row select {
        width: 50%;
        display: inline-block;
        text-align: center; 
        font-size: 16px;
        font-weight: 500;
        padding: 8px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        background-color: var(--primary-background-color);
      }
      option {
        font-size: 16px;
        font-weight: 500;
      }
      .time-inputs {
        display: flex;
        flex-direction: row;
        align-self: center;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 8px;
        width: 60%;
      }
      .time-input {
        flex: 1;
        justify-content: center;
			  align-items: center;
        text-align: center;
      }
      .time-input input {
        width: 70%;
        padding: 8px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        background-color: var(--primary-background-color);
        color: var(--primary-text-color);
        text-align: center; 
      }
      .time-input label {
        display: block;
        margin-top: 4px;
        text-align: center;
        font-size: 16px;
        font-weight: 500
      }
      .slider-container {
        padding: 8px 0;
      }
      .slider-value {
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 0px;
      }
      .energy-slider {
        width: 100%;
        -webkit-appearance: none;
        height: 8px;
        border-radius: 4px;
        background: var(--secondary-background-color);
        outline: none;
      }
      .energy-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--primary-color);
        cursor: pointer;
      }
      .energy-slider::-moz-range-thumb {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--primary-color);
        cursor: pointer;
      }
      .form-actions {
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
      }
      .btn {
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
      }
      .btn-primary {
        background-color: var(--primary-color);
        color: var(--text-primary-color);
      }
      .btn-primary:hover {
         background-color: var(--dark-primary-color);
      }
      .btn-secondary {
        background-color: var(--secondary-background-color);
        color: var(--primary-text-color);
      }
      .btn-secondary:hover {
        background-color: var(--dark-secondary-background-color);
      }
      .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .limit-badge {
        display: flex;
        align-items: center;
        background-color: var(--primary-color);
        color: var(--text-primary-color);
        border-radius: 8px;
        padding-left: 8px;
        padding-right: 4px;
        font-size: 14px;
        max-width: fit-content;
        margin: 0 auto;
        height: 36px;
      }
      .limit-badge ha-icon {
        flex: 1;
        align-items: center;
        justify-content: center;
        margin-right: 8px;
        --mdc-icon-size: 20px;
      }
      .limit-badge .close-icon {
        flex: 1;
        align-items: center;
        margin-left: 8px;
        margin-right: 4px;
        cursor: pointer;
        --mdc-icon-size: 20px;
      }
      .close-icon:hover {
        background-color: var(--dark-primary-color);
      }
      
      .limit-value {
        font-weight: 500;
        margin-left: 8px;
        white-space: nowrap;
        font-size: 1.1rem;
      }
    `}_toggleLimitForm(){this._showLimitForm=!this._showLimitForm,this._selectedLimitType="time",this._hours=0,this._minutes=0,this._energyValue=0,this.requestUpdate()}_handleTypeChange(t){const e=t.target;this._selectedLimitType=e.value,this.requestUpdate()}_handleHoursChange(t){const e=t.target;this._hours=parseInt(e.value)||0,this.requestUpdate()}_handleMinutesChange(t){const e=t.target;this._minutes=parseInt(e.value)||0,this.requestUpdate()}_handleEnergyChange(t){const e=t.target,i=parseInt(e.value)||0;this._energyValue=1e3*i,this.requestUpdate()}_sliderMouseDown(t){const e=t.currentTarget.getBoundingClientRect();this._updateSliderValue(t.clientX,e);const i=t=>{this._updateSliderValue(t.clientX,e),t.preventDefault()},s=()=>{window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)}_updateSliderValue(t,e){const i=e.width,s=t-e.left,r=Math.min(Math.max(s/i,0),1),n=Math.round(100*r);this._energyValue=1e3*n,this.requestUpdate()}_formatEnergyValue(t){return`${Math.round(t/1e3)} kWh`}_addLimit(){if("time"===this._selectedLimitType){const t=60*this._hours+this._minutes;t>0&&this.setLimit&&this.setLimit("time",t)}else"energy"===this._selectedLimitType&&this._energyValue>0&&this.setLimit&&this.setLimit("energy",this._energyValue);this._showLimitForm=!1}_removeLimit(){this.delLimit&&this.delLimit()}_isAddButtonDisabled(){return"time"===this._selectedLimitType?0===this._hours&&0===this._minutes:"energy"!==this._selectedLimitType||0===this._energyValue}_formatTimeValue(t){return[Math.floor(t/60),t%60,0].map((t=>String(t).padStart(2,"0"))).join(":")}render(){return this.limit&&this.limit.type?R`
        <div class="limit-container">
          <div class="limit-badge">
            <ha-icon icon="${"time"===this.limit.type?"mdi:clock":"mdi:lightning-bolt"}"></ha-icon>
            <span class="limit-type">${"time"===this.limit.type?"Time: ":"Energy: "}</span>
            <span class="limit-value">
              ${"time"===this.limit.type?this._formatTimeValue(this.limit.value):this._formatEnergyValue(this.limit.value)}
            </span>
            <ha-icon 
              class="close-icon" 
              icon="mdi:close" 
              @click=${this._removeLimit}
            ></ha-icon>
          </div>
        </div>
      `:this._showLimitForm?R`
      <div class="limit-container">
        <button class="new-limit-btn" @click=${this._toggleLimitForm}>
          <ha-icon icon="mdi:plus"></ha-icon>
          New Limit
        </button>
      </div>
        <div class="modal-overlay">
          <div class="limit-form">
          <div class="form-header">Add Charging Limit</div>
          
          <div class="form-row">
            <div class="select">
              <select id="limit-type" @change=${this._handleTypeChange}>
                  <option value="time" ?selected=${"time"===this._selectedLimitType}>Time</option>
                  <option value="energy" ?selected=${"energy"===this._selectedLimitType}>Energy</option>
              </select>
            </div>
          </div>
          
          ${"time"===this._selectedLimitType?R`
            <div class="form-row">
              <div class="time-inputs">
                <div class="time-input">
                  <input 
                    type="number" 
                    min="0" 
                    max="23" 
                    .value=${String(this._hours)}
                    @input=${this._handleHoursChange}
                  >
                  <label>Hours</label>
                </div>
                <div class="time-input">
                  <input 
                    type="number" 
                    min="0" 
                    max="59" 
                    .value=${String(this._minutes)}
                    @input=${this._handleMinutesChange}
                  >
                  <label>Minutes</label>
                </div>
              </div>
            </div>
          `:R`
            <div class="form-row">
            <div class="slider-value">${this._formatEnergyValue(this._energyValue)}</div>
            <div class="slider-container">
              <input 
                type="range" 
                min="0" 
                max="100" 
                step="1" 
                class="energy-slider"
                .value=${String(Math.round(this._energyValue/1e3))}
                @input=${this._handleEnergyChange}
                @mousedown=${this._sliderMouseDown}
              >
            </div>
            </div>
          `}
          
          <div class="form-actions">
            <button class="btn btn-secondary" @click=${this._toggleLimitForm}>Cancel</button>
            <button 
              class="btn btn-primary" 
              ?disabled=${this._isAddButtonDisabled()}
              @click=${this._addLimit}
            >
              Add Limit
            </button>
          </div>
        </div>
        </div>
      `:R`
      <div class="limit-container">
        <button class="new-limit-btn" @click=${this._toggleLimitForm}>
          <ha-icon icon="mdi:plus"></ha-icon>
          New Limit
        </button>
      </div>
    `}});customElements.define("progress-bar",class extends rt{static get properties(){return{label:{type:String},value:{type:Number},unit:{type:String},max_value:{type:Number},icon:{type:String}}}constructor(){super(),this.value=0,this.label="",this.unit="",this.max_value=100,this.icon="",this.value=0,this.label="",this.unit="",this.max_value=100,this.icon=""}static get styles(){return n`
      :host {
        display: block;
        width: 100%;
        margin-top: 12px;
        margin-bottom: 14px;
        display: flex;
        justify-content: center;
      }
      .container {
        width: 100%;
        max-width: 150px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
      }
      .label {
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 6px;

      }
      .icon {
        color: var(--state-icon-color);
      }
      .progress {
        position: relative;
        width: 100%;
        height: 20px;
        background-color: var(--evse-secondary-bg-color);
        border-radius: 6px;
        border: 1px solid var(--divider-color);
        overflow: hidden;
      }
      .progress-fill {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background-color: var(--primary-color, #03a9f4);
        transition: width 0.5s ease-in-out;
      }
      .value {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        z-index: 10;
      }
    `}render(){return R`
    <div class="container">
      <div class="label">
        ${this.icon?R`<ha-icon class="icon" icon=${this.icon}> </ha-icon>`:""}
        ${this.label?this.label:""}
      </div>
      <div class="progress">
        <div
          class="progress-fill"
          style="width: ${100*this.value/this.max_value}%"
        ></div>
        <div class="value">
          ${this.value}${this.unit}
        </div>
      </div>
    </div>

    `}});var vt=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function mt(t,e){if(t.length!==e.length)return!1;for(var i=0;i<t.length;i++)if(s=t[i],r=e[i],!(s===r||vt(s)&&vt(r)))return!1;var s,r;return!0}function gt(t,e){void 0===e&&(e=mt);var i=null;function s(){for(var s=[],r=0;r<arguments.length;r++)s[r]=arguments[r];if(i&&i.lastThis===this&&e(s,i.lastArgs))return i.lastResult;var n=t.apply(this,s);return i={lastResult:n,lastArgs:s,lastThis:this},n}return s.clear=function(){i=null},s}const bt=gt(((t={})=>[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}},required:!1,label:"Header Title"},{name:"header",selector:{boolean:{}},label:"Display header"}]},{type:"grid",name:"",schema:[{name:"feat_soc",selector:{boolean:{}},label:"Enable Vehicle Battery"},{name:"feat_range",selector:{boolean:{}},label:"Enable Vehicle Range"},{name:"feat_max_range",selector:{number:{}},required:!1,label:"Max vehicle range"}]},{name:"device_id",selector:{device:{integration:"openevse",manufacturer:"OpenEVSE"}},label:"OpenEVSE Device",helper_text:"Select your OpenEVSE device to automatically populate all entities",required:!0},...[{name:"override_entity",selector:{entity:{domain:["input_select","select"],include_entities:t.select||[]}},label:"Override State",helper_text:"Select openevse.override_state entity",required:!0},{name:"status_entity",selector:{entity:{domain:["sensor"],include_entities:t.sensor||[]}},label:"Station Status",helper_text:"Select openevse.station_status entity",required:!0},{name:"power_entity",selector:{entity:{domain:["sensor"],include_entities:t.sensor||[]}},label:"Current power usage",helper_text:"Select openevse.current_power_usage entity",required:!0},{name:"current_entity",selector:{entity:{domain:["sensor"],include_entities:t.sensor||[]}},label:"Charging current",helper_text:"Select openevse.charging_current entity",required:!0},{name:"vehicle_connected_entity",selector:{entity:{domain:["binary_sensor"],include_entities:t.binary_sensor||[]}},label:"Vehicle Connected",helper_text:"Select openevse.vehicle_connected entity",required:!0},{name:"charging_status_entity",selector:{entity:{domain:["sensor"],include_entities:t.sensor||[]}},label:"Charging status",helper_text:"Select openevse.charging_status entity",required:!0},{name:"charge_rate_entity",selector:{entity:{domain:["number"],include_entities:t.number||[]}},label:"Charge Rate",helper_text:"Select openevse.charge_rate entity",required:!0},{name:"session_energy_entity",selector:{entity:{domain:["sensor"],include_entities:t.sensor||[]}},label:"Session Energy",helper_text:"Select openevse.usage_this_session entity",required:!0},{name:"time_elapsed_entity",selector:{entity:{domain:["sensor"],include_entities:t.sensor||[]}},label:"Charge Time Elapsed",helper_text:"Select openevse.charge_time_elapsed entity",required:!0},{name:"wifi_signal_strength_entity",selector:{entity:{domain:["sensor"],include_entities:t.sensor||[]}},label:"Wifi Signal",helper_text:"Select openevse_wifi_signal_strength entity",required:!1},{name:"limit_active_entity",selector:{entity:{domain:["binary_sensor"],include_entities:t.binary_sensor||[]}},label:"Limit Active",helper_text:"Select openevse_limit_active entity",required:!1},{name:"vehicle_range_entity",selector:{entity:{domain:["sensor"],include_entities:t.sensor||[]}},label:"Vehicle Range",helper_text:"Select openevse_vehicle_range entity",required:!1},{name:"vehicle_battery_level_entity",selector:{entity:{domain:["sensor"],include_entities:t.sensor||[]}},label:"Battery Level",helper_text:"Select openevse_vehicle_battery_level entity",required:!1}]])),ft=gt(((t={})=>[{name:"id",selector:{entity:{domain:["sensor","binary_sensor"],include_entities:[...t.sensor||[],...t.binary_sensor||[]]}},label:"Entity"},{name:"name",selector:{text:{}},label:"Name"},{name:"icon",selector:{icon:{}},label:"Icon"}]));customElements.define("openevse-card",class extends rt{static get properties(){return{hass:{type:Object},config:{type:Object},_lang:{type:String},_localTimeElapsed:{type:Number},_lastEntityTime:{type:Number},_timeUpdateInterval:{type:Number},_isCharging:{type:Boolean},_limit:{type:Object},_hasLimit:{type:Boolean}}}constructor(){super(),this._localTimeElapsed=0,this._lastEntityTime=0,this._timeUpdateInterval=null,this._isCharging=!1,this._translations=at,this._limit=null,this._hasLimit=!1,this._translations=at,this._localTimeElapsed=0,this._lastEntityTime=0,this._timeUpdateInterval=null,this._isCharging=!1,this._limit=null,this._hasLimit=!1}disconnectedCallback(){super.disconnectedCallback(),this._timeUpdateInterval&&(clearInterval(this._timeUpdateInterval),this._timeUpdateInterval=null)}getGridOptions(){return{columns:12,max_columns:12,min_columns:9}}_setupTimeInterval(){this._timeUpdateInterval&&(clearInterval(this._timeUpdateInterval),this._timeUpdateInterval=null),this._isCharging&&(this._timeUpdateInterval=window.setInterval((()=>{this._localTimeElapsed+=1/60,this.requestUpdate()}),1e3))}updated(t){if(t.has("hass")&&this.hass){if(this._lang=this.hass.language||"en",this.config&&this.config.charging_status_entity&&this.hass.states[this.config.charging_status_entity]){const t="charging"===this.hass.states[this.config.charging_status_entity].state;t!==this._isCharging&&(this._isCharging=t,this._setupTimeInterval())}if(this.config&&this.config.time_elapsed_entity&&this.hass.states[this.config.time_elapsed_entity]){const t=this.hass.states[this.config.time_elapsed_entity],e=parseFloat(t.state);isNaN(e)||e===this._lastEntityTime||(this._lastEntityTime=e,this._localTimeElapsed=e)}if(this.config&&this.config.limit_active_entity&&this.hass.states[this.config.limit_active_entity]){const t="on"===this.hass.states[this.config.limit_active_entity].state;t!=this._hasLimit&&(this._hasLimit=t,this.config.device_id&&this._getLimit().then((t=>{this._limit=t})))}}if(t.has("config")&&!t.has("hass")&&this.config&&this.hass){if(this.config.charging_status_entity&&this.hass.states[this.config.charging_status_entity]){const t=this.hass.states[this.config.charging_status_entity];this._isCharging="charging"===t.state}if(this.config.time_elapsed_entity&&this.hass.states[this.config.time_elapsed_entity]){const t=this.hass.states[this.config.time_elapsed_entity];t&&(this._lastEntityTime=parseFloat(t.state),this._localTimeElapsed=this._lastEntityTime,this._isCharging&&this._setupTimeInterval())}}}static getConfigElement(){return document.createElement("openevse-card-editor")}static getStubConfig(){return{header:!0,name:"OpenEVSE",feat_soc:!1,feat_range:!1,feat_max_range:600,device_id:"",override_entity:"",status_entity:"",power_entity:"",current_entity:"",charge_rate_entity:"",vehicle_connected_entity:"",charging_status_entity:"",session_energy_entity:"",time_elapsed_entity:"",wifi_signal_strength_entity:"",limit_active_entity:"",vehicle_battery_level_entity:"",vehicle_range_entity:"",optional_entities:[]}}static get styles(){return ot}setConfig(t){this.config=t}getCardSize(){return 3}_selectOverrideState(t,e){this.hass&&this.hass.callService("select","select_option",{entity_id:t,option:e.toString()})}async _getLimit(){if(!this.hass)return null;try{const t=await this.hass.callService("openevse","get_limit",{device_id:this.config?.device_id},void 0,!1,!0);return t?.response?t.response:null}catch(t){return console.error("Error while getting limit",t),null}}_setLimit(t,e){if(this.hass)try{return void this.hass.callService("openevse","set_limit",{device_id:this.config?.device_id,type:t,value:e,auto_release:!0},void 0,!1,!1)}catch(t){return void console.error("Error while setting limit",t)}}_delLimit(){if(this.hass)try{return void this.hass.callService("openevse","clear_limit",{device_id:this.config?.device_id},void 0,!1,!1)}catch(t){return void console.error("Error while removing limit",t)}}_showMoreInfo(t){const e=new Event("hass-more-info",{bubbles:!0,composed:!0});e.detail={entityId:t},this.dispatchEvent(e)}_convertSeconds(t){if(isNaN(t)||t<0||null==t)return"00:00:00";return[Math.floor(t/3600),Math.floor(t%3600/60),Math.floor(t%60)].map((t=>String(t).padStart(2,"0"))).join(":")}_convertTime(t){if(isNaN(t)||t<0)return"00:00:00";const e=Math.round(60*t);return this._convertSeconds(e)}_t(t){const e=this._lang||"en";return this._translations[e]?.[t]||this._translations.en?.[t]||t}_updateSlider(t){this.hass&&this.config?.charge_rate_entity&&this.hass.callService("number","set_value",{entity_id:this.config.charge_rate_entity,value:t.detail.value})}render(){if(!this.hass||!this.config)return R``;const t=this.config.override_entity?this.hass.states[this.config.override_entity]:null,e=this.config.status_entity?this.hass.states[this.config.status_entity]:null,i=this.config.power_entity?this.hass.states[this.config.power_entity]:null,s=this.config.current_entity?this.hass.states[this.config.current_entity]:null,r=this.config.charge_rate_entity?this.hass.states[this.config.charge_rate_entity]:null,n=this.config.vehicle_connected_entity?this.hass.states[this.config.vehicle_connected_entity]:null,o=this.config.charging_status_entity?this.hass.states[this.config.charging_status_entity]:null,a=this.config.session_energy_entity?this.hass.states[this.config.session_energy_entity]:null,l=this.config.time_elapsed_entity?this.hass.states[this.config.time_elapsed_entity]:null,c=this.config.wifi_signal_strength_entity?this.hass.states[this.config.wifi_signal_strength_entity]:null,d=this.config.vehicle_battery_level_entity?this.hass.states[this.config.vehicle_battery_level_entity]:null,h=this.config.vehicle_range_entity?this.hass.states[this.config.vehicle_range_entity]:null,u=(()=>this.config?.optional_entities?.map((t=>({name:t.name?t.name:t.id?this.hass?.states[t.id]?.attributes.friendly_name:null,value:t.id?this.hass?.formatEntityState(this.hass.states[t.id])??null:null,icon:t.icon,id:t.id?t.id:void 0})))??[])();return R`
        <ha-card>
            ${this.config.header?R`<h1 class="card-header">
                    ${this.config.name||"OpenEVSE"}
                    </h1>`:""}
            <div class="card-content">
                <div class="evse-states">
                    <div class="status-icons">
                            ${c?R`
                            <div
                                class="status-icon clickable"
                                @click=${()=>this._showMoreInfo(this.config?.wifi_signal_strength_entity||"")}
                                >
                                    <ha-icon
                                        icon="${p=Number(c?.state),p>=-65?"mdi:wifi-strength-4":-65>p&&p>=-70?"mdi:wifi-strength-3":-70>p&&p>=-75?"mdi:wifi-strength-2":-75>p&&p>=-80?"mdi:wifi-strength-1":"mdi:wifi-strength-alert-outline"}"
                                        class="wifi-icon"
                                    ></ha-icon>
                                </div>
                            `:""}
                        
                            <div
                            class="status-icon clickable"
                            @click=${()=>this._showMoreInfo(this.config?.status_entity||"")}
                            >
                            <ha-icon
                                icon="${"active"==e?.state?"off"==n?.state?"mdi:timer-sand":"mdi:lightning-bolt":"mdi:cancel"}"
                                class="${"active"==e?.state?"charging"==o?.state?"charging":"active bg-active":"disabled bg-disabled"}"
                            ></ha-icon>
                            </div>
                            <div
                            class="status-icon clickable"
                            @click=${()=>this._showMoreInfo(this.config?.vehicle_connected_entity||"")}
                            >
                            <ha-icon
                                icon="${"off"==n?.state?"mdi:car-off":"mdi:car"}"
                                class="${"off"==n?.state?"disabled bg-disabled":"active bg-active"}"
                            ></ha-icon>
                            </div>
                    </div>
                    <div class="status-heading">
                        <div
                        class="status-badge ${"error"==o?.state?"badge-error":"disabled"==e?.state?"badge-disabled":"charging"==o?.state?"badge-charging":"badge-active"}"
                        >
                        ${this._t(o?.state||"")}
                        </div>
                    </div>
                </div>
                    <div class="grid-container">
                            ${i?R`
                                    <div class="grid-item">
                                        <div class="grid-item-label">${this._t("power")}</div>
                                        <div
                                        class="grid-item-value current-value clickable"
                                        @click=${()=>this._showMoreInfo(this.config?.power_entity||"")}
                                        >
                                        ${i?this.hass.formatEntityState(i):"0 W"}
                                        </div>
                                    </div>
                                    `:R`
                                    <div class="grid-item">
                                        <div class="grid-item-label">${this._t("power")}</div>
                                        <div class="grid-item-value current-value">0 W</div>
                                    </div>`}
                        ${s?R`
                                <div class="grid-item">
                                    <div class="grid-item-label">${this._t("current")}</div>
                                    <div
                                    class="grid-item-value current-value clickable"
                                    @click=${()=>this._showMoreInfo(this.config?.current_entity||"")}
                                    >
                                    ${s?this.hass.formatEntityState(s):"0 A"}
                                    </div>
                                </div>
                                `:R`
                                <div class="grid-item">
                                    <div class="grid-item-label">${this._t("current")}</div>
                                    <div class="grid-item-value current-value">0 A</div>
                                </div>`}
                            ${a?R`
                            <div class="grid-item">
                                <div class="grid-item-label">${this._t("session")}</div>
                                <div
                                class="grid-item-value current-value clickable"
                                @click=${()=>this._showMoreInfo(this.config?.session_energy_entity||"")}
                                >
                            ${a?this.hass.formatEntityState(a):"0 kWh"}
                            </div>
                        </div>
                        `:R`
                        <div class="grid-item">
                            <div class="grid-item-label">${this._t("session")}</div>
                            <div class="grid-item-value current-value">0 kWh</div>
                        </div>`}

                    ${l?R`
                        <div class="grid-item">
                            <div class="grid-item-label">${this._t("elapsed")}</div>
                            <div
                            class="grid-item-value current-value"
                            >
                            ${this._convertTime(this._localTimeElapsed||0)}
                            </div>
                        </div>
                    `:R`
                        <div class="grid-item">
                            <div class="grid-item-label">${this._t("elapsed")}</div>
                            <div class="grid-item-value current-value">00:00:00</div>
                        </div>`}
                    </div>
                    <div class="vehicle">
                        ${this.config.feat_soc?R`
                            <progress-bar value=${Number(d?.state)||0} unit="%" icon="mdi:battery-medium"></progress-bar>
                            `:""}
                        ${this.config.feat_range?R`
                            <progress-bar value=${Number(h?.state)||0} max_value=${this.config?.feat_max_range||600} unit=${h?.attributes.unit_of_measurement||""} icon="mdi:map-marker-distance"></progress-bar>
                        `:""}
                         
                    </div>
                   
                    <div class="override-controls">
                        <div class="override-row">
                            <div
                            class="override-button ${"active"==t?.state?"active":""}"
                            data-option="active"
                            @click=${()=>this._selectOverrideState(this.config?.override_entity||"","active")}
                            >
                            <ha-icon
                                icon="mdi:lightning-bolt"
                                class="${"active"==t?.state&&"charging"==o?.state?"charging":""}"
                            ></ha-icon>
                            </div>
                            <div
                            class="override-button ${"auto"==t?.state?"active":""}"
                            data-option="auto"
                            @click=${()=>this._selectOverrideState(this.config?.override_entity||"","auto")}
                            >
                            <ha-icon
                                icon="mdi:robot"
                                class="${"auto"==t?.state&&"charging"==o?.state?"charging":""}"
                            ></ha-icon>
                            </div>
                            <div
                            class="override-button ${"disabled"==t?.state?"active":""}"
                            data-option="disabled"
                            @click=${()=>this._selectOverrideState(this.config?.override_entity||"","disabled")}
                            >
                            <ha-icon icon="mdi:cancel"></ha-icon>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <evse-slider
                            .min=${"number"==typeof r?.attributes.min?r.attributes.min:0}
                            .max=${"number"==typeof r?.attributes.max?r.attributes.max:32}
                            .step=${"number"==typeof r?.attributes.step?r.attributes.step:1}
                            .value=${Number(r?.state||0)}
                            .unit=${"string"==typeof r?.attributes.unit_of_measurement?r.attributes.unit_of_measurement:"A"}
                            .label=${this._t("charge rate")}
                            .disabled=${!r}
                            @value-changed=${this._updateSlider}
                        ></evse-slider>
                    </div>
                    <!-- Limit -->
                    <div class="container">
                        <limit-component
                            .limit=${this._limit}
                            .setLimit=${this._setLimit.bind(this)}
                            .delLimit=${this._delLimit.bind(this)}
                        ></limit-component>
                    </div>
                    <!-- End of Limit -->
                    ${u?.map((t=>R`
                    <div class="other-entities-container">
                        <div class="entity-row">
                            <div class="entity-title">
                            ${null!=t.icon?R`
                                <div class="entity-icon">
                                    <ha-icon
                                    icon=${t.icon}
                                    ></ha-icon>
                                </div>
                            `:R`
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
    `;var p}}),customElements.define("openevse-card-editor",class extends rt{static get properties(){return{hass:{type:Object},config:{type:Object},_lang:{type:String},_deviceIdChanged:{type:Boolean}}}static get styles(){return n`
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
      .entity-section {
          margin-top: 24px;
          padding-top: 16px;
          border-top: 1px solid var(--divider-color);
      }
      .entity-status {
          margin: 8px 0;
          padding: 8px;
          border-radius: 4px;
          background-color: var(--secondary-background-color);
      }
      .entity-status.success {
          background-color: var(--success-color);
          color: var(--text-primary-color);
      }
      .entity-status.warning {
          background-color: var(--warning-color);
          color: var(--text-primary-color);
      }
    `}constructor(){super(),this.config={},this._deviceIdChanged=!1,this._translations=at,this.optionalEntities=[],this.openEVSEEntities={},this.deviceEntitiesLoaded=!1,this._entityPickerKey=0,this.config={},this.optionalEntities=[],this.openEVSEEntities={},this.deviceEntitiesLoaded=!1,this._translations=at,this._deviceIdChanged=!1}async firstUpdated(){try{await(async()=>{try{if(customElements.get("ha-form")&&customElements.get("ha-selector")&&customElements.get("ha-textfield")&&customElements.get("ha-icon-picker")&&customElements.get("ha-icon-button")&&customElements.get("ha-entity-picker"))return;await Promise.race([customElements.whenDefined("partial-panel-resolver"),new Promise(((t,e)=>setTimeout((()=>e(new Error("Timeout waiting for partial-panel-resolver"))),1e4)))]);const t=document.createElement("partial-panel-resolver");if(!t)throw new Error("Failed to create partial-panel-resolver element");if(t.hass={panels:[{url_path:"tmp",component_name:"config"}]},"function"!=typeof t._updateRoutes)throw new Error("partial-panel-resolver does not have _updateRoutes method");if(t._updateRoutes(),!t.routerOptions?.routes?.tmp?.load)throw new Error("Failed to create tmp route in partial-panel-resolver");await Promise.race([t.routerOptions.routes.tmp.load(),new Promise(((t,e)=>setTimeout((()=>e(new Error("Timeout loading tmp route"))),1e4)))]),await Promise.race([customElements.whenDefined("ha-panel-config"),new Promise(((t,e)=>setTimeout((()=>e(new Error("Timeout waiting for ha-panel-config"))),1e4)))]);const e=document.createElement("ha-panel-config");if(!e)throw new Error("Failed to create ha-panel-config element");if(!e.routerOptions?.routes?.automation?.load)throw new Error("ha-panel-config does not have automation route");await Promise.race([e.routerOptions.routes.automation.load(),new Promise(((t,e)=>setTimeout((()=>e(new Error("Timeout loading automation components"))),1e4)))]);const i=["ha-form","ha-selector","ha-textfield","ha-icon-picker","ha-icon-button","ha-entity-picker"].filter((t=>!customElements.get(t)));if(i.length>0)throw new Error(`Failed to load components: ${i.join(", ")}`)}catch(t){console.error("Error loading Home Assistant form components:",t);try{if(window.customElements&&window.customElements.get("home-assistant")){console.log("Attempting fallback loading method for HA components");const t=new CustomEvent("ha-request-load-components",{detail:{components:["ha-form","ha-selector","ha-textfield","ha-icon-picker","ha-icon-button","ha-entity-picker"]},bubbles:!0,composed:!0});document.dispatchEvent(t)}}catch(t){console.error("Fallback loading method failed:",t)}}})()}catch(t){console.error("Error loading ha-form:",t)}this._lang=this.hass?.language||"en"}setConfig(t){this.config=t,this.optionalEntities=t.optional_entities||[],t.device_id&&this.hass&&!this.deviceEntitiesLoaded&&this._loadDeviceEntities(t.device_id)}_isEntityConfigured(t){return Boolean(this.config[t]&&this.config[t].length>0)}async _loadDeviceEntities(t){if(!t||!this.hass)return;const e={},i=Object.values(this.hass.entities||{}).filter((e=>e.device_id===t)),s={override_entity:{names:["override_state"],domains:["select"],preferredPattern:"select.openevse_override_state"},status_entity:{names:["station_status"],domains:["sensor"],preferredPattern:"sensor.openevse_station_status"},power_entity:{names:["current_power_usage"],domains:["sensor"],preferredPattern:"sensor.openevse_current_power_usage"},current_entity:{names:["charging_current"],domains:["sensor"],preferredPattern:"sensor.openevse_charging_current"},vehicle_connected_entity:{names:["vehicle_connected"],domains:["binary_sensor"],preferredPattern:"binary_sensor.openevse_vehicle_connected"},charging_status_entity:{names:["charging_status"],domains:["sensor"],preferredPattern:"sensor.openevse_charging_status"},charge_rate_entity:{names:["charge_rate"],domains:["number"],preferredPattern:"number.openevse_charge_rate"},session_energy_entity:{names:["usage_this_session"],domains:["sensor"],preferredPattern:"sensor.openevse_usage_this_session"},time_elapsed_entity:{names:["charge_time_elapsed"],domains:["sensor"],preferredPattern:"sensor.openevse_charge_time_elapsed"},wifi_signal_strength_entity:{names:["wifi_signal_strength"],domains:["sensor"],preferredPattern:"sensor.openevse_wifi_signal_strength"},limit_active_entity:{names:["limit_active"],domains:["binary_sensor"],preferredPattern:"sensor.openevse_limit_active"},vehicle_battery_level_entity:{names:["vehicle_battery_level"],domains:["sensor"],preferredPattern:"sensor.openevse_vehicle_battery_level"},vehicle_range_entity:{names:["vehicle_range"],domains:["sensor"],preferredPattern:"sensor.openevse_vehicle_range"}};for(const[t,r]of Object.entries(s)){if(this._isEntityConfigured(t)&&!this._deviceIdChanged)continue;const{names:s,domains:n,preferredPattern:o}=r;let a=i.find((t=>t.entity_id.toLowerCase()===o.toLowerCase()));a||(a=i.find((t=>{const e=t.entity_id.toLowerCase(),i=e.split(".")[0];return!!n.includes(i)&&s.some((i=>e.includes(i.toLowerCase())||t.original_name&&t.original_name.toLowerCase().includes(i.toLowerCase())))}))),a&&(e[t]=a.entity_id)}this.openEVSEEntities=e,this.deviceEntitiesLoaded=!0;const r={...this.config};for(const[t,i]of Object.entries(e))this._isEntityConfigured(t)&&!this._deviceIdChanged||(r[t]=i);this._deviceIdChanged=!1,this.config=r,this._fireConfigChanged(r),this.requestUpdate()}_handleConfigChange(t){const e=t.detail.value;e.device_id!==this.config.device_id?(this._deviceIdChanged=!0,this.deviceEntitiesLoaded=!1,this.config={...this.config,...e},this._loadDeviceEntities(e.device_id)):this._dispatchConfigChanged(e)}_dispatchConfigChanged(t){const e={...t,optional_entities:this.optionalEntities};this.config=e,this._fireConfigChanged(e)}_fireConfigChanged(t){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t}}))}_addOptionalEntity(t){const e=t.target?.value;if(e&&!this.optionalEntities.some((t=>t.id===e))){const t="string"==typeof this.hass?.states[e]?.attributes?.icon?this.hass.states[e].attributes.icon:null;this.optionalEntities=[...this.optionalEntities,{id:e,name:null,icon:t,value:null}],this._fireConfigChanged({...this.config,optional_entities:this.optionalEntities}),this._entityPickerKey++,this.requestUpdate()}}_removeEntity(t){this.optionalEntities=this.optionalEntities.filter(((e,i)=>i!==t)),this._fireConfigChanged({...this.config,optional_entities:this.optionalEntities})}_updateOptionalEntity(t,e){const i={...this.optionalEntities[t]},s=Object.keys(e);for(const t of s){const s=e[t];""===s||void 0===s?"id"===t?i.id=void 0:"name"===t?i.name=null:"icon"===t?i.icon=null:"value"===t&&(i.value=null):"id"===t?i.id=s:"name"===t?i.name=s:"icon"===t?i.icon=s:"value"===t&&(i.value=s)}this.optionalEntities=this.optionalEntities.map(((e,s)=>s===t?i:e)),this._fireConfigChanged({...this.config,optional_entities:this.optionalEntities})}_getMissingEntities(){return["override_entity","status_entity","power_entity","current_entity","vehicle_connected_entity","charging_status_entity","charge_rate_entity","session_energy_entity","time_elapsed_entity","wifi_signal_strength_entity","limit_active_entity","vehicle_range_entity","vehicle_battery_level_entity"].filter((t=>{const e=this.config[t]&&this.config[t].length>0,i=this.openEVSEEntities[t]&&this.openEVSEEntities[t].length>0;return!e&&!i}))}_t(t){const e=this._lang||"en";return this._translations[e]?.[t]||this._translations.en?.[t]||t}render(){if(!this.hass)return R``;const t={};if(this.config.device_id&&this.hass.entities){Object.values(this.hass.entities).filter((t=>t.device_id===this.config.device_id)).forEach((e=>{const i=e.entity_id.split(".")[0];t[i]||(t[i]=[]),t[i].push(e.entity_id)}))}const e=bt(t),i=ft(t),s=this._getMissingEntities();return R`
      <!-- Auto-detection status -->
      ${this.config.device_id?R`
          <div class="entity-section">
              ${this.deviceEntitiesLoaded?R`
                  <div class="entity-status ${s.length>0?"warning":"success"}">
                      ${0===s.length?this._t("entity_auto_success")+"!":this._t("entity_auto_fail")+": "+s.join(", ")}
                  </div>
              `:R`
                  <div class="entity-status">
                      ${this._t("entity_auto_loading")}
                  </div>
              `}
          </div>
      `:""}
      
      <div class="form-container">
          ${this.config.device_id?R`
          <!-- Main configuration -->
          <ha-form
              .hass=${this.hass}
              .data=${this.config}
              .schema=${e}
              .computeLabel=${t=>t.label||t.name}
              .computeHelper=${t=>t.helper_text}
              @value-changed=${this._handleConfigChange}
          ></ha-form>
          
          <!-- Additional entities -->
          <div class="entities">
              <h3>${this._t("additional entities")}</h3>
              
              ${this.optionalEntities?.map(((t,e)=>R`
                  <div class="entity-row">
                      <ha-form
                          .hass=${this.hass}
                          .data=${t}
                          .schema=${i}
                          .computeLabel=${t=>t.label||t.name}
                          @value-changed=${t=>this._updateOptionalEntity(e,t.detail.value)}
                      ></ha-form>
                      
                      <div class="entity-actions">
                          <ha-icon-button
                              .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
                              @click=${()=>this._removeEntity(e)}
                          ></ha-icon-button>
                      </div>
                  </div>
              `))}
              
              <div class="add-entity">
                  <ha-entity-picker
                      .hass="${this.hass}"
                      .includeDomains=${["sensor","binary_sensor"]}
                       .includeEntities=${[...t.sensor||[],...t.binary_sensor||[]]}
                      @value-changed="${this._addOptionalEntity}"
                  ></ha-entity-picker>
              </div>
          </div>
          `:R`
          <ha-form
              .hass=${this.hass}  
              .data=${this.openEVSEEntities}
              .schema=${[{name:"device_id",selector:{device:{integration:"openevse",manufacturer:"OpenEVSE"}},label:"OpenEVSE Device",helper_text:"Select your OpenEVSE device to automatically populate all entities",required:!0}]}
              @value-changed=${this._handleConfigChange}
          ></ha-form>
          `}
      </div>
    `}}),window.customCards=window.customCards||[],window.customCards.push({type:"openevse-card",name:"OpenEVSE Card",description:"A custom card for OpenEVSE"});
