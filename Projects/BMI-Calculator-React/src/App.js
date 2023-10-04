import './App.css';
import { useEffect, useState , useMemo}  from 'react';

const DEFAULT_HEIGHT = 150;
const DEFAULT_WEIGHT =  50;
function App() {
  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [weight , setWeight] = useState(DEFAULT_WEIGHT);

  function onChangeWeight(event) {
    setWeight(event.target.value);
  }
  function onChangeHeight(event) {
    setHeight(event.target.value);
  }
  const output = useMemo(() => {
    const calculatedHeight =  height / 100;
    return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
  }, [height,weight]);
 

  return (
    <div className="App">
      <div className="calculator">
        <h1>Project 7 : BMI CALCULATOR</h1>
        <div className="units">
          <p className="slider-output">
            Weight : {weight} kg
          </p>
          <input type="range" 
          min = "40"
          max = "220"
          onChange = {onChangeWeight}
          />

          <p className="slider-output">
            Height : {height} cm 
          </p>
          <input type="range"
           name="" id="" 
            min  = "140" 
            max = "220"
            onChange = {onChangeHeight}
           />

        </div>

        <div className="output">
          <h4>Your BMI is : </h4>
          <p className="result">
            {output}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
