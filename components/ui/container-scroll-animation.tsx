'use client';
import React, { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'motion/react';

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: '1000px',
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
        aspectRatio: '1.43', // More rectangular like real iPad Pro (roughly 11" x 8.5")
      }}
      className="max-w-6xl -mt-12 mx-auto w-full shadow-2xl relative"
    >
      {/* Main shadow */}
      <div className="absolute -inset-8 bg-black/20 blur-3xl rounded-full transform rotate-1 scale-110"></div>

      {/* iPad Body - Aluminum frame */}
      <div className="relative w-full h-full bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 rounded-[60px] p-[4px] shadow-2xl">
        {/* Outer frame highlight */}
        <div className="absolute inset-0 rounded-[60px] bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500 p-[2px]">
          <div className="w-full h-full rounded-[58px] bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500"></div>
        </div>

        {/* Power button */}
        <div className="absolute -top-[4px] right-[80px] w-[80px] h-[6px] bg-gray-500 rounded-t-sm"></div>

        {/* Volume buttons */}
        <div className="absolute -right-[4px] top-[120px] w-[4px] h-[60px] bg-gray-500 rounded-r-sm"></div>
        <div className="absolute -right-[4px] top-[180px] w-[4px] h-[60px] bg-gray-500 rounded-r-sm"></div>

        {/* Screen with proper thick bezel */}
        <div
          className="relative w-full h-full rounded-[56px] bg-black overflow-hidden"
          style={{ padding: '34px' }}
        >
          {/* Actual screen content area */}
          <div className="w-full h-full bg-gray-100 dark:bg-zinc-900 rounded-[24px] overflow-hidden relative">
            {/* Screen content */}
            <div className="absolute inset-0  overflow-hidden">{children}</div>

            {/* Home indicator */}
            <div className="absolute bottom-[8px] left-1/2 transform -translate-x-1/2 w-[80px] h-[3px] bg-black/30 rounded-full"></div>
          </div>
        </div>

        {/* Screen reflection effect */}
        <div className="absolute inset-[4px] rounded-[24px] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Additional realistic shadow layers */}
      <div className="absolute -inset-4 bg-black/10 blur-xl rounded-full transform -rotate-1"></div>
      <div className="absolute -inset-2 bg-black/5 blur-lg rounded-full transform rotate-0.5"></div>
    </motion.div>
  );
};
