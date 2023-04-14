import { styled, TextField } from '@mui/material';

const StyledTextField = styled(TextField)(
  ({
    theme: {
      typography: { pxToRem },
      spacing,
    },
  }) => ({
    '& .MuiInputBase-root': {
      marginLeft: spacing(5),
      minWidth: pxToRem(300),
      // width: 'auto',
      // width: pxToRem(402),
      // boxShadow: shadows[2],
      padding: `${pxToRem(3)} ${pxToRem(15)}}`,
    },
  })
);

export { StyledTextField };
