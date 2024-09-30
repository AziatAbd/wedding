import videoSource from "../../assets/Green White Minimalist Wedding Invitation Mobile Video.gif"; // Путь к вашему видео файлу

const BackgroundVideo = () => {
  return (
    <img
      className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      src={videoSource}
    />
  );
};

export default BackgroundVideo;
