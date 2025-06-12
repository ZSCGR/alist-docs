<template><div><h1 id="public" tabindex="-1"><a class="header-anchor" href="#public"><span>public</span></a></h1>
<h2 id="get-ping检测" tabindex="-1"><a class="header-anchor" href="#get-ping检测"><span>GET ping检测</span></a></h2>
<p>GET /ping</p>
<p>连通性ping检测</p>
<h3 id="返回示例" tabindex="-1"><a class="header-anchor" href="#返回示例"><span>返回示例</span></a></h3>
<blockquote>
<p>成功</p>
</blockquote>
<h3 id="返回结果" tabindex="-1"><a class="header-anchor" href="#返回结果"><span>返回结果</span></a></h3>
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
<h2 id="get-获取站点设置" tabindex="-1"><a class="header-anchor" href="#get-获取站点设置"><span>GET 获取站点设置</span></a></h2>
<p>GET /api/public/settings</p>
<h3 id="返回示例-1" tabindex="-1"><a class="header-anchor" href="#返回示例-1"><span>返回示例</span></a></h3>
<blockquote>
<p>成功</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "allow_indexed"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"false"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "allow_mounted"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"false"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "announcement"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "audio_autoplay"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"true"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "audio_cover"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"https://jsd.nn.ci/gh/alist-org/logo@main/logo.svg"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "auto_update_index"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"false"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "default_page_size"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"30"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "external_previews"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"{}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "favicon"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"https://cdn.jsdelivr.net/gh/alist-org/logo@main/logo.svg"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "filename_char_mapping"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"{</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">|</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "forward_direct_link_params"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"false"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "hide_files"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/README.md/i"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "home_container"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"hope_container"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "home_icon"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"🏠"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "iframe_previews"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"{</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n\t\"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">doc,docx,xls,xlsx,ppt,pptx</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">: {</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n\t\t\"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Microsoft</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">https://view.officeapps.live.com/op/view.aspx?src=$e_url</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">,</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n\t\t\"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Google</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">https://docs.google.com/gview?url=$e_url&#x26;embedded=true</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\"\n\t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">},</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n\t\"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">pdf</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">: {</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n\t\t\"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">PDF.js</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">https://alist-org.github.io/pdf.js/web/viewer.html?file=$e_url</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\"\n\t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">},</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n\t\"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">epub</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">: {</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n\t\t\"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">EPUB.js</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">https://alist-org.github.io/static/epub.js/viewer.html?url=$e_url</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\"\n\t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">}</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "logo"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"https://cdn.jsdelivr.net/gh/alist-org/logo@main/logo.svg"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "main_color"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"#1890ff"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "ocr_api"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"https://api.nn.ci/ocr/file/json"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "package_download"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"true"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "pagination_type"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"all"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "robots_txt"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"User-agent: *</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Allow: /"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "search_index"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"none"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "settings_layout"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"responsive"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "site_title"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"AList"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "sso_login_enabled"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"false"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "sso_login_platform"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "version"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"v3.25.1"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "video_autoplay"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"true"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回结果-1" tabindex="-1"><a class="header-anchor" href="#返回结果-1"><span>返回结果</span></a></h3>
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
<td>数据</td>
<td>none</td>
</tr>
<tr>
<td>»» allow_indexed</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>允许索引</td>
<td>none</td>
</tr>
<tr>
<td>»» allow_mounted</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>允许挂载</td>
<td>none</td>
</tr>
<tr>
<td>»» announcement</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>公告</td>
<td>none</td>
</tr>
<tr>
<td>»» audio_autoplay</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>自动播放音频</td>
<td>none</td>
</tr>
<tr>
<td>»» audio_cover</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>音频封面</td>
<td>none</td>
</tr>
<tr>
<td>»» auto_update_index</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>自动更新索引</td>
<td>none</td>
</tr>
<tr>
<td>»» default_page_size</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>默认分页数</td>
<td>none</td>
</tr>
<tr>
<td>»» external_previews</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>外部预览</td>
<td>none</td>
</tr>
<tr>
<td>»» favicon</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>网站图标</td>
<td>none</td>
</tr>
<tr>
<td>»» filename_char_mapping</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»» forward_direct_link_params</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»» hide_files</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>隐藏文件</td>
<td>none</td>
</tr>
<tr>
<td>»» home_container</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>主页容器</td>
<td>none</td>
</tr>
<tr>
<td>»» home_icon</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>主页图标</td>
<td>none</td>
</tr>
<tr>
<td>»» iframe_previews</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>iframe预览设置</td>
<td>none</td>
</tr>
<tr>
<td>»» logo</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>logo</td>
<td>none</td>
</tr>
<tr>
<td>»» main_color</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>主题颜色</td>
<td>none</td>
</tr>
<tr>
<td>»» ocr_api</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>pcr接口</td>
<td>none</td>
</tr>
<tr>
<td>»» package_download</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>打包下载</td>
<td>none</td>
</tr>
<tr>
<td>»» pagination_type</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»» robots_txt</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>robots文件</td>
<td>none</td>
</tr>
<tr>
<td>»» search_index</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»» settings_layout</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td></td>
<td>none</td>
</tr>
<tr>
<td>»» site_title</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>站点标题</td>
<td>none</td>
</tr>
<tr>
<td>»» sso_login_enabled</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>启用sso登录</td>
<td>none</td>
</tr>
<tr>
<td>»» sso_login_platform</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>sso登录平台</td>
<td>none</td>
</tr>
<tr>
<td>»» version</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>版本</td>
<td>none</td>
</tr>
<tr>
<td>»» video_autoplay</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>视频自动播放</td>
<td>none</td>
</tr>
</tbody>
</table>
</div></template>


