import { ContentProps } from '@optimizely/cms-sdk';
import { Check, CheckCheck, Globe, Flag, Sparkles, Wallet } from 'lucide-react';
import { CmsField } from '../../shared/CmsField';
import { HeadingComponent, HeadingDisplayTemplate } from './model';

type HeadingComponentProps = {
  content: ContentProps<typeof HeadingComponent>;
  displaySettings?: ContentProps<typeof HeadingDisplayTemplate>;
};

const iconMap: Record<string, React.ElementType | null> = {
  default: null,
  check: Check,
  checkCheck: CheckCheck,
  globe: Globe,
  flag: Flag,
  sparkles: Sparkles,
  wallet: Wallet,
};

const iconSizeMap: Record<string, number> = {
  h2: 48,
  h3: 32,
  h4: 24,
  h5: 18,
};

const levelMap: Record<string, string> = {
  default: 'h2',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
};

const stylesMap: Record<string, string> = {
  h2: 'text-4xl md:text-6xl font-bold mb-4 tracking-tight',
  h3: 'text-2xl md:text-2xl font-bold mb-4 tracking-tight',
  h4: 'text-xl md:text-lg font-semibold mb-4 tracking-tight',
  h5: 'text-md md:text-sm font-semibold mb-4 tracking-tight',
};

export default function Heading({ content, displaySettings }: HeadingComponentProps) {
  const level = displaySettings?.level ? levelMap[displaySettings.level] : 'h2';
  const HeadingTag = level as React.ElementType;
  const IconComponent = displaySettings?.icon ? iconMap[displaySettings.icon] : null;

  return (
    <CmsField content={content} field={c => c.heading}>
      {IconComponent ?
        <div className='flex gap-2'>
          <IconComponent size={iconSizeMap[level]} />
          <HeadingTag className={stylesMap[level]}>{content.heading}</HeadingTag>
        </div>
      : <HeadingTag className={stylesMap[level]}>{content.heading}</HeadingTag>}
    </CmsField>
  );
}
