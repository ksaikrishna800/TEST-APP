import React from 'react';
import FormPanel from '../FormPanels/FormPanel';
import './TestSecond.css';

function TestSecond () {
    return (
            <div style={{ margin: '30px !important' }}>
            <FormPanel>
                <div style={{ borderLeft: '10px solid green'}}>
                        <div className="testSample">
                            Return Something here.....
                        </div>
                </div>
            </FormPanel> 
            </div>
    );
}

export default TestSecond;
