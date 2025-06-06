'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { name: '首页', path: '/' },
  { name: '关于我', path: '/about' },
  { name: '产品设计', path: '/works/product-design' },
  { name: '交互设计', path: '/works/interaction-design' },
  { name: '服务设计', path: '/works/service-design' },
  { name: '用户体验', path: '/works/ux-design' },
  { name: '游戏设计', path: '/works/game-design' },
  { name: '作品总览', path: '/works' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (path: string) => pathname === path;

  const dropdownMenus = {
    '/works/interaction-design': [
      { name: '智能机器人学伴', path: '/works/interaction-design/robot-companion' },
      { name: '寻航：抑郁症早筛', path: '/works/interaction-design/depression-screening' }
    ],
    '/works/game-design': [
      { name: '2114', path: '/works/game-design/2114' },
      { name: '2D类银河恶魔城', path: '/works/game-design/metroidvania' }
    ]
  };

  // 处理点击事件
  const handleDropdownClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault(); // 阻止默认的跳转行为
    setOpenDropdown(openDropdown === path ? null : path);
  };

  // 处理点击其他区域关闭下拉菜单
  const handleClickOutside = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold hover:text-gray-300 transition-colors"
          >
            Portfolio
          </Link>

          <div className="flex space-x-8">
            <Link
              href="/"
              className={`transition-colors ${isActive('/') ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
            >
              首页
            </Link>

            <Link
              href="/about"
              className={`transition-colors ${isActive('/about') ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
            >
              关于我
            </Link>

            <Link
              href="/works/product-design"
              className={`transition-colors ${isActive('/works/product-design') ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
            >
              产品设计
            </Link>

            <div className="relative">
              <button
                onClick={(e) => handleDropdownClick('/works/interaction-design', e)}
                className={`transition-colors ${isActive('/works/interaction-design') ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
              >
                交互设计
              </button>
              {openDropdown === '/works/interaction-design' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-lg rounded-lg border border-white/10 overflow-hidden">
                  {dropdownMenus['/works/interaction-design'].map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/works/service-design"
              className={`transition-colors ${isActive('/works/service-design') ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
            >
              服务设计
            </Link>

            <Link
              href="/works/user-experience"
              className={`transition-colors ${isActive('/works/user-experience') ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
            >
              用户体验
            </Link>

            <div className="relative">
              <button
                onClick={(e) => handleDropdownClick('/works/game-design', e)}
                className={`transition-colors ${isActive('/works/game-design') ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
              >
                游戏设计
              </button>
              {openDropdown === '/works/game-design' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-lg rounded-lg border border-white/10 overflow-hidden">
                  {dropdownMenus['/works/game-design'].map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/works"
              className={`transition-colors ${isActive('/works') ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
            >
              作品总览
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 