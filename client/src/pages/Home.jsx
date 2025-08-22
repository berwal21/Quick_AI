import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AiTools from "../components/AiTools";
import Testimonial from "../components/Testtimonial";
import Plan from "../components/Plan";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AiTools />
      <Testimonial />
      <Plan />
      <Footer />
    </>
  );
};

export default Home;
/*lucide-react is a library for icons, 
clerk is a user authentication service and billing platform,
prebuiltui is a collection of pre-built UI components,
*/
