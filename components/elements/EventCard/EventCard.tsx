import { ContentProps } from '@optimizely/cms-sdk';
import { MapPin } from 'lucide-react';
import { EventCardComponent } from './model';

type EventCardComponentProps = {
  content: ContentProps<typeof EventCardComponent>;
};

export default function EventCard({ content }: EventCardComponentProps) {
  return (
    <a className='block h-full' href={content.link?.url.default ?? '#'}>
      <div className='card p-6 hover:!border-foreground/10 transition-colors h-full'>
        <h3 className='text-xl font-bold mb-2 tracking-tight'>
          {content.heading}
        </h3>
        <p className='text-sm leading-relaxed text-foreground mt-3 mb-4 flex gap-1 items-center'>
          <MapPin />{' '}
          {content.location}
        </p>
        <p className='text-sm leading-relaxed text-foreground mt-4 '>
          {content.description}
        </p>
      </div>
    </a>
  );
}
