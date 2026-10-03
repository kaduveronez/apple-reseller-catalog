'use client';

import React from 'react';
import { PackageCheck, CheckCircle2, Sparkles, Award } from 'lucide-react';
import { ItemCondition, CosmeticGrade } from '@/types/catalog';
import { cn } from '@/lib/utils';

interface ConditionBadgeProps {
  condition: ItemCondition;
  grade?: CosmeticGrade;
  className?: string;
  hasCustomPhoto?: boolean;
}

export function ConditionBadge({
  condition,
  grade,
  className,
  hasCustomPhoto,
}: ConditionBadgeProps) {
  if (condition === 'new_sealed') {
    return (
      <span
        className={cn(
          'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-sm',
          className
        )}
      >
        <PackageCheck className="w-3.5 h-3.5" />
        Novo • Lacrado
      </span>
    );
  }

  // Pre-owned grades
  const gradeLabel =
    grade === 'excellent'
      ? 'Grade A+ (Impecável)'
      : grade === 'very_good'
      ? 'Muito Bom'
      : grade === 'good'
      ? 'Bom'
      : 'Seminovo';

  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      <span
        className={cn(
          'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-primary border border-blue-200/60 shadow-sm',
          className
        )}
      >
        <Award className="w-3.5 h-3.5" />
        {gradeLabel}
      </span>

      {hasCustomPhoto && (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-50 text-amber-800 border border-amber-200/60">
          <Sparkles className="w-3 h-3 text-amber-600" />
          Foto Real da Peça
        </span>
      )}
    </div>
  );
}
