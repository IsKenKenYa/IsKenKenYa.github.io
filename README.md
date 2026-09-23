# IsKenKenYa.github.io

我的个人简历网站：<https://iskenkenya.github.io>

> 本站前身是大学时期的课程作业网站，旧版 git 历史已离线封存。

## 技术栈

- [Astro](https://astro.build) 静态输出 + React islands（仅主题切换、打印按钮两处）
- [Tailwind CSS](https://tailwindcss.com) v4，终端风界面（Fira Code 自托管）
- TypeScript · pnpm
- 部署：GitHub Actions → GitHub Pages（推送 `main` 即自动发布）

## 修改简历内容

日常只需要改一个文件：[src/data/resume.ts](src/data/resume.ts) —— 个人信息、技能、工作经历、教育、项目全在这里，占位内容都标了 ⬅️ 提示，中英两个字段记得一起改。

界面文案（导航、按钮、区块标题等）在 [src/i18n/ui.ts](src/i18n/ui.ts)，中英各一份。

## 本地开发

```bash
pnpm install
pnpm dev        # http://localhost:4321

pnpm build      # 构建到 dist/
pnpm preview    # 本地预览构建产物
```

## 页面结构

| 路径 | 说明 |
| :--- | :--- |
| `/` | 简历首页（中文，默认语言） |
| `/projects/[slug]/` | 项目详情页（中文） |
| `/en/`、`/en/projects/[slug]/` | 对应英文版 |
| `/404.html` | 未找到页面 |

导出 PDF：打开首页，点「打印 / 导出 PDF」按钮（或 `Cmd/Ctrl + P`），打印样式已做好排版。

## 站点规划

- `iskenkenya.github.io`（本仓库）：简历主站，纯静态
- 未来的子域名站点（blog、tools 等）计划放在 `iskenkenya.com` 的独立 monorepo 仓库，托管到 Cloudflare Pages
