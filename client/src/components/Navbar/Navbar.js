import React, { useEffect, Fragment, useState } from "react";
import { AppBar, Box, Toolbar, Typography, Container } from "@mui/material";

import Sidebar from "./Sidebar";
import "./Navbar.css";
import EmailSubmissions from "./EmailSubmisson";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [open, setOpen] = useState(false);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = ["About Us", "Contact Us", "Recommendations", "Reviews"];

  // const handlePageMove = (page) => {
  //   switch (page) {
  //     case "About Us":
  //       break;
  //     case "Contact":
  //       break;
  //     case "Recommendations":
  //       window.scrollTo(0, 1150);
  //       break;
  //     case "Reviews":
  //       window.scrollTo(0, 1750);
  //       break;
  //     default:
  //   }
  // };

  const handleSubmissionModal = (type) => {
    if (type === "Contact Us") {
      setOpen(true);
    }
  };

  return (
    <Fragment>
      <AppBar style={{ backgroundColor: "black" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img
              src="https://www.dropbox.com/s/4fvzhfrq9vm74sp/logo%20tshirt.png?dl=0&raw=1"
              alt="wmj_logo"
              style={{ height: "3.8rem", width: "3.8rem" }}
              className="wmj_logo_lg"
            />
            {/* <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              style={{
                color: "red",
                fontSize: "1.8rem",
                fontFamily: "Sofia",
                marginLeft: "-1rem",
              }}
            >
              WearMyজামা
            </Typography> */}

            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              style={{ marginLeft: "-1.5rem" }}
            >
              <Sidebar />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              style={{
                color: "red",
                fontSize: "1.2rem",
                fontFamily: "Comfortaa",
                marginLeft: "-2.5rem",
              }}
            >
              <img
                src="https://www.dropbox.com/s/4fvzhfrq9vm74sp/logo%20tshirt.png?dl=0&raw=1"
                alt="wmj_logo"
                style={{ height: "3.8rem", width: "3.8rem" }}
                className="wmj_logo_sm"
              />
              <span style={{ marginTop: "0.7rem", marginLeft: "0.5rem" }}>
                <b>WearMyজামা</b>
              </span>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <span
                  key={page}
                  onClick={() => handleSubmissionModal(page)}
                  sx={{ my: 2, color: "white", display: "block" }}
                  style={{
                    marginLeft: "2.2rem",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    fontFamily: "Comfortaa",
                  }}
                  className="navigationButtons"
                  // onClick={() => handlePageMove(page)}
                >
                  {page}
                </span>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
