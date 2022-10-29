import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {

  const [jobs, setJobs] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8080/jobs').then((data)=>{
        // @ts-ignore
        return setJobs(data);
    });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <section>
        { JSON.stringify(jobs) };
      </section>
    </div>
  );
}

export default App;
