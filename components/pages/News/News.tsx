import { ContentProps } from '@optimizely/cms-sdk';
import { RichText } from '@optimizely/cms-sdk/react/richText';
import { OptimizelyComposition } from '@optimizely/cms-sdk/react/server';
import { bindCmsField } from '../../shared/CmsField';
import SubNavigationLayout from '../../layouts/SubNavigationLayout';
import { NewsPage } from './model';

type NewsPageProps = {
  content: ContentProps<typeof NewsPage>;
};

export default function News({ content }: NewsPageProps) {
  const CmsField = bindCmsField(content);

  return (
    <SubNavigationLayout>
      <CmsField field={c => c.heading} alwaysRender>
        <h1 className='text-5xl md:text-7xl font-bold tracking-tight mb-12'>
          {content.heading ?? content._metadata?.displayName}
        </h1>
      </CmsField>

      <CmsField field={c => c.body}>
        <RichText content={content.body?.json} className='prose' />
      </CmsField>

      <OptimizelyComposition nodes={content.composition?.nodes ?? []} />
    </SubNavigationLayout>
  );
}
