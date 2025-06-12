<template><div><h1 id="wopan" tabindex="-1"><a class="header-anchor" href="#wopan"><span>WoPan</span></a></h1>
<p>WoPan address：<strong><a href="https://pan.wo.cn/" target="_blank" rel="noopener noreferrer">https://pan.wo.cn/</a></strong></p>
<ul>
<li>⚠️ AList v3.19.0 version and above can use this driver</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>AList WoPan is web-based platform is used to access WoPan storage.</p>
<p>After mounting WoPan storage using AList, please do not log in to the web version of the WoPan again, as this will log out the AList session and make the invalid.</p>
<p>Logging in on the mobile app does not pose any issue, as it can be done simultaneously without any conflicts.</p>
</div>
<p>Get the token tool address：<strong><a href="https://alist.nn.ci/tool/wopan/token.html" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/tool/wopan/token.html</a></strong></p>
<ul>
<li><img src="/img/drivers/wopan/wopan-tool.png" alt="" loading="lazy"></li>
</ul>
<p><mark>This tool may have a graphic verification code due to too many users. If a graphic verification code appears, you need to manually capture the packet:</mark></p>
<ul>
<li>Open developer tools</li>
<li>Open the official website <a href="https://pan.wo.cn/" target="_blank" rel="noopener noreferrer">https://pan.wo.cn/</a> to log in</li>
<li>Find the request with this content:<br>
<img src="/img/drivers/wopan/wopan-req.png" alt="" loading="lazy"></li>
<li>Find the token in the response:<br>
<img src="/img/drivers/wopan/wopan-resp.png" alt="" loading="lazy"></li>
</ul>
<h2 id="root-folder-id" tabindex="-1"><a class="header-anchor" href="#root-folder-id"><span><strong>Root folder ID</strong></span></a></h2>
<ul>
<li>
<p><strong>Personal cloud：</strong>：<strong>0</strong></p>
<ul>
<li>Single folder ID：Unknown (wait for replenishment)</li>
</ul>
</li>
<li>
<p><strong>Family cloud</strong>：Unknown (wait for replenishment)</p>
<ul>
<li>Family cloud Single folder ID：Unknown (wait for replenishment)</li>
</ul>
</li>
</ul>
<h2 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>Type</span></a></h2>
<p>Personal cloud：Put the <code v-pre>family ID</code> blank is the personal cloud</p>
<p>Family cloud：add <code v-pre>Family ID</code> Unknown (wait for replenishment)</p>
<h3 id="alist-fill-in-examples" tabindex="-1"><a class="header-anchor" href="#alist-fill-in-examples"><span><strong>AList fill in examples：</strong></span></a></h3>
<p>Data obtained by using tools <code v-pre>Refresh_token Fill in the refresh token</code>, <code v-pre>Access_token fills in access_token</code></p>
<p><img src="/img/drivers/wopan/add-wopan.png" alt="" loading="lazy"></p>
<h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-109" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid></div></template>


