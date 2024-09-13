import React from 'react';
import './FormPanel.css';

function FormPanel({ children }) {
    return (
        <>
            <div className="formPanelRoot">
                <div className="formPanelContainer">
                    { children }
                </div>
            </div>
        </>
    );
}

export default FormPanel;
