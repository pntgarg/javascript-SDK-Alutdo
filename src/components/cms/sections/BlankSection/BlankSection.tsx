import type { BlankSectionContentType, ContentProps } from '@optimizely/cms-sdk';
import {
  OptimizelyGridSection,
  getPreviewUtils,
} from '@optimizely/cms-sdk/react/server';

export type BlankSectionProps = {
  content: ContentProps<typeof BlankSectionContentType>;
};

export default function BlankSection({ content }: BlankSectionProps) {
  const { pa } = getPreviewUtils(content);

  return (
    <section {...pa(content)}>
      <OptimizelyGridSection nodes={content.nodes ?? []} />
    </section>
  );
}
