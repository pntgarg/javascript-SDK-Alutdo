import { contentType } from '@optimizely/cms-sdk';
import { EventCardComponent } from '../../elements/EventCard/model';

export const EventCardsListContentType = contentType({
  key: 'EventCardsList',
  displayName: 'Event Cards List',
  baseType: '_component',
  description: 'Component for rendering list of events.',
  properties: {
    title: {
      type: 'string',
      displayName: 'Title',
    },
    events: {
      type: 'array',
      items: {
        type: 'content',
        allowedTypes: [EventCardComponent],
      },
      displayName: 'List of events',
    },
  },
  compositionBehaviors: ['sectionEnabled'],
});
