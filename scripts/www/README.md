# 与乔布斯对话 - 纯前端版本

一个使用通义千问API的AI聊天应用，模拟与史蒂夫·乔布斯对话。

## 功能特点

- 🎯 乔布斯AI人格 - 直截了当、简洁有力的对话风格
- 🌐 中英文双语界面
- 📱 响应式设计，支持手机和电脑
- 🖼️ 图片上传和AI分析
- 💾 本地存储聊天记录（无需服务器）
- 📤 导出对话为Markdown

## 使用方法

### 方法1：直接打开
双击 `index.html` 文件即可在浏览器中使用。

### 方法2：本地服务器
```bash
# 使用 Python
python -m http.server 8080

# 或使用 Node.js
npx serve .
```

然后访问 http://localhost:8080

## 注意事项

⚠️ **API密钥安全提醒**：
- 此版本的API密钥存储在前端代码中
- 仅适合个人使用，不要公开分享
- 如需更换API密钥，编辑 `index.html` 中的 `CONFIG.QWEN_API_KEY`

## 技术栈

- 纯HTML/CSS/JavaScript（无需构建）
- Tailwind CSS（通过CDN）
- 通义千问 API

## API密钥获取

1. 访问 [阿里云百炼平台](https://bailian.console.aliyun.com/)
2. 注册/登录阿里云账号
3. 开通通义千问服务
4. 在"API-KEY管理"中创建API Key

## 许可证

MIT
