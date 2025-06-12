<template><div><h1 id="cloudreve-v3" tabindex="-1"><a class="header-anchor" href="#cloudreve-v3"><span>Cloudreve V3</span></a></h1>
<h2 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明"><span>参数说明</span></a></h2>
<h3 id="地址" tabindex="-1"><a class="header-anchor" href="#地址"><span>地址</span></a></h3>
<p>Cloudreve V3 服务器的地址，如：<code v-pre>https://www.example.com</code>，最好删掉后面的斜线<code v-pre>/</code>。</p>
<h3 id="鉴权" tabindex="-1"><a class="header-anchor" href="#鉴权"><span>鉴权</span></a></h3>
<p>Cloudreve V3 使用 Cookie 进行鉴权，这意味着挂载鉴权方式分为：</p>
<ol>
<li><code v-pre>用户名</code>+<code v-pre>密码</code>：会自动使用登录接口获取 Cookie，存在验证码问题</li>
<li>仅 <code v-pre>Cookie</code>：参数可从浏览器请求或者本地 Cookie 中找到，有效期未知</li>
<li><RouteLink to="/zh/guide/drivers/common.html#%E5%BC%95%E7%94%A8">引用</RouteLink>：<code v-pre>备注</code>填写 <code v-pre>ref:/{挂载路径}</code>，从 <code v-pre>已挂载的存储</code> 中引用认证、令牌等</li>
</ol>
<p>Cookie 获取方法：</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>仅需要 <code v-pre>cloudreve-session=</code> 后面一串即可。</p>
</div>
<p><img src="/img/drivers/cloudreve/cloudreve_get_cookie.png" alt="cloudreve_get_cookie" loading="lazy"></p>
<h3 id="根文件夹路径" tabindex="-1"><a class="header-anchor" href="#根文件夹路径"><span>根文件夹路径</span></a></h3>
<p>默认为：<code v-pre>/</code>，可从网页链接的 <code v-pre>?path=</code> 中获取。获取到的参数可能需要 <a href="https://www.bing.com/search?q=URL+%E8%A7%A3%E7%A0%81" target="_blank" rel="noopener noreferrer">URL 解码</a>。</p>
<h3 id="启用缩略图和文件夹大小" tabindex="-1"><a class="header-anchor" href="#启用缩略图和文件夹大小"><span>启用缩略图和文件夹大小</span></a></h3>
<p>让 Cloudreve V3 服务端统计每个文件夹的大小并为每个文件生成略缩图，启用可能会造成服务端报错、运行缓慢，默认禁用。</p>
<h3 id="自定义-ua" tabindex="-1"><a class="header-anchor" href="#自定义-ua"><span>自定义 UA</span></a></h3>
<p>用于自定义请求使用的 <code v-pre>User-Agent</code> 头部信息。留空为 Alist 默认。</p>
<h2 id="上传" tabindex="-1"><a class="header-anchor" href="#上传"><span>上传</span></a></h2>
<p>支持上传到的存储策略如下：</p>
<ul>
<li>本机存储</li>
<li>从机存储</li>
<li>OneDrive</li>
<li>S3</li>
</ul>
<p>上传的存储策略请在 Cloudreve V3 网页端进入相应文件夹中进行设置（需要服务端为 Cloudreve Pro）。</p>
<h2 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h2>
<Mermaid id="mermaid-98" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></div></template>


