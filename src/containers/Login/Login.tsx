import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import cookies from 'browser-cookies';
import { useSnackbar } from 'notistack';

import { Button, CircularProgress, Typography } from '@mui/material';

import githubUserApi from '@services/githubUserApiSlice';
import { login } from '@store/user/userSlice';
import InputField from '@components/InputField';

import { StyledLoginContainer, StyledForm } from './style';
import { ErrorData, FormDataType } from './types';

const Login = () => {
  // HOOKS
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const methods = useForm<FormDataType>({
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const { setError, handleSubmit } = methods;

  // QUERY HOOKS
  const [trigger, result] = githubUserApi.useLazyAuthenticateUserByTokenQuery();

  const { isLoading } = result;

  /**
   * Submits form data for login
   */
  const onSubmit: SubmitHandler<FormDataType> = async (formData) => {
    // async request which may result error
    try {
      const response = (await trigger(
        formData.password
      ).unwrap()) as UserResponseType;

      if (response.username === formData.username) {
        dispatch(
          login({
            username: formData.username,
            isLoggedIn: true,
            token: formData.password,
          })
        );
        cookies.set('token', formData.password);
        navigate('/');
      } else {
        // handles invalid username error
        setError('username', { type: 'custom', message: 'Invalid Username !' });
      }
    } catch (e: unknown) {
      const { data } = e as Record<string, ErrorData>;
      // handle errors coming from github api request
      if ((e as Record<string, number>).status === 401) {
        setError('password', { type: 'custom', message: 'Invalid Password !' });
      } else {
        enqueueSnackbar(data.message, { variant: 'error' });
      }
    }
  };

  return (
    <StyledLoginContainer>
      <Typography
        variant="h2"
        sx={{ textAlign: 'center', marginBottom: '20px' }}
      >
        Login To GitSpy
      </Typography>
      <FormProvider {...methods}>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <InputField name="username" label="Username" type="text" />
          <InputField name="password" label="Password" type="password" />
          <Button variant="contained" type="submit" size="large">
            {isLoading ? <CircularProgress size={25} /> : 'Login'}
          </Button>
        </StyledForm>
      </FormProvider>
    </StyledLoginContainer>
  );
};

export default Login;
