<template><div><h3 id="how-to-add-password-for-a-file-folder" tabindex="-1"><a class="header-anchor" href="#how-to-add-password-for-a-file-folder"><span><strong>How to add password for a file/folder?</strong></span></a></h3>
<p>Add a <RouteLink to="/guide/advanced/meta.html">meta</RouteLink> record.</p>
<h3 id="how-to-reverse-proxy-with-sub-directory" tabindex="-1"><a class="header-anchor" href="#how-to-reverse-proxy-with-sub-directory"><span><strong>How to reverse proxy with sub directory?</strong></span></a></h3>
<p>An example of using nginx to reverse proxy to <a href="https://nn.ci/alist:" target="_blank" rel="noopener noreferrer">https://nn.ci/alist:</a></p>
<ul>
<li>Normal installation</li>
<li>Set <RouteLink to="/config/configuration.html#site_url">site_url</RouteLink> to <code v-pre>https://nn.ci/alist</code> or just <code v-pre>/alist</code> then restart alist</li>
<li>Add a reverse proxy record in nginx</li>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="how-to-get-password-if-i-forget-it" tabindex="-1"><a class="header-anchor" href="#how-to-get-password-if-i-forget-it"><span><strong>How to get password if i forget it?</strong></span></a></h3>
<p>If you are the owner of the site, you can get the admin's info by run <code v-pre>./alist admin</code> in the terminal.<br>
Otherwise you can ask the owner to reset the password.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>You need to stop alist server first if the version of your alist is v3.9.0 or later as this pr: <a href="https://github.com/alist-org/alist/pull/3074" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/pull/3074</a></p>
</div>
<h4 id="lower-than-v3-25-0" tabindex="-1"><a class="header-anchor" href="#lower-than-v3-25-0"><span>Lower than v3.25.0</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./alist</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> admin</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="higher-than-v3-25-0" tabindex="-1"><a class="header-anchor" href="#higher-than-v3-25-0"><span>Higher than v3.25.0</span></a></h4>
<p>Versions above 3.25.0 change the password to an encrypted hash value, and the password cannot be calculated directly. If the password is forgotten, it can only be re-<strong><code v-pre>randomly generated</code></strong> or <strong><code v-pre>manually set</code></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Randomly generate a password</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./alist</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> admin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> random</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Manually set a password, `NEW_PASSWORD` refers to the password you need to set</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./alist</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> admin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> NEW_PASSWORD</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="how-to-modify-the-listening-port​" tabindex="-1"><a class="header-anchor" href="#how-to-modify-the-listening-port​"><span><strong>How to modify the listening port​</strong></span></a></h3>
<p>Refer to <RouteLink to="/config/configuration.html#port">config</RouteLink></p>
<h3 id="how-to-upgrade" tabindex="-1"><a class="header-anchor" href="#how-to-upgrade"><span><strong>How to upgrade</strong></span></a></h3>
<p>Except for the incompatible version marked in the changelog, you can directly replace the binary file to upgrade.</p>
<p>For docker user, just remove the old container and pull the new image then run it.</p>
<h3 id="how-to-allow-guest-to-upload-files" tabindex="-1"><a class="header-anchor" href="#how-to-allow-guest-to-upload-files"><span><strong>How to allow guest to upload files</strong></span></a></h3>
<p>Add a <RouteLink to="/guide/advanced/meta.html">meta</RouteLink> record, and open <code v-pre>write</code> field.</p>
<h3 id="how-to-remove-powered-by-alist-at-the-bottom-​" tabindex="-1"><a class="header-anchor" href="#how-to-remove-powered-by-alist-at-the-bottom-​"><span><strong>How to remove <code v-pre>powered_by Alist</code> at the bottom?​</strong></span></a></h3>
<p>According to our open source license:<br>
Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. <strong>Copyright and license notices must be preserved.</strong> Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.</p>
<h3 id="when-adding-a-189cloud-storage-the-device-id-does-not-exist-and-a-secondary-device-verification-is-required​" tabindex="-1"><a class="header-anchor" href="#when-adding-a-189cloud-storage-the-device-id-does-not-exist-and-a-secondary-device-verification-is-required​"><span><strong>When adding a 189Cloud storage: the device ID does not exist, and a secondary device verification is required​</strong></span></a></h3>
<p>It may be that the risk detection system has been triggered. Please changing the password, then, add it again.</p>
<h3 id="when-adding-tianyi-cloud-disk-client-storage-prompt-need-img-validate-code-verification-code" tabindex="-1"><a class="header-anchor" href="#when-adding-tianyi-cloud-disk-client-storage-prompt-need-img-validate-code-verification-code"><span><strong>When adding Tianyi cloud disk client storage: prompt need img validate code: verification code</strong></span></a></h3>
<ul>
<li>Click Edit, write the verification code you just saw into the configuration and click Save</li>
<li>Click Edit and turn on the Do not use OCR button</li>
<li>Or build it yourself <RouteLink to="/config/global.html#ocr-api"><strong>Ocr interface</strong></RouteLink></li>
<li><strong>189 Cloud</strong> Driver has been replaced with sliding verification code because web login has been replaced.<strong>No longer supports OCR and manual input</strong>, if the verification code needs to be used, please use the addition of <code v-pre>Cookie to log in</code> or use the <code v-pre>189 Cloud PC</code> Driver, <sup>Note_that_it_is_189_Cloud_driver_is_not_189_Cloud_PC</sup></li>
</ul>
<h3 id="tls-handshake-timeout-read-connection-reset-by-peer-dns-lookup-failed-connect-connection-refused-client-timeout-exceeded-while-awaiting-headers-no-such-host" tabindex="-1"><a class="header-anchor" href="#tls-handshake-timeout-read-connection-reset-by-peer-dns-lookup-failed-connect-connection-refused-client-timeout-exceeded-while-awaiting-headers-no-such-host"><span><strong>TLS handshake timeout? / read: connection reset by peer? / dns lookup failed? / connect: connection refused / Client.Timeout exceeded while awaiting headers? / no such host?</strong></span></a></h3>
<p>For network problems such as these, please troubleshoot and solve them yourself.Don't create any issues for this.</p>
<h3 id="how-to-add-epub-reading" tabindex="-1"><a class="header-anchor" href="#how-to-add-epub-reading"><span><strong>How to add epub reading</strong></span></a></h3>
<p>Background --&gt; Settings --&gt; Preview --&gt; Iframe preview, written behind the PDF</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-html"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /*The comma below is also oh, don’t copy this comment, start copying from the second line*/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  "epub": {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    "EPUB.js":"/static/epub.js/viewer.html?url=$e_url"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Version 3.7.x and higher already support &quot;.epub&quot; reading<br>
But you need to add it manually (because the database has already been created, it is not good to overwrite it for you, and you will make mistakes)<br>
If it is the first installation and startup (version 3.7.x and higher), no need to add it manually<br>
If the secondary directory reverse generation is set, please add the corresponding prefix in <RouteLink to="/config/configuration.html#site-url">site_url</RouteLink>, and then restart AList to take effect</p>
<h3 id="how-to-quickly-locate-bugs" tabindex="-1"><a class="header-anchor" href="#how-to-quickly-locate-bugs"><span><strong>How to quickly locate bugs</strong></span></a></h3>
<p>If you find a bug, but the <code v-pre>log.log</code> log is not detailed, you can try to add the <code v-pre>--debug</code> parameter to start</p>
<p>It is recommended to clear the log file <code v-pre>/log/log.log</code> in the <strong>AList directory before starting with the <code v-pre>--debug</code> parameter</strong>, so that developers can quickly locate problems later</p>
<div class="hint-container caution">
<p class="hint-container-title">Caution</p>
<p>When using the <code v-pre>--debug</code> parameter to start, there will be some sensitive data such as <strong><code v-pre>account password, refresh token</code></strong>, etc., so if you need to desensitize before sending it to others</p>
</div>
<ul>
<li><strong>Windows</strong>：<code v-pre>alist.exe server --debug</code></li>
<li><strong>Linux</strong>：<code v-pre>./alist server --debug</code></li>
<li><strong>Mac</strong>: Temporarily unknown, maybe it is started with the <code v-pre>--debug</code> parameter</li>
<li><strong>Docker</strong>：<code v-pre>docker exec -it alist ./alist server --debug</code></li>
</ul>
<p>How to stop the relevant logs after startup? <code v-pre>Ctrl+c</code> can stop the program (or simply close the program directly)</p>
</div></template>


