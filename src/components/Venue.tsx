const Map = () => {
  return (
    <div className="mx-auto mb-20">
      <h1 className="mb-10 text-center text-5xl">Место проведения</h1>
      <p className="mb-10 text-center text-3xl">Абдырахманова, 342в, Балыкчы</p>
      <div style={{ width: "100%", height: "100%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1617.3493910259851!2d76.21058727984803!3d42.461300192159165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389b2526e553035d%3A0x56791eca668eaa9f!2z0JDQudC00LDRgNCx0LXQuiDRgtC-0LnQutCw0L3QsNGB0Ys!5e1!3m2!1sru!2skg!4v1727624021937!5m2!1sru!2skg"
          style={{ border: 0 }}
          loading="lazy"
          className="h-60 w-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
