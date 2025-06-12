<template><div><h3 id="initial-config" tabindex="-1"><a class="header-anchor" href="#initial-config"><span><strong>Initial config</strong></span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>After modifying the configuration file, restart AList for changes to take effect</p>
<ul>
<li>Windows/MacOS: <code v-pre>&lt;alist dir&gt;/data/config.json</code></li>
<li>Linux: one-click script directory, <code v-pre>/opt/alist/data/config.json</code> or <code v-pre>&lt;alist dir&gt;/data/config.json</code></li>
<li>Docker: <code v-pre>&lt;docker container dir&gt;/data/config.json</code></li>
<li>openwrt: modify config on server if using <code v-pre>luci-app-alist</code> , otherwise <code v-pre>&lt;alist dir&gt;/data/config.json</code></li>
<li>Other: <code v-pre>&lt;alist dir&gt;/data/config.json</code></li>
</ul>
</div>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "force"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "site_url"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "cdn"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "jwt_secret"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"random_generated"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "token_expires_in"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">48</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "database"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "type"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"sqlite3"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "host"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "port"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "user"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "password"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "db_file"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"data</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">data.db"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "table_prefix"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"x_"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "ssl_mode"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "dsn"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "meilisearch"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "host"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"http://localhost:7700"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "api_key"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "index_prefix"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "scheme"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "address"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"0.0.0.0"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "http_port"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5244</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "https_port"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">-1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "force_https"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "cert_file"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "key_file"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "unix_file"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "unix_file_perm"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "enable_h2c"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "temp_dir"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"data</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">temp"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "bleve_dir"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"data</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">bleve"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "dist_dir"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "log"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "enable"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"data</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">log</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">log.log"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "max_size"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">50</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "max_backups"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">30</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "max_age"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">28</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "compress"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "delayed_start"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "max_connections"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "max_concurrency"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">64</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "tls_insecure_skip_verify"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "tasks"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "download"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "workers"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "max_retry"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "task_persistant"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "transfer"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "workers"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "max_retry"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "task_persistant"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "upload"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "workers"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "max_retry"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "task_persistant"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "copy"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "workers"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "max_retry"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "task_persistant"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "decompress"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "workers"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "max_retry"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "task_persistant"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "decompress_upload"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "workers"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "max_retry"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "task_persistant"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "allow_retry_canceled"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "cors"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "allow_origins"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      "*"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "allow_methods"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      "*"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "allow_headers"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      "*"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "s3"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "enable"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "port"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5246</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "ssl"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "ftp"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "enable"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "listen"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">":5221"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "find_pasv_port_attempts"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">50</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "active_transfer_port_non_20"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "idle_timeout"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">900</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "connection_timeout"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">30</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "disable_active_mode"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "default_transfer_binary"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "enable_active_conn_ip_check"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "enable_pasv_conn_ip_check"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "sftp"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "enable"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "listen"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">":5222"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "last_launched_version"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"AList version"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="field-explanation" tabindex="-1"><a class="header-anchor" href="#field-explanation"><span>Field Explanation</span></a></h2>
<h3 id="force" tabindex="-1"><a class="header-anchor" href="#force"><span><strong>force</strong></span></a></h3>
<p>By default AList reads the configuration from environment variables, set this field to <code v-pre>true</code> to force AList to read config from the configuration file.</p>
<br/>
<h3 id="site-url" tabindex="-1"><a class="header-anchor" href="#site-url"><span><strong>site_url</strong></span></a></h3>
<p>The address of your AList server, such as <code v-pre>https://pan.nn.ci</code>. This address is essential for some features, and thus thry may not work properly if unset:</p>
<ul>
<li>thumbnailing <code v-pre>LocalStorage</code></li>
<li>previewing site after setting web proxy</li>
<li>displaying download address after setting web proxy</li>
<li>reverse-proxying to site sub directories</li>
<li>...</li>
</ul>
<p>Do not include the slash (<code v-pre>/</code>) at the end of the address. For example:</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"># correct:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"site_url"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"https://al.nn.ci"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"># incorrect (exceptions occur):</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"site_url"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"https://al.nn.ci/"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br/>
<h3 id="cdn" tabindex="-1"><a class="header-anchor" href="#cdn"><span><strong>cdn</strong></span></a></h3>
<p>The address of the CDN. Included <code v-pre>$version</code> values will be dynamically replaced by the version of AList. Existing dist resources are hosted on both npm and GitHub, which can be found at:</p>
<ul>
<li><a href="https://www.npmjs.com/package/alist-web" target="_blank" rel="noopener noreferrer">https://www.npmjs.com/package/alist-web</a></li>
<li><a href="https://github.com/alist-org/web-dist" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/web-dist</a></li>
</ul>
<p>Thus it is possible to use any npm or GitHub CDN path for this field. For example:</p>
<ul>
<li><a href="https://registry.npmmirror.com/alist-web/$version/files/dist/" target="_blank" rel="noopener noreferrer">https://registry.npmmirror.com/alist-web/$version/files/dist/</a></li>
<li><a href="https://cdn.jsdelivr.net/npm/alist-web@$version/dist/" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/alist-web@$version/dist/</a></li>
<li><a href="https://unpkg.com/alist-web@$version/dist/" target="_blank" rel="noopener noreferrer">https://unpkg.com/alist-web@$version/dist/</a></li>
<li><a href="https://cdn.jsdelivr.net/gh/alist-org/web-dist@$version/dist/" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/gh/alist-org/web-dist@$version/dist/</a></li>
<li><a href="https://cdn1.tianli0.top/npm/alist-web@$version/dist/" target="_blank" rel="noopener noreferrer">https://cdn1.tianli0.top/npm/alist-web@$version/dist/</a></li>
<li><a href="https://cdn1.tianli0.top/gh/alist-org/web-dist@$version/dist/" target="_blank" rel="noopener noreferrer">https://cdn1.tianli0.top/gh/alist-org/web-dist@$version/dist/</a></li>
<li><a href="https://npm.elemecdn.com/alist-web@$version/dist/" target="_blank" rel="noopener noreferrer">https://npm.elemecdn.com/alist-web@$version/dist/</a></li>
<li><a href="https://jsd.onmicrosoft.cn/npm/alist-web@$version/dist/" target="_blank" rel="noopener noreferrer">https://jsd.onmicrosoft.cn/npm/alist-web@$version/dist/</a></li>
<li><a href="https://jsd.onmicrosoft.cn/gh/alist-org/web-dist@$version/dist/" target="_blank" rel="noopener noreferrer">https://jsd.onmicrosoft.cn/gh/alist-org/web-dist@$version/dist/</a></li>
</ul>
<p>Keep empty to use local dist resources.</p>
<br/>
<h3 id="jwt-secret" tabindex="-1"><a class="header-anchor" href="#jwt-secret"><span><strong>jwt_secret</strong></span></a></h3>
<p>The secret used to sign the JWT token, randomly generated on first run.</p>
<br/>
<h3 id="token-expires-in" tabindex="-1"><a class="header-anchor" href="#token-expires-in"><span><strong>token_expires_in</strong></span></a></h3>
<p>User login expiration time, in hours.</p>
<br/>
<h3 id="database" tabindex="-1"><a class="header-anchor" href="#database"><span><strong>database</strong></span></a></h3>
<p>The database configuration, which is by default <code v-pre>sqlite3</code>. Available options are <code v-pre>sqlite3</code>, <code v-pre>mysql</code> and <code v-pre>postgres</code>.</p>
<ul>
<li>The database options do not need to be modified if using <code v-pre>sqlite3</code>.</li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "database"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "type"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"sqlite3"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//database type</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "host"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,         </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//database host</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "port"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,          </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//database port</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "user"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,         </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//database account</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "password"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,     </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//database password</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,         </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//database name</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "db_file"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"data</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">data.db"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,     </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//Database location, used by sqlite3</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "table_prefix"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"x_"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,           </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//database table name prefix</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "ssl_mode"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,     </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//To control the encryption options during the SSL handshake, the parameters can be searched by themselves, or check the answer from ChatGPT below</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "dsn"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">           // https://github.com/alist-org/alist/pull/6031</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>Expand to view details of <code v-pre>ssl_mode</code></summary>
<p>Leave blank if you do not understand what this is; no effective help can be given easily.</p>
<hr>
<p>In MySQL, the <code v-pre>ssl_mode</code> parameter is used to specify the authentication mode of the SSL connection. Here are a few common options:</p>
<ul>
<li><code v-pre>DISABLED</code>: Disable SSL connections.</li>
<li><code v-pre>PREFERRED</code>: Use an SSL connection if server has SSL enabled, and otherwise fallback to a normal connection.</li>
<li><code v-pre>REQUIRED</code>: Force to use SSL connection and fail if the server does not support SSL connection.</li>
<li><code v-pre>VERIFY_CA</code>: Force to use SSL connection and verify the authenticity of the server certificate.</li>
<li><code v-pre>VERIFY_IDENTITY</code>: Force to use an SSL connection and verify the authenticity of the server certificate and that the name matches the connecting hostname.</li>
</ul>
<p>Additional, MySQL 5.x and 8.x have differences. If you are using databases provided by service providers, BTFM. If you deployed the database yourself, STFW.</p>
<hr>
<p>In PostgreSQL, the <code v-pre>ssl_mode</code> parameter is used to specify how the client uses SSL connections. Here are a few common options:</p>
<ul>
<li><code v-pre>disable</code>: Disable SSL connections.</li>
<li><code v-pre>allow</code>: Allow SSL connections.</li>
<li><code v-pre>prefer</code>: Use an SSL connection if server has SSL enabled, and otherwise fallback to a normal connection.</li>
<li><code v-pre>require</code>: Force to use SSL connection and fail if the server does not support SSL connection.</li>
<li><code v-pre>verify-ca</code>: Force to use SSL connection and verify the authenticity of the server certificate.</li>
<li><code v-pre>verify-full</code>: Force to use an SSL connection and verify the authenticity of the server certificate and that the name matches the connecting hostname.</li>
</ul>
<hr>
<div style="text-align:right">
<p>:warning<VPIcon icon="warning:**The above information is from ChatGPT, so the accuracy has not been verified**:warning" />warning:</p>
</div>
</details>
<details class="hint-container details"><summary>Notes on modifying the database when there is already data</summary>
<ol>
<li>If you change the <code v-pre>sqlite</code> database to <code v-pre>mysql</code> database, it is first recommended to use the backup and recovery method.</li>
<li>If you directly import <code v-pre>sqlite</code> data into <code v-pre>mysql</code>, you can view this video tutorial: <a href="https://www.bilibili.com/video/BV1iV4y1T7kh" target="_blank" rel="noopener noreferrer">View tutorial</a>
<ul>
<li>Because when directly importing the cloud disk database table, the time of <code v-pre>sqlite</code> and the time of <code v-pre>mysql</code> are filled in differently, an error will be reported <a href="https://www.bilibili.com/video/BV1iV4y1T7kh?t=343.7" target="_blank" rel="noopener noreferrer">please check the precautions and how to solve it</a></li>
</ul>
</li>
</ol>
</details>
<br/>
<h3 id="meilisearch" tabindex="-1"><a class="header-anchor" href="#meilisearch"><span><strong>meilisearch</strong></span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "meilisearch"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "host"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"http://localhost:7700"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,    </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//Use `meilisearch` link, the default is the local machine</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "api_key"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,                      </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//Please check the `meilisearch` documentation</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "index_prefix"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">                  //Please check the `meilisearch` documentation</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Documentation link：<a href="https://www.meilisearch.com/docs" target="_blank" rel="noopener noreferrer">https://www.meilisearch.com/docs</a></p>
<p>Reference Links：<a href="https://github.com/AlistGo/alist/discussions/6830" target="_blank" rel="noopener noreferrer">https://github.com/AlistGo/alist/discussions/6830</a></p>
<br/>
<h3 id="scheme" tabindex="-1"><a class="header-anchor" href="#scheme"><span><strong>scheme</strong></span></a></h3>
<p>The configuration of scheme. Set this field if using HTTPS.</p>
<ul>
<li>Remember to copy the certificate file to the data directory. Config example:</li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "scheme"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "address"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"0.0.0.0"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,   </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// The http/https address to listen on, default `0.0.0.0`</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "http_port"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5244</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,      </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// The http port to listen on, default `5244`, if you want to disable http, set it to `-1`</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "https_port"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">-1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,       </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// The https port to listen on, default `-1`, if you want to enable https, set it to non `-1`</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "force_https"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,   </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Whether the HTTPS protocol is forcibly, if it is set to True, the user can only access the website through HTTPS</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "cert_file"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"data</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">cert.crt"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Path of cert file</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "key_file"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"data</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">key.key"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,    </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Path of key file</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "unix_file"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,        </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Unix socket file path to listen on, default empty, if you want to use unix socket, set it to non empty</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "unix_file_perm"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,   </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Unix socket file permission, set to the appropriate permissions</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "enable_h2c"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		// Support HTTP/2 Cleartext (H2C) protocol for alist's http service. The cleartext HTTP/2 protocol supports nginx's grpc_pass after it is enabled - https://github.com/AlistGo/alist/pull/8294</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br/>
<h3 id="temp-dir" tabindex="-1"><a class="header-anchor" href="#temp-dir"><span><strong>temp_dir</strong></span></a></h3>
<p>The directory to keep temporary files. By default AList uses <code v-pre>data/temp</code>.</p>
<div class="hint-container caution">
<p class="hint-container-title">Caution</p>
<p>temp_dir is a temporary folder exclusive to alist. In order to prevent AList from generating garbage files when being interrupted, the directory will be cleared every time AList starts, so do not store anything in this directory or map this directory &amp; subdirectories to directories in use when using Docker.</p>
</div>
<br/>
<h3 id="bleve-dir" tabindex="-1"><a class="header-anchor" href="#bleve-dir"><span><strong>bleve_dir</strong></span></a></h3>
<p>Where data is stored when using  <strong><code v-pre>bleve</code></strong> index.</p>
<br/>
<h3 id="dist-dir" tabindex="-1"><a class="header-anchor" href="#dist-dir"><span><strong>dist_dir</strong></span></a></h3>
<p>If this item is set, the front -end file of this option is preferred to render, support the use of other front -end files, and the back -end continues to use the original application</p>
<ul>
<li><a href="https://github.com/alist-org/alist/issues/5531" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/issues/5531</a></li>
<li><a href="https://github.com/alist-org/alist/discussions/6110" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/discussions/6110</a></li>
</ul>
<p>Upload the front -end file (dist) to the <code v-pre>data</code> folder of the application, and then fill in this way. The disadvantage is that if you update each time, you need to change the file manually</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "dist_dir"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"data</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">dist"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><br/>
<h3 id="log" tabindex="-1"><a class="header-anchor" href="#log"><span><strong>log</strong></span></a></h3>
<p>The log configuration. Set this field to save detailed logs of disable.</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "log"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "enable"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,					</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Whether AList should store logs</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"data</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">log</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">log.log"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,	</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//The path and name of the log file</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "max_size"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,					</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//the maximum size of a single log file, in MB. After reaching the specified size, the file will be automatically split.</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "max_backups"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,				</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//the number of log backups to keep. Old backups will be deleted automatically when the limit is exceeded.</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "max_age"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">28</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,					</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//The maximum number of days preserved in the log file, the log file that exceeds the number of days will be deleted</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "compress"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">				//Whether to enable log file compression functions. After compression, the file size can be reduced, but you need to decompress when viewing, and the default is to close the state false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br/>
<h3 id="delayed-start" tabindex="-1"><a class="header-anchor" href="#delayed-start"><span><strong>delayed_start</strong></span></a></h3>
<p><strong>Time unit: second</strong> (new feature of v3.19.0)</p>
<p>Whether to delay AList startup.<br>
Generally this option is used when AList is configured to auto-start. The reason is that sometimes network takes some time to connect, so drivers requiring cannot start correctly after Alist starts.</p>
<br/>
<h3 id="max-connections" tabindex="-1"><a class="header-anchor" href="#max-connections"><span><strong>max_connections</strong></span></a></h3>
<p>The maximum amount of connections at the same time. The default is 0, which is unlimited.</p>
<ul>
<li>10 or 20 is recommended for general devices such as n1.</li>
<li>Usage Scenarios: the device will crash if the device is bad at concurrency when picture mode is enabled.</li>
</ul>
<br/>
<h3 id="max-concurrency" tabindex="-1"><a class="header-anchor" href="#max-concurrency"><span><strong>max_concurrency</strong></span></a></h3>
<p>Limit the maximum concurrency of local agents. The default value is 64, and 0 means no limit.</p>
<br/>
<h3 id="tls-insecure-skip-verify" tabindex="-1"><a class="header-anchor" href="#tls-insecure-skip-verify"><span><strong>tls_insecure_skip_verify</strong></span></a></h3>
<p>Whether not to verify the SSL certificate. If there is a problem with the certificate of the website used when this option is not enabled (such as not including the intermediate certificate, having the certificate expired, or forging the certificate, etc.), the service will not be available. Run the program in a safe network environment when this option is enabled.</p>
<br/>
<h3 id="tasks" tabindex="-1"><a class="header-anchor" href="#tasks"><span><strong>tasks</strong></span></a></h3>
<p>Configuration for background task threads.</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "tasks"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "download"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "workers"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "max_retry"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "task_persistant"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "transfer"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "workers"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "max_retry"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "task_persistant"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "upload"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "workers"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "max_retry"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "task_persistant"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "copy"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "workers"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "max_retry"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "task_persistant"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "decompress"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "workers"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "max_retry"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "task_persistant"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "decompress_upload"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "workers"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "max_retry"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "task_persistant"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "allow_retry_canceled"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>workers</strong>: Number of task threads.</li>
<li><strong>max_retry</strong>: Number of retries.
<ul>
<li>0: Retries disabled.</li>
</ul>
</li>
<li><strong>download</strong>: Download task when downloading offline</li>
<li><strong>transfer</strong>: upload transfer task after offline download is completed</li>
<li><strong>upload</strong>: upload task</li>
<li><strong>copy</strong>: copy the task</li>
<li><strong>decompress</strong>：decompress the task</li>
<li><strong>decompress_upload</strong>：decompress upload the task</li>
<li><strong>task_persistant</strong>：The task is persistent and will not be cancelled after restarting <code v-pre>AList</code>
<ul>
<li><strong>download</strong>：false</li>
<li><strong>transfer</strong>：false</li>
<li><strong>upload</strong>：false</li>
<li><strong>copy</strong>：false</li>
<li><strong>decompress</strong>：false</li>
<li><strong>decompress_upload</strong>：false</li>
</ul>
</li>
<li><strong>allow_retry_canceled</strong>：Allow users to retry previously canceled tasks</li>
</ul>
<hr>
<p>A new <strong>transmission</strong> configuration path is added to the background configuration: <code v-pre>/@manage/settings/traffic</code></p>
<ul>
<li>Supports limiting the number of threads and transmission uplink and downlink rates of <mark>6 tasks</mark></li>
<li><strong><a href="https://github.com/AlistGo/alist/pull/7948" target="_blank" rel="noopener noreferrer">https://github.com/AlistGo/alist/pull/7948</a></strong></li>
</ul>
<p>Operation principle: If <code v-pre>settings/traffic</code> does not have a thread number field (first run or just upgraded from an old version), <code v-pre>settings/traffic</code> will be initialized with the value of the config configuration file. If <code v-pre>settings/traffic</code> has a value, the thread configuration information of config will be ignored</p>
<ul>
<li>
<p><strong><a href="https://github.com/AlistGo/alist/pull/7948#issuecomment-2775174617" target="_blank" rel="noopener noreferrer">https://github.com/AlistGo/alist/pull/7948#issuecomment-2775174617</a></strong></p>
</li>
<li>
<p>Summary: For newly installed or upgraded versions, the values will be read from the configuration file to initialize the <code v-pre>traffic</code> configuration information. Subsequent modifications to the thread only need to be modified in the background.</p>
</li>
</ul>
<br/>
<h3 id="cors" tabindex="-1"><a class="header-anchor" href="#cors"><span><strong>cors</strong></span></a></h3>
<p>Configuration for Cross-Origin Resource Sharing (CORS).</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "cors"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "allow_origins"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      "*"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "allow_methods"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      "*"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "allow_headers"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      "*"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>allow_origins</strong>: Allowed sources.</li>
<li><strong>allow_methods</strong>: Allowed request methods.</li>
<li><strong>allow_headers</strong>: Allowed request headers.</li>
</ul>
<p>Use it to understand it by yourself, and then configure it. If you do n’t know, please do n’t modify it at will. Use the default configuration.</p>
<br/>
<h3 id="s3" tabindex="-1"><a class="header-anchor" href="#s3"><span><strong>S3</strong></span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "s3"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "enable"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "port"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5246</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "ssl"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>enable</code>：Whether the S3 function is enabled, the default is not enabled</li>
<li><code v-pre>port</code>：port</li>
<li><code v-pre>SSL</code>：Enable the HTTPS certificate, not enabled by default</li>
</ul>
<p>Function introduction: <RouteLink to="/guide/advanced/s3.html">Click to view</RouteLink></p>
<br/>
<h3 id="ftp" tabindex="-1"><a class="header-anchor" href="#ftp"><span><strong>ftp</strong> <Badge text="v3.41.0" type="info" vertical="middle" /></span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "ftp"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "enable"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "listen"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">":5221"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "find_pasv_port_attempts"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">50</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "active_transfer_port_non_20"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "idle_timeout"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">900</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "connection_timeout"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">30</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "disable_active_mode"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "default_transfer_binary"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "enable_active_conn_ip_check"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "enable_pasv_conn_ip_check"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><code v-pre>enable</code>: Whether the <strong>ftp</strong> function is enabled, not enabled by default</p>
</li>
<li>
<p><code v-pre>listen</code>: port number</p>
</li>
<li>
<p><code v-pre>find_pasv_port_attempts</code>: maximum number of attempts to re-find a port due to port conflicts during passive transmission</p>
</li>
<li>
<p><code v-pre>active_transfer_port_non_20</code>: enable ports other than 20 as active transmission ports</p>
</li>
<li>
<p><code v-pre>idle_timeout</code>: maximum idle time (seconds) when there is no client request</p>
</li>
<li>
<p><code v-pre>connection_timeout</code>: connection timeout</p>
</li>
<li>
<p><code v-pre>disable_active_mode</code>: disable active transmission mode</p>
</li>
<li>
<p><code v-pre>default_transfer_binary</code>: transfer in binary mode by default</p>
</li>
<li>
<p><code v-pre>enable_active_conn_ip_check</code>: perform IP check on the client side of the TCP connection of the data stream in active transmission mode</p>
</li>
<li>
<p><code v-pre>enable_pasv_conn_ip_check</code>: perform IP check on the client side of the TCP connection of the data stream in passive transmission mode</p>
</li>
</ul>
<p>Other instructions: <RouteLink to="/guide/advanced/ftp.html">Click to view</RouteLink></p>
<br/>
<h3 id="sftp" tabindex="-1"><a class="header-anchor" href="#sftp"><span><strong>sftp</strong> <Badge text="v3.41.0" type="info" vertical="middle" /></span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "sftp"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "enable"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "listen"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">":5222"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>enable</code>: Whether the <strong>sftp</strong> function is enabled, not enabled by default</li>
<li><code v-pre>listen</code>: port number</li>
</ul>
<p>Other instructions: <RouteLink to="/guide/advanced/ftp.html">Click to view</RouteLink></p>
</div></template>


