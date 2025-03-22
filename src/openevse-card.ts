import { CustomCard } from './custom-card';
import { CustomCardEditor } from './custom-card-editor';

// Register the custom card
customElements.define('openevse-card', CustomCard);
customElements.define('openevse-card-editor', CustomCardEditor);

// Register with Home Assistant
window.customCards = window.customCards || [];
window.customCards.push({
    type: 'openevse-card',
    name: 'OpenEVSE Card',
    description: 'A custom card for OpenEVSE',
});

// Add this to make TypeScript happy with the customCards property
declare global {
    interface Window {
        customCards: Array<{
            type: string;
            name: string;
            description: string;
        }>;
    }
}
