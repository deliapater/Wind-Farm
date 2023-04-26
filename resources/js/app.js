import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TurbineInspectionTable from './components/TurbineInspection/TurbineInspectionTable';
import TurbineInspectionForm from './components/TurbineInspection/TurbineInspectionForm';

const App = () => {
    return (
      <Router>
      <Routes>
        <Route path="/turbine_inspections" element={<TurbineInspectionTable />} />
        <Route path="/turbine_inspections/create" element={<TurbineInspectionForm />} />
      </Routes>
    </Router>
    );
};

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
