import zhCN from './zh-CN';

const locales = {
  'zh-CN': zhCN,
} as const;

export type LocaleCode = keyof typeof locales;
export type LocaleMessages = (typeof locales)[LocaleCode];
export type TranslateParams = Record<string, string | number | boolean | null | undefined>;

export const DEFAULT_LOCALE: LocaleCode = 'zh-CN';

function formatMessage(template: string, params: TranslateParams = {}) {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key: string) => String(params[key] ?? ''));
}

function getByPath(target: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((current, key) => {
    if (current && typeof current === 'object' && key in current) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, target);
}

export function getLocaleMessages(locale: LocaleCode = DEFAULT_LOCALE) {
  return locales[locale];
}

export function t(
  path: string,
  params: TranslateParams = {},
  locale: LocaleCode = DEFAULT_LOCALE,
): string {
  const value = getByPath(locales[locale], path);
  if (typeof value === 'function') {
    return String((value as (input: TranslateParams) => string)(params));
  }
  if (typeof value === 'string') {
    return formatMessage(value, params);
  }
  throw new Error(`未找到语言文案：${path}`);
}
