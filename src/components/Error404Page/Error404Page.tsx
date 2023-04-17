import { Typography, useMediaQuery, useTheme } from '@mui/material';

import errorImage from '@assets/images/error404.svg';

import { StyledErrorContainer } from './style';

const Error404Page = (): JSX.Element => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <StyledErrorContainer>
      <img
        src={errorImage}
        alt="page not found"
        height={isTablet ? 400 : 500}
      />
      <Typography variant="h1" textAlign="center">
        OOPS! 404 User Not Found
      </Typography>
    </StyledErrorContainer>
  );
};

export default Error404Page;
