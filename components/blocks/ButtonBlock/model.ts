import { contentType } from '@optimizely/cms-sdk';

export const ButtonBlock = contentType({
  key: 'ButtonBlock',
  baseType: '_component',
  compositionBehaviors: ['sectionEnabled', 'elementEnabled'],
  displayName: 'Button',
  description: 'Button used in the application header.',
  properties: {
    isrightarrowbutton: {
      type: 'boolean',
      displayName: 'Show Right Arrow',
      sortOrder: 10,
      isLocalized: false,
    },
    ButtonText: {
      type: 'string',
      format: 'shortString',
      displayName: 'Text',
      sortOrder: 20,
      isLocalized: true,
    },
    ButtonUrl: {
      type: 'url',
      displayName: 'Link',
      sortOrder: 30,
      isLocalized: true,
    },
    ButtonType: {
      type: 'string',
      format: 'selectOne',
      displayName: 'Button type',
      sortOrder: 40,
      isLocalized: true,
      isRequired: true,
      enum: [
        { value: 'primary', displayName: 'Primary' },
        { value: 'secondary', displayName: 'Secondary' },
        { value: 'outline', displayName: 'NewsListing' },
        { value: 'link', displayName: 'Link' },
      ],
    },
  },
});
