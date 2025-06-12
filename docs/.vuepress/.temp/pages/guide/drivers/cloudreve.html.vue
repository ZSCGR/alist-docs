<template><div><h1 id="cloudreve-v3" tabindex="-1"><a class="header-anchor" href="#cloudreve-v3"><span>Cloudreve V3</span></a></h1>
<h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h2>
<h3 id="address" tabindex="-1"><a class="header-anchor" href="#address"><span>Address</span></a></h3>
<p>The address of the Cloudreve V3 server, such as: <code v-pre>https://www.example.com</code>. It is better to remove the slash <code v-pre>/</code> after it.</p>
<h3 id="authentication" tabindex="-1"><a class="header-anchor" href="#authentication"><span>Authentication</span></a></h3>
<p>Cloudreve V3 supports authentication using Cookie. This means the mounting authentication methods are divided into:</p>
<ol>
<li><code v-pre>Username</code> + <code v-pre>Password</code>: Automatically uses the login interface to obtain Cookie, there might be issues with CAPTCHA.</li>
<li><code v-pre>Cookie</code> Only: Can be temporarily used but will expire and cannot be renewed. Parameters can be found from browser requests or Local Storage.</li>
<li><RouteLink to="/guide/drivers/common.html#Reference">Reference</RouteLink>: Fill in <code v-pre>ref:/{mount path}</code> in <code v-pre>Remark</code>: Reference authentication, tokens, etc., from &quot;Mounted Storage&quot;.</li>
</ol>
<p>Steps to get cookie:</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Only the string following cloudreve-session= is required.</p>
</div>
<p><img src="/img/drivers/cloudreve/cloudreve_get_cookie.png" alt="cloudreve_get_cookie" loading="lazy"></p>
<h3 id="root-folder-path" tabindex="-1"><a class="header-anchor" href="#root-folder-path"><span>Root Folder Path</span></a></h3>
<p>Default is <code v-pre>/</code>, which can be obtained from the <code v-pre>?path=</code> in the web link. The obtained parameters may need to be <a href="https://www.google.com/search?q=URL+decode" target="_blank" rel="noopener noreferrer">URL decoded</a>.</p>
<h3 id="enable-folder-size" tabindex="-1"><a class="header-anchor" href="#enable-folder-size"><span>Enable Folder Size</span></a></h3>
<p>Enable Cloudreve V3 server to calculate the size of each folder and generate thumbnails for each file. Enabling this feature may cause server errors or slow performance, and it is <code v-pre>disabled</code> by default.</p>
<h3 id="custom-ua" tabindex="-1"><a class="header-anchor" href="#custom-ua"><span>Custom UA</span></a></h3>
<p>Used to customize the <code v-pre>User-Agent</code> header information used in requests. Leaving it blank will use Alist default settings.</p>
<h2 id="upload" tabindex="-1"><a class="header-anchor" href="#upload"><span>Upload</span></a></h2>
<p>The supported storage policies for uploading are as follows:</p>
<ul>
<li>Local storage</li>
<li>Slave storage</li>
<li>OneDrive</li>
<li>S3</li>
</ul>
<p>Upload storage policies can be set within Cloudreve V4 web interface by entering the corresponding folder (requires the server to be Cloudreve Pro).</p>
<h2 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h2>
<Mermaid id="mermaid-98" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid></div></template>


