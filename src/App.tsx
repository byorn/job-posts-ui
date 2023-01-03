import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import FileUpload from "./test-react-drop-zone-iphone/FileUpload";

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

      <section>
        { JSON.stringify(jobs) };
      </section>
        <FileUpload />
    </div>
  );
}

export default App;
