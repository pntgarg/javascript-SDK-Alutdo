import { contentType } from '@optimizely/cms-sdk';

export const VideoComponent = contentType({
  key: 'VideoElement',
  baseType: '_component',
  compositionBehaviors: ['elementEnabled'],
  displayName: 'Video',
  description: 'Video',
  properties: {
    video: {
      type: 'contentReference',
      allowedTypes: ['_video'],
      displayName: 'Video',
      sortOrder: 1,
    },
    autoplay: {
      type: 'boolean',
      displayName: 'Autoplay',
      sortOrder: 2,
    },
  },
});
