<template><div><h1 id="dropbox" tabindex="-1"><a class="header-anchor" href="#dropbox"><span>Dropbox</span></a></h1>
<p>Dropbox官网：<a href="https://www.dropbox.com/" target="_blank" rel="noopener noreferrer">https://www.dropbox.com/</a></p>
<h2 id="获取刷新令牌" tabindex="-1"><a class="header-anchor" href="#获取刷新令牌"><span><strong>获取刷新令牌</strong></span></a></h2>
<p>前往：<strong><a href="https://alist.nn.ci/tool/dropbox/request.html" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/tool/dropbox/request.html</a></strong></p>
<ul>
<li>有两种方式，一种是直接使用AList提供的，一种是自己新建应用
<ul>
<li>获取方式如下（推荐使用第二种<sup>{右侧的}</sup>因为AList提供的已经无法新建用户了）</li>
<li>使用右侧自建<code v-pre>客户端ID</code>和<code v-pre>秘钥</code>时，记得授权<sup>{第三张图}</sup></li>
</ul>
</li>
</ul>
<div class="image-preview">  
    <img src="/img/drivers/dropbox/dropbox-1.png" alt="使用自带的获取token" title="使用自带的获取token"/>
    <img src="/img/drivers/dropbox/dropbox-2.png" alt="自己新建客户端获取token" title="自己新建客户端获取token"/>
    <img src="/img/drivers/dropbox/dropbox-2-2.png" alt="自己新建客户端获取token" title="自己新建客户端获取token"/>
</div>
<ul>
<li>
<p>如果使用自己新建的应用需要填写<code v-pre>客户端ID</code>和<code v-pre>客户端秘钥</code></p>
</li>
<li>
<p>获取方式如上图右图（创建应用链接：<strong><a href="https://www.dropbox.com/developers/apps" target="_blank" rel="noopener noreferrer">https://www.dropbox.com/developers/apps</a></strong> ）</p>
</li>
<li>
<p>回调参数链接：<strong><a href="https://alist.nn.ci/tool/dropbox/callback" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/tool/dropbox/callback</a></strong></p>
</li>
</ul>
<p>参考链接：<a href="https://github.com/alist-org/alist/commit/cfee536b96f38e5ba3f3575fab4e89f6c0e1bc5b#commitcomment-119688700" target="_blank" rel="noopener noreferrer"><strong>点击查看</strong></a></p>
<h2 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id"><span><strong>根文件夹ID</strong></span></a></h2>
<p>空为根目录：挂载全部文件</p>
<p>单文件夹ID：进入你需要挂载的文件夹复制顶部链接将<code v-pre>/home</code>后面的填写进去即可</p>
<p><img src="/img/drivers/dropbox/folder_id.png" alt="" loading="lazy"></p>
<h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-67" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></div></template>


