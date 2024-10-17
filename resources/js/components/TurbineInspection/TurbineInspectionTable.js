import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEye, faTrash, faChevronLeft, faChevronRight, faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import Spinner from "./Spinner";
import InspectionModal from "./InspectionModal";
import ConfirmationModal from "./ConfirmationModal";
import { ToastContainer, toast } from "react-toastify";

const gradeLabels = [
    "Perfect",
    "Minor Issue",
    "Moderate Issue",
    "Serious Issue",
    "Completely Broken/Missing",
];

const TurbineInspectionTable = ({inspections}) => {
    const [turbineInspections, setTurbineInspections] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0)
    const [paginationData, setPaginationData] = useState({});
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedInspection, setSelectedInspection] = useState(null)
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
    const [inspectionToDelete, setInspectionToDelete] = useState(null);

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
        setCurrentPage(1);
    };

    const fetchTurbineInspections = async (page = 1, search="") => {
        setLoading(true);
        try {
            const response = await axios.get("/api/turbine_inspections", {
                params: {
                    page,
                    search
                },
            });
            console.log("API Response:", response.data);

            setTurbineInspections(response.data.data);
            setCurrentPage(response.data.current_page);
            setTotalPages(response.data.last_page);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const handleRowClick = (inspection) => {
        setSelectedInspection(inspection);
        setIsModalOpen(true);
    };

    const handleDeleteClick = (inspection) => {
        setInspectionToDelete(inspection);
        setIsConfirmationModalOpen(true);
    };

    const confirmDelete = async () => {
        if (inspectionToDelete) {
            try {
                await axios.delete(`/api/turbine_inspections/${inspectionToDelete.id}`);
                // Optionally, you can update the state to remove the deleted inspection from the list
                setTurbineInspections(turbineInspections.filter(ins => ins.id !== inspectionToDelete.id));
                toast.success("Inspection deleted successfully");
            } catch (error) {
                console.error("Error deleting inspection:", error);
                toast.error("Failed to delete inspection");
            }
        }
        setIsConfirmationModalOpen(false);
        setInspectionToDelete(null);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedInspection(null);
    };

    useEffect(() => {
        fetchTurbineInspections(currentPage, searchInput);
    }, [currentPage, searchInput]);

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
            {loading ? (

                    <Spinner />
  
            ) : (
                <>
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
                    {turbineInspections &&
                    turbineInspections.map((turbineInspection) => (
                            <tr key={turbineInspection.id} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => handleRowClick(turbineInspection)}>
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
                                <td className="border px-2 py-4 text-center cursor-pointer" >
                                <FontAwesomeIcon icon={faEye} className="text-blue-500 hover:text-blue-700 mr-4" onClick={() => handleRowClick(turbineInspection)}/>
                                <FontAwesomeIcon
                                            icon={faTrash}
                                            className="cursor-pointer text-red-500"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                handleDeleteClick(turbineInspection)}
                                            }
                                        />
                                </td>
                            </tr>
                        ))}
                </tbody>
                <ConfirmationModal
                isOpen={isConfirmationModalOpen}
                onClose={() => setIsConfirmationModalOpen(false)}
                onConfirm={confirmDelete}
            />
            </table>
            <InspectionModal 
            isOpen={isModalOpen}
            onClose={closeModal}
            inspection={selectedInspection}
            />

            <div className="flex justify-center mt-4">
                <button
                    onClick={() => setCurrentPage(currentPage -1)}
                    disabled={currentPage === 1}
                    className="mx-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-full"
                >
                     <FontAwesomeIcon icon={faAngleDoubleLeft} />
                </button>
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="mx-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-full"
                >
                   <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span className="mx-2 py-2 px-4">
                   Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage >= totalPages}
                    className="mx-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-full"
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
                <button
                    onClick={() => setCurrentPage(totalPages)}
                    disabled={currentPage >= totalPages}
                    className="mx-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-full"
                >
                    <FontAwesomeIcon icon={faAngleDoubleRight} /> 
                </button>
            </div>
            </>
                 )}
        </div>
    );
};

export default TurbineInspectionTable;
