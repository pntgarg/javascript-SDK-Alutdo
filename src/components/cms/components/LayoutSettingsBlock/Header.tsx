import type { LayoutSettings } from '@/lib/optimizely/layout/get-layout-settings';

type HeaderProps = {
  settings: LayoutSettings | null;
};

export default function Header({
  settings,
}: HeaderProps) {
  if (!settings) {
    return (
      <header>
        <p>Header settings not found.</p>
      </header>
    );
  }

  const headerData = {
    HeaderSearchIconToggle:
      settings.HeaderSearchIconToggle,

    layoutsitelogo:
      settings.layoutsitelogo,

    HeaderLogolink:
      settings.HeaderLogolink,

    TopUtilityStripDisable:
      settings.TopUtilityStripDisable,

    TopUtilityStrip:
      settings.TopUtilityStrip,

    GlobalSearchTitle:
      settings.GlobalSearchTitle,

    GlobalAutoCompleteError:
      settings.GlobalAutoCompleteError,

    GlobalSearchPlaceholder:
      settings.GlobalSearchPlaceholder,
  };

  return (
    <header className="border-b p-6">
      <h2 className="mb-4 font-bold">
        Header CMS Data
      </h2>

      <pre className="overflow-auto whitespace-pre-wrap">
        {JSON.stringify(headerData, null, 2)}
      </pre>
    </header>
  );
}