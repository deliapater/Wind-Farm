import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const TurbineInspectionForm = ({ onSuccess }) => {
    const [turbineId, setTurbineId] = useState("");
    const [componentId, setComponentId] = useState("");
    const [grade, setGrade] = useState("");

    const navigate = useNavigate();

    const turbinesOptions = [
        { label: "Turbine A", value: 1 },
        { label: "Turbine B", value: 2 },
        { label: "Turbine C", value: 3 },
    ];

    const componentsOptions = [
        { label: "Blade", value: 1 },
        { label: "Rotor", value: 2 },
        { label: "Hub", value: 3 },
        { label: "Generator", value: 4 },
    ];

    const gradeOptions = [
        { label: "Perfect", value: 1 },
        { label: "Minor Issue", value: 2 },
        { label: "Moderate Issue", value: 3 },
        { label: "Serious Issue", value: 4 },
        { label: "Completely Broken/Missing", value: 5 },
    ];

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post("/api/turbine_inspections", {
                turbine_id: turbineId,
                component_id: componentId,
                grade,
            });

            onSuccess("Inspection submitted successfully!");
            navigate("/");
        } catch (error) {
            console.error(error);
            toast.error("Error submitting inspections!");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto w-full bg-white p-8 rounded-lg shadow-lg"
            >
                <h1 className="text-3xl font-semibold mb-6 text-center text-gray-700">
                    Turbine Inspection Form
                </h1>

                <div className="mb-4">
                    <label htmlFor="turbineId" className="block text-gray-600 mb-2 font-medium">
                        Turbine ID:
                    </label>
                    <select
                        id="turbineId"
                        value={turbineId}
                        onChange={(e) => setTurbineId(parseInt(e.target.value, 10))}
                        required
                        className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option disabled value="">
                            Select a Turbine
                        </option>
                        {turbinesOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="componentId" className="block text-gray-600 mb-2 font-medium">
                        Component ID:
                    </label>
                    <select
                        id="componentId"
                        value={componentId}
                        onChange={(e) => setComponentId(parseInt(e.target.value, 10))}
                        required
                        className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option disabled value="">
                            Select a Component
                        </option>
                        {componentsOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="grade" className="block text-gray-600 mb-2 font-medium">
                        Grade:
                    </label>
                    <select
                        id="grade"
                        value={grade}
                        onChange={(e) => setGrade(parseInt(e.target.value, 10))}
                        required
                        className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option disabled value="">
                            Select a Grade
                        </option>
                        {gradeOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default TurbineInspectionForm;