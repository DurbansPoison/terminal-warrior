import React from 'react';
import Terminal from 'react-animated-term';
import 'react-animated-term/dist/react-animated-term.css';



const spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
const termLines = [
  {
    text: 'node example.js',
    cmd: true,
    delay: 80
  },
  {
    text: '✔ Loaded app',
    cmd: false,
    repeat: true,
    repeatCount: 5,
    frames: spinner.map(function (spinner) {
      return {
        text: spinner + ' Loading app',
        delay: 40
      }
    })
  },
  {
    text: '',
    cmd: true
  }
];



function TerminalComp ({
    returns({
        
        <>
        <Terminal
        lines={termLines}
        interval={80}
         />
        </>
    })
});


export default TerminalComp;