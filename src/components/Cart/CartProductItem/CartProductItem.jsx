import {Box, Typography} from '@mui/material';
import {styles} from './styles.js';
import QuantityControl from '../../UI/QuantityControl';
import {RiDeleteBinLine} from "react-icons/ri";
import {Link} from 'react-router-dom';
import routeNames from '../../../router/routeNames.js';


const CartProductItem = ({product, clickPlus, totalPrice, clickMinus, deleteProduct, isSmall}) => {

  const dynamicStyles = {
    img: {
      ...styles.img,
      width: isSmall ? '40px' : '100px',
    },
    title: {
      ...styles.title,
      fontSize: isSmall ? '1.2rem' : '1.4rem',
    },
    description: {
      ...styles.description,
      display: isSmall ? 'none' : 'block'
    },
    productDetails: {
      ...styles.productDetails,
      ...(isSmall && {height: '6rem'}),
      gap: isSmall ? '1rem' : '3rem',
    },
    descriptionWrap: {
      ...styles.descriptionWrap,
      padding: isSmall ? '0 0.5rem' : '0 2rem',
    }
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  return (

      <Box sx={styles.container} key={product.id}>

        <Box sx={dynamicStyles.productDetails}>

          <Box sx={styles.product}>

            <Box sx={styles.imgWrap}>

              <Link
                  target='_blank'
                  sx={styles.link}
                  to={routeNames.productDetailPage.replace(':id', product.id)}>
                <img style={dynamicStyles.img} src={product.image} alt="product"/>
              </Link>

            </Box>

            <Box sx={dynamicStyles.descriptionWrap}>
              <Link
                  target='_blank'
                  sx={styles.link}
                  to={routeNames.productDetailPage.replace(':id', product.id)}
                  style={styles.link}>

                <Typography sx={dynamicStyles.title}>
                  {truncateText(product.title, 40)}
                </Typography>

                <Typography sx={dynamicStyles.description}>
                  {truncateText(product.description, 50)}
                </Typography>
              </Link>
            </Box>

          </Box>

          <Box>
            <QuantityControl quantity={product.quantity} id={product.id} clickPlus={clickPlus} clickMinus={clickMinus}/>
          </Box>
        </Box>

        <Box sx={styles.total}>
          <Typography sx={styles.price}>{totalPrice}$</Typography>
          <RiDeleteBinLine onClick={deleteProduct} style={styles.icon}/>
        </Box>

      </Box>
  );
}

export default CartProductItem;
