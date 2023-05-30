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
 
  Button,

  Grid,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const VendorPay = () => {
  const [payments, setPayments] = useState([]);
  const [vendors, setVendors] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("http://localhost:3001/payments").then((response) => {
      setPayments(response.data);
    });
  }, []);

  const fetchVendorName = (vendorId) => {
    Axios.get(`http://localhost:3001/vendors/${vendorId}`).then((response) => {
      setVendors(response.data);
      console.log(response.data);
    });
  };

  const handlePay = (id) => {
    const updatedPayment = {
      status: "Payment Completed",
    };

    Axios.put(`http://localhost:3001/completed/${id}`, updatedPayment)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
       
      });

    navigate("/payments");
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "#030b6b", height: 700, mt:2 }}>
      <Grid container spacing={2}>
      <div className="container" >
            <h4 style={{ textAlign:"center", color:"#fff",marginTop:"4%"}}>BILLS AND PAYMENTS</h4>
          </div>
      <Grid item xs={10} mb={60} ml={15}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>VENDOR NAME</TableCell>
                <TableCell>ITEM NAME</TableCell>
                <TableCell>QUANTITY</TableCell>
                <TableCell>AMOUNT TO PAY</TableCell>
                <TableCell>ACTION</TableCell>
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
                  <TableCell>
                    <Button
                      sx={{ color: "primary" }}
                      onClick={() => handlePay(payment._id)}
                    >
                      PAY AMOUNT
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
          <Link to="/allpayments">
            <Button
            
              sx={{ mt: 3 }}
              type="submit"
              variant="contained"
              
             
             >
            All Payments
             
            </Button>
            </Link>
      </Grid>
      
        </Grid>
    </Box>
    
  );
};

export default VendorPay;
