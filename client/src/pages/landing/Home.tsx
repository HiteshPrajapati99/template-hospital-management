import Banner from "./components/Banner";
import Feartures from "./components/Feartures";
import Footer from "./components/Footer";
import GetStart from "./components/GetStart";
import ResultData from "./components/Results";
import Steps from "./components/Steps";

const Home = () => {
  return (
    <>
      <GetStart />
      <Steps />
      <Feartures />
      <ResultData />
      <Banner />
      <Footer />
    </>
  );
};

export default Home;
