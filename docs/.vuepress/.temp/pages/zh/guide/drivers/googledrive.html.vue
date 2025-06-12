<template><div><h1 id="谷歌云盘" tabindex="-1"><a class="header-anchor" href="#谷歌云盘"><span>谷歌云盘</span></a></h1>
<p>支持团队盘（根目录ID填写团队盘的目录ID）</p>
<h3 id="获取-client-id-client-secret-refresh-token" tabindex="-1"><a class="header-anchor" href="#获取-client-id-client-secret-refresh-token"><span><strong>获取 client_id, client_secret, refresh_token</strong></span></a></h3>
<p>参考 <a href="https://alist.nn.ci/tool/google/request" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/tool/google/request</a></p>
<h3 id="根文件夹-id" tabindex="-1"><a class="header-anchor" href="#根文件夹-id"><span><strong>根文件夹 ID</strong></span></a></h3>
<p>与阿里云盘类似，官网 URL 的最后一个字符串，如：</p>
<p><img src="/img/drivers/googledrive.png" alt="google" loading="lazy"></p>
<h2 id="详细文本教程" tabindex="-1"><a class="header-anchor" href="#详细文本教程"><span><strong>详细文本教程</strong></span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">注意事项</p>
<ol>
<li>搭建Alist服务的机器首先要能连接到Google网盘(科学连接到不行,得程序能连接到)，或者直接用国外服务器才可以喔~</li>
<li>测试版的应用token似乎过阵子（7天左右）就会失效，如果需要长期稳定的token要发布应用才可以似乎？</li>
<li>一个客户端ID和秘钥只能获取一次token，再次获取只能重新创建 <strong>OAuth 客户端ID</strong>，用新的客户端ID和秘钥</li>
</ol>
</div>
<p><strong>先打开 <a href="https://alist.nn.ci/tool/google/request" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/tool/google/request</a>   <code v-pre>1. 先点击Use own client然后再创建客户端(Create client)</code></strong></p>
<p><img src="/img/drivers/google/Google-0.png" alt="Google" loading="lazy"></p>
<p><strong>如果没有登录谷歌账号,先登录谷歌账号，点击 <code v-pre>已启用的API和服务</code> 或者 <code v-pre>库</code> 二选一 都可以</strong></p>
<p><img src="/img/drivers/google/Google-1.png" alt="Google" loading="lazy"></p>
<p><strong>点击 <code v-pre>已启用的API和服务</code> 或者 <code v-pre>库</code> 进去后下拉找到 <code v-pre>Google Driver API</code></strong></p>
<p><img src="/img/drivers/google/Google-2.png" alt="Google" loading="lazy"></p>
<p>点击 <strong><code v-pre>Google Driver API</code></strong> 进去后，看下图示意图，将API服务启用</p>
<p><img src="/img/drivers/google/Google-3.png" alt="Google" loading="lazy"></p>
<p><strong><code v-pre>Google Driver API</code></strong> 启用后我们进行一个 应用创建 - 仔细看~~~</p>
<p>如果是第一次创建 那么应该会出现 <strong><code v-pre> ❗如需创建 OAuth 客户端ID,您必须先配置统一屏幕</code></strong>，我们就去配置即可,点击页面的  <strong><code v-pre>配置同意屏幕</code></strong> 即可跳转到配置界面，</p>
<p><mark>配置教程看下一张图</mark> ，配置好后再回来看这张图~</p>
<p>回调参数URL：<strong><a href="https://alist.nn.ci/tool/google/callback" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/tool/google/callback</a></strong></p>
<p><img src="/img/drivers/google/Google-4-1.png" alt="Google" loading="lazy"></p>
<p><strong><code v-pre>OAuth 同意屏幕</code></strong> 配置教程，如已配置好 忽略本图即可(如果看不清楚可以放大)</p>
<p><img src="/img/drivers/google/Google-6.png" alt="Google" loading="lazy"></p>
<p>我们创建好 <strong><code v-pre>OAuth 客户端ID</code></strong> 后点击我们刚刚创建的 <strong><code v-pre>OAuth 客户端ID</code></strong> 随便写~ 进去后有  <code v-pre>客户端ID</code>  和  <code v-pre>客户端秘钥 </code></p>
<p><img src="/img/drivers/google/Google-7.png" alt="Google" loading="lazy"></p>
<p>获取到 <code v-pre>客户端ID</code>  和  <code v-pre>客户端秘钥 </code> 后</p>
<p>我们回到最开始 <strong><a href="https://alist.nn.ci/tool/google/request" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/tool/google/request</a></strong> 把 <code v-pre>客户端ID</code>  和  <code v-pre>客户端秘钥 </code> 填进去</p>
<p><mark>获取授权时记得勾选 <strong>云盘</strong> 和 <strong>相册</strong> 后面 选项</mark></p>
<p>然后开始登录账号，若提示<strong>未经Google验证</strong>点击左侧继续就行，授权后就会看到我们的token刷新出来了</p>
<p>上述操作后我们也拿到了 <code v-pre>刷新令牌</code>我们去 <strong><code v-pre>Alist后台</code></strong> 添加账号里面进行添加吧~</p>
<p><img src="/img/drivers/google/Google-8.png" alt="Google" loading="lazy"></p>
<p>后台添加账号保存后我们就挂载成功啦~我们来看下吧</p>
<p>左侧是Alist挂载的 右侧是谷歌网盘里面的内容~ <strong>o(<em><sup>＠</sup></em>)o</strong></p>
<p><img src="/img/drivers/google/Google-13-1.png" alt="Google" loading="lazy"></p>
<details class="hint-container details"><summary>查看视频教程</summary>
<p><strong><a href="https://www.bilibili.com/video/BV18v4y1W7vo/" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV18v4y1W7vo/</a></strong></p>
</details>
<h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-129" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFZEOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqQ90QiqPS3N3NTcFG6CsbExqgkmBRUQbaVJ6UWJBRkKmSmphgrRCrFg0WRDMJWalwLlRj+bs+bZnF1Pdi9+PqEt1srKqjg/NzU5J7G42NYW4mVbW1u7RKNooLefdWx/sW7f0yXtULNAqlxS0xTgWmBOtDQDK0gyjIaYGxrkE6urB9T4sqFTTxeXaZnJ2UAtCkp6evopRZllqUXF+sn5ubn5eXoZJbk5yuWpSSmJZbrP1057PnWpEpIeYMgSqQcAEWS3Rg=="></Mermaid></div></template>


