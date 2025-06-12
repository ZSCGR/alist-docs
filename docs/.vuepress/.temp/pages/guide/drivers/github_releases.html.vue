<template><div><h1 id="github-releases" tabindex="-1"><a class="header-anchor" href="#github-releases"><span>GitHub Releases</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>GitHub API rate limits: The primary rate limit for unauthenticated requests is 60 requests per hour. Making API requests using a personal access token counts toward your personal rate limit of 5,000 requests per hour.</p>
</div>
<h2 id="repo-structure" tabindex="-1"><a class="header-anchor" href="#repo-structure"><span>Repo Structure</span></a></h2>
<Tabs :data='[{"id":"1"},{"id":"2"}]' tab-id="UrlTree">
<template #title0="{ value, isActive }">1</template>
<template #title1="{ value, isActive }">2</template>
<template #tab0="{ value, isActive }">
<p>The simplest usage is to directly write <code v-pre>owner/repository</code>, only one can be filled in.</p>
<h5 id="input" tabindex="-1"><a class="header-anchor" href="#input"><span>Input</span></a></h5>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>alistGo/alist</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>The effect is the same as the following:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>/:alistGo/alist</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<p>Mount to a subdirectory, you can mount multiple repositories</p>
<h5 id="input-1" tabindex="-1"><a class="header-anchor" href="#input-1"><span>Input</span></a></h5>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>/alist-gh:alistGo/alist</span></span>
<span class="line"><span>/alist-web-gh:alistGo/alist-web</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>The leading <code v-pre>/</code> can be omitted:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>alist-gh:alistGo/alist</span></span>
<span class="line"><span>alist-web-gh:alistGo/alist-web</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<br/>
<h2 id="show-readme-file" tabindex="-1"><a class="header-anchor" href="#show-readme-file"><span>Show README file</span></a></h2>
<p>Off switch：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>alist/</span></span>
<span class="line"><span>├── alist-linux-amd64.tar.gz</span></span>
<span class="line"><span>└── alist-windows-amd64.zip</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>On switch：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>alist/</span></span>
<span class="line"><span>├── v3.41.0/</span></span>
<span class="line"><span>│   ├── alist-linux-amd64.tar.gz</span></span>
<span class="line"><span>│   └── alist-windows-amd64.zip</span></span>
<span class="line"><span>├── v3.40.0/</span></span>
<span class="line"><span>│   ├── alist-linux-amd64.tar.gz</span></span>
<span class="line"><span>│   └── alist-windows-amd64.zip</span></span>
<span class="line"><span>├── LICENSE</span></span>
<span class="line"><span>├── README.md</span></span>
<span class="line"><span>└── README_cn.md</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If enabled, the total size and modification time of the folder will not be displayed.</p>
<br/>
<h2 id="token" tabindex="-1"><a class="header-anchor" href="#token"><span>Token</span></a></h2>
<p>Required when accessing private repositories, and can also reduce the impact of rate limits.</p>
<p>Log in GitHub and visit: <a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer">https://github.com/settings/tokens</a></p>
<br/>
<h2 id="show-all-version" tabindex="-1"><a class="header-anchor" href="#show-all-version"><span>Show all version</span></a></h2>
<p>Off switch:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>alist/</span></span>
<span class="line"><span>├── alist-linux-amd64.tar.gz</span></span>
<span class="line"><span>└── alist-windows-amd64.zip</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>On switch：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>alist/</span></span>
<span class="line"><span>├── v3.41.0/</span></span>
<span class="line"><span>│   ├── alist-linux-amd64.tar.gz</span></span>
<span class="line"><span>│   └── alist-windows-amd64.zip</span></span>
<span class="line"><span>├── v3.40.0/</span></span>
<span class="line"><span>│   ├── alist-linux-amd64.tar.gz</span></span>
<span class="line"><span>│   └── alist-windows-amd64.zip</span></span>
<span class="line"><span>└── v3.39.4/</span></span>
<span class="line"><span>    ├── alist-linux-amd64.tar.gz</span></span>
<span class="line"><span>    └── alist-windows-amd64.zip</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br/>
<h2 id="gh-proxy" tabindex="-1"><a class="header-anchor" href="#gh-proxy"><span><strong>Gh Proxy</strong></span></a></h2>
<p>Used to speed up downloading</p>
<ul>
<li>Download the content of <code v-pre>Releases</code> and change it to <strong><a href="https://xxxx.com/https://github.com" target="_blank" rel="noopener noreferrer">https://xxxx.com/https://github.com</a></strong></li>
</ul>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="Copy">
    <span>Copy</span>
  </div>
  <div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">https://gh-proxy.com/github.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>
</div><div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="Copy">
    <span>Copy</span>
  </div>
  <div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">https://ghfast.top/github.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>
</div><div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="Copy">
    <span>Copy</span>
  </div>
  <div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">https://ghproxy.net/github.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>
</div><br/>
<h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-97" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid></div></template>


