import { PropTypes } from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";

// ==============================|| LOADER ||============================== //
const Meta = ({ title }) => (
  <Helmet>
    <title>
      {title && title + "|"} React + Redux Toolkit + Material UI Boilerplate
    </title>
  </Helmet>
);

Meta.propTypes = {
  title: PropTypes.string,
};

export default Meta;
