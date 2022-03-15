import { Button, Typography } from "@mui/material";
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
          <Typography style={{ color: "white" }}>I'm Footer</Typography>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
