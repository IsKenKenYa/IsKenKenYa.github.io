// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages 用户站点：https://iskenkenya.github.io
  site: 'https://iskenkenya.github.io',

  integrations: [react()],

  // 中英双语：中文为默认语言（根路径），英文挂在 /en/ 下
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: { prefixDefaultLocale: false },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
