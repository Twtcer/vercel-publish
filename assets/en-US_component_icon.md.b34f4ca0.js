import{c as m,a as n,w as t,e as l,b as a,d as c,r as p,o as f,u as s,y as o,s as u,C as r,a3 as v,x as k}from"./app.01b76562.js";const _=l(`<h1 id="icon" tabindex="-1">Icon <a class="header-anchor" href="#icon" aria-hidden="true">#</a></h1><p>Element Plus provides a set of common icons.</p><h2 id="icon-usage" tabindex="-1">Icon Usage <a class="header-anchor" href="#icon-usage" aria-hidden="true">#</a></h2><ul><li><p>If you want to <strong>use directly</strong> like the example, you need to <a href="https://v3.vuejs.org/guide/component-registration.html#global-registration" target="_blank" rel="noopener noreferrer">globally register</a> the components before using it.</p></li><li><p>If you want to see all available SVG icons please check <a href="https://unpkg.com/browse/@element-plus/icons-vue@latest/dist/es/" target="_blank" rel="noopener noreferrer">@element-plus/icons-vue</a> and the source <a href="https://github.com/element-plus/element-plus-icons" target="_blank" rel="noopener noreferrer">element-plus-icons</a> out or <a href="#icons-collection">Icon Collection</a></p></li></ul><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><h3 id="using-packaging-manager" tabindex="-1">Using packaging manager <a class="header-anchor" href="#using-packaging-manager" aria-hidden="true">#</a></h3><div class="language-shell"><pre><code><span class="token comment"># Choose a package manager you like.</span>

<span class="token comment"># NPM</span>
$ <span class="token function">npm</span> <span class="token function">install</span> @element-plus/icons-vue
<span class="token comment"># Yarn</span>
$ <span class="token function">yarn</span> <span class="token function">add</span> @element-plus/icons-vue
<span class="token comment"># pnpm</span>
$ <span class="token function">pnpm</span> <span class="token function">install</span> @element-plus/icons-vue
</code></pre></div><h3 id="register-all-icons" tabindex="-1">Register All Icons <a class="header-anchor" href="#register-all-icons" aria-hidden="true">#</a></h3><p>You need import all icons from <code>@element-plus/icons-vue</code> and register them globally.</p><div class="language-ts"><pre><code><span class="token comment">// main.ts</span>

<span class="token comment">// if you&#39;re using CDN, please remove this line.</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ElementPlusIconsVue <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/icons-vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>key<span class="token punctuation">,</span> component<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>ElementPlusIconsVue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> component<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>You can also refer to <a href="https://codepen.io/sxzz/pen/xxpvdrg" target="_blank" rel="noopener noreferrer">this template</a>.</p><h3 id="import-in-browser" tabindex="-1">Import in Browser <a class="header-anchor" href="#import-in-browser" aria-hidden="true">#</a></h3><p>Import Element Plus Icons through browser HTML tags directly, and use global variable <code>ElementPlusIconsVue</code>.</p><p>According to different CDN providers, there are different introduction methods. Here we use <a href="https://unpkg.com" target="_blank" rel="noopener noreferrer">unpkg</a> and <a href="https://jsdelivr.com" target="_blank" rel="noopener noreferrer">jsDelivr</a> as example. You can also use other CDN providers.</p><h4 id="unpkg" tabindex="-1">unpkg <a class="header-anchor" href="#unpkg" aria-hidden="true">#</a></h4><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/@element-plus/icons-vue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="jsdelivr" tabindex="-1">jsDelivr <a class="header-anchor" href="#jsdelivr" aria-hidden="true">#</a></h4><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/@element-plus/icons-vue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>We recommend using CDN to import Element Plus users to lock the version on the link address, so as not to be affected by incompatible updates when Element Plus is upgraded in the future. Please check <a href="https://unpkg.com" target="_blank" rel="noopener noreferrer">unpkg.com</a> for the method to lock the version.</p></div><h3 id="auto-import" tabindex="-1">Auto Import <a class="header-anchor" href="#auto-import" aria-hidden="true">#</a></h3><p>Use <a href="https://github.com/antfu/unplugin-icons" target="_blank" rel="noopener noreferrer">unplugin-icons</a> and <a href="https://github.com/antfu/unplugin-auto-import" target="_blank" rel="noopener noreferrer">unplugin-auto-import</a> to automatically import any icon collections from iconify. You can refer to <a href="https://github.com/sxzz/element-plus-best-practices/blob/db2dfc983ccda5570033a0ac608a1bd9d9a7f658/vite.config.ts#L21-L58" target="_blank" rel="noopener noreferrer">this template</a>.</p><h2 id="simple-usage" tabindex="-1">Simple Usage <a class="header-anchor" href="#simple-usage" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Because HTML standard has already defined a tag named <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu" target="_blank" rel="noopener noreferrer">menu</a>, so you need to use an alias in order to render the icon, if you register <code>Menu</code> directly it will not work.</p></div><div class="language-vue"><pre><code><span class="token comment">&lt;!-- Use el-icon to provide attributes to SVG icon --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>size<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>edit</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- Or use it independently without derive attributes from parent --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>edit</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,24),b=l(`<h2 id="combined-with-el-icon" tabindex="-1">Combined with el-icon <a class="header-anchor" href="#combined-with-el-icon" aria-hidden="true">#</a></h2><p><code>el-icon</code> provides extra attributes for raw SVG icon, for more detail, please read to the end.</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    with extra class <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>is-loading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>, your icon is able to rotate 360 deg in 2
    seconds, you can also override this
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>edit</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#409EFC<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no-inherit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>share</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>delete</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>is-loading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>loading</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">vertical-align</span><span class="token punctuation">:</span> middle</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>search</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">vertical-align</span><span class="token punctuation">:</span> middle</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span> Search <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,3),y=a("p",null,[c(" with extra class "),a("b",null,"is-loading"),c(", your icon is able to rotate 360 deg in 2 seconds, you can also override this ")],-1),q={style:{display:"flex","align-items":"center","justify-content":"space-between",width:"100%"}},w=a("span",{style:{"vertical-align":"middle"}}," Search ",-1),x=l(`<h2 id="using-svg-icon-directly" tabindex="-1">Using SVG icon directly <a class="header-anchor" href="#using-svg-icon-directly" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- Since svg icons do not carry any attributes by default --&gt;</span>
    <span class="token comment">&lt;!-- You need to provide attributes directly --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>edit</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>share</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>delete</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>search</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2),I={style:{"font-size":"20px"}},S=a("h2",{id:"icon-collection",tabindex:"-1"},[c("Icon Collection "),a("a",{class:"header-anchor",href:"#icon-collection","aria-hidden":"true"},"#")],-1),T=a("div",{class:"tip custom-block"},[a("p",{class:"custom-block-title"},"TIP"),a("p",null,[a("strong",null,"You can use SVG icon in any version"),c(" as long as you install it")]),a("p",null,[a("strong",null,"You can click the icon to copy it")])],-1),C=l('<h2 id="icon-attributes" tabindex="-1">Icon Attributes <a class="header-anchor" href="#icon-attributes" aria-hidden="true">#</a></h2><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Acceptable Value</th><th>Default</th></tr></thead><tbody><tr><td>color</td><td>SVG tag&#39;s fill attribute</td><td>Pick&lt;CSSProperties, &#39;color&#39;&gt;</td><td>-</td><td>inherit from color</td></tr><tr><td>size</td><td>SVG icon size, size x size</td><td>number | string</td><td>-</td><td>inherit from font size</td></tr></tbody></table><h2 id="icon-slots" tabindex="-1">Icon Slots <a class="header-anchor" href="#icon-slots" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>\u2014</td><td>customize default content</td></tr></tbody></table><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-hidden="true">#</a></h2><p><a href="https://github.com/element-plus/element-plus/tree/dev/packages/components/icon" target="_blank" rel="noopener noreferrer">Component</a> \u2022 <a href="https://github.com/element-plus/element-plus/blob/dev/docs/en-US/component/icon.md" target="_blank" rel="noopener noreferrer">Docs</a></p><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-hidden="true">#</a></h2>',7),N='{"title":"Icon","description":"","frontmatter":{"title":"Icon","lang":"en-US"},"headers":[{"level":2,"title":"Icon Usage","slug":"icon-usage"},{"level":2,"title":"Installation","slug":"installation"},{"level":3,"title":"Using packaging manager","slug":"using-packaging-manager"},{"level":3,"title":"Register All Icons","slug":"register-all-icons"},{"level":3,"title":"Import in Browser","slug":"import-in-browser"},{"level":3,"title":"Auto Import","slug":"auto-import"},{"level":2,"title":"Simple Usage","slug":"simple-usage"},{"level":2,"title":"Combined with el-icon","slug":"combined-with-el-icon"},{"level":2,"title":"Using SVG icon directly","slug":"using-svg-icon-directly"},{"level":2,"title":"Icon Collection","slug":"icon-collection"},{"level":2,"title":"Icon Attributes","slug":"icon-attributes"},{"level":2,"title":"Icon Slots","slug":"icon-slots"},{"level":2,"title":"Source","slug":"source"},{"level":2,"title":"Contributors","slug":"contributors"}],"relativePath":"en-US/component/icon.md","lastUpdated":1651243562000}',A={},D=Object.assign(A,{setup(V){return(P,E)=>{const e=p("ElIcon"),i=p("ElRow"),g=p("ElButton"),d=p("IconList"),h=p("Contributors");return f(),m("div",null,[_,n(i,null,{default:t(()=>[a("div",null,[n(e,{size:30},{default:t(()=>[n(s(o))]),_:1}),n(s(o))])]),_:1}),b,n(i,null,{default:t(()=>[y,a("div",q,[n(e,{size:20},{default:t(()=>[n(s(o))]),_:1}),n(e,{color:"#409EFC",class:"no-inherit"},{default:t(()=>[n(s(u))]),_:1}),n(e,null,{default:t(()=>[n(s(r))]),_:1}),n(e,{class:"is-loading"},{default:t(()=>[n(s(v))]),_:1}),n(g,{type:"primary"},{default:t(()=>[n(e,{style:{"vertical-align":"middle",color:"#fff"}},{default:t(()=>[n(s(k))]),_:1}),w]),_:1})])]),_:1}),x,n(i,null,{default:t(()=>[a("div",I,[n(s(o),{style:{width:"1em",height:"1em","margin-right":"8px"}}),n(s(u),{style:{width:"1em",height:"1em","margin-right":"8px"}}),n(s(r),{style:{width:"1em",height:"1em","margin-right":"8px"}}),n(s(k),{style:{width:"1em",height:"1em","margin-right":"8px"}})])]),_:1}),S,T,n(d),C,n(h,{id:"icon"})])}}});export{N as __pageData,D as default};
