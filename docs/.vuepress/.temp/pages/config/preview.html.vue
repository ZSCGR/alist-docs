<template><div><h1 id="preview-settings" tabindex="-1"><a class="header-anchor" href="#preview-settings"><span>Preview settings</span></a></h1>
<h3 id="text-types" tabindex="-1"><a class="header-anchor" href="#text-types"><span><strong>Text types</strong></span></a></h3>
<p>The extensions of the files you want to preview as text, split by <code v-pre>,</code>, such as <code v-pre>txt,md,go,tsx</code>.</p>
<h3 id="audio-types" tabindex="-1"><a class="header-anchor" href="#audio-types"><span><strong>Audio types</strong></span></a></h3>
<p>The extensions of the files you want to preview as audio, split by <code v-pre>,</code>, such as <code v-pre>mp3,wav,m4a</code>.</p>
<h3 id="video-types" tabindex="-1"><a class="header-anchor" href="#video-types"><span><strong>Video types</strong></span></a></h3>
<p>The extensions of the files you want to preview as video, split by <code v-pre>,</code>, such as <code v-pre>mp4,webm,ogg</code>.</p>
<h3 id="image-types" tabindex="-1"><a class="header-anchor" href="#image-types"><span><strong>Image types</strong></span></a></h3>
<p>The extensions of the files you want to preview as image, split by <code v-pre>,</code>, such as <code v-pre>jpg,jpeg,png,gif,webp</code>.</p>
<h3 id="proxy-types" tabindex="-1"><a class="header-anchor" href="#proxy-types"><span><strong>Proxy types</strong></span></a></h3>
<p>The extensions of the files you want to separately set to download through proxy</p>
<h3 id="proxy-ignore-headers" tabindex="-1"><a class="header-anchor" href="#proxy-ignore-headers"><span><strong>Proxy ignore headers</strong></span></a></h3>
<p>For details, please check:  <strong><a href="https://github.com/alist-org/alist/issues/2763" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/issues/2763</a></strong></p>
<h3 id="external-previews" tabindex="-1"><a class="header-anchor" href="#external-previews"><span><strong>External previews</strong></span></a></h3>
<p>A json object that contains the external preview settings, It is defined as</p>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">interface</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  [</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">extensions</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    [</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B"> string</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> //(url)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>the first key <code v-pre>extensions</code> is the file extensions that split by <code v-pre>,</code>(if it's startsWith <code v-pre>/</code>, it will be considered a regular expression), and the value is also a <code v-pre>key-value</code> object, the key is the preview name, and the value is the external url.</p>
<p>For the external url, we provide some variables for you to use:</p>
<p>Basic variable:</p>
<ul>
<li><code v-pre>$url</code>: the file url</li>
<li><code v-pre>$durl</code>: the file of alist URL</li>
<li><code v-pre>$name</code>: the file name</li>
</ul>
<p>Extended variables:<br>
Add [eb_] before the basic variable, where e means <code v-pre>encodeURIComponent</code>, b means <code v-pre>base64</code>, such as</p>
<ul>
<li><code v-pre>$e_url</code>: encodeURIComponent($url)</li>
<li><code v-pre>$b_url</code>: btoa($url)</li>
<li><code v-pre>$eb_url</code>: encodeURIComponent(btoa($url))</li>
</ul>
<p>Finally, the <code v-pre>External previews</code> will displayed a <code v-pre>Open with</code> menu while current file matched the <code v-pre>extensions</code>.</p>
<p>For example, set <code v-pre>External previews</code> to</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "txt"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "Notepad"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"notepad://$url"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "/.*/"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "VSCode"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"vscode://$url"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>when we enter a file with the extension <code v-pre>txt</code>, it will show:</p>
<p><img src="/img/config/open-with.png" alt="Open-with" loading="lazy"></p>
<h3 id="iframe-previews" tabindex="-1"><a class="header-anchor" href="#iframe-previews"><span><strong>Iframe previews</strong></span></a></h3>
<p>Similar to <code v-pre>External previews</code>, but it will embed an iframe in current page directly.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>If you want to use self-deployed onlyoffice to preview office files, you can add the configuration like this here:</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "doc,docx,xls,xlsx,ppt,pptx"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "OnlyOffice"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"you_only_office_url"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Deploying and using <code v-pre>OnlyOffice</code> Reference:</p>
<ul>
<li><a href="https://github.com/AlistGo/alist/discussions/3255" target="_blank" rel="noopener noreferrer">https://github.com/AlistGo/alist/discussions/3255</a></li>
<li><a href="https://github.com/AlistGo/alist/discussions/8271" target="_blank" rel="noopener noreferrer">https://github.com/AlistGo/alist/discussions/8271</a></li>
</ul>
</div>
<h3 id="audio-cover" tabindex="-1"><a class="header-anchor" href="#audio-cover"><span><strong>Audio cover</strong></span></a></h3>
<p>The default audio cover.</p>
<h3 id="audio-autoplay" tabindex="-1"><a class="header-anchor" href="#audio-autoplay"><span><strong>Audio autoplay</strong></span></a></h3>
<p>Whether to automatically play audio files.</p>
<h3 id="video-autoplay" tabindex="-1"><a class="header-anchor" href="#video-autoplay"><span><strong>Video autoplay</strong></span></a></h3>
<p>Whether to automatically play video files.</p>
<h3 id="preview-by-default-when-opening-archives" tabindex="-1"><a class="header-anchor" href="#preview-by-default-when-opening-archives"><span><strong>Preview by default when opening archives</strong></span></a></h3>
<p>After turning on this option, compressed package format files will be previewed by default (as shown in the figure below), which will consume some server traffic, but will not download them all, If you want to turn off the preferred preview of the compressed format, this option is turned off, and the preference is the download mode</p>
<p><img src="/img/advanced/user_read_archives_light.png" alt="" data-mode="lightmode-only" loading="lazy"></p>
<p><img src="/img/advanced/user_read_archives_dark.png" alt="" data-mode="darkmode-only" loading="lazy"></p>
<h3 id="readme-autorender" tabindex="-1"><a class="header-anchor" href="#readme-autorender"><span><strong>Readme autorender</strong></span></a></h3>
<p>After closing, the content of the <code v-pre>readme.md</code> file will not be automatically rendered at the bottom of the file.</p>
<h3 id="filter-readme-scripts" tabindex="-1"><a class="header-anchor" href="#filter-readme-scripts"><span><strong>Filter readme scripts</strong></span></a></h3>
<p>Prevent virus script attacks. After turning it on, the contents of <code v-pre>readme.md</code> will be displayed in text form. The specific effects are as follows</p>
<ul>
<li>Including but not limited to strikethrough, tables, task lists, etc. displayed in text form</li>
</ul>
<p><img src="/img/config/readme_b.png" alt="" data-mode="lightmode-only" loading="lazy"><br>
<img src="/img/config/readme_h.png" alt="" data-mode="darkmode-only" loading="lazy"></p>
<br/>
<hr>
<h3 id="force-preview" tabindex="-1"><a class="header-anchor" href="#force-preview"><span><strong>Force preview</strong></span></a></h3>
<p>We can force the preview type through the <code v-pre>type</code> query parameter.</p>
<p>Available values:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>UNKNOWN</span></span>
<span class="line"><span>FOLDER</span></span>
<span class="line"><span>VIDEO</span></span>
<span class="line"><span>AUDIO</span></span>
<span class="line"><span>TEXT</span></span>
<span class="line"><span>IMAGE</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example: <code v-pre>http://yourdomain/test-file.ahk?type=text</code></p>
</div></template>


