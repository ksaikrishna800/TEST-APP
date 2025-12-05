import React from 'react';
import FormPanel from '../FormPanels/FormPanel';
import bytebytego12 from './bytebytego1.jpg';
import './TestFirst.css';

function TestFirst () {
    return (
        <div style={{ marginBottom: '10px !important' }} className="testFirst">
        
            {/* <FormPanel>  this post contains just inserting photo..... */ }
                <div style={{ height: 'auto'}}>
                        <div className="testSample">
                            Return Something here.....
                        </div>
                        <div><img src={bytebytego12} className="imageStyles" alt="House Imgae" width="300" height="300" /></div>
                </div>
            {/* </FormPanel> */}
        </div> 
    );
}

export default TestFirst;
