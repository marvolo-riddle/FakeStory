import TopHeader from '../Headers/TopHeader';
import MainHeader from '../Headers/MainHeader';
import CheckoutHeader from "../Headers/CheckoutHeader";
import CategoriesList from '../Categories'
import CartPopup from "../Cart";
import Banner from '../UI/Banners';
import Footer from '../Footer';
import AuthorizationPopup from '../Authorization/AuthorizationPopup.jsx'
import {useLocation} from 'react-router-dom';
import {Box} from '@mui/material';

const MainLayout = ({children}) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isCheckoutPage = location.pathname === '/checkout';

  return (
      <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <TopHeader/>

        {isCheckoutPage ? <CheckoutHeader/> : <MainHeader/>}

        {isHomePage && (
            <>
              <Banner/>
              <CategoriesList/>
            </>
        )}

        <AuthorizationPopup/>
        <CartPopup></CartPopup>
        <Box sx={{flexGrow: 1}}>{children}</Box>
        <Footer/>
      </Box>
  )
}
export default MainLayout;