/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(s,t,i)},o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,v=globalThis,p=v.trustedTypes,g=p?p.emptyScript:"",m=v.reactiveElementPolyfillSupport,f=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!a(t,e),_={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const r=s?.call(this);n.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of s){const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s,this[s]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??b)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[f("elementProperties")]=new Map,w[f("finalized")]=new Map,m?.({ReactiveElement:w}),(v.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,$=x.trustedTypes,E=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+k,A=`<${C}>`,M=document,O=()=>M.createComment(""),j=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,L="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,P=/>/g,N=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,I=/"/g,U=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),R=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),F=new WeakMap,D=M.createTreeWalker(M,129);function B(t,e){if(!z(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}let Z=class t{constructor({strings:e,_$litType$:i},s){let n;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[c,h]=((t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":3===e?"<math>":"",o=T;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(o.lastIndex=h,l=o.exec(i),null!==l);)h=o.lastIndex,o===T?"!--"===l[1]?o=V:void 0!==l[1]?o=P:void 0!==l[2]?(U.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=N):void 0!==l[3]&&(o=N):o===N?">"===l[0]?(o=n??T,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?N:'"'===l[3]?I:H):o===I||o===H?o=N:o===V||o===P?o=T:(o=N,n=void 0);const d=o===N&&t[e+1].startsWith("/>")?" ":"";r+=o===T?i+A:c>=0?(s.push(a),i.slice(0,c)+S+i.slice(c)+k+d):i+k+(-2===c?e:d)}return[B(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(e,i);if(this.el=t.createElement(c,s),D.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=D.nextNode())&&l.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(S)){const e=h[o++],i=n.getAttribute(t).split(k),s=/([.?@])?(.*)/.exec(e);l.push({type:1,index:r,name:s[2],strings:i,ctor:"."===s[1]?X:"?"===s[1]?Y:"@"===s[1]?tt:Q}),n.removeAttribute(t)}else t.startsWith(k)&&(l.push({type:6,index:r}),n.removeAttribute(t));if(U.test(n.tagName)){const t=n.textContent.split(k),e=t.length-1;if(e>0){n.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],O()),D.nextNode(),l.push({type:2,index:++r});n.append(t[e],O())}}}else if(8===n.nodeType)if(n.data===C)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=n.data.indexOf(k,t+1));)l.push({type:7,index:r}),t+=k.length-1}r++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}};function G(t,e,i=t,s){if(e===R)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const r=j(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=G(t,n._$AS(t,e.values),n,s)),e}let K=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??M).importNode(e,!0);D.currentNode=s;let n=D.nextNode(),r=0,o=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new J(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new et(n,this,t)),this._$AV.push(e),a=i[++o]}r!==a?.index&&(n=D.nextNode(),r++)}return D.currentNode=M,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},J=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),j(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==R&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>z(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&j(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Z.createElement(B(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new K(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new Z(t)),e}k(e){z(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,n=0;for(const r of e)n===i.length?i.push(s=new t(this.O(O()),this.O(O()),this,this.options)):s=i[n],s._$AI(r),n++;n<i.length&&(this._$AR(s&&s._$AB.nextSibling,n),i.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}},Q=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=G(this,t,e,0),r=!j(t)||t!==this._$AH&&t!==R,r&&(this._$AH=t);else{const s=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=G(this,s[i+o],e,o),a===R&&(a=this._$AH[o]),r||=!j(a)||a!==this._$AH[o],a===q?t=q:t!==q&&(t+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!s&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},X=class extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}},Y=class extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}},tt=class extends Q{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??q)===R)return;const i=this._$AH,s=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==q&&(i===q||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},et=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}};const it=x.litHtmlPolyfillSupport;it?.(Z,J),(x.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let st=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new J(e.insertBefore(O(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return R}};st._$litElement$=!0,st.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:st});const nt=globalThis.litElementPolyfillSupport;nt?.({LitElement:st}),(globalThis.litElementVersions??=[]).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ot={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},at=(t=ot,e,i)=>{const{kind:s,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t)},init(e){return void 0!==e&&this.P(s,void 0,t),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t)}}throw Error("Unsupported decorator location: "+s)};function lt(t){return(e,i)=>"object"==typeof i?at(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ct(t){return lt({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht=r`
    :host {
        --evse-active-color: var(--success-color);
        --evse-disabled-color: #116a88;
        --evse-auto-color: #32b3d4;
        --evse-slider-color: var(--accent-color, #2196f3);
        --evse-shadow: var(
            --ha-card-box-shadow,
            0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 1px 5px 0 rgba(0, 0, 0, 0.12),
            0 3px 1px - 2px rgba(0, 0, 0, 0.2)
        );
        --evse-border-radius: var(--ha-card-border-radius, 10px);
        --evse-selector-bg-color: var(--primary-background-color);
        --evse-secondary-bg-color: color-mix(
            in srgb,
            var(--divider-color) 60%,
            transparent
        );
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
        color: var(--info-color);
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
        background-color: orange;
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
    }
    .error {
        background-color: var(--error-color);
        color: white;
    }
    .active {
        color: var(--evse-active-color);
    }
    .charging {
        color: orange;
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
    .override-button[data-option='active'] {
        border-radius: 10px 0 0 10px;
        color: var(--evse-active-color);
    }
    .override-button[data-option='auto'] {
        border-radius: 0;
        border-left: 0;
        border-right: 0;
        color: var(--evse-auto-color);
    }
    .override-button[data-option='disabled'] {
        border-radius: 0 10px 10px 0;
        color: var(--evse-disabled-color);
    }
    .override-button:hover[data-option='active'] {
        background: var(--evse-active-color);
        color: var(--text-primary-color);
    }
    .override-button:hover[data-option='auto'] {
        background: var(--evse-auto-color);
        color: var(--text-primary-color);
    }
    .override-button:hover[data-option='disabled'] {
        background: var(--evse-disabled-color);
        color: var(--text-primary-color);
    }
    .override-button.active[data-option='active'] {
        background: var(--evse-active-color);
        color: var(--text-primary-color);
    }
    .override-button.active[data-option='auto'] {
        background: var(--evse-auto-color);
        color: var(--text-primary-color);
    }
    .override-button.active[data-option='disabled'] {
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
        background-color: color-mix(
            in srgb,
            var(--state-icon-color) 20%,
            transparent
        );
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
        color: var(--primary-text-color);
    }
`,dt={en:{disabled:"disabled",sleeping:"disabled",active:"active",charging:"charging","not connected":"waiting",connected:"connected",error:"error",power:"power",current:"current",session:"session",elapsed:"elapsed","charge rate":"charge rate",required_entities:"Required entities",entity_auto_success:"All required entities were automatically found",entity_auto_fail:"Some entities could not be automatically detected",entity_auto_loading:"Loading device entities","additional entities":"Additional entities","new limit":"New Limit","add charging limit":"Add Charging Limit",time:"Time",energy:"Energy",battery:"Battery",range:"Range",hours:"Hours",minutes:"Minutes",cancel:"Cancel","add limit":"Add Limit","header title":"Header Title","display header":"Display header",features:"Features","enable vehicle battery":"Enable Vehicle Battery","enable vehicle range":"Enable Vehicle Range","limits settings":"Limits settings","maximum charge energy":"Maximum charge energy (kWh)","maximum vehicle range":"Maximum vehicle range (miles|km)","openevse device":"OpenEVSE Device","select your openevse device":"Select your OpenEVSE device to automatically populate all entities","override state":"Override State","select openevse.override_state entity":"Select openevse.override_state entity","station status":"Station Status","select openevse.station_status entity":"Select openevse.station_status entity","current power usage":"Current power usage","select openevse.current_power_usage entity":"Select openevse.current_power_usage entity","charging current":"Charging current","select openevse.charging_current entity":"Select openevse.charging_current entity","vehicle connected":"Vehicle Connected","select openevse.vehicle_connected entity":"Select openevse.vehicle_connected entity","charging status":"Charging status","select openevse.charging_status entity":"Select openevse.charging_status entity","session energy":"Session Energy","select openevse.usage_this_session entity":"Select openevse.usage_this_session entity","charge time elapsed":"Charge Time Elapsed","select openevse.charge_time_elapsed entity":"Select openevse.charge_time_elapsed entity","wifi signal":"Wifi Signal","select openevse_wifi_signal_strength entity":"Select openevse_wifi_signal_strength entity","limit active":"Limit Active","select openevse_limit_active entity":"Select openevse_limit_active entity","vehicle range":"Vehicle Range","select openevse_vehicle_range entity":"Select openevse_vehicle_range entity","battery level":"Battery Level","select openevse_vehicle_battery_level entity":"Select openevse_vehicle_battery_level entity",entity:"Entity",name:"Name",icon:"Icon",warning:"Warning","edit optional entity":"Edit Optional Entity",save:"Save",integration_missing_or_outdated:"OpenEVSE integration not found or requires version {min_version} & higher."},fr:{disabled:"désactivé",sleeping:"désactivé",active:"activé",charging:"en charge","not connected":"en attente",connected:"connecté",error:"erreur",power:"puissance",current:"courant",session:"session",elapsed:"écoulé","charge rate":"ampérage",required_entities:"Entités requises",entity_auto_success:"Toutes les entités ont été trouvées automatiquement",entity_auto_fail:"certaines entités n'ont pas pu être détectées automatiquement",entity_auto_loading:"Chargement des entités de l'appareil","additional entities":"Entités supplémentaires","new limit":"Nouvelle Limite","add charging limit":"Ajouter une Limite de Charge",time:"Temps",energy:"Énergie",battery:"Batterie",range:"Autonomie",hours:"Heures",minutes:"Minutes",cancel:"Annuler","add limit":"Ajouter Limite","header title":"Titre d'en-tête","display header":"Afficher l'en-tête",features:"Fonctionnalités","enable vehicle battery":"Activer la batterie du véhicule","enable vehicle range":"Activer l'autonomie du véhicule","limits settings":"Paramètres des limites","maximum charge energy":"Énergie de charge maximale (kWh)","maximum vehicle range":"Autonomie maximale du véhicule (miles|km)","openevse device":"Appareil OpenEVSE","select your openevse device":"Sélectionnez votre appareil OpenEVSE pour remplir automatiquement toutes les entités","override state":"État de surcharge","select openevse.override_state entity":"Sélectionnez l'entité openevse.override_state","station status":"État de la station","select openevse.station_status entity":"Sélectionnez l'entité openevse.station_status","current power usage":"Consommation électrique actuelle","select openevse.current_power_usage entity":"Sélectionnez l'entité openevse.current_power_usage","charging current":"Courant de charge","select openevse.charging_current entity":"Sélectionnez l'entité openevse.charging_current","vehicle connected":"Véhicule connecté","select openevse.vehicle_connected entity":"Sélectionnez l'entité openevse.vehicle_connected","charging status":"État de charge","select openevse.charging_status entity":"Sélectionnez l'entité openevse.charging_status","session energy":"Énergie de session","select openevse.usage_this_session entity":"Sélectionnez l'entité openevse.usage_this_session","charge time elapsed":"Temps de charge écoulé","select openevse.charge_time_elapsed entity":"Sélectionnez l'entité openevse.charge_time_elapsed","wifi signal":"Signal Wifi","select openevse_wifi_signal_strength entity":"Sélectionnez l'entité openevse_wifi_signal_strength","limit active":"Limite active","select openevse_limit_active entity":"Sélectionnez l'entité openevse_limit_active","vehicle range":"Autonomie du véhicule","select openevse_vehicle_range entity":"Sélectionnez l'entité openevse_vehicle_range","battery level":"Niveau de batterie","select openevse_vehicle_battery_level entity":"Sélectionnez l'entité openevse_vehicle_battery_level",entity:"Entité",name:"Nom",icon:"Icône",warning:"Avertissement","edit optional entity":"Modifier l'entité optionnelle",save:"Enregistrer",integration_missing_or_outdated:"Intégration OpenEVSE non trouvée ou nécessite la version {min_version} ou supérieure."},de:{disabled:"deaktiviert",sleeping:"deaktiviert",active:"aktiv",charging:"lädt","not connected":"bereit",connected:"verbunden",error:"fehler",power:"leistung",current:"stromstärke",session:"sitzung",elapsed:"verstrichene zeit","charge rate":"laderate",required_entities:"Erforderliche Entitäten",entity_auto_success:"Alle erforderlichen Entitäten wurden automatisch gefunden",entity_auto_fail:"Einige Entitäten konnten nicht automatisch erkannt werden",entity_auto_loading:"Geräteentitäten werden geladen","additional entities":"Zusätzliche Entitäten","new limit":"Neues Limit","add charging limit":"Ladelimit hinzufügen",time:"Zeit",energy:"Energie",battery:"Batterie",range:"Reichweite",hours:"Stunden",minutes:"Minuten",cancel:"Abbrechen","add limit":"Limit hinzufügen","header title":"Kopfzeilentitel","display header":"Kopfzeile anzeigen",features:"Funktionen","enable vehicle battery":"Fahrzeugbatterie aktivieren","enable vehicle range":"Fahrzeugreichweite aktivieren","limits settings":"Limit-Einstellungen","maximum charge energy":"Maximale Ladeenergie (kWh)","maximum vehicle range":"Maximale Fahrzeugreichweite (Meilen|km)","openevse device":"OpenEVSE-Gerät","select your openevse device":"Wählen Sie Ihr OpenEVSE-Gerät aus, um alle Entitäten automatisch zu füllen","override state":"Überschreibungsstatus","select openevse.override_state entity":"Wählen Sie die openevse.override_state Entität","station status":"Stationsstatus","select openevse.station_status entity":"Wählen Sie die openevse.station_status Entität","current power usage":"Aktuelle Leistungsaufnahme","select openevse.current_power_usage entity":"Wählen Sie die openevse.current_power_usage Entität","charging current":"Ladestrom","select openevse.charging_current entity":"Wählen Sie die openevse.charging_current Entität","vehicle connected":"Fahrzeug verbunden","select openevse.vehicle_connected entity":"Wählen Sie die openevse.vehicle_connected Entität","charging status":"Ladestatus","select openevse.charging_status entity":"Wählen Sie die openevse.charging_status Entität","session energy":"Sitzungsenergie","select openevse.usage_this_session entity":"Wählen Sie die openevse.usage_this_session Entität","charge time elapsed":"Verstrichene Ladezeit","select openevse.charge_time_elapsed entity":"Wählen Sie die openevse.charge_time_elapsed Entität","wifi signal":"WLAN-Signal","select openevse_wifi_signal_strength entity":"Wählen Sie die openevse_wifi_signal_strength Entität","limit active":"Limit aktiv","select openevse_limit_active entity":"Wählen Sie die openevse_limit_active Entität","vehicle range":"Fahrzeugreichweite","select openevse_vehicle_range entity":"Wählen Sie die openevse_vehicle_range Entität","battery level":"Batteriestand","select openevse_vehicle_battery_level entity":"Wählen Sie die openevse_vehicle_battery_level Entität",entity:"Entität",name:"Name",icon:"Symbol",warning:"Warnung","edit optional entity":"Optionale Entität bearbeiten",save:"Speichern",integration_missing_or_outdated:"OpenEVSE-Integration nicht gefunden oder erfordert Version {min_version} oder höher."},es:{disabled:"desactivado",sleeping:"desactivado",active:"activo",charging:"cargando","not connected":"en espera",connected:"conectado",error:"error",power:"potencia",current:"corriente",session:"sesión",elapsed:"pasado","charge rate":"amperaje",required_entities:"Entidades requeridas",entity_auto_success:"Todas las entidades requeridas se encontraron automáticamente",entity_auto_fail:"Algunas entidades no pudieron ser detectadas automáticamente",entity_auto_loading:"Cargando entidades del dispositivo","additional entities":"Entidades adicionales","new limit":"Nuevo Límite","add charging limit":"Añadir Límite de Carga",time:"Tiempo",energy:"Energía",battery:"Batería",range:"Autonomía",hours:"Horas",minutes:"Minutos",cancel:"Cancelar","add limit":"Añadir Límite","header title":"Título del encabezado","display header":"Mostrar encabezado",features:"Características","enable vehicle battery":"Habilitar batería del vehículo","enable vehicle range":"Habilitar autonomía del vehículo","limits settings":"Configuración de límites","maximum charge energy":"Energía máxima de carga (kWh)","maximum vehicle range":"Autonomía máxima del vehículo (millas|km)","openevse device":"Dispositivo OpenEVSE","select your openevse device":"Seleccione su dispositivo OpenEVSE para completar automáticamente todas las entidades","override state":"Estado de anulación","select openevse.override_state entity":"Seleccione la entidad openevse.override_state","station status":"Estado de la estación","select openevse.station_status entity":"Seleccione la entidad openevse.station_status","current power usage":"Consumo de energía actual","select openevse.current_power_usage entity":"Seleccione la entidad openevse.current_power_usage","charging current":"Corriente de carga","select openevse.charging_current entity":"Seleccione la entidad openevse.charging_current","vehicle connected":"Vehículo conectado","select openevse.vehicle_connected entity":"Seleccione la entidad openevse.vehicle_connected","charging status":"Estado de carga","select openevse.charging_status entity":"Seleccione la entidad openevse.charging_status","session energy":"Energía de sesión","select openevse.usage_this_session entity":"Seleccione la entidad openevse.usage_this_session","charge time elapsed":"Tiempo de carga transcurrido","select openevse.charge_time_elapsed entity":"Seleccione la entidad openevse.charge_time_elapsed","wifi signal":"Señal Wifi","select openevse_wifi_signal_strength entity":"Seleccione la entidad openevse_wifi_signal_strength","limit active":"Límite activo","select openevse_limit_active entity":"Seleccione la entidad openevse_limit_active","vehicle range":"Autonomía del vehículo","select openevse_vehicle_range entity":"Seleccione la entidad openevse_vehicle_range","battery level":"Nivel de batería","select openevse_vehicle_battery_level entity":"Seleccione la entidad openevse_vehicle_battery_level",entity:"Entidad",name:"Nombre",icon:"Icono",warning:"Advertencia","edit optional entity":"Editar entidad opcional",save:"Guardar",integration_missing_or_outdated:"Integración OpenEVSE no encontrada o requiere la versión {min_version} o superior."}};function ut(t,e="en"){const i=t.toLowerCase();return e in dt&&i in dt[e]?dt[e][i]:"en"in dt&&i in dt.en?dt.en[i]:t}const vt=["ha-form","ha-icon","ha-icon-button","ha-selector","ha-textfield","ha-icon-picker","ha-icon-button","ha-entity-picker","ha-select","ha-dialog","ha-sortable","ha-svg-icon","ha-alert","ha-button","ha-color-picker","ha-badge","ha-sankey-chart","mwc-button"],pt="2.1.47";var gt=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let mt=class extends st{constructor(){super(),this.min=0,this.max=32,this.step=1,this.value=0,this.disabled=!1,this.height=22,this.color="var(--primary-color, #03a9f4)",this.displayThumb=!0,this.unit="",this._sliderValue=0,this._dragging=!1,this._boundHandleSliderMove=this._handleSliderMove.bind(this),this._boundHandleSliderEnd=this._handleSliderEnd.bind(this)}updated(t){t.has("value")&&!this._dragging&&(this._sliderValue=this.value)}connectedCallback(){super.connectedCallback(),this._sliderValue=this.value}disconnectedCallback(){super.disconnectedCallback(),this._removeEventListeners()}get _percentage(){const t=this.max-this.min;if(0===t)return 5;return 5+95*((this._sliderValue-this.min)/t)}_handleSliderStart(t){this.disabled||(this._dragging=!0,this.shadowRoot?.querySelector(".slider-wrapper")?.classList.add("dragging"),this._updateSliderValue(t),window.addEventListener("mousemove",this._boundHandleSliderMove),window.addEventListener("touchmove",this._boundHandleSliderMove),window.addEventListener("mouseup",this._boundHandleSliderEnd),window.addEventListener("touchend",this._boundHandleSliderEnd))}_handleSliderMove(t){this._dragging&&this._updateSliderValue(t)}_handleSliderEnd(){this._dragging&&(this.shadowRoot?.querySelector(".slider-wrapper")?.classList.remove("dragging"),this._removeEventListeners(),this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:this._sliderValue},bubbles:!0,composed:!0})),setTimeout((()=>{this._dragging=!1}),100))}_removeEventListeners(){window.removeEventListener("mousemove",this._boundHandleSliderMove),window.removeEventListener("touchmove",this._boundHandleSliderMove),window.removeEventListener("mouseup",this._boundHandleSliderEnd),window.removeEventListener("touchend",this._boundHandleSliderEnd)}_updateSliderValue(t){const e=this.shadowRoot?.querySelector(".slider-wrapper");if(!e)return;const i=e.getBoundingClientRect();let s;s="touches"in t?t.touches[0].clientX:t.clientX;const n=.95*i.width;let r=(s-(i.left+.05*i.width))/n;r=Math.min(Math.max(r,0),1);let o=this.min+r*(this.max-this.min);o=Math.round(o/this.step)*this.step,o=Math.min(Math.max(o,this.min),this.max),this._sliderValue=Number(o.toFixed(2)),this.dispatchEvent(new CustomEvent("value-preview",{detail:{value:this._sliderValue},bubbles:!0,composed:!0})),this.requestUpdate()}_formatValue(t){return this.step<1?t.toFixed(1):t.toFixed(0)}render(){return W`
            <div class="slider-container">
                ${this.unit?W`
                          <div
                              class="slider-badge"
                              style="color: ${this.color}"
                          >
                              ${this._formatValue(this._sliderValue)}
                              ${this.unit}
                          </div>
                      `:""}
                <div
                    class="slider-wrapper"
                    @mousedown=${this._handleSliderStart}
                    @touchstart=${this._handleSliderStart}
                    style="
          --slider-height: ${this.height}px;
          --slider-color: ${this.color};
          --slider-percentage: ${this._percentage}%;
        "
                >
                    <div
                        class="slider-track clickable"
                        style="width: ${Math.max(5,this._percentage)}%; border-radius: ${100===this._percentage?"6px":0===this._percentage?"0":"6px 0 0 6px"}"
                    ></div>
                    ${this.displayThumb?W`
                              <div
                                  class="slider-thumb"
                                  style="left: calc(max(0%, ${this._percentage}% - 5%))"
                              ></div>
                          `:""}
                    <div
                        class="slider-knob"
                        style="left: calc(clamp(0%, ${this._percentage}%, 100%) - 16px)"
                    ></div>
                </div>
            </div>
        `}};mt.styles=r`
        :host {
            display: block;
            width: 100%;
        }

        .slider-wrapper {
            position: relative;
            height: var(--slider-height, 22px);
            width: 100%;
            border-radius: 6px;
            display: flex;
            align-items: center;
            background: color-mix(
                in srgb,
                var(--slider-color) 20%,
                transparent
            );
            box-shadow: var(--control-button-background, none);
            touch-action: none;
            overflow: hidden;
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
            border-radius: 6px 0 0 6px;
            background: var(--slider-color);
            opacity: 1;
        }

        .slider-wrapper:hover .slider-track {
            background: color-mix(
                in srgb,
                var(--slider-color) 60%,
                transparent
            );
        }
        .dragging .slider-track {
            background: color-mix(
                in srgb,
                var(--slider-color) 60%,
                transparent
            );
        }

        .slider-badge {
            padding: 4px 8px;
            border-radius: 4px;

            margin-left: 8px;
            white-space: nowrap;
            align-self: center;
        }

        .slider-container {
            display: flex;
            flex-direction: column;
            gap: 8px;
            width: 100%;
        }

        .slider-thumb {
            position: absolute;
            height: 100%;
            width: 5%;
            background: var(--slider-color);
            left: calc(var(--slider-percentage) - 1px);
            opacity: 0;
        }

        .slider-wrapper:hover .slider-thumb,
        .slider-wrapper.dragging .slider-thumb {
            opacity: 1;
        }

        :host([disabled]) .slider-wrapper {
            opacity: 0.5;
            cursor: not-allowed;
        }

        :host([disabled]) .slider-track,
        :host([disabled]) .slider-knob {
            cursor: not-allowed;
        }
    `,gt([lt({type:Number})],mt.prototype,"min",void 0),gt([lt({type:Number})],mt.prototype,"max",void 0),gt([lt({type:Number})],mt.prototype,"step",void 0),gt([lt({type:Number})],mt.prototype,"value",void 0),gt([lt({type:Boolean})],mt.prototype,"disabled",void 0),gt([lt({type:Number})],mt.prototype,"height",void 0),gt([lt({type:String})],mt.prototype,"color",void 0),gt([lt({type:Boolean,attribute:"display-thumb"})],mt.prototype,"displayThumb",void 0),gt([lt({type:String})],mt.prototype,"unit",void 0),gt([ct()],mt.prototype,"_sliderValue",void 0),gt([ct()],mt.prototype,"_dragging",void 0),gt([function(t){return(e,i)=>{const s="function"==typeof e?e:e[i];Object.assign(s,t)}}({passive:!0})],mt.prototype,"_handleSliderStart",null),mt=gt([rt("custom-slider")],mt);var ft=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let yt=class extends st{constructor(){super(...arguments),this.min=0,this.max=32,this.step=1,this.value=0,this.unit="A",this.disabled=!1,this.label="Charge Rate"}_formatValue(t){return this.step<1?t.toFixed(1):t.toFixed(0)}render(){return W`
            <div class="slider-container">
                ${this.label?W`<div class="slider-label">${this.label}</div>`:""}
                <div class="slider-badge">
                    ${this._formatValue(this.value)} ${this.unit}
                </div>
                <custom-slider
                    .min=${this.min}
                    .max=${this.max}
                    .step=${this.step}
                    .value=${this.value}
                    .disabled=${this.disabled}
                    height="15"
                    color="var(--evse-slider-color)"
                    @value-preview=${t=>this.value=t.detail.value}
                    @value-changed=${t=>{this.value=t.detail.value,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:this.value},bubbles:!0,composed:!0}))}}
                ></custom-slider>
            </div>
        `}};yt.styles=r`
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

        .slider-label {
            display: flex;
            justify-content: center;
            color: var(--primary-text-color, #212121);
            font-weight: bold;
            text-transform: capitalize;
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
    `,ft([lt({type:Number})],yt.prototype,"min",void 0),ft([lt({type:Number})],yt.prototype,"max",void 0),ft([lt({type:Number})],yt.prototype,"step",void 0),ft([lt({type:Number})],yt.prototype,"value",void 0),ft([lt({type:String})],yt.prototype,"unit",void 0),ft([lt({type:Boolean})],yt.prototype,"disabled",void 0),ft([lt({type:String})],yt.prototype,"label",void 0),yt=ft([rt("evse-slider")],yt);var bt=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let _t=class extends st{constructor(){super(),this.feat_soc=!1,this.feat_range=!1,this.energy_max_value=100,this.range_max_value=600,this.range_unit="km",this.language="en",this._showLimitForm=!1,this._selectedLimitType="time",this._hours=void 0,this._minutes=void 0,this._value=0}static get styles(){return r`
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
                font-weight: 500;
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
                margin-top: 25px;
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
        `}_toggleLimitForm(){this._showLimitForm=!this._showLimitForm,this._selectedLimitType="time",this._hours=void 0,this._minutes=void 0,this._value=0,this.requestUpdate()}_handleTypeChange(t){const e=t.target;this._selectedLimitType=e.value,this._value=0,this.requestUpdate()}_handleHoursChange(t){const e=t.target.value;this._hours=""===e?void 0:parseInt(e,10),this.requestUpdate()}_handleMinutesChange(t){const e=t.target.value;this._minutes=""===e?void 0:parseInt(e,10),this.requestUpdate()}_handleValueChange(t){const e=t.target,i=parseInt(e.value)||0;"energy"===this._selectedLimitType?this._value=1e3*i:this._value=i,this.requestUpdate()}_handleSliderChange(t){const e=t.detail.value;"energy"===this._selectedLimitType?this._value=Math.round(1e3*e):this._value=e,this.requestUpdate()}_formatValue(t,e){if("energy"===e){return`${Math.round(t/1e3)} kWh`}return"soc"===e?`${t}%`:"range"===e?`${t} ${this.range_unit}`:String(t)}_addLimit(){if("time"===this._selectedLimitType){const t=60*(this._hours??0)+(this._minutes??0);t>0&&this.setLimit&&this.setLimit("time",t)}else["energy","soc","range"].includes(this._selectedLimitType)&&this._value>0&&this.setLimit&&this.setLimit(this._selectedLimitType,this._value);this._showLimitForm=!1}_removeLimit(){this.delLimit&&this.delLimit()}_isAddButtonDisabled(){if("time"===this._selectedLimitType){const t=this._hours??0,e=this._minutes??0;return 0===t&&0===e}return!["energy","soc","range"].includes(this._selectedLimitType)||0===this._value}_formatTimeValue(t){return[Math.floor(t/60),t%60,0].map((t=>String(t).padStart(2,"0"))).join(":")}render(){return this.limit&&this.limit.type?W`
                <div class="limit-container">
                    <div class="limit-badge">
                        <ha-icon
                            icon="${"time"===this.limit.type?"mdi:clock":"range"===this.limit.type?"mdi:map-marker-distance":"soc"===this.limit.type?"mdi:battery-medium":"mdi:lightning-bolt"}"
                        ></ha-icon>
                        <span class="limit-type">
                            ${"time"===this.limit.type?ut("time",this.language)+": ":"energy"===this.limit.type?ut("energy",this.language)+": ":"range"===this.limit.type?ut("range",this.language)+": ":"soc"===this.limit.type?ut("battery",this.language)+": ":q}
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
            `:this._showLimitForm?W`
                <div class="limit-container">
                    <button
                        class="new-limit-btn"
                        @click=${this._toggleLimitForm}
                    >
                        <ha-icon icon="mdi:plus"></ha-icon>
                        ${ut("new limit",this.language)}
                    </button>
                </div>
                <div class="modal-overlay">
                    <div class="limit-form">
                        <div class="form-header">
                            ${ut("add charging limit",this.language)}
                        </div>

                        <div class="form-row">
                            <div class="select">
                                <ha-select
                                    @selected=${this._handleTypeChange}
                                    @closed=${t=>t.stopPropagation()}
                                    fixedMenuPosition
                                    naturalMenuWidth="false"
                                    .value=${this._selectedLimitType}
                                >
                                    <ha-list-item value=${"time"}
                                        >${ut("time",this.language)}</ha-list-item
                                    >
                                    <ha-list-item value=${"energy"}
                                        >${ut("energy",this.language)}</ha-list-item
                                    >
                                    ${this.feat_soc?W`
                                              <ha-list-item value=${"soc"}
                                                  >${ut("battery",this.language)}</ha-list-item
                                              >
                                          `:q}
                                    ${this.feat_range?W`
                                              <ha-list-item value=${"range"}
                                                  >${ut("range",this.language)}</ha-list-item
                                              >
                                          `:q}
                                </ha-select>
                            </div>
                        </div>

                        ${"time"===this._selectedLimitType?W`
                                  <div class="form-row">
                                      <div class="time-inputs">
                                          <div class="time-input">
                                              <ha-textfield
                                                  id="hours"
                                                  type="number"
                                                  inputmode="numeric"
                                                  .value=${void 0===this._hours?"":String(this._hours)}
                                                  .label=${ut("hours",this.language)}
                                                  name="hours"
                                                  @change=${this._handleHoursChange}
                                                  no-spinner
                                                  min="0"
                                                  maxlength="2"
                                                  suffix=":"
                                                  class="hasSuffix"
                                              >
                                              </ha-textfield>
                                          </div>
                                          <div class="time-input">
                                              <ha-textfield
                                                  id="minutes"
                                                  type="number"
                                                  inputmode="numeric"
                                                  .value=${void 0===this._minutes?"":String(this._minutes)}
                                                  .label=${ut("minutes",this.language)}
                                                  name="minutes"
                                                  @change=${this._handleMinutesChange}
                                                  no-spinner
                                                  min="0"
                                                  maxlength="2"
                                              >
                                              </ha-textfield>
                                          </div>
                                      </div>
                                  </div>
                              `:q}
                        ${"time"!==this._selectedLimitType?W`
                                  <div class="form-row">
                                      <custom-slider
                                          .min=${0}
                                          .max=${"range"===this._selectedLimitType?this.range_max_value:"energy"===this._selectedLimitType?this.energy_max_value:100}
                                          .step=${1}
                                          .value=${"energy"===this._selectedLimitType?Math.round(this._value/1e3):this._value}
                                          height="10"
                                          .color=${"var(--text-primary-color)"}
                                          .unit=${"range"===this._selectedLimitType?this.range_unit:"energy"===this._selectedLimitType?"kWh":"%"}
                                          @value-changed=${this._handleSliderChange}
                                      ></custom-slider>
                                  </div>
                              `:q}

                        <div class="form-actions">
                            <button
                                class="btn btn-secondary"
                                @click=${this._toggleLimitForm}
                            >
                                ${ut("cancel",this.language)}
                            </button>
                            <button
                                class="btn btn-primary"
                                ?disabled=${this._isAddButtonDisabled()}
                                @click=${this._addLimit}
                            >
                                ${ut("add limit",this.language)}
                            </button>
                        </div>
                    </div>
                </div>
            `:W`
            <div class="limit-container">
                <button class="new-limit-btn" @click=${this._toggleLimitForm}>
                    <ha-icon icon="mdi:plus"></ha-icon>
                    ${ut("new limit",this.language)}
                </button>
            </div>
        `}};bt([lt({attribute:!1})],_t.prototype,"limit",void 0),bt([lt({attribute:!1})],_t.prototype,"setLimit",void 0),bt([lt({attribute:!1})],_t.prototype,"delLimit",void 0),bt([lt({type:Boolean})],_t.prototype,"feat_soc",void 0),bt([lt({type:Boolean})],_t.prototype,"feat_range",void 0),bt([lt({type:Number})],_t.prototype,"energy_max_value",void 0),bt([lt({type:Number})],_t.prototype,"range_max_value",void 0),bt([lt({type:String})],_t.prototype,"range_unit",void 0),bt([lt({type:String})],_t.prototype,"language",void 0),bt([ct()],_t.prototype,"_showLimitForm",void 0),bt([ct()],_t.prototype,"_selectedLimitType",void 0),bt([ct()],_t.prototype,"_hours",void 0),bt([ct()],_t.prototype,"_minutes",void 0),bt([ct()],_t.prototype,"_value",void 0),_t=bt([rt("limit-component")],_t);var wt=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let xt=class extends st{constructor(){super(),this.label="",this.value=0,this.unit="",this.max_value=100,this.icon=""}static get styles(){return r`
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
                color: var(--primary-text-color);
                font-weight: normal;
            }
        `}render(){const t=this.max_value>0?100*this.value/this.max_value:0;return W`
            <div class="container">
                <div class="label">
                    ${this.icon?W`<ha-icon class="icon" icon=${this.icon}>
                          </ha-icon>`:""}
                    ${this.label?this.label:""}
                </div>
                <div class="progress">
                    <div
                        class="progress-fill"
                        style="width: ${t}%"
                    ></div>
                    <div class="value">${this.value}${this.unit}</div>
                </div>
            </div>
        `}};wt([lt({type:String})],xt.prototype,"label",void 0),wt([lt({type:Number})],xt.prototype,"value",void 0),wt([lt({type:String})],xt.prototype,"unit",void 0),wt([lt({type:Number})],xt.prototype,"max_value",void 0),wt([lt({type:String})],xt.prototype,"icon",void 0),xt=wt([rt("progress-bar")],xt);var $t=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Et=class extends st{static get styles(){return ht}_wifiIcon(t){return t>=-65?"mdi:wifi-strength-4":-65>t&&t>=-70?"mdi:wifi-strength-3":-70>t&&t>=-75?"mdi:wifi-strength-2":-75>t&&t>=-80?"mdi:wifi-strength-1":"mdi:wifi-strength-alert-outline"}_handleIconClick(t){const e=this.config?.[t];this.showMoreInfoHandler&&"string"==typeof e&&e&&this.showMoreInfoHandler(e)}render(){if(!this.hass||!this.config)return W``;const t=Number(this.wifiSignalEntity?.state),e=this.statusEntity?.state,i=this.vehicleConnectedEntity?.state,s=this.chargingStatusEntity?.state;return W`
            <div class="status-icons">
                ${this.wifiSignalEntity?W`
                          <div
                              class="status-icon clickable"
                              @click=${()=>this._handleIconClick("wifi_signal_strength_entity")}
                          >
                              <ha-icon
                                  icon="${this._wifiIcon(t)}"
                                  class="wifi-icon"
                              ></ha-icon>
                          </div>
                      `:""}

                <div
                    class="status-icon clickable"
                    @click=${()=>this._handleIconClick("status_entity")}
                >
                    <ha-icon
                        icon="${"active"===e?"off"===i?"mdi:timer-sand":"mdi:lightning-bolt":"mdi:cancel"}"
                        class="${"active"===e?"charging"===s?"charging":"active bg-active":"disabled bg-disabled"}"
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
        `}};$t([lt({attribute:!1})],Et.prototype,"hass",void 0),$t([lt({attribute:!1})],Et.prototype,"config",void 0),$t([lt({attribute:!1})],Et.prototype,"wifiSignalEntity",void 0),$t([lt({attribute:!1})],Et.prototype,"statusEntity",void 0),$t([lt({attribute:!1})],Et.prototype,"vehicleConnectedEntity",void 0),$t([lt({attribute:!1})],Et.prototype,"chargingStatusEntity",void 0),$t([lt({attribute:!1})],Et.prototype,"showMoreInfoHandler",void 0),Et=$t([rt("status-icons")],Et);var St=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let kt=class extends st{static get styles(){return ht}render(){const t=this.chargingStatusEntity?.state,e=this.statusEntity?.state;return W`
            <div class="status-heading">
                <div class="status-badge ${"error"===t?"badge-error":"disabled"===e?"badge-disabled":"charging"===t?"badge-charging":"badge-active"}">
                    ${ut(t||"",this.language)}
                </div>
            </div>
        `}};St([lt({attribute:!1})],kt.prototype,"statusEntity",void 0),St([lt({attribute:!1})],kt.prototype,"chargingStatusEntity",void 0),St([lt({attribute:!1})],kt.prototype,"language",void 0),kt=St([rt("status-heading")],kt);var Ct=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let At=class extends st{constructor(){super(...arguments),this.localTimeElapsed=0}static get styles(){return ht}_handleItemClick(t){const e=this.config?.[t];this.showMoreInfoHandler&&"string"==typeof e&&e&&this.showMoreInfoHandler(e)}render(){return this.hass&&this.config&&this.convertTimeHandler?W`
            <div class="grid-container">
                ${this.powerEntity?W`
                          <div class="grid-item">
                              <div class="grid-item-label">
                                  ${ut("power",this.language)}
                              </div>
                              <div
                                  class="grid-item-value clickable"
                                  @click=${()=>this._handleItemClick("power_entity")}
                              >
                                  ${this.hass.formatEntityState(this.powerEntity)}
                              </div>
                          </div>
                      `:W` <div class="grid-item">
                          <div class="grid-item-label">
                              ${ut("power",this.language)}
                          </div>
                          <div class="grid-item-value">0 W</div>
                      </div>`}
                ${this.currentEntity?W`
                          <div class="grid-item">
                              <div class="grid-item-label">
                                  ${ut("current",this.language)}
                              </div>
                              <div
                                  class="grid-item-value clickable"
                                  @click=${()=>this._handleItemClick("current_entity")}
                              >
                                  ${this.hass.formatEntityState(this.currentEntity)}
                              </div>
                          </div>
                      `:W` <div class="grid-item">
                          <div class="grid-item-label">
                              ${ut("current",this.language)}
                          </div>
                          <div class="grid-item-value">0 A</div>
                      </div>`}
                ${this.sessionEnergyEntity?W`
                              <div class="grid-item">
                                  <div class="grid-item-label">
                                      ${ut("session",this.language)}
                                  </div>
                                  <div
                                      class="grid-item-value clickable"
                                      @click=${()=>this._handleItemClick("session_energy_entity")}
                                  >
                                      ${this.hass.formatEntityState(this.sessionEnergyEntity)}
                                  </div>
                              </div>
                          `:W`
                              <div class="grid-item">
                                  <div class="grid-item-label">
                                      ${ut("session",this.language)}
                                  </div>
                                  <div class="grid-item-value">0 kWh</div>
                              </div>
                          `}
                ${this.timeElapsedEntity?W`
                          <div class="grid-item">
                              <div class="grid-item-label">
                                  ${ut("elapsed",this.language)}
                              </div>
                              <div class="grid-item-value">
                                  ${this.convertTimeHandler(this.localTimeElapsed||0)}
                              </div>
                          </div>
                      `:W` <div class="grid-item">
                          <div class="grid-item-label">
                              ${ut("elapsed",this.language)}
                          </div>
                          <div class="grid-item-value">00:00:00</div>
                      </div>`}
            </div>
        `:W``}};Ct([lt({attribute:!1})],At.prototype,"hass",void 0),Ct([lt({attribute:!1})],At.prototype,"config",void 0),Ct([lt({attribute:!1})],At.prototype,"powerEntity",void 0),Ct([lt({attribute:!1})],At.prototype,"currentEntity",void 0),Ct([lt({attribute:!1})],At.prototype,"sessionEnergyEntity",void 0),Ct([lt({attribute:!1})],At.prototype,"timeElapsedEntity",void 0),Ct([lt({type:Number})],At.prototype,"localTimeElapsed",void 0),Ct([lt({type:String})],At.prototype,"language",void 0),Ct([lt({attribute:!1})],At.prototype,"showMoreInfoHandler",void 0),Ct([lt({attribute:!1})],At.prototype,"convertTimeHandler",void 0),At=Ct([rt("info-grid")],At);var Mt=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Ot=class extends st{static get styles(){return ht}render(){if(!this.config)return W``;const t=this.config.feat_soc&&this.vehicleBatteryLevelEntity,e=this.config.feat_range&&this.vehicleRangeEntity;return t||e?W`
            <div class="vehicle">
                ${t?W`
                          <progress-bar
                              value=${Number(this.vehicleBatteryLevelEntity?.state)}
                              unit="%"
                              icon="mdi:battery-medium"
                          ></progress-bar>
                      `:""}
                ${e?W`
                          <progress-bar
                              value=${Number(this.vehicleRangeEntity?.state)}
                              max_value=${this.config?.feat_max_range||600}
                              unit=${this.vehicleRangeEntity?.attributes.unit_of_measurement||q}
                              icon="mdi:map-marker-distance"
                          ></progress-bar>
                      `:""}
            </div>
        `:W``}};Mt([lt({attribute:!1})],Ot.prototype,"config",void 0),Mt([lt({attribute:!1})],Ot.prototype,"vehicleBatteryLevelEntity",void 0),Mt([lt({attribute:!1})],Ot.prototype,"vehicleRangeEntity",void 0),Ot=Mt([rt("vehicle-info")],Ot);var jt=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let zt=class extends st{static get styles(){return ht}_handleButtonClick(t){const e=this.config?.override_entity;this.selectOverrideStateHandler&&"string"==typeof e&&e&&this.selectOverrideStateHandler(e,t)}render(){if(!this.config||!this.overrideEntity)return W``;const t=this.overrideEntity?.state,e=this.chargingStatusEntity?.state;return W`
            <div class="override-controls">
                <div class="override-row">
                    <div
                        class="override-button ${"active"===t?"active":""}"
                        data-option="active"
                        @click=${()=>this._handleButtonClick("active")}
                    >
                        <ha-icon
                            icon="mdi:lightning-bolt"
                            class="${"active"===t&&"charging"===e?"charging":""}"
                        ></ha-icon>
                    </div>
                    <div
                        class="override-button ${"auto"===t?"active":""}"
                        data-option="auto"
                        @click=${()=>this._handleButtonClick("auto")}
                    >
                        <ha-icon
                            icon="mdi:robot"
                            class="${"auto"===t&&"charging"===e?"charging":""}"
                        ></ha-icon>
                    </div>
                    <div
                        class="override-button ${"disabled"===t?"active":""}"
                        data-option="disabled"
                        @click=${()=>this._handleButtonClick("disabled")}
                    >
                        <ha-icon icon="mdi:cancel"></ha-icon>
                    </div>
                </div>
            </div>
        `}};jt([lt({attribute:!1})],zt.prototype,"config",void 0),jt([lt({attribute:!1})],zt.prototype,"overrideEntity",void 0),jt([lt({attribute:!1})],zt.prototype,"chargingStatusEntity",void 0),jt([lt({attribute:!1})],zt.prototype,"selectOverrideStateHandler",void 0),zt=jt([rt("override-controls")],zt);var Lt=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Tt=class extends st{constructor(){super(...arguments),this.entities=[]}static get styles(){return ht}_handleEntityClick(t){this.showMoreInfoHandler&&t&&this.showMoreInfoHandler(t)}render(){return this.hass&&this.entities&&0!==this.entities.length?W`
            ${this.entities.map((t=>W`
                    <div class="other-entities-container">
                        <div class="entity-row">
                            <div class="entity-title">
                                ${null!=t.icon?W`
                                          <div class="entity-icon">
                                              <ha-icon
                                                  icon=${t.icon}
                                              ></ha-icon>
                                          </div>
                                      `:W`<div class="entity-icon"></div>`}
                                <div class="entity-label">
                                    ${t.name||t.id||q}
                                </div>
                            </div>
                            <div
                                class="entity-value clickable"
                                @click=${()=>this._handleEntityClick(t.id)}
                            >
                                ${t.value??""}
                                <!-- Display the value again -->
                            </div>
                        </div>
                    </div>
                `))}
        `:W``}};Lt([lt({attribute:!1})],Tt.prototype,"hass",void 0),Lt([lt({attribute:!1})],Tt.prototype,"entities",void 0),Lt([lt({attribute:!1})],Tt.prototype,"showMoreInfoHandler",void 0),Tt=Lt([rt("optional-entities")],Tt);var Vt=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};const Pt=["ha-form","ha-icon","ha-icon-button","ha-selector","ha-textfield","ha-icon-picker","ha-icon-button","ha-entity-picker","ha-select","ha-dialog","ha-sortable","ha-svg-icon","ha-alert","mwc-button"];class Nt extends st{constructor(){super(),this._localTimeElapsed=0,this._lastEntityTime=0,this._timeUpdateInterval=null,this._isCharging=!1,this._limit=null,this._hasLimit=!1,this._integrationVersionOk=void 0,this._showMoreInfo=this._showMoreInfo.bind(this),this._convertTime=this._convertTime.bind(this),this._selectOverrideState=this._selectOverrideState.bind(this),this._setLimit=this._setLimit.bind(this),this._delLimit=this._delLimit.bind(this)}disconnectedCallback(){super.disconnectedCallback(),this._timeUpdateInterval&&(clearInterval(this._timeUpdateInterval),this._timeUpdateInterval=null)}async firstUpdated(){try{await(async t=>{const e=t||vt;try{if(e.every((t=>customElements.get(t))))return;await Promise.race([customElements.whenDefined("partial-panel-resolver"),new Promise(((t,e)=>setTimeout((()=>e(new Error("Timeout waiting for partial-panel-resolver"))),1e4)))]);const t=document.createElement("partial-panel-resolver");if(!t)throw new Error("Failed to create partial-panel-resolver element");if(t.hass={panels:[{url_path:"tmp",component_name:"config"}]},"function"!=typeof t._updateRoutes)throw new Error("partial-panel-resolver does not have _updateRoutes method");if(t._updateRoutes(),!t.routerOptions?.routes?.tmp?.load)throw new Error("Failed to create tmp route in partial-panel-resolver");await Promise.race([t.routerOptions.routes.tmp.load(),new Promise(((t,e)=>setTimeout((()=>e(new Error("Timeout loading tmp route"))),1e4)))]),await Promise.race([customElements.whenDefined("ha-panel-config"),new Promise(((t,e)=>setTimeout((()=>e(new Error("Timeout waiting for ha-panel-config"))),1e4)))]);const i=document.createElement("ha-panel-config");if(!i)throw new Error("Failed to create ha-panel-config element");if(!i.routerOptions?.routes?.automation?.load)throw new Error("ha-panel-config does not have automation route");await Promise.race([i.routerOptions.routes.automation.load(),new Promise(((t,e)=>setTimeout((()=>e(new Error("Timeout loading automation components"))),1e4)))]);const s=e.filter((t=>!customElements.get(t)));if(s.length>0)throw new Error(`Failed to load components: ${s.join(", ")}`)}catch(t){console.error("Error loading Home Assistant form components:",t);try{if(window.customElements&&window.customElements.get("home-assistant")){console.log("Attempting fallback loading method for HA components");const t=new CustomEvent("ha-request-load-components",{detail:{components:e},bubbles:!0,composed:!0});document.dispatchEvent(t)}}catch(t){console.error("Fallback loading method failed:",t)}}})(Pt)}catch(t){console.error("Error loading ha-components:",t)}if(this._lang=this.hass?.language||"en",this.hass)try{const t=await(async t=>{try{return(await t.callWS({type:"manifest/get",integration:"openevse"})).version}catch(t){return console.error("Error fetching OpenEVSE integration manifest:",t),"0"}})(this.hass);if("0"===t)console.warn("OpenEVSE integration not found or version could not be determined."),this._integrationVersionOk=!1;else{const e=((t,e)=>{const i=t.split(".").map(Number),s=e.split(".").map(Number);for(let t=0;t<Math.max(i.length,s.length);t++){const e=i[t]||0,n=s[t]||0;if(e>n)return 1;if(e<n)return-1}return 0})(t,pt);this._integrationVersionOk=e>=0,this._integrationVersionOk||console.warn(`OpenEVSE integration version ${t} is below the required minimum ${pt}.`)}}catch(t){console.error("Error checking OpenEVSE integration version:",t),this._integrationVersionOk=!1}else console.warn("Hass object not available during firstUpdated for version check."),this._integrationVersionOk=!1}getGridOptions(){return{columns:12,max_columns:12,min_columns:9}}_setupTimeInterval(){this._timeUpdateInterval&&(clearInterval(this._timeUpdateInterval),this._timeUpdateInterval=null),this._isCharging&&(this._timeUpdateInterval=window.setInterval((()=>{this._localTimeElapsed+=1/60}),1e3))}updated(t){if(t.has("hass")&&this.hass){if(this._lang=this.hass.language||"en",this.config&&this.config.charging_status_entity&&this.hass.states[this.config.charging_status_entity]){const t="charging"===this.hass.states[this.config.charging_status_entity].state;t!==this._isCharging&&(this._isCharging=t,this._setupTimeInterval())}if(this.config&&this.config.time_elapsed_entity&&this.hass.states[this.config.time_elapsed_entity]){const t=this.hass.states[this.config.time_elapsed_entity],e=parseFloat(t.state);isNaN(e)||e===this._lastEntityTime||(this._lastEntityTime=e,this._localTimeElapsed=e)}if(this.config&&this.config.limit_active_entity&&this.hass.states[this.config.limit_active_entity]){const t="on"===this.hass.states[this.config.limit_active_entity].state;t!=this._hasLimit&&(this._hasLimit=t,this.config.device_id&&this._getLimit().then((t=>{this._limit=t})))}}if(t.has("config")&&!t.has("hass")&&this.config&&this.hass){if(this.config.charging_status_entity&&this.hass.states[this.config.charging_status_entity]){const t=this.hass.states[this.config.charging_status_entity];this._isCharging="charging"===t.state}if(this.config.time_elapsed_entity&&this.hass.states[this.config.time_elapsed_entity]){const t=this.hass.states[this.config.time_elapsed_entity];t&&(this._lastEntityTime=parseFloat(t.state),this._localTimeElapsed=this._lastEntityTime,this._isCharging&&this._setupTimeInterval())}}}static getConfigElement(){return document.createElement("openevse-card-editor")}static getStubConfig(){return{header:!0,name:"OpenEVSE",feat_soc:!1,feat_range:!1,feat_max_range:600,feat_max_energy:100,device_id:"",override_entity:"",status_entity:"",power_entity:"",current_entity:"",charge_rate_entity:"",vehicle_connected_entity:"",charging_status_entity:"",session_energy_entity:"",time_elapsed_entity:"",wifi_signal_strength_entity:"",limit_active_entity:"",vehicle_battery_level_entity:"",vehicle_range_entity:"",optional_entities:[]}}static get styles(){return ht}setConfig(t){this.config=t}getCardSize(){return 3}_selectOverrideState(t,e){this.hass&&this.hass.callService("select","select_option",{entity_id:t,option:e.toString()})}async _getLimit(){if(!this.hass)return null;try{const t=await this.hass.callService("openevse","get_limit",{device_id:this.config?.device_id},void 0,!1,!0);return t?.response?t.response:null}catch(t){return console.error("Error while getting limit",t),null}}_setLimit(t,e){if(this.hass)try{return void this.hass.callService("openevse","set_limit",{device_id:this.config?.device_id,type:t,value:e,auto_release:!0},void 0,!1,!1)}catch(t){return void console.error("Error while setting limit",t)}}_delLimit(){if(this.hass)try{return void this.hass.callService("openevse","clear_limit",{device_id:this.config?.device_id},void 0,!1,!1)}catch(t){return void console.error("Error while removing limit",t)}}_showMoreInfo(t){const e=new Event("hass-more-info",{bubbles:!0,composed:!0});e.detail={entityId:t},this.dispatchEvent(e)}_getEntityState(t){const e=this.config?.[t];return"string"==typeof e&&e&&this.hass?.states&&this.hass.states[e]||null}_convertSeconds(t){if(isNaN(t)||t<0||null==t)return"--:--:--";return[Math.floor(t/3600),Math.floor(t%3600/60),Math.floor(t%60)].map((t=>String(t).padStart(2,"0"))).join(":")}_convertTime(t){if(isNaN(t)||t<0)return"00:00:00";const e=Math.round(60*t);return this._convertSeconds(e)}_updateSlider(t){this.hass&&this.config?.charge_rate_entity&&this.hass.callService("number","set_value",{entity_id:this.config.charge_rate_entity,value:t.detail.value})}render(){if(!this.hass||!this.config)return W``;const t=this._getEntityState("override_entity"),e=this._getEntityState("status_entity"),i=this._getEntityState("power_entity"),s=this._getEntityState("current_entity"),n=this._getEntityState("charge_rate_entity"),r=this._getEntityState("vehicle_connected_entity"),o=this._getEntityState("charging_status_entity"),a=this._getEntityState("session_energy_entity"),l=this._getEntityState("time_elapsed_entity"),c=this._getEntityState("wifi_signal_strength_entity"),h=this._getEntityState("vehicle_battery_level_entity"),d=this._getEntityState("vehicle_range_entity"),u=(()=>this.config?.optional_entities?.map((t=>{let e,i=null;if("string"==typeof t)e=t;else if("object"==typeof t&&null!==t){const s=t.entity,n=t.id;e=s??n,i=t}if(!e||"string"!=typeof e)return{name:"Invalid Config",value:null,icon:void 0,id:void 0};const s=this.hass?.states[e],n=s?.attributes,r=n?.friendly_name,o=n?.icon;return{name:i?.name??r??e,value:s?this.hass?.formatEntityState(s)??null:null,icon:i?.icon??o,id:e}}))?.filter((t=>void 0!==t.id))??[])();return W`
            <ha-card>
                ${!1===this._integrationVersionOk?W`
                          <ha-alert
                              alert-type="warning"
                              title="${ut("warning",this._lang)}"
                          >
                              ${ut("integration_missing_or_outdated",this._lang).replace("{min_version}",pt)}
                              Check
                              <a href="https://github.com/firstof9/openevse"
                                  >here</a
                              >
                          </ha-alert>
                      `:q}
                ${this.config.header?W`<h1 class="card-header">
                          ${this.config.name||"OpenEVSE"}
                      </h1>`:q}
                <div class="card-content">
                    <div class="evse-states">
                        <status-icons
                            .hass=${this.hass}
                            .config=${this.config}
                            .wifiSignalEntity=${c}
                            .statusEntity=${e}
                            .vehicleConnectedEntity=${r}
                            .chargingStatusEntity=${o}
                            .showMoreInfoHandler=${this._showMoreInfo}
                        ></status-icons>
                        <status-heading
                            .statusEntity=${e}
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
                        .timeElapsedEntity=${l}
                        .localTimeElapsed=${this._localTimeElapsed}
                        .language=${this._lang}
                        .showMoreInfoHandler=${this._showMoreInfo}
                        .convertTimeHandler=${this._convertTime}
                    ></info-grid>
                    <vehicle-info
                        .config=${this.config}
                        .vehicleBatteryLevelEntity=${h}
                        .vehicleRangeEntity=${d}
                    ></vehicle-info>

                    <override-controls
                        .config=${this.config}
                        .overrideEntity=${t}
                        .chargingStatusEntity=${o}
                        .selectOverrideStateHandler=${this._selectOverrideState}
                    ></override-controls>
                    <div class="container">
                        <evse-slider
                            .min=${"number"==typeof n?.attributes.min?n.attributes.min:0}
                            .max=${"number"==typeof n?.attributes.max?n.attributes.max:32}
                            .step=${"number"==typeof n?.attributes.step?n.attributes.step:1}
                            .value=${Number(n?.state||0)}
                            .unit=${"string"==typeof n?.attributes.unit_of_measurement?n.attributes.unit_of_measurement:"A"}
                            .label=${ut("charge rate",this._lang)}
                            .disabled=${!n}
                            @value-changed=${this._updateSlider}
                        ></evse-slider>
                    </div>
                    <!-- Limit -->
                    ${this.config.limit_active_entity?W`
                              <div class="container">
                                  <limit-component
                                      .limit=${this._limit}
                                      .setLimit=${this._setLimit}
                                      .delLimit=${this._delLimit}
                                      .feat_soc=${this.config.feat_soc||!1}
                                      .feat_range=${this.config.feat_range||!1}
                                      .range_max_value=${Number(this.config.feat_max_range)}
                                      .energy_max_value=${Number(this.config.feat_max_energy)}
                                      .range_unit=${String(d?.attributes.unit_of_measurement||"")}
                                      .language=${this._lang}
                                  ></limit-component>
                              </div>
                          `:q}

                    <!-- End of Limit -->
                    <optional-entities
                        .hass=${this.hass}
                        .entities=${u}
                        .showMoreInfoHandler=${this._showMoreInfo}
                    ></optional-entities>
                </div>
            </ha-card>
        `}}Vt([lt({attribute:!1})],Nt.prototype,"hass",void 0),Vt([lt({attribute:!1})],Nt.prototype,"config",void 0),Vt([ct()],Nt.prototype,"_lang",void 0),Vt([ct()],Nt.prototype,"_localTimeElapsed",void 0),Vt([ct()],Nt.prototype,"_lastEntityTime",void 0),Vt([ct()],Nt.prototype,"_timeUpdateInterval",void 0),Vt([ct()],Nt.prototype,"_isCharging",void 0),Vt([ct()],Nt.prototype,"_limit",void 0),Vt([ct()],Nt.prototype,"_hasLimit",void 0),Vt([ct()],Nt.prototype,"_integrationVersionOk",void 0);var Ht=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function It(t,e){if(t.length!==e.length)return!1;for(var i=0;i<t.length;i++)if(s=t[i],n=e[i],!(s===n||Ht(s)&&Ht(n)))return!1;var s,n;return!0}function Ut(t,e){void 0===e&&(e=It);var i=null;function s(){for(var s=[],n=0;n<arguments.length;n++)s[n]=arguments[n];if(i&&i.lastThis===this&&e(s,i.lastArgs))return i.lastResult;var r=t.apply(this,s);return i={lastResult:r,lastArgs:s,lastThis:this},r}return s.clear=function(){i=null},s}function Wt(t,e,i,s,n,r={},o="en"){return{name:t,selector:{entity:{domain:e,include_entities:(Array.isArray(e)?e:[e]).flatMap((t=>r[t]||[]))}},label:ut(i,o),helper_text:ut(s,o),required:n}}const Rt=Ut(((t={},e="en")=>[...[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}},required:!1,label:ut("header title",e)},{name:"header",selector:{boolean:{}},label:ut("display header",e)}]},{type:"grid",name:"",label:ut("features",e),schema:[{name:"feat_soc",selector:{boolean:{}},label:ut("enable vehicle battery",e)},{name:"feat_range",selector:{boolean:{}},label:ut("enable vehicle range",e)}]},{type:"grid",name:"",label:ut("limits settings",e),schema:[{name:"feat_max_energy",selector:{number:{}},required:!1,label:ut("maximum charge energy",e)},{name:"feat_max_range",selector:{number:{}},required:!1,label:ut("maximum vehicle range",e)}]},{name:"device_id",selector:{device:{integration:"openevse",manufacturer:"OpenEVSE"}},label:ut("openevse device",e),helper_text:ut("select your openevse device",e),required:!0}],...[Wt("override_entity",["input_select","select"],"override state","select openevse.override_state entity",!0,t,e),Wt("status_entity","sensor","station status","select openevse.station_status entity",!0,t,e),Wt("power_entity","sensor","current power usage","select openevse.current_power_usage entity",!0,t,e),Wt("current_entity","sensor","charging current","select openevse.charging_current entity",!0,t,e),Wt("vehicle_connected_entity","binary_sensor","vehicle connected","select openevse.vehicle_connected entity",!0,t,e),Wt("charging_status_entity","sensor","charging status","select openevse.charging_status entity",!0,t,e),Wt("charge_rate_entity","number","charge rate","select openevse.charge_rate entity",!0,t,e),Wt("session_energy_entity","sensor","session energy","select openevse.usage_this_session entity",!0,t,e),Wt("time_elapsed_entity","sensor","charge time elapsed","select openevse.charge_time_elapsed entity",!0,t,e),Wt("wifi_signal_strength_entity","sensor","wifi signal","select openevse_wifi_signal_strength entity",!1,t,e),Wt("limit_active_entity","binary_sensor","limit active","select openevse_limit_active entity",!1,t,e),Wt("vehicle_range_entity","sensor","vehicle range","select openevse_vehicle_range entity",!1,t,e),Wt("vehicle_battery_level_entity","sensor","battery level","select openevse_vehicle_battery_level entity",!1,t,e)]]));Ut(((t={},e="en")=>[{name:"id",selector:{entity:{domain:["sensor","binary_sensor"],include_entities:[...t.sensor||[],...t.binary_sensor||[]]}},label:ut("entity",e)},{name:"name",selector:{text:{}},label:ut("name",e)},{name:"icon",selector:{icon:{}},label:ut("icon",e)}]));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const qt=globalThis,Ft=qt.ShadowRoot&&(void 0===qt.ShadyCSS||qt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Dt=Symbol(),Bt=new WeakMap;let Zt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Dt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ft&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=Bt.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Bt.set(e,t))}return t}toString(){return this.cssText}};const Gt=Ft?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new Zt("string"==typeof t?t:t+"",void 0,Dt))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:Kt,defineProperty:Jt,getOwnPropertyDescriptor:Qt,getOwnPropertyNames:Xt,getOwnPropertySymbols:Yt,getPrototypeOf:te}=Object,ee=globalThis,ie=ee.trustedTypes,se=ie?ie.emptyScript:"",ne=ee.reactiveElementPolyfillSupport,re=(t,e)=>t,oe={toAttribute(t,e){switch(e){case Boolean:t=t?se:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},ae=(t,e)=>!Kt(t,e),le={attribute:!0,type:String,converter:oe,reflect:!1,hasChanged:ae};Symbol.metadata??=Symbol("metadata"),ee.litPropertyMetadata??=new WeakMap;class ce extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=le){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Jt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=Qt(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const r=s?.call(this);n.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??le}static _$Ei(){if(this.hasOwnProperty(re("elementProperties")))return;const t=te(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(re("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(re("properties"))){const t=this.properties,e=[...Xt(t),...Yt(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(Gt(t))}else void 0!==t&&e.push(Gt(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(Ft)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),s=qt.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:oe).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:oe;this._$Em=s,this[s]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??ae)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}ce.elementStyles=[],ce.shadowRootOptions={mode:"open"},ce[re("elementProperties")]=new Map,ce[re("finalized")]=new Map,ne?.({ReactiveElement:ce}),(ee.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const he=globalThis,de=he.trustedTypes,ue=de?de.createPolicy("lit-html",{createHTML:t=>t}):void 0,ve="$lit$",pe=`lit$${Math.random().toFixed(9).slice(2)}$`,ge="?"+pe,me=`<${ge}>`,fe=document,ye=()=>fe.createComment(""),be=t=>null===t||"object"!=typeof t&&"function"!=typeof t,_e=Array.isArray,we="[ \t\n\f\r]",xe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$e=/-->/g,Ee=/>/g,Se=RegExp(`>|${we}(?:([^\\s"'>=/]+)(${we}*=${we}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ke=/'/g,Ce=/"/g,Ae=/^(?:script|style|textarea|title)$/i,Me=(t,...e)=>({_$litType$:1,strings:t,values:e}),Oe=Symbol.for("lit-noChange"),je=Symbol.for("lit-nothing"),ze=new WeakMap,Le=fe.createTreeWalker(fe,129);function Te(t,e){if(!_e(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ue?ue.createHTML(e):e}class Ve{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[l,c]=((t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":3===e?"<math>":"",o=xe;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(o.lastIndex=h,l=o.exec(i),null!==l);)h=o.lastIndex,o===xe?"!--"===l[1]?o=$e:void 0!==l[1]?o=Ee:void 0!==l[2]?(Ae.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=Se):void 0!==l[3]&&(o=Se):o===Se?">"===l[0]?(o=n??xe,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?Se:'"'===l[3]?Ce:ke):o===Ce||o===ke?o=Se:o===$e||o===Ee?o=xe:(o=Se,n=void 0);const d=o===Se&&t[e+1].startsWith("/>")?" ":"";r+=o===xe?i+me:c>=0?(s.push(a),i.slice(0,c)+ve+i.slice(c)+pe+d):i+pe+(-2===c?e:d)}return[Te(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(t,e);if(this.el=Ve.createElement(l,i),Le.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Le.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(ve)){const e=c[r++],i=s.getAttribute(t).split(pe),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?Ue:"?"===o[1]?We:"@"===o[1]?Re:Ie}),s.removeAttribute(t)}else t.startsWith(pe)&&(a.push({type:6,index:n}),s.removeAttribute(t));if(Ae.test(s.tagName)){const t=s.textContent.split(pe),e=t.length-1;if(e>0){s.textContent=de?de.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],ye()),Le.nextNode(),a.push({type:2,index:++n});s.append(t[e],ye())}}}else if(8===s.nodeType)if(s.data===ge)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(pe,t+1));)a.push({type:7,index:n}),t+=pe.length-1}n++}}static createElement(t,e){const i=fe.createElement("template");return i.innerHTML=t,i}}function Pe(t,e,i=t,s){if(e===Oe)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const r=be(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=Pe(t,n._$AS(t,e.values),n,s)),e}let Ne=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??fe).importNode(e,!0);Le.currentNode=s;let n=Le.nextNode(),r=0,o=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new He(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new qe(n,this,t)),this._$AV.push(e),a=i[++o]}r!==a?.index&&(n=Le.nextNode(),r++)}return Le.currentNode=fe,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}};class He{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=je,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Pe(this,t,e),be(t)?t===je||null==t||""===t?(this._$AH!==je&&this._$AR(),this._$AH=je):t!==this._$AH&&t!==Oe&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>_e(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==je&&be(this._$AH)?this._$AA.nextSibling.data=t:this.T(fe.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Ve.createElement(Te(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Ne(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=ze.get(t.strings);return void 0===e&&ze.set(t.strings,e=new Ve(t)),e}k(t){_e(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new He(this.O(ye()),this.O(ye()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Ie{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=je,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=je}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=Pe(this,t,e,0),r=!be(t)||t!==this._$AH&&t!==Oe,r&&(this._$AH=t);else{const s=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=Pe(this,s[i+o],e,o),a===Oe&&(a=this._$AH[o]),r||=!be(a)||a!==this._$AH[o],a===je?t=je:t!==je&&(t+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!s&&this.j(t)}j(t){t===je?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ue extends Ie{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===je?void 0:t}}class We extends Ie{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==je)}}class Re extends Ie{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=Pe(this,t,e,0)??je)===Oe)return;const i=this._$AH,s=t===je&&i!==je||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==je&&(i===je||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class qe{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Pe(this,t)}}const Fe={I:He},De=he.litHtmlPolyfillSupport;De?.(Ve,He),(he.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let Be=class extends ce{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new He(e.insertBefore(ye(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Oe}};Be._$litElement$=!0,Be.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:Be});const Ze=globalThis.litElementPolyfillSupport;Ze?.({LitElement:Be}),(globalThis.litElementVersions??=[]).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ge={attribute:!0,type:String,converter:oe,reflect:!1,hasChanged:ae},Ke=(t=Ge,e,i)=>{const{kind:s,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t)},init(e){return void 0!==e&&this.P(s,void 0,t),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Je(t){return(e,i)=>"object"==typeof i?Ke(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function Qe(t){return Je({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Xe{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Ye}=Fe,ti=()=>document.createComment(""),ei=(t,e,i)=>{const s=t._$AA.parentNode,n=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=s.insertBefore(ti(),n),r=s.insertBefore(ti(),n);i=new Ye(e,r,t,t.options)}else{const e=i._$AB.nextSibling,r=i._$AM,o=r!==t;if(o){let e;i._$AQ?.(t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==r._$AU&&i._$AP(e)}if(e!==n||o){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;s.insertBefore(t,n),t=e}}}return i},ii=(t,e,i=t)=>(t._$AI(e,i),t),si={},ni=t=>{t._$AP?.(!1,!0);let e=t._$AA;const i=t._$AB.nextSibling;for(;e!==i;){const t=e.nextSibling;e.remove(),e=t}},ri=(t,e,i)=>{const s=new Map;for(let n=e;n<=i;n++)s.set(t[n],n);return s},oi=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends Xe{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let s;void 0===i?i=e:void 0!==e&&(s=e);const n=[],r=[];let o=0;for(const e of t)n[o]=s?s(e,o):o,r[o]=i(e,o),o++;return{values:r,keys:n}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,s]){const n=(t=>t._$AH)(t),{values:r,keys:o}=this.dt(e,i,s);if(!Array.isArray(n))return this.ut=o,r;const a=this.ut??=[],l=[];let c,h,d=0,u=n.length-1,v=0,p=r.length-1;for(;d<=u&&v<=p;)if(null===n[d])d++;else if(null===n[u])u--;else if(a[d]===o[v])l[v]=ii(n[d],r[v]),d++,v++;else if(a[u]===o[p])l[p]=ii(n[u],r[p]),u--,p--;else if(a[d]===o[p])l[p]=ii(n[d],r[p]),ei(t,l[p+1],n[d]),d++,p--;else if(a[u]===o[v])l[v]=ii(n[u],r[v]),ei(t,n[d],n[u]),u--,v++;else if(void 0===c&&(c=ri(o,v,p),h=ri(a,d,u)),c.has(a[d]))if(c.has(a[u])){const e=h.get(o[v]),i=void 0!==e?n[e]:null;if(null===i){const e=ei(t,n[d]);ii(e,r[v]),l[v]=e}else l[v]=ii(i,r[v]),ei(t,n[d],i),n[e]=null;v++}else ni(n[u]),u--;else ni(n[d]),d++;for(;v<=p;){const e=ei(t,l[p+1]);ii(e,r[v]),l[v++]=e}for(;d<=u;){const t=n[d++];null!==t&&ni(t)}return this.ut=o,((t,e=si)=>{t._$AH=e})(t,l),Oe}}),ai=["ha-form","ha-icon","ha-icon-button","ha-selector","ha-textfield","ha-icon-picker","ha-icon-button","ha-entity-picker","ha-select","ha-dialog","ha-sortable","ha-svg-icon","ha-alert","ha-button","ha-color-picker","ha-badge","ha-sankey-chart","mwc-button"],li=async t=>{const e=t||ai;try{if(e.every((t=>customElements.get(t))))return;await Promise.race([customElements.whenDefined("partial-panel-resolver"),new Promise(((t,e)=>setTimeout((()=>e(new Error("Timeout waiting for partial-panel-resolver"))),1e4)))]);const t=document.createElement("partial-panel-resolver");if(!t)throw new Error("Failed to create partial-panel-resolver element");if(t.hass={panels:[{url_path:"tmp",component_name:"config"}]},"function"!=typeof t._updateRoutes)throw new Error("partial-panel-resolver does not have _updateRoutes method");if(t._updateRoutes(),!t.routerOptions?.routes?.tmp?.load)throw new Error("Failed to create tmp route in partial-panel-resolver");await Promise.race([t.routerOptions.routes.tmp.load(),new Promise(((t,e)=>setTimeout((()=>e(new Error("Timeout loading tmp route"))),1e4)))]),await Promise.race([customElements.whenDefined("ha-panel-config"),new Promise(((t,e)=>setTimeout((()=>e(new Error("Timeout waiting for ha-panel-config"))),1e4)))]);const i=document.createElement("ha-panel-config");if(!i)throw new Error("Failed to create ha-panel-config element");if(!i.routerOptions?.routes?.automation?.load)throw new Error("ha-panel-config does not have automation route");await Promise.race([i.routerOptions.routes.automation.load(),new Promise(((t,e)=>setTimeout((()=>e(new Error("Timeout loading automation components"))),1e4)))]);const s=e.filter((t=>!customElements.get(t)));if(s.length>0)throw new Error(`Failed to load components: ${s.join(", ")}`)}catch(t){console.error("Error loading Home Assistant form components:",t);try{if(window.customElements&&window.customElements.get("home-assistant")){console.log("Attempting fallback loading method for HA components");const t=new CustomEvent("ha-request-load-components",{detail:{components:e},bubbles:!0,composed:!0});document.dispatchEvent(t)}}catch(t){console.error("Fallback loading method failed:",t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ci=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};const hi=["ha-form","ha-icon-button","ha-entity-picker","ha-dialog","ha-sortable","ha-svg-icon","mwc-button"];li(hi).catch((t=>{console.error("Failed to load Home Assistant components:",t)}));let di=class extends Be{constructor(){super(...arguments),this._entities=[],this._editDialogOpen=!1,this._editingEntityIndex=null,this._editingEntityData=null,this._entityKeys=new WeakMap}_getKey(t){return this._entityKeys.has(t)||this._entityKeys.set(t,Math.random().toString()),this._entityKeys.get(t)}async firstUpdated(){try{await li(hi)}catch(t){console.error("Error loading ha-components:",t)}}willUpdate(t){super.willUpdate(t),t.has("entities")&&this._processIncomingConfig()}_processIncomingConfig(){this.entities?(this._entities=this.entities.map((t=>"string"==typeof t?{entity:t}:t)),this._entityKeys=new WeakMap):this._entities=[]}render(){return this.hass?Me`
      ${this.label?Me`<h3>${this.label}</h3>`:je}
      <ha-sortable handle-selector=".handle" @item-moved=${this._rowMoved}>
        <div class="entities">
          ${oi(this._entities,(t=>this._getKey(t)),((t,e)=>Me`
              <div class="entity-row">
                <div class="handle">
                  <ha-svg-icon .path=${"M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"}></ha-svg-icon>
                </div>
                <div class="entity-info">
                  ${t.entity?Me`
                        <ha-entity-picker
                          allow-custom-entity
                          hide-clear-icon
                          .hass=${this.hass}
                          .value=${t.entity}
                          .index=${e}
                          @value-changed=${this._entityValueChanged}
                        ></ha-entity-picker>
                        ${t.name||t.icon?Me`<span class="secondary">(${t.name?`Name: ${t.name}`:""}${t.name&&t.icon?", ":""}${t.icon?`Icon: ${t.icon}`:""})</span>`:""}
                      `:Me`
                        <!-- Placeholder for special row types if needed later -->
                        <span>Special Row Type: ${t.type}</span>
                      `}
                </div>
                <ha-icon-button
                  label="Edit"
                  .path=${"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}
                  class="edit-icon"
                  .index=${e}
                  @click=${this._editRow}
                ></ha-icon-button>
                <ha-icon-button
                  label="Remove"
                  .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
                  class="remove-icon"
                  .index=${e}
                  @click=${this._removeEntity}
                ></ha-icon-button>
              </div>
            `))}
        </div>
      </ha-sortable>
      <ha-entity-picker
        class="add-entity"
        .hass=${this.hass}
        @value-changed=${this._addEntity}
      ></ha-entity-picker>

      <!-- Edit Dialog -->
      ${this._editDialogOpen?Me`
        <ha-dialog
          open
          @closed=${this._closeEditDialog}
          .heading=${"Edit Entity"}
        >
          <div class="dialog-content">
            <ha-form
              .hass=${this.hass}
              .data=${this._editingEntityData??{}}
              .schema=${this._getEditDialogSchema()}
              .computeLabel=${t=>t.label||t.name}
              @value-changed=${this._handleEditDialogValueChanged}
            ></ha-form>
          </div>
          <mwc-button
            slot="secondaryAction"
            @click=${this._closeEditDialog}
          >
            Cancel
          </mwc-button>
          <mwc-button
            slot="primaryAction"
            @click=${this._saveEditDialog}
            .disabled=${!this._editingEntityData}
          >
            Save
          </mwc-button>
        </ha-dialog>
      `:""}
    `:je}_addEntity(t){const e=t.detail.value;e&&(this._entities.some((t=>t.entity===e))?t.target.value="":(this._entities=[...this._entities,{entity:e}],t.target.value="",this._valueChanged()))}_rowMoved(t){t.stopPropagation();const{oldIndex:e,newIndex:i}=t.detail;if(e===i)return;const s=[...this._entities],[n]=s.splice(e,1);s.splice(i,0,n),this._entities=s,this._valueChanged()}_removeEntity(t){const e=t.currentTarget.index;this._entities=this._entities.filter(((t,i)=>i!==e)),this._valueChanged()}_entityValueChanged(t){t.stopPropagation();const e=t.detail.value,i=t.target.index;if(!e||this._entities[i].entity===e)return void(t.target.value=this._entities[i].entity);if(this._entities.some(((t,s)=>s!==i&&t.entity===e)))return void(t.target.value=this._entities[i].entity);const s=[...this._entities];s[i]={...s[i],entity:e},this._entities=s,this._valueChanged()}_editRow(t){const e=t.currentTarget.index;this._editingEntityIndex=e;const i=this._entities[e];this._editingEntityData={...i},this._editDialogOpen=!0}_closeEditDialog(){this._editDialogOpen=!1,this._editingEntityIndex=null,this._editingEntityData=null}_handleEditDialogValueChanged(t){this._editingEntityData&&(this._editingEntityData={...this._editingEntityData,...t.detail.value})}_saveEditDialog(){if(null===this._editingEntityIndex||!this._editingEntityData)return;const t=[...this._entities],e={...t[this._editingEntityIndex],...this._editingEntityData};""===e.name&&delete e.name,""===e.icon&&delete e.icon,t[this._editingEntityIndex]=e,this._entities=t,this._valueChanged(),this._closeEditDialog()}_getEditDialogSchema(){return[{name:"name",selector:{text:{}},label:"Name"},{name:"icon",selector:{icon:{}},label:"Icon"}]}_valueChanged(){const t=new CustomEvent("entities-changed",{detail:{entities:this._entities},bubbles:!0,composed:!0});this.dispatchEvent(t)}};di.styles=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new Zt(i,t,Dt)})`
    .entities {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 12px;
    }
    /* Dialog styles */
    .dialog-content {
      padding: 16px;
    }
    ha-dialog {
      /* Prevent dialog from overlapping app header */
      --dialog-surface-position: static;
      --dialog-z-index: 5;
    }
    .entity-row {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .handle {
      padding-right: 8px;
      cursor: move; /* fallback */
      cursor: grab;
    }
    .handle > * {
      pointer-events: none; /* Prevent icon from interfering with drag */
    }
    .entity-info {
        flex-grow: 1;
        display: flex;
        flex-direction: column; /* Stack picker and secondary info */
    }
    .secondary {
        font-size: 0.8em;
        color: var(--secondary-text-color);
        margin-left: 4px; /* Indent secondary info slightly */
    }
    .add-entity {
      display: block;
      margin-left: 31px; /* Align with entity info, accounting for handle */
      margin-right: 71px; /* Align with entity info, accounting for buttons */
      margin-inline-start: 31px;
      margin-inline-end: 71px;
      direction: var(--direction);
      margin-top: 8px;
    }
    ha-icon-button {
      --mdc-icon-button-size: 36px;
      color: var(--secondary-text-color);
    }
    .remove-icon {
       color: var(--error-color);
    }
    h3 {
        margin-bottom: 8px;
        font-size: 1rem;
        color: var(--primary-text-color);
    }
  `,ci([Je({attribute:!1})],di.prototype,"hass",void 0),ci([Je({attribute:!1})],di.prototype,"entities",void 0),ci([Je()],di.prototype,"label",void 0),ci([Qe()],di.prototype,"_entities",void 0),ci([Qe()],di.prototype,"_editDialogOpen",void 0),ci([Qe()],di.prototype,"_editingEntityIndex",void 0),ci([Qe()],di.prototype,"_editingEntityData",void 0),di=ci([(t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)})("multi-entity-selector")],di);var ui=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};class vi extends st{static get styles(){return r`
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
            /* Dialog styles */
            .dialog-content {
                padding: 16px;
            }
            ha-dialog {
                /* Prevent dialog from overlapping app header */
                --dialog-surface-position: static;
                --dialog-z-index: 5;
            }
            /* Removed duplicate dialog styles */
        `}constructor(){super(),this.config={},this._deviceIdChanged=!1,this.openEVSEEntities={},this.deviceEntitiesLoaded=!1}async firstUpdated(){this._lang=this.hass?.language||"en"}setConfig(t){const e=(t.optional_entities||[]).map((t=>{if("object"==typeof t&&null!==t&&t.id&&!t.entity){const{id:e,...i}=t;return{...i,entity:e}}return t})).filter((t=>"string"==typeof t||"object"==typeof t&&null!==t&&("string"==typeof t.entity||void 0===t.entity)));this.config={...t,optional_entities:e},this.config.device_id&&this.hass&&!this.deviceEntitiesLoaded&&this._loadDeviceEntities(this.config.device_id)}_isEntityConfigured(t){return Boolean(this.config[t]&&this.config[t].length>0)}async _loadDeviceEntities(t){if(!t||!this.hass)return;const e={},i=Object.values(this.hass.entities||{}).filter((e=>e.device_id===t)),s={override_entity:{names:["override_state"],domains:["select"],preferredPattern:"select.openevse_override_state"},status_entity:{names:["station_status"],domains:["sensor"],preferredPattern:"sensor.openevse_station_status"},power_entity:{names:["current_power_usage"],domains:["sensor"],preferredPattern:"sensor.openevse_current_power_usage"},current_entity:{names:["charging_current"],domains:["sensor"],preferredPattern:"sensor.openevse_charging_current"},vehicle_connected_entity:{names:["vehicle_connected"],domains:["binary_sensor"],preferredPattern:"binary_sensor.openevse_vehicle_connected"},charging_status_entity:{names:["charging_status"],domains:["sensor"],preferredPattern:"sensor.openevse_charging_status"},charge_rate_entity:{names:["charge_rate"],domains:["number"],preferredPattern:"number.openevse_charge_rate"},session_energy_entity:{names:["usage_this_session"],domains:["sensor"],preferredPattern:"sensor.openevse_usage_this_session"},time_elapsed_entity:{names:["charge_time_elapsed"],domains:["sensor"],preferredPattern:"sensor.openevse_charge_time_elapsed"},wifi_signal_strength_entity:{names:["wifi_signal_strength"],domains:["sensor"],preferredPattern:"sensor.openevse_wifi_signal_strength"},limit_active_entity:{names:["limit_active"],domains:["binary_sensor"],preferredPattern:"sensor.openevse_limit_active"},vehicle_battery_level_entity:{names:["vehicle_battery_level"],domains:["sensor"],preferredPattern:"sensor.openevse_vehicle_battery_level"},vehicle_range_entity:{names:["vehicle_range"],domains:["sensor"],preferredPattern:"sensor.openevse_vehicle_range"}};for(const[t,n]of Object.entries(s)){if(this._isEntityConfigured(t)&&!this._deviceIdChanged)continue;const{names:s,domains:r,preferredPattern:o}=n;let a=i.find((t=>t.entity_id.toLowerCase()===o.toLowerCase()));a||(a=i.find((t=>{const e=t.entity_id.toLowerCase(),i=e.split(".")[0];return!!r.includes(i)&&s.some((i=>e.includes(i.toLowerCase())||t.original_name&&t.original_name.toLowerCase().includes(i.toLowerCase())))}))),a&&(e[t]=a.entity_id)}this.openEVSEEntities=e,this.deviceEntitiesLoaded=!0;const n={...this.config};for(const[t,i]of Object.entries(e))this._isEntityConfigured(t)&&!this._deviceIdChanged||(n[t]=i);this._deviceIdChanged=!1,this.config=n,this._fireConfigChanged(n)}_handleConfigChange(t){const e=t.detail.value;e.device_id!==this.config.device_id?(this._deviceIdChanged=!0,this.deviceEntitiesLoaded=!1,this.config={...this.config,...e},this._loadDeviceEntities(e.device_id)):this._dispatchConfigChanged(e)}_dispatchConfigChanged(t){const e={...this.config,...t};this.config=e,this._fireConfigChanged(e)}_fireConfigChanged(t){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t}}))}_handleOptionalEntitiesChanged(t){if(!this.config||!this.hass)return;const e=t.detail.entities;this.config={...this.config,optional_entities:e},this._fireConfigChanged(this.config)}_getMissingEntities(){return["override_entity","status_entity","power_entity","current_entity","vehicle_connected_entity","charging_status_entity","charge_rate_entity","session_energy_entity","time_elapsed_entity","wifi_signal_strength_entity","limit_active_entity","vehicle_range_entity","vehicle_battery_level_entity"].filter((t=>{const e=this.config[t]&&this.config[t].length>0,i=this.openEVSEEntities[t]&&this.openEVSEEntities[t].length>0;return!e&&!i}))}render(){if(!this.hass)return W``;const t={};if(this.config.device_id&&this.hass.entities){Object.values(this.hass.entities).filter((t=>t.device_id===this.config.device_id)).forEach((e=>{const i=e.entity_id.split(".")[0];t[i]||(t[i]=[]),t[i].push(e.entity_id)}))}const e=Rt(t,this._lang),i=this._getMissingEntities();return W`
            <!-- Auto-detection status -->
            ${this.config.device_id?W`
                      <div class="entity-section">
                          ${this.deviceEntitiesLoaded?W`
                                    <div
                                        class="entity-status ${i.length>0?"warning":"success"}"
                                    >
                                        ${0===i.length?ut("entity_auto_success",this._lang)+"!":ut("entity_auto_fail",this._lang)+": "+i.join(", ")}
                                    </div>
                                `:W`
                                    <div class="entity-status">
                                        ${ut("entity_auto_loading",this._lang)}
                                    </div>
                                `}
                      </div>
                  `:""}

            <div class="form-container">
                ${this.config.device_id?W`
                          <!-- Main configuration -->
                          <ha-form
                              .hass=${this.hass}
                              .data=${this.config}
                              .schema=${e}
                              .computeLabel=${t=>t.label||t.name}
                              .computeHelper=${t=>t.helper_text||q}
                              @value-changed=${this._handleConfigChange}
                          ></ha-form>

                          <!-- Additional entities -->
                          <!-- Additional entities using multi-entity-selector -->
                          <div class="entity-section">
                              <multi-entity-selector
                                  .hass=${this.hass}
                                  .entities=${this.config.optional_entities||[]}
                                  label=${ut("additional entities",this._lang)}
                                  @entities-changed=${this._handleOptionalEntitiesChanged}
                              ></multi-entity-selector>
                          </div>
                      `:W`
                          <ha-form
                              .hass=${this.hass}
                              .data=${this.openEVSEEntities}
                              .schema=${[{name:"device_id",selector:{device:{integration:"openevse",manufacturer:"OpenEVSE"}},label:ut("openevse device",this._lang),helper_text:ut("select your openevse device",this._lang),required:!0}]}
                              @value-changed=${this._handleConfigChange}
                          ></ha-form>
                      `}
            </div>
        `}}ui([lt({attribute:!1})],vi.prototype,"hass",void 0),ui([lt({attribute:!1})],vi.prototype,"config",void 0),ui([ct()],vi.prototype,"_lang",void 0),ui([ct()],vi.prototype,"_deviceIdChanged",void 0),ui([ct()],vi.prototype,"openEVSEEntities",void 0),ui([ct()],vi.prototype,"deviceEntitiesLoaded",void 0),customElements.define("openevse-card",Nt),customElements.define("openevse-card-editor",vi),window.customCards=window.customCards||[],window.customCards.push({type:"openevse-card",name:"OpenEVSE Card",description:"A custom card for OpenEVSE"});
