<template><div><h1 id="_6盘" tabindex="-1"><a class="header-anchor" href="#_6盘"><span>6盘</span></a></h1>
<ul>
<li>
<p><code v-pre>6盘（halalcloud）</code> 官方网站：<a href="https://2dland.cn/" target="_blank" rel="noopener noreferrer">https://2dland.cn</a></p>
<ul>
<li>网盘登录：<a href="https://drive.2dland.cn" target="_blank" rel="noopener noreferrer">https://drive.2dland.cn</a></li>
</ul>
</li>
<li>
<p>官方公告、文档地址：<a href="https://2dland.yuque.com/r/organizations/homepage" target="_blank" rel="noopener noreferrer">https://2dland.yuque.com/r/organizations/homepage</a></p>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>由于<code v-pre>6盘（halalcloud）</code>采用的 <code v-pre>IPFS</code>协议存储，因此块大小被限制在<code v-pre>1MB</code>，于是<strong>只能使用<code v-pre>本机代理</code>进行下载</strong>，且单线程速度较慢，<strong>使用时请尽量使用多线程下载，提升速度</strong></p>
</div>
<br/>
<h2 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id"><span><strong>根文件夹ID</strong></span></a></h2>
<p>顶部地址栏路径，根文件夹是：<code v-pre>/</code></p>
<p>子文件夹：<code v-pre>/A文件夹/C文件夹/C文件夹</code></p>
<br/>
<h2 id="添写示例" tabindex="-1"><a class="header-anchor" href="#添写示例"><span><strong>添写示例</strong></span></a></h2>
<p>初次添加6盘 (halalcloud) 驱动，<code v-pre>Refresh token</code>可以留空，此时右上角会弹出红色错误通知</p>
<p>返回存储页面，点击刷新按钮，之前添加的驱动 <code style="font-weight: bold;color:red">Click Here</code>区域会变成可点击模式，点击后进行点击跳转到 6盘 (halalcloud) 官网进行登录</p>
<p><img src="/img/drivers/halalcloud/halalcloud_add.png" alt="" loading="lazy"></p>
<p><img src="/img/drivers/halalcloud/halalcloud_login.png" alt="" loading="lazy"></p>
<p>登录成功，<strong>离开后会自动关闭网页</strong>，请及时复制顶部地址栏中的<code v-pre>RefreshToken</code>字段参数链接</p>
<ul>
<li>
<p>或者复制到其它位置再进行获取链接中<code v-pre>RefreshToken</code>字段</p>
</li>
<li>
<p>复制到其它位置后会自动进行UrlEncode编码，具体以<code v-pre>RefreshToken</code>字段是 <code v-pre>&quot;rt__</code>开头的，以<code v-pre>&quot;</code><sup>（&quot;编码后是%22）</sup>结尾的字符串</p>
<ul>
<li>可以参考下面提取示例或者借用工具</li>
</ul>
</li>
</ul>
<br/>
<p>链接中<span style="font-weight: bold;color: blue;">蓝色</span>字段是我们需要的<code v-pre>RefreshToken</code></p>
<div style="border: 3px solid red;padding: 10px;">
	<ul>
		<li>地址栏复制链接获取<code>RefreshToken</code>：</li><br/>
		<ul><br/>
			<li style="font-weight: bold;">解码前：</li>
			<ul>
                <li>https%3A%2F%2Fstatic.2dland.cn%2Fuser%2Flanding%2F%3Ftype%3Doauth2-response%26payload%3D%7B%22scope%22%3A%22openid%20profile%20email%20phone%22%2C%22<span style="font-weight: bold;color: #ff00c6;">refreshToken</span>%22%3A<span style="font-weight: bold;color: red;">%22</span><span style="font-weight: bold;color: blue;">rt__2xxxx5_2xxxxxa-4xx7-4xxa-9xx3-exxxxxxxxxx4</span><span style="font-weight: bold;color: red;">%22</span>%2C%22state%22%3A%2210xxxx4d3-4cxa-4xx8-axxb-1xxxf3%22%2C%22callback%22%3A%22at_callback_d4dxxxxxxxxxxxxxxxxxxxxxxxxxef_ly8og7b8%22%7D</li>
			</ul><br/>
			<li style="font-weight: bold;">解码后：</li>
			<ul>
				<li>https://static.2dland.cn/user/landing/?type=oauth2-response&payload={"scope":"openid profile email phone","<span style="font-weight: bold;color: #ff00c6;">refreshToken</span>":<span style="font-weight: bold;color: red;">"</span><span style="font-weight: bold;color: blue;">rt__2xxxx5_2xxxxxa-4xx7-4xxa-9xx3-exxxxxxxxxx4</span><span style="font-weight: bold;color: red;">"</span>,"state":"10xxxx4d3-4cxa-4xx8-axxb-1xxxf3","callback":"at_callback_d4dxxxxxxxxxxxxxxxxxxxxxxxxxef_ly8og7b8"}</li>
			</ul><br/>
            <li style="font-weight: bold;">如果实在看不出来可以借助工具进行解码：<a href="https://tool.chinaz.com/tools/urlencode.aspx">https://tool.chinaz.com/tools/urlencode.aspx</a>
			</li>
		</ul>
	</ul>
    <img src="/img/drivers/halalcloud/halalcloud_url.png">
</div>
<br/>
<h2 id="其它参数" tabindex="-1"><a class="header-anchor" href="#其它参数"><span><strong>其它参数</strong></span></a></h2>
<ul>
<li>
<p><code v-pre>Upload thread</code>：上传线程（默认为 3 ， 范围1-32）</p>
</li>
<li>
<p><code v-pre>App id</code>：<code v-pre>应用ID</code> （默认已给出，无需填写）</p>
</li>
<li>
<p><code v-pre>App version</code>：<code v-pre>应用版本</code>（默认已给出，无需填写）</p>
</li>
<li>
<p><code v-pre>App secret</code>：<code v-pre>应用密钥</code>（默认已给出，无需填写）</p>
</li>
</ul>
<br/>
<h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-110" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFZEOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqQ90QiqPS3N3NTcFG6CsbExqgkmBRUQbaVJ6UWJBRkKmSmphgrRCrFg0WRDMJWalwLlRj+bs+bZnF1Pdi9+PqEt1srKqjg/NzU5J7G42NYW4mVbW1u7RKNooLefdWx/sW7f0yXtULNAqlxS0xTgWmBOtDQDK0gyjIaYGxrkE6urB9T4sqFTTxeXaZnJ2UAtCkp6evopRZllqUXF+sn5ubn5eXoZJbk5yuWpSSmJZbrP1057PnWpEpIeYMgSqQcAEWS3Rg=="></Mermaid></div></template>


