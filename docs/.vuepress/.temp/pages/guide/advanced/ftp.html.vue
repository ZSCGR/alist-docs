<template><div><h1 id="ftp-sftp" tabindex="-1"><a class="header-anchor" href="#ftp-sftp"><span>FTP / SFTP</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>所有在网页端管理页面对 FTP 相关配置进行的调整必须重启 AList 才会生效。</p>
<p>使用 FTP 下载时只会使用本地代理。</p>
</div>
<h2 id="ftp-配置文件" tabindex="-1"><a class="header-anchor" href="#ftp-配置文件"><span><strong>FTP 配置文件</strong></span></a></h2>
<table>
<thead>
<tr>
<th>字段</th>
<th>含义</th>
<th>示例值</th>
</tr>
</thead>
<tbody>
<tr>
<td>enable</td>
<td>是否启用</td>
<td><code v-pre>true</code> / <code v-pre>false</code></td>
</tr>
<tr>
<td>listen</td>
<td>(允许访问的IP掩码):端口</td>
<td><code v-pre>&quot;:5221&quot;</code>（默认） / <code v-pre>&quot;0.0.0.0:21&quot;</code> / <code v-pre>&quot;127.0.0.1:2121&quot;</code></td>
</tr>
<tr>
<td>find_pasv_port_attempts</td>
<td>被动传输时因端口冲突而重新寻找端口的最大尝试次数</td>
<td><code v-pre>50</code></td>
</tr>
<tr>
<td>active_transfer_port_non_20</td>
<td>启用20以外的端口作为主动传输端口</td>
<td><code v-pre>true</code> / <code v-pre>false</code></td>
</tr>
<tr>
<td>idle_timeout</td>
<td>客户端无请求情况下的最长待机时间（秒）</td>
<td><code v-pre>900</code></td>
</tr>
<tr>
<td>connection_timeout</td>
<td>连接超时时间</td>
<td><code v-pre>30</code></td>
</tr>
<tr>
<td>disable_active_mode</td>
<td>禁用主动传输模式</td>
<td><code v-pre>true</code> / <code v-pre>false</code></td>
</tr>
<tr>
<td>default_transfer_binary</td>
<td>默认以二进制模式传输</td>
<td><code v-pre>true</code> / <code v-pre>false</code></td>
</tr>
<tr>
<td>enable_active_conn_ip_check</td>
<td>主动传输模式下对数据流TCP连接的客户端进行IP检查</td>
<td><code v-pre>true</code> / <code v-pre>false</code></td>
</tr>
<tr>
<td>enable_pasv_conn_ip_check</td>
<td>被动传输模式下对数据流TCP连接的客户端进行IP检查</td>
<td><code v-pre>true</code> / <code v-pre>false</code></td>
</tr>
</tbody>
</table>
<h2 id="ftp-设置" tabindex="-1"><a class="header-anchor" href="#ftp-设置"><span><strong>FTP 设置</strong></span></a></h2>
<p>在了解 FTP 的设置选项前需要先了解 FTP 协议的工作方式，FTP 协议使用<strong>两个 TCP 连接</strong>进行交互，它们分别被称为“<strong>控制流</strong>”和“<strong>数据流</strong>”，21 号端口是 FTP 协议的默认控制流端口号，FTP 服务器会持续监听这一端口号等待客户端的连接并给出响应，<strong>控制流只传输客户端的请求指令和服务端的错误信息，不传输文件内容和文件列表</strong>。在 AList 中，控制流端口号由配置文件内的<code v-pre>listen</code>参数确定，默认为 5221，客户端必须能够访问服务端的这一端口，协议才可以正常工作。</p>
<p>而数据流的建立主要有两种方式，被称为“主动模式”和“被动模式”：</p>
<p>在主动模式下，客户端主动监听一个端口，并通过<code v-pre>PORT</code>指令将端口号发送给服务端，服务端主动连接客户端并传输文件或文件列表。在这种模式下，客户端需要能够被服务端直接访问，因此在当前 NAT 普及的情况下几乎只有服务端和客户端处在同一子网内时才能发挥作用。</p>
<Mermaid id="mermaid-153" code="eJw9TksOwVAUnXcV3UA3YGBkYkTEBkQakSDxm5NIPJT6RCVSor5NBJ2g0Rc203tbo27Bo/Hu6OTc85MkSajlawU5Irq2A10TTQOoKnz5qlyuy6WsHMtncpVMURDZwXmN5O4dL1I0inofugbDEREHByA3vDZBHb0bzWQilUal7TrbgCo4fIC950Zv3oonQbdg0YCxglML+2dmZB9QN6DefzU8mtVw53+i/1riYMdpVgG6iZoFzsM79lh+KAgo4ekB7bj2yaUr/zlBjQ27IdFCAGTmG6bwAVsWo7M="></Mermaid><p>在被动模式下，客户端首先在控制流中发送<code v-pre>PASV</code>或<code v-pre>EPSV</code>命令，要求服务端新监听一个数据流端口，服务端在控制流中向客户端返回新监听的端口的端口号，待客户端与该端口建立连接以后再进行数据传输。在这种模式下，服务端不主动向客户端发起连接，因此只需要服务端处在 NAT 之外即可，但因为被动传输的传输端口不是预先确定，而是在连接发起前才确定的，因此在面对服务端和客户端之间存在端口映射，或服务端仅有一部分端口允许客户端连接的复杂网络环境时就需要额外配置。</p>
<Mermaid id="mermaid-157" code="eJx9j8FKw0AURff5ivzA/EAXBVEX3Q0o7osEKaig1r0Fi2NNE6M1gpZiquJAtHbTRprR/sy8mXGVX/DFxCydzby5vHvnXEKI1W61d52abcYx9LjiEQjfyvUj5+DY2d921lrNncPmnmXjgclYsUTH76ReV8M+9CKca7byXoDN1awDfvB90qErG1uKhesUL/dMpk+/3mqfoLkKQvOfru9OofuqP4MGzQSTaTfPycQ5XLl6wOXCk+LBfF2rm6nqT3C5IC5EtIP/CH7yHyZcBtXLLAdwP8KUBs3zS3tgZsnmKjXLkfKeM+HCkKtwCulCxxf5j6XOCgYsjHjy460EC7HrHIsXA7BbE3HrB+GE19o="></Mermaid><ul>
<li>
<p>FTP 服务端公网地址</p>
<p>在<code v-pre>PASV</code>命令中服务端向客户端发送的 IP 地址，如果服务端和客户端在同一子网内，用服务端的内网 IP 地址也可以，甚至如果服务端和客户端是同一台主机，也可以使用<code v-pre>127.0.0.1</code>。但如果服务端和客户端不在同一子网内，则需要填写能够让客户端访问到的服务端 IP 地址。</p>
<p>也可以填写域名，此时会使用默认 DNS 将域名解析为 IP 地址，但是由于<code v-pre>PASV</code>只能传递 IPv4 地址，所以这里填写的域名如果既有 AAAA 记录，又有 A 记录，会自动使用 A 记录，如果填写一个只有 AAAA 记录，没有 A 记录的域名，产生的结果是未知的。</p>
<p>该字段不影响<code v-pre>EPSV</code>指令，但该字段无效会导致 FTP 服务器放弃启动，所以如果你的 FTP 客户端只使用 <code v-pre>EPSV</code>指令，可以考虑这里保留默认值<code v-pre>127.0.0.1</code>。</p>
</li>
<li>
<p>FTP 被动传输端口映射</p>
<p>该字段由一系列以英文逗号<code v-pre>,</code>或换行符隔开的“映射组”构成，“映射组”的合法形式有以下四种：</p>
<ol>
<li><code v-pre>&lt;端口号&gt;</code></li>
<li><code v-pre>&lt;端口号区间开始&gt;-&lt;端口号区间结束（含，下同）&gt;</code></li>
<li><code v-pre>&lt;响应端口号&gt;:&lt;监听端口号&gt;</code></li>
<li><code v-pre>&lt;响应端口号区间开始&gt;-&lt;响应端口号区间结束&gt;:&lt;监听端口号区间开始&gt;:&lt;监听端口号区间结束&gt;</code></li>
</ol>
<p>以上所有端口号必须在 1024 到 65535（含）之间，且区间开始端口号小于区间结束端口号。</p>
<p>对于本字段留空的情况，服务端会选择 1024 到 65535 之间任意端口用于被动传输，且不进行任何映射。</p>
<p>每填写一个“映射组类型1”，这个映射组里的端口就会被用于被动传输，且该端口不进行任何映射。</p>
<p>每填写一个“映射组类型2”，这个映射组里从开始到结束之间的每个端口都会被用于被动传输，且这些端口不进行任何映射。</p>
<p>每填写一个“映射组类型3”，这个映射组里的“监听端口号”会被用于被动传输，但当服务器选择使用这个端口时，会向前端返回“响应端口号”。</p>
<p>“映射组类型4”要求英文冒号<code v-pre>:</code>前后两个区间长度相等，每填写一个“映射组类型4”，映射组里的两个区间可以形成一一对应的配对，每一对端口号视为一个“映射组类型3”。</p>
<p>以下这些填写方式是合法的：</p>
<ul>
<li><code v-pre>1024</code></li>
<li><code v-pre>4001-5000,5001-6000:50001-51000&lt;换行&gt;4000:65535</code></li>
</ul>
<p>以下这些填写方式是非法的：</p>
<ul>
<li><code v-pre>1023</code>（小于 1024）</li>
<li><code v-pre>65536</code>（大于 65535）</li>
<li><code v-pre>4000, 5000</code>（逗号后面有一个空格）</li>
<li><code v-pre>2000 - 3000 : 4000 - 5000</code>（每一个空格都是非法的）</li>
<li><code v-pre>2000-2001:3000-3002</code>（映射关系两边区间长度不一）</li>
</ul>
<p>如果该字段是非法的，服务端会选择 1024 到 65535 之间任意端口用于被动传输，且不进行任何映射。</p>
<p>有关端口映射的设计是为了解决外部端口映射的复杂情况的，试想服务端运行在一个 docker 容器内，使用 2000 进行被动传输，但 docker 将容器内的 2000 端口映射在了容器外的 12000 端口，你就可以使用<code v-pre>12000:2000</code>的配置实现这样的效果：</p>
<Mermaid id="mermaid-271" code="eJwrTi0sTc1LTnXJTEwvSszlUgCCgsSikszkzILEvBKFp+sWPevY/nz1egwZoNjT/sXPZix4uqEFQ/LZnN6nXQth2sAE3CRdOzu4tJXC0/6JLxsaXQOCw571tD/ZvQSsFi6vC1QM12il8GL/lKez5xkaGRgYYJiJ7B6QynnP+paCVUIkwOqR1aA648XeNUCXPO3YgKQDALBgjmM="></Mermaid><p>如果服务器与客户端之间存在多层端口映射，<code v-pre>:</code>之前只需要填写最靠近客户端的端口号，之后只需要填写最靠近服务端的端口号即可，比如以下场景填写<code v-pre>2000:5000</code>：</p>
<Mermaid id="mermaid-275" code="eJwrTi0sTc1LTnXJTEwvSszlUgCCgsSikszkzILEvBKFp+sWPevY/nz1ekyZttbneyc+X7n/ZUP/szm9T7sWYih5sXf9i+3rn0/ZCNT/tH/xi71rnvZPxFDlkp+cnVoEtGnn05krICqfzVjwdEMLhkpHn8xioKn7Zz9f0Q2WBBNwJ+ra2WE6ykrByMDAAKIQQxKoA6sbrRSMYZqwygP14XS1lYIJTC9ONUD9yH6xUjAFaQEAbl7Gug=="></Mermaid></li>
<li>
<p>FTP 代理 User-Agent 请求头</p>
<p>某些存储驱动在访问时需要用到 User-Agent 请求头，随便写一个假的就行。</p>
</li>
<li>
<p>强制 FTP 连接使用显式 TLS</p>
<p>强制使用 ftpes 协议，这种协议只加密数据流，不加密控制流。</p>
<p>打开“启用 FTP 隐式 TLS”选项时，该选项会被忽略。</p>
<p>如果没有提供有效的 TLS 私钥和证书，也没有开启此选项，表示服务端只接受 ftp 协议。</p>
<p>如果提供了有效的 TLS 私钥和证书，但没有开启此选项，表示服务端既接受 ftp 协议，也接受 ftpes 协议。</p>
<p>如果没有提供有效的 TLS 私钥和证书，但开启了此选项，FTP 服务器会放弃启动。</p>
</li>
<li>
<p>启用 FTP 隐式 TLS</p>
<p>使用 ftps 协议，这种协议既加密数据流，又加密控制流，所以不能和 ftp、ftpes 协议兼容。</p>
<p>打开此选项时，“强制 FTP 连接使用显式 TLS”选项会被忽略。</p>
<p>如果没有提供有效的 TLS 私钥和证书，但开启了此选项，FTP 服务器会放弃启动。</p>
</li>
<li>
<p>FTP TLS 私钥路径</p>
<p>TLS 私钥文件路径，留空或无效表示不启用 TLS。</p>
<p>启用 TLS 可能意味着客户端需要使用域名访问服务器，但“FTP 服务端公网地址”仍可以填写 IP 地址。</p>
</li>
<li>
<p>FTP TLS 证书路径</p>
<p>TLS 证书文件路径，留空或无效表示不启用 TLS。</p>
</li>
</ul>
<h2 id="sftp-配置文件" tabindex="-1"><a class="header-anchor" href="#sftp-配置文件"><span><strong>SFTP 配置文件</strong></span></a></h2>
<table>
<thead>
<tr>
<th>字段</th>
<th>含义</th>
<th>示例值</th>
</tr>
</thead>
<tbody>
<tr>
<td>enable</td>
<td>是否启用</td>
<td><code v-pre>true</code> / <code v-pre>false</code></td>
</tr>
<tr>
<td>listen</td>
<td>(允许访问的IP掩码):端口</td>
<td><code v-pre>&quot;:5222&quot;</code>（默认） / <code v-pre>&quot;0.0.0.0:22&quot;</code> / <code v-pre>&quot;127.0.0.1:2222&quot;</code></td>
</tr>
</tbody>
</table>
</div></template>


