<template><div><h1 id="蓝奏云盘" tabindex="-1"><a class="header-anchor" href="#蓝奏云盘"><span>蓝奏云盘</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>蓝奏网盘挂载有三种<strong>模式（类型）</strong>，分别是 <strong>账户，cookie</strong> 和 <strong>链接</strong></p>
<ul>
<li><strong>账户</strong>：可以显示自己网盘所有文件，只需要填写帐号密码，会自动帮你刷新cookie</li>
<li><strong>cookie</strong>：可以显示自己网盘所有文件，但是需要提供网盘的cookie</li>
<li><strong>链接</strong>：只能显示链接里面的内容（不需要提供cookie就可以挂载）</li>
</ul>
<p>⚠️ 推荐使用<strong>账户</strong>的方式挂载：</p>
<ul>
<li>cookie模式需要手动更换cookie</li>
<li>用链接模式总是会抽风不知道怎么回事</li>
</ul>
</div>
<h2 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id"><span><strong>根文件夹ID</strong></span></a></h2>
<p>蓝奏云盘根目录ID，默认为<code v-pre>-1</code>，如果使用<code v-pre>链接</code>类型挂载根文件夹ID请看<a href="#%E5%A1%AB%E5%86%99%E8%AF%B4%E6%98%8E">填写说明</a>的第三条</p>
<ul>
<li><strong>其他文件夹ID</strong>
<ul>
<li>两种获取方式（看下图即可）</li>
<li>
<img src="/img/drivers/lanzou/lanzou2.gif" alt="LanZou folder_id" style="zoom:50%;" />
</li>
</ul>
</li>
</ul>
<h2 id="账户" tabindex="-1"><a class="header-anchor" href="#账户"><span><strong>账户</strong></span></a></h2>
<p>只需要填写自己的蓝奏云帐号密码</p>
<h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie"><span><strong>Cookie</strong></span></a></h2>
<p>登录自己的 <a href="https://pc.woozooo.com/" target="_blank" rel="noopener noreferrer"><strong>蓝奏云盘</strong></a> 账号，然后F12打开开发者模式，就能找到 <code v-pre>Cookie</code>，没有具体的，例如图片中左侧的随便点一个然后有右图蓝色部分的 <code v-pre>Cookie</code> 即可.</p>
<p><img src="/img/drivers/lanzou/lanzou1.png" alt="lanzou" loading="lazy"></p>
<h2 id="分享链接和分享密码" tabindex="-1"><a class="header-anchor" href="#分享链接和分享密码"><span><strong>分享链接和分享密码</strong></span></a></h2>
<ul>
<li><strong>分享链接</strong>：在蓝奏云盘内随便生成一个分享链接
<ul>
<li>小提示 ：链接里面的 <strong>lanzouX</strong>，最后这个默认的 <strong>X</strong>内容有时候有些地区打不开，可以自己更换一下试试看比如换成 i,x,u,t 等等等反正好多自己试试看就行.</li>
</ul>
</li>
<li><strong>分享密码</strong> ：链接的密码</li>
</ul>
<h2 id="修复文件信息" tabindex="-1"><a class="header-anchor" href="#修复文件信息"><span><strong>修复文件信息</strong></span></a></h2>
<p>需要 <strong>WebDav</strong> 服务的，需要打开它</p>
<h2 id="错误信息" tabindex="-1"><a class="header-anchor" href="#错误信息"><span><strong>错误信息</strong></span></a></h2>
<p>使用Cookie类型或者账户类型添加提示<code v-pre>not find file page param</code>错误是因为蓝奏云更换了域名</p>
<ul>
<li>解决方案：建议使用账户类型添加
<ul>
<li>把分享链接改成 <code v-pre>https://wwop.lanzoul.com</code>保存即可，如果还是不可以，右下角刷新一下。</li>
<li>后续蓝奏可能还会更改。</li>
</ul>
</li>
</ul>
<h2 id="填写说明" tabindex="-1"><a class="header-anchor" href="#填写说明"><span><strong>填写说明</strong></span></a></h2>
<ol>
<li>
<p><strong>账户模式</strong>：类型选择<code v-pre>账户</code>，填写<code v-pre>账户</code>和<code v-pre>密码</code>选项，以及<code v-pre>根文件夹ID</code>(选填,默认为根目录全部文件)</p>
</li>
<li>
<p><strong>Cookie模式</strong>：类型选择<code v-pre>Cookie</code>，填写<code v-pre>Cookie</code>，以及<code v-pre>根文件夹ID</code>(选填,默认为根目录全部文件)</p>
</li>
<li>
<p><strong>链接模式</strong>：类型选择<code v-pre>链接</code>，填写<code v-pre>分享链接</code>和<code v-pre>根文件夹ID</code>以及 <code v-pre>分享密码(如果有密码)</code>两个选项就可以</p>
<ul>
<li>
<p>分享链接是 👉 <a href="https://xxx.lanzou.com/aaabbbccc" target="_blank" rel="noopener noreferrer">https://xxx.lanzou.com/aaabbbccc</a> 👈 这种格式的</p>
</li>
<li>
<p>在<code v-pre>分享链接</code>填写：<a href="https://xxx.lanzou.com" target="_blank" rel="noopener noreferrer">https://xxx.lanzou.com</a></p>
</li>
<li>
<p>在<code v-pre>根文件夹ID</code>填写：aaabbbccc</p>
</li>
<li>
<p>在<code v-pre>分享密码</code>填写：有密码就写没有就不用写</p>
</li>
</ul>
</li>
</ol>
<p><img src="/img/drivers/lanzou/lanzou_add.png" alt="lanzou" loading="lazy"></p>
<h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-179" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></div></template>


