import videoSource from "../../assets/Green White Minimalist Wedding Invitation Mobile Video.gif"; // Путь к вашему видео файлу

const BackgroundVideo = () => {
  return (
    <img
      className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
      src={videoSource}
    />
  );
};

export default BackgroundVideo;
