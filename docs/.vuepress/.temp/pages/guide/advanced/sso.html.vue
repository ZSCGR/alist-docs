<template><div><h1 id="third-party-single-sign-on" tabindex="-1"><a class="header-anchor" href="#third-party-single-sign-on"><span>Third-party single sign-on</span></a></h1>
<h3 id="single-sign-on-client-id" tabindex="-1"><a class="header-anchor" href="#single-sign-on-client-id"><span><strong>Single sign-on client id</strong></span></a></h3>
<p>client ID</p>
<h3 id="single-sign-on-client-secrets" tabindex="-1"><a class="header-anchor" href="#single-sign-on-client-secrets"><span><strong>Single sign-on client secrets</strong></span></a></h3>
<p>secrets ID</p>
<div class="hint-container warning">
<p class="hint-container-title">matters needing attention</p>
<ol>
<li>
<p>Remember to write and save the background parameters of AList. After writing and saving, you have to go back to the bottom of the personal data and there will be a button that needs to be bound, otherwise it cannot be used</p>
</li>
<li>
<p>Only one of the four types of single sign-on can be enabled temporarily. If you used other single sign-on methods before and then changed to a new single Unbind (just one click) and then bind the single sign-on method you want to use now.</p>
</li>
<li>
<p>If you use <strong><code v-pre>GitHub,Microsoft,Google,DingTalk</code></strong>, you only need to fill in the client ID and secret key, and select the corresponding platform in the options.</p>
<ul>
<li>If you use <strong><code v-pre>Casdoor</code></strong> the following parameters need to be filled in, just follow the tutorial to fill in</li>
</ul>
</li>
</ol>
</div>
<h2 id="registration-binding-single-sign-on" tabindex="-1"><a class="header-anchor" href="#registration-binding-single-sign-on"><span><strong>Registration binding single sign-on</strong></span></a></h2>
<Tabs :data='[{"id":"GitHub"},{"id":"Dingtalk"},{"id":"Microsoft"},{"id":"Google"},{"id":"Casdoor"},{"id":"Authentik"}]' tab-id="sso">
<template #title0="{ value, isActive }">GitHub</template>
<template #title1="{ value, isActive }">Dingtalk</template>
<template #title2="{ value, isActive }">Microsoft</template>
<template #title3="{ value, isActive }">Google</template>
<template #title4="{ value, isActive }">Casdoor</template>
<template #title5="{ value, isActive }">Authentik</template>
<template #tab0="{ value, isActive }">
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>If you want to use GitHub to log in, you first need the machine you built Alist to be able to connect to GitHub before you can call and use it, otherwise you cannot use it if the link is not connected</p>
</div>
<p>Open <strong><a href="https://github.com/settings/developers" target="_blank" rel="noopener noreferrer">https://github.com/settings/developers</a></strong> Click <strong><code v-pre>New OAuth App</code></strong></p>
<h3 id="register-oauth-instructions" tabindex="-1"><a class="header-anchor" href="#register-oauth-instructions"><span><strong>Register OAuth Instructions</strong></span></a></h3>
<ul>
<li>Application name
<ul>
<li>Write whatever you want to call it</li>
</ul>
</li>
<li><mark><strong>Homepage URL</strong></mark>
<ul>
<li>home URL address
<ul>
<li>Both <strong>http</strong> and <strong>https</strong> can be used</li>
</ul>
</li>
</ul>
</li>
<li>Application description
<ul>
<li>write whatever you want</li>
</ul>
</li>
<li><mark><strong>Authorization callback URL</strong></mark>
<ul>
<li>Callback URL address</li>
<li><strong>https://your_domain/api/auth/sso_callback</strong>
<ul>
<li>Both <strong>http</strong> and <strong>https</strong> can be used</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>Remember to get <strong>Client secrets</strong> after filling it out, and then fill it in the Alist background.</p>
<p>Remember to write and save the background parameters of AList. After writing and saving, you have to go back to the bottom of the personal data and there will be a button that needs to be bound, otherwise it cannot be used</p>
<h3 id="completely-fill-in-the-reference-schematic" tabindex="-1"><a class="header-anchor" href="#completely-fill-in-the-reference-schematic"><span><strong>Completely fill in the reference schematic</strong></span></a></h3>
<p><img src="/img/advanced/github.png" alt="sso" loading="lazy"></p>
<h3 id="github-login-video-tutorials" tabindex="-1"><a class="header-anchor" href="#github-login-video-tutorials"><span><strong>GitHub login Video Tutorials</strong></span></a></h3>
<BiliBili bvid="BV1KA41117m5" /><p><strong>If the video fails, you can watch it here: <a href="https://b23.tv/Fm8AkC5" target="_blank" rel="noopener noreferrer">https://b23.tv/Fm8AkC5</a></strong></p>
</template>
<template #tab1="{ value, isActive }">
<p>First open <strong><a href="https://open-dev.dingtalk.com/fe/app#/corp/app" target="_blank" rel="noopener noreferrer">https://open-dev.dingtalk.com/fe/app#/corp/app</a></strong></p>
<p>In the upper right corner, first select <code v-pre>New Application</code>, select <code v-pre>H5 Micro Application</code> as the type, fill in the content by yourself and click Confirm to create</p>
<p>Click on the new application and we will see the application credentials option, where <code v-pre>AppKey</code> is the client ID, and <code v-pre>AppSecret</code> is the client secret key</p>
<ul>
<li>Just fill in the corresponding parameters in the Alist background single sign-on</li>
</ul>
<p>Go to the left column and find <code v-pre>Login and Share</code> <mark>Fill in the callback parameters <strong><code v-pre>http://127.0.0.1:5234/api/auth/sso_callback</code></strong></mark></p>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="Callback">
    <span>Callback</span>
  </div>
  <div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">http://127.0.0.1:5244/api/auth/sso_callback</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>
</div><ul>
<li>Note: I used the callback parameter here for local testing. <a href="http://127.x" target="_blank" rel="noopener noreferrer">http://127.x</a> When you use it, Write <strong>http(s)://your own domain name/api/auth/sso_callback</strong> when filling in and using it by yourself</li>
</ul>
<p>Write the callback parameters well. Let’s go to the left column and find <code v-pre>Privilege Management</code>, find <strong><code v-pre>Personal Information Read Permission of Address Book</code></strong> and click to authorize</p>
<p>Remember to write and save the background parameters of AList. After writing and saving, you have to go back to the bottom of the personal data and there will be a button that needs to be bound, otherwise it cannot be used</p>
<h3 id="completely-fill-in-the-reference-schematic-1" tabindex="-1"><a class="header-anchor" href="#completely-fill-in-the-reference-schematic-1"><span><strong>Completely fill in the reference schematic</strong></span></a></h3>
<p><img src="/img/advanced/dingding.png" alt="sso" loading="lazy"></p>
<p></p>
</template>
<template #tab2="{ value, isActive }">
<p>First open <strong><a href="https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade" target="_blank" rel="noopener noreferrer">https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade</a></strong></p>
<p>Then register to create an application, I won't say much here, you can see the complete schematic diagram</p>
<p>Account type must be selected: <strong>Account in any organizational directory (any Azure AD directory - multi-tenant)</strong></p>
<p>Microsoft callback parameters: must start with &quot;HTTPS&quot; or &quot;<a href="http://localhost" target="_blank" rel="noopener noreferrer">http://localhost</a> (I used localhost here for local testing)</p>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="Callback">
    <span>Callback</span>
  </div>
  <div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">http://localhost:5244/api/auth/sso_callback?method</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">=sso_get_token</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">http://localhost:5244/api/auth/sso_callback?method</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">=get_sso_id</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div>
</div><ul>
<li>Write <strong>http(s)://your own domain name/api/auth/sso_callback?method=sso_get_token</strong> when filling in and using it by yourself</li>
<li>Write <strong>http(s)://your own domain name/api/auth/sso_callback?method=get_sso_id</strong> when filling in and using it by yourself</li>
<li>Note: When adding a redirect URL to a new application, only one can be added. After the application is registered and registered, click on the application to see the options behind the redirect URI</li>
</ul>
<p>After filling it out, we click <code v-pre>Certificate and Password</code> on the left column to create a new <code v-pre>Client Password</code> to get our client secret key</p>
<ul>
<li>After the client password is created, the <strong><code v-pre>value</code></strong> parameter is our <code v-pre>client key</code>, remember to save it, it will not appear again if it appears once, if you don’t save it in time, just create a new client password</li>
</ul>
<p>The client ID is in <code v-pre>Overview</code> at the top of the left column, find the application (client) ID, which is the client ID we need to fill in the Alist</p>
<ul>
<li>We have got the client ID and secret key and fill them in the AList single sign-on configuration.</li>
</ul>
<p>Remember to write and save the background parameters of AList. After writing and saving, you have to go back to the bottom of the personal data and there will be a button that needs to be bound, otherwise it cannot be used</p>
<h3 id="completely-fill-in-the-reference-schematic-2" tabindex="-1"><a class="header-anchor" href="#completely-fill-in-the-reference-schematic-2"><span><strong>Completely fill in the reference schematic</strong></span></a></h3>
<p><img src="/img/advanced/weiruan.png" alt="sso" loading="lazy"></p>
<p></p>
</template>
<template #tab3="{ value, isActive }">
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>If you want to use Google to log in, you first need the machine you built Alist to be able to connect to Google before you can call and use it, otherwise you cannot use it if the link is not connected</p>
</div>
<ol>
<li>
<p>First open <strong><a href="https://console.cloud.google.com/projectselector2/apis/dashboard?hl=zh-cn" target="_blank" rel="noopener noreferrer">https://console.cloud.google.com/projectselector2/apis/dashboard?hl=zh-cn</a></strong></p>
</li>
<li>
<p>If you are using it for the first time, you need to create a new project first (just write whatever you want, skip it if it has already been created)</p>
</li>
<li>
<p>Then configure the <a href="#agree-to-screen-configuration">consent screen</a> (there is a separate instruction on how to configure the document, if it is already configured, skip it)</p>
</li>
<li>
<p>After configuring the unified screen, we click the credentials on the left, create credentials, and select OAuth client ID</p>
</li>
</ol>
<ul>
<li>Application Type Select Web Application, and write the name as you like</li>
<li>Then add our two callback parameters in the authorized redirect URI</li>
</ul>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="Callback">
    <span>Callback</span>
  </div>
  <div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">http://127.0.0.1:5244/api/auth/sso_callback?method</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">=get_sso_id</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">http://127.0.0.1:5244/api/auth/sso_callback?method</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">=sso_get_token</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div>
</div><ul>
<li>Write <strong>http(s)://your own domain name/api/auth/sso_callback?method=get_sso_id</strong> when filling in and using it by yourself</li>
<li>Write <strong>http(s)://your own domain name/api/auth/sso_callback?method=sso_get_token</strong> when filling in and using it by yourself</li>
</ul>
<p>After filling it out, click Create to get the OAuth client ID and secret key</p>
<ul>
<li>(It doesn't matter if you accidentally close it here, just click on the name of the application we created and enter it in the upper right position to see it)</li>
</ul>
<p>We have got the client ID and secret key and fill them in the AList single sign-on configuration.</p>
<p>Remember to write and save the background parameters of AList. After writing and saving, you have to go back to the bottom of the personal data and there will be a button that needs to be bound, otherwise it cannot be used</p>
<h4 id="agree-to-screen-configuration" tabindex="-1"><a class="header-anchor" href="#agree-to-screen-configuration"><span><strong>Agree to screen configuration</strong></span></a></h4>
<p>If it has been configured, just ignore this picture (you can zoom in if you can’t see it clearly)</p>
<p><img src="/img/drivers/google/Google-6.png" alt="Google" loading="lazy"></p>
<h3 id="completely-fill-in-the-reference-schematic-3" tabindex="-1"><a class="header-anchor" href="#completely-fill-in-the-reference-schematic-3"><span><strong>Completely fill in the reference schematic</strong></span></a></h3>
<p><img src="/img/advanced/google.png" alt="sso" loading="lazy"></p>
<p></p>
</template>
<template #tab4="{ value, isActive }">
<p>What is <code v-pre>Casdoor</code>? Yes, you can use other OAuth applications to log in. <a href="https://casdoor.org/docs/basic/server-installation" target="_blank" rel="noopener noreferrer"><strong>Self-deployment</strong></a> is open source and free, and official hosting requires payment.</p>
<p>Now, Casdoor supports many OAuth application providers, as many as dozens of kinds, you have seen and not seen</p>
<p><strong>GitHub open source link: <a href="https://github.com/casdoor/casdoor" target="_blank" rel="noopener noreferrer">https://github.com/casdoor/casdoor</a></strong></p>
<hr>
<p>After we enter <code v-pre>Casdoor</code>, we first create <strong>Organization</strong><sup>1</sup>, <strong>Token</strong><sup>2</sup>, <strong>Application</strong><sup>3</sup>, <strong>User</strong><sup>4</sup></p>
<p>Do not use the default organization (<strong>app-built-in</strong>) directly, because all users in this organization are global administrator accounts</p>
<p>Then fill in the <code v-pre>AList</code> backstage single sign-on option one by one. The user’s parameters are ignored for the time being. They are filled in when the personal data is bound to the single sign-on.</p>
<p><img src="/img/advanced/casdoor.png" alt="sso" loading="lazy"></p>
<p>After filling in the above parameters, we come to the personal data and click <code v-pre>Bind point single sign-on platform</code> to bind</p>
<p>Then the <code v-pre>Casdoor</code> window will pop up, we can enter our registered user name</p>
<p><img src="/img/advanced/casdoor-user.png" alt="sso" loading="lazy"></p>
<hr>
<h4 id="access-some-other-vendors-on-casdoor" tabindex="-1"><a class="header-anchor" href="#access-some-other-vendors-on-casdoor"><span><strong>Access some other vendors on Casdoor</strong></span></a></h4>
<p>In addition to the four that <code v-pre>AList</code> has already connected to <code v-pre>GitHub Dingding Google Microsoft</code>, it is also connected to <code v-pre>QQ Baidu Feishu WeChat/Enterprise WeChat Douyin Bilibili</code> and so on, all <a href="https://casdoor.org/docs/provider/oauth/overview" target="_blank" rel="noopener noreferrer"><strong>click Check out all the manufacturers that can be accessed here</strong></a>, of course, the four that <code v-pre>AList</code> has already accessed can also be added to <code v-pre>Casdoor</code></p>
<p><strong>View detailed tutorials on accessing other providers: <a href="https://anwen-anyi.github.io/index/09-ssologin.html" target="_blank" rel="noopener noreferrer">click to view</a></strong></p>
<details class="hint-container details"><summary>Direct iframe viewing</summary>
<iframe src="https://anwen-anyi.github.io/index/09-ssologin.html#%E6%8E%A5%E5%85%A5" name="iframe_a" scrolling="ok" frameborder="0" width="100%" height="1000" style="scrolling: no;1px solid #ccc; border-radius: 16px;"></iframe>
</details>
</template>
<template #tab5="{ value, isActive }">
<h2 id="authentik-setup" tabindex="-1"><a class="header-anchor" href="#authentik-setup"><span>Authentik Setup</span></a></h2>
<p><strong>Create a Provider for AList</strong></p>
<ol>
<li>Menu -&gt; Applications -&gt; Providers -&gt; Create</li>
<li>Select <code v-pre>OAuth2/OpenID Provider</code> and click next</li>
<li>Enter an application name, this guide assumes you will call the provider <code v-pre>AList</code></li>
<li>Select your authorization flow. The built-in <code v-pre>default-provider-authorization-implicit-consent</code> is acceptable</li>
<li>Make note of the <code v-pre>Client ID</code> and <code v-pre>Client Secret</code> fields as provided by Authentik - save these values for later</li>
<li>For Redirect UDIs/Origins, enter the following, replacing [your.alist.domain] with the FQDN for your AList installation:</li>
</ol>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="Callback">
    <span>Callback</span>
  </div>
  <div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">https://your.alist.domain/api/auth/sso_callback\?method</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">=sso_get_token</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">https://your.alist.domain/api/auth/sso_callback\?method</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">=get_sso_id</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div>
</div><pre><code>Please note the \ character before ? as an escape character for the regex used for this URI is mandatory.
</code></pre>
<ol start="7">
<li>Make note of the signing key selected as you will need it later. This guide assumes you will use the default <code v-pre>authentik Self-signed Certificate</code></li>
<li>Save the new provider</li>
</ol>
<p><strong>Create an Application for AList</strong></p>
<ol>
<li>Menu -&gt; Applications -&gt; Application -&gt; Create</li>
<li>Enter an application name, recommended <code v-pre>AList</code></li>
<li>An application slug of <code v-pre>alist</code> will be automatically selected for you. This guide assumes you will keep this value</li>
<li>Select the provider by name you selected in Provider Setup step 3 - <code v-pre>AList</code></li>
<li>Save the new application</li>
</ol>
<p><strong>Retrieve the JWT certificate</strong></p>
<ol>
<li>Menu -&gt; System -&gt; Certificates</li>
<li>Select the <code v-pre>&gt;</code> next to the <code v-pre>authentik Self-signed Certificate</code>. If you chose another certificate for the application, select that certificate instead</li>
<li>Click Download Certificate to get a copy of the public JWT key</li>
</ol>
<h2 id="alist-setup" tabindex="-1"><a class="header-anchor" href="#alist-setup"><span>AList Setup</span></a></h2>
<ul>
<li><strong>Sso login enabled:</strong> <code v-pre>yes</code></li>
<li><strong>Sso login platform:</strong> <code v-pre>OIDC</code></li>
<li><strong>Sso client id:</strong> [Client ID from Authentik]</li>
<li><strong>Sso client secret:</strong> [Client Secret from Authentik]</li>
<li><strong>Sso oidc username key:</strong> <code v-pre>preferred_username</code></li>
<li><strong>Sso organization name:</strong> <code v-pre>user</code></li>
<li><strong>Sso application name:</strong> <code v-pre>user</code></li>
<li><strong>Sso endpoint name:</strong> <code v-pre>https://your.authentik.domain/application/o/alist/</code>
<ul>
<li><strong>Note:</strong> Replace [your.authentik.domain] with the FQDN for your Authentik installation. Mind the trailing <code v-pre>/</code> at the end of the path. If you chose a different application slug in Authentik Application setup 3, substitute that here</li>
</ul>
</li>
<li><strong>Sso jwt public key:</strong> Open the certificate file downloaded in step 3.3 of the Authentik Application setup and paste the contents here. It will start with <code v-pre>-----BEGIN CERTIFICATE-----</code></li>
<li><strong>Sso compatability mode:</strong> <code v-pre>no</code></li>
</ul>
</template>
</Tabs>
<br/>
<h2 id="sso-automatically-registers-as-an-alist-account" tabindex="-1"><a class="header-anchor" href="#sso-automatically-registers-as-an-alist-account"><span><strong>SSO automatically registers as an AList account</strong></span></a></h2>
<ul>
<li><mark>AList Version &gt; <strong>v3.22.1</strong> New Features</mark></li>
</ul>
<p>Before using single sign-on to register as an AList account, we need to bind the single sign-on of AList first, the binding method is explained above</p>
<ul>
<li>
<p>Supports the <code v-pre>five</code> single sign-on methods mentioned above</p>
</li>
<li>
<p>Do not use the default organization (<strong>app-built-in</strong>) directly, because all users in this organization are global administrator accounts</p>
</li>
<li>
<p>Except <code v-pre>CASDOOR</code>, you only need to fill in the<code v-pre> Client id</code> and the <code v-pre>Client secrets</code>and the newly added single login account registered as Alist account configuration</p>
</li>
</ul>
<br/>
<h3 id="sso-full-fill-demo" tabindex="-1"><a class="header-anchor" href="#sso-full-fill-demo"><span><strong><i class="fa-solid fa-circle-0" style="color: #409eff;"></i>SSO Full Fill Demo</strong></span></a></h3>
<p>Please refer to the detailed description below for how to fill in, the schematic diagram is just a reference for filling in and not suitable for everyone’s user habits</p>
<p><img src="/img/advanced/sso-add.png" alt="" loading="lazy"></p>
<br/>
<h3 id="sso-auto-register" tabindex="-1"><a class="header-anchor" href="#sso-auto-register"><span><strong><i class="fa-solid fa-circle-1" style="color: #409eff;"></i>SSO auto register</strong></span></a></h3>
<p>If we want SSO single sign-on to be registered as an AList account, we need to enable this option before it can be used</p>
<br/>
<h3 id="sso-default-dir" tabindex="-1"><a class="header-anchor" href="#sso-default-dir"><span><strong><i class="fa-solid fa-circle-2" style="color: #409eff;"></i>SSO default dir</strong></span></a></h3>
<p>That is to say, the default path used by the registered account is equivalent to the <code v-pre>Base path</code> in the AList user settings.</p>
<p>It can be the root directory <code v-pre>/</code>, or the path <code v-pre>/path/test/Demo</code> specified by the user</p>
<p><img src="/img/advanced/sso-dir.png" alt="" loading="lazy"></p>
<br/>
<h3 id="sso-default-permission" tabindex="-1"><a class="header-anchor" href="#sso-default-permission"><span><strong><i class="fa-solid fa-circle-3" style="color: #409eff;"></i>SSO default permission</strong></span></a></h3>
<p>It is equivalent to which permissions are enabled by default for registered users, as shown below</p>
<p><img src="/img/advanced/sso-permission_b.png" alt="" data-mode="lightmode-only" loading="lazy"></p>
<p><img src="/img/advanced/sso-permission_h.png" alt="" data-mode="darkmode-only" loading="lazy"></p>
<p>The default is 0, no permission is enabled</p>
<p>If we need to enable some permissions during registration, we only need the sum of the numbers of different permissions</p>
<p>For example：</p>
<ol>
<li>We need to open the user's <code v-pre>WebDav reading</code> and <code v-pre>WebDav manage </code> by default, that is 256+512=768, we just fill in <code v-pre>768</code> in the options</li>
<li>If we need to open the three permissions of <code v-pre>Make dir or upload</code>, <code v-pre>Rename</code> and <code v-pre>Delete</code> by default when registering, then it is 8+16+128=152, we can fill in <code v-pre>152</code> in the background</li>
</ol>
<p>I won’t say much about the examples, just add the permissions you need</p>
<br/>
<h4 id="precautions-and-instructions" tabindex="-1"><a class="header-anchor" href="#precautions-and-instructions"><span><strong><i class="fa-solid fa-circle-4" style="color: #409eff;"></i>Precautions and instructions</strong></span></a></h4>
<p><strong>4.1-There is already this user in the AList user database</strong></p>
<table>
<thead>
<tr>
<th>username</th>
<th>password</th>
<th>base_path</th>
<th>role</th>
<th>permission</th>
<th>opt_secret</th>
<th>github_id</th>
<th>disabled</th>
<th>sso_id</th>
</tr>
</thead>
<tbody>
<tr>
<td>anyi</td>
<td>FzdDfkmU</td>
<td>/test1</td>
<td>0</td>
<td>3</td>
<td></td>
<td></td>
<td>0</td>
<td></td>
</tr>
<tr>
<td>anyi_<strong>dc188911</strong></td>
<td>RUCtgqCw</td>
<td>/test1</td>
<td>0</td>
<td>3</td>
<td></td>
<td></td>
<td>0</td>
<td><strong>dc18891</strong></td>
</tr>
</tbody>
</table>
<p>As shown in the above table, a string of redundant ids is added after the newly registered single sign-on user name</p>
<p>This is because the same user already exists in the AList user database, so the sso_id is also added after the user name</p>
<p>If your newly registered single sign-on user name does not exist in the AList user database, it will not add the sso_id after the name</p>
<br/>
<p><strong>4.2-What should I do if I don’t want the SSO account to be registered as an AList account?</strong></p>
<p>Just turn <code v-pre>SSO auto register</code> off,This will not affect the use of accounts that have been registered using Sso</p>
<br/>
<p><strong>4.3-If I turn off the single sign-on option, what should I do with the account registered with Sso?</strong></p>
<p>Don't worry, after using single sign-on to register and log in to AList, log in in the background, and find <code v-pre>personal information</code> after logging in</p>
<ul>
<li>You can modify <strong><code v-pre>username</code></strong> and <strong><code v-pre>password</code></strong> by yourself, save it after modification, so that you can log in with the AList account normally</li>
<li>At this time, you can click <code v-pre>Unbind Single Sign-On Platform</code>, you can unbind or not unbind, and the subsequent <a href="#sso-default-dir"><strong>default path</strong></a> and <a href="#sso-default-permission"><strong>default permissions</strong></a> of this user can only be modified by the administrator in the AList background user</li>
</ul>
<br/>
<p><strong>4.4-Why is this error code displayed when using sso?</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">400</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"The single sign on platform is not bound to any users: record not found"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">null</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is because <a href="#sso-auto-register">Single Sign-On Automatic Registration</a> is not enabled for the AList account, and the single sign-on cannot be registered as an AList account</p>
<ul>
<li>If you are an administrator, you can turn it on</li>
<li>If you are a user, you can contact the administrator to enable</li>
</ul>
<br/>
<h2 id="sso-compatibility-mode" tabindex="-1"><a class="header-anchor" href="#sso-compatibility-mode"><span><strong>Sso compatibility mode</strong></span></a></h2>
<p>AList single -point login is bound to Dingtalk, and then opens Alist in the <strong><code v-pre>Dingtalk</code></strong> application, When you log in, choose Dingtalk login and jump to your computer browser. After authorization, you find that there is no response, because the browser cannot jump to the Dingtalk application inner browser page</p>
<p>At this time, you need to open the <strong><code v-pre>sso compatability mode</code></strong> again to click on the login to log in successfully</p>
<p><strong>AList applied in Dingtalk and opened as shown in the figure：</strong></p>
<p><img src="/img/advanced/sso_cm.png" alt="" loading="lazy"></p>
<br/>
<h3 id="how-to-create-the-application-in-dingtalk-workbench" tabindex="-1"><a class="header-anchor" href="#how-to-create-the-application-in-dingtalk-workbench"><span><strong>How to create the application in Dingtalk workbench</strong></span></a></h3>
<p>A picture teaches you to create a new application and add it</p>
<ul>
<li>LOGO is not modified when the newly -built newly built, you can wait for the newly built and then modify <sup>(See_Figure_2)</sup></li>
<li>If you just browse AList in the Dingtalk application, you do n’t need a single -point login management, you do n’t need to set up a single -point login configuration, you can just add an application</li>
</ul>
<p><img src="/img/advanced/sso_add_app.png" alt="" loading="lazy"></p>
<br/>
<h4 id="modify-the-application-logo" tabindex="-1"><a class="header-anchor" href="#modify-the-application-logo"><span>Modify the application logo</span></a></h4>
<p>Open <a href="https://open-dev.dingtalk.com/fe/app#/corp/app" target="_blank" rel="noopener noreferrer"><strong>DingTalk open platform management</strong></a> Find your newly built app to modify the logo.</p>
<p><img src="/img/advanced/sso_fix_logo.png" alt="" loading="lazy"></p>
<br/>
<h3 id="redirect-url" tabindex="-1"><a class="header-anchor" href="#redirect-url"><span><strong>redirect url</strong></span></a></h3>
<p>After turning on <strong><code v-pre>Sso compatibility mode</code></strong> Then you need to log in to the corresponding software to modify the redirect url to change it to the two redirect url below</p>
<ul>
<li><code v-pre>GitHub</code> only needs to add one：<code v-pre>http(s)://You_Url/api/auth/sso_get_token</code></li>
<li><code v-pre>Microsoft</code> and<code v-pre> Google</code> both need to be added, you can add multiple Redirect urls, so you only need to add two Redirect URLs.</li>
</ul>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="New">
    <span>New</span>
  </div>
  <div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">http(s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)://You_Url/api/auth/get_sso_id</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">http(s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)://You_Url/api/auth/sso_get_token</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div>
</div><p>If you enable the <strong>Sso compatibility mode</strong> if you do not modify it, you will prompt <code v-pre>Invalid Redirect URL</code> Error</p>
</div></template>


