import { motion } from "framer-motion";
import iskra from "../assets/iskra.png";
import AnimatedText from "./UI/AnimatedText";
import AnimatedImage from "./UI/AnimatedImage";
import heart from "../assets/heart.svg";
import soundIcon from "../assets/sound.png";
import mot from "../assets/MOT.mp3";
import useSound from "use-sound";
import { useEffect, useState } from "react";

const Dear = () => {
  const [play, { pause }] = useSound(mot);

  const [isPlay, setIsPlay] = useState(true);

  const handlePlay = () => {
    play();
    setIsPlay(true);
  };

  const handleStop = () => {
    pause();
    setIsPlay(false);
  };

  useEffect(() => {
    play();
  }, [play]);

  return (
    <div>
      <div
        onClick={isPlay ? handleStop : handlePlay}
        className="relative mx-auto mb-4 flex w-fit cursor-pointer flex-col items-center"
      >
        {!isPlay ? (
          <div className="absolute bottom-[60%] z-10 w-14 rotate-45 border-t-4 border-t-red-500"></div>
        ) : null}
        <img src={soundIcon} alt="icon" className="w-14" />
        <span className="text-center">
          Эгер музыка сизди алаксытса, аны өчүрүп койсоңуз болот
        </span>
      </div>
      <AnimatedText delay={0.4} className="text-center text-3xl leading-[40px]">
        Урматтуу коноктор!
        <br /> Сиздерди жүрөгүбүздүн кубанычы, нурлуу кызыбыз Элизанын ак
        <br /> жолдуу кыз узатуу тоюна чакырабыз.
        <br /> Төрүбүздү корктондуруп, ак дасторкондун кутун ачып, биздин
        <br />
        кубанычыбызга күбө болуп кетсениздер, биз үчүн чон сыймык!
      </AnimatedText>
      <div className="relative mx-auto mt-8 flex w-fit flex-col items-center">
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
          <div></div>
          <div className="text-lg">1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>

          {Array.from({ length: 26 }, (_, i) => {
            const day = i + 6;
            return (
              <motion.div
                key={day}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.9 + i * 0.03 }}
                className="relative"
              >
                {day === 1 ? (
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
          className="pulse-animation absolute left-[69px] top-[90px] h-10 w-10"
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
