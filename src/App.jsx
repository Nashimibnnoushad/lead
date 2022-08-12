import Home from '../src/components/home'
import Register from '../src/components/register';
import Success from '../src/components/success';
import InviteSuccess from '../src/components/invitationsuccess';
import PaymentFailed from '../src/components/failed';
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { Footer } from './components/footer';


const App = () => {
  return (
    <>
      <Router >
        {/* <div style={{backgroundColor: 'black', color:'white'}}> */}
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Navigate to='/Home' />}></Route>
          <Route exact path='/Home' element={< Home />}></Route>
          <Route exact path='/Register' element={< Register />}></Route>
          <Route exact path='/Success' element={< Success />}></Route>
          <Route exact path='/Invitationsuccess' element={< InviteSuccess />}></Route>
          <Route exact path='/Paymentfailed' element={< PaymentFailed />}></Route>
        </Routes>
        <Footer />
        {/* </div> */}
      </Router>
    </>
  );
};

export default App;
