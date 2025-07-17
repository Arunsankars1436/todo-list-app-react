import { InputBase, alpha } from '@mui/material';
import styled from 'styled-components';

const SearchContainer = styled.div`
  position: relative;
  border-radius: 8px;
  background-color: ${alpha('#ccc', 0.15)};
  &:hover {
    background-color: ${alpha('#ccc', 0.25)};
  }
  margin-left: 0;
  width: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
  padding: 4px 8px;
`;

const IconWrapper = styled.div`
  padding: 0 8px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
`;

const StyledInput = styled(InputBase)`
  color: inherit;
  flex: 1;
  padding-left: 8px;

  input {
    padding: 6px 0;
    width: 100%;
  }
`;

export { SearchContainer, StyledInput, IconWrapper };
