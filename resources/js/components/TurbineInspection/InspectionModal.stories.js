import React from 'react';
import InspectionModal from './InspectionModal';

export default {
    title: 'Components/InspectionModal',
    component: InspectionModal,
};

// Define a default story for the modal when it is open
const Template = (args) => <InspectionModal {...args} />;

export const Default = Template.bind({});
Default.args = {
    isOpen: true,
    onClose: () => { },
    inspection: {
        turbine: { name: 'Turbine A' },
        component: { name: 'Blade' },
        grade: 'Perfect',
        created_at: '2024-10-17T12:00:00Z',
    },
};

export const WithoutDetails = Template.bind({});
WithoutDetails.args = {
    isOpen: true,
    onClose: () => { },
    inspection: null,
};

export const ClosedModal = Template.bind({});
ClosedModal.args = {
    isOpen: false,
    onClose: () => { },
    inspection: {
        turbine: { name: 'Turbine B' },
        component: { name: 'Gearbox' },
        grade: 'Minor Issue',
        created_at: '2024-10-15T12:00:00Z',
    },
};
