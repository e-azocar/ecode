import Editor from "@monaco-editor/react";
import React from "react";

const CSSEditor = ({ setCssCode }) => {
	const cssOnChange = (value, e) => {
		setCssCode(value);
	};

	return (
		<Editor
			height="100%"
			defaultLanguage="css"
			defaultValue="/* CSS */"
			theme="vs-dark"
			onChange={cssOnChange}
		/>
	);
};

export default CSSEditor;
