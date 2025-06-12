<template><div><h1 id="_123网盘-分享-直链" tabindex="-1"><a class="header-anchor" href="#_123网盘-分享-直链"><span>123网盘 / 分享 / 直链</span></a></h1>
<p>可以查看下方选项卡内容查看不同方式挂载（包括 <strong><code v-pre>直链</code></strong> ,<code v-pre>个人</code>,<code v-pre>分享</code>）</p>
<ul>
<li>
<p><code v-pre>直链</code>：仅适配了鉴权功能，链接也需要自己填写，像<RouteLink to="/zh/guide/drivers/UrlTree.html">地址树一样</RouteLink>,把在123直链复制的直链填写进去即可</p>
</li>
<li>
<p><code v-pre>个人</code>：免费用户1G流量下载，上传不限制，禁止多IP共享使用</p>
</li>
</ul>
<Tabs :data='[{"id":"个人"},{"id":"直链"},{"id":"分享"}]' tab-id="123">
<template #title0="{ value, isActive }">个人</template>
<template #title1="{ value, isActive }">直链</template>
<template #title2="{ value, isActive }">分享</template>
<template #tab0="{ value, isActive }">
<h2 id="个人" tabindex="-1"><a class="header-anchor" href="#个人"><span><strong>个人</strong></span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>免费用户1G流量下载，上传不限制，禁止多IP共享使用</p>
<ul>
<li>需要使用 <code v-pre>v3.33.0</code>版本</li>
</ul>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>挂载提示：</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">failed get objs: failed to list objs:当前账号存在安全风险，请使用短信验证码或者微信进行登录。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>解决方案：</p>
<ul>
<li>这是由于123云盘官方禁止在陌生设备挂载，如果你是在<code v-pre>本地挂载</code>或者<code v-pre>Windows Server服务器挂载</code>可以在本地打开123云盘网页登录一下或者修改一次密码
<ul>
<li>例子：<a href="https://github.com/alist-org/alist/discussions/6105#discussioncomment-8628361" target="_blank" rel="noopener noreferrer">#6105</a>、 <a href="https://github.com/alist-org/alist/discussions/6254#discussioncomment-8884882" target="_blank" rel="noopener noreferrer">#6254</a></li>
</ul>
</li>
</ul>
</div>
</div>
<p><a href="https://www.123pan.com/" target="_blank" rel="noopener noreferrer">https://www.123pan.com/</a></p>
<p>只需填写账户密码即可。</p>
<h3 id="用户名" tabindex="-1"><a class="header-anchor" href="#用户名"><span><strong>用户名</strong></span></a></h3>
<p>用于登录的手机号码</p>
<h3 id="密码" tabindex="-1"><a class="header-anchor" href="#密码"><span><strong>密码</strong></span></a></h3>
<p>用于登录的密码</p>
<h3 id="根文件夹-id" tabindex="-1"><a class="header-anchor" href="#根文件夹-id"><span><strong>根文件夹 ID</strong></span></a></h3>
<p>输入要挂载的文件夹，官网URL的最后一串，如：</p>
<p><img src="/img/drivers/123/123.png" alt="123" loading="lazy"></p>
<h3 id="使用建议" tabindex="-1"><a class="header-anchor" href="#使用建议"><span><strong>使用建议</strong></span></a></h3>
<ul>
<li>貌似123的API每次加载的数量有限，故如果你一个文件夹内一次性加载几百个文件，可能会报错</li>
<li>建议不用在每个文件夹内放置太多子文件/文件夹</li>
</ul>
</template>
<template #tab1="{ value, isActive }">
<h2 id="直链" tabindex="-1"><a class="header-anchor" href="#直链"><span><strong>直链</strong></span></a></h2>
<div class="hint-container caution">
<p class="hint-container-title">请仔细阅读此提醒</p>
<p>因为123云盘直链是付费购买，有额度的，如果添加123直链存储，请及时设置密码，元信息等措施，防止被人恶意刷流量</p>
<p>设置好后，先自己在无痕模式下自己测试一下，没有设置正确防盗措施被恶意刷流量，自行负责。</p>
</div>
<p>首先打开 <strong><code v-pre>123云盘直链管理</code></strong>: <strong><a href="https://www.123pan.com/DirectLink" target="_blank" rel="noopener noreferrer">https://www.123pan.com/DirectLink</a></strong> 右下角自己设置一个鉴权秘钥，然后打开鉴权状态开关</p>
<p><img src="/img/drivers/123/123_link_1.png" alt="123" loading="lazy"></p>
<ul>
<li>打开设置 123云盘设置 : <strong><a href="https://www.123pan.com/Setting" target="_blank" rel="noopener noreferrer">https://www.123pan.com/Setting</a></strong> ，找到帐号ID【下图<code v-pre>1</code>号标签】</li>
<li>如何开启直链？（需要开启会员才能用）
<ul>
<li>找到要开启的文件夹右键点击<code v-pre>启用直链空间</code>，开启后就会看到文件夹有一个链接图标【下图<code v-pre>2</code>号标签】</li>
</ul>
</li>
<li>如何获取文件直链？【下图<code v-pre>3</code>号标签】
<ul>
<li>进入已经<code v-pre>启用直链空间</code>的文件夹，找到需要获取的文件右键<code v-pre>获取直链链接</code>，获取到后填写到AList配置內</li>
</ul>
</li>
</ul>
<p><img src="/img/drivers/123/123_link_2.png" alt="123" loading="lazy"></p>
<h3 id="填写示例" tabindex="-1"><a class="header-anchor" href="#填写示例"><span><strong>填写示例</strong></span></a></h3>
<ul>
<li>
<p><strong>来源链接</strong>：填写我们一条一条复制的文件直链</p>
<ul>
<li>支持像<RouteLink to="/zh/guide/drivers/UrlTree.html">地址数</RouteLink>那样新建不同文件夹，支持填写文件大小和修改时间（提供四种方案可以使用，像地址树填写参考下方图片的图二示例）</li>
<li>文件大小单位：为<code v-pre>B</code>字节,例如1MB的文件要写，1048567，具体字节换算自己在浏览器搜索（可以不写）</li>
<li>文件修改时间：为<code v-pre>Unix timestamp-时间戳</code>，具体如何换算可以在浏览器搜索（可以不写）</li>
</ul>
<div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-txt"><span class="line"><span>填写格式:</span></span>
<span class="line"><span>[文件字节大小:][文件时间戳:]URL</span></span>
<span class="line"><span>127451136:1694101621:https://vip.123pan.cn/1812xxx499/123-link-Test/linuxqq_3.2.0-16736_mips64el.deb</span></span>
<span class="line"><span>[文件字节大小:]URL</span></span>
<span class="line"><span>134847488:https://vip.123pan.cn/1812xxx499/123-link-Test/linuxqq_3.2.0-16736_loong64.deb</span></span>
<span class="line"><span>[文件时间戳:]URL</span></span>
<span class="line"><span>1694101621:https://vip.123pan.cn/1812xxx499/123-link-Test/linuxqq_3.2.0-16736_arm64.AppImage</span></span>
<span class="line"><span>URL</span></span>
<span class="line"><span>https://vip.123pan.cn/1812xxx499/123-link-Test/linuxqq_3.2.0-16736_x86_64.AppImage</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>鉴权秘钥</strong>：</p>
<ul>
<li>直链管理页面自己设置，并开启，请必须开启</li>
</ul>
</li>
<li>
<p><strong>用户Uid</strong>：</p>
<ul>
<li>帐号设置页面內 帐号ID</li>
</ul>
</li>
<li>
<p><strong>有效期</strong>：</p>
<ul>
<li>文件直链有效期，单位为分钟，默认填充为30分钟</li>
</ul>
</li>
</ul>
<div class="image-preview">  
    <img src="/img/drivers/123/123_link_3.png" alt="123Link" title="123Link"/>
    <img src="/img/drivers/123/123_link_4.png" alt="123Link" title="123Link"/>
</div>
<p></p>
</template>
<template #tab2="{ value, isActive }">
<h2 id="分享" tabindex="-1"><a class="header-anchor" href="#分享"><span><strong>分享</strong></span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>由于123网盘的限制，此驱动不再积极维护</p>
</div>
<p>估计用不了几天就会被修复~</p>
<p>填写驱动的 <strong><code v-pre>分享key</code></strong> 和选填 <strong><code v-pre>分享密码</code></strong> (如果有密码需要填写)，根文件夹ID默认为<code v-pre>0</code>显示全部文件</p>
<h3 id="填写示例-1" tabindex="-1"><a class="header-anchor" href="#填写示例-1"><span><strong>填写示例</strong></span></a></h3>
<p><img src="/img/drivers/123/123_add_demo.png" alt="123" loading="lazy"></p>
<h3 id="分享密码" tabindex="-1"><a class="header-anchor" href="#分享密码"><span><strong>分享密码</strong></span></a></h3>
<p>有就填写，没有就不用</p>
<h3 id="根文件夹-id-1" tabindex="-1"><a class="header-anchor" href="#根文件夹-id-1"><span><strong>根文件夹 ID</strong></span></a></h3>
<p>分享链接根目录ID是<code v-pre>0</code>，展示全部文件</p>
<p>如果只想展示某个文件夹，打开开发者模式(F12)清空全部请求（可能123禁止debug调试需要自己关闭这个才能继续）</p>
<p>在想展示的目录上级目录请求內找到图片中右侧的请求，然后点击<code v-pre>响应</code>，找到下面的格式化按钮<code v-pre>{}</code>格式化一下，即可看到相关的目录ID，</p>
<p>如果不确定目录ID对不对目录ID下方有目录名称</p>
<p><img src="/img/drivers/123/123_fl_id.png" alt="123" loading="lazy"></p>
</template>
</Tabs>
<h2 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h2>
<Mermaid id="mermaid-272" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></div></template>


