import React, { useState, useEffect } from "react";
import axios from "axios";

const gradeLabels = [
    "Perfect",
    "Minor Issue",
    "Moderate Issue",
    "Serious Issue",
    "Completely Broken/Missing",
];

const TurbineInspectionTable = () => {
    const [turbineInspections, setTurbineInspections] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    useEffect(() => {
        axios.get('/api/turbine_inspections')
          .then(response => {
            setTurbineInspections(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

    useEffect(() => {
        const filteredInspections = turbineInspections.filter(turbineInspection =>
          turbineInspection.turbine?.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          turbineInspection.component?.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        setSearchResults(filteredInspections);
      }, [searchInput, turbineInspections]);
    
    if (!turbineInspections) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center">
                Turbine Inspections
            </h1>
            <input
                type="text"
                value={searchInput}
                onChange={handleSearchInputChange}
                placeholder="Search for a Turbine or Component Name ..."
                className="px-4 py-2 mb-4 rounded w-full"
            />
            <table className="w-full rounded">
                <thead>
                    <tr>
                        <th className="bg-gray-100 border text-left px-8 py-4">
                            Turbine Name
                        </th>
                        <th className="bg-gray-100 border text-left px-8 py-4">
                            Component Name
                        </th>
                        <th className="bg-gray-100 border text-left px-8 py-4">
                            Grade
                        </th>
                        <th className="bg-gray-100 border text-left px-8 py-4">
                            Date
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {searchResults &&
                        searchResults.map((turbineInspection) => (
                            <tr key={turbineInspection.id}>
                                <td className="border px-8 py-4">
                                    {turbineInspection.turbine?.name}
                                </td>
                                <td className="border px-8 py-4">
                                    {turbineInspection.component?.name}
                                </td>
                                <td className="border px-8 py-4">
                                    {gradeLabels[turbineInspection.grade - 1]}
                                </td>
                                <td className="border px-8 py-4">
                                    {new Date(
                                        turbineInspection.created_at
                                    ).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default TurbineInspectionTable;
