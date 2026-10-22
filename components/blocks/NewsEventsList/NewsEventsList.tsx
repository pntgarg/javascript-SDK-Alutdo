import { ContentProps } from '@optimizely/cms-sdk';
import { getPreviewUtils, OptimizelyComponent } from '@optimizely/cms-sdk/react/server';
import { NewsEventsListContentType } from './model';

export type NewsEventsListProps = {
  content: ContentProps<typeof NewsEventsListContentType>;
};

function NewsEventsList({ content }: NewsEventsListProps) {
  const { pa } = getPreviewUtils(content);
  return (
    <div className='space-y-8'>
      {content.title && (
        <h2
          className='text-4xl md:text-6xl font-bold mb-4 tracking-tight mt-16'
          {...pa('title')}
        >
          {content.title}
        </h2>
      )}

      <div className='space-y-10' {...pa('teasers')}>
        {content.teasers?.map((teaser, index) => {
          return <OptimizelyComponent key={index} content={teaser} tag='teaser' />;
        })}
      </div>
    </div>
  );
}

export default NewsEventsList;
