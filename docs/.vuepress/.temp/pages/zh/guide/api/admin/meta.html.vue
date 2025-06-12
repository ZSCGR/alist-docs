<template><div><h1 id="meta" tabindex="-1"><a class="header-anchor" href="#meta"><span>meta</span></a></h1>
<h2 id="get-列出元信息" tabindex="-1"><a class="header-anchor" href="#get-列出元信息"><span>GET 列出元信息</span></a></h2>
<p>GET /api/admin/meta/list</p>
<h3 id="请求参数" tabindex="-1"><a class="header-anchor" href="#请求参数"><span>请求参数</span></a></h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>位置</th>
<th>类型</th>
<th>必选</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>page</td>
<td>query</td>
<td>string</td>
<td>否</td>
<td>页数</td>
</tr>
<tr>
<td>per_page</td>
<td>query</td>
<td>string</td>
<td>否</td>
<td>每页个数</td>
</tr>
<tr>
<td>Authorization</td>
<td>header</td>
<td>string</td>
<td>是</td>
<td>none</td>
</tr>
</tbody>
</table>
<h3 id="返回示例" tabindex="-1"><a class="header-anchor" href="#返回示例"><span>返回示例</span></a></h3>
<blockquote>
<p>成功</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "content"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "id"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "path"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/a"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "password"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"i"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "p_sub"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "write"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "w_sub"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "hide"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "h_sub"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "readme"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "r_sub"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "total"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回结果" tabindex="-1"><a class="header-anchor" href="#返回结果"><span>返回结果</span></a></h3>
<table>
<thead>
<tr>
<th>状态码</th>
<th>状态码含义</th>
<th>说明</th>
<th>数据模型</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK</a></td>
<td>成功</td>
<td>Inline</td>
</tr>
</tbody>
</table>
<h3 id="返回数据结构" tabindex="-1"><a class="header-anchor" href="#返回数据结构"><span>返回数据结构</span></a></h3>
<p>状态码 <strong>200</strong></p>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>必选</th>
<th>约束</th>
<th>中文名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>» code</td>
<td>integer</td>
<td>true</td>
<td>none</td>
<td>状态码</td>
<td>none</td>
</tr>
<tr>
<td>» message</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>信息</td>
<td>none</td>
</tr>
<tr>
<td>» data</td>
<td>object</td>
<td>true</td>
<td>none</td>
<td>数据</td>
<td>none</td>
</tr>
<tr>
<td>»» content</td>
<td>[object]</td>
<td>true</td>
<td>none</td>
<td>内容</td>
<td>none</td>
</tr>
<tr>
<td>»»» id</td>
<td>integer</td>
<td>false</td>
<td>none</td>
<td>id</td>
<td>none</td>
</tr>
<tr>
<td>»»» path</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td>路径</td>
<td>none</td>
</tr>
<tr>
<td>»»» password</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td>密码</td>
<td>none</td>
</tr>
<tr>
<td>»»» p_sub</td>
<td>boolean</td>
<td>false</td>
<td>none</td>
<td>密码是否应用到子文件夹</td>
<td>none</td>
</tr>
<tr>
<td>»»» write</td>
<td>boolean</td>
<td>false</td>
<td>none</td>
<td>是否允许写入</td>
<td>none</td>
</tr>
<tr>
<td>»»» w_sub</td>
<td>boolean</td>
<td>false</td>
<td>none</td>
<td>是否允许写入引用到子文件夹</td>
<td>none</td>
</tr>
<tr>
<td>»»» hide</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td>隐藏</td>
<td>none</td>
</tr>
<tr>
<td>»»» h_sub</td>
<td>boolean</td>
<td>false</td>
<td>none</td>
<td>隐藏是否应用到子文件夹</td>
<td>none</td>
</tr>
<tr>
<td>»»» readme</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td>说明</td>
<td>none</td>
</tr>
<tr>
<td>»»» r_sub</td>
<td>boolean</td>
<td>false</td>
<td>none</td>
<td>说明是否应用到子文件夹</td>
<td>none</td>
</tr>
<tr>
<td>»» total</td>
<td>integer</td>
<td>true</td>
<td>none</td>
<td>总数</td>
<td>none</td>
</tr>
</tbody>
</table>
<h2 id="get-获取元信息" tabindex="-1"><a class="header-anchor" href="#get-获取元信息"><span>GET 获取元信息</span></a></h2>
<p>GET /api/admin/meta/get</p>
<h3 id="请求参数-1" tabindex="-1"><a class="header-anchor" href="#请求参数-1"><span>请求参数</span></a></h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>位置</th>
<th>类型</th>
<th>必选</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>query</td>
<td>string</td>
<td>是</td>
<td>元信息id</td>
</tr>
<tr>
<td>Authorization</td>
<td>header</td>
<td>string</td>
<td>是</td>
<td>none</td>
</tr>
</tbody>
</table>
<h3 id="返回示例-1" tabindex="-1"><a class="header-anchor" href="#返回示例-1"><span>返回示例</span></a></h3>
<blockquote>
<p>成功</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "id"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "path"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/a"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "password"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"c"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "p_sub"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "write"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "w_sub"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "hide"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "h_sub"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "readme"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "r_sub"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回结果-1" tabindex="-1"><a class="header-anchor" href="#返回结果-1"><span>返回结果</span></a></h3>
<table>
<thead>
<tr>
<th>状态码</th>
<th>状态码含义</th>
<th>说明</th>
<th>数据模型</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK</a></td>
<td>成功</td>
<td>Inline</td>
</tr>
</tbody>
</table>
<h3 id="返回数据结构-1" tabindex="-1"><a class="header-anchor" href="#返回数据结构-1"><span>返回数据结构</span></a></h3>
<p>状态码 <strong>200</strong></p>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>必选</th>
<th>约束</th>
<th>中文名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>» code</td>
<td>integer</td>
<td>true</td>
<td>none</td>
<td>状态码</td>
<td>none</td>
</tr>
<tr>
<td>» message</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>信息</td>
<td>none</td>
</tr>
<tr>
<td>» data</td>
<td>object</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»» id</td>
<td>integer</td>
<td>true</td>
<td>none</td>
<td>id</td>
<td>none</td>
</tr>
<tr>
<td>»» path</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>路径</td>
<td>none</td>
</tr>
<tr>
<td>»» password</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>密码</td>
<td>none</td>
</tr>
<tr>
<td>»» p_sub</td>
<td>boolean</td>
<td>true</td>
<td>none</td>
<td>密码是否应用到子文件夹</td>
<td>none</td>
</tr>
<tr>
<td>»» write</td>
<td>boolean</td>
<td>true</td>
<td>none</td>
<td>开启写入</td>
<td>none</td>
</tr>
<tr>
<td>»» w_sub</td>
<td>boolean</td>
<td>true</td>
<td>none</td>
<td>开启写入是否应用到子文件夹</td>
<td>none</td>
</tr>
<tr>
<td>»» hide</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>隐藏</td>
<td>none</td>
</tr>
<tr>
<td>»» h_sub</td>
<td>boolean</td>
<td>true</td>
<td>none</td>
<td>隐藏是否应用到子文件夹</td>
<td>none</td>
</tr>
<tr>
<td>»» readme</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>说明</td>
<td>none</td>
</tr>
<tr>
<td>»» r_sub</td>
<td>boolean</td>
<td>true</td>
<td>none</td>
<td>说明是否应用到子文件夹</td>
<td>none</td>
</tr>
</tbody>
</table>
<h2 id="post-新增元信息" tabindex="-1"><a class="header-anchor" href="#post-新增元信息"><span>POST 新增元信息</span></a></h2>
<p>POST /api/admin/meta/create</p>
<blockquote>
<p>Body 请求参数</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "id"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "path"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/a"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "password"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"c"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "p_sub"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "write"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "w_sub"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "hide"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "h_sub"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "readme"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "r_sub"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求参数-2" tabindex="-1"><a class="header-anchor" href="#请求参数-2"><span>请求参数</span></a></h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>位置</th>
<th>类型</th>
<th>必选</th>
<th>中文名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>Authorization</td>
<td>header</td>
<td>string</td>
<td>是</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>body</td>
<td>body</td>
<td>object</td>
<td>否</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>» id</td>
<td>body</td>
<td>integer</td>
<td>是</td>
<td>id</td>
<td>none</td>
</tr>
<tr>
<td>» path</td>
<td>body</td>
<td>string</td>
<td>是</td>
<td>路径</td>
<td>none</td>
</tr>
<tr>
<td>» password</td>
<td>body</td>
<td>string</td>
<td>是</td>
<td>密码</td>
<td>none</td>
</tr>
<tr>
<td>» p_sub</td>
<td>body</td>
<td>boolean</td>
<td>是</td>
<td>密码是否应用到子文件夹</td>
<td>none</td>
</tr>
<tr>
<td>» write</td>
<td>body</td>
<td>boolean</td>
<td>是</td>
<td>开启写入</td>
<td>none</td>
</tr>
<tr>
<td>» w_sub</td>
<td>body</td>
<td>boolean</td>
<td>是</td>
<td>开启写入是否应用到子文件夹</td>
<td>none</td>
</tr>
<tr>
<td>» hide</td>
<td>body</td>
<td>string</td>
<td>是</td>
<td>隐藏</td>
<td>none</td>
</tr>
<tr>
<td>» h_sub</td>
<td>body</td>
<td>boolean</td>
<td>是</td>
<td>隐藏是否应用到子文件夹</td>
<td>none</td>
</tr>
<tr>
<td>» readme</td>
<td>body</td>
<td>string</td>
<td>是</td>
<td>说明</td>
<td>none</td>
</tr>
<tr>
<td>» r_sub</td>
<td>body</td>
<td>boolean</td>
<td>是</td>
<td>说明是否应用到子文件夹</td>
<td>none</td>
</tr>
</tbody>
</table>
<h3 id="返回示例-2" tabindex="-1"><a class="header-anchor" href="#返回示例-2"><span>返回示例</span></a></h3>
<blockquote>
<p>成功</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">null</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回结果-2" tabindex="-1"><a class="header-anchor" href="#返回结果-2"><span>返回结果</span></a></h3>
<table>
<thead>
<tr>
<th>状态码</th>
<th>状态码含义</th>
<th>说明</th>
<th>数据模型</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK</a></td>
<td>成功</td>
<td>Inline</td>
</tr>
</tbody>
</table>
<h3 id="返回数据结构-2" tabindex="-1"><a class="header-anchor" href="#返回数据结构-2"><span>返回数据结构</span></a></h3>
<p>状态码 <strong>200</strong></p>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>必选</th>
<th>约束</th>
<th>中文名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>» code</td>
<td>integer</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>» message</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>» data</td>
<td>null</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
</tbody>
</table>
<h2 id="post-更新元信息" tabindex="-1"><a class="header-anchor" href="#post-更新元信息"><span>POST 更新元信息</span></a></h2>
<p>POST /api/admin/meta/update</p>
<blockquote>
<p>Body 请求参数</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "id"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "path"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/a"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "password"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"c"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "p_sub"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "write"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "w_sub"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "hide"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "h_sub"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "readme"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "r_sub"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求参数-3" tabindex="-1"><a class="header-anchor" href="#请求参数-3"><span>请求参数</span></a></h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>位置</th>
<th>类型</th>
<th>必选</th>
<th>中文名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>Authorization</td>
<td>header</td>
<td>string</td>
<td>是</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>body</td>
<td>body</td>
<td>object</td>
<td>否</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>» id</td>
<td>body</td>
<td>integer</td>
<td>是</td>
<td>id</td>
<td>none</td>
</tr>
<tr>
<td>» path</td>
<td>body</td>
<td>string</td>
<td>是</td>
<td>路径</td>
<td>none</td>
</tr>
<tr>
<td>» password</td>
<td>body</td>
<td>string</td>
<td>是</td>
<td>密码</td>
<td>none</td>
</tr>
<tr>
<td>» p_sub</td>
<td>body</td>
<td>boolean</td>
<td>是</td>
<td>密码是否应用到子文件夹</td>
<td>none</td>
</tr>
<tr>
<td>» write</td>
<td>body</td>
<td>boolean</td>
<td>是</td>
<td>开启写入</td>
<td>none</td>
</tr>
<tr>
<td>» w_sub</td>
<td>body</td>
<td>boolean</td>
<td>是</td>
<td>开启写入是否应用到子文件夹</td>
<td>none</td>
</tr>
<tr>
<td>» hide</td>
<td>body</td>
<td>string</td>
<td>是</td>
<td>隐藏</td>
<td>none</td>
</tr>
<tr>
<td>» h_sub</td>
<td>body</td>
<td>boolean</td>
<td>是</td>
<td>隐藏是否应用到子文件夹</td>
<td>none</td>
</tr>
<tr>
<td>» readme</td>
<td>body</td>
<td>string</td>
<td>是</td>
<td>说明</td>
<td>none</td>
</tr>
<tr>
<td>» r_sub</td>
<td>body</td>
<td>boolean</td>
<td>是</td>
<td>说明是否应用到子文件夹</td>
<td>none</td>
</tr>
</tbody>
</table>
<h3 id="返回示例-3" tabindex="-1"><a class="header-anchor" href="#返回示例-3"><span>返回示例</span></a></h3>
<blockquote>
<p>成功</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">null</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回结果-3" tabindex="-1"><a class="header-anchor" href="#返回结果-3"><span>返回结果</span></a></h3>
<table>
<thead>
<tr>
<th>状态码</th>
<th>状态码含义</th>
<th>说明</th>
<th>数据模型</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK</a></td>
<td>成功</td>
<td>Inline</td>
</tr>
</tbody>
</table>
<h3 id="返回数据结构-3" tabindex="-1"><a class="header-anchor" href="#返回数据结构-3"><span>返回数据结构</span></a></h3>
<p>状态码 <strong>200</strong></p>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>必选</th>
<th>约束</th>
<th>中文名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>» code</td>
<td>integer</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>» message</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>» data</td>
<td>null</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
</tbody>
</table>
<h2 id="post-删除元信息" tabindex="-1"><a class="header-anchor" href="#post-删除元信息"><span>POST 删除元信息</span></a></h2>
<p>POST /api/admin/meta/delete</p>
<h3 id="请求参数-4" tabindex="-1"><a class="header-anchor" href="#请求参数-4"><span>请求参数</span></a></h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>位置</th>
<th>类型</th>
<th>必选</th>
<th>中文名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>query</td>
<td>string</td>
<td>是</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>Authorization</td>
<td>header</td>
<td>string</td>
<td>是</td>
<td></td>
<td>none</td>
</tr>
</tbody>
</table>
<h3 id="返回示例-4" tabindex="-1"><a class="header-anchor" href="#返回示例-4"><span>返回示例</span></a></h3>
<blockquote>
<p>成功</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">null</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回结果-4" tabindex="-1"><a class="header-anchor" href="#返回结果-4"><span>返回结果</span></a></h3>
<table>
<thead>
<tr>
<th>状态码</th>
<th>状态码含义</th>
<th>说明</th>
<th>数据模型</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK</a></td>
<td>成功</td>
<td>Inline</td>
</tr>
</tbody>
</table>
<h3 id="返回数据结构-4" tabindex="-1"><a class="header-anchor" href="#返回数据结构-4"><span>返回数据结构</span></a></h3>
<p>状态码 <strong>200</strong></p>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>必选</th>
<th>约束</th>
<th>中文名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>» code</td>
<td>integer</td>
<td>true</td>
<td>none</td>
<td>状态码</td>
<td>none</td>
</tr>
<tr>
<td>» message</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>信息</td>
<td>none</td>
</tr>
<tr>
<td>» data</td>
<td>null</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
</tbody>
</table>
</div></template>


