import {styles} from './styles.js'
import {useSelector} from 'react-redux'
import {Box, Typography, Button} from '@mui/material'

const CartSummary = ({discount, handleOrderClick}) => {

  const amount = useSelector(state => state.cart.totalPrice)

  const discountCount = (amount, discount) => {
    return ((amount * discount) / 100).toFixed(2)
  }

  const totalAmount = (amount, discount) => {
    return (amount - (amount * discount) / 100).toFixed(2)
  }

  return (
      <Box sx={styles.container}>

        <Box sx={styles.wrapper}>
          <Typography sx={styles.text}>Order amount</Typography>
          <Typography sx={styles.text}>{amount}</Typography>
        </Box>

        <Box sx={styles.wrapper}>

          <Typography sx={styles.text}>
            <span style={styles.discount}>Discount {discount}% </span>
          </Typography>

          <Typography sx={styles.text}>
            <span style={styles.discount}>-{discountCount(amount, discount)}$</span>
          </Typography>
        </Box>

        <Box sx={styles.wrapper}>

          <Typography sx={styles.text}>
            <span style={styles.total}>Total amount</span>
          </Typography>

          <Typography sx={styles.text}>
            <span style={styles.total}>{totalAmount(amount, discount)}</span>
          </Typography>
        </Box>

        <Button onClick={handleOrderClick} sx={styles.btn}>Place an order</Button>
      </Box>
  )
}

export default CartSummary;