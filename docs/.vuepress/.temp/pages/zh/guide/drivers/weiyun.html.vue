<template><div><h1 id="腾讯微云" tabindex="-1"><a class="header-anchor" href="#腾讯微云"><span>腾讯微云</span></a></h1>
<p>腾讯微云官网：<strong><a href="https://www.weiyun.com" target="_blank" rel="noopener noreferrer">https://www.weiyun.com</a></strong></p>
<div class="hint-container tip">
<p class="hint-container-title">微云登录有效期提示</p>
<ul>
<li>QQ：登录目前只能保活48小时就得更换cookie</li>
<li>微信：无此问题，用的是token</li>
</ul>
<p>推荐使用微信登录</p>
</div>
<h2 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id"><span><strong>根文件夹ID</strong></span></a></h2>
<ol>
<li>
<p>展示根目录，<strong><code v-pre>留空</code></strong> 就可以不用填写，程序会自动填充</p>
</li>
<li>
<p>如果只展示其中单个文件夹ID，进入想展示的文件夹內然后复制顶部地址栏后面的ID</p>
</li>
</ol>
<p><img src="/img/drivers/weiyun/weiyun_fl_id.png" alt="" loading="lazy"></p>
<h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie"><span><strong>Cookie</strong></span></a></h2>
<p>登录微云后，<strong>打开开发者调试工具(F12)</strong>，在任意请求中找到携带cookie的请求复制填写就可以。</p>
<ul>
<li>微信登录获取的token比QQ登录的cookie字段要长</li>
<li>QQ微信都是填写这个<code v-pre>Cookie</code>字段值，随意找一个请求就能看到</li>
</ul>
<p><img src="/img/drivers/weiyun/weiyun_cookie.png" alt="" loading="lazy"></p>
<h2 id="其他说明" tabindex="-1"><a class="header-anchor" href="#其他说明"><span><strong>其他说明</strong></span></a></h2>
<ol>
<li>复制功能不用</li>
<li><strong>建议不要将微云对外共享，毕竟是绑定的自己QQ号码，如果被封/冻结之后对QQ或者其它产生了重大损失后果自负</strong></li>
</ol>
<h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-80" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFZEOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqQ90QiqPS3N3NTcFG6CsbExqgkmBRUQbaVJ6UWJBRkKmSmphgrRCrFg0WRDMJWalwLlRj+bs+bZnF1Pdi9+PqEt1srKqjg/NzU5J7G42NYW4mVbW1u7RKNooLefdWx/sW7f0yXtULNAqlxS0xTgWmBOtDQDK0gyjIaYGxrkE6urB9T4sqFTTxeXaZnJ2UAtCkp6evopRZllqUXF+sn5ubn5eXoZJbk5yuWpSSmJZbrP1057PnWpEpIeYMgSqQcAEWS3Rg=="></Mermaid></div></template>


