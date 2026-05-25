# 项目上下文

### 版本技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **Styling**: Tailwind CSS 4
- **Content**: MDX (gray-matter + 自定义 Markdown 渲染)

## 项目概述

Roblox Anime Games SEO 聚合站 MVP，用于 Google SEO 获取流量、AdSense 广告变现、发布游戏兑换码/Tier List/攻略。

## 目录结构

```
├── content/                    # MDX 内容文件 (57 篇)
│   ├── blox-fruits/            # Blox Fruits 游戏内容 (22 篇)
│   │   ├── codes.mdx           # 兑换码文章
│   │   ├── tier-list.mdx       # Tier List 文章
│   │   ├── guides.mdx          # 攻略文章
│   │   ├── best-dps-units.mdx  # pSEO: Best DPS
│   │   ├── best-support-units.mdx  # pSEO: Best Support
│   │   ├── best-traits.mdx     # pSEO: Best Traits
│   │   ├── best-relics.mdx     # pSEO: Best Relics
│   │   ├── best-teams.mdx      # pSEO: Best Teams
│   │   ├── best-farming-stages.mdx  # pSEO: Best Farming
│   │   ├── best-starter-units.mdx   # pSEO: Best Starter
│   │   ├── xp-guide.mdx        # pSEO: XP Guide
│   │   ├── gems-guide.mdx      # pSEO: Gems Guide
│   │   ├── leveling-guide.mdx  # pSEO: Leveling Guide
│   │   └── update-history.mdx  # pSEO: Update History
│   ├── anime-rangers/          # Anime Rangers 游戏内容 (17 篇)
│   │   ├── codes.mdx
│   │   ├── tier-list.mdx
│   │   └── (同上 pSEO 模板)
│   └── anime-vanguards/        # Anime Vanguards 游戏内容 (18 篇)
│       ├── codes.mdx
│       ├── tier-list.mdx
│       └── (同上 pSEO 模板)
├── public/                     # 静态资源
├── scripts/                    # 构建与启动脚本
├── src/
│   ├── app/                    # 页面路由与布局
│   │   ├── layout.tsx          # 根布局 (深色主题)
│   │   ├── page.tsx            # 首页
│   │   ├── sitemap.ts          # 动态 sitemap
│   │   ├── robots.ts           # robots.txt
│   │   ├── codes/page.tsx      # Codes 分类页
│   │   ├── tier-list/page.tsx  # Tier List 分类页
│   │   ├── guides/page.tsx     # Guides 分类页
│   │   └── [game]/
│   │       ├── page.tsx        # 游戏专区页
│   │       └── [article]/
│   │           └── page.tsx    # 文章详情页 (含 JSON-LD)
│   ├── components/
│   │   ├── header.tsx          # 顶部导航 (Sticky + Mobile Responsive)
│   │   ├── footer.tsx          # 页脚
│   │   ├── game-card.tsx       # 游戏卡片
│   │   ├── article-card.tsx    # 文章卡片
│   │   ├── article-list-item.tsx # 文章列表项
│   │   ├── ad-slot.tsx         # 广告位组件
│   │   └── ui/                 # Shadcn UI 组件库
│   ├── lib/
│   │   ├── content.ts          # MDX 内容加载与解析
│   │   ├── games.ts            # 游戏数据定义
│   │   └── utils.ts            # 通用工具函数
│   └── server.ts
├── DESIGN.md                   # 设计规范
├── AGENTS.md                   # 本文件
├── next.config.ts
├── package.json
└── tsconfig.json
```

## 页面路由

| 路由 | 页面 | 说明 |
|------|------|------|
| `/` | 首页 | Hero + 热门游戏 + 最新 Codes + 最新 Tier List |
| `/[game]` | 游戏专区页 | Banner + 分类导航 + 最新内容列表 |
| `/[game]/[article]` | 文章详情页 | SEO 核心页面，含 TOC、Codes 表格、FAQ、JSON-LD |
| `/codes` | Codes 分类页 | 所有游戏的 Codes 文章聚合 |
| `/tier-list` | Tier List 分类页 | 所有游戏的 Tier List 文章聚合 |
| `/guides` | Guides 分类页 | 所有游戏的攻略文章聚合 |

## 内容管理

- 使用 MDX 文件驱动内容，存放在 `/content/[game]/[article].mdx`
- 每个 MDX 文件包含 frontmatter：title, description, date, category, game
- `src/lib/content.ts` 负责读取和解析 MDX 内容
- 添加新内容：在 `content/` 目录下创建对应游戏的 MDX 文件即可

## SEO 配置

- 自动 Meta Title / Description (通过 generateMetadata)
- Open Graph + Twitter Card 支持
- sitemap.xml (动态生成)
- robots.txt
- JSON-LD Schema (Article + FAQPage)
- Breadcrumb 导航
- Canonical URL

## 包管理规范

**仅允许使用 pnpm** 作为包管理器。

## 开发规范

### 编码规范

- 默认按 TypeScript `strict` 心智写代码
- 禁止隐式 `any` 和 `as any`
- 优先复用当前作用域已声明的变量、函数、类型和导入

### 设计风格

- 深色主题（`#0f1117` 背景）
- 主强调色：`#00d4aa`（青绿色，暗示"解锁/兑换"）
- 游戏感、SEO 内容站风格
- 禁止复杂动画、3D 效果、视频背景
- 移动端优先

### Hydration 问题防范

- 严禁在 JSX 渲染逻辑中直接使用 typeof window、Date.now()、Math.random()
- 必须使用 'use client' 并配合 useEffect + useState
- 禁止非法 HTML 嵌套
