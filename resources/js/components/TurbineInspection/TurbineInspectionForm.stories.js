import React from "react";
import { MemoryRouter } from "react-router-dom";
import TurbineInspectionForm from "./TurbineInspectionForm";

export default {
    title: 'Components/TurbineInspectionForm',
    component: TurbineInspectionForm,
};


const Template = (args) => (
    <MemoryRouter>
        <TurbineInspectionForm {...args} />
    </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
    onSuccess: (message) => alert(message),
};

export const SuccessfulSubmission = Template.bind({});
SuccessfulSubmission.args = {
    onSuccess: (message) => alert(message),
};
