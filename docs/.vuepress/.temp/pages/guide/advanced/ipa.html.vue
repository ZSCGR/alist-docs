<template><div><h1 id="ipa-install" tabindex="-1"><a class="header-anchor" href="#ipa-install"><span>IPA install</span></a></h1>
<h2 id="_1-ipa-native-installation" tabindex="-1"><a class="header-anchor" href="#_1-ipa-native-installation"><span><strong>1. IPA native installation</strong></span></a></h2>
<p>You can directly upload the ipa file.</p>
<p>But for <strong>ios&gt;=16</strong>, you need to name the ipa file: <code v-pre>original file name@bundle-identifier.ipa</code>, that is, you need to add <code v-pre>@bundle-identifier</code> on the original basis, in which <code v-pre>bundle-identifier</code> is the <code v-pre>CFBundleIdentifier</code> of Info.plist in the IPA package. Such as:</p>
<ul>
<li>aszs@rn.notes.best.ipa</li>
</ul>
<p>Recommended to use <a href="https://github.com/Xhofe/ipa-renamer" target="_blank" rel="noopener noreferrer">ipa-renamer</a> to rename your ipa files automatically and quickly.</p>
<ul>
<li>If you are a mobile phone user, you can also rename the IPA file, but you must know the format mentioned above, but there is no mobile phone renaming software, please solve it yourself...</li>
</ul>
<h3 id="tips" tabindex="-1"><a class="header-anchor" href="#tips"><span><strong>Tips</strong></span></a></h3>
<ul>
<li><mark>.ipa installation requires https and a valid certificate</mark> , not just a package can be installed without a signature</li>
</ul>
<Tabs :data='[{"id":"How to change the name of the computer version"},{"id":"how to change the name of the IOS 16 mobile phone"}]' tab-id="ipa">
<template #title0="{ value, isActive }">How to change the name of the computer version</template>
<template #title1="{ value, isActive }">how to change the name of the IOS 16 mobile phone</template>
<template #tab0="{ value, isActive }">
<BiliBili bvid="BV1bT411N7tT" ratio="16:9" low-quality no-danmaku /><p><strong>If the video fails, you can watch it here: <a href="https://b23.tv/oLvHHC8" target="_blank" rel="noopener noreferrer">https://b23.tv/oLvHHC8</a></strong></p>
</template>
<template #tab1="{ value, isActive }">
<BiliBili bvid="BV1kX4y1X7vo"/><p><strong>If the video fails, you can watch it here:<a href="https://b23.tv/GxGG8Dn" target="_blank" rel="noopener noreferrer">https://b23.tv/GxGG8Dn</a></strong></p>
</template>
</Tabs>
<p><strong>Installation Demo</strong>: Deploy <strong>HTTPS</strong> and <strong>IPA files</strong> are signed prerequisites, if <mark>IOS16 rename by yourself</mark> If you can’t install it yourself, please check the problem yourself</p>
<ul>
<li><strong>Installation demo environment</strong>: IOS15.4.1 iPhone12PM, personal certificate, HTTPS</li>
</ul>
<ArtPlayer src="https://r2.izyt.cc/ios/ios_ts.m3u8" /><h2 id="_2-trollstore-install" tabindex="-1"><a class="header-anchor" href="#_2-trollstore-install"><span><strong>2. TrollStore install</strong></span></a></h2>
<p><mark>Requires AList version ≥ 3.12.2 and above</mark>，Devices that support the installation of TrollStore (jailbroken devices are not explained here)</p>
<p>For more devices, please see the table below. The content of the chart comes from <a href="https://github.com/opa334/TrollStore" target="_blank" rel="noopener noreferrer"><strong>TrollStore</strong></a></p>
<p>Chart information update is uncertain, you can go to view <i class="fa-regular fa-hand-point-right" style="color: #B197FC;"></i>  <a href="https://ios.cfw.guide/installing-trollstore" target="_blank" rel="noopener noreferrer">https://ios.cfw.guide/installing-trollstore</a></p>
<table>
<thead>
<tr>
<th style="text-align:center">From</th>
<th style="text-align:center">To</th>
<th style="text-align:center"><strong>arm64 (A8)</strong></th>
<th style="text-align:center">arm64 (A9-A11)</th>
<th style="text-align:center">arm64e (A12-A17/M1-M2)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">14.0 beta 1and earlier</td>
<td style="text-align:center">14.0 beta 1and earlier</td>
<td style="text-align:center">Unsupported</td>
<td style="text-align:center">Unsupported</td>
<td style="text-align:center">Unsupported</td>
</tr>
<tr>
<td style="text-align:center">14.0 beta 2</td>
<td style="text-align:center">14.8.1</td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollinstallerx" target="_blank" rel="noopener noreferrer">TrollInstallerX</a></td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollinstallerx" target="_blank" rel="noopener noreferrer">TrollInstallerX</a></td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollhelperota" target="_blank" rel="noopener noreferrer">TrollHelperOTA</a></td>
</tr>
<tr>
<td style="text-align:center">15.0</td>
<td style="text-align:center">15.5 beta 4</td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollhelperota" target="_blank" rel="noopener noreferrer">TrollHelperOTA</a></td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollhelperota" target="_blank" rel="noopener noreferrer">TrollHelperOTA</a></td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollhelperota" target="_blank" rel="noopener noreferrer">TrollHelperOTA</a></td>
</tr>
<tr>
<td style="text-align:center">15.5</td>
<td style="text-align:center">15.5</td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollinstallermdc" target="_blank" rel="noopener noreferrer">TrollInstallerMDC</a></td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollinstallerx" target="_blank" rel="noopener noreferrer">TrollInstallerX</a></td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollhelperota" target="_blank" rel="noopener noreferrer">TrollHelperOTA</a></td>
</tr>
<tr>
<td style="text-align:center">15.6 beta 1</td>
<td style="text-align:center">15.6 beta 3</td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollhelperota" target="_blank" rel="noopener noreferrer">TrollHelperOTA</a></td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollhelperota" target="_blank" rel="noopener noreferrer">TrollHelperOTA</a></td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollhelperota" target="_blank" rel="noopener noreferrer">TrollHelperOTA</a></td>
</tr>
<tr>
<td style="text-align:center">15.6 beta 4</td>
<td style="text-align:center">15.6.1</td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollinstallermdc" target="_blank" rel="noopener noreferrer">TrollInstallerMDC</a></td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollinstallerx" target="_blank" rel="noopener noreferrer">TrollInstallerX</a></td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollhelperota" target="_blank" rel="noopener noreferrer">TrollHelperOTA</a></td>
</tr>
<tr>
<td style="text-align:center">15.7</td>
<td style="text-align:center">15.7.1</td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollinstallermdc" target="_blank" rel="noopener noreferrer">TrollInstallerMDC</a></td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollinstallerx" target="_blank" rel="noopener noreferrer">TrollInstallerX</a></td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollinstallerx" target="_blank" rel="noopener noreferrer">TrollInstallerX</a></td>
</tr>
<tr>
<td style="text-align:center">15.7.2</td>
<td style="text-align:center">15.8.2</td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollmisaka" target="_blank" rel="noopener noreferrer">TrollMisaka</a></td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollinstallerx" target="_blank" rel="noopener noreferrer">TrollInstallerX</a></td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollinstallerx" target="_blank" rel="noopener noreferrer">TrollInstallerX</a></td>
</tr>
<tr>
<td style="text-align:center">16.0 beta 1</td>
<td style="text-align:center">16.0 beta 3</td>
<td style="text-align:center">Not Applicable</td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollinstallerx" target="_blank" rel="noopener noreferrer">TrollInstallerX</a></td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollhelperota" target="_blank" rel="noopener noreferrer">TrollHelperOTA</a></td>
</tr>
<tr>
<td style="text-align:center">16.0 beta 4</td>
<td style="text-align:center">16.6.1</td>
<td style="text-align:center">Not Applicable</td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollinstallerx" target="_blank" rel="noopener noreferrer">TrollInstallerX</a></td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollinstallerx" target="_blank" rel="noopener noreferrer">TrollInstallerX</a></td>
</tr>
<tr>
<td style="text-align:center">16.7 RC</td>
<td style="text-align:center">16.7 RC</td>
<td style="text-align:center">Not Applicable</td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollhelper" target="_blank" rel="noopener noreferrer">TrollHelper</a></td>
<td style="text-align:center"><strong>Coming Soon</strong></td>
</tr>
<tr>
<td style="text-align:center">16.7</td>
<td style="text-align:center">16.7.8</td>
<td style="text-align:center">Not Applicable</td>
<td style="text-align:center">Unsupported</td>
<td style="text-align:center">Unsupported</td>
</tr>
<tr>
<td style="text-align:center">17.0 beta 1</td>
<td style="text-align:center">17.0 beta 4</td>
<td style="text-align:center">Not Applicable</td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollinstallerx" target="_blank" rel="noopener noreferrer">TrollInstallerX</a></td>
<td style="text-align:center"><strong>Coming Soon</strong></td>
</tr>
<tr>
<td style="text-align:center">17.0 beta 5</td>
<td style="text-align:center">17.0</td>
<td style="text-align:center">Not Applicable</td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollhelper" target="_blank" rel="noopener noreferrer">TrollHelper</a></td>
<td style="text-align:center"><strong>Coming Soon</strong></td>
</tr>
<tr>
<td style="text-align:center">17.0.1 and later</td>
<td style="text-align:center">17.0.1 and later</td>
<td style="text-align:center">Not Applicable</td>
<td style="text-align:center">Unsupported</td>
<td style="text-align:center">Unsupported</td>
</tr>
</tbody>
</table>
<p><span><a href="https://www.alipan.com/s/Z3mrsfdFY5h"><i class="fa-solid fa-party-horn fa-shake" style="color: #74C0FC;"></i> IPA Resources</a></span> 🎁</p>
<br/>
<h3 id="installation-example" tabindex="-1"><a class="header-anchor" href="#installation-example"><span><strong>Installation example</strong></span></a></h3>
<p>If you want to use the installation is very simple, click the *<em>TrollStore</em> button to install</p>
<p><img src="https://pic.rmb.bdstatic.com/bjh/ff1e47ebc1efe5a907dbfffabf4d5f67.gif" alt="gif" loading="lazy"></p>
<h3 id="other-instructions" tabindex="-1"><a class="header-anchor" href="#other-instructions"><span><strong>other instructions</strong></span></a></h3>
<ol>
<li>
<p>If you click the <strong>TrollStore</strong> button to open Apple's magnifying glass, it is because of the following reasons</p>
<ul>
<li>Your <code v-pre>TrollStore</code> version number is less than version 1.3+, it is recommended to update to the latest version directly</li>
<li>Your URL scheme is not enabled. If you enable it, remember to click the first option to log out immediately <strong>(Rebuild Now)</strong>
<ul>
<li><img src="/img/advanced/TrollStore.jpg" alt="TrollStore" loading="lazy"></li>
</ul>
</li>
</ul>
</li>
<li>
<p>What is the wake-up format of the TrollStore URL?</p>
<blockquote>
<p><code v-pre>apple-magnifier://install?url=&lt;URL_to_IPA&gt;</code></p>
</blockquote>
</li>
<li>
<p>Is there any benefit to this installation?</p>
<ul>
<li>See the flow chart below for explanation</li>
</ul>
</li>
</ol>
<Mermaid id="mermaid-421" code="eJxVUjtuwzAM3XMKHqC+QIcW+Tdpx25CBsWmYrWKKEg0jN6+lBQnsSeDfD8+u2maBVt2+AqHBNxjRND+D87o0VgGJhnaBNYn1s5ptuTfF5llHI1tryPD92oB8iyb5q2+peF8iTr0sFQU7cV67SBEajGlUwGs1c7GxNDR6B3pLhuDDsHZtjiAiXSF5ZdNfBLVjTLWV9DEwA4SGR51xCq5EdxWtaLwCyKQsRNADhI0OmwZkiRGuaYAhhAwgiTsGVqKHmPV2orW7uHJkZwD25Kv652s9+pnuAYRKgVNmLujTG+NVcpeKB/qNip5OsnDAnzKWaHou3mJK1XFZw0e1LqcmvmlpynlzeI8MEsN2al2koGBQjMEGOUwGrPeNZR+jwo9SxOPQ+RbFO6o5R8wFO+9V/ejkD6VNpk0bay/vDx5zYM8TvsHVAHSXA=="></Mermaid></div></template>


