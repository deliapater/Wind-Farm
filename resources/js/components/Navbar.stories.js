import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./Navbar";

export default {
    title: "Components/Navbar",
    component: Navbar,
    decorators: [(Story) => <Router><Story /></Router>]
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};