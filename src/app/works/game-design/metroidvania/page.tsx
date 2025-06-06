'use client';

import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Metroidvania() {
  const work = {
    title: '2D类银河恶魔城',
    description: '这是一款像素风2D横版动作类银河恶魔城游戏。游戏继承了经典银河恶魔城类型游戏的探索，有着丰富有趣的成长技能树。',
    images: [
      {
        src: '/works/game-design/2D/main-character.png',
        alt: '主角动作设计',
        caption: '主角动作设计'
      },
      {
        src: '/works/game-design/2D/enemy.png',
        alt: '敌人动作设计',
        caption: '敌人动作设计'
      }
    ],
    video: [
      {
        src: '/works/game-design/2D/2.mp4',
        caption: '人物基础动作展示'
      },
      {
        src: '/works/game-design/2D/1.mp4',
        caption: '飞刀技能展示'
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
              <div className="grid grid-cols-1 gap-8">
                {work.video.map((video, index) => (
                  <div
                    key={video.src}
                    className="space-y-2 animate-fade-in"
                    style={{ animationDelay: `${700 + index * 100}ms` }}
                  >
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/10">
                      <video
                        src={video.src}
                        controls
                        muted={false}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm text-gray-400 text-center">{video.caption}</p>
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