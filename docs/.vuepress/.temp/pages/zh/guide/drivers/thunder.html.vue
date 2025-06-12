<template><div><h1 id="迅雷云盘-x-浏览器" tabindex="-1"><a class="header-anchor" href="#迅雷云盘-x-浏览器"><span>迅雷云盘 / X / 浏览器</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>迅雷 前两个是服务国内用户</p>
<p>小白请直接使用 迅雷不要使用 <code v-pre>迅雷专家版</code></p>
<p><code v-pre>迅雷专家版</code>主要提供更自由的设置,实现更多登录方式</p>
<hr>
<p>迅雷 X 服务海外用户，截止文档发布时只有 安卓版其它版本暂未发布</p>
<ul>
<li>迅雷 X 目前未开启会员的速度也符合使用情况，后期更改暂时未知</li>
<li>使用APP可能需要 Proxy，挂载在AList不需要</li>
</ul>
<hr>
<p>迅雷浏览器：目前仅支持手机端（Android、iOS）</p>
<ul>
<li><strong><a href="https://x.xunlei.com/" target="_blank" rel="noopener noreferrer">https://x.xunlei.com/</a></strong></li>
<li>如果在AList登录后会将手机端踢下线，反之如果先在AList登录再登录手机，会将AList踢下线但是没有提示</li>
</ul>
</div>
<Tabs :data='[{"id":"迅雷"},{"id":"迅雷专家版"},{"id":"迅雷 X"},{"id":"迅雷 X 专家版"},{"id":"迅雷浏览器"},{"id":"迅雷浏览器专家版"}]' tab-id="thunder">
<template #title0="{ value, isActive }">迅雷</template>
<template #title1="{ value, isActive }">迅雷专家版</template>
<template #title2="{ value, isActive }">迅雷 X</template>
<template #title3="{ value, isActive }">迅雷 X 专家版</template>
<template #title4="{ value, isActive }">迅雷浏览器</template>
<template #title5="{ value, isActive }">迅雷浏览器专家版</template>
<template #tab0="{ value, isActive }">
<h3 id="用户名" tabindex="-1"><a class="header-anchor" href="#用户名"><span><strong>用户名</strong></span></a></h3>
<p>即用于登陆的手机号,邮箱,用户名(有概率无法登录,需要尝试)</p>
<ol>
<li>在获取验证码之前填写手机号先不要携带 <code v-pre>+86</code> 区号</li>
<li>获取验证码后填写需要携带 <code v-pre>+86</code> 区号，例如 +8613722223333 这样填写</li>
</ol>
<br/>
<h3 id="密码" tabindex="-1"><a class="header-anchor" href="#密码"><span><strong>密码</strong></span></a></h3>
<p>即用于登陆的密码</p>
<br/>
<h3 id="captchatoken" tabindex="-1"><a class="header-anchor" href="#captchatoken"><span><strong>CaptchaToken</strong></span></a></h3>
<p>在登录或上传是可能出现 need verify: {url},请访问错误中的链接完成验证得到 CaptchaToken（验证码）</p>
<p><img src="/img/drivers/xunlei/x1.png" alt="xunlei" loading="lazy"></p>
<p>填写好挂载目录 ID 账号 密码后保存，右上角会出现一大坨(没法复制)，</p>
<p>我们回到添加账号这里来复制 从 Https 开始复制到结束到一个新窗口进行获取验证码参数(CaptchaToken)</p>
<p>看下图添加</p>
<p><img src="/img/drivers/xunlei/x2.png" alt="xunlei" loading="lazy"></p>
<br/>
<h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-99" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFZEOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqQ90QiqPS3N3NTcFG6CsbExqgkmBRUQbaVJ6UWJBRkKmSmphgrRCrFg0WRDMJWalwLlRj+bs+bZnF1Pdi9+PqEt1srKqjg/NzU5J7G42NYW4mVbW1u7RKNooLefdWx/sW7f0yXtULNAqlxS0xTgWmBOtDQDK0gyjIaYGxrkE6urB9T4sqFTTxeXaZnJ2UAtCkp6evopRZllqUXF+sn5ubn5eXoZJbk5yuWpSSmJZbrP1057PnWpEpIeYMgSqQcAEWS3Rg=="></Mermaid></template>
<template #tab1="{ value, isActive }">
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>迅雷如果需要下载必须指定 UserAgent(同下 DownUserAgent)<br>
或使用本程序中的代理功能进行中转。</p>
</div>
<h3 id="登录类型" tabindex="-1"><a class="header-anchor" href="#登录类型"><span><strong>登录类型</strong></span></a></h3>
<ol>
<li>
<p>选择 <code v-pre>用户名</code> 时填用户名和密码</p>
<ul>
<li>用户名需要携带 <code v-pre>+86</code> 区号，例如 +8613722223333 这样填写</li>
</ul>
</li>
<li>
<p>选择 <code v-pre>刷新令牌</code>时只需填写 <code v-pre>刷新令牌</code></p>
</li>
</ol>
<br/>
<h3 id="签名类型" tabindex="-1"><a class="header-anchor" href="#签名类型"><span><strong>签名类型</strong></span></a></h3>
<p>选择 <code v-pre>算法</code> 时需填写 <code v-pre>算法</code>(比较难获取,需要逆向)</p>
<p>选择 <code v-pre>验证码签名</code> 时只需填写 <code v-pre>验证码签名</code> 和 <code v-pre>时间戳</code></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>//签名算法</span></span>
<span class="line"><span>str = ClientID + ClientVersion + PackageName + DeviceID + Timestamp</span></span>
<span class="line"><span>for (Algorithm in Algorithms) {</span></span>
<span class="line"><span>    str = md5(str + Algorithm)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>CaptchaSign = "1." + str</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>登录类型(Login type) 和 签名类型(Sign type) 推荐选择选项</p>
<p><img src="/img/drivers/xunlei/x3.png" alt="xunlei" loading="lazy"></p>
<br/>
<h3 id="设备id" tabindex="-1"><a class="header-anchor" href="#设备id"><span><strong>设备ID</strong></span></a></h3>
<p>通过 MD5 计算的值，用于判断登录的设备</p>
<h3 id="客户端id-客户端秘钥-客户端版本-包名" tabindex="-1"><a class="header-anchor" href="#客户端id-客户端秘钥-客户端版本-包名"><span><strong>客户端ID, 客户端秘钥, 客户端版本, 包名</strong></span></a></h3>
<p>与签名有关，根据实际情况填写</p>
<h3 id="用户代理" tabindex="-1"><a class="header-anchor" href="#用户代理"><span><strong>用户代理</strong></span></a></h3>
<p>API 请求使用的 UserAgent，设置错误可能无法访问或限速</p>
<h3 id="下载用户代理" tabindex="-1"><a class="header-anchor" href="#下载用户代理"><span><strong>下载用户代理</strong></span></a></h3>
<p>下载时用到的 User Agent，如果设置错误会无法下载(开启代理会使用) 固定参数：</p>
<p><code v-pre>Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36</code></p>
<br/>
<h2 id="关键数据获取流程" tabindex="-1"><a class="header-anchor" href="#关键数据获取流程"><span><strong>关键数据获取流程</strong></span></a></h2>
<p>通过网络分析工具(抓包工具)获取迅雷请求数据</p>
<p>打开迅雷并登录账号（下图使用的是 PC 客户端来操作的，Web 端也可以）</p>
<p>请求 <a href="https://xluser-ssl.xunlei.com/v1/shield/captcha/init" target="_blank" rel="noopener noreferrer">https://xluser-ssl.xunlei.com/v1/shield/captcha/init</a> 中包含<br>
CaptchaSign、Timestamp、DeviceID、ClientID、ClientVersion、PackageName、User-Agent</p>
<p>注：获取好两张图信息后再慢慢的从抓到的两条数据内挑选数据填进去</p>
<p>登录迅雷 打开抓包工具后，这时候可能，不能立马获取到 <code v-pre>v1/shield/captcha/init</code> 的信息，</p>
<p>迅雷 PC 客户端 和抓包工具不要关闭，等待即可，<strong>5 分钟左右</strong> 就会自动刷新</p>
<p>就会看到如下图的参数 照着获取填写即可(看不清的话可以右键复制图片链接到浏览器新开个窗口打开)</p>
<p>看到 <code v-pre>v1/shield/captcha/init</code> 抓取到后 请<strong>立刻马上不要耽误一秒钟</strong> 把迅雷在右下角任务栏的迅雷右键点击退出，彻底退出 然后重新打开 获取到<strong>图二</strong></p>
<p><img src="/img/drivers/xunlei/x4.png" alt="xunlei" loading="lazy"></p>
<p>重启迅雷会刷新 token</p>
<p>请求 <a href="https://xluser-ssl.xunlei.com/v1/auth/token" target="_blank" rel="noopener noreferrer">https://xluser-ssl.xunlei.com/v1/auth/token</a> 中包含 RefreshToken（请使用返回的值）、ClientSecret（web 端不存在）</p>
<p><img src="/img/drivers/xunlei/x5.png" alt="xunlei" loading="lazy"></p>
<p>图一包含 <strong>7 条</strong> 参数 | 图一包含 <strong>2 条</strong> 参数 | 一条固定参数(Down UserAgent) ，十条参数 和 3 个选项 以及一个挂载路径，写好保存即可，保存前记得检查喔~~</p>
<br/>
<h3 id="使用视频url" tabindex="-1"><a class="header-anchor" href="#使用视频url"><span><strong>使用视频URL</strong></span></a></h3>
<ul>
<li><strong><a href="https://github.com/alist-org/alist/pull/6464#issuecomment-2124306443" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/pull/6464#issuecomment-2124306443</a></strong></li>
</ul>
<br/>
<h3 id="迅雷专家版-完整的参数填演示图" tabindex="-1"><a class="header-anchor" href="#迅雷专家版-完整的参数填演示图"><span><strong>迅雷专家版 完整的参数填演示图</strong></span></a></h3>
<p><img src="/img/drivers/xunlei/x6.png" alt="xunlei" loading="lazy"></p>
<br/>
<h3 id="默认使用的下载方式-1" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式-1"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-239" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></template>
<template #tab2="{ value, isActive }">
<div class="hint-container caution">
<p class="hint-container-title">警告</p>
<p>目前官方对于频繁调用接口行为会进行封号处理，请谨慎使用，后果自负。</p>
</div>
<h3 id="用户名、密码" tabindex="-1"><a class="header-anchor" href="#用户名、密码"><span><strong>用户名、密码</strong></span></a></h3>
<p>即用于登陆的邮箱和密码</p>
<br/>
<h3 id="验证码" tabindex="-1"><a class="header-anchor" href="#验证码"><span><strong>验证码</strong></span></a></h3>
<p>会自动填充，不用自己填写</p>
<br/>
<h3 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id"><span><strong>根文件夹ID</strong></span></a></h3>
<p>默认为空展示全部目录，如果想用子文件夹做根目录请抓包获取</p>
<ul>
<li>抓包请求中的<code v-pre>https://api-pan.xunleix.com/drive/v1/files?parent_id=&amp;page_token=&amp;filters=</code>，可以得到下面参数
<ul>
<li><code v-pre>文件夹ID（id）</code></li>
<li><code v-pre>文件夹名称（name）</code></li>
<li><code v-pre>父文件夹ID（parent_id）</code></li>
</ul>
</li>
<li>根目录下获取的<code v-pre>文件夹ID（Folder id）</code>（例如：<code v-pre>我接收的文件</code>、<code v-pre>我的云盘</code>、<code v-pre>高速云下载</code>），<strong>这个会随着账号不同而变动，没有通用的值，自己抓包获取</strong></li>
</ul>
<p><img src="/img/drivers/xunlei/xlx_name.jpg" alt="xunlei" loading="lazy"></p>
<br/>
<h3 id="使用视频url-1" tabindex="-1"><a class="header-anchor" href="#使用视频url-1"><span><strong>使用视频URL</strong></span></a></h3>
<ul>
<li><strong><a href="https://github.com/alist-org/alist/pull/6464#issuecomment-2124306443" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/pull/6464#issuecomment-2124306443</a></strong></li>
</ul>
<br/>
<h3 id="默认使用的下载方式-2" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式-2"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-314" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid><p></p>
</template>
<template #tab3="{ value, isActive }">
<div class="hint-container caution">
<p class="hint-container-title">警告</p>
<p>目前官方对于频繁调用接口行为会进行封号处理，请谨慎使用，后果自负。</p>
</div>
<h3 id="用户名、密码-1" tabindex="-1"><a class="header-anchor" href="#用户名、密码-1"><span><strong>用户名、密码</strong></span></a></h3>
<p>即用于登陆的邮箱和密码</p>
<br/>
<h3 id="验证码-1" tabindex="-1"><a class="header-anchor" href="#验证码-1"><span><strong>验证码</strong></span></a></h3>
<p>会自动填充，不用自己填写</p>
<br/>
<h3 id="根文件夹id-1" tabindex="-1"><a class="header-anchor" href="#根文件夹id-1"><span><strong>根文件夹ID</strong></span></a></h3>
<p>默认为空展示全部目录，如果想用子文件夹做根目录请抓包获取</p>
<ul>
<li>抓包请求中的<code v-pre>https://api-pan.xunleix.com/drive/v1/files?parent_id=&amp;page_token=&amp;filters=</code>，可以得到下面参数
<ul>
<li><code v-pre>文件夹ID（id）</code></li>
<li><code v-pre>文件夹名称（name）</code></li>
<li><code v-pre>父文件夹ID（parent_id）</code></li>
</ul>
</li>
<li>根目录下获取的<code v-pre>文件夹ID（Folder id）</code>（例如：<code v-pre>我接收的文件</code>、<code v-pre>我的云盘</code>、<code v-pre>高速云下载</code>），<strong>这个会随着账号不同而变动，没有固定一样的值，自己抓包获取</strong></li>
</ul>
<p><img src="/img/drivers/xunlei/xlx_name.jpg" alt="xunlei" loading="lazy"></p>
<br/>
<h3 id="登录类型-1" tabindex="-1"><a class="header-anchor" href="#登录类型-1"><span><strong>登录类型</strong></span></a></h3>
<ul>
<li><code v-pre>用户</code>：选择 <code v-pre>用户</code>时填<code v-pre>用户名和密码</code></li>
<li><code v-pre>刷新令牌</code>：选择 <code v-pre>刷新令牌</code> 时只需填写 <code v-pre>刷新令牌</code></li>
</ul>
<br/>
<h3 id="签名类型-1" tabindex="-1"><a class="header-anchor" href="#签名类型-1"><span><strong>签名类型</strong></span></a></h3>
<ul>
<li><code v-pre>算法</code>：选择 <code v-pre>算法（Algorithms）</code> 时需填写 <code v-pre>算法（Algorithms）</code></li>
<li><code v-pre>验证码签名</code>：选择 <code v-pre>验证码签名（Captcha sign）</code> 时只需填写 <code v-pre>验证码签名（Captcha sign）</code> 和 <code v-pre>时间戳（Timestamp）</code></li>
</ul>
<br/>
<h3 id="部分参数抓包说明" tabindex="-1"><a class="header-anchor" href="#部分参数抓包说明"><span><strong>部分参数抓包说明</strong></span></a></h3>
<ul>
<li><code v-pre>验证码</code> ：无需填写</li>
<li><code v-pre>设备id</code>：通过 MD5 计算的值，用于判断登录的设备</li>
<li><code v-pre>客户端ID</code>, <code v-pre>客户端密钥</code>, <code v-pre>客户端版本</code>, <code v-pre>包名</code>：与签名有关，根据实际情况填写</li>
</ul>
<hr>
<ul>
<li><code v-pre>用户代理</code>：API 请求使用的 <code v-pre>用户代理</code>，设置错误可能无法访问或限速</li>
<li><code v-pre>下载用户代理</code>：下载时用到的 <code v-pre>用户代理</code>，如果设置错误会无法下载(开启代理会使用)
<ul>
<li><code v-pre>用户代理</code> 和 <code v-pre>下载用户代理</code> 可以自己填写，如果不知道如何填写可以留空会自动填充</li>
</ul>
</li>
</ul>
<hr>
<p>抓包请求中的<code v-pre>https://xluser-ssl.xunleix.com/v1/shield/captcha/init</code>，可以得到下面参数<sup>6个</sup></p>
<ul>
<li><code v-pre>客户端ID（Client id）</code>、<code v-pre>设备id（Device id）</code>、<code v-pre>验证码签名（Captcha sign）</code></li>
<li><code v-pre>包名（Package name）</code>、<code v-pre>客户端版本（Client version）</code>、<code v-pre>时间戳（Timestamp）</code></li>
</ul>
<p><img src="/img/drivers/xunlei/xlx_z1.jpg" alt="xunlei" loading="lazy"></p>
<p>抓包请求中的<code v-pre>https://xluser-ssl.xunleix.com/v1/auth/signin</code>，可以得到下面的参数<sup>2个</sup></p>
<ul>
<li><code v-pre>客户端ID（Client id）</code>、<code v-pre>客户端密钥（Client secret）</code></li>
</ul>
<p><img src="/img/drivers/xunlei/xlx_z2.jpg" alt="xunlei" loading="lazy"></p>
<br/>
<h3 id="使用视频url-2" tabindex="-1"><a class="header-anchor" href="#使用视频url-2"><span><strong>使用视频URL</strong></span></a></h3>
<ul>
<li><strong><a href="https://github.com/alist-org/alist/pull/6464#issuecomment-2124306443" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/pull/6464#issuecomment-2124306443</a></strong></li>
</ul>
<br/>
<h3 id="默认使用的下载方式-3" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式-3"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-497" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></template>
<template #tab4="{ value, isActive }">
<h3 id="用户名、密码-2" tabindex="-1"><a class="header-anchor" href="#用户名、密码-2"><span><strong>用户名、密码</strong></span></a></h3>
<p>即用于登陆的手机号,邮箱,用户名，以及密码</p>
<ul>
<li>填写手机号要携带 <code v-pre>+86</code> 区号，例如 <code v-pre>+8613822334455</code></li>
</ul>
<br/>
<h3 id="验证码-2" tabindex="-1"><a class="header-anchor" href="#验证码-2"><span><strong>验证码</strong></span></a></h3>
<p>会自动填充，不用自己填写</p>
<br/>
<h3 id="根文件夹id-2" tabindex="-1"><a class="header-anchor" href="#根文件夹id-2"><span><strong>根文件夹ID</strong></span></a></h3>
<p>默认为空展示全部目录，如果想用子文件夹做根目录请抓包获取</p>
<ul>
<li>抓包请求中的<code v-pre>https://x-api-pan.xunlei.com/drive/v1/files?parent_id&amp;page_token&amp;space=</code>，可以得到下面参数
<ul>
<li><code v-pre>文件夹ID（id）</code></li>
<li><code v-pre>文件夹名称（name）</code></li>
<li><code v-pre>父文件夹ID（parent_id）</code></li>
</ul>
</li>
<li>根目录下获取的<code v-pre>文件夹ID（Folder id）</code>（例如：<code v-pre>来自分享</code>、<code v-pre>超级保险箱</code>），<strong>这个会随着账号不同而变动，没有固定一样的值，自己抓包获取</strong></li>
</ul>
<p><img src="/img/drivers/xunlei/x_br_foled.png" alt="xunlei" loading="lazy"></p>
<br/>
<h3 id="保险箱密码" tabindex="-1"><a class="header-anchor" href="#保险箱密码"><span><strong>保险箱密码</strong></span></a></h3>
<p>迅雷浏览器云盘的保险箱密码</p>
<ul>
<li>超级保险箱內文件只能直接删除 无法删除到回收站，所以下方<a href="#%E5%88%A0%E9%99%A4%E6%96%B9%E5%BC%8F"><strong>删除方式</strong></a>与此配置无关</li>
</ul>
<br/>
<h3 id="删除方式" tabindex="-1"><a class="header-anchor" href="#删除方式"><span><strong>删除方式</strong></span></a></h3>
<p><strong>回收站</strong>：在AList删除后移除到回收站，如果有误删可以通过迅雷云盘恢复</p>
<p><strong>删除</strong>：直接删除不可以恢复找回</p>
<br/>
<h3 id="使用视频url-3" tabindex="-1"><a class="header-anchor" href="#使用视频url-3"><span><strong>使用视频URL</strong></span></a></h3>
<ul>
<li>开启 <code v-pre>视频视频URL</code> 可能会遇到部分类型的文件无法正常访问</li>
<li><strong><a href="https://github.com/alist-org/alist/pull/6464#issuecomment-2124306443" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/pull/6464#issuecomment-2124306443</a></strong></li>
</ul>
<br/>
<h3 id="默认使用的下载方式-4" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式-4"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-603" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></template>
<template #tab5="{ value, isActive }">
<h3 id="用户名、密码-3" tabindex="-1"><a class="header-anchor" href="#用户名、密码-3"><span><strong>用户名、密码</strong></span></a></h3>
<p>即用于登陆的手机号,邮箱,用户名，以及密码</p>
<ul>
<li>填写手机号要携带 <code v-pre>+86</code> 区号，例如 <code v-pre>+8613822334455</code></li>
</ul>
<br/>
<h3 id="验证码-3" tabindex="-1"><a class="header-anchor" href="#验证码-3"><span><strong>验证码</strong></span></a></h3>
<p>会自动填充，不用自己填写</p>
<br/>
<h3 id="根文件夹id-3" tabindex="-1"><a class="header-anchor" href="#根文件夹id-3"><span><strong>根文件夹ID</strong></span></a></h3>
<p>默认为空展示全部目录，如果想用子文件夹做根目录请抓包获取</p>
<ul>
<li>抓包请求中的<code v-pre>https://x-api-pan.xunlei.com/drive/v1/files?parent_id&amp;page_token&amp;space=</code>，可以得到下面参数
<ul>
<li><code v-pre>文件夹ID（id）</code></li>
<li><code v-pre>文件夹名称（name）</code></li>
<li><code v-pre>父文件夹ID（parent_id）</code></li>
</ul>
</li>
<li>根目录下获取的<code v-pre>文件夹ID（Folder id）</code>（例如：<code v-pre>来自分享</code>、<code v-pre>超级保险箱</code>），<strong>这个会随着账号不同而变动，没有固定一样的值，自己抓包获取</strong></li>
</ul>
<p><img src="/img/drivers/xunlei/x_br_foled.png" alt="xunlei" loading="lazy"></p>
<br/>
<h3 id="保险箱密码-1" tabindex="-1"><a class="header-anchor" href="#保险箱密码-1"><span><strong>保险箱密码</strong></span></a></h3>
<p>迅雷浏览器云盘的保险箱密码</p>
<ul>
<li>超级保险箱內文件只能直接删除 无法删除到回收站，所以下方<a href="#%E5%88%A0%E9%99%A4%E6%96%B9%E5%BC%8F-1"><strong>删除方式</strong></a>与此配置无关</li>
</ul>
<br/>
<h3 id="删除方式-1" tabindex="-1"><a class="header-anchor" href="#删除方式-1"><span><strong>删除方式</strong></span></a></h3>
<p><strong>回收站</strong>：在AList删除后移除到回收站，如果有误删可以通过迅雷云盘恢复</p>
<p><strong>删除</strong>：直接删除不可以恢复找回</p>
<br/>
<h3 id="登录类型-2" tabindex="-1"><a class="header-anchor" href="#登录类型-2"><span><strong>登录类型</strong></span></a></h3>
<ul>
<li><code v-pre>用户</code>：选择 <code v-pre>用户</code>时填<code v-pre>用户名和密码</code></li>
<li><code v-pre>刷新令牌</code>：选择 <code v-pre>刷新令牌</code> 时只需填写 <code v-pre>刷新令牌</code></li>
</ul>
<br/>
<h3 id="签名类型-2" tabindex="-1"><a class="header-anchor" href="#签名类型-2"><span><strong>签名类型</strong></span></a></h3>
<ul>
<li><code v-pre>算法</code>：选择 <code v-pre>算法（Algorithms）</code> 时需填写 <code v-pre>算法（Algorithms）</code></li>
<li><code v-pre>验证码签名</code>：选择 <code v-pre>验证码签名（Captcha sign）</code> 时只需填写 <code v-pre>验证码签名（Captcha sign）</code> 和 <code v-pre>时间戳（Timestamp）</code></li>
</ul>
<br/>
<h3 id="部分参数抓包说明-1" tabindex="-1"><a class="header-anchor" href="#部分参数抓包说明-1"><span><strong>部分参数抓包说明</strong></span></a></h3>
<ul>
<li><code v-pre>验证码</code> ：无需填写</li>
<li><code v-pre>设备id</code>：通过 MD5 计算的值，用于判断登录的设备</li>
<li><code v-pre>客户端ID</code>, <code v-pre>客户端密钥</code>, <code v-pre>客户端版本</code>, <code v-pre>包名</code>：与签名有关，根据实际情况填写</li>
</ul>
<hr>
<ul>
<li><code v-pre>用户代理</code>：API 请求使用的 <code v-pre>用户代理</code>，设置错误可能无法访问或限速</li>
<li><code v-pre>下载用户代理</code>：下载时用到的 <code v-pre>用户代理</code>，如果设置错误会无法下载(开启代理会使用)
<ul>
<li><code v-pre>用户代理</code> 和 <code v-pre>下载用户代理</code> 可以自己填写，如果不知道如何填写可以留空会自动填充</li>
</ul>
</li>
</ul>
<hr>
<p>抓包请求中的<code v-pre>https://xluser-ssl.xunlei.com/v1/shield/captcha/init</code>，可以得到下面参数<sup>6个</sup></p>
<ul>
<li><code v-pre>客户端ID（Client id）</code>、<code v-pre>设备id（Device id）</code>、<code v-pre>验证码签名（Captcha sign）</code></li>
<li><code v-pre>包名（Package name）</code>、<code v-pre>客户端版本（Client version）</code>、<code v-pre>时间戳（Timestamp）</code><br>
<img src="/img/drivers/xunlei/x_br_add1.png" alt="xunlei" loading="lazy"></li>
</ul>
<p>抓包请求中的<code v-pre>https://xluser-ssl.xunlei.com/v1/auth/signin/token</code>，可以得到下面的参数<sup>3个</sup></p>
<ul>
<li><code v-pre>客户端ID（Client id）</code>、<code v-pre>客户端密钥（Client secret）</code>、<code v-pre>刷新令牌（Refresh token）</code></li>
</ul>
<p><img src="/img/drivers/xunlei/x_br_add2.png" alt="xunlei" loading="lazy"></p>
<br/>
<h3 id="使用视频url-4" tabindex="-1"><a class="header-anchor" href="#使用视频url-4"><span><strong>使用视频URL</strong></span></a></h3>
<ul>
<li>开启 <code v-pre>视频视频URL</code> 可能会遇到部分类型的文件无法正常访问</li>
<li><strong><a href="https://github.com/alist-org/alist/pull/6464#issuecomment-2124306443" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/pull/6464#issuecomment-2124306443</a></strong></li>
</ul>
<br/>
<h3 id="默认使用的下载方式-5" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式-5"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-811" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></template>
</Tabs>
</div></template>


