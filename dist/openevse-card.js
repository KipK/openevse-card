/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let n=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=s.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&s.set(i,e))}return e}toString(){return this.cssText}};const r=(e,...t)=>{const s=1===e.length?e[0]:t.reduce(((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1]),e[0]);return new n(s,e,i)},a=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,i))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:o,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,v=globalThis,p=v.trustedTypes,g=p?p.emptyScript:"",m=v.reactiveElementPolyfillSupport,y=(e,t)=>e,_={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},b=(e,t)=>!o(e,t),f={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=f){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);void 0!==s&&l(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return s?.call(this)},set(t){const r=s?.call(this);n.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??f}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...h(e),...d(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(t)i.adoptedStyleSheets=s.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of s){const s=document.createElement("style"),n=e.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=t.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=i.getPropertyOptions(s),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:_;this._$Em=s,this[s]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??b)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[y("elementProperties")]=new Map,x[y("finalized")]=new Map,m?.({ReactiveElement:x}),(v.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,$=w.trustedTypes,S=$?$.createPolicy("lit-html",{createHTML:e=>e}):void 0,k="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,z="?"+E,C=`<${z}>`,A=document,j=()=>A.createComment(""),L=e=>null===e||"object"!=typeof e&&"function"!=typeof e,M=Array.isArray,O="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,P=/>/g,q=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,W=/"/g,I=/^(?:script|style|textarea|title)$/i,B=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),H=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),R=new WeakMap,F=A.createTreeWalker(A,129);function D(e,t){if(!M(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const Z=(e,t)=>{const i=e.length-1,s=[];let n,r=2===t?"<svg>":3===t?"<math>":"",a=N;for(let t=0;t<i;t++){const i=e[t];let o,l,c=-1,h=0;for(;h<i.length&&(a.lastIndex=h,l=a.exec(i),null!==l);)h=a.lastIndex,a===N?"!--"===l[1]?a=T:void 0!==l[1]?a=P:void 0!==l[2]?(I.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=q):void 0!==l[3]&&(a=q):a===q?">"===l[0]?(a=n??N,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,o=l[1],a=void 0===l[3]?q:'"'===l[3]?W:V):a===W||a===V?a=q:a===T||a===P?a=N:(a=q,n=void 0);const d=a===q&&e[t+1].startsWith("/>")?" ":"";r+=a===N?i+C:c>=0?(s.push(o),i.slice(0,c)+k+i.slice(c)+E+d):i+E+(-2===c?t:d)}return[D(e,r+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]};class G{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,r=0;const a=e.length-1,o=this.parts,[l,c]=Z(e,t);if(this.el=G.createElement(l,i),F.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=F.nextNode())&&o.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(k)){const t=c[r++],i=s.getAttribute(e).split(E),a=/([.?@])?(.*)/.exec(t);o.push({type:1,index:n,name:a[2],strings:i,ctor:"."===a[1]?Y:"?"===a[1]?ee:"@"===a[1]?te:X}),s.removeAttribute(e)}else e.startsWith(E)&&(o.push({type:6,index:n}),s.removeAttribute(e));if(I.test(s.tagName)){const e=s.textContent.split(E),t=e.length-1;if(t>0){s.textContent=$?$.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],j()),F.nextNode(),o.push({type:2,index:++n});s.append(e[t],j())}}}else if(8===s.nodeType)if(s.data===z)o.push({type:2,index:n});else{let e=-1;for(;-1!==(e=s.data.indexOf(E,e+1));)o.push({type:7,index:n}),e+=E.length-1}n++}}static createElement(e,t){const i=A.createElement("template");return i.innerHTML=e,i}}function K(e,t,i=e,s){if(t===H)return t;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const r=L(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(t=K(e,n._$AS(e,t.values),n,s)),t}class J{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??A).importNode(t,!0);F.currentNode=s;let n=F.nextNode(),r=0,a=0,o=i[0];for(;void 0!==o;){if(r===o.index){let t;2===o.type?t=new Q(n,n.nextSibling,this,e):1===o.type?t=new o.ctor(n,o.name,o.strings,this,e):6===o.type&&(t=new ie(n,this,e)),this._$AV.push(t),o=i[++a]}r!==o?.index&&(n=F.nextNode(),r++)}return F.currentNode=A,s}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),L(e)?e===U||null==e||""===e?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==H&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>M(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==U&&L(this._$AH)?this._$AA.nextSibling.data=e:this.T(A.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,s="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=G.createElement(D(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new J(s,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=R.get(e.strings);return void 0===t&&R.set(e.strings,t=new G(e)),t}k(e){M(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new Q(this.O(j()),this.O(j()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}_$AI(e,t=this,i,s){const n=this.strings;let r=!1;if(void 0===n)e=K(this,e,t,0),r=!L(e)||e!==this._$AH&&e!==H,r&&(this._$AH=e);else{const s=e;let a,o;for(e=n[0],a=0;a<n.length-1;a++)o=K(this,s[i+a],t,a),o===H&&(o=this._$AH[a]),r||=!L(o)||o!==this._$AH[a],o===U?e=U:e!==U&&(e+=(o??"")+n[a+1]),this._$AH[a]=o}r&&!s&&this.j(e)}j(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Y extends X{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===U?void 0:e}}class ee extends X{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==U)}}class te extends X{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??U)===H)return;const i=this._$AH,s=e===U&&i!==U||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==U&&(i===U||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ie{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}}const se=w.litHtmlPolyfillSupport;se?.(G,Q),(w.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let ne=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const s=i?.renderBefore??t;let n=s._$litPart$;if(void 0===n){const e=i?.renderBefore??null;s._$litPart$=n=new Q(t.insertBefore(j(),e),e,void 0,i??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}};ne._$litElement$=!0,ne.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ne});const re=globalThis.litElementPolyfillSupport;re?.({LitElement:ne}),(globalThis.litElementVersions??=[]).push("4.1.1");const ae=r`
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
		
	`,oe={en:{disabled:"disabled",sleeping:"disabled",active:"active",charging:"charging","not connected":"waiting",connected:"connected",error:"error",power:"power",current:"current",session:"session",elapsed:"elapsed","charge rate":"charge rate",required_entities:"Required entities",entity_auto_success:"All required entities were automatically found",entity_auto_fail:"Some entities could not be automatically detected",entity_auto_loading:"Loading device entities","additional entities":"Additional entities","new limit":"New Limit","add charging limit":"Add Charging Limit",time:"Time",energy:"Energy",battery:"Battery",range:"Range",hours:"Hours",minutes:"Minutes",cancel:"Cancel","add limit":"Add Limit","header title":"Header Title","display header":"Display header",features:"Features","enable vehicle battery":"Enable Vehicle Battery","enable vehicle range":"Enable Vehicle Range","limits settings":"Limits settings","maximum charge energy":"Maximum charge energy (kWh)","maximum vehicle range":"Maximum vehicle range (miles|km)","openevse device":"OpenEVSE Device","select your openevse device":"Select your OpenEVSE device to automatically populate all entities","override state":"Override State","select openevse.override_state entity":"Select openevse.override_state entity","station status":"Station Status","select openevse.station_status entity":"Select openevse.station_status entity","current power usage":"Current power usage","select openevse.current_power_usage entity":"Select openevse.current_power_usage entity","charging current":"Charging current","select openevse.charging_current entity":"Select openevse.charging_current entity","vehicle connected":"Vehicle Connected","select openevse.vehicle_connected entity":"Select openevse.vehicle_connected entity","charging status":"Charging status","select openevse.charging_status entity":"Select openevse.charging_status entity","session energy":"Session Energy","select openevse.usage_this_session entity":"Select openevse.usage_this_session entity","charge time elapsed":"Charge Time Elapsed","select openevse.charge_time_elapsed entity":"Select openevse.charge_time_elapsed entity","wifi signal":"Wifi Signal","select openevse_wifi_signal_strength entity":"Select openevse_wifi_signal_strength entity","limit active":"Limit Active","select openevse_limit_active entity":"Select openevse_limit_active entity","vehicle range":"Vehicle Range","select openevse_vehicle_range entity":"Select openevse_vehicle_range entity","battery level":"Battery Level","select openevse_vehicle_battery_level entity":"Select openevse_vehicle_battery_level entity",entity:"Entity",name:"Name",icon:"Icon"},fr:{disabled:"désactivé",sleeping:"désactivé",active:"activé",charging:"en charge","not connected":"en attente",connected:"connecté",error:"erreur",power:"puissance",current:"courant",session:"session",elapsed:"écoulé","charge rate":"ampérage",required_entities:"Entités requises",entity_auto_success:"Toutes les entités ont été trouvées automatiquement",entity_auto_fail:"certaines entités n'ont pas pu être détectées automatiquement",entity_auto_loading:"Chargement des entités de l'appareil","additional entities":"Entités supplémentaires","new limit":"Nouvelle Limite","add charging limit":"Ajouter une Limite de Charge",time:"Temps",energy:"Énergie",battery:"Batterie",range:"Autonomie",hours:"Heures",minutes:"Minutes",cancel:"Annuler","add limit":"Ajouter Limite","header title":"Titre d'en-tête","display header":"Afficher l'en-tête",features:"Fonctionnalités","enable vehicle battery":"Activer la batterie du véhicule","enable vehicle range":"Activer l'autonomie du véhicule","limits settings":"Paramètres des limites","maximum charge energy":"Énergie de charge maximale (kWh)","maximum vehicle range":"Autonomie maximale du véhicule (miles|km)","openevse device":"Appareil OpenEVSE","select your openevse device":"Sélectionnez votre appareil OpenEVSE pour remplir automatiquement toutes les entités","override state":"État de surcharge","select openevse.override_state entity":"Sélectionnez l'entité openevse.override_state","station status":"État de la station","select openevse.station_status entity":"Sélectionnez l'entité openevse.station_status","current power usage":"Consommation électrique actuelle","select openevse.current_power_usage entity":"Sélectionnez l'entité openevse.current_power_usage","charging current":"Courant de charge","select openevse.charging_current entity":"Sélectionnez l'entité openevse.charging_current","vehicle connected":"Véhicule connecté","select openevse.vehicle_connected entity":"Sélectionnez l'entité openevse.vehicle_connected","charging status":"État de charge","select openevse.charging_status entity":"Sélectionnez l'entité openevse.charging_status","session energy":"Énergie de session","select openevse.usage_this_session entity":"Sélectionnez l'entité openevse.usage_this_session","charge time elapsed":"Temps de charge écoulé","select openevse.charge_time_elapsed entity":"Sélectionnez l'entité openevse.charge_time_elapsed","wifi signal":"Signal Wifi","select openevse_wifi_signal_strength entity":"Sélectionnez l'entité openevse_wifi_signal_strength","limit active":"Limite active","select openevse_limit_active entity":"Sélectionnez l'entité openevse_limit_active","vehicle range":"Autonomie du véhicule","select openevse_vehicle_range entity":"Sélectionnez l'entité openevse_vehicle_range","battery level":"Niveau de batterie","select openevse_vehicle_battery_level entity":"Sélectionnez l'entité openevse_vehicle_battery_level",entity:"Entité",name:"Nom",icon:"Icône"},de:{disabled:"deaktiviert",sleeping:"deaktiviert",active:"aktiv",charging:"lädt","not connected":"bereit",connected:"verbunden",error:"fehler",power:"leistung",current:"stromstärke",session:"sitzung",elapsed:"verstrichene zeit","charge rate":"laderate",required_entities:"Erforderliche Entitäten",entity_auto_success:"Alle erforderlichen Entitäten wurden automatisch gefunden",entity_auto_fail:"Einige Entitäten konnten nicht automatisch erkannt werden",entity_auto_loading:"Geräteentitäten werden geladen","additional entities":"Zusätzliche Entitäten","new limit":"Neues Limit","add charging limit":"Ladelimit hinzufügen",time:"Zeit",energy:"Energie",battery:"Batterie",range:"Reichweite",hours:"Stunden",minutes:"Minuten",cancel:"Abbrechen","add limit":"Limit hinzufügen","header title":"Kopfzeilentitel","display header":"Kopfzeile anzeigen",features:"Funktionen","enable vehicle battery":"Fahrzeugbatterie aktivieren","enable vehicle range":"Fahrzeugreichweite aktivieren","limits settings":"Limit-Einstellungen","maximum charge energy":"Maximale Ladeenergie (kWh)","maximum vehicle range":"Maximale Fahrzeugreichweite (Meilen|km)","openevse device":"OpenEVSE-Gerät","select your openevse device":"Wählen Sie Ihr OpenEVSE-Gerät aus, um alle Entitäten automatisch zu füllen","override state":"Überschreibungsstatus","select openevse.override_state entity":"Wählen Sie die openevse.override_state Entität","station status":"Stationsstatus","select openevse.station_status entity":"Wählen Sie die openevse.station_status Entität","current power usage":"Aktuelle Leistungsaufnahme","select openevse.current_power_usage entity":"Wählen Sie die openevse.current_power_usage Entität","charging current":"Ladestrom","select openevse.charging_current entity":"Wählen Sie die openevse.charging_current Entität","vehicle connected":"Fahrzeug verbunden","select openevse.vehicle_connected entity":"Wählen Sie die openevse.vehicle_connected Entität","charging status":"Ladestatus","select openevse.charging_status entity":"Wählen Sie die openevse.charging_status Entität","session energy":"Sitzungsenergie","select openevse.usage_this_session entity":"Wählen Sie die openevse.usage_this_session Entität","charge time elapsed":"Verstrichene Ladezeit","select openevse.charge_time_elapsed entity":"Wählen Sie die openevse.charge_time_elapsed Entität","wifi signal":"WLAN-Signal","select openevse_wifi_signal_strength entity":"Wählen Sie die openevse_wifi_signal_strength Entität","limit active":"Limit aktiv","select openevse_limit_active entity":"Wählen Sie die openevse_limit_active Entität","vehicle range":"Fahrzeugreichweite","select openevse_vehicle_range entity":"Wählen Sie die openevse_vehicle_range Entität","battery level":"Batteriestand","select openevse_vehicle_battery_level entity":"Wählen Sie die openevse_vehicle_battery_level Entität",entity:"Entität",name:"Name",icon:"Symbol"},es:{disabled:"desactivado",sleeping:"desactivado",active:"activo",charging:"cargando","not connected":"en espera",connected:"conectado",error:"error",power:"potencia",current:"corriente",session:"sesión",elapsed:"tiempo transcurrido","charge rate":"amperaje",required_entities:"Entidades requeridas",entity_auto_success:"Todas las entidades requeridas se encontraron automáticamente",entity_auto_fail:"Algunas entidades no pudieron ser detectadas automáticamente",entity_auto_loading:"Cargando entidades del dispositivo","additional entities":"Entidades adicionales","new limit":"Nuevo Límite","add charging limit":"Añadir Límite de Carga",time:"Tiempo",energy:"Energía",battery:"Batería",range:"Autonomía",hours:"Horas",minutes:"Minutos",cancel:"Cancelar","add limit":"Añadir Límite","header title":"Título del encabezado","display header":"Mostrar encabezado",features:"Características","enable vehicle battery":"Habilitar batería del vehículo","enable vehicle range":"Habilitar autonomía del vehículo","limits settings":"Configuración de límites","maximum charge energy":"Energía máxima de carga (kWh)","maximum vehicle range":"Autonomía máxima del vehículo (millas|km)","openevse device":"Dispositivo OpenEVSE","select your openevse device":"Seleccione su dispositivo OpenEVSE para completar automáticamente todas las entidades","override state":"Estado de anulación","select openevse.override_state entity":"Seleccione la entidad openevse.override_state","station status":"Estado de la estación","select openevse.station_status entity":"Seleccione la entidad openevse.station_status","current power usage":"Consumo de energía actual","select openevse.current_power_usage entity":"Seleccione la entidad openevse.current_power_usage","charging current":"Corriente de carga","select openevse.charging_current entity":"Seleccione la entidad openevse.charging_current","vehicle connected":"Vehículo conectado","select openevse.vehicle_connected entity":"Seleccione la entidad openevse.vehicle_connected","charging status":"Estado de carga","select openevse.charging_status entity":"Seleccione la entidad openevse.charging_status","session energy":"Energía de sesión","select openevse.usage_this_session entity":"Seleccione la entidad openevse.usage_this_session","charge time elapsed":"Tiempo de carga transcurrido","select openevse.charge_time_elapsed entity":"Seleccione la entidad openevse.charge_time_elapsed","wifi signal":"Señal Wifi","select openevse_wifi_signal_strength entity":"Seleccione la entidad openevse_wifi_signal_strength","limit active":"Límite activo","select openevse_limit_active entity":"Seleccione la entidad openevse_limit_active","vehicle range":"Autonomía del vehículo","select openevse_vehicle_range entity":"Seleccione la entidad openevse_vehicle_range","battery level":"Nivel de batería","select openevse_vehicle_battery_level entity":"Seleccione la entidad openevse_vehicle_battery_level",entity:"Entidad",name:"Nombre",icon:"Icono"}},le={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:b},ce=(e=le,t,i)=>{const{kind:s,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(i.name,e),"accessor"===s){const{name:s}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,n,e)},init(t){return void 0!==t&&this.P(s,void 0,e),t}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];t.call(this,i),this.requestUpdate(s,n,e)}}throw Error("Unsupported decorator location: "+s)};function he(e){return(t,i)=>"object"==typeof i?ce(e,t,i):((e,t,i)=>{const s=t.hasOwnProperty(i);return t.constructor.createProperty(i,s?{...e,wrapped:!0}:e),s?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function de(e){return he({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ue=function(e,t,i,s){for(var n,r=arguments.length,a=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,o=e.length-1;o>=0;o--)(n=e[o])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ve=class extends ne{constructor(){super(),this.min=0,this.max=32,this.step=1,this.value=0,this.unit="A",this.disabled=!1,this.label="Charge Rate",this._sliderValue=0,this._dragging=!1,this._boundHandleSliderMove=this._handleSliderMove.bind(this),this._boundHandleSliderEnd=this._handleSliderEnd.bind(this)}updated(e){e.has("value")&&!this._dragging&&(this._sliderValue=this.value)}connectedCallback(){super.connectedCallback(),this._sliderValue=this.value}disconnectedCallback(){super.disconnectedCallback(),this._removeEventListeners()}get _percentage(){return(this._sliderValue-this.min)/(this.max-this.min)*100}_formatValue(e){return this.step<1?e.toFixed(1):e.toFixed(0)}_handleSliderStart(e){this.disabled||(this._dragging=!0,this._updateSliderValue(e),window.addEventListener("mousemove",this._boundHandleSliderMove),window.addEventListener("touchmove",this._boundHandleSliderMove),window.addEventListener("mouseup",this._boundHandleSliderEnd),window.addEventListener("touchend",this._boundHandleSliderEnd))}_handleSliderMove(e){this._dragging&&this._updateSliderValue(e)}_handleSliderEnd(){this._dragging&&(this._removeEventListeners(),this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:this._sliderValue},bubbles:!0,composed:!0})),setTimeout((()=>{this._dragging=!1}),100))}_removeEventListeners(){window.removeEventListener("mousemove",this._boundHandleSliderMove),window.removeEventListener("touchmove",this._boundHandleSliderMove),window.removeEventListener("mouseup",this._boundHandleSliderEnd),window.removeEventListener("touchend",this._boundHandleSliderEnd)}_updateSliderValue(e){const t=this.shadowRoot?.querySelector(".slider-wrapper");if(!t)return;const i=t.getBoundingClientRect();let s;s="touches"in e?e.touches[0].clientX:e.clientX;let n=(s-i.left)/i.width;n=Math.min(Math.max(n,0),1);let r=this.min+n*(this.max-this.min);r=Math.round(r/this.step)*this.step,r=Math.min(Math.max(r,this.min),this.max),this._sliderValue=Number(r.toFixed(2)),this.requestUpdate()}render(){return B`
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
    `}};ve.styles=r`
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
  `,ue([he({type:Number})],ve.prototype,"min",void 0),ue([he({type:Number})],ve.prototype,"max",void 0),ue([he({type:Number})],ve.prototype,"step",void 0),ue([he({type:Number})],ve.prototype,"value",void 0),ue([he({type:String})],ve.prototype,"unit",void 0),ue([he({type:Boolean})],ve.prototype,"disabled",void 0),ue([he({type:String})],ve.prototype,"label",void 0),ue([de()],ve.prototype,"_sliderValue",void 0),ue([de()],ve.prototype,"_dragging",void 0),ue([function(e){return(t,i)=>{const s="function"==typeof t?t:t[i];Object.assign(s,e)}}({passive:!0})],ve.prototype,"_handleSliderStart",null),ve=ue([(e=>(t,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)})
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */("evse-slider")],ve);customElements.define("limit-component",class extends ne{static get properties(){return{limit:{type:Object,attribute:!1},setLimit:{type:Object,attribute:!1},delLimit:{type:Object,attribute:!1},feat_battery:{type:Boolean},feat_soc:{type:Boolean},energy_max_value:{type:Number},range_max_value:{type:Number},range_unit:{type:String},_lang:{type:String}}}constructor(){super(),this.feat_soc=!1,this.feat_range=!1,this.energy_max_value=100,this.range_max_value=600,this.range_unit="km",this._lang="en",this._translations=oe,this._showLimitForm=!1,this._selectedLimitType="time",this._hours=0,this._minutes=0,this._value=0,this.limit=null,this.feat_soc=!1,this.feat_range=!1,this.energy_max_value=100,this.range_max_value=600,this.range_unit="km",this._lang="en",this._translations=oe,this._showLimitForm=!1,this._selectedLimitType="time",this._hours=0,this._minutes=0,this._value=0}static get styles(){return r`
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
      .limit-slider {
        width: 100%;
        -webkit-appearance: none;
        height: 8px;
        border-radius: 4px;
        background: var(--secondary-background-color);
        outline: none;
      }
      .limit-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--primary-color);
        cursor: pointer;
      }
      .limit-slider::-moz-range-thumb {
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
    `}_toggleLimitForm(){this._showLimitForm=!this._showLimitForm,this._selectedLimitType="time",this._hours=0,this._minutes=0,this._value=0,this.requestUpdate()}_handleTypeChange(e){const t=e.target;this._selectedLimitType=t.value,this.requestUpdate()}_handleHoursChange(e){const t=e.target;this._hours=parseInt(t.value)||0,this.requestUpdate()}_handleMinutesChange(e){const t=e.target;this._minutes=parseInt(t.value)||0,this.requestUpdate()}_handleValueChange(e){const t=e.target,i=parseInt(t.value)||0;"energy"===this._selectedLimitType?this._value=1e3*i:this._value=i,this.requestUpdate()}_sliderMouseDown(e){const t=e.currentTarget.getBoundingClientRect();this._updateSliderValue(e.clientX,t);const i=e=>{this._updateSliderValue(e.clientX,t),e.preventDefault()},s=()=>{window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)}_updateSliderValue(e,t){const i=t.width,s=e-t.left,n=Math.min(Math.max(s/i,0),1);let r=100;"range"===this._selectedLimitType?r=this.range_max_value:"energy"===this._selectedLimitType&&(r=this.energy_max_value);const a=Math.round(n*r);"energy"===this._selectedLimitType?this._value=1e3*a:this._value=a,this.requestUpdate()}_formatValue(e,t){if("energy"===t){return`${Math.round(e/1e3)} kWh`}return"soc"===t?`${e}%`:"range"===t?`${e} ${this.range_unit}`:String(e)}_addLimit(){if("time"===this._selectedLimitType){const e=60*this._hours+this._minutes;e>0&&this.setLimit&&this.setLimit("time",e)}else["energy","soc","range"].includes(this._selectedLimitType)&&this._value>0&&this.setLimit&&this.setLimit(this._selectedLimitType,this._value);this._showLimitForm=!1}_removeLimit(){this.delLimit&&this.delLimit()}_isAddButtonDisabled(){return"time"===this._selectedLimitType?0===this._hours&&0===this._minutes:!["energy","soc","range"].includes(this._selectedLimitType)||0===this._value}_formatTimeValue(e){return[Math.floor(e/60),e%60,0].map((e=>String(e).padStart(2,"0"))).join(":")}_t(e){const t=this._lang||"en",i=e.toLowerCase();return t in this._translations&&i in this._translations[t]?this._translations[t][i]:"en"in this._translations&&i in this._translations.en?this._translations.en[i]:e}render(){return this.limit&&this.limit.type?B`
        <div class="limit-container">
          <div class="limit-badge">
            <ha-icon icon="${"time"===this.limit.type?"mdi:clock":"range"===this.limit.type?"mdi:map-marker-distance":"soc"===this.limit.type?"mdi:battery":"mdi:lightning-bolt"}"></ha-icon>
            <span class="limit-type">
              ${"time"===this.limit.type?this._t("time")+": ":"energy"===this.limit.type?this._t("energy")+": ":"range"===this.limit.type?this._t("range")+": ":"soc"===this.limit.type?this._t("battery")+": ":""}
            </span>
            <span class="limit-value">
              ${"time"===this.limit.type?this._formatTimeValue(this.limit.value):this._formatValue(this.limit.value,this.limit.type)}
            </span>
            <ha-icon 
              class="close-icon" 
              icon="mdi:close" 
              @click=${this._removeLimit}
            ></ha-icon>
          </div>
        </div>
      `:this._showLimitForm?B`
      <div class="limit-container">
        <button class="new-limit-btn" @click=${this._toggleLimitForm}>
          <ha-icon icon="mdi:plus"></ha-icon>
          ${this._t("new limit")}
        </button>
      </div>
        <div class="modal-overlay">
          <div class="limit-form">
          <div class="form-header">${this._t("add charging limit")}</div>
          
          <div class="form-row">
            <div class="select">
              <select id="limit-type" @change=${this._handleTypeChange}>
                  <option value="time" ?selected=${"time"===this._selectedLimitType}>${this._t("time")}</option>
                  <option value="energy" ?selected=${"energy"===this._selectedLimitType}>${this._t("energy")}</option>
                  ${this.feat_soc?B`
                    <option value="soc" ?selected=${"soc"===this._selectedLimitType}>${this._t("battery")}</option>
                    `:""}
                  ${this.feat_range?B`
                    <option value="range" ?selected=${"range"===this._selectedLimitType}>${this._t("range")}</option>
                    `:""}
              </select>
            </div>
          </div>
          
          ${"time"===this._selectedLimitType?B`
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
                <label>${this._t("hours")}</label>
              </div>
              <div class="time-input">
                <input 
                  type="number" 
                  min="0" 
                  max="59" 
                  .value=${String(this._minutes)}
                  @input=${this._handleMinutesChange}
                >
                <label>${this._t("minutes")}</label>
              </div>
            </div>
          </div>
          `:""}
          ${"time"!==this._selectedLimitType?B`
          <div class="form-row">
              <div class="slider-value">
                ${this._formatValue(this._value,this._selectedLimitType)}
              </div>
              <div class="slider-container">
                <input 
                  type="range" 
                  min="0" 
                  max=${"range"===this._selectedLimitType?this.range_max_value:"energy"===this._selectedLimitType?this.energy_max_value:"100"} 
                  step="1" 
                  class="limit-slider"
                  .value=${String("energy"===this._selectedLimitType?Math.round(this._value/1e3):this._value)}
                  @input=${this._handleValueChange}
                  @mousedown=${this._sliderMouseDown}
                >
              </div>
            </div>
          </div>
          `:""}
          
            <div class="form-actions">
              <button class="btn btn-secondary" @click=${this._toggleLimitForm}>${this._t("cancel")}</button>
              <button 
                class="btn btn-primary" 
                ?disabled=${this._isAddButtonDisabled()}
                @click=${this._addLimit}
              >
                ${this._t("add limit")}
              </button>
            </div>
          </div>
        </div>
      `:B`
      <div class="limit-container">
        <button class="new-limit-btn" @click=${this._toggleLimitForm}>
          <ha-icon icon="mdi:plus"></ha-icon>
          ${this._t("new limit")}
        </button>
      </div>
    `}});customElements.define("progress-bar",class extends ne{static get properties(){return{label:{type:String},value:{type:Number},unit:{type:String},max_value:{type:Number},icon:{type:String}}}constructor(){super(),this.value=0,this.label="",this.unit="",this.max_value=100,this.icon="",this.value=0,this.label="",this.unit="",this.max_value=100,this.icon=""}static get styles(){return r`
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
    `}render(){return B`
    <div class="container">
      <div class="label">
        ${this.icon?B`<ha-icon class="icon" icon=${this.icon}> </ha-icon>`:""}
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

    `}});var pe=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function ge(e,t){if(e.length!==t.length)return!1;for(var i=0;i<e.length;i++)if(s=e[i],n=t[i],!(s===n||pe(s)&&pe(n)))return!1;var s,n;return!0}function me(e,t){void 0===t&&(t=ge);var i=null;function s(){for(var s=[],n=0;n<arguments.length;n++)s[n]=arguments[n];if(i&&i.lastThis===this&&t(s,i.lastArgs))return i.lastResult;var r=e.apply(this,s);return i={lastResult:r,lastArgs:s,lastThis:this},r}return s.clear=function(){i=null},s}const ye=(e,t="en")=>{const i=e.toLowerCase();return t in oe&&i in oe[t]?oe[t][i]:"en"in oe&&i in oe.en?oe.en[i]:e},_e=me(((e={},t="en")=>[...[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}},required:!1,label:ye("header title",t)},{name:"header",selector:{boolean:{}},label:ye("display header",t)}]},{type:"grid",name:"",label:ye("features",t),schema:[{name:"feat_soc",selector:{boolean:{}},label:ye("enable vehicle battery",t)},{name:"feat_range",selector:{boolean:{}},label:ye("enable vehicle range",t)}]},{type:"grid",name:"",label:ye("limits settings",t),schema:[{name:"feat_max_energy",selector:{number:{}},required:!1,label:ye("maximum charge energy",t)},{name:"feat_max_range",selector:{number:{}},required:!1,label:ye("maximum vehicle range",t)}]},{name:"device_id",selector:{device:{integration:"openevse",manufacturer:"OpenEVSE"}},label:ye("openevse device",t),helper_text:ye("select your openevse device",t),required:!0}],...[{name:"override_entity",selector:{entity:{domain:["input_select","select"],include_entities:e.select||[]}},label:ye("override state",t),helper_text:ye("select openevse.override_state entity",t),required:!0},{name:"status_entity",selector:{entity:{domain:["sensor"],include_entities:e.sensor||[]}},label:ye("station status",t),helper_text:ye("select openevse.station_status entity",t),required:!0},{name:"power_entity",selector:{entity:{domain:["sensor"],include_entities:e.sensor||[]}},label:ye("current power usage",t),helper_text:ye("select openevse.current_power_usage entity",t),required:!0},{name:"current_entity",selector:{entity:{domain:["sensor"],include_entities:e.sensor||[]}},label:ye("charging current",t),helper_text:ye("select openevse.charging_current entity",t),required:!0},{name:"vehicle_connected_entity",selector:{entity:{domain:["binary_sensor"],include_entities:e.binary_sensor||[]}},label:ye("vehicle connected",t),helper_text:ye("select openevse.vehicle_connected entity",t),required:!0},{name:"charging_status_entity",selector:{entity:{domain:["sensor"],include_entities:e.sensor||[]}},label:ye("charging status",t),helper_text:ye("select openevse.charging_status entity",t),required:!0},{name:"charge_rate_entity",selector:{entity:{domain:["number"],include_entities:e.number||[]}},label:ye("charge rate",t),helper_text:ye("select openevse.charge_rate entity",t),required:!0},{name:"session_energy_entity",selector:{entity:{domain:["sensor"],include_entities:e.sensor||[]}},label:ye("session energy",t),helper_text:ye("select openevse.usage_this_session entity",t),required:!0},{name:"time_elapsed_entity",selector:{entity:{domain:["sensor"],include_entities:e.sensor||[]}},label:ye("charge time elapsed",t),helper_text:ye("select openevse.charge_time_elapsed entity",t),required:!0},{name:"wifi_signal_strength_entity",selector:{entity:{domain:["sensor"],include_entities:e.sensor||[]}},label:ye("wifi signal",t),helper_text:ye("select openevse_wifi_signal_strength entity",t),required:!1},{name:"limit_active_entity",selector:{entity:{domain:["binary_sensor"],include_entities:e.binary_sensor||[]}},label:ye("limit active",t),helper_text:ye("select openevse_limit_active entity",t),required:!1},{name:"vehicle_range_entity",selector:{entity:{domain:["sensor"],include_entities:e.sensor||[]}},label:ye("vehicle range",t),helper_text:ye("select openevse_vehicle_range entity",t),required:!1},{name:"vehicle_battery_level_entity",selector:{entity:{domain:["sensor"],include_entities:e.sensor||[]}},label:ye("battery level",t),helper_text:ye("select openevse_vehicle_battery_level entity",t),required:!1}]])),be=me(((e={},t="en")=>[{name:"id",selector:{entity:{domain:["sensor","binary_sensor"],include_entities:[...e.sensor||[],...e.binary_sensor||[]]}},label:ye("entity",t)},{name:"name",selector:{text:{}},label:ye("name",t)},{name:"icon",selector:{icon:{}},label:ye("icon",t)}]));customElements.define("openevse-card",class extends ne{static get properties(){return{hass:{type:Object},config:{type:Object},_lang:{type:String},_localTimeElapsed:{type:Number},_lastEntityTime:{type:Number},_timeUpdateInterval:{type:Number},_isCharging:{type:Boolean},_limit:{type:Object},_hasLimit:{type:Boolean}}}constructor(){super(),this._localTimeElapsed=0,this._lastEntityTime=0,this._timeUpdateInterval=null,this._isCharging=!1,this._translations=oe,this._limit=null,this._hasLimit=!1,this._translations=oe,this._localTimeElapsed=0,this._lastEntityTime=0,this._timeUpdateInterval=null,this._isCharging=!1,this._limit=null,this._hasLimit=!1}disconnectedCallback(){super.disconnectedCallback(),this._timeUpdateInterval&&(clearInterval(this._timeUpdateInterval),this._timeUpdateInterval=null)}getGridOptions(){return{columns:12,max_columns:12,min_columns:9}}_setupTimeInterval(){this._timeUpdateInterval&&(clearInterval(this._timeUpdateInterval),this._timeUpdateInterval=null),this._isCharging&&(this._timeUpdateInterval=window.setInterval((()=>{this._localTimeElapsed+=1/60,this.requestUpdate()}),1e3))}updated(e){if(e.has("hass")&&this.hass){if(this._lang=this.hass.language||"en",this.config&&this.config.charging_status_entity&&this.hass.states[this.config.charging_status_entity]){const e="charging"===this.hass.states[this.config.charging_status_entity].state;e!==this._isCharging&&(this._isCharging=e,this._setupTimeInterval())}if(this.config&&this.config.time_elapsed_entity&&this.hass.states[this.config.time_elapsed_entity]){const e=this.hass.states[this.config.time_elapsed_entity],t=parseFloat(e.state);isNaN(t)||t===this._lastEntityTime||(this._lastEntityTime=t,this._localTimeElapsed=t)}if(this.config&&this.config.limit_active_entity&&this.hass.states[this.config.limit_active_entity]){const e="on"===this.hass.states[this.config.limit_active_entity].state;e!=this._hasLimit&&(this._hasLimit=e,this.config.device_id&&this._getLimit().then((e=>{this._limit=e})))}}if(e.has("config")&&!e.has("hass")&&this.config&&this.hass){if(this.config.charging_status_entity&&this.hass.states[this.config.charging_status_entity]){const e=this.hass.states[this.config.charging_status_entity];this._isCharging="charging"===e.state}if(this.config.time_elapsed_entity&&this.hass.states[this.config.time_elapsed_entity]){const e=this.hass.states[this.config.time_elapsed_entity];e&&(this._lastEntityTime=parseFloat(e.state),this._localTimeElapsed=this._lastEntityTime,this._isCharging&&this._setupTimeInterval())}}}static getConfigElement(){return document.createElement("openevse-card-editor")}static getStubConfig(){return{header:!0,name:"OpenEVSE",feat_soc:!1,feat_range:!1,feat_max_range:600,feat_max_energy:100,device_id:"",override_entity:"",status_entity:"",power_entity:"",current_entity:"",charge_rate_entity:"",vehicle_connected_entity:"",charging_status_entity:"",session_energy_entity:"",time_elapsed_entity:"",wifi_signal_strength_entity:"",limit_active_entity:"",vehicle_battery_level_entity:"",vehicle_range_entity:"",optional_entities:[]}}static get styles(){return ae}setConfig(e){this.config=e}getCardSize(){return 3}_selectOverrideState(e,t){this.hass&&this.hass.callService("select","select_option",{entity_id:e,option:t.toString()})}async _getLimit(){if(!this.hass)return null;try{const e=await this.hass.callService("openevse","get_limit",{device_id:this.config?.device_id},void 0,!1,!0);return e?.response?e.response:null}catch(e){return console.error("Error while getting limit",e),null}}_setLimit(e,t){if(this.hass){console.log("type: "+e+" value: "+t);try{return void this.hass.callService("openevse","set_limit",{device_id:this.config?.device_id,type:e,value:t,auto_release:!0},void 0,!1,!1)}catch(e){return void console.error("Error while setting limit",e)}}}_delLimit(){if(this.hass)try{return void this.hass.callService("openevse","clear_limit",{device_id:this.config?.device_id},void 0,!1,!1)}catch(e){return void console.error("Error while removing limit",e)}}_showMoreInfo(e){const t=new Event("hass-more-info",{bubbles:!0,composed:!0});t.detail={entityId:e},this.dispatchEvent(t)}_convertSeconds(e){if(isNaN(e)||e<0||null==e)return"00:00:00";return[Math.floor(e/3600),Math.floor(e%3600/60),Math.floor(e%60)].map((e=>String(e).padStart(2,"0"))).join(":")}_convertTime(e){if(isNaN(e)||e<0)return"00:00:00";const t=Math.round(60*e);return this._convertSeconds(t)}_t(e){const t=this._lang||"en";return this._translations[t]?.[e]||this._translations.en?.[e]||e}_updateSlider(e){this.hass&&this.config?.charge_rate_entity&&this.hass.callService("number","set_value",{entity_id:this.config.charge_rate_entity,value:e.detail.value})}render(){if(!this.hass||!this.config)return B``;const e=this.config.override_entity?this.hass.states[this.config.override_entity]:null,t=this.config.status_entity?this.hass.states[this.config.status_entity]:null,i=this.config.power_entity?this.hass.states[this.config.power_entity]:null,s=this.config.current_entity?this.hass.states[this.config.current_entity]:null,n=this.config.charge_rate_entity?this.hass.states[this.config.charge_rate_entity]:null,r=this.config.vehicle_connected_entity?this.hass.states[this.config.vehicle_connected_entity]:null,a=this.config.charging_status_entity?this.hass.states[this.config.charging_status_entity]:null,o=this.config.session_energy_entity?this.hass.states[this.config.session_energy_entity]:null,l=this.config.time_elapsed_entity?this.hass.states[this.config.time_elapsed_entity]:null,c=this.config.wifi_signal_strength_entity?this.hass.states[this.config.wifi_signal_strength_entity]:null,h=this.config.vehicle_battery_level_entity?this.hass.states[this.config.vehicle_battery_level_entity]:null,d=this.config.vehicle_range_entity?this.hass.states[this.config.vehicle_range_entity]:null,u=(()=>this.config?.optional_entities?.map((e=>({name:e.name?e.name:e.id?this.hass?.states[e.id]?.attributes.friendly_name:null,value:e.id?this.hass?.formatEntityState(this.hass.states[e.id])??null:null,icon:e.icon,id:e.id?e.id:void 0})))??[])();return B`
        <ha-card>
            ${this.config.header?B`<h1 class="card-header">
                    ${this.config.name||"OpenEVSE"}
                    </h1>`:""}
            <div class="card-content">
                <div class="evse-states">
                    <div class="status-icons">
                            ${c?B`
                            <div
                                class="status-icon clickable"
                                @click=${()=>this._showMoreInfo(this.config?.wifi_signal_strength_entity||"")}
                                >
                                    <ha-icon
                                        icon="${v=Number(c?.state),v>=-65?"mdi:wifi-strength-4":-65>v&&v>=-70?"mdi:wifi-strength-3":-70>v&&v>=-75?"mdi:wifi-strength-2":-75>v&&v>=-80?"mdi:wifi-strength-1":"mdi:wifi-strength-alert-outline"}"
                                        class="wifi-icon"
                                    ></ha-icon>
                                </div>
                            `:""}
                        
                            <div
                            class="status-icon clickable"
                            @click=${()=>this._showMoreInfo(this.config?.status_entity||"")}
                            >
                            <ha-icon
                                icon="${"active"==t?.state?"off"==r?.state?"mdi:timer-sand":"mdi:lightning-bolt":"mdi:cancel"}"
                                class="${"active"==t?.state?"charging"==a?.state?"charging":"active bg-active":"disabled bg-disabled"}"
                            ></ha-icon>
                            </div>
                            <div
                            class="status-icon clickable"
                            @click=${()=>this._showMoreInfo(this.config?.vehicle_connected_entity||"")}
                            >
                            <ha-icon
                                icon="${"off"==r?.state?"mdi:car-off":"mdi:car"}"
                                class="${"off"==r?.state?"disabled bg-disabled":"active bg-active"}"
                            ></ha-icon>
                            </div>
                    </div>
                    <div class="status-heading">
                        <div
                        class="status-badge ${"error"==a?.state?"badge-error":"disabled"==t?.state?"badge-disabled":"charging"==a?.state?"badge-charging":"badge-active"}"
                        >
                        ${this._t(a?.state||"")}
                        </div>
                    </div>
                </div>
                    <div class="grid-container">
                            ${i?B`
                                    <div class="grid-item">
                                        <div class="grid-item-label">${this._t("power")}</div>
                                        <div
                                        class="grid-item-value current-value clickable"
                                        @click=${()=>this._showMoreInfo(this.config?.power_entity||"")}
                                        >
                                        ${i?this.hass.formatEntityState(i):"0 W"}
                                        </div>
                                    </div>
                                    `:B`
                                    <div class="grid-item">
                                        <div class="grid-item-label">${this._t("power")}</div>
                                        <div class="grid-item-value current-value">0 W</div>
                                    </div>`}
                        ${s?B`
                                <div class="grid-item">
                                    <div class="grid-item-label">${this._t("current")}</div>
                                    <div
                                    class="grid-item-value current-value clickable"
                                    @click=${()=>this._showMoreInfo(this.config?.current_entity||"")}
                                    >
                                    ${s?this.hass.formatEntityState(s):"0 A"}
                                    </div>
                                </div>
                                `:B`
                                <div class="grid-item">
                                    <div class="grid-item-label">${this._t("current")}</div>
                                    <div class="grid-item-value current-value">0 A</div>
                                </div>`}
                            ${o?B`
                            <div class="grid-item">
                                <div class="grid-item-label">${this._t("session")}</div>
                                <div
                                class="grid-item-value current-value clickable"
                                @click=${()=>this._showMoreInfo(this.config?.session_energy_entity||"")}
                                >
                            ${o?this.hass.formatEntityState(o):"0 kWh"}
                            </div>
                        </div>
                        `:B`
                        <div class="grid-item">
                            <div class="grid-item-label">${this._t("session")}</div>
                            <div class="grid-item-value current-value">0 kWh</div>
                        </div>`}

                    ${l?B`
                        <div class="grid-item">
                            <div class="grid-item-label">${this._t("elapsed")}</div>
                            <div
                            class="grid-item-value current-value"
                            >
                            ${this._convertTime(this._localTimeElapsed||0)}
                            </div>
                        </div>
                    `:B`
                        <div class="grid-item">
                            <div class="grid-item-label">${this._t("elapsed")}</div>
                            <div class="grid-item-value current-value">00:00:00</div>
                        </div>`}
                    </div>
                    <div class="vehicle">
                        ${this.config.feat_soc&&h?B`
                            <progress-bar value=${Number(h?.state)} unit="%" icon="mdi:battery-medium"></progress-bar>
                            `:""}
                        ${this.config.feat_range&&d?B`
                            <progress-bar value=${Number(d?.state)} max_value=${this.config?.feat_max_range||600} unit=${d?.attributes.unit_of_measurement||""} icon="mdi:map-marker-distance"></progress-bar>
                        `:""}
                         
                    </div>
                   
                    <div class="override-controls">
                        <div class="override-row">
                            <div
                            class="override-button ${"active"==e?.state?"active":""}"
                            data-option="active"
                            @click=${()=>this._selectOverrideState(this.config?.override_entity||"","active")}
                            >
                            <ha-icon
                                icon="mdi:lightning-bolt"
                                class="${"active"==e?.state&&"charging"==a?.state?"charging":""}"
                            ></ha-icon>
                            </div>
                            <div
                            class="override-button ${"auto"==e?.state?"active":""}"
                            data-option="auto"
                            @click=${()=>this._selectOverrideState(this.config?.override_entity||"","auto")}
                            >
                            <ha-icon
                                icon="mdi:robot"
                                class="${"auto"==e?.state&&"charging"==a?.state?"charging":""}"
                            ></ha-icon>
                            </div>
                            <div
                            class="override-button ${"disabled"==e?.state?"active":""}"
                            data-option="disabled"
                            @click=${()=>this._selectOverrideState(this.config?.override_entity||"","disabled")}
                            >
                            <ha-icon icon="mdi:cancel"></ha-icon>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <evse-slider
                            .min=${"number"==typeof n?.attributes.min?n.attributes.min:0}
                            .max=${"number"==typeof n?.attributes.max?n.attributes.max:32}
                            .step=${"number"==typeof n?.attributes.step?n.attributes.step:1}
                            .value=${Number(n?.state||0)}
                            .unit=${"string"==typeof n?.attributes.unit_of_measurement?n.attributes.unit_of_measurement:"A"}
                            .label=${this._t("charge rate")}
                            .disabled=${!n}
                            @value-changed=${this._updateSlider}
                        ></evse-slider>
                    </div>
                    <!-- Limit -->
                    <div class="container">
                        <limit-component
                            .limit=${this._limit}
                            .setLimit=${this._setLimit.bind(this)}
                            .delLimit=${this._delLimit.bind(this)}
                            .feat_soc=${this.config.feat_soc||!1}
                            .feat_range=${this.config.feat_range||!1}
                            .range_max_value=${Number(this.config.feat_max_range)}
                            .energy_max_value=${Number(this.config.feat_max_energy)}
                            .range_unit=${String(d?.attributes.unit_of_measurement||"")}
                            ._lang=${this._lang}
                        ></limit-component>
                    </div>
                    <!-- End of Limit -->
                    ${u?.map((e=>B`
                    <div class="other-entities-container">
                        <div class="entity-row">
                            <div class="entity-title">
                            ${null!=e.icon?B`
                                <div class="entity-icon">
                                    <ha-icon
                                    icon=${e.icon}
                                    ></ha-icon>
                                </div>
                            `:B`
                                <div
                                    class="entity-icon"
                                ></div>
                            `}

                                <div class="entity-label">
                                    ${e.name?e.name:e.id?e.id:""}
                                </div>
                            </div>
                            <div
                            class="entity-value clickable"
                            @click=${()=>this._showMoreInfo(e.id?e.id:"")}
                            >
                                ${e.value?e.value:""}
                            </div>
                        </div>
                    </div>
                    `))}
            </div>
        </ha-card>
    `;var v}}),customElements.define("openevse-card-editor",class extends ne{static get properties(){return{hass:{type:Object},config:{type:Object},_lang:{type:String},_deviceIdChanged:{type:Boolean}}}static get styles(){return r`
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
    `}constructor(){super(),this.config={},this._deviceIdChanged=!1,this._translations=oe,this.optionalEntities=[],this.openEVSEEntities={},this.deviceEntitiesLoaded=!1,this._entityPickerKey=0,this.config={},this.optionalEntities=[],this.openEVSEEntities={},this.deviceEntitiesLoaded=!1,this._translations=oe,this._deviceIdChanged=!1}async firstUpdated(){try{await(async()=>{try{if(customElements.get("ha-form")&&customElements.get("ha-selector")&&customElements.get("ha-textfield")&&customElements.get("ha-icon-picker")&&customElements.get("ha-icon-button")&&customElements.get("ha-entity-picker"))return;await Promise.race([customElements.whenDefined("partial-panel-resolver"),new Promise(((e,t)=>setTimeout((()=>t(new Error("Timeout waiting for partial-panel-resolver"))),1e4)))]);const e=document.createElement("partial-panel-resolver");if(!e)throw new Error("Failed to create partial-panel-resolver element");if(e.hass={panels:[{url_path:"tmp",component_name:"config"}]},"function"!=typeof e._updateRoutes)throw new Error("partial-panel-resolver does not have _updateRoutes method");if(e._updateRoutes(),!e.routerOptions?.routes?.tmp?.load)throw new Error("Failed to create tmp route in partial-panel-resolver");await Promise.race([e.routerOptions.routes.tmp.load(),new Promise(((e,t)=>setTimeout((()=>t(new Error("Timeout loading tmp route"))),1e4)))]),await Promise.race([customElements.whenDefined("ha-panel-config"),new Promise(((e,t)=>setTimeout((()=>t(new Error("Timeout waiting for ha-panel-config"))),1e4)))]);const t=document.createElement("ha-panel-config");if(!t)throw new Error("Failed to create ha-panel-config element");if(!t.routerOptions?.routes?.automation?.load)throw new Error("ha-panel-config does not have automation route");await Promise.race([t.routerOptions.routes.automation.load(),new Promise(((e,t)=>setTimeout((()=>t(new Error("Timeout loading automation components"))),1e4)))]);const i=["ha-form","ha-selector","ha-textfield","ha-icon-picker","ha-icon-button","ha-entity-picker"].filter((e=>!customElements.get(e)));if(i.length>0)throw new Error(`Failed to load components: ${i.join(", ")}`)}catch(e){console.error("Error loading Home Assistant form components:",e);try{if(window.customElements&&window.customElements.get("home-assistant")){console.log("Attempting fallback loading method for HA components");const e=new CustomEvent("ha-request-load-components",{detail:{components:["ha-form","ha-selector","ha-textfield","ha-icon-picker","ha-icon-button","ha-entity-picker"]},bubbles:!0,composed:!0});document.dispatchEvent(e)}}catch(e){console.error("Fallback loading method failed:",e)}}})()}catch(e){console.error("Error loading ha-form:",e)}this._lang=this.hass?.language||"en"}setConfig(e){this.config=e,this.optionalEntities=e.optional_entities||[],e.device_id&&this.hass&&!this.deviceEntitiesLoaded&&this._loadDeviceEntities(e.device_id)}_isEntityConfigured(e){return Boolean(this.config[e]&&this.config[e].length>0)}async _loadDeviceEntities(e){if(!e||!this.hass)return;const t={},i=Object.values(this.hass.entities||{}).filter((t=>t.device_id===e)),s={override_entity:{names:["override_state"],domains:["select"],preferredPattern:"select.openevse_override_state"},status_entity:{names:["station_status"],domains:["sensor"],preferredPattern:"sensor.openevse_station_status"},power_entity:{names:["current_power_usage"],domains:["sensor"],preferredPattern:"sensor.openevse_current_power_usage"},current_entity:{names:["charging_current"],domains:["sensor"],preferredPattern:"sensor.openevse_charging_current"},vehicle_connected_entity:{names:["vehicle_connected"],domains:["binary_sensor"],preferredPattern:"binary_sensor.openevse_vehicle_connected"},charging_status_entity:{names:["charging_status"],domains:["sensor"],preferredPattern:"sensor.openevse_charging_status"},charge_rate_entity:{names:["charge_rate"],domains:["number"],preferredPattern:"number.openevse_charge_rate"},session_energy_entity:{names:["usage_this_session"],domains:["sensor"],preferredPattern:"sensor.openevse_usage_this_session"},time_elapsed_entity:{names:["charge_time_elapsed"],domains:["sensor"],preferredPattern:"sensor.openevse_charge_time_elapsed"},wifi_signal_strength_entity:{names:["wifi_signal_strength"],domains:["sensor"],preferredPattern:"sensor.openevse_wifi_signal_strength"},limit_active_entity:{names:["limit_active"],domains:["binary_sensor"],preferredPattern:"sensor.openevse_limit_active"},vehicle_battery_level_entity:{names:["vehicle_battery_level"],domains:["sensor"],preferredPattern:"sensor.openevse_vehicle_battery_level"},vehicle_range_entity:{names:["vehicle_range"],domains:["sensor"],preferredPattern:"sensor.openevse_vehicle_range"}};for(const[e,n]of Object.entries(s)){if(this._isEntityConfigured(e)&&!this._deviceIdChanged)continue;const{names:s,domains:r,preferredPattern:a}=n;let o=i.find((e=>e.entity_id.toLowerCase()===a.toLowerCase()));o||(o=i.find((e=>{const t=e.entity_id.toLowerCase(),i=t.split(".")[0];return!!r.includes(i)&&s.some((i=>t.includes(i.toLowerCase())||e.original_name&&e.original_name.toLowerCase().includes(i.toLowerCase())))}))),o&&(t[e]=o.entity_id)}this.openEVSEEntities=t,this.deviceEntitiesLoaded=!0;const n={...this.config};for(const[e,i]of Object.entries(t))this._isEntityConfigured(e)&&!this._deviceIdChanged||(n[e]=i);this._deviceIdChanged=!1,this.config=n,this._fireConfigChanged(n),this.requestUpdate()}_handleConfigChange(e){const t=e.detail.value;t.device_id!==this.config.device_id?(this._deviceIdChanged=!0,this.deviceEntitiesLoaded=!1,this.config={...this.config,...t},this._loadDeviceEntities(t.device_id)):this._dispatchConfigChanged(t)}_dispatchConfigChanged(e){const t={...e,optional_entities:this.optionalEntities};this.config=t,this._fireConfigChanged(t)}_fireConfigChanged(e){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e}}))}_addOptionalEntity(e){const t=e.target?.value;if(t&&!this.optionalEntities.some((e=>e.id===t))){const e="string"==typeof this.hass?.states[t]?.attributes?.icon?this.hass.states[t].attributes.icon:null;this.optionalEntities=[...this.optionalEntities,{id:t,name:null,icon:e,value:null}],this._fireConfigChanged({...this.config,optional_entities:this.optionalEntities}),this._entityPickerKey++,this.requestUpdate()}}_removeEntity(e){this.optionalEntities=this.optionalEntities.filter(((t,i)=>i!==e)),this._fireConfigChanged({...this.config,optional_entities:this.optionalEntities})}_updateOptionalEntity(e,t){const i={...this.optionalEntities[e]},s=Object.keys(t);for(const e of s){const s=t[e];""===s||void 0===s?"id"===e?i.id=void 0:"name"===e?i.name=null:"icon"===e?i.icon=null:"value"===e&&(i.value=null):"id"===e?i.id=s:"name"===e?i.name=s:"icon"===e?i.icon=s:"value"===e&&(i.value=s)}this.optionalEntities=this.optionalEntities.map(((t,s)=>s===e?i:t)),this._fireConfigChanged({...this.config,optional_entities:this.optionalEntities})}_getMissingEntities(){return["override_entity","status_entity","power_entity","current_entity","vehicle_connected_entity","charging_status_entity","charge_rate_entity","session_energy_entity","time_elapsed_entity","wifi_signal_strength_entity","limit_active_entity","vehicle_range_entity","vehicle_battery_level_entity"].filter((e=>{const t=this.config[e]&&this.config[e].length>0,i=this.openEVSEEntities[e]&&this.openEVSEEntities[e].length>0;return!t&&!i}))}_t(e){const t=this._lang||"en",i=e.toLowerCase();return t in this._translations&&i in this._translations[t]?this._translations[t][i]:"en"in this._translations&&i in this._translations.en?this._translations.en[i]:e}render(){if(!this.hass)return B``;const e={};if(this.config.device_id&&this.hass.entities){Object.values(this.hass.entities).filter((e=>e.device_id===this.config.device_id)).forEach((t=>{const i=t.entity_id.split(".")[0];e[i]||(e[i]=[]),e[i].push(t.entity_id)}))}const t=_e(e,this._lang),i=be(e,this._lang),s=this._getMissingEntities();return B`
      <!-- Auto-detection status -->
      ${this.config.device_id?B`
          <div class="entity-section">
              ${this.deviceEntitiesLoaded?B`
                  <div class="entity-status ${s.length>0?"warning":"success"}">
                      ${0===s.length?this._t("entity_auto_success")+"!":this._t("entity_auto_fail")+": "+s.join(", ")}
                  </div>
              `:B`
                  <div class="entity-status">
                      ${this._t("entity_auto_loading")}
                  </div>
              `}
          </div>
      `:""}
      
      <div class="form-container">
          ${this.config.device_id?B`
          <!-- Main configuration -->
          <ha-form
              .hass=${this.hass}
              .data=${this.config}
              .schema=${t}
              .computeLabel=${e=>e.label||e.name}
              .computeHelper=${e=>e.helper_text}
              @value-changed=${this._handleConfigChange}
          ></ha-form>
          
          <!-- Additional entities -->
          <div class="entities">
              <h3>${this._t("additional entities")}</h3>
              
              ${this.optionalEntities?.map(((e,t)=>B`
                  <div class="entity-row">
                      <ha-form
                          .hass=${this.hass}
                          .data=${e}
                          .schema=${i}
                          .computeLabel=${e=>e.label||e.name}
                          @value-changed=${e=>this._updateOptionalEntity(t,e.detail.value)}
                      ></ha-form>
                      
                      <div class="entity-actions">
                          <ha-icon-button
                              .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
                              @click=${()=>this._removeEntity(t)}
                          ></ha-icon-button>
                      </div>
                  </div>
              `))}
              
              <div class="add-entity">
                  <ha-entity-picker
                      .hass="${this.hass}"
                      .includeDomains=${["sensor","binary_sensor"]}
                       .includeEntities=${[...e.sensor||[],...e.binary_sensor||[]]}
                      @value-changed="${this._addOptionalEntity}"
                  ></ha-entity-picker>
              </div>
          </div>
          `:B`
          <ha-form
              .hass=${this.hass}  
              .data=${this.openEVSEEntities}
              .schema=${[{name:"device_id",selector:{device:{integration:"openevse",manufacturer:"OpenEVSE"}},label:this._t("openevse device"),helper_text:this._t("select your openevse device"),required:!0}]}
              @value-changed=${this._handleConfigChange}
          ></ha-form>
          `}
      </div>
    `}}),window.customCards=window.customCards||[],window.customCards.push({type:"openevse-card",name:"OpenEVSE Card",description:"A custom card for OpenEVSE"});
