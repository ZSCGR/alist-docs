<template><div><h1 id="lanzou-cloud" tabindex="-1"><a class="header-anchor" href="#lanzou-cloud"><span>LanZou Cloud</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Lanzuo Network Disk has three types of <strong>modes (types)</strong>, which are <strong>accounts, Cookie</strong> and <strong>Url</strong></p>
<ul>
<li><strong>Account</strong> : You can display all the files of your own cloud disk, you only need to fill in the account password, which will automatically help you refresh the cookie</li>
<li><strong>cookie</strong> : All files in the network disk can be displayed, but the cookie of the network disk needs to be provided</li>
<li><strong>Url</strong> : only display the content in the link (you can mount it without providing a cookie)</li>
</ul>
<p>⚠️ It is recommended to use the <strong>Account</strong> method to mount：</p>
<ul>
<li>Cookie mode needs to manually update Cookie</li>
<li>Using the Url mode will always cause convulsions. I don’t know what’s going on and suddenly prompts</li>
</ul>
</div>
<h2 id="root-folder-id" tabindex="-1"><a class="header-anchor" href="#root-folder-id"><span><strong>root folder ID</strong></span></a></h2>
<p>Lanzuo cloud disk root directory ID, the default is <code v-pre>-1</code>，If you use <code v-pre>Url</code>Type to mount the root folder ID, please see the third item of <a href="#fill-in-instructions">Fill in instructions</a></p>
<ul>
<li><strong>Additional Folder ID</strong>
<ul>
<li>Two ways to obtain (see the picture below)</li>
<li>
<img src="/img/drivers/lanzou/lanzou2.gif" alt="LanZou folder_id" style="zoom:50%;" />
</li>
</ul>
</li>
</ul>
<h2 id="account" tabindex="-1"><a class="header-anchor" href="#account"><span><strong>Account</strong></span></a></h2>
<p>Just fill in your own Lanzou Cloud Account Password</p>
<h2 id="cooike" tabindex="-1"><a class="header-anchor" href="#cooike"><span><strong>Cooike</strong></span></a></h2>
<p>Log in to your <a href="https://pc.woozooo.com/" target="_blank" rel="noopener noreferrer"><strong>Lanzuo Cloud Disk</strong></a> account, then F12 to open the developer mode, you can find <code v-pre>Cookie</code>, there is no specific one, such as the left side of the picture Just click one and there will be <code v-pre>Cookie</code> in the blue part of the right picture.</p>
<p><img src="/img/drivers/lanzou/lanzou1.png" alt="lanzou" loading="lazy"></p>
<h2 id="share-link-and-share-password" tabindex="-1"><a class="header-anchor" href="#share-link-and-share-password"><span><strong>Share link and share password</strong></span></a></h2>
<ul>
<li><strong>Share link</strong>: Randomly generate a share link in the Lanzuo cloud disk
<ul>
<li>Small tip: <strong>lanzouX</strong> in the link, the last default <strong>X</strong> content sometimes cannot be opened in some areas, you can try to change it yourself, for example, change to i, x, u, t, etc. Anyway, try it out for yourself.</li>
</ul>
</li>
<li><strong>Share password</strong>: the password for the link</li>
</ul>
<h2 id="repair-file-info" tabindex="-1"><a class="header-anchor" href="#repair-file-info"><span><strong>Repair file info</strong></span></a></h2>
<p>If you need <strong>WebDav</strong> service, you need to open it</p>
<h2 id="error-message" tabindex="-1"><a class="header-anchor" href="#error-message"><span><strong>error message</strong></span></a></h2>
<p>Use cookie type or account type to add prompt <code v-pre>not find file page param</code> error because lanzou changed the domain name</p>
<ul>
<li>Solution: It is recommended to use account type to add
<ul>
<li>Change the sharing link to <code v-pre>https://wwop.lanzoul.com</code> and save it. If it still doesn't work, refresh the lower right corner.</li>
<li>lanzoul will also make changes in the future</li>
</ul>
</li>
</ul>
<h2 id="fill-in-instructions" tabindex="-1"><a class="header-anchor" href="#fill-in-instructions"><span><strong>Fill in instructions</strong></span></a></h2>
<ol>
<li>
<p><strong>Acount mode</strong>: Type selects <code v-pre>account</code>, fill in<code v-pre> account</code> and <code v-pre>password</code> options, and the <code v-pre>root folder ID</code> (the default is all files of the root directory)</p>
</li>
<li>
<p><strong>Cookie mode</strong>: Type selects <code v-pre>Cookie</code>, fill in<code v-pre> Cookie</code>, and the <code v-pre>root folder ID</code> (the default is all files of the root directory)</p>
</li>
<li>
<p><strong>URL mode</strong>: Type selects <code v-pre>Url</code>, fill in<code v-pre> ShareUrl</code> and <code v-pre>root folder ID</code> and<code v-pre>Share Password (if there is a password)</code></p>
<ul>
<li>
<p>The sharing link is 👉 <a href="https://xxx.lanzou.com/aaabbbccc" target="_blank" rel="noopener noreferrer">https://xxx.lanzou.com/aaabbbccc</a> 👈 in this format</p>
</li>
<li>
<p>Fill in <code v-pre>ShareUrl</code>: <a href="https://xxx.lanzou.com" target="_blank" rel="noopener noreferrer">https://xxx.lanzou.com</a></p>
</li>
<li>
<p>Fill in <code v-pre>root folder ID</code>: aaabbbccc</p>
</li>
<li>
<p>Share Password: if there is a password</p>
</li>
</ul>
</li>
</ol>
<p><img src="/img/drivers/lanzou/lanzou_add.png" alt="lanzou" loading="lazy"></p>
<h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-179" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid></div></template>


