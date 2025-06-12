<template><div><h1 id="urltree" tabindex="-1"><a class="header-anchor" href="#urltree"><span>UrlTree</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p><strong><code v-pre>UrlTree</code></strong> What is it? It is used to mount a single file link. For details, you can check  <strong>→→→<a href="https://github.com/alist-org/alist/issues/3268" target="_blank" rel="noopener noreferrer">Original Requirements Description</a>←←←</strong></p>
</div>
<h2 id="writable" tabindex="-1"><a class="header-anchor" href="#writable"><span><strong>Writable</strong> <Badge text="≥ 3.42.0" type="info" vertical="middle" /></span></a></h2>
<p>After opening, you can perform <code v-pre>MakeDir</code>, <code v-pre>Move</code>, <code v-pre>Rename</code>, <code v-pre>Copy</code>, <code v-pre>Remove</code>, <code v-pre>PutURL</code> on this driver</p>
<ul>
<li>When a user attempts to use SimpleHttp for offline downloading in a driver that implements this interface, the offline download tool will not be invoked. Instead, the <code v-pre>PutURL</code> method of the driver will be called.</li>
<li><strong><a href="https://github.com/AlistGo/alist/pull/7779" target="_blank" rel="noopener noreferrer">https://github.com/AlistGo/alist/pull/7779</a></strong></li>
</ul>
<br/>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span><strong>usage</strong></span></a></h2>
<p>Let me briefly explain the specific usage. It is recommended to look at the different usages below. The more advanced the gameplay</p>
<p>Don't look at the writing, it looks difficult and long-winded, but in fact, you can understand it in seconds if you operate it yourself.</p>
<Tabs :data='[{"id":"1"},{"id":"2"},{"id":"3"},{"id":"4"},{"id":"5"}]' tab-id="UrlTree">
<template #title0="{ value, isActive }">1</template>
<template #title1="{ value, isActive }">2</template>
<template #title2="{ value, isActive }">3</template>
<template #title3="{ value, isActive }">4</template>
<template #title4="{ value, isActive }">5</template>
<template #tab0="{ value, isActive }">
<Badge text="1" type="info" vertical="middle" />The simplest usage, just write the link directly<h5 id="input" tabindex="-1"><a class="header-anchor" href="#input"><span><strong>input</strong></span></a></h5>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg</span></span>
<span class="line"><span>https://raw.githubusercontent.com/alist-org/alist/main/README_cn.md</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="output" tabindex="-1"><a class="header-anchor" href="#output"><span><strong>output</strong></span></a></h5>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>│ aff9c9c8817d943d6857a73188958d45.jpeg</span></span>
<span class="line"><span>│ README_cn.md</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p></p>
</template>
<template #tab1="{ value, isActive }">
<Badge text="2" type="info" vertical="middle" />While there are files, you can also create folders ^the first code example^, or you can create multiple folders ^the second code example^<h5 id="input-1" tabindex="-1"><a class="header-anchor" href="#input-1"><span><strong>input</strong></span></a></h5>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg</span></span>
<span class="line"><span>folder:</span></span>
<span class="line"><span>  http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg</span></span>
<span class="line"><span>  https://raw.githubusercontent.com/alist-org/alist/main/README_cn.md</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg</span></span>
<span class="line"><span>folder:</span></span>
<span class="line"><span>  http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg</span></span>
<span class="line"><span>  https://raw.githubusercontent.com/alist-org/alist/main/README_cn.md</span></span>
<span class="line"><span>http://pic.rmb.bdstatic.com/bjh/a66923e9bfefd03c2998ee998d3b55e7.jpeg</span></span>
<span class="line"><span>folde2r:</span></span>
<span class="line"><span>  http://pic.rmb.bdstatic.com/bjh/e919290bf3b8396817d369cedf33b8cd.jpeg</span></span>
<span class="line"><span>  https://raw.githubusercontent.com/alist-org/alist/main/CONTRIBUTING.md</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="output-1" tabindex="-1"><a class="header-anchor" href="#output-1"><span><strong>output</strong></span></a></h5>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>│  aff9c9c8817d943d6857a73188958d45.jpeg</span></span>
<span class="line"><span>└─folder</span></span>
<span class="line"><span>        aff9c9c8817d943d6857a73188958d45.jpeg</span></span>
<span class="line"><span>        README_cn.md</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>│  	aff9c9c8817d943d6857a73188958d45.jpeg</span></span>
<span class="line"><span>├─folder</span></span>
<span class="line"><span>│      aff9c9c8817d943d6857a73188958d45.jpeg</span></span>
<span class="line"><span>│      README_cn.md</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├─	a66923e9bfefd03c2998ee998d3b55e7.jpeg</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>└─folder2</span></span>
<span class="line"><span>        CONTRIBUTING.md</span></span>
<span class="line"><span>        e919290bf3b8396817d369cedf33b8cd.jpeg</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There must be two blank spaces at the beginning~</p>
<p></p>
</template>
<template #tab2="{ value, isActive }">
<Badge text="3" type="info" vertical="middle" />You can rename the file resource, in fact, the downloaded one is still the original one, and you can fill in the file size<p>Format: <code v-pre>new name.suffix:file size:link</code></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>new namejpeg:1024:http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg</span></span>
<span class="line"><span>new name2.md:2048:https://raw.githubusercontent.com/alist-org/alist/main/README_cn.md</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>The size of the file is not written, and it can also be renamed</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>new name.jpeg:1024:http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg</span></span>
<span class="line"><span>new name2.md:2048:https://raw.githubusercontent.com/alist-org/alist/main/README_cn.md</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p></p>
</template>
<template #tab3="{ value, isActive }">
<Badge text="4" type="info" vertical="middle" />Matryoshka doll usage of multiple levels of directories<ul>
<li>The first-level directory folder does not need spaces, but the files in the first-level directory need to be empty with two spaces.</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>folder:</span></span>
<span class="line"><span>  http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg</span></span>
<span class="line"><span>  https://raw.githubusercontent.com/alist-org/alist/main/README_cn.md</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>If you have written the first layer and want to put another one in the first folder, then put a layer under this folder, the writing method is as follows, very simple
<ul>
<li>The directory is empty with two spaces, and the file is four if you add two spaces. If you continue to want to go down one level and continue to add 2 spaces</li>
</ul>
</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>folder11:</span></span>
<span class="line"><span>  http://pic.rmb.bdstatic.com/bjh/111.jpeg</span></span>
<span class="line"><span>  folder111:</span></span>
<span class="line"><span>    http://pic.rmb.bdstatic.com/bjh/111.jpeg</span></span>
<span class="line"><span>    folder1111:</span></span>
<span class="line"><span>      http://pic.rmb.bdstatic.com/bjh/111.jpeg</span></span>
<span class="line"><span>  folder222:</span></span>
<span class="line"><span>    http://pic.rmb.bdstatic.com/bjh/222.jpeg</span></span>
<span class="line"><span>    folder2222:</span></span>
<span class="line"><span>      http://pic.rmb.bdstatic.com/bjh/222.jpeg</span></span>
<span class="line"><span>folder22:</span></span>
<span class="line"><span>  http://pic.rmb.bdstatic.com/bjh/222.jpeg</span></span>
<span class="line"><span>  folder222:</span></span>
<span class="line"><span>    http://pic.rmb.bdstatic.com/bjh/222.jpeg</span></span>
<span class="line"><span>    folder2222:</span></span>
<span class="line"><span>      http://pic.rmb.bdstatic.com/bjh/2223.jpeg</span></span>
<span class="line"><span>folder33:</span></span>
<span class="line"><span>  http://pic.rmb.bdstatic.com/bjh/333.jpeg</span></span>
<span class="line"><span>  folder333:</span></span>
<span class="line"><span>    http://pic.rmb.bdstatic.com/bjh/333.jpeg</span></span>
<span class="line"><span>    folder3333:</span></span>
<span class="line"><span>      http://pic.rmb.bdstatic.com/bjh/333.jpeg</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>It is not recommended to write like <strong><code v-pre>2.jpeg, 5.jpeg</code></strong>, it is recommended to go to that layer of folders to add links according to the format, not like the following error example to write</li>
</ul>
<h5 id="incorrect-usage" tabindex="-1"><a class="header-anchor" href="#incorrect-usage"><span><strong>incorrect usage</strong></span></a></h5>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>folder22:</span></span>
<span class="line"><span>  http://pic.rmb.bdstatic.com/bjh/222.jpeg</span></span>
<span class="line"><span>  folder222:</span></span>
<span class="line"><span>    http://pic.rmb.bdstatic.com/bjh/222.jpeg</span></span>
<span class="line"><span>    folder2222:</span></span>
<span class="line"><span>      http://pic.rmb.bdstatic.com/bjh/2222.jpeg</span></span>
<span class="line"><span>      folder22222:</span></span>
<span class="line"><span>        http://pic.rmb.bdstatic.com/bjh/2222.jpeg</span></span>
<span class="line"><span>        folder222222:</span></span>
<span class="line"><span>          http://pic.rmb.bdstatic.com/bjh/2222.jpeg</span></span>
<span class="line"><span>    http://pic.rmb.bdstatic.com/bjh/2.jpeg</span></span>
<span class="line"><span>        http://pic.rmb.bdstatic.com/bjh/5.jpeg</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="correct-usage" tabindex="-1"><a class="header-anchor" href="#correct-usage"><span><strong>correct usage</strong></span></a></h5>
<p>When files like <strong><code v-pre>2.jpeg, 5.jpeg</code></strong> are added, they are added to the corresponding directory, which correspond to the two folders <code v-pre>folder222 and folder22222</code> respectively</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>folder22:</span></span>
<span class="line"><span>  http://pic.rmb.bdstatic.com/bjh/222.jpeg</span></span>
<span class="line"><span>  folder222:</span></span>
<span class="line"><span>    http://pic.rmb.bdstatic.com/bjh/222.jpeg</span></span>
<span class="line"><span>    http://pic.rmb.bdstatic.com/bjh/2.jpeg</span></span>
<span class="line"><span>    folder2222:</span></span>
<span class="line"><span>      http://pic.rmb.bdstatic.com/bjh/2222.jpeg</span></span>
<span class="line"><span>      folder22222:</span></span>
<span class="line"><span>        http://pic.rmb.bdstatic.com/bjh/2222.jpeg</span></span>
<span class="line"><span>        http://pic.rmb.bdstatic.com/bjh/5.jpeg</span></span>
<span class="line"><span>        folder222222:</span></span>
<span class="line"><span>          http://pic.rmb.bdstatic.com/bjh/2222.jpeg</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab4="{ value, isActive }">
<Badge text="5" type="info" vertical="middle" />All integrated example usages include conventional, classified, rename, and marked file size<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>https://jsd.nn.ci/gh/alist-org/alist/README.md</span></span>
<span class="line"><span>document</span></span>
<span class="line"><span>  Readme.md:https://pic.rmb.bdstatic.com/bjh/说明.md</span></span>
<span class="line"><span>  Doc:</span></span>
<span class="line"><span>    document.doc:https://pic.rmb.bdstatic.com/bjh/测试文档.doc</span></span>
<span class="line"><span>  pdf:</span></span>
<span class="line"><span>    pdf2.pdf:https://pic.rmb.bdstatic.com/bjh/测试.pdf</span></span>
<span class="line"><span>  Excel:</span></span>
<span class="line"><span>    Excel3.xlsx:https://pic.rmb.bdstatic.com/bjh/测试表格.xlsx </span></span>
<span class="line"><span>video:</span></span>
<span class="line"><span>  https://pic.rmb.bdstatic.com/bjh/222.jpeg</span></span>
<span class="line"><span>  TV drama:</span></span>
<span class="line"><span>    https://pic.rmb.bdstatic.com/bjh/222.pm4</span></span>
<span class="line"><span>  Movie:</span></span>
<span class="line"><span>    https://pic.rmb.bdstatic.com/bjh/222.flv</span></span>
<span class="line"><span>music</span></span>
<span class="line"><span>  https://pic.rmb.bdstatic.com/bjh/222.jpeg</span></span>
<span class="line"><span>  classical</span></span>
<span class="line"><span>    https://pic.rmb.bdstatic.com/bjh/222.mp3</span></span>
<span class="line"><span>  Light music:</span></span>
<span class="line"><span>    https://pic.rmb.bdstatic.com/bjh/222.flac</span></span>
<span class="line"><span>    https://pic.rmb.bdstatic.com/bjh/222.wav</span></span>
<span class="line"><span>software</span></span>
<span class="line"><span>  https://pic.rmb.bdstatic.com/bjh/222.jpeg</span></span>
<span class="line"><span>  crack:</span></span>
<span class="line"><span>    xxexe.exe:252525:https://pic.rmb.bdstatic.com/bjh/222.exe</span></span>
<span class="line"><span>    xxinstall.zip:259555:https://pic.rmb.bdstatic.com/bjh/222.zip</span></span>
<span class="line"><span>  IPA:</span></span>
<span class="line"><span>    GPT.ipa:https://pic.rmb.bdstatic.com/bjh/222.ipa</span></span>
<span class="line"><span>  APK:</span></span>
<span class="line"><span>    Ps.apk:https://pic.rmb.bdstatic.com/bjh/222.apk</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p>
</template>
</Tabs>
<h2 id="tips" tabindex="-1"><a class="header-anchor" href="#tips"><span><strong>Tips</strong></span></a></h2>
<ol>
<li>If you click download and find that there is no jump to download but preview, it is because it is determined according to your original link. For example, your original link is download and it will jump to download</li>
<li>If you have the same file in a folder, it will be merged and only one will be displayed. By default, the preview is used to view and download your upper (front) or top file.
<ul>
<li>Tips: Do not create two files/folders with the same name in the same directory at the same time~ Just like you create two files/folders with the same name in the resource manager, you will be reminded not to repeat</li>
</ul>
</li>
<li>If you write two folders with the same name in the same directory when you add them, they will be merged into one folder, but the files in the lower (lower) folder will not be displayed after the merge, but you can view them through the browser Address bar access (refer to the previous tip)</li>
<li>By default, the sorting is based on what you fill in from top to bottom, which is the same as <code v-pre>alist-alias</code></li>
</ol>
<h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-176" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid></div></template>


