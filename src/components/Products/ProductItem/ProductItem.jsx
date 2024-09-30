import { styles } from './styles.js';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import routeNames from "../../../router/routeNames.js";

const ProductItem = ({img, title, description, price, rating, id, favoriteClick, isFavorite, buyClick}) => {

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  return (

      <Box sx={styles.boxContainer} key={id}>

        <Box sx={styles.imgBox}>

          <Link to={routeNames.productDetailPage.replace(':id', id)}>
            <img style={styles.img} src={img} alt='img'/>
          </Link>

          <IconButton sx={styles.icon} onClick={favoriteClick}>
            {isFavorite ? <FavoriteIcon fontSize='large'/> : <FavoriteBorderIcon fontSize='large'/>}
          </IconButton>

        </Box>

        <Link to={routeNames.productDetailPage.replace(':id', id)} style={styles.link}>
          <Typography sx={styles.title}>{truncateText(title, 20)}</Typography>
        </Link>

        <Link to={routeNames.productDetailPage.replace(':id', id)} style={styles.link}>
          <Typography sx={styles.description}>
            {truncateText(description, 90)}
          </Typography>
        </Link>

        <Box sx={styles.rating}>{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</Box>

        <Typography sx={styles.price}>{price + '$'}</Typography>

        <Button className="hoverButton" sx={styles.button} onClick={buyClick}>Buy</Button>
      </Box>
  );
}

export default ProductItem;
