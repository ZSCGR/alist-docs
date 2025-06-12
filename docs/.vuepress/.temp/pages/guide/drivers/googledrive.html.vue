<template><div><h1 id="google-drive" tabindex="-1"><a class="header-anchor" href="#google-drive"><span>Google Drive</span></a></h1>
<p>Support team disk</p>
<h3 id="get-client-id-client-secret-refresh-token" tabindex="-1"><a class="header-anchor" href="#get-client-id-client-secret-refresh-token"><span><strong>Get client_id, client_secret, refresh_token</strong></span></a></h3>
<p>Refer to <a href="https://alist.nn.ci/tool/google/request" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/tool/google/request</a></p>
<h3 id="root-directory-file-id" tabindex="-1"><a class="header-anchor" href="#root-directory-file-id"><span><strong>Root directory file_id</strong></span></a></h3>
<p>Similar to Aliyundrive, the last string of the official website URL, such as:</p>
<p><img src="/img/drivers/googledrive.png" alt="google" loading="lazy"></p>
<h3 id="refresh-token-google-service-account-sa" tabindex="-1"><a class="header-anchor" href="#refresh-token-google-service-account-sa"><span><strong>refresh_token [Google Service Account/SA]</strong></span></a></h3>
<blockquote>
<p>You will be allowed to use Google Service Account/SA to access files in your Google Drive in v3.17.0 and later versions.</p>
</blockquote>
<blockquote>
<p>Simply fill in the <strong>refresh_token</strong> field with the <strong>path to the SA file</strong> or the <strong>folder where it is located</strong> to access your Google Drive using the Google Service Account/SA.</p>
</blockquote>
<p>The following methods will be allowed(recommend 1st):</p>
<ul>
<li><code v-pre>/accounts</code> This method will automatically use all SA files in that folder.</li>
<li><code v-pre>/accounts/the_sa_file.json</code></li>
</ul>
<p>As in the example above, all <strong>paths must be absolute</strong>, and the SA file name must also be *<strong>.json</strong></p>
<h4 id="generate-your-sa-file" tabindex="-1"><a class="header-anchor" href="#generate-your-sa-file"><span><strong>Generate your SA file</strong></span></a></h4>
<blockquote>
<p>For generating SA files, you can see the following link, <a href="https://github.com/xyou365/AutoRclone/blob/master/Readme.md" title="AutoRclone" target="_blank" rel="noopener noreferrer">xyou365/AutoRclone</a></p>
</blockquote>
<h2 id="detailed-text-tutorial" tabindex="-1"><a class="header-anchor" href="#detailed-text-tutorial"><span><strong>Detailed Text Tutorial</strong></span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">matters needing attention</p>
<ol>
<li>The machine that builds the Alist service must first be able to connect to the Google network disk (scientific connection is not possible, the program can be connected), or directly use a foreign server~</li>
<li>The test version of the application token seems to be invalid after a while (about 7 days). If a long-term stable token is required, it seems that the application can only be released?</li>
<li>A client ID and secret key can only get token once, and you can only recreate <strong>OAuth client ID</strong> when you get it again, and use a new client ID and secret key</li>
</ol>
</div>
<p><strong>First open <a href="https://alist.nn.ci/tool/google/request" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/tool/google/request</a> <code v-pre>1. First click Use own client and then create client (Create client)</code></strong></p>
<p><img src="/img/drivers/google/Google-0.png" alt="Google" loading="lazy"></p>
<p><strong>If you do not have a Google account, log in to your Google account first, and click <code v-pre>Enabled APIs and Services</code> or <code v-pre>Library</code> to choose one of the two options</strong></p>
<p><img src="/img/drivers/google/Google-1.png" alt="Google" loading="lazy"></p>
<p><strong>Click <code v-pre>Enabled APIs and Services</code> or <code v-pre>Library</code> to enter, then drop down to find <code v-pre>Google Driver API</code></strong></p>
<p><img src="/img/drivers/google/Google-2.png" alt="Google" loading="lazy"></p>
<p>Click <strong><code v-pre>Google Driver API</code></strong> to enter, see the diagram below to enable the API service</p>
<p><img src="/img/drivers/google/Google-3.png" alt="Google" loading="lazy"></p>
<p><strong><code v-pre>Google Driver API</code></strong> After enabling, we will create an application - look carefully~~~</p>
<p>If it is the first creation, there should be <strong><code v-pre>❗If you need to create an OAuth client ID, you must first configure the unified screen</code></strong>, let's go to configure it, click on the page  <strong><code v-pre>Configure the consent screen</code></strong> You can jump to the configuration interface.</p>
<p><mark>Look at the next picture for the configuration tutorial</mark> , come back to see this picture after configuration~</p>
<p>Callback parameter URL: <strong><a href="https://alist.nn.ci/tool/google/callback" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/tool/google/callback</a></strong></p>
<p><img src="/img/drivers/google/Google-4-1.png" alt="Google" loading="lazy"></p>
<p><strong><code v-pre>OAuth consent screen</code></strong> Configuration tutorial, if it has been configured, just ignore this picture (you can zoom in if you can’t see it clearly)</p>
<p><img src="/img/drivers/google/Google-6.png" alt="Google" loading="lazy"></p>
<p>After we create <strong><code v-pre>OAuth Client ID</code></strong>, click on the <strong><code v-pre>OAuth Client ID</code></strong> we just created and write whatever you want~ After entering, there are <code v-pre>Client ID</code> and <code v-pre>Client Secret</code></p>
<p><img src="/img/drivers/google/Google-7.png" alt="Google" loading="lazy"></p>
<p>After getting <code v-pre>Client ID</code> and <code v-pre>Client Secret</code></p>
<p>Let's go back to the beginning <strong><a href="https://alist.nn.ci/tool/google/request" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/tool/google/request</a></strong> and fill in <code v-pre>Client ID</code> and <code v-pre>Client Secret</code></p>
<p><mark>Remember to check the option behind <strong>Cloud Disk</strong> and <strong>Album</strong> when obtaining authorization</mark></p>
<p>Then start to log in to the account. If it prompts <strong>not verified by Google</strong>, click on the left to continue. After authorization, you will see our token refreshed.</p>
<p>After the above operations, we also got the <code v-pre>refresh token</code>, let’s go to <strong><code v-pre>Alist background</code></strong> Add account to add it~</p>
<p><img src="/img/drivers/google/Google-8.png" alt="Google" loading="lazy"></p>
<p>After adding an account in the background and saving it, we will mount it successfully~ Let's take a look</p>
<p>The left side is mounted by Alist, and the right side is the contents of Google Drive~ <strong>o(<em><sup>＠</sup></em>)o</strong></p>
<p><img src="/img/drivers/google/Google-13-1.png" alt="Google" loading="lazy"></p>
<details class="hint-container details"><summary>View video tutorial</summary>
<p><strong><a href="https://www.bilibili.com/video/BV18v4y1W7vo/" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV18v4y1W7vo/</a></strong></p>
</details>
<h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-168" code="eJyNkL1uwjAURnee4gpWHBQooFpKK1WMnapWHaIMjn1dWzhxajskefuaNCA6VMKL/75z7HsJIbOgg0EKn0pzBcJ2tbFMQIVBWQHaQ+tRQDmAQMlaE55nZ0ga23HFXID3lxnE4cNgEHgKUhtDF2Uplz44e0S6kLvdtCadFkHRddMvuTXWxTspb3C2nnAp99v99mrYbDZ/DQ9N/4u15ZdjjQItMIUcivGUp+OEtZi2ubGcGWic7YeCUupthdww77NsqirLsie2zmOtDvC71U2FdZhs5+ABJVypyycfd2OgTPPDpW3jE/Dx9lqQhJmArmZBnzAh/9s1P0YFzJNkJVzMOr/itqpsnahQmUWHpWAn0tgYHOY3TOz1ncwPx9ee1g=="></Mermaid></div></template>


