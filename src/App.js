import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Landpage from "./components/Landpage";
import Nav from "./components/Nav";
import Service from "./components/Service";


function App() {
  return (
    <div>
    <Nav />
      <div className="bg-sky-500 w-full h-scrmeen ">
      <Landpage />

      <About/>
      <Service/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
