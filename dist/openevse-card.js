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
 */,{is:a,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,v=globalThis,p=v.trustedTypes,g=p?p.emptyScript:"",m=v.reactiveElementPolyfillSupport,f=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},_=(e,t)=>!a(e,t),b={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);void 0!==s&&c(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=l(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return s?.call(this)},set(t){const r=s?.call(this);n.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??b}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const e=this.properties,t=[...h(e),...d(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(o(e))}else void 0!==e&&t.push(o(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(t)i.adoptedStyleSheets=s.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of s){const s=document.createElement("style"),n=e.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=t.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=i.getPropertyOptions(s),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=s,this[s]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??_)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[f("elementProperties")]=new Map,w[f("finalized")]=new Map,m?.({ReactiveElement:w}),(v.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,$=x.trustedTypes,E=$?$.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+k,A=`<${C}>`,M=document,O=()=>M.createComment(""),j=e=>null===e||"object"!=typeof e&&"function"!=typeof e,z=Array.isArray,T="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,V=/>/g,N=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,I=/"/g,U=/^(?:script|style|textarea|title)$/i,W=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),R=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),D=new WeakMap,F=M.createTreeWalker(M,129);function B(e,t){if(!z(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}let Z=class e{constructor({strings:t,_$litType$:i},s){let n;this.parts=[];let r=0,o=0;const a=t.length-1,c=this.parts,[l,h]=((e,t)=>{const i=e.length-1,s=[];let n,r=2===t?"<svg>":3===t?"<math>":"",o=L;for(let t=0;t<i;t++){const i=e[t];let a,c,l=-1,h=0;for(;h<i.length&&(o.lastIndex=h,c=o.exec(i),null!==c);)h=o.lastIndex,o===L?"!--"===c[1]?o=P:void 0!==c[1]?o=V:void 0!==c[2]?(U.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=N):void 0!==c[3]&&(o=N):o===N?">"===c[0]?(o=n??L,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?N:'"'===c[3]?I:H):o===I||o===H?o=N:o===P||o===V?o=L:(o=N,n=void 0);const d=o===N&&e[t+1].startsWith("/>")?" ":"";r+=o===L?i+A:l>=0?(s.push(a),i.slice(0,l)+S+i.slice(l)+k+d):i+k+(-2===l?t:d)}return[B(e,r+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]})(t,i);if(this.el=e.createElement(l,s),F.currentNode=this.el.content,2===i||3===i){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=F.nextNode())&&c.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(S)){const t=h[o++],i=n.getAttribute(e).split(k),s=/([.?@])?(.*)/.exec(t);c.push({type:1,index:r,name:s[2],strings:i,ctor:"."===s[1]?X:"?"===s[1]?Y:"@"===s[1]?ee:Q}),n.removeAttribute(e)}else e.startsWith(k)&&(c.push({type:6,index:r}),n.removeAttribute(e));if(U.test(n.tagName)){const e=n.textContent.split(k),t=e.length-1;if(t>0){n.textContent=$?$.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],O()),F.nextNode(),c.push({type:2,index:++r});n.append(e[t],O())}}}else if(8===n.nodeType)if(n.data===C)c.push({type:2,index:r});else{let e=-1;for(;-1!==(e=n.data.indexOf(k,e+1));)c.push({type:7,index:r}),e+=k.length-1}r++}}static createElement(e,t){const i=M.createElement("template");return i.innerHTML=e,i}};function G(e,t,i=e,s){if(t===R)return t;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const r=j(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(t=G(e,n._$AS(e,t.values),n,s)),t}let K=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??M).importNode(t,!0);F.currentNode=s;let n=F.nextNode(),r=0,o=0,a=i[0];for(;void 0!==a;){if(r===a.index){let t;2===a.type?t=new J(n,n.nextSibling,this,e):1===a.type?t=new a.ctor(n,a.name,a.strings,this,e):6===a.type&&(t=new te(n,this,e)),this._$AV.push(t),a=i[++o]}r!==a?.index&&(n=F.nextNode(),r++)}return F.currentNode=M,s}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},J=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),j(e)?e===q||null==e||""===e?(this._$AH!==q&&this._$AR(),this._$AH=q):e!==this._$AH&&e!==R&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>z(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==q&&j(this._$AH)?this._$AA.nextSibling.data=e:this.T(M.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,s="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Z.createElement(B(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new K(s,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=D.get(e.strings);return void 0===t&&D.set(e.strings,t=new Z(e)),t}k(t){z(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,n=0;for(const r of t)n===i.length?i.push(s=new e(this.O(O()),this.O(O()),this,this.options)):s=i[n],s._$AI(r),n++;n<i.length&&(this._$AR(s&&s._$AB.nextSibling,n),i.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}},Q=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(e,t=this,i,s){const n=this.strings;let r=!1;if(void 0===n)e=G(this,e,t,0),r=!j(e)||e!==this._$AH&&e!==R,r&&(this._$AH=e);else{const s=e;let o,a;for(e=n[0],o=0;o<n.length-1;o++)a=G(this,s[i+o],t,o),a===R&&(a=this._$AH[o]),r||=!j(a)||a!==this._$AH[o],a===q?e=q:e!==q&&(e+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!s&&this.j(e)}j(e){e===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},X=class extends Q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===q?void 0:e}},Y=class extends Q{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==q)}},ee=class extends Q{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=G(this,e,t,0)??q)===R)return;const i=this._$AH,s=e===q&&i!==q||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==q&&(i===q||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},te=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}};const ie=x.litHtmlPolyfillSupport;ie?.(Z,J),(x.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let se=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const s=i?.renderBefore??t;let n=s._$litPart$;if(void 0===n){const e=i?.renderBefore??null;s._$litPart$=n=new J(t.insertBefore(O(),e),e,void 0,i??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return R}};se._$litElement$=!0,se.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:se});const ne=globalThis.litElementPolyfillSupport;ne?.({LitElement:se}),(globalThis.litElementVersions??=[]).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const re=e=>(t,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,oe={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:_},ae=(e=oe,t,i)=>{const{kind:s,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(i.name,e),"accessor"===s){const{name:s}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,n,e)},init(t){return void 0!==t&&this.P(s,void 0,e),t}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];t.call(this,i),this.requestUpdate(s,n,e)}}throw Error("Unsupported decorator location: "+s)};function ce(e){return(t,i)=>"object"==typeof i?ae(e,t,i):((e,t,i)=>{const s=t.hasOwnProperty(i);return t.constructor.createProperty(i,s?{...e,wrapped:!0}:e),s?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function le(e){return ce({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he=r`
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
`,de={en:{disabled:"disabled",sleeping:"disabled",active:"active",charging:"charging","not connected":"waiting",connected:"connected",error:"error",power:"power",current:"current",session:"session",elapsed:"elapsed","charge rate":"charge rate",required_entities:"Required entities",entity_auto_success:"All required entities were automatically found",entity_auto_fail:"Some entities could not be automatically detected",entity_auto_loading:"Loading device entities","additional entities":"Additional entities","new limit":"New Limit","add charging limit":"Add Charging Limit",time:"Time",energy:"Energy",battery:"Battery",range:"Range",hours:"Hours",minutes:"Minutes",cancel:"Cancel","add limit":"Add Limit","header title":"Header Title","display header":"Display header",features:"Features","enable vehicle battery":"Enable Vehicle Battery","enable vehicle range":"Enable Vehicle Range","limits settings":"Limits settings","maximum charge energy":"Maximum charge energy (kWh)","maximum vehicle range":"Maximum vehicle range (miles|km)","openevse device":"OpenEVSE Device","select your openevse device":"Select your OpenEVSE device to automatically populate all entities","override state":"Override State","select openevse.override_state entity":"Select openevse.override_state entity","station status":"Station Status","select openevse.station_status entity":"Select openevse.station_status entity","current power usage":"Current power usage","select openevse.current_power_usage entity":"Select openevse.current_power_usage entity","charging current":"Charging current","select openevse.charging_current entity":"Select openevse.charging_current entity","vehicle connected":"Vehicle Connected","select openevse.vehicle_connected entity":"Select openevse.vehicle_connected entity","charging status":"Charging status","select openevse.charging_status entity":"Select openevse.charging_status entity","session energy":"Session Energy","select openevse.usage_this_session entity":"Select openevse.usage_this_session entity","charge time elapsed":"Charge Time Elapsed","select openevse.charge_time_elapsed entity":"Select openevse.charge_time_elapsed entity","wifi signal":"Wifi Signal","select openevse_wifi_signal_strength entity":"Select openevse_wifi_signal_strength entity","limit active":"Limit Active","select openevse_limit_active entity":"Select openevse_limit_active entity","vehicle range":"Vehicle Range","select openevse_vehicle_range entity":"Select openevse_vehicle_range entity","battery level":"Battery Level","select openevse_vehicle_battery_level entity":"Select openevse_vehicle_battery_level entity",entity:"Entity",name:"Name",icon:"Icon",warning:"Warning","edit optional entity":"Edit Optional Entity",save:"Save",integration_missing_or_outdated:"OpenEVSE integration not found or requires version {min_version} & higher."},fr:{disabled:"désactivé",sleeping:"désactivé",active:"activé",charging:"en charge","not connected":"en attente",connected:"connecté",error:"erreur",power:"puissance",current:"courant",session:"session",elapsed:"écoulé","charge rate":"ampérage",required_entities:"Entités requises",entity_auto_success:"Toutes les entités ont été trouvées automatiquement",entity_auto_fail:"certaines entités n'ont pas pu être détectées automatiquement",entity_auto_loading:"Chargement des entités de l'appareil","additional entities":"Entités supplémentaires","new limit":"Nouvelle Limite","add charging limit":"Ajouter une Limite de Charge",time:"Temps",energy:"Énergie",battery:"Batterie",range:"Autonomie",hours:"Heures",minutes:"Minutes",cancel:"Annuler","add limit":"Ajouter Limite","header title":"Titre d'en-tête","display header":"Afficher l'en-tête",features:"Fonctionnalités","enable vehicle battery":"Activer la batterie du véhicule","enable vehicle range":"Activer l'autonomie du véhicule","limits settings":"Paramètres des limites","maximum charge energy":"Énergie de charge maximale (kWh)","maximum vehicle range":"Autonomie maximale du véhicule (miles|km)","openevse device":"Appareil OpenEVSE","select your openevse device":"Sélectionnez votre appareil OpenEVSE pour remplir automatiquement toutes les entités","override state":"État de surcharge","select openevse.override_state entity":"Sélectionnez l'entité openevse.override_state","station status":"État de la station","select openevse.station_status entity":"Sélectionnez l'entité openevse.station_status","current power usage":"Consommation électrique actuelle","select openevse.current_power_usage entity":"Sélectionnez l'entité openevse.current_power_usage","charging current":"Courant de charge","select openevse.charging_current entity":"Sélectionnez l'entité openevse.charging_current","vehicle connected":"Véhicule connecté","select openevse.vehicle_connected entity":"Sélectionnez l'entité openevse.vehicle_connected","charging status":"État de charge","select openevse.charging_status entity":"Sélectionnez l'entité openevse.charging_status","session energy":"Énergie de session","select openevse.usage_this_session entity":"Sélectionnez l'entité openevse.usage_this_session","charge time elapsed":"Temps de charge écoulé","select openevse.charge_time_elapsed entity":"Sélectionnez l'entité openevse.charge_time_elapsed","wifi signal":"Signal Wifi","select openevse_wifi_signal_strength entity":"Sélectionnez l'entité openevse_wifi_signal_strength","limit active":"Limite active","select openevse_limit_active entity":"Sélectionnez l'entité openevse_limit_active","vehicle range":"Autonomie du véhicule","select openevse_vehicle_range entity":"Sélectionnez l'entité openevse_vehicle_range","battery level":"Niveau de batterie","select openevse_vehicle_battery_level entity":"Sélectionnez l'entité openevse_vehicle_battery_level",entity:"Entité",name:"Nom",icon:"Icône",warning:"Avertissement","edit optional entity":"Modifier l'entité optionnelle",save:"Enregistrer",integration_missing_or_outdated:"Intégration OpenEVSE non trouvée ou nécessite la version {min_version} ou supérieure."},de:{disabled:"deaktiviert",sleeping:"deaktiviert",active:"aktiv",charging:"lädt","not connected":"bereit",connected:"verbunden",error:"fehler",power:"leistung",current:"stromstärke",session:"sitzung",elapsed:"verstrichene zeit","charge rate":"laderate",required_entities:"Erforderliche Entitäten",entity_auto_success:"Alle erforderlichen Entitäten wurden automatisch gefunden",entity_auto_fail:"Einige Entitäten konnten nicht automatisch erkannt werden",entity_auto_loading:"Geräteentitäten werden geladen","additional entities":"Zusätzliche Entitäten","new limit":"Neues Limit","add charging limit":"Ladelimit hinzufügen",time:"Zeit",energy:"Energie",battery:"Batterie",range:"Reichweite",hours:"Stunden",minutes:"Minuten",cancel:"Abbrechen","add limit":"Limit hinzufügen","header title":"Kopfzeilentitel","display header":"Kopfzeile anzeigen",features:"Funktionen","enable vehicle battery":"Fahrzeugbatterie aktivieren","enable vehicle range":"Fahrzeugreichweite aktivieren","limits settings":"Limit-Einstellungen","maximum charge energy":"Maximale Ladeenergie (kWh)","maximum vehicle range":"Maximale Fahrzeugreichweite (Meilen|km)","openevse device":"OpenEVSE-Gerät","select your openevse device":"Wählen Sie Ihr OpenEVSE-Gerät aus, um alle Entitäten automatisch zu füllen","override state":"Überschreibungsstatus","select openevse.override_state entity":"Wählen Sie die openevse.override_state Entität","station status":"Stationsstatus","select openevse.station_status entity":"Wählen Sie die openevse.station_status Entität","current power usage":"Aktuelle Leistungsaufnahme","select openevse.current_power_usage entity":"Wählen Sie die openevse.current_power_usage Entität","charging current":"Ladestrom","select openevse.charging_current entity":"Wählen Sie die openevse.charging_current Entität","vehicle connected":"Fahrzeug verbunden","select openevse.vehicle_connected entity":"Wählen Sie die openevse.vehicle_connected Entität","charging status":"Ladestatus","select openevse.charging_status entity":"Wählen Sie die openevse.charging_status Entität","session energy":"Sitzungsenergie","select openevse.usage_this_session entity":"Wählen Sie die openevse.usage_this_session Entität","charge time elapsed":"Verstrichene Ladezeit","select openevse.charge_time_elapsed entity":"Wählen Sie die openevse.charge_time_elapsed Entität","wifi signal":"WLAN-Signal","select openevse_wifi_signal_strength entity":"Wählen Sie die openevse_wifi_signal_strength Entität","limit active":"Limit aktiv","select openevse_limit_active entity":"Wählen Sie die openevse_limit_active Entität","vehicle range":"Fahrzeugreichweite","select openevse_vehicle_range entity":"Wählen Sie die openevse_vehicle_range Entität","battery level":"Batteriestand","select openevse_vehicle_battery_level entity":"Wählen Sie die openevse_vehicle_battery_level Entität",entity:"Entität",name:"Name",icon:"Symbol",warning:"Warnung","edit optional entity":"Optionale Entität bearbeiten",save:"Speichern",integration_missing_or_outdated:"OpenEVSE-Integration nicht gefunden oder erfordert Version {min_version} oder höher."},es:{disabled:"desactivado",sleeping:"desactivado",active:"activo",charging:"cargando","not connected":"en espera",connected:"conectado",error:"error",power:"potencia",current:"corriente",session:"sesión",elapsed:"pasado","charge rate":"amperaje",required_entities:"Entidades requeridas",entity_auto_success:"Todas las entidades requeridas se encontraron automáticamente",entity_auto_fail:"Algunas entidades no pudieron ser detectadas automáticamente",entity_auto_loading:"Cargando entidades del dispositivo","additional entities":"Entidades adicionales","new limit":"Nuevo Límite","add charging limit":"Añadir Límite de Carga",time:"Tiempo",energy:"Energía",battery:"Batería",range:"Autonomía",hours:"Horas",minutes:"Minutos",cancel:"Cancelar","add limit":"Añadir Límite","header title":"Título del encabezado","display header":"Mostrar encabezado",features:"Características","enable vehicle battery":"Habilitar batería del vehículo","enable vehicle range":"Habilitar autonomía del vehículo","limits settings":"Configuración de límites","maximum charge energy":"Energía máxima de carga (kWh)","maximum vehicle range":"Autonomía máxima del vehículo (millas|km)","openevse device":"Dispositivo OpenEVSE","select your openevse device":"Seleccione su dispositivo OpenEVSE para completar automáticamente todas las entidades","override state":"Estado de anulación","select openevse.override_state entity":"Seleccione la entidad openevse.override_state","station status":"Estado de la estación","select openevse.station_status entity":"Seleccione la entidad openevse.station_status","current power usage":"Consumo de energía actual","select openevse.current_power_usage entity":"Seleccione la entidad openevse.current_power_usage","charging current":"Corriente de carga","select openevse.charging_current entity":"Seleccione la entidad openevse.charging_current","vehicle connected":"Vehículo conectado","select openevse.vehicle_connected entity":"Seleccione la entidad openevse.vehicle_connected","charging status":"Estado de carga","select openevse.charging_status entity":"Seleccione la entidad openevse.charging_status","session energy":"Energía de sesión","select openevse.usage_this_session entity":"Seleccione la entidad openevse.usage_this_session","charge time elapsed":"Tiempo de carga transcurrido","select openevse.charge_time_elapsed entity":"Seleccione la entidad openevse.charge_time_elapsed","wifi signal":"Señal Wifi","select openevse_wifi_signal_strength entity":"Seleccione la entidad openevse_wifi_signal_strength","limit active":"Límite activo","select openevse_limit_active entity":"Seleccione la entidad openevse_limit_active","vehicle range":"Autonomía del vehículo","select openevse_vehicle_range entity":"Seleccione la entidad openevse_vehicle_range","battery level":"Nivel de batería","select openevse_vehicle_battery_level entity":"Seleccione la entidad openevse_vehicle_battery_level",entity:"Entidad",name:"Nombre",icon:"Icono",warning:"Advertencia","edit optional entity":"Editar entidad opcional",save:"Guardar",integration_missing_or_outdated:"Integración OpenEVSE no encontrada o requiere la versión {min_version} o superior."}};function ue(e,t="en"){const i=e.toLowerCase();return t in de&&i in de[t]?de[t][i]:"en"in de&&i in de.en?de.en[i]:e}const ve=["ha-form","ha-icon","ha-icon-button","ha-selector","ha-textfield","ha-icon-picker","ha-icon-button","ha-entity-picker","ha-select","ha-dialog","ha-sortable","ha-svg-icon","ha-alert","ha-button","ha-color-picker","ha-badge","ha-sankey-chart","mwc-button"],pe="2.1.47";var ge=function(e,t,i,s){for(var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let me=class extends se{constructor(){super(),this.min=0,this.max=32,this.step=1,this.value=0,this.disabled=!1,this.height=22,this.color="var(--primary-color, #03a9f4)",this.displayThumb=!0,this.unit="",this._sliderValue=0,this._dragging=!1,this._boundHandleSliderMove=this._handleSliderMove.bind(this),this._boundHandleSliderEnd=this._handleSliderEnd.bind(this)}updated(e){e.has("value")&&!this._dragging&&(this._sliderValue=this.value)}connectedCallback(){super.connectedCallback(),this._sliderValue=this.value}disconnectedCallback(){super.disconnectedCallback(),this._removeEventListeners()}get _percentage(){const e=this.max-this.min;if(0===e)return 5;return 5+95*((this._sliderValue-this.min)/e)}_handleSliderStart(e){this.disabled||(this._dragging=!0,this.shadowRoot?.querySelector(".slider-wrapper")?.classList.add("dragging"),this._updateSliderValue(e),window.addEventListener("mousemove",this._boundHandleSliderMove),window.addEventListener("touchmove",this._boundHandleSliderMove),window.addEventListener("mouseup",this._boundHandleSliderEnd),window.addEventListener("touchend",this._boundHandleSliderEnd))}_handleSliderMove(e){this._dragging&&this._updateSliderValue(e)}_handleSliderEnd(){this._dragging&&(this.shadowRoot?.querySelector(".slider-wrapper")?.classList.remove("dragging"),this._removeEventListeners(),this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:this._sliderValue},bubbles:!0,composed:!0})),setTimeout((()=>{this._dragging=!1}),100))}_removeEventListeners(){window.removeEventListener("mousemove",this._boundHandleSliderMove),window.removeEventListener("touchmove",this._boundHandleSliderMove),window.removeEventListener("mouseup",this._boundHandleSliderEnd),window.removeEventListener("touchend",this._boundHandleSliderEnd)}_updateSliderValue(e){const t=this.shadowRoot?.querySelector(".slider-wrapper");if(!t)return;const i=t.getBoundingClientRect();let s;s="touches"in e?e.touches[0].clientX:e.clientX;const n=.95*i.width;let r=(s-(i.left+.05*i.width))/n;r=Math.min(Math.max(r,0),1);let o=this.min+r*(this.max-this.min);o=Math.round(o/this.step)*this.step,o=Math.min(Math.max(o,this.min),this.max),this._sliderValue=Number(o.toFixed(2)),this.dispatchEvent(new CustomEvent("value-preview",{detail:{value:this._sliderValue},bubbles:!0,composed:!0})),this.requestUpdate()}_formatValue(e){return this.step<1?e.toFixed(1):e.toFixed(0)}render(){return W`
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
        `}};me.styles=r`
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
    `,ge([ce({type:Number})],me.prototype,"min",void 0),ge([ce({type:Number})],me.prototype,"max",void 0),ge([ce({type:Number})],me.prototype,"step",void 0),ge([ce({type:Number})],me.prototype,"value",void 0),ge([ce({type:Boolean,reflect:!0})],me.prototype,"disabled",void 0),ge([ce({type:Number})],me.prototype,"height",void 0),ge([ce({type:String})],me.prototype,"color",void 0),ge([ce({type:Boolean,attribute:"display-thumb"})],me.prototype,"displayThumb",void 0),ge([ce({type:String})],me.prototype,"unit",void 0),ge([le()],me.prototype,"_sliderValue",void 0),ge([le()],me.prototype,"_dragging",void 0),ge([function(e){return(t,i)=>{const s="function"==typeof t?t:t[i];Object.assign(s,e)}}({passive:!0})],me.prototype,"_handleSliderStart",null),me=ge([re("custom-slider")],me);var fe=function(e,t,i,s){for(var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let ye=class extends se{constructor(){super(...arguments),this.min=0,this.max=32,this.step=1,this.value=0,this.unit="A",this.disabled=!1,this.label="Charge Rate"}_formatValue(e){return this.step<1?e.toFixed(1):e.toFixed(0)}render(){return W`
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
                    @value-preview=${e=>this.value=e.detail.value}
                    @value-changed=${e=>{this.value=e.detail.value,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:this.value},bubbles:!0,composed:!0}))}}
                ></custom-slider>
            </div>
        `}};ye.styles=r`
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
    `,fe([ce({type:Number})],ye.prototype,"min",void 0),fe([ce({type:Number})],ye.prototype,"max",void 0),fe([ce({type:Number})],ye.prototype,"step",void 0),fe([ce({type:Number})],ye.prototype,"value",void 0),fe([ce({type:String})],ye.prototype,"unit",void 0),fe([ce({type:Boolean,reflect:!0})],ye.prototype,"disabled",void 0),fe([ce({type:String})],ye.prototype,"label",void 0),ye=fe([re("evse-slider")],ye);var _e=function(e,t,i,s){for(var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let be=class extends se{constructor(){super(),this.feat_soc=!1,this.feat_range=!1,this.energy_max_value=100,this.range_max_value=600,this.range_unit="km",this.language="en",this._showLimitForm=!1,this._selectedLimitType="time",this._hours=void 0,this._minutes=void 0,this._value=0}static get styles(){return r`
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
            ha-dialog {
                /* Prevent dialog from overlapping app header */
                --dialog-surface-position: static;
                --dialog-z-index: 5;
            }
             .dialog-content {
                padding: 16px 16px 8px 16px; 
                box-sizing: border-box;
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
            .form-row {
                display: flex;
                flex-direction: column;
                margin-bottom: 25px;
                align-self: center;
                align-items: center;
                justify-content: center;
                text-align: center;
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
                width: 250px;
            }
            .time-input {
                flex: 1;
                justify-content: center;
                align-items: center;
                text-align: center;
            }
            .time-input input {
                width: 70%;
             
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
            .slider-input {
                width: 80%;
            }
            .slider-value {
                text-align: center;
                font-size: 16px;
                font-weight: 500;
                margin-bottom: 0px;
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
        `}_openDialog(){this._showLimitForm=!0,this._selectedLimitType="time",this._hours=void 0,this._minutes=void 0,this._value=0,this.requestUpdate()}_closeDialog(){this._showLimitForm=!1,this.requestUpdate()}_handleTypeChange(e){const t=e.target;this._selectedLimitType=t.value,this._value=0,this.requestUpdate()}_handleHoursChange(e){const t=e.target.value;this._hours=""===t?void 0:parseInt(t,10),this.requestUpdate()}_handleMinutesChange(e){const t=e.target.value;this._minutes=""===t?void 0:parseInt(t,10),this.requestUpdate()}_handleValueChange(e){const t=e.target,i=parseInt(t.value)||0;"energy"===this._selectedLimitType?this._value=1e3*i:this._value=i,this.requestUpdate()}_handleSliderChange(e){const t=e.detail.value;"energy"===this._selectedLimitType?this._value=Math.round(1e3*t):this._value=t,this.requestUpdate()}_formatValue(e,t){if("energy"===t){return`${Math.round(e/1e3)} kWh`}return"soc"===t?`${e}%`:"range"===t?`${e} ${this.range_unit}`:String(e)}_addLimit(){if("time"===this._selectedLimitType){const e=60*(this._hours??0)+(this._minutes??0);e>0&&this.setLimit&&this.setLimit("time",e)}else["energy","soc","range"].includes(this._selectedLimitType)&&this._value>0&&this.setLimit&&this.setLimit(this._selectedLimitType,this._value);this._showLimitForm=!1}_removeLimit(){this.delLimit&&this.delLimit()}_isAddButtonDisabled(){if("time"===this._selectedLimitType){const e=this._hours??0,t=this._minutes??0;return 0===e&&0===t}return!["energy","soc","range"].includes(this._selectedLimitType)||0===this._value}_formatTimeValue(e){return[Math.floor(e/60),e%60,0].map((e=>String(e).padStart(2,"0"))).join(":")}render(){return W`
            <div class="limit-container">
                ${this.limit&&this.limit.type?W`
                      <div class="limit-badge">
                          <ha-icon
                              icon="${"time"===this.limit.type?"mdi:clock":"range"===this.limit.type?"mdi:map-marker-distance":"soc"===this.limit.type?"mdi:battery-medium":"mdi:lightning-bolt"}"
                          ></ha-icon>
                          <span class="limit-type">
                              ${"time"===this.limit.type?ue("time",this.language)+": ":"energy"===this.limit.type?ue("energy",this.language)+": ":"range"===this.limit.type?ue("range",this.language)+": ":"soc"===this.limit.type?ue("battery",this.language)+": ":q}
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
                  `:W`
                      <button class="new-limit-btn" @click=${this._openDialog}>
                          <ha-icon icon="mdi:plus"></ha-icon>
                          ${ue("new limit",this.language)}
                      </button>
                  `}
            </div>

            <!-- Dialog is always rendered, visibility controlled by ?open -->
            <ha-dialog
                ?open=${this._showLimitForm}
                @closed=${this._closeDialog}
                .heading=${ue("add charging limit",this.language)}
            >
                <div class="dialog-content">
                    <div class="form-row">
                        <div class="select">
                            <ha-select
                                @selected=${this._handleTypeChange}
                                @closed=${e=>e.stopPropagation()}
                                fixedMenuPosition
                                naturalMenuWidth="false"
                                .value=${this._selectedLimitType}
                            >
                                <ha-list-item value=${"time"}
                                    >${ue("time",this.language)}</ha-list-item
                                >
                                <ha-list-item value=${"energy"}
                                    >${ue("energy",this.language)}</ha-list-item
                                >
                                ${this.feat_soc?W`
                                          <ha-list-item value=${"soc"}
                                              >${ue("battery",this.language)}</ha-list-item
                                          >
                                      `:q}
                                ${this.feat_range?W`
                                          <ha-list-item value=${"range"}
                                              >${ue("range",this.language)}</ha-list-item
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
                                    .label=${ue("hours",this.language)}
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
                                    .label=${ue("minutes",this.language)}
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
                        <div class="slider-input">
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
                    </div>
                    `:q}
                </div> 
                <mwc-button
                    slot="secondaryAction"
                    @click=${this._closeDialog}
                >
                        ${ue("cancel",this.language)}
                </mwc-button>
                <mwc-button
                    slot="primaryAction"
                    @click=${this._addLimit}
                    .disabled=${this._isAddButtonDisabled()}
                >
                    ${ue("add limit",this.language)}
                </mwc-button>
            </ha-dialog>
        `}};_e([ce({attribute:!1})],be.prototype,"limit",void 0),_e([ce({attribute:!1})],be.prototype,"setLimit",void 0),_e([ce({attribute:!1})],be.prototype,"delLimit",void 0),_e([ce({type:Boolean})],be.prototype,"feat_soc",void 0),_e([ce({type:Boolean})],be.prototype,"feat_range",void 0),_e([ce({type:Number})],be.prototype,"energy_max_value",void 0),_e([ce({type:Number})],be.prototype,"range_max_value",void 0),_e([ce({type:String})],be.prototype,"range_unit",void 0),_e([ce({type:String})],be.prototype,"language",void 0),_e([le()],be.prototype,"_showLimitForm",void 0),_e([le()],be.prototype,"_selectedLimitType",void 0),_e([le()],be.prototype,"_hours",void 0),_e([le()],be.prototype,"_minutes",void 0),_e([le()],be.prototype,"_value",void 0),be=_e([re("limit-component")],be);var we=function(e,t,i,s){for(var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let xe=class extends se{constructor(){super(),this.label="",this.value=0,this.unit="",this.max_value=100,this.icon=""}static get styles(){return r`
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
        `}render(){const e=this.max_value>0?100*this.value/this.max_value:0;return W`
            <div class="container">
                <div class="label">
                    ${this.icon?W`<ha-icon class="icon" icon=${this.icon}>
                          </ha-icon>`:""}
                    ${this.label?this.label:""}
                </div>
                <div class="progress">
                    <div
                        class="progress-fill"
                        style="width: ${e}%"
                    ></div>
                    <div class="value">${this.value}${this.unit}</div>
                </div>
            </div>
        `}};we([ce({type:String})],xe.prototype,"label",void 0),we([ce({type:Number})],xe.prototype,"value",void 0),we([ce({type:String})],xe.prototype,"unit",void 0),we([ce({type:Number})],xe.prototype,"max_value",void 0),we([ce({type:String})],xe.prototype,"icon",void 0),xe=we([re("progress-bar")],xe);var $e=function(e,t,i,s){for(var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let Ee=class extends se{static get styles(){return he}_wifiIcon(e){return e>=-65?"mdi:wifi-strength-4":-65>e&&e>=-70?"mdi:wifi-strength-3":-70>e&&e>=-75?"mdi:wifi-strength-2":-75>e&&e>=-80?"mdi:wifi-strength-1":"mdi:wifi-strength-alert-outline"}_handleIconClick(e){const t=this.config?.[e];this.showMoreInfoHandler&&"string"==typeof t&&t&&this.showMoreInfoHandler(t)}render(){if(!this.hass||!this.config)return W``;const e=Number(this.wifiSignalEntity?.state),t=this.statusEntity?.state,i=this.vehicleConnectedEntity?.state,s=this.chargingStatusEntity?.state;return W`
            <div class="status-icons">
                ${this.wifiSignalEntity?W`
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
        `}};$e([ce({attribute:!1})],Ee.prototype,"hass",void 0),$e([ce({attribute:!1})],Ee.prototype,"config",void 0),$e([ce({attribute:!1})],Ee.prototype,"wifiSignalEntity",void 0),$e([ce({attribute:!1})],Ee.prototype,"statusEntity",void 0),$e([ce({attribute:!1})],Ee.prototype,"vehicleConnectedEntity",void 0),$e([ce({attribute:!1})],Ee.prototype,"chargingStatusEntity",void 0),$e([ce({attribute:!1})],Ee.prototype,"showMoreInfoHandler",void 0),Ee=$e([re("status-icons")],Ee);var Se=function(e,t,i,s){for(var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let ke=class extends se{static get styles(){return he}render(){const e=this.chargingStatusEntity?.state,t=this.statusEntity?.state;return W`
            <div class="status-heading">
                <div class="status-badge ${"error"===e?"badge-error":"disabled"===t?"badge-disabled":"charging"===e?"badge-charging":"badge-active"}">
                    ${ue(e||"",this.language)}
                </div>
            </div>
        `}};Se([ce({attribute:!1})],ke.prototype,"statusEntity",void 0),Se([ce({attribute:!1})],ke.prototype,"chargingStatusEntity",void 0),Se([ce({attribute:!1})],ke.prototype,"language",void 0),ke=Se([re("status-heading")],ke);var Ce=function(e,t,i,s){for(var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let Ae=class extends se{constructor(){super(...arguments),this.localTimeElapsed=0}static get styles(){return he}_handleItemClick(e){const t=this.config?.[e];this.showMoreInfoHandler&&"string"==typeof t&&t&&this.showMoreInfoHandler(t)}render(){return this.hass&&this.config&&this.convertTimeHandler?W`
            <div class="grid-container">
                ${this.powerEntity?W`
                          <div class="grid-item">
                              <div class="grid-item-label">
                                  ${ue("power",this.language)}
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
                              ${ue("power",this.language)}
                          </div>
                          <div class="grid-item-value">0 W</div>
                      </div>`}
                ${this.currentEntity?W`
                          <div class="grid-item">
                              <div class="grid-item-label">
                                  ${ue("current",this.language)}
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
                              ${ue("current",this.language)}
                          </div>
                          <div class="grid-item-value">0 A</div>
                      </div>`}
                ${this.sessionEnergyEntity?W`
                              <div class="grid-item">
                                  <div class="grid-item-label">
                                      ${ue("session",this.language)}
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
                                      ${ue("session",this.language)}
                                  </div>
                                  <div class="grid-item-value">0 kWh</div>
                              </div>
                          `}
                ${this.timeElapsedEntity?W`
                          <div class="grid-item">
                              <div class="grid-item-label">
                                  ${ue("elapsed",this.language)}
                              </div>
                              <div class="grid-item-value">
                                  ${this.convertTimeHandler(this.localTimeElapsed||0)}
                              </div>
                          </div>
                      `:W` <div class="grid-item">
                          <div class="grid-item-label">
                              ${ue("elapsed",this.language)}
                          </div>
                          <div class="grid-item-value">00:00:00</div>
                      </div>`}
            </div>
        `:W``}};Ce([ce({attribute:!1})],Ae.prototype,"hass",void 0),Ce([ce({attribute:!1})],Ae.prototype,"config",void 0),Ce([ce({attribute:!1})],Ae.prototype,"powerEntity",void 0),Ce([ce({attribute:!1})],Ae.prototype,"currentEntity",void 0),Ce([ce({attribute:!1})],Ae.prototype,"sessionEnergyEntity",void 0),Ce([ce({attribute:!1})],Ae.prototype,"timeElapsedEntity",void 0),Ce([ce({type:Number})],Ae.prototype,"localTimeElapsed",void 0),Ce([ce({type:String})],Ae.prototype,"language",void 0),Ce([ce({attribute:!1})],Ae.prototype,"showMoreInfoHandler",void 0),Ce([ce({attribute:!1})],Ae.prototype,"convertTimeHandler",void 0),Ae=Ce([re("info-grid")],Ae);var Me=function(e,t,i,s){for(var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let Oe=class extends se{static get styles(){return he}render(){if(!this.config)return W``;const e=this.config.feat_soc&&this.vehicleBatteryLevelEntity,t=this.config.feat_range&&this.vehicleRangeEntity;return e||t?W`
            <div class="vehicle">
                ${e?W`
                          <progress-bar
                              value=${Number(this.vehicleBatteryLevelEntity?.state)}
                              unit="%"
                              icon="mdi:battery-medium"
                          ></progress-bar>
                      `:""}
                ${t?W`
                          <progress-bar
                              value=${Number(this.vehicleRangeEntity?.state)}
                              max_value=${this.config?.feat_max_range||600}
                              unit=${this.vehicleRangeEntity?.attributes.unit_of_measurement||q}
                              icon="mdi:map-marker-distance"
                          ></progress-bar>
                      `:""}
            </div>
        `:W``}};Me([ce({attribute:!1})],Oe.prototype,"config",void 0),Me([ce({attribute:!1})],Oe.prototype,"vehicleBatteryLevelEntity",void 0),Me([ce({attribute:!1})],Oe.prototype,"vehicleRangeEntity",void 0),Oe=Me([re("vehicle-info")],Oe);var je=function(e,t,i,s){for(var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let ze=class extends se{static get styles(){return he}_handleButtonClick(e){const t=this.config?.override_entity;this.selectOverrideStateHandler&&"string"==typeof t&&t&&this.selectOverrideStateHandler(t,e)}render(){if(!this.config||!this.overrideEntity)return W``;const e=this.overrideEntity?.state,t=this.chargingStatusEntity?.state;return W`
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
        `}};je([ce({attribute:!1})],ze.prototype,"config",void 0),je([ce({attribute:!1})],ze.prototype,"overrideEntity",void 0),je([ce({attribute:!1})],ze.prototype,"chargingStatusEntity",void 0),je([ce({attribute:!1})],ze.prototype,"selectOverrideStateHandler",void 0),ze=je([re("override-controls")],ze);var Te=function(e,t,i,s){for(var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let Le=class extends se{constructor(){super(...arguments),this.entities=[]}static get styles(){return he}_handleEntityClick(e){this.showMoreInfoHandler&&e&&this.showMoreInfoHandler(e)}render(){return this.hass&&this.entities&&0!==this.entities.length?W`
            ${this.entities.map((e=>W`
                    <div class="other-entities-container">
                        <div class="entity-row">
                            <div class="entity-title">
                                ${null!=e.icon?W`
                                          <div class="entity-icon">
                                              <ha-icon
                                                  icon=${e.icon}
                                              ></ha-icon>
                                          </div>
                                      `:W`<div class="entity-icon"></div>`}
                                <div class="entity-label">
                                    ${e.name||e.id||q}
                                </div>
                            </div>
                            <div
                                class="entity-value clickable"
                                @click=${()=>this._handleEntityClick(e.id)}
                            >
                                ${e.value??""}
                                <!-- Display the value again -->
                            </div>
                        </div>
                    </div>
                `))}
        `:W``}};Te([ce({attribute:!1})],Le.prototype,"hass",void 0),Te([ce({attribute:!1})],Le.prototype,"entities",void 0),Te([ce({attribute:!1})],Le.prototype,"showMoreInfoHandler",void 0),Le=Te([re("optional-entities")],Le);var Pe=function(e,t,i,s){for(var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};const Ve=["ha-form","ha-icon","ha-icon-button","ha-selector","ha-textfield","ha-icon-picker","ha-icon-button","ha-entity-picker","ha-select","ha-dialog","ha-sortable","ha-svg-icon","ha-alert","mwc-button"];class Ne extends se{constructor(){super(),this._localTimeElapsed=0,this._lastEntityTime=0,this._timeUpdateInterval=null,this._isCharging=!1,this._limit=null,this._hasLimit=!1,this._integrationVersionOk=void 0,this._showMoreInfo=this._showMoreInfo.bind(this),this._convertTime=this._convertTime.bind(this),this._selectOverrideState=this._selectOverrideState.bind(this),this._setLimit=this._setLimit.bind(this),this._delLimit=this._delLimit.bind(this)}disconnectedCallback(){super.disconnectedCallback(),this._timeUpdateInterval&&(clearInterval(this._timeUpdateInterval),this._timeUpdateInterval=null)}async firstUpdated(){try{await(async e=>{const t=e||ve;try{if(t.every((e=>customElements.get(e))))return;await Promise.race([customElements.whenDefined("partial-panel-resolver"),new Promise(((e,t)=>setTimeout((()=>t(new Error("Timeout waiting for partial-panel-resolver"))),1e4)))]);const e=document.createElement("partial-panel-resolver");if(!e)throw new Error("Failed to create partial-panel-resolver element");if(e.hass={panels:[{url_path:"tmp",component_name:"config"}]},"function"!=typeof e._updateRoutes)throw new Error("partial-panel-resolver does not have _updateRoutes method");if(e._updateRoutes(),!e.routerOptions?.routes?.tmp?.load)throw new Error("Failed to create tmp route in partial-panel-resolver");await Promise.race([e.routerOptions.routes.tmp.load(),new Promise(((e,t)=>setTimeout((()=>t(new Error("Timeout loading tmp route"))),1e4)))]),await Promise.race([customElements.whenDefined("ha-panel-config"),new Promise(((e,t)=>setTimeout((()=>t(new Error("Timeout waiting for ha-panel-config"))),1e4)))]);const i=document.createElement("ha-panel-config");if(!i)throw new Error("Failed to create ha-panel-config element");if(!i.routerOptions?.routes?.automation?.load)throw new Error("ha-panel-config does not have automation route");await Promise.race([i.routerOptions.routes.automation.load(),new Promise(((e,t)=>setTimeout((()=>t(new Error("Timeout loading automation components"))),1e4)))]);const s=t.filter((e=>!customElements.get(e)));if(s.length>0)throw new Error(`Failed to load components: ${s.join(", ")}`)}catch(e){console.error("Error loading Home Assistant form components:",e);try{if(window.customElements&&window.customElements.get("home-assistant")){console.log("Attempting fallback loading method for HA components");const e=new CustomEvent("ha-request-load-components",{detail:{components:t},bubbles:!0,composed:!0});document.dispatchEvent(e)}}catch(e){console.error("Fallback loading method failed:",e)}}})(Ve)}catch(e){console.error("Error loading ha-components:",e)}if(this._lang=this.hass?.language||"en",this.hass)try{const e=await(async e=>{try{return(await e.callWS({type:"manifest/get",integration:"openevse"})).version}catch(e){return console.error("Error fetching OpenEVSE integration manifest:",e),"0"}})(this.hass);if("0"===e)console.warn("OpenEVSE integration not found or version could not be determined."),this._integrationVersionOk=!1;else{const t=((e,t)=>{const i=e.split(".").map(Number),s=t.split(".").map(Number);for(let e=0;e<Math.max(i.length,s.length);e++){const t=i[e]||0,n=s[e]||0;if(t>n)return 1;if(t<n)return-1}return 0})(e,pe);this._integrationVersionOk=t>=0,this._integrationVersionOk||console.warn(`OpenEVSE integration version ${e} is below the required minimum ${pe}.`)}}catch(e){console.error("Error checking OpenEVSE integration version:",e),this._integrationVersionOk=!1}else console.warn("Hass object not available during firstUpdated for version check."),this._integrationVersionOk=!1}getGridOptions(){return{columns:12,max_columns:12,min_columns:9}}_setupTimeInterval(){this._timeUpdateInterval&&(clearInterval(this._timeUpdateInterval),this._timeUpdateInterval=null),this._isCharging&&(this._timeUpdateInterval=window.setInterval((()=>{this._localTimeElapsed+=1/60}),1e3))}updated(e){if(e.has("hass")&&this.hass){if(this._lang=this.hass.language||"en",this.config&&this.config.charging_status_entity&&this.hass.states[this.config.charging_status_entity]){const e="charging"===this.hass.states[this.config.charging_status_entity].state;e!==this._isCharging&&(this._isCharging=e,this._setupTimeInterval())}if(this.config&&this.config.time_elapsed_entity&&this.hass.states[this.config.time_elapsed_entity]){const e=this.hass.states[this.config.time_elapsed_entity],t=parseFloat(e.state);isNaN(t)||t===this._lastEntityTime||(this._lastEntityTime=t,this._localTimeElapsed=t)}if(this.config&&this.config.limit_active_entity&&this.hass.states[this.config.limit_active_entity]){const e="on"===this.hass.states[this.config.limit_active_entity].state;e!=this._hasLimit&&(this._hasLimit=e,this.config.device_id&&this._getLimit().then((e=>{this._limit=e})))}}if(e.has("config")&&!e.has("hass")&&this.config&&this.hass){if(this.config.charging_status_entity&&this.hass.states[this.config.charging_status_entity]){const e=this.hass.states[this.config.charging_status_entity];this._isCharging="charging"===e.state}if(this.config.time_elapsed_entity&&this.hass.states[this.config.time_elapsed_entity]){const e=this.hass.states[this.config.time_elapsed_entity];e&&(this._lastEntityTime=parseFloat(e.state),this._localTimeElapsed=this._lastEntityTime,this._isCharging&&this._setupTimeInterval())}}}static getConfigElement(){return document.createElement("openevse-card-editor")}static getStubConfig(){return{header:!0,name:"OpenEVSE",feat_soc:!1,feat_range:!1,feat_max_range:600,feat_max_energy:100,device_id:"",override_entity:"",status_entity:"",power_entity:"",current_entity:"",charge_rate_entity:"",vehicle_connected_entity:"",charging_status_entity:"",session_energy_entity:"",time_elapsed_entity:"",wifi_signal_strength_entity:"",limit_active_entity:"",divert_active_entity:"",divert_mode_entity:"",pv_charge_rate_entity:"",vehicle_battery_level_entity:"",vehicle_range_entity:"",optional_entities:[]}}static get styles(){return he}setConfig(e){this.config=e}getCardSize(){return 3}_selectOverrideState(e,t){this.hass&&this.hass.callService("select","select_option",{entity_id:e,option:t.toString()})}async _getLimit(){if(!this.hass)return null;try{const e=await this.hass.callService("openevse","get_limit",{device_id:this.config?.device_id},void 0,!1,!0);return e?.response?e.response:null}catch(e){return console.error("Error while getting limit",e),null}}_setLimit(e,t){if(this.hass)try{return void this.hass.callService("openevse","set_limit",{device_id:this.config?.device_id,type:e,value:t,auto_release:!0},void 0,!1,!1)}catch(e){return void console.error("Error while setting limit",e)}}_delLimit(){if(this.hass)try{return void this.hass.callService("openevse","clear_limit",{device_id:this.config?.device_id},void 0,!1,!1)}catch(e){return void console.error("Error while removing limit",e)}}_showMoreInfo(e){const t=new Event("hass-more-info",{bubbles:!0,composed:!0});t.detail={entityId:e},this.dispatchEvent(t)}_getEntityState(e){const t=this.config?.[e];return"string"==typeof t&&t&&this.hass?.states&&this.hass.states[t]||null}_convertSeconds(e){if(isNaN(e)||e<0||null==e)return"--:--:--";return[Math.floor(e/3600),Math.floor(e%3600/60),Math.floor(e%60)].map((e=>String(e).padStart(2,"0"))).join(":")}_convertTime(e){if(isNaN(e)||e<0)return"00:00:00";const t=Math.round(60*e);return this._convertSeconds(t)}_updateSlider(e){this.hass&&this.config?.charge_rate_entity&&this.hass.callService("number","set_value",{entity_id:this.config.charge_rate_entity,value:e.detail.value})}render(){if(!this.hass||!this.config)return W``;const e=this._getEntityState("override_entity"),t=this._getEntityState("status_entity"),i=this._getEntityState("power_entity"),s=this._getEntityState("current_entity"),n=this._getEntityState("charge_rate_entity"),r=this._getEntityState("vehicle_connected_entity"),o=this._getEntityState("charging_status_entity"),a=this._getEntityState("session_energy_entity"),c=this._getEntityState("time_elapsed_entity"),l=this._getEntityState("wifi_signal_strength_entity"),h=this._getEntityState("divert_active_entity"),d=this._getEntityState("divert_mode_entity"),u=this._getEntityState("pv_charge_rate_entity"),v=this._getEntityState("vehicle_battery_level_entity"),p=this._getEntityState("vehicle_range_entity"),g=(()=>this.config?.optional_entities?.map((e=>{let t,i=null;if("string"==typeof e)t=e;else if("object"==typeof e&&null!==e){const s=e.entity,n=e.id;t=s??n,i=e}if(!t||"string"!=typeof t)return{name:"Invalid Config",value:null,icon:void 0,id:void 0};const s=this.hass?.states[t],n=s?.attributes,r=n?.friendly_name,o=n?.icon;return{name:i?.name??r??t,value:s?this.hass?.formatEntityState(s)??null:null,icon:i?.icon??o,id:t}}))?.filter((e=>void 0!==e.id))??[])();return W`
            <ha-card>
                ${!1===this._integrationVersionOk?W`
                          <ha-alert
                              alert-type="warning"
                              title="${ue("warning",this._lang)}"
                          >
                              ${ue("integration_missing_or_outdated",this._lang).replace("{min_version}",pe)}
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
                            .wifiSignalEntity=${l}
                            .statusEntity=${t}
                            .vehicleConnectedEntity=${r}
                            .chargingStatusEntity=${o}
                            .showMoreInfoHandler=${this._showMoreInfo}
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
                        .showMoreInfoHandler=${this._showMoreInfo}
                        .convertTimeHandler=${this._convertTime}
                    ></info-grid>
                    <vehicle-info
                        .config=${this.config}
                        .vehicleBatteryLevelEntity=${v}
                        .vehicleRangeEntity=${p}
                    ></vehicle-info>

                    <override-controls
                        .config=${this.config}
                        .overrideEntity=${e}
                        .chargingStatusEntity=${o}
                        .selectOverrideStateHandler=${this._selectOverrideState}
                    ></override-controls>
                    <div class="container">
                        <evse-slider
                            .min=${"number"==typeof n?.attributes.min?n.attributes.min:0}
                            .max=${"number"==typeof n?.attributes.max?n.attributes.max:32}
                            .step=${"number"==typeof n?.attributes.step?n.attributes.step:1}
                            .value=${Number("on"==h?.state&&"eco"==d?.state?u?.state:n?.state||0)}
                            .unit=${"string"==typeof n?.attributes.unit_of_measurement?n.attributes.unit_of_measurement:"A"}
                            .label=${ue("charge rate",this._lang)}
                            .disabled=${!n||"on"==h?.state&&"eco"==d?.state}
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
                                      .range_unit=${String(p?.attributes.unit_of_measurement||"")}
                                      .language=${this._lang}
                                  ></limit-component>
                              </div>
                          `:q}

                    <!-- End of Limit -->
                    <optional-entities
                        .hass=${this.hass}
                        .entities=${g}
                        .showMoreInfoHandler=${this._showMoreInfo}
                    ></optional-entities>
                </div>
            </ha-card>
        `}}Pe([ce({attribute:!1})],Ne.prototype,"hass",void 0),Pe([ce({attribute:!1})],Ne.prototype,"config",void 0),Pe([le()],Ne.prototype,"_lang",void 0),Pe([le()],Ne.prototype,"_localTimeElapsed",void 0),Pe([le()],Ne.prototype,"_lastEntityTime",void 0),Pe([le()],Ne.prototype,"_timeUpdateInterval",void 0),Pe([le()],Ne.prototype,"_isCharging",void 0),Pe([le()],Ne.prototype,"_limit",void 0),Pe([le()],Ne.prototype,"_hasLimit",void 0),Pe([le()],Ne.prototype,"_integrationVersionOk",void 0);var He=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function Ie(e,t){if(e.length!==t.length)return!1;for(var i=0;i<e.length;i++)if(s=e[i],n=t[i],!(s===n||He(s)&&He(n)))return!1;var s,n;return!0}function Ue(e,t){void 0===t&&(t=Ie);var i=null;function s(){for(var s=[],n=0;n<arguments.length;n++)s[n]=arguments[n];if(i&&i.lastThis===this&&t(s,i.lastArgs))return i.lastResult;var r=e.apply(this,s);return i={lastResult:r,lastArgs:s,lastThis:this},r}return s.clear=function(){i=null},s}function We(e,t,i,s,n,r={},o="en"){return{name:e,selector:{entity:{domain:t,include_entities:(Array.isArray(t)?t:[t]).flatMap((e=>r[e]||[]))}},label:ue(i,o),helper_text:ue(s,o),required:n}}const Re=Ue(((e={},t="en")=>[...[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}},required:!1,label:ue("header title",t)},{name:"header",selector:{boolean:{}},label:ue("display header",t)}]},{type:"grid",name:"",label:ue("features",t),schema:[{name:"feat_soc",selector:{boolean:{}},label:ue("enable vehicle battery",t)},{name:"feat_range",selector:{boolean:{}},label:ue("enable vehicle range",t)}]},{type:"grid",name:"",label:ue("limits settings",t),schema:[{name:"feat_max_energy",selector:{number:{}},required:!1,label:ue("maximum charge energy",t)},{name:"feat_max_range",selector:{number:{}},required:!1,label:ue("maximum vehicle range",t)}]},{name:"device_id",selector:{device:{integration:"openevse",manufacturer:"OpenEVSE"}},label:ue("openevse device",t),helper_text:ue("select your openevse device",t),required:!0}],...[We("override_entity",["input_select","select"],"override state","select openevse.override_state entity",!0,e,t),We("status_entity","sensor","station status","select openevse.station_status entity",!0,e,t),We("power_entity","sensor","current power usage","select openevse.current_power_usage entity",!0,e,t),We("current_entity","sensor","charging current","select openevse.charging_current entity",!0,e,t),We("vehicle_connected_entity","binary_sensor","vehicle connected","select openevse.vehicle_connected entity",!0,e,t),We("charging_status_entity","sensor","charging status","select openevse.charging_status entity",!0,e,t),We("charge_rate_entity","number","charge rate","select openevse.charge_rate entity",!0,e,t),We("session_energy_entity","sensor","session energy","select openevse.usage_this_session entity",!0,e,t),We("time_elapsed_entity","sensor","charge time elapsed","select openevse.charge_time_elapsed entity",!0,e,t),We("wifi_signal_strength_entity","sensor","wifi signal","select openevse_wifi_signal_strength entity",!1,e,t),We("limit_active_entity","binary_sensor","limit active","select openevse_limit_active entity",!1,e,t),We("divert_active_entity","binary_sensor","divert active","select openevse_divert_active entity",!1,e,t),We("divert_mode_entity","binary_sensor","divert mode","select openevse_divert_mode",!1,e,t),We("pv_charge_rate_entity","sensor","Divert pv charge rate","select openevse_pv_charge_rate entity",!1,e,t),We("vehicle_range_entity","sensor","vehicle range","select openevse_vehicle_range entity",!1,e,t),We("vehicle_battery_level_entity","sensor","battery level","select openevse_vehicle_battery_level entity",!1,e,t)]]));Ue(((e={},t="en")=>[{name:"id",selector:{entity:{domain:["sensor","binary_sensor"],include_entities:[...e.sensor||[],...e.binary_sensor||[]]}},label:ue("entity",t)},{name:"name",selector:{text:{}},label:ue("name",t)},{name:"icon",selector:{icon:{}},label:ue("icon",t)}]));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const qe=globalThis,De=qe.ShadowRoot&&(void 0===qe.ShadyCSS||qe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fe=Symbol(),Be=new WeakMap;let Ze=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Fe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(De&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=Be.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Be.set(t,e))}return e}toString(){return this.cssText}};const Ge=De?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new Ze("string"==typeof e?e:e+"",void 0,Fe))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:Ke,defineProperty:Je,getOwnPropertyDescriptor:Qe,getOwnPropertyNames:Xe,getOwnPropertySymbols:Ye,getPrototypeOf:et}=Object,tt=globalThis,it=tt.trustedTypes,st=it?it.emptyScript:"",nt=tt.reactiveElementPolyfillSupport,rt=(e,t)=>e,ot={toAttribute(e,t){switch(t){case Boolean:e=e?st:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},at=(e,t)=>!Ke(e,t),ct={attribute:!0,type:String,converter:ot,reflect:!1,hasChanged:at};Symbol.metadata??=Symbol("metadata"),tt.litPropertyMetadata??=new WeakMap;class lt extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ct){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Je(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=Qe(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return s?.call(this)},set(t){const r=s?.call(this);n.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ct}static _$Ei(){if(this.hasOwnProperty(rt("elementProperties")))return;const e=et(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(rt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(rt("properties"))){const e=this.properties,t=[...Xe(e),...Ye(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(Ge(e))}else void 0!==e&&t.push(Ge(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(De)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const i of t){const t=document.createElement("style"),s=qe.litNonce;void 0!==s&&t.setAttribute("nonce",s),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:ot).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=i.getPropertyOptions(s),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:ot;this._$Em=s,this[s]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??at)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}lt.elementStyles=[],lt.shadowRootOptions={mode:"open"},lt[rt("elementProperties")]=new Map,lt[rt("finalized")]=new Map,nt?.({ReactiveElement:lt}),(tt.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht=globalThis,dt=ht.trustedTypes,ut=dt?dt.createPolicy("lit-html",{createHTML:e=>e}):void 0,vt="$lit$",pt=`lit$${Math.random().toFixed(9).slice(2)}$`,gt="?"+pt,mt=`<${gt}>`,ft=document,yt=()=>ft.createComment(""),_t=e=>null===e||"object"!=typeof e&&"function"!=typeof e,bt=Array.isArray,wt="[ \t\n\f\r]",xt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$t=/-->/g,Et=/>/g,St=RegExp(`>|${wt}(?:([^\\s"'>=/]+)(${wt}*=${wt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),kt=/'/g,Ct=/"/g,At=/^(?:script|style|textarea|title)$/i,Mt=(e,...t)=>({_$litType$:1,strings:e,values:t}),Ot=Symbol.for("lit-noChange"),jt=Symbol.for("lit-nothing"),zt=new WeakMap,Tt=ft.createTreeWalker(ft,129);function Lt(e,t){if(!bt(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ut?ut.createHTML(t):t}class Pt{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,r=0;const o=e.length-1,a=this.parts,[c,l]=((e,t)=>{const i=e.length-1,s=[];let n,r=2===t?"<svg>":3===t?"<math>":"",o=xt;for(let t=0;t<i;t++){const i=e[t];let a,c,l=-1,h=0;for(;h<i.length&&(o.lastIndex=h,c=o.exec(i),null!==c);)h=o.lastIndex,o===xt?"!--"===c[1]?o=$t:void 0!==c[1]?o=Et:void 0!==c[2]?(At.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=St):void 0!==c[3]&&(o=St):o===St?">"===c[0]?(o=n??xt,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?St:'"'===c[3]?Ct:kt):o===Ct||o===kt?o=St:o===$t||o===Et?o=xt:(o=St,n=void 0);const d=o===St&&e[t+1].startsWith("/>")?" ":"";r+=o===xt?i+mt:l>=0?(s.push(a),i.slice(0,l)+vt+i.slice(l)+pt+d):i+pt+(-2===l?t:d)}return[Lt(e,r+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]})(e,t);if(this.el=Pt.createElement(c,i),Tt.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=Tt.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(vt)){const t=l[r++],i=s.getAttribute(e).split(pt),o=/([.?@])?(.*)/.exec(t);a.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?Ut:"?"===o[1]?Wt:"@"===o[1]?Rt:It}),s.removeAttribute(e)}else e.startsWith(pt)&&(a.push({type:6,index:n}),s.removeAttribute(e));if(At.test(s.tagName)){const e=s.textContent.split(pt),t=e.length-1;if(t>0){s.textContent=dt?dt.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],yt()),Tt.nextNode(),a.push({type:2,index:++n});s.append(e[t],yt())}}}else if(8===s.nodeType)if(s.data===gt)a.push({type:2,index:n});else{let e=-1;for(;-1!==(e=s.data.indexOf(pt,e+1));)a.push({type:7,index:n}),e+=pt.length-1}n++}}static createElement(e,t){const i=ft.createElement("template");return i.innerHTML=e,i}}function Vt(e,t,i=e,s){if(t===Ot)return t;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const r=_t(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(t=Vt(e,n._$AS(e,t.values),n,s)),t}let Nt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??ft).importNode(t,!0);Tt.currentNode=s;let n=Tt.nextNode(),r=0,o=0,a=i[0];for(;void 0!==a;){if(r===a.index){let t;2===a.type?t=new Ht(n,n.nextSibling,this,e):1===a.type?t=new a.ctor(n,a.name,a.strings,this,e):6===a.type&&(t=new qt(n,this,e)),this._$AV.push(t),a=i[++o]}r!==a?.index&&(n=Tt.nextNode(),r++)}return Tt.currentNode=ft,s}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}};class Ht{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=jt,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Vt(this,e,t),_t(e)?e===jt||null==e||""===e?(this._$AH!==jt&&this._$AR(),this._$AH=jt):e!==this._$AH&&e!==Ot&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>bt(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==jt&&_t(this._$AH)?this._$AA.nextSibling.data=e:this.T(ft.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,s="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Pt.createElement(Lt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new Nt(s,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=zt.get(e.strings);return void 0===t&&zt.set(e.strings,t=new Pt(e)),t}k(e){bt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new Ht(this.O(yt()),this.O(yt()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class It{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=jt,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=jt}_$AI(e,t=this,i,s){const n=this.strings;let r=!1;if(void 0===n)e=Vt(this,e,t,0),r=!_t(e)||e!==this._$AH&&e!==Ot,r&&(this._$AH=e);else{const s=e;let o,a;for(e=n[0],o=0;o<n.length-1;o++)a=Vt(this,s[i+o],t,o),a===Ot&&(a=this._$AH[o]),r||=!_t(a)||a!==this._$AH[o],a===jt?e=jt:e!==jt&&(e+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!s&&this.j(e)}j(e){e===jt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ut extends It{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===jt?void 0:e}}class Wt extends It{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==jt)}}class Rt extends It{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=Vt(this,e,t,0)??jt)===Ot)return;const i=this._$AH,s=e===jt&&i!==jt||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==jt&&(i===jt||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class qt{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Vt(this,e)}}const Dt={I:Ht},Ft=ht.litHtmlPolyfillSupport;Ft?.(Pt,Ht),(ht.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let Bt=class extends lt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const s=i?.renderBefore??t;let n=s._$litPart$;if(void 0===n){const e=i?.renderBefore??null;s._$litPart$=n=new Ht(t.insertBefore(yt(),e),e,void 0,i??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ot}};Bt._$litElement$=!0,Bt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:Bt});const Zt=globalThis.litElementPolyfillSupport;Zt?.({LitElement:Bt}),(globalThis.litElementVersions??=[]).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Gt={attribute:!0,type:String,converter:ot,reflect:!1,hasChanged:at},Kt=(e=Gt,t,i)=>{const{kind:s,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(i.name,e),"accessor"===s){const{name:s}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,n,e)},init(t){return void 0!==t&&this.P(s,void 0,e),t}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];t.call(this,i),this.requestUpdate(s,n,e)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Jt(e){return(t,i)=>"object"==typeof i?Kt(e,t,i):((e,t,i)=>{const s=t.hasOwnProperty(i);return t.constructor.createProperty(i,s?{...e,wrapped:!0}:e),s?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function Qt(e){return Jt({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Xt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Yt}=Dt,ei=()=>document.createComment(""),ti=(e,t,i)=>{const s=e._$AA.parentNode,n=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=s.insertBefore(ei(),n),r=s.insertBefore(ei(),n);i=new Yt(t,r,e,e.options)}else{const t=i._$AB.nextSibling,r=i._$AM,o=r!==e;if(o){let t;i._$AQ?.(e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==r._$AU&&i._$AP(t)}if(t!==n||o){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;s.insertBefore(e,n),e=t}}}return i},ii=(e,t,i=e)=>(e._$AI(t,i),e),si={},ni=e=>{e._$AP?.(!1,!0);let t=e._$AA;const i=e._$AB.nextSibling;for(;t!==i;){const e=t.nextSibling;t.remove(),t=e}},ri=(e,t,i)=>{const s=new Map;for(let n=t;n<=i;n++)s.set(e[n],n);return s},oi=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends Xt{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let s;void 0===i?i=t:void 0!==t&&(s=t);const n=[],r=[];let o=0;for(const t of e)n[o]=s?s(t,o):o,r[o]=i(t,o),o++;return{values:r,keys:n}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,s]){const n=(e=>e._$AH)(e),{values:r,keys:o}=this.dt(t,i,s);if(!Array.isArray(n))return this.ut=o,r;const a=this.ut??=[],c=[];let l,h,d=0,u=n.length-1,v=0,p=r.length-1;for(;d<=u&&v<=p;)if(null===n[d])d++;else if(null===n[u])u--;else if(a[d]===o[v])c[v]=ii(n[d],r[v]),d++,v++;else if(a[u]===o[p])c[p]=ii(n[u],r[p]),u--,p--;else if(a[d]===o[p])c[p]=ii(n[d],r[p]),ti(e,c[p+1],n[d]),d++,p--;else if(a[u]===o[v])c[v]=ii(n[u],r[v]),ti(e,n[d],n[u]),u--,v++;else if(void 0===l&&(l=ri(o,v,p),h=ri(a,d,u)),l.has(a[d]))if(l.has(a[u])){const t=h.get(o[v]),i=void 0!==t?n[t]:null;if(null===i){const t=ti(e,n[d]);ii(t,r[v]),c[v]=t}else c[v]=ii(i,r[v]),ti(e,n[d],i),n[t]=null;v++}else ni(n[u]),u--;else ni(n[d]),d++;for(;v<=p;){const t=ti(e,c[p+1]);ii(t,r[v]),c[v++]=t}for(;d<=u;){const e=n[d++];null!==e&&ni(e)}return this.ut=o,((e,t=si)=>{e._$AH=t})(e,c),Ot}}),ai=["ha-form","ha-icon","ha-icon-button","ha-selector","ha-textfield","ha-icon-picker","ha-icon-button","ha-entity-picker","ha-select","ha-dialog","ha-sortable","ha-svg-icon","ha-alert","ha-button","ha-color-picker","ha-badge","ha-sankey-chart","mwc-button"],ci=async e=>{const t=e||ai;try{if(t.every((e=>customElements.get(e))))return;await Promise.race([customElements.whenDefined("partial-panel-resolver"),new Promise(((e,t)=>setTimeout((()=>t(new Error("Timeout waiting for partial-panel-resolver"))),1e4)))]);const e=document.createElement("partial-panel-resolver");if(!e)throw new Error("Failed to create partial-panel-resolver element");if(e.hass={panels:[{url_path:"tmp",component_name:"config"}]},"function"!=typeof e._updateRoutes)throw new Error("partial-panel-resolver does not have _updateRoutes method");if(e._updateRoutes(),!e.routerOptions?.routes?.tmp?.load)throw new Error("Failed to create tmp route in partial-panel-resolver");await Promise.race([e.routerOptions.routes.tmp.load(),new Promise(((e,t)=>setTimeout((()=>t(new Error("Timeout loading tmp route"))),1e4)))]),await Promise.race([customElements.whenDefined("ha-panel-config"),new Promise(((e,t)=>setTimeout((()=>t(new Error("Timeout waiting for ha-panel-config"))),1e4)))]);const i=document.createElement("ha-panel-config");if(!i)throw new Error("Failed to create ha-panel-config element");if(!i.routerOptions?.routes?.automation?.load)throw new Error("ha-panel-config does not have automation route");await Promise.race([i.routerOptions.routes.automation.load(),new Promise(((e,t)=>setTimeout((()=>t(new Error("Timeout loading automation components"))),1e4)))]);const s=t.filter((e=>!customElements.get(e)));if(s.length>0)throw new Error(`Failed to load components: ${s.join(", ")}`)}catch(e){console.error("Error loading Home Assistant form components:",e);try{if(window.customElements&&window.customElements.get("home-assistant")){console.log("Attempting fallback loading method for HA components");const e=new CustomEvent("ha-request-load-components",{detail:{components:t},bubbles:!0,composed:!0});document.dispatchEvent(e)}}catch(e){console.error("Fallback loading method failed:",e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var li=function(e,t,i,s){for(var n,r=arguments.length,o=r<3?t:s,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};const hi=["ha-form","ha-icon-button","ha-entity-picker","ha-dialog","ha-sortable","ha-svg-icon","mwc-button"];ci(hi).catch((e=>{console.error("Failed to load Home Assistant components:",e)}));let di=class extends Bt{constructor(){super(...arguments),this._entities=[],this._editDialogOpen=!1,this._editingEntityIndex=null,this._editingEntityData=null,this._entityKeys=new WeakMap}_getKey(e){return this._entityKeys.has(e)||this._entityKeys.set(e,Math.random().toString()),this._entityKeys.get(e)}async firstUpdated(){try{await ci(hi)}catch(e){console.error("Error loading ha-components:",e)}}willUpdate(e){super.willUpdate(e),e.has("entities")&&this._processIncomingConfig()}_processIncomingConfig(){this.entities?(this._entities=this.entities.map((e=>"string"==typeof e?{entity:e}:e)),this._entityKeys=new WeakMap):this._entities=[]}render(){return this.hass?Mt`
      ${this.label?Mt`<h3>${this.label}</h3>`:jt}
      <ha-sortable handle-selector=".handle" @item-moved=${this._rowMoved}>
        <div class="entities">
          ${oi(this._entities,(e=>this._getKey(e)),((e,t)=>Mt`
              <div class="entity-row">
                <div class="handle">
                  <ha-svg-icon .path=${"M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"}></ha-svg-icon>
                </div>
                <div class="entity-info">
                  ${e.entity?Mt`
                        <ha-entity-picker
                          allow-custom-entity
                          hide-clear-icon
                          .hass=${this.hass}
                          .value=${e.entity}
                          .index=${t}
                          @value-changed=${this._entityValueChanged}
                        ></ha-entity-picker>
                        ${e.name||e.icon?Mt`<span class="secondary">(${e.name?`Name: ${e.name}`:""}${e.name&&e.icon?", ":""}${e.icon?`Icon: ${e.icon}`:""})</span>`:""}
                      `:Mt`
                        <!-- Placeholder for special row types if needed later -->
                        <span>Special Row Type: ${e.type}</span>
                      `}
                </div>
                <ha-icon-button
                  label="Edit"
                  .path=${"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}
                  class="edit-icon"
                  .index=${t}
                  @click=${this._editRow}
                ></ha-icon-button>
                <ha-icon-button
                  label="Remove"
                  .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
                  class="remove-icon"
                  .index=${t}
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
      ${this._editDialogOpen?Mt`
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
              .computeLabel=${e=>e.label||e.name}
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
    `:jt}_addEntity(e){const t=e.detail.value;t&&(this._entities.some((e=>e.entity===t))?e.target.value="":(this._entities=[...this._entities,{entity:t}],e.target.value="",this._valueChanged()))}_rowMoved(e){e.stopPropagation();const{oldIndex:t,newIndex:i}=e.detail;if(t===i)return;const s=[...this._entities],[n]=s.splice(t,1);s.splice(i,0,n),this._entities=s,this._valueChanged()}_removeEntity(e){const t=e.currentTarget.index;this._entities=this._entities.filter(((e,i)=>i!==t)),this._valueChanged()}_entityValueChanged(e){e.stopPropagation();const t=e.detail.value,i=e.target.index;if(!t||this._entities[i].entity===t)return void(e.target.value=this._entities[i].entity);if(this._entities.some(((e,s)=>s!==i&&e.entity===t)))return void(e.target.value=this._entities[i].entity);const s=[...this._entities];s[i]={...s[i],entity:t},this._entities=s,this._valueChanged()}_editRow(e){const t=e.currentTarget.index;this._editingEntityIndex=t;const i=this._entities[t];this._editingEntityData={...i},this._editDialogOpen=!0}_closeEditDialog(){this._editDialogOpen=!1,this._editingEntityIndex=null,this._editingEntityData=null}_handleEditDialogValueChanged(e){this._editingEntityData&&(this._editingEntityData={...this._editingEntityData,...e.detail.value})}_saveEditDialog(){if(null===this._editingEntityIndex||!this._editingEntityData)return;const e=[...this._entities],t={...e[this._editingEntityIndex],...this._editingEntityData};""===t.name&&delete t.name,""===t.icon&&delete t.icon,e[this._editingEntityIndex]=t,this._entities=e,this._valueChanged(),this._closeEditDialog()}_getEditDialogSchema(){return[{name:"name",selector:{text:{}},label:"Name"},{name:"icon",selector:{icon:{}},label:"Icon"}]}_valueChanged(){const e=new CustomEvent("entities-changed",{detail:{entities:this._entities},bubbles:!0,composed:!0});this.dispatchEvent(e)}};di.styles=((e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1]),e[0]);return new Ze(i,e,Fe)})`
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
  `,li([Jt({attribute:!1})],di.prototype,"hass",void 0),li([Jt({attribute:!1})],di.prototype,"entities",void 0),li([Jt()],di.prototype,"label",void 0),li([Qt()],di.prototype,"_entities",void 0),li([Qt()],di.prototype,"_editDialogOpen",void 0),li([Qt()],di.prototype,"_editingEntityIndex",void 0),li([Qt()],di.prototype,"_editingEntityData",void 0),di=li([(e=>(t,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)})("multi-entity-selector")],di);var ui=function(e,t,i,s){for(var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};class vi extends se{static get styles(){return r`
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
        `}constructor(){super(),this.config={},this._deviceIdChanged=!1,this.openEVSEEntities={},this.deviceEntitiesLoaded=!1}async firstUpdated(){this._lang=this.hass?.language||"en"}setConfig(e){const t=(e.optional_entities||[]).map((e=>{if("object"==typeof e&&null!==e&&e.id&&!e.entity){const{id:t,...i}=e;return{...i,entity:t}}return e})).filter((e=>"string"==typeof e||"object"==typeof e&&null!==e&&("string"==typeof e.entity||void 0===e.entity)));this.config={...e,optional_entities:t},this.config.device_id&&this.hass&&!this.deviceEntitiesLoaded&&this._loadDeviceEntities(this.config.device_id)}_isEntityConfigured(e){return Boolean(this.config[e]&&this.config[e].length>0)}async _loadDeviceEntities(e){if(!e||!this.hass)return;const t={},i=Object.values(this.hass.entities||{}).filter((t=>t.device_id===e)),s={override_entity:{names:["override_state"],domains:["select"],preferredPattern:"select.openevse_override_state"},status_entity:{names:["station_status"],domains:["sensor"],preferredPattern:"sensor.openevse_station_status"},power_entity:{names:["current_power_usage"],domains:["sensor"],preferredPattern:"sensor.openevse_current_power_usage"},current_entity:{names:["charging_current"],domains:["sensor"],preferredPattern:"sensor.openevse_charging_current"},vehicle_connected_entity:{names:["vehicle_connected"],domains:["binary_sensor"],preferredPattern:"binary_sensor.openevse_vehicle_connected"},charging_status_entity:{names:["charging_status"],domains:["sensor"],preferredPattern:"sensor.openevse_charging_status"},charge_rate_entity:{names:["charge_rate"],domains:["number"],preferredPattern:"number.openevse_charge_rate"},session_energy_entity:{names:["usage_this_session"],domains:["sensor"],preferredPattern:"sensor.openevse_usage_this_session"},time_elapsed_entity:{names:["charge_time_elapsed"],domains:["sensor"],preferredPattern:"sensor.openevse_charge_time_elapsed"},wifi_signal_strength_entity:{names:["wifi_signal_strength"],domains:["sensor"],preferredPattern:"sensor.openevse_wifi_signal_strength"},limit_active_entity:{names:["limit_active"],domains:["binary_sensor"],preferredPattern:"binary_sensor.openevse_limit_active"},divert_active_entity:{names:["divert_active"],domains:["binary_sensor"],preferredPattern:"binary_sensor.openevse_divert_active"},divert_mode_entity:{names:["divert_mode"],domains:["sensor"],preferredPattern:"sensor.openevse_divert_mode"},pv_charge_rate_entity:{names:["pv_charge_rate"],domains:["sensor"],preferredPattern:"sensor.openevse_pv_charge_rate"},vehicle_battery_level_entity:{names:["vehicle_battery_level"],domains:["sensor"],preferredPattern:"sensor.openevse_vehicle_battery_level"},vehicle_range_entity:{names:["vehicle_range"],domains:["sensor"],preferredPattern:"sensor.openevse_vehicle_range"}};for(const[e,n]of Object.entries(s)){if(this._isEntityConfigured(e)&&!this._deviceIdChanged)continue;const{names:s,domains:r,preferredPattern:o}=n;let a=i.find((e=>e.entity_id.toLowerCase()===o.toLowerCase()));a||(a=i.find((e=>{const t=e.entity_id.toLowerCase(),i=t.split(".")[0];return!!r.includes(i)&&s.some((i=>t.includes(i.toLowerCase())||e.original_name&&e.original_name.toLowerCase().includes(i.toLowerCase())))}))),a&&(t[e]=a.entity_id)}this.openEVSEEntities=t,this.deviceEntitiesLoaded=!0;const n={...this.config};for(const[e,i]of Object.entries(t))this._isEntityConfigured(e)&&!this._deviceIdChanged||(n[e]=i);this._deviceIdChanged=!1,this.config=n,this._fireConfigChanged(n)}_handleConfigChange(e){const t=e.detail.value;t.device_id!==this.config.device_id?(this._deviceIdChanged=!0,this.deviceEntitiesLoaded=!1,this.config={...this.config,...t},this._loadDeviceEntities(t.device_id)):this._dispatchConfigChanged(t)}_dispatchConfigChanged(e){const t={...this.config,...e};this.config=t,this._fireConfigChanged(t)}_fireConfigChanged(e){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e}}))}_handleOptionalEntitiesChanged(e){if(!this.config||!this.hass)return;const t=e.detail.entities;this.config={...this.config,optional_entities:t},this._fireConfigChanged(this.config)}_getMissingEntities(){return["override_entity","status_entity","power_entity","current_entity","vehicle_connected_entity","charging_status_entity","charge_rate_entity","session_energy_entity","time_elapsed_entity","wifi_signal_strength_entity","limit_active_entity","divert_active_entity","divert_mode_entity","pv_charge_rate_entity","vehicle_range_entity","vehicle_battery_level_entity"].filter((e=>{const t=this.config[e]&&this.config[e].length>0,i=this.openEVSEEntities[e]&&this.openEVSEEntities[e].length>0;return!t&&!i}))}render(){if(!this.hass)return W``;const e={};if(this.config.device_id&&this.hass.entities){Object.values(this.hass.entities).filter((e=>e.device_id===this.config.device_id)).forEach((t=>{const i=t.entity_id.split(".")[0];e[i]||(e[i]=[]),e[i].push(t.entity_id)}))}const t=Re(e,this._lang),i=this._getMissingEntities();return W`
            <!-- Auto-detection status -->
            ${this.config.device_id?W`
                      <div class="entity-section">
                          ${this.deviceEntitiesLoaded?W`
                                    <div
                                        class="entity-status ${i.length>0?"warning":"success"}"
                                    >
                                        ${0===i.length?ue("entity_auto_success",this._lang)+"!":ue("entity_auto_fail",this._lang)+": "+i.join(", ")}
                                    </div>
                                `:W`
                                    <div class="entity-status">
                                        ${ue("entity_auto_loading",this._lang)}
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
                              .schema=${t}
                              .computeLabel=${e=>e.label||e.name}
                              .computeHelper=${e=>e.helper_text||q}
                              @value-changed=${this._handleConfigChange}
                          ></ha-form>
                          <!-- Additional entities using multi-entity-selector -->
                          <div class="entity-section">
                              <multi-entity-selector
                                  .hass=${this.hass}
                                  .entities=${this.config.optional_entities||[]}
                                  label=${ue("additional entities",this._lang)}
                                  @entities-changed=${this._handleOptionalEntitiesChanged}
                              ></multi-entity-selector>
                          </div>
                      `:W`
                          <ha-form
                              .hass=${this.hass}
                              .data=${this.openEVSEEntities}
                              .schema=${[{name:"device_id",selector:{device:{integration:"openevse",manufacturer:"OpenEVSE"}},label:ue("openevse device",this._lang),helper_text:ue("select your openevse device",this._lang),required:!0}]}
                              @value-changed=${this._handleConfigChange}
                          ></ha-form>
                      `}
            </div>
        `}}ui([ce({attribute:!1})],vi.prototype,"hass",void 0),ui([ce({attribute:!1})],vi.prototype,"config",void 0),ui([le()],vi.prototype,"_lang",void 0),ui([le()],vi.prototype,"_deviceIdChanged",void 0),ui([le()],vi.prototype,"openEVSEEntities",void 0),ui([le()],vi.prototype,"deviceEntitiesLoaded",void 0),customElements.define("openevse-card",Ne),customElements.define("openevse-card-editor",vi),window.customCards=window.customCards||[],window.customCards.push({type:"openevse-card",name:"OpenEVSE Card",description:"A custom card for OpenEVSE"});
