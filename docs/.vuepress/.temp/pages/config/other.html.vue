<template><div><h1 id="other-settings" tabindex="-1"><a class="header-anchor" href="#other-settings"><span>Other settings</span></a></h1>
<h3 id="aria2" tabindex="-1"><a class="header-anchor" href="#aria2"><span><strong>Aria2</strong></span></a></h3>
<p>Set Aria2 uri and Aria2 for offline download. Aria2 needs to be installed on the same server(container if use docker) as alist.</p>
<br/>
<h2 id="qbittorrent-url" tabindex="-1"><a class="header-anchor" href="#qbittorrent-url"><span><strong>Qbittorrent url</strong></span></a></h2>
<p>Used to customize <strong>Qbittorrent</strong> parameters to configure the client to use</p>
<p>The default value is: <a href="http://admin:adminadmin@localhost:8080/" target="_blank" rel="noopener noreferrer">http://admin:adminadmin@localhost:8080/</a>, you can modify it by referring to <RouteLink to="/guide/advanced/offline-download.html#_2-qbittorrent">specific instructions. </RouteLink></p>
<br/>
<h2 id="_115、pikpak、thunder-pro" tabindex="-1"><a class="header-anchor" href="#_115、pikpak、thunder-pro"><span><strong>115、PikPak、Thunder(Pro)</strong></span></a></h2>
<p><strong>You need to add the corresponding driver first, and then set the temporary directory in the background</strong></p>
<p>Allow the use of offline download tools such as 115/PikPak/Thunder in any storage. If you use offline download in 115/PikPak/Thunder storage, the file will be downloaded directly to the target directory</p>
<ul>
<li>Otherwise, the file will be downloaded to the temporary directory configured by the user, and then transferred to the target directory
<ul>
<li>For example, in the front-end page of the <code v-pre>GoogleDrive</code> storage driver, calling <code v-pre>Pikpak offline-download</code> will first download to the Pikpak temporary folder directory set in the background, and then transfer from Pikpak to the <code v-pre>GoogleDrive</code> file after the Pikpak offline download is completed</li>
</ul>
</li>
<li><strong><a href="https://github.com/AlistGo/alist/pull/7716" target="_blank" rel="noopener noreferrer">https://github.com/AlistGo/alist/pull/7716</a></strong></li>
</ul>
<br/>
<h3 id="token" tabindex="-1"><a class="header-anchor" href="#token"><span><strong>Token</strong></span></a></h3>
<p>The token that can be used to access all API.</p>
<br/>
<h3 id="other" tabindex="-1"><a class="header-anchor" href="#other"><span><strong>other</strong></span></a></h3>
<ol>
<li>
<p>When using it, I found that there are two Aria2, but what is the difference? <RouteLink to="/faq/why.html#what-is-the-difference-between-the-two-aria2"><strong>Click to view the detailed description</strong></RouteLink></p>
</li>
<li>
<p>Support using Aria2 to download folders at the same time and save the folder directory structure style</p>
<ol>
<li>
<p>Configure Aria2 method: <code v-pre>Settings</code> in the lower right corner --&gt; <code v-pre>Aria2 RPC link</code> --&gt; <code v-pre>Aria2 RPC secret key (fill in if any)</code></p>
<ul>
<li>Aria2 is downloaded locally, so you only need to download it locally. Of course, it also supports pushing to other people's computers or your own server or other computers in your own intranet, provided that there is a device on the public network or intranet that has downloaded Aria2</li>
</ul>
</li>
<li>
<p>Opening method, <code v-pre>Toggle Checkbox</code> in the lower right corner--&gt; select list file/folder--&gt; <code v-pre>Download</code> at the bottom--&gt; <code v-pre>send to Aria2</code></p>
</li>
<li>
<p>But it is recommended not to download too much at one time. For example, downloading thousands of folders and tens of thousands of files at one time may cause AList to crash</p>
</li>
</ol>
</li>
</ol>
</div></template>


