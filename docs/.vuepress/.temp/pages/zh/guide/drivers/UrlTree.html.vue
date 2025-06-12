<template><div><h1 id="地址树" tabindex="-1"><a class="header-anchor" href="#地址树"><span>地址树</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p><strong><code v-pre>地址树-UrlTree</code></strong> 是什么?  是用来挂载单个文件链接的，详情可以查看  <strong>→→→<a href="https://github.com/alist-org/alist/issues/3268" target="_blank" rel="noopener noreferrer">原需求说明</a>←←←</strong></p>
</div>
<h2 id="可写" tabindex="-1"><a class="header-anchor" href="#可写"><span><strong>可写</strong> <Badge text="≥ 3.42.0" type="info" vertical="middle" /></span></a></h2>
<p>打开后可以对此驱动进行<code v-pre>新建文件夹</code>、<code v-pre>移动</code>、<code v-pre>重命名</code>、<code v-pre>复制</code>、<code v-pre>删除</code>、<code v-pre>PutURL</code></p>
<ul>
<li>当用户在实现该接口的驱动中尝试使用SimpleHttp进行离线下载时，将不会调用离线下载工具。 相反，将调用驱动程序的 <code v-pre>PutURL</code> 方法。</li>
<li><strong><a href="https://github.com/AlistGo/alist/pull/7779" target="_blank" rel="noopener noreferrer">https://github.com/AlistGo/alist/pull/7779</a></strong></li>
</ul>
<br/>
<h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span><strong>用法</strong></span></a></h2>
<p>具体的用法大概讲解一下，建议将下面不同用法都看看越往后越进阶玩法</p>
<p>别看写的看起来很难很啰嗦实际上自己操作一下秒懂。</p>
<Tabs :data='[{"id":"1"},{"id":"2"},{"id":"3"},{"id":"4"},{"id":"5"}]' tab-id="UrlTree">
<template #title0="{ value, isActive }">1</template>
<template #title1="{ value, isActive }">2</template>
<template #title2="{ value, isActive }">3</template>
<template #title3="{ value, isActive }">4</template>
<template #title4="{ value, isActive }">5</template>
<template #tab0="{ value, isActive }">
<Badge text="1" type="info" vertical="middle" />最简单的用法，直接写链接即可<h5 id="输入" tabindex="-1"><a class="header-anchor" href="#输入"><span>输入</span></a></h5>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg</span></span>
<span class="line"><span>https://raw.githubusercontent.com/alist-org/alist/main/README_cn.md</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="输出" tabindex="-1"><a class="header-anchor" href="#输出"><span>输出</span></a></h5>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>│ aff9c9c8817d943d6857a73188958d45.jpeg</span></span>
<span class="line"><span>│ README_cn.md</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p></p>
</template>
<template #tab1="{ value, isActive }">
<Badge text="2" type="info" vertical="middle" />有文件的同时，也可以创建文件夹<sup>第一个代码示例</sup>，也可以创建多个文件夹<sup>第二个代码示例</sup><h5 id="输入-1" tabindex="-1"><a class="header-anchor" href="#输入-1"><span>输入</span></a></h5>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="输出-1" tabindex="-1"><a class="header-anchor" href="#输出-1"><span>输出</span></a></h5>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开头要空两个空格~</p>
<p></p>
</template>
<template #tab2="{ value, isActive }">
<Badge text="3" type="info" vertical="middle" />可以将文件资源二次命名，实际上下载的还是原来的，并且可以填写文件大小<p>格式：<code v-pre>新命名的名字.后缀:文件大小:链接.后缀</code></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>新名称.jpeg:1024:http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg</span></span>
<span class="line"><span>新名称2.md:2048:https://raw.githubusercontent.com/alist-org/alist/main/README_cn.md</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>文件大小不用写也是可以重新命名的</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>新名称.jpeg:1024:http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg</span></span>
<span class="line"><span>新名称2.md:2048:https://raw.githubusercontent.com/alist-org/alist/main/README_cn.md</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p></p>
</template>
<template #tab3="{ value, isActive }">
<Badge text="4" type="info" vertical="middle" />多个层级目录套娃玩法<ul>
<li>第一层目录文件夹不需要空格，但是第一层目录里面的文件需要空两个空格</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>folder:</span></span>
<span class="line"><span>  http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg</span></span>
<span class="line"><span>  https://raw.githubusercontent.com/alist-org/alist/main/README_cn.md</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>如果你写好第一层了还想在第一个文件夹里面再套一个那就在这个文件夹下面套一层，写法如下，很简单
<ul>
<li>目录进行空两格，文件加两个空格就是四个，如果继续想往下套一层继续加2个空格即可</li>
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
<li>不建议的写法，像 <strong><code v-pre>2.jpeg，5.jpeg</code></strong> 这样写法，建议想往那一层文件夹就去那一层文件夹增加链接按照格式，不要这样下面这样写</li>
</ul>
<h5 id="错误写法" tabindex="-1"><a class="header-anchor" href="#错误写法"><span>错误写法</span></a></h5>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="正确写法" tabindex="-1"><a class="header-anchor" href="#正确写法"><span>正确写法</span></a></h5>
<p>像 <strong><code v-pre>2.jpeg，5.jpeg</code></strong> 这样文件添加时候，添加到对应的目录里面去，分别对应的是 <code v-pre>folder222 和 folder22222</code> 两个文件夹</p>
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
<Badge text="5" type="info" vertical="middle" />全部整合起来的举例用法，有常规的，有分类，有重命名，有标注文件大小<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>https://jsd.nn.ci/gh/alist-org/alist/README.md</span></span>
<span class="line"><span>文档:</span></span>
<span class="line"><span>  Readme.md:https://pic.rmb.bdstatic.com/bjh/说明.md</span></span>
<span class="line"><span>  Doc:</span></span>
<span class="line"><span>    文档.doc:https://pic.rmb.bdstatic.com/bjh/测试文档.doc</span></span>
<span class="line"><span>  pdf:</span></span>
<span class="line"><span>    pdf2.pdf:https://pic.rmb.bdstatic.com/bjh/测试.pdf</span></span>
<span class="line"><span>  Excel:</span></span>
<span class="line"><span>    表格3.xlsx:https://pic.rmb.bdstatic.com/bjh/测试表格.xlsx </span></span>
<span class="line"><span>视频:</span></span>
<span class="line"><span>  https://pic.rmb.bdstatic.com/bjh/222.jpeg</span></span>
<span class="line"><span>  电视剧:</span></span>
<span class="line"><span>    https://pic.rmb.bdstatic.com/bjh/222.pm4</span></span>
<span class="line"><span>  电影:</span></span>
<span class="line"><span>    https://pic.rmb.bdstatic.com/bjh/222.flv</span></span>
<span class="line"><span>音乐:</span></span>
<span class="line"><span>  https://pic.rmb.bdstatic.com/bjh/222.jpeg</span></span>
<span class="line"><span>  古典:</span></span>
<span class="line"><span>    https://pic.rmb.bdstatic.com/bjh/222.mp3</span></span>
<span class="line"><span>  轻音乐:</span></span>
<span class="line"><span>    https://pic.rmb.bdstatic.com/bjh/222.flac</span></span>
<span class="line"><span>    https://pic.rmb.bdstatic.com/bjh/222.wav</span></span>
<span class="line"><span>软件:</span></span>
<span class="line"><span>  https://pic.rmb.bdstatic.com/bjh/222.jpeg</span></span>
<span class="line"><span>  PJ:</span></span>
<span class="line"><span>    xx软件.exe:252525:https://pic.rmb.bdstatic.com/bjh/222.exe</span></span>
<span class="line"><span>    xx安装包.zip:259555:https://pic.rmb.bdstatic.com/bjh/222.zip</span></span>
<span class="line"><span>  IPA:</span></span>
<span class="line"><span>    GPT.ipa:https://pic.rmb.bdstatic.com/bjh/222.ipa</span></span>
<span class="line"><span>  APK:</span></span>
<span class="line"><span>    P图.apk:https://pic.rmb.bdstatic.com/bjh/222.apk</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p>
</template>
</Tabs>
<h2 id="提示" tabindex="-1"><a class="header-anchor" href="#提示"><span><strong>提示</strong></span></a></h2>
<ol>
<li>如果你点击下载发现没有跳转到下载而是预览，这是因为是根据你原本链接来决定的,例如你原本的链接就是下载他就会跳转到下载</li>
<li>如果你一个文件夹内有相同的文件，会合并只显示一个，默认使用预览查看下载的是你靠上(前)也就是顶部的文件
<ul>
<li>Tips:请勿同时在一个目录内新建两个同名的文件/夹哦~就像你在资源管理器新建两个一样的文件/夹 都会提醒你不能重复</li>
</ul>
</li>
<li>如果你在添加时在同级目录下写了两个相同的文件夹名字，会合并成一个文件夹但是合并后靠后(下)的文件夹的文件不会显示，但是可以通过浏览器地址栏访问（参考上一条的提示）</li>
<li>排序默认是按照你填写从上到下依次排序的和 <code v-pre>alist-别名</code>的一样</li>
</ol>
<h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-176" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></div></template>


