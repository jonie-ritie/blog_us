---
title: Version
no_date: true
no_about: true
no_comments: true
---
## Version 0.1:
#### 1. 基础设置修改
采用 rainbow banner
修改网页名称，作者，github discord 链接
新增导航栏 QQ群 链接，及 Email 链接
完善 Friends 页，About页
新增 Comments 页
#### 2. ScrollReveal 全局实现
实现博客主页文字，post 列表卡片，以及 post 内容滑动载入动效
BUG - ScrollReveal 与 css transform冲突，如果想要鼠标悬停卡片时上移，请在 index&archive.ejs 中注释掉 ScrollReveal
#### 3. Post List 修改样式
实现 post 列表卡片在鼠标悬停时的阴影以及动效
#### 4. Comments 页以及各 Post 页新增 Waline 评论区
配置 _config.yml 以及 waline.css
实现评论区用户活跃标签以及评论数统计
#### 5. footer 页脚
取消页脚目录
修改页脚及页脚内 color theme 样式
#### 6. Version 页
新增 Version 页面记录所有版本迭代信息
<br>
## Version 0.2:
#### 1. Comments 页添加时间小猫 css 动效 (self-time-cat.css)
新增 self-time-cat.css
直接导入于 head.ejs
修改页面布局使评论区位于页面第二部分（时间猫和标题占据初始页面所有屏幕）
新增根据当地时间设置时间小猫的画面
#### 2. Comments 页以及各 Post 页添加返回顶部按钮 (self-return-to-top.css)
新增 self-return-to-top.css
使用 @import 挂载于 components.css 以便全局使用，main.js中新增滚动监听
实现按钮默认消失，滚动至页面高度一半时出现，点击后平滑滚动至顶部，按钮居于网页图层顶层
#### 3. Post 文章页以及 Version 版本页新增阅读进度条（右上角）
新增 self-scroll-progress.css
使用 @import 挂载于 post.css，main.js 中新增滚动监听
#### 4. Nav 顶部导航栏以及 Footer 增加鼠标悬停提示
新增 nav.css, footer.css 中鼠标 hover 后灰色阴影
#### 5. Post 文章页每篇文章最下方新增 ”前一篇“ ”后一篇“ 的导航
新增 self-post-nav.css
使用 @import 挂载于 post.css, post.ejs 中设置相关参数
以 Themes cards 为模板，新增前后篇导航
<br>
## Version 0.3:
#### 1. Waline 新增明暗主题适配
修改 main.js 以及 waline 配置，实现 waline 评论区明暗切换

## Version 0.4:
#### 1. 每页页脚新增网页访客数和访问量
header.ejs 导入不蒜子，footer.ejs 中使用

## Version 0.5:
#### 1. Post 文章每页开头添加一张零尺寸的封面图（微信小程序用）
Post 每页新增 <image> 封面 </image>
#### 2. Nav 新增小程序码显示
修改 nav.css, nav.ejs 新增 self-miniprogram-code.js
#### 3. 优化 回到顶部 滚动进度 小程序码显示 代码逻辑
新增相对应的 js 代码并以 script 形式绑定到对应元素上