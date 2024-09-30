import Anketa from "../components/Anketa";
import Contacts from "../components/Contacts";
import Dear from "../components/Dear";
import Happines from "../components/Happines";
import Header from "../components/Header";
import Timer from "../components/Timer";
import Map from "../components/Venue";
import BackgroundVideo from "../components/UI/BackgroundVideo"; // Импортируем компонент

const MainPage = () => {
  return (
    <div className="relative">
      <BackgroundVideo /> {/* Вставляем видео на задний план */}
      <Header />
      <div className="mb-20 px-3 relative z-10">
        <Happines />
        <Dear />
        <Map />
        <Contacts />
        <Anketa />
        <Timer />
      </div>
    </div>
  );
};

export default MainPage;
