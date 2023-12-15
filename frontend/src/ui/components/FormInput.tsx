import React from "react";
import {
  FormHelperText,
  Typography,
  FormControl,
  Input as _Input,
  InputProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

const Input = styled(_Input)`
  background-color: white;
  padding: 0.4rem 0.7rem;
`;

type IFormInputProps = {
  name: string;
  label: string;
} & InputProps;

const FormInput: FC<IFormInputProps> = ({ name, label, ...otherProps }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue=""
      name={name}
      render={({ field }) => (
        <FormControl fullWidth sx={{ mb: 2 }}>
          <Typography
            variant="body2"
            sx={{ color: "#2363eb", mb: 1, fontWeight: 500 }}
          >
            {label}
          </Typography>
          <Input
            {...field}
            fullWidth
            disableUnderline
            sx={{ borderRadius: "1rem" }}
            error={!!errors[name]}
            {...otherProps}
          />
          <FormHelperText error={!!errors[name]}>
<<<<<<< HEAD
<<<<<<< HEAD
            {/* {errors[name] ? errors[name].message : ""} */}
=======
            {errors[name] ? errors[name].message : ""}
>>>>>>> 6e7f044 (massive amount of  boilerplate)
=======
            {/* {errors[name] ? errors[name].message : ""} */}
>>>>>>> c068606 (react hook form boilerplate completed - first pass)
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default FormInput;
