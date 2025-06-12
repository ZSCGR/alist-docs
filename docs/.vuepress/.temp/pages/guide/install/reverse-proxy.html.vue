<template><div><h1 id="reverse-proxy" tabindex="-1"><a class="header-anchor" href="#reverse-proxy"><span>Reverse proxy</span></a></h1>
<p>The program listens to port 5244 by default. If you do <code v-pre>reverse proxy</code>, recommended you set <RouteLink to="/config/configuration.html#site_url">site_url</RouteLink> so that alist can works fine.</p>
<blockquote>
<p>If you want to use a sub folder, refer to <RouteLink to="/faq/howto.html#how-to-reverse-proxy-with-sub-directory">reverse proxy with sub folder</RouteLink></p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">Missing https or port / Can't Play video when reverse-proxy non-standard ports or enable https?</p>
<p>You need to passed correct host header, refer to <a href="https://github.com/alist-org/alist/issues/726" target="_blank" rel="noopener noreferrer">#726</a> <a href="https://github.com/alist-org/alist/issues/1159" target="_blank" rel="noopener noreferrer">#1159</a> <a href="https://github.com/alist-org/alist/issues/2429" target="_blank" rel="noopener noreferrer">#2429</a> <a href="https://github.com/alist-org/alist/issues/3644" target="_blank" rel="noopener noreferrer">#3644</a> <a href="https://github.com/alist-org/alist/issues/4181" target="_blank" rel="noopener noreferrer">#4181</a> <a href="https://github.com/alist-org/alist/issues/4719" target="_blank" rel="noopener noreferrer">#4719</a></p>
</div>
<h3 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span><strong>nginx</strong></span></a></h3>
<p>Add in the server field of the website configuration file</p>
<div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-nginx"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> / {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    proxy_set_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">X-Forwarded-For $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">proxy_add_x_forwarded_for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    proxy_set_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">X-Forwarded-Proto $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">scheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    proxy_set_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Host $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">http_host</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    proxy_set_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">X-Real-IP $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">remote_addr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    proxy_set_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Range $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">http_range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">	  proxy_set_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">If-Range $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">http_if_range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    proxy_redirect </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">off</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    proxy_pass </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">http://127.0.0.1:5244;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # the max size of file to upload</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    client_max_body_size </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">20000m</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>If you use the <a href="http://bt.cn" target="_blank" rel="noopener noreferrer">bt.cn</a>, be sure to delete the following default configuration</p>
<ul>
<li>location ~ ^/(.user.ini|.htaccess|.git|.svn|.project|LICENSE|README.md</li>
<li>location ~ .*.(gif|jpg|jpeg|png|bmp|swf)$</li>
<li>location ~ .*.(js|css)?$</li>
</ul>
</div>
<p>Disable Nginx caching in <code v-pre>/www/server/nginx/conf/proxy.conf</code> or the corresponding website configuration file. Otherwise, with the default configuration, when accessing large files, Nginx will attempt to cache the remote file locally first, resulting in playback failures.</p>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="conf">
    <span>conf</span>
  </div>
  <div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">proxy_cache</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cache_one</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Remove this line</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">proxy_max_temp_file_size</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Add this line</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div>
</div><h3 id="apache" tabindex="-1"><a class="header-anchor" href="#apache"><span><strong>Apache</strong></span></a></h3>
<p>Add the anti-generation configuration item ProxyPass under the VirtualHost field, such as:</p>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-xml"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">VirtualHost</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> *:80></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ServerName myapp.example.com</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ServerAdmin webmaster@example.com</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    DocumentRoot /www/myapp/public</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    AllowEncodedSlashes NoDecode</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ProxyPreserveHost On</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ProxyPass "/" "http://127.0.0.1:5244/" nocanon</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ProxyPassReverse "/" "http://127.0.0.1:5244/" nocanon</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">VirtualHost</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="caddy" tabindex="-1"><a class="header-anchor" href="#caddy"><span><strong>Caddy</strong></span></a></h3>
<p>Add the reverse_proxy configuration item reverse_proxy under the Caddyfile file, for example:</p>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-xml"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:80 {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">     reverse_proxy 127.0.0.1:5244</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="demonstration-of-setting-up-reverse-proxy-in-bt-panel" tabindex="-1"><a class="header-anchor" href="#demonstration-of-setting-up-reverse-proxy-in-bt-panel"><span><strong>Demonstration of Setting up Reverse Proxy in BT Panel</strong></span></a></h2>
<h4 id="_1-login-to-the-bt-panel-and-add-a-new-website" tabindex="-1"><a class="header-anchor" href="#_1-login-to-the-bt-panel-and-add-a-new-website"><span>1.Login to the BT panel and add a new website.</span></a></h4>
<p><img src="/img/guide/reverse_proxy/bt_new_website.png" alt="bt_new_website" loading="lazy"></p>
<h4 id="_2-modify-the-website-settings" tabindex="-1"><a class="header-anchor" href="#_2-modify-the-website-settings"><span>2.Modify the website settings.</span></a></h4>
<p><img src="/img/guide/reverse_proxy/bt_new_website_01.png" alt="bt_new_website_01" loading="lazy"></p>
<h4 id="_3-remove-the-default-panel-code" tabindex="-1"><a class="header-anchor" href="#_3-remove-the-default-panel-code"><span>3.Remove the default panel code.</span></a></h4>
<p><img src="/img/guide/reverse_proxy/bt_delete_default_config_01.png" alt="bt_delete_default_config_01" loading="lazy"></p>
<p><img src="/img/guide/reverse_proxy/bt_delete_default_config_02.png" alt="bt_delete_default_config_02" loading="lazy"></p>
<h4 id="_4-add-the-reverse-proxy" tabindex="-1"><a class="header-anchor" href="#_4-add-the-reverse-proxy"><span>4.Add the reverse proxy.</span></a></h4>
<p><img src="/img/guide/reverse_proxy/bt_reverse_proxy.png" alt="bt_reverse_proxy" loading="lazy"></p>
<blockquote>
<p>If you need to apply for an <code v-pre>SSL certificate</code>, you can first apply for the certificate in the <code v-pre>SSL</code> option, and then set up the reverse proxy. Alternatively, you can set up the reverse proxy first, disable the proxy function, apply for an <code v-pre>SSL</code> certificate, and then enable the proxy again.</p>
</blockquote>
</div></template>


