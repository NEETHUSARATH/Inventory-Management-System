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
  Box
} from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const TotalCustomers = () => {
  const [customer, setCustomer] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("http://localhost:3001/allcustomers").then((response) => {
      setCustomer(response.data);
      console.log(response.data);
    });
  }, []);

  const handleDelete = (_id) => {
    Axios.delete(`http://localhost:3001/customer/${_id}`).then(() => {
      getData();
    });
  };
  const getData = () => {
    Axios.get("http://localhost:3001/allcustomers").then((getData) => {
      setCustomer(getData.data);
    });
  };
  return (
    <>
        <Box sx={{display:"flex",backgroundColor:"#030b6b",height:900,mt:2}}>
  

        <Grid container spacing={2}>
      <div className="container" >
            <h4 style={{ textAlign:"center", color:"#fff",marginTop:"4%"}}>ALL CUSTOMERS</h4>
          </div>
        <Grid item xs={10} mb={80} ml={15}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>CUSTOMER NAME</TableCell>
                  <TableCell>EMAIL</TableCell>
                  <TableCell>ADDRESS</TableCell>
                  <TableCell>ACTION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customer.map((item) => (
                  <TableRow key={item._id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.address}</TableCell>
                    <TableCell>
                      <Link to={`/editcustomer/${item._id}`}>Edit</Link>{" "}
                      <Button
                        sx={{ color: "primary" }}
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Link to="/customer">
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
    </>
  );
};

export default TotalCustomers;
