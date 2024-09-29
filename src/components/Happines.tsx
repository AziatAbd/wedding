import ulanJene from "../assets/ulan-jene.jpg";
import jene from "../assets/jene.jpg";
import iskra from "../assets/iskra.png";
import AnimatedText from "./UI/AnimatedText";
import AnimatedImage from "./UI/AnimatedImage";

const Happines = () => {
  return (
    <div>
      <AnimatedText
        delay={0.2}
        className="mx-auto my-10 w-3/4 text-center text-xl"
      >
        Я так счастлив, просто потому, что я встретил тебя
      </AnimatedText>

      <AnimatedText delay={0.4} className="mb-10 text-center text-4xl">
        Моё счастье...
      </AnimatedText>

      <div className="flex justify-center gap-4">
        <AnimatedImage
          src={ulanJene}
          alt="Улан и Женя"
          className="w-1/3 object-cover"
          delay={0.6}
          hoverEffect={{ scale: 1.05, rotate: 3 }}
        />

        <AnimatedImage
          src={jene}
          alt="Женя"
          className="w-1/2 object-cover"
          delay={0.8}
          hoverEffect={{ scale: 1.05, rotate: -3 }}
        />
      </div>

      <AnimatedImage
        src={iskra}
        alt="Искра"
        className="mx-auto"
        delay={1}
        hoverEffect={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
      />
    </div>
  );
};

export default Happines;
