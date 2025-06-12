<template><div><h2 id="这个是什么" tabindex="-1"><a class="header-anchor" href="#这个是什么"><span>这个是什么？</span></a></h2>
<p>这个是收集一些<code v-pre>AList</code>使用期间的一些错误码，然后如何解决（网络问题或者网盘更改API以及其它一些问题可能会无法当时解决需要人为去干预）</p>
<br/>
<hr>
<Badge text="Q" type="warning" vertical="middle" />：阿里云盘open出现 <strong>TooManyRequests</strong> 、<strong>Too Many Requests</strong><br/>
<Badge text="A" type="info" vertical="middle" />：<RouteLink to="/zh/guide/drivers/aliyundrive_open.html"><strong>点我查看详细说明</strong></RouteLink><hr>
<Badge text="Q" type="warning" vertical="middle" />：阿里云盘open出现 <strong>ExceedCapacityForbidden</strong> <br/>
<Badge text="A" type="info" vertical="middle" />：<RouteLink to="/zh/guide/drivers/aliyundrive_open.html#%E5%9B%9B%E3%80%81"><strong>点我查看详细说明</strong></RouteLink><hr>
<Badge text="Q" type="warning" vertical="middle" />：Token is expired（<strong>出现在登录AList账号时</strong>）<br/>
<Badge text="A" type="info" vertical="middle" />：是指你<code v-pre>AList</code>登录有效期到了默认是<code v-pre>48</code>小时，可以在修改<code v-pre>config.json</code>配置文件中<ul>
<li>如果你登录的时候提示登录成功然后又显示这个提示，检查你是否使用了CDN加速等给AList进行了缓存导致的</li>
</ul>
<hr>
<Badge text="Q" type="warning" vertical="middle" />：Failed init storage but storage is already created: failed init storage: failed to refresh token: The input parameter refresh_token is missing. Please refer to document.<br/>
<Badge text="A" type="info" vertical="middle" />：一般是在添加<code v-pre>驱动</code>的时候刷新令牌(token)不对，更换正确的替换了即可解决。<hr>
<Badge text="Q" type="warning" vertical="middle" />：failed get objs: failed to list objs: ForbiddenDriveNotValid:not valid driveld<br/>
<Badge text="A" type="info" vertical="middle" />：一般指的是<code v-pre>驱动</code>已经弃用，例如阿里云盘，更换成<RouteLink to="/zh/guide/drivers/aliyundrive_open.html"><strong>阿里云盘open</strong></RouteLink>即可,其他的暂时未知，其他的暂时没有<hr>
<Badge text="Q" type="warning" vertical="middle" />：no such host、TLS handshake timeout、read: connection reset by peer、dns lookup failed、connect: connection refused、Client.Timeout exceeded while awaiting headers、network is unreachable<br/>
<Badge text="A" type="info" vertical="middle" />：遇到这些问题一般都是网络问题导致的，自行排查然后解决。<ul>
<li>如果是添加<code v-pre>阿里云盘open</code>时候遇到：TLS handshake timeout （<RouteLink to="/zh/faq/why.html#%E6%B7%BB%E5%8A%A0%E9%98%BF%E9%87%8C%E4%BA%91%E7%9B%98-%E5%88%86%E4%BA%AB-%E6%97%B6%E6%8F%90%E7%A4%BA-%E6%8F%90%E7%A4%BApost-https-auth-aliyundrive-com-v2-account-token-net-http-tls-handshake-timeout">点击我查看如何解决</RouteLink>）</li>
</ul>
<hr>
<Badge text="Q" type="warning" vertical="middle" />：Failed create storage in database: UNIQUE constraint failed: x_storages.mount_path （<strong>出现在挂载驱动时</strong>）<br/>
<Badge text="A" type="info" vertical="middle" />：要挂载到的路径，它是唯一的，不能重复<hr>
<Badge text="Q" type="warning" vertical="middle" />：Key: 'Storage.MountPath' Error:Field validation for 'MountPath' failed on the 'required' tag（<strong>出现在挂载驱动时</strong>）<br/>
<Badge text="A" type="info" vertical="middle" />：挂载路径是必填选项，填写一下<hr>
<Badge text="Q" type="warning" vertical="middle" />：UNIQUE constraint failed: x_meta.path（<strong>出现在添加元信息时</strong>）<br/>
<Badge text="A" type="info" vertical="middle" />：添加元信息时路径只能有一个，不可以重复<hr>
<Badge text="Q" type="warning" vertical="middle" />：Key: 'Meta.Path' Error:Field validation for 'Path' failed on the 'required' tag（<strong>出现在添加元信息时</strong>）<br/>
<Badge text="A" type="info" vertical="middle" />：添加元信息时，路径是必须要填写的<hr>
<Badge text="Q" type="warning" vertical="middle" />：Failed load storage: failed init storage: the site does not allow mounted<br/>
<Badge text="A" type="info" vertical="middle" />：对方的<code v-pre>AList</code>站点不允许挂载，<RouteLink to="/zh/guide/drivers/Alist%20V2%20V3.html#%E9%93%BE%E6%8E%A5"><strong>查看详细说明</strong></RouteLink><hr>
<Badge text="Q" type="warning" vertical="middle" />：failed get objs: failed to list objs: Sorry, sharing is not available in the current region（<strong>PikPak/分享</strong>）<br/>
<Badge text="Q" type="warning" vertical="middle" />：failed get objs: failed to list objs: terabox is not yet available in this are（<strong>Terabox</strong>）<br/>
<Badge text="A" type="info" vertical="middle" />：国内不支持访问，如果你是在本地搭建的可以查看一下这个<a href="https://anwen-anyi.github.io/index/07-wenti.html#_41-alist%E5%A6%82%E4%BD%95-%E4%BD%BF%E7%94%A8-%E5%90%83%E5%88%B0-%E4%BB%A3%E7%90%86-proxy" target="_blank" rel="noopener noreferrer"><strong>参考方案</strong></a><ul>
<li>例如 Google、Mega、Terabox 等这些需要代理才能访问的都可以通过这样的方法使用</li>
</ul>
<hr>
<Badge text="Q" type="warning" vertical="middle" />：Search not available（<strong>出现在构建索引时</strong>）<br/>
<Badge text="A" type="info" vertical="middle" />：<code v-pre>搜索索引</code>选项没有选择，无法构建使用，不知道选择哪个搜索索引好?<RouteLink to="/zh/guide/advanced/search.html#%E4%B8%8D%E5%90%8C%E6%90%9C%E7%B4%A2%E7%B4%A2%E5%BC%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%B7%AE%E5%BC%82"><strong>点我查看</strong></RouteLink><hr>
<Badge text="Q" type="warning" vertical="middle" />：only chinese and english, numbers and underscores are supported, and the length is no more than 50（<strong>出现在一刻相册文件改名时</strong>）<br/>
<Badge text="A" type="info" vertical="middle" />：一刻相册文件夹改名时最大50长度<hr>
<Badge text="Q" type="warning" vertical="middle" />：failed get objs: failed to list objs: NotFound.FileId:The resource file_id cannot be found. file_id:634e704cefa78f92fefd4c779f7422d820082d041（<strong>添加阿里云盘open</strong>）<br/>
<Badge text="A" type="info" vertical="middle" />：添加阿里云盘open存储时，<code v-pre>根文件夹ID</code>错误上述最后哪个ID就是错误的ID去获取正确的替换即可<hr>
<Badge text="Q" type="warning" vertical="middle" />：System error: SyntaxError: Invalid regular expression: /?/: Nothing to repeat<br/>
<Badge text="A" type="info" vertical="middle" />：你的油猴答题插件冲突了，关闭了即可<a href="https://github.com/alist-org/alist/discussions/2399" target="_blank" rel="noopener noreferrer"><strong>详情查看点击查看</strong></a><hr>
<Badge text="Q" type="warning" vertical="middle" />：Too many unsuccessful sign-in attempts have been made using an incorrect username or password, Try again later.<br/>
<Badge text="A" type="info" vertical="middle" />：连续登录输入6次密码错误就会锁定，重启AList即可重置。<hr>
<Badge text="Q" type="warning" vertical="middle" />：Failed get storage: please add a storage first. （<strong>添加离线下载内容时</strong>）<br/>
<Badge text="A" type="info" vertical="middle" />：添加离线下载文件时，你需要进入你想把离线下载的文件下载到哪个云盘然后就进入哪个<code v-pre>文件夹</code>，而不是在首页添加 <RouteLink to="/zh/guide/advanced/offline-download.html"><strong>完整使用说明</strong></RouteLink><hr>
<Badge text="Q" type="warning" vertical="middle" />：failed get objs: failed to list objs: Unable to retrieve user's mysite URL（<strong>添加onedrive_app时</strong>）<br/>
<Badge text="A" type="info" vertical="middle" />：新建的 <code v-pre>OneDrive</code>用户账号不是实时生效，会延时生效等待几小时后试试看 <a href="https://github.com/alist-org/docs/discussions/189#discussioncomment-5928892" target="_blank" rel="noopener noreferrer"><strong>案例</strong></a><hr>
<Badge text="Q" type="warning" vertical="middle" />：failed to start: listen tcp 0.0.0.0:5244: bind: address already in use （<strong>启动AList程序时</strong>）<br/>
<Badge text="A" type="info" vertical="middle" />：5244端口号已经被使用，排查是否被占用(一般来说你已经启动了一个5244端口的AList导致的)，或者修改AList启动的端口号,<RouteLink to="/zh/config/configuration.html#port"><strong>如何修改</strong></RouteLink><hr>
<Badge text="Q" type="warning" vertical="middle" />：<strong><RouteLink to="/zh/faq/why.html#%E4%B8%BA%E4%BB%80%E4%B9%88%E6%88%91%E5%9C%A8%E4%B8%8A%E4%BC%A0%E6%96%87%E4%BB%B6%E6%97%B6%E5%BE%97%E5%88%B0-http-413-%E9%94%99%E8%AF%AF">AList上传文件时提示</RouteLink></strong>：Request failed with status code 413<br/>
<Badge text="A" type="info" vertical="middle" />：Nginx配置的文件大小所限制，修改Nginx的<code v-pre>client_max_body_size</code>就可以，如果你是宝塔搭建的去宝塔页面修改<a href="https://blog.csdn.net/u012514495/article/details/127981183" target="_blank" rel="noopener noreferrer">示例</a><hr>
<Badge text="Q" type="warning" vertical="middle" />：<strong>failed get objs: failed to list objs: query fail [61008]</strong><br/>
<Badge text="A" type="info" vertical="middle" />：可能是因为某些驱动不支持修改文件排序导致的，取消文件排序试试看<hr>
<p>暂时就这些，如果还有可以留言，或者按照格式添加（为了统一直观）</p>
</div></template>


