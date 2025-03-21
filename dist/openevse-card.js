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
 */,{is:a,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:l,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,p=globalThis,v=p.trustedTypes,g=v?v.emptyScript:"",m=p.reactiveElementPolyfillSupport,f=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!a(t,e),_={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const n=s?.call(this);r.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...l(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of s){const s=document.createElement("style"),r=t.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s,this[s]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??b)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[f("elementProperties")]=new Map,x[f("finalized")]=new Map,m?.({ReactiveElement:x}),(p.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,$=w.trustedTypes,S=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+E,A=`<${C}>`,j=document,M=()=>j.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,q=Array.isArray,z="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,N=/>/g,U=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,R=/"/g,H=/^(?:script|style|textarea|title)$/i,D=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),I=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),B=new WeakMap,Z=j.createTreeWalker(j,129);function W(t,e){if(!q(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=P;for(let e=0;e<i;e++){const i=t[e];let a,c,d=-1,l=0;for(;l<i.length&&(o.lastIndex=l,c=o.exec(i),null!==c);)l=o.lastIndex,o===P?"!--"===c[1]?o=T:void 0!==c[1]?o=N:void 0!==c[2]?(H.test(c[2])&&(r=RegExp("</"+c[2],"g")),o=U):void 0!==c[3]&&(o=U):o===U?">"===c[0]?(o=r??P,d=-1):void 0===c[1]?d=-2:(d=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?U:'"'===c[3]?R:V):o===R||o===V?o=U:o===T||o===N?o=P:(o=U,r=void 0);const h=o===U&&t[e+1].startsWith("/>")?" ":"";n+=o===P?i+A:d>=0?(s.push(a),i.slice(0,d)+k+i.slice(d)+E+h):i+E+(-2===d?e:h)}return[W(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class G{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[c,d]=J(t,e);if(this.el=G.createElement(c,i),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Z.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(k)){const e=d[n++],i=s.getAttribute(t).split(E),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?Y:"?"===o[1]?tt:"@"===o[1]?et:X}),s.removeAttribute(t)}else t.startsWith(E)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(H.test(s.tagName)){const t=s.textContent.split(E),e=t.length-1;if(e>0){s.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],M()),Z.nextNode(),a.push({type:2,index:++r});s.append(t[e],M())}}}else if(8===s.nodeType)if(s.data===C)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(E,t+1));)a.push({type:7,index:r}),t+=E.length-1}r++}}static createElement(t,e){const i=j.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,s){if(e===I)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=O(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=K(t,r._$AS(t,e.values),r,s)),e}class F{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??j).importNode(e,!0);Z.currentNode=s;let r=Z.nextNode(),n=0,o=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Q(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new it(r,this,t)),this._$AV.push(e),a=i[++o]}n!==a?.index&&(r=Z.nextNode(),n++)}return Z.currentNode=j,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),O(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==I&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>q(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==L&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(j.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(W(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new F(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new G(t)),e}k(t){q(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new Q(this.O(M()),this.O(M()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=K(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==I,n&&(this._$AH=t);else{const s=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=K(this,s[i+o],e,o),a===I&&(a=this._$AH[o]),n||=!O(a)||a!==this._$AH[o],a===L?t=L:t!==L&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Y extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}class tt extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==L)}}class et extends X{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??L)===I)return;const i=this._$AH,s=t===L&&i!==L||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==L&&(i===L||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const st=w.litHtmlPolyfillSupport;st?.(G,Q),(w.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class rt extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new Q(e.insertBefore(M(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}}rt._$litElement$=!0,rt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:rt});const nt=globalThis.litElementPolyfillSupport;nt?.({LitElement:rt}),(globalThis.litElementVersions??=[]).push("4.1.1");const ot=n`
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
		
	`;let at={en:{disabled:"disabled",sleeping:"disabled",active:"active",charging:"charging","not connected":"waiting",connected:"connected",error:"error",power:"power",current:"current",session:"session",elapsed:"elapsed","charge rate":"charge rate",required_entities:"Required entities",entity_auto_success:"All required entities were automatically found",entity_auto_fail:"Some entities could not be automatically detected",entity_auto_loading:"Loading device entities","additional entities":"Additional entities"},fr:{disabled:"désactivé",sleeping:"désactivé",active:"activé",charging:"en charge","not connected":"en attente",connected:"connecté",error:"erreur",power:"puissance",current:"courant",session:"session",elapsed:"écoulé","charge rate":"ampérage",required_entities:"Entités requises",entity_auto_success:"Toutes les entités ont été trouvées automatiquement",entity_auto_fail:"certaines entités n'ont pas pu être détectées automatiquement",entity_auto_loading:"Chargement des entités de l'appareil","additional entities":"Entités supplémentaires"},de:{disabled:"deaktiviert",sleeping:"deaktiviert",active:"aktiv",charging:"lädt","not connected":"bereit",connected:"verbunden",error:"fehler",power:"leistung",current:"stromstärke",session:"sitzung",elapsed:"verstrichene zeit","charge rate":"laderate",required_entities:"Erforderliche Entitäten",entity_auto_success:"Alle erforderlichen Entitäten wurden automatisch gefunden",entity_auto_fail:"Einige Entitäten konnten nicht automatisch erkannt werden",entity_auto_loading:"Geräteentitäten werden geladen","additional entities":"Zusätzliche Entitäten"},es:{disabled:"desactivado",sleeping:"desactivado",active:"activo",charging:"cargando","not connected":"en espera",connected:"conectado",error:"error",power:"potencia",current:"corriente",session:"sesión",elapsed:"tiempo transcurrido","charge rate":"amperaje",required_entities:"Entidades requeridas",entity_auto_success:"Todas las entidades requeridas se encontraron automáticamente",entity_auto_fail:"Algunas entidades no pudieron ser detectadas automáticamente",entity_auto_loading:"Cargando entidades del dispositivo","additional entities":"Entidades adicionales"}};var ct=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function dt(t,e){if(t.length!==e.length)return!1;for(var i=0;i<t.length;i++)if(s=t[i],r=e[i],!(s===r||ct(s)&&ct(r)))return!1;var s,r;return!0}function lt(t,e){void 0===e&&(e=dt);var i=null;function s(){for(var s=[],r=0;r<arguments.length;r++)s[r]=arguments[r];if(i&&i.lastThis===this&&e(s,i.lastArgs))return i.lastResult;var n=t.apply(this,s);return i={lastResult:n,lastArgs:s,lastThis:this},n}return s.clear=function(){i=null},s}const ht=lt((()=>[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}},required:!1,label:"Header Title"},{name:"header",selector:{boolean:{}},label:"Display header"}]},{name:"device_id",selector:{device:{integration:"openevse",manufacturer:"OpenEVSE"}},label:"OpenEVSE Device",helper_text:"Select your OpenEVSE device to automatically populate all entities",required:!0},{name:"override_entity",selector:{entity:{domain:["input_select","select"]}},label:"Override State",helper_text:"Select openevse.override_state entity",required:!0},{name:"status_entity",selector:{entity:{domain:["sensor"]}},label:"Station Status",helper_text:"Select openevse.station_status entity",required:!0},{name:"power_entity",selector:{entity:{domain:["sensor"]}},label:"Current power usage",helper_text:"Select openevse.current_power_usage entity",required:!0},{name:"current_entity",selector:{entity:{domain:["sensor"]}},label:"Charging current",helper_text:"Select openevse.charging_current entity",required:!0},{name:"vehicle_connected_entity",selector:{entity:{domain:["binary_sensor"]}},label:"Vehicle Connected",helper_text:"Select openevse.vehicle_connected entity",required:!0},{name:"charging_status_entity",selector:{entity:{domain:["sensor"]}},label:"Charging status",helper_text:"Select openevse.charging_status entity",required:!0},{name:"charge_rate_entity",selector:{entity:{domain:["number"]}},label:"Charge Rate",helper_text:"Select openevse.charge_rate entity",required:!0},{name:"session_energy_entity",selector:{entity:{domain:["sensor"]}},label:"Session Energy",helper_text:"Select openevse.usage_this_session entity",required:!0},{name:"time_elapsed_entity",selector:{entity:{domain:["sensor"]}},label:"Time Elapsed Seconds",helper_text:"Select openevse.time_elapsed_seconds entity",required:!0}])),ut=lt((()=>[{name:"id",selector:{entity:{domain:["sensor","binary_sensor"]}},label:"Entity"},{name:"name",selector:{text:{}},label:"Name"},{name:"icon",selector:{icon:{}},label:"Icon"}]));customElements.define("openevse-card",class extends rt{static get properties(){return{hass:{type:Object},config:{type:Object},_sliderValue:{type:Number},_dragging:{type:Boolean},_lang:{type:String}}}constructor(){super(),this._sliderValue=void 0,this._dragging=!1,this._translations=at}firstUpdated(){this._lang=this.hass?.language||"en"}updated(t){t.has("hass")&&this.hass&&(this._lang=this.hass.language||"en")}static getConfigElement(){return document.createElement("openevse-card-editor")}static getStubConfig(){return{header:!0,name:"OpenEVSE",device_id:"",override_entity:"",status_entity:"",power_entity:"",current_entity:"",charge_rate_entity:"",vehicleConnectedEntity:"",charging_status_entity:"",session_energy_entity:"",time_elapsed_entity:"",optional_entities:[]}}static get styles(){return ot}setConfig(t){this.config=t}getCardSize(){return 3}_callService(t,e){this.hass.callService("select","select_option",{entity_id:t,option:e.toString()})}_showMoreInfo(t){const e=new Event("hass-more-info",{bubbles:!0,composed:!0});e.detail={entityId:t},this.dispatchEvent(e)}_handleSliderStart(t){this.hass.states[this.config.charge_rate_entity]&&(this._dragging=!0,this._updateSliderValue(t),this.addEventListener("mousemove",this._handleSliderMove),this.addEventListener("touchmove",this._handleSliderMove),this.addEventListener("mouseup",this._handleSliderEnd),this.addEventListener("mouseout",this._handleSliderEnd),this.addEventListener("touchend",this._handleSliderEnd))}_handleSliderMove=t=>{this._dragging&&this._updateSliderValue(t)};_handleSliderEnd=t=>{this._dragging&&(this.removeEventListener("mousemove",this._handleSliderMove),this.removeEventListener("touchmove",this._handleSliderMove),this.removeEventListener("mouseup",this._handleSliderEnd),this.removeEventListener("mouseout",this._handleSliderEnd),this.removeEventListener("touchend",this._handleSliderEnd),this.hass.callService("number","set_value",{entity_id:this.config.charge_rate_entity,value:this._sliderValue}),setTimeout((()=>this._dragging=!1),2e3))};_updateSliderValue(t){const e=this.hass.states[this.config.charge_rate_entity];if(!e)return;const i=this.shadowRoot.querySelector(".slider-wrapper").getBoundingClientRect(),s=e?.attributes.min||6,r=e?.attributes.max||32,n=e?.attributes.step||1;let o;o=t.type.startsWith("touch")?t.touches[0].clientX:t.clientX;let a=(o-i.left)/i.width;a=Math.min(Math.max(a,0),1);let c=s+a*(r-s);c=Math.round(c/n)*n,c=Math.min(Math.max(c,s),r),this._sliderValue=Number(c.toFixed(2)),this.requestUpdate()}_convertSeconds(t){if(isNaN(t)||t<0)return"00:00:00";return[Math.floor(t/3600),Math.floor(t%3600/60),t%60].map((t=>String(t).padStart(2,"0"))).join(":")}_t(t){const e=this._lang||"en";return this._translations[e]?.[t]||this._translations.en?.[t]||t}render(){if(!this.hass||!this.config)return D``;const t=this.config.override_entity?this.hass.states[this.config.override_entity]:null,e=this.config.status_entity?this.hass.states[this.config.status_entity]:null,i=this.config.power_entity?this.hass.states[this.config.power_entity]:null,s=this.config.current_entity?this.hass.states[this.config.current_entity]:null,r=this.config.charge_rate_entity?this.hass.states[this.config.charge_rate_entity]:null,n=this.config.vehicle_connected_entity?this.hass.states[this.config.vehicle_connected_entity]:null,o=this.config.charging_status_entity?this.hass.states[this.config.charging_status_entity]:null,a=this.config.session_energy_entity?this.hass.states[this.config.session_energy_entity]:null,c=this.config.time_elapsed_entity?this.hass.states[this.config.time_elapsed_entity]:null,d=(()=>this.config.optional_entities?.map((t=>({name:t.name?t.name:this.hass.states[t.id]?.attributes.friendly_name,value:t.id?this.hass.formatEntityState(this.hass.states[t.id]):null,icon:t.icon,id:t.id?t.id:null})))??[])(),l=r?.attributes.min||0,h=r?.attributes.max||100,u=this._dragging?this._sliderValue:Number(r?.state),p=(u-l)/(h-l)*100;return D`
            <ha-card>
            ${this.config.header?D`<h1 class="card-header">
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
                        icon="${"active"==e?.state?"mdi:lightning-bolt":"mdi:cancel"}"
                        class="${"active"==e?.state?"charging"==o?.state?"charging":"active":"disabled"}"
                    ></ha-icon>
                    </div>
                    <div
                    class="status-icon clickable"
                    @click=${()=>this._showMoreInfo(this.config.vehicle_connected_entity)}
                    >
                    <ha-icon
                        icon="${"off"==n?.state?"mdi:car-off":"mdi:car"}"
                        class="${"off"==n?.state?"disabled":"active"}"
                    ></ha-icon>
                    </div>
                </div>
                <div class="status-heading">
                    <div
                        class="status-badge ${"error"==o?.state?"badge-error":"disabled"==e?.state?"badge-disabled":"charging"==o?.state?"badge-charging":"badge-active"}"
                    >
                     ${this._t(o?.state)}
                    </div>
                </div>
                </div>
                <div class="grid-container">
                ${i?D`
                      <div class="grid-item">
                          <div class="grid-item-label"> ${this._t("power")}</div>
                          <div
                          class="grid-item-value current-value clickable"
                          @click=${()=>this._showMoreInfo(this.config.power_entity)}
                          >
                          ${i?this.hass.formatEntityState(i):null}
                          </div>
                      </div>
                      `:""}
                ${s?D`
                      <div class="grid-item">
                          <div class="grid-item-label">${this._t("current")}</div>
                          <div
                          class="grid-item-value current-value clickable"
                          @click=${()=>this._showMoreInfo(this.config.current_entity)}
                          >
                          ${s?this.hass.formatEntityState(s):null}
                          </div>
                      </div>
                      `:""}
                ${a?D`
                      <div class="grid-item">
                          <div class="grid-item-label">${this._t("session")}</div>
                          <div
                          class="grid-item-value current-value clickable"
                          @click=${()=>this._showMoreInfo(this.config.session_energy_entity)}
                          >
                          ${a?this.hass.formatEntityState(a):null}
                          </div>
                      </div>
                      `:""}
                ${c?D`
                      <div class="grid-item">
                          <div class="grid-item-label">${this._t("elapsed")}</div>
                          <div
                          class="grid-item-value current-value"
                          >
                          ${c?this._convertSeconds(c.state):"00:00:00"}
                          </div>
                      </div>
                      `:""}
                </div>
                <div class="override-controls">
                <div class="override-row">
                    <div
                    class="override-button ${"active"==t?.state?"active":""}"
                    data-option="active"
                    @click=${()=>this._callService(this.config.override_entity,"active")}
                    >
                    <ha-icon
                        icon="mdi:lightning-bolt"
                        class="${"active"==t?.state&&"charging"==o?.state?"charging":""}"
                    ></ha-icon>
                    </div>
                    <div
                    class="override-button ${"auto"==t?.state?"active":""}"
                    data-option="auto"
                    @click=${()=>this._callService(this.config.override_entity,"auto")}
                    >
                    <ha-icon
                        icon="mdi:robot"
                        class="${"auto"==t?.state&&"charging"==o?.state?"charging":""}"
                    ></ha-icon>
                    </div>
                    <div
                    class="override-button ${"disabled"==t?.state?"active":""}"
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
                    ${v=u,(r?.attributes.step||1)<1?v.toFixed(1):v.toFixed(0)}
                    ${r?.attributes.unit_of_measurement||""}
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
                ${d?.map((t=>D`
                    <div class="other-entities-container">
                    <div class="entity-row">
                        <div class="entity-title">
                        ${null!=t.icon?D`
                              <div class="entity-icon">
                                  <ha-icon
                                  icon=${t.icon}
                                  ></ha-icon>
                              </div>
                              `:D`
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
        `;var v}}),customElements.define("openevse-card-editor",class extends rt{static get properties(){return{hass:{type:Object},config:{type:Object},_lang:{type:String},_deviceIdChanged:{type:Boolean}}}static get styles(){return n`
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
        `}constructor(){super(),this.config={},this.optionalEntities=[],this.openEVSEEntities={},this.deviceEntitiesLoaded=!1,this._translations=at,this._deviceIdChanged=!1}async firstUpdated(){try{await(async()=>{if(customElements.get("ha-form")&&customElements.get("ha-selector")&&customElements.get("ha-textfield")&&customElements.get("ha-icon-picker")&&customElements.get("ha-icon-button")&&customElements.get("ha-entity-picker"))return;await customElements.whenDefined("partial-panel-resolver");const t=document.createElement("partial-panel-resolver");t.hass={panels:[{url_path:"tmp",component_name:"config"}]},t._updateRoutes(),await t.routerOptions.routes.tmp.load(),await customElements.whenDefined("ha-panel-config");const e=document.createElement("ha-panel-config");await e.routerOptions.routes.automation.load()})()}catch(t){console.error("Error loading ha-form:",t)}this._lang=this.hass?.language||"en"}setConfig(t){this.config=t,this.optionalEntities=t.optional_entities||[],t.device_id&&this.hass&&!this.deviceEntitiesLoaded&&this._loadDeviceEntities(t.device_id)}_isEntityConfigured(t){return this.config[t]&&this.config[t].length>0}async _loadDeviceEntities(t){if(!t||!this.hass)return;const e={},i=Object.values(this.hass.entities||{}).filter((e=>e.device_id===t)),s={override_entity:{names:["override_state"],domains:["select"],preferredPattern:"select.openevse_override_state"},status_entity:{names:["station_status"],domains:["sensor"],preferredPattern:"sensor.openevse_station_status"},power_entity:{names:["current_power_usage","power_usage"],domains:["sensor"],preferredPattern:"sensor.openevse_current_power_usage"},current_entity:{names:["charging_current","current"],domains:["sensor"],preferredPattern:"sensor.openevse_charging_current"},vehicle_connected_entity:{names:["vehicle_connected"],domains:["binary_sensor"],preferredPattern:"binary_sensor.openevse_vehicle_connected"},charging_status_entity:{names:["charging_status"],domains:["sensor"],preferredPattern:"sensor.openevse_charging_status"},charge_rate_entity:{names:["charge_rate"],domains:["number"],preferredPattern:"number.openevse_charge_rate"},session_energy_entity:{names:["usage_this_session"],domains:["sensor"],preferredPattern:"sensor.openevse_usage_this_session"},time_elapsed_entity:{names:["time_elapsed","seconds"],domains:["sensor"],preferredPattern:"sensor.openevse_time_elapsed"}};for(const[t,r]of Object.entries(s)){if(this._isEntityConfigured(t)&&!this._deviceIdChanged)continue;const{names:s,domains:n,preferredPattern:o}=r;let a=i.find((t=>t.entity_id.toLowerCase()===o.toLowerCase()));a||(a=i.find((t=>{const e=t.entity_id.toLowerCase(),i=e.split(".")[0];return!!n.includes(i)&&s.some((i=>e.includes(i.toLowerCase())||t.original_name&&t.original_name.toLowerCase().includes(i.toLowerCase())))}))),a&&(e[t]=a.entity_id)}this.openEVSEEntities=e,this.deviceEntitiesLoaded=!0;const r={...this.config};for(const[t,i]of Object.entries(e))this._isEntityConfigured(t)&&!this._deviceIdChanged||(r[t]=i);this._deviceIdChanged=!1,this.config=r,this._fireConfigChanged(r),this.requestUpdate()}_handleConfigChange(t){const e=t.detail.value;e.device_id!==this.config.device_id?(this._deviceIdChanged=!0,this.deviceEntitiesLoaded=!1,this.config={...this.config,...e},this._loadDeviceEntities(e.device_id)):this._dispatchConfigChanged(e)}_dispatchConfigChanged(t){const e={...t,optional_entities:this.optionalEntities};this.config=e,this._fireConfigChanged(e)}_fireConfigChanged(t){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t}}))}_addOptionalEntity(t){const e=t.target.value;e&&!this.optionalEntities.some((t=>t.id===e))&&(this.optionalEntities=[...this.optionalEntities,{id:e,name:null,icon:null}],this._fireConfigChanged({...this.config,optional_entities:this.optionalEntities}),this._entityPickerKey++,this.requestUpdate())}_removeEntity(t){this.optionalEntities=this.optionalEntities.filter(((e,i)=>i!==t)),this._fireConfigChanged({...this.config,optional_entities:this.optionalEntities})}_updateOptionalEntity(t,e){const i={...this.optionalEntities[t]};for(const t in e)""===e[t]||void 0===e[t]?i[t]=null:i[t]=e[t];this.optionalEntities=this.optionalEntities.map(((e,s)=>s===t?i:e)),this._fireConfigChanged({...this.config,optional_entities:this.optionalEntities})}_getMissingEntities(){return["override_entity","status_entity","power_entity","current_entity","vehicle_connected_entity","charging_status_entity","charge_rate_entity","session_energy_entity","time_elapsed_entity"].filter((t=>{const e=this.config[t]&&this.config[t].length>0,i=this.openEVSEEntities[t]&&this.openEVSEEntities[t].length>0;return!e&&!i}))}_t(t){const e=this._lang||"en";return this._translations[e]?.[t]||this._translations.en?.[t]||t}render(){if(!this.hass)return D``;const t=ht(),e=ut(),i=this._getMissingEntities();return console.log("Current config:",this.config),console.log("Detected entities:",this.openEVSEEntities),D`
        <!-- Auto-detection status -->
                ${this.config.device_id?D`
                    <div class="entity-section">
                        <h3>${this._t("required_entities")}</h3>
                        ${this.deviceEntitiesLoaded?D`
                            <div class="entity-status ${i.length>0?"warning":"success"}">
                                ${0===i.length?this._t("entity_auto_success")+"!":this._t("entity_auto_fail")+": "+i.join(", ")}
                            </div>
                        `:D`
                            <div class="entity-status">
                                ${this._t("entity_auto_loading")}
                            </div>
                        `}
                    </div>
                `:""}
                
            <div class="form-container">
                <!-- Main configuration -->
                <ha-form
                    .hass=${this.hass}
                    .data=${this.config}
                    .schema=${t}
                    .computeLabel=${t=>t.label||t.name}
                    .computeHelper=${t=>t.helper_text}
                    @value-changed=${this._handleConfigChange}
                ></ha-form>
                
                
                <!-- Additional entities -->
                <div class="entities">
                    <h3> ${this._t("additional entities")}</h3>
                    
                    ${this.optionalEntities?.map(((t,i)=>D`
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
