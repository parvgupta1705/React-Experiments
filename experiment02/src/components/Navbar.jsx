import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(90deg,#4f46e5,#22c55e)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            TechNova
          </Typography>

          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/projects">Projects</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit" component={Link} to="/analytics">Analytics</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}