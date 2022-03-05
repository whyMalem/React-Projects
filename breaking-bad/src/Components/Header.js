import React from "react";
import { AppBar, Box, InputBase, makeStyles, Toolbar } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import logo from "../assests/logo.png";

const useStyle = makeStyles({
  image: {
    width: 100,
  },
  header: {
    padding: 10,
    background: "#000",
  },
  search: {
    background: "rgba(255,255,255,.15)",
    marginLeft: 100,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    padding: 10,
  },
  input: {
    color: "#fff",
    fontSize: 18,
    // margin: "0 50px",
  },
  searchIcon: {
    color: "cyan",
    marginRight: "20px",
    fontSize: 26,
  },
});

const Header = ({ setText }) => {
  const classes = useStyle();
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <img src={logo} alt="logo" className={classes.image} />
        <Box className={classes.search}>
          <Search className={classes.searchIcon} />
          <InputBase
            className={classes.input}
            placeholder="Search by name..."
            onChange={(e) => setText(e.target.value)}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
