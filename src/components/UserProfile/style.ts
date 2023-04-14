import { COLORS } from '@constants/theme';
import { Avatar, Box, styled, Typography } from '@mui/material';

const StyledUserCardContainer = styled(Box)(
  ({
    theme: {
      shadows,
      shape: { borderRadius },
      spacing,
    },
  }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: shadows[2],
    padding: spacing(10),
    borderRadius,
    gap: spacing(5),
    backgroundColor: COLORS.GRAY[10],
  })
);

const StyledAvatar = styled(Avatar)(
  ({
    theme: {
      palette: {
        common: { white },
      },
      typography: { pxToRem },

      shadows,
    },
  }) => ({
    width: pxToRem(150),
    height: pxToRem(150),
    border: `4px solid ${white} `,
    boxShadow: shadows[1],
  })
);

const StyledTypography = styled(Typography)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export { StyledUserCardContainer, StyledAvatar, StyledTypography };
