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
import { useNavigate } from "react-router-dom";

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [vendors, setVendors] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("http://localhost:3001/completedpay").then((response) => {
      setPayments(response.data);
    });
  }, []);

  const fetchVendorName = (vendorId) => {
    Axios.get(`http://localhost:3001/vendors/${vendorId}`).then((response) => {
      setVendors(response.data);
      console.log(response.data);
    });
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "#030b6b", height: 900, mt: 2 }}>
     <Grid container spacing={2}>
     <div className="container" >
            <h4 style={{ textAlign:"center", color:"#fff",marginTop:"4%"}}>ALL PAYMENTS</h4>
          </div>
      <Grid item xs={10} mb={80} ml={15} >
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>VENDOR NAME</TableCell>
                <TableCell>ITEM NAME</TableCell>
                <TableCell>QUANTITY</TableCell>
                <TableCell>AMOUNT PAYED</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment._id}>
                  {fetchVendorName(payment.vendorname)}
                  <TableCell>{vendors?.vendorname}</TableCell>
                  <TableCell>{payment.itemname}</TableCell>
                  <TableCell>{payment.quantity}</TableCell>
                  <TableCell>{payment.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Link to="/payments">
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

export default Payments;
