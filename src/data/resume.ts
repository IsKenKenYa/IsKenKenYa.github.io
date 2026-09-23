/**
 * ============================================================
 *  简历数据 —— 日常只需要编辑这个文件
 * ============================================================
 * 个人信息、技能、经历、教育、荣誉、项目全部集中在这里。
 * 带 zh / en 两个字段的分别是中文版和英文版，两边都要改。
 *
 * 内容口径：只写可验证的事实（如开源仓库里数得出的模块数、
 * 端点数），不写无法核实的百分比与业务指标。
 */

export type Localized<T> = { zh: T; en: T };

export type IconName = 'sparkles' | 'message' | 'server' | 'terminal';

export interface Project {
  /** 决定详情页地址：/projects/<slug>/ */
  slug: string;
  /** 卡片图标（没有 logo 图片时的兜底） */
  icon: IconName;
  /** 图片 logo（优先于 icon 显示，放 public/logos/ 下） */
  logo?: string;
  period?: Localized<string>;
  status?: Localized<string>;
  title: Localized<string>;
  tagline: Localized<string>;
  description: Localized<string>;
  tech?: string[];
  highlights?: Localized<string[]>;
  links?: {
    live?: string;
    repo?: string;
  };
}

export interface ExperienceItem {
  company: string;
  role: Localized<string>;
  period: string;
  points: Localized<string[]>;
}

export interface EducationItem {
  school: string;
  degree: Localized<string>;
  period: string;
  note?: Localized<string>;
}

export interface SkillGroup {
  name: Localized<string>;
  items: Localized<string[]>;
}

export interface HonorGroup {
  label: Localized<string>;
  items: Localized<string[]>;
}

export const resume = {
  profile: {
    // ⬅️ 对外展示名（真名不上站）
    name: { zh: '啃啃', en: 'Ken' },
    /** 终端风 UI 里的英文代号（打字机 hero 用） */
    handle: 'Kenken',
    role: { zh: '全栈开发者', en: 'Full-stack Developer' },
    openTo: { zh: '求职意向：全栈工程师', en: 'Open to full-stack roles' },
    location: { zh: '福建 · 福州', en: 'Fuzhou, China' },
    intro: {
      zh: '全栈方向：Flutter 多端、React / Next.js、Vue3 都有实际项目落地。参与过从 0 到 1 的 AIGC 商业平台（已上线），维护一个跨平台开源客户端。重视工程规范与隐私脱敏，日常用 AI 工具链提效。',
      en: 'Full-stack developer with real project experience across Flutter, React / Next.js and Vue3. Took part in building an AIGC SaaS platform from zero to launch, and maintain a cross-platform open-source client. I care about engineering discipline and privacy, and lean on AI tooling to move fast.',
    },
    strengths: {
      zh: [
        '方向：Flutter 多端与 React / Next.js 全栈，Vue3 企业后台也写过',
        '有从 0 到 1 的 AIGC 平台经验（已上线），在维护开源客户端 1Panel-Client',
        '习惯单向依赖、模块解耦，交付时补文档、补测试',
        '熟练把 AI 工具链（Cursor / Claude Code 等）融入日常开发流程',
      ],
      en: [
        'Focus: Flutter multi-platform plus React / Next.js full-stack; Vue3 admin panels too',
        'Shipped an AIGC platform from zero to launch; maintaining the open-source 1Panel-Client',
        'Single-direction dependencies, decoupled modules, docs and tests as part of delivery',
        'Comfortable folding AI tooling (Cursor / Claude Code) into the daily workflow',
      ],
    },
    contacts: {
      // ⬅️ 对外公开邮箱
      email: 'contact@iskenkenya.com',
      github: 'https://github.com/IsKenKenYa',
    },
  },

  skillGroups: [
    {
      name: { zh: '前端与跨端', en: 'Frontend & Cross-platform' },
      items: {
        zh: ['React 19 / Next.js', 'Vue3 + Element Plus', 'Flutter 多端（Android / iOS / 鸿蒙）'],
        en: ['React 19 / Next.js', 'Vue3 + Element Plus', 'Flutter (Android / iOS / HarmonyOS)'],
      },
    },
    {
      name: { zh: '后端', en: 'Backend' },
      items: {
        zh: ['Java / Spring Boot / MyBatis-Plus', 'Golang（了解）', 'SpringCloud（了解）'],
        en: ['Java / Spring Boot / MyBatis-Plus', 'Golang (basics)', 'SpringCloud (basics)'],
      },
    },
    {
      name: { zh: '数据库与中间件', en: 'Data & Middleware' },
      items: {
        zh: ['MySQL / PostgreSQL / MongoDB', 'Redis 缓存', 'RabbitMQ（了解）'],
        en: ['MySQL / PostgreSQL / MongoDB', 'Redis caching', 'RabbitMQ (basics)'],
      },
    },
    {
      name: { zh: '工程化', en: 'Engineering' },
      items: {
        zh: [
          'Git 工作流',
          'Docker 部署',
          'GitHub Actions CI/CD',
          'AI 辅助开发（Cursor / Claude Code）',
        ],
        en: [
          'Git workflow',
          'Docker deployment',
          'GitHub Actions CI/CD',
          'AI-assisted development (Cursor / Claude Code)',
        ],
      },
    },
  ] satisfies SkillGroup[],

  experience: [
    {
      company: '福州市骏拓数智科技有限公司',
      role: { zh: '全栈 AI 软件开发工程师（实习）', en: 'Full-stack AI Software Engineer (Intern)' },
      period: '2025.07 – 2025.12',
      points: {
        zh: [
          '参与 AI 标书生成系统前端开发（React 19 + TypeScript + Next.js）：实现 SSE 流式 Markdown 渲染、万级内容虚拟滚动与智能目录生成',
          '承接某车企的小型外包修复：解决 Flutter 应用鸿蒙适配中摄像头分辨率无法动态调整的问题（将修改后的 Flutter 包以本地仓库形式集成）',
          '独立重构企业级即时通讯系统前端（React + TypeScript）：引入虚拟滚动与缓存策略，优化大数据量会话场景',
          '为嵌入式团队提供 RK3588 OpenWrt 定制支持，搭建完整编译链路',
        ],
        en: [
          'Built parts of an AI bid-document system frontend (React 19 + TypeScript + Next.js): SSE streaming Markdown rendering, virtualized lists for 10k+ items, smart outline generation',
          'Shipped a small outsourced fix for a car maker: resolved a Flutter HarmonyOS camera issue (resolution not adjustable at runtime) by integrating the patched Flutter package as a local repository',
          'Rebuilt an enterprise IM web frontend (React + TypeScript) on my own, adding virtual scrolling and caching for large chat histories',
          'Provided RK3588 OpenWrt customization for an embedded team and set up the full build toolchain',
        ],
      },
    },
  ] satisfies ExperienceItem[],

  education: [
    {
      school: '福州软件职业技术学院',
      degree: { zh: '大专 · 软件技术', en: 'Associate degree · Software Technology' },
      period: '2023 – 2026',
      note: {
        zh: '主修：Java / Spring Boot / Vue.js / UML / 软件测试',
        en: 'Coursework: Java / Spring Boot / Vue.js / UML / software testing',
      },
    },
  ] satisfies EducationItem[],

  honors: [
    {
      label: { zh: '学科竞赛', en: 'Competitions' },
      items: {
        zh: ['蓝桥杯', '软件测试竞赛', '软件设计竞赛', '职业技能大赛'],
        en: [
          'Lanqiao Cup (Blue Bridge Cup)',
          'Software Testing Competition',
          'Software Design Competition',
          'Vocational Skills Competition',
        ],
      },
    },
    {
      label: { zh: '校级荣誉', en: 'University honors' },
      items: {
        zh: ['校级奖学金', '校优秀学生', '校优秀干部'],
        en: ['University scholarship', 'Outstanding Student', 'Outstanding Student Leader'],
      },
    },
    {
      label: { zh: '证书', en: 'Certificates' },
      items: {
        zh: ['计算机一级（NCRE）', '计算机二级（NCRE）'],
        en: ['NCRE Level 1', 'NCRE Level 2'],
      },
    },
  ] satisfies HonorGroup[],

  projects: [
    {
      slug: 'visionflow',
      icon: 'sparkles',
      period: { zh: '2025.11 – 2026.04', en: '2025.11 – 2026.04' },
      status: { zh: '已上线 · SaaS 多域名', en: 'Live · SaaS, multiple domains' },
      title: { zh: 'VisionFlow — AI 生图生视频平台', en: 'VisionFlow — AI Image & Video Platform' },
      tagline: {
        zh: '从 0 到 1 并已上线运营的 AIGC 平台',
        en: 'An AIGC platform taken from zero to production',
      },
      description: {
        zh: '参与从 0 到 1 构建多模态 AIGC 平台（文生图 / 文生视频 / 工作流编排），聚焦任务调度、资金安全与商业化闭环。平台已上线，以多域名、多品牌 SaaS 形式运营（另一品牌为图灵 Terln）。',
        en: 'Took part in building a multimodal AIGC platform (text-to-image / text-to-video / workflow orchestration) from zero to launch, focusing on task scheduling, billing safety and commercialization. It now runs as a multi-domain, multi-brand SaaS (another brand: Terln).',
      },
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
      highlights: {
        zh: [
          '任务调度：将任务提交与执行异步解耦，基于分布式队列实现分级调度与优先级控制',
          '计费引擎：实现「冻结 – 确认 – 释放」的余额预授权模型，支撑批量任务计费与异常回滚',
          '模型接入：多供应商智能路由与熔断降级，配合密钥轮询与结果缓存控制调用成本',
          '工程实践：后台监控面板、接口规范与部署文档，支持灰度发布与快速回滚',
        ],
        en: [
          'Task scheduling: decoupled submission from execution with a distributed queue for tiered, prioritized dispatch',
          'Billing engine: a freeze-confirm-release balance pre-authorization model supporting batch billing and rollback on failure',
          'Model integration: multi-provider routing with circuit breakers; key rotation and result caching to keep costs down',
          'Engineering: admin monitoring dashboard, API specs and deploy docs, canary releases with fast rollback',
        ],
      },
      links: {
        live: 'https://visionflow.im',
      },
    },
    {
      slug: 'woowuagent',
      icon: 'sparkles',
      logo: '/logos/woowuagent.png',
      status: { zh: '已上线 · 内部商业项目', en: 'Live · internal commercial product' },
      title: { zh: 'WoowuAgent — AI 创意工作台', en: 'WoowuAgent — AI Creative Workbench' },
      tagline: {
        zh: '挖物（Woowu）旗下 · 基于 Agent 的 AIGC 创作平台',
        en: 'Woowu’s agent-based AIGC creation platform',
      },
      description: {
        zh: '挖物（Woowu）旗下 AI 创作平台（内部商业项目，已上线 wa.woowuclub.com）：在无限画布上与 AI 对话进行创作，对标 Lovart / Canva 的产品形态，数据私有、可私有化部署。',
        en: 'Woowu’s AI creation platform (internal commercial product, live at wa.woowuclub.com): create on an infinite canvas by talking to an agent — a Lovart / Canva-style workspace that is data-private and self-hostable.',
      },
      tech: ['Next.js 15', 'React 19', 'Fastify 5', 'LangGraph', 'Excalidraw', 'BullMQ', 'PostgreSQL'],
      highlights: {
        zh: [
          '对话式画布：基于 Excalidraw 的无限画布，Agent 理解画布上下文，生成 / 编辑 / 排版多轮迭代',
          '多模型矩阵：Imagen、DALL-E、GPT Image 与 Replicate 13+ 图像模型；Veo 3.x、Kling、Sora 等视频生成',
          'Agent 工程：LangGraph ReAct 循环 + deepagents，Redis / BullMQ Worker 承载异步生成任务',
          '商业化与基建：挖豆积分 + LemonSqueezy 订阅、阿里云 OSS / MinIO 双存储适配、SearXNG 双路由联网搜索、Vue 3 后台管理',
        ],
        en: [
          'Conversational canvas: an infinite Excalidraw canvas whose agent understands on-canvas context across multi-turn generate / edit / layout flows',
          'Model matrix: Imagen, DALL-E, GPT Image plus 13+ Replicate image models; video via Veo 3.x, Kling, Sora and more',
          'Agent engineering: LangGraph ReAct loop with deepagents; Redis / BullMQ workers power async generation',
          'Commerce & infra: credits + LemonSqueezy subscriptions, Aliyun OSS / MinIO dual storage, SearXNG dual-route web search, Vue 3 admin console',
        ],
      },
      links: {
        live: 'https://wa.woowuclub.com',
      },
    },
    {
      slug: 'kenfutwork',
      icon: 'terminal',
      logo: '/logos/kenfutwork.png',
      period: { zh: '2026 – 至今', en: '2026 – present' },
      status: { zh: '开发中 · GPL-3.0', en: 'In development · GPL-3.0' },
      title: { zh: 'KenFutWork — BYOK Agent 工作台', en: 'KenFutWork — BYOK Agent Workbench' },
      tagline: {
        zh: '插件化的 Agent 工作台：模型、供应商、技能、插件、MCP 全由自己接',
        en: 'A pluginized agent workbench: bring your own models, providers, skills, plugins and MCP',
      },
      description: {
        zh: '插件化的 BYOK Agent 工作台。Code（编码 Agent，工作目录即项目）与 Design（无限画布）双模式；服务端为插件内核，第三方插件可贡献工具 / 提示段 / HTTP 路由 / UI 面板四类能力。支持本地桌面包（内嵌 Postgres 与运行时，免安装）、Docker 自托管与多租户云端三种部署形态。',
        en: 'A pluginized BYOK agent workbench. Code (coding agent, working directory as project) and Design (infinite canvas) modes; the server is a plugin kernel where third-party plugins contribute tools / prompt fragments / HTTP routes / UI panels. Ships as a local desktop bundle (embedded Postgres + runtimes, zero install), Docker self-hosting, or a multi-tenant cloud.',
      },
      tech: ['Next.js 16', 'React 19', 'Fastify 5', 'LangChain', 'PostgreSQL'],
      highlights: {
        zh: [
          '插件内核：第三方插件以 tools / systemPrompt / routes / ui 四面能力扩展平台，且拿不到内核服务',
          'BYOK 安全：API Key 只写不读，AES-256-GCM 加密落库、日志脱敏、按工作区隔离',
          '双模式与六档执行方式：Code（对话 + 工作目录）与 Design（无限画布创作）',
          '三种部署形态：Windows 桌面包免装 Docker/Node、Docker 自托管、多租户云端（默认禁止第三方插件）',
        ],
        en: [
          'Plugin kernel: third-party plugins extend the platform via tools / systemPrompt / routes / ui, with no access to kernel services',
          'BYOK safety: API keys are write-only — AES-256-GCM encrypted at rest, masked in logs, isolated per workspace',
          'Two modes, six execution styles: Code (chat + working directory) and Design (infinite canvas)',
          'Three deployment forms: zero-install Windows desktop bundle, Docker self-hosting, multi-tenant cloud (third-party plugins off by default)',
        ],
      },
    },
    {
      slug: '1panel-client',
      icon: 'server',
      period: { zh: '2025.12 – 至今', en: '2025.12 – present' },
      status: { zh: '开源 · 持续维护', en: 'Open source · in active development' },
      title: {
        zh: '1Panel-Client 跨平台管理客户端',
        en: '1Panel-Client — Cross-platform Management Client',
      },
      tagline: {
        zh: '开源 · 34 个运维模块 · 425+ API 端点',
        en: 'Open source · 34 modules · 425+ API endpoints',
      },
      description: {
        zh: '面向 1Panel 服务器运维面板的第三方跨平台客户端（开源），支持 Android / iOS / 鸿蒙 / Windows / macOS，覆盖 34 个运维模块、425+ API 端点。',
        en: 'An unofficial cross-platform open-source client for the 1Panel server management panel, covering Android / iOS / HarmonyOS / Windows / macOS with 34 modules and 425+ API endpoints.',
      },
      tech: ['Flutter', 'Dio', 'Provider', 'Retrofit'],
      highlights: {
        zh: [
          '统一网络层：Dio + 认证 / 日志 / 重试 / 业务多层拦截器，实现面板 API 动态签名',
          '按单向依赖拆分 34 个 API 模块，支持自动代码生成与类型安全校验',
          '隐私保护日志：自动脱敏公网 IP、按环境分级输出、支持导出',
          '多端适配：原生桥接、桌面系统托盘、Web CORS 等兼容性处理',
        ],
        en: [
          'Unified networking: Dio with auth / logging / retry / business interceptors and dynamic API signing',
          '34 API modules split by single-direction dependencies, with codegen and type-safe validation',
          'Privacy-first logging: public-IP masking, environment-level output control, export support',
          'Multi-platform fixes: native bridging, desktop system tray, Web CORS and more',
        ],
      },
      links: {
        repo: 'https://github.com/IsKenKenYa/1Panel-Client',
      },
    },
    {
      slug: 'im-migration',
      icon: 'message',
      period: { zh: '2025.07 – 2025.11', en: '2025.07 – 2025.11' },
      title: {
        zh: '某即时通讯应用 uniapp → Flutter 迁移',
        en: 'IM App Migration: uniapp → Flutter',
      },
      tagline: { zh: '客户项目 · 独立交付', en: 'Client project · delivered solo' },
      description: {
        zh: '客户项目：为提升跨端一致性与性能，将即时通讯应用从 uniapp 迁移到 Flutter，独立完成界面与核心业务逻辑的迁移落地，并同步重构安全机制。',
        en: 'Client project: migrated an instant-messaging app from uniapp to Flutter for cross-platform consistency, delivering the UI and core business logic solo while reworking the security layer.',
      },
      tech: ['Flutter', 'Dart', 'uniapp'],
      highlights: {
        zh: [
          '独立完成 uniapp → Flutter 的界面与核心业务逻辑迁移',
          '按设计稿还原 UI，采用虚拟滚动、图片懒加载、WebP 压缩优化加载与渲染',
          '同步推进安全机制的重构升级',
        ],
        en: [
          'Migrated screens and core business logic from uniapp to Flutter on my own',
          'Reproduced the design spec; optimized loading and rendering with virtual scrolling, lazy image loading and WebP compression',
          'Reworked the security mechanisms along the way',
        ],
      },
    },
    {
      slug: 'personal-website',
      icon: 'terminal',
      period: { zh: '2026.09', en: '2026.09' },
      title: { zh: '个人简历网站（本站）', en: 'Personal Website (this site)' },
      tagline: { zh: '你正在看的这个网站', en: 'The site you are looking at' },
      description: {
        zh: '本站：Astro + React + Tailwind CSS 构建的静态简历站，中英双语、终端风界面、支持打印导出 PDF，部署在 GitHub Pages。',
        en: 'This very site: a bilingual static resume built with Astro + React + Tailwind CSS, terminal-style UI, print-to-PDF support, deployed on GitHub Pages.',
      },
      tech: ['Astro', 'React', 'Tailwind CSS', 'TypeScript'],
      highlights: {
        zh: [
          '中英双语路由（Astro 内建 i18n，默认中文、英文挂 /en/）',
          '打印样式表：浏览器「打印 → 存为 PDF」直接导出简历',
          'GitHub Actions 推送即自动构建发布',
        ],
        en: [
          'Bilingual routing via Astro built-in i18n (Chinese default, English under /en/)',
          'Print stylesheet: export to PDF straight from the browser print dialog',
          'Automatic build & deploy on every push via GitHub Actions',
        ],
      },
      links: {
        repo: 'https://github.com/IsKenKenYa/IsKenKenYa.github.io',
      },
    },
  ] satisfies Project[],
};
