<template><div><h1 id="中国联通云盘" tabindex="-1"><a class="header-anchor" href="#中国联通云盘"><span>中国联通云盘</span></a></h1>
<p>云盘地址：<strong><a href="https://pan.wo.cn/" target="_blank" rel="noopener noreferrer">https://pan.wo.cn/</a></strong></p>
<ul>
<li>⚠️ AList 3.19.0版本及以上版本才能使用本驱动</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>AList挂载联通云盘使用的是Web端</p>
<p>如果你先使用工具获取了令牌，再去登录网页端联通云盘会将AList挂载的踢下线导致失效</p>
<p>登录手机端没问题，不会被踢下线，可以同时并存。</p>
</div>
<p>获取令牌工具地址：<strong><a href="https://alist.nn.ci/tool/wopan/token.html" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/tool/wopan/token.html</a></strong></p>
<ul>
<li><img src="/img/drivers/wopan/wopan-tool.png" alt="" loading="lazy"></li>
</ul>
<p><mark>此工具可能因为使用人数过多导致出现图形验证码，若出现图形验证码，则需要手动抓包：</mark></p>
<ul>
<li>打开开发者工具</li>
<li>打开官网 <a href="https://pan.wo.cn/" target="_blank" rel="noopener noreferrer">https://pan.wo.cn/</a> 登录</li>
<li>找到请求内容为这个的请求：<br>
<img src="/img/drivers/wopan/wopan-req.png" alt="" loading="lazy"></li>
<li>在响应中找到token：<br>
<img src="/img/drivers/wopan/wopan-resp.png" alt="" loading="lazy"></li>
</ul>
<h2 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id"><span><strong>根文件夹ID</strong></span></a></h2>
<ul>
<li>
<p>个人云：<strong>0</strong></p>
<ul>
<li>单独文件夹ID：未知(后续补充)</li>
</ul>
</li>
<li>
<p>家庭云：未知(后续补充)</p>
<ul>
<li>家庭云单独文件夹ID：未知(后续补充)</li>
</ul>
</li>
</ul>
<h2 id="类型" tabindex="-1"><a class="header-anchor" href="#类型"><span><strong>类型</strong></span></a></h2>
<p>个人云：将<code v-pre>Family ID</code>空着就是个人云</p>
<p>家庭云：填写<code v-pre>Family ID</code> 未知(后续补充)</p>
<h3 id="alist挂载填写示例" tabindex="-1"><a class="header-anchor" href="#alist挂载填写示例"><span><strong>AList挂载填写示例：</strong></span></a></h3>
<p>将使用工具获取的 <code v-pre>refresh_token填入刷新令牌</code>，<code v-pre>access_token填入访问令牌</code></p>
<p><img src="/img/drivers/wopan/add-wopan.png" alt="" loading="lazy"></p>
<h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-109" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></div></template>


