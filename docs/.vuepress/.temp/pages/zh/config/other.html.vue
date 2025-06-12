<template><div><h1 id="其他设置" tabindex="-1"><a class="header-anchor" href="#其他设置"><span>其他设置</span></a></h1>
<h2 id="aria2" tabindex="-1"><a class="header-anchor" href="#aria2"><span><strong>Aria2</strong></span></a></h2>
<p>设置 Aria2 URI 以供离线下载。 Aria2 需要和 AList 安装在同一台服务器(如果使用docker则是容器)上。</p>
<br/>
<h2 id="qbittorrent-url" tabindex="-1"><a class="header-anchor" href="#qbittorrent-url"><span><strong>Qbittorrent url</strong></span></a></h2>
<p>用于自定义<strong>Qbittorrent</strong>参数用来配置客户端中使用</p>
<p>预设值为：<a href="http://admin:adminadmin@localhost:8080/" target="_blank" rel="noopener noreferrer">http://admin:adminadmin@localhost:8080/</a><br>
可以参考进行修改，<RouteLink to="/zh/guide/advanced/offline-download.html#_2-qbittorrent">具体说明。</RouteLink></p>
<br/>
<h2 id="_115、pikpak、迅雷-专业版" tabindex="-1"><a class="header-anchor" href="#_115、pikpak、迅雷-专业版"><span><strong>115、PikPak、迅雷(专业版)</strong></span></a></h2>
<p><strong>需要先添加对应的驱动，然后在后台设置临时目录</strong></p>
<p>允许在任意存储使用 115/PikPak/迅雷 等离线下载工具，如果在 115/PikPak/迅雷 存储中使用离线下载，文件会被直接下载到目标目录</p>
<ul>
<li>否则，文件会下载至用户配置的临时目录中，然后转移至目标目录
<ul>
<li>例如在 <code v-pre>GoogleDrive</code>存储驱动前端页面，调用 <code v-pre>Pikpak offline-download</code>，会先下载到后台设置的Pikpak临时文件夹目录，等Pikpak离线下载完毕后，再从Pikpak转移到<code v-pre>GoogleDrive</code>文件里面</li>
</ul>
</li>
<li><strong><a href="https://github.com/AlistGo/alist/pull/7716" target="_blank" rel="noopener noreferrer">https://github.com/AlistGo/alist/pull/7716</a></strong></li>
</ul>
<br/>
<h2 id="token" tabindex="-1"><a class="header-anchor" href="#token"><span><strong>Token</strong></span></a></h2>
<p>可用于访问程序所有 API 的令牌。</p>
<br/>
<h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span><strong>其他</strong></span></a></h3>
<ol>
<li>使用起来时候发现有两个Aria2，但是有什么不同呢? <RouteLink to="/zh/faq/why.html#%E4%B8%A4%E4%B8%AAaria2%E6%9C%89%E4%BB%80%E4%B9%88%E4%B8%8D%E5%90%8C"><strong>点击查看详情说明</strong></RouteLink></li>
<li>支持使用Aria2下载文件夹同时并保存文件夹目录结构样式
<ol>
<li>配置Aria2方式：右下角<code v-pre>设置</code> --&gt; <code v-pre>Aria2 RPC 链接</code> --&gt; <code v-pre>Aria2 RPC 秘钥(如果有要填写)</code>
<ul>
<li>Aria2 下载到自己本地，所以只需要在自己本地下载即可，当然也支持推送到别人电脑或者自己服务器或者自己内网其它电脑，前提是有公网或者内网的设备已经下载了Aria2</li>
</ul>
</li>
<li>开启方式，右下角<code v-pre>开启复选框</code>--&gt; 选择列表文件/夹--&gt;底部<code v-pre>下载</code>--&gt;<code v-pre>发送到Aria2</code></li>
<li>但是建议别一次性下载太多例如一次性下载上千个文件夹然后上万个文件.</li>
</ol>
</li>
</ol>
</div></template>


