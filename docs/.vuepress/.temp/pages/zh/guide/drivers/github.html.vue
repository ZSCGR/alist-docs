<template><div><h1 id="github-api" tabindex="-1"><a class="header-anchor" href="#github-api"><span>GitHub API</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>GitHub API 不支持操作 100M 或更大的文件，不支持操作含有超过 100,000 个子文件（夹）的文件夹。</p>
<p>本驱动会忽略仓库内的所有<code v-pre>.gitkeep</code>文件。</p>
<p>本驱动暂不支持操作子模块。</p>
</div>
<h2 id="token" tabindex="-1"><a class="header-anchor" href="#token"><span><strong>Token</strong></span></a></h2>
<ol>
<li>登录 GitHub，访问<a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer">https://github.com/settings/tokens</a></li>
<li><img src="/img/drivers/github/1.png" alt="" loading="lazy"></li>
<li><img src="/img/drivers/github/2.png" alt="" loading="lazy"></li>
<li><img src="/img/drivers/github/3.png" alt="" loading="lazy"></li>
</ol>
<h2 id="所有者" tabindex="-1"><a class="header-anchor" href="#所有者"><span><strong>所有者</strong></span></a></h2>
<p>仓库的所有者，比如仓库链接是<code v-pre>github.com/AAA/BBB</code>，这里就填<code v-pre>AAA</code>。</p>
<h2 id="仓库" tabindex="-1"><a class="header-anchor" href="#仓库"><span><strong>仓库</strong></span></a></h2>
<p>仓库名，比如仓库链接是<code v-pre>github.com/AAA/BBB</code>，这里就填<code v-pre>BBB</code>。</p>
<h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用"><span><strong>引用</strong></span></a></h2>
<p>分支名、tag或提交SHA，只有在填写分支名的情况下驱动才可写，不填会使用默认分支。</p>
<h2 id="gh-proxy" tabindex="-1"><a class="header-anchor" href="#gh-proxy"><span><strong>Gh Proxy</strong></span></a></h2>
<p>用于加速下载</p>
<ul>
<li>下载 <code v-pre>Raw</code>、<code v-pre>archive</code> 的内容要改成 <strong><a href="https://gh-proxy.com/raw.githubusercontent.com" target="_blank" rel="noopener noreferrer">https://gh-proxy.com/raw.githubusercontent.com</a></strong></li>
</ul>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="一键复制">
    <span>一键复制</span>
  </div>
  <div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">https://gh-proxy.com/raw.githubusercontent.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>
</div><div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="一键复制">
    <span>一键复制</span>
  </div>
  <div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">https://ghfast.top/raw.githubusercontent.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>
</div><div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="一键复制">
    <span>一键复制</span>
  </div>
  <div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">https://ghproxy.net/raw.githubusercontent.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>
</div><h2 id="gpg-私钥" tabindex="-1"><a class="header-anchor" href="#gpg-私钥"><span><strong>GPG 私钥</strong></span></a></h2>
<p>GPG 私钥，用于提供提交验证功能，经验证的提交会在 GitHub 网页上被标记为绿色的“Verified”，使用以下命令获取，不需要验证功能可以留空。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">gpg</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --export-secret-key</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">密钥对I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">D></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="gpg-私钥密码" tabindex="-1"><a class="header-anchor" href="#gpg-私钥密码"><span><strong>GPG 私钥密码</strong></span></a></h2>
<p>GPG 私钥的密码，没有则留空。</p>
<h2 id="提交者名称" tabindex="-1"><a class="header-anchor" href="#提交者名称"><span><strong>提交者名称</strong></span></a></h2>
<p>自定义提交者名称，不填会使用 Token 的所有者。</p>
<h2 id="提交者邮箱" tabindex="-1"><a class="header-anchor" href="#提交者邮箱"><span><strong>提交者邮箱</strong></span></a></h2>
<p>自定义提交者邮箱，不填会使用 Token 的所有者。</p>
<p>填写“提交者名称”时必填，未填写“提交者名称”时必不填。</p>
<h2 id="作者名称" tabindex="-1"><a class="header-anchor" href="#作者名称"><span><strong>作者名称</strong></span></a></h2>
<p>自定义作者名称，不填会使用 Token 的所有者。</p>
<h2 id="作者邮箱" tabindex="-1"><a class="header-anchor" href="#作者邮箱"><span><strong>作者邮箱</strong></span></a></h2>
<p>自定义作者邮箱，不填会使用 Token 的所有者。</p>
<p>填写“作者名称”时必填，未填写“作者名称”时必不填。</p>
<h2 id="提交信息" tabindex="-1"><a class="header-anchor" href="#提交信息"><span><strong>提交信息</strong></span></a></h2>
<p>自定义提交信息，支持以下模板变量：</p>
<ul>
<li><code v-pre>UserName</code>: 发起操作的用户</li>
<li><code v-pre>ObjName</code>: 被操作文件（夹）的名称</li>
<li><code v-pre>ObjPath</code>: 被操作文件（夹）的路径</li>
<li><code v-pre>ParentName</code>: 被操作文件（夹）的父文件夹名称</li>
<li><code v-pre>ParentPath</code>: 被操作文件（夹）的父文件夹路径</li>
<li><code v-pre>TargetName</code>: （重命名时）新名称（复制、移动时）目标文件夹名称。</li>
<li><code v-pre>TargetPath</code>: （重命名时）新路径（复制、移动时）目标路径</li>
</ul>
<h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-162" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></div></template>


