import { contentType } from '@optimizely/cms-sdk';

import {
  PageTitleHeroBannerContentType,
} from '../../components/PageTitleHeroBanner';
import {
  TeaserBlockContentType,
} from '../../components/TeaserBlock';
import {
  PageSeoSettingsContentType,
} from '../../components/PageSeoSettings';

export const JsLandingPageContentType = contentType({
  key: 'JsLandingPage',
  displayName: 'JS Landing Page',
  description:
    'Landing page with hero, introductory text, and left/right content areas.',
  baseType: '_page',

  properties: {
    heroBannerContentArea: {
      type: 'array',
      displayName: 'Hero Banner Content Area',
      description: 'Hero banner components displayed on the landing page.',
      group: 'content',
      sortOrder: 10,

      items: {
        type: 'content',
        allowedTypes: [
          PageTitleHeroBannerContentType,
        ],
      },
    },

    mainTextContent: {
      type: 'richText',
      displayName: 'Main Text Content',
      description: 'Main rich-text content displayed on the page.',
      group: 'content',
      sortOrder: 20,
    },

    leftContentArea: {
      type: 'array',
      displayName: 'Left Content Area',
      description: 'Components displayed in the left column.',
      group: 'content',
      sortOrder: 30,

      items: {
        type: 'content',
        allowedTypes: [
          PageTitleHeroBannerContentType,
        ],
      },
    },

    rightContentArea: {
      type: 'array',
      displayName: 'Right Content Area',
      description: 'Components displayed in the right column.',
      group: 'content',
      sortOrder: 40,

      items: {
        type: 'content',
        allowedTypes: [
          PageTitleHeroBannerContentType,
        ],
      },
    },

    SeoSettings: {
      type: 'component',
      contentType: PageSeoSettingsContentType,
      displayName: 'SEO Settings',
      description: 'Page-level SEO metadata and robots settings.',
      group: 'SEO',
      sortOrder: 100,
    },

    Teaser: {
      type: 'component',
      contentType: TeaserBlockContentType,
      displayName: 'Teaser',
      group: 'TeaserDetails',
      sortOrder: 700,
    },
  },
});
