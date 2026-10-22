import { ContentProps } from '@optimizely/cms-sdk';
import { CmsField } from '../../shared/CmsField';
import { VideoComponent } from './model';

type VideoComponentProps = {
  content: ContentProps<typeof VideoComponent>;
};

export default function Video({ content }: VideoComponentProps) {
  return (
    <CmsField content={content} field={c => c.video}>
      <video
        src={content.video?.url.default ?? ''}
        autoPlay={content.autoplay ?? false}
        loop
        muted
        className='absolute inset-0 w-full h-full object-cover rounded-lg'
      />
    </CmsField>
  );
}
