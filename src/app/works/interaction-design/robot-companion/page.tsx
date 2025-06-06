'use client';

import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function RobotCompanion() {
  const work = {
    title: '智能机器人学伴',
    background: '在小学小组讨论场景中，73%的教师面临以下难题（源自2024年教育部调研）：\n\n\
    ·学生端讨论失控：表现沉默情况发生15% ，发言垄断者占比＞60 %；讨论离题率高达42 %（尤其在开放式话题中）；情绪冲突引发讨论停滞，超30 % 学生表示“害怕表达不同意见”。\n\n\
    ·教师端管理盲区：需同时监控多个小组，问题漏检率达68 %；学生能力评估依赖老师主观印象，缺乏过程数据导致难以个性化教学。\n\n',
    problems: '学生讨论层面\n\
    参与不均衡：一声不吭/ 发言垄断\n\
    ·发言离题：效率低下\n\
    ·冲突争吵：气氛不融洽\n\
    老师管理层面\n\
    ·多个小组的同时监控\n\
    ·每个学生的能力评估',
    solution: '一、讨论节奏引导系统（学生端）\n\
    1.发言平衡\n\
    触发场景：\n\
    垄断：连续发言≥3次且单次发言时长 > 30秒\n\
    沉默：5分钟内发言次数为0\n\
    2. 主题聚焦\n\
    教师端app显示小组讨论关键词云\n\
    话题偏离时，教师可通过机器人引导讨论方向\n\
    3. 冲突调解\n\
    语音分析：检测音高、否定词密度\n\
    视觉分析：摄像头捕捉愤怒、急躁情绪\n\
    智能调节：机器人预设动作+ 语音\n\n\
    二、讨论能力评估系统（教师端）\n\
    1.讨论词云图判断讨论是否离题\n\
    2.学生能力雷达图和学生发言频率饼状图判断学生个人能力',
    images: [
      {
        src: '/works/interaction-design/robot-companion/app1.png',
        alt: '情感识别',
        caption: '教师端APP1'
      },
      {
        src: '/works/interaction-design/robot-companion/app2.png',
        alt: '交互设计',
        caption: '教师端APP2'
      },
      {
        src: '/works/interaction-design/robot-companion/journey.jpg',
        alt: '反馈系统',
        caption: '用户旅程图'
      },
      {
        src: '/works/interaction-design/robot-companion/usage.png',
        alt: '反馈系统',
        caption: '实际应用'
      },
      {
        src: '/works/interaction-design/robot-companion/test.png',
        alt: '反馈系统',
        caption: '应用场景'
      }
    ]
  };
   const skills = [
    { category: 'AI模型', items: ['ClearVoice', 'SenseVoice', 'DeepSeek'] },
  ];

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
            <h2 className="text-xl font-semibold mb-4">痛点分析</h2>
            <p className="text-gray-300 whitespace-pre-line">{work.problems}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <h2 className="text-xl font-semibold mb-4">设计方案</h2>
            <p className="text-gray-300 whitespace-pre-line">{work.solution}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8" style={{ animationDelay: '400ms' }}>
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 animate-fade-in"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white/20 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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