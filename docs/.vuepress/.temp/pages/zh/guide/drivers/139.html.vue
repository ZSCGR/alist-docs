<template><div><h1 id="中国移动云盘" tabindex="-1"><a class="header-anchor" href="#中国移动云盘"><span>中国移动云盘</span></a></h1>
<p>云盘地址：<strong><a href="https://yun.139.com/" target="_blank" rel="noopener noreferrer">https://yun.139.com/</a></strong></p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>AList版本必须大于 <code v-pre>v3.41.0</code> 版本才能使用本教程！</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>相关参数可通过 浏览器开发工具 -&gt; 网络 -&gt; 请求 <a href="#%E6%90%9C%E7%B4%A2%E5%85%B3%E9%94%AE%E8%AF%8D">搜索关键词</a>获取！</p>
</div>
<br/>
<h2 id="代理range" tabindex="-1"><a class="header-anchor" href="#代理range"><span><strong>代理range</strong></span></a></h2>
<p>需要先启用 <code v-pre>Web代理</code> 或者 <code v-pre>Webdav本地代理</code> 才会生效。</p>
<ul>
<li>
<p>目前仅适用于：<code v-pre>别名</code>、<code v-pre>中国移动云盘</code>、<code v-pre>AList V3</code></p>
<ul>
<li>具体功能说明：<strong><a href="https://github.com/alist-org/alist/pull/6496#issue-2309839607" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/pull/6496#issue-2309839607</a></strong></li>
</ul>
</li>
</ul>
<br/>
<h2 id="authorization" tabindex="-1"><a class="header-anchor" href="#authorization"><span><strong>Authorization</strong></span></a></h2>
<p>已更换鉴权方式，请获取 <code v-pre>Authorization</code> 进行填写。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>只需要填写 Basic 空格后面开始的内容，<strong>不要包含 Basic</strong>！</p>
</div>
<br/>
<h2 id="类型" tabindex="-1"><a class="header-anchor" href="#类型"><span><strong>类型</strong></span></a></h2>
<p>Alist 目前支持挂载 4 种类型：</p>
<ul>
<li>
<p>新个人云：新 API</p>
<ul>
<li>
<p>注意：移动已于 2024 年底迁移账号到新的个人云</p>
</li>
<li>
<p>新的个人云使用 PUT 方法直连 EOS 分片上传</p>
</li>
</ul>
</li>
<li>
<p>家庭云：我的家庭 -&gt; 家庭文件</p>
<ul>
<li>
<p>限制：家庭云不支持复制、移动、重命名文件夹，根目录无法上传文件</p>
</li>
<li>
<p>家庭云使用 POST 方法断点续传</p>
</li>
</ul>
</li>
<li>
<p>共享群：共享群组</p>
<ul>
<li>限制：共享群组不支持复制、上传</li>
</ul>
</li>
<li>
<p>个人云：旧的个人云，已成为历史</p>
</li>
</ul>
<br/>
<h2 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id"><span><strong>根文件夹ID</strong></span></a></h2>
<p>文件夹ID，用于指定挂载的目录。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>更改类型后请记得清空或修改根文件夹ID！</p>
</div>
<ul>
<li>
<p>新个人云：<code v-pre>/</code>，可以为空会自动填写，会将所有的都列出来</p>
<ul>
<li>若想挂载单独某个文件夹，请填写文件夹ID。</li>
</ul>
</li>
<li>
<p>家庭云：根目录为空就是全部文件</p>
<ul>
<li>若想挂载单独某个文件夹，请填写文件夹ID。</li>
</ul>
</li>
<li>
<p>共享群：为空会自动填写群组ID，建议填写手动获取的文件夹ID</p>
<ul>
<li>
<p>若想挂载单独某个文件夹，请填写文件夹ID。</p>
</li>
<li>
<p>注意：如果想挂载别人创建的共享群，请务必填写手动获取的文件夹ID，否则会出现在一级文件夹无限循环的问题。</p>
</li>
</ul>
</li>
<li>
<p>个人云：<code v-pre>root</code>，可以为空会自动填写，会将所有的都列出来，涵盖18项(自行查看)，正常文件在 <strong>我的文件夹</strong> 这个里面</p>
<ul>
<li>如果写文件夹ID列出的是正常的根目录文件夹</li>
</ul>
</li>
</ul>
<br/>
<h2 id="cloud-id" tabindex="-1"><a class="header-anchor" href="#cloud-id"><span><strong>Cloud ID</strong></span></a></h2>
<p>用于区分特殊存储的ID。个人云不需要填写，<strong>家庭云、共享群专用</strong>。</p>
<ul>
<li>
<p>家庭云：家庭云ID，<strong>不能为空</strong></p>
</li>
<li>
<p>共享群：群组ID，<strong>不能为空</strong></p>
</li>
</ul>
<br/>
<h2 id="自定义上传分片大小" tabindex="-1"><a class="header-anchor" href="#自定义上传分片大小"><span>自定义上传分片大小</span></a></h2>
<p>可供用户自定义分片大小，单位是字节，如果出现性能问题请自行调整，设置 <code v-pre>0</code> 默认为 100 MB。</p>
<ul>
<li>
<p>目前网页端的分片大小为 20 MB（20971520）。</p>
</li>
<li>
<p>新版个人云所使用的 <a href="https://ecloud.10086.cn/op-help-center/api/article/40933" target="_blank" rel="noopener noreferrer">EOS 文档</a> 中说明“无法上传大小大于&gt; 5 GB 的对象”，故分片大小不要超过 5 GB。</p>
</li>
</ul>
<br/>
<h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span><strong>其他</strong></span></a></h2>
<ul>
<li>
<p>其他信息取自请求，已经从获取cookie改变成获取<code v-pre>Authorization</code></p>
<ul>
<li>新个人云可以通过另外的方式获取详情查看<a href="#%E6%96%B0%E4%B8%AA%E4%BA%BA%E4%BA%91">新个人云</a>的图片示例</li>
</ul>
</li>
<li>
<p>请求信息中底部找不到<code v-pre>载荷</code>，就去顶部<code v-pre>上面一排</code>，标记了紫色高亮</p>
</li>
</ul>
<br/>
<h3 id="搜索关键词" tabindex="-1"><a class="header-anchor" href="#搜索关键词"><span><strong>搜索关键词</strong></span></a></h3>
<p>注意查看关键词，获取 <strong><code v-pre>Authorization</code></strong> 、<strong>根文件夹ID</strong>、<strong>Cloud ID</strong>时使用</p>
<ul>
<li>
<p>新个人云：hcy/file/<strong>list</strong></p>
<ul>
<li>
<p>标头 - <code v-pre>Authorization</code></p>
</li>
<li>
<p>载荷 - <code v-pre>parentFileId</code>：文件夹ID</p>
</li>
</ul>
</li>
<li>
<p>家庭云：<strong>queryContentList</strong></p>
<ul>
<li>
<p>标头 - <code v-pre>Authorization</code></p>
</li>
<li>
<p>载荷 - <code v-pre>cloudID</code>：家庭云ID</p>
</li>
<li>
<p>载荷 - <code v-pre>catalogID</code>：文件夹ID</p>
</li>
<li>
<p>响应 - <code v-pre>data.path</code>：完整文件夹ID</p>
</li>
</ul>
</li>
<li>
<p>共享群：<strong>queryGroupContentList</strong></p>
<ul>
<li>
<p>标头 - <code v-pre>Authorization</code></p>
</li>
<li>
<p>载荷 - <code v-pre>groupID</code>：群组ID</p>
</li>
<li>
<p>载荷 - <code v-pre>path</code>：完整文件夹ID</p>
</li>
</ul>
</li>
<li>
<p>个人云：<strong>getDisk</strong></p>
</li>
</ul>
<br/>
<h3 id="新个人云" tabindex="-1"><a class="header-anchor" href="#新个人云"><span><strong>新个人云：</strong></span></a></h3>
<p>以下查找 <code v-pre>Authorization</code> 和 <code v-pre>子文件夹ID</code> 的方法二选一</p>
<div class="image-preview">  
    <img src="/img/drivers/139/new_personal.png" alt="新个人云" title="新个人云"/>
    <img src="/img/drivers/139/139_new_au.png" alt="新个人云" title="新个人云"/>
</div>
如果你想查看子文件夹的目录ID，请先进入子文件夹后在查看新的请求，否则还是之前旧的目录ID
<br/>
<h3 id="个人云" tabindex="-1"><a class="header-anchor" href="#个人云"><span><strong>个人云：</strong></span></a></h3>
<div class="image-preview">  
    <img src="/img/drivers/139/other-personal.png" alt="其他浏览器" title="其他浏览器"/>
    <img src="/img/drivers/139/ch-personal.png" alt="Chrome浏览器" title="Chrome浏览器"/>
</div>
<br/>
<h3 id="家庭云" tabindex="-1"><a class="header-anchor" href="#家庭云"><span><strong>家庭云：</strong></span></a></h3>
<div class="image-preview">  
    <img src="/img/drivers/139/other-family.png" alt="其他浏览器" title="其他浏览器"/>
    <img src="/img/drivers/139/ch-family.png" alt="Chrome浏览器" title="Chrome浏览器"/>
</div>
<details class="hint-container details"><summary>手把手教学视频</summary>
<p>虽然视频是V2版本，但是获取目录ID 和 Cloud ID的方式一样，</p>
<p><strong><a href="https://www.bilibili.com/video/BV1US4y1w79a" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1US4y1w79a</a></strong></p>
<p>现在已经从获取Cookie的方式变成了获取<code v-pre>Authorization</code>，获取方式可以看下方<a href="#%E5%A1%AB%E5%86%99%E7%A4%BA%E4%BE%8B">填写示例</a>教程</p>
</details>
<br/>
<h3 id="alist挂载填写示例" tabindex="-1"><a class="header-anchor" href="#alist挂载填写示例"><span><strong>AList挂载填写示例：</strong></span></a></h3>
<ul>
<li>
<p><mark><code v-pre>Authorization</code>只需要填写Basic空格后面开始的内容</mark></p>
</li>
<li>
<p>新个人云文件夹ID，你进入文件夹后会自动变化，你需要哪个文件夹ID就进入哪个文件夹，然后获取<code v-pre>currentCatalogID</code><sup>图3</sup>的值就可以</p>
</li>
</ul>
<div class="image-preview">  
    <img src="/img/drivers/139/add-personal.png" alt="个人云" title="个人云"/>
    <img src="/img/drivers/139/add-family.png" alt="家庭云" title="家庭云"/>
    <img src="/img/drivers/139/add_new_personal.png" alt="新个人云" title="新个人云"/>
</div>
<br/>
<h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-365" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></div></template>


