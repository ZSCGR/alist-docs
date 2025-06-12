<template><div><h1 id="fs" tabindex="-1"><a class="header-anchor" href="#fs"><span>fs</span></a></h1>
<h2 id="post-新建文件夹" tabindex="-1"><a class="header-anchor" href="#post-新建文件夹"><span>POST 新建文件夹</span></a></h2>
<p>POST /api/fs/mkdir</p>
<blockquote>
<p>Body 请求参数</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "path"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/tt"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求参数" tabindex="-1"><a class="header-anchor" href="#请求参数"><span>请求参数</span></a></h3>
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
<td>token</td>
</tr>
<tr>
<td>Content-Type</td>
<td>header</td>
<td>string</td>
<td>否</td>
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
<td>» path</td>
<td>body</td>
<td>string</td>
<td>是</td>
<td>新目录路径</td>
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
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">null</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回结果" tabindex="-1"><a class="header-anchor" href="#返回结果"><span>返回结果</span></a></h3>
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
<td>null</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
</tbody>
</table>
<h2 id="post-重命名文件" tabindex="-1"><a class="header-anchor" href="#post-重命名文件"><span>POST 重命名文件</span></a></h2>
<p>POST /api/fs/rename</p>
<blockquote>
<p>Body 请求参数</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"test3"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "path"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/阿里云盘/test2"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求参数-1" tabindex="-1"><a class="header-anchor" href="#请求参数-1"><span>请求参数</span></a></h3>
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
<td>token</td>
</tr>
<tr>
<td>Content-Type</td>
<td>header</td>
<td>string</td>
<td>否</td>
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
<td>» name</td>
<td>body</td>
<td>string</td>
<td>是</td>
<td>目标文件名，不支持'/'</td>
<td>none</td>
</tr>
<tr>
<td>» path</td>
<td>body</td>
<td>string</td>
<td>是</td>
<td>源文件名</td>
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
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">null</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回结果-1" tabindex="-1"><a class="header-anchor" href="#返回结果-1"><span>返回结果</span></a></h3>
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
<td>null</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
</tbody>
</table>
<h2 id="put-表单上传文件" tabindex="-1"><a class="header-anchor" href="#put-表单上传文件"><span>PUT 表单上传文件</span></a></h2>
<p>PUT /api/fs/form</p>
<blockquote>
<p>Body 请求参数</p>
</blockquote>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">file</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: []</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="请求参数-2" tabindex="-1"><a class="header-anchor" href="#请求参数-2"><span>请求参数</span></a></h3>
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
<td>token</td>
</tr>
<tr>
<td>Content-Type</td>
<td>header</td>
<td>string</td>
<td>是</td>
<td></td>
<td>需要是multipart/form-data;</td>
</tr>
<tr>
<td>Content-Length</td>
<td>header</td>
<td>string</td>
<td>是</td>
<td></td>
<td>文件大小</td>
</tr>
<tr>
<td>File-Path</td>
<td>header</td>
<td>string</td>
<td>是</td>
<td></td>
<td>经过URL编码的完整文件路径</td>
</tr>
<tr>
<td>As-Task</td>
<td>header</td>
<td>string</td>
<td>否</td>
<td></td>
<td>是否添加为任务</td>
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
<td>» file</td>
<td>body</td>
<td>string(binary)</td>
<td>是</td>
<td></td>
<td>文件</td>
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
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "task"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "id"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"sdH2LbjyWRk"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"upload animated_zoom.gif to [/data](/alist)"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "state"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "status"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"uploading"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "progress"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "error"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回结果-2" tabindex="-1"><a class="header-anchor" href="#返回结果-2"><span>返回结果</span></a></h3>
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
<td>»» task</td>
<td>object</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»»» id</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»»» name</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»»» state</td>
<td>integer</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»»» status</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»»» progress</td>
<td>integer</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»»» error</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
</tbody>
</table>
<h2 id="post-列出文件目录" tabindex="-1"><a class="header-anchor" href="#post-列出文件目录"><span>POST 列出文件目录</span></a></h2>
<p>POST /api/fs/list</p>
<blockquote>
<p>Body 请求参数</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "path"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/t"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "password"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "page"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "per_page"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "refresh"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求参数-3" tabindex="-1"><a class="header-anchor" href="#请求参数-3"><span>请求参数</span></a></h3>
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
<td>» path</td>
<td>body</td>
<td>string</td>
<td>否</td>
<td>路径</td>
<td>none</td>
</tr>
<tr>
<td>» password</td>
<td>body</td>
<td>string</td>
<td>否</td>
<td>密码</td>
<td>none</td>
</tr>
<tr>
<td>» page</td>
<td>body</td>
<td>integer</td>
<td>否</td>
<td>页数</td>
<td>none</td>
</tr>
<tr>
<td>» per_page</td>
<td>body</td>
<td>integer</td>
<td>否</td>
<td>每页数目</td>
<td>none</td>
</tr>
<tr>
<td>» refresh</td>
<td>body</td>
<td>boolean</td>
<td>否</td>
<td>是否强制刷新</td>
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
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "content"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Alist V3.md"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "size"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1592</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "is_dir"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "modified"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"2024-05-17T13:47:55.4174917+08:00"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "created"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"2024-05-17T13:47:47.5725906+08:00"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "sign"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "thumb"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "type"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "hashinfo"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"null"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "hash_info"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">null</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "total"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "readme"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "header"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "write"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "provider"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Local"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回结果-3" tabindex="-1"><a class="header-anchor" href="#返回结果-3"><span>返回结果</span></a></h3>
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
<td>»» content</td>
<td>[object]</td>
<td>true</td>
<td>none</td>
<td>内容</td>
<td>none</td>
</tr>
<tr>
<td>»»» name</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>文件名</td>
<td>none</td>
</tr>
<tr>
<td>»»» size</td>
<td>integer</td>
<td>true</td>
<td>none</td>
<td>大小</td>
<td>none</td>
</tr>
<tr>
<td>»»» is_dir</td>
<td>boolean</td>
<td>true</td>
<td>none</td>
<td>是否是文件夹</td>
<td>none</td>
</tr>
<tr>
<td>»»» modified</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>修改时间</td>
<td>none</td>
</tr>
<tr>
<td>»»» sign</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>签名</td>
<td>none</td>
</tr>
<tr>
<td>»»» thumb</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>缩略图</td>
<td>none</td>
</tr>
<tr>
<td>»»» type</td>
<td>integer</td>
<td>true</td>
<td>none</td>
<td>类型</td>
<td>none</td>
</tr>
<tr>
<td>»»» created</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td>创建时间</td>
<td>none</td>
</tr>
<tr>
<td>»»» hashinfo</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»»» hash_info</td>
<td>null</td>
<td>false</td>
<td>none</td>
<td></td>
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
<tr>
<td>»» readme</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>说明</td>
<td>none</td>
</tr>
<tr>
<td>»» write</td>
<td>boolean</td>
<td>true</td>
<td>none</td>
<td>是否可写入</td>
<td>none</td>
</tr>
<tr>
<td>»» provider</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»» header</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
</tbody>
</table>
<h2 id="post-获取某个文件-目录信息" tabindex="-1"><a class="header-anchor" href="#post-获取某个文件-目录信息"><span>POST 获取某个文件/目录信息</span></a></h2>
<p>POST /api/fs/get</p>
<blockquote>
<p>Body 请求参数</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "path"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/t"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "password"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "page"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "per_page"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "refresh"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求参数-4" tabindex="-1"><a class="header-anchor" href="#请求参数-4"><span>请求参数</span></a></h3>
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
<td>» page</td>
<td>body</td>
<td>integer</td>
<td>否</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>» per_page</td>
<td>body</td>
<td>integer</td>
<td>否</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>» refresh</td>
<td>body</td>
<td>boolean</td>
<td>否</td>
<td>强制 刷新</td>
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
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Alist V3.md"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "size"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2618</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "is_dir"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "modified"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"2024-05-17T16:05:36.4651534+08:00"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "created"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"2024-05-17T16:05:29.2001008+08:00"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "sign"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "thumb"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "type"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "hashinfo"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"null"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "hash_info"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "raw_url"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"http://127.0.0.1:5244/p/local/Alist%20V3.md"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "readme"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "header"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "provider"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Local"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "related"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">null</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回结果-4" tabindex="-1"><a class="header-anchor" href="#返回结果-4"><span>返回结果</span></a></h3>
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
<td>object</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»» name</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>文件名</td>
<td>none</td>
</tr>
<tr>
<td>»» size</td>
<td>integer</td>
<td>true</td>
<td>none</td>
<td>大小</td>
<td>none</td>
</tr>
<tr>
<td>»» is_dir</td>
<td>boolean</td>
<td>true</td>
<td>none</td>
<td>是否是文件夹</td>
<td>none</td>
</tr>
<tr>
<td>»» modified</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>修改时间</td>
<td>none</td>
</tr>
<tr>
<td>»» sign</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>签名</td>
<td>none</td>
</tr>
<tr>
<td>»» thumb</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>缩略图</td>
<td>none</td>
</tr>
<tr>
<td>»» type</td>
<td>integer</td>
<td>true</td>
<td>none</td>
<td>类型</td>
<td>none</td>
</tr>
<tr>
<td>»» raw_url</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>原始url</td>
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
<td>»» provider</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»» related</td>
<td>null</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»» created</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>创建时间</td>
<td>none</td>
</tr>
<tr>
<td>»» hashinfo</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»» hash_info</td>
<td>null</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»» header</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
</tbody>
</table>
<h2 id="post-搜索文件或文件夹" tabindex="-1"><a class="header-anchor" href="#post-搜索文件或文件夹"><span>POST 搜索文件或文件夹</span></a></h2>
<p>POST /api/fs/search</p>
<blockquote>
<p>Body 请求参数</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "parent"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"string"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "keywords"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"string"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "scope"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "page"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "per_page"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "password"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"string"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求参数-5" tabindex="-1"><a class="header-anchor" href="#请求参数-5"><span>请求参数</span></a></h3>
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
<td>» parent</td>
<td>body</td>
<td>string</td>
<td>是</td>
<td>搜索目录</td>
<td>none</td>
</tr>
<tr>
<td>» keywords</td>
<td>body</td>
<td>string</td>
<td>是</td>
<td>关键词</td>
<td>none</td>
</tr>
<tr>
<td>» scope</td>
<td>body</td>
<td>integer</td>
<td>是</td>
<td>搜索类型</td>
<td>0-全部 1-文件夹 2-文件</td>
</tr>
<tr>
<td>» page</td>
<td>body</td>
<td>integer</td>
<td>是</td>
<td>页数</td>
<td>none</td>
</tr>
<tr>
<td>» per_page</td>
<td>body</td>
<td>integer</td>
<td>是</td>
<td>每页数目</td>
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
</tbody>
</table>
<h3 id="返回示例-5" tabindex="-1"><a class="header-anchor" href="#返回示例-5"><span>返回示例</span></a></h3>
<blockquote>
<p>成功</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "content"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "parent"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/m"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"4305da1e"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "is_dir"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "size"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">393090</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "type"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "total"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回结果-5" tabindex="-1"><a class="header-anchor" href="#返回结果-5"><span>返回结果</span></a></h3>
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
<h3 id="返回数据结构-5" tabindex="-1"><a class="header-anchor" href="#返回数据结构-5"><span>返回数据结构</span></a></h3>
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
<td>»» content</td>
<td>[object]</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»»» parent</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>路径</td>
<td>none</td>
</tr>
<tr>
<td>»»» name</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>文件名</td>
<td>none</td>
</tr>
<tr>
<td>»»» is_dir</td>
<td>boolean</td>
<td>true</td>
<td>none</td>
<td>是否是文件夹</td>
<td>none</td>
</tr>
<tr>
<td>»»» size</td>
<td>integer</td>
<td>true</td>
<td>none</td>
<td>大小</td>
<td>none</td>
</tr>
<tr>
<td>»»» type</td>
<td>integer</td>
<td>true</td>
<td>none</td>
<td>类型</td>
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
<h2 id="post-获取目录" tabindex="-1"><a class="header-anchor" href="#post-获取目录"><span>POST 获取目录</span></a></h2>
<p>POST /api/fs/dirs</p>
<blockquote>
<p>Body 请求参数</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "path"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/t"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "password"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "force_root"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求参数-6" tabindex="-1"><a class="header-anchor" href="#请求参数-6"><span>请求参数</span></a></h3>
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
<td>» path</td>
<td>body</td>
<td>string</td>
<td>否</td>
<td>路径</td>
<td>none</td>
</tr>
<tr>
<td>» password</td>
<td>body</td>
<td>string</td>
<td>否</td>
<td>密码</td>
<td>none</td>
</tr>
<tr>
<td>» force_root</td>
<td>body</td>
<td>boolean</td>
<td>否</td>
<td></td>
<td>none</td>
</tr>
</tbody>
</table>
<h3 id="返回示例-6" tabindex="-1"><a class="header-anchor" href="#返回示例-6"><span>返回示例</span></a></h3>
<blockquote>
<p>成功</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"a"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "modified"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"2023-07-19T09:48:13.695585868+08:00"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回结果-6" tabindex="-1"><a class="header-anchor" href="#返回结果-6"><span>返回结果</span></a></h3>
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
<h3 id="返回数据结构-6" tabindex="-1"><a class="header-anchor" href="#返回数据结构-6"><span>返回数据结构</span></a></h3>
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
<td>[object]</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»» name</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>文件夹名</td>
<td>none</td>
</tr>
<tr>
<td>»» modified</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>修改时间</td>
<td>none</td>
</tr>
</tbody>
</table>
<h2 id="post-批量重命名" tabindex="-1"><a class="header-anchor" href="#post-批量重命名"><span>POST 批量重命名</span></a></h2>
<p>POST /api/fs/batch_rename</p>
<blockquote>
<p>Body 请求参数</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "src_dir"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/m2"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "rename_objects"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "src_name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"test.txt"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "new_name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"aaas2.txt"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求参数-7" tabindex="-1"><a class="header-anchor" href="#请求参数-7"><span>请求参数</span></a></h3>
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
<td>token</td>
</tr>
<tr>
<td>Content-Type</td>
<td>header</td>
<td>string</td>
<td>否</td>
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
<td>» src_dir</td>
<td>body</td>
<td>string</td>
<td>是</td>
<td>源目录</td>
<td>none</td>
</tr>
<tr>
<td>» rename_objects</td>
<td>body</td>
<td>[object]</td>
<td>是</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»» src_name</td>
<td>body</td>
<td>string</td>
<td>否</td>
<td>原文件名</td>
<td>none</td>
</tr>
<tr>
<td>»» new_name</td>
<td>body</td>
<td>string</td>
<td>否</td>
<td>新文件名</td>
<td>none</td>
</tr>
</tbody>
</table>
<h3 id="返回示例-7" tabindex="-1"><a class="header-anchor" href="#返回示例-7"><span>返回示例</span></a></h3>
<blockquote>
<p>成功</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">null</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回结果-7" tabindex="-1"><a class="header-anchor" href="#返回结果-7"><span>返回结果</span></a></h3>
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
<h3 id="返回数据结构-7" tabindex="-1"><a class="header-anchor" href="#返回数据结构-7"><span>返回数据结构</span></a></h3>
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
<td>状态码</td>
</tr>
<tr>
<td>» message</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>信息</td>
<td>信息</td>
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
<h2 id="post-正则重命名" tabindex="-1"><a class="header-anchor" href="#post-正则重命名"><span>POST 正则重命名</span></a></h2>
<p>POST /api/fs/regex_rename</p>
<blockquote>
<p>Body 请求参数</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "src_dir"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/m2"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "rename_objects"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "src_name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"test.txt"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "new_name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"aaas2.txt"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求参数-8" tabindex="-1"><a class="header-anchor" href="#请求参数-8"><span>请求参数</span></a></h3>
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
<td>token</td>
</tr>
<tr>
<td>Content-Type</td>
<td>header</td>
<td>string</td>
<td>否</td>
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
<td>» src_dir</td>
<td>body</td>
<td>string</td>
<td>是</td>
<td>源目录</td>
<td>none</td>
</tr>
<tr>
<td>» src_name_regex</td>
<td>body</td>
<td>string</td>
<td>是</td>
<td>源文件匹配正则</td>
<td>none</td>
</tr>
<tr>
<td>» new_name_regex</td>
<td>body</td>
<td>string</td>
<td>是</td>
<td>新文件名正则</td>
<td>none</td>
</tr>
</tbody>
</table>
<h3 id="返回示例-8" tabindex="-1"><a class="header-anchor" href="#返回示例-8"><span>返回示例</span></a></h3>
<blockquote>
<p>成功</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">null</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回结果-8" tabindex="-1"><a class="header-anchor" href="#返回结果-8"><span>返回结果</span></a></h3>
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
<h3 id="返回数据结构-8" tabindex="-1"><a class="header-anchor" href="#返回数据结构-8"><span>返回数据结构</span></a></h3>
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
<td>状态码</td>
</tr>
<tr>
<td>» message</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>信息</td>
<td>信息</td>
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
<h2 id="post-移动文件" tabindex="-1"><a class="header-anchor" href="#post-移动文件"><span>POST 移动文件</span></a></h2>
<p>POST /api/fs/move</p>
<blockquote>
<p>Body 请求参数</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "src_dir"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"string"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "dst_dir"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"string"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "names"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    "string"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求参数-9" tabindex="-1"><a class="header-anchor" href="#请求参数-9"><span>请求参数</span></a></h3>
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
<td>» src_dir</td>
<td>body</td>
<td>string</td>
<td>是</td>
<td>源文件夹</td>
<td>none</td>
</tr>
<tr>
<td>» dst_dir</td>
<td>body</td>
<td>string</td>
<td>是</td>
<td>目标文件夹</td>
<td>none</td>
</tr>
<tr>
<td>» names</td>
<td>body</td>
<td>[string]</td>
<td>是</td>
<td>文件名</td>
<td>none</td>
</tr>
</tbody>
</table>
<h3 id="返回示例-9" tabindex="-1"><a class="header-anchor" href="#返回示例-9"><span>返回示例</span></a></h3>
<blockquote>
<p>成功</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">null</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回结果-9" tabindex="-1"><a class="header-anchor" href="#返回结果-9"><span>返回结果</span></a></h3>
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
<h3 id="返回数据结构-9" tabindex="-1"><a class="header-anchor" href="#返回数据结构-9"><span>返回数据结构</span></a></h3>
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
<h2 id="post-聚合移动" tabindex="-1"><a class="header-anchor" href="#post-聚合移动"><span>POST 聚合移动</span></a></h2>
<p>POST /api/fs/recursive_move</p>
<blockquote>
<p>Body 请求参数</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "src_dir"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"string"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "dst_dir"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"string"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求参数-10" tabindex="-1"><a class="header-anchor" href="#请求参数-10"><span>请求参数</span></a></h3>
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
<td>» src_dir</td>
<td>body</td>
<td>string</td>
<td>是</td>
<td>源文件夹</td>
<td>none</td>
</tr>
<tr>
<td>» dst_dir</td>
<td>body</td>
<td>string</td>
<td>是</td>
<td>目标文件夹</td>
<td>none</td>
</tr>
</tbody>
</table>
<h3 id="返回示例-10" tabindex="-1"><a class="header-anchor" href="#返回示例-10"><span>返回示例</span></a></h3>
<blockquote>
<p>成功</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">null</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回结果-10" tabindex="-1"><a class="header-anchor" href="#返回结果-10"><span>返回结果</span></a></h3>
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
<h3 id="返回数据结构-10" tabindex="-1"><a class="header-anchor" href="#返回数据结构-10"><span>返回数据结构</span></a></h3>
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
<h2 id="post-复制文件" tabindex="-1"><a class="header-anchor" href="#post-复制文件"><span>POST 复制文件</span></a></h2>
<p>POST /api/fs/copy</p>
<blockquote>
<p>Body 请求参数</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "src_dir"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"string"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "dst_dir"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"string"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "names"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    "string"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求参数-11" tabindex="-1"><a class="header-anchor" href="#请求参数-11"><span>请求参数</span></a></h3>
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
<td>» src_dir</td>
<td>body</td>
<td>string</td>
<td>是</td>
<td>源文件夹</td>
<td>none</td>
</tr>
<tr>
<td>» dst_dir</td>
<td>body</td>
<td>string</td>
<td>是</td>
<td>目标文件夹</td>
<td>none</td>
</tr>
<tr>
<td>» names</td>
<td>body</td>
<td>[string]</td>
<td>是</td>
<td>文件名</td>
<td>none</td>
</tr>
</tbody>
</table>
<h3 id="返回示例-11" tabindex="-1"><a class="header-anchor" href="#返回示例-11"><span>返回示例</span></a></h3>
<blockquote>
<p>成功</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">null</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回结果-11" tabindex="-1"><a class="header-anchor" href="#返回结果-11"><span>返回结果</span></a></h3>
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
<h3 id="返回数据结构-11" tabindex="-1"><a class="header-anchor" href="#返回数据结构-11"><span>返回数据结构</span></a></h3>
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
<h2 id="post-删除文件或文件夹" tabindex="-1"><a class="header-anchor" href="#post-删除文件或文件夹"><span>POST 删除文件或文件夹</span></a></h2>
<p>POST /api/fs/remove</p>
<blockquote>
<p>Body 请求参数</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "names"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    "string"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  ],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "dir"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"string"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求参数-12" tabindex="-1"><a class="header-anchor" href="#请求参数-12"><span>请求参数</span></a></h3>
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
<td>» names</td>
<td>body</td>
<td>[string]</td>
<td>是</td>
<td>文件名</td>
<td>none</td>
</tr>
<tr>
<td>» dir</td>
<td>body</td>
<td>string</td>
<td>是</td>
<td>目录</td>
<td>none</td>
</tr>
</tbody>
</table>
<h3 id="返回示例-12" tabindex="-1"><a class="header-anchor" href="#返回示例-12"><span>返回示例</span></a></h3>
<blockquote>
<p>成功</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">null</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回结果-12" tabindex="-1"><a class="header-anchor" href="#返回结果-12"><span>返回结果</span></a></h3>
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
<h3 id="返回数据结构-12" tabindex="-1"><a class="header-anchor" href="#返回数据结构-12"><span>返回数据结构</span></a></h3>
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
<h2 id="post-删除空文件夹" tabindex="-1"><a class="header-anchor" href="#post-删除空文件夹"><span>POST 删除空文件夹</span></a></h2>
<p>POST /api/fs/remove_empty_directory</p>
<blockquote>
<p>Body 请求参数</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "src_dir"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"string"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求参数-13" tabindex="-1"><a class="header-anchor" href="#请求参数-13"><span>请求参数</span></a></h3>
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
<td>» src_dir</td>
<td>body</td>
<td>string</td>
<td>是</td>
<td>目录</td>
<td>none</td>
</tr>
</tbody>
</table>
<h3 id="返回示例-13" tabindex="-1"><a class="header-anchor" href="#返回示例-13"><span>返回示例</span></a></h3>
<blockquote>
<p>成功</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">null</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回结果-13" tabindex="-1"><a class="header-anchor" href="#返回结果-13"><span>返回结果</span></a></h3>
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
<h3 id="返回数据结构-13" tabindex="-1"><a class="header-anchor" href="#返回数据结构-13"><span>返回数据结构</span></a></h3>
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
<h2 id="put-流式上传文件" tabindex="-1"><a class="header-anchor" href="#put-流式上传文件"><span>PUT 流式上传文件</span></a></h2>
<p>PUT /api/fs/put</p>
<blockquote>
<p>Body 请求参数</p>
</blockquote>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">string</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="请求参数-14" tabindex="-1"><a class="header-anchor" href="#请求参数-14"><span>请求参数</span></a></h3>
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
<td>File-Path</td>
<td>header</td>
<td>string</td>
<td>是</td>
<td></td>
<td>经过URL编码的完整目标文件路径</td>
</tr>
<tr>
<td>As-Task</td>
<td>header</td>
<td>string</td>
<td>否</td>
<td></td>
<td>是否添加为任务</td>
</tr>
<tr>
<td>Content-Type</td>
<td>header</td>
<td>string</td>
<td>是</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>Content-Length</td>
<td>header</td>
<td>string</td>
<td>是</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>body</td>
<td>body</td>
<td>string(binary)</td>
<td>否</td>
<td></td>
<td>none</td>
</tr>
</tbody>
</table>
<h3 id="返回示例-14" tabindex="-1"><a class="header-anchor" href="#返回示例-14"><span>返回示例</span></a></h3>
<blockquote>
<p>成功</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "task"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "id"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"sdH2LbjyWRk"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"upload animated_zoom.gif to [/data](/alist)"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "state"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "status"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"uploading"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "progress"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "error"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回结果-14" tabindex="-1"><a class="header-anchor" href="#返回结果-14"><span>返回结果</span></a></h3>
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
<h3 id="返回数据结构-14" tabindex="-1"><a class="header-anchor" href="#返回数据结构-14"><span>返回数据结构</span></a></h3>
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
<td>»» task</td>
<td>object</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»»» id</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»»» name</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»»» state</td>
<td>integer</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»»» status</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»»» progress</td>
<td>integer</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»»» error</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
</tbody>
</table>
<h2 id="post-添加离线下载" tabindex="-1"><a class="header-anchor" href="#post-添加离线下载"><span>POST 添加离线下载</span></a></h2>
<p>POST /api/fs/add_offline_download</p>
<blockquote>
<p>Body 请求参数</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "path"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/local"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "urls"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  ],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "tool"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"SimpleHttp"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "delete_policy"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"delete_on_upload_succeed"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求参数-15" tabindex="-1"><a class="header-anchor" href="#请求参数-15"><span>请求参数</span></a></h3>
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
<td>» urls</td>
<td>body</td>
<td>[string]</td>
<td>是</td>
<td>url</td>
<td>none</td>
</tr>
<tr>
<td>» path</td>
<td>body</td>
<td>string</td>
<td>是</td>
<td>目标路径</td>
<td>none</td>
</tr>
<tr>
<td>» tool</td>
<td>body</td>
<td>string</td>
<td>是</td>
<td>工具</td>
<td>可选<code v-pre>aria2</code>,<code v-pre>SimpleHttp</code>和<code v-pre>qBittorrent</code></td>
</tr>
<tr>
<td>» delete_policy</td>
<td>body</td>
<td>string</td>
<td>是</td>
<td>删除策略</td>
<td>可选<code v-pre>delete_on_upload_succeed</code>,<code v-pre>delete_on_upload_failed</code>,<code v-pre>delete_never</code>,<code v-pre>delete_always</code></td>
</tr>
</tbody>
</table>
<h3 id="返回示例-15" tabindex="-1"><a class="header-anchor" href="#返回示例-15"><span>返回示例</span></a></h3>
<blockquote>
<p>成功</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "tasks"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "id"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"jwy7BrfZRzbI2xWg7-y"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"download https://www.baidu.com/img/20d6cf.png to (/local)"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "state"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "status"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "progress"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "error"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回结果-15" tabindex="-1"><a class="header-anchor" href="#返回结果-15"><span>返回结果</span></a></h3>
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
<h3 id="返回数据结构-15" tabindex="-1"><a class="header-anchor" href="#返回数据结构-15"><span>返回数据结构</span></a></h3>
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
<td>»» tasks</td>
<td>[object]</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»»» id</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»»» name</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»»» state</td>
<td>integer</td>
<td>false</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»»» status</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»»» progress</td>
<td>integer</td>
<td>false</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»»» error</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
</tbody>
</table>
</div></template>


