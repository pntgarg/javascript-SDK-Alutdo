import { ContentProps } from '@optimizely/cms-sdk';
import Link from 'next/link';
import { CmsField } from '../../shared/CmsField';
import { cn } from '../../../lib/utils';
import { ButtonComponent, ButtonDisplayTemplate } from './model';

const variants = {
  default: 'border-2 border-key1 bg-key1 text-foreground-inverted',
  primary: 'border-2 border-key1 bg-key1 text-foreground-inverted',
  outline: 'border-2 border-foreground text-foreground ',
};

type ButtonComponentProps = {
  content: ContentProps<typeof ButtonComponent>;
  displaySettings?: ContentProps<typeof ButtonDisplayTemplate>;
};

export default function Button({ content, displaySettings }: ButtonComponentProps) {
  const variant = displaySettings?.variant ?? 'default';

  return (
    <CmsField content={content} field={c => c.label}>
      <Link
        href={content.link?.default ?? '#'}
        className={cn(
          'cursor-pointer box-border rounded-md inline-flex hover:-translate-y-0.5 hover:duration-100 items-center justify-center px-6 py-3 text-sm font-semibold transition-colors duration-200 uppercase tracking-wider mt-3',
          variants[variant],
        )}
      >
        {content.label}
      </Link>
    </CmsField>
  );
}
