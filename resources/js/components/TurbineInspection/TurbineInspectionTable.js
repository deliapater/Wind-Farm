import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
        axios
            .get("/api/turbine_inspections")
            .then((response) => {
                setTurbineInspections(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        const filteredInspections = turbineInspections.filter(
            (turbineInspection) =>
                turbineInspection.turbine?.name
                    .toLowerCase()
                    .includes(searchInput.toLowerCase()) ||
                turbineInspection.component?.name
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
        );
        setSearchResults(filteredInspections);
    }, [searchInput, turbineInspections]);

    if (!turbineInspections) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container ml-10mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center">
                Turbine Inspections
            </h1>
            <div className="relative mb-4">
                <input
                    type="text"
                    value={searchInput}
                    placeholder="Search for a Turbine or Component Name ..."
                    className="border border-gray-300 rounded-full py-2 px-6 pl-12 pr-8 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/4"
                    onChange={handleSearchInputChange}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="text-gray-500"
                    />
                </div>
            </div>
            <table className="w-full rounded-full">
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
