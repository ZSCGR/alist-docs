<template><div><h1 id="pikpak-share" tabindex="-1"><a class="header-anchor" href="#pikpak-share"><span>PikPak / Share</span></a></h1>
<div class="hint-container caution">
<p class="hint-container-title">Caution</p>
<ol>
<li>
<p><code v-pre>Pikpak</code>：Who makes the request, who can use it</p>
<ul>
<li>For example, if you build an AList on the server with IP <code v-pre>1.1.1.1</code>, but your own IP is <code v-pre>2.2.2.2</code>, you cannot play or download it.</li>
<li>Or enable Proxy policy</li>
</ul>
</li>
</ol>
<hr>
<ol start="2">
<li>
<p><code v-pre>PikPak Share</code>：There is a size limit. After the specified file size is exceeded, only 40%~50% can be played.</p>
<ul>
<li>The specific size of the file is currently unknown</li>
</ul>
</li>
</ol>
</div>
<h2 id="pikpak" tabindex="-1"><a class="header-anchor" href="#pikpak"><span><strong>PikPak</strong></span></a></h2>
<h3 id="username" tabindex="-1"><a class="header-anchor" href="#username"><span><strong>Username</strong></span></a></h3>
<p>email or phone?</p>
<h3 id="password" tabindex="-1"><a class="header-anchor" href="#password"><span><strong>Password</strong></span></a></h3>
<p>password</p>
<br/>
<h3 id="root-folder-id" tabindex="-1"><a class="header-anchor" href="#root-folder-id"><span><strong>Root folder id</strong></span></a></h3>
<p>Can get with <a href="https://mypikpak.com/" target="_blank" rel="noopener noreferrer">https://mypikpak.com/</a> , default <code v-pre>root</code>.</p>
<p><img src="/img/drivers/pikpak.png" alt="image.png" loading="lazy"></p>
<br/>
<h3 id="platform" tabindex="-1"><a class="header-anchor" href="#platform"><span><strong>Platform</strong></span></a></h3>
<p>It is not necessary to use it under normal circumstances, but you may need to use it when you cannot log in directly with your account and password.</p>
<p>If you encounter other problems such as verification code</p>
<ul>
<li>Refer to the <code v-pre>Update</code> section in <strong><a href="https://github.com/alist-org/alist/pull/7024" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/pull/7024</a></strong></li>
</ul>
<br/>
<h3 id="refresh-token" tabindex="-1"><a class="header-anchor" href="#refresh-token"><span><strong>Refresh token</strong></span></a></h3>
<p>After filling in the account and password, select <Badge text="Oauth2" type="info" vertical="middle" /> for <code v-pre>Refresh token method</code> and then save to automatically fill in the refresh token and device information.</p>
<p>If you encounter other problems such as verification code</p>
<ul>
<li>Refer to the <code v-pre>Update</code> section in <strong><a href="https://github.com/alist-org/alist/pull/7024" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/pull/7024</a></strong></li>
</ul>
<br/>
<h3 id="disable-media-link" tabindex="-1"><a class="header-anchor" href="#disable-media-link"><span><strong>Disable media link</strong></span></a></h3>
<ul>
<li><strong><a href="https://github.com/alist-org/alist/issues/4735" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/issues/4735</a></strong></li>
</ul>
<br/>
<h3 id="offline-download" tabindex="-1"><a class="header-anchor" href="#offline-download"><span><strong>Offline Download</strong></span></a></h3>
<Badge text="v3.36.0" type="info" vertical="middle" /> and above versions support calling <code v-pre>Pikpak</code> offline download function in AList<p>Select <span style="color: rgb(24, 144, 255);"><svg fill="none" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="toolbar-toggle hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-ifkxHPo-css" height="1em" width="1em" style="overflow: visible;"><path fill="currentColor" d="M7 14a2 2 0 100-4 2 2 0 000 4zM14 12a2 2 0 11-4 0 2 2 0 014 0zM17 14a2 2 0 100-4 2 2 0 000 4z"></path><path fill="currentColor" fill-rule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" clip-rule="evenodd"></path></svg></span><span style="color: rgb(24, 144, 255);"><svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-iipViGO-css" tips="offline_download" height="1em" width="1em" style="overflow: visible;"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M421.83 293.82A144 144 0 00218.18 90.17M353.94 225.94a48 48 0 00-67.88-67.88"></path><path stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M192 464v-48M90.18 421.82l33.94-33.94M48 320h48"></path><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M286.06 158.06L172.92 271.19a32 32 0 01-45.25 0L105 248.57a32 32 0 010-45.26L218.18 90.17M421.83 293.82L308.69 407a32 32 0 01-45.26 0l-22.62-22.63a32 32 0 010-45.26l113.13-113.17M139.6 169.98l67.88 67.89M275.36 305.75l67.89 67.88"></path> </svg></span> in the lower right corner and select <code v-pre>Pikpak</code> for offline download options</p>
<ul>
<li>
<p>Support: <code v-pre>magne</code>, <code v-pre>http</code>, <code v-pre>ed2k</code> links</p>
</li>
<li>
<p>Also supports: X, TikTok, Facebook, TG URL links</p>
</li>
</ul>
<p>Only Pikpak is supported for offline download. If it is not Pikpak, the following error message will be displayed, Although the offline download prompt was successfully added, an error will be prompted in the background.</p>
<ul>
<li>unsupported storage driver for offline download, only Pikpak is supported</li>
</ul>
<p><img src="/img/drivers/offline_download_error.png" alt="" loading="lazy"></p>
<br/>
<h2 id="pikpak-share-1" tabindex="-1"><a class="header-anchor" href="#pikpak-share-1"><span><strong>PikPak Share</strong></span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p><s>As of <strong>February 4, 2023</strong>, the sharing mount  has been officially banned. Currently, you can only watch the first 4 minutes.Stay tuned for when it will be restored</s></p>
<p><s><strong>v3.12.0 fix,How long it can be used this time is unknown</strong></s></p>
<p>It is known that PIKPAK sharing can only see 40%-50% <strong>(v3.35.0)</strong></p>
</div>
<p>You only need to fill in <strong><code v-pre>Username</code>, <code v-pre>Password</code>, <code v-pre>Shared ID</code></strong> three items, <strong>root folder ID</strong> can be written or not, if not written, the default is the root directory (root directory)</p>
<ul>
<li>Root folder ID: If it is a multi-layer directory, which directory do you want to display as the root directory, you can write which root directory.</li>
<li>Sharing password: if there is a password to share, write it, if not, don’t write it</li>
</ul>
<p><img src="/img/drivers/pik/pik1.png" alt="pik" loading="lazy"></p>
<br/>
<h3 id="platform-1" tabindex="-1"><a class="header-anchor" href="#platform-1"><span><strong>Platform</strong></span></a></h3>
<p>It is not necessary to use it under normal circumstances, but you may need to use it when you cannot log in directly with your account and password.</p>
<p>If you encounter other problems such as verification code</p>
<ul>
<li>Refer to the <code v-pre>Update</code> section in <strong><a href="https://github.com/alist-org/alist/pull/7024" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/pull/7024</a></strong></li>
</ul>
<br/>
<h3 id="use-transcoding-address" tabindex="-1"><a class="header-anchor" href="#use-transcoding-address"><span><strong>Use transcoding address</strong></span></a></h3>
<p>Not enabled by default. When enabled, the download address will use the <strong>transcoded address</strong>, and you can get the <strong>complete transcoded file</strong></p>
<ul>
<li>After turning on the <code v-pre>Use transcoding address</code> option, you cannot use the <code v-pre>AList</code> web version to play the video, but you can <strong>download it normally</strong> or <strong>use a third-party player</strong></li>
</ul>
<br/>
<h3 id="batch-add-pikpak-shared-mounts" tabindex="-1"><a class="header-anchor" href="#batch-add-pikpak-shared-mounts"><span><strong>Batch add PikPak shared mounts</strong></span></a></h3>
<p>software used：<strong><a href="https://github.com/yzbtdiy/alist_batch" target="_blank" rel="noopener noreferrer">https://github.com/yzbtdiy/alist_batch</a></strong></p>
<p>Tutorial video：<strong><a href="https://www.bilibili.com/video/BV1Ps4y1U7Zu" target="_blank" rel="noopener noreferrer">BV1Ps4y1U7Zu</a></strong></p>
<BiliBili bvid="BV1Ps4y1U7Zu" ratio="16:9" low-quality no-danmaku /><br/>
<h2 id="precautions" tabindex="-1"><a class="header-anchor" href="#precautions"><span><strong>Precautions</strong></span></a></h2>
<p><strong>Q</strong>: Prompt when adding storage: <strong>Failed init storage: invalid_account_or_password</strong> What should I do, the password I entered is correct</p>
<p><strong>A</strong>: If the account password is not filled in incorrectly, it may be that you used Google, FB and other third-party quick registration when you registered. Although it seems that the account is a Google mailbox, you cannot log in with the mailbox, but you must use the first Three-party verification, <strong>Alist</strong> does not support this kind of jumping to third-party verification, <strong>so you need to bind an email address in the account settings and set a login password</strong>, or register a new account</p>
<hr>
<p><strong>Q</strong>: Prompt when adding mount: <strong>failed get objs: failed to list objs: Sorry, sharing is not available in the current region</strong></p>
<p><strong>A</strong>: Because access to <sup>PikPak</sup> is prohibited in China, just use a proxy for <code v-pre>AList</code>, how to make <code v-pre>AList</code> use a proxy <a href="https://anwen-anyi.github.io/index/07-wenti.html#_41-alist%E5%A6%82%E4%BD%95-%E4%BD%BF%E7%94%A8-%E5%90%83%E5%88%B0-%E4%BB%A3%E7%90%86-proxy" target="_blank" rel="noopener noreferrer"><strong>One of the reference solutions, this method is limited to Windows build</strong></a></p>
<br/>
<h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-240" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid></div></template>


