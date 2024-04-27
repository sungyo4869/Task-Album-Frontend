'use client'

import {
    RectangleStackIcon,
    PhotoIcon,
  } from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

  const links = [
    {
      name: 'タスク',
      href: '/task-album/task',
      icon: RectangleStackIcon,
    },
    { name: 'おもいで', href: '/task-album/album', icon: PhotoIcon },
  ];
  
  export default function NavLinks() {
    const pathname = usePathname();
    return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-red-100 hover:text-black md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-red-300 text-black': pathname === link.href,
              },
            )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </>
    );
  }
  