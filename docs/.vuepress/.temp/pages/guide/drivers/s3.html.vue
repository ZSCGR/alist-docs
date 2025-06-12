<template><div><h1 id="s3" tabindex="-1"><a class="header-anchor" href="#s3"><span>S3</span></a></h1>
<p>S3 object storage protocols, such as COS, OSS, B2, etc.</p>
<h2 id="bucket" tabindex="-1"><a class="header-anchor" href="#bucket"><span><strong>Bucket</strong></span></a></h2>
<p>bucket name</p>
<h2 id="endpoint" tabindex="-1"><a class="header-anchor" href="#endpoint"><span><strong>Endpoint</strong></span></a></h2>
<p>Endpoint address (If you don’t know, you can read the official documents below)</p>
<h2 id="region" tabindex="-1"><a class="header-anchor" href="#region"><span><strong>Region</strong></span></a></h2>
<p>area (If you don’t know, you can read the official documents below)</p>
<h2 id="access-key-id" tabindex="-1"><a class="header-anchor" href="#access-key-id"><span><strong>Access key id</strong></span></a></h2>
<p>Access key id</p>
<h2 id="secret-access-key" tabindex="-1"><a class="header-anchor" href="#secret-access-key"><span><strong>Secret access key</strong></span></a></h2>
<p>Secret access key</p>
<h2 id="session-token" tabindex="-1"><a class="header-anchor" href="#session-token"><span><strong>Session token</strong></span></a></h2>
<p>Session token，Normally, the three-segment token needs to be used, and the two-segment token does not need to fill in this option.</p>
<h2 id="custom-host" tabindex="-1"><a class="header-anchor" href="#custom-host"><span><strong>Custom host</strong></span></a></h2>
<p>Custom cdn acceleration domain name</p>
<h2 id="enable-custom-host-presign" tabindex="-1"><a class="header-anchor" href="#enable-custom-host-presign"><span><strong>Enable custom host presign</strong></span></a></h2>
<p>When &quot;Custom host&quot; is left blank, this option does not function.</p>
<p>When disabled: The returned URL does not include signature, which is suitable for cases where the custom host is a CDN.</p>
<p>When enabled: The returned URL includes signature, which is suitable for cases where the host and OSS are from the same data center, the Endpoint is an internal access domain within the data center, and the custom host is an external access domain.</p>
<h2 id="sign-url-expire" tabindex="-1"><a class="header-anchor" href="#sign-url-expire"><span><strong>Sign url expire</strong></span></a></h2>
<p>The validity period of the signed download address is 4 hours by default. If a custom accelerated domain name is used, this option is invalid.</p>
<h2 id="placeholder" tabindex="-1"><a class="header-anchor" href="#placeholder"><span><strong>Placeholder</strong></span></a></h2>
<p>The name of placeholder file.</p>
<h2 id="force-path-style" tabindex="-1"><a class="header-anchor" href="#force-path-style"><span><strong>Force path style</strong></span></a></h2>
<p>If enable ForcePathStyle, usually needed for minio.</p>
<h2 id="list-object-version" tabindex="-1"><a class="header-anchor" href="#list-object-version"><span><strong>List object version</strong></span></a></h2>
<p>Refer to s3 sdk documents.</p>
<h2 id="remove-bucket" tabindex="-1"><a class="header-anchor" href="#remove-bucket"><span><strong>Remove bucket</strong></span></a></h2>
<p>Remove bucket name from path when using custom host.</p>
<h2 id="add-filename-to-disposition" tabindex="-1"><a class="header-anchor" href="#add-filename-to-disposition"><span><strong>Add filename to disposition</strong></span></a></h2>
<p>Add filename to Content-Disposition header.</p>
<h2 id="add-object-storage-examples-and-official-documents" tabindex="-1"><a class="header-anchor" href="#add-object-storage-examples-and-official-documents"><span><strong>Add object storage examples and official documents</strong></span></a></h2>
<p><code v-pre>S3 Object Storage</code> includes but is not limited to these. There are many more, such as Microsoft and Google, which have not been added. There are no examples here because it is difficult to register and activate and cannot provide example tutorials. If you have an account, please contact us and provide an account and I will add it.</p>
<Tabs :data='[{"id":"Alibaba"},{"id":"Tencent"},{"id":"VolcEngine"},{"id":"Tianyi"},{"id":"Baidu"},{"id":"Qiniu"},{"id":"Huawei"},{"id":"JD"},{"id":"Doge"},{"id":"139"},{"id":"upyun"},{"id":"Amazon"},{"id":"R2"},{"id":"B2"},{"id":"scaleway"},{"id":"Minio"},{"id":"Google Cloud"}]' tab-id="S3">
<template #title0="{ value, isActive }">Alibaba</template>
<template #title1="{ value, isActive }">Tencent</template>
<template #title2="{ value, isActive }">VolcEngine</template>
<template #title3="{ value, isActive }">Tianyi</template>
<template #title4="{ value, isActive }">Baidu</template>
<template #title5="{ value, isActive }">Qiniu</template>
<template #title6="{ value, isActive }">Huawei</template>
<template #title7="{ value, isActive }">JD</template>
<template #title8="{ value, isActive }">Doge</template>
<template #title9="{ value, isActive }">139</template>
<template #title10="{ value, isActive }">upyun</template>
<template #title11="{ value, isActive }">Amazon</template>
<template #title12="{ value, isActive }">R2</template>
<template #title13="{ value, isActive }">B2</template>
<template #title14="{ value, isActive }">scaleway</template>
<template #title15="{ value, isActive }">Minio</template>
<template #title16="{ value, isActive }">Google Cloud</template>
<template #tab0="{ value, isActive }">
<p><a href="https://oss.console.aliyun.com/" target="_blank" rel="noopener noreferrer"><strong>Alibaba Cloud OSS Official Website</strong></a></p>
<p><a href="https://help.aliyun.com/document_detail/31837.html" target="_blank" rel="noopener noreferrer"><strong>Comparison Table of Endpoints in Different Regions of OSS under Public Cloud</strong></a></p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Alist needs to skip <code v-pre>referer</code> to mount <strong>Alibaba Cloud Disk</strong>. If you do not allow <code v-pre>referer</code> to be empty in anti-leech, it will not work, because Alibaba Cloud Disk uses Alibaba Cloud OSS (in Beijing area)</p>
<p>In fact, the <code v-pre>Region|Region</code> option can be written as <code v-pre>Endpoint</code>, but for the sake of specification, let’s write it according to the comparison table.:::</p>
</div>
<p>Fill in example:</p>
<p><img src="/img/drivers/s3/al.png" alt="s3" loading="lazy"></p>
<p></p>
</template>
<template #tab1="{ value, isActive }">
<p><a href="https://console.cloud.tencent.com/cos" target="_blank" rel="noopener noreferrer"><strong>Tencent Cloud COS Official Website</strong></a></p>
<p><a href="https://cloud.tencent.com/document/product/436/6224" target="_blank" rel="noopener noreferrer"><strong>Collection Table of Endpoints in Each Region of COS under the Public Cloud</strong></a></p>
<p>Fill in example:</p>
<p><img src="/img/drivers/s3/tx.png" alt="s3" loading="lazy"></p>
</template>
<template #tab2="{ value, isActive }">
<p><a href="https://console.volcengine.com/tos" target="_blank" rel="noopener noreferrer"><strong>VolcEngine TOS Official Website</strong></a></p>
<p><a href="https://www.volcengine.com/docs/6349/107356" target="_blank" rel="noopener noreferrer"><strong>Collection Table of Endpoints in Each Region of COS under the Public Cloud</strong></a></p>
<p>Fill in example:</p>
<p><img src="/img/drivers/s3/zijie_tos.png" alt="s3" loading="lazy"></p>
</template>
<template #tab3="{ value, isActive }">
<p><a href="https://oos-cn.ctyun.cn/oos/ctyun/consoleBucket.html" target="_blank" rel="noopener noreferrer"><strong>Tianyi Cloud OOS Official Website</strong></a></p>
<p><a href="https://www.ctyun.cn/document/10026693/10027878" target="_blank" rel="noopener noreferrer"><strong>Comparison Table of Endpoints of OOS Regions under Public Cloud</strong></a></p>
<p>Fill in example:</p>
<p><img src="/img/drivers/s3/ty.png" alt="s3" loading="lazy"></p>
<p></p>
</template>
<template #tab4="{ value, isActive }">
<p><a href="https://console.bce.baidu.com/bos" target="_blank" rel="noopener noreferrer"><strong>Baidu Cloud BOS official website</strong></a></p>
<p><a href="https://cloud.baidu.com/doc/BOS/s/Bk6kqu8eq#Setrefererwhitelist" target="_blank" rel="noopener noreferrer"><strong>Self-configure Bucket’s Referer whitelist permissions</strong></a></p>
<p><a href="https://intl.cloud.baidu.com/doc/BOS/s/xjwvyq9l4-en" target="_blank" rel="noopener noreferrer"><strong>comparison table of Region and Endpoint of BOS under public cloud</strong></a></p>
<p><strong>Endpoint comparison table compatible with AWS S3</strong><a href="https://cloud.baidu.com/doc/BOS/s/xjwvyq9l4" target="_blank" rel="noopener noreferrer"><strong>Click to view details</strong></a></p>
<p>Fill in example:</p>
<p><img src="/img/drivers/s3/bd.png" alt="s3" loading="lazy"></p>
<p></p>
</template>
<template #tab5="{ value, isActive }">
<p><a href="https://portal.qiniu.com/kodo/bucket" target="_blank" rel="noopener noreferrer"><strong>Qiniu Cloud Kodo official website</strong></a></p>
<p>[<strong>Region and Endpoint comparison table of Kodo under the public cloud</strong>](<a href="https://developer" target="_blank" rel="noopener noreferrer">https://developer</a> .qiniu.com/kodo/4088/s3-access-domainname)</p>
<p>Fill in example:</p>
<p><img src="/img/drivers/s3/qn.png" alt="s3" loading="lazy"></p>
<p></p>
</template>
<template #tab6="{ value, isActive }">
<p><a href="https://www.huaweicloud.com/intl/en-us/" target="_blank" rel="noopener noreferrer"><strong>HUAWEI CLOUD OBS Official Website</strong></a></p>
<p><a href="https://developer.huaweicloud.com/intl/en-us/endpoint" target="_blank" rel="noopener noreferrer"><strong>Check the Region and Endpoint comparison table of OBS under the public cloud</strong></a>, the secret key AK/SK<a href="https://console.huaweicloud.com/iam/?region=cn-north-4#/mine/accessKey" target="_blank" rel="noopener noreferrer">acquire</a> to set by yourself.</p>
<p>Fill in example:</p>
<p><img src="/img/drivers/s3/hw.png" alt="s3" loading="lazy"></p>
</template>
<template #tab7="{ value, isActive }">
<p><a href="https://www.jdcloud.com/cn/products/object-storage-service" target="_blank" rel="noopener noreferrer"><strong>JD CLOUD OBS Official Website</strong></a></p>
<p>Advantages: <a href="https://www.jdcloud.com/cn/activity/oss" target="_blank" rel="noopener noreferrer">free 10G</a>, support IPV6<br>
Disadvantages: need to precharge 100 to open，However, after the pre-deposit is completed, the object storage is activated, and the pre-deposited amount can still be used after withdrawal.</p>
<p><a href="https://docs.jdcloud.com/cn/object-storage-service/oss-endpont-list" target="_blank" rel="noopener noreferrer"><strong>Region and Endpoint comparison table of Kodo under the public cloud</strong></a></p>
<p>Fill in example:</p>
<p><img src="/img/drivers/s3/jd.png" alt="s3" loading="lazy"></p>
</template>
<template #tab8="{ value, isActive }">
<p><a href="https://www.dogecloud.com/product/oss" target="_blank" rel="noopener noreferrer"><strong>Doge Cloud OSS Official Website</strong></a>，If you want to add Doge, use a separate <code v-pre>DogeCloud</code> driver to add, please do not use the <code v-pre>S3</code> the driver</p>
<p>Region Code：</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 0: 上海（华东），1: 北京（华北），2: 广州（华南），3: 成都（西南）</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="/img/drivers/s3/doge.png" alt="s3" loading="lazy"></p>
</template>
<template #tab9="{ value, isActive }">
<p><a href="https://console.ecloud.10086.cn/api/page/eos-console-web/CIDC-RP-00/eos/bucket?productType=os&amp;v=new" target="_blank" rel="noopener noreferrer"><strong>139 CLOUD EOS Official Website</strong></a></p>
<p>need to precharge 100 to open</p>
<p><a href="https://ecloud.10086.cn/op-help-center/doc/article/48082" target="_blank" rel="noopener noreferrer"><strong>Region and Endpoint comparison table of Kodo under the public cloud</strong></a></p>
<p>Fill in example:</p>
<p><img src="/img/drivers/s3/139.png" alt="s3" loading="lazy"></p>
</template>
<template #tab10="{ value, isActive }">
<p><a href="https://console.upyun.com/services/file/" target="_blank" rel="noopener noreferrer"><strong>Yupyun USS Official Website</strong></a>:<RouteLink to="/guide/drivers/uss.html">Click here to configure USS</RouteLink></p>
</template>
<template #tab11="{ value, isActive }">
<p><a href="https://s3.console.aws.amazon.com/s3/" target="_blank" rel="noopener noreferrer"><strong>Amazon S3 Official Website</strong></a></p>
<p>The endpoint URL contains the name of the region where the bucket is located</p>
<p>Example <sup>1</sup>, if your bucket is in the US East (Ohio) region</p>
<blockquote>
<p>Then the format of the Endpoint URL is <strong><code v-pre>s3.us-east-2.amazonaws.com/your-bucket-name</code></strong></p>
<p>Region parameter: <strong><code v-pre>us-east-2</code></strong></p>
<p>Bucket name: <strong><code v-pre>your-bucket-name</code></strong> (your own bucket name)</p>
</blockquote>
<p>Example<sup>2</sup>, my storage bucket is <code v-pre>Tokyo</code>, and the name of the storage bucket is <code v-pre>cdn-aw</code>, then the complete parameter filling is as follows</p>
<blockquote>
<ol>
<li><strong>Endpoint</strong>: <a href="http://s3.ap-northeast-1.amazonaws.com" target="_blank" rel="noopener noreferrer">s3.ap-northeast-1.amazonaws.com</a></li>
<li><strong>Region</strong>: ap-northeast-1</li>
<li><strong>Bucket Name</strong>: cdn-aw</li>
</ol>
</blockquote>
<p>Let's take a look at the complete parameter filling example</p>
<p>Fill in example:</p>
<p><img src="/img/drivers/s3/aws.png" alt="s3" loading="lazy"></p>
</template>
<template #tab12="{ value, isActive }">
<p><a href="https://dash.cloudflare.com/" target="_blank" rel="noopener noreferrer"><strong>cloudflare R2 Official Website</strong></a></p>
<p><strong>Endpoint</strong> ：The S3 endpoint is available via the  <strong><code v-pre>https://&lt;ACCOUNT_ID&gt;.r2.cloudflarestorage.com</code></strong>  endpoint.</p>
<p><strong><code v-pre>ACCOUNT_ID</code></strong> ：This account ID can be seen everywhere, and the simplest is the position at the top of the browser. The string of IDs behind the website link is your account ID.</p>
<p>填写示例：</p>
<p><img src="/img/drivers/s3/cfr2.png" alt="s3" loading="lazy"></p>
</template>
<template #tab13="{ value, isActive }">
<p><a href="https://secure.backblaze.com/b2_buckets.htm" target="_blank" rel="noopener noreferrer"><strong>B2 Official Website</strong></a></p>
<p>The full name is <strong><code v-pre>Backblaze</code></strong>, no verification information is required, and it is said that the first 10G is free.</p>
<p>Fill in example:</p>
<p><img src="/img/drivers/s3/b2.png" alt="s3" loading="lazy"></p>
</template>
<template #tab14="{ value, isActive }">
<p><a href="https://console.scaleway.com/object-storage/buckets" target="_blank" rel="noopener noreferrer"><strong>Scaleway Official Website</strong></a></p>
<p>Card required, verification information</p>
<p><a href="https://www.scaleway.com/en/docs/storage/object/concepts/#object-storage" target="_blank" rel="noopener noreferrer"><strong>Region and Endpoint comparison table of Kodo under the public cloud</strong></a></p>
<p>Fill in example:</p>
<p><img src="/img/drivers/s3/sc.png" alt="s3" loading="lazy"></p>
</template>
<template #tab15="{ value, isActive }">
<p>Those who use <code v-pre>Minio</code> self-built object storage should know how to obtain the ID and secret key, so I won’t talk about it here</p>
<p>You only need to fill in the four options of bucket name, access key ID, security access key, and Endpoint, and leave the region empty</p>
<p><strong>Endpoint：http(s)://《YOUR_IP/URL》:9001/</strong>，You can use IP or domain name</p>
<p>Finally, remember to enable <strong><code v-pre>Force Path Style</code></strong> to use, otherwise it cannot be used <a href="https://github.com/alist-org/alist/discussions/4920#discussioncomment-6635452" target="_blank" rel="noopener noreferrer">Click to view details</a></p>
<p>填写示例：</p>
<p><img src="/img/drivers/s3/mini-io.png" alt="s3" loading="lazy"></p>
</template>
<template #tab16="{ value, isActive }">
<p>I assume you already have a Google Cloud account, so let’s go directly to the Google Cloud Storage settings page.<a href="https://console.cloud.google.com/storage/settings;tab=interoperability" target="_blank" rel="noopener noreferrer">Click me</a></p>
<p>Then you will enter the following page:</p>
<p><img src="/img/drivers/s3/googleStorage1.png" alt="Google Cloud" loading="lazy"></p>
<p>You can see Endpoint and Access Key on this page, you need to select an account and create an Access Key</p>
<p><img src="/img/drivers/s3/googleStorage2.png" alt="Google Cloud" loading="lazy"></p>
<p>Access Key/Secret will be displayed on the new page, They will only be displayed this time. Please save them properly.</p>
<p><img src="/img/drivers/s3/googleStorage3.png" alt="Google Cloud" loading="lazy"></p>
<p>At this point, the EndPoint, access key Id, and security access key required by Alist have been obtained. Please view the remaining buckets and regions in the corresponding buckets.</p>
<p><img src="/img/drivers/s3/googleStorage4.png" alt="Google Cloud" loading="lazy"></p>
</template>
</Tabs>
<br/>
<h3 id="intranet-access" tabindex="-1"><a class="header-anchor" href="#intranet-access"><span><strong>Intranet access</strong> <Badge text="≥ 3.42.0" type="info" vertical="middle" /></span></a></h3>
<p>The server and object storage need to be in the same region, currently only supports <code v-pre>Alibaba Cloud OSS</code></p>
<ul>
<li>
<p>For example, if you are <code v-pre>Alibaba Cloud Hangzhou Server</code> and <code v-pre>Alibaba OSS in Hangzhou</code>, you can use it</p>
</li>
<li>
<p><a href="https://github.com/AlistGo/alist/pull/7699" target="_blank" rel="noopener noreferrer">https://github.com/AlistGo/alist/pull/7699</a></p>
</li>
</ul>
<br/>
<h3 id="how-to-solve-the-problem-of-files-with-the-same-name-as-the-folder" tabindex="-1"><a class="header-anchor" href="#how-to-solve-the-problem-of-files-with-the-same-name-as-the-folder"><span><strong>How to solve the problem of files with the same name as the folder</strong></span></a></h3>
<p>After mounting the object storage and opening the folder, there is always a file with the same name as the folder that cannot be deleted or opened</p>
<ul>
<li>The solution is to change the <code v-pre>List object version</code> in the configuration to V2, as shown in the following figure</li>
</ul>
<p><img src="/img/drivers/s3/v1andv2.png" alt="" loading="lazy"></p>
<br/>
<h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-469" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid></div></template>


