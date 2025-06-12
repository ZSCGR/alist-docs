<template><div><h1 id="s3" tabindex="-1"><a class="header-anchor" href="#s3"><span>S3</span></a></h1>
<p>This function is to map Alist as the S3 protocol. You can use the <a href="#s3-client-recommendation-fill-in-sample">S3 client</a>, just like Alist can mappore to webdav as webdavav</p>
<ul>
<li>It can be the entire AList (root directory) or a separate folder</li>
</ul>
<h2 id="_1-how-to-use" tabindex="-1"><a class="header-anchor" href="#_1-how-to-use"><span><strong>1. How to use</strong></span></a></h2>
<p>1.1 If it is for the first time, first open Alist Manage to generate  <Badge text="S3 access key id" type="info" /> and <Badge text="S3 secret access key" type="info" /> to save, then stop Alist, open the configuration file to enable the <code v-pre>S3</code> service</p>
<ul>
<li>If you update ID and secrets in the future, update and save, and then restart Alist to take effect</li>
</ul>
<div style="text-align:center">
<p><img src="/img/advanced/s3/s3_config.png" alt="" loading="lazy"></p>
</div>
<p>1.2 Open the <RouteLink to="/config/configuration.html#s3">Configuration File</RouteLink>, change the <code v-pre>enable</code> field to<code v-pre> true</code> to enable S3 service</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "s3"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "enable"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "port"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5246</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "ssl"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.3 After the first two steps are completed, Start Alist, open the Manage <code v-pre>s3</code> configuration page, and choose to store a certain path as an object to store the barrel</p>
<ul>
<li>
<p>On the left is the name of the storage bucket displayed outside, and the right is the existing list directory path of Alist. If you want to map the entire root directory, you can choose the <code v-pre>root</code> path in the list</p>
<ul>
<li>There may be errors in manual filling. It is recommended to use the <Badge text="选择" type="info" /> button on the right side for selection</li>
</ul>
</li>
</ul>
<p><img src="/img/advanced/s3/s3_add_backup.png" alt="" loading="lazy"></p>
<br/>
<h2 id="_2-use-instructions" tabindex="-1"><a class="header-anchor" href="#_2-use-instructions"><span><strong>2. Use instructions</strong></span></a></h2>
<ol>
<li>After mapping AList as S3 service, <mark>All download links are transferred to the local agent</mark>, whether it is 302 or open the Proxy URL link download</li>
<li>Currently only supports the use of client operations <code v-pre>List</code>,<code v-pre> get</code>, <code v-pre>put</code>,<code v-pre> del</code>, other operations are not supported yet</li>
<li>Currently only supports the use of the <code v-pre>S3 Client</code> to operate, Mount S3 to the <code v-pre>AList Object Storage</code> temporarily unavailable</li>
</ol>
<h3 id="s3-client-recommendation-fill-in-sample" tabindex="-1"><a class="header-anchor" href="#s3-client-recommendation-fill-in-sample"><span><strong>S3 client recommendation/fill in sample</strong></span></a></h3>
<p>S3 Client - S3 Browser：<a href="https://s3browser.com/download.aspx" target="_blank" rel="noopener noreferrer">https://s3browser.com</a></p>
<div class="vp-card-container">
  <VPCard
    title="S3 Browser - Zip Package"
  	logo="/img/advanced/s3/s3_logo/s3browser.png"
  	desc=""
    link="https://s3browser.com/download/s3browser-11-6-7.zip"
    background="rgba(94, 239, 227, 0.15)"
  />
  <VPCard
    title="S3 Browser - exe Install"
  	logo="/img/advanced/s3/s3_logo/s3browser.png"
  	desc=""
    link="https://s3browser.com/download/s3browser-11-6-7.exe"
    background="rgba(55, 124, 252, 0.15)"
  />
  <VPCard
    title="S3Drive"
  	desc="Support Android、iOS、Linux、MacOS、Desktop"
  	logo="/img/advanced/s3/s3_logo/s3drive.png"
    link="https://s3drive.app"
    background="rgba(94, 239, 227, 0.15)"
  />
  <VPCard
    title="Placeholder"
  	logo="/logo.svg"
  	desc="Placeholder"
    link=""
    background="rgba(0, 255, 185, 0.15)"
  />
</div>
<Tabs :data='[{"id":"s3browser"},{"id":"S3Drive"}]' tab-id="s3">
<template #title0="{ value, isActive }">s3browser</template>
<template #title1="{ value, isActive }">S3Drive</template>
<template #tab0="{ value, isActive }">
<p><img src="/img/advanced/s3/s3browser.png" alt="" loading="lazy"></p>
</template>
<template #tab1="{ value, isActive }">
<p><img src="/img/advanced/s3/s3drive.png" alt="" loading="lazy"></p>
</template>
</Tabs>
<p>At present, I only know this S3 Client. If you know other S3 Client, you can recommend it and then add it.</p>
</div></template>


