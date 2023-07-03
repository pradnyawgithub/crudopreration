// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Employee from './Employee';
import EmpCreate from './EmpCreate';
import EmpEdit from './EmpEdit';

function App1() {
  return (
    <div className="App1">
     <h2>React app crud operation</h2>
     <BrowserRouter>
  <Routes>
    <Route path='/' element={<Employee/>}></Route>
    <Route path='/employee/create' element={<EmpCreate/>}></Route>
    <Route path='/employee/edit/:empid' element={<EmpEdit/>}></Route>
  </Routes>
  </BrowserRouter>
    </div>

  );
 
}

export default App1;