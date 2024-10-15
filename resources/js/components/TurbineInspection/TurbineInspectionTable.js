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
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

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
        setCurrentPage(1);
    }, [searchInput, turbineInspections]);

    // Calculate the items to display for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(searchResults.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    if (!turbineInspections) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
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
                    {currentItems.map((turbineInspection) => (
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

            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded ${
                        currentPage === 1
                        ? "bg-gray-300 text-gray-500"
                        : "bg-blue-500 text-white hover:bg-blue-600"
                    }`}
                >
                    Previous 
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded ${
                        currentPage === totalPages
                        ? "bg-gray-300 text-gray-500"
                        : "bg-blue-500 text-white hover:bg-blue-600"
                    }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default TurbineInspectionTable;
