import React from 'react';
import FormPanel from '../FormPanels/FormPanel';
import './TestFirst.css';

function TestFirst () {
    return (
        <div style={{ marginBottom: '10px !important' }}>
            <FormPanel>
                <div style={{ borderLeft: '10px solid red'}}>
                        <div className="testSample">
                            Return Something here.....
                        </div>
                </div>
            </FormPanel>
        </div> 
    );
}

export default TestFirst;
