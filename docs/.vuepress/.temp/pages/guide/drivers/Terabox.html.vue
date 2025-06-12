<template><div><h1 id="terabox" tabindex="-1"><a class="header-anchor" href="#terabox"><span>Terabox</span></a></h1>
<h2 id="refresh-token" tabindex="-1"><a class="header-anchor" href="#refresh-token"><span><strong>refresh token</strong></span></a></h2>
<p><s><a href="https://www.terabox.com/" target="_blank" rel="noopener noreferrer"><strong>Click here to log in</strong></a> to obtain a refresh token</s></p>
<p>Since F12 is currently disabled on the web page, we can first open F12 on another page and turn on the <code v-pre>Network</code> → <code v-pre>Preserve log</code> option.</p>
<p><img src="/img/drivers/terabox/terabox_f12.png" alt="f12" style="zoom:150%;" /><br/></p>
<p>Then enter <a href="https://www.terabox.com" target="_blank" rel="noopener noreferrer">https://www.terabox.com</a> in the address bar of this tab to enter the webpage, you can see the reserved request, and then find <strong><code v-pre>Cookie</code></strong> from the reserved request.</p>
<p><img src="/img/drivers/terabox/terabox_cookie.png" alt="terabox" loading="lazy"></p>
<br/>
<h2 id="download-api" tabindex="-1"><a class="header-anchor" href="#download-api"><span><strong>Download api</strong></span></a></h2>
<p><strong>Download api needs to choose <mark><code v-pre>Crack</code></mark></strong> ，before you can use <sup>(v3.29)</sup></p>
<br/>
<h2 id="root-folder-id" tabindex="-1"><a class="header-anchor" href="#root-folder-id"><span><strong>Root folder id</strong></span></a></h2>
<ul>
<li>Root folder id is <code v-pre>/</code></li>
<li>Mount other single subdirectories, put a picture for reference
<ul>
<li>
<img src="/img/drivers/terabox/terabox3.png" alt="Demo"/>
</li>
</ul>
</li>
</ul>
<br/>
<h2 id="download-error-using-proxy-url-link" tabindex="-1"><a class="header-anchor" href="#download-error-using-proxy-url-link"><span><strong>Download error using Proxy Url link</strong></span></a></h2>
<p>Using <RouteLink to="/guide/drivers/common.html#download-proxy-url"><strong>Proxy Url</strong></RouteLink> to download error</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"error_code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">31211</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"error_msg"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"access denied"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>View specific reasons：<strong><a href="https://github.com/alist-org/alist/issues/6508#issuecomment-2171762705" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/issues/6508</a></strong></p>
<br/>
<h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-64" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid></div></template>


