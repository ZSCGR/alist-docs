<template><div><h1 id="一刻相册" tabindex="-1"><a class="header-anchor" href="#一刻相册"><span>一刻相册</span></a></h1>
<h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie"><span><strong>Cookie</strong> <Badge text="v3.41.0" type="info" vertical="middle" /></span></a></h2>
<p>登录 <a href="https://photo.baidu.com" target="_blank" rel="noopener noreferrer">一刻相册</a> 打开F12随意找到一个携带 <code v-pre>Cookie</code> 值的请求进行复制就可以</p>
<p><img src="/img/drivers/baidu/yike_cookie.png" alt="" loading="lazy"></p>
<br/>
<h2 id="相薄id" tabindex="-1"><a class="header-anchor" href="#相薄id"><span><strong>相薄ID</strong></span></a></h2>
<ul>
<li>
<p><strong>默认为空时,直接显示根目录全部相册.</strong></p>
</li>
<li>
<p>如果挂载单个相册时需填写如下内容</p>
</li>
<li>
<p>相薄ID 应填：{album_id}|{tid}     示例：4021858707431029901|316519298447849660</p>
</li>
<li>
<p>{album_id} ：进入你需要挂载的相册后,查看顶部链接/album 后的ID就是 {album_id}</p>
<ul>
<li><a href="https://photo.baidu.com/photo/web/album/4021858707431029901" target="_blank" rel="noopener noreferrer">https://photo.baidu.com/photo/web/album/4021858707431029901</a></li>
<li><strong>4021858707431029901</strong>就是 {album_id}</li>
</ul>
</li>
<li>
<p>{tid}:访问 <strong><a href="https://photo.baidu.com/youai/album/v1/list?limit=1000" target="_blank" rel="noopener noreferrer">https://photo.baidu.com/youai/album/v1/list?limit=1000</a></strong> 获取</p>
<ul>
<li>进入界面后<code v-pre>Ctrl+F</code>搜索上面的ID,在下面数几行就可以看到对应的 {tid}</li>
</ul>
</li>
</ul>
<br/>
<h2 id="展示类型" tabindex="-1"><a class="header-anchor" href="#展示类型"><span><strong>展示类型</strong></span></a></h2>
<p>根据自己的需求选择</p>
<br/>
<h2 id="删除源文件" tabindex="-1"><a class="header-anchor" href="#删除源文件"><span><strong>删除源文件</strong></span></a></h2>
<p><i class="fa-solid fa-triangle-exclamation fa-lg" style="color: #ff0000;"></i>‪‪ ‪ 默认只是移除相册，并非真正删除，如果开启此选项删除文件后将会彻底删除，谨慎开启</p>
<br/>
<h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-80" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></div></template>


