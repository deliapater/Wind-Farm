import React from 'react';
import TurbineInspectionTable from './TurbineInspectionTable';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const sampleInspections = [
    {
        "id": 1,
        "turbine_id": 4,
        "component_id": 1,
        "grade": 1,
        "created_at": "2024-10-17T15:35:38.000000Z",
        "updated_at": "2024-10-17T15:35:38.000000Z",
        "deleted_at": null,
        "turbine": {
            "id": 4,
            "name": "Turbine A",
            "created_at": "2024-10-17T15:35:38.000000Z",
            "updated_at": "2024-10-17T15:35:38.000000Z"
        },
        "component": {
            "id": 1,
            "name": "Blade",
            "image": null,
            "description": "This is the blade of the turbine, which converts wind energy into rotational energy."
        }
    },
    {
        "id": 2,
        "turbine_id": 4,
        "component_id": 2,
        "grade": 4,
        "created_at": "2024-10-17T15:35:38.000000Z",
        "updated_at": "2024-10-17T15:35:38.000000Z",
        "deleted_at": null,
        "turbine": {
            "id": 4,
            "name": "Turbine A",
            "created_at": "2024-10-17T15:35:38.000000Z",
            "updated_at": "2024-10-17T15:35:38.000000Z"
        },
        "component": {
            "id": 2,
            "name": "Rotor",
            "image": null,
            "description": "The rotor is the rotating part of the turbine that harnesses wind energy."
        }
    },
    {
        "id": 3,
        "turbine_id": 4,
        "component_id": 3,
        "grade": 1,
        "created_at": "2024-10-17T15:35:38.000000Z",
        "updated_at": "2024-10-17T15:35:38.000000Z",
        "deleted_at": null,
        "turbine": {
            "id": 4,
            "name": "Turbine A",
            "created_at": "2024-10-17T15:35:38.000000Z",
            "updated_at": "2024-10-17T15:35:38.000000Z"
        },
        "component": {
            "id": 3,
            "name": "Hub",
            "image": null,
            "description": "The hub connects the blades and the rotor to the generator."
        }
    },
];

export default {
    title: 'Components/TurbineInspectionTable',
    component: TurbineInspectionTable,
};

const Template = (args) => (
    <>
        <ToastContainer />
        <TurbineInspectionTable {...args} />
    </>
);

export const Default = Template.bind({});
Default.args = {
    inspections: sampleInspections,
};

export const Loading = Template.bind({});
Loading.args = {
    inspections: [],
    loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
    inspections: [],
};
