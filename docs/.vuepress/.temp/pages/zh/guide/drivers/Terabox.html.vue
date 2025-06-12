<template><div><h1 id="terabox-海外百度" tabindex="-1"><a class="header-anchor" href="#terabox-海外百度"><span>Terabox(海外百度)</span></a></h1>
<h2 id="刷新令牌" tabindex="-1"><a class="header-anchor" href="#刷新令牌"><span><strong>刷新令牌</strong></span></a></h2>
<p><s><a href="https://www.terabox.com/" target="_blank" rel="noopener noreferrer"><strong>点此登录</strong></a>进行获取刷新令牌，随意找一个请求即可找到 <strong><code v-pre>Cookie</code></strong></s></p>
<p>由于目前网页端已经禁用了F12，我们可以先在别的页面打开F12将 <code v-pre>网络</code> → <code v-pre>保留日志</code> 选项打开</p>
<p><img src="/img/drivers/terabox/terabox_f12.png" alt="f12" style="zoom:150%;" /><br/></p>
<p>然后在从这个标签页地址栏输入 <a href="https://www.terabox.com" target="_blank" rel="noopener noreferrer">https://www.terabox.com</a> 进入网页，就能看到保留的请求，再从保留的请求找找到 <strong><code v-pre>Cookie</code></strong></p>
<p><img src="/img/drivers/terabox/terabox_cookie.png" alt="terabox" loading="lazy"></p>
<br/>
<h2 id="下载接口" tabindex="-1"><a class="header-anchor" href="#下载接口"><span><strong>下载接口</strong></span></a></h2>
<p><strong>下载接口需要选择 <mark><code v-pre>非官方</code></mark></strong> ，才可以使用 <sup>(v3.29)</sup></p>
<br/>
<h2 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id"><span><strong>根文件夹ID</strong></span></a></h2>
<ul>
<li>根目录为 <code v-pre>/</code></li>
<li>挂载其他单个子目录，放一张图参考一下吧
<ul>
<li>
<img src="/img/drivers/terabox/terabox3.png" alt="Demo"/>
</li>
</ul>
</li>
</ul>
<br/>
<h2 id="使用proxy-url链接下载错误" tabindex="-1"><a class="header-anchor" href="#使用proxy-url链接下载错误"><span><strong>使用Proxy Url链接下载错误</strong></span></a></h2>
<p>使用了<RouteLink to="/zh/guide/drivers/common.html#%E4%B8%8B%E8%BD%BD%E4%BB%A3%E7%90%86-url"><strong>Proxy Url</strong></RouteLink>进行下载报错</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"error_code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">31211</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"error_msg"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"access denied"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体原因查看：<strong><a href="https://github.com/alist-org/alist/issues/6508#issuecomment-2171762705" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/issues/6508</a></strong></p>
<br/>
<h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-64" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></div></template>


