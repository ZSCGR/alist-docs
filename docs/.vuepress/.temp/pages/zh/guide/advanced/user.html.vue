<template><div><h1 id="用户" tabindex="-1"><a class="header-anchor" href="#用户"><span>用户</span></a></h1>
<h2 id="用户名" tabindex="-1"><a class="header-anchor" href="#用户名"><span><strong>用户名</strong></span></a></h2>
<p>登录用户名</p>
<h2 id="密码" tabindex="-1"><a class="header-anchor" href="#密码"><span><strong>密码</strong></span></a></h2>
<p>登录密码</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>密码对游客是无效的，</p>
<p>如果连续输入6次密码错误会对当前IP封禁30分钟无法输入账号密码登录，但是不会影响其它IP，只针对输入6次密码错误的IP</p>
<ul>
<li>重启可立刻消除30分钟封禁时间</li>
</ul>
</div>
<br/>
<h2 id="基本路径" tabindex="-1"><a class="header-anchor" href="#基本路径"><span><strong>基本路径</strong></span></a></h2>
<p>用户登录时看到的根路径</p>
<hr>
<p>Q：<strong>如何否允许一个用户可以看到多个文件夹路径?</strong></p>
<p>A：可以新建一个<RouteLink to="/zh/guide/advanced/alias.html">别名</RouteLink>存储,将你需要给用户展示的路径都添加到别名，然后在用户路径这里指向新建的别名存储</p>
<br/>
<h2 id="权限" tabindex="-1"><a class="header-anchor" href="#权限"><span><strong>权限</strong></span></a></h2>
<ul>
<li>
<p>可以看到隐藏：可以看到隐藏的文件和文件夹</p>
</li>
<li>
<p>无密码访问：无需密码即可访问</p>
</li>
<li>
<p>添加离线下载任务：添加离线下载任务</p>
</li>
<li>
<p>创建目录或上传：可以创建目录或上传文件</p>
</li>
<li>
<p>重命名：可以重命名文件和文件夹</p>
</li>
<li>
<p>移动：可以移动文件和文件夹</p>
</li>
<li>
<p>复制：可以复制文件和文件夹</p>
</li>
<li>
<p>删除：可以删除文件和文件夹</p>
</li>
<li>
<p>WebDAV 读取：可以使用 WebDAV 读取文件和文件夹</p>
</li>
<li>
<p>WebDAV 管理：可以使用 WebDAV 管理文件和文件夹</p>
</li>
<li>
<p>FTP 读取：可以使用 FTP 读取文件和文件夹</p>
</li>
<li>
<p>FTP 管理：可以使用 FTP 读取文件和文件夹</p>
</li>
<li>
<p>读取压缩文件：读取压缩包内的文件内容</p>
<ul>
<li>打开此选项后，默认会对压缩包格式文件进行预览(如下图所示)，会消耗一些服务器流量，但不会全部下载</li>
<li>如果要关闭压缩包格式首选预览，<mark><strong>后台 =&gt; 设置 =&gt; 打开压缩包文默认预览</strong></mark>，此选项关闭，首选项就是下载模式</li>
</ul>
</li>
<li>
<p>解压：在线解压压缩包文件</p>
</li>
</ul>
<p><img src="/img/advanced/user_read_archives_light.png" alt="" data-mode="lightmode-only" loading="lazy"></p>
<p><img src="/img/advanced/user_read_archives_dark.png" alt="" data-mode="darkmode-only" loading="lazy"></p>
<br/>
<h2 id="停用" tabindex="-1"><a class="header-anchor" href="#停用"><span><strong>停用</strong></span></a></h2>
<p>勾选后将停止使用此用户，无法登陆，游客账户默认停用，如果要启用游客账户请手动关闭停用</p>
<br/>
<h2 id="tips" tabindex="-1"><a class="header-anchor" href="#tips"><span><strong>Tips</strong></span></a></h2>
<ol>
<li>你是否在为游客能看到全部文件而发愁？<RouteLink to="/zh/faq/why.html#%E6%83%B3%E8%AE%A9%E6%B8%B8%E5%AE%A2%E7%99%BB%E5%BD%95%E5%90%8E%E6%89%8D%E8%83%BD%E7%9C%8B%E5%88%B0%E5%86%85%E5%AE%B9%E6%80%8E%E4%B9%88%E8%AE%BE%E7%BD%AE"><strong>点击查看这里如何设置</strong></RouteLink></li>
<li><strong><code v-pre>Guest user is disabled, login please</code></strong>：为了保护您的AList安全，游客访问权限关闭了，若需要游客访问自行打开
<ul>
<li>后台 --&gt; 用户 --&gt; <code v-pre>guest</code> --&gt; 停用取消勾选</li>
</ul>
</li>
<li>关于 <strong><code v-pre>复制/上传</code></strong> 的问题
<ul>
<li>如果你上传(含离线下载上传)很大的文件，或者上传文件很多（几百上千），不建议您使用AList来进行操作,请前往相应的网盘官网直接操作最后</li>
</ul>
</li>
<li>非admin权限用户在后台管理离线下载、复制、上传等操作
<ul>
<li>需要AList升级到<Badge text="v3.39.1" type="info" vertical="middle" />版本，同时admin也可以查看用户的任务进度以及操作</li>
</ul>
</li>
</ol>
<p><img src="/img/advanced/user_manage.png" alt="" loading="lazy"></p>
</div></template>


