import { contentType } from '@optimizely/cms-sdk';

import { PageSeoSettingsContentType } from '../../components/PageSeoSettings';
import { TeaserBlockContentType } from '../../components/TeaserBlock';

export const JsBlankExperienceContentType = contentType({
  key: 'JsBlankExperience',
  displayName: 'JS SDK Blank Experience',
  description: 'An experience without a predefined layout.',
  baseType: '_experience',
  sortOrder: 0,
  mayContainTypes: ['*'],

  properties: {
    SeoSettings: {
      type: 'component',
      contentType: PageSeoSettingsContentType,
      displayName: 'Seo Settings',
      group: 'SeoSettings',
      sortOrder: 0,
    },

    Teaser: {
      type: 'component',
      contentType: TeaserBlockContentType,
      displayName: 'Teaser',
      group: 'TeaserDetails',
      sortOrder: 0,
    },

    showbreadcrumb: {
      type: 'boolean',
      displayName: 'Show Breadcrumb',
      group: 'content',
      sortOrder: 5,
      isLocalized: true,
    },

    PageContent: {
      type: 'richText',
      displayName: 'Page Content',
      description: 'Migration body HTML from Sitecore',
      group: 'content',
      sortOrder: 10,
    },
  },
});
