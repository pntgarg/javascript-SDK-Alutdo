import { ContentProps } from '@optimizely/cms-sdk';
import { bindCmsField } from '../../shared/CmsField';
import { HorizontalRulerComponent } from './model';

type HorizontalRulerComponentProps = {
  content: ContentProps<typeof HorizontalRulerComponent>;
};

export default function HorizontalRuler({ content }: HorizontalRulerComponentProps) {
  const CmsField = bindCmsField(content, { editable: false });

  return (
    <div className='h-9 font-code text-xs uppercase font-bold tracking-wide border-b-4 mb-6 border-foreground'>
      <CmsField field={c => c.topLabel}>
        <span className='absolute text-background2 bg-foreground px-1'>
          {content.topLabel}
        </span>
      </CmsField>
      <CmsField field={c => c.sideLabel}>
        <span className='absolute inline-block origin-top-left md:-translate-x-4 -translate-x-1 translate-y-18  text-key1 mb-4 rotate-90'>
          {content.sideLabel}
        </span>
      </CmsField>
    </div>
  );
}
