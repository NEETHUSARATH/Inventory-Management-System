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
import { useNavigate } from "react-router-dom";


const NewSalesOrder = () => {
  const [categories, setCategory] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [cdetails, setcdetails] = useState([]);
  const [idetails, setidetails] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/allcustomers").then((response) => {
      setcdetails(response.data);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/allitems").then((response) => {
      setidetails(response.data);
      console.log(response.data);
    });
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:3001/newsalesorder", {
      method: "POST",
      body: JSON.stringify({
        customername: data.customername,
        itemname: data.itemname,
        squantity: data.squantity,
        shipcost: data.shipcost,
        sodate: data.sodate,
        status: "confirmed",
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
      sx={{ display: "flex", backgroundColor: "#030b6b", height: 800, mt: 2 }}
    >
     
      <Container maxWidth="sm" sx={{ mt: 4 ,backgroundColor:"#fff", height:500}}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
          <div className="container" >
            <h4 style={{ textAlign:"center", color:"#030b6b",marginTop:"4%"}}>NEW SALES ORDER</h4>
          </div>
            <Grid item xs={12} sm={6}>
              <InputLabel>Customer Name</InputLabel>
              <Select
                {...register("customername", {
                  required: "Name is required",
                })}
                variant="outlined"
                fullWidth
                label="Customer Name"
                error={Boolean(errors.customername)}
                helperText={errors.customername?.message}
              >
                <MenuItem value="">Select</MenuItem>
                {cdetails.map((val, key) => (
                  <MenuItem key={key} value={val.email}>
                    {val.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputLabel>Item Name</InputLabel>
              <Select
                {...register("itemname", {
                  required: "Itemname is required",
                })}
                variant="outlined"
                fullWidth
                label="Item Name"
                error={Boolean(errors.itemname)}
                helperText={errors.itemname?.message}
              >
                <MenuItem value="">Select</MenuItem>
                {idetails.map((val, key) => (
                  <MenuItem key={key} value={val._id}>
                    {val.itemName}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                id="quantity"
                label="Quantity"
                type="number"
                {...register("squantity", { required: true })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="shipping-cost"
                label="Shipping Cost"
                type="text"
                {...register("shipcost", { required: true })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="date"
                label="Date"
                type="text"
                {...register("sodate", {
                  required: true,
                  validate: {
                    futureDate: (value) =>
                      value === "" || new Date(value) > new Date(),
                  },
                })}
                placeholder="YYYY-MM-DD"
                className={errors.sodate ? "error" : ""}
              />
              {errors.sodate && errors.sodate.type === "futureDate" && (
                <Typography sx={{ ml: 1 }} variant="caption" color="error">
                  Please enter a valid date.
                </Typography>
              )}
            </Grid>

            <Button
              sx={{ mt: 6, ml: 3, width: "70%" }}
              type="submit"
              variant="contained"
              color="primary"
            >
              New Sales
            </Button>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};
export default NewSalesOrder;
