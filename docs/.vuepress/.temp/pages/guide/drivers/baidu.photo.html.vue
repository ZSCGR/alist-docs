<template><div><h1 id="moment-album" tabindex="-1"><a class="header-anchor" href="#moment-album"><span>Moment album</span></a></h1>
<h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie"><span><strong>Cookie</strong> <Badge text="v3.41.0" type="info" vertical="middle" /></span></a></h2>
<p>Log in <a href="https://photo.baidu.com" target="_blank" rel="noopener noreferrer">Yike Photo Album</a> Open F12 and find a request carrying a <code v-pre>Cookie</code> value and copy it</p>
<p><img src="/img/drivers/baidu/yike_cookie.png" alt="" loading="lazy"></p>
<br/>
<h2 id="album-id" tabindex="-1"><a class="header-anchor" href="#album-id"><span><strong>Album_id</strong></span></a></h2>
<ul>
<li>
<p><strong>When the default is empty, all albums in the root directory will be displayed directly.</strong></p>
</li>
<li>
<p>If you want to mount a single album, you need to fill in the following content</p>
</li>
<li>
<p>album_id should be filled in: {album_id}|{tid} Example: 4021858707431029901|316519298447849660</p>
</li>
<li>
<p>{album_id} : After entering the album you need to mount, the ID after viewing the top link /album is {album_id}</p>
<ul>
<li><a href="https://photo.baidu.com/photo/web/album/4021858707431029901" target="_blank" rel="noopener noreferrer">https://photo.baidu.com/photo/web/album/4021858707431029901</a></li>
<li><strong>4021858707431029901</strong> is {album_id}</li>
</ul>
</li>
<li>
<p>{tid}: Visit <strong><a href="https://photo.baidu.com/youai/album/v1/list?limit=1000" target="_blank" rel="noopener noreferrer">https://photo.baidu.com/youai/album/v1/list?limit=1000</a></strong> to get it.</p>
<ul>
<li>After entering the interface, <code v-pre>Ctrl+F</code> searches for the ID above, and you can see the corresponding {tid} in the following lines</li>
</ul>
</li>
</ul>
<br/>
<h2 id="display-type" tabindex="-1"><a class="header-anchor" href="#display-type"><span><strong>Display type</strong></span></a></h2>
<p>Choose according to your needs</p>
<br/>
<h2 id="delete-origin" tabindex="-1"><a class="header-anchor" href="#delete-origin"><span><strong>Delete origin</strong></span></a></h2>
<p><i class="fa-solid fa-triangle-exclamation fa-lg" style="color: #ff0000;"></i>‪‪ ‪ By default, it just removes the album, not the real deletion. If you enable this option to delete the file, it will be completely deleted. Please enable it carefully.</p>
<br/>
<h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-80" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid></div></template>


