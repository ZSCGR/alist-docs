<template><div><h1 id="global-settings" tabindex="-1"><a class="header-anchor" href="#global-settings"><span>Global settings</span></a></h1>
<h3 id="hide-files" tabindex="-1"><a class="header-anchor" href="#hide-files"><span><strong>Hide files</strong></span></a></h3>
<p>Match files hidden by regular expressions(<code v-pre>javascript</code>). If you don't understand, don't fill in them randomly. Wrong regular expressions <code v-pre>/\/README.md/i</code> will cause the front-end page to crash. One per line. By default, there is an example expression that hides <a href="http://README.md" target="_blank" rel="noopener noreferrer">README.md</a> in all directories.</p>
<p>It's not really hiding. It still exists in the list returned by the api, it just doesn't show up in the frontend list. So if you want to really hide, add a <RouteLink to="/guide/advanced/meta.html">meta</RouteLink> record instead.</p>
<br/>
<h3 id="package-download" tabindex="-1"><a class="header-anchor" href="#package-download"><span><strong>Package download</strong></span></a></h3>
<p>Whether to enable package download, default is true. 【Not recommended especially when there are many or large files】</p>
<ul>
<li>It is recommended to push files to Aria2 for downloading. Aria2 supports the download folder to save the directory structure.</li>
<li>View in detail【<RouteLink to="/config/other.html#other">What is the difference between the two Aria2</RouteLink>】</li>
</ul>
<br/>
<h3 id="customize-head" tabindex="-1"><a class="header-anchor" href="#customize-head"><span><strong>Customize head</strong></span></a></h3>
<p>Any content you want which are automatically placed at the beginning of the head of the web page</p>
<ul>
<li>How to configure PWA（Desktop、Android、IOS）：<strong><a href="https://github.com/alist-org/alist/issues/6724#issuecomment-2220251541" target="_blank" rel="noopener noreferrer">alist/issues/6724</a></strong></li>
</ul>
<br/>
<h3 id="customize-body" tabindex="-1"><a class="header-anchor" href="#customize-body"><span><strong>Customize body</strong></span></a></h3>
<p>Any content you want which are automatically placed at the end of the body of the web page</p>
<br/>
<h3 id="link-expiration" tabindex="-1"><a class="header-anchor" href="#link-expiration"><span><strong>Link expiration</strong></span></a></h3>
<p>The expiration time of the direct link, in hours. If it equals 0, it will not expire. Default is 0.</p>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>Only the straight chain of the path with the password added will have an expiration time, otherwise it will not expire.Because the expiration time is added to the sign query parameter, and the path without adding the password will not check the sign.</p>
</div>
<br/>
<h3 id="privacy-regs" tabindex="-1"><a class="header-anchor" href="#privacy-regs"><span><strong>Privacy regs</strong></span></a></h3>
<p>What you don't want to show in the error message, One regular expression (in <code v-pre>Golang</code>) per line. The matched content will be replaced with * of the corresponding length.</p>
<br/>
<h3 id="ocr-api" tabindex="-1"><a class="header-anchor" href="#ocr-api"><span><strong>Ocr api</strong></span></a></h3>
<p>Used to identify verification codes. You can deploy yourself: <a href="https://hub.docker.com/r/xhofe/ddddocr_server" target="_blank" rel="noopener noreferrer">https://hub.docker.com/r/xhofe/ddddocr_server</a>. The default ocr api is deployed on the <a href="https://app.koyeb.com/" target="_blank" rel="noopener noreferrer">koyeb</a>(No availability guarantee), which is not recommended to use in production environment.</p>
<br/>
<h3 id="sign-all" tabindex="-1"><a class="header-anchor" href="#sign-all"><span><strong>Sign all</strong></span></a></h3>
<p>Add signatures to the direct link of all files (whether with password or not)</p>
<p>That is<code v-pre>https://xxxx.com/d/xx?sign=vUQ5KFXnwMseKnIUXGRcfoG3cEHzKFBiPGp1NriMDXA=:0</code></p>
<p>If you need to close it, you can close it yourself, but you need to pay attention to security issues. After closing the signature, if the site can be accessed by the public network, the password may be bypassed to access private files.</p>
<p>There are two other methods that also carry the <code v-pre>sign?xxx</code> parameter, 1. Add Storage Select <code v-pre>Enable Signing</code>, 2. Meta Information Add Password</p>
<p>The scope of the three methods<code v-pre>Sign All</code> &gt; <code v-pre>Meta Information Add Password</code> &gt; Add Storage Select <code v-pre>Enable Signing</code></p>
<ol>
<li>Sign All: If this option is turned on, the sign parameter will be carried regardless of whether meta-information is encrypted or not, and whether <code v-pre>Enable Signing</code> is checked when adding storage.</li>
<li>Meta Information Add Password：Only files under this meta information path will carry the sign parameter.
<ul>
<li>If <strong>Apply to sub folder</strong> is turned on, all files in this path will carry the sign parameter</li>
</ul>
</li>
<li>Add Storage Select <code v-pre>Enable Signing</code>：Only this storage driver carries the sign parameter.</li>
</ol>
<br/>
<h2 id="forward-direct-link-params" tabindex="-1"><a class="header-anchor" href="#forward-direct-link-params"><span><strong>Forward direct link params</strong></span></a></h2>
<p>You can check it out yourself：<strong><a href="https://github.com/alist-org/alist/issues/3123" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/issues/3123</a></strong></p>
<br/>
<h3 id="filename-char-mapping" tabindex="-1"><a class="header-anchor" href="#filename-char-mapping"><span><strong>Filename char mapping</strong></span></a></h3>
<p>Mainly to map some special characters so that Alist can work normally</p>
<p>For example, the <code v-pre>/</code> symbol is a path symbol in the Alist program. Some people’s files have <code v-pre>/</code> symbols that cause the file to be disconnected halfway and cannot be viewed. We can use this method to map and convert.</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"/"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"|"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"xx1"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"xx1"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"xx2"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"xx2"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>The default is the first one at the beginning. If you want to add it later, you can add it later. The format is as simple as above.</p>
<br/>
<h2 id="webauthn-login-enabled" tabindex="-1"><a class="header-anchor" href="#webauthn-login-enabled"><span><strong>Webauthn login enabled</strong></span></a></h2>
<p>What is <strong>Webauthn</strong>? Search for yourself, today I just teach you how to use it</p>
<p>In the background <code v-pre>Settings</code>--&gt;<code v-pre>Global</code>--&gt;Open <code v-pre>Webauthn login enabled</code>, go back to the background <code v-pre>Profile</code>--&gt;Bind <code v-pre>Add a Webauthn credential</code></p>
<ul>
<li>
<p><code v-pre>Add a Webauthn credential</code> using the <code v-pre>PIN</code> of this computer or <code v-pre>complementary devices (such as bracelets, watches)</code> [support all options in Windows Hello configuration, such as <code v-pre>face</code> and <code v-pre>fingerprint</code>]</p>
</li>
<li>
<p>Just like binding single sign-on, we can use <strong><code v-pre>Webauthn</code></strong> to log in after binding</p>
<ul>
<li>On the login page, click the login button on the far right, enter our user name, click login, and then unlock the required <code v-pre>Webauthn</code> verification method to log in</li>
</ul>
</li>
<li>
<p>Adding <code v-pre>Webauthn</code> requires a secure origin and can only be used on <code v-pre>https</code> or <code v-pre>localhost</code></p>
<ul>
<li>Unsafe sources, such as: http, 192.168.x.x, 127.0.0.1, or directly use the server IP, etc. These places cannot be used</li>
</ul>
</li>
</ul>
</div></template>


