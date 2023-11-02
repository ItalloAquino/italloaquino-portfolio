import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import GetMyResume from "./components/getmyresume/GetMyResume";
import AboutMe from "./components/about/AboutMe";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <GetMyResume />
      <AboutMe />
    </>
  );
}

export default App;
