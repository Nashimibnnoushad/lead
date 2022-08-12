import { Navigation } from "./navigation";
import { RegistrationFAQ } from "./registrationfaq";
import { Footer } from "./footer";
import { RegistrationForm } from "./form";
import "../App.css";


const Register = () => {
  return (
    <div>
      <RegistrationForm data={'data'}/>
      <RegistrationFAQ />
    </div>
  );
};

export default Register;
