import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import cookies from 'browser-cookies';
import { useSnackbar } from 'notistack';

import { Button, CircularProgress, TextField, Typography } from '@mui/material';

import githubUserApi from '@services/githubUserApiSlice';
import { login } from '@store/user/userSlice';

// import InputField from '@components/InputField/InputField';
import { StyledLoginContainer, StyledForm } from './style';
import { ErrorData, FormDataType } from './types';

const Login = () => {
  // HOOKS
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { control, setError, handleSubmit } = useForm<FormDataType>({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  // QUERY HOOKS
  const [trigger, result] = githubUserApi.useLazyAuthenticateUserByTokenQuery();

  const { isLoading } = result;

  /**
   * @param formData Submits form data for login
   * @async
   * @param {FormDataType} formData - The form data to be submitted.
   * @returns {Promise<void>}
   */
  const onSubmit = async (formData: FormDataType): Promise<void> => {
    // async request which may result error
    try {
      const response = (await trigger(
        formData.password
      ).unwrap()) as UserApiResponseType;

      if (response.login === formData.username) {
        dispatch(login({ username: formData.username, isLoggedIn: true }));
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

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {/* <InputField name="username" label="Username" type="text" /> */}

        {/* <InputField name="password" label="Password" type="password" /> */}
        <Controller
          control={control}
          name="username"
          rules={{
            required: 'Username is required',
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Username"
              onChange={onChange}
              value={value}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{ required: 'Password is required' }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              type="password"
              label="Password"
              onChange={onChange}
              value={value}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />

        <Button variant="contained" type="submit" sx={{ padding: '10px' }}>
          {isLoading ? <CircularProgress size={25} /> : 'Login'}
        </Button>
      </StyledForm>
    </StyledLoginContainer>
  );
};

export default Login;
