import React from "react";
import Terminal from "../../../react-term-nav-component";

function TermComp() {
  return (
    <div className="TermComp">
      <Terminal
        config={{
          mode: "root",
          modeText: "Terminal-Warrior",
          width: 800,
          height: 200,
          edge: false,
          font: "monospace",
          text: 14,
        }}
        theme="pure"
        bar="macos"
        command={[
          {
            name: "whoami",
            description: "Get package name",
            value: "terminal-warrior: a react component for navigating an app type -h for all commands",
          },
          {
            name: "pwd",
            description: "Print working directory",
            value: "/home/#",
          },
          {
            name: "--help",
            description: "a list of all commands available",
            value: "whoami, pwd, --help, cd /home/page1, cd /home/page2"
          },
        ]}
      />
    </div>
  )
}
export default TermComp;
