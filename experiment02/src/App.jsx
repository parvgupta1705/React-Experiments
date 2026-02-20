import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext, useMemo } from "react";
import { AppContext } from "./context/AppContext";

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Analytics from "./pages/Analytics";

function App() {
  const { state } = useContext(AppContext);

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: state.theme
      }
    }),
    [state.theme]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;