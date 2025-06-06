'use client';

import Navigation from '@/components/Navigation';
import Image from 'next/image';

const skills = [
  { category: '设计工具', items: ['Figma', 'Rhino', 'KeyShot', 'Photoshop', 'Illustrator'] },
  { category: '其他技能', items: ['matlab', 'VS Code', 'Processing'] },
];

const education = [
  {
    school: '浙江大学',
    degree: '计算机科学与技术学院 工业设计 本科',
    period: '2022 - 2026',
    details: [
      '主修课程：设计基础、造型基础、服务创新设计、设计思维与表达、设计管理、产品形式与方法设计、信息与交互设计技术、\
      信息产品设计、文化构成与创新设计、面向对象程序设计、数据结构与算法、程序设计专题、计算机图形学、微观经济学。'
    ]
  }
];

const experiences = {
  campus: [
    {
      title: '对外拓展部部长',
      organization: '浙大求是勤创 ',
      period: '2023.08 - 2024.06',
      details: [
        '浙大勤创是浙江大学党委学工部下属的以勤工助学和创业实践为主要职能的学生组织。勤创致力于培养浙大学生的创新创业意识，\
        开展一系列与大学生创业启蒙教育相关的精品活动，同时为校内学生提供大量参加兼职、实习的机会。\
        在我任对外拓展部部长期间，我连同副部长一起组织部员举办了主题分别为"驾驭未来，智行天下"和"人工智能创\
        业者的成功之道"的创·纪元活动，其中"驾驭未来，智行天下"活动旨在让同学们了解智能驾驶的目前现状和未来发展，\
        我们邀请到了华为浙江培训代表黄越斌先生为同学们介绍华为问界M7智能SUV的创意和优势，而"人工智能创业者的成功之道"活动\
        旨在激发同学们对人工智能创业的热情，我们邀请到了箴理科技的张艺飞学长来展示他对"创业 + 大模型"的独特见解。在这两次活动中，\
        我主要负责的是活动策划和联络嘉宾的任务，不仅受到了指导老师的认可，也收获了同学们的一致好评。'
      ]
    },
    {
      title: '优秀营员',
      organization: '浙江大学第四期本科学生国际素养提升训练营 ',
      period: '2023.06 - 2023.07',
      details: [
        '浙江大学本科学生国际素养提升中心是由党委学生工作部、求是学院、浙江大学学生国际化能力培养基地联合成立的\
        国际化素养拓展平台。开设"国际素养提升"训练营。旨在培养学生心怀"国之大者"，奋力"走在前列"的全球视野和\
        国际格局，增强文化自信，提升国际理解能力和全球竞争力。我在此次暑期训练营期间，完成了跨文化沟通、大变局下的\
        中国外交、国际礼仪等理论课程学习，在结营仪式上表达了自己对于跨文化冲突的见解和分析，收获很多。'
      ]
    }
  ],
  social: [
    {
      title: '软件开发工程师（实习生）',
      company: '华为云计算技术有限公司 ',
      period: '2024.06 - 2024.08',
      details: [
        '华为云计算技术有限公司（Huawei Cloud Computing Technologies Co., Ltd.），是由华为投资控股有限公司全资\
        控股的一家公司，经营范围包括数据服务、软件和信息技术服务、智能化设计咨询及改造、通信产品的研发、制造、销\
        售、服务等。产品包括弹性云服务器、云耀云服务器、云硬盘等。我所在的项目组是EI服务产品部，岗位是软件开发工程\
        师（实习生），整个部门负责的是云数据库GaussDB的日常运营、版本迭代、bug修复、性能测试等业务。\
        我实习期间负责的工作内容有：利用python实现GaussDB读取parquet格式的文件，熟悉并利用GDB调试，最终的测试结果均合格。\
        在此次实习经历中，我学会了许多新的代码知识，也初步熟悉了整个的业务流程。'
      ]
    },
    {
      title: '游戏策划（实习生）',
      company: '杭州巴布游科技有限公司',
      period: '2024.06 - 2024.08',
      details: [
        '杭州巴布游科技有限公司是一家专业的游戏研发公司，科技中小型企业，擅长休闲游戏、模拟经营游戏、卡牌游戏和\
        SLG游戏的研发。公司旗下有巴布工作室和寻龙工作室，巴布工作室代表作《足球: 巨星崛起》(Football Rising Star)、\
        CBA正版授权《中职篮: 全力以赴》、模拟经营游戏《夺笋高手》、《黑石镇传说》，寻龙工作室代表作《最强史莱姆》、\
        《山海记》。我在实习期间负责的是寻龙工作室的山海记游戏，以及一款在当时即将推出的飞机战斗游戏（当时暂定南天门），按\
        时间顺序我的工作内容有：熟悉游戏并完成游玩体验报告、测试游戏内新功能、检测并反馈bug、测试技能伤害并给出平\
        衡伤害数值和优化建议（不同的养成进度、局内选项搭配、伤害类型的克制关系）、体验其他同类游戏并完成试玩报告\
        （记录新手前1h的新手教程和任务引导等游戏流程）、自主完成新玩法策划案初稿、给出新游戏技能的猜想和建议、测试\
        新游戏已完成的功能等。实习期间我和项目主策划以及其他策划同事积极交流，向前辈们学习经验，学会了站在策划的角度去思考，给了我很大的启示。'
      ]
    }
  ]
};

const awards = [
  '2024浙江大学网易联合课程《服务创新设计》优秀作品',
  '浙江大学第四期本科学生国际素养提升训练营结业优秀奖',
  '礼迎亚运，仪展美德浙江大学求是学院第二届校园文明礼仪形象大赛优胜奖'
];

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center animate-fade-in">
            关于我
          </h1>

          {/* 基础信息和照片 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white/10">
              <Image
                src="/images/profile.jpg"
                alt="个人照片"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-4">基础信息</h2>
              <div className="space-y-2 text-gray-300">
                <p><span className="text-white font-medium">姓名：</span>李尔琦</p>
                <p><span className="text-white font-medium">出生年月：</span>2004年10月</p>
                <p><span className="text-white font-medium">性别：</span>男</p>
                <p><span className="text-white font-medium">民族：</span>蒙古族</p>
                <p><span className="text-white font-medium">籍贯：</span>内蒙古自治区赤峰市</p>
                <p><span className="text-white font-medium">联系电话：</span>17548751599</p>
                <p><span className="text-white font-medium">邮箱：</span>791731058@qq.com</p>
              </div>
            </div>
          </div>

          {/* 教育背景 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h2 className="text-2xl font-semibold mb-6">教育背景</h2>
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-white/20 pl-4 mb-6 last:mb-0">
                <h3 className="text-xl font-medium">{edu.school}</h3>
                <p className="text-gray-400">{edu.degree} | {edu.period}</p>
                <ul className="mt-2 space-y-1 text-gray-300">
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 校园经历 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <h2 className="text-2xl font-semibold mb-6">校园经历</h2>
            {experiences.campus.map((exp, index) => (
              <div key={index} className="border-l-2 border-white/20 pl-4 mb-6 last:mb-0">
                <h3 className="text-xl font-medium">{exp.title}</h3>
                <p className="text-gray-400">{exp.organization} | {exp.period}</p>
                <ul className="mt-2 space-y-1 text-gray-300">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 社会经历 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h2 className="text-2xl font-semibold mb-6">社会经历</h2>
            {experiences.social.map((exp, index) => (
              <div key={index} className="border-l-2 border-white/20 pl-4 mb-6 last:mb-0">
                <h3 className="text-xl font-medium">{exp.title}</h3>
                <p className="text-gray-400">{exp.company} | {exp.period}</p>
                <ul className="mt-2 space-y-1 text-gray-300">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 荣誉证书 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 animate-fade-in" style={{ animationDelay: '500ms' }}>
            <h2 className="text-2xl font-semibold mb-6">荣誉证书</h2>
            <ul className="space-y-2 text-gray-300">
              {awards.map((award, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-white/50 rounded-full mr-3"></span>
                  {award}
                </li>
              ))}
            </ul>
          </div>

          {/* 技能 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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

          {/* 自我评价 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 animate-fade-in" style={{ animationDelay: '1000ms' }}>
            <h2 className="text-2xl font-semibold mb-4">自我评价</h2>
            <p className="text-gray-300 leading-relaxed">
              善于观察生活，喜欢阅读，热爱思考，对事物有自己独特的见解；善于在工作中发现问题、提出问题、解决问题，思考问题不拘泥，有较强的分析能力；热爱学习新鲜事物，动手能力强。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 