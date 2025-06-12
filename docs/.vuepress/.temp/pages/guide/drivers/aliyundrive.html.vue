<template><div><h1 id="aliyundrive-share" tabindex="-1"><a class="header-anchor" href="#aliyundrive-share"><span>Aliyundrive / Share</span></a></h1>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>This driver is not recommended for use, because it is not stable and may be blocked at any time and we will remove it in a future version.<br>
We recommend using the official driver <RouteLink to="/guide/drivers/aliyundrive_open.html">Aliyundrive Open</RouteLink>.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Due to the limitation of the referrer of Aliyundrive, the mobile token must be used. Using the desktop web token will result in failure to download and preview.<br>
Of course, you can also turn on the proxy so that <code v-pre>refresh token</code> of desktop web can work if you use it locally or if the bandwidth is large enough.</p>
</div>
<h3 id="refresh-token" tabindex="-1"><a class="header-anchor" href="#refresh-token"><span><strong>Refresh token</strong></span></a></h3>
<p>Follow to this <a href="https://github.com/Xhofe/alist/issues/88" target="_blank" rel="noopener noreferrer">issue</a> Capture/find the log on the mobile phone (<code v-pre>/data/media/0/Android/data/com.alicloud.databox/files/logs/trace/</code>). Or you can click:</p>
<p><button :disabled="state === 3 || state === 1"
style="outline:none;padding:12px;background:#70c6be;border:none;border-radius:8px;cursor:pointer;font-size:20px;"
@click="onClick"><br>
{{ btnText }}<br>
</button></p>
<div v-show="src" style="margin:4px">
 <img :src="src"/>
</div>
<div v-show="token" >
<div class="hint-container info">
<p class="hint-container-title">Token: {{ token }}</p>
</div>
</div>
<p><em>API is hosted on <a href="http://replit.com" target="_blank" rel="noopener noreferrer">replit.com</a></em></p>
<h3 id="root-folder-file-id" tabindex="-1"><a class="header-anchor" href="#root-folder-file-id"><span><strong>Root folder file_id</strong></span></a></h3>
<p>Open the official website of Aliyundrive and click the string behind the url when you click into the folder you want to set, such as <a href="https://www.alipan.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940" target="_blank" rel="noopener noreferrer">https://www.alipan.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940</a>, which is <code v-pre>5fe01e1830601baf774e4827a9fb8fb2b5bf7940</code>:</p>
<p><img src="/img/drivers/aliyundrive.png" alt="file_id" loading="lazy"></p>
<h3 id="second-pass" tabindex="-1"><a class="header-anchor" href="#second-pass"><span><strong>Second pass</strong></span></a></h3>
<p>Check the hash when uploading. If there is one in the cloud, directly generate the file without consuming traffic</p>
<h3 id="internal-upload" tabindex="-1"><a class="header-anchor" href="#internal-upload"><span><strong>Internal upload</strong></span></a></h3>
<p>If the server you deploy Alist on is Aliyun ECS for Beijing area, turn on this switch to improve the upload speed. Do not turn on this switch for servers that do not meet the requirements, otherwise you will have problems with inability to upload.</p>
<br/>
<h2 id="aliyundrive-share-url" tabindex="-1"><a class="header-anchor" href="#aliyundrive-share-url"><span><strong>Aliyundrive Share Url</strong></span></a></h2>
<p>It is no longer available, and the shared storage method will no longer be developed and maintained in the future. At the same time, the token obtained by <RouteLink to="/guide/drivers/aliyundrive_open.html"><strong>AliyundriveOpen</strong></RouteLink> cannot be used in the Alibaba Cloud Disk shared mount storage.</p>
<br/>
<h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h3>
<Mermaid id="mermaid-63" code="eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"></Mermaid></div></template>


<script setup lang="ts">
import { ref } from "vue";
import { api } from "@Api"
const btnText = ref("Get Token");
// 0 -> Initial
// 1 -> Wait qr
// 2 -> Wait Scan
// 3 -> Getting Token
// 4 -> Success
const state = ref(0);
const src= ref('')
const token = ref('')
const ckData = ref('')
const getQr = async ()=>{
  btnText.value = 'Waiting...';
  state.value = 1;
  const resp = await fetch(`${api()}/alist/ali/qr`);
  const res = await resp.json();
  console.log(res)
  btnText.value='Use AliyunDrive APP To Scan Then Click this Button again'
  state.value = 2;
  ckData.value = JSON.stringify({
    ck: res.content.data.ck,
    t: res.content.data.t.toString(),
  });
  src.value = `${api()}/qr/?size=400&text=${encodeURIComponent(res.content.data.codeContent)}`
}
const getToken = async ()=>{
  state.value = 3;
  btnText.value = 'Waiting...';
  const resp = await fetch(`${api()}/alist/ali/ck`,{
    method: 'POST',
    headers:{
      "Content-Type": "application/json",
    },
    body: ckData.value
  });
  const res = await resp.json();
  const {content:{data:{qrCodeStatus,loginResult,bizExt}}} = res;
  if(loginResult !== "success"){
    state.value = 2;
    btnText.value = 'Use AliyunDrive APP To Scan Then Click'
    alert('Status:' + qrCodeStatus);
    return
  }
  const bizData = JSON.parse(atob(bizExt));
  token.value = bizData.pds_login_result.refreshToken;
  btnText.value = 'Get Token Success'
  state.value = 4;
  console.log(res)
}
const onClick = async ()=>{
  if(state.value===0){
    getQr()
  }
  if(state.value===2){
    getToken()
  }
}
</script>