<template><div><h1 id="对象存储" tabindex="-1"><a class="header-anchor" href="#对象存储"><span>对象存储</span></a></h1>
<p>S3 对象存储协议，如 COS、OSS、B2。</p>
<h2 id="存储桶" tabindex="-1"><a class="header-anchor" href="#存储桶"><span><strong>存储桶</strong></span></a></h2>
<p>存储桶名</p>
<h2 id="endpoint" tabindex="-1"><a class="header-anchor" href="#endpoint"><span><strong>Endpoint</strong></span></a></h2>
<p>Endpoint address（不知道可以看下方的官方文档）</p>
<h2 id="地区" tabindex="-1"><a class="header-anchor" href="#地区"><span><strong>地区</strong></span></a></h2>
<p>地区（不知道可以看下方的官方文档）</p>
<h2 id="访问密钥-id" tabindex="-1"><a class="header-anchor" href="#访问密钥-id"><span><strong>访问密钥 id</strong></span></a></h2>
<p>Access key id</p>
<h2 id="安全访问密钥" tabindex="-1"><a class="header-anchor" href="#安全访问密钥"><span><strong>安全访问密钥</strong></span></a></h2>
<p>Secret access key</p>
<h2 id="会话令牌" tabindex="-1"><a class="header-anchor" href="#会话令牌"><span><strong>会话令牌</strong></span></a></h2>
<p>会话令牌，三段式token需要使用，正常是两段式不需要填写</p>
<h2 id="自定义-host" tabindex="-1"><a class="header-anchor" href="#自定义-host"><span><strong>自定义 Host</strong></span></a></h2>
<p>自定义 CDN 加速域名</p>
<h2 id="启用自定义-host-签名" tabindex="-1"><a class="header-anchor" href="#启用自定义-host-签名"><span><strong>启用自定义 HOST 签名</strong></span></a></h2>
<p>不填写“自定义 Host”时本选项无效。<br>
关闭时：返回的URL后不接签名信息，适用于自定义Host是CDN的情况。<br>
启用时：返回的URL后接签名信息，适用于主机和对象存储服务来自同一个机房，Endpoint是机房内部访问域名，自定义Host是外部访问域名的情况。</p>
<h2 id="签名链接有效期" tabindex="-1"><a class="header-anchor" href="#签名链接有效期"><span><strong>签名链接有效期</strong></span></a></h2>
<p>签名下载地址的有效期默认为 4 小时。 如果使用自定义加速域名，该选项无效。</p>
<h2 id="占位文件名" tabindex="-1"><a class="header-anchor" href="#占位文件名"><span><strong>占位文件名</strong></span></a></h2>
<p>占位符文件的名称。</p>
<h2 id="强制路径样式" tabindex="-1"><a class="header-anchor" href="#强制路径样式"><span><strong>强制路径样式</strong></span></a></h2>
<p>是否启用 <code v-pre>ForcePathStyle</code>，通常是 minio 需要的。</p>
<h2 id="列出对象版本" tabindex="-1"><a class="header-anchor" href="#列出对象版本"><span><strong>列出对象版本</strong></span></a></h2>
<p>参见 S3 的 SDK 文档。</p>
<h2 id="移除bucket" tabindex="-1"><a class="header-anchor" href="#移除bucket"><span><strong>移除bucket</strong></span></a></h2>
<p>使用自定义主机时从路径中删除bucket名称。</p>
<h2 id="添加filename到disposition" tabindex="-1"><a class="header-anchor" href="#添加filename到disposition"><span><strong>添加filename到disposition</strong></span></a></h2>
<p>添加filename到Content-Disposition头中。</p>
<h2 id="添加对象存储示例及官方文档" tabindex="-1"><a class="header-anchor" href="#添加对象存储示例及官方文档"><span><strong>添加对象存储示例及官方文档</strong></span></a></h2>
<p><code v-pre>对象存储</code>包含但不限于只有这些，还有很多例如微软谷歌没有添加，这里没有示例是因为注册开通困难无法提供示例教程，如果您有帐号欢迎联系提供帐号我来添加</p>
<Tabs :data='[{"id":"阿里云"},{"id":"腾讯云"},{"id":"火山引擎"},{"id":"天翼云"},{"id":"百度云"},{"id":"七牛云"},{"id":"华为云"},{"id":"京东云"},{"id":"多吉云"},{"id":"移动云"},{"id":"又拍云"},{"id":"亚马逊"},{"id":"R2"},{"id":"B2"},{"id":"Scaleway"},{"id":"Mini-io"},{"id":"Google Cloud"}]' tab-id="S3">
<template #title0="{ value, isActive }">阿里云</template>
<template #title1="{ value, isActive }">腾讯云</template>
<template #title2="{ value, isActive }">火山引擎</template>
<template #title3="{ value, isActive }">天翼云</template>
<template #title4="{ value, isActive }">百度云</template>
<template #title5="{ value, isActive }">七牛云</template>
<template #title6="{ value, isActive }">华为云</template>
<template #title7="{ value, isActive }">京东云</template>
<template #title8="{ value, isActive }">多吉云</template>
<template #title9="{ value, isActive }">移动云</template>
<template #title10="{ value, isActive }">又拍云</template>
<template #title11="{ value, isActive }">亚马逊</template>
<template #title12="{ value, isActive }">R2</template>
<template #title13="{ value, isActive }">B2</template>
<template #title14="{ value, isActive }">Scaleway</template>
<template #title15="{ value, isActive }">Mini-io</template>
<template #title16="{ value, isActive }">Google Cloud</template>
<template #tab0="{ value, isActive }">
<p><a href="https://oss.console.aliyun.com/" target="_blank" rel="noopener noreferrer"><strong>阿里云OSS官网</strong></a></p>
<p><a href="https://help.aliyun.com/document_detail/31837.html" target="_blank" rel="noopener noreferrer"><strong>公共云下OSS各地域Endpoint对照表</strong></a></p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>Alist挂载<strong>阿里云盘</strong>需要跳过 <code v-pre>referer</code> ，若你在防盗链开启不允许 <code v-pre>referer</code> 为空的话会无法使用，因为阿里云盘用的就是阿里云OSS（北京地区的）</p>
<p>其实 <code v-pre>地区|Region</code> 选项写 <code v-pre>Endpoint</code> 一样的也可以用，但是为了规范还是照着对照表写吧。</p>
</div>
<p>填写示例：</p>
<p><img src="/img/drivers/s3/al.png" alt="s3" loading="lazy"></p>
<p></p>
</template>
<template #tab1="{ value, isActive }">
<p><a href="https://console.cloud.tencent.com/cos" target="_blank" rel="noopener noreferrer"><strong>腾讯云COS官网</strong></a></p>
<p><a href="https://cloud.tencent.com/document/product/436/6224" target="_blank" rel="noopener noreferrer"><strong>公共云下COS各地域Endpoint对照表</strong></a></p>
<p>填写示例：</p>
<p><img src="/img/drivers/s3/tx.png" alt="s3" loading="lazy"></p>
</template>
<template #tab2="{ value, isActive }">
<p><a href="https://console.volcengine.com/tos" target="_blank" rel="noopener noreferrer"><strong>火山引擎TOS官网</strong></a></p>
<p><a href="https://www.volcengine.com/docs/6349/107356" target="_blank" rel="noopener noreferrer"><strong>公共云下TOS各地域Endpoint对照表</strong></a></p>
<p>填写示例：</p>
<p><img src="/img/drivers/s3/zijie_tos.png" alt="s3" loading="lazy"></p>
<p></p>
</template>
<template #tab3="{ value, isActive }">
<p><a href="https://oos-cn.ctyun.cn/oos/ctyun/consoleBucket.html" target="_blank" rel="noopener noreferrer"><strong>天翼云OOS官网</strong></a></p>
<p><a href="https://www.ctyun.cn/document/10026693/10027878" target="_blank" rel="noopener noreferrer"><strong>公共云下OOS各地域Endpoint对照表</strong></a></p>
<p>填写示例：</p>
<p><img src="/img/drivers/s3/ty.png" alt="s3" loading="lazy"></p>
<p></p>
</template>
<template #tab4="{ value, isActive }">
<p><a href="https://console.bce.baidu.com/bos" target="_blank" rel="noopener noreferrer"><strong>百度云BOS官网</strong></a></p>
<p><a href="https://cloud.baidu.com/doc/BOS/s/Bk6kqu8eq#%E8%AE%BE%E7%BD%AEreferer%E7%99%BD%E5%90%8D%E5%8D%95" target="_blank" rel="noopener noreferrer"><strong>自行配置Bucket的Referer白名单权限</strong></a></p>
<p><a href="https://cloud.baidu.com/doc/BOS/s/akrqd2wcx" target="_blank" rel="noopener noreferrer"><strong>公共云下BOS各地域Region和Endpoint对照表</strong></a></p>
<p><strong>兼容AWS S3的Endpoint对照表</strong><a href="https://cloud.baidu.com/doc/BOS/s/xjwvyq9l4" target="_blank" rel="noopener noreferrer"><strong>点击查看具体</strong></a></p>
<p>填写示例：</p>
<p><img src="/img/drivers/s3/bd.png" alt="s3" loading="lazy"></p>
<p></p>
</template>
<template #tab5="{ value, isActive }">
<p><a href="https://portal.qiniu.com/kodo/bucket" target="_blank" rel="noopener noreferrer"><strong>七牛云Kodo官网</strong></a></p>
<p><a href="https://developer.qiniu.com/kodo/4088/s3-access-domainname" target="_blank" rel="noopener noreferrer"><strong>公共云下Kodo各地域Region和Endpoint对照表</strong></a></p>
<p>填写示例：</p>
<p><img src="/img/drivers/s3/qn.png" alt="s3" loading="lazy"></p>
<p></p>
</template>
<template #tab6="{ value, isActive }">
<p><a href="https://console.huaweicloud.com/console/#/obs/manager/buckets" target="_blank" rel="noopener noreferrer"><strong>华为云OBS官网</strong></a></p>
<p><a href="https://developer.huaweicloud.com/endpoint?OBS" target="_blank" rel="noopener noreferrer"><strong>公共云下OBS各地域Region和Endpoint对照表自行查看</strong></a>对应的</p>
<p>秘钥AK/SK<a href="https://console.huaweicloud.com/iam/?region=cn-north-4&amp;locale=zh-cn#/mine/accessKey" target="_blank" rel="noopener noreferrer">获取</a>自行设置</p>
<p>填写示例：</p>
<p><img src="/img/drivers/s3/hw.png" alt="s3" loading="lazy"></p>
</template>
<template #tab7="{ value, isActive }">
<p><a href="https://www.jdcloud.com/cn/products/object-storage-service" target="_blank" rel="noopener noreferrer"><strong>京东云OSS官网</strong></a></p>
<p>优点：<a href="https://www.jdcloud.com/cn/activity/oss" target="_blank" rel="noopener noreferrer">免费10G</a>，支持IPV6<br>
缺点：需要预充值100元才能开通，不推荐尝试，但是预存开通对象存储后提现依旧可以用。</p>
<p><a href="https://docs.jdcloud.com/cn/object-storage-service/oss-endpont-list" target="_blank" rel="noopener noreferrer"><strong>公共云下OSS各地域Region和Endpoint对照表</strong></a></p>
<p>填写示例：</p>
<p><img src="/img/drivers/s3/jd.png" alt="s3" loading="lazy"></p>
</template>
<template #tab8="{ value, isActive }">
<p><a href="https://www.dogecloud.com/product/oss" target="_blank" rel="noopener noreferrer"><strong>多吉云OSS官网</strong></a>，如果要添加多吉云，请使用单独的<code v-pre>多吉云</code>驱动添加，请勿使用<code v-pre>对象存储</code>驱动</p>
<p>地区代码：</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 0: 上海（华东），1: 北京（华北），2: 广州（华南），3: 成都（西南）</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="/img/drivers/s3/doge.png" alt="s3" loading="lazy"></p>
</template>
<template #tab9="{ value, isActive }">
<p><a href="https://console.ecloud.10086.cn/api/page/eos-console-web/CIDC-RP-00/eos/bucket?productType=os&amp;v=new" target="_blank" rel="noopener noreferrer"><strong>移动云EOS官网</strong></a></p>
<p>需要预充值100元才能开通，不推荐用。</p>
<p><a href="https://ecloud.10086.cn/op-help-center/doc/article/48082" target="_blank" rel="noopener noreferrer"><strong>公共云下OSS各地域Region和Endpoint对照表</strong></a></p>
<p>填写示例：</p>
<p><img src="/img/drivers/s3/139.png" alt="s3" loading="lazy"></p>
<p></p>
</template>
<template #tab10="{ value, isActive }">
<p><a href="https://console.upyun.com/services/file/" target="_blank" rel="noopener noreferrer"><strong>又拍云USS官网</strong></a>：<RouteLink to="/zh/guide/drivers/uss.html">点击这里进行配置USS</RouteLink></p>
</template>
<template #tab11="{ value, isActive }">
<p><a href="https://s3.console.aws.amazon.com/s3/" target="_blank" rel="noopener noreferrer"><strong>亚马逊S3官网</strong></a></p>
<p>端点 URL 包含存储桶所在的区域名称</p>
<p>例<sup>1</sup>，如果您的存储桶位于美国东部（俄亥俄）区域</p>
<blockquote>
<p>则 Endpoint (终端节点) URL 的格式为  <strong><code v-pre>s3.us-east-2.amazonaws.com/your-bucket-name</code></strong></p>
<p>Region (地区)参数：<strong><code v-pre>us-east-2</code></strong></p>
<p>存储桶名称：<strong><code v-pre>your-bucket-name</code></strong>（你自己的存储桶名称）</p>
</blockquote>
<p>例<sup>2</sup>，我的的存储桶是<code v-pre>东京</code>的，存储桶名字叫 <code v-pre>cdn-aw</code>，那么完整的参数填写就是如下</p>
<blockquote>
<ol>
<li><strong>Endpoint</strong> ：<a href="http://s3.ap-northeast-1.amazonaws.com" target="_blank" rel="noopener noreferrer">s3.ap-northeast-1.amazonaws.com</a></li>
<li><strong>地区</strong>：ap-northeast-1</li>
<li><strong>存储桶名称</strong>：cdn-aw</li>
</ol>
</blockquote>
<p>下面我们看一下完整的参数填写示例吧</p>
<p>填写示例</p>
<p><img src="/img/drivers/s3/aws.png" alt="s3" loading="lazy"></p>
</template>
<template #tab12="{ value, isActive }">
<p><a href="https://dash.cloudflare.com/" target="_blank" rel="noopener noreferrer"><strong>cloudflare R2官网</strong></a></p>
<p><strong>Endpoint</strong> ：S3 端点可通过 <strong><code v-pre>https://&lt;ACCOUNT_ID&gt;.r2.cloudflarestorage.com</code></strong> 端点使用</p>
<p><strong><code v-pre>ACCOUNT_ID</code></strong> 就是你的账号ID，随处可见例如顶部地址栏链接后面的ID就是你账号ID</p>
<p>填写示例：</p>
<p><img src="/img/drivers/s3/cfr2.png" alt="s3" loading="lazy"></p>
</template>
<template #tab13="{ value, isActive }">
<p><a href="https://secure.backblaze.com/b2_buckets.htm" target="_blank" rel="noopener noreferrer"><strong>B2官网</strong></a></p>
<p>国外的，全称 <strong><code v-pre>Backblaze</code></strong>，不需要验证信息，说是前10G免费。</p>
<p>填写示例：</p>
<p><img src="/img/drivers/s3/b2.png" alt="s3" loading="lazy"></p>
</template>
<template #tab14="{ value, isActive }">
<p><a href="https://console.scaleway.com/object-storage/buckets" target="_blank" rel="noopener noreferrer"><strong>scaleway官网</strong></a></p>
<p>国外的，需要卡验证信息</p>
<p><a href="https://www.scaleway.com/en/docs/storage/object/concepts/#object-storage" target="_blank" rel="noopener noreferrer"><strong>公共云下Scaleway各地域Region和Endpoint对照表</strong></a></p>
<p>填写示例：</p>
<p><img src="/img/drivers/s3/sc.png" alt="s3" loading="lazy"></p>
</template>
<template #tab15="{ value, isActive }">
<p>使用<code v-pre>Minio</code>自建对象存储的应该都知道，ID和秘钥如何获取，这里就不说了</p>
<p>只需要填写存储桶名称，访问秘钥ID，安全访问秘钥，Endpoint 这四个选项，地区空着即可</p>
<p><strong>Endpoint：http(s)://《YOUR_IP/URL》:9001/</strong>，可以使用IP也可以使用域名</p>
<p>最后记得打开 <strong><code v-pre>强制路径样式</code></strong> 才能使用，否则无法使用<a href="https://github.com/alist-org/alist/discussions/4920#discussioncomment-6635452" target="_blank" rel="noopener noreferrer">点击查看详情</a></p>
<p>填写示例：</p>
<p><img src="/img/drivers/s3/mini-io.png" alt="s3" loading="lazy"></p>
</template>
<template #tab16="{ value, isActive }">
<p>默认你已经有Google Cloud的账号了，那么我们直接进入 Google Cloud Storage的设置页面，这个<a href="https://console.cloud.google.com/storage/settings;tab=interoperability" target="_blank" rel="noopener noreferrer">链接直达</a></p>
<p>然后会进入下面这个页面</p>
<p><img src="/img/drivers/s3/googleStorage1.png" alt="Google Cloud" loading="lazy"></p>
<p>在这个页面我们可以很明显的看到 Endpoint 和 Access Key，我这里因为已经创建的有一个AK/SK了，如果你没有，直接点下面的创建即可，点了创建，会提示你执行账户，我这因为账号问题，有两个，正常情况下只有一个，你选了账户后，点创建</p>
<p><img src="/img/drivers/s3/googleStorage2.png" alt="Google Cloud" loading="lazy"></p>
<p>然后就会出现Access Key/Secret 了，它俩分别对应Alist的 访问密钥 Id 和 安全访问密钥，这个只显示一次，一定要复制并保存到本地</p>
<p><img src="/img/drivers/s3/googleStorage3.png" alt="Google Cloud" loading="lazy"></p>
<p>到这里，Alist所需要的 EndPoint 、访问密钥 Id、安全访问密钥 就获取到了，剩余的 存储桶和地区，请在存储桶里面查看</p>
<p><img src="/img/drivers/s3/googleStorage4.png" alt="Google Cloud" loading="lazy"></p>
</template>
</Tabs>
<br/>
<h3 id="内网接入" tabindex="-1"><a class="header-anchor" href="#内网接入"><span><strong>内网接入</strong> <Badge text="≥ 3.42.0" type="info" vertical="middle" /></span></a></h3>
<p>服务器和对象存储需要同一地域，目前仅支持<code v-pre>阿里云OSS</code></p>
<ul>
<li>
<p>例如你是<code v-pre>阿里云杭州服务器</code> 和 <code v-pre>杭州地区的对象存储</code> 就可以使用</p>
</li>
<li>
<p><a href="https://github.com/AlistGo/alist/pull/7699" target="_blank" rel="noopener noreferrer">https://github.com/AlistGo/alist/pull/7699</a></p>
</li>
</ul>
<br/>
<h3 id="出现和文件夹同名文件如何解决" tabindex="-1"><a class="header-anchor" href="#出现和文件夹同名文件如何解决"><span><strong>出现和文件夹同名文件如何解决</strong></span></a></h3>
<p>挂载对象存储后打开文件夹后总是会出现一个和文件夹名一样的文件无法删除也无法打开</p>
<ul>
<li>解决办法把配置里面的 <code v-pre>列出对象版本</code> 换成V2就可以，参考如下图所示</li>
</ul>
<p><img src="/img/drivers/s3/v1andv2.png" alt="" loading="lazy"></p>
<br/>
<h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-472" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></div></template>


