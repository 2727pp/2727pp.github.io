'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';

const works = [
  {
    title: '产品设计',
    description: '创新的产品解决方案',
    path: '/works/product-design',
    delay: '100ms'
  },
  {
    title: '交互设计',
    description: '以用户为中心的交互体验',
    path: '/works/interaction-design/robot-companion',
    delay: '200ms'
  },
  {
    title: '服务设计',
    description: '全方位的服务体验设计',
    path: '/works/service-design',
    delay: '300ms'
  },
  {
    title: '用户体验',
    description: '深入人心的用户体验',
    path: '/works/user-experience',
    delay: '400ms'
  },
  {
    title: '游戏设计',
    description: '沉浸式的游戏体验',
    path: '/works/game-design/2114',
    delay: '500ms'
  },
  {
    title: '作品总览',
    description: '浏览所有设计作品',
    path: '/works',
    delay: '600ms'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />

      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            李尔琦的设计作品集
          </h1>
          <p className="text-xl text-gray-400">
            探索我的设计世界
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <div
              key={work.title}
              className="animate-fade-in"
              style={{ animationDelay: work.delay }}
            >
              <Link
                href={work.path}
                className="block p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-colors"
              >
                <h2 className="text-2xl font-semibold mb-2">{work.title}</h2>
                <p className="text-gray-400">{work.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 