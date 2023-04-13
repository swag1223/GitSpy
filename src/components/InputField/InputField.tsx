import { FormDataType } from '@containers/Login/types';
import { TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

type PropsTypes = {
  name: 'username' | 'password';
  label: string;
  type: string;
};
const InputField = (props: PropsTypes) => {
  const { name, label, type, control } = props;
  // const { control } = useForm<FormDataType>({
  //   defaultValues: {
  //     username: '',
  //     password: '',
  //   },
  // });
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: 'Field is required ' }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          type={type}
          label={label}
          onChange={onChange}
          value={value}
          error={!!error}
          helperText={error ? error.message : null}
        />
      )}
    />
  );
};

export default InputField;
