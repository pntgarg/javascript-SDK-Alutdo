import { contentType } from '@optimizely/cms-sdk';

export const HeroSection = contentType({
  key: 'HeroSection',
  baseType: '_section',
  displayName: 'Hero Section',
  description: 'Hero section with support for video background',
  properties: {
    video: {
      type: 'contentReference',
      allowedTypes: ['_video'],
      displayName: 'Video',
      sortOrder: 1,
    },
  },
});
