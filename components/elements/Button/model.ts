import { contentType, displayTemplate } from '@optimizely/cms-sdk';

export const ButtonComponent = contentType({
  key: 'ButtonElement',
  baseType: '_component',
  compositionBehaviors: ['elementEnabled'],
  displayName: 'Button',
  description: 'Button element.',
  properties: {
    label: {
      type: 'string',
      displayName: 'Label',
      isLocalized: true,
      sortOrder: 1,
    },
    link: {
      type: 'url',
      displayName: 'Link',
      sortOrder: 2,
    },
  },
});

export const ButtonDisplayTemplate = displayTemplate({
  key: 'ButtonStyles',
  isDefault: true,
  displayName: 'Button styles',
  contentType: 'ButtonElement',
  settings: {
    variant: {
      editor: 'select',
      sortOrder: 1,
      displayName: 'Variant',
      choices: {
        default: { displayName: 'Default', sortOrder: 1 },
        primary: { displayName: 'Primary', sortOrder: 2 },
        outline: { displayName: 'Outline', sortOrder: 3 },
      },
    },
  },
});
