<template><div><h1 id="crypt" tabindex="-1"><a class="header-anchor" href="#crypt"><span>Crypt</span></a></h1>
<h2 id="introduce" tabindex="-1"><a class="header-anchor" href="#introduce"><span><strong>introduce</strong></span></a></h2>
<p>What is <code v-pre>Crypt</code>?</p>
<p>In simple words, it's a two-password-protected safe. No one can open it without the key. The password and the salt in the configuration form the key.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>If you don’t know how to use this encryption/decryption driver, please read this guide carefully</li>
<li>Please test it locally to understand it fully before use in the production environment.</li>
<li>The data loss is 100% caused by configuration change. If data has been stored within Crypt, change configuration won't re-encrypt data, those data will be inaccessible to Crypt!</li>
</ol>
<p><mark>Remind again, please read the document carefully, otherwise the data may be lost！</mark></p>
</div>
<h2 id="instruction" tabindex="-1"><a class="header-anchor" href="#instruction"><span><strong>Instruction</strong></span></a></h2>
<p>We need to build a new <strong>empty folder</strong> in the driver (network disk) that has been mounted now.</p>
<p>Then fill in the name of our new empty folder to the <code v-pre>Remote path</code> <code v-pre>Crypt</code> driver configuration</p>
<p>E.g:</p>
<ul>
<li>Our original driving path was <code v-pre>/123</code>, we built a new <code v-pre>air</code> empty folder in the '123' directory</li>
<li>Fill <code v-pre>Remote Path</code> option in <code v-pre>Crypt</code> config page with <code v-pre>/123/air</code></li>
<li>To encrypt files, you need to upload them to the newly created &quot;Crypt&quot; drive. Encryption will only be applied when files are uploaded to this driver.
<ul>
<li>Encrypted files are stored in <strong><code v-pre>remote path</code></strong> , and they can't be opened normally due to the encryption</li>
<li>If you want to open them, you need to view them in the <code v-pre>Crypt</code> Driver Folder</li>
</ul>
</li>
</ul>
<h2 id="config-example" tabindex="-1"><a class="header-anchor" href="#config-example"><span><strong>Config Example</strong></span></a></h2>
<p>If you don’t know how to configure, you can use the simpler default configuration as follows. The role of each configuration will be explained in detail below</p>
<p><img src="/img/drivers/crypt/crypt-demo1.png" alt="image-20230721230425597" loading="lazy"></p>
<div class="hint-container caution">
<p class="hint-container-title">Please read carefully --- very important</p>
<p>Once the configuration is set and started using, do not modify it, do not modify it, do not modify it!</p>
<p>The original <a href="#password"><strong>Password</strong></a> and <a href="#salt"><strong>Salt</strong></a> should be kept in other places. These two options will be encrypted and can't be reveled after saving.</p>
<ul>
<li><strong>If you forget the password before uploading any file, you can modify and re-fill in the password configuration</strong></li>
</ul>
<hr>
<p>If you have not uploaded any file in the Crypt, you may modify the configuration, otherwise do not modify it!!!</p>
<p>If you have data in Crypt, and changed the configuration, <code v-pre>Crypt</code> will try to filter out illegal files/folders, but the illegal data still exist in the remote storage</p>
<ul>
<li><strong>Illegal means data that is encrypted by another config</strong></li>
</ul>
</div>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>There are 5 methods for the encryption combination, (in fact 6 types) Because only the <strong>folder encryption is turned on, the file name is not encrypted</strong> and the configuration does not take effect (the first one of the example below)</p>
<ol>
<li>
<Badge text="invalid" color="red" vertical="middle" /> Filename <code v-pre>Off</code>，Directory <code v-pre>true</code></li>
<li>
<Badge text="valid" type="tip" vertical="middle" /> Filename <code v-pre>Off</code>，Directory <code v-pre>false</code></li>
<li>
<Badge text="valid" type="tip" vertical="middle" /> Filename <code v-pre>Standard</code>，Directory <code v-pre>false</code></li>
<li>
<Badge text="valid" type="tip" vertical="middle" /> Filename <code v-pre>Standard</code>，Directory <code v-pre>true</code></li>
<li>
<Badge text="valid" type="tip" vertical="middle" /> Filename <code v-pre>Obfuscate</code>，Directory <code v-pre>false</code></li>
<li>
<Badge text="valid" type="tip" vertical="middle" /> Filename <code v-pre>Obfuscate</code>，Directory <code v-pre>true</code></li>
</ol>
</div>
<br/>
<h3 id="filename-encryption" tabindex="-1"><a class="header-anchor" href="#filename-encryption"><span><i class="fa-solid fa-files" style="color: #409eff;"></i> <strong>Filename encryption</strong></span></a></h3>
<p>If you don’t understand, you can use the default configuration</p>
<ul>
<li>
<p>1.<strong>The default is <code v-pre>off</code> state</strong></p>
<ul>
<li>Whether the file name needs to be encrypted, and the file name is encrypted after uploading</li>
</ul>
</li>
<li>
<p>2.<strong>Standard Encryption</strong></p>
<ul>
<li>Standard encryption safety level high<sup>(recommended)</sup></li>
</ul>
</li>
<li>
<p>3.<strong>Simple Obfuscate</strong></p>
<ul>
<li>The security level is very low, but friendly to long file name. Note: for the Chinese file name, special characters will be generated. Some network disk storage may not support them</li>
</ul>
</li>
<li>
<p>The left side of the figure below is encrypted <a href="#remote-path"><strong>Remote path</strong></a>，On the right is the decrypted 'crypt` driver to view the file</p>
<ul>
<li>If not enabled <Badge text="Filename" type="tip" vertical="middle" /> encryption，It will be like <Badge text="Upper left corner pic" color="rgb(216,100,69)" vertical="middle" /> A new encrypted suffix is added behind the source file（xxxxx.xxx <strong>.bin</strong> ）(The suffix name can be customized)</li>
<li>If you enabled <Badge text="Filename" type="tip" vertical="middle" /> encryption，It will be like <Badge text="Lower left corner pic" color="rgb(78,130,184)" vertical="middle" /> In this way, the file name is also confused with encryption, no suffix and the original file name，others can't know what it is, but it can be viewed in <code v-pre>crypt</code>（<Badge text="The folder displayed on the right" color="rgb(0.0.0.0)" vertical="middle" />）</li>
</ul>
</li>
</ul>
<p><img src="/img/drivers/crypt/crypt-demo2.png" alt="image-20230721230425597" loading="lazy"></p>
<br/>
<h3 id="directory-name-encryption" tabindex="-1"><a class="header-anchor" href="#directory-name-encryption"><span><i class="fa-solid fa-folder-open" style="color: #409eff;"></i> <strong>Directory name encryption</strong></span></a></h3>
<p>default is <code v-pre>false</code>, i.e disabled. don't use it if you don't understand below description</p>
<p>When you turn on the folder encryption, you must select a <strong>filename encryption</strong> type. Otherwise, the folder encryption will not take effect</p>
<ul>
<li>The left side of the figure below is encrypted <a href="#remote-path"><strong>Remote path</strong></a>，On the right is the decrypted 'crypt` driver to view the file
<ul>
<li>If disabled <Badge text="Directory" type="tip" vertical="middle" /> encryption，It will be like<Badge text="Upper left corner pic" color="rgb(216,100,69)" vertical="middle" /> No change to folder name</li>
<li>If enabled <Badge text="Directory" type="tip" vertical="middle" /> encryption，It will be displayed<Badge text="Lower left corner pic" color="rgb(78,130,184)" vertical="middle" /> folder name is encrypted</li>
</ul>
</li>
</ul>
<p><img src="/img/drivers/crypt/crypt-demo2.png" alt="image-20230721230425597" loading="lazy"></p>
<br/>
<h3 id="remote-path" tabindex="-1"><a class="header-anchor" href="#remote-path"><span><i class="fa-solid fa-cloud-binary" style="color: #409eff;"></i> <strong>Remote path</strong></span></a></h3>
<p>It is the storage and encrypted file, which can be any driver in the driver that can be mounted</p>
<br/>
<h3 id="password" tabindex="-1"><a class="header-anchor" href="#password"><span><i class="fa-solid fa-lock-keyhole" style="color: #409eff;"></i> <strong>Password</strong></span></a></h3>
<p>Just literally meaning password</p>
<h3 id="salt" tabindex="-1"><a class="header-anchor" href="#salt"><span><i class="fa-solid fa-lock-keyhole" style="color: #409eff;"></i> <strong>Salt</strong></span></a></h3>
<p>It can be treated as the second password if you don't understand it</p>
<br/>
<h3 id="encrypted-suffix" tabindex="-1"><a class="header-anchor" href="#encrypted-suffix"><span><strong>Encrypted suffix</strong></span></a></h3>
<p>Advanced options,The default is <code v-pre>.bin</code>, the custom must start with<code v-pre> .</code>, such as .abc .aaa .Psd.</p>
<p>If the file name is encrypted, the encryption suffix `will not be used</p>
<br/>
<h3 id="filename-encoding" tabindex="-1"><a class="header-anchor" href="#filename-encoding"><span><strong>Filename encoding</strong></span></a></h3>
<p>Advanced options, non -professionals, please do not modify it. The default is <strong><code v-pre>base64</code></strong>, but the options other than <strong><code v-pre>base64</code></strong> are not tested. If you encounter problems, you need to solve it yourself.</p>
<p>-Dy reference <a href="https://github.com/alist-org/alist/issues/5109" target="_blank" rel="noopener noreferrer">#5109</a>，<a href="https://github.com/alist-org/alist/issues/5080" target="_blank" rel="noopener noreferrer">#5080</a></p>
<br/>
<h2 id="advanced-usage" tabindex="-1"><a class="header-anchor" href="#advanced-usage"><span><strong>Advanced usage</strong></span></a></h2>
<p>Advanced usage is only applicable to those who know about <strong><code v-pre>rclone</code></strong></p>
<p>If you know the <strong><code v-pre>rclone</code></strong> very well, you can check 👉 <a href="https://rclone.org/crypt" target="_blank" rel="noopener noreferrer"><strong>rclone crypt document</strong></a> Currently fully compatible</p>
<p>Note: <code v-pre>Alist Crypt</code> used <code v-pre>filename_encoding = base64</code> in default. If you want to use Rclone, please config it in the advanced config. (Reason: more friendly to long filename)</p>
<p>Since Alist does not consider any case-insensitive internally, you may encounter problems when remote storage is case-insensitive. e.g.: use alist local driver on Windows, then use Crypt on it.</p>
<br/>
<h2 id="precautions" tabindex="-1"><a class="header-anchor" href="#precautions"><span><strong>Precautions</strong></span></a></h2>
<p>When starting alist, I found that the Crypt  prompts errors because Crypt can not find the relevant path when starting, You can fill in the Crypt <RouteLink to="/guide/drivers/common.html#order">order</RouteLink> to make Crypt start slowly</p>
<br/>
<h2 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h2>
<Mermaid id="mermaid-308" code="eJyNkL1uwjAURnee4gpWHBQooFpKK1WMnapWHaIMjn1dWzhxajskefuaNCA6VMKL/75z7HsJIbOgg0EKn0pzBcJ2tbFMQIVBWQHaQ+tRQDmAQMlaE55nZ0ga23HFXID3lxnE4cNgEHgKUhtDF2Uplz44e0S6kLvdtCadFkHRddMvuTXWxTspb3C2nnAp99v99mrYbDZ/DQ9N/4u15ZdjjQItMIUcivGUp+OEtZi2ubGcGWic7YeCUupthdww77NsqirLsie2zmOtDvC71U2FdZhs5+ABJVypyycfd2OgTPPDpW3jE/Dx9lqQhJmArmZBnzAh/9s1P0YFzJNkJVzMOr/itqpsnahQmUWHpWAn0tgYHOY3TOz1ncwPx9ee1g=="></Mermaid></div></template>


