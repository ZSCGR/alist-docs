<template><div><h1 id="user" tabindex="-1"><a class="header-anchor" href="#user"><span>User</span></a></h1>
<h2 id="username" tabindex="-1"><a class="header-anchor" href="#username"><span><strong>Username</strong></span></a></h2>
<p>Username for login</p>
<h2 id="password" tabindex="-1"><a class="header-anchor" href="#password"><span><strong>Password</strong></span></a></h2>
<p>Password for login</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Password is invalid for guest user.</p>
<p>If you enter an incorrect password 6 times in a row, the current IP will be blocked for 30 minutes and you will not be able to enter your account and password to log in. However, it will not affect other IPs. It will only target IPs that entered 6 incorrect passwords.</p>
<ul>
<li>Restarting will immediately remove the 30-minute ban time</li>
</ul>
</div>
<br/>
<h2 id="base-path" tabindex="-1"><a class="header-anchor" href="#base-path"><span><strong>Base path</strong></span></a></h2>
<p>The root path that users see when he/she log in</p>
<hr>
<p>Q: <strong>How to allow a user to see multiple folder paths?</strong></p>
<p>A: You can create a new <RouteLink to="/guide/advanced/alias.html">alias</RouteLink> storage, add all the paths you need to show the user to the alias, and then point to the newly created alias storage in the user path</p>
<br/>
<h2 id="permission" tabindex="-1"><a class="header-anchor" href="#permission"><span><strong>Permission</strong></span></a></h2>
<ul>
<li>Can see hides: Can see the hides files and folders</li>
<li>Access without password: Can access without password</li>
<li>Add offline download tasks: Add offline download tasks</li>
<li>Mkdir or upload: Can make directory or upload files</li>
<li>Rename: Can rename files and folders</li>
<li>Move: Can move files and folders</li>
<li>Copy: Can copy files and folders</li>
<li>Delete: Can delete files and folders</li>
<li>Webdav read: Can read files and folders with webdav</li>
<li>Webdav manage: Can manage files and folders with webdav</li>
<li>FTP read: Can read files and folders with FTP</li>
<li>FTP manage: Can manage files and folders with FTP</li>
<li>Read archives: Read the contents of the file in the compressed package
<ul>
<li>After turning on this option, compressed package format files will be previewed by default (as shown in the figure below), which will consume some server traffic, but will not download them all.</li>
<li>If you want to turn off the preferred preview of the compressed format, <mark><strong>Manage =&gt; Setting =&gt; Preview by default when opening archives</strong></mark>, this option is turned off, and the preference is the download mode</li>
</ul>
</li>
<li>Decompress: Decompress compressed package files online</li>
</ul>
<p><img src="/img/advanced/user_read_archives_light.png" alt="" data-mode="lightmode-only" loading="lazy"></p>
<p><img src="/img/advanced/user_read_archives_dark.png" alt="" data-mode="darkmode-only" loading="lazy"></p>
<br/>
<h2 id="disabled" tabindex="-1"><a class="header-anchor" href="#disabled"><span><strong>Disabled</strong></span></a></h2>
<p>After checking, this user will stop using it and cannot log in. The guest account is disabled by default. If you want to enable the guest account, please close it manually.</p>
<br/>
<h2 id="tips" tabindex="-1"><a class="header-anchor" href="#tips"><span><strong>Tips</strong></span></a></h2>
<ol>
<li>
<p>Are you worried that visitors can see all files? <RouteLink to="/faq/why.html#how-do-i-set-it-so-that-visitors-can-only-see-the-content-after-logging-in"><strong>Click to see how to set it up here</strong></RouteLink></p>
</li>
<li>
<p><strong><code v-pre>Guest user is disabled, login please</code></strong>: In order to protect your AList security, the guest access permission is closed, if you need guest access, open it yourself</p>
<ul>
<li>AList Manage --&gt; users --&gt; <code v-pre>guest</code> --&gt;  <strong>Disable</strong> uncheck</li>
</ul>
</li>
<li>
<p>Question about <strong><code v-pre>Copy/Upload</code></strong></p>
<ul>
<li>If you upload (including offline download and upload) large files, or upload a lot of files (hundreds or thousands), it is not recommended to use AList to operate, please go to the corresponding network disk official website to operate directly</li>
</ul>
</li>
<li>
<p>Non-admin users can manage offline download, copy, upload and other operations in the background</p>
<ul>
<li>AList needs to be upgraded to <Badge text="v3.39.1" type="info" vertical="middle" /> version, and admin can also view the user's task progress and operations</li>
</ul>
</li>
</ol>
<p><img src="/img/advanced/user_manage.png" alt="" loading="lazy"></p>
</div></template>


