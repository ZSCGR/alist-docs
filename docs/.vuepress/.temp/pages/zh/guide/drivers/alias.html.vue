<template><div><h1 id="alias别名" tabindex="-1"><a class="header-anchor" href="#alias别名"><span>alias别名</span></a></h1>
<p>我们先看一张示意图</p>
<p><img src="/img/drivers/alias/alias.png" alt="alias" loading="lazy"></p>
<p>我们看到两个不同的文件夹合并在一个文件夹里面了，名字一样的文件文件夹也都合并在一起了，独有的单独显示了</p>
<ul>
<li>
<p>例1 <code v-pre>riluo.jpg</code> 是本地1 独有的，在上面显示了</p>
</li>
<li>
<p>例2 两个文件夹都有<code v-pre>video</code>文件夹，但是里面的内容也会进行合并，子文件夹也同样适用于<code v-pre>同名合并</code>的展示规则</p>
<ul>
<li>两个文件夹分别有两个视频，但是有一个是同名的，最后根据 <code v-pre>同名合并</code> 的展示规则 合并后 变成了<code v-pre>3</code>个文件进行展示</li>
</ul>
</li>
</ul>
<p><code v-pre>别名-alias</code>是什么？  <code v-pre>别名-alias</code>是路径合并的功能</p>
<p>除了 <strong><code v-pre>下载预览(只读)</code></strong>  操作之外    <sup>(复制,删除,重命名,离线下载,上传)</sup> 均不可以</p>
<p>举个例子：云盘账号1、云盘账号2 里面均有<code v-pre>电影</code>这个文件夹，但内容未必(全部)重合</p>
<p><strong><code v-pre>以前(虚拟路径)</code></strong>：只能分别挂载到两个不同的路径上（云盘1/电影 ，云盘2/电影）或者（电影\云盘1，电影\云盘2）<br>
<strong><code v-pre>现在(alias)</code></strong>：提供一个聚合的文件夹 （电影）里面可以同时包含云盘1和云盘2的内容</p>
<p>展示时文件夹内容规则如下</p>
<ol>
<li>同名合并：文件(夹)一样的自动合并成一个</li>
<li>同名优先：访问资源时，每次固定访问填写路径时顶部(靠前)的那个路径文件(夹)
<ul>
<li>若同名文件合并后，点击 <strong><code v-pre>播放，下载</code></strong> 时优先调用填写 <code v-pre>Paths</code> 时最靠前使用302模式路径的文件</li>
</ul>
</li>
</ol>
<p>下面解释一下 <strong><code v-pre>同名优先²</code></strong> 访问规则，强烈建议查看个举例都查看</p>
<h2 id="填写方式" tabindex="-1"><a class="header-anchor" href="#填写方式"><span><strong>填写方式</strong></span></a></h2>
<p>填写方式有两种</p>
<ol>
<li>
<p>第一种是只可以填写子文件夹路径并且最后结尾时必须同名文件夹才可以，不推荐使用 ❌</p>
<ul>
<li>
<p><code v-pre>路径</code>填写示例：</p>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="path">
    <span>path</span>
  </div>
  <div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/目录1/目录a</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/目录2/目录b</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div>
</div></li>
</ul>
</li>
<li>
<p>第二种是可以直接挂载根文件夹ID，利用<code v-pre>重命名</code>的方式，强烈推荐使用  ✔️</p>
<ul>
<li>
<p><code v-pre>路径</code>填写示例：</p>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="path">
    <span>path</span>
  </div>
  <div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#示例1 直接写根文件夹</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">合并显示:/目录1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">合并显示:/目录2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#示例2 挂载不同路径文件夹进行合并</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">合并显示:/目录1/本地测试233</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">合并显示:/目录2/视频/电视剧</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">合并显示:/目录2/电视/国产电视剧/某某台</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
</div></li>
</ul>
</li>
</ol>
<p>根据第二种这样我们可以将不同的文件夹进行<code v-pre>合并显示</code>，方便快捷</p>
<Tabs :data='[{"id":"例1"},{"id":"例2"},{"id":"例3"}]' tab-id="alias">
<template #title0="{ value, isActive }">例1</template>
<template #title1="{ value, isActive }">例2</template>
<template #title2="{ value, isActive }">例3</template>
<template #tab0="{ value, isActive }">
<p>例1、 根据下面路径填写访问(302模式有优先权)</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>本地:/本地测试/本地1</span></span>
<span class="line"><span>本地:/本地测试/本地2</span></span>
<span class="line"><span>本地:/本地测试/本地3</span></span>
<span class="line"><span>本地:/本地测试/本地4</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>1，一个视频 1 2 3 4 都有的话每次访问的是 <code v-pre>1</code></p>
<ul>
<li>如果1 3 4 使用的本地代理，2 使用的<code v-pre>302</code>，优先调用 2</li>
</ul>
</li>
<li>
<p>2，一个视频 3 4 有 那么每次访问的都是<code v-pre>3</code></p>
<ul>
<li>如果 3 使用的本地代理，4 使用的<code v-pre>302</code>，优先调用 4</li>
</ul>
</li>
</ul>
</template>
<template #tab1="{ value, isActive }">
<p>例2、根据下面的路径填写访问(302模式有优先权)</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>本地:/本地测试/本地4</span></span>
<span class="line"><span>本地:/本地测试/本地3</span></span>
<span class="line"><span>本地:/本地测试/本地2</span></span>
<span class="line"><span>本地:/本地测试/本地1</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>1，一个视频 1 2 3 4 都有的话每次访问的是 <code v-pre>4</code></p>
<ul>
<li>如果1 3 4 使用的本地代理，2 使用的<code v-pre>302</code>，优先调用 2</li>
</ul>
</li>
<li>
<p>2，一个视频 2 4 有 那么每次访问的都是<code v-pre>4</code></p>
<ul>
<li>如果 4 使用的本地代理，2 使用的<code v-pre>302</code>，优先调用 2</li>
</ul>
</li>
</ul>
</template>
<template #tab2="{ value, isActive }">
<p>例3、根据下面的路径填写访问(302模式有优先权)</p>
<p>当然了不限于只有2个文件夹，根据个人需求来写即可</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>本地测试:/本地1/video</span></span>
<span class="line"><span>本地测试:/本地2/video</span></span>
<span class="line"><span>测试其他:/测试3/images</span></span>
<span class="line"><span>测试其他:/测试4/video/电视</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>本地1 本地2 合并在一起了
<ul>
<li>如果2 使用的本地代理，1 使用的<code v-pre>302</code>，优先调用 1</li>
</ul>
</li>
<li>测试3 测试4 合并在一起了
<ul>
<li>如果3 使用的本地代理，4 使用的<code v-pre>302</code>，优先调用 4</li>
</ul>
</li>
<li>以上两种情况会出现两个不同的文件夹来展示，会如下展示，不会互相干扰</li>
</ul>
<p><img src="/img/drivers/alias/alias-3.png" alt="alias" loading="lazy"></p>
</template>
</Tabs>
<h3 id="使用的下载方式" tabindex="-1"><a class="header-anchor" href="#使用的下载方式"><span><strong>使用的下载方式</strong></span></a></h3>
<p>​		添加  <strong><code v-pre>别名-alias</code></strong>  时 <code v-pre>Web代理</code> 和 <code v-pre>Webdav策略</code> 默认不修改的情况下 Paths路径填写的存储路径可以 <code v-pre>302</code>，<code v-pre>本地代理</code>，<code v-pre>下载代理URL</code>，三种模式混合播放可以进行混合播放</p>
<p>​		如果你勾选了<code v-pre>Web代理</code> ，Paths路径填写的存储 如果有302模式播放的 到时候都会进行中转(本地代理模式)播放，变成代理模式，Webdav策略如果也进行了改动也会进行变化</p>
<p>​		当然，是否选择更换模式您自己进选择</p>
<h3 id="如果你不知道你添加的云盘是什么方式怎么办" tabindex="-1"><a class="header-anchor" href="#如果你不知道你添加的云盘是什么方式怎么办"><span><strong>如果你不知道你添加的云盘是什么方式怎么办?</strong></span></a></h3>
<ol>
<li>
<p>可以前往文档的相对应的文档最底部查看，有一份流程图说明</p>
<ul>
<li>如果有302的就是默认使用302方式，如果只有本地代理和下载代理URL默认的就是使用本地代理，前提是你没有进行手动选择</li>
</ul>
</li>
<li>
<p>可以前往添加存储时进行查看，选择对应的存储进行查看，例如我们查看一下阿里云和115分别是什么 方式</p>
<ul>
<li>
<p>从下图中看到，阿里云盘有 <code v-pre>web代理</code>选择，<code v-pre>webdav策略</code>默认是302，可以判断出阿里云盘默认使用的是302方式</p>
</li>
<li>
<p>从下图中看到，115网盘没有 <code v-pre>web代理</code>选择，<code v-pre>webdav策略</code>默认是本地代理，可以判断出115网盘默认使用的是本地代理方式</p>
</li>
<li>
<p><img src="/img/drivers/alias/alias-2.png" alt="alias" loading="lazy"></p>
</li>
</ul>
</li>
</ol>
<h3 id="其他说明" tabindex="-1"><a class="header-anchor" href="#其他说明"><span><strong>其他说明</strong></span></a></h3>
<blockquote>
<p>如果你是使用的<code v-pre>Windows</code>，会出现如下情况，有大小写不同的文件夹也会进行二次生成<br>
例如本地1，本地2 分别有 <code v-pre>video</code> 小写的v ，文件夹 OneDrive 有一个大写的 V  <code v-pre>Video</code> 文件夹<br>
然后会生成一个小写的 video文件夹里面只有 <code v-pre>本地1，本地2</code> 两个的文件夹所合并的文件<br>
同时 大写的 <code v-pre>Video</code> 里面 会集合三个文件夹的文件</p>
</blockquote>
<p>这是因为Windows 大小写不敏感，video和Video会被认为是同一个文件夹,你换成Linux或者Mac就不会有这个问题了</p>
<blockquote>
<p>暂时不支持别名进行负载均衡（后期若支持了这里会进行文档修改，如果没有修改就是还不支持）</p>
</blockquote>
<br/>
<h3 id="代理range" tabindex="-1"><a class="header-anchor" href="#代理range"><span><strong>代理range</strong></span></a></h3>
<p>需要先启用 <code v-pre>Web代理</code> 或者 <code v-pre>Webdav本地代理</code> 才会生效</p>
<ul>
<li>目前仅适用于：<code v-pre>别名</code>、<code v-pre>中国移动云盘</code>、<code v-pre>AList V3</code>
<ul>
<li>具体功能说明：<strong><a href="https://github.com/alist-org/alist/pull/6496#issue-2309839607" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/pull/6496#issue-2309839607</a></strong></li>
</ul>
</li>
</ul>
<br/>
<h3 id="同名保护" tabindex="-1"><a class="header-anchor" href="#同名保护"><span><strong>同名保护</strong></span></a></h3>
<p><sup>&gt;v3.34.0</sup>现在别名支持 <code v-pre>删除</code>、<code v-pre>重命名</code>两个操作，<mark>默认开启</mark></p>
<p>别名中可能会出现文件名一样的文件，对于文件夹名一致的文件夹，在<code v-pre>同名保护</code>开启状态下无法删除或者重命名</p>
<hr>
<details class="hint-container details"><summary>同名保护使用举例子</summary>
<p>我们分别将 <code v-pre>a</code>和<code v-pre>b</code>两个文件夹填写到别名选项中</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>a/          b/                  alias</span></span>
<span class="line"><span>a/1.png     b/1.png             alias/1.png</span></span>
<span class="line"><span>a/2.mp3     b/2.mp3             alias/2.mp3</span></span>
<span class="line"><span>a/3.mp4     b/3.mp4     ---->   alias/3.mp4</span></span>
<span class="line"><span>a/4.mkv     b/4.mkv     ---->   alias/4.mkv</span></span>
<span class="line"><span>a/5.bin     b/6.css             alias/5.bin ---> 根据规则别名目录靠前的，不同文件夹中不同名的文件靠前</span></span>
<span class="line"><span>                                alias/6.css</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们在 <code v-pre>同名保护</code> 开启状态下把同名文件 <code v-pre>1.png</code> 进行重名名或者删除会提示如下信息在右上角</p>
<div style="color: red; display: flex; justify-content: center; align-items: center; border: 3px solid red;">
    <ul style="list-style-type: none;">
        <li><i class="fa-solid fa-circle-exclamation">&nbsp;</i><b>same-name files cannot be Rename / 同名文件无法重命名</b></li><br/>
        <li><i class="fa-solid fa-circle-exclamation">&nbsp;</i><b>same-name files cannot be Delete / 同名文件无法删除</b></li>
    </ul>
</div>
<p>如果我们把 <code v-pre>同名保护</code> 选项关闭，将 <code v-pre>a/1.png</code>改成 <code v-pre>a/11.png</code> 会变成如下展示</p>
<ul>
<li>因为a/b两个文件夹都有一样的文件，<code v-pre>重命名</code>和<code v-pre>下载</code>一样优先下载填写时候靠前的文件夹，同理重名修改也是先修改靠前文件夹中的文件</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>a/          b/                  alias</span></span>
<span class="line"><span>a/1.png     b/1.png             alias/11.png</span></span>
<span class="line"><span>a/2.mp3     b/2.mp3             alias/2.mp3</span></span>
<span class="line"><span>a/3.mp4     b/3.mp4     ---->   alias/3.mp4</span></span>
<span class="line"><span>a/4.mkv     b/4.mkv     ---->   alias/4.mkv</span></span>
<span class="line"><span>a/5.bin     b/6.css             alias/5.bin</span></span>
<span class="line"><span>                                alias/1.png  ---> 因为b文件夹靠后，所以文件列表展示页靠后</span></span>
<span class="line"><span>                                alias/6.css</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实在不懂 可以自行本地测试一下再进行生产环境实装</p>
</details>
<br/>
<h3 id="下载并发、下载分片大小" tabindex="-1"><a class="header-anchor" href="#下载并发、下载分片大小"><span><strong>下载并发、下载分片大小</strong></span></a></h3>
<p>需要开启代理才会生效，详情查看：<strong><a href="https://github.com/AlistGo/alist/pull/7829" target="_blank" rel="noopener noreferrer">https://github.com/AlistGo/alist/pull/7829</a></strong></p>
</div></template>


