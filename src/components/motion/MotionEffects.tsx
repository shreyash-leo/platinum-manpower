"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";
import {
  useRef,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";

const premiumEase = [0.22, 1, 0.36, 1] as const;

type CommonProps = {
  children: ReactNode;
  className?: string;
};

type RevealProps = CommonProps & {
  delay?: number;
  distance?: number;
  direction?: "up" | "down" | "left" | "right";
  amount?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  distance = 48,
  direction = "up",
  amount = 0.12,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const isInView = useInView(ref, {
    once,
    amount,
    margin: "0px 0px -8% 0px",
  });

  const hiddenPosition = reduceMotion
    ? { x: 0, y: 0 }
    : {
        x:
          direction === "left"
            ? distance
            : direction === "right"
              ? -distance
              : 0,
        y:
          direction === "up"
            ? distance
            : direction === "down"
              ? -distance
              : 0,
      };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: reduceMotion ? 1 : 0,
        ...hiddenPosition,
        filter: reduceMotion ? "blur(0px)" : "blur(5px)",
      }}
      animate={
        isInView || reduceMotion
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              filter: "blur(0px)",
            }
          : {
              opacity: 0,
              ...hiddenPosition,
              filter: "blur(5px)",
            }
      }
      transition={{
        duration: reduceMotion ? 0 : 0.82,
        delay: isInView && !reduceMotion ? delay : 0,
        ease: premiumEase,
      }}
    >
      {children}
    </motion.div>
  );
}

type ScaleRevealProps = CommonProps & {
  delay?: number;
  amount?: number;
  once?: boolean;
};

export function ScaleReveal({
  children,
  className = "",
  delay = 0,
  amount = 0.12,
  once = true,
}: ScaleRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const isInView = useInView(ref, {
    once,
    amount,
    margin: "0px 0px -8% 0px",
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: reduceMotion ? 1 : 0,
        scale: reduceMotion ? 1 : 0.94,
        y: reduceMotion ? 0 : 30,
        filter: reduceMotion ? "blur(0px)" : "blur(7px)",
      }}
      animate={
        isInView || reduceMotion
          ? {
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
            }
          : {
              opacity: 0,
              scale: 0.94,
              y: 30,
              filter: "blur(7px)",
            }
      }
      transition={{
        duration: reduceMotion ? 0 : 0.9,
        delay: isInView && !reduceMotion ? delay : 0,
        ease: premiumEase,
      }}
    >
      {children}
    </motion.div>
  );
}

type ClipRevealProps = CommonProps & {
  delay?: number;
  amount?: number;
  once?: boolean;
};

export function ClipReveal({
  children,
  className = "",
  delay = 0,
  amount = 0.1,
  once = true,
}: ClipRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const isInView = useInView(ref, {
    once,
    amount,
    margin: "0px 0px -8% 0px",
  });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{
          opacity: reduceMotion ? 1 : 0,
          y: reduceMotion ? 0 : 58,
          filter: reduceMotion ? "blur(0px)" : "blur(5px)",
        }}
        animate={
          isInView || reduceMotion
            ? {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }
            : {
                opacity: 0,
                y: 58,
                filter: "blur(5px)",
              }
        }
        transition={{
          duration: reduceMotion ? 0 : 0.92,
          delay: isInView && !reduceMotion ? delay : 0,
          ease: premiumEase,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

type StaggerGroupProps = CommonProps & {
  delayChildren?: number;
  stagger?: number;
  amount?: number;
  once?: boolean;
};

export function StaggerGroup({
  children,
  className = "",
  delayChildren = 0.08,
  stagger = 0.1,
  amount = 0.08,
  once = true,
}: StaggerGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const isInView = useInView(ref, {
    once,
    amount,
    margin: "0px 0px -6% 0px",
  });

  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: reduceMotion ? 0 : delayChildren,
        staggerChildren: reduceMotion ? 0 : stagger,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView || reduceMotion ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: CommonProps) {
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: {
      opacity: reduceMotion ? 1 : 0,
      y: reduceMotion ? 0 : 42,
      scale: reduceMotion ? 1 : 0.97,
      filter: reduceMotion ? "blur(0px)" : "blur(5px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: reduceMotion ? 0 : 0.74,
        ease: premiumEase,
      },
    },
  };

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}

type StretchCardProps = CommonProps & {
  activeScale?: number;
};

export function StretchCard({
  children,
  className = "",
  activeScale = 1.018,
}: StretchCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
    className={`relative will-change-transform ${className}`}
    style={{
        transformOrigin: "center center",
        zIndex: 1,
    }}
      whileHover={{
    y: -10,
    scale: 1.02,
    zIndex: 20,
}}
whileTap={
  reduceMotion
    ? undefined
    : {
        scale: 0.98,
      }
}
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 23,
        mass: 0.75,
      }}
    >
      {children}
    </motion.div>
  );
}

type MagneticProps = CommonProps & {
  strength?: number;
};

export function Magnetic({
  children,
  className = "",
  strength = 18,
}: MagneticProps) {
  const reduceMotion = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, {
    stiffness: 260,
    damping: 19,
    mass: 0.45,
  });

  const y = useSpring(rawY, {
    stiffness: 260,
    damping: 19,
    mass: 0.45,
  });

  function handleMove(event: ReactMouseEvent<HTMLDivElement>) {
    if (reduceMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();

    const relativeX =
      event.clientX - bounds.left - bounds.width / 2;

    const relativeY =
      event.clientY - bounds.top - bounds.height / 2;

    rawX.set((relativeX / bounds.width) * strength);
    rawY.set((relativeY / bounds.height) * strength);
  }

  function resetPosition() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.div
      className={className}
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={resetPosition}
    >
      {children}
    </motion.div>
  );
}

type ParallaxMediaProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  distance?: number;
  overlayClassName?: string;
  children?: ReactNode;
};

export function ParallaxMedia({
  src,
  alt,
  className = "",
  imageClassName = "",
  distance = 70,
  overlayClassName = "",
  children,
}: ParallaxMediaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-distance, distance],
  );

  const y = useSpring(rawY, {
    stiffness: 110,
    damping: 24,
    mass: 0.6,
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [1, 1, 1] : [1.08, 1.02, 1.08],
  );

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        draggable={false}
        style={{ y, scale }}
        className={`absolute -inset-y-[15%] left-0 h-[130%] w-full object-cover will-change-transform ${imageClassName}`}
      />

      {overlayClassName ? (
        <div className={`absolute inset-0 ${overlayClassName}`} />
      ) : null}

      {children}
    </div>
  );
}

type FloatingShapeProps = {
  className?: string;
  duration?: number;
  distance?: number;
  delay?: number;
};

export function FloatingShape({
  className = "",
  duration = 7,
  distance = 18,
  delay = 0,
}: FloatingShapeProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className={className}
      animate={
        reduceMotion
          ? undefined
          : {
              y: [0, -distance, 0],
              x: [0, distance * 0.35, 0],
              rotate: [0, 3, 0],
            }
      }
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-[100] h-[3px] origin-left bg-[#104B9C]"
      style={{ scaleX }}
    />
  );
}
