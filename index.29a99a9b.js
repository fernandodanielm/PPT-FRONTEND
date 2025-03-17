let e,t,n,i,r,s,o,a,l,h,c,u,d,p,f;function _(e){return e&&e.__esModule?e.default:e}var m,g,y,v,b,C,w,I=globalThis,E={},T={},S=I.parcelRequire94c2;null==S&&((S=function(e){if(e in E)return E[e].exports;if(e in T){var t=T[e];delete T[e];var n={id:e,exports:{}};return E[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){T[e]=t},I.parcelRequire94c2=S),(0,S.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>n,set:e=>n=e,enumerable:!0,configurable:!0});var n,i=new Map;n=function(e,t){for(var n=0;n<t.length-1;n+=2)i.set(t[n],{baseUrl:e,path:t[n+1]})}}),S("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["aD2KL","index.29a99a9b.js","fEBQw","piedrapapelotijera.a2838792.jpg","52iaa","piedra.2b6b2e59.png","5ZWGO","tijera.4b8c96df.png","CLWUy","papel.7c3d639f.png"]'));var k={};k=new URL("piedrapapelotijera.a2838792.jpg",import.meta.url).toString();const x=()=>void 0;var N={},P=N={};function R(){throw Error("setTimeout has not been defined")}function D(){throw Error("clearTimeout has not been defined")}function A(e){if(y===setTimeout)return setTimeout(e,0);if((y===R||!y)&&setTimeout)return y=setTimeout,setTimeout(e,0);try{return y(e,0)}catch(t){try{return y.call(null,e,0)}catch(t){return y.call(this,e,0)}}}!function(){try{y="function"==typeof setTimeout?setTimeout:R}catch(e){y=R}try{v="function"==typeof clearTimeout?clearTimeout:D}catch(e){v=D}}();var M=[],O=!1,L=-1;function F(){O&&b&&(O=!1,b.length?M=b.concat(M):L=-1,M.length&&q())}function q(){if(!O){var e=A(F);O=!0;for(var t=M.length;t;){for(b=M,M=[];++L<t;)b&&b[L].run();L=-1,t=M.length}b=null,O=!1,function(e){if(v===clearTimeout)return clearTimeout(e);if((v===D||!v)&&clearTimeout)return v=clearTimeout,clearTimeout(e);try{v(e)}catch(t){try{return v.call(null,e)}catch(t){return v.call(this,e)}}}(e)}}function j(e,t){this.fun=e,this.array=t}function U(){}P.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];M.push(new j(e,t)),1!==M.length||O||A(q)},j.prototype.run=function(){this.fun.apply(null,this.array)},P.title="browser",P.browser=!0,P.env={},P.argv=[],P.version="",P.versions={},P.on=U,P.addListener=U,P.once=U,P.off=U,P.removeListener=U,P.removeAllListeners=U,P.emit=U,P.prependListener=U,P.prependOnceListener=U,P.listeners=function(e){return[]},P.binding=function(e){throw Error("process.binding is not supported")},P.cwd=function(){return"/"},P.chdir=function(e){throw Error("process.chdir is not supported")},P.umask=function(){return 0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},H=function(e,t){if(!e)throw W(t)},W=function(e){return Error("Firebase Database ("+$.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},B=function(e){let t=[],n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:(r<2048?t[n++]=r>>6|192:((64512&r)==55296&&i+1<e.length&&(64512&e.charCodeAt(i+1))==56320?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128):t[n++]=r>>12|224,t[n++]=r>>6&63|128),t[n++]=63&r|128)}return t},z=function(e){let t=[],n=0,i=0;for(;n<e.length;){let r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){let s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){let s=e[n++],o=((7&r)<<18|(63&s)<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(o>>10)),t[i++]=String.fromCharCode(56320+(1023&o))}else{let s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},V={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){let r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,h=r>>2,c=(3&r)<<4|o>>4,u=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(u=64)),i.push(n[h],n[c],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(B(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):z(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){let r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0,o=++t<e.length?n[e.charAt(t)]:64,a=++t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw new G;let l=r<<2|s>>4;if(i.push(l),64!==o){let e=s<<4&240|o>>2;if(i.push(e),64!==a){let e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class G extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Y=function(e){let t=B(e);return V.encodeByteArray(t,!0)},K=function(e){return Y(e).replace(/\./g,"")},Q=function(e){try{return V.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},J=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==I)return I;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,X=()=>{if(void 0===N||void 0===N.env)return;let e=void 0;if(e)return JSON.parse(e)},Z=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&Q(e[1]);return t&&JSON.parse(t)},ee=()=>{try{return x()||J()||X()||Z()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},et=e=>{var t,n;return null===(n=null===(t=ee())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},en=e=>{let t=et(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},ei=()=>{var e;return null===(e=ee())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}function es(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")}function eo(){return!0===$.NODE_CLIENT||!0===$.NODE_ADMIN}class ea extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,ea.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,el.prototype.create)}}class el{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){var n,i;let r=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?(n=o,i=r,n.replace(eh,(e,t)=>{let n=i[t];return null!=n?String(n):`<${t}?>`})):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new ea(s,l,r)}}const eh=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(e){return JSON.parse(e)}function eu(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=function(e){let t={},n={},i={},r="";try{let s=e.split(".");t=ec(Q(s[0])||""),n=ec(Q(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},ep=function(e){let t=ed(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},ef=function(e){let t=ed(e).claims;return"object"==typeof t&&!0===t.admin};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function em(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function eg(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ey(e,t,n){let i={};for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function ev(e,t){if(e===t)return!0;let n=Object.keys(e),i=Object.keys(t);for(let r of n){if(!i.includes(r))return!1;let n=e[r],s=t[r];if(eb(n)&&eb(s)){if(!ev(n,s))return!1}else if(n!==s)return!1}for(let e of i)if(!n.includes(e))return!1;return!0}function eb(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=0x67452301,this.chain_[1]=0xefcdab89,this.chain_[2]=0x98badcfe,this.chain_[3]=0x10325476,this.chain_[4]=0xc3d2e1f0,this.inbuf_=0,this.total_=0}compress_(e,t){let n,i;t||(t=0);let r=this.W_;if("string"==typeof e)for(let n=0;n<16;n++)r[n]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let n=0;n<16;n++)r[n]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){let t=r[e-3]^r[e-8]^r[e-14]^r[e-16];r[e]=(t<<1|t>>>31)&0xffffffff}let s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],h=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(n=l^o&(a^l),i=0x5a827999):(n=o^a^l,i=0x6ed9eba1):e<60?(n=o&a|l&(o|a),i=0x8f1bbcdc):(n=o^a^l,i=0xca62c1d6);let t=(s<<5|s>>>27)+n+h+i+r[e]&0xffffffff;h=l,l=a,a=(o<<30|o>>>2)&0xffffffff,o=s,s=t}this.chain_[0]=this.chain_[0]+s&0xffffffff,this.chain_[1]=this.chain_[1]+o&0xffffffff,this.chain_[2]=this.chain_[2]+a&0xffffffff,this.chain_[3]=this.chain_[3]+l&0xffffffff,this.chain_[4]=this.chain_[4]+h&0xffffffff}update(e,t){if(null==e)return;void 0===t&&(t=e.length);let n=t-this.blockSize,i=0,r=this.buf_,s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){let e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}function ew(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=function(e){let t=[],n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){let t=r-55296;H(++i<e.length,"Surrogate pair missing trail surrogate."),r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:(r<2048?t[n++]=r>>6|192:(r<65536?t[n++]=r>>12|224:(t[n++]=r>>18|240,t[n++]=r>>12&63|128),t[n++]=r>>6&63|128),t[n++]=63&r|128)}return t},eE=function(e){let t=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(e){return e&&e._delegate?e._delegate:e}class eS{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new er;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:ek})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=ek){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=ek){return this.instances.has(e)}getOptions(e=ek){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(i);return i}onInit(e,t){var n;let i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);let s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){var n;let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e)===ek?void 0:n,options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(e){}return i||null}normalizeInstanceIdentifier(e=ek){return this.component?this.component.multipleInstances?e:ek:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new ex(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP=[];(m=C||(C={}))[m.DEBUG=0]="DEBUG",m[m.VERBOSE=1]="VERBOSE",m[m.INFO=2]="INFO",m[m.WARN=3]="WARN",m[m.ERROR=4]="ERROR",m[m.SILENT=5]="SILENT";const eR={debug:C.DEBUG,verbose:C.VERBOSE,info:C.INFO,warn:C.WARN,error:C.ERROR,silent:C.SILENT},eD=C.INFO,eA={[C.DEBUG]:"log",[C.VERBOSE]:"log",[C.INFO]:"info",[C.WARN]:"warn",[C.ERROR]:"error"},eM=(e,t,...n)=>{if(t<e.logLevel)return;let i=new Date().toISOString(),r=eA[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class eO{constructor(e){this.name=e,this._logLevel=eD,this._logHandler=eM,this._userLogHandler=null,eP.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in C))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?eR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,C.DEBUG,...e),this._logHandler(this,C.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,C.VERBOSE,...e),this._logHandler(this,C.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,C.INFO,...e),this._logHandler(this,C.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,C.WARN,...e),this._logHandler(this,C.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,C.ERROR,...e),this._logHandler(this,C.ERROR,...e)}}const eL=(e,t)=>t.some(t=>e instanceof t),eF=new WeakMap,eq=new WeakMap,ej=new WeakMap,eU=new WeakMap,e$=new WeakMap;let eH={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return eq.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ej.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return eW(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function eW(n){if(n instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(eW(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&eF.set(t,e)}).catch(()=>{}),e$.set(t,e),t}(n);if(eU.has(n))return eU.get(n);let i=function(n){if("function"==typeof n)return n!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(n)?function(...e){return n.apply(eB(this),e),eW(eF.get(this))}:function(...e){return eW(n.apply(eB(this),e))}:function(e,...t){let i=n.call(eB(this),e,...t);return ej.set(i,e.sort?e.sort():[e]),eW(i)};return(n instanceof IDBTransaction&&function(e){if(eq.has(e))return;let t=new Promise((t,n)=>{let i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)});eq.set(e,t)}(n),eL(n,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(n,eH):n}(n);return i!==n&&(eU.set(n,i),e$.set(i,n)),i}const eB=e=>e$.get(e),ez=["get","getKey","getAll","getAllKeys","count"],eV=["put","add","delete","clear"],eG=new Map;function eY(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(eG.get(t))return eG.get(t);let n=t.replace(/FromIndex$/,""),i=t!==n,r=eV.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||ez.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,r?"readwrite":"readonly"),o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return eG.set(t,s),s}eH={...f=eH,get:(e,t,n)=>eY(e,t)||f.get(e,t,n),has:(e,t)=>!!eY(e,t)||f.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eK{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const eQ="@firebase/app",eJ="0.11.2",eX=new eO("@firebase/app"),eZ="[DEFAULT]",e0={[eQ]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},e1=new Map,e2=new Map,e3=new Map;function e6(e,t){try{e.container.addComponent(t)}catch(n){eX.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function e5(e){let t=e.name;if(e3.has(t))return eX.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(e3.set(t,e),e1.values()))e6(n,e);for(let t of e2.values())e6(t,e);return!0}const e4=new el("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e8{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new eS("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw e4.create("app-deleted",{appName:this._name})}}function e9(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});let i=Object.assign({name:eZ,automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw e4.create("bad-app-name",{appName:String(r)});if(n||(n=ei()),!n)throw e4.create("no-options");let s=e1.get(r);if(s){if(ev(n,s.options)&&ev(i,s.config))return s;throw e4.create("duplicate-app",{appName:r})}let o=new eN(r);for(let e of e3.values())o.addComponent(e);let a=new e8(n,i,o);return e1.set(r,a),a}function e7(e,t,n){var i;let r=null!==(i=e0[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);let s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let e=[`Unable to register library "${r}" with version "${t}":`];s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),eX.warn(e.join(" "));return}e5(new eS(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}const te="firebase-heartbeat-store";let tt=null;function tn(){return tt||(tt=(function(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){let o=indexedDB.open(e,1),a=eW(o);return i&&o.addEventListener("upgradeneeded",e=>{i(eW(o.result),e.oldVersion,e.newVersion,eW(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),r&&e.addEventListener("versionchange",e=>r(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(te)}catch(e){console.warn(e)}}}).catch(e=>{throw e4.create("idb-open",{originalErrorMessage:e.message})})),tt}async function ti(e){try{let t=(await tn()).transaction(te),n=await t.objectStore(te).get(ts(e));return await t.done,n}catch(e){if(e instanceof ea)eX.warn(e.message);else{let t=e4.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});eX.warn(t.message)}}}async function tr(e,t){try{let n=(await tn()).transaction(te,"readwrite"),i=n.objectStore(te);await i.put(t,ts(e)),await n.done}catch(e){if(e instanceof ea)eX.warn(e.message);else{let t=e4.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});eX.warn(t.message)}}}function ts(e){return`${e.name}!${e.options.appId}`}class to{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new tl(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ta();if((null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(e=>e.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>30){let e=function(e){if(0===e.length)return -1;let t=0,n=e[0].date;for(let i=1;i<e.length;i++)e[i].date<n&&(n=e[i].date,t=i);return t}(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){eX.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=ta(),{heartbeatsToSend:n,unsentEntries:i}=function(e,t=1024){let n=[],i=e.slice();for(let r of e){let e=n.find(e=>e.agent===r.agent);if(e){if(e.dates.push(r.date),th(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),th(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),r=K(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return eX.warn(e),""}}}function ta(){return new Date().toISOString().substring(0,10)}class tl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let n=!0,i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await ti(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return tr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return tr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function th(e){return K(JSON.stringify({version:2,heartbeats:e})).length}e5(new eS("platform-logger",e=>new eK(e),"PRIVATE")),e5(new eS("heartbeat",e=>new to(e),"PRIVATE")),e7(eQ,eJ,""),e7(eQ,eJ,"esm2017"),e7("fire-js","");const tc="@firebase/database",tu="1.0.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let td="";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),eu(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:ec(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return e_(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){let t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new tp(t)}}catch(e){}return new tf},tm=t_("localStorage"),tg=t_("sessionStorage"),ty=new eO("@firebase/database"),tv=(p=1,function(){return p++}),tb=function(e){let t=eI(e),n=new eC;n.update(t);let i=n.digest();return V.encodeByteArray(i)},tC=function(...e){let t="";for(let n=0;n<e.length;n++){let i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=tC.apply(null,i):"object"==typeof i?t+=eu(i):t+=i,t+=" "}return t};let tw=null,tI=!0;const tE=function(e,t){H(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(ty.logLevel=C.VERBOSE,tw=ty.log.bind(ty),t&&tg.set("logging_enabled",!0)):"function"==typeof e?tw=e:(tw=null,tg.remove("logging_enabled"))},tT=function(...e){if(!0===tI&&(tI=!1,null===tw&&!0===tg.get("logging_enabled")&&tE(!0)),tw){let t=tC.apply(null,e);tw(t)}},tS=function(e){return function(...t){tT(e,...t)}},tk=function(...e){let t="FIREBASE INTERNAL ERROR: "+tC(...e);ty.error(t)},tx=function(...e){let t=`FIREBASE FATAL ERROR: ${tC(...e)}`;throw ty.error(t),Error(t)},tN=function(...e){let t="FIREBASE WARNING: "+tC(...e);ty.warn(t)},tP=function(){"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&tN("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},tR=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},tD=function(e){if(eo()||"complete"===document.readyState)e();else{let t=!1,n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},tA="[MIN_NAME]",tM="[MAX_NAME]",tO=function(e,t){if(e===t)return 0;{if(e===tA||t===tM)return -1;if(t===tA||e===tM)return 1;let n=tW(e),i=tW(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},tL=function(e,t){return e===t?0:e<t?-1:1},tF=function(e,t){if(t&&e in t)return t[e];throw Error("Missing required key ("+e+") in object: "+eu(t))},tq=function(e){if("object"!=typeof e||null===e)return eu(e);let t=[];for(let n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=eu(t[i]),n+=":",n+=tq(e[t[i]]);return n+"}"},tj=function(e,t){let n=e.length;if(n<=t)return[e];let i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function tU(e,t){for(let n in e)e.hasOwnProperty(n)&&t(n,e[n])}const t$=function(e){let t,n,i,r,s;H(!tR(e),"Invalid JSON number");0===e?(n=0,i=0,t=+(1/e==-1/0)):(t=e<0,(e=Math.abs(e))>=22250738585072014e-324?(n=(r=Math.min(Math.floor(Math.log(e)/Math.LN2),1023))+1023,i=Math.round(e*Math.pow(2,52-r)-0x10000000000000)):(n=0,i=Math.round(e/5e-324)));let o=[];for(s=52;s;s-=1)o.push(i%2?1:0),i=Math.floor(i/2);for(s=11;s;s-=1)o.push(n%2?1:0),n=Math.floor(n/2);o.push(+!!t),o.reverse();let a=o.join(""),l="";for(s=0;s<64;s+=8){let e=parseInt(a.substr(s,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()},tH=RegExp("^-?(0*)\\d{1,10}$"),tW=function(e){if(tH.test(e)){let t=Number(e);if(t>=-0x80000000&&t<=0x7fffffff)return t}return null},tB=function(e){try{e()}catch(e){setTimeout(()=>{throw tN("Exception was thrown by user callback.",e.stack||""),e},Math.floor(0))}},tz=function(e,t){let n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,null!=e&&void 0!==e.settings&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then(e=>this.appCheck=e)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){tN(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tG{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(tT("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',tN(e)}}class tY{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}tY.OWNER="owner";const tK=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,tQ="websocket",tJ="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tX{constructor(e,t,n,i,r=!1,s="",o=!1,a=!1,l=null){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this.emulatorOptions=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=tm.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&tm.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){let e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function tZ(e,t,n){let i;if(H("string"==typeof t,"typeof type must == string"),H("object"==typeof n,"typeof params must == object"),t===tQ)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===tJ)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw Error("Unknown connection type: "+t);(e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams)&&(n.ns=e.namespace);let r=[];return tU(n,(e,t)=>{r.push(e+"="+t)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(){this.counters_={}}incrementCounter(e,t=1){e_(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return function e(t,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return n}for(let i in n)n.hasOwnProperty(i)&&"__proto__"!==i&&(t[i]=e(t[i],n[i]));return t}(void 0,this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1={},t2={};function t3(e){let t=e.toString();return t1[t]||(t1[t]=new t0),t1[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t6{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&tB(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t5="start";class t4{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=tS(e),this.stats_=t3(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),tZ(t,tJ,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new t6(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(3e4)),tD(()=>{if(this.isClosed_)return;this.scriptTagHolder=new t8((...e)=>{let[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder){if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===t5)this.id=n,this.password=i;else if("close"===t)n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_();else throw Error("Unrecognized command received: "+t)}},(...e)=>{let[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);let e={};e[t5]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&tK.test(location.hostname)&&(e.r="f");let t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){t4.forceAllow_=!0}static forceDisallow(){t4.forceDisallow_=!0}static isAvailable(){return!eo()&&(!!t4.forceAllow_||!t4.forceDisallow_&&"undefined"!=typeof document&&null!=document.createElement&&!("object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&("object"!=typeof Windows||"object"!=typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){!this.isClosed_&&(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){let t=eu(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let n=tj(Y(t),1840);for(let e=0;e<n.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,n.length,n[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(eo())return;this.myDisconnFrame=document.createElement("iframe");let n={};n.dframe="t",n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=eu(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class t8{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,eo())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=tv(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=t8.createIFrame_();let n="";this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)&&(n='<script>document.domain="'+document.domain+'";<\/script>');let i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){tT("frame writing exception"),e.stack&&tT(e.stack),tT(e)}}}static createIFrame_(){let e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||tT("No IE domain setting required")}catch(t){e.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(!this.alive||!this.sendNewPolls||!(this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)))return!1;{this.currentSerial++;let e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;)if(this.pendingSegs[0].d.length+30+n.length<=1870){let e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}else break;return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,()=>{clearTimeout(i),n()})}addTag(e,t){eo()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){let e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{tT("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}},Math.floor(1))}}let t9=null;"undefined"!=typeof MozWebSocket?t9=MozWebSocket:"undefined"!=typeof WebSocket&&(t9=WebSocket);class t7{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=tS(this.connId),this.stats_=t3(t),this.connURL=t7.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){let s={};return s.v="5",!eo()&&"undefined"!=typeof location&&location.hostname&&tK.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s.ac=i),r&&(s.p=r),tZ(e,tQ,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,tm.set("previous_websocket_failure",!0);try{let e;if(eo()){let t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${td}/${N.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);let n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new t9(this.connURL,[],e)}catch(t){this.log_("Error instantiating WebSocket.");let e=t.message||t.data;e&&this.log_(e),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");let t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){t7.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){let t=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);t&&t.length>1&&4.4>parseFloat(t[1])&&(e=!0)}return!e&&null!==t9&&!t7.forceDisallow_}static previouslyFailed(){return tm.isInMemoryStorage||!0===tm.get("previous_websocket_failure")}markConnectionHealthy(){tm.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let e=this.frames.join("");this.frames=null;let t=ec(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(H(null===this.frames,"We already have a frame buffer"),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{let e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();let t=eu(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let n=tj(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){!this.isClosed_&&(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}t7.responsesRequiredToBeHealthy=2,t7.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{static get ALL_TRANSPORTS(){return[t4,t7]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){let t=t7&&t7.isAvailable(),n=t&&!t7.previouslyFailed();if(e.webSocketOnly&&(t||tN("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[t7];else{let e=this.transports_=[];for(let t of ne.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);ne.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ne.globalTransportInitialized_=!1;class nt{constructor(e,t,n,i,r,s,o,a,l,h){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=tS("c:"+this.id+":"),this.transportManager_=new ne(t),this.log_("Connection created"),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));let i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=tz(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){this.sendData_({t:"d",d:e})}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){let t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=tF("t",e),n=tF("d",e);if("c"===t)this.onSecondaryControl_(n);else if("d"===t)this.pendingDataMessages.push(n);else throw Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=tF("t",e),n=tF("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){!this.isHealthy_&&(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=tF("t",e);if("d"in e){let n=e.d;if("h"===t){let e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?tk("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):tk("Unknown control packet command: "+t)}}onHandshake_(e){let t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&tN("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),tz(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):tz(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(tm.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this.allowedEvents_=e,this.listeners_={},H(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});let i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);let i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context)){i.splice(e,1);return}}validateEventType_(e){H(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends ni{static getInstance(){return new nr}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||es()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return H("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}class ns{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function no(){return new ns("")}function na(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function nl(e){return e.pieces_.length-e.pieceNum_}function nh(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ns(e.pieces_,t)}function nc(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function nu(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function nd(e){if(e.pieceNum_>=e.pieces_.length)return null;let t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ns(t,0)}function np(e,t){let n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof ns)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{let e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ns(n,0)}function nf(e){return e.pieceNum_>=e.pieces_.length}function n_(e,t){let n=na(e),i=na(t);if(null===n)return t;if(n===i)return n_(nh(e),nh(t));throw Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function nm(e,t){let n=nu(e,0),i=nu(t,0);for(let e=0;e<n.length&&e<i.length;e++){let t=tO(n[e],i[e]);if(0!==t)return t}return n.length===i.length?0:n.length<i.length?-1:1}function ng(e,t){if(nl(e)!==nl(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function ny(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(nl(e)>nl(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class nv{constructor(e,t){this.errorPrefix_=t,this.parts_=nu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=eE(this.parts_[e]);nb(this)}}function nb(e){if(e.byteLength_>768)throw Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+nC(e))}function nC(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw extends ni{static getInstance(){return new nw}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{let t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}getInitialEvent(e){return H("visible"===e,"Unknown event type: "+e),[this.visible_]}}class nI extends nn{constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=nI.nextPersistentConnectionId_++,this.log_=tS("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!eo())throw Error("Auth override specified in options, but not supported on non Node.js platforms");nw.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&nr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){let i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(eu(r)),H(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();let t=new er,n={p:e._path.toString(),q:e._queryObject};this.outstandingGets_.push({action:"g",request:n,onComplete:e=>{let n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}}),this.outstandingGetCount_++;let i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();let r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),H(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");let o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){let t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);let r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,r=>{let s=r.d,o=r.s;nI.warnOnListenWarnings_(s,t),(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&e_(e,"w")){let n=em(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){let e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();tN(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||ef(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=ep(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,t=>{let n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{let t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){let n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);let r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){let r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,e=>{i&&setTimeout(()=>{i(e.s,e.d)},Math.floor(0))})}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();let s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;let o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{if("ok"!==e.s){let t=e.d;this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+eu(e));let t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else if("error"in e)throw"A server-side error has occurred: "+e.error;else"a"in e&&this.onDataPush_(e.a,e.b)}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):tk("Unrecognized action received from server: "+eu(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){H(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){!e||this.visible_||this.reconnectDelay_!==this.maxReconnectDelay_||(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());let e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_),t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+nI.nextConnectionId_++,r=this.lastSessionId,s=!1,o=null,a=function(){o?o.close():(s=!0,n())};this.realtime_={close:a,sendRequest:function(e){H(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)}};let l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[a,h]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?tT("getToken() completed but was canceled"):(tT("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=h&&h.token,o=new nt(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{tN(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")},r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&tN(e),a())}}}interrupt(e){tT("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){tT("Resuming connection for reason: "+e),delete this.interruptReasons_[e],eg(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>tq(e)).join("$"):"default";let i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){let n;let i=new ns(e).toString();if(this.listens.has(i)){let e=this.listens.get(i);n=e.get(t),e.delete(t),0===e.size&&this.listens.delete(i)}else n=void 0;return n}onAuthRevoked_(e,t){tT("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),("invalid_token"===e||"permission_denied"===e)&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){tT("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,("invalid_token"===e||"permission_denied"===e)&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){for(let e of(this.tryAuth(),this.tryAppCheck(),this.listens.values()))for(let t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){let e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){let e={},t="js";eo()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+td.replace(/\./g,"-")]=1,es()?e["framework.cordova"]=1:"object"==typeof navigator&&"ReactNative"===navigator.product&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){let e=nr.getInstance().currentlyOnline();return eg(this.interruptReasons_)&&e}}nI.nextPersistentConnectionId_=0,nI.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new nE(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let n=new nE(tA,e),i=new nE(tA,t);return 0!==this.compare(n,i)}minPost(){return nE.MIN}}class nS extends nT{static get __EMPTY_NODE(){return n}static set __EMPTY_NODE(e){n=e}compare(e,t){return tO(e.name,t.name)}isDefinedOn(e){throw W("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return nE.MIN}maxPost(){return new nE(tM,n)}makePost(e,t){return H("string"==typeof e,"KeyIndex indexValue must always be a string."),new nE(e,n)}toString(){return".key"}}const nk=new nS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else if(0===s){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}getNext(){let e;if(0===this.nodeStack_.length)return null;let t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class nN{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:nN.RED,this.left=null!=i?i:nP.EMPTY_NODE,this.right=null!=r?r:nP.EMPTY_NODE}copy(e,t,n,i,r){return new nN(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this,r=n(e,i.key);return(i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n))).fixUp_()}removeMin_(){if(this.left.isEmpty())return nP.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}remove(e,t){let n,i;if(n=this,0>t(e,n.key))n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return nP.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}rotateLeft_(){let e=this.copy(null,null,nN.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){let e=this.copy(null,null,nN.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){return Math.pow(2,this.check_())<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw Error("Right child of ("+this.key+","+this.value+") is red");let e=this.left.check_();if(e===this.right.check_())return e+ +!this.isRed_();throw Error("Black depths differ")}}nN.RED=!0,nN.BLACK=!1;class nP{constructor(e,t=nP.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new nP(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,nN.BLACK,null,null))}remove(e){return new nP(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,nN.BLACK,null,null))}get(e){let t;let n=this.root_;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty()){if(i)return i.key;return null}for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new nx(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new nx(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new nx(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new nx(this.root_,null,this.comparator_,!0,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nR(e,t){return tO(e.name,t.name)}function nD(e,t){return tO(e,t)}nP.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new nN(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const nA=function(e){return"number"==typeof e?"number:"+t$(e):"string:"+e},nM=function(e){if(e.isLeafNode()){let t=e.val();H("string"==typeof t||"number"==typeof t||"object"==typeof t&&e_(t,".sv"),"Priority must be a string or number.")}else H(e===i||e.isEmpty(),"priority of unexpected type.");H(e===i||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};class nO{static set __childrenNodeConstructor(e){r=e}static get __childrenNodeConstructor(){return r}constructor(e,t=nO.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,H(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),nM(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nO(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:nO.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return nf(e)?this:".priority"===na(e)?this.priorityNode_:nO.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:nO.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){let n=na(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(H(".priority"!==n||1===nl(e),".priority must be the last token in a path"),this.updateImmediateChild(n,nO.__childrenNodeConstructor.EMPTY_NODE.updateChild(nh(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+nA(this.priorityNode_.val())+":");let t=typeof this.value_;e+=t+":","number"===t?e+=t$(this.value_):e+=this.value_,this.lazyHash_=tb(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nO.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nO.__childrenNodeConstructor?-1:(H(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){let t=typeof e.value_,n=typeof this.value_,i=nO.VALUE_TYPE_ORDER.indexOf(t),r=nO.VALUE_TYPE_ORDER.indexOf(n);return(H(i>=0,"Unknown leaf type: "+t),H(r>=0,"Unknown leaf type: "+n),i!==r)?r-i:"object"===n?0:this.value_<e.value_?-1:+(this.value_!==e.value_)}withIndex(){return this}isIndexed(){return!0}equals(e){return e===this||!!e.isLeafNode()&&this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}}nO.VALUE_TYPE_ORDER=["object","boolean","number","string"];const nL=new class extends nT{compare(e,t){let n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?tO(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return nE.MIN}maxPost(){return new nE(tM,new nO("[PRIORITY-POST]",o))}makePost(e,t){return new nE(t,new nO("[PRIORITY-POST]",s(e)))}toString(){return".priority"}},nF=Math.log(2);class nq{constructor(e){this.count=parseInt(Math.log(e+1)/nF,10),this.current_=this.count-1;let t=parseInt(Array(this.count+1).join("1"),2);this.bits_=e+1&t}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}}const nj=function(e,t,n,i){e.sort(t);let r=function(t,i){let s,o;let a=i-t;if(0===a)return null;if(1===a)return s=e[t],new nN(n?n(s):s,s.node,nN.BLACK,null,null);{let o=parseInt(a/2,10)+t,l=r(t,o),h=r(o+1,i);return s=e[o],new nN(n?n(s):s,s.node,nN.BLACK,l,h)}};return new nP(i||t,function(t){let i=null,s=null,o=e.length,a=function(t,i){let s=o-t,a=o;o-=t;let h=r(s+1,a),c=e[s];l(new nN(n?n(c):c,c.node,i,null,h))},l=function(e){i?i.left=e:s=e,i=e};for(let e=0;e<t.count;++e){let n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,nN.BLACK):(a(i,nN.BLACK),a(i,nN.RED))}return s}(new nq(e.length)))},nU={};class n${static get Default(){return H(nU&&nL,"ChildrenNode.ts has not been loaded"),a=a||new n$({".priority":nU},{".priority":nL})}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){let t=em(this.indexes_,e);if(!t)throw Error("No index defined for "+e);return t instanceof nP?t:null}hasIndex(e){return e_(this.indexSet_,e.toString())}addIndex(e,t){let n;H(e!==nk,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let i=[],r=!1,s=t.getIterator(nE.Wrap),o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();n=r?nj(i,e.getCompare()):nU;let a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;let h=Object.assign({},this.indexes_);return h[a]=n,new n$(h,l)}addToIndexes(e,t){return new n$(ey(this.indexes_,(n,i)=>{let r=em(this.indexSet_,i);if(H(r,"Missing index implementation for "+i),n===nU){if(!r.isDefinedOn(e.node))return nU;{let n=[],i=t.getIterator(nE.Wrap),s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),nj(n,r.getCompare())}}{let i=t.get(e.name),r=n;return i&&(r=r.remove(new nE(e.name,i))),r.insert(e,e.node)}}),this.indexSet_)}removeFromIndexes(e,t){return new n$(ey(this.indexes_,n=>{if(n===nU)return n;{let i=t.get(e.name);return i?n.remove(new nE(e.name,i)):n}}),this.indexSet_)}}class nH{static get EMPTY_NODE(){return l||(l=new nH(new nP(nD),null,n$.Default))}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&nM(this.priorityNode_),this.children_.isEmpty()&&H(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||l}updatePriority(e){return this.children_.isEmpty()?this:new nH(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{let t=this.children_.get(e);return null===t?l:t}}getChild(e){let t=na(e);return null===t?this:this.getImmediateChild(t).getChild(nh(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(H(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{let n,i;let r=new nE(e,t);t.isEmpty()?(n=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(n=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(r,this.children_));let s=n.isEmpty()?l:this.priorityNode_;return new nH(n,s,i)}}updateChild(e,t){let n=na(e);if(null===n)return t;{H(".priority"!==na(e)||1===nl(e),".priority must be the last token in a path");let i=this.getImmediateChild(n).updateChild(nh(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;let t={},n=0,i=0,r=!0;if(this.forEachChild(nL,(s,o)=>{t[s]=o.val(e),n++,r&&nH.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1}),e||!r||!(i<2*n))return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t;{let e=[];for(let n in t)e[n]=t[n];return e}}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+nA(this.getPriority().val())+":"),this.forEachChild(nL,(t,n)=>{let i=n.hash();""!==i&&(e+=":"+t+":"+i)}),this.lazyHash_=""===e?"":tb(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){let i=this.resolveIndex_(n);if(!i)return this.children_.getPredecessorKey(e);{let n=i.getPredecessorKey(new nE(e,t));return n?n.name:null}}getFirstChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.minKey();{let e=t.minKey();return e&&e.name}}getFirstChild(e){let t=this.getFirstChildName(e);return t?new nE(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.maxKey();{let e=t.maxKey();return e&&e.name}}getLastChild(e){let t=this.getLastChildName(e);return t?new nE(t,this.children_.get(t)):null}forEachChild(e,t){let n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{let n=this.children_.getIteratorFrom(e.name,nE.Wrap),i=n.peek();for(;null!=i&&0>t.compare(i,e);)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{let n=this.children_.getReverseIteratorFrom(e.name,nE.Wrap),i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===nW?-1:0}withIndex(e){if(e===nk||this.indexMap_.hasIndex(e))return this;{let t=this.indexMap_.addIndex(e,this.children_);return new nH(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===nk||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode()||!this.getPriority().equals(e.getPriority()))return!1;if(this.children_.count()!==e.children_.count())return!1;{let t=this.getIterator(nL),n=e.getIterator(nL),i=t.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=t.getNext(),r=n.getNext()}return null===i&&null===r}}resolveIndex_(e){return e===nk?null:this.indexMap_.get(e.toString())}}nH.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const nW=new class extends nH{constructor(){super(new nP(nD),nH.EMPTY_NODE,n$.Default)}compareTo(e){return+(e!==this)}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return nH.EMPTY_NODE}isEmpty(){return!1}};function nB(e,t=null){if(null===e)return nH.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),H(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e)return new nO(e,nB(t));if(e instanceof Array){let n=nH.EMPTY_NODE;return tU(e,(t,i)=>{if(e_(e,t)&&"."!==t.substring(0,1)){let e=nB(i);(e.isLeafNode()||!e.isEmpty())&&(n=n.updateImmediateChild(t,e))}}),n.updatePriority(nB(t))}{let n=[],i=!1;if(tU(e,(e,t)=>{if("."!==e.substring(0,1)){let r=nB(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new nE(e,r)))}}),0===n.length)return nH.EMPTY_NODE;let r=nj(n,nR,e=>e.name,nD);if(!i)return new nH(r,nB(t),n$.Default);{let e=nj(n,nL.getCompare());return new nH(r,nB(t),new n$({".priority":e},{".priority":nL}))}}}Object.defineProperties(nE,{MIN:{value:new nE(tA,nH.EMPTY_NODE)},MAX:{value:new nE(tM,nW)}}),nS.__EMPTY_NODE=nH.EMPTY_NODE,nO.__childrenNodeConstructor=nH,i=nW,o=nW,s=nB;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nz extends nT{constructor(e){super(),this.indexPath_=e,H(!nf(e)&&".priority"!==na(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?tO(e.name,t.name):r}makePost(e,t){let n=nB(e);return new nE(t,nH.EMPTY_NODE.updateChild(this.indexPath_,n))}maxPost(){return new nE(tM,nH.EMPTY_NODE.updateChild(this.indexPath_,nW))}toString(){return nu(this.indexPath_,0).join("/")}}const nV=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class extends nT{compare(e,t){let n=e.node.compareTo(t.node);return 0===n?tO(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return nE.MIN}maxPost(){return nE.MAX}makePost(e,t){return new nE(t,nB(e))}toString(){return".value"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nG(e){return{type:"value",snapshotNode:e}}function nY(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function nK(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function nQ(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nJ{constructor(e){this.index_=e}updateChild(e,t,n,i,r,s){H(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");let o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(nK(t,o)):H(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(nY(t,n)):s.trackChildChange(nQ(t,n,o))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(e,t,n){return null==n||(e.isLeafNode()||e.forEachChild(nL,(e,i)=>{t.hasChild(e)||n.trackChildChange(nK(e,i))}),t.isLeafNode()||t.forEachChild(nL,(t,i)=>{if(e.hasChild(t)){let r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(nQ(t,i,r))}else n.trackChildChange(nY(t,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?nH.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nX{constructor(e){this.indexedFilter_=new nJ(e.getIndex()),this.index_=e.getIndex(),this.startPost_=nX.getStartPost_(e),this.endPost_=nX.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){let t=this.startIsInclusive_?0>=this.index_.compare(this.getStartPost(),e):0>this.index_.compare(this.getStartPost(),e),n=this.endIsInclusive_?0>=this.index_.compare(e,this.getEndPost()):0>this.index_.compare(e,this.getEndPost());return t&&n}updateChild(e,t,n,i,r,s){return this.matches(new nE(t,n))||(n=nH.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=nH.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(nH.EMPTY_NODE);let r=this;return t.forEachChild(nL,(e,t)=>{r.matches(new nE(e,t))||(i=i.updateImmediateChild(e,nH.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(!e.hasStart())return e.getIndex().minPost();{let t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}}static getEndPost_(e){if(!e.hasEnd())return e.getIndex().maxPost();{let t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nZ{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{let t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{let t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new nX(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,r,s){return(this.rangedFilter_.matches(new nE(t,n))||(n=nH.EMPTY_NODE),e.getImmediateChild(t).equals(n))?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=nH.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=nH.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){let t=e.getNext();if(this.withinDirectionalStart(t)){if(this.withinDirectionalEnd(t))i=i.updateImmediateChild(t.name,t.node),n++;else break}}}else{let e;i=(i=t.withIndex(this.index_)).updatePriority(nH.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){let t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,nH.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let s;if(this.reverse_){let e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();H(e.numChildren()===this.limit_,"");let o=new nE(t,n),a=this.reverse_?e.getFirstChild(this.index_):e.getLastChild(this.index_),l=this.rangedFilter_.matches(o);if(e.hasChild(t)){let h=e.getImmediateChild(t),c=i.getChildAfterChild(this.index_,a,this.reverse_);for(;null!=c&&(c.name===t||e.hasChild(c.name));)c=i.getChildAfterChild(this.index_,c,this.reverse_);let u=null==c?1:s(c,o);if(l&&!n.isEmpty()&&u>=0)return null!=r&&r.trackChildChange(nQ(t,n,h)),e.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(nK(t,h));let n=e.updateImmediateChild(t,nH.EMPTY_NODE);return null!=c&&this.rangedFilter_.matches(c)?(null!=r&&r.trackChildChange(nY(c.name,c.node)),n.updateImmediateChild(c.name,c.node)):n}}return n.isEmpty()?e:l?s(a,o)>=0?(null!=r&&(r.trackChildChange(nK(a.name,a.node)),r.trackChildChange(nY(t,n))),e.updateImmediateChild(t,n).updateImmediateChild(a.name,nH.EMPTY_NODE)):e:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=nL}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return H(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(H(this.startSet_,"Only valid if start has been set"),this.startNameSet_)?this.indexStartName_:tA}hasEnd(){return this.endSet_}getIndexEndValue(){return H(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(H(this.endSet_,"Only valid if end has been set"),this.endNameSet_)?this.indexEndName_:tM}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return H(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===nL}copy(){let e=new n0;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function n1(e){let t;let n={};if(e.isDefault())return n;if(e.index_===nL?t="$priority":e.index_===nV?t="$value":e.index_===nk?t="$key":(H(e.index_ instanceof nz,"Unrecognized index type!"),t=e.index_.toString()),n.orderBy=eu(t),e.startSet_){let t=e.startAfterSet_?"startAfter":"startAt";n[t]=eu(e.indexStartValue_),e.startNameSet_&&(n[t]+=","+eu(e.indexStartName_))}if(e.endSet_){let t=e.endBeforeSet_?"endBefore":"endAt";n[t]=eu(e.indexEndValue_),e.endNameSet_&&(n[t]+=","+eu(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_),n}function n2(e){let t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==nL&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n3 extends nn{reportStats(e){throw Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(H(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=tS("p:rest:"),this.listens_={}}listen(e,t,n,i){let r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);let s=n3.getListenId_(e,n),o={};this.listens_[s]=o;let a=n1(e._queryParams);this.restRequest_(r+".json",a,(e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),em(this.listens_,s)===o){let t;i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)}})}unlisten(e,t){let n=n3.getListenId_(e,t);delete this.listens_[n]}get(e){let t=n1(e._queryParams),n=e._path.toString(),i=new er;return this.restRequest_(n+".json",t,(e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(Error(r))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);let s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+function(e){let t=[];for(let[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}(t);this.log_("Sending REST request for "+s);let o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=ec(o.responseText)}catch(e){tN("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&tN("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{constructor(){this.rootNode_=nH.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n5(){return{value:null,children:new Map}}function n4(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((e,n)=>{t(n,e)})}(e,(e,i)=>{n4(i,new ns(t.toString()+"/"+e),n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n8{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t=Object.assign({},e);return this.last_&&tU(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}class n9{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new n8(e);let n=1e4+2e4*Math.random();tz(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){let e=this.statsListener_.get(),t={},n=!1;tU(e,(e,i)=>{i>0&&e_(this.statsToReport_,e)&&(t[e]=i,n=!0)}),n&&this.server_.reportStats(t),tz(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}function n7(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ie(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function it(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}(g=w||(w={}))[g.OVERWRITE=0]="OVERWRITE",g[g.MERGE=1]="MERGE",g[g.ACK_USER_WRITE=2]="ACK_USER_WRITE",g[g.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=w.ACK_USER_WRITE,this.source=n7()}operationForChild(e){if(!nf(this.path))return H(na(this.path)===e,"operationForChild called for unrelated child."),new ii(nh(this.path),this.affectedTree,this.revert);if(null!=this.affectedTree.value)return H(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let t=this.affectedTree.subtree(new ns(e));return new ii(no(),t,this.revert)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t){this.source=e,this.path=t,this.type=w.LISTEN_COMPLETE}operationForChild(e){return nf(this.path)?new ir(this.source,no()):new ir(this.source,nh(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=w.OVERWRITE}operationForChild(e){return nf(this.path)?new is(this.source,no(),this.snap.getImmediateChild(e)):new is(this.source,nh(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=w.MERGE}operationForChild(e){if(!nf(this.path))return H(na(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new io(this.source,nh(this.path),this.children);{let t=this.children.subtree(new ns(e));return t.isEmpty()?null:t.value?new is(this.source,no(),t.value):new io(this.source,no(),t)}}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(nf(e))return this.isFullyInitialized()&&!this.filtered_;let t=na(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ih(e,t,n,i,r,s){let o=i.filter(e=>e.type===n);o.sort((t,n)=>(function(e,t,n){if(null==t.childName||null==n.childName)throw W("Should only compare child_ events.");let i=new nE(t.childName,t.snapshotNode),r=new nE(n.childName,n.snapshotNode);return e.index_.compare(i,r)})(e,t,n)),o.forEach(n=>{var i,o,a;let l=(i=e,o=n,a=s,"value"===o.type||"child_removed"===o.type||(o.prevName=a.getPredecessorChildName(o.childName,o.snapshotNode,i.index_)),o);r.forEach(i=>{i.respondsTo(n.type)&&t.push(i.createEvent(l,e.query_))})})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(e,t){return{eventCache:e,serverCache:t}}function iu(e,t,n,i){return ic(new ia(t,n,i),e.serverCache)}function id(e,t,n,i){return ic(e.eventCache,new ia(t,n,i))}function ip(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function i_(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}const im=()=>(h||(h=new nP(tL)),h);class ig{static fromObject(e){let t=new ig(null);return tU(e,(e,n)=>{t=t.set(new ns(e),n)}),t}constructor(e,t=im()){this.value=e,this.children=t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:no(),value:this.value};if(nf(e))return null;{let n=na(e),i=this.children.get(n);if(null===i)return null;{let r=i.findRootMostMatchingPathAndValue(nh(e),t);return null!=r?{path:np(new ns(n),r.path),value:r.value}:null}}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(nf(e))return this;{let t=na(e),n=this.children.get(t);return null!==n?n.subtree(nh(e)):new ig(null)}}set(e,t){if(nf(e))return new ig(t,this.children);{let n=na(e),i=(this.children.get(n)||new ig(null)).set(nh(e),t),r=this.children.insert(n,i);return new ig(this.value,r)}}remove(e){if(nf(e))return this.children.isEmpty()?new ig(null):new ig(null,this.children);{let t=na(e),n=this.children.get(t);if(!n)return this;{let i;let r=n.remove(nh(e));return(i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty())?new ig(null):new ig(this.value,i)}}}get(e){if(nf(e))return this.value;{let t=na(e),n=this.children.get(t);return n?n.get(nh(e)):null}}setTree(e,t){if(nf(e))return t;{let n;let i=na(e),r=(this.children.get(i)||new ig(null)).setTree(nh(e),t);return n=r.isEmpty()?this.children.remove(i):this.children.insert(i,r),new ig(this.value,n)}}fold(e){return this.fold_(no(),e)}fold_(e,t){let n={};return this.children.inorderTraversal((i,r)=>{n[i]=r.fold_(np(e,i),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,no(),t)}findOnPath_(e,t,n){let i=!!this.value&&n(t,this.value);if(i)return i;if(nf(e))return null;{let i=na(e),r=this.children.get(i);return r?r.findOnPath_(nh(e),np(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,no(),t)}foreachOnPath_(e,t,n){if(nf(e))return this;{this.value&&n(t,this.value);let i=na(e),r=this.children.get(i);return r?r.foreachOnPath_(nh(e),np(t,i),n):new ig(null)}}foreach(e){this.foreach_(no(),e)}foreach_(e,t){this.children.inorderTraversal((n,i)=>{i.foreach_(np(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e){this.writeTree_=e}static empty(){return new iy(new ig(null))}}function iv(e,t,n){if(nf(t))return new iy(new ig(n));{let i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){let r=i.path,s=i.value,o=n_(r,t);return s=s.updateChild(o,n),new iy(e.writeTree_.set(r,s))}{let i=new ig(n);return new iy(e.writeTree_.setTree(t,i))}}}function ib(e,t,n){let i=e;return tU(n,(e,n)=>{i=iv(i,np(t,e),n)}),i}function iC(e,t){return nf(t)?iy.empty():new iy(e.writeTree_.setTree(t,new ig(null)))}function iw(e,t){return null!=iI(e,t)}function iI(e,t){let n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(n_(n.path,t)):null}function iE(e){let t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(nL,(e,n)=>{t.push(new nE(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new nE(e,n.value))}),t}function iT(e,t){if(nf(t))return e;{let n=iI(e,t);return new iy(null!=n?new ig(n):e.writeTree_.subtree(t))}}function iS(e){return e.writeTree_.isEmpty()}function ik(e,t){return function e(t,n,i){if(null!=n.value)return i.updateChild(t,n.value);{let r=null;return n.children.inorderTraversal((n,s)=>{".priority"===n?(H(null!==s.value,"Priority writes must always be leaf nodes"),r=s.value):i=e(np(t,n),s,i)}),i.getChild(t).isEmpty()||null===r||(i=i.updateChild(np(t,".priority"),r)),i}}(no(),e.writeTree_,t)}function ix(e){return e.visible}function iN(e,t,n){let i=iy.empty();for(let r=0;r<e.length;++r){let s=e[r];if(t(s)){let e;let t=s.path;if(s.snap)ny(n,t)?i=iv(i,e=n_(n,t),s.snap):ny(t,n)&&(e=n_(t,n),i=iv(i,no(),s.snap.getChild(e)));else if(s.children){if(ny(n,t))i=ib(i,e=n_(n,t),s.children);else if(ny(t,n)){if(nf(e=n_(t,n)))i=ib(i,no(),s.children);else{let t=em(s.children,na(e));if(t){let n=t.getChild(nh(e));i=iv(i,no(),n)}}}}else throw W("WriteRecord should have .snap or .children")}}return i}function iP(e,t,n,i,r){if(i||r){let s=iT(e.visibleWrites,t);return!r&&iS(s)?n:r||null!=n||iw(s,no())?ik(iN(e.allWrites,function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(ny(e.path,t)||ny(t,e.path))},t),n||nH.EMPTY_NODE):null}{let i=iI(e.visibleWrites,t);if(null!=i)return i;{let i=iT(e.visibleWrites,t);return iS(i)?n:null!=n||iw(i,no())?ik(i,n||nH.EMPTY_NODE):null}}}function iR(e,t,n,i){return iP(e.writeTree,e.treePath,t,n,i)}function iD(e,t){return function(e,t,n){let i=nH.EMPTY_NODE,r=iI(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(nL,(e,t)=>{i=i.updateImmediateChild(e,t)}),i;if(!n)return iE(iT(e.visibleWrites,t)).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i;{let r=iT(e.visibleWrites,t);return n.forEachChild(nL,(e,t)=>{let n=ik(iT(r,new ns(e)),t);i=i.updateImmediateChild(e,n)}),iE(r).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}}(e.writeTree,e.treePath,t)}function iA(e,t,n,i){return function(e,t,n,i,r){H(i||r,"Either existingEventSnap or existingServerSnap must exist");let s=np(t,n);if(iw(e.visibleWrites,s))return null;{let t=iT(e.visibleWrites,s);return iS(t)?r.getChild(n):ik(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function iM(e,t){var n,i;return n=e.writeTree,i=np(e.treePath,t),iI(n.visibleWrites,i)}function iO(e,t,n){return function(e,t,n,i){let r=np(t,n),s=iI(e.visibleWrites,r);return null!=s?s:i.isCompleteForChild(n)?ik(iT(e.visibleWrites,r),i.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function iL(e,t){return iF(np(e.treePath,t),e.writeTree)}function iF(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iq{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,n=e.childName;H("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),H(".priority"!==n,"Only non-priority child changes can be tracked.");let i=this.changeMap.get(n);if(i){let r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,nQ(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,nK(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,nY(n,e.snapshotNode));else if("child_changed"===t&&"child_changed"===r)this.changeMap.set(n,nQ(n,e.snapshotNode,i.oldSnap));else throw W("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}const ij=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class iU{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let t=null!=this.optCompleteServerCache_?new ia(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return iO(this.writes_,e,t)}}getChildAfterChild(e,t,n){var i;let r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:i_(this.viewCache_),s=function(e,t,n,i,r,s,o){let a;let l=iT(e.visibleWrites,t),h=iI(l,no());if(null!=h)a=h;else{if(null==n)return[];a=ik(l,n)}if((a=a.withIndex(o)).isEmpty()||a.isLeafNode())return[];{let e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o),r=n.getNext();for(;r&&e.length<1;)0!==t(r,i)&&e.push(r),r=n.getNext();return e}}((i=this.writes_).writeTree,i.treePath,r,t,1,n,e);return 0===s.length?null:s[0]}}function i$(e,t,n,i,r,s){let o=t.eventCache;if(null!=iM(i,n))return t;{let a,l;if(nf(n)){if(H(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){let n=i_(t),r=iD(i,n instanceof nH?n:nH.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{let n=iR(i,i_(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}}else{let h=na(n);if(".priority"===h){H(1===nl(n),"Can't have a priority with additional path components");let r=o.getNode(),s=iA(i,n,r,l=t.serverCache.getNode());a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{let c;let u=nh(n);if(o.isCompleteForChild(h)){l=t.serverCache.getNode();let e=iA(i,n,o.getNode(),l);c=null!=e?o.getNode().getImmediateChild(h).updateChild(u,e):o.getNode().getImmediateChild(h)}else c=iO(i,h,t.serverCache);a=null!=c?e.filter.updateChild(o.getNode(),h,c,u,r,s):o.getNode()}}return iu(t,a,o.isFullyInitialized()||nf(n),e.filter.filtersNodes())}}function iH(e,t,n,i,r,s,o,a){let l;let h=t.serverCache,c=o?e.filter:e.filter.getIndexedFilter();if(nf(n))l=c.updateFullNode(h.getNode(),i,null);else if(c.filtersNodes()&&!h.isFiltered()){let e=h.getNode().updateChild(n,i);l=c.updateFullNode(h.getNode(),e,null)}else{let e=na(n);if(!h.isCompleteForPath(n)&&nl(n)>1)return t;let r=nh(n),s=h.getNode().getImmediateChild(e).updateChild(r,i);l=".priority"===e?c.updatePriority(h.getNode(),s):c.updateChild(h.getNode(),e,s,r,ij,null)}let u=id(t,l,h.isFullyInitialized()||nf(n),c.filtersNodes()),d=new iU(r,u,s);return i$(e,u,n,r,d,a)}function iW(e,t,n,i,r,s,o){let a,l;let h=t.eventCache,c=new iU(r,t,s);if(nf(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),a=iu(t,l,!0,e.filter.filtersNodes());else{let r=na(n);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),i),a=iu(t,l,h.isFullyInitialized(),h.isFiltered());else{let s;let l=nh(n),u=h.getNode().getImmediateChild(r);if(nf(l))s=i;else{let e=c.getCompleteChild(r);s=null!=e?".priority"===nc(l)&&e.getChild(nd(l)).isEmpty()?e:e.updateChild(l,i):nH.EMPTY_NODE}a=u.equals(s)?t:iu(t,e.filter.updateChild(h.getNode(),r,s,l,c,o),h.isFullyInitialized(),e.filter.filtersNodes())}}return a}function iB(e,t){return e.eventCache.isCompleteForChild(t)}function iz(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function iV(e,t,n,i,r,s,o,a){let l;if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let h=t;l=nf(n)?i:new ig(null).setTree(n,i);let c=t.serverCache.getNode();return l.children.inorderTraversal((n,i)=>{if(c.hasChild(n)){let l=iz(e,t.serverCache.getNode().getImmediateChild(n),i);h=iH(e,h,new ns(n),l,r,s,o,a)}}),l.children.inorderTraversal((n,i)=>{let l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!c.hasChild(n)&&!l){let l=iz(e,t.serverCache.getNode().getImmediateChild(n),i);h=iH(e,h,new ns(n),l,r,s,o,a)}}),h}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iG{constructor(e,t){this.query_=e,this.eventRegistrations_=[];let n=this.query_._queryParams,i=new nJ(n.getIndex()),r=n.loadsAllData()?new nJ(n.getIndex()):n.hasLimit()?new nZ(n):new nX(n);this.processor_={filter:r};let s=t.serverCache,o=t.eventCache,a=i.updateFullNode(nH.EMPTY_NODE,s.getNode(),null),l=r.updateFullNode(nH.EMPTY_NODE,o.getNode(),null),h=new ia(a,s.isFullyInitialized(),i.filtersNodes()),c=new ia(l,o.isFullyInitialized(),r.filtersNodes());this.viewCache_=ic(c,h),this.eventGenerator_=new il(this.query_)}get query(){return this.query_}}function iY(e){return 0===e.eventRegistrations_.length}function iK(e,t,n){let i=[];if(n){H(null==t,"A cancel should cancel all event registrations.");let r=e.query._path;e.eventRegistrations_.forEach(e=>{let t=e.createCancelEvent(n,r);t&&i.push(t)})}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){let r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function iQ(e,t,n,i){var r,s;t.type===w.MERGE&&null!==t.source.queryId&&(H(i_(e.viewCache_),"We should always have a full cache before handling merges"),H(ip(e.viewCache_),"Missing event cache, even though we have a server cache"));let o=e.viewCache_,a=function(e,t,n,i,r){let s,o;let a=new iq;if(n.type===w.OVERWRITE)n.source.fromUser?s=iW(e,t,n.path,n.snap,i,r,a):(H(n.source.fromServer,"Unknown source."),o=n.source.tagged||t.serverCache.isFiltered()&&!nf(n.path),s=iH(e,t,n.path,n.snap,i,r,o,a));else if(n.type===w.MERGE){var l,h,c,u,d,p,f;let _;n.source.fromUser?(l=e,h=t,c=n.path,u=n.children,d=i,p=r,f=a,_=h,u.foreach((e,t)=>{let n=np(c,e);iB(h,na(n))&&(_=iW(l,_,n,t,d,p,f))}),u.foreach((e,t)=>{let n=np(c,e);iB(h,na(n))||(_=iW(l,_,n,t,d,p,f))}),s=_):(H(n.source.fromServer,"Unknown source."),o=n.source.tagged||t.serverCache.isFiltered(),s=iV(e,t,n.path,n.children,i,r,o,a))}else if(n.type===w.ACK_USER_WRITE)s=n.revert?function(e,t,n,i,r,s){let o;if(null!=iM(i,n))return t;{let a;let l=new iU(i,t,r),h=t.eventCache.getNode();if(nf(n)||".priority"===na(n)){let n;if(t.serverCache.isFullyInitialized())n=iR(i,i_(t));else{let e=t.serverCache.getNode();H(e instanceof nH,"serverChildren would be complete if leaf node"),n=iD(i,e)}a=e.filter.updateFullNode(h,n,s)}else{let r=na(n),c=iO(i,r,t.serverCache);null==c&&t.serverCache.isCompleteForChild(r)&&(c=h.getImmediateChild(r)),(a=null!=c?e.filter.updateChild(h,r,c,nh(n),l,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(h,r,nH.EMPTY_NODE,nh(n),l,s):h).isEmpty()&&t.serverCache.isFullyInitialized()&&(o=iR(i,i_(t))).isLeafNode()&&(a=e.filter.updateFullNode(a,o,s))}return o=t.serverCache.isFullyInitialized()||null!=iM(i,no()),iu(t,a,o,e.filter.filtersNodes())}}(e,t,n.path,i,r,a):function(e,t,n,i,r,s,o){if(null!=iM(r,n))return t;let a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(nf(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return iH(e,t,n,l.getNode().getChild(n),r,s,a,o);if(!nf(n))return t;{let i=new ig(null);return l.getNode().forEachChild(nk,(e,t)=>{i=i.set(new ns(e),t)}),iV(e,t,n,i,r,s,a,o)}}{let h=new ig(null);return i.foreach((e,t)=>{let i=np(n,e);l.isCompleteForPath(i)&&(h=h.set(e,l.getNode().getChild(i)))}),iV(e,t,n,h,r,s,a,o)}}(e,t,n.path,n.affectedTree,i,r,a);else if(n.type===w.LISTEN_COMPLETE)s=function(e,t,n,i,r){let s=t.serverCache;return i$(e,id(t,s.getNode(),s.isFullyInitialized()||nf(n),s.isFiltered()),n,i,ij,r)}(e,t,n.path,i,a);else throw W("Unknown operation type: "+n.type);let _=a.getChanges();return function(e,t,n){let i=t.eventCache;if(i.isFullyInitialized()){let r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=ip(e);!(n.length>0)&&e.eventCache.isFullyInitialized()&&(!r||i.getNode().equals(s))&&i.getNode().getPriority().equals(s.getPriority())||n.push(nG(ip(t)))}}(t,s,_),{viewCache:s,changes:_}}(e.processor_,o,t,n,i);return r=e.processor_,H((s=a.viewCache).eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),H(s.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed"),H(a.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=a.viewCache,iJ(e,a.changes,a.viewCache.eventCache.getNode(),null)}function iJ(e,t,n,i){let r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){let r=[],s=[];return t.forEach(t=>{if("child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)){var n;s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))}}),ih(e,r,"child_removed",t,i,n),ih(e,r,"child_added",t,i,n),ih(e,r,"child_moved",s,i,n),ih(e,r,"child_changed",t,i,n),ih(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}class iX{constructor(){this.views=new Map}}function iZ(e,t,n,i){let r=t.source.queryId;if(null!==r){let s=e.views.get(r);return H(null!=s,"SyncTree gave us an op for an invalid query."),iQ(s,t,n,i)}{let r=[];for(let s of e.views.values())r=r.concat(iQ(s,t,n,i));return r}}function i0(e,t,n,i,r){let s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=iR(n,r?i:null),s=!1;return e?s=!0:(e=i instanceof nH?iD(n,i):nH.EMPTY_NODE,s=!1),new iG(t,ic(new ia(e,s,!1),new ia(i,r,!1)))}return o}function i1(e){let t=[];for(let n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function i2(e,t){let n=null;for(let i of e.views.values())n=n||function(e,t){let n=i_(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!nf(t)&&!n.getImmediateChild(na(t)).isEmpty())?n.getChild(t):null}(i,t);return n}function i3(e,t){if(t._queryParams.loadsAllData())return i5(e);{let n=t._queryIdentifier;return e.views.get(n)}}function i6(e){return null!=i5(e)}function i5(e){for(let t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}let i4=1;class i8{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ig(null),this.pendingWriteTree_={visibleWrites:iy.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function i9(e,t,n,i,r){var s,o;return(s=e.pendingWriteTree_,o=r,H(i>s.lastWriteId,"Stacking an older write on top of newer ones"),void 0===o&&(o=!0),s.allWrites.push({path:t,snap:n,writeId:i,visible:o}),o&&(s.visibleWrites=iv(s.visibleWrites,t,n)),s.lastWriteId=i,r)?rs(e,new is(n7(),t,n)):[]}function i7(e,t,n=!1){let i=function(e,t){for(let n=0;n<e.allWrites.length;n++){let i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(!function(e,t){var n;let i=e.allWrites.findIndex(e=>e.writeId===t);H(i>=0,"removeWrite called with nonexistent writeId.");let r=e.allWrites[i];e.allWrites.splice(i,1);let s=r.visible,o=!1,a=e.allWrites.length-1;for(;s&&a>=0;){let t=e.allWrites[a];t.visible&&(a>=i&&function(e,t){if(e.snap)return ny(e.path,t);for(let n in e.children)if(e.children.hasOwnProperty(n)&&ny(np(e.path,n),t))return!0;return!1}(t,r.path)?s=!1:ny(r.path,t.path)&&(o=!0)),a--}return!!s&&(o?((n=e).visibleWrites=iN(n.allWrites,ix,no()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1):r.snap?e.visibleWrites=iC(e.visibleWrites,r.path):tU(r.children,t=>{e.visibleWrites=iC(e.visibleWrites,np(r.path,t))}),!0)}(e.pendingWriteTree_,t))return[];{let t=new ig(null);return null!=i.snap?t=t.set(no(),!0):tU(i.children,e=>{t=t.set(new ns(e),!0)}),rs(e,new ii(i.path,t,n))}}function re(e,t,n){return rs(e,new is(ie(),t,n))}function rt(e,t,n,i,r=!1){let s=t._path,o=e.syncPointTree_.get(s),a=[];if(o&&("default"===t._queryIdentifier||null!=i3(o,t))){let l=function(e,t,n,i){let r=t._queryIdentifier,s=[],o=[],a=i6(e);if("default"===r)for(let[t,r]of e.views.entries())o=o.concat(iK(r,n,i)),iY(r)&&(e.views.delete(t),r.query._queryParams.loadsAllData()||s.push(r.query));else{let t=e.views.get(r);t&&(o=o.concat(iK(t,n,i)),iY(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!i6(e)&&s.push(new(H(c,"Reference.ts has not been loaded"),c)(t._repo,t._path)),{removed:s,events:o}}(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));let h=l.removed;if(a=l.events,!r){let n=-1!==h.findIndex(e=>e._queryParams.loadsAllData()),r=e.syncPointTree_.findOnPath(s,(e,t)=>i6(t));if(n&&!r){let t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){let n=t.fold((e,t,n)=>{if(t&&i6(t))return[i5(t)];{let e=[];return t&&(e=i1(t)),tU(n,(t,n)=>{e=e.concat(n)}),e}});for(let t=0;t<n.length;++t){let i=n[t],r=i.query,s=ro(e,i);e.listenProvider_.startListening(rd(r),ra(e,r),s.hashFn,s.onComplete)}}}r||!(h.length>0)||i||(n?e.listenProvider_.stopListening(rd(t),null):h.forEach(t=>{let n=e.queryToTagMap.get(rl(t));e.listenProvider_.stopListening(rd(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){let i=t[n];if(!i._queryParams.loadsAllData()){let t=rl(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,h)}return a}function rn(e,t,n,i){let r=rh(e,i);if(null==r)return[];{let i=rc(r),s=i.path,o=i.queryId,a=n_(s,t);return ru(e,s,new is(it(o),a,n))}}function ri(e,t,n,i=!1){let r;let s=t._path,o=null,a=!1;e.syncPointTree_.foreachOnPath(s,(e,t)=>{let n=n_(e,s);o=o||i2(t,n),a=a||i6(t)});let l=e.syncPointTree_.get(s);l?(a=a||i6(l),o=o||i2(l,no())):(l=new iX,e.syncPointTree_=e.syncPointTree_.set(s,l)),null!=o?r=!0:(r=!1,o=nH.EMPTY_NODE,e.syncPointTree_.subtree(s).foreachChild((e,t)=>{let n=i2(t,no());n&&(o=o.updateImmediateChild(e,n))}));let h=null!=i3(l,t);if(!h&&!t._queryParams.loadsAllData()){let n=rl(t);H(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");let i=i4++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let c=function(e,t,n,i,r,s){let o=i0(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),!function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){let n=e.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(nL,(e,t)=>{i.push(nY(e,t))}),n.isFullyInitialized()&&i.push(nG(n.getNode())),iJ(e,i,n.getNode(),t)}(o,n)}(l,t,n,iF(s,e.pendingWriteTree_),o,r);if(!h&&!a&&!i){let n=i3(l,t);c=c.concat(function(e,t,n){let i=t._path,r=ra(e,t),s=ro(e,n),o=e.listenProvider_.startListening(rd(t),r,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(i);if(r)H(!i6(a.value),"If we're adding a query, it shouldn't be shadowed");else{let t=a.fold((e,t,n)=>{if(!nf(e)&&t&&i6(t))return[i5(t).query];{let e=[];return t&&(e=e.concat(i1(t).map(e=>e.query))),tU(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){let i=t[n];e.listenProvider_.stopListening(rd(i),ra(e,i))}}return o}(e,t,n))}return c}function rr(e,t,n){let i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,(e,n)=>{let i=i2(n,n_(e,t));if(i)return i});return iP(i,t,r,n,!0)}function rs(e,t){var n;return function e(t,n,i,r){if(nf(t.path))return function e(t,n,i,r){let s=n.get(no());null==i&&null!=s&&(i=i2(s,no()));let o=[];return n.children.inorderTraversal((n,s)=>{let a=i?i.getImmediateChild(n):null,l=iL(r,n),h=t.operationForChild(n);h&&(o=o.concat(e(h,s,a,l)))}),s&&(o=o.concat(iZ(s,t,r,i))),o}(t,n,i,r);{let s=n.get(no());null==i&&null!=s&&(i=i2(s,no()));let o=[],a=na(t.path),l=t.operationForChild(a),h=n.children.get(a);if(h&&l){let t=i?i.getImmediateChild(a):null,n=iL(r,a);o=o.concat(e(l,h,t,n))}return s&&(o=o.concat(iZ(s,t,r,i))),o}}(t,e.syncPointTree_,null,(n=e.pendingWriteTree_,iF(no(),n)))}function ro(e,t){let n=t.query,i=ra(e,n);return{hashFn:()=>(t.viewCache_.serverCache.getNode()||nH.EMPTY_NODE).hash(),onComplete:t=>{if("ok"===t){var r;return i?function(e,t,n){let i=rh(e,n);if(!i)return[];{let n=rc(i),r=n.path,s=n.queryId,o=n_(r,t);return ru(e,r,new ir(it(s),o))}}(e,n._path,i):(r=n._path,rs(e,new ir(ie(),r)))}{let i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");let i=Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return rt(e,n,null,i)}}}}function ra(e,t){let n=rl(t);return e.queryToTagMap.get(n)}function rl(e){return e._path.toString()+"$"+e._queryIdentifier}function rh(e,t){return e.tagToQueryMap.get(t)}function rc(e){let t=e.indexOf("$");return H(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ns(e.substr(0,t))}}function ru(e,t,n){let i=e.syncPointTree_.get(t);return H(i,"Missing sync point for query tag that we're tracking"),iZ(i,n,iF(t,e.pendingWriteTree_),null)}function rd(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(H(u,"Reference.ts has not been loaded"),u)(e._repo,e._path):e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e){this.node_=e}getImmediateChild(e){return new rp(this.node_.getImmediateChild(e))}node(){return this.node_}}class rf{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){let t=np(this.path_,e);return new rf(this.syncTree_,t)}node(){return rr(this.syncTree_,this.path_)}}const r_=function(e,t,n){return e&&"object"==typeof e?(H(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"])?rm(e[".sv"],t,n):"object"==typeof e[".sv"]?rg(e[".sv"],t):void H(!1,"Unexpected server value: "+JSON.stringify(e,null,2)):e},rm=function(e,t,n){if("timestamp"===e)return n.timestamp;H(!1,"Unexpected server value: "+e)},rg=function(e,t,n){e.hasOwnProperty("increment")||H(!1,"Unexpected server value: "+JSON.stringify(e,null,2));let i=e.increment;"number"!=typeof i&&H(!1,"Unexpected increment value: "+i);let r=t.node();if(H(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;let s=r.getValue();return"number"!=typeof s?i:s+i},ry=function(e,t,n,i){return rb(t,new rf(n,e),i)},rv=function(e,t,n){return rb(e,new rp(t),n)};function rb(e,t,n){let i;let r=r_(e.getPriority().val(),t.getImmediateChild(".priority"),n);if(!e.isLeafNode())return i=e,r!==e.getPriority().val()&&(i=i.updatePriority(new nO(r))),e.forEachChild(nL,(e,r)=>{let s=rb(r,t.getImmediateChild(e),n);s!==r&&(i=i.updateImmediateChild(e,s))}),i;{let i=r_(e.getValue(),t,n);return i!==e.getValue()||r!==e.getPriority().val()?new nO(i,nB(r)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function rw(e,t){let n=t instanceof ns?t:new ns(t),i=e,r=na(n);for(;null!==r;){let e=em(i.node.children,r)||{children:{},childCount:0};i=new rC(r,i,e),r=na(n=nh(n))}return i}function rI(e){return e.node.value}function rE(e,t){e.node.value=t,function e(t){null!==t.parent&&function(t,n,i){let r=void 0===rI(i)&&!rT(i),s=e_(t.node.children,n);r&&s?(delete t.node.children[n],t.node.childCount--,e(t)):r||s||(t.node.children[n]=i.node,t.node.childCount++,e(t))}(t.parent,t.name,t)}(e)}function rT(e){return e.node.childCount>0}function rS(e,t){tU(e.node.children,(n,i)=>{t(new rC(n,e,i))})}function rk(e){return new ns(null===e.parent?e.name:rk(e.parent)+"/"+e.name)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx=/[\[\].#$\/\u0000-\u001F\u007F]/,rN=/[\[\].#$\u0000-\u001F\u007F]/,rP=function(e){return"string"==typeof e&&0!==e.length&&!rx.test(e)},rR=function(e){return"string"==typeof e&&0!==e.length&&!rN.test(e)},rD=function(e,t,n,i){i&&void 0===t||rA(ew(e,"value"),t,n)},rA=function(e,t,n){let i=n instanceof ns?new nv(n,e):n;if(void 0===t)throw Error(e+"contains undefined "+nC(i));if("function"==typeof t)throw Error(e+"contains a function "+nC(i)+" with contents = "+t.toString());if(tR(t))throw Error(e+"contains "+t.toString()+" "+nC(i));if("string"==typeof t&&t.length>0xa00000/3&&eE(t)>0xa00000)throw Error(e+"contains a string greater than 10485760 utf8 bytes "+nC(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(tU(t,(t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!rP(t)))throw Error(e+" contains an invalid key ("+t+") "+nC(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(t),i.byteLength_+=eE(t),nb(i),rA(e,s,i),function(e){let t=e.parts_.pop();e.byteLength_-=eE(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)}),n&&r)throw Error(e+' contains ".value" child '+nC(i)+" in addition to actual children.")}},rM=function(e,t){let n,i;for(n=0;n<t.length;n++){let r=nu(i=t[n]);for(let t=0;t<r.length;t++)if(".priority"===r[t]&&t===r.length-1);else if(!rP(r[t]))throw Error(e+"contains an invalid key ("+r[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(nm);let r=null;for(n=0;n<t.length;n++){if(i=t[n],null!==r&&ny(r,i))throw Error(e+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},rO=function(e,t,n,i){if(i&&void 0===t)return;let r=ew(e,"values");if(!(t&&"object"==typeof t)||Array.isArray(t))throw Error(r+" must be an object containing the children to replace.");let s=[];tU(t,(e,t)=>{let i=new ns(e);if(rA(r,t,np(n,i)),".priority"===nc(i)){if(!(null===t||"string"==typeof t||"number"==typeof t&&!tR(t)||t&&"object"==typeof t&&e_(t,".sv")))throw Error(r+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).")}s.push(i)}),rM(r,s)},rL=function(e,t,n,i){if((!i||void 0!==n)&&!rR(n))throw Error(ew(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},rF=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),rL(e,t,n,i)},rq=function(e,t){if(".info"===na(t))throw Error(e+" failed = Can't modify data under /.info/")},rj=function(e,t){var n;let i=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!rP(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==i.length&&((n=i)&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),!rR(n)))throw Error(ew(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rU{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function r$(e,t){let n=null;for(let i=0;i<t.length;i++){let r=t[i],s=r.getPath();null===n||ng(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function rH(e,t,n){r$(e,n),rB(e,e=>ng(e,t))}function rW(e,t,n){r$(e,n),rB(e,e=>ny(e,t)||ny(t,e))}function rB(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){let r=e.eventLists_[i];r&&(t(r.path)?(function(e){for(let t=0;t<e.events.length;t++){let n=e.events[t];if(null!==n){e.events[t]=null;let i=n.getEventRunner();tw&&tT("event: "+n.toString()),tB(i)}}}(e.eventLists_[i]),e.eventLists_[i]=null):n=!1)}n&&(e.eventLists_=[]),e.recursionDepth_--}class rz{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new rU,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=n5(),this.transactionQueueTree_=new rC,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function rV(e){let t=e.infoData_.getNode(new ns(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function rG(e){var t;return(t=t={timestamp:rV(e)}).timestamp=t.timestamp||new Date().getTime(),t}function rY(e,t,n,i,r){e.dataUpdateCount++;let s=new ns(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r){if(i){let t=ey(n,e=>nB(e));o=function(e,t,n,i){let r=rh(e,i);if(!r)return[];{let i=rc(r),s=i.path,o=i.queryId,a=n_(s,t),l=ig.fromObject(n);return ru(e,s,new io(it(o),a,l))}}(e.serverSyncTree_,s,t,r)}else{let t=nB(n);o=rn(e.serverSyncTree_,s,t,r)}}else if(i){let t=ey(n,e=>nB(e));o=function(e,t,n){let i=ig.fromObject(n);return rs(e,new io(ie(),t,i))}(e.serverSyncTree_,s,t)}else{let t=nB(n);o=re(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=r2(e,s)),rW(e.eventQueue_,a,o)}function rK(e,t){rQ(e,"connected",t),!1===t&&function(e){rZ(e,"onDisconnectEvents");let t=rG(e),n=n5();n4(e.onDisconnect_,no(),(i,r)=>{let s=ry(i,r,e.serverSyncTree_,t);!function e(t,n,i){if(nf(n))t.value=i,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(n,i);else{let r=na(n);t.children.has(r)||t.children.set(r,n5()),e(t.children.get(r),n=nh(n),i)}}(n,i,s)});let i=[];n4(n,no(),(t,n)=>{i=i.concat(re(e.serverSyncTree_,t,n));let r=r4(e,t);r2(e,r)}),e.onDisconnect_=n5(),rW(e.eventQueue_,no(),i)}(e)}function rQ(e,t,n){let i=new ns("/.info/"+t),r=nB(n);e.infoData_.updateSnapshot(i,r);let s=re(e.infoSyncTree_,i,r);rW(e.eventQueue_,i,s)}function rJ(e){return e.nextWriteId_++}function rX(e,t,n){let i;i=".info"===na(t._path)?rt(e.infoSyncTree_,t,n):rt(e.serverSyncTree_,t,n),rH(e.eventQueue_,t._path,i)}function rZ(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),tT(n,...t)}function r0(e,t,n,i){t&&tB(()=>{if("ok"===n)t(null);else{let e=(n||"error").toUpperCase(),r=e;i&&(r+=": "+i);let s=Error(r);s.code=e,t(s)}})}function r1(e,t,n){return rr(e.serverSyncTree_,t,n)||nH.EMPTY_NODE}function r2(e,t){let n=r3(e,t),i=rk(n),r=r6(e,n);return function(e,t,n){if(0===t.length)return;let i=[],r=[],s=t.filter(e=>0===e.status).map(e=>e.currentWriteId);for(let o=0;o<t.length;o++){let a=t[o],l=n_(n,a.path),h=!1,c;if(H(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===a.status)h=!0,c=a.abortReason,r=r.concat(i7(e.serverSyncTree_,a.currentWriteId,!0));else if(0===a.status){if(a.retryCount>=25)h=!0,c="maxretry",r=r.concat(i7(e.serverSyncTree_,a.currentWriteId,!0));else{let n=r1(e,a.path,s);a.currentInputSnapshot=n;let i=t[o].update(n.val());if(void 0!==i){rA("transaction failed: Data returned ",i,a.path);let t=nB(i);"object"==typeof i&&null!=i&&e_(i,".priority")||(t=t.updatePriority(n.getPriority()));let o=a.currentWriteId,l=rv(t,n,rG(e));a.currentOutputSnapshotRaw=t,a.currentOutputSnapshotResolved=l,a.currentWriteId=rJ(e),s.splice(s.indexOf(o),1),r=(r=r.concat(i9(e.serverSyncTree_,a.path,l,a.currentWriteId,a.applyLocally))).concat(i7(e.serverSyncTree_,o,!0))}else h=!0,c="nodata",r=r.concat(i7(e.serverSyncTree_,a.currentWriteId,!0))}}rW(e.eventQueue_,n,r),r=[],h&&(t[o].status=2,setTimeout(t[o].unwatcher,Math.floor(0)),t[o].onComplete&&("nodata"===c?i.push(()=>t[o].onComplete(null,!1,t[o].currentInputSnapshot)):i.push(()=>t[o].onComplete(Error(c),!1,null))))}r5(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)tB(i[e]);(function e(t,n=t.transactionQueueTree_){if(n||r5(t,n),rI(n)){let i=r6(t,n);H(i.length>0,"Sending zero length transaction queue"),i.every(e=>0===e.status)&&function(t,n,i){let r=r1(t,n,i.map(e=>e.currentWriteId)),s=r,o=r.hash();for(let e=0;e<i.length;e++){let t=i[e];H(0===t.status,"tryToSendTransactionQueue_: items in queue should all be run."),t.status=1,t.retryCount++;let r=n_(n,t.path);s=s.updateChild(r,t.currentOutputSnapshotRaw)}let a=s.val(!0);t.server_.put(n.toString(),a,r=>{rZ(t,"transaction put response",{path:n.toString(),status:r});let s=[];if("ok"===r){let r=[];for(let e=0;e<i.length;e++)i[e].status=2,s=s.concat(i7(t.serverSyncTree_,i[e].currentWriteId)),i[e].onComplete&&r.push(()=>i[e].onComplete(null,!0,i[e].currentOutputSnapshotResolved)),i[e].unwatcher();r5(t,rw(t.transactionQueueTree_,n)),e(t,t.transactionQueueTree_),rW(t.eventQueue_,n,s);for(let e=0;e<r.length;e++)tB(r[e])}else{if("datastale"===r)for(let e=0;e<i.length;e++)3===i[e].status?i[e].status=4:i[e].status=0;else{tN("transaction at "+n.toString()+" failed: "+r);for(let e=0;e<i.length;e++)i[e].status=4,i[e].abortReason=r}r2(t,n)}},o)}(t,rk(n),i)}else rT(n)&&rS(n,n=>{e(t,n)})})(e,e.transactionQueueTree_)}(e,r,i),i}function r3(e,t){let n;let i=e.transactionQueueTree_;for(n=na(t);null!==n&&void 0===rI(i);)i=rw(i,n),n=na(t=nh(t));return i}function r6(e,t){let n=[];return function e(t,n,i){let r=rI(n);if(r)for(let e=0;e<r.length;e++)i.push(r[e]);rS(n,n=>{e(t,n,i)})}(e,t,n),n.sort((e,t)=>e.order-t.order),n}function r5(e,t){let n=rI(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,rE(t,n.length>0?n:void 0)}rS(t,t=>{r5(e,t)})}function r4(e,t){let n=rk(r3(e,t)),i=rw(e.transactionQueueTree_,t);return!function(e,t,n){let i=e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,t=>{r8(e,t)}),r8(e,i),!function e(t,n,i,r){i&&!r&&n(t),rS(t,t=>{e(t,n,!0,r)}),i&&r&&n(t)}(i,t=>{r8(e,t)}),n}function r8(e,t){let n=rI(t);if(n){let i=[],r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(H(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(H(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(i7(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,Error("set"),!1,null))));-1===s?rE(t,void 0):n.length=s+1,rW(e.eventQueue_,rk(t),r);for(let e=0;e<i.length;e++)tB(i[e])}}const r9=function(e,t){let n=r7(e),i=n.namespace;"firebase.com"===n.domain&&tx(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||tx("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||tP();let r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new tX(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new ns(n.pathString)}},r7=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"==typeof e){let h=e.indexOf("//");h>=0&&(a=e.substring(0,h-1),e=e.substring(h+2));let c=e.indexOf("/");-1===c&&(c=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(c,u)),c<u&&(r=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="",n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(c,u)));let d=function(e){let t={};for(let n of("?"===e.charAt(0)&&(e=e.substring(1)),e.split("&"))){if(0===n.length)continue;let i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):tN(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));(h=t.indexOf(":"))>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(h+1),10)):h=t.length;let p=t.slice(0,h);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{let e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}},se="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",st=function(){let e=0,t=[];return function(n){let i;let r=n===e;e=n;let s=Array(8);for(i=7;i>=0;i--)s[i]=se.charAt(n%64),n=Math.floor(n/64);H(0===n,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)o+=se.charAt(t[i]);return H(20===o.length,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){let e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+eu(this.snapshot.exportVal())}}class si{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return H(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return nf(this._path)?null:nc(this._path)}get ref(){return new so(this._repo,this._path)}get _queryIdentifier(){let e=tq(n2(this._queryParams));return"{}"===e?"default":e}get _queryObject(){return n2(this._queryParams)}isEqual(e){if(!((e=eT(e))instanceof ss))return!1;let t=this._repo===e._repo,n=ng(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class so extends ss{constructor(e,t){super(e,t,new n0,!1)}get parent(){let e=nd(this._path);return null===e?null:new so(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class sa{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){let t=new ns(e),n=sh(this.ref,e);return new sa(this._node.getChild(t),n,nL)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return!this._node.isLeafNode()&&!!this._node.forEachChild(this._index,(t,n)=>e(new sa(n,sh(this.ref,t),nL)))}hasChild(e){let t=new ns(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function sl(e,t){return(e=eT(e))._checkNotDeleted("ref"),void 0!==t?sh(e._root,t):e._root}function sh(e,t){return null===na((e=eT(e))._path)?rF("child","path",t,!1):rL("child","path",t,!1),new so(e._repo,np(e._path,t))}function sc(e,t){rO("update",t,e._path,!1);let n=new er;return!function(e,t,n,i){rZ(e,"update",{path:t.toString(),value:n});let r=!0,s=rG(e),o={};if(tU(n,(n,i)=>{r=!1,o[n]=ry(np(t,n),nB(i),e.serverSyncTree_,s)}),r)tT("update() called with empty data.  Don't do anything."),r0(e,i,"ok",void 0);else{let r=rJ(e),s=function(e,t,n,i){var r;H(i>(r=e.pendingWriteTree_).lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:t,children:n,writeId:i,visible:!0}),r.visibleWrites=ib(r.visibleWrites,t,n),r.lastWriteId=i;let s=ig.fromObject(n);return rs(e,new io(n7(),t,s))}(e.serverSyncTree_,t,o,r);r$(e.eventQueue_,s),e.server_.merge(t.toString(),n,(n,s)=>{let o="ok"===n;o||tN("update at "+t+" failed: "+n);let a=i7(e.serverSyncTree_,r,!o),l=a.length>0?r2(e,t):t;rW(e.eventQueue_,l,a),r0(e,i,n,s)}),tU(n,n=>{let i=r4(e,np(t,n));r2(e,i)}),rW(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback(()=>{})),n.promise}class su{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){let n=t._queryParams.getIndex();return new sn("value",this,new sa(e.snapshotNode,new so(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new si(this,e,t):null}matches(e){return e instanceof su&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class sd{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new si(this,e,t):null}createEvent(e,t){H(null!=e.childName,"Child events should have a childName.");let n=sh(new so(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new sn(e.type,this,new sa(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof sd&&this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext))}hasAnyCallback(){return!!this.callbackContext}}function sp(e,t,n,i){return function(e,t,n,i,r){var s;let o,a;if("object"==typeof i&&(o=void 0,r=i),"function"==typeof i&&(o=i),r&&r.onlyOnce){let t=n,i=(n,i)=>{rX(e._repo,e,h),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}let l=new sr(n,o||void 0),h="value"===t?new su(l):new sd(t,l);return s=e._repo,a=".info"===na(e._path)?ri(s.infoSyncTree_,e,h):ri(s.serverSyncTree_,e,h),rH(s.eventQueue_,e._path,a),()=>rX(e._repo,e,h)}(e,"value",t,n,i)}H(!c,"__referenceConstructor has already been defined"),c=so,H(!u,"__referenceConstructor has already been defined"),u=so;const sf={};class s_{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(function(e,t,n){if(e.stats_=t3(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new n3(e.repoInfo_,(t,n,i,r)=>{rY(e,t,n,i,r)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>rK(e,!0),0);else{if(null!=n){if("object"!=typeof n)throw Error("Only objects are supported for option databaseAuthVariableOverride");try{eu(n)}catch(e){throw Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new nI(e.repoInfo_,t,(t,n,i,r)=>{rY(e,t,n,i,r)},t=>{rK(e,t)},t=>{var n;n=e,tU(t,(e,t)=>{rQ(n,e,t)})},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=function(e,t){let n=e.toString();return t2[n]||(t2[n]=t()),t2[n]}(e.repoInfo_,()=>new n9(e.stats_,e.server_)),e.infoData_=new n6,e.infoSyncTree_=new i8({startListening:(t,n,i,r)=>{let s=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=re(e.infoSyncTree_,t._path,o),setTimeout(()=>{r("ok")},0)),s},stopListening:()=>{}}),rQ(e,"connected",!1),e.serverSyncTree_=new i8({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,(n,i)=>{let s=r(n,i);rW(e.eventQueue_,t._path,s)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new so(this._repo,no())),this._rootInternal}_delete(){return null!==this._rootInternal&&(function(e,t){let n=sf[t];n&&n[e.key]===e||tx(`Database ${t}(${e.repoInfo_}) has already been deleted.`),e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt"),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&tx("Cannot call "+e+" on a deleted database.")}}function sm(e=function(e=eZ){let t=e1.get(e);if(!t&&e===eZ&&ei())return e9();if(!t)throw e4.create("no-app",{appName:e});return t}(),t){let n=(function(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)})(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){let e=en("database");e&&function(e,t,n,i={}){var r;let s;(e=eT(e))._checkNotDeleted("useEmulator");let o=`${t}:${n}`,a=e._repoInternal;if(e._instanceStarted){if(o===e._repoInternal.repoInfo_.host&&ev(i,a.repoInfo_.emulatorOptions))return;tx("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}a.repoInfo_.nodeAdmin?(i.mockUserToken&&tx('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new tY(tY.OWNER)):i.mockUserToken&&(s=new tY("string"==typeof i.mockUserToken?i.mockUserToken:function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[K(JSON.stringify({alg:"none",type:"JWT"})),K(JSON.stringify(s)),""].join(".")}(i.mockUserToken,e.app.options.projectId))),r=s,a.repoInfo_=new tX(o,!1,a.repoInfo_.namespace,a.repoInfo_.webSocketOnly,a.repoInfo_.nodeAdmin,a.repoInfo_.persistenceKey,a.repoInfo_.includeNamespaceInQueryParams,!0,i),r&&(a.authTokenProvider_=r)}(n,...e)}return n}nI.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},nI.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},td="11.4.0",e5(new eS("database",(e,{instanceIdentifier:t})=>{let n=e.getProvider("app").getImmediate();return function(e,t,n,i,r){var s,o,a,l;let h,c,u,d,p=i||e.options.databaseURL;void 0===p&&(e.options.projectId||tx("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),tT("Using default host for project ",e.options.projectId),p=`${e.options.projectId}-default-rtdb.firebaseio.com`);let f=r9(p,void 0),_=f.repoInfo;void 0!==N&&N.env&&(u=N.env.FIREBASE_DATABASE_EMULATOR_HOST),u?(d=!0,_=(f=r9(p=`http://${u}?ns=${_.namespace}`,void 0)).repoInfo):d=!f.repoInfo.secure;let m=r&&d?new tY(tY.OWNER):new tG(e.name,e.options,t);return rj("Invalid Firebase Database URL",f),nf(f.path)||tx("Database URL must point to the root of a Firebase Database (not including a child path)."),new s_((s=_,o=e,a=m,l=new tV(e,n),(h=sf[o.name])||(h={},sf[o.name]=h),(c=h[s.toURLString()])&&tx("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new rz(s,!1,a,l),h[s.toURLString()]=c,c),e)}(n,e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)},"PUBLIC").setMultipleInstances(!0)),e7(tc,tu,void 0),e7(tc,tu,"esm2017"),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */e7("firebase","11.4.0","app");const sg=sm(e9({apiKey:"AIzaSyBqoATuWSOg3ZDbSBOsvLiww1xc5xLSxak",authDomain:"desafio-ppt-e6f00.firebaseapp.com",databaseURL:"https://desafio-ppt-e6f00-default-rtdb.firebaseio.com",projectId:"desafio-ppt-e6f00",storageBucket:"desafio-ppt-e6f00.firebasestorage.app",messagingSenderId:"1005620596792",appId:"1:1005620596792:web:186bd21929786d9e1f16cd",measurementId:"G-QYCNTVFR3L"})),sy={player1Name:"",player2Name:null,roomId:"",currentGame:null,playerNumber:1,id:null,rtdbRoomId:"",setCurrentGame:e=>{sy.currentGame=e}},sv=[],sb={getState:()=>(sy.currentGame||(sy.currentGame={roomId:sy.roomId||"",data:{player1Name:"",player2Name:"",player1Play:null,player2Play:null,gameOver:!1},statistics:{player1:{wins:0,losses:0,draws:0},player2:{wins:0,losses:0,draws:0}}}),sy),setState(e){let t={...sy,...e};for(let e of(Object.assign(sy,t),sv))e(sy);console.log("State actualizado:",sy)},subscribe:e=>(sv.push(e),()=>{let t=sv.indexOf(e);-1!==t&&sv.splice(t,1)}),async getRoomData(e){try{console.log("getRoomData buscando roomId:",e);let t=sl(sg,`rooms/${e}`),n=(await function(e){e=eT(e);let t=new su(new sr(()=>{}));return(function(e,t,n){let i=function(e,t){var n;let i=t._path,r=null;e.syncPointTree_.foreachOnPath(i,(e,t)=>{let n=n_(e,i);r=r||i2(t,n)});let s=e.syncPointTree_.get(i);s?r=r||i2(s,no()):(s=new iX,e.syncPointTree_=e.syncPointTree_.set(i,s));let o=null!=r,a=o?new ia(r,!0,!1):null,l=(n=e.pendingWriteTree_,iF(t._path,n));return ip(i0(s,t,l,o?a.getNode():nH.EMPTY_NODE,o).viewCache_)}(e.serverSyncTree_,t);return null!=i?Promise.resolve(i):e.server_.get(t).then(i=>{let r;let s=nB(i).withIndex(t._queryParams.getIndex());if(ri(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())r=re(e.serverSyncTree_,t._path,s);else{let n=ra(e.serverSyncTree_,t);r=rn(e.serverSyncTree_,t._path,s,n)}return rW(e.eventQueue_,t._path,r),rt(e.serverSyncTree_,t,n,null,!0),s},n=>(rZ(e,"get for query "+eu(t)+" failed: "+n),Promise.reject(Error(n))))})(e._repo,e,t).then(t=>new sa(t,new so(e._repo,e._path),e._queryParams.getIndex()))}(t)).val();if(n)return n;return console.error("state.ts:85 No se encontraron datos de la sala."),null}catch(e){return console.error("Error al obtener datos de la sala:",e),null}},listenRoomChanges(){if(!sy.roomId){console.error("No hay roomId para escuchar.");return}sp(sl(sg,`rooms/${sy.roomId}`),e=>{let t=e.val();if(console.log("Datos recibidos de la base de datos:",t),t&&t.users){let e=Object.values(t.users);if(1===e.length){let n=e[0];sb.setPlayer1Name(n.userName,n.id),sb.setPlayer2Name(null,n.id),sb.setState({...sy,currentGame:{roomId:sy.roomId,data:{player1Name:n.userName,player2Name:null,player1Play:t.player1Move,player2Play:t.player2Move,gameOver:t.gameOver},statistics:{player1:{wins:0,losses:0,draws:0},player2:{wins:0,losses:0,draws:0}}}})}else if(2===e.length){let n=e[0],i=e[1];sb.setPlayer1Name(n.userName,n.id),sb.setPlayer2Name(i.userName,i.id),sb.setState({...sy,currentGame:{roomId:sy.roomId,data:{player1Name:n.userName,player2Name:i.userName,player1Play:t.player1Move,player2Play:t.player2Move,gameOver:t.gameOver},statistics:{player1:{wins:0,losses:0,draws:0},player2:{wins:0,losses:0,draws:0}}}})}console.log("Estado actualizado con users:",sy)}else console.error("Datos de sala incompletos o nulos:",t)},e=>{console.error("Error al escuchar la sala:",e)})},setPlayer1Name(e,t){let n=this.determinePlayerNumber(t);this.setState({player1Name:e,playerNumber:n})},setPlayer2Name(e,t){let n=this.determinePlayerNumber(t);this.setState({player2Name:e,playerNumber:n})},determinePlayerNumber:e=>e===sy.id?2:1,setRoomId(e){this.setState({roomId:e})},setId(e){this.setState({id:e})},async createUser(e){let t=function(e,t){let n;rq("push",(e=eT(e))._path),rD("push",void 0,e._path,!0);let i=st(rV(e._repo)),r=sh(e,i),s=sh(e,i);return r.then=(n=Promise.resolve(s)).then.bind(n),r.catch=n.then.bind(n,void 0),r}(sl(sg,"users"));return await sc(t,{nombre:e}),t.key},async saveRoomData(e,t,n,i,r){try{let s=await fetch("https://ppt-backend-1.onrender.com/api/guardardatos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ownerId:e,ownerName:t,guestId:n,guestName:i,roomId:r})});if(!s.ok)throw Error(`HTTP error! status: ${s.status}`);return(await s.json()).roomId}catch(e){console.error("Error al guardar datos de la sala:",e);return}},async setMove(e){let t=sb.getState(),n=t.roomId,i=t.playerNumber;if(!n){console.error("No se encontró el roomId");return}try{let t=sl(sg,`games/${n}`);await sc(t,1===i?{player1Move:e}:{player2Move:e}),console.log("Movimiento enviado con éxito")}catch(e){console.error("Error al enviar el movimiento:",e)}}};class sC extends HTMLElement{constructor(){super(),this.unsubscribe=null,this.roomId=null,this.loading=!0,this.shadow=this.attachShadow({mode:"open"})}async connectedCallback(){try{let e=await this.getRoomData(),t=sb.getState().currentGame?.roomId;t||(t=""),sb.setState({currentGame:{...sb.getState().currentGame,roomId:t,data:e,statistics:e.statistics}})}catch(e){console.error("Error al obtener roomData:",e)}}async getRoomData(){return{player1Name:"Player 1",player2Name:"Player 2",statistics:{player1:{wins:0,losses:0,draws:0},player2:{wins:0,losses:0,draws:0}}}}disconnectedCallback(){this.unsubscribeFromState(),this.stopListeningRoomChanges()}listenRoomChanges(){if(!sy.roomId){console.error("No hay roomId para escuchar.");return}sp(sl(sg,`rooms/${sy.roomId}`),e=>{let t=e.val();if(console.log("Datos recibidos de la base de datos:",t),t&&t.users){let e=Object.values(t.users);if(1===e.length){let n=e[0];sb.setPlayer1Name(n.userName),sb.setPlayer2Name(null),sb.setState({...sy,currentGame:{roomId:sy.roomId,data:{player1Name:n.userName,player2Name:null,player1Play:t.player1Move,player2Play:t.player2Move,gameOver:t.gameOver},statistics:{player1:{wins:0,losses:0,draws:0},player2:{wins:0,losses:0,draws:0}}}})}else if(2===e.length){let n=e[0],i=e[1];sb.setPlayer1Name(n.userName),sb.setPlayer2Name(i.userName),sb.setState({...sy,currentGame:{roomId:sy.roomId,data:{player1Name:n.userName,player2Name:i.userName,player1Play:t.player1Move,player2Play:t.player2Move,gameOver:t.gameOver},statistics:{player1:{wins:0,losses:0,draws:0},player2:{wins:0,losses:0,draws:0}}}})}console.log("Estado actualizado con users:",sy)}else console.error("Datos de sala incompletos o nulos:",t)},e=>{console.error("Error al escuchar la sala:",e)})}stopListeningRoomChanges(){this.roomId&&sp(sl(sg,`rooms/${this.roomId}/currentGame/data`),()=>{})}subscribeToState(){this.unsubscribe=sb.subscribe(()=>{this.render()})}unsubscribeFromState(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)}render(){let e=sb.getState(),t=e.currentGame,n="Esperando Jugador 1",i="Esperando Jugador 2",r=e.player1Name,s=e.player2Name||"Esperando Jugador 2";if(t&&t.data&&(n=t.data.player1Name||"Esperando Jugador 1",i=t.data.player2Name||"Esperando Jugador 2"),this.loading)this.shadow.innerHTML=`
        <style>
          .loading-container {
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        </style>
        <div class="loading-container">
          <h1>Cargando...</h1>
        </div>
      `;else{this.shadow.innerHTML=`
        <style>
          .container {
            background-image: url(${_(k)});
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            font-family: sans-serif;
          }
          .players-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 20px;
          }
          .players {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
          }
          .player-names {
            font-size: 18px;
            text-align: center;
          }
          .room-info {
            font-size: 16px;
            margin-bottom: 20px;
          }
          .instructions-button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          .instructions-button:hover {
            background-color: #3e8e41;
          }
        </style>
        <div class="container">
          <div class="players-container">
            <div class="players">
              ${n} vs ${i}
            </div>
            <div class="player-names">
              ${r} <br> ${s}
            </div>
          </div>
          <div class="room-info">
            Room ID: ${e.roomId}
          </div>
          <button id="instructions-button" class="instructions-button">
            Instrucciones
          </button>
        </div>
      `;let t=this.shadow.getElementById("instructions-button");t&&t.addEventListener("click",()=>{sF.goTo("/instructions")})}}}customElements.define("short-id-page",sC);class sw extends HTMLElement{constructor(){super(),this.unsubscribe=null,this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.subscribeToState()}disconnectedCallback(){this.unsubscribeFromState()}subscribeToState(){this.unsubscribe=sb.subscribe(()=>{this.render()})}unsubscribeFromState(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)}render(){let e=sb.getState();this.shadow.innerHTML=`
      <style>
        .container {
          background-image: url(${_(k)});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          font-family: sans-serif;
        }
        .instructions {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
          text-align: center;
          padding: 20px;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 10px;
        }
        .play-button {
          padding: 10px 20px;
          font-size: 16px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .play-button:hover {
          background-color: #3e8e41;
        }
        .player-info {
          font-size: 16px;
          margin-top: 20px;
          background-color: rgba(255, 255, 255, 0.8);
          padding: 10px;
          border-radius: 5px;
        }
      </style>
      <div class="container">
        <div class="instructions">
          <p>Presion\xe1 jugar y eleg\xed piedra, papel o tijera antes de que pasen los 3 segundos.</p>
        </div>
        <button class="play-button">JUGAR</button>
        <div class="player-info">
          <p>Player 1: ${e.player1Name||"Esperando..."}</p>
          <p>Player 2: ${e.player2Name||"Esperando..."}</p>
          <p>Room ID: ${e.roomId||"No ID"}</p>
        </div>
      </div>
    `;let t=this.shadow.querySelector(".play-button");t&&t.addEventListener("click",()=>{sF.goTo("/play")})}}customElements.define("instructions-page",sw);var sI={};sI=new URL("piedra.2b6b2e59.png",import.meta.url).toString();var sE={};sE=new URL("tijera.4b8c96df.png",import.meta.url).toString();var sT={};sT=new URL("papel.7c3d639f.png",import.meta.url).toString();class sS extends HTMLElement{constructor(){super(),this.roomId=null,this.playerNumber=1,this.unsubscribe=null,this.myMove=null,this.opponentMove=null,this.timerInterval=null,this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.subscribeToState()}disconnectedCallback(){this.unsubscribe&&this.unsubscribe()}subscribeToState(){this.unsubscribe=sb.subscribe(()=>{console.log("El estado ha cambiado, actualizando UI..."),this.updateUI()})}render(){let e=this.shadow;if(e){e.innerHTML=`
                <div class="play-container">
                    <h1>Elige tu jugada</h1>
                    <div class="timer">
                        <span id="timer">7</span>
                    </div>
                    <div class="moves">
                        <button id="piedra"><img src="${_(sI)}" alt="piedra"/></button>
                        <button id="papel"><img src="${_(sT)}" alt ="papel"/></button>
                        <button id="tijera"><img src="${_(sE)}" alt="Tijera"/></button>
                    </div>
                    <div>
                        <p>Tu jugada: <span id="tu-jugada"></span></p>
                        <p>Jugada del oponente: <span id="jugada-oponente"></span></p>
                        <p>Resultado: <span id="resultado"></span></p>
                    </div>
                    <button id="goToResultButton">Ir a Resultado</button>
                </div>
            `;let t=e.querySelector(".moves"),n=e.querySelector("#timer"),i=e.querySelector(".timer"),r=e.getElementById("goToResultButton"),s=7;i.style.animation=`countdown ${s}s linear forwards`,this.timerInterval=setInterval(()=>{s--,n&&(n.textContent=s.toString()),0===s&&(clearInterval(this.timerInterval),this.checkAndHideMoves(t))},1e3),t?.addEventListener("click",async n=>{let i=n.target.closest("button");if(i){e.querySelectorAll(".moves button").forEach(e=>{let t=e.querySelector("img");e===i?t?.classList.add("selected"):t?.classList.add("unselected")});let n=i.id;this.roomId&&(await sb.setMove(n),this.updateUI(),this.checkAndHideMoves(t))}}),r&&r.addEventListener("click",()=>{this.redirectToResultPage()});let o=document.createElement("style");o.textContent=`
                .play-container {
                    background-image: url(${_(k)});
                    background-size: cover;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    text-align: center;
                }

                h1 {
                    font-size: 36px;
                    margin-bottom: 30px;
                    color: #333;
                }

                .timer {
                    font-size: 48px;
                    margin-bottom: 30px;
                    color: #333;
                    position: relative;
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 5px solid #333;
                }

                .timer::before {
                    content: "";
                    position: absolute;
                    top: -5px;
                    left: -5px;
                    right: -5px;
                    bottom: -5px;
                    border-radius: 50%;
                    border: 5px solid transparent;
                    border-top-color: #333;
                    animation: spin 3s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                @keyframes countdown {
                    0% { stroke-dasharray: 283; stroke-dashoffset: 0; }
                    100% { stroke-dasharray: 283; stroke-dashoffset: 283; }
                }

                .moves {
                    display: flex;
                    justify-content: center;
                }

                .moves button {
                    background: none;
                    border: none;
                    padding: 10px;
                    margin: 0 10px;
                    cursor: pointer;
                }

                .moves img {
                    width: 100px;
                    height: 100px;
                    transition: transform 0.3s ease;
                }

                .moves img.selected {
                    transform: scale(1.2);
                }

                .moves img.unselected {
                    opacity: 0.5;
                }

                @media (min-width: 768px) {
                    h1 { font-size: 48px; }
                    .moves img { width: 150px; height: 150px; }
                }

                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                    100% { transform: scale(1); }
                }
            `,e.appendChild(o)}}async updateUI(){let e=sb.getState(),t=e.currentGame?.roomId;t&&sp(sl(sm(),`games/${t}`),e=>{let t=e.val();if(t){if(t.gameOver){let e=t.result,n=this.shadow?.querySelector("#tu-jugada"),i=this.shadow?.querySelector("#jugada-oponente"),r=this.shadow?.querySelector("#resultado");n&&(n.textContent=1===this.playerNumber?t.player1Move:t.player2Move),i&&(i.textContent=1===this.playerNumber?t.player2Move:t.player1Move),r&&(0===e?r.textContent="Empate":this.playerNumber===e?r.textContent="Ganaste":r.textContent="Perdiste")}else{let e=this.shadow?.querySelector("#tu-jugada"),n=this.shadow?.querySelector("#jugada-oponente");e&&(e.textContent=1===this.playerNumber?t.player1Move||"":t.player2Move||""),n&&(n.textContent=1===this.playerNumber?t.player2Move||"":t.player1Move||"")}}else console.error("No se encontraron datos de la partida.")},e=>{console.error("Error al obtener datos de la partida:",e)})}determineWinner(e,t){return e===t?0:"piedra"===e&&"tijera"===t||"papel"===e&&"piedra"===t||"tijera"===e&&"papel"===t?1:2}checkAndHideMoves(e){e&&(e.style.display="none")}animateMoves(e){let t=sb.getState().currentGame;if(t){let n=1===this.playerNumber?t.data.player2Move:t.data.player1Move;if(n){let t=this.shadow?.querySelector(`#${e} img`),i=this.shadow?.querySelector(`#${n} img`);if(t&&i){t.style.position="absolute",i.style.position="absolute";let e=t.getBoundingClientRect(),n=i.getBoundingClientRect();t.style.left=`${e.left}px`,t.style.top=`${e.top}px`,i.style.left=`${n.left}px`,i.style.top=`${n.top}px`;let r=this.shadow?.querySelector(".play-container")?.getBoundingClientRect();if(r){let s=r.left+r.width/2,o=r.top+r.height/2;t.style.transition="transform 0.5s ease-in-out",i.style.transition="transform 0.5s ease-in-out",requestAnimationFrame(()=>{t.style.transform=`translate(${s-e.left-e.width/2}px, ${o-e.top-e.height/2}px)`,i.style.transform=`translate(${s-n.left-n.width/2}px, ${o-n.top-n.height/2}px)`}),setTimeout(()=>{t.style.transition="none",i.style.transition="none",t.style.position="static",i.style.position="static",t.style.transform="none",i.style.transform="none"},500)}}}}}redirectToResultPage(){let e=sb.getState();if(e.currentGame&&e.currentGame.data){let t=e.currentGame.data;t.player1Move&&t.player2Move&&(window.location.href="/result")}}}customElements.define("play-page",sS);var sk={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};const sx=new Uint8Array(16),sN=[];for(let e=0;e<256;++e)sN.push((e+256).toString(16).slice(1));var sP=function(e,t,n){if(sk.randomUUID&&!t&&!e)return sk.randomUUID();let i=(e=e||{}).random??e.rng?.()??function(){if(!d){if("undefined"==typeof crypto||!crypto.getRandomValues)throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");d=crypto.getRandomValues.bind(crypto)}return d(sx)}();if(i.length<16)throw Error("Random bytes length must be >= 16");if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){if((n=n||0)<0||n+16>t.length)throw RangeError(`UUID byte range ${n}:${n+15} is out of buffer bounds`);for(let e=0;e<16;++e)t[n+e]=i[e];return t}return function(e,t=0){return(sN[e[t+0]]+sN[e[t+1]]+sN[e[t+2]]+sN[e[t+3]]+"-"+sN[e[t+4]]+sN[e[t+5]]+"-"+sN[e[t+6]]+sN[e[t+7]]+"-"+sN[e[t+8]]+sN[e[t+9]]+"-"+sN[e[t+10]]+sN[e[t+11]]+sN[e[t+12]]+sN[e[t+13]]+sN[e[t+14]]+sN[e[t+15]]).toLowerCase()}(i)};class sR extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){this.innerHTML=`
      <div class="welcome-container">
        <h1>Ingresa tu Nombre</h1>
        <input type="text" id="nombreInput" placeholder="Tu nombre">
        <input type="hidden" id="ownerIdInput" value="${sP()}">
        <button id="comenzarButton">Comenzar</button>
      </div>
    `;let e=this.querySelector("#nombreInput"),t=this.querySelector("#ownerIdInput"),n=this.querySelector("#comenzarButton");n&&e&&t&&n.addEventListener("click",async()=>{let n=e.value.trim(),i=t.value;if(n)try{sb.setId(i),sb.setPlayer1Name(n);let e=await sb.saveRoomData(i,n);e?(sb.setRoomId(e),setTimeout(()=>{sb.listenRoom(),sF.goTo(`/short-id/${e}`)},100)):alert("Error al crear la sala. Inténtalo de nuevo.")}catch(e){console.error("Error al crear la sala:",e)}});let i=document.createElement("style");i.textContent=`
      .welcome-container {
        background-image: url(${_(k)});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: sans-serif;
      }
      input {
        padding: 10px;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 80%;
        max-width: 300px;
      }
      button {
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        width: 80%;
        max-width: 200px;
      }
      @media (max-width: 600px) {
        h1 {
          font-size: 1.5em;
        }
        input, button {
          width: 90%;
        }
      }
    `,this.appendChild(i)}}customElements.define("tu-nombre",sR);class sD extends HTMLElement{constructor(){super(),this.render()}render(){let e=sb.getState().currentGame;if(!e||!e.data){this.innerHTML=`
                <div class="result-container">
                    <h1>Error: No se encontr\xf3 la informaci\xf3n del juego.</h1>
                </div>
            `;return}let t=e.data.player1Move,n=e.data.player2Move,i=e.data.player1Name,r=e.data.player2Name,s="";if(t&&n&&e.statistics){let t=e.statistics;s=t.player1.wins>t.player2.wins?`${i} gana!`:t.player2.wins>t.player1.wins?`${r} gana!`:"¡Empate!"}else s="Esperando movimientos...";this.innerHTML=`
            <div class="result-container">
                <h1>Resultado</h1>
                <p>${i}: ${t||"Esperando..."}</p>
                <p>${r}: ${n||"Esperando..."}</p>
                <h2>${s}</h2>
                ${e.statistics?`
                    <p>Estad\xedsticas:</p>
                    <p>${i}: Victorias ${e.statistics.player1.wins}, Derrotas ${e.statistics.player1.losses}, Empates ${e.statistics.player1.draws}</p>
                    <p>${r}: Victorias ${e.statistics.player2.wins}, Derrotas ${e.statistics.player2.losses}, Empates ${e.statistics.player2.draws}</p>
                `:""}
                <button class="restart-button">Volver a jugar</button>
            </div>
        `;let o=this.querySelector(".restart-button");o&&o.addEventListener("click",()=>{window.goTo("/play")});let a=document.createElement("style");a.textContent=`
            .result-container {
                background-image: url(${_(k)});
                background-size: cover;
                height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 20px;
                text-align: center;
                color: white; /* Ajusta el color del texto para que sea legible sobre la imagen */
            }

            .restart-button {
                padding: 10px 20px;
                font-size: 16px;
                cursor: pointer;
            }
        `,this.appendChild(a)}}customElements.define("result-page",sD);class sA extends HTMLElement{constructor(){super(),this.render()}render(){this.innerHTML=`
      <div class="welcome-container">
        <div class="title-container">
          <h1>Piedra</h1>
          <h1>Papel</h1>
          <h1>Tijera</h1>
        </div>
        <button class="new-game-button">Nuevo Juego</button>
        <button class="join-room-button">Ingresar a una Sala</button>
      </div>
    `;let e=document.createElement("style");e.textContent=`
      .welcome-container {
        background-image: url(${_(k)});
        background-size: cover;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: sans-serif;
      }

      .title-container {
        width: 308px;
        height: 219px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      h1 {
        color: #009048;
        margin: 0;
        font-size: 3em;
      }

      .new-game-button, .join-room-button {
        width: 322px;
        height: 87px;
        background-color: #2979FF;
        color: white;
        border: 5px solid #1976D2;
        border-radius: 5px;
        font-size: 1.5em;
        margin: 10px 0;
        cursor: pointer;
      }

      .new-game-button:hover, .join-room-button:hover {
        background-color: #1E60C7;
      }
    `,this.appendChild(e),this.addEventListeners()}addEventListeners(){let e=this.querySelector(".new-game-button"),t=this.querySelector(".join-room-button");e&&e.addEventListener("click",()=>{sF.goTo("/tu-nombre")}),t&&t.addEventListener("click",()=>{sF.goTo("/ingresar-a-sala")})}}customElements.define("welcome-page",sA);class sM extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){let e=document.createElement("style");e.textContent=`
            .join-room-container {
                background-image: url(${_(k)});
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                // ... otros estilos
            }
            // ... otros estilos CSS
        `,this.shadow.appendChild(e);let t=document.createElement("div");t.classList.add("join-room-container");let n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("placeholder","Código de Sala"),n.id="roomIdInput";let i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("placeholder","Tu nombre"),i.id="nombreInput";let r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("placeholder","Tu id"),r.id="guestIdInput";let s=document.createElement("button");s.textContent="Unirse a Sala",s.id="unirseButton",t.appendChild(n),t.appendChild(i),t.appendChild(r),t.appendChild(s),this.shadow.appendChild(t);let o=this.shadow.getElementById("unirseButton");o&&o.addEventListener("click",async()=>{let e=i.value,t=r.value,s=n.value;sb.setPlayer2Name(e,t),sb.setRoomId(s),await sb.saveRoomData(null,null,t,e),setTimeout(()=>{sb.listenRoomChanges(),sF.goTo(`/short-id/${s}`)},100)})}}customElements.define("ingresar-a-sala",sM);const sO=[{pathRegex:/^\/$/,render:()=>new sA},{pathRegex:/^\/instructions$/,render:()=>new sw},{pathRegex:/^\/play$/,render:()=>new sS},{pathRegex:/^\/result$/,render:()=>new sD},{pathRegex:/^\/tu-nombre$/,render:()=>new sR},{pathRegex:/^\/short-id\/(?<roomId>[a-zA-Z0-9]+)$/,render:e=>(e?.roomId,new sC)},{pathRegex:/^\/ingresar-a-sala$/,render:()=>new sM}];function sL(e){let t=sO.find(t=>t.pathRegex.test(e));if(t){let n=document.getElementById("app");if(n){n.innerHTML="";let i=e.match(t.pathRegex),r=i?.groups||{},s=t.render(r);s instanceof Promise?s.then(e=>{n.appendChild(e)}).catch(e=>{console.error("Error al renderizar la ruta:",e)}):n.appendChild(s)}else console.warn("Elemento #app no encontrado.")}else console.warn(`Ruta no encontrada: ${e}`)}const sF={goTo:async e=>{window.history.pushState({},"",e),await sL(e)}};!function(){let e=function(){let e=window.location.pathname,t="/PPT-FRONTEND";return e.startsWith(t)?e.replace(t,"")||"/":e}();console.log("Ruta inicial:",e),sL(e)}();
//# sourceMappingURL=index.29a99a9b.js.map
