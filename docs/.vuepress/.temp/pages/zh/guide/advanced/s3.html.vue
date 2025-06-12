<template><div><h1 id="对象存储" tabindex="-1"><a class="header-anchor" href="#对象存储"><span>对象存储</span></a></h1>
<p>此功能是将AList映射为S3协议，可以使用 <a href="#s3-%E5%AE%A2%E6%88%B7%E7%AB%AF%E6%8E%A8%E8%8D%90-%E5%A1%AB%E5%86%99%E7%A4%BA%E4%BE%8B">S3客户端</a> 使用和查看，就像AList可以映射为WebDav一样</p>
<ul>
<li>可以是整个AList（根目录），也可以是单独某个文件夹</li>
</ul>
<h2 id="_1-使用方式" tabindex="-1"><a class="header-anchor" href="#_1-使用方式"><span><strong>1.使用方式</strong></span></a></h2>
<p>1.1 如果是第一次使用，先打开AList后台生成一下 <Badge text="访问客户端ID" type="info" /> 和 <Badge text="访问秘钥" type="info" /> 保存，然后停止AList，打开配置文件启用<code v-pre>S3</code>服务</p>
<ul>
<li>如果你后续更新访问ID和秘钥，更新保存，再重启AList才可以生效</li>
</ul>
<div style="text-align:center">
<p><img src="/img/advanced/s3/s3_config.png" alt="" loading="lazy"></p>
</div>
<p>1.2 打开 <RouteLink to="/zh/config/configuration.html#s3">配置文件</RouteLink>，将<code v-pre>enable</code>字段改成<code v-pre>true</code>启用S3服务</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "s3"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "enable"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "port"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5246</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "ssl"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.3 前两步操作完成后 启动AList，继续进入后台<code v-pre>S3</code>配置页面，选择自己想将某路径映射为对象存储存储桶</p>
<ul>
<li>
<p>左侧是对外显示的存储桶名字，右侧是AList已有的列表目录路径，如果想将整个根目录全部映射出去可以可以选择列表中的<code v-pre>root</code>路径</p>
<ul>
<li>手动填写可能会出现错误，建议使用右侧 <Badge text="选择" type="info" /> 按钮进行选择</li>
</ul>
</li>
</ul>
<p><img src="/img/advanced/s3/s3_add_backup.png" alt="" loading="lazy"></p>
<br/>
<h2 id="_2-使用说明" tabindex="-1"><a class="header-anchor" href="#_2-使用说明"><span><strong>2.使用说明</strong></span></a></h2>
<ol>
<li>将AList映射为S3服务后， <mark>所有下载链接均为本地代理进行中转</mark>，无论是否是302还是开启了代理URL链接下载</li>
<li>目前仅支持使用客户端 <code v-pre>获取列表</code>、<code v-pre>下载</code>、<code v-pre>上传</code>、<code v-pre>删除</code> 操作，其它操作暂未支持</li>
<li>目前仅支持使用<code v-pre>S3客户端</code>来进行操作，挂载到AList对象存储暂时无法使用</li>
</ol>
<h3 id="s3-客户端推荐-填写示例" tabindex="-1"><a class="header-anchor" href="#s3-客户端推荐-填写示例"><span><strong>S3 客户端推荐/填写示例</strong></span></a></h3>
<p>S3客户端 - S3 Browser：<a href="https://s3browser.com/download.aspx" target="_blank" rel="noopener noreferrer">https://s3browser.com</a></p>
<div class="vp-card-container">
  <VPCard
    title="S3 Browser - 便携版"
  	logo="/img/advanced/s3/s3_logo/s3browser.png"
  	desc=""
    link="https://s3browser.com/download/s3browser-11-6-7.zip"
    background="rgba(94, 239, 227, 0.15)"
  />
  <VPCard
    title="S3 Browser - 安装版"
  	logo="/img/advanced/s3/s3_logo/s3browser.png"
  	desc=""
    link="https://s3browser.com/download/s3browser-11-6-7.exe"
    background="rgba(55, 124, 252, 0.15)"
  />
  <VPCard
    title="S3Drive"
  	desc="支持 Android、iOS、Linux、MacOS、Desktop"
  	logo="/img/advanced/s3/s3_logo/s3drive.png"
    link="https://s3drive.app"
    background="rgba(94, 239, 227, 0.15)"
  />
  <VPCard
    title="IOS S3Drive: Cloud storage"
  	logo="/img/advanced/s3/s3_logo/s3drive.png"
  	desc="不能在Google Play下载的用云盘下载,　　　　　　　　　　不会安装xapk版本的使用低版本apk"
    link="https://www.alipan.com/s/iYzxiVnNjGw"
    background="rgba(55, 124, 252, 0.15)"
  />
</div>
<Tabs :data='[{"id":"s3browser"},{"id":"S3Drive"}]' tab-id="s3">
<template #title0="{ value, isActive }">s3browser</template>
<template #title1="{ value, isActive }">S3Drive</template>
<template #tab0="{ value, isActive }">
<p><img src="/img/advanced/s3/s3browser.png" alt="" loading="lazy"></p>
</template>
<template #tab1="{ value, isActive }">
<p><img src="/img/advanced/s3/s3drive.png" alt="" loading="lazy"></p>
</template>
</Tabs>
<p>目前就只知道这个S3客户端，如果您知道其他S3客户端，可以推荐一下然后添加。</p>
</div></template>


