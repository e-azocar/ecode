import Editor from "@monaco-editor/react";
import React from "react";

const JSEditor = ({ setJsCode }) => {
	const jsOnChange = (value, e) => {
		setJsCode(value);
	};

	return (
		<Editor
			height="100%"
			defaultLanguage="javascript"
			defaultValue="// Javascript"
			theme="vs-dark"
			onChange={jsOnChange}
		/>
	);
};

export default JSEditor;
