import { Link } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

import { FONT_WEIGHTS } from '@constants/theme';

import { StyledAvatar, StyledUserCardContainer } from './style';
import { UserPropTypes } from './type';

const UserProfile = ({ data }: UserPropTypes) => {
  const {
    avatarUrl,
    name,
    username,
    email,
    bio,
    location,
    publicRepos,
    following,
    followers,
    blog,
    githubProfile,
  } = data;

  return (
    <StyledUserCardContainer>
      <StyledAvatar src={avatarUrl} alt={name} />

      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h2" color="secondary.dark">
          {username}
        </Typography>
        {name && (
          <Typography variant="h4" color="secondary.light">
            {name}
          </Typography>
        )}
        {email && (
          <Typography
            variant="body2"
            color="secondary.main"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            {email}
          </Typography>
        )}
        <Typography variant="body2">{bio}</Typography>
        {location && (
          <Typography
            variant="body2"
            color="secondary.main"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            {location}
          </Typography>
        )}
      </Box>

      <Box display="flex" gap="20px">
        <Box textAlign="center">
          <Typography
            color="primary.main"
            fontWeight={FONT_WEIGHTS.BOLD}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <BookOutlinedIcon fontSize="small" />
            {publicRepos}
          </Typography>
          <Typography variant="body2" color="primary.main">
            REPOS
          </Typography>
        </Box>
        <Box textAlign="center">
          <Typography
            // variant="body2"
            color="primary.main"
            fontWeight={FONT_WEIGHTS.BOLD}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SupervisorAccountOutlinedIcon fontSize="small" />
            {following}
          </Typography>
          <Typography variant="body2" color="primary.main">
            FOLLOWING
          </Typography>
        </Box>
        <Box textAlign="center">
          <Typography
            // variant="body2"
            color="primary.main"
            fontWeight={FONT_WEIGHTS.BOLD}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <PeopleOutlinedIcon fontSize="small" />
            {followers}
          </Typography>
          <Typography variant="body2" color="primary.main">
            FOLLOWERS
          </Typography>
        </Box>
      </Box>

      <Box display="flex" gap={5}>
        {blog && (
          <Button component={Link} to={blog} target="_blank" variant="outlined">
            <LinkIcon fontSize="small" color="primary" />
            BLOG
          </Button>
        )}
        {githubProfile && (
          <Button
            component={Link}
            to={githubProfile}
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
