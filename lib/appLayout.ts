import { getClient } from '@optimizely/cms-sdk';
import { cache } from 'react';

type ContentUrl = {
  default?: string | null;
  base?: string | null;
  hierarchical?: string | null;
} | null;

export type LayoutLink = {
  title?: string | null;
  text?: string | null;
  target?: string | null;
  url?: ContentUrl;
};

export type MenuNavigationData = {
  _metadata?: {
    key?: string | null;
    displayName?: string | null;
  } | null;
  MenuNavigationHeading?: string | null;
  NavigationLinks?: LayoutLink[] | null;
};

export type MegaMenuGroupData = {
  _metadata?: {
    key?: string | null;
    displayName?: string | null;
  } | null;
  MenuMenuHeading?: string | null;
  MegaMenuUrl?: ContentUrl;
  MegaMenuContentArea?: MenuNavigationData[] | null;
};

export type ServiceButtonData = {
  _metadata?: {
    key?: string | null;
    displayName?: string | null;
  } | null;
  ButtonText?: string | null;
  ButtonUrl?: ContentUrl;
  ButtonType?: string | null;
  isrightarrowbutton?: boolean | null;
};

export type HeaderLayout = {
  _metadata?: {
    key?: string | null;
    displayName?: string | null;
  } | null;
  appIdentifiers?: string | null;
  layoutsitelogo?: {
    url?: ContentUrl;
  } | null;
  mainMenu?: MegaMenuGroupData[] | null;
  serviceButtons?: ServiceButtonData[] | null;
};

export type FooterLayout = {
  _metadata?: {
    key?: string | null;
    displayName?: string | null;
  } | null;
  appIdentifiers?: string | null;
  copyright?: string | null;
  footerMenus?: MenuNavigationData[] | null;
  legalLinks?: LayoutLink[] | null;
  contactInfoHeading?: string | null;
  contactInfo?: {
    json?: {
      type: 'richText';
      children: unknown[];
    } | string | null;
  } | null;
};

const LAYOUT_FILTER = `
  where: {
    _or: [
      { appIdentifiers: { exist: false } }
      {
        _and: [
          { appIdentifiers: { exist: true } }
          { appIdentifiers: { eq: $domain } }
        ]
      }
    ]
  }
  locale: $locale
`;

const ICONTENT_DATA = `
fragment IContentData on _IContent {
  _metadata {
    key
    displayName
    types
    url {
      default
    }
  }
}
`;

const LINK_ITEM_DATA = `
fragment LinkItemData on Link {
  title
  text
  target
  url {
    default
    base
    hierarchical
  }
}
`;

const MENU_NAVIGATION_BLOCK_DATA = `
fragment MenuNavigationBlockData on MenuNavigationBlock {
  MenuNavigationHeading
  NavigationLinks {
    ...LinkItemData
  }
}
`;

const MEGA_MENU_GROUP_BLOCK_DATA = `
fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {
  MenuMenuHeading
  MegaMenuUrl {
    default
    base
    hierarchical
  }
  MegaMenuContentArea {
    ...IContentData
    ...MenuNavigationBlockData
  }
}
`;

const BUTTON_BLOCK_DATA = `
fragment ButtonBlockData on ButtonBlock {
  ButtonText
  ButtonUrl {
    default
    base
    hierarchical
  }
  ButtonType
  isrightarrowbutton
}
`;

const FOOTER_FRAGMENTS = `${ICONTENT_DATA}${LINK_ITEM_DATA}${MENU_NAVIGATION_BLOCK_DATA}`;
const HEADER_FRAGMENTS = `${FOOTER_FRAGMENTS}${MEGA_MENU_GROUP_BLOCK_DATA}${BUTTON_BLOCK_DATA}`;

const GET_HEADER_DATA = `
query getHeaderData($domain: String, $locale: [Locales!]) {
  appLayout: LayoutSettingsBlock(
    ${LAYOUT_FILTER}
  ) {
    items {
      _metadata {
        key
        displayName
      }
      appIdentifiers
      layoutsitelogo {
        url {
          default
        }
      }
      mainMenu {
        ...IContentData
        ...MegaMenuGroupBlockData
      }
      serviceButtons {
        ...IContentData
        ...ButtonBlockData
      }
    }
  }
}
${HEADER_FRAGMENTS}
`;

const GET_FOOTER_DATA = `
query getFooterData($domain: String, $locale: [Locales!]) {
  appLayout: LayoutSettingsBlock(
    ${LAYOUT_FILTER}
  ) {
    items {
      _metadata {
        key
        displayName
      }
      appIdentifiers
      copyright
      footerMenus {
        ...IContentData
        ...MenuNavigationBlockData
      }
      legalLinks {
        ...LinkItemData
      }
      contactInfoHeading
      contactInfo {
        json
      }
    }
  }
}
${FOOTER_FRAGMENTS}
`;

export function getAppDomain() {
  const host = process.env.APPLICATION_HOST ?? '';

  try {
    return new URL(host).host;
  } catch {
    return host.replace(/\/$/, '');
  }
}

function firstLayout<T extends { appIdentifiers?: string | null }>(
  items: T[] | null | undefined,
  domain: string,
) {
  if (!items?.length) {
    return null;
  }

  return items.find(item => item.appIdentifiers === domain) ?? items[0];
}

async function queryLayout<T extends { appIdentifiers?: string | null }>(
  query: string,
  locale: string,
) {
  const domain = getAppDomain();
  const data = await getClient().request(query, {
    domain,
    locale: [locale],
  });
  const items = data?.appLayout?.items as T[] | undefined;

  return firstLayout(items, domain);
}

export const getHeaderData = cache(async (locale = 'en') => {
  return queryLayout<HeaderLayout>(GET_HEADER_DATA, locale);
});

export const getFooterData = cache(async (locale = 'en') => {
  return queryLayout<FooterLayout>(GET_FOOTER_DATA, locale);
});
