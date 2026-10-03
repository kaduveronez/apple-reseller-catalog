'use client';

import React, { useState } from 'react';
import { ChevronDown, Cpu, Monitor, Camera, BatteryCharging, Zap, Check } from 'lucide-react';
import { AppleProductSpecs } from '@/types/catalog';
import { cn } from '@/lib/utils';

interface TechSpecsAccordionProps {
  specs: AppleProductSpecs;
  productName: string;
}

export function TechSpecsAccordion({ specs, productName }: TechSpecsAccordionProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border border-hairline rounded-apple-card bg-white overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-canvas-parchment/40 transition-colors"
      >
        <div>
          <h3 className="text-[20px] font-semibold text-ink">
            Especificações Técnicas Oficiais Apple
          </h3>
          <p className="text-[14px] text-ink-muted48 mt-0.5">
            Dados de engenharia e recursos de fábrica do {productName}
          </p>
        </div>
        <div
          className={cn(
            'w-8 h-8 rounded-full bg-canvas-parchment flex items-center justify-center transition-transform duration-300',
            isOpen ? 'rotate-180' : ''
          )}
        >
          <ChevronDown className="w-4 h-4 text-ink" />
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 pt-2 border-t border-hairline/60 divide-y divide-hairline/60">
          {/* Highlights */}
          {specs.highlights && specs.highlights.length > 0 && (
            <div className="py-4">
              <h4 className="text-[13px] font-semibold uppercase tracking-wider text-ink-muted48 mb-3 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-primary" />
                Destaques da Engenharia
              </h4>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {specs.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2 text-[14px] text-ink">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Chip */}
          {specs.chip && (
            <div className="py-4 grid sm:grid-cols-3 gap-2">
              <div className="text-[14px] font-medium text-ink-muted48 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-primary" />
                Processador & Neural
              </div>
              <div className="sm:col-span-2 text-[15px] font-normal text-ink">
                {specs.chip}
              </div>
            </div>
          )}

          {/* Display */}
          {specs.display && (
            <div className="py-4 grid sm:grid-cols-3 gap-2">
              <div className="text-[14px] font-medium text-ink-muted48 flex items-center gap-2">
                <Monitor className="w-4 h-4 text-primary" />
                Tela & Resolução
              </div>
              <div className="sm:col-span-2 text-[15px] font-normal text-ink">
                {specs.display}
              </div>
            </div>
          )}

          {/* Camera */}
          {specs.camera && (
            <div className="py-4 grid sm:grid-cols-3 gap-2">
              <div className="text-[14px] font-medium text-ink-muted48 flex items-center gap-2">
                <Camera className="w-4 h-4 text-primary" />
                Sistema de Câmeras
              </div>
              <div className="sm:col-span-2 text-[15px] font-normal text-ink">
                {specs.camera}
              </div>
            </div>
          )}

          {/* Battery */}
          {specs.battery && (
            <div className="py-4 grid sm:grid-cols-3 gap-2">
              <div className="text-[14px] font-medium text-ink-muted48 flex items-center gap-2">
                <BatteryCharging className="w-4 h-4 text-primary" />
                Autonomia & Energia
              </div>
              <div className="sm:col-span-2 text-[15px] font-normal text-ink">
                {specs.battery}
              </div>
            </div>
          )}

          {/* Ports & Connectivity */}
          {(specs.ports || specs.connectivity) && (
            <div className="py-4 grid sm:grid-cols-3 gap-2">
              <div className="text-[14px] font-medium text-ink-muted48">
                Conectividade & Portas
              </div>
              <div className="sm:col-span-2 text-[15px] font-normal text-ink space-y-1">
                {specs.ports && <div>Portas: {specs.ports}</div>}
                {specs.connectivity && <div>Rede: {specs.connectivity}</div>}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
