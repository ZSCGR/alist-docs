<template><div><h1 id="quark-tv" tabindex="-1"><a class="header-anchor" href="#quark-tv"><span>Quark / TV</span></a></h1>
<p><strong><a href="https://pan.quark.cn" target="_blank" rel="noopener noreferrer">https://pan.quark.cn</a></strong></p>
<div class="hint-container caution">
<p class="hint-container-title">Caution</p>
<p>Due to the speed limit of Quark Cloud,Quick Cloud must use local agents for transmission now,<a href="https://github.com/alist-org/alist/issues/4318#issuecomment-1536214188" target="_blank" rel="noopener noreferrer">For details, see</a></p>
</div>
<h2 id="quark-cloud" tabindex="-1"><a class="header-anchor" href="#quark-cloud"><span><strong>Quark Cloud</strong></span></a></h2>
<h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie"><span><strong>Cookie</strong></span></a></h3>
<p>Press F12 to open &quot;Debug&quot;, select &quot;Network&quot;, select any request on the left, and find the one with the <code v-pre>Cookie</code> parameter.</p>
<p><img src="/img/drivers/quark/quark_cookie.png" alt="quark" loading="lazy"></p>
<br/>
<h3 id="root-folder-id" tabindex="-1"><a class="header-anchor" href="#root-folder-id"><span><strong>Root Folder ID</strong></span></a></h3>
<p>Root Folder ID is <code v-pre>0</code></p>
<ul>
<li>After entering the folder, get the directory ID in the top address bar. If the subdirectory is deeper, the directory ID will be at the back of the address bar. Just write the subdirectory ID you want to mount.</li>
</ul>
<p><img src="/img/drivers/quark/quark_fileid.png" alt="url" loading="lazy"></p>
<p>Note that only Cookies captured in Chrome is available, use Firefox's Cookies may remain in guest and still require login.</p>
<br/>
<h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-47" code="eJxVj01ugzAQhfecYpRsAxHQENUSrVT1CJW6QFkYe1xbsRlqmwC3L0lp1Mxm/t73NJOmaRJNtMjgUxuhQdLYWeISHEZNEkyAIaCEdgaJig82viZXSFkaheY+wsdbAkuEOFsEkYMy1rJt26pdiJ7OyLaqqtY6HY2MmhX9tBNkyS87pf7hvFhxpY6H4+HuUJblo8NTP/1iQ/vlea/BSMyhgdNtKvJbwk6ubWNJcAu9p2k+McYCORSWh1DXjneSR/JzXdcvvGiWbz3g92B6h11c/a7Sd1Rw5/7OfK5WgRFnaHPYZNleenNBH/aCnKMu09HZ7Yit5Je0p0U4b5If/595gw=="></Mermaid><p>illustrate：<a href="https://github.com/alist-org/alist/issues/4318#issuecomment-1536214188" target="_blank" rel="noopener noreferrer"><strong>alist/issues/4318</strong></a></p>
<h2 id="quark-tv-1" tabindex="-1"><a class="header-anchor" href="#quark-tv-1"><span><strong>Quark TV</strong></span></a></h2>
<p>The TV version supports <code v-pre>302</code>, but only <code v-pre>List</code> and <code v-pre>Download</code> operations are supported. Other operations are not supported (the interface does not support it).</p>
<br/>
<h3 id="add-method" tabindex="-1"><a class="header-anchor" href="#add-method"><span><strong>Add method</strong></span></a></h3>
<ol>
<li>
<p>Select the <code v-pre>QuarkTV</code> driver, fill in the mounting path, and then save</p>
</li>
<li>
<p>Return to the all driver page and use the mobile APP to scan the QR code (If the QR code is not displayed, click on <code v-pre>Table Layout</code> in the upper right corner of the driver to switch from list mode to table mode)</p>
</li>
<li>
<p>After scanning the QR code to confirm, disable the driver, then enable the <code v-pre>driver</code> to use it.</p>
<ul>
<li><code v-pre>Refresh token</code>、<code v-pre>Device id </code>、<code v-pre>Query token</code>, It will be filled in automatically, no manual filling is required
<ul>
<li>Please do not edit manually and modify it</li>
</ul>
</li>
</ul>
</li>
</ol>
<p><img src="/img/drivers/tv_qrcode.png" alt="" loading="lazy"></p>
<br/>
<h3 id="root-folder-id-1" tabindex="-1"><a class="header-anchor" href="#root-folder-id-1"><span><strong>Root Folder ID</strong></span></a></h3>
<p>Root Folder ID is <code v-pre>0</code></p>
<ul>
<li>After entering the folder, get the directory ID in the top address bar. If the subdirectory is deeper, the directory ID will be at the back of the address bar. Just write the subdirectory ID you want to mount.</li>
</ul>
<p><img src="/img/drivers/quark/quark_fileid.png" alt="url" loading="lazy"></p>
<br/>
<h3 id="the-default-download-method-used-1" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used-1"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-116" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid></div></template>


