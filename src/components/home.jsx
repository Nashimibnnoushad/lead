import { Navigation } from "./navigation";
import { Features } from "./features";
import { FAQ } from "./faq";
import { Services } from "./services";
import { Footer } from "./footer";
import "../App.css";


const Home = () => {
  return (
    <div>
      <Navigation />
      <Features />     
      <Services />
      <FAQ />
      <Footer/>
    </div>
  );
};

export default Home;
