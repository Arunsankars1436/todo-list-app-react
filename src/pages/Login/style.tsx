import { Grid } from '@mui/material';
import { styled } from 'styled-components';

const StyledGrid = styled(Grid)`
  height: 100vh;
`;
const LeftPanel = styled(Grid)(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.palette.primary.main,
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    height: '50vh',
  },
}));

const RightPanel = styled(Grid)(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.palette.secondary.main,
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    height: '50vh',
  },
}));
export { StyledGrid, LeftPanel, RightPanel };
