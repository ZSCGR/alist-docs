<template><div><h1 id="百度分享" tabindex="-1"><a class="header-anchor" href="#百度分享"><span>百度分享</span></a></h1>
<p>挂载百度网盘分享链接，可供下载，无上传编辑等功能，api非官方。</p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span><strong>配置</strong></span></a></h2>
<p>百度网盘分享链接：surl，百度网盘分享密码：pwd</p>
<ol>
<li>
<p>浏览目录需设置<strong>百度网盘分享链接</strong>和<strong>百度网盘分享密码</strong>，下载还需设置BDUSS。</p>
</li>
<li>
<p><strong>百度网盘分享链接</strong>即为分享地址<code v-pre>pan.baidu.com/s/</code>后<code v-pre>?</code>前部分，<strong>百度网盘分享密码</strong>填4位提取码，无提取码留空。</p>
</li>
<li>
<p><strong>百度网盘分享链接</strong>和<strong>百度网盘分享密码</strong>可以随意账号填写，但是 <strong><code v-pre>BDUSS</code></strong> 参数的账号 必须使用 <mark><strong>百度超级SVIP会员</strong></mark> 才可以</p>
</li>
</ol>
<p><img src="/img/drivers/baidu/add_bd_share.png" alt="" loading="lazy"></p>
<p>BDUSS由cookie中提取</p>
<ul>
<li>
<p>方法1：<a href="http://pandownload.net/faq/cookie.html" target="_blank" rel="noopener noreferrer">参考教程</a>(本项目中无需前缀<code v-pre>BDUSS=</code>)。</p>
</li>
<li>
<p>方法2<sup>荐</sup>：</p>
<ul>
<li>
<img src="/img/drivers/baidu/BDUSS.png" alt="1" style="zoom:30%;" />
</li>
</ul>
</li>
</ul>
<h2 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id"><span><strong>根文件夹ID</strong></span></a></h2>
<p>要挂载的根文件夹，默认为<code v-pre>/</code></p>
<p>如果要写文件夹內其他的 请看下方的例子</p>
<p><img src="/img/drivers/baidu/bd_share_test.png" alt="" loading="lazy"></p>
<h2 id="qa" tabindex="-1"><a class="header-anchor" href="#qa"><span><strong>QA</strong></span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">出错配置</th>
<th style="text-align:left">典型报错</th>
<th style="text-align:left">修复说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">surl</td>
<td style="text-align:left"><code v-pre>{&quot;errno&quot;:2,&quot;errtype&quot;:0}</code></td>
<td style="text-align:left">分享链接可能失效, 检查链接状态</td>
</tr>
<tr>
<td style="text-align:center">pwd</td>
<td style="text-align:left"><code v-pre>{&quot;errno&quot;:-130,&quot;errtype&quot;:&quot;mispwd-9&quot;}</code></td>
<td style="text-align:left">分享密码错误</td>
</tr>
<tr>
<td style="text-align:center">BDUSS</td>
<td style="text-align:left"><code v-pre>{&quot;errno&quot;:9019,&quot;errmsg&quot;:&quot;need verify&quot;}</code></td>
<td style="text-align:left">BDUSS无效</td>
</tr>
<tr>
<td style="text-align:center">UA</td>
<td style="text-align:left"><code v-pre>{&quot;error_code&quot;:31326,&quot;error_msg&quot;:&quot;user is not authorized, hitcode:119&quot;}</code></td>
<td style="text-align:left">user-agent违反百度限制, 访问端需设置非浏览器UA(如netdisk)或开启Web代理</td>
</tr>
<tr>
<td style="text-align:center">下载</td>
<td style="text-align:left">Failed init storage: 200 OK; {&quot;errno&quot;:-130,&quot;</td>
<td style="text-align:left">此链接分享内容可能因为涉及侵权、色情、低俗等信息，无法访问！</td>
</tr>
</tbody>
</table>
<h2 id="开发" tabindex="-1"><a class="header-anchor" href="#开发"><span><strong>开发</strong></span></a></h2>
<p>接口来自<a href="https://github.com/yuantuo666/baiduwp-php" target="_blank" rel="noopener noreferrer">github.com/yuantuo666/baiduwp-php</a>项目，非官方api。</p>
<p>当前仅移植目录浏览和普通下载功能，欢迎继续开发。</p>
<p>因缺失官方文档，不排除存在一些兼容问题，可至github反馈，建议提供复现链接以供调试。</p>
<p>不能突破速度限制，请合理使用。</p>
<br/>
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
<h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-255" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></div></template>


