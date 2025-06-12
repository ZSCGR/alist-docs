<template><div><h1 id="cloudreve-v4-share" tabindex="-1"><a class="header-anchor" href="#cloudreve-v4-share"><span>Cloudreve V4 / Share</span></a></h1>
<h2 id="parameter-explanation" tabindex="-1"><a class="header-anchor" href="#parameter-explanation"><span>Parameter Explanation</span></a></h2>
<h3 id="address" tabindex="-1"><a class="header-anchor" href="#address"><span>Address</span></a></h3>
<p>The address of the Cloudreve V4 server, such as: <code v-pre>https://www.example.com</code>. It is better to remove the slash <code v-pre>/</code> after it.</p>
<h3 id="authentication" tabindex="-1"><a class="header-anchor" href="#authentication"><span>Authentication</span></a></h3>
<p>Cloudreve V4 supports authentication using Token. This means the mounting authentication methods are divided into:</p>
<ol>
<li><code v-pre>Username</code> + <code v-pre>Password</code>: Automatically uses the login interface to obtain Access Token and Refresh Token, there might be issues with CAPTCHA.</li>
<li><code v-pre>Refresh Token</code> Only: Automatically uses the refresh interface to renew Access Token and Refresh Token, parameters can be found from browser requests or Local Storage.</li>
<li><code v-pre>Access Token</code> Only: Can be temporarily used but will expire and cannot be renewed.</li>
<li>None: Anonymous user, suitable for public sharing.</li>
<li><RouteLink to="/guide/drivers/common.html#reference">Reference</RouteLink>: Fill in <code v-pre>ref:/{mount path}</code> in <code v-pre>Remark</code>: Reference authentication, tokens, etc., from &quot;Mounted Storage&quot;.</li>
</ol>
<p>Steps to get tokens:</p>
<Tabs :data='[{"id":"From Local Storage"},{"id":"From Network"}]'>
<template #title0="{ value, isActive }">From Local Storage</template>
<template #title1="{ value, isActive }">From Network</template>
<template #tab0="{ value, isActive }">
<div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>There may be multiple sessions; please select the one you want to mount.</p>
</div>
<p><img src="/img/drivers/cloudreve_v4/cloudreve_v4_token_local_storage.png" alt="cloudreve_v4_token_local_storage" loading="lazy"></p>
<p></p>
</template>
<template #tab1="{ value, isActive }">
<div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>You may need to log in anew to see this request.</p>
</div>
<p><img src="/img/drivers/cloudreve_v4/cloudreve_v4_token_resp.png" alt="cloudreve_v4_token_resp" loading="lazy"></p>
</template>
</Tabs>
<h3 id="root-folder-path" tabindex="-1"><a class="header-anchor" href="#root-folder-path"><span>Root Folder Path</span></a></h3>
<p>Cloudreve V4 uses a custom URI as the path, which can be obtained from the <code v-pre>?path=</code> in the web link. The obtained parameters may need to be <a href="https://www.google.com/search?q=URL+decode" target="_blank" rel="noopener noreferrer">URL decoded</a>.</p>
<h4 id="mounting-my-files" tabindex="-1"><a class="header-anchor" href="#mounting-my-files"><span>Mounting My Files</span></a></h4>
<p>Default is <code v-pre>cloudreve://my/</code>, listing user files.</p>
<h4 id="mounting-share" tabindex="-1"><a class="header-anchor" href="#mounting-share"><span>Mounting Share</span></a></h4>
<p>Supports mounting folder-type shares, the path should be filled as: <code v-pre>cloudreve://{ShareID}@share/</code>.</p>
<ul>
<li>
<p>ShareID is the parameter after <code v-pre>/s/</code> in the share link.</p>
</li>
<li>
<p>Currently, Cloudreve V4 does not support creating password-protected shares. However, if the data is migrated from V3, the previously created sharing password will be retained. The URI of the share link with the password (<code v-pre>/s/{shareID}/{sharePassword}</code>) is <code v-pre>cloudreve://{shareID}:{sharePassword}@share</code>.</p>
</li>
</ul>
<h3 id="enable-folder-size" tabindex="-1"><a class="header-anchor" href="#enable-folder-size"><span>Enable Folder Size</span></a></h3>
<p>Enable Cloudreve V4 server to calculate the size of each folder. Enabling this feature may cause server errors or slow performance, and it is <code v-pre>disabled</code> by default.</p>
<h3 id="enable-thumbnails" tabindex="-1"><a class="header-anchor" href="#enable-thumbnails"><span>Enable Thumbnails</span></a></h3>
<p>Enable Cloudreve V4 server to generate thumbnails for each file. Enabling this feature may cause server errors or slow performance, and it is <code v-pre>disabled</code> by default.</p>
<h3 id="enable-version-upload" tabindex="-1"><a class="header-anchor" href="#enable-version-upload"><span>Enable Version Upload</span></a></h3>
<p>Enable overwrite upload and keep the previous version, which consumes extra space. Disabled by default, delete the existing file before overwriting upload.</p>
<h3 id="custom-ua" tabindex="-1"><a class="header-anchor" href="#custom-ua"><span>Custom UA</span></a></h3>
<p>Used to customize the <code v-pre>User-Agent</code> header information used in requests. Leaving it blank will use Alist default settings.</p>
<h3 id="sorting" tabindex="-1"><a class="header-anchor" href="#sorting"><span>Sorting</span></a></h3>
<p>Supports changing the sorting parameters when requesting lists.</p>
<h2 id="upload" tabindex="-1"><a class="header-anchor" href="#upload"><span>Upload</span></a></h2>
<p>The supported storage policies for uploading are as follows:</p>
<ul>
<li>Local storage</li>
<li>Slave storage</li>
<li>OneDrive</li>
<li>S3</li>
</ul>
<p>Upload storage policies can be set within Cloudreve V4 web interface by entering the corresponding folder (requires the server to be Cloudreve Pro).</p>
<p>If upload permissions are enabled for shares, uploads are supported. It requires the server to check &quot;Enhance anonymous user permissions&quot; for the user group (requires the server to be Cloudreve Pro).</p>
<h2 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h2>
<Mermaid id="mermaid-170" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid></div></template>


