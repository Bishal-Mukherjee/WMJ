import React, { Fragment, useState } from "react";
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
import { useFormik, Formik, Form } from "formik";
import * as yup from "yup";
import "./Navbar.css";
import axios from "axios";
import { emailsubmission } from "../../services/emailsubmissions";

const MyTextField = styled(TextField)({
  "& .MuiTextField-root": {
    width: "50ch",
  },
  "& label.Mui-focused": {
    color: "black",
  },
  "& label": {
    color: "black",
    fontFamily: "Comfortaa",
  },
  ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    color: "black",
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
      color: "black",
      fontFamily: "Comfortaa",
    },
  },
});

const EmailSubmissions = () => {
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
    emailsubmission({ email, pin }).then((res) => {
      if (res.data.message === "SUCCESS") {
        setShowMessage(true);
        setTimeout(() => {
          formik.handleReset();
          setShowMessage(false);
        }, 1000);
      }
    });
  };

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <MyTextField
              label="Email"
              style={{
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
          </Grid>

          <Grid item sm={6} xs={12}>
            <MyTextField
              type="number"
              label="Pin"
              style={{
                width: "100%",
                textAlign: "center",
              }}
              name="pin"
              value={pin}
              onChange={formik.handleChange}
              error={formik.touched.pin && Boolean(formik.errors.pin)}
              helperText={formik.touched.pin && formik.errors.pin}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="outlined"
              style={{
                width: "80%",
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
          </Grid>
        </Grid>
      </form>

      <Snackbar
        open={showMessage}
        message={<span style={{ fontFamily: "Comfortaa" }}>Thank You!</span>}
      />
    </Fragment>
  );
};

export default EmailSubmissions;
