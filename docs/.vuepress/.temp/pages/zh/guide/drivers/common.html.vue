<template><div><h1 id="通用项" tabindex="-1"><a class="header-anchor" href="#通用项"><span>通用项</span></a></h1>
<h2 id="挂载路径" tabindex="-1"><a class="header-anchor" href="#挂载路径"><span><strong>挂载路径</strong></span></a></h2>
<p>唯一标识，对外展示的名称，要挂载到的位置，如果要挂载到根目录，就是 <code v-pre>/</code></p>
<p><img src="/img/drivers/common/path_b.png" alt="" data-mode="lightmode-only" loading="lazy"></p>
<p><img src="/img/drivers/common/path_h.png" alt="" data-mode="darkmode-only" loading="lazy"></p>
<p>挂载路径名称重复使用</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Failed create storage in database: UNIQUE constraint failed: x_storages.mount_path</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>挂载路径名称没有填写</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Key: 'Storage.MountPath' Error:Field validation for 'MountPath' failed on the 'required' tag</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><br/>
<h2 id="序号" tabindex="-1"><a class="header-anchor" href="#序号"><span><strong>序号</strong></span></a></h2>
<p>当有多个账户时，用于排序，越小越靠前，可以填写负数</p>
<br/>
<h2 id="备注" tabindex="-1"><a class="header-anchor" href="#备注"><span><strong>备注</strong></span></a></h2>
<p>随便你想填什么，只是提醒你这个存储是什么</p>
<h3 id="引用" tabindex="-1"><a class="header-anchor" href="#引用"><span><strong>引用</strong>  <Badge text="≥ 3.42.0" type="info" vertical="middle" /></span></a></h3>
<p>从 <code v-pre>已挂载的存储</code> 中引用认证、令牌等，同一个Token多个网盘使用</p>
<p>目前仅支持如下网盘：</p>
<ul>
<li>中国移动云盘</li>
<li>阿里云盘Open</li>
<li>天翼云盘客户端</li>
<li>123云盘分享（引用123云盘）</li>
<li>Cloudreve V3 / V4</li>
</ul>
<p>在存储设置中将<code v-pre>备注(Remark)</code>的第一行设置为：<strong>ref:/挂载路径</strong></p>
<ul>
<li><a href="https://github.com/AlistGo/alist/pull/7805" target="_blank" rel="noopener noreferrer">https://github.com/AlistGo/alist/pull/7805</a></li>
</ul>
<p><img src="/img/drivers/ref_token.png" alt="" loading="lazy"></p>
<br/>
<h2 id="启用签名" tabindex="-1"><a class="header-anchor" href="#启用签名"><span><strong>启用签名</strong></span></a></h2>
<p>对文件进行签名加密(不会需要密码)，仅对本驱动生效，如果别的没启用签名也没设置<code v-pre>签名全部</code>和<code v-pre>元信息加密</code>其他的不会进行签名</p>
<p>使用场景：不想开启全部签名，也不想设置元信息加密，只想对某驱动进行签名加密防止被扫</p>
<p>影响范围：<code v-pre>设置--&gt;全局--&gt;签名所有</code> &gt;  <code v-pre>元信息目录加密</code> &gt; <code v-pre>单驱动签名</code></p>
<br/>
<h2 id="禁用索引" tabindex="-1"><a class="header-anchor" href="#禁用索引"><span><strong>禁用索引</strong></span></a></h2>
<p>允许用户禁用存储索引。</p>
<ul>
<li>例如索引选项中的<code v-pre>忽略索引</code>，启用<code v-pre>禁用索引</code>后不需要再去配置了，这样也更方便一些</li>
</ul>
<p><a href="https://github.com/AlistGo/alist/pull/7730" target="_blank" rel="noopener noreferrer">alist#7730</a>、<a href="https://github.com/AlistGo/alist-web/pull/219" target="_blank" rel="noopener noreferrer">alist-web#219</a></p>
<br/>
<h2 id="缓存过期" tabindex="-1"><a class="header-anchor" href="#缓存过期"><span><strong>缓存过期</strong></span></a></h2>
<p>目录结构的缓存时间。</p>
<br/>
<h2 id="web-代理" tabindex="-1"><a class="header-anchor" href="#web-代理"><span><strong>Web 代理</strong></span></a></h2>
<p>网页预览、下载和直接链接是否通过中转。如果你打开此项，建议你设置<RouteLink to="/zh/config/configuration.html#site_url">site_url</RouteLink>，以帮助alist更好的工作。</p>
<hr>
<ul>
<li>Web代理：是使用网页时候的策略，默认为本地代理，如果填写了代理URL并且启用了Web代理使用的是代理URL</li>
<li>WebDAV策略：是在使用WebDAV功能时候的选项，
<ul>
<li>如果有302选项默认为302，如果没有302选项默认为本地代理，如果要使用代理URL请填写并且手动切换到代理URL策略</li>
</ul>
</li>
</ul>
<p>两者是不同的配置</p>
<br/>
<h2 id="webdav-策略" tabindex="-1"><a class="header-anchor" href="#webdav-策略"><span><strong>WebDAV 策略</strong></span></a></h2>
<ul>
<li>302 重定向：重定向到真实链接</li>
<li>使用代理 URL：重定向到代理 URL</li>
<li>本机代理：直接通过本地中转返回数据（最佳兼容性）</li>
</ul>
<hr>
<ul>
<li>302重定向：虽然不会消耗流量，但是不建议共享使用，有封禁账户的风险</li>
<li>代理URL：会消耗搭建代理URL的流量</li>
<li>本地代理：会消耗搭建AList设备的流量</li>
</ul>
<h3 id="三种模式说明" tabindex="-1"><a class="header-anchor" href="#三种模式说明"><span><strong>三种模式说明</strong></span></a></h3>
<Mermaid id="mermaid-195" code="eJyFUUtLAlEYXTu/YpYGDUXtogR7LAIXEbSKFhVFgRCY0KIJpvKZ+SLLUkFD08BHimKT49SP6X53Zv5F33hHMZAaGPjmzDnnnvNdQRA477HXfbDAz8/OGcEoNDKQSH5Ll0QpaonAlseNM83VINdkCGdKDt0nZ/tHux4v79rkbGt2LfVKQ+/0LkrUnNN1fOrVm9eIOTfW+cU9z4yD1ytliCe1rAz+NqKMSXqIPFoM9kFjLzTVhVATkipRStCXoBKh4Yr+fDvF2Zzbdkab2uFsy3aiFhBc2baibroQXT0fD3uB4ZaWHE581zgeH3MStWwHzyFKjJmRfkFTntCMyHUj3aHpAlEUot7TaF6X0lY83I5+rRI5oqsqlDLwVYVmi+bCbBaXmbsgOERmCv4QFjakS9N6mE9cMQkQiGqp1gjU1Zq5mkGC4bbGIEjEpgfZzJO1jM+Q8tArW0SIP0CgTXqx0W0ZV0UiS1r1jcg3TIP1LL+h+O+0NFEHpTe4RVTojU8oBcVVk4upJ/38pwD5iPzqMLnAmPFYhUFnXxf1Zp1JRbgfbPKYQg=="></Mermaid><br/>
<h2 id="下载代理-url" tabindex="-1"><a class="header-anchor" href="#下载代理-url"><span><strong>下载代理 URL</strong></span></a></h2>
<p>开启代理时不填写此字段，默认使用本机进行传输。提供了下面两种代理方式：</p>
<Tabs :data='[{"id":"cloudflare workers"},{"id":"通用二进制"}]'>
<template #title0="{ value, isActive }">cloudflare workers</template>
<template #title1="{ value, isActive }">通用二进制</template>
<template #tab0="{ value, isActive }">
<p>可以使用 Cloudflare Workers 做代理，这里填写 Workers 地址即可。</p>
<p>Workers 代码可以在 <a href="https://github.com/alist-org/alist-proxy/blob/main/alist-proxy.js" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist-proxy/blob/main/alist-proxy.js</a> 找到，实际使用时需要替换其中的这两个变量：</p>
<ul>
<li>ADDRESS: 你的 AList 地址，必须加上协议头，后面不能跟 <code v-pre>/</code>。如 <code v-pre>https://pan.nn.ci</code>；</li>
<li>TOKEN: 在 AList 管理页面中进入“其他设置”得到；</li>
<li>WORKER_ADDRESS: 你的 Worker 地址，通常与 <strong>下载代理URL</strong> 相同。</li>
</ul>
<p>⚠️ Cloudflare Workers 免费CDN支持兼容(不论国内还是国外)的只有 <strong>http80端口</strong> 和 <strong>https443端口</strong>，来自群友测试</p>
<ul>
<li>在Alist后台挂载配置时 填写 <strong>下载代理URL</strong> 时候的 链接结尾 不可以带 <code v-pre>/</code></li>
</ul>
<p>若看不懂<a href="https://anwen-anyi.github.io/index/11-durl.html" target="_blank" rel="noopener noreferrer"><strong>有拆解详细</strong></a>的教程</p>
<p></p>
</template>
<template #tab1="{ value, isActive }">
<p>也可以使用另一台机器进行代理，在 <a href="https://github.com/alist-org/alist-proxy/releases" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist-proxy/releases</a> 下载程序并通过 <code v-pre>./alist-proxy -help</code> 查看使用方法。</p>
<p>如果不懂有详细<a href="https://www.bilibili.com/video/BV17N411S7fg/" target="_blank" rel="noopener noreferrer"><strong>视频教程</strong></a></p>
</template>
</Tabs>
<p>你甚至可以开发自己的代理程序，一般步骤是：</p>
<ul>
<li>下载时会请求 <code v-pre>PROXY_URL/path?sign=sign_value</code></li>
<li>在代理程序中验证 sign，sign 的计算方法为：</li>
</ul>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-js"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> to_sign</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> `</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">${</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">path</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">${</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">expireTimeStamp</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">`</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> _sign</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> safeBase64</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">hmac_sha256</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">to_sign</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B">TOKEN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">));</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> sign</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> `</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">${</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">_sign</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">${</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">expireTimeStamp</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">`</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>TOKEN</code>即管理员账户的<RouteLink to="/zh/config/other.html#token">token</RouteLink>.</p>
<ul>
<li>验证签名正确后，请求 <code v-pre>HOST/api/fs/link</code>，可以得到文件的 URL 和要携带的请求头</li>
<li>使用信息请求和返回</li>
</ul>
<br/>
<h2 id="排序相关" tabindex="-1"><a class="header-anchor" href="#排序相关"><span><strong>排序相关</strong></span></a></h2>
<ul>
<li>排序方式：按什么排序</li>
<li>排序方向：排序方向是升序还是降序</li>
</ul>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>有些驱动器使用自己的排序方法，可能会有所不同。</p>
</div>
<br/>
<h2 id="提取文件夹" tabindex="-1"><a class="header-anchor" href="#提取文件夹"><span><strong>提取文件夹</strong></span></a></h2>
<ul>
<li>提取到前面：排序时将所有文件夹放在前面</li>
<li>提取到后面：排序时将所有文件夹放在后面</li>
</ul>
</div></template>


