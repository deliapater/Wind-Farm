import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import TurbineInspectionTable from './components/TurbineInspection/TurbineInspectionTable';
import TurbineInspectionForm from './components/TurbineInspection/TurbineInspectionForm';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TurbineInspectionTable />} />
        <Route path="/create" element={<TurbineInspectionForm />} />
        <Route path="*" element={<RedirectToTurbineInspections />} />
      </Routes>
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
