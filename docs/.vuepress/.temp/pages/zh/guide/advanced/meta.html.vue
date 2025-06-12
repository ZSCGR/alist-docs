<template><div><h1 id="元信息" tabindex="-1"><a class="header-anchor" href="#元信息"><span>元信息</span></a></h1>
<p>元信息内的配置对<code v-pre>所有角色</code>生效，如果想让用户有相应的权限请前往 <code v-pre>用户</code>--&gt;<code v-pre>用户账号</code> 进行修改相应的权限</p>
<h2 id="路径" tabindex="-1"><a class="header-anchor" href="#路径"><span><strong>路径</strong></span></a></h2>
<p>此元信息生效的路径</p>
<br/>
<h2 id="密码" tabindex="-1"><a class="header-anchor" href="#密码"><span><strong>密码</strong></span></a></h2>
<p>访问此路径需要密码</p>
<ul>
<li>元信息密码在使用<code v-pre>WebDav</code>访问时不会生效</li>
</ul>
<div class="hint-container caution">
<p class="hint-container-title">注意事项</p>
<p>填写密码如果想在子文件夹也生效，请勾选密码后面的 <code v-pre>应用到子文件夹</code>，请勿勾选 <code v-pre>写入</code>再勾选<code v-pre>应用到子文件夹</code></p>
<p>正确勾选示例图如下所示，正确配置选项，如果勾选错误为 <code v-pre>写入</code>再勾选<code v-pre>应用到子文件夹</code> 会造成任何人都拥有权限写入危险操作</p>
<p><img src="/img/advanced/meta/password_b.png" alt="" data-mode="lightmode-only" loading="lazy"><br>
<img src="/img/advanced/meta/password_h.png" alt="" data-mode="darkmode-only" loading="lazy"></p>
</div>
<br/>
<h2 id="写入" tabindex="-1"><a class="header-anchor" href="#写入"><span><strong>写入</strong></span></a></h2>
<p>允许用户新建目录、新文件和上传文件。</p>
<br/>
<h2 id="隐藏" tabindex="-1"><a class="header-anchor" href="#隐藏"><span><strong>隐藏</strong></span></a></h2>
<p>此路径要隐藏的对象，每行一个正则表达式（在 <code v-pre>Golang</code> 中）</p>
<ul>
<li>元信息隐藏在使用<code v-pre>WebDav</code>访问时可以生效</li>
</ul>
<br/>
<h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明"><span><strong>说明</strong></span></a></h2>
<p>进入该路径时渲染的自述文件，支持 Markdown 内容或 Markdown 链接。</p>
<ul>
<li>
<p>在列表底部显示</p>
</li>
<li>
<p>自动渲染的文件名为：<strong><code v-pre>readme.md</code></strong></p>
</li>
</ul>
<br/>
<h2 id="顶部说明" tabindex="-1"><a class="header-anchor" href="#顶部说明"><span><strong>顶部说明</strong></span></a></h2>
<p>（v3.29.0 新增）进入该路径时渲染的自述文件，支持 Markdown 内容或 Markdown 链接。</p>
<ul>
<li>在列表顶部显示</li>
<li>自动渲染的文件名为：<strong><code v-pre>top.md</code></strong>
<ul>
<li>可以在列表中不显示文件，例如<code v-pre>readme.md</code>不在列表显示</li>
<li>后台 --&gt; 设置 --&gt; 全局 --&gt; 隐藏文件 --&gt; 换行添加 <code v-pre>/\/top.md/i</code></li>
</ul>
</li>
</ul>
<br/>
<h2 id="应用到子文件夹" tabindex="-1"><a class="header-anchor" href="#应用到子文件夹"><span><strong>应用到子文件夹</strong></span></a></h2>
<p>将此元信息应用于特定路径的子文件夹</p>
<br/>
<h2 id="tips" tabindex="-1"><a class="header-anchor" href="#tips"><span>⚠️ Tips</span></a></h2>
<blockquote>
<p>关于隐藏，没有权限的用户可以搜索到隐藏的文件夹/文件，解决方案</p>
</blockquote>
<p>✅如果你要隐藏某个文件夹內的文件夹，要单独新建一条元信息，路径选择我们要隐藏的文件夹，隐藏如果你要隐藏所有直接写 <code v-pre>.*</code>即可</p>
<p>❌ 不可以直接在选择根目录<code v-pre>/</code>的元信息內填写，然后隐藏位置填写我们要隐藏的文件夹，错误案例<a href="https://github.com/alist-org/alist/issues/4494" target="_blank" rel="noopener noreferrer">查看详情</a></p>
<p><img src="/img/advanced/hide-tips.png" alt="" loading="lazy"></p>
</div></template>


