import { motion } from "framer-motion";
import iskra from "../assets/iskra.png";
import AnimatedText from "./UI/AnimatedText";
import AnimatedImage from "./UI/AnimatedImage";
import heart from "../assets/heart.svg";

const Dear = () => {
  return (
    <div>
      <AnimatedText
        delay={0.2}
        className="mx-auto mb-10 w-1/2 text-center text-4xl"
      >
        Дорогие и любимые!
      </AnimatedText>

      <div>{/* Music */}</div>

      <AnimatedText delay={0.4} className="text-center text-xl">
        Один день в этом году будет для нас особенным, и мы хотим провести его в
        кругу близких и друзей. С большим удовольствием приглашаем вас на
        знаменательный праздник - нашу свадьбу!
      </AnimatedText>

      <div className="relative mt-8 flex flex-col items-center">
        <AnimatedText delay={0.6} className="mb-4 text-4xl font-bold">
          Октябрь
        </AnimatedText>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-7 gap-4 text-center font-sans"
        >
          <div>ПН</div>
          <div>ВТ</div>
          <div>СР</div>
          <div>ЧТ</div>
          <div>ПТ</div>
          <div>СБ</div>
          <div>ВС</div>

          <div></div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>

          {Array.from({ length: 25 }, (_, i) => {
            const day = i + 7;
            return (
              <motion.div
                key={day}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.9 + i * 0.03 }}
                className="relative"
              >
                {day === 24 ? (
                  <>
                    <div className="relative flex items-center justify-center">
                      <span>{day}</span>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="flex items-center justify-center rounded-full p-1 text-lg">
                          {day}
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <span>{day}</span>
                )}
              </motion.div>
            );
          })}
        </motion.div>
        <img
          src={heart}
          alt="heart"
          className="pulse-animation absolute bottom-7 h-10 w-10"
        />
      </div>

      <AnimatedImage
        src={iskra}
        alt="Искра"
        className="mx-auto"
        delay={1.5}
        hoverEffect={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
      />
    </div>
  );
};

export default Dear;
