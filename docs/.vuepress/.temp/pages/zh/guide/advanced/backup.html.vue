<template><div><h1 id="备份-恢复" tabindex="-1"><a class="header-anchor" href="#备份-恢复"><span>备份&amp;恢复</span></a></h1>
<h2 id="方法1-内置" tabindex="-1"><a class="header-anchor" href="#方法1-内置"><span><strong>方法1-内置</strong></span></a></h2>
<p>使用<code v-pre>AList</code>后台的内置 <code v-pre>备份/恢复</code>选项</p>
<blockquote>
<ol>
<li>
<p>备份：进行AList数据进行备份（<mark><strong>不包含索引</strong></mark>）</p>
</li>
<li>
<p>恢复：恢复之前备份文件</p>
</li>
<li>
<p>覆盖：恢复时选择覆盖会将用户信息进行覆盖</p>
</li>
<li>
<p>加密：填写<code v-pre>加密密码</code>导出时会将信息进行加密，导入时也需要先输入<code v-pre>加密密码</code>再点击恢复<sup>3.40.0_新增</sup></p>
</li>
</ol>
</blockquote>
<p><img src="/img/advanced/backup.png" alt="" loading="lazy"></p>
<h2 id="方法2-sqlite3" tabindex="-1"><a class="header-anchor" href="#方法2-sqlite3"><span><strong>方法2-sqlite3</strong></span></a></h2>
<p>直接将<code v-pre>AList</code>目录下的 data/<code v-pre>data.db</code>数据库进行备份，等到了新环境直接进行替换即可(<mark><strong>包含索引数据</strong></mark>)</p>
<ul>
<li>现在高版本如果有<code v-pre>data.db-shm</code>和<code v-pre>data.db-wal</code>这两个文件也要一起进行备份，恢复时也是一起替换</li>
<li>建议停止运行AList再进行备份，这样<code v-pre>data.db-shm</code>和<code v-pre>data.db-wal</code>这两个文件会和<code v-pre>data.db</code>合并在一起</li>
</ul>
<p><img src="/img/advanced/sqlite3.png" alt="" loading="lazy"></p>
<h2 id="方法3-其他数据库" tabindex="-1"><a class="header-anchor" href="#方法3-其他数据库"><span><strong>方法3-其他数据库</strong></span></a></h2>
<p>其他，如果你使用了 <code v-pre>MySQL，Postgres</code> 等非<code v-pre>sqlite数据库</code>，请自行解决(<mark><strong>包含索引数据</strong></mark>)</p>
</div></template>


