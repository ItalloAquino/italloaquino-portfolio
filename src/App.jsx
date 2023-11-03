import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import GetMyResume from "./components/getmyresume/GetMyResume";
import AboutMe from "./components/about/AboutMe";
import MyProjects from "./components/myprojects/MyProjects";
import HireMe from "./components/hireme/HireMe";
import SocialMediaIcons from "./components/socialmedia/SocialMedia";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <GetMyResume />
      <AboutMe />
      <MyProjects />
      <HireMe />
      <SocialMediaIcons />
      <Footer />
    </>
  );
}

export default App;
