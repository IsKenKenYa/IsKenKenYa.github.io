/**
 * 站点界面文案（按钮、导航、标题等）
 * 中英各一份。简历正文内容不在这里，去 src/data/resume.ts。
 */

export const languages = {
  zh: '中文',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'zh';

export const ui = {
  zh: {
    'site.title': '啃啃 · 个人简历',
    'nav.home': '首页',
    'nav.projects': '项目',
    'action.print': '打印 / 导出 PDF',
    'section.about': '关于我',
    'section.skills': '技能',
    'section.experience': '工作经历',
    'section.projects': '项目作品',
    'section.education': '教育经历',
    'project.backHome': '返回首页',
    'project.overview': '项目简介',
    'project.highlights': '主要工作',
    'project.techStack': '技术栈',
    'project.viewOnline': '在线访问',
    'project.sourceCode': '源代码',
    'footer.built': '使用 Astro 构建',
    'notFound.title': '页面不存在',
    'notFound.back': '返回首页',
  },
  en: {
    'site.title': 'Ken · Resume',
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'action.print': 'Print / Save as PDF',
    'section.about': 'About',
    'section.skills': 'Skills',
    'section.experience': 'Experience',
    'section.projects': 'Projects',
    'section.education': 'Education',
    'project.backHome': 'Back to home',
    'project.overview': 'Overview',
    'project.highlights': 'Highlights',
    'project.techStack': 'Tech Stack',
    'project.viewOnline': 'Live site',
    'project.sourceCode': 'Source code',
    'footer.built': 'Built with Astro',
    'notFound.title': 'Page not found',
    'notFound.back': 'Back to home',
  },
} satisfies Record<Lang, Record<string, string>>;

export type UiKey = keyof (typeof ui)[typeof defaultLang];
