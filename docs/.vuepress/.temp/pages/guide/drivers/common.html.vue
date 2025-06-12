<template><div><h1 id="common" tabindex="-1"><a class="header-anchor" href="#common"><span>Common</span></a></h1>
<h2 id="mount-path" tabindex="-1"><a class="header-anchor" href="#mount-path"><span><strong>Mount Path</strong></span></a></h2>
<p>Unique identifier, the name displayed to the outside world, that is, the location to be mounted. If you want to mount to the root directory, it is <code v-pre>/</code></p>
<p><img src="/img/drivers/common/path_b.png" alt="" data-mode="lightmode-only" loading="lazy"></p>
<p><img src="/img/drivers/common/path_h.png" alt="" data-mode="darkmode-only" loading="lazy"></p>
<p>Repeated use of mount path name</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Failed create storage in database: UNIQUE constraint failed: x_storages.mount_path</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>The mount path name is not filled in</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Key: 'Storage.MountPath' Error:Field validation for 'MountPath' failed on the 'required' tag</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><br/>
<h2 id="order" tabindex="-1"><a class="header-anchor" href="#order"><span><strong>Order</strong></span></a></h2>
<p>When there are multiple accounts, it is used for sorting, The smaller the more forward</p>
<br/>
<h2 id="remark" tabindex="-1"><a class="header-anchor" href="#remark"><span><strong>Remark</strong></span></a></h2>
<p>Anything you want to fill in, which is just for reminding you what this storage is</p>
<h3 id="reference" tabindex="-1"><a class="header-anchor" href="#reference"><span><strong>Reference</strong> <Badge text="≥ 3.42.0" type="info" vertical="middle" /></span></a></h3>
<p>Reference authentication, tokens, etc. from <code v-pre>Mounted Storage</code>, and use the same token for multiple network disks</p>
<p>Currently only the following network disks are supported:</p>
<ul>
<li>139Yun</li>
<li>AliyundriveOpen</li>
<li>189CloudPC</li>
<li>123PanShare（ref 123Pan）</li>
<li>Cloudreve V3 / V4</li>
</ul>
<p>In the storage settings, set the first line of <code v-pre>Remark</code> to: <strong>ref:/mount path</strong></p>
<ul>
<li><a href="https://github.com/AlistGo/alist/pull/7805" target="_blank" rel="noopener noreferrer">https://github.com/AlistGo/alist/pull/7805</a></li>
</ul>
<p><img src="/img/drivers/ref_token.png" alt="" loading="lazy"></p>
<br/>
<h2 id="enable-signing" tabindex="-1"><a class="header-anchor" href="#enable-signing"><span><strong>Enable signing</strong></span></a></h2>
<p>Sign and encrypt files (no password required), only valid for this driver, if other signatures are not enabled and <code v-pre>signature all</code> and <code v-pre>meta-information encryption</code> are not set, others will not be signed</p>
<p>Usage scenario: I don't want to enable all signatures, and I don't want to set metadata encryption. I just want to sign and encrypt a certain driver to prevent it from being scanned.</p>
<p>Scope of influence: <code v-pre>Settings--&gt;Global--&gt;Signature All</code> &gt; <code v-pre>Metainformation Directory Encryption</code> &gt; <code v-pre>Single Driver Signature</code></p>
<br/>
<h2 id="disable-index" tabindex="-1"><a class="header-anchor" href="#disable-index"><span><strong>Disable index</strong></span></a></h2>
<p>Allow users to disable storage indexing.</p>
<ul>
<li>For example, if you enable <code v-pre>Ignore Index</code> in the index options, you no longer need to configure it after enabling <code v-pre>Disable Index</code>, which is more convenient.</li>
</ul>
<p><a href="https://github.com/AlistGo/alist/pull/7730" target="_blank" rel="noopener noreferrer">alist#7730</a>、<a href="https://github.com/AlistGo/alist-web/pull/219" target="_blank" rel="noopener noreferrer">alist-web#219</a></p>
<br/>
<h3 id="cache-expiration" tabindex="-1"><a class="header-anchor" href="#cache-expiration"><span><strong>Cache Expiration</strong></span></a></h3>
<p>Cache time of directory structure.</p>
<br/>
<h2 id="web-proxy" tabindex="-1"><a class="header-anchor" href="#web-proxy"><span><strong>Web proxy</strong></span></a></h2>
<p>Whether the web preview,download and the direct link go through the transfer. If you open this, recommended you set <RouteLink to="/config/configuration.html#site_url">site_url</RouteLink> so that alist can works fine.</p>
<hr>
<ul>
<li>Web proxy Strategies ：It is a strategy when using the webpage. The default is a local agent. If you fill in the proxy URL and enable the web agent to use the proxy URL</li>
<li>Webdav policy Strategies：It is an option to use the webdav function
<ul>
<li>If there are 302 options default to 302, if there is no 302 option default to the local agent, if you want to use the agent URL, please fill in and manually switch to the proxy URL strategy</li>
</ul>
</li>
</ul>
<p>The two are different configurations</p>
<br/>
<h2 id="webdav-policy" tabindex="-1"><a class="header-anchor" href="#webdav-policy"><span><strong>Webdav policy</strong></span></a></h2>
<ul>
<li>302 redirect: redirect to the real link</li>
<li>use proxy URL: redirect to proxy URL</li>
<li>native proxy: return data directly through local transit(best compatibility)</li>
</ul>
<hr>
<ul>
<li>302 redirect：Although it does not consume traffic, it is not recommended to share and use it.</li>
<li>use proxy URL：It will consume the traffic of the agent URL</li>
<li>native proxy：The traffic of the construction of Alist device will consume</li>
</ul>
<h3 id="description-of-three-modes" tabindex="-1"><a class="header-anchor" href="#description-of-three-modes"><span><strong>Description of three modes</strong></span></a></h3>
<FlowChart id="flowchart-195" code="eJwztLUrLkksKrFSSM7JL01RSMkszuYysrVLzUuxUqjML+VSUOAy1CjKTM8o0dS1M+ICAHhNDlc=" preset="vue"></FlowChart><FlowChart id="flowchart-196" code="eJwzNLS1Ky5JLCqxUkjOyS9NUUjJLM7mMjKytcsvSC1KLMnMz7NSSMkvz8vJT0xRKCjKr6hUCA3ysbJThgnqggV1S4tyuIyNbe1S81KsFCrzS7kUuAwNNYoy0zNKNHXtjIzgTGNjLgApRCYC" preset="vue"></FlowChart><FlowChart id="flowchart-197" code="eJw9xjEOgCAMAMC9r+iogwOwkcBfCFQlEmpKMfH3bm5nTIhDk6jH3HgWLHVcYG2IfJMkrdw9DpKHBBvn1FAl9bGTgHMhUi8eX56AYMwi9Th13aK1P52DD3o7H5o=" preset="vue"></FlowChart><br/>
<h2 id="download-proxy-url" tabindex="-1"><a class="header-anchor" href="#download-proxy-url"><span>Download proxy URL</span></a></h2>
<p>When the proxy is turned on without filling in this field, the local machine will be used for transfer by default.Two proxy methods are provided:</p>
<Tabs :data='[{"id":"cloudflare workers"},{"id":"Universal Binary"}]'>
<template #title0="{ value, isActive }">cloudflare workers</template>
<template #title1="{ value, isActive }">Universal Binary</template>
<template #tab0="{ value, isActive }">
<p>You can use <code v-pre>cloudflare workers</code> for proxy, just fill in the <code v-pre>cloudflare workers</code> address here.<br>
The workers code can be found at <a href="https://github.com/alist-org/alist-proxy/blob/main/alist-proxy.js" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist-proxy/blob/main/alist-proxy.js</a>. in:</p>
<ul>
<li>ADDRESS: your Alist address, The protocol header must be added, and cannot be followed by /. Such as <code v-pre>https://pan.nn.ci</code>;</li>
<li>TOKEN: you can get in <code v-pre>Other settings</code> in your Alist manage page;</li>
<li>WORKER_ADDRESS: your worker address, which should normally be same as <strong>Download proxy URL</strong>.</li>
</ul>
<p>⚠️ Cloudflare Workers free CDN only supports (regardless of domestic or foreign) <strong>http80 port</strong> and <strong>https443 port</strong>, from group friend test</p>
<ul>
<li>When mounting the configuration in the Alist background, fill in the <strong>download proxy URL</strong> at the end of the link without <code v-pre>/</code></li>
</ul>
<p>If you do n’t understand <a href="https://anwen-anyi.github.io/index/11-durl.html" target="_blank" rel="noopener noreferrer"><strong>Disassembled for details</strong></a></p>
</template>
<template #tab1="{ value, isActive }">
<p>You can also use another machine for proxying, download the program at <a href="https://github.com/alist-org/alist-proxy/releases" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist-proxy/releases</a></p>
<p><code v-pre>./alist-proxy -help</code> to see how to use it.</p>
<p>If you don’t understand, there are detailed <a href="https://www.bilibili.com/video/BV17N411S7fg/" target="_blank" rel="noopener noreferrer"><strong>video tutorial</strong></a></p>
</template>
</Tabs>
<p>You can even develop your own proxy program, the general steps are:</p>
<ul>
<li>When downloading, it will request <code v-pre>PROXY_URL/path?sign=sign_value</code></li>
<li>Verify sign in the proxy program, the calculation method of sign is:</li>
</ul>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-js"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> to_sign</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> `</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">${</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">path</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">${</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">expireTimeStamp</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">`</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> _sign</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> safeBase64</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">hmac_sha256</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">to_sign</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B">TOKEN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">));</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> sign</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> `</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">${</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">_sign</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">${</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">expireTimeStamp</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">`</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code v-pre>TOKEN</code> is the <RouteLink to="/config/other.html#token">token</RouteLink> of admin user.</p>
<ul>
<li>After verifying the sign is correct, requesting <code v-pre>HOST/api/fs/link</code>, you can get the URL of the file and the request header to be carried</li>
<li>Use the information to request and return</li>
</ul>
<br/>
<h2 id="sort-related" tabindex="-1"><a class="header-anchor" href="#sort-related"><span>Sort related</span></a></h2>
<ul>
<li>Sort by: Sort by what</li>
<li>Sort direction: Whether the sort direction is ascending or descedning</li>
</ul>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p>Some drives use their own sorting method, which may be different.</p>
</div>
<br/>
<h2 id="extract-folder" tabindex="-1"><a class="header-anchor" href="#extract-folder"><span>Extract folder</span></a></h2>
<ul>
<li>Extract to front: put all folders to the front when sorting</li>
<li>Extract to back: put all folders to the back when sorting</li>
</ul>
</div></template>


