import { Button } from "@mui/material";
import React, { Fragment, useState } from "react";
import "./Footer.css";
import EmailSubmission from "../Navbar/EmailSubmisson";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const handleModal = () => {
    setOpen(true);
  };
  return (
    <Fragment>
      <footer style={{ height: "15rem", backgroundColor: "black" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            style={{
              backgroundColor: "red",
              fontSize: "1.1rem",
              color: "white",
              width: "12rem",
              marginTop: "1rem",
            }}
            onClick={() => handleModal()}
            className="contact_us"
          >
            Contact us
          </Button>
        </div>
      </footer>
      <EmailSubmission open={open} setOpen={setOpen} />
    </Fragment>
  );
};

export default Footer;
