<template><div><h1 id="dropbox" tabindex="-1"><a class="header-anchor" href="#dropbox"><span>Dropbox</span></a></h1>
<p>Dropbox Official：<a href="https://www.dropbox.com/" target="_blank" rel="noopener noreferrer">https://www.dropbox.com/</a></p>
<h2 id="get-refresh-token" tabindex="-1"><a class="header-anchor" href="#get-refresh-token"><span><strong>Get refresh token</strong></span></a></h2>
<p>Go to：<strong><a href="https://alist.nn.ci/tool/dropbox/request.html" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/tool/dropbox/request.html</a></strong></p>
<ul>
<li>There are two ways, one is provided directly using AList, and the other is to create a new application by yourself
<ul>
<li>The method of getting as follows (Recommend the first type<sup>{right}</sup>Because the AList provided can no longer create new users)</li>
<li>When using the self-built <code v-pre>client ID</code> and <code v-pre>secret key</code> on the right, remember to authorize<sup>{the_third_picture}</sup></li>
</ul>
</li>
</ul>
<div class="image-preview">  
    <img src="/img/drivers/dropbox/dropbox-1.png" alt="Use AList default to get token" title="Use AList default to get token"/>
    <img src="/img/drivers/dropbox/dropbox-2.png" alt="Create your own new application to obtain the client to get token" title="Create your own new application to obtain the client to get token"/>
    <img src="/img/drivers/dropbox/dropbox-2-2.png" alt="Create your own new application to obtain the client to get token" title="Create your own new application to obtain the client to get token"/>
</div>
<ul>
<li>
<p>If you use your own new applications, you need to fill in the <code v-pre>client id</code> and the <code v-pre>client secret key</code></p>
</li>
<li>
<p>The method is shown in the right side of the example above(Create an application link：<strong><a href="https://www.dropbox.com/developers/apps" target="_blank" rel="noopener noreferrer">https://www.dropbox.com/developers/apps</a></strong>)</p>
</li>
<li>
<p>Redirect URLs：<strong><a href="https://alist.nn.ci/tool/dropbox/callback" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/tool/dropbox/callback</a></strong></p>
</li>
</ul>
<p>Reference link: <a href="https://github.com/alist-org/alist/commit/cfee536b96f38e5ba3f3575fab4e89f6c0e1bc5b#commitcomment-119688700" target="_blank" rel="noopener noreferrer"><strong>Click to view</strong></a></p>
<h2 id="root-folder-file-id" tabindex="-1"><a class="header-anchor" href="#root-folder-file-id"><span><strong>Root folder file_id</strong></span></a></h2>
<p><strong>Empty is the root directory</strong>：display all files</p>
<p><strong>Single folder ID</strong>：Enter the folder you need to display, copy the top link to fill in <code v-pre>/home</code> behind</p>
<p><img src="/img/drivers/dropbox/folder_id.png" alt="" loading="lazy"></p>
<h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-67" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid></div></template>


