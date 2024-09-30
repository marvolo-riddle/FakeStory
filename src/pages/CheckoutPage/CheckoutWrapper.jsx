import CartProductsList from "../../components/Cart/CartProductsList";
import OrderingForm from "../../components/OrderingForm";
import {Box, Typography} from "@mui/material";
import {styles} from "./styles.js";
import {useSelector} from "react-redux";
import {useState, useEffect} from "react";

const CheckoutWrapper = ({discount, delivery, onSubmit}) => {

  const totalPrice = useSelector(state => state.cart.totalPrice);
  const [deliveryCount, setDeliveryCount] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const [discountCount, setDiscountCount] = useState(0);

  useEffect(() => {
    const calculateCart = (disc, sum, deliv) => {

      const discountAmount = (sum * (disc / 100)).toFixed(2);
      const totalAfterDiscount = (sum - discountAmount).toFixed(2);
      const sumDeliv = (totalAfterDiscount - (totalAfterDiscount - deliv)).toFixed(2);

      setDiscountCount(discountAmount);
      setDeliveryCount(sumDeliv);
      setFinalTotal(totalAfterDiscount - sumDeliv);
    };

    calculateCart(discount, totalPrice, delivery);
  }, [discount, totalPrice, delivery]);

  return (

      <Box>
        <Box sx={styles.checkoutWrapper}>

          <Box sx={styles.orderWrap}>
            <OrderingForm onSubmit={onSubmit}/>
          </Box>

          <Box sx={styles.listWrap}>

            <Box sx={styles.textWrap}>
              <Typography sx={styles.text}>
                <span style={styles.textLarge}> Your order</span>
              </Typography>

              <Typography sx={styles.text}>
                <span style={styles.textLarge}> {totalPrice} $ </span>
              </Typography>
            </Box>

            <Box sx={styles.list}>
              <CartProductsList isSmall={true}/>
            </Box>


            <Box sx={styles.textWrap}>
              <Typography sx={styles.text}>
                <span style={styles.textSmall}>choose gift packaging</span>
              </Typography>
            </Box>

            <Box>

              <Box sx={styles.textWrap}>
                <Typography sx={styles.text}>Total</Typography>
                <Typography sx={styles.text}>{totalPrice} $</Typography>
              </Box>

              <Box sx={styles.textWrap}>
                <Typography sx={styles.text}> Discount {discount}%</Typography>
                <Typography sx={styles.text}> - {discountCount} </Typography>
              </Box>

              <Box sx={styles.textWrap}>
                <Typography sx={styles.text}>Delivery {delivery}$</Typography>
                <Typography sx={styles.text}> - {deliveryCount}  </Typography>
              </Box>

              <Box sx={styles.textWrap}>
                <Typography sx={styles.text}>
                  <span style={styles.textLarge}>Total </span>
                </Typography>

                <Typography sx={styles.text}>
                  <span style={styles.textLarge}>{finalTotal} $</span>
                </Typography>
              </Box>

            </Box>
          </Box>


        </Box>
      </Box>

  )

}
export default CheckoutWrapper;
