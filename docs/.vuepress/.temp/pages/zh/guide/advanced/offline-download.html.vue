<template><div><h1 id="离线下载" tabindex="-1"><a class="header-anchor" href="#离线下载"><span>离线下载</span></a></h1>
<h2 id="使用前请阅读此提示" tabindex="-1"><a class="header-anchor" href="#使用前请阅读此提示"><span><strong>使用前请阅读此提示</strong></span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">请仔细阅读以下提示</p>
<p>有两款离线下载功能软件</p>
<p>两款用法都一样，提前设置好软件配置(具体配置看下面说明)，</p>
<p>然后回到前端界面， <mark>找到你想把离线文件上传到哪个文件夹，你就手动进入到该文件夹</mark></p>
<p>然后再右下角找到离线下载按钮，自行选择使用 Aria2下载还是qBittorrent下载(＞v 3.11.0)</p>
<p>如果你使用 <strong>docker</strong>，请自行映射以下两个默认路径（映射至宿主机相同的目录）</p>
<ul>
<li>
<p><strong>/opt/alist/data/temp/aria2</strong></p>
</li>
<li>
<p><strong>/opt/alist/data/temp/qBittorrent</strong></p>
</li>
</ul>
</div>
<div class="hint-container caution">
<p class="hint-container-title">AList ≥ 3.42.0</p>
<p>AList版本 ≥ 3.42.0 的查看 <RouteLink to="/zh/config/other.html">允许所有云盘调用其他云盘的离线下载工具</RouteLink></p>
<ul>
<li>
<p>≥ 3.42.0 以上版本如果要使用离线下载要在后台配置一下临时文件夹才可以使用（否则只会显示 <strong>SimpleHttp</strong>）</p>
</li>
<li>
<p>后台 ==&gt;  设置 ==&gt; 其他 （ <strong><a href="https://explorer.com/@manage/settings/other" target="_blank" rel="noopener noreferrer">https://explorer.com/@manage/settings/other</a></strong> ）</p>
<ul>
<li>如果要 [使用/配置] PikPak进行离线下载
<ol>
<li>挂载PikPak存储</li>
<li>后台设置PikPak 临时目录</li>
<li>选择本帐号任意文件夹当作临时目录
<ul>
<li>如果挂载多个PikPak，你想使用那个帐号进行离线下载，那就选择那个帐号的目录作为临时目录</li>
</ul>
</li>
</ol>
</li>
</ul>
</li>
</ul>
<p><strong>以下内容仅适用于配置说明</strong></p>
<br/>
</div>
<h3 id="aria2" tabindex="-1"><a class="header-anchor" href="#aria2"><span><strong>Aria2</strong></span></a></h3>
<p><RouteLink to="/zh/config/other.html"><strong>点击查看使用说明</strong></RouteLink></p>
<br/>
<h3 id="qbittorrent" tabindex="-1"><a class="header-anchor" href="#qbittorrent"><span><strong>qBittorrent</strong></span></a></h3>
<p>（这里以Windows端举例，Linux端不清楚有没有）</p>
<p>首先我们先要在 <strong><code v-pre>qBittorrent</code></strong> 客户端配置好预设值</p>
<p>根据<a href="https://github.com/alist-org/alist/blob/main/internal/bootstrap/data/setting.go#L159-L162" target="_blank" rel="noopener noreferrer">源码</a>我们知道预设值分别是 admin:adminadmin@localhost:8080/</p>
<ul>
<li><strong>ip</strong>：localhost</li>
<li><strong>port</strong>：8080</li>
<li><strong>user</strong>：admin</li>
<li><strong>password</strong>：adminadmin</li>
</ul>
<ol>
<li>
<p>将以上参数我们填写到 <strong><code v-pre>qBittorrent</code></strong> 客户端，配置好后我们去Alist前端进行离线下载（<strong>方法参考开头的说明</strong>）</p>
<ul>
<li>若提交离线链接后提示：<strong>Qbittorrent not ready</strong> 将Alist和qBittorrent都重启试试看</li>
</ul>
</li>
<li>
<p>预设值配置查看地址：(链接也可能会根据后续优化会有位置变动)</p>
<ul>
<li>
<p><strong><a href="https://github.com/AlistGo/alist/blob/main/internal/offline_download/qbit/qbit.go#L28" target="_blank" rel="noopener noreferrer">https://github.com/AlistGo/alist/blob/main/internal/offline_download/qbit/qbit.go#L28</a></strong></p>
</li>
<li>
<p><code v-pre>{ *** Value: &quot;http://admin:adminadmin@localhost:8080/&quot;, Type: conf.TypeString, *** } </code></p>
</li>
</ul>
</li>
<li>
<p>使用 <strong><code v-pre>qBittorrent</code></strong> 来离线 <code v-pre>.torrent</code> 类型的文件</p>
</li>
</ol>
<ul>
<li>虽然不可以直接添加离线<code v-pre>.torrent</code> 类型的文件，可以曲线救国 参考:<a href="https://github.com/alist-org/alist/issues/2459#issuecomment-1354870010" target="_blank" rel="noopener noreferrer">查看方法</a></li>
</ul>
<ol start="4">
<li>可以自行配置下载完毕后不进行删除，进行做种，默认为<code v-pre>0</code>会上传完毕后立即删除</li>
</ol>
<ul>
<li>修改位置：<strong>Alist后台</strong> --&gt; <strong>设置</strong> --&gt; <strong>Qbittorrent 做种时间</strong> 选项，设置你自己需要配置的时间单位是<code v-pre>分钟</code>，到了设置的做种时间后会自动删除</li>
</ul>
<ol start="5">
<li><mark>我们也可以自定义，不使用默认的预设值</mark></li>
</ol>
<ul>
<li>修改位置：<strong>Alist后台</strong> --&gt; <strong>设置</strong> --&gt; <strong>Qbittorrent url</strong> 选项，照着修改即可</li>
</ul>
<p><img src="/img/advanced/offline-download.png" alt="Offline download" loading="lazy"></p>
<h4 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span><strong>注意事项</strong></span></a></h4>
<ol>
<li>在后台qBittorrent任务中出现：<strong><code v-pre>torrent parse timeout</code></strong>，解析超时</li>
<li>可以解析种子下载，但是在上传的时候出现 <strong><code v-pre>The system cannot find the path specified.</code></strong> 找不到路径</li>
</ol>
<p>以上两种办法大概率是因为 qBittorrent 软件本体导致的，可能是因为绿色版,修改版 进行了一些功能阉割 修改导致的，建议去官网下载安装即可恢复（由本人亲自踩坑后得出的结论）</p>
<ul>
<li><strong>qBittorrent</strong>官网：<strong><a href="https://www.qbittorrent.org/" target="_blank" rel="noopener noreferrer">https://www.qbittorrent.org/</a></strong></li>
<li><strong>qBittorrent增强版</strong>GitHub：<strong><a href="https://github.com/c0re100/qBittorrent-Enhanced-Edition" target="_blank" rel="noopener noreferrer">https://github.com/c0re100/qBittorrent-Enhanced-Edition</a></strong></li>
</ul>
<ol start="3">
<li>因为用到了 <code v-pre>v2.8.3</code> 的 API，所以 qBittorrent 的版本最低应该是 <code v-pre>4.4.0beta2</code> 或者 <code v-pre>4.3.8</code> 正式版</li>
<li>如果 <strong>qBittorrent</strong> 设置了 alist 所在的 ip 免验证的话可以直接省略 <code v-pre>@</code> 前面的用户名和密码（在<strong>qBittorrent</strong>客户端配置）
<ul>
<li>3 和 4 是视频中没有提到的.</li>
</ul>
</li>
</ol>
<p><strong>qBittorrent</strong>视频教程</p>
<BiliBili bvid="BV1NT411q7EN" /><p><strong>视频若失效可以前往观看：<a href="https://b23.tv/J34qDiG" target="_blank" rel="noopener noreferrer">https://b23.tv/J34qDiG</a></strong></p>
<br/>
<h3 id="simplehttp" tabindex="-1"><a class="header-anchor" href="#simplehttp"><span><strong>SimpleHttp</strong></span></a></h3>
<p>后续补充</p>
<br/>
<h3 id="transmission" tabindex="-1"><a class="header-anchor" href="#transmission"><span><strong>Transmission</strong></span></a></h3>
<p>后续补充</p>
<br/>
<h3 id="_115、pikpak、迅雷-pro" tabindex="-1"><a class="header-anchor" href="#_115、pikpak、迅雷-pro"><span><strong>115、PikPak、迅雷(Pro)</strong> <Badge text="v3.42.0" type="warning"/></span></a></h3>
<Badge text="v3.42.0" type="warning"/> 及以上版本支持在AList调用离线下载功能<p>在后台设置其他配置临时目录选项后，前端页面右下角选择 <span style="color: rgb(24, 144, 255);"><svg fill="none" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="toolbar-toggle hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-ifkxHPo-css" height="1em" width="1em" style="overflow: visible;"><path fill="currentColor" d="M7 14a2 2 0 100-4 2 2 0 000 4zM14 12a2 2 0 11-4 0 2 2 0 014 0zM17 14a2 2 0 100-4 2 2 0 000 4z"></path><path fill="currentColor" fill-rule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" clip-rule="evenodd"></path></svg></span><span style="color: rgb(24, 144, 255);"><svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-iipViGO-css" tips="offline_download" height="1em" width="1em" style="overflow: visible;"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M421.83 293.82A144 144 0 00218.18 90.17M353.94 225.94a48 48 0 00-67.88-67.88"></path><path stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M192 464v-48M90.18 421.82l33.94-33.94M48 320h48"></path><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M286.06 158.06L172.92 271.19a32 32 0 01-45.25 0L105 248.57a32 32 0 010-45.26L218.18 90.17M421.83 293.82L308.69 407a32 32 0 01-45.26 0l-22.62-22.63a32 32 0 010-45.26l113.13-113.17M139.6 169.98l67.88 67.89M275.36 305.75l67.89 67.88"></path> </svg></span> 离线下载选项选择对应的驱动离线下载功能</p>
<ul>
<li>
<p>支持：<code v-pre>magne</code>、<code v-pre>http</code>、 <code v-pre>ed2k</code> 链接</p>
<ul>
<li>PikPak也支持：X、TikTok、Facebook、TG的网址链接</li>
</ul>
</li>
<li>
<p>使用115离线下载的一些提示</p>
<ol>
<li>可能会发生不同步的问题（手动右下角刷新 <span style="color: rgb(24, 144, 255);"><svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-ifkxHPo-css" tips="refresh" height="1em" width="1em" style="overflow: visible;"><path fill="none" d="M0 0h24v24H0z"></path><path d="M5.463 4.433A9.961 9.961 0 0112 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 006.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0112 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0013.54 5.772l.997 1.795z"></path></svg></span>）</li>
<li>目前当下载成功后，删除离线列表中完成的任务</li>
<li>115已经在离线列表中的任务url不能再次添加</li>
</ol>
</li>
</ul>
<br/>
</div></template>


