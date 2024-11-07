import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const InspectionModal = ({ isOpen, onClose, inspection }) => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(false);

    const getGradeClass = (grade) => {
        switch (grade) {
            case 1:
                return 'text-green-600';
            case 2:
                return 'text-yellow-600';
            case 3:
                return 'text-orange-600';
            case 4:
                return 'text-red-600';
            default:
                return 'text-gray-600';
        }
    };

    useEffect(() => {
        if (isOpen && inspection) {
            const fetchHistory = async () => {
                setLoading(true);
                try {
                    const response = await axios.get(`/api/turbines/${inspection.turbine.id}/components/${inspection.component.id}/history`);
                    setHistory(response.data.history || []);
                } catch (error) {
                    console.error("Error fetching inspection history:", error);
                    setHistory([]);
                } finally {
                    setLoading(false);
                }
            };
            fetchHistory();
        }
    }, [isOpen, inspection]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-lg font-bold mb-4">Inspection Details</h2>
                {inspection ? (
                    <div>
                        <div className="mt-4 p-4 bg-gray-100 shadow-lg rounded-lg">
                            <p><strong>Turbine:</strong> {inspection.turbine.name}</p>
                            <p><strong>Component:</strong> {inspection.component.name}</p>
                            <span className={`py-1 rounded-full font-semibold ${getGradeClass(inspection.grade)}`}>
                                <strong>Grade:</strong> {inspection.grade}
                            </span>
                        </div>
                        {inspection.component.image ? (
                            <img
                                src={inspection.component.image}
                                alt={`${inspection.component.name} Image`}
                                className="mt-4 w-full h-auto object-cover rounded-lg shadow-md"
                            />
                        ) : (
                            <p className="mt-2">No image available for this component.</p>
                        )}
                        {inspection.component.description && (
                            <p className="mt-4 p-4 bg-gray-100 shadow-lg rounded-lg">
                                <strong>Description:</strong> {inspection.component.description}
                            </p>
                        )}
                        <p className="mt-4 p-4 bg-gray-100 shadow-lg rounded-lg">
                            <strong>Created At:</strong> {new Date(inspection.created_at).toLocaleString()}
                        </p>

                        {/* Inspection History Section */}
                        <h3 className="text-lg font-semibold mt-6 mb-2">Inspection History</h3>
                        {loading ? (
                            <p>Loading history...</p>
                        ) : history.length > 0 ? (
                            <ul className="mt-4 bg-gray-100 p-4 rounded-lg shadow-md">
                                {history.map((item) => (
                                    <li key={item.id} className="mb-2">
                                        <p><strong>Date:</strong> {new Date(item.inspected_at).toLocaleDateString()}</p>
                                        <p className={getGradeClass(item.grade)}>
                                            <strong>Grade:</strong> {item.grade}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-600">No previous inspections found for this component.</p>
                        )}
                    </div>
                ) : (
                    <p>No details available.</p>
                )}
                <button
                    onClick={onClose}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

InspectionModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    inspection: PropTypes.object,
};

export default InspectionModal;
