<template><div><h1 id="baidu-netdisk" tabindex="-1"><a class="header-anchor" href="#baidu-netdisk"><span>Baidu Netdisk</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Due to the limitation of Baidu Disk API, downloading files larger than about 20M needs to carry the header: &quot;User-Agent&quot;: &quot;<a href="http://pan.baidu.com" target="_blank" rel="noopener noreferrer">pan.baidu.com</a>&quot;, so when downloading files larger than 20M, you need to set the request header yourself, such as using curl:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -L</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -X</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> GET</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'YOUR_LINK'</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -H</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'User-Agent: pan.baidu.com'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Or use the proxy function in this program to transfer.</p>
</div>
<h2 id="refresh-token" tabindex="-1"><a class="header-anchor" href="#refresh-token"><span><strong>Refresh token</strong></span></a></h2>
<p><a href="https://openapi.baidu.com/oauth/2.0/authorize?response_type=code&amp;client_id=iYCeC9g08h5vuP9UqvPHKKSVrKFXGa1v&amp;redirect_uri=https://alist.nn.ci/tool/baidu/callback&amp;scope=basic,netdisk&amp;qrcode=1" target="_blank" rel="noopener noreferrer">Click here</a> to get the refresh token.</p>
<h2 id="root-folder-path" tabindex="-1"><a class="header-anchor" href="#root-folder-path"><span><strong>Root folder path</strong></span></a></h2>
<p>The root foler to mount, defaults to <code v-pre>/</code></p>
<ul>
<li>Mount a folder separately, according to the following format, <code v-pre>/</code> is the root directory, just extend to that directory if you want to mount that directory
<ul>
<li>/folder_A/....../folder_x</li>
</ul>
</li>
</ul>
<br/>
<h2 id="custom-crack-ua" tabindex="-1"><a class="header-anchor" href="#custom-crack-ua"><span><s><strong>Custom crack ua</strong></s></span></a></h2>
<p><s><a href="https://github.com/alist-org/alist/issues/5602#issuecomment-1831188682" target="_blank" rel="noopener noreferrer"><strong>UA used when using 【Native Proxy &amp; Crack API】</strong></a></s> The unofficial interface is no longer available</p>
<br/>
<h2 id="download-api" tabindex="-1"><a class="header-anchor" href="#download-api"><span><strong>Download api</strong></span></a></h2>
<ul>
<li>
<p>Official: The official interface, very stable, but for larger files, UA needs to be modified and the speed is slow (SVIP speed fast)</p>
</li>
<li>
<p>Crack: unofficial interface，<strong>Seems to be no longer available</strong> <s>You must modify the UA and some files may not have a speed limit, but it will be unstable (not guaranteed 100%availability) Need to use a version greater than <code v-pre>3.19.0</code></s></p>
<ul>
<li><s><mark>Need to change the UA to<code v-pre>netdisk</code></mark>，Modification method refer to <a href="#add-user-agent-usage-example">add-user-agent-user-example</a></s></li>
<li><s>Or turn on the Web proxy, you do not need to modify the UA (you need a large broadband to use it stably)</s></li>
<li><s>It is limited to play/download <strong><code v-pre>video (only tested in the mp4 format other formats are not tested)</code></strong>,If it is other format files, such a prompt will appear</s></li>
<li><s>This is not a mistake, this is a limit, please do not panic.</s></li>
</ul>
</li>
<li>
<p>Crack video: unofficial video interface, dedicated to playing videos, the following errors will occur in non-video formats, which is normal</p>
<ul>
<li>
<p>The browser also needs to modify the UA: <code v-pre>pan.baidu.com</code> or <code v-pre>netdisk</code> In short, if it is not the browser User-Agent, the video can be played.</p>
</li>
<li>
<p>The specific situation is the same as the previous unofficial interface usage</p>
</li>
<li>
<p><mark>The continuous use time is unknown, and 100% availability is not guaranteed</mark></p>
</li>
</ul>
</li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF">	error_code</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">31119</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF">	error_msg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"hit black userlist , hit illeage dlna"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF">	request_id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">541111111111111140</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF">	error_code</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">31329</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF">	error_msg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"hit black userlist , hit illeage dlna"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF">	request_id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">921111381111111100</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br/>
<h2 id="add-user-agent-usage-example" tabindex="-1"><a class="header-anchor" href="#add-user-agent-usage-example"><span><strong>Add &quot;User-Agent&quot; usage example</strong></span></a></h2>
<div class="hint-container caution">
<p class="hint-container-title">If you don't know how to set &quot;User-Agent&quot; see here</p>
<p><mark>The following methods are limited to Baidu super member users</mark></p>
<p><mark>Prompt again The following methods are limited to Baidu super member users</mark></p>
<p>It will only be useful if a member finishes modifying <strong><code v-pre>&quot;User-Agent&quot;</code></strong> (choose official and 302)</p>
<p>If you don’t change <strong><code v-pre>&quot;User-Agent&quot;</code></strong>, you can enable <mark>Web Agent</mark>, the disadvantage is that you need to build an Alist machine for transfer, that is to say, you need a large broadband to help you transfer</p>
<div>
    <p style="text-align: center;"><span>Tutorial on how to modify UA in web page 302 mode: <br/></span>On the left is<span style="color:red;font-weight: bold;font-size: xx-large;">『Official』</span>API，On the right is the<span style="color:blue;font-weight: bold;font-size: xx-large;">『Crack video』</span>API</p>
    <div class="image-preview">
        <video width="360" height="240" controls>
            <source src="https://r2.izyt.cc/alist/baidu/%E7%99%BE%E5%BA%A6%E5%AE%98%E6%96%B9%E6%8E%A5%E5%8F%A3.mp4" type="video/mp4">
        </video>
        <video width="360" height="240" controls>
            <source src="https://r2.izyt.cc/alist/baidu/%E7%99%BE%E5%BA%A6%E9%9D%9E%E5%AE%98%E6%96%B9%E6%8E%A5%E5%8F%A3.mp4" type="video/mp4">
        </video>
    </div>
</div>
<Tabs :data='[{"id":"Web plugin"},{"id":"Aria2"},{"id":"Motrix"}]' tab-id="ua">
<template #title0="{ value, isActive }">Web plugin</template>
<template #title1="{ value, isActive }">Aria2</template>
<template #title2="{ value, isActive }">Motrix</template>
<template #tab0="{ value, isActive }">
<ul>
<li>The advantage of using a browser plug-in to modify is that it can be played directly online, of course, downloading is also possible.</li>
</ul>
<p>Example <Badge text="1" type="info" vertical="middle" />: If you really don’t know it, you can take a look at an example on the web page: <strong><a href="https://www.bilibili.com/video/BV1UA4y1X7J8" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1UA4y1X7J8</a></strong></p>
<p>Example <Badge text="2" type="info" vertical="middle" />: Another plugin method covering 360, Chrome, Edge: <strong><a href="https://youtu.be/PP6b0WSzYMc" target="_blank" rel="noopener noreferrer">https://youtu.be/PP6b0WSzYMc</a></strong></p>
<p><img src="/img/drivers/baidu/bdUA.png" alt="alist" loading="lazy"></p>
</template>
<template #tab1="{ value, isActive }">
<ol>
<li>
<p>First follow the figure below to set the <strong><code v-pre>user-agent&quot; </code></strong>, and then click the button option in the lower right corner, click ** gear ** (local settings) to configure the parameters well</p>
</li>
<li>
<p>Then open the third button option in the lower right corner (<strong>Open the check box</strong>), and then go to the list to select the file we want to download</p>
</li>
<li>
<p>Select the files we need to download. After selecting, there will be a row of buttons. Select the second option on the right. One is sent to Aria2.</p>
</li>
</ol>
<p>If you use the webpage to modify the <strong><code v-pre>user-agent</code></strong>, you do not need to configure the <code v-pre>UA</code> of <mark><strong>Aria2</strong></mark>, and you can download it directly to Aria2</p>
<p><img src="/img/drivers/baidu/aria2-ua.png" alt="alist" loading="lazy"></p>
</template>
<template #tab2="{ value, isActive }">
<ol>
<li>First follow the figure below to set the <strong><code v-pre>user-agent&quot; </code></strong>, and then click the button option in the lower right corner, click ** gear ** (local settings) to configure the parameters well</li>
<li>Then open the third button option in the lower right corner (<strong>Open the check box</strong>), and then go to the list to select the file we want to download</li>
<li>Select the files we need to download. After selecting, there will be a row of buttons. Select the second option on the right. One is sent to Aria2.</li>
</ol>
<p>If you use the webpage to modify the <strong><code v-pre>user-agent</code></strong>, you do not need to configure the <code v-pre>UA</code> of <mark><strong>Motrix</strong></mark>, and you can download it directly to Aria2</p>
<ul>
<li>Motrix Download link：<a href="https://motrix.app/" target="_blank" rel="noopener noreferrer">Motrix Official website</a>，<a href="https://github.com/agalwood/Motrix" target="_blank" rel="noopener noreferrer">Motrix-GitHub</a></li>
</ul>
<p><img src="/img/drivers/baidu/motrix-ua.png" alt="alist" loading="lazy"></p>
</template>
</Tabs>
</div>
<br/>
<h2 id="upload-config" tabindex="-1"><a class="header-anchor" href="#upload-config"><span><strong>Upload Config</strong></span></a></h2>
<p>Official Documentation: <a href="https://pan.baidu.com/union/doc/3ksg0s9ye" target="_blank" rel="noopener noreferrer">百度网盘开放平台 - 上传 - 能力说明</a></p>
<blockquote>
<p>Baidu Netdisk requires that each slice be uploaded within 30 seconds, so excessively high concurrency during file uploads may result in a significant number of failures.</p>
</blockquote>
<ul>
<li>Upload Threads: The number of slices to upload concurrently.</li>
<li>Upload API: The domain endpoint used for uploading.</li>
<li>Custom Upload Slice Size: Allows you to specify the size of each slice. Note that there are limitations, and this feature is available to VIPs only.</li>
<li>Low Bandwidth Upload Mode: Attempts to address the frequent <code v-pre>Client.Timeout exceeded while awaiting headers</code> errors encountered in low upload bandwidth scenarios (e.g., residential broadband). When enabled, it uses the smallest possible slice size.</li>
</ul>
<br/>
<h2 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h2>
<Mermaid id="mermaid-240" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid></div></template>


