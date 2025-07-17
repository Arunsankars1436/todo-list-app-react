import { CircularProgress } from '@mui/material';
import { LoaderWrapper } from './style';

const Loader = () => (
  <LoaderWrapper
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
    width="100%"
  >
    <CircularProgress size={60} color="primary" />
  </LoaderWrapper>
);

export default Loader;
