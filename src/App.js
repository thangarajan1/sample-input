import Login from './Login';
import './App.css';
import FormBord from './FormBoard.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Employee from './Employee.jsx';
import { createContext, useState } from 'react';
import Salary from './Salary.jsx';
import Dashboard from './Dashboard.jsx';
import Report from './Report.jsx';

export const createCont = createContext()
function App() {
  const [toggle,setToggle]= useState(false);
  const [employeeData,setEmployeeData]=useState([])
  const [login,setLogin]= useState(true)
   const [visible, setVisible] = useState(false);
  return (
    <>
      <createCont.Provider
        value={{
          toggle,
          setToggle,
          employeeData,
          setEmployeeData,
          login,
          setLogin,
          visible,
          setVisible,
        }}
      >
        {login ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
           ) : (
        <BrowserRouter>
          <div className="container ">
            <div className="row">
              <FormBord />
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/reports" element={<Report />} />
                <Route path="/" element={<Employee />} />
                <Route path="/salary" element={<Salary />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
          )} 
      </createCont.Provider>
    </>
  );
}

export default App;
