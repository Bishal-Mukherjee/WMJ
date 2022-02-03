import React, { useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
} from "@mui/material";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = ["About Us", "Contact", "Recommendations", "Reviews"];

  const handlePageMove = (page) => {
    switch (page) {
      case "About Us":
        break;
      case "Contact":
        break;
      case "Recommendations":
        window.scrollTo(0, 1150);
        break;
      case "Reviews":
        window.scrollTo(0, 1750);
        break;
      default:
    }
  };

  return (
    <div>
      <AppBar style={{ backgroundColor: "black" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
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
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Sidebar />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              style={{
                color: "red",
                fontSize: "1.8rem",
                fontFamily: "Sofia",
              }}
            >
              WearMyজামা
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <span
                  key={page}
                  // onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                  style={{
                    marginLeft: "2.2rem",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    fontFamily: "Comfortaa",
                  }}
                  className="navigationButtons"
                  onClick={() => handlePageMove(page)}
                >
                  {page}
                </span>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
