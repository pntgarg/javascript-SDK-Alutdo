import { contentType } from '@optimizely/cms-sdk';

export const MenuNavigationBlock = contentType({
  key: 'MenuNavigationBlock',
  baseType: '_component',
  displayName: 'Menu navigation',
  description: 'Heading and link list used in the header mega menu and the footer.',
  properties: {
    MenuNavigationHeading: {
      type: 'string',
      format: 'shortString',
      displayName: 'Heading',
      sortOrder: 10,
      isLocalized: true,
    },
    NavigationLinks: {
      type: 'array',
      format: 'LinkCollection',
      displayName: 'Links',
      sortOrder: 20,
      isLocalized: true,
      items: {
        type: 'link',
      },
    },
  },
});
