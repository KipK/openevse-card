/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let n=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=s.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&s.set(i,e))}return e}toString(){return this.cssText}};const r=(e,...t)=>{const s=1===e.length?e[0]:t.reduce(((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1]),e[0]);return new n(s,e,i)},o=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,i))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:a,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,v=globalThis,g=v.trustedTypes,p=g?g.emptyScript:"",m=v.reactiveElementPolyfillSupport,y=(e,t)=>e,_={toAttribute(e,t){switch(t){case Boolean:e=e?p:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},b=(e,t)=>!a(e,t),f={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=f){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);void 0!==s&&c(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=l(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return s?.call(this)},set(t){const r=s?.call(this);n.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??f}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...d(e),...h(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(o(e))}else void 0!==e&&t.push(o(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(t)i.adoptedStyleSheets=s.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of s){const s=document.createElement("style"),n=e.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=t.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=i.getPropertyOptions(s),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:_;this._$Em=s,this[s]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??b)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[y("elementProperties")]=new Map,w[y("finalized")]=new Map,m?.({ReactiveElement:w}),(v.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,$=x.trustedTypes,E=$?$.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+k,z=`<${C}>`,j=document,A=()=>j.createComment(""),O=e=>null===e||"object"!=typeof e&&"function"!=typeof e,L=Array.isArray,M="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,P=/>/g,V=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,I=/"/g,W=/^(?:script|style|textarea|title)$/i,q=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),R=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),B=new WeakMap,F=j.createTreeWalker(j,129);function D(e,t){if(!L(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const Z=(e,t)=>{const i=e.length-1,s=[];let n,r=2===t?"<svg>":3===t?"<math>":"",o=T;for(let t=0;t<i;t++){const i=e[t];let a,c,l=-1,d=0;for(;d<i.length&&(o.lastIndex=d,c=o.exec(i),null!==c);)d=o.lastIndex,o===T?"!--"===c[1]?o=N:void 0!==c[1]?o=P:void 0!==c[2]?(W.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=V):void 0!==c[3]&&(o=V):o===V?">"===c[0]?(o=n??T,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?V:'"'===c[3]?I:H):o===I||o===H?o=V:o===N||o===P?o=T:(o=V,n=void 0);const h=o===V&&e[t+1].startsWith("/>")?" ":"";r+=o===T?i+z:l>=0?(s.push(a),i.slice(0,l)+S+i.slice(l)+k+h):i+k+(-2===l?t:h)}return[D(e,r+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]};class G{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,r=0;const o=e.length-1,a=this.parts,[c,l]=Z(e,t);if(this.el=G.createElement(c,i),F.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=F.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(S)){const t=l[r++],i=s.getAttribute(e).split(k),o=/([.?@])?(.*)/.exec(t);a.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?Y:"?"===o[1]?ee:"@"===o[1]?te:X}),s.removeAttribute(e)}else e.startsWith(k)&&(a.push({type:6,index:n}),s.removeAttribute(e));if(W.test(s.tagName)){const e=s.textContent.split(k),t=e.length-1;if(t>0){s.textContent=$?$.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],A()),F.nextNode(),a.push({type:2,index:++n});s.append(e[t],A())}}}else if(8===s.nodeType)if(s.data===C)a.push({type:2,index:n});else{let e=-1;for(;-1!==(e=s.data.indexOf(k,e+1));)a.push({type:7,index:n}),e+=k.length-1}n++}}static createElement(e,t){const i=j.createElement("template");return i.innerHTML=e,i}}function K(e,t,i=e,s){if(t===R)return t;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const r=O(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(t=K(e,n._$AS(e,t.values),n,s)),t}class J{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??j).importNode(t,!0);F.currentNode=s;let n=F.nextNode(),r=0,o=0,a=i[0];for(;void 0!==a;){if(r===a.index){let t;2===a.type?t=new Q(n,n.nextSibling,this,e):1===a.type?t=new a.ctor(n,a.name,a.strings,this,e):6===a.type&&(t=new ie(n,this,e)),this._$AV.push(t),a=i[++o]}r!==a?.index&&(n=F.nextNode(),r++)}return F.currentNode=j,s}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),O(e)?e===U||null==e||""===e?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==R&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>L(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==U&&O(this._$AH)?this._$AA.nextSibling.data=e:this.T(j.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,s="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=G.createElement(D(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new J(s,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=B.get(e.strings);return void 0===t&&B.set(e.strings,t=new G(e)),t}k(e){L(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new Q(this.O(A()),this.O(A()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}_$AI(e,t=this,i,s){const n=this.strings;let r=!1;if(void 0===n)e=K(this,e,t,0),r=!O(e)||e!==this._$AH&&e!==R,r&&(this._$AH=e);else{const s=e;let o,a;for(e=n[0],o=0;o<n.length-1;o++)a=K(this,s[i+o],t,o),a===R&&(a=this._$AH[o]),r||=!O(a)||a!==this._$AH[o],a===U?e=U:e!==U&&(e+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!s&&this.j(e)}j(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Y extends X{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===U?void 0:e}}class ee extends X{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==U)}}class te extends X{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??U)===R)return;const i=this._$AH,s=e===U&&i!==U||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==U&&(i===U||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ie{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}}const se=x.litHtmlPolyfillSupport;se?.(G,Q),(x.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let ne=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const s=i?.renderBefore??t;let n=s._$litPart$;if(void 0===n){const e=i?.renderBefore??null;s._$litPart$=n=new Q(t.insertBefore(A(),e),e,void 0,i??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return R}};ne._$litElement$=!0,ne.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ne});const re=globalThis.litElementPolyfillSupport;re?.({LitElement:ne}),(globalThis.litElementVersions??=[]).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const oe={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:b},ae=(e=oe,t,i)=>{const{kind:s,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(i.name,e),"accessor"===s){const{name:s}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,n,e)},init(t){return void 0!==t&&this.P(s,void 0,e),t}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];t.call(this,i),this.requestUpdate(s,n,e)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ce(e){return(t,i)=>"object"==typeof i?ae(e,t,i):((e,t,i)=>{const s=t.hasOwnProperty(i);return t.constructor.createProperty(i,s?{...e,wrapped:!0}:e),s?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function le(e){return ce({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=r`
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
        
    `,he={en:{disabled:"disabled",sleeping:"disabled",active:"active",charging:"charging","not connected":"waiting",connected:"connected",error:"error",power:"power",current:"current",session:"session",elapsed:"elapsed","charge rate":"charge rate",required_entities:"Required entities",entity_auto_success:"All required entities were automatically found",entity_auto_fail:"Some entities could not be automatically detected",entity_auto_loading:"Loading device entities","additional entities":"Additional entities","new limit":"New Limit","add charging limit":"Add Charging Limit",time:"Time",energy:"Energy",battery:"Battery",range:"Range",hours:"Hours",minutes:"Minutes",cancel:"Cancel","add limit":"Add Limit","header title":"Header Title","display header":"Display header",features:"Features","enable vehicle battery":"Enable Vehicle Battery","enable vehicle range":"Enable Vehicle Range","limits settings":"Limits settings","maximum charge energy":"Maximum charge energy (kWh)","maximum vehicle range":"Maximum vehicle range (miles|km)","openevse device":"OpenEVSE Device","select your openevse device":"Select your OpenEVSE device to automatically populate all entities","override state":"Override State","select openevse.override_state entity":"Select openevse.override_state entity","station status":"Station Status","select openevse.station_status entity":"Select openevse.station_status entity","current power usage":"Current power usage","select openevse.current_power_usage entity":"Select openevse.current_power_usage entity","charging current":"Charging current","select openevse.charging_current entity":"Select openevse.charging_current entity","vehicle connected":"Vehicle Connected","select openevse.vehicle_connected entity":"Select openevse.vehicle_connected entity","charging status":"Charging status","select openevse.charging_status entity":"Select openevse.charging_status entity","session energy":"Session Energy","select openevse.usage_this_session entity":"Select openevse.usage_this_session entity","charge time elapsed":"Charge Time Elapsed","select openevse.charge_time_elapsed entity":"Select openevse.charge_time_elapsed entity","wifi signal":"Wifi Signal","select openevse_wifi_signal_strength entity":"Select openevse_wifi_signal_strength entity","limit active":"Limit Active","select openevse_limit_active entity":"Select openevse_limit_active entity","vehicle range":"Vehicle Range","select openevse_vehicle_range entity":"Select openevse_vehicle_range entity","battery level":"Battery Level","select openevse_vehicle_battery_level entity":"Select openevse_vehicle_battery_level entity",entity:"Entity",name:"Name",icon:"Icon"},fr:{disabled:"désactivé",sleeping:"désactivé",active:"activé",charging:"en charge","not connected":"en attente",connected:"connecté",error:"erreur",power:"puissance",current:"courant",session:"session",elapsed:"écoulé","charge rate":"ampérage",required_entities:"Entités requises",entity_auto_success:"Toutes les entités ont été trouvées automatiquement",entity_auto_fail:"certaines entités n'ont pas pu être détectées automatiquement",entity_auto_loading:"Chargement des entités de l'appareil","additional entities":"Entités supplémentaires","new limit":"Nouvelle Limite","add charging limit":"Ajouter une Limite de Charge",time:"Temps",energy:"Énergie",battery:"Batterie",range:"Autonomie",hours:"Heures",minutes:"Minutes",cancel:"Annuler","add limit":"Ajouter Limite","header title":"Titre d'en-tête","display header":"Afficher l'en-tête",features:"Fonctionnalités","enable vehicle battery":"Activer la batterie du véhicule","enable vehicle range":"Activer l'autonomie du véhicule","limits settings":"Paramètres des limites","maximum charge energy":"Énergie de charge maximale (kWh)","maximum vehicle range":"Autonomie maximale du véhicule (miles|km)","openevse device":"Appareil OpenEVSE","select your openevse device":"Sélectionnez votre appareil OpenEVSE pour remplir automatiquement toutes les entités","override state":"État de surcharge","select openevse.override_state entity":"Sélectionnez l'entité openevse.override_state","station status":"État de la station","select openevse.station_status entity":"Sélectionnez l'entité openevse.station_status","current power usage":"Consommation électrique actuelle","select openevse.current_power_usage entity":"Sélectionnez l'entité openevse.current_power_usage","charging current":"Courant de charge","select openevse.charging_current entity":"Sélectionnez l'entité openevse.charging_current","vehicle connected":"Véhicule connecté","select openevse.vehicle_connected entity":"Sélectionnez l'entité openevse.vehicle_connected","charging status":"État de charge","select openevse.charging_status entity":"Sélectionnez l'entité openevse.charging_status","session energy":"Énergie de session","select openevse.usage_this_session entity":"Sélectionnez l'entité openevse.usage_this_session","charge time elapsed":"Temps de charge écoulé","select openevse.charge_time_elapsed entity":"Sélectionnez l'entité openevse.charge_time_elapsed","wifi signal":"Signal Wifi","select openevse_wifi_signal_strength entity":"Sélectionnez l'entité openevse_wifi_signal_strength","limit active":"Limite active","select openevse_limit_active entity":"Sélectionnez l'entité openevse_limit_active","vehicle range":"Autonomie du véhicule","select openevse_vehicle_range entity":"Sélectionnez l'entité openevse_vehicle_range","battery level":"Niveau de batterie","select openevse_vehicle_battery_level entity":"Sélectionnez l'entité openevse_vehicle_battery_level",entity:"Entité",name:"Nom",icon:"Icône"},de:{disabled:"deaktiviert",sleeping:"deaktiviert",active:"aktiv",charging:"lädt","not connected":"bereit",connected:"verbunden",error:"fehler",power:"leistung",current:"stromstärke",session:"sitzung",elapsed:"verstrichene zeit","charge rate":"laderate",required_entities:"Erforderliche Entitäten",entity_auto_success:"Alle erforderlichen Entitäten wurden automatisch gefunden",entity_auto_fail:"Einige Entitäten konnten nicht automatisch erkannt werden",entity_auto_loading:"Geräteentitäten werden geladen","additional entities":"Zusätzliche Entitäten","new limit":"Neues Limit","add charging limit":"Ladelimit hinzufügen",time:"Zeit",energy:"Energie",battery:"Batterie",range:"Reichweite",hours:"Stunden",minutes:"Minuten",cancel:"Abbrechen","add limit":"Limit hinzufügen","header title":"Kopfzeilentitel","display header":"Kopfzeile anzeigen",features:"Funktionen","enable vehicle battery":"Fahrzeugbatterie aktivieren","enable vehicle range":"Fahrzeugreichweite aktivieren","limits settings":"Limit-Einstellungen","maximum charge energy":"Maximale Ladeenergie (kWh)","maximum vehicle range":"Maximale Fahrzeugreichweite (Meilen|km)","openevse device":"OpenEVSE-Gerät","select your openevse device":"Wählen Sie Ihr OpenEVSE-Gerät aus, um alle Entitäten automatisch zu füllen","override state":"Überschreibungsstatus","select openevse.override_state entity":"Wählen Sie die openevse.override_state Entität","station status":"Stationsstatus","select openevse.station_status entity":"Wählen Sie die openevse.station_status Entität","current power usage":"Aktuelle Leistungsaufnahme","select openevse.current_power_usage entity":"Wählen Sie die openevse.current_power_usage Entität","charging current":"Ladestrom","select openevse.charging_current entity":"Wählen Sie die openevse.charging_current Entität","vehicle connected":"Fahrzeug verbunden","select openevse.vehicle_connected entity":"Wählen Sie die openevse.vehicle_connected Entität","charging status":"Ladestatus","select openevse.charging_status entity":"Wählen Sie die openevse.charging_status Entität","session energy":"Sitzungsenergie","select openevse.usage_this_session entity":"Wählen Sie die openevse.usage_this_session Entität","charge time elapsed":"Verstrichene Ladezeit","select openevse.charge_time_elapsed entity":"Wählen Sie die openevse.charge_time_elapsed Entität","wifi signal":"WLAN-Signal","select openevse_wifi_signal_strength entity":"Wählen Sie die openevse_wifi_signal_strength Entität","limit active":"Limit aktiv","select openevse_limit_active entity":"Wählen Sie die openevse_limit_active Entität","vehicle range":"Fahrzeugreichweite","select openevse_vehicle_range entity":"Wählen Sie die openevse_vehicle_range Entität","battery level":"Batteriestand","select openevse_vehicle_battery_level entity":"Wählen Sie die openevse_vehicle_battery_level Entität",entity:"Entität",name:"Name",icon:"Symbol"},es:{disabled:"desactivado",sleeping:"desactivado",active:"activo",charging:"cargando","not connected":"en espera",connected:"conectado",error:"error",power:"potencia",current:"corriente",session:"sesión",elapsed:"pasado","charge rate":"amperaje",required_entities:"Entidades requeridas",entity_auto_success:"Todas las entidades requeridas se encontraron automáticamente",entity_auto_fail:"Algunas entidades no pudieron ser detectadas automáticamente",entity_auto_loading:"Cargando entidades del dispositivo","additional entities":"Entidades adicionales","new limit":"Nuevo Límite","add charging limit":"Añadir Límite de Carga",time:"Tiempo",energy:"Energía",battery:"Batería",range:"Autonomía",hours:"Horas",minutes:"Minutos",cancel:"Cancelar","add limit":"Añadir Límite","header title":"Título del encabezado","display header":"Mostrar encabezado",features:"Características","enable vehicle battery":"Habilitar batería del vehículo","enable vehicle range":"Habilitar autonomía del vehículo","limits settings":"Configuración de límites","maximum charge energy":"Energía máxima de carga (kWh)","maximum vehicle range":"Autonomía máxima del vehículo (millas|km)","openevse device":"Dispositivo OpenEVSE","select your openevse device":"Seleccione su dispositivo OpenEVSE para completar automáticamente todas las entidades","override state":"Estado de anulación","select openevse.override_state entity":"Seleccione la entidad openevse.override_state","station status":"Estado de la estación","select openevse.station_status entity":"Seleccione la entidad openevse.station_status","current power usage":"Consumo de energía actual","select openevse.current_power_usage entity":"Seleccione la entidad openevse.current_power_usage","charging current":"Corriente de carga","select openevse.charging_current entity":"Seleccione la entidad openevse.charging_current","vehicle connected":"Vehículo conectado","select openevse.vehicle_connected entity":"Seleccione la entidad openevse.vehicle_connected","charging status":"Estado de carga","select openevse.charging_status entity":"Seleccione la entidad openevse.charging_status","session energy":"Energía de sesión","select openevse.usage_this_session entity":"Seleccione la entidad openevse.usage_this_session","charge time elapsed":"Tiempo de carga transcurrido","select openevse.charge_time_elapsed entity":"Seleccione la entidad openevse.charge_time_elapsed","wifi signal":"Señal Wifi","select openevse_wifi_signal_strength entity":"Seleccione la entidad openevse_wifi_signal_strength","limit active":"Límite activo","select openevse_limit_active entity":"Seleccione la entidad openevse_limit_active","vehicle range":"Autonomía del vehículo","select openevse_vehicle_range entity":"Seleccione la entidad openevse_vehicle_range","battery level":"Nivel de batería","select openevse_vehicle_battery_level entity":"Seleccione la entidad openevse_vehicle_battery_level",entity:"Entidad",name:"Nombre",icon:"Icono"}};function ue(e,t="en"){const i=e.toLowerCase();return t in he&&i in he[t]?he[t][i]:"en"in he&&i in he.en?he.en[i]:e}const ve=["ha-form","ha-icon","ha-icon-button","ha-selector","ha-textfield","ha-icon-picker","ha-icon-button","ha-entity-picker"],ge=async()=>{try{if(ve.every((e=>customElements.get(e))))return;await Promise.race([customElements.whenDefined("partial-panel-resolver"),new Promise(((e,t)=>setTimeout((()=>t(new Error("Timeout waiting for partial-panel-resolver"))),1e4)))]);const e=document.createElement("partial-panel-resolver");if(!e)throw new Error("Failed to create partial-panel-resolver element");if(e.hass={panels:[{url_path:"tmp",component_name:"config"}]},"function"!=typeof e._updateRoutes)throw new Error("partial-panel-resolver does not have _updateRoutes method");if(e._updateRoutes(),!e.routerOptions?.routes?.tmp?.load)throw new Error("Failed to create tmp route in partial-panel-resolver");await Promise.race([e.routerOptions.routes.tmp.load(),new Promise(((e,t)=>setTimeout((()=>t(new Error("Timeout loading tmp route"))),1e4)))]),await Promise.race([customElements.whenDefined("ha-panel-config"),new Promise(((e,t)=>setTimeout((()=>t(new Error("Timeout waiting for ha-panel-config"))),1e4)))]);const t=document.createElement("ha-panel-config");if(!t)throw new Error("Failed to create ha-panel-config element");if(!t.routerOptions?.routes?.automation?.load)throw new Error("ha-panel-config does not have automation route");await Promise.race([t.routerOptions.routes.automation.load(),new Promise(((e,t)=>setTimeout((()=>t(new Error("Timeout loading automation components"))),1e4)))]);const i=ve.filter((e=>!customElements.get(e)));if(i.length>0)throw new Error(`Failed to load components: ${i.join(", ")}`)}catch(e){console.error("Error loading Home Assistant form components:",e);try{if(window.customElements&&window.customElements.get("home-assistant")){console.log("Attempting fallback loading method for HA components");const e=new CustomEvent("ha-request-load-components",{detail:{components:ve},bubbles:!0,composed:!0});document.dispatchEvent(e)}}catch(e){console.error("Fallback loading method failed:",e)}}};var pe=function(e,t,i,s){for(var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let me=class extends ne{constructor(){super(),this.min=0,this.max=32,this.step=1,this.value=0,this.unit="A",this.disabled=!1,this.label="Charge Rate",this._sliderValue=0,this._dragging=!1,this._boundHandleSliderMove=this._handleSliderMove.bind(this),this._boundHandleSliderEnd=this._handleSliderEnd.bind(this)}updated(e){e.has("value")&&!this._dragging&&(this._sliderValue=this.value)}connectedCallback(){super.connectedCallback(),this._sliderValue=this.value}disconnectedCallback(){super.disconnectedCallback(),this._removeEventListeners()}get _percentage(){const e=this.max-this.min;return 0===e?0:(this._sliderValue-this.min)/e*100}_formatValue(e){return this.step<1?e.toFixed(1):e.toFixed(0)}_handleSliderStart(e){this.disabled||(this._dragging=!0,this._updateSliderValue(e),window.addEventListener("mousemove",this._boundHandleSliderMove),window.addEventListener("touchmove",this._boundHandleSliderMove),window.addEventListener("mouseup",this._boundHandleSliderEnd),window.addEventListener("touchend",this._boundHandleSliderEnd))}_handleSliderMove(e){this._dragging&&this._updateSliderValue(e)}_handleSliderEnd(){this._dragging&&(this._removeEventListeners(),this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:this._sliderValue},bubbles:!0,composed:!0})),setTimeout((()=>{this._dragging=!1}),100))}_removeEventListeners(){window.removeEventListener("mousemove",this._boundHandleSliderMove),window.removeEventListener("touchmove",this._boundHandleSliderMove),window.removeEventListener("mouseup",this._boundHandleSliderEnd),window.removeEventListener("touchend",this._boundHandleSliderEnd)}_updateSliderValue(e){const t=this.shadowRoot?.querySelector(".slider-wrapper");if(!t)return;const i=t.getBoundingClientRect();let s;s="touches"in e?e.touches[0].clientX:e.clientX;let n=(s-i.left)/i.width;n=Math.min(Math.max(n,0),1);let r=this.min+n*(this.max-this.min);r=Math.round(r/this.step)*this.step,r=Math.min(Math.max(r,this.min),this.max),this._sliderValue=Number(r.toFixed(2)),this.requestUpdate()}render(){return q`
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
    `}};me.styles=r`
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
  `,pe([ce({type:Number})],me.prototype,"min",void 0),pe([ce({type:Number})],me.prototype,"max",void 0),pe([ce({type:Number})],me.prototype,"step",void 0),pe([ce({type:Number})],me.prototype,"value",void 0),pe([ce({type:String})],me.prototype,"unit",void 0),pe([ce({type:Boolean})],me.prototype,"disabled",void 0),pe([ce({type:String})],me.prototype,"label",void 0),pe([le()],me.prototype,"_sliderValue",void 0),pe([le()],me.prototype,"_dragging",void 0),pe([function(e){return(t,i)=>{const s="function"==typeof t?t:t[i];Object.assign(s,e)}}({passive:!0})],me.prototype,"_handleSliderStart",null),me=pe([(e=>(t,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)})("evse-slider")],me);var ye=function(e,t,i,s){for(var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};class _e extends ne{constructor(){super(),this.feat_soc=!1,this.feat_range=!1,this.energy_max_value=100,this.range_max_value=600,this.range_unit="km",this.language="en",this._showLimitForm=!1,this._selectedLimitType="time",this._hours=0,this._minutes=0,this._value=0}static get styles(){return r`
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
       /* Removed .limit-slider and related thumb styles */
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
    `}_toggleLimitForm(){this._showLimitForm=!this._showLimitForm,this._selectedLimitType="time",this._hours=0,this._minutes=0,this._value=0,this.requestUpdate()}_handleTypeChange(e){const t=e.target;this._selectedLimitType=t.value,this.requestUpdate()}_handleHoursChange(e){const t=e.target;this._hours=parseInt(t.value)||0,this.requestUpdate()}_handleMinutesChange(e){const t=e.target;this._minutes=parseInt(t.value)||0,this.requestUpdate()}_handleValueChange(e){const t=e.target,i=parseInt(t.value)||0;"energy"===this._selectedLimitType?this._value=1e3*i:this._value=i,this.requestUpdate()}_handleSliderChange(e){const t=e.detail.value;"energy"===this._selectedLimitType?this._value=Math.round(1e3*t):this._value=t,this.requestUpdate()}_formatValue(e,t){if("energy"===t){return`${Math.round(e/1e3)} kWh`}return"soc"===t?`${e}%`:"range"===t?`${e} ${this.range_unit}`:String(e)}_addLimit(){if("time"===this._selectedLimitType){const e=60*this._hours+this._minutes;e>0&&this.setLimit&&this.setLimit("time",e)}else["energy","soc","range"].includes(this._selectedLimitType)&&this._value>0&&this.setLimit&&this.setLimit(this._selectedLimitType,this._value);this._showLimitForm=!1}_removeLimit(){this.delLimit&&this.delLimit()}_isAddButtonDisabled(){return"time"===this._selectedLimitType?0===this._hours&&0===this._minutes:!["energy","soc","range"].includes(this._selectedLimitType)||0===this._value}_formatTimeValue(e){return[Math.floor(e/60),e%60,0].map((e=>String(e).padStart(2,"0"))).join(":")}render(){return this.limit&&this.limit.type?q`
        <div class="limit-container">
          <div class="limit-badge">
            <ha-icon icon="${"time"===this.limit.type?"mdi:clock":"range"===this.limit.type?"mdi:map-marker-distance":"soc"===this.limit.type?"mdi:battery-medium":"mdi:lightning-bolt"}"></ha-icon>
            <span class="limit-type">
              ${"time"===this.limit.type?ue("time",this.language)+": ":"energy"===this.limit.type?ue("energy",this.language)+": ":"range"===this.limit.type?ue("range",this.language)+": ":"soc"===this.limit.type?ue("battery",this.language)+": ":""}
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
      `:this._showLimitForm?q`
      <div class="limit-container">
        <button class="new-limit-btn" @click=${this._toggleLimitForm}>
          <ha-icon icon="mdi:plus"></ha-icon>
          ${ue("new limit",this.language)}
        </button>
      </div>
        <div class="modal-overlay">
          <div class="limit-form">
          <div class="form-header">${ue("add charging limit",this.language)}</div>

          <div class="form-row">
            <div class="select">
              <select id="limit-type" @change=${this._handleTypeChange}>
                  <option value="time" ?selected=${"time"===this._selectedLimitType}>${ue("time",this.language)}</option>
                  <option value="energy" ?selected=${"energy"===this._selectedLimitType}>${ue("energy",this.language)}</option>
                  ${this.feat_soc?q`
                    <option value="soc" ?selected=${"soc"===this._selectedLimitType}>${ue("battery",this.language)}</option>
                    `:""}
                  ${this.feat_range?q`
                    <option value="range" ?selected=${"range"===this._selectedLimitType}>${ue("range",this.language)}</option>
                    `:""}
              </select>
            </div>
          </div>

          ${"time"===this._selectedLimitType?q`
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
                <label>${ue("hours",this.language)}</label>
              </div>
              <div class="time-input">
                <input
                  type="number"
                  min="0"
                  max="59"
                  .value=${String(this._minutes)}
                  @input=${this._handleMinutesChange}
                >
                <label>${ue("minutes",this.language)}</label>
              </div>
            </div>
          </div>
          `:""}
          ${"time"!==this._selectedLimitType?q`
          <div class="form-row">
            <evse-slider
              .min=${0}
              .max=${"range"===this._selectedLimitType?this.range_max_value:"energy"===this._selectedLimitType?this.energy_max_value:100}
              .step=${1}
              .value=${"energy"===this._selectedLimitType?Math.round(this._value/1e3):this._value}
              .unit=${"range"===this._selectedLimitType?this.range_unit:"energy"===this._selectedLimitType?"kWh":"%"}
              .label=${""}
              @value-changed=${this._handleSliderChange}
            ></evse-slider>
          </div>
          `:""}

            <div class="form-actions">
              <button class="btn btn-secondary" @click=${this._toggleLimitForm}>${ue("cancel",this.language)}</button>
              <button
                class="btn btn-primary"
                ?disabled=${this._isAddButtonDisabled()}
                @click=${this._addLimit}
              >
                ${ue("add limit",this.language)}
              </button>
            </div>
          </div>
        </div>
      `:q`
      <div class="limit-container">
        <button class="new-limit-btn" @click=${this._toggleLimitForm}>
          <ha-icon icon="mdi:plus"></ha-icon>
          ${ue("new limit",this.language)}
        </button>
      </div>
    `}}ye([ce({attribute:!1})],_e.prototype,"limit",void 0),ye([ce({attribute:!1})],_e.prototype,"setLimit",void 0),ye([ce({attribute:!1})],_e.prototype,"delLimit",void 0),ye([ce({type:Boolean})],_e.prototype,"feat_soc",void 0),ye([ce({type:Boolean})],_e.prototype,"feat_range",void 0),ye([ce({type:Number})],_e.prototype,"energy_max_value",void 0),ye([ce({type:Number})],_e.prototype,"range_max_value",void 0),ye([ce({type:String})],_e.prototype,"range_unit",void 0),ye([ce({type:String})],_e.prototype,"language",void 0),ye([le()],_e.prototype,"_showLimitForm",void 0),ye([le()],_e.prototype,"_selectedLimitType",void 0),ye([le()],_e.prototype,"_hours",void 0),ye([le()],_e.prototype,"_minutes",void 0),ye([le()],_e.prototype,"_value",void 0),customElements.define("limit-component",_e);var be=function(e,t,i,s){for(var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};class fe extends ne{constructor(){super(),this.label="",this.value=0,this.unit="",this.max_value=100,this.icon=""}static get styles(){return r`
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
    `}render(){const e=this.max_value>0?100*this.value/this.max_value:0;return q`
    <div class="container">
      <div class="label">
        ${this.icon?q`<ha-icon class="icon" icon=${this.icon}> </ha-icon>`:""}
        ${this.label?this.label:""}
      </div>
      <div class="progress">
        <div
          class="progress-fill"
          style="width: ${e}%"
        ></div>
        <div class="value">
          ${this.value}${this.unit}
        </div>
      </div>
    </div>

    `}}be([ce({type:String})],fe.prototype,"label",void 0),be([ce({type:Number})],fe.prototype,"value",void 0),be([ce({type:String})],fe.prototype,"unit",void 0),be([ce({type:Number})],fe.prototype,"max_value",void 0),be([ce({type:String})],fe.prototype,"icon",void 0),customElements.define("progress-bar",fe);var we=function(e,t,i,s){for(var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};class xe extends ne{static get styles(){return de}_wifiIcon(e){return e>=-65?"mdi:wifi-strength-4":-65>e&&e>=-70?"mdi:wifi-strength-3":-70>e&&e>=-75?"mdi:wifi-strength-2":-75>e&&e>=-80?"mdi:wifi-strength-1":"mdi:wifi-strength-alert-outline"}_handleIconClick(e){const t=this.config?.[e];this.showMoreInfoHandler&&"string"==typeof t&&t&&this.showMoreInfoHandler(t)}render(){if(!this.hass||!this.config)return q``;const e=Number(this.wifiSignalEntity?.state),t=this.statusEntity?.state,i=this.vehicleConnectedEntity?.state,s=this.chargingStatusEntity?.state;return q`
            <div class="status-icons">
                ${this.wifiSignalEntity?q`
                    <div
                        class="status-icon clickable"
                        @click=${()=>this._handleIconClick("wifi_signal_strength_entity")}
                    >
                        <ha-icon
                            icon="${this._wifiIcon(e)}"
                            class="wifi-icon"
                        ></ha-icon>
                    </div>
                `:""}

                <div
                    class="status-icon clickable"
                    @click=${()=>this._handleIconClick("status_entity")}
                >
                    <ha-icon
                        icon="${"active"===t?"off"===i?"mdi:timer-sand":"mdi:lightning-bolt":"mdi:cancel"}"
                        class="${"active"===t?"charging"===s?"charging":"active bg-active":"disabled bg-disabled"}"
                    ></ha-icon>
                </div>

                <div
                    class="status-icon clickable"
                    @click=${()=>this._handleIconClick("vehicle_connected_entity")}
                >
                    <ha-icon
                        icon="${"off"===i?"mdi:car-off":"mdi:car"}"
                        class="${"off"===i?"disabled bg-disabled":"active bg-active"}"
                    ></ha-icon>
                </div>
            </div>
        `}}we([ce({attribute:!1})],xe.prototype,"hass",void 0),we([ce({attribute:!1})],xe.prototype,"config",void 0),we([ce({attribute:!1})],xe.prototype,"wifiSignalEntity",void 0),we([ce({attribute:!1})],xe.prototype,"statusEntity",void 0),we([ce({attribute:!1})],xe.prototype,"vehicleConnectedEntity",void 0),we([ce({attribute:!1})],xe.prototype,"chargingStatusEntity",void 0),we([ce({attribute:!1})],xe.prototype,"showMoreInfoHandler",void 0),customElements.define("status-icons",xe);var $e=function(e,t,i,s){for(var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};class Ee extends ne{static get styles(){return de}render(){const e=this.chargingStatusEntity?.state,t=this.statusEntity?.state;return q`
            <div class="status-heading">
                <div class="status-badge ${"error"===e?"badge-error":"disabled"===t?"badge-disabled":"charging"===e?"badge-charging":"badge-active"}">
                    ${ue(e||"",this.language)}
                </div>
            </div>
        `}}$e([ce({attribute:!1})],Ee.prototype,"statusEntity",void 0),$e([ce({attribute:!1})],Ee.prototype,"chargingStatusEntity",void 0),$e([ce({attribute:!1})],Ee.prototype,"language",void 0),customElements.define("status-heading",Ee);var Se=function(e,t,i,s){for(var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};class ke extends ne{constructor(){super(...arguments),this.localTimeElapsed=0}static get styles(){return de}_handleItemClick(e){const t=this.config?.[e];this.showMoreInfoHandler&&"string"==typeof t&&t&&this.showMoreInfoHandler(t)}render(){return this.hass&&this.config&&this.convertTimeHandler?q`
            <div class="grid-container">
                ${this.powerEntity?q`
                        <div class="grid-item">
                            <div class="grid-item-label">${ue("power",this.language)}</div>
                            <div
                                class="grid-item-value clickable"
                                @click=${()=>this._handleItemClick("power_entity")}
                            >
                                ${this.hass.formatEntityState(this.powerEntity)}
                            </div>
                        </div>
                        `:q`
                        <div class="grid-item">
                            <div class="grid-item-label">${ue("power",this.language)}</div>
                            <div class="grid-item-value">0 W</div>
                        </div>`}
                ${this.currentEntity?q`
                        <div class="grid-item">
                            <div class="grid-item-label">${ue("current",this.language)}</div>
                            <div
                                class="grid-item-value clickable"
                                @click=${()=>this._handleItemClick("current_entity")}
                            >
                                ${this.hass.formatEntityState(this.currentEntity)}
                            </div>
                        </div>
                        `:q`
                        <div class="grid-item">
                            <div class="grid-item-label">${ue("current",this.language)}</div>
                            <div class="grid-item-value">0 A</div>
                        </div>`}
                ${this.sessionEnergyEntity?q`
                        <div class="grid-item">
                            <div class="grid-item-label">${ue("session",this.language)}</div>
                            <div
                                class="grid-item-value clickable"
                                @click=${()=>this._handleItemClick("session_energy_entity")}
                            >
                                ${this.hass.formatEntityState(this.sessionEnergyEntity)}
                            </div>
                        </div>
                        `:q`
                        <div class="grid-item">
                            <div class="grid-item-label">${ue("session",this.language)}</div>
                            <div class="grid-item-value">0 kWh</div>
                        </div>
                        `}
                ${this.timeElapsedEntity?q`
                        <div class="grid-item">
                            <div class="grid-item-label">${ue("elapsed",this.language)}</div>
                            <div class="grid-item-value">
                                ${this.convertTimeHandler(this.localTimeElapsed||0)}
                            </div>
                        </div>
                       `:q`
                        <div class="grid-item">
                            <div class="grid-item-label">${ue("elapsed",this.language)}</div>
                            <div class="grid-item-value">00:00:00</div>
                        </div>`}
            </div>
        `:q``}}Se([ce({attribute:!1})],ke.prototype,"hass",void 0),Se([ce({attribute:!1})],ke.prototype,"config",void 0),Se([ce({attribute:!1})],ke.prototype,"powerEntity",void 0),Se([ce({attribute:!1})],ke.prototype,"currentEntity",void 0),Se([ce({attribute:!1})],ke.prototype,"sessionEnergyEntity",void 0),Se([ce({attribute:!1})],ke.prototype,"timeElapsedEntity",void 0),Se([ce({type:Number})],ke.prototype,"localTimeElapsed",void 0),Se([ce({type:String})],ke.prototype,"language",void 0),Se([ce({attribute:!1})],ke.prototype,"showMoreInfoHandler",void 0),Se([ce({attribute:!1})],ke.prototype,"convertTimeHandler",void 0),customElements.define("info-grid",ke);var Ce=function(e,t,i,s){for(var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};class ze extends ne{static get styles(){return de}render(){if(!this.config)return q``;const e=this.config.feat_soc&&this.vehicleBatteryLevelEntity,t=this.config.feat_range&&this.vehicleRangeEntity;return e||t?q`
            <div class="vehicle">
                ${e?q`
                    <progress-bar
                        value=${Number(this.vehicleBatteryLevelEntity?.state)}
                        unit="%"
                        icon="mdi:battery-medium"
                    ></progress-bar>
                `:""}
                ${t?q`
                    <progress-bar
                        value=${Number(this.vehicleRangeEntity?.state)}
                        max_value=${this.config?.feat_max_range||600}
                        unit=${this.vehicleRangeEntity?.attributes.unit_of_measurement||""}
                        icon="mdi:map-marker-distance"
                    ></progress-bar>
                `:""}
            </div>
        `:q``}}Ce([ce({attribute:!1})],ze.prototype,"config",void 0),Ce([ce({attribute:!1})],ze.prototype,"vehicleBatteryLevelEntity",void 0),Ce([ce({attribute:!1})],ze.prototype,"vehicleRangeEntity",void 0),customElements.define("vehicle-info",ze);var je=function(e,t,i,s){for(var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};class Ae extends ne{static get styles(){return de}_handleButtonClick(e){const t=this.config?.override_entity;this.selectOverrideStateHandler&&"string"==typeof t&&t&&this.selectOverrideStateHandler(t,e)}render(){if(!this.config||!this.overrideEntity)return q``;const e=this.overrideEntity?.state,t=this.chargingStatusEntity?.state;return q`
            <div class="override-controls">
                <div class="override-row">
                    <div
                        class="override-button ${"active"===e?"active":""}"
                        data-option="active"
                        @click=${()=>this._handleButtonClick("active")}
                    >
                        <ha-icon
                            icon="mdi:lightning-bolt"
                            class="${"active"===e&&"charging"===t?"charging":""}"
                        ></ha-icon>
                    </div>
                    <div
                        class="override-button ${"auto"===e?"active":""}"
                        data-option="auto"
                        @click=${()=>this._handleButtonClick("auto")}
                    >
                        <ha-icon
                            icon="mdi:robot"
                            class="${"auto"===e&&"charging"===t?"charging":""}"
                        ></ha-icon>
                    </div>
                    <div
                        class="override-button ${"disabled"===e?"active":""}"
                        data-option="disabled"
                        @click=${()=>this._handleButtonClick("disabled")}
                    >
                        <ha-icon icon="mdi:cancel"></ha-icon>
                    </div>
                </div>
            </div>
        `}}je([ce({attribute:!1})],Ae.prototype,"config",void 0),je([ce({attribute:!1})],Ae.prototype,"overrideEntity",void 0),je([ce({attribute:!1})],Ae.prototype,"chargingStatusEntity",void 0),je([ce({attribute:!1})],Ae.prototype,"selectOverrideStateHandler",void 0),customElements.define("override-controls",Ae);var Oe=function(e,t,i,s){for(var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};class Le extends ne{constructor(){super(...arguments),this.entities=[]}static get styles(){return de}_handleEntityClick(e){this.showMoreInfoHandler&&e&&this.showMoreInfoHandler(e)}render(){return this.hass&&this.entities&&0!==this.entities.length?q`
            ${this.entities.map((e=>q`
                <div class="other-entities-container">
                    <div class="entity-row">
                        <div class="entity-title">
                            ${null!=e.icon?q`
                                    <div class="entity-icon">
                                        <ha-icon icon=${e.icon}></ha-icon>
                                    </div>
                                `:q`<div class="entity-icon"></div>`}
                            <div class="entity-label">
                                ${e.name||e.id||""}
                            </div>
                        </div>
                        <div
                            class="entity-value clickable"
                            @click=${()=>this._handleEntityClick(e.id)}
                        >
                            ${e.value||""}
                        </div>
                    </div>
                </div>
            `))}
        `:q``}}Oe([ce({attribute:!1})],Le.prototype,"hass",void 0),Oe([ce({attribute:!1})],Le.prototype,"entities",void 0),Oe([ce({attribute:!1})],Le.prototype,"showMoreInfoHandler",void 0),customElements.define("optional-entities",Le);var Me=function(e,t,i,s){for(var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};class Te extends ne{constructor(){super(),this._localTimeElapsed=0,this._lastEntityTime=0,this._timeUpdateInterval=null,this._isCharging=!1,this._limit=null,this._hasLimit=!1}disconnectedCallback(){super.disconnectedCallback(),this._timeUpdateInterval&&(clearInterval(this._timeUpdateInterval),this._timeUpdateInterval=null)}async firstUpdated(){try{await ge()}catch(e){console.error("Error loading ha-components:",e)}this._lang=this.hass?.language||"en"}getGridOptions(){return{columns:12,max_columns:12,min_columns:9}}_setupTimeInterval(){this._timeUpdateInterval&&(clearInterval(this._timeUpdateInterval),this._timeUpdateInterval=null),this._isCharging&&(this._timeUpdateInterval=window.setInterval((()=>{this._localTimeElapsed+=1/60}),1e3))}updated(e){if(e.has("hass")&&this.hass){if(this._lang=this.hass.language||"en",this.config&&this.config.charging_status_entity&&this.hass.states[this.config.charging_status_entity]){const e="charging"===this.hass.states[this.config.charging_status_entity].state;e!==this._isCharging&&(this._isCharging=e,this._setupTimeInterval())}if(this.config&&this.config.time_elapsed_entity&&this.hass.states[this.config.time_elapsed_entity]){const e=this.hass.states[this.config.time_elapsed_entity],t=parseFloat(e.state);isNaN(t)||t===this._lastEntityTime||(this._lastEntityTime=t,this._localTimeElapsed=t)}if(this.config&&this.config.limit_active_entity&&this.hass.states[this.config.limit_active_entity]){const e="on"===this.hass.states[this.config.limit_active_entity].state;e!=this._hasLimit&&(this._hasLimit=e,this.config.device_id&&this._getLimit().then((e=>{this._limit=e})))}}if(e.has("config")&&!e.has("hass")&&this.config&&this.hass){if(this.config.charging_status_entity&&this.hass.states[this.config.charging_status_entity]){const e=this.hass.states[this.config.charging_status_entity];this._isCharging="charging"===e.state}if(this.config.time_elapsed_entity&&this.hass.states[this.config.time_elapsed_entity]){const e=this.hass.states[this.config.time_elapsed_entity];e&&(this._lastEntityTime=parseFloat(e.state),this._localTimeElapsed=this._lastEntityTime,this._isCharging&&this._setupTimeInterval())}}}static getConfigElement(){return document.createElement("openevse-card-editor")}static getStubConfig(){return{header:!0,name:"OpenEVSE",feat_soc:!1,feat_range:!1,feat_max_range:600,feat_max_energy:100,device_id:"",override_entity:"",status_entity:"",power_entity:"",current_entity:"",charge_rate_entity:"",vehicle_connected_entity:"",charging_status_entity:"",session_energy_entity:"",time_elapsed_entity:"",wifi_signal_strength_entity:"",limit_active_entity:"",vehicle_battery_level_entity:"",vehicle_range_entity:"",optional_entities:[]}}static get styles(){return de}setConfig(e){this.config=e}getCardSize(){return 3}_selectOverrideState(e,t){this.hass&&this.hass.callService("select","select_option",{entity_id:e,option:t.toString()})}async _getLimit(){if(!this.hass)return null;try{const e=await this.hass.callService("openevse","get_limit",{device_id:this.config?.device_id},void 0,!1,!0);return e?.response?e.response:null}catch(e){return console.error("Error while getting limit",e),null}}_setLimit(e,t){if(this.hass)try{return void this.hass.callService("openevse","set_limit",{device_id:this.config?.device_id,type:e,value:t,auto_release:!0},void 0,!1,!1)}catch(e){return void console.error("Error while setting limit",e)}}_delLimit(){if(this.hass)try{return void this.hass.callService("openevse","clear_limit",{device_id:this.config?.device_id},void 0,!1,!1)}catch(e){return void console.error("Error while removing limit",e)}}_showMoreInfo(e){const t=new Event("hass-more-info",{bubbles:!0,composed:!0});t.detail={entityId:e},this.dispatchEvent(t)}_getEntityState(e){const t=this.config?.[e];return"string"==typeof t&&t&&this.hass?.states&&this.hass.states[t]||null}_convertSeconds(e){if(isNaN(e)||e<0||null==e)return"00:00:00";return[Math.floor(e/3600),Math.floor(e%3600/60),Math.floor(e%60)].map((e=>String(e).padStart(2,"0"))).join(":")}_convertTime(e){if(isNaN(e)||e<0)return"00:00:00";const t=Math.round(60*e);return this._convertSeconds(t)}_updateSlider(e){this.hass&&this.config?.charge_rate_entity&&this.hass.callService("number","set_value",{entity_id:this.config.charge_rate_entity,value:e.detail.value})}render(){if(!this.hass||!this.config)return q``;const e=this._getEntityState("override_entity"),t=this._getEntityState("status_entity"),i=this._getEntityState("power_entity"),s=this._getEntityState("current_entity"),n=this._getEntityState("charge_rate_entity"),r=this._getEntityState("vehicle_connected_entity"),o=this._getEntityState("charging_status_entity"),a=this._getEntityState("session_energy_entity"),c=this._getEntityState("time_elapsed_entity"),l=this._getEntityState("wifi_signal_strength_entity"),d=this._getEntityState("vehicle_battery_level_entity"),h=this._getEntityState("vehicle_range_entity"),u=(()=>this.config?.optional_entities?.map((e=>({name:e.name?e.name:e.id?this.hass?.states[e.id]?.attributes.friendly_name:null,value:e.id?this.hass?.formatEntityState(this.hass.states[e.id])??null:null,icon:e.icon,id:e.id?e.id:void 0})))??[])();return q`
        <ha-card>
            ${this.config.header?q`<h1 class="card-header">
                    ${this.config.name||"OpenEVSE"}
                    </h1>`:""}
            <div class="card-content">
                <div class="evse-states">
                    <status-icons
                        .hass=${this.hass}
                        .config=${this.config}
                        .wifiSignalEntity=${l}
                        .statusEntity=${t}
                        .vehicleConnectedEntity=${r}
                        .chargingStatusEntity=${o}
                        .showMoreInfoHandler=${this._showMoreInfo.bind(this)}
                    ></status-icons>
                    <status-heading
                        .statusEntity=${t}
                        .chargingStatusEntity=${o}
                        .language=${this._lang}
                    ></status-heading>
                            </div>
                   <info-grid
                       .hass=${this.hass}
                       .config=${this.config}
                       .powerEntity=${i}
                       .currentEntity=${s}
                       .sessionEnergyEntity=${a}
                       .timeElapsedEntity=${c}
                       .localTimeElapsed=${this._localTimeElapsed}
                       .language=${this._lang}
                       .showMoreInfoHandler=${this._showMoreInfo.bind(this)}
                       .convertTimeHandler=${this._convertTime.bind(this)}
                   ></info-grid>
                   <vehicle-info
                       .config=${this.config}
                       .vehicleBatteryLevelEntity=${d}
                       .vehicleRangeEntity=${h}
                   ></vehicle-info>

                  <override-controls
                      .config=${this.config}
                      .overrideEntity=${e}
                      .chargingStatusEntity=${o}
                      .selectOverrideStateHandler=${this._selectOverrideState.bind(this)}
                  ></override-controls>
                    <div class="container">
                        <evse-slider
                            .min=${"number"==typeof n?.attributes.min?n.attributes.min:0}
                            .max=${"number"==typeof n?.attributes.max?n.attributes.max:32}
                            .step=${"number"==typeof n?.attributes.step?n.attributes.step:1}
                            .value=${Number(n?.state||0)}
                            .unit=${"string"==typeof n?.attributes.unit_of_measurement?n.attributes.unit_of_measurement:"A"}
                            .label=${ue("charge rate",this._lang)}
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
                            .range_unit=${String(h?.attributes.unit_of_measurement||"")}
                            .language=${this._lang}
                        ></limit-component>
                    </div>
                    <!-- End of Limit -->
                    <optional-entities
                        .hass=${this.hass}
                        .entities=${u}
                        .showMoreInfoHandler=${this._showMoreInfo.bind(this)}
                    ></optional-entities>
            </div>
        </ha-card>
    `}}Me([ce({attribute:!1})],Te.prototype,"hass",void 0),Me([ce({attribute:!1})],Te.prototype,"config",void 0),Me([le()],Te.prototype,"_lang",void 0),Me([le()],Te.prototype,"_localTimeElapsed",void 0),Me([le()],Te.prototype,"_lastEntityTime",void 0),Me([le()],Te.prototype,"_timeUpdateInterval",void 0),Me([le()],Te.prototype,"_isCharging",void 0),Me([le()],Te.prototype,"_limit",void 0),Me([le()],Te.prototype,"_hasLimit",void 0);var Ne=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function Pe(e,t){if(e.length!==t.length)return!1;for(var i=0;i<e.length;i++)if(s=e[i],n=t[i],!(s===n||Ne(s)&&Ne(n)))return!1;var s,n;return!0}function Ve(e,t){void 0===t&&(t=Pe);var i=null;function s(){for(var s=[],n=0;n<arguments.length;n++)s[n]=arguments[n];if(i&&i.lastThis===this&&t(s,i.lastArgs))return i.lastResult;var r=e.apply(this,s);return i={lastResult:r,lastArgs:s,lastThis:this},r}return s.clear=function(){i=null},s}function He(e,t,i,s,n,r={},o="en"){return{name:e,selector:{entity:{domain:t,include_entities:(Array.isArray(t)?t:[t]).flatMap((e=>r[e]||[]))}},label:ue(i,o),helper_text:ue(s,o),required:n}}const Ie=Ve(((e={},t="en")=>[...[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}},required:!1,label:ue("header title",t)},{name:"header",selector:{boolean:{}},label:ue("display header",t)}]},{type:"grid",name:"",label:ue("features",t),schema:[{name:"feat_soc",selector:{boolean:{}},label:ue("enable vehicle battery",t)},{name:"feat_range",selector:{boolean:{}},label:ue("enable vehicle range",t)}]},{type:"grid",name:"",label:ue("limits settings",t),schema:[{name:"feat_max_energy",selector:{number:{}},required:!1,label:ue("maximum charge energy",t)},{name:"feat_max_range",selector:{number:{}},required:!1,label:ue("maximum vehicle range",t)}]},{name:"device_id",selector:{device:{integration:"openevse",manufacturer:"OpenEVSE"}},label:ue("openevse device",t),helper_text:ue("select your openevse device",t),required:!0}],...[He("override_entity",["input_select","select"],"override state","select openevse.override_state entity",!0,e,t),He("status_entity","sensor","station status","select openevse.station_status entity",!0,e,t),He("power_entity","sensor","current power usage","select openevse.current_power_usage entity",!0,e,t),He("current_entity","sensor","charging current","select openevse.charging_current entity",!0,e,t),He("vehicle_connected_entity","binary_sensor","vehicle connected","select openevse.vehicle_connected entity",!0,e,t),He("charging_status_entity","sensor","charging status","select openevse.charging_status entity",!0,e,t),He("charge_rate_entity","number","charge rate","select openevse.charge_rate entity",!0,e,t),He("session_energy_entity","sensor","session energy","select openevse.usage_this_session entity",!0,e,t),He("time_elapsed_entity","sensor","charge time elapsed","select openevse.charge_time_elapsed entity",!0,e,t),He("wifi_signal_strength_entity","sensor","wifi signal","select openevse_wifi_signal_strength entity",!1,e,t),He("limit_active_entity","binary_sensor","limit active","select openevse_limit_active entity",!1,e,t),He("vehicle_range_entity","sensor","vehicle range","select openevse_vehicle_range entity",!1,e,t),He("vehicle_battery_level_entity","sensor","battery level","select openevse_vehicle_battery_level entity",!1,e,t)]])),We=Ve(((e={},t="en")=>[{name:"id",selector:{entity:{domain:["sensor","binary_sensor"],include_entities:[...e.sensor||[],...e.binary_sensor||[]]}},label:ue("entity",t)},{name:"name",selector:{text:{}},label:ue("name",t)},{name:"icon",selector:{icon:{}},label:ue("icon",t)}]));var qe=function(e,t,i,s){for(var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};class Re extends ne{static get styles(){return r`
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
    `}constructor(){super(),this.config={},this._deviceIdChanged=!1,this.optionalEntities=[],this.openEVSEEntities={},this.deviceEntitiesLoaded=!1,this._entityPickerKey=0}async firstUpdated(){try{await ge()}catch(e){console.error("Error loading ha-components:",e)}this._lang=this.hass?.language||"en"}setConfig(e){this.config=e,this.optionalEntities=e.optional_entities||[],e.device_id&&this.hass&&!this.deviceEntitiesLoaded&&this._loadDeviceEntities(e.device_id)}_isEntityConfigured(e){return Boolean(this.config[e]&&this.config[e].length>0)}async _loadDeviceEntities(e){if(!e||!this.hass)return;const t={},i=Object.values(this.hass.entities||{}).filter((t=>t.device_id===e)),s={override_entity:{names:["override_state"],domains:["select"],preferredPattern:"select.openevse_override_state"},status_entity:{names:["station_status"],domains:["sensor"],preferredPattern:"sensor.openevse_station_status"},power_entity:{names:["current_power_usage"],domains:["sensor"],preferredPattern:"sensor.openevse_current_power_usage"},current_entity:{names:["charging_current"],domains:["sensor"],preferredPattern:"sensor.openevse_charging_current"},vehicle_connected_entity:{names:["vehicle_connected"],domains:["binary_sensor"],preferredPattern:"binary_sensor.openevse_vehicle_connected"},charging_status_entity:{names:["charging_status"],domains:["sensor"],preferredPattern:"sensor.openevse_charging_status"},charge_rate_entity:{names:["charge_rate"],domains:["number"],preferredPattern:"number.openevse_charge_rate"},session_energy_entity:{names:["usage_this_session"],domains:["sensor"],preferredPattern:"sensor.openevse_usage_this_session"},time_elapsed_entity:{names:["charge_time_elapsed"],domains:["sensor"],preferredPattern:"sensor.openevse_charge_time_elapsed"},wifi_signal_strength_entity:{names:["wifi_signal_strength"],domains:["sensor"],preferredPattern:"sensor.openevse_wifi_signal_strength"},limit_active_entity:{names:["limit_active"],domains:["binary_sensor"],preferredPattern:"sensor.openevse_limit_active"},vehicle_battery_level_entity:{names:["vehicle_battery_level"],domains:["sensor"],preferredPattern:"sensor.openevse_vehicle_battery_level"},vehicle_range_entity:{names:["vehicle_range"],domains:["sensor"],preferredPattern:"sensor.openevse_vehicle_range"}};for(const[e,n]of Object.entries(s)){if(this._isEntityConfigured(e)&&!this._deviceIdChanged)continue;const{names:s,domains:r,preferredPattern:o}=n;let a=i.find((e=>e.entity_id.toLowerCase()===o.toLowerCase()));a||(a=i.find((e=>{const t=e.entity_id.toLowerCase(),i=t.split(".")[0];return!!r.includes(i)&&s.some((i=>t.includes(i.toLowerCase())||e.original_name&&e.original_name.toLowerCase().includes(i.toLowerCase())))}))),a&&(t[e]=a.entity_id)}this.openEVSEEntities=t,this.deviceEntitiesLoaded=!0;const n={...this.config};for(const[e,i]of Object.entries(t))this._isEntityConfigured(e)&&!this._deviceIdChanged||(n[e]=i);this._deviceIdChanged=!1,this.config=n,this._fireConfigChanged(n)}_handleConfigChange(e){const t=e.detail.value;t.device_id!==this.config.device_id?(this._deviceIdChanged=!0,this.deviceEntitiesLoaded=!1,this.config={...this.config,...t},this._loadDeviceEntities(t.device_id)):this._dispatchConfigChanged(t)}_dispatchConfigChanged(e){const t={...e,optional_entities:this.optionalEntities};this.config=t,this._fireConfigChanged(t)}_fireConfigChanged(e){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e}}))}_addOptionalEntity(e){const t=e.target?.value;if(t&&!this.optionalEntities.some((e=>e.id===t))){const e="string"==typeof this.hass?.states[t]?.attributes?.icon?this.hass.states[t].attributes.icon:null;this.optionalEntities=[...this.optionalEntities,{id:t,name:null,icon:e,value:null}],this._fireConfigChanged({...this.config,optional_entities:this.optionalEntities}),this._entityPickerKey++}}_removeEntity(e){this.optionalEntities=this.optionalEntities.filter(((t,i)=>i!==e)),this._fireConfigChanged({...this.config,optional_entities:this.optionalEntities})}_updateOptionalEntity(e,t){const i={...this.optionalEntities[e]};for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)){const s=e,n=t[s];switch(s){case"id":i.id=""===n||void 0===n?void 0:String(n);break;case"name":case"icon":i[s]=""===n||void 0===n?null:String(n)}}this.optionalEntities=this.optionalEntities.map(((t,s)=>s===e?i:t)),this._fireConfigChanged({...this.config,optional_entities:this.optionalEntities})}_getMissingEntities(){return["override_entity","status_entity","power_entity","current_entity","vehicle_connected_entity","charging_status_entity","charge_rate_entity","session_energy_entity","time_elapsed_entity","wifi_signal_strength_entity","limit_active_entity","vehicle_range_entity","vehicle_battery_level_entity"].filter((e=>{const t=this.config[e]&&this.config[e].length>0,i=this.openEVSEEntities[e]&&this.openEVSEEntities[e].length>0;return!t&&!i}))}render(){if(!this.hass)return q``;const e={};if(this.config.device_id&&this.hass.entities){Object.values(this.hass.entities).filter((e=>e.device_id===this.config.device_id)).forEach((t=>{const i=t.entity_id.split(".")[0];e[i]||(e[i]=[]),e[i].push(t.entity_id)}))}const t=Ie(e,this._lang),i=We(e,this._lang),s=this._getMissingEntities();return q`
            <!-- Auto-detection status -->
            ${this.config.device_id?q`
                <div class="entity-section">
                    ${this.deviceEntitiesLoaded?q`
                        <div class="entity-status ${s.length>0?"warning":"success"}">
                            ${0===s.length?ue("entity_auto_success",this._lang)+"!":ue("entity_auto_fail",this._lang)+": "+s.join(", ")}
                        </div>
                    `:q`
                        <div class="entity-status">
                            ${ue("entity_auto_loading",this._lang)}
                        </div>
                    `}
                </div>
            `:""}

            <div class="form-container">
                ${this.config.device_id?q`
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
                    <h3>${ue("additional entities",this._lang)}</h3>

                    ${this.optionalEntities?.map(((e,t)=>q`
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
                `:q`
                <ha-form
                    .hass=${this.hass}
                    .data=${this.openEVSEEntities}
                    .schema=${[{name:"device_id",selector:{device:{integration:"openevse",manufacturer:"OpenEVSE"}},label:ue("openevse device",this._lang),helper_text:ue("select your openevse device",this._lang),required:!0}]}
                    @value-changed=${this._handleConfigChange}
                ></ha-form>
                `}
            </div>
          `}}qe([ce({attribute:!1})],Re.prototype,"hass",void 0),qe([ce({attribute:!1})],Re.prototype,"config",void 0),qe([le()],Re.prototype,"_lang",void 0),qe([le()],Re.prototype,"_deviceIdChanged",void 0),qe([le()],Re.prototype,"optionalEntities",void 0),qe([le()],Re.prototype,"openEVSEEntities",void 0),qe([le()],Re.prototype,"deviceEntitiesLoaded",void 0),qe([le()],Re.prototype,"_entityPickerKey",void 0),customElements.define("openevse-card",Te),customElements.define("openevse-card-editor",Re),window.customCards=window.customCards||[],window.customCards.push({type:"openevse-card",name:"OpenEVSE Card",description:"A custom card for OpenEVSE"});
