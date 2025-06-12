<template><div><h1 id="seafile" tabindex="-1"><a class="header-anchor" href="#seafile"><span>Seafile</span></a></h1>
<p>Seafile uses libraries as a unit for version control and synchronization.</p>
<p>Use this driver to mount a Seafile repository to Alist, encrypted libraries are supported.</p>
<h2 id="root-folder-path" tabindex="-1"><a class="header-anchor" href="#root-folder-path"><span><strong>Root folder path</strong></span></a></h2>
<ol>
<li>
<p>If the <code v-pre>RepoId</code> is not set, this configuration specifies the name and sub-path of the library to access, defaulting to the root path: <code v-pre>/</code>, indicating displaying all libraries. Suppose you have a library named <code v-pre>example</code>, if you only want to mount the contents of this library, you can set this item to <code v-pre>/example</code>; if you only want to display a directory named <code v-pre>abc</code> within this library, you can set this item to <code v-pre>/example/abc</code>, and so on.</p>
</li>
<li>
<p>If the <code v-pre>RepoId</code> is set, this configuration is used to set the directory within the specified library, defaulting to the root directory: <code v-pre>/</code>.</p>
</li>
</ol>
<h2 id="address" tabindex="-1"><a class="header-anchor" href="#address"><span><strong>Address</strong></span></a></h2>
<p>Your Seafile server address, e.g.</p>
<ul>
<li><code v-pre>https://seacloud.cc</code></li>
<li><code v-pre>http://192.168.1.24:8000</code></li>
</ul>
<h2 id="username" tabindex="-1"><a class="header-anchor" href="#username"><span><strong>Username</strong></span></a></h2>
<p>The email or username used to log in to your Seafile server.</p>
<h2 id="password" tabindex="-1"><a class="header-anchor" href="#password"><span><strong>Password</strong></span></a></h2>
<p>The password for your email or username.</p>
<h2 id="repoid-library-id" tabindex="-1"><a class="header-anchor" href="#repoid-library-id"><span><strong>RepoId (Library ID)</strong></span></a></h2>
<p>Seafile library ID, such as: <code v-pre>86fc6316-3f2a-4c64-b6f5-d4d2b341bc9a</code></p>
<blockquote>
<p>Open the Seafile library in a browser, and you can see the library ID in the address bar.</p>
</blockquote>
<p>Can be left empty, if left empty, all visible libraries for the specified account will be displayed.</p>
<h2 id="repopwd-library-password" tabindex="-1"><a class="header-anchor" href="#repopwd-library-password"><span><strong>RepoPwd (Library Password)</strong></span></a></h2>
<p>Set the password used to access encrypted libraries, leave blank if no encrypted libraries are present.</p>
<p>After configuring this item, Alist will use this password to access all encrypted libraries for the specified account, without affecting access to unencrypted libraries. If you have multiple encrypted libraries using the same password, they can all be accessed normally.</p>
<p>Different passwords for different libraries within a storage are not currently supported. If you have such a requirement, you can add multiple Seafile storage to achieve this, allowing you to specify different passwords for accessing different encrypted libraries.</p>
<blockquote>
<p>If you still cannot access files within encrypted libraries after setting the library password, please check if the password and other configurations above are correct. It is recommended to restart Alist after modifying this password configuration to avoid caching issues.</p>
</blockquote>
<h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-88" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid></div></template>


