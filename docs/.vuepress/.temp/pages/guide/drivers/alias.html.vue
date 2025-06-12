<template><div><h1 id="alias" tabindex="-1"><a class="header-anchor" href="#alias"><span>alias</span></a></h1>
<p>Let's look at a schematic</p>
<p><img src="/img/drivers/alias/alias.png" alt="alias" loading="lazy"></p>
<p>We see that two different folders are merged into one folder, and the file folders with the same name are also merged together, and the unique ones are displayed separately</p>
<ul>
<li>
<p>Example 1 <code v-pre>riluo.jpg</code> is unique to local 1, shown above</p>
</li>
<li>
<p>Example 2 Two folders have a <code v-pre>video</code> folder, but the content inside will also be merged, and the subfolders also apply to the display rules of <code v-pre>merging with the same name</code></p>
<ul>
<li>There are two videos in each of the two folders, but one of them has the same name. Finally, according to the display rules of <code v-pre>merging with the same name</code>, it becomes <code v-pre>3</code> files for display after merging</li>
</ul>
</li>
</ul>
<p>What are <code v-pre>alias</code>?    <code v-pre>alias</code> is a function for path merging</p>
<p>Except <strong><code v-pre>download preview (read-only)</code></strong> operations ^(copy, delete, rename, offline download, upload)^ are not allowed</p>
<p>For example: cloud disk account 1 and cloud disk account 2 both have the folder <code v-pre>Movies</code>, but the contents may not (all) overlap</p>
<p><strong><code v-pre>Previously (virtual path)</code></strong>: can only be mounted to two different paths (cloud disk 1/movie, cloud disk 2/movie) or (movie\cloud disk 1, movie\cloud disk 2 )<br>
<strong><code v-pre>Now(alias)</code></strong>: Provide an aggregated folder (movie) which can contain the contents of cloud disk 1 and cloud disk 2 at the same time</p>
<p>The folder content rules when displaying are as follows</p>
<ol>
<li>Merge with the same name: the same files (folders) are automatically merged into one</li>
<li>Priority of the same name: When accessing resources, the path file (folder) at the top (front) when filling in the path for each fixed access
<ul>
<li>If the files with the same name are merged, click <strong><code v-pre> to play, and when downloading</code></strong>, it will be called first. When filling in <code v-pre>Paths</code>, the file with the 302 mode path will be used first.</li>
</ul>
</li>
</ol>
<p>Let me explain <strong><code v-pre>same name first²</code></strong> access rules</p>
<h2 id="how-to-fill-in" tabindex="-1"><a class="header-anchor" href="#how-to-fill-in"><span><strong>How to fill in</strong></span></a></h2>
<p>There are two ways to fill in</p>
<ol>
<li>
<p>The first one is that you can only fill in the path of the subfolder and the folder with the same name must be used at the end. It is not recommended to use ❌</p>
<p>-Paths filling example:</p>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="path">
    <span>path</span>
  </div>
  <div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/file1/locala</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/file2/localb</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div>
</div></li>
<li>
<p>The second is to directly mount the root folder path, using the <code v-pre>renaming</code> method, it is strongly recommended to use ✔️</p>
<p>-Paths filling example:</p>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="path">
    <span>path</span>
  </div>
  <div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#Example 1 Directly write the root folder</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">merge:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /file1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">merge:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /file2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#Example 2 Mount different path folders for merging</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">merge:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /file1/localtest233</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">merge:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /file2/videos/TV</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> series</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">merge:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /file3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 2/TV/Domestic</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> TV</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Series/Station</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> XX</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
</div></li>
</ol>
<p>According to the second method, we can <code v-pre>merge</code> and display different folders, which is convenient and quick</p>
<Tabs :data='[{"id":"example 1"},{"id":"example 2"},{"id":"example 3"}]' tab-id="alias">
<template #title0="{ value, isActive }">example 1</template>
<template #title1="{ value, isActive }">example 2</template>
<template #title2="{ value, isActive }">example 3</template>
<template #tab0="{ value, isActive }">
<p>Example 1. Fill in the access according to the following path(302 mode has priority)</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>local: /localtest/local1</span></span>
<span class="line"><span>local: /localtest/local2</span></span>
<span class="line"><span>local: /localtest/local3</span></span>
<span class="line"><span>local: /localtest/local4</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>1, if there is a video 1 2 3 4, each visit is <code v-pre>1</code></p>
<ul>
<li>If 1 3 4 uses the local proxy and 2 uses <code v-pre>302</code>, call 2 first</li>
</ul>
</li>
<li>
<p>2, a video 3 4 yes then every visit is <code v-pre>3</code></p>
<ul>
<li>If 3 uses a local proxy and 4 uses <code v-pre>302</code>, call 4 first</li>
</ul>
</li>
</ul>
</template>
<template #tab1="{ value, isActive }">
<p>Example 2. Fill in the access according to the following path(302 mode has priority)</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>local: /localtest/local4</span></span>
<span class="line"><span>local: /localtest/local3</span></span>
<span class="line"><span>local: /localtest/local2</span></span>
<span class="line"><span>local: /localtest/local1</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>1, if a video has 1 2 3 4, each visit is <code v-pre>4</code></p>
<ul>
<li>If 1 3 4 uses the local proxy and 2 uses <code v-pre>302</code>, call 2 first</li>
</ul>
</li>
<li>
<p>2, a video 3 4 has then every visit is <code v-pre>4</code></p>
<ul>
<li>If 4 uses a local proxy and 2 uses <code v-pre>302</code>, call 2 first</li>
</ul>
</li>
</ul>
</template>
<template #tab2="{ value, isActive }">
<p>Example 3、 Fill in the access according to the following path(302 mode has priority)</p>
<p>Of course, it is not limited to only 2 folders, just write according to personal needs</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>Local test:/local1/video</span></span>
<span class="line"><span>Local test:/local2/video</span></span>
<span class="line"><span>Test other:/test3/images</span></span>
<span class="line"><span>Test other:/test4/video/tv</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>local1 local2 merged together
<ul>
<li>If 2 uses a local proxy and 1 uses <code v-pre>302</code>, call 1 first</li>
</ul>
</li>
<li>Test 3 and Test 4 merged together
<ul>
<li>If 3 uses a local proxy and 4 uses <code v-pre>302</code>, call 4 first</li>
</ul>
</li>
<li>In the above two cases, two different folders will appear for display, which will be displayed as follows without interfering with each other</li>
</ul>
<p><img src="/img/drivers/alias/alias-3.png" alt="alias" loading="lazy"></p>
</template>
</Tabs>
<h3 id="the-download-method-to-use" tabindex="-1"><a class="header-anchor" href="#the-download-method-to-use"><span><strong>The download method to use</strong></span></a></h3>
<p>​		 When adding <strong><code v-pre>alias</code></strong>, <code v-pre>Web Proxy</code> and <code v-pre>Webdav Policy</code> are not modified by default. The storage path filled in the Paths path can be <code v-pre>302</code>, <code v-pre>Local Proxy</code>, <code v-pre>Download Proxy URL</code>, three modes Mixed Playback Mixed Playback is possible</p>
<p>​		 If you checked <code v-pre>Web Proxy</code>, the storage filled in by the Paths path, if there is a 302 mode playback, it will be played in transit (local proxy mode) at that time, and it will become a proxy mode. If the Webdav policy is also changed, it will also change</p>
<p>​		Of course, it is up to you to choose whether to change the mode</p>
<h3 id="what-if-you-don-t-know-how-the-cloud-disks-you-added-are-different" tabindex="-1"><a class="header-anchor" href="#what-if-you-don-t-know-how-the-cloud-disks-you-added-are-different"><span><strong>What if you don’t know how the cloud disks you added are different?</strong></span></a></h3>
<ol>
<li>
<p>You can go to the bottom of the corresponding document to view the document, there is a flow chart description</p>
<ul>
<li>If there is a 302, the 302 method is used by default. If there are only local proxy and download proxy URLs, the default is to use the local proxy, provided that you have not manually selected</li>
</ul>
</li>
<li>
<p>You can check when adding storage, select the corresponding storage to view, for example, let’s check the methods of Alibaba Cloud and 115 respectively</p>
<ul>
<li>
<p>As you can see from the figure below, Alibaba Cloud Disk has the option of <code v-pre>web proxy</code>, and <code v-pre>webdav policy</code> defaults to 302. It can be judged that Alibaba Cloud Disk uses the 302 method by default</p>
</li>
<li>
<p>As you can see from the figure below, the 115 network disk does not have the option of <code v-pre>web proxy</code>, and the <code v-pre>webdav strategy</code> defaults to the local proxy. It can be judged that the 115 network disk uses the local proxy mode by default</p>
</li>
<li>
<p><img src="/img/drivers/alias/alias-2.png" alt="alias" loading="lazy"></p>
</li>
</ul>
</li>
</ol>
<h3 id="other-instructions" tabindex="-1"><a class="header-anchor" href="#other-instructions"><span><strong>other instructions</strong></span></a></h3>
<blockquote>
<p>If you are using <code v-pre>Windows</code>, the following situation will occur, and folders with different capitalization will also be regenerated<br>
For example, Local 1 and Local 2 have a lowercase v for <code v-pre>video</code> respectively, and the folder OneDrive has an uppercase V <code v-pre>Video</code> folder<br>
Then a lowercase video folder will be generated, which contains only <code v-pre>local 1, local 2</code> files merged by two folders<br>
At the same time, the uppercase <code v-pre>Video</code> will gather the files of the three folders</p>
</blockquote>
<p>This is because Windows is case-insensitive, video and Video will be considered as the same folder, you will not have this problem if you switch to Linux or Mac</p>
<blockquote>
<p>Aliases are not supported for load balancing for the time being (if it is supported later, the document will be modified here, if it is not modified, it is not yet supported)</p>
</blockquote>
<br/>
<h3 id="proxy-range" tabindex="-1"><a class="header-anchor" href="#proxy-range"><span><strong>Proxy Range</strong></span></a></h3>
<p>You need to enable <code v-pre>Web Proxy</code> or<code v-pre> Webdav Native Proxy</code> to take effect</p>
<ul>
<li>Currently only applicable to：<code v-pre>alias</code>、<code v-pre>139Yun</code>、<code v-pre>AList V3</code>
<ul>
<li>Function Description：<strong><a href="https://github.com/alist-org/alist/pull/6496#issue-2309839607" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/pull/6496#issue-2309839607</a></strong></li>
</ul>
</li>
</ul>
<br/>
<h3 id="protect-same-name" tabindex="-1"><a class="header-anchor" href="#protect-same-name"><span><strong>Protect same name</strong></span></a></h3>
<p><sup>&gt;v3.34.0</sup>Now alias supports the two operations of <code v-pre>Delete</code> and<code v-pre> Rename</code>，<mark>By default, use</mark></p>
<p>File names like file names may appear in the alias. For folders with the same folder name, you cannot <code v-pre>Delete</code> or <code v-pre>Rename</code> when the <code v-pre>Protect same name</code> is opened.</p>
<hr>
<details class="hint-container details"><summary>Protect same name Use for example</summary>
<p>We fill in the two folders of <code v-pre>a</code> and<code v-pre> b</code> to the alias options</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>a/          b/                  alias</span></span>
<span class="line"><span>a/1.png     b/1.png             alias/1.png</span></span>
<span class="line"><span>a/2.mp3     b/2.mp3             alias/2.mp3</span></span>
<span class="line"><span>a/3.mp4     b/3.mp4     ---->   alias/3.mp4</span></span>
<span class="line"><span>a/4.mkv     b/4.mkv     ---->   alias/4.mkv</span></span>
<span class="line"><span>a/5.bin     b/6.css             alias/5.bin ---> According to the rule, aliases in directories listed earlier take precedence, and files with different names in separate folders are given priority.</span></span>
<span class="line"><span>                                alias/6.css</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If we attempt to Rename or Delete a file named <code v-pre>1.png</code> while the <code v-pre>Protect same name</code> feature is enabled, the following message will be displayed in the top right corner:</p>
<div style="color: red; display: flex; justify-content: center; align-items: center; border: 3px solid red;">
    <ul style="list-style-type: none;">
        <li><i class="fa-solid fa-circle-exclamation">&nbsp;</i><b>same-name files cannot be Rename</b></li><br/>
        <li><i class="fa-solid fa-circle-exclamation">&nbsp;</i><b>same-name files cannot be Delete</b></li>
    </ul>
</div>
<p>If we turn off the options of <code v-pre>Protect Same Name</code>, change to<code v-pre> a/1.png</code> to <code v-pre>a/11.png</code> will become the following display</p>
<ul>
<li>因为a/b两个文件夹都有一样的文件，<code v-pre>重命名</code>和<code v-pre>下载</code>一样优先下载填写时候靠前的文件夹，同理重名修改也是先修改靠前文件夹中的文件 ( Can't translate the meaning that can be understood)</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>a/          b/                  alias</span></span>
<span class="line"><span>a/1.png     b/1.png             alias/11.png</span></span>
<span class="line"><span>a/2.mp3     b/2.mp3             alias/2.mp3</span></span>
<span class="line"><span>a/3.mp4     b/3.mp4     ---->   alias/3.mp4</span></span>
<span class="line"><span>a/4.mkv     b/4.mkv     ---->   alias/4.mkv</span></span>
<span class="line"><span>a/5.bin     b/6.css             alias/5.bin</span></span>
<span class="line"><span>                                alias/1.png  ---> Because the b folder is in the rear, the file list display is relatively backward</span></span>
<span class="line"><span>                                alias/6.css</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you really do n’t understand, you can test it yourself and then install the production environment by yourself</p>
</details>
<br/>
<h3 id="download-concurrency、download-part-size" tabindex="-1"><a class="header-anchor" href="#download-concurrency、download-part-size"><span><strong>Download concurrency、Download part size</strong></span></a></h3>
<p>You need to enable the proxy to take effect, for details, see:<strong><a href="https://github.com/AlistGo/alist/pull/7829" target="_blank" rel="noopener noreferrer">https://github.com/AlistGo/alist/pull/7829</a></strong></p>
</div></template>


