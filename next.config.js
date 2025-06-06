/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 开启静态导出
  images: {
    unoptimized: true, // 如果你使用了 <Image> 组件，必须加上
  },
  basePath: '/2727pp.github.io', // 替换为你的 GitHub 仓库名
  assetPrefix: '/2727pp.github.io', // 替换为你的 GitHub 仓库名
};

module.exports = nextConfig;
