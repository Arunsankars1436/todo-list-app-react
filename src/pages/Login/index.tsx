import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LeftPanel, RightPanel, StyledGrid } from './style';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <StyledGrid container>
      <LeftPanel size={{ xs: 12, sm: 12, md: 6 }}>
        <Typography variant="h3" fontWeight="bold" mt={2}>
          TODO
        </Typography>
        <Typography variant="subtitle1" mt={1}>
          Manage your tasks efficiently
        </Typography>
      </LeftPanel>
      <RightPanel size={{ xs: 12, sm: 12, md: 6 }}>
        <Box width="100%" maxWidth="400px" textAlign="center">
          <Typography variant="h4" mb={4}>
            Login
          </Typography>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </Box>
      </RightPanel>
    </StyledGrid>
  );
};

export default Login;
