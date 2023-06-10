'use client';

import Badge from '@/components/Badge/Badge';
import Tab from '@/components/Tab/Tab';
import { usePathname } from 'next/navigation';
import { COLLECTION_TABS } from '@/shared/constants/tabs';

const Template = ({ children }: { children: React.ReactNode }) => {
  const currentPath = usePathname();

  return (
    <div>
      <div className="flex flex-row gap-5">
        {COLLECTION_TABS.map(({ title, pathname, count }) => (
          <Tab
            href={`/collection/${pathname}`}
            key={title}
            size="lg"
            badge={
              <Badge varient="gray900" size="L">
                {count}
              </Badge>
            }
            variant={currentPath === `/collection/${pathname}` ? 'pressed' : 'default'}>
            {title}
          </Tab>
        ))}
      </div>
      {children}
    </div>
  );
};

export default Template;
