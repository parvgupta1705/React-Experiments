import { Card, CardContent, Typography } from "@mui/material";

export default function Home() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Home</Typography>
        <Typography mt={2}>
          This is Home page using Material UI.
        </Typography>
      </CardContent>
    </Card>
  );
}
