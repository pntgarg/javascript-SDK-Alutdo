import { contentType } from '@optimizely/cms-sdk';

export const RichTextComponent = contentType({
  key: 'RichTextElement',
  baseType: '_component',
  compositionBehaviors: ['elementEnabled'],
  displayName: 'Rich Text',
  description: 'Formattable text.',
  properties: {
    body: {
      type: 'richText',
      displayName: 'Body',
      isLocalized: true,
      sortOrder: 1,
      editorSettings: {
        preset: 'minimal',
      },
    },
  },
});
