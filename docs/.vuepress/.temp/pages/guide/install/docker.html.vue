<template><div><h1 id="use-docker" tabindex="-1"><a class="header-anchor" href="#use-docker"><span>Use Docker</span></a></h1>
<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>Install</span></a></h2>
<h4 id="docker-cli" tabindex="-1"><a class="header-anchor" href="#docker-cli"><span><strong>docker cli</strong></span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --restart=unless-stopped</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/alist:/opt/alist/data</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 5244:5244</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> PUID=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> PGID=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> UMASK=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">022</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"alist"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> xhofe/alist:latest</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose"><span><strong>docker compose</strong></span></a></h4>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'3.3'</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">services</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  alist</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'xhofe/alist:beta'</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    container_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">alist</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    volumes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'/etc/alist:/opt/alist/data'</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    ports</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'5244:5244'</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    environment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">PUID=0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">PGID=0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">UMASK=022</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    restart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">unless-stopped</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="env" tabindex="-1"><a class="header-anchor" href="#env"><span><strong>Env</strong></span></a></h4>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Default</th>
<th>Desc</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>PUID</code></td>
<td style="text-align:left"><code v-pre>0</code></td>
<td>User UID</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>PGID</code></td>
<td style="text-align:left"><code v-pre>0</code></td>
<td>User GID</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>UMASK</code></td>
<td style="text-align:left"><code v-pre>022</code></td>
<td><a href="https://en.wikipedia.org/wiki/Umask" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/Umask</a></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>RUN_ARIA2</code></td>
<td style="text-align:left"></td>
<td>Whether to run ARIA2 concurrently, default is <code v-pre>true</code> if aria2 is pre-installed, otherwise it is <code v-pre>false</code>.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>TZ</code></td>
<td style="text-align:left"></td>
<td>Default is the UTC time zone. If you want to specify a time zone, you can set this variable, for example: <code v-pre>Asia/Shanghai</code>.</td>
</tr>
</tbody>
</table>
<h4 id="image-versions" tabindex="-1"><a class="header-anchor" href="#image-versions"><span><strong>Image Versions</strong></span></a></h4>
<p>Stable version: <code v-pre>xhofe/alist:latest</code> or specify a specific version, such as <code v-pre>xhofe/alist:v3.41.0</code> <code v-pre>xhofe/alist:v3.40.0</code></p>
<p>Latest image version, please refer to <a href="https://hub.docker.com/r/xhofe/alist/tags" target="_blank" rel="noopener noreferrer">https://hub.docker.com/r/xhofe/alist/tags</a></p>
<p>Dev version: <code v-pre>xhofe/alist:beta</code></p>
<p>Pre-installed environment image suffix:</p>
<table>
<thead>
<tr>
<th style="text-align:left">Suffix</th>
<th>Desc</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>aio</code></td>
<td>An image that includes all of the following pre-installed environments.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ffmpeg</code></td>
<td>Pre-installed FFmpeg image for generating thumbnail for local storage</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>aria2</code></td>
<td>Pre-installed aria2 image for offline downloading.</td>
</tr>
</tbody>
</table>
<p>You can append a suffix using the <code v-pre>-</code> symbol after any of the mirror tags to switch to an image with the corresponding environment. For example, <code v-pre>xhofe/alist:latest-aio</code> <code v-pre>xhofe/alist:beta-aria2</code> <code v-pre>xhofe/alist:v3.40.0-ffmpeg</code></p>
<p>If the thumbnail generation function still does not work when using the pre-installed ffmpeg, please confirm:</p>
<ul>
<li>You are using local storage</li>
<li>Switched to grid view</li>
<li>The thumbnail switch in local storage driver settings is enabled</li>
<li>The configuration path for the thumbnail cache folder in local storage is correct, for example, <code v-pre>data/thumbnail</code></li>
</ul>
<p>When using a pre-installed aria2 mirror, you might see errors like the following in the alist logs:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>ERRO[2022-11-20 12:05:19] error [unaligned 64-bit atomic operation] while run task  [download http://xxx.com/xxx.png to [/ftp](/)]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>The solution is, if the CPU architecture is 64-bit, you can try to manually pull a 64-bit image or rebuild the container. If the CPU architecture is 32-bit, there is currently no available solution.</p>
<h2 id="see-the-admin-s-info" tabindex="-1"><a class="header-anchor" href="#see-the-admin-s-info"><span>See the admin's info:</span></a></h2>
<h4 id="lower-than-v3-25-0" tabindex="-1"><a class="header-anchor" href="#lower-than-v3-25-0"><span>Lower than v3.25.0</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> exec</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -it</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> alist</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ./alist</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> admin</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="higher-than-v3-25-0" tabindex="-1"><a class="header-anchor" href="#higher-than-v3-25-0"><span>Higher than v3.25.0</span></a></h4>
<p>Versions above 3.25.0 change the password to an encrypted hash value, and the password cannot be calculated directly. If the password is forgotten, it can only be re-<strong><code v-pre>randomly generated</code></strong> or <strong><code v-pre>manually set</code></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Randomly generate a password</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> exec</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -it</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> alist</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ./alist</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> admin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> random</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Manually set a password, `NEW_PASSWORD` refers to the password you need to set</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> exec</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -it</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> alist</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ./alist</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> admin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> NEW_PASSWORD</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="update" tabindex="-1"><a class="header-anchor" href="#update"><span><strong>Update</strong></span></a></h2>
<details class="hint-container details"><summary>docker-cli update</summary>
<ol>
<li>docker ps -a #View the container (find the ID of the Alist container)</li>
<li>docker stop ID #Stop Alist running, otherwise it cannot be deleted (this time the ID of the Alist container is d429749a6e69, it is different for each installation)</li>
<li>docker rm ID #Delete the Alist container (the data is still there as long as you don't delete it manually)</li>
<li>docker pull xhofe/alist:latest</li>
<li><a href="#docker-cli">Enter the installation command and click to view</a></li>
<li>The update is complete, go and have a look.. It's that simple</li>
</ol>
<p><strong>There is a missing step in the picture, it is step 4 in the tutorial....remember to execute</strong><br>
<img src="/img/faq/updocker.png" alt="docker" loading="lazy"></p>
</details>
<details class="hint-container details"><summary>docker-compose update</summary>
<ol>
<li>
<p>docker-compose pull</p>
</li>
<li>
<p>docker-compose up -d</p>
</li>
</ol>
</details>
<p>Q: My version is v3.x.x and I cannot upgrade to the latest version. <code v-pre>docker pull xhofe/alist:latest</code> does not work to pull the latest version. After changing to docker-compose, it is still version 3.x.x</p>
<p>A: The reason is that your docker has set up a mirror, and the latest version cannot be updated from the mirror, so modify /etc/docker/daemon.json and delete &quot;registry-mirrors&quot;: [&quot;mirror accelerator address&quot;]</p>
<ul>
<li>If deletion doesn’t work, you can consider replacing it with a <code v-pre>mirror acceleration address</code></li>
<li>Or simple and rude: when downloading, replace <code v-pre>xhofe/alist:latest</code> with <code v-pre>xhofe/alist:v3.16.3</code> (specify the version, the latest when writing the tutorial is 3.16.3)</li>
</ul>
<h3 id="compile-image" tabindex="-1"><a class="header-anchor" href="#compile-image"><span><strong>Compile Image</strong></span></a></h3>
<p>Install Docker, clone the repository, then navigate to the root directory of the repository. No further preparation is required.</p>
<Tabs :data='[{"id":"basic"},{"id":"build-arg"}]' tab-id="Docker-build">
<template #title0="{ value, isActive }">basic</template>
<template #title1="{ value, isActive }">build-arg</template>
<template #tab0="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> build</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> xhofe/alist:latest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> .</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> build</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> xhofe/alist:latest-ffmpeg</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --build-arg</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> INSTALL_FFMPEG=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> .</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</Tabs>
<p>Available build args:</p>
<table>
<thead>
<tr>
<th style="text-align:left"></th>
<th>Desc</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>INSTALL_FFMPEG=true</code></td>
<td>Install ffmpeg</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>INSTALL_ARIA2=true</code></td>
<td>Install aria2</td>
</tr>
</tbody>
</table>
</div></template>


