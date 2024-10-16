import React from 'react';
import PropTypes from 'prop-types';

const InspectionModal = ({ isOpen, onClose, inspection }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-lg font-bold mb-4">Inspection Details</h2>
                {inspection ? (
                    <div>
                        <p><strong>Turbine:</strong> {inspection.turbine.name}</p>
                        <p><strong>Component:</strong> {inspection.component.name}</p>
                        <p><strong>Grade:</strong> {inspection.grade}</p>
                        <p><strong>Created At:</strong> {new Date(inspection.created_at).toLocaleString()}</p>
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
