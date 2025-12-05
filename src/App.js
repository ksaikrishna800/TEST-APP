// import logo from './logo.svg';
import TestFirst from './TestFirst/TestFirst';
import TestSecond from './TestSecond/TestSecond';
// import pdf1 from './pdf1.pdf';
import AllPagesExample from './AllPages';
import logo from './fulllogo.jpg';
import './App.css';
// import { Document, Page, pdfjs } from "react-pdf";
// import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
// import pdfjsWorker from "react-pdf/node_modules/pdfjs-dist/build/pdf.worker.entry";
// import worker from 'pdfjs-dist/webpack'

// pdfjs.GlobalWorkerOptions.workerSrc = worker
// import "pdfjs-dist/build/pdf.worker.entry";

import { pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import { pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';


// pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function App() {
  return (
    <div>
    <div className="imageApp"><img src={logo} /><div className="QuoteStyles">Make Peoples life Better</div></div>
    <div style={{ display: 'grid', backgroundColor: '#fff9ee' }}>
    {/* backgroundColor: '#rgb(255 252 248 / 38%)' */}
    {/* background-color: #f1f8ff61; */}
    {/* background-color: #fff9ee; */}
    {/* rgb(255 249 241 / 38%) */}
      {/* <div className="App">
          <div class="header" id="header">
              <div class="navBar" id="nav_Bar">
                  <ul class="navLists">
                      <li class="navItem"><a href="#catalog" class="navLink">catalog</a></li>
                      <li class="navItem"><a href="#clients" class="navLink">clients</a></li>
                      <li class="navItem"><a href="#blog" class="navLink">blog</a></li>
                      <li class="navItem"><a href="#contact" class="navLink">contact</a></li>
                  </ul>
              </div>
          </div>
      </div> */}
          {/* <div style={{ marginBottom: '10px' }}><TestFirst /></div> */}
          {/* <div style={{ marginBottom: '10px' }}><AllPagesExample pdf={ pdf1 }/></div> */}
          {/* <div><object data="/pdf1.pdf" type="application/pdf">
              <div>No PDF viewer available</div>
          </object></div> */}
          {/* <div style={{ marginTop: '10px' }}><TestSecond /></div> */}
          {/* <div style={{ marginBottom: '300px' }}><TestFirst /></div> */}
          {/* <div style={{ marginBottom: '100px' }}><TestSecond /></div> */}
          {/* <div style={{ marginBottom: '100px' }}><TestFirst /></div> */}
          {/* <div style={{ marginBottom: '100px' }}><TestSecond /></div> */}
          {/* <div style={{ marginBottom: '100px' }}><TestFirst /></div> */}
          {/* <div style={{ marginBottom: '100px' }}><TestSecond /></div> */}
    </div>
    </div>
  );
}

export default App;
