<template><div><h1 id="webdav" tabindex="-1"><a class="header-anchor" href="#webdav"><span>WebDAV</span></a></h1>
<h2 id="地址" tabindex="-1"><a class="header-anchor" href="#地址"><span><strong>地址</strong></span></a></h2>
<p>WebDAV 根地址</p>
<h2 id="用户名" tabindex="-1"><a class="header-anchor" href="#用户名"><span><strong>用户名</strong></span></a></h2>
<p>用户名</p>
<h2 id="密码" tabindex="-1"><a class="header-anchor" href="#密码"><span><strong>密码</strong></span></a></h2>
<p>密码</p>
<h2 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id"><span><strong>根文件夹ID</strong></span></a></h2>
<p>要挂载的文件夹路径，与加入地址相同</p>
<h2 id="onedrive-sharepoint" tabindex="-1"><a class="header-anchor" href="#onedrive-sharepoint"><span><strong>OneDrive/SharePoint</strong></span></a></h2>
<p>选择 vendor 为 sharepoint，支持国际版/世纪互联。</p>
<p>你可以通过<a href="https://alist.nn.ci/tool/onedrive/webdav.html" target="_blank" rel="noopener noreferrer">这个工具</a>获取 WebdAV 根地址，如果要挂载指定的目录，在后面拼接即可。</p>
<p>用户名为 OneDrive 账号邮箱，密码即为 OneDrive 账号密码。</p>
<h2 id="错误提示" tabindex="-1"><a class="header-anchor" href="#错误提示"><span>错误提示</span></a></h2>
<ul>
<li>提示 <strong>failed get objs: failed to list objs: PROPFIND/根目录：403</strong> 错误</li>
</ul>
<p>需登陆 <a href="https://entra.microsoft.com/#view/Microsoft_AAD_IAM/TenantOverview.ReactView?Microsoft_AAD_IAM_legacyAADRedirect=true" target="_blank" rel="noopener noreferrer">Entra ID</a> 找到 <code v-pre>管理安全默认值</code> 点击并禁用（❗注：此项关闭后会关闭域的 Authenticator 验证）</p>
<p><img src="/img/drivers/webdav/webdav_Security.png" alt="webdav" loading="lazy"></p>
<h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-58" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFZEOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqQ90QiqPS3N3NTcFG6CsbExqgkmBRUQbaVJ6UWJBRkKmSmphgrRCrFg0WRDMJWalwLlRj+bs+bZnF1Pdi9+PqEt1srKqjg/NzU5J7G42NYW4mVbW1u7RKNooLefdWx/sW7f0yXtULNAqlxS0xTgWmBOtDQDK0gyjIaYGxrkE6urB9T4sqFTTxeXaZnJ2UAtCkp6evopRZllqUXF+sn5ubn5eXoZJbk5yuWpSSmJZbrP1057PnWpEpIeYMgSqQcAEWS3Rg=="></Mermaid></div></template>


