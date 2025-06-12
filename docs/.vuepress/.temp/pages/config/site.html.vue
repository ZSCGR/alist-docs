<template><div><h1 id="site-settings" tabindex="-1"><a class="header-anchor" href="#site-settings"><span>Site settings</span></a></h1>
<h3 id="version" tabindex="-1"><a class="header-anchor" href="#version"><span><strong>Version</strong></span></a></h3>
<p>The version of the <code v-pre>alist</code>, readonly.</p>
<h3 id="api-url" tabindex="-1"><a class="header-anchor" href="#api-url"><span><strong>Api url</strong></span></a></h3>
<blockquote>
<p>Deprecated in v3.0.2 and later, moved to <RouteLink to="/config/configuration.html#site-url">site_url</RouteLink></p>
</blockquote>
<p>The address of your <code v-pre>alist</code>, such as <code v-pre>https://pan.nn.ci</code>.This address will be used in some places in the program, If you do not set this field, Some features may not work properly, such as:</p>
<p>Do not carry <code v-pre>/</code> at the end of the URL link, correct example✔️ :<code v-pre>https://pan.nn.ci</code>, wrong example: <code v-pre>https://pan.nn.ci/</code> ❌,Otherwise the following functions will not be available</p>
<ul>
<li>thumbnail of <code v-pre>LocalStorage</code></li>
<li>Preview after opening web proxy</li>
<li>The download address after opening the web proxy</li>
<li>Reverse proxy to sub directory</li>
<li>...</li>
</ul>
<h3 id="base-path" tabindex="-1"><a class="header-anchor" href="#base-path"><span><strong>Base path</strong></span></a></h3>
<blockquote>
<p>Deprecated in v3.0.2 and later, moved to <RouteLink to="/config/configuration.html#site-url">site_url</RouteLink></p>
</blockquote>
<p>Default <code v-pre>/</code>, if you want reverse proxy with sub directory(see <RouteLink to="/faq/howto.html#how-to-reverse-proxy-with-sub-directory">reverse proxy with sub directory</RouteLink> for details), such as <code v-pre>https://pan.nn.ci/alist</code>, you should set this field to <code v-pre>alist</code>, at the same time you need to set <code v-pre>Api url</code> to <code v-pre>https://pan.nn.ci/alist</code>.</p>
<h3 id="site-title" tabindex="-1"><a class="header-anchor" href="#site-title"><span><strong>Site title</strong></span></a></h3>
<p>The title of the <code v-pre>alist</code>, such as <code v-pre>Alist</code>.</p>
<h3 id="announcement" tabindex="-1"><a class="header-anchor" href="#announcement"><span><strong>Announcement</strong></span></a></h3>
<p>The announcement of the <code v-pre>alist</code>, such as <code v-pre>### Hello\nWelcome to use Alist</code>. We suggest you add a title in front of the content, such as <code v-pre>### Hello</code>, so that the content will not be covered by <code v-pre>Close Button</code>.</p>
<ul>
<li>If you don't want to display it, you can clear the contents of the announcement to not display it.</li>
</ul>
<p>If you think the <code v-pre>x</code> button in the upper right corner is in the way, you can use the following CSS to remove it</p>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-css"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.notify-render</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> .hope-close-button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    display: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">none</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pagination-type" tabindex="-1"><a class="header-anchor" href="#pagination-type"><span><strong>Pagination type</strong></span></a></h3>
<ul>
<li>All: All files will be displayed at once.</li>
<li>Pagination: Show a <code v-pre>Paginator</code> at the bottom of the page.</li>
<li>Load more: Show a <code v-pre>Load more</code> button at the bottom of the page.</li>
<li>Auto load more: Automatically load more files when scrolling to the bottom of the page.</li>
</ul>
<h3 id="default-page-size" tabindex="-1"><a class="header-anchor" href="#default-page-size"><span><strong>Default page size</strong></span></a></h3>
<p>The default page size of the <code v-pre>alist</code> if <code v-pre>Pagination type</code> doesn't set to <code v-pre>All</code>, such as <code v-pre>20</code>.</p>
<h3 id="allow-indexing" tabindex="-1"><a class="header-anchor" href="#allow-indexing"><span><strong>allow indexing</strong></span></a></h3>
<p>Whether to allow others to mount your AList to build the index, check it and enable it.</p>
<p>The default is off, use with caution.  (New features in version 3.8.0)</p>
<h2 id="allow-mounted" tabindex="-1"><a class="header-anchor" href="#allow-mounted"><span><strong>allow mounted</strong></span></a></h2>
<p>Do you allow others to mount your AList and then access it</p>
<p><strong>It is enabled by default, it is recommended to turn it off if you don’t want others to mount it</strong> (v3.16.3 new feature)</p>
<h2 id="robots-txt" tabindex="-1"><a class="header-anchor" href="#robots-txt"><span><strong>Robots.txt</strong></span></a></h2>
<p>Crawler configuration/rules</p>
<p>The default is to allow crawlers to access all pages</p>
<ul>
<li><code v-pre>Allow: /</code> Indicates that the crawlers of search engines are allowed to visit all pages</li>
</ul>
<div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-txt"><span class="line"><span>User-agent: *</span></span>
<span class="line"><span>Allow: /</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>If you want to prevent crawlers from accessing all pages, you can change it to this</p>
<div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-txt"><span class="line"><span>User-agent: *</span></span>
<span class="line"><span>Disallow: /</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


