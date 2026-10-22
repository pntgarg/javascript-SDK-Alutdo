import { ContentProps } from '@optimizely/cms-sdk';
import { Check, CheckCheck, Flag, Globe, Sparkles, Wallet } from 'lucide-react';
import { CmsField } from '../../shared/CmsField';
import { EyebrowComponent } from './model';

type EyebrowComponentProps = {
  content: ContentProps<typeof EyebrowComponent>;
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

export default function Eyebrow({ content }: EyebrowComponentProps) {
  const IconComponent = content.icon ? iconMap[content.icon] : null;

  return (
    <CmsField content={content} field={c => c.eyebrow}>
      <div className='flex gap-2 items-center'>
        {IconComponent && <IconComponent size={16} />}
        <p className='text-xs uppercase font-semibold tracking-wider text-foreground letter-spacing-wider font-code '>
          {content.eyebrow}
        </p>
      </div>
    </CmsField>
  );
}
