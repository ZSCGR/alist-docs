<template><div><h1 id="_123pan-share-link" tabindex="-1"><a class="header-anchor" href="#_123pan-share-link"><span>123Pan / Share / Link</span></a></h1>
<p>You can view the content of the tab below to view different mounting methods (including <strong><code v-pre>Direct link</code></strong>, <code v-pre>Personal</code>, <code v-pre>Share</code>)</p>
<ul>
<li>
<p><code v-pre>Direct link</code> ：is only adapted to the authentication function, the link also needs to be filled in by yourself, like <RouteLink to="/guide/drivers/UrlTree.html">UrlTree</RouteLink>, fill in the direct link copied in 123 direct link.</p>
</li>
<li>
<p><code v-pre>Personal</code>：Free user 1G traffic download, unlimited upload, multi-IP sharing is prohibited</p>
</li>
</ul>
<Tabs :data='[{"id":"personal"},{"id":"Link"},{"id":"Share"}]' tab-id="123">
<template #title0="{ value, isActive }">personal</template>
<template #title1="{ value, isActive }">Link</template>
<template #title2="{ value, isActive }">Share</template>
<template #tab0="{ value, isActive }">
<h2 id="personal" tabindex="-1"><a class="header-anchor" href="#personal"><span><strong>personal</strong></span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Free user 1G traffic download, unlimited upload, multi-IP sharing is prohibited</p>
<ul>
<li>Need to use <code v-pre>v3.33.0</code> version</li>
</ul>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">failed get objs: failed to list objs:当前账号存在安全风险，请使用短信验证码或者微信进行登录。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>solution:</p>
<ul>
<li>This is because the 123 cloud disk officially prohibits the mounting on strange devices, If you are mounted locally, <code v-pre>or</code> Windows Server server mount `to open the 123 cloud disk web page to log in or modify a password once
<ul>
<li>example：<a href="https://github.com/alist-org/alist/discussions/6105#discussioncomment-8628361" target="_blank" rel="noopener noreferrer">#6105</a>、 <a href="https://github.com/alist-org/alist/discussions/6254#discussioncomment-8884882" target="_blank" rel="noopener noreferrer">#6254</a></li>
</ul>
</li>
</ul>
</div>
</div>
<p><a href="https://www.123pan.com/" target="_blank" rel="noopener noreferrer">https://www.123pan.com/</a></p>
<p>Just fill in the account password.</p>
<h3 id="username" tabindex="-1"><a class="header-anchor" href="#username"><span><strong>Username</strong></span></a></h3>
<p>The mobile phone number used to log in</p>
<h3 id="password" tabindex="-1"><a class="header-anchor" href="#password"><span><strong>Password</strong></span></a></h3>
<p>The password used to log in</p>
<h3 id="root-folder-file-id" tabindex="-1"><a class="header-anchor" href="#root-folder-file-id"><span><strong>Root folder file_id</strong></span></a></h3>
<p>Enter the folder you want to mount, the last string of the official website URL, such as:</p>
<p><img src="/img/drivers/123/123.png" alt="123" loading="lazy"></p>
<h3 id="recommendations" tabindex="-1"><a class="header-anchor" href="#recommendations"><span><strong>Recommendations</strong></span></a></h3>
<ul>
<li>It seems that the 123 API has a limited number of loads each time, so if you load hundreds of files in a folder at one time, an error may be reported</li>
<li>It is recommended to A useful approach is not to put too many sub-items in the same folder.</li>
</ul>
</template>
<template #tab1="{ value, isActive }">
<div class="hint-container caution">
<p class="hint-container-title">Please read this reminder carefully</p>
<p>Because 123 Cloud Disk Direct Link is a paid purchase with a quota, if you add 123 Direct Link storage, please set passwords, meta information and other measures in time to prevent malicious traffic brushing.</p>
<p>After setting it up, test it yourself in incognito mode first. If you fail to set up the correct anti-theft measures and are maliciously flooded with traffic, you will be responsible for it yourself.</p>
</div>
<p>First open <strong><code v-pre>123 Cloud Disk Direct Link Management</code></strong>: <strong><a href="https://www.123pan.com/DirectLink" target="_blank" rel="noopener noreferrer">https://www.123pan.com/DirectLink</a></strong> Set an authentication key in the lower right corner, and then turn on the authentication status switch</p>
<p><img src="/img/drivers/123/123_link_1.png" alt="123" loading="lazy"></p>
<ul>
<li>Open Settings 123 Cloud Disk Settings: <strong><a href="https://www.123pan.com/Setting" target="_blank" rel="noopener noreferrer">https://www.123pan.com/Setting</a></strong> and find the account ID [<code v-pre>1</code> label in the picture below]</li>
<li>How to activate direct link? (You need to activate membership to use it)
<ul>
<li>Find the folder you want to open, right-click on <code v-pre>Enable Direct Link Space</code>, and after opening it, you will see a link icon in the folder [Tag <code v-pre>2</code> in the picture below]</li>
</ul>
</li>
<li>How to get a direct link to a file? [Tag <code v-pre>3</code> in the picture below]
<ul>
<li>Enter the folder that has 'enabled direct link space', find the file you need to obtain, right-click 'Get direct link', and fill in the AList configuration after obtaining it.</li>
</ul>
</li>
</ul>
<p><img src="/img/drivers/123/123_link_2.png" alt="123" loading="lazy"></p>
<h3 id="fill-in-example" tabindex="-1"><a class="header-anchor" href="#fill-in-example"><span><strong>Fill in example</strong></span></a></h3>
<ul>
<li>
<p><strong>Origin urls</strong>：Fill in the direct link to the files we copied one by one</p>
<ul>
<li>It supports creating different folders like <RouteLink to="/guide/drivers/UrlTree.html">UrlTree</RouteLink>, and supports filling in the file size and modification time (four options are provided for use, like the UrlTree filling, refer to the second example of the picture below)</li>
<li>File size unit: <code v-pre>B</code> bytes. For example, if you want to write a 1MB file, it is 1048567 bytes. You can search for the specific byte conversion in your browser (you can leave it blank).</li>
<li>File modification time: It is <code v-pre>Unix timestamp</code>. You can search in the browser for the specific conversion  (you can leave it blank).</li>
</ul>
<div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-txt"><span class="line"><span>Fill in the format:</span></span>
<span class="line"><span>[FileSize:][Modified:]URL</span></span>
<span class="line"><span>127451136:1694101621:https://vip.123pan.cn/1812xxx499/123-link-Test/linuxqq_3.2.0-16736_mips64el.deb</span></span>
<span class="line"><span>[FileSize:]URL</span></span>
<span class="line"><span>134847488:https://vip.123pan.cn/1812xxx499/123-link-Test/linuxqq_3.2.0-16736_loong64.deb</span></span>
<span class="line"><span>[Modified:]URL</span></span>
<span class="line"><span>1694101621:https://vip.123pan.cn/1812xxx499/123-link-Test/linuxqq_3.2.0-16736_arm64.AppImage</span></span>
<span class="line"><span>URL</span></span>
<span class="line"><span>https://vip.123pan.cn/1812xxx499/123-link-Test/linuxqq_3.2.0-16736_x86_64.AppImage</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>Private key</strong>：</p>
<ul>
<li>You can set up the direct link management page yourself and turn it on. Please turn it on.</li>
</ul>
</li>
<li>
<p><strong>Uid</strong>：</p>
<ul>
<li>Account ID in the account settings page</li>
</ul>
</li>
<li>
<p><strong>Valid duration</strong>：</p>
<ul>
<li>The file direct link validity period, in minutes, is filled in by default to 30 minutes</li>
</ul>
</li>
</ul>
<div class="image-preview">  
    <img src="/img/drivers/123/123_link_3.png" alt="123Link" title="123Link"/>
    <img src="/img/drivers/123/123_link_4.png" alt="123Link" title="123Link"/>
</div>
<p></p>
</template>
<template #tab2="{ value, isActive }">
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>This driver is no longer actively maintained due to 123Pan's limitations</p>
</div>
<h2 id="share" tabindex="-1"><a class="header-anchor" href="#share"><span><strong>Share</strong></span></a></h2>
<p>It is estimated that it will be repaired in a few days~</p>
<p>Fill in the driver's <strong><code v-pre>share key</code></strong> and optional <strong><code v-pre>share password</code></strong> (if there is a password, you need to fill in), the root folder ID defaults to <code v-pre>0</code> to display all files</p>
<h3 id="fill-in-the-example" tabindex="-1"><a class="header-anchor" href="#fill-in-the-example"><span><strong>Fill in the example</strong></span></a></h3>
<p><img src="/img/drivers/123/123_add_demo.png" alt="123" loading="lazy"></p>
<h3 id="share-password" tabindex="-1"><a class="header-anchor" href="#share-password"><span><strong>Share Password</strong></span></a></h3>
<p>Fill in if you have it, don't if you don't</p>
<h3 id="root-folder-file-id-1" tabindex="-1"><a class="header-anchor" href="#root-folder-file-id-1"><span><strong>Root folder file_id</strong></span></a></h3>
<p>The ID of the root directory of the shared link is <code v-pre>0</code>, displaying all files</p>
<p>If you only want to display a certain folder, open the developer mode (F12) to clear all requests (maybe 123 prohibits debug debugging, you need to close this by yourself to continue)</p>
<p>Find the request on the right side of the picture in the upper-level directory request of the directory you want to display, then click <code v-pre>Response</code>, find the format button <code v-pre>{}</code> below and format it, and you can see the relevant directory ID.</p>
<p>If you are not sure whether the directory ID is correct or not, there is a directory name under the directory ID</p>
<p><img src="/img/drivers/123/123_fl_id.png" alt="123" loading="lazy"></p>
</template>
</Tabs>
<h2 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h2>
<Mermaid id="mermaid-266" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid></div></template>


