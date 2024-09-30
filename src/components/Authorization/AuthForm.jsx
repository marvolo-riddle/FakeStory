import {useFormik} from "formik";
import {TextField, Box, Button, Typography} from "@mui/material";
import * as Yup from 'yup';
import {styles} from './styles.js';


const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
})

const AuthForm = ({onSubmit}) => {

  const formik = useFormik({
    initialValues: {
      username: 'mor_2314',
      password: '83r5^_',
    },
    validationSchema,
    onSubmit: (values, actions) => {
      onSubmit(values)
    }
  })

  return (

      <Box sx={styles.container}>

        <Typography sx={styles.text}>Please log in to your account</Typography>

        <form style={styles.form} onSubmit={formik.handleSubmit}>
          <TextField
              label="Username"
              value={formik.values.username}
              name="username"
          />
          <TextField
              label="Password"
              value={formik.values.password}
              type="password"
              name="password"
          />
          <Button type='submit' sx={styles.btn}>Log In</Button>
        </form>

      </Box>

  )
}
export default AuthForm;