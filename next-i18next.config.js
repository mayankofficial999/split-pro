import path from 'node:path';

/** @type {import('next-i18next').UserConfig} */
const config = {
  i18n: {
    defaultLocale: 'default',
    locales: ['default', 'en', 'de', 'it', 'pl', 'pt', 'sv', 'es-MX', 'es-AR'],
    localeDetection: false,
  },
  localePath: path.resolve('./public/locales'),
  fallbackLng: 'en',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};

export default config;
