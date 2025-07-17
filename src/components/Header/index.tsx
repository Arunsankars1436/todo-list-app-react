import { Search, Logout } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import { SearchContainer, StyledInput, IconWrapper } from './style';
import SearchIcon from '@mui/icons-material/Search';
import ContrastIcon from '@mui/icons-material/Contrast';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { clearLocalstorage, isDarkTheme, setLocalStorage } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { DARK_THEME, LIGHT_THEME } from '../../utils/constant';

interface HeaderTypes {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const isDark: boolean = isDarkTheme();

const Header = ({ search, setSearch }: HeaderTypes) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearLocalstorage();
    navigate('/');
  };

  const handleThemeChange = () => {
    setLocalStorage('theme', isDark ? LIGHT_THEME : DARK_THEME);
    window.location.reload();
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          To-Do
        </Typography>
        <SearchContainer>
          <IconWrapper>
            <SearchIcon />
          </IconWrapper>
          <StyledInput
            placeholder={'Search'}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            inputProps={{ 'aria-label': 'search' }}
          />
        </SearchContainer>
        <Tooltip title={isDark ? 'Change Theme to Light' : 'Change theme to Dark'}>
          <IconButton color="inherit" onClick={handleThemeChange}>
            {isDark ? <DarkModeIcon /> : <ContrastIcon />}
          </IconButton>
        </Tooltip>
        <Tooltip title="Logout">
          <IconButton color="inherit" onClick={handleLogout}>
            <Logout />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
