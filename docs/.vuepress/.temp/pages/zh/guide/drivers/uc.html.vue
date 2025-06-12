<template><div><h1 id="uc-tv" tabindex="-1"><a class="header-anchor" href="#uc-tv"><span>UC / TV</span></a></h1>
<h2 id="uc-网盘" tabindex="-1"><a class="header-anchor" href="#uc-网盘"><span><strong>UC 网盘</strong></span></a></h2>
<p><strong><a href="https://drive.uc.cn/" target="_blank" rel="noopener noreferrer">https://drive.uc.cn/</a></strong></p>
<br/>
<h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie"><span><strong>Cookie</strong></span></a></h3>
<p>在 <code v-pre>F12</code>任意请求中找到携带 <code v-pre>Cookie</code> 的值</p>
<p><img src="/img/drivers/uc/uc_cookie.png" alt="" loading="lazy"></p>
<br/>
<h3 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id"><span><strong>根文件夹ID</strong></span></a></h3>
<p>根目录ID为 <code v-pre>0</code></p>
<ul>
<li>子文件夹ID进入文件夹后顶部地址栏获取目录ID，如果子目录越深目录ID在地址栏越靠后，想挂载哪个子目录就写那个子目录ID就可以</li>
</ul>
<p><img src="/img/drivers/uc/uc_fileid.png" alt="" loading="lazy"></p>
<br/>
<h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-40" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFZEOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqQ90QiqPS3N3NTcFG6CsbExqgkmBRUQbaVJ6UWJBRkKmSmphgrRCrFg0WRDMJWalwLlRj+bs+bZnF1Pdi9+PqEt1srKqjg/NzU5J7G42NYW4mVbW1u7RKNooLefdWx/sW7f0yXtULNAqlxS0xTgWmBOtDQDK0gyjIaYGxrkE6urB9T4sqFTTxeXaZnJ2UAtCkp6evopRZllqUXF+sn5ubn5eXoZJbk5yuWpSSmJZbrP1057PnWpEpIeYMgSqQcAEWS3Rg=="></Mermaid><h2 id="uc-tv-1" tabindex="-1"><a class="header-anchor" href="#uc-tv-1"><span><strong>UC TV</strong></span></a></h2>
<p>TV 版支持 <code v-pre>302</code>，但是只能 <code v-pre>访问</code> 和 <code v-pre>下载</code> 两个操作，其它操作不支持(接口不支持)</p>
<br/>
<h3 id="添加方式" tabindex="-1"><a class="header-anchor" href="#添加方式"><span><strong>添加方式</strong></span></a></h3>
<ol>
<li>选择 <code v-pre>UCTV</code> 驱动，填写挂载路径，然后保存</li>
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
<p>要挂载的根文件夹，默认为<code v-pre>0</code></p>
<ul>
<li>子文件夹ID进入文件夹后顶部地址栏获取目录ID，如果子目录越深目录ID在地址栏越靠后</li>
</ul>
<p><img src="/img/drivers/uc/uc_fileid.png" alt="" loading="lazy"></p>
<br/>
<h3 id="默认使用的下载方式-1" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式-1"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-106" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></div></template>


