<template><div><h1 id="alist-v2-v3" tabindex="-1"><a class="header-anchor" href="#alist-v2-v3"><span>AList V2/V3</span></a></h1>
<p><img src="/img/drivers/alist/alist.png" alt="alist" loading="lazy"></p>
<h3 id="driver" tabindex="-1"><a class="header-anchor" href="#driver"><span><strong>Driver</strong></span></a></h3>
<p>First of all, you need to know whether the other party is V2 or V3.</p>
<h3 id="root-directory-path" tabindex="-1"><a class="header-anchor" href="#root-directory-path"><span><strong>root directory path</strong></span></a></h3>
<ul>
<li>The pathname of the directory to be added, if not filled, it defaults to the root directory, such as:
<ul>
<li><a href="https://alist.nn.ci/" target="_blank" rel="noopener noreferrer">https://alist.nn.ci</a> -&gt; <code v-pre>/</code></li>
<li><a href="https://alist.nn.ci/a" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/a</a> -&gt; <code v-pre>/a</code></li>
<li><a href="https://alist.nn.ci/a/b" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/a/b</a> -&gt; <code v-pre>/a/b</code></li>
</ul>
</li>
</ul>
<h3 id="link" tabindex="-1"><a class="header-anchor" href="#link"><span><strong>Link</strong></span></a></h3>
<p>AList link you want to mount</p>
<Tabs :data='[{"id":"V3"},{"id":"V2"}]' tab-id="AList">
<template #title0="{ value, isActive }">V3</template>
<template #title1="{ value, isActive }">V2</template>
<template #tab0="{ value, isActive }">
<p>(<strong>v3.16.3</strong>) If the AList you mounted is &quot;not&quot; enabled <RouteLink to="/config/site.html#allow-mounted"><strong>Allow Mount</strong></RouteLink>, you will not be able to To mount, the following error is prompted</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>Failed init storage: the site does not allow mounted</span></span>
<span class="line"><span>failed get objs: storage not init: the site does not allow mounted</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>(If) or use the <code v-pre>username&amp;password</code> provided by the other party to mount, if the other party allows the mount, it must provide <code v-pre>username&amp;password</code> or enable <RouteLink to="/config/site.html#allow-mounted"><strong>Allow Mount</strong></RouteLink>, otherwise don’t force it</p>
<ul>
<li>v3.16.3 How to mount the lower version than v3.16.3, for the time being, you can only use the <code v-pre>username &amp; password</code> provided by the other party to mount.</li>
</ul>
<hr>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p><code v-pre>Username&amp;Password</code> can be mounted without writing. In this way, <code v-pre>guest</code> is used for tourist access. If the other party does not enable the guest account access permission, an error will be prompted when mounting (as follows)</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">failed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> objs:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> failed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> list</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> objs:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> request</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> failed,code:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 400,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> message:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Key:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'LoginReq.Username'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Error:Field</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> validation</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> for</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Username'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> failed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> on</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'required'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tag</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>If you started using the <code v-pre>username &amp; password</code> method to mount, then you switched to using the <code v-pre>meta information password</code> method to mount
<ul>
<li>You need to manually clear the <code v-pre>token</code> that was automatically filled before, otherwise it will still use the <code v-pre>username&amp;password</code> method to mount</li>
</ul>
</li>
</ul>
</div>
<h3 id="meta-password" tabindex="-1"><a class="header-anchor" href="#meta-password"><span><strong>Meta password</strong></span></a></h3>
<p>(The Meta  password option <strong>is not required</strong>, explain to those who need it)</p>
<p>The Meta  password refers to the meta information password</p>
<p>The AList path you want to mount has a meta information password set</p>
<ul>
<li>example 1:
<ul>
<li>The path you mount is <code v-pre>/a</code></li>
<li>Then you need to know what the other party’s <code v-pre>/a</code> path password is set to see the file, otherwise it will be blank after entering</li>
</ul>
</li>
<li>Example 2:
<ul>
<li>The path you mount is <code v-pre>/</code></li>
<li>But the root directory <code v-pre>/</code> of the other party has no password set, but other individual folders such as Ali, Baidu, 123 have set passwords, so you can fill in these but only one password.
<ul>
<li>If the passwords of the three folders mentioned above are set differently, then you can only enter the folder with this password in the one you fill in, and you will not be able to enter without this password. You should understand.</li>
</ul>
</li>
</ul>
</li>
</ul>
<br/>
<h2 id="username" tabindex="-1"><a class="header-anchor" href="#username"><span><strong>Username</strong></span></a></h2>
<p><code v-pre>AList</code> user name (account) you want to mount</p>
<h2 id="password" tabindex="-1"><a class="header-anchor" href="#password"><span><strong>Password</strong></span></a></h2>
<p>The password corresponding to the <code v-pre>AList</code> username you want to mount</p>
<div class="hint-container tip">
<p class="hint-container-title">Kind tips</p>
<p>It looks very troublesome, but you can understand it after a little operation. The details are written for Xiaobai(The premise is that  <RouteLink to="/config/site.html#allow-mounted"><strong>Allow Mount</strong></RouteLink> is enabled on the other party)</p>
<ol>
<li>
<p>The access path is prioritized using [<strong>root directory path</strong>](#root directory path), if you use <code v-pre>username&amp;password</code> method for mounting, [<strong>root folder path</strong>](#root folder path) It is recommended to write <code v-pre>/</code>, otherwise your access rights of this user name do not match [<strong>root directory path</strong>](#root directory path) and an error message will be displayed</p>
<p>-Example <sup>1</sup>: [<strong>root directory path</strong>](#root directory path): <code v-pre>file</code>, the access permission folder of the user name is: <code v-pre>video</code>, so access will prompt an error</p>
<p>-Example <sup>2</sup>: [<strong>root directory path</strong>](#root directory path): <code v-pre>file</code>, the access permission folder of the user name does not have <code v-pre>file</code>, so access will prompt an error</p>
</li>
<li>
<p>When <code v-pre>AList Management</code> is given to others to mount, you can choose the folder to access when creating a new user. The default <code v-pre>/</code></p>
<ul>
<li>When the user mounts, [<strong>root directory path</strong>](#root directory path) is recommended to write <code v-pre>/</code>, so as not to prompt an error because the management has given different access folder permissions</li>
</ul>
</li>
<li>
<p>In the most extreme case, it is preferred that you know that the <code v-pre>username</code> added this time can access the folder permissions, whether there is any, and then write the path you want to mount separately to [<strong>root directory path</strong> ](#root directory path)</p>
<ul>
<li>If you don't know [<strong>root directory path</strong>](#root directory path), you can write <code v-pre>/</code> first, go to the mount page to see the path you want to mount separately, and then modify the background settings</li>
</ul>
</li>
</ol>
</div>
<h3 id="token" tabindex="-1"><a class="header-anchor" href="#token"><span><strong>Token</strong></span></a></h3>
<p>You don’t need to write, it will be automatically filled after filling in <code v-pre>Username &amp; Password</code> and saving</p>
<br/>
<h3 id="proxy-range" tabindex="-1"><a class="header-anchor" href="#proxy-range"><span><strong>Proxy Range</strong></span></a></h3>
<p>You need to enable <code v-pre>Web Proxy</code> or<code v-pre> Webdav Native Proxy</code> to take effect</p>
<ul>
<li>Currently only applicable to：<code v-pre>alias</code>、<code v-pre>139Yun</code>、<code v-pre>AList V3</code>
<ul>
<li>Function Description：<strong><a href="https://github.com/alist-org/alist/pull/6496#issue-2309839607" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/pull/6496#issue-2309839607</a></strong></li>
</ul>
</li>
</ul>
</template>
<template #tab1="{ value, isActive }">
<h3 id="password-1" tabindex="-1"><a class="header-anchor" href="#password-1"><span><strong>password</strong></span></a></h3>
<p>(The password option <strong>is not required</strong>, explain to those who need it)</p>
<p>The password refers to the meta information password</p>
<p>The Alist path you want to mount has a meta information password set</p>
<ul>
<li>example 1:
<ul>
<li>The path you mount is <code v-pre>/a</code></li>
<li>Then you need to know what the other party’s <code v-pre>/a</code> path password is set to see the file, otherwise it will be blank after entering</li>
</ul>
</li>
<li>Example 2:
<ul>
<li>The path you mount is <code v-pre>/</code></li>
<li>But the root directory <code v-pre>/</code> of the other party has no password set, but other individual folders such as Ali, Baidu, 123 have set passwords, so you can fill in these but only one password.
<ul>
<li>If the passwords of the three folders mentioned above are set differently, then you can only enter the folder with this password in the one you fill in, and you will not be able to enter without this password. You should understand.</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="access-token" tabindex="-1"><a class="header-anchor" href="#access-token"><span><strong>Access Token</strong></span></a></h3>
<p>(The access token option <strong>is not required</strong>, explain to those who need it)</p>
<p>(This is for the other party to give you, generally no one will hand over their token to outsiders)</p>
<ul>
<li>How to get V2: Go to the V2 document to view --&gt; <strong><a href="https://alist-doc.nn.ci/docs/driver/alist#token" target="_blank" rel="noopener noreferrer">https://alist-doc.nn.ci/docs/driver/alist#token</a></strong></li>
<li>How to get V3: Background --&gt; Settings --&gt; Others --&gt; <strong><code v-pre>Token</code></strong></li>
</ul>
</template>
</Tabs>
<h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-302" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid></div></template>


