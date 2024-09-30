import {Typography, Box} from "@mui/material";
import {styles} from './styles.js';

const FavoritesWrapper = ({children}) => {

  return(
      <>
        <Box sx={styles.discountBanner}>
          <Typography sx={styles.discountText}>
            Hurry up to use the promo code "marvolo" and get a 15% discount on your favorite products
          </Typography>
        </Box>

        <Box sx={styles.container}>
          <Box>{children}</Box>
        </Box>
      </>
  )
}

export default FavoritesWrapper;