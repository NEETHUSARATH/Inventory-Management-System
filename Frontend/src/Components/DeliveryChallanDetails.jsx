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


const DeliveryChallanDetails = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/deliverychallan").then((response) => {
      setItems(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <Box
      sx={{ display: "flex", backgroundColor: "#030b6b", height: 700, mt:2 }}
    >
    
    <Grid container spacing={2}>
      <div className="container" >
            <h4 style={{ textAlign:"center", color:"#fff",marginTop:"4%"}}>ALL DELIVERY CHALLANS</h4>
          </div>
        <Grid item xs={6} mb={60} ml={40}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>REFERENCE NUMBER</TableCell>
                  <TableCell>DELIVERY CHALLAN DATE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item._id}>
                    <TableCell>{item.refno}</TableCell>
                    <TableCell>{item.deliverydate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Link to="/challans">
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

export default DeliveryChallanDetails;
