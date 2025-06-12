<template><div><h1 id="offline-download" tabindex="-1"><a class="header-anchor" href="#offline-download"><span>Offline download</span></a></h1>
<h2 id="please-read-this-tip-before-use" tabindex="-1"><a class="header-anchor" href="#please-read-this-tip-before-use"><span><strong>Please read this tip before use</strong></span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">Please read the following tips carefully</p>
<p>There are two kinds of software with offline download function</p>
<p>The two usages are the same, and the software configuration is set in advance (see the following instructions for specific configuration),</p>
<p>Then go back to the front-end interface, <mark>find the folder you want to upload offline files to, and you can manually enter the folder</mark></p>
<p>Then find the offline download button in the lower right corner, and choose to use Aria2 download or qBittorrent download (&gt;v 3.11.0)</p>
<p>If you use <strong>docker</strong>, please map the following two default paths by yourself. (mapped to the same directory on the host machine)</p>
<ul>
<li><strong>/opt/alist/data/temp/aria2</strong></li>
<li><strong>/opt/alist/data/temp/qBittorrent</strong></li>
</ul>
</div>
<div class="hint-container caution">
<p class="hint-container-title">AList ≥ 3.42.0</p>
<p>AList Version ≥ 3.42.0 View <RouteLink to="/config/other.html">Allow all cloud disks to call other cloud disks' offline download tools</RouteLink></p>
<ul>
<li>
<p>≥ 3.42.0 If you want to use offline download, you need to configure a temporary folder in the background before you can use it (otherwise it will only show <strong>SimpleHttp</strong>)</p>
</li>
<li>
<p>manage ==&gt;  settings ==&gt; other （ <strong><a href="https://explorer.com/@manage/settings/other" target="_blank" rel="noopener noreferrer">https://explorer.com/@manage/settings/other</a></strong> ）</p>
<ul>
<li>If you want to [use/configure] PikPak for offline downloading
<ol>
<li>Mount PikPak storage</li>
<li>Set Pikpak temp dir in the background</li>
<li>Select any folder of this account as a temporary directory
<ul>
<li>If multiple PikPaks are mounted and you want to use that account for offline downloading, then select the directory of that account as the temporary directory.</li>
</ul>
</li>
</ol>
</li>
</ul>
</li>
</ul>
<p><strong>The following applies only to configuration instructions</strong></p>
<br/>
</div>
<h3 id="aria2" tabindex="-1"><a class="header-anchor" href="#aria2"><span><strong>Aria2</strong></span></a></h3>
<p><RouteLink to="/config/other.html"><strong>Click to view instructions for use</strong></RouteLink></p>
<br/>
<h3 id="qbittorrent" tabindex="-1"><a class="header-anchor" href="#qbittorrent"><span><strong>qBittorrent</strong></span></a></h3>
<p>(Here we take the Windows side as an example, I don’t know if there is one on the Linux side)</p>
<p>First of all, we need to configure the default values on the client side of <strong><code v-pre>qBittorrent</code></strong></p>
<p>According to <a href="https://github.com/alist-org/alist/blob/main/internal/bootstrap/data/setting.go#L159-L162" target="_blank" rel="noopener noreferrer">source code</a>, we know that the default values are admin:adminadmin@localhost:8080/</p>
<ul>
<li><strong>ip</strong>: localhost</li>
<li><strong>port</strong>: 8080</li>
<li><strong>user</strong>: admin</li>
<li><strong>password</strong>: adminadmin</li>
</ul>
<ol>
<li>
<p>We fill in the above parameters into the <strong><code v-pre>qBittorrent</code></strong> client, after configuration, we go to the Alist front end to download offline (<strong>method refer to the description at the beginning</strong>)</p>
<ul>
<li>If you are prompted after submitting the offline link: <strong>Qbittorrent not ready</strong>, try restarting both Alist and qBittorrent</li>
</ul>
</li>
<li>
<p>Default value configuration view address: (The link may also change position based on subsequent optimization)</p>
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
<p>Use <strong><code v-pre>qBittorrent</code></strong> to offline <code v-pre>.torrent</code> type files</p>
</li>
</ol>
<ul>
<li>Although you cannot directly add offline <code v-pre>.torrent</code> type files, you can save the country with a curve Reference: <a href="https://github.com/alist-org/alist/issues/2459#issuecomment-1354870010" target="_blank" rel="noopener noreferrer">View method</a></li>
</ul>
<ol start="4">
<li>You can configure it yourself not to delete after the download is complete, but to do seeding, the default is <code v-pre>0</code>, and it will be deleted immediately after uploading</li>
</ol>
<ul>
<li>Modification location: <strong>Alist background</strong> --&gt; <strong>Settings</strong> --&gt; <strong>Qbittorrent seedtime</strong> option, set the time you need to configure, the unit is <code v-pre>minute</code>, after the set seeding time is reached, it will automatically delete</li>
</ul>
<ol start="5">
<li><mark>We can also customize, instead of using the default presets</mark></li>
</ol>
<ul>
<li>Modification location: <strong>Alist Manage</strong> --&gt; <strong>Settings</strong> --&gt; <strong>Qbittorrent url</strong> option, just follow the modification</li>
</ul>
<p><img src="/img/advanced/offline-download.png" alt="Offline download" loading="lazy"></p>
<h4 id="precautions" tabindex="-1"><a class="header-anchor" href="#precautions"><span><strong>Precautions</strong></span></a></h4>
<ol>
<li>Appeared in the background qBittorrent task: <strong><code v-pre>torrent parse timeout</code></strong>, parsing timed out</li>
<li>The torrent can be parsed, but <strong><code v-pre>The system cannot find the path specified.</code></strong> appears when uploading.</li>
</ol>
<p>The above two methods are most likely caused by the qBittorrent software itself, probably because of the green version and the modified version that have undergone some functional castration modifications. It is recommended to go to the official website to download and install it to restore it (the conclusion drawn by myself after stepping on the pit) )</p>
<ul>
<li><strong>qBittorrent</strong> official website: <strong><a href="https://www.qbittorrent.org/" target="_blank" rel="noopener noreferrer">https://www.qbittorrent.org/</a></strong></li>
<li><strong>qBittorrent-Enhanced-Edition</strong> GitHub: <strong><a href="https://github.com/c0re100/qBittorrent-Enhanced-Edition" target="_blank" rel="noopener noreferrer">https://github.com/c0re100/qBittorrent-Enhanced-Edition</a></strong></li>
</ul>
<ol start="3">
<li>Because the <code v-pre>v2.8.3</code> API is used, the minimum version of qBittorrent should be <code v-pre>4.4.0beta2</code> or <code v-pre>4.3.8</code> official version</li>
<li>If <strong>qBittorrent</strong> sets the ip where alist is located to be exempt from authentication, you can directly omit the user name and password before <code v-pre>@</code> (configured on the <strong>qBittorrent</strong> client side)
<ul>
<li>3 and 4 are not mentioned in the video.</li>
</ul>
</li>
</ol>
<p><strong>qBittorrent</strong> Video Tutorials</p>
<BiliBili bvid="BV1NT411q7EN" /><p><strong>If the video fails, you can watch it here: <a href="https://b23.tv/J34qDiG" target="_blank" rel="noopener noreferrer">https://b23.tv/J34qDiG</a></strong></p>
<br/>
<h3 id="simplehttp" tabindex="-1"><a class="header-anchor" href="#simplehttp"><span><strong>SimpleHttp</strong></span></a></h3>
<p>Subsequent supplement</p>
<br/>
<h3 id="transmission" tabindex="-1"><a class="header-anchor" href="#transmission"><span><strong>Transmission</strong></span></a></h3>
<p>Subsequent supplement</p>
<br/>
<h3 id="_115-cloud、pikpak、thunder-pro" tabindex="-1"><a class="header-anchor" href="#_115-cloud、pikpak、thunder-pro"><span><strong>115 Cloud、PikPak、Thunder(Pro)</strong> <Badge text="v3.42.0" type="warning"/></span></a></h3>
<p>Versions <Badge text="v3.42.0" type="info" vertical="middle" /> and above support calling the offline download function in AList</p>
<p>After setting other configuration temporary directory options in the background, select the <span style="color: rgb(24, 144, 255);"><svg fill="none" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="toolbar-toggle hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-ifkxHPo-css" height="1em" width="1em" style="overflow: visible;"><path fill="currentColor" d="M7 14a2 2 0 100-4 2 2 0 000 4zM14 12a2 2 0 11-4 0 2 2 0 014 0zM17 14a2 2 0 100-4 2 2 0 000 4z"></path><path fill="currentColor" fill-rule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" clip-rule="evenodd"></path></svg></span><span style="color: rgb(24, 144, 255);"><svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-iipViGO-css" tips="offline_download" height="1em" width="1em" style="overflow: visible;"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M421.83 293.82A144 144 0 00218.18 90.17M353.94 225.94a48 48 0 00-67.88-67.88"></path><path stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M192 464v-48M90.18 421.82l33.94-33.94M48 320h48"></path><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M286.06 158.06L172.92 271.19a32 32 0 01-45.25 0L105 248.57a32 32 0 010-45.26L218.18 90.17M421.83 293.82L308.69 407a32 32 0 01-45.26 0l-22.62-22.63a32 32 0 010-45.26l113.13-113.17M139.6 169.98l67.88 67.89M275.36 305.75l67.89 67.88"></path> </svg></span> offline download option in the lower right corner of the front-end page to select the corresponding driver offline download function</p>
<ul>
<li>
<p>Support：<code v-pre>magne</code>, <code v-pre>http</code>, <code v-pre>ed2k</code> links</p>
<ul>
<li>PikPak： Also supports: X, TikTok, Facebook, TG URL links</li>
</ul>
</li>
<li>
<p>Some tips for using 115 offline downloads:</p>
<ol>
<li>Out of sync problems may occur (manual refresh in the lower right corner <span style="color: rgb(24, 144, 255);"><svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-ifkxHPo-css" tips="refresh" height="1em" width="1em" style="overflow: visible;"><path fill="none" d="M0 0h24v24H0z"></path><path d="M5.463 4.433A9.961 9.961 0 0112 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 006.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0112 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0013.54 5.772l.997 1.795z"></path></svg></span>)</li>
<li>Currently, when the download is successful, completed tasks in the offline list are deleted.</li>
<li>115 Task URLs that are already in the offline list cannot be added again.</li>
</ol>
</li>
</ul>
<br/>
</div></template>


