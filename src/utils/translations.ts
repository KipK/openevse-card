import translationsData from '../translations'; // Assuming translations.ts is in the parent directory
import {TranslationDict} from '../types';

// Cast the imported data to the correct type
const translations: TranslationDict = translationsData;

/**
 * Translates a given key using the provided language.
 * Falls back to English if the key is not found in the specified language.
 * Returns the key itself if not found in English either.
 *
 * @param key - The translation key (case-insensitive).
 * @param lang - The target language code (e.g., "en", "fr"). Defaults to "en".
 * @returns The translated string or the key itself.
 */
export function localize(key: string, lang: string = 'en'): string {
    const lowerKey = key.toLowerCase();

    // Try the specified language first
    if (lang in translations && lowerKey in translations[lang]) {
        return translations[lang][lowerKey];
    }

    // Fallback to English
    if ('en' in translations && lowerKey in translations['en']) {
        return translations['en'][lowerKey];
    }

    // Return the key if no translation is found
    return key;
}
