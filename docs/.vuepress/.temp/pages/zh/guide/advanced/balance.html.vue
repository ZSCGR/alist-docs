<template><div><h1 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡"><span>负载均衡</span></a></h1>
<p>要求两个存储中的文件结构完全相同，程序会自动轮询所有存储进行下载/请求。</p>
<p>可以使用不同网盘，但是文件目录要一致。</p>
<ul>
<li>若修改主显示挂载的网盘后和负载挂载的网盘目录树不一致导致返回错误，自行解决进行负载网盘的目录文件保持一致。</li>
</ul>
<p><img src="/img/advanced/balance.png" alt="" loading="lazy"></p>
<p>第一个带红框标记的为主挂载，也就是在前端页面显示的，后面剩下的九个就是对第一个进行负载均衡</p>
<h2 id="如何使用​" tabindex="-1"><a class="header-anchor" href="#如何使用​"><span><strong>如何使用​</strong></span></a></h2>
<p>第一个存储可以正常添加，另外一个存储以 <code v-pre>第一个存储挂载路径 + .balance +任何其他内容</code> 为挂载路径添加。</p>
<p>例如：</p>
<ul>
<li>存储1：test</li>
<li>存储2：test.balance1</li>
<li>存储3：test.balance2</li>
<li>存储4：test.balance3</li>
<li>...</li>
<li>存储n：test.balancen</li>
</ul>
</div></template>


