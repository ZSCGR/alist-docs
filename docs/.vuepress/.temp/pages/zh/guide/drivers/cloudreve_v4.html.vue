<template><div><h1 id="cloudreve-v4-分享" tabindex="-1"><a class="header-anchor" href="#cloudreve-v4-分享"><span>Cloudreve V4 / 分享</span></a></h1>
<h2 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明"><span>参数说明</span></a></h2>
<h3 id="地址" tabindex="-1"><a class="header-anchor" href="#地址"><span>地址</span></a></h3>
<p>Cloudreve V4 服务器的地址，如：<code v-pre>https://www.example.com</code>，最好删掉后面的斜线<code v-pre>/</code>。</p>
<h3 id="鉴权" tabindex="-1"><a class="header-anchor" href="#鉴权"><span>鉴权</span></a></h3>
<p>Cloudreve V4 使用 Token 进行鉴权，这意味着挂载鉴权方式分为：</p>
<ol>
<li><code v-pre>用户名</code>+<code v-pre>密码</code>：会自动使用登录接口获取 Access Token 和 Refresh Token，存在验证码问题</li>
<li>仅 <code v-pre>Refresh Token</code>：会自动使用刷新接口续期 Access Token 和 Refresh Token，参数可从浏览器请求或者 Local Storage 中找到</li>
<li>仅 <code v-pre>Access Token</code>：能够临时使用，但会过期，且无法续期</li>
<li>无：匿名用户，适用于公开分享</li>
<li><RouteLink to="/zh/guide/drivers/common.html#%E5%BC%95%E7%94%A8">引用</RouteLink>：<code v-pre>备注</code>填写 <code v-pre>ref:/{挂载路径}</code>，从 <code v-pre>已挂载的存储</code> 中引用认证、令牌等</li>
</ol>
<p>Token 获取方法：</p>
<Tabs :data='[{"id":"本地存储"},{"id":"浏览器请求"}]'>
<template #title0="{ value, isActive }">本地存储</template>
<template #title1="{ value, isActive }">浏览器请求</template>
<template #tab0="{ value, isActive }">
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>可能有多个会话，请选择要挂载的那个。</p>
</div>
<p><img src="/img/drivers/cloudreve_v4/cloudreve_v4_token_local_storage.png" alt="cloudreve_v4_token_local_storage" loading="lazy"></p>
<p></p>
</template>
<template #tab1="{ value, isActive }">
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>可能需要全新登录才能看到这个请求。</p>
</div>
<p><img src="/img/drivers/cloudreve_v4/cloudreve_v4_token_resp.png" alt="cloudreve_v4_token_resp" loading="lazy"></p>
</template>
</Tabs>
<h3 id="根文件夹路径" tabindex="-1"><a class="header-anchor" href="#根文件夹路径"><span>根文件夹路径</span></a></h3>
<p>Cloudreve V4 采用自定义 URI 作为路径。可从网页链接的 <code v-pre>?path=</code> 中获取。获取到的参数可能需要 <a href="https://www.bing.com/search?q=URL+%E8%A7%A3%E7%A0%81" target="_blank" rel="noopener noreferrer">URL 解码</a>。</p>
<h4 id="挂载「我的文件」" tabindex="-1"><a class="header-anchor" href="#挂载「我的文件」"><span>挂载「我的文件」</span></a></h4>
<p>默认为 <code v-pre>cloudreve://my/</code>，列出用户文件。</p>
<h4 id="挂载「分享」" tabindex="-1"><a class="header-anchor" href="#挂载「分享」"><span>挂载「分享」</span></a></h4>
<p>支持挂载文件夹类型的分享，路径填写为：<code v-pre>cloudreve://{分享ID}@share/</code>。</p>
<ul>
<li>
<p>分享ID为分享链接 <code v-pre>/s/</code> 后面的参数。</p>
</li>
<li>
<p>目前 Cloudreve V4 不支持「创建带密码的分享」。但如果数据迁移自 V3，先前创建的分享密码会被保留。带密码的分享链接（<code v-pre>/s/{分享ID}/{分享密码}</code>），对应的 URI 为 <code v-pre>cloudreve://{分享ID}:{分享密码}@share</code>。</p>
</li>
</ul>
<h3 id="启用文件夹大小" tabindex="-1"><a class="header-anchor" href="#启用文件夹大小"><span>启用文件夹大小</span></a></h3>
<p>让 Cloudreve V4 服务端统计每个文件夹的大小，启用可能会造成服务端报错、运行缓慢，默认禁用。</p>
<h3 id="启用缩略图" tabindex="-1"><a class="header-anchor" href="#启用缩略图"><span>启用缩略图</span></a></h3>
<p>让 Cloudreve V4 服务端为每个文件生成略缩图，启用可能会造成服务端报错、运行缓慢，默认禁用。</p>
<h3 id="启用版本上传" tabindex="-1"><a class="header-anchor" href="#启用版本上传"><span>启用版本上传</span></a></h3>
<p>启用覆盖上传并保留之前的版本，需要消耗额外的空间。默认禁用，为覆盖上传前删除已有的文件。</p>
<h3 id="自定义-ua" tabindex="-1"><a class="header-anchor" href="#自定义-ua"><span>自定义 UA</span></a></h3>
<p>用于自定义请求使用的 <code v-pre>User-Agent</code> 头部信息。留空为 Alist 默认。</p>
<h3 id="排序" tabindex="-1"><a class="header-anchor" href="#排序"><span>排序</span></a></h3>
<p>支持更改请求列表时排序的参数。</p>
<h2 id="上传" tabindex="-1"><a class="header-anchor" href="#上传"><span>上传</span></a></h2>
<p>支持上传到的存储策略如下：</p>
<ul>
<li>本机存储</li>
<li>从机存储</li>
<li>OneDrive</li>
<li>S3</li>
</ul>
<p>上传的存储策略请在 Cloudreve V4 网页端进入相应文件夹中进行设置（需要服务端为 Cloudreve Pro）。</p>
<p>如果分享开启了上传权限，支持上传。需要服务端为用户组勾选「提升匿名用户权限」（需要服务端为 Cloudreve Pro）。</p>
<h2 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h2>
<Mermaid id="mermaid-170" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></div></template>


