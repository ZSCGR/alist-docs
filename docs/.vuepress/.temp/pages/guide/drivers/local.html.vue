<template><div><h1 id="local-storage" tabindex="-1"><a class="header-anchor" href="#local-storage"><span>Local storage</span></a></h1>
<h3 id="root-folder-path" tabindex="-1"><a class="header-anchor" href="#root-folder-path"><span><strong>Root folder path</strong></span></a></h3>
<p>The path of folder you wanted to mount. For example:</p>
<ul>
<li>Linux: <code v-pre>/root</code></li>
<li>Windows: <code v-pre>C:</code></li>
</ul>
<h2 id="local-storage-video-thumbnail" tabindex="-1"><a class="header-anchor" href="#local-storage-video-thumbnail"><span><strong>Local storage video thumbnail</strong></span></a></h2>
<p>You need to use the <code v-pre>ffmpeg</code> tool to add, I will not (wait for replenishment) for the time being</p>
<ul>
<li>You need to use AList version ≥ <a href="https://github.com/alist-org/alist/releases/tag/v3.12.0" target="_blank" rel="noopener noreferrer"><strong>v3.12.0</strong></a>
<ul>
<li>Add thumbnail for video with ffmpeg  -  by <a href="https://github.com/GodFinal" target="_blank" rel="noopener noreferrer"><strong>@GodFinal</strong></a> and <a href="https://github.com/Xhofe" target="_blank" rel="noopener noreferrer"><strong>@Xhofe</strong></a> in <a href="https://github.com/alist-org/alist/pull/3556" target="_blank" rel="noopener noreferrer"><strong>#3556</strong></a> <a href="https://github.com/alist-org/alist/commit/309d655" target="_blank" rel="noopener noreferrer"><strong>(309d6)</strong></a></li>
<li>Support both time and percent for video thumbnail  - by <a href="https://github.com/1024th" target="_blank" rel="noopener noreferrer"><strong>@1024th</strong></a> in <a href="https://github.com/AlistGo/alist/pull/7802" target="_blank" rel="noopener noreferrer"><strong>#7802</strong></a> <a href="https://github.com/AlistGo/alist/commit/31a74708" target="_blank" rel="noopener noreferrer">(<strong>31a74</strong>)</a></li>
</ul>
</li>
</ul>
<h2 id="recycle-bin-path" tabindex="-1"><a class="header-anchor" href="#recycle-bin-path"><span><strong>Recycle bin path</strong></span></a></h2>
<p>path to recycle bin, delete permanently if empty or keep 'delete permanently'</p>
<p>If you fill in this path, you will move the file into the folder when deleting the local storage file, so that you have a chance to regret it.</p>
<p>The method of filling in the above -mentioned mounting path is different from different system filling methods.</p>
<p><mark>If you do n’t know if you fill in it correctly, you can test it yourself first and then use the production environment to use it yourself.</mark></p>
<ul>
<li>Linux: <code v-pre>/root</code></li>
<li>Windows: <code v-pre>C:</code></li>
</ul>
<h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-76" code="eJyNkL1uwjAURnee4gpWHBQooFpKK1WMnapWHaIMjn1dWzhxajskefuaNCA6VMKL/75z7HsJIbOgg0EKn0pzBcJ2tbFMQIVBWQHaQ+tRQDmAQMlaE55nZ0ga23HFXID3lxnE4cNgEHgKUhtDF2Uplz44e0S6kLvdtCadFkHRddMvuTXWxTspb3C2nnAp99v99mrYbDZ/DQ9N/4u15ZdjjQItMIUcivGUp+OEtZi2ubGcGWic7YeCUupthdww77NsqirLsie2zmOtDvC71U2FdZhs5+ABJVypyycfd2OgTPPDpW3jE/Dx9lqQhJmArmZBnzAh/9s1P0YFzJNkJVzMOr/itqpsnahQmUWHpWAn0tgYHOY3TOz1ncwPx9ee1g=="></Mermaid></div></template>


