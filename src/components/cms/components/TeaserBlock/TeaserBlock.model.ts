import { contentType } from '@optimizely/cms-sdk';

export const TeaserBlockContentType = contentType({
  key: 'TeaserBlock',
  displayName: 'Teaser Block',
  description: 'Block used for teasers with image, text and link',
  baseType: '_component',

  properties: {
    eyebrow: {
      type: 'string',
      displayName: 'Eyebrow',
      description: 'Short text displayed above the teaser title',
      group: 'content',
    },

    title: {
      type: 'string',
      displayName: 'Title',
      description: 'Main teaser title',
      group: 'content',
    },

    description: {
      type: 'string',
      displayName: 'Description',
      description: 'Short teaser description',
      group: 'content',
    },

    image: {
      type: 'contentReference',
      displayName: 'Image',
      description: 'Image displayed with the teaser',
      group: 'content',
      allowedTypes: ['_image'],
    },

    url: {
    type: 'url',
    displayName: 'URL',
    description: 'Page or external URL opened when the teaser is selected.',
    group: 'content',
    sortOrder: 50,
  },

  },
});