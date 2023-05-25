import polyglotI18nProvider from 'ra-i18n-polyglot';
import {fr} from './i18n/fr';
import {en} from './i18n/en'
import {ru} from './i18n/ru'

import { TranslationMessages } from 'react-admin';


const translations : { [key: string]: TranslationMessages } = { en, fr, ru };

export const i18nProvider = polyglotI18nProvider(
    locale => translations[locale],
    'en', // default locale
    [{ locale: 'en', name: 'English' }, { locale: 'fr', name: 'Français' }, { locale: 'ru', name: 'Русский' }],
);

