<template><div><h1 id="halalcloud" tabindex="-1"><a class="header-anchor" href="#halalcloud"><span>halalcloud</span></a></h1>
<ul>
<li>
<p><code v-pre>6盘（halalcloud）</code> Official website：<a href="https://2dland.cn/" target="_blank" rel="noopener noreferrer">https://2dland.cn</a></p>
<ul>
<li>Cloud Login：<a href="https://drive.2dland.cn" target="_blank" rel="noopener noreferrer">https://drive.2dland.cn</a></li>
</ul>
</li>
<li>
<p>Official announcement, document address：<a href="https://2dland.yuque.com/r/organizations/homepage" target="_blank" rel="noopener noreferrer">https://2dland.yuque.com/r/organizations/homepage</a></p>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Since <code v-pre>6盘 (halalcloud)</code> uses the <code v-pre>IPFS</code> protocol for storage, the block size is limited to <code v-pre>1MB</code>, so <strong>you can only use <code v-pre>local proxy</code> for downloading</strong>, and the single-thread speed is slow. <strong>When using it, please try to use multi-threaded download to increase the speed</strong></p>
</div>
<br/>
<h2 id="root-folder-file-id" tabindex="-1"><a class="header-anchor" href="#root-folder-file-id"><span><strong>Root folder file_id</strong></span></a></h2>
<p>Top address bar path，Root folder file_id is：<code v-pre>/</code></p>
<p>Subfolder: <code v-pre>/A folder/C folder/C folder</code></p>
<br/>
<h2 id="fill-in-the-example" tabindex="-1"><a class="header-anchor" href="#fill-in-the-example"><span><strong>Fill in the example</strong></span></a></h2>
<p>When adding a 6盘 (halalcloud) driver for the first time, the <code v-pre>Refresh token</code> can be left blank. A red error notification will pop up in the upper right corner.</p>
<p>Return to the storage page and click the refresh button. The previously added driver <code style="font-weight: bold;color:red">Click Here</code> area will become clickable. Click it to jump to the 6盘(halalcloud) official website to log in.</p>
<p><img src="/img/drivers/halalcloud/halalcloud_add.png" alt="" loading="lazy"></p>
<p><img src="/img/drivers/halalcloud/halalcloud_login.png" alt="" loading="lazy"></p>
<p><strong>The webpage will be closed automatically after leaving</strong>. After logging in successfully, please copy the <code v-pre>RefreshToken</code> field parameter link in the top address bar in time.</p>
<ul>
<li>
<p>Or copy it to other locations and then obtain the <code v-pre>RefreshToken</code> field in the link</p>
</li>
<li>
<p>After copying to other locations, it will automatically be UrlEncoded. Specifically, the <code v-pre>RefreshToken</code> field is a string starting with <code v-pre>&quot;rt__</code> and ending with <code v-pre>&quot;</code><sup>(&quot;is_encoded_to_%22)</sup></p>
</li>
<li>
<p>You can refer to the following extraction example or borrow tools</p>
</li>
</ul>
<br/>
<p>The <span style="font-weight: bold;color: blue;">blue</span> field in the link is the <code v-pre>RefreshToken</code> we need</p>
<div style="border: 3px solid red;padding: 10px;">
	<ul>
		<li>Copy the link in the address bar<code>RefreshToken</code>：</li><br/>
		<ul><br/>
			<li style="font-weight: bold;">Before decoding：</li>
			<ul>
                <li>https%3A%2F%2Fstatic.2dland.cn%2Fuser%2Flanding%2F%3Ftype%3Doauth2-response%26payload%3D%7B%22scope%22%3A%22openid%20profile%20email%20phone%22%2C%22<span style="font-weight: bold;color: #ff00c6;">refreshToken</span>%22%3A<span style="font-weight: bold;color: red;">%22</span><span style="font-weight: bold;color: blue;">rt__2xxxx5_2xxxxxa-4xx7-4xxa-9xx3-exxxxxxxxxx4</span><span style="font-weight: bold;color: red;">%22</span>%2C%22state%22%3A%2210xxxx4d3-4cxa-4xx8-axxb-1xxxf3%22%2C%22callback%22%3A%22at_callback_d4dxxxxxxxxxxxxxxxxxxxxxxxxxef_ly8og7b8%22%7D</li>
			</ul><br/>
			<li style="font-weight: bold;">After decoding：</li>
			<ul>
				<li>https://static.2dland.cn/user/landing/?type=oauth2-response&payload={"scope":"openid profile email phone","<span style="font-weight: bold;color: #ff00c6;">refreshToken</span>":<span style="font-weight: bold;color: red;">"</span><span style="font-weight: bold;color: blue;">rt__2xxxx5_2xxxxxa-4xx7-4xxa-9xx3-exxxxxxxxxx4</span><span style="font-weight: bold;color: red;">"</span>,"state":"10xxxx4d3-4cxa-4xx8-axxb-1xxxf3","callback":"at_callback_d4dxxxxxxxxxxxxxxxxxxxxxxxxxef_ly8og7b8"}</li>
			</ul><br/>
            <li style="font-weight: bold;">If you really can't see it, you can use tools to decode it.：<a href="https://tool.chinaz.com/tools/urlencode.aspx">https://tool.chinaz.com/tools/urlencode.aspx</a>
			</li>
		</ul>
	</ul>
    <img src="/img/drivers/halalcloud/halalcloud_url.png">
</div>
<br/>
<h2 id="other-parameters" tabindex="-1"><a class="header-anchor" href="#other-parameters"><span><strong>Other parameters</strong></span></a></h2>
<ul>
<li>
<p><code v-pre>Upload thread</code>：upload thread (default is 3, range 1-32)</p>
</li>
<li>
<p><code v-pre>App id</code>：<code v-pre>Application ID</code> (default is filled, no need to fill in)</p>
</li>
<li>
<p><code v-pre>App version</code>：<code v-pre>Application version</code> (default is filled, no need to fill in)</p>
</li>
<li>
<p><code v-pre>App secret</code>：<code v-pre>Application key</code> (default is filled, no need to fill in)</p>
</li>
</ul>
<br/>
<h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-108" code="eJyNkL1uwjAURnee4gpWHBQooFpKK1WMnapWHaIMjn1dWzhxajskefuaNCA6VMKL/75z7HsJIbOgg0EKn0pzBcJ2tbFMQIVBWQHaQ+tRQDmAQMlaE55nZ0ga23HFXID3lxnE4cNgEHgKUhtDF2Uplz44e0S6kLvdtCadFkHRddMvuTXWxTspb3C2nnAp99v99mrYbDZ/DQ9N/4u15ZdjjQItMIUcivGUp+OEtZi2ubGcGWic7YeCUupthdww77NsqirLsie2zmOtDvC71U2FdZhs5+ABJVypyycfd2OgTPPDpW3jE/Dx9lqQhJmArmZBnzAh/9s1P0YFzJNkJVzMOr/itqpsnahQmUWHpWAn0tgYHOY3TOz1ncwPx9ee1g=="></Mermaid></div></template>


