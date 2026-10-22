import { contentType } from '@optimizely/cms-sdk';

export const EventCardComponent = contentType({
  key: 'EventCardComponent',
  displayName: 'Event Card',
  baseType: '_component',
  properties: {
    heading: {
      type: 'string',
    },
    location: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    link: {
      type: 'contentReference',
      allowedTypes: ['_page', '_experience'],
    },
  },
});
