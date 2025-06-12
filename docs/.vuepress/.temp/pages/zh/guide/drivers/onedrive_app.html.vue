<template><div><h1 id="onedrive-app" tabindex="-1"><a class="header-anchor" href="#onedrive-app"><span>OneDrive APP</span></a></h1>
<h2 id="好处以及注意事项" tabindex="-1"><a class="header-anchor" href="#好处以及注意事项"><span><strong>好处以及注意事项</strong></span></a></h2>
<ol>
<li>
<p>好处是只授权一次管理员登录，后续添加参数时用一样的，在添加时除了邮箱哪里不同，别的都一样</p>
<ul>
<li>例如E5 25个5T的账号，你提前登录初始化完毕后，直接CV之前的参数即可，不用像以前一样每次都得去获取刷新令牌时间一长还失效</li>
<li>A1 A1P等可以分发的账号更多(500 - <strong>无限</strong>)</li>
</ul>
</li>
<li>
<p>这样的方式管理员授权后，可以随意查看组织中每个成员的账号，泄露了自己的文件</p>
<ul>
<li>建议自己申请 OneDrive E5 去好一些</li>
</ul>
</li>
</ol>
<hr>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>不适用于家庭版，如果你在配置过程中，与教程中出现的选项不符可能是不支持</p>
</div>
<p>首先使用个人或者组织账号登录</p>
<p><strong><a href="https://entra.microsoft.com/#view/Microsoft_AAD_IAM/TenantOverview.ReactView?Microsoft_AAD_IAM_legacyAADRedirect=true" target="_blank" rel="noopener noreferrer">https://entra.microsoft.com/#view/Microsoft_AAD_IAM/TenantOverview.ReactView?Microsoft_AAD_IAM_legacyAADRedirect=true</a></strong></p>
<p>登录后获取我们的<Badge text="租户ID" type="info" vertical="middle" /></p>
<p><img src="/img/drivers/onedrive_app/onedrive_app0.png" alt="onedriveapp" loading="lazy"></p>
<h2 id="新建过程" tabindex="-1"><a class="header-anchor" href="#新建过程"><span><strong>新建过程</strong></span></a></h2>
<div class="hint-container caution">
<p class="hint-container-title">请仔细阅读注意事项</p>
<p>请仔细阅读下面的 <strong><code v-pre>序号，依次查看</code></strong> ，如有错误可及时反馈</p>
</div>
<Tabs :data='[{"id":"1"},{"id":"2"},{"id":"3"},{"id":"4"},{"id":"5"}]' tab-id="onedrive_app">
<template #title0="{ value, isActive }">1</template>
<template #title1="{ value, isActive }">2</template>
<template #title2="{ value, isActive }">3</template>
<template #title3="{ value, isActive }">4</template>
<template #title4="{ value, isActive }">5</template>
<template #tab0="{ value, isActive }">
<ol>
<li>
<p>注册一个应用，类型自己选，建议选第三吧</p>
</li>
<li>
<p>重定向URL(回调参数)，类型选择Web，参数填写： <strong><a href="https://entra.microsoft.com/TokenAuthorize" target="_blank" rel="noopener noreferrer">https://entra.microsoft.com/TokenAuthorize</a></strong> ，否则后面授权时无法授权</p>
</li>
<li>
<p>填好后点击下方的注册 跳转后就可以看到<Badge text="客户端ID" type="info" vertical="middle" /></p>
</li>
</ol>
<p><img src="/img/drivers/onedrive_app/onedrive_app1.png" alt="onedriveapp" loading="lazy"></p>
</template>
<template #tab1="{ value, isActive }">
<p>我们去获取一个客户端秘钥，按照下图获取即可，记得<Badge text="客户端秘钥" type="info" vertical="middle" />要及时保存，只会出现一次</p>
<p><img src="/img/drivers/onedrive_app/onedrive_app3.png" alt="onedriveapp" loading="lazy"></p>
</template>
<template #tab2="{ value, isActive }">
<p>客户端秘钥拿到了，去授权一下使用的 <strong><code v-pre>API</code></strong>，依旧跟着下图获取即可</p>
<p><img src="/img/drivers/onedrive_app/onedrive_app4.png" alt="onedriveapp" loading="lazy"></p>
</template>
<template #tab3="{ value, isActive }">
<p>API授权后，我们去授权组织应用</p>
<ul>
<li>左侧侧边栏 ---&gt; 企业应用程序 ---&gt; 所有应用程序 ---&gt; <strong>{选择我们开始新建的那个应用名称}</strong> ---&gt; 权限 ---&gt; 点击 代表<code v-pre>xxxx</code>授予管理员同意</li>
</ul>
<p><img src="/img/drivers/onedrive_app/onedrive_app5.png" alt="onedriveapp" loading="lazy"></p>
<p>注意事项</p>
<ul>
<li>如果你在开始注册应用时，回调参数不是一样的可能点击授权时会报错，记得写一样的</li>
<li>如何查看是否授权成功，未授权时页面是提示<code v-pre>未发现该应用程序具有管理员许可的授权</code>，授权成功后刷新一下页面会看到三条API权限如下图所示
<ul>
<li>上面是未授权时的样子，下面是授权后的样子（授权后刷新页面即可）</li>
</ul>
</li>
</ul>
<p><img src="/img/drivers/onedrive_app/onedrive_app7.png" alt="onedriveapp" loading="lazy"></p>
</template>
<template #tab4="{ value, isActive }">
<p>通过开始到现在 我们分别拿到了如下参数：租户ID<sup>1</sup>，注册应用<sup>2</sup>，拿到客户端ID/秘钥<sup>3</sup>，授权API/管理员API<sup>4</sup></p>
<p>然后通过下面的格式最终授权一下即可，分别是<Badge text="租户ID" type="info" vertical="middle" /><Badge text="客户端ID" type="info" vertical="middle" /><Badge text="回调参数URL" type="info" vertical="middle" />改成自己的最终登录收取即可</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-html"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">https://login.microsoftonline.com/{租户ID或者common}/adminConsent?client_id={客户端ID}&#x26;redirect_uri={注册应用时的回调URL}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="/img/drivers/onedrive_app/onedrive_app6.png" alt="onedriveapp" loading="lazy"></p>
<p>如果你按照拼写好后的链接也登录了发现跳转到了一个空白页面，例如下面示例代码和图片中的就是授权成功了不用担心</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>https://entra.microsoft.com/TokenAuthorize?admin_consent=True&#x26;tenant={租户ID}#</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="/img/drivers/onedrive_app/od_app_ok.png" alt="onedriveapp" loading="lazy"></p>
</template>
</Tabs>
<h2 id="填写示例" tabindex="-1"><a class="header-anchor" href="#填写示例"><span><strong>填写示例</strong></span></a></h2>
<p>将上述过程中获取得到的值依次填入即可，如果哪个邮箱你不知道是什么了 可以通过<a href="#%E6%9F%A5%E7%9C%8B%E7%BB%84%E7%BB%87%E6%89%80%E6%9C%89%E7%94%A8%E6%88%B7"><strong>查看组织所有用户</strong></a>来查找</p>
<p><img src="/img/drivers/onedrive_app/onedrive_app_Denmo.png" alt="onedriveapp" loading="lazy"></p>
<BiliBili bvid="BV1Ro4y1s725" ratio="16:9" low-quality no-danmaku /><h2 id="查看组织所有用户" tabindex="-1"><a class="header-anchor" href="#查看组织所有用户"><span><strong>查看组织所有用户</strong></span></a></h2>
<p>如果不知道自己的OneDrive组织有多少用户可以前往下面的链接登录 <code v-pre>admin</code>账号查看</p>
<p><strong><a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users" target="_blank" rel="noopener noreferrer">https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users</a></strong></p>
<p><img src="/img/drivers/onedrive_app/onedrive_app_user.png" alt="onedriveapp" loading="lazy"></p>
<h2 id="错误提示" tabindex="-1"><a class="header-anchor" href="#错误提示"><span><strong>错误提示</strong></span></a></h2>
<ul>
<li>提示：<strong>Either scp or roles claim need to be present in the token</strong> 错误</li>
</ul>
<p>是因为你没有在第<code v-pre>4</code>步的时候进行 <Badge text="代表xxxx授予管理员同意" type="info" vertical="middle" /> 导致的，注意查看第四步下面的提示</p>
<ul>
<li>提示：<strong>failed get objs: failed to list objs: Unable to retrieve user's mysite URL</strong> 错误</li>
</ul>
<p>新建的 <code v-pre>OneDrive</code>用户账号不是实时生效，会延时生效等待几小时后试试看 <a href="https://github.com/alist-org/docs/discussions/189#discussioncomment-5928892" target="_blank" rel="noopener noreferrer"><strong>案例</strong></a></p>
<h2 id="批量添加onedrive-app账号" tabindex="-1"><a class="header-anchor" href="#批量添加onedrive-app账号"><span><strong>批量添加OneDrive_App账号</strong></span></a></h2>
<p>使用的软件：<strong><a href="https://github.com/yzbtdiy/alist_batch" target="_blank" rel="noopener noreferrer">https://github.com/yzbtdiy/alist_batch</a></strong></p>
<details class="hint-container details"><summary>参数填写，看不懂可以看下方的视频</summary>
<p>两个配置文件不要留空白空行哦，那样也会报错的</p>
<p><strong>config.yaml</strong></p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 自己的AList站点，可以是本地也可以是远程服务器IP或者域名，但是结尾不能带 "/"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ALIST_URL</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># auth的三个参数是你AList管理员账号密码和刷新令牌</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">auth</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">USERNAME</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">PASSWORD</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">token</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ALIST_TOKEN</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># enable选项你需要哪个就开启哪个，不需要的关闭</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">aliyun</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    refresh_token</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ALI_YUNPAN_REFRESH_TOKEN</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">pikpak</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">PIKPAK_EMAIL</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">PIKPAK_PASSWORD</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 我们这里需要的是 onedrive_app，把这个开启</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">onedrive_app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># global是全局例如E5 A1 A1P, 世纪互联是cn 德国版是de 美国版是us</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    region</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">global</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    tenants</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">          client_id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">客户端ID</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">          client_secret</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">客户端秘钥</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">          tenant_id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">租户ID</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 这里可以同时挂载不同域和不同账号，每个域照着上面的配置写即可</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 客户端ID 客户端秘钥 租户ID 就不用说了吧？</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>onedrive_app.yaml</strong></p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 分类1 挂载x 可以自己随便改，相当于添加存储时候的挂载路径</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 1 这里指的是要使用上面配置文件里面的哪个域/组织的配置</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 后面的就是自己的邮箱账号啦~如果不写 ":/folder1",挂载的是根目录 写了就是挂载这个目录</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 反正格式就是： 挂载路径:域/组织:邮箱账号:/文件夹目录(可选)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">分类1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    挂载1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1:user1@xxx.onmicrosoft.com</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    挂载2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1:user2@xxx.onmicrosoft.com:/folder1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    挂载3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1:user2@xxx.onmicrosoft.com:/folder2</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 你可以分多个不同的列表挂载也行，照着格式写</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">分类2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    挂载11</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1:user1@xxx.onmicrosoft.com</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    挂载22</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1:user2@xxx.onmicrosoft.com:/folder1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    挂载33</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1:user2@xxx.onmicrosoft.com:/folder2</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<BiliBili bvid="BV1vc411V78S" ratio="16:9" low-quality no-danmaku /><h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-232" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></div></template>


