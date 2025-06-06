'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';
import Image from 'next/image';

const works = [
  {
    title: '产品设计',
    category: '产品设计',
    description: '创新的产品解决方案',
    image: '/works/product-design/poster.jpg',
    path: '/works/product-design'
  },
  {
    title: '智能机器人学伴',
    category: '交互设计',
    description: '以用户为中心的交互体验',
    image: '/works/interaction-design/robot-companion/works.png',
    path: '/works/interaction-design/robot-companion'
  },
  {
    title: '寻航：抑郁症早筛',
    category: '交互设计',
    description: '关注心理健康的交互设计',
    image: '/works/interaction-design/depression-screening/works.png',
    path: '/works/interaction-design/depression-screening'
  },
  {
    title: '全明星街球派对主题CBD快闪店',
    category: '服务设计',
    description: '全方位的服务体验设计',
    image: '/works/service-design/works.png',
    path: '/works/service-design'
  },
  {
    title: '及游册APP用户体验报告及改进',
    category: '用户体验',
    description: '深入人心的用户体验',
    image: '/works/ux/works.png',
    path: '/works/user-experience'
  },
  {
    title: '2114',
    category: '游戏设计',
    description: '未来科幻动作冒险游戏',
    image: '/works/game-design/2114/works.png',
    path: '/works/game-design/2114'
  },
  {
    title: '2D类银河恶魔城',
    category: '游戏设计',
    description: '创新的横版动作游戏',
    image: '/works/game-design/2D/works.png',
    path: '/works/game-design/metroidvania'
  }
];

export default function Works() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center animate-fade-in">
            作品集
          </h1>

          <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: '100ms' }}>
            探索我的设计作品，包括产品设计、交互设计、服务设计等多个领域的项目
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work, index) => (
              <Link
                key={work.path}
                href={work.path}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-sm font-medium text-gray-300 mb-2">
                      {work.category}
                    </div>
                    <h2 className="text-xl font-semibold">
                      {work.title}
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 
