import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import axios from "axios";
import "./Recommendations.css";

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
          <div className="loader" style={{ marginLeft: "48%" }} />
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
                <b style={{ color: "black", fontFamily: "Comfortaa" }}>
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
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            style={{ marginTop: "1rem" }}
          >
            {images.length === 0 && (
              <div
                className="loader"
                style={{ marginLeft: "42%", marginTop: "1rem" }}
              />
            )}

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
    </div>
  );
};

export default Recommendations;
