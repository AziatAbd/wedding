import AnimatedText from "./UI/AnimatedText";

const Map = () => {
  return (
    <div className="mx-auto mb-20">
      <AnimatedText
        delay={0.2}
        className="mb-10 text-center text-5xl font-semibold"
      >
        Өткөрүү орду
      </AnimatedText>
      <AnimatedText delay={0.2} className="mb-10 text-center text-3xl">
        ресторан "Улуу Тоо Зета", Баба-Ата, 87
      </AnimatedText>
      <div style={{ width: "100%", height: "100%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.3643723841565!2d74.5612319121045!3d42.82691790535823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9004146c295%3A0x9043fa7a57758765!2sUluu%20Too%20Zeta!5e1!3m2!1sru!2skg!4v1757255109248!5m2!1sru!2skg"
          style={{ border: 0 }}
          loading="lazy"
          className="h-60 w-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
