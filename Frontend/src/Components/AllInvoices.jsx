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
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";


const AllInvoices = () => {
  const [items, setItems] = useState([]);
  const [customer, setCustomer] = useState();
  const [data, setData] = useState();
  const [currentDate, setCurrentDate] = useState(new Date());
  const cdate = currentDate.toLocaleString();
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("http://localhost:3001/sales").then((response) => {
      setItems(response.data);
      console.log(response.data);
    });
  }, []);

  const fetchCustomerName = (cid) => {
    Axios.get(`http://localhost:3001/customer/${cid}`).then((response) => {
      setCustomer(response.data);
      console.log(response.data);
    });
  };

  const fetchItemName = (id) => {
    Axios.get(`http://localhost:3001/allitems/${id}`).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };

  const generatePDF = (rowData) => {
    const doc = new jsPDF();
    doc.text(`Email: ${rowData.customername}`, 10, 30);
    doc.text(`Address: ${rowData.address}`, 10, 20);
    doc.text(`Price: ${rowData.amount}`, 10, 40);
    doc.save(`${rowData.customername}.pdf`);
  };

  const addInvoice = (item) => {
    Axios.post("http://localhost:3001/invoice", {
      invoiceDate: cdate,
      customerId: item.cid,
      itemName: item.itemname,
      quantity: item.squantity,
      salesId: item._id,
      amount: item.amount,
    })
      .then((response) => {
        console.log(response);
        alert("Invoice added successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to add invoice.");
      });
  };

  return (
    <Box
      sx={{ display: "flex", backgroundColor: "#030b6b", height: 900, mt: 2 }}
    >
     
      <Grid container spacing={2}>
      <div className="container" >
            <h4 style={{ textAlign:"center", color:"#fff",marginTop:"4%"}}>ALL INVOICES</h4>
          </div>
        <Grid item xs={10}  mb={90} ml={15}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>CUSTOMER NAME</TableCell>
                  <TableCell>ADDRESS</TableCell>
                  <TableCell>EMAIL</TableCell>
                  <TableCell>ITEM NAME</TableCell>
                  <TableCell>UNIT</TableCell>
                  <TableCell>PRICE</TableCell>
                  <TableCell>INVOICE</TableCell>
                  <TableCell>PDF BILL</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item._id}>
                    {fetchCustomerName(item.cid)}
                    <TableCell>{customer?.name}</TableCell>
                    <TableCell>{item.address}</TableCell>
                    <TableCell>{item.customername}</TableCell>
                    {fetchItemName(item.itemname)}
                    <TableCell>{data?.itemName}</TableCell>
                    <TableCell>{item.squantity}</TableCell>
                    <TableCell>{item.amount}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        onClick={() => addInvoice(item)}
                      >
                        ADD INVOICE
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        onClick={() => generatePDF(item)}
                      >
                        Download BILL
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AllInvoices;
