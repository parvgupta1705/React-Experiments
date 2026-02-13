import { Box, Typography, Button } from "@mui/material";

export default function Section() {
  return (
    <Box>
      <Typography variant="h4">Section</Typography>

      <Button variant="contained" sx={{ mt: 2 }}>
        MUI Button
      </Button>
    </Box>
  );
}
