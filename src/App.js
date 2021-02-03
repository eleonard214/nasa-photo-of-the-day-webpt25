import React, { useState, useEffect}from "react";

import axios from "axios";
import IsItLoad from './Components/IsItLoad';

import "./App.css";
// testing a theory, if you are checking my code could you please type something here

function App() {
  const [data,setData]=useState('')
  const [date, setDate]=useState('2021-02-02')
  const [loading, setLoading]=useState(true)

  useEffect(()=> {
    const callData = ()=>{
      setLoading(true);
      axios
       .get('https://api.nasa.gov/planetary/apod?api_key=xmH8E3dCWCAz00xb95jJVa9G7N2iBY5hzehL2yDX')
      .then(res => {
        console.log(res.data)
        setData(res.data)
        setLoading(false)
      })
      .catch(err=>{
        console.log('Error occurred at line 15', err)
      })
    }
    callData();
  }, [date])

  function updateDate(inputDate){
    setDate(inputDate)
  }

  return (
    <div className="App">
      <p>
        NASA Photo of the day! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <IsItLoad
      data={data}
      loading={loading}
      updateDate={updateDate}/>
    </div>
  );
}

export default App;
