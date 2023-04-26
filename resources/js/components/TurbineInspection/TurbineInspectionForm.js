import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TurbineInspectionForm = () => {
  const [formData, setFormData] = useState({
    turbine: '',
    component: '',
  });
  const [gradeId, setGradeId] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGradeChange = (event) => {
    setGradeId(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add your form submission logic here
    // After successful submission, navigate to another page
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Placeholder Turbine Inspection Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Turbine Name:</label>
          <input
            type="text"
            name="turbine"
            value={formData.turbine}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3"
          />
        </div>
        <div>
          <label className="block">Component Name:</label>
          <input
            type="text"
            name="component"
            value={formData.component}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3"
          />
        </div>
        <div>
        <label htmlFor="grade" className="block">Grade:</label>
          <select id="grade" value={gradeId} onChange={handleGradeChange} className="block mt-1 w-full px-3 py-2 border border-gray-300 rounded-md 
          shadow-sm focus:outline-none focus:border-blue-500">
            <option value="">Select Grade</option>
            <option value="1">Perfect</option>
            <option value="2">Good</option>
            <option value="3">Fair</option>
            <option value="4">Poor</option>
            <option value="5">Missing/Broken</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TurbineInspectionForm;
