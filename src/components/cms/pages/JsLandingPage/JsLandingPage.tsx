import type { ContentProps } from '@optimizely/cms-sdk';
import { RichText } from '@optimizely/cms-sdk/react/richText';
import { OptimizelyComponent } from '@optimizely/cms-sdk/react/server';

import { TeaserBlock } from '@/components/cms/components/TeaserBlock';

import { JsLandingPageContentType } from './JsLandingPage.model';

export type JsLandingPageProps = {
  content: ContentProps<typeof JsLandingPageContentType>;
};

function ContentArea({
  items,
}: {
  items: JsLandingPageProps['content']['leftContentArea'];
}) {
  if (!items?.length) {
    return null;
  }

  return (
    <>
      {items.map((component, index) => {
        if (!component) {
          return null;
        }

        return (
          <OptimizelyComponent
            key={index}
            content={component}
          />
        );
      })}
    </>
  );
}

export default function JsLandingPage({
  content,
}: JsLandingPageProps) {
  return (
    <main>
      <ContentArea items={content.heroBannerContentArea} />

      {content.mainTextContent?.json && (
        <section className="mx-auto max-w-6xl px-6 py-12">
          <RichText content={content.mainTextContent.json} />
        </section>
      )}

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-2">
        <div>
          <ContentArea items={content.leftContentArea} />
        </div>
        <div>
          <ContentArea items={content.rightContentArea} />
        </div>
      </section>

      {content.Teaser && (
        <section className="mx-auto max-w-6xl px-6 pb-12">
          <TeaserBlock content={content.Teaser} />
        </section>
      )}
    </main>
  );
}
