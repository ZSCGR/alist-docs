<template><div><h1 id="onedrive-app" tabindex="-1"><a class="header-anchor" href="#onedrive-app"><span>OneDrive APP</span></a></h1>
<h2 id="benefits-and-precautions" tabindex="-1"><a class="header-anchor" href="#benefits-and-precautions"><span><strong>Benefits and Precautions</strong></span></a></h2>
<ol>
<li>
<p>The advantage is that the administrator is only authorized to log in once, and the same is used when adding parameters later. When adding, everything is the same except for the mailbox.</p>
<ul>
<li>For example, E5 has 25 5T accounts. After you log in and initialize in advance, you can directly use the parameters before the CV. You don’t have to get the refresh token every time as before, and it will expire after a long time</li>
<li>A1, A1P, etc. can distribute more accounts (500 - <strong>unlimited</strong>)</li>
</ul>
</li>
<li>
<p>After the administrator authorizes in this way, he can view the account of each member in the organization at will, which will leak his own files</p>
<ul>
<li>It is recommended to apply for OneDrive E5 to get better</li>
</ul>
</li>
</ol>
<hr>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>It is not applicable to the home version. If you are in the configuration process, it does not match the options that appear in the tutorial. It may not be supported</p>
</div>
<p>First log in with your personal or organizational account</p>
<p><strong><a href="https://entra.microsoft.com/#view/Microsoft_AAD_IAM/TenantOverview.ReactView?Microsoft_AAD_IAM_legacyAADRedirect=true" target="_blank" rel="noopener noreferrer">https://entra.microsoft.com/#view/Microsoft_AAD_IAM/TenantOverview.ReactView?Microsoft_AAD_IAM_legacyAADRedirect=true</a></strong></p>
<p>Login to get our<Badge text="tenant ID" type="info" vertical="middle" /></p>
<p><img src="/img/drivers/onedrive_app/onedrive_app0.png" alt="onedriveapp" loading="lazy"></p>
<h2 id="create-process" tabindex="-1"><a class="header-anchor" href="#create-process"><span><strong>Create process</strong></span></a></h2>
<div class="hint-container caution">
<p class="hint-container-title">Read the precautions carefully</p>
<p>Please read carefully the following <strong><code v-pre>serial numbers , view in sequence</code></strong> , if there is any error, please feedback in time</p>
</div>
<Tabs :data='[{"id":"1"},{"id":"2"},{"id":"3"},{"id":"4"},{"id":"5"}]' tab-id="onedrive_app">
<template #title0="{ value, isActive }">1</template>
<template #title1="{ value, isActive }">2</template>
<template #title2="{ value, isActive }">3</template>
<template #title3="{ value, isActive }">4</template>
<template #title4="{ value, isActive }">5</template>
<template #tab0="{ value, isActive }">
<ol>
<li>
<p>Register an application, choose the type yourself, it is recommended to choose the third</p>
</li>
<li>
<p>Redirect URL (callback parameter), select Web as the type, and fill in the parameters <strong><a href="https://entra.microsoft.com/TokenAuthorize" target="_blank" rel="noopener noreferrer">https://entra.microsoft.com/TokenAuthorize</a></strong> ,Otherwise, it will not be able to authorize later</p>
</li>
<li>
<p>After filling out, click on the registration below and you can see it after jumping<Badge text="client ID" type="info" vertical="middle" /></p>
</li>
</ol>
<p><img src="/img/drivers/onedrive_app/onedrive_app1.png" alt="onedriveapp" loading="lazy"></p>
</template>
<template #tab1="{ value, isActive }">
<p>Let's get a client secret key, just get it as shown in the figure below, remember<Badge text="secret key" type="info" vertical="middle" />save in time, it will only appear once</p>
<p><img src="/img/drivers/onedrive_app/onedrive_app3.png" alt="onedriveapp" loading="lazy"></p>
</template>
<template #tab2="{ value, isActive }">
<p>Once you have obtained the client secret key, go to authorize the <strong><code v-pre>API</code></strong> to be used, and follow the picture below to get it</p>
<p><img src="/img/drivers/onedrive_app/onedrive_app4.png" alt="onedriveapp" loading="lazy"></p>
</template>
<template #tab3="{ value, isActive }">
<p>After the API is authorized, we go to authorize the organization application</p>
<ul>
<li>Left sidebar ---&gt; Enterprise applications ---&gt; All applications ---&gt; <strong>{choose which application name we started to create}</strong> ---&gt; Permissions ---&gt; Click for <code v-pre>xxxx </code>Grant admin consent</li>
</ul>
<p><img src="/img/drivers/onedrive_app/onedrive_app5.png" alt="onedriveapp" loading="lazy"></p>
<p>matters needing attention</p>
<ul>
<li>If you start to register the application, the callback parameters are not the same, you may get an error when you click Authorization, remember to write the same</li>
<li>How to check whether the authorization is successful. If it is not authorized, the page will prompt <code v-pre>The application has not been found to have the authorization of the administrator's permission</code>. After the authorization is successful, refresh the page and you will see three API permissions, as shown in the figure below
<ul>
<li>The above is what it looks like when it is not authorized, and the following is what it looks like after authorization (just refresh the page after authorization)</li>
</ul>
</li>
</ul>
<p><img src="/img/drivers/onedrive_app/onedrive_app7.png" alt="onedriveapp" loading="lazy"></p>
</template>
<template #tab4="{ value, isActive }">
<p>From the beginning to the present, we have obtained the following parameters: tenant ID<sup>1</sup>, registered application<sup>2</sup>, client ID/secret key<sup>3</sup>, authorization API/administrator API<sup>4</sup></p>
<p>Then open the browser and finally authorize it through the following format, which are<Badge text="tenant ID" type="info" vertical="middle" /><Badge text="client ID" type="info" vertical="middle" /><Badge text="Callback URL" type="info" vertical="middle" />Change to your own final login to receive</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-html"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">https://login.microsoftonline.com/{tenant ID or common}/adminConsent?client_id={client ID}&#x26;redirect_uri={Callback URL}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="/img/drivers/onedrive_app/onedrive_app6.png" alt="onedriveapp" loading="lazy"></p>
<p>If you log in according to the spelled link and find that you are redirected to a blank page, such as the sample code and picture below, the authorization is successful, don’t worry</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>https://entra.microsoft.com/TokenAuthorize?admin_consent=True&#x26;tenant={Tenant ID}#</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="/img/drivers/onedrive_app/od_app_ok.png" alt="onedriveapp" loading="lazy"></p>
</template>
</Tabs>
<h2 id="fill-in-the-example" tabindex="-1"><a class="header-anchor" href="#fill-in-the-example"><span><strong>Fill in the example</strong></span></a></h2>
<p>Fill in the values obtained in the above process one by one. If you don’t know which email address it is, you can find it by <a href="#view-all-users-of-the-organization"><strong>view all users of the organization</strong></a></p>
<p><img src="/img/drivers/onedrive_app/onedrive_app_Denmo.png" alt="onedriveapp" loading="lazy"></p>
<BiliBili bvid="BV1Ro4y1s725" ratio="16:9" low-quality no-danmaku /><h2 id="view-all-users-of-the-organization" tabindex="-1"><a class="header-anchor" href="#view-all-users-of-the-organization"><span><strong>View all users of the organization</strong></span></a></h2>
<p>If you don't know how many users there are in your OneDrive organization, you can go to the link below to log in to the <code v-pre>admin</code> account to view</p>
<p><strong><a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users" target="_blank" rel="noopener noreferrer">https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users</a></strong></p>
<p><img src="/img/drivers/onedrive_app/onedrive_app_user.png" alt="onedriveapp" loading="lazy"></p>
<h2 id="error-message" tabindex="-1"><a class="header-anchor" href="#error-message"><span><strong>Error message</strong></span></a></h2>
<ul>
<li>Tips：<strong>Either scp or roles claim need to be present in the token</strong>  Error</li>
</ul>
<p>because you didn't do it in step <code v-pre>4</code> <Badge text="grant xxx administrator consent" type="info" vertical="middle" /> caused by,Pay attention to the tips below the fourth step</p>
<ul>
<li>Tips：<strong>failed get objs: failed to list objs: Unable to retrieve user's mysite URL</strong> Error</li>
</ul>
<p>The newly created <code v-pre>OneDrive</code> user account does not take effect in real time, Delay takes effect, wait for a few hours and try again <a href="https://github.com/alist-org/docs/discussions/189#discussioncomment-5928892" target="_blank" rel="noopener noreferrer"><strong>Case</strong></a></p>
<h2 id="add-onedrive-app-accounts-in-batches" tabindex="-1"><a class="header-anchor" href="#add-onedrive-app-accounts-in-batches"><span><strong>Add OneDrive_App accounts in batches</strong></span></a></h2>
<p>software used：<strong><a href="https://github.com/yzbtdiy/alist_batch" target="_blank" rel="noopener noreferrer">https://github.com/yzbtdiy/alist_batch</a></strong></p>
<details class="hint-container details"><summary>Fill in the parameters. If you don’t understand, you can watch the video below.</summary>
<p>Do not leave blank lines in the two configuration files, as this will also report an error</p>
<p><strong>config.yaml</strong></p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Your own AList site, which can be local or remote server IP or domain name, but cannot have "/" at the end</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ALIST_URL</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># The three parameters of auth are your AList administrator account password and refresh token</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">auth</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">USERNAME</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">PASSWORD</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">token</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ALIST_TOKEN</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># enable Turn on whichever option you need, and turn off the one you don’t need</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">aliyun</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    refresh_token</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ALI_YUNPAN_REFRESH_TOKEN</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">pikpak</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">PIKPAK_EMAIL</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">PIKPAK_PASSWORD</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># What we need here is onedrive_app, turn this on</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">onedrive_app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># global is global, such as E5 A1 A1P, Vianet is cn, German version is de, American version is us</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    region</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">global</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    tenants</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">          client_id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">client_id</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">          client_secret</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">client_secret</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">          tenant_id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">tenant_id</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Here you can mount different domains and different accounts at the same time, each domain can be written according to the above configuration</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Client ID Client Secret Key Tenant ID Needless to say?</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>onedrive_app.yaml</strong></p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Category 1 Mount x can be changed at will, which is equivalent to the mount path when adding storage</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 1 This refers to which domain/organization configuration in the above configuration file is to be used</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># What follows is your email account~ If you don't write ":/folder1", the root directory will be mounted, and if you write it, you will mount this directory</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Anyway, the format is: Mount path: domain/organization: email account: / folder directory (optional)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">Category</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    mount</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1:user1@xxx.onmicrosoft.com</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    mount2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1:user2@xxx.onmicrosoft.com:/folder1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    mount3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1:user2@xxx.onmicrosoft.com:/folder2</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># You can mount it in multiple different lists, and write according to the format</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">Category2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    mount11</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1:user1@xxx.onmicrosoft.com</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    mount22</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1:user2@xxx.onmicrosoft.com:/folder1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    mount33</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1:user2@xxx.onmicrosoft.com:/folder2</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<BiliBili bvid="BV1vc411V78S" ratio="16:9" low-quality no-danmaku /><h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-232" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid></div></template>


