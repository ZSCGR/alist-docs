<template><div><h1 id="load-balancing" tabindex="-1"><a class="header-anchor" href="#load-balancing"><span>Load balancing</span></a></h1>
<p>It is required that the file structures in the two storages are exactly the same, and the program will automatically poll all storages for download/request.</p>
<p>Different network disks can be used, but the file directories must be consistent.</p>
<ul>
<li>If the network disk mounted on the main display is inconsistent with the directory tree of the network disk mounted on the load and an error is returned after modifying the network disk mounted on the main display, you can solve it by yourself to keep the directory files of the network disk on the load consistent.</li>
</ul>
<p><img src="/img/advanced/balance.png" alt="" loading="lazy"></p>
<p>The first is marked with a red box. It is the main mount, which is displayed on the front page. The remaining nine are the first load balancing on the first one.</p>
<h3 id="how-to-use​" tabindex="-1"><a class="header-anchor" href="#how-to-use​"><span><strong>how to use​</strong></span></a></h3>
<p>One storage can be added normally, and the other storage can be added with the mount path of <code v-pre>the first storage mount path + .balance + any other content</code>.<br>
E.g:</p>
<ul>
<li>Storage 1: test</li>
<li>Storage 2: test.balance1</li>
<li>Storage 3: test.balance2</li>
<li>Storage 4: test.balance3</li>
<li>...</li>
<li>Storage n: test.balancen</li>
</ul>
</div></template>


