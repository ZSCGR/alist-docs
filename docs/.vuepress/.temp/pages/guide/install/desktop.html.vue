<template><div><h1 id="desktop" tabindex="-1"><a class="header-anchor" href="#desktop"><span>Desktop</span></a></h1>
<NaiveClient>
<Desktop />
</NaiveClient>
<br/>
<h2 id="view-activation-key" tabindex="-1"><a class="header-anchor" href="#view-activation-key"><span><strong>View Activation Key</strong></span></a></h2>
<p>Two different purchasing channels are as follows</p>
<Tabs :data='[{"id":"mbd"},{"id":"Lemon Squeezy"}]' tab-id="Desktop">
<template #title0="{ value, isActive }">mbd</template>
<template #title1="{ value, isActive }">Lemon Squeezy</template>
<template #tab0="{ value, isActive }">
<p>MBD purchases can be viewed in a variety of different channels</p>
<!-- ：**https://mbd.pub/o/bread/ZJaTl5xy** -->
<ol>
<li>mbd</li>
<li>Alipay Bills ==&gt; Merchant Order No.</li>
<li>Wechat Bills ==&gt; Merchant Order No.</li>
</ol>
<p><img src="/img/desktop/key_mbd.png" alt="" loading="lazy"></p>
<p>Activation <strong><code v-pre>Not Required</code></strong> Select 🔲   <strong>Lemon Squeezey</strong></p>
<p><img src="/img/desktop/logIn_mbd.png" alt="" loading="lazy"></p>
</template>
<template #tab1="{ value, isActive }">
<!-- ：**https://app.lemonsqueezy.com/my-orders** -->
<p>Lemon Squeezy</p>
<p><img src="/img/desktop/key_lemonsqueezy.png" alt="" loading="lazy"></p>
<p>Activation <strong><code v-pre>required</code></strong> Select ✅ <strong>Lemon Squeezey</strong></p>
<p><img src="/img/desktop/login_lemonsqueezy.png" alt="" loading="lazy"></p>
</template>
</Tabs>
<br/>
<h2 id="remove-device-limits" tabindex="-1"><a class="header-anchor" href="#remove-device-limits"><span><strong>Remove device limits</strong></span></a></h2>
<Tabs :data='[{"id":"mbd"},{"id":"Lemon Squeezy"}]' tab-id="Desktop">
<template #title0="{ value, isActive }">mbd</template>
<template #title1="{ value, isActive }">Lemon Squeezy</template>
<template #tab0="{ value, isActive }">
<p>Enter the <code v-pre>key</code> purchased on mbd to deactivate the device that is no longer in use and kick it offline.</p>
<!-- - **https://ad.nn.ci/zh/usage** -->
<p><img src="/img/desktop/mianbaoduo.png" alt="" loading="lazy"></p>
</template>
<template #tab1="{ value, isActive }">
<!-- Log in to **https://app.lemonsqueezy.com/my-orders**
log in with the email address you used when you purchased [:lemon:Lemon Squeezy](https://store.nn.ci/buy/51dca247-20df-4991-8104-54ca534bcc82) and  -->
<p>follow the instructions below.</p>
<p><img src="/img/desktop/lemonsqueezy.png" alt="" loading="lazy"></p>
</template>
</Tabs>
</div></template>


<script setup lang="ts">
import Desktop from "@Desktop";
</script>