import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import ServiceArea from './components/ServiceArea';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <WhyChoose />
      <ServiceArea />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
