<template><div><h1 id="电信天翼云盘" tabindex="-1"><a class="header-anchor" href="#电信天翼云盘"><span>电信天翼云盘</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>Web端登录已更换为滑动验证码，<strong>不再支持ocr与手动输入</strong>，若需要验证码请使用添加<code v-pre>Cookie进行登录</code>或使用<code v-pre>天翼云盘客户端</code>驱动</p>
</div>
<h2 id="个人云" tabindex="-1"><a class="header-anchor" href="#个人云"><span><strong>个人云</strong></span></a></h2>
<h3 id="用户名" tabindex="-1"><a class="header-anchor" href="#用户名"><span><strong>用户名</strong></span></a></h3>
<p>用于登录的电话号码</p>
<h3 id="密码" tabindex="-1"><a class="header-anchor" href="#密码"><span><strong>密码</strong></span></a></h3>
<p>登录密码</p>
<br/>
<h3 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id"><span><strong>根文件夹ID</strong></span></a></h3>
<p>官网 URL 末尾的字符串，如：</p>
<ul>
<li><a href="https://cloud.189.cn/web/main/file/folder/-11" target="_blank" rel="noopener noreferrer">https://cloud.189.cn/web/main/file/folder/-11</a> -&gt; <code v-pre>-11</code></li>
<li><a href="https://cloud.189.cn/web/main/file/folder/71398114617385472" target="_blank" rel="noopener noreferrer">https://cloud.189.cn/web/main/file/folder/71398114617385472</a> -&gt; <code v-pre>71398114617385472</code><br>
<img src="/img/drivers/189.png" alt="189" loading="lazy"></li>
</ul>
<br/>
<h3 id="家庭转移" tabindex="-1"><a class="header-anchor" href="#家庭转移"><span><strong>家庭转移</strong></span></a></h3>
<p>为189云盘增加个人云使用<code v-pre>家庭云中转选项</code>，方便不开会员且家庭云空间小情况下大量上传。</p>
<ul>
<li>注：旧的上传接口家庭云依然会限制上传量，所以<code v-pre>秒传选项</code>和<code v-pre>旧的上传方式</code>不生效</li>
<li><strong><a href="https://github.com/alist-org/alist/pull/6288" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/pull/6288</a></strong></li>
</ul>
<br/>
<h2 id="家庭云" tabindex="-1"><a class="header-anchor" href="#家庭云"><span><strong>家庭云</strong></span></a></h2>
<p>（天翼云盘客户端驱动专用）使用电脑浏览器，打开开发者工具（F12），切换仿真设备选择手机设备</p>
<p>打开<a href="https://h5.cloud.189.cn/main.html#/family" target="_blank" rel="noopener noreferrer">https://h5.cloud.189.cn/main.html#/family</a> ，进入你想挂载的文件夹，可在网络中看到请求，然后找到所需参数：</p>
<p><img src="/img/drivers/189/189-1.png" alt="189" loading="lazy"></p>
<br/>
<h3 id="alist挂载填写示例" tabindex="-1"><a class="header-anchor" href="#alist挂载填写示例"><span><strong>AList挂载填写示例：</strong></span></a></h3>
<h4 id="天翼云盘" tabindex="-1"><a class="header-anchor" href="#天翼云盘"><span><strong>天翼云盘</strong></span></a></h4>
<p>填写帐号<sup>1</sup>和密码<sup>2</sup>，然后在请求中随便点击一个请求随意点击一个携带<code v-pre>Cookie</code><sup>3</sup>的参数复制填写，Cookie有效期未知。</p>
<p><img src="/img/drivers/189/189-0.png" alt="189" loading="lazy"></p>
<h4 id="天翼云盘客户端" tabindex="-1"><a class="header-anchor" href="#天翼云盘客户端"><span><strong>天翼云盘客户端</strong></span></a></h4>
<p><img src="/img/drivers/189/189-2.png" alt="189" loading="lazy"></p>
<p>视频参考：<strong><a href="https://www.bilibili.com/video/BV16A4y197De" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV16A4y197De</a></strong></p>
<br/>
<h2 id="建议" tabindex="-1"><a class="header-anchor" href="#建议"><span><strong>建议</strong></span></a></h2>
<p>建议首选使用天翼云盘客户端，<RouteLink to="/zh/faq/howto.html#%E6%B7%BB%E5%8A%A0-%E5%A4%A9%E7%BF%BC%E4%BA%91%E7%9B%98%E5%AE%A2%E6%88%B7%E7%AB%AF-%E5%AD%98%E5%82%A8%E6%97%B6-%E6%8F%90%E7%A4%BA-need-img-validate-code-%E9%AA%8C%E8%AF%81%E7%A0%81"><strong>注意事项点击查看</strong></RouteLink></p>
<br/>
<h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-107" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></div></template>


