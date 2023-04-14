import { Link } from 'react-router-dom';
// import { debounce } from 'lodash';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  Autocomplete,
  Button,
  InputAdornment,
  InputBase,
  styled,
  TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from '@components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { useGetSearchedUsersQuery } from '@services/githubUserApiSlice';
import SearchResultItem from '@components/SearchResultItem/SearchResultItem';
import { StyledTextField } from '@components/Searchbar/style';

const Navbar = (): JSX.Element => {
  // TODO :MOVE TO SEPARATE STYLE FILE

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
  // const debouncedSearchQuery = useDebounce(searchInput, 500);

  // Debounce search term so that it only gives us latest value ...
  // ... if searchTerm has not been updated within last 500ms.
  // The goal is to only have the API call fire when user stops typing ...
  // ... so that we aren't hitting our API rapidly.

  // const { data } = useGetSearchedUsersQuery(debouncedSearchQuery, {
  //   skip: debouncedSearchQuery === '',
  // });
  const { data } = useGetSearchedUsersQuery(searchInput);

  // if (error) return <>OOPS !!</>;
  // if (isLoading) return <>LOading...</>;
  // console.log(data);
  return (
    <Box sx={{ flexGrow: 1 }}>
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
            // open
            getOptionLabel={(option) => option.login}
            inputValue={searchInput}
            options={data ? data.items : []}
            noOptionsText="No User Found!!"
            renderOption={(props, option) => (
              <SearchResultItem {...props} option={option} />
            )}
            onInputChange={(e, newValue) => setSearchInput(newValue)}
            freeSolo
            // filterOptions={(x) => x}
            // isOptionEqualToValue={(option, value) =>
            //   option.login === value.login
            // }

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
                }}
              />
            )}
          />
          {/* <SearchBar
          
            getOptionLabel={(option) => option.login}
            inputValue={searchInput}
            options={data || []}
            noOptionsText="No User Found!!"
            renderOption={(props, option) => (
              <SearchResultItem {...props} option={option} />
            )}
            onInputChange={(e, newValue) => setSearchInput(newValue)}
            freeSolo
          /> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <Button variant="outlined" component={Link} to="/suggestions">
              Suggestions
            </Button>
            <Button variant="outlined" component={Link} to="/">
              PROFILE
            </Button>
            {/* <Button variant="outlined" component={Link} to="/login">
              Login
            </Button> */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
