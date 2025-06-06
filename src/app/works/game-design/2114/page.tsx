'use client';

import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Game2114() {
  const work = {
    title: '2114',
    description: '...',
    challenge: '..',
    solution: '...',
    images: [
      {
        src: '/works/game-design/2114/overview.jpg',
        alt: '游戏概览',
        caption: '2114游戏视觉风格展示'
      },
      {
        src: '/works/game-design/2114/combat.jpg',
        alt: '战斗系统',
        caption: 'AI进化战斗系统设计'
      },
      {
        src: '/works/game-design/2114/puzzle.jpg',
        alt: '解谜系统',
        caption: '多层次解谜系统设计'
      },
      {
        src: '/works/game-design/2114/story.jpg',
        alt: '剧情系统',
        caption: '分支剧情系统设计'
      }
    ]
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/works"
            className="inline-block mb-8 text-gray-400 hover:text-white transition-colors animate-fade-in"
          >
            ← 返回作品集
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
            {work.title}
          </h1>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h2 className="text-xl font-semibold mb-4">项目概述</h2>
            <p className="text-gray-300 whitespace-pre-line">{work.description}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <h2 className="text-xl font-semibold mb-4">项目挑战</h2>
            <p className="text-gray-300 whitespace-pre-line">{work.challenge}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h2 className="text-xl font-semibold mb-4">解决方案</h2>
            <p className="text-gray-300 whitespace-pre-line">{work.solution}</p>
          </div>
          <div className="space-y-12">
            <section className="animate-fade-in" style={{ animationDelay: '500ms' }}>
              <h2 className="text-2xl font-semibold mb-6">项目成果展示</h2>
              <div className="grid grid-cols-1 gap-8">
                {work.images.map((image, index) => (
                  <div
                    key={image.src}
                    className="space-y-2 animate-fade-in"
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/10">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm text-gray-400 text-center">{image.caption}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
} 