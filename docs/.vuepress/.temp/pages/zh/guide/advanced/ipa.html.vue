<template><div><h1 id="ipa-安装" tabindex="-1"><a class="header-anchor" href="#ipa-安装"><span>IPA 安装</span></a></h1>
<h2 id="_1-ipa原生安装" tabindex="-1"><a class="header-anchor" href="#_1-ipa原生安装"><span><strong>1.IPA原生安装</strong></span></a></h2>
<p>直接上传 ipa 文件即可。</p>
<p>但是对于 <strong>iOS 16 以上的</strong> 设备，你需要将 ipa 文件命名为：<code v-pre>原文件名@bundle-identifier.ipa</code>，即需要在原来的基础上加入<code v-pre>@bundle-identifier</code>，其中的 <code v-pre>bundle-identifier</code> 即 IPA 包中 <code v-pre>Info.plist</code> 的 <code v-pre>CFBundleIdentifier</code>。如：</p>
<ul>
<li>aszs@rn.notes.best.ipa</li>
</ul>
<p>推荐你使用 <a href="https://github.com/Xhofe/ipa-renamer" target="_blank" rel="noopener noreferrer">ipa-renamer</a> 自动快速地重命名你的 IPA 文件。</p>
<ul>
<li>如果你是手机用户也可以给IPA文件改名，但是你要会上述提到的格式才行，但是不提供手机改名软件请你自己解决...</li>
</ul>
<h3 id="tips" tabindex="-1"><a class="header-anchor" href="#tips"><span><strong>Tips</strong></span></a></h3>
<ul>
<li><mark>.ipa安装 需要 https 和 有效的证书</mark> ，不是随便一个包上传上去没签名就能安装的</li>
<li>爱思助手签名的无法使用在线安装，只能使用爱思助手安装（经群友测试）</li>
</ul>
<Tabs :data='[{"id":"电脑版如何改名"},{"id":"IOS 16手机如何改名"}]' tab-id="ipa">
<template #title0="{ value, isActive }">电脑版如何改名</template>
<template #title1="{ value, isActive }">IOS 16手机如何改名</template>
<template #tab0="{ value, isActive }">
<BiliBili bvid="BV1bT411N7tT" ratio="16:9" low-quality no-danmaku /><p><strong>视频若失效可以前往观看：<a href="https://b23.tv/oLvHHC8" target="_blank" rel="noopener noreferrer">https://b23.tv/oLvHHC8</a></strong></p>
</template>
<template #tab1="{ value, isActive }">
<BiliBili bvid="BV1kX4y1X7vo" /><p><strong>视频若失效可以前往观看：<a href="https://b23.tv/GxGG8Dn" target="_blank" rel="noopener noreferrer">https://b23.tv/GxGG8Dn</a></strong></p>
</template>
</Tabs>
<p><strong>安装演示</strong>：部署<strong>HTTPS</strong>和<strong>IPA文件</strong>已签名前提，如果是 <mark>IOS16自行改名</mark> 若自己无法安装请自行排查问题所在</p>
<ul>
<li><strong>安装演示使用环境</strong>： IOS15.4.1 iPhone12PM，个人证书，HTTPS</li>
</ul>
<ArtPlayer src="https://r2.izyt.cc/ios/ios_ts.m3u8" /><h2 id="_2-trollstore-巨魔-安装" tabindex="-1"><a class="header-anchor" href="#_2-trollstore-巨魔-安装"><span><strong>2. TrollStore(巨魔)安装</strong></span></a></h2>
<p><mark>需要AList版本 ≥ 3.12.2 及以上</mark>，支持安装TrollStore(巨魔)的设备（不含越狱设备）</p>
<p>已经支持更多设备请查看下方表格，图表内容来自 <a href="https://github.com/opa334/TrollStore" target="_blank" rel="noopener noreferrer"><strong>TrollStore</strong></a></p>
<p>图表信息可能更新不及时可以前往查看  <i class="fa-regular fa-hand-point-right" style="color: #B197FC;"></i> <a href="https://ios.cfw.guide/installing-trollstore" target="_blank" rel="noopener noreferrer">https://ios.cfw.guide/installing-trollstore</a></p>
<table>
<thead>
<tr>
<th style="text-align:center">开始</th>
<th style="text-align:center">截止</th>
<th style="text-align:center"><strong>arm64 (A8)</strong></th>
<th style="text-align:center">arm64 (A9-A11)</th>
<th style="text-align:center">arm64e (A12-A17/M1-M2)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">14.0 beta 1及更早</td>
<td style="text-align:center">14.0 beta 1及更早</td>
<td style="text-align:center">不支持</td>
<td style="text-align:center">不支持</td>
<td style="text-align:center">不支持</td>
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
<td style="text-align:center"><strong>即将发布</strong></td>
</tr>
<tr>
<td style="text-align:center">16.7</td>
<td style="text-align:center">16.7.8</td>
<td style="text-align:center">Not Applicable</td>
<td style="text-align:center">不支持</td>
<td style="text-align:center">不支持</td>
</tr>
<tr>
<td style="text-align:center">17.0 beta 1</td>
<td style="text-align:center">17.0 beta 4</td>
<td style="text-align:center">Not Applicable</td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollinstallerx" target="_blank" rel="noopener noreferrer">TrollInstallerX</a></td>
<td style="text-align:center"><strong>即将发布</strong></td>
</tr>
<tr>
<td style="text-align:center">17.0 beta 5</td>
<td style="text-align:center">17.0</td>
<td style="text-align:center">Not Applicable</td>
<td style="text-align:center"><a href="https://ios.cfw.guide/installing-trollstore-trollhelper" target="_blank" rel="noopener noreferrer">TrollHelper</a></td>
<td style="text-align:center"><strong>即将发布</strong></td>
</tr>
<tr>
<td style="text-align:center">17.0.1及更高</td>
<td style="text-align:center">17.0.1及更高</td>
<td style="text-align:center">Not Applicable</td>
<td style="text-align:center">不支持</td>
<td style="text-align:center">不支持</td>
</tr>
</tbody>
</table>
<p><span><a href="https://www.alipan.com/s/Z3mrsfdFY5h"><i class="fa-solid fa-party-horn fa-shake" style="color: #74C0FC;"></i> IPA Resources</a></span> 🎁</p>
<br/>
<h3 id="安装示例" tabindex="-1"><a class="header-anchor" href="#安装示例"><span><strong>安装示例</strong></span></a></h3>
<p>如果你要使用安装很简单，点击 <strong>TrollStore(巨魔)</strong> 按钮即可安装</p>
<p><img src="https://pic.rmb.bdstatic.com/bjh/ff1e47ebc1efe5a907dbfffabf4d5f67.gif" alt="gif" loading="lazy"></p>
<h3 id="其他说明" tabindex="-1"><a class="header-anchor" href="#其他说明"><span><strong>其他说明</strong></span></a></h3>
<ol>
<li>
<p>如果你点击 <strong>TrollStore(巨魔)</strong> 按钮后打开的是 Apple的放大镜是因为如下原因</p>
<ul>
<li>你的 <code v-pre>TrollStore</code> 版本号小于1.3+版本，建议直接更新到最新版</li>
<li>你的使用 URL 方案没有启用，若启用后记得点击第一个选项立即注销生效 <strong>（Rebuild Now）</strong>
<ul>
<li><img src="/img/advanced/TrollStore.jpg" alt="TrollStore" loading="lazy"></li>
</ul>
</li>
</ul>
</li>
<li>
<p>TrollStore URL唤醒格式是什么？</p>
<ul>
<li>
<blockquote>
<p><code v-pre>apple-magnifier://install?url=&lt;URL_to_IPA&gt;</code></p>
</blockquote>
</li>
</ul>
</li>
<li>
<p>这样安装有什么好处吗？</p>
<ul>
<li>解释见下面的流程图</li>
</ul>
</li>
</ol>
<Mermaid id="mermaid-430" code="eJxtUl1L22AUvu+vCHhrCrNGIZBBq/hRdzfvghetTdaysJQ0Q4VcuNFqY60trlA2B+1YZd2GOuim/Ur9Mzl506v9Bd/kREnBXJ2c85zzPOc5L8uyET2nKxLP2NY9aXS3NVVRXuuqJsG16X4vOV9Ne3RoD8pwaUGnCPXm/3Er4rXJirq3m01pOrOdiDD0K7xPv9FS+SwTF+GsRRot598H0q3sYFE/UCQmzsg5ReHn0ml5vqBr6luJn5OXloKY3ctl9Cy/kN+f31UVVaM1+RHHZlIFSqalDniGY7jQzEQwU5aXuWXuaWwsFpsdu5jf97tWxBfR+KtcQScfB3A8svsV17J26EYGuTJhUsKEsSouRB1zAuU/rnVjj25xjVUPB7We3T9xf5xD+cge/jbWxFgAhbvu9KoBFxOnfYwNa/5gnylcNNbFxah713PvLzCNJPTX/XaKzmP/uk/oJ+gFEGVsiBwlrMBJF8rt6ecOSiZfimGp0rvM7FkSIlKFz7JJzQjU4blPzen5tfc7HpBfTadWJ50hmuOjHPMTjA+NJDXHk166DJYaNujbgaNS2EJkSHrNmLD7Vai2KZD8HE6bf40t6htW6GqkeAv1s2e0VHtQu5ldaUUQXm6iPTRK+tGGIAgGvmHURNloHLbJ2Io8AD4+fOg="></Mermaid></div></template>


