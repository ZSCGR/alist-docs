<template><div><h3 id="why-i-got-the-error-failed-get-storage-can-t-find-storage-with-rawpath-when-i-open-web-pages-after-install-upgrade" tabindex="-1"><a class="header-anchor" href="#why-i-got-the-error-failed-get-storage-can-t-find-storage-with-rawpath-when-i-open-web-pages-after-install-upgrade"><span><strong>Why I got the error <code v-pre>failed get storage: can't find storage with rawPath: /</code> when I open web pages after install/upgrade?</strong></span></a></h3>
<p>Because you haven't added storage. Click the <code v-pre>Login</code> button at the bottom to log in and then click <code v-pre>Manage</code> button to enter the background and add storage on the storage page.</p>
<h3 id="why-i-lost-all-my-storage-in-v3" tabindex="-1"><a class="header-anchor" href="#why-i-lost-all-my-storage-in-v3"><span><strong>why i lost all my storage in v3</strong></span></a></h3>
<p>New versions (V3 and later) are not compatible with V2, so you need to re-add your storage.</p>
<h3 id="why-i-see-failed-get-aria2-version-error-in-log" tabindex="-1"><a class="header-anchor" href="#why-i-see-failed-get-aria2-version-error-in-log"><span><strong>Why I see <code v-pre>failed get aria2 version</code> error in log?</strong></span></a></h3>
<p>Because you haven't installed aria2 or the settings of aria2 are wrong. Don't worry, it won't affect the use of Alist, you can ignore it.</p>
<h3 id="why-i-got-the-error-failed-create-storage-in-database-unique-constraint-failed-x-storages-mount-path-when-i-add-new-storage" tabindex="-1"><a class="header-anchor" href="#why-i-got-the-error-failed-create-storage-in-database-unique-constraint-failed-x-storages-mount-path-when-i-add-new-storage"><span><strong>why i got the error <code v-pre>Failed create storage in database: UNIQUE constraint failed: x_storages.mount_path</code> when I add new storage?</strong></span></a></h3>
<p>I guess the error message is pretty clear. Because <RouteLink to="/guide/drivers/common.html#mount-path">mount_path</RouteLink> is <strong>UNIQUE</strong>.<br>
If you see this error when adding storage, but you don't see the corresponding duplicate entry on the web page, use <code v-pre>Ctrl</code> + <code v-pre>F5</code> to force refresh page.</p>
<h3 id="why-can-t-i-preview-the-video-or-audio-file" tabindex="-1"><a class="header-anchor" href="#why-can-t-i-preview-the-video-or-audio-file"><span><strong>Why can't I preview the video or audio file?</strong></span></a></h3>
<ul>
<li>Requires a browser-supported encoding</li>
<li>General browsers do not support h265 encoded video</li>
<li>General browsers do not support ac3 encoded audio</li>
</ul>
<p>In particular, for Safari:</p>
<ul>
<li>For cross-origin media, content-type must be the media type, not the generic application/octet-stream. So if the content-type returned by the direct link is application/octet-stream, then Safari will not be able to play.(PS: Why Can AliyunDrive play in Safari? Because the official website of the video playback is not the use of download links, but after the transcoding of AliyunDrive)</li>
<li>Aliyun disk development platform driver supports online video playback (also limited to Aliyun disk open platform driver and <strong>Aliyun Video Previewer</strong> option player)</li>
</ul>
<h3 id="why-can-t-i-preview-the-office-file" tabindex="-1"><a class="header-anchor" href="#why-can-t-i-preview-the-office-file"><span><strong>Why can't I preview the office file?</strong></span></a></h3>
<p>For microsoft office online viewers, you need:</p>
<ul>
<li>External network access</li>
<li>The document access address cannot use ip directly, it needs to be accessed through a domain name, and the port must be port 80 / 443</li>
<li>The format of the document (must be one of the following):</li>
<li>Word: docx, docm, dotm, dotx</li>
<li>Excel: xlsx, xlsb, xls, xlsm</li>
<li>PowerPoint: pptx, ppsx, ppt, pps, pptm, potm, ppam, potx, ppsm</li>
<li>Document size: Word and PowerPoint documents must be less than 10 megabytes; Excel must be less than five megabytes</li>
</ul>
<h3 id="why-can-t-i-preview-the-pdf-file" tabindex="-1"><a class="header-anchor" href="#why-can-t-i-preview-the-pdf-file"><span><strong>Why can't I preview the PDF file?</strong></span></a></h3>
<ul>
<li>We use <code v-pre>pdf.js</code> as the default PDF previewer. So it requires https+cors.</li>
<li>https is opened for yourself, reverse proxy or provide a certificate in the configuration file</li>
<li>cors provides support for related cloud disks and cannot be modified by yourself unless the agent is turned on to use the program to transfer</li>
</ul>
<h3 id="why-can-t-package​-download" tabindex="-1"><a class="header-anchor" href="#why-can-t-package​-download"><span><strong>Why can't package​ download?</strong></span></a></h3>
<p>Same as pdf preview, requires https+cors support,and:</p>
<ul>
<li>AList use stream API of browser to support package download, so it requires browser support. Usually, it is supported by new browsers, such as Chrome, Firefox, Edge, etc.</li>
</ul>
<h3 id="why-does-it-shows-uploading-in-the-backend-when-i-upload-a-file" tabindex="-1"><a class="header-anchor" href="#why-does-it-shows-uploading-in-the-backend-when-i-upload-a-file"><span><strong>Why does it shows <code v-pre>Uploading in the backend</code> when I upload a file?</strong></span></a></h3>
<ul>
<li>All uploads of this program use server transfer, which will consume server traffic to communicate with the corresponding storage API</li>
</ul>
<h3 id="why-do-i-get-413-http-code-when-i-upload-a-file" tabindex="-1"><a class="header-anchor" href="#why-do-i-get-413-http-code-when-i-upload-a-file"><span><strong>Why do i get <code v-pre>413</code> http code when i upload a file?</strong></span></a></h3>
<ul>
<li>If you use a reverse proxy, you may need to specify the maximum upload file size(<code v-pre>client_max_body_size</code>) and timeout in the web server configuration</li>
<li>Otherwise, it may happen that the upload is successful but the front end times out and there is no response</li>
</ul>
<h3 id="why-can-t-i-download-files-after-add-aliyundirve-storage-and-get-invalidargument-error" tabindex="-1"><a class="header-anchor" href="#why-can-t-i-download-files-after-add-aliyundirve-storage-and-get-invalidargument-error"><span><strong>Why can't I download files after add <code v-pre>AliyunDirve</code> storage and get <code v-pre>InvalidArgument</code> error?</strong></span></a></h3>
<ul>
<li>Due to referrer restrictions, mobile tokens must be used if you don't open any proxy.</li>
</ul>
<h3 id="why-is-the-uploaded-file-not-displayed-deleted-file-still-modified-in-the-root-directory-does-not-take-effect-​" tabindex="-1"><a class="header-anchor" href="#why-is-the-uploaded-file-not-displayed-deleted-file-still-modified-in-the-root-directory-does-not-take-effect-​"><span><strong>Why is the uploaded file not displayed/deleted file still/modified in the root directory does not take effect? ​</strong></span></a></h3>
<p>There is a half-hour cache by default, which can be modified on the Add Storage page. If you need to refresh immediately, click the refresh button in the lower right corner of the directory that needs to be refreshed.</p>
<h3 id="why-is-it-still-incorrect-although-i-input-the-password-that-get-by-alist-admin-in-terminal" tabindex="-1"><a class="header-anchor" href="#why-is-it-still-incorrect-although-i-input-the-password-that-get-by-alist-admin-in-terminal"><span><strong>Why is it still incorrect although I input the password that get by <code v-pre>./alist admin</code> in terminal?</strong></span></a></h3>
<p>Check whether the directory you run <code v-pre>./alist admin</code> and start alist is the same. alist reads the configuration in the current directory where you run the program by default, so running in different directorys will result in different data being read.</p>
<hr>
<ul>
<li><strong>Here take Windows as an example</strong>: For example, your Alist file is in the <strong><code v-pre>D:\Test\Alist\</code></strong> folder, and then you directly start the CMD command running window on the desktop, and then put the D drive Drag the Alist inside to the command running window to start, and then the configuration file it generates is actually in <strong><code v-pre>C:\Windows\System32</code></strong> here (because CMD is here by default), and then you Obtaining the password is also obtaining the password in this folder. At the same time, because Alist reads the password in the configuration file in the same directory as Alist, it is naturally wrong for you to log in with the password.
<ul>
<li><img src="/img/faq/alist-admin.png" alt="faq" loading="lazy"></li>
</ul>
</li>
<li>Solution: You need to go to the folder where Alist is located to start or check the password, for example, the above is in <strong><code v-pre>D:\Test\Alist\</code></strong>, you have to manually go to this folder and then enter Enter the startup command or the command to view the password to obtain the correct password
<ul>
<li><strong>Windows</strong>: After going to the directory where Alist is located, enter CMD in the top address bar and press Enter, and then use the command to obtain the password
<ul>
<li><img src="/img/faq/alist-admin.gif" alt="faq" loading="lazy"></li>
</ul>
</li>
<li><strong>Linux</strong>: Use the CD command to go to the directory where Alist is located to get the correct password</li>
</ul>
</li>
</ul>
<h3 id="why-does-it-prompt-system-error-syntaxerror-invalid-regular-expression-nothing-to-repeat" tabindex="-1"><a class="header-anchor" href="#why-does-it-prompt-system-error-syntaxerror-invalid-regular-expression-nothing-to-repeat"><span><strong>Why does it prompt System error: SyntaxError: Invalid regular expression: /?/: Nothing to repeat</strong></span></a></h3>
<p>Your Tampermonkey answering plug-in conflicts, just close it <a href="https://github.com/alist-org/alist/discussions/2399" target="_blank" rel="noopener noreferrer"><strong>For details, click to view</strong></a></p>
<h3 id="what-is-the-difference-between-the-two-uploads" tabindex="-1"><a class="header-anchor" href="#what-is-the-difference-between-the-two-uploads"><span><strong>What is the difference between the two uploads?</strong></span></a></h3>
<p><strong>1️⃣ stream</strong> directly puts the binary content of the file into the body, so that the backend can use very little memory, it seem to have no downsides.</p>
<p><strong>2️⃣ form</strong> is to wrap the file into formdata and upload it. The memory used by the backend will be more, but there is no limit on the size.</p>
<h3 id="what-is-the-difference-between-the-two-aria2" tabindex="-1"><a class="header-anchor" href="#what-is-the-difference-between-the-two-aria2"><span><strong>What is the difference between the two Aria2?</strong></span></a></h3>
<p>1️⃣ Background management --&gt; Settings --&gt; Others: <strong>Aria2 here is used to download resources offline to the network disk</strong></p>
<p>2️⃣ Front-end interface --&gt; Local settings (the gear in the lower right corner) --&gt; <strong>Aria2 here is used to download the resources in the network disk to the local, which is equivalent to a download method, everyone can use it without worrying about problems</strong></p>
<ul>
<li>As for how to use the first offline download:
<ul>
<li>For example, if you want to download some resources offline in the <strong><code v-pre>/OneDrive/TV/Test</code></strong> folder, you must first fill in the <strong>address and secret key information</strong> in the background and then manually enter the front end In this folder of the interface, you can see the <strong>offline download</strong> icon (a magnet style) in the lower right corner after entering it, click and enter the link you want to download offline</li>
<li><code v-pre>Description</code>: <strong>Offline download, copy and upload</strong> are all in the same way. They are first downloaded from the resource <strong>to the temporary folder of the server</strong> and then uploaded from the <strong>server to the corresponding network disk</strong>
<ul>
<li>&quot;Copy&quot; can be directly transferred by the server without temporary storage for uploads that <strong>partially do not require</strong> to calculate the Hash value.</li>
</ul>
</li>
</ul>
</li>
</ul>
<FlowChart id="flowchart-271" code="eJxVjDsOwjAQRPs9xZZQUOTXWLIrjgAHsOSFWAlea70Q5fYkKSylGT2N3kxjXVEvalDIhxVa6ziTeI2cDN55STP7gMroUemTWbys+OI5kEB3kh8jYSH5keA376sC/Ul4Hu3+pZuaSBeWCUMsEwzWUQoGtwBoLhLfo15vrq3UVeorDfAHwGNAAw==" preset="vue"></FlowChart><h3 id="raidrive-mounts-baidu-network-disk-you-can-download-files-but-you-cannot-upload-files-throwing-files-to-the-mount-directory-prompts-prompt-you-need-permission-to-perform-this-operation-how-to-solve-this" tabindex="-1"><a class="header-anchor" href="#raidrive-mounts-baidu-network-disk-you-can-download-files-but-you-cannot-upload-files-throwing-files-to-the-mount-directory-prompts-prompt-you-need-permission-to-perform-this-operation-how-to-solve-this"><span><strong>RaiDrive mounts Baidu network disk, you can download files, but you cannot upload files. Throwing files to the mount directory prompts &quot;Prompt &quot;You need permission to perform this operation&quot;. How to solve this?</strong></span></a></h3>
<p>Raidrive is because uploading a file will create an empty file in advance, and Baidu Netdisk does not allow the creation of an empty file.<br>
v2 can succeed because v2 ignores empty file uploads.</p>
<h3 id="why-is-the-terabox-mounted-successfully-but-the-content-is-not-displayed" tabindex="-1"><a class="header-anchor" href="#why-is-the-terabox-mounted-successfully-but-the-content-is-not-displayed"><span><strong>Why is the Terabox mounted successfully but the content is not displayed?</strong></span></a></h3>
<p>Because <strong><code v-pre>Terabox</code></strong> restricts IP, if you access it from a non-overseas IP, you cannot access it, and naturally the content will not be displayed.</p>
<p>(Overseas machines can be used. If you have to use local machines (or domestic machines) to build, you can find a way to let Alist eat <strong>proxy</strong>)</p>
<p>Cases where it might be useful: <strong><a href="https://github.com/alist-org/alist/discussions/3026" target="_blank" rel="noopener noreferrer">https://github.com/alist-org/alist/discussions/3026</a></strong></p>
<h3 id="open-alist-prompt-system-error-typeerror-n-replaceall-is-not-a-function" tabindex="-1"><a class="header-anchor" href="#open-alist-prompt-system-error-typeerror-n-replaceall-is-not-a-function"><span><strong>Open Alist prompt System error: TypeError: n.replaceAll is not a function?</strong></span></a></h3>
<p>Your browser kernel version is too low, just add the following to the custom head.</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-html"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!--Alist V3 suggested to add, it has been added by default, if you don't suggest adding --></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"https://polyfill.io/v3/polyfill.min.js?features=String.prototype.replaceAll"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>If you think it is too slow, you can change to Ali Cloud</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-html"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"https://polyfill.alicdn.com/v3/polyfill.min.js?features=String.prototype.replaceAll"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="too-many-unsuccessful-sign-in-attempts-have-been-made-using-an-incorrect-username-or-password-try-again-later" tabindex="-1"><a class="header-anchor" href="#too-many-unsuccessful-sign-in-attempts-have-been-made-using-an-incorrect-username-or-password-try-again-later"><span><strong>Too many unsuccessful sign-in attempts have been made using an incorrect username or password, Try again later.</strong></span></a></h3>
<p><img src="/img/faq/error.png" alt="faq" loading="lazy"></p>
<p>If you enter the wrong password for 6 consecutive logins, it will be locked, and you can reset it by restarting Alist.</p>
<h3 id="when-adding-a-file-to-upload-there-is-an-option-of-add-as-task-what-does-it-do" tabindex="-1"><a class="header-anchor" href="#when-adding-a-file-to-upload-there-is-an-option-of-add-as-task-what-does-it-do"><span><strong>When adding a file to upload, there is an option of &quot;add as task&quot;, what does it do?</strong></span></a></h3>
<ul>
<li>After checking, upload to the server (the machine where Alist is built), and then when uploaded by the server to the network disk, it seems to be visible in the background (it seems to be like this)</li>
<li>You will not see it if it is not checked. For details, you can see the problem in the picture below.</li>
</ul>
<p><img src="/img/faq/add.jpeg" alt="faq" loading="lazy"></p>
<h3 id="i-am-asked-to-enter-the-otp-code-when-i-log-in-what-is-the-reason" tabindex="-1"><a class="header-anchor" href="#i-am-asked-to-enter-the-otp-code-when-i-log-in-what-is-the-reason"><span><strong>I am asked to enter the OTP code when I log in. What is the reason?</strong></span></a></h3>
<p>Are you logging into someone else's account? If it is your own, please enter the 2FA (two-step verification) verification code</p>
<p>What? Don't know the verification code? <RouteLink to="/guide/advanced/2fa.html"><strong>Click to view this guide</strong></RouteLink></p>
<h3 id="use-sqlite3-to-find-that-there-are-more-than-two-files-in-the-data-folder-data-db-shm-and-data-db-wal" tabindex="-1"><a class="header-anchor" href="#use-sqlite3-to-find-that-there-are-more-than-two-files-in-the-data-folder-data-db-shm-and-data-db-wal"><span><strong>Use <strong><code v-pre>sqlite3</code></strong> to find that there are more than two files in the data folder, data.db-shm and data.db-wal</strong></span></a></h3>
<p><a href="https://stackoverflow.com/questions/7778723/what-are-the-db-shm-and-db-wal-extensions-in-sqlite-databases" target="_blank" rel="noopener noreferrer"><strong>Click to view detailed instructions</strong></a></p>
<h3 id="how-do-i-set-it-so-that-visitors-can-only-see-the-content-after-logging-in" tabindex="-1"><a class="header-anchor" href="#how-do-i-set-it-so-that-visitors-can-only-see-the-content-after-logging-in"><span><strong>How do I set it so that visitors can only see the content after logging in?</strong></span></a></h3>
<p>There is always one of the following three versions that suits you. Eat it quickly! !</p>
<ol>
<li>
<p>Point the directory seen by <strong><code v-pre>guest</code></strong> users to an empty folder, and then write a readme description, don’t ask how to do it yourself<a href="#how-to-create-a-completely-blank-folder">Click to view</a></p>
</li>
<li>
<p>Directly encrypt the root directory in the meta information</p>
</li>
<li>
<p>Directly deactivate the <strong><code v-pre>guest</code></strong> user, which will force a jump to the login page (version 3.10.1 and above)</p>
<ul>
<li>Find a way by yourself Welcome to provide new ways~~</li>
</ul>
</li>
</ol>
<h3 id="baidu-cloud-disk-unofficial-download-error-appears-hit-black-userlist-hit-illegal-dlna" tabindex="-1"><a class="header-anchor" href="#baidu-cloud-disk-unofficial-download-error-appears-hit-black-userlist-hit-illegal-dlna"><span><strong>Baidu cloud disk unofficial download error appears &quot;hit black userlist, hit illegal dlna&quot;</strong></span></a></h3>
<p>It should be repaired harmoniously, but the interface discoverer said to wait for 24 hours to try, if it still doesn't work, it is really repaired harmoniously.</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"error_code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">31329</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"error_msg"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"hit black userlist , hit illegal dlna"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"request_id"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">8942439159334999112</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="how-to-create-a-completely-blank-folder" tabindex="-1"><a class="header-anchor" href="#how-to-create-a-completely-blank-folder"><span><strong>How to create a completely blank folder</strong></span></a></h3>
<p>two ways</p>
<ol>
<li>Mount a local storage, select the folder is empty</li>
<li>Select virtual storage and directly change <mark>&quot;number of files&quot; &quot;number of folders&quot;</mark> to 0, save and then ignore the pop-up interface
<ul>
<li>What does <strong>Virtual Storage</strong> do? It is generally used during testing. Don’t use it indiscriminately if you don’t understand the normal production environment....</li>
</ul>
</li>
</ol>
<p>How to add <strong><code v-pre>Readme</code></strong> instructions to an empty folder</p>
<ol>
<li>If you choose local storage, you can consider throwing a <a href="http://Readme.md" target="_blank" rel="noopener noreferrer">Readme.md</a> file into it. If there is an update but the refresh is slow, use the second method if it is too slow</li>
<li>Meta information Select this folder, there are instructions below to write it yourself</li>
</ol>
<p>What is the use of creating this blank folder? It can be used in conjunction with <a href="#how-do-i-set-it-so-that-visitors-can-only-see-the-content-after-logging-in"><strong>How to set up visitors to access the content after logging in, use the first method</strong></a></p>
<h3 id="lib64-libc-so-6-version-glibc-2-28-not-found-required-by-alist-or-accept-function-not-implemented" tabindex="-1"><a class="header-anchor" href="#lib64-libc-so-6-version-glibc-2-28-not-found-required-by-alist-or-accept-function-not-implemented"><span><strong>lib64/libc.so.6: version `GLIBC_2.28' not found (required by ./alist) or accept: function not implemented</strong></span></a></h3>
<p>Consider using the <strong>musl</strong> version as an alternative due to the version of the <strong>glibc</strong> on your platform is too low</p>
<p>Reference instructions：<a href="https://github.com/alist-org/alist/discussions/2295" target="_blank" rel="noopener noreferrer">#2295</a>，<a href="https://github.com/alist-org/alist/issues/322#issuecomment-1010601181" target="_blank" rel="noopener noreferrer">#322</a></p>
<h3 id="what-is-the-extra-sign-parameter-after-the-file-now" tabindex="-1"><a class="header-anchor" href="#what-is-the-extra-sign-parameter-after-the-file-now"><span><strong>What is the extra sign parameter after the file now?</strong></span></a></h3>
<p>Encrypted for account security, you can view the details by [click to view](../config/global.md#Sign all)</p>
<h3 id="prompt-when-adding-aliyun-drive-shared-prompt-post-https-auth-aliyundrive-com-v2-account-token-net-http-tls-handshake-timeout" tabindex="-1"><a class="header-anchor" href="#prompt-when-adding-aliyun-drive-shared-prompt-post-https-auth-aliyundrive-com-v2-account-token-net-http-tls-handshake-timeout"><span><strong>Prompt when adding Aliyun drive (shared) Prompt Post &quot;<a href="https://auth.aliyundrive.com/v2/account/token" target="_blank" rel="noopener noreferrer">https://auth.aliyundrive.com/v2/account/token</a>&quot;: net/http: TLS handshake timeout</strong></span></a></h3>
<p>Reason: The VPS is located outside mainland China, and IPv6 is enabled<br>
Workaround:<br>
<strong>Method 1</strong>: Add the following three items in the vps hosts and restart the network or restart the vps</p>
<ul>
<li>
<p>47.94.245.197 <a href="http://api.aliyundrive.com" target="_blank" rel="noopener noreferrer">api.aliyundrive.com</a></p>
</li>
<li>
<p>47.94.245.197 <a href="http://auth.aliyundrive.com" target="_blank" rel="noopener noreferrer">auth.aliyundrive.com</a></p>
</li>
<li>
<p>121.89.3.30 <a href="http://cn-beijing-data.aliyundrive.net" target="_blank" rel="noopener noreferrer">cn-beijing-data.aliyundrive.net</a></p>
</li>
</ul>
<p><strong>Method 2</strong>: Turn off and disable IPv6 of vps</p>
<h3 id="_123-when-the-cloud-disk-is-mounted-json-cannot-unmarshal-string-into-go-struct-field-tokenresp-data-of-type-struct-token-string-json-token" tabindex="-1"><a class="header-anchor" href="#_123-when-the-cloud-disk-is-mounted-json-cannot-unmarshal-string-into-go-struct-field-tokenresp-data-of-type-struct-token-string-json-token"><span><strong>123 When the cloud disk is mounted, json: cannot unmarshal string into Go struct field TokenResp.data of type struct { Token string &quot;json:&quot;token&quot;&quot; }</strong></span></a></h3>
<p><img src="/img/faq/123error.png" alt="faq" loading="lazy"></p>
<p>There is a high probability that your device that builds Alist is temporarily blocked, frozen, blocked, or restricted. Don't mount it yet, wait a few hours and try again or wait a day</p>
<p>(Conclusions from the above questions have been tested)</p>
<h3 id="why-doesn-t-pikpak-have-a-name" tabindex="-1"><a class="header-anchor" href="#why-doesn-t-pikpak-have-a-name"><span><strong>Why doesn't PikPak have a name</strong></span></a></h3>
<p>Because PikPak's server does not set the filename in the <code v-pre>content-disposition</code> header, this is a PikPak problem and not an AList, so it cannot be fixed</p>
<h3 id="how-to-query-your-own-alist-version-number" tabindex="-1"><a class="header-anchor" href="#how-to-query-your-own-alist-version-number"><span><strong>How to query your own AList version number</strong></span></a></h3>
<ol>
<li>Use the command <code v-pre>alist version</code>, the console will output</li>
<li>AList Manage --&gt; Settings --&gt; Site --&gt; <code v-pre>Version</code> option</li>
</ol>
<p>Why is the old version of AList still after the update? Generally, docker encounters this problem. You can <RouteLink to="/guide/install/docker.html#how-to-update-docker-installation"><strong>refer to the QA answer mentioned below</strong></RouteLink></p>
<h3 id="alist-s-download-download-option-suddenly-blank-no-content" tabindex="-1"><a class="header-anchor" href="#alist-s-download-download-option-suddenly-blank-no-content"><span><strong>AList's download &quot;Download&quot; option suddenly blank, no content</strong></span></a></h3>
<p>Check your plug-ins, whether there are ad blocking plug-ins, for example: <strong>AdGuard</strong> and others</p>
<p>Through the console, it is found that &quot;<strong><a href="https://g.alicdn.com/IMM/office-js/1.1.5/aliyun-web-office-sdk.min.js" target="_blank" rel="noopener noreferrer">https://g.alicdn.com/IMM/office-js/1.1.5/aliyun-web-office-sdk.min.js</a></strong>&quot; has been blocked,</p>
<p>Maybe other links are blocked, manually add the blocked domain name to the whitelist or close the plug-in, or it may be that the plug-in is convulsed</p>
<p><img src="/img/faq/download.png" alt="faq" loading="lazy"></p>
<h3 id="why-is-the-text-file-garbled" tabindex="-1"><a class="header-anchor" href="#why-is-the-text-file-garbled"><span><strong>Why is the text file garbled?</strong></span></a></h3>
<p>Only utf-8 encoding is supported. See also: <a href="https://github.com/alist-org/alist/issues/4131" target="_blank" rel="noopener noreferrer">#4131</a></p>
</div></template>


