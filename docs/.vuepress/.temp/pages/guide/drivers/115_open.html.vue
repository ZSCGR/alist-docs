<template><div><h1 id="_115-open" tabindex="-1"><a class="header-anchor" href="#_115-open"><span>115 Open</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Developed using the official <a href="https://open.115.com" target="_blank" rel="noopener noreferrer"><strong>115 Open Platform API</strong></a></p>
</div>
<div class="hint-container caution">
<p class="hint-container-title">Please read the precautions carefully</p>
<p>Please use your account in a standardized manner. Do not use it for distribution services including but not limited to <strong><code v-pre>multi-person sharing</code></strong>, <strong><code v-pre>image hosting, software hosting</code></strong> and <strong><code v-pre>video external links to video websites for playback</code></strong>, as well as some other irregular uses not mentioned above. You will be responsible for the consequences of your account being blocked.</p>
</div>
<br/>
<h2 id="get-refresh-token" tabindex="-1"><a class="header-anchor" href="#get-refresh-token"><span><strong>Get refresh token</strong></span></a></h2>
<ul>
<li><strong><a href="https://alist.nn.ci/tool/115/token" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/tool/115/token</a></strong></li>
</ul>
<p>Scan the QR code with your phone and click the blue button to get <code v-pre>refresh token</code></p>
<p>When filling in the drive information, you only need to fill in <strong><code v-pre>refresh token</code></strong>, and you don’t need to fill in <code v-pre>access token</code></p>
<p><img src="/img/drivers/115/115_b.png" alt="" data-mode="lightmode-only" loading="lazy"><br>
<img src="/img/drivers/115/115_h.png" alt="" data-mode="darkmode-only" loading="lazy"></p>
<br/>
<h3 id="precautions" tabindex="-1"><a class="header-anchor" href="#precautions"><span><strong>Precautions</strong></span></a></h3>
<div class="hint-container warning">
<p class="hint-container-title">Token leakage post-processing method</p>
<p>If you accidentally leak the Token, you can go to 115 Device Login Management to deauthorize the app.</p>
<ul>
<li>115 APP：【<strong>iOS</strong>、<strong>Android</strong>】 version requires ≥ 35.11.0</li>
<li>115 Web：<strong><a href="https://115.com/?mode=device_manage" target="_blank" rel="noopener noreferrer">https://115.com/?mode=device_manage</a></strong></li>
</ul>
<p>After invalidation, the following content will be displayed:</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">failed get objs: failed to list objs: code: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">40140116</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, message: no auth</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>An account can obtain <code v-pre>Refresh token</code> twice from the same application. After the third acquisition, the <code v-pre>Refresh token</code> obtained first will become invalid. Using the first <code v-pre>Refresh token</code> will prompt the above error.</p>
<p><img src="/img/drivers/115/115_auth_b.png" alt="" data-mode="lightmode-only" loading="lazy"><br>
<img src="/img/drivers/115/115_auth_h.png" alt="" data-mode="darkmode-only" loading="lazy"></p>
</div>
<h3 id="get-a-refresh-token-using-another-app-id" tabindex="-1"><a class="header-anchor" href="#get-a-refresh-token-using-another-app-id"><span><strong>Get a refresh token using another APP ID</strong></span></a></h3>
<p>For example, use your own developer application ID to obtain a refresh token. Before obtaining a refresh token, fill in the application<code v-pre>APP ID</code> and then click the Get Refresh Token button.</p>
<p><img src="/img/drivers/115/115_b_t.png" alt="" data-mode="lightmode-only" loading="lazy"><br>
<img src="/img/drivers/115/115_h_t.png" alt="" data-mode="darkmode-only" loading="lazy"></p>
<br/>
<h2 id="root-folder-id" tabindex="-1"><a class="header-anchor" href="#root-folder-id"><span><strong>Root folder ID</strong></span></a></h2>
<p>Open the official website of 115 Cloud and click the string behind the url when you click into the folder you want to set,</p>
<p>such as <a href="https://115.com/?cid=249163533602609229&amp;offset=0&amp;tab=&amp;mode=wangpan" target="_blank" rel="noopener noreferrer">https://115.com/?cid=249163533602609229&amp;offset=0&amp;tab=&amp;mode=wangpan</a>,</p>
<p>which is <code v-pre>249163533602609229</code></p>
<br/>
<h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-90" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid></div></template>


