import { Typography, useMediaQuery, useTheme } from '@mui/material';

import progressImage from '@assets/images/suggestions.svg';

import { StyledSuggestionsContainer } from './style';

const Suggestions = (): JSX.Element => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <StyledSuggestionsContainer>
      <img
        src={progressImage}
        alt="Coming soon"
        height={isTablet ? 200 : 300}
      />
      <Typography variant="h1" textAlign="center">
        COMING SOON!
      </Typography>
    </StyledSuggestionsContainer>
  );
};

export default Suggestions;
