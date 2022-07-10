# blog_us

[Newest Versions Here](https://www.ritie-jonie.xyz/version)
## version 0.1:
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
#### 5. Comments 页添加时间小猫 css 动效 (self-time-cat.css)
新增 self-time-cat.css
直接导入于 head.ejs
修改页面布局使评论区位于页面第二部分（时间猫和标题占据第一部分所有屏幕）
#### 6. Comments 页以及各 Post 页添加返回顶部按钮 (self-return-to-top.css)
新增 return-to-top.css
使用 @import 挂载于 components.css 以便全局使用，main.js中新增滚动监听
实现按钮默认消失，滚动至页面高度一半时出现，点击后平滑滚动至顶部，按钮居于网页图层顶层
#### 7. footer 页脚
取消页脚目录
修改页脚及页脚内 color theme 样式
