<template><div><h1 id="谷歌相册" tabindex="-1"><a class="header-anchor" href="#谷歌相册"><span>谷歌相册</span></a></h1>
<h2 id="根文件夹-id" tabindex="-1"><a class="header-anchor" href="#根文件夹-id"><span><strong>根文件夹 ID</strong></span></a></h2>
<p>根目录root，其他目录ID未知( <s>貌似不能挂载单独的相册</s> 已解决下面有介绍)</p>
<h2 id="获取-client-id-client-secret" tabindex="-1"><a class="header-anchor" href="#获取-client-id-client-secret"><span><strong>获取 client_id, client_secret</strong></span></a></h2>
<p>获取工具 <a href="https://alist.nn.ci/tool/google/request" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/tool/google/request</a></p>
<p>如何获取自己的  <code v-pre>client_id(客户端ID)  client_secret(客户端秘钥)</code> 去看<RouteLink to="/zh/guide/drivers/googledrive.html"><strong>谷歌网盘</strong></RouteLink>哪一篇</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>提示 此应用未经 Google 验证</p>
<p>您获得了授权，可以使用一款目前处于测试阶段的应用。除非您了解向您发出邀请的开发者，否则请勿继续。</p>
<p>我们点击左侧的<strong>继续</strong>就行</p>
<p>此选项记得勾选不然会报错，下面的注意事项当中有说明</p>
<p><img src="/img/drivers/google/Google-photos2.png" alt="Googlephotos" loading="lazy"></p>
</div>
<p>现在更加方便了，其实获取谷歌云盘的时候勾选了相册到时候获取到的token也可以拿来挂载相册~一举两得</p>
<p>记得打开 <strong><code v-pre>Photos Library API</code></strong> 哦~</p>
<ul>
<li><strong><a href="https://console.cloud.google.com/apis/library/photoslibrary.googleapis.com?project=instant-shard-350513" target="_blank" rel="noopener noreferrer">https://console.cloud.google.com/apis/library/photoslibrary.googleapis.com?project=instant-shard-350513</a></strong></li>
</ul>
<h2 id="挂载单个相册目录" tabindex="-1"><a class="header-anchor" href="#挂载单个相册目录"><span><strong>挂载单个相册目录</strong></span></a></h2>
<p>根据<a href="https://alist.nn.ci/tool/google/request" target="_blank" rel="noopener noreferrer">上面</a>获取到的<strong>客户端ID</strong>和<strong>秘钥</strong>和<strong>刷新令牌</strong></p>
<p>我们填写到 <strong><a href="https://alist.nn.ci/tool/google/album" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/tool/google/album</a></strong> 即可获取我们每个相册的单个目录ID</p>
<ul>
<li>根文件ID（就是相册ID）：默认root，展示全部，若只想展示单个相册，可以填写你想展示的相册ID</li>
<li>在我们填写后下方也会出现一个 <strong><code v-pre>access_token</code></strong> 这个也可以填写到刷新令牌里面前使用和之前获取到的，这两个都可以用 - <a href="https://github.com/alist-org/alist/discussions/3264#discussioncomment-5051171" target="_blank" rel="noopener noreferrer">解释</a></li>
</ul>
<h4 id="填写示意图" tabindex="-1"><a class="header-anchor" href="#填写示意图"><span><strong>填写示意图</strong></span></a></h4>
<p><img src="/img/drivers/google/Google-photos3.png" alt="Googlephotos" loading="lazy"></p>
<h2 id="两个注意事项" tabindex="-1"><a class="header-anchor" href="#两个注意事项"><span><strong>两个注意事项：</strong></span></a></h2>
<ol>
<li>
<p>failed get objs: failed to list objs: Request had insufficient authentication scopes.: []</p>
<ul>
<li>是因为在获取授权的时候没有勾选 相册权限（查看上面提到的图片） <code v-pre>查看和整理您的Google相册媒体库中的内容,向媒体库上传内容。</code></li>
<li>获取 <code v-pre>access_token</code>、<code v-pre>refresh_token</code> 时未声明<code v-pre>https://www.googleapis.com/auth/photoslibrary</code>的范围。</li>
</ul>
</li>
<li>
<p>failed get objs: failed to list objs: Photos Library API has not been used in project ... before or it is disabled. Enable it by visiting <a href="https://console.developers.google.com/apis/api/photoslibrary.googleapis.com/overview" target="_blank" rel="noopener noreferrer">https://console.developers.google.com/apis/api/photoslibrary.googleapis.com/overview</a> then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry.: []</p>
<ul>
<li>是因为对应的项目没有开启 <strong><code v-pre>Photos Library API</code></strong>  谷歌相册API</li>
</ul>
</li>
</ol>
<h3 id="挂载展示" tabindex="-1"><a class="header-anchor" href="#挂载展示"><span><strong>挂载展示</strong></span></a></h3>
<p><img src="/img/drivers/google/Google-photosend.png" alt="Googlephotos" loading="lazy"></p>
<h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-118" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFZEOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqQ90QiqPS3N3NTcFG6CsbExqgkmBRUQbaVJ6UWJBRkKmSmphgrRCrFg0WRDMJWalwLlRj+bs+bZnF1Pdi9+PqEt1srKqjg/NzU5J7G42NYW4mVbW1u7RKNooLefdWx/sW7f0yXtULNAqlxS0xTgWmBOtDQDK0gyjIaYGxrkE6urB9T4sqFTTxeXaZnJ2UAtCkp6evopRZllqUXF+sn5ubn5eXoZJbk5yuWpSSmJZbrP1057PnWpEpIeYMgSqQcAEWS3Rg=="></Mermaid></div></template>


