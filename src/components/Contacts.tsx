import { FaTelegram, FaWhatsapp } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="mx-auto mb-20 w-full">
      <h1 className="mb-5 text-center text-5xl">Контакты</h1>
      <p className="mb-3 text-center text-3xl">
        Номер: (+996) 505 005 004 (Улан)
      </p>
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
