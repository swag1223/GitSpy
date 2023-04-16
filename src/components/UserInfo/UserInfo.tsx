import { Box, Typography } from '@mui/material';

import { FONT_WEIGHTS } from '@constants/theme';

import { StyledIconTypography } from './style';
import { UserInfoPropTypes } from './types';

const UserInfo = (props: UserInfoPropTypes) => {
  const { info, text, icon } = props;
  return (
    <Box textAlign="center">
      <StyledIconTypography color="primary.main" fontWeight={FONT_WEIGHTS.BOLD}>
        {icon}
        {info}
      </StyledIconTypography>
      <Typography variant="body2" color="primary.main">
        {text}
      </Typography>
    </Box>
  );
};

export default UserInfo;
