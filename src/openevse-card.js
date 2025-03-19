import {CustomCard} from './custom-card.js';
import {CustomCardEditor} from './custom-card-editor.js';

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
