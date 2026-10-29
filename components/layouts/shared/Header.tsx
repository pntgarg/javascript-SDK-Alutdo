import { HeaderClient } from './Header.client';
import { getMobileNavigationItems, getNavigationItems, type NavigationItem } from '../../../lib/navigation';
import { getAllSearchableContent } from '../../../lib/search';
import {
  getHeaderData,
  type HeaderLayout,
  type LayoutLink,
  type MegaMenuGroupData,
  type MenuNavigationData,
} from '../../../lib/appLayout';

const linkUrl = (link: LayoutLink | null | undefined) => link?.url?.default ?? '#';

const toNavigationLink = (link: LayoutLink, index: number): NavigationItem => ({
  key: link.url?.default ?? link.text ?? `link-${index}`,
  displayName: link.text ?? link.title ?? '',
  url: linkUrl(link),
  isActive: false,
  items: null,
});

const toNavigationColumn = (column: MenuNavigationData, index: number): NavigationItem => ({
  key: column._metadata?.key ?? `column-${index}`,
  displayName: column.MenuNavigationHeading ?? column._metadata?.displayName ?? '',
  url: '#',
  isActive: false,
  items: (column.NavigationLinks ?? []).map(toNavigationLink),
});

const toNavigationItem = (item: MegaMenuGroupData, index: number): NavigationItem => ({
  key: item._metadata?.key ?? `menu-${index}`,
  displayName: item.MenuMenuHeading ?? item._metadata?.displayName ?? '',
  url: item.MegaMenuUrl?.default ?? '#',
  isActive: false,
  items: (item.MegaMenuContentArea ?? []).map(toNavigationColumn),
});

export const Header = async ({
  layout,
  locale = 'en',
}: {
  layout?: HeaderLayout | null;
  locale?: string;
} = {}) => {
  const headerLayout = layout === undefined ? await getHeaderData(locale) : layout;
  const searchableContent = await getAllSearchableContent();
  const menuItems = (headerLayout?.mainMenu ?? []).map(toNavigationItem);
  const navigationItems = menuItems.length > 0 ? menuItems : await getNavigationItems();
  const mobileNavItems = menuItems.length > 0 ? menuItems : await getMobileNavigationItems();
  const serviceButtons = (headerLayout?.serviceButtons ?? [])
    .filter(button => button.ButtonText)
    .map(button => ({
      key: button._metadata?.key ?? button.ButtonText ?? 'button',
      text: button.ButtonText ?? '',
      href: button.ButtonUrl?.default ?? '#',
      variant: button.ButtonType,
    }));

  return (
    <HeaderClient
      navigationItems={navigationItems}
      mobileNavItems={mobileNavItems}
      searchableContent={searchableContent}
      logoUrl={headerLayout?.layoutsitelogo?.url?.default}
      serviceButtons={serviceButtons}
    />
  );
};
