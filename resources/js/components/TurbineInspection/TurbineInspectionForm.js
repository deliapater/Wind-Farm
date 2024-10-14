import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "./Spinner"

const TurbineInspectionForm = () => {
    const [turbineId, setTurbineId] = useState("");
    const [componentId, setComponentId] = useState("");
    const [grade, setGrade] = useState("");
    const [loading, setLoading] = useState(false);

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

    const handleSubmit = (event) => {
        event.preventDefault();

        setLoading(true)

        const data = {
            turbine_id: turbineId,
            component_id: componentId,
            grade: grade,
        };

        axios
            .post("/api/turbine_inspections", data)
            .then((response) => {
                // Handle successful response
                toast.success("Turbine inspection submitted successfully!");
                setLoading(false);
                //Clear form inputs after submission
                setTurbineId("");
                setComponentId("");
                setGrade("");
                toast.onChange((payload) => {
                    if(payload.status === "removed") {
                        navigate("/");
                    }
                })
            })
            .catch((error) => {
                // Handle error
                toast.error("Error submitting turbine inspection. Please try again.")
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            })
    };

    return (
        <>
            {loading && <Spinner />}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
                <h1 className="text-3xl font-bold mb-4 text-center">
                    Turbine Inspection Form
                </h1>
                <div className="mb-4">
                    <label htmlFor="turbineId" className="block mb-1">
                        Turbine ID:
                    </label>
                    <select
                        id="turbineId"
                        value={turbineId}
                        onChange={(e) => setTurbineId(parseInt(e.target.value, 10))}
                        required
                        disabled={loading}
                        className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    <label htmlFor="componentId" className="block mb-1">
                        Component ID:
                    </label>
                    <select
                        id="componentId"
                        value={componentId}
                        onChange={(e) =>
                            setComponentId(parseInt(e.target.value, 10))
                        }
                        required
                        disabled={loading}
                        className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    <label htmlFor="grade" className="block mb-1">
                        Grade:
                    </label>
                    <select
                        id="grade"
                        value={grade}
                        onChange={(e) => setGrade(parseInt(e.target.value, 10))}
                        required
                        disabled={loading}
                        className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    disabled={loading}
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Submit
                </button>
            </form>
            <ToastContainer />
        </>

    );
};

export default TurbineInspectionForm;
