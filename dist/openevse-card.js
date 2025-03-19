/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let r=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new r(s,t,i)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:n,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:l,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,v=globalThis,p=v.trustedTypes,g=p?p.emptyScript:"",f=v.reactiveElementPolyfillSupport,b=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!n(t,e),$={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const o=s?.call(this);r.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...l(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of s){const s=document.createElement("style"),r=t.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:m).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=s,this[s]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??y)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[b("elementProperties")]=new Map,w[b("finalized")]=new Map,f?.({ReactiveElement:w}),(v.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,_=x.trustedTypes,k=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+E,A=`<${C}>`,j=document,M=()=>j.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,O="[ \t\n\f\r]",V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,N=/>/g,T=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,D=/"/g,I=/^(?:script|style|textarea|title)$/i,q=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),H=new WeakMap,W=j.createTreeWalker(j,129);function J(t,e){if(!P(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":3===e?"<math>":"",a=V;for(let e=0;e<i;e++){const i=t[e];let n,c,h=-1,l=0;for(;l<i.length&&(a.lastIndex=l,c=a.exec(i),null!==c);)l=a.lastIndex,a===V?"!--"===c[1]?a=U:void 0!==c[1]?a=N:void 0!==c[2]?(I.test(c[2])&&(r=RegExp("</"+c[2],"g")),a=T):void 0!==c[3]&&(a=T):a===T?">"===c[0]?(a=r??V,h=-1):void 0===c[1]?h=-2:(h=a.lastIndex-c[2].length,n=c[1],a=void 0===c[3]?T:'"'===c[3]?D:R):a===D||a===R?a=T:a===U||a===N?a=V:(a=T,r=void 0);const d=a===T&&t[e+1].startsWith("/>")?" ":"";o+=a===V?i+A:h>=0?(s.push(n),i.slice(0,h)+S+i.slice(h)+E+d):i+E+(-2===h?e:d)}return[J(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const a=t.length-1,n=this.parts,[c,h]=Z(t,e);if(this.el=K.createElement(c,i),W.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=W.nextNode())&&n.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(S)){const e=h[o++],i=s.getAttribute(t).split(E),a=/([.?@])?(.*)/.exec(e);n.push({type:1,index:r,name:a[2],strings:i,ctor:"."===a[1]?Y:"?"===a[1]?tt:"@"===a[1]?et:X}),s.removeAttribute(t)}else t.startsWith(E)&&(n.push({type:6,index:r}),s.removeAttribute(t));if(I.test(s.tagName)){const t=s.textContent.split(E),e=t.length-1;if(e>0){s.textContent=_?_.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],M()),W.nextNode(),n.push({type:2,index:++r});s.append(t[e],M())}}}else if(8===s.nodeType)if(s.data===C)n.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(E,t+1));)n.push({type:7,index:r}),t+=E.length-1}r++}}static createElement(t,e){const i=j.createElement("template");return i.innerHTML=t,i}}function F(t,e,i=t,s){if(e===B)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const o=z(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=F(t,r._$AS(t,e.values),r,s)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??j).importNode(e,!0);W.currentNode=s;let r=W.nextNode(),o=0,a=0,n=i[0];for(;void 0!==n;){if(o===n.index){let e;2===n.type?e=new Q(r,r.nextSibling,this,t):1===n.type?e=new n.ctor(r,n.name,n.strings,this,t):6===n.type&&(e=new it(r,this,t)),this._$AV.push(e),n=i[++a]}o!==n?.index&&(r=W.nextNode(),o++)}return W.currentNode=j,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=F(this,t,e),z(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>P(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==L&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(j.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new G(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=H.get(t.strings);return void 0===e&&H.set(t.strings,e=new K(t)),e}k(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new Q(this.O(M()),this.O(M()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=F(this,t,e,0),o=!z(t)||t!==this._$AH&&t!==B,o&&(this._$AH=t);else{const s=t;let a,n;for(t=r[0],a=0;a<r.length-1;a++)n=F(this,s[i+a],e,a),n===B&&(n=this._$AH[a]),o||=!z(n)||n!==this._$AH[a],n===L?t=L:t!==L&&(t+=(n??"")+r[a+1]),this._$AH[a]=n}o&&!s&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Y extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}class tt extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==L)}}class et extends X{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=F(this,t,e,0)??L)===B)return;const i=this._$AH,s=t===L&&i!==L||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==L&&(i===L||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}}const st=x.litHtmlPolyfillSupport;st?.(K,Q),(x.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class rt extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new Q(e.insertBefore(M(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}rt._$litElement$=!0,rt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:rt});const ot=globalThis.litElementPolyfillSupport;ot?.({LitElement:rt}),(globalThis.litElementVersions??=[]).push("4.1.1");const at=o`
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
			var: (--evse-disabled-color);
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
		
	`;let nt={en:{disabled:"disabled",sleeping:"disabled",active:"active",charging:"charging","not connected":"waiting",error:"error",power:"power",current:"current",session:"session",elapsed:"elapsed","charge rate":"charge rate"},fr:{disabled:"désactivé",sleeping:"désactivé",active:"activé",charging:"en charge","not connected":"en attente",error:"erreur",power:"puissance",current:"courant",session:"session",elapsed:"écoulé","charge rate":"ampérage"},de:{disabled:"deaktiviert",sleeping:"deaktiviert",active:"aktiv",charging:"lädt","not connected":"bereit",error:"fehler",power:"leistung",current:"stromstärke",session:"sitzung",elapsed:"verstrichene zeit","charge rate":"laderate"},es:{disabled:"desactivado",sleeping:"desactivado",active:"activo",charging:"cargando","not connected":"en espera",error:"error",power:"potencia",current:"corriente",session:"sesión",elapsed:"tiempo transcurrido","charge rate":"amperaje"}};customElements.define("openevse-card",class extends rt{static get properties(){return{hass:{type:Object},config:{type:Object},_sliderValue:{type:Number},_dragging:{type:Boolean},_lang:{type:String}}}constructor(){super(),this._sliderValue=void 0,this._dragging=!1,this._translations=nt}firstUpdated(){this._lang=this.hass?.language||"en"}updated(t){t.has("hass")&&this.hass&&(this._lang=this.hass.language||"en")}static getConfigElement(){return document.createElement("openevse-card-editor")}static getStubConfig(){return{header:!0,name:"Custom Card",override_entity:"",status_entity:"",power_entity:"",current_entity:"",charge_rate_entity:"",vehicleConnectedEntity:"",charging_status_entity:"",session_energy_entity:"",time_elapsed_entity:"",optional_entities:[]}}static get styles(){return at}setConfig(t){if(!t.override_entity)throw new Error("Please define an override entity (select)");if(!t.status_entity)throw new Error("Please define a status entity (sensor)");if(!t.charge_rate_entity)throw new Error("Please define a charge_rate entity (number)");if(!t.vehicle_connected_entity)throw new Error("Please define a vehicle_connected entity (binary_sensor)");if(!t.current_entity)throw new Error("Please define a current entity (sensor)");this.config=t}getCardSize(){return 3}_callService(t,e){this.hass.callService("select","select_option",{entity_id:t,option:e.toString()})}_showMoreInfo(t){const e=new Event("hass-more-info",{bubbles:!0,composed:!0});e.detail={entityId:t},this.dispatchEvent(e)}_handleSliderStart(t){this.hass.states[this.config.charge_rate_entity]&&(this._dragging=!0,this._updateSliderValue(t),this.addEventListener("mousemove",this._handleSliderMove),this.addEventListener("touchmove",this._handleSliderMove,{passive:!1}),this.addEventListener("mouseup",this._handleSliderEnd),this.addEventListener("mouseout",this._handleSliderEnd),this.addEventListener("touchend",this._handleSliderEnd),t.preventDefault())}_handleSliderMove=t=>{this._dragging&&(this._updateSliderValue(t),t.preventDefault())};_handleSliderEnd=t=>{this._dragging&&(this.removeEventListener("mousemove",this._handleSliderMove),this.removeEventListener("touchmove",this._handleSliderMove),this.removeEventListener("mouseup",this._handleSliderEnd),this.removeEventListener("mouseout",this._handleSliderEnd),this.removeEventListener("touchend",this._handleSliderEnd),this.hass.callService("number","set_value",{entity_id:this.config.charge_rate_entity,value:this._sliderValue}),setTimeout((()=>this._dragging=!1),2e3))};_updateSliderValue(t){const e=this.hass.states[this.config.charge_rate_entity];if(!e)return;const i=this.shadowRoot.querySelector(".slider-wrapper").getBoundingClientRect(),s=e.attributes.min||6,r=e.attributes.max||32,o=e.attributes.step||1;let a;a=t.type.startsWith("touch")?t.touches[0].clientX:t.clientX;let n=(a-i.left)/i.width;n=Math.min(Math.max(n,0),1);let c=s+n*(r-s);c=Math.round(c/o)*o,c=Math.min(Math.max(c,s),r),this._sliderValue=Number(c.toFixed(2)),this.requestUpdate()}_convertSeconds=t=>("0"+Math.floor(t/3600)).slice(-2)+":"+("0"+Math.floor(t%3600/60)).slice(-2)+":"+("0"+t%60).slice(-2);_t(t){const e=this._lang||"en";return this._translations[e]?.[t]||this._translations.en?.[t]||t}render(){if(!this.hass||!this.config)return q``;const t=this.hass.states[this.config.override_entity],e=this.hass.states[this.config.status_entity],i=this.config.power_entity?this.hass.states[this.config.power_entity]:null,s=this.config.current_entity?this.hass.states[this.config.current_entity]:null,r=this.hass.states[this.config.charge_rate_entity],o=this.hass.states[this.config.vehicle_connected_entity],a=this.hass.states[this.config.charging_status_entity],n=this.hass.states[this.config.session_energy_entity],c=this.hass.states[this.config.time_elapsed_entity],h=(()=>this.config.optional_entities?.map((t=>({name:t.name?t.name:this.hass.states[t.id].attributes.friendly_name,value:this.hass.formatEntityState(this.hass.states[t.id]),icon:t.icon,id:t.id})))??[])();if(!(t&&e&&r&&o))return q`
                <ha-card>
                    <div class="card-content">
                        Entity not found:
                        ${t?"":this.config.override_entity}
                        ${e?"":this.config.status_entity}
                        ${r?"":this.config.charge_rate_entity}
                        ${o?"":this.config.vehicle_connected_entity}
                        ${s?"":this.config.current_entity}
                    </div>
                </ha-card>
            `;const l=r.attributes.min||0,d=r.attributes.max||100,u=this._dragging?this._sliderValue:Number(r.state),v=(u-l)/(d-l)*100;return q`
            <ha-card>
                ${this.config.header?q`<h1 class="card-header">
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
                                    class="${"active"==e.state?"charging"==a?"charging":"active":"disabled"}"
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
                                class="status-badge ${"error"==a.state?"badge-error":"disabled"==e.state?"badge-disabled":"charging"==a.state?"badge-charging":"badge-active"}"
                            >
                                 ${this._t(a.state)}
                            </div>
                        </div>
                    </div>
                    <div class="grid-container">
                        ${i?q`
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
                        ${s?q`
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
                        ${n?q`
                                  <div class="grid-item">
                                      <div class="grid-item-label">${this._t("session")}</div>
                                      <div
                                          class="grid-item-value current-value clickable"
                                          @click=${()=>this._showMoreInfo(this.config.session_energy_entity)}
                                      >
                                          ${this.hass.formatEntityState(n)}
                                      </div>
                                  </div>
                              `:""}
                        ${c?q`
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
                                    class="${"active"==t.state&&"charging"==a.state?"charging":""}"
                                ></ha-icon>
                            </div>
                            <div
                                class="override-button ${"auto"==t.state?"active":""}"
                                data-option="auto"
                                @click=${()=>this._callService(this.config.override_entity,"auto")}
                            >
                                <ha-icon
                                    icon="mdi:robot"
                                    class="${"auto"==t.state&&"charging"==a.state?"charging":""}"
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
                            ${p=u,(r.attributes.step||1)<1?p.toFixed(1):p.toFixed(0)}
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
                                    style="width: ${v}%"
                                ></div>
                                <div
                                    class="slider-knob"
                                    style="left: calc(${v}% - 16px)"
                                ></div>
                            </div>
                        </div>
                    </div>
                    ${h.map((t=>q`
                            <div class="other-entities-container">
                                <div class="entity-row">
                                    <div class="entity-title">
                                        ${null!=t.icon?q`
                                                  <div class="entity-icon">
                                                      <ha-icon
                                                          icon=${t.icon}
                                                      ></ha-icon>
                                                  </div>
                                              `:q`
                                                  <div
                                                      class="entity-icon"
                                                  ></div>
                                              `}

                                        <div class="entity-label">
                                            ${t.name}
                                        </div>
                                    </div>
                                    <div
                                        class="entity-value clickable"
                                        @click=${()=>this._showMoreInfo(t.id)}
                                    >
                                        ${t.value}
                                    </div>
                                </div>
                            </div>
                        `))}
                </div>
            </ha-card>
        `;var p}}),customElements.define("openevse-card-editor",class extends rt{static get properties(){return{hass:{type:Object},config:{type:Object}}}firstUpdated(){(async()=>{await(async()=>{if(customElements.get("ha-selector")&&customElements.get("ha-textfield")&&customElements.get("ha-icon-picker")&&customElements.get("ha-entity-picker"))return;await customElements.whenDefined("partial-panel-resolver");const t=document.createElement("partial-panel-resolver");t.hass={panels:[{url_path:"tmp",component_name:"config"}]},t._updateRoutes(),await t.routerOptions.routes.tmp.load(),await customElements.whenDefined("ha-panel-config");const e=document.createElement("ha-panel-config");await e.routerOptions.routes.automation.load()})()})()}static get styles(){return o`
            .form-container {
                display: flex;
                flex-direction: column;
            }
            .row {
                padding: 8px 0;
                margin-bottom: 8px;
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
            .ha-form-selector {
                width: 100%;
                margin-bottom: 8px;
            }
            .entity-name {
                margin-bottom: 8px;
            }

            .entity-row label {
                display: flex;
                align-items: center;
                gap: 4px;
            }
            .remove-button {
                display: flex;
                justify-content: flex-end;
            }
            .add-entity {
                margin-top: 8px;
            }
        `}setConfig(t){this.config=t,this.optionalEntities=t.optional_entities||[]}_handleEntitySelection(t){const e=t.target.value;e&&!this.optionalEntities.some((t=>t.id===e))&&(this.optionalEntities=[...this.optionalEntities,{id:e,name:null,icon:null}],this._updateConfig())}_editDetailElement(t){this._subElementEditorConfig=t.detail.subElementConfig}_updateConfig(){const t=new CustomEvent("config-changed",{detail:{config:{...this.config,optional_entities:this.optionalEntities}}});this.dispatchEvent(t)}_removeEntity(t){this.optionalEntities=this.optionalEntities.filter(((e,i)=>i!==t)),this._updateConfig()}_updateEntity(t,e,i){this.optionalEntities[t]={...this.optionalEntities[t],[e]:i},this._updateConfig()}_valueChanged(t){if(!this.config||!this.hass)return;const e=t.target,i=t.detail?.value||t.target.value,s=e.configValue;if(this.config[s]===i)return;const r={...this.config,[s]:void 0!==e.checked?e.checked:i},o=new CustomEvent("config-changed",{detail:{config:r}});this.dispatchEvent(o)}render(){return this.hass&&this.config?q`
            <div class="form-container">
                <div class="row">
                    <ha-switch
                        .checked=${!1!==this.config.header}
                        .configValue=${"header"}
                        @change=${this._valueChanged}
                    ></ha-switch>
                    <span>Show Header</span>
                </div>

                <div class="row">
                    ${!1!==this.config.header?q`
                              <ha-textfield
                                  label="Card Name"
                                  .value=${this.config.name||""}
                                  .configValue=${"name"}
                                  @input=${this._valueChanged}
                              ></ha-textfield>
                          `:""}
                </div>
                <div class="row">
                    <ha-selector
                        .hass=${this.hass}
                        .selector=${{entity:{domain:["input_select","select"]}}}
                        .value=${this.config.override_entity||""}
                        .configValue=${"override_entity"}
                        @value-changed=${this._valueChanged}
                        label="Override State Entity (Select)"
                        required
                    ></ha-selector>
                </div>
                <div class="row">
                    <ha-selector
                        .hass=${this.hass}
                        .selector=${{entity:{domain:["sensor"]}}}
                        .value=${this.config.status_entity||""}
                        .configValue=${"status_entity"}
                        @value-changed=${this._valueChanged}
                        label="Status Entity (Sensor)"
                        required
                    ></ha-selector>
                </div>
                <div class="row">
                    <ha-selector
                        .hass=${this.hass}
                        .selector=${{entity:{domain:["sensor"]}}}
                        .value=${this.config.power_entity||""}
                        .configValue=${"power_entity"}
                        @value-changed=${this._valueChanged}
                        label="Power Entity (Sensor, optional)"
                    ></ha-selector>
                </div>
                <div class="row">
                    <ha-selector
                        .hass=${this.hass}
                        .selector=${{entity:{domain:["sensor"]}}}
                        .value=${this.config.current_entity||""}
                        .configValue=${"current_entity"}
                        @value-changed=${this._valueChanged}
                        label="Current Entity (Sensor)"
                    ></ha-selector>
                </div>
                <div class="row">
                    <ha-selector
                        .hass=${this.hass}
                        .selector=${{entity:{domain:["binary_sensor"]}}}
                        .value=${this.config.vehicle_connected_entity||""}
                        .configValue=${"vehicle_connected_entity"}
                        @value-changed=${this._valueChanged}
                        label="Vehicle Connected Entity (Binary Sensor)"
                    ></ha-selector>
                </div>
                <div class="row">
                    <ha-selector
                        .hass=${this.hass}
                        .selector=${{entity:{domain:["sensor"]}}}
                        .value=${this.config.charging_status_entity||""}
                        .configValue=${"charging_status_entity"}
                        @value-changed=${this._valueChanged}
                        label="Charging status Entity (Sensor)"
                    ></ha-selector>
                </div>
                <div class="row">
                    <ha-selector
                        .hass=${this.hass}
                        .selector=${{entity:{domain:["input_number","number"]}}}
                        .value=${this.config.charge_rate_entity||""}
                        .configValue=${"charge_rate_entity"}
                        @value-changed=${this._valueChanged}
                        label="Charge Rate Entity (Number)"
                        required
                    ></ha-selector>
                </div>
                <div class="row">
                    <ha-selector
                        .hass=${this.hass}
                        .selector=${{entity:{domain:["sensor"]}}}
                        .value=${this.config.session_energy_entity||""}
                        .configValue=${"session_energy_entity"}
                        @value-changed=${this._valueChanged}
                        label="Session Energy Entity (sensor)"
                        required
                    ></ha-selector>
                </div>
                <div class="row">
                    <ha-selector
                        .hass=${this.hass}
                        .selector=${{entity:{domain:["sensor"]}}}
                        .value=${this.config.time_elapsed_entity||""}
                        .configValue=${"time_elapsed_entity"}
                        @value-changed=${this._valueChanged}
                        label="Time Elapsed Seconds Entity (sensor)"
                        required
                    ></ha-selector>
                </div>

                <div class="entities">
                    <h3>Additional entities</h3>
                    ${this.optionalEntities.map(((t,e)=>q`
                            <div class="entity-row">
                                <h4>Entity:</h4>
                                <div class="entity-name">
                                    <ha-textfield
                                        .label="${"name"}"
                                        .helper="${"Entity name"}"
                                        .value="${t.name?t.name:""}"
                                        @change="${t=>this._updateEntity(e,"name",t.target.value)}"
                                    ></ha-textfield>
                                </div>
                                <div class="ha-form-selector">
                                    <ha-entity-picker
                                        .hass="${this.hass}"
                                        .value=${t.id}
                                        .includeDomains=${["sensor","binary_sensor"]}
                                        @value-changed="${this._handleEntitySelection}"
                                    ></ha-entity-picker>
                                </div>

                                <div class="ha-form-selector">
                                    <ha-icon-picker
                                        .value="${t.icon}"
                                        @value-changed="${t=>this._updateEntity(e,"icon",t.detail.value)}"
                                    ></ha-icon-picker>
                                </div>
                                <div class="remove-button">
                                    <button
                                        @click="${()=>this._removeEntity(e)}"
                                    >
                                        remove ❌
                                    </button>
                                </div>
                            </div>
                        `))}

                    <div class="add-entity">
                        <h4>Add Entity</h4>
                        <ha-entity-picker
                            .hass="${this.hass}"
                            .includeDomains=${["sensor","binary_sensor"]}
                            @value-changed="${this._handleEntitySelection}"
                        ></ha-entity-picker>
                    </div>
                </div>
            </div>
        `:q``}}),window.customCards=window.customCards||[],window.customCards.push({type:"openevse-card",name:"OpenEVSE Card",description:"A custom card for OpenEVSE"});
