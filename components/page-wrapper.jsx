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
