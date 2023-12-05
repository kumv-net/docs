const e=JSON.parse('{"key":"v-09d870a4","path":"/zh/reference/documents/high_concurrency_implementation_principle.html","title":"ZLMediaKit高并发实现原理","lang":"zh-CN","frontmatter":{"title":"ZLMediaKit高并发实现原理","description":"项目介绍 ZLMediaKit (https://github.com/xiongziliang/ZLMediaKit)是一套高性能的流媒体服务框架，目前支持 rtmp/rtsp/hls/http-flv 流媒体协议。该项目已支持 linux、macos、windows、ios、android 平台，支持的编码格式包括 H264、AAC、H265（仅 ...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://docs.ZLMediaKit.com/reference/documents/high_concurrency_implementation_principle.html"}],["meta",{"property":"og:url","content":"https://docs.ZLMediaKit.com/zh/reference/documents/high_concurrency_implementation_principle.html"}],["meta",{"property":"og:site_name","content":"ZLMediaKit"}],["meta",{"property":"og:title","content":"ZLMediaKit高并发实现原理"}],["meta",{"property":"og:description","content":"项目介绍 ZLMediaKit (https://github.com/xiongziliang/ZLMediaKit)是一套高性能的流媒体服务框架，目前支持 rtmp/rtsp/hls/http-flv 流媒体协议。该项目已支持 linux、macos、windows、ios、android 平台，支持的编码格式包括 H264、AAC、H265（仅 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-12-05T08:36:26.000Z"}],["meta",{"property":"article:author","content":"ZLMediaKit"}],["meta",{"property":"article:modified_time","content":"2023-12-05T08:36:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ZLMediaKit高并发实现原理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-05T08:36:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ZLMediaKit\\",\\"url\\":\\"https://docs.ZLMediaKit.com\\"}]}"]]},"headers":[{"level":2,"title":"项目介绍","slug":"项目介绍","link":"#项目介绍","children":[]},{"level":2,"title":"网络模型对比","slug":"网络模型对比","link":"#网络模型对比","children":[]},{"level":2,"title":"网络模型详述","slug":"网络模型详述","link":"#网络模型详述","children":[]},{"level":2,"title":"关闭互斥锁","slug":"关闭互斥锁","link":"#关闭互斥锁","children":[]},{"level":2,"title":"规避内存拷贝","slug":"规避内存拷贝","link":"#规避内存拷贝","children":[]},{"level":2,"title":"使用对象循环池","slug":"使用对象循环池","link":"#使用对象循环池","children":[]},{"level":2,"title":"设置 Socket 相关标志","slug":"设置-socket-相关标志","link":"#设置-socket-相关标志","children":[]},{"level":2,"title":"批量数据发送","slug":"批量数据发送","link":"#批量数据发送","children":[]},{"level":2,"title":"批量线程切换","slug":"批量线程切换","link":"#批量线程切换","children":[]},{"level":2,"title":"采用右值引用拷贝","slug":"采用右值引用拷贝","link":"#采用右值引用拷贝","children":[]},{"level":2,"title":"其他特性","slug":"其他特性","link":"#其他特性","children":[{"level":3,"title":"优化及时推流打开率","slug":"优化及时推流打开率","link":"#优化及时推流打开率","children":[]}]},{"level":2,"title":"性能测试对比","slug":"性能测试对比","link":"#性能测试对比","children":[]}],"git":{"createdTime":1700403910000,"updatedTime":1701765386000,"contributors":[{"name":"Alex","email":"liyu7352@gmail.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":17.74,"words":5321},"filePathRelative":"zh/reference/documents/high_concurrency_implementation_principle.md","localizedDate":"2023年11月19日","autoDesc":true}');export{e as data};
