import './assets/css/custom.css';
import Login from './components/static/pages/login/Login';
import Signup from './components/static/pages/login/Signup';
import ResetPassword from './components/static/pages/login/Resetpassword';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';




function App() {
  return (
    <> 
        <Router> 
           <Routes>
                 <Route exact path='/' element={< Login />}></Route>
                 <Route exact path='/Signup' element={< Signup />}></Route> 
                 <Route exact path='/ResetPassword' element={< ResetPassword />}></Route> 
          </Routes> 
       </Router>
    </>
  );
}

export default App;
