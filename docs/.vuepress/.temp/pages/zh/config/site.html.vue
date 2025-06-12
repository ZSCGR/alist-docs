<template><div><h1 id="网站设置" tabindex="-1"><a class="header-anchor" href="#网站设置"><span>网站设置</span></a></h1>
<h2 id="版本" tabindex="-1"><a class="header-anchor" href="#版本"><span><strong>版本</strong></span></a></h2>
<p>AList 的版本，只读。</p>
<h2 id="api地址" tabindex="-1"><a class="header-anchor" href="#api地址"><span><strong>Api地址</strong></span></a></h2>
<blockquote>
<p>在v3.0.2及之后被弃用，已经移至<RouteLink to="/zh/config/configuration.html#site-url">site_url</RouteLink></p>
</blockquote>
<p>你的 AList 的地址，比如 <code v-pre>https://pan.nn.ci</code>。这个地址会在程序中的某些地方使用，如果不设置这个字段，一些功能可能无法正常工作，比如</p>
<p>URL链接结尾请勿携带 <code v-pre>/</code> ,正确示例✔️:<code v-pre>https://pan.nn.ci</code>，错误示例：<code v-pre>https://pan.nn.ci/</code>❌,否则将无法使用以下功能</p>
<ul>
<li>本地存储的缩略图</li>
<li>开启web代理后的预览</li>
<li>开启web代理后的下载地址</li>
<li>反向代理至二级目录</li>
<li>...</li>
</ul>
<h2 id="基本路径" tabindex="-1"><a class="header-anchor" href="#基本路径"><span><strong>基本路径</strong></span></a></h2>
<blockquote>
<p>在v3.0.2及之后被弃用，已经移至<RouteLink to="/zh/config/configuration.html#site-url">site_url</RouteLink></p>
</blockquote>
<p>默认 <code v-pre>/</code>，如果你想反向代理子目录，详见<RouteLink to="/zh/faq/howto.html#how-to-reverse-proxy-with-sub-directory">带有子目录的反向代理</RouteLink>，需要设置该字段为 AList，比如 <code v-pre>https://pan.nn.ci/alist</code>，同时需要设置 <code v-pre>Api url</code> 为 <code v-pre>https://pan.nn.ci/alist</code>。</p>
<h2 id="网站标题" tabindex="-1"><a class="header-anchor" href="#网站标题"><span><strong>网站标题</strong></span></a></h2>
<p>AList 的标题，例如 AList。</p>
<h2 id="公告" tabindex="-1"><a class="header-anchor" href="#公告"><span><strong>公告</strong></span></a></h2>
<p>AList的公告，如 <code v-pre>### Hello\nWelcome to use Alist</code>。我们建议您在内容前添加标题，例如 <code v-pre>### Hello</code>，以免内容被关闭按钮覆盖。</p>
<ul>
<li>如想不显示，可以清空公告内内容即可不显示。</li>
</ul>
<p>如果嫌右上角的 <code v-pre>x</code> 按钮碍事可以使用如下CSS去掉</p>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-css"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.notify-render</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> .hope-close-button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    display: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">none</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分页类型" tabindex="-1"><a class="header-anchor" href="#分页类型"><span><strong>分页类型</strong></span></a></h2>
<ul>
<li>全部：一次显示所有文件。</li>
<li>分页：在页面底部显示一个“分页器”。</li>
<li>加载更多：在页面底部显示“加载更多”按钮。</li>
<li>自动加载更多：滚动到页面底部时自动加载更多文件。</li>
</ul>
<h2 id="默认每页文件数量" tabindex="-1"><a class="header-anchor" href="#默认每页文件数量"><span><strong>默认每页文件数量</strong></span></a></h2>
<p>AList 的默认每页文件数量，当 <code v-pre>Pagination type</code> 没有被设置为 <code v-pre>All</code> 时生效，例如 <code v-pre>20</code>。</p>
<h2 id="允许索引" tabindex="-1"><a class="header-anchor" href="#允许索引"><span><strong>允许索引</strong></span></a></h2>
<p>是否允许其他人挂载你的AList后进行索引构建，勾选后开启。</p>
<p><strong>默认为关闭状态，谨慎使用。</strong> （v3.8.0 新增功能）</p>
<h2 id="允许挂载" tabindex="-1"><a class="header-anchor" href="#允许挂载"><span><strong>允许挂载</strong></span></a></h2>
<p>是否允许其他人挂载你的AList,然后进行访问</p>
<p><strong>默认为开启状态，建议不想让别人挂载的选择关闭</strong>（v3.16.3新增功能）</p>
<h2 id="robots-txt" tabindex="-1"><a class="header-anchor" href="#robots-txt"><span><strong>Robots.txt</strong></span></a></h2>
<p>爬虫的配置/规则</p>
<p>默认的是允许爬虫访问所有页面</p>
<ul>
<li><code v-pre>Allow: /</code> 表示允许搜索引擎的爬虫访问所有页面</li>
</ul>
<div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-txt"><span class="line"><span>User-agent: *</span></span>
<span class="line"><span>Allow: /</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想禁止爬虫访问所有页面就改成这样子</p>
<div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-txt"><span class="line"><span>User-agent: *</span></span>
<span class="line"><span>Disallow: /</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


