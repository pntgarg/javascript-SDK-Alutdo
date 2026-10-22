import { ContentProps } from '@optimizely/cms-sdk';
import { OptimizelyComposition } from '@optimizely/cms-sdk/react/server';
import FullWidthLayout from '../../layouts/FullWidthLayout';
import { StartPage } from './model';

type StartPageProps = {
  content: ContentProps<typeof StartPage>;
};

export default function Start({ content }: StartPageProps) {
  return (
    <FullWidthLayout>
      <OptimizelyComposition nodes={content.composition.nodes ?? []} />
    </FullWidthLayout>
  );
}
