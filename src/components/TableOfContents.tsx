'use client';

import { List, ChevronRight } from 'lucide-react';
import { TocItem } from '@/lib/knowledgeCenter';

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav aria-label="Tabla de Contenidos del Artículo" className="p-6 bg-[#F3EFEA] border border-[#E5DFD5] rounded-2xl space-y-4">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B2818] font-serif border-b border-[#E5DFD5] pb-2">
        <List className="w-4 h-4 text-[#0B2818]" />
        <span>Índice del Contenido Jurídico</span>
      </div>

      <ol className="space-y-2 text-xs font-medium text-[#444444]">
        {items.map((item) => (
          <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 12}px` }}>
            <button
              onClick={() => scrollToSection(item.id)}
              className="hover:text-[#0B2818] hover:underline transition-colors text-left flex items-start gap-1.5"
            >
              <ChevronRight className="w-3.5 h-3.5 text-[#0B2818] shrink-0 mt-0.5" />
              <span>{item.title}</span>
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}
