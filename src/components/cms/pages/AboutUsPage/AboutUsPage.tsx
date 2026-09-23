import type { ContentProps } from '@optimizely/cms-sdk';
import { RichText } from '@optimizely/cms-sdk/react/richText';
import { OptimizelyComponent } from '@optimizely/cms-sdk/react/server';

import { AboutUsPageContentType } from './AboutUsPage.model';

export type AboutUsPageProps = {
  content: ContentProps<typeof AboutUsPageContentType>;
};

export default function AboutUsPage({
  content,
}: AboutUsPageProps) {
  return (
    <main>
      {content.mainTextContent?.json && (
        <section className="mx-auto max-w-6xl px-6 py-12">
          <RichText content={content.mainTextContent.json} />
        </section>
      )}

      {content.mainContentArea?.map((component, index) => {
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
    </main>
  );
}