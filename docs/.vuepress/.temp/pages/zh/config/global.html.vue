<template><div><h1 id="全局设置" tabindex="-1"><a class="header-anchor" href="#全局设置"><span>全局设置</span></a></h1>
<h2 id="隐藏文件" tabindex="-1"><a class="header-anchor" href="#隐藏文件"><span><strong>隐藏文件</strong></span></a></h2>
<p>匹配被正则表达式（<code v-pre>javascript</code>）隐藏的文件。不明白的不要乱填。错误的正则表达式会导致前端页面崩溃。每行一个。默认情况下，有一个示例表达式<code v-pre>/\/README.md/i</code>将 <a href="http://README.md" target="_blank" rel="noopener noreferrer">README.md</a> 从所有目录中隐藏。</p>
<p>并不是真的在隐藏。它仍然存在于 api 返回的列表中，只是没有出现在前端列表中。因此，如果您想真正隐藏，请添加<RouteLink to="/zh/guide/advanced/meta.html">元信息</RouteLink>。</p>
<br/>
<h2 id="打包下载" tabindex="-1"><a class="header-anchor" href="#打包下载"><span><strong>打包下载</strong></span></a></h2>
<p>是否开启文件打包下载，默认为 true。【不推荐使用尤其是文件很大很多时】</p>
<ul>
<li>推荐使用将文件推送到Aria2进行下载，支持下载文件夹保存目录结构</li>
<li>详细查看【<RouteLink to="/zh/config/other.html#%E5%85%B6%E4%BB%96">两个Aria2有什么区别</RouteLink>】</li>
</ul>
<br/>
<h2 id="自定义头部" tabindex="-1"><a class="header-anchor" href="#自定义头部"><span><strong>自定义头部</strong></span></a></h2>
<p>在此处设置的任何内容都会自动放置在网页头部的开头</p>
<ul>
<li>如何配置PWA（Desktop、Android、IOS）：<strong><a href="https://github.com/alist-org/alist/issues/6724#issuecomment-2220251541" target="_blank" rel="noopener noreferrer">alist/issues/6724</a></strong></li>
</ul>
<br/>
<h2 id="自定义body" tabindex="-1"><a class="header-anchor" href="#自定义body"><span><strong>自定义body</strong></span></a></h2>
<p>在此处设置的任何内容都会自动放置在网页正文的末尾</p>
<br/>
<h2 id="链接过期时间" tabindex="-1"><a class="header-anchor" href="#链接过期时间"><span><strong>链接过期时间</strong></span></a></h2>
<p>直接链接的过期时间，以小时为单位。如果为 0，则不会过期。默认值为 0。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>只有加了密码的路径的直链才会有过期时间，否则不会过期。因为过期时间是加到sign查询参数中的，没有加密码的路径是不会检查sign的。</p>
</div>
<br/>
<h2 id="隐私正则表达式" tabindex="-1"><a class="header-anchor" href="#隐私正则表达式"><span><strong>隐私正则表达式</strong></span></a></h2>
<p>不想在错误消息中显示的内容，每行一个正则表达式（在 <code v-pre>Golang</code> 中）。匹配的内容将被替换为对应长度的*。</p>
<br/>
<h2 id="ocr-api" tabindex="-1"><a class="header-anchor" href="#ocr-api"><span><strong>ocr api</strong></span></a></h2>
<p>用于识别验证码。你可以自己部署：<a href="https://hub.docker.com/r/xhofe/ddddocr_server" target="_blank" rel="noopener noreferrer">https://hub.docker.com/r/xhofe/ddddocr_server</a> 默认的 ocr api 部署在 <a href="https://app.koyeb.com/" target="_blank" rel="noopener noreferrer">koyeb</a> 上（无可用性保证），不建议在生产环境中使用。</p>
<br/>
<h2 id="签名所有" tabindex="-1"><a class="header-anchor" href="#签名所有"><span><strong>签名所有</strong></span></a></h2>
<p>向所有文件的直接链接添加签名(无论是否有密码) 即 <code v-pre>https://xxxx.com/d/xx?sign=vUQ5KFXnwMseKnIUXGRcfoG3cEHzKFBiPGp1NriMDXA=:0</code></p>
<p>若需要关闭自行关闭即可，但需要注意安全问题，关闭签名后若站点能被公网访问，可能会被绕过密码访问私人文件。</p>
<p>还有两种方式也会携带 <code v-pre>sign?xxx</code>参数，1.添加存储勾选<code v-pre>启用签名</code>、2.元信息添加密码</p>
<p>三种方式的范围 <code v-pre>签名所有</code> &gt; <code v-pre>元信息添加密码</code> &gt; 添加存储勾选<code v-pre>启用签名</code></p>
<ol>
<li>签名所有：如果开启此选项，后续无论是否元信息加密、添加存储是否勾选<code v-pre>启用签名</code>都会携带sign参数</li>
<li>元信息添加密码：只是在这条元信息路径下的文件都会携带sign参数
<ul>
<li>如果开启<strong>应用到子文件夹</strong>，此路径下所有文件都会携带sign参数</li>
</ul>
</li>
<li>添加存储勾选<code v-pre>启用签名</code>：单独只这个存储驱动携带sign参数</li>
</ol>
<br/>
<h2 id="转发直链参数" tabindex="-1"><a class="header-anchor" href="#转发直链参数"><span><strong>转发直链参数</strong></span></a></h2>
<p>可以自行前往查看：<strong><a href="https://github.com/alist-org/alist/issues/3123" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/issues/3123</a></strong></p>
<br/>
<h2 id="文件名字符映射" tabindex="-1"><a class="header-anchor" href="#文件名字符映射"><span><strong>文件名字符映射</strong></span></a></h2>
<p>主要是来映射一些特殊符 让Alist来正常工作</p>
<p>比如 <code v-pre>/</code> 符号在Alist程序里面是 路径符号 有些人的文件带 <code v-pre>/</code> 符号导致文件中途断开无法查看等错误，我们就可以通过这种方式来映射转换一下。</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"/"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"|"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"xx1"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"xx1"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"xx2"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"xx2"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>默认的是开头的第一个(<code v-pre>&quot;/&quot;: &quot;|&quot;,&quot;</code>)，后续有想自己添加的可以自己在后面添加，格式就是如上格式很简单。</p>
<br/>
<h2 id="启用-webauthn-登录" tabindex="-1"><a class="header-anchor" href="#启用-webauthn-登录"><span><strong>启用 Webauthn 登录</strong></span></a></h2>
<p><strong>Webauthn</strong> 是什么? 自己在搜索引擎吧，今天教大家如何使用</p>
<p>在后台<code v-pre>设置</code>--&gt;<code v-pre>全局</code>--&gt;打开<code v-pre>启用 Webauthn 登录</code>，回到后台<code v-pre>个人资料</code>--&gt;绑定<code v-pre>添加 Webauthn 凭据</code></p>
<ul>
<li><code v-pre>添加 Webauthn 凭据</code>使用的是本台电脑的<code v-pre>PIN</code>或者<code v-pre>配套设备(例如手环,手表)</code>【支持 Windows Hello配置中的所有选项,例如<code v-pre>人脸</code>和<code v-pre>指纹</code>】</li>
<li>就像绑定单点登录那样进行绑定，绑定好后我们就可以使用 <strong><code v-pre>Webauthn</code></strong> 进行登录了
<ul>
<li>在登录页面点击最右侧的登录按钮，输入我们的用户名，点击登录，然后再解锁需要的<code v-pre>Webauthn</code>验证方式就可以登录</li>
</ul>
</li>
<li>添加<code v-pre>Webauthn</code>需要一个安全来源，只能在<code v-pre>https</code>或者<code v-pre>localhost</code>使用
<ul>
<li>不安全的来源，例如：http，192.168.x.x，127.0.0.1，或者直接使用服务器IP，等这些地方不可以使用</li>
</ul>
</li>
</ul>
</div></template>


