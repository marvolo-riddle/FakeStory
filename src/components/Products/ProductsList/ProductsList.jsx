import React, {useState} from 'react';
import ProductItem from "../ProductItem";
import {Box, CircularProgress, Alert, Button} from "@mui/material";
import {styles} from './styles.js';
import {useDispatch} from "react-redux";
import {addFavorites, removeFavorites} from "../../../redux/slices/favoritesSlice.js";
import {addToCart} from "../../../redux/slices/cartSlice.js";
import {useSelector} from "react-redux";
import {toggleCart} from "../../../redux/slices/cartSlice.js";

const ProductsList = ({products, isLoading, isError, error}) => {

  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.products);

  const handleBuyClick = (product) => {
    dispatch(addToCart(product));
    dispatch(toggleCart())
  };

  const handleFavoriteClick = (product) => {
    const isFavorite = favorites.some(fav => fav.id === product.id);
    if (!isFavorite) {
      dispatch(addFavorites(product));
    } else {
      dispatch(removeFavorites(product));
    }
  };

  const [visibleCount, setVisibleCount] = useState(8);

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 8);
  };

  if (isLoading) {
    return (<CircularProgress/>);
  }
  if (isError) {
    return (
        <Alert severity="error">
          Error: {error.message}
          <Button onClick={refetch} variant="outlined">Try Again</Button>
        </Alert>
    );
  }

  return (

      <>
        <Box sx={styles.container}>

          {products && products.slice(0, visibleCount).map((product) => (

              <Box key={product.id} sx={styles.item}>

                <ProductItem
                    rating={product.rating.rate}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    img={product.image}
                    isFavorite={favorites.some(fav => fav.id === product.id)}
                    favoriteClick={() => handleFavoriteClick(product)}
                    buyClick={() => handleBuyClick(product)}
                />

              </Box>
          ))}

        </Box>

        {products && visibleCount < products.length && (
            <Box sx={styles.btnBox}>
              <Button sx={styles.btn}
                  onClick={handleShowMore}
                  variant="outlined">
                See more
              </Button>
            </Box>

        )}
      </>
  );
};

export default ProductsList;
