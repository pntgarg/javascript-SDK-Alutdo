import { contentType, displayTemplate } from '@optimizely/cms-sdk';

export const HeadingComponent = contentType({
  key: 'HeadingElement',
  baseType: '_component',
  compositionBehaviors: ['elementEnabled'],
  displayName: 'Heading',
  description: 'Heading element with an optional icon.',
  properties: {
    heading: {
      type: 'string',
      displayName: 'Heading',
      isLocalized: true,
      sortOrder: 1,
    },
  },
});

export const HeadingDisplayTemplate = displayTemplate({
  key: 'HeadingStyles',
  isDefault: true,
  displayName: 'Heading styles',
  contentType: 'HeadingElement',
  settings: {
    level: {
      editor: 'select',
      displayName: 'Level',
      sortOrder: 1,
      choices: {
        default: { displayName: 'Default', sortOrder: 1 },
        h2: { displayName: 'H2', sortOrder: 2 },
        h3: { displayName: 'H3', sortOrder: 3 },
        h4: { displayName: 'H4', sortOrder: 4 },
        h5: { displayName: 'H5', sortOrder: 5 },
      },
    },
    icon: {
      editor: 'select',
      displayName: 'Icon',
      sortOrder: 2,
      choices: {
        default: { displayName: 'No icon', sortOrder: 1 },
        check: { displayName: 'Check', sortOrder: 2 },
        checkCheck: { displayName: 'Double Check', sortOrder: 3 },
        globe: { displayName: 'Globe', sortOrder: 4 },
        flag: { displayName: 'Flag', sortOrder: 5 },
        sparkles: { displayName: 'Sparkles', sortOrder: 6 },
        wallet: { displayName: 'Wallet', sortOrder: 7 },
      },
    },
  },
});
