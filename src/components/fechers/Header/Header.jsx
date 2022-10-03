import * as React from "react";
import { AppBar, Toolbar, Box, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <AppBar position="static" className="appBar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            <Button sx={{ my: 2, color: "white", display: "block" }}><Link to="/">Home</Link></Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}><Link to="/table">Table</Link></Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

