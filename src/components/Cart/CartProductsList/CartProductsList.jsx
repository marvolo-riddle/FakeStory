import CartProductItem from "../CartProductItem";
import {Box} from "@mui/material";
import {useSelector} from "react-redux";
import {styles} from './styles.js'
import {useDispatch} from "react-redux";
import {addToCart, removeFromCart, deleteFromCart} from "../../../redux/slices/cartSlice.js";

const CartProductsList = ({isSmall}) => {

  const cartProducts = useSelector(state => state.cart.products)
  const dispatch = useDispatch();


  const handleDelete = (item) => {
    dispatch(deleteFromCart(item));
  }

  const clickPlus = (item) => {
    dispatch(addToCart(item));
  }

  const clickMinus = (item) => {
    dispatch(removeFromCart(item));
  }

  const totalPrice = (price, count) => {
    if (typeof price !== 'number' || typeof count !== 'number') {
      throw new Error('Both price and count must be numbers');
    }
    const total = price * count;
    return total.toFixed(2);
  };


  return (
      <>
        {cartProducts && cartProducts.map((product) => (
            <Box sx={styles.container} key={product.id}>
              <CartProductItem
                  product={product}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  img={product.image}
                  quantity={product.quantity}
                  clickPlus={() => clickPlus(product)}
                  totalPrice={totalPrice(product.price, product.quantity)}
                  clickMinus={() => clickMinus(product)}
                  deleteProduct={() => handleDelete(product)}
                  isSmall={isSmall}
              />
            </Box>
        ))}
      </>

  )
}
export default CartProductsList;