'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface BatteryGaugeProps {
  percentage: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function BatteryGauge({ percentage, className, size = 'sm' }: BatteryGaugeProps) {
  const isHealthy = percentage >= 90;
  const isModerate = percentage >= 80 && percentage < 90;
  const isLow = percentage < 80;

  const colorClass = isHealthy
    ? 'text-[#34c759]'
    : isModerate
    ? 'text-[#ff9500]'
    : 'text-[#ff3b30]';

  const barBgClass = isHealthy
    ? 'bg-[#34c759]'
    : isModerate
    ? 'bg-[#ff9500]'
    : 'bg-[#ff3b30]';

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f5f5f7] border border-hairline/80 font-medium',
        size === 'sm' ? 'text-[11px]' : size === 'md' ? 'text-[13px]' : 'text-[15px]',
        className
      )}
      title={`Saúde da Bateria: ${percentage}%`}
    >
      {/* Battery Icon Outline */}
      <div className="relative flex items-center">
        <div className="w-5 h-2.5 rounded-[3px] border border-ink/40 p-[1px] flex items-center">
          <div
            className={cn('h-full rounded-[1px] transition-all duration-300', barBgClass)}
            style={{ width: `${Math.min(100, Math.max(10, percentage))}%` }}
          />
        </div>
        <div className="w-[1.5px] h-1.5 bg-ink/40 rounded-r-[1px] -ml-[1px]" />
      </div>

      <span className={cn('font-semibold tabular-nums', colorClass)}>
        {percentage}%
      </span>
      <span className="text-ink-muted48 text-[10px] hidden sm:inline">bateria</span>
    </div>
  );
}
