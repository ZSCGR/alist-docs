<template><div><h1 id="kodbox" tabindex="-1"><a class="header-anchor" href="#kodbox"><span>KodBox</span></a></h1>
<p>KodBox可道云(原KodExplorer)是业内领先的企业私有云和在线文档管理系统,为个人网站、企业私有云部署、网络存储、在线文档管理、在线办公等提供安全可控,简便易用、可高度定制的私有云产品。采用windows风格界面、操作习惯,无需适应即可快速上手,支持几百种常用文件格式的在线预览、播放和编辑,环境友好,功能强大,是一款一经试用,就再也离不开的私有云产品。同时你也可以将此程序二次开发整合到你现有的系统。</p>
<p>使用本驱动可以挂载kodbox的网盘空间到Alist。</p>
<h2 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id"><span><strong>根文件夹ID</strong></span></a></h2>
<p>假设你有一个网盘空间名为 <code v-pre>个人空间</code>，如果你只想挂载该网盘空间的内容，就要获取<code v-pre>个人空间</code>对应的path；如果你只想展示该网盘空间内一个名为 <code v-pre>abc</code> 的目录，就要获取<code v-pre>个人空间/abc</code>对应的path ，以此类推。</p>
<p>示例：如何获取KodBox网盘空间<code v-pre>个人空间</code>的path，得出path为<code v-pre>{source:5}</code></p>
<blockquote>
<p>在浏览器中打开KodBox网盘空间，在控制台模式下即可看到网盘空间对应的path，不可留空不填。<br>
<img src="/img/drivers/kodbox/kodbox_root_folder_path_zh.jpg" alt="kodbox_root_folder_path" loading="lazy"></p>
</blockquote>
<h2 id="地址" tabindex="-1"><a class="header-anchor" href="#地址"><span><strong>地址</strong></span></a></h2>
<p>你的kodbox服务器地址，形如：</p>
<ul>
<li><code v-pre>https://kodcloud.cc</code></li>
<li><code v-pre>http://192.168.1.24:8000</code></li>
</ul>
<h2 id="用户名" tabindex="-1"><a class="header-anchor" href="#用户名"><span><strong>用户名</strong></span></a></h2>
<p>用于登录你的kodbox服务器的邮箱或用户名。</p>
<h2 id="密码" tabindex="-1"><a class="header-anchor" href="#密码"><span><strong>密码</strong></span></a></h2>
<p>邮箱或用户名对应的密码。</p>
<h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-56" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></div></template>


