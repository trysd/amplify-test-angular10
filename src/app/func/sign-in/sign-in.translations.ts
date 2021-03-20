import { Translations } from '@aws-amplify/ui-components';
import { I18n } from 'aws-amplify';

/** 翻訳内容 */
export const vocabularies = {
  ja: {
    [Translations.SIGN_IN_HEADER_TEXT]: 'Welcome To Amplify',
  },
};
I18n.putVocabularies(vocabularies);
I18n.setLanguage('ja');
