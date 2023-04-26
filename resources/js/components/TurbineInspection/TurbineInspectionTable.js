import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
        <div>
            <h1>Turbine Inspections</h1>
            <table>
                <thead>
                    <tr>
                        <th>Turbine Name</th>
                        <th>Component Name</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {turbineInspections && turbineInspections.map(turbineInspections => (
                        <tr key={turbineInspections.id}>
                            <td>{turbineInspections.turbine?.name}</td>
                            <td>{turbineInspections.component?.name}</td>
                            <td>{turbineInspections.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TurbineInspectionTable;
