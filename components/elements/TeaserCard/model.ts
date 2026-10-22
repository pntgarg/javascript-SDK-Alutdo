import { contentType } from '@optimizely/cms-sdk';

export const TeaserCardComponent = contentType({
  key: 'TeaserCardComponent',
  displayName: 'Teaser Card',
  baseType: '_component',
  properties: {
    heading: {
      type: 'string',
      displayName: 'Teaser Text',
    },
    description: {
      type: 'string',
      displayName: 'Teaser Description',
    },
    image: {
      type: 'contentReference',
      displayName: 'Teaser Image',
      allowedTypes: ['_image'],
    },
    link: {
      type: 'contentReference',
      allowedTypes: ['_page', '_experience'],
    },
  },
});
