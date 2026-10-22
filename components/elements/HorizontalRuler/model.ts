import { contentType } from '@optimizely/cms-sdk';

export const HorizontalRulerComponent = contentType({
  key: 'HorizontalRulerElement',
  baseType: '_component',
  compositionBehaviors: ['elementEnabled'],
  displayName: 'Horizontal Ruler',
  description: 'Horizontal ruler with labels.',
  properties: {
    topLabel: {
      type: 'string',
      displayName: 'Top Label',
      isLocalized: true,
      sortOrder: 1,
    },
    sideLabel: {
      type: 'string',
      displayName: 'Side Label',
      isLocalized: true,
      sortOrder: 2,
    },
  },
});
