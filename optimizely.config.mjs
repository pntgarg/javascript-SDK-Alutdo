import { buildConfig } from '@optimizely/cms-sdk';

export default buildConfig({
  components: [
    './src/components/cms/pages/**/*.model.ts',
    './src/components/cms/components/**/*.model.ts',
    './src/components/cms/experiences/**/*.model.ts',
    './src/cms/contracts/**/*.contract.ts',
  ],

  propertyGroups: [
    {
      key: 'SEO',
      displayName: 'SEO',
      sortOrder: 30,
    },
    {
      key: 'SeoSettings',
      displayName: 'Seo Settings',
      sortOrder: 35,
    },
    {
      key: 'TeaserDetails',
      displayName: 'Teaser Details',
      sortOrder: 36,
    },
    {
      key: 'header',
      displayName: 'Header',
      sortOrder: 40,
    },
    {
      key: 'footer',
      displayName: 'Footer',
      sortOrder: 50,
    },
  ],
});
