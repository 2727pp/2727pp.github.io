'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
      <div className="text-center px-4">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">页面未找到</h2>
          <p className="text-gray-400 mb-8">抱歉，您访问的页面不存在。</p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            返回首页
          </Link>
        </div>
      </div>
    </main>
  );
} 