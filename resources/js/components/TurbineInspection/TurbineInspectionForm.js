import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TurbineInspectionForm = () => {
    const [turbineId, setTurbineId] = useState("");
    const [componentId, setComponentId] = useState("");
    const [grade, setGrade] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleGradeChange = (event) => {
        setGradeId(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            turbine_id: turbineId,
            component_id: componentId,
            grade: parseInt(grade),
        };

        axios
            .post("/api/turbine_inspections", data)
            .then((response) => {
                // Handle successful response
                console.log(response.data);
            })
            .catch((error) => {
                // Handle error
                console.error(error);
            });

        // Clear form inputs after submission
        setTurbineId("");
        setComponentId("");
        setGrade("");
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4 text-center">
                Turbine Inspection Form
            </h1>
            <div className="mb-4">
                <label htmlFor="turbineId" className="block mb-1">
                    Turbine ID:
                </label>
                <input
                    type="text"
                    id="turbineId"
                    value={turbineId}
                    onChange={(e) => setTurbineId(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="componentId" className="block mb-1">
                    Component ID:
                </label>
                <input
                    type="text"
                    id="componentId"
                    value={componentId}
                    onChange={(e) => setComponentId(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="grade" className="block mb-1">
                    Grade:
                </label>
                <input
                    type="number"
                    id="grade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded"
            >
                Submit
            </button>
        </form>
    );
};

export default TurbineInspectionForm;