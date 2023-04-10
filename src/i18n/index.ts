// group: lang
import en from './langs/en';
import id from './langs/id';

interface KeyType {
  [key: string]: string;
}

const i18n = (text: string, locale?: string) => {
  let langs: KeyType = {};
  let lang: string = '';

  if (locale === 'en-US') langs = en;
  else if (locale === 'id-ID') langs = id;

  lang = langs[text!];

  return lang;
};

export default i18n;
