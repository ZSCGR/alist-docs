<template><div><h1 id="baiduyun-share-link" tabindex="-1"><a class="header-anchor" href="#baiduyun-share-link"><span>BaiduYun Share Link</span></a></h1>
<p>Driver for BaiduYun share link, supports downloading but not uploading, using an unofficial api.</p>
<h2 id="settings" tabindex="-1"><a class="header-anchor" href="#settings"><span><strong>Settings</strong></span></a></h2>
<ol>
<li>
<p>You need to set <strong>surl</strong> and <strong>pwd</strong> to browse the directory, and you need to set BDUSS to download.</p>
</li>
<li>
<p><strong>surl</strong> is the part before <code v-pre>?</code> after the sharing address <code v-pre>pan.baidu.com/s/</code>, <strong>pwd</strong> fill in the 4-digit extraction code, and leave blank if there is no extraction code.</p>
</li>
<li>
<p><strong>surl</strong> and <strong>pwd</strong> can be filled in with any account, but the account of the <strong><code v-pre>BDUSS</code></strong> parameter must use <mark><strong>Baidu Super SVIP member</strong></mark></p>
</li>
</ol>
<p><img src="/img/drivers/baidu/add_bd_share.png" alt="" loading="lazy"></p>
<p>BDUSS is extracted from the cookie</p>
<ul>
<li>
<p>Method 1: <a href="http://pandownload.net/faq/cookie.html" target="_blank" rel="noopener noreferrer">Reference Tutorial</a> (the prefix <code v-pre>BDUSS=</code> is not required in this project).</p>
</li>
<li>
<p>Method 2<sup>recommended</sup>:</p>
<ul>
<li>
<img src="/img/drivers/baidu/BDUSS.png" alt="1" style="zoom:30%;" />
</li>
</ul>
</li>
</ul>
<h2 id="root-folder-file-id" tabindex="-1"><a class="header-anchor" href="#root-folder-file-id"><span><strong>Root folder file_id</strong></span></a></h2>
<p>The root folder to be mounted, the default is <code v-pre>/</code></p>
<p>If you want to mount other folders, please see the example below</p>
<p><img src="/img/drivers/baidu/bd_share_test.png" alt="" loading="lazy"></p>
<h2 id="qa" tabindex="-1"><a class="header-anchor" href="#qa"><span><strong>QA</strong></span></a></h2>
<table>
<thead>
<tr>
<th>setting</th>
<th>error message</th>
<th>tips</th>
</tr>
</thead>
<tbody>
<tr>
<td>surl</td>
<td><code v-pre>{&quot;errno&quot;:2,&quot;errtype&quot;:0}</code></td>
<td>invalid share link</td>
</tr>
<tr>
<td>pwd</td>
<td><code v-pre>{&quot;errno&quot;:-130,&quot;errtype&quot;:&quot;mispwd-9&quot;}</code></td>
<td>invalid password</td>
</tr>
<tr>
<td>BDUSS</td>
<td><code v-pre>{&quot;errno&quot;:9019,&quot;errmsg&quot;:&quot;need verify&quot;}</code></td>
<td>invalid BDUSS, get a new one</td>
</tr>
<tr>
<td>UA</td>
<td><code v-pre>{&quot;error_code&quot;:31326,&quot;error_msg&quot;:&quot;user is not authorized, hitcode:119&quot;}</code></td>
<td>invalid user-agent, set a non-browser UA(ex. netdisk) or use web proxy</td>
</tr>
<tr>
<td>down</td>
<td>Failed init storage: 200 OK; {&quot;errno&quot;:-130,&quot;</td>
<td>The content shared by this link may not be accessible because it involves infringement, pornography, vulgarity and other information!</td>
</tr>
</tbody>
</table>
<h2 id="developing" tabindex="-1"><a class="header-anchor" href="#developing"><span><strong>Developing</strong></span></a></h2>
<p>The api is from <a href="https://github.com/yuantuo666/baiduwp-php" target="_blank" rel="noopener noreferrer">github.com/yuantuo666/baiduwp-php</a>, an unofficial project.</p>
<p>We have developed the folder viewing and file downloading function, further developments are welcome.</p>
<p>Since we don't have an official document, there might be some compatible problems. You can give feedback on github.</p>
<p>We can't break those limits from Baidu and you should follow the official laws.</p>
<br/>
<h2 id="add-user-agent-usage-example" tabindex="-1"><a class="header-anchor" href="#add-user-agent-usage-example"><span><strong>Add &quot;User-Agent&quot; usage example</strong></span></a></h2>
<div class="hint-container caution">
<p class="hint-container-title">If you don't know how to set &quot;User-Agent&quot; see here</p>
<p><mark>The following methods are limited to Baidu super member users</mark></p>
<p><mark>Prompt again The following methods are limited to Baidu super member users</mark></p>
<p>It will only be useful if a member finishes modifying <strong><code v-pre>&quot;User-Agent&quot;</code></strong> (choose official and 302)</p>
<p>If you don’t change <strong><code v-pre>&quot;User-Agent&quot;</code></strong>, you can enable <mark>Web Agent</mark>, the disadvantage is that you need to build an Alist machine for transfer, that is to say, you need a large broadband to help you transfer</p>
<div>
    <p style="text-align: center;"><span>Tutorial on how to modify UA in web page 302 mode: <br/></span>On the left is<span style="color:red;font-weight: bold;font-size: xx-large;">『Official』</span>API，On the right is the<span style="color:blue;font-weight: bold;font-size: xx-large;">『Crack video』</span>API</p>
    <div class="image-preview">
        <video width="360" height="240" controls>
            <source src="https://r2.izyt.cc/alist/baidu/%E7%99%BE%E5%BA%A6%E5%AE%98%E6%96%B9%E6%8E%A5%E5%8F%A3.mp4" type="video/mp4">
        </video>
        <video width="360" height="240" controls>
            <source src="https://r2.izyt.cc/alist/baidu/%E7%99%BE%E5%BA%A6%E9%9D%9E%E5%AE%98%E6%96%B9%E6%8E%A5%E5%8F%A3.mp4" type="video/mp4">
        </video>
    </div>
</div>
<Tabs :data='[{"id":"Web plugin"},{"id":"Aria2"},{"id":"Motrix"}]' tab-id="ua">
<template #title0="{ value, isActive }">Web plugin</template>
<template #title1="{ value, isActive }">Aria2</template>
<template #title2="{ value, isActive }">Motrix</template>
<template #tab0="{ value, isActive }">
<ul>
<li>The advantage of using a browser plug-in to modify is that it can be played directly online, of course, downloading is also possible.</li>
</ul>
<p>Example <Badge text="1" type="info" vertical="middle" />: If you really don’t know it, you can take a look at an example on the web page: <strong><a href="https://www.bilibili.com/video/BV1UA4y1X7J8" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1UA4y1X7J8</a></strong></p>
<p>Example <Badge text="2" type="info" vertical="middle" />: Another plugin method covering 360, Chrome, Edge: <strong><a href="https://youtu.be/PP6b0WSzYMc" target="_blank" rel="noopener noreferrer">https://youtu.be/PP6b0WSzYMc</a></strong></p>
<p><img src="/img/drivers/baidu/bdUA.png" alt="alist" loading="lazy"></p>
</template>
<template #tab1="{ value, isActive }">
<ol>
<li>
<p>First follow the figure below to set the <strong><code v-pre>user-agent&quot; </code></strong>, and then click the button option in the lower right corner, click ** gear ** (local settings) to configure the parameters well</p>
</li>
<li>
<p>Then open the third button option in the lower right corner (<strong>Open the check box</strong>), and then go to the list to select the file we want to download</p>
</li>
<li>
<p>Select the files we need to download. After selecting, there will be a row of buttons. Select the second option on the right. One is sent to Aria2.</p>
</li>
</ol>
<p>If you use the webpage to modify the <strong><code v-pre>user-agent</code></strong>, you do not need to configure the <code v-pre>UA</code> of <mark><strong>Aria2</strong></mark>, and you can download it directly to Aria2</p>
<p><img src="/img/drivers/baidu/aria2-ua.png" alt="alist" loading="lazy"></p>
</template>
<template #tab2="{ value, isActive }">
<ol>
<li>First follow the figure below to set the <strong><code v-pre>user-agent&quot; </code></strong>, and then click the button option in the lower right corner, click ** gear ** (local settings) to configure the parameters well</li>
<li>Then open the third button option in the lower right corner (<strong>Open the check box</strong>), and then go to the list to select the file we want to download</li>
<li>Select the files we need to download. After selecting, there will be a row of buttons. Select the second option on the right. One is sent to Aria2.</li>
</ol>
<p>If you use the webpage to modify the <strong><code v-pre>user-agent</code></strong>, you do not need to configure the <code v-pre>UA</code> of <mark><strong>Motrix</strong></mark>, and you can download it directly to Aria2</p>
<ul>
<li>Motrix Download link：<a href="https://motrix.app/" target="_blank" rel="noopener noreferrer">Motrix Official website</a>，<a href="https://github.com/agalwood/Motrix" target="_blank" rel="noopener noreferrer">Motrix-GitHub</a></li>
</ul>
<p><img src="/img/drivers/baidu/motrix-ua.png" alt="alist" loading="lazy"></p>
</template>
</Tabs>
<h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-251" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid></div>
</div></template>


