import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  IconButton,
  TextField,
  Grid,
  Divider,
  Snackbar,
} from "@mui/material";
import { styled } from "@mui/material";
import { CloseRounded } from "@material-ui/icons";
import { useFormik } from "formik";
import * as yup from "yup";
import "./Navbar.css";
import axios from "axios";

const MyTextField = styled(TextField)({
  "& .MuiTextField-root": {
    width: "50ch",
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& label": {
    color: "white",
    fontFamily: "Comfortaa",
  },
  ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    color: "white",
    fontFamily: "Comfortaa",
    fontSize: "1.3rem",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "red",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
    },
    "&:hover fieldset": {
      borderColor: "red",
    },
    "&.Mui-focused fieldset": {
      borderColor: "red",
    },
    ".css-1x5jdmq": {
      color: "white",
      fontFamily: "Comfortaa",
    },
  },
});

// const MySnackbar=styled(Snackbar)

const EmailSubmissions = (props) => {
  const { open, setOpen } = props;
  const [showMessage, setShowMessage] = useState(false);
  const validationSchema = yup.object({
    email: yup.string().email("Invalid email").required("Please enter email"),
    pin: yup
      .number()
      .required("Please enter pin")
      .positive("Pin must be positive"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      pin: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      handleEmailSubmission();
    },
  });

  const { email, pin } = formik.values;

  const handleEmailSubmission = () => {
    axios({
      url: `${process.env.REACT_APP_SERVER_URL}/api/submissions/emailSubmission`,
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      data: JSON.stringify({ email, pin }),
    })
      .then((res) => {
        if (res.data.message === "SUCCESS") {
          setShowMessage(true);
          setTimeout(() => {
            formik.handleReset();
            setShowMessage(false);
            setOpen(false);
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Dialog open={open} maxWidth="sm" fullWidth={true}>
      <Grid container style={{ backgroundColor: "black" }}>
        <IconButton
          style={{ marginLeft: "auto", marginTop: "0.5rem" }}
          onClick={() => setOpen(false)}
        >
          <CloseRounded style={{ color: "red" }} />
        </IconButton>

        <DialogContent>
          <DialogTitle
            style={{
              color: "red",
              fontFamily: "Comfortaa",
              textAlign: "center",
              fontSize: "1.5rem",
              marginTop: "-2.5rem",
            }}
          >
            Contact Us
          </DialogTitle>

          <Divider style={{ backgroundColor: "red", height: "0.5px" }} />

          <DialogContentText>
            <form onSubmit={formik.handleSubmit}>
              <MyTextField
                label="Email"
                style={{
                  marginTop: "2rem",
                  width: "100%",
                  textAlign: "center",
                }}
                name="email"
                value={email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                autoFocus
              />
              <MyTextField
                type="number"
                label="Pin"
                style={{
                  marginTop: "1rem",
                  width: "100%",
                  textAlign: "center",
                }}
                name="pin"
                value={pin}
                onChange={formik.handleChange}
                error={formik.touched.pin && Boolean(formik.errors.pin)}
                helperText={formik.touched.pin && formik.errors.pin}
              />
              <Button
                type="submit"
                variant="outlined"
                style={{
                  width: "100%",
                  height: "3rem",
                  border: "solid red 1px",
                  marginTop: "1rem",
                  color: "white",
                  backgroundColor: "red",
                  fontFamily: "Comfortaa",
                }}
              >
                SUBMIT
              </Button>
            </form>
            <Snackbar
              open={showMessage}
              message={
                <p
                  style={{
                    color: "red",
                    fontFamily: "Comfortaa",
                  }}
                >
                  Thank You!
                </p>
              }
            />
          </DialogContentText>
        </DialogContent>
      </Grid>
    </Dialog>
  );
};

export default EmailSubmissions;
