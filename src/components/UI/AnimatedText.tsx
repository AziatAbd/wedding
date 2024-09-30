import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  children: React.ReactNode;
  delay: number;
  className: string;
};

const AnimatedText = ({ children, delay = 0, className = "" }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.2, 
  });


  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      ref={ref}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.p>
  );
};




export default AnimatedText;
