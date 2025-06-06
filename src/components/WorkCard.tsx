'use client';

import Image from 'next/image';
import Link from 'next/link';

interface WorkCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  link: string;
}

export default function WorkCard({ title, description, imageUrl, category, link }: WorkCardProps) {
  return (
    <div className="group relative bg-white/5 rounded-2xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
      <Link href={link}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
        </div>

        <div className="p-6">
          <span className="inline-block px-3 py-1 text-sm bg-white/10 rounded-full mb-3">
            {category}
          </span>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-400 text-sm line-clamp-2">{description}</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </Link>
    </div>
  );
} 