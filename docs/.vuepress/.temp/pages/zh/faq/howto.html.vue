<template><div><h3 id="如何为文件-文件夹添加密码" tabindex="-1"><a class="header-anchor" href="#如何为文件-文件夹添加密码"><span><strong>如何为文件/文件夹添加密码？</strong></span></a></h3>
<p>添加<RouteLink to="/zh/guide/advanced/meta.html">元信息</RouteLink></p>
<h3 id="如何对子目录进行反向代理" tabindex="-1"><a class="header-anchor" href="#如何对子目录进行反向代理"><span><strong>如何对子目录进行反向代理？</strong></span></a></h3>
<p>使用 nginx 反向代理到 <a href="https://nn.ci/alist" target="_blank" rel="noopener noreferrer">https://nn.ci/alist</a> 的示例：</p>
<ul>
<li>正常安装</li>
<li>将 <RouteLink to="/zh/config/configuration.html#site_url">site_url</RouteLink> 设置为 <code v-pre>https://nn.ci/alist</code> 或者仅<code v-pre>/alist</code>, 然后重启alist</li>
<li>在 nginx 中添加反向代理配置</li>
</ul>
<div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-nginx"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /alist/ {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    proxy_set_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">X-Forwarded-For $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">proxy_add_x_forwarded_for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    proxy_set_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">X-Forwarded-Proto $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">scheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    proxy_set_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Host $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">http_host</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    proxy_set_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">X-Real-IP $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">remote_addr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    proxy_set_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Range $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">http_range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">	  proxy_set_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">If-Range $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">http_if_range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    proxy_redirect </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">off</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    proxy_pass </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">http://127.0.0.1:5244/alist/;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # the max size of file to upload</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    client_max_body_size </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">20000m</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="忘记密码怎么办" tabindex="-1"><a class="header-anchor" href="#忘记密码怎么办"><span><strong>忘记密码怎么办？</strong></span></a></h3>
<p>如果您是站点的所有者，您可以通过在终端中运行 <code v-pre>./alist admin</code> 来获取管理员账号信息。</p>
<p>否则，您可以要求站点所有者重置密码。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果你使用v3.9.0及以上版本，你需要先停止alist服务因为这个pr: <a href="https://github.com/alist-org/alist/pull/3074" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/pull/3074</a></p>
</div>
<h4 id="低于v3-25-0版本" tabindex="-1"><a class="header-anchor" href="#低于v3-25-0版本"><span><strong>低于v3.25.0版本</strong></span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./alist</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> admin</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="高于v3-25-0版本" tabindex="-1"><a class="header-anchor" href="#高于v3-25-0版本"><span><strong>高于v3.25.0版本</strong></span></a></h4>
<p>3.25.0以上版本将密码改成加密方式存储的hash值，无法直接反算出密码，如果忘记了密码只能通过重新 <strong><code v-pre>随机生成</code></strong> 或者 <strong><code v-pre>手动设置</code></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 随机生成一个密码</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./alist</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> admin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> random</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 手动设置一个密码,`NEW_PASSWORD`是指你需要设置的密码</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./alist</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> admin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> NEW_PASSWORD</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何修改监听端口-​" tabindex="-1"><a class="header-anchor" href="#如何修改监听端口-​"><span><strong>如何修改监听端口 ​</strong></span></a></h3>
<p>参考<RouteLink to="/zh/config/configuration.html#port">config</RouteLink></p>
<h3 id="如何更新" tabindex="-1"><a class="header-anchor" href="#如何更新"><span><strong>如何更新</strong></span></a></h3>
<p>除了 changelog 中标注的不兼容版本，通常可以直接替换二进制文件进行更新。</p>
<p>对于 docker 用户，只需删除旧的容器并拉取新的docker image，然后运行它即可。</p>
<h3 id="如何允许访客上传文件" tabindex="-1"><a class="header-anchor" href="#如何允许访客上传文件"><span><strong>如何允许访客上传文件</strong></span></a></h3>
<p>添加<RouteLink to="/zh/guide/advanced/meta.html">元信息</RouteLink>，并启用&quot;写入&quot;</p>
<h3 id="如何去掉底部的-由-alist-驱动-​" tabindex="-1"><a class="header-anchor" href="#如何去掉底部的-由-alist-驱动-​"><span><strong>如何去掉底部的&quot;由 AList 驱动&quot;？​</strong></span></a></h3>
<p>根据我们的开源许可:<br>
此最强copyleft许可的权限以在同一许可下提供许可作品和修改的完整源代码为条件，其中包括使用许可作品的较大作品。<strong>版权和许可声明必须保留</strong> 贡献者明确授予专利权。当使用修改后的版本通过网络提供服务时，必须提供修改后版本的完整源代码。</p>
<h3 id="添加-189-云存储时-设备-id-不存在-需要二次设备验证-​" tabindex="-1"><a class="header-anchor" href="#添加-189-云存储时-设备-id-不存在-需要二次设备验证-​"><span><strong>添加 189 云存储时：设备 ID 不存在，需要二次设备验证 ​</strong></span></a></h3>
<p>可能是触发了风控。更改密码后，再次添加即可。</p>
<h3 id="添加-天翼云盘客户端-存储时-提示-need-img-validate-code-验证码" tabindex="-1"><a class="header-anchor" href="#添加-天翼云盘客户端-存储时-提示-need-img-validate-code-验证码"><span><strong>添加 天翼云盘客户端 存储时：提示 need img validate code: 验证码</strong></span></a></h3>
<ul>
<li>点击编辑，把刚刚看到的验证码写进配置里面点击保存</li>
<li>点击编辑，把不使用OCR 按钮打开 <sup>(荐)</sup></li>
<li>或者自己进行搭建<RouteLink to="/zh/config/global.html#ocr-api"><strong>Ocr接口</strong></RouteLink></li>
<li><strong>天翼云盘</strong>驱动因Web端登录已更换为滑动验证码，<strong>不再支持ocr与手动输入</strong>，若需要验证码请使用添加<code v-pre>Cookie进行登录</code>或使用<code v-pre>天翼云盘客户端</code>驱动(<sup>注意看是天翼云盘驱动不是天翼云盘客户端</sup>)</li>
</ul>
<h3 id="tls-handshake-timeout-read-connection-reset-by-peer-dns-lookup-failed-connect-connection-refused-client-timeout-exceeded-while-awaiting-headers-no-such-host" tabindex="-1"><a class="header-anchor" href="#tls-handshake-timeout-read-connection-reset-by-peer-dns-lookup-failed-connect-connection-refused-client-timeout-exceeded-while-awaiting-headers-no-such-host"><span><strong>TLS handshake timeout? / read: connection reset by peer? / dns lookup failed? / connect: connection refused / Client.Timeout exceeded while awaiting headers?  / no such host?</strong></span></a></h3>
<p>诸如此类的网络问题，请自行排查解决。不要为此提出任何的issue</p>
<h3 id="怎么添加epub阅读" tabindex="-1"><a class="header-anchor" href="#怎么添加epub阅读"><span><strong>怎么添加epub阅读</strong></span></a></h3>
<p>后台 ——&gt;设置——&gt;预览——&gt;Iframe 预览，写在PDF后面</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-html"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/*下面的这个逗号也是哦，这个注释就不要复制了，从第二行开始复制*/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  "epub": {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    "EPUB.js":"/static/epub.js/viewer.html?url=$e_url"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.7.x 版本及更高的版本已经支持  &quot;.epub&quot; 阅读<br>
但是需要自己手动添加(因为已经创建过数据库了 不好给你覆盖会出错)<br>
如果是第一次安装启动（3.7.x版本及更高的版本）不用手动添加<br>
如果设置了二级目录反代，请在<RouteLink to="/zh/config/configuration.html#site-url">site_url</RouteLink>中自行添加相应前缀，然后重启AList才会生效</p>
<h3 id="如何快速定位bug" tabindex="-1"><a class="header-anchor" href="#如何快速定位bug"><span><strong>如何快速定位Bug</strong></span></a></h3>
<p>如果发现Bug，但是<code v-pre>log.log</code>的日志不详细，可以尝试在 启动时候添加 <code v-pre>--debug</code> 参数启动</p>
<p>建议在使用<code v-pre>--debug</code> 参数启动之前将 <strong>AList目录下的日志文件<code v-pre>/log/log.log</code> 清空</strong>，这样方便开发者们后续快速定位问题</p>
<div class="hint-container caution">
<p class="hint-container-title">警告</p>
<p>使用<code v-pre>--debug</code>参数启动时，会有一些敏感数据 例如 <strong><code v-pre>账号密码，刷新令牌</code></strong> 等，所以如果在你发给别人之前需要先处理一下脱敏</p>
</div>
<ul>
<li><strong>Windows</strong>：<code v-pre>alist.exe server --debug</code></li>
<li><strong>Linux</strong>：<code v-pre>./alist server --debug</code></li>
<li><strong>Mac</strong>：暂时未知，可能也是可以加 <code v-pre>--debug</code> 参数启动</li>
<li><strong>Docker</strong>：<code v-pre>docker exec -it alist ./alist server --debug</code></li>
</ul>
<p>启动后拿到相关日志，如何停止?  <code v-pre>Ctrl+c</code> 可以使程序停止运行（或者简单粗暴直接关闭程序）</p>
</div></template>


