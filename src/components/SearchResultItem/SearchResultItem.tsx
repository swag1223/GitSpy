import { Avatar, Box, Typography } from '@mui/material';
import { StyledSearchResultItem } from './style';

const SearchResultItem = (props) => {
  const { option } = props;

  return (
    <StyledSearchResultItem key={option.id} {...props}>
      <Box display="flex" flexDirection="column">
        <Typography variant="body1">{option.login}</Typography>
        {/* <Typography variant="body2">{option.description}</Typography> */}
      </Box>
      <Avatar src={option.avatar_url} />
    </StyledSearchResultItem>
  );
};

export default SearchResultItem;
