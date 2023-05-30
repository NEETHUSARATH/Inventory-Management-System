import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
  InputLabel,
  Grid,
  Box,
} from "@mui/material";
import Axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SalesReturns = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const [cdetails, setcdetails] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const cdate = currentDate.toLocaleString();
  const [SalesId, setSelectedSalesId] = useState("");
  const [idetails, setidetails] = useState();
  const [sales, setSales] = useState();

  useEffect(() => {
    Axios.get("http://localhost:3001/saleslists").then((response) => {
      setcdetails(response.data);
      console.log(response.data);
    });
  }, []);

  const handleSalesChange = (SalesId) => {
    console.log(SalesId);
    Axios.get(`http://localhost:3001/sales/${SalesId}`).then((response) => {
      setSales(response.data);
      const itemname = response.data.itemname;
      //   console.log(itemname);

      Axios.get(`http://localhost:3001/items/${itemname}`).then((response) => {
        setidetails(response.data);
        // console.log(response.data);
      });
    });
  };

  const onSubmit = async (data) => {
    console.log(data);

    fetch("http://localhost:3001/salesreturn", {
      method: "POST",
      body: JSON.stringify({
        salesid: data.salesid,
        date: cdate,
        reason: data.reason,
        status: "Returned",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    reset();
  };

  return (
    <Box
      sx={{ display: "flex", backgroundColor: "#030b6b", height: 900, mt: 2 }}
    >
  
      <Container maxWidth="sm" sx={{ mt: 5 ,backgroundColor:"#fff", height:500, alignItems:"center"}}>
        <Grid container spacing={2} mt={3} >
          
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <div className="container" >
            <h4 style={{ textAlign:"center", color:"#030b6b",marginTop:"2%"}}>ADD-SALES-RETURN</h4>
          </div>
            <Grid item xs={12} sm={6}>
              <InputLabel>SELECT SALES ID</InputLabel>
              <Select
                {...register("salesid", {
                  required: "Sales Id is required",
                })}
                variant="outlined"
                fullWidth
                label="Sales ID"
                error={Boolean(errors.salesid)}
                helperText={errors.salesid?.message}
                defaultValue={SalesId}
                onChange={(e) => handleSalesChange(e.target.value)}
              >
                <MenuItem value="">Select</MenuItem>
                {cdetails.map((val, key) => (
                  <MenuItem key={key} value={val._id}>
                    {val._id}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>ITEM NAME</InputLabel>

              <TextField
                id="itemname"
                value={idetails?.itemName}
                type="text"
                {...register("itemname", { required: true })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="reason"
                label="Reason"
                type="text"
                {...register("reason", { required: true })}
              />
            </Grid>
            <Button
              sx={{ mt: 6, ml: 3, width: "70%" }}
              type="submit"
              variant="contained"
              color="primary"
            >
              sales return{" "}
            </Button>
            <hr/>

            <Link to="/viewsale">
            <Button
               sx={{ mt: 4, ml: 10, width: "100%" }}
              type="submit"
              variant="contained"
              color="primary"
              
            >
              Sales Return List
            </Button>
          </Link>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default SalesReturns;
