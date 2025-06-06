'use client';

import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function DepressionScreening() {
  const work = {
    title: '寻航：抑郁症早筛',
    description: '等一次排号，填几套问卷，接受一场长达三小时的评估\n\n\
    但如果只是近期情绪失落呢？\n\n\
    挂哪个科？需要检查吗？\n\n\
    寻航，一场十分钟的游戏！\n\n\
    语言会沉默，行为会掩饰，但脑电不会说谎！',
    theoreticalbasis: '“沉默”的奖赏系统：抑郁症患者的核心特征是对奖惩的敏感度低下\n\n\
    抑郁症的典型症状之一是快感缺失，表现为对原本带来愉悦的事物（如爱好、赞美、金钱等）反应变弱，者与大脑奖励系统的功能差异密切相关\n\n\
    ·纹状体：作为奖赏回路的重要组成部分，其对积极信息的激活显著减弱\n\n\
    ·边缘系统活动减少，而前额叶皮层（PFC）反而异常活跃\n\n\
    ·前扣带皮层（ACC）：奖赏反馈的重要区域激活显著减少\n\n\
    ·128奖励相关电位（ERP）：128通道ERP研究显示，抑郁症患者在奖励反馈阶段的ERP振幅较健康人群更微弱，且变化幅度明显低于健康人群',
    behavior: '·缺少努力动机：不愿意为了奖励而付出努力\n\n\
    ·对奖励强度不敏感：奖赏金额大小的变化不能有效调动其神经反应\n\n\
    ·对频率奖励迟钝：难以形成对高额奖励刺激的偏好\n\n\
    ·对社交性正向反馈的反应减弱：对表扬、点赞、微笑等正向社交反馈不敏感，缺乏预约或激活反应\n\n\
    ·表现出明显的“即时奖励偏好”：更倾向于选择立即获得的小奖励，而不是等待一段时间后获得更大的奖励\n\n\
    我们推测：抑郁症患者对“即将中奖”状态的期待（兴奋感）确实或与正常人差异较大。',
    design1: '有的抑郁筛查系统交互形式较为单一，普遍依赖于标准化问卷或基于鼠标点击的简单操作，主要部署在传统软件界面中，缺乏情境感与沉浸体验，用户参与度与真实反应受限\n\n\
    为增强交互的自然性与沉浸感，我们尝试将虚拟任务与实体装置结合，我们以“海盗船寻宝”为主题，构建具象化交互外壳，将情境、动机、操作动作与反馈机制统一于软硬件融合的实验环境中。\n\n',
    design2: '一场航海寻宝的探险，旅途交织着希望与落空，挑战与惊喜。一个高度还原的沉浸式空间：木质舵盘、海盗金币、神秘按钮……每一个细节都为探索而生。\n\n\
    你不再是屏幕前的受试者，而是一位真正置身航程的心灵航海者......\n\n',
    design3: '我们利用算法，将抽象的脑电数据和繁杂的行为指标，转化为更清晰明了的可视化界面，就像心电图显示心跳一样直观。\n\n\
    行为数据雷达图、快乐指数图、AI TIPS卡片，这不再是医生的“分析报告”，而是你自己的“心理状态说明书”',
    images: [
      {
        src: '/works/interaction-design/depression-screening/game1.png',
        alt: '项目概览',
        caption: '游戏界面1'
      },
      {
        src: '/works/interaction-design/depression-screening/game2.png',
        alt: '对话界面',
        caption: '游戏界面2'
      }
    ],
    video: [
      {
        src: '/works/interaction-design/depression-screening/1.mp4',
        alt: '项目概览',
        caption: '抑郁症话题引入'
      },
      {
        src: '/works/interaction-design/depression-screening/2.mp4',
        alt: '项目概览',
        caption: '模型渲染与页面设计'
      },
      {
        src: '/works/interaction-design/depression-screening/3.mp4',
        alt: '项目概览',
        caption: '数据处理'
      },
      {
        src: '/works/interaction-design/depression-screening/4.mp4',
        alt: '项目概览',
        caption: '交互流程'
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
            <h2 className="text-xl font-semibold mb-4">理论依据</h2>
            <p className="text-gray-300 whitespace-pre-line">{work.theoreticalbasis}</p>
          </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <h2 className="text-xl font-semibold mb-4">抑郁症患者奖励处理表现</h2>
              <p className="text-gray-300 whitespace-pre-line">{work.behavior}</p>
            </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 animate-fade-in" style={{ animationDelay: '500ms' }}>
            <h2 className="text-xl font-semibold mb-4">更自然的交互方式</h2>
            <p className="text-gray-300 whitespace-pre-line">{work.design1}</p>
            <h2 className="text-xl font-semibold mb-4">更沉浸的用户体验</h2>
            <p className="text-gray-300 whitespace-pre-line">{work.design2}</p>
            <h2 className="text-xl font-semibold mb-4">更直观的结果呈现</h2>
            <p className="text-gray-300 whitespace-pre-line">{work.design3}</p>
          </div>
          <div className="space-y-12">
            <section className="animate-fade-in" style={{ animationDelay: '600ms' }}>
              <h2 className="text-2xl font-semibold mb-6">图片展示</h2>
              <div className="grid grid-cols-1 gap-8">
                {work.images.map((image, index) => (
                  <div
                    key={image.src}
                    className="space-y-2 animate-fade-in"
                    style={{ animationDelay: `${700 + index * 100}ms` }}
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
              <h2 className="text-2xl font-semibold mb-6">视频展示</h2>
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