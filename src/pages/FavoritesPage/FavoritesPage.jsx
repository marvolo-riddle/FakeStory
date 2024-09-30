import MainLayout from "../../components/Layout";
import ProductsList from "../../components/Products/ProductsList";
import FavoritesWrapper from "./FavoritesWrapper.jsx";
import {Typography} from "@mui/material";
import {styles} from './styles.js'
import {useSelector} from "react-redux";

const FavoritesPage = () => {
  const favorites = useSelector(state => state.favorites.products);

  return (
      <MainLayout>
        <FavoritesWrapper>
          {favorites.length === 0 ? (
              <Typography sx={styles.text}>Ваш список избранных товаров пуст.</Typography>
          ) : (
              <ProductsList products={favorites}/>
          )}
        </FavoritesWrapper>
      </MainLayout>
  )

}
export default FavoritesPage;