import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';


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
      {page === "" && (
        <>
          <h1 className="title">ROUTE</h1>
          <button onClick={scanButton}>Scan QR Code</button>
          <input type="text" name="Enter Product Brand Name" onChange={inputBox} placeholder="Product Brand Name"/>
          <button onClick={submitButton}>SUBMIT</button>
        </>
      )}
      {page === "Scanned" && <ButtonPage />}
      {page === "Input" && <InputPage i={input}/>}
    </div>
  );
}

function InputPage(props) {
  let data = ['Barilla', 'Yoplait', 'Goya Chickpeas'];
  let currentProduct = props.i;
  return (
    <div className="input_page">
    <p>{props.i}</p>
    </div>
  )
}
function ButtonPage() {
  return (
  <div className="product_page">
    <h1 className="product">Barilla Pasta</h1>
    <img src="https://www.meijer.com/content/dam/meijer/product/0089/50/5900/06/0089505900061_1_A1C1_1200.png" height="200" ></img>
    <div className="product_info">
      <div>This product traveled 5,125 miles to reach your location.</div>
      <div>Through travel alone this product emitted around 700 kg of Carbon Dioxide.</div>
      <div>It's origin location is Copenhagen, Denmark. </div>
      <div>This product gets a Red Route rating. We wouldn't recommend purchasing.</div>
    </div>
  </div>
  )
}


const rootElement=document.getElementById("root");
ReactDOM.render(<App />, rootElement)

/*The code above is from https://codesandbox.io/s/gallant-stonebraker-ro7hq*/



export default App;
