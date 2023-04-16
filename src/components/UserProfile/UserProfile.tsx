import { Link } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

import UserInfo from '@components/UserInfo/UserInfo';

import {
  StyledAvatar,
  StyledTypography,
  StyledUserCardContainer,
} from './style';
import { UserPropTypes } from './type';

const UserProfile = ({ data }: UserPropTypes): JSX.Element => {
  const {
    avatarUrl,
    name,
    login,
    email,
    bio,
    location,
    publicRepos,
    following,
    followers,
    blog,
    htmlUrl,
  } = data;

  return (
    <StyledUserCardContainer>
      <StyledAvatar src={avatarUrl} alt={name} />
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h2" color="secondary.dark">
          {login}
        </Typography>
        {name && (
          <Typography variant="h4" color="secondary.light">
            {name}
          </Typography>
        )}
        {email && (
          <StyledTypography variant="body2" color="secondary.main">
            {email}
          </StyledTypography>
        )}
        {bio && <Typography variant="body2">{bio}</Typography>}
        {location && (
          <StyledTypography variant="body2" color="secondary.main">
            {location}
          </StyledTypography>
        )}
      </Box>
      <Box display="flex" gap={10}>
        <UserInfo
          info={publicRepos}
          text="REPOS"
          icon={<BookOutlinedIcon fontSize="small" />}
        />
        <UserInfo
          info={following}
          text="FOLLOWING"
          icon={<SupervisorAccountOutlinedIcon fontSize="small" />}
        />
        <UserInfo
          info={followers}
          text="FOLLOWERS"
          icon={<PeopleOutlinedIcon fontSize="small" />}
        />
      </Box>
      <Box display="flex" gap={5}>
        {blog && (
          <Button component={Link} to={blog} target="_blank" variant="outlined">
            <LinkIcon fontSize="small" color="primary" />
            BLOG
          </Button>
        )}
        {htmlUrl && (
          <Button
            component={Link}
            to={htmlUrl}
            target="_blank"
            variant="outlined"
          >
            <GitHubIcon fontSize="small" color="primary" />
            VIEW GITHUB PROFILE
          </Button>
        )}
      </Box>
    </StyledUserCardContainer>
  );
};

export default UserProfile;
