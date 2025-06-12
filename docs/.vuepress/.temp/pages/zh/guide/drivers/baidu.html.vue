<template><div><h1 id="百度网盘" tabindex="-1"><a class="header-anchor" href="#百度网盘"><span>百度网盘</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>由于百度网盘 API 的限制，下载大于 20M 左右的文件需要携带 header：&quot;User-Agent&quot;:&quot;<a href="http://pan.baidu.com" target="_blank" rel="noopener noreferrer">pan.baidu.com</a>&quot;，所以下载大于 20M 的文件时，需要设置请求头，例如使用 curl：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -L</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -X</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> GET</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'YOUR_LINK'</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -H</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'User-Agent:pan.baidu.com'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>或者使用本程序中的代理功能进行传输。</p>
<Mermaid id="mermaid-11" code="eJyNkstu00AUhvd5ilGzAckODaFUWDRSUR+BioXFwpdxanncVLFLQfIKBELl4hRSmkIgRW1TC0FaCak0zu1lZsbd8QrMjJOQqqrU3e/vnPOfi0eW5Yxv+wgqINkdkLiF463kS520nuP+NmlESTykH37R2uBvr5nhyRYqbxgrWsUHDx9kAPD8ZwgCBCwbISVr3bMkz6+UHahkC4XCSMsbtumvKHfWnk4K3HGBNT83P3e9Gu36TQyked4StFKRHxXOWrOXYrcnMetSrDBpeJfFNPXG9IVuPmYsr5J2nX7q0PeHJNznRFfPT18m8RHufSZbdU4MldY6y4tcmirDky+o4rN308BSaeMnaZzg7n5SfcVJiZGY7EbkrEXafXJwxKFzEZ6ETDAnshnxKFJJeIy7h+lf48RVk+5H+rXJtQYWFoogz0cXSucjK4oyugVDAa0fB8DgHMg5uRgwa4FcvosoMoXiQQD5VuN6bskMlhfZRvR19b5euVVc01Zzumab6zmj7AYA8b3H+YXUgxtPs7QnOwwetsVtSPjj/EUf94dJLZq+EI2+k14IRB9SfUt3Ttmzpd8aaeYjqC9pT3CnSXf26O9t4SRS08BVpgHgD8ESi5aEEkM6/G9cXFQs4/wfXDBxJWQbDjAkKJmSKxmGZJoShGAmS/90yeaevO7BiqyV4Kovp/2TgxgP3sxk/gEoBoIn"></Mermaid></div>
<h2 id="刷新令牌" tabindex="-1"><a class="header-anchor" href="#刷新令牌"><span><strong>刷新令牌</strong></span></a></h2>
<p><a href="https://openapi.baidu.com/oauth/2.0/authorize?response_type=code&amp;client_id=iYCeC9g08h5vuP9UqvPHKKSVrKFXGa1v&amp;redirect_uri=https://alist.nn.ci/tool/baidu/callback&amp;scope=basic,netdisk&amp;qrcode=1" target="_blank" rel="noopener noreferrer">点击这里</a> 来获取刷新令牌。</p>
<h2 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id"><span><strong>根文件夹ID</strong></span></a></h2>
<p>要挂载的根文件夹，默认为<code v-pre>/</code></p>
<ul>
<li>单独挂载某文件夹，按照下面格式，<code v-pre>/</code>是根目录，想挂载那个目录就延伸到那个目录就可以
<ul>
<li>/文件夹-A/……/文件夹-x</li>
</ul>
</li>
</ul>
<br/>
<h2 id="自定义破解ua" tabindex="-1"><a class="header-anchor" href="#自定义破解ua"><span><s><strong>自定义破解ua</strong></s></span></a></h2>
<p><s><a href="https://github.com/alist-org/alist/issues/5602#issuecomment-1831188682" target="_blank" rel="noopener noreferrer"><strong>使用【本地代理 &amp; Crack API】时候使用的UA</strong></a></s> 非官方接口已无法使用</p>
<br/>
<h2 id="下载接口" tabindex="-1"><a class="header-anchor" href="#下载接口"><span><strong>下载接口</strong></span></a></h2>
<ul>
<li>
<p>Official: 官方接口，很稳定，但是文件比较大，需要修改UA，速度慢 (SVIP速度快)</p>
</li>
<li>
<p>Crack: 非官方接口，<strong>似乎已经无法使用了</strong><s>现在也需要修改UA且部分文件可能不限速，但是会不稳定（不保证100%可用性）需要使用大于<code v-pre>3.19.0</code>的版本</s></p>
<ul>
<li><s><mark>需要将UA改成<code v-pre>netdisk</code></mark>，修改方法参考下方<a href="#%E6%B7%BB%E5%8A%A0-user-agent-%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B">添加-user-agent-使用示例</a></s></li>
<li><s>或者开启Web代理（需要大宽带才能带的动）</s></li>
<li><s>WebDav播放不需要修改UA，可以直接302播放</s></li>
<li><s>仅限于播放/下载 <strong><code v-pre>视频(只测试了mp4格式其他格式未测试)</code></strong>，其他类型文件的会出现下方提示</s></li>
<li><s>如果出现下面的提示请勿担心，这不是错误不是Bug，这只是限制，请勿填写<code v-pre>issue</code>上报.</s></li>
</ul>
</li>
<li>
<p>Crack video：非官方视频接口，播放视频专用，非视频格式会出现以下错误 是正常情况</p>
<ul>
<li>
<p>浏览器查看也需要修改UA：<code v-pre>pan.baidu.com</code> 或者 <code v-pre>netdisk</code> 总之不是浏览器 User-Agent 都能播放视频</p>
</li>
<li>
<p>具体情况和之前的非官方接口用法一样</p>
</li>
<li>
<p><mark>可以持续使用时间未知，不保证100%可用性</mark></p>
</li>
</ul>
</li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF">	error_code</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">31119</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF">	error_msg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"hit black userlist , hit illeage dlna"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF">	request_id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">541111111111111140</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF">	error_code</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">31329</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF">	error_msg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"hit black userlist , hit illeage dlna"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF">	request_id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">921111381111111100</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br/>
<h3 id="添加-user-agent-使用示例" tabindex="-1"><a class="header-anchor" href="#添加-user-agent-使用示例"><span><strong>添加 &quot;User-Agent&quot; 使用示例</strong></span></a></h3>
<div class="hint-container caution">
<p class="hint-container-title">如果你不会设置 &quot;User-Agent&quot; 请看这里</p>
<p><mark>以下方法仅限于有百度超级会员用户使用</mark></p>
<p><mark>再次提示 以下方法仅限于有百度超级会员用户使用</mark></p>
<p>有会员改完 <strong><code v-pre>&quot;User-Agent&quot;</code></strong> 才会有用（选择官方和302）</p>
<p>如果不改 <strong><code v-pre>&quot;User-Agent&quot;</code></strong>，可以开启 <mark>Web代理</mark>，缺点是需要你搭建AList的机器中转，也就是说你需要大宽带帮你中转</p>
<div>
    <p style="text-align: center;"><span>网页302模式修改UA教程 : <br/></span>左侧为<span style="color:red;font-weight: bold;font-size: xx-large;">『官方』</span>接口，右侧为<span style="color:blue;font-weight: bold;font-size: xx-large;">『非官方-已无法使用』</span>接口</p>
    <div class="image-preview">
        <video width="360" height="240" controls>
            <source src="https://r2.izyt.cc/alist/baidu/%E7%99%BE%E5%BA%A6%E5%AE%98%E6%96%B9%E6%8E%A5%E5%8F%A3.mp4" type="video/mp4">
        </video>
        <video width="360" height="240" controls>
            <source src="https://r2.izyt.cc/alist/baidu/%E7%99%BE%E5%BA%A6%E9%9D%9E%E5%AE%98%E6%96%B9%E6%8E%A5%E5%8F%A3.mp4" type="video/mp4">
        </video>
    </div>
</div>
<Tabs :data='[{"id":"网页插件"},{"id":"Aria2"},{"id":"Motrix"}]' tab-id="ua">
<template #title0="{ value, isActive }">网页插件</template>
<template #title1="{ value, isActive }">Aria2</template>
<template #title2="{ value, isActive }">Motrix</template>
<template #tab0="{ value, isActive }">
<ul>
<li>使用浏览器插件修改的好处是 可以直接在线播放，当然了下载也是可以的。</li>
</ul>
<p>例<Badge text="1" type="info" vertical="middle" />：实在不会的可以看看一个Web网页端的例子： <strong><a href="https://www.bilibili.com/video/BV1UA4y1X7J8" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1UA4y1X7J8</a></strong></p>
<p>例<Badge text="2" type="info" vertical="middle" />：另一款插件方法涵盖360，Chrome，Edge： <strong><a href="https://youtu.be/PP6b0WSzYMc" target="_blank" rel="noopener noreferrer">https://youtu.be/PP6b0WSzYMc</a></strong></p>
<p><img src="/img/drivers/baidu/bdUA.png" alt="alist" loading="lazy"></p>
</template>
<template #tab1="{ value, isActive }">
<ol>
<li>
<p>先照着下图设置好 <strong><code v-pre>&quot;User-Agent&quot;</code></strong>，然后在<strong>右下角</strong>的按钮选项，点击<strong>齿轮</strong>(本地设置)，配置好参数</p>
</li>
<li>
<p>然后在右下角打开第三个按钮选项（<strong>打开复选框</strong>），打开后去列表选择我们要下载的文件，</p>
</li>
<li>
<p>把我们需要下载的文件<strong>进行勾选</strong>，勾选好后下方会出现<strong>一排按钮</strong>，选择右侧第二个选项下载里面有一个<strong>发送到Aria2</strong></p>
</li>
</ol>
<p>如果你使用了网页修改 <strong><code v-pre>&quot;User-Agent&quot;</code></strong>，可以不配置 <mark><strong>Aria2</strong></mark> 的<code v-pre>UA</code>，直接推送到Aria2也能下载</p>
<p><img src="/img/drivers/baidu/aria2-ua.png" alt="alist" loading="lazy"></p>
</template>
<template #tab2="{ value, isActive }">
<ol>
<li>
<p>先照着下图设置好 <strong><code v-pre>&quot;User-Agent&quot;</code></strong>，然后在<strong>右下角</strong>的按钮选项，点击<strong>齿轮</strong>(本地设置)，配置好参数</p>
</li>
<li>
<p>然后在右下角打开第三个按钮选项（<strong>打开复选框</strong>），打开后去列表选择我们要下载的文件，</p>
</li>
<li>
<p>把我们需要下载的文件<strong>进行勾选</strong>，勾选好后下方会出现<strong>一排按钮</strong>，选择右侧第二个选项下载里面有一个<strong>发送到Aria2</strong></p>
</li>
</ol>
<p>如果你使用了网页修改 <strong><code v-pre>&quot;User-Agent&quot;</code></strong>，可以不配置 <mark><strong>Motrix</strong></mark> 的<code v-pre>UA</code>，直接推送到Aria2也能下载</p>
<ul>
<li>Motrix下载链接：<a href="https://motrix.app/" target="_blank" rel="noopener noreferrer">Motrix官网</a>，<a href="https://github.com/agalwood/Motrix" target="_blank" rel="noopener noreferrer">Motrix-GitHub</a></li>
</ul>
<p><img src="/img/drivers/baidu/motrix-ua.png" alt="alist" loading="lazy"></p>
</template>
</Tabs>
</div>
<br/>
<h2 id="上传配置" tabindex="-1"><a class="header-anchor" href="#上传配置"><span><strong>上传配置</strong></span></a></h2>
<p>官方文档：<a href="https://pan.baidu.com/union/doc/3ksg0s9ye" target="_blank" rel="noopener noreferrer">百度网盘开放平台 - 上传 - 能力说明</a></p>
<blockquote>
<p>百度网盘要求在 30s 内完成单个分片的上传，所以上传文件时并发过高可能会导致大量失败。</p>
</blockquote>
<ul>
<li>上传线程：同时上传几个分片</li>
<li>上传 API：上传的域名端点</li>
<li>自定义上传分片大小：用于指定分片大小，有限制，仅会员可用</li>
<li>低上传带宽模式：尝试解决低上传带宽场景（如家宽）下，频繁出现 <code v-pre>Client.Timeout exceeded while awaiting headers</code> 的问题。开启后会使用尽可能小的分片大小。</li>
</ul>
<br/>
<h2 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h2>
<Mermaid id="mermaid-246" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></div></template>


