import React from "react";
import ReactDOM from "react-dom";
import Terminal from "react-hackterm";

function TermComp() {
  return (
    <div className="TermComp">
      <Terminal
        config={{
          mode: "root",
          modeText: "example.com",
          width: 500,
          height: 300,
          edge: true,
          font: "monospace",
          text: 14,
        }}
        theme="pure"
        bar="macos"
        command={[
          {
            name: "whoami",
            description: "Get package name",
            value: "react-hackterm",
          },
          {
            name: "pwd",
            description: "Print working directory",
            value: "/User/remote/guest/",
          },
        ]}
      />
    </div>
  )
}
export default TermComp;
