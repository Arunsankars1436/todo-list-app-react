import React, { useState, useMemo } from 'react';
import {
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import GridViewIcon from '@mui/icons-material/GridView';
import { FixedSizeList as List } from 'react-window';
import Header from '../../components/Header';
import { useTodos } from './hook';
import type { STasks } from '../../types/TodoList';
import Loader from '../../components/Loader';
import { AlarmOn, CheckCircleOutline } from '@mui/icons-material';
import CreateTodo from './CreateTodo';

const intialVlaue = { todo: '', completed: false, userId: 1000, tags: [], priority: '' };

const Dashboard: React.FC = () => {
  const {
    data: { todos },
    loading,
    handleCreate,
    handleDelete,
  } = useTodos();
  const [search, setSearch] = useState('');
  const [view, setView] = useState<'list' | 'grid'>('list');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newTodo, setNewTodo] = useState(intialVlaue);

  console.log('sasaasd', todos);
  const filteredTodos: STasks[] = useMemo(() => {
    return todos?.filter((e) => e?.todo?.toLowerCase()?.includes(search?.toLowerCase()));
  }, [search, todos]);

  const onCreate = (val = null) => {
    handleCreate(
      val
        ? { ...val }
        : {
            ...newTodo,
          },
    );
    setNewTodo(intialVlaue);
    setDialogOpen(false);
  };

  if (loading) {
    return <Loader />;
  }

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const todo: STasks = filteredTodos[index];
    return (
      <Box style={style} key={todo.id} px={2} py={1}>
        <Card>
          <CardContent>
            <Typography variant="h6">{todo.todo || ''}</Typography>
            <Grid container>
              <Typography variant="body2">
                {todo.completed ? (
                  <CheckCircleOutline titleAccess="Completed" color="primary" />
                ) : (
                  <AlarmOn />
                )}
              </Typography>
              <Button size="small">Edit</Button>
              <Button size="small" color="error" onClick={() => handleDelete(todo.id)}>
                Delete
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    );
  };

  return (
    <Box>
      <Header search={search} setSearch={setSearch} />
      <Box p={2} display="flex" justifyContent="space-between" alignItems="center">
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={(e, nextView) => nextView && setView(nextView)}
        >
          <ToggleButton value="list">
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton value="grid">
            <GridViewIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <Button variant="contained" onClick={() => setDialogOpen(true)}>
          Create Todo
        </Button>
      </Box>

      {view === 'list' ? (
        <List height={600} itemCount={filteredTodos.length} itemSize={100} width="100%">
          {Row}
        </List>
      ) : (
        <Grid container spacing={2} p={2}>
          {filteredTodos.map((todo) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={todo.id} style={{ maxWidth: '300px' }}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{todo.todo}</Typography>
                  <Typography variant="body2">
                    {todo.completed ? <CheckCircleOutline color="primary" /> : <AlarmOn />}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Edit</Button>
                  <Button size="small" color="error" onClick={() => handleDelete(todo.id)}>
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      <CreateTodo
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        setNewTodo={setNewTodo}
        onSubmit={(values) => {
          onCreate(values);
        }}
      />
    </Box>
  );
};

export default Dashboard;
