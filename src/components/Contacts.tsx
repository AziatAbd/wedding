import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import AnimatedText from "./UI/AnimatedText";

const Contacts = () => {
  return (
    <div className="mx-auto mb-20 w-full">
      <AnimatedText
        delay={0.2}
        className="mb-5 text-center text-5xl font-semibold"
      >
        Контакты
      </AnimatedText>
      <AnimatedText delay={0.2} className="mb-3 text-center text-3xl">
        Номер: (+996) 505 005 004 (Улан)
      </AnimatedText>
      <div className="flex justify-center gap-4">
        <a href="https://wa.me/996505005004">
          <FaWhatsapp className="h-10 w-10" color="#25D366" />
        </a>
        <a href="https://t.me/Ulan_Kubanychbekov">
          <FaTelegram className="h-10 w-10" color="#24A1DE" />
        </a>
      </div>
    </div>
  );
};

export default Contacts;
