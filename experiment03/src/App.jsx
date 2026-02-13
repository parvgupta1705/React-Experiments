import React, { useState } from "react";
import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";

import Home from "./pages/Home";
import About from "./pages/About";
import Section from "./pages/Section";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    if (page === "home") return <Home />;
    if (page === "about") return <About />;
    if (page === "section") return <Section />;
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }} variant="h6">
            MUI App
          </Typography>

          <Button color="inherit" onClick={() => setPage("home")}>
            Home
          </Button>

          <Button color="inherit" onClick={() => setPage("about")}>
            About
          </Button>

          <Button color="inherit" onClick={() => setPage("section")}>
            Section
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 4 }}>{renderPage()}</Box>
    </>
  );
}

export default App;