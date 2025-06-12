<template><div><h1 id="backup-restore" tabindex="-1"><a class="header-anchor" href="#backup-restore"><span>Backup&amp;Restore</span></a></h1>
<h2 id="method-1-built-in" tabindex="-1"><a class="header-anchor" href="#method-1-built-in"><span><strong>Method 1-Built-in</strong></span></a></h2>
<p>Use <code v-pre>AList</code> to manage <code v-pre>Backup/Restore</code> options</p>
<blockquote>
<ol>
<li>
<p>Backup: Backup Alist data (<mark><strong>does not include index</strong></mark>)</p>
</li>
<li>
<p>Recovery: Backup files before recovery</p>
</li>
<li>
<p>Override: Select override when recovery, and will override the user information</p>
</li>
<li>
<p>Encryption Password:Fill in the <code v-pre>ENCRYPTION PASSWORD</code> Export, the information will be encrypted when exporting.You also need to enter the <code v-pre>ENCRYPTION PASSWORD</code> first before importing.^<sup>3.40.0_New</sup></p>
</li>
</ol>
</blockquote>
<p><img src="/img/advanced/backup.png" alt="" loading="lazy"></p>
<h2 id="method-2-sqlite3" tabindex="-1"><a class="header-anchor" href="#method-2-sqlite3"><span><strong>Method 2-Sqlite3</strong></span></a></h2>
<p>Back up the data/<code v-pre>data.db</code> database in the<code v-pre> AList</code> directory, and wait for the new environment to replace it directly (<mark><strong>contains index data</strong></mark>)</p>
<ul>
<li>If there are two files, if there are <code v-pre>data.db-shm</code> and <code v-pre>data.db-wal</code>, they must be backup together.</li>
<li>It is recommended to stop running Alist and then backup, so that the two files of <code v-pre>data.db-shm</code> and<code v-pre>data.db-wal</code> will be merged with the <code v-pre>data.db</code></li>
</ul>
<p><img src="/img/advanced/sqlite3.png" alt="" loading="lazy"></p>
<h2 id="method-3-other-database" tabindex="-1"><a class="header-anchor" href="#method-3-other-database"><span><strong>Method 3-Other database</strong></span></a></h2>
<p>Other, if you use <code v-pre>mysql, postgres</code> and other non <code v-pre>sqlite database</code>, please solve it by yourself (<mark><strong>include indexing data</strong></mark>)</p>
</div></template>


