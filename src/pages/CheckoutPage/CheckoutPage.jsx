import MainLayout from "../../components/Layout";
import CheckoutWrapper from "./CheckoutWrapper.jsx";
import {Typography} from "@mui/material";
import {styles} from "./styles.js";
import {useState} from "react";

const CheckoutPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = () => {
    setIsOpen(true)
  }

  return (
      <MainLayout>
        {isOpen ?
            <Typography sx={styles.afterOrderText}>
              Order placed! Your order number is №34223
            </Typography>
            :
            <CheckoutWrapper discount={15} delivery={20} onSubmit={onSubmit}/>
        }
      </MainLayout>
  )
}
export default CheckoutPage;