import { NavLink, useNavigate } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query';
import cookies from 'browser-cookies';
// import { debounce } from 'lodash';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  Autocomplete,
  Button,
  CircularProgress,
  InputAdornment,
  InputBase,
  styled,
  TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDebounce } from 'use-debounce';
import SearchBar from '@components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import githubUserApi, {
  useGetSearchedUsersQuery,
} from '@services/githubUserApiSlice';
// import { useGetSearchedUsersQuery } from '@services/githubUserApiSlice';
import SearchResultItem from '@components/SearchResultItem/SearchResultItem';
import { StyledTextField } from '@components/Searchbar/style';
import { logout } from '@store/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/index';

const Navbar = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const authToken = cookies.get('token');
  // console.log('auth:', authToken);
  const { token } = useSelector((state: RootState) => state.user.value);
  console.log(token);

  // const Search = styled('div')(({ theme }) => ({
  //   position: 'relative',
  //   border: '1px solid blue',
  //   borderRadius: theme.shape.borderRadius,
  //   marginRight: theme.spacing(2),
  //   marginLeft: 0,
  //   width: '100%',
  //   [theme.breakpoints.up('sm')]: {
  //     marginLeft: theme.spacing(3),
  //     width: 'auto',
  //   },
  // }));

  // const StyledInputBase = styled(InputBase)(({ theme }) => ({
  //   color: 'blue',
  //   '& .MuiInputBase-input': {
  //     padding: theme.spacing(1, 1, 1, 0),
  //     // vertical padding + font size from searchIcon
  //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  //     transition: theme.transitions.create('width'),
  //     width: '100%',
  //     [theme.breakpoints.up('md')]: {
  //       width: '20ch',
  //     },
  //   },
  // }));

  const [searchInput, setSearchInput] = useState('');

  // const [searchUserResults, setSearchUserResults] = useState([]);
  const [debouncedSearchQuery] = useDebounce(searchInput, 1000);

  // Debounce search term so that it only gives us latest value ...
  // ... if searchTerm has not been updated within last 500ms.
  // The goal is to only have the API call fire when user stops typing ...
  // ... so that we aren't hitting our API rapidly.

  const { data, isFetching } = useGetSearchedUsersQuery(
    debouncedSearchQuery || skipToken
  );

  // console.log(isLoading);

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white' }} elevation={1}>
      <Toolbar>
        <Typography variant="h4" noWrap color="primary">
          GITSPY
        </Typography>
        {/* <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}

        <Autocomplete
          forcePopupIcon={false}
          loading={isFetching}
          inputValue={searchInput}
          options={data ? data.items : []}
          getOptionLabel={(option: UserResponseType) => option.login}
          noOptionsText="No User Found!!"
          renderOption={(props, option) => (
            <SearchResultItem
              {...props}
              option={option}
              // onClick={handleSelectedOption}
            />
          )}
          onInputChange={(e, newValue) => {
            setSearchInput(newValue);
          }}
          onChange={(e, val, reason) => {
            // console.log(val);
            if (reason === 'selectOption') {
              navigate(`/${val?.login}`);
            }
          }}
          filterOptions={(x) => x}
          renderInput={(params) => (
            <StyledTextField
              {...params}
              placeholder="Search"
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <>
                    {isFetching ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />

        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <Button variant="outlined" component={NavLink} to="/suggestions">
            Suggestions
          </Button>
          {token && (
            <Button variant="outlined" component={NavLink} to="/">
              PROFILE
            </Button>
          )}
          {!token ? (
            <Button variant="outlined" component={NavLink} to="/login">
              Login
            </Button>
          ) : (
            <Button
              variant="outlined"
              onClick={() => {
                cookies.erase('token');
                navigate('/login');
                dispatch(logout());
              }}
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
