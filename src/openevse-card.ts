import {CustomCard} from './custom-card';
import {CustomCardEditor} from './custom-card-editor';

// Register the custom card
customElements.define('openevse-card', CustomCard);
customElements.define('openevse-card-editor', CustomCardEditor);

// Register with Home Assistant
window.customCards = window.customCards || [];
window.customCards.push({
    type: 'openevse-card',
    name: 'OpenEVSE Card',
    preview: true,
    description: 'A custom card for OpenEVSE',
    documentationURL: 'https://github.com/KipK/openevse-card/blob/main/README.md'
});

// Augment the global Window interface to include customCards
declare global {
    interface Window {
        customCards: Array<{
            type: string;
            name: string;
            preview: boolean;
            description: string;
            documentationURL: string;
        }>;
    }
}
