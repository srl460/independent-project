import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
/*import { whileStatement } from '@babel/types';*/


function App() {
  const [page, setPage] = useState("");
  const [input, setInput] = useState("");
  
  function scanButton() {
    setPage("Scanned");
  }
  
  function inputBox(event) {
    setInput(event.target.value);
    console.log(input)
  }

  function submitButton() {
    setPage("Input");
  }
  return (
    <div className = "App">
      <div class="page">{page === "" && (
        <>
          <h1 className="title">ROUTE</h1>
          <button class="scanbutton" onClick={scanButton}>Scan QR Code</button>
          <div class="input_button">
            <input type="text" class ="input"name="Product Name and Location" onChange={inputBox} placeholder="Product Name"/>
            <button class = "submitbutton" onClick={submitButton}>SUBMIT</button>
          </div>
        </>
      )}
      {page === "Scanned" && <ButtonPage />}
      {page === "Input" && <InputPage i={input}/>}
    </div>
    </div>
  );
}

function InputPage(props) {
  return (
    <div class="page">
      <div className="input_page">
      <p class="props">{props.i}</p>
      <img src="https://cdn.britannica.com/91/183591-050-34AC9668/World-Data-Locator-Map-Bangladesh.jpg" height="200" alt="bangladesh map"/>
      <div class="input-text">
        <div>Origin Location: Dhaka, Bhutan</div>
        <div>This item traveled: 1963 miles</div>
        <div>Carbon Emissions: 1650 kg CO2</div>
        <div class="ORANGE">This product gets an ORANGE route rating.</div>
      </div>
      </div>
    </div>
  )
}

function ButtonPage() {
  return (
  <div class="page">
  <div className="product_page">
    <h1 className="product">This item traveled: 6926 MILES</h1>
    <img src="https://www.worldatlas.com/img/locator/city/081/21781-new-york-city-locator-map.jpg" height="200" alt="pasta box"></img>
    <div className="product_info">
      <div class="a">Origin Location : Avon, NY USA</div>
      <div class="b">Your Location: Shanghai, China</div>
      <div class="c">Carbon Emissions: 2500 kg CO2</div>
      <div class="RED">This product gets a RED route rating</div>
    </div>
  </div>
  </div>
  )
}


const rootElement=document.getElementById("root");
ReactDOM.render(<App />, rootElement)

/*The code above is from https://codesandbox.io/s/gallant-stonebraker-ro7hq*/



export default App;
