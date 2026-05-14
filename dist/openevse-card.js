/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new n(s,t,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,v=globalThis,p=v.trustedTypes,g=p?p.emptyScript:"",m=v.reactiveElementPolyfillSupport,f=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!a(t,e),_={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);n?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of s){const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s;const o=n.fromAttribute(e,t.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,i,s=!1,n){if(void 0!==t){const o=this.constructor;if(!1===s&&(n=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??b)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==n||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[f("elementProperties")]=new Map,w[f("finalized")]=new Map,m?.({ReactiveElement:w}),(v.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,$=t=>t,S=x.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+C,j=`<${O}>`,A=document,M=()=>A.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,V="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,T=/>/g,H=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,R=/"/g,U=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),D=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),F=new WeakMap,B=A.createTreeWalker(A,129);function Z(t,e){if(!L(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}let K=class t{constructor({strings:e,_$litType$:i},s){let n;this.parts=[];let o=0,r=0;const a=e.length-1,l=this.parts,[c,h]=((t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":3===e?"<math>":"",r=N;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(r.lastIndex=h,l=r.exec(i),null!==l);)h=r.lastIndex,r===N?"!--"===l[1]?r=P:void 0!==l[1]?r=T:void 0!==l[2]?(U.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=H):void 0!==l[3]&&(r=H):r===H?">"===l[0]?(r=n??N,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?H:'"'===l[3]?R:I):r===R||r===I?r=H:r===P||r===T?r=N:(r=H,n=void 0);const d=r===H&&t[e+1].startsWith("/>")?" ":"";o+=r===N?i+j:c>=0?(s.push(a),i.slice(0,c)+k+i.slice(c)+C+d):i+C+(-2===c?e:d)}return[Z(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(e,i);if(this.el=t.createElement(c,s),B.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=B.nextNode())&&l.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(k)){const e=h[r++],i=n.getAttribute(t).split(C),s=/([.?@])?(.*)/.exec(e);l.push({type:1,index:o,name:s[2],strings:i,ctor:"."===s[1]?X:"?"===s[1]?tt:"@"===s[1]?et:Q}),n.removeAttribute(t)}else t.startsWith(C)&&(l.push({type:6,index:o}),n.removeAttribute(t));if(U.test(n.tagName)){const t=n.textContent.split(C),e=t.length-1;if(e>0){n.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],M()),B.nextNode(),l.push({type:2,index:++o});n.append(t[e],M())}}}else if(8===n.nodeType)if(n.data===O)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(C,t+1));)l.push({type:7,index:o}),t+=C.length-1}o++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}};function G(t,e,i=t,s){if(e===D)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const o=z(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=G(t,n._$AS(t,e.values),n,s)),e}let J=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??A).importNode(e,!0);B.currentNode=s;let n=B.nextNode(),o=0,r=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Y(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new it(n,this,t)),this._$AV.push(e),a=i[++r]}o!==a?.index&&(n=B.nextNode(),o++)}return B.currentNode=A,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Y=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),z(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==D&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>L(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new J(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new K(t)),e}k(e){L(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,n=0;for(const o of e)n===i.length?i.push(s=new t(this.O(M()),this.O(M()),this,this.options)):s=i[n],s._$AI(o),n++;n<i.length&&(this._$AR(s&&s._$AB.nextSibling,n),i.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=$(t).nextSibling;$(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}},Q=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=G(this,t,e,0),o=!z(t)||t!==this._$AH&&t!==D,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=G(this,s[i+r],e,r),a===D&&(a=this._$AH[r]),o||=!z(a)||a!==this._$AH[r],a===q?t=q:t!==q&&(t+=(a??"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},X=class extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}},tt=class extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}},et=class extends Q{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??q)===D)return;const i=this._$AH,s=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==q&&(i===q||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},it=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}};const st=x.litHtmlPolyfillSupport;st?.(K,Y),(x.litHtmlVersions??=[]).push("3.3.3");const nt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ot=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new Y(e.insertBefore(M(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}};ot._$litElement$=!0,ot.finalized=!0,nt.litElementHydrateSupport?.({LitElement:ot});const rt=nt.litElementPolyfillSupport;rt?.({LitElement:ot}),(nt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},lt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},ct=(t=lt,e,i)=>{const{kind:s,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t){return(e,i)=>"object"==typeof i?ct(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dt(t){return ht({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=o`
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
`,vt={en:{disabled:"disabled",sleeping:"disabled","switch to fast mode":"Switch to fast mode","switch to eco mode":"Switch to eco mode",active:"active",charging:"charging","not connected":"waiting",connected:"connected",error:"error",power:"power",current:"current",session:"session",elapsed:"elapsed","charge rate":"charge rate",required_entities:"Required entities",entity_auto_success:"All required entities were automatically found",entity_auto_fail:"Some entities could not be automatically detected",entity_auto_loading:"Loading device entities","additional entities":"Additional entities","new limit":"New Limit","add charging limit":"Add Charging Limit",limit:"Limit",time:"Time",energy:"Energy",battery:"Battery",range:"Range",hours:"Hours",minutes:"Minutes",cancel:"Cancel",left:"left","add limit":"Add Limit","header title":"Header Title","display header":"Display header",features:"Features","enable vehicle battery":"Enable Vehicle Battery","enable vehicle range":"Enable Vehicle Range","limits settings":"Limits settings","maximum charge energy":"Maximum charge energy (kWh)","maximum vehicle range":"Maximum vehicle range (miles|km)","openevse device":"OpenEVSE Device","select your openevse device":"Select your OpenEVSE device to automatically populate all entities","override state":"Override State","select openevse.override_state entity":"Select openevse.override_state entity","station status":"Station Status","select openevse.station_status entity":"Select openevse.station_status entity","current power usage":"Current power usage","select openevse.current_power_usage entity":"Select openevse.current_power_usage entity","charging current":"Charging current","select openevse.charging_current entity":"Select openevse.charging_current entity","vehicle connected":"Vehicle Connected","select openevse.vehicle_connected entity":"Select openevse.vehicle_connected entity","charging status":"Charging status","select openevse.charging_status entity":"Select openevse.charging_status entity","session energy":"Session Energy","select openevse.usage_this_session entity":"Select openevse.usage_this_session entity","charge time elapsed":"Charge Time Elapsed","select openevse.charge_time_elapsed entity":"Select openevse.charge_time_elapsed entity","wifi signal":"Wifi Signal","select openevse_wifi_signal_strength entity":"Select openevse_wifi_signal_strength entity","limit active":"Limit Active","select openevse_limit_active entity":"Select openevse_limit_active entity","vehicle range":"Vehicle Range","select openevse_vehicle_range entity":"Select openevse_vehicle_range entity","battery level":"Battery Level","select openevse_vehicle_battery_level entity":"Select openevse_vehicle_battery_level entity",entity:"Entity",name:"Name",icon:"Icon",warning:"Warning","edit optional entity":"Edit Optional Entity",save:"Save",integration_missing_or_outdated:"OpenEVSE integration not found or requires version {min_version} & higher.",eco:"Eco",fast:"Fast"},fr:{disabled:"désactivé",sleeping:"désactivé","switch to fast mode":"Passer en mode rapide","switch to eco mode":"Passer en mode éco",active:"activé",charging:"en charge","not connected":"en attente",connected:"connecté",error:"erreur",power:"puissance",current:"courant",session:"session",elapsed:"écoulé","charge rate":"ampérage",required_entities:"Entités requises",entity_auto_success:"Toutes les entités ont été trouvées automatiquement",entity_auto_fail:"certaines entités n'ont pas pu être détectées automatiquement",entity_auto_loading:"Chargement des entités de l'appareil","additional entities":"Entités supplémentaires","new limit":"Nouvelle Limite","add charging limit":"Ajouter une Limite de Charge",time:"Temps",energy:"Énergie",battery:"Batterie",range:"Autonomie",hours:"Heures",minutes:"Minutes",cancel:"Annuler",limit:"Limite",left:"restant","add limit":"Ajouter Limite","header title":"Titre d'en-tête","display header":"Afficher l'en-tête",features:"Fonctionnalités","enable vehicle battery":"Activer la batterie du véhicule","enable vehicle range":"Activer l'autonomie du véhicule","limits settings":"Paramètres des limites","maximum charge energy":"Énergie de charge maximale (kWh)","maximum vehicle range":"Autonomie maximale du véhicule (miles|km)","openevse device":"Appareil OpenEVSE","select your openevse device":"Sélectionnez votre appareil OpenEVSE pour remplir automatiquement toutes les entités","override state":"État de surcharge","select openevse.override_state entity":"Sélectionnez l'entité openevse.override_state","station status":"État de la station","select openevse.station_status entity":"Sélectionnez l'entité openevse.station_status","current power usage":"Consommation électrique actuelle","select openevse.current_power_usage entity":"Sélectionnez l'entité openevse.current_power_usage","charging current":"Courant de charge","select openevse.charging_current entity":"Sélectionnez l'entité openevse.charging_current","vehicle connected":"Véhicule connecté","select openevse.vehicle_connected entity":"Sélectionnez l'entité openevse.vehicle_connected","charging status":"État de charge","select openevse.charging_status entity":"Sélectionnez l'entité openevse.charging_status","session energy":"Énergie de session","select openevse.usage_this_session entity":"Sélectionnez l'entité openevse.usage_this_session","charge time elapsed":"Temps de charge écoulé","select openevse.charge_time_elapsed entity":"Sélectionnez l'entité openevse.charge_time_elapsed","wifi signal":"Signal Wifi","select openevse_wifi_signal_strength entity":"Sélectionnez l'entité openevse_wifi_signal_strength","limit active":"Limite active","select openevse_limit_active entity":"Sélectionnez l'entité openevse_limit_active","vehicle range":"Autonomie du véhicule","select openevse_vehicle_range entity":"Sélectionnez l'entité openevse_vehicle_range","battery level":"Niveau de batterie","select openevse_vehicle_battery_level entity":"Sélectionnez l'entité openevse_vehicle_battery_level",entity:"Entité",name:"Nom",icon:"Icône",warning:"Avertissement","edit optional entity":"Modifier l'entité optionnelle",save:"Enregistrer",integration_missing_or_outdated:"Intégration OpenEVSE non trouvée ou nécessite la version {min_version} ou supérieure.",eco:"Éco",fast:"Rapide"},de:{disabled:"deaktiviert",sleeping:"deaktiviert","switch to fast mode":"In den Schnellmodus wechseln","switch to eco mode":"In den Eco-Modus wechseln",active:"aktiv",charging:"lädt","not connected":"bereit",connected:"verbunden",error:"fehler",power:"leistung",current:"stromstärke",session:"sitzung",elapsed:"verstrichene zeit","charge rate":"laderate",required_entities:"Erforderliche Entitäten",entity_auto_success:"Alle erforderlichen Entitäten wurden automatisch gefunden",entity_auto_fail:"Einige Entitäten konnten nicht automatisch erkannt werden",entity_auto_loading:"Geräteentitäten werden geladen","additional entities":"Zusätzliche Entitäten","new limit":"Neues Limit","add charging limit":"Ladelimit hinzufügen",time:"Zeit",energy:"Energie",battery:"Batterie",range:"Reichweite",hours:"Stunden",minutes:"Minuten",cancel:"Abbrechen",limit:"Limit",left:"verbleibend","add limit":"Limit hinzufügen","header title":"Kopfzeilentitel","display header":"Kopfzeile anzeigen",features:"Funktionen","enable vehicle battery":"Fahrzeugbatterie aktivieren","enable vehicle range":"Fahrzeugreichweite aktivieren","limits settings":"Limit-Einstellungen","maximum charge energy":"Maximale Ladeenergie (kWh)","maximum vehicle range":"Maximale Fahrzeugreichweite (Meilen|km)","openevse device":"OpenEVSE-Gerät","select your openevse device":"Wählen Sie Ihr OpenEVSE-Gerät aus, um alle Entitäten automatisch zu füllen","override state":"Überschreibungsstatus","select openevse.override_state entity":"Wählen Sie die openevse.override_state Entität","station status":"Stationsstatus","select openevse.station_status entity":"Wählen Sie die openevse.station_status Entität","current power usage":"Aktuelle Leistungsaufnahme","select openevse.current_power_usage entity":"Wählen Sie die openevse.current_power_usage Entität","charging current":"Ladestrom","select openevse.charging_current entity":"Wählen Sie die openevse.charging_current Entität","vehicle connected":"Fahrzeug verbunden","select openevse.vehicle_connected entity":"Wählen Sie die openevse.vehicle_connected Entität","charging status":"Ladestatus","select openevse.charging_status entity":"Wählen Sie die openevse.charging_status Entität","session energy":"Sitzungsenergie","select openevse.usage_this_session entity":"Wählen Sie die openevse.usage_this_session Entität","charge time elapsed":"Verstrichene Ladezeit","select openevse.charge_time_elapsed entity":"Wählen Sie die openevse.charge_time_elapsed Entität","wifi signal":"WLAN-Signal","select openevse_wifi_signal_strength entity":"Wählen Sie die openevse_wifi_signal_strength Entität","limit active":"Limit aktiv","select openevse_limit_active entity":"Wählen Sie die openevse_limit_active Entität","vehicle range":"Fahrzeugreichweite","select openevse_vehicle_range entity":"Wählen Sie die openevse_vehicle_range Entität","battery level":"Batteriestand","select openevse_vehicle_battery_level entity":"Wählen Sie die openevse_vehicle_battery_level Entität",entity:"Entität",name:"Name",icon:"Symbol",warning:"Warnung","edit optional entity":"Optionale Entität bearbeiten",save:"Speichern",integration_missing_or_outdated:"OpenEVSE-Integration nicht gefunden oder erfordert Version {min_version} oder höher.",eco:"Öko",fast:"Schnell"},es:{disabled:"desactivado",sleeping:"desactivado","switch to fast mode":"Cambiar a modo rápido","switch to eco mode":"Cambiar a modo eco",active:"activo",charging:"cargando","not connected":"en espera",connected:"conectado",error:"error",power:"potencia",current:"corriente",session:"sesión",elapsed:"pasado","charge rate":"amperaje",required_entities:"Entidades requeridas",entity_auto_success:"Todas las entidades requeridas se encontraron automáticamente",entity_auto_fail:"Algunas entidades no pudieron ser detectadas automáticamente",entity_auto_loading:"Cargando entidades del dispositivo","additional entities":"Entidades adicionales","new limit":"Nuevo Límite","add charging limit":"Añadir Límite de Carga",time:"Tiempo",energy:"Energía",battery:"Batería",range:"Autonomía",hours:"Horas",minutes:"Minutos",cancel:"Cancelar",limit:"Limite",left:"restante","add limit":"Añadir Límite","header title":"Título del encabezado","display header":"Mostrar encabezado",features:"Características","enable vehicle battery":"Habilitar batería del vehículo","enable vehicle range":"Habilitar autonomía del vehículo","limits settings":"Configuración de límites","maximum charge energy":"Energía máxima de carga (kWh)","maximum vehicle range":"Autonomía máxima del vehículo (millas|km)","openevse device":"Dispositivo OpenEVSE","select your openevse device":"Seleccione su dispositivo OpenEVSE para completar automáticamente todas las entidades","override state":"Estado de anulación","select openevse.override_state entity":"Seleccione la entidad openevse.override_state","station status":"Estado de la estación","select openevse.station_status entity":"Seleccione la entidad openevse.station_status","current power usage":"Consumo de energía actual","select openevse.current_power_usage entity":"Seleccione la entidad openevse.current_power_usage","charging current":"Corriente de carga","select openevse.charging_current entity":"Seleccione la entidad openevse.charging_current","vehicle connected":"Vehículo conectado","select openevse.vehicle_connected entity":"Seleccione la entidad openevse.vehicle_connected","charging status":"Estado de carga","select openevse.charging_status entity":"Seleccione la entidad openevse.charging_status","session energy":"Energía de sesión","select openevse.usage_this_session entity":"Seleccione la entidad openevse.usage_this_session","charge time elapsed":"Tiempo de carga transcurrido","select openevse.charge_time_elapsed entity":"Seleccione la entidad openevse.charge_time_elapsed","wifi signal":"Señal Wifi","select openevse_wifi_signal_strength entity":"Seleccione la entidad openevse_wifi_signal_strength","limit active":"Límite activo","select openevse_limit_active entity":"Seleccione la entidad openevse_limit_active","vehicle range":"Autonomía del vehículo","select openevse_vehicle_range entity":"Seleccione la entidad openevse_vehicle_range","battery level":"Nivel de batería","select openevse_vehicle_battery_level entity":"Seleccione la entidad openevse_vehicle_battery_level",entity:"Entidad",name:"Nombre",icon:"Icono",warning:"Advertencia","edit optional entity":"Editar entidad opcional",save:"Guardar",integration_missing_or_outdated:"Integración OpenEVSE no encontrada o requiere la versión {min_version} o superior.",eco:"Eco",fast:"Rápido"}};function pt(t,e="en"){const i=t.toLowerCase();return e in vt&&i in vt[e]?vt[e][i]:"en"in vt&&i in vt.en?vt.en[i]:t}const gt=["ha-form","ha-icon","ha-icon-button","ha-selector","ha-textfield","ha-icon-picker","ha-icon-button","ha-entity-picker","ha-select","ha-dialog","ha-sortable","ha-svg-icon","ha-alert","ha-button","ha-color-picker","ha-badge","ha-sankey-chart","mwc-button"];var mt=function(t,e,i,s){return new(i||(i=Promise))(function(n,o){function r(t){try{l(s.next(t))}catch(t){o(t)}}function a(t){try{l(s.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i(function(t){t(e)})).then(r,a)}l((s=s.apply(t,e||[])).next())})};const ft="2.1.47";var yt=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let bt=class extends ot{constructor(){super(),this.min=0,this.max=32,this.step=1,this.value=0,this.disabled=!1,this.height=22,this.color="black",this.displayThumb=!0,this.unit="",this._sliderValue=0,this._dragging=!1,this._boundHandleSliderMove=this._handleSliderMove.bind(this),this._boundHandleSliderEnd=this._handleSliderEnd.bind(this)}updated(t){t.has("value")&&!this._dragging&&(this._sliderValue=this.value)}connectedCallback(){super.connectedCallback(),this._sliderValue=this.value}disconnectedCallback(){super.disconnectedCallback(),this._removeEventListeners()}get _percentage(){const t=this.max-this.min;if(0===t)return 5;return 5+95*((this._sliderValue-this.min)/t)}_handleSliderStart(t){var e,i;this.disabled||(this._dragging=!0,null===(i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".slider-wrapper"))||void 0===i||i.classList.add("dragging"),this._updateSliderValue(t),window.addEventListener("mousemove",this._boundHandleSliderMove),window.addEventListener("touchmove",this._boundHandleSliderMove),window.addEventListener("mouseup",this._boundHandleSliderEnd),window.addEventListener("touchend",this._boundHandleSliderEnd))}_handleSliderMove(t){this._dragging&&this._updateSliderValue(t)}_handleSliderEnd(){var t,e;this._dragging&&(null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".slider-wrapper"))||void 0===e||e.classList.remove("dragging"),this._removeEventListeners(),this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:this._sliderValue},bubbles:!0,composed:!0})),setTimeout(()=>{this._dragging=!1},100))}_removeEventListeners(){window.removeEventListener("mousemove",this._boundHandleSliderMove),window.removeEventListener("touchmove",this._boundHandleSliderMove),window.removeEventListener("mouseup",this._boundHandleSliderEnd),window.removeEventListener("touchend",this._boundHandleSliderEnd)}_updateSliderValue(t){var e;const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".slider-wrapper");if(!i)return;const s=i.getBoundingClientRect();let n;n="touches"in t?t.touches[0].clientX:t.clientX;const o=.95*s.width;let r=(n-(s.left+.05*s.width))/o;r=Math.min(Math.max(r,0),1);let a=this.min+r*(this.max-this.min);a=Math.round(a/this.step)*this.step,a=Math.min(Math.max(a,this.min),this.max),this._sliderValue=Number(a.toFixed(2)),this.dispatchEvent(new CustomEvent("value-preview",{detail:{value:this._sliderValue},bubbles:!0,composed:!0})),this.requestUpdate()}_formatValue(t){return this.step<1?t.toFixed(1):t.toFixed(0)}render(){return W`
            <div class="slider-container">
                ${this.unit?W`
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
        `}};bt.styles=o`
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
    `,yt([ht({type:Number})],bt.prototype,"min",void 0),yt([ht({type:Number})],bt.prototype,"max",void 0),yt([ht({type:Number})],bt.prototype,"step",void 0),yt([ht({type:Number})],bt.prototype,"value",void 0),yt([ht({type:Boolean,reflect:!0})],bt.prototype,"disabled",void 0),yt([ht({type:Number})],bt.prototype,"height",void 0),yt([ht({type:String})],bt.prototype,"color",void 0),yt([ht({type:Boolean,attribute:"display-thumb"})],bt.prototype,"displayThumb",void 0),yt([ht({type:String})],bt.prototype,"unit",void 0),yt([dt()],bt.prototype,"_sliderValue",void 0),yt([dt()],bt.prototype,"_dragging",void 0),yt([function(t){return(e,i)=>{const s="function"==typeof e?e:e[i];Object.assign(s,t)}}({passive:!0})],bt.prototype,"_handleSliderStart",null),bt=yt([at("custom-slider")],bt);var _t=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let wt=class extends ot{constructor(){super(...arguments),this.min=0,this.max=32,this.step=1,this.value=0,this.unit="A",this.disabled=!1,this.label="Charge Rate"}_formatValue(t){return this.step<1?t.toFixed(1):t.toFixed(0)}render(){return W`
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
                    color="--evse-slider-color"
                    @value-preview=${t=>this.value=t.detail.value}
                    @value-changed=${t=>{this.value=t.detail.value,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:this.value},bubbles:!0,composed:!0}))}}
                ></custom-slider>
            </div>
        `}};wt.styles=o`
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
    `,_t([ht({type:Number})],wt.prototype,"min",void 0),_t([ht({type:Number})],wt.prototype,"max",void 0),_t([ht({type:Number})],wt.prototype,"step",void 0),_t([ht({type:Number})],wt.prototype,"value",void 0),_t([ht({type:String})],wt.prototype,"unit",void 0),_t([ht({type:Boolean,reflect:!0})],wt.prototype,"disabled",void 0),_t([ht({type:String})],wt.prototype,"label",void 0),wt=_t([at("evse-slider")],wt);var xt=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let $t=class extends ot{constructor(){super(),this.feat_soc=!1,this.feat_range=!1,this.energy_max_value=100,this.range_max_value=600,this.range_unit="km",this.language="en",this.evse_elapsed=0,this.evse_energy=0,this.evse_soc=0,this.evse_range=0,this._showLimitForm=!1,this._selectedLimitType="time",this._hours=void 0,this._minutes=void 0,this._value=0}static get styles(){return o`
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
            .dialog-actions {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                gap: 8px;
                width: 100%;
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
        `}_openDialog(){this._showLimitForm=!0,this._selectedLimitType="time",this._hours=void 0,this._minutes=void 0,this._value=0,this.requestUpdate()}_closeDialog(){this._showLimitForm=!1,this.requestUpdate()}_limitTypeOptions(){return[{value:"time",label:pt("time",this.language)},{value:"energy",label:pt("energy",this.language)},...this.feat_soc?[{value:"soc",label:pt("battery",this.language)}]:[],...this.feat_range?[{value:"range",label:pt("range",this.language)}]:[]]}_handleTypeChange(t){const e=t.detail.value;e&&e!==this._selectedLimitType&&(this._selectedLimitType=e,this._value=0,this.requestUpdate())}_handleHoursChange(t){const e=t.target.value;this._hours=""===e?void 0:parseInt(e,10),this.requestUpdate()}_handleMinutesChange(t){const e=t.target.value;this._minutes=""===e?void 0:parseInt(e,10),this.requestUpdate()}_handleValueChange(t){const e=t.target,i=parseInt(e.value)||0;"energy"===this._selectedLimitType?this._value=1e3*i:this._value=i,this.requestUpdate()}_handleSliderChange(t){const e=t.detail.value;"energy"===this._selectedLimitType?this._value=Math.round(1e3*e):this._value=e,this.requestUpdate()}_formatValue(t,e){if("energy"===e){return`${t/1e3} kWh`}return"soc"===e?`${t} %`:"range"===e?`${t} ${this.range_unit}`:String(t)}_formatRemainingValue(t,e){if("energy"===e){return`${Math.max(0,t/1e3-this.evse_energy).toFixed(2)} kWh`}if("soc"===e){return`${Math.max(0,t-this.evse_soc)} %`}if("range"===e){return`${Math.max(0,t-this.evse_range)} ${this.range_unit}`}return String(t)}_addLimit(){var t,e;if("time"===this._selectedLimitType){const i=60*(null!==(t=this._hours)&&void 0!==t?t:0)+(null!==(e=this._minutes)&&void 0!==e?e:0);i>0&&this.setLimit&&this.setLimit("time",i)}else["energy","soc","range"].includes(this._selectedLimitType)&&this._value>0&&this.setLimit&&this.setLimit(this._selectedLimitType,this._value);this._showLimitForm=!1}_removeLimit(){this.delLimit&&this.delLimit()}_isAddButtonDisabled(){var t,e;if("time"===this._selectedLimitType){const i=null!==(t=this._hours)&&void 0!==t?t:0,s=null!==(e=this._minutes)&&void 0!==e?e:0;return 0===i&&0===s}return!["energy","soc","range"].includes(this._selectedLimitType)||0===this._value}_formatTimeValue(t){const e=60*t;return[Math.floor(e/3600),Math.floor(e%3600/60)].map(t=>String(t).padStart(2,"0")).join(":")}render(){var t;const e=!(null===(t=this.limit)||void 0===t?void 0:t.auto_release);return W`
            <div class="limit-container">
                ${this.limit&&this.limit.type?W`
                      <div class="limit-badge">
                          <ha-icon
                              icon="${"time"===this.limit.type?"mdi:clock":"range"===this.limit.type?"mdi:map-marker-distance":"soc"===this.limit.type?"mdi:battery-medium":"mdi:lightning-bolt"}"
                          ></ha-icon>
                          <span class="limit-type">
                                ${pt("limit",this.language)}
                          </span>
                          <span class="limit-value">
                              ${"time"===this.limit.type?this._formatTimeValue(this.limit.value):this._formatValue(this.limit.value,this.limit.type)}
                          </span>
                          ${e?W`
                            <ha-icon
                              class="lock-icon"
                              icon="mdi:lock"
                            ></ha-icon>
                          `:W`
                            <ha-icon
                              class="close-icon"
                              icon="mdi:close"
                              @click=${this._removeLimit}
                            ></ha-icon>
                          `}
                      </div>
                      <div class="limit-remaining">
                        ${"time"===this.limit.type?this._formatTimeValue(this.limit.value-this.evse_elapsed):this._formatRemainingValue(this.limit.value,this.limit.type)}
                        ${pt("left",this.language)}
                      </div>
                  `:W`
                      <button class="new-limit-btn" @click=${this._openDialog}>
                          <ha-icon icon="mdi:plus"></ha-icon>
                          ${pt("new limit",this.language)}
                      </button>
                  `}
            </div>

            <!-- Dialog is always rendered, visibility controlled by ?open -->
            <ha-dialog
                ?open=${this._showLimitForm}
                @closed=${this._closeDialog}
                .heading=${pt("add charging limit",this.language)}
                .headerTitle=${pt("add charging limit",this.language)}
                width="medium"
            >
                <div class="dialog-content">
                    <div class="form-row">
                        <div class="select">
                            <ha-select
                                @selected=${this._handleTypeChange}
                                @closed=${t=>t.stopPropagation()}
                                .options=${this._limitTypeOptions()}
                                .value=${this._selectedLimitType}
                            ></ha-select>
                        </div>
                    </div>

                    ${"time"===this._selectedLimitType?W`
                    <div class="form-row">
                        <div class="time-inputs">
                            <div class="time-input">
                                <ha-input
                                    id="hours"
                                    type="number"
                                    inputmode="numeric"
                                    .value=${void 0===this._hours?"":String(this._hours)}
                                    .label=${pt("hours",this.language)}
                                    name="hours"
                                    @change=${this._handleHoursChange}
                                    no-spinner
                                    min="0"
                                    maxlength="2"
                                    suffix=":"
                                    class="hasSuffix"
                                >
                                </ha-input>
                            </div>
                            <div class="time-input">
                                <ha-input
                                    id="minutes"
                                    type="number"
                                    inputmode="numeric"
                                    .value=${void 0===this._minutes?"":String(this._minutes)}
                                    .label=${pt("minutes",this.language)}
                                    name="minutes"
                                    @change=${this._handleMinutesChange}
                                    no-spinner
                                    min="0"
                                    maxlength="2"
                                >
                                </ha-input>
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
                                .color=${"--limit-slider-color"}
                                .unit=${"range"===this._selectedLimitType?this.range_unit:"energy"===this._selectedLimitType?"kWh":"%"}
                                @value-changed=${this._handleSliderChange}
                            ></custom-slider>
                        </div>
                    </div>
                    `:q}
                </div> 
                <div slot="footer" class="dialog-actions">
                    <ha-button
                        size="small"
                        appearance="plain"
                        @click=${this._closeDialog}
                    >
                            ${pt("cancel",this.language)}
                    </ha-button>

                    <ha-button
                        size="small"
                        appearance="accent"
                        @click=${this._addLimit}
                        .disabled=${this._isAddButtonDisabled()}
                    >
                        ${pt("add limit",this.language)}
                    </ha-button>
                </div>
            </ha-dialog>
        `}};xt([ht({attribute:!1})],$t.prototype,"limit",void 0),xt([ht({attribute:!1})],$t.prototype,"setLimit",void 0),xt([ht({attribute:!1})],$t.prototype,"delLimit",void 0),xt([ht({type:Boolean})],$t.prototype,"feat_soc",void 0),xt([ht({type:Boolean})],$t.prototype,"feat_range",void 0),xt([ht({type:Number})],$t.prototype,"energy_max_value",void 0),xt([ht({type:Number})],$t.prototype,"range_max_value",void 0),xt([ht({type:String})],$t.prototype,"range_unit",void 0),xt([ht({type:String})],$t.prototype,"language",void 0),xt([ht({type:Number})],$t.prototype,"evse_elapsed",void 0),xt([ht({type:Number})],$t.prototype,"evse_energy",void 0),xt([ht({type:Number})],$t.prototype,"evse_soc",void 0),xt([ht({type:Number})],$t.prototype,"evse_range",void 0),xt([dt()],$t.prototype,"_showLimitForm",void 0),xt([dt()],$t.prototype,"_selectedLimitType",void 0),xt([dt()],$t.prototype,"_hours",void 0),xt([dt()],$t.prototype,"_minutes",void 0),xt([dt()],$t.prototype,"_value",void 0),$t=xt([at("limit-component")],$t);var St=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let Et=class extends ot{constructor(){super(),this.label="",this.value=0,this.unit="",this.max_value=100,this.icon=""}static get styles(){return o`
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
        `}render(){const t=this.max_value>0?100*this.value/this.max_value:0;return W`
            <div class="container clickable">
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
                    <div class="value">${this.value} ${this.unit}</div>
                </div>
            </div>
        `}};St([ht({type:String})],Et.prototype,"label",void 0),St([ht({type:Number})],Et.prototype,"value",void 0),St([ht({type:String})],Et.prototype,"unit",void 0),St([ht({type:Number})],Et.prototype,"max_value",void 0),St([ht({type:String})],Et.prototype,"icon",void 0),Et=St([at("progress-bar")],Et);var kt=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let Ct=class extends ot{constructor(){super(),this._isError=!1}static get styles(){return ut}_wifiIcon(t){return t>=-65?"mdi:wifi-strength-4":-65>t&&t>=-70?"mdi:wifi-strength-3":-70>t&&t>=-75?"mdi:wifi-strength-2":-75>t&&t>=-80?"mdi:wifi-strength-1":"mdi:wifi-strength-alert-outline"}render(){var t,e,i,s;if(!this.hass||!this.config)return W``;const n=Number(null===(t=this.wifiSignalEntity)||void 0===t?void 0:t.state),o=null===(e=this.statusEntity)||void 0===e?void 0:e.state,r=null===(i=this.vehicleConnectedEntity)||void 0===i?void 0:i.state,a=null===(s=this.chargingStatusEntity)||void 0===s?void 0:s.state;return this._isError="vent_required"===a||"diode check failed"===a||"gfci fault"===a||"no ground"===a||"stuck relay"===a||"gfci self-test failure"===a||"over temperature"===a,W`
            <div class="status-icons">
                ${this.wifiSignalEntity?W`
                          <div
                              class="status-icon clickable"
                              @click=${()=>{var t,e;return(null===(t=this.showMoreInfoHandler)||void 0===t?void 0:t.call(this,(null===(e=this.config)||void 0===e?void 0:e.wifi_signal_strength_entity)||""))||q}}
                          >
                              <ha-icon
                                  icon="${this._wifiIcon(n)}"
                                  class="wifi-icon"
                              ></ha-icon>
                          </div>
                      `:""}

                <div
                    class="status-icon clickable"
                    @click=${()=>{var t,e;return(null===(t=this.showMoreInfoHandler)||void 0===t?void 0:t.call(this,(null===(e=this.config)||void 0===e?void 0:e.status_entity)||""))||q}}
                >
                    <ha-icon
                        icon="${this._isError?"mdi:alert-circle":"active"===o?"off"===r?"mdi:timer-sand":"mdi:lightning-bolt":"mdi:cancel"}"
                        class="${this._isError?"erroricon":"active"===o?"charging"===a?"charging":"active bg-active":"disabled bg-disabled"}"
                    ></ha-icon>
                </div>

                <div
                    class="status-icon clickable"
                    @click=${()=>{var t,e;return(null===(t=this.showMoreInfoHandler)||void 0===t?void 0:t.call(this,(null===(e=this.config)||void 0===e?void 0:e.vehicle_connected_entity)||""))||q}}
                >
                    <ha-icon
                        icon="${"off"===r?"mdi:car-off":"mdi:car"}"
                        class="${"off"===r?"disabled bg-disabled":"active bg-active"}"
                    ></ha-icon>
                </div>
            </div>
        `}};kt([ht({attribute:!1})],Ct.prototype,"hass",void 0),kt([ht({attribute:!1})],Ct.prototype,"config",void 0),kt([ht({attribute:!1})],Ct.prototype,"wifiSignalEntity",void 0),kt([ht({attribute:!1})],Ct.prototype,"statusEntity",void 0),kt([ht({attribute:!1})],Ct.prototype,"vehicleConnectedEntity",void 0),kt([ht({attribute:!1})],Ct.prototype,"chargingStatusEntity",void 0),kt([ht({attribute:!1})],Ct.prototype,"showMoreInfoHandler",void 0),kt([dt()],Ct.prototype,"_isError",void 0),Ct=kt([at("status-icons")],Ct);var Ot=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let jt=class extends ot{constructor(){super(...arguments),this._isError=!1}static get styles(){return ut}render(){var t,e;const i=null===(t=this.chargingStatusEntity)||void 0===t?void 0:t.state,s=null===(e=this.statusEntity)||void 0===e?void 0:e.state;this._isError="vent_required"===i||"diode check failed"===i||"gfci fault"===i||"no ground"===i||"stuck relay"===i||"gfci self-test failure"===i||"over temperature"===i;const n=this._isError?"badge-error":"disabled"===s?"badge-disabled":"charging"===i?"badge-charging":"badge-active";return W`
            <div class="status-badge ${n}">
                ${pt(i||"",this.language)}
            </div>
        `}};Ot([ht({attribute:!1})],jt.prototype,"statusEntity",void 0),Ot([ht({attribute:!1})],jt.prototype,"chargingStatusEntity",void 0),Ot([ht({attribute:!1})],jt.prototype,"language",void 0),Ot([dt()],jt.prototype,"_isError",void 0),jt=Ot([at("status-heading")],jt);var At=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let Mt=class extends ot{constructor(){super(),this.localTimeElapsed=0}static get styles(){return ut}render(){return this.hass&&this.config&&this.convertTimeHandler?W`
            <div class="grid-container">
                ${this.powerEntity?W`
                          <div class="grid-item clickable"
                           @click=${()=>{var t,e;return(null===(t=this.showMoreInfoHandler)||void 0===t?void 0:t.call(this,null===(e=this.config)||void 0===e?void 0:e.power_entity))||q}}
                           >
                              <div class="grid-item-label">
                                  ${pt("power",this.language)}
                              </div>
                              <div class="grid-item-value">
                                  ${this.hass.formatEntityState(this.powerEntity)}
                              </div>
                          </div>
                      `:W` <div class="grid-item">
                          <div class="grid-item-label">
                              ${pt("power",this.language)}
                          </div>
                          <div class="grid-item-value">0 W</div>
                      </div>`}
                ${this.currentEntity?W`
                          <div class="grid-item clickable"
                          @click=${()=>{var t,e;return(null===(t=this.showMoreInfoHandler)||void 0===t?void 0:t.call(this,null===(e=this.config)||void 0===e?void 0:e.current_entity))||q}}
                          >
                              <div class="grid-item-label">
                                  ${pt("current",this.language)}
                              </div>
                              <div class="grid-item-value clickable">
                                  ${this.hass.formatEntityState(this.currentEntity)}
                              </div>
                          </div>
                      `:W` <div class="grid-item">
                          <div class="grid-item-label">
                              ${pt("current",this.language)}
                          </div>
                          <div class="grid-item-value">0 A</div>
                      </div>`}
                ${this.sessionEnergyEntity?W`
                              <div class="grid-item clickable"
                               @click=${()=>{var t,e;return(null===(t=this.showMoreInfoHandler)||void 0===t?void 0:t.call(this,null===(e=this.config)||void 0===e?void 0:e.session_energy_entity))||q}}
                              >
                                  <div class="grid-item-label">
                                      ${pt("session",this.language)}
                                  </div>
                                  <div
                                      class="grid-item-value clickable">
                                      ${this.hass.formatEntityState(this.sessionEnergyEntity)}
                                  </div>
                              </div>
                          `:W`
                              <div class="grid-item">
                                  <div class="grid-item-label">
                                      ${pt("session",this.language)}
                                  </div>
                                  <div class="grid-item-value">0 kWh</div>
                              </div>
                          `}
                ${this.timeElapsedEntity?W`
                          <div class="grid-item">
                              <div class="grid-item-label">
                                  ${pt("elapsed",this.language)}
                              </div>
                              <div class="grid-item-value">
                                  ${this.convertTimeHandler(this.localTimeElapsed||0)}
                              </div>
                          </div>
                      `:W` <div class="grid-item">
                          <div class="grid-item-label">
                              ${pt("elapsed",this.language)}
                          </div>
                          <div class="grid-item-value">00:00:00</div>
                      </div>`}
            </div>
        `:W``}};At([ht({attribute:!1})],Mt.prototype,"hass",void 0),At([ht({attribute:!1})],Mt.prototype,"config",void 0),At([ht({attribute:!1})],Mt.prototype,"powerEntity",void 0),At([ht({attribute:!1})],Mt.prototype,"currentEntity",void 0),At([ht({attribute:!1})],Mt.prototype,"sessionEnergyEntity",void 0),At([ht({attribute:!1})],Mt.prototype,"timeElapsedEntity",void 0),At([ht({type:Number})],Mt.prototype,"localTimeElapsed",void 0),At([ht({type:String})],Mt.prototype,"language",void 0),At([ht({attribute:!1})],Mt.prototype,"showMoreInfoHandler",void 0),At([ht({attribute:!1})],Mt.prototype,"convertTimeHandler",void 0),Mt=At([at("info-grid")],Mt);var zt=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let Lt=class extends ot{static get styles(){return ut}render(){var t,e,i,s;if(!this.config)return W``;const n=this.config.feat_soc&&this.vehicleBatteryLevelEntity,o=this.config.feat_range&&this.vehicleRangeEntity;return n||o?W`
            <div class="vehicle">
                ${n?W`
                          <progress-bar
                              value=${Number(null===(t=this.vehicleBatteryLevelEntity)||void 0===t?void 0:t.state)}
                              unit="%"
                              icon="mdi:battery-medium"
                              @click=${()=>{var t,e;return(null===(t=this.showMoreInfoHandler)||void 0===t?void 0:t.call(this,(null===(e=this.config)||void 0===e?void 0:e.vehicle_battery_level_entity)||""))||q}}
                          ></progress-bar> 
                      `:""}
                ${o?W`
                          <progress-bar
                              value=${Number(null===(e=this.vehicleRangeEntity)||void 0===e?void 0:e.state)}
                              max_value=${(null===(i=this.config)||void 0===i?void 0:i.feat_max_range)||600}
                              unit=${(null===(s=this.vehicleRangeEntity)||void 0===s?void 0:s.attributes.unit_of_measurement)||q}
                              icon="mdi:map-marker-distance"
                              @click=${()=>{var t,e;return(null===(t=this.showMoreInfoHandler)||void 0===t?void 0:t.call(this,(null===(e=this.config)||void 0===e?void 0:e.vehicle_range_entity)||""))||q}}
                          ></progress-bar>
                      `:""}
            </div>
        `:W``}};zt([ht({attribute:!1})],Lt.prototype,"config",void 0),zt([ht({attribute:!1})],Lt.prototype,"vehicleBatteryLevelEntity",void 0),zt([ht({attribute:!1})],Lt.prototype,"vehicleRangeEntity",void 0),zt([ht({attribute:!1})],Lt.prototype,"showMoreInfoHandler",void 0),Lt=zt([at("vehicle-info")],Lt);var Vt=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let Nt=class extends ot{constructor(){super(),this._handleActiveClick=this._handleActiveClick.bind(this),this._handleAutoClick=this._handleAutoClick.bind(this),this._handleDisabledClick=this._handleDisabledClick.bind(this)}static get styles(){return ut}_handleActiveClick(){var t;const e=null===(t=this.config)||void 0===t?void 0:t.override_entity;this.selectOverrideStateHandler&&"string"==typeof e&&e&&this.selectOverrideStateHandler(e,"active")}_handleAutoClick(){var t;const e=null===(t=this.config)||void 0===t?void 0:t.override_entity;this.selectOverrideStateHandler&&"string"==typeof e&&e&&this.selectOverrideStateHandler(e,"auto")}_handleDisabledClick(){var t;const e=null===(t=this.config)||void 0===t?void 0:t.override_entity;this.selectOverrideStateHandler&&"string"==typeof e&&e&&this.selectOverrideStateHandler(e,"disabled")}render(){var t,e;if(!this.config||!this.overrideEntity)return W``;const i=null===(t=this.overrideEntity)||void 0===t?void 0:t.state,s=null===(e=this.chargingStatusEntity)||void 0===e?void 0:e.state;return W`
            <div class="override-controls">
                <div class="override-row">
                    <div
                        class="override-button ${"active"===i?"active":""}"
                        data-option="active"
                        @click=${this._handleActiveClick}
                    >
                        <ha-icon
                            icon="mdi:lightning-bolt"
                            class="${"active"===i&&"charging"===s?"charging":""}"
                        ></ha-icon>
                    </div>
                    <div
                        class="override-button ${"auto"===i?"active":""}"
                        data-option="auto"
                        @click=${this._handleAutoClick}
                    >
                        <ha-icon
                            icon="mdi:robot"
                            class="${"auto"===i&&"charging"===s?"charging":""}"
                        ></ha-icon>
                    </div>
                    <div
                        class="override-button ${"disabled"===i?"active":""}"
                        data-option="disabled"
                        @click=${this._handleDisabledClick}
                    >
                        <ha-icon icon="mdi:cancel"></ha-icon>
                    </div>
                </div>
            </div>
        `}};Vt([ht({attribute:!1})],Nt.prototype,"config",void 0),Vt([ht({attribute:!1})],Nt.prototype,"overrideEntity",void 0),Vt([ht({attribute:!1})],Nt.prototype,"chargingStatusEntity",void 0),Vt([ht({attribute:!1})],Nt.prototype,"selectOverrideStateHandler",void 0),Nt=Vt([at("override-controls")],Nt);var Pt=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let Tt=class extends ot{constructor(){super(...arguments),this.entities=[]}static get styles(){return ut}render(){return this.hass&&this.entities&&0!==this.entities.length?W`
            <div>
                ${this.entities.map(t=>{var e,i;return W`
                        <div class="other-entities-container clickable"
                        @click=${()=>{var e;return null===(e=this.showMoreInfoHandler)||void 0===e?void 0:e.call(this,t.id||"")}}>
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
                                    data-entity-id=${null!==(e=t.id)&&void 0!==e?e:""}
                                >
                                    ${null!==(i=t.value)&&void 0!==i?i:""}
                            </div>
                        </div>
                    </div>
                `})}
            </div>
        `:W``}};Pt([ht({attribute:!1})],Tt.prototype,"hass",void 0),Pt([ht({attribute:!1})],Tt.prototype,"entities",void 0),Pt([ht({attribute:!1})],Tt.prototype,"showMoreInfoHandler",void 0),Tt=Pt([at("optional-entities")],Tt);var Ht=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};class It extends ot{constructor(){super(...arguments),this.state1Value="off",this.state2Value="on",this.currentState=this.state1Value,this.iconState1="mdi:toggle-switch-off-outline",this.colorState1="var(--primary-text-color)",this.iconState2="mdi:toggle-switch",this.colorState2="var(--primary-color)",this.titleState1="Switch to state 2",this.titleState2="Switch to state 1",this.heigth=0,this.fontSize="1rem"}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleClick)}_handleClick(){const t=this.currentState===this.state1Value?this.state2Value:this.state1Value;this.clickHandler&&this.clickHandler(t)}render(){const t="eco"===this.currentState,e=t?this.iconState1:this.iconState2,i=t?this.colorState1:this.colorState2,s=t?this.iconState2:this.iconState1,n=t?this.colorState2:this.colorState1,o=t?this.titleState1:this.titleState2,r=.7*this.heigth||18,a=`\n            :host {\n                --toggle-icon: "${e}";\n                --toggle-color: ${i};\n                --hover-icon: "${s}";\n                --hover-color: ${n};\n                --font-size: ${this.fontSize};\n                background-color: ${i};\n                ${this.heigth?`height:${this.heigth}px`:""};\n                font-size: var(--font-size);\n            }\n            :host:active {\n                font-size: calc(var(--font-size) * 0.8);\n\n            }\n            :host ha-icon {\n                color: var(--primary-text-color);\n                --mdc-icon-size: ${r}px;\n            }\n        `;return W`
            <style>
                ${a}
            </style>
            <ha-icon
                class="current-icon"
                .icon=${e}
                .title=${o}
            ></ha-icon>
            <ha-icon
                class="hover-icon"
                .icon=${s}
                .title=${o}
            ></ha-icon>
            <span class='label current-label'>${pt(String(this.currentState),this.language)}</span>
            <span class='label hover-label'>${this.currentState==this.state1Value?pt(String(this.state2Value),this.language):pt(String(this.state1Value),this.language)}</span>
        `}}It.styles=o`
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
    `,Ht([ht({attribute:!1})],It.prototype,"hass",void 0),Ht([ht({type:String})],It.prototype,"state1Value",void 0),Ht([ht({type:String})],It.prototype,"state2Value",void 0),Ht([ht({type:String})],It.prototype,"currentState",void 0),Ht([ht({attribute:!1})],It.prototype,"clickHandler",void 0),Ht([ht({type:String})],It.prototype,"iconState1",void 0),Ht([ht({type:String})],It.prototype,"colorState1",void 0),Ht([ht({type:String})],It.prototype,"iconState2",void 0),Ht([ht({type:String})],It.prototype,"colorState2",void 0),Ht([ht({type:String})],It.prototype,"titleState1",void 0),Ht([ht({type:String})],It.prototype,"titleState2",void 0),Ht([ht({type:Number})],It.prototype,"heigth",void 0),Ht([ht({type:String})],It.prototype,"fontSize",void 0),Ht([ht({type:String})],It.prototype,"language",void 0),customElements.define("toggle-button",It);var Rt=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},Ut=function(t,e,i,s){return new(i||(i=Promise))(function(n,o){function r(t){try{l(s.next(t))}catch(t){o(t)}}function a(t){try{l(s.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i(function(t){t(e)})).then(r,a)}l((s=s.apply(t,e||[])).next())})};const Wt=["ha-form","ha-icon","ha-icon-button","ha-selector","ha-input","ha-icon-picker","ha-icon-button","ha-entity-picker","ha-select","ha-dialog","ha-sortable","ha-svg-icon","ha-alert","ha-button"];class Dt extends ot{constructor(){super(),this._localTimeElapsed=0,this._lastEntityTime=0,this._timeUpdateInterval=null,this._isCharging=!1,this._limit=null,this._hasLimit=!1,this._integrationVersionOk=void 0,this._selectOverrideState=(t,e)=>{this._callService("select","select_option",{entity_id:t,option:e.toString()})},this._setLimit=(t,e)=>{var i;this._callService("openevse","set_limit",{device_id:null===(i=this.config)||void 0===i?void 0:i.device_id,type:t,value:e,auto_release:!0})},this._delLimit=()=>{var t;this._callService("openevse","clear_limit",{device_id:null===(t=this.config)||void 0===t?void 0:t.device_id})},this._showMoreInfo=t=>{if(!t)return;const e=new Event("hass-more-info",{bubbles:!0,composed:!0});e.detail={entityId:t},this.dispatchEvent(e)},this._updateSlider=t=>{var e;(null===(e=this.config)||void 0===e?void 0:e.charge_rate_entity)&&this._callService("number","set_value",{entity_id:this.config.charge_rate_entity,value:t.detail.value})},this._showMoreInfo=this._showMoreInfo.bind(this),this._convertTime=this._convertTime.bind(this),this._selectOverrideState=this._selectOverrideState.bind(this),this._setLimit=this._setLimit.bind(this),this._delLimit=this._delLimit.bind(this),this._toggleDivertMode=this._toggleDivertMode.bind(this)}disconnectedCallback(){super.disconnectedCallback(),this._timeUpdateInterval&&(clearInterval(this._timeUpdateInterval),this._timeUpdateInterval=null)}firstUpdated(){return Ut(this,void 0,void 0,function*(){var t,e;try{yield(async t=>{const e=t||gt;try{if(e.every(t=>customElements.get(t)))return;await Promise.race([customElements.whenDefined("partial-panel-resolver"),new Promise((t,e)=>setTimeout(()=>e(new Error("Timeout waiting for partial-panel-resolver")),1e4))]);const t=document.createElement("partial-panel-resolver");if(!t)throw new Error("Failed to create partial-panel-resolver element");if(t.hass={panels:[{url_path:"tmp",component_name:"config"}]},"function"!=typeof t._updateRoutes)throw new Error("partial-panel-resolver does not have _updateRoutes method");if(t._updateRoutes(),!t.routerOptions?.routes?.tmp?.load)throw new Error("Failed to create tmp route in partial-panel-resolver");await Promise.race([t.routerOptions.routes.tmp.load(),new Promise((t,e)=>setTimeout(()=>e(new Error("Timeout loading tmp route")),1e4))]),await Promise.race([customElements.whenDefined("ha-panel-config"),new Promise((t,e)=>setTimeout(()=>e(new Error("Timeout waiting for ha-panel-config")),1e4))]);const i=document.createElement("ha-panel-config");if(!i)throw new Error("Failed to create ha-panel-config element");if(!i.routerOptions?.routes?.automation?.load)throw new Error("ha-panel-config does not have automation route");await Promise.race([i.routerOptions.routes.automation.load(),new Promise((t,e)=>setTimeout(()=>e(new Error("Timeout loading automation components")),1e4))]);const s=e.filter(t=>!customElements.get(t));if(s.length>0)throw new Error(`Failed to load components: ${s.join(", ")}`)}catch(t){console.error("Error loading Home Assistant form components:",t);try{if(window.customElements&&window.customElements.get("home-assistant")){console.log("Attempting fallback loading method for HA components");const t=new CustomEvent("ha-request-load-components",{detail:{components:e},bubbles:!0,composed:!0});document.dispatchEvent(t)}}catch(t){console.error("Fallback loading method failed:",t)}}})(Wt)}catch(t){console.error("Error loading ha-components:",t)}if(this._lang=(null===(t=this.hass)||void 0===t?void 0:t.language)||"en",this.hass)try{let t=yield(e=this.hass,mt(void 0,void 0,void 0,function*(){try{return(yield e.callWS({type:"manifest/get",integration:"openevse"})).version}catch(t){return console.error("Error fetching OpenEVSE integration manifest:",t),"0"}}));if("0.0.0-dev"==t&&(t="9.9"),"0"===t)console.warn("OpenEVSE integration not found or version could not be determined."),this._integrationVersionOk=!1;else{const e=((t,e)=>{var i,s;const n=t=>{if("0.0.0-dev"===t)return{core:[Number.MAX_SAFE_INTEGER],beta:null};const e=t.match(/^(\d+(?:\.\d+)*?)-b(\d+)$/i);return e?{core:e[1].split(".").map(Number),beta:Number(e[2])}:{core:t.split(".").map(Number),beta:null}},o=n(t),r=n(e),a=Math.max(o.core.length,r.core.length);for(let t=0;t<a;t++){const e=null!==(i=o.core[t])&&void 0!==i?i:0,n=null!==(s=r.core[t])&&void 0!==s?s:0;if(e>n)return 1;if(e<n)return-1}return null===o.beta&&null===r.beta?0:null===o.beta?1:null===r.beta?-1:o.beta>r.beta?1:o.beta<r.beta?-1:0})(t,ft);this._integrationVersionOk=e>=0,this._integrationVersionOk||console.warn(`OpenEVSE integration version ${t} is below the required minimum ${ft}.`)}}catch(t){console.error("Error checking OpenEVSE integration version:",t),this._integrationVersionOk=!1}else console.warn("Hass object not available during firstUpdated for version check."),this._integrationVersionOk=!1})}getGridOptions(){return{columns:12,max_columns:12,min_columns:9}}_setupTimeInterval(){this._timeUpdateInterval&&(clearInterval(this._timeUpdateInterval),this._timeUpdateInterval=null),this._isCharging&&(this._timeUpdateInterval=window.setInterval(()=>{this._localTimeElapsed+=1/60},1e3))}updated(t){if(t.has("hass")&&this.hass){if(this._lang=this.hass.language||"en",this.config&&this.config.charging_status_entity&&this.hass.states[this.config.charging_status_entity]){const t="charging"===this.hass.states[this.config.charging_status_entity].state;t!==this._isCharging&&(this._isCharging=t,this._setupTimeInterval())}if(this.config&&this.config.time_elapsed_entity&&this.hass.states[this.config.time_elapsed_entity]){const t=this.hass.states[this.config.time_elapsed_entity],e=parseFloat(t.state);isNaN(e)||e===this._lastEntityTime||(this._lastEntityTime=e,this._localTimeElapsed=e)}if(this.config&&this.config.limit_active_entity&&this.hass.states[this.config.limit_active_entity]){const t="on"===this.hass.states[this.config.limit_active_entity].state;t!=this._hasLimit&&(this._hasLimit=t,this.config.device_id&&this._getLimit().then(t=>{this._limit=t}))}}if(t.has("config")&&!t.has("hass")&&this.config&&this.hass){if(this.config.charging_status_entity&&this.hass.states[this.config.charging_status_entity]){const t=this.hass.states[this.config.charging_status_entity];this._isCharging="charging"===t.state}if(this.config.time_elapsed_entity&&this.hass.states[this.config.time_elapsed_entity]){const t=this.hass.states[this.config.time_elapsed_entity];t&&(this._lastEntityTime=parseFloat(t.state),this._localTimeElapsed=this._lastEntityTime,this._isCharging&&this._setupTimeInterval())}}}static getConfigElement(){return document.createElement("openevse-card-editor")}static getStubConfig(){return{header:!0,name:"OpenEVSE",feat_soc:!1,feat_range:!1,feat_max_range:600,feat_max_energy:100,device_id:"",override_entity:"",status_entity:"",power_entity:"",current_entity:"",charge_rate_entity:"",vehicle_connected_entity:"",charging_status_entity:"",session_energy_entity:"",time_elapsed_entity:"",wifi_signal_strength_entity:"",limit_active_entity:"",divert_active_entity:"",divert_mode_entity:"",pv_charge_rate_entity:"",vehicle_battery_level_entity:"",vehicle_range_entity:"",optional_entities:[]}}static get styles(){return ut}setConfig(t){this.config=t}getCardSize(){return 3}_callService(t,e,i,s={}){var n;if(this.hass)try{return this.hass.callService(t,e,i,void 0,!1,null!==(n=s.awaitResponse)&&void 0!==n&&n)}catch(i){console.error(`Error calling service ${t}.${e}`,i)}}_toggleDivertMode(){var t;const e=this._getEntityState("divert_mode_entity");if(!e)return;const i="fast"===e.state?"eco":"fast";this._callService("select","select_option",{entity_id:null===(t=this.config)||void 0===t?void 0:t.divert_mode_entity,option:i})}_getLimit(){return Ut(this,void 0,void 0,function*(){var t;if(!this.hass)return null;try{const e=yield this._callService("openevse","get_limit",{device_id:null===(t=this.config)||void 0===t?void 0:t.device_id},{awaitResponse:!0});return(null==e?void 0:e.response)?e.response:null}catch(t){return console.error("Error while getting limit",t),null}})}_getEntityState(t){var e,i;const s=null===(e=this.config)||void 0===e?void 0:e[t];return"string"==typeof s&&s&&(null===(i=this.hass)||void 0===i?void 0:i.states)&&this.hass.states[s]||null}_convertSeconds(t){if(isNaN(t)||t<0||void 0===t)return"--:--:--";return[Math.floor(t/3600),Math.floor(t%3600/60),Math.floor(t%60)].map(t=>String(t).padStart(2,"0")).join(":")}_convertTime(t){if(isNaN(t)||t<0)return"00:00:00";const e=Math.round(60*t);return this._convertSeconds(e)}_getOptionalEntities(){var t,e,i;return null!==(i=null===(e=null===(t=this.config)||void 0===t?void 0:t.optional_entities)||void 0===e?void 0:e.map(t=>{var e,i,s,n,o,r;let a,l=null;if("string"==typeof t)a=t;else if("object"==typeof t&&null!==t){const e=t.entity,i=t.id;a=null!=e?e:i,l=t}if(!a||"string"!=typeof a)return{name:"Invalid Config",value:null,icon:void 0,id:void 0};const c=null===(e=this.hass)||void 0===e?void 0:e.states[a],h=null==c?void 0:c.attributes,d=null==h?void 0:h.friendly_name,u=null==h?void 0:h.icon;return{name:null!==(s=null!==(i=null==l?void 0:l.name)&&void 0!==i?i:d)&&void 0!==s?s:a,value:c&&null!==(o=null===(n=this.hass)||void 0===n?void 0:n.formatEntityState(c))&&void 0!==o?o:null,icon:null!==(r=null==l?void 0:l.icon)&&void 0!==r?r:u,id:a}}).filter(t=>void 0!==t.id))&&void 0!==i?i:[]}render(){if(!this.hass||!this.config)return W``;const t=this._getEntityState("override_entity"),e=this._getEntityState("status_entity"),i=this._getEntityState("power_entity"),s=this._getEntityState("current_entity"),n=this._getEntityState("charge_rate_entity"),o=this._getEntityState("vehicle_connected_entity"),r=this._getEntityState("charging_status_entity"),a=this._getEntityState("session_energy_entity"),l=this._getEntityState("time_elapsed_entity"),c=this._getEntityState("wifi_signal_strength_entity"),h=this._getEntityState("divert_active_entity"),d=this._getEntityState("divert_mode_entity"),u=this._getEntityState("pv_charge_rate_entity"),v=this._getEntityState("vehicle_battery_level_entity"),p=this._getEntityState("vehicle_range_entity"),g=this._getOptionalEntities();return W`
            <ha-card>
                ${!1===this._integrationVersionOk?W`
                          <ha-alert
                              alert-type="warning"
                              title="${pt("warning",this._lang)}"
                          >
                              ${pt("integration_missing_or_outdated",this._lang).replace("{min_version}",ft)}
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
                            .vehicleConnectedEntity=${o}
                            .chargingStatusEntity=${r}
                            .showMoreInfoHandler=${this._showMoreInfo}
                        ></status-icons>
                        <div class="status-header-line">
                            ${"on"==(null==h?void 0:h.state)&&d?W`
                            <toggle-button
                                .hass=${this.hass}
                                .label=${"eco"==d.state?pt("eco",this._lang):pt("fast",this._lang)}
                                .heigth=${24}
                                .currentState=${d.state}
                                .state1Value=${"eco"}
                                .state2Value=${"fast"}
                                .iconState1=${"mdi:solar-panel"}
                                .colorState1=${"var(--evse-active-color)"}
                                .iconState2=${"mdi:transmission-tower-export"}
                                .colorState2=${"var(--info-color)"}
                                .titleState1=${pt("switch to fast mode",this._lang)}
                                .titleState2=${pt("switch to eco mode",this._lang)}
                                .fintSize=${"14px"}
                                .clickHandler=${this._toggleDivertMode}
                                .language=${this._lang}
                            ></toggle-button>
                            `:q}
                             <status-heading
                                .statusEntity=${e}
                                .chargingStatusEntity=${r}
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
                        .timeElapsedEntity=${l}
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
                                .chargingStatusEntity=${r}
                                .selectOverrideStateHandler=${this._selectOverrideState}
                            ></override-controls>
                        </div>
                        ${"on"==(null==h?void 0:h.state)&&d?W`
                        <div class="divert-toggle">
                            
                        </div>
                        `:q}
                    </div>
                    <div class="container">
                        <evse-slider
                            .min=${"number"==typeof(null==n?void 0:n.attributes.min)?n.attributes.min:0}
                            .max=${"number"==typeof(null==n?void 0:n.attributes.max)?n.attributes.max:32}
                            .step=${"number"==typeof(null==n?void 0:n.attributes.step)?n.attributes.step:1}
                            .value=${Number("on"==(null==h?void 0:h.state)&&"eco"==(null==d?void 0:d.state)?null==u?void 0:u.state:(null==n?void 0:n.state)||0)}
                            .unit=${"string"==typeof(null==n?void 0:n.attributes.unit_of_measurement)?n.attributes.unit_of_measurement:"A"}
                            .label=${pt("charge rate",this._lang)}
                            .disabled=${!n||"on"==(null==h?void 0:h.state)&&"eco"==(null==d?void 0:d.state)}
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
                                      .range_unit=${String((null==p?void 0:p.attributes.unit_of_measurement)||"")}
                                      .evse_elapsed=${Number(this._localTimeElapsed)||0}
                                      .evse_energy=${Number(null==a?void 0:a.state)||0}
                                      .evse_soc=${Number(null==v?void 0:v.state)||0}
                                      .evse_range=${Number(null==p?void 0:p.state)||0}
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
        `}}Rt([ht({attribute:!1})],Dt.prototype,"hass",void 0),Rt([ht({attribute:!1})],Dt.prototype,"config",void 0),Rt([dt()],Dt.prototype,"_lang",void 0),Rt([dt()],Dt.prototype,"_localTimeElapsed",void 0),Rt([dt()],Dt.prototype,"_lastEntityTime",void 0),Rt([dt()],Dt.prototype,"_timeUpdateInterval",void 0),Rt([dt()],Dt.prototype,"_isCharging",void 0),Rt([dt()],Dt.prototype,"_limit",void 0),Rt([dt()],Dt.prototype,"_hasLimit",void 0),Rt([dt()],Dt.prototype,"_integrationVersionOk",void 0);var qt=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function Ft(t,e){return t===e||!(!qt(t)||!qt(e))}function Bt(t,e){if(t.length!==e.length)return!1;for(var i=0;i<t.length;i++)if(!Ft(t[i],e[i]))return!1;return!0}function Zt(t,e){void 0===e&&(e=Bt);var i=null;function s(){for(var s=[],n=0;n<arguments.length;n++)s[n]=arguments[n];if(i&&i.lastThis===this&&e(s,i.lastArgs))return i.lastResult;var o=t.apply(this,s);return i={lastResult:o,lastArgs:s,lastThis:this},o}return s.clear=function(){i=null},s}function Kt(t,e,i,s,n,o={},r="en"){return{name:t,selector:{entity:{domain:e,include_entities:(Array.isArray(e)?e:[e]).flatMap(t=>o[t]||[])}},label:pt(i,r),helper_text:pt(s,r),required:n}}const Gt=Zt((t={},e="en")=>[...[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}},required:!1,label:pt("header title",e)},{name:"header",selector:{boolean:{}},label:pt("display header",e)}]},{type:"grid",name:"",label:pt("features",e),schema:[{name:"feat_soc",selector:{boolean:{}},label:pt("enable vehicle battery",e)},{name:"feat_range",selector:{boolean:{}},label:pt("enable vehicle range",e)}]},{type:"grid",name:"",label:pt("limits settings",e),schema:[{name:"feat_max_energy",selector:{number:{}},required:!1,label:pt("maximum charge energy",e)},{name:"feat_max_range",selector:{number:{}},required:!1,label:pt("maximum vehicle range",e)}]},{name:"device_id",selector:{device:{integration:"openevse",manufacturer:"OpenEVSE"}},label:pt("openevse device",e),helper_text:pt("select your openevse device",e),required:!0}],...[Kt("override_entity",["input_select","select"],"override state","select openevse.override_state entity",!0,t,e),Kt("status_entity","sensor","station status","select openevse.station_status entity",!0,t,e),Kt("power_entity","sensor","current power usage","select openevse.current_power_usage entity",!0,t,e),Kt("current_entity","sensor","charging current","select openevse.charging_current entity",!0,t,e),Kt("vehicle_connected_entity","binary_sensor","vehicle connected","select openevse.vehicle_connected entity",!0,t,e),Kt("charging_status_entity","sensor","charging status","select openevse.charging_status entity",!0,t,e),Kt("charge_rate_entity","number","charge rate","select openevse.charge_rate entity",!0,t,e),Kt("session_energy_entity","sensor","session energy","select openevse.usage_this_session entity",!0,t,e),Kt("time_elapsed_entity","sensor","charge time elapsed","select openevse.charge_time_elapsed entity",!0,t,e),Kt("wifi_signal_strength_entity","sensor","wifi signal","select openevse_wifi_signal_strength entity",!1,t,e),Kt("limit_active_entity","binary_sensor","limit active","select openevse_limit_active entity",!1,t,e),Kt("divert_active_entity","binary_sensor","divert active","select openevse_divert_active entity",!1,t,e),Kt("divert_mode_entity","select","divert mode","select openevse_divert_mode",!1,t,e),Kt("pv_charge_rate_entity","sensor","Divert pv charge rate","select openevse_pv_charge_rate entity",!1,t,e),Kt("vehicle_range_entity","sensor","vehicle range","select openevse_vehicle_range entity",!1,t,e),Kt("vehicle_battery_level_entity","sensor","battery level","select openevse_vehicle_battery_level entity",!1,t,e)]]);Zt((t={},e="en")=>[{name:"id",selector:{entity:{domain:["sensor","binary_sensor"],include_entities:[...t.sensor||[],...t.binary_sensor||[]]}},label:pt("entity",e)},{name:"name",selector:{text:{}},label:pt("name",e)},{name:"icon",selector:{icon:{}},label:pt("icon",e)}]);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Jt=globalThis,Yt=Jt.ShadowRoot&&(void 0===Jt.ShadyCSS||Jt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qt=Symbol(),Xt=new WeakMap;let te=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Qt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Yt&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=Xt.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Xt.set(e,t))}return t}toString(){return this.cssText}};const ee=Yt?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new te("string"==typeof t?t:t+"",void 0,Qt))(e)})(t):t,{is:ie,defineProperty:se,getOwnPropertyDescriptor:ne,getOwnPropertyNames:oe,getOwnPropertySymbols:re,getPrototypeOf:ae}=Object,le=globalThis,ce=le.trustedTypes,he=ce?ce.emptyScript:"",de=le.reactiveElementPolyfillSupport,ue=(t,e)=>t,ve={toAttribute(t,e){switch(e){case Boolean:t=t?he:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},pe=(t,e)=>!ie(t,e),ge={attribute:!0,type:String,converter:ve,reflect:!1,useDefault:!1,hasChanged:pe};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),le.litPropertyMetadata??=new WeakMap;let me=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ge){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&se(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=ne(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);n?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ge}static _$Ei(){if(this.hasOwnProperty(ue("elementProperties")))return;const t=ae(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ue("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ue("properties"))){const t=this.properties,e=[...oe(t),...re(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(ee(t))}else void 0!==t&&e.push(ee(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(Yt)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),s=Jt.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:ve).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:ve;this._$Em=s;const o=n.fromAttribute(e,t.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,i,s=!1,n){if(void 0!==t){const o=this.constructor;if(!1===s&&(n=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??pe)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==n||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};me.elementStyles=[],me.shadowRootOptions={mode:"open"},me[ue("elementProperties")]=new Map,me[ue("finalized")]=new Map,de?.({ReactiveElement:me}),(le.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fe=globalThis,ye=t=>t,be=fe.trustedTypes,_e=be?be.createPolicy("lit-html",{createHTML:t=>t}):void 0,we="$lit$",xe=`lit$${Math.random().toFixed(9).slice(2)}$`,$e="?"+xe,Se=`<${$e}>`,Ee=document,ke=()=>Ee.createComment(""),Ce=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Oe=Array.isArray,je="[ \t\n\f\r]",Ae=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Me=/-->/g,ze=/>/g,Le=RegExp(`>|${je}(?:([^\\s"'>=/]+)(${je}*=${je}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Ve=/'/g,Ne=/"/g,Pe=/^(?:script|style|textarea|title)$/i,Te=(t,...e)=>({_$litType$:1,strings:t,values:e}),He=Symbol.for("lit-noChange"),Ie=Symbol.for("lit-nothing"),Re=new WeakMap,Ue=Ee.createTreeWalker(Ee,129);function We(t,e){if(!Oe(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==_e?_e.createHTML(e):e}class De{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,c]=((t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":3===e?"<math>":"",r=Ae;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(r.lastIndex=h,l=r.exec(i),null!==l);)h=r.lastIndex,r===Ae?"!--"===l[1]?r=Me:void 0!==l[1]?r=ze:void 0!==l[2]?(Pe.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=Le):void 0!==l[3]&&(r=Le):r===Le?">"===l[0]?(r=n??Ae,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?Le:'"'===l[3]?Ne:Ve):r===Ne||r===Ve?r=Le:r===Me||r===ze?r=Ae:(r=Le,n=void 0);const d=r===Le&&t[e+1].startsWith("/>")?" ":"";o+=r===Ae?i+Se:c>=0?(s.push(a),i.slice(0,c)+we+i.slice(c)+xe+d):i+xe+(-2===c?e:d)}return[We(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(t,e);if(this.el=De.createElement(l,i),Ue.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Ue.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(we)){const e=c[o++],i=s.getAttribute(t).split(xe),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:r[2],strings:i,ctor:"."===r[1]?Ke:"?"===r[1]?Ge:"@"===r[1]?Je:Ze}),s.removeAttribute(t)}else t.startsWith(xe)&&(a.push({type:6,index:n}),s.removeAttribute(t));if(Pe.test(s.tagName)){const t=s.textContent.split(xe),e=t.length-1;if(e>0){s.textContent=be?be.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],ke()),Ue.nextNode(),a.push({type:2,index:++n});s.append(t[e],ke())}}}else if(8===s.nodeType)if(s.data===$e)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(xe,t+1));)a.push({type:7,index:n}),t+=xe.length-1}n++}}static createElement(t,e){const i=Ee.createElement("template");return i.innerHTML=t,i}}function qe(t,e,i=t,s){if(e===He)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const o=Ce(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=qe(t,n._$AS(t,e.values),n,s)),e}class Fe{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??Ee).importNode(e,!0);Ue.currentNode=s;let n=Ue.nextNode(),o=0,r=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Be(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new Ye(n,this,t)),this._$AV.push(e),a=i[++r]}o!==a?.index&&(n=Ue.nextNode(),o++)}return Ue.currentNode=Ee,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Be{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=Ie,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=qe(this,t,e),Ce(t)?t===Ie||null==t||""===t?(this._$AH!==Ie&&this._$AR(),this._$AH=Ie):t!==this._$AH&&t!==He&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>Oe(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Ie&&Ce(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ee.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=De.createElement(We(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Fe(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Re.get(t.strings);return void 0===e&&Re.set(t.strings,e=new De(t)),e}k(t){Oe(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new Be(this.O(ke()),this.O(ke()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=ye(t).nextSibling;ye(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Ze{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=Ie,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Ie}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=qe(this,t,e,0),o=!Ce(t)||t!==this._$AH&&t!==He,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=qe(this,s[i+r],e,r),a===He&&(a=this._$AH[r]),o||=!Ce(a)||a!==this._$AH[r],a===Ie?t=Ie:t!==Ie&&(t+=(a??"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===Ie?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ke extends Ze{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Ie?void 0:t}}class Ge extends Ze{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Ie)}}class Je extends Ze{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=qe(this,t,e,0)??Ie)===He)return;const i=this._$AH,s=t===Ie&&i!==Ie||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==Ie&&(i===Ie||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Ye{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){qe(this,t)}}const Qe={I:Be},Xe=fe.litHtmlPolyfillSupport;Xe?.(De,Be),(fe.litHtmlVersions??=[]).push("3.3.3");const ti=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ei=class extends me{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new Be(e.insertBefore(ke(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return He}};ei._$litElement$=!0,ei.finalized=!0,ti.litElementHydrateSupport?.({LitElement:ei});const ii=ti.litElementPolyfillSupport;ii?.({LitElement:ei}),(ti.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const si={attribute:!0,type:String,converter:ve,reflect:!1,hasChanged:pe},ni=(t=si,e,i)=>{const{kind:s,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function oi(t){return(e,i)=>"object"==typeof i?ni(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ri(t){return oi({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ai=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:li}=Qe,ci=t=>t,hi=()=>document.createComment(""),di=(t,e,i)=>{const s=t._$AA.parentNode,n=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=s.insertBefore(hi(),n),o=s.insertBefore(hi(),n);i=new li(e,o,t,t.options)}else{const e=i._$AB.nextSibling,o=i._$AM,r=o!==t;if(r){let e;i._$AQ?.(t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==o._$AU&&i._$AP(e)}if(e!==n||r){let t=i._$AA;for(;t!==e;){const e=ci(t).nextSibling;ci(s).insertBefore(t,n),t=e}}}return i},ui=(t,e,i=t)=>(t._$AI(e,i),t),vi={},pi=t=>{t._$AR(),t._$AA.remove()},gi=(t,e,i)=>{const s=new Map;for(let n=e;n<=i;n++)s.set(t[n],n);return s},mi=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends ai{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let s;void 0===i?i=e:void 0!==e&&(s=e);const n=[],o=[];let r=0;for(const e of t)n[r]=s?s(e,r):r,o[r]=i(e,r),r++;return{values:o,keys:n}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,s]){const n=(t=>t._$AH)(t),{values:o,keys:r}=this.dt(e,i,s);if(!Array.isArray(n))return this.ut=r,o;const a=this.ut??=[],l=[];let c,h,d=0,u=n.length-1,v=0,p=o.length-1;for(;d<=u&&v<=p;)if(null===n[d])d++;else if(null===n[u])u--;else if(a[d]===r[v])l[v]=ui(n[d],o[v]),d++,v++;else if(a[u]===r[p])l[p]=ui(n[u],o[p]),u--,p--;else if(a[d]===r[p])l[p]=ui(n[d],o[p]),di(t,l[p+1],n[d]),d++,p--;else if(a[u]===r[v])l[v]=ui(n[u],o[v]),di(t,n[d],n[u]),u--,v++;else if(void 0===c&&(c=gi(r,v,p),h=gi(a,d,u)),c.has(a[d]))if(c.has(a[u])){const e=h.get(r[v]),i=void 0!==e?n[e]:null;if(null===i){const e=di(t,n[d]);ui(e,o[v]),l[v]=e}else l[v]=ui(i,o[v]),di(t,n[d],i),n[e]=null;v++}else pi(n[u]),u--;else pi(n[d]),d++;for(;v<=p;){const e=di(t,l[p+1]);ui(e,o[v]),l[v++]=e}for(;d<=u;){const t=n[d++];null!==t&&pi(t)}return this.ut=r,((t,e=vi)=>{t._$AH=e})(t,l),He}}),fi=["ha-form","ha-icon","ha-icon-button","ha-selector","ha-textfield","ha-icon-picker","ha-icon-button","ha-entity-picker","ha-select","ha-dialog","ha-sortable","ha-svg-icon","ha-alert","ha-button","ha-color-picker","ha-badge","ha-sankey-chart","mwc-button"],yi=async t=>{const e=t||fi;try{if(e.every(t=>customElements.get(t)))return;await Promise.race([customElements.whenDefined("partial-panel-resolver"),new Promise((t,e)=>setTimeout(()=>e(new Error("Timeout waiting for partial-panel-resolver")),1e4))]);const t=document.createElement("partial-panel-resolver");if(!t)throw new Error("Failed to create partial-panel-resolver element");if(t.hass={panels:[{url_path:"tmp",component_name:"config"}]},"function"!=typeof t._updateRoutes)throw new Error("partial-panel-resolver does not have _updateRoutes method");if(t._updateRoutes(),!t.routerOptions?.routes?.tmp?.load)throw new Error("Failed to create tmp route in partial-panel-resolver");await Promise.race([t.routerOptions.routes.tmp.load(),new Promise((t,e)=>setTimeout(()=>e(new Error("Timeout loading tmp route")),1e4))]),await Promise.race([customElements.whenDefined("ha-panel-config"),new Promise((t,e)=>setTimeout(()=>e(new Error("Timeout waiting for ha-panel-config")),1e4))]);const i=document.createElement("ha-panel-config");if(!i)throw new Error("Failed to create ha-panel-config element");if(!i.routerOptions?.routes?.automation?.load)throw new Error("ha-panel-config does not have automation route");await Promise.race([i.routerOptions.routes.automation.load(),new Promise((t,e)=>setTimeout(()=>e(new Error("Timeout loading automation components")),1e4))]);const s=e.filter(t=>!customElements.get(t));if(s.length>0)throw new Error(`Failed to load components: ${s.join(", ")}`)}catch(t){console.error("Error loading Home Assistant form components:",t);try{if(window.customElements&&window.customElements.get("home-assistant")){console.log("Attempting fallback loading method for HA components");const t=new CustomEvent("ha-request-load-components",{detail:{components:e},bubbles:!0,composed:!0});document.dispatchEvent(t)}}catch(t){console.error("Fallback loading method failed:",t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var bi=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};const _i=["ha-form","ha-icon-button","ha-entity-picker","ha-dialog","ha-dialog-footer","ha-sortable","ha-svg-icon","ha-button"];yi(_i).catch(t=>{console.error("Failed to load Home Assistant components:",t)});let wi=class extends ei{constructor(){super(...arguments),this._entities=[],this._editDialogOpen=!1,this._editingEntityIndex=null,this._editingEntityData=null,this._entityKeys=new WeakMap}_getKey(t){return this._entityKeys.has(t)||this._entityKeys.set(t,Math.random().toString()),this._entityKeys.get(t)}async firstUpdated(){try{await yi(_i)}catch(t){console.error("Error loading ha-components:",t)}}willUpdate(t){super.willUpdate(t),t.has("entities")&&this._processIncomingConfig()}_processIncomingConfig(){this.entities?(this._entities=this.entities.map(t=>"string"==typeof t?{entity:t}:t),this._entityKeys=new WeakMap):this._entities=[]}render(){return this.hass?Te`
      ${this.label?Te`<h3>${this.label}</h3>`:Ie}
      <ha-sortable handle-selector=".handle" @item-moved=${this._rowMoved}>
        <div class="entities">
          ${mi(this._entities,t=>this._getKey(t),(t,e)=>Te`
              <div class="entity-row">
                <div class="handle">
                  <ha-svg-icon .path=${"M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"}></ha-svg-icon>
                </div>
                <div class="entity-info">
                  ${t.entity?Te`
                        <ha-entity-picker
                          allow-custom-entity
                          hide-clear-icon
                          .hass=${this.hass}
                          .value=${t.entity}
                          .index=${e}
                          @value-changed=${this._entityValueChanged}
                        ></ha-entity-picker>
                        ${t.name||t.icon?Te`<span class="secondary">(${t.name?`${this.hass.localize("ui.common.name")}: ${t.name}`:""}${t.name&&t.icon?", ":""}${t.icon?`${this.hass.localize("ui.panel.lovelace.editor.card.generic.icon")}: ${t.icon}`:""})</span>`:""}
                      `:Te`
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
      ${this._editDialogOpen?Te`
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
          <ha-dialog-footer slot="footer">
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
              appearance="filled"
              @click=${this._saveEditDialog}
              ?disabled=${!this._editingEntityData}
            >
            ${this.hass.localize("ui.common.save")}
            </ha-button>
          </ha-dialog-footer>
        </ha-dialog>
      `:""}
    `:Ie}_addEntity(t){const e=t.detail.value;e&&(this._entities.some(t=>t.entity===e)?t.target.value="":(this._entities=[...this._entities,{entity:e}],t.target.value="",this._valueChanged()))}_rowMoved(t){t.stopPropagation();const{oldIndex:e,newIndex:i}=t.detail;if(e===i)return;const s=[...this._entities],[n]=s.splice(e,1);s.splice(i,0,n),this._entities=s,this._valueChanged()}_removeEntity(t){const e=t.currentTarget.index;this._entities=this._entities.filter((t,i)=>i!==e),this._valueChanged()}_entityValueChanged(t){t.stopPropagation();const e=t.detail.value,i=t.target.index;if(!e||this._entities[i].entity===e)return void(t.target.value=this._entities[i].entity);if(this._entities.some((t,s)=>s!==i&&t.entity===e))return void(t.target.value=this._entities[i].entity);const s=[...this._entities];s[i]={...s[i],entity:e},this._entities=s,this._valueChanged()}_editRow(t){const e=t.currentTarget.index;this._editingEntityIndex=e;const i=this._entities[e];this._editingEntityData={...i},this._editDialogOpen=!0}_closeEditDialog(){this._editDialogOpen=!1,this._editingEntityIndex=null,this._editingEntityData=null}_handleEditDialogValueChanged(t){this._editingEntityData&&(this._editingEntityData={...this._editingEntityData,...t.detail.value})}_saveEditDialog(){if(null===this._editingEntityIndex||!this._editingEntityData)return;const t=[...this._entities],e={...t[this._editingEntityIndex],...this._editingEntityData};""===e.name&&delete e.name,""===e.icon&&delete e.icon,t[this._editingEntityIndex]=e,this._entities=t,this._valueChanged(),this._closeEditDialog()}_getEditDialogSchema(){return[{name:"name",selector:{text:{}},label:this.hass.localize("ui.common.name")},{name:"icon",selector:{icon:{}},label:this.hass.localize("ui.panel.lovelace.editor.card.generic.icon")}]}_valueChanged(){const t=new CustomEvent("entities-changed",{detail:{entities:this._entities},bubbles:!0,composed:!0});this.dispatchEvent(t)}};wi.styles=((t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new te(i,t,Qt)})`
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

  `,bi([oi({attribute:!1})],wi.prototype,"hass",void 0),bi([oi({attribute:!1})],wi.prototype,"entities",void 0),bi([oi()],wi.prototype,"label",void 0),bi([ri()],wi.prototype,"_entities",void 0),bi([ri()],wi.prototype,"_editDialogOpen",void 0),bi([ri()],wi.prototype,"_editingEntityIndex",void 0),bi([ri()],wi.prototype,"_editingEntityData",void 0),wi=bi([(t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("multi-entity-selector")],wi);var xi=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},$i=function(t,e,i,s){return new(i||(i=Promise))(function(n,o){function r(t){try{l(s.next(t))}catch(t){o(t)}}function a(t){try{l(s.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i(function(t){t(e)})).then(r,a)}l((s=s.apply(t,e||[])).next())})},Si=function(t,e){var i={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(i[s]=t[s]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(t);n<s.length;n++)e.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(i[s[n]]=t[s[n]])}return i};class Ei extends ot{static get styles(){return o`
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
        `}constructor(){super(),this.config={},this._deviceIdChanged=!1,this.openEVSEEntities={},this.deviceEntitiesLoaded=!1}firstUpdated(){return $i(this,void 0,void 0,function*(){var t;this._lang=(null===(t=this.hass)||void 0===t?void 0:t.language)||"en"})}setConfig(t){const e=(t.optional_entities||[]).map(t=>{if("object"==typeof t&&null!==t&&t.id&&!t.entity){const{id:e}=t,i=Si(t,["id"]);return Object.assign(Object.assign({},i),{entity:e})}return t}).filter(t=>"string"==typeof t||"object"==typeof t&&null!==t&&("string"==typeof t.entity||void 0===t.entity));this.config=Object.assign(Object.assign({},t),{optional_entities:e}),this.config.device_id&&this.hass&&!this.deviceEntitiesLoaded&&this._loadDeviceEntities(this.config.device_id)}_isEntityConfigured(t){return Boolean(this.config[t]&&this.config[t].length>0)}_loadDeviceEntities(t){return $i(this,void 0,void 0,function*(){if(!t||!this.hass)return;const e={},i=Object.values(this.hass.entities||{}).filter(e=>e.device_id===t),s={override_entity:{names:["override_state"],domains:["select"],preferredPattern:"select.openevse_override_state"},status_entity:{names:["station_status"],domains:["sensor"],preferredPattern:"sensor.openevse_station_status"},power_entity:{names:["current_power_usage"],domains:["sensor"],preferredPattern:"sensor.openevse_current_power_usage"},current_entity:{names:["charging_current"],domains:["sensor"],preferredPattern:"sensor.openevse_charging_current"},vehicle_connected_entity:{names:["vehicle_connected"],domains:["binary_sensor"],preferredPattern:"binary_sensor.openevse_vehicle_connected"},charging_status_entity:{names:["charging_status"],domains:["sensor"],preferredPattern:"sensor.openevse_charging_status"},charge_rate_entity:{names:["charge_rate"],domains:["number"],preferredPattern:"number.openevse_charge_rate"},session_energy_entity:{names:["usage_this_session"],domains:["sensor"],preferredPattern:"sensor.openevse_usage_this_session"},time_elapsed_entity:{names:["charge_time_elapsed"],domains:["sensor"],preferredPattern:"sensor.openevse_charge_time_elapsed"},wifi_signal_strength_entity:{names:["wifi_signal_strength"],domains:["sensor"],preferredPattern:"sensor.openevse_wifi_signal_strength"},limit_active_entity:{names:["limit_active"],domains:["binary_sensor"],preferredPattern:"binary_sensor.openevse_limit_active"},divert_active_entity:{names:["divert_active"],domains:["binary_sensor"],preferredPattern:"binary_sensor.openevse_divert_active"},divert_mode_entity:{names:["divert_mode"],domains:["sensor"],preferredPattern:"sensor.openevse_divert_mode"},pv_charge_rate_entity:{names:["pv_charge_rate"],domains:["sensor"],preferredPattern:"sensor.openevse_pv_charge_rate"},vehicle_battery_level_entity:{names:["vehicle_battery_level"],domains:["sensor"],preferredPattern:"sensor.openevse_vehicle_battery_level"},vehicle_range_entity:{names:["vehicle_range"],domains:["sensor"],preferredPattern:"sensor.openevse_vehicle_range"}};for(const[t,n]of Object.entries(s)){if(this._isEntityConfigured(t)&&!this._deviceIdChanged)continue;const{names:s,domains:o,preferredPattern:r}=n;let a=i.find(t=>t.entity_id.toLowerCase()===r.toLowerCase());a||(a=i.find(t=>{const e=t.entity_id.toLowerCase(),i=e.split(".")[0];return!!o.includes(i)&&s.some(i=>e.includes(i.toLowerCase())||t.original_name&&t.original_name.toLowerCase().includes(i.toLowerCase()))})),a&&(e[t]=a.entity_id)}this.openEVSEEntities=e,this.deviceEntitiesLoaded=!0;const n=Object.assign({},this.config);for(const[t,i]of Object.entries(e))this._isEntityConfigured(t)&&!this._deviceIdChanged||(n[t]=i);this._deviceIdChanged=!1,this.config=n,this._fireConfigChanged(n)})}_handleConfigChange(t){const e=t.detail.value;e.device_id!==this.config.device_id?(this._deviceIdChanged=!0,this.deviceEntitiesLoaded=!1,this.config=Object.assign(Object.assign({},this.config),e),this._loadDeviceEntities(e.device_id)):this._dispatchConfigChanged(e)}_dispatchConfigChanged(t){const e=Object.assign(Object.assign({},this.config),t);this.config=e,this._fireConfigChanged(e)}_fireConfigChanged(t){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t}}))}_handleOptionalEntitiesChanged(t){if(!this.config||!this.hass)return;const e=t.detail.entities;this.config=Object.assign(Object.assign({},this.config),{optional_entities:e}),this._fireConfigChanged(this.config)}_getMissingEntities(){return["override_entity","status_entity","power_entity","current_entity","vehicle_connected_entity","charging_status_entity","charge_rate_entity","session_energy_entity","time_elapsed_entity","wifi_signal_strength_entity","limit_active_entity","divert_active_entity","divert_mode_entity","pv_charge_rate_entity","vehicle_range_entity","vehicle_battery_level_entity"].filter(t=>{const e=this.config[t]&&this.config[t].length>0,i=this.openEVSEEntities[t]&&this.openEVSEEntities[t].length>0;return!e&&!i})}render(){if(!this.hass)return W``;const t={};if(this.config.device_id&&this.hass.entities){Object.values(this.hass.entities).filter(t=>t.device_id===this.config.device_id).forEach(e=>{const i=e.entity_id.split(".")[0];t[i]||(t[i]=[]),t[i].push(e.entity_id)})}const e=Gt(t,this._lang),i=this._getMissingEntities();return W`
            <!-- Auto-detection status -->
            ${this.config.device_id?W`
                      <div class="entity-section">
                          ${this.deviceEntitiesLoaded?W`
                                    <div
                                        class="entity-status ${i.length>0?"warning":"success"}"
                                    >
                                        ${0===i.length?pt("entity_auto_success",this._lang)+"!":pt("entity_auto_fail",this._lang)+": "+i.join(", ")}
                                    </div>
                                `:W`
                                    <div class="entity-status">
                                        ${pt("entity_auto_loading",this._lang)}
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
                          <!-- Additional entities using multi-entity-selector -->
                          <div class="entity-section">
                              <multi-entity-selector
                                  .hass=${this.hass}
                                  .entities=${this.config.optional_entities||[]}
                                  label=${pt("additional entities",this._lang)}
                                  @entities-changed=${this._handleOptionalEntitiesChanged}
                              ></multi-entity-selector>
                          </div>
                      `:W`
                          <ha-form
                              .hass=${this.hass}
                              .data=${this.openEVSEEntities}
                              .schema=${[{name:"device_id",selector:{device:{integration:"openevse",manufacturer:"OpenEVSE"}},label:pt("openevse device",this._lang),helper_text:pt("select your openevse device",this._lang),required:!0}]}
                              @value-changed=${this._handleConfigChange}
                          ></ha-form>
                      `}
            </div>
        `}}xi([ht({attribute:!1})],Ei.prototype,"hass",void 0),xi([ht({attribute:!1})],Ei.prototype,"config",void 0),xi([dt()],Ei.prototype,"_lang",void 0),xi([dt()],Ei.prototype,"_deviceIdChanged",void 0),xi([dt()],Ei.prototype,"openEVSEEntities",void 0),xi([dt()],Ei.prototype,"deviceEntitiesLoaded",void 0),customElements.define("openevse-card",Dt),customElements.define("openevse-card-editor",Ei),window.customCards=window.customCards||[],window.customCards.push({type:"openevse-card",name:"OpenEVSE Card",preview:!0,description:"A custom card for OpenEVSE",documentationURL:"https://github.com/KipK/openevse-card/blob/main/README.md"});
