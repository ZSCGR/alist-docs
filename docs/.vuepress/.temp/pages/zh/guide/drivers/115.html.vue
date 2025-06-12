<template><div><h1 id="_115-网盘-分享" tabindex="-1"><a class="header-anchor" href="#_115-网盘-分享"><span>115 网盘 / 分享</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p><RouteLink to="/zh/guide/drivers/115_open.html"><strong>115 官方 Open API</strong></RouteLink></p>
</div>
<h2 id="_115-个人网盘" tabindex="-1"><a class="header-anchor" href="#_115-个人网盘"><span>115 个人网盘</span></a></h2>
<h3 id="视频教程-优先选择文字教程" tabindex="-1"><a class="header-anchor" href="#视频教程-优先选择文字教程"><span><strong>视频教程(优先选择文字教程)</strong></span></a></h3>
<p>视频教程有可能因为时间关系导致部分视频内功能不可用或产生变化</p>
<p>所以推荐优先选择文字教程，当然如果你看不懂文字教程或者嫌麻烦也可以观看视频教程</p>
<p>视频发布时间：2024-10-24</p>
<p><a href="https://www.bilibili.com/video/BV1scy6Y6ESa" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1scy6Y6ESa</a></p>
<br/>
<h3 id="根文件夹-id" tabindex="-1"><a class="header-anchor" href="#根文件夹-id"><span><strong>根文件夹 ID</strong></span></a></h3>
<p>打开 115 网盘官网，点击进入要设置的文件夹时点击 URL 中 <code v-pre>cid</code>后面的数字</p>
<p>如 <a href="https://115.com/?cid=249163533602609229&amp;offset=0&amp;tab=&amp;mode=wangpan" target="_blank" rel="noopener noreferrer">https://115.com/?cid=249163533602609229&amp;offset=0&amp;tab=&amp;mode=wangpan</a></p>
<p>这个文件夹的 <code v-pre>根文件夹ID</code> 即为 <code v-pre>249163533602609229</code></p>
<br/>
<h3 id="cookie获取方式" tabindex="-1"><a class="header-anchor" href="#cookie获取方式"><span><strong>Cookie获取方式</strong></span></a></h3>
<p>挂载115云盘提示如下信息，是因为 115已经下架了 <code v-pre>Windows、Mac、Linux</code> 这三个客户端的应用</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"state"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"error"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"登录失败，系统已下架！如果你有电脑端的使用需求，我们诚挚邀请你下载体验115产品专属客户端“115浏览器”或在线使用“115网页端(115.com)”，畅享智能高效云生活。"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"errno"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"登录失败，系统已下架！如果你有电脑端的使用需求，我们诚挚邀请你下载体验115产品专属客户端“115浏览器”或在线使用“115网页端(115.com)”，畅享智能高效云生活。"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你获取的是这三个设备的Cookie自然就无法使用，请重新获取其它设备的Cookie进行挂载</p>
<br/>
<h4 id="_1-qrcode-扫码方式登录" tabindex="-1"><a class="header-anchor" href="#_1-qrcode-扫码方式登录"><span><strong>1. QRCode 扫码方式登录</strong></span></a></h4>
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
<hr>
<ol>
<li>点击 <i class="fa-solid fa-up fa-bounce" style="color: #70c6be;"></i> <Badge text="获取二维码" type="tip" color="rgb(112,198,190)" vertical="middle" />，然后使用115手机APP端进行扫码</li>
<li>APP扫码登录确认后，点击 <code v-pre> 使用115网盘 APP 扫描然后点击</code> 按钮，获取 <Badge text="Token" type="info" vertical="middle" /></li>
<li>将获取到的 <Badge text="Token" type="info" vertical="middle" /> 添加到 AList 115驱动的 <strong><code v-pre>二维码令牌</code></strong> 选项內，然后选择<code v-pre>Qrcode源</code>设备 (Cookie选项留空)
<ul>
<li>可选设备：<code v-pre>Web</code>，<code v-pre>android</code>，<code v-pre>ios</code>，<code v-pre>tv</code>，<code v-pre>alipaymini</code>，<code v-pre>wechatmini</code>，<code v-pre>qandroid</code>
<ul>
<li>不推荐选择 <code v-pre>Web</code> 和 <code v-pre>Android</code>(<code v-pre>ios</code>) ，因为自己常用的设备登录后会将原本登录的挤下线</li>
</ul>
</li>
</ul>
</li>
<li>填写 <Badge text="Token" type="info" vertical="middle" /> 选择设备保存后会自动将 <Badge text="Token" type="info" vertical="middle" /> 获取对应设备的 Cookie 进行自动填写</li>
</ol>
<br/>
<p><img src="/img/drivers/115/115_qrcode.png" alt="" loading="lazy"></p>
<br/>
<h4 id="_2-手动抓取-cookie-方式登录" tabindex="-1"><a class="header-anchor" href="#_2-手动抓取-cookie-方式登录"><span><strong>2. 手动抓取 Cookie 方式登录</strong></span></a></h4>
<p><code v-pre>Cookie</code>可以浏览器登录从浏览器的<code v-pre>api</code>中获取，也可用抓包 115 应用获取 cookie，115 应用的有效期比较长，注意 cookie 最后不要有<code v-pre>;</code>。</p>
<p>Chrome浏览器可以使用<a href="https://github.com/yenkn/115-to-alist" target="_blank" rel="noopener noreferrer">115ToAlist插件</a>自动同步Cookie：</p>
<p><img src="https://github.com/yenkn/115-to-alist/raw/main/docs/tutorial.png" alt="115ToAlist tutorial" loading="lazy"></p>
<br/>
<h4 id="_3-使用python脚本获取-cookie" tabindex="-1"><a class="header-anchor" href="#_3-使用python脚本获取-cookie"><span><strong>3. 使用Python脚本获取 Cookie</strong></span></a></h4>
<p><i class="fa-solid fa-lightbulb fa-bounce" style="color: #4abf8a;"></i> 展开详细说明进行查看教程和脚本源码</p>
<details class="hint-container details"><summary>详细说明</summary>
<details class="hint-container details"><summary>查看源码</summary>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-python"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/env python3</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># encoding: utf-8</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"扫码获取 115 cookie"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">__author__ </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "ChenyangGao &#x3C;https://chenyanggao.github.io>"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">__version__</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">__all__</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    "AppEnum"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"get_qrcode_token"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"get_qrcode_status"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"post_qrcode_result"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    "get_qrcode"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"login_with_qrcode"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">if</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> __name__</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> ==</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "__main__"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> argparse </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ArgumentParser, RawTextHelpFormatter</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    parser </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> ArgumentParser</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">description</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"""</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">\</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">扫码获取 115 cookie</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">默认在命令行输出，需要安装 qrcode: pip install qrcode</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    - https://pypi.org/project/qrcode/</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">可以指定 -o 或 --open-qrcode 直接打开图片扫码</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">formatter_class</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">RawTextHelpFormatter)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    parser.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">add_argument</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"app"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">nargs</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"?"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">choices</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"web"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"android"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"ios"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"linux"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"mac"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"windows"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"tv"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"alipaymini"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"wechatmini"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"qandroid"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">), </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">default</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"web"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">help</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"选择一个 app 进行登录，注意：这会把已经登录的相同 app 踢下线"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    parser.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">add_argument</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"-o"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"--open-qrcode"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">action</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"store_true"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">help</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"打开二维码图片，而不是在命令行输出"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    parser.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">add_argument</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"-v"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"--version"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">action</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"store_true"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">help</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"输出版本号"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    args </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> parser.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">parse_args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> args.version:</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">        print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"."</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">join</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">__version__</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)))</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        raise</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF"> SystemExit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> enum </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> Enum</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> json </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> loads</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> urllib.parse </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> urlencode</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> urllib.request </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> urlopen, Request</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">AppEnum </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> Enum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"AppEnum"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"web, android, ios, linux, mac, windows, tv, alipaymini, wechatmini, qandroid"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> get_enum_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">val</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic"> cls</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> isinstance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(val, </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">cls</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> val.name</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    try</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        if</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> isinstance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(val, </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            return</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> cls</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[val].name</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    except</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF"> KeyError</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        pass</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> cls</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(val).name</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> get_qrcode_token</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">():</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    """获取登录二维码，扫码可用</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    GET https://qrcodeapi.115.com/api/1.0/web/1.0/token/</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    :return: dict</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    """</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    api </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "https://qrcodeapi.115.com/api/1.0/web/1.0/token/"</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> loads</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">urlopen</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(api).</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">read</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">())</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> get_qrcode_status</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">payload</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    """获取二维码的状态（未扫描、已扫描、已登录、已取消、已过期等）</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    GET https://qrcodeapi.115.com/get/status/</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    :param payload: 请求的查询参数，取自 `login_qrcode_token` 接口响应，有 3 个</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        - uid:  str</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        - time: int</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        - sign: str</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    :return: dict</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    """</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    api </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "https://qrcodeapi.115.com/get/status/?"</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> urlencode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(payload)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> loads</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">urlopen</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(api).</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">read</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">())</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> post_qrcode_result</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">uid</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"web"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    """获取扫码登录的结果，并且绑定设备，包含 cookie</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    POST https://passportapi.115.com/app/1.0/{app}/1.0/login/qrcode/</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    :param uid: 二维码的 uid，取自 `login_qrcode_token` 接口响应</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    :param app: 扫码绑定的设备，可以是 int、str 或者 AppEnum</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        app 目前发现的可用值：</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            - 1,  "web",        AppEnum.web</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            - 2,  "android",    AppEnum.android</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            - 3,  "ios",        AppEnum.ios</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            - 4,  "linux",      AppEnum.linux</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            - 5,  "mac",        AppEnum.mac</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            - 6,  "windows",    AppEnum.windows</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            - 7,  "tv",         AppEnum.tv</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            - 8,  "alipaymini", AppEnum.alipaymini</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            - 9,  "wechatmini", AppEnum.wechatmini</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            - 10, "qandroid",   AppEnum.qandroid</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    :return: dict，包含 cookie</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    """</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    app </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> get_enum_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(app, AppEnum)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    payload </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"app"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: app, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"account"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: uid}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    api </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "https://passportapi.115.com/app/1.0/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/1.0/login/qrcode/"</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> %</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> app</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> loads</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">urlopen</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">Request</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(api, </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">data</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">urlencode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(payload).</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">encode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"utf-8"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">), </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">method</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"POST"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)).</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">read</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">())</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> get_qrcode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">uid</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    """获取二维码图片（注意不是链接）</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    :return: 一个文件对象，可以读取</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    """</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    url </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "https://qrcodeapi.115.com/api/1.0/mac/1.0/qrcode?uid=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> %</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> uid</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> urlopen</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(url)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> login_with_qrcode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"web"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> scan_in_console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">True</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    """用二维码登录</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    :param app: 扫码绑定的设备，可以是 int、str 或者 AppEnum</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        app 目前发现的可用值：</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            - 1,  "web",        AppEnum.web</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            - 2,  "android",    AppEnum.android</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            - 3,  "ios",        AppEnum.ios</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            - 4,  "linux",      AppEnum.linux</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            - 5,  "mac",        AppEnum.mac</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            - 6,  "windows",    AppEnum.windows</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            - 7,  "tv",         AppEnum.tv</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            - 8,  "alipaymini", AppEnum.alipaymini</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            - 9,  "wechatmini", AppEnum.wechatmini</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            - 10, "qandroid",   AppEnum.qandroid</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    :return: dict，扫码登录结果</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    """</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    qrcode_token </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> get_qrcode_token</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    qrcode </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> qrcode_token.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">pop</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"qrcode"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> scan_in_console:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        try</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> qrcode </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> QRCode</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        except</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF"> ModuleNotFoundError</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> sys </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> executable</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> subprocess </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> run</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">            run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">([executable, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"-m"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"pip"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"install"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"qrcode"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">], </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">check</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">True</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> qrcode </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> QRCode </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># type: ignore</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        qr </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> QRCode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">border</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        qr.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">add_data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(qrcode)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        qr.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">print_ascii</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">tty</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">True</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> atexit </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> register</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> os </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> remove</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> threading </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> Thread</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> tempfile </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> NamedTemporaryFile</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        qrcode_image </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> get_qrcode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(qrcode_token[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"uid"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">])</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        with</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> NamedTemporaryFile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">suffix</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">".png"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">delete</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">False</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">as</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> f:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            f.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">write</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(qrcode_image.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">read</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">())</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            f.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">flush</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">        register</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">lambda</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">remove</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(f.name))</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> open_qrcode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">():</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            platform </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> __import__</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"platform"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">).</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">system</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> platform </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">==</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Windows"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">                from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> os </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> startfile </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># type: ignore</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">                startfile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(f.name)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            elif</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> platform </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">==</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Darwin"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">                from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> subprocess </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> run</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">                run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">([</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"open"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, f.name])</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">                from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> subprocess </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> run</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">                run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">([</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"xdg-open"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, f.name])</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">        Thread</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">target</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">open_qrcode).</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    while</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> True</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        try</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            resp </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> get_qrcode_status</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(qrcode_token)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        except</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF"> TimeoutError</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            continue</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        status </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> resp[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">].</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"status"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> status </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">            print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"[status=0] qrcode: waiting"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        elif</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> status </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">            print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"[status=1] qrcode: scanned"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        elif</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> status </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">            print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"[status=2] qrcode: signed in"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            break</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        elif</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> status </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">==</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            raise</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF"> OSError</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"[status=-1] qrcode: expired"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        elif</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> status </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">==</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            raise</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF"> OSError</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"[status=-2] qrcode: canceled"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            raise</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF"> OSError</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"qrcode: aborted with </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> %</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> resp)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> post_qrcode_result</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(qrcode_token[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"uid"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">], app)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">if</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> __name__</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> ==</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "__main__"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    resp </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> login_with_qrcode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(args.app, </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">scan_in_console</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">not</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> args.open_qrcode)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"; "</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">join</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> %</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> t </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> t </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> resp[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'data'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">][</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'cookie'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">].</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">items</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()))</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>源码来自：<a href="https://gist.github.com/ChenyangGao/d26a592a0aeb13465511c885d5c7ad61" target="_blank" rel="noopener noreferrer"><strong>https://gist.github.com/ChenyangGao/d26a592a0aeb13465511c885d5c7ad61</strong></a></p>
</details>
<br/>
<ol>
<li>
<p>需要安装 <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer"><strong>Python 3.11.x</strong></a> 以上版本</p>
</li>
<li>
<p>如果二维码在 <code v-pre>CMD</code> 和 <code v-pre>powershell</code> 两个终端无法显示正常，可以使用<code v-pre>-o</code>参数生成图片的方式来扫码，或者需要额外安装一个终端</p>
<ol>
<li>使用 <code v-pre>-o</code> 参数，生成图片方式然后扫码确认
<ul>
<li>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-python"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">python main.py wechatmini </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">o</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
</li>
</ol>
<p>可以获取的设备有如下，如果不填写设备默认使用的是 <code v-pre>Web</code> 端的设备</p>
<p><code v-pre>Web</code>，<code v-pre>android</code>，<code v-pre>ios</code>，<s><code v-pre>linux</code>，<code v-pre>mac</code>，<code v-pre>windows</code></s>，<code v-pre>tv</code>，<code v-pre>alipaymini</code>，<code v-pre>wechatmini</code>，<code v-pre>qandroid</code></p>
<ul>
<li><code v-pre>alipaymini</code> 和 <code v-pre>wechatmini</code> 分别是支付宝小程序和微信小程序</li>
<li><strong>Windows、Mac、Linux 应该不能使用了，最近官方把客户端下架了</strong></li>
<li>建议使用一些自己不常用的设备，否则登录会将之前的挤掉</li>
</ul>
<hr>
<ol start="2">
<li>
<p>另外安装终端</p>
<ul>
<li>Windows Store：<strong><a href="https://apps.microsoft.com/detail/9n0dx20hk701?rtc=1&amp;hl=zh-cn&amp;gl=CN" target="_blank" rel="noopener noreferrer">https://apps.microsoft.com/detail/9n0dx20hk701?rtc=1&amp;hl=zh-cn&amp;gl=CN</a></strong></li>
<li>GitHub 下载：<strong><a href="https://github.com/microsoft/terminal/releases" target="_blank" rel="noopener noreferrer">https://github.com/microsoft/terminal/releases</a></strong></li>
</ul>
</li>
<li>
<p>其它方式自行解决</p>
</li>
</ol>
</li>
</ol>
<hr>
<p>执行命令，获取二维码 APP扫码获取 <code v-pre>Cookie</code></p>
<Tabs :data='[{"id":"直接执行"},{"id":"使用-o参数"}]' tab-id="qr">
<template #title0="{ value, isActive }">直接执行</template>
<template #title1="{ value, isActive }">使用-o参数</template>
<template #tab0="{ value, isActive }">
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-shell"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">PS</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> C:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\U</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">sers</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">33</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">esktop</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">5> </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">python</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --version</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Python</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 3.12.2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">PS</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> C:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\U</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">sers</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">33</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">esktop</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">5> </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">python</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> main.py</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> wechatmini</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">█▀▀▀▀▀▀▀█▀▀▀▀█▀███▀▀▀█▀█▀▀▀██▀█▀▀▀▀▀▀▀█</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">█ █▀▀▀█ █ █▀▄▀█▄▀▀█▀█  ▄█▀▀ █▀█ █▀▀▀█ █</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">█ █   █ █▀█  ▄ ▄▀▄ ▀ ▀▄ █▀▄▀█▀█ █   █ █</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">█ ▀▀▀▀▀ █▀█ ▄▀▄ ▄ ▄ █ ▄▀▄▀█▀█▀█ ▀▀▀▀▀ █</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">█▀██▀▀▀▀▀▀▀ ▄█ ▀█ █▀▀▀ █▀ ▄▄▄ ▀██▀█▀▀▀█</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">██▄▀▀▄▀▀▀▀ ▄██▀▄██▀██▄█ █▀▀▀ ▀▀▀▄▄▀ ▄▀█</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">█   ▀██▀████ ▀ ▀ ▀ █▀ ▀▀▄▄▀▄ █▄▀▄▄ ▀▀▀█</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">█ ▄▀▀█▄▀█▀▀██ ▀▀▀▀ ▄▀ ▀███▀██▀▄▀▀▄▄   █</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">██▄█ ▄▀▀█▄   ▀█▄▀▄▄ █ █▀ ▄▀▀  ▄▀█▀█▀█▀█</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">███▄ █ ▀ ▀█  █▄ ▀▀▀▀█▀█▀█ ▄▀▀ ▄ █  ██▄█</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">█ █▀▀▀█ █ ▄▄▀▄▄▀ █▄▄▀█▀ █▀▄█  ▀▀▀ ▀█▀ █</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">█ █   █ █▄ ▄▀ █▀▀ ▀▄▀▀█▀▀  █ █ ▄█▀▄▄ ▀█</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">█ ▀▀▀▀▀ █▀  █▄▀ ▀ ▄█▄ █▄▀▀█▄ ▀ ▀▄▄ ▄▄ █</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接执行 二维码会出现在终端中进行显示</p>
</template>
<template #tab1="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">PS</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> C:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\U</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">sers</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">33</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">esktop</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">5> </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">python</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --version</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Python</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 3.12.2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">PS</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> C:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\U</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">sers</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">33</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">esktop</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">5> </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">python</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> main.py</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> wechatmini</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -o</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code v-pre>-o</code> 参数后会自动弹出一张二维码图片</p>
</template>
</Tabs>
</details>
<br/>
<h3 id="秒传" tabindex="-1"><a class="header-anchor" href="#秒传"><span><strong>秒传</strong></span></a></h3>
<ul>
<li><strong>v.3.27.0</strong> 版本 增强秒传：可以直接通过复制方式来和<code v-pre>阿里云盘Open</code>进行相互秒传文件
<ul>
<li>前提是要从115秒传到阿里云盘Open的文件，阿里云盘Open已经存在，否则就是正常复制任务。</li>
<li>如果将115的文件秒传到阿里云盘，需要将阿里云盘的秒传选项打开否则为正常模式上传</li>
</ul>
</li>
</ul>
<p>如果要使用秒传来上传文件建议在自己家用电脑本地搭建一个AList添加一个<code v-pre>本地存储</code>和<code v-pre>115云盘</code>进行复制秒传这样节省资源。</p>
<br/>
<h3 id="离线下载" tabindex="-1"><a class="header-anchor" href="#离线下载"><span><strong>离线下载</strong></span></a></h3>
<Badge text="v3.37.0" type="info" vertical="middle" /> 及以上版本支持在AList调用115离线下载功能<p>右下角选择 <span style="color: rgb(24, 144, 255);"><svg fill="none" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="toolbar-toggle hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-ifkxHPo-css" height="1em" width="1em" style="overflow: visible;"><path fill="currentColor" d="M7 14a2 2 0 100-4 2 2 0 000 4zM14 12a2 2 0 11-4 0 2 2 0 014 0zM17 14a2 2 0 100-4 2 2 0 000 4z"></path><path fill="currentColor" fill-rule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" clip-rule="evenodd"></path></svg></span><span style="color: rgb(24, 144, 255);"><svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-iipViGO-css" tips="offline_download" height="1em" width="1em" style="overflow: visible;"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M421.83 293.82A144 144 0 00218.18 90.17M353.94 225.94a48 48 0 00-67.88-67.88"></path><path stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M192 464v-48M90.18 421.82l33.94-33.94M48 320h48"></path><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M286.06 158.06L172.92 271.19a32 32 0 01-45.25 0L105 248.57a32 32 0 010-45.26L218.18 90.17M421.83 293.82L308.69 407a32 32 0 01-45.26 0l-22.62-22.63a32 32 0 010-45.26l113.13-113.17M139.6 169.98l67.88 67.89M275.36 305.75l67.89 67.88"></path> </svg></span> 离线下载选项选择<code v-pre>115 Cloud</code></p>
<ul>
<li>支持：<code v-pre>magnet</code>、<code v-pre>http</code>、 <code v-pre>ed2k</code> 链接</li>
</ul>
<p>仅支持使用115个人云盘使用离线下载，非115个人云盘会提示如下错误，<strong>虽然添加离线下载提示成功但是在后台会提示错误</strong></p>
<ul>
<li>unsupported storage driver for offline download, only 115 Cloud is supported</li>
</ul>
<p><img src="/img/drivers/offline_download_error.png" alt="" loading="lazy"></p>
<ul>
<li>使用115离线下载的一些提示
<ol>
<li>可能会发生不同步的问题（手动右下角刷新 <span style="color: rgb(24, 144, 255);"><svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-ifkxHPo-css" tips="refresh" height="1em" width="1em" style="overflow: visible;"><path fill="none" d="M0 0h24v24H0z"></path><path d="M5.463 4.433A9.961 9.961 0 0112 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 006.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0112 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0013.54 5.772l.997 1.795z"></path></svg></span>）</li>
<li>目前当下载成功后，删除离线列表中完成的任务</li>
<li>115已经在离线列表中的任务url不能再次添加</li>
</ol>
</li>
</ul>
<br/>
<h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-306" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid><h2 id="_115网盘分享" tabindex="-1"><a class="header-anchor" href="#_115网盘分享"><span><strong>115网盘分享</strong></span></a></h2>
<p><img src="/img/drivers/115/url_demo.png" alt="url_demo" loading="lazy"></p>
<p><code v-pre>分享链接ID</code><sup>1</sup> 和 <code v-pre>分享链接提取码</code><sup>2</sup> 分别如何获取一目了然</p>
<h3 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id"><span><strong>根文件夹ID</strong></span></a></h3>
<p>默认为空，挂载整个目录文件。</p>
<p>文件夹ID 分根文件夹ID和子文件夹ID，下面分别演示了如何获取<code v-pre>分享根文件夹目录ID</code><sup>1</sup>以及<code v-pre>其它子文件夹目录ID</code><sup>2</sup></p>
<Tabs :data='[{"id":"1分享根文件夹目录ID"},{"id":"2其它子文件夹目录ID"}]' tab-id="115">
<template #title0="{ value, isActive }">1分享根文件夹目录ID</template>
<template #title1="{ value, isActive }">2其它子文件夹目录ID</template>
<template #tab0="{ value, isActive }">
<p>打开开发者模式(F12)先将请求全部清空，我们进入文件夹，先将全部请求清空，</p>
<p>我们再点击根文件夹进入，右侧会有一个新的请求，然后选择<code v-pre>载荷</code>就能看到我们的这个文件夹的ID (cid)</p>
<p><img src="/img/drivers/115/root_cid.png" alt="url_demo" loading="lazy"></p>
</template>
<template #tab1="{ value, isActive }">
<p>打开开发者模式(F12)先将请求全部清空，我们进入文件夹，先将全部请求清空，</p>
<p>右侧会有一个新的请求，然后选择<code v-pre>预览</code> 然后进行展开查看，就可以看到其它子文件夹的ID (cid)</p>
<p><img src="/img/drivers/115/file_cid.png" alt="url_demo" loading="lazy"></p>
</template>
</Tabs>
<br/>
<h3 id="错误提示" tabindex="-1"><a class="header-anchor" href="#错误提示"><span><strong>错误提示</strong></span></a></h3>
<p>例如下图所示的115分享链接分享过期，但是分享链接还能打开</p>
<p><img src="/img/drivers/115/add_error.png" alt="url_demo" loading="lazy"></p>
<p>但是在添加保存时候会出现如下错误码：</p>
<p><code v-pre>Failed init storage but storage is already created: failed init storage: failed to get share snap: json: cannot unmarshal number into Go struct field .data.shareinfo.share_state of type string </code></p>
<h3 id="默认使用的下载方式-1" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式-1"><span><strong>默认使用的下载方式</strong></span></a></h3>
<Mermaid id="mermaid-368" code="eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="></Mermaid></div></template>


<script setup lang="ts">
import { ref } from "vue";
import { api } from "@Api"
const btnText = ref("获取二维码");
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
  const resp = await fetch(`${api()}/proxy/qrcodeapi.115.com/api/1.0/web/1.0/token`);
  const res = await resp.json();
  console.log(res)
  btnText.value='使用115网盘 APP 扫描然后点击'
  state.value = 2;
  ckData.value = {
    uid: res.data.uid,
    time: res.data.time.toString(),
    sign: res.data.sign,
    _ : (new Date().getTime()/ 1000).toString()
  };
  src.value = `${api()}/qr/?size=400&text=${encodeURIComponent(res.data.qrcode)}`
}
const getToken = async ()=>{
  state.value = 3;
  btnText.value = '等待...';
  const resp = await fetch(`${api()}/proxy/qrcodeapi.115.com/get/status/?uid=${ckData.value.uid}&time=${ckData.value.time}&sign=${ckData.value.sign}&_=${ckData.value._}`);
  const res = await resp.json();
  const {data:{version,status,msg}} = res;
  if(status !==  2){
    state.value = 2;
    btnText.value = '使用115网盘 APP 扫描然后点击'
    alert('Status:' + status);
    return
  }
  token.value = ckData.value.uid
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