import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const PageWrapper = ({ children }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <AnimatePresence>
      <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export const AnimatedChild = ({ children }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};


export const HeroAnimate = ({ children }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 1}}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1 }}
        transition={{ delay: 0.25, ease: "easeIn" }}
        style={{ position: "relative", overflow: "hidden", width: "100%", height: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export const HeroAnimate2 = ({ children }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 1}}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1 }}
        transition={{ delay: 0.25, ease: "easeIn" }}
        style={{ position: "relative", overflow: "hidden", width: "100%", height: "100%" }}
      >
        
      </motion.div>
    </AnimatePresence>
  );
};