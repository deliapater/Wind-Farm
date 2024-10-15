import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import TurbineInspectionTable from './components/TurbineInspection/TurbineInspectionTable';
import TurbineInspectionForm from './components/TurbineInspection/TurbineInspectionForm';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const handleSuccess = (message) => {
    toast.success(message);
  }
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TurbineInspectionTable />} />
        <Route path="/create" element={<TurbineInspectionForm onSuccess={handleSuccess} />} />
        <Route path="*" element={<RedirectToTurbineInspections />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={1000} hideProgressBar={false}/>
    </Router>
  );
};

const RedirectToTurbineInspections = () => {
  const navigate = useNavigate();
  
  React.useEffect(() => {
    navigate('/');
  }, [navigate]);

  return null;
};

createRoot(document.getElementById('app')).render(<App />);

export default App;
