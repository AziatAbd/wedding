import Anketa from "../components/Anketa";
import Contacts from "../components/Contacts";
import Dear from "../components/Dear";
import Happines from "../components/Happines";
import Header from "../components/Header";
import Timer from "../components/Timer";
import Map from "../components/Venue";

const MainPage = () => {
  return (
    <div>
      <Header />
      <div className="mb-20 px-3">
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
