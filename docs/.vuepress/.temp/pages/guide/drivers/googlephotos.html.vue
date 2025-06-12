<template><div><h1 id="google-photos" tabindex="-1"><a class="header-anchor" href="#google-photos"><span>Google Photos</span></a></h1>
<h2 id="root-folder-file-id" tabindex="-1"><a class="header-anchor" href="#root-folder-file-id"><span><strong>Root folder file_id</strong></span></a></h2>
<p>The root directory is root, and other directory IDs are unknown (<s>It seems that a separate album cannot be mounted</s> It has not been resolved yet <a href="https://github.com/alist-org/alist/discussions/3264#discussioncomment-4874536" target="_blank" rel="noopener noreferrer"><strong>Reference</strong></a>)</p>
<h2 id="get-client-id-client-secret" tabindex="-1"><a class="header-anchor" href="#get-client-id-client-secret"><span><strong>Get client_id, client_secret</strong></span></a></h2>
<p>Get the tool <a href="https://alist.nn.ci/tool/google/request" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/tool/google/request</a></p>
<p>How to get your own <code v-pre>client_id (client ID) client_secret (client secret key)</code> Go to <RouteLink to="/guide/drivers/googledrive.html"><strong>Google Drive</strong></RouteLink> which article</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Tip This app has not been verified by Google</p>
<p>You have been authorized to use an app that is currently in beta. Do not proceed unless you know the developer who invited you.</p>
<p>Let's click <strong>Continue</strong> on the left</p>
<p>Remember to check this option, otherwise an error will be reported, as explained in the following precautions</p>
<p><img src="/img/drivers/google/Google-photos2.png" alt="Googlephotos" loading="lazy"></p>
</div>
<p>It is more convenient now. In fact, when obtaining Google cloud disk authorization, select the album permission at the same time, and the token obtained at that time can also be used to mount the album~ kill two birds with one stone</p>
<p>Remember to enable <strong><code v-pre>Photos Library API</code></strong></p>
<ul>
<li><a href="https://console.cloud.google.com/apis/library/photoslibrary.googleapis.com" target="_blank" rel="noopener noreferrer">https://console.cloud.google.com/apis/library/photoslibrary.googleapis.com</a></li>
</ul>
<h2 id="mount-a-single-album-directory" tabindex="-1"><a class="header-anchor" href="#mount-a-single-album-directory"><span><strong>Mount a single album directory</strong></span></a></h2>
<p>According to <a href="https://alist.nn.ci/tool/google/request" target="_blank" rel="noopener noreferrer">above</a> obtained <strong>client ID</strong> and <strong>secret key</strong> and <strong>refresh_token</strong></p>
<p>We fill in <strong><a href="https://alist.nn.ci/tool/google/album" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/tool/google/album</a></strong> to get a single catalog ID for each of our Google Photos</p>
<ul>
<li>Root file ID (that is, the album ID): default root, display all, if you only want to display a single album, you can fill in the album ID you want to display</li>
<li>After we fill in, there will also be an <strong><code v-pre>access_token</code></strong> below. This can also be filled in the Alist background refresh token option and used. The refresh token obtained at the beginning can be used for both of them- <a href="https://github.com/alist-org/alist/discussions/3264#discussioncomment-5051171" target="_blank" rel="noopener noreferrer">Explanation</a></li>
</ul>
<h4 id="fill-in-the-example-diagram" tabindex="-1"><a class="header-anchor" href="#fill-in-the-example-diagram"><span><strong>Fill in the example diagram</strong></span></a></h4>
<p><img src="/img/drivers/google/Google-photos3.png" alt="Googlephotos" loading="lazy">#get-client-id-client-secret)</p>
<h2 id="two-notes" tabindex="-1"><a class="header-anchor" href="#two-notes"><span><strong>Two notes:</strong></span></a></h2>
<ol>
<li>
<p>failed get objs: failed to list objs: Request had insufficient authentication scopes.: []</p>
<ul>
<li>It's because you didn't check the album permission (see the picture mentioned above) <code v-pre>view and organize the content in your Google Photos media library, and upload content to the media library when obtaining authorization. Learn more</code></li>
<li>You get the <code v-pre>access_token</code> and the <code v-pre>refresh_token</code> without declearing the scope of <code v-pre>https://www.googleapis.com/auth/photoslibrary</code></li>
</ul>
</li>
<li>
<p>failed get objs: failed to list objs: Photos Library API has not been used in project ... before or it is disabled. Enable it by visiting <a href="https://console.developers.google.com/apis/api/photoslibrary.googleapis.com/overview" target="_blank" rel="noopener noreferrer">https://console.developers.google.com/apis/api/photoslibrary.googleapis.com/overview</a> then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry.: []</p>
<ul>
<li>because <strong><code v-pre>Photos Library API</code></strong> is not enabled in your project, Google Photos API</li>
</ul>
</li>
</ol>
<h3 id="finish" tabindex="-1"><a class="header-anchor" href="#finish"><span><strong>Finish</strong></span></a></h3>
<p><img src="/img/drivers/google/Google-photosend.png" alt="Googlephotos" loading="lazy"></p>
<h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-118" code="eJyNkL1uwjAURnee4gpWHBQooFpKK1WMnapWHaIMjn1dWzhxajskefuaNCA6VMKL/75z7HsJIbOgg0EKn0pzBcJ2tbFMQIVBWQHaQ+tRQDmAQMlaE55nZ0ga23HFXID3lxnE4cNgEHgKUhtDF2Uplz44e0S6kLvdtCadFkHRddMvuTXWxTspb3C2nnAp99v99mrYbDZ/DQ9N/4u15ZdjjQItMIUcivGUp+OEtZi2ubGcGWic7YeCUupthdww77NsqirLsie2zmOtDvC71U2FdZhs5+ABJVypyycfd2OgTPPDpW3jE/Dx9lqQhJmArmZBnzAh/9s1P0YFzJNkJVzMOr/itqpsnahQmUWHpWAn0tgYHOY3TOz1ncwPx9ee1g=="></Mermaid></div></template>


