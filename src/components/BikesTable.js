import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function BikesTable() {
  const [motorcycles, setMotorcycles] = useState([]);
  const api = axios.create({
    baseURL: 'http://localhost:8080/api' // Replace this with your API's base URL
  });


  useEffect(() => {
    api.get("/motorcycles")
      .then(response => {
        setMotorcycles(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Brand</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {motorcycles.map((motorcycle) => (
            <TableRow key={motorcycle.id}>
              <TableCell>{motorcycle.brand}</TableCell>
              <TableCell>{motorcycle.model}</TableCell>
              <TableCell>{motorcycle.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
