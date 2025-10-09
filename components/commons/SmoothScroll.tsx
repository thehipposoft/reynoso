'use client'
import { ReactLenis } from 'lenis/react';
import React from 'react'; 


interface SmoothScrollProps {
  children: React.ReactNode;
}


function SmoothScroll({children}:SmoothScrollProps) {
  return (
    <ReactLenis root options={{ lerp: 0.07}}>
      { children }
    </ReactLenis>
  )
}

export default SmoothScroll