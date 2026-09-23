import type { ContentProps } from '@optimizely/cms-sdk';
import { RichText } from '@optimizely/cms-sdk/react/richText';
import {
  OptimizelyComposition,
  getPreviewUtils,
} from '@optimizely/cms-sdk/react/server';

import { TeaserBlock } from '@/components/cms/components/TeaserBlock';

import { JsBlankExperienceContentType } from './JsBlankExperience.model';

export type JsBlankExperienceProps = {
  content: ContentProps<typeof JsBlankExperienceContentType>;
};

export default function JsBlankExperience({
  content,
}: JsBlankExperienceProps) {
  const { pa } = getPreviewUtils(content);

  return (
    <main>
      {content.showbreadcrumb && (
        <nav {...pa('showbreadcrumb')} aria-label="Breadcrumb">
          <p>Breadcrumb</p>
        </nav>
      )}

      {content.PageContent?.json && (
        <section className="mx-auto max-w-6xl px-6 py-12" {...pa('PageContent')}>
          <RichText content={content.PageContent.json} />
        </section>
      )}

      {content.Teaser && (
        <section {...pa('Teaser')}>
          <TeaserBlock content={content.Teaser} />
        </section>
      )}

      <OptimizelyComposition nodes={content.composition?.nodes ?? []} />
    </main>
  );
}
