import React, { useState, useEffect } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";


const Allvendors = () => {
  const [name, setName] = useState([]);
  //   const [button, setButton] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/allvendors").then((response) => {
      setName(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <Box sx={{ display: "flex", backgroundColor: "#030b6b", height: 700, mt:2 }}>
   
      <Grid container spacing={2}>
      <div className="container" >
            <h4 style={{ textAlign:"center", color:"#fff",marginTop:"4%"}}>ALL VENDORS LIST</h4>
          </div>
        <Grid item xs={10} mb={60} ml={15}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>VENDOR NAME</TableCell>
                  <TableCell>ADRESS</TableCell>
                  <TableCell>EMAIL</TableCell>
                  <TableCell>PHONE NUMBER</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {name.map((item) => (
                  <TableRow key={item._id}>
                    <TableCell>{item.vendorname}</TableCell>
                    <TableCell>{item.address}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.vphno}</TableCell>
                    <TableCell>
                      <Link to={`/vendors/${item._id}`}>Edit</Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Link to="/addvendor">
            <Button
            
              sx={{ mt: 3 }}
              type="submit"
              variant="contained"
              
             
             >
             BACK
             
            </Button>
            </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Allvendors;
