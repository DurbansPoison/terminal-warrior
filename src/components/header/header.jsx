import React from "react";
import TermComp from '../terminal/terminal.jsx'

function Header() {
    return (
        <div className='header'>
            <TermComp />
            <div className='title'>
                <h1 style={center, fontsize='128pt'}>
                React Terminal Nav Portfolio
                </h1>
            </div>
        </div>
    )
}


export default Header;