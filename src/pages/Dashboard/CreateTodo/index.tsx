import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  MenuItem,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  Checkbox,
  Select,
  InputLabel,
} from '@mui/material';

const tagsList = ['work', 'personal'];

const schema = Yup.object().shape({
  todo: Yup.string().required('Todo is required'),
  priority: Yup.string().oneOf(['high', 'low']).required(),
  tags: Yup.array().of(Yup.string()),
  completed: Yup.boolean(),
});

interface FormValues {
  todo: string;
  completed: boolean;
  tags: string[];
  priority: 'high' | 'low';
}

const initialValues: FormValues = {
  todo: '',
  completed: false,
  tags: [],
  priority: 'low',
};

const CreateTodo = ({
  open,
  onClose,
  onSubmit,
  setNewTodo,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: FormValues) => void;
  setNewTodo: () => void;
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create Todo</DialogTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          console.log('dsasdas', values);
          setNewTodo(values);
          onSubmit(values);
          resetForm();
          onClose();
        }}
      >
        {({ values, handleChange, setFieldValue, touched, errors }) => (
          <Form>
            <DialogContent dividers>
              <TextField
                label="Todo"
                name="todo"
                fullWidth
                style={{
                  marginBottom: '10px',
                }}
                variant="outlined"
                value={values.todo}
                onChange={handleChange}
                error={!!errors.todo && touched.todo}
                helperText={touched.todo && errors.todo}
              />

              <FormControl fullWidth>
                <InputLabel>Tags</InputLabel>
                <Select
                  multiple
                  name="tags"
                  value={values.tags}
                  onChange={handleChange}
                  renderValue={(selected) => (selected as string[]).join(', ')}
                >
                  {tagsList.map((tag) => (
                    <MenuItem key={tag} value={tag}>
                      <Checkbox checked={values?.tags?.includes(tag)} />
                      {tag}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Priority</FormLabel>
                <RadioGroup row name="priority" value={values.priority} onChange={handleChange}>
                  <FormControlLabel value="high" control={<Radio />} label="High" />
                  <FormControlLabel value="low" control={<Radio />} label="Low" />
                </RadioGroup>
              </FormControl>

              <FormControl fullWidth>
                <FormLabel>Completed</FormLabel>
                <ToggleButtonGroup
                  value={values.completed ? 'yes' : 'no'}
                  exclusive
                  onChange={(_, val) => setFieldValue('completed', val === 'yes')}
                >
                  <ToggleButton value="yes">Yes</ToggleButton>
                  <ToggleButton value="no">No</ToggleButton>
                </ToggleButtonGroup>
              </FormControl>
            </DialogContent>

            <DialogActions>
              <Button onClick={onClose}>Cancel</Button>
              <Button type="submit" variant="contained">
                Create
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default CreateTodo;
