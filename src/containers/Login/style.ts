import { Box, styled } from '@mui/material';

const StyledLoginContainer = styled(Box)(
  ({
    theme: {
      typography: { pxToRem },
      palette: { common },
      shadows,
      shape: { borderRadius },
    },
  }) => ({
    backgroundColor: common.white,
    boxShadow: shadows[2],
    padding: pxToRem(50),
    borderRadius,
  })
);

const StyledForm = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '15px',
}));

export { StyledLoginContainer, StyledForm };
