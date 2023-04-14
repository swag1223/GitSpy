import { styled, Box } from '@mui/material';

const StyledSearchResultItem = styled(Box)(
  ({
    theme: {
      typography: { pxToRem },
    },
  }) => ({
    padding: `${pxToRem(4)} ${pxToRem(16)}`,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between !important',
  })
);

export { StyledSearchResultItem };
