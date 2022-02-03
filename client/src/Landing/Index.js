import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Index.css";
import { Grid } from "@mui/material";
import Recommendations from "../components/Recommendations/Recommendations";
// require("dotenv").config();
import axios from "axios";
import Footer from "../components/Footer/Footer";
import Feedbacks from "../components/Feedbacks/Feedbacks";

const Index = () => {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  const handleFetchImages = async () => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_SERVER_URL}/api/products/carouselImages`,
    }).then((res) => {
      setImages(res.data.images);
    });
  };

  useEffect(() => {
    handleFetchImages();
  }, []);

  setTimeout(() => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }, 3000);

  // console.log(document.getElementById("recommendations").scrollHeight);
  // console.log(document.getElementById("feedbacks").scrollHeight);

  return (
    <div>
      {images.length !== 0 && (
        <div
          className="slideshowLG"
          style={{ textAlign: "center", backgroundColor: "black" }}
        >
          <img
            alt=""
            style={{ width: "100%", height: "45rem", opacity: "0.4" }}
            src={images[index].imageLink}
          />
          <div className="centered">
            <h2
              style={{
                color: "red",
                fontSize: "2.5rem",
                fontFamily: "Sofia",
              }}
            >
              WearMyজামা
            </h2>
            <Typography
              style={{
                fontSize: "2.1rem",
                fontFamily: "Trirong",
                opacity: "1",
              }}
            >
              A simple solution for creating and selling products that engage
              your fans and help you monetize your content. No cost, no hassle,
              no risk.
            </Typography>
            <br />
            <Button
              style={{
                backgroundColor: "red",
                fontSize: "1.5rem",
                color: "white",
                width: "15rem",
              }}
            >
              Buy Now
            </Button>
          </div>
        </div>
      )}

      {images.length !== 0 && (
        <div
          className="slideshowSM"
          style={{ textAlign: "center", backgroundColor: "black" }}
        >
          <img
            alt=""
            style={{ width: "100%", height: "45rem", opacity: "0.4" }}
            src={images[index].imageLink}
          />
          <div className="centered">
            <h2
              style={{
                color: "red",
                fontSize: "2.5rem",
                fontFamily: "Sofia",
              }}
            >
              WearMyজামা
            </h2>
            <Typography
              style={{
                fontSize: "1.8rem",
                fontFamily: "Trirong",
              }}
            >
              A simple solution for creating and selling products that engage
              your fans and help you monetize your content. No cost, no hassle,
              no risk.
            </Typography>
            <br />
            <Button
              style={{
                backgroundColor: "red",
                fontSize: "1rem",
                color: "white",
              }}
            >
              Buy Now
            </Button>
          </div>
        </div>
      )}

      {/* 1st banner */}
      <div
        className="first_bannerLG"
        style={{
          backgroundColor: "#EDEFF3",
          height: "25rem",
          margin: "4rem",
        }}
      >
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <img
              alt=""
              style={{ width: "75%", height: "20rem", margin: "1rem" }}
              src="https://www.dropbox.com/s/octejah3ry28vgv/dog-2605020_960_720-removebg-preview.png?dl=0&raw=1"
            />
          </Grid>
          <Grid item xs={8} style={{ marginTop: "0.5rem" }}>
            <p
              style={{
                fontSize: "3rem",
                fontWeight: "900",
                marginLeft: "-2rem",
                fontFamily: "Comfortaa",
              }}
            >
              Discover Creators and their <span> products </span>
            </p>
            <Button
              style={{
                backgroundColor: "black",
                color: "red",
                marginLeft: "5rem",
                fontSize: "1rem",
                width: "30rem",
              }}
            >
              Explore
            </Button>
          </Grid>
        </Grid>
      </div>
      <div
        className="first_bannerSM"
        style={{
          height: "20rem",
          marginTop: "2rem",
          margin: "1rem",
        }}
      >
        <Grid container columns={16}>
          <Grid item xs={16} className="first_bannerSM1">
            <img
              alt=""
              style={{ width: "100%", height: "110%" }}
              src="https://www.dropbox.com/s/octejah3ry28vgv/dog-2605020_960_720-removebg-preview.png?dl=0&raw=1"
            />
            <div className="first_bannerSM1Text">
              <p
                style={{
                  fontSize: "250%",
                  fontWeight: "900",
                  fontFamily: "Comfortaa",
                  color: "black",
                  textAlign: "revert",
                }}
              >
                Discover Creators and their products
              </p>
              <Button
                style={{
                  fontSize: "1rem",
                  width: "120%",
                  marginTop: "-2.5rem",
                  fontFamily: "Mochiy Pop P One",
                  backgroundColor: "black",
                  color: "red",
                }}
              >
                Explore
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>

      <div style={{ textAlign: "center", marginTop: "7rem" }}>
        <Recommendations />
      </div>

      <div id="feedbacks">
        <Feedbacks />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
