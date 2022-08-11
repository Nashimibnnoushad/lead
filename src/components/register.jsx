import { Navigation } from "./navigation";
import { RegistrationFAQ } from "./registrationfaq";
import { Footer } from "./footer";
import { RegistrationForm } from "./form";
import "../App.css";


const Register = () => {
  return (
    <div>
      <Navigation />
      <RegistrationForm data={'data'}/>
      <RegistrationFAQ />
      <Footer/>
    </div>
  );
};

export default Register;
