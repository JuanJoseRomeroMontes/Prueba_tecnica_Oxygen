import './App.css';

function App() {
  return (
    <div className="App">

      <div className="Header">
        <img src="./converterLogoPurple.png" className="AppLogo" alt=""/>
        <h1>unit converter</h1>
      </div>
      
      <div className="Separator"> <hr></hr> </div>

      <div className="Body">
        <div className="Box" id="ConverterScreen">

          <div className="ConverterRow"> {/*Top row*/}
            <div className="ConverterCell" id="ConverterTitle">
              <p>convert</p>
            </div>
          </div>
          
          <div className="ConverterRow"> {/*Middle row*/}
            <div className="ConverterCell" id="SelectCell">
              <select className="ConverterSelect">
                <option>km → miles</option>
                <option>miles → km</option>
                <option>ft → m</option>
                <option>m → ft</option>
                <option>cm → inches</option>
                <option>inches → cm</option>
              </select>
            </div>
            <div className="ConverterCell">
              <img src="./converterLogoWhite.png" className="ConverterImage" alt="" />
            </div>
            <div className="ConverterCell" id="InputCell">
              <input className="ConverterInput"></input>
            </div>
            <div className="ConverterCell" id="Unit1Cell">
            <p>unit1</p>
            </div>
          </div>
          
          <div className="ConverterRow"> {/*Bottom row*/}
            <div className="ConverterCell" id="SaveConvertionCell">
            <img src="./heart.png" className="ConverterImage" alt="" />
            </div>

            <div className="ConverterCell" id="ConverterTitle">
            <p>99.99</p>
            </div>

            <div className="ConverterCell" id="AlignRigth">
            <p>unit2</p>
            </div>
          </div>
        </div>
        
        <div className="SavedGrid">
          <div> <p className="SavedTitle">saved</p> </div>
          <div className="Box" id="SavedConvertions"> 
            <div className="alignLeft"> <h3>Conversion</h3> </div>
            <div className="alignRigth"> <img src="./delete.png" className="ConverterImage" alt=""/> </div>
          </div>
          <div className="Box" id="SavedConvertions"> 
            <div className="alignLeft"> <h3>Conversion</h3> </div>
            <div className="alignRigth"> <img src="./delete.png" className="ConverterImage" alt=""/> </div>
          </div>
          <div className="Box" id="SavedConvertions"> 
            <div className="alignLeft"> <h3>Conversion</h3> </div>
            <div className="alignRigth"> <img src="./delete.png" className="ConverterImage" alt=""/> </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/