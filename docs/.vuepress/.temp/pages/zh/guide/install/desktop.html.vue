<template><div><h1 id="桌面版" tabindex="-1"><a class="header-anchor" href="#桌面版"><span>桌面版</span></a></h1>
<NaiveClient>
<Desktop />
</NaiveClient>
<br/>
<h2 id="查看激活-key" tabindex="-1"><a class="header-anchor" href="#查看激活-key"><span><strong>查看激活 Key</strong></span></a></h2>
<p>购买渠道查看方式如下</p>
<Tabs :data='[{"id":"官网"},{"id":"Lemon Squeezy"}]' tab-id="Desktop">
<template #title0="{ value, isActive }">官网</template>
<template #title1="{ value, isActive }">Lemon Squeezy</template>
<template #tab0="{ value, isActive }">
<!-- ：**https://mbd.pub/o/bread/ZJaTl5xy** -->
<ol>
<li>进入官网 ==&gt; <strong><a href="https://desktop.alistgo.com/zh" target="_blank" rel="noopener noreferrer">https://desktop.alistgo.com/zh</a></strong></li>
<li>首页购买 ==&gt; 获取激活key</li>
</ol>
<p><img src="/img/desktop/new_get_key.png" alt="" loading="lazy"></p>
<p>激活时 <strong><code v-pre>不需要</code></strong> 勾选 🔲 <strong>Lemon Squeezey</strong></p>
<p><img src="/img/desktop/logIn_mbd.png" alt="" loading="lazy"></p>
</template>
<template #tab1="{ value, isActive }">
<!-- ：**https://app.lemonsqueezy.com/my-orders** -->
<p>Lemon Squeezy</p>
<p><img src="/img/desktop/key_lemonsqueezy.png" alt="" loading="lazy"></p>
<p>激活时 <strong><code v-pre>需要</code></strong> 勾选 ✅ <strong>Lemon Squeezey</strong></p>
<p><img src="/img/desktop/login_lemonsqueezy.png" alt="" loading="lazy"></p>
</template>
</Tabs>
<br/>
<h2 id="解除设备上限" tabindex="-1"><a class="header-anchor" href="#解除设备上限"><span><strong>解除设备上限</strong></span></a></h2>
<Tabs :data='[{"id":"官网"},{"id":"Lemon Squeezy"}]' tab-id="Desktop">
<template #title0="{ value, isActive }">官网</template>
<template #title1="{ value, isActive }">Lemon Squeezy</template>
<template #tab0="{ value, isActive }">
<p>输入在官网购买的<code v-pre>key</code> 将不再使用的设备进行反激活踢下线</p>
<!-- - **https://ad.nn.ci/zh/usage** -->
<p><img src="/img/desktop/mianbaoduo.png" alt="" loading="lazy"></p>
</template>
<template #tab1="{ value, isActive }">
<!-- 在 **https://app.lemonsqueezy.com/my-orders** 登录购买[ :lemon:Lemon Squeezy](https://store.nn.ci/buy/51dca247-20df-4991-8104-54ca534bcc82) 时的邮箱，然后 -->
<p>按照下图教程操作</p>
<p><img src="/img/desktop/lemonsqueezy.png" alt="" loading="lazy"></p>
</template>
</Tabs>
</div></template>


<script setup lang="ts">
import Desktop from "@Desktop";
</script>