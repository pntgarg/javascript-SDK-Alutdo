import { contentType } from '@optimizely/cms-sdk';

export const NewsPage = contentType({
  key: 'NewsPage2',
  baseType: '_experience',
  displayName: 'News Page',
  description: 'News page with text, sidebar, and sub-navigation.',
  mayContainTypes: ['*'],
  properties: {
    heading: {
      type: 'string',
      displayName: 'Heading',
      isLocalized: true,
      sortOrder: 1,
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
  },
});
