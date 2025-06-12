<template><div><h1 id="_115-open" tabindex="-1"><a class="header-anchor" href="#_115-open"><span>115 Open</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>使用官方  <a href="https://open.115.com" target="_blank" rel="noopener noreferrer"><strong>115开放平台 API</strong></a> 开发</p>
</div>
<div class="hint-container caution">
<p class="hint-container-title">请仔细阅读注意事项</p>
<p>请规范使用帐号，请勿包含但不限于 <strong><code v-pre>多人共享使用</code></strong>、<strong><code v-pre>图床、软件床</code></strong> 和 <strong><code v-pre>视频外链到视频网站播放</code></strong> 等分发服务以及一些没有提到的不规范使用的方式导致帐号被封禁后果自负</p>
</div>
<br/>
<h2 id="获取刷新令牌" tabindex="-1"><a class="header-anchor" href="#获取刷新令牌"><span><strong>获取刷新令牌</strong></span></a></h2>
<ul>
<li><strong><a href="https://alist.nn.ci/zh/tool/115/token" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/zh/tool/115/token</a></strong></li>
</ul>
<p>手机扫码后点击蓝色按钮即可获取 <code v-pre>refresh token</code></p>
<p>填写时只需要填写 <strong><code v-pre>refresh token</code></strong> 就可以，不需要填写 <code v-pre>access token</code></p>
<p><img src="/img/drivers/115/115_b.png" alt="" data-mode="lightmode-only" loading="lazy"><br>
<img src="/img/drivers/115/115_h.png" alt="" data-mode="darkmode-only" loading="lazy"></p>
<br/>
<h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span><strong>注意事项</strong></span></a></h3>
<div class="hint-container warning">
<p class="hint-container-title">Token 泄漏后处理方法</p>
<p>如果不小心泄漏了 Token，可以前往115设备登录管理解除应用授权</p>
<ul>
<li>115 APP：【<strong>iOS</strong> 、<strong>Android</strong>】版本 需要 ≥ 35.11.0</li>
<li>115 网页端：<strong><a href="https://115.com/?mode=device_manage" target="_blank" rel="noopener noreferrer">https://115.com/?mode=device_manage</a></strong></li>
</ul>
<p>失效后会提示如下内容：</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">failed get objs: failed to list objs: code: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">40140116</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, message: no auth</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>一个帐号可以在同一个应用获取两次<code v-pre>Refresh token</code>，第三次获取后第一次获取到的<code v-pre>Refresh token</code>就会失效，使用第一个<code v-pre>Refresh token</code>会提示上面的错误</p>
<p><img src="/img/drivers/115/115_auth_b.png" alt="" data-mode="lightmode-only" loading="lazy"><br>
<img src="/img/drivers/115/115_auth_h.png" alt="" data-mode="darkmode-only" loading="lazy"></p>
</div>
<br/>
<h3 id="使用其他-app-id-获取刷新令牌" tabindex="-1"><a class="header-anchor" href="#使用其他-app-id-获取刷新令牌"><span><strong>使用其他 APP ID 获取刷新令牌</strong></span></a></h3>
<p>例如使用自己申请的开发者应用ID获取刷新令牌，在获取刷新令牌前先填写应用<code v-pre>APP ID</code>再点击获取刷新令牌按钮</p>
<p><img src="/img/drivers/115/115_b_t.png" alt="" data-mode="lightmode-only" loading="lazy"><br>
<img src="/img/drivers/115/115_h_t.png" alt="" data-mode="darkmode-only" loading="lazy"></p>
<br/>
<h2 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id"><span><strong>根文件夹ID</strong></span></a></h2>
<p>默认根目录ID为：<code v-pre>0</code></p>
<p>打开 115 网盘官网，点击进入要设置的文件夹时点击 URL 中 <code v-pre>cid</code>后面的数字</p>
<p>如 <a href="https://115.com/?cid=249163533602609229&amp;offset=0&amp;tab=&amp;mode=wangpan" target="_blank" rel="noopener noreferrer">https://115.com/?cid=249163533602609229&amp;offset=0&amp;tab=&amp;mode=wangpan</a></p>
<p>这个文件夹的 <code v-pre>根文件夹ID</code> 即为 <code v-pre>249163533602609229</code></p>
<br/>
<h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-94" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></div></template>


