import { ContentProps } from '@optimizely/cms-sdk';
import { RichText as OptiRichText } from '@optimizely/cms-sdk/react/richText';
import { CmsField } from '../../shared/CmsField';
import { RichTextComponent } from './model';

type RichTextComponentProps = {
  content: ContentProps<typeof RichTextComponent>;
};

export default function RichText({ content }: RichTextComponentProps) {
  return (
    <CmsField content={content} field={c => c.body}>
      <OptiRichText
        content={content.body?.json}
        className='text-lg leading-relaxed text-foreground max-w-2xl'
      />
    </CmsField>
  );
}
