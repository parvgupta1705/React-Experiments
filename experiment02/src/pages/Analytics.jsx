import { useContext, useMemo, useState } from "react";
import { AppContext } from "../context/AppContext";
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Stack
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterBar from "../components/FilterBar";

const Analytics = () => {
  const { state, dispatch } = useContext(AppContext);
  const [input, setInput] = useState("");

  const filteredTasks = useMemo(() => {
    return state.tasks.filter(task =>
      task.toLowerCase().includes(state.search.toLowerCase())
    );
  }, [state.tasks, state.search]);

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
        
        <Typography variant="h4" fontWeight="bold" mb={3}>
          Analytics Dashboard
        </Typography>

        <Stack direction="row" spacing={2} mb={3}>
          <Button
            variant="contained"
            onClick={() => dispatch({ type: "TOGGLE_THEME" })}
          >
            Toggle Theme ({state.theme})
          </Button>

          <FilterBar />
        </Stack>

        <Stack direction="row" spacing={2} mb={3}>
          <TextField
            fullWidth
            label="Enter task"
            value={input}
            onChange={e => setInput(e.target.value)}
          />

          <Button
            variant="contained"
            onClick={() => {
              if (!input.trim()) return;
              dispatch({ type: "ADD_TASK", payload: input });
              setInput("");
            }}
          >
            Add
          </Button>
        </Stack>

        <Typography variant="h6" mb={2}>
          Total Tasks: {filteredTasks.length}
        </Typography>

        <List>
          {filteredTasks.map((task, i) => (
            <ListItem
              key={i}
              secondaryAction={
                <IconButton
                  color="error"
                  onClick={() =>
                    dispatch({ type: "DELETE_TASK", payload: i })
                  }
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={task} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default Analytics;