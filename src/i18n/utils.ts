import { defaultLang, languages, ui, type Lang, type UiKey } from './ui';

/** 从 URL 判断当前语言：/en/... → 'en'，其余（根路径）→ 默认中文 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  return lang in languages ? (lang as Lang) : defaultLang;
}

/** 返回取文案函数：t('nav.home') */
export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui[defaultLang][key];
}
