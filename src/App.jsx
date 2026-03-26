import './App.css';
import './index.css';
import Footer from './Components/Footer/Footer';
import Navigation from "./Components/Navigation/Navigation";
import Services from './Components/pages/Services/Services';
import Skills from './Components/pages/Skills/Skills';
import Testimonials from './Components/pages/Testimonials/Testimonials';
import Work from './Components/pages/Work/Work';

function App() {
  return (
    <div>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center text-center md:text-left px-4 md:px-10"
        style={{ backgroundImage: 'url("./images/1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full z-10">
          <Navigation />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-2xl mx-auto md:mx-0">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            We’re Building Your Future
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200">
            Take a step towards the future of construction with Cobuild
          </p>

          <div className="mt-6">
            <a
              href="#"
              className="relative bg-orange-400 text-white py-3  rounded-md text-sm md:text-base hover:bg-orange-400 transition"
            >
              <span className="mx-4 ">Get A Quote</span>
            </a>
          </div>

        </div>
      </section>

      {/* OTHER SECTIONS */}
      <Services />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />

    </div>
  );
}

export default App;



