import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.981c3621.js";const g=JSON.parse('{"title":"Przykłady rozszerzeń Markdown 💜","description":"","frontmatter":{},"headers":[],"relativePath":"markdown-examples.md","filePath":"markdown-examples.md"}'),p={name:"markdown-examples.md"},l=e(`<h1 id="przykłady-rozszerzen-markdown-💜" tabindex="-1">Przykłady rozszerzeń Markdown 💜 <a class="header-anchor" href="#przykłady-rozszerzen-markdown-💜" aria-label="Permalink to &quot;Przykłady rozszerzeń Markdown 💜&quot;">​</a></h1><p>Ta strona demonstruje niektóre z wbudowanych rozszerzeń markdown dostarczanych przez VitePress. 🚀</p><h2 id="podswietlanie-składni" tabindex="-1">Podświetlanie składni <a class="header-anchor" href="#podswietlanie-składni" aria-label="Permalink to &quot;Podświetlanie składni&quot;">​</a></h2><p>VitePress zapewnia podświetlanie składni obsługiwane przez <a href="https://github.com/shikijs/shiki" target="_blank" rel="noreferrer">Shiki</a>, z dodatkowymi funkcjami, takimi jak podświetlanie linii:</p><p><strong>Input</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`\`\`js{4}</span></span>
<span class="line"><span style="color:#e1e4e8;">export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">  data () {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return {</span></span>
<span class="line"><span style="color:#e1e4e8;">      msg: &#39;Highlighted!&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\`\`\`js{4}</span></span>
<span class="line"><span style="color:#24292e;">export default {</span></span>
<span class="line"><span style="color:#24292e;">  data () {</span></span>
<span class="line"><span style="color:#24292e;">    return {</span></span>
<span class="line"><span style="color:#24292e;">      msg: &#39;Highlighted!&#39;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">\`\`\`</span></span></code></pre></div><p><strong>Output</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      msg: </span><span style="color:#9ECBFF;">&#39;Highlighted!&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">      msg: </span><span style="color:#032F62;">&#39;Highlighted!&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="kontenery" tabindex="-1">Kontenery <a class="header-anchor" href="#kontenery" aria-label="Permalink to &quot;Kontenery&quot;">​</a></h2><p><strong>Input</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">::: info</span></span>
<span class="line"><span style="color:#E1E4E8;">This is an info box.</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">::: tip</span></span>
<span class="line"><span style="color:#E1E4E8;">This is a tip.</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">::: warning</span></span>
<span class="line"><span style="color:#E1E4E8;">This is a warning.</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">::: danger</span></span>
<span class="line"><span style="color:#E1E4E8;">This is a dangerous warning.</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">::: details</span></span>
<span class="line"><span style="color:#E1E4E8;">This is a details block.</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">::: info</span></span>
<span class="line"><span style="color:#24292E;">This is an info box.</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">::: tip</span></span>
<span class="line"><span style="color:#24292E;">This is a tip.</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">::: warning</span></span>
<span class="line"><span style="color:#24292E;">This is a warning.</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">::: danger</span></span>
<span class="line"><span style="color:#24292E;">This is a dangerous warning.</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">::: details</span></span>
<span class="line"><span style="color:#24292E;">This is a details block.</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span></code></pre></div><p><strong>Output</strong></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>To jest okno informacyjne.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>To jest wskazówka.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>To jest ostrzeżenie.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>To niebezpieczne ostrzeżenie.</p></div><details class="details custom-block"><summary>Details</summary><p>To jest blok szczegółów.</p></details><h2 id="zdjecia" tabindex="-1">Zdjęcia <a class="header-anchor" href="#zdjecia" aria-label="Permalink to &quot;Zdjęcia&quot;">​</a></h2><p><strong>input</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">![An image](https://images.pexels.com/photos/106118/pexels-photo-106118.jpeg)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">![An image](https://images.pexels.com/photos/106118/pexels-photo-106118.jpeg)</span></span></code></pre></div><p><strong>output</strong></p><p><img src="https://images.pexels.com/photos/106118/pexels-photo-106118.jpeg" alt=""></p><h2 id="emotikony" tabindex="-1">Emotikony <a class="header-anchor" href="#emotikony" aria-label="Permalink to &quot;Emotikony&quot;">​</a></h2><p><strong>Input</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">:tada: :100:</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">:tada: :100:</span></span></code></pre></div><p><strong>Output</strong></p><p>🎉 💯</p><p>Szukasz emotem oto <a href="https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json" target="_blank" rel="noreferrer">lista wszystkich emotek</a></p><h2 id="zrodła-wiedzy" tabindex="-1">Źródła wiedzy <a class="header-anchor" href="#zrodła-wiedzy" aria-label="Permalink to &quot;Źródła wiedzy&quot;">​</a></h2><p>Zapoznaj się z dokumentacją <a href="https://vitepress.dev/guide/markdown" target="_blank" rel="noreferrer">pełna lista rozszerzeń markdown</a>.</p>`,30),o=[l];function t(i,c,r,d,h,y){return a(),n("div",null,o)}const k=s(p,[["render",t]]);export{g as __pageData,k as default};
