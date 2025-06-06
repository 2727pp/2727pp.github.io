'use client';

import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function ServiceDesign() {
  const work = {
    title: '全明星街球派对主题CBD快闪店',
    description: '这是一个以游戏“全明星街球派对”为主题的创新服务设计项目。项目旨在通过快闪店的形式，打造一个独特的篮球文化体验空间和有趣的游戏宣传展厅。',
    shopping: '入口处便可看到快闪店内部的颜色，鲜艳高饱和，与游戏风格相符，能够吸引人们进入一探究竟\n\
        货架采用游戏中的高饱和颜色，充满活力，进行快闪周边的售卖。上方的两个屏幕播放游戏以及现场活动的宣传视频。\n\
        采用集装箱涂鸦风格的收银台',
    basketball: '球场两侧是玻璃幕墙，既能让两边区域的顾客能方便的看到比赛，也能保证篮球不会飞出场外带来的安全问题\n\
        涂鸦长廊的一侧是一整面涂鸦墙，提供一些涂鸦贴纸以及涂鸦笔，顾客可以在墙上随意写写画画，留下自己的“作品”。\n\
        区域主要是一个半场篮球场，可以在这里参加举办的各种篮球小型比赛以及篮球趣味活动\n\
        球场边有阶梯样的观众席，营造街头篮球的场景，顾客可以在此观看球场举办的一些活动\n\
           涂鸦长廊的一侧是一整面涂鸦墙，提供一些涂鸦贴纸以及涂鸦笔，顾客可以在墙上随意写写画画，留下自己的“作品”。',
    diy: 'DIY模板，有两套大小不同的数字、用于喷涂姓名的英文字母、NBA球队队标以及游戏内涂鸦元素，顾客可以自己挑选来组成自己的DIY衣服\n\
        我们提供纯白的球衣、短袖以及训练长袖当作底板，供顾客DIY选择\n\
        衣服烘干柜，用来缩短DIY后的衣服的晾干时间\n\
        DIY桌，可以一边DIY一边通过玻璃观看球场活动\n\
        前两个桌子用于放置DIY模板，最后一个水池可以让顾客体验球鞋水转印DIY',
    gifts: '1.Q版头像冰箱贴：选取游戏中头像作为冰箱贴\n\
        2.人物模型钥匙扣：选取游戏内人物模型定制钥匙扣\n\
        3.人物胸针：使用人物角色作为胸针，作为身份的象征\n\
        4.喷漆模具：游戏中球馆联盟图标、NBA球队的图标、篮球风格标语字体、字母数字模板，用于打造属于自己的独家球衣\n\
        5.快闪店手提袋设计：袋子融合游戏文化与街头艺术，正面以一位标志性球星的庆祝瞬间为灵魂，通过光影投射和线条趋势捕捉动态美感，其服饰色彩转化为袋子的撞色设计，生动展现游戏内的潮流风尚。\n\
        背面设计则深挖篮球文化的叛逆精神，借鉴游戏中“禁飞区”的喷绘元素，采用涂鸦艺术形式呈现这一竞技术语，搭配老旧禁令标志，营造出既复古又反叛的视觉冲击。顶部醒目地冠以“全明星街球派对”标题，强化品牌标识。\n\
        6.快闪店集卡设计：将游戏角色海报制作成可收集的卡片，游客可以通过购买周边产品获得球星卡面，用户在收集的过程中会充满期待和惊喜，随着卡面的收集会获得逐步积累的成就感。',
    images1: [
      {
        src: '/works/service-design/shopping.png',
        alt: '用户动线图',
        caption: '购物区'
      }
    ],
    images2: [{
      src: '/works/service-design/basketball.png',
      alt: '数字化服务',
      caption: '篮球场'
    }
    ],
    images3: [{
      src: '/works/service-design/diy.png',
      alt: '数字化服务',
      caption: 'DIY区'
    }
    ],
    images4: [
      {
        src: '/works/service-design/gifts.png',
        alt: '数字化服务',
        caption: '周边产品及DIY展示'
      }
    ],
    images5: [
      {
        src: '/works/service-design/live.jpg',
        alt: '布展现场图',
        caption: '布展现场图'
      },
      {
        src: '/works/service-design/poster.jpg',
        alt: '海报',
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
            <h2 className="text-xl font-semibold mb-4">项目概述</h2>
            <p className="text-gray-300 whitespace-pre-line">{work.description}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <h2 className="text-xl font-semibold mb-4">购物区</h2>
            <p className="text-gray-300 whitespace-pre-line">{work.shopping}</p>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {work.images1.map((image, index) => (
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
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h2 className="text-xl font-semibold mb-4">篮球场</h2>
            <p className="text-gray-300 whitespace-pre-line">{work.basketball}</p>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {work.images2.map((image, index) => (
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
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h2 className="text-xl font-semibold mb-4">DIY区</h2>
            <p className="text-gray-300 whitespace-pre-line">{work.diy}</p>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {work.images3.map((image, index) => (
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
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h2 className="text-xl font-semibold mb-4">周边礼品与DIY展示</h2>
            <p className="text-gray-300 whitespace-pre-line">{work.gifts}</p>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {work.images4.map((image, index) => (
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
          <div className="space-y-12">
            <section className="animate-fade-in" style={{ animationDelay: '500ms' }}>
              <h2 className="text-2xl font-semibold mb-6">项目成果展示</h2>
              <div className="grid grid-cols-1 gap-8">
                {work.images5.map((image, index) => (
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