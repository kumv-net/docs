import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,e as s}from"./app-BrxqtzGY.js";const t={},d=s(`<h1 id="_1-the-client-sends-an-announce-command" tabindex="-1"><a class="header-anchor" href="#_1-the-client-sends-an-announce-command" aria-hidden="true">#</a> 1. The client sends an ANNOUNCE command.</h1><p>This step primarily involves transmitting the SDP. Generally, before this command, an OPTIONS command is sent to probe the server&#39;s support for the streaming protocol. However, to reduce the number of interactions, the ANNOUNCE command can be directly sent. If not supported, the server naturally responds with an error code.</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>ANNOUNCE rtsp://10.0.9.130:554/live/2.sdp RTSP/1.0
<span class="token header"><span class="token header-name keyword">CSeq</span><span class="token punctuation">:</span> <span class="token header-value">1</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">EasyPusher v1.2.16.1105</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/sdp</span></span>
<span class="token header"><span class="token header-name keyword">Content-Length</span><span class="token punctuation">:</span> <span class="token header-value">541</span></span>

v=0
o=- 0 0 IN IP4 127.0.0.1
s=EasyDarwin
i=EasyDarwin
c=IN IP4 127.0.0.1
t=0 0
a=x-qt-text-nam:EasyDarwin
a=x-qt-text-inf:EasyDarwin
a=x-qt-text-cmt:source application::EasyDarwin
a=x-qt-text-aut:
a=x-qt-text-cpy:
m=video 0 RTP/AVP 96
a=rtpmap:96 H264/90000
a=fmtp:96 packetization-mode=1;sprop-parameter-sets=
a=control:streamid=0
m=audio 0 RTP/AVP 97
a=rtpmap:97 MPEG4-GENERIC/8000/1
a=fmtp:97 streamtype=5;profile-level-id=1;mode=AAC-hbr;sizelength=13;indexlength=3;indexdeltalength=3;config=1588
a=control:streamid=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-the-server-responds-to-the-announce-command" tabindex="-1"><a class="header-anchor" href="#_2-the-server-responds-to-the-announce-command" aria-hidden="true">#</a> 2. The server responds to the ANNOUNCE command.</h1><p>If the server successfully parses the SDP, it will return a 200 code to indicate success.</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>RTSP/1.0 200 OK
<span class="token header"><span class="token header-name keyword">CSeq</span><span class="token punctuation">:</span> <span class="token header-value">1</span></span>
<span class="token header"><span class="token header-name keyword">Date</span><span class="token punctuation">:</span> <span class="token header-value">Tue, Mar 26 2019 09:10:10 GMT</span></span>
<span class="token header"><span class="token header-name keyword">Server</span><span class="token punctuation">:</span> <span class="token header-value">ZLMediaKit-4.0(build in Mar 26 2019 17:01:17)</span></span>
<span class="token header"><span class="token header-name keyword">Session</span><span class="token punctuation">:</span> <span class="token header-value">KPUZ49ejotyD</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-the-client-sends-a-setup-command" tabindex="-1"><a class="header-anchor" href="#_3-the-client-sends-a-setup-command" aria-hidden="true">#</a> 3. The client sends a SETUP command.</h1><p>This command is used to negotiate the RTP transmission mode, which can be either TCP or UDP. For simplicity, it is recommended to use TCP for streaming. It should be noted that if the SDP contains multiple tracks (e.g., both audio and video), there will be multiple interactions for the SETUP command.</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>SETUP rtsp://10.0.9.130:554/live/2.sdp/streamid=0 RTSP/1.0
<span class="token header"><span class="token header-name keyword">Transport</span><span class="token punctuation">:</span> <span class="token header-value">RTP/AVP/TCP;unicast;mode=record;interleaved=0-1</span></span>
<span class="token header"><span class="token header-name keyword">CSeq</span><span class="token punctuation">:</span> <span class="token header-value">2</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">EasyPusher v1.2.16.1105</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-the-server-responds-to-the-setup-command" tabindex="-1"><a class="header-anchor" href="#_4-the-server-responds-to-the-setup-command" aria-hidden="true">#</a> 4. The server responds to the SETUP command.</h1><p>The server returns the negotiated interleaved value and other details.</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>RTSP/1.0 200 OK
<span class="token header"><span class="token header-name keyword">CSeq</span><span class="token punctuation">:</span> <span class="token header-value">2</span></span>
<span class="token header"><span class="token header-name keyword">Date</span><span class="token punctuation">:</span> <span class="token header-value">Tue, Mar 26 2019 09:10:10 GMT</span></span>
<span class="token header"><span class="token header-name keyword">Server</span><span class="token punctuation">:</span> <span class="token header-value">ZLMediaKit-4.0(build in Mar 26 2019 17:01:17)</span></span>
<span class="token header"><span class="token header-name keyword">Session</span><span class="token punctuation">:</span> <span class="token header-value">KPUZ49ejotyD</span></span>
<span class="token header"><span class="token header-name keyword">Transport</span><span class="token punctuation">:</span> <span class="token header-value">RTP/AVP/TCP;unicast;interleaved=0-1;ssrc=00000000</span></span>
<span class="token header"><span class="token header-name keyword">x-Dynamic-Rate</span><span class="token punctuation">:</span> <span class="token header-value">1</span></span>
<span class="token header"><span class="token header-name keyword">x-Transport-Options</span><span class="token punctuation">:</span> <span class="token header-value">late-tolerance=1.400000</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-the-client-sends-a-record-command" tabindex="-1"><a class="header-anchor" href="#_5-the-client-sends-a-record-command" aria-hidden="true">#</a> 5. The client sends a RECORD command.</h1><p>This command is equivalent to the play command during playback. It is a synchronous command to prepare the server. Please note that, for the sake of brevity, one SETUP interaction is omitted before this command.</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>RECORD rtsp://10.0.9.130:554/live/2.sdp RTSP/1.0
<span class="token header"><span class="token header-name keyword">Range</span><span class="token punctuation">:</span> <span class="token header-value">npt=0.000-</span></span>
<span class="token header"><span class="token header-name keyword">CSeq</span><span class="token punctuation">:</span> <span class="token header-value">4</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">EasyPusher v1.2.16.1105</span></span>
<span class="token header"><span class="token header-name keyword">Session</span><span class="token punctuation">:</span> <span class="token header-value">KPUZ49ejotyD</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-the-server-responds-to-the-record-command-and-streaming-can-begin" tabindex="-1"><a class="header-anchor" href="#_6-the-server-responds-to-the-record-command-and-streaming-can-begin" aria-hidden="true">#</a> 6. The server responds to the RECORD command, and streaming can begin!</h1><p>After the server responds to the RECORD command, the streaming client can continuously send RTP packets.</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>RTSP/1.0 200 OK
<span class="token header"><span class="token header-name keyword">CSeq</span><span class="token punctuation">:</span> <span class="token header-value">4</span></span>
<span class="token header"><span class="token header-name keyword">Date</span><span class="token punctuation">:</span> <span class="token header-value">Tue, Mar 26 2019 09:10:10 GMT</span></span>
<span class="token header"><span class="token header-name keyword">RTP-Info</span><span class="token punctuation">:</span> <span class="token header-value">url=rtsp://10.0.9.130:554/live/2.sdp/streamid=0,url=rtsp://10.0.9.130:554/live/2.sdp/streamid=1</span></span>
<span class="token header"><span class="token header-name keyword">Server</span><span class="token punctuation">:</span> <span class="token header-value">ZLMediaKit-4.0(build in Mar 26 2019 17:01:17)</span></span>
<span class="token header"><span class="token header-name keyword">Session</span><span class="token punctuation">:</span> <span class="token header-value">KPUZ49ejotyD</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),r=[d];function i(p,l){return a(),n("div",null,r)}const u=e(t,[["render",i],["__file","rtsp_push_process.html.vue"]]);export{u as default};
