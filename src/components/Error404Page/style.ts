import { styled, Box } from '@mui/material';

const StyledErrorContainer = styled(Box)(
  ({
    theme: {
      breakpoints,
      spacing,
      palette: { common },
    },
  }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing(10),
    padding: spacing(10),
    height: '100%',
    width: '100%',
    backgroundColor: common.white,

    [breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: spacing(4),
    },
  })
);

export { StyledErrorContainer };
