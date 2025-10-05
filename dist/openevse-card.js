/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new n(s,t,i)},o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,v=globalThis,p=v.trustedTypes,g=p?p.emptyScript:"",m=v.reactiveElementPolyfillSupport,f=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!a(t,e),_={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const r=s?.call(this);n?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of s){const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s;const r=n.fromAttribute(e,t.type);this[s]=r??this._$Ej?.get(s)??r,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const s=this.constructor,n=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??b)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==n||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[f("elementProperties")]=new Map,w[f("finalized")]=new Map,m?.({ReactiveElement:w}),(v.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,$=x.trustedTypes,S=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+k,A=`<${C}>`,M=document,z=()=>M.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,j=Array.isArray,L="[ \t\n\f\r]",V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,P=/>/g,T=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,I=/"/g,R=/^(?:script|style|textarea|title)$/i,U=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),q=new WeakMap,F=M.createTreeWalker(M,129);function B(t,e){if(!j(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}let Z=class t{constructor({strings:e,_$litType$:i},s){let n;this.parts=[];let r=0,o=0;const a=e.length-1,c=this.parts,[l,h]=((t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":3===e?"<math>":"",o=V;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,h=0;for(;h<i.length&&(o.lastIndex=h,c=o.exec(i),null!==c);)h=o.lastIndex,o===V?"!--"===c[1]?o=N:void 0!==c[1]?o=P:void 0!==c[2]?(R.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=T):void 0!==c[3]&&(o=T):o===T?">"===c[0]?(o=n??V,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?T:'"'===c[3]?I:H):o===I||o===H?o=T:o===N||o===P?o=V:(o=T,n=void 0);const d=o===T&&t[e+1].startsWith("/>")?" ":"";r+=o===V?i+A:l>=0?(s.push(a),i.slice(0,l)+E+i.slice(l)+k+d):i+k+(-2===l?e:d)}return[B(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(e,i);if(this.el=t.createElement(l,s),F.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=F.nextNode())&&c.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(E)){const e=h[o++],i=n.getAttribute(t).split(k),s=/([.?@])?(.*)/.exec(e);c.push({type:1,index:r,name:s[2],strings:i,ctor:"."===s[1]?Q:"?"===s[1]?X:"@"===s[1]?tt:Y}),n.removeAttribute(t)}else t.startsWith(k)&&(c.push({type:6,index:r}),n.removeAttribute(t));if(R.test(n.tagName)){const t=n.textContent.split(k),e=t.length-1;if(e>0){n.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],z()),F.nextNode(),c.push({type:2,index:++r});n.append(t[e],z())}}}else if(8===n.nodeType)if(n.data===C)c.push({type:2,index:r});else{let t=-1;for(;-1!==(t=n.data.indexOf(k,t+1));)c.push({type:7,index:r}),t+=k.length-1}r++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}};function K(t,e,i=t,s){if(e===W)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const r=O(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=K(t,n._$AS(t,e.values),n,s)),e}let G=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??M).importNode(e,!0);F.currentNode=s;let n=F.nextNode(),r=0,o=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new J(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new et(n,this,t)),this._$AV.push(e),a=i[++o]}r!==a?.index&&(n=F.nextNode(),r++)}return F.currentNode=M,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},J=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),O(t)?t===D||null==t||""===t?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>j(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==D&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Z.createElement(B(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new G(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new Z(t)),e}k(e){j(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,n=0;for(const r of e)n===i.length?i.push(s=new t(this.O(z()),this.O(z()),this,this.options)):s=i[n],s._$AI(r),n++;n<i.length&&(this._$AR(s&&s._$AB.nextSibling,n),i.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}},Y=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=D}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=K(this,t,e,0),r=!O(t)||t!==this._$AH&&t!==W,r&&(this._$AH=t);else{const s=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=K(this,s[i+o],e,o),a===W&&(a=this._$AH[o]),r||=!O(a)||a!==this._$AH[o],a===D?t=D:t!==D&&(t+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!s&&this.j(t)}j(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Q=class extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===D?void 0:t}},X=class extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==D)}},tt=class extends Y{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??D)===W)return;const i=this._$AH,s=t===D&&i!==D||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==D&&(i===D||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},et=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}};const it=x.litHtmlPolyfillSupport;it?.(Z,J),(x.litHtmlVersions??=[]).push("3.3.1");const st=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let nt=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new J(e.insertBefore(z(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};nt._$litElement$=!0,nt.finalized=!0,st.litElementHydrateSupport?.({LitElement:nt});const rt=st.litElementPolyfillSupport;rt?.({LitElement:nt}),(st.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},at={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},ct=(t=at,e,i)=>{const{kind:s,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lt(t){return(e,i)=>"object"==typeof i?ct(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t){return lt({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=r`
    :host {
        --evse-active-color: var(--success-color);
        --evse-disabled-color: #116a88;
        --evse-auto-color: var(--info-color);
        --evse-slider-color: var(--info-color, #2196f3);
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
        padding: 8px 16px;
        transition: all 0.3s ease-out;
    }
    .evse-states {
        display: flex;
        justify-content: space-between;
        width: 100%;
        background: transparent;
        padding-bottom: 20px;
        border-radius: 16px;
        align-items: center;

    }
    .status-header-line {
        display: flex;
        justify-content: end;
        align-items: center;
        width: 100%;
        flex-grow: 1;
        margin-left: 8px;
        gap: 8px;
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
    .status-badge {
        font-size: 14px;
        border-radius: 4px;
        background-color: white;
        padding: 6px;
        padding-bottom: 4px;
        line-height: 1;
        text-transform: capitalize;
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
    .erroricon {
        color: var(--error-color);
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
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        width: 100%;
    }
    .override-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 16px;
        margin-top: 10px;
        width: 100%;
    }
    .override-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .divert-toggle {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        justify-content: center;
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
        
    .entity-row {
        display: flex;
        justify-content: space-between;
        margin: 4px;
        color: var(--primary-text-color);
        background-color: var(--evse-secondary-bg-color);
        align-items: center;
        border-radius: 10px;
        align-items: center;
        padding: 4px 16px;
    }
    .entity-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .entity-label {
        display: flex;
        justify-content: right;
        color: var(--secondary-text-color);
    }
    .entity-value {
        text-align: right;
        color: var(--primary-text-color);
        font-size: 1rem;
        /* font-weight: 500; */
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
        color: var(--secondary-text-color);
        margin-bottom: 3px;
        font-weight: 300;
        text-transform: capitalize;
    }
    .grid-item-value {
        font-size: 1.2rem;
        font-weight: 400;
        color: var(--primary-text-color);
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
`,ut={en:{disabled:"disabled",sleeping:"disabled","switch to fast mode":"Switch to fast mode","switch to eco mode":"Switch to eco mode",active:"active",charging:"charging","not connected":"waiting",connected:"connected",error:"error",power:"power",current:"current",session:"session",elapsed:"elapsed","charge rate":"charge rate",required_entities:"Required entities",entity_auto_success:"All required entities were automatically found",entity_auto_fail:"Some entities could not be automatically detected",entity_auto_loading:"Loading device entities","additional entities":"Additional entities","new limit":"New Limit","add charging limit":"Add Charging Limit",limit:"Limit",time:"Time",energy:"Energy",battery:"Battery",range:"Range",hours:"Hours",minutes:"Minutes",cancel:"Cancel",left:"left","add limit":"Add Limit","header title":"Header Title","display header":"Display header",features:"Features","enable vehicle battery":"Enable Vehicle Battery","enable vehicle range":"Enable Vehicle Range","limits settings":"Limits settings","maximum charge energy":"Maximum charge energy (kWh)","maximum vehicle range":"Maximum vehicle range (miles|km)","openevse device":"OpenEVSE Device","select your openevse device":"Select your OpenEVSE device to automatically populate all entities","override state":"Override State","select openevse.override_state entity":"Select openevse.override_state entity","station status":"Station Status","select openevse.station_status entity":"Select openevse.station_status entity","current power usage":"Current power usage","select openevse.current_power_usage entity":"Select openevse.current_power_usage entity","charging current":"Charging current","select openevse.charging_current entity":"Select openevse.charging_current entity","vehicle connected":"Vehicle Connected","select openevse.vehicle_connected entity":"Select openevse.vehicle_connected entity","charging status":"Charging status","select openevse.charging_status entity":"Select openevse.charging_status entity","session energy":"Session Energy","select openevse.usage_this_session entity":"Select openevse.usage_this_session entity","charge time elapsed":"Charge Time Elapsed","select openevse.charge_time_elapsed entity":"Select openevse.charge_time_elapsed entity","wifi signal":"Wifi Signal","select openevse_wifi_signal_strength entity":"Select openevse_wifi_signal_strength entity","limit active":"Limit Active","select openevse_limit_active entity":"Select openevse_limit_active entity","vehicle range":"Vehicle Range","select openevse_vehicle_range entity":"Select openevse_vehicle_range entity","battery level":"Battery Level","select openevse_vehicle_battery_level entity":"Select openevse_vehicle_battery_level entity",entity:"Entity",name:"Name",icon:"Icon",warning:"Warning","edit optional entity":"Edit Optional Entity",save:"Save",integration_missing_or_outdated:"OpenEVSE integration not found or requires version {min_version} & higher.",eco:"Eco",fast:"Fast"},fr:{disabled:"désactivé",sleeping:"désactivé","switch to fast mode":"Passer en mode rapide","switch to eco mode":"Passer en mode éco",active:"activé",charging:"en charge","not connected":"en attente",connected:"connecté",error:"erreur",power:"puissance",current:"courant",session:"session",elapsed:"écoulé","charge rate":"ampérage",required_entities:"Entités requises",entity_auto_success:"Toutes les entités ont été trouvées automatiquement",entity_auto_fail:"certaines entités n'ont pas pu être détectées automatiquement",entity_auto_loading:"Chargement des entités de l'appareil","additional entities":"Entités supplémentaires","new limit":"Nouvelle Limite","add charging limit":"Ajouter une Limite de Charge",time:"Temps",energy:"Énergie",battery:"Batterie",range:"Autonomie",hours:"Heures",minutes:"Minutes",cancel:"Annuler",limit:"Limite",left:"restant","add limit":"Ajouter Limite","header title":"Titre d'en-tête","display header":"Afficher l'en-tête",features:"Fonctionnalités","enable vehicle battery":"Activer la batterie du véhicule","enable vehicle range":"Activer l'autonomie du véhicule","limits settings":"Paramètres des limites","maximum charge energy":"Énergie de charge maximale (kWh)","maximum vehicle range":"Autonomie maximale du véhicule (miles|km)","openevse device":"Appareil OpenEVSE","select your openevse device":"Sélectionnez votre appareil OpenEVSE pour remplir automatiquement toutes les entités","override state":"État de surcharge","select openevse.override_state entity":"Sélectionnez l'entité openevse.override_state","station status":"État de la station","select openevse.station_status entity":"Sélectionnez l'entité openevse.station_status","current power usage":"Consommation électrique actuelle","select openevse.current_power_usage entity":"Sélectionnez l'entité openevse.current_power_usage","charging current":"Courant de charge","select openevse.charging_current entity":"Sélectionnez l'entité openevse.charging_current","vehicle connected":"Véhicule connecté","select openevse.vehicle_connected entity":"Sélectionnez l'entité openevse.vehicle_connected","charging status":"État de charge","select openevse.charging_status entity":"Sélectionnez l'entité openevse.charging_status","session energy":"Énergie de session","select openevse.usage_this_session entity":"Sélectionnez l'entité openevse.usage_this_session","charge time elapsed":"Temps de charge écoulé","select openevse.charge_time_elapsed entity":"Sélectionnez l'entité openevse.charge_time_elapsed","wifi signal":"Signal Wifi","select openevse_wifi_signal_strength entity":"Sélectionnez l'entité openevse_wifi_signal_strength","limit active":"Limite active","select openevse_limit_active entity":"Sélectionnez l'entité openevse_limit_active","vehicle range":"Autonomie du véhicule","select openevse_vehicle_range entity":"Sélectionnez l'entité openevse_vehicle_range","battery level":"Niveau de batterie","select openevse_vehicle_battery_level entity":"Sélectionnez l'entité openevse_vehicle_battery_level",entity:"Entité",name:"Nom",icon:"Icône",warning:"Avertissement","edit optional entity":"Modifier l'entité optionnelle",save:"Enregistrer",integration_missing_or_outdated:"Intégration OpenEVSE non trouvée ou nécessite la version {min_version} ou supérieure.",eco:"Éco",fast:"Rapide"},de:{disabled:"deaktiviert",sleeping:"deaktiviert","switch to fast mode":"In den Schnellmodus wechseln","switch to eco mode":"In den Eco-Modus wechseln",active:"aktiv",charging:"lädt","not connected":"bereit",connected:"verbunden",error:"fehler",power:"leistung",current:"stromstärke",session:"sitzung",elapsed:"verstrichene zeit","charge rate":"laderate",required_entities:"Erforderliche Entitäten",entity_auto_success:"Alle erforderlichen Entitäten wurden automatisch gefunden",entity_auto_fail:"Einige Entitäten konnten nicht automatisch erkannt werden",entity_auto_loading:"Geräteentitäten werden geladen","additional entities":"Zusätzliche Entitäten","new limit":"Neues Limit","add charging limit":"Ladelimit hinzufügen",time:"Zeit",energy:"Energie",battery:"Batterie",range:"Reichweite",hours:"Stunden",minutes:"Minuten",cancel:"Abbrechen",limit:"Limit",left:"verbleibend","add limit":"Limit hinzufügen","header title":"Kopfzeilentitel","display header":"Kopfzeile anzeigen",features:"Funktionen","enable vehicle battery":"Fahrzeugbatterie aktivieren","enable vehicle range":"Fahrzeugreichweite aktivieren","limits settings":"Limit-Einstellungen","maximum charge energy":"Maximale Ladeenergie (kWh)","maximum vehicle range":"Maximale Fahrzeugreichweite (Meilen|km)","openevse device":"OpenEVSE-Gerät","select your openevse device":"Wählen Sie Ihr OpenEVSE-Gerät aus, um alle Entitäten automatisch zu füllen","override state":"Überschreibungsstatus","select openevse.override_state entity":"Wählen Sie die openevse.override_state Entität","station status":"Stationsstatus","select openevse.station_status entity":"Wählen Sie die openevse.station_status Entität","current power usage":"Aktuelle Leistungsaufnahme","select openevse.current_power_usage entity":"Wählen Sie die openevse.current_power_usage Entität","charging current":"Ladestrom","select openevse.charging_current entity":"Wählen Sie die openevse.charging_current Entität","vehicle connected":"Fahrzeug verbunden","select openevse.vehicle_connected entity":"Wählen Sie die openevse.vehicle_connected Entität","charging status":"Ladestatus","select openevse.charging_status entity":"Wählen Sie die openevse.charging_status Entität","session energy":"Sitzungsenergie","select openevse.usage_this_session entity":"Wählen Sie die openevse.usage_this_session Entität","charge time elapsed":"Verstrichene Ladezeit","select openevse.charge_time_elapsed entity":"Wählen Sie die openevse.charge_time_elapsed Entität","wifi signal":"WLAN-Signal","select openevse_wifi_signal_strength entity":"Wählen Sie die openevse_wifi_signal_strength Entität","limit active":"Limit aktiv","select openevse_limit_active entity":"Wählen Sie die openevse_limit_active Entität","vehicle range":"Fahrzeugreichweite","select openevse_vehicle_range entity":"Wählen Sie die openevse_vehicle_range Entität","battery level":"Batteriestand","select openevse_vehicle_battery_level entity":"Wählen Sie die openevse_vehicle_battery_level Entität",entity:"Entität",name:"Name",icon:"Symbol",warning:"Warnung","edit optional entity":"Optionale Entität bearbeiten",save:"Speichern",integration_missing_or_outdated:"OpenEVSE-Integration nicht gefunden oder erfordert Version {min_version} oder höher.",eco:"Öko",fast:"Schnell"},es:{disabled:"desactivado",sleeping:"desactivado","switch to fast mode":"Cambiar a modo rápido","switch to eco mode":"Cambiar a modo eco",active:"activo",charging:"cargando","not connected":"en espera",connected:"conectado",error:"error",power:"potencia",current:"corriente",session:"sesión",elapsed:"pasado","charge rate":"amperaje",required_entities:"Entidades requeridas",entity_auto_success:"Todas las entidades requeridas se encontraron automáticamente",entity_auto_fail:"Algunas entidades no pudieron ser detectadas automáticamente",entity_auto_loading:"Cargando entidades del dispositivo","additional entities":"Entidades adicionales","new limit":"Nuevo Límite","add charging limit":"Añadir Límite de Carga",time:"Tiempo",energy:"Energía",battery:"Batería",range:"Autonomía",hours:"Horas",minutes:"Minutos",cancel:"Cancelar",limit:"Limite",left:"restante","add limit":"Añadir Límite","header title":"Título del encabezado","display header":"Mostrar encabezado",features:"Características","enable vehicle battery":"Habilitar batería del vehículo","enable vehicle range":"Habilitar autonomía del vehículo","limits settings":"Configuración de límites","maximum charge energy":"Energía máxima de carga (kWh)","maximum vehicle range":"Autonomía máxima del vehículo (millas|km)","openevse device":"Dispositivo OpenEVSE","select your openevse device":"Seleccione su dispositivo OpenEVSE para completar automáticamente todas las entidades","override state":"Estado de anulación","select openevse.override_state entity":"Seleccione la entidad openevse.override_state","station status":"Estado de la estación","select openevse.station_status entity":"Seleccione la entidad openevse.station_status","current power usage":"Consumo de energía actual","select openevse.current_power_usage entity":"Seleccione la entidad openevse.current_power_usage","charging current":"Corriente de carga","select openevse.charging_current entity":"Seleccione la entidad openevse.charging_current","vehicle connected":"Vehículo conectado","select openevse.vehicle_connected entity":"Seleccione la entidad openevse.vehicle_connected","charging status":"Estado de carga","select openevse.charging_status entity":"Seleccione la entidad openevse.charging_status","session energy":"Energía de sesión","select openevse.usage_this_session entity":"Seleccione la entidad openevse.usage_this_session","charge time elapsed":"Tiempo de carga transcurrido","select openevse.charge_time_elapsed entity":"Seleccione la entidad openevse.charge_time_elapsed","wifi signal":"Señal Wifi","select openevse_wifi_signal_strength entity":"Seleccione la entidad openevse_wifi_signal_strength","limit active":"Límite activo","select openevse_limit_active entity":"Seleccione la entidad openevse_limit_active","vehicle range":"Autonomía del vehículo","select openevse_vehicle_range entity":"Seleccione la entidad openevse_vehicle_range","battery level":"Nivel de batería","select openevse_vehicle_battery_level entity":"Seleccione la entidad openevse_vehicle_battery_level",entity:"Entidad",name:"Nombre",icon:"Icono",warning:"Advertencia","edit optional entity":"Editar entidad opcional",save:"Guardar",integration_missing_or_outdated:"Integración OpenEVSE no encontrada o requiere la versión {min_version} o superior.",eco:"Eco",fast:"Rápido"}};function vt(t,e="en"){const i=t.toLowerCase();return e in ut&&i in ut[e]?ut[e][i]:"en"in ut&&i in ut.en?ut.en[i]:t}const pt=["ha-form","ha-icon","ha-icon-button","ha-selector","ha-textfield","ha-icon-picker","ha-icon-button","ha-entity-picker","ha-select","ha-dialog","ha-sortable","ha-svg-icon","ha-alert","ha-button","ha-color-picker","ha-badge","ha-sankey-chart","mwc-button"],gt="2.1.47";var mt=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let ft=class extends nt{constructor(){super(),this.min=0,this.max=32,this.step=1,this.value=0,this.disabled=!1,this.height=22,this.color="black",this.displayThumb=!0,this.unit="",this._sliderValue=0,this._dragging=!1,this._boundHandleSliderMove=this._handleSliderMove.bind(this),this._boundHandleSliderEnd=this._handleSliderEnd.bind(this)}updated(t){t.has("value")&&!this._dragging&&(this._sliderValue=this.value)}connectedCallback(){super.connectedCallback(),this._sliderValue=this.value}disconnectedCallback(){super.disconnectedCallback(),this._removeEventListeners()}get _percentage(){const t=this.max-this.min;if(0===t)return 5;return 5+95*((this._sliderValue-this.min)/t)}_handleSliderStart(t){this.disabled||(this._dragging=!0,this.shadowRoot?.querySelector(".slider-wrapper")?.classList.add("dragging"),this._updateSliderValue(t),window.addEventListener("mousemove",this._boundHandleSliderMove),window.addEventListener("touchmove",this._boundHandleSliderMove),window.addEventListener("mouseup",this._boundHandleSliderEnd),window.addEventListener("touchend",this._boundHandleSliderEnd))}_handleSliderMove(t){this._dragging&&this._updateSliderValue(t)}_handleSliderEnd(){this._dragging&&(this.shadowRoot?.querySelector(".slider-wrapper")?.classList.remove("dragging"),this._removeEventListeners(),this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:this._sliderValue},bubbles:!0,composed:!0})),setTimeout(()=>{this._dragging=!1},100))}_removeEventListeners(){window.removeEventListener("mousemove",this._boundHandleSliderMove),window.removeEventListener("touchmove",this._boundHandleSliderMove),window.removeEventListener("mouseup",this._boundHandleSliderEnd),window.removeEventListener("touchend",this._boundHandleSliderEnd)}_updateSliderValue(t){const e=this.shadowRoot?.querySelector(".slider-wrapper");if(!e)return;const i=e.getBoundingClientRect();let s;s="touches"in t?t.touches[0].clientX:t.clientX;const n=.95*i.width;let r=(s-(i.left+.05*i.width))/n;r=Math.min(Math.max(r,0),1);let o=this.min+r*(this.max-this.min);o=Math.round(o/this.step)*this.step,o=Math.min(Math.max(o,this.min),this.max),this._sliderValue=Number(o.toFixed(2)),this.dispatchEvent(new CustomEvent("value-preview",{detail:{value:this._sliderValue},bubbles:!0,composed:!0})),this.requestUpdate()}_formatValue(t){return this.step<1?t.toFixed(1):t.toFixed(0)}render(){return U`
            <div class="slider-container">
                ${this.unit?U`
                          <div
                              class="slider-badge"
                              style="color: var(${this.color})"
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
          --slider-color: var(${this.color});
          --slider-percentage: ${this._percentage}%;
        "
                >
                    <div
                        class="slider-track clickable"
                        style="width: ${Math.max(5,this._percentage)}%; border-radius: ${100===this._percentage?"6px":0===this._percentage?"0":"6px 0 0 6px"}"
                    ></div>
                    ${this.displayThumb?U`
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
        `}};ft.styles=r`
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
    `,mt([lt({type:Number})],ft.prototype,"min",void 0),mt([lt({type:Number})],ft.prototype,"max",void 0),mt([lt({type:Number})],ft.prototype,"step",void 0),mt([lt({type:Number})],ft.prototype,"value",void 0),mt([lt({type:Boolean,reflect:!0})],ft.prototype,"disabled",void 0),mt([lt({type:Number})],ft.prototype,"height",void 0),mt([lt({type:String})],ft.prototype,"color",void 0),mt([lt({type:Boolean,attribute:"display-thumb"})],ft.prototype,"displayThumb",void 0),mt([lt({type:String})],ft.prototype,"unit",void 0),mt([ht()],ft.prototype,"_sliderValue",void 0),mt([ht()],ft.prototype,"_dragging",void 0),mt([function(t){return(e,i)=>{const s="function"==typeof e?e:e[i];Object.assign(s,t)}}({passive:!0})],ft.prototype,"_handleSliderStart",null),ft=mt([ot("custom-slider")],ft);var yt=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let bt=class extends nt{constructor(){super(...arguments),this.min=0,this.max=32,this.step=1,this.value=0,this.unit="A",this.disabled=!1,this.label="Charge Rate"}_formatValue(t){return this.step<1?t.toFixed(1):t.toFixed(0)}render(){return U`
            <div class="slider-container">
                ${this.label?U`<div class="slider-label">${this.label}</div>`:""}
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
                    color="--evse-slider-color"
                    @value-preview=${t=>this.value=t.detail.value}
                    @value-changed=${t=>{this.value=t.detail.value,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:this.value},bubbles:!0,composed:!0}))}}
                ></custom-slider>
            </div>
        `}};bt.styles=r`
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
    `,yt([lt({type:Number})],bt.prototype,"min",void 0),yt([lt({type:Number})],bt.prototype,"max",void 0),yt([lt({type:Number})],bt.prototype,"step",void 0),yt([lt({type:Number})],bt.prototype,"value",void 0),yt([lt({type:String})],bt.prototype,"unit",void 0),yt([lt({type:Boolean,reflect:!0})],bt.prototype,"disabled",void 0),yt([lt({type:String})],bt.prototype,"label",void 0),bt=yt([ot("evse-slider")],bt);var _t=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let wt=class extends nt{constructor(){super(),this.feat_soc=!1,this.feat_range=!1,this.energy_max_value=100,this.range_max_value=600,this.range_unit="km",this.language="en",this.evse_elapsed=0,this.evse_energy=0,this.evse_soc=0,this.evse_range=0,this._showLimitForm=!1,this._selectedLimitType="time",this._hours=void 0,this._minutes=void 0,this._value=0}static get styles(){return r`
            :host {
                display: block;
                width: 100%;
                --limit-slider-color: var(--primary-text-color);
            }
            .limit-container {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                margin: 10px 0;
            }
            ha-dialog {
                /* Prevent dialog from overlapping app header */
                --dialog-z-index: 5;
                --dialog-surface-max-width: 400px;
                --mdc-dialog-min-width: 300px;
                --mdc-dialog-max-width: 400px;
            }
             .dialog-content {
                 padding: 16px 16px 8px 16px;
                 box-sizing: border-box;
                 width: 100%;
                 max-width: 400px;
                 margin: 0 auto;
             }
            .new-limit-btn {
                background-color: var(--primary-color);
                color: var(--text-primary-color);
                border: none;
                border-radius: 4px;
                padding: 8px;
                font-size: 14px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: background-color 0.3s;
                height: 30px;
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
            /* Dialog button styling */
            ha-dialog::part(secondaryAction) {
                --mdc-theme-primary: var(--primary-color);
            }
            ha-dialog::part(primaryAction) {
                --mdc-theme-primary: var(--primary-color);
            }
            ha-dialog button {
                background-color: var(--primary-color);
                color: var(--text-primary-color);
                border: none;
                border-radius: 4px;
                padding: 8px 16px;
                font-size: 14px;
                cursor: pointer;
                transition: background-color 0.3s;
            }
            ha-dialog button:hover:not(:disabled) {
                background-color: var(--dark-primary-color);
            }
            ha-dialog button:disabled {
                opacity: 0.5;
                cursor: not-allowed;
                background-color: var(--disabled-color, #ccc);
            }
            ha-dialog button[slot="secondaryAction"] {
                background-color: var(--secondary-background-color);
                color: var(--primary-text-color);
            }
            ha-dialog button[slot="secondaryAction"]:hover:not(:disabled) {
                background-color: var(--dark-secondary-background-color);
            }
            .limit-badge {
                display: flex;
                align-items: center;
                background-color: var(--primary-color);
                color: var(--text-primary-color);
                border-radius: 4px;
                padding-left: 8px;
                padding-right: 4px;
                font-size: 14px;
                max-width: fit-content;
                margin: 0 auto;
                height: 30px;
                
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
            .limit-badge .lock-icon {
                flex: 1;
                align-items: center;
                margin-left: 8px;
                margin-right: 4px;
                --mdc-icon-size: 20px;
            }

            .limit-type {
                font-weight: 500;
                margin-left: 8px;
                white-space: nowrap;
                font-size: 1.1rem;
            }

            .limit-value {
                font-weight: 500;
                margin-left: 8px;
                white-space: nowrap;
                font-size: 1.1rem;
            }
            .limit-remaining {
                width: 100%;
                font-weight: 400;
                margin-left: 8px;
                white-space: nowrap;
                font-size: 0.9rem;
                color: var(--secondary-text-color);
                margin-top: 4px;
                text-align: center;
            }
        `}_openDialog(){this._showLimitForm=!0,this._selectedLimitType="time",this._hours=void 0,this._minutes=void 0,this._value=0,this.requestUpdate()}_closeDialog(){this._showLimitForm=!1,this.requestUpdate()}_handleTypeChange(t){const e=t.target;this._selectedLimitType=e.value,this._value=0,this.requestUpdate()}_handleHoursChange(t){const e=t.target.value;this._hours=""===e?void 0:parseInt(e,10),this.requestUpdate()}_handleMinutesChange(t){const e=t.target.value;this._minutes=""===e?void 0:parseInt(e,10),this.requestUpdate()}_handleValueChange(t){const e=t.target,i=parseInt(e.value)||0;"energy"===this._selectedLimitType?this._value=1e3*i:this._value=i,this.requestUpdate()}_handleSliderChange(t){const e=t.detail.value;"energy"===this._selectedLimitType?this._value=Math.round(1e3*e):this._value=e,this.requestUpdate()}_formatValue(t,e){if("energy"===e){return`${t/1e3} kWh`}return"soc"===e?`${t} %`:"range"===e?`${t} ${this.range_unit}`:String(t)}_formatRemainingValue(t,e){if("energy"===e){return`${Math.max(0,t/1e3-this.evse_energy).toFixed(2)} kWh`}if("soc"===e){return`${Math.max(0,t-this.evse_soc)} %`}if("range"===e){return`${Math.max(0,t-this.evse_range)} ${this.range_unit}`}return String(t)}_addLimit(){if("time"===this._selectedLimitType){const t=60*(this._hours??0)+(this._minutes??0);t>0&&this.setLimit&&this.setLimit("time",t)}else["energy","soc","range"].includes(this._selectedLimitType)&&this._value>0&&this.setLimit&&this.setLimit(this._selectedLimitType,this._value);this._showLimitForm=!1}_removeLimit(){this.delLimit&&this.delLimit()}_isAddButtonDisabled(){if("time"===this._selectedLimitType){const t=this._hours??0,e=this._minutes??0;return 0===t&&0===e}return!["energy","soc","range"].includes(this._selectedLimitType)||0===this._value}_formatTimeValue(t){const e=60*t;return[Math.floor(e/3600),Math.floor(e%3600/60)].map(t=>String(t).padStart(2,"0")).join(":")}render(){const t=!this.limit?.auto_release;return U`
            <div class="limit-container">
                ${this.limit&&this.limit.type?U`
                      <div class="limit-badge">
                          <ha-icon
                              icon="${"time"===this.limit.type?"mdi:clock":"range"===this.limit.type?"mdi:map-marker-distance":"soc"===this.limit.type?"mdi:battery-medium":"mdi:lightning-bolt"}"
                          ></ha-icon>
                          <span class="limit-type">
                                ${vt("limit",this.language)}
                          </span>
                          <span class="limit-value">
                              ${"time"===this.limit.type?this._formatTimeValue(this.limit.value):this._formatValue(this.limit.value,this.limit.type)}
                          </span>
                          ${t?U`
                            <ha-icon
                              class="lock-icon"
                              icon="mdi:lock"
                            ></ha-icon>
                          `:U`
                            <ha-icon
                              class="close-icon"
                              icon="mdi:close"
                              @click=${this._removeLimit}
                            ></ha-icon>
                          `}
                      </div>
                      <div class="limit-remaining">
                        ${"time"===this.limit.type?this._formatTimeValue(this.limit.value-this.evse_elapsed):this._formatRemainingValue(this.limit.value,this.limit.type)}
                        ${vt("left",this.language)}
                      </div>
                  `:U`
                      <button class="new-limit-btn" @click=${this._openDialog}>
                          <ha-icon icon="mdi:plus"></ha-icon>
                          ${vt("new limit",this.language)}
                      </button>
                  `}
            </div>

            <!-- Dialog is always rendered, visibility controlled by ?open -->
            <ha-dialog
                ?open=${this._showLimitForm}
                @closed=${this._closeDialog}
                .heading=${vt("add charging limit",this.language)}
            >
                <div class="dialog-content">
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
                                    >${vt("time",this.language)}</ha-list-item
                                >
                                <ha-list-item value=${"energy"}
                                    >${vt("energy",this.language)}</ha-list-item
                                >
                                ${this.feat_soc?U`
                                          <ha-list-item value=${"soc"}
                                              >${vt("battery",this.language)}</ha-list-item
                                          >
                                      `:D}
                                ${this.feat_range?U`
                                          <ha-list-item value=${"range"}
                                              >${vt("range",this.language)}</ha-list-item
                                          >
                                      `:D}
                            </ha-select>
                        </div>
                    </div>

                    ${"time"===this._selectedLimitType?U`
                    <div class="form-row">
                        <div class="time-inputs">
                            <div class="time-input">
                                <ha-textfield
                                    id="hours"
                                    type="number"
                                    inputmode="numeric"
                                    .value=${void 0===this._hours?"":String(this._hours)}
                                    .label=${vt("hours",this.language)}
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
                                    .label=${vt("minutes",this.language)}
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
                    `:D}
                    ${"time"!==this._selectedLimitType?U`
                    <div class="form-row">
                        <div class="slider-input">
                            <custom-slider
                                .min=${0}
                                .max=${"range"===this._selectedLimitType?this.range_max_value:"energy"===this._selectedLimitType?this.energy_max_value:100}
                                .step=${1}
                                .value=${"energy"===this._selectedLimitType?Math.round(this._value/1e3):this._value}
                                height="10"
                                .color=${"--limit-slider-color"}
                                .unit=${"range"===this._selectedLimitType?this.range_unit:"energy"===this._selectedLimitType?"kWh":"%"}
                                @value-changed=${this._handleSliderChange}
                            ></custom-slider>
                        </div>
                    </div>
                    `:D}
                </div> 
                <ha-button
                    slot="secondaryAction"
                    size="small"
                    appearance="plain"
                    @click=${this._closeDialog}
                >
                        ${vt("cancel",this.language)}
                </ha-button>
                <ha-button
                    size="small"
                    slot="primaryAction"
                    @click=${this._addLimit}
                    .disabled=${this._isAddButtonDisabled()}
                >
                    ${vt("add limit",this.language)}
                </ha-button>
            </ha-dialog>
        `}};_t([lt({attribute:!1})],wt.prototype,"limit",void 0),_t([lt({attribute:!1})],wt.prototype,"setLimit",void 0),_t([lt({attribute:!1})],wt.prototype,"delLimit",void 0),_t([lt({type:Boolean})],wt.prototype,"feat_soc",void 0),_t([lt({type:Boolean})],wt.prototype,"feat_range",void 0),_t([lt({type:Number})],wt.prototype,"energy_max_value",void 0),_t([lt({type:Number})],wt.prototype,"range_max_value",void 0),_t([lt({type:String})],wt.prototype,"range_unit",void 0),_t([lt({type:String})],wt.prototype,"language",void 0),_t([lt({type:Number})],wt.prototype,"evse_elapsed",void 0),_t([lt({type:Number})],wt.prototype,"evse_energy",void 0),_t([lt({type:Number})],wt.prototype,"evse_soc",void 0),_t([lt({type:Number})],wt.prototype,"evse_range",void 0),_t([ht()],wt.prototype,"_showLimitForm",void 0),_t([ht()],wt.prototype,"_selectedLimitType",void 0),_t([ht()],wt.prototype,"_hours",void 0),_t([ht()],wt.prototype,"_minutes",void 0),_t([ht()],wt.prototype,"_value",void 0),wt=_t([ot("limit-component")],wt);var xt=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let $t=class extends nt{constructor(){super(),this.label="",this.value=0,this.unit="",this.max_value=100,this.icon=""}static get styles(){return r`
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
                background-color: var(--state-icon-color, #03a9f4);
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
            .clickable {
                cursor: pointer;
                text-decoration: none;
            }
        `}render(){const t=this.max_value>0?100*this.value/this.max_value:0;return U`
            <div class="container clickable">
                <div class="label">
                    ${this.icon?U`<ha-icon class="icon" icon=${this.icon}>
                          </ha-icon>`:""}
                    ${this.label?this.label:""}
                </div>
                <div class="progress">
                    <div
                        class="progress-fill"
                        style="width: ${t}%"
                    ></div>
                    <div class="value">${this.value} ${this.unit}</div>
                </div>
            </div>
        `}};xt([lt({type:String})],$t.prototype,"label",void 0),xt([lt({type:Number})],$t.prototype,"value",void 0),xt([lt({type:String})],$t.prototype,"unit",void 0),xt([lt({type:Number})],$t.prototype,"max_value",void 0),xt([lt({type:String})],$t.prototype,"icon",void 0),$t=xt([ot("progress-bar")],$t);var St=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Et=class extends nt{constructor(){super(),this._isError=!1}static get styles(){return dt}_wifiIcon(t){return t>=-65?"mdi:wifi-strength-4":-65>t&&t>=-70?"mdi:wifi-strength-3":-70>t&&t>=-75?"mdi:wifi-strength-2":-75>t&&t>=-80?"mdi:wifi-strength-1":"mdi:wifi-strength-alert-outline"}render(){if(!this.hass||!this.config)return U``;const t=Number(this.wifiSignalEntity?.state),e=this.statusEntity?.state,i=this.vehicleConnectedEntity?.state,s=this.chargingStatusEntity?.state;return this._isError="vent_required"===s||"diode check failed"===s||"gfci fault"===s||"no ground"===s||"stuck relay"===s||"gfci self-test failure"===s||"over temperature"===s,U`
            <div class="status-icons">
                ${this.wifiSignalEntity?U`
                          <div
                              class="status-icon clickable"
                              @click=${()=>this.showMoreInfoHandler?.(this.config?.wifi_signal_strength_entity||"")||D}
                          >
                              <ha-icon
                                  icon="${this._wifiIcon(t)}"
                                  class="wifi-icon"
                              ></ha-icon>
                          </div>
                      `:""}

                <div
                    class="status-icon clickable"
                    @click=${()=>this.showMoreInfoHandler?.(this.config?.status_entity||"")||D}
                >
                    <ha-icon
                        icon="${this._isError?"mdi:alert-circle":"active"===e?"off"===i?"mdi:timer-sand":"mdi:lightning-bolt":"mdi:cancel"}"
                        class="${this._isError?"erroricon":"active"===e?"charging"===s?"charging":"active bg-active":"disabled bg-disabled"}"
                    ></ha-icon>
                </div>

                <div
                    class="status-icon clickable"
                    @click=${()=>this.showMoreInfoHandler?.(this.config?.vehicle_connected_entity||"")||D}
                >
                    <ha-icon
                        icon="${"off"===i?"mdi:car-off":"mdi:car"}"
                        class="${"off"===i?"disabled bg-disabled":"active bg-active"}"
                    ></ha-icon>
                </div>
            </div>
        `}};St([lt({attribute:!1})],Et.prototype,"hass",void 0),St([lt({attribute:!1})],Et.prototype,"config",void 0),St([lt({attribute:!1})],Et.prototype,"wifiSignalEntity",void 0),St([lt({attribute:!1})],Et.prototype,"statusEntity",void 0),St([lt({attribute:!1})],Et.prototype,"vehicleConnectedEntity",void 0),St([lt({attribute:!1})],Et.prototype,"chargingStatusEntity",void 0),St([lt({attribute:!1})],Et.prototype,"showMoreInfoHandler",void 0),St([ht()],Et.prototype,"_isError",void 0),Et=St([ot("status-icons")],Et);var kt=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Ct=class extends nt{constructor(){super(...arguments),this._isError=!1}static get styles(){return dt}render(){const t=this.chargingStatusEntity?.state,e=this.statusEntity?.state;this._isError="vent_required"===t||"diode check failed"===t||"gfci fault"===t||"no ground"===t||"stuck relay"===t||"gfci self-test failure"===t||"over temperature"===t;const i=this._isError?"badge-error":"disabled"===e?"badge-disabled":"charging"===t?"badge-charging":"badge-active";return U`
            <div class="status-badge ${i}">
                ${vt(t||"",this.language)}
            </div>
        `}};kt([lt({attribute:!1})],Ct.prototype,"statusEntity",void 0),kt([lt({attribute:!1})],Ct.prototype,"chargingStatusEntity",void 0),kt([lt({attribute:!1})],Ct.prototype,"language",void 0),kt([ht()],Ct.prototype,"_isError",void 0),Ct=kt([ot("status-heading")],Ct);var At=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Mt=class extends nt{constructor(){super(),this.localTimeElapsed=0}static get styles(){return dt}render(){return this.hass&&this.config&&this.convertTimeHandler?U`
            <div class="grid-container">
                ${this.powerEntity?U`
                          <div class="grid-item clickable"
                           @click=${()=>this.showMoreInfoHandler?.(this.config?.power_entity)||D}
                           >
                              <div class="grid-item-label">
                                  ${vt("power",this.language)}
                              </div>
                              <div class="grid-item-value">
                                  ${this.hass.formatEntityState(this.powerEntity)}
                              </div>
                          </div>
                      `:U` <div class="grid-item">
                          <div class="grid-item-label">
                              ${vt("power",this.language)}
                          </div>
                          <div class="grid-item-value">0 W</div>
                      </div>`}
                ${this.currentEntity?U`
                          <div class="grid-item clickable"
                          @click=${()=>this.showMoreInfoHandler?.(this.config?.current_entity)||D}
                          >
                              <div class="grid-item-label">
                                  ${vt("current",this.language)}
                              </div>
                              <div class="grid-item-value clickable">
                                  ${this.hass.formatEntityState(this.currentEntity)}
                              </div>
                          </div>
                      `:U` <div class="grid-item">
                          <div class="grid-item-label">
                              ${vt("current",this.language)}
                          </div>
                          <div class="grid-item-value">0 A</div>
                      </div>`}
                ${this.sessionEnergyEntity?U`
                              <div class="grid-item clickable"
                               @click=${()=>this.showMoreInfoHandler?.(this.config?.session_energy_entity)||D}
                              >
                                  <div class="grid-item-label">
                                      ${vt("session",this.language)}
                                  </div>
                                  <div
                                      class="grid-item-value clickable">
                                      ${this.hass.formatEntityState(this.sessionEnergyEntity)}
                                  </div>
                              </div>
                          `:U`
                              <div class="grid-item">
                                  <div class="grid-item-label">
                                      ${vt("session",this.language)}
                                  </div>
                                  <div class="grid-item-value">0 kWh</div>
                              </div>
                          `}
                ${this.timeElapsedEntity?U`
                          <div class="grid-item">
                              <div class="grid-item-label">
                                  ${vt("elapsed",this.language)}
                              </div>
                              <div class="grid-item-value">
                                  ${this.convertTimeHandler(this.localTimeElapsed||0)}
                              </div>
                          </div>
                      `:U` <div class="grid-item">
                          <div class="grid-item-label">
                              ${vt("elapsed",this.language)}
                          </div>
                          <div class="grid-item-value">00:00:00</div>
                      </div>`}
            </div>
        `:U``}};At([lt({attribute:!1})],Mt.prototype,"hass",void 0),At([lt({attribute:!1})],Mt.prototype,"config",void 0),At([lt({attribute:!1})],Mt.prototype,"powerEntity",void 0),At([lt({attribute:!1})],Mt.prototype,"currentEntity",void 0),At([lt({attribute:!1})],Mt.prototype,"sessionEnergyEntity",void 0),At([lt({attribute:!1})],Mt.prototype,"timeElapsedEntity",void 0),At([lt({type:Number})],Mt.prototype,"localTimeElapsed",void 0),At([lt({type:String})],Mt.prototype,"language",void 0),At([lt({attribute:!1})],Mt.prototype,"showMoreInfoHandler",void 0),At([lt({attribute:!1})],Mt.prototype,"convertTimeHandler",void 0),Mt=At([ot("info-grid")],Mt);var zt=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Ot=class extends nt{static get styles(){return dt}render(){if(!this.config)return U``;const t=this.config.feat_soc&&this.vehicleBatteryLevelEntity,e=this.config.feat_range&&this.vehicleRangeEntity;return t||e?U`
            <div class="vehicle">
                ${t?U`
                          <progress-bar
                              value=${Number(this.vehicleBatteryLevelEntity?.state)}
                              unit="%"
                              icon="mdi:battery-medium"
                              @click=${()=>this.showMoreInfoHandler?.(this.config?.vehicle_battery_level_entity||"")||D}
                          ></progress-bar> 
                      `:""}
                ${e?U`
                          <progress-bar
                              value=${Number(this.vehicleRangeEntity?.state)}
                              max_value=${this.config?.feat_max_range||600}
                              unit=${this.vehicleRangeEntity?.attributes.unit_of_measurement||D}
                              icon="mdi:map-marker-distance"
                              @click=${()=>this.showMoreInfoHandler?.(this.config?.vehicle_range_entity||"")||D}
                          ></progress-bar>
                      `:""}
            </div>
        `:U``}};zt([lt({attribute:!1})],Ot.prototype,"config",void 0),zt([lt({attribute:!1})],Ot.prototype,"vehicleBatteryLevelEntity",void 0),zt([lt({attribute:!1})],Ot.prototype,"vehicleRangeEntity",void 0),zt([lt({attribute:!1})],Ot.prototype,"showMoreInfoHandler",void 0),Ot=zt([ot("vehicle-info")],Ot);var jt=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Lt=class extends nt{constructor(){super(),this._handleActiveClick=this._handleActiveClick.bind(this),this._handleAutoClick=this._handleAutoClick.bind(this),this._handleDisabledClick=this._handleDisabledClick.bind(this)}static get styles(){return dt}_handleActiveClick(){const t=this.config?.override_entity;this.selectOverrideStateHandler&&"string"==typeof t&&t&&this.selectOverrideStateHandler(t,"active")}_handleAutoClick(){const t=this.config?.override_entity;this.selectOverrideStateHandler&&"string"==typeof t&&t&&this.selectOverrideStateHandler(t,"auto")}_handleDisabledClick(){const t=this.config?.override_entity;this.selectOverrideStateHandler&&"string"==typeof t&&t&&this.selectOverrideStateHandler(t,"disabled")}render(){if(!this.config||!this.overrideEntity)return U``;const t=this.overrideEntity?.state,e=this.chargingStatusEntity?.state;return U`
            <div class="override-controls">
                <div class="override-row">
                    <div
                        class="override-button ${"active"===t?"active":""}"
                        data-option="active"
                        @click=${this._handleActiveClick}
                    >
                        <ha-icon
                            icon="mdi:lightning-bolt"
                            class="${"active"===t&&"charging"===e?"charging":""}"
                        ></ha-icon>
                    </div>
                    <div
                        class="override-button ${"auto"===t?"active":""}"
                        data-option="auto"
                        @click=${this._handleAutoClick}
                    >
                        <ha-icon
                            icon="mdi:robot"
                            class="${"auto"===t&&"charging"===e?"charging":""}"
                        ></ha-icon>
                    </div>
                    <div
                        class="override-button ${"disabled"===t?"active":""}"
                        data-option="disabled"
                        @click=${this._handleDisabledClick}
                    >
                        <ha-icon icon="mdi:cancel"></ha-icon>
                    </div>
                </div>
            </div>
        `}};jt([lt({attribute:!1})],Lt.prototype,"config",void 0),jt([lt({attribute:!1})],Lt.prototype,"overrideEntity",void 0),jt([lt({attribute:!1})],Lt.prototype,"chargingStatusEntity",void 0),jt([lt({attribute:!1})],Lt.prototype,"selectOverrideStateHandler",void 0),Lt=jt([ot("override-controls")],Lt);var Vt=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Nt=class extends nt{constructor(){super(...arguments),this.entities=[]}static get styles(){return dt}render(){return this.hass&&this.entities&&0!==this.entities.length?U`
            <div>
                ${this.entities.map(t=>U`
                        <div class="other-entities-container clickable"
                        @click=${()=>this.showMoreInfoHandler?.(t.id||"")}>
                            <div class="entity-row">
                                <div class="entity-title">
                                    ${null!=t.icon?U`
                                          <div class="entity-icon">
                                              <ha-icon
                                                  icon=${t.icon}
                                              ></ha-icon>
                                          </div>
                                      `:U`<div class="entity-icon"></div>`}
                                <div class="entity-label">
                                    ${t.name||t.id||D}
                                </div>
                            </div>
                                <div
                                    class="entity-value clickable"
                                    data-entity-id=${t.id??""}
                                >
                                    ${t.value??""}
                            </div>
                        </div>
                    </div>
                `)}
            </div>
        `:U``}};Vt([lt({attribute:!1})],Nt.prototype,"hass",void 0),Vt([lt({attribute:!1})],Nt.prototype,"entities",void 0),Vt([lt({attribute:!1})],Nt.prototype,"showMoreInfoHandler",void 0),Nt=Vt([ot("optional-entities")],Nt);var Pt=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};class Tt extends nt{constructor(){super(...arguments),this.state1Value="off",this.state2Value="on",this.currentState=this.state1Value,this.iconState1="mdi:toggle-switch-off-outline",this.colorState1="var(--primary-text-color)",this.iconState2="mdi:toggle-switch",this.colorState2="var(--primary-color)",this.titleState1="Switch to state 2",this.titleState2="Switch to state 1",this.heigth=0,this.fontSize="1rem"}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleClick)}_handleClick(){const t=this.currentState===this.state1Value?this.state2Value:this.state1Value;this.clickHandler&&this.clickHandler(t)}render(){const t="eco"===this.currentState,e=t?this.iconState1:this.iconState2,i=t?this.colorState1:this.colorState2,s=t?this.iconState2:this.iconState1,n=t?this.colorState2:this.colorState1,r=t?this.titleState1:this.titleState2,o=.7*this.heigth||18,a=`\n            :host {\n                --toggle-icon: "${e}";\n                --toggle-color: ${i};\n                --hover-icon: "${s}";\n                --hover-color: ${n};\n                --font-size: ${this.fontSize};\n                background-color: ${i};\n                ${this.heigth?`height:${this.heigth}px`:""};\n                font-size: var(--font-size);\n            }\n            :host:active {\n                font-size: calc(var(--font-size) * 0.8);\n\n            }\n            :host ha-icon {\n                color: var(--primary-text-color);\n                --mdc-icon-size: ${o}px;\n            }\n        `;return U`
            <style>
                ${a}
            </style>
            <ha-icon
                class="current-icon"
                .icon=${e}
                .title=${r}
            ></ha-icon>
            <ha-icon
                class="hover-icon"
                .icon=${s}
                .title=${r}
            ></ha-icon>
            <span class='label current-label'>${vt(String(this.currentState),this.language)}</span>
            <span class='label hover-label'>${this.currentState==this.state1Value?vt(String(this.state2Value),this.language):vt(String(this.state1Value),this.language)}</span>
        `}}Tt.styles=r`
        :host {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            border-radius: 4px;
            box-sizing: border-box;
            padding: 6px;
            padding-bottom: 4px;
            line-height: 1;
            border: 0px;
            border-color: var(--divider-color);
            /* transition: all 0.2s ease-in; */
        }
        .label {
            margin-left: 5px;
            color: var(--primary-text-color);
        }

        .hover-icon, .hover-label {
            display: none;
        }
        .current-icon, .current-label {
            display: inline;
        }

        @media (hover: hover) {
            :host(:hover) {
                background-color: transparent !important;
                border: 1px solid var(--divider-color) !important;
            }
            :host(:hover) .hover-icon, :host(:hover) .hover-label {
                display: inline;
                color: var(--hover-color) !important;
            }
            :host(:hover) .current-icon, :host(:hover) .current-label {
                display: none;
            }
            :host(:hover) ha-icon {
                color: var(--hover-color) !important;
            }
        }
    `,Pt([lt({attribute:!1})],Tt.prototype,"hass",void 0),Pt([lt({type:String})],Tt.prototype,"state1Value",void 0),Pt([lt({type:String})],Tt.prototype,"state2Value",void 0),Pt([lt({type:String})],Tt.prototype,"currentState",void 0),Pt([lt({attribute:!1})],Tt.prototype,"clickHandler",void 0),Pt([lt({type:String})],Tt.prototype,"iconState1",void 0),Pt([lt({type:String})],Tt.prototype,"colorState1",void 0),Pt([lt({type:String})],Tt.prototype,"iconState2",void 0),Pt([lt({type:String})],Tt.prototype,"colorState2",void 0),Pt([lt({type:String})],Tt.prototype,"titleState1",void 0),Pt([lt({type:String})],Tt.prototype,"titleState2",void 0),Pt([lt({type:Number})],Tt.prototype,"heigth",void 0),Pt([lt({type:String})],Tt.prototype,"fontSize",void 0),Pt([lt({type:String})],Tt.prototype,"language",void 0),customElements.define("toggle-button",Tt);var Ht=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};const It=["ha-form","ha-icon","ha-icon-button","ha-selector","ha-textfield","ha-icon-picker","ha-icon-button","ha-entity-picker","ha-select","ha-dialog","ha-sortable","ha-svg-icon","ha-alert","ha-button"];class Rt extends nt{constructor(){super(),this._localTimeElapsed=0,this._lastEntityTime=0,this._timeUpdateInterval=null,this._isCharging=!1,this._limit=null,this._hasLimit=!1,this._integrationVersionOk=void 0,this._selectOverrideState=(t,e)=>{this._callService("select","select_option",{entity_id:t,option:e.toString()})},this._setLimit=(t,e)=>{this._callService("openevse","set_limit",{device_id:this.config?.device_id,type:t,value:e,auto_release:!0})},this._delLimit=()=>{this._callService("openevse","clear_limit",{device_id:this.config?.device_id})},this._showMoreInfo=t=>{if(!t)return;const e=new Event("hass-more-info",{bubbles:!0,composed:!0});e.detail={entityId:t},this.dispatchEvent(e)},this._updateSlider=t=>{this.config?.charge_rate_entity&&this._callService("number","set_value",{entity_id:this.config.charge_rate_entity,value:t.detail.value})},this._showMoreInfo=this._showMoreInfo.bind(this),this._convertTime=this._convertTime.bind(this),this._selectOverrideState=this._selectOverrideState.bind(this),this._setLimit=this._setLimit.bind(this),this._delLimit=this._delLimit.bind(this),this._toggleDivertMode=this._toggleDivertMode.bind(this)}disconnectedCallback(){super.disconnectedCallback(),this._timeUpdateInterval&&(clearInterval(this._timeUpdateInterval),this._timeUpdateInterval=null)}async firstUpdated(){try{await(async t=>{const e=t||pt;try{if(e.every(t=>customElements.get(t)))return;await Promise.race([customElements.whenDefined("partial-panel-resolver"),new Promise((t,e)=>setTimeout(()=>e(new Error("Timeout waiting for partial-panel-resolver")),1e4))]);const t=document.createElement("partial-panel-resolver");if(!t)throw new Error("Failed to create partial-panel-resolver element");if(t.hass={panels:[{url_path:"tmp",component_name:"config"}]},"function"!=typeof t._updateRoutes)throw new Error("partial-panel-resolver does not have _updateRoutes method");if(t._updateRoutes(),!t.routerOptions?.routes?.tmp?.load)throw new Error("Failed to create tmp route in partial-panel-resolver");await Promise.race([t.routerOptions.routes.tmp.load(),new Promise((t,e)=>setTimeout(()=>e(new Error("Timeout loading tmp route")),1e4))]),await Promise.race([customElements.whenDefined("ha-panel-config"),new Promise((t,e)=>setTimeout(()=>e(new Error("Timeout waiting for ha-panel-config")),1e4))]);const i=document.createElement("ha-panel-config");if(!i)throw new Error("Failed to create ha-panel-config element");if(!i.routerOptions?.routes?.automation?.load)throw new Error("ha-panel-config does not have automation route");await Promise.race([i.routerOptions.routes.automation.load(),new Promise((t,e)=>setTimeout(()=>e(new Error("Timeout loading automation components")),1e4))]);const s=e.filter(t=>!customElements.get(t));if(s.length>0)throw new Error(`Failed to load components: ${s.join(", ")}`)}catch(t){console.error("Error loading Home Assistant form components:",t);try{if(window.customElements&&window.customElements.get("home-assistant")){console.log("Attempting fallback loading method for HA components");const t=new CustomEvent("ha-request-load-components",{detail:{components:e},bubbles:!0,composed:!0});document.dispatchEvent(t)}}catch(t){console.error("Fallback loading method failed:",t)}}})(It)}catch(t){console.error("Error loading ha-components:",t)}if(this._lang=this.hass?.language||"en",this.hass)try{let t=await(async t=>{try{return(await t.callWS({type:"manifest/get",integration:"openevse"})).version}catch(t){return console.error("Error fetching OpenEVSE integration manifest:",t),"0"}})(this.hass);if("0.0.0-dev"==t&&(t="9.9"),"0"===t)console.warn("OpenEVSE integration not found or version could not be determined."),this._integrationVersionOk=!1;else{const e=((t,e)=>{const i=t.split(".").map(Number),s=e.split(".").map(Number);for(let t=0;t<Math.max(i.length,s.length);t++){const e=i[t]||0,n=s[t]||0;if(e>n)return 1;if(e<n)return-1}return 0})(t,gt);this._integrationVersionOk=e>=0,this._integrationVersionOk||console.warn(`OpenEVSE integration version ${t} is below the required minimum ${gt}.`)}}catch(t){console.error("Error checking OpenEVSE integration version:",t),this._integrationVersionOk=!1}else console.warn("Hass object not available during firstUpdated for version check."),this._integrationVersionOk=!1}getGridOptions(){return{columns:12,max_columns:12,min_columns:9}}_setupTimeInterval(){this._timeUpdateInterval&&(clearInterval(this._timeUpdateInterval),this._timeUpdateInterval=null),this._isCharging&&(this._timeUpdateInterval=window.setInterval(()=>{this._localTimeElapsed+=1/60},1e3))}updated(t){if(t.has("hass")&&this.hass){if(this._lang=this.hass.language||"en",this.config&&this.config.charging_status_entity&&this.hass.states[this.config.charging_status_entity]){const t="charging"===this.hass.states[this.config.charging_status_entity].state;t!==this._isCharging&&(this._isCharging=t,this._setupTimeInterval())}if(this.config&&this.config.time_elapsed_entity&&this.hass.states[this.config.time_elapsed_entity]){const t=this.hass.states[this.config.time_elapsed_entity],e=parseFloat(t.state);isNaN(e)||e===this._lastEntityTime||(this._lastEntityTime=e,this._localTimeElapsed=e)}if(this.config&&this.config.limit_active_entity&&this.hass.states[this.config.limit_active_entity]){const t="on"===this.hass.states[this.config.limit_active_entity].state;t!=this._hasLimit&&(this._hasLimit=t,this.config.device_id&&this._getLimit().then(t=>{this._limit=t}))}}if(t.has("config")&&!t.has("hass")&&this.config&&this.hass){if(this.config.charging_status_entity&&this.hass.states[this.config.charging_status_entity]){const t=this.hass.states[this.config.charging_status_entity];this._isCharging="charging"===t.state}if(this.config.time_elapsed_entity&&this.hass.states[this.config.time_elapsed_entity]){const t=this.hass.states[this.config.time_elapsed_entity];t&&(this._lastEntityTime=parseFloat(t.state),this._localTimeElapsed=this._lastEntityTime,this._isCharging&&this._setupTimeInterval())}}}static getConfigElement(){return document.createElement("openevse-card-editor")}static getStubConfig(){return{header:!0,name:"OpenEVSE",feat_soc:!1,feat_range:!1,feat_max_range:600,feat_max_energy:100,device_id:"",override_entity:"",status_entity:"",power_entity:"",current_entity:"",charge_rate_entity:"",vehicle_connected_entity:"",charging_status_entity:"",session_energy_entity:"",time_elapsed_entity:"",wifi_signal_strength_entity:"",limit_active_entity:"",divert_active_entity:"",divert_mode_entity:"",pv_charge_rate_entity:"",vehicle_battery_level_entity:"",vehicle_range_entity:"",optional_entities:[]}}static get styles(){return dt}setConfig(t){this.config=t}getCardSize(){return 3}_callService(t,e,i,s={}){if(this.hass)try{return this.hass.callService(t,e,i,void 0,!1,s.awaitResponse??!1)}catch(i){console.error(`Error calling service ${t}.${e}`,i)}}_toggleDivertMode(){const t=this._getEntityState("divert_mode_entity");if(!t)return;const e="fast"===t.state?"eco":"fast";this._callService("select","select_option",{entity_id:this.config?.divert_mode_entity,option:e})}async _getLimit(){if(!this.hass)return null;try{const t=await this._callService("openevse","get_limit",{device_id:this.config?.device_id},{awaitResponse:!0});return t?.response?t.response:null}catch(t){return console.error("Error while getting limit",t),null}}_getEntityState(t){const e=this.config?.[t];return"string"==typeof e&&e&&this.hass?.states&&this.hass.states[e]||null}_convertSeconds(t){if(isNaN(t)||t<0||void 0===t)return"--:--:--";return[Math.floor(t/3600),Math.floor(t%3600/60),Math.floor(t%60)].map(t=>String(t).padStart(2,"0")).join(":")}_convertTime(t){if(isNaN(t)||t<0)return"00:00:00";const e=Math.round(60*t);return this._convertSeconds(e)}_getOptionalEntities(){return this.config?.optional_entities?.map(t=>{let e,i=null;if("string"==typeof t)e=t;else if("object"==typeof t&&null!==t){const s=t.entity,n=t.id;e=s??n,i=t}if(!e||"string"!=typeof e)return{name:"Invalid Config",value:null,icon:void 0,id:void 0};const s=this.hass?.states[e],n=s?.attributes,r=n?.friendly_name,o=n?.icon;return{name:i?.name??r??e,value:s?this.hass?.formatEntityState(s)??null:null,icon:i?.icon??o,id:e}}).filter(t=>void 0!==t.id)??[]}render(){if(!this.hass||!this.config)return U``;const t=this._getEntityState("override_entity"),e=this._getEntityState("status_entity"),i=this._getEntityState("power_entity"),s=this._getEntityState("current_entity"),n=this._getEntityState("charge_rate_entity"),r=this._getEntityState("vehicle_connected_entity"),o=this._getEntityState("charging_status_entity"),a=this._getEntityState("session_energy_entity"),c=this._getEntityState("time_elapsed_entity"),l=this._getEntityState("wifi_signal_strength_entity"),h=this._getEntityState("divert_active_entity"),d=this._getEntityState("divert_mode_entity"),u=this._getEntityState("pv_charge_rate_entity"),v=this._getEntityState("vehicle_battery_level_entity"),p=this._getEntityState("vehicle_range_entity"),g=this._getOptionalEntities();return U`
            <ha-card>
                ${!1===this._integrationVersionOk?U`
                          <ha-alert
                              alert-type="warning"
                              title="${vt("warning",this._lang)}"
                          >
                              ${vt("integration_missing_or_outdated",this._lang).replace("{min_version}",gt)}
                              Check
                              <a href="https://github.com/firstof9/openevse"
                                  >here</a
                              >
                          </ha-alert>
                      `:D}
                ${this.config.header?U`<h1 class="card-header">
                          ${this.config.name||"OpenEVSE"}
                      </h1>`:D}
                <div class="card-content">
                    <div class="evse-states">
                        <status-icons
                            .hass=${this.hass}
                            .config=${this.config}
                            .wifiSignalEntity=${l}
                            .statusEntity=${e}
                            .vehicleConnectedEntity=${r}
                            .chargingStatusEntity=${o}
                            .showMoreInfoHandler=${this._showMoreInfo}
                        ></status-icons>
                        <div class="status-header-line">
                            ${"on"==h?.state&&d?U`
                            <toggle-button
                                .hass=${this.hass}
                                .label=${"eco"==d.state?vt("eco",this._lang):vt("fast",this._lang)}
                                .heigth=${24}
                                .currentState=${d.state}
                                .state1Value=${"eco"}
                                .state2Value=${"fast"}
                                .iconState1=${"mdi:solar-panel"}
                                .colorState1=${"var(--evse-active-color)"}
                                .iconState2=${"mdi:transmission-tower-export"}
                                .colorState2=${"var(--info-color)"}
                                .titleState1=${vt("switch to fast mode",this._lang)}
                                .titleState2=${vt("switch to eco mode",this._lang)}
                                .fintSize=${"14px"}
                                .clickHandler=${this._toggleDivertMode}
                                .language=${this._lang}
                            ></toggle-button>
                            `:D}
                             <status-heading
                                .statusEntity=${e}
                                .chargingStatusEntity=${o}
                                .language=${this._lang}
                            ></status-heading>
                        </div>
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
                        .showMoreInfoHandler=${this._showMoreInfo}
                    ></vehicle-info>
                    <div class="override-container">
                        <div class="override-center">
                            <override-controls
                                .config=${this.config}
                                .overrideEntity=${t}
                                .chargingStatusEntity=${o}
                                .selectOverrideStateHandler=${this._selectOverrideState}
                            ></override-controls>
                        </div>
                        ${"on"==h?.state&&d?U`
                        <div class="divert-toggle">
                            
                        </div>
                        `:D}
                    </div>
                    <div class="container">
                        <evse-slider
                            .min=${"number"==typeof n?.attributes.min?n.attributes.min:0}
                            .max=${"number"==typeof n?.attributes.max?n.attributes.max:32}
                            .step=${"number"==typeof n?.attributes.step?n.attributes.step:1}
                            .value=${Number("on"==h?.state&&"eco"==d?.state?u?.state:n?.state||0)}
                            .unit=${"string"==typeof n?.attributes.unit_of_measurement?n.attributes.unit_of_measurement:"A"}
                            .label=${vt("charge rate",this._lang)}
                            .disabled=${!n||"on"==h?.state&&"eco"==d?.state}
                            @value-changed=${this._updateSlider}
                        ></evse-slider>
                    </div>
                    <!-- Limit -->
                    ${this.config.limit_active_entity?U`
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
                                      .evse_elapsed=${Number(this._localTimeElapsed)||0}
                                      .evse_energy=${Number(a?.state)||0}
                                      .evse_soc=${Number(v?.state)||0}
                                      .evse_range=${Number(p?.state)||0}
                                      .language=${this._lang}
                                  ></limit-component>
                              </div>
                          `:D}

                    <!-- End of Limit -->
                    <optional-entities
                        .hass=${this.hass}
                        .entities=${g}
                        .showMoreInfoHandler=${this._showMoreInfo}
                    ></optional-entities>
                </div>
            </ha-card>
        `}}Ht([lt({attribute:!1})],Rt.prototype,"hass",void 0),Ht([lt({attribute:!1})],Rt.prototype,"config",void 0),Ht([ht()],Rt.prototype,"_lang",void 0),Ht([ht()],Rt.prototype,"_localTimeElapsed",void 0),Ht([ht()],Rt.prototype,"_lastEntityTime",void 0),Ht([ht()],Rt.prototype,"_timeUpdateInterval",void 0),Ht([ht()],Rt.prototype,"_isCharging",void 0),Ht([ht()],Rt.prototype,"_limit",void 0),Ht([ht()],Rt.prototype,"_hasLimit",void 0),Ht([ht()],Rt.prototype,"_integrationVersionOk",void 0);var Ut=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function Wt(t,e){return t===e||!(!Ut(t)||!Ut(e))}function Dt(t,e){if(t.length!==e.length)return!1;for(var i=0;i<t.length;i++)if(!Wt(t[i],e[i]))return!1;return!0}function qt(t,e){void 0===e&&(e=Dt);var i=null;function s(){for(var s=[],n=0;n<arguments.length;n++)s[n]=arguments[n];if(i&&i.lastThis===this&&e(s,i.lastArgs))return i.lastResult;var r=t.apply(this,s);return i={lastResult:r,lastArgs:s,lastThis:this},r}return s.clear=function(){i=null},s}function Ft(t,e,i,s,n,r={},o="en"){return{name:t,selector:{entity:{domain:e,include_entities:(Array.isArray(e)?e:[e]).flatMap(t=>r[t]||[])}},label:vt(i,o),helper_text:vt(s,o),required:n}}const Bt=qt((t={},e="en")=>[...[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}},required:!1,label:vt("header title",e)},{name:"header",selector:{boolean:{}},label:vt("display header",e)}]},{type:"grid",name:"",label:vt("features",e),schema:[{name:"feat_soc",selector:{boolean:{}},label:vt("enable vehicle battery",e)},{name:"feat_range",selector:{boolean:{}},label:vt("enable vehicle range",e)}]},{type:"grid",name:"",label:vt("limits settings",e),schema:[{name:"feat_max_energy",selector:{number:{}},required:!1,label:vt("maximum charge energy",e)},{name:"feat_max_range",selector:{number:{}},required:!1,label:vt("maximum vehicle range",e)}]},{name:"device_id",selector:{device:{integration:"openevse",manufacturer:"OpenEVSE"}},label:vt("openevse device",e),helper_text:vt("select your openevse device",e),required:!0}],...[Ft("override_entity",["input_select","select"],"override state","select openevse.override_state entity",!0,t,e),Ft("status_entity","sensor","station status","select openevse.station_status entity",!0,t,e),Ft("power_entity","sensor","current power usage","select openevse.current_power_usage entity",!0,t,e),Ft("current_entity","sensor","charging current","select openevse.charging_current entity",!0,t,e),Ft("vehicle_connected_entity","binary_sensor","vehicle connected","select openevse.vehicle_connected entity",!0,t,e),Ft("charging_status_entity","sensor","charging status","select openevse.charging_status entity",!0,t,e),Ft("charge_rate_entity","number","charge rate","select openevse.charge_rate entity",!0,t,e),Ft("session_energy_entity","sensor","session energy","select openevse.usage_this_session entity",!0,t,e),Ft("time_elapsed_entity","sensor","charge time elapsed","select openevse.charge_time_elapsed entity",!0,t,e),Ft("wifi_signal_strength_entity","sensor","wifi signal","select openevse_wifi_signal_strength entity",!1,t,e),Ft("limit_active_entity","binary_sensor","limit active","select openevse_limit_active entity",!1,t,e),Ft("divert_active_entity","binary_sensor","divert active","select openevse_divert_active entity",!1,t,e),Ft("divert_mode_entity","select","divert mode","select openevse_divert_mode",!1,t,e),Ft("pv_charge_rate_entity","sensor","Divert pv charge rate","select openevse_pv_charge_rate entity",!1,t,e),Ft("vehicle_range_entity","sensor","vehicle range","select openevse_vehicle_range entity",!1,t,e),Ft("vehicle_battery_level_entity","sensor","battery level","select openevse_vehicle_battery_level entity",!1,t,e)]]);qt((t={},e="en")=>[{name:"id",selector:{entity:{domain:["sensor","binary_sensor"],include_entities:[...t.sensor||[],...t.binary_sensor||[]]}},label:vt("entity",e)},{name:"name",selector:{text:{}},label:vt("name",e)},{name:"icon",selector:{icon:{}},label:vt("icon",e)}]);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Zt=globalThis,Kt=Zt.ShadowRoot&&(void 0===Zt.ShadyCSS||Zt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Gt=Symbol(),Jt=new WeakMap;let Yt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Gt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Kt&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=Jt.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Jt.set(e,t))}return t}toString(){return this.cssText}};const Qt=Kt?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new Yt("string"==typeof t?t:t+"",void 0,Gt))(e)})(t):t,{is:Xt,defineProperty:te,getOwnPropertyDescriptor:ee,getOwnPropertyNames:ie,getOwnPropertySymbols:se,getPrototypeOf:ne}=Object,re=globalThis,oe=re.trustedTypes,ae=oe?oe.emptyScript:"",ce=re.reactiveElementPolyfillSupport,le=(t,e)=>t,he={toAttribute(t,e){switch(e){case Boolean:t=t?ae:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},de=(t,e)=>!Xt(t,e),ue={attribute:!0,type:String,converter:he,reflect:!1,useDefault:!1,hasChanged:de};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),re.litPropertyMetadata??=new WeakMap;let ve=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ue){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&te(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=ee(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const r=s?.call(this);n?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ue}static _$Ei(){if(this.hasOwnProperty(le("elementProperties")))return;const t=ne(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(le("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(le("properties"))){const t=this.properties,e=[...ie(t),...se(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(Qt(t))}else void 0!==t&&e.push(Qt(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(Kt)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),s=Zt.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:he).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:he;this._$Em=s;const r=n.fromAttribute(e,t.type);this[s]=r??this._$Ej?.get(s)??r,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const s=this.constructor,n=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??de)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==n||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};ve.elementStyles=[],ve.shadowRootOptions={mode:"open"},ve[le("elementProperties")]=new Map,ve[le("finalized")]=new Map,ce?.({ReactiveElement:ve}),(re.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pe=globalThis,ge=pe.trustedTypes,me=ge?ge.createPolicy("lit-html",{createHTML:t=>t}):void 0,fe="$lit$",ye=`lit$${Math.random().toFixed(9).slice(2)}$`,be="?"+ye,_e=`<${be}>`,we=document,xe=()=>we.createComment(""),$e=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Se=Array.isArray,Ee="[ \t\n\f\r]",ke=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ce=/-->/g,Ae=/>/g,Me=RegExp(`>|${Ee}(?:([^\\s"'>=/]+)(${Ee}*=${Ee}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ze=/'/g,Oe=/"/g,je=/^(?:script|style|textarea|title)$/i,Le=(t,...e)=>({_$litType$:1,strings:t,values:e}),Ve=Symbol.for("lit-noChange"),Ne=Symbol.for("lit-nothing"),Pe=new WeakMap,Te=we.createTreeWalker(we,129);function He(t,e){if(!Se(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==me?me.createHTML(e):e}class Ie{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[c,l]=((t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":3===e?"<math>":"",o=ke;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,h=0;for(;h<i.length&&(o.lastIndex=h,c=o.exec(i),null!==c);)h=o.lastIndex,o===ke?"!--"===c[1]?o=Ce:void 0!==c[1]?o=Ae:void 0!==c[2]?(je.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=Me):void 0!==c[3]&&(o=Me):o===Me?">"===c[0]?(o=n??ke,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?Me:'"'===c[3]?Oe:ze):o===Oe||o===ze?o=Me:o===Ce||o===Ae?o=ke:(o=Me,n=void 0);const d=o===Me&&t[e+1].startsWith("/>")?" ":"";r+=o===ke?i+_e:l>=0?(s.push(a),i.slice(0,l)+fe+i.slice(l)+ye+d):i+ye+(-2===l?e:d)}return[He(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(t,e);if(this.el=Ie.createElement(c,i),Te.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Te.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(fe)){const e=l[r++],i=s.getAttribute(t).split(ye),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?qe:"?"===o[1]?Fe:"@"===o[1]?Be:De}),s.removeAttribute(t)}else t.startsWith(ye)&&(a.push({type:6,index:n}),s.removeAttribute(t));if(je.test(s.tagName)){const t=s.textContent.split(ye),e=t.length-1;if(e>0){s.textContent=ge?ge.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],xe()),Te.nextNode(),a.push({type:2,index:++n});s.append(t[e],xe())}}}else if(8===s.nodeType)if(s.data===be)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(ye,t+1));)a.push({type:7,index:n}),t+=ye.length-1}n++}}static createElement(t,e){const i=we.createElement("template");return i.innerHTML=t,i}}function Re(t,e,i=t,s){if(e===Ve)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const r=$e(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=Re(t,n._$AS(t,e.values),n,s)),e}let Ue=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??we).importNode(e,!0);Te.currentNode=s;let n=Te.nextNode(),r=0,o=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new We(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new Ze(n,this,t)),this._$AV.push(e),a=i[++o]}r!==a?.index&&(n=Te.nextNode(),r++)}return Te.currentNode=we,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}};class We{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=Ne,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Re(this,t,e),$e(t)?t===Ne||null==t||""===t?(this._$AH!==Ne&&this._$AR(),this._$AH=Ne):t!==this._$AH&&t!==Ve&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>Se(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Ne&&$e(this._$AH)?this._$AA.nextSibling.data=t:this.T(we.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Ie.createElement(He(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Ue(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Pe.get(t.strings);return void 0===e&&Pe.set(t.strings,e=new Ie(t)),e}k(t){Se(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new We(this.O(xe()),this.O(xe()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class De{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=Ne,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Ne}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=Re(this,t,e,0),r=!$e(t)||t!==this._$AH&&t!==Ve,r&&(this._$AH=t);else{const s=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=Re(this,s[i+o],e,o),a===Ve&&(a=this._$AH[o]),r||=!$e(a)||a!==this._$AH[o],a===Ne?t=Ne:t!==Ne&&(t+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!s&&this.j(t)}j(t){t===Ne?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class qe extends De{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Ne?void 0:t}}class Fe extends De{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Ne)}}class Be extends De{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=Re(this,t,e,0)??Ne)===Ve)return;const i=this._$AH,s=t===Ne&&i!==Ne||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==Ne&&(i===Ne||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Ze{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Re(this,t)}}const Ke={I:We},Ge=pe.litHtmlPolyfillSupport;Ge?.(Ie,We),(pe.litHtmlVersions??=[]).push("3.3.1");const Je=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ye=class extends ve{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new We(e.insertBefore(xe(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ve}};Ye._$litElement$=!0,Ye.finalized=!0,Je.litElementHydrateSupport?.({LitElement:Ye});const Qe=Je.litElementPolyfillSupport;Qe?.({LitElement:Ye}),(Je.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Xe={attribute:!0,type:String,converter:he,reflect:!1,hasChanged:de},ti=(t=Xe,e,i)=>{const{kind:s,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ei(t){return(e,i)=>"object"==typeof i?ti(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ii(t){return ei({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class si{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ni}=Ke,ri=()=>document.createComment(""),oi=(t,e,i)=>{const s=t._$AA.parentNode,n=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=s.insertBefore(ri(),n),r=s.insertBefore(ri(),n);i=new ni(e,r,t,t.options)}else{const e=i._$AB.nextSibling,r=i._$AM,o=r!==t;if(o){let e;i._$AQ?.(t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==r._$AU&&i._$AP(e)}if(e!==n||o){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;s.insertBefore(t,n),t=e}}}return i},ai=(t,e,i=t)=>(t._$AI(e,i),t),ci={},li=t=>{t._$AR(),t._$AA.remove()},hi=(t,e,i)=>{const s=new Map;for(let n=e;n<=i;n++)s.set(t[n],n);return s},di=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends si{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let s;void 0===i?i=e:void 0!==e&&(s=e);const n=[],r=[];let o=0;for(const e of t)n[o]=s?s(e,o):o,r[o]=i(e,o),o++;return{values:r,keys:n}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,s]){const n=(t=>t._$AH)(t),{values:r,keys:o}=this.dt(e,i,s);if(!Array.isArray(n))return this.ut=o,r;const a=this.ut??=[],c=[];let l,h,d=0,u=n.length-1,v=0,p=r.length-1;for(;d<=u&&v<=p;)if(null===n[d])d++;else if(null===n[u])u--;else if(a[d]===o[v])c[v]=ai(n[d],r[v]),d++,v++;else if(a[u]===o[p])c[p]=ai(n[u],r[p]),u--,p--;else if(a[d]===o[p])c[p]=ai(n[d],r[p]),oi(t,c[p+1],n[d]),d++,p--;else if(a[u]===o[v])c[v]=ai(n[u],r[v]),oi(t,n[d],n[u]),u--,v++;else if(void 0===l&&(l=hi(o,v,p),h=hi(a,d,u)),l.has(a[d]))if(l.has(a[u])){const e=h.get(o[v]),i=void 0!==e?n[e]:null;if(null===i){const e=oi(t,n[d]);ai(e,r[v]),c[v]=e}else c[v]=ai(i,r[v]),oi(t,n[d],i),n[e]=null;v++}else li(n[u]),u--;else li(n[d]),d++;for(;v<=p;){const e=oi(t,c[p+1]);ai(e,r[v]),c[v++]=e}for(;d<=u;){const t=n[d++];null!==t&&li(t)}return this.ut=o,((t,e=ci)=>{t._$AH=e})(t,c),Ve}}),ui=["ha-form","ha-icon","ha-icon-button","ha-selector","ha-textfield","ha-icon-picker","ha-icon-button","ha-entity-picker","ha-select","ha-dialog","ha-sortable","ha-svg-icon","ha-alert","ha-button","ha-color-picker","ha-badge","ha-sankey-chart","mwc-button"],vi=async t=>{const e=t||ui;try{if(e.every(t=>customElements.get(t)))return;await Promise.race([customElements.whenDefined("partial-panel-resolver"),new Promise((t,e)=>setTimeout(()=>e(new Error("Timeout waiting for partial-panel-resolver")),1e4))]);const t=document.createElement("partial-panel-resolver");if(!t)throw new Error("Failed to create partial-panel-resolver element");if(t.hass={panels:[{url_path:"tmp",component_name:"config"}]},"function"!=typeof t._updateRoutes)throw new Error("partial-panel-resolver does not have _updateRoutes method");if(t._updateRoutes(),!t.routerOptions?.routes?.tmp?.load)throw new Error("Failed to create tmp route in partial-panel-resolver");await Promise.race([t.routerOptions.routes.tmp.load(),new Promise((t,e)=>setTimeout(()=>e(new Error("Timeout loading tmp route")),1e4))]),await Promise.race([customElements.whenDefined("ha-panel-config"),new Promise((t,e)=>setTimeout(()=>e(new Error("Timeout waiting for ha-panel-config")),1e4))]);const i=document.createElement("ha-panel-config");if(!i)throw new Error("Failed to create ha-panel-config element");if(!i.routerOptions?.routes?.automation?.load)throw new Error("ha-panel-config does not have automation route");await Promise.race([i.routerOptions.routes.automation.load(),new Promise((t,e)=>setTimeout(()=>e(new Error("Timeout loading automation components")),1e4))]);const s=e.filter(t=>!customElements.get(t));if(s.length>0)throw new Error(`Failed to load components: ${s.join(", ")}`)}catch(t){console.error("Error loading Home Assistant form components:",t);try{if(window.customElements&&window.customElements.get("home-assistant")){console.log("Attempting fallback loading method for HA components");const t=new CustomEvent("ha-request-load-components",{detail:{components:e},bubbles:!0,composed:!0});document.dispatchEvent(t)}}catch(t){console.error("Fallback loading method failed:",t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pi=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};const gi=["ha-form","ha-icon-button","ha-entity-picker","ha-dialog","ha-sortable","ha-svg-icon","ha-button"];vi(gi).catch(t=>{console.error("Failed to load Home Assistant components:",t)});let mi=class extends Ye{constructor(){super(...arguments),this._entities=[],this._editDialogOpen=!1,this._editingEntityIndex=null,this._editingEntityData=null,this._entityKeys=new WeakMap}_getKey(t){return this._entityKeys.has(t)||this._entityKeys.set(t,Math.random().toString()),this._entityKeys.get(t)}async firstUpdated(){try{await vi(gi)}catch(t){console.error("Error loading ha-components:",t)}}willUpdate(t){super.willUpdate(t),t.has("entities")&&this._processIncomingConfig()}_processIncomingConfig(){this.entities?(this._entities=this.entities.map(t=>"string"==typeof t?{entity:t}:t),this._entityKeys=new WeakMap):this._entities=[]}render(){return this.hass?Le`
      ${this.label?Le`<h3>${this.label}</h3>`:Ne}
      <ha-sortable handle-selector=".handle" @item-moved=${this._rowMoved}>
        <div class="entities">
          ${di(this._entities,t=>this._getKey(t),(t,e)=>Le`
              <div class="entity-row">
                <div class="handle">
                  <ha-svg-icon .path=${"M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"}></ha-svg-icon>
                </div>
                <div class="entity-info">
                  ${t.entity?Le`
                        <ha-entity-picker
                          allow-custom-entity
                          hide-clear-icon
                          .hass=${this.hass}
                          .value=${t.entity}
                          .index=${e}
                          @value-changed=${this._entityValueChanged}
                        ></ha-entity-picker>
                        ${t.name||t.icon?Le`<span class="secondary">(${t.name?`${this.hass.localize("ui.common.name")}: ${t.name}`:""}${t.name&&t.icon?", ":""}${t.icon?`${this.hass.localize("ui.panel.lovelace.editor.card.generic.icon")}: ${t.icon}`:""})</span>`:""}
                      `:Le`
                        <!-- Placeholder for special row types if needed later -->
                        <span>Special Row Type: ${t.type}</span>
                      `}
                </div>
                <ha-icon-button
                  label=${this.hass.localize("ui.common.edit")}
                  .path=${"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}
                  class="edit-icon"
                  .index=${e}
                  @click=${this._editRow}
                ></ha-icon-button>
                <ha-icon-button
                  label=${this.hass.localize("ui.common.remove")}
                  .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
                  class="remove-icon"
                  .index=${e}
                  @click=${this._removeEntity}
                ></ha-icon-button>
              </div>
            `)}
        </div>
      </ha-sortable>
      <ha-entity-picker
        class="add-entity"
        .hass=${this.hass}
        @value-changed=${this._addEntity}
      ></ha-entity-picker>

      <!-- Edit Dialog -->
      ${this._editDialogOpen?Le`
        <ha-dialog
          open
          @closed=${this._closeEditDialog}
          .heading=${this.hass.localize("ui.dialogs.entity_registry.editor.edit")}
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
          <ha-button
            slot="secondaryAction"
            size="small"
            appearance="plain"
            @click=${this._closeEditDialog}
          >
          ${this.hass.localize("ui.common.cancel")}
          </ha-button>
          <ha-button
            slot="primaryAction"
            size="small"
            @click=${this._saveEditDialog}
            ?disabled=${!this._editingEntityData}
          >
          ${this.hass.localize("ui.common.save")}
          </ha-button>
        </ha-dialog>
      `:""}
    `:Ne}_addEntity(t){const e=t.detail.value;e&&(this._entities.some(t=>t.entity===e)?t.target.value="":(this._entities=[...this._entities,{entity:e}],t.target.value="",this._valueChanged()))}_rowMoved(t){t.stopPropagation();const{oldIndex:e,newIndex:i}=t.detail;if(e===i)return;const s=[...this._entities],[n]=s.splice(e,1);s.splice(i,0,n),this._entities=s,this._valueChanged()}_removeEntity(t){const e=t.currentTarget.index;this._entities=this._entities.filter((t,i)=>i!==e),this._valueChanged()}_entityValueChanged(t){t.stopPropagation();const e=t.detail.value,i=t.target.index;if(!e||this._entities[i].entity===e)return void(t.target.value=this._entities[i].entity);if(this._entities.some((t,s)=>s!==i&&t.entity===e))return void(t.target.value=this._entities[i].entity);const s=[...this._entities];s[i]={...s[i],entity:e},this._entities=s,this._valueChanged()}_editRow(t){const e=t.currentTarget.index;this._editingEntityIndex=e;const i=this._entities[e];this._editingEntityData={...i},this._editDialogOpen=!0}_closeEditDialog(){this._editDialogOpen=!1,this._editingEntityIndex=null,this._editingEntityData=null}_handleEditDialogValueChanged(t){this._editingEntityData&&(this._editingEntityData={...this._editingEntityData,...t.detail.value})}_saveEditDialog(){if(null===this._editingEntityIndex||!this._editingEntityData)return;const t=[...this._entities],e={...t[this._editingEntityIndex],...this._editingEntityData};""===e.name&&delete e.name,""===e.icon&&delete e.icon,t[this._editingEntityIndex]=e,this._entities=t,this._valueChanged(),this._closeEditDialog()}_getEditDialogSchema(){return[{name:"name",selector:{text:{}},label:this.hass.localize("ui.common.name")},{name:"icon",selector:{icon:{}},label:this.hass.localize("ui.panel.lovelace.editor.card.generic.icon")}]}_valueChanged(){const t=new CustomEvent("entities-changed",{detail:{entities:this._entities},bubbles:!0,composed:!0});this.dispatchEvent(t)}};mi.styles=((t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new Yt(i,t,Gt)})`
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

  `,pi([ei({attribute:!1})],mi.prototype,"hass",void 0),pi([ei({attribute:!1})],mi.prototype,"entities",void 0),pi([ei()],mi.prototype,"label",void 0),pi([ii()],mi.prototype,"_entities",void 0),pi([ii()],mi.prototype,"_editDialogOpen",void 0),pi([ii()],mi.prototype,"_editingEntityIndex",void 0),pi([ii()],mi.prototype,"_editingEntityData",void 0),mi=pi([(t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("multi-entity-selector")],mi);var fi=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};class yi extends nt{static get styles(){return r`
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
        `}constructor(){super(),this.config={},this._deviceIdChanged=!1,this.openEVSEEntities={},this.deviceEntitiesLoaded=!1}async firstUpdated(){this._lang=this.hass?.language||"en"}setConfig(t){const e=(t.optional_entities||[]).map(t=>{if("object"==typeof t&&null!==t&&t.id&&!t.entity){const{id:e,...i}=t;return{...i,entity:e}}return t}).filter(t=>"string"==typeof t||"object"==typeof t&&null!==t&&("string"==typeof t.entity||void 0===t.entity));this.config={...t,optional_entities:e},this.config.device_id&&this.hass&&!this.deviceEntitiesLoaded&&this._loadDeviceEntities(this.config.device_id)}_isEntityConfigured(t){return Boolean(this.config[t]&&this.config[t].length>0)}async _loadDeviceEntities(t){if(!t||!this.hass)return;const e={},i=Object.values(this.hass.entities||{}).filter(e=>e.device_id===t),s={override_entity:{names:["override_state"],domains:["select"],preferredPattern:"select.openevse_override_state"},status_entity:{names:["station_status"],domains:["sensor"],preferredPattern:"sensor.openevse_station_status"},power_entity:{names:["current_power_usage"],domains:["sensor"],preferredPattern:"sensor.openevse_current_power_usage"},current_entity:{names:["charging_current"],domains:["sensor"],preferredPattern:"sensor.openevse_charging_current"},vehicle_connected_entity:{names:["vehicle_connected"],domains:["binary_sensor"],preferredPattern:"binary_sensor.openevse_vehicle_connected"},charging_status_entity:{names:["charging_status"],domains:["sensor"],preferredPattern:"sensor.openevse_charging_status"},charge_rate_entity:{names:["charge_rate"],domains:["number"],preferredPattern:"number.openevse_charge_rate"},session_energy_entity:{names:["usage_this_session"],domains:["sensor"],preferredPattern:"sensor.openevse_usage_this_session"},time_elapsed_entity:{names:["charge_time_elapsed"],domains:["sensor"],preferredPattern:"sensor.openevse_charge_time_elapsed"},wifi_signal_strength_entity:{names:["wifi_signal_strength"],domains:["sensor"],preferredPattern:"sensor.openevse_wifi_signal_strength"},limit_active_entity:{names:["limit_active"],domains:["binary_sensor"],preferredPattern:"binary_sensor.openevse_limit_active"},divert_active_entity:{names:["divert_active"],domains:["binary_sensor"],preferredPattern:"binary_sensor.openevse_divert_active"},divert_mode_entity:{names:["divert_mode"],domains:["sensor"],preferredPattern:"sensor.openevse_divert_mode"},pv_charge_rate_entity:{names:["pv_charge_rate"],domains:["sensor"],preferredPattern:"sensor.openevse_pv_charge_rate"},vehicle_battery_level_entity:{names:["vehicle_battery_level"],domains:["sensor"],preferredPattern:"sensor.openevse_vehicle_battery_level"},vehicle_range_entity:{names:["vehicle_range"],domains:["sensor"],preferredPattern:"sensor.openevse_vehicle_range"}};for(const[t,n]of Object.entries(s)){if(this._isEntityConfigured(t)&&!this._deviceIdChanged)continue;const{names:s,domains:r,preferredPattern:o}=n;let a=i.find(t=>t.entity_id.toLowerCase()===o.toLowerCase());a||(a=i.find(t=>{const e=t.entity_id.toLowerCase(),i=e.split(".")[0];return!!r.includes(i)&&s.some(i=>e.includes(i.toLowerCase())||t.original_name&&t.original_name.toLowerCase().includes(i.toLowerCase()))})),a&&(e[t]=a.entity_id)}this.openEVSEEntities=e,this.deviceEntitiesLoaded=!0;const n={...this.config};for(const[t,i]of Object.entries(e))this._isEntityConfigured(t)&&!this._deviceIdChanged||(n[t]=i);this._deviceIdChanged=!1,this.config=n,this._fireConfigChanged(n)}_handleConfigChange(t){const e=t.detail.value;e.device_id!==this.config.device_id?(this._deviceIdChanged=!0,this.deviceEntitiesLoaded=!1,this.config={...this.config,...e},this._loadDeviceEntities(e.device_id)):this._dispatchConfigChanged(e)}_dispatchConfigChanged(t){const e={...this.config,...t};this.config=e,this._fireConfigChanged(e)}_fireConfigChanged(t){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t}}))}_handleOptionalEntitiesChanged(t){if(!this.config||!this.hass)return;const e=t.detail.entities;this.config={...this.config,optional_entities:e},this._fireConfigChanged(this.config)}_getMissingEntities(){return["override_entity","status_entity","power_entity","current_entity","vehicle_connected_entity","charging_status_entity","charge_rate_entity","session_energy_entity","time_elapsed_entity","wifi_signal_strength_entity","limit_active_entity","divert_active_entity","divert_mode_entity","pv_charge_rate_entity","vehicle_range_entity","vehicle_battery_level_entity"].filter(t=>{const e=this.config[t]&&this.config[t].length>0,i=this.openEVSEEntities[t]&&this.openEVSEEntities[t].length>0;return!e&&!i})}render(){if(!this.hass)return U``;const t={};if(this.config.device_id&&this.hass.entities){Object.values(this.hass.entities).filter(t=>t.device_id===this.config.device_id).forEach(e=>{const i=e.entity_id.split(".")[0];t[i]||(t[i]=[]),t[i].push(e.entity_id)})}const e=Bt(t,this._lang),i=this._getMissingEntities();return U`
            <!-- Auto-detection status -->
            ${this.config.device_id?U`
                      <div class="entity-section">
                          ${this.deviceEntitiesLoaded?U`
                                    <div
                                        class="entity-status ${i.length>0?"warning":"success"}"
                                    >
                                        ${0===i.length?vt("entity_auto_success",this._lang)+"!":vt("entity_auto_fail",this._lang)+": "+i.join(", ")}
                                    </div>
                                `:U`
                                    <div class="entity-status">
                                        ${vt("entity_auto_loading",this._lang)}
                                    </div>
                                `}
                      </div>
                  `:""}

            <div class="form-container">
                ${this.config.device_id?U`
                          <!-- Main configuration -->
                          <ha-form
                              .hass=${this.hass}
                              .data=${this.config}
                              .schema=${e}
                              .computeLabel=${t=>t.label||t.name}
                              .computeHelper=${t=>t.helper_text||D}
                              @value-changed=${this._handleConfigChange}
                          ></ha-form>
                          <!-- Additional entities using multi-entity-selector -->
                          <div class="entity-section">
                              <multi-entity-selector
                                  .hass=${this.hass}
                                  .entities=${this.config.optional_entities||[]}
                                  label=${vt("additional entities",this._lang)}
                                  @entities-changed=${this._handleOptionalEntitiesChanged}
                              ></multi-entity-selector>
                          </div>
                      `:U`
                          <ha-form
                              .hass=${this.hass}
                              .data=${this.openEVSEEntities}
                              .schema=${[{name:"device_id",selector:{device:{integration:"openevse",manufacturer:"OpenEVSE"}},label:vt("openevse device",this._lang),helper_text:vt("select your openevse device",this._lang),required:!0}]}
                              @value-changed=${this._handleConfigChange}
                          ></ha-form>
                      `}
            </div>
        `}}fi([lt({attribute:!1})],yi.prototype,"hass",void 0),fi([lt({attribute:!1})],yi.prototype,"config",void 0),fi([ht()],yi.prototype,"_lang",void 0),fi([ht()],yi.prototype,"_deviceIdChanged",void 0),fi([ht()],yi.prototype,"openEVSEEntities",void 0),fi([ht()],yi.prototype,"deviceEntitiesLoaded",void 0),customElements.define("openevse-card",Rt),customElements.define("openevse-card-editor",yi),window.customCards=window.customCards||[],window.customCards.push({type:"openevse-card",name:"OpenEVSE Card",preview:!0,description:"A custom card for OpenEVSE",documentationURL:"https://github.com/KipK/openevse-card/blob/main/README.md"});
