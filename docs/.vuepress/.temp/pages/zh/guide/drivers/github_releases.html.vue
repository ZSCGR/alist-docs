<template><div><h1 id="github-releases" tabindex="-1"><a class="header-anchor" href="#github-releases"><span>GitHub Releases</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>GitHub API 速率限制：未经身份验证的请求的主要速率限制为每小时 60 个请求。使用个人访问令牌发出 API 请求计入您每小时 5000 个请求的个人速率限制。</p>
</div>
<h2 id="仓库结构" tabindex="-1"><a class="header-anchor" href="#仓库结构"><span>仓库结构</span></a></h2>
<Tabs :data='[{"id":"1"},{"id":"2"}]' tab-id="UrlTree">
<template #title0="{ value, isActive }">1</template>
<template #title1="{ value, isActive }">2</template>
<template #tab0="{ value, isActive }">
<p>最简单的用法，直接写 <code v-pre>所有者/仓库</code>，只能填一个</p>
<h5 id="输入" tabindex="-1"><a class="header-anchor" href="#输入"><span>输入</span></a></h5>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>alistGo/alist</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>与下面的写法效果一致：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>/:alistGo/alist</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<p>挂载到子目录，可以挂多个仓库</p>
<h5 id="输入-1" tabindex="-1"><a class="header-anchor" href="#输入-1"><span>输入</span></a></h5>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>/alist-gh:alistGo/alist</span></span>
<span class="line"><span>/alist-web-gh:alistGo/alist-web</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>最前面的 <code v-pre>/</code> 可以省略：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>alist-gh:alistGo/alist</span></span>
<span class="line"><span>alist-web-gh:alistGo/alist-web</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<br/>
<h2 id="显示-readme、license-文件" tabindex="-1"><a class="header-anchor" href="#显示-readme、license-文件"><span>显示 README、LICENSE 文件</span></a></h2>
<p>开启前：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>alist/</span></span>
<span class="line"><span>├── alist-linux-amd64.tar.gz</span></span>
<span class="line"><span>└── alist-windows-amd64.zip</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开启后：</p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开启后，不显示文件夹总大小和修改时间。</p>
<br/>
<h2 id="令牌" tabindex="-1"><a class="header-anchor" href="#令牌"><span>令牌</span></a></h2>
<p>访问私有仓库时需要，也可减少速率访问限制的影响。访问：<a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer">https://github.com/settings/tokens</a></p>
<br/>
<h2 id="显示所有版本" tabindex="-1"><a class="header-anchor" href="#显示所有版本"><span>显示所有版本</span></a></h2>
<p>开启前：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>alist/</span></span>
<span class="line"><span>├── alist-linux-amd64.tar.gz</span></span>
<span class="line"><span>└── alist-windows-amd64.zip</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开启后：</p>
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
<p>用于加速下载</p>
<ul>
<li>下载 <code v-pre>Releases</code> 的内容要改成 <strong><a href="https://xxxx.com/https://github.com" target="_blank" rel="noopener noreferrer">https://xxxx.com/https://github.com</a></strong></li>
</ul>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="一键复制">
    <span>一键复制</span>
  </div>
  <div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">https://gh-proxy.com/github.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>
</div><div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="一键复制">
    <span>一键复制</span>
  </div>
  <div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">https://ghfast.top/github.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>
</div><div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="一键复制">
    <span>一键复制</span>
  </div>
  <div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">https://ghproxy.net/github.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>
</div><br/>
<h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-94" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></div></template>


