import React from "react";
import { Box, List, ListItem, Divider, Button, Drawer } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { Mail, Inbox, MenuRounded } from "@material-ui/icons";
import { ListItemText } from "@mui/material";
import "./Sidebar.css";

const Sidebar = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Products", "About Us", "Contact", "Recommendations"].map(
          (text, index) => (
            <ListItem
              button
              key={text}
              style={{ color: "red", fontFamily: "Comfortaa" }}
            >
              <ListItemIcon style={{ color: "red" }}>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <div>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button
              style={{ color: "white" }}
              onClick={toggleDrawer(anchor, true)}
            >
              <MenuRounded />
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
