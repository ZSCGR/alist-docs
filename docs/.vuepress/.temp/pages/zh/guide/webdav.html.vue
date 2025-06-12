<template><div><h1 id="webdav" tabindex="-1"><a class="header-anchor" href="#webdav"><span>WebDAV</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<Badge text="≥ v3.42.0" type="info"/> 以上版本需要在用户 =&gt; 权限 打开 <code v-pre>Webdav 读取</code> 和 <code v-pre>Webdav 管理</code> 这两个权限<ul>
<li>
<p>如果只读不修改则只需要打开 <code v-pre>Webdav 读取</code> 就可以</p>
</li>
<li>
<p>如果对文件进行增删改需要打开 <code v-pre>Webdav 管理</code>权限之外还如需要 <code v-pre>创建目录或上传</code>、<code v-pre>删除</code>、<code v-pre>重命名</code>、<code v-pre>移动</code>、<code v-pre>复制</code> 等权限，根据自己的需求选择性打开</p>
</li>
</ul>
<p>此外，自v3.42.0版本起，写入 WebDAV 除了需要<code v-pre>webdav 管理</code>权限外，还需要<code v-pre>重命名</code>、<code v-pre>删除</code>、<code v-pre>复制</code>等基础权限。</p>
</div>
<br/>
<h2 id="webdav-配置" tabindex="-1"><a class="header-anchor" href="#webdav-配置"><span><strong>WebDAV 配置</strong></span></a></h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>Url</td>
<td>http[s]://domain:port/dav/</td>
</tr>
<tr>
<td>Host</td>
<td>domain</td>
</tr>
<tr>
<td>路径</td>
<td>dav</td>
</tr>
<tr>
<td>协议</td>
<td>http/https</td>
</tr>
<tr>
<td>端口</td>
<td>与网页端一致</td>
</tr>
<tr>
<td>WebDAV用户名</td>
<td>与网页端用户名一致</td>
</tr>
<tr>
<td>WebDAV密码</td>
<td>与网页端密码一致</td>
</tr>
</tbody>
</table>
<p>不会填写？<a href="#webdav-%E5%A1%AB%E5%86%99%E7%A4%BA%E4%BE%8B">点击查看填写示例</a></p>
<br/>
<h2 id="webdav-存储支持" tabindex="-1"><a class="header-anchor" href="#webdav-存储支持"><span><strong>WebDAV 存储支持</strong></span></a></h2>
<table>
<thead>
<tr>
<th>存储类型</th>
<th style="text-align:center">列出文件/文件夹</th>
<th style="text-align:center">下载文件</th>
<th style="text-align:center">创建目录</th>
<th style="text-align:center">重命名</th>
<th style="text-align:center">移动</th>
<th style="text-align:center">复制</th>
<th style="text-align:center">上传文件/文件夹</th>
</tr>
</thead>
<tbody>
<tr>
<td>本地存储</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
</tr>
<tr>
<td>阿里云盘</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
</tr>
<tr>
<td>Onedrive</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
</tr>
<tr>
<td>天翼云盘</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
</tr>
<tr>
<td>GoogleDrive</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">✅</td>
</tr>
<tr>
<td>123pan</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">✅</td>
</tr>
<tr>
<td>FTP</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">✅</td>
</tr>
<tr>
<td>SFTP</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">✅</td>
</tr>
<tr>
<td>PikPak</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
</tr>
<tr>
<td>S3</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
</tr>
<tr>
<td>USS</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
</tr>
<tr>
<td>WebDAV</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
</tr>
<tr>
<td>Teambition</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
</tr>
<tr>
<td>分秒帧</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
</tr>
<tr>
<td>和彩云</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
</tr>
<tr>
<td>YandexDisk</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
</tr>
<tr>
<td>百度网盘</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
</tr>
<tr>
<td>夸克网盘</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
</tr>
<tr>
<td>KodBox</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
</tr>
</tbody>
</table>
<br/>
<h2 id="可以用来挂载webdav的软件" tabindex="-1"><a class="header-anchor" href="#可以用来挂载webdav的软件"><span><strong>可以用来挂载WebDav的软件</strong></span></a></h2>
<ol>
<li><strong>Windows</strong>
<ul>
<li><a href="https://potplayer.daum.net/" target="_blank" rel="noopener noreferrer">Potplayer</a>，<a href="https://www.kmplayer.com/home" target="_blank" rel="noopener noreferrer">kmplayer</a>，<a href="https://www.raidrive.com/" target="_blank" rel="noopener noreferrer">RaiDrive</a>，<a href="https://kodi.tv/download" target="_blank" rel="noopener noreferrer">kodi</a>，<a href="https://www.onecommander.com/" target="_blank" rel="noopener noreferrer">OneCommander</a>，<a href="https://mountainduck.io/" target="_blank" rel="noopener noreferrer">Mountain Duck</a>，<a href="https://www.netdrive.net/" target="_blank" rel="noopener noreferrer">netdrive</a> ❌，<a href="https://rclone.org/" target="_blank" rel="noopener noreferrer">rclone</a>，<a href="https://www.aimp.ru/" target="_blank" rel="noopener noreferrer">AIMP</a></li>
</ul>
</li>
<li><strong>Android</strong>
<ul>
<li><a href="https://www.alipan.com/s/cf3p39UXkxa" target="_blank" rel="noopener noreferrer">Nplayer</a>，<a href="https://www.kmplayer.com/home" target="_blank" rel="noopener noreferrer">kmplayer</a>，ES文件管理器，<a href="https://kodi.tv/download" target="_blank" rel="noopener noreferrer">kodi</a>，<a href="https://www.alipan.com/s/cf3p39UXkxa/folder/63e8dcc229204583fff34f8cbd53dfcd6a86f526" target="_blank" rel="noopener noreferrer">nova魔改</a>，<a href="https://www.alipan.com/s/cf3p39UXkxa/folder/63e8e0027b7473f82cc64bbb9be0a34794c32c07" target="_blank" rel="noopener noreferrer">reex</a>，cx 文件管理器，Solid Explorer，<a href="https://www.lonelycatgames.com/apps/xplore" target="_blank" rel="noopener noreferrer">X-plore File Manager</a>，<a href="https://mixplorer.com/" target="_blank" rel="noopener noreferrer">MiXplorer</a></li>
</ul>
</li>
<li><strong>IOS</strong>
<ul>
<li><a href="https://zh.okaapps.com/product/1659622164" target="_blank" rel="noopener noreferrer">VidHub</a>，Nplayer，<a href="https://www.kmplayer.com/home" target="_blank" rel="noopener noreferrer">kmplayer</a>，infuse，zFuse, Fileball文件管理器</li>
</ul>
</li>
<li><strong>电视TV</strong>
<ul>
<li><a href="https://zh.okaapps.com/product/1659622164" target="_blank" rel="noopener noreferrer">VidHub</a>，<a href="https://www.alipan.com/s/cf3p39UXkxa" target="_blank" rel="noopener noreferrer">Nplayer</a>，<a href="https://kodi.tv/download" target="_blank" rel="noopener noreferrer">kodi</a>，<a href="https://www.alipan.com/s/cf3p39UXkxa/folder/63e8dcc229204583fff34f8cbd53dfcd6a86f526" target="_blank" rel="noopener noreferrer">nova魔改</a></li>
<li>若只看阿里可以使用阿里官方合作的
<ul>
<li>欢视商店-阿里云盘TV版，网盘播放器-阿里云盘TV版</li>
</ul>
</li>
</ul>
</li>
<li><strong>Mac</strong>
<ul>
<li><a href="https://zh.okaapps.com/product/1659622164" target="_blank" rel="noopener noreferrer">VidHub</a>，IINA，<a href="https://mountainduck.io/" target="_blank" rel="noopener noreferrer">Mountain Duck</a>，infuse，<a href="https://www.netdrive.net/" target="_blank" rel="noopener noreferrer">netdrive</a>，<a href="https://rclone.org/" target="_blank" rel="noopener noreferrer">rclone</a></li>
</ul>
</li>
<li><strong>Linux</strong>
<ul>
<li>davfs2，<a href="https://rclone.org/" target="_blank" rel="noopener noreferrer">rclone</a></li>
</ul>
</li>
<li><strong>笔记软件</strong>
<ul>
<li><a href="https://joplinapp.org/" target="_blank" rel="noopener noreferrer">Joplin </a></li>
</ul>
</li>
</ol>
<p>若有合适的欢迎补充~</p>
<h3 id="webdav-填写示例" tabindex="-1"><a class="header-anchor" href="#webdav-填写示例"><span><strong>WebDav 填写示例</strong></span></a></h3>
<p>举几个填写 <strong><code v-pre>WebDav示例</code></strong> 账号密码就是你AList用户的账号密码</p>
<p>基本是这个写法，软件不同写法也可能不同，如果没有单独留路径选项那正常就是在 站点后面添加<code v-pre>/dav</code>选项</p>
<p>下方顶部不同按钮是可以点击查看的</p>
<Tabs :data='[{"id":"Nplayer"},{"id":"reex"},{"id":"ES"},{"id":"Infuse"},{"id":"Fileball"},{"id":"Potplayer"},{"id":"群辉"}]' tab-id="WebDav">
<template #title0="{ value, isActive }">Nplayer</template>
<template #title1="{ value, isActive }">reex</template>
<template #title2="{ value, isActive }">ES</template>
<template #title3="{ value, isActive }">Infuse</template>
<template #title4="{ value, isActive }">Fileball</template>
<template #title5="{ value, isActive }">Potplayer</template>
<template #title6="{ value, isActive }">群辉</template>
<template #tab0="{ value, isActive }">
<p><img src="/img/guide/webdav/nplayer.png" alt="webdav" loading="lazy"></p>
</template>
<template #tab1="{ value, isActive }">
<p><img src="/img/guide/webdav/reex.png" alt="webdav" loading="lazy"></p>
</template>
<template #tab2="{ value, isActive }">
<div class="image-preview">  
    <img src="/img/guide/webdav/es-ios.png" />  
    <img src="/img/guide/webdav/es-android.png" />
</div>
</template>
<template #tab3="{ value, isActive }">
<p><img src="/img/guide/webdav/infuse.png" alt="webdav" loading="lazy"></p>
</template>
<template #tab4="{ value, isActive }">
<p><img src="/img/guide/webdav/fileball.png" alt="webdav" loading="lazy"></p>
</template>
<template #tab5="{ value, isActive }">
<p><img src="/img/guide/webdav/potplayer.png" alt="webdav" loading="lazy"></p>
</template>
<template #tab6="{ value, isActive }">
<p><img src="/img/guide/webdav/nas.png" alt="webdav" loading="lazy"></p>
</template>
</Tabs>
</div></template>


