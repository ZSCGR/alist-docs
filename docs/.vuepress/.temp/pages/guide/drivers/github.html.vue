<template><div><h1 id="github-api" tabindex="-1"><a class="header-anchor" href="#github-api"><span>GitHub API</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>GitHub API does not support operating files larger than 100MiB and folders containing more than 100,000 sub-items.</p>
<p>All <code v-pre>.gitkeep</code> files will be managed by the driver and will be invisible to the user.</p>
<p>Operations on submodules are currently not supported.</p>
</div>
<h2 id="token" tabindex="-1"><a class="header-anchor" href="#token"><span><strong>Token</strong></span></a></h2>
<ol>
<li>Log in GitHub and visit <a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer">https://github.com/settings/tokens</a>.</li>
<li><img src="/img/drivers/github/1.png" alt="" loading="lazy"></li>
<li><img src="/img/drivers/github/2.png" alt="" loading="lazy"></li>
<li><img src="/img/drivers/github/3.png" alt="" loading="lazy"></li>
</ol>
<h2 id="owner" tabindex="-1"><a class="header-anchor" href="#owner"><span><strong>Owner</strong></span></a></h2>
<p>The owner of the repository. For example, if the URL of the repository is <code v-pre>github.com/AAA/BBB</code>, fill in <code v-pre>AAA</code> here.</p>
<h2 id="repo" tabindex="-1"><a class="header-anchor" href="#repo"><span><strong>Repo</strong></span></a></h2>
<p>The name of the repository. For example, if the URL of the repository is <code v-pre>github.com/AAA/BBB</code>, fill in <code v-pre>BBB</code> here.</p>
<h2 id="ref" tabindex="-1"><a class="header-anchor" href="#ref"><span><strong>Ref</strong></span></a></h2>
<p>A branch, a tag or a commit SHA. Only when a branch name is filled in is the driver writable. It defaults to the default branch if not filled.</p>
<h2 id="gh-proxy" tabindex="-1"><a class="header-anchor" href="#gh-proxy"><span><strong>Gh Proxy</strong></span></a></h2>
<p>Used to speed up downloading</p>
<ul>
<li>Download the content of <code v-pre>Raw</code> and <code v-pre>archive</code> and change it to <strong><a href="https://gh-proxy.com/raw.githubusercontent.com" target="_blank" rel="noopener noreferrer">https://gh-proxy.com/raw.githubusercontent.com</a></strong></li>
</ul>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="Copy">
    <span>Copy</span>
  </div>
  <div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">https://gh-proxy.com/raw.githubusercontent.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>
</div><div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="Copy">
    <span>Copy</span>
  </div>
  <div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">https://ghfast.top/raw.githubusercontent.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>
</div><div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="Copy">
    <span>Copy</span>
  </div>
  <div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">https://ghproxy.net/raw.githubusercontent.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>
</div><h2 id="gpg-private-key" tabindex="-1"><a class="header-anchor" href="#gpg-private-key"><span><strong>GPG private key</strong></span></a></h2>
<p>GPG private key, used to provide commit verifications. Verified commits will be marked with a green &quot;Verified&quot; label on the GitHub webpage. Use the following command to obtain it. Leave blank if verifications are not needed.</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">gpg</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --export-secret-key</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Key</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Pair</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">D></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="gpg-key-passphrase" tabindex="-1"><a class="header-anchor" href="#gpg-key-passphrase"><span><strong>GPG key passphrase</strong></span></a></h2>
<p>Passphrase to the GPG private key. Leave blank if there is none.</p>
<h2 id="committer-name" tabindex="-1"><a class="header-anchor" href="#committer-name"><span><strong>Committer name</strong></span></a></h2>
<p>Custom committer name, defaulting to the owner's of the token when not filled.</p>
<h2 id="committer-email" tabindex="-1"><a class="header-anchor" href="#committer-email"><span><strong>Committer email</strong></span></a></h2>
<p>Custom committer name, defaulting to the owner's of the token when not filled.</p>
<p>Required when &quot;Committer name&quot; is filled. Required to be empty when &quot;Committer name&quot; is empty.</p>
<h2 id="author-name" tabindex="-1"><a class="header-anchor" href="#author-name"><span><strong>Author name</strong></span></a></h2>
<p>Custom author name, defaulting to the owner's of the token when not filled.</p>
<h2 id="author-email" tabindex="-1"><a class="header-anchor" href="#author-email"><span><strong>Author email</strong></span></a></h2>
<p>Custom author name, defaulting to the owner's of the token when not filled.</p>
<p>Required when &quot;Author name&quot; is filled. Required to be empty when &quot;Author name&quot; is empty.</p>
<h2 id="commit-message" tabindex="-1"><a class="header-anchor" href="#commit-message"><span><strong>commit message</strong></span></a></h2>
<p>Custom commit message, supporting the following template variables：</p>
<ul>
<li><code v-pre>UserName</code>: the user operating the file.</li>
<li><code v-pre>ObjName</code>: the name of the file (or the folder) operated.</li>
<li><code v-pre>ObjPath</code>: the path to the file (or the folder) operated.</li>
<li><code v-pre>ParentName</code>: the name of the parent folder of the file (or the folder) operated.</li>
<li><code v-pre>ParentPath</code>: the path to the parent folder of the file (or the folder) operated.</li>
<li><code v-pre>TargetName</code>: (when renaming) new name. (when copying and moving) the target folder name.</li>
<li><code v-pre>TargetPath</code>: (when renaming) new path. (when copying and moving) the target path.</li>
</ul>
<h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-162" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid></div></template>


