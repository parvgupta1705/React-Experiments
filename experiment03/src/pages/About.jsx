import { Paper, Typography } from "@mui/material";

export default function About() {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4">About</Typography>
      <Typography mt={2}>
        About page rendered with MUI Paper.
      </Typography>
    </Paper>
  );
}
