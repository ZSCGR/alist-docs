<template><div><h1 id="本机存储" tabindex="-1"><a class="header-anchor" href="#本机存储"><span>本机存储</span></a></h1>
<h2 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id"><span><strong>根文件夹ID</strong></span></a></h2>
<p>您要挂载的文件夹的路径。 例如：</p>
<ul>
<li>Linux: <code v-pre>/root</code></li>
<li>Windows: <code v-pre>C:</code></li>
</ul>
<h2 id="本地存储视频封面" tabindex="-1"><a class="header-anchor" href="#本地存储视频封面"><span><strong>本地存储视频封面</strong></span></a></h2>
<p>需要使用<code v-pre>ffmpeg</code> 工具来添加，暂时还不会（后续补充）</p>
<ul>
<li>需要使用AList版本 ≥ <a href="https://github.com/alist-org/alist/releases/tag/v3.12.0" target="_blank" rel="noopener noreferrer"><strong>v3.12.0</strong></a>
<ul>
<li>Add thumbnail for video with ffmpeg  -  by <a href="https://github.com/GodFinal" target="_blank" rel="noopener noreferrer"><strong>@GodFinal</strong></a> and <a href="https://github.com/Xhofe" target="_blank" rel="noopener noreferrer"><strong>@Xhofe</strong></a> in <a href="https://github.com/alist-org/alist/pull/3556" target="_blank" rel="noopener noreferrer"><strong>#3556</strong></a> <a href="https://github.com/alist-org/alist/commit/309d655" target="_blank" rel="noopener noreferrer"><strong>(309d6)</strong></a></li>
<li>Support both time and percent for video thumbnail  - by <a href="https://github.com/1024th" target="_blank" rel="noopener noreferrer"><strong>@1024th</strong></a> in <a href="https://github.com/AlistGo/alist/pull/7802" target="_blank" rel="noopener noreferrer"><strong>#7802</strong></a> <a href="https://github.com/AlistGo/alist/commit/31a74708" target="_blank" rel="noopener noreferrer">(<strong>31a74</strong>)</a></li>
</ul>
</li>
</ul>
<h2 id="回收站路径" tabindex="-1"><a class="header-anchor" href="#回收站路径"><span><strong>回收站路径</strong></span></a></h2>
<p>回收站的路径，如果为空则永久删除或保持“永久删除”</p>
<p>如果填写此路径在删除本地存储文件时会将文件移动到此文件夹內，让你有一次后悔的机会。</p>
<p>填写方式参考上述挂载路径的方式不同系统填写方式不同。</p>
<p><mark>如果不知道是否填写正确，可以先自己在测试环境进行测试一下再进行生产环境使用</mark></p>
<ul>
<li>Linux: <code v-pre>/root</code></li>
<li>Windows: <code v-pre>C:</code></li>
</ul>
<h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-76" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFZEOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqQ90QiqPS3N3NTcFG6CsbExqgkmBRUQbaVJ6UWJBRkKmSmphgrRCrFg0WRDMJWalwLlRj+bs+bZnF1Pdi9+PqEt1srKqjg/NzU5J7G42NYW4mVbW1u7RKNooLefdWx/sW7f0yXtULNAqlxS0xTgWmBOtDQDK0gyjIaYGxrkE6urB9T4sqFTTxeXaZnJ2UAtCkp6evopRZllqUXF+sn5ubn5eXoZJbk5yuWpSSmJZbrP1057PnWpEpIeYMgSqQcAEWS3Rg=="></Mermaid></div></template>


