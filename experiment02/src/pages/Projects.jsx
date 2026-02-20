import { Container, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardComponent from "../components/CardComponent";

export default function Projects() {
  return (
    <>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" color="black" gutterBottom>
          Our Projects
        </Typography>

        <Typography color="gray" sx={{ mb: 4 }}>
          Explore some featured projects built using modern technology.
        </Typography>

        <CardComponent />
      </Container>

    </>
  );
}
