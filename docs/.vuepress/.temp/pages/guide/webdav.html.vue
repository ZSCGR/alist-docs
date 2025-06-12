<template><div><h1 id="webdav" tabindex="-1"><a class="header-anchor" href="#webdav"><span>WebDav</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<Badge text="≥ v3.42.0" type="info"/> The above versions need to open the two permissions of <code v-pre>Webdav Read</code> and <code v-pre>Webdav Manage</code> in User =&gt; Permissions<ul>
<li>
<p>If you only read and do not modify, you only need to open <code v-pre>Webdav Read</code></p>
</li>
<li>
<p>If you want to add, delete or modify files, you need to open <code v-pre>Webdav manage</code> permissions and also need <code v-pre>Make dir or upload</code>, <code v-pre>Delete</code>, <code v-pre>Rename</code>, <code v-pre>Move</code>, <code v-pre>Copy</code> and other permissions. You can selectively open them according to your needs.</p>
</li>
</ul>
<p>Besides, since v3.42.0, writing to WebDAV not only requires the <code v-pre>Webdav Manage</code> permission but also basic permissions such as <code v-pre>rename</code>, <code v-pre>delete</code>, and <code v-pre>copy</code>.</p>
</div>
<br/>
<h3 id="webdav-config" tabindex="-1"><a class="header-anchor" href="#webdav-config"><span><strong>WebDAV config</strong></span></a></h3>
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
<td>Path</td>
<td>dav</td>
</tr>
<tr>
<td>Scheme</td>
<td>http/https</td>
</tr>
<tr>
<td>Port</td>
<td>Same as web port</td>
</tr>
<tr>
<td>Username</td>
<td>Same as web username</td>
</tr>
<tr>
<td>Password</td>
<td>Same as web password</td>
</tr>
</tbody>
</table>
<p>Can't fill in? <a href="#webdav-fill-in-example">Click to view Fill in Example</a></p>
<br/>
<h3 id="webdav-support" tabindex="-1"><a class="header-anchor" href="#webdav-support"><span><strong>WebDav Support</strong></span></a></h3>
<table>
<thead>
<tr>
<th>Storage strategy</th>
<th style="text-align:center">list</th>
<th style="text-align:center">download</th>
<th style="text-align:center">mkdir</th>
<th style="text-align:center">rename</th>
<th style="text-align:center">move</th>
<th style="text-align:center">copy</th>
<th style="text-align:center">upload</th>
</tr>
</thead>
<tbody>
<tr>
<td>LocalStorage</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
</tr>
<tr>
<td>AliyunDirve</td>
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
<td>189Cloud</td>
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
<td>Mediatrack</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
</tr>
<tr>
<td>139yun</td>
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
<td>BaiduNetdisk</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
</tr>
<tr>
<td>Quark</td>
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
<h2 id="software-that-can-be-used-to-mount-webdav" tabindex="-1"><a class="header-anchor" href="#software-that-can-be-used-to-mount-webdav"><span><strong>Software that can be used to mount WebDav</strong></span></a></h2>
<ol>
<li><strong>Windows</strong>
<ul>
<li><a href="https://potplayer.daum.net/" target="_blank" rel="noopener noreferrer">Potplayer</a>, <a href="https://www.kmplayer.com/home" target="_blank" rel="noopener noreferrer">kmplayer</a>, RaiDrive, <a href="https://kodi.tv/download" target="_blank" rel="noopener noreferrer">kodi</a>, <a href="https://www.onecommander.com/" target="_blank" rel="noopener noreferrer">OneCommander</a>, <a href="https://mountainduck.io/" target="_blank" rel="noopener noreferrer">Mountain Duck</a>, <a href="https://www.netdrive.net/" target="_blank" rel="noopener noreferrer">netdrive</a>❌, <a href="https://rclone.org/" target="_blank" rel="noopener noreferrer">rclone</a>, <a href="https://www.aimp.ru/" target="_blank" rel="noopener noreferrer">AIMP</a></li>
</ul>
</li>
<li><strong>Android</strong>
<ul>
<li><a href="https://www.aliyundrive.com/s/cf3p39UXkxa" target="_blank" rel="noopener noreferrer">Nplayer</a>, <a href="https://www.kmplayer.com/home" target="_blank" rel="noopener noreferrer">kmplayer</a>, ES File Manager, <a href="https://kodi.tv/download" target="_blank" rel="noopener noreferrer">kodi</a>, <a href="https://www.aliyundrive.com/s/cf3p39UXkxa/folder/63e8dcc229204583fff34f8cbd53dfcd6a86f526" target="_blank" rel="noopener noreferrer">nova nova magic change</a>, <a href="https://www.aliyundrive.com/s/cf3p39UXkxa/folder/63e8e0027b7473f82cc64bbb9be0a34794c32c07" target="_blank" rel="noopener noreferrer">reex</a>, cx File Manager, Solid Explorer, <a href="https://www.lonelycatgames.com/apps/xplore" target="_blank" rel="noopener noreferrer">X-plore File Manager</a>, <a href="https://mixplorer.com/" target="_blank" rel="noopener noreferrer">MiXplorer</a></li>
</ul>
</li>
<li><strong>IOS</strong>
<ul>
<li><a href="https://okaapps.com/product/1659622164" target="_blank" rel="noopener noreferrer">VidHub</a>, Nplayer, <a href="https://www.kmplayer.com/home" target="_blank" rel="noopener noreferrer">kmplayer</a>, infuse, zFuse, Fileball File Manager</li>
</ul>
</li>
<li><strong>电视TV</strong>
<ul>
<li><a href="https://okaapps.com/product/1659622164" target="_blank" rel="noopener noreferrer">VidHub</a>, <a href="https://www.aliyundrive.com/s/cf3p39UXkxa" target="_blank" rel="noopener noreferrer">Nplayer</a>, <a href="https://kodi.tv/download" target="_blank" rel="noopener noreferrer">kodi</a>, <a href="https://www.aliyundrive.com/s/cf3p39UXkxa/folder/63e8dcc229204583fff34f8cbd53dfcd6a86f526" target="_blank" rel="noopener noreferrer">nova nova magic change</a></li>
<li>If you only look at Ali, you can use Ali's official cooperation
<ul>
<li>Huanshi store-Alibaba cloud disk TV version, online disk player-Alibaba cloud disk TV version</li>
</ul>
</li>
</ul>
</li>
<li><strong>Mac</strong>
<ul>
<li><a href="https://okaapps.com/product/1659622164" target="_blank" rel="noopener noreferrer">VidHub</a>, IINA, <a href="https://mountainduck.io/" target="_blank" rel="noopener noreferrer">Mountain Duck</a>, infuse, <a href="https://www.netdrive.net/" target="_blank" rel="noopener noreferrer">netdrive</a>, <a href="https://rclone.org/" target="_blank" rel="noopener noreferrer">rclone</a></li>
</ul>
</li>
<li><strong>Linux</strong>
<ul>
<li>davfs2, <a href="https://rclone.org/" target="_blank" rel="noopener noreferrer">rclone</a></li>
</ul>
</li>
<li><strong>Notes</strong>
<ul>
<li><a href="https://joplinapp.org/" target="_blank" rel="noopener noreferrer">Joplin </a></li>
</ul>
</li>
</ol>
<p>If there is a suitable addition, please add~</p>
<h3 id="webdav-fill-in-example" tabindex="-1"><a class="header-anchor" href="#webdav-fill-in-example"><span><strong>WebDav fill-in example</strong></span></a></h3>
<p>Give a few examples of filling in <strong><code v-pre>WebDav</code></strong>, the account password is the account password of your AList user</p>
<p>This is basically the way of writing, and the way of writing may be different for different software. If there is no separate path option, it is normal to add the <code v-pre>/dav</code> option after the site</p>
<p>The different buttons at the top below can be clicked to view</p>
<Tabs :data='[{"id":"Nplayer"},{"id":"reex"},{"id":"ES"},{"id":"Infuse"},{"id":"Fileball"},{"id":"Potplayer"},{"id":"nas"}]' tab-id="WebDav">
<template #title0="{ value, isActive }">Nplayer</template>
<template #title1="{ value, isActive }">reex</template>
<template #title2="{ value, isActive }">ES</template>
<template #title3="{ value, isActive }">Infuse</template>
<template #title4="{ value, isActive }">Fileball</template>
<template #title5="{ value, isActive }">Potplayer</template>
<template #title6="{ value, isActive }">nas</template>
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
<p></p>
</template>
</Tabs>
</div></template>


