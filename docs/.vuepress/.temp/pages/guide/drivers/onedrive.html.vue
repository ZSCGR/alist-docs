<template><div><h1 id="onedrive-share" tabindex="-1"><a class="header-anchor" href="#onedrive-share"><span>OneDrive / Share</span></a></h1>
<br/>
<h2 id="onedrive-mount" tabindex="-1"><a class="header-anchor" href="#onedrive-mount"><span><strong>OneDrive mount</strong></span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>If your account does not support the API, (for example, the school account has not verified the administrator, or the administrator has disabled the API), then you can also mount it through webdav. For details, see <RouteLink to="/guide/drivers/webdav.html">webdav</RouteLink></p>
</div>
<p>First open <a href="https://alist.nn.ci/tool/onedrive/request" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/tool/onedrive/request</a></p>
<h3 id="create-an-application" tabindex="-1"><a class="header-anchor" href="#create-an-application"><span><strong>Create an application</strong></span></a></h3>
<blockquote>
<p>You can also choose to skip this step and use the client provided by default, but requires the approval of the organization administrator.</p>
</blockquote>
<ul>
<li>On the page that opens, select the region and click Create Application</li>
<li>After logging in, select <code v-pre>Register Application</code>, enter <code v-pre>Name</code>, and select <code v-pre>Accounts and Individuals in Any Organization Directory</code> (note that you don't look at the location selection but the text here. Some people may be the middle option, don't select a single Tenant or other options, otherwise it will cause problems when logging in), enter the redirect URL as <a href="https://alist.nn.ci/tool/onedrive/callback" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/tool/onedrive/callback</a>, <code v-pre>register</code>, and then you can get client_id<br>
<img src="/img/drivers/onedrive-register-app.png" alt="client_id" loading="lazy"></li>
<li>After registering the application, select <code v-pre>Certificate and Password</code>, click <code v-pre>New Client Password</code>, enter a string of passwords, select the one with the longest time, and click <code v-pre>Add</code><br>
(Note: The password entered after adding will disappear, please record the value of client_secret)<br>
<img src="/img/drivers/onedrive-new-password.png" alt="client_secret" loading="lazy"></li>
<li>Select <code v-pre>API Permissions</code>, click <code v-pre>MicroSoft Graph</code>, enter file in the <code v-pre>Select Permissions</code>, and check <code v-pre>Files.read</code> (Note: Files.read is a read-only minimum permission. The permission in the figure is larger, and the same can be done ), click <code v-pre>Update Permission</code><br>
<img src="/img/drivers/onedrive-update-permission.png" alt="api" loading="lazy"></li>
</ul>
<h3 id="get-refresh-token" tabindex="-1"><a class="header-anchor" href="#get-refresh-token"><span><strong>Get refresh token</strong></span></a></h3>
<p>Fill in the client_id and client_secret obtained in the previous step into the <a href="https://alist.nn.ci/tool/onedrive/request" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/tool/onedrive/request</a> page, click Get Refresh Token, you can get the refresh token</p>
<h3 id="get-sharepoint-site-id" tabindex="-1"><a class="header-anchor" href="#get-sharepoint-site-id"><span><strong>Get Sharepoint site_id</strong></span></a></h3>
<p>If you need to mount Sharepoint, after completing the previous step, an input site address will appear on the interface that displays the refresh token. After entering the site address, click Get site_id.</p>
<h3 id="add-storage" tabindex="-1"><a class="header-anchor" href="#add-storage"><span><strong>Add storage</strong></span></a></h3>
<p>Fill in the values ​​obtained in the above process one by one.</p>
<h3 id="root-folder-path" tabindex="-1"><a class="header-anchor" href="#root-folder-path"><span><strong>Root folder path</strong></span></a></h3>
<p>The default is <code v-pre>/</code>, if you need to customize, just fill in the path, starting from the root path, the same as the local path, such as <code v-pre>/test</code></p>
<h4 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h4>
<Mermaid id="mermaid-72" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid><br/>
<h2 id="onedrive-share-url" tabindex="-1"><a class="header-anchor" href="#onedrive-share-url"><span><strong>Onedrive Share Url</strong></span></a></h2>
<p><img src="/img/drivers/onedrive_app/od_share_add.png" alt="api" loading="lazy"></p>
<br/>
<h3 id="url" tabindex="-1"><a class="header-anchor" href="#url"><span><strong>Url</strong></span></a></h3>
<p>The sharing link is the same as the example below and can be mounted. It can be obtained from E3, E5, A1, and A1P.</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-html"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">https://connecthkuhk-my.sharepoint.com/:f:/g/personal/jhyang13_connect_hku_hk/EsEgHtGOWbJImxop6tF15FIBIH-ihrjuDclbrbmwWfY_RA?e=s6fitN</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>If it is OneDrive personal version, it will not work. The link is as follows</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-html"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">https://onedrive.live.com/?cid=64EA5FCC7735E8C6&#x26;id=64EA5FCC7735E8C6%2117289</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><br/>
<h3 id="password" tabindex="-1"><a class="header-anchor" href="#password"><span><strong>Password</strong></span></a></h3>
<p>It is the extraction code. If you have it, write it. If you don’t have it, don’t fill it in.</p>
<br/>
<h4 id="the-default-download-method-used-1" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used-1"><span><strong>The default download method used</strong></span></a></h4>
<Mermaid id="mermaid-103" code="eJyNkL1uwjAURnee4gpWHBQooFpKK1WMnapWHaIMjn1dWzhxajskefuaNCA6VMKL/75z7HsJIbOgg0EKn0pzBcJ2tbFMQIVBWQHaQ+tRQDmAQMlaE55nZ0ga23HFXID3lxnE4cNgEHgKUhtDF2Uplz44e0S6kLvdtCadFkHRddMvuTXWxTspb3C2nnAp99v99mrYbDZ/DQ9N/4u15ZdjjQItMIUcivGUp+OEtZi2ubGcGWic7YeCUupthdww77NsqirLsie2zmOtDvC71U2FdZhs5+ABJVypyycfd2OgTPPDpW3jE/Dx9lqQhJmArmZBnzAh/9s1P0YFzJNkJVzMOr/itqpsnahQmUWHpWAn0tgYHOY3TOz1ncwPx9ee1g=="></Mermaid></div></template>


