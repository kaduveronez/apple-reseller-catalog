'use client';

import React, { useState } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RealPhotoGalleryProps {
  photos: string[];
  productName: string;
  isPreOwned: boolean;
}

export function RealPhotoGallery({ photos, productName, isPreOwned }: RealPhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!photos || photos.length === 0) return null;

  const currentPhoto = photos[selectedIndex] || photos[0];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Image View */}
      <div
        onClick={() => setIsLightboxOpen(true)}
        className="relative w-full aspect-square max-h-[500px] bg-canvas-parchment rounded-apple-card overflow-hidden flex items-center justify-center p-6 border border-hairline/60 cursor-zoom-in group"
      >
        {isPreOwned && (
          <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 text-white text-[12px] font-medium backdrop-blur-md shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Fotos reais deste aparelho específico</span>
          </div>
        )}

        <button
          onClick={() => setIsLightboxOpen(true)}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-ink flex items-center justify-center backdrop-blur-sm shadow-sm transition-all opacity-0 group-hover:opacity-100"
          title="Ampliar foto"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {photos.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-ink flex items-center justify-center shadow-md transition-all active:scale-[0.95]"
              title="Foto anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-ink flex items-center justify-center shadow-md transition-all active:scale-[0.95]"
              title="Próxima foto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        <img
          src={currentPhoto}
          alt={`${productName} - Imagem ${selectedIndex + 1}`}
          className={cn(
            'w-full h-full object-contain transition-all duration-300',
            !isPreOwned && 'apple-product-shadow'
          )}
        />
      </div>

      {/* Thumbnails Navigator */}
      {photos.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
          {photos.map((photo, index) => {
            const isSelected = selectedIndex === index;
            return (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={cn(
                  'relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-canvas-parchment p-1.5 border-2 transition-all duration-150 active:scale-[0.95]',
                  isSelected ? 'border-primary ring-2 ring-primary/20' : 'border-hairline hover:border-ink/30'
                )}
              >
                <img
                  src={photo}
                  alt={`Miniatura ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 z-50 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] w-full flex items-center justify-center"
          >
            <img
              src={currentPhoto}
              alt={productName}
              className="max-h-[85vh] max-w-full object-contain rounded-lg"
            />

            {photos.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute -left-4 sm:left-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute -right-4 sm:right-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
