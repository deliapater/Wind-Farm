import React, { useState, useEffect } from 'react';
import axios from 'axios';

const gradeLabels = ['Perfect', 'Minor Issue', 'Moderate Issue', 'Serious Issue', 'Completely Broken/Missing'];

const TurbineInspectionTable = () => {
    const [turbineInspections, setTurbineInspections] = useState([]);

    useEffect(() => {
      axios.get('/api/turbine_inspections')
        .then(response => {
          setTurbineInspections(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    if (!turbineInspections) {
      return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center">Turbine Inspections</h1>
            <table className="w-full rounded">
                <thead>
                    <tr>
                        <th className="bg-gray-100 border text-left px-8 py-4">Turbine Name</th>
                        <th className="bg-gray-100 border text-left px-8 py-4">Component Name</th>
                        <th className="bg-gray-100 border text-left px-8 py-4">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {turbineInspections && turbineInspections.map(turbineInspection => (
                        <tr key={turbineInspection.id}>
                            <td className="border px-8 py-4">{turbineInspection.turbine?.name}</td>
                            <td className="border px-8 py-4">{turbineInspection.component?.name}</td>
                            <td className="border px-8 py-4">{gradeLabels[turbineInspection.grade - 1]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TurbineInspectionTable;