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

export const AboutUsPageContentType = contentType({
  key: 'AboutUsPage',
  displayName: 'About Us Page',
  description:
    'About Us page containing introductory text and flexible components.',
  baseType: '_page',

  properties: {
    heroBannerContentArea: {
      type: 'array',
      displayName: 'Hero Banner Content Area',
      description: 'Hero banner components displayed on the About Us page.',
      group: 'content',

      items: {
        type: 'content',
        allowedTypes: [
          PageTitleHeroBannerContentType          
        ],
      },
    },

    mainTextContent: {
      type: 'richText',
      displayName: 'Main Text Content',
      description: 'Main rich-text content displayed on the page.',
      group: 'content',
    },

    mainContentArea: {
      type: 'array',
      displayName: 'Main Content Area',
      description: 'Components displayed on the About Us page.',
      group: 'content',

      items: {
        type: 'content',
        allowedTypes: [
          PageTitleHeroBannerContentType          
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
      group: 'SEO',
      sortOrder: 700,
    },
  },
});
