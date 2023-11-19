import{_ as e,a,b as t}from"./start_server_3-ede21409.js";import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as r,c as s,e as n}from"./app-db7b86cf.js";const l={},o=n(`<h2 id="program-path" tabindex="-1"><a class="header-anchor" href="#program-path" aria-hidden="true">#</a> Program Path</h2><p>After compiling ZLMediaKit, the MediaServer main program is generated. The relative path of the program is <code>release/\${platform}/\${build_type}/MediaServer</code>.</p><p><code>\${platform}</code> depends on your operating system, which may be <code>windows/linux/mac</code>, and <code>\${build_type}</code> depends on the compile type you specified when using cmake, which could be <code>Debug/Release</code>.</p><h2 id="start-up-and-parameters" tabindex="-1"><a class="header-anchor" href="#start-up-and-parameters" aria-hidden="true">#</a> Start-up and Parameters</h2><ul><li>First, please refer to the help for startup parameters:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>xzl-mac-pro:Debug xzl$ ./MediaServer <span class="token parameter variable">-h</span>
  <span class="token parameter variable">-h</span>  <span class="token parameter variable">--help</span>     no argument  default:null                                          optional  print this information
  <span class="token parameter variable">-d</span>  <span class="token parameter variable">--daemon</span>   no argument  default:null                                          optional  start <span class="token keyword">in</span> Daemon mode or not
  <span class="token parameter variable">-l</span>  <span class="token parameter variable">--level</span>    argument     default:0                                             optional  log level, LTrace~LError<span class="token punctuation">(</span><span class="token number">0</span>~4<span class="token punctuation">)</span>
  <span class="token parameter variable">-m</span>  <span class="token parameter variable">--max_day</span>  argument     default:7                                             optional  maximum days to keep the logs
  <span class="token parameter variable">-c</span>  <span class="token parameter variable">--config</span>   argument     default:/Users/xzl/git/ZLMediaKit/release/mac/Debug/config.ini  optional  configuration <span class="token function">file</span> path
  <span class="token parameter variable">-s</span>  <span class="token parameter variable">--ssl</span>      argument     default:/Users/xzl/git/ZLMediaKit/release/mac/Debug/ssl.p12     optional  path of the SSL certificate <span class="token function">file</span> or directory, supports p12/pem types
  <span class="token parameter variable">-t</span>  <span class="token parameter variable">--threads</span>  argument     default:8                                             optional  number of threads to launch <span class="token keyword">for</span> event triggering
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Explanation:</p><ul><li>-d(--daemon): Whether to start as a daemon. The daemon does only one thing: monitor whether the child process (the actual working process) has exited, and attempts to restart the child process if it has exited.</li><li>-l(--level): Specifies the log print level, with values ranging from 0 to 4. The higher the level, the fewer logs are printed.</li><li>-m(--max_day): The number of days the log files are kept. Logs created during the current run of the program will be deleted if they exceed this number of days.</li><li>-c(--config): Specifies the configuration file path. The configuration file is in ini format, please refer to the default configuration file of ZLMediaKit.</li><li>-s(--ssl): Specifies the SSL certificate path. The certificate format supports p12 and pem types, which must include both public and private keys, and the private key must not be password encrypted. If a directory is specified, all certificates under the directory will be loaded.</li><li>-t(--threads): Specifies the number of event-driven threads (performing major tasks) and background working threads (performing blocking tasks).</li></ul></li><li><p>Startup command:</p></li></ul><figure><img src="`+e+'" alt="Image" tabindex="0" loading="lazy"><figcaption>Image</figcaption></figure><ul><li>Notes: <ul><li><ol><li>If you need to close the shell after starting MediaServer, you need to enter <code>exit</code> to exit the shell, otherwise closing the shell will also close the MediaServer.</li></ol></li><li><ol start="2"><li>If you are going to use FFmpeg related functions, you should start the program like this: <code>nohup ./MediaServer -d &amp;</code>. Otherwise, the fork FFmpeg process may cause the MediaServer process to hang.</li></ol></li></ul></li></ul><h2 id="hot-loading-of-configuration-files" tabindex="-1"><a class="header-anchor" href="#hot-loading-of-configuration-files" aria-hidden="true">#</a> Hot Loading of Configuration Files</h2><p>After modifying and saving the configuration file, enter <code>killall -1 MediaServer</code> in the shell to make ZLMediaKit hot load the configuration file. If successful, it will print the following style of logs:<br><img src="'+a+'" alt="Image" loading="lazy"></p><h2 id="stopping-the-server" tabindex="-1"><a class="header-anchor" href="#stopping-the-server" aria-hidden="true">#</a> Stopping the Server</h2><ul><li>If you started the server in the background, please enter <code>killall -2 MediaServer</code> in the shell to gracefully shut down the server (the program will automatically release resources and exit after receiving the SIGINT signal).</li><li>Otherwise, you can press <code>Ctr + C</code> to exit the program.</li><li>The logs when MediaServer exits are as follows:</li></ul><figure><img src="'+t+'" alt="Image" tabindex="0" loading="lazy"><figcaption>Image</figcaption></figure>',14),p=[o];function d(c,h){return r(),s("div",null,p)}const g=i(l,[["render",d],["__file","start_server.html.vue"]]);export{g as default};