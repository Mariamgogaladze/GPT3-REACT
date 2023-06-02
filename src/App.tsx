import "./App.css";
import Nav from "./nav/Nav";
import FirstSection from "./section1/FirstSection";
import SecondSection from "./section2/SecondSection";
import ThirdSection from "./section3/ThirdSection";
import FourthSection from "./section4/FourthSection";
import Register from "./register/Register";
import FIfthSection from "./section5/FIfthSection";
import Footer from "./footer/Footer";
function App() {
  return (
    <div className="App">
      <Nav />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Register />
      <FIfthSection />
      <Footer author="Mariam Gogaladze" />
    </div>
  );
}

export default App;
