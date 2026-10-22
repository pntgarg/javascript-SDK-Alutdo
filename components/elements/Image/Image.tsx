import { ContentProps } from '@optimizely/cms-sdk';
import { CmsField } from '../../shared/CmsField';
import { ImageComponent } from './model';

type ImageComponentProps = {
  content: ContentProps<typeof ImageComponent>;
};

export default function Image({ content }: ImageComponentProps) {
  return (
    <CmsField content={content} field={c => c.image}>
      <img
        src={content.image?.url.default ?? ''}
        alt={content.alternativeText ?? ''}
        className='mx-auto'
      />
    </CmsField>
  );
}
