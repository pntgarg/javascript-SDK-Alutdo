import '@/cms/config';
import '@/cms/registry';

import {
  GraphClient,
  type PreviewParams,
} from '@optimizely/cms-sdk';

import {
  OptimizelyComponent,
  withAppContext,
} from '@optimizely/cms-sdk/react/server';

import { PreviewComponent } from '@optimizely/cms-sdk/react/client';
import Script from 'next/script';

type PreviewPageProps = {
  searchParams: Promise<
    Record<string, string | string[] | undefined>
  >;
};

async function PreviewPage({
  searchParams,
}: PreviewPageProps) {
  const apiKey = process.env.OPTIMIZELY_GRAPH_SINGLE_KEY;
  const cmsUrl = process.env.OPTIMIZELY_CMS_URL;

  if (!apiKey) {
    throw new Error(
      'OPTIMIZELY_GRAPH_SINGLE_KEY is not configured.',
    );
  }

  if (!cmsUrl) {
    throw new Error(
      'OPTIMIZELY_CMS_URL is not configured.',
    );
  }

  const client = new GraphClient(apiKey, {
    graphUrl:
      process.env.OPTIMIZELY_GRAPH_GATEWAY ??
      'https://cg.optimizely.com/content/v2',
  });

  const content = await client.getPreviewContent(
    (await searchParams) as PreviewParams,
  );

  return (
    <>
      <Script
        src={
          new URL(
            '/util/javascript/communicationinjector.js',
            cmsUrl,
          ).href
        }
      />

      <PreviewComponent />

      <OptimizelyComponent content={content} />
    </>
  );
}

export default withAppContext(PreviewPage);