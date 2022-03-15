import React, { Fragment, useEffect, useState } from "react";
import {
  Box,
  Grid,
  Skeleton,
  TextField,
  Typography,
  styled,
  Button,
} from "@mui/material";
import axios from "axios";
import "./Recommendations.css";
import { useFormik } from "formik";
import * as yup from "yup";
import EmailSubmissions from "../Navbar/EmailSubmisson";

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

const Recommendations = () => {
  const [images, setImages] = useState([]);

  const handleFetchImages = () => {
    axios({
      url: `${process.env.REACT_APP_SERVER_URL}/api/products/collectionImages`,
      method: "GET",
    }).then((res) => {
      setImages(res.data.images);
    });
  };

  useEffect(() => {
    handleFetchImages();
  }, []);

  return (
    <div style={{ margin: "1rem" }} id="recommendations">
      <h1 style={{ fontFamily: "Comfortaa" }}>
        Choose from our top collection
      </h1>

      <div className="catalogLG">
        {images.length === 0 && (
          <Fragment>
            <div>
              <Grid container spacing={1}>
                {Array.from({ length: 4 }, (i) => (
                  <Grid item xs={3}>
                    <Skeleton
                      variant="rectangular"
                      style={{
                        width: "22rem",
                        height: "25rem",
                        marginLeft: "0.5rem",
                      }}
                      animation="wave"
                    />
                    <Skeleton
                      height="8%"
                      width="80%"
                      style={{ marginLeft: "0.5rem" }}
                      animation="wave"
                    />
                    <Skeleton
                      height="5%"
                      width="95%"
                      style={{ marginLeft: "0.5rem" }}
                      animation="wave"
                    />
                  </Grid>
                ))}
              </Grid>
            </div>
          </Fragment>
        )}
        {images.map((i) => (
          <span style={{ marginTop: "-1.5rem" }}>
            <img
              alt="images"
              src={i.imageLink}
              style={{
                width: "22rem",
                height: "25rem",
                marginLeft: "1rem",
                marginTop: "3.5rem",
              }}
              className="imageContainer"
            />
            <span
              style={{
                position: "absolute",
                marginLeft: "-22rem",
                marginTop: "28.5rem",
              }}
            >
              <div
                style={{
                  width: "22rem",
                  textAlign: "left",
                }}
              >
                <span style={{ color: "black", fontFamily: "Comfortaa" }}>
                  {i.text}
                </span>
                <br />
                <b
                  style={{
                    color: "black",
                    fontFamily: "Comfortaa",
                  }}
                >
                  ₹{"  "}
                  {i.revisedPrice}
                </b>{" "}
                <s style={{ color: "#808080", fontFamily: "Comfortaa" }}>
                  {i.price}
                </s>
                &nbsp; &nbsp;
                <span
                  style={{
                    color: "red",
                    fontSize: "1.2rem",
                    fontFamily: "Comfortaa",
                  }}
                >
                  {i.stocks}
                </span>
              </div>
            </span>
          </span>
        ))}
      </div>

      <div className="catalogSM">
        <Grid container spacing={2}>
          {images.length === 0 && (
            <Fragment>
              {Array.from({ length: 4 }, () => (
                <Grid item xs={6}>
                  <Skeleton
                    variant="rectangular"
                    style={{ width: "100%" }}
                    height={150}
                    animation="wave"
                  />
                  <Skeleton height="8%" width="100%" animation="wave" />
                  <Skeleton height="12%" width="100%" animation="wave" />
                </Grid>
              ))}
            </Fragment>
          )}
        </Grid>

        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            style={{ marginTop: "1rem" }}
          >
            {images.map((i) => (
              <Grid item xs={6} style={{ marginTop: "-1.5rem" }}>
                <span>
                  <img
                    alt=""
                    src={i.imageLink}
                    style={{ width: "100%", height: "60%" }}
                  />
                  <div
                    style={{
                      textAlign: "left",
                    }}
                  >
                    <span style={{ color: "black", fontFamily: "Comfortaa" }}>
                      &nbsp;{i.text}
                    </span>
                    <br />
                    <b style={{ color: "black", fontFamily: "Comfortaa" }}>
                      &nbsp;₹{"  "}
                      {i.revisedPrice}
                    </b>{" "}
                    &nbsp;
                    <s style={{ color: "#808080", fontFamily: "Comfortaa" }}>
                      {i.price}
                    </s>
                    &nbsp; &nbsp;
                    <span
                      style={{
                        color: "red",
                        fontSize:
                          i.stocks === "stocks running out" ? "1rem" : "1.2rem",
                        fontFamily: "Comfortaa",
                      }}
                    >
                      {i.stocks}
                    </span>
                  </div>
                </span>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
      <div style={{ marginTop: "5rem" }}>
        <Typography style={{ fontFamily: "Comfortaa" }}>
          Sorry, we are currently out of stocks.
        </Typography>
        <Typography style={{ fontFamily: "Comfortaa" }}>
          Kindly, provide your email and pin. We will reach out to you
        </Typography>
        <div style={{ marginTop: "2rem" }}>
          <EmailSubmissions />
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
