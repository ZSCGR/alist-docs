<template><div><h1 id="kodbox" tabindex="-1"><a class="header-anchor" href="#kodbox"><span>KodBox</span></a></h1>
<p>KodBox is a file manager for web. It is also a web code editor, which allows you to develop websites directly within the web browser. Self-hosted file management system with muilt-cloud support. You can run kodbox either online or locally,on Linux, Windows or Mac based platforms. The only requirement is to have PHP 5 available.</p>
<p>Use this driver to mount a KodBox netdisk space to Alist.</p>
<h2 id="root-folder-path" tabindex="-1"><a class="header-anchor" href="#root-folder-path"><span><strong>Root folder path</strong></span></a></h2>
<p>Suppose you have a network disk space named <code v-pre>My Files</code>. If you remount the contents of the network disk space, you need to obtain the path corresponding to <code v-pre>My File</code>; if you re-display a name in the network disk space for For the directory of <code v-pre>abc</code>, you must obtain the path corresponding to <code v-pre>My File/abc</code>, and so on.</p>
<p>Example: How to get the path of KodBox network disk space <code v-pre>My File</code>, the result path is <code v-pre>{source:5}</code></p>
<blockquote>
<p>Open the KodBox network disk space in the browser. In the console mode, you can see the path corresponding to the network disk space. Do not leave it blank.<br>
<img src="/img/drivers/kodbox/kodbox_root_folder_path_en.jpg" alt="kodbox_root_folder_path" loading="lazy"></p>
</blockquote>
<h2 id="address" tabindex="-1"><a class="header-anchor" href="#address"><span><strong>Address</strong></span></a></h2>
<p>Your kodbox server address, e.g.</p>
<ul>
<li><code v-pre>https://kodcloud.cc</code></li>
<li><code v-pre>http://192.168.1.24:8000</code></li>
</ul>
<h2 id="username" tabindex="-1"><a class="header-anchor" href="#username"><span><strong>Username</strong></span></a></h2>
<p>The email or username used to log in to your KodBox server.</p>
<h2 id="password" tabindex="-1"><a class="header-anchor" href="#password"><span><strong>Password</strong></span></a></h2>
<p>The password for your email or username.</p>
<h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-56" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid></div></template>


