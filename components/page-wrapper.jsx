import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const PageWrapper = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ delay: 0.25, ease: "easeIn" }}
        style={{ position: "relative", overflow: "hidden" }}
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
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
