// import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { Alert, Button, MenuItem, Snackbar, Stack } from "@mui/material";
import { useState } from "react";
import Header from "../../components/Header";

const roles = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manger",
    label: "Manger",
  },
  {
    value: "User",
    label: "User",
  },
];

function Form() {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data) => {
    console.log("form submitted", data);
    handleClick();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        px: "20px",
      }}
      mt={10}
    >
      <Header title="CREATE USER" subTitle="Create a New User Profile" />
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <TextField
          {...register("firstName", {
            required: true,
            pattern: {
              value: /^[A-Za-z]+$/i,
            },
          })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
          error={errors.firstName ? true : false}
          helperText={errors.firstName ? "This field is required" : ""}
        />
        <TextField
          {...register("lastName", {
            pattern: {
              value: /^[A-Za-z]+$/i,
            },
          })}
          error={errors.lastName ? true : false}
          helperText={errors.lastName ? "This field is required" : ""}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>
      <TextField
        {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
        label="Email"
        variant="filled"
        error={errors.email ? true : false}
        helperText={errors.email ? "Invalid email address" : ""}
      />
      <TextField
        {...register("phoneNumber", {
          required: {
            value: true,
          },
          pattern: /01\d+/,
        })}
        label="Phone Number"
        variant="filled"
        error={errors.phoneNumber}
        helperText={errors.phoneNumber ? "Invalid phone number" : ""}
      />
      <TextField
        {...register("address", { required: true })}
        label="Address"
        variant="filled"
        error={errors.address ? true : false}
        helperText={errors.address ? "Address is required" : ""}
      />
      <TextField {...register("address2")} label="Address 2" variant="filled" />
      <TextField
        {...register("role")}
        variant="filled"
        id="role-select"
        select
        label="Role"
        defaultValue="User" // React-hook-form will manage this
        error={!!errors.role}
        helperText={errors.role ? "Role selection is required" : ""}
      >
        {roles.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="contained" type="submit">
        Submit
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          Account created successfully
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Form;
