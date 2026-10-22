import { contentType } from '@optimizely/cms-sdk';

export const ImageComponent = contentType({
  key: 'ImageElement',
  baseType: '_component',
  compositionBehaviors: ['elementEnabled'],
  displayName: 'Image',
  description: 'Image',
  properties: {
    image: {
      type: 'contentReference',
      allowedTypes: ['_image'],
      displayName: 'Image',
      sortOrder: 1,
    },
    alternativeText: {
      type: 'string',
      displayName: 'Alternative Text',
      sortOrder: 2,
    },
  },
});
