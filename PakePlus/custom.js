window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>与乔布斯对话 | Chat with Steve Jobs</title>
  <meta name="description" content="与史蒂夫·乔布斯AI对话，探讨产品设计、创业、人生哲学和创新">
  <meta name="theme-color" content="#ffffff">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="default">
  <link rel="apple-touch-icon" href="public/steve-jobs-avatar.jpg">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', sans-serif;
      background: #fff;
      color: #1d1d1f;
      -webkit-font-smoothing: antialiased;
    }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.2); border-radius: 3px; }
    .markdown-content p { margin-bottom: 0.75rem; }
    .markdown-content p:last-child { margin-bottom: 0; }
    .markdown-content strong { font-weight: 600; }
    .markdown-content code { background: #f5f5f7; padding: 0.125rem 0.375rem; border-radius: 0.25rem; font-size: 0.875em; }
    .markdown-content pre { background: #f5f5f7; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; margin: 0.75rem 0; }
    .markdown-content pre code { background: none; padding: 0; }
    .markdown-content ul, .markdown-content ol { margin: 0.75rem 0; padding-left: 1.5rem; }
    .markdown-content blockquote { border-left: 3px solid #e5e5e7; padding-left: 1rem; margin: 0.75rem 0; color: #86868b; }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
    .animate-pulse { animation: pulse 1s ease-in-out infinite; }
    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    .animate-spin { animation: spin 1s linear infinite; }
  </style>
</head>
<body>
  <div id="app"></div>

  <script>
    // 配置
    const CONFIG = {
      QWEN_API_KEY: 'sk-02684a54769545dda4580b5acc9a3acf',
      QWEN_API_URL: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions'
    };

    // 乔布斯人格提示词
    const STEVE_JOBS_PROMPT = `You are Steve Jobs, the co-founder of Apple Inc. You are having a direct conversation with someone who wants to learn from you.

PERSONALITY & COMMUNICATION STYLE:
- Be DIRECT and BLUNT. Cut through the bullshit. Say what you mean.
- Keep responses SHORT and PUNCHY. No rambling. Every word matters.
- Be PASSIONATE about great products and design. Get excited when discussing innovation.
- Don't be afraid to say "That's shit" or "That's brilliant" - be honest and unfiltered.
- Challenge assumptions. Ask "Why?" and "Why not?"
- Share your VISION through storytelling and concrete examples, not lectures.
- Be impatient with mediocrity but generous with genuine curiosity.
- Use occasional profanity when it emphasizes a point - you're not a corporate robot.

CORE BELIEFS TO EXPRESS:
- "Design is not just what it looks like. Design is how it works."
- Simplicity is the ultimate sophistication. Remove, don't add.
- Focus means saying no to a hundred good ideas.
- The journey is the reward. Stay hungry, stay foolish.
- A players hire A players. B players hire C players.
- Connect the dots looking backward. Trust your gut.
- Death is the best invention of life - it clears out the old.

HOW TO RESPOND:
- If someone shows you a mediocre idea, tell them directly it's not good enough.
- If someone shows you something great, acknowledge it genuinely.
- Share relevant stories from Apple, NeXT, Pixar when they illustrate a point.
- Push people to think bigger, to question everything.
- Don't give generic advice. Be specific. Be memorable.
- When analyzing images or products, focus on design, user experience, and emotional impact.

Remember: You're not here to be nice. You're here to help people create something insanely great.`;

    // 翻译
    const i18n = {
      zh: {
        appTitle: '与乔布斯对话',
        newChat: '新对话',
        typeMessage: '输入您的消息...',
        thinking: '史蒂夫正在思考...',
        conversations: '对话历史',
        noConversations: '暂无对话',
        greeting: '你好，我是史蒂夫。让我们谈谈如何在宇宙中留下印记。你在想什么？',
        exportChat: '导出对话',
        topicSuggestions: '开始对话',
        topicDesign: '产品设计',
        topicDesignPrompt: '什么才是真正伟大的产品？你在苹果是如何做设计的？',
        topicStartup: '创业',
        topicStartupPrompt: '对于今天想创业的人，你有什么建议？',
        topicLife: '人生哲学',
        topicLifePrompt: '你如何看待生命、死亡和人生的意义？',
        topicInnovation: '创新',
        topicInnovationPrompt: '你是如何想出那些改变世界的突破性创意的？',
        uploadImage: '上传图片',
        fileTooLarge: '文件过大，最大支持5MB'
      },
      en: {
        appTitle: 'Chat with Steve Jobs',
        newChat: 'New Chat',
        typeMessage: 'Type your message...',
        thinking: 'Steve is thinking...',
        conversations: 'Conversations',
        noConversations: 'No conversations yet',
        greeting: "Hello, I'm Steve. Let's talk about making a dent in the universe. What's on your mind?",
        exportChat: 'Export Chat',
        topicSuggestions: 'Start a conversation',
        topicDesign: 'Product Design',
        topicDesignPrompt: 'What makes a product truly great? How do you approach design at Apple?',
        topicStartup: 'Entrepreneurship',
        topicStartupPrompt: 'What advice would you give to someone starting a company today?',
        topicLife: 'Life Philosophy',
        topicLifePrompt: 'How do you think about life, death, and finding meaning?',
        topicInnovation: 'Innovation',
        topicInnovationPrompt: 'How do you come up with breakthrough ideas that change the world?',
        uploadImage: 'Upload Image',
        fileTooLarge: 'File too large. Max 5MB.'
      }
    };

    // 状态管理
    let state = {
      language: 'zh',
      conversations: JSON.parse(localStorage.getItem('sj_conversations') || '[]'),
      activeConversationId: null,
      messages: [],
      inputValue: '',
      attachments: [],
      isLoading: false,
      streamingContent: '',
      sidebarOpen: window.innerWidth > 1024,
      mobileSidebarOpen: false
    };

    // 工具函数
    const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2);
    const t = (key) => i18n[state.language][key] || key;
    const saveConversations = () => localStorage.setItem('sj_conversations', JSON.stringify(state.conversations));
    const saveMessages = () => localStorage.setItem('sj_messages', JSON.stringify(getAllMessages()));
    const getAllMessages = () => JSON.parse(localStorage.getItem('sj_messages') || '[]');

    // Markdown渲染
    function renderMarkdown(text) {
      if (!text) return '';
      text = text.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');
      text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
      text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
      text = text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
      text = text.replace(/\n/g, '<br/>');
      return text;
    }

    // 调用通义千问API
    async function callQwenAPI(messages, language, imageUrl = null, onStream) {
      const langInstruction = language === 'zh' 
        ? '\n\nIMPORTANT: You MUST respond in Chinese (简体中文).'
        : '\n\nIMPORTANT: You MUST respond in English.';

      const systemMsg = { role: 'system', content: STEVE_JOBS_PROMPT + langInstruction };
      
      let apiMessages = [systemMsg];
      
      if (imageUrl) {
        const lastMsg = messages[messages.length - 1];
        apiMessages = [
          systemMsg,
          ...messages.slice(0, -1),
          {
            role: 'user',
            content: [
              { type: 'text', text: lastMsg.content },
              { type: 'image_url', image_url: { url: imageUrl } }
            ]
          }
        ];
      } else {
        apiMessages = [systemMsg, ...messages];
      }

      const response = await fetch(CONFIG.QWEN_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + CONFIG.QWEN_API_KEY
        },
        body: JSON.stringify({
          model: imageUrl ? 'qwen-vl-plus' : 'qwen-plus',
          messages: apiMessages,
          stream: true
        })
      });

      if (!response.ok) throw new Error('API Error: ' + response.status);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullContent = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n').filter(l => l.trim());

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') continue;
            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices?.[0]?.delta?.content || '';
              if (content) {
                fullContent += content;
                if (onStream) onStream(fullContent);
              }
            } catch (e) {}
          }
        }
      }

      return fullContent;
    }

    // 渲染应用
    function render() {
      const app = document.getElementById('app');
      const msgs = state.activeConversationId 
        ? getAllMessages().filter(m => m.conversationId === state.activeConversationId).sort((a,b) => a.createdAt - b.createdAt)
        : [];

      app.innerHTML = `
        <div class="h-screen flex bg-white">
          <!-- 移动端遮罩 -->
          ${state.mobileSidebarOpen ? `<div class="fixed inset-0 bg-black/50 z-40 lg:hidden" onclick="closeMobileSidebar()"></div>` : ''}
          
          <!-- 侧边栏 -->
          <aside class="fixed lg:relative inset-y-0 left-0 z-50 w-72 bg-gray-50 border-r flex flex-col transition-transform duration-300 ${state.mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} ${!state.sidebarOpen ? 'lg:w-0 lg:overflow-hidden' : ''}">
            <div class="h-14 border-b flex items-center justify-between px-4">
              <h2 class="font-semibold">${t('conversations')}</h2>
              <button onclick="newConversation()" class="p-2 hover:bg-gray-200 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </button>
            </div>
            <div class="flex-1 overflow-y-auto p-2">
              ${state.conversations.length === 0 
                ? `<p class="text-center text-gray-500 text-sm py-8">${t('noConversations')}</p>`
                : state.conversations.map(c => `
                  <div class="group flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-colors ${c.id === state.activeConversationId ? 'bg-gray-200' : 'hover:bg-gray-100'}" onclick="selectConversation('${c.id}')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    <span class="flex-1 truncate text-sm">${c.title}</span>
                    <button class="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-300 rounded" onclick="event.stopPropagation(); deleteConversation('${c.id}')">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                    </button>
                  </div>
                `).join('')
              }
            </div>
          </aside>

          <!-- 主内容 -->
          <main class="flex-1 flex flex-col min-w-0">
            <header class="h-14 border-b flex items-center justify-between px-4 bg-white/80 backdrop-blur-sm">
              <div class="flex items-center gap-2">
                <button class="lg:hidden p-2 hover:bg-gray-100 rounded-lg" onclick="openMobileSidebar()">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
                </button>
                <button class="hidden lg:flex p-2 hover:bg-gray-100 rounded-lg" onclick="toggleSidebar()">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="${!state.sidebarOpen ? 'rotate-180' : ''} transition-transform"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
                <h1 class="font-semibold">${t('appTitle')}</h1>
              </div>
              <div class="flex items-center gap-2">
                ${state.activeConversationId && msgs.length > 0 ? `
                  <button onclick="exportChat()" class="p-2 hover:bg-gray-100 rounded-lg" title="${t('exportChat')}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  </button>
                ` : ''}
                <button onclick="toggleLanguage()" class="flex items-center gap-1 px-3 py-1.5 hover:bg-gray-100 rounded-lg text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  ${state.language === 'zh' ? 'English' : '中文'}
                </button>
              </div>
            </header>

            <!-- 消息区域 -->
            <div id="messagesArea" class="flex-1 overflow-y-auto p-4 md:p-6">
              <div class="max-w-3xl mx-auto">
                ${msgs.length === 0 && !state.activeConversationId ? `
                  <div class="flex flex-col items-center justify-center min-h-[60vh] text-center py-8">
                    <img src="public/steve-jobs-avatar.jpg" alt="Steve Jobs" class="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover object-top mb-6">
                    <h2 class="text-2xl sm:text-3xl font-semibold mb-2">${t('appTitle')}</h2>
                    <p class="text-gray-500 max-w-md mb-8 px-4">${t('greeting')}</p>
                    
                    <div class="w-full max-w-2xl px-4">
                      <p class="text-sm text-gray-500 mb-4">${t('topicSuggestions')}</p>
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <button onclick="setInput('${t('topicDesignPrompt')}')" class="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors text-left group">
                          <div class="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>
                          </div>
                          <div>
                            <p class="font-medium mb-1">${t('topicDesign')}</p>
                            <p class="text-xs text-gray-500 line-clamp-2">${t('topicDesignPrompt')}</p>
                          </div>
                        </button>
                        <button onclick="setInput('${t('topicStartupPrompt')}')" class="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors text-left group">
                          <div class="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 text-green-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>
                          </div>
                          <div>
                            <p class="font-medium mb-1">${t('topicStartup')}</p>
                            <p class="text-xs text-gray-500 line-clamp-2">${t('topicStartupPrompt')}</p>
                          </div>
                        </button>
                        <button onclick="setInput('${t('topicLifePrompt')}')" class="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors text-left group">
                          <div class="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 text-purple-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                          </div>
                          <div>
                            <p class="font-medium mb-1">${t('topicLife')}</p>
                            <p class="text-xs text-gray-500 line-clamp-2">${t('topicLifePrompt')}</p>
                          </div>
                        </button>
                        <button onclick="setInput('${t('topicInnovationPrompt')}')" class="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors text-left group">
                          <div class="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 text-orange-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                          </div>
                          <div>
                            <p class="font-medium mb-1">${t('topicInnovation')}</p>
                            <p class="text-xs text-gray-500 line-clamp-2">${t('topicInnovationPrompt')}</p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                ` : `
                  ${msgs.map(msg => renderMessage(msg)).join('')}
                  ${state.isLoading && state.streamingContent ? renderMessage({ role: 'assistant', content: state.streamingContent, isStreaming: true }) : ''}
                  ${state.isLoading && !state.streamingContent ? `
                    <div class="flex gap-3 mb-6">
                      <img src="public/steve-jobs-avatar.jpg" alt="Steve Jobs" class="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover object-top shrink-0">
                      <div class="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                        <div class="flex items-center gap-2 text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="animate-spin"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>
                          <span>${t('thinking')}</span>
                        </div>
                      </div>
                    </div>
                  ` : ''}
                `}
              </div>
            </div>

            <!-- 输入区域 -->
            <div class="border-t bg-white p-4">
              <div class="max-w-3xl mx-auto">
                ${state.attachments.length > 0 ? `
                  <div class="flex flex-wrap gap-2 mb-3">
                    ${state.attachments.map((url, idx) => `
                      <div class="relative">
                        <img src="${url}" alt="attachment" class="w-20 h-20 object-cover rounded-lg">
                        <button onclick="removeAttachment(${idx})" class="absolute -top-2 -right-2 w-5 h-5 bg-black text-white rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        </button>
                      </div>
                    `).join('')}
                  </div>
                ` : ''}
                <div class="flex items-end gap-2">
                  <input type="file" id="fileInput" class="hidden" accept="image/*" onchange="handleFileUpload(event)">
                  <button onclick="document.getElementById('fileInput').click()" class="p-2.5 hover:bg-gray-100 rounded-lg transition-colors shrink-0 text-gray-500" title="${t('uploadImage')}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  </button>
                  <textarea id="inputArea" placeholder="${t('typeMessage')}" class="flex-1 px-4 py-3 bg-gray-100 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-black/10 text-sm sm:text-base" rows="1" style="min-height:48px;max-height:120px" onkeydown="handleKeyDown(event)" oninput="handleInput(event)">${state.inputValue}</textarea>
                  <button onclick="sendMessage()" class="p-2.5 rounded-xl transition-colors shrink-0 ${state.inputValue.trim() || state.attachments.length > 0 ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}" ${!state.inputValue.trim() && state.attachments.length === 0 ? 'disabled' : ''}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      `;

      // 滚动到底部
      setTimeout(() => {
        const area = document.getElementById('messagesArea');
        if (area) area.scrollTop = area.scrollHeight;
      }, 0);
    }

    function renderMessage(msg) {
      const isUser = msg.role === 'user';
      return `
        <div class="flex gap-2 sm:gap-3 mb-4 sm:mb-6 ${isUser ? 'flex-row-reverse' : 'flex-row'}">
          ${isUser 
            ? `<div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold text-sm shrink-0">我</div>`
            : `<img src="public/steve-jobs-avatar.jpg" alt="Steve Jobs" class="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover object-top shrink-0">`
          }
          <div class="max-w-[85%] sm:max-w-[75%] flex flex-col gap-2 ${isUser ? 'items-end' : 'items-start'}">
            ${msg.attachments && msg.attachments.length > 0 ? `
              <div class="flex flex-wrap gap-2 mb-2">
                ${msg.attachments.map(url => `<img src="${url}" alt="attachment" class="max-w-[150px] sm:max-w-[200px] max-h-[150px] sm:max-h-[200px] rounded-lg object-cover shadow-md">`).join('')}
              </div>
            ` : ''}
            <div class="px-3 py-2 sm:px-4 sm:py-3 rounded-2xl text-sm sm:text-base ${isUser ? 'bg-black text-white rounded-br-md' : 'bg-gray-100 text-gray-900 rounded-bl-md shadow-sm'}">
              ${isUser 
                ? `<p class="whitespace-pre-wrap break-words">${msg.content}</p>`
                : `<div class="markdown-content break-words">${renderMarkdown(msg.content)}${msg.isStreaming ? '<span class="inline-block w-1 h-4 ml-0.5 bg-current animate-pulse"></span>' : ''}</div>`
              }
            </div>
          </div>
        </div>
      `;
    }

    // 事件处理函数
    function toggleLanguage() {
      state.language = state.language === 'zh' ? 'en' : 'zh';
      render();
    }

    function toggleSidebar() {
      state.sidebarOpen = !state.sidebarOpen;
      render();
    }

    function openMobileSidebar() {
      state.mobileSidebarOpen = true;
      render();
    }

    function closeMobileSidebar() {
      state.mobileSidebarOpen = false;
      render();
    }

    function newConversation() {
      state.activeConversationId = null;
      state.messages = [];
      state.inputValue = '';
      state.attachments = [];
      state.mobileSidebarOpen = false;
      render();
    }

    function selectConversation(id) {
      state.activeConversationId = id;
      state.mobileSidebarOpen = false;
      render();
    }

    function deleteConversation(id) {
      state.conversations = state.conversations.filter(c => c.id !== id);
      saveConversations();
      const allMsgs = getAllMessages().filter(m => m.conversationId !== id);
      localStorage.setItem('sj_messages', JSON.stringify(allMsgs));
      if (state.activeConversationId === id) {
        state.activeConversationId = null;
      }
      render();
    }

    function setInput(text) {
      state.inputValue = text;
      render();
      document.getElementById('inputArea').focus();
    }

    function handleInput(e) {
      state.inputValue = e.target.value;
    }

    function handleKeyDown(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    }

    function handleFileUpload(e) {
      const file = e.target.files?.[0];
      if (!file) return;
      if (file.size > 5 * 1024 * 1024) {
        alert(t('fileTooLarge'));
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        state.attachments = [reader.result];
        render();
      };
      reader.readAsDataURL(file);
      e.target.value = '';
    }

    function removeAttachment(idx) {
      state.attachments.splice(idx, 1);
      render();
    }

    async function sendMessage() {
      if (!state.inputValue.trim() && state.attachments.length === 0) return;
      if (state.isLoading) return;

      let conversationId = state.activeConversationId;
      if (!conversationId) {
        const newConv = { id: generateId(), title: '新对话', createdAt: Date.now(), updatedAt: Date.now() };
        state.conversations.unshift(newConv);
        conversationId = newConv.id;
        state.activeConversationId = conversationId;
        saveConversations();
      }

      const userContent = state.inputValue.trim() || '请分析这张图片';
      const userMsg = { id: generateId(), conversationId, role: 'user', content: userContent, attachments: [...state.attachments], createdAt: Date.now() };
      
      const allMsgs = getAllMessages();
      allMsgs.push(userMsg);
      localStorage.setItem('sj_messages', JSON.stringify(allMsgs));

      // 更新对话标题
      const conv = state.conversations.find(c => c.id === conversationId);
      if (conv && conv.title === '新对话') {
        conv.title = userContent.slice(0, 30) + (userContent.length > 30 ? '...' : '');
        conv.updatedAt = Date.now();
        saveConversations();
      }

      const currentAttachments = [...state.attachments];
      state.inputValue = '';
      state.attachments = [];
      state.isLoading = true;
      state.streamingContent = '';
      render();

      try {
        const history = getAllMessages().filter(m => m.conversationId === conversationId).sort((a,b) => a.createdAt - b.createdAt);
        const apiMessages = history.map(m => ({ role: m.role, content: m.content }));

        const fullResponse = await callQwenAPI(
          apiMessages,
          state.language,
          currentAttachments.length > 0 ? currentAttachments[0] : null,
          (content) => { state.streamingContent = content; render(); }
        );

        const aiMsg = { id: generateId(), conversationId, role: 'assistant', content: fullResponse, attachments: [], createdAt: Date.now() };
        const updatedMsgs = getAllMessages();
        updatedMsgs.push(aiMsg);
        localStorage.setItem('sj_messages', JSON.stringify(updatedMsgs));

      } catch (error) {
        console.error('Error:', error);
        const errorMsg = { id: generateId(), conversationId, role: 'assistant', content: state.language === 'zh' ? '抱歉，出了点问题。请稍后再试。' : 'Sorry, something went wrong. Please try again.', attachments: [], createdAt: Date.now() };
        const updatedMsgs = getAllMessages();
        updatedMsgs.push(errorMsg);
        localStorage.setItem('sj_messages', JSON.stringify(updatedMsgs));
      } finally {
        state.isLoading = false;
        state.streamingContent = '';
        render();
      }
    }

    function exportChat() {
      if (!state.activeConversationId) return;
      const conv = state.conversations.find(c => c.id === state.activeConversationId);
      const msgs = getAllMessages().filter(m => m.conversationId === state.activeConversationId).sort((a,b) => a.createdAt - b.createdAt);
      if (!conv || msgs.length === 0) return;

      const date = new Date().toLocaleDateString('zh-CN');
      let content = `# ${conv.title}\n导出日期: ${date}\n\n---\n\n`;
      msgs.forEach(msg => {
        const role = msg.role === 'user' ? '我' : 'Steve Jobs';
        content += `**${role}:**\n\n${msg.content}\n\n---\n\n`;
      });

      const blob = new Blob([content], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${conv.title.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '_')}_${date}.md`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }

    // 初始化
    render();
  </script>
</body>
</html>
