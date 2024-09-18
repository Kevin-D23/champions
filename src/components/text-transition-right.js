import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Children } from "react"; // Import React's Children utility

const TextTransitionRight = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  // Define animation variants for the parent and child components
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child's animation
        delayChildren: 0.25, // Delay before starting staggered animations
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x:- 75 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={parentVariants}
      initial="hidden"
      animate={mainControls}
    >
      {/* Use React.Children.map to handle single or multiple children */}
      {Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={childVariants}
          transition={{ duration: 0.25, delay:.25 }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TextTransitionRight;
