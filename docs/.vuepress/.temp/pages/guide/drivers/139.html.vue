<template><div><h1 id="_139yun" tabindex="-1"><a class="header-anchor" href="#_139yun"><span>139Yun</span></a></h1>
<p>Cloud disk address: <strong><a href="https://yun.139.com/" target="_blank" rel="noopener noreferrer">https://yun.139.com/</a></strong></p>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>The alist version must be greater than <code v-pre>v3.41.0</code> to use this tutorial.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Parameters can be obtained from the browser DevTools -&gt; Network by <a href="#search-keywords">searching keywords</a>.</p>
</div>
<br/>
<h2 id="proxy-range" tabindex="-1"><a class="header-anchor" href="#proxy-range"><span><strong>Proxy Range</strong></span></a></h2>
<p>You need to enable <code v-pre>Web Proxy</code> or<code v-pre>Webdav Native Proxy</code> to take effect</p>
<ul>
<li>
<p>Currently only applicable to: <code v-pre>alias</code>、<code v-pre>139Yun</code>、<code v-pre>AList V3</code></p>
<ul>
<li>Function Description: <strong><a href="https://github.com/alist-org/alist/pull/6496#issue-2309839607" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/pull/6496#issue-2309839607</a></strong></li>
</ul>
</li>
</ul>
<br/>
<h2 id="authorization" tabindex="-1"><a class="header-anchor" href="#authorization"><span><strong>Authorization</strong></span></a></h2>
<p>Update the method of authentication, please get <code v-pre>Authorization</code> to fill in</p>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>Fill in the content starting after the Basic and a space, <strong>do not include Basic</strong>!</p>
</div>
<h2 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span><strong>Type</strong></span></a></h2>
<p>Alist currently supports 4 types of cloud storage:</p>
<ul>
<li>
<p>Personal New: New API</p>
<ul>
<li>
<p>Note: The account has been migrated to a new personal cloud by the end of 2024</p>
</li>
<li>
<p>Use the PUT method to directly connect to EOS multipart uploads</p>
</li>
</ul>
</li>
<li>
<p>Family: My Family -&gt; Family Files</p>
<ul>
<li>
<p>Limit: The Family Cloud does not support copying, moving, or renaming folders, and files cannot be uploaded to the root directory</p>
</li>
<li>
<p>Use the POST method to resumable uploads</p>
</li>
</ul>
</li>
<li>
<p>Group: Shared Group</p>
<ul>
<li>Limit: Shared groups do not support copying and uploading</li>
</ul>
</li>
<li>
<p>Personal: The old personal cloud, which is a thing of the past.</p>
</li>
</ul>
<br/>
<h2 id="root-folder-id" tabindex="-1"><a class="header-anchor" href="#root-folder-id"><span><strong>Root folder ID</strong></span></a></h2>
<p>Specifies the directory to be mounted.</p>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>Please remember to clear or change this Root folder ID after changed the Type!</p>
</div>
<ul>
<li>
<p>Personal New: <code v-pre>/</code>. It can be left blank and it will be filled in automatically.</p>
<ul>
<li>If you want to list a folder separately, please enter the folder ID.</li>
</ul>
</li>
<li>
<p>Family: If the root directory is empty, all files are filed.</p>
<ul>
<li>If you want to list a folder separately, please enter the folder ID.</li>
</ul>
</li>
<li>
<p>Group: If the root directory is empty, the group ID will be automatically filled. It is recommended to enter the folder ID that you manually obtained.</p>
<ul>
<li>
<p>If you want to list a folder separately, please enter the folder ID.</p>
</li>
<li>
<p>Note: If you want to mount a group created by others, be sure to fill in the folder ID that you manually obtained, otherwise there will be an infinite loop in the first-level folder.</p>
</li>
</ul>
</li>
<li>
<p>Personal: <code v-pre>root</code>. It can be left blank and it will be filled in automatically. All will be listed, covering 18 items (check it yourself). Normal files are in <strong>My Folder</strong>.</p>
<ul>
<li>If the write folder ID is listed in the normal root folder.</li>
</ul>
</li>
</ul>
<br/>
<h2 id="cloud-id" tabindex="-1"><a class="header-anchor" href="#cloud-id"><span><strong>Cloud ID</strong></span></a></h2>
<p>Personal cloud does not need to fill in, <strong>Family / Group cloud is dedicated</strong>.</p>
<ul>
<li>
<p>Family: family ID, <strong>cannot be empty</strong></p>
</li>
<li>
<p>Group: group ID, <strong>cannot be empty</strong></p>
</li>
</ul>
<br/>
<h2 id="custom-upload-part-size" tabindex="-1"><a class="header-anchor" href="#custom-upload-part-size"><span><strong>Custom upload part size</strong></span></a></h2>
<p>The upload part size (bytes) can be customized by the user, and if there is a performance issue, please adjust it yourself. Set '0' to 100 MB by default.</p>
<ul>
<li>
<p>The current upload part size on the web is 20 MB (20971520).</p>
</li>
<li>
<p>The <a href="https://ecloud.10086.cn/op-help-center/api/article/40933" target="_blank" rel="noopener noreferrer">EOS documentation</a> used by the new version of the Personal Cloud states that &quot;objects larger than &gt; 5 GB cannot be uploaded&quot;, so the upload part size should not exceed 5 GB.</p>
</li>
</ul>
<h2 id="other" tabindex="-1"><a class="header-anchor" href="#other"><span><strong>Other</strong></span></a></h2>
<ul>
<li>
<p>Other information is taken from the request, which has changed from cookie to obtaining <code v-pre>Authorization</code></p>
<ul>
<li>The new personal cloud can be obtained in another way. See the picture example of <a href="#personal-new">Personal new</a></li>
</ul>
</li>
<li>
<p>If you can't find the load on the bottom of the request information, go to the top `on the top of the upper row, marked the purple highlight</p>
</li>
</ul>
<br/>
<h3 id="search-keywords" tabindex="-1"><a class="header-anchor" href="#search-keywords"><span><strong>Search keywords</strong></span></a></h3>
<p>Pay attention to the keywords, use it below to get <strong><code v-pre>authorization</code></strong>, <strong>Root folder ID</strong> and <strong>Cloud ID</strong></p>
<ul>
<li>
<p>Personal Cloud: <strong>getDisk</strong></p>
</li>
<li>
<p>Family Cloud: <strong>queryContentList</strong></p>
</li>
<li>
<p>Personal New: hcy/file/<strong>list</strong></p>
<ul>
<li>
<p>Headers - <code v-pre>Authorization</code></p>
</li>
<li>
<p>Payload - <code v-pre>parentFileId</code>: folder ID</p>
</li>
</ul>
</li>
<li>
<p>Family: <strong>queryContentList</strong></p>
<ul>
<li>
<p>Headers - <code v-pre>Authorization</code></p>
</li>
<li>
<p>Payload - <code v-pre>cloudID</code>: family ID</p>
</li>
<li>
<p>Payload - <code v-pre>catalogID</code>: folder ID</p>
</li>
<li>
<p>Response - <code v-pre>data.path</code>: full folder ID</p>
</li>
</ul>
</li>
<li>
<p>Group: <strong>queryGroupContentList</strong></p>
<ul>
<li>
<p>Headers - <code v-pre>Authorization</code></p>
</li>
<li>
<p>Payload - <code v-pre>groupID</code>: group ID</p>
</li>
<li>
<p>Payload - <code v-pre>path</code>: full folder ID</p>
</li>
</ul>
</li>
<li>
<p>Personal: <strong>getDisk</strong></p>
</li>
</ul>
<br/>
<h3 id="personal-new" tabindex="-1"><a class="header-anchor" href="#personal-new"><span><strong>Personal new:</strong></span></a></h3>
<p>Choose one of the following methods to find <code v-pre>Authorization</code> and <code v-pre>Folder ID</code></p>
<div class="image-preview">  
    <img src="/img/drivers/139/new_personal.png" alt="Personal new" title="Personal new"/>
    <img src="/img/drivers/139/139_new_au.png" alt="Personal new" title="Personal new"/>
</div>
<p>If you want to view the directory ID of a subfolder, please enter the subfolder first and then view the new request, otherwise the old directory ID will still be displayed.</p>
<br/>
<h3 id="personal-cloud" tabindex="-1"><a class="header-anchor" href="#personal-cloud"><span><strong>Personal cloud:</strong></span></a></h3>
<div class="image-preview">  
    <img src="/img/drivers/139/other-personal.png" alt="Other Browser" title="Other Browser"/>
    <img src="/img/drivers/139/ch-personal.png" alt="Chrome Browser" title="Chrome Browser"/>
</div>
<br/>
<h3 id="family-cloud" tabindex="-1"><a class="header-anchor" href="#family-cloud"><span><strong>Family cloud:</strong></span></a></h3>
<div class="image-preview">  
    <img src="/img/drivers/139/other-family.png" alt="Other Browser" title="Other Browser"/>
    <img src="/img/drivers/139/ch-family.png" alt="Chrome Browser" title="Chrome Browser"/>
</div>
<details class="hint-container details"><summary>Teaching video</summary>
<p>Although the video is V2 version, the way to obtain the directory ID and the cloud ID is the same.</p>
<p><strong><a href="https://www.bilibili.com/video/BV1US4y1w79a" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1US4y1w79a</a></strong></p>
<p>From the previous way to get cookies, now replaced it with <code v-pre>Authorization</code>，You can see the <a href="#alist-fill-in-examples">Fill in the Example</a> tutorial below</p>
</details>
<br/>
<h3 id="alist-fill-in-examples" tabindex="-1"><a class="header-anchor" href="#alist-fill-in-examples"><span><strong>AList fill in examples:</strong></span></a></h3>
<ul>
<li><mark><code v-pre>Authorization</code>Just fill in the content of the start after the basic space</mark></li>
<li>The new personal cloud folder ID will automatically change after you enter the folder. Just open whichever folder you need, and then get the value of <code v-pre>currentCatalogID</code><sup>Figure_3</sup></li>
</ul>
<div class="image-preview">  
    <img src="/img/drivers/139/add-personal.png" alt="Personal Cloud" title="Personal Cloud"/>
    <img src="/img/drivers/139/add-family.png" alt="Family Cloud" title="Family Cloud"/>
    <img src="/img/drivers/139/add_new_personal.png" alt="Personal new" title="Personal new"/>
</div>
<br/>
<h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-376" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid></div></template>


