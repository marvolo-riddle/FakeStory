import ProductDetail from "../../components/Products/ProductDetail";
import {useParams, Link} from "react-router-dom";
import {Box, Typography} from "@mui/material";
import routeNames from "../../router/routeNames.js";
import {useGetSingleProductQuery} from "../../redux/slices/productsSlice.js";
import {styles} from './styles.js';
import {useDispatch} from "react-redux";
import {addToCart, toggleCart} from "../../redux/slices/cartSlice.js";

const ProductDetailWrapper = () => {

  const {id} = useParams();
  const {data: product, error, isLoading} = useGetSingleProductQuery(id);
  const dispatch = useDispatch();

  const handleBuyClick = (product) => {
    dispatch(addToCart(product));
    dispatch(toggleCart())
  };

  if (isLoading) return <Box>Loading product...</Box>;
  if (error) return <Box>Error loading product: {error.message}</Box>;

  return (
      <>
        <Box sx={styles.topWrap}>

          <Typography sx={styles.topText}>
            <Link style={styles.link} to={routeNames.homePage}>BULGARI</Link> /

            <Link style={styles.link}
                to={routeNames.categoryPage.replace(':categoryName', product.category)}>
              {product.category}
            </Link>
            /
            <Link style={styles.link} to={routeNames.productDetailPage.replace(':id', id)}>
            <span style={styles.span}>{product.title} </span>
          </Link>
          </Typography>

        </Box>
        <ProductDetail product={product} clickBuy={() => handleBuyClick(product)}/>
      </>

  );

}
export default ProductDetailWrapper