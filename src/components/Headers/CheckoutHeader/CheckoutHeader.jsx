import {Box} from '@mui/material'
import {styles} from './styles.js'
import { CiLogin } from "react-icons/ci";
import logo from '../../../../assets/logo.png'
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import routeNames from "../../../router/routeNames.js";
import {logOut} from "../../../redux/slices/authSlice.js";

const CheckHeader = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("cart");
    localStorage.removeItem("favorites");
    dispatch(logOut());
    navigate(routeNames.homePage);
  };

  return (
      <Box>

        <Box sx={styles.container}>

          <Box sx={styles.flexBox}>

            <Box sx={styles.linkBox}>
              <Link style={styles.link} to={routeNames.favoritesPage}>
                {'<'} continue shopping
              </Link>
            </Box>

            <Box sx={styles.logoBox}>
              <Link to={routeNames.homePage}>
                <img src={logo} alt="Website Logo" style={styles.logo}/>
              </Link>
            </Box>

            <Box sx={styles.iconBox}>
              <Box sx={styles.logOut}>
                <CiLogin onClick={handleLogOut}/>
              </Box>
            </Box>

          </Box>
        </Box>

      </Box>



  )
}


export default CheckHeader;