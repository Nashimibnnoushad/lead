import Home from '../src/components/home'
import Register from '../src/components/register';
import "./App.css";
import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom';
const App = () => {
  return (
    <Router>
           <Routes>
                 <Route exact path='/' element={<Navigate to='/Home'/>}></Route>
                 <Route exact path='/Home' element={< Home />}></Route>
                 <Route exact path='/Register' element={< Register />}></Route>
          </Routes>
    </Router>
  );
};

export default App;
