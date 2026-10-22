import { contentType } from '@optimizely/cms-sdk';

export const StandardPage = contentType({
  key: 'StandardPage',
  baseType: '_page',
  displayName: 'Standard Page',
  description: 'Page with text, sidebar, and sub-navigation.',
  mayContainTypes: ['*'],
  properties: {
    heading: {
      type: 'string',
      displayName: 'Heading',
      isLocalized: true,
      sortOrder: 1,
    },
    intro: {
      type: 'richText',
      displayName: 'Introduction',
      isLocalized: true,
      sortOrder: 2,
      editorSettings: {
        preset: 'minimal',
      },
    },
    body: {
      type: 'richText',
      displayName: 'Body',
      isLocalized: true,
      sortOrder: 3,
      editorSettings: {
        preset: 'expanded',
      },
    },
    extras: {
      type: 'array',
      items: {
        type: 'content',
        allowedTypes: ['_component', '_experience'],
      },
    },
  },
});
