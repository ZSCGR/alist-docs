<template><div><h1 id="trainbit" tabindex="-1"><a class="header-anchor" href="#trainbit"><span>Trainbit</span></a></h1>
<p><strong>Trainbit</strong> 官网：<a href="https://trainbit.com/" target="_blank" rel="noopener noreferrer">https://trainbit.com/</a></p>
<h2 id="aushellportal-apikey" tabindex="-1"><a class="header-anchor" href="#aushellportal-apikey"><span><strong>AUSHELLPORTAL ，Apikey</strong></span></a></h2>
<p>进入 Trainbit网页后，按F12打开开发者模式   在网络选项中随便打开一个刷新出来的数据，然后找到带有Cookie选项的都可以</p>
<p>填写参数对应的值即可</p>
<p><strong>AUSHELLPORTAL</strong>：<code v-pre>.AUSHELLPORTAL</code> <code v-pre> .AUSHELLPORTALws</code> 这两个参数的值都一样</p>
<p><strong>Apikey</strong>：<code v-pre>retkeyapi</code></p>
<p>(具体填写可以查看<a href="#%E8%AF%A6%E6%83%85%E5%A1%AB%E5%86%99%E7%A4%BA%E6%84%8F%E5%9B%BE">详情填写示意图</a>)</p>
<h2 id="根文件夹-id" tabindex="-1"><a class="header-anchor" href="#根文件夹-id"><span><strong>根文件夹 ID</strong></span></a></h2>
<ul>
<li><code v-pre>&lt;目录ID&gt;_&lt;目录uploadurl的q参数&gt;</code></li>
</ul>
<p>我们打开首页按F12，打开开发者模式，选择网络，搜索栏搜索 list，就能看到 &quot;<code v-pre>listoffiles</code>&quot;，点击，然后选择响应将里面的值，自己去格式化一下（不格式化也能用自己慢慢的寻找）<a href="#%E8%AF%A6%E6%83%85%E5%A1%AB%E5%86%99%E7%A4%BA%E6%84%8F%E5%9B%BE">详情填写示意图</a></p>
<ul>
<li>如何格式化：自行浏览器搜索 json在线格式化</li>
</ul>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span><strong>注意事项</strong></span></a></h2>
<ol>
<li>如果你是从<code v-pre>AList</code> 上传到 <code v-pre>trainbit</code> 的文件后缀后面会增加一个 <code v-pre>.delete_suffix</code>，不用担心</li>
<li>官网说免费用户文件下载15天后会删除文件，但是现在未进行文件删除，以防万一请勿存放重要文件，到时候导致文件丢失</li>
</ol>
<h2 id="详情填写示意图" tabindex="-1"><a class="header-anchor" href="#详情填写示意图"><span><strong>详情填写示意图</strong></span></a></h2>
<p><img src="/img/drivers/trainbit/Trainbit-1.png" alt="Trainbit" loading="lazy"></p>
<h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-68" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></div></template>


