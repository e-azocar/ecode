import React, { useState, useEffect } from "react";

const Output = ({ html }) => {

	return <iframe srcDoc={html} frameBorder="0" className="output"></iframe>;
};

export default Output;
