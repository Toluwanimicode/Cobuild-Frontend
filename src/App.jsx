import './App.css';
import Footer from './Components/Footer/Footer';
import Navigation from "./Components/Navigation/Navigation";
import Contact from './Components/pages/Contact/Contact';
import Services from './Components/pages/Services/Services';
import Skills from './Components/pages/Skills/Skills';
import Testimonials from './Components/pages/Testimonials/Testimonials';
import Work from './Components/pages/Work/Work';


function App() {
  return (
    <div>
        <section
      id="hero"
      className="section hero text-center bg-overlay bg-overlay-dark bg-parallax fullscreen bg-section"
      style={{ backgroundImage: 'url("./images/1.jpg")' }}
    >
      <Navigation />
      <div className="pos-vertical-center">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="hero--content">
                <h1 className="hero--headline">We’re Building Your Future</h1>
                <p className="hero--bio">Take a step towards the future of construction with Cobuild</p>
                <a href="#" className="btn btn--primary btn--rounded">Get A Quote</a>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </section>
      <Services />
      <Work />
      <Skills/>
      <Testimonials />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;



