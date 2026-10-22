import { contentType } from '@optimizely/cms-sdk';

export const EyebrowComponent = contentType({
  key: 'EyebrowComponent',
  baseType: '_component',
  displayName: 'Eyebrow',
  description: 'Eyebrow with text and icon.',
  properties: {
    eyebrow: {
      type: 'string',
      displayName: 'Eyebrow',
      isLocalized: true,
      sortOrder: 1,
    },
    icon: {
      type: 'string',
      format: 'selectOne',
      displayName: 'Icon',
      sortOrder: 2,
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
  },
});
