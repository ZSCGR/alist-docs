<template><div><h1 id="_163-music-drive" tabindex="-1"><a class="header-anchor" href="#_163-music-drive"><span>163 Music Drive</span></a></h1>
<p>163 Music Drive can only upload music and other operations on the mobile phone, and the web page cannot operate</p>
<br/>
<h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie"><span><strong>Cookie</strong></span></a></h2>
<p>Open <strong><a href="https://music.163.com" target="_blank" rel="noopener noreferrer">https://music.163.com</a></strong> and then open the F12 developer mode</p>
<p>Open a request at will, just carry the <code v-pre>Cookie</code> to find the following two parameters and fill in the AList<code v-pre> Cookie</code></p>
<ul>
<li><strong>__csrf</strong> 、<strong>MUSIC_U</strong></li>
</ul>
<p><img src="/img/drivers/163/163_cookie.png" alt="" loading="lazy"></p>
<br/>
<h2 id="song-limit" tabindex="-1"><a class="header-anchor" href="#song-limit"><span><strong>Song Limit</strong></span></a></h2>
<p>You can only get 200 songs by default. If you exceed you, you can modify this option</p>
<br/>
<h3 id="precautions" tabindex="-1"><a class="header-anchor" href="#precautions"><span><strong>Precautions</strong></span></a></h3>
<ol>
<li>If there are many list files, it is recommended to open pagination loading, otherwise it will not be loaded</li>
<li>Cloud space can only upload audio format files, and cannot upload other format files</li>
</ol>
<br/>
<h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-53" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid></div></template>


