import Editor from "@monaco-editor/react";
import React from "react";

const HTMLEditor = ({ setHtmlCode }) => {
	const htmlOnChange = (value, e) => {
		setHtmlCode(value);
	};

	return (
		<Editor
			height="100%"
			defaultLanguage="html"
			defaultValue="<!-- HTML -->"
			theme="vs-dark"
			onChange={htmlOnChange}
		/>
	);
};

export default HTMLEditor;
