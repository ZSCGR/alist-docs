<template><div><h1 id="网易云音乐云盘" tabindex="-1"><a class="header-anchor" href="#网易云音乐云盘"><span>网易云音乐云盘</span></a></h1>
<p>网易云音乐云盘需要在手机端才可以进行上传音乐等操作，网页端无法操作</p>
<br/>
<h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie"><span><strong>Cookie</strong></span></a></h2>
<p>进入 <strong><a href="https://music.163.com" target="_blank" rel="noopener noreferrer">https://music.163.com</a></strong> 然后打开F12开发者模式</p>
<p>随意打开一个请求只要携带 <code v-pre>Cookie</code> 找到以下两个参数填写进AList的 <code v-pre>Cookie</code> 中就可以使用</p>
<ul>
<li><strong>__csrf</strong> 、<strong>MUSIC_U</strong></li>
</ul>
<p><img src="/img/drivers/163/163_cookie.png" alt="" loading="lazy"></p>
<br/>
<h2 id="歌曲获取上限" tabindex="-1"><a class="header-anchor" href="#歌曲获取上限"><span><strong>歌曲获取上限</strong></span></a></h2>
<p>默认只能获取200首歌曲，如果你超出可以修改此选项</p>
<br/>
<h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span><strong>注意事项</strong></span></a></h3>
<ol>
<li>如果列表文件很多，建议开启分页加载</li>
<li>云空间只可以上传音频格式文件，无法上传其它格式文件</li>
</ol>
<br/>
<h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-53" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></div></template>


