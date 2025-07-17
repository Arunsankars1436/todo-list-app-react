import { Box } from '@mui/material';
import styled from 'styled-components';

const LoaderWrapper = styled(Box)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

export { LoaderWrapper };
