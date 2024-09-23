import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Children } from "react"; // Import React's Children utility

const TextTransitionUp = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);


  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
        delayChildren: 0.25,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={parentVariants}
      initial="hidden"
      animate={mainControls}
      className="transition"
    >

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

export default TextTransitionUp;
