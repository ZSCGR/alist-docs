<template><div><h1 id="search" tabindex="-1"><a class="header-anchor" href="#search"><span>Search</span></a></h1>
<h3 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use"><span><strong>how to use</strong></span></a></h3>
<div class="hint-container caution">
<p class="hint-container-title">Follow the steps below to enable search:</p>
<ol>
<li>Go to the <code v-pre>indexes</code> page to select a <strong>Search index</strong> and click <code v-pre>Save</code>.</li>
<li>After the index is saved, click <code v-pre>Build indexes</code> to build the index.</li>
<li>Now you can search for files by click the search block on the top right corner of the page or by using the shortcut <code v-pre>Ctrl + K</code>.</li>
</ol>
<p>:exclamation<VPIcon icon="exclamation" />exclamation: If you do not follow the above prompts, the prompt will be opened: <strong>Search Not available</strong></p>
</div>
<br/>
<h3 id="difference-between-different-search-indexes" tabindex="-1"><a class="header-anchor" href="#difference-between-different-search-indexes"><span><strong>Difference between different search indexes</strong></span></a></h3>
<ul>
<li><code v-pre>database</code>: Search by database, which is using the existing data.db. It will create a new table, record the parent directory, name, and size of every object, but the search does not split words which means that match whether the keywords you enter appear in the name of object. In general, if you don't have a specific search requirement, we recommend you choose it.</li>
<li><code v-pre>database (non-full-text search)</code>: The full-text search mode is used above, but full-text search will have some strange problems when using <strong>MySQL database</strong> as an Alist database, which has not been resolved yet, so if your Alist database Change to <strong>MySQL</strong>, and your Alist version <strong><code v-pre>≥3.9.1</code></strong> It is recommended that you use this to build an index, although it is slower than full-text search and the gap is not very big, but it will not search for strange files , it’s more secure. After the future version is repaired, we will inform you to use the new full-text search to build the index. If you are using <strong>sqlite3</strong>, you can use whichever you like.</li>
<li><code v-pre>bleve</code>: An open source full-text search engine. It will split the words in the name of object and search for the keywords you enter. But its search results may be so strange that you can't get the results you want, and it will take up more resources.</li>
<li><strong>sqlite3</strong> is easy to trigger <code v-pre>database is locked</code> lock library cannot write files
<ul>
<li>
<p>Solution to <code v-pre>database is locked</code>:</p>
<ul>
<li>It's because the database is building the index. If you are still in the building process, please wait patiently.</li>
<li>If the index has been completed, it is caused by turning on <a href="#automatically-update-the-index">Automatically update the index</a>. Please turn off <a href="#automatically-update-the-index">Automatically update the index</a>. If the problem still occurs, please close and restart AList.</li>
<li>Or switch the database to MySQL</li>
</ul>
</li>
</ul>
</li>
<li><code v-pre>meilisearch</code>: I haven’t experienced it in depth yet and I don’t know much about the specific differences. It’s for professionals to use or you can check it yourself. <a href="https://github.com/alist-org/alist/pull/6060" target="_blank" rel="noopener noreferrer">View PR link</a> , the only thing I know is that you have to <a href="https://www.meilisearch.com/docs/learn/getting_started/installation" target="_blank" rel="noopener noreferrer">build it yourself</a> to use it. It supports many methods, but there is no daemon and other lazy operations, and it does not support the system <a href="https://github.com/meilisearch/meilisearch/issues/4022" target="_blank" rel="noopener noreferrer"> It relies on Linux systems lower than <code v-pre>GLIBC_2.27</code></a> If it is built on this machine, it will be automatically recognized. If it is another device, you can modify the <strong>meilisearch</strong> field content of the configuration file.
<ul>
<li>Daemon：If you want to use it, you can create a new daemon process in the same way as manually starting AList.</li>
<li>Download  Url：<a href="https://github.com/meilisearch/meilisearch/releases" target="_blank" rel="noopener noreferrer">https://github.com/meilisearch/meilisearch/releases</a>
<ul>
<li><code v-pre>meilisearch</code> Docs Url：<a href="https://www.meilisearch.com/docs/learn/getting_started/installation" target="_blank" rel="noopener noreferrer">https://www.meilisearch.com/docs/learn/getting_started/installation</a></li>
<li>Reference Links：<a href="https://github.com/AlistGo/alist/discussions/6830" target="_blank" rel="noopener noreferrer">https://github.com/AlistGo/alist/discussions/6830</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<br/>
<p>The following table could help you understand the difference between the two search indexes quickly:</p>
<table>
<thead>
<tr>
<th></th>
<th>database(full text search)</th>
<th>Database (non-full-text search)</th>
<th>bleve</th>
<th>meilisearch</th>
</tr>
</thead>
<tbody>
<tr>
<td>Search results</td>
<td>Can't find it in Chinese</td>
<td>More accurate than full-text search, you can search Chinese</td>
<td>Fuzzy match</td>
<td>❓</td>
</tr>
<tr>
<td>Search speed</td>
<td>Fast,see above for advantages and disadvantages</td>
<td>Slower than full-text search, see above for advantages and disadvantages</td>
<td>Fast</td>
<td>❓</td>
</tr>
<tr>
<td>Specify folder search</td>
<td>Yes</td>
<td>Yes</td>
<td>No</td>
<td>❓</td>
</tr>
<tr>
<td>Disk usage</td>
<td>Low</td>
<td>Low</td>
<td>High</td>
<td>❓</td>
</tr>
<tr>
<td>Auto incremental update</td>
<td>Yes</td>
<td>Yes</td>
<td>No</td>
<td>❓</td>
</tr>
</tbody>
</table>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>If you are using MySQL as the database, it is recommended to use <strong><code v-pre>non-full-text search</code></strong> (strongly recommended)</p>
<p><strong><code v-pre>Non-full-text search</code></strong> Although it is not as fast as full-text search, it is not much slower. If you insist on using full-text search, you may have to sacrifice the inability to search Chinese</p>
<p>If you use <mark>sqlite</mark> as the database, there is no full-text search, you can choose any database~</p>
<p>Full-text search: It will not search in the text of all files, don't get it wrong.</p>
</div>
<br/>
<h3 id="search-tips" tabindex="-1"><a class="header-anchor" href="#search-tips"><span><strong>Search tips</strong></span></a></h3>
<ul>
<li>If you want to search for a specific folder, you must choose <code v-pre>database</code> as the search index;</li>
<li>If you choose <code v-pre>database</code> as the search index and the type of your database is <code v-pre>sqlite3</code>, we suggest that you don't make any changes in the admin page while building the index, as sqlite3 does not support concurrent writes and can cause <code v-pre>database-lock</code> issues;</li>
<li>If you choose <code v-pre>bleve</code> as the search index, and if you want to search for new files or if you don't want to search for deleted files, the index needs to be completely rebuilt to take effect because <code v-pre>bleve</code> does not support incremental updates;</li>
<li>But for <code v-pre>database</code>, it supports incremental updates, so you can search for new files or deleted files just by access the modified folder (and click <code v-pre>refresh</code> icon if cached) without rebuilding the index, which is much more convenient than <code v-pre>bleve</code>.</li>
</ul>
<br/>
<h3 id="ignore-paths" tabindex="-1"><a class="header-anchor" href="#ignore-paths"><span><strong>Ignore paths</strong></span></a></h3>
<p>Paths to be skipped during index building, one path per line, multiple lines can be filled</p>
<ul>
<li>example:
<ul>
<li>
<p>/aaa network disk</p>
</li>
<li>
<p>/bbb network disk/ccc folder</p>
</li>
</ul>
</li>
</ul>
<p>If you don't want to configure this, you can turn on the <code v-pre>disable index</code> option in each driver (≥3.42.0)</p>
<br/>
<h3 id="update-index" tabindex="-1"><a class="header-anchor" href="#update-index"><span><strong>Update index</strong></span></a></h3>
<ul>
<li>(formerly: the path to update the index)</li>
</ul>
<p>After building all the indexes, or a file has a large number of file updates, but it is inconvenient to rebuild, you can use this to update the index</p>
<ul>
<li>
<p>example:</p>
<ul>
<li>
<p>/aaa network disk</p>
</li>
<li>
<p>/bbb network disk/ccc folder</p>
</li>
</ul>
</li>
</ul>
<br/>
<h3 id="automatically-update-the-index" tabindex="-1"><a class="header-anchor" href="#automatically-update-the-index"><span><strong>Automatically update the index</strong></span></a></h3>
<p>⚠️ <strong><code v-pre>The default is off, and the index will not be built automatically</code></strong></p>
<p>For example, you have already built the index, but added a <strong>network disk mount</strong> or <strong>folder update</strong> later</p>
<p>But you have already built a lot of indexes. According to the previous words, there are two methods</p>
<ol>
<li>Go in folder by folder before building</li>
<li>Or it is cumbersome to refactor all</li>
</ol>
<p>But this time, just turn on the <strong><code v-pre>Automatically build index</code></strong> button and enter the <strong>Newly mounted network disk</strong> or <strong>Updated folder</strong>, the indexed files in this directory and The folder automatically builds the index without entering a folder by folder to let him build it automatically</p>
<ul>
<li>Advantages: Don't worry, all the indexes in this folder can be automatically built if there is an update into the root directory of the updated folder</li>
<li>Cons: always on call ready to build</li>
</ul>
<hr>
<p>Someone will find out that [<strong>Path to update index</strong>](#Path to update index) can also be updated? Can be updated but the two do not conflict</p>
<ul>
<li><a href="#automatically-update-the-index"><strong>Automatically update index</strong></a>: suitable for users who build indexes for all files</li>
<li><a href="#update-index"><strong>Update Index</strong></a>: Suitable for <strong>not</strong> to build indexes for all files, but there are files that need to be built, manually build indexes to avoid all being indexed</li>
</ul>
<br/>
<h3 id="maximum-index-depth" tabindex="-1"><a class="header-anchor" href="#maximum-index-depth"><span><strong>Maximum index depth</strong></span></a></h3>
<p>default 20.</p>
<p>The one shown outside is built manually, and the update index option selects the depth in the update index button.</p>
<p>Explanation: The directory can enter up to several layers. For example, if you have a folder with a depth of 30 layers, set it to 20, and only build the first 20 layers, and the remaining 10 layers will not be built.</p>
<h3 id="precautions-for-use" tabindex="-1"><a class="header-anchor" href="#precautions-for-use"><span>⚠️ <strong>Precautions for use</strong></span></a></h3>
<ul>
<li>
<p>Alist <strong>V2</strong> and <strong>v3</strong> types of mounts cannot be built by default</p>
</li>
<li>
<p>If you are using <strong>MySQL</strong> as the database, it is recommended that you use <strong>database (non-full-text search)</strong>, <a href="#difference-between-different-search-indexes"><strong>Click to view details to see the second item</strong></a></p>
</li>
<li>
<p>In the future version (<strong>≥3.9.0 version</strong>), V3 users can choose whether to allow others to mount your network disk and then index it ⛔<strong><code v-pre>Use with caution</code></strong>⛔</p>
<ul>
<li>View details:  <a href="https://alist.nn.ci/config/site.html#allow-indexing" target="_blank" rel="noopener noreferrer">https://alist.nn.ci/config/site.html#allow-indexing</a></li>
<li>Don't ask why V2 is not supported, because the V2 version is no longer maintained, so there is no follow-up</li>
</ul>
</li>
<li>
<p>Why not directly open V2 V3 index construction: <strong><a href="https://github.com/alist-org/alist/discussions/2529" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/discussions/2529</a></strong></p>
</li>
<li>
<p>After building an index, users without permissions can search for hidden file/folder solutions <RouteLink to="/guide/advanced/meta.html#tips">click to view</RouteLink></p>
</li>
</ul>
<br/>
<h3 id="the-database-file-is-very-large-what-should-i-do-if-it-is-still-the-same-after-clearing-the-index" tabindex="-1"><a class="header-anchor" href="#the-database-file-is-very-large-what-should-i-do-if-it-is-still-the-same-after-clearing-the-index"><span><strong>The database file is very large, what should I do if it is still the same after clearing the index?</strong></span></a></h3>
<p>Normal users do not modify the database options. They use the <code v-pre>sqlite</code> database to build indexes, which will cause the database file to be particularly large</p>
<ul>
<li>-Data files, <code v-pre>Data</code> folders in the same directory in Alist program,<code v-pre>data.db，data.db-shm，data.db-wal</code></li>
</ul>
<p>After turning on the constructive index, the more the number you build, the larger the files. Finally, you accidentally occupy the machine's hard disk, and then click the clear index button. What should I do if the file is still as big?</p>
<ul>
<li>
<p>This is caused by the cache of <code v-pre>sqlite</code>, there are two solutions</p>
<ol>
<li>We use commands or tools to connect to <code v-pre>sqlite</code> database, input：<strong><code v-pre>VACUUM;</code></strong></li>
</ol>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="sqlite">
    <span>sqlite</span>
  </div>
  <div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">VACUUM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>
</div><ol start="2">
<li>After using the command to clean up, we replace it with <code v-pre>mysql</code> database before constructing indexes
<ul>
<li>Sqlite replaced with mysql database tutorial：<strong><a href="https://www.bilibili.com/video/BV1iV4y1T7kh" target="_blank" rel="noopener noreferrer">BV1iV4y1T7kh</a></strong></li>
</ul>
</li>
</ol>
</li>
</ul>
<p>Comparison after cleaning the command: The picture above shows before cleaning up, and the following figure shows that after cleaning, you can execute several commands several times if there is no effect.</p>
<p><img src="/img/advanced/sqlite-mysql.png" alt="" loading="lazy"></p>
<hr>
<p><code v-pre>data.db, data.db-shm, data.db-wal</code> when backup, when backup，<code v-pre>data.db-shm，data.db-wal</code>Do these two files need backup？</p>
<ul>
<li>In the backup, stop the program first, and then backup. You only need to backup the <code v-pre>data.db</code> database file. The other two do not need to backup</li>
<li>It may be after you stop the program<code v-pre>data.db-shm，data.db-wal</code>will automatically disappear, don't worry</li>
</ul>
</div></template>


