import Home from '../src/components/home'
import Register from '../src/components/register';
import Success from '../src/components/success';
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { Footer } from './components/footer';


const App = () => {
  return (
    <>
      <Router >
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Navigate to='/Home' />}></Route>
          <Route exact path='/Home' element={< Home />}></Route>
          <Route exact path='/Register' element={< Register />}></Route>
          <Route exact path='/Success' element={< Success />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
