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
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const ViewsalesReturns = () => {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("http://localhost:3001/salesreturns").then((response) => {
      setItems(response.data);
      console.log(response.data);
    });
  }, []);

  const approve = (item) => {
    Axios.put(`http://localhost:3001/salesreturns/${item._id}`, {
      status: "approved",
    })
      .then((response) => {
        setStatus(response.data.status);
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Box sx={{ display: "flex", backgroundColor: "#030b6b", height: 700, mt: 2 }}>

      <Grid container spacing={2}>
        <div className="container" >
          <h4 style={{ textAlign: "center", color: "#fff", marginTop: "4%" }}>ALL SALES RETURNS</h4>
        </div>

        <Grid item xs={6} mb={60} ml={40}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>SALES ID</TableCell>
                  <TableCell>REASON</TableCell>
                  <TableCell>ACTION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item._id}>
                    <TableCell>{item.salesid}</TableCell>
                    <TableCell>{item.reason}</TableCell>
                    <TableCell>
                      <Button variant="contained" onClick={() => approve(item)}>
                        APPROVE
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>

            </Table>

          </TableContainer>
          <Link to="/salereturn">
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

export default ViewsalesReturns;
