import CartProductsList from "./CartProductsList";
import {useSelector} from "react-redux";
import { TfiClose } from "react-icons/tfi";
import {Dialog, DialogContent, DialogTitle, Typography} from "@mui/material";
import {styles} from './styles.js'
import {closeCart} from "../../redux/slices/cartSlice.js";
import {useDispatch} from "react-redux";
import CartSummary from "./CartSummary";
import {Box} from "@mui/material";
import routeNames from "../../router/routeNames.js";
import {useNavigate} from "react-router-dom";

const CartPopup = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.cart.isCartOpen)

  const handleOrderClick = ()=>{
    navigate(routeNames.checkoutPage)
    handleClose()
  }

  const handleClose = () => {
    dispatch(closeCart());
  }

  return (
      <>
        {isOpen ?
            <>
              <Dialog o
                  nClose={handleClose}
                  open={isOpen}
                  maxWidth='xl'
                  fullWidth>

                <DialogTitle sx={styles.dialogTitle}>
                  <Typography sx={styles.text}>Cart</Typography>
                  <TfiClose onClick={handleClose} style={styles.icon}></TfiClose>
                </DialogTitle>

                <DialogContent sx={styles.dialogContent}>

                  <Box sx={styles.list}>
                    <CartProductsList isSmall={false}/>
                  </Box>

                  <Box sx={styles.sum}>
                    <CartSummary discount={15} handleOrderClick={handleOrderClick}/>
                  </Box>

                </DialogContent>

              </Dialog>
            </> : null}
      </>
  )
}

export default CartPopup