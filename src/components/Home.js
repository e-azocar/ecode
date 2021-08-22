import React, { useState, useEffect } from "react";
import CSSEditor from "./CSSEditor";
import HTMLEditor from "./HTMLEditor";
import JSEditor from "./JSEditor";
import Output from "./Output";

import "./styles.css";

const Home = () => {
	const [htmlCode, setHtmlCode] = useState("");
	const [cssCode, setCssCode] = useState("");
	const [jsCode, setJsCode] = useState("");

	const [result, setResult] = useState("");

	useEffect(() => {
		const html = `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Output</title>

                    <style>
                        ${cssCode}
                    </style>
                </head>
                <body>

                    ${htmlCode}
                    
                    <script>
                        ${jsCode}
                    </script>
                </body>
            </html>
        `;

		setResult(html);
	}, [htmlCode, cssCode, jsCode]);

	return (
		<div class="parent">
			<div class="html">
				<HTMLEditor setHtmlCode={setHtmlCode} />
			</div>
			<div class="css">
				<CSSEditor setCssCode={setCssCode} />
			</div>
			<div class="js">
				<JSEditor setJsCode={setJsCode} />
			</div>

			<div class="output-container">
				<Output html={result} />
			</div>
		</div>
	);
};

export default Home;
