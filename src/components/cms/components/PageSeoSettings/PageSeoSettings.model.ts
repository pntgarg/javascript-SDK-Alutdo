import { contentType } from '@optimizely/cms-sdk';

import { OpenGraphContentType } from '../OpenGraph';
import { RobotsBlockContentType } from '../RobotsBlock';
import { TwitterCardDetailsContentType } from '../TwitterCardDetails';

export const PageSeoSettingsContentType = contentType({
  key: 'PageSeoSettings',
  displayName: 'Page SEO Settings',
  baseType: '_component',
  sortOrder: 100,

  properties: {
    MetaTitle: {
      type: 'string',
      format: 'shortString',
      displayName: 'Meta title',
      description: 'Browser Title',
      group: 'SEO',
      sortOrder: -100,
      isRequired: true,
      indexingType: 'searchable',
    },

    MetaDescription: {
      type: 'string',
      displayName: 'Meta description',
      description: 'Recommended length is 160 chars',
      group: 'SEO',
      sortOrder: 0,
      indexingType: 'searchable',
    },

    MetaKeywords: {
      type: 'string',
      displayName: 'Meta Keywords',
      group: 'SEO',
      sortOrder: 0,
    },

    CanonicalUrl: {
      type: 'link',
      displayName: 'Override Canonical Url',
      description: 'Defaults to this page URL.',
      group: 'SEO',
      sortOrder: 30,
    },

    PageAISummary: {
      type: 'richText',
      displayName: 'Page AI Summary',
      group: 'SEO',
      sortOrder: 200,
    },

    OpenGraph: {
      type: 'component',
      contentType: OpenGraphContentType,
      displayName: 'Open Graph Details',
      group: 'SEO',
      sortOrder: 400,
    },

    TwitterCardDetails: {
      type: 'component',
      contentType: TwitterCardDetailsContentType,
      displayName: 'Twitter Card Details',
      group: 'SEO',
      sortOrder: 500,
    },

    Robots: {
      type: 'component',
      contentType: RobotsBlockContentType,
      displayName: 'Robots',
      group: 'SEO',
      sortOrder: 700,
    },
  },
});
