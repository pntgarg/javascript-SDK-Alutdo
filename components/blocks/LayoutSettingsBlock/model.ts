import { contentType } from '@optimizely/cms-sdk';
import { ButtonBlock } from '../ButtonBlock/model';
import { MegaMenuGroupBlock } from '../MegaMenuGroupBlock/model';
import { MenuNavigationBlock } from '../MenuNavigationBlock/model';

export const LayoutSettingsBlock = contentType({
  key: 'LayoutSettingsBlock',
  baseType: '_component',
  displayName: 'Application layout',
  description: 'Create an application layout configuration',
  sortOrder: 15000,
  compositionBehaviors: [],
  mayContainTypes: [],
  properties: {
    mainMenu: {
      type: 'array',
      displayName: 'Main Menu',
      group: 'header',
      sortOrder: 0,
      isLocalized: true,
      maxItems: 8,
      items: {
        type: 'content',
        allowedTypes: [MegaMenuGroupBlock],
      },
    },
    layoutsitelogo: {
      type: 'contentReference',
      displayName: 'Logo',
      group: 'header',
      sortOrder: 5,
      isLocalized: true,
      allowedTypes: ['_image', '_media'],
    },
    serviceButtons: {
      type: 'array',
      displayName: 'Service Buttons',
      description: 'Buttons shown between theme switcher and Site Search',
      group: 'header',
      sortOrder: 20,
      isLocalized: true,
      items: {
        type: 'content',
        allowedTypes: [ButtonBlock],
      },
    },
    contactInfoHeading: {
      type: 'string',
      format: 'shortString',
      displayName: 'Contact info heading',
      group: 'footer',
      sortOrder: 10,
      isLocalized: true,
    },
    contactInfo: {
      type: 'richText',
      displayName: 'Contact info',
      group: 'footer',
      sortOrder: 20,
      isLocalized: true,
    },
    footerMenus: {
      type: 'array',
      displayName: 'Footer link lists',
      group: 'footer',
      sortOrder: 100,
      isLocalized: true,
      maxItems: 3,
      items: {
        type: 'content',
        allowedTypes: [MenuNavigationBlock],
      },
    },
    copyright: {
      type: 'string',
      format: 'shortString',
      displayName: 'Copyright Owner',
      group: 'footer',
      sortOrder: 105,
      isLocalized: true,
    },
    legalLinks: {
      type: 'array',
      format: 'LinkCollection',
      displayName: 'Legal links',
      group: 'footer',
      sortOrder: 110,
      isLocalized: true,
      maxItems: 5,
      items: {
        type: 'link',
      },
    },
    appIdentifiers: {
      type: 'string',
      format: 'shortString',
      displayName: 'Application ID or Domain',
      description:
        'Used by GraphQL to fetch the correct LayoutSettingsBlock instance for the current app/domain.',
      group: 'application',
      sortOrder: 999,
      isLocalized: true,
      indexingType: 'queryable',
    },
  },
});
