import { contentType } from '@optimizely/cms-sdk';

export const ImageCardComponent = contentType({
  key: 'ImageCardElement',
  baseType: '_component',
  compositionBehaviors: ['elementEnabled'],
  displayName: 'Image Card',
  description: 'Card with support for image and call to action',
  properties: {
    image: {
      type: 'contentReference',
      allowedTypes: ['_image'],
      displayName: 'Image',
      sortOrder: 1,
    },
    eyebrow: {
      type: 'string',
      displayName: 'Eyebrow',
      isLocalized: true,
      sortOrder: 2,
    },
    title: {
      type: 'string',
      displayName: 'Title',
      isLocalized: true,
      sortOrder: 3,
    },
    icon: {
      type: 'string',
      format: 'selectOne',
      displayName: 'Icon',
      sortOrder: 4,
      enum: [
        { value: 'default', displayName: 'No icon' },
        { value: 'check', displayName: 'Check' },
        { value: 'checkCheck', displayName: 'Double Check' },
        { value: 'globe', displayName: 'Globe' },
        { value: 'flag', displayName: 'Flag' },
        { value: 'sparkles', displayName: 'Sparkles' },
        { value: 'wallet', displayName: 'Wallet' },
      ],
    },
    link: {
      type: 'url',
      displayName: 'Link',
      isrequired: true,
      isLocalized: true,
      sortOrder: 5,
    },
  },
});
