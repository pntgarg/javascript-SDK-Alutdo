import type { LayoutSettings } from '@/lib/optimizely/layout/get-layout-settings';

type FooterProps = {
  settings: LayoutSettings | null;
};

export default function Footer({
  settings,
}: FooterProps) {
  if (!settings) {
    return (
      <footer>
        <p>Footer settings not found.</p>
      </footer>
    );
  }

  const footerData = {
    FooterLogoLink:
      settings.FooterLogoLink,

    FooterLogo:
      settings.FooterLogo,

    FooterDescription:
      settings.FooterDescription,

    FooterLink:
      settings.FooterLink,

    FooterSocialTitle:
      settings.FooterSocialTitle,

    copyright:
      settings.copyright,

    appIdentifiers:
      settings.appIdentifiers,
  };

  return (
    <footer className="border-t p-6">
      <h2 className="mb-4 font-bold">
        Footer CMS Data
      </h2>

      <pre className="overflow-auto whitespace-pre-wrap">
        {JSON.stringify(footerData, null, 2)}
      </pre>
    </footer>
  );
}