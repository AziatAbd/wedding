import { motion } from "framer-motion";

type Props = {
  delay: number;
  className: string;
  alt: string;
  src: string;
  hoverEffect: object;
};

const AnimatedImage = ({
  src,
  alt,
  delay = 0,
  className = "",
  hoverEffect = {},
}: Props) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay }}
      whileHover={hoverEffect}
      className={className}
    />
  );
};

export default AnimatedImage;
