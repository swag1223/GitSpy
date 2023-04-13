import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { InputFieldPropsTypes } from './types';

const InputField = (props: InputFieldPropsTypes): JSX.Element => {
  const { name, label, type, control } = props;

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
