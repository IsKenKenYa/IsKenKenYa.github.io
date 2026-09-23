/**
 * ============================================================
 *  简历数据 —— 日常只需要编辑这个文件
 * ============================================================
 * 个人信息、技能、经历、教育、项目全部集中在这里。
 * 带 zh / en 两个字段的分别是中文版和英文版，两边都要改。
 * ⚠️ 目前全部是占位内容，请替换成你的真实信息。
 */

export type Localized<T> = { zh: T; en: T };

export interface Project {
  /** 决定详情页地址：/projects/<slug>/ */
  slug: string;
  title: Localized<string>;
  tagline: Localized<string>;
  description: Localized<string>;
  tech: string[];
  highlights: Localized<string[]>;
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
}

export interface SkillGroup {
  name: Localized<string>;
  items: string[];
}

export const resume = {
  profile: {
    // ⬅️ 你的名字
    name: { zh: '啃啃', en: 'Ken' },
    // ⬅️ 一句话头衔
    role: { zh: '全栈开发者（占位）', en: 'Full-stack Developer (placeholder)' },
    location: { zh: '中国 · 城市（占位）', en: 'City, China (placeholder)' },
    // ⬅️ 自我介绍：两三句话，说明你是谁、擅长什么、在做什么
    intro: {
      zh: '这里是自我介绍的占位文字。写两三句话：你是谁、擅长什么方向、最近在做什么。修改本段请编辑 src/data/resume.ts。',
      en: 'This is a placeholder intro. Two or three sentences: who you are, what you are good at, and what you are working on. Edit src/data/resume.ts to change it.',
    },
    contacts: {
      // ⬅️ 换成你的真实邮箱
      email: 'hello@example.com',
      github: 'https://github.com/IsKenKenYa',
    },
  },

  skillGroups: [
    {
      name: { zh: '前端', en: 'Frontend' },
      items: ['React', 'Astro', 'TypeScript', 'Tailwind CSS'],
    },
    {
      name: { zh: '后端', en: 'Backend' },
      items: ['Node.js（占位）'],
    },
    {
      name: { zh: '工具', en: 'Tools' },
      items: ['Git', 'pnpm', 'GitHub Actions'],
    },
  ] satisfies SkillGroup[],

  experience: [
    {
      // ⬅️ 公司/团队名
      company: '某某科技（占位）',
      role: { zh: '前端开发实习生', en: 'Frontend Engineer Intern' },
      period: '2025.06 – 2025.12',
      points: {
        zh: [
          '负责某某模块（占位）：用一句话讲清楚你做了什么、带来了什么效果。',
          '第二条经历占位：能量化就量化，比如「首屏时间减少 40%」。',
        ],
        en: [
          'Placeholder point one: say what you did and what impact it had.',
          'Placeholder point two: quantify when possible, e.g. "cut TTFB by 40%".',
        ],
      },
    },
  ] satisfies ExperienceItem[],

  education: [
    {
      // ⬅️ 学校与专业
      school: '某某大学（占位）',
      degree: { zh: '本科 · 计算机科学与技术', en: 'B.Sc. in Computer Science' },
      period: '2021 – 2025',
    },
  ] satisfies EducationItem[],

  projects: [
    {
      slug: 'personal-website',
      title: { zh: '个人简历网站', en: 'Personal Website' },
      tagline: { zh: '你正在看的这个网站', en: 'The site you are looking at' },
      description: {
        zh: '本站：Astro + React + Tailwind CSS 构建的静态简历站，中英双语，支持打印导出 PDF，部署在 GitHub Pages。',
        en: 'This very site: a bilingual static resume built with Astro + React + Tailwind CSS, deployed on GitHub Pages, with print-to-PDF support.',
      },
      tech: ['Astro', 'React', 'Tailwind CSS', 'TypeScript'],
      highlights: {
        zh: [
          '中英双语路由（Astro 内建 i18n，默认中文、英文挂 /en/）',
          '打印样式表：浏览器「打印 → 存为 PDF」即可导出简历',
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
    {
      slug: 'course-project',
      title: { zh: '课程作业网站（占位）', en: 'Course Project (placeholder)' },
      tagline: { zh: '从这里起步', en: 'Where it all started' },
      description: {
        zh: '把你的课程作业或早期项目搬进来：它做了什么、你负责什么、学到什么。这也是来时路的一部分。',
        en: 'Move your coursework or early projects here: what it does, what you were responsible for, what you learned. Part of the journey.',
      },
      tech: ['HTML', 'CSS', 'JavaScript'],
      highlights: {
        zh: ['占位亮点一：一句话讲清楚一件事', '占位亮点二：有数据就放数据'],
        en: ['Placeholder highlight one', 'Placeholder highlight two'],
      },
    },
  ] satisfies Project[],
};
