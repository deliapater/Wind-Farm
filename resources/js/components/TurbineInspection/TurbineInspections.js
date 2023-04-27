import React, { useState, useEffect } from "react";
import axios from "axios";
import TurbineInspectionTable from "./TurbineInspectionTable";

const TurbineInspections = () => {
    const [turbineInspections, setTurbineInspections] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        // Fetch turbine inspections data from API and set it in state
        axios
            .get("/api/turbine_inspections")
            .then((response) => {
                setTurbineInspections(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    // Filter the turbine inspections based on search input
    const filteredTurbineInspections = turbineInspections.filter(
        (turbineInspection) =>
            turbineInspection.turbine?.name
                .toLowerCase()
                .includes(searchInput.toLowerCase()) ||
            turbineInspection.component?.name
                .toLowerCase()
                .includes(searchInput.toLowerCase())
    );

    return (
        <div>
            <TurbineInspectionTable
                turbineInspections={filteredTurbineInspections}
                searchInput={searchInput}
                onSearchInputChange={handleSearchInputChange}
            />
        </div>
    );
};

export default TurbineInspections;
