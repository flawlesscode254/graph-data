import { useState, useEffect } from 'react'
import './App.css';
import Points from './Points'

function App() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    (async () => {
        const getData = await fetch("http://localhost:1359/api/logs");
        const dataSet = await getData.json();
        setInfo(dataSet);
    })();
  }, [])

  return (
    <div className="data">
      <h1>Graphical Data Analysis Per Day Of The Week</h1>
      <div className="App">
      {
        info.map(data => (
          <div key={data._id}>
            <Points rise={data.number} />
            <p>{data.number}</p>
          </div>
        ))
      }
    </div>
    </div>
    
  );
}

export default App;
