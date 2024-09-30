import SearchBar from '../../UI/SearchBar'
import {Box, Badge} from '@mui/material'
import {styles} from './styles.js'
import { CiHeart } from "react-icons/ci";
import logo from '../../../../assets/logo.png'
import { FaUserLarge } from "react-icons/fa6";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import {useGetAllProductsQuery} from "../../../redux/slices/productsSlice.js";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import RouteNames from "../../../router/routeNames.js";
import {useDispatch} from "react-redux";
import {toggleCart} from "../../../redux/slices/cartSlice.js";
import {toggleOpen} from "../../../redux/slices/dialogSlice.js";
import routeNames from "../../../router/routeNames.js";
import Cookies from "js-cookie";

const MainHeader = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const favorites = useSelector(state => state.favorites.products);
  const cartProducts = useSelector(state => state.cart.products);
  const {data: products, isLoading, isError, error} = useGetAllProductsQuery();

  const openCartPopup = () => {
    dispatch(toggleCart())
  }

  const openAccount = () => {
    if (token) {
      navigate(routeNames.checkoutPage);
    } else {
      dispatch(toggleOpen())
    }
  }

  const totalCartProducts = cartProducts.reduce((acc, product) => acc + product.quantity, 0);

  if (isLoading) return <Box>Loading...</Box>;
  if (isError) return <Box>Error: {error.message}</Box>;

  return (
      <Box>

        <Box sx={styles.container}>
          <Box sx={styles.flexBox}>

            <Box sx={styles.searchBox}>
              <SearchBar products={products}></SearchBar>
            </Box>

            <Box sx={styles.logoBox}>
              <Link to={RouteNames.homePage}>
                <img src={logo} alt="Website Logo" style={styles.logo}/>
              </Link>
            </Box>

            <Box sx={styles.iconsBox}>

              <Box sx={styles.user}><FaUserLarge onClick={openAccount}/> </Box>

              <Badge badgeContent={favorites.length} color='secondary' sx={styles.badge}>
                <Link to={RouteNames.favoritesPage}>
                  < CiHeart style={styles.heart}/>
                </Link>
              </Badge>


              <Badge badgeContent={totalCartProducts} color='secondary' sx={styles.badge}>
                <PiShoppingCartSimpleLight style={styles.cart} onClick={openCartPopup}/>
              </Badge></Box>


          </Box>
        </Box>

      </Box>


  )
}


export default MainHeader;