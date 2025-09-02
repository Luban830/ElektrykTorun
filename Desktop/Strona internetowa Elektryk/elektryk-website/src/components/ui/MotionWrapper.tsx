'use client';

import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion';


export const MotionDiv = ({ children, ...props }: HTMLMotionProps<'div'>) => {
  return <motion.div {...props}>{children}</motion.div>;
};

export const MotionH1 = ({ children, ...props }: HTMLMotionProps<'h1'>) => {
  return <motion.h1 {...props}>{children}</motion.h1>;
};

export const MotionP = ({ children, ...props }: HTMLMotionProps<'p'>) => {
  return <motion.p {...props}>{children}</motion.p>;
};

export const MotionA = ({ children, ...props }: HTMLMotionProps<'a'>) => {
  return <motion.a {...props}>{children}</motion.a>;
};

export const MotionH2 = ({ children, ...props }: HTMLMotionProps<'h2'>) => {
  return <motion.h2 {...props}>{children}</motion.h2>;
};

export { AnimatePresence };
