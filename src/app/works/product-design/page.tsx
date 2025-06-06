'use client';

import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductDesign() {
  const work = {
    title: 'CAT NIGHT LIGHT',
    background: '1.大部分父母会选择和孩子分房入睡，据调查显示，40%的中国家庭在孩子3-6岁时与孩子分房\n\n\
    2.近九成儿童在分房初期较为抗拒，大部分儿童表现为怕黑，由于缺少安全感而 选择开灯睡觉\n\n\
    3.开灯睡觉的这部分儿童发生睡眠障碍的概率升高\n',
    function: '小猫外形——采用情感仿生法，对儿童来说更具有亲近感\n\n\
    硅胶材质——材质柔软，对儿童不易造成伤害\n\n\
    零蓝光——蓝色光影响褪黑素分泌\n\n\
    灯光自动熄灭——减少光照对儿童睡眠影响\n\n\
    粉噪音——聆听大自然的声音以正念，减少儿童焦虑不安情绪\n\n\
    小猫肚子起伏——增加仿生感，情感交互主要方式，规律呼吸以帮助正念\n\n\
    与家长端实时对讲——获得直接情感支持、缓解分离焦虑\n',
    solution: '通过深入的用户研究和多轮迭代，我们采用了以下解决方案：\n\n1. 情景化控制：根据用户的日常生活场景，预设多种智能场景模式，一键即可切换。\n\n2. 模块化设计：将不同功能模块清晰分类，用户可以根据需求自定义控制面板。\n\n3. 智能建议：系统会学习用户的使用习惯，主动提供个性化的控制建议。\n\n4. 语音控制：集成自然语言处理技术，支持语音命令控制。',
    images: [
      {
        src: '/works/product-design/CatNightLight.jpg',
        alt: '产品整体效果图',
        caption: '产品展示'
      },
      {
        src: '/works/product-design/poster.jpg',
        alt: '场景模式设计',
        caption: '渲染图'
      },
      {
        src: '/works/product-design/poster2.jpg',
        alt: '功能模块设计',
        caption: '海报'
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
            <h2 className="text-xl font-semibold mb-4">背景介绍</h2>
            <p className="text-gray-300 whitespace-pre-line">{work.background}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <h2 className="text-xl font-semibold mb-4">功能介绍</h2>
            <p className="text-gray-300 whitespace-pre-line">{work.function}</p>
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