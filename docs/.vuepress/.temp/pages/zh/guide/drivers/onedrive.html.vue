<template><div><h1 id="onedrive-分享" tabindex="-1"><a class="header-anchor" href="#onedrive-分享"><span>OneDrive / 分享</span></a></h1>
<br/>
<h2 id="正常-onedrive-挂载" tabindex="-1"><a class="header-anchor" href="#正常-onedrive-挂载"><span><strong>正常 OneDrive 挂载</strong></span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果你的账号不支持 API，（比如学校账号没有验证管理员，或者管理员禁用了 API），那么你也可以通过 WebDAV 挂载。 有关详细信息，请参阅 <RouteLink to="/zh/guide/drivers/webdav.html">WebDAV 页面</RouteLink></p>
</div>
<p>首先打开 <a href="https://alist.nn.ci/tool/onedrive/request" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/tool/onedrive/request</a></p>
<h3 id="创建应用" tabindex="-1"><a class="header-anchor" href="#创建应用"><span><strong>创建应用</strong></span></a></h3>
<blockquote>
<p>你也可以选择跳过此步，使用默认提供的client，但是需要组织管理员批准。</p>
</blockquote>
<ul>
<li>在打开的页面，选择所在区域，点击创建应用</li>
<li>登陆后选择&quot;注册应用程序&quot;，输入&quot;名称&quot;，选择&quot;任何组织目录中的账户和个人&quot;（注意这里不要看位置选择而是看文字，部分人可能是中间那个选项，不要选成单一租户或者其他选项，否则会导致登陆时出现问题），输入重定向 URL 为 <a href="https://alist.nn.ci/tool/onedrive/callback" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/tool/onedrive/callback</a> ，点击注册即可，然后可以得到 <code v-pre>client_id</code><br>
<img src="/img/drivers/onedrive-register-app.png" alt="client_id" loading="lazy"></li>
<li>注册好应用程序之后，选择&quot;证书和密码&quot;，点击&quot;新客户端密码&quot;，输入一串密码，选择时间为最长的那个，点击&quot;添加&quot;<br>
（注：在添加之后输入的密码之后会消失，请记录下来 <code v-pre>client_secret</code> 的值）<br>
<img src="/img/drivers/onedrive-new-password.png" alt="client_secret" loading="lazy"></li>
<li>选择 &quot;API 权限&quot;，点击 &quot;Microsoft Graph&quot;，在&quot;选择权限&quot;中输入 <code v-pre>file</code>，勾选 <code v-pre>Files.read</code>（注：Files.read 是只读最小权限，图中权限较大，也同样可以），点击&quot;确定&quot;<br>
<img src="/img/drivers/onedrive-update-permission.png" alt="api" loading="lazy"></li>
</ul>
<h3 id="获取刷新令牌" tabindex="-1"><a class="header-anchor" href="#获取刷新令牌"><span><strong>获取刷新令牌</strong></span></a></h3>
<p>将上一步骤中获得的 <code v-pre>client_id</code> 和 <code v-pre>client_secret</code> 填入 <a href="https://alist.nn.ci/tool/onedrive/request" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/tool/onedrive/request</a> ，点击&quot;获取刷新令牌&quot;即可</p>
<h3 id="获取-sharepoint-site-id" tabindex="-1"><a class="header-anchor" href="#获取-sharepoint-site-id"><span><strong>获取 SharePoint site_id</strong></span></a></h3>
<p>如果需要挂载 SharePoint，完成上一步后，在显示刷新令牌的界面会出现一个输入站点地址，输入站点地址后点击获取 <code v-pre>site_id</code> 即可。</p>
<h3 id="添加账号" tabindex="-1"><a class="header-anchor" href="#添加账号"><span><strong>添加账号</strong></span></a></h3>
<p>将上述过程中获取得到的值依次填入即可。</p>
<h3 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id"><span><strong>根文件夹ID</strong></span></a></h3>
<p>默认为 <code v-pre>/</code>，如果需要自定义，就填路径就行，从根路径开始，和本地路径一样，比如 <code v-pre>/test</code></p>
<h4 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h4>
<Mermaid id="mermaid-72" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid><br/>
<h2 id="onedrive-分享-1" tabindex="-1"><a class="header-anchor" href="#onedrive-分享-1"><span><strong>Onedrive 分享</strong></span></a></h2>
<p><img src="/img/drivers/onedrive_app/od_share_add.png" alt="api" loading="lazy"></p>
<br/>
<h3 id="链接" tabindex="-1"><a class="header-anchor" href="#链接"><span><strong>链接</strong></span></a></h3>
<p>分享链接是这样的可以挂载，来自E3、E5、A1、A1P等</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-html"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">https://connecthkuhk-my.sharepoint.com/:f:/g/personal/jhyang13_connect_hku_hk/EsEgHtGOWbJImxop6tF15FIBIH-ihrjuDclbrbmwWfY_RA?e=s6fitN</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如果是OneDrive个人版的就不行，链接如下</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-html"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">https://onedrive.live.com/?cid=64EA5FCC7735E8C6&#x26;id=64EA5FCC7735E8C6%2117289</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><br/>
<h3 id="密码" tabindex="-1"><a class="header-anchor" href="#密码"><span><strong>密码</strong></span></a></h3>
<p>就是提取码，如果有就写，如果没有就不用写</p>
<br/>
<h4 id="默认使用的下载方式-1" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式-1"><span><strong>默认使用的下载方式</strong></span></a></h4>
<Mermaid id="mermaid-103" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFZEOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqQ90QiqPS3N3NTcFG6CsbExqgkmBRUQbaVJ6UWJBRkKmSmphgrRCrFg0WRDMJWalwLlRj+bs+bZnF1Pdi9+PqEt1srKqjg/NzU5J7G42NYW4mVbW1u7RKNooLefdWx/sW7f0yXtULNAqlxS0xTgWmBOtDQDK0gyjIaYGxrkE6urB9T4sqFTTxeXaZnJ2UAtCkp6evopRZllqUXF+sn5ubn5eXoZJbk5yuWpSSmJZbrP1057PnWpEpIeYMgSqQcAEWS3Rg=="></Mermaid></div></template>


