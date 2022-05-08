import type React from 'react';

export type CarouselProps = {
  children: React.ReactNode;
  autoScrollInterval?: number | null;
};

export type CarouselItemProps = {
  children: React.ReactNode;
};
