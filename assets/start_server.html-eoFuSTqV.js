import{_ as e,a,b as l}from"./start_server_3-RVnx99XR.js";import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as r,e as n}from"./app-BrxqtzGY.js";const d={},t=n(`<h2 id="程序所在路径" tabindex="-1"><a class="header-anchor" href="#程序所在路径" aria-hidden="true">#</a> 程序所在路径</h2><p>在编译 zlmediakit 后，会生成 MediaServer 主程序，该程序相对路径为<code>release/\${platform}/\${build_type}/MediaServer</code>。</p><p><code>\${platform}</code>根据您的操作系统，可能为<code>windows/linux/mac</code>,<code>\${build_type}</code>根据您 cmake 时指定的编译类型，可能为<code>Debug/Release</code>.</p><h2 id="启动与参数" tabindex="-1"><a class="header-anchor" href="#启动与参数" aria-hidden="true">#</a> 启动与参数</h2><ul><li>先参考启动参数帮助：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>xzl-mac-pro:Debug xzl$ ./MediaServer <span class="token parameter variable">-h</span>
  <span class="token parameter variable">-h</span>  <span class="token parameter variable">--help</span>     无参  默认:null                                                    选填  打印此信息
  <span class="token parameter variable">-d</span>  <span class="token parameter variable">--daemon</span>   无参  默认:null                                                    选填  是否以Daemon方式启动
  <span class="token parameter variable">-l</span>  <span class="token parameter variable">--level</span>    有参  默认:0                                                       选填  日志等级,LTrace~LError<span class="token punctuation">(</span><span class="token number">0</span>~4<span class="token punctuation">)</span>
  <span class="token parameter variable">-m</span>  <span class="token parameter variable">--max_day</span>  有参  默认:7                                                       选填  日志最多保存天数
  <span class="token parameter variable">-c</span>  <span class="token parameter variable">--config</span>   有参  默认:/Users/xzl/git/ZLMediaKit/release/mac/Debug/config.ini  选填  配置文件路径
  <span class="token parameter variable">-s</span>  <span class="token parameter variable">--ssl</span>      有参  默认:/Users/xzl/git/ZLMediaKit/release/mac/Debug/ssl.p12     选填  ssl证书文件或文件夹,支持p12/pem类型
  <span class="token parameter variable">-t</span>  <span class="token parameter variable">--threads</span>  有参  默认:8                                                       选填  启动事件触发线程数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>说明：</p><ul><li>-d(--daemon): 是否以守护进程的方式启动，守护进程只做一件事，就是判断子进程(这个才是干活的进程)是否已经退出，退出后会不断尝试重启子进程。</li><li>-l(--level): 指定日志打印等级，赋值范围为 0~4，等级越高，日志越少。</li><li>-m(--max_day): 日志文件保存天数，程序本次运行期间的日志如果超过这个天数，就会被删除。</li><li>-c(--config): 指定配置文件路径，配置文件为 ini 格式，请参考 ZLMediaKit 的默认配置文件。</li><li>-s(--ssl): 指定 ssl 证书路径，证书格式支持 p12 和 pem 类型，里面必须包含公钥和私钥，私钥不能有加密密码。如果指定文件夹，会加载文件夹下所有证书。</li><li>-t(--threads): 指定事件驱动线程(干重活)和后台工作线程(干阻塞的活)个数。</li></ul></li><li><p>启动命令:</p></li></ul><figure><img src="`+e+'" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><ul><li>注意事项： <ul><li>1、如果你启动 MediaServer 后需要关闭 shell，那么好需要输入 <code>exit</code>退出 shell,否则关闭 shell 会导致 MediaServer 一起被关闭。</li><li>2、如果你会使用到 FFmpeg 相关功能，你应该这样启动程序<code>nohup ./MediaServer -d &amp;</code>，否则在 fork FFmpeg 进程时会导致 MediaServer 进程挂起。</li></ul></li></ul><h2 id="配置文件的热加载" tabindex="-1"><a class="header-anchor" href="#配置文件的热加载" aria-hidden="true">#</a> 配置文件的热加载</h2><p>修改并保存配置文件后，在 shell 里面输入<code>killall -1 MediaServer</code>就能使 ZLMediaKit 热加载配置文件，如果生效，会打印下面样式的日志： <img src="'+a+'" alt="图片" loading="lazy"></p><h2 id="关闭服务器" tabindex="-1"><a class="header-anchor" href="#关闭服务器" aria-hidden="true">#</a> 关闭服务器</h2><ul><li>如果你是后台启动方式，请在 shell 中输入<code>killall -2 MediaServer</code>以便优雅关闭服务器(程序收到 SIGINT 信号后会自动释放资源并退出)。</li><li>否则你可以同时按下<code>Ctr + C</code>退出程序。</li><li>MediaServer 退出时日志如下：</li></ul><figure><img src="'+l+'" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure>',14),c=[t];function p(o,m){return s(),r("div",null,c)}const b=i(d,[["render",p],["__file","start_server.html.vue"]]);export{b as default};
