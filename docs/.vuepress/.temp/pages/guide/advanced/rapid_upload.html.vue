<template><div><h1 id="rapid-upload" tabindex="-1"><a class="header-anchor" href="#rapid-upload"><span>Rapid upload</span></a></h1>
<h2 id="introduce" tabindex="-1"><a class="header-anchor" href="#introduce"><span><strong>introduce</strong></span></a></h2>
<p><strong>Rapid upload</strong> means that files between two cloud disks can be uploaded to each other quickly without waiting. Here is an introduction to what can be mutually Rapid uploaded <strong><sup>v3.29.0_New</sup></strong></p>
<p><mark>There is a premise that the files required for Rapid upload in network disk A are already available in network disk B, so that Rapid upload can be performed, otherwise it will be uploaded normally</mark></p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p><i class="fa-solid fa-square-left fa-bounce" style="color: rgb(13, 109, 252)"></i> <strong>The left side</strong> is the source Network Disk、<i class="fa-solid fa-square-arrow-up fa-bounce" style="color: rgb(13, 109, 252)"></i> <strong>The top side</strong> is the target Network Disk</p>
</div>
<table>
<thead>
<tr>
<th style="text-align:center"></th>
<th style="text-align:center">Aliyun</th>
<th style="text-align:center">115</th>
<th style="text-align:center">Baidu<sup>(5)</sup></th>
<th style="text-align:center">189</th>
<th style="text-align:center">Xunlei</th>
<th style="text-align:center">PikPak</th>
<th style="text-align:center">GoogleDrive</th>
<th style="text-align:center">OndDrive</th>
<th style="text-align:center">localhost</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">localhost</td>
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
<td style="text-align:center">Aliyun</td>
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
<td style="text-align:center">Baidu</td>
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
<td style="text-align:center">189</td>
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
<td style="text-align:center">Xunlei</td>
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
<td style="text-align:center">GoogleDrive</td>
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
<li>Note<sup>(1)</sup>: The <strong>Aliyun</strong> mentioned here refers to <RouteLink to="/guide/drivers/aliyundrive_open.html"><strong>aliyundriveOpen</strong></RouteLink></li>
<li>Note<sup>(2)</sup>: <strong>OneDrive</strong> has not been tested because there is no account. If the test is valid and there are no problems, feedback is welcome.</li>
<li>Note<sup>(3)</sup>: <strong>Aliyun</strong> and <strong>189</strong>: Both need to turn on the Rapid upload option in the storage configuration, otherwise Rapid upload cannot be performed</li>
<li>Note<sup>(4)</sup>: <strong>GoogleDrive</strong> files can be transferred to <strong>189</strong> in seconds and <strong>189</strong> can transfer files to <strong>189</strong> in seconds. There may be some problems and are not very stable. Need to Pay attention to observation</li>
<li>Note<sup>(5)</sup>: <strong>Baidu cloud Disk</strong> can only be stored from local storage Rapid Upload to the network disk. If you use cross -storage to Copy Rapid Upload, you can only download the file first and then perform RAPID Upload.</li>
</ul>
<br/>
<h3 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use"><span><strong>How to use</strong></span></a></h3>
<ol>
<li>
<p>Right-click the file you want to transfer in the list, click Copy, and then select the folder to transfer to.</p>
</li>
<li>
<p>If there are multiple files, you can select the entire folder or open the checkbox in the lower right corner to select multiple files, and then there is a row of buttons at the bottom to click to copy.</p>
</li>
</ol>
<div class="image-preview">  
    <img src="/img/advanced/r_upload_1.png" alt="Rapid_upload" title="Rapid_upload"/>
    <img src="/img/advanced/r_upload_2.png" alt="Rapid_upload" title="Rapid_upload"/>
</div>
</div></template>


