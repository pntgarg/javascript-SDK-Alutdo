import { contentType } from '@optimizely/cms-sdk';
import { MenuNavigationBlock } from '../MenuNavigationBlock/model';

export const MegaMenuGroupBlock = contentType({
  key: 'MegaMenuGroupBlock',
  baseType: '_component',
  displayName: 'Header menu item',
  description: 'A menu item for the Header Menu',
  sortOrder: 15100,
  properties: {
    MenuMenuHeading: {
      type: 'string',
      format: 'shortString',
      displayName: 'Heading',
      sortOrder: 10,
      isLocalized: true,
    },
    MegaMenuUrl: {
      type: 'url',
      displayName: 'Menu item link',
      sortOrder: 20,
      isLocalized: true,
    },
    MegaMenuContentArea: {
      type: 'array',
      displayName: 'Navigation content',
      description: 'Navigation columns shown in this menu item.',
      sortOrder: 30,
      isLocalized: true,
      items: {
        type: 'content',
        allowedTypes: [MenuNavigationBlock],
      },
    },
  },
});
