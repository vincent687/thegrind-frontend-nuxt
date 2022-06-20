import { v as vue_cjs_prod, s as serverRenderer, r as require$$0$1 } from './index.mjs';
import Mock from 'mockjs';
import * as Vant from 'vant';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday.js';
import weekOfYear from 'dayjs/plugin/weekOfYear.js';
import require$$1 from 'http';
import require$$2 from 'https';
import require$$0$2 from 'url';
import stream__default from 'stream';
import require$$4 from 'assert';
import require$$8 from 'zlib';
import 'unenv/runtime/mock/proxy';

var t=Object.assign;var i=vue_cjs_prod.defineComponent({name:"VueHorizontal",data:()=>({left:0,width:0,scrollWidth:0,hasPrev:!1,hasNext:!1,debounceId:void 0}),props:{button:{type:Boolean,default:()=>!0},buttonBetween:{type:Boolean,default:()=>!0},scroll:{type:Boolean,default:()=>!1},displacement:{type:Number,default:()=>1},snap:{type:String,default:()=>"start"}},mounted(){this.onScrollDebounce();},beforeDestroy(){clearTimeout(this.debounceId);},methods:{children(){return this.$refs.container.children},findPrevSlot(t){const e=this.children();for(let o=0;o<e.length;o++){const l=e[o].getBoundingClientRect();if(l.left<=t&&t<=l.right)return e[o];if(t<=l.left)return e[o]}},findNextSlot(t){const e=this.children();for(let o=0;o<e.length;o++){const l=e[o].getBoundingClientRect();if(!(l.right<=t)){if(l.left<=t)return e[o];if(t<=l.left)return e[o]}}},prev(t){t.stopPropagation(),this.$emit("prev");const e=this.$refs.container,o=e.getBoundingClientRect().left,l=o+e.clientWidth*-this.displacement-2.5,n=this.findPrevSlot(l);if(n){const t=n.getBoundingClientRect().left-o;return void this.scrollToLeft(e.scrollLeft+t)}const i=e.clientWidth*this.displacement;this.scrollToLeft(e.scrollLeft-i);},next(t){t.stopPropagation(),this.$emit("next");const e=this.$refs.container,o=e.getBoundingClientRect().left,l=o+e.clientWidth*this.displacement+2.5,n=this.findNextSlot(l);if(n){const t=n.getBoundingClientRect().left-o;if(t>2.5)return void this.scrollToLeft(e.scrollLeft+t)}const i=e.clientWidth*this.displacement;this.scrollToLeft(e.scrollLeft+i);},scrollToIndex(t){const e=this.children();if(e[t]){const o=this.$refs.container,l=e[t].getBoundingClientRect().left-o.getBoundingClientRect().left;this.scrollToLeft(o.scrollLeft+l);}},scrollToLeft(t,e="smooth"){this.$refs.container.scrollTo({left:t,behavior:e});},onScroll(){const t=this.$refs.container;t&&(this.$emit("scroll",{left:t.scrollLeft}),clearTimeout(this.debounceId),this.debounceId=setTimeout(this.onScrollDebounce,100));},onScrollDebounce(){return this.refresh((t=>{this.$emit("scroll-debounce",t);}))},refresh(t){return vue_cjs_prod.nextTick((()=>{const e=this.calculate();this.left=e.left,this.width=e.width,this.scrollWidth=e.scrollWidth,this.hasNext=e.hasNext,this.hasPrev=e.hasPrev,null==t||t(e);}))},calculate(){const t=this.$refs.container,e=this.children()[0];return {left:t.scrollLeft,width:t.clientWidth,scrollWidth:t.scrollWidth,hasNext:t.scrollWidth>t.scrollLeft+t.clientWidth+2.5,hasPrev:function(){var o,l;if(0===t.scrollLeft)return !1;const n=t.getBoundingClientRect().left,i=null!=(l=null==(o=null==e?void 0:e.getBoundingClientRect())?void 0:o.left)?l:0;return Math.abs(n-i)>=2.5}()}}},render(){const e=t=>{const e=vue_cjs_prod.h("path",{d:"m9.8 12 5 5a1 1 0 1 1-1.4 1.4l-5.7-5.7a1 1 0 0 1 0-1.4l5.7-5.7a1 1 0 0 1 1.4 1.4l-5 5z"}),o=vue_cjs_prod.h("path",{d:"m14.3 12.1-5-5a1 1 0 0 1 1.4-1.4l5.7 5.7a1 1 0 0 1 0 1.4l-5.7 5.7a1 1 0 0 1-1.4-1.4l5-5z"});return vue_cjs_prod.h("svg",{class:"v-hl-svg",viewBox:"0 0 24 24","aria-label":`horizontal scroll area button for navigation to ${"prev"===t?"previous":"next"} section`,style:{width:"40px",height:"40px",margin:"6px",padding:"6px","border-radius":"20px","box-sizing":"border-box",background:"white",color:"black",fill:"currentColor","box-shadow":"0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"}},["prev"===t?e:o])},o=o=>this.button&&("prev"!==o||this.hasPrev)&&("next"!==o||this.hasNext)?vue_cjs_prod.h("div",{key:"prev"===o?0:1,class:`v-hl-btn v-hl-btn-${o}`,onClick:"prev"===o?this.prev:this.next,role:"button",style:t(t(t({},"prev"===o?{left:0,transform:this.buttonBetween?"translateX(-50%)":"none"}:{right:0,transform:this.buttonBetween?"translateX(50%)":"none"}),{cursor:"pointer",position:"absolute",top:0,bottom:0,display:"flex","align-self":"center","z-index":1,"align-items":"center"}),this.scroll?{}:{"overflow-x":"scroll","scrollbar-width":"none","-ms-overflow-style":"none","padding-bottom":"30px","margin-bottom":"-30px","clip-path":"inset(0 0 30px 0)"})},["prev"===o?this.$slots["btn-prev"]?this.$slots["btn-prev"]():e("prev"):this.$slots["btn-next"]?this.$slots["btn-next"]():e("next")]):vue_cjs_prod.createCommentVNode("",!0);return vue_cjs_prod.h("div",{class:"vue-horizontal",style:{position:"relative",display:"flex"}},[o("prev"),o("next"),vue_cjs_prod.h("div",{class:"v-hl-container",ref:"container",onScrollPassive:this.onScroll,style:t({display:"flex",width:"100%",margin:0,padding:0,border:"none","box-sizing":"content-box","overflow-x":"scroll","overflow-y":"hidden","scroll-snap-type":"x mandatory","-webkit-overflow-scrolling":"touch"},this.scroll?{}:{"scrollbar-width":"none","-ms-overflow-style":"none","padding-bottom":"30px","margin-bottom":"-30px","clip-path":"inset(0 0 30px 0)"})},(()=>{if(!this.$slots.default)return [];const t=t=>{t.props=t.props||{},t.props.style=t.props.style||{},t.props.style={"flex-shrink":0,"box-sizing":"border-box","min-height":"1px","scroll-snap-align":this.snap};},e=this.$slots.default();return e.forEach((e=>{if(e.el)return t(e);e.children&&Array.isArray(e.children)&&e.children.forEach((e=>{t(e);}));})),e})())])}});const VueHorizontal = i;

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name2 = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name2);
    } else if (typeof subHook === "function") {
      hooks[name2] = subHook;
    }
  }
  return hooks;
}
function serial(tasks, fn) {
  return tasks.reduce((promise, task) => promise.then(() => fn(task)), Promise.resolve(null));
}
class Hookable {
  constructor() {
    this._hooks = {};
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
  }
  hook(name2, fn) {
    if (!name2 || typeof fn !== "function") {
      return () => {
      };
    }
    const originalName = name2;
    let deprecatedHookObj;
    while (this._deprecatedHooks[name2]) {
      const deprecatedHook = this._deprecatedHooks[name2];
      if (typeof deprecatedHook === "string") {
        deprecatedHookObj = { to: deprecatedHook };
      } else {
        deprecatedHookObj = deprecatedHook;
      }
      name2 = deprecatedHookObj.to;
    }
    if (deprecatedHookObj) {
      if (!deprecatedHookObj.message) {
        console.warn(`${originalName} hook has been deprecated` + (deprecatedHookObj.to ? `, please use ${deprecatedHookObj.to}` : ""));
      } else {
        console.warn(deprecatedHookObj.message);
      }
    }
    this._hooks[name2] = this._hooks[name2] || [];
    this._hooks[name2].push(fn);
    return () => {
      if (fn) {
        this.removeHook(name2, fn);
        fn = null;
      }
    };
  }
  hookOnce(name2, fn) {
    let _unreg;
    let _fn = (...args) => {
      _unreg();
      _unreg = null;
      _fn = null;
      return fn(...args);
    };
    _unreg = this.hook(name2, _fn);
    return _unreg;
  }
  removeHook(name2, fn) {
    if (this._hooks[name2]) {
      const idx = this._hooks[name2].indexOf(fn);
      if (idx !== -1) {
        this._hooks[name2].splice(idx, 1);
      }
      if (this._hooks[name2].length === 0) {
        delete this._hooks[name2];
      }
    }
  }
  deprecateHook(name2, deprecated) {
    this._deprecatedHooks[name2] = deprecated;
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map((key) => this.hook(key, hooks[key]));
    return () => {
      removeFns.splice(0, removeFns.length).forEach((unreg) => unreg());
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  callHook(name2, ...args) {
    if (!this._hooks[name2]) {
      return;
    }
    return serial(this._hooks[name2], (fn) => fn(...args));
  }
}
function createHooks() {
  return new Hookable();
}
function createMock(name2, overrides = {}) {
  const fn = function() {
  };
  fn.prototype.name = name2;
  const props = {};
  return new Proxy(fn, {
    get(_target, prop) {
      if (prop === "caller") {
        return null;
      }
      if (prop === "__createMock__") {
        return createMock;
      }
      if (prop in overrides) {
        return overrides[prop];
      }
      return props[prop] = props[prop] || createMock(`${name2}.${prop.toString()}`);
    },
    apply(_target, _this, _args) {
      return createMock(`${name2}()`);
    },
    construct(_target, _args, _newT) {
      return createMock(`[${name2}]`);
    },
    enumerate(_target) {
      return [];
    }
  });
}
const mockContext = createMock("mock");
function mock(warning) {
  console.warn(warning);
  return mockContext;
}
const unsupported = new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: false,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
};
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  const nuxtApp = __spreadValues({
    provide: void 0,
    globalName: "nuxt",
    payload: vue_cjs_prod.reactive(__spreadValues({
      data: {},
      state: {}
    }, { serverRendered: true })),
    isHydrating: false,
    _asyncDataPromises: {}
  }, options);
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name2, value) => {
    const $name = "$" + name2;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  {
    nuxtApp.provide("config", options.ssrContext.runtimeConfig.private);
    nuxtApp.payload.config = options.ssrContext.runtimeConfig.public;
  }
  return nuxtApp;
}
function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  return callWithNuxt(nuxtApp, () => plugin(nuxtApp));
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin of plugins2) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins2) {
  let needsLegacyContext = false;
  const plugins2 = _plugins2.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins2.unshift(legacyPlugin);
  }
  return plugins2;
}
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
let currentNuxtAppInstance;
const setNuxtAppInstance = (nuxt) => {
  currentNuxtAppInstance = nuxt;
};
async function callWithNuxt(nuxt, setup2) {
  setNuxtAppInstance(nuxt);
  const p = setup2();
  setNuxtAppInstance(null);
  await p;
}
function useNuxtApp() {
  const vm = vue_cjs_prod.getCurrentInstance();
  if (!vm) {
    if (!currentNuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return currentNuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var reactivity_cjs_prod = {};
var shared_cjs_prod = {};
Object.defineProperty(shared_cjs_prod, "__esModule", { value: true });
function makeMap(str, expectsLowerCase) {
  const map = Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
const PatchFlagNames = {
  [1]: `TEXT`,
  [2]: `CLASS`,
  [4]: `STYLE`,
  [8]: `PROPS`,
  [16]: `FULL_PROPS`,
  [32]: `HYDRATE_EVENTS`,
  [64]: `STABLE_FRAGMENT`,
  [128]: `KEYED_FRAGMENT`,
  [256]: `UNKEYED_FRAGMENT`,
  [512]: `NEED_PATCH`,
  [1024]: `DYNAMIC_SLOTS`,
  [2048]: `DEV_ROOT_FRAGMENT`,
  [-1]: `HOISTED`,
  [-2]: `BAIL`
};
const slotFlagsText = {
  [1]: "STABLE",
  [2]: "DYNAMIC",
  [3]: "FORWARDED"
};
const GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
const isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);
const range = 2;
function generateCodeFrame(source2, start = 0, end = source2.length) {
  let lines = source2.split(/(\r?\n)/);
  const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
  lines = lines.filter((_, idx) => idx % 2 === 0);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
    if (count >= start) {
      for (let j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length)
          continue;
        const line = j + 1;
        res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
        const lineLength = lines[j].length;
        const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
        if (j === i) {
          const pad = start - (count - (lineLength + newLineSeqLength));
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length));
          }
          count += lineLength + newLineSeqLength;
        }
      }
      break;
    }
  }
  return res.join("\n");
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
const isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name2) {
  if (attrValidationCache.hasOwnProperty(name2)) {
    return attrValidationCache[name2];
  }
  const isUnsafe = unsafeAttrCharRE.test(name2);
  if (isUnsafe) {
    console.error(`unsafe attribute name: ${name2}`);
  }
  return attrValidationCache[name2] = !isUnsafe;
}
const propsToAttrMap = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
const isNoUnitNumericStyleProp = /* @__PURE__ */ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width`);
const isKnownHtmlAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
const isKnownSvgAttr = /* @__PURE__ */ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
function normalizeStyle(value) {
  if (isArray$2(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString$2(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString$2(value)) {
    return value;
  } else if (isObject$2(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function stringifyStyle(styles) {
  let ret = "";
  if (!styles || isString$2(styles)) {
    return ret;
  }
  for (const key in styles) {
    const value = styles[key];
    const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
    if (isString$2(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
      ret += `${normalizedKey}:${value};`;
    }
  }
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString$2(value)) {
    res = value;
  } else if (isArray$2(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$2(value)) {
    for (const name2 in value) {
      if (value[name2]) {
        res += name2 + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props)
    return null;
  let { class: klass, style } = props;
  if (klass && !isString$2(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style) {
    props.style = normalizeStyle(style);
  }
  return props;
}
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
const escapeRE = /["'&<>]/;
function escapeHtml$1(string) {
  const str = "" + string;
  const match = escapeRE.exec(str);
  if (!match) {
    return str;
  }
  let html = "";
  let escaped;
  let index2;
  let lastIndex = 0;
  for (index2 = match.index; index2 < str.length; index2++) {
    switch (str.charCodeAt(index2)) {
      case 34:
        escaped = "&quot;";
        break;
      case 38:
        escaped = "&amp;";
        break;
      case 39:
        escaped = "&#39;";
        break;
      case 60:
        escaped = "&lt;";
        break;
      case 62:
        escaped = "&gt;";
        break;
      default:
        continue;
    }
    if (lastIndex !== index2) {
      html += str.slice(lastIndex, index2);
    }
    lastIndex = index2 + 1;
    html += escaped;
  }
  return lastIndex !== index2 ? html + str.slice(lastIndex, index2) : html;
}
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
  return src.replace(commentStripRE, "");
}
function looseCompareArrays(a, b) {
  if (a.length !== b.length)
    return false;
  let equal = true;
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }
  return equal;
}
function looseEqual(a, b) {
  if (a === b)
    return true;
  let aValidType = isDate$2(a);
  let bValidType = isDate$2(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }
  aValidType = isArray$2(a);
  bValidType = isArray$2(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }
  aValidType = isObject$2(a);
  bValidType = isObject$2(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }
  return String(a) === String(b);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}
const toDisplayString$1 = (val) => {
  return val == null ? "" : isArray$2(val) || isObject$2(val) && (val.toString === objectToString$1 || !isFunction$2(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject$2(val) && !isArray$2(val) && !isPlainObject$2(val)) {
    return String(val);
  }
  return val;
};
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend$1 = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
const hasOwn$1 = (val, key) => hasOwnProperty$1.call(val, key);
const isArray$2 = Array.isArray;
const isMap = (val) => toTypeString$1(val) === "[object Map]";
const isSet = (val) => toTypeString$1(val) === "[object Set]";
const isDate$2 = (val) => val instanceof Date;
const isFunction$2 = (val) => typeof val === "function";
const isString$2 = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject$2 = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject$2(val) && isFunction$2(val.then) && isFunction$2(val.catch);
};
const objectToString$1 = Object.prototype.toString;
const toTypeString$1 = (value) => objectToString$1.call(value);
const toRawType = (value) => {
  return toTypeString$1(value).slice(8, -1);
};
const isPlainObject$2 = (val) => toTypeString$1(val) === "[object Object]";
const isIntegerKey = (key) => isString$2(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const cacheStringFunction = (fn) => {
  const cache2 = Object.create(null);
  return (str) => {
    const hit = cache2[str];
    return hit || (cache2[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const toNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
let _globalThis$1;
const getGlobalThis$1 = () => {
  return _globalThis$1 || (_globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : {});
};
shared_cjs_prod.EMPTY_ARR = EMPTY_ARR;
shared_cjs_prod.EMPTY_OBJ = EMPTY_OBJ;
shared_cjs_prod.NO = NO;
shared_cjs_prod.NOOP = NOOP;
shared_cjs_prod.PatchFlagNames = PatchFlagNames;
shared_cjs_prod.camelize = camelize;
shared_cjs_prod.capitalize = capitalize;
shared_cjs_prod.def = def;
shared_cjs_prod.escapeHtml = escapeHtml$1;
shared_cjs_prod.escapeHtmlComment = escapeHtmlComment;
shared_cjs_prod.extend = extend$1;
shared_cjs_prod.generateCodeFrame = generateCodeFrame;
shared_cjs_prod.getGlobalThis = getGlobalThis$1;
shared_cjs_prod.hasChanged = hasChanged;
shared_cjs_prod.hasOwn = hasOwn$1;
shared_cjs_prod.hyphenate = hyphenate;
shared_cjs_prod.includeBooleanAttr = includeBooleanAttr;
shared_cjs_prod.invokeArrayFns = invokeArrayFns;
shared_cjs_prod.isArray = isArray$2;
shared_cjs_prod.isBooleanAttr = isBooleanAttr;
shared_cjs_prod.isDate = isDate$2;
var isFunction_1 = shared_cjs_prod.isFunction = isFunction$2;
shared_cjs_prod.isGloballyWhitelisted = isGloballyWhitelisted;
shared_cjs_prod.isHTMLTag = isHTMLTag;
shared_cjs_prod.isIntegerKey = isIntegerKey;
shared_cjs_prod.isKnownHtmlAttr = isKnownHtmlAttr;
shared_cjs_prod.isKnownSvgAttr = isKnownSvgAttr;
shared_cjs_prod.isMap = isMap;
shared_cjs_prod.isModelListener = isModelListener;
shared_cjs_prod.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp;
shared_cjs_prod.isObject = isObject$2;
shared_cjs_prod.isOn = isOn;
shared_cjs_prod.isPlainObject = isPlainObject$2;
shared_cjs_prod.isPromise = isPromise;
shared_cjs_prod.isReservedProp = isReservedProp;
shared_cjs_prod.isSSRSafeAttrName = isSSRSafeAttrName;
shared_cjs_prod.isSVGTag = isSVGTag;
shared_cjs_prod.isSet = isSet;
shared_cjs_prod.isSpecialBooleanAttr = isSpecialBooleanAttr;
shared_cjs_prod.isString = isString$2;
shared_cjs_prod.isSymbol = isSymbol;
shared_cjs_prod.isVoidTag = isVoidTag;
shared_cjs_prod.looseEqual = looseEqual;
shared_cjs_prod.looseIndexOf = looseIndexOf;
shared_cjs_prod.makeMap = makeMap;
shared_cjs_prod.normalizeClass = normalizeClass;
shared_cjs_prod.normalizeProps = normalizeProps;
shared_cjs_prod.normalizeStyle = normalizeStyle;
shared_cjs_prod.objectToString = objectToString$1;
shared_cjs_prod.parseStringStyle = parseStringStyle;
shared_cjs_prod.propsToAttrMap = propsToAttrMap;
shared_cjs_prod.remove = remove;
shared_cjs_prod.slotFlagsText = slotFlagsText;
shared_cjs_prod.stringifyStyle = stringifyStyle;
shared_cjs_prod.toDisplayString = toDisplayString$1;
shared_cjs_prod.toHandlerKey = toHandlerKey;
shared_cjs_prod.toNumber = toNumber;
shared_cjs_prod.toRawType = toRawType;
shared_cjs_prod.toTypeString = toTypeString$1;
Object.defineProperty(reactivity_cjs_prod, "__esModule", { value: true });
var shared = shared_cjs_prod;
let activeEffectScope;
const effectScopeStack = [];
class EffectScope {
  constructor(detached = false) {
    this.active = true;
    this.effects = [];
    this.cleanups = [];
    if (!detached && activeEffectScope) {
      this.parent = activeEffectScope;
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
  }
  run(fn) {
    if (this.active) {
      try {
        this.on();
        return fn();
      } finally {
        this.off();
      }
    }
  }
  on() {
    if (this.active) {
      effectScopeStack.push(this);
      activeEffectScope = this;
    }
  }
  off() {
    if (this.active) {
      effectScopeStack.pop();
      activeEffectScope = effectScopeStack[effectScopeStack.length - 1];
    }
  }
  stop(fromParent) {
    if (this.active) {
      this.effects.forEach((e) => e.stop());
      this.cleanups.forEach((cleanup) => cleanup());
      if (this.scopes) {
        this.scopes.forEach((e) => e.stop(true));
      }
      if (this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.active = false;
    }
  }
}
function effectScope(detached) {
  return new EffectScope(detached);
}
function recordEffectScope(effect2, scope) {
  scope = scope || activeEffectScope;
  if (scope && scope.active) {
    scope.effects.push(effect2);
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  }
}
const createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].w |= trackOpBit;
    }
  }
};
const finalizeDepMarkers = (effect2) => {
  const { deps } = effect2;
  if (deps.length) {
    let ptr = 0;
    for (let i = 0; i < deps.length; i++) {
      const dep = deps[i];
      if (wasTracked(dep) && !newTracked(dep)) {
        dep.delete(effect2);
      } else {
        deps[ptr++] = dep;
      }
      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }
    deps.length = ptr;
  }
};
const targetMap = new WeakMap();
let effectTrackDepth = 0;
let trackOpBit = 1;
const maxMarkerBits = 30;
const effectStack = [];
let activeEffect;
const ITERATE_KEY = Symbol("");
const MAP_KEY_ITERATE_KEY = Symbol("");
class ReactiveEffect {
  constructor(fn, scheduler2 = null, scope) {
    this.fn = fn;
    this.scheduler = scheduler2;
    this.active = true;
    this.deps = [];
    recordEffectScope(this, scope);
  }
  run() {
    if (!this.active) {
      return this.fn();
    }
    if (!effectStack.includes(this)) {
      try {
        effectStack.push(activeEffect = this);
        enableTracking();
        trackOpBit = 1 << ++effectTrackDepth;
        if (effectTrackDepth <= maxMarkerBits) {
          initDepMarkers(this);
        } else {
          cleanupEffect(this);
        }
        return this.fn();
      } finally {
        if (effectTrackDepth <= maxMarkerBits) {
          finalizeDepMarkers(this);
        }
        trackOpBit = 1 << --effectTrackDepth;
        resetTracking();
        effectStack.pop();
        const n = effectStack.length;
        activeEffect = n > 0 ? effectStack[n - 1] : void 0;
      }
    }
  }
  stop() {
    if (this.active) {
      cleanupEffect(this);
      if (this.onStop) {
        this.onStop();
      }
      this.active = false;
    }
  }
}
function cleanupEffect(effect2) {
  const { deps } = effect2;
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect2);
    }
    deps.length = 0;
  }
}
function effect(fn, options) {
  if (fn.effect) {
    fn = fn.effect.fn;
  }
  const _effect = new ReactiveEffect(fn);
  if (options) {
    shared.extend(_effect, options);
    if (options.scope)
      recordEffectScope(_effect, options.scope);
  }
  if (!options || !options.lazy) {
    _effect.run();
  }
  const runner = _effect.run.bind(_effect);
  runner.effect = _effect;
  return runner;
}
function stop(runner) {
  runner.effect.stop();
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function enableTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = true;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
  if (!isTracking()) {
    return;
  }
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, depsMap = new Map());
  }
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, dep = createDep());
  }
  trackEffects(dep);
}
function isTracking() {
  return shouldTrack && activeEffect !== void 0;
}
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  } else {
    shouldTrack2 = !dep.has(activeEffect);
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && shared.isArray(target)) {
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newValue) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!shared.isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (shared.isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (shared.isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!shared.isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (shared.isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (shared.isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  if (deps.length === 1) {
    if (deps[0]) {
      {
        triggerEffects(deps[0]);
      }
    }
  } else {
    const effects = [];
    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }
    {
      triggerEffects(createDep(effects));
    }
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  for (const effect2 of shared.isArray(dep) ? dep : [...dep]) {
    if (effect2 !== activeEffect || effect2.allowRecurse) {
      if (effect2.scheduler) {
        effect2.scheduler();
      } else {
        effect2.run();
      }
    }
  }
}
const isNonTrackableKeys = /* @__PURE__ */ shared.makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(shared.isSymbol));
const get = /* @__PURE__ */ createGetter();
const shallowGet = /* @__PURE__ */ createGetter(false, true);
const readonlyGet = /* @__PURE__ */ createGetter(true);
const shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function createGetter(isReadonly2 = false, shallow = false) {
  return function get2(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = shared.isArray(target);
    if (!isReadonly2 && targetIsArray && shared.hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }
    const res = Reflect.get(target, key, receiver);
    if (shared.isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      const shouldUnwrap = !targetIsArray || !shared.isIntegerKey(key);
      return shouldUnwrap ? res.value : res;
    }
    if (shared.isObject(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  };
}
const set = /* @__PURE__ */ createSetter();
const shallowSet = /* @__PURE__ */ createSetter(true);
function createSetter(shallow = false) {
  return function set2(target, key, value, receiver) {
    let oldValue = target[key];
    if (!shallow) {
      value = toRaw(value);
      oldValue = toRaw(oldValue);
      if (!shared.isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = shared.isArray(target) && shared.isIntegerKey(key) ? Number(key) < target.length : shared.hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (shared.hasChanged(value, oldValue)) {
        trigger(target, "set", key, value);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = shared.hasOwn(target, key);
  target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, void 0);
  }
  return result;
}
function has(target, key) {
  const result = Reflect.has(target, key);
  if (!shared.isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate", shared.isArray(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
const mutableHandlers = {
  get,
  set,
  deleteProperty,
  has,
  ownKeys
};
const readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    return true;
  },
  deleteProperty(target, key) {
    return true;
  }
};
const shallowReactiveHandlers = /* @__PURE__ */ shared.extend({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
});
const shallowReadonlyHandlers = /* @__PURE__ */ shared.extend({}, readonlyHandlers, {
  get: shallowReadonlyGet
});
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly2 = false, isShallow = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly2 && track(rawTarget, "get", key);
  }
  !isReadonly2 && track(rawTarget, "get", rawKey);
  const { has: has2 } = getProto(rawTarget);
  const wrap2 = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap2(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap2(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has$1(key, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly2 && track(rawTarget, "has", key);
  }
  !isReadonly2 && track(rawTarget, "has", rawKey);
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set$1(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  const oldValue = get2.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (shared.hasChanged(value, oldValue)) {
    trigger(target, "set", key, value);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0);
  }
  return result;
}
function createForEach(isReadonly2, isShallow) {
  return function forEach3(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap2 = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap2(value), wrap2(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = shared.isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap2 = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap2(value[0]), wrap2(value[1])] : wrap2(value),
          done
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(shared.hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
const reactiveMap = new WeakMap();
const shallowReactiveMap = new WeakMap();
const readonlyMap = new WeakMap();
const shallowReadonlyMap = new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(shared.toRawType(value));
}
function reactive(target) {
  if (target && target["__v_isReadonly"]) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function shallowReadonly(target) {
  return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!shared.isObject(target)) {
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  shared.def(value, "__v_skip", true);
  return value;
}
const toReactive = (value) => shared.isObject(value) ? reactive(value) : value;
const toReadonly = (value) => shared.isObject(value) ? readonly(value) : value;
function trackRefValue(ref2) {
  if (isTracking()) {
    ref2 = toRaw(ref2);
    if (!ref2.dep) {
      ref2.dep = createDep();
    }
    {
      trackEffects(ref2.dep);
    }
  }
}
function triggerRefValue(ref2, newVal) {
  ref2 = toRaw(ref2);
  if (ref2.dep) {
    {
      triggerEffects(ref2.dep);
    }
  }
}
function isRef(r) {
  return Boolean(r && r.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function shallowRef(value) {
  return createRef(value, true);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, _shallow) {
    this._shallow = _shallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = _shallow ? value : toRaw(value);
    this._value = _shallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    newVal = this._shallow ? newVal : toRaw(newVal);
    if (shared.hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = this._shallow ? newVal : toReactive(newVal);
      triggerRefValue(this);
    }
  }
}
function triggerRef(ref2) {
  triggerRefValue(ref2);
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
  constructor(factory) {
    this.dep = void 0;
    this.__v_isRef = true;
    const { get: get2, set: set2 } = factory(() => trackRefValue(this), () => triggerRefValue(this));
    this._get = get2;
    this._set = set2;
  }
  get value() {
    return this._get();
  }
  set value(newVal) {
    this._set(newVal);
  }
}
function customRef(factory) {
  return new CustomRefImpl(factory);
}
function toRefs(object) {
  const ret = shared.isArray(object) ? new Array(object.length) : {};
  for (const key in object) {
    ret[key] = toRef(object, key);
  }
  return ret;
}
class ObjectRefImpl {
  constructor(_object, _key) {
    this._object = _object;
    this._key = _key;
    this.__v_isRef = true;
  }
  get value() {
    return this._object[this._key];
  }
  set value(newVal) {
    this._object[this._key] = newVal;
  }
}
function toRef(object, key) {
  const val = object[key];
  return isRef(val) ? val : new ObjectRefImpl(object, key);
}
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2) {
    this._setter = _setter;
    this.dep = void 0;
    this._dirty = true;
    this.__v_isRef = true;
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        triggerRefValue(this);
      }
    });
    this["__v_isReadonly"] = isReadonly2;
  }
  get value() {
    const self2 = toRaw(this);
    trackRefValue(self2);
    if (self2._dirty) {
      self2._dirty = false;
      self2._value = self2.effect.run();
    }
    return self2._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
}
function computed(getterOrOptions, debugOptions) {
  let getter;
  let setter;
  const onlyGetter = shared.isFunction(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = shared.NOOP;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter);
  return cRef;
}
var _a;
const tick = Promise.resolve();
const queue = [];
let queued = false;
const scheduler = (fn) => {
  queue.push(fn);
  if (!queued) {
    queued = true;
    tick.then(flush);
  }
};
const flush = () => {
  for (let i = 0; i < queue.length; i++) {
    queue[i]();
  }
  queue.length = 0;
  queued = false;
};
class DeferredComputedRefImpl {
  constructor(getter) {
    this.dep = void 0;
    this._dirty = true;
    this.__v_isRef = true;
    this[_a] = true;
    let compareTarget;
    let hasCompareTarget = false;
    let scheduled = false;
    this.effect = new ReactiveEffect(getter, (computedTrigger) => {
      if (this.dep) {
        if (computedTrigger) {
          compareTarget = this._value;
          hasCompareTarget = true;
        } else if (!scheduled) {
          const valueToCompare = hasCompareTarget ? compareTarget : this._value;
          scheduled = true;
          hasCompareTarget = false;
          scheduler(() => {
            if (this.effect.active && this._get() !== valueToCompare) {
              triggerRefValue(this);
            }
            scheduled = false;
          });
        }
        for (const e of this.dep) {
          if (e.computed) {
            e.scheduler(true);
          }
        }
      }
      this._dirty = true;
    });
    this.effect.computed = true;
  }
  _get() {
    if (this._dirty) {
      this._dirty = false;
      return this._value = this.effect.run();
    }
    return this._value;
  }
  get value() {
    trackRefValue(this);
    return toRaw(this)._get();
  }
}
_a = "__v_isReadonly";
function deferredComputed(getter) {
  return new DeferredComputedRefImpl(getter);
}
reactivity_cjs_prod.EffectScope = EffectScope;
reactivity_cjs_prod.ITERATE_KEY = ITERATE_KEY;
reactivity_cjs_prod.ReactiveEffect = ReactiveEffect;
var computed_1 = reactivity_cjs_prod.computed = computed;
reactivity_cjs_prod.customRef = customRef;
reactivity_cjs_prod.deferredComputed = deferredComputed;
reactivity_cjs_prod.effect = effect;
reactivity_cjs_prod.effectScope = effectScope;
reactivity_cjs_prod.enableTracking = enableTracking;
reactivity_cjs_prod.getCurrentScope = getCurrentScope;
reactivity_cjs_prod.isProxy = isProxy;
reactivity_cjs_prod.isReactive = isReactive;
reactivity_cjs_prod.isReadonly = isReadonly;
reactivity_cjs_prod.isRef = isRef;
reactivity_cjs_prod.markRaw = markRaw;
reactivity_cjs_prod.onScopeDispose = onScopeDispose;
reactivity_cjs_prod.pauseTracking = pauseTracking;
reactivity_cjs_prod.proxyRefs = proxyRefs;
reactivity_cjs_prod.reactive = reactive;
reactivity_cjs_prod.readonly = readonly;
reactivity_cjs_prod.ref = ref;
reactivity_cjs_prod.resetTracking = resetTracking;
reactivity_cjs_prod.shallowReactive = shallowReactive;
reactivity_cjs_prod.shallowReadonly = shallowReadonly;
reactivity_cjs_prod.shallowRef = shallowRef;
reactivity_cjs_prod.stop = stop;
reactivity_cjs_prod.toRaw = toRaw;
reactivity_cjs_prod.toRef = toRef;
reactivity_cjs_prod.toRefs = toRefs;
reactivity_cjs_prod.track = track;
reactivity_cjs_prod.trigger = trigger;
reactivity_cjs_prod.triggerRef = triggerRef;
reactivity_cjs_prod.unref = unref;
var vueRouter_cjs_prod = {};
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var vue = require$$0$1;
  const hasSymbol2 = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
  const PolySymbol = (name2) => hasSymbol2 ? Symbol(name2) : "_vr_" + name2;
  const matchedRouteKey = /* @__PURE__ */ PolySymbol("rvlm");
  const viewDepthKey = /* @__PURE__ */ PolySymbol("rvd");
  const routerKey = /* @__PURE__ */ PolySymbol("r");
  const routeLocationKey = /* @__PURE__ */ PolySymbol("rl");
  const routerViewLocationKey = /* @__PURE__ */ PolySymbol("rvl");
  function isESModule(obj) {
    return obj.__esModule || hasSymbol2 && obj[Symbol.toStringTag] === "Module";
  }
  const assign2 = Object.assign;
  function applyToParams(fn, params) {
    const newParams = {};
    for (const key in params) {
      const value = params[key];
      newParams[key] = Array.isArray(value) ? value.map(fn) : fn(value);
    }
    return newParams;
  }
  const noop2 = () => {
  };
  const TRAILING_SLASH_RE2 = /\/$/;
  const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE2, "");
  function parseURL2(parseQuery3, location2, currentLocation = "/") {
    let path, query = {}, searchString = "", hash = "";
    const searchPos = location2.indexOf("?");
    const hashPos = location2.indexOf("#", searchPos > -1 ? searchPos : 0);
    if (searchPos > -1) {
      path = location2.slice(0, searchPos);
      searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
      query = parseQuery3(searchString);
    }
    if (hashPos > -1) {
      path = path || location2.slice(0, hashPos);
      hash = location2.slice(hashPos, location2.length);
    }
    path = resolveRelativePath(path != null ? path : location2, currentLocation);
    return {
      fullPath: path + (searchString && "?") + searchString + hash,
      path,
      query,
      hash
    };
  }
  function stringifyURL(stringifyQuery3, location2) {
    const query = location2.query ? stringifyQuery3(location2.query) : "";
    return location2.path + (query && "?") + query + (location2.hash || "");
  }
  function stripBase(pathname, base) {
    if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
      return pathname;
    return pathname.slice(base.length) || "/";
  }
  function isSameRouteLocation(stringifyQuery3, a, b) {
    const aLastIndex = a.matched.length - 1;
    const bLastIndex = b.matched.length - 1;
    return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery3(a.query) === stringifyQuery3(b.query) && a.hash === b.hash;
  }
  function isSameRouteRecord(a, b) {
    return (a.aliasOf || a) === (b.aliasOf || b);
  }
  function isSameRouteLocationParams(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length)
      return false;
    for (const key in a) {
      if (!isSameRouteLocationParamsValue(a[key], b[key]))
        return false;
    }
    return true;
  }
  function isSameRouteLocationParamsValue(a, b) {
    return Array.isArray(a) ? isEquivalentArray(a, b) : Array.isArray(b) ? isEquivalentArray(b, a) : a === b;
  }
  function isEquivalentArray(a, b) {
    return Array.isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
  }
  function resolveRelativePath(to, from) {
    if (to.startsWith("/"))
      return to;
    if (!to)
      return from;
    const fromSegments = from.split("/");
    const toSegments = to.split("/");
    let position = fromSegments.length - 1;
    let toPosition;
    let segment;
    for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
      segment = toSegments[toPosition];
      if (position === 1 || segment === ".")
        continue;
      if (segment === "..")
        position--;
      else
        break;
    }
    return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
  }
  var NavigationType;
  (function(NavigationType2) {
    NavigationType2["pop"] = "pop";
    NavigationType2["push"] = "push";
  })(NavigationType || (NavigationType = {}));
  var NavigationDirection;
  (function(NavigationDirection2) {
    NavigationDirection2["back"] = "back";
    NavigationDirection2["forward"] = "forward";
    NavigationDirection2["unknown"] = "";
  })(NavigationDirection || (NavigationDirection = {}));
  const START = "";
  function normalizeBase(base) {
    if (!base) {
      {
        base = "/";
      }
    }
    if (base[0] !== "/" && base[0] !== "#")
      base = "/" + base;
    return removeTrailingSlash(base);
  }
  const BEFORE_HASH_RE = /^[^#]+#/;
  function createHref(base, location2) {
    return base.replace(BEFORE_HASH_RE, "#") + location2;
  }
  const computeScrollPosition = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
  });
  let createBaseLocation = () => location.protocol + "//" + location.host;
  function createCurrentLocation(base, location2) {
    const { pathname, search, hash } = location2;
    const hashPos = base.indexOf("#");
    if (hashPos > -1) {
      let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
      let pathFromHash = hash.slice(slicePos);
      if (pathFromHash[0] !== "/")
        pathFromHash = "/" + pathFromHash;
      return stripBase(pathFromHash, "");
    }
    const path = stripBase(pathname, base);
    return path + search + hash;
  }
  function useHistoryListeners(base, historyState, currentLocation, replace) {
    let listeners = [];
    let teardowns = [];
    let pauseState = null;
    const popStateHandler = ({ state }) => {
      const to = createCurrentLocation(base, location);
      const from = currentLocation.value;
      const fromState = historyState.value;
      let delta = 0;
      if (state) {
        currentLocation.value = to;
        historyState.value = state;
        if (pauseState && pauseState === from) {
          pauseState = null;
          return;
        }
        delta = fromState ? state.position - fromState.position : 0;
      } else {
        replace(to);
      }
      listeners.forEach((listener) => {
        listener(currentLocation.value, from, {
          delta,
          type: NavigationType.pop,
          direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
        });
      });
    };
    function pauseListeners() {
      pauseState = currentLocation.value;
    }
    function listen(callback) {
      listeners.push(callback);
      const teardown = () => {
        const index2 = listeners.indexOf(callback);
        if (index2 > -1)
          listeners.splice(index2, 1);
      };
      teardowns.push(teardown);
      return teardown;
    }
    function beforeUnloadListener() {
      const { history: history2 } = window;
      if (!history2.state)
        return;
      history2.replaceState(assign2({}, history2.state, { scroll: computeScrollPosition() }), "");
    }
    function destroy() {
      for (const teardown of teardowns)
        teardown();
      teardowns = [];
      window.removeEventListener("popstate", popStateHandler);
      window.removeEventListener("beforeunload", beforeUnloadListener);
    }
    window.addEventListener("popstate", popStateHandler);
    window.addEventListener("beforeunload", beforeUnloadListener);
    return {
      pauseListeners,
      listen,
      destroy
    };
  }
  function buildState(back, current, forward, replaced = false, computeScroll = false) {
    return {
      back,
      current,
      forward,
      replaced,
      position: window.history.length,
      scroll: computeScroll ? computeScrollPosition() : null
    };
  }
  function useHistoryStateNavigation(base) {
    const { history: history2, location: location2 } = window;
    const currentLocation = {
      value: createCurrentLocation(base, location2)
    };
    const historyState = { value: history2.state };
    if (!historyState.value) {
      changeLocation(currentLocation.value, {
        back: null,
        current: currentLocation.value,
        forward: null,
        position: history2.length - 1,
        replaced: true,
        scroll: null
      }, true);
    }
    function changeLocation(to, state, replace2) {
      const hashIndex = base.indexOf("#");
      const url2 = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
      try {
        history2[replace2 ? "replaceState" : "pushState"](state, "", url2);
        historyState.value = state;
      } catch (err) {
        {
          console.error(err);
        }
        location2[replace2 ? "replace" : "assign"](url2);
      }
    }
    function replace(to, data) {
      const state = assign2({}, history2.state, buildState(historyState.value.back, to, historyState.value.forward, true), data, { position: historyState.value.position });
      changeLocation(to, state, true);
      currentLocation.value = to;
    }
    function push(to, data) {
      const currentState = assign2({}, historyState.value, history2.state, {
        forward: to,
        scroll: computeScrollPosition()
      });
      changeLocation(currentState.current, currentState, true);
      const state = assign2({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
      changeLocation(to, state, false);
      currentLocation.value = to;
    }
    return {
      location: currentLocation,
      state: historyState,
      push,
      replace
    };
  }
  function createWebHistory(base) {
    base = normalizeBase(base);
    const historyNavigation = useHistoryStateNavigation(base);
    const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
    function go(delta, triggerListeners = true) {
      if (!triggerListeners)
        historyListeners.pauseListeners();
      history.go(delta);
    }
    const routerHistory = assign2({
      location: "",
      base,
      go,
      createHref: createHref.bind(null, base)
    }, historyNavigation, historyListeners);
    Object.defineProperty(routerHistory, "location", {
      enumerable: true,
      get: () => historyNavigation.location.value
    });
    Object.defineProperty(routerHistory, "state", {
      enumerable: true,
      get: () => historyNavigation.state.value
    });
    return routerHistory;
  }
  function createMemoryHistory(base = "") {
    let listeners = [];
    let queue2 = [START];
    let position = 0;
    base = normalizeBase(base);
    function setLocation(location2) {
      position++;
      if (position === queue2.length) {
        queue2.push(location2);
      } else {
        queue2.splice(position);
        queue2.push(location2);
      }
    }
    function triggerListeners(to, from, { direction, delta }) {
      const info = {
        direction,
        delta,
        type: NavigationType.pop
      };
      for (const callback of listeners) {
        callback(to, from, info);
      }
    }
    const routerHistory = {
      location: START,
      state: {},
      base,
      createHref: createHref.bind(null, base),
      replace(to) {
        queue2.splice(position--, 1);
        setLocation(to);
      },
      push(to, data) {
        setLocation(to);
      },
      listen(callback) {
        listeners.push(callback);
        return () => {
          const index2 = listeners.indexOf(callback);
          if (index2 > -1)
            listeners.splice(index2, 1);
        };
      },
      destroy() {
        listeners = [];
        queue2 = [START];
        position = 0;
      },
      go(delta, shouldTrigger = true) {
        const from = this.location;
        const direction = delta < 0 ? NavigationDirection.back : NavigationDirection.forward;
        position = Math.max(0, Math.min(position + delta, queue2.length - 1));
        if (shouldTrigger) {
          triggerListeners(this.location, from, {
            direction,
            delta
          });
        }
      }
    };
    Object.defineProperty(routerHistory, "location", {
      enumerable: true,
      get: () => queue2[position]
    });
    return routerHistory;
  }
  function createWebHashHistory(base) {
    base = location.host ? base || location.pathname + location.search : "";
    if (!base.includes("#"))
      base += "#";
    return createWebHistory(base);
  }
  function isRouteLocation(route) {
    return typeof route === "string" || route && typeof route === "object";
  }
  function isRouteName(name2) {
    return typeof name2 === "string" || typeof name2 === "symbol";
  }
  const START_LOCATION_NORMALIZED = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  };
  const NavigationFailureSymbol = /* @__PURE__ */ PolySymbol("nf");
  exports.NavigationFailureType = void 0;
  (function(NavigationFailureType) {
    NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
    NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
    NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
  })(exports.NavigationFailureType || (exports.NavigationFailureType = {}));
  const ErrorTypeMessages = {
    [1]({ location: location2, currentLocation }) {
      return `No match for
 ${JSON.stringify(location2)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
    },
    [2]({ from, to }) {
      return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
    },
    [4]({ from, to }) {
      return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
    },
    [8]({ from, to }) {
      return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
    },
    [16]({ from, to }) {
      return `Avoided redundant navigation to current location: "${from.fullPath}".`;
    }
  };
  function createRouterError(type, params) {
    {
      return assign2(new Error(ErrorTypeMessages[type](params)), {
        type,
        [NavigationFailureSymbol]: true
      }, params);
    }
  }
  function isNavigationFailure(error, type) {
    return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
  }
  const propertiesToLog = ["params", "query", "hash"];
  function stringifyRoute(to) {
    if (typeof to === "string")
      return to;
    if ("path" in to)
      return to.path;
    const location2 = {};
    for (const key of propertiesToLog) {
      if (key in to)
        location2[key] = to[key];
    }
    return JSON.stringify(location2, null, 2);
  }
  const BASE_PARAM_PATTERN = "[^/]+?";
  const BASE_PATH_PARSER_OPTIONS = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  };
  const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
  function tokensToParser(segments, extraOptions) {
    const options = assign2({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
    const score = [];
    let pattern = options.start ? "^" : "";
    const keys = [];
    for (const segment of segments) {
      const segmentScores = segment.length ? [] : [90];
      if (options.strict && !segment.length)
        pattern += "/";
      for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
        const token = segment[tokenIndex];
        let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
        if (token.type === 0) {
          if (!tokenIndex)
            pattern += "/";
          pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
          subSegmentScore += 40;
        } else if (token.type === 1) {
          const { value, repeatable, optional, regexp } = token;
          keys.push({
            name: value,
            repeatable,
            optional
          });
          const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
          if (re2 !== BASE_PARAM_PATTERN) {
            subSegmentScore += 10;
            try {
              new RegExp(`(${re2})`);
            } catch (err) {
              throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
            }
          }
          let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
          if (!tokenIndex)
            subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
          if (optional)
            subPattern += "?";
          pattern += subPattern;
          subSegmentScore += 20;
          if (optional)
            subSegmentScore += -8;
          if (repeatable)
            subSegmentScore += -20;
          if (re2 === ".*")
            subSegmentScore += -50;
        }
        segmentScores.push(subSegmentScore);
      }
      score.push(segmentScores);
    }
    if (options.strict && options.end) {
      const i = score.length - 1;
      score[i][score[i].length - 1] += 0.7000000000000001;
    }
    if (!options.strict)
      pattern += "/?";
    if (options.end)
      pattern += "$";
    else if (options.strict)
      pattern += "(?:/|$)";
    const re = new RegExp(pattern, options.sensitive ? "" : "i");
    function parse2(path) {
      const match = path.match(re);
      const params = {};
      if (!match)
        return null;
      for (let i = 1; i < match.length; i++) {
        const value = match[i] || "";
        const key = keys[i - 1];
        params[key.name] = value && key.repeatable ? value.split("/") : value;
      }
      return params;
    }
    function stringify(params) {
      let path = "";
      let avoidDuplicatedSlash = false;
      for (const segment of segments) {
        if (!avoidDuplicatedSlash || !path.endsWith("/"))
          path += "/";
        avoidDuplicatedSlash = false;
        for (const token of segment) {
          if (token.type === 0) {
            path += token.value;
          } else if (token.type === 1) {
            const { value, repeatable, optional } = token;
            const param = value in params ? params[value] : "";
            if (Array.isArray(param) && !repeatable)
              throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
            const text = Array.isArray(param) ? param.join("/") : param;
            if (!text) {
              if (optional) {
                if (segment.length < 2) {
                  if (path.endsWith("/"))
                    path = path.slice(0, -1);
                  else
                    avoidDuplicatedSlash = true;
                }
              } else
                throw new Error(`Missing required param "${value}"`);
            }
            path += text;
          }
        }
      }
      return path;
    }
    return {
      re,
      score,
      keys,
      parse: parse2,
      stringify
    };
  }
  function compareScoreArray(a, b) {
    let i = 0;
    while (i < a.length && i < b.length) {
      const diff = b[i] - a[i];
      if (diff)
        return diff;
      i++;
    }
    if (a.length < b.length) {
      return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
    } else if (a.length > b.length) {
      return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
    }
    return 0;
  }
  function comparePathParserScore(a, b) {
    let i = 0;
    const aScore = a.score;
    const bScore = b.score;
    while (i < aScore.length && i < bScore.length) {
      const comp = compareScoreArray(aScore[i], bScore[i]);
      if (comp)
        return comp;
      i++;
    }
    return bScore.length - aScore.length;
  }
  const ROOT_TOKEN = {
    type: 0,
    value: ""
  };
  const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
  function tokenizePath(path) {
    if (!path)
      return [[]];
    if (path === "/")
      return [[ROOT_TOKEN]];
    if (!path.startsWith("/")) {
      throw new Error(`Invalid path "${path}"`);
    }
    function crash(message) {
      throw new Error(`ERR (${state})/"${buffer}": ${message}`);
    }
    let state = 0;
    let previousState = state;
    const tokens = [];
    let segment;
    function finalizeSegment() {
      if (segment)
        tokens.push(segment);
      segment = [];
    }
    let i = 0;
    let char;
    let buffer = "";
    let customRe = "";
    function consumeBuffer() {
      if (!buffer)
        return;
      if (state === 0) {
        segment.push({
          type: 0,
          value: buffer
        });
      } else if (state === 1 || state === 2 || state === 3) {
        if (segment.length > 1 && (char === "*" || char === "+"))
          crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
        segment.push({
          type: 1,
          value: buffer,
          regexp: customRe,
          repeatable: char === "*" || char === "+",
          optional: char === "*" || char === "?"
        });
      } else {
        crash("Invalid state to consume buffer");
      }
      buffer = "";
    }
    function addCharToBuffer() {
      buffer += char;
    }
    while (i < path.length) {
      char = path[i++];
      if (char === "\\" && state !== 2) {
        previousState = state;
        state = 4;
        continue;
      }
      switch (state) {
        case 0:
          if (char === "/") {
            if (buffer) {
              consumeBuffer();
            }
            finalizeSegment();
          } else if (char === ":") {
            consumeBuffer();
            state = 1;
          } else {
            addCharToBuffer();
          }
          break;
        case 4:
          addCharToBuffer();
          state = previousState;
          break;
        case 1:
          if (char === "(") {
            state = 2;
          } else if (VALID_PARAM_RE.test(char)) {
            addCharToBuffer();
          } else {
            consumeBuffer();
            state = 0;
            if (char !== "*" && char !== "?" && char !== "+")
              i--;
          }
          break;
        case 2:
          if (char === ")") {
            if (customRe[customRe.length - 1] == "\\")
              customRe = customRe.slice(0, -1) + char;
            else
              state = 3;
          } else {
            customRe += char;
          }
          break;
        case 3:
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
          customRe = "";
          break;
        default:
          crash("Unknown state");
          break;
      }
    }
    if (state === 2)
      crash(`Unfinished custom RegExp for param "${buffer}"`);
    consumeBuffer();
    finalizeSegment();
    return tokens;
  }
  function createRouteRecordMatcher(record, parent, options) {
    const parser = tokensToParser(tokenizePath(record.path), options);
    const matcher = assign2(parser, {
      record,
      parent,
      children: [],
      alias: []
    });
    if (parent) {
      if (!matcher.record.aliasOf === !parent.record.aliasOf)
        parent.children.push(matcher);
    }
    return matcher;
  }
  function createRouterMatcher(routes2, globalOptions) {
    const matchers = [];
    const matcherMap = new Map();
    globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
    function getRecordMatcher(name2) {
      return matcherMap.get(name2);
    }
    function addRoute(record, parent, originalRecord) {
      const isRootAdd = !originalRecord;
      const mainNormalizedRecord = normalizeRouteRecord(record);
      mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
      const options = mergeOptions(globalOptions, record);
      const normalizedRecords = [
        mainNormalizedRecord
      ];
      if ("alias" in record) {
        const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
        for (const alias of aliases) {
          normalizedRecords.push(assign2({}, mainNormalizedRecord, {
            components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
            path: alias,
            aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
          }));
        }
      }
      let matcher;
      let originalMatcher;
      for (const normalizedRecord of normalizedRecords) {
        const { path } = normalizedRecord;
        if (parent && path[0] !== "/") {
          const parentPath = parent.record.path;
          const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
          normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
        }
        matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
        if (originalRecord) {
          originalRecord.alias.push(matcher);
        } else {
          originalMatcher = originalMatcher || matcher;
          if (originalMatcher !== matcher)
            originalMatcher.alias.push(matcher);
          if (isRootAdd && record.name && !isAliasRecord(matcher))
            removeRoute(record.name);
        }
        if ("children" in mainNormalizedRecord) {
          const children = mainNormalizedRecord.children;
          for (let i = 0; i < children.length; i++) {
            addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
          }
        }
        originalRecord = originalRecord || matcher;
        insertMatcher(matcher);
      }
      return originalMatcher ? () => {
        removeRoute(originalMatcher);
      } : noop2;
    }
    function removeRoute(matcherRef) {
      if (isRouteName(matcherRef)) {
        const matcher = matcherMap.get(matcherRef);
        if (matcher) {
          matcherMap.delete(matcherRef);
          matchers.splice(matchers.indexOf(matcher), 1);
          matcher.children.forEach(removeRoute);
          matcher.alias.forEach(removeRoute);
        }
      } else {
        const index2 = matchers.indexOf(matcherRef);
        if (index2 > -1) {
          matchers.splice(index2, 1);
          if (matcherRef.record.name)
            matcherMap.delete(matcherRef.record.name);
          matcherRef.children.forEach(removeRoute);
          matcherRef.alias.forEach(removeRoute);
        }
      }
    }
    function getRoutes() {
      return matchers;
    }
    function insertMatcher(matcher) {
      let i = 0;
      while (i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0)
        i++;
      matchers.splice(i, 0, matcher);
      if (matcher.record.name && !isAliasRecord(matcher))
        matcherMap.set(matcher.record.name, matcher);
    }
    function resolve(location2, currentLocation) {
      let matcher;
      let params = {};
      let path;
      let name2;
      if ("name" in location2 && location2.name) {
        matcher = matcherMap.get(location2.name);
        if (!matcher)
          throw createRouterError(1, {
            location: location2
          });
        name2 = matcher.record.name;
        params = assign2(paramsFromLocation(currentLocation.params, matcher.keys.filter((k) => !k.optional).map((k) => k.name)), location2.params);
        path = matcher.stringify(params);
      } else if ("path" in location2) {
        path = location2.path;
        matcher = matchers.find((m) => m.re.test(path));
        if (matcher) {
          params = matcher.parse(path);
          name2 = matcher.record.name;
        }
      } else {
        matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
        if (!matcher)
          throw createRouterError(1, {
            location: location2,
            currentLocation
          });
        name2 = matcher.record.name;
        params = assign2({}, currentLocation.params, location2.params);
        path = matcher.stringify(params);
      }
      const matched = [];
      let parentMatcher = matcher;
      while (parentMatcher) {
        matched.unshift(parentMatcher.record);
        parentMatcher = parentMatcher.parent;
      }
      return {
        name: name2,
        path,
        params,
        matched,
        meta: mergeMetaFields(matched)
      };
    }
    routes2.forEach((route) => addRoute(route));
    return { addRoute, resolve, removeRoute, getRoutes, getRecordMatcher };
  }
  function paramsFromLocation(params, keys) {
    const newParams = {};
    for (const key of keys) {
      if (key in params)
        newParams[key] = params[key];
    }
    return newParams;
  }
  function normalizeRouteRecord(record) {
    return {
      path: record.path,
      redirect: record.redirect,
      name: record.name,
      meta: record.meta || {},
      aliasOf: void 0,
      beforeEnter: record.beforeEnter,
      props: normalizeRecordProps(record),
      children: record.children || [],
      instances: {},
      leaveGuards: new Set(),
      updateGuards: new Set(),
      enterCallbacks: {},
      components: "components" in record ? record.components || {} : { default: record.component }
    };
  }
  function normalizeRecordProps(record) {
    const propsObject = {};
    const props = record.props || false;
    if ("component" in record) {
      propsObject.default = props;
    } else {
      for (const name2 in record.components)
        propsObject[name2] = typeof props === "boolean" ? props : props[name2];
    }
    return propsObject;
  }
  function isAliasRecord(record) {
    while (record) {
      if (record.record.aliasOf)
        return true;
      record = record.parent;
    }
    return false;
  }
  function mergeMetaFields(matched) {
    return matched.reduce((meta, record) => assign2(meta, record.meta), {});
  }
  function mergeOptions(defaults2, partialOptions) {
    const options = {};
    for (const key in defaults2) {
      options[key] = key in partialOptions ? partialOptions[key] : defaults2[key];
    }
    return options;
  }
  const HASH_RE2 = /#/g;
  const AMPERSAND_RE2 = /&/g;
  const SLASH_RE = /\//g;
  const EQUAL_RE2 = /=/g;
  const IM_RE = /\?/g;
  const PLUS_RE2 = /\+/g;
  const ENC_BRACKET_OPEN_RE2 = /%5B/g;
  const ENC_BRACKET_CLOSE_RE2 = /%5D/g;
  const ENC_CARET_RE2 = /%5E/g;
  const ENC_BACKTICK_RE2 = /%60/g;
  const ENC_CURLY_OPEN_RE2 = /%7B/g;
  const ENC_PIPE_RE2 = /%7C/g;
  const ENC_CURLY_CLOSE_RE2 = /%7D/g;
  const ENC_SPACE_RE2 = /%20/g;
  function commonEncode(text) {
    return encodeURI("" + text).replace(ENC_PIPE_RE2, "|").replace(ENC_BRACKET_OPEN_RE2, "[").replace(ENC_BRACKET_CLOSE_RE2, "]");
  }
  function encodeHash(text) {
    return commonEncode(text).replace(ENC_CURLY_OPEN_RE2, "{").replace(ENC_CURLY_CLOSE_RE2, "}").replace(ENC_CARET_RE2, "^");
  }
  function encodeQueryValue2(text) {
    return commonEncode(text).replace(PLUS_RE2, "%2B").replace(ENC_SPACE_RE2, "+").replace(HASH_RE2, "%23").replace(AMPERSAND_RE2, "%26").replace(ENC_BACKTICK_RE2, "`").replace(ENC_CURLY_OPEN_RE2, "{").replace(ENC_CURLY_CLOSE_RE2, "}").replace(ENC_CARET_RE2, "^");
  }
  function encodeQueryKey2(text) {
    return encodeQueryValue2(text).replace(EQUAL_RE2, "%3D");
  }
  function encodePath(text) {
    return commonEncode(text).replace(HASH_RE2, "%23").replace(IM_RE, "%3F");
  }
  function encodeParam(text) {
    return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
  }
  function decode2(text) {
    try {
      return decodeURIComponent("" + text);
    } catch (err) {
    }
    return "" + text;
  }
  function parseQuery2(search) {
    const query = {};
    if (search === "" || search === "?")
      return query;
    const hasLeadingIM = search[0] === "?";
    const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
    for (let i = 0; i < searchParams.length; ++i) {
      const searchParam = searchParams[i].replace(PLUS_RE2, " ");
      const eqPos = searchParam.indexOf("=");
      const key = decode2(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
      const value = eqPos < 0 ? null : decode2(searchParam.slice(eqPos + 1));
      if (key in query) {
        let currentValue = query[key];
        if (!Array.isArray(currentValue)) {
          currentValue = query[key] = [currentValue];
        }
        currentValue.push(value);
      } else {
        query[key] = value;
      }
    }
    return query;
  }
  function stringifyQuery2(query) {
    let search = "";
    for (let key in query) {
      const value = query[key];
      key = encodeQueryKey2(key);
      if (value == null) {
        if (value !== void 0) {
          search += (search.length ? "&" : "") + key;
        }
        continue;
      }
      const values = Array.isArray(value) ? value.map((v) => v && encodeQueryValue2(v)) : [value && encodeQueryValue2(value)];
      values.forEach((value2) => {
        if (value2 !== void 0) {
          search += (search.length ? "&" : "") + key;
          if (value2 != null)
            search += "=" + value2;
        }
      });
    }
    return search;
  }
  function normalizeQuery(query) {
    const normalizedQuery = {};
    for (const key in query) {
      const value = query[key];
      if (value !== void 0) {
        normalizedQuery[key] = Array.isArray(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
      }
    }
    return normalizedQuery;
  }
  function useCallbacks() {
    let handlers = [];
    function add2(handler) {
      handlers.push(handler);
      return () => {
        const i = handlers.indexOf(handler);
        if (i > -1)
          handlers.splice(i, 1);
      };
    }
    function reset() {
      handlers = [];
    }
    return {
      add: add2,
      list: () => handlers,
      reset
    };
  }
  function registerGuard(record, name2, guard) {
    const removeFromList = () => {
      record[name2].delete(guard);
    };
    vue.onUnmounted(removeFromList);
    vue.onDeactivated(removeFromList);
    vue.onActivated(() => {
      record[name2].add(guard);
    });
    record[name2].add(guard);
  }
  function onBeforeRouteLeave(leaveGuard) {
    const activeRecord = vue.inject(matchedRouteKey, {}).value;
    if (!activeRecord) {
      return;
    }
    registerGuard(activeRecord, "leaveGuards", leaveGuard);
  }
  function onBeforeRouteUpdate(updateGuard) {
    const activeRecord = vue.inject(matchedRouteKey, {}).value;
    if (!activeRecord) {
      return;
    }
    registerGuard(activeRecord, "updateGuards", updateGuard);
  }
  function guardToPromiseFn(guard, to, from, record, name2) {
    const enterCallbackArray = record && (record.enterCallbacks[name2] = record.enterCallbacks[name2] || []);
    return () => new Promise((resolve, reject) => {
      const next = (valid) => {
        if (valid === false)
          reject(createRouterError(4, {
            from,
            to
          }));
        else if (valid instanceof Error) {
          reject(valid);
        } else if (isRouteLocation(valid)) {
          reject(createRouterError(2, {
            from: to,
            to: valid
          }));
        } else {
          if (enterCallbackArray && record.enterCallbacks[name2] === enterCallbackArray && typeof valid === "function")
            enterCallbackArray.push(valid);
          resolve();
        }
      };
      const guardReturn = guard.call(record && record.instances[name2], to, from, next);
      let guardCall = Promise.resolve(guardReturn);
      if (guard.length < 3)
        guardCall = guardCall.then(next);
      guardCall.catch((err) => reject(err));
    });
  }
  function extractComponentsGuards(matched, guardType, to, from) {
    const guards = [];
    for (const record of matched) {
      for (const name2 in record.components) {
        let rawComponent = record.components[name2];
        if (guardType !== "beforeRouteEnter" && !record.instances[name2])
          continue;
        if (isRouteComponent(rawComponent)) {
          const options = rawComponent.__vccOpts || rawComponent;
          const guard = options[guardType];
          guard && guards.push(guardToPromiseFn(guard, to, from, record, name2));
        } else {
          let componentPromise = rawComponent();
          guards.push(() => componentPromise.then((resolved) => {
            if (!resolved)
              return Promise.reject(new Error(`Couldn't resolve component "${name2}" at "${record.path}"`));
            const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
            record.components[name2] = resolvedComponent;
            const options = resolvedComponent.__vccOpts || resolvedComponent;
            const guard = options[guardType];
            return guard && guardToPromiseFn(guard, to, from, record, name2)();
          }));
        }
      }
    }
    return guards;
  }
  function isRouteComponent(component) {
    return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
  }
  function useLink(props) {
    const router = vue.inject(routerKey);
    const currentRoute = vue.inject(routeLocationKey);
    const route = vue.computed(() => router.resolve(vue.unref(props.to)));
    const activeRecordIndex = vue.computed(() => {
      const { matched } = route.value;
      const { length } = matched;
      const routeMatched = matched[length - 1];
      const currentMatched = currentRoute.matched;
      if (!routeMatched || !currentMatched.length)
        return -1;
      const index2 = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
      if (index2 > -1)
        return index2;
      const parentRecordPath = getOriginalPath(matched[length - 2]);
      return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index2;
    });
    const isActive = vue.computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
    const isExactActive = vue.computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
    function navigate(e = {}) {
      if (guardEvent(e)) {
        return router[vue.unref(props.replace) ? "replace" : "push"](vue.unref(props.to)).catch(noop2);
      }
      return Promise.resolve();
    }
    return {
      route,
      href: vue.computed(() => route.value.href),
      isActive,
      isExactActive,
      navigate
    };
  }
  const RouterLinkImpl = /* @__PURE__ */ vue.defineComponent({
    name: "RouterLink",
    props: {
      to: {
        type: [String, Object],
        required: true
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      }
    },
    useLink,
    setup(props, { slots }) {
      const link = vue.reactive(useLink(props));
      const { options } = vue.inject(routerKey);
      const elClass = vue.computed(() => ({
        [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
        [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
      }));
      return () => {
        const children = slots.default && slots.default(link);
        return props.custom ? children : vue.h("a", {
          "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
          href: link.href,
          onClick: link.navigate,
          class: elClass.value
        }, children);
      };
    }
  });
  const RouterLink = RouterLinkImpl;
  function guardEvent(e) {
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
      return;
    if (e.defaultPrevented)
      return;
    if (e.button !== void 0 && e.button !== 0)
      return;
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const target = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(target))
        return;
    }
    if (e.preventDefault)
      e.preventDefault();
    return true;
  }
  function includesParams(outer, inner) {
    for (const key in inner) {
      const innerValue = inner[key];
      const outerValue = outer[key];
      if (typeof innerValue === "string") {
        if (innerValue !== outerValue)
          return false;
      } else {
        if (!Array.isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i]))
          return false;
      }
    }
    return true;
  }
  function getOriginalPath(record) {
    return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
  }
  const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
  const RouterViewImpl = /* @__PURE__ */ vue.defineComponent({
    name: "RouterView",
    inheritAttrs: false,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    setup(props, { attrs, slots }) {
      const injectedRoute = vue.inject(routerViewLocationKey);
      const routeToDisplay = vue.computed(() => props.route || injectedRoute.value);
      const depth = vue.inject(viewDepthKey, 0);
      const matchedRouteRef = vue.computed(() => routeToDisplay.value.matched[depth]);
      vue.provide(viewDepthKey, depth + 1);
      vue.provide(matchedRouteKey, matchedRouteRef);
      vue.provide(routerViewLocationKey, routeToDisplay);
      const viewRef = vue.ref();
      vue.watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name2], [oldInstance, from, oldName]) => {
        if (to) {
          to.instances[name2] = instance;
          if (from && from !== to && instance && instance === oldInstance) {
            if (!to.leaveGuards.size) {
              to.leaveGuards = from.leaveGuards;
            }
            if (!to.updateGuards.size) {
              to.updateGuards = from.updateGuards;
            }
          }
        }
        if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
          (to.enterCallbacks[name2] || []).forEach((callback) => callback(instance));
        }
      }, { flush: "post" });
      return () => {
        const route = routeToDisplay.value;
        const matchedRoute = matchedRouteRef.value;
        const ViewComponent = matchedRoute && matchedRoute.components[props.name];
        const currentName = props.name;
        if (!ViewComponent) {
          return normalizeSlot(slots.default, { Component: ViewComponent, route });
        }
        const routePropsOption = matchedRoute.props[props.name];
        const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
        const onVnodeUnmounted = (vnode) => {
          if (vnode.component.isUnmounted) {
            matchedRoute.instances[currentName] = null;
          }
        };
        const component = vue.h(ViewComponent, assign2({}, routeProps, attrs, {
          onVnodeUnmounted,
          ref: viewRef
        }));
        return normalizeSlot(slots.default, { Component: component, route }) || component;
      };
    }
  });
  function normalizeSlot(slot, data) {
    if (!slot)
      return null;
    const slotContent = slot(data);
    return slotContent.length === 1 ? slotContent[0] : slotContent;
  }
  const RouterView = RouterViewImpl;
  function createRouter(options) {
    const matcher = createRouterMatcher(options.routes, options);
    const parseQuery$1 = options.parseQuery || parseQuery2;
    const stringifyQuery$1 = options.stringifyQuery || stringifyQuery2;
    const routerHistory = options.history;
    const beforeGuards = useCallbacks();
    const beforeResolveGuards = useCallbacks();
    const afterGuards = useCallbacks();
    const currentRoute = vue.shallowRef(START_LOCATION_NORMALIZED);
    let pendingLocation = START_LOCATION_NORMALIZED;
    const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
    const encodeParams = applyToParams.bind(null, encodeParam);
    const decodeParams = applyToParams.bind(null, decode2);
    function addRoute(parentOrRoute, route) {
      let parent;
      let record;
      if (isRouteName(parentOrRoute)) {
        parent = matcher.getRecordMatcher(parentOrRoute);
        record = route;
      } else {
        record = parentOrRoute;
      }
      return matcher.addRoute(record, parent);
    }
    function removeRoute(name2) {
      const recordMatcher = matcher.getRecordMatcher(name2);
      if (recordMatcher) {
        matcher.removeRoute(recordMatcher);
      }
    }
    function getRoutes() {
      return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
    }
    function hasRoute(name2) {
      return !!matcher.getRecordMatcher(name2);
    }
    function resolve(rawLocation, currentLocation) {
      currentLocation = assign2({}, currentLocation || currentRoute.value);
      if (typeof rawLocation === "string") {
        const locationNormalized = parseURL2(parseQuery$1, rawLocation, currentLocation.path);
        const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
        const href2 = routerHistory.createHref(locationNormalized.fullPath);
        return assign2(locationNormalized, matchedRoute2, {
          params: decodeParams(matchedRoute2.params),
          hash: decode2(locationNormalized.hash),
          redirectedFrom: void 0,
          href: href2
        });
      }
      let matcherLocation;
      if ("path" in rawLocation) {
        matcherLocation = assign2({}, rawLocation, {
          path: parseURL2(parseQuery$1, rawLocation.path, currentLocation.path).path
        });
      } else {
        const targetParams = assign2({}, rawLocation.params);
        for (const key in targetParams) {
          if (targetParams[key] == null) {
            delete targetParams[key];
          }
        }
        matcherLocation = assign2({}, rawLocation, {
          params: encodeParams(rawLocation.params)
        });
        currentLocation.params = encodeParams(currentLocation.params);
      }
      const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
      const hash = rawLocation.hash || "";
      matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
      const fullPath = stringifyURL(stringifyQuery$1, assign2({}, rawLocation, {
        hash: encodeHash(hash),
        path: matchedRoute.path
      }));
      const href = routerHistory.createHref(fullPath);
      return assign2({
        fullPath,
        hash,
        query: stringifyQuery$1 === stringifyQuery2 ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
      }, matchedRoute, {
        redirectedFrom: void 0,
        href
      });
    }
    function locationAsObject(to) {
      return typeof to === "string" ? parseURL2(parseQuery$1, to, currentRoute.value.path) : assign2({}, to);
    }
    function checkCanceledNavigation(to, from) {
      if (pendingLocation !== to) {
        return createRouterError(8, {
          from,
          to
        });
      }
    }
    function push(to) {
      return pushWithRedirect(to);
    }
    function replace(to) {
      return push(assign2(locationAsObject(to), { replace: true }));
    }
    function handleRedirectRecord(to) {
      const lastMatched = to.matched[to.matched.length - 1];
      if (lastMatched && lastMatched.redirect) {
        const { redirect } = lastMatched;
        let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
        if (typeof newTargetLocation === "string") {
          newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
          newTargetLocation.params = {};
        }
        return assign2({
          query: to.query,
          hash: to.hash,
          params: to.params
        }, newTargetLocation);
      }
    }
    function pushWithRedirect(to, redirectedFrom) {
      const targetLocation = pendingLocation = resolve(to);
      const from = currentRoute.value;
      const data = to.state;
      const force = to.force;
      const replace2 = to.replace === true;
      const shouldRedirect = handleRedirectRecord(targetLocation);
      if (shouldRedirect)
        return pushWithRedirect(assign2(locationAsObject(shouldRedirect), {
          state: data,
          force,
          replace: replace2
        }), redirectedFrom || targetLocation);
      const toLocation = targetLocation;
      toLocation.redirectedFrom = redirectedFrom;
      let failure;
      if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
        failure = createRouterError(16, { to: toLocation, from });
        handleScroll();
      }
      return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? error : triggerError(error, toLocation, from)).then((failure2) => {
        if (failure2) {
          if (isNavigationFailure(failure2, 2)) {
            return pushWithRedirect(assign2(locationAsObject(failure2.to), {
              state: data,
              force,
              replace: replace2
            }), redirectedFrom || toLocation);
          }
        } else {
          failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
        }
        triggerAfterEach(toLocation, from, failure2);
        return failure2;
      });
    }
    function checkCanceledNavigationAndReject(to, from) {
      const error = checkCanceledNavigation(to, from);
      return error ? Promise.reject(error) : Promise.resolve();
    }
    function navigate(to, from) {
      let guards;
      const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
      guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
      for (const record of leavingRecords) {
        record.leaveGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards).then(() => {
        guards = [];
        for (const guard of beforeGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
        for (const record of updatingRecords) {
          record.updateGuards.forEach((guard) => {
            guards.push(guardToPromiseFn(guard, to, from));
          });
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const record of to.matched) {
          if (record.beforeEnter && !from.matched.includes(record)) {
            if (Array.isArray(record.beforeEnter)) {
              for (const beforeEnter of record.beforeEnter)
                guards.push(guardToPromiseFn(beforeEnter, to, from));
            } else {
              guards.push(guardToPromiseFn(record.beforeEnter, to, from));
            }
          }
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        to.matched.forEach((record) => record.enterCallbacks = {});
        guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const guard of beforeResolveGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
    }
    function triggerAfterEach(to, from, failure) {
      for (const guard of afterGuards.list())
        guard(to, from, failure);
    }
    function finalizeNavigation(toLocation, from, isPush, replace2, data) {
      const error = checkCanceledNavigation(toLocation, from);
      if (error)
        return error;
      const isFirstNavigation = from === START_LOCATION_NORMALIZED;
      const state = {};
      if (isPush) {
        if (replace2 || isFirstNavigation)
          routerHistory.replace(toLocation.fullPath, assign2({
            scroll: isFirstNavigation && state && state.scroll
          }, data));
        else
          routerHistory.push(toLocation.fullPath, data);
      }
      currentRoute.value = toLocation;
      handleScroll();
      markAsReady();
    }
    let removeHistoryListener;
    function setupListeners() {
      removeHistoryListener = routerHistory.listen((to, _from, info) => {
        const toLocation = resolve(to);
        const shouldRedirect = handleRedirectRecord(toLocation);
        if (shouldRedirect) {
          pushWithRedirect(assign2(shouldRedirect, { replace: true }), toLocation).catch(noop2);
          return;
        }
        pendingLocation = toLocation;
        const from = currentRoute.value;
        navigate(toLocation, from).catch((error) => {
          if (isNavigationFailure(error, 4 | 8)) {
            return error;
          }
          if (isNavigationFailure(error, 2)) {
            pushWithRedirect(error.to, toLocation).then((failure) => {
              if (isNavigationFailure(failure, 4 | 16) && !info.delta && info.type === NavigationType.pop) {
                routerHistory.go(-1, false);
              }
            }).catch(noop2);
            return Promise.reject();
          }
          if (info.delta)
            routerHistory.go(-info.delta, false);
          return triggerError(error, toLocation, from);
        }).then((failure) => {
          failure = failure || finalizeNavigation(toLocation, from, false);
          if (failure) {
            if (info.delta) {
              routerHistory.go(-info.delta, false);
            } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4 | 16)) {
              routerHistory.go(-1, false);
            }
          }
          triggerAfterEach(toLocation, from, failure);
        }).catch(noop2);
      });
    }
    let readyHandlers = useCallbacks();
    let errorHandlers = useCallbacks();
    let ready;
    function triggerError(error, to, from) {
      markAsReady(error);
      const list = errorHandlers.list();
      if (list.length) {
        list.forEach((handler) => handler(error, to, from));
      } else {
        console.error(error);
      }
      return Promise.reject(error);
    }
    function isReady() {
      if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
        return Promise.resolve();
      return new Promise((resolve2, reject) => {
        readyHandlers.add([resolve2, reject]);
      });
    }
    function markAsReady(err) {
      if (ready)
        return;
      ready = true;
      setupListeners();
      readyHandlers.list().forEach(([resolve2, reject]) => err ? reject(err) : resolve2());
      readyHandlers.reset();
    }
    function handleScroll(to, from, isPush, isFirstNavigation) {
      return Promise.resolve();
    }
    const go = (delta) => routerHistory.go(delta);
    const installedApps = new Set();
    const router = {
      currentRoute,
      addRoute,
      removeRoute,
      hasRoute,
      getRoutes,
      resolve,
      options,
      push,
      replace,
      go,
      back: () => go(-1),
      forward: () => go(1),
      beforeEach: beforeGuards.add,
      beforeResolve: beforeResolveGuards.add,
      afterEach: afterGuards.add,
      onError: errorHandlers.add,
      isReady,
      install(app) {
        const router2 = this;
        app.component("RouterLink", RouterLink);
        app.component("RouterView", RouterView);
        app.config.globalProperties.$router = router2;
        Object.defineProperty(app.config.globalProperties, "$route", {
          enumerable: true,
          get: () => vue.unref(currentRoute)
        });
        const reactiveRoute = {};
        for (const key in START_LOCATION_NORMALIZED) {
          reactiveRoute[key] = vue.computed(() => currentRoute.value[key]);
        }
        app.provide(routerKey, router2);
        app.provide(routeLocationKey, vue.reactive(reactiveRoute));
        app.provide(routerViewLocationKey, currentRoute);
        const unmountApp = app.unmount;
        installedApps.add(app);
        app.unmount = function() {
          installedApps.delete(app);
          if (installedApps.size < 1) {
            pendingLocation = START_LOCATION_NORMALIZED;
            removeHistoryListener && removeHistoryListener();
            currentRoute.value = START_LOCATION_NORMALIZED;
            ready = false;
          }
          unmountApp();
        };
      }
    };
    return router;
  }
  function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
  }
  function extractChangingRecords(to, from) {
    const leavingRecords = [];
    const updatingRecords = [];
    const enteringRecords = [];
    const len = Math.max(from.matched.length, to.matched.length);
    for (let i = 0; i < len; i++) {
      const recordFrom = from.matched[i];
      if (recordFrom) {
        if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
          updatingRecords.push(recordFrom);
        else
          leavingRecords.push(recordFrom);
      }
      const recordTo = to.matched[i];
      if (recordTo) {
        if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
          enteringRecords.push(recordTo);
        }
      }
    }
    return [leavingRecords, updatingRecords, enteringRecords];
  }
  function useRouter() {
    return vue.inject(routerKey);
  }
  function useRoute() {
    return vue.inject(routeLocationKey);
  }
  exports.RouterLink = RouterLink;
  exports.RouterView = RouterView;
  exports.START_LOCATION = START_LOCATION_NORMALIZED;
  exports.createMemoryHistory = createMemoryHistory;
  exports.createRouter = createRouter;
  exports.createRouterMatcher = createRouterMatcher;
  exports.createWebHashHistory = createWebHashHistory;
  exports.createWebHistory = createWebHistory;
  exports.isNavigationFailure = isNavigationFailure;
  exports.matchedRouteKey = matchedRouteKey;
  exports.onBeforeRouteLeave = onBeforeRouteLeave;
  exports.onBeforeRouteUpdate = onBeforeRouteUpdate;
  exports.parseQuery = parseQuery2;
  exports.routeLocationKey = routeLocationKey;
  exports.routerKey = routerKey;
  exports.routerViewLocationKey = routerViewLocationKey;
  exports.stringifyQuery = stringifyQuery2;
  exports.useLink = useLink;
  exports.useRoute = useRoute;
  exports.useRouter = useRouter;
  exports.viewDepthKey = viewDepthKey;
})(vueRouter_cjs_prod);
const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  var _a2, _b, _c;
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = __spreadValues({ server: true, default: getDefault }, options);
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = (_b = (_a2 = options.lazy) != null ? _a2 : options.defer) != null ? _b : false;
  const nuxt = useNuxtApp();
  const instance = vue_cjs_prod.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      vue_cjs_prod.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      vue_cjs_prod.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const asyncData = {
    data: vue_cjs_prod.ref((_c = nuxt.payload.data[key]) != null ? _c : options.default()),
    pending: vue_cjs_prod.ref(true),
    error: vue_cjs_prod.ref(null)
  };
  asyncData.refresh = (force) => {
    if (nuxt._asyncDataPromises[key] && !force) {
      return nuxt._asyncDataPromises[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = options.default();
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  options.server === false || !nuxt.payload.serverRendered;
  if (fetchOnServer) {
    const promise = asyncData.refresh();
    vue_cjs_prod.onServerPrefetch(() => promise);
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
const preload = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
/*!
  * shared v9.2.0-beta.28
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
const makeSymbol = (name2) => hasSymbol ? Symbol(name2) : name2;
const generateFormatCacheKey = (locale, key, source2) => friendlyJSONstringify({ l: locale, k: key, s: source2 });
const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
const isNumber$1 = (val) => typeof val === "number" && isFinite(val);
const isDate$1 = (val) => toTypeString(val) === "[object Date]";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isEmptyObject = (val) => isPlainObject$1(val) && Object.keys(val).length === 0;
function warn(msg, err) {
  if (typeof console !== "undefined") {
    console.warn(`[intlify] ` + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}
const assign = Object.assign;
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {});
};
function escapeHtml(rawText) {
  return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
const isArray$1 = Array.isArray;
const isFunction$1 = (val) => typeof val === "function";
const isString$1 = (val) => typeof val === "string";
const isBoolean = (val) => typeof val === "boolean";
const isObject$1 = (val) => val !== null && typeof val === "object";
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const isPlainObject$1 = (val) => toTypeString(val) === "[object Object]";
const toDisplayString = (val) => {
  return val == null ? "" : isArray$1(val) || isPlainObject$1(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
};
/*!
  * message-compiler v9.2.0-beta.28
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const CompileErrorCodes = {
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  __EXTEND_POINT__: 15
};
function createCompileError(code2, loc, options = {}) {
  const { domain, messages: messages2, args } = options;
  const msg = code2;
  const error = new SyntaxError(String(msg));
  error.code = code2;
  if (loc) {
    error.location = loc;
  }
  error.domain = domain;
  return error;
}
/*!
  * devtools-if v9.2.0-beta.28
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const IntlifyDevToolsHooks = {
  I18nInit: "i18n:init",
  FunctionTranslate: "function:translate"
};
/*!
  * core-base v9.2.0-beta.28
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const pathStateMachine = [];
pathStateMachine[0] = {
  ["w"]: [0],
  ["i"]: [3, 0],
  ["["]: [4],
  ["o"]: [7]
};
pathStateMachine[1] = {
  ["w"]: [1],
  ["."]: [2],
  ["["]: [4],
  ["o"]: [7]
};
pathStateMachine[2] = {
  ["w"]: [2],
  ["i"]: [3, 0],
  ["0"]: [3, 0]
};
pathStateMachine[3] = {
  ["i"]: [3, 0],
  ["0"]: [3, 0],
  ["w"]: [1, 1],
  ["."]: [2, 1],
  ["["]: [4, 1],
  ["o"]: [7, 1]
};
pathStateMachine[4] = {
  ["'"]: [5, 0],
  ['"']: [6, 0],
  ["["]: [
    4,
    2
  ],
  ["]"]: [1, 3],
  ["o"]: 8,
  ["l"]: [4, 0]
};
pathStateMachine[5] = {
  ["'"]: [4, 0],
  ["o"]: 8,
  ["l"]: [5, 0]
};
pathStateMachine[6] = {
  ['"']: [4, 0],
  ["o"]: 8,
  ["l"]: [6, 0]
};
const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
  return literalValueRE.test(exp);
}
function stripQuotes(str) {
  const a = str.charCodeAt(0);
  const b = str.charCodeAt(str.length - 1);
  return a === b && (a === 34 || a === 39) ? str.slice(1, -1) : str;
}
function getPathCharType(ch) {
  if (ch === void 0 || ch === null) {
    return "o";
  }
  const code2 = ch.charCodeAt(0);
  switch (code2) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return ch;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function formatSubPath(path) {
  const trimmed = path.trim();
  if (path.charAt(0) === "0" && isNaN(parseInt(path))) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
}
function parse(path) {
  const keys = [];
  let index2 = -1;
  let mode = 0;
  let subPathDepth = 0;
  let c;
  let key;
  let newChar;
  let type;
  let transition;
  let action;
  let typeMap;
  const actions = [];
  actions[0] = () => {
    if (key === void 0) {
      key = newChar;
    } else {
      key += newChar;
    }
  };
  actions[1] = () => {
    if (key !== void 0) {
      keys.push(key);
      key = void 0;
    }
  };
  actions[2] = () => {
    actions[0]();
    subPathDepth++;
  };
  actions[3] = () => {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = 4;
      actions[0]();
    } else {
      subPathDepth = 0;
      if (key === void 0) {
        return false;
      }
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[1]();
      }
    }
  };
  function maybeUnescapeQuote() {
    const nextChar = path[index2 + 1];
    if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === '"') {
      index2++;
      newChar = "\\" + nextChar;
      actions[0]();
      return true;
    }
  }
  while (mode !== null) {
    index2++;
    c = path[index2];
    if (c === "\\" && maybeUnescapeQuote()) {
      continue;
    }
    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap["l"] || 8;
    if (transition === 8) {
      return;
    }
    mode = transition[0];
    if (transition[1] !== void 0) {
      action = actions[transition[1]];
      if (action) {
        newChar = c;
        if (action() === false) {
          return;
        }
      }
    }
    if (mode === 7) {
      return keys;
    }
  }
}
const cache = new Map();
function resolveWithKeyValue(obj, path) {
  return isObject$1(obj) ? obj[path] : null;
}
function resolveValue(obj, path) {
  if (!isObject$1(obj)) {
    return null;
  }
  let hit = cache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      cache.set(path, hit);
    }
  }
  if (!hit) {
    return null;
  }
  const len = hit.length;
  let last = obj;
  let i = 0;
  while (i < len) {
    const val = last[hit[i]];
    if (val === void 0) {
      return null;
    }
    last = val;
    i++;
  }
  return last;
}
const DEFAULT_MODIFIER = (str) => str;
const DEFAULT_MESSAGE = (ctx) => "";
const DEFAULT_MESSAGE_DATA_TYPE = "text";
const DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : values.join("");
const DEFAULT_INTERPOLATE = toDisplayString;
function pluralDefault(choice, choicesLength) {
  choice = Math.abs(choice);
  if (choicesLength === 2) {
    return choice ? choice > 1 ? 1 : 0 : 1;
  }
  return choice ? Math.min(choice, 2) : 0;
}
function getPluralIndex(options) {
  const index2 = isNumber$1(options.pluralIndex) ? options.pluralIndex : -1;
  return options.named && (isNumber$1(options.named.count) || isNumber$1(options.named.n)) ? isNumber$1(options.named.count) ? options.named.count : isNumber$1(options.named.n) ? options.named.n : index2 : index2;
}
function normalizeNamed(pluralIndex, props) {
  if (!props.count) {
    props.count = pluralIndex;
  }
  if (!props.n) {
    props.n = pluralIndex;
  }
}
function createMessageContext(options = {}) {
  const locale = options.locale;
  const pluralIndex = getPluralIndex(options);
  const pluralRule = isObject$1(options.pluralRules) && isString$1(locale) && isFunction$1(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
  const orgPluralRule = isObject$1(options.pluralRules) && isString$1(locale) && isFunction$1(options.pluralRules[locale]) ? pluralDefault : void 0;
  const plural = (messages2) => messages2[pluralRule(pluralIndex, messages2.length, orgPluralRule)];
  const _list = options.list || [];
  const list = (index2) => _list[index2];
  const _named = options.named || {};
  isNumber$1(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
  const named = (key) => _named[key];
  function message(key) {
    const msg = isFunction$1(options.messages) ? options.messages(key) : isObject$1(options.messages) ? options.messages[key] : false;
    return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
  }
  const _modifier = (name2) => options.modifiers ? options.modifiers[name2] : DEFAULT_MODIFIER;
  const normalize = isPlainObject$1(options.processor) && isFunction$1(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
  const interpolate = isPlainObject$1(options.processor) && isFunction$1(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
  const type = isPlainObject$1(options.processor) && isString$1(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
  const ctx = {
    ["list"]: list,
    ["named"]: named,
    ["plural"]: plural,
    ["linked"]: (key, modifier) => {
      const msg = message(key)(ctx);
      return isString$1(modifier) ? _modifier(modifier)(msg) : msg;
    },
    ["message"]: message,
    ["type"]: type,
    ["interpolate"]: interpolate,
    ["normalize"]: normalize
  };
  return ctx;
}
let devtools = null;
function setDevToolsHook(hook) {
  devtools = hook;
}
function initI18nDevTools(i18n, version2, meta) {
  devtools && devtools.emit(IntlifyDevToolsHooks.I18nInit, {
    timestamp: Date.now(),
    i18n,
    version: version2,
    meta
  });
}
const translateDevTools = /* @__PURE__ */ createDevToolsHook(IntlifyDevToolsHooks.FunctionTranslate);
function createDevToolsHook(hook) {
  return (payloads) => devtools && devtools.emit(hook, payloads);
}
function fallbackWithSimple(ctx, fallback, start) {
  return [...new Set([
    start,
    ...isArray$1(fallback) ? fallback : isObject$1(fallback) ? Object.keys(fallback) : isString$1(fallback) ? [fallback] : [start]
  ])];
}
function fallbackWithLocaleChain(ctx, fallback, start) {
  const startLocale = isString$1(start) ? start : DEFAULT_LOCALE;
  const context = ctx;
  if (!context.__localeChainCache) {
    context.__localeChainCache = new Map();
  }
  let chain = context.__localeChainCache.get(startLocale);
  if (!chain) {
    chain = [];
    let block = [start];
    while (isArray$1(block)) {
      block = appendBlockToChain(chain, block, fallback);
    }
    const defaults2 = isArray$1(fallback) || !isPlainObject$1(fallback) ? fallback : fallback["default"] ? fallback["default"] : null;
    block = isString$1(defaults2) ? [defaults2] : defaults2;
    if (isArray$1(block)) {
      appendBlockToChain(chain, block, false);
    }
    context.__localeChainCache.set(startLocale, chain);
  }
  return chain;
}
function appendBlockToChain(chain, block, blocks) {
  let follow = true;
  for (let i = 0; i < block.length && isBoolean(follow); i++) {
    const locale = block[i];
    if (isString$1(locale)) {
      follow = appendLocaleToChain(chain, block[i], blocks);
    }
  }
  return follow;
}
function appendLocaleToChain(chain, locale, blocks) {
  let follow;
  const tokens = locale.split("-");
  do {
    const target = tokens.join("-");
    follow = appendItemToChain(chain, target, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && follow === true);
  return follow;
}
function appendItemToChain(chain, target, blocks) {
  let follow = false;
  if (!chain.includes(target)) {
    follow = true;
    if (target) {
      follow = target[target.length - 1] !== "!";
      const locale = target.replace(/!/g, "");
      chain.push(locale);
      if ((isArray$1(blocks) || isPlainObject$1(blocks)) && blocks[locale]) {
        follow = blocks[locale];
      }
    }
  }
  return follow;
}
const VERSION$1 = "9.2.0-beta.28";
const NOT_REOSLVED = -1;
const DEFAULT_LOCALE = "en-US";
const MISSING_RESOLVE_VALUE = "";
function getDefaultLinkedModifiers() {
  return {
    upper: (val) => isString$1(val) ? val.toUpperCase() : val,
    lower: (val) => isString$1(val) ? val.toLowerCase() : val,
    capitalize: (val) => isString$1(val) ? `${val.charAt(0).toLocaleUpperCase()}${val.substr(1)}` : val
  };
}
let _compiler;
let _resolver;
function registerMessageResolver(resolver) {
  _resolver = resolver;
}
let _fallbacker;
function registerLocaleFallbacker(fallbacker) {
  _fallbacker = fallbacker;
}
let _additionalMeta = null;
const setAdditionalMeta = (meta) => {
  _additionalMeta = meta;
};
const getAdditionalMeta = () => _additionalMeta;
let _cid = 0;
function createCoreContext(options = {}) {
  const version2 = isString$1(options.version) ? options.version : VERSION$1;
  const locale = isString$1(options.locale) ? options.locale : DEFAULT_LOCALE;
  const fallbackLocale = isArray$1(options.fallbackLocale) || isPlainObject$1(options.fallbackLocale) || isString$1(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
  const messages2 = isPlainObject$1(options.messages) ? options.messages : { [locale]: {} };
  const datetimeFormats = isPlainObject$1(options.datetimeFormats) ? options.datetimeFormats : { [locale]: {} };
  const numberFormats = isPlainObject$1(options.numberFormats) ? options.numberFormats : { [locale]: {} };
  const modifiers = assign({}, options.modifiers || {}, getDefaultLinkedModifiers());
  const pluralRules = options.pluralRules || {};
  const missing = isFunction$1(options.missing) ? options.missing : null;
  const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  const fallbackFormat = !!options.fallbackFormat;
  const unresolving = !!options.unresolving;
  const postTranslation = isFunction$1(options.postTranslation) ? options.postTranslation : null;
  const processor = isPlainObject$1(options.processor) ? options.processor : null;
  const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  const escapeParameter = !!options.escapeParameter;
  const messageCompiler = isFunction$1(options.messageCompiler) ? options.messageCompiler : _compiler;
  const messageResolver = isFunction$1(options.messageResolver) ? options.messageResolver : _resolver || resolveWithKeyValue;
  const localeFallbacker = isFunction$1(options.localeFallbacker) ? options.localeFallbacker : _fallbacker || fallbackWithSimple;
  const onWarn = isFunction$1(options.onWarn) ? options.onWarn : warn;
  const internalOptions = options;
  const __datetimeFormatters = isObject$1(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : new Map();
  const __numberFormatters = isObject$1(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : new Map();
  const __meta = isObject$1(internalOptions.__meta) ? internalOptions.__meta : {};
  _cid++;
  const context = {
    version: version2,
    cid: _cid,
    locale,
    fallbackLocale,
    messages: messages2,
    modifiers,
    pluralRules,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackFormat,
    unresolving,
    postTranslation,
    processor,
    warnHtmlMessage,
    escapeParameter,
    messageCompiler,
    messageResolver,
    localeFallbacker,
    onWarn,
    __meta
  };
  {
    context.datetimeFormats = datetimeFormats;
    context.numberFormats = numberFormats;
    context.__datetimeFormatters = __datetimeFormatters;
    context.__numberFormatters = __numberFormatters;
  }
  if (__INTLIFY_PROD_DEVTOOLS__) {
    initI18nDevTools(context, version2, __meta);
  }
  return context;
}
function handleMissing(context, key, locale, missingWarn, type) {
  const { missing, onWarn } = context;
  if (missing !== null) {
    const ret = missing(context, locale, key, type);
    return isString$1(ret) ? ret : key;
  } else {
    return key;
  }
}
function updateFallbackLocale(ctx, locale, fallback) {
  const context = ctx;
  context.__localeChainCache = new Map();
  ctx.localeFallbacker(ctx, fallback, locale);
}
let code$1 = CompileErrorCodes.__EXTEND_POINT__;
const inc$1 = () => ++code$1;
const CoreErrorCodes = {
  INVALID_ARGUMENT: code$1,
  INVALID_DATE_ARGUMENT: inc$1(),
  INVALID_ISO_DATE_ARGUMENT: inc$1(),
  __EXTEND_POINT__: inc$1()
};
function createCoreError(code2) {
  return createCompileError(code2, null, void 0);
}
const NOOP_MESSAGE_FUNCTION = () => "";
const isMessageFunction = (val) => isFunction$1(val);
function translate(context, ...args) {
  const { fallbackFormat, postTranslation, unresolving, messageCompiler, fallbackLocale, messages: messages2 } = context;
  const [key, options] = parseTranslateArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
  const resolvedMessage = !!options.resolvedMessage;
  const defaultMsgOrKey = isString$1(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : key : fallbackFormat ? !messageCompiler ? () => key : key : "";
  const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== "";
  const locale = isString$1(options.locale) ? options.locale : context.locale;
  escapeParameter && escapeParams(options);
  let [formatScope, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
    key,
    locale,
    messages2[locale] || {}
  ];
  let format = formatScope;
  let cacheBaseKey = key;
  if (!resolvedMessage && !(isString$1(format) || isMessageFunction(format))) {
    if (enableDefaultMsg) {
      format = defaultMsgOrKey;
      cacheBaseKey = format;
    }
  }
  if (!resolvedMessage && (!(isString$1(format) || isMessageFunction(format)) || !isString$1(targetLocale))) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let occurred = false;
  const errorDetector = () => {
    occurred = true;
  };
  const msg = !isMessageFunction(format) ? compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, errorDetector) : format;
  if (occurred) {
    return format;
  }
  const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
  const msgContext = createMessageContext(ctxOptions);
  const messaged = evaluateMessage(context, msg, msgContext);
  const ret = postTranslation ? postTranslation(messaged) : messaged;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const payloads = {
      timestamp: Date.now(),
      key: isString$1(key) ? key : isMessageFunction(format) ? format.key : "",
      locale: targetLocale || (isMessageFunction(format) ? format.locale : ""),
      format: isString$1(format) ? format : isMessageFunction(format) ? format.source : "",
      message: ret
    };
    payloads.meta = assign({}, context.__meta, getAdditionalMeta() || {});
    translateDevTools(payloads);
  }
  return ret;
}
function escapeParams(options) {
  if (isArray$1(options.list)) {
    options.list = options.list.map((item) => isString$1(item) ? escapeHtml(item) : item);
  } else if (isObject$1(options.named)) {
    Object.keys(options.named).forEach((key) => {
      if (isString$1(options.named[key])) {
        options.named[key] = escapeHtml(options.named[key]);
      }
    });
  }
}
function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
  const { messages: messages2, onWarn, messageResolver: resolveValue2, localeFallbacker } = context;
  const locales = localeFallbacker(context, fallbackLocale, locale);
  let message = {};
  let targetLocale;
  let format = null;
  const type = "translate";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = locales[i];
    message = messages2[targetLocale] || {};
    if ((format = resolveValue2(message, key)) === null) {
      format = message[key];
    }
    if (isString$1(format) || isFunction$1(format))
      break;
    const missingRet = handleMissing(context, key, targetLocale, missingWarn, type);
    if (missingRet !== key) {
      format = missingRet;
    }
  }
  return [format, targetLocale, message];
}
function compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, errorDetector) {
  const { messageCompiler, warnHtmlMessage } = context;
  if (isMessageFunction(format)) {
    const msg2 = format;
    msg2.locale = msg2.locale || targetLocale;
    msg2.key = msg2.key || key;
    return msg2;
  }
  const msg = messageCompiler(format, getCompileOptions(context, targetLocale, cacheBaseKey, format, warnHtmlMessage, errorDetector));
  msg.locale = targetLocale;
  msg.key = key;
  msg.source = format;
  return msg;
}
function evaluateMessage(context, msg, msgCtx) {
  const messaged = msg(msgCtx);
  return messaged;
}
function parseTranslateArgs(...args) {
  const [arg1, arg2, arg3] = args;
  const options = {};
  if (!isString$1(arg1) && !isNumber$1(arg1) && !isMessageFunction(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const key = isNumber$1(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
  if (isNumber$1(arg2)) {
    options.plural = arg2;
  } else if (isString$1(arg2)) {
    options.default = arg2;
  } else if (isPlainObject$1(arg2) && !isEmptyObject(arg2)) {
    options.named = arg2;
  } else if (isArray$1(arg2)) {
    options.list = arg2;
  }
  if (isNumber$1(arg3)) {
    options.plural = arg3;
  } else if (isString$1(arg3)) {
    options.default = arg3;
  } else if (isPlainObject$1(arg3)) {
    assign(options, arg3);
  }
  return [key, options];
}
function getCompileOptions(context, locale, key, source2, warnHtmlMessage, errorDetector) {
  return {
    warnHtmlMessage,
    onError: (err) => {
      errorDetector && errorDetector(err);
      {
        throw err;
      }
    },
    onCacheKey: (source3) => generateFormatCacheKey(locale, key, source3)
  };
}
function getMessageContextOptions(context, locale, message, options) {
  const { modifiers, pluralRules, messageResolver: resolveValue2 } = context;
  const resolveMessage = (key) => {
    const val = resolveValue2(message, key);
    if (isString$1(val)) {
      let occurred = false;
      const errorDetector = () => {
        occurred = true;
      };
      const msg = compileMessageFormat(context, key, locale, val, key, errorDetector);
      return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
    } else if (isMessageFunction(val)) {
      return val;
    } else {
      return NOOP_MESSAGE_FUNCTION;
    }
  };
  const ctxOptions = {
    locale,
    modifiers,
    pluralRules,
    messages: resolveMessage
  };
  if (context.processor) {
    ctxOptions.processor = context.processor;
  }
  if (options.list) {
    ctxOptions.list = options.list;
  }
  if (options.named) {
    ctxOptions.named = options.named;
  }
  if (isNumber$1(options.plural)) {
    ctxOptions.pluralIndex = options.plural;
  }
  return ctxOptions;
}
function datetime(context, ...args) {
  const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __datetimeFormatters } = context;
  const [key, value, options, overrides] = parseDateTimeArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = isString$1(options.locale) ? options.locale : context.locale;
  const locales = localeFallbacker(context, fallbackLocale, locale);
  if (!isString$1(key) || key === "") {
    return new Intl.DateTimeFormat(locale).format(value);
  }
  let datetimeFormat = {};
  let targetLocale;
  let format = null;
  const type = "datetime format";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = locales[i];
    datetimeFormat = datetimeFormats[targetLocale] || {};
    format = datetimeFormat[key];
    if (isPlainObject$1(format))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
  }
  if (!isPlainObject$1(format) || !isString$1(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __datetimeFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format, overrides));
    __datetimeFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
function parseDateTimeArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  let options = {};
  let overrides = {};
  let value;
  if (isString$1(arg1)) {
    const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!matches) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
    const dateTime = matches[3] ? matches[3].trim().startsWith("T") ? `${matches[1].trim()}${matches[3].trim()}` : `${matches[1].trim()}T${matches[3].trim()}` : matches[1].trim();
    value = new Date(dateTime);
    try {
      value.toISOString();
    } catch (e) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (isDate$1(arg1)) {
    if (isNaN(arg1.getTime())) {
      throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
    }
    value = arg1;
  } else if (isNumber$1(arg1)) {
    value = arg1;
  } else {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  if (isString$1(arg2)) {
    options.key = arg2;
  } else if (isPlainObject$1(arg2)) {
    options = arg2;
  }
  if (isString$1(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject$1(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject$1(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearDateTimeFormat(ctx, locale, format) {
  const context = ctx;
  for (const key in format) {
    const id = `${locale}__${key}`;
    if (!context.__datetimeFormatters.has(id)) {
      continue;
    }
    context.__datetimeFormatters.delete(id);
  }
}
function number(context, ...args) {
  const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __numberFormatters } = context;
  const [key, value, options, overrides] = parseNumberArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = isString$1(options.locale) ? options.locale : context.locale;
  const locales = localeFallbacker(context, fallbackLocale, locale);
  if (!isString$1(key) || key === "") {
    return new Intl.NumberFormat(locale).format(value);
  }
  let numberFormat = {};
  let targetLocale;
  let format = null;
  const type = "number format";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = locales[i];
    numberFormat = numberFormats[targetLocale] || {};
    format = numberFormat[key];
    if (isPlainObject$1(format))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
  }
  if (!isPlainObject$1(format) || !isString$1(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __numberFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.NumberFormat(targetLocale, assign({}, format, overrides));
    __numberFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
function parseNumberArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  let options = {};
  let overrides = {};
  if (!isNumber$1(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const value = arg1;
  if (isString$1(arg2)) {
    options.key = arg2;
  } else if (isPlainObject$1(arg2)) {
    options = arg2;
  }
  if (isString$1(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject$1(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject$1(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearNumberFormat(ctx, locale, format) {
  const context = ctx;
  for (const key in format) {
    const id = `${locale}__${key}`;
    if (!context.__numberFormatters.has(id)) {
      continue;
    }
    context.__numberFormatters.delete(id);
  }
}
{
  if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") {
    getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
  }
}
/*!
  * vue-i18n v9.2.0-beta.28
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const VERSION = "9.2.0-beta.28";
function initFeatureFlags() {
  if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") {
    getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
  }
}
let code = CompileErrorCodes.__EXTEND_POINT__;
const inc = () => ++code;
const I18nErrorCodes = {
  UNEXPECTED_RETURN_TYPE: code,
  INVALID_ARGUMENT: inc(),
  MUST_BE_CALL_SETUP_TOP: inc(),
  NOT_INSLALLED: inc(),
  NOT_AVAILABLE_IN_LEGACY_MODE: inc(),
  REQUIRED_VALUE: inc(),
  INVALID_VALUE: inc(),
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: inc(),
  NOT_INSLALLED_WITH_PROVIDE: inc(),
  UNEXPECTED_ERROR: inc(),
  NOT_COMPATIBLE_LEGACY_VUE_I18N: inc(),
  BRIDGE_SUPPORT_VUE_2_ONLY: inc(),
  __EXTEND_POINT__: inc()
};
function createI18nError(code2, ...args) {
  return createCompileError(code2, null, void 0);
}
const TransrateVNodeSymbol = /* @__PURE__ */ makeSymbol("__transrateVNode");
const DatetimePartsSymbol = /* @__PURE__ */ makeSymbol("__datetimeParts");
const NumberPartsSymbol = /* @__PURE__ */ makeSymbol("__numberParts");
const SetPluralRulesSymbol = makeSymbol("__setPluralRules");
const InejctWithOption = /* @__PURE__ */ makeSymbol("__injectWithOption");
function handleFlatJson(obj) {
  if (!isObject$1(obj)) {
    return obj;
  }
  for (const key in obj) {
    if (!hasOwn(obj, key)) {
      continue;
    }
    if (!key.includes(".")) {
      if (isObject$1(obj[key])) {
        handleFlatJson(obj[key]);
      }
    } else {
      const subKeys = key.split(".");
      const lastIndex = subKeys.length - 1;
      let currentObj = obj;
      for (let i = 0; i < lastIndex; i++) {
        if (!(subKeys[i] in currentObj)) {
          currentObj[subKeys[i]] = {};
        }
        currentObj = currentObj[subKeys[i]];
      }
      currentObj[subKeys[lastIndex]] = obj[key];
      delete obj[key];
      if (isObject$1(currentObj[subKeys[lastIndex]])) {
        handleFlatJson(currentObj[subKeys[lastIndex]]);
      }
    }
  }
  return obj;
}
function getLocaleMessages(locale, options) {
  const { messages: messages2, __i18n, messageResolver, flatJson } = options;
  const ret = isPlainObject$1(messages2) ? messages2 : isArray$1(__i18n) ? {} : { [locale]: {} };
  if (isArray$1(__i18n)) {
    __i18n.forEach((custom) => {
      if ("locale" in custom && "resource" in custom) {
        const { locale: locale2, resource } = custom;
        if (locale2) {
          ret[locale2] = ret[locale2] || {};
          deepCopy(resource, ret[locale2]);
        } else {
          deepCopy(resource, ret);
        }
      } else {
        isString$1(custom) && deepCopy(JSON.parse(custom), ret);
      }
    });
  }
  if (messageResolver == null && flatJson) {
    for (const key in ret) {
      if (hasOwn(ret, key)) {
        handleFlatJson(ret[key]);
      }
    }
  }
  return ret;
}
const isNotObjectOrIsArray = (val) => !isObject$1(val) || isArray$1(val);
function deepCopy(src, des) {
  if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
  for (const key in src) {
    if (hasOwn(src, key)) {
      if (isNotObjectOrIsArray(src[key]) || isNotObjectOrIsArray(des[key])) {
        des[key] = src[key];
      } else {
        deepCopy(src[key], des[key]);
      }
    }
  }
}
function getComponentOptions(instance) {
  return instance.type;
}
function adjustI18nResources(global2, options, componentOptions) {
  let messages2 = isObject$1(options.messages) ? options.messages : {};
  if ("__i18nGlobal" in componentOptions) {
    messages2 = getLocaleMessages(global2.locale.value, {
      messages: messages2,
      __i18n: componentOptions.__i18nGlobal
    });
  }
  const locales = Object.keys(messages2);
  if (locales.length) {
    locales.forEach((locale) => {
      global2.mergeLocaleMessage(locale, messages2[locale]);
    });
  }
  {
    if (isObject$1(options.datetimeFormats)) {
      const locales2 = Object.keys(options.datetimeFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global2.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
        });
      }
    }
    if (isObject$1(options.numberFormats)) {
      const locales2 = Object.keys(options.numberFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global2.mergeNumberFormat(locale, options.numberFormats[locale]);
        });
      }
    }
  }
}
function createTextNode(key) {
  return vue_cjs_prod.createVNode(vue_cjs_prod.Text, null, key, 0);
}
const DEVTOOLS_META = "__INTLIFY_META__";
let composerID = 0;
function defineCoreMissingHandler(missing) {
  return (ctx, locale, key, type) => {
    return missing(locale, key, vue_cjs_prod.getCurrentInstance() || void 0, type);
  };
}
const getMetaInfo = () => {
  const instance = vue_cjs_prod.getCurrentInstance();
  let meta = null;
  return instance && (meta = getComponentOptions(instance)[DEVTOOLS_META]) ? { [DEVTOOLS_META]: meta } : null;
};
function createComposer(options = {}, VueI18nLegacy) {
  const { __root } = options;
  const _isGlobal = __root === void 0;
  let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = vue_cjs_prod.ref(__root && _inheritLocale ? __root.locale.value : isString$1(options.locale) ? options.locale : DEFAULT_LOCALE);
  const _fallbackLocale = vue_cjs_prod.ref(__root && _inheritLocale ? __root.fallbackLocale.value : isString$1(options.fallbackLocale) || isArray$1(options.fallbackLocale) || isPlainObject$1(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value);
  const _messages = vue_cjs_prod.ref(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = vue_cjs_prod.ref(isPlainObject$1(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = vue_cjs_prod.ref(isPlainObject$1(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  let _fallbackFormat = !!options.fallbackFormat;
  let _missing = isFunction$1(options.missing) ? options.missing : null;
  let _runtimeMissing = isFunction$1(options.missing) ? defineCoreMissingHandler(options.missing) : null;
  let _postTranslation = isFunction$1(options.postTranslation) ? options.postTranslation : null;
  let _warnHtmlMessage = __root ? __root.warnHtmlMessage : isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  let _escapeParameter = !!options.escapeParameter;
  const _modifiers = __root ? __root.modifiers : isPlainObject$1(options.modifiers) ? options.modifiers : {};
  let _pluralRules = options.pluralRules || __root && __root.pluralRules;
  let _context;
  function getCoreContext() {
    const ctxOptions = {
      version: VERSION,
      locale: _locale.value,
      fallbackLocale: _fallbackLocale.value,
      messages: _messages.value,
      modifiers: _modifiers,
      pluralRules: _pluralRules,
      missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
      missingWarn: _missingWarn,
      fallbackWarn: _fallbackWarn,
      fallbackFormat: _fallbackFormat,
      unresolving: true,
      postTranslation: _postTranslation === null ? void 0 : _postTranslation,
      warnHtmlMessage: _warnHtmlMessage,
      escapeParameter: _escapeParameter,
      messageResolver: options.messageResolver,
      __meta: { framework: "vue" }
    };
    {
      ctxOptions.datetimeFormats = _datetimeFormats.value;
      ctxOptions.numberFormats = _numberFormats.value;
      ctxOptions.__datetimeFormatters = isPlainObject$1(_context) ? _context.__datetimeFormatters : void 0;
      ctxOptions.__numberFormatters = isPlainObject$1(_context) ? _context.__numberFormatters : void 0;
    }
    return createCoreContext(ctxOptions);
  }
  _context = getCoreContext();
  updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value
    ];
  }
  const locale = vue_cjs_prod.computed({
    get: () => _locale.value,
    set: (val) => {
      _locale.value = val;
      _context.locale = _locale.value;
    }
  });
  const fallbackLocale = vue_cjs_prod.computed({
    get: () => _fallbackLocale.value,
    set: (val) => {
      _fallbackLocale.value = val;
      _context.fallbackLocale = _fallbackLocale.value;
      updateFallbackLocale(_context, _locale.value, val);
    }
  });
  const messages2 = vue_cjs_prod.computed(() => _messages.value);
  const datetimeFormats = /* @__PURE__ */ vue_cjs_prod.computed(() => _datetimeFormats.value);
  const numberFormats = /* @__PURE__ */ vue_cjs_prod.computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return isFunction$1(_postTranslation) ? _postTranslation : null;
  }
  function setPostTranslationHandler(handler) {
    _postTranslation = handler;
    _context.postTranslation = handler;
  }
  function getMissingHandler() {
    return _missing;
  }
  function setMissingHandler(handler) {
    if (handler !== null) {
      _runtimeMissing = defineCoreMissingHandler(handler);
    }
    _missing = handler;
    _context.missing = _runtimeMissing;
  }
  function wrapWithDeps(fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) {
    trackReactivityValues();
    let ret;
    if (__INTLIFY_PROD_DEVTOOLS__) {
      try {
        setAdditionalMeta(getMetaInfo());
        ret = fn(_context);
      } finally {
        setAdditionalMeta(null);
      }
    } else {
      ret = fn(_context);
    }
    if (isNumber$1(ret) && ret === NOT_REOSLVED) {
      const [key, arg2] = argumentParser();
      return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
    } else if (successCondition(ret)) {
      return ret;
    } else {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
    }
  }
  function t(...args) {
    return wrapWithDeps((context) => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), "translate", (root) => Reflect.apply(root.t, root, [...args]), (key) => key, (val) => isString$1(val));
  }
  function rt(...args) {
    const [arg1, arg2, arg3] = args;
    if (arg3 && !isObject$1(arg3)) {
      throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
    }
    return t(...[arg1, arg2, assign({ resolvedMessage: true }, arg3 || {})]);
  }
  function d(...args) {
    return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root) => Reflect.apply(root.d, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString$1(val));
  }
  function n(...args) {
    return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root) => Reflect.apply(root.n, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString$1(val));
  }
  function normalize(values) {
    return values.map((val) => isString$1(val) ? createTextNode(val) : val);
  }
  const interpolate = (val) => val;
  const processor = {
    normalize,
    interpolate,
    type: "vnode"
  };
  function transrateVNode(...args) {
    return wrapWithDeps((context) => {
      let ret;
      const _context2 = context;
      try {
        _context2.processor = processor;
        ret = Reflect.apply(translate, null, [_context2, ...args]);
      } finally {
        _context2.processor = null;
      }
      return ret;
    }, () => parseTranslateArgs(...args), "translate", (root) => root[TransrateVNodeSymbol](...args), (key) => [createTextNode(key)], (val) => isArray$1(val));
  }
  function numberParts(...args) {
    return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root) => root[NumberPartsSymbol](...args), () => [], (val) => isString$1(val) || isArray$1(val));
  }
  function datetimeParts(...args) {
    return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root) => root[DatetimePartsSymbol](...args), () => [], (val) => isString$1(val) || isArray$1(val));
  }
  function setPluralRules(rules) {
    _pluralRules = rules;
    _context.pluralRules = _pluralRules;
  }
  function te(key, locale2) {
    const targetLocale = isString$1(locale2) ? locale2 : _locale.value;
    const message = getLocaleMessage(targetLocale);
    return _context.messageResolver(message, key) !== null;
  }
  function resolveMessages(key) {
    let messages3 = null;
    const locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
    for (let i = 0; i < locales.length; i++) {
      const targetLocaleMessages = _messages.value[locales[i]] || {};
      const messageValue = _context.messageResolver(targetLocaleMessages, key);
      if (messageValue != null) {
        messages3 = messageValue;
        break;
      }
    }
    return messages3;
  }
  function tm(key) {
    const messages3 = resolveMessages(key);
    return messages3 != null ? messages3 : __root ? __root.tm(key) || {} : {};
  }
  function getLocaleMessage(locale2) {
    return _messages.value[locale2] || {};
  }
  function setLocaleMessage(locale2, message) {
    _messages.value[locale2] = message;
    _context.messages = _messages.value;
  }
  function mergeLocaleMessage(locale2, message) {
    _messages.value[locale2] = _messages.value[locale2] || {};
    deepCopy(message, _messages.value[locale2]);
    _context.messages = _messages.value;
  }
  function getDateTimeFormat(locale2) {
    return _datetimeFormats.value[locale2] || {};
  }
  function setDateTimeFormat(locale2, format) {
    _datetimeFormats.value[locale2] = format;
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format);
  }
  function mergeDateTimeFormat(locale2, format) {
    _datetimeFormats.value[locale2] = assign(_datetimeFormats.value[locale2] || {}, format);
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format);
  }
  function getNumberFormat(locale2) {
    return _numberFormats.value[locale2] || {};
  }
  function setNumberFormat(locale2, format) {
    _numberFormats.value[locale2] = format;
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format);
  }
  function mergeNumberFormat(locale2, format) {
    _numberFormats.value[locale2] = assign(_numberFormats.value[locale2] || {}, format);
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format);
  }
  composerID++;
  if (__root) {
    vue_cjs_prod.watch(__root.locale, (val) => {
      if (_inheritLocale) {
        _locale.value = val;
        _context.locale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
    vue_cjs_prod.watch(__root.fallbackLocale, (val) => {
      if (_inheritLocale) {
        _fallbackLocale.value = val;
        _context.fallbackLocale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
  }
  const composer = {
    id: composerID,
    locale,
    fallbackLocale,
    get inheritLocale() {
      return _inheritLocale;
    },
    set inheritLocale(val) {
      _inheritLocale = val;
      if (val && __root) {
        _locale.value = __root.locale.value;
        _fallbackLocale.value = __root.fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    },
    get availableLocales() {
      return Object.keys(_messages.value).sort();
    },
    messages: messages2,
    get modifiers() {
      return _modifiers;
    },
    get pluralRules() {
      return _pluralRules || {};
    },
    get isGlobal() {
      return _isGlobal;
    },
    get missingWarn() {
      return _missingWarn;
    },
    set missingWarn(val) {
      _missingWarn = val;
      _context.missingWarn = _missingWarn;
    },
    get fallbackWarn() {
      return _fallbackWarn;
    },
    set fallbackWarn(val) {
      _fallbackWarn = val;
      _context.fallbackWarn = _fallbackWarn;
    },
    get fallbackRoot() {
      return _fallbackRoot;
    },
    set fallbackRoot(val) {
      _fallbackRoot = val;
    },
    get fallbackFormat() {
      return _fallbackFormat;
    },
    set fallbackFormat(val) {
      _fallbackFormat = val;
      _context.fallbackFormat = _fallbackFormat;
    },
    get warnHtmlMessage() {
      return _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      _warnHtmlMessage = val;
      _context.warnHtmlMessage = val;
    },
    get escapeParameter() {
      return _escapeParameter;
    },
    set escapeParameter(val) {
      _escapeParameter = val;
      _context.escapeParameter = val;
    },
    t,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    [SetPluralRulesSymbol]: setPluralRules
  };
  {
    composer.datetimeFormats = datetimeFormats;
    composer.numberFormats = numberFormats;
    composer.rt = rt;
    composer.te = te;
    composer.tm = tm;
    composer.d = d;
    composer.n = n;
    composer.getDateTimeFormat = getDateTimeFormat;
    composer.setDateTimeFormat = setDateTimeFormat;
    composer.mergeDateTimeFormat = mergeDateTimeFormat;
    composer.getNumberFormat = getNumberFormat;
    composer.setNumberFormat = setNumberFormat;
    composer.mergeNumberFormat = mergeNumberFormat;
    composer[InejctWithOption] = options.__injectWithOption;
    composer[TransrateVNodeSymbol] = transrateVNode;
    composer[DatetimePartsSymbol] = datetimeParts;
    composer[NumberPartsSymbol] = numberParts;
  }
  return composer;
}
function convertComposerOptions(options) {
  const locale = isString$1(options.locale) ? options.locale : DEFAULT_LOCALE;
  const fallbackLocale = isString$1(options.fallbackLocale) || isArray$1(options.fallbackLocale) || isPlainObject$1(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
  const missing = isFunction$1(options.missing) ? options.missing : void 0;
  const missingWarn = isBoolean(options.silentTranslationWarn) || isRegExp(options.silentTranslationWarn) ? !options.silentTranslationWarn : true;
  const fallbackWarn = isBoolean(options.silentFallbackWarn) || isRegExp(options.silentFallbackWarn) ? !options.silentFallbackWarn : true;
  const fallbackRoot = isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  const fallbackFormat = !!options.formatFallbackMessages;
  const modifiers = isPlainObject$1(options.modifiers) ? options.modifiers : {};
  const pluralizationRules = options.pluralizationRules;
  const postTranslation = isFunction$1(options.postTranslation) ? options.postTranslation : void 0;
  const warnHtmlMessage = isString$1(options.warnHtmlInMessage) ? options.warnHtmlInMessage !== "off" : true;
  const escapeParameter = !!options.escapeParameterHtml;
  const inheritLocale = isBoolean(options.sync) ? options.sync : true;
  let messages2 = options.messages;
  if (isPlainObject$1(options.sharedMessages)) {
    const sharedMessages = options.sharedMessages;
    const locales = Object.keys(sharedMessages);
    messages2 = locales.reduce((messages3, locale2) => {
      const message = messages3[locale2] || (messages3[locale2] = {});
      assign(message, sharedMessages[locale2]);
      return messages3;
    }, messages2 || {});
  }
  const { __i18n, __root, __injectWithOption } = options;
  const datetimeFormats = options.datetimeFormats;
  const numberFormats = options.numberFormats;
  const flatJson = options.flatJson;
  return {
    locale,
    fallbackLocale,
    messages: messages2,
    flatJson,
    datetimeFormats,
    numberFormats,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackRoot,
    fallbackFormat,
    modifiers,
    pluralRules: pluralizationRules,
    postTranslation,
    warnHtmlMessage,
    escapeParameter,
    messageResolver: options.messageResolver,
    inheritLocale,
    __i18n,
    __root,
    __injectWithOption
  };
}
function createVueI18n(options = {}, VueI18nLegacy) {
  {
    const composer = createComposer(convertComposerOptions(options));
    const vueI18n = {
      id: composer.id,
      get locale() {
        return composer.locale.value;
      },
      set locale(val) {
        composer.locale.value = val;
      },
      get fallbackLocale() {
        return composer.fallbackLocale.value;
      },
      set fallbackLocale(val) {
        composer.fallbackLocale.value = val;
      },
      get messages() {
        return composer.messages.value;
      },
      get datetimeFormats() {
        return composer.datetimeFormats.value;
      },
      get numberFormats() {
        return composer.numberFormats.value;
      },
      get availableLocales() {
        return composer.availableLocales;
      },
      get formatter() {
        return {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(val) {
      },
      get missing() {
        return composer.getMissingHandler();
      },
      set missing(handler) {
        composer.setMissingHandler(handler);
      },
      get silentTranslationWarn() {
        return isBoolean(composer.missingWarn) ? !composer.missingWarn : composer.missingWarn;
      },
      set silentTranslationWarn(val) {
        composer.missingWarn = isBoolean(val) ? !val : val;
      },
      get silentFallbackWarn() {
        return isBoolean(composer.fallbackWarn) ? !composer.fallbackWarn : composer.fallbackWarn;
      },
      set silentFallbackWarn(val) {
        composer.fallbackWarn = isBoolean(val) ? !val : val;
      },
      get modifiers() {
        return composer.modifiers;
      },
      get formatFallbackMessages() {
        return composer.fallbackFormat;
      },
      set formatFallbackMessages(val) {
        composer.fallbackFormat = val;
      },
      get postTranslation() {
        return composer.getPostTranslationHandler();
      },
      set postTranslation(handler) {
        composer.setPostTranslationHandler(handler);
      },
      get sync() {
        return composer.inheritLocale;
      },
      set sync(val) {
        composer.inheritLocale = val;
      },
      get warnHtmlInMessage() {
        return composer.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(val) {
        composer.warnHtmlMessage = val !== "off";
      },
      get escapeParameterHtml() {
        return composer.escapeParameter;
      },
      set escapeParameterHtml(val) {
        composer.escapeParameter = val;
      },
      get preserveDirectiveContent() {
        return true;
      },
      set preserveDirectiveContent(val) {
      },
      get pluralizationRules() {
        return composer.pluralRules || {};
      },
      __composer: composer,
      t(...args) {
        const [arg1, arg2, arg3] = args;
        const options2 = {};
        let list = null;
        let named = null;
        if (!isString$1(arg1)) {
          throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
        }
        const key = arg1;
        if (isString$1(arg2)) {
          options2.locale = arg2;
        } else if (isArray$1(arg2)) {
          list = arg2;
        } else if (isPlainObject$1(arg2)) {
          named = arg2;
        }
        if (isArray$1(arg3)) {
          list = arg3;
        } else if (isPlainObject$1(arg3)) {
          named = arg3;
        }
        return Reflect.apply(composer.t, composer, [
          key,
          list || named || {},
          options2
        ]);
      },
      rt(...args) {
        return Reflect.apply(composer.rt, composer, [...args]);
      },
      tc(...args) {
        const [arg1, arg2, arg3] = args;
        const options2 = { plural: 1 };
        let list = null;
        let named = null;
        if (!isString$1(arg1)) {
          throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
        }
        const key = arg1;
        if (isString$1(arg2)) {
          options2.locale = arg2;
        } else if (isNumber$1(arg2)) {
          options2.plural = arg2;
        } else if (isArray$1(arg2)) {
          list = arg2;
        } else if (isPlainObject$1(arg2)) {
          named = arg2;
        }
        if (isString$1(arg3)) {
          options2.locale = arg3;
        } else if (isArray$1(arg3)) {
          list = arg3;
        } else if (isPlainObject$1(arg3)) {
          named = arg3;
        }
        return Reflect.apply(composer.t, composer, [
          key,
          list || named || {},
          options2
        ]);
      },
      te(key, locale) {
        return composer.te(key, locale);
      },
      tm(key) {
        return composer.tm(key);
      },
      getLocaleMessage(locale) {
        return composer.getLocaleMessage(locale);
      },
      setLocaleMessage(locale, message) {
        composer.setLocaleMessage(locale, message);
      },
      mergeLocaleMessage(locale, message) {
        composer.mergeLocaleMessage(locale, message);
      },
      d(...args) {
        return Reflect.apply(composer.d, composer, [...args]);
      },
      getDateTimeFormat(locale) {
        return composer.getDateTimeFormat(locale);
      },
      setDateTimeFormat(locale, format) {
        composer.setDateTimeFormat(locale, format);
      },
      mergeDateTimeFormat(locale, format) {
        composer.mergeDateTimeFormat(locale, format);
      },
      n(...args) {
        return Reflect.apply(composer.n, composer, [...args]);
      },
      getNumberFormat(locale) {
        return composer.getNumberFormat(locale);
      },
      setNumberFormat(locale, format) {
        composer.setNumberFormat(locale, format);
      },
      mergeNumberFormat(locale, format) {
        composer.mergeNumberFormat(locale, format);
      },
      getChoiceIndex(choice, choicesLength) {
        return -1;
      },
      __onComponentInstanceCreated(target) {
        const { componentInstanceCreatedListener } = options;
        if (componentInstanceCreatedListener) {
          componentInstanceCreatedListener(target, vueI18n);
        }
      }
    };
    return vueI18n;
  }
}
const baseFormatProps = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    validator: (val) => val === "parent" || val === "global",
    default: "parent"
  },
  i18n: {
    type: Object
  }
};
function getInterpolateArg({ slots }, keys) {
  if (keys.length === 1 && keys[0] === "default") {
    const ret = slots.default ? slots.default() : [];
    return ret.reduce((slot, current) => {
      return slot = [
        ...slot,
        ...isArray$1(current.children) ? current.children : [current]
      ];
    }, []);
  } else {
    return keys.reduce((arg, key) => {
      const slot = slots[key];
      if (slot) {
        arg[key] = slot();
      }
      return arg;
    }, {});
  }
}
function getFragmentableTag(tag) {
  return vue_cjs_prod.Fragment;
}
const Translation = {
  name: "i18n-t",
  props: assign({
    keypath: {
      type: String,
      required: true
    },
    plural: {
      type: [Number, String],
      validator: (val) => isNumber$1(val) || !isNaN(val)
    }
  }, baseFormatProps),
  setup(props, context) {
    const { slots, attrs } = context;
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    const keys = Object.keys(slots).filter((key) => key !== "_");
    return () => {
      const options = {};
      if (props.locale) {
        options.locale = props.locale;
      }
      if (props.plural !== void 0) {
        options.plural = isString$1(props.plural) ? +props.plural : props.plural;
      }
      const arg = getInterpolateArg(context, keys);
      const children = i18n[TransrateVNodeSymbol](props.keypath, arg, options);
      const assignedAttrs = assign({}, attrs);
      const tag = isString$1(props.tag) || isObject$1(props.tag) ? props.tag : getFragmentableTag();
      return vue_cjs_prod.h(tag, assignedAttrs, children);
    };
  }
};
function renderFormatter(props, context, slotKeys, partFormatter) {
  const { slots, attrs } = context;
  return () => {
    const options = { part: true };
    let overrides = {};
    if (props.locale) {
      options.locale = props.locale;
    }
    if (isString$1(props.format)) {
      options.key = props.format;
    } else if (isObject$1(props.format)) {
      if (isString$1(props.format.key)) {
        options.key = props.format.key;
      }
      overrides = Object.keys(props.format).reduce((options2, prop) => {
        return slotKeys.includes(prop) ? assign({}, options2, { [prop]: props.format[prop] }) : options2;
      }, {});
    }
    const parts = partFormatter(...[props.value, options, overrides]);
    let children = [options.key];
    if (isArray$1(parts)) {
      children = parts.map((part, index2) => {
        const slot = slots[part.type];
        return slot ? slot({ [part.type]: part.value, index: index2, parts }) : [part.value];
      });
    } else if (isString$1(parts)) {
      children = [parts];
    }
    const assignedAttrs = assign({}, attrs);
    const tag = isString$1(props.tag) || isObject$1(props.tag) ? props.tag : getFragmentableTag();
    return vue_cjs_prod.h(tag, assignedAttrs, children);
  };
}
const NUMBER_FORMAT_KEYS = [
  "localeMatcher",
  "style",
  "unit",
  "unitDisplay",
  "currency",
  "currencyDisplay",
  "useGrouping",
  "numberingSystem",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "notation",
  "formatMatcher"
];
const NumberFormat = {
  name: "i18n-n",
  props: assign({
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  setup(props, context) {
    const i18n = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
    return renderFormatter(props, context, NUMBER_FORMAT_KEYS, (...args) => i18n[NumberPartsSymbol](...args));
  }
};
const DATETIME_FORMAT_KEYS = [
  "dateStyle",
  "timeStyle",
  "fractionalSecondDigits",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "localeMatcher",
  "timeZone",
  "hour12",
  "hourCycle",
  "formatMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName"
];
const DatetimeFormat = {
  name: "i18n-d",
  props: assign({
    value: {
      type: [Number, Date],
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  setup(props, context) {
    const i18n = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
    return renderFormatter(props, context, DATETIME_FORMAT_KEYS, (...args) => i18n[DatetimePartsSymbol](...args));
  }
};
function getComposer$2(i18n, instance) {
  const i18nInternal = i18n;
  if (i18n.mode === "composition") {
    return i18nInternal.__getInstance(instance) || i18n.global;
  } else {
    const vueI18n = i18nInternal.__getInstance(instance);
    return vueI18n != null ? vueI18n.__composer : i18n.globalThis.__composer;
  }
}
function vTDirective(i18n) {
  const bind3 = (el, { instance, value, modifiers }) => {
    if (!instance || !instance.$) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const composer = getComposer$2(i18n, instance.$);
    const parsedValue = parseValue(value);
    el.textContent = Reflect.apply(composer.t, composer, [
      ...makeParams(parsedValue)
    ]);
  };
  return {
    beforeMount: bind3,
    beforeUpdate: bind3
  };
}
function parseValue(value) {
  if (isString$1(value)) {
    return { path: value };
  } else if (isPlainObject$1(value)) {
    if (!("path" in value)) {
      throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, "path");
    }
    return value;
  } else {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
}
function makeParams(value) {
  const { path, locale, args, choice, plural } = value;
  const options = {};
  const named = args || {};
  if (isString$1(locale)) {
    options.locale = locale;
  }
  if (isNumber$1(choice)) {
    options.plural = choice;
  }
  if (isNumber$1(plural)) {
    options.plural = plural;
  }
  return [path, named, options];
}
function apply(app, i18n, ...options) {
  const pluginOptions = isPlainObject$1(options[0]) ? options[0] : {};
  const useI18nComponentName = !!pluginOptions.useI18nComponentName;
  const globalInstall = isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
  if (globalInstall) {
    app.component(!useI18nComponentName ? Translation.name : "i18n", Translation);
    app.component(NumberFormat.name, NumberFormat);
    app.component(DatetimeFormat.name, DatetimeFormat);
  }
  {
    app.directive("t", vTDirective(i18n));
  }
}
function defineMixin(vuei18n, composer, i18n) {
  return {
    beforeCreate() {
      const instance = vue_cjs_prod.getCurrentInstance();
      if (!instance) {
        throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
      }
      const options = this.$options;
      if (options.i18n) {
        const optionsI18n = options.i18n;
        if (options.__i18n) {
          optionsI18n.__i18n = options.__i18n;
        }
        optionsI18n.__root = composer;
        if (this === this.$root) {
          this.$i18n = mergeToRoot(vuei18n, optionsI18n);
        } else {
          optionsI18n.__injectWithOption = true;
          this.$i18n = createVueI18n(optionsI18n);
        }
      } else if (options.__i18n) {
        if (this === this.$root) {
          this.$i18n = mergeToRoot(vuei18n, options);
        } else {
          this.$i18n = createVueI18n({
            __i18n: options.__i18n,
            __injectWithOption: true,
            __root: composer
          });
        }
      } else {
        this.$i18n = vuei18n;
      }
      if (options.__i18nGlobal) {
        adjustI18nResources(composer, options, options);
      }
      vuei18n.__onComponentInstanceCreated(this.$i18n);
      i18n.__setInstance(instance, this.$i18n);
      this.$t = (...args) => this.$i18n.t(...args);
      this.$rt = (...args) => this.$i18n.rt(...args);
      this.$tc = (...args) => this.$i18n.tc(...args);
      this.$te = (key, locale) => this.$i18n.te(key, locale);
      this.$d = (...args) => this.$i18n.d(...args);
      this.$n = (...args) => this.$i18n.n(...args);
      this.$tm = (key) => this.$i18n.tm(key);
    },
    mounted() {
      vue_cjs_prod.nextTick(() => {
      });
    },
    unmounted() {
      const instance = vue_cjs_prod.getCurrentInstance();
      if (!instance) {
        throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
      }
      vue_cjs_prod.nextTick(() => {
        delete this.$t;
        delete this.$rt;
        delete this.$tc;
        delete this.$te;
        delete this.$d;
        delete this.$n;
        delete this.$tm;
        i18n.__deleteInstance(instance);
        delete this.$i18n;
      });
    }
  };
}
function mergeToRoot(root, options) {
  root.locale = options.locale || root.locale;
  root.fallbackLocale = options.fallbackLocale || root.fallbackLocale;
  root.missing = options.missing || root.missing;
  root.silentTranslationWarn = options.silentTranslationWarn || root.silentFallbackWarn;
  root.silentFallbackWarn = options.silentFallbackWarn || root.silentFallbackWarn;
  root.formatFallbackMessages = options.formatFallbackMessages || root.formatFallbackMessages;
  root.postTranslation = options.postTranslation || root.postTranslation;
  root.warnHtmlInMessage = options.warnHtmlInMessage || root.warnHtmlInMessage;
  root.escapeParameterHtml = options.escapeParameterHtml || root.escapeParameterHtml;
  root.sync = options.sync || root.sync;
  root.__composer[SetPluralRulesSymbol](options.pluralizationRules || root.pluralizationRules);
  const messages2 = getLocaleMessages(root.locale, {
    messages: options.messages,
    __i18n: options.__i18n
  });
  Object.keys(messages2).forEach((locale) => root.mergeLocaleMessage(locale, messages2[locale]));
  if (options.datetimeFormats) {
    Object.keys(options.datetimeFormats).forEach((locale) => root.mergeDateTimeFormat(locale, options.datetimeFormats[locale]));
  }
  if (options.numberFormats) {
    Object.keys(options.numberFormats).forEach((locale) => root.mergeNumberFormat(locale, options.numberFormats[locale]));
  }
  return root;
}
const I18nInjectionKey = /* @__PURE__ */ makeSymbol("global-vue-i18n");
function createI18n(options = {}, VueI18nLegacy) {
  const __legacyMode = isBoolean(options.legacy) ? options.legacy : true;
  const __globalInjection = !!options.globalInjection;
  const __instances = new Map();
  const __global = createGlobal(options, __legacyMode);
  const symbol = makeSymbol("");
  function __getInstance(component) {
    return __instances.get(component) || null;
  }
  function __setInstance(component, instance) {
    __instances.set(component, instance);
  }
  function __deleteInstance(component) {
    __instances.delete(component);
  }
  {
    const i18n = {
      get mode() {
        return __legacyMode ? "legacy" : "composition";
      },
      async install(app, ...options2) {
        app.__VUE_I18N_SYMBOL__ = symbol;
        app.provide(app.__VUE_I18N_SYMBOL__, i18n);
        if (!__legacyMode && __globalInjection) {
          injectGlobalFields(app, i18n.global);
        }
        {
          apply(app, i18n, ...options2);
        }
        if (__legacyMode) {
          app.mixin(defineMixin(__global, __global.__composer, i18n));
        }
      },
      get global() {
        return __global;
      },
      __instances,
      __getInstance,
      __setInstance,
      __deleteInstance
    };
    return i18n;
  }
}
function useI18n(options = {}) {
  const instance = vue_cjs_prod.getCurrentInstance();
  if (instance == null) {
    throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
  }
  if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__) {
    throw createI18nError(I18nErrorCodes.NOT_INSLALLED);
  }
  const i18n = getI18nInstance(instance);
  const global2 = getGlobalComposer(i18n);
  const componentOptions = getComponentOptions(instance);
  const scope = getScope(options, componentOptions);
  if (scope === "global") {
    adjustI18nResources(global2, options, componentOptions);
    return global2;
  }
  if (scope === "parent") {
    let composer2 = getComposer(i18n, instance, options.__useComponent);
    if (composer2 == null) {
      composer2 = global2;
    }
    return composer2;
  }
  if (i18n.mode === "legacy") {
    throw createI18nError(I18nErrorCodes.NOT_AVAILABLE_IN_LEGACY_MODE);
  }
  const i18nInternal = i18n;
  let composer = i18nInternal.__getInstance(instance);
  if (composer == null) {
    const composerOptions = assign({}, options);
    if ("__i18n" in componentOptions) {
      composerOptions.__i18n = componentOptions.__i18n;
    }
    if (global2) {
      composerOptions.__root = global2;
    }
    composer = createComposer(composerOptions);
    setupLifeCycle(i18nInternal, instance);
    i18nInternal.__setInstance(instance, composer);
  }
  return composer;
}
function createGlobal(options, legacyMode, VueI18nLegacy) {
  {
    return legacyMode ? createVueI18n(options) : createComposer(options);
  }
}
function getI18nInstance(instance) {
  {
    const i18n = vue_cjs_prod.inject(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
    if (!i18n) {
      throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSLALLED_WITH_PROVIDE);
    }
    return i18n;
  }
}
function getScope(options, componentOptions) {
  return isEmptyObject(options) ? "__i18n" in componentOptions ? "local" : "global" : !options.useScope ? "local" : options.useScope;
}
function getGlobalComposer(i18n) {
  return i18n.mode === "composition" ? i18n.global : i18n.globalThis.__composer;
}
function getComposer(i18n, target, useComponent = false) {
  let composer = null;
  const root = target.root;
  let current = target.parent;
  while (current != null) {
    const i18nInternal = i18n;
    if (i18n.mode === "composition") {
      composer = i18nInternal.__getInstance(current);
    } else {
      {
        const vueI18n = i18nInternal.__getInstance(current);
        if (vueI18n != null) {
          composer = vueI18n.__composer;
          if (useComponent && composer && !composer[InejctWithOption]) {
            composer = null;
          }
        }
      }
    }
    if (composer != null) {
      break;
    }
    if (root === current) {
      break;
    }
    current = current.parent;
  }
  return composer;
}
function setupLifeCycle(i18n, target, composer) {
  {
    vue_cjs_prod.onMounted(() => {
    }, target);
    vue_cjs_prod.onUnmounted(() => {
      i18n.__deleteInstance(target);
    }, target);
  }
}
const globalExportProps = [
  "locale",
  "fallbackLocale",
  "availableLocales"
];
const globalExportMethods = ["t", "rt", "d", "n", "tm"];
function injectGlobalFields(app, composer) {
  const i18n = Object.create(null);
  globalExportProps.forEach((prop) => {
    const desc = Object.getOwnPropertyDescriptor(composer, prop);
    if (!desc) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const wrap2 = vue_cjs_prod.isRef(desc.value) ? {
      get() {
        return desc.value.value;
      },
      set(val) {
        desc.value.value = val;
      }
    } : {
      get() {
        return desc.get && desc.get();
      }
    };
    Object.defineProperty(i18n, prop, wrap2);
  });
  app.config.globalProperties.$i18n = i18n;
  globalExportMethods.forEach((method) => {
    const desc = Object.getOwnPropertyDescriptor(composer, method);
    if (!desc || !desc.value) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
  });
}
registerMessageResolver(resolveValue);
registerLocaleFallbacker(fallbackWithLocaleChain);
{
  initFeatureFlags();
}
if (__INTLIFY_PROD_DEVTOOLS__) {
  const target = getGlobalThis();
  target.__INTLIFY__ = true;
  setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const optionsLoader = () => Promise.resolve({ "locale": "zh" });
const localeEn_564a1578 = {
  "hamburger": {
    "myTeams": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["My Team"]);
    }
  },
  "jobDetails": {
    "description": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Description"]);
    },
    "languages": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Languages"]);
    },
    "services": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Services"]);
    },
    "enquiry": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Enquiry"]);
    }
  }
};
const localeZh_564a17fd = {
  "hamburger": {
    "myTeams": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["My Team"]);
    }
  },
  "jobDetails": {
    "description": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u63CF\u8FF0"]);
    },
    "languages": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6240\u9700\u8A9E\u8A00"]);
    },
    "services": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u670D\u52D9\u985E\u5225"]);
    },
    "enquiry": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u67E5\u8A62"]);
    }
  }
};
const messages = { "en": localeEn_564a1578, "zh": localeZh_564a17fd };
const isEmpty = (obj) => Object.keys(obj).length === 0;
const plugin_c12d6c7e = defineNuxtPlugin(async (nuxt) => {
  const { vueApp: app } = nuxt;
  const loadedOptions = await optionsLoader();
  if (!isEmpty(messages)) {
    loadedOptions.messages = messages;
  }
  const i18n = createI18n(__spreadValues({
    legacy: false,
    globalInjection: true,
    locale: "en"
  }, loadedOptions));
  app.use(i18n);
});
var __defProp2 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b));
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];
var createElement = (tag, attrs, document2) => {
  const el = document2.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};
var getTagKey = (props) => {
  if (props.key !== void 0) {
    return { name: "key", value: props.key };
  }
  if (props.name !== void 0) {
    return { name: "name", value: props.name };
  }
  if (props.property !== void 0) {
    return {
      name: "property",
      value: props.property
    };
  }
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues2({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      el.removeAttribute(key);
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var insertTags = (tags, document2 = window.document) => {
  const head = document2.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
      if (j) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document2.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  const newElements = [];
  let title;
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of tags) {
    if (tag.tag === "title") {
      title = tag.props.children;
      continue;
    }
    if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
      continue;
    }
    if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
      continue;
    }
    if (tag.tag === "meta") {
      const key = getTagKey(tag.props);
      if (key) {
        const elementList = [
          ...head.querySelectorAll(`meta[${key.name}="${key.value}"]`)
        ];
        for (const el of elementList) {
          if (!oldElements.includes(el)) {
            oldElements.push(el);
          }
        }
      }
    }
    newElements.push(createElement(tag.tag, tag.props, document2));
  }
  oldElements.forEach((el) => {
    if (el.nextSibling && el.nextSibling.nodeType === Node.TEXT_NODE) {
      el.nextSibling.remove();
    }
    el.remove();
  });
  if (title !== void 0) {
    document2.title = title;
  }
  setAttrs(document2.documentElement, htmlAttrs);
  setAttrs(document2.body, bodyAttrs);
  newElements.forEach((el) => {
    head.insertBefore(el, headCountEl);
  });
  headCountEl.setAttribute("content", "" + newElements.length);
};
var createHead = () => {
  let allHeadObjs = [];
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base") {
            const key = getTagKey(tag.props);
            if (key) {
              let index2 = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index2 = i;
                  break;
                }
              }
              if (index2 !== -1) {
                deduped.splice(index2, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document2) {
      insertTags(head.headTags, document2);
    }
  };
  return head;
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps2(__spreadValues2({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps2(__spreadValues2({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
const vueuseHead_db96dc5a = defineNuxtPlugin((nuxt) => {
  const head = createHead();
  nuxt.vueApp.use(head);
  nuxt._useMeta = (meta) => {
    const headObj = vue_cjs_prod.ref(meta);
    head.addHeadObjs(headObj);
    {
      return;
    }
  };
  {
    nuxt.ssrContext.renderMeta = () => renderHeadToString(head);
  }
});
function useMeta(meta) {
  const resolvedMeta = isFunction_1(meta) ? computed_1(meta) : meta;
  useNuxtApp()._useMeta(resolvedMeta);
}
const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useMeta(() => metaFactory(__spreadValues(__spreadValues({}, removeUndefinedProps(props)), ctx.attrs), ctx));
  return () => {
    var _a2, _b;
    return renderChild ? (_b = (_a2 = ctx.slots).default) == null ? void 0 : _b.call(_a2) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = vue_cjs_prod.defineComponent({
  name: "Script",
  props: __spreadProps(__spreadValues({}, globalProps), {
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  }),
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
const Link = vue_cjs_prod.defineComponent({
  name: "Link",
  props: __spreadProps(__spreadValues({}, globalProps), {
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  }),
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
const Base = vue_cjs_prod.defineComponent({
  name: "Base",
  props: __spreadProps(__spreadValues({}, globalProps), {
    href: String,
    target: String
  }),
  setup: setupForUseMeta((base) => ({
    base
  }))
});
const Title = vue_cjs_prod.defineComponent({
  name: "Title",
  setup: setupForUseMeta((_, { slots }) => {
    var _a2, _b;
    const title = ((_b = (_a2 = slots.default()) == null ? void 0 : _a2[0]) == null ? void 0 : _b.children) || null;
    return {
      title
    };
  })
});
const Meta = vue_cjs_prod.defineComponent({
  name: "Meta",
  props: __spreadProps(__spreadValues({}, globalProps), {
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  }),
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
const Style = vue_cjs_prod.defineComponent({
  name: "Style",
  props: __spreadProps(__spreadValues({}, globalProps), {
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  }),
  setup: setupForUseMeta((props, { slots }) => {
    var _a2, _b, _c;
    const style = __spreadValues({}, props);
    const textContent = (_c = (_b = (_a2 = slots.default) == null ? void 0 : _a2.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
const Head = vue_cjs_prod.defineComponent({
  name: "Head",
  setup: (_props, ctx) => ctx.slots.default
});
const Html = vue_cjs_prod.defineComponent({
  name: "Html",
  props: __spreadProps(__spreadValues({}, globalProps), {
    manifest: String,
    version: String,
    xmlns: String
  }),
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
const Body = vue_cjs_prod.defineComponent({
  name: "Body",
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const Components = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  Script,
  Link,
  Base,
  Title,
  Meta,
  Style,
  Head,
  Html,
  Body
});
const metaConfig = { "globalMeta": { "meta": [{ "charset": "utf-8" }, { "name": "viewport", "content": "width=device-width, initial-scale=1" }], "link": [], "style": [], "script": [] }, "mixinKey": "created" };
const plugin_7bf64fc7 = defineNuxtPlugin((nuxtApp) => {
  useMeta(metaConfig.globalMeta);
  nuxtApp.vueApp.mixin({
    [metaConfig.mixinKey]() {
      var _a2;
      const instance = vue_cjs_prod.getCurrentInstance();
      const options = (instance == null ? void 0 : instance.type) || ((_a2 = instance == null ? void 0 : instance.proxy) == null ? void 0 : _a2.$options);
      if (!options || !("head" in options)) {
        return;
      }
      useMeta(options.head);
    }
  });
  for (const name2 in Components) {
    nuxtApp.vueApp.component(name2, Components[name2]);
  }
});
const _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main$1d = {
  name: "NuxtChild"
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RouterView = vue_cjs_prod.resolveComponent("RouterView");
  _push(serverRenderer.exports.ssrRenderComponent(_component_RouterView, _attrs, {
    default: vue_cjs_prod.withCtx(({ Component }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        serverRenderer.exports.ssrRenderVNode(_push2, vue_cjs_prod.createVNode(vue_cjs_prod.resolveDynamicComponent(Component), {
          key: _ctx.$route.path
        }, null), _parent2, _scopeId);
      } else {
        return [
          (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.resolveDynamicComponent(Component), {
            key: _ctx.$route.path
          }))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1d = _sfc_main$1d.setup;
_sfc_main$1d.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/pages/runtime/child.vue");
  return _sfc_setup$1d ? _sfc_setup$1d(props, ctx) : void 0;
};
const NuxtChild = /* @__PURE__ */ _export_sfc(_sfc_main$1d, [["ssrRender", _sfc_ssrRender$7]]);
const layouts = {
  "default": vue_cjs_prod.defineAsyncComponent({ suspensible: false, loader: () => Promise.resolve().then(function() {
    return _default$1;
  }) }),
  "login": vue_cjs_prod.defineAsyncComponent({ suspensible: false, loader: () => Promise.resolve().then(function() {
    return login$1;
  }) }),
  "teams": vue_cjs_prod.defineAsyncComponent({ suspensible: false, loader: () => Promise.resolve().then(function() {
    return teams$1;
  }) }),
  "teams-mobile": vue_cjs_prod.defineAsyncComponent({ suspensible: false, loader: () => Promise.resolve().then(function() {
    return teamsMobile$1;
  }) })
};
const NuxtLayout = vue_cjs_prod.defineComponent({
  props: {
    name: {
      type: [String, Boolean],
      default: "default"
    }
  },
  setup(props, context) {
    return () => {
      const layout = props.name;
      if (!layouts[layout]) {
        return context.slots.default();
      }
      return vue_cjs_prod.h(layouts[layout], props, context.slots);
    };
  }
});
const _sfc_main$1c = {
  name: "NuxtPage",
  components: { NuxtLayout },
  props: {
    layout: {
      type: String,
      default: null
    }
  },
  setup() {
    const updatedComponentLayout = null;
    const nuxtApp = useNuxtApp();
    function onSuspensePending(Component) {
      return nuxtApp.callHook("page:start", Component);
    }
    function onSuspenseResolved(Component) {
      return nuxtApp.callHook("page:finish", Component);
    }
    return {
      updatedComponentLayout,
      onSuspensePending,
      onSuspenseResolved
    };
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RouterView = vue_cjs_prod.resolveComponent("RouterView");
  const _component_NuxtLayout = vue_cjs_prod.resolveComponent("NuxtLayout");
  _push(serverRenderer.exports.ssrRenderComponent(_component_RouterView, _attrs, {
    default: vue_cjs_prod.withCtx(({ Component }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (Component) {
          _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLayout, {
            name: $props.layout || $setup.updatedComponentLayout || Component.type.layout
          }, {
            default: vue_cjs_prod.withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                serverRenderer.exports.ssrRenderSuspense(_push3, {
                  default: () => {
                    serverRenderer.exports.ssrRenderVNode(_push3, vue_cjs_prod.createVNode(vue_cjs_prod.resolveDynamicComponent(Component), {
                      key: _ctx.$route.path
                    }, null), _parent3, _scopeId2);
                  },
                  _: 2
                });
              } else {
                return [
                  vue_cjs_prod.createVNode(vue_cjs_prod.Transition, {
                    name: "page",
                    mode: "out-in"
                  }, {
                    default: vue_cjs_prod.withCtx(() => [
                      (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.Suspense, {
                        onPending: () => $setup.onSuspensePending(Component),
                        onResolve: () => $setup.onSuspenseResolved(Component)
                      }, {
                        default: vue_cjs_prod.withCtx(() => [
                          (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.resolveDynamicComponent(Component), {
                            key: _ctx.$route.path
                          }))
                        ]),
                        _: 2
                      }, 1032, ["onPending", "onResolve"]))
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          Component ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_NuxtLayout, {
            key: 0,
            name: $props.layout || $setup.updatedComponentLayout || Component.type.layout
          }, {
            default: vue_cjs_prod.withCtx(() => [
              vue_cjs_prod.createVNode(vue_cjs_prod.Transition, {
                name: "page",
                mode: "out-in"
              }, {
                default: vue_cjs_prod.withCtx(() => [
                  (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.Suspense, {
                    onPending: () => $setup.onSuspensePending(Component),
                    onResolve: () => $setup.onSuspenseResolved(Component)
                  }, {
                    default: vue_cjs_prod.withCtx(() => [
                      (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.resolveDynamicComponent(Component), {
                        key: _ctx.$route.path
                      }))
                    ]),
                    _: 2
                  }, 1032, ["onPending", "onResolve"]))
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1032, ["name"])) : vue_cjs_prod.createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1c = _sfc_main$1c.setup;
_sfc_main$1c.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/pages/runtime/page.vue");
  return _sfc_setup$1c ? _sfc_setup$1c(props, ctx) : void 0;
};
const NuxtPage = /* @__PURE__ */ _export_sfc(_sfc_main$1c, [["ssrRender", _sfc_ssrRender$6]]);
const routes = [
  {
    "name": "id",
    "path": "/:id",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/[id].vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return _id_$9;
    })
  },
  {
    "name": "about",
    "path": "/about",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/about/index.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return index$d;
    })
  },
  {
    "name": "bookmark-components-AvatarCard",
    "path": "/bookmark/components/AvatarCard",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/bookmark/components/AvatarCard.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return AvatarCard$1;
    })
  },
  {
    "name": "bookmark-components-DescriptionCard",
    "path": "/bookmark/components/DescriptionCard",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/bookmark/components/DescriptionCard.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return DescriptionCard$2;
    })
  },
  {
    "name": "bookmark-components-SearchBar",
    "path": "/bookmark/components/SearchBar",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/bookmark/components/SearchBar.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return SearchBar$2;
    })
  },
  {
    "name": "bookmark",
    "path": "/bookmark",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/bookmark/index.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return index$b;
    })
  },
  {
    "name": "components-ContactUsCard",
    "path": "/components/ContactUsCard",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/components/ContactUsCard.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return ContactUsCard;
    })
  },
  {
    "name": "components-LeftTitle",
    "path": "/components/LeftTitle",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/components/LeftTitle.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return LeftTitle;
    })
  },
  {
    "name": "components-NewsCard",
    "path": "/components/NewsCard",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/components/NewsCard.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return NewsCard;
    })
  },
  {
    "name": "explore-id",
    "path": "/explore/:id",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/explore/[id].vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return _id_$7;
    })
  },
  {
    "name": "explore-components-AvatarCard",
    "path": "/explore/components/AvatarCard",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/explore/components/AvatarCard.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return AvatarCard;
    })
  },
  {
    "name": "explore-components-DescriptionCard",
    "path": "/explore/components/DescriptionCard",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/explore/components/DescriptionCard.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return DescriptionCard$1;
    })
  },
  {
    "name": "explore-components-DescriptionCardMobile",
    "path": "/explore/components/DescriptionCardMobile",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/explore/components/DescriptionCardMobile.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return DescriptionCardMobile;
    })
  },
  {
    "name": "explore-components-SearchBar",
    "path": "/explore/components/SearchBar",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/explore/components/SearchBar.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return SearchBar$1;
    })
  },
  {
    "name": "explore-components-Tab",
    "path": "/explore/components/Tab",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/explore/components/Tab.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return Tab$1;
    })
  },
  {
    "name": "explore",
    "path": "/explore",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/explore/index.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return index$a;
    })
  },
  {
    "name": "index",
    "path": "/",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/index.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return index$9;
    })
  },
  {
    "name": "login-components-LoginCard",
    "path": "/login/components/LoginCard",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/login/components/LoginCard.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return LoginCard$1;
    })
  },
  {
    "name": "login",
    "path": "/login",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/login/index.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return index$8;
    })
  },
  {
    "name": "my-teams-calendar-id",
    "path": "/my-:teams/calendar/:id",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/my-[teams]/calendar/[id].vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return _id_$6;
    })
  },
  {
    "name": "my-teams-calendar-components-EventCard",
    "path": "/my-:teams/calendar/components/EventCard",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/my-[teams]/calendar/components/EventCard.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return EventCard$1;
    })
  },
  {
    "name": "my-teams-calendar",
    "path": "/my-:teams/calendar",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/my-[teams]/calendar/index.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return index$7;
    })
  },
  {
    "name": "my-teams-components-CourseCard",
    "path": "/my-:teams/components/CourseCard",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/my-[teams]/components/CourseCard.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return CourseCard;
    })
  },
  {
    "name": "my-teams-components-DescriptionCard",
    "path": "/my-:teams/components/DescriptionCard",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/my-[teams]/components/DescriptionCard.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return DescriptionCard;
    })
  },
  {
    "name": "my-teams-components-DesktopView",
    "path": "/my-:teams/components/DesktopView",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/my-[teams]/components/DesktopView.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return DesktopView;
    })
  },
  {
    "name": "my-teams-components-MobileView",
    "path": "/my-:teams/components/MobileView",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/my-[teams]/components/MobileView.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return MobileView;
    })
  },
  {
    "name": "my-teams-components-NoticeCard",
    "path": "/my-:teams/components/NoticeCard",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/my-[teams]/components/NoticeCard.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return NoticeCard;
    })
  },
  {
    "name": "my-teams-components-SearchBar",
    "path": "/my-:teams/components/SearchBar",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/my-[teams]/components/SearchBar.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return SearchBar;
    })
  },
  {
    "name": "my-teams-event-id",
    "path": "/my-:teams/event/:id",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/my-[teams]/event/[id].vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return _id_$5;
    })
  },
  {
    "name": "my-teams-event-components-ExerciseCard",
    "path": "/my-:teams/event/components/ExerciseCard",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/my-[teams]/event/components/ExerciseCard.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return ExerciseCard$2;
    })
  },
  {
    "name": "my-teams-event-components-VideoRow",
    "path": "/my-:teams/event/components/VideoRow",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/my-[teams]/event/components/VideoRow.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return VideoRow$1;
    })
  },
  {
    "name": "my-teams-event-components-VideoSectionTitle",
    "path": "/my-:teams/event/components/VideoSectionTitle",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/my-[teams]/event/components/VideoSectionTitle.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return VideoSectionTitle;
    })
  },
  {
    "name": "my-teams-exercise-groupId-id",
    "path": "/my-:teams/exercise-:groupId/:id",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/my-[teams]/exercise-[groupId]/[id].vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return _id_$4;
    })
  },
  {
    "name": "my-teams-exercise-groupId-components-CommentCard",
    "path": "/my-:teams/exercise-:groupId/components/CommentCard",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/my-[teams]/exercise-[groupId]/components/CommentCard.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return CommentCard;
    })
  },
  {
    "name": "my-teams-exercise-groupId-components-ExerciseCard",
    "path": "/my-:teams/exercise-:groupId/components/ExerciseCard",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/my-[teams]/exercise-[groupId]/components/ExerciseCard.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return ExerciseCard$1;
    })
  },
  {
    "name": "my-teams-exercise-groupId-components-Tab",
    "path": "/my-:teams/exercise-:groupId/components/Tab",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/my-[teams]/exercise-[groupId]/components/Tab.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return Tab;
    })
  },
  {
    "name": "my-teams",
    "path": "/my-:teams",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/my-[teams]/index.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return index$5;
    })
  },
  {
    "name": "my-teams-video-id",
    "path": "/my-:teams/video/:id",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/my-[teams]/video/[id].vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return _id_$3;
    })
  },
  {
    "name": "my-teams-video-components-ExerciseCard",
    "path": "/my-:teams/video/components/ExerciseCard",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/my-[teams]/video/components/ExerciseCard.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return ExerciseCard;
    })
  },
  {
    "name": "my-teams-video-components-VideoRow",
    "path": "/my-:teams/video/components/VideoRow",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/my-[teams]/video/components/VideoRow.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return VideoRow;
    })
  },
  {
    "name": "my-calendar-components-EventCard",
    "path": "/my-calendar/components/EventCard",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/my-calendar/components/EventCard.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return EventCard;
    })
  },
  {
    "name": "my-calendar",
    "path": "/my-calendar",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/my-calendar/index.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return index$4;
    })
  },
  {
    "name": "register-components-RegisterLoginIdCard",
    "path": "/register/components/RegisterLoginIdCard",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/register/components/RegisterLoginIdCard.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return RegisterLoginIdCard$1;
    })
  },
  {
    "name": "register-components-RegisterPasswordCard",
    "path": "/register/components/RegisterPasswordCard",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/register/components/RegisterPasswordCard.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return RegisterPasswordCard$1;
    })
  },
  {
    "name": "register",
    "path": "/register",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/register/index.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return index$3;
    })
  },
  {
    "name": "terms-components-TermsCard",
    "path": "/terms/components/TermsCard",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/terms/components/TermsCard.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return TermsCard;
    })
  },
  {
    "name": "terms",
    "path": "/terms",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/terms/index.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return index$2;
    })
  },
  {
    "name": "users-admins-id",
    "path": "/users-:admins/:id",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/users-[admins]/[id].vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return _id_$2;
    })
  },
  {
    "name": "video-components-VideoListView",
    "path": "/video/components/VideoListView",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/video/components/VideoListView.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return VideoListView;
    })
  },
  {
    "name": "video-edit-id",
    "path": "/video/edit/:id",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/video/edit/[id].vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return _id_;
    })
  },
  {
    "name": "video-edit-components-EditCard",
    "path": "/video/edit/components/EditCard",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/video/edit/components/EditCard.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return EditCard;
    })
  },
  {
    "name": "video-edit-components-MobileEditCard",
    "path": "/video/edit/components/MobileEditCard",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/video/edit/components/MobileEditCard.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return MobileEditCard;
    })
  },
  {
    "name": "video",
    "path": "/video",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/video/index.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return index$1;
    })
  },
  {
    "name": "video-upload-components-MobileUploadCard",
    "path": "/video/upload/components/MobileUploadCard",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/video/upload/components/MobileUploadCard.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return MobileUploadCard;
    })
  },
  {
    "name": "video-upload-components-UploadCard",
    "path": "/video/upload/components/UploadCard",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/video/upload/components/UploadCard.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return UploadCard;
    })
  },
  {
    "name": "video-upload",
    "path": "/video/upload",
    "file": "D:/project/GitHub/thegrind-frontend-nuxt/pages/video/upload/index.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return index;
    })
  }
];
const router_c384e790 = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("NuxtChild", NuxtChild);
  nuxtApp.vueApp.component("NuxtPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtLayout", NuxtLayout);
  nuxtApp.vueApp.component("NuxtLink", vueRouter_cjs_prod.RouterLink);
  const routerHistory = vueRouter_cjs_prod.createMemoryHistory();
  const router = vueRouter_cjs_prod.createRouter({
    history: routerHistory,
    routes
  });
  nuxtApp.vueApp.use(router);
  nuxtApp.provide("router", router);
  const previousRoute = vue_cjs_prod.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  nuxtApp.hook("app:created", async () => {
    {
      router.push(nuxtApp.ssrContext.url);
    }
    await router.isReady();
    const is404 = router.currentRoute.value.matched.length === 0;
    if (is404) {
      const error = new Error(`Page not found: ${nuxtApp.ssrContext.url}`);
      error.statusCode = 404;
      nuxtApp.ssrContext.error = error;
    }
  });
});
const userInfo = {
  name: "vincent",
  email: "vincentwong687@gmail.com",
  title: "programmer",
  country: "\u9999\u6E2F",
  address: "123"
};
const user_47f17be8 = {
  userInfo
};
const courses = [
  {
    "id": 7,
    "name": "Coach Edwin - Volleyball At Home",
    "custom_start_date": "2022-02-19T08:12:17.000Z",
    "custom_end_date": "2022-02-19T08:12:17.000Z",
    "custom_present_student": 2,
    "employee": {
      "id": 9,
      "name": "Coach Edwin",
      "job_title": null,
      "work_email": "wwyedwin@gmail.com",
      "company": {
        "id": 3,
        "name": "The Grind Volleyball",
        "email": null
      },
      "attachment": {
        "id": 1435,
        "name": "image_128",
        "res_model": "hr.employee",
        "res_id": 9,
        "url": "http://35.185.147.125:10012/web/content/1435"
      }
    },
    "class_room": {
      "id": 3,
      "name": "Volleryball Court 1"
    },
    "location": {
      "id": 2,
      "name": "School"
    },
    "course": {
      "id": 18,
      "name": "Volleyball At Home",
      "total_time": "0.00",
      "description": "Try this volleyball skills training routine to develop your fundamental volleyball skills at home, or when you don't have access to a gym.  All you need is a ball and a wall!  Make sure you watch all my Volleyball Tutorial videos below to learn the proper technique for each skill featured in this workout video.",
      "channelChannelTags": [
        {
          "channel_id": 18,
          "tag_id": 12,
          "tag": {
            "id": 12,
            "name": "5\u4EBA"
          }
        },
        {
          "channel_id": 18,
          "tag_id": 14,
          "tag": {
            "id": 14,
            "name": "\u8349\u5730"
          }
        }
      ],
      "attachment": {
        "id": 1493,
        "name": "image_256",
        "res_model": "slide.channel",
        "res_id": 18,
        "url": "http://35.185.147.125:10012/web/content/1493"
      }
    }
  },
  {
    "id": 8,
    "name": "Coach Vincent - Football",
    "custom_start_date": "2022-02-19T09:34:58.000Z",
    "custom_end_date": "2022-04-19T09:34:58.000Z",
    "custom_present_student": 0,
    "employee": {
      "id": 8,
      "name": "Coach Vincent",
      "job_title": null,
      "work_email": "vincentwong687@gmail.com",
      "company": {
        "id": 2,
        "name": "The Grind Football",
        "email": "football@thegrind-app.com"
      },
      "attachment": {
        "id": 1428,
        "name": "image_512",
        "res_model": "hr.employee",
        "res_id": 8,
        "url": "http://35.185.147.125:10012/web/content/1428"
      }
    },
    "class_room": {
      "id": 3,
      "name": "Volleryball Court 1"
    },
    "location": null,
    "course": {
      "id": 17,
      "name": "Football",
      "total_time": "0.00",
      "description": "\u8AB2\u7A0B\u5167\u5BB9\u5305\u62EC\uFF1A\u50B3\u9054\u6307\u4EE4\u3001\u76E4\u7403\u548C\u50B3\u7403\u5B78\u7FD2\u3001\u5C04\u9580\u5B78\u7FD2\u3001\u5C0F\u7D44\u653B\u9632\u53CA\u6BD4\u8CFD\u3002\n\n\u200B\u57F9\u80B2\u5E7C\u82D7\u671F\u5C0D\u65BC\u4E00\u500B\u5B69\u7AE5\u7684\u672A\u4F86\u8AAA\u662F\u5F88\u91CD\u8981\u7684\u968E\u6BB5\uFF0C\u8AB2\u7A0B\u4EE54\u5802\u70BA\u4E00\u6BCE\u5B78\u671F\uFF0C\u4EE5\u73A9\u6A02\u7684\u65B9\u5F0F\u5C07\u57FA\u672C\u7684\u8DB3\u7403\u6280\u5DE7\u878D\u5165\u8AB2\u7A0B\u4E4B\u4E2D\u3002\u4E0A\u8AB2\u6642\u6C23\u6C1B\u8F15\u9B06\uFF0C\u904B\u7528\u5C0F\u904A\u6232\u8B93\u5B78\u54E1\u5BB9\u6613\u9069\u61C9\u8AB2\u5802\uFF0C\u76E1\u60C5\u6295\u5165\uFF0C\u4EE4\u4ED6\u5011\u767C\u6398\u8DB3\u7403\u904B\u52D5\u7684\u6A02\u8DA3\uFF0C\u4E26\u6210\u70BA\u6301\u4E45\u7684\u8208\u8DA3\u3002",
      "channelChannelTags": [
        {
          "channel_id": 17,
          "tag_id": 12,
          "tag": {
            "id": 12,
            "name": "5\u4EBA"
          }
        },
        {
          "channel_id": 17,
          "tag_id": 14,
          "tag": {
            "id": 14,
            "name": "\u8349\u5730"
          }
        }
      ],
      "attachment": {
        "id": 1477,
        "name": "image_256",
        "res_model": "slide.channel",
        "res_id": 17,
        "url": "http://35.185.147.125:10012/web/content/1477"
      }
    }
  },
  {
    "id": 9,
    "name": "Coach Andrew - Injury prevention",
    "custom_start_date": "2022-02-19T09:35:04.000Z",
    "custom_end_date": "2022-03-12T09:35:04.000Z",
    "custom_present_student": 1,
    "employee": {
      "id": 7,
      "name": "Coach Andrew",
      "job_title": null,
      "work_email": "andrewliho@hotmail.com",
      "company": {
        "id": 1,
        "name": "The Grind Basketball",
        "email": "basketball@thegrind-app.com"
      },
      "attachment": {
        "id": 1410,
        "name": "image_512",
        "res_model": "hr.employee",
        "res_id": 7,
        "url": "http://35.185.147.125:10012/web/content/1410"
      }
    },
    "class_room": {
      "id": 2,
      "name": "Basketball Court A"
    },
    "location": null,
    "course": {
      "id": 15,
      "name": "Injury prevention",
      "total_time": "0.00",
      "description": null,
      "channelChannelTags": [],
      "attachment": {
        "url": ""
      }
    }
  }
];
const course_1f42660c = {
  courses
};
const lessons = [
  {
    "id": 3,
    "name": "Day 1",
    "custom_create_date": "2021-12-22T00:00:00.000Z",
    "custom_deadline_date": "2022-01-29T00:00:00.000Z",
    "custom_tutor_id": 2,
    "custom_class_id": 4,
    "custom_class_room_id": 1,
    "custom_company_id": 1,
    "custom_lession_details": "<p><br></p>",
    "course": {
      "id": 14,
      "name": "lesson1",
      "total_time": "0.00",
      "description": null,
      "channelChannelTags": []
    }
  },
  {
    "id": 4,
    "name": "Day 2",
    "custom_create_date": "2021-12-22T00:00:00.000Z",
    "custom_deadline_date": "2022-01-29T00:00:00.000Z",
    "custom_tutor_id": 2,
    "custom_class_id": 4,
    "custom_class_room_id": 1,
    "custom_company_id": 1,
    "custom_lession_details": "<p><br></p>",
    "course": {
      "id": 14,
      "name": "lesson1",
      "total_time": "0.00",
      "description": null,
      "channelChannelTags": []
    }
  },
  {
    "id": 5,
    "name": "Day 3",
    "custom_create_date": "2021-12-22T00:00:00.000Z",
    "custom_deadline_date": "2022-01-29T00:00:00.000Z",
    "custom_tutor_id": 2,
    "custom_class_id": 4,
    "custom_class_room_id": 1,
    "custom_company_id": 1,
    "custom_lession_details": "<p><br></p>",
    "course": {
      "id": 14,
      "name": "lesson1",
      "total_time": "0.00",
      "description": null,
      "channelChannelTags": []
    }
  }
];
const lessons_183ead10 = {
  lessons
};
const video = {
  "id": 30,
  "name": "\u3010Smat Sir\u6559\u5BA4 - \u5207\u5165Part 3\u3011// \u5207\u5165\u7DDA\u8DEF\u{1F539}\u5074\u64CA //",
  "description": "\u93DF\u958B\u7C43\u5605\u4F60\u4E00\u5B9A\u8A66\u904E\u4EE5\u4E0B\u60C5\u6CC1\uFF1A\n1. \u843D\u6CE2\u5F8C\u515C\u53E3\u515C\u9762\u649E\u843D\u5C0D\u624B\u5FC3\u53E3\u{1F6AB}\n2. \u4FFE\u4EBA\u9598\u5C31\u5411\u4F4F\u5E95\u7DDA\u93DF\u5148\u5566\uFF0C\u7D50\u679C...\u{1F64A}\n3. \u9EDE\u89E3\u6703\u6108\u93DF\u6108\u9060\u500B\u7C43\u5605\uFF1F\u{1F914}\n4. \u6210\u65E5\u8A71\u5C0D\u6297\u6027\uFF0C\u5277\u7C43\u9EDE\u5C0D\u6297\u5148\u70BA\u4E4B\u6709\u5229\uFF1F\u{1F647}\u{1F3FB}\u200D\u2642\uFE0F\n\n\u7B49Smat Sir\u89AA\u8EAB\u793A\u7BC4\n\u4E00\u908A\u5805\u5B88\u81EA\u5DF1\u5605\u9032\u653B\u7DDA\u8DEF\n\u4E00\u908A\u5074\u64CA\u5C0D\u65B9\u5605\u9632\u5B88\u4F4D\u7F6E\n\u8DDF\u4F4F\uFF1F\n\n\u53BB\u7247\u3002",
  "slide_type": "video",
  "url": "https://youtu.be/i4xAoRq9A9A",
  "owner": {
    "id": 2,
    "partner": {
      "id": 3,
      "name": "Administrator",
      "company_id": 1,
      "create_date": "2021-11-10T08:09:27.834Z",
      "display_name": "Administrator",
      "date": null,
      "title": null,
      "parent_id": null,
      "ref": null,
      "lang": "en_US",
      "tz": "Asia/Hong_Kong",
      "user_id": null,
      "vat": null,
      "website": null,
      "comment": null,
      "credit_limit": null,
      "active": true,
      "employee": null,
      "function": null,
      "type": "contact",
      "street": null,
      "street2": null,
      "zip": null,
      "city": null,
      "state_id": null,
      "country_id": null,
      "partner_latitude": null,
      "email": "info@thegrind-app.com",
      "phone": null,
      "mobile": null,
      "is_company": false,
      "industry_id": null
    }
  },
  "thumbnail": "https://img.youtube.com/vi/i4xAoRq9A9A/0.jpg"
};
const video_4b12c8b8 = {
  video
};
function successFn(result, message = "Ok") {
  return {
    code: 0,
    data: result,
    message
  };
}
const utils_7ad3582d = {
  successFn
};
const lesson = {
  "id": 14,
  "name": "2022-02-19 - Football lession",
  "custom_create_date": "2021-12-22T00:00:00.000Z",
  "custom_deadline_date": "2022-02-20T00:00:00.000Z",
  "custom_tutor_id": 8,
  "custom_class_id": 8,
  "custom_class_room_id": 3,
  "custom_company_id": 2,
  "custom_lession_details": "<p><br></p>",
  "course": {
    "id": 17,
    "name": "Football",
    "total_time": "0.00",
    "description": "\u8AB2\u7A0B\u5167\u5BB9\u5305\u62EC\uFF1A\u50B3\u9054\u6307\u4EE4\u3001\u76E4\u7403\u548C\u50B3\u7403\u5B78\u7FD2\u3001\u5C04\u9580\u5B78\u7FD2\u3001\u5C0F\u7D44\u653B\u9632\u53CA\u6BD4\u8CFD\u3002\n\n\u200B\u57F9\u80B2\u5E7C\u82D7\u671F\u5C0D\u65BC\u4E00\u500B\u5B69\u7AE5\u7684\u672A\u4F86\u8AAA\u662F\u5F88\u91CD\u8981\u7684\u968E\u6BB5\uFF0C\u8AB2\u7A0B\u4EE54\u5802\u70BA\u4E00\u6BCE\u5B78\u671F\uFF0C\u4EE5\u73A9\u6A02\u7684\u65B9\u5F0F\u5C07\u57FA\u672C\u7684\u8DB3\u7403\u6280\u5DE7\u878D\u5165\u8AB2\u7A0B\u4E4B\u4E2D\u3002\u4E0A\u8AB2\u6642\u6C23\u6C1B\u8F15\u9B06\uFF0C\u904B\u7528\u5C0F\u904A\u6232\u8B93\u5B78\u54E1\u5BB9\u6613\u9069\u61C9\u8AB2\u5802\uFF0C\u76E1\u60C5\u6295\u5165\uFF0C\u4EE4\u4ED6\u5011\u767C\u6398\u8DB3\u7403\u904B\u52D5\u7684\u6A02\u8DA3\uFF0C\u4E26\u6210\u70BA\u6301\u4E45\u7684\u8208\u8DA3\u3002",
    "channelChannelTags": [
      {
        "channel_id": 17,
        "tag_id": 12,
        "tag": {
          "id": 12,
          "name": "5\u4EBA"
        }
      },
      {
        "channel_id": 17,
        "tag_id": 14,
        "tag": {
          "id": 14,
          "name": "\u8349\u5730"
        }
      }
    ]
  },
  "videos": [
    {
      "id": 44,
      "name": "Exercise 1",
      "description": null,
      "slide_type": "document",
      "url": null,
      "sequence": 0,
      "owner": {
        "id": 10,
        "partner": {
          "id": 22,
          "name": "Coach Vincent",
          "company_id": null,
          "create_date": "2021-11-24T14:40:34.725Z",
          "display_name": "The Grind Football, Coach Vincent",
          "date": null,
          "title": null,
          "parent_id": 24,
          "ref": null,
          "lang": "en_US",
          "tz": "Asia/Hong_Kong",
          "user_id": null,
          "vat": null,
          "website": null,
          "comment": null,
          "credit_limit": 0,
          "active": true,
          "employee": null,
          "function": null,
          "type": "contact",
          "street": null,
          "street2": null,
          "zip": null,
          "city": null,
          "state_id": null,
          "country_id": 94,
          "partner_latitude": null,
          "email": "vincentwong687@gmail.com",
          "phone": null,
          "mobile": null,
          "is_company": false,
          "industry_id": null
        }
      },
      "thumbnail": ""
    },
    {
      "id": 45,
      "name": "\u6210\u4EBA\u8DB3\u7403\u8A13\u7DF4\u73ED\u82B1\u7D6E2020-\u9999\u6E2F\u696D\u9918\u8DB3\u7403\u8A13\u7DF4\u7E3D\u6703\u5185\u90E8\u53CB\u8ABC\u8CFD",
      "description": "\u4E09\u5CFD\u548C\u5E73\u8DB3\u7403\u6559\u5BA4\uFF0C\u62CD\u651D\u9069\u54084-10\u5B69\u7AE5\u81EA\u4E3B\u7DF4\u7FD2\u8AB2\u7A0B\u5167\u5BB9\n\u793A\u7BC4\uFF1A\u51F1\u6587\u6559\u7DF4\u3001\u52DE\u6069\u6559\u7DF4\n\u62CD\u651D\uFF1A\u67CF\u5CB3\n\u7279\u5225\u5609\u8CD3\uFF1A\u548C\u5E73\u8DB3\u7403\u6559\u5BA4\u5C0F\u7403\u54E1\u5011",
      "slide_type": "video",
      "url": "https://www.youtube.com/watch?v=YA1bmfdU_ac",
      "sequence": 1,
      "owner": {
        "id": 10,
        "partner": {
          "id": 22,
          "name": "Coach Vincent",
          "company_id": null,
          "create_date": "2021-11-24T14:40:34.725Z",
          "display_name": "The Grind Football, Coach Vincent",
          "date": null,
          "title": null,
          "parent_id": 24,
          "ref": null,
          "lang": "en_US",
          "tz": "Asia/Hong_Kong",
          "user_id": null,
          "vat": null,
          "website": null,
          "comment": null,
          "credit_limit": 0,
          "active": true,
          "employee": null,
          "function": null,
          "type": "contact",
          "street": null,
          "street2": null,
          "zip": null,
          "city": null,
          "state_id": null,
          "country_id": 94,
          "partner_latitude": null,
          "email": "vincentwong687@gmail.com",
          "phone": null,
          "mobile": null,
          "is_company": false,
          "industry_id": null
        }
      },
      "thumbnail": "https://img.youtube.com/vi/YA1bmfdU_ac/0.jpg"
    },
    {
      "id": 46,
      "name": "Exercise 2",
      "description": null,
      "slide_type": "document",
      "url": null,
      "sequence": 2,
      "owner": {
        "id": 10,
        "partner": {
          "id": 22,
          "name": "Coach Vincent",
          "company_id": null,
          "create_date": "2021-11-24T14:40:34.725Z",
          "display_name": "The Grind Football, Coach Vincent",
          "date": null,
          "title": null,
          "parent_id": 24,
          "ref": null,
          "lang": "en_US",
          "tz": "Asia/Hong_Kong",
          "user_id": null,
          "vat": null,
          "website": null,
          "comment": null,
          "credit_limit": 0,
          "active": true,
          "employee": null,
          "function": null,
          "type": "contact",
          "street": null,
          "street2": null,
          "zip": null,
          "city": null,
          "state_id": null,
          "country_id": 94,
          "partner_latitude": null,
          "email": "vincentwong687@gmail.com",
          "phone": null,
          "mobile": null,
          "is_company": false,
          "industry_id": null
        }
      },
      "thumbnail": ""
    },
    {
      "id": 63,
      "name": "test image",
      "description": null,
      "slide_type": "document",
      "url": null,
      "sequence": 3,
      "owner": {
        "id": 2,
        "partner": {
          "id": 3,
          "name": "Administrator",
          "company_id": 5,
          "create_date": "2021-11-10T08:09:27.834Z",
          "display_name": "Administrator",
          "date": null,
          "title": null,
          "parent_id": null,
          "ref": null,
          "lang": "en_US",
          "tz": "Asia/Hong_Kong",
          "user_id": null,
          "vat": null,
          "website": null,
          "comment": null,
          "credit_limit": null,
          "active": true,
          "employee": null,
          "function": null,
          "type": "contact",
          "street": null,
          "street2": null,
          "zip": null,
          "city": null,
          "state_id": null,
          "country_id": null,
          "partner_latitude": null,
          "email": "info@thegrind-app.com",
          "phone": null,
          "mobile": null,
          "is_company": false,
          "industry_id": null
        }
      },
      "thumbnail": ""
    }
  ]
};
const lesson_42dab062 = {
  lesson
};
const companys = [
  {
    "attachment": {
      "id": 4,
      "name": "favicon",
      "res_model": "res.company",
      "res_id": 1,
      "url": "http://35.185.147.125:10012/web/content/4"
    },
    "id": 1,
    "email": "basketball@thegrind-app.com",
    "companyInfo": {
      "id": 1,
      "name": "The Grind Basketball",
      "company_id": null,
      "create_date": "2021-11-10T08:09:26.978Z",
      "display_name": "The Grind Basketball",
      "date": null,
      "title": null,
      "parent_id": null,
      "ref": null,
      "lang": "en_US",
      "tz": null,
      "user_id": null,
      "vat": null,
      "website": "http://thegrindbasketball.com",
      "comment": "This is a description of The Grind Basketball company",
      "credit_limit": null,
      "active": true,
      "employee": null,
      "function": null,
      "type": "contact",
      "street": "The basketball court",
      "street2": null,
      "zip": "",
      "city": "",
      "state_id": null,
      "country_id": null,
      "partner_latitude": null,
      "email": "basketball@thegrind-app.com",
      "phone": "",
      "mobile": "66896601",
      "is_company": true,
      "industry_id": null
    },
    "name": "The Grind Basketball",
    "employees": [
      {
        "cid": 1,
        "user_id": 1,
        "user": {
          "id": 1,
          "partner": {
            "id": 2,
            "name": "OdooBot",
            "company_id": 1,
            "create_date": "2021-11-10T08:09:27.834Z",
            "display_name": "OdooBot",
            "date": null,
            "title": null,
            "parent_id": null,
            "ref": null,
            "lang": "en_US",
            "tz": null,
            "user_id": null,
            "vat": null,
            "website": null,
            "comment": null,
            "credit_limit": null,
            "active": false,
            "employee": null,
            "function": null,
            "type": "contact",
            "street": null,
            "street2": null,
            "zip": null,
            "city": null,
            "state_id": null,
            "country_id": null,
            "partner_latitude": null,
            "email": "odoobot@example.com",
            "phone": null,
            "mobile": null,
            "is_company": false,
            "industry_id": null,
            "attachment": {
              "id": 44,
              "name": "image_1920",
              "res_model": "res.partner",
              "res_id": 2,
              "url": "http://35.185.147.125:10012/web/content/44"
            }
          }
        }
      },
      {
        "cid": 1,
        "user_id": 5,
        "user": {
          "id": 5,
          "partner": {
            "id": 6,
            "name": "Portal User Template",
            "company_id": null,
            "create_date": "2021-11-10T08:09:27.834Z",
            "display_name": "Portal User Template",
            "date": null,
            "title": null,
            "parent_id": null,
            "ref": null,
            "lang": "en_US",
            "tz": null,
            "user_id": null,
            "vat": null,
            "website": null,
            "comment": null,
            "credit_limit": null,
            "active": false,
            "employee": null,
            "function": null,
            "type": "contact",
            "street": null,
            "street2": null,
            "zip": null,
            "city": null,
            "state_id": null,
            "country_id": null,
            "partner_latitude": null,
            "email": null,
            "phone": null,
            "mobile": null,
            "is_company": false,
            "industry_id": null,
            "attachment": {
              "id": 22,
              "name": "image_512",
              "res_model": "res.partner",
              "res_id": 6,
              "url": "http://35.185.147.125:10012/web/content/22"
            }
          }
        }
      },
      {
        "cid": 1,
        "user_id": 3,
        "user": {
          "id": 3,
          "partner": {
            "id": 5,
            "name": "Default User Template",
            "company_id": null,
            "create_date": "2021-11-10T08:09:27.834Z",
            "display_name": "Default User Template",
            "date": null,
            "title": null,
            "parent_id": null,
            "ref": null,
            "lang": "en_US",
            "tz": null,
            "user_id": null,
            "vat": null,
            "website": null,
            "comment": null,
            "credit_limit": null,
            "active": false,
            "employee": null,
            "function": null,
            "type": "contact",
            "street": null,
            "street2": null,
            "zip": null,
            "city": null,
            "state_id": null,
            "country_id": null,
            "partner_latitude": null,
            "email": null,
            "phone": null,
            "mobile": null,
            "is_company": false,
            "industry_id": null,
            "attachment": {
              "id": 8,
              "name": "image_1024",
              "res_model": "res.partner",
              "res_id": 5,
              "url": "http://35.185.147.125:10012/web/content/8"
            }
          }
        }
      },
      {
        "cid": 1,
        "user_id": 4,
        "user": {
          "id": 4,
          "partner": {
            "id": 4,
            "name": "Public user",
            "company_id": null,
            "create_date": "2021-11-10T08:09:27.834Z",
            "display_name": "Public user",
            "date": null,
            "title": null,
            "parent_id": null,
            "ref": null,
            "lang": "en_US",
            "tz": null,
            "user_id": null,
            "vat": null,
            "website": null,
            "comment": null,
            "credit_limit": null,
            "active": false,
            "employee": null,
            "function": null,
            "type": "contact",
            "street": null,
            "street2": null,
            "zip": null,
            "city": null,
            "state_id": null,
            "country_id": null,
            "partner_latitude": null,
            "email": null,
            "phone": null,
            "mobile": null,
            "is_company": false,
            "industry_id": null,
            "attachment": {
              "url": ""
            }
          }
        }
      }
    ]
  },
  {
    "attachment": {
      "id": 660,
      "name": "favicon",
      "res_model": "res.company",
      "res_id": 2,
      "url": "http://35.185.147.125:10012/web/content/660"
    },
    "id": 2,
    "email": "football@thegrind-app.com",
    "companyInfo": {
      "id": 24,
      "name": "The Grind Football",
      "company_id": null,
      "create_date": "2021-11-24T15:10:16.976Z",
      "display_name": "The Grind Football",
      "date": null,
      "title": null,
      "parent_id": null,
      "ref": null,
      "lang": "en_US",
      "tz": "Asia/Hong_Kong",
      "user_id": null,
      "vat": null,
      "website": null,
      "comment": null,
      "credit_limit": null,
      "active": true,
      "employee": null,
      "function": null,
      "type": "contact",
      "street": null,
      "street2": null,
      "zip": null,
      "city": null,
      "state_id": null,
      "country_id": 94,
      "partner_latitude": null,
      "email": "football@thegrind-app.com",
      "phone": null,
      "mobile": null,
      "is_company": true,
      "industry_id": null
    },
    "name": "The Grind Football",
    "employees": [
      {
        "cid": 1,
        "user_id": 12,
        "user": {
          "id": 12,
          "partner": {
            "id": 28,
            "name": "andrewtest",
            "company_id": null,
            "create_date": "2021-12-04T06:44:31.393Z",
            "display_name": "andrewtest",
            "date": null,
            "title": null,
            "parent_id": null,
            "ref": null,
            "lang": "en_US",
            "tz": "Asia/Hong_Kong",
            "user_id": null,
            "vat": null,
            "website": null,
            "comment": null,
            "credit_limit": 0,
            "active": true,
            "employee": false,
            "function": null,
            "type": "contact",
            "street": null,
            "street2": null,
            "zip": null,
            "city": null,
            "state_id": null,
            "country_id": null,
            "partner_latitude": "0.00000",
            "email": "anl@odoo.com",
            "phone": null,
            "mobile": null,
            "is_company": false,
            "industry_id": null,
            "attachment": {
              "id": 764,
              "name": "image_128",
              "res_model": "res.partner",
              "res_id": 28,
              "url": "http://35.185.147.125:10012/web/content/764"
            }
          }
        }
      },
      {
        "cid": 1,
        "user_id": 6,
        "user": {
          "id": 6,
          "partner": {
            "id": 7,
            "name": "Coach Andrew",
            "company_id": null,
            "create_date": "2021-11-12T10:21:16.132Z",
            "display_name": "The Grind Basketball, Coach Andrew",
            "date": null,
            "title": null,
            "parent_id": 1,
            "ref": null,
            "lang": "en_US",
            "tz": "Asia/Hong_Kong",
            "user_id": null,
            "vat": null,
            "website": null,
            "comment": null,
            "credit_limit": 0,
            "active": true,
            "employee": null,
            "function": null,
            "type": "contact",
            "street": "The basketball court",
            "street2": null,
            "zip": null,
            "city": null,
            "state_id": null,
            "country_id": null,
            "partner_latitude": null,
            "email": "andrewliho@hotmail.com",
            "phone": null,
            "mobile": null,
            "is_company": false,
            "industry_id": null,
            "attachment": {
              "id": 343,
              "name": "image_1024",
              "res_model": "res.partner",
              "res_id": 7,
              "url": "http://35.185.147.125:10012/web/content/343"
            }
          }
        }
      },
      {
        "cid": 2,
        "user_id": 10,
        "user": {
          "id": 10,
          "partner": {
            "id": 22,
            "name": "Coach Vincent",
            "company_id": null,
            "create_date": "2021-11-24T14:40:34.725Z",
            "display_name": "The Grind Football, Coach Vincent",
            "date": null,
            "title": null,
            "parent_id": 24,
            "ref": null,
            "lang": "en_US",
            "tz": "Asia/Hong_Kong",
            "user_id": null,
            "vat": null,
            "website": null,
            "comment": null,
            "credit_limit": 0,
            "active": true,
            "employee": null,
            "function": null,
            "type": "contact",
            "street": null,
            "street2": null,
            "zip": null,
            "city": null,
            "state_id": null,
            "country_id": 94,
            "partner_latitude": null,
            "email": "vincentwong687@gmail.com",
            "phone": null,
            "mobile": null,
            "is_company": false,
            "industry_id": null,
            "attachment": {
              "id": 615,
              "name": "image_1024",
              "res_model": "res.partner",
              "res_id": 22,
              "url": "http://35.185.147.125:10012/web/content/615"
            }
          }
        }
      }
    ]
  },
  {
    "attachment": {
      "id": 732,
      "name": "favicon",
      "res_model": "res.company",
      "res_id": 3,
      "url": "http://35.185.147.125:10012/web/content/732"
    },
    "id": 3,
    "email": null,
    "companyInfo": {
      "id": 26,
      "name": "The Grind Volleyball",
      "company_id": null,
      "create_date": "2021-11-27T05:55:25.099Z",
      "display_name": "The Grind Volleyball",
      "date": null,
      "title": null,
      "parent_id": null,
      "ref": null,
      "lang": "en_US",
      "tz": "Asia/Hong_Kong",
      "user_id": null,
      "vat": null,
      "website": null,
      "comment": null,
      "credit_limit": null,
      "active": true,
      "employee": null,
      "function": null,
      "type": "contact",
      "street": null,
      "street2": null,
      "zip": null,
      "city": null,
      "state_id": null,
      "country_id": null,
      "partner_latitude": null,
      "email": null,
      "phone": null,
      "mobile": null,
      "is_company": true,
      "industry_id": null
    },
    "name": "The Grind Volleyball",
    "employees": [
      {
        "cid": 3,
        "user_id": 7,
        "user": {
          "id": 7,
          "partner": {
            "id": 8,
            "name": "Coach Edwin",
            "company_id": null,
            "create_date": "2021-11-12T10:23:36.323Z",
            "display_name": "The Grind Volleyball, Coach Edwin",
            "date": null,
            "title": null,
            "parent_id": 26,
            "ref": null,
            "lang": "en_US",
            "tz": "Asia/Hong_Kong",
            "user_id": null,
            "vat": null,
            "website": null,
            "comment": null,
            "credit_limit": 0,
            "active": true,
            "employee": null,
            "function": null,
            "type": "contact",
            "street": null,
            "street2": null,
            "zip": null,
            "city": null,
            "state_id": null,
            "country_id": null,
            "partner_latitude": null,
            "email": "wwyedwin@gmail.com",
            "phone": null,
            "mobile": null,
            "is_company": false,
            "industry_id": null,
            "attachment": {
              "id": 665,
              "name": "image_128",
              "res_model": "res.partner",
              "res_id": 8,
              "url": "http://35.185.147.125:10012/web/content/665"
            }
          }
        }
      }
    ]
  },
  {
    "attachment": {
      "id": 1418,
      "name": "favicon",
      "res_model": "res.company",
      "res_id": 5,
      "url": "http://35.185.147.125:10012/web/content/1418"
    },
    "id": 4,
    "email": null,
    "companyInfo": {
      "id": 30,
      "name": "The Grind Admin",
      "company_id": null,
      "create_date": "2022-02-19T07:31:18.188Z",
      "display_name": "The Grind Admin",
      "date": null,
      "title": null,
      "parent_id": null,
      "ref": null,
      "lang": "en_US",
      "tz": "Asia/Hong_Kong",
      "user_id": null,
      "vat": null,
      "website": null,
      "comment": null,
      "credit_limit": null,
      "active": true,
      "employee": null,
      "function": null,
      "type": "contact",
      "street": null,
      "street2": null,
      "zip": null,
      "city": null,
      "state_id": null,
      "country_id": null,
      "partner_latitude": null,
      "email": null,
      "phone": null,
      "mobile": null,
      "is_company": true,
      "industry_id": null
    },
    "name": "The Grind Admin",
    "employees": []
  },
  {
    "attachment": {
      "id": 1418,
      "name": "favicon",
      "res_model": "res.company",
      "res_id": 5,
      "url": "http://35.185.147.125:10012/web/content/1418"
    },
    "id": 5,
    "email": null,
    "companyInfo": {
      "id": 30,
      "name": "The Grind Admin",
      "company_id": null,
      "create_date": "2022-02-19T07:31:18.188Z",
      "display_name": "The Grind Admin",
      "date": null,
      "title": null,
      "parent_id": null,
      "ref": null,
      "lang": "en_US",
      "tz": "Asia/Hong_Kong",
      "user_id": null,
      "vat": null,
      "website": null,
      "comment": null,
      "credit_limit": null,
      "active": true,
      "employee": null,
      "function": null,
      "type": "contact",
      "street": null,
      "street2": null,
      "zip": null,
      "city": null,
      "state_id": null,
      "country_id": null,
      "partner_latitude": null,
      "email": null,
      "phone": null,
      "mobile": null,
      "is_company": true,
      "industry_id": null
    },
    "name": "The Grind Admin",
    "employees": []
  }
];
const companys_31113cb7 = {
  companys
};
const company = {
  "attachment": {
    "id": 660,
    "name": "favicon",
    "res_model": "res.company",
    "res_id": 2,
    "url": "http://35.185.147.125:10012/web/content/660"
  },
  "id": 2,
  "email": "football@thegrind-app.com",
  "companyInfo": {
    "id": 24,
    "name": "The Grind Football",
    "company_id": null,
    "create_date": "2021-11-24T15:10:16.976Z",
    "display_name": "The Grind Football",
    "date": null,
    "title": null,
    "parent_id": null,
    "ref": null,
    "lang": "en_US",
    "tz": "Asia/Hong_Kong",
    "user_id": null,
    "vat": null,
    "website": null,
    "comment": null,
    "credit_limit": null,
    "active": true,
    "employee": null,
    "function": null,
    "type": "contact",
    "street": null,
    "street2": null,
    "zip": null,
    "city": null,
    "state_id": null,
    "country_id": 94,
    "partner_latitude": null,
    "email": "football@thegrind-app.com",
    "phone": null,
    "mobile": null,
    "is_company": true,
    "industry_id": null
  },
  "name": "The Grind Football",
  "employees": []
};
const company_7d7330b0 = {
  company
};
const videos = [
  {
    "id": 45,
    "name": "\u6210\u4EBA\u8DB3\u7403\u8A13\u7DF4\u73ED\u82B1\u7D6E2020-\u9999\u6E2F\u696D\u9918\u8DB3\u7403\u8A13\u7DF4\u7E3D\u6703\u5185\u90E8\u53CB\u8ABC\u8CFD",
    "description": "\u4E09\u5CFD\u548C\u5E73\u8DB3\u7403\u6559\u5BA4\uFF0C\u62CD\u651D\u9069\u54084-10\u5B69\u7AE5\u81EA\u4E3B\u7DF4\u7FD2\u8AB2\u7A0B\u5167\u5BB9\n\u793A\u7BC4\uFF1A\u51F1\u6587\u6559\u7DF4\u3001\u52DE\u6069\u6559\u7DF4\n\u62CD\u651D\uFF1A\u67CF\u5CB3\n\u7279\u5225\u5609\u8CD3\uFF1A\u548C\u5E73\u8DB3\u7403\u6559\u5BA4\u5C0F\u7403\u54E1\u5011",
    "slide_type": "video",
    "url": "https://www.youtube.com/watch?v=YA1bmfdU_ac",
    "sequence": 1,
    "owner": {
      "id": 10,
      "partner": {
        "id": 22,
        "name": "Coach Vincent",
        "company_id": null,
        "create_date": "2021-11-24T14:40:34.725Z",
        "display_name": "The Grind Football, Coach Vincent",
        "date": null,
        "title": null,
        "parent_id": 24,
        "ref": null,
        "lang": "en_US",
        "tz": "Asia/Hong_Kong",
        "user_id": null,
        "vat": null,
        "website": null,
        "comment": null,
        "credit_limit": 0,
        "active": true,
        "employee": null,
        "function": null,
        "type": "contact",
        "street": null,
        "street2": null,
        "zip": null,
        "city": null,
        "state_id": null,
        "country_id": 94,
        "partner_latitude": null,
        "email": "vincentwong687@gmail.com",
        "phone": null,
        "mobile": null,
        "is_company": false,
        "industry_id": null
      }
    },
    "thumbnail": "https://img.youtube.com/vi/YA1bmfdU_ac/0.jpg",
    "section": "Exercise 1"
  },
  {
    "id": 65,
    "name": "\u8DB3\u7403\u73ED\u65E5\u5E38\u8A13\u7DF4course\uFF1A\u8AB2\u7A0B\u597D\u597D\u73A9\uFF01",
    "description": "\u4E09\u5CFD\u548C\u5E73\u8DB3\u7403\u6559\u5BA4\uFF0C\u62CD\u651D\u9069\u54084-10\u5B69\u7AE5\u81EA\u4E3B\u7DF4\u7FD2\u8AB2\u7A0B\u5167\u5BB9\n\u793A\u7BC4\uFF1A\u51F1\u6587\u6559\u7DF4\u3001\u52DE\u6069\u6559\u7DF4\n\u62CD\u651D\uFF1A\u67CF\u5CB3\n\u7279\u5225\u5609\u8CD3\uFF1A\u548C\u5E73\u8DB3\u7403\u6559\u5BA4\u5C0F\u7403\u54E1\u5011\n#soccer #peace #practice #order #skill #field",
    "slide_type": "video",
    "url": "https://youtu.be/wSfzrZYFqSs",
    "sequence": 3,
    "owner": {
      "id": 10,
      "partner": {
        "id": 22,
        "name": "Coach Vincent",
        "company_id": null,
        "create_date": "2021-11-24T14:40:34.725Z",
        "display_name": "The Grind Football, Coach Vincent",
        "date": null,
        "title": null,
        "parent_id": 24,
        "ref": null,
        "lang": "en_US",
        "tz": "Asia/Hong_Kong",
        "user_id": null,
        "vat": null,
        "website": null,
        "comment": null,
        "credit_limit": 0,
        "active": true,
        "employee": null,
        "function": null,
        "type": "contact",
        "street": null,
        "street2": null,
        "zip": null,
        "city": null,
        "state_id": null,
        "country_id": 94,
        "partner_latitude": null,
        "email": "vincentwong687@gmail.com",
        "phone": null,
        "mobile": null,
        "is_company": false,
        "industry_id": null
      }
    },
    "thumbnail": "https://img.youtube.com/vi/wSfzrZYFqSs/0.jpg",
    "section": "Exercise 2"
  }
];
const videoWithSection_6e80657a = {
  videos
};
function mockjs_b1642028({ $config: { NODE_ENV, USE_MOCK, VITE_PORT } }) {
  console.log(VITE_PORT);
  if (USE_MOCK) {
    Mock.mock("/api/user/getUserInfo", "get", (options) => {
      console.log("mock");
      return Mock.mock(utils_7ad3582d.successFn(user_47f17be8));
    });
    Mock.mock("/api/tutor", "get", (options) => {
      console.log("mock");
      return Mock.mock(utils_7ad3582d.successFn(course_1f42660c));
    });
    Mock.mock("/api/lessons", "get", (options) => {
      console.log("mock");
      return Mock.mock(utils_7ad3582d.successFn(lessons_183ead10));
    });
    Mock.mock("/api/lessons/4", "get", (options) => {
      console.log("mock");
      return Mock.mock(utils_7ad3582d.successFn(lesson_42dab062));
    });
    Mock.mock("/api/videos/4", "get", (options) => {
      console.log("mock");
      return Mock.mock(utils_7ad3582d.successFn(video_4b12c8b8));
    });
    Mock.mock("/api/companys", "get", (options) => {
      console.log("mock");
      return Mock.mock(utils_7ad3582d.successFn(companys_31113cb7));
    });
    Mock.mock("/api/videos/videoSection/17", "get", (options) => {
      console.log("mock");
      return Mock.mock(utils_7ad3582d.successFn(videoWithSection_6e80657a));
    });
    Mock.mock("/api/companys/1", "get", (options) => {
      console.log("mock");
      return Mock.mock(utils_7ad3582d.successFn(company_7d7330b0));
    });
  }
}
const fullCalendar_229f9f68 = defineNuxtPlugin((nuxtApp) => {
});
const vueHorizontal_4e4bb8eb = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueHorizontal);
});
const vantUi_51138698 = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vant);
});
const lodash_72ae20e1 = defineNuxtPlugin((nuxtApp) => {
});
const suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^["{[]|^-?[0-9][0-9.]{0,14}$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor") {
    return;
  }
  return value;
}
function destr(val) {
  if (typeof val !== "string") {
    return val;
  }
  const _lval = val.toLowerCase();
  if (_lval === "true") {
    return true;
  }
  if (_lval === "false") {
    return false;
  }
  if (_lval === "null") {
    return null;
  }
  if (_lval === "nan") {
    return NaN;
  }
  if (_lval === "infinity") {
    return Infinity;
  }
  if (_lval === "undefined") {
    return void 0;
  }
  if (!JsonSigRx.test(val)) {
    return val;
  }
  try {
    if (suspectProtoRx.test(val) || suspectConstructorRx.test(val)) {
      return JSON.parse(val, jsonParseTransform);
    }
    return JSON.parse(val);
  } catch (_e) {
    return val;
  }
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/gi;
const ENC_BRACKET_CLOSE_RE = /%5D/gi;
const ENC_CARET_RE = /%5E/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_CURLY_OPEN_RE = /%7B/gi;
const ENC_PIPE_RE = /%7C/gi;
const ENC_CURLY_CLOSE_RE = /%7D/gi;
const ENC_SPACE_RE = /%20/gi;
function encode$1(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeQueryValue(text) {
  return encode$1(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch (_err) {
    return "" + text;
  }
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function parseQuery(paramsStr = "") {
  const obj = {};
  if (paramsStr[0] === "?") {
    paramsStr = paramsStr.substr(1);
  }
  for (const param of paramsStr.split("&")) {
    const s = param.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decode(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  }
  return obj;
}
function encodeQueryItem(key, val) {
  if (!val) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(val)) {
    return val.map((_val) => `${encodeQueryKey(key)}=${encodeQueryValue(_val)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(val)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).map((k) => encodeQueryItem(k, query[k])).join("&");
}
function hasProtocol(inputStr, acceptProtocolRelative = false) {
  return /^\w+:\/\/.+/.test(inputStr) || acceptProtocolRelative && /^\/\/[^/]+/.test(inputStr);
}
const TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length ? `?${s.join("?")}` : "");
}
function withTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length ? `?${s.join("?")}` : "");
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.substr(1) : input) || "/";
}
function withBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = __spreadValues(__spreadValues({}, parseQuery(parsed.search)), query);
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function isEmptyURL(url2) {
  return !url2 || url2 === "/";
}
function isNonEmptyURL(url2) {
  return url2 && url2 !== "/";
}
function joinURL(base, ...input) {
  let url2 = base || "";
  for (const i of input.filter(isNonEmptyURL)) {
    url2 = url2 ? withTrailingSlash(url2) + withoutLeadingSlash(i) : i;
  }
  return url2;
}
function parseURL(input = "", defaultProto) {
  if (!hasProtocol(input, true)) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [protocol = "", auth, hostAndPath] = (input.match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1);
  const [host = "", path = ""] = (hostAndPath.match(/([^/?]*)(.*)?/) || []).splice(1);
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol,
    auth: auth ? auth.substr(0, auth.length - 1) : "",
    host,
    pathname,
    search,
    hash
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const fullpath = parsed.pathname + (parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "") + parsed.hash;
  if (!parsed.protocol) {
    return fullpath;
  }
  return parsed.protocol + "//" + (parsed.auth ? parsed.auth + "@" : "") + parsed.host + fullpath;
}
class FetchError extends Error {
  constructor() {
    super(...arguments);
    this.name = "FetchError";
  }
}
function createFetchError(request2, error, response) {
  let message = "";
  if (request2 && response) {
    message = `${response.status} ${response.statusText} (${request2.toString()})`;
  }
  if (error) {
    message = `${error.message} (${message})`;
  }
  const fetchError = new FetchError(message);
  Object.defineProperty(fetchError, "request", { get() {
    return request2;
  } });
  Object.defineProperty(fetchError, "response", { get() {
    return response;
  } });
  Object.defineProperty(fetchError, "data", { get() {
    return response && response.data;
  } });
  return fetchError;
}
const payloadMethods = ["patch", "post", "put"];
function setHeader(options, _key, value) {
  const key = _key.toLowerCase();
  options.headers = options.headers || {};
  if ("set" in options.headers) {
    options.headers.set(key, value);
  } else if (Array.isArray(options.headers)) {
    const existingHeader = options.headers.find(([header]) => header.toLowerCase() === key);
    if (existingHeader) {
      existingHeader[1] = value;
    } else {
      options.headers.push([key, value]);
    }
  } else {
    const existingHeader = Object.keys(options.headers).find((header) => header.toLowerCase() === key);
    options.headers[existingHeader || key] = value;
  }
}
function createFetch({ fetch: fetch2 }) {
  function onError(request2, opts, error, response) {
    if (opts.retry !== false) {
      const hasPayload = payloadMethods.includes((opts.method || "").toLowerCase());
      const retries = typeof opts.retry === "number" ? opts.retry : hasPayload ? 0 : 1;
      if (retries > 0) {
        return $fetchRaw(request2, __spreadProps(__spreadValues({}, opts), {
          retry: retries - 1
        }));
      }
    }
    const err = createFetchError(request2, error, response);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(err, $fetchRaw);
    }
    throw err;
  }
  const $fetchRaw = async function $fetchRaw2(request2, opts = {}) {
    if (typeof request2 === "string") {
      if (opts.baseURL) {
        request2 = withBase(request2, opts.baseURL);
      }
      if (opts.params) {
        request2 = withQuery(request2, opts.params);
      }
      const hasPayload = payloadMethods.includes((opts.method || "").toLowerCase());
      if (opts.body && opts.body.toString() === "[object Object]" && hasPayload) {
        opts.body = JSON.stringify(opts.body);
        setHeader(opts, "content-type", "application/json");
      }
    }
    const response = await fetch2(request2, opts).catch((error) => onError(request2, opts, error, void 0));
    const text = await response.text();
    const parseFn = opts.parseResponse || destr;
    response.data = parseFn(text);
    return response.ok ? response : onError(request2, opts, void 0, response);
  };
  const $fetch2 = function $fetch22(request2, opts) {
    return $fetchRaw(request2, opts).then((r) => r.data);
  };
  $fetch2.raw = $fetchRaw;
  return $fetch2;
}
const getGlobal = function() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
};
const fetch = getGlobal().fetch || (() => {
  return Promise.reject(new Error("[ohmyfetch] globalThis.fetch is not supported!"));
});
const $fetch$1 = createFetch({ fetch });
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1;
}
const nitroClient_f6acca52 = () => {
};
const components = {
  "Carousel": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Carousel;
  }).then((c) => c.default || c)),
  "GlobalAvator": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Avator;
  }).then((c) => c.default || c)),
  "GlobalDropdownButton": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return DropdownButton;
  }).then((c) => c.default || c)),
  "GlobalHamburger": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Hamburger;
  }).then((c) => c.default || c)),
  "GlobalHamburgerContent": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return HamburgerContent;
  }).then((c) => c.default || c)),
  "GlobalHamburgerContentMobile": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return HamburgerContentMobile;
  }).then((c) => c.default || c)),
  "GlobalHeader": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Header;
  }).then((c) => c.default || c)),
  "GlobalPageTitle": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return PageTitle$1;
  }).then((c) => c.default || c)),
  "GlobalPagination": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Pagination;
  }).then((c) => c.default || c)),
  "GlobalCalendarDateIndicator": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return CalendarDateIndicator;
  }).then((c) => c.default || c)),
  "GlobalCalendarDateSelector": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return CalendarDateSelector;
  }).then((c) => c.default || c)),
  "GlobalCalendarMonth": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return CalendarMonth;
  }).then((c) => c.default || c)),
  "GlobalCalendarMonthDayItem": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return CalendarMonthDayItem;
  }).then((c) => c.default || c)),
  "GlobalCalendarWeekdays": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return CalendarWeekdays;
  }).then((c) => c.default || c))
};
function components_515c5644(nuxtApp) {
  for (const name2 in components) {
    nuxtApp.vueApp.component(name2, components[name2]);
    nuxtApp.vueApp.component("Lazy" + name2, components[name2]);
  }
}
const _plugins = [
  preload,
  plugin_c12d6c7e,
  vueuseHead_db96dc5a,
  plugin_7bf64fc7,
  router_c384e790,
  mockjs_b1642028,
  fullCalendar_229f9f68,
  vueHorizontal_4e4bb8eb,
  vantUi_51138698,
  fullCalendar_229f9f68,
  lodash_72ae20e1,
  vantUi_51138698,
  vueHorizontal_4e4bb8eb,
  mockjs_b1642028,
  utils_7ad3582d,
  company_7d7330b0,
  companys_31113cb7,
  course_1f42660c,
  lesson_42dab062,
  lessons_183ead10,
  video_4b12c8b8,
  videoWithSection_6e80657a,
  user_47f17be8,
  nitroClient_f6acca52,
  components_515c5644
];
const _sfc_main$1b = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_App = vue_cjs_prod.resolveComponent("App");
  serverRenderer.exports.ssrRenderSuspense(_push, {
    default: () => {
      _push(serverRenderer.exports.ssrRenderComponent(_component_App, null, null, _parent));
    },
    _: 1
  });
}
const _sfc_setup$1b = _sfc_main$1b.setup;
_sfc_main$1b.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/app/components/nuxt-root.vue");
  return _sfc_setup$1b ? _sfc_setup$1b(props, ctx) : void 0;
};
const RootComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1b, [["ssrRender", _sfc_ssrRender$5]]);
var axios$2 = { exports: {} };
var bind$2 = function bind(fn, thisArg) {
  return function wrap2() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};
var bind$1 = bind$2;
var toString = Object.prototype.toString;
function isArray(val) {
  return toString.call(val) === "[object Array]";
}
function isUndefined(val) {
  return typeof val === "undefined";
}
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
}
function isArrayBuffer(val) {
  return toString.call(val) === "[object ArrayBuffer]";
}
function isFormData(val) {
  return typeof FormData !== "undefined" && val instanceof FormData;
}
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}
function isString(val) {
  return typeof val === "string";
}
function isNumber(val) {
  return typeof val === "number";
}
function isObject(val) {
  return val !== null && typeof val === "object";
}
function isPlainObject(val) {
  if (toString.call(val) !== "[object Object]") {
    return false;
  }
  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}
function isDate(val) {
  return toString.call(val) === "[object Date]";
}
function isFile(val) {
  return toString.call(val) === "[object File]";
}
function isBlob(val) {
  return toString.call(val) === "[object Blob]";
}
function isFunction(val) {
  return toString.call(val) === "[object Function]";
}
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
function isURLSearchParams(val) {
  return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
}
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
function isStandardBrowserEnv() {
  return false;
}
function forEach(obj, fn) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
function merge() {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }
  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === "function") {
      a[key] = bind$1(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}
function stripBOM(content) {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
}
var utils$a = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isFunction,
  isStream,
  isURLSearchParams,
  isStandardBrowserEnv,
  forEach,
  merge,
  extend,
  trim,
  stripBOM
};
var utils$9 = utils$a;
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var buildURL$2 = function buildURL(url2, params, paramsSerializer) {
  if (!params) {
    return url2;
  }
  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils$9.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils$9.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === "undefined") {
        return;
      }
      if (utils$9.isArray(val)) {
        key = key + "[]";
      } else {
        val = [val];
      }
      utils$9.forEach(val, function parseValue2(v) {
        if (utils$9.isDate(v)) {
          v = v.toISOString();
        } else if (utils$9.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + "=" + encode(v));
      });
    });
    serializedParams = parts.join("&");
  }
  if (serializedParams) {
    var hashmarkIndex = url2.indexOf("#");
    if (hashmarkIndex !== -1) {
      url2 = url2.slice(0, hashmarkIndex);
    }
    url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url2;
};
var utils$8 = utils$a;
function InterceptorManager$1() {
  this.handlers = [];
}
InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled,
    rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};
InterceptorManager$1.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
InterceptorManager$1.prototype.forEach = function forEach2(fn) {
  utils$8.forEach(this.handlers, function forEachHandler(h2) {
    if (h2 !== null) {
      fn(h2);
    }
  });
};
var InterceptorManager_1 = InterceptorManager$1;
var utils$7 = utils$a;
var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
  utils$7.forEach(headers, function processHeader(value, name2) {
    if (name2 !== normalizedName && name2.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name2];
    }
  });
};
var enhanceError$3 = function enhanceError(error, config, code2, request2, response) {
  error.config = config;
  if (code2) {
    error.code = code2;
  }
  error.request = request2;
  error.response = response;
  error.isAxiosError = true;
  error.toJSON = function toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code
    };
  };
  return error;
};
var enhanceError$2 = enhanceError$3;
var createError$2 = function createError(message, config, code2, request2, response) {
  var error = new Error(message);
  return enhanceError$2(error, config, code2, request2, response);
};
var createError$1 = createError$2;
var settle$1 = function settle(resolve, reject, response) {
  var validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(createError$1("Request failed with status code " + response.status, response.config, null, response.request, response));
  }
};
var isAbsoluteURL$1 = function isAbsoluteURL(url2) {
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url2);
};
var combineURLs$1 = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
};
var isAbsoluteURL2 = isAbsoluteURL$1;
var combineURLs2 = combineURLs$1;
var buildFullPath$1 = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL2(requestedURL)) {
    return combineURLs2(baseURL, requestedURL);
  }
  return requestedURL;
};
var followRedirects = { exports: {} };
var debug$1;
var debug_1 = function() {
  if (!debug$1) {
    try {
      debug$1 = require("debug")("follow-redirects");
    } catch (error) {
    }
    if (typeof debug$1 !== "function") {
      debug$1 = function() {
      };
    }
  }
  debug$1.apply(null, arguments);
};
var url$1 = require$$0$2;
var URL = url$1.URL;
var http$1 = require$$1;
var https$1 = require$$2;
var Writable = stream__default.Writable;
var assert = require$$4;
var debug = debug_1;
var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
var eventHandlers = Object.create(null);
events.forEach(function(event) {
  eventHandlers[event] = function(arg1, arg2, arg3) {
    this._redirectable.emit(event, arg1, arg2, arg3);
  };
});
var RedirectionError = createErrorType("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed");
var TooManyRedirectsError = createErrorType("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded");
var MaxBodyLengthExceededError = createErrorType("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit");
var WriteAfterEndError = createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
function RedirectableRequest(options, responseCallback) {
  Writable.call(this);
  this._sanitizeOptions(options);
  this._options = options;
  this._ended = false;
  this._ending = false;
  this._redirectCount = 0;
  this._redirects = [];
  this._requestBodyLength = 0;
  this._requestBodyBuffers = [];
  if (responseCallback) {
    this.on("response", responseCallback);
  }
  var self2 = this;
  this._onNativeResponse = function(response) {
    self2._processResponse(response);
  };
  this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);
RedirectableRequest.prototype.abort = function() {
  abortRequest(this._currentRequest);
  this.emit("abort");
};
RedirectableRequest.prototype.write = function(data, encoding, callback) {
  if (this._ending) {
    throw new WriteAfterEndError();
  }
  if (!(typeof data === "string" || typeof data === "object" && "length" in data)) {
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  }
  if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }
  if (data.length === 0) {
    if (callback) {
      callback();
    }
    return;
  }
  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
    this._requestBodyLength += data.length;
    this._requestBodyBuffers.push({ data, encoding });
    this._currentRequest.write(data, encoding, callback);
  } else {
    this.emit("error", new MaxBodyLengthExceededError());
    this.abort();
  }
};
RedirectableRequest.prototype.end = function(data, encoding, callback) {
  if (typeof data === "function") {
    callback = data;
    data = encoding = null;
  } else if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }
  if (!data) {
    this._ended = this._ending = true;
    this._currentRequest.end(null, null, callback);
  } else {
    var self2 = this;
    var currentRequest = this._currentRequest;
    this.write(data, encoding, function() {
      self2._ended = true;
      currentRequest.end(null, null, callback);
    });
    this._ending = true;
  }
};
RedirectableRequest.prototype.setHeader = function(name2, value) {
  this._options.headers[name2] = value;
  this._currentRequest.setHeader(name2, value);
};
RedirectableRequest.prototype.removeHeader = function(name2) {
  delete this._options.headers[name2];
  this._currentRequest.removeHeader(name2);
};
RedirectableRequest.prototype.setTimeout = function(msecs, callback) {
  var self2 = this;
  function destroyOnTimeout(socket) {
    socket.setTimeout(msecs);
    socket.removeListener("timeout", socket.destroy);
    socket.addListener("timeout", socket.destroy);
  }
  function startTimer(socket) {
    if (self2._timeout) {
      clearTimeout(self2._timeout);
    }
    self2._timeout = setTimeout(function() {
      self2.emit("timeout");
      clearTimer();
    }, msecs);
    destroyOnTimeout(socket);
  }
  function clearTimer() {
    if (self2._timeout) {
      clearTimeout(self2._timeout);
      self2._timeout = null;
    }
    self2.removeListener("abort", clearTimer);
    self2.removeListener("error", clearTimer);
    self2.removeListener("response", clearTimer);
    if (callback) {
      self2.removeListener("timeout", callback);
    }
    if (!self2.socket) {
      self2._currentRequest.removeListener("socket", startTimer);
    }
  }
  if (callback) {
    this.on("timeout", callback);
  }
  if (this.socket) {
    startTimer(this.socket);
  } else {
    this._currentRequest.once("socket", startTimer);
  }
  this.on("socket", destroyOnTimeout);
  this.on("abort", clearTimer);
  this.on("error", clearTimer);
  this.on("response", clearTimer);
  return this;
};
[
  "flushHeaders",
  "getHeader",
  "setNoDelay",
  "setSocketKeepAlive"
].forEach(function(method) {
  RedirectableRequest.prototype[method] = function(a, b) {
    return this._currentRequest[method](a, b);
  };
});
["aborted", "connection", "socket"].forEach(function(property) {
  Object.defineProperty(RedirectableRequest.prototype, property, {
    get: function() {
      return this._currentRequest[property];
    }
  });
});
RedirectableRequest.prototype._sanitizeOptions = function(options) {
  if (!options.headers) {
    options.headers = {};
  }
  if (options.host) {
    if (!options.hostname) {
      options.hostname = options.host;
    }
    delete options.host;
  }
  if (!options.pathname && options.path) {
    var searchPos = options.path.indexOf("?");
    if (searchPos < 0) {
      options.pathname = options.path;
    } else {
      options.pathname = options.path.substring(0, searchPos);
      options.search = options.path.substring(searchPos);
    }
  }
};
RedirectableRequest.prototype._performRequest = function() {
  var protocol = this._options.protocol;
  var nativeProtocol = this._options.nativeProtocols[protocol];
  if (!nativeProtocol) {
    this.emit("error", new TypeError("Unsupported protocol " + protocol));
    return;
  }
  if (this._options.agents) {
    var scheme = protocol.substr(0, protocol.length - 1);
    this._options.agent = this._options.agents[scheme];
  }
  var request2 = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
  this._currentUrl = url$1.format(this._options);
  request2._redirectable = this;
  for (var e = 0; e < events.length; e++) {
    request2.on(events[e], eventHandlers[events[e]]);
  }
  if (this._isRedirect) {
    var i = 0;
    var self2 = this;
    var buffers = this._requestBodyBuffers;
    (function writeNext(error) {
      if (request2 === self2._currentRequest) {
        if (error) {
          self2.emit("error", error);
        } else if (i < buffers.length) {
          var buffer = buffers[i++];
          if (!request2.finished) {
            request2.write(buffer.data, buffer.encoding, writeNext);
          }
        } else if (self2._ended) {
          request2.end();
        }
      }
    })();
  }
};
RedirectableRequest.prototype._processResponse = function(response) {
  var statusCode = response.statusCode;
  if (this._options.trackRedirects) {
    this._redirects.push({
      url: this._currentUrl,
      headers: response.headers,
      statusCode
    });
  }
  var location2 = response.headers.location;
  if (location2 && this._options.followRedirects !== false && statusCode >= 300 && statusCode < 400) {
    abortRequest(this._currentRequest);
    response.destroy();
    if (++this._redirectCount > this._options.maxRedirects) {
      this.emit("error", new TooManyRedirectsError());
      return;
    }
    if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" || statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
      this._options.method = "GET";
      this._requestBodyBuffers = [];
      removeMatchingHeaders(/^content-/i, this._options.headers);
    }
    var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);
    var currentUrlParts = url$1.parse(this._currentUrl);
    var currentHost = currentHostHeader || currentUrlParts.host;
    var currentUrl = /^\w+:/.test(location2) ? this._currentUrl : url$1.format(Object.assign(currentUrlParts, { host: currentHost }));
    var redirectUrl;
    try {
      redirectUrl = url$1.resolve(currentUrl, location2);
    } catch (cause) {
      this.emit("error", new RedirectionError(cause));
      return;
    }
    debug("redirecting to", redirectUrl);
    this._isRedirect = true;
    var redirectUrlParts = url$1.parse(redirectUrl);
    Object.assign(this._options, redirectUrlParts);
    if (!(redirectUrlParts.host === currentHost || isSubdomainOf(redirectUrlParts.host, currentHost))) {
      removeMatchingHeaders(/^(?:authorization|cookie)$/i, this._options.headers);
    }
    if (typeof this._options.beforeRedirect === "function") {
      var responseDetails = { headers: response.headers };
      try {
        this._options.beforeRedirect.call(null, this._options, responseDetails);
      } catch (err) {
        this.emit("error", err);
        return;
      }
      this._sanitizeOptions(this._options);
    }
    try {
      this._performRequest();
    } catch (cause) {
      this.emit("error", new RedirectionError(cause));
    }
  } else {
    response.responseUrl = this._currentUrl;
    response.redirects = this._redirects;
    this.emit("response", response);
    this._requestBodyBuffers = [];
  }
};
function wrap(protocols) {
  var exports = {
    maxRedirects: 21,
    maxBodyLength: 10 * 1024 * 1024
  };
  var nativeProtocols = {};
  Object.keys(protocols).forEach(function(scheme) {
    var protocol = scheme + ":";
    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);
    function request2(input, options, callback) {
      if (typeof input === "string") {
        var urlStr = input;
        try {
          input = urlToOptions(new URL(urlStr));
        } catch (err) {
          input = url$1.parse(urlStr);
        }
      } else if (URL && input instanceof URL) {
        input = urlToOptions(input);
      } else {
        callback = options;
        options = input;
        input = { protocol };
      }
      if (typeof options === "function") {
        callback = options;
        options = null;
      }
      options = Object.assign({
        maxRedirects: exports.maxRedirects,
        maxBodyLength: exports.maxBodyLength
      }, input, options);
      options.nativeProtocols = nativeProtocols;
      assert.equal(options.protocol, protocol, "protocol mismatch");
      debug("options", options);
      return new RedirectableRequest(options, callback);
    }
    function get2(input, options, callback) {
      var wrappedRequest = wrappedProtocol.request(input, options, callback);
      wrappedRequest.end();
      return wrappedRequest;
    }
    Object.defineProperties(wrappedProtocol, {
      request: { value: request2, configurable: true, enumerable: true, writable: true },
      get: { value: get2, configurable: true, enumerable: true, writable: true }
    });
  });
  return exports;
}
function noop() {
}
function urlToOptions(urlObject) {
  var options = {
    protocol: urlObject.protocol,
    hostname: urlObject.hostname.startsWith("[") ? urlObject.hostname.slice(1, -1) : urlObject.hostname,
    hash: urlObject.hash,
    search: urlObject.search,
    pathname: urlObject.pathname,
    path: urlObject.pathname + urlObject.search,
    href: urlObject.href
  };
  if (urlObject.port !== "") {
    options.port = Number(urlObject.port);
  }
  return options;
}
function removeMatchingHeaders(regex, headers) {
  var lastValue;
  for (var header in headers) {
    if (regex.test(header)) {
      lastValue = headers[header];
      delete headers[header];
    }
  }
  return lastValue === null || typeof lastValue === "undefined" ? void 0 : String(lastValue).trim();
}
function createErrorType(code2, defaultMessage) {
  function CustomError(cause) {
    Error.captureStackTrace(this, this.constructor);
    if (!cause) {
      this.message = defaultMessage;
    } else {
      this.message = defaultMessage + ": " + cause.message;
      this.cause = cause;
    }
  }
  CustomError.prototype = new Error();
  CustomError.prototype.constructor = CustomError;
  CustomError.prototype.name = "Error [" + code2 + "]";
  CustomError.prototype.code = code2;
  return CustomError;
}
function abortRequest(request2) {
  for (var e = 0; e < events.length; e++) {
    request2.removeListener(events[e], eventHandlers[events[e]]);
  }
  request2.on("error", noop);
  request2.abort();
}
function isSubdomainOf(subdomain, domain) {
  const dot = subdomain.length - domain.length - 1;
  return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
}
followRedirects.exports = wrap({ http: http$1, https: https$1 });
followRedirects.exports.wrap = wrap;
const name = "axios";
const version = "0.21.4";
const description = "Promise based HTTP client for the browser and node.js";
const main = "index.js";
const scripts = {
  test: "grunt test",
  start: "node ./sandbox/server.js",
  build: "NODE_ENV=production grunt build",
  preversion: "npm test",
  version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
  postversion: "git push && git push --tags",
  examples: "node ./examples/server.js",
  coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
  fix: "eslint --fix lib/**/*.js"
};
const repository = {
  type: "git",
  url: "https://github.com/axios/axios.git"
};
const keywords = [
  "xhr",
  "http",
  "ajax",
  "promise",
  "node"
];
const author = "Matt Zabriskie";
const license = "MIT";
const bugs = {
  url: "https://github.com/axios/axios/issues"
};
const homepage = "https://axios-http.com";
const devDependencies = {
  coveralls: "^3.0.0",
  "es6-promise": "^4.2.4",
  grunt: "^1.3.0",
  "grunt-banner": "^0.6.0",
  "grunt-cli": "^1.2.0",
  "grunt-contrib-clean": "^1.1.0",
  "grunt-contrib-watch": "^1.0.0",
  "grunt-eslint": "^23.0.0",
  "grunt-karma": "^4.0.0",
  "grunt-mocha-test": "^0.13.3",
  "grunt-ts": "^6.0.0-beta.19",
  "grunt-webpack": "^4.0.2",
  "istanbul-instrumenter-loader": "^1.0.0",
  "jasmine-core": "^2.4.1",
  karma: "^6.3.2",
  "karma-chrome-launcher": "^3.1.0",
  "karma-firefox-launcher": "^2.1.0",
  "karma-jasmine": "^1.1.1",
  "karma-jasmine-ajax": "^0.1.13",
  "karma-safari-launcher": "^1.0.0",
  "karma-sauce-launcher": "^4.3.6",
  "karma-sinon": "^1.0.5",
  "karma-sourcemap-loader": "^0.3.8",
  "karma-webpack": "^4.0.2",
  "load-grunt-tasks": "^3.5.2",
  minimist: "^1.2.0",
  mocha: "^8.2.1",
  sinon: "^4.5.0",
  "terser-webpack-plugin": "^4.2.3",
  typescript: "^4.0.5",
  "url-search-params": "^0.10.0",
  webpack: "^4.44.2",
  "webpack-dev-server": "^3.11.0"
};
const browser = {
  "./lib/adapters/http.js": "./lib/adapters/xhr.js"
};
const jsdelivr = "dist/axios.min.js";
const unpkg = "dist/axios.min.js";
const typings = "./index.d.ts";
const dependencies = {
  "follow-redirects": "^1.14.0"
};
const bundlesize = [
  {
    path: "./dist/axios.min.js",
    threshold: "5kB"
  }
];
const require$$0 = {
  name,
  version,
  description,
  main,
  scripts,
  repository,
  keywords,
  author,
  license,
  bugs,
  homepage,
  devDependencies,
  browser,
  jsdelivr,
  unpkg,
  typings,
  dependencies,
  bundlesize
};
var utils$6 = utils$a;
var settle2 = settle$1;
var buildFullPath2 = buildFullPath$1;
var buildURL$1 = buildURL$2;
var http = require$$1;
var https = require$$2;
var httpFollow = followRedirects.exports.http;
var httpsFollow = followRedirects.exports.https;
var url = require$$0$2;
var zlib = require$$8;
var pkg$1 = require$$0;
var createError2 = createError$2;
var enhanceError$1 = enhanceError$3;
var isHttps = /https:?/;
function setProxy(options, proxy, location2) {
  options.hostname = proxy.host;
  options.host = proxy.host;
  options.port = proxy.port;
  options.path = location2;
  if (proxy.auth) {
    var base64 = Buffer.from(proxy.auth.username + ":" + proxy.auth.password, "utf8").toString("base64");
    options.headers["Proxy-Authorization"] = "Basic " + base64;
  }
  options.beforeRedirect = function beforeRedirect(redirection) {
    redirection.headers.host = redirection.host;
    setProxy(redirection, proxy, redirection.href);
  };
}
var http_1 = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
    var resolve = function resolve2(value) {
      resolvePromise(value);
    };
    var reject = function reject2(value) {
      rejectPromise(value);
    };
    var data = config.data;
    var headers = config.headers;
    if ("User-Agent" in headers || "user-agent" in headers) {
      if (!headers["User-Agent"] && !headers["user-agent"]) {
        delete headers["User-Agent"];
        delete headers["user-agent"];
      }
    } else {
      headers["User-Agent"] = "axios/" + pkg$1.version;
    }
    if (data && !utils$6.isStream(data)) {
      if (Buffer.isBuffer(data))
        ;
      else if (utils$6.isArrayBuffer(data)) {
        data = Buffer.from(new Uint8Array(data));
      } else if (utils$6.isString(data)) {
        data = Buffer.from(data, "utf-8");
      } else {
        return reject(createError2("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream", config));
      }
      headers["Content-Length"] = data.length;
    }
    var auth = void 0;
    if (config.auth) {
      var username = config.auth.username || "";
      var password = config.auth.password || "";
      auth = username + ":" + password;
    }
    var fullPath = buildFullPath2(config.baseURL, config.url);
    var parsed = url.parse(fullPath);
    var protocol = parsed.protocol || "http:";
    if (!auth && parsed.auth) {
      var urlAuth = parsed.auth.split(":");
      var urlUsername = urlAuth[0] || "";
      var urlPassword = urlAuth[1] || "";
      auth = urlUsername + ":" + urlPassword;
    }
    if (auth) {
      delete headers.Authorization;
    }
    var isHttpsRequest = isHttps.test(protocol);
    var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;
    var options = {
      path: buildURL$1(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ""),
      method: config.method.toUpperCase(),
      headers,
      agent,
      agents: { http: config.httpAgent, https: config.httpsAgent },
      auth
    };
    if (config.socketPath) {
      options.socketPath = config.socketPath;
    } else {
      options.hostname = parsed.hostname;
      options.port = parsed.port;
    }
    var proxy = config.proxy;
    if (!proxy && proxy !== false) {
      var proxyEnv = protocol.slice(0, -1) + "_proxy";
      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
      if (proxyUrl) {
        var parsedProxyUrl = url.parse(proxyUrl);
        var noProxyEnv = {}.NO_PROXY;
        var shouldProxy = true;
        if (noProxyEnv) {
          var noProxy = noProxyEnv.split(",").map(function trim2(s) {
            return s.trim();
          });
          shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
            if (!proxyElement) {
              return false;
            }
            if (proxyElement === "*") {
              return true;
            }
            if (proxyElement[0] === "." && parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
              return true;
            }
            return parsed.hostname === proxyElement;
          });
        }
        if (shouldProxy) {
          proxy = {
            host: parsedProxyUrl.hostname,
            port: parsedProxyUrl.port,
            protocol: parsedProxyUrl.protocol
          };
          if (parsedProxyUrl.auth) {
            var proxyUrlAuth = parsedProxyUrl.auth.split(":");
            proxy.auth = {
              username: proxyUrlAuth[0],
              password: proxyUrlAuth[1]
            };
          }
        }
      }
    }
    if (proxy) {
      options.headers.host = parsed.hostname + (parsed.port ? ":" + parsed.port : "");
      setProxy(options, proxy, protocol + "//" + parsed.hostname + (parsed.port ? ":" + parsed.port : "") + options.path);
    }
    var transport;
    var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
    if (config.transport) {
      transport = config.transport;
    } else if (config.maxRedirects === 0) {
      transport = isHttpsProxy ? https : http;
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      transport = isHttpsProxy ? httpsFollow : httpFollow;
    }
    if (config.maxBodyLength > -1) {
      options.maxBodyLength = config.maxBodyLength;
    }
    var req = transport.request(options, function handleResponse(res) {
      if (req.aborted)
        return;
      var stream = res;
      var lastRequest = res.req || req;
      if (res.statusCode !== 204 && lastRequest.method !== "HEAD" && config.decompress !== false) {
        switch (res.headers["content-encoding"]) {
          case "gzip":
          case "compress":
          case "deflate":
            stream = stream.pipe(zlib.createUnzip());
            delete res.headers["content-encoding"];
            break;
        }
      }
      var response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        config,
        request: lastRequest
      };
      if (config.responseType === "stream") {
        response.data = stream;
        settle2(resolve, reject, response);
      } else {
        var responseBuffer = [];
        var totalResponseBytes = 0;
        stream.on("data", function handleStreamData(chunk) {
          responseBuffer.push(chunk);
          totalResponseBytes += chunk.length;
          if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
            stream.destroy();
            reject(createError2("maxContentLength size of " + config.maxContentLength + " exceeded", config, null, lastRequest));
          }
        });
        stream.on("error", function handleStreamError(err) {
          if (req.aborted)
            return;
          reject(enhanceError$1(err, config, null, lastRequest));
        });
        stream.on("end", function handleStreamEnd() {
          var responseData = Buffer.concat(responseBuffer);
          if (config.responseType !== "arraybuffer") {
            responseData = responseData.toString(config.responseEncoding);
            if (!config.responseEncoding || config.responseEncoding === "utf8") {
              responseData = utils$6.stripBOM(responseData);
            }
          }
          response.data = responseData;
          settle2(resolve, reject, response);
        });
      }
    });
    req.on("error", function handleRequestError(err) {
      if (req.aborted && err.code !== "ERR_FR_TOO_MANY_REDIRECTS")
        return;
      reject(enhanceError$1(err, config, null, req));
    });
    if (config.timeout) {
      var timeout = parseInt(config.timeout, 10);
      if (isNaN(timeout)) {
        reject(createError2("error trying to parse `config.timeout` to int", config, "ERR_PARSE_TIMEOUT", req));
        return;
      }
      req.setTimeout(timeout, function handleRequestTimeout() {
        req.abort();
        reject(createError2("timeout of " + timeout + "ms exceeded", config, config.transitional && config.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", req));
      });
    }
    if (config.cancelToken) {
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (req.aborted)
          return;
        req.abort();
        reject(cancel);
      });
    }
    if (utils$6.isStream(data)) {
      data.on("error", function handleStreamError(err) {
        reject(enhanceError$1(err, config, null, req));
      }).pipe(req);
    } else {
      req.end(data);
    }
  });
};
var utils$5 = utils$a;
var normalizeHeaderName2 = normalizeHeaderName$1;
var enhanceError2 = enhanceError$3;
var DEFAULT_CONTENT_TYPE = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function setContentTypeIfUnset(headers, value) {
  if (!utils$5.isUndefined(headers) && utils$5.isUndefined(headers["Content-Type"])) {
    headers["Content-Type"] = value;
  }
}
function getDefaultAdapter() {
  var adapter;
  if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
    adapter = http_1;
  }
  return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils$5.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$5.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults$3 = {
  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName2(headers, "Accept");
    normalizeHeaderName2(headers, "Content-Type");
    if (utils$5.isFormData(data) || utils$5.isArrayBuffer(data) || utils$5.isBuffer(data) || utils$5.isStream(data) || utils$5.isFile(data) || utils$5.isBlob(data)) {
      return data;
    }
    if (utils$5.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$5.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
      return data.toString();
    }
    if (utils$5.isObject(data) || headers && headers["Content-Type"] === "application/json") {
      setContentTypeIfUnset(headers, "application/json");
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    var transitional2 = this.transitional;
    var silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
    var forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
    if (strictJSONParsing || forcedJSONParsing && utils$5.isString(data) && data.length) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw enhanceError2(e, this, "E_JSON_PARSE");
          }
          throw e;
        }
      }
    }
    return data;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};
defaults$3.headers = {
  common: {
    "Accept": "application/json, text/plain, */*"
  }
};
utils$5.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
  defaults$3.headers[method] = {};
});
utils$5.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  defaults$3.headers[method] = utils$5.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_1 = defaults$3;
var utils$4 = utils$a;
var defaults$2 = defaults_1;
var transformData$1 = function transformData(data, headers, fns) {
  var context = this || defaults$2;
  utils$4.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });
  return data;
};
var isCancel$1 = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};
var utils$3 = utils$a;
var transformData2 = transformData$1;
var isCancel2 = isCancel$1;
var defaults$1 = defaults_1;
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}
var dispatchRequest$1 = function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = config.headers || {};
  config.data = transformData2.call(config, config.data, config.headers, config.transformRequest);
  config.headers = utils$3.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
  utils$3.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults$1.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    response.data = transformData2.call(config, response.data, response.headers, config.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel2(reason)) {
      throwIfCancellationRequested(config);
      if (reason && reason.response) {
        reason.response.data = transformData2.call(config, reason.response.data, reason.response.headers, config.transformResponse);
      }
    }
    return Promise.reject(reason);
  });
};
var utils$2 = utils$a;
var mergeConfig$2 = function mergeConfig(config1, config2) {
  config2 = config2 || {};
  var config = {};
  var valueFromConfig2Keys = ["url", "method", "data"];
  var mergeDeepPropertiesKeys = ["headers", "auth", "proxy", "params"];
  var defaultToConfig2Keys = [
    "baseURL",
    "transformRequest",
    "transformResponse",
    "paramsSerializer",
    "timeout",
    "timeoutMessage",
    "withCredentials",
    "adapter",
    "responseType",
    "xsrfCookieName",
    "xsrfHeaderName",
    "onUploadProgress",
    "onDownloadProgress",
    "decompress",
    "maxContentLength",
    "maxBodyLength",
    "maxRedirects",
    "transport",
    "httpAgent",
    "httpsAgent",
    "cancelToken",
    "socketPath",
    "responseEncoding"
  ];
  var directMergeKeys = ["validateStatus"];
  function getMergedValue(target, source2) {
    if (utils$2.isPlainObject(target) && utils$2.isPlainObject(source2)) {
      return utils$2.merge(target, source2);
    } else if (utils$2.isPlainObject(source2)) {
      return utils$2.merge({}, source2);
    } else if (utils$2.isArray(source2)) {
      return source2.slice();
    }
    return source2;
  }
  function mergeDeepProperties(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils$2.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(void 0, config1[prop]);
    }
  }
  utils$2.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(void 0, config2[prop]);
    }
  });
  utils$2.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
  utils$2.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(void 0, config2[prop]);
    } else if (!utils$2.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(void 0, config1[prop]);
    }
  });
  utils$2.forEach(directMergeKeys, function merge2(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(void 0, config1[prop]);
    }
  });
  var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys).concat(directMergeKeys);
  var otherKeys = Object.keys(config1).concat(Object.keys(config2)).filter(function filterAxiosKeys(key) {
    return axiosKeys.indexOf(key) === -1;
  });
  utils$2.forEach(otherKeys, mergeDeepProperties);
  return config;
};
var pkg = require$$0;
var validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
  validators$1[type] = function validator2(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
var currentVerArr = pkg.version.split(".");
function isOlderVersion(version2, thanVersion) {
  var pkgVersionArr = thanVersion ? thanVersion.split(".") : currentVerArr;
  var destVer = version2.split(".");
  for (var i = 0; i < 3; i++) {
    if (pkgVersionArr[i] > destVer[i]) {
      return true;
    } else if (pkgVersionArr[i] < destVer[i]) {
      return false;
    }
  }
  return false;
}
validators$1.transitional = function transitional(validator2, version2, message) {
  var isDeprecated = version2 && isOlderVersion(version2);
  function formatMessage(opt, desc) {
    return "[Axios v" + pkg.version + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return function(value, opt, opts) {
    if (validator2 === false) {
      throw new Error(formatMessage(opt, " has been removed in " + version2));
    }
    if (isDeprecated && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(formatMessage(opt, " has been deprecated since v" + version2 + " and will be removed in the near future"));
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new TypeError("options must be an object");
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator2 = schema[opt];
    if (validator2) {
      var value = options[opt];
      var result = value === void 0 || validator2(value, opt, options);
      if (result !== true) {
        throw new TypeError("option " + opt + " must be " + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error("Unknown option " + opt);
    }
  }
}
var validator$1 = {
  isOlderVersion,
  assertOptions,
  validators: validators$1
};
var utils$1 = utils$a;
var buildURL2 = buildURL$2;
var InterceptorManager = InterceptorManager_1;
var dispatchRequest2 = dispatchRequest$1;
var mergeConfig$1 = mergeConfig$2;
var validator = validator$1;
var validators = validator.validators;
function Axios$1(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
Axios$1.prototype.request = function request(config) {
  if (typeof config === "string") {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }
  config = mergeConfig$1(this.defaults, config);
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = "get";
  }
  var transitional2 = config.transitional;
  if (transitional2 !== void 0) {
    validator.assertOptions(transitional2, {
      silentJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
      forcedJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
      clarifyTimeoutError: validators.transitional(validators.boolean, "1.0.0")
    }, false);
  }
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
      return;
    }
    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });
  var promise;
  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest2, void 0];
    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);
    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }
  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }
  try {
    promise = dispatchRequest2(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }
  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }
  return promise;
};
Axios$1.prototype.getUri = function getUri(config) {
  config = mergeConfig$1(this.defaults, config);
  return buildURL2(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
};
utils$1.forEach(["delete", "get", "head", "options"], function forEachMethodNoData2(method) {
  Axios$1.prototype[method] = function(url2, config) {
    return this.request(mergeConfig$1(config || {}, {
      method,
      url: url2,
      data: (config || {}).data
    }));
  };
});
utils$1.forEach(["post", "put", "patch"], function forEachMethodWithData2(method) {
  Axios$1.prototype[method] = function(url2, data, config) {
    return this.request(mergeConfig$1(config || {}, {
      method,
      url: url2,
      data
    }));
  };
});
var Axios_1 = Axios$1;
function Cancel$1(message) {
  this.message = message;
}
Cancel$1.prototype.toString = function toString2() {
  return "Cancel" + (this.message ? ": " + this.message : "");
};
Cancel$1.prototype.__CANCEL__ = true;
var Cancel_1 = Cancel$1;
var Cancel = Cancel_1;
function CancelToken(executor) {
  if (typeof executor !== "function") {
    throw new TypeError("executor must be a function.");
  }
  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      return;
    }
    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token,
    cancel
  };
};
var CancelToken_1 = CancelToken;
var spread = function spread2(callback) {
  return function wrap2(arr) {
    return callback.apply(null, arr);
  };
};
var isAxiosError = function isAxiosError2(payload) {
  return typeof payload === "object" && payload.isAxiosError === true;
};
var utils = utils$a;
var bind2 = bind$2;
var Axios = Axios_1;
var mergeConfig2 = mergeConfig$2;
var defaults = defaults_1;
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind2(Axios.prototype.request, context);
  utils.extend(instance, Axios.prototype, context);
  utils.extend(instance, context);
  return instance;
}
var axios$1 = createInstance(defaults);
axios$1.Axios = Axios;
axios$1.create = function create(instanceConfig) {
  return createInstance(mergeConfig2(axios$1.defaults, instanceConfig));
};
axios$1.Cancel = Cancel_1;
axios$1.CancelToken = CancelToken_1;
axios$1.isCancel = isCancel$1;
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = spread;
axios$1.isAxiosError = isAxiosError;
axios$2.exports = axios$1;
axios$2.exports.default = axios$1;
var axios = axios$2.exports;
const service = axios.create({
  baseURL: "https://thegrind-backend-5x42fcw6uq-df.a.run.app",
  timeout: 5e3
});
service.interceptors.response.use((response) => {
  debugger;
  return response;
}, (error) => {
  if (error.response.status === 404) {
    debugger;
    error.response;
  } else {
    debugger;
    return error.response;
  }
});
const getUser = (params) => {
  debugger;
  return service.get("/api/user/getUserInfo");
};
const AccountSymbol = Symbol();
const useAccountProvide = () => {
  const state = vue_cjs_prod.ref({ status: "init" });
  const isLoading = vue_cjs_prod.computed(() => state.value.status === "loading");
  const loadAccount = async (connection, pubkey) => {
    if (state.value.status === "loading") {
      console.warn("still loading, skipping");
      return;
    }
    state.value = { status: "loading" };
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      let info = {};
      await getUser({}).then((res) => {
        info = res.data;
      });
      state.value = info !== null ? { status: "success", data: { info, pubkey } } : { status: "error", error: "unable to load account" };
    } catch (error) {
      state.value = { status: "error", error };
    }
  };
  vue_cjs_prod.provide(AccountSymbol, {
    state: vue_cjs_prod.readonly(state),
    isLoading: vue_cjs_prod.readonly(isLoading),
    load: loadAccount
  });
};
const useAccountInject = () => {
  const accountContext = vue_cjs_prod.inject(AccountSymbol);
  if (!accountContext) {
    throw new Error(`no provider found for AccountSymbol useAccountProvide`);
  }
  return accountContext;
};
const HamburgerSymbol = Symbol();
const useHamurgerProvide = () => {
  const state = vue_cjs_prod.ref(false);
  const openFullHamurger = () => {
    state.value = !state.value;
  };
  vue_cjs_prod.provide(HamburgerSymbol, {
    currentHamburger: vue_cjs_prod.readonly(state),
    change: openFullHamurger
  });
};
const useHamburgerInject = () => {
  const hamburgerContext = vue_cjs_prod.inject(HamburgerSymbol);
  if (!hamburgerContext) {
    throw new Error(`no provider found for HamburgerContext useHamburgerProvide`);
  }
  return hamburgerContext;
};
const getMyCourses = (params) => {
  debugger;
  return service.get(`/my-lessons/email/${params.email}`, {
    params: {
      page: params.skip,
      pageSize: params.pageSize
    }
  });
};
const getLessonsByClassId = (id) => {
  return service.get(`/lessons/class/${id}`);
};
const getLesson = (id) => {
  return service.get(`lessons/${id}`);
};
const getVideoByCourseId = (id) => {
  return service.get(`videos/videoSection/${id}`);
};
const getVideosWithSection = (id) => {
  return service.get(`videos/videoSection/${id}`);
};
const getVideo = (id) => {
  return service.get(`videos/${id}`);
};
const CourseSymbol = Symbol();
const useCoursesProvide = () => {
  const coursesCache = vue_cjs_prod.ref([]);
  const isLoading = vue_cjs_prod.computed(() => state.value.status === "loading");
  const state = vue_cjs_prod.ref({ status: "init" });
  const loadCourses = async (params) => {
    if (state.value.status === "loading") {
      console.warn("still loading, skipping");
      return [];
    }
    state.value = { status: "loading" };
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      let info = {};
      debugger;
      await getMyCourses(params).then((res) => {
        debugger;
        const courses2 = res.data.data;
        coursesCache.value = [...courses2];
        state.value = info !== null ? { status: "success", data: coursesCache.value, total: res.data.meta.total } : { status: "error", error: "unable to load account" };
        return courses2;
      });
    } catch (error) {
      state.value = { status: "error", error };
      return [];
    }
  };
  vue_cjs_prod.provide(CourseSymbol, {
    state,
    isLoading: vue_cjs_prod.readonly(isLoading),
    load: loadCourses
  });
};
const useCoursesInject = () => {
  const localeContext = vue_cjs_prod.inject(CourseSymbol);
  if (!localeContext) {
    throw new Error(`no provider found for JobSymbol useJobsProvide`);
  }
  return localeContext;
};
const LessonSymbol$2 = Symbol();
const useLessonsProvide = () => {
  const lessonsCache = vue_cjs_prod.ref([]);
  const isLoading = vue_cjs_prod.computed(() => state.value.status === "loading");
  const state = vue_cjs_prod.ref({ status: "init" });
  const loadLessons = async (params) => {
    if (state.value.status === "loading") {
      console.warn("still loading, skipping");
      return [];
    }
    state.value = { status: "loading" };
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      let info = {};
      debugger;
      await getLessonsByClassId(params.id).then((res) => {
        debugger;
        const lessons2 = res.data;
        lessonsCache.value = [...lessons2];
        state.value = info !== null ? { status: "success", data: lessonsCache.value, total: res.data.length } : { status: "error", error: "unable to load account" };
        return lessons2;
      });
    } catch (error) {
      state.value = { status: "error", error };
      return [];
    }
  };
  vue_cjs_prod.provide(LessonSymbol$2, {
    state,
    isLoading: vue_cjs_prod.readonly(isLoading),
    load: loadLessons
  });
};
const useLesssonsInject = () => {
  const localeContext = vue_cjs_prod.inject(LessonSymbol$2);
  if (!localeContext) {
    throw new Error(`no provider found for JobSymbol useJobsProvide`);
  }
  return localeContext;
};
const LessonSymbol$1 = Symbol();
const useLessonProvide = () => {
  const lessonCache = vue_cjs_prod.ref();
  const isLoading = vue_cjs_prod.computed(() => state.value.status === "loading");
  const state = vue_cjs_prod.ref({ status: "init" });
  const loadLesson = async (params) => {
    if (state.value.status === "loading") {
      console.warn("still loading, skipping");
      return null;
    }
    state.value = { status: "loading" };
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      let info = {};
      debugger;
      await getLesson(params.id).then((res) => {
        debugger;
        const lesson2 = res.data;
        lessonCache.value = __spreadValues({}, lesson2);
        state.value = info !== null ? { status: "success", data: lessonCache.value, total: 1 } : { status: "error", error: "unable to load account" };
        return lesson2;
      });
    } catch (error) {
      state.value = { status: "error", error };
      return null;
    }
  };
  vue_cjs_prod.provide(LessonSymbol$1, {
    state,
    isLoading: vue_cjs_prod.readonly(isLoading),
    load: loadLesson
  });
};
const useLessonInject = () => {
  const localeContext = vue_cjs_prod.inject(LessonSymbol$1);
  if (!localeContext) {
    throw new Error(`no provider found for JobSymbol useJobsProvide`);
  }
  return localeContext;
};
const VideoSymbol$1 = Symbol();
const useVideoProvide = () => {
  const videoCache = vue_cjs_prod.ref();
  const isLoading = vue_cjs_prod.computed(() => state.value.status === "loading");
  const state = vue_cjs_prod.ref({ status: "init" });
  const state2 = vue_cjs_prod.ref({ status: "init" });
  const loadVideo = async (params) => {
    if (state.value.status === "loading") {
      console.warn("still loading, skipping");
      return null;
    }
    state.value = { status: "loading" };
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      let info = {};
      await getVideo(params.id).then((res) => {
        const video2 = res.data;
        videoCache.value = __spreadValues({}, video2);
        state.value = info !== null ? { status: "success", data: videoCache.value, total: 1 } : { status: "error", error: "unable to load account" };
        return video2;
      });
    } catch (error) {
      state.value = { status: "error", error };
      return null;
    }
  };
  const loadOtherVideos = async (params) => {
    if (state2.value.status === "loading") {
      console.warn("still loading, skipping");
      return null;
    }
    state2.value = { status: "loading" };
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      let info = {};
      debugger;
      await getVideosWithSection(params.id).then((res) => {
        debugger;
        const videos2 = res.data;
        state2.value = info !== null ? { status: "success", data: videos2, total: res.data.length } : { status: "error", error: "unable to load account" };
        return videos2;
      });
    } catch (error) {
      state2.value = { status: "error", error };
      return null;
    }
  };
  vue_cjs_prod.provide(VideoSymbol$1, {
    state,
    state2,
    isLoading: vue_cjs_prod.readonly(isLoading),
    load: loadVideo,
    load2: loadOtherVideos
  });
};
const useVideoInject = () => {
  const localeContext = vue_cjs_prod.inject(VideoSymbol$1);
  if (!localeContext) {
    throw new Error(`no provider found for VideoSymbol useVideosProvide`);
  }
  return localeContext;
};
const getCompanys = (params) => {
  debugger;
  return service.get("/companys", {
    params: {
      page: params.skip,
      pageSize: params.pageSize
    }
  });
};
const getCompany = (params) => {
  debugger;
  return service.get(`/companys/${params.id}`);
};
const CompanySymbol$1 = Symbol();
const useCompanysProvide = () => {
  vue_cjs_prod.ref([]);
  vue_cjs_prod.ref(1);
  const isLoading = vue_cjs_prod.computed(() => state.value.status === "loading");
  const state = vue_cjs_prod.ref({ status: "init" });
  const loadCompanys = async (params) => {
    if (state.value.status === "loading") {
      console.warn("still loading, skipping");
      return [];
    }
    state.value = { status: "loading" };
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      let info = {};
      await getCompanys(params).then((res) => {
        debugger;
        const companys2 = res.data.data;
        state.value = info !== null ? { status: "success", data: companys2, total: res.data.meta.total } : { status: "error", error: "unable to load account" };
        return companys2;
      });
    } catch (error) {
      state.value = { status: "error", error };
      return [];
    }
  };
  vue_cjs_prod.provide(CompanySymbol$1, {
    state,
    isLoading: vue_cjs_prod.readonly(isLoading),
    load: loadCompanys
  });
};
const useCompanysInject = () => {
  const localeContext = vue_cjs_prod.inject(CompanySymbol$1);
  if (!localeContext) {
    throw new Error(`no provider found for JobSymbol useJobsProvide`);
  }
  return localeContext;
};
const toFullDate = (date) => {
  debugger;
  const d = new Date(date);
  const day = d.getDate() >= 10 ? d.getDate() : "0" + d.getDate();
  const m = d.getMonth() + 1 >= 10 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1);
  const y = d.getFullYear();
  return y + "/" + m + "/" + day;
};
const checkIfEmpty = (testObject) => {
  debugger;
  return !!(testObject && testObject.id);
};
const isMobile = () => {
  debugger;
  if (navigator != null) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
const DeviceSymbol = Symbol();
const useDeviceProvide = () => {
  const mobileState = vue_cjs_prod.ref(false);
  vue_cjs_prod.ref(false);
  vue_cjs_prod.ref(true);
  const setDevice = () => {
    debugger;
    mobileState.value = isMobile();
  };
  vue_cjs_prod.provide(DeviceSymbol, {
    isMobile: vue_cjs_prod.readonly(mobileState),
    setDevice
  });
};
const useDeviceInject = () => {
  const deviceContext = vue_cjs_prod.inject(DeviceSymbol);
  if (!deviceContext) {
    throw new Error(`no provider found for deviceContext useDeviceProvide`);
  }
  return deviceContext;
};
const CompanySymbol = Symbol();
const useCompanyProvide = () => {
  const companyCache = vue_cjs_prod.ref();
  const isLoading = vue_cjs_prod.computed(() => state.value.status === "loading");
  const state = vue_cjs_prod.ref({ status: "init" });
  const loadCompany = async (params) => {
    if (state.value.status === "loading") {
      console.warn("still loading, skipping");
      return null;
    }
    state.value = { status: "loading" };
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      let info = {};
      debugger;
      await getCompany(params).then((res) => {
        debugger;
        const company2 = res.data;
        companyCache.value = __spreadValues({}, company2);
        state.value = info !== null ? { status: "success", data: companyCache.value, total: 1 } : { status: "error", error: "unable to load account" };
        return company2;
      });
    } catch (error) {
      state.value = { status: "error", error };
      return null;
    }
  };
  vue_cjs_prod.provide(CompanySymbol, {
    state,
    isLoading: vue_cjs_prod.readonly(isLoading),
    load: loadCompany
  });
};
const useCompanyInject = () => {
  const localeContext = vue_cjs_prod.inject(CompanySymbol);
  if (!localeContext) {
    throw new Error(`no provider found for CompanySymbol useCompanyProvide`);
  }
  return localeContext;
};
const VideoSymbol = Symbol();
const useCourseVideoProvide = () => {
  const videosCache = vue_cjs_prod.ref();
  const isLoading = vue_cjs_prod.computed(() => state.value.status === "loading");
  const state = vue_cjs_prod.ref({ status: "init" });
  const loadCourseVideo = async (params) => {
    if (state.value.status === "loading") {
      console.warn("still loading, skipping");
      return null;
    }
    state.value = { status: "loading" };
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      let info = {};
      debugger;
      await getVideoByCourseId(params.id).then((res) => {
        debugger;
        const videos2 = res.data;
        videosCache.value = [...videos2];
        state.value = info !== null ? { status: "success", data: videosCache.value, total: res.data.length } : { status: "error", error: "unable to load account" };
        return videos2;
      });
    } catch (error) {
      state.value = { status: "error", error };
      return null;
    }
  };
  vue_cjs_prod.provide(VideoSymbol, {
    state,
    isLoading: vue_cjs_prod.readonly(isLoading),
    load: loadCourseVideo
  });
};
const useCourseVideoInject = () => {
  const localeContext = vue_cjs_prod.inject(VideoSymbol);
  if (!localeContext) {
    throw new Error(`no provider found for JobSymbol useJobsProvide`);
  }
  return localeContext;
};
const getMyVideoByUserId = (id) => {
  return service.get(`files/user/${id}`);
};
const getMyVideoById = (id) => {
  return service.get(`files/${id}`);
};
const uploadFileWithUrl = async (data) => {
  debugger;
  const res = await service.post(`/files`, __spreadValues({}, data));
  return res;
};
const uploadFileWithFilePath = async (formData) => {
  debugger;
  const res = await service.post("/files/uploadFile", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
  return res;
};
const FileSymbol$1 = Symbol();
const useMyVideoProvide = () => {
  debugger;
  const filesCache = vue_cjs_prod.ref();
  const isLoading = vue_cjs_prod.computed(() => state.value.status === "loading");
  const state = vue_cjs_prod.ref({ status: "init" });
  const loadMyVideos = async (params) => {
    debugger;
    if (state.value.status === "loading") {
      console.warn("still loading, skipping");
      return null;
    }
    state.value = { status: "loading" };
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      let info = {};
      debugger;
      await getMyVideoByUserId(params.id).then((res) => {
        debugger;
        const files = res.data;
        filesCache.value = [...files];
        state.value = info !== null ? { status: "success", data: filesCache.value, total: res.data.length } : { status: "error", error: "unable to load account" };
        return files;
      });
    } catch (error) {
      state.value = { status: "error", error };
      return null;
    }
  };
  const uploadFiles = async (params) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      let info = {};
      debugger;
      if (params.url) {
        debugger;
        return await uploadFileWithUrl(params).then(async (res) => {
          if (res.status == 201) {
            await getMyVideoByUserId(params.userId).then((res2) => {
              debugger;
              const files = res2.data;
              filesCache.value = [...files];
              state.value = info !== null ? { status: "success", data: filesCache.value, total: res2.data.length } : { status: "error", error: "unable to load account" };
            });
          }
          return res;
        });
      } else {
        debugger;
        let formData = new FormData();
        formData.append("file", params.file);
        formData.append("name", params.filename);
        formData.append("filename", params.filename);
        formData.append("classId", params.classId);
        formData.append("userId", params.userId);
        formData.append("type", params.type);
        return await uploadFileWithFilePath(formData).then(async (res) => {
          debugger;
          if (res.status == 201) {
            await getMyVideoByUserId(params.userId).then((res2) => {
              debugger;
              const files = res2.data;
              filesCache.value = [...files];
              state.value = info !== null ? { status: "success", data: filesCache.value, total: res2.data.length } : { status: "error", error: "unable to load account" };
            });
          }
          return res;
        });
      }
    } catch (error) {
      state.value = { status: "error", error };
    }
  };
  vue_cjs_prod.provide(FileSymbol$1, {
    state,
    isLoading: vue_cjs_prod.readonly(isLoading),
    load: loadMyVideos,
    upload: uploadFiles
  });
};
const useMyVideoInject = () => {
  const localeContext = vue_cjs_prod.inject(FileSymbol$1);
  if (!localeContext) {
    throw new Error(`no provider found for JobSymbol useJobsProvide`);
  }
  return localeContext;
};
const FileSymbol = Symbol();
const useMyVideoDetailProvide = () => {
  const fileCache = vue_cjs_prod.ref();
  const isLoading = vue_cjs_prod.computed(() => state.value.status === "loading");
  const state = vue_cjs_prod.ref({ status: "init", data: {} });
  const loadMyVideo = async (params) => {
    if (state.value.status === "loading") {
      console.warn("still loading, skipping");
      return null;
    }
    state.value = { status: "loading", data: {} };
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      let info = {};
      await getMyVideoById(params.id).then((res) => {
        debugger;
        const file = res.data;
        fileCache.value = __spreadValues({}, file);
        state.value = info !== null ? { status: "success", data: fileCache.value, total: 1 } : { status: "error", error: "unable to load account" };
        return file;
      });
    } catch (error) {
      state.value = { status: "error", error };
      return null;
    }
  };
  vue_cjs_prod.provide(FileSymbol, {
    state,
    isLoading: vue_cjs_prod.readonly(isLoading),
    load: loadMyVideo
  });
};
const useMyVideoDetailInject = () => {
  const localeContext = vue_cjs_prod.inject(FileSymbol);
  if (!localeContext) {
    throw new Error(`no provider found for  FileSymbol useVideosProvide`);
  }
  return localeContext;
};
const getMyCalendar = (email) => {
  debugger;
  return service.get(`/my-calendar/email/${email}`);
};
const LessonSymbol = Symbol();
const useMyCalendarProvide = () => {
  const lessonsCache = vue_cjs_prod.ref([]);
  const isLoading = vue_cjs_prod.computed(() => state.value.status === "loading");
  const state = vue_cjs_prod.ref({ status: "init" });
  const loadLessons = async (email) => {
    if (state.value.status === "loading") {
      console.warn("still loading, skipping");
      return [];
    }
    state.value = { status: "loading" };
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      let info = {};
      debugger;
      await getMyCalendar(email).then((res) => {
        debugger;
        const lessons2 = res.data;
        lessonsCache.value = [...lessons2];
        state.value = info !== null ? { status: "success", data: lessonsCache.value, total: res.data.length } : { status: "error", error: "unable to load account" };
        return lessons2;
      });
    } catch (error) {
      state.value = { status: "error", error };
      return [];
    }
  };
  vue_cjs_prod.provide(LessonSymbol, {
    state,
    isLoading: vue_cjs_prod.readonly(isLoading),
    load: loadLessons
  });
};
const useMyCalendarInject = () => {
  const localeContext = vue_cjs_prod.inject(LessonSymbol);
  if (!localeContext) {
    throw new Error(`no provider found for JobSymbol useJobsProvide`);
  }
  return localeContext;
};
const useProvider = () => {
  useAccountProvide();
  useHamurgerProvide();
  useCoursesProvide();
  useLessonsProvide();
  useLessonProvide();
  useVideoProvide();
  useCompanysProvide();
  useDeviceProvide();
  useCompanyProvide();
  useCourseVideoProvide();
  useMyVideoProvide();
  useMyVideoDetailProvide();
  useMyCalendarProvide();
};
const _sfc_main$1a = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    useProvider();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = vue_cjs_prod.resolveComponent("NuxtPage");
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1a = _sfc_main$1a.setup;
_sfc_main$1a.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("app.vue");
  return _sfc_setup$1a ? _sfc_setup$1a(props, ctx) : void 0;
};
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext = {}) {
    const vueApp = vue_cjs_prod.createApp(RootComponent);
    vueApp.component("App", _sfc_main$1a);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    await applyPlugins(nuxt, plugins);
    await nuxt.hooks.callHook("app:created", vueApp);
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);
const _sfc_main$19 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    debugger;
    const router = vueRouter_cjs_prod.useRouter();
    useHamburgerInject();
    vue_cjs_prod.onBeforeMount(() => {
      document.body.className = "home";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
        class: [{ row: vue_cjs_prod.unref(router).currentRoute.value.name != "index" }, "bg-main-green h-screen w-screen pb-[45rem] bg-cover grid expand overflow-x-hidden"]
      }, _attrs))} data-v-7e41baf8><div class="${serverRenderer.exports.ssrRenderClass([{ "col-start-2": vue_cjs_prod.unref(router).currentRoute.value.name == "login" }, "lg:col-start-2 row-start-2"])}" data-v-7e41baf8>`);
      serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$19 = _sfc_main$19.setup;
_sfc_main$19.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/default.vue");
  return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["__scopeId", "data-v-7e41baf8"]]);
const _default$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _default
});
const _sfc_main$18 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    useHamburgerInject();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "bg-main-green h-screen w-screen bg-cover grid expand fixed overflow-y-hidden overflow-x-hidden" }, _attrs))} data-v-e0a958d6><div class="col-start-2 row-start-2 flex h-[60vh] justify-center col--height" data-v-e0a958d6>`);
      serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$18 = _sfc_main$18.setup;
_sfc_main$18.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/login.vue");
  return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["__scopeId", "data-v-e0a958d6"]]);
const login$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": login
});
const _hoisted_1$A = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$A = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M11.938 3.438A4.595 4.595 0 0 0 7.33 8.046a4.595 4.595 0 0 0 4.608 4.609 4.595 4.595 0 0 0 4.608-4.61 4.595 4.595 0 0 0-4.608-4.607Zm0 1.5a3.095 3.095 0 0 1 3.108 3.108 3.095 3.095 0 0 1-3.108 3.109 3.095 3.095 0 0 1-3.108-3.11 3.095 3.095 0 0 1 3.108-3.107ZM6.29 4.378a.75.75 0 0 1 0 1.5 2.152 2.152 0 1 0 0 4.303.75.75 0 0 1 0 1.5 3.652 3.652 0 1 1 0-7.303Zm14.957 3.652a3.652 3.652 0 0 0-3.652-3.652.75.75 0 0 0 0 1.5 2.152 2.152 0 1 1 0 4.303.75.75 0 0 0 0 1.5 3.652 3.652 0 0 0 3.652-3.651Zm-.751 5.524c-.48-.108-.993-.182-1.515-.219a.75.75 0 0 0-.104 1.497c.447.03.885.094 1.31.19.662.13 1.093.345 1.2.57a.63.63 0 0 1 0 .539c-.106.222-.534.436-1.186.57a.75.75 0 1 0 .302 1.47c1.078-.222 1.868-.617 2.238-1.396.275-.58.275-1.251 0-1.829-.373-.782-1.176-1.183-2.245-1.392Zm-14.792.478a.75.75 0 0 0-.8-.697c-.522.037-1.035.11-1.536.223l-.206.044c-.948.216-1.67.614-2.018 1.344a2.124 2.124 0 0 0 0 1.83c.37.777 1.16 1.173 2.238 1.395a.75.75 0 1 0 .302-1.47c-.652-.134-1.08-.348-1.185-.57a.626.626 0 0 1 0-.54c.106-.224.537-.44 1.178-.565l.333-.068c.333-.062.662-.103.997-.126a.75.75 0 0 0 .697-.8Zm-.537 3.152c0-2.386 2.468-3.225 6.77-3.225l.306.001c4.123.039 6.465.88 6.465 3.206 0 2.272-2.24 3.142-6.168 3.22l-.602.005c-4.313 0-6.77-.824-6.77-3.207Zm12.041-.018c0-1.11-1.78-1.708-5.27-1.708-3.487 0-5.27.607-5.27 1.726 0 1.11 1.78 1.707 5.27 1.707 3.485 0 5.27-.607 5.27-1.725Z",
  fill: "#092231"
}, null, -1);
const _hoisted_3$A = [
  _hoisted_2$A
];
function render$A(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$A, _hoisted_3$A);
}
const IconTeam = { render: render$A };
const _hoisted_1$z = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$z = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M12.004 2C9.07 2 6.692 4.389 6.692 7.335c0 2.947 2.378 5.335 5.312 5.335s5.313-2.388 5.313-5.335C17.317 4.39 14.938 2 12.004 2Zm0 1.448a3.88 3.88 0 0 1 3.871 3.887 3.88 3.88 0 0 1-3.87 3.888 3.88 3.88 0 0 1-3.872-3.888 3.88 3.88 0 0 1 3.871-3.887ZM9.83 14.82a16.72 16.72 0 0 0-2.34.331c-1.496.308-2.693.924-3.203 1.948a2.93 2.93 0 0 0-.007 2.515c.49 1.012 1.548 1.585 2.976 1.902l.256.053c.754.17 1.54.285 2.332.339.068.02.229.038.404.047l.144.006.284.002c1.138.062 2.317.044 3.492-.056a15.658 15.658 0 0 0 1.88-.244l.467-.097c1.543-.305 2.698-.883 3.204-1.95a2.927 2.927 0 0 0 0-2.504c-.505-1.065-1.645-1.639-3.216-1.962a16.926 16.926 0 0 0-1.872-.291l-.461-.04a24.685 24.685 0 0 0-4.34 0Zm4.214 1.442.012.001c.724.05 1.443.152 2.153.304 1.166.24 1.958.639 2.208 1.167.189.398.189.86 0 1.26-.234.493-.945.874-1.973 1.107l-.224.048c-.724.161-1.44.265-2.162.315a24.06 24.06 0 0 1-3.343.052l-.394-.007a1.94 1.94 0 0 1-.287-.033 15.523 15.523 0 0 1-1.874-.249l-.352-.074c-1.17-.23-1.969-.63-2.228-1.165a1.475 1.475 0 0 1 .001-1.251c.252-.506 1.098-.94 2.205-1.169a15.39 15.39 0 0 1 2.157-.305 23.303 23.303 0 0 1 4.1-.001Z",
  fill: "#092231"
}, null, -1);
const _hoisted_3$z = [
  _hoisted_2$z
];
function render$z(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$z, _hoisted_3$z);
}
const IconProfile = { render: render$z };
const _hoisted_1$y = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$y = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.138 22c-.412 0-.803-.032-1.171-.095l-.218-.041c-2.371-.493-3.75-2.309-3.75-5.073V7.209c0-.334.02-.654.06-.96C3.41 3.564 5.255 2 8.139 2h7.725C19.059 2 20.97 3.92 21 7.132v9.659C21 20.048 19.084 22 15.863 22H8.138Zm0-18.543c-2.456 0-3.701 1.263-3.701 3.752v9.582c0 2.489 1.245 3.752 3.7 3.752h7.717c2.455 0 3.692-1.263 3.692-3.752V7.209c0-2.489-1.237-3.752-3.692-3.752H8.138Zm8.168 12.777c0-.4-.32-.724-.713-.724H8.382a.72.72 0 0 0-.714.724c0 .4.32.724.714.724h7.21a.718.718 0 0 0 .714-.724Zm-.713-4.963a.722.722 0 0 1 .69.339.745.745 0 0 1 0 .78.722.722 0 0 1-.69.339H8.382A.73.73 0 0 1 7.739 12a.73.73 0 0 1 .643-.729h7.21Zm-3.816-3.5a.73.73 0 0 0-.643-.729H8.39a.73.73 0 0 0-.644.729.73.73 0 0 0 .644.728h2.743a.73.73 0 0 0 .643-.728Z",
  fill: "#092231"
}, null, -1);
const _hoisted_3$y = [
  _hoisted_2$y
];
function render$y(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$y, _hoisted_3$y);
}
const IconInfo = { render: render$y };
const _hoisted_1$x = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$x = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M14.986 2H9.014C5.91 2 4 3.5 4 6.434v13.897c.004.282.07.547.193.786l.093.155.098.126c.511.599 1.327.764 2 .406l5.59-3.14 5.612 3.133c.25.132.51.199.775.203.443 0 .857-.176 1.162-.489a1.69 1.69 0 0 0 .477-1.18V6.258C20 3.435 18.048 2 14.986 2ZM9.014 3.448h5.972c2.364 0 3.602.91 3.602 2.81V20.33a.224.224 0 0 1-.063.157.213.213 0 0 1-.153.064.295.295 0 0 1-.126-.035l-5.602-3.128a1.374 1.374 0 0 0-1.337 0L5.72 20.525c-.085.046-.206.016-.27-.074l-.038-.062c.007.01.006-.002.003-.024-.001-.013-.003-.03-.003-.047V6.434c0-2.038 1.207-2.986 3.602-2.986Zm7.1 5.592c0-.4-.316-.723-.706-.723H8.54l-.095.006a.718.718 0 0 0-.61.717c0 .4.315.724.705.724h6.868l.096-.006a.718.718 0 0 0 .61-.717Z",
  fill: "#092231"
}, null, -1);
const _hoisted_3$x = [
  _hoisted_2$x
];
function render$x(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$x, _hoisted_3$x);
}
const IconBookmark = { render: render$x };
const _hoisted_1$w = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$w = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M6.483 2.815c-3.671 1.182-5.31 5.19-4.078 9.014.624 1.801 1.64 3.42 2.975 4.747a34.717 34.717 0 0 0 6.005 4.673l.245.147c.236.14.53.138.763-.006l.229-.143a34.695 34.695 0 0 0 5.995-4.665 12.42 12.42 0 0 0 2.977-4.737c1.235-3.837-.41-7.847-4.082-9.03l-.266-.079a6.571 6.571 0 0 0-4.981.62l-.269.158-.263-.158a6.562 6.562 0 0 0-5.25-.54Zm4.892 2.04.196.14c.26.186.61.182.865-.009a5.11 5.11 0 0 1 4.628-.78c2.846.917 4.14 4.075 3.142 7.176a10.935 10.935 0 0 1-2.614 4.159l-.528.501a33.217 33.217 0 0 1-4.595 3.574l-.468.294.143.09a33.221 33.221 0 0 1-5.738-4.466 10.942 10.942 0 0 1-2.614-4.168c-.994-3.088.295-6.244 3.14-7.16a5.1 5.1 0 0 1 4.443.648Zm4.495 1.629a.732.732 0 0 0-.445 1.392 1.98 1.98 0 0 1 1.363 1.725.731.731 0 0 0 1.458-.122 3.441 3.441 0 0 0-2.376-2.995Z",
  fill: "#092231"
}, null, -1);
const _hoisted_3$w = [
  _hoisted_2$w
];
function render$w(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$w, _hoisted_3$w);
}
const IconSubscription = { render: render$w };
const _hoisted_1$v = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$v = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M12.573 4.5H6.304C3.74 4.5 2 6.219 2 8.688v7.015c0 2.469 1.74 4.188 4.304 4.188h6.27c2.417 0 4.107-1.536 4.287-3.784l2.647 1.082.133.048A1.808 1.808 0 0 0 22 15.515V8.876l-.005-.14a1.808 1.808 0 0 0-2.486-1.534L16.86 8.284c-.18-2.25-1.866-3.784-4.288-3.784Zm2.804 4.867V15.703c0 1.634-1.068 2.688-2.804 2.688H6.304c-1.74 0-2.804-1.052-2.804-2.688V8.688C3.5 7.05 4.564 6 6.304 6h6.27c1.74 0 2.803 1.052 2.803 2.688v.68Zm1.5 5.126V9.898l3.199-1.307.067-.02c.181-.029.357.11.357.305v6.64l-.008.07a.308.308 0 0 1-.417.214l-3.198-1.307Z",
  fill: "#092231"
}, null, -1);
const _hoisted_3$v = [
  _hoisted_2$v
];
function render$v(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$v, _hoisted_3$v);
}
const IconVideo = { render: render$v };
const _hoisted_1$u = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$u = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M12.036 2h-.071c-3.37 0-6.458 2.445-6.758 5.681-.02.231-.034.468-.043.723L5.152 9l-.002.534.015-.06a3.85 3.85 0 0 1-.928 1.82l-.068.086a4.08 4.08 0 0 0-.667 2.044l-.001.238a4.07 4.07 0 0 0 .926 2.66 4.874 4.874 0 0 0 3.086 1.525c2.977.323 5.989.323 8.974-.001a4.799 4.799 0 0 0 3.047-1.488 4.076 4.076 0 0 0 .965-2.496l.001-.403a4.013 4.013 0 0 0-.671-2.074l-.062-.08-.15-.177a3.93 3.93 0 0 1-.727-1.431l-.045-.187-.01-.196a11.22 11.22 0 0 1-.004-.309v-.673a7.874 7.874 0 0 0-.028-.647C18.493 4.443 15.403 2 12.036 2Zm-.071 1.395h.071c2.698 0 5.158 1.946 5.395 4.418.014.163.02.317.022.548l.003.904c.003.145.008.265.018.4l.013.093.065.276c.192.73.537 1.41 1.013 1.997l.138.162-.016-.026c.264.394.414.852.435 1.323v.164a2.653 2.653 0 0 1-.614 1.773 3.418 3.418 0 0 1-2.157 1.03 40.271 40.271 0 0 1-8.7.001 3.485 3.485 0 0 1-2.197-1.065 2.656 2.656 0 0 1-.575-1.716v-.218l.018-.19a2.67 2.67 0 0 1 .313-.94l.084-.139a5.25 5.25 0 0 0 1.22-2.433l.015-.142.006-.92.016-.466c.008-.147.017-.287.029-.422.228-2.466 2.687-4.412 5.385-4.412Zm-6.67 8.796-.046.05.05-.058-.005.008Zm9.313 7.5a.684.684 0 0 0-.97.106c-.102.13-.222.247-.355.347a2.138 2.138 0 0 1-1.577.446 2.117 2.117 0 0 1-1.413-.79.684.684 0 0 0-.969-.111.703.703 0 0 0-.11.98 3.495 3.495 0 0 0 4.902.586c.217-.163.42-.362.597-.584a.704.704 0 0 0-.105-.98Z",
  fill: "#092231"
}, null, -1);
const _hoisted_3$u = [
  _hoisted_2$u
];
function render$u(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$u, _hoisted_3$u);
}
const IconNoti = { render: render$u };
const _hoisted_1$t = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$t = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M16.419 2.603A.694.694 0 0 0 15.733 2a.695.695 0 0 0-.693.698v.771H8.968v-.771l-.006-.095A.694.694 0 0 0 8.276 2a.695.695 0 0 0-.692.698v.788C4.747 3.682 3 5.52 3 8.486v8.418C3 20.087 4.958 22 8.096 22h7.808C19.045 22 21 20.12 21 16.974V8.486c.009-2.967-1.732-4.805-4.575-5v-.788l-.006-.095ZM15.04 4.864v.895l.007.095c.045.34.335.603.686.603a.695.695 0 0 0 .692-.698v-.874c2.069.172 3.197 1.418 3.19 3.599v.404H4.385v-.402c0-2.18 1.134-3.428 3.199-3.6v.873l.006.095c.046.34.335.603.686.603a.695.695 0 0 0 .692-.698v-.895h6.072ZM4.385 10.283v6.621c0 2.403 1.329 3.7 3.711 3.7h7.808c2.39 0 3.711-1.27 3.711-3.63v-6.691H4.385ZM16.8 13.218a.695.695 0 0 0-.692-.697l-.103.006a.696.696 0 0 0-.598.691c0 .386.31.698.7.698l.095-.006a.696.696 0 0 0 .598-.692Zm-4.788-.697c.382 0 .692.312.692.697 0 .354-.26.645-.598.692l-.094.006c-.391 0-.701-.312-.701-.698 0-.353.26-.645.598-.691l.103-.006Zm-3.413.697a.695.695 0 0 0-.692-.697l-.102.006a.696.696 0 0 0-.599.691c0 .386.31.698.693.698l.102-.006a.696.696 0 0 0 .598-.692Zm7.509 2.918c.382 0 .692.312.692.698 0 .353-.26.645-.598.691l-.094.006c-.391 0-.701-.312-.701-.697 0-.354.26-.645.598-.692l.103-.006Zm-3.404.698a.695.695 0 0 0-.692-.698l-.103.006a.696.696 0 0 0-.598.692c0 .385.31.697.7.697l.095-.006a.696.696 0 0 0 .598-.691Zm-4.797-.698c.382 0 .692.312.692.698 0 .353-.26.645-.598.691l-.102.006a.695.695 0 0 1-.693-.697c0-.354.26-.645.599-.692l.102-.006Z",
  fill: "#092231"
}, null, -1);
const _hoisted_3$t = [
  _hoisted_2$t
];
function render$t(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$t, _hoisted_3$t);
}
const IconCalendar$1 = { render: render$t };
const _hoisted_1$s = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$s = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M21.705 4.591c.311-1.405-.996-2.674-2.411-2.264L3.637 6.883l-.151.05c-1.47.553-1.695 2.6-.319 3.447l6.476 3.986 3.896 6.454.087.133c.914 1.28 2.936.97 3.397-.581l4.645-15.64.037-.14Zm-1.92-.838a.427.427 0 0 1 .445.552l-4.645 15.64-.03.076a.418.418 0 0 1-.732.024l-3.688-6.109 5.252-5.286.073-.085a.75.75 0 0 0-.076-.976l-.084-.072a.75.75 0 0 0-.977.075l-5.245 5.28-6.124-3.77-.066-.049c-.238-.217-.158-.635.168-.73l15.656-4.555.073-.015Z",
  fill: "#092231"
}, null, -1);
const _hoisted_3$s = [
  _hoisted_2$s
];
function render$s(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$s, _hoisted_3$s);
}
const IconExplore = { render: render$s };
const _sfc_main$17 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { currentHamburger } = useHamburgerInject();
    vueRouter_cjs_prod.useRouter();
    let myProfileSubCategory = vue_cjs_prod.ref([
      {
        name: "Info",
        component: IconInfo,
        value: "Info"
      },
      {
        name: "Bookmark",
        component: IconBookmark,
        value: "Bookmark"
      },
      {
        name: "Subscription",
        component: IconSubscription,
        value: "Subscription"
      },
      {
        name: "Video",
        component: IconVideo,
        value: "Video"
      },
      {
        name: "Notification",
        component: IconNoti,
        value: "Notification"
      },
      {
        name: "My Calendar",
        component: IconCalendar$1,
        value: "My-Calendar"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = vue_cjs_prod.resolveComponent("NuxtLink");
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><div class="${serverRenderer.exports.ssrRenderClass([{ hidden: vue_cjs_prod.unref(currentHamburger), flex: !vue_cjs_prod.unref(currentHamburger) }, "rounded-[25px] bg-white lg:w-[1vw] xl:w-[16vw] 2xl:w-72 w-[18vw] h-[80vh] m-auto shadow-md relative"])}"><div class="grid p-9 h-[36rem]"><div class="container max-h-8"><p>`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconTeam), { class: "inline-block" }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, { to: `/my-teams` }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.exports.ssrInterpolate(_ctx.$t("hamburger.myTeams"))}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$t("hamburger.myTeams")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div><div class="container max-h-8"><p>`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconProfile), { class: "inline-block" }, null, _parent));
      _push(` My Profile</p></div><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(myProfileSubCategory), (subCat) => {
        _push(`<div class="container max-h-8"><p class="ml-8">`);
        serverRenderer.exports.ssrRenderVNode(_push, vue_cjs_prod.createVNode(vue_cjs_prod.resolveDynamicComponent(subCat.component), { class: "inline-block" }, null), _parent);
        _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
          to: `/${subCat.value}`
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.exports.ssrInterpolate(subCat.name)}`);
            } else {
              return [
                vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(subCat.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</p></div>`);
      });
      _push(`<!--]--><div class="container max-h-8"><p>`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconExplore), { class: "inline-block" }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, { to: `/explore` }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Explore `);
          } else {
            return [
              vue_cjs_prod.createTextVNode(" Explore ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div><div class="container absolute bottom-16 max-h-8 text-center"><p class="underline">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, { to: `/terms` }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Terms and Condition `);
          } else {
            return [
              vue_cjs_prod.createTextVNode(" Terms and Condition ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div><div class="${serverRenderer.exports.ssrRenderClass([{ hidden: !vue_cjs_prod.unref(currentHamburger), flex: !vue_cjs_prod.unref(currentHamburger) }, "container grid rounded-[25px] bg-white w-9 h-[80vh] shadow-md p-1"])}"><div class="grid h-160"><div class="container mt-5"><p>`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconTeam), null, null, _parent));
      _push(`</p></div><div class="container"><p>`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconProfile), null, null, _parent));
      _push(`</p></div><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(myProfileSubCategory), (subCat) => {
        _push(`<div class="container"><p class="text-center">`);
        serverRenderer.exports.ssrRenderVNode(_push, vue_cjs_prod.createVNode(vue_cjs_prod.resolveDynamicComponent(subCat.component), null, null), _parent);
        _push(`</p></div>`);
      });
      _push(`<!--]--><div class="container"><p>`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconExplore), null, null, _parent));
      _push(`</p></div></div></div></div>`);
    };
  }
});
const _sfc_setup$17 = _sfc_main$17.setup;
_sfc_main$17.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/global/HamburgerContent.vue");
  return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
const HamburgerContent = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$17
});
const _sfc_main$16 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    useHamburgerInject();
    vueRouter_cjs_prod.useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "relative cursor-pointer w-[20vw] left-[6%]" }, _attrs))}><svg aria-hidden="true" class="text-black dark:text-white" data-icon="bars" data-prefix="fas" focusable="false" height="24" role="img" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" fill="currentColor"></path></svg></div>`);
    };
  }
});
const _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/global/Hamburger.vue");
  return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
const Hamburger = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$16
});
const _hoisted_1$r = {
  width: "100",
  height: "61",
  viewBox: "0 0 79 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$r = /* @__PURE__ */ vue_cjs_prod.createElementVNode("g", {
  "clip-path": "url(#a)",
  stroke: "#38C28D",
  "stroke-width": "2",
  "stroke-miterlimit": "10"
}, [
  /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", { d: "M8.23 19.564H3.577L5.561 4.63H1.274L1.788.655h13.228l-.514 3.975h-4.287L8.23 19.564ZM32.04.655l-2.498 18.909h-4.654l1.004-7.661h-4.654l-1.004 7.66h-4.655L18.08.656h4.653l-.955 7.272h4.654l.956-7.272h4.654ZM47.963.655 47.45 4.63H40.1l-.44 3.297h6.123l-.539 3.976H39.12l-.49 3.685h7.35l-.515 3.976H33.462L35.96.654h12.003ZM.906 29.988l.123-.921c.882-6.546 3.527-9.358 8.671-9.358 4.68 0 7.03 2.11 6.443 6.667l-.123.945h-4.654c.294-2.182.025-3.636-1.812-3.636h-.27c-2.327 0-3.086 2.109-3.527 5.382l-.123.92c-.44 3.298 0 5.334 2.327 5.334h.27c.71 0 1.616-.218 2.106-.485l.319-2.424H8.353l.54-3.976h6.956l-1.151 8.63c-1.47 1.188-3.356 2.23-6.982 2.23-5.144 0-7.691-2.763-6.81-9.308ZM22.928 38.958h-4.654l2.499-18.91h6.59c3.233 0 6.81.68 6.099 5.916l-.074.533c-.416 3.079-1.886 4.606-3.674 5.333l2.033 7.128h-5.022l-1.641-6.497h-1.298l-.858 6.497Zm3.503-10.473c.907 0 2.107-.364 2.278-2.11l.025-.266c.171-1.794-.784-2.085-1.69-2.085h-2.131l-.613 4.46h2.131ZM40.076 38.958H35.42l2.499-18.91h4.654l-2.498 18.91ZM58.569 38.958h-4.9l-3.894-10.425-.368 3.637-.881 6.788h-4.41l2.499-18.91h4.9l3.894 10.425.343-3.636.906-6.788h4.41l-2.499 18.909ZM78.043 29.94c-.881 6.545-3.306 9.018-9.308 9.018h-6.247l2.499-18.91h6.002c6.001 0 8.059 2.425 7.177 8.97l-.123.921Zm-9.039 5.042c3.185 0 3.87-1.77 4.312-5.043l.122-.92c.441-3.273-.024-4.995-3.209-4.995h-1.102l-1.47 10.958h1.347Z" })
], -1);
const _hoisted_3$r = /* @__PURE__ */ vue_cjs_prod.createElementVNode("defs", null, [
  /* @__PURE__ */ vue_cjs_prod.createElementVNode("clipPath", { id: "a" }, [
    /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
      fill: "#fff",
      d: "M0 0h79v40H0z"
    })
  ])
], -1);
const _hoisted_4$d = [
  _hoisted_2$r,
  _hoisted_3$r
];
function render$r(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$r, _hoisted_4$d);
}
const Logo$2 = { render: render$r };
const _sfc_main$15 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    vueRouter_cjs_prod.useRouter();
    const isShowMenu = vue_cjs_prod.ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = vue_cjs_prod.resolveComponent("NuxtLink");
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "grid relative" }, _attrs))}><div class="flex">`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconProfile), null, null, _parent));
      serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      if (isShowMenu.value) {
        _push(`<div id="dropdown" class="z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute top-[41px] left-[-100px] lg:left-[0px]"><ul class="py-1" aria-labelledby="dropdownButton"><li>`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
          to: `/login`,
          class: "block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Sign out `);
            } else {
              return [
                vue_cjs_prod.createTextVNode(" Sign out ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/global/Avator.vue");
  return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
const Avator = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$15
});
const _sfc_main$14 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const userName = vue_cjs_prod.ref("user");
    const mobile = vue_cjs_prod.ref(false);
    const getMobile = vue_cjs_prod.computed(() => {
      return mobile.value;
    });
    const getUserName = vue_cjs_prod.computed(() => {
      return userName.value;
    });
    debugger;
    vue_cjs_prod.onMounted(() => {
      mobile.value = isMobile();
      let user = sessionStorage.getItem("user");
      if (user) {
        const userObj = JSON.parse(user);
        userName.value = userObj.name;
      }
      debugger;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
        id: "myHeader",
        class: "flex items-centerborder-b border-b-grayOther-300 p-4"
      }, _attrs))}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$16, null, null, _parent));
      _push(`<div class="text-center mx-auto relative">`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(Logo$2), null, null, _parent));
      _push(`</div>`);
      if (!vue_cjs_prod.unref(getMobile)) {
        _push(`<div class="w-[20vw] text-center">`);
        _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$15, null, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(getUserName))}`);
            } else {
              return [
                vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(getUserName)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="w-[10vw] text-center">`);
        _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$15, null, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/global/Header.vue");
  return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$14
});
const _hoisted_1$q = {
  width: "24",
  height: "24",
  fill: "#ffffffff",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$q = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M11.938 3.438A4.595 4.595 0 0 0 7.33 8.046a4.595 4.595 0 0 0 4.608 4.609 4.595 4.595 0 0 0 4.608-4.61 4.595 4.595 0 0 0-4.608-4.607Zm0 1.5a3.095 3.095 0 0 1 3.108 3.108 3.095 3.095 0 0 1-3.108 3.109 3.095 3.095 0 0 1-3.108-3.11 3.095 3.095 0 0 1 3.108-3.107ZM6.29 4.378a.75.75 0 0 1 0 1.5 2.152 2.152 0 1 0 0 4.303.75.75 0 0 1 0 1.5 3.652 3.652 0 1 1 0-7.303Zm14.957 3.652a3.652 3.652 0 0 0-3.652-3.652.75.75 0 0 0 0 1.5 2.152 2.152 0 1 1 0 4.303.75.75 0 0 0 0 1.5 3.652 3.652 0 0 0 3.652-3.651Zm-.751 5.524c-.48-.108-.993-.182-1.515-.219a.75.75 0 0 0-.104 1.497c.447.03.885.094 1.31.19.662.13 1.093.345 1.2.57a.63.63 0 0 1 0 .539c-.106.222-.534.436-1.186.57a.75.75 0 1 0 .302 1.47c1.078-.222 1.868-.617 2.238-1.396.275-.58.275-1.251 0-1.829-.373-.782-1.176-1.183-2.245-1.392Zm-14.792.478a.75.75 0 0 0-.8-.697c-.522.037-1.035.11-1.536.223l-.206.044c-.948.216-1.67.614-2.018 1.344a2.124 2.124 0 0 0 0 1.83c.37.777 1.16 1.173 2.238 1.395a.75.75 0 1 0 .302-1.47c-.652-.134-1.08-.348-1.185-.57a.626.626 0 0 1 0-.54c.106-.224.537-.44 1.178-.565l.333-.068c.333-.062.662-.103.997-.126a.75.75 0 0 0 .697-.8Zm-.537 3.152c0-2.386 2.468-3.225 6.77-3.225l.306.001c4.123.039 6.465.88 6.465 3.206 0 2.272-2.24 3.142-6.168 3.22l-.602.005c-4.313 0-6.77-.824-6.77-3.207Zm12.041-.018c0-1.11-1.78-1.708-5.27-1.708-3.487 0-5.27.607-5.27 1.726 0 1.11 1.78 1.707 5.27 1.707 3.485 0 5.27-.607 5.27-1.725Z"
}, null, -1);
const _hoisted_3$q = [
  _hoisted_2$q
];
function render$q(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$q, _hoisted_3$q);
}
const IconTeamWhite = { render: render$q };
const _hoisted_1$p = {
  width: "24",
  height: "24",
  fill: "#ffffffff",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$p = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M12.004 2C9.07 2 6.692 4.389 6.692 7.335c0 2.947 2.378 5.335 5.312 5.335s5.313-2.388 5.313-5.335C17.317 4.39 14.938 2 12.004 2Zm0 1.448a3.88 3.88 0 0 1 3.871 3.887 3.88 3.88 0 0 1-3.87 3.888 3.88 3.88 0 0 1-3.872-3.888 3.88 3.88 0 0 1 3.871-3.887ZM9.83 14.82a16.72 16.72 0 0 0-2.34.331c-1.496.308-2.693.924-3.203 1.948a2.93 2.93 0 0 0-.007 2.515c.49 1.012 1.548 1.585 2.976 1.902l.256.053c.754.17 1.54.285 2.332.339.068.02.229.038.404.047l.144.006.284.002c1.138.062 2.317.044 3.492-.056a15.658 15.658 0 0 0 1.88-.244l.467-.097c1.543-.305 2.698-.883 3.204-1.95a2.927 2.927 0 0 0 0-2.504c-.505-1.065-1.645-1.639-3.216-1.962a16.926 16.926 0 0 0-1.872-.291l-.461-.04a24.685 24.685 0 0 0-4.34 0Zm4.214 1.442.012.001c.724.05 1.443.152 2.153.304 1.166.24 1.958.639 2.208 1.167.189.398.189.86 0 1.26-.234.493-.945.874-1.973 1.107l-.224.048c-.724.161-1.44.265-2.162.315a24.06 24.06 0 0 1-3.343.052l-.394-.007a1.94 1.94 0 0 1-.287-.033 15.523 15.523 0 0 1-1.874-.249l-.352-.074c-1.17-.23-1.969-.63-2.228-1.165a1.475 1.475 0 0 1 .001-1.251c.252-.506 1.098-.94 2.205-1.169a15.39 15.39 0 0 1 2.157-.305 23.303 23.303 0 0 1 4.1-.001Z"
}, null, -1);
const _hoisted_3$p = [
  _hoisted_2$p
];
function render$p(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$p, _hoisted_3$p);
}
const IconProfileWhite = { render: render$p };
const _hoisted_1$o = {
  width: "24",
  height: "24",
  fill: "#ffffffff",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$o = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.138 22c-.412 0-.803-.032-1.171-.095l-.218-.041c-2.371-.493-3.75-2.309-3.75-5.073V7.209c0-.334.02-.654.06-.96C3.41 3.564 5.255 2 8.139 2h7.725C19.059 2 20.97 3.92 21 7.132v9.659C21 20.048 19.084 22 15.863 22H8.138Zm0-18.543c-2.456 0-3.701 1.263-3.701 3.752v9.582c0 2.489 1.245 3.752 3.7 3.752h7.717c2.455 0 3.692-1.263 3.692-3.752V7.209c0-2.489-1.237-3.752-3.692-3.752H8.138Zm8.168 12.777c0-.4-.32-.724-.713-.724H8.382a.72.72 0 0 0-.714.724c0 .4.32.724.714.724h7.21a.718.718 0 0 0 .714-.724Zm-.713-4.963a.722.722 0 0 1 .69.339.745.745 0 0 1 0 .78.722.722 0 0 1-.69.339H8.382A.73.73 0 0 1 7.739 12a.73.73 0 0 1 .643-.729h7.21Zm-3.816-3.5a.73.73 0 0 0-.643-.729H8.39a.73.73 0 0 0-.644.729.73.73 0 0 0 .644.728h2.743a.73.73 0 0 0 .643-.728Z"
}, null, -1);
const _hoisted_3$o = [
  _hoisted_2$o
];
function render$o(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$o, _hoisted_3$o);
}
const IconInfoWhite = { render: render$o };
const _hoisted_1$n = {
  width: "24",
  height: "24",
  fill: "#ffffffff",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$n = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M14.986 2H9.014C5.91 2 4 3.5 4 6.434v13.897c.004.282.07.547.193.786l.093.155.098.126c.511.599 1.327.764 2 .406l5.59-3.14 5.612 3.133c.25.132.51.199.775.203.443 0 .857-.176 1.162-.489a1.69 1.69 0 0 0 .477-1.18V6.258C20 3.435 18.048 2 14.986 2ZM9.014 3.448h5.972c2.364 0 3.602.91 3.602 2.81V20.33a.224.224 0 0 1-.063.157.213.213 0 0 1-.153.064.295.295 0 0 1-.126-.035l-5.602-3.128a1.374 1.374 0 0 0-1.337 0L5.72 20.525c-.085.046-.206.016-.27-.074l-.038-.062c.007.01.006-.002.003-.024-.001-.013-.003-.03-.003-.047V6.434c0-2.038 1.207-2.986 3.602-2.986Zm7.1 5.592c0-.4-.316-.723-.706-.723H8.54l-.095.006a.718.718 0 0 0-.61.717c0 .4.315.724.705.724h6.868l.096-.006a.718.718 0 0 0 .61-.717Z"
}, null, -1);
const _hoisted_3$n = [
  _hoisted_2$n
];
function render$n(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$n, _hoisted_3$n);
}
const IconBookmarkWhite = { render: render$n };
const _hoisted_1$m = {
  width: "24",
  height: "24",
  fill: "#ffffffff",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$m = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M6.483 2.815c-3.671 1.182-5.31 5.19-4.078 9.014.624 1.801 1.64 3.42 2.975 4.747a34.717 34.717 0 0 0 6.005 4.673l.245.147c.236.14.53.138.763-.006l.229-.143a34.695 34.695 0 0 0 5.995-4.665 12.42 12.42 0 0 0 2.977-4.737c1.235-3.837-.41-7.847-4.082-9.03l-.266-.079a6.571 6.571 0 0 0-4.981.62l-.269.158-.263-.158a6.562 6.562 0 0 0-5.25-.54Zm4.892 2.04.196.14c.26.186.61.182.865-.009a5.11 5.11 0 0 1 4.628-.78c2.846.917 4.14 4.075 3.142 7.176a10.935 10.935 0 0 1-2.614 4.159l-.528.501a33.217 33.217 0 0 1-4.595 3.574l-.468.294.143.09a33.221 33.221 0 0 1-5.738-4.466 10.942 10.942 0 0 1-2.614-4.168c-.994-3.088.295-6.244 3.14-7.16a5.1 5.1 0 0 1 4.443.648Zm4.495 1.629a.732.732 0 0 0-.445 1.392 1.98 1.98 0 0 1 1.363 1.725.731.731 0 0 0 1.458-.122 3.441 3.441 0 0 0-2.376-2.995Z"
}, null, -1);
const _hoisted_3$m = [
  _hoisted_2$m
];
function render$m(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$m, _hoisted_3$m);
}
const IconSubscriptionWhite = { render: render$m };
const _hoisted_1$l = {
  width: "24",
  height: "24",
  fill: "#ffffffff",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$l = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M12.573 4.5H6.304C3.74 4.5 2 6.219 2 8.688v7.015c0 2.469 1.74 4.188 4.304 4.188h6.27c2.417 0 4.107-1.536 4.287-3.784l2.647 1.082.133.048A1.808 1.808 0 0 0 22 15.515V8.876l-.005-.14a1.808 1.808 0 0 0-2.486-1.534L16.86 8.284c-.18-2.25-1.866-3.784-4.288-3.784Zm2.804 4.867V15.703c0 1.634-1.068 2.688-2.804 2.688H6.304c-1.74 0-2.804-1.052-2.804-2.688V8.688C3.5 7.05 4.564 6 6.304 6h6.27c1.74 0 2.803 1.052 2.803 2.688v.68Zm1.5 5.126V9.898l3.199-1.307.067-.02c.181-.029.357.11.357.305v6.64l-.008.07a.308.308 0 0 1-.417.214l-3.198-1.307Z"
}, null, -1);
const _hoisted_3$l = [
  _hoisted_2$l
];
function render$l(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$l, _hoisted_3$l);
}
const IconVideoWhite = { render: render$l };
const _hoisted_1$k = {
  width: "24",
  height: "24",
  fill: "#ffffffff",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$k = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M12.036 2h-.071c-3.37 0-6.458 2.445-6.758 5.681-.02.231-.034.468-.043.723L5.152 9l-.002.534.015-.06a3.85 3.85 0 0 1-.928 1.82l-.068.086a4.08 4.08 0 0 0-.667 2.044l-.001.238a4.07 4.07 0 0 0 .926 2.66 4.874 4.874 0 0 0 3.086 1.525c2.977.323 5.989.323 8.974-.001a4.799 4.799 0 0 0 3.047-1.488 4.076 4.076 0 0 0 .965-2.496l.001-.403a4.013 4.013 0 0 0-.671-2.074l-.062-.08-.15-.177a3.93 3.93 0 0 1-.727-1.431l-.045-.187-.01-.196a11.22 11.22 0 0 1-.004-.309v-.673a7.874 7.874 0 0 0-.028-.647C18.493 4.443 15.403 2 12.036 2Zm-.071 1.395h.071c2.698 0 5.158 1.946 5.395 4.418.014.163.02.317.022.548l.003.904c.003.145.008.265.018.4l.013.093.065.276c.192.73.537 1.41 1.013 1.997l.138.162-.016-.026c.264.394.414.852.435 1.323v.164a2.653 2.653 0 0 1-.614 1.773 3.418 3.418 0 0 1-2.157 1.03 40.271 40.271 0 0 1-8.7.001 3.485 3.485 0 0 1-2.197-1.065 2.656 2.656 0 0 1-.575-1.716v-.218l.018-.19a2.67 2.67 0 0 1 .313-.94l.084-.139a5.25 5.25 0 0 0 1.22-2.433l.015-.142.006-.92.016-.466c.008-.147.017-.287.029-.422.228-2.466 2.687-4.412 5.385-4.412Zm-6.67 8.796-.046.05.05-.058-.005.008Zm9.313 7.5a.684.684 0 0 0-.97.106c-.102.13-.222.247-.355.347a2.138 2.138 0 0 1-1.577.446 2.117 2.117 0 0 1-1.413-.79.684.684 0 0 0-.969-.111.703.703 0 0 0-.11.98 3.495 3.495 0 0 0 4.902.586c.217-.163.42-.362.597-.584a.704.704 0 0 0-.105-.98Z"
}, null, -1);
const _hoisted_3$k = [
  _hoisted_2$k
];
function render$k(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$k, _hoisted_3$k);
}
const IconNotiWhite = { render: render$k };
const _hoisted_1$j = {
  width: "24",
  height: "24",
  fill: "#ffffffff",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$j = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M16.419 2.603A.694.694 0 0 0 15.733 2a.695.695 0 0 0-.693.698v.771H8.968v-.771l-.006-.095A.694.694 0 0 0 8.276 2a.695.695 0 0 0-.692.698v.788C4.747 3.682 3 5.52 3 8.486v8.418C3 20.087 4.958 22 8.096 22h7.808C19.045 22 21 20.12 21 16.974V8.486c.009-2.967-1.732-4.805-4.575-5v-.788l-.006-.095ZM15.04 4.864v.895l.007.095c.045.34.335.603.686.603a.695.695 0 0 0 .692-.698v-.874c2.069.172 3.197 1.418 3.19 3.599v.404H4.385v-.402c0-2.18 1.134-3.428 3.199-3.6v.873l.006.095c.046.34.335.603.686.603a.695.695 0 0 0 .692-.698v-.895h6.072ZM4.385 10.283v6.621c0 2.403 1.329 3.7 3.711 3.7h7.808c2.39 0 3.711-1.27 3.711-3.63v-6.691H4.385ZM16.8 13.218a.695.695 0 0 0-.692-.697l-.103.006a.696.696 0 0 0-.598.691c0 .386.31.698.7.698l.095-.006a.696.696 0 0 0 .598-.692Zm-4.788-.697c.382 0 .692.312.692.697 0 .354-.26.645-.598.692l-.094.006c-.391 0-.701-.312-.701-.698 0-.353.26-.645.598-.691l.103-.006Zm-3.413.697a.695.695 0 0 0-.692-.697l-.102.006a.696.696 0 0 0-.599.691c0 .386.31.698.693.698l.102-.006a.696.696 0 0 0 .598-.692Zm7.509 2.918c.382 0 .692.312.692.698 0 .353-.26.645-.598.691l-.094.006c-.391 0-.701-.312-.701-.697 0-.354.26-.645.598-.692l.103-.006Zm-3.404.698a.695.695 0 0 0-.692-.698l-.103.006a.696.696 0 0 0-.598.692c0 .385.31.697.7.697l.095-.006a.696.696 0 0 0 .598-.691Zm-4.797-.698c.382 0 .692.312.692.698 0 .353-.26.645-.598.691l-.102.006a.695.695 0 0 1-.693-.697c0-.354.26-.645.599-.692l.102-.006Z"
}, null, -1);
const _hoisted_3$j = [
  _hoisted_2$j
];
function render$j(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$j, _hoisted_3$j);
}
const IconCalendarWhite = { render: render$j };
const _hoisted_1$i = {
  width: "24",
  height: "24",
  fill: "#ffffffff",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$i = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M21.705 4.591c.311-1.405-.996-2.674-2.411-2.264L3.637 6.883l-.151.05c-1.47.553-1.695 2.6-.319 3.447l6.476 3.986 3.896 6.454.087.133c.914 1.28 2.936.97 3.397-.581l4.645-15.64.037-.14Zm-1.92-.838a.427.427 0 0 1 .445.552l-4.645 15.64-.03.076a.418.418 0 0 1-.732.024l-3.688-6.109 5.252-5.286.073-.085a.75.75 0 0 0-.076-.976l-.084-.072a.75.75 0 0 0-.977.075l-5.245 5.28-6.124-3.77-.066-.049c-.238-.217-.158-.635.168-.73l15.656-4.555.073-.015Z"
}, null, -1);
const _hoisted_3$i = [
  _hoisted_2$i
];
function render$i(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$i, _hoisted_3$i);
}
const IconExploreWhite = { render: render$i };
const _hoisted_1$h = {
  width: "50",
  height: "50",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$h = /* @__PURE__ */ vue_cjs_prod.createElementVNode("circle", {
  cx: "25",
  cy: "25",
  r: "24.5",
  stroke: "#fff"
}, null, -1);
const _hoisted_3$h = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  d: "m15.4 15.4 19.2 19.2m-19.2 0 19.2-19.2",
  stroke: "#fff"
}, null, -1);
const _hoisted_4$c = [
  _hoisted_2$h,
  _hoisted_3$h
];
function render$h(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$h, _hoisted_4$c);
}
const ButtonCancel = { render: render$h };
const _sfc_main$13 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit }) {
    useHamburgerInject();
    vueRouter_cjs_prod.useRouter();
    let myProfileSubCategory = vue_cjs_prod.ref([
      {
        name: "Info",
        component: IconInfoWhite,
        value: "Info"
      },
      {
        name: "Bookmark",
        component: IconBookmarkWhite,
        value: "Bookmark"
      },
      {
        name: "Subscription",
        component: IconSubscriptionWhite,
        value: "Subscription"
      },
      {
        name: "Video",
        component: IconVideoWhite,
        value: "Video"
      },
      {
        name: "Notification",
        component: IconNotiWhite,
        value: "Notification"
      },
      {
        name: "My Calendar",
        component: IconCalendarWhite,
        value: "My-Calendar"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = vue_cjs_prod.resolveComponent("NuxtLink");
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><div class="bg-main-green w-full h-[100vh] shadow-md relative text-white"><div class="grid p-9 h-160 m-auto w-max"><div class="max-h-8 w-max"><p>`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconTeamWhite), { class: "inline-block" }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, { to: `/my-teams` }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.exports.ssrInterpolate(_ctx.$t("hamburger.myTeams"))}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$t("hamburger.myTeams")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div><div class="container max-h-8 w-max"><p>`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconProfileWhite), { class: "inline-block" }, null, _parent));
      _push(` My Profile</p></div><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(myProfileSubCategory), (subCat) => {
        _push(`<div class="container max-h-8 w-max"><p class="ml-8">`);
        serverRenderer.exports.ssrRenderVNode(_push, vue_cjs_prod.createVNode(vue_cjs_prod.resolveDynamicComponent(subCat.component), { class: "inline-block" }, null), _parent);
        _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
          to: `/${subCat.value}`
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.exports.ssrInterpolate(subCat.name)}`);
            } else {
              return [
                vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(subCat.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</p></div>`);
      });
      _push(`<!--]--><div class="container max-h-8 w-max"><p>`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconExploreWhite), { class: "inline-block" }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, { to: `/explore` }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Explore `);
          } else {
            return [
              vue_cjs_prod.createTextVNode(" Explore ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div><div class="container bottom-16 max-h-8 m-auto w-max"><p class="underline">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, { to: `/terms` }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Terms and Condition `);
          } else {
            return [
              vue_cjs_prod.createTextVNode(" Terms and Condition ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div><div class="max-h-8 m-auto w-max mt-[2rem]">`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(ButtonCancel), null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/global/HamburgerContentMobile.vue");
  return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
const HamburgerContentMobile = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$13
});
function setup$h(__props) {
  const { change: openHamburger, currentHamburger } = useHamburgerInject();
  const closePopUp = () => {
    debugger;
    openHamburger();
  };
  const themeVars = {
    popupBackgroundColor: "#092231"
  };
  return (_ctx, _push, _parent, _attrs) => {
    const _component_van_config_provider = vue_cjs_prod.resolveComponent("van-config-provider");
    const _component_van_popup = vue_cjs_prod.resolveComponent("van-popup");
    _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "bg-gray overflow-y-auto overflow-x-hidden" }, _attrs))} data-v-352989f6>`);
    _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$14, null, null, _parent));
    _push(serverRenderer.exports.ssrRenderComponent(_component_van_config_provider, { "theme-vars": themeVars }, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(serverRenderer.exports.ssrRenderComponent(_component_van_popup, {
            show: vue_cjs_prod.unref(currentHamburger),
            "onUpdate:show": ($event) => vue_cjs_prod.isRef(currentHamburger) ? currentHamburger.value = $event : null,
            position: "top",
            style: { height: "100%" }
          }, {
            default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(serverRenderer.exports.ssrRenderComponent(_sfc_main$13, null, null, _parent3, _scopeId2));
              } else {
                return [
                  vue_cjs_prod.createVNode(_sfc_main$13, { onClose: closePopUp })
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          return [
            vue_cjs_prod.createVNode(_component_van_popup, {
              show: vue_cjs_prod.unref(currentHamburger),
              "onUpdate:show": ($event) => vue_cjs_prod.isRef(currentHamburger) ? currentHamburger.value = $event : null,
              onClickOverlay: closePopUp,
              position: "top",
              style: { height: "100%" }
            }, {
              default: vue_cjs_prod.withCtx(() => [
                vue_cjs_prod.createVNode(_sfc_main$13, { onClose: closePopUp })
              ]),
              _: 1
            }, 8, ["show", "onUpdate:show"])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<div class="grid expand w-screen h-screen" data-v-352989f6><div class="col-start-2" data-v-352989f6>`);
    serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</div></div></div>`);
  };
}
const __default__$h = {
  name: "teamsMobile"
};
const _sfc_main$12 = /* @__PURE__ */ vue_cjs_prod.defineComponent(__spreadProps(__spreadValues({}, __default__$h), {
  __ssrInlineRender: true,
  setup: setup$h
}));
const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/teamsMobile.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
const teamsMobile = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["__scopeId", "data-v-352989f6"]]);
const teamsMobile$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": teamsMobile
});
function setup$g(__props) {
  const { currentHamburger } = useHamburgerInject();
  const { isMobile: isMobile2, setDevice } = useDeviceInject();
  const mobile = vue_cjs_prod.ref(false);
  vue_cjs_prod.computed(() => {
    return mobile.value;
  });
  vue_cjs_prod.onBeforeMount(() => {
    document.body.className = "intro";
  });
  vue_cjs_prod.onMounted(() => {
    debugger;
    setDevice();
  });
  return (_ctx, _push, _parent, _attrs) => {
    if (!vue_cjs_prod.unref(isMobile2)) {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "bg-gray" }, _attrs))} data-v-40169418>`);
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$14, null, null, _parent));
      _push(`<div class="${serverRenderer.exports.ssrRenderClass([{ unexpand: vue_cjs_prod.unref(currentHamburger) }, "grid expand w-screen h-screen"])}" data-v-40169418>`);
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$17, { class: "col-start-1 row-start-1 ml-12" }, null, _parent));
      _push(`<div class="col-start-2" data-v-40169418>`);
      serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    } else {
      _push(serverRenderer.exports.ssrRenderComponent(teamsMobile, _attrs, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue_cjs_prod.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
    }
  };
}
const __default__$g = {
  components: { teamsMobile },
  name: "teams"
};
const _sfc_main$11 = /* @__PURE__ */ vue_cjs_prod.defineComponent(__spreadProps(__spreadValues({}, __default__$g), {
  __ssrInlineRender: true,
  setup: setup$g
}));
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/teams.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
const teams = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["__scopeId", "data-v-40169418"]]);
const teams$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": teams
});
const _sfc_main$10 = {
  async setup() {
    const { params } = vueRouter_cjs_prod.useRoute();
    const { data: note, pending } = await useAsyncData("data", () => $fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`), { defer: true, server: false });
    return { note, pending };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = vue_cjs_prod.resolveComponent("NuxtLink");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-blue-400 text-sm"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Go Home`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Go Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` ${serverRenderer.exports.ssrInterpolate($setup.note.title)}</div>`);
}
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/[id].vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
const _id_$8 = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["ssrRender", _sfc_ssrRender$4]]);
const _id_$9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _id_$8
});
const _sfc_main$$ = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>about</div>`);
}
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/about/index.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
const index$c = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["ssrRender", _sfc_ssrRender$3]]);
const index$d = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index$c
});
const _sfc_main$_ = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    company: null
  },
  emits: ["click"],
  setup(__props) {
    vueRouter_cjs_prod.useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "relative container grid grid-cols-1 rounded-[25px] bg-white w-56 h-56 shadow-md" }, _attrs))}><img class="w-full h-full rounded-[25px] object-cover mb-3" alt="abc"${serverRenderer.exports.ssrRenderAttr("src", __props.company.attachment.url)}><div class="absolute bottom-0 rounded-b-[25px] w-full bg-green-default opacity-70 z-10 text-center text-green-light">${serverRenderer.exports.ssrInterpolate(__props.company.name)}</div></div>`);
    };
  }
});
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/bookmark/components/AvatarCard.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const AvatarCard$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$_
});
const _sfc_main$Z = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    company: null
  },
  setup(__props) {
    vueRouter_cjs_prod.useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c, _d;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "relative grid grid-cols-1 rounded-[25px] bg-white w-[96%] h-[30rem] shadow-md p-4 overflow-y-auto" }, _attrs))}><div><div class="font-bold text-green-light p-3.5">${serverRenderer.exports.ssrInterpolate(__props.company.name)}</div><div class="p-4 h-32 overflow-y-auto"><ul class="list-[unset]"><li> StartDate: ${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(toFullDate)((_a2 = __props.company) == null ? void 0 : _a2.companyInfo.create_date))}</li>`);
      if ((_b = __props.company) == null ? void 0 : _b.companyInfo.comment) {
        _push(`<li>${serverRenderer.exports.ssrInterpolate((_c = __props.company) == null ? void 0 : _c.companyInfo.comment)}</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></div><hr class="border-t-1 border-t-grayOther-300"><div class="font-bold p-3.5"> Coaches: </div><div><!--[-->`);
      serverRenderer.exports.ssrRenderList((_d = __props.company) == null ? void 0 : _d.employees, (employee) => {
        _push(`<div class="flex my-5"><img class="rounded-[50%] ml-2.5 w-12 h-[5rem] w-[5rem]" alt="thumbnail"${serverRenderer.exports.ssrRenderAttr("src", employee == null ? void 0 : employee.user.partner.attachment.url)}><div class="grid"><p class="m-auto ml-4">${serverRenderer.exports.ssrInterpolate(employee == null ? void 0 : employee.user.partner.name)}</p><p>${serverRenderer.exports.ssrInterpolate(employee == null ? void 0 : employee.user.partner.comment)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/bookmark/components/DescriptionCard.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const DescriptionCard$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$Z
});
const _sfc_main$Y = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    vueRouter_cjs_prod.useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "pt-2 relative mx-auto text-gray-600 inline-block" }, _attrs))}><button type="submit" class="absolute left-[3px] top-0 mt-5 mr-4"><svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="${serverRenderer.exports.ssrRenderStyle({ "enable-background": "new 0 0 56.966 56.966" })}" xml:space="preserve" width="512px" height="512px"><path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path></svg></button><input class="bg-white h-10 px-5 pr-16 rounded-full text-sm focus:outline-none" type="search" name="search" placeholder="Search"></div>`);
    };
  }
});
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/bookmark/components/SearchBar.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const SearchBar$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$Y
});
const _sfc_main$X = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "container flex font-bold text-2xl" }, _attrs))}>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/global/PageTitle.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const PageTitle = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["ssrRender", _sfc_ssrRender$2]]);
const PageTitle$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": PageTitle
});
const __default__$f = {
  layout: "teams"
};
function setup$f(__props) {
  const { state: companyState, load: loadCompanys } = useCompanysInject();
  vueRouter_cjs_prod.useRoute();
  let currentCompany = vue_cjs_prod.ref({});
  const getCurrentCompany = vue_cjs_prod.computed(() => {
    return currentCompany.value;
  });
  vue_cjs_prod.onMounted(() => {
    loadCompanys({
      skip: 1,
      pageSize: 4,
      filter: {}
    });
  });
  return (_ctx, _push, _parent, _attrs) => {
    _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "col-start-2 flex" }, _attrs))}><div class="grid grid-cols-1 w-48w ml-[3vw]">`);
    _push(serverRenderer.exports.ssrRenderComponent(PageTitle, null, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Bookmark`);
        } else {
          return [
            vue_cjs_prod.createTextVNode("Bookmark")
          ];
        }
      }),
      _: 1
    }, _parent));
    if (vue_cjs_prod.unref(companyState).status != "success") {
      _push(`<div> No record </div>`);
    } else {
      _push(`<div><div class="inline-block"><!--[-->`);
      serverRenderer.exports.ssrRenderList(2, (index2) => {
        _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$_, {
          class: "m-9",
          key: index2,
          company: vue_cjs_prod.unref(companyState).data[index2 - 1]
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="inline-block"><!--[-->`);
      serverRenderer.exports.ssrRenderList(2, (index2) => {
        _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$_, {
          class: "m-9",
          key: index2,
          company: vue_cjs_prod.unref(companyState).data[index2 + 1]
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    }
    _push(`</div><div class="grid grid-cols-1 w-[29vw] mr-[2vw]">`);
    _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$Y, null, null, _parent));
    if (vue_cjs_prod.unref(checkIfEmpty)(vue_cjs_prod.unref(getCurrentCompany))) {
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$Z, { company: vue_cjs_prod.unref(getCurrentCompany) }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div>`);
  };
}
const _sfc_main$W = /* @__PURE__ */ vue_cjs_prod.defineComponent(__spreadProps(__spreadValues({}, __default__$f), {
  __ssrInlineRender: true,
  setup: setup$f
}));
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/bookmark/index.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const index$b = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$W
});
const _sfc_main$V = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    vueRouter_cjs_prod.useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "bg-gray rounded-[3rem] h-[23rem] m-7 opacity-90 p-8" }, _attrs))}><h1 class="font-bold text-lg ml-4">Contact Us</h1><div class="grid"><div class="flex"><div class="grid w-9/20 ml-4"><label class="text-grayOther-400">Name </label><input class="w-[86%] rounded-lg lg:w-full"></div><div class="grid w-9/20 ml-4"><label class="text-grayOther-400">Email </label><input class="w-[86%] rounded-lg lg:w-full"></div></div><div class="m-4 grid w-[88%] lg:w-[94%]"><label class="text-grayOther-400">Leave a Message </label><textarea class="rounded-lg" rows="5">
          </textarea></div></div><button class="border-2 border-black rounded-full w-36 m-8"> Submit </button></div>`);
    };
  }
});
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/components/ContactUsCard.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const ContactUsCard = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$V
});
const _hoisted_1$g = {
  width: "79",
  height: "40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$g = /* @__PURE__ */ vue_cjs_prod.createElementVNode("g", {
  "clip-path": "url(#a)",
  stroke: "#38C28D",
  "stroke-width": "2",
  "stroke-miterlimit": "10"
}, [
  /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", { d: "M8.23 19.564H3.577L5.561 4.63H1.274L1.788.655h13.228l-.514 3.975h-4.287L8.23 19.564ZM32.04.655l-2.498 18.909h-4.654l1.004-7.661h-4.654l-1.004 7.66h-4.655L18.08.656h4.653l-.955 7.272h4.654l.956-7.272h4.654ZM47.963.655 47.45 4.63H40.1l-.44 3.297h6.123l-.539 3.976H39.12l-.49 3.685h7.35l-.515 3.976H33.462L35.96.654h12.003ZM.906 29.988l.123-.921c.882-6.546 3.527-9.358 8.671-9.358 4.68 0 7.03 2.11 6.443 6.667l-.123.945h-4.654c.294-2.182.025-3.636-1.812-3.636h-.27c-2.327 0-3.086 2.109-3.527 5.382l-.123.92c-.44 3.298 0 5.334 2.327 5.334h.27c.71 0 1.616-.218 2.106-.485l.319-2.424H8.353l.54-3.976h6.956l-1.151 8.63c-1.47 1.188-3.356 2.23-6.982 2.23-5.144 0-7.691-2.763-6.81-9.308ZM22.928 38.958h-4.654l2.499-18.91h6.59c3.233 0 6.81.68 6.099 5.916l-.074.533c-.416 3.079-1.886 4.606-3.674 5.333l2.033 7.128h-5.022l-1.641-6.497h-1.298l-.858 6.497Zm3.503-10.473c.907 0 2.107-.364 2.278-2.11l.025-.266c.171-1.794-.784-2.085-1.69-2.085h-2.131l-.613 4.46h2.131ZM40.076 38.958H35.42l2.499-18.91h4.654l-2.498 18.91ZM58.569 38.958h-4.9l-3.894-10.425-.368 3.637-.881 6.788h-4.41l2.499-18.91h4.9l3.894 10.425.343-3.636.906-6.788h4.41l-2.499 18.909ZM78.043 29.94c-.881 6.545-3.306 9.018-9.308 9.018h-6.247l2.499-18.91h6.002c6.001 0 8.059 2.425 7.177 8.97l-.123.921Zm-9.039 5.042c3.185 0 3.87-1.77 4.312-5.043l.122-.92c.441-3.273-.024-4.995-3.209-4.995h-1.102l-1.47 10.958h1.347Z" })
], -1);
const _hoisted_3$g = /* @__PURE__ */ vue_cjs_prod.createElementVNode("defs", null, [
  /* @__PURE__ */ vue_cjs_prod.createElementVNode("clipPath", { id: "a" }, [
    /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
      fill: "#fff",
      d: "M0 0h79v40H0z"
    })
  ])
], -1);
const _hoisted_4$b = [
  _hoisted_2$g,
  _hoisted_3$g
];
function render$g(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$g, _hoisted_4$b);
}
const Logo$1 = { render: render$g };
const _sfc_main$U = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    vueRouter_cjs_prod.useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = vue_cjs_prod.resolveComponent("NuxtLink");
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "text-white my-8 text-center" }, _attrs))}><h1 class="flex font-bold text-4xl justify-center"> Welcome to `);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(Logo$1), { class: "scale-125 ml-8" }, null, _parent));
      _push(`</h1><div class="font-thin"> Login to explore your personalize and unique adventure! </div><div class="mt-8">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, { to: `/login/` }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="border-2 border-green-light rounded-full bg-green-light w-36 ml-8"${_scopeId}> Login </button>`);
          } else {
            return [
              vue_cjs_prod.createVNode("button", { class: "border-2 border-green-light rounded-full bg-green-light w-36 ml-8" }, " Login ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, { to: `/register/` }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="border-2 border-white rounded-full w-36 ml-8"${_scopeId}> Register </button>`);
          } else {
            return [
              vue_cjs_prod.createVNode("button", { class: "border-2 border-white rounded-full w-36 ml-8" }, " Register ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/components/LeftTitle.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const LeftTitle = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$U
});
const _sfc_main$T = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    content: null
  },
  setup(__props) {
    vueRouter_cjs_prod.useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "container bg-gray rounded-[3rem] min-w-[20rem] min-w-fit lg:w-112 h-48 m-7 opacity-90 p-8" }, _attrs))}><h1 class="font-bold text-lg">\u7CFB\u7D71\u6D88\u606F</h1><div class="font-thin">${serverRenderer.exports.ssrInterpolate(__props.content)}</div></div>`);
    };
  }
});
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/components/NewsCard.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const NewsCard = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$T
});
const _sfc_main$S = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    company: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c, _d, _e;
      _push(`<!--[--><div class="relative grid grid-cols-1 rounded-[25px] bg-white w-[96%] h-[30rem] shadow-md p-4 overflow-y-auto mt-[1rem]"><div><div class="flex"><img class="rounded-[50%] ml-2.5 h-[8rem] w-[8rem]" alt="thumbnail"${serverRenderer.exports.ssrRenderAttr("src", (_a2 = __props.company) == null ? void 0 : _a2.attachment.url)}><div class="grid"><div class="font-bold text-green-light p-3.5">${serverRenderer.exports.ssrInterpolate((_b = __props.company) == null ? void 0 : _b.companyInfo.name)}</div><div class="p-4 h-32 overflow-y-auto"><ul class="list-[unset]"><li> StartDate: ${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(toFullDate)((_c = __props.company) == null ? void 0 : _c.companyInfo.create_date))}</li>`);
      if ((_d = __props.company) == null ? void 0 : _d.companyInfo.comment) {
        _push(`<li>${serverRenderer.exports.ssrInterpolate(__props.company.companyInfo.comment)}</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></div></div></div><hr class="border-t-1 border-t-grayOther-300"><div class="font-bold p-3.5"> Coaches: </div><div><!--[-->`);
      serverRenderer.exports.ssrRenderList((_e = __props.company) == null ? void 0 : _e.employees, (employee) => {
        _push(`<div class="flex my-5"><img class="rounded-[50%] ml-2.5 w-12 h-[5rem] w-[5rem]" alt="thumbnail"${serverRenderer.exports.ssrRenderAttr("src", employee == null ? void 0 : employee.user.partner.attachment.url)}><div class="grid"><p class="m-auto ml-4">${serverRenderer.exports.ssrInterpolate(employee == null ? void 0 : employee.user.partner.name)}</p><p>${serverRenderer.exports.ssrInterpolate(employee == null ? void 0 : employee.user.partner.comment)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div>- <!--]-->`);
    };
  }
});
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/explore/components/DescriptionCard.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const DescriptionCard$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$S
});
const _sfc_main$R = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  emits: ["click"],
  setup(__props, { emit }) {
    let tabTitle = [
      {
        id: 1,
        title: "Info"
      },
      {
        id: 2,
        title: "Coaches"
      },
      {
        id: 3,
        title: "Courses"
      }
    ];
    let currentTab = vue_cjs_prod.ref(1);
    const isActiveTab = (tab) => {
      if (tab.id == currentTab.value) {
        return true;
      } else {
        return false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "border-gray-200 dark:border-gray-700" }, _attrs))}><ul class="flex flex-wrap -mb-px justify-center"><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(tabTitle), (tab) => {
        _push(`<li class="mr-2"><a href="#" class="${serverRenderer.exports.ssrRenderClass([{
          "text-gray-500": !isActiveTab(tab),
          "text-green-light": isActiveTab(tab),
          "border-green-light": isActiveTab(tab),
          "dark:border-blue-500": isActiveTab(tab),
          "dark:text-blue-500": isActiveTab(tab),
          "active": isActiveTab(tab),
          "dark:text-gray-400": !isActiveTab(tab),
          "dark:hover:text-gray-300": !isActiveTab(tab),
          "hover:text-gray-600": !isActiveTab(tab),
          "hover:border-gray-300": !isActiveTab(tab),
          "border-transparent": !isActiveTab(tab)
        }, "inline-flex py-4 px-4 text-sm font-medium text-center rounded-t-lg border-b-2 group"])}">${serverRenderer.exports.ssrInterpolate(tab.title)}</a></li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/explore/components/Tab.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const Tab$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$R
});
const _sfc_main$Q = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    company: null
  },
  setup(__props) {
    const currentTab = vue_cjs_prod.ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c, _d, _e;
      _push(`<!--[-->`);
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$R, null, null, _parent));
      _push(`<div class="relative grid grid-cols-1 rounded-[25px] bg-white w-[96%] h-[27rem] shadow-md p-4 overflow-y-auto mt-[1rem]">`);
      if (currentTab.value == 1) {
        _push(`<div><div class="text-center"><img class="rounded-[50%] m-auto h-[8rem] w-[8rem]" alt="thumbnail"${serverRenderer.exports.ssrRenderAttr("src", (_a2 = __props.company) == null ? void 0 : _a2.attachment.url)}><div class="grid"><div class="font-bold text-green-light p-3.5">${serverRenderer.exports.ssrInterpolate((_b = __props.company) == null ? void 0 : _b.companyInfo.name)}</div><div class="p-4 h-32 overflow-y-auto"><ul class="list-[unset]"><li> StartDate: ${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(toFullDate)((_c = __props.company) == null ? void 0 : _c.companyInfo.create_date))}</li>`);
        if ((_d = __props.company) == null ? void 0 : _d.companyInfo.comment) {
          _push(`<li>${serverRenderer.exports.ssrInterpolate(__props.company.companyInfo.comment)}</li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentTab.value == 2) {
        _push(`<div><!--[-->`);
        serverRenderer.exports.ssrRenderList((_e = __props.company) == null ? void 0 : _e.employees, (employee) => {
          _push(`<div class="flex my-5"><img class="rounded-[50%] ml-2.5 w-12 h-[5rem] w-[5rem]" alt="thumbnail"${serverRenderer.exports.ssrRenderAttr("src", employee == null ? void 0 : employee.user.partner.attachment.url)}><div class="grid"><p class="m-auto ml-4">${serverRenderer.exports.ssrInterpolate(employee == null ? void 0 : employee.user.partner.name)}</p><p>${serverRenderer.exports.ssrInterpolate(employee == null ? void 0 : employee.user.partner.comment)}</p></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/explore/components/DescriptionCardMobile.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const DescriptionCardMobile = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$Q
});
const _hoisted_1$f = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$f = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  d: "M4.25 12.274h15M10.3 18.299l-6.05-6.024L10.3 6.25",
  stroke: "#092231",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$f = [
  _hoisted_2$f
];
function render$f(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$f, _hoisted_3$f);
}
const IconBack = { render: render$f };
function setup$e(__props) {
  const route = vueRouter_cjs_prod.useRoute();
  const mobile = vue_cjs_prod.ref(false);
  const { state: companyState, load: loadCompany } = useCompanyInject();
  vueRouter_cjs_prod.useRouter();
  const getMobile = vue_cjs_prod.computed(() => {
    return mobile.value;
  });
  vue_cjs_prod.onMounted(() => {
    mobile.value = isMobile();
    loadCompany({
      id: parseInt(route.params.id[0]),
      skip: 1,
      pageSize: 4,
      filter: {}
    });
  });
  return (_ctx, _push, _parent, _attrs) => {
    var _a2, _b;
    _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
    _push(serverRenderer.exports.ssrRenderComponent(PageTitle, null, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconBack), { class: "mr-3 my-auto" }, null, _parent2, _scopeId));
          _push2(`Explore`);
        } else {
          return [
            vue_cjs_prod.createVNode(vue_cjs_prod.unref(IconBack), {
              onClick: ($event) => _ctx.$router.back(),
              class: "mr-3 my-auto"
            }, null, 8, ["onClick"]),
            vue_cjs_prod.createTextVNode("Explore")
          ];
        }
      }),
      _: 1
    }, _parent));
    if (!vue_cjs_prod.unref(getMobile)) {
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$S, {
        company: (_a2 = vue_cjs_prod.unref(companyState)) == null ? void 0 : _a2.data
      }, null, _parent));
    } else {
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$Q, {
        company: (_b = vue_cjs_prod.unref(companyState)) == null ? void 0 : _b.data
      }, null, _parent));
    }
    _push(`</div>`);
  };
}
const __default__$e = {
  layout: "teams"
};
const _sfc_main$P = /* @__PURE__ */ vue_cjs_prod.defineComponent(__spreadProps(__spreadValues({}, __default__$e), {
  __ssrInlineRender: true,
  setup: setup$e
}));
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/explore/[id].vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const _id_$7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$P
});
const _sfc_main$O = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    company: null
  },
  emits: ["click"],
  setup(__props) {
    vueRouter_cjs_prod.useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "relative container grid grid-cols-1 rounded-[25px] bg-white w-[30vw] h-[30vw] shadow-md max-w-[14rem] max-h-[14rem]" }, _attrs))}><img class="w-full h-full rounded-[25px] object-cover mb-3" alt="abc"${serverRenderer.exports.ssrRenderAttr("src", __props.company.attachment.url)}><div class="absolute bottom-0 rounded-b-[25px] w-full bg-green-default opacity-70 z-10 text-center text-green-light">${serverRenderer.exports.ssrInterpolate(__props.company.name)}</div></div>`);
    };
  }
});
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/explore/components/AvatarCard.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const AvatarCard = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$O
});
const _sfc_main$N = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    vueRouter_cjs_prod.useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "pt-2 relative mx-auto text-gray-600 inline-block ml-[10px]" }, _attrs))}><button type="submit" class="absolute left-[3px] top-0 mt-5 mr-4"><svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="${serverRenderer.exports.ssrRenderStyle({ "enable-background": "new 0 0 56.966 56.966" })}" xml:space="preserve" width="512px" height="512px"><path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path></svg></button><input class="w-[63vw] max-w-[30rem] bg-white h-10 px-5 pr-16 rounded-full text-sm focus:outline-none" type="search" name="search" placeholder="Search"></div>`);
    };
  }
});
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/explore/components/SearchBar.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const SearchBar$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$N
});
const _sfc_main$M = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    maxVisibleButtons: null,
    totalPages: null,
    total: null,
    perPage: null,
    currentPage: null,
    hasMorePages: null
  },
  emits: ["pagechanged"],
  setup(__props, { emit }) {
    const props = __props;
    const {
      maxVisibleButtons,
      totalPages,
      total,
      perPage,
      currentPage,
      hasMorePages
    } = vue_cjs_prod.toRefs(props);
    const startPage = vue_cjs_prod.computed(() => {
      debugger;
      if (currentPage.value === 1) {
        return 1;
      }
      if (currentPage.value === totalPages.value) {
        debugger;
        return totalPages.value - maxVisibleButtons.value + 1;
      }
      debugger;
      return currentPage.value - 1;
    });
    const endPage = vue_cjs_prod.computed(() => {
      return Math.min(startPage.value + maxVisibleButtons.value - 1, totalPages.value);
    });
    const pages = vue_cjs_prod.computed(() => {
      debugger;
      const range2 = [];
      for (let i = startPage.value; i <= endPage.value; i += 1) {
        debugger;
        if (i > 0) {
          range2.push({
            name: i,
            isDisabled: i === currentPage.value
          });
        }
      }
      return range2;
    });
    const isInFirstPage = vue_cjs_prod.computed(() => {
      return currentPage.value === 1;
    });
    const isInLastPage = vue_cjs_prod.computed(() => {
      return currentPage.value === totalPages.value;
    });
    const isPageActive = (page) => {
      return currentPage.value === page;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "flex justify-center mt-[2rem] 2xl:mt-32" }, _attrs))}><ul class="flex pagination"><li class="pagination-item">`);
      if (!vue_cjs_prod.unref(isInFirstPage)) {
        _push(`<a class="${serverRenderer.exports.ssrRenderClass([{ "cursor-not-allowed": vue_cjs_prod.unref(isInFirstPage) }, "rounded-full border border-grayOther-300 px-3 py-2 hover:bg-gray-100 text-gray-600 no-underline mx-2"])}" href="#" role="button"> \u276E </a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(pages), (page) => {
        _push(`<li class="pagination-item">`);
        if (isPageActive(page.name)) {
          _push(`<span class="rounded-full border border-grayOther-300 px-3 py-2 bg-blackOther-100 no-underline text-white cursor-not-allowed mx-2">${serverRenderer.exports.ssrInterpolate(page.name)}</span>`);
        } else {
          _push(`<a class="rounded-full border border-grayOther-300 px-3 py-2 hover:bg-gray-100 text-gray-600 no-underline mx-2" href="#" role="button">${serverRenderer.exports.ssrInterpolate(page.name)}</a>`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--><li class="pagination-item">`);
      if (!vue_cjs_prod.unref(isInLastPage)) {
        _push(`<a class="${serverRenderer.exports.ssrRenderClass([{ "cursor-not-allowed": vue_cjs_prod.unref(isInLastPage) }, "rounded-full border border-grayOther-300 px-3 py-2 hover:bg-gray-100 text-gray-600 no-underline mx-2"])}" href="#" role="button"> \u276F </a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li></ul></div>`);
    };
  }
});
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/global/Pagination.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$M
});
const __default__$d = {
  layout: "teams"
};
function setup$d(__props) {
  const { state: companyState, load: loadCompany } = useCompanysInject();
  vueRouter_cjs_prod.useRouter();
  let currentCompany = vue_cjs_prod.ref({});
  vue_cjs_prod.computed(() => {
    return currentCompany.value;
  });
  vue_cjs_prod.computed(() => {
    debugger;
    return companyState.value;
  });
  const getScreenRow = vue_cjs_prod.computed(() => {
    {
      return 2;
    }
  });
  const mobile = vue_cjs_prod.ref(false);
  vue_cjs_prod.ref(1);
  let totalPages = vue_cjs_prod.ref(4);
  let total = vue_cjs_prod.ref(40);
  let perPage = vue_cjs_prod.ref(6);
  let currentPage = vue_cjs_prod.ref(1);
  let hasMorePages = vue_cjs_prod.ref(true);
  let maxVisibleButtons = vue_cjs_prod.ref(3);
  const getTotalPages = vue_cjs_prod.computed(() => {
    if (companyState.value.status === "success") {
      return totalPages.value = Math.ceil(companyState.value.total / 6);
    } else {
      return totalPages.value;
    }
  });
  const getTotal = vue_cjs_prod.computed(() => {
    if (companyState.value.status === "success") {
      return total.value = companyState.value.total;
    } else {
      return total.value;
    }
  });
  const getMobile = vue_cjs_prod.computed(() => {
    return mobile.value;
  });
  const companyClicked = (company2) => {
    debugger;
    currentCompany.value = company2;
  };
  const getData = () => {
    loadCompany({
      skip: currentPage.value,
      pageSize: 6,
      filter: {}
    });
  };
  vue_cjs_prod.onMounted(() => {
    debugger;
    mobile.value = isMobile();
    getData();
  });
  return (_ctx, _push, _parent, _attrs) => {
    const _component_NuxtLink = vue_cjs_prod.resolveComponent("NuxtLink");
    _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "col-start-2 flex" }, _attrs))}><div class="grid grid-cols-1 w-48w ml-[3vw]"><div class="flex justify-between">`);
    _push(serverRenderer.exports.ssrRenderComponent(PageTitle, null, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Explore`);
        } else {
          return [
            vue_cjs_prod.createTextVNode("Explore")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$N, null, null, _parent));
    _push(`</div>`);
    if (vue_cjs_prod.unref(companyState).status != "success") {
      _push(`<div>No record</div>`);
    } else {
      _push(`<div><!--[-->`);
      serverRenderer.exports.ssrRenderList(Math.ceil(vue_cjs_prod.unref(companyState).data.length / vue_cjs_prod.unref(getScreenRow)), (rowIdx) => {
        _push(`<div class="flex"><!--[-->`);
        serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(companyState).data.slice(vue_cjs_prod.unref(getScreenRow) * (rowIdx - 1), vue_cjs_prod.unref(getScreenRow) * rowIdx), (company2) => {
          _push(`<div class="one-third column">`);
          _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
            to: `/explore/${company2.id}`
          }, {
            default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(serverRenderer.exports.ssrRenderComponent(_sfc_main$O, {
                  class: "m-9",
                  company: company2
                }, null, _parent2, _scopeId));
              } else {
                return [
                  vue_cjs_prod.createVNode(_sfc_main$O, {
                    class: "m-9",
                    company: company2,
                    onClick: companyClicked
                  }, null, 8, ["company"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--><div class="inline-block"></div></div>`);
    }
    if (vue_cjs_prod.unref(getMobile)) {
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$M, {
        class: "w-[91vw]",
        "total-pages": vue_cjs_prod.unref(getTotalPages),
        total: vue_cjs_prod.unref(getTotal),
        "per-page": vue_cjs_prod.unref(perPage),
        "current-page": vue_cjs_prod.unref(currentPage),
        maxVisibleButtons: vue_cjs_prod.unref(maxVisibleButtons),
        "has-more-pages": vue_cjs_prod.unref(hasMorePages)
      }, null, _parent));
    } else {
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$M, {
        "total-pages": vue_cjs_prod.unref(getTotalPages),
        total: vue_cjs_prod.unref(getTotal),
        "per-page": vue_cjs_prod.unref(perPage),
        "current-page": vue_cjs_prod.unref(currentPage),
        maxVisibleButtons: vue_cjs_prod.unref(maxVisibleButtons),
        "has-more-pages": vue_cjs_prod.unref(hasMorePages)
      }, null, _parent));
    }
    _push(`</div></div>`);
  };
}
const _sfc_main$L = /* @__PURE__ */ vue_cjs_prod.defineComponent(__spreadProps(__spreadValues({}, __default__$d), {
  __ssrInlineRender: true,
  setup: setup$d
}));
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/explore/index.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const index$a = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$L
});
const _sfc_main$K = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    slider: null
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const { slider } = vue_cjs_prod.toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "carousel relative shadow-2xl bg-white w-full lg:rounded-[2.5rem]" }, _attrs))}><div class="carousel-inner relative overflow-hidden w-full lg:rounded-[2.5rem]"><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(slider), (slide, i) => {
        _push(`<div><input class="carousel-open" type="radio"${serverRenderer.exports.ssrRenderAttr("id", `carousel-${i}`)} name="carousel" aria-hidden="true" hidden="" checked="checked"><div class="carousel-item absolute opacity-0" style="${serverRenderer.exports.ssrRenderStyle({ "height": "44vh" })}"><img class="block h-full w-full text-white text-5xl text-center object-cover"${serverRenderer.exports.ssrRenderAttr("src", slide.attributes.url)}></div></div>`);
      });
      _push(`<!--]--><ol class="carousel-indicators"><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(slider), (slide, i) => {
        _push(`<li class="inline-block mr-3"><label${serverRenderer.exports.ssrRenderAttr("for", `carousel-${i}`)} class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">\u2022</label></li>`);
      });
      _push(`<!--]--></ol></div></div>`);
    };
  }
});
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/Carousel.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const Carousel = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$K
});
const __default__$c = {
  layout: "default",
  transition: "fade"
};
async function setup$c(__props) {
  let __temp, __restore;
  useAccountInject();
  const { data: notes } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useAsyncData("data", () => $fetch("https://thegrind-strapi-5x42fcw6uq-df.a.run.app/api/thegrinds?populate=*"))), __temp = await __temp, __restore(), __temp);
  vue_cjs_prod.onMounted(() => {
  });
  return (_ctx, _push, _parent, _attrs) => {
    _push(`<!--[--><div class="w-screen md:w-screen lg:flex items-center justify-center lg:w-[80vw] xl:w-[70vw] 2xl:w-[60vw]">`);
    _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$U, { class: "sm:w-[97vw] lg:w-[60vw] mr-[11px]" }, null, _parent));
    _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$K, {
      class: "w-full",
      slider: vue_cjs_prod.unref(notes).data[0].attributes.Slider.data
    }, null, _parent));
    _push(`</div>`);
    _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(VueHorizontal), { class: "w-screen lg:w-[80vw] xl:w-[70vw] 2xl:w-[60vw]" }, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(serverRenderer.exports.ssrRenderComponent(_sfc_main$T, {
            content: vue_cjs_prod.unref(notes).data[0].attributes.notices.data[0].attributes.Notice1
          }, null, _parent2, _scopeId));
          _push2(serverRenderer.exports.ssrRenderComponent(_sfc_main$T, {
            content: vue_cjs_prod.unref(notes).data[0].attributes.notices.data[0].attributes.Notice2
          }, null, _parent2, _scopeId));
          _push2(serverRenderer.exports.ssrRenderComponent(_sfc_main$T, {
            content: vue_cjs_prod.unref(notes).data[0].attributes.notices.data[0].attributes.Notice3
          }, null, _parent2, _scopeId));
        } else {
          return [
            vue_cjs_prod.createVNode(_sfc_main$T, {
              content: vue_cjs_prod.unref(notes).data[0].attributes.notices.data[0].attributes.Notice1
            }, null, 8, ["content"]),
            vue_cjs_prod.createVNode(_sfc_main$T, {
              content: vue_cjs_prod.unref(notes).data[0].attributes.notices.data[0].attributes.Notice2
            }, null, 8, ["content"]),
            vue_cjs_prod.createVNode(_sfc_main$T, {
              content: vue_cjs_prod.unref(notes).data[0].attributes.notices.data[0].attributes.Notice3
            }, null, 8, ["content"])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$V, { class: "w-[88vw] lg:w-[80vw] xl:w-[70vw] 2xl:w-[60vw]" }, null, _parent));
    _push(`<!--]-->`);
  };
}
const _sfc_main$J = /* @__PURE__ */ vue_cjs_prod.defineComponent(__spreadProps(__spreadValues({}, __default__$c), {
  __ssrInlineRender: true,
  setup: setup$c
}));
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const index$9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$J
});
const _hoisted_1$e = {
  width: "170",
  height: "87",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$e = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  d: "M17.712 42.55H7.696l4.27-32.48H2.74l1.107-8.646h28.465l-1.107 8.647h-9.225l-4.27 32.48ZM68.949 1.424 63.572 42.55H53.557l2.16-16.662H45.703l-2.16 16.662H33.525l5.376-41.127h10.016l-2.056 15.818h10.015l2.056-15.818H68.95ZM103.212 1.424l-1.107 8.647H86.291l-.948 7.17H98.52l-1.16 8.648H84.183l-1.054 8.015h15.814l-1.107 8.647h-25.83l5.377-41.127h25.829ZM1.95 65.224l.264-2.004c1.898-14.236 7.59-20.353 18.66-20.353 10.069 0 15.13 4.588 13.864 14.5l-.264 2.057H24.46c.633-4.746.053-7.91-3.9-7.91h-.58c-5.008 0-6.643 4.588-7.591 11.706l-.264 2.004c-.949 7.17 0 11.6 5.008 11.6h.58c1.528 0 3.479-.475 4.533-1.055l.685-5.273h-4.955l1.16-8.647h14.97l-2.477 18.77c-3.163 2.585-7.222 4.852-15.023 4.852C5.535 85.47.053 79.46 1.95 65.224ZM49.34 84.733H39.324l5.377-41.128h14.18c6.958 0 14.654 1.477 13.125 12.866l-.158 1.16c-.896 6.696-4.059 10.018-7.907 11.6l4.375 15.502H57.51l-3.532-14.131h-2.794l-1.844 14.13Zm7.537-22.778c1.95 0 4.534-.791 4.903-4.588l.053-.58c.369-3.901-1.687-4.534-3.638-4.534H53.61l-1.318 9.702h4.587ZM86.239 84.733H76.223L81.6 43.605h10.016l-5.377 41.128ZM126.035 84.733h-10.543l-8.381-22.673-.791 7.91-1.898 14.763h-9.488l5.377-41.128h10.542l8.382 22.673.738-7.909 1.95-14.764h9.488l-5.376 41.128ZM167.942 65.118c-1.898 14.237-7.117 19.615-20.031 19.615h-13.442l5.376-41.128h12.915c12.915 0 17.343 5.273 15.445 19.51l-.263 2.003ZM148.49 76.086c6.853 0 8.329-3.85 9.278-10.968l.263-2.003c.949-7.119-.052-10.862-6.905-10.862h-2.372l-3.163 23.832h2.899Z",
  stroke: "#38C28D",
  "stroke-width": "2",
  "stroke-miterlimit": "10"
}, null, -1);
const _hoisted_3$e = [
  _hoisted_2$e
];
function render$e(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$e, _hoisted_3$e);
}
const Logo = { render: render$e };
const _hoisted_1$d = {
  width: "90",
  height: "36",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$d = /* @__PURE__ */ vue_cjs_prod.createElementVNode("rect", {
  width: "90",
  height: "36",
  rx: "18",
  fill: "#50D8BB"
}, null, -1);
const _hoisted_3$d = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  d: "M28.02 21.93V13.5h-2.37V24h6.87v-2.07h-4.5Zm9.506-6.075c-2.596 0-4.336 1.635-4.336 4.11 0 2.46 1.74 4.125 4.336 4.125 2.58 0 4.32-1.665 4.32-4.125 0-2.475-1.74-4.11-4.32-4.11Zm0 1.92c1.184 0 2.01.9 2.01 2.22 0 1.32-.825 2.22-2.01 2.22-1.2 0-2.01-.9-2.01-2.22 0-1.32.81-2.22 2.01-2.22Zm13.407-1.845h-2.295v1.095c-.555-.75-1.395-1.185-2.49-1.17-2.055 0-3.465 1.545-3.465 3.825 0 2.34 1.44 3.9 3.525 3.9 1.065 0 1.89-.42 2.43-1.17v.915c0 1.095-.84 1.8-2.16 1.8-.915 0-1.77-.285-2.505-.81l-.855 1.62A6.274 6.274 0 0 0 46.628 27c2.58 0 4.305-1.455 4.305-3.75v-7.32Zm-4.185 5.895c-1.14 0-1.89-.855-1.905-2.085.015-1.23.78-2.1 1.905-2.1s1.89.855 1.89 2.1c0 1.23-.765 2.085-1.89 2.085Zm7.448-9.48c-.735 0-1.245.54-1.245 1.29s.51 1.29 1.245 1.29c.735 0 1.245-.54 1.245-1.29s-.51-1.29-1.245-1.29ZM55.35 24v-8.07h-2.31V24h2.31Zm7.316-8.16c-1.26.015-2.22.495-2.79 1.5v-1.41h-2.31V24h2.31v-3.975c0-1.185.69-2.055 1.845-2.07.99 0 1.59.63 1.59 1.65V24h2.31v-5.07c0-1.89-1.155-3.09-2.955-3.09Z",
  fill: "#fff"
}, null, -1);
const _hoisted_4$a = [
  _hoisted_2$d,
  _hoisted_3$d
];
function render$d(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$d, _hoisted_4$a);
}
const ButtonLogin = { render: render$d };
const _hoisted_1$c = {
  width: "90",
  height: "36",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$c = /* @__PURE__ */ vue_cjs_prod.createElementVNode("rect", {
  width: "90",
  height: "36",
  rx: "18",
  fill: "#6C748A"
}, null, -1);
const _hoisted_3$c = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  d: "M31.791 24h2.686l-2.235-3.465c1.275-.6 1.965-1.77 1.965-3.39 0-2.325-1.56-3.645-4.306-3.645h-4.56V24h2.37v-3h2.416l1.665 3Zm-4.08-4.98v-3.555h2.19c1.305 0 2.055.585 2.055 1.755 0 1.2-.75 1.8-2.055 1.8h-2.19Zm11.905-3.165c-2.46 0-4.155 1.65-4.155 4.14 0 2.445 1.635 4.095 4.215 4.095 1.455 0 2.64-.525 3.45-1.425l-1.215-1.23a2.861 2.861 0 0 1-2.04.855c-1.035 0-1.815-.6-2.085-1.62h5.79c.195-2.94-1.125-4.815-3.96-4.815Zm-1.875 3.45c.18-1.065.87-1.755 1.89-1.755 1.065 0 1.755.69 1.785 1.755h-3.675Zm10.09-3.48c-1.755 0-3.18.855-3.18 2.52 0 2.835 4.185 2.145 4.185 3.435 0 .435-.435.63-1.02.63-.885 0-1.965-.36-2.805-1.005l-.75 1.56c.915.735 2.19 1.125 3.495 1.125 1.83 0 3.285-.87 3.285-2.52.015-2.85-4.245-2.235-4.245-3.45 0-.42.39-.6.93-.6.675 0 1.575.285 2.46.78l.795-1.575c-.9-.57-2.04-.9-3.15-.9Zm8.22.03c-2.46 0-4.154 1.65-4.154 4.14 0 2.445 1.635 4.095 4.215 4.095 1.455 0 2.64-.525 3.45-1.425l-1.215-1.23a2.861 2.861 0 0 1-2.04.855c-1.035 0-1.815-.6-2.085-1.62h5.79c.195-2.94-1.125-4.815-3.96-4.815Zm-1.874 3.45c.18-1.065.87-1.755 1.89-1.755 1.065 0 1.755.69 1.785 1.755h-3.675Zm11.875 2.55c-.42.195-.78.3-1.08.3-.495.015-.78-.255-.78-.93v-3.33h2.19V16.29h-2.19v-2.22h-2.295v2.22h-1.125v1.59h1.125v3.735c0 1.665 1.095 2.49 2.535 2.49.75 0 1.5-.21 2.1-.555l-.48-1.695Z",
  fill: "#fff"
}, null, -1);
const _hoisted_4$9 = [
  _hoisted_2$c,
  _hoisted_3$c
];
function render$c(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$c, _hoisted_4$9);
}
const ButtonReset = { render: render$c };
const _hoisted_1$b = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$b = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  d: "M16.423 9.448V7.3a4.552 4.552 0 0 0-4.55-4.551 4.55 4.55 0 0 0-4.57 4.53v2.168",
  stroke: "#092231",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$b = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  "clip-rule": "evenodd",
  d: "M15.683 21.25h-7.64a3.792 3.792 0 0 1-3.793-3.792v-4.29a3.792 3.792 0 0 1 3.792-3.791h7.641a3.792 3.792 0 0 1 3.792 3.792v4.289a3.792 3.792 0 0 1-3.792 3.792Z",
  stroke: "#092231",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$8 = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  d: "M11.863 14.203v2.22",
  stroke: "#092231",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_5$5 = [
  _hoisted_2$b,
  _hoisted_3$b,
  _hoisted_4$8
];
function render$b(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$b, _hoisted_5$5);
}
const IconPw = { render: render$b };
const _sfc_main$I = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  emits: ["onSubmit"],
  setup(__props, { emit }) {
    vueRouter_cjs_prod.useRouter();
    const username = vue_cjs_prod.ref("");
    const password = vue_cjs_prod.ref("");
    const onReset = (values) => {
      username.value = "";
      password.value = "";
    };
    const showPassword = () => {
      debugger;
      var x = document.getElementById("passwordInput");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_van_form = vue_cjs_prod.resolveComponent("van-form");
      const _component_van_field = vue_cjs_prod.resolveComponent("van-field");
      const _component_NuxtLink = vue_cjs_prod.resolveComponent("NuxtLink");
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "relative bg-gray rounded-[3rem] h-[35rem] m-7 opacity-90 p-8 w-[77vw] lg:w-[80vw] xl:w-[70vw] 2xl:w-[60vw] max-w-[400px]" }, _attrs))} data-v-5c8befa5>`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(Logo), { class: "m-auto" }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_van_form, null, {
        default: vue_cjs_prod.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid mt-[3rem] w-[90%] screen-width" style="${serverRenderer.exports.ssrRenderStyle({ "border": "none" })}" data-v-5c8befa5${_scopeId}><div class="grid m-auto" data-v-5c8befa5${_scopeId}><div class="pt-2 relative mx-auto text-gray-600 inline-block" data-v-5c8befa5${_scopeId}><button type="submit" class="absolute left-[3px] top-0 mt-[1rem] mr-4" data-v-5c8befa5${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconProfile), { class: "text-gray-600" }, null, _parent2, _scopeId));
            _push2(`</button>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_van_field, {
              style: { "padding-right": "2.5rem !important", "text-decoration": "none !important", "outline": "none" },
              class: "px-5 bg-transparent border-b-green-light border-b-2 text-sm ml-[1rem] sm:w-[30vw] lg:w-[18vw] 2xl:w-[18vw] w-[90%]",
              modelValue: username.value,
              "onUpdate:modelValue": ($event) => username.value = $event,
              autocomplete: "off",
              autocorrect: "off",
              placeholder: "Login ID",
              rules: [{ required: true, message: "\u8ACB\u586B\u5BEB\u7528\u6237ID" }]
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="pt-2 relative mx-auto text-gray-600 inline-block" data-v-5c8befa5${_scopeId}><button type="submit" class="absolute left-[3px] top-0 mt-[1rem] mr-4" data-v-5c8befa5${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconPw), { class: "text-gray-600" }, null, _parent2, _scopeId));
            _push2(`</button>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_van_field, {
              style: { "text-decoration": "none !important", "outline": "none" },
              class: "px-5 pr-16 bg-transparent border-b-green-light border-b-2 text-sm ml-[1rem] sm:w-[30vw] lg:w-[18vw] 2xl:w-[18vw] w-[90%]",
              id: "passwordInput",
              type: "password",
              autocomplete: "off",
              autocorrect: "off",
              "right-icon": "eye",
              modelValue: password.value,
              "onUpdate:modelValue": ($event) => password.value = $event,
              placeholder: "Password",
              rules: [{ required: true, message: "\u8ACB\u586B\u5BEB\u5BC6\u78BC" }]
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="flex justify-center p-3" data-v-5c8befa5${_scopeId}><input type="checkbox" class="form-checkbox" data-v-5c8befa5${_scopeId}><div class="mr-[3vw] text-sm text-grayOther-400" data-v-5c8befa5${_scopeId}>Remember me</div>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
              to: `/about`,
              class: "text-sm"
            }, {
              default: vue_cjs_prod.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="underline underline-offset-1 text-grayOther-400" data-v-5c8befa5${_scopeId2}> Forget password </p>`);
                } else {
                  return [
                    vue_cjs_prod.createVNode("p", { class: "underline underline-offset-1 text-grayOther-400" }, " Forget password ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex m-auto justify-center p-2 py-6" data-v-5c8befa5${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(ButtonReset), { class: "mr-[1rem]" }, null, _parent2, _scopeId));
            _push2(`<button native-type="submit" data-v-5c8befa5${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(ButtonLogin), null, null, _parent2, _scopeId));
            _push2(`</button></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", {
                class: "grid mt-[3rem] w-[90%] screen-width",
                style: { "border": "none" }
              }, [
                vue_cjs_prod.createVNode("div", { class: "grid m-auto" }, [
                  vue_cjs_prod.createVNode("div", { class: "pt-2 relative mx-auto text-gray-600 inline-block" }, [
                    vue_cjs_prod.createVNode("button", {
                      type: "submit",
                      class: "absolute left-[3px] top-0 mt-[1rem] mr-4"
                    }, [
                      vue_cjs_prod.createVNode(vue_cjs_prod.unref(IconProfile), { class: "text-gray-600" })
                    ]),
                    vue_cjs_prod.createVNode(_component_van_field, {
                      style: { "padding-right": "2.5rem !important", "text-decoration": "none !important", "outline": "none" },
                      class: "px-5 bg-transparent border-b-green-light border-b-2 text-sm ml-[1rem] sm:w-[30vw] lg:w-[18vw] 2xl:w-[18vw] w-[90%]",
                      modelValue: username.value,
                      "onUpdate:modelValue": ($event) => username.value = $event,
                      autocomplete: "off",
                      autocorrect: "off",
                      placeholder: "Login ID",
                      rules: [{ required: true, message: "\u8ACB\u586B\u5BEB\u7528\u6237ID" }]
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  vue_cjs_prod.createVNode("div", { class: "pt-2 relative mx-auto text-gray-600 inline-block" }, [
                    vue_cjs_prod.createVNode("button", {
                      type: "submit",
                      class: "absolute left-[3px] top-0 mt-[1rem] mr-4"
                    }, [
                      vue_cjs_prod.createVNode(vue_cjs_prod.unref(IconPw), { class: "text-gray-600" })
                    ]),
                    vue_cjs_prod.createVNode(_component_van_field, {
                      style: { "text-decoration": "none !important", "outline": "none" },
                      class: "px-5 pr-16 bg-transparent border-b-green-light border-b-2 text-sm ml-[1rem] sm:w-[30vw] lg:w-[18vw] 2xl:w-[18vw] w-[90%]",
                      id: "passwordInput",
                      type: "password",
                      autocomplete: "off",
                      autocorrect: "off",
                      "right-icon": "eye",
                      onClickRightIcon: vue_cjs_prod.withModifiers(showPassword, ["stop"]),
                      modelValue: password.value,
                      "onUpdate:modelValue": ($event) => password.value = $event,
                      placeholder: "Password",
                      rules: [{ required: true, message: "\u8ACB\u586B\u5BEB\u5BC6\u78BC" }]
                    }, null, 8, ["onClickRightIcon", "modelValue", "onUpdate:modelValue"])
                  ])
                ])
              ]),
              vue_cjs_prod.createVNode("div", { class: "flex justify-center p-3" }, [
                vue_cjs_prod.createVNode("input", {
                  type: "checkbox",
                  class: "form-checkbox"
                }),
                vue_cjs_prod.createVNode("div", { class: "mr-[3vw] text-sm text-grayOther-400" }, "Remember me"),
                vue_cjs_prod.createVNode(_component_NuxtLink, {
                  to: `/about`,
                  class: "text-sm"
                }, {
                  default: vue_cjs_prod.withCtx(() => [
                    vue_cjs_prod.createVNode("p", { class: "underline underline-offset-1 text-grayOther-400" }, " Forget password ")
                  ]),
                  _: 1
                })
              ]),
              vue_cjs_prod.createVNode("div", { class: "flex m-auto justify-center p-2 py-6" }, [
                vue_cjs_prod.createVNode(vue_cjs_prod.unref(ButtonReset), {
                  onClick: onReset,
                  class: "mr-[1rem]"
                }),
                vue_cjs_prod.createVNode("button", { "native-type": "submit" }, [
                  vue_cjs_prod.createVNode(vue_cjs_prod.unref(ButtonLogin))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid absolute text-center w-[80%] bottom-[1rem] text-sm" data-v-5c8befa5><div class="text-grayOther-400" data-v-5c8befa5>New to the grind?</div>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, { to: `/register` }, {
        default: vue_cjs_prod.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="underline underline-offset-1 font-bold" data-v-5c8befa5${_scopeId}>Register here</p>`);
          } else {
            return [
              vue_cjs_prod.createVNode("p", { class: "underline underline-offset-1 font-bold" }, "Register here")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/login/components/LoginCard.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const LoginCard = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["__scopeId", "data-v-5c8befa5"]]);
const LoginCard$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": LoginCard
});
const __default__$b = {
  layout: "login",
  transition: "fade"
};
function setup$b(__props) {
  vueRouter_cjs_prod.useRouter();
  vue_cjs_prod.ref({});
  vue_cjs_prod.onMounted(() => {
  });
  return (_ctx, _push, _parent, _attrs) => {
    _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "col-start-2 w-[90vw] lg:flex items-center justify-center lg:w-[80vw] xl:w-[70vw] 2xl:w-[60vw]" }, _attrs))}>`);
    _push(serverRenderer.exports.ssrRenderComponent(LoginCard, null, null, _parent));
    _push(`</div>`);
  };
}
const _sfc_main$H = /* @__PURE__ */ vue_cjs_prod.defineComponent(__spreadProps(__spreadValues({}, __default__$b), {
  __ssrInlineRender: true,
  setup: setup$b
}));
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/login/index.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const index$8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$H
});
const _sfc_main$G = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    currentDate: null,
    selectedDate: null
  },
  emits: ["dateSelected"],
  setup(__props, { emit }) {
    const props = __props;
    dayjs().format();
    const selectedMonth = vue_cjs_prod.computed(() => {
      return selectedDate.value.format("MMMM YYYY");
    });
    const { currentDate, selectedDate } = vue_cjs_prod.toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "flex items-center m-auto" }, _attrs))}><button aria-label="calendar backward" class="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="15 6 9 12 15 18"></polyline></svg></button><span tabindex="0" class="focus:outline-none text-base font-bold dark:text-gray-100 text-green-light">${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(selectedMonth))}</span><button aria-label="calendar forward" class="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="9 6 15 12 9 18"></polyline></svg></button></div>`);
    };
  }
});
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/global/Calendar/CalendarDateSelector.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const CalendarDateSelector = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$G
});
const _sfc_main$F = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    day: null,
    isToday: null,
    hasLessons: null
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const { day, isToday, hasLessons } = vue_cjs_prod.toRefs(props);
    const getLessonClass = vue_cjs_prod.computed(() => {
      if (hasLessons.value) {
        if (hasLessons.value.length > 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    });
    const label = vue_cjs_prod.computed(() => {
      if (day.value != null) {
        return dayjs(day.value.date).format("D");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><div class="px-2 py-2 cursor-pointer flex w-full justify-center"><p class="${serverRenderer.exports.ssrRenderClass([{
        "focus:outline-none": vue_cjs_prod.unref(isToday) || vue_cjs_prod.unref(getLessonClass),
        "focus:ring-2": vue_cjs_prod.unref(isToday) || vue_cjs_prod.unref(getLessonClass),
        "focus:ring-offset-2": vue_cjs_prod.unref(isToday) || vue_cjs_prod.unref(getLessonClass),
        "focus:ring-indigo-700": vue_cjs_prod.unref(isToday),
        "focus:bg-indigo-500": vue_cjs_prod.unref(isToday),
        "hover:bg-indigo-500": vue_cjs_prod.unref(isToday),
        "text-base": vue_cjs_prod.unref(isToday) || vue_cjs_prod.unref(getLessonClass),
        "w-8": vue_cjs_prod.unref(isToday) || vue_cjs_prod.unref(getLessonClass),
        "h-8": vue_cjs_prod.unref(isToday) || vue_cjs_prod.unref(getLessonClass),
        "flex": vue_cjs_prod.unref(isToday) || vue_cjs_prod.unref(getLessonClass),
        "items-center": vue_cjs_prod.unref(isToday) || vue_cjs_prod.unref(getLessonClass),
        "justify-center": vue_cjs_prod.unref(isToday) || vue_cjs_prod.unref(getLessonClass),
        "font-medium": vue_cjs_prod.unref(isToday) || vue_cjs_prod.unref(getLessonClass),
        "text-white": vue_cjs_prod.unref(isToday) || vue_cjs_prod.unref(getLessonClass),
        "bg-indigo-700": vue_cjs_prod.unref(isToday),
        "rounded-full": vue_cjs_prod.unref(isToday) || vue_cjs_prod.unref(getLessonClass),
        "bg-green-light": vue_cjs_prod.unref(getLessonClass)
      }, "text-base text-gray-500 dark:text-gray-100 font-medium"])}">${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(label))}</p></div></div>`);
    };
  }
});
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/global/Calendar/CalendarMonthDayItem.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const CalendarMonthDayItem = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$F
});
const _sfc_main$E = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const weekdays = vue_cjs_prod.computed(() => {
      return WEEKDAYS;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<thead${serverRenderer.exports.ssrRenderAttrs(_attrs)}><tr><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(weekdays), (weekday2) => {
        _push(`<th class="w-8"><div class="w-full flex justify-center"><p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">${serverRenderer.exports.ssrInterpolate(weekday2)}</p></div></th>`);
      });
      _push(`<!--]--></tr></thead>`);
    };
  }
});
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/global/Calendar/CalendarWeekdays.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const CalendarWeekdays = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$E
});
const _sfc_main$D = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    lessons: null
  },
  emits: ["selectEvent"],
  setup(__props, { emit }) {
    const props = __props;
    const { lessons: lessons2 } = vue_cjs_prod.toRefs(props);
    dayjs.extend(weekday);
    dayjs.extend(weekOfYear);
    const selectedDate = vue_cjs_prod.ref(dayjs());
    const counter = vue_cjs_prod.ref(0);
    vue_cjs_prod.ref([]);
    const index2 = [
      [0, 1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12, 13],
      [14, 15, 16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25, 26, 27],
      [28, 29, 30, 31, 32, 33, 34]
    ];
    vue_cjs_prod.computed(() => {
      debugger;
      return counter.value;
    });
    const numberOfDaysInMonth = vue_cjs_prod.computed(() => {
      return dayjs(selectedDate.value).daysInMonth();
    });
    const days = vue_cjs_prod.computed(() => {
      return [
        ...previousMonthDays.value,
        ...currentMonthDays.value,
        ...nextMonthDays.value
      ];
    });
    const today = vue_cjs_prod.computed(() => {
      return dayjs().format("YYYY-MM-DD");
    });
    const month = vue_cjs_prod.computed(() => {
      return Number(selectedDate.value.format("M"));
    });
    const year = vue_cjs_prod.computed(() => {
      return Number(selectedDate.value.format("YYYY"));
    });
    const currentMonthDays = vue_cjs_prod.computed(() => {
      return [...Array(numberOfDaysInMonth.value)].map((day, index22) => {
        debugger;
        let date = dayjs(`${year.value}-${month.value}-${index22 + 1}`).format("YYYY-MM-DD");
        let matchLesson = lessons2.value.filter((obj) => {
          return dayjs(obj.custom_deadline_date).format("YYYY-MM-DD") === date;
        });
        return {
          date: dayjs(`${year.value}-${month.value}-${index22 + 1}`).format("YYYY-MM-DD"),
          isCurrentMonth: true,
          hasLessons: matchLesson != null ? matchLesson : false
        };
      });
    });
    const previousMonthDays = vue_cjs_prod.computed(() => {
      if (currentMonthDays.value[0]) {
        const firstDayOfTheMonthWeekday = getWeekday(currentMonthDays.value[0].date);
        const previousMonth = dayjs(`${year.value}-${month.value}-01`).subtract(1, "month");
        const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday ? firstDayOfTheMonthWeekday - 1 : 6;
        const previousMonthLastMondayDayOfMonth = dayjs(currentMonthDays.value[0].date).subtract(visibleNumberOfDaysFromPreviousMonth, "day").date();
        return [...Array(visibleNumberOfDaysFromPreviousMonth)].map((day, index22) => {
          return {
            date: dayjs(`${previousMonth.year()}-${previousMonth.month() + 1}-${previousMonthLastMondayDayOfMonth + index22}`).format("YYYY-MM-DD"),
            isCurrentMonth: false,
            hasLessons: false
          };
        });
      } else {
        return [];
      }
    });
    const nextMonthDays = vue_cjs_prod.computed(() => {
      const lastDayOfTheMonthWeekday = getWeekday(`${year.value}-${month.value}-${currentMonthDays.value.length}`);
      const nextMonth = dayjs(`${year.value}-${month.value}-01`).add(1, "month");
      const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday ? 7 - lastDayOfTheMonthWeekday : lastDayOfTheMonthWeekday;
      debugger;
      return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index22) => {
        return {
          date: dayjs(`${nextMonth.year()}-${nextMonth.month() + 1}-${index22 + 1}`).format("YYYY-MM-DD"),
          isCurrentMonth: false,
          hasLessons: false
        };
      });
    });
    const getWeekday = (date) => {
      return dayjs(date).weekday();
    };
    vue_cjs_prod.onMounted(() => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><body class="bg-gray-200 2xl:min-h-screen min-h-[50%] dark:bg-gray-900"><div class="flex items-center justify-center py-8 px-4"><div class="max-w-3xl w-full shadow-lg rounded-[25px]"><div class="dark:bg-gray-800 bg-white rounded-[25px]"><div class="py-8 px-4 flex items-center justify-between bg-green-default rounded-t-[25px]">`);
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$G, {
        "current-date": vue_cjs_prod.unref(today),
        "selected-date": selectedDate.value
      }, null, _parent));
      _push(`</div><div class="flex items-center justify-between overflow-x-auto padding p-4"><table class="w-full">`);
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$E, null, null, _parent));
      _push(`<tbody><!--[-->`);
      serverRenderer.exports.ssrRenderList(5, (week) => {
        _push(`<tr><!--[-->`);
        serverRenderer.exports.ssrRenderList(7, (weekDay) => {
          var _a2, _b, _c, _d;
          _push(`<td class="${serverRenderer.exports.ssrRenderClass([{
            "bg-grayOther-400": !((_a2 = vue_cjs_prod.unref(days)[index2[week - 1][weekDay - 1]]) == null ? void 0 : _a2.isCurrentMonth),
            "text-neutral-500": !((_b = vue_cjs_prod.unref(days)[index2[week - 1][weekDay - 1]]) == null ? void 0 : _b.isCurrentMonth)
          }, "w-8 justify-center"])}">`);
          _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$F, {
            day: vue_cjs_prod.unref(days)[index2[week - 1][weekDay - 1]],
            "is-today": ((_c = vue_cjs_prod.unref(days)[index2[week - 1][weekDay - 1]]) == null ? void 0 : _c.date) === vue_cjs_prod.unref(today),
            "has-lessons": (_d = vue_cjs_prod.unref(days)[index2[week - 1][weekDay - 1]]) == null ? void 0 : _d.hasLessons
          }, null, _parent));
          _push(`</td>`);
        });
        _push(`<!--]--></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div></div></body></div>`);
    };
  }
});
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/global/Calendar/CalendarMonth.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const CalendarMonth = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$D
});
const _hoisted_1$a = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$a = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M16.419 2.603A.694.694 0 0 0 15.733 2a.695.695 0 0 0-.693.698v.771H8.968v-.771l-.006-.095A.694.694 0 0 0 8.276 2a.695.695 0 0 0-.692.698v.788C4.747 3.682 3 5.52 3 8.486v8.418C3 20.087 4.958 22 8.096 22h7.808C19.045 22 21 20.12 21 16.974V8.486c.009-2.967-1.732-4.805-4.575-5v-.788l-.006-.095ZM15.04 4.864v.895l.007.095c.045.34.335.603.686.603a.695.695 0 0 0 .692-.698v-.874c2.069.172 3.197 1.418 3.19 3.599v.404H4.385v-.402c0-2.18 1.134-3.428 3.199-3.6v.873l.006.095c.046.34.335.603.686.603a.695.695 0 0 0 .692-.698v-.895h6.072ZM4.385 10.283v6.621c0 2.403 1.329 3.7 3.711 3.7h7.808c2.39 0 3.711-1.27 3.711-3.63v-6.691H4.385ZM16.8 13.218a.695.695 0 0 0-.692-.697l-.103.006a.696.696 0 0 0-.598.691c0 .386.31.698.7.698l.095-.006a.696.696 0 0 0 .598-.692Zm-4.788-.697c.382 0 .692.312.692.697 0 .354-.26.645-.598.692l-.094.006c-.391 0-.701-.312-.701-.698 0-.353.26-.645.598-.691l.103-.006Zm-3.413.697a.695.695 0 0 0-.692-.697l-.102.006a.696.696 0 0 0-.599.691c0 .386.31.698.693.698l.102-.006a.696.696 0 0 0 .598-.692Zm7.509 2.918c.382 0 .692.312.692.698 0 .353-.26.645-.598.691l-.094.006c-.391 0-.701-.312-.701-.697 0-.354.26-.645.598-.692l.103-.006Zm-3.404.698a.695.695 0 0 0-.692-.698l-.103.006a.696.696 0 0 0-.598.692c0 .385.31.697.7.697l.095-.006a.696.696 0 0 0 .598-.691Zm-4.797-.698c.382 0 .692.312.692.698 0 .353-.26.645-.598.691l-.102.006a.695.695 0 0 1-.693-.697c0-.354.26-.645.599-.692l.102-.006Z",
  fill: "#092231"
}, null, -1);
const _hoisted_3$a = [
  _hoisted_2$a
];
function render$a(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$a, _hoisted_3$a);
}
const IconCalendar = { render: render$a };
const _sfc_main$C = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    event: null
  },
  setup(__props) {
    const props = __props;
    const { event } = vue_cjs_prod.toRefs(props);
    vueRouter_cjs_prod.useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = vue_cjs_prod.resolveComponent("NuxtLink");
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: `/my-teams/event/${vue_cjs_prod.unref(event).id}`
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative grid grid-cols-1 rounded-[2.5rem] bg-white h-32 shadow-md mt-16 pl-[2rem] pt-[1rem] pr-[1rem]"${_scopeId}><div class="flex"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconCalendar), null, null, _parent2, _scopeId));
            _push2(`<div class="w-[50vw] lg:w-[15vw] ml-[4px]"${_scopeId}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(toFullDate)(vue_cjs_prod.unref(event).custom_create_date))}</div><svg class="h-8 w-8 text-black-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"${_scopeId}></path></svg></div><div${_scopeId}><p class="font-bold"${_scopeId}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(event).name)}</p></div><div${_scopeId}><p${_scopeId}>Location: ${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(event).custom_class_id)}</p></div></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "relative grid grid-cols-1 rounded-[2.5rem] bg-white h-32 shadow-md mt-16 pl-[2rem] pt-[1rem] pr-[1rem]" }, [
                vue_cjs_prod.createVNode("div", { class: "flex" }, [
                  vue_cjs_prod.createVNode(vue_cjs_prod.unref(IconCalendar)),
                  vue_cjs_prod.createVNode("div", { class: "w-[50vw] lg:w-[15vw] ml-[4px]" }, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(toFullDate)(vue_cjs_prod.unref(event).custom_create_date)), 1),
                  (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                    class: "h-8 w-8 text-black-500",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    vue_cjs_prod.createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M14 5l7 7m0 0l-7 7m7-7H3"
                    })
                  ]))
                ]),
                vue_cjs_prod.createVNode("div", null, [
                  vue_cjs_prod.createVNode("p", { class: "font-bold" }, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(event).name), 1)
                ]),
                vue_cjs_prod.createVNode("div", null, [
                  vue_cjs_prod.createVNode("p", null, "Location: " + vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(event).custom_class_id), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/my-[teams]/calendar/components/EventCard.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const EventCard$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$C
});
const __default__$a = {
  layout: "teams"
};
function setup$a(__props) {
  const { state: lessonsState, load: loadLessons } = useLesssonsInject();
  const route = vueRouter_cjs_prod.useRoute();
  const getCalendar = vue_cjs_prod.computed(() => {
    if (lessonsState.value.data) {
      return true;
    } else {
      return false;
    }
  });
  const selectDayLessons = vue_cjs_prod.ref([]);
  const getEvents = vue_cjs_prod.computed(() => {
    return selectDayLessons.value;
  });
  vue_cjs_prod.onMounted(() => {
    debugger;
    loadLessons({
      id: parseInt(route.params.id)
    });
  });
  return (_ctx, _push, _parent, _attrs) => {
    _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "col-start-2 xl:flex 2xl:flex" }, _attrs))}><div class="grid grid-cols-1 w-[90vw] xl:w-[50vw] 2xl:w-48w">`);
    _push(serverRenderer.exports.ssrRenderComponent(PageTitle, null, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconBack), { class: "mr-3 my-auto" }, null, _parent2, _scopeId));
          _push2(` Calendar `);
        } else {
          return [
            vue_cjs_prod.createVNode(vue_cjs_prod.unref(IconBack), {
              onClick: ($event) => _ctx.$router.go(-1),
              class: "mr-3 my-auto"
            }, null, 8, ["onClick"]),
            vue_cjs_prod.createTextVNode(" Calendar ")
          ];
        }
      }),
      _: 1
    }, _parent));
    if (vue_cjs_prod.unref(getCalendar)) {
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$D, {
        lessons: vue_cjs_prod.unref(lessonsState).data
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="grid grid-cols-1 mt-[4vh] h-[10vh] xl:w-[25vw] 2xl:w-[20vw] w-[80vw]"><div>Event:</div><div class="h-screen lg:h-[50vh] 2xl:h-[50vh] lg:overflow-y-auto 2xl:overflow-y-auto"><!--[-->`);
    serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(getEvents), (event) => {
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$C, {
        key: event.id,
        event
      }, null, _parent));
    });
    _push(`<!--]--></div></div></div>`);
  };
}
const _sfc_main$B = /* @__PURE__ */ vue_cjs_prod.defineComponent(__spreadProps(__spreadValues({}, __default__$a), {
  __ssrInlineRender: true,
  setup: setup$a
}));
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/my-[teams]/calendar/[id].vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const _id_$6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$B
});
const _sfc_main$A = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>calendar</div>`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/my-[teams]/calendar/index.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const index$6 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$1]]);
const index$7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index$6
});
const _hoisted_1$9 = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$9 = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  d: "M16.02 10.913a3.297 3.297 0 1 0 0-6.594M17.536 14.496a10.9 10.9 0 0 1 1.617.233c.74.147 1.63.45 1.945 1.113.202.425.202.92 0 1.345-.315.663-1.206.966-1.945 1.118",
  stroke: "#092231",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$9 = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  "clip-rule": "evenodd",
  d: "M9.591 15.206c3.69 0 6.842.56 6.842 2.792 0 2.234-3.132 2.812-6.842 2.812-3.69 0-6.84-.558-6.84-2.792s3.13-2.812 6.84-2.812ZM9.591 12.019a4.369 4.369 0 0 1-4.384-4.385A4.368 4.368 0 0 1 9.591 3.25a4.37 4.37 0 0 1 4.385 4.384 4.37 4.37 0 0 1-4.385 4.385Z",
  stroke: "#092231",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$7 = [
  _hoisted_2$9,
  _hoisted_3$9
];
function render$9(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$9, _hoisted_4$7);
}
const IconGroup = { render: render$9 };
const _sfc_main$z = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    course: null
  },
  emits: ["click"],
  setup(__props) {
    vueRouter_cjs_prod.useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "relative container grid grid-cols-1 rounded-[25px] bg-white w-[16rem] h-[34vh] 2xl:w-112 2xl:h-112 shadow-md" }, _attrs))}><div class="absolute h-3/6 top-0 w-[16rem] 2xl:w-112"><img class="w-full h-full rounded-t-[25px] object-cover mb-3" alt="abc"${serverRenderer.exports.ssrRenderAttr("src", (_b = (_a2 = __props.course) == null ? void 0 : _a2.course) == null ? void 0 : _b.attachment.url)}></div><div class="absolute h-3/6 2xl:top-2/3 left-4 top-[58%]"><p class="font-bold my-2 text-sm 2xl:text-lg">${serverRenderer.exports.ssrInterpolate((_c = __props.course) == null ? void 0 : _c.name)}</p><div class="container flex"><!--[-->`);
      serverRenderer.exports.ssrRenderList((_e = (_d = __props.course) == null ? void 0 : _d.course) == null ? void 0 : _e.channelChannelTags, (tag) => {
        _push(`<div class="text-sm text-gray-600 mb-1 my-1"><div class="mr-1.5 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-green-200 text-black-700">${serverRenderer.exports.ssrInterpolate(tag.tag.name)}</div></div>`);
      });
      _push(`<!--]--></div><div class="flex text-xs 2xl:my-2">`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconGroup), null, null, _parent));
      _push(` ${serverRenderer.exports.ssrInterpolate((_h = (_g = (_f = __props.course) == null ? void 0 : _f.employee) == null ? void 0 : _g.company) == null ? void 0 : _h.name)}</div><div class="flex text-xs 2xl:my-2">`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconCalendar$1), null, null, _parent));
      _push(` ${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(toFullDate)((_i = __props.course) == null ? void 0 : _i.custom_start_date))}- ${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(toFullDate)((_j = __props.course) == null ? void 0 : _j.custom_end_date))}</div></div></div>`);
    };
  }
});
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/my-[teams]/components/CourseCard.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const CourseCard = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$z
});
const _hoisted_1$8 = {
  width: "45",
  height: "45",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$8 = /* @__PURE__ */ vue_cjs_prod.createElementVNode("rect", {
  width: "45",
  height: "45",
  rx: "22.5",
  fill: "#E6E7EB"
}, null, -1);
const _hoisted_3$8 = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M23.004 12c-2.934 0-5.312 2.389-5.312 5.335 0 2.947 2.378 5.335 5.312 5.335s5.313-2.388 5.313-5.335c0-2.946-2.379-5.335-5.313-5.335Zm0 1.448a3.88 3.88 0 0 1 3.871 3.887 3.88 3.88 0 0 1-3.87 3.888 3.88 3.88 0 0 1-3.872-3.888 3.88 3.88 0 0 1 3.871-3.887ZM20.83 24.82a16.72 16.72 0 0 0-2.34.331c-1.496.308-2.693.924-3.203 1.948a2.93 2.93 0 0 0-.007 2.515c.49 1.012 1.548 1.585 2.976 1.902l.256.053c.755.17 1.54.285 2.332.339.068.02.229.038.404.047l.144.006.284.002c1.138.062 2.317.044 3.492-.056a15.658 15.658 0 0 0 1.88-.244l.467-.097c1.543-.305 2.698-.883 3.204-1.95a2.927 2.927 0 0 0 0-2.504c-.505-1.065-1.645-1.639-3.216-1.962a16.926 16.926 0 0 0-1.872-.291l-.461-.04a24.685 24.685 0 0 0-4.34 0Zm4.214 1.442.012.001c.724.05 1.443.152 2.153.304 1.166.24 1.958.639 2.208 1.167.189.398.189.86 0 1.26-.234.493-.945.874-1.973 1.107l-.224.048c-.724.161-1.44.265-2.162.315a24.06 24.06 0 0 1-3.343.052l-.394-.007a1.94 1.94 0 0 1-.287-.033 15.522 15.522 0 0 1-1.874-.249l-.352-.074c-1.17-.23-1.969-.63-2.228-1.165a1.474 1.474 0 0 1 .001-1.251c.252-.506 1.098-.94 2.205-1.169a15.389 15.389 0 0 1 2.157-.305 23.304 23.304 0 0 1 4.1-.001Z",
  fill: "#A1A4B1"
}, null, -1);
const _hoisted_4$6 = [
  _hoisted_2$8,
  _hoisted_3$8
];
function render$8(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$8, _hoisted_4$6);
}
const AvatarRound = { render: render$8 };
const _sfc_main$y = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    course: null
  },
  setup(__props) {
    vueRouter_cjs_prod.useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
      const _component_NuxtLink = vue_cjs_prod.resolveComponent("NuxtLink");
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "layout__height relative grid grid-cols-1 rounded-[25px] bg-white w-[96%] h-[45vh] 2xl:h-112 shadow-md p-4 mb-[10rem]" }, _attrs))}><div><div class="font-bold">Class Description:</div><div class="p-[2rem] h-32 overflow-y-auto"><ul class="list-[unset]"><li>StartDate: ${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(toFullDate)((_a2 = __props.course) == null ? void 0 : _a2.custom_start_date))}</li><li>EndDate: ${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(toFullDate)((_b = __props.course) == null ? void 0 : _b.custom_end_date))}</li><li>${serverRenderer.exports.ssrInterpolate((_d = (_c = __props.course) == null ? void 0 : _c.course) == null ? void 0 : _d.description)}</li></ul></div><hr class="border-t-1 border-t-grayOther-300"><div class="font-bold">Coach Icons:</div><div class="flex"><img class="rounded-[50%] ml-2.5 w-12 border-black border-solid border-2"${serverRenderer.exports.ssrRenderAttr("src", (_f = (_e = __props.course) == null ? void 0 : _e.employee) == null ? void 0 : _f.attachment.url)}>`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(AvatarRound), { class: "ml-2.5" }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(AvatarRound), { class: "ml-2.5" }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(AvatarRound), { class: "ml-2.5" }, null, _parent));
      _push(`</div><div class="flex absolute bottom-[2rem] left-1/2 -translate-x-2/4 w-full">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: `/my-teams/video/${(_g = __props.course) == null ? void 0 : _g.course.id}`,
        class: "w-[30%] m-2.5"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="border-2 border-black rounded-full h-12 w-full font-bold"${_scopeId}> Video </button>`);
          } else {
            return [
              vue_cjs_prod.createVNode("button", { class: "border-2 border-black rounded-full h-12 w-full font-bold" }, " Video ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: `/my-teams/calendar/${(_h = __props.course) == null ? void 0 : _h.id}`,
        class: "w-[30%] m-2.5"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="border-2 border-black rounded-full h-12 w-full font-bold"${_scopeId}> Calendar </button>`);
          } else {
            return [
              vue_cjs_prod.createVNode("button", { class: "border-2 border-black rounded-full h-12 w-full font-bold" }, " Calendar ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: `/my-teams/video/${(_i = __props.course) == null ? void 0 : _i.id}`,
        class: "w-[30%] m-2.5"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="border-2 border-black rounded-full h-12 w-full font-bold"${_scopeId}> Payment </button>`);
          } else {
            return [
              vue_cjs_prod.createVNode("button", { class: "border-2 border-black rounded-full h-12 w-full font-bold" }, " Payment ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/my-[teams]/components/DescriptionCard.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const DescriptionCard = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$y
});
const _sfc_main$x = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    course: null
  },
  setup(__props) {
    vueRouter_cjs_prod.useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "relative grid grid-cols-1 rounded-[25px] bg-green-default w-[96%] 2xl:h-40 h-[8rem] shadow-md p-8 mb-[3rem] mt-[2rem]" }, _attrs))}><div class="text-green-light">Notice Board:</div><div class="text-white">${serverRenderer.exports.ssrInterpolate((_a2 = __props.course) == null ? void 0 : _a2.name)}</div></div>`);
    };
  }
});
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/my-[teams]/components/NoticeCard.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const NoticeCard = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$x
});
const _sfc_main$w = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    vueRouter_cjs_prod.useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "pt-2 relative mx-auto text-gray-600 inline-block w-full 2xl:w-[29vw]" }, _attrs))}><button type="submit" class="absolute left-[3px] top-0 mt-5 mr-4"><svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="${serverRenderer.exports.ssrRenderStyle({ "enable-background": "new 0 0 56.966 56.966" })}" xml:space="preserve" width="512px" height="512px"><path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path></svg></button><input class="bg-white h-10 px-5 pr-16 rounded-full text-sm focus:outline-none w-full 2xl:w-[29vw]" type="search" name="search" placeholder="Search"></div>`);
    };
  }
});
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/my-[teams]/components/SearchBar.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const SearchBar = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$w
});
const _sfc_main$v = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    courses: null,
    state: null
  },
  setup(__props) {
    let currentCourse = vue_cjs_prod.ref({});
    const getCurrentCourse = vue_cjs_prod.computed(() => {
      return currentCourse.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "col-start-2 flex h-[77vh]" }, _attrs))}><div class="grid grid-rows-[50px] grid-cols-1 w-[42vw] 2xl:w-[48w] ml-[3vw]">`);
      _push(serverRenderer.exports.ssrRenderComponent(PageTitle, null, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`My Team`);
          } else {
            return [
              vue_cjs_prod.createTextVNode("My Team")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.state.status != "success") {
        _push(`<div>No record</div>`);
      } else {
        _push(`<div><!--[-->`);
        serverRenderer.exports.ssrRenderList(Math.ceil(__props.courses.length / 2), (rowIdx) => {
          _push(`<div class="flex"><!--[-->`);
          serverRenderer.exports.ssrRenderList(__props.courses.slice(2 * (rowIdx - 1), 2 * rowIdx), (course) => {
            _push(`<div class="one-third column">`);
            _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$z, {
              class: "ml-[1rem] mt-[0.4rem] mb-[1rem] 2xl:m-9",
              course
            }, null, _parent));
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div><div class="grid grid-cols-1 w-[29vw] mr-[2vw]"><div>`);
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$w, null, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$x, { course: vue_cjs_prod.unref(getCurrentCourse) }, null, _parent));
      _push(`</div>`);
      if (vue_cjs_prod.unref(checkIfEmpty)(vue_cjs_prod.unref(getCurrentCourse))) {
        _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$y, { course: vue_cjs_prod.unref(getCurrentCourse) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/my-[teams]/components/DesktopView.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const DesktopView = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$v
});
const _sfc_main$u = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    courses: null,
    state: null
  },
  setup(__props) {
    let currentCourse = vue_cjs_prod.ref({});
    const getCurrentCourse = vue_cjs_prod.computed(() => {
      return currentCourse.value;
    });
    const courseClicked = (course) => {
      debugger;
      currentCourse.value = course;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="col-start-2 flex"><div class="grid grid-cols-1 w-[80vw] 2xl:w-[48w] ml-[3vw]">`);
      _push(serverRenderer.exports.ssrRenderComponent(PageTitle, null, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`My Team`);
          } else {
            return [
              vue_cjs_prod.createTextVNode("My Team")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$w, null, null, _parent));
      if (__props.state.status != "success") {
        _push(`<div> No record </div>`);
      } else {
        _push(`<div>`);
        _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(VueHorizontal), {
          class: "w-screen lg:w-[80vw] xl:w-[70vw] 2xl:w-[60vw]",
          responsive: ""
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              serverRenderer.exports.ssrRenderList(__props.courses, (course) => {
                _push2(serverRenderer.exports.ssrRenderComponent(_sfc_main$z, {
                  class: "m-9",
                  key: course.id,
                  course
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(__props.courses, (course) => {
                  return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_sfc_main$z, {
                    class: "m-9",
                    key: course.id,
                    course,
                    onClick: courseClicked
                  }, null, 8, ["course"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></div><div class="grid grid-cols-1 w-[92vw] 2xl:w-[29vw] mr-[2vw]">`);
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$x, { course: vue_cjs_prod.unref(getCurrentCourse) }, null, _parent));
      if (vue_cjs_prod.unref(checkIfEmpty)(vue_cjs_prod.unref(getCurrentCourse))) {
        _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$y, { course: vue_cjs_prod.unref(getCurrentCourse) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/my-[teams]/components/MobileView.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const MobileView = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$u
});
const _hoisted_1$7 = {
  width: "60",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$7 = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  d: "M19.75 11.726h-15M13.7 5.701l6.05 6.024-6.05 6.025",
  stroke: "#092231",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$7
];
function render$7(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$7, _hoisted_3$7);
}
const IconGo = { render: render$7 };
const _sfc_main$t = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    video: null
  },
  setup(__props) {
    const props = __props;
    const { video: video2 } = vue_cjs_prod.toRefs(props);
    vueRouter_cjs_prod.useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "flex" }, _attrs))}><img${serverRenderer.exports.ssrRenderAttr("src", vue_cjs_prod.unref(video2).thumbnail)} alt="thumbnail" class="h-40 p-3.5" width="200"><div class="w-[60%] m-auto"><p class="font-bold flex">${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(video2).name)}</p></div>`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconGo), { class: "m-auto" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/my-[teams]/event/components/VideoRow.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const VideoRow$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$t
});
const _sfc_main$s = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    video: null
  },
  setup(__props) {
    const props = __props;
    const { video: video2 } = vue_cjs_prod.toRefs(props);
    vueRouter_cjs_prod.useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "mt-[3rem] bg-green-default h-12 rounded-t-lg border-b-4" }, _attrs))}><p class="text-green-light text-center text-3xl">${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(video2).name)}</p></div>`);
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/my-[teams]/event/components/VideoSectionTitle.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const VideoSectionTitle = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$s
});
const __default__$9 = {
  layout: "teams"
};
function setup$9(__props) {
  const { state: lessonState, load: loadLesson } = useLessonInject();
  const route = vueRouter_cjs_prod.useRoute();
  vue_cjs_prod.ref(1);
  let maxVisibleButtons = vue_cjs_prod.ref(3);
  let totalPages = vue_cjs_prod.ref(4);
  let total = vue_cjs_prod.ref(40);
  let perPage = vue_cjs_prod.ref(4);
  let currentPage = vue_cjs_prod.ref(1);
  let hasMorePages = vue_cjs_prod.ref(true);
  const getTotalPages = vue_cjs_prod.computed(() => {
    var _a2;
    if (lessonState.value.status === "success") {
      return totalPages.value = Math.ceil(((_a2 = lessonState.value.data) == null ? void 0 : _a2.videos.length) / 4);
    } else {
      return totalPages.value;
    }
  });
  const getTotal = vue_cjs_prod.computed(() => {
    var _a2;
    if (lessonState.value.status === "success") {
      return total.value = (_a2 = lessonState.value.data) == null ? void 0 : _a2.videos.length;
    } else {
      return total.value;
    }
  });
  const getTmpVideosByPagination = vue_cjs_prod.computed(() => {
    var _a2;
    if (lessonState.value.status === "success") {
      return (_a2 = lessonState.value.data) == null ? void 0 : _a2.videos.slice((currentPage.value - 1) * perPage.value, currentPage.value * perPage.value);
    } else {
      return [];
    }
  });
  vue_cjs_prod.onMounted(() => {
    debugger;
    loadLesson({
      id: parseInt(route.params.id),
      skip: 1,
      pageSize: 4,
      filter: {}
    });
  });
  return (_ctx, _push, _parent, _attrs) => {
    const _component_NuxtLink = vue_cjs_prod.resolveComponent("NuxtLink");
    _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "col-start-2 flex" }, _attrs))}><div class="grid grid-cols-1 w-[80vw] lg:w-[73vw] m-auto">`);
    _push(serverRenderer.exports.ssrRenderComponent(PageTitle, null, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconBack), { class: "mr-3 my-auto" }, null, _parent2, _scopeId));
          _push2(` Event `);
        } else {
          return [
            vue_cjs_prod.createVNode(vue_cjs_prod.unref(IconBack), {
              class: "mr-3 my-auto",
              onClick: ($event) => _ctx.$router.go(-1)
            }, null, 8, ["onClick"]),
            vue_cjs_prod.createTextVNode(" Event ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<!--[-->`);
    serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(getTmpVideosByPagination), (video2) => {
      var _a2, _b;
      _push(`<div>`);
      if (video2.slide_type == "document" && !video2.url) {
        _push(`<div>`);
        _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$s, { video: video2 }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div>`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
          to: `/my-teams/exercise-${(_b = (_a2 = vue_cjs_prod.unref(lessonState)) == null ? void 0 : _a2.data) == null ? void 0 : _b.course.id}/${video2.id}`
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="bg-white rounded-lg"${_scopeId}>`);
              _push2(serverRenderer.exports.ssrRenderComponent(_sfc_main$t, { video: video2 }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                vue_cjs_prod.createVNode("div", { class: "bg-white rounded-lg" }, [
                  vue_cjs_prod.createVNode(_sfc_main$t, { video: video2 }, null, 8, ["video"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    });
    _push(`<!--]-->`);
    _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$M, {
      "total-pages": vue_cjs_prod.unref(getTotalPages),
      total: vue_cjs_prod.unref(getTotal),
      "per-page": vue_cjs_prod.unref(perPage),
      "current-page": vue_cjs_prod.unref(currentPage),
      maxVisibleButtons: vue_cjs_prod.unref(maxVisibleButtons),
      "has-more-pages": vue_cjs_prod.unref(hasMorePages)
    }, null, _parent));
    _push(`</div></div>`);
  };
}
const _sfc_main$r = /* @__PURE__ */ vue_cjs_prod.defineComponent(__spreadProps(__spreadValues({}, __default__$9), {
  __ssrInlineRender: true,
  setup: setup$9
}));
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/my-[teams]/event/[id].vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const _id_$5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$r
});
const _sfc_main$q = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    videos: null,
    title: null
  },
  setup(__props) {
    const props = __props;
    const { title, videos: videos2 } = vue_cjs_prod.toRefs(props);
    const route = vueRouter_cjs_prod.useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = vue_cjs_prod.resolveComponent("NuxtLink");
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "relative grid grid-cols-1 bg-white h-[62rem] rounded-lg shadow-md" }, _attrs))}><div class="bg-green-default h-12 rounded-t-lg border-b-4"><p class="text-green-light text-center text-3xl">${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(title))}</p></div><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(videos2), (video2) => {
        _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
          to: `/my-teams/exercise-${vue_cjs_prod.unref(route).params.id[0]}/4`,
          key: video2.id
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(serverRenderer.exports.ssrRenderComponent(_sfc_main$t, { video: video2 }, null, _parent2, _scopeId));
            } else {
              return [
                vue_cjs_prod.createVNode(_sfc_main$t, { video: video2 }, null, 8, ["video"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/my-[teams]/event/components/ExerciseCard.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const ExerciseCard$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$q
});
const _sfc_main$p = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    video: null
  },
  setup(__props) {
    const props = __props;
    const { video: video2 } = vue_cjs_prod.toRefs(props);
    vueRouter_cjs_prod.useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "relative container m-auto bg-white w-[90%] 2xl:w-[35rem] h-56 rounded-[1.5rem] shadow-md" }, _attrs))}><div class="bg-green-default h-12 rounded-t-[1.5rem] border-b-4"><p class="text-green-light text-center">${serverRenderer.exports.ssrInterpolate((_a2 = vue_cjs_prod.unref(video2)) == null ? void 0 : _a2.section)}</p></div><div class="flex h-40"><img${serverRenderer.exports.ssrRenderAttr("src", vue_cjs_prod.unref(video2).thumbnail)} alt="thumbnail" class="h-40 p-3.5" width="200"><div class="w-[60%] m-auto"><p class="font-bold flex">${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(video2).name)}</p></div>`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconGo), { class: "m-auto" }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/my-[teams]/exercise-[groupId]/components/ExerciseCard.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const ExerciseCard$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$p
});
const _hoisted_1$6 = {
  width: "126",
  height: "40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$6 = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  d: "M63.469 14.688c-2.592 0-4.336 1.28-4.336 3.312 0 3.968 5.968 2.736 5.968 4.848 0 .688-.624 1.072-1.664 1.072-1.184 0-2.816-.656-3.968-1.68l-1.008 2.064c1.264 1.072 3.104 1.776 4.944 1.776 2.48 0 4.384-1.184 4.384-3.376.016-4.032-5.952-2.88-5.952-4.944 0-.608.576-.912 1.424-.912.896 0 2.304.448 3.488 1.152l.976-2.096c-1.12-.736-2.688-1.216-4.256-1.216ZM74.504 26h2.416l-.016-5.616c-.016-1.936-1.344-3.088-3.648-3.088-1.504 0-2.608.352-3.888.992l.768 1.696c.896-.496 1.792-.752 2.56-.752 1.184 0 1.792.528 1.792 1.44v.16H72.12c-2.112.016-3.28.976-3.28 2.592 0 1.568 1.12 2.688 2.96 2.688 1.2 0 2.128-.4 2.704-1.12V26Zm-2.016-1.648c-.832 0-1.344-.432-1.344-1.088 0-.688.464-.976 1.408-.976h1.936v.768c-.144.736-.96 1.296-2 1.296ZM83.448 26l3.247-8.608h-2.448l-2.016 6.272-2.032-6.272-2.544.016L80.92 26h2.528Zm7.745-8.688c-2.624 0-4.433 1.76-4.433 4.416 0 2.608 1.744 4.368 4.496 4.368 1.552 0 2.817-.56 3.68-1.52l-1.296-1.312a3.052 3.052 0 0 1-2.175.912c-1.105 0-1.937-.64-2.225-1.728h6.177c.207-3.136-1.2-5.136-4.225-5.136Zm-2 3.68c.192-1.136.928-1.872 2.016-1.872 1.135 0 1.871.736 1.903 1.872h-3.92Z",
  fill: "#092231"
}, null, -1);
const _hoisted_3$6 = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  "clip-rule": "evenodd",
  d: "m40.665 26.632-5.932 3.25a.989.989 0 0 1-1.318-.395v0a1.045 1.045 0 0 1-.119-.466V14.622c0-2.745 1.877-3.844 4.577-3.844h6.343c2.618 0 4.577 1.025 4.577 3.661v14.582a.98.98 0 0 1-.98.979 1.08 1.08 0 0 1-.476-.119l-5.967-3.25a.741.741 0 0 0-.705 0Z",
  stroke: "#092231",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$5 = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  d: "M37.37 17.323h7.295",
  stroke: "#092231",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_5$4 = /* @__PURE__ */ vue_cjs_prod.createElementVNode("rect", {
  x: "1",
  y: "1",
  width: "124",
  height: "38",
  rx: "19",
  stroke: "#092231",
  "stroke-width": "2"
}, null, -1);
const _hoisted_6 = [
  _hoisted_2$6,
  _hoisted_3$6,
  _hoisted_4$5,
  _hoisted_5$4
];
function render$6(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$6, _hoisted_6);
}
const ButtonSave = { render: render$6 };
const _sfc_main$o = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    video: null
  },
  setup(__props) {
    const props = __props;
    const { video: video2 } = vue_cjs_prod.toRefs(props);
    vueRouter_cjs_prod.useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "relative bg-white lg:w-[40vw] xl:w-[40vw] 2xl:w-48w w-[87vw] lg:h-[16rem] xl:h-[16rem] h-[35rem] rounded-b-lg shadow-md mb-[8rem]" }, _attrs))}><div class="flex p-[1rem]"><p class="font-bold w-[57%] sm:w-[70%] lg:w-[66%] xl:w-[66%] 2xl:w-[80%]">${serverRenderer.exports.ssrInterpolate((_b = (_a2 = vue_cjs_prod.unref(video2)) == null ? void 0 : _a2.data) == null ? void 0 : _b.name)}</p>`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(ButtonSave), { class: "m-auto" }, null, _parent));
      _push(`</div><hr class="border-t-1 border-t-grayOther-300">`);
      serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/my-[teams]/exercise-[groupId]/components/CommentCard.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const CommentCard = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$o
});
const _hoisted_1$5 = {
  width: "81",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$5 = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  d: "M29.924 7.6V16h1.896v-2.4h1.668c2.136 0 3.36-1.128 3.36-3.084 0-1.86-1.224-2.916-3.36-2.916h-3.564Zm1.896 1.572h1.572c1.056 0 1.656.468 1.656 1.404 0 .96-.6 1.44-1.656 1.44H31.82V9.172Zm8.049.372H38.02V16h1.848v-3.108c0-1.092.816-1.8 2.136-1.68v-1.74c-.96.012-1.692.444-2.136 1.236V9.544Zm5.916-.06c-1.968 0-3.324 1.32-3.324 3.312 0 1.956 1.308 3.276 3.372 3.276 1.164 0 2.112-.42 2.76-1.14l-.972-.984a2.289 2.289 0 0 1-1.632.684c-.828 0-1.452-.48-1.668-1.296h4.632c.156-2.352-.9-3.852-3.168-3.852Zm-1.5 2.76c.144-.852.696-1.404 1.512-1.404.852 0 1.404.552 1.428 1.404h-2.94ZM53.382 16l2.436-6.456h-1.836l-1.512 4.704-1.524-4.704-1.908.012L51.486 16h1.896Zm4.172-9.324c-.588 0-.996.432-.996 1.032 0 .6.408 1.032.996 1.032.588 0 .996-.432.996-1.032 0-.6-.408-1.032-.996-1.032ZM58.478 16V9.544H56.63V16h1.848Zm4.69-6.516c-2.077 0-3.469 1.308-3.469 3.288 0 1.968 1.392 3.3 3.468 3.3 2.064 0 3.456-1.332 3.456-3.3 0-1.98-1.392-3.288-3.456-3.288Zm0 1.536c.947 0 1.607.72 1.607 1.776s-.66 1.776-1.608 1.776c-.96 0-1.608-.72-1.608-1.776s.648-1.776 1.608-1.776Zm10.809-1.476h-1.836v3.192c0 .936-.54 1.632-1.428 1.644-.744 0-1.212-.492-1.212-1.308V9.544h-1.848V13.6c0 1.524.9 2.472 2.328 2.472.972 0 1.716-.396 2.16-1.212V16h1.836V9.544Zm3.974-.084c-1.404 0-2.544.684-2.544 2.016 0 2.268 3.348 1.716 3.348 2.748 0 .348-.348.504-.816.504-.708 0-1.572-.288-2.244-.804l-.6 1.248c.732.588 1.752.9 2.796.9 1.464 0 2.628-.696 2.628-2.016.012-2.28-3.396-1.788-3.396-2.76 0-.336.312-.48.744-.48.54 0 1.26.228 1.968.624l.636-1.26a4.815 4.815 0 0 0-2.52-.72Z",
  fill: "#182722"
}, null, -1);
const _hoisted_3$5 = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  "clip-rule": "evenodd",
  d: "M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5Z",
  stroke: "#092231",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$4 = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  d: "M13.442 8.53 9.956 12l3.486 3.471",
  stroke: "#092231",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_5$3 = [
  _hoisted_2$5,
  _hoisted_3$5,
  _hoisted_4$4
];
function render$5(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$5, _hoisted_5$3);
}
const IconPrevious = { render: render$5 };
const _hoisted_1$4 = {
  width: "58",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4 = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  d: "M9.102 16V7.6h-1.8V13l-4.08-5.4H1.494V16h1.812v-5.388L7.374 16h1.728Zm4.585-6.516c-1.968 0-3.324 1.32-3.324 3.312 0 1.956 1.308 3.276 3.372 3.276 1.164 0 2.112-.42 2.76-1.14l-.972-.984a2.289 2.289 0 0 1-1.632.684c-.828 0-1.452-.48-1.668-1.296h4.632c.156-2.352-.9-3.852-3.168-3.852Zm-1.5 2.76c.144-.852.696-1.404 1.512-1.404.852 0 1.404.552 1.428 1.404h-2.94Zm8.177-.744-1.188-1.956h-2.112L19.14 12.7 16.908 16h2.04l1.416-2.112L21.66 16h2.124l-2.196-3.312 2.052-3.144h-2.016l-1.26 1.956Zm8.027 2.784c-.336.156-.624.24-.864.24-.396.012-.624-.204-.624-.744v-2.664h1.752V9.832h-1.752V8.056h-1.836v1.776h-.9v1.272h.9v2.988c0 1.332.876 1.992 2.028 1.992.6 0 1.2-.168 1.68-.444l-.384-1.356Z",
  fill: "#182722"
}, null, -1);
const _hoisted_3$4 = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  "clip-rule": "evenodd",
  d: "M46 21.25a9.25 9.25 0 1 0 0-18.5 9.25 9.25 0 0 0 0 18.5Z",
  stroke: "#092231",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$3 = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  d: "M44.558 15.47 48.044 12l-3.486-3.471",
  stroke: "#092231",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_5$2 = [
  _hoisted_2$4,
  _hoisted_3$4,
  _hoisted_4$3
];
function render$4(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$4, _hoisted_5$2);
}
const IconNext = { render: render$4 };
const _sfc_main$n = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  emits: ["click"],
  setup(__props, { emit }) {
    let tabTitle = [
      {
        id: 1,
        title: "Discussion"
      },
      {
        id: 2,
        title: "Video List"
      }
    ];
    let currentTab = vue_cjs_prod.ref(1);
    const isActiveTab = (tab) => {
      if (tab.id == currentTab.value) {
        return true;
      } else {
        return false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "border-b border-gray-200 dark:border-gray-700" }, _attrs))}><ul class="flex flex-wrap -mb-px"><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(tabTitle), (tab) => {
        _push(`<li class="mr-2"><a href="#" class="${serverRenderer.exports.ssrRenderClass([{
          "text-gray-500": !isActiveTab(tab),
          "text-green-light": isActiveTab(tab),
          "border-green-light": isActiveTab(tab),
          "dark:border-blue-500": isActiveTab(tab),
          "dark:text-blue-500": isActiveTab(tab),
          "active": isActiveTab(tab),
          "dark:text-gray-400": !isActiveTab(tab),
          "dark:hover:text-gray-300": !isActiveTab(tab),
          "hover:text-gray-600": !isActiveTab(tab),
          "hover:border-gray-300": !isActiveTab(tab),
          "border-transparent": !isActiveTab(tab)
        }, "inline-flex py-4 px-4 text-sm font-medium text-center rounded-t-lg border-b-2 group"])}">${serverRenderer.exports.ssrInterpolate(tab.title)}</a></li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/my-[teams]/exercise-[groupId]/components/Tab.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const Tab = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$n
});
const __default__$8 = {
  layout: "teams"
};
vue_cjs_prod.onMounted(() => {
  let tag = window.document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = window.document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});
function setup$8(__props) {
  const {
    state: videoState,
    state2: otherVideosState,
    load: loadVideo,
    load2: loadOtherVideos
  } = useVideoInject();
  useLessonInject();
  const route = vueRouter_cjs_prod.useRoute();
  const count = vue_cjs_prod.ref(0);
  const mobile = vue_cjs_prod.ref(false);
  const currentTab = vue_cjs_prod.ref(1);
  const getYoutubeUrl = vue_cjs_prod.computed(() => {
    var _a2;
    if (videoState.value.status === "success") {
      let result = (_a2 = videoState.value.data) == null ? void 0 : _a2.url.replace("https://youtu.be/", "https://www.youtube.com/embed/");
      return result;
    } else {
      return "";
    }
  });
  const getMobile = vue_cjs_prod.computed(() => {
    return mobile.value;
  });
  const getCurrentTab = vue_cjs_prod.computed(() => {
    return currentTab.value;
  });
  const getPrevVideo = () => {
    if (count.value > 0) {
      count.value--;
    }
  };
  const getNextVideo = () => {
    var _a2;
    debugger;
    if (otherVideosState.value.status === "success") {
      if (count.value < ((_a2 = otherVideosState.value.data) == null ? void 0 : _a2.length) - 1) {
        count.value++;
      }
    }
  };
  const changeTab = (tab) => {
    debugger;
    currentTab.value = tab.id;
  };
  vue_cjs_prod.onMounted(() => {
    mobile.value = isMobile();
    debugger;
    loadOtherVideos({
      id: parseInt(route.params.groupId),
      skip: 1,
      pageSize: 4,
      filter: {}
    });
    loadVideo({
      id: parseInt(route.params.id),
      skip: 1,
      pageSize: 4,
      filter: {}
    });
  });
  return (_ctx, _push, _parent, _attrs) => {
    const _component_NuxtLink = vue_cjs_prod.resolveComponent("NuxtLink");
    _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "col-start-2 grid" }, _attrs))}>`);
    _push(serverRenderer.exports.ssrRenderComponent(PageTitle, { class: "col-start-1 col-end-2 row-start-1 row-end-2" }, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconBack), { class: "mr-3 my-auto" }, null, _parent2, _scopeId));
          _push2(` Event Video `);
        } else {
          return [
            vue_cjs_prod.createVNode(vue_cjs_prod.unref(IconBack), {
              class: "mr-3 my-auto",
              onClick: ($event) => _ctx.$router.go(-1)
            }, null, 8, ["onClick"]),
            vue_cjs_prod.createTextVNode(" Event Video ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<div class="grid lg:w-[40vw] xl:w-[40vw] 2xl:w-48w w-[90vw] m-auto mt-10 row-start-2 row-end-3"><div id="player"></div><iframe id="existing-iframe-example" class="rounded-t-[25px] w-[87vw] lg:w-[40vw] xl:w-[40vw] 2xl:w-48w" allowfullscreen="1" width="640" height="360"${serverRenderer.exports.ssrRenderAttr("src", vue_cjs_prod.unref(getYoutubeUrl))} frameborder="0" style="${serverRenderer.exports.ssrRenderStyle({ "border": "solid 4px #37474f" })}"></iframe>`);
    _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$o, { video: vue_cjs_prod.unref(videoState) }, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          if (vue_cjs_prod.unref(getMobile)) {
            _push2(serverRenderer.exports.ssrRenderComponent(_sfc_main$n, null, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
          if (vue_cjs_prod.unref(getMobile) && vue_cjs_prod.unref(getCurrentTab) == 2) {
            _push2(`<div class="grid grid-cols-1 xl:w-[24vw] 2xl:w-[22vw] mt-10 col-start-2 row-start-2 row-end-3 h-[50%] overflow-y-auto"${_scopeId}>`);
            if (vue_cjs_prod.unref(otherVideosState).data) {
              _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
                to: `/my-teams/exercise-${vue_cjs_prod.unref(route).params.groupId[0]}/5`
              }, {
                default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b;
                  if (_push3) {
                    _push3(serverRenderer.exports.ssrRenderComponent(_sfc_main$p, {
                      video: (_a2 = vue_cjs_prod.unref(otherVideosState)) == null ? void 0 : _a2.data[count.value]
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      vue_cjs_prod.createVNode(_sfc_main$p, {
                        video: (_b = vue_cjs_prod.unref(otherVideosState)) == null ? void 0 : _b.data[count.value]
                      }, null, 8, ["video"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (vue_cjs_prod.unref(otherVideosState).data) {
              _push2(`<div class="m-auto"${_scopeId}>`);
              if (count.value != 0) {
                _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconPrevious), { class: "inline-block mr-40" }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (vue_cjs_prod.unref(otherVideosState).data.length - 1 > count.value) {
                _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconNext), { class: "inline-block" }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            vue_cjs_prod.unref(getMobile) ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_sfc_main$n, {
              key: 0,
              onClick: changeTab
            })) : vue_cjs_prod.createCommentVNode("", true),
            vue_cjs_prod.unref(getMobile) && vue_cjs_prod.unref(getCurrentTab) == 2 ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
              key: 1,
              class: "grid grid-cols-1 xl:w-[24vw] 2xl:w-[22vw] mt-10 col-start-2 row-start-2 row-end-3 h-[50%] overflow-y-auto"
            }, [
              vue_cjs_prod.unref(otherVideosState).data ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_NuxtLink, {
                key: 0,
                to: `/my-teams/exercise-${vue_cjs_prod.unref(route).params.groupId[0]}/5`
              }, {
                default: vue_cjs_prod.withCtx(() => {
                  var _a2;
                  return [
                    vue_cjs_prod.createVNode(_sfc_main$p, {
                      video: (_a2 = vue_cjs_prod.unref(otherVideosState)) == null ? void 0 : _a2.data[count.value]
                    }, null, 8, ["video"])
                  ];
                }),
                _: 1
              }, 8, ["to"])) : vue_cjs_prod.createCommentVNode("", true),
              vue_cjs_prod.unref(otherVideosState).data ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                key: 1,
                class: "m-auto"
              }, [
                count.value != 0 ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.unref(IconPrevious), {
                  key: 0,
                  onClick: getPrevVideo,
                  class: "inline-block mr-40"
                })) : vue_cjs_prod.createCommentVNode("", true),
                vue_cjs_prod.unref(otherVideosState).data.length - 1 > count.value ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.unref(IconNext), {
                  key: 1,
                  onClick: getNextVideo,
                  class: "inline-block"
                })) : vue_cjs_prod.createCommentVNode("", true)
              ])) : vue_cjs_prod.createCommentVNode("", true)
            ])) : vue_cjs_prod.createCommentVNode("", true)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
    if (!vue_cjs_prod.unref(getMobile)) {
      _push(`<div class="grid grid-cols-1 w-[22vw] xl:w-[31vw] mt-10 col-start-2 row-start-2 row-end-3 h-[20%]">`);
      if (vue_cjs_prod.unref(otherVideosState).data) {
        _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
          to: `/my-teams/exercise-${vue_cjs_prod.unref(route).params.groupId[0]}/5`
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b;
            if (_push2) {
              _push2(serverRenderer.exports.ssrRenderComponent(_sfc_main$p, {
                video: (_a2 = vue_cjs_prod.unref(otherVideosState)) == null ? void 0 : _a2.data[count.value]
              }, null, _parent2, _scopeId));
            } else {
              return [
                vue_cjs_prod.createVNode(_sfc_main$p, {
                  video: (_b = vue_cjs_prod.unref(otherVideosState)) == null ? void 0 : _b.data[count.value]
                }, null, 8, ["video"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (vue_cjs_prod.unref(otherVideosState).data) {
        _push(`<div class="m-auto">`);
        if (count.value != 0) {
          _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconPrevious), { class: "inline-block mr-40" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (vue_cjs_prod.unref(otherVideosState).data.length - 1 > count.value) {
          _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconNext), { class: "inline-block" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  };
}
const _sfc_main$m = /* @__PURE__ */ vue_cjs_prod.defineComponent(__spreadProps(__spreadValues({}, __default__$8), {
  __ssrInlineRender: true,
  setup: setup$8
}));
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/my-[teams]/exercise-[groupId]/[id].vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _id_$4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$m
});
const __default__$7 = {
  layout: "teams"
};
function setup$7(__props) {
  const { state: courseState, load: loadCourse } = useCoursesInject();
  let mobile = vue_cjs_prod.ref(false);
  let totalPages = vue_cjs_prod.ref(4);
  let total = vue_cjs_prod.ref(40);
  let perPage = vue_cjs_prod.ref(15);
  let currentPage = vue_cjs_prod.ref(1);
  let hasMorePages = vue_cjs_prod.ref(true);
  let maxVisibleButtons = vue_cjs_prod.ref(3);
  let email = vue_cjs_prod.ref("");
  const getTotalPages = vue_cjs_prod.computed(() => {
    var _a2;
    if (courseState.value.status === "success") {
      return totalPages.value = Math.ceil(((_a2 = courseState.value.data) == null ? void 0 : _a2.length) / 15);
    } else {
      return totalPages.value;
    }
  });
  const getTotal = vue_cjs_prod.computed(() => {
    var _a2;
    if (courseState.value.status === "success") {
      return total.value = (_a2 = courseState.value.data) == null ? void 0 : _a2.length;
    } else {
      return total.value;
    }
  });
  const getMobile = vue_cjs_prod.computed(() => {
    return mobile.value;
  });
  const getData = () => {
    loadCourse({
      skip: currentPage.value,
      pageSize: 4,
      filter: {},
      email: email.value
    });
  };
  vue_cjs_prod.onMounted(() => {
    mobile.value = isMobile();
    let user = sessionStorage.getItem("user");
    if (user) {
      const userObj = JSON.parse(user);
      email.value = userObj.email;
      getData();
    }
  });
  return (_ctx, _push, _parent, _attrs) => {
    _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "mb-[100px]" }, _attrs))}>`);
    if (!vue_cjs_prod.unref(getMobile)) {
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$v, {
        state: vue_cjs_prod.unref(courseState),
        courses: vue_cjs_prod.unref(courseState).data
      }, null, _parent));
    } else {
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$u, {
        courses: vue_cjs_prod.unref(courseState).data,
        state: vue_cjs_prod.unref(courseState)
      }, null, _parent));
    }
    if (vue_cjs_prod.unref(getMobile)) {
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$M, {
        class: "w-[91vw]",
        "total-pages": vue_cjs_prod.unref(getTotalPages),
        total: vue_cjs_prod.unref(getTotal),
        "per-page": vue_cjs_prod.unref(perPage),
        "current-page": vue_cjs_prod.unref(currentPage),
        maxVisibleButtons: vue_cjs_prod.unref(maxVisibleButtons),
        "has-more-pages": vue_cjs_prod.unref(hasMorePages)
      }, null, _parent));
    } else {
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$M, {
        "total-pages": vue_cjs_prod.unref(getTotalPages),
        total: vue_cjs_prod.unref(getTotal),
        "per-page": vue_cjs_prod.unref(perPage),
        "current-page": vue_cjs_prod.unref(currentPage),
        maxVisibleButtons: vue_cjs_prod.unref(maxVisibleButtons),
        "has-more-pages": vue_cjs_prod.unref(hasMorePages)
      }, null, _parent));
    }
    _push(`</div>`);
  };
}
const _sfc_main$l = /* @__PURE__ */ vue_cjs_prod.defineComponent(__spreadProps(__spreadValues({}, __default__$7), {
  __ssrInlineRender: true,
  setup: setup$7
}));
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/my-[teams]/index.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const index$5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$l
});
const _sfc_main$k = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    video: null
  },
  setup(__props) {
    const props = __props;
    const { video: video2 } = vue_cjs_prod.toRefs(props);
    vueRouter_cjs_prod.useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "flex items-center" }, _attrs))}><img${serverRenderer.exports.ssrRenderAttr("src", vue_cjs_prod.unref(video2).thumbnail)} alt="thumbnail" class="h-40 w-[40%] max-w-[20rem]" width="288"><p class="font-bold flex w-48w ml-[8px]">${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(video2).name)}</p>`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconGo), null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/my-[teams]/video/components/VideoRow.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const VideoRow = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$k
});
const _sfc_main$j = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    videos: null,
    title: null
  },
  setup(__props) {
    const props = __props;
    const { title, videos: videos2 } = vue_cjs_prod.toRefs(props);
    const route = vueRouter_cjs_prod.useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = vue_cjs_prod.resolveComponent("NuxtLink");
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "relative grid grid-cols-1 bg-white 2xl:h-[62rem] rounded-lg shadow-md overflow-y-auto" }, _attrs))}><div class="bg-green-default h-12 rounded-t-lg border-b-4"><p class="text-green-light text-center text-3xl">${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(title))}</p></div><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(videos2), (video2) => {
        _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
          to: `/my-teams/exercise-${vue_cjs_prod.unref(route).params.id}/${video2.id}`,
          key: video2.id
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(serverRenderer.exports.ssrRenderComponent(_sfc_main$k, { video: video2 }, null, _parent2, _scopeId));
            } else {
              return [
                vue_cjs_prod.createVNode(_sfc_main$k, { video: video2 }, null, 8, ["video"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/my-[teams]/video/components/ExerciseCard.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const ExerciseCard = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$j
});
const __default__$6 = {
  layout: "teams"
};
function setup$6(__props) {
  const { state: courseVideoState, load: loadCourseVideo } = useCourseVideoInject();
  const route = vueRouter_cjs_prod.useRoute();
  vue_cjs_prod.ref(1);
  let maxVisibleButtons = vue_cjs_prod.ref(3);
  let totalPages = vue_cjs_prod.ref(4);
  let total = vue_cjs_prod.ref(40);
  let perPage = vue_cjs_prod.ref(4);
  let currentPage = vue_cjs_prod.ref(1);
  let hasMorePages = vue_cjs_prod.ref(true);
  const getTotalPages = vue_cjs_prod.computed(() => {
    var _a2;
    if (courseVideoState.value.status === "success") {
      return totalPages.value = Math.ceil(((_a2 = courseVideoState.value.data) == null ? void 0 : _a2.length) / 4);
    } else {
      return totalPages.value;
    }
  });
  const getTotal = vue_cjs_prod.computed(() => {
    var _a2;
    if (courseVideoState.value.status === "success") {
      return total.value = (_a2 = courseVideoState.value.data) == null ? void 0 : _a2.length;
    } else {
      return total.value;
    }
  });
  const getTmpVideosByPagination = vue_cjs_prod.computed(() => {
    var _a2;
    if (courseVideoState.value.status === "success") {
      return (_a2 = courseVideoState.value.data) == null ? void 0 : _a2.slice((currentPage.value - 1) * perPage.value, currentPage.value * perPage.value);
    } else {
      return [];
    }
  });
  vue_cjs_prod.onMounted(() => {
    loadCourseVideo({
      id: parseInt(route.params.id),
      skip: 1,
      pageSize: 4,
      filter: {}
    });
  });
  return (_ctx, _push, _parent, _attrs) => {
    _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "col-start-2 flex" }, _attrs))}><div class="grid grid-cols-1 w-[90vw] xl:w-[70vw] 2xl:w-[76vw] m-auto">`);
    _push(serverRenderer.exports.ssrRenderComponent(PageTitle, null, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Event `);
        } else {
          return [
            vue_cjs_prod.createTextVNode(" Event ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$j, {
      title: "All Exercise",
      videos: vue_cjs_prod.unref(getTmpVideosByPagination)
    }, null, _parent));
    _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$M, {
      "total-pages": vue_cjs_prod.unref(getTotalPages),
      total: vue_cjs_prod.unref(getTotal),
      "per-page": vue_cjs_prod.unref(perPage),
      "current-page": vue_cjs_prod.unref(currentPage),
      maxVisibleButtons: vue_cjs_prod.unref(maxVisibleButtons),
      "has-more-pages": vue_cjs_prod.unref(hasMorePages)
    }, null, _parent));
    _push(`</div></div>`);
  };
}
const _sfc_main$i = /* @__PURE__ */ vue_cjs_prod.defineComponent(__spreadProps(__spreadValues({}, __default__$6), {
  __ssrInlineRender: true,
  setup: setup$6
}));
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/my-[teams]/video/[id].vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _id_$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$i
});
const _sfc_main$h = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    event: null
  },
  setup(__props) {
    const props = __props;
    const { event } = vue_cjs_prod.toRefs(props);
    vueRouter_cjs_prod.useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = vue_cjs_prod.resolveComponent("NuxtLink");
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: `/my-teams/event/${vue_cjs_prod.unref(event).id}`
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative grid grid-cols-1 rounded-[2.5rem] bg-white h-32 shadow-md mt-16 pl-[2rem] pt-[1rem] pr-[1rem]"${_scopeId}><div class="flex"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconCalendar), null, null, _parent2, _scopeId));
            _push2(`<div class="w-[50vw] lg:w-[15vw] ml-[4px]"${_scopeId}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(toFullDate)(vue_cjs_prod.unref(event).custom_create_date))}</div><svg class="h-8 w-8 text-black-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"${_scopeId}></path></svg></div><div${_scopeId}><p class="font-bold"${_scopeId}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(event).name)}</p></div><div${_scopeId}><p${_scopeId}>Location: ${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(event).custom_class_id)}</p></div></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "relative grid grid-cols-1 rounded-[2.5rem] bg-white h-32 shadow-md mt-16 pl-[2rem] pt-[1rem] pr-[1rem]" }, [
                vue_cjs_prod.createVNode("div", { class: "flex" }, [
                  vue_cjs_prod.createVNode(vue_cjs_prod.unref(IconCalendar)),
                  vue_cjs_prod.createVNode("div", { class: "w-[50vw] lg:w-[15vw] ml-[4px]" }, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(toFullDate)(vue_cjs_prod.unref(event).custom_create_date)), 1),
                  (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                    class: "h-8 w-8 text-black-500",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    vue_cjs_prod.createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M14 5l7 7m0 0l-7 7m7-7H3"
                    })
                  ]))
                ]),
                vue_cjs_prod.createVNode("div", null, [
                  vue_cjs_prod.createVNode("p", { class: "font-bold" }, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(event).name), 1)
                ]),
                vue_cjs_prod.createVNode("div", null, [
                  vue_cjs_prod.createVNode("p", null, "Location: " + vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(event).custom_class_id), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/my-calendar/components/EventCard.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const EventCard = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$h
});
const __default__$5 = {
  layout: "teams"
};
function setup$5(__props) {
  const { state: lessonsState, load: loadLessons } = useMyCalendarInject();
  vueRouter_cjs_prod.useRoute();
  const selectDayLessons = vue_cjs_prod.ref([]);
  const getEvents = vue_cjs_prod.computed(() => {
    return selectDayLessons.value;
  });
  vue_cjs_prod.onMounted(() => {
    debugger;
    let user = sessionStorage.getItem("user");
    if (user) {
      const userObj = JSON.parse(user);
      loadLessons(userObj.email);
    }
  });
  return (_ctx, _push, _parent, _attrs) => {
    var _a2;
    _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "col-start-2 lg:flex xl:flex 2xl:flex" }, _attrs))}><div class="grid grid-cols-1 w-[90vw] lg:w-48w xl:w-[50vw] 2xl:w-48w">`);
    _push(serverRenderer.exports.ssrRenderComponent(PageTitle, null, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Calendar`);
        } else {
          return [
            vue_cjs_prod.createTextVNode("Calendar")
          ];
        }
      }),
      _: 1
    }, _parent));
    if (((_a2 = vue_cjs_prod.unref(lessonsState).data) == null ? void 0 : _a2.length) > 0) {
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$D, {
        lessons: vue_cjs_prod.unref(lessonsState).data
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="grid grid-cols-1 mt-[4vh] h-[10vh] lg:w-[40vw] xl:w-[25vw] 2xl:w-[20vw] w-[80vw]"><div>Event:</div><div class="h-screen lg:h-[50vh] 2xl:h-[50vh] lg:overflow-y-auto 2xl:overflow-y-auto"><!--[-->`);
    serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(getEvents), (event) => {
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$h, {
        key: event.id,
        event
      }, null, _parent));
    });
    _push(`<!--]--></div></div></div>`);
  };
}
const _sfc_main$g = /* @__PURE__ */ vue_cjs_prod.defineComponent(__spreadProps(__spreadValues({}, __default__$5), {
  __ssrInlineRender: true,
  setup: setup$5
}));
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/my-calendar/index.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const index$4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$g
});
const _hoisted_1$3 = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3 = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  d: "m17.268 9.061-4.266 3.434a2.223 2.223 0 0 1-2.746 0L5.954 9.061",
  stroke: "#092231",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$3 = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  "clip-rule": "evenodd",
  d: "M6.888 3.5h9.428c1.36.015 2.653.59 3.58 1.59a5.017 5.017 0 0 1 1.326 3.704v6.528a5.017 5.017 0 0 1-1.326 3.704 4.957 4.957 0 0 1-3.58 1.59H6.888C3.968 20.616 2 18.241 2 15.322V8.794C2 5.875 3.968 3.5 6.888 3.5Z",
  stroke: "#092231",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$2 = [
  _hoisted_2$3,
  _hoisted_3$3
];
function render$3(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$3, _hoisted_4$2);
}
const IconMail = { render: render$3 };
const _sfc_main$f = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  emits: ["onSubmit"],
  setup(__props, { emit }) {
    vueRouter_cjs_prod.useRouter();
    const username = vue_cjs_prod.ref("");
    const email = vue_cjs_prod.ref("");
    const name2 = vue_cjs_prod.ref("");
    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const onReset = (values) => {
      username.value = "";
      email.value = "";
      name2.value = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_van_form = vue_cjs_prod.resolveComponent("van-form");
      const _component_van_field = vue_cjs_prod.resolveComponent("van-field");
      const _component_van_button = vue_cjs_prod.resolveComponent("van-button");
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "relative bg-gray rounded-[3rem] h-[35rem] m-7 opacity-90 p-8 w-[77vw] lg:w-[80vw] xl:w-[70vw] 2xl:w-[60vw] max-w-[400px]" }, _attrs))} data-v-4c90c380>`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(Logo), { class: "m-auto" }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_van_form, null, {
        default: vue_cjs_prod.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid mt-[3rem] w-[90%] screen-width" data-v-4c90c380${_scopeId}><div class="grid m-auto" data-v-4c90c380${_scopeId}><div class="pt-2 relative mx-auto text-gray-600 inline-block" data-v-4c90c380${_scopeId}><button type="submit" class="absolute left-[3px] top-0 mt-[1rem] mr-4" data-v-4c90c380${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconProfile), { class: "text-gray-600" }, null, _parent2, _scopeId));
            _push2(`</button>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_van_field, {
              class: "px-5 pr-16 bg-transparent border-b-green-light border-b-2 text-sm ml-[1rem] sm:w-[30vw] lg:w-[18vw] 2xl:w-[18vw] w-[90%]",
              modelValue: username.value,
              "onUpdate:modelValue": ($event) => username.value = $event,
              placeholder: "Login ID",
              rules: [{ required: true, message: "\u8ACB\u586B\u5BEB\u7528\u6237ID" }]
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="pt-2 relative mx-auto text-gray-600 inline-block" data-v-4c90c380${_scopeId}><button type="submit" class="absolute left-[3px] top-0 mt-[1rem] mr-4" data-v-4c90c380${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconMail), { class: "text-gray-600" }, null, _parent2, _scopeId));
            _push2(`</button>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_van_field, {
              class: "px-5 pr-16 bg-transparent border-b-green-light border-b-2 text-sm ml-[1rem] sm:w-[30vw] lg:w-[18vw] 2xl:w-[18vw] w-[90%]",
              modelValue: email.value,
              "onUpdate:modelValue": ($event) => email.value = $event,
              placeholder: "Email",
              rules: [{ pattern, message: "\u8ACB\u586B\u5BEB\u6B63\u78BA\u7684\u96FB\u90F5\u5730\u5740" }]
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="pt-2 relative mx-auto text-gray-600 inline-block" data-v-4c90c380${_scopeId}><button type="submit" class="absolute left-[3px] top-0 mt-[1rem] mr-4" data-v-4c90c380${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconProfile), { class: "text-gray-600" }, null, _parent2, _scopeId));
            _push2(`</button>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_van_field, {
              class: "px-5 pr-16 bg-transparent border-b-green-light border-b-2 text-sm ml-[1rem] sm:w-[30vw] lg:w-[18vw] 2xl:w-[18vw] w-[90%]",
              modelValue: name2.value,
              "onUpdate:modelValue": ($event) => name2.value = $event,
              placeholder: "Name",
              rules: [{ required: true, message: "\u8ACB\u586B\u5BEB\u540D\u7A31" }]
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="flex m-auto justify-center p-2 py-6" data-v-4c90c380${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(ButtonReset), { class: "mr-[1rem]" }, null, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_van_button, {
              round: "",
              block: "",
              "native-type": "submit"
            }, {
              default: vue_cjs_prod.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Next `);
                } else {
                  return [
                    vue_cjs_prod.createTextVNode(" Next ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "grid mt-[3rem] w-[90%] screen-width" }, [
                vue_cjs_prod.createVNode("div", { class: "grid m-auto" }, [
                  vue_cjs_prod.createVNode("div", { class: "pt-2 relative mx-auto text-gray-600 inline-block" }, [
                    vue_cjs_prod.createVNode("button", {
                      type: "submit",
                      class: "absolute left-[3px] top-0 mt-[1rem] mr-4"
                    }, [
                      vue_cjs_prod.createVNode(vue_cjs_prod.unref(IconProfile), { class: "text-gray-600" })
                    ]),
                    vue_cjs_prod.createVNode(_component_van_field, {
                      class: "px-5 pr-16 bg-transparent border-b-green-light border-b-2 text-sm ml-[1rem] sm:w-[30vw] lg:w-[18vw] 2xl:w-[18vw] w-[90%]",
                      modelValue: username.value,
                      "onUpdate:modelValue": ($event) => username.value = $event,
                      placeholder: "Login ID",
                      rules: [{ required: true, message: "\u8ACB\u586B\u5BEB\u7528\u6237ID" }]
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  vue_cjs_prod.createVNode("div", { class: "pt-2 relative mx-auto text-gray-600 inline-block" }, [
                    vue_cjs_prod.createVNode("button", {
                      type: "submit",
                      class: "absolute left-[3px] top-0 mt-[1rem] mr-4"
                    }, [
                      vue_cjs_prod.createVNode(vue_cjs_prod.unref(IconMail), { class: "text-gray-600" })
                    ]),
                    vue_cjs_prod.createVNode(_component_van_field, {
                      class: "px-5 pr-16 bg-transparent border-b-green-light border-b-2 text-sm ml-[1rem] sm:w-[30vw] lg:w-[18vw] 2xl:w-[18vw] w-[90%]",
                      modelValue: email.value,
                      "onUpdate:modelValue": ($event) => email.value = $event,
                      placeholder: "Email",
                      rules: [{ pattern, message: "\u8ACB\u586B\u5BEB\u6B63\u78BA\u7684\u96FB\u90F5\u5730\u5740" }]
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                  ]),
                  vue_cjs_prod.createVNode("div", { class: "pt-2 relative mx-auto text-gray-600 inline-block" }, [
                    vue_cjs_prod.createVNode("button", {
                      type: "submit",
                      class: "absolute left-[3px] top-0 mt-[1rem] mr-4"
                    }, [
                      vue_cjs_prod.createVNode(vue_cjs_prod.unref(IconProfile), { class: "text-gray-600" })
                    ]),
                    vue_cjs_prod.createVNode(_component_van_field, {
                      class: "px-5 pr-16 bg-transparent border-b-green-light border-b-2 text-sm ml-[1rem] sm:w-[30vw] lg:w-[18vw] 2xl:w-[18vw] w-[90%]",
                      modelValue: name2.value,
                      "onUpdate:modelValue": ($event) => name2.value = $event,
                      placeholder: "Name",
                      rules: [{ required: true, message: "\u8ACB\u586B\u5BEB\u540D\u7A31" }]
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ])
              ]),
              vue_cjs_prod.createVNode("div", { class: "flex m-auto justify-center p-2 py-6" }, [
                vue_cjs_prod.createVNode(vue_cjs_prod.unref(ButtonReset), {
                  onClick: onReset,
                  class: "mr-[1rem]"
                }),
                vue_cjs_prod.createVNode(_component_van_button, {
                  round: "",
                  block: "",
                  "native-type": "submit"
                }, {
                  default: vue_cjs_prod.withCtx(() => [
                    vue_cjs_prod.createTextVNode(" Next ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/register/components/RegisterLoginIdCard.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const RegisterLoginIdCard = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-4c90c380"]]);
const RegisterLoginIdCard$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": RegisterLoginIdCard
});
const _sfc_main$e = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  emits: ["onSubmit"],
  setup(__props, { emit }) {
    vueRouter_cjs_prod.useRouter();
    const password = vue_cjs_prod.ref("");
    const confirmPassword = vue_cjs_prod.ref("");
    const pattern = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const validator2 = (val) => {
      debugger;
      console.log(val);
      if (confirmPassword.value != password.value) {
        return false;
      } else {
        return true;
      }
    };
    const onReset = (values) => {
      debugger;
      const user = {
        loginId: "",
        email: "",
        page: "isLoginIdPage",
        password: ""
      };
      emit("onSubmit", user);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_van_form = vue_cjs_prod.resolveComponent("van-form");
      const _component_van_field = vue_cjs_prod.resolveComponent("van-field");
      const _component_van_button = vue_cjs_prod.resolveComponent("van-button");
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "relative bg-gray rounded-[3rem] h-[35rem] m-7 opacity-90 p-8 w-[77vw] lg:w-[80vw] xl:w-[70vw] 2xl:w-[60vw] max-w-[400px]" }, _attrs))} data-v-4c569138>`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(Logo), { class: "m-auto" }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_van_form, null, {
        default: vue_cjs_prod.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid mt-[3rem] screen-width w-[90%]" data-v-4c569138${_scopeId}><div class="grid m-auto" data-v-4c569138${_scopeId}><div class="pt-2 relative mx-auto text-gray-600 inline-block" data-v-4c569138${_scopeId}><button type="submit" class="absolute left-[3px] top-0 mt-[1rem] mr-4" data-v-4c569138${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconPw), { class: "text-gray-600" }, null, _parent2, _scopeId));
            _push2(`</button>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_van_field, {
              type: "password",
              class: "px-5 pr-16 bg-transparent border-b-green-light border-b-2 text-sm ml-[1rem] sm:w-[30vw] lg:w-[18vw] 2xl:w-[18vw] w-[90%]",
              modelValue: password.value,
              "onUpdate:modelValue": ($event) => password.value = $event,
              placeholder: "Password",
              rules: [
                {
                  pattern,
                  message: `\u5BC6\u78BC\u81F3\u5C11\u70BA8\u4F4D\uFF0C\u5305\u62EC\u81F3\u5C11\u5927\u5BEB\u5B57\u6BCD\u548C\u7279\u6B8A\u5B57\u7B26`
                }
              ]
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="pt-2 relative mx-auto text-gray-600 inline-block" data-v-4c569138${_scopeId}><button type="submit" class="absolute left-[3px] top-0 mt-[1rem] mr-4" data-v-4c569138${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconPw), { class: "text-gray-600" }, null, _parent2, _scopeId));
            _push2(`</button>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_van_field, {
              type: "password",
              class: "px-5 pr-16 bg-transparent border-b-green-light border-b-2 text-sm ml-[1rem] sm:w-[30vw] lg:w-[18vw] 2xl:w-[18vw] w-[90%]",
              modelValue: confirmPassword.value,
              "onUpdate:modelValue": ($event) => confirmPassword.value = $event,
              placeholder: "comfirmPassword",
              rules: [{ validator: validator2, message: `\u5BC6\u78BC\u4E0D\u76F8\u7B26` }]
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="flex m-auto justify-center p-2 py-6" data-v-4c569138${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(ButtonReset), { class: "mr-[1rem]" }, null, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_van_button, {
              round: "",
              block: "",
              "native-type": "submit"
            }, {
              default: vue_cjs_prod.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Complete `);
                } else {
                  return [
                    vue_cjs_prod.createTextVNode(" Complete ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "grid mt-[3rem] screen-width w-[90%]" }, [
                vue_cjs_prod.createVNode("div", { class: "grid m-auto" }, [
                  vue_cjs_prod.createVNode("div", { class: "pt-2 relative mx-auto text-gray-600 inline-block" }, [
                    vue_cjs_prod.createVNode("button", {
                      type: "submit",
                      class: "absolute left-[3px] top-0 mt-[1rem] mr-4"
                    }, [
                      vue_cjs_prod.createVNode(vue_cjs_prod.unref(IconPw), { class: "text-gray-600" })
                    ]),
                    vue_cjs_prod.createVNode(_component_van_field, {
                      type: "password",
                      class: "px-5 pr-16 bg-transparent border-b-green-light border-b-2 text-sm ml-[1rem] sm:w-[30vw] lg:w-[18vw] 2xl:w-[18vw] w-[90%]",
                      modelValue: password.value,
                      "onUpdate:modelValue": ($event) => password.value = $event,
                      placeholder: "Password",
                      rules: [
                        {
                          pattern,
                          message: `\u5BC6\u78BC\u81F3\u5C11\u70BA8\u4F4D\uFF0C\u5305\u62EC\u81F3\u5C11\u5927\u5BEB\u5B57\u6BCD\u548C\u7279\u6B8A\u5B57\u7B26`
                        }
                      ]
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                  ]),
                  vue_cjs_prod.createVNode("div", { class: "pt-2 relative mx-auto text-gray-600 inline-block" }, [
                    vue_cjs_prod.createVNode("button", {
                      type: "submit",
                      class: "absolute left-[3px] top-0 mt-[1rem] mr-4"
                    }, [
                      vue_cjs_prod.createVNode(vue_cjs_prod.unref(IconPw), { class: "text-gray-600" })
                    ]),
                    vue_cjs_prod.createVNode(_component_van_field, {
                      type: "password",
                      class: "px-5 pr-16 bg-transparent border-b-green-light border-b-2 text-sm ml-[1rem] sm:w-[30vw] lg:w-[18vw] 2xl:w-[18vw] w-[90%]",
                      modelValue: confirmPassword.value,
                      "onUpdate:modelValue": ($event) => confirmPassword.value = $event,
                      placeholder: "comfirmPassword",
                      rules: [{ validator: validator2, message: `\u5BC6\u78BC\u4E0D\u76F8\u7B26` }]
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                  ])
                ])
              ]),
              vue_cjs_prod.createVNode("div", { class: "flex m-auto justify-center p-2 py-6" }, [
                vue_cjs_prod.createVNode(vue_cjs_prod.unref(ButtonReset), {
                  onClick: onReset,
                  class: "mr-[1rem]"
                }),
                vue_cjs_prod.createVNode(_component_van_button, {
                  round: "",
                  block: "",
                  "native-type": "submit"
                }, {
                  default: vue_cjs_prod.withCtx(() => [
                    vue_cjs_prod.createTextVNode(" Complete ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/register/components/RegisterPasswordCard.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const RegisterPasswordCard = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-4c569138"]]);
const RegisterPasswordCard$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": RegisterPasswordCard
});
const __default__$4 = {
  layout: "login"
};
function setup$4(__props) {
  vueRouter_cjs_prod.useRouter();
  const currentPage = vue_cjs_prod.computed(() => {
    debugger;
    return page.value;
  });
  const page = vue_cjs_prod.ref("isLoginIdPage");
  vue_cjs_prod.ref({});
  vue_cjs_prod.onMounted(() => {
  });
  return (_ctx, _push, _parent, _attrs) => {
    _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "col-start-2 w-[90vw] lg:flex items-center justify-center lg:w-[80vw] xl:w-[70vw] 2xl:w-[60vw]" }, _attrs))}>`);
    if (vue_cjs_prod.unref(currentPage) == "isLoginIdPage") {
      _push(serverRenderer.exports.ssrRenderComponent(RegisterLoginIdCard, null, null, _parent));
    } else {
      _push(`<!---->`);
    }
    if (vue_cjs_prod.unref(currentPage) == "isPasswordPage") {
      _push(serverRenderer.exports.ssrRenderComponent(RegisterPasswordCard, null, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  };
}
const _sfc_main$d = /* @__PURE__ */ vue_cjs_prod.defineComponent(__spreadProps(__spreadValues({}, __default__$4), {
  __ssrInlineRender: true,
  setup: setup$4
}));
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/register/index.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const index$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$d
});
const _sfc_main$c = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "relative mt-[1rem] mb-[1rem] bg-white w-[89vw] lg:w-[70vw] h-[72vh] rounded-[2.5rem] shadow-md overflow-y-auto p-8" }, _attrs))}> Privacy policy We respect your privacy and are committed to protecting it through our compliance with this privacy policy (\u201CPolicy\u201D). This Policy describes the types of information we may collect from you or that you may provide (\u201CPersonal Information\u201D) on the https://www.thegrind-app.com/ website (\u201CWebsite\u201D or \u201CService\u201D) and any of its related products and services (collectively, \u201CServices\u201D), and our practices for collecting, using, maintaining, protecting, and disclosing that Personal Information. It also describes the choices available to you regarding our use of your Personal Information and how you can access and update it. This Policy is a legally binding agreement between you (\u201CUser\u201D, \u201Cyou\u201D or \u201Cyour\u201D) and this Website operator (\u201COperator\u201D, \u201Cwe\u201D, \u201Cus\u201D or \u201Cour\u201D). If you are entering into this agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this agreement, in which case the terms \u201CUser\u201D, \u201Cyou\u201D or \u201Cyour\u201D shall refer to such entity. If you do not have such authority, or if you do not agree with the terms of this agreement, you must not accept this agreement and may not access and use the Website and Services. By accessing and using the Website and Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Policy. This Policy does not apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage. This privacy policy was created with the help of the privacy policy generator. Collection of personal information You can access and use the Website and Services without telling us who you are or revealing any information by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the features offered on the Website, you may be asked to provide certain Personal Information (for example, your name and e-mail address). We receive and store any information you knowingly provide to us when you create an account, publish content, or fill any forms on the Website. When required, this information may include the following: Account details (such as user name, unique user ID, password, etc) Contact information (such as email address, phone number, etc) Basic personal information (such as name, country of residence, etc) Geolocation data of your device (such as latitude and longitude) Any other materials you willingly submit to us (such as articles, images, feedback, etc) You can choose not to provide us with your Personal Information, but then you may not be able to take advantage of some of the features on the Website. Users who are uncertain about what information is mandatory are welcome to contact us. Privacy of children We do not knowingly collect any Personal Information from children under the age of 18. If you are under the age of 18, please do not submit any Personal Information through the Website and Services. If you have reason to believe that a child under the age of 18 has provided Personal Information to us through the Website and Services, please contact us to request that we delete that child\u2019s Personal Information from our Services. We encourage parents and legal guardians to monitor their children\u2019s Internet usage and to help enforce this Policy by instructing their children never to provide Personal Information through the Website and Services without their permission. We also ask that all parents and legal guardians overseeing the care of children take the necessary precautions to ensure that their children are instructed to never give out Personal Information when online without their permission. Use and processing of collected information We act as a data controller and a data processor when handling Personal Information, unless we have entered into a data processing agreement with you in which case you would be the data controller and we would be the data processor. Our role may also differ depending on the specific situation involving Personal Information. We act in the capacity of a data controller when we ask you to submit your Personal Information that is necessary to ensure your access and use of the Website and Services. In such instances, we are a data controller because we determine the purposes and means of the processing of Personal Information. We act in the capacity of a data processor in situations when you submit Personal Information through the Website and Services. We do not own, control, or make decisions about the submitted Personal Information, and such Personal Information is processed only in accordance with your instructions. In such instances, the User providing Personal Information acts as a data controller. In order to make the Website and Services available to you, or to meet a legal obligation, we may need to collect and use certain Personal Information. If you do not provide the information that we request, we may not be able to provide you with the requested products or services. Any of the information we collect from you may be used for the following purposes: Create and manage user accounts Send administrative information Respond to inquiries and offer support Request user feedback Improve user experience Run and operate the Website and Services Processing your Personal Information depends on how you interact with the Website and Services, where you are located in the world and if one of the following applies: (i) you have given your consent for one or more specific purposes; (ii) provision of information is necessary for the performance of an agreement with you and/or for any pre-contractual obligations thereof; (iii) processing is necessary for compliance with a legal obligation to which you are subject; (iv) processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in us; (v) processing is necessary for the purposes of the legitimate interests pursued by us or by a third party. Note that under some legislations we may be allowed to process information until you object to such processing by opting out, without having to rely on consent or any other of the legal bases. In any case, we will be happy to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Information is a statutory or contractual requirement, or a requirement necessary to enter into a contract. Managing information You are able to delete certain Personal Information we have about you. The Personal Information you can delete may change as the Website and Services change. When you delete Personal Information, however, we may maintain a copy of the unrevised Personal Information in our records for the duration necessary to comply with our obligations to our affiliates and partners, and for the purposes described below. Disclosure of information Depending on the requested Services or as necessary to complete any transaction or provide any Service you have requested, we may share your information with our affiliates, contracted companies, and service providers (collectively, \u201CService Providers\u201D) we rely upon to assist in the operation of the Website and Services available to you and whose privacy policies are consistent with ours or who agree to abide by our policies with respect to Personal Information. We will not share any personally identifiable information with third parties and will not share any information with unaffiliated third parties. Service Providers are not authorized to use or disclose your information except as necessary to perform services on our behalf or comply with legal requirements. Service Providers are given the information they need only in order to perform their designated functions, and we do not authorize them to use or disclose any of the provided information for their own marketing or other purposes. Retention of information We will retain and use your Personal Information for the period necessary to enforce our agreements, resolve disputes, and unless a longer retention period is required or permitted by law up to a maximum of 60 months. We may use any aggregated data derived from or incorporating your Personal Information after you update or delete it, but not in a manner that would identify you personally. Once the retention period expires, Personal Information shall be deleted. Therefore, the right to access, the right to erasure, the right to rectification, and the right to data portability cannot be enforced after the expiration of the retention period. Do Not Track signals Some browsers incorporate a Do Not Track feature that signals to websites you visit that you do not want to have your online activity tracked. Tracking is not the same as using or collecting information in connection with a website. For these purposes, tracking refers to collecting personally identifiable information from consumers who use or visit a website or online service as they move across different websites over time. How browsers communicate the Do Not Track signal is not yet uniform. As a result, the Website and Services are not yet set up to interpret or respond to Do Not Track signals communicated by your browser. Even so, as described in more detail throughout this Policy, we limit our use and collection of your Personal Information. Social media features Our Website and Services may include social media features, such as the Facebook and Twitter buttons, Share This buttons, etc (collectively, \u201CSocial Media Features\u201D). These Social Media Features may collect your IP address, what page you are visiting on our Website and Services, and may set a cookie to enable Social Media Features to function properly. Social Media Features are hosted either by their respective providers or directly on our Website and Services. Your interactions with these Social Media Features are governed by the privacy policy of their respective providers. Email marketing We offer electronic newsletters to which you may voluntarily subscribe at any time. We are committed to keeping your e-mail address confidential and will not disclose your email address to any third parties except as allowed in the information use and processing section or for the purposes of utilizing a third-party provider to send such emails. We will maintain the information sent via e-mail in accordance with applicable laws and regulations. In compliance with the CAN-SPAM Act, all e-mails sent from us will clearly state who the e-mail is from and provide clear information on how to contact the sender. Links to other resources The Website and Services contain links to other resources that are not owned or controlled by us. Please be aware that we are not responsible for the privacy practices of such other resources or third parties. We encourage you to be aware when you leave the Website and Services and to read the privacy statements of each and every resource that may collect Personal Information. Information security We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We maintain reasonable administrative, technical, and physical safeguards in an effort to protect against unauthorized access, use, modification, and disclosure of Personal Information in our control and custody. However, no data transmission over the Internet or wireless network can be guaranteed. Therefore, while we strive to protect your Personal Information, you acknowledge that (i) there are security and privacy limitations of the Internet which are beyond our control; (ii) the security, integrity, and privacy of any and all information and data exchanged between you and the Website and Services cannot be guaranteed; and (iii) any such information and data may be viewed or tampered with in transit by a third party, despite best efforts. As the security of Personal Information depends in part on the security of the device you use to communicate with us and the security you use to protect your credentials, please take appropriate measures to protect this information. Data breach In the event we become aware that the security of the Website and Services has been compromised or Users\u2019 Personal Information has been disclosed to unrelated third parties as a result of external activity, including, but not limited to, security attacks or fraud, we reserve the right to take reasonably appropriate measures, including, but not limited to, investigation and reporting, as well as notification to and cooperation with law enforcement authorities. In the event of a data breach, we will make reasonable efforts to notify affected individuals if we believe that there is a reasonable risk of harm to the User as a result of the breach or if notice is otherwise required by law. When we do, we will send you an email. Changes and amendments We reserve the right to modify this Policy or its terms related to the Website and Services at any time at our discretion. When we do, we will revise the updated date at the bottom of this page. We may also provide notice to you in other ways at our discretion, such as through the contact information you have provided. An updated version of this Policy will be effective immediately upon the posting of the revised Policy unless otherwise specified. Your continued use of the Website and Services after the effective date of the revised Policy (or such other act specified at that time) will constitute your consent to those changes. However, we will not, without your consent, use your Personal Information in a manner materially different than what was stated at the time your Personal Information was collected. Acceptance of this policy You acknowledge that you have read this Policy and agree to all its terms and conditions. By accessing and using the Website and Services and submitting your information you agree to be bound by this Policy. If you do not agree to abide by the terms of this Policy, you are not authorized to access or use the Website and Services. Contacting us If you have any questions, concerns, or complaints regarding this Policy, the information we hold about you, or if you wish to exercise your rights, we encourage you to contact us using the details below: info@thegrind-app.com We will attempt to resolve complaints and disputes and make every reasonable effort to honor your wish to exercise your rights as quickly as possible and in any event, within the timescales provided by applicable data protection laws. This document was last updated on Feburary 2, 2022 </div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/terms/components/TermsCard.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const TermsCard = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$c
});
const __default__$3 = {
  layout: "teams"
};
function setup$3(__props) {
  vue_cjs_prod.onMounted(() => {
  });
  return (_ctx, _push, _parent, _attrs) => {
    _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "col-start-2 flex" }, _attrs))}><div class="grid grid-cols-1 m-auto">`);
    _push(serverRenderer.exports.ssrRenderComponent(PageTitle, null, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Terms and Conditions`);
        } else {
          return [
            vue_cjs_prod.createTextVNode("Terms and Conditions")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$c, null, null, _parent));
    _push(`</div></div>`);
  };
}
const _sfc_main$b = /* @__PURE__ */ vue_cjs_prod.defineComponent(__spreadProps(__spreadValues({}, __default__$3), {
  __ssrInlineRender: true,
  setup: setup$3
}));
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/terms/index.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const index$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$b
});
const _sfc_main$a = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`${serverRenderer.exports.ssrInterpolate(_ctx.$route.params.group)} ${serverRenderer.exports.ssrInterpolate(_ctx.$route.params.id)}`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/users-[admins]/[id].vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _id_$1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender]]);
const _id_$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _id_$1
});
const _hoisted_1$2 = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2 = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  d: "M13.7 19.898h6.377",
  stroke: "#092231",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$2 = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  "clip-rule": "evenodd",
  d: "M12.855 4.956c.737-.94 1.928-.89 2.868-.153l1.39 1.09c.94.737 1.273 1.88.536 2.82L9.359 19.29a1.48 1.48 0 0 1-1.15.568l-3.196.04-.724-3.114c-.102-.437 0-.897.277-1.252l8.289-10.575Z",
  stroke: "#092231",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$1 = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  d: "m11.303 6.936 4.794 3.758",
  stroke: "#092231",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_5$1 = [
  _hoisted_2$2,
  _hoisted_3$2,
  _hoisted_4$1
];
function render$2(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$2, _hoisted_5$1);
}
const IconEdit = { render: render$2 };
const _sfc_main$9 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    video: null
  },
  setup(__props) {
    const props = __props;
    const { video: video2 } = vue_cjs_prod.toRefs(props);
    vueRouter_cjs_prod.useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = vue_cjs_prod.resolveComponent("NuxtLink");
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "relative grid grid-cols-1 h-60" }, _attrs))}><div class="flex">`);
      if (!vue_cjs_prod.unref(video2).thumbnail) {
        _push(`<video class="max-h-[40%] sm:max-h-[70%] lg:max-h-[70%] 2xl:max-h-full max-w-[46%] 2xl:max-w-full p-[0.875rem] 2xl:p-[3.875rem] m-auto" width="388" controls><source${serverRenderer.exports.ssrRenderAttr("src", vue_cjs_prod.unref(video2).filePath)} type="video/mp4"> Your browser does not support the video tag. </video>`);
      } else {
        _push(`<img${serverRenderer.exports.ssrRenderAttr("src", vue_cjs_prod.unref(video2).thumbnail)} alt="thumbnail" class="max-h-[40%] sm:max-h-[70%] lg:max-h-[70%] 2xl:max-h-full max-w-[46%] 2xl:max-w-full p-[0.875rem] 2xl:p-[3.875rem] m-auto" width="388">`);
      }
      _push(`<div class="w-[28vw] 2xl:w-[58vw] m-auto"><p class="font-bold">${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(video2).name)}</p><div class="w-[90%] truncate">${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(video2).description)}</div></div>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: `/video/edit/${vue_cjs_prod.unref(video2).id}`,
        class: "mt-auto mb-auto 2xl:m-auto"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconEdit), null, null, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode(vue_cjs_prod.unref(IconEdit))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconGo), { class: "mt-auto mb-auto 2xl:m-auto" }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/video/components/VideoListView.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const VideoListView = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$9
});
const _sfc_main$8 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    vueRouter_cjs_prod.useRouter();
    const isShowMenu = vue_cjs_prod.ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "grid relative" }, _attrs))}><button id="dropdownButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>`);
      if (isShowMenu.value) {
        _push(`<div id="dropdown" class="z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute top-[41px]"><ul class="py-1" aria-labelledby="dropdownButton"><li><a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a></li><li><a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a></li><li><a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a></li><li><a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a></li></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/global/DropdownButton.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const DropdownButton = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$8
});
const _sfc_main$7 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    video: null
  },
  emits: ["edit", "deleteVideo"],
  setup(__props, { emit }) {
    const props = __props;
    vueRouter_cjs_prod.useRouter();
    const {
      video: video2
    } = vue_cjs_prod.toRefs(props);
    vue_cjs_prod.ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "container bg-white rounded-[10px] h-60 m-7 p-8" }, _attrs))}><div class="grid mb-4"><div class="flex"><div class="grid w-9/20 ml-4"><label class="text-grayOther-400"> Video Title </label><input class="rounded-[2rem] border border-grayOther-400 pl-2.5"${serverRenderer.exports.ssrRenderAttr("value", vue_cjs_prod.unref(video2).name)}></div><div class="grid w-9/20 ml-4"><label class="text-grayOther-400">Class </label>`);
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(`</div></div><div class="ml-4 grid w-4/5"><label class="text-grayOther-400">Video Link </label><input class="rounded-[2rem] border border-grayOther-400 pl-2.5"${serverRenderer.exports.ssrRenderAttr("value", vue_cjs_prod.unref(video2).url)}></div><div class="ml-4"><label class="text-grayOther-400">Choose File </label><input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"></div></div><button class="border-2 border-green-light rounded-full bg-green-light ml-4 w-[7rem] text-white"> Save </button><button class="border-2 border-red-600 rounded-full ml-4 w-[7rem] text-red-600"> Delete </button></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/video/edit/components/EditCard.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const EditCard = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$7
});
const _sfc_main$6 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    video: null
  },
  emits: ["edit", "deleteVideo"],
  setup(__props, { emit }) {
    const props = __props;
    vueRouter_cjs_prod.useRouter();
    const {
      video: video2
    } = vue_cjs_prod.toRefs(props);
    vue_cjs_prod.ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "mt-[2rem]" }, _attrs))}><div class="grid mb-4"><label class="text-grayOther-400"> Video Title </label><input class="rounded-[2rem] border border-grayOther-400 pl-2.5"${serverRenderer.exports.ssrRenderAttr("value", vue_cjs_prod.unref(video2).name)}><label class="text-grayOther-400">Class </label>`);
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(`<label class="text-grayOther-400">Video Link </label><input class="rounded-[2rem] border border-grayOther-400 pl-2.5"${serverRenderer.exports.ssrRenderAttr("value", vue_cjs_prod.unref(video2).url)}><label class="text-grayOther-400">Choose File </label><input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"></div><button class="border-2 border-green-light rounded-full bg-green-light ml-4 w-[7rem] text-white"> Save </button><button class="border-2 border-red-600 rounded-full ml-4 w-[7rem] text-red-600"> Delete </button></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/video/edit/components/MobileEditCard.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const MobileEditCard = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$6
});
const __default__$2 = {
  layout: "teams"
};
function setup$2(__props) {
  const route = vueRouter_cjs_prod.useRoute();
  const { state: videoState, load: loadMyVideoById } = useMyVideoDetailInject();
  const { isMobile: isMobile2 } = useDeviceInject();
  vue_cjs_prod.onMounted(() => {
    loadMyVideoById({
      id: parseInt(route.params.id)
    });
  });
  return (_ctx, _push, _parent, _attrs) => {
    var _a2, _b;
    _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "col-start-2 flex" }, _attrs))}><div class="container grid grid-cols-1"><div class="container">`);
    _push(serverRenderer.exports.ssrRenderComponent(PageTitle, null, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconBack), { class: "mr-3 my-auto" }, null, _parent2, _scopeId));
          _push2(` Video Edit `);
        } else {
          return [
            vue_cjs_prod.createVNode(vue_cjs_prod.unref(IconBack), {
              onClick: ($event) => _ctx.$router.go(-1),
              class: "mr-3 my-auto"
            }, null, 8, ["onClick"]),
            vue_cjs_prod.createTextVNode(" Video Edit ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
    if (!vue_cjs_prod.unref(isMobile2)) {
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$7, {
        video: (_a2 = vue_cjs_prod.unref(videoState)) == null ? void 0 : _a2.data
      }, null, _parent));
    } else {
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$6, {
        video: (_b = vue_cjs_prod.unref(videoState)) == null ? void 0 : _b.data
      }, null, _parent));
    }
    _push(`</div></div>`);
  };
}
const _sfc_main$5 = /* @__PURE__ */ vue_cjs_prod.defineComponent(__spreadProps(__spreadValues({}, __default__$2), {
  __ssrInlineRender: true,
  setup: setup$2
}));
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/video/edit/[id].vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$5
});
const _hoisted_1$1 = {
  width: "126",
  height: "40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1 = /* @__PURE__ */ vue_cjs_prod.createElementVNode("rect", {
  x: "1",
  y: "1",
  width: "124",
  height: "38",
  rx: "19",
  stroke: "#092231",
  "stroke-width": "2"
}, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  d: "M61.277 14.8h-2.528v6.512c0 1.616-.992 2.592-2.496 2.592s-2.56-.976-2.56-2.592V14.8h-2.528v6.512c0 2.96 1.984 4.8 5.088 4.8 3.088 0 5.024-1.84 5.024-4.8V14.8Zm7.468 2.512c-1.168 0-2.112.48-2.72 1.344v-1.264H63.56v11.712h2.464v-4.352c.624.864 1.568 1.344 2.768 1.344 2.416 0 4-1.744 4-4.352 0-2.656-1.632-4.432-4.048-4.432Zm-.576 6.736c-1.264 0-2.144-.96-2.144-2.384 0-1.392.88-2.368 2.144-2.368 1.264 0 2.128.992 2.128 2.368 0 1.408-.864 2.384-2.128 2.384ZM76.962 26V14.128h-2.464V26h2.464Zm6.36-8.688c-2.768 0-4.624 1.744-4.624 4.384 0 2.624 1.856 4.4 4.624 4.4 2.752 0 4.608-1.776 4.608-4.4 0-2.64-1.856-4.384-4.608-4.384Zm0 2.048c1.264 0 2.144.96 2.144 2.368s-.88 2.368-2.144 2.368c-1.28 0-2.144-.96-2.144-2.368s.864-2.368 2.144-2.368ZM94.551 26h2.416l-.016-5.616c-.016-1.936-1.344-3.088-3.648-3.088-1.504 0-2.608.352-3.888.992l.768 1.696c.896-.496 1.792-.752 2.56-.752 1.184 0 1.792.528 1.792 1.44v.16h-2.368c-2.112.016-3.28.976-3.28 2.592 0 1.568 1.12 2.688 2.96 2.688 1.2 0 2.128-.4 2.704-1.12V26Zm-2.016-1.648c-.832 0-1.344-.432-1.344-1.088 0-.688.464-.976 1.408-.976h1.936v.768c-.144.736-.96 1.296-2 1.296Zm15.051-10.224h-2.448v4.528c-.624-.88-1.568-1.36-2.784-1.36-2.4 0-4 1.744-4 4.368 0 2.656 1.616 4.432 4.064 4.432 1.184 0 2.112-.48 2.72-1.36V26h2.448V14.128Zm-4.592 9.984c-1.296 0-2.16-.976-2.176-2.384.016-1.392.896-2.384 2.176-2.384 1.264 0 2.144.976 2.144 2.384s-.88 2.384-2.144 2.384Z",
  fill: "#092231"
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  d: "M23.39 16.984h-.934a3.685 3.685 0 0 0-3.684 3.685v4.875a3.685 3.685 0 0 0 3.684 3.684h11.13a3.685 3.685 0 0 0 3.686-3.684v-4.885a3.675 3.675 0 0 0-3.675-3.675h-.943M28.021 10.19v12.042M25.106 13.119l2.915-2.928 2.916 2.928",
  stroke: "#092231",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_5 = [
  _hoisted_2$1,
  _hoisted_3$1,
  _hoisted_4
];
function render$1(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1$1, _hoisted_5);
}
const ButtonUpload = { render: render$1 };
const _hoisted_1 = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ vue_cjs_prod.createElementVNode("path", {
  d: "M7.39 8.984h-.933a3.685 3.685 0 0 0-3.685 3.685v4.875a3.685 3.685 0 0 0 3.685 3.684h11.13a3.685 3.685 0 0 0 3.684-3.684v-4.885a3.675 3.675 0 0 0-3.674-3.675h-.943M12.021 2.19v12.042M9.106 5.119l2.915-2.928 2.916 2.928",
  stroke: "#092231",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const IconUpload = { render };
const __default__$1 = {
  layout: "teams"
};
function setup$1(__props) {
  vue_cjs_prod.ref(1);
  let maxVisibleButtons = vue_cjs_prod.ref(3);
  let totalPages = vue_cjs_prod.ref(4);
  let total = vue_cjs_prod.ref(40);
  let perPage = vue_cjs_prod.ref(4);
  let currentPage = vue_cjs_prod.ref(1);
  let hasMorePages = vue_cjs_prod.ref(true);
  vue_cjs_prod.ref({});
  const { state: videoState, load: loadMyVideos } = useMyVideoInject();
  const { isMobile: isMobile2 } = useDeviceInject();
  const getTotalPages = vue_cjs_prod.computed(() => {
    var _a2;
    if (videoState.value.status === "success") {
      return totalPages.value = Math.ceil(((_a2 = videoState.value.data) == null ? void 0 : _a2.length) / 4);
    } else {
      return totalPages.value;
    }
  });
  const getTotal = vue_cjs_prod.computed(() => {
    var _a2;
    if (videoState.value.status === "success") {
      return total.value = (_a2 = videoState.value.data) == null ? void 0 : _a2.length;
    } else {
      return total.value;
    }
  });
  const getTmpVideosByPagination = vue_cjs_prod.computed(() => {
    var _a2;
    if (videoState.value.status === "success") {
      return (_a2 = videoState.value.data) == null ? void 0 : _a2.slice((currentPage.value - 1) * perPage.value, currentPage.value * perPage.value);
    } else {
      return [];
    }
  });
  vueRouter_cjs_prod.useRoute();
  vue_cjs_prod.onMounted(() => {
    debugger;
    loadMyVideos({
      id: 1,
      skip: 1,
      pageSize: 4,
      filter: {}
    });
  });
  return (_ctx, _push, _parent, _attrs) => {
    const _component_NuxtLink = vue_cjs_prod.resolveComponent("NuxtLink");
    _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "col-start-2 flex" }, _attrs))}><div class="grid grid-cols-1 w-[90vw] lg:w-[73vw] m-auto"><div class="flex justify-between">`);
    _push(serverRenderer.exports.ssrRenderComponent(PageTitle, null, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Video`);
        } else {
          return [
            vue_cjs_prod.createTextVNode("Video")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, { to: `/video/upload` }, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          if (!vue_cjs_prod.unref(isMobile2)) {
            _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(ButtonUpload), null, null, _parent2, _scopeId));
          } else {
            _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconUpload), null, null, _parent2, _scopeId));
          }
        } else {
          return [
            !vue_cjs_prod.unref(isMobile2) ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.unref(ButtonUpload), { key: 0 })) : (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.unref(IconUpload), { key: 1 }))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div><div class="relative grid grid-cols-1 bg-white h-[79vh] p-3 mt-[10px] rounded-[2.5rem] shadow-md 2xl:h-[80vh]"><div class="overflow-y-auto"><!--[-->`);
    serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(getTmpVideosByPagination), (video2) => {
      var _a2, _b;
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: `/my-teams/exercise-${(_a2 = vue_cjs_prod.unref(videoState)) == null ? void 0 : _a2.data.classId}/${(_b = vue_cjs_prod.unref(videoState)) == null ? void 0 : _b.data.id}`,
        key: video2.id
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.exports.ssrRenderComponent(_sfc_main$9, { video: video2 }, null, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode(_sfc_main$9, { video: video2 }, null, 8, ["video"])
            ];
          }
        }),
        _: 2
      }, _parent));
    });
    _push(`<!--]--></div>`);
    _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$M, {
      "total-pages": vue_cjs_prod.unref(getTotalPages),
      total: vue_cjs_prod.unref(getTotal),
      "per-page": vue_cjs_prod.unref(perPage),
      "current-page": vue_cjs_prod.unref(currentPage),
      maxVisibleButtons: vue_cjs_prod.unref(maxVisibleButtons),
      "has-more-pages": vue_cjs_prod.unref(hasMorePages)
    }, null, _parent));
    _push(`</div></div></div>`);
  };
}
const _sfc_main$4 = /* @__PURE__ */ vue_cjs_prod.defineComponent(__spreadProps(__spreadValues({}, __default__$1), {
  __ssrInlineRender: true,
  setup: setup$1
}));
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/video/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$4
});
const _sfc_main$3 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  emits: ["upload"],
  setup(__props, { emit }) {
    vueRouter_cjs_prod.useRouter();
    vue_cjs_prod.ref(null);
    const filename = vue_cjs_prod.ref("");
    const url2 = vue_cjs_prod.ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "mt-[2rem]" }, _attrs))}><div class="grid mb-4"><label class="text-grayOther-400"> Video Title </label><input class="rounded-[2rem] border border-grayOther-400"${serverRenderer.exports.ssrRenderAttr("value", filename.value)}><label class="text-grayOther-400">Class </label>`);
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(`<label class="text-grayOther-400">Video Link </label><input class="rounded-[2rem] border border-grayOther-400"${serverRenderer.exports.ssrRenderAttr("value", url2.value)}><label class="text-grayOther-400">Choose File </label><input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"></div><button class="border-2 border-green-light rounded-full bg-green-light ml-4 w-[7rem] text-white"> Upload </button></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/video/upload/components/MobileUploadCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const MobileUploadCard = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$3
});
const _sfc_main$2 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  emits: ["upload"],
  setup(__props, { emit }) {
    vueRouter_cjs_prod.useRouter();
    vue_cjs_prod.ref(null);
    const filename = vue_cjs_prod.ref("");
    const url2 = vue_cjs_prod.ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "container bg-white rounded-[10px] h-60 m-7 p-8" }, _attrs))}><div class="grid mb-4"><div class="flex"><div class="grid w-9/20 ml-4"><label class="text-grayOther-400"> Video Title </label><input class="rounded-[2rem] border border-grayOther-400"${serverRenderer.exports.ssrRenderAttr("value", filename.value)}></div><div class="grid w-9/20 ml-4"><label class="text-grayOther-400">Class </label>`);
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(`</div></div><div class="ml-4 grid w-4/5"><label class="text-grayOther-400">Video Link </label><input class="rounded-[2rem] border border-grayOther-400"${serverRenderer.exports.ssrRenderAttr("value", url2.value)}></div><div class="ml-4"><label class="text-grayOther-400">Choose File </label><input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"></div></div><button class="border-2 border-green-light rounded-full bg-green-light ml-4 w-[7rem] text-white"> Upload </button></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/video/upload/components/UploadCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const UploadCard = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$2
});
const __default__ = {
  layout: "teams"
};
function setup(__props) {
  const { isMobile: isMobile2 } = useDeviceInject();
  useMyVideoInject();
  vueRouter_cjs_prod.useRoute();
  vueRouter_cjs_prod.useRouter();
  vue_cjs_prod.onMounted(() => {
  });
  return (_ctx, _push, _parent, _attrs) => {
    _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "col-start-2 flex" }, _attrs))}><div class="container grid grid-cols-1"><div class="container">`);
    _push(serverRenderer.exports.ssrRenderComponent(PageTitle, null, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(IconBack), { class: "mr-3 my-auto" }, null, _parent2, _scopeId));
          _push2(` Upload Video `);
        } else {
          return [
            vue_cjs_prod.createVNode(vue_cjs_prod.unref(IconBack), {
              onClick: ($event) => _ctx.$router.go(-1),
              class: "mr-3 my-auto"
            }, null, 8, ["onClick"]),
            vue_cjs_prod.createTextVNode(" Upload Video ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
    if (!vue_cjs_prod.unref(isMobile2)) {
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$2, null, null, _parent));
    } else {
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$3, null, null, _parent));
    }
    _push(`</div></div>`);
  };
}
const _sfc_main$1 = /* @__PURE__ */ vue_cjs_prod.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  __ssrInlineRender: true,
  setup
}));
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/video/upload/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$1
});
const _sfc_main = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    selectedDate: null
  },
  setup(__props) {
    const props = __props;
    const { selectedDate } = vue_cjs_prod.toRefs(props);
    const selectedMonth = vue_cjs_prod.computed(() => {
      return selectedDate.value.format("MMMM YYYY");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
        tabindex: "0",
        class: "focus:outline-none text-base font-bold dark:text-gray-100 text-green-light"
      }, _attrs))}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(selectedMonth))}</span>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/global/Calendar/CalendarDateIndicator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CalendarDateIndicator = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main
});

export { entry$1 as default };
