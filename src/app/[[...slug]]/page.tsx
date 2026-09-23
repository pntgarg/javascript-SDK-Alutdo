import '@/cms/config';
import '@/cms/registry';

import { getClient } from '@optimizely/cms-sdk';
import { OptimizelyComponent } from '@optimizely/cms-sdk/react/server';
import { notFound } from 'next/navigation';

type CmsPageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export default async function CmsPage({
  params,
}: CmsPageProps) {
  const { slug = [] } = await params;

  const path =
    slug.length === 0
      ? '/'
      : `/${slug.join('/')}/`;

  const client = getClient();
  const content = await client.getContentByPath(path);
  const page = content[0];

  if (!page) {
    notFound();
  }

  return <OptimizelyComponent content={page} />;
}