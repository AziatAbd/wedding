import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
  delay: number;
  className: string;
};

const AnimatedText = ({ children, delay = 0, className = "" }: Props) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.p>
  );
};

export default AnimatedText;
