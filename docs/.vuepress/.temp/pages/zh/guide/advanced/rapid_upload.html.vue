<template><div><h1 id="秒传" tabindex="-1"><a class="header-anchor" href="#秒传"><span>秒传</span></a></h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span><strong>介绍</strong></span></a></h2>
<p><strong>秒传</strong> 就是两个云盘之间的文件可以快速相互上传，不用等待，下面介绍一下都有哪些可以相互秒传 <strong><sup>v3.29.0新增</sup></strong></p>
<p><mark>有个前提，就是A网盘需要秒传的文件，在B网盘已经有了，才可以进行秒传，否则就是正常上传。</mark></p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p><i class="fa-solid fa-square-left fa-bounce" style="color: rgb(13, 109, 252)"></i> <strong>左侧</strong>为来源网盘、<i class="fa-solid fa-square-arrow-up fa-bounce" style="color: rgb(13, 109, 252)"></i> <strong>顶部</strong>为目标网盘</p>
</div>
<table>
<thead>
<tr>
<th style="text-align:center"></th>
<th style="text-align:center">阿里云盘</th>
<th style="text-align:center">115</th>
<th style="text-align:center">百度云盘<sup>(5)</sup></th>
<th style="text-align:center">天翼云盘</th>
<th style="text-align:center">迅雷云盘</th>
<th style="text-align:center">PikPak</th>
<th style="text-align:center">谷歌云盘</th>
<th style="text-align:center">OneDrive</th>
<th style="text-align:center">本地存储</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">本地存储</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">🚫</td>
</tr>
<tr>
<td style="text-align:center">阿里云盘</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">❓</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">🚫</td>
</tr>
<tr>
<td style="text-align:center">115</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">❓</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">🚫</td>
</tr>
<tr>
<td style="text-align:center">百度云盘</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❓</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">🚫</td>
</tr>
<tr>
<td style="text-align:center">天翼云盘</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">🚫</td>
</tr>
<tr>
<td style="text-align:center">迅雷云盘</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❓</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">🚫</td>
</tr>
<tr>
<td style="text-align:center">PikPak</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❓</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">🚫</td>
</tr>
<tr>
<td style="text-align:center">谷歌云盘</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">🚫</td>
</tr>
<tr>
<td style="text-align:center">OneDrive</td>
<td style="text-align:center">❔</td>
<td style="text-align:center">❔</td>
<td style="text-align:center">❔</td>
<td style="text-align:center">❔</td>
<td style="text-align:center">❔</td>
<td style="text-align:center">❔</td>
<td style="text-align:center">❔</td>
<td style="text-align:center">❔</td>
<td style="text-align:center">🚫</td>
</tr>
</tbody>
</table>
<ul>
<li>注<sup>(1)</sup>：这里提到的<strong>阿里云盘</strong>是指的<RouteLink to="/zh/guide/drivers/aliyundrive_open.html"><strong>阿里云盘Open</strong></RouteLink></li>
<li>注<sup>(2)</sup>：<strong>OneDrive</strong> 是因为已经没有了帐号暂时没有进行测试，如果有进行测试有效无问题，欢迎反馈</li>
<li>注<sup>(3)</sup>：<strong>阿里云盘Open</strong> 和 <strong>天翼云盘</strong> ：都需要在存储配置中将配置中的秒传选项打开，否则无法秒传</li>
<li>注<sup>(4)</sup>：将<strong>谷歌云盘</strong>文件秒传到<strong>天翼云盘</strong> 和 <strong>天翼云盘</strong>将文件秒传到<strong>天翼云盘</strong>，可能有一些问题，并不是很稳定，需要留意观察</li>
<li>注<sup>(5)</sup>：<strong>百度云盘</strong>只能从本地存储秒传到网盘，如果是使用跨存储进行复制秒传只能先将文件下载下来再进行秒传行为</li>
</ul>
<br/>
<h3 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span><strong>使用方法</strong></span></a></h3>
<ol>
<li>
<p>在列表右键选择需要传输的文件点击复制，然后选择传输到那个文件夹就可以，</p>
</li>
<li>
<p>如果是多个文件可以选择整个文件夹或者右下角打开复选框多选文件，然后最底部有一排按钮可以点击复制</p>
</li>
</ol>
<div class="image-preview">  
    <img src="/img/advanced/r_upload_1.png" alt="秒传" title="秒传"/>
    <img src="/img/advanced/r_upload_2.png" alt="秒传" title="秒传"/>
</div>
</div></template>


