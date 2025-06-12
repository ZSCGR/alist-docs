<template><div><h1 id="预览设置" tabindex="-1"><a class="header-anchor" href="#预览设置"><span>预览设置</span></a></h1>
<h2 id="文本类型" tabindex="-1"><a class="header-anchor" href="#文本类型"><span><strong>文本类型</strong></span></a></h2>
<p>要作为文本预览的文件扩展名，用 <code v-pre>,</code> 分隔，例如 <code v-pre>txt,md,go,tsx</code>。</p>
<h2 id="音频类型" tabindex="-1"><a class="header-anchor" href="#音频类型"><span><strong>音频类型</strong></span></a></h2>
<p>要作为音频预览的文件扩展名，以 <code v-pre>,</code> 分隔，例如 <code v-pre>mp3,wav,m4a</code>。</p>
<h2 id="视频类型" tabindex="-1"><a class="header-anchor" href="#视频类型"><span><strong>视频类型</strong></span></a></h2>
<p>要作为视频预览的文件扩展名，以 <code v-pre>,</code> 分隔，例如 <code v-pre>mp4,webm,ogg</code>。</p>
<h2 id="图片类型" tabindex="-1"><a class="header-anchor" href="#图片类型"><span><strong>图片类型</strong></span></a></h2>
<p>要作为图像预览的文件扩展名，以 <code v-pre>,</code> 分隔，例如 <code v-pre>jpg,jpeg,png,gif,webp</code>。</p>
<h2 id="代理类型" tabindex="-1"><a class="header-anchor" href="#代理类型"><span><strong>代理类型</strong></span></a></h2>
<p>要通过程序代理下载的文件扩展名</p>
<h2 id="代理忽略头部" tabindex="-1"><a class="header-anchor" href="#代理忽略头部"><span><strong>代理忽略头部</strong></span></a></h2>
<p>详情查看： <strong><a href="https://github.com/alist-org/alist/issues/2763" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/issues/2763</a></strong></p>
<h2 id="外部预览" tabindex="-1"><a class="header-anchor" href="#外部预览"><span><strong>外部预览</strong></span></a></h2>
<p>一个包含外部预览设置的 json 对象，定义为</p>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">interface</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  [</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">extensions</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    [</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B"> string</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> //(url)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一个key <code v-pre>extensions</code> 是用 <code v-pre>,</code> 分割的文件扩展名（如果是 startsWith<code v-pre>/</code> 会被认为是正则表达式），value 也是一个 <code v-pre>key-value</code> 对象，key 是 预览名称，值为外部网址。</p>
<p>对于外部 url，我们提供了一些变量供您使用：</p>
<p>基础变量：</p>
<ul>
<li><code v-pre>$url</code>: the file url</li>
<li><code v-pre>$durl</code>: the file of alist URL</li>
<li><code v-pre>$name</code>: the file name</li>
</ul>
<p>拓展变量：<br>
在基础变量前添加[eb_]，其中e表示<code v-pre>encodeURIComponent</code>，b表示<code v-pre>base64</code>， 如</p>
<ul>
<li><code v-pre>$e_url</code>: encodeURIComponent($url)</li>
<li><code v-pre>$b_url</code>: btoa($url)</li>
<li><code v-pre>$eb_url</code>: encodeURIComponent(btoa($url))</li>
</ul>
<p>最后，当当前文件与“扩展”匹配时，“外部预览”将显示“打开方式”菜单。</p>
<p>例如，将“外部预览”设置为</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "txt"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "Notepad"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"notepad://$url"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "/.*/"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "VSCode"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"vscode://$url"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们输入一个扩展名为 <code v-pre>txt</code> 的文件时，它会显示：</p>
<p><img src="/img/config/open-with.png" alt="Open-with" loading="lazy"></p>
<h2 id="iframe-预览" tabindex="-1"><a class="header-anchor" href="#iframe-预览"><span><strong>iframe 预览</strong></span></a></h2>
<p>类似于 <code v-pre>External previews</code>，但它会直接在当前页面中嵌入 iframe。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果你想使用自部署的onlyoffice预览office文件，可以在这里添加如下配置：</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "doc,docx,xls,xlsx,ppt,pptx"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "OnlyOffice"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"you_only_office_url"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部署和使用 <code v-pre>OnlyOffice</code> 参考：</p>
<ul>
<li><a href="https://github.com/AlistGo/alist/discussions/3255" target="_blank" rel="noopener noreferrer">https://github.com/AlistGo/alist/discussions/3255</a></li>
<li><a href="https://github.com/AlistGo/alist/discussions/8271" target="_blank" rel="noopener noreferrer">https://github.com/AlistGo/alist/discussions/8271</a></li>
</ul>
</div>
<h2 id="音频封面" tabindex="-1"><a class="header-anchor" href="#音频封面"><span><strong>音频封面</strong></span></a></h2>
<p>歌曲无播放封面时显示的默认封面。</p>
<h2 id="自动播放音频" tabindex="-1"><a class="header-anchor" href="#自动播放音频"><span><strong>自动播放音频</strong></span></a></h2>
<p>是否自动播放音频文件。</p>
<h2 id="自动播放视频" tabindex="-1"><a class="header-anchor" href="#自动播放视频"><span><strong>自动播放视频</strong></span></a></h2>
<p>是否自动播放视频文件。</p>
<h2 id="打开压缩包文件时默认预览" tabindex="-1"><a class="header-anchor" href="#打开压缩包文件时默认预览"><span><strong>打开压缩包文件时默认预览</strong></span></a></h2>
<p>打开此选项后，默认会对压缩包格式文件进行预览(如下图所示)，会消耗一些服务器流量，但不会全部下载，如果要关闭压缩包格式首选预览，此选项关闭，首选项就是下载模式</p>
<p><img src="/img/advanced/user_read_archives_light.png" alt="" data-mode="lightmode-only" loading="lazy"></p>
<p><img src="/img/advanced/user_read_archives_dark.png" alt="" data-mode="darkmode-only" loading="lazy"></p>
<h2 id="readme-自动渲染" tabindex="-1"><a class="header-anchor" href="#readme-自动渲染"><span><strong>Readme 自动渲染</strong></span></a></h2>
<p>关闭后 <code v-pre>readme.md</code>文件的内容将不会自动渲染在文件最底部</p>
<h2 id="过滤-readme-文件中的脚本" tabindex="-1"><a class="header-anchor" href="#过滤-readme-文件中的脚本"><span><strong>过滤 Readme 文件中的脚本</strong></span></a></h2>
<p>防止病毒脚本攻击，开启后会以文本形式显示 <code v-pre>readme.md</code> 内容，具体效果如下内容</p>
<ul>
<li>包含但不限于 删除线、表格、任务列表等以文本形式展示</li>
</ul>
<p><img src="/img/config/readme_b.png" alt="" data-mode="lightmode-only" loading="lazy"><br>
<img src="/img/config/readme_h.png" alt="" data-mode="darkmode-only" loading="lazy"></p>
<br/>
<hr>
<h2 id="强制预览" tabindex="-1"><a class="header-anchor" href="#强制预览"><span><strong>强制预览</strong></span></a></h2>
<p>可以通过 <code v-pre>type</code> 请求参数来强制设置预览类型。</p>
<p>可选值:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>UNKNOWN</span></span>
<span class="line"><span>FOLDER</span></span>
<span class="line"><span>VIDEO</span></span>
<span class="line"><span>AUDIO</span></span>
<span class="line"><span>TEXT</span></span>
<span class="line"><span>IMAGE</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例: <code v-pre>http://yourdomain/test-file.ahk?type=text</code></p>
</div></template>


