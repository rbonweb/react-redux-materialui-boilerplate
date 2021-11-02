import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import AdminSideBarRoutes from "../../routes/AuthenticatedRoutes/admin/AdminSideBarRoutes";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { PropTypes } from "prop-types";

const CollapsedList = ({ item, selectedIndex, handleListItemClick }) => {
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={item.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.children.map((item) => {
            return (
              <ListItemButton
                key={item.path}
                selected={selectedIndex === item.path}
                onClick={(event) => {
                  navigate(item.path);
                  handleListItemClick(event, item.path);
                }}
                sx={{ pl: 10 }}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

const Sidebar = () => {
  let navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <Toolbar
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img src="https://dummyimage.com/200x50/90caf9/fff" alt="Logo" />
      </Toolbar>
      <Divider />
      <List component="nav">
        {AdminSideBarRoutes.children.map((item) => {
          return item.children ? (
            <CollapsedList
              item={item}
              selectedIndex={selectedIndex}
              handleListItemClick={handleListItemClick}
            />
          ) : (
            <ListItemButton
              key={item.path}
              selected={selectedIndex === item.path}
              onClick={(event) => {
                navigate(item.path);
                handleListItemClick(event, item.path);
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          );
        })}
      </List>
    </div>
  );
};

CollapsedList.propTypes = {
  item: PropTypes.object,
  selectedIndex: PropTypes.string,
  handleListItemClick: PropTypes.func,
};

export default Sidebar;
