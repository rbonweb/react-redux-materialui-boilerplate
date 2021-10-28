import React from "react";
import { Divider, List, ListItem, ListItemText, Toolbar } from "@mui/material";

const Sidebar = () => {
  return (
    <div>
      <Toolbar
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img src="https://dummyimage.com/200x50/3f51b5/fff" alt="Logo" />
      </Toolbar>
      <Divider />
      <List>
        <ListItem button key="dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
