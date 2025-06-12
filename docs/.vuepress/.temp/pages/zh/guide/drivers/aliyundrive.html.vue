<template><div><h1 id="阿里云盘-分享" tabindex="-1"><a class="header-anchor" href="#阿里云盘-分享"><span>阿里云盘 / 分享</span></a></h1>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>不推荐使用该驱动，因为它不稳定，随时可能被屏蔽，我们会在以后的版本中移除。推荐使用官方 API 的驱动 <RouteLink to="/zh/guide/drivers/aliyundrive_open.html">Aliyundrive Open</RouteLink>。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>由于阿里云盘 referer 的限制，必须使用移动端 token。 使用桌面 Web 令牌将导致无法下载和预览。<br>
当然，如果你在本地使用或者带宽足够大，你也可以开启代理，让桌面 Web 的 <code v-pre>refresh token</code> 正常工作。</p>
</div>
<h3 id="刷新令牌" tabindex="-1"><a class="header-anchor" href="#刷新令牌"><span><strong>刷新令牌</strong></span></a></h3>
<p>按照这个 <a href="https://github.com/Xhofe/alist/issues/88" target="_blank" rel="noopener noreferrer">issue</a> 在手机上捕获/查找日志（<code v-pre>/data/media/0/Android/data/com.alicloud.databox/files/logs/trace/</code>）。 或者您可以点击：</p>
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
<h3 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id"><span><strong>根文件夹ID</strong></span></a></h3>
<p>打开阿里云盘官网，点击进入要设置的文件夹时点击 URL 后面的字符串</p>
<p>如 <a href="https://www.alipan.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940" target="_blank" rel="noopener noreferrer">https://www.alipan.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940</a></p>
<p>这个文件夹的 file_id 即为 <code v-pre>5fe01e1830601baf774e4827a9fb8fb2b5bf7940</code>：</p>
<p><img src="/img/drivers/aliyundrive.png" alt="file_id" loading="lazy"></p>
<h3 id="秒传" tabindex="-1"><a class="header-anchor" href="#秒传"><span><strong>秒传</strong></span></a></h3>
<p>上传的时候校验 hash，如果云端有，直接生成文件，不消耗流量</p>
<h3 id="内部上传" tabindex="-1"><a class="header-anchor" href="#内部上传"><span><strong>内部上传</strong></span></a></h3>
<p>如果你部署 Alist 的服务器是阿里云北京地区 ECS，打开此开关可以提升文件上传速度。不符合要求的服务器请不要打开此开关，否则会出现无法上传的问题。</p>
<br/>
<h2 id="阿里云盘分享" tabindex="-1"><a class="header-anchor" href="#阿里云盘分享"><span><strong>阿里云盘分享</strong></span></a></h2>
<p>已经无法使用，并且后续不再开发和维护分享存储方式，同时<RouteLink to="/zh/guide/drivers/aliyundrive_open.html"><strong>阿里云盘Open</strong></RouteLink>获取的Token也不可以在阿里云盘分享挂载存储使用。</p>
<br/>
<h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-69" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></div></template>


<script setup lang="ts">
import { ref } from "vue";
import { api } from "@Api"
const btnText = ref("获取 Token");
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
  btnText.value = '等待...';
  state.value = 1;
  const resp = await fetch(`${api()}/alist/ali/qr`);
  const res = await resp.json();
  console.log(res)
  btnText.value='使用阿里云盘 APP 扫描然后点击'
  state.value = 2;
  ckData.value = JSON.stringify({
    ck: res.content.data.ck,
    t: res.content.data.t.toString(),
  });
  src.value = `${api()}/qr/?size=400&text=${encodeURIComponent(res.content.data.codeContent)}`
}
const getToken = async ()=>{
  state.value = 3;
  btnText.value = '等待...';
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
    btnText.value = '使用阿里云盘 App 扫描然后点击'
    alert('Status:' + qrCodeStatus);
    return
  }
  const bizData = JSON.parse(atob(bizExt));
  token.value = bizData.pds_login_result.refreshToken;
  btnText.value = '获取 Token 成功'
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