<template><div><h2 id="what-is-this" tabindex="-1"><a class="header-anchor" href="#what-is-this"><span>what is this?</span></a></h2>
<p>It is some error codes during the use of <code v-pre>AList</code>, and how to solve them (network problems or network disk change API and other problems may not be solved at the time and need human intervention)</p>
<br/>
<hr>
<Badge text="Q" type="warning" vertical="middle" />：Ali cloud disk open appears <strong>TooManyRequests</strong> 、<strong>Too Many Requests</strong><br/>
<Badge text="A" type="info" vertical="middle" />：<RouteLink to="/guide/drivers/aliyundrive_open.html"><strong>Click me to view detailed description</strong></RouteLink><hr>
<Badge text="Q" type="warning" vertical="middle" />：Ali cloud disk open appears <strong>ExceedCapacityForbidden</strong> <br/>
<Badge text="A" type="info" vertical="middle" />：<RouteLink to="/guide/drivers/aliyundrive_open.html#four%E3%80%81"><strong>Click me to view detailed description</strong></RouteLink><hr>
<Badge text="Q" type="warning" vertical="middle" />：Token is expired（<strong>Appears when logging in to the AList account</strong>）<br/>
<Badge text="A" type="info" vertical="middle" />：It means that your <code v-pre>AList</code> login is valid for <code v-pre>48</code> hours by default, you can modify the configuration file <code v-pre>config.json</code><ul>
<li>If you are prompted to log in successfully when you log in and then this prompt is displayed again, check whether you have used CDN acceleration to cache the AList.</li>
</ul>
<hr>
<Badge text="Q" type="warning" vertical="middle" />：Failed init storage but storage is already created: failed init storage: failed to refresh token: The input parameter refresh_token is missing. Please refer to document.<br/>
<Badge text="A" type="info" vertical="middle" />：Generally, the refresh token (token) is wrong when adding <code v-pre>driver</code>, and it can be solved by replacing it with the correct one.<hr>
<Badge text="Q" type="warning" vertical="middle" />：failed get objs: failed to list objs: ForbiddenDriveNotValid:not valid driveld<br/>
<Badge text="A" type="info" vertical="middle" />：Generally, it means that <code v-pre>driver</code> has been deprecated. For example, Aliyun disk can be replaced with <RouteLink to="/guide/drivers/aliyundrive_open.html"><strong>Alibaba cloud disk open</strong></RouteLink>. Others are temporarily unknown, and others not yet<hr>
<Badge text="Q" type="warning" vertical="middle" />：no such host、TLS handshake timeout、read: connection reset by peer、dns lookup failed、connect: connection refused、Client.Timeout exceeded while awaiting headers、network is unreachable<br/>
<Badge text="A" type="info" vertical="middle" />：These problems are generally caused by network problems, and you can troubleshoot and solve them yourself.<ul>
<li>If you encounter it when you add <code v-pre>Aliyun disk open</code>：TLS handshake timeout （<RouteLink to="/faq/why.html#prompt-when-adding-aliyun-drive-shared-prompt-post-https-auth-aliyundrive-com-v2-account-token-net-http-tls-handshake-timeout">Click me to see how to solve</RouteLink>）</li>
</ul>
<hr>
<Badge text="Q" type="warning" vertical="middle" />：Failed create storage in database: UNIQUE constraint failed: x_storages.mount_path (<strong>appears when mounting the driver</strong>)<br/>
<Badge text="A" type="info" vertical="middle" />：The path to mount to, it is unique and cannot be repeated<hr>
<Badge text="Q" type="warning" vertical="middle" />：Key: 'Storage.MountPath' Error:Field validation for 'MountPath' failed on the 'required' tag (<strong>appears when mounting the driver</strong>)<br/>
<Badge text="A" type="info" vertical="middle" />：The mount path is a required option, please fill in it<hr>
<Badge text="Q" type="warning" vertical="middle" />：UNIQUE constraint failed: x_meta.path (appears when adding meta information)<br/>
<Badge text="A" type="info" vertical="middle" />：When adding meta information, there can only be one path, and it cannot be repeated<hr>
<Badge text="Q" type="warning" vertical="middle" />：Key: 'Meta.Path' Error:Field validation for 'Path' failed on the 'required' tag (appears when adding meta information)<br/>
<Badge text="A" type="info" vertical="middle" />：When adding metadata, the path must be filled in<hr>
<Badge text="Q" type="warning" vertical="middle" />：Failed load storage: failed init storage: the site does not allow mounted<br/>
<Badge text="A" type="info" vertical="middle" />：The other party's <code v-pre>AList</code> site is not allowed to mount，<RouteLink to="/guide/drivers/Alist%20V2%20V3.html#link"><strong>View detailed instructions</strong></RouteLink><hr>
<Badge text="Q" type="warning" vertical="middle" />：failed get objs: failed to list objs: Sorry, sharing is not available in the current region（<strong>PikPak/share</strong>）<br/>
<Badge text="Q" type="warning" vertical="middle" />：failed get objs: failed to list objs: terabox is not yet available in this are（<strong>Terabox</strong>）<br/>
<Badge text="A" type="info" vertical="middle" />：Domestic access is not supported, if you build it locally, you can check this <a href="https://anwen-anyi.github.io/index/07-wenti.html#_41-alist%E5%A6%82%E4%BD%95-%E4%BD%BF%E7%94%A8-%E5%90%83%E5%88%B0-%E4%BB%A3%E7%90%86-proxy" target="_blank" rel="noopener noreferrer"><strong>Reference Solution</strong></a><ul>
<li>For example, Google, Mega, Terabox, etc. that require a proxy to access can be used in this way</li>
</ul>
<hr>
<Badge text="Q" type="warning" vertical="middle" />：Search not available（<strong>appears when indexing</strong>）<br/>
<Badge text="A" type="info" vertical="middle" />：The <code v-pre>Search Index</code> option is not selected, and cannot be built and used. I don’t know which search index to choose? <RouteLink to="/guide/advanced/search.html#difference-between-different-search-indexes"><strong>Click me to view</strong></RouteLink><hr>
<Badge text="Q" type="warning" vertical="middle" />：only chinese and english, numbers and underscores are supported, and the length is no more than 50 (<strong>Appears when the baidu.photo folder is renamed</strong>)<br/>
<Badge text="A" type="info" vertical="middle" />：When renaming the baidu.photo folder, the maximum length is 50<hr>
<Badge text="Q" type="warning" vertical="middle" />：failed get objs: failed to list objs: NotFound.FileId:The resource file_id cannot be found. file_id:634e704cefa78f92fefd4c779f7422d820082d041（<strong>Add Alibaba cloud disk open</strong>）<br/>
<Badge text="A" type="info" vertical="middle" />：When adding the open storage of Alibaba Cloud disk, <code v-pre>root folder ID</code> is wrong, which of the last ID above is the wrong ID, just get the correct replacement.<hr>
<Badge text="Q" type="warning" vertical="middle" />：System error: SyntaxError: Invalid regular expression: /?/: Nothing to repeat<br/>
<Badge text="A" type="info" vertical="middle" />：Your Tampermonkey answering plug-in conflicts, just close it <a href="https://github.com/alist-org/alist/discussions/2399" target="_blank" rel="noopener noreferrer"><strong>For details, click to view</strong></a><hr>
<Badge text="Q" type="warning" vertical="middle" />：Too many unsuccessful sign-in attempts have been made using an incorrect username or password, Try again later.<br/>
<Badge text="A" type="info" vertical="middle" />：If you enter the wrong password for 6 consecutive logins, it will be locked, and you can reset it by restarting AList.<hr>
<Badge text="Q" type="warning" vertical="middle" />：Failed get storage: please add a storage first. （<strong>When adding offline download files</strong>）<br/>
<Badge text="A" type="info" vertical="middle" />：When adding an offline download file, you need to enter which cloud disk you want to download the offline download file to and then click on the <code v-pre>folder</code> instead of adding it on the home page <RouteLink to="/guide/advanced/offline-download.html"><strong>Complete Instructions</strong></RouteLink><hr>
<Badge text="Q" type="warning" vertical="middle" />：failed get objs: failed to list objs: Unable to retrieve user's mysite URL（<strong>When adding onedrive_app</strong>）<br/>
<Badge text="A" type="info" vertical="middle" />：The newly created <code v-pre>OneDrive</code> user account does not take effect in real time, Delay takes effect, wait for a few hours and try again <a href="https://github.com/alist-org/docs/discussions/189#discussioncomment-5928892" target="_blank" rel="noopener noreferrer"><strong>Case</strong></a><hr>
<Badge text="Q" type="warning" vertical="middle" />：failed to start: listen tcp 0.0.0.0:5244: bind: address already in use （<strong>When starting the AList program</strong>）<br/>
<Badge text="A" type="info" vertical="middle" />：Port number 5244 is already in use, check whether it is occupied (generally you have started an AList with port 5244), or modify the port number started by AList, <RouteLink to="/config/configuration.html#port"><strong>How to modify</strong></RouteLink><hr>
<Badge text="Q" type="warning" vertical="middle" />：<strong><RouteLink to="/faq/why.html#why-do-i-get-413-http-code-when-i-upload-a-file">When AList upload file</RouteLink></strong>：Request failed with status code 413<br/>
<Badge text="A" type="info" vertical="middle" />：Limit the size of the files configured nginx, modify the nginx's <code v-pre>client_max_body_size</code>,If you are a pagoda to go to the pagoda page to modify <a href="https://blog.csdn.net/u012514495/article/details/127981183" target="_blank" rel="noopener noreferrer">Example</a><hr>
<Badge text="Q" type="warning" vertical="middle" />：<strong>failed get objs: failed to list objs: query fail [61008]</strong><br/>
<Badge text="A" type="info" vertical="middle" />：It may be because some drivers do not support modifying the file sorting. Try to cancel the file sorting.<hr>
<p>That's all for the time being, if there are more, you can leave a message, or add according to the format (for uniformity and intuitiveness)</p>
</div></template>


