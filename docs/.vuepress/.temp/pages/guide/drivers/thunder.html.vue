<template><div><h1 id="thunder-cloud-disk" tabindex="-1"><a class="header-anchor" href="#thunder-cloud-disk"><span>Thunder Cloud Disk</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Please use Thunder directly instead of ThunderExpert if you are not good at it.</p>
<p>ThunderExpert mainly provides more free settings and realizes more login methods</p>
<hr>
<p>Thunder X serves overseas users. As of the time of document release, only the Android version is available. Other versions have not yet been released.</p>
<ul>
<li>Thunder X has sufficient speed even without membership. Future changes are unknown.</li>
<li>Using the APP may require a proxy, but not when mounted on AList.</li>
</ul>
<hr>
<p>Thunder Browser：Currently only supports mobile phones (Android, iOS)</p>
<ul>
<li><strong><a href="https://x.xunlei.com/" target="_blank" rel="noopener noreferrer">https://x.xunlei.com/</a></strong></li>
<li>If you log in to AList, the mobile phone will be kicked offline. On the contrary, if you log in to AList first and then log in to the mobile phone, AList will be kicked offline but there will be no prompt</li>
</ul>
</div>
<Tabs :data='[{"id":"Thunder"},{"id":"ThunderExpert"},{"id":"Thunder  X"},{"id":"Thunder  X Expert"},{"id":"Thunder  Browser"},{"id":"Thunder Browser Expert"}]' tab-id="thunder">
<template #title0="{ value, isActive }">Thunder</template>
<template #title1="{ value, isActive }">ThunderExpert</template>
<template #title2="{ value, isActive }">Thunder  X</template>
<template #title3="{ value, isActive }">Thunder  X Expert</template>
<template #title4="{ value, isActive }">Thunder  Browser</template>
<template #title5="{ value, isActive }">Thunder Browser Expert</template>
<template #tab0="{ value, isActive }">
<h3 id="username" tabindex="-1"><a class="header-anchor" href="#username"><span><strong>username</strong></span></a></h3>
<p>That is, the mobile phone number, email, and username used for login (there is a probability that you cannot log in, you need to try)</p>
<ul>
<li>You need to bring the <code v-pre>+86</code> area code, for example +8613722223333 fill in like this</li>
</ul>
<br/>
<h3 id="password" tabindex="-1"><a class="header-anchor" href="#password"><span><strong>password</strong></span></a></h3>
<p>password for login</p>
<br/>
<h3 id="captchatoken" tabindex="-1"><a class="header-anchor" href="#captchatoken"><span><strong>CaptchaToken</strong></span></a></h3>
<p>Need verify: {url} may appear when logging in or uploading, please visit the link in the error to complete the verification and get CaptchaToken (verification code)</p>
<p><img src="/img/drivers/xunlei/x1.png" alt="xunlei" loading="lazy"></p>
<p>Fill in the mount directory ID account password and save it, there will be a big lump in the upper right corner (cannot be copied),</p>
<p>Let's go back to adding an account to copy from Https to the end to a new window to get the verification code parameter (CaptchaToken)</p>
<p>See the image below to add</p>
<p><img src="/img/drivers/xunlei/x2.png" alt="xunlei" loading="lazy"></p>
<br/>
<h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-91" code="eJyNkL1uwjAURnee4gpWHBQooFpKK1WMnapWHaIMjn1dWzhxajskefuaNCA6VMKL/75z7HsJIbOgg0EKn0pzBcJ2tbFMQIVBWQHaQ+tRQDmAQMlaE55nZ0ga23HFXID3lxnE4cNgEHgKUhtDF2Uplz44e0S6kLvdtCadFkHRddMvuTXWxTspb3C2nnAp99v99mrYbDZ/DQ9N/4u15ZdjjQItMIUcivGUp+OEtZi2ubGcGWic7YeCUupthdww77NsqirLsie2zmOtDvC71U2FdZhs5+ABJVypyycfd2OgTPPDpW3jE/Dx9lqQhJmArmZBnzAh/9s1P0YFzJNkJVzMOr/itqpsnahQmUWHpWAn0tgYHOY3TOz1ncwPx9ee1g=="></Mermaid></template>
<template #tab1="{ value, isActive }">
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>If Xunlei needs to download, you must specify UserAgent (same as DownUserAgent below)<br>
Or use the proxy function in this program to transfer.</p>
</div>
<h3 id="login-type" tabindex="-1"><a class="header-anchor" href="#login-type"><span><strong>Login Type</strong></span></a></h3>
<ol>
<li>
<p>When selecting User, you only need to fill in the username and password</p>
<ul>
<li>User You need to bring the <code v-pre>+86</code> area code, for example +8613722223333 fill in like this</li>
</ul>
</li>
<li>
<p><strong>RefreshToken</strong>: Just fill in RefreshToken when selecting RefreshToken</p>
</li>
</ol>
<br/>
<h3 id="signature-type" tabindex="-1"><a class="header-anchor" href="#signature-type"><span><strong>Signature Type</strong></span></a></h3>
<p><strong>Algorithms</strong>：When selecting Algorithms, just fill in the Algorithms (it is difficult to obtain, and needs to be reversed)</p>
<p><strong>Captcha sign</strong>: Only fill in CaptchaSign and Timestamp when selecting CaptchaSign</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>//signature algorithm</span></span>
<span class="line"><span>str = ClientID + ClientVersion + PackageName + DeviceID + Timestamp</span></span>
<span class="line"><span>for (Algorithm in Algorithms) {</span></span>
<span class="line"><span>    str = md5(str + Algorithm)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>CaptchaSign = "1." + str</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Login type and Sign type recommended options</p>
<p><img src="/img/drivers/xunlei/x3.png" alt="xunlei" loading="lazy"></p>
<br/>
<h3 id="deviceid" tabindex="-1"><a class="header-anchor" href="#deviceid"><span><strong>DeviceID</strong></span></a></h3>
<p>The value calculated by md5 is used to determine the logged in device</p>
<h3 id="clientid-clientsecret-clientversion-packagename" tabindex="-1"><a class="header-anchor" href="#clientid-clientsecret-clientversion-packagename"><span><strong>ClientID, ClientSecret, ClientVersion, PackageName</strong></span></a></h3>
<p>It is related to the signature, fill in according to the actual situation</p>
<h3 id="useragent" tabindex="-1"><a class="header-anchor" href="#useragent"><span><strong>UserAgent</strong></span></a></h3>
<p>UserAgent used by API requests, may be inaccessible or speed limited if the setting is incorrect</p>
<h3 id="downuseragent" tabindex="-1"><a class="header-anchor" href="#downuseragent"><span><strong>DownUserAgent</strong></span></a></h3>
<p>The User Agent used for downloading, if the setting is wrong, it will not be downloaded (it will be used when the agent is turned on) Fixed parameters:<br>
<strong>Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36</strong></p>
<br/>
<h2 id="key-data-acquisition-process" tabindex="-1"><a class="header-anchor" href="#key-data-acquisition-process"><span><strong>Key data acquisition process</strong></span></a></h2>
<p>Obtain Xunlei request data through network analysis tools (packet capture tools) --- Please read the following information carefully</p>
<p>Open Xunlei and log in to your account (the picture below uses the PC client to operate, and the web terminal is also available)</p>
<p>Included in the request <a href="https://xluser-ssl.xunlei.com/v1/shield/captcha/init" target="_blank" rel="noopener noreferrer">https://xluser-ssl.xunlei.com/v1/shield/captcha/init</a><br>
CaptchaSign, Timestamp, DeviceID, ClientID, ClientVersion, PackageName, User-Agent</p>
<p><strong>Note</strong>: After obtaining the information of the two pictures, slowly select the data from the two data captured and fill in it</p>
<p>After logging in to Thunder and opening the packet capture tool, it is possible that the information of <strong>v1/shield/captcha/init</strong> cannot be immediately obtained at this time.</p>
<p>Do not close the Xunlei PC client and the packet capture tool, just wait, it will refresh automatically after <strong>5 minutes</strong></p>
<p>You will see the parameters as shown in the figure below, and you can fill in it according to the acquisition (if you can't see it clearly, you can right-click to copy the picture and link it to the browser to open a new window)</p>
<p>See <strong>v1/shield/captcha/init</strong> and grab it, please <strong>immediately don't delay for a second</strong> Right-click Xunlei in the taskbar in the lower right corner to exit, exit completely and then reopen to get * <em>Figure II</em>*</p>
<p><img src="/img/drivers/xunlei/x4.png" alt="xunlei" loading="lazy"></p>
<p>Restarting Thunder will refresh the token</p>
<p>The request to <a href="https://xluser-ssl.xunlei.com/v1/auth/token" target="_blank" rel="noopener noreferrer">https://xluser-ssl.xunlei.com/v1/auth/token</a> contains RefreshToken (please use the returned value), ClientSecret (does not exist on the web side)</p>
<p><img src="/img/drivers/xunlei/x5.png" alt="xunlei" loading="lazy"></p>
<p>Figure 1 contains <strong>7</strong> parameters | Figure 1 contains <strong>2</strong> parameters | a fixed parameter (Down UserAgent), ten parameters and 3 options and a mount path, just write and save, before saving Remember to check~</p>
<br/>
<h3 id="thunderexpert-complete-parameter-filling-demo" tabindex="-1"><a class="header-anchor" href="#thunderexpert-complete-parameter-filling-demo"><span><strong>ThunderExpert complete parameter filling demo:</strong></span></a></h3>
<p><img src="/img/drivers/xunlei/x6.png" alt="xunlei" loading="lazy"></p>
<br/>
<h3 id="the-default-download-method-used-1" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used-1"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-217" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid><p></p>
</template>
<template #tab2="{ value, isActive }">
<h3 id="username、password" tabindex="-1"><a class="header-anchor" href="#username、password"><span><strong>username、password</strong></span></a></h3>
<p>The mailbox and password used for login</p>
<br/>
<h3 id="captchatoken-1" tabindex="-1"><a class="header-anchor" href="#captchatoken-1"><span><strong>CaptchaToken</strong></span></a></h3>
<p>It will be filled automatically without filling in manually</p>
<br/>
<h3 id="root-folder-id" tabindex="-1"><a class="header-anchor" href="#root-folder-id"><span><strong>Root folder id</strong></span></a></h3>
<p>The default is the full directory of the empty display, If you want to use a subfolder to make the root directory, grab the request to get it</p>
<ul>
<li>In the request in the package<code v-pre>https://api-pan.xunleix.com/drive/v1/files?parent_id=&amp;page_token=&amp;filters=</code>，you can get the following parameters
<ul>
<li><code v-pre>文件夹ID（id）</code></li>
<li><code v-pre>文件夹名称（name）</code></li>
<li><code v-pre>父文件夹ID（parent_id）</code></li>
</ul>
</li>
<li>The <code v-pre>folder ID</code> obtained in the root directory (for example : <code v-pre>我接收的文件</code>、<code v-pre>我的云盘</code>、<code v-pre>高速云下载</code>), <strong>This will change with different account numbers, there is no the same value, In the request in the package</strong></li>
</ul>
<p><img src="/img/drivers/xunlei/xlx_name.jpg" alt="xunlei" loading="lazy"></p>
<br/>
<h3 id="use-video-url" tabindex="-1"><a class="header-anchor" href="#use-video-url"><span><strong>Use video url</strong></span></a></h3>
<ul>
<li><strong><a href="https://github.com/alist-org/alist/pull/6464#issuecomment-2124306443" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/pull/6464#issuecomment-2124306443</a></strong></li>
</ul>
<br/>
<h3 id="the-default-download-method-used-2" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used-2"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-290" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid><p></p>
</template>
<template #tab3="{ value, isActive }">
<h3 id="username、password-1" tabindex="-1"><a class="header-anchor" href="#username、password-1"><span><strong>username、password</strong></span></a></h3>
<p>The mailbox and password used for login</p>
<br/>
<h3 id="captchatoken-2" tabindex="-1"><a class="header-anchor" href="#captchatoken-2"><span><strong>CaptchaToken</strong></span></a></h3>
<p>It will be filled automatically without filling in manually</p>
<br/>
<h3 id="root-folder-id-1" tabindex="-1"><a class="header-anchor" href="#root-folder-id-1"><span><strong>Root folder id</strong></span></a></h3>
<p>The default is the full directory of the empty display, If you want to use a subfolder to make the root directory, grab the request to get it</p>
<ul>
<li>In the request in the package<code v-pre>https://api-pan.xunleix.com/drive/v1/files?parent_id=&amp;page_token=&amp;filters=</code>，you can get the following parameters
<ul>
<li><code v-pre>文件夹ID（id）</code></li>
<li><code v-pre>文件夹名称（name）</code></li>
<li><code v-pre>父文件夹ID（parent_id）</code></li>
</ul>
</li>
<li>The <code v-pre>folder ID</code> obtained in the root directory (for example : <code v-pre>我接收的文件</code>、<code v-pre>我的云盘</code>、<code v-pre>高速云下载</code>), <strong>This will change with different account numbers, there is no the same value, In the request in the package</strong></li>
</ul>
<p><img src="/img/drivers/xunlei/xlx_name.jpg" alt="xunlei" loading="lazy"></p>
<br/>
<h3 id="login-type-1" tabindex="-1"><a class="header-anchor" href="#login-type-1"><span><strong>Login Type</strong></span></a></h3>
<ul>
<li>
<p><code v-pre>User</code>: Only fill in the username and password</p>
</li>
<li>
<p><code v-pre>Refresh token</code>: Just fill in<code v-pre>RefreshToken</code></p>
</li>
</ul>
<br/>
<h3 id="sign-type" tabindex="-1"><a class="header-anchor" href="#sign-type"><span><strong>Sign Type</strong></span></a></h3>
<ul>
<li><code v-pre>Algorithms</code>：Choose <code v-pre>Algorithms</code> Just fill in <code v-pre>Algorithms</code> (It has been automatically filled. You do n’t have to fill in it yourself. You only need to fill in the username and password.When the algorithm is not invalidated)</li>
<li><code v-pre>Captcha sign</code>: Choose <code v-pre>Captcha sign</code> Just fill in <code v-pre>Captcha sign</code> and <code v-pre>Timestamp</code></li>
</ul>
<br/>
<h3 id="part-of-parameter-packet-capture-description" tabindex="-1"><a class="header-anchor" href="#part-of-parameter-packet-capture-description"><span><strong>Part of parameter Packet Capture description</strong></span></a></h3>
<ul>
<li><code v-pre>Captcha token</code> ：No need to fill in</li>
<li><code v-pre>Device id</code>：The value calculated by MD5 is used to judge the login device</li>
<li><code v-pre>Client id</code>, <code v-pre>Client secret</code>, <code v-pre>Client version</code>, <code v-pre>Package name</code>：It related to the signature, fill in according to the actual situation</li>
</ul>
<hr>
<ul>
<li><code v-pre>User agent</code>：API requests <code v-pre>User agent</code>, setting errors may not access or speed limit</li>
<li><code v-pre>Download user agent</code>：When downloading, use the <code v-pre>user agent </code>,If the setting error cannot be downloaded (the agent will use it)
<ul>
<li><code v-pre>User agent</code> and <code v-pre>Download user agent</code>：You can fill it out by yourself. If you don’t know how to fill it out, you can leave it blank and it will be automatically filled in.</li>
</ul>
</li>
</ul>
<hr>
<p>In the request in the package <code v-pre>https://xluser-ssl.xunleix.com/v1/shield/captcha/init</code>，you can get the following parameters<sup>6</sup></p>
<ul>
<li><code v-pre>Client id</code>、<code v-pre>Device id</code>、<code v-pre>Captcha sign</code></li>
<li><code v-pre>Package name</code>、<code v-pre>Client version</code>、<code v-pre>Timestamp</code></li>
</ul>
<p><img src="/img/drivers/xunlei/xlx_z1.jpg" alt="xunlei" loading="lazy"></p>
<p>In the request in the package <code v-pre>https://xluser-ssl.xunleix.com/v1/auth/signin</code>, you can get the following parameters<sup>2</sup></p>
<ul>
<li><code v-pre>Client id</code>、<code v-pre>Client secret</code></li>
</ul>
<p><img src="/img/drivers/xunlei/xlx_z2.jpg" alt="xunlei" loading="lazy"></p>
<br/>
<h3 id="use-video-url-1" tabindex="-1"><a class="header-anchor" href="#use-video-url-1"><span><strong>Use video url</strong></span></a></h3>
<ul>
<li><strong><a href="https://github.com/alist-org/alist/pull/6464#issuecomment-2124306443" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/pull/6464#issuecomment-2124306443</a></strong></li>
</ul>
<br/>
<h3 id="the-default-download-method-used-3" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used-3"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-468" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid></template>
<template #tab4="{ value, isActive }">
<h3 id="username、password-2" tabindex="-1"><a class="header-anchor" href="#username、password-2"><span><strong>username、password</strong></span></a></h3>
<p>Mobile phone number, email, username, and password used to log in</p>
<ul>
<li>When filling in the mobile phone number, please bring the <code v-pre>+86</code> area code, for example <code v-pre>+8613822334455</code></li>
</ul>
<br/>
<h3 id="captchatoken-3" tabindex="-1"><a class="header-anchor" href="#captchatoken-3"><span><strong>CaptchaToken</strong></span></a></h3>
<p>It will be filled automatically without filling in manually</p>
<br/>
<h3 id="root-folder-id-2" tabindex="-1"><a class="header-anchor" href="#root-folder-id-2"><span><strong>Root folder id</strong></span></a></h3>
<p>The default is the full directory of the empty display, If you want to use a subfolder to make the root directory, grab the request to get it</p>
<ul>
<li>In the request in the package<code v-pre>https://x-api-pan.xunlei.com/drive/v1/files?parent_id&amp;page_token&amp;space=</code>，you can get the following parameters
<ul>
<li><code v-pre>文件夹ID（id）</code></li>
<li><code v-pre>文件夹名称（name）</code></li>
<li><code v-pre>父文件夹ID（parent_id）</code></li>
</ul>
</li>
<li>The <code v-pre>folder ID</code> obtained in the root directory (for example : <code v-pre>来自分享</code>、<code v-pre>超级保险箱</code>), <strong>This will change with different account numbers, there is no the same value, In the request in the package</strong></li>
</ul>
<p><img src="/img/drivers/xunlei/x_br_foled.png" alt="xunlei" loading="lazy"></p>
<br/>
<h3 id="safe-password" tabindex="-1"><a class="header-anchor" href="#safe-password"><span><strong>Safe password</strong></span></a></h3>
<p>Thunder  Browser Safe password</p>
<ul>
<li>Files in Safe password can only be deleted directly and cannot be deleted to the recycle bin, so the <a href="#remove-way"><strong>Deletion method</strong></a> below has nothing to do with this configuration.</li>
</ul>
<br/>
<h3 id="remove-way" tabindex="-1"><a class="header-anchor" href="#remove-way"><span><strong>Remove way</strong></span></a></h3>
<p><strong>Trash</strong>：Use AList to delete files and then move them to the Recycle Bin. If you delete them accidentally, you can restore them through Thunder Cloud Disk.</p>
<p><strong>Delete</strong>：Deleting it directly cannot restore it.</p>
<br/>
<h3 id="use-video-url-2" tabindex="-1"><a class="header-anchor" href="#use-video-url-2"><span><strong>Use video url</strong></span></a></h3>
<ul>
<li>When <code v-pre>Use video url</code> is turned on, some types of files may not be accessible properly.</li>
<li><strong><a href="https://github.com/alist-org/alist/pull/6464#issuecomment-2124306443" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/pull/6464#issuecomment-2124306443</a></strong></li>
</ul>
<br/>
<h3 id="the-default-download-method-used-4" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used-4"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-574" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid></template>
<template #tab5="{ value, isActive }">
<h3 id="username、password-3" tabindex="-1"><a class="header-anchor" href="#username、password-3"><span><strong>username、password</strong></span></a></h3>
<p>Mobile phone number, email, username, and password used to log in</p>
<ul>
<li>When filling in the mobile phone number, please bring the <code v-pre>+86</code> area code, for example <code v-pre>+8613822334455</code></li>
</ul>
<br/>
<h3 id="captchatoken-4" tabindex="-1"><a class="header-anchor" href="#captchatoken-4"><span><strong>CaptchaToken</strong></span></a></h3>
<p>It will be filled automatically without filling in manually</p>
<br/>
<h3 id="root-folder-id-3" tabindex="-1"><a class="header-anchor" href="#root-folder-id-3"><span><strong>Root folder id</strong></span></a></h3>
<p>The default is the full directory of the empty display, If you want to use a subfolder to make the root directory, grab the request to get it</p>
<ul>
<li>In the request in the package<code v-pre>https://x-api-pan.xunlei.com/drive/v1/files?parent_id&amp;page_token&amp;space=</code>，you can get the following parameters
<ul>
<li><code v-pre>文件夹ID（id）</code></li>
<li><code v-pre>文件夹名称（name）</code></li>
<li><code v-pre>父文件夹ID（parent_id）</code></li>
</ul>
</li>
<li>The <code v-pre>folder ID</code> obtained in the root directory (for example : <code v-pre>来自分享</code>、<code v-pre>超级保险箱</code>), <strong>This will change with different account numbers, there is no the same value, In the request in the package</strong></li>
</ul>
<p><img src="/img/drivers/xunlei/x_br_foled.png" alt="xunlei" loading="lazy"></p>
<br/>
<h3 id="safe-password-1" tabindex="-1"><a class="header-anchor" href="#safe-password-1"><span><strong>Safe password</strong></span></a></h3>
<p>Thunder  Browser Safe password</p>
<ul>
<li>Files in Safe password can only be deleted directly and cannot be deleted to the recycle bin, so the <a href="#remove-way-1"><strong>Deletion method</strong></a> below has nothing to do with this configuration.</li>
</ul>
<br/>
<h3 id="remove-way-1" tabindex="-1"><a class="header-anchor" href="#remove-way-1"><span><strong>Remove way</strong></span></a></h3>
<p><strong>Trash</strong>：Use AList to delete files and then move them to the Recycle Bin. If you delete them accidentally, you can restore them through Thunder Cloud</p>
<p><strong>Delete</strong>：Deleting it directly cannot restore it.</p>
<br/>
<h3 id="login-type-2" tabindex="-1"><a class="header-anchor" href="#login-type-2"><span><strong>Login Type</strong></span></a></h3>
<ul>
<li>
<p><code v-pre>User</code>: Only fill in the username and password</p>
</li>
<li>
<p><code v-pre>Refresh token</code>: Just fill in<code v-pre>RefreshToken</code></p>
</li>
</ul>
<br/>
<h3 id="sign-type-1" tabindex="-1"><a class="header-anchor" href="#sign-type-1"><span><strong>Sign Type</strong></span></a></h3>
<ul>
<li><code v-pre>Algorithms</code>：Choose <code v-pre>Algorithms</code> Just fill in <code v-pre>Algorithms</code> (It has been automatically filled. You do n’t have to fill in it yourself. You only need to fill in the username and password.When the algorithm is not invalidated)</li>
<li><code v-pre>Captcha sign</code>: Choose <code v-pre>Captcha sign</code> Just fill in <code v-pre>Captcha sign</code> and <code v-pre>Timestamp</code></li>
</ul>
<br/>
<h3 id="part-of-parameter-packet-capture-description-1" tabindex="-1"><a class="header-anchor" href="#part-of-parameter-packet-capture-description-1"><span><strong>Part of parameter Packet Capture description</strong></span></a></h3>
<ul>
<li><code v-pre>Captcha token</code> ：No need to fill in</li>
<li><code v-pre>Device id</code>：The value calculated by MD5 is used to judge the login device</li>
<li><code v-pre>Client id</code>, <code v-pre>Client secret</code>, <code v-pre>Client version</code>, <code v-pre>Package name</code>：It related to the signature, fill in according to the actual situation</li>
</ul>
<hr>
<ul>
<li><code v-pre>User agent</code>：API requests <code v-pre>User agent</code>, setting errors may not access or speed limit</li>
<li><code v-pre>Download user agent</code>：When downloading, use the <code v-pre>user agent </code>,If the setting error cannot be downloaded (the agent will use it)
<ul>
<li><code v-pre>User agent</code> and <code v-pre>Download user agent</code>：You can fill it out by yourself. If you don’t know how to fill it out, you can leave it blank and it will be automatically filled in.</li>
</ul>
</li>
</ul>
<hr>
<p>In the request in the package <code v-pre>https://xluser-ssl.xunlei.com/v1/shield/captcha/init</code>，you can get the following parameters<sup>6个</sup></p>
<ul>
<li>
<p><code v-pre>Client id</code>、<code v-pre>Device id</code>、<code v-pre>Captcha sign</code></p>
</li>
<li>
<p><code v-pre>Package name</code>、<code v-pre>Client version</code>、<code v-pre>Timestamp</code></p>
</li>
</ul>
<p><img src="/img/drivers/xunlei/x_br_add1.png" alt="xunlei" loading="lazy"></p>
<p>In the request in the package <code v-pre>https://xluser-ssl.xunlei.com/v1/auth/signin/token</code>, you can get the following parameters<sup>3</sup></p>
<ul>
<li><code v-pre>Client id</code>、<code v-pre>Client secret</code>、<code v-pre>Refresh token</code></li>
</ul>
<p><img src="/img/drivers/xunlei/x_br_add2.png" alt="xunlei" loading="lazy"></p>
<br/>
<h3 id="use-video-url-3" tabindex="-1"><a class="header-anchor" href="#use-video-url-3"><span><strong>Use video url</strong></span></a></h3>
<ul>
<li>Open <code v-pre>Use video url</code> 可能会遇到部分类型的文件无法正常访问</li>
<li><strong><a href="https://github.com/alist-org/alist/pull/6464#issuecomment-2124306443" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/pull/6464#issuecomment-2124306443</a></strong></li>
</ul>
<br/>
<h3 id="the-default-download-method-used-5" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used-5"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-785" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid></template>
</Tabs>
</div></template>


