<template><div><h1 id="aliyundrive-open" tabindex="-1"><a class="header-anchor" href="#aliyundrive-open"><span>Aliyundrive Open</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Aliyundrive Open, using the official authorization API development.</p>
</div>
<div class="hint-container info">
<p class="hint-container-title">Aliyundrive VIP</p>
<p><strong>Aliyundrive VIP</strong>：<a href="https://www.alipan.com/cpx/member?userCode=MzAwMDM1&amp;disableNav=YES" target="_blank" rel="noopener noreferrer">https://www.alipan.com/cpx/member</a></p>
<ul>
<li><i class="fa-solid fa-lightbulb fa-bounce" style="color: orange;"></i> Click the link to get <a href="https://www.alipan.com/cpx/member?userCode=MzAwMDM1&amp;disableNav=YES" target="_blank" rel="noopener noreferrer"><strong>Coupon</strong></a>,  <a href="https://www.alipan.com/cpx/member?userCode=MzAwMDM1&amp;disableNav=YES" target="_blank" rel="noopener noreferrer"><strong>immediately buy</strong></a></li>
</ul>
<img src="https://r2.izyt.cc/ali/vip.png" alt="vip" style="zoom:30%;" />
</div>
<div class="hint-container caution">
<p class="hint-container-title">Read the precautions carefully</p>
<ol>
<li>
<p><mark>The refresh token obtained by this tool can only be used for <strong>Aliyundrive open platform</strong> storage mount method</mark></p>
</li>
<li>
<p>The token filled in when Alist is mounted should also be provided by this tool, and the previous acquisition method will not be available</p>
</li>
<li>
<p>Not applicable to others, but only for Alist</p>
</li>
<li>
<p>If the same IP requests <mark>{{ max }}</mark> times within <mark>{{ minutes }}</mark> minutes, <strong>Too Many Requests</strong> will appear. 🚫So please do not abuse🚫</p>
<ul>
<li>and viewing files and watching video downloads is not counted，The number of times and time mentioned above are dynamic~</li>
<li>New optimization: <strong>will only refresh the token when the request finds that the token is expired, update restart editing if the token is still valid will not refresh.</strong></li>
</ul>
</li>
<li>
<p>Online playback video reminder: <strong><code v-pre>ExceedCapacityForbidden</code></strong> error, the capacity exceeds restrictions, implements restrictions, needs to be expanded or deleted unnecessary file saving space to save space,<a href="#four%E3%80%81">View details</a></p>
</li>
<li>
<p><i class="fa-solid fa-seal-exclamation fa-beat" style="color: #ff0000;"></i> <strong><mark>Do not share the Alibaba cloud disk publicly, and the account is prohibited from being accessed by multiple IPs. If the account is frozen after sharing, you will be responsible for the consequences</mark> <i class="fa-solid fa-seal-exclamation fa-beat" style="color: #ff0000;"></i>  After adding storage, please set up meta information and other measures in time to prevent the account from being frozen by {other people/crawlers} malicious [access/sharing]，Other cloud disks also need to be prevented from being frozen/banned</strong></p>
</li>
<li>
<p>It is prohibited to use Alibaba Cloud Disk to build distribution services including but not limited to <strong><code v-pre>picture bed, software bed</code></strong> and <strong><code v-pre>video external link to video website playback</code></strong>, as well as some non-standard usage methods not mentioned above. If you violate the rules and are <code v-pre>frozen/banned</code>, you will be responsible for the consequences and it cannot be lifted.</p>
</li>
</ol>
</div>
<div class="hint-container caution">
<p class="hint-container-title">About Alibaba Cloud OAUTH verification API cannot be connected</p>
<ol>
<li>
<p>Since the original API <code v-pre>https://api.nn.ci</code> is blocked by SNI, resulting in the case that cannot be connected, two new APIs are provided for use:</p>
<ul>
<li><code v-pre>https://api-cf.nn.ci</code> (A layer of Cloudflare)</li>
<li><code v-pre>https://api.xhofe.top</code> (LiaoNing multi -line， Sponsored by <a href="https://www.asiayun.com/aff/QQCOOQKZ" target="_blank" rel="noopener noreferrer">Asia Cloud</a>)</li>
</ul>
</li>
<li>
<p>You need to replace the OAUTH token link in the ALIYUNDRIVE_OPEN configuration to</p>
<ul>
<li><code v-pre>https://api-cf.nn.ci/alist/ali_open/token</code></li>
<li><code v-pre>https://api.xhofe.top/alist/ali_open/token</code></li>
<li><img src="/img/drivers/aliyun/aliyun_api.png" alt="" loading="lazy"></li>
</ul>
</li>
<li>
<p>check the details：<a href="https://github.com/alist-org/alist/discussions/4572" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/discussions/4572</a></p>
</li>
<li>
<p>Can I create an authorized OAUTH verification API by themselves?</p>
<ul>
<li>You need to use your own developer account to build</li>
</ul>
</li>
</ol>
</div>
<h2 id="refresh-token" tabindex="-1"><a class="header-anchor" href="#refresh-token"><span><strong>refresh token</strong></span></a></h2>
<p>Go to：<strong><a href="https://alist.nn.ci/tool/aliyundrive/request" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/tool/aliyundrive/request</a></strong></p>
<h4 id="get-example-graph" tabindex="-1"><a class="header-anchor" href="#get-example-graph"><span><strong>Get example graph</strong></span></a></h4>
<p><strong>refresh_token</strong> can be obtained in the following two ways</p>
<div class="image-preview">  
    <img src="/img/drivers/aliyun/token1.png" alt="Go to login" title="Go to login"/>
    <img src="/img/drivers/aliyun/token2.png" alt="Scan QrCode" title="Scan QrCode"/>
</div>
<h3 id="root-folder-file-id" tabindex="-1"><a class="header-anchor" href="#root-folder-file-id"><span><strong>Root folder file_id</strong></span></a></h3>
<p>The default is <code v-pre>root</code>, which displays all cloud disk contents. If you only want to display the contents of a certain folder, you can change it to <code v-pre>file_id</code></p>
<p>Open the official website of Aliyundrive and click the string behind the url when you click into the folder you want to set, such as <a href="https://www.alipan.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940" target="_blank" rel="noopener noreferrer">https://www.alipan.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940</a></p>
<p>which is <code v-pre>5fe01e1830601baf774e4827a9fb8fb2b5bf7940</code></p>
<p><img src="/img/drivers/aliyundrive.png" alt="file_id" loading="lazy"></p>
<br/>
<h3 id="client-id-client-secret" tabindex="-1"><a class="header-anchor" href="#client-id-client-secret"><span><strong>Client id，Client secret</strong></span></a></h3>
<p>Normal users don’t need to fill in the blank. If they apply for official authorization, they can also use their own to fill in. If it is blank, the default is to use the one provided by Alist.</p>
<ul>
<li>If you use your own developer account, the Oauth token link must also be modified, and you must also use your own developer account ID and secret key to obtain the refresh token.</li>
</ul>
<br/>
<h2 id="rapid-upload" tabindex="-1"><a class="header-anchor" href="#rapid-upload"><span><strong>Rapid upload</strong></span></a></h2>
<ul>
<li><strong>v.3.22.1</strong> version New add</li>
</ul>
<p>It is Rapid upload. When adding the driver, you need to check Rapid upload to enable it. The premise of Rapid upload is that the Aliyun disk already has this file before you can perform Rapid upload, otherwise it is a normal upload.</p>
<p>Rapid upload calculates the <code v-pre>sha1</code> value of the file (should be correct), you don’t need to calculate it, you just need to upload it and upload it, it will automatically calculate it for you and upload it</p>
<ul>
<li>The interface provided by the official API of Alibaba Cloud Disk is used, check 👉 <a href="https://www.yuque.com/aliyundrive/zpfszx/ezlzok#y7lyH" target="_blank" rel="noopener noreferrer"><strong>Rapid upload logic</strong></a></li>
</ul>
<hr>
<ul>
<li><strong>v.3.27.0</strong> version enhanced Rapid upload: you can directly transfer files with <code v-pre>115 network disk</code> by copying
<ul>
<li>The premise is that the file to be transferred from the Alibaba Cloud disk to 115 in seconds, 115 already exists, otherwise it is a normal copy task.</li>
<li>If you want to transfer 115 cloud disk files to Alibaba Cloud Disk in seconds, you need to turn on the Rapid upload option of Alibaba Cloud Disk, otherwise it will be uploaded in normal mode.</li>
</ul>
</li>
</ul>
<p>If you want to upload files using Second Transmission, it is recommended to build an AList locally on your home computer and add a <code v-pre>Local Storage</code> and <code v-pre>Alibaba Cloud Disk</code> to copy Second Transmission to save resources.</p>
<br/>
<h2 id="remove-way" tabindex="-1"><a class="header-anchor" href="#remove-way"><span><strong>Remove way</strong></span></a></h2>
<p>If you don’t set it, it will be deleted to the recycle bin by default. If there is not enough space, you need to manually clean up the recycle bin. If you delete the wrong file, please go to the Alibaba Cloud Disk official website client to retrieve and restore it.</p>
<ul>
<li>Trash: Enter the cloud disk recycle bin after AList is deleted, which will occupy the cloud disk space, but it can be retrieved if it is deleted by mistake later.</li>
<li>Delete: direct deletion will not stay in the recycle bin, and will not occupy cloud disk space, but if deleted by mistake later, it cannot be retrieved.
<ul>
<li>Note: Please do not disclose the Token obtained by your Alibaba Cloud Disk Open, <mark>If you accidentally leak it, please immediately go to <a href="#open-alibaba-cloud-disk-app-my-settings-gear-in-the-upper-right-corner-privacy-settings-authorization-management-click-alist-to-view"><strong>Other instructions¹</strong></a> to deauthorize, and then re-scan the code to authorize a new refresh token , at the same time, all the previous acquisitions will become invalid after the authorization is deactivated, so as to protect the security of your account</mark></li>
</ul>
</li>
</ul>
<br/>
<h2 id="drive-type" tabindex="-1"><a class="header-anchor" href="#drive-type"><span><strong>Drive type</strong></span></a></h2>
<p>You can choose the type of cloud disk, and you can choose a different type according to your needs. You can set it when adding a driver using AList of v3.25.1 and above. The default is the <code v-pre>default</code> type</p>
<ul>
<li>
<p><strong>default</strong>: Have Intelligeent level users default to <code v-pre>Non-backup files</code>, No Have Intelligent User's default display is<code v-pre> Backup file</code></p>
</li>
<li>
<p><strong>Resource</strong>: corresponding to <code v-pre>Non-backup files</code> of the cloud disk</p>
</li>
<li>
<p><strong>Backup</strong>: corresponding to the <code v-pre>Backup file</code> of the cloud disk</p>
</li>
</ul>
<p>202407 --&gt; After AliyunDrive is updated to <code v-pre>6.0</code> version, the backup disk is changed to backup files and all files are merged together, but in terms of OpenAPI, there is still a distinction between <code v-pre>Resource</code> and <code v-pre>Backup</code> types</p>
<p><img src="/img/drivers/aliyun/aliyun_type.png" alt="" loading="lazy"></p>
<br/>
<h2 id="livp-download-format" tabindex="-1"><a class="header-anchor" href="#livp-download-format"><span><strong>Livp download format</strong></span></a></h2>
<p>That is, the IOS <code v-pre>live</code> photo cannot be downloaded because the non-IOS system cannot parse it, and now it needs <code v-pre>Jpeg</code> or <code v-pre>Mov</code> according to your own needs</p>
<ul>
<li>Jpeg: is the cover shown in the <code v-pre>live</code> photo</li>
<li>Mov: Long press the video screen of the <code v-pre>live</code> photo</li>
</ul>
<h2 id="internal-upload" tabindex="-1"><a class="header-anchor" href="#internal-upload"><span><strong>Internal upload</strong></span></a></h2>
<p>If the server you deploy AList on is Aliyun ECS for Beijing area, turn on this switch to improve the upload speed. Do not turn on this switch for servers that do not meet the requirements, otherwise you will have problems with inability to upload.</p>
<ul>
<li><strong>Internal upload</strong> Can Alibaba Cloud ECS in non-Beijing areas be used? No, because Alibaba Cloud Disk is using object storage in the Beijing area</li>
</ul>
<br/>
<h2 id="other-instructions" tabindex="-1"><a class="header-anchor" href="#other-instructions"><span><strong>other instructions</strong></span></a></h2>
<h5 id="one、" tabindex="-1"><a class="header-anchor" href="#one、"><span>One、</span></a></h5>
<blockquote>
<p>AList only obtained cloud disk users (<strong>name avatar¹</strong>), (<strong>access file permission²</strong>) and (<strong>write file permission³</strong>), and did not obtain mobile phone number permission</p>
<p>Details can be viewed in two ways:</p>
<ol>
<li>
<p><strong>Prompt</strong> when scanning the QR code to obtain the refresh token</p>
</li>
<li>
<h6 id="open-alibaba-cloud-disk-app-my-settings-gear-in-the-upper-right-corner-privacy-settings-authorization-management-click-alist-to-view" tabindex="-1"><a class="header-anchor" href="#open-alibaba-cloud-disk-app-my-settings-gear-in-the-upper-right-corner-privacy-settings-authorization-management-click-alist-to-view"><span>Open <strong>Alibaba Cloud Disk APP --&gt; My --&gt; Settings gear in the upper right corner --&gt; Privacy Settings --&gt; Authorization Management --&gt; Click AList</strong> to view</span></a></h6>
<ul>
<li>If you don't use it, you can manually cancel the permission at any time</li>
</ul>
</li>
</ol>
</blockquote>
<h5 id="two、" tabindex="-1"><a class="header-anchor" href="#two、"><span>Two、</span></a></h5>
<blockquote>
<p>By default, the built-in player of Aliyun Disk is used - <strong>Aliyun Video Previewer</strong></p>
<p>The video uploaded to the cloud disk will be converted into an H.264 encoded video stream through the transcoding service. (The good thing is that IOS can play... well, it should be like this)</p>
<ul>
<li>For videos newly uploaded to the cloud disk, only the first 30s of the video are pre-transcoded by default. Full video transcoding is triggered on first playback. The transcoded video will be cached, and re-transcoding is not required to trigger playback again.</li>
<li>Videos shorter than 30s will not trigger pre-transcoding, and will only start transcoding when they are played for the first time.</li>
<li>Real-time transcoding takes some time.</li>
<li>The picture quality are: LD|SD|HD|FHD|QHD</li>
</ul>
</blockquote>
<h5 id="three、" tabindex="-1"><a class="header-anchor" href="#three、"><span>Three、</span></a></h5>
<blockquote>
<p>Q: Why can’t Alibaba Cloud Disk Open see files of the Office Family Bucket type?</p>
<p>A: <s>Because Aliyun disk has not opened the relevant API, it is temporarily unavailable to view</s> (please look forward to)</p>
</blockquote>
<h5 id="four、" tabindex="-1"><a class="header-anchor" href="#four、"><span>Four、</span></a></h5>
<blockquote>
<p>Q：Unable to play Alibaba Cloud disk video online, prompt: <strong><code v-pre>ExceedCapacityForbidden</code></strong> error</p>
<p>A：<strong>User capacity exceeded</strong>, playback restricted, need to expand or delete unnecessary files to free up space,The prompts of the Alist and Alibaba Cloud Drive APP are as shown below</p>
<img src="/img/drivers/aliyun/error.png" style="zoom:70%;" />
</blockquote>
<h5 id="five、" tabindex="-1"><a class="header-anchor" href="#five、"><span>Five、</span></a></h5>
<blockquote>
<p>Q: How to load subtitles?</p>
<p>A: Aliyun Disk Open needs to use <strong>Aliyun Video Previewer</strong> player, and temporarily &quot;<strong>Only support transcoding mkv-encapsulated srt, vtt text format subtitles</strong>&quot;</p>
<ul>
<li>Currently only supports transcoding eng, jpn, chi three languages, other languages will be lost</li>
</ul>
</blockquote>
<h5 id="six、" tabindex="-1"><a class="header-anchor" href="#six、"><span>Six、</span></a></h5>
<blockquote>
<p>Q: View video prompts in alipan <code v-pre>In the transcoding, please try again later</code> and linger prompts in AList: <code v-pre>failed link: failed get link: UserNotAllowedAccessResource:user not allowed access resource for violation</code><br>
A: The representative account has been frozen (in the past, it was unable to log in directly), Please look at the red content on the top</p>
</blockquote>
<h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-429" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid></div></template>


<script setup lang="ts">
import { ref } from "vue";
import { api } from "@Api"
const minutes = ref<string|number>("unknown")
const max = ref<string|number>("unknown")
const getLimit = async ()=>{
  const resp = await fetch(`${api()}/alist/ali_open/limit`)
  const res = await resp.json()
  minutes.value = res.minutes
  max.value = res.max
}
typeof fetch !== "undefined" && getLimit()
</script>