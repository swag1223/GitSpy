import { Link } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

import UserInfo from '@components/UserInfo/UserInfo';

import { useState } from 'react';
import {
  StyledAvatar,
  StyledTypography,
  StyledUserCardContainer,
} from './style';
import { UserPropTypes } from './type';

const UserProfile = ({
  data,
  isPublic = false,
}: UserPropTypes): JSX.Element => {
  const {
    avatarUrl,
    name,
    login = 'GITHUB USER',
    email,
    bio,
    location,
    publicRepos,
    following,
    followers,
    blog,
    htmlUrl,
  } = data;

  const [follow, setFollow] = useState('FOLLOW');
  const [followersCount, setFollowersCount] = useState(followers);

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
          info={publicRepos || 0}
          text="REPOS"
          icon={<BookOutlinedIcon fontSize="small" />}
        />
        <UserInfo
          info={following || 0}
          text="FOLLOWING"
          icon={<SupervisorAccountOutlinedIcon fontSize="small" />}
        />
        <UserInfo
          info={followersCount || 0}
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
      {isPublic && (
        <Button
          variant="contained"
          onClick={(e) => {
            if ((e.target as HTMLElement).innerText === 'FOLLOW') {
              setFollow('UNFOLLOW');
              setFollowersCount(followersCount + 1);
            } else {
              setFollow('FOLLOW');
              setFollowersCount(followersCount - 1);
            }
          }}
        >
          {follow}
        </Button>
      )}
    </StyledUserCardContainer>
  );
};

export default UserProfile;
