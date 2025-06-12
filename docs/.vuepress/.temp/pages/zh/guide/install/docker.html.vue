<template><div><h1 id="使用-docker" tabindex="-1"><a class="header-anchor" href="#使用-docker"><span>使用 Docker</span></a></h1>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span><strong>安装</strong></span></a></h2>
<h4 id="docker-cli" tabindex="-1"><a class="header-anchor" href="#docker-cli"><span><strong>docker cli</strong></span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --restart=unless-stopped</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/alist:/opt/alist/data</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 5244:5244</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> PUID=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> PGID=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> UMASK=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">022</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"alist"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> alist666/alist:latest</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose"><span><strong>docker compose</strong></span></a></h4>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'3.3'</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">services</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  alist</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'alist666/alist:beta'</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    container_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">alist</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    volumes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'/etc/alist:/opt/alist/data'</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    ports</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'5244:5244'</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    environment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">PUID=0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">PGID=0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">UMASK=022</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    restart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">unless-stopped</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量"><span><strong>环境变量</strong></span></a></h4>
<table>
<thead>
<tr>
<th style="text-align:left">名称</th>
<th style="text-align:left">默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>PUID</code></td>
<td style="text-align:left"><code v-pre>0</code></td>
<td>运行身份 UID</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>PGID</code></td>
<td style="text-align:left"><code v-pre>0</code></td>
<td>运行身份 GID</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>UMASK</code></td>
<td style="text-align:left"><code v-pre>022</code></td>
<td><a href="https://en.wikipedia.org/wiki/Umask" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/Umask</a></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>RUN_ARIA2</code></td>
<td style="text-align:left"></td>
<td>是否同时运行 ARIA2，当镜像含有 aria2 环境时默认为 <code v-pre>true</code>，否则为 <code v-pre>false</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>TZ</code></td>
<td style="text-align:left"></td>
<td>默认为 UTC 时区，如果你想指定时区，则可以设置此变量，例如：<code v-pre>Asia/Shanghai</code></td>
</tr>
</tbody>
</table>
<h4 id="镜像版本" tabindex="-1"><a class="header-anchor" href="#镜像版本"><span><strong>镜像版本</strong></span></a></h4>
<p>稳定版：<code v-pre>alist666/alist:latest</code> 或指定本版，如 <code v-pre>alist666/alist:v3.41.0</code> <code v-pre>alist666/alist:v3.40.0</code></p>
<p>最新镜像版本，请参阅 <a href="https://hub.docker.com/r/alist666/alist/tags" target="_blank" rel="noopener noreferrer">https://hub.docker.com/r/alist666/alist/tags</a></p>
<p>开发版：<code v-pre>alist666/alist:beta</code></p>
<p>预装环境镜像后缀:</p>
<table>
<thead>
<tr>
<th style="text-align:left">后缀</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>aio</code></td>
<td>同时包含下列所有预装环境的镜像</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ffmpeg</code></td>
<td>预装 ffmpeg 的镜像，用于本地存储缩略图</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>aria2</code></td>
<td>预装 aria2 的镜像，用于离线下载</td>
</tr>
</tbody>
</table>
<p>你可以在上述任意镜像标签后面，使用 <code v-pre>-</code> 符号附加后缀以切换到附带环境的镜像。如 <code v-pre>alist666/alist:latest-aio</code> <code v-pre>alist666/alist:beta-aria2</code> <code v-pre>alist666/alist:v3.40.0-ffmpeg</code></p>
<p>如果使用预装 ffmpeg 镜像缩略图功能仍无法使用，请确认:</p>
<ul>
<li>使用的是本地存储</li>
<li>切换到网格视图</li>
<li>本地存储的缩略图开关开启</li>
<li>本地存储的缩略图缓存文件夹配置路径正确，例如 <code v-pre>data/thumbnail</code></li>
</ul>
<p>当使用预装 aria2 镜像时，可能会在 alist 的日志中看到类似错误：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>ERRO[2022-11-20 12:05:19] error [unaligned 64-bit atomic operation] while run task  [download http://xxx.com/xxx.png to [/ftp](/)]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>解决方法是，如果是 CPU 架构是 64 位，可以尝试手动拉取 64 位镜像或重新构建容器。 如果是 CPU 架构是 32 位，目前尚无可用方案。</p>
<h2 id="查看管理员信息" tabindex="-1"><a class="header-anchor" href="#查看管理员信息"><span><strong>查看管理员信息：</strong></span></a></h2>
<h4 id="低于v3-25-0版本" tabindex="-1"><a class="header-anchor" href="#低于v3-25-0版本"><span><strong>低于v3.25.0版本</strong></span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> exec</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -it</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> alist</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ./alist</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> admin</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="高于v3-25-0版本" tabindex="-1"><a class="header-anchor" href="#高于v3-25-0版本"><span><strong>高于v3.25.0版本</strong></span></a></h4>
<p>3.25.0以上版本将密码改成加密方式存储的hash值，无法直接反算出密码，如果忘记了密码只能通过重新 <strong><code v-pre>随机生成</code></strong> 或者 <strong><code v-pre>手动设置</code></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 随机生成一个密码</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> exec</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -it</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> alist</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ./alist</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> admin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> random</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 手动设置一个密码,`NEW_PASSWORD`是指你需要设置的密码</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> exec</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -it</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> alist</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ./alist</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> admin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> NEW_PASSWORD</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新" tabindex="-1"><a class="header-anchor" href="#更新"><span><strong>更新</strong></span></a></h2>
<details class="hint-container details"><summary>docker-cli 更新</summary>
<ol>
<li>
<p>docker ps -a #查看容器(找Alist容器的ID)</p>
</li>
<li>
<p>docker stop ID #停止Alist运行,不然无法删除(这次Alist容器的ID是d429749a6e69，每一次安装都不一样自己看)</p>
</li>
<li>
<p>docker rm ID #删除Alist容器(数据还在只要你不手动删除)</p>
</li>
<li>
<p>docker pull alist666/alist:latest</p>
</li>
<li>
<p><a href="#docker-cli">输入安装命令点击查看</a></p>
</li>
<li>
<p>更新好了 去看看吧..就这么简单</p>
</li>
</ol>
<p><strong>图片中丢了一步，是教程中的第四步....记得执行</strong><br>
<img src="/img/faq/updocker.png" alt="docker" loading="lazy"></p>
</details>
<details class="hint-container details"><summary>docker-compose 更新</summary>
<ol>
<li>docker-compose pull</li>
<li>docker-compose up -d</li>
</ol>
</details>
<p>Q：我的版本是v3.x.x 怎么也升级不到最新版 <code v-pre>docker pull alist666/alist:latest</code>拉取最新不行 改成docker-compose安装还是3.x.x版本</p>
<p>A：原因是你的docker设置了镜像，从镜像更新不到最新版本，改一下/etc/docker/daemon.json，删除&quot;registry-mirrors&quot;: [&quot;镜像加速器地址&quot;]</p>
<ul>
<li>删除若不行，可以考虑更换一个<code v-pre>镜像加速地址</code></li>
<li>或者简单粗暴：下载时将<code v-pre>alist666/alist:latest</code> 替换为<code v-pre>alist666/alist:v3.16.3</code>（指定版本，写教程时最新的是3.16.3）</li>
</ul>
<h3 id="编译镜像" tabindex="-1"><a class="header-anchor" href="#编译镜像"><span><strong>编译镜像</strong></span></a></h3>
<p>安装 docker，克隆仓库后进入仓库根目录，无需其他准备</p>
<Tabs :data='[{"id":"basic"},{"id":"build-arg"}]' tab-id="Docker-build">
<template #title0="{ value, isActive }">basic</template>
<template #title1="{ value, isActive }">build-arg</template>
<template #tab0="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> build</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> alist666/alist:latest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> .</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> build</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> alist666/alist:latest-ffmpeg</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --build-arg</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> INSTALL_FFMPEG=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> .</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</Tabs>
<p>可用 build args：</p>
<table>
<thead>
<tr>
<th style="text-align:left"></th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>INSTALL_FFMPEG=true</code></td>
<td>安装 ffmpeg</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>INSTALL_ARIA2=true</code></td>
<td>安装 aria2</td>
</tr>
</tbody>
</table>
</div></template>


