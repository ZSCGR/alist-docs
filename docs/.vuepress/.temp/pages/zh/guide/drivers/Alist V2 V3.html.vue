<template><div><h1 id="alist-v2-v3" tabindex="-1"><a class="header-anchor" href="#alist-v2-v3"><span>AList V2/V3</span></a></h1>
<p><img src="/img/drivers/alist/alist.png" alt="alist" loading="lazy"></p>
<h3 id="驱动" tabindex="-1"><a class="header-anchor" href="#驱动"><span><strong>驱动</strong></span></a></h3>
<p>首先你要知道对方的到底是V2还是V3</p>
<h3 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id"><span><strong>根文件夹ID</strong></span></a></h3>
<ul>
<li>要添加的目录的pathname，不填默认为根目录，如：
<ul>
<li><a href="https://alist.nn.ci/" target="_blank" rel="noopener noreferrer">https://alist.nn.ci</a> -&gt; <code v-pre>/</code></li>
<li><a href="https://alist.nn.ci/a" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/a</a> -&gt; <code v-pre>/a</code></li>
<li><a href="https://alist.nn.ci/a/b" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/a/b</a> -&gt; <code v-pre>/a/b</code></li>
</ul>
</li>
</ul>
<h3 id="链接" tabindex="-1"><a class="header-anchor" href="#链接"><span><strong>链接</strong></span></a></h3>
<p>你要挂载的AList链接</p>
<Tabs :data='[{"id":"V3"},{"id":"V2"}]' tab-id="AList">
<template #title0="{ value, isActive }">V3</template>
<template #title1="{ value, isActive }">V2</template>
<template #tab0="{ value, isActive }">
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>（<strong>v3.16.3</strong>）若是你挂载的AList&quot;未&quot;开启<RouteLink to="/zh/config/site.html#%E5%85%81%E8%AE%B8%E6%8C%82%E8%BD%BD"><strong>允许挂载</strong></RouteLink>，哪你将无法进行挂载，提示如下错误</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>Failed init storage: the site does not allow mounted</span></span>
<span class="line"><span>failed get objs: storage not init: the site does not allow mounted</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>(若)或者使用对方提供的<code v-pre>用户名&amp;密码</code>可以进行挂载，若对方允许挂载肯定是提供<code v-pre>用户名&amp;密码</code>或者开启了<RouteLink to="/zh/config/site.html#%E5%85%81%E8%AE%B8%E6%8C%82%E8%BD%BD"><strong>允许挂载</strong></RouteLink>，否则也不要强求</p>
<ul>
<li>v3.16.3 如何挂载非v3.16.3的低版本，暂时只能使用对方提供<code v-pre>用户名&amp;密码</code>来挂载了.</li>
</ul>
<hr>
<p><code v-pre>用户名&amp;密码</code>可以不用写也可以挂载，这样使用的是<code v-pre>guest</code>游客访问，如果对方未开启游客账户访问权限挂载时会提示错误(如下)</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">failed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> objs:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> failed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> list</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> objs:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> request</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> failed,code:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 400,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> message:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Key:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'LoginReq.Username'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Error:Field</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> validation</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> for</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Username'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> failed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> on</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'required'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tag</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>若是你开始使用的是<code v-pre>用户名&amp;密码</code>方式挂载的，后面你切换成了使用<code v-pre>元信息密码</code>方式挂载
<ul>
<li>你需要手动将之前自动填充的<code v-pre>令牌</code>清除，否则还是会使用<code v-pre>用户名&amp;密码</code>方式挂载</li>
</ul>
</li>
</ul>
</div>
<h3 id="元信息密码" tabindex="-1"><a class="header-anchor" href="#元信息密码"><span><strong>元信息密码</strong></span></a></h3>
<p>（元信息密码选项<strong>不是必填</strong>，给有需要的人说明）</p>
<p>你要挂载的AList路径有设置元信息密码</p>
<ul>
<li>例1：
<ul>
<li>你挂载的路径是 <code v-pre>/a</code></li>
<li>那么你要知道对方这个 <code v-pre>/a</code> 路径密码设置的是什么才能看到文件，不然进去后是空白</li>
</ul>
</li>
<li>例2：
<ul>
<li>你挂载的路径是 <code v-pre>/</code></li>
<li>但是对方根目录 <code v-pre>/</code>，没设置密码，但是其他的个别文件夹 比如 阿里,百度,123 这几个设置了密码，那么你可以填写这些的不过只能写一个密码.
<ul>
<li>如果上面提到的三个文件夹密码设置的不一样那么你填写的一个只能进其中是这个密码的文件夹，不是这个密码的就进不去了，应该都明白了.</li>
</ul>
</li>
</ul>
</li>
</ul>
<br/>
<h2 id="用户名" tabindex="-1"><a class="header-anchor" href="#用户名"><span><strong>用户名</strong></span></a></h2>
<p>你要挂载的<code v-pre>AList</code>用户名（账号）</p>
<h2 id="密码" tabindex="-1"><a class="header-anchor" href="#密码"><span><strong>密码</strong></span></a></h2>
<p>你要挂载的<code v-pre>AList</code>用户名对应的密码</p>
<div class="hint-container tip">
<p class="hint-container-title">温馨提示</p>
<p>看起来很麻烦，实际操作一下就了解了，写的详细是给小白看的（前提是在对方开启了<RouteLink to="/zh/config/site.html#%E5%85%81%E8%AE%B8%E6%8C%82%E8%BD%BD"><strong>允许挂载</strong></RouteLink>）</p>
<ol>
<li>
<p>访问路径优先使用 <a href="#%E6%A0%B9%E6%96%87%E4%BB%B6%E5%A4%B9id"><strong>根文件夹ID</strong></a> ,如果你挂载方式是使用的 <code v-pre>用户名&amp;密码</code>方式，<a href="#%E6%A0%B9%E6%96%87%E4%BB%B6%E5%A4%B9id"><strong>根文件夹ID</strong></a> 建议写<code v-pre>/</code>，否则你此用户名的访问权限和<a href="#%E6%A0%B9%E6%96%87%E4%BB%B6%E5%A4%B9id"><strong>根文件夹ID</strong></a> 不符会错误提示</p>
<ul>
<li>
<p>例<sup>1</sup>：<a href="#%E6%A0%B9%E6%96%87%E4%BB%B6%E5%A4%B9id"><strong>根文件夹ID</strong></a>：<code v-pre>file</code>，用户名的访问权限文件夹是：<code v-pre>video</code>，这样访问会提示错误</p>
</li>
<li>
<p>例<sup>2</sup>：<a href="#%E6%A0%B9%E6%96%87%E4%BB%B6%E5%A4%B9id"><strong>根文件夹ID</strong></a>：<code v-pre>file</code>，用户名的访问权限文件夹没有<code v-pre>file</code>，这样访问也会提示错误</p>
</li>
</ul>
</li>
<li>
<p><code v-pre>AList管理</code>在给予别人挂载的时,在新建用户时可以选择访问的文件夹，默认的<code v-pre>/</code></p>
<ul>
<li>用户挂载时候，<a href="#%E6%A0%B9%E6%96%87%E4%BB%B6%E5%A4%B9id"><strong>根文件夹ID</strong></a> 建议写<code v-pre>/</code>，这样就不会因为管理给了不同访问文件夹权限而提示错误</li>
</ul>
</li>
<li>
<p>最极端的情况，首选你知道此次添加的<code v-pre>用户名</code>能访问的有那文件夹权限，里面有没有，你想单独挂载的路径然后写到<a href="#%E6%A0%B9%E6%96%87%E4%BB%B6%E5%A4%B9id"><strong>根文件夹ID</strong></a></p>
<ul>
<li>如果你不知道<a href="#%E6%A0%B9%E6%96%87%E4%BB%B6%E5%A4%B9id"><strong>根文件夹ID</strong></a>可以先写<code v-pre>/</code>，去挂载页面看看你想单独挂载的路径，再后台设置修改即可</li>
</ul>
</li>
</ol>
</div>
<h3 id="令牌" tabindex="-1"><a class="header-anchor" href="#令牌"><span><strong>令牌</strong></span></a></h3>
<p>可以不用写，在填写<code v-pre>用户名&amp;密码</code>保存后会自动填充</p>
<br/>
<h3 id="代理range" tabindex="-1"><a class="header-anchor" href="#代理range"><span><strong>代理range</strong></span></a></h3>
<p>需要先启用 <code v-pre>Web代理</code> 或者 <code v-pre>Webdav本地代理</code> 才会生效</p>
<ul>
<li>目前仅适用于：<code v-pre>别名</code>、<code v-pre>中国移动云盘</code>、<code v-pre>AList V3</code>
<ul>
<li>具体功能说明：<strong><a href="https://github.com/alist-org/alist/pull/6496#issue-2309839607" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/pull/6496#issue-2309839607</a></strong></li>
</ul>
</li>
</ul>
</template>
<template #tab1="{ value, isActive }">
<h3 id="密码-1" tabindex="-1"><a class="header-anchor" href="#密码-1"><span><strong>密码</strong></span></a></h3>
<p>（密码选项<strong>不是必填</strong>，给有需要的人说明）</p>
<p>密码指的是元信息密码</p>
<p>你要挂载的Alist路径有设置元信息密码</p>
<ul>
<li>例1：
<ul>
<li>你挂载的路径是 <code v-pre>/a</code></li>
<li>那么你要知道对方这个 <code v-pre>/a</code> 路径密码设置的是什么才能看到文件，不然进去后是空白</li>
</ul>
</li>
<li>例2：
<ul>
<li>你挂载的路径是 <code v-pre>/</code></li>
<li>但是对方根目录 <code v-pre>/</code>，没设置密码，但是其他的个别文件夹 比如 阿里,百度,123 这几个设置了密码，那么你可以填写这些的不过只能写一个密码.
<ul>
<li>如果上面提到的三个文件夹密码设置的不一样那么你填写的一个只能进其中是这个密码的文件夹，不是这个密码的就进不去了，应该都明白了.</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="访问令牌" tabindex="-1"><a class="header-anchor" href="#访问令牌"><span><strong>访问令牌</strong></span></a></h3>
<p>（访问令牌选项<strong>不是必填</strong>，给有需要的人说明）</p>
<p>（这是让对方给你的，一般没有人会交出自己的token给外人）</p>
<ul>
<li>V2获取方式：前往V2文档进行查看 --&gt; <strong><a href="https://alist-doc.nn.ci/docs/driver/alist#token" target="_blank" rel="noopener noreferrer">https://alist-doc.nn.ci/docs/driver/alist#token</a></strong></li>
<li>V3获取方式：后台 --&gt; 设置 --&gt; 其他 --&gt; <strong><code v-pre>令牌</code></strong></li>
</ul>
</template>
</Tabs>
<h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-305" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></div></template>


