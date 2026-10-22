import { contentType } from '@optimizely/cms-sdk';
import { EyebrowComponent } from '../../blocks/Eyebrow/model';

export const ProductPage = contentType({
  key: 'ProductPage',
  baseType: '_experience',
  displayName: 'Product Page',
  description: 'Page with hero, text, and sidebar.',
  mayContainTypes: ['*'],
  properties: {
    heading: {
      type: 'string',
      displayName: 'Heading',
      isLocalized: true,
      sortOrder: 1,
    },
    eyebrow: {
      type: 'component',
      contentType: EyebrowComponent,
      displayName: 'Eyebrow',
      sortOrder: 2,
    },
    intro: {
      type: 'richText',
      displayName: 'Introduction',
      isLocalized: true,
      sortOrder: 3,
      editorSettings: {
        preset: 'minimal',
      },
    },
    backgroundImage: {
      type: 'contentReference',
      allowedTypes: ['_image'],
      displayName: 'Background image',
      isLocalized: false,
      sortOrder: 4,
    },
    body: {
      type: 'richText',
      displayName: 'Body',
      isLocalized: true,
      sortOrder: 5,
      editorSettings: {
        preset: 'expanded',
      },
    },
  },
});
