import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BikesTable from './components/BikesTable';

function App() {

  const api = axios.create({
    baseURL: 'http://localhost:8080/api' // Replace this with your API's base URL
  });

  return (
    <div className="container">
      <h1>Bikes</h1>
     <BikesTable />
    </div>
  );
}

export default App;
