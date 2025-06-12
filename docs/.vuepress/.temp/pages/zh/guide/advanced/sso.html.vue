<template><div><h1 id="单点登录" tabindex="-1"><a class="header-anchor" href="#单点登录"><span>单点登录</span></a></h1>
<h3 id="single-sign-on-client-id" tabindex="-1"><a class="header-anchor" href="#single-sign-on-client-id"><span><strong>Single sign-on client id</strong></span></a></h3>
<p>客户端ID</p>
<h3 id="single-sign-on-client-secrets" tabindex="-1"><a class="header-anchor" href="#single-sign-on-client-secrets"><span><strong>Single sign-on client secrets</strong></span></a></h3>
<p>秘钥ID</p>
<div class="hint-container warning">
<p class="hint-container-title">注意事项</p>
<ol>
<li>
<p>AList 后台参数也记得写好保存，写好保存后也要回到个人资料下方会有一个需要绑定的按钮进行绑定，否则无法使用</p>
</li>
<li>
<p>四种单点登录暂时只能启用一种，如果你之前用的是别的单点登录方式然后换了新的单点登录方式 那么你回到个人资料绑定的时候需要先将之前的解绑（点击一下即可）然后再绑定现在你要使用的单点登录方式。</p>
</li>
<li>
<p>如果使用  <strong><code v-pre>GitHub,微软,谷歌,钉钉</code></strong>，只需要填写客户端ID和秘钥，选项中选择对应的平台即可</p>
<ul>
<li>如果使用 <strong><code v-pre>Casdoor</code></strong> 以下的参数都需要填写，照着教程填写即可</li>
</ul>
</li>
</ol>
</div>
<h2 id="注册绑定单点登录" tabindex="-1"><a class="header-anchor" href="#注册绑定单点登录"><span><strong>注册绑定单点登录</strong></span></a></h2>
<Tabs :data='[{"id":"GitHub"},{"id":"钉钉"},{"id":"微软"},{"id":"谷歌"},{"id":"Casdoor"}]' tab-id="sso">
<template #title0="{ value, isActive }">GitHub</template>
<template #title1="{ value, isActive }">钉钉</template>
<template #title2="{ value, isActive }">微软</template>
<template #title3="{ value, isActive }">谷歌</template>
<template #title4="{ value, isActive }">Casdoor</template>
<template #tab0="{ value, isActive }">
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>若想使用GitHub登录，首选需要你搭建Alist的机器能连接访问GitHub才可以调用使用，不然连接不上无法使用</p>
</div>
<p>打开 <strong><a href="https://github.com/settings/developers" target="_blank" rel="noopener noreferrer">https://github.com/settings/developers</a></strong>  点击  <strong><code v-pre>New OAuth App</code></strong></p>
<h3 id="register-oauth-填写说明" tabindex="-1"><a class="header-anchor" href="#register-oauth-填写说明"><span><strong>Register OAuth 填写说明</strong></span></a></h3>
<ul>
<li>Application name
<ul>
<li>随便写想叫什么叫什么</li>
</ul>
</li>
<li><mark><strong>Homepage URL</strong></mark>
<ul>
<li>主页网址地址
<ul>
<li>可以使用http https都可以</li>
</ul>
</li>
</ul>
</li>
<li>Application description
<ul>
<li>随便写</li>
</ul>
</li>
<li><mark><strong>Authorization callback URL</strong></mark>
<ul>
<li>回调URL地址</li>
<li><strong><a href="https://xn--6qqv7i2xdt95b/api/auth/sso_callback" target="_blank" rel="noopener noreferrer">https://你的域名/api/auth/sso_callback</a></strong>
<ul>
<li>可以使用http https都可以</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>填写完毕后记得获取一下 <strong>Client secrets</strong>，然后填写到Alist后台。</p>
<h4 id="完整填写参考示意图" tabindex="-1"><a class="header-anchor" href="#完整填写参考示意图"><span><strong>完整填写参考示意图</strong></span></a></h4>
<p><img src="/img/advanced/github.png" alt="sso" loading="lazy"></p>
<h3 id="视频教程" tabindex="-1"><a class="header-anchor" href="#视频教程"><span><strong>视频教程</strong></span></a></h3>
<BiliBili bvid="BV1KA41117m5" /><p><strong>视频若失效可以前往观看: <a href="https://b23.tv/Fm8AkC5" target="_blank" rel="noopener noreferrer">https://b23.tv/Fm8AkC5</a></strong></p>
</template>
<template #tab1="{ value, isActive }">
<p>首先打开 <strong><a href="https://open-dev.dingtalk.com/fe/app#/corp/app" target="_blank" rel="noopener noreferrer">https://open-dev.dingtalk.com/fe/app#/corp/app</a></strong></p>
<p>右上角先 <code v-pre>新建应用</code>，类型选择 <code v-pre>H5微应用</code> ,内容自己填写点击确认创建</p>
<p>点击新建好好的应用我们就会看到应用凭证选项，里面的 <code v-pre>AppKey</code> 就是客户端ID，<code v-pre>AppSecret</code> 是客户端秘钥</p>
<ul>
<li>填写到Alist后台单点登录内对应的参数即可</li>
</ul>
<p>来到左侧栏找到 <code v-pre>登录与分享</code>  <mark>填写回调参数 <strong><code v-pre>http://127.0.0.1:5234/api/auth/sso_callback</code></strong></mark></p>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="回调参数示例">
    <span>回调参数示例</span>
  </div>
  <div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">http://127.0.0.1:5244/api/auth/sso_callback</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>
</div><ul>
<li>注：我这里回调参数是本地测试就使用了 <a href="http://127.x" target="_blank" rel="noopener noreferrer">http://127.x</a> 大家使用的时候写 <strong>http(s)://自己域名/api/auth/sso_callback</strong></li>
</ul>
<p>回调参数写好好我们来到左侧栏找到 <code v-pre>权限管理</code> 找到 <strong><code v-pre>通讯录个人信息读权限</code></strong> 然后点击进行授权</p>
<p>Alist 后台参数也记得写好保存，写好保存后也要回到个人资料下方会有一个需要绑定的按钮进行绑定，否则无法使用</p>
<h4 id="完整填写参考示意图-1" tabindex="-1"><a class="header-anchor" href="#完整填写参考示意图-1"><span><strong>完整填写参考示意图</strong></span></a></h4>
<p><img src="/img/advanced/dingding.png" alt="sso" loading="lazy"></p>
<p></p>
</template>
<template #tab2="{ value, isActive }">
<p>首先打开 <strong><a href="https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade" target="_blank" rel="noopener noreferrer">https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade</a></strong></p>
<p>然后注册创建应用，我这里就不多说了可以看完整示意图</p>
<p>账户类型必须选择：<strong>任何组织目录(任何 Azure AD 目录 - 多租户)中的帐户</strong></p>
<p>微软回调参数：必须以&quot;HTTPS&quot;或&quot;<a href="http://xn--localhost-jn9p932c" target="_blank" rel="noopener noreferrer">http://localhost开头</a> （我这里是本地测试就用了localhost）</p>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="回调参数示例">
    <span>回调参数示例</span>
  </div>
  <div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">http://localhost:5244/api/auth/sso_callback?method</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">=sso_get_token</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">http://localhost:5244/api/auth/sso_callback?method</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">=get_sso_id</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div>
</div><ul>
<li>大家使用的时候写 <strong>http(s)://自己域名/api/auth/sso_callback?method=sso_get_token</strong></li>
<li>大家使用的时候写 <strong>http(s)://自己域名/api/auth/sso_callback?method=get_sso_id</strong></li>
<li>注：在新建应用时添加重定向URL的时候只能添加一条，第二条等应用好注册好后点击应用看到 重定向 URI 后面的选项</li>
</ul>
<p>填写好后我们点击左侧栏的 <code v-pre>证书和密码</code> 新建一个 <code v-pre>客户端密码</code>即可获得我们的客户端秘钥</p>
<ul>
<li>客户端密码创建好后 <strong><code v-pre>值</code></strong> 参数是我们的<code v-pre>客户端秘钥</code>，记得保存，出现一次就不会在出现了，如果没有及时保存新建一个客户端密码即可</li>
</ul>
<p>客户端ID在左侧栏顶部的 <code v-pre>概述</code>，找到 应用程序(客户端)ID 就是我们需要填写到Alist里面的客户端ID</p>
<ul>
<li>客户端ID和秘钥我们都拿到了填写到AList单点登录配置里面去即可</li>
</ul>
<p>Alist 后台参数也记得写好保存，写好保存后也要回到个人资料下方会有一个需要绑定的按钮进行绑定，否则无法使用</p>
<h4 id="完整填写参考示意图-2" tabindex="-1"><a class="header-anchor" href="#完整填写参考示意图-2"><span><strong>完整填写参考示意图</strong></span></a></h4>
<p><img src="/img/advanced/weiruan.png" alt="sso" loading="lazy"></p>
<p></p>
</template>
<template #tab3="{ value, isActive }">
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>若想使用Google登录，首选需要你搭建Alist的机器能连接访问Google才可以调用使用，不然连接不上无法使用</p>
</div>
<ol>
<li>
<p>首先打开 <strong><a href="https://console.cloud.google.com/projectselector2/apis/dashboard?hl=zh-cn" target="_blank" rel="noopener noreferrer">https://console.cloud.google.com/projectselector2/apis/dashboard?hl=zh-cn</a></strong></p>
</li>
<li>
<p>如果是第一次使用需要先新建一个项目（随便写就行，如果已创建跳过）</p>
</li>
<li>
<p>然后配置<a href="#%E5%90%8C%E6%84%8F%E5%B1%8F%E5%B9%95%E9%85%8D%E7%BD%AE">同意屏幕</a>（如何配置文档中有单独说明，如果已经配置好跳过）</p>
</li>
<li>
<p>配置好统一屏幕后我们点左侧的凭据，创建凭据，选择OAuth 客户端ID</p>
</li>
</ol>
<ul>
<li>应用类型 选择 Web 应用，名称随便写</li>
<li>然后在 已获授权的重定向 URI 添加我们的两个回调参数</li>
</ul>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="回调参数示例">
    <span>回调参数示例</span>
  </div>
  <div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">http://127.0.0.1:5244/api/auth/sso_callback?method</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">=get_sso_id</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">http://127.0.0.1:5244/api/auth/sso_callback?method</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">=sso_get_token</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div>
</div><ul>
<li>大家使用的时候写 <strong>http(s)://自己域名/api/auth/sso_callback?method=get_sso_id</strong></li>
<li>大家使用的时候写 <strong>http(s)://自己域名/api/auth/sso_callback?method=sso_get_token</strong></li>
</ul>
<p>填写好后，点击创建就能拿到  OAuth的客户端ID和秘钥</p>
<ul>
<li>（在这里如果你不小心关闭了也没关系，点击我们创建的应用名称进去在右上的位置就能看到）</li>
</ul>
<p>客户端ID和秘钥我们都拿到了填写到AList单点登录配置里面去即可</p>
<p>Alist 后台参数也记得写好保存，写好保存后也要回到个人资料下方会有一个需要绑定的按钮进行绑定，否则无法使用</p>
<h4 id="同意屏幕配置" tabindex="-1"><a class="header-anchor" href="#同意屏幕配置"><span><strong>同意屏幕配置</strong></span></a></h4>
<p>如已配置好 忽略本图即可(如果看不清楚可以放大)</p>
<p><img src="/img/drivers/google/Google-6.png" alt="Google" loading="lazy"></p>
<h4 id="完整填写参考示意图-3" tabindex="-1"><a class="header-anchor" href="#完整填写参考示意图-3"><span><strong>完整填写参考示意图</strong></span></a></h4>
<p><img src="/img/advanced/google.png" alt="sso" loading="lazy"></p>
<p></p>
</template>
<template #tab4="{ value, isActive }">
<p><code v-pre>Casdoor</code> 是什么？ 是可以使用其他 OAuth 应用程序登录，<a href="https://casdoor.org/zh/docs/basic/server-installation" target="_blank" rel="noopener noreferrer"><strong>自行部署</strong></a>开源免费，使用他们官方托管是需要付费的。</p>
<p>现在，Casdoor 支持许多OAuth 应用程序提供者，多达几十种，你见过的没见过的都有</p>
<p><strong>GitHub开源链接：<a href="https://github.com/casdoor/casdoor" target="_blank" rel="noopener noreferrer">https://github.com/casdoor/casdoor</a></strong></p>
<hr>
<p>我们进入<code v-pre>Casdoor</code>后，首先分别新建一下 <strong>组织</strong><sup>1</sup>，<strong>令牌</strong><sup>2</sup>，<strong>应用</strong><sup>3</sup>，<strong>用户</strong><sup>4</sup></p>
<p>请勿直接使用默认组织(<strong>app-built-in</strong>),因为这个组织内的用户都是全局管理员帐号</p>
<p>然后依次填写到<code v-pre>AList</code>后台单点登录选项内，用户的参数暂时不用管，是在个人资料绑定单点登录的时候填写的</p>
<p><img src="/img/advanced/casdoor.png" alt="sso" loading="lazy"></p>
<p>以上参数填写好后，我们来到个人资料这里点击<code v-pre>绑定点单登录平台</code>，进行绑定</p>
<p>然后弹出<code v-pre>Casdoor</code>窗口，我们输入我们注册的用户名即可</p>
<p><img src="/img/advanced/casdoor-user.png" alt="sso" loading="lazy"></p>
<hr>
<h4 id="在casdoor接入一些其他的厂商" tabindex="-1"><a class="header-anchor" href="#在casdoor接入一些其他的厂商"><span><strong>在Casdoor接入一些其他的厂商</strong></span></a></h4>
<p>除了现在<code v-pre>AList</code>已经接入的 <code v-pre>GitHub 钉钉 谷歌 微软 </code>这四个除外还接入<code v-pre>QQ 百度 飞书 微信/企业微信  抖音 哔哩哔哩</code>等等等个，全部的<a href="https://casdoor.org/zh/docs/provider/oauth/overview" target="_blank" rel="noopener noreferrer"><strong>点击这里查看全部可以接入的厂商</strong></a>，当然了<code v-pre>AList</code>已经接入的四个也是可以添加到<code v-pre>Casdoor</code></p>
<p><strong>查看详细接入其它提供商教程：<a href="https://anwen-anyi.github.io/index/09-ssologin.html" target="_blank" rel="noopener noreferrer">点击查看</a></strong></p>
<details class="hint-container details"><summary>直接 iframe 查看</summary>
<iframe src="https://anwen-anyi.github.io/index/09-ssologin.html#%E6%8E%A5%E5%85%A5" name="iframe_a" scrolling="ok" frameborder="0" width="100%" height="1000" style="scrolling: no;1px solid #ccc; border-radius: 16px;"></iframe>
</details>
</template>
</Tabs>
<br/>
<h2 id="单点登录自动注册为alist帐号" tabindex="-1"><a class="header-anchor" href="#单点登录自动注册为alist帐号"><span><strong>单点登录自动注册为AList帐号</strong></span></a></h2>
<ul>
<li><mark>AList 版本 &gt; <strong>v3.22.1</strong> 新增功能</mark></li>
</ul>
<p>在使用单点登录注册为AList帐号前，我们需要先将AList的单点登录进行绑定，绑定方法在上面有说明</p>
<ul>
<li>
<p>支持上述提到的<code v-pre>五个</code>单点登录方法</p>
</li>
<li>
<p>如果使用<code v-pre>Casdoor</code>,请勿直接使用默认组织(<strong>app-built-in</strong>),因为这个组织内的用户都是全局管理员帐号</p>
</li>
<li>
<p>除了<code v-pre>Casdoor</code>其它的只需要填写<code v-pre>客户端ID</code>和<code v-pre>客户端秘钥</code>以及下面新增的单点登录帐号注册为AList帐号的配置</p>
</li>
</ul>
<br/>
<h3 id="sso完整填写示例" tabindex="-1"><a class="header-anchor" href="#sso完整填写示例"><span><strong><i class="fa-solid fa-circle-0" style="color: #409eff;"></i>SSO完整填写示例</strong></span></a></h3>
<p>分别如何填写看下面的详细说明，示意图只是一个填写参考并不适合每个人的用户习惯</p>
<p><img src="/img/advanced/sso-add.png" alt="" loading="lazy"></p>
<br/>
<h3 id="sso自动注册" tabindex="-1"><a class="header-anchor" href="#sso自动注册"><span><strong><i class="fa-solid fa-circle-1" style="color: #409eff;"></i>SSO自动注册</strong></span></a></h3>
<p>如果我们想让SSO单点登录注册为AList帐号我们需要打开这个选项才可以使用</p>
<br/>
<h3 id="sso默认路径" tabindex="-1"><a class="header-anchor" href="#sso默认路径"><span><strong><i class="fa-solid fa-circle-2" style="color: #409eff;"></i>SSO默认路径</strong></span></a></h3>
<p>也就是说注册的帐号默认使用的路径，相当于AList用户设置里面的<code v-pre>基本路径</code></p>
<p>可以是根目录<code v-pre>/</code>，也可以是用户指定的路径<code v-pre>/path/test/Demo</code></p>
<p><img src="/img/advanced/sso-dir.png" alt="" loading="lazy"></p>
<br/>
<h3 id="sso默认权限" tabindex="-1"><a class="header-anchor" href="#sso默认权限"><span><strong><i class="fa-solid fa-circle-3" style="color: #409eff;"></i>SSO默认权限</strong></span></a></h3>
<p>相当于注册的用户默认开通哪些权限，就如下面所示的</p>
<p><img src="/img/advanced/sso-permission_b.png" alt="" data-mode="lightmode-only" loading="lazy"></p>
<p><img src="/img/advanced/sso-permission_h.png" alt="" data-mode="darkmode-only" loading="lazy"></p>
<p>默认为0，不开通任何权限</p>
<p>如果在注册时我们需要开通一些权限我们只需要不同权限的数字相加即可</p>
<p>例如：</p>
<ol>
<li>我们需要默认开通用户的<code v-pre>WebDav读取</code>和<code v-pre>WebDav管理</code>那就是256+512=768，我们就在填写选项填写<code v-pre>768</code>即可</li>
<li>如果我们需要注册时默认开通<code v-pre>创建目录或上传</code>和<code v-pre>重命名</code>和<code v-pre>删除</code>这三个权限 那就是8+16+128=152，我们在后台填写<code v-pre>152</code>即可</li>
</ol>
<p>例子就不多说了，需要那个权限自己相加就可以</p>
<br/>
<h3 id="注意事项以及说明" tabindex="-1"><a class="header-anchor" href="#注意事项以及说明"><span><strong><i class="fa-solid fa-circle-4" style="color: #409eff;"></i>注意事项以及说明</strong></span></a></h3>
<p><strong>4.1-AList用户数据库已存在同名的帐号</strong></p>
<table>
<thead>
<tr>
<th>username</th>
<th>password</th>
<th>base_path</th>
<th>role</th>
<th>permission</th>
<th>opt_secret</th>
<th>github_id</th>
<th>disabled</th>
<th>sso_id</th>
</tr>
</thead>
<tbody>
<tr>
<td>anyi</td>
<td>FzdDfkmU</td>
<td>/本地1</td>
<td>0</td>
<td>3</td>
<td></td>
<td></td>
<td>0</td>
<td></td>
</tr>
<tr>
<td>anyi_<strong>dc188911</strong></td>
<td>RUCtgqCw</td>
<td>/本地1</td>
<td>0</td>
<td>3</td>
<td></td>
<td></td>
<td>0</td>
<td><strong>dc18891</strong></td>
</tr>
</tbody>
</table>
<p>如上表格所示，新注册的单点登录用户名称后增加了一串多余的id</p>
<p>这是因为AList用户数据库中已有了相同的用户，所以在用户名后把单点登录ID也添加上去了</p>
<p>如果你新注册的单点登录用户名在AList用户数据库中没有，它就不会在名字后面添加单点登录ID</p>
<br/>
<p><strong>4.2-如果不想让单点登录的帐号注册为AList帐号了怎么办?</strong></p>
<p>把<code v-pre>Sso自动注册</code>关闭就可以，这样不影响已经使用单点登录注册好的帐号使用</p>
<br/>
<p><strong>4.3-如果我把单点登录选项关闭，使用单点登录注册的帐号怎么办?</strong></p>
<p>不用担心，使用单点登录注册好登录AList后，在后台登录，登录好后找到<code v-pre>个人资料</code></p>
<ul>
<li>可以自行修改 <strong><code v-pre>用户名</code><strong>和</strong><code v-pre>密码</code></strong> ，修改好后保存，这样就可以正常使用AList帐号来登录了</li>
<li>这时候可以点击<code v-pre>解绑单点登录平台</code>了，解绑和不解绑都可以，后续该用户的<a href="#sso%E9%BB%98%E8%AE%A4%E8%B7%AF%E5%BE%84"><strong>默认路径</strong></a>和<a href="#sso%E9%BB%98%E8%AE%A4%E6%9D%83%E9%99%90"><strong>默认权限</strong></a>只能通过管理员在AList后台用户进行修改</li>
</ul>
<br/>
<p><strong>4.4-使用单点登录提示这个错误码是怎么回事?</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">400</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"The single sign on platform is not bound to any users: record not found"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">null</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为<a href="#sso%E8%87%AA%E5%8A%A8%E6%B3%A8%E5%86%8C">单点登录自动注册</a>为AList帐号的选项没开启，无法将单点登录注册为AList帐号</p>
<ul>
<li>如果你是管理员，你可以开启一下</li>
<li>如果你是用户，你可以去联系管理员开启</li>
</ul>
<br/>
<h2 id="sso兼容模式" tabindex="-1"><a class="header-anchor" href="#sso兼容模式"><span><strong>SSO兼容模式</strong></span></a></h2>
<p>AList单点登录绑定了钉钉，然后在  <strong><code v-pre>钉钉</code></strong>  应用内打开AList，登录时选择钉钉登录会跳到自己电脑浏览器，授权后你会发现没有后续反应了，因为浏览器无法跳回钉钉应用內浏览器页面</p>
<p>这时候就需要打开 <strong><code v-pre>SSO兼容模式</code></strong> 再去点击登录就可以登录成功了</p>
<p><strong>AList应用在钉钉软件内打开如图所示：</strong></p>
<p><img src="/img/advanced/sso_cm.png" alt="" loading="lazy"></p>
<br/>
<h3 id="如何创建钉钉工作台內应用" tabindex="-1"><a class="header-anchor" href="#如何创建钉钉工作台內应用"><span><strong>如何创建钉钉工作台內应用</strong></span></a></h3>
<p>一张图教你新建一个应用并且添加</p>
<ul>
<li>LOGO是默认的新建时不可修改，可以等新建好后再修改 <sup>(看图二)</sup></li>
<li>如果你只是在钉钉应用內浏览AList，不使用单点登录后台管理，可以不用设置单点登录配置只添加应用就可以</li>
</ul>
<p><img src="/img/advanced/sso_add_app.png" alt="" loading="lazy"></p>
<br/>
<h4 id="修改应用logo" tabindex="-1"><a class="header-anchor" href="#修改应用logo"><span>修改应用LOGO</span></a></h4>
<p>打开 <a href="https://open-dev.dingtalk.com/fe/app#/corp/app" target="_blank" rel="noopener noreferrer"><strong>钉钉开放平台后台</strong></a> 找到你新建的应用进去修改LOGO就可以</p>
<p><img src="/img/advanced/sso_fix_logo.png" alt="" loading="lazy"></p>
<br/>
<h3 id="回调参数-重定向链接" tabindex="-1"><a class="header-anchor" href="#回调参数-重定向链接"><span><strong>回调参数(重定向链接)</strong></span></a></h3>
<p>开启 <strong><code v-pre>SSO兼容模式</code></strong> 后需要将单点登录对应的软件内修改一下回调参数链接改成下面的两个回调参数</p>
<ul>
<li><code v-pre>GitHub</code> 只需要添加一条：<code v-pre>http(s)://You_Url/api/auth/sso_get_token</code></li>
<li><code v-pre>微软</code>和<code v-pre>谷歌</code>两个都需要添加，可以添加多个，所以只需要新增两条就可以不用删除旧的</li>
</ul>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="New">
    <span>New</span>
  </div>
  <div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">http(s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)://You_Url/api/auth/get_sso_id</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">http(s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)://You_Url/api/auth/sso_get_token</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div>
</div><p>如果启用 SSO兼容模式 不修改则会提示 <code v-pre>invalid redirect url</code> 错误</p>
</div></template>


