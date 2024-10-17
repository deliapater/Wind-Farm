import React from 'react';
import ConfirmationModal from './ConfirmationModal';

export default {
    title: 'Components/ConfirmationModal',
    component: ConfirmationModal,
};

const Template = (args) => <ConfirmationModal {...args} />;

export const Default = Template.bind({});
Default.args = {
    isOpen: true,
    onClose: () => console.log('Modal closed'),
    onConfirm: () => console.log('Confirmed'),
    title: 'Are you sure?',
    message: 'Do you really want to delete this inspection?',
};

export const Closed = Template.bind({});
Closed.args = {
    isOpen: false,
    onClose: () => console.log('Modal closed'),
};

export const Confirmed = Template.bind({});
Confirmed.args = {
    isOpen: true,
    onClose: () => console.log('Modal closed'),
    onConfirm: () => console.log('Confirmed'),
    title: 'Confirmation',
    message: 'Your action has been confirmed!',
};
