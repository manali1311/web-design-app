import "./App.css";
import CitySection from "./components/CitySection/CitySection";
import CTASection from "./components/CTASection/CTASection";
import EmployerSection from "./components/EmployerSection/EmployerSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import JobSeekerSection from "./components/JobSeekerSection/JobSeekerSection";
import NewsletterSection from "./components/NewsLetterSection/NewsLetterSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <HowItWorks />
      <EmployerSection />
      <JobSeekerSection />
      <CitySection />
      <CTASection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default App;
