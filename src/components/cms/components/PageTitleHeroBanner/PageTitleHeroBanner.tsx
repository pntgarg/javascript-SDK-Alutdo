import type { ContentProps } from '@optimizely/cms-sdk';
import { RichText } from '@optimizely/cms-sdk/react/richText';

import { PageTitleHeroBannerContentType } from './PageTitleHeroBanner.model';

export type PageTitleHeroBannerProps = {
  content: ContentProps<typeof PageTitleHeroBannerContentType>;
};

function getThemeClasses(theme?: string | null) {
  switch (theme) {
    case 'grey':
      return 'bg-gray-100 text-gray-950';

    case 'dark':
      return 'bg-gray-950 text-white';

    case 'brand':
      return 'bg-blue-700 text-white';

    case 'light':
    default:
      return 'bg-white text-gray-950';
  }
}

function getOverlayClasses(opacity?: string | null) {
  switch (opacity) {
    case 'light':
      return 'bg-black/20';

    case 'dark':
      return 'bg-black/70';

    case 'medium':
    default:
      return 'bg-black/45';
  }
}

export default function PageTitleHeroBanner({
  content,
}: PageTitleHeroBannerProps) {
  const themeClasses = getThemeClasses(content.BannerTheme);

  return (
    <section
      className={`relative overflow-hidden ${themeClasses}`}
      data-component="PageTitleHeroBanner"
    >
      {content.EnableImageOverlay && (
        <div
          className={`pointer-events-none absolute inset-0 ${getOverlayClasses(
            content.OverlayOpacity,
          )}`}
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-24">
        {!content.ShowBreadcrumb && content.EyeBrow && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider">
            {content.EyeBrow}
          </p>
        )}

        {content.ShowBreadcrumb && (
          <nav
            className="mb-4 text-sm"
            aria-label="Breadcrumb"
          >
            <span>Breadcrumb will be connected to page context</span>
          </nav>
        )}

        {content.BannerTitle?.json && (
          <div className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            <RichText content={content.BannerTitle.json} />
          </div>
        )}

        {content.BannerDescription?.json && (
          <div className="mt-6 max-w-3xl text-lg leading-8">
            <RichText content={content.BannerDescription.json} />
          </div>
        )}
      </div>
    </section>
  );
}