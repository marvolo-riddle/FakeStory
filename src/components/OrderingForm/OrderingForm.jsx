import { useState } from "react";
import { useFormik } from "formik";
import { TextField, Box, Button, Typography } from "@mui/material";
import * as Yup from 'yup';
import { styles } from './styles.js';

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  secondName: Yup.string().required("Second name is required"),
  cityName: Yup.string().required("City is required"),
  countryName: Yup.string().required("StreetName is required"),
  postalCode: Yup.number().required("Code is required"),
  iban: Yup.number().required("iban is required"),
  bic: Yup.number().required("Bic is required"),
  cv: Yup.number().required("CV is required"),
});

const OrderingForm = ({onSubmit}) => {

  const [step, setStep] = useState(1); // Контролируем текущий шаг

  const formik = useFormik({
    initialValues: {
      firstName: '',
      secondName: '',
      number: '',
      cityName: '',
      countryName: '',
      postalCode: '',
      iban: '',
      bic: '',
      cv: ''
    },
    validationSchema,
    onSubmit: () => {
      onSubmit();
    }
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (

      <Box sx={styles.container}>
        <Typography sx={styles.title}>Fill in the order fields</Typography>

        {step === 1 && (
            <Box sx={styles.contactsWrap}>

              <Typography sx={styles.text}>1. Personal data</Typography>

              <form style={styles.form} onSubmit={formik.handleSubmit}>

                <TextField
                    label="First Name"
                    value={formik.values.firstName}
                    name="firstName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="Second Name"
                    value={formik.values.secondName}
                    name="secondName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="Number"
                    value={formik.values.number}
                    name="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    fullWidth
                    margin="normal"
                />

                <Button type="button" sx={styles.btn} onClick={handleNext}>
                  Next
                </Button>

              </form>
            </Box>
        )}

        {step === 2 && (
            <Box sx={styles.contactsWrap}>

              <Typography sx={styles.text}>2. Address data</Typography>

              <form style={styles.form} onSubmit={formik.handleSubmit}>

                <TextField
                    label="Country Name"
                    value={formik.values.countryName}
                    name="countryName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="City Name"
                    value={formik.values.cityName}
                    name="cityName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="Postal Code"
                    value={formik.values.postalCode}
                    name="postalCode"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    fullWidth
                    margin="normal"
                />

                <Button type="button" sx={styles.btn} onClick={handleNext}>
                  Next
                </Button>

                <Button type="button" sx={styles.btnBack} onClick={handleBack}>
                  Back
                </Button>

              </form>
            </Box>
        )}

        {step === 3 && (
            <Box sx={styles.contactsWrap}>

              <Typography sx={styles.text}>3. Payment</Typography>

              <form style={styles.form} onSubmit={formik.handleSubmit}>

                <TextField
                    label="IBAN"
                    value={formik.values.iban}
                    name="iban"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="BIC"
                    value={formik.values.bic}
                    name="bic"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="CV"
                    value={formik.values.cv}
                    name="cv"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    fullWidth
                    margin="normal"
                />

                <Button type="submit" sx={styles.btn} onClick={onSubmit}>
                  Submit
                </Button>

                <Button type="button" sx={styles.btnBack} onClick={handleBack}>
                  Back
                </Button>

              </form>
            </Box>
        )}

      </Box>

  );
};

export default OrderingForm;
