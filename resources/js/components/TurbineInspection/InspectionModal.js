import React from 'react';
import PropTypes from 'prop-types';

const InspectionModal = ({ isOpen, onClose, inspection }) => {
    if (!isOpen) return null;

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

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-lg font-bold mb-4">Inspection Details</h2>
                {inspection ? (
                    <div>
                        <div className="mt-4 p-4 bg-gray-100 shadow-lg rounded-lg">
                            <p><strong>Turbine:</strong> {inspection.turbine.name}</p>
                            <p><strong>Component:</strong> {inspection.component.name}</p>
                            <span className={`py-1 rounded-full font-semibold ${getGradeClass(inspection.grade)}`}><strong>Grade:</strong> {inspection.grade}</span>
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
                            <p className="mt-4 p-4 bg-gray-100 shadow-lg rounded-lg"><strong>Description:</strong>{inspection.component.description}</p>
                        )}
                        <p className="mt-4 p-4 bg-gray-100 shadow-lg rounded-lg"><strong>Created At:</strong> {new Date(inspection.created_at).toLocaleString()}</p>
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
