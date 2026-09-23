import type { ContentProps } from '@optimizely/cms-sdk';

import { TeaserBlockContentType } from './TeaserBlock.model';

type TeaserBlockProps = {
  content: ContentProps<typeof TeaserBlockContentType>;
};

export default function TeaserBlock({ content }: TeaserBlockProps) {
  const href = content.url?.default;

  const teaserContent = (
    <>
      {content.eyebrow && <p>{content.eyebrow}</p>}
      {content.title && <h2>{content.title}</h2>}
      {content.description && <p>{content.description}</p>}
    </>
  );

  if (href) {
    return (
      <article>
        <a href={href}>{teaserContent}</a>
      </article>
    );
  }

  return <article>{teaserContent}</article>;
}