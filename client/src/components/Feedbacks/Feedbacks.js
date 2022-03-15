import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "./Feedbacks.css";
import { Button, Skeleton } from "@mui/material";

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [index, setIndex] = useState(0);

  const hanldeGetFeedbacks = () => {
    axios({
      url: `${process.env.REACT_APP_SERVER_URL}/api/users/getFeedbacks`,
      method: "GET",
    }).then((res) => {
      setFeedbacks(res.data.feedbacks);
    });
  };

  useEffect(() => {
    hanldeGetFeedbacks();
  }, []);

  return (
    <div style={{ textAlign: "center" }} className="feedback_section">
      <h1 style={{ fontFamily: "Comfortaa" }}>
        What people have to say about us
      </h1>
      {feedbacks.length === 0 && (
        <div
          style={{
            marginLeft: "25%",
            marginRight: "25%",
            marginBottom: "10rem",
            marginTop: "5rem",
          }}
        >
          <Skeleton
            animation="wave"
            style={{ marginLeft: "10%" }}
            height="8%"
            width="80%"
          />
          <Skeleton animation="wave" />
          <Skeleton
            animation="wave"
            style={{ marginLeft: "10%" }}
            height="8%"
            width="80%"
          />
        </div>
      )}

      <div style={{ marginLeft: "5%", marginRight: "5%" }}>
        {feedbacks.length !== 0 && (
          <Fragment>
            <span>
              <h3 style={{ fontFamily: "Zen Kurenaido" }}>
                {feedbacks[index].CLIENT}
              </h3>
              <p style={{ fontFamily: "Merriweather" }}>
                {feedbacks[index].FEEDBACK}
              </p>
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  style={{
                    color: i + 1 <= feedbacks[index].STARS ? "red" : "black",
                    fontSize: "2rem",
                  }}
                >
                  {i + 1 <= feedbacks[index].STARS}
                  &#9733;
                </span>
              ))}
            </span>
            <br />

            <span>
              {feedbacks.map((_, a) => (
                <Button
                  className="feedbackPagination"
                  style={{
                    fontSize: "3rem",
                    color: index === a ? "#BCBCBC" : "black",
                    cursor: "pointer",
                    border: "none",
                    backgroundColor: "white",
                  }}
                  onClick={() => setIndex(a)}
                  disableRipple
                >
                  .
                </Button>
              ))}
            </span>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Feedbacks;
