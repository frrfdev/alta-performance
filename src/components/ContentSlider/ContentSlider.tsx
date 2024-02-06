'use client';

import React, { useEffect, useState } from 'react';
import { ContentDisplay } from '../ContentDisplay/ContentDisplay';
import { ProductData } from '@/types/ProductData';
import { useAnimation, motion, PanInfo, useMotionValue } from 'framer-motion';

type ContentSliderProps = {
  product: ProductData;
};

const DRAG_BUFFER = 50;

export const ContentSlider = ({ product }: ContentSliderProps) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [dragging, setDragging] = useState(false);

  const dragY = useMotionValue(0);

  const onDragStart = () => {
    setDragging(true);
  };

  const onDragEnd = () => {
    setDragging(false);

    const y = dragY.get();

    if (y <= -DRAG_BUFFER && slideIndex < product.slides.length - 1) {
      setSlideIndex((prev) => prev + 1);
    }
    if (y >= DRAG_BUFFER && slideIndex > 0) {
      setSlideIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="flex w-full overflow-hidden min-h-full relative">
      <ContentDisplay.Root key={product.id}>
        <motion.div
          transition={{
            x: { type: 'spring', bounce: 0, damping: 0 },
          }}
          className="flex items-center h-full flex-col cursor-grab active:cursor-grabbing"
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          dragConstraints={{
            top: 0,
            bottom: 0,
          }}
          style={{
            y: dragY,
          }}
          animate={{
            translateY: `-${slideIndex * 100}%`,
          }}
          drag="y"
        >
          {product.slides.map((slide) => (
            <motion.div
              key={slide.id}
              className="slide flex-col justify-end flex relative h-full w-screen shrink-0"
              draggable
            >
              <ContentDisplay.Background
                backgroundImageSrc={slide.backgroundSrc}
              ></ContentDisplay.Background>
              <ContentDisplay.Description text={slide.text} />
            </motion.div>
          ))}
        </motion.div>
        <div className="absolute top-0 z-3 w-full pointer-events-none">
          <ContentDisplay.Header productData={product} />
        </div>

        <div className="bottom-[200px] w-full absolute flex justify-end pointer-events-none">
          <div className="bg-red-400 w-10 z-3 p-2 shadow-lg right-0 rounded-tl-full rounded-bl-full">
            aaa
          </div>
        </div>
      </ContentDisplay.Root>
    </div>
  );
};
