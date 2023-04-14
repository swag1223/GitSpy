import { Autocomplete, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { StyledTextField } from './style';

const SearchBar = (props) => {
  const { ...restProps } = props;

  return (
    <Autocomplete
      {...restProps}
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
  );
};

export default SearchBar;
