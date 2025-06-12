<template><div><h1 id="meta" tabindex="-1"><a class="header-anchor" href="#meta"><span>Meta</span></a></h1>
<p>The configuration in the meta information is valid for <code v-pre>All Roles</code>, if you want to have the corresponding permissions for users, please go to <code v-pre>User</code>--&gt;<code v-pre>User Account</code> to modify the relative permissions</p>
<h3 id="path" tabindex="-1"><a class="header-anchor" href="#path"><span><strong>Path</strong></span></a></h3>
<p>The path for this meta to take effect</p>
<br/>
<h3 id="password" tabindex="-1"><a class="header-anchor" href="#password"><span><strong>Password</strong></span></a></h3>
<p>Password required to access this path</p>
<ul>
<li>Meta information password will not take effect when accessed using <code v-pre>WebDav</code></li>
</ul>
<div class="hint-container caution">
<p class="hint-container-title">Notes</p>
<p>If you want the password to be effective in subfolders, please check <code v-pre>Apply to sub folder</code> after the password. Do not check <code v-pre>Write</code> and then check <code v-pre>Apply to sub folder</code></p>
<p>The correct check example is shown below. If you configure the options correctly, if you check the wrong option <code v-pre>Write</code> and then check <code v-pre>Apply to sub folder</code>, it will cause anyone to have permission to write dangerous operations</p>
<p><img src="/img/advanced/meta/password_b.png" alt="" data-mode="lightmode-only" loading="lazy"><br>
<img src="/img/advanced/meta/password_h.png" alt="" data-mode="darkmode-only" loading="lazy"></p>
</div>
<br/>
<h3 id="write" tabindex="-1"><a class="header-anchor" href="#write"><span><strong>Write</strong></span></a></h3>
<p>Allow user to make directory, new file and upload files.</p>
<br/>
<h3 id="hide" tabindex="-1"><a class="header-anchor" href="#hide"><span><strong>Hide</strong></span></a></h3>
<p>The objects to hide of this path, One regular expression (in <code v-pre>Golang</code>) per line</p>
<ul>
<li>Meta information hiding can take effect when accessed using <code v-pre>WebDav</code></li>
</ul>
<br/>
<h3 id="readme" tabindex="-1"><a class="header-anchor" href="#readme"><span><strong>Readme</strong></span></a></h3>
<p>The Readme to render while enter this path, support markdown content or markdown link.</p>
<ul>
<li>
<p>Show at bottom of list</p>
</li>
<li>
<p>The automatically rendered file name is: <strong><code v-pre>readme.md</code></strong></p>
</li>
</ul>
<br/>
<h2 id="header" tabindex="-1"><a class="header-anchor" href="#header"><span><strong>Header</strong></span></a></h2>
<p>(new in v3.29.0) The Readme to render while enter this path, support markdown content or markdown link.</p>
<ul>
<li>Show at top of list</li>
<li>The automatically rendered file name is: <strong><code v-pre>top.md</code></strong>
<ul>
<li>Files can not be displayed in the list, for example <code v-pre>readme.md</code> is not displayed in the list</li>
<li>Backstage --&gt; Settings --&gt; Global --&gt; Hidden files --&gt; Add newline <code v-pre>/\/top.md/i</code></li>
</ul>
</li>
</ul>
<br/>
<h3 id="apply-to-sub-folder" tabindex="-1"><a class="header-anchor" href="#apply-to-sub-folder"><span><strong>Apply to sub folder</strong></span></a></h3>
<p>Apply this meta to sub folder of specific path</p>
<br/>
<h2 id="tips" tabindex="-1"><a class="header-anchor" href="#tips"><span>⚠️ Tips</span></a></h2>
<blockquote>
<p>Regarding hidden, users without permissions can search for hidden folders/files, solutions</p>
</blockquote>
<p>✅ If you want to hide the folder in a folder, create a new Yuan information alone, and select the folder we want to hide,，Hidden if you want to hide everything, write directly<code v-pre>.*</code></p>
<p>❌ You cannot directly fill in the meta information of the root directory <code v-pre>/</code>, and then fill in the folder we want to hide, the error case <a href="https://github.com/alist-org/alist/issues/4494" target="_blank" rel="noopener noreferrer">View details</a></p>
<p><img src="/img/advanced/hide-tips.png" alt="" loading="lazy"></p>
</div></template>


