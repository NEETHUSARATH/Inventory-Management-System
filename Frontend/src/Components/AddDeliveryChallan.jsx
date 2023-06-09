import React from "react";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Typography from "@mui/material/Typography";


const AddDeliveryChallan = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { id } = useParams();

  const onSubmit = (data) => {
    console.log(data);
    const refno = data.refno;
    const deliverydate = data.deliverydate;
    const salesId = id;
    console.log(salesId);
    reset();

    axios
      .post(`http://localhost:3001/deliverychallan/`, { refno,deliverydate,salesId})
      .then(() => {
        navigate("/challans");
      });
  };
  return (
    <>
    <Box
      sx={{ display: "flex", backgroundColor: "#030b6b", height: 900, mt:2}}
    >
      
        <Container maxWidth="xs" sx={{ mt: 5 ,backgroundColor:"#fff", height:450}}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              mb={2}
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="container" >
            <h4 style={{ textAlign:"center", color:"#030b6b",marginTop:"4%"}}>GENERATE CHALLAN</h4>
          </div>
              <TextField
                sx={{ mt: 3 }}
                variant="outlined"
                label="Reference Number"
                name="refno"
                fullWidth
                autoComplete="refno"
                autoFocus
                {...register("refno", {
                  required: "Required field",
                })}
                error={!!errors?.refno}
                helperText={errors?.refno ? errors.refno.message : null}
              />
              <TextField
                sx={{ mt: 3 }}
                id="date"
                label="Date"
                type="text"
                {...register("deliverydate", {
                  required: true,
                  validate: {
                    futureDate: (value) =>
                      value === "" || new Date(value) > new Date(),
                  },
                })}
                placeholder="YYYY-MM-DD"
                className={errors.deliverydate ? "error" : ""}
              />
              {errors.deliverydate &&
                errors.deliverydate.type === "futureDate" && (
                  <Typography sx={{ ml: 1 }} variant="caption" color="error">
                    Please enter a valid date.
                  </Typography>
                )}
            </Box>

            <Button
              sx={{ mt: 3 }}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Generate
            </Button>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default AddDeliveryChallan;
