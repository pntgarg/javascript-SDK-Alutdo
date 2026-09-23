import { contentType } from '@optimizely/cms-sdk';

export const RobotsBlockContentType = contentType({
  key: 'RobotsBlock',
  displayName: 'Robots Block',
  baseType: '_component',
  sortOrder: 0,

  properties: {
    Index: {
      type: 'string',
      format: 'selectOne',
      displayName: 'Index/NoIndex',
      group: 'SEO',
      sortOrder: 0,
      enum: [
        {
          value: 'index',
          displayName: 'Index',
        },
        {
          value: 'noindex',
          displayName: 'NoIndex',
        },
      ],
    },

    Follow: {
      type: 'string',
      format: 'selectOne',
      displayName: 'Follow/NoFollow',
      group: 'SEO',
      sortOrder: 0,
      enum: [
        {
          value: 'follow',
          displayName: 'Follow',
        },
        {
          value: 'nofollow',
          displayName: 'NoFollow',
        },
      ],
    },
  },
});
