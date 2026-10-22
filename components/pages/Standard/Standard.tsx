import { ContentProps } from '@optimizely/cms-sdk';
import { RichText } from '@optimizely/cms-sdk/react/richText';
import { OptimizelyComponent } from '@optimizely/cms-sdk/react/server';
import { bindCmsField } from '../../shared/CmsField';
import SubNavigationLayout from '../../layouts/SubNavigationLayout';
import { StandardPage } from './model';

type StandardPageProps = {
  content: ContentProps<typeof StandardPage>;
};

export default function Standard({ content }: StandardPageProps) {
  const CmsField = bindCmsField(content);

  return (
    <SubNavigationLayout>
      <CmsField field={c => c.heading} alwaysRender>
        <h1 className='text-5xl md:text-7xl font-bold tracking-tight mb-12'>
          {content.heading ?? content._metadata.displayName}
        </h1>
      </CmsField>

      <CmsField field={c => c.intro}>
        <RichText
          content={content.intro?.json}
          className='leading-relaxed text-foreground mt-5 max-w-2xl mb-8 text-xl'
        />
      </CmsField>

      <CmsField field={c => c.body}>
        <RichText content={content.body?.json} className='prose' />
      </CmsField>

      {content.extras ?
        content.extras.map((extra, index) => (
          <OptimizelyComponent content={extra} key={`extra-${index + 1}`} />
        ))
      : null}
    </SubNavigationLayout>
  );
}
