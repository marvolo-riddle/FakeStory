import CategoriesList from "../../components/Categories";
import ProductsList from "../../components/Products/ProductsList";
import {Box, Typography} from "@mui/material";
import {useParams, Link} from "react-router-dom";
import {useGetSpecificCategoryQuery} from "../../redux/slices/productsSlice.js";
import BannerCategory from "../../components/UI/Banners/BannerCategory.jsx";


const CategoryWrapper = () => {

  const {categoryName} = useParams()
  const {data: products, isLoading, isError, error} = useGetSpecificCategoryQuery(categoryName);

  return(
      <>
        <BannerCategory category={categoryName}/>
        <CategoriesList/>

        <Box>
          <Typography></Typography>
        </Box>

        <ProductsList
            products={products}
            error={error}
            isLoading={isLoading}
            isError={isError}  />
      </>
  )
}
export default CategoryWrapper;