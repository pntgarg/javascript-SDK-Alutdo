import { getClient, type PreviewParams } from '@optimizely/cms-sdk';
import { withAppContext } from '@optimizely/cms-sdk/react/server';
import { Metadata } from 'next';
import { cache } from 'react';

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const getPreviewContent = cache(async (params: PreviewParams) => {
  return await getClient()
    .getPreviewContent(params)
    .catch(err => {
      console.log(err.errors);
      console.log(err.request?.query);
      throw err;
    });
});

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = (await searchParams) as PreviewParams;
  const content = await getPreviewContent(params);

  return {
    title: `Previewing — ${content._metadata.displayName}`,
  };
}

async function Page({ searchParams }: Props) {
  const params = (await searchParams) as PreviewParams;
  const content = await getPreviewContent(params);

  return <pre>{JSON.stringify(content, null, 2)}</pre>;
}

export default withAppContext(Page);
