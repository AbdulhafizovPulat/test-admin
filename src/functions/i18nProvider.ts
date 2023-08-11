import polyglotI18nProvider from 'ra-i18n-polyglot';
import {en} from '../i18n/en'
import {ru} from '../i18n/ru'
import {uzc} from '../i18n/uzc'

import { TranslationMessages } from 'react-admin';


const translations : { [key: string]: TranslationMessages } = { en, ru, uzc };

export const i18nProvider = polyglotI18nProvider(
    locale => translations[locale],
    'en', // default locale
    [{ locale: 'en', name: 'English' }, { locale: 'ru', name: 'Русский' }, { locale: 'uzc', name: 'Узбекский' }],
);

