<template><div><h1 id="夸克网盘-tv" tabindex="-1"><a class="header-anchor" href="#夸克网盘-tv"><span>夸克网盘 / TV</span></a></h1>
<p><strong><a href="https://pan.quark.cn" target="_blank" rel="noopener noreferrer">https://pan.quark.cn</a></strong></p>
<div class="hint-container caution">
<p class="hint-container-title">警告</p>
<p>由于夸克网盘限速问题，夸克网盘现在只能使用本地代理进行传输，<a href="https://github.com/alist-org/alist/issues/4318#issuecomment-1536214188" target="_blank" rel="noopener noreferrer">说明详见</a></p>
</div>
<h2 id="夸克网盘" tabindex="-1"><a class="header-anchor" href="#夸克网盘"><span><strong>夸克网盘</strong></span></a></h2>
<h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie"><span><strong>Cookie</strong></span></a></h3>
<p>按F12打开“调试”，选中“网络”，随意在左侧选择请求，找到携带 <code v-pre>Cookie</code> 参数的就可以</p>
<p><img src="/img/drivers/quark/quark_cookie.png" alt="quark" loading="lazy"></p>
<br/>
<h3 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id"><span><strong>根文件夹ID</strong></span></a></h3>
<p>根目录ID为 <code v-pre>0</code></p>
<ul>
<li>子文件夹ID进入文件夹后顶部地址栏获取目录ID，如果子目录越深目录ID在地址栏越靠后，想挂载哪个子目录就写那个子目录ID就可以</li>
</ul>
<p><img src="/img/drivers/quark/quark_fileid.png" alt="url" loading="lazy"></p>
<p>注意：请使用Chrome浏览器来获取Cookies，使用Firefox获取的Cookies或仍将停留在访客并请求登录。</p>
<br/>
<h3 id="在线预览-下载-很慢" tabindex="-1"><a class="header-anchor" href="#在线预览-下载-很慢"><span><strong>[在线预览/下载]很慢?</strong></span></a></h3>
<p>夸克云盘下载很慢是因为夸克云盘需要开通<strong>会员</strong>，并且挂载只能<sup>(强制)</sup>使用<code v-pre>本地代理</code>方式，就需要你搭建AList的机器有一个很高的带宽速度</p>
<ul>
<li>
<p>什么是<code v-pre>本地代理</code>？</p>
<ul>
<li><code v-pre>本地代理</code>就是你搭建AList的机器来中转,就是先下载到你搭建AList的机器，再由机器转发给你，你搭建AList的机器速度不够快，再转发给你的速度自然也不够快</li>
</ul>
</li>
</ul>
<ol>
<li>
<p>换带宽高的服务器来中转</p>
</li>
<li>
<p>在自己家里电脑搭建</p>
</li>
<li>
<p>直接放弃不用.</p>
</li>
</ol>
<br/>
<h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-85" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFZEOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqQ90QiqPS3N3NTcFG6CsbExqgkmBRUQbaVJ6UWJBRkKmSmphgrRCrFg0WRDMJWalwLlRj+bs+bZnF1Pdi9+PqEt1srKqjg/NzU5J7G42Nb26Z5dTzu22dra2iUaRQO9/axj+4t1+54uaYeaBVLlkpqmANcCc6KlGVRBZnI2yONKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRIXAAIGjno="></Mermaid><p>说明：<a href="https://github.com/alist-org/alist/issues/4318#issuecomment-1536214188" target="_blank" rel="noopener noreferrer"><strong>alist/issues/4318</strong></a></p>
<br/>
<h2 id="夸克tv" tabindex="-1"><a class="header-anchor" href="#夸克tv"><span><strong>夸克TV</strong></span></a></h2>
<p>TV 版支持 <code v-pre>302</code>，但是只能 <code v-pre>访问</code> 和 <code v-pre>下载</code> 两个操作，其它操作不支持(接口不支持)</p>
<br/>
<h3 id="添加方式" tabindex="-1"><a class="header-anchor" href="#添加方式"><span><strong>添加方式</strong></span></a></h3>
<ol>
<li>选择 <code v-pre>夸克TV / QuarkTV</code> 驱动，填写挂载路径，然后保存</li>
<li>返回全部驱动页面，使用手机APP扫描二维码（如果不显示二维码，驱动右上角点击点击<code v-pre>表格布局</code> 从列表模式切换成表格模式）</li>
<li>扫码确认后，禁用驱动，再启用<code v-pre>驱动</code>即可使用
<ul>
<li><code v-pre>Refresh token 刷新令牌</code>、<code v-pre>Device id 设备ID </code>、<code v-pre>Query token</code> 会自动填充，不需要人工填写
<ul>
<li>请不要进行编辑手动修改</li>
</ul>
</li>
</ul>
</li>
</ol>
<p><img src="/img/drivers/tv_qrcode.png" alt="" loading="lazy"></p>
<br/>
<h3 id="根文件夹id-1" tabindex="-1"><a class="header-anchor" href="#根文件夹id-1"><span><strong>根文件夹ID</strong></span></a></h3>
<p>根目录ID为 <code v-pre>0</code></p>
<ul>
<li>子文件夹ID进入文件夹后顶部地址栏获取目录ID，如果子目录越深目录ID在地址栏越靠后，想挂载哪个子目录就写那个子目录ID就可以</li>
</ul>
<p><img src="/img/drivers/quark/quark_fileid.png" alt="url" loading="lazy"></p>
<br/>
<h3 id="默认使用的下载方式-1" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式-1"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-155" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></div></template>


