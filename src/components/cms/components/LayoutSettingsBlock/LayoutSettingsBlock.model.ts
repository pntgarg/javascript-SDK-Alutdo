import { contentType } from '@optimizely/cms-sdk';

export const LayoutSettingsBlockContentType = contentType({
  key: 'MainLayoutSettingsBlock',
  displayName: 'Main Application Layout',
  description: 'Create an application layout configuration',
  baseType: '_component',
  sortOrder: 15000,

  properties: {
    HeaderSearchIconToggle: {
      type: 'boolean',
      displayName: 'Disable/Hide Search Icon',
      group: 'header',
      sortOrder: 1,
    },

    layoutsitelogo: {
      type: 'contentReference',
      allowedTypes: ['_image'],
      displayName: 'Logo',
      group: 'header',
      sortOrder: 5,
      isLocalized: true,
    },

    HeaderLogolink: {
      type: 'url',
      displayName: 'Header Logo Link',
      group: 'header',
      sortOrder: 10,
    },

    TopUtilityStripDisable: {
      type: 'boolean',
      displayName: 'Disable Top Utility Strip',
      group: 'header',
      sortOrder: 30,
    },

    TopUtilityStrip: {
      type: 'array',
      displayName: 'Top Utility Strip',
      group: 'header',
      sortOrder: 40,
      items: {
        type: 'link',
      },
    },

    GlobalSearchTitle: {
      type: 'string',
      displayName: 'Global Search Title',
      group: 'header',
      sortOrder: 100,
    },

    GlobalAutoCompleteError: {
      type: 'string',
      displayName: 'Global Auto Complete Error',
      group: 'header',
      sortOrder: 110,
    },

    GlobalSearchPlaceholder: {
      type: 'string',
      displayName: 'Global Search Placeholder',
      group: 'header',
      sortOrder: 120,
    },

    FooterLogo: {
      type: 'contentReference',
      allowedTypes: ['_image'],
      displayName: 'Footer Logo',
      description: 'Logo used in the footer',
      group: 'footer',
      sortOrder: 10,
    },

    FooterLogoLink: {
      type: 'link',
      displayName: 'Footer Logo Link',
      description: 'Link for the footer logo',
      group: 'footer',
      sortOrder: 5,
    },

    FooterDescription: {
      type: 'richText',
      displayName: 'Footer Description',
      description: 'Description used in the footer',
      group: 'footer',
      sortOrder: 20,
    },

    FooterLink: {
      type: 'link',
      displayName: 'Footer Brand Link',
      description: 'Brand link used in the footer',
      group: 'footer',
      sortOrder: 30,
    },

    copyright: {
      type: 'richText',
      displayName: 'Disclaimer/Legal Text',
      group: 'footer',
      sortOrder: 100,
    },

    FooterSocialTitle: {
      type: 'string',
      displayName: 'Social Title',
      group: 'footer',
      sortOrder: 150,
    },

    appIdentifiers: {
      type: 'string',
      displayName: 'Application ID or Domain',
      group: 'settings',
      sortOrder: 999,
      indexingType: 'queryable',
      isLocalized: true,
    },
  },
});