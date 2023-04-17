import { styled, Box } from '@mui/material';

const StyledSuggestionsContainer = styled(Box)(
  ({ theme: { breakpoints, spacing } }) => ({
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing(10),
    padding: spacing(10),
    height: '100%',
    width: '100%',

    [breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: spacing(4),
    },
  })
);

export { StyledSuggestionsContainer };
