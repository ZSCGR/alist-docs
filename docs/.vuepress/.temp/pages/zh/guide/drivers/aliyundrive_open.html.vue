<template><div><h1 id="阿里云盘-open" tabindex="-1"><a class="header-anchor" href="#阿里云盘-open"><span>阿里云盘 Open</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>阿里云盘 open，使用的是官方授权 API 开发。</p>
</div>
<div class="hint-container info">
<p class="hint-container-title">阿里云盘会员</p>
<p><strong>阿里云盘会员：</strong><a href="https://www.alipan.com/cpx/member?userCode=MzAwMDM1&amp;disableNav=YES" target="_blank" rel="noopener noreferrer">https://www.alipan.com/cpx/member</a></p>
<ul>
<li><i class="fa-solid fa-lightbulb fa-bounce" style="color: orange;"></i> 点击链接领取<a href="https://www.alipan.com/cpx/member?userCode=MzAwMDM1&amp;disableNav=YES" target="_blank" rel="noopener noreferrer"><strong>优惠券</strong></a>，<a href="https://www.alipan.com/cpx/member?userCode=MzAwMDM1&amp;disableNav=YES" target="_blank" rel="noopener noreferrer"><strong>立即抢购</strong></a></li>
</ul>
<img src="https://r2.izyt.cc/ali/vip.png" alt="vip" style="zoom:30%;" />
</div>
<div class="hint-container caution">
<p class="hint-container-title">请仔细阅读注意事项</p>
<ol>
<li>
<p><mark>此工具获取的刷新令牌仅可以用于 <strong>阿里云盘开放平台</strong> 存储挂载方式</mark></p>
</li>
<li>
<p>AList 挂载时填写的 token 也应该是这个工具提供的，之前方式获取的不可以</p>
</li>
<li>
<p>暂不适用于其他，同时也仅限用于 Alist 使用</p>
</li>
<li>
<p>同一 IP 在 <mark>{{ minutes }}</mark> 分钟内请求 <mark>{{ max }}</mark> 次，会出现 <strong>Too Many Requests</strong> 🚫避免滥用，请勿滥用🚫</p>
<ul>
<li>查看文件看视频下载不算，上述的分钟和次数是动态的</li>
<li>新增优化：<strong>只会在请求发现令牌过期时去刷新令牌，更新 重启 编辑如果令牌仍然有效则不会去刷新。</strong></li>
</ul>
</li>
<li>
<p>在线播放视频提示：<strong><code v-pre>ExceedCapacityForbidden</code></strong> 错误，容量超限限制播放，需要扩容或者删除不必要的文件释放空间,<a href="#%E5%9B%9B%E3%80%81">查看详情</a></p>
</li>
<li>
<p><i class="fa-solid fa-seal-exclamation fa-beat" style="color: #ff0000;"></i> <strong><mark>请勿将阿里云盘进行公开分享，禁止帐号被多IP访问，若进行分享后帐号被冻结后果自负</mark> <i class="fa-solid fa-seal-exclamation fa-beat" style="color: #ff0000;"></i> 添加存储后请及时设置元信息等措施防止被{其他人/爬虫}恶意[访问/分享]导致帐号被冻结，其他云盘也一样防止被冻结/封号</strong></p>
</li>
<li>
<p>禁止使用阿里云盘搭建<mark>包括但不限于</mark> <strong><code v-pre>图床、软件床</code></strong> 和 <strong><code v-pre>视频外链到视频网站播放</code></strong> 等分发服务以及一些没有提到的不规范使用的方式，若违反被<code v-pre>冻结/封号</code>后果自负，并无法解除。</p>
</li>
</ol>
</div>
<div class="hint-container caution">
<p class="hint-container-title">关于阿里云open的OAuth验证API无法连接</p>
<ol>
<li>
<p>由于原api <code v-pre>https://api.nn.ci</code>被sni阻断，导致国内无法连接的情况，故提供两个新的api供使用：</p>
<ul>
<li><code v-pre>https://api-cf.nn.ci</code> (套了一层cloudflare)</li>
<li><code v-pre>https://api.xhofe.top</code> (辽宁多线， 由<a href="https://www.asiayun.com/aff/QQCOOQKZ" target="_blank" rel="noopener noreferrer">亚洲云</a>赞助)</li>
</ul>
</li>
<li>
<p>需要将<code v-pre>aliyundrive_open</code>后台配置中的<code v-pre>Oauth令牌链接</code>更换为</p>
<ul>
<li><code v-pre>https://api-cf.nn.ci/alist/ali_open/token</code></li>
<li><code v-pre>https://api.xhofe.top/alist/ali_open/token</code></li>
<li><img src="/img/drivers/aliyun/aliyun_api.png" alt="" loading="lazy"></li>
</ul>
</li>
<li>
<p>查看详情：<a href="https://github.com/alist-org/alist/discussions/4572" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/discussions/4572</a></p>
</li>
<li>
<p>是否可以自己搭建授权OAuth验证API？</p>
<ul>
<li>需要使用自己申请的开发者帐号搭建</li>
</ul>
</li>
</ol>
</div>
<h2 id="刷新令牌" tabindex="-1"><a class="header-anchor" href="#刷新令牌"><span><strong>刷新令牌</strong></span></a></h2>
<p>前往：<strong><a href="https://alist.nn.ci/zh/tool/aliyundrive/request" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/zh/tool/aliyundrive/request</a></strong></p>
<h4 id="获取示意图" tabindex="-1"><a class="header-anchor" href="#获取示意图"><span><strong>获取示意图</strong></span></a></h4>
<p>以下两种方式都可以获得 <strong>refresh_token</strong></p>
<div class="image-preview">  
    <img src="/img/drivers/aliyun/token1.png" alt="Go to login" title="Go to login-登录云盘帐号"/>
    <img src="/img/drivers/aliyun/token2.png" alt="Scan QrCode" title="Scan QrCode-扫描获取"/>
</div>
<h2 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id"><span><strong>根文件夹ID</strong></span></a></h2>
<p>默认为<code v-pre>root</code>，展示全部云盘内容，若只想展示某文件夹內内容，可以改为<code v-pre>file_id </code></p>
<p>打开阿里云盘官网，点击进入要设置的文件夹时点击 URL 后面的字符串</p>
<p>如 <a href="https://www.alipan.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940" target="_blank" rel="noopener noreferrer">https://www.alipan.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940</a></p>
<p>这个文件夹的 file_id 即为 <code v-pre>5fe01e1830601baf774e4827a9fb8fb2b5bf7940</code></p>
<p><img src="/img/drivers/aliyundrive.png" alt="file_id" loading="lazy"></p>
<br/>
<h2 id="客户端-id-秘钥" tabindex="-1"><a class="header-anchor" href="#客户端-id-秘钥"><span><strong>客户端 ID，秘钥</strong></span></a></h2>
<p>正常用户不需要填写为空即可，如果自己申请了官方授权也可以使用自己的进行填写，为空时默认使用 AList 提供的。</p>
<ul>
<li>如果使用自己的开发者帐号，Oauth令牌链接也要修改，同时也要使用自己开发者帐号ID和秘钥获取刷新令牌</li>
</ul>
<br/>
<h2 id="秒传" tabindex="-1"><a class="header-anchor" href="#秒传"><span><strong>秒传</strong></span></a></h2>
<ul>
<li><strong>v.3.22.1</strong> 版本 新增功能</li>
</ul>
<p>就是秒传，需要在挂载时，需要启用<code v-pre>秒传</code>，要秒传的前提是阿里云盘已经有这个文件才可以进行秒传否则就是普通的上传</p>
<p>秒传计算的是文件<code v-pre>sha1</code>值(应该没错)不需要你计算,你只需要上传即可上传好了会自动帮你计算然后上传完成</p>
<ul>
<li>使用的是阿里云盘官方API提供的接口，查看 👉 <a href="https://www.yuque.com/aliyundrive/zpfszx/ezlzok#y7lyH" target="_blank" rel="noopener noreferrer"><strong>秒传逻辑</strong></a></li>
</ul>
<hr>
<ul>
<li><strong>v.3.27.0</strong> 版本 增强秒传：可以直接通过复制方式来和<code v-pre>115网盘</code>进行相互秒传文件
<ul>
<li>前提是要从阿里云盘秒传到115的文件，115已经存在，否则就是正常复制任务。</li>
<li>如果将115的文件秒传到阿里云盘，需要将阿里云盘的秒传选项打开否则为正常模式上传</li>
</ul>
</li>
</ul>
<p>如果要使用秒传来上传文件建议在自己家用电脑本地搭建一个AList添加一个<code v-pre>本地存储</code>和<code v-pre>阿里云盘</code>进行复制秒传这样节省资源。</p>
<br/>
<h2 id="移除方式" tabindex="-1"><a class="header-anchor" href="#移除方式"><span><strong>移除方式</strong></span></a></h2>
<p>不进行设置默认是删除到回收站內了，如果空间不够需要自己手动清理回收站/若删错文件请前往阿里云盘官网客户端进行找回恢复</p>
<ul>
<li><strong>回收站</strong>：在AList删除后进入网盘回收站，会占用云盘空间，但是后期如果误删可以找回。</li>
<li><strong>删除</strong>：直接删除不会停留在回收站，不会占用云盘空间，但是后期如果误删不能找回。
<ul>
<li>注：请勿泄露自己阿里云盘Open获取的Token， <mark>若不小心泄露请立刻马上去  <a href="#%E6%89%93%E5%BC%80-%E9%98%BF%E9%87%8C%E4%BA%91%E7%9B%98-app-%E6%88%91%E7%9A%84-%E5%8F%B3%E4%B8%8A%E8%A7%92%E8%AE%BE%E7%BD%AE%E9%BD%BF%E8%BD%AE-%E9%9A%90%E7%A7%81%E8%AE%BE%E7%BD%AE-%E6%8E%88%E6%9D%83%E7%AE%A1%E7%90%86-%E7%82%B9%E5%87%BB-alist-%E8%BF%9B%E8%A1%8C%E6%9F%A5%E7%9C%8B"><strong>其他说明 ¹</strong></a> 解除授权,再重新扫码授权换新的刷新令牌，同时解除授权后之前获取的都会失效，以保护您账号的安全</mark></li>
</ul>
</li>
</ul>
<br/>
<h2 id="云盘类型" tabindex="-1"><a class="header-anchor" href="#云盘类型"><span><strong>云盘类型</strong></span></a></h2>
<p>云盘类型可以选择，可以自己的需求选择不同类型，使用 v3.25.1及以上版本的AList添加驱动时进行设置，默认选择的是<code v-pre>默认</code>类型</p>
<ul>
<li>
<p><strong>默认</strong>：有达人等级用户默认展示的是<code v-pre>非备份文件</code>内容，没有达人等级用户默认展示的是<code v-pre>备份文件</code>内容</p>
</li>
<li>
<p><strong>资源库</strong>：对应云盘的<code v-pre>非备份文件内容</code></p>
</li>
<li>
<p><strong>备份盘</strong>：对应云盘的<code v-pre>备份文件</code></p>
</li>
</ul>
<p>202407 --&gt; 阿里云盘更新 <code v-pre>6.0</code> 版本后，备份盘变更为备份文件和全部文件合并在一起了，但是在OpenAPI方面还是区分 <code v-pre>资源库</code> 和 <code v-pre>备份盘</code> 类型</p>
<p><img src="/img/drivers/aliyun/aliyun_type.png" alt="" loading="lazy"></p>
<br/>
<h2 id="livp-下载格式" tabindex="-1"><a class="header-anchor" href="#livp-下载格式"><span><strong>Livp 下载格式</strong></span></a></h2>
<p>即 IOS<code v-pre>实况</code>照片因为非IOS系统无法解析，然后就无法下载，现根据自己的需求是需要<code v-pre>Jpeg</code>还是<code v-pre>Mov</code></p>
<ul>
<li>Jpeg：就是<code v-pre>实况</code>照片所展示的封面</li>
<li>Mov：长按<code v-pre>实况</code>照片的视频画面</li>
</ul>
<br/>
<h2 id="内部上传" tabindex="-1"><a class="header-anchor" href="#内部上传"><span><strong>内部上传</strong></span></a></h2>
<p>如果你部署 AList 的服务器是阿里云北京地区ECS，打开此开关可以提升文件上传速度。不符合要求的服务器请不要打开此开关，否则会出现无法上传的问题。</p>
<ul>
<li><strong>内部上传</strong>非北京地区的阿里云ECS可以使用吗？不能，因为阿里云盘在使用北京地区的对象存储</li>
</ul>
<br/>
<h2 id="其他说明" tabindex="-1"><a class="header-anchor" href="#其他说明"><span><strong>其他说明</strong></span></a></h2>
<h5 id="一、" tabindex="-1"><a class="header-anchor" href="#一、"><span>一、</span></a></h5>
<blockquote>
<p>AList 仅获取了 云盘用户 (<strong>名称 头像 ¹</strong>)，(<strong>访问文件权限 ²</strong>)和(<strong>写入文件权限 ³</strong>)，未获取手机号权限</p>
<p>详情可以通过以下两种方式查看</p>
<ol>
<li>
<p>扫码获取刷新令牌时的<strong>提示</strong></p>
</li>
<li>
<h4 id="打开-阿里云盘-app-我的-右上角设置齿轮-隐私设置-授权管理-点击-alist-进行查看" tabindex="-1"><a class="header-anchor" href="#打开-阿里云盘-app-我的-右上角设置齿轮-隐私设置-授权管理-点击-alist-进行查看"><span>打开 <strong>阿里云盘 APP --&gt; 我的 --&gt;右上角设置齿轮 --&gt; 隐私设置 --&gt; 授权管理 --&gt; 点击 AList</strong> 进行查看</span></a></h4>
<ul>
<li>若不使用了可以随时手动解除权限</li>
</ul>
</li>
</ol>
</blockquote>
<h5 id="二、" tabindex="-1"><a class="header-anchor" href="#二、"><span>二、</span></a></h5>
<blockquote>
<p>默认使用的是阿里云盘自带播放器 - <strong>Aliyun Video Previewer</strong></p>
<p>上传到云盘的视频，会经过转码服务转成 H.264 编码的视频流。（好处是 IOS 可以播放了...嗯 应该是这样）</p>
<ul>
<li>新上传到云盘的视频，默认只预转码视频的前 30s。第一次播放时会触发完整的视频转码。转码后的视频会缓存，之后再次触发播放不需要重新转码。</li>
<li>不足 30s 的视频不会触发预转码，只会在第一次播放时开始转码。</li>
<li>实时转码需要一定时间。</li>
<li>画质分别为：LD|SD|HD|FHD|QHD</li>
</ul>
</blockquote>
<h5 id="三、" tabindex="-1"><a class="header-anchor" href="#三、"><span>三、</span></a></h5>
<blockquote>
<p>Q：阿里云盘Open怎么看不了 Office 全家桶类型的文件</p>
<p>A：<s>因为阿里云盘未开放相关API故暂时无法查看</s>（敬请期待）</p>
</blockquote>
<h5 id="四、" tabindex="-1"><a class="header-anchor" href="#四、"><span>四、</span></a></h5>
<blockquote>
<p>Q：在线播放阿里云盘视频无法播放，提示：<strong><code v-pre>ExceedCapacityForbidden</code></strong> 错误</p>
<p>A：<strong>用户容量超限</strong>，限制播放，需要扩容或者删除不必要的文件释放空间，在AList和阿里云盘官方APP分别如下图提示</p>
<img src="/img/drivers/aliyun/error.png" style="zoom:70%;" />
</blockquote>
<h5 id="五、" tabindex="-1"><a class="header-anchor" href="#五、"><span>五、</span></a></h5>
<blockquote>
<p>Q：如何加载字幕？</p>
<p>A：阿里云盘open 需要使用 <strong>Aliyun Video Previewer</strong>播放器，然后暂时&quot;<strong>只支持转码 mkv 封装的 srt、vtt 文本格式字幕</strong>&quot;</p>
<ul>
<li>目前只支持转码 eng、jpn、chi 三种语言，其他语言会丢失</li>
</ul>
</blockquote>
<h5 id="六、" tabindex="-1"><a class="header-anchor" href="#六、"><span>六、</span></a></h5>
<blockquote>
<p>Q：在阿里云盘查看视频提示 <code v-pre>转码中，请稍后重试</code> 和 在AList挂载提示：<code v-pre>failed link: failed get link: UserNotAllowedAccessResource:user not allowed access resource for violation</code></p>
<p>A：代表帐号已经被冻结（以前都是直接无法登录），具体情况请查看顶部的红色内容注意事项</p>
</blockquote>
<h2 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h2>
<Mermaid id="mermaid-436" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></div></template>


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